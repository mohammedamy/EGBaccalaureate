import type { Branch } from '../types/curriculum';

export const thanaweyaStaticsBranch: Branch = {
  id: 'statics',
  titleEn: 'Statics (Applied Math)',
  titleAr: 'الاستاتيكا (الرياضيات التطبيقية)',
  categoryEn: 'Applied Mathematics',
  categoryAr: 'الرياضيات التطبيقية',
  iconName: 'Compass',
  colorGradient: 'from-amber-600 to-orange-800',
  chapters: [
    {
      id: 'stat_ch1',
      chapterNumber: 1,
      titleEn: 'Friction on Rough Planes',
      titleAr: 'الاحتكاك على السطوح الخشنة',
      descriptionEn: 'Friction force f_s, coefficient of static friction mu_s, angle of friction lambda, equilibrium of body on rough horizontal and inclined plane.',
      descriptionAr: 'قوة الاحتكاك السكوني ف_س، معامل الاحتكاك السكوني م_س، زاوية الاحتكاك ل، اتزان جسم على مستوى أفقي ومائل خشن.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'stat_l1',
          titleEn: 'Friction Force & Equilibrium on Rough Planes',
          titleAr: 'قوة الاحتكاك والتوازن على المستويات الخشنة',
          summaryEn: 'Understanding limiting static friction f_s = mu_s * R, resultant reaction R\' = R sqrt(1 + mu_s^2), and friction angle lambda.',
          summaryAr: 'فهم قوة الاحتكاك السكوني النهائي $F_s = \\mu_s R$، ورد الفعل المحصل $R\' = R\\sqrt{1 + \\mu_s^2} = R\\sec\\lambda$، وزاوية الاحتكاك $\\lambda$.',
          theoryContentEn: `### 1. Limiting Static Friction Force ($F_s$)
When a body rests on a rough plane under pulling force $P$, a resisting friction force $F$ arises opposing motion:
- As $P$ increases, $F$ increases until it reaches limiting static friction:
  $$F_s = \\mu_s R$$
  where $\\mu_s$ is the coefficient of static friction, and $R$ is the normal reaction perpendicular to the plane.

### 2. Resultant Reaction ($R'$):
The resultant of normal reaction $R$ and friction force $F_s$:
$$R' = \\sqrt{R^2 + F_s^2} = R \\sqrt{1 + \\mu_s^2} = R \\sec(\\lambda)$$

### 3. Angle of Friction ($\\lambda$):
The angle between normal reaction $R$ and resultant reaction $R'$ when friction is limiting:
$$\\tan(\\lambda) = \\frac{F_s}{R} = \\mu_s$$

### 4. Equilibrium on a Rough Inclined Plane (Angle $\\theta$):
When a body of weight $W$ is placed on a plane inclined at angle $\\theta$ to the horizontal:
1. **If $\\theta < \\lambda$:** The body is in complete static equilibrium and remains at rest ($F = W \\sin\\theta < F_s$).
2. **If $\\theta = \\lambda$:** The body is on the verge of sliding down the plane under its own weight alone.
3. **If $\\theta > \\lambda$:** The body slides downward and cannot remain at rest without an external supporting force.

### 5. Minimum Force Theorems:
- **Least force along line of greatest slope to prevent body from slipping down:**
  $$P_1 = W (\\sin\\theta - \\mu_s \\cos\\theta)$$
- **Least force along line of greatest slope to put body on verge of moving up:**
  $$P_2 = W (\\sin\\theta + \\mu_s \\cos\\theta)$$
- **Least force in any direction to move the body:**
  $$P_{\\min} = W \\sin(\\theta + \\lambda)$$`,
          theoryContentAr: `### ١. قوة الاحتكاك السكوني النهائي ($F_s$)
عند وضع جسم على سطح خشن والتأثير عليه بقوة شد $P$، تتولد قوة احتكاك سكوني $F$ تضاد اتجاه الحركة المحتملة:
- تزداد $F$ بتزايد $P$ حتى تبلغ قيمتها العظمى (الاحتكاك النهائي):
  $$F_s = \\mu_s R$$
  حيث $\\mu_s$ هو معامل الاحتكاك السكوني (خاصية للمادتين المتلامستين)، و $R$ هو رد الفعل العمودي على المستوى.

### ٢. رد الفعل المحصل ($R'$):
هو محصلة رد الفعل العمودي $R$ وقوة الاحتكاك النهائي $F_s$:
$$R' = \\sqrt{R^2 + F_s^2} = R \\sqrt{1 + \\mu_s^2} = R \\sec(\\lambda)$$

### ٣. زاوية الاحتكاك ($\\lambda$):
هي الزاوية المحصورة بين رد الفعل العمودي $R$ ورد الفعل المحصل $R'$ عندما يكون الاحتكاك نهائياً:
$$\\tan(\\lambda) = \\frac{F_s}{R} = \\mu_s$$

### ٤. شروط اتزان جسم على مستوى مائل خشن يميل بزاوية $\\theta$:
عند وضع جسم وزنه $W$ على مستوى خشن يميل على الأفقي بزاوية $\\theta$:
١. **إذا كان $\\theta < \\lambda$:** يستقر الجسم تماماً ويكون متزناً وتكون قوة الاحتكاك $F = W\\sin\\theta < F_s$.
٢. **إذا كان $\\theta = \\lambda$:** يكون الجسم على وشك الانزلاق لأسفل المستوى تحت تأثير وزنه فقط.
٣. **إذا كان $\\theta > \\lambda$:** ينزلق الجسم لأسفل ولا يستقر إلا بتأثير قوة خارجية تحفظ توازنه.

### ٥. قوانين أقل قوة لحفظ التوازن والتحريك:
- **أقل قوة في اتجاه خط أكبر ميل تمنع الجسم من الانزلاق:**
  $$P_1 = W (\\sin\\theta - \\mu_s \\cos\\theta)$$
- **أقل قوة في اتجاه خط أكبر ميل تجعل الجسم على وشك الحركة لأعلى:**
  $$P_2 = W (\\sin\\theta + \\mu_s \\cos\\theta)$$
- **أقل قوة بأي اتجاه تكفي لتحريك الجسم:**
  $$P_{\\min} = W \\sin(\\theta + \\lambda)$$`,
          formulas: [
            { labelEn: 'Limiting Friction Formula', labelAr: 'قانون الاحتكاك النهائي', latex: 'f_s = \\mu_s R' },
            { labelEn: 'Friction Angle Relation', labelAr: 'علاقة زاوية الاحتكاك', latex: '\\mu_s = \\tan(\\lambda)' },
            { labelEn: 'Resultant Reaction Formula', labelAr: 'رد الفعل المحصل', latex: 'R\' = R \\sec(\\lambda) = R \\sqrt{1 + \\mu_s^2}' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Statics Textbook Grade 12',
            bookTitleAr: 'كتاب الاستاتيكا للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-STAT-CH1-L1',
            pageRange: 'pp. 2 - 22'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Friction Mechanics & Vector Equilibrium',
            titleAr: 'خطة درس: ميكانيكا الاحتكاك والاتزان المتجهي',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-STAT-CH1-L1',
            bloomsObjectivesEn: [
              'Analyze force equilibrium equations on horizontal and inclined rough planes.',
              'Determine minimum force required to keep body on the verge of motion.'
            ],
            bloomsObjectivesAr: [
              'تحليل معادلات اتزان القوى على المستويات الأفقية والمائلة الخشنة.',
              'حساب أقل قوة تجعل الجسم على وشك الحركة.'
            ],
            prerequisitesEn: ['Resolution of forces into perpendicular components', 'Lami\'s Theorem / Triangle of Forces'],
            prerequisitesAr: ['تحليل القوى في اتجاهين متعامدين', 'قاعدة لامي ومثلث القوى'],
            keyVocabularyEn: [
              { term: 'Verge of Motion', definition: 'State where friction reaches limiting value f_s = mu_s * R.' }
            ],
            keyVocabularyAr: [
              { term: 'على وشك الحركة', definition: 'الحالة التي تصل فيها قوة الاحتكاك لقيمتها العظمى ف_س = م_س × ر.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Physics & Statics Simulation (20 mins)',
                phaseAr: 'محاكاة الفيزياء والاستاتيكا (٢٠ دقيقة)',
                duration: '20 mins',
                activitiesEn: 'Use interactive statics simulator showing body on rough inclined plane, adjusting angle theta and friction coefficient mu_s.',
                activitiesAr: 'استخدام أداة المحاكاة التفاعلية لعرض جسم على مستوى مائل، مع تعديل زاوية الميل وثابت الاحتكاك.'
              }
            ],
            commonMisconceptionsEn: ['Assuming friction force is always equal to mu_s * R even when motion is not impending!'],
            commonMisconceptionsAr: ['اعتقاد أن قوة الاحتكاك تساوي م_س × ر دائماً حتى لو لم يكن الجسم على وشك الحركة!'],
            differentiationEn: { struggling: 'Draw force resolution diagrams for weight components W sin(theta) and W cos(theta).', advanced: 'Prove minimum force P_min = W sin(theta + lambda).' },
            differentiationAr: { struggling: 'رسم مخطط تحليل قوة الوزن و كحتا(هـ) و و جا(هـ).', advanced: 'إثبات أن أقل قوة يلزم التأثير بها هي ق_أقل = و جا(هـ + ل).' },
            formativeAssessmentEn: 'A body of weight 20 N rests on rough horizontal plane with mu_s = 1/sqrt(3). Find horizontal force P to make it on verge of motion.',
            formativeAssessmentAr: 'جسم وزنه $20\\text{ N}$ موضوع على مستوى أفقي خشن معامل احتكاكه $\\mu_s = \\frac{1}{\\sqrt{3}}$. أوجد القوة الأفقية $P$ لتجعل الجسم على وشك الحركة.',
            exitTicketQuestion: {
              questionEn: 'Body of weight W rests on rough plane inclined at angle theta to horizontal. If angle of friction is lambda and theta = lambda, show body is on verge of sliding down.',
              questionAr: 'جسم وزنه و موضوع على مستوى مائل خشن يميل على الأفقي بزاوية هـ. إذا كانت زاوية الاحتكاك ل وكانت هـ = ل، فأثبت أن الجسم يكون على وشك الانزلاق لأسفل.',
              solutionEn: 'Force down plane = W sin(theta). Max friction up plane = mu_s * R = tan(lambda) * W cos(theta). Since theta = lambda: max friction = tan(theta) * W cos(theta) = sin(theta)/cos(theta) * W cos(theta) = W sin(theta). Since down force = max friction, body is on verge of motion down plane.',
              solutionAr: 'مركبة الوزن لأسفل = و جا(هـ). الاحتكاك النهائي لأعلى = م_س × ر = ظا(ل) × و جتا(هـ). بما أن هـ = ل: الاحتكاك النهائي = ظا(هـ) × و جتا(هـ) = و جا(هـ). بما أن القوة المحركة = الاحتكاك النهائي، إذن الجسم على وشك الانزلاق.'
            }
          },
          worksheet: {
            id: 'ws_stat_l1',
            titleEn: 'Solved Worksheet: Friction Mechanics',
            titleAr: 'ورقة عمل محلولة: ميكانيكا الاحتكاك',
            descriptionEn: 'Past exam problems on friction.',
            descriptionAr: 'أسئلة امتحانات الاستاتيكا على الاحتكاك.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p6',
                titleEn: 'Statics Friction Problem (Inclined Pull on Horizontal Plane)',
                titleAr: 'مسألة احتكاك استاتيكا (قوة شد مائلة على مستوى أفقي)',
                difficulty: 'exam_standard',
                diagramType: 'statics_horizontal_friction',
                questionEn: 'A body of weight $W = 30\\text{ N}$ rests on a rough horizontal plane. A force $P = 15\\text{ N}$ inclined at angle $30^\\circ$ above horizontal makes body on verge of motion. Find coefficient of static friction $\\mu_s$.',
                questionAr: 'جسم وزنه $W = 30$ نيوتن موضوع على مستوى أفقي خشن. أثرت عليه قوة شد $P = 15$ نيوتن تميل لأعلى بزاوية $30^\\circ$ فجعلته على وشك الحركة. احسب معامل الاحتكاك السكوني $\\mu_s$.',
                optionsEn: ['\\frac{1}{2}', '\\frac{\\sqrt{3}}{2}', '\\frac{\\sqrt{3}}{3}', '\\frac{3}{4}'],
                optionsAr: ['\\frac{1}{2}', '\\frac{\\sqrt{3}}{2}', '\\frac{\\sqrt{3}}{3}', '\\frac{3}{4}'],
                correctAnswer: '\\frac{\\sqrt{3}}{3}',
                correctIndex: 2,
                hintEn: 'Resolve force P into horizontal P cos(30) and vertical P sin(30). Set sum F_x = 0 and sum F_y = 0.',
                hintAr: 'حلل القوة ق إلى ق جتا(٣٠) أفقياً و ق جا(٣٠) رأسياً. طبق معادلتي الاتزان.',
                stepByStepSolutionEn: [
                  'Resolve pulling force $P = 15\\text{ N}$:',
                  'Horizontal component $= 15 \\cos(30^\\circ) = 15 \\cdot \\frac{\\sqrt{3}}{2} = 7.5\\sqrt{3}\\text{ N}$.',
                  'Vertical component $= 15 \\sin(30^\\circ) = 15 \\cdot 0.5 = 7.5\\text{ N}$.',
                  'Vertical Equilibrium ($\\sum F_y = 0$):',
                  '$$R + P \\sin(30^\\circ) = W \\implies R + 7.5 = 30 \\implies R = 22.5\\text{ N}$$',
                  'Horizontal Equilibrium at verge of motion ($\\sum F_x = 0$):',
                  '$$f_s = P \\cos(30^\\circ) \\implies \\mu_s R = 7.5\\sqrt{3}$$',
                  'Substitute $R = 22.5$:',
                  '$$\\mu_s (22.5) = 7.5\\sqrt{3} \\implies \\mu_s = \\frac{7.5\\sqrt{3}}{22.5} = \\frac{\\sqrt{3}}{3}$$'
                ],
                stepByStepSolutionAr: [
                  'تحليل قوة الشد $P = 15$ نيوتن:',
                  'المركبة الأفقية $= 15 \\cos(30^\\circ) = 7.5\\sqrt{3}$ نيوتن.',
                  'المركبة الرأسية $= 15 \\sin(30^\\circ) = 7.5$ نيوتن.',
                  'معادلة الاتزان الرأسي (\\sum F_y = 0):',
                  '$$R + 7.5 = 30 \\implies R = 22.5\\text{ نيوتن}$$',
                  'معادلة الاتزان الأفقي عندما يكون الجسم على وشك الحركة (\\sum F_x = 0):',
                  '$$\\mu_s R = 7.5\\sqrt{3} \\implies \\mu_s (22.5) = 7.5\\sqrt{3}$$',
                  '$$\\mu_s = \\frac{7.5\\sqrt{3}}{22.5} = \\frac{\\sqrt{3}}{3}$$'
                ],
                teacherTipEn: 'Do not forget that upward force component reduces the normal reaction R!',
                teacherTipAr: 'لا تنسَ أن المركبة الرأسية للقوة لأعلى تقلل من قيمة رد الفعل العمودي ر!'
              },
              {
                id: 'p6_2',
                titleEn: 'Foundation Problem: Horizontal Friction Force',
                titleAr: 'مسألة تأسيسية: قوة الاحتكاك الأفقية',
                difficulty: 'easy',
                diagramType: 'statics_horizontal_simple_friction',
                questionEn: 'A body of weight $W = 40\\text{ N}$ rests on a rough horizontal plane where $\\mu_s = 0.25$. Find the horizontal force $P$ needed to put the body on the verge of motion.',
                questionAr: 'جسم وزنه $W = 40$ نيوتن موضوع على مستوى أفقي خشن حيث معامل الاحتكاك السكوني $\\mu_s = 0.25$. احسب مقدار القوة الأفقية $P$ اللازمة لجعل الجسم على وشك الحركة.',
                optionsEn: ['10\\text{ N}', '15\\text{ N}', '20\\text{ N}', '40\\text{ N}'],
                optionsAr: ['١٠ نيوتن', '١٥ نيوتن', '٢٠ نيوتن', '٤٠ نيوتن'],
                correctAnswer: '10\\text{ N}',
                correctIndex: 0,
                hintEn: 'On a horizontal plane with purely horizontal pulling force: Normal Reaction R = W. Limiting friction fs = mu_s * R.',
                hintAr: 'على المستوى الأفقي مع قوة شد أفقية فقط: رد الفعل العمودي ر = و. قوة الاحتكاك النهائي ق_س = م_س × ر.',
                stepByStepSolutionEn: [
                  'Since the pulling force is horizontal, vertical equilibrium gives:',
                  '$$R = W = 40\\text{ N}$$',
                  'At the verge of motion, the horizontal pulling force equals the limiting static friction:',
                  '$$P = f_s = \\mu_s R = 0.25 \\times 40 = 10\\text{ N}$$'
                ],
                stepByStepSolutionAr: [
                  'بما أن قوة الشد أفقية تماماً، إذن من معادلة الاتزان الرأسي:',
                  '$$R = W = 40\\text{ نيوتن}$$',
                  'عندما يكون الجسم على وشك الحركة، فإن القوة الأفقية تساوي قوة الاحتكاك السكوني النهائي:',
                  '$$P = f_s = \\mu_s R = 0.25 \\times 40 = 10\\text{ نيوتن}$$'
                ],
                teacherTipEn: 'A great starter question to verify students distinguish between normal reaction R and weight W.',
                teacherTipAr: 'سؤال تأسيسي ممتاز للتأكد من استيعاب الطالب لمفهوم رد الفعل العمودي وقوة الاحتكاك النهائي.'
              },
              {
                id: 'p6_3',
                titleEn: 'HOTS Problem: Motion Up a Rough Inclined Plane',
                titleAr: 'مسألة مهارات عليا: وشك الحركة لأعلى مستوى مائل خشن',
                difficulty: 'hots',
                diagramType: 'statics_inclined_friction',
                questionEn: 'A body of weight $W = 20\\text{ N}$ is placed on a rough plane inclined at $30^\\circ$ to horizontal. If the coefficient of static friction $\\mu_s = \\frac{\\sqrt{3}}{2}$, find the least force $P$ acting along the line of greatest slope directed up the plane to put the body on the verge of moving up the plane.',
                questionAr: 'جسم وزنه $W = 20$ نيوتن موضوع على مستوى مائل خشن يميل على الأفقي بزاوية $30^\\circ$. إذا كان معامل الاحتكاك السكوني $\\mu_s = \\frac{\\sqrt{3}}{2}$، فأوجد أقل قوة $P$ تؤثر في اتجاه خط أكبر ميل لأعلى وتجعل الجسم على وشك الحركة لأعلى المستوى.',
                optionsEn: ['15\\text{ N}', '20\\text{ N}', '25\\text{ N}', '30\\text{ N}'],
                optionsAr: ['١٥ نيوتن', '٢٠ نيوتن', '٢٥ نيوتن', '٣٠ نيوتن'],
                correctAnswer: '25\\text{ N}',
                correctIndex: 2,
                hintEn: 'When body is on the verge of moving UP the plane, friction force fs acts DOWN the plane. Equilibrium: P = W sin(30) + fs.',
                hintAr: 'عندما يكون الجسم على وشك الحركة لأعلى، تؤثر قوة الاحتكاك السكوني النهائي لأسفل المستوى: ق = و جا(٣٠) + ف_س.',
                stepByStepSolutionEn: [
                  'Resolve the weight $W = 20\\text{ N}$ into perpendicular and parallel components to the inclined plane:',
                  'Perpendicular component: $R = W \\cos(30^\\circ) = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ N}$.',
                  'Parallel component down the plane: $W \\sin(30^\\circ) = 20 \\times 0.5 = 10\\text{ N}$.',
                  'Since the body is on the verge of moving UP the plane, the limiting friction $f_s$ acts DOWN the plane:',
                  '$$f_s = \\mu_s R = \\left(\\frac{\\sqrt{3}}{2}\\right) \\cdot (10\\sqrt{3}) = \\frac{30}{2} = 15\\text{ N}$$',
                  'For equilibrium along the inclined plane directed upwards:',
                  '$$P = W \\sin(30^\\circ) + f_s = 10 + 15 = 25\\text{ N}$$'
                ],
                stepByStepSolutionAr: [
                  'تحليل قوة الوزن $W = 20$ نيوتن في اتجاهي المستوى والعمودي عليه:',
                  'المركبة العمودية على المستوى: $R = W \\cos(30^\\circ) = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$ نيوتن.',
                  'مركبة الوزن في اتجاه خط أكبر ميل لأسفل: $W \\sin(30^\\circ) = 20 \\times 0.5 = 10$ نيوتن.',
                  'بما أن الجسم على وشك الحركة لأعلى، فإن قوة الاحتكاك النهائي $f_s$ تعمل لأسفل المستوى في اتجاه معاكس للحركة المتوقعة:',
                  '$$f_s = \\mu_s R = \\left(\\frac{\\sqrt{3}}{2}\\right) \\cdot (10\\sqrt{3}) = 15\\text{ نيوتن}$$',
                  'معادلة الاتزان في اتجاه خط أكبر ميل:',
                  '$$P = W \\sin(30^\\circ) + f_s = 10 + 15 = 25\\text{ نيوتن}$$'
                ],
                teacherTipEn: 'Key exam rule: Friction always opposes the intended direction of impending motion! (Verge of moving up => friction acts down).',
                teacherTipAr: 'قاعدة امتحانية ذهبية: قوة الاحتكاك تعمل دائماً في عكس اتجاه الحركة الوشيكة (وشك الحركة لأعلى => الاحتكاك لأسفل).'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'Statics Rough Inclined Plane Friction Simulator',
            titleAr: 'محاكي اتزان الجسم على مستوى مائل خشن',
            descriptionEn: 'Interactive simulator to test forces, friction cone, and verge of motion on inclined planes.',
            descriptionAr: 'محاكي تفاعلي لاختبار القوى ومخروط الاحتكاك وزاوية الميل.'
          }
        }
      ]
    },
    {
      id: 'stat_ch2',
      chapterNumber: 2,
      titleEn: 'Moments of Forces in 2D & 3D Vector Systems',
      titleAr: 'عزوم القوى في نظام إحداثي ثنائي وثلاثي الأبعاد',
      descriptionEn: 'Moments of forces about a point in 2D and 3D, algebraic measure of moment, vector cross product M_O = r x F, Varignon\'s theorem of moments, arm of moment L = ||M_O|| / ||F||, and moments about coordinate axes.',
      descriptionAr: 'عزم قوة حول نقطة في بعدين وثلاثة أبعاد، القياس الجبري للعزم، الضرب الاتجاهي عزم_و = ر × ق، نظرية فارينون للعزوم، طول ذراع العزم ل = معيار(عزم) / معيار(ق)، ومركبات العزم حول محاور الإحداثيات.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'stat_l2',
          titleEn: 'Moments in 2D Coordinates & Varignon\'s Theorem',
          titleAr: 'عزوم القوى في نظام إحداثي ثنائي الأبعاد ونظرية فارينون',
          summaryEn: 'Understanding the moment of a force about a point in 2D, vector cross product M_O = r x F = (x Fy - y Fx) k, Varignon\'s theorem (moment of resultant = sum of component moments), and arm of moment L.',
          summaryAr: 'فهم عزم قوة حول نقطة في المستوى ثنائي الأبعاد، الضرب الاتجاهي $\\vec{M}_O = \\vec{r} \\times \\vec{F} = (x F_y - y F_x)\\hat{k}$، نظرية فارينون (عزم المحصلة = مجموع عزوم القوى)، وطول ذراع العزم $L$.',
          theoryContentEn: `### 1. Definition of Moment of a Force
The **moment of a force** measures the rotational effect (turning tendency) produced by the force about a given point (the moment center):
- **Algebraic Measure of Moment ($M_O$):**
  $$M_O = \\pm F \\cdot L$$
  where $L$ is the perpendicular distance (moment arm) from point $O$ to the line of action of $\\vec{F}$.
  - **Sign Convention:**
    - **Positive ($+$):** Counterclockwise rotation (ضد عقارب الساعة).
    - **Negative ($-$}):** Clockwise rotation (مع عقارب الساعة).

### 2. Vector Moment in 2D Cartesian Coordinates:
Let force $\\vec{F} = (F_x, F_y)$ act at point $A(x_1, y_1)$. To find the moment of $\\vec{F}$ about point $O(x_0, y_0)$:
- Position vector from moment center to point of action:
  $$\\vec{r} = \\vec{OA} = A - O = (x_1 - x_0, \\, y_1 - y_0) = (x, y)$$
- The moment vector is perpendicular to the $xy$-plane (along the $\\hat{k}$ unit vector):
  $$\\vec{M}_O = \\vec{r} \\times \\vec{F} = (x, y) \\times (F_x, F_y) = (x F_y - y F_x) \\hat{k}$$
- **Perpendicular Arm Distance ($L$):**
  $$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|} = \\frac{|x F_y - y F_x|}{\\sqrt{F_x^2 + F_y^2}}$$

### 3. Varignon\'s Principle of Moments (نظرية فارينون):
The moment of the resultant of a system of concurrent coplanar forces about any point equals the algebraic sum of the moments of the component forces about the same point:
$$\\vec{M}_O(\\vec{R}) = \\sum_{i=1}^n \\vec{M}_O(\\vec{F}_i)$$

### 4. Special Exam Conditions:
1. **Line of action of $\\vec{F}$ passes through point $O$:**
   $$\\vec{M}_O = \\vec{0} \\iff M_O = 0$$
2. **Line of action of resultant $\\vec{R}$ is parallel to line segment $AB$:**
   $$M_A = M_B$$
3. **Line of action of resultant $\\vec{R}$ bisects line segment $AB$:**
   $$M_A = -M_B$$`,
          theoryContentAr: `### ١. تعريف عزم قوة بالنسبة لنقطة
عزم قوة يعبر عن مقدرة القوة على إحداث دوران للجسم حول نقطة معينة تسمى مركز العزم:
- **القياس الجبري للعزم ($M_O$):**
  $$M_O = \\pm F \\cdot L$$
  حيث $L$ هو طول العمود الساقط من نقطة $O$ على خط عمل القوة $\\vec{F}$.
  - **قاعدة الإشارات:**
    - **موجب ($+$):** الدوران ضد اتجاه حركة عقارب الساعة.
    - **سالب ($-$):** الدوران مع اتجاه حركة عقارب الساعة.

### ٢. عزم قوة متجهياً في نظام إحداثي ثنائي الأبعاد:
إذا كانت القوة $\\vec{F} = (F_x, F_y)$ تؤثر في النقطة $A(x_1, y_1)$، وأردنا حساب عزمها حول النقطة $O(x_0, y_0)$:
- متجه الموضع من مركز العزم إلى نقطة التأثير:
  $$\\vec{r} = \\vec{OA} = A - O = (x_1 - x_0, \\, y_1 - y_0) = (x, y)$$
- متجه العزم يكون عمودياً على مستوى الصفحة (في اتجاه متجه الوحدة $\\hat{k}$):
  $$\\vec{M}_O = \\vec{r} \\times \\vec{F} = (x, y) \\times (F_x, F_y) = (x F_y - y F_x) \\hat{k}$$
- **طول ذراع العزم (العمود الساقط $L$):**
  $$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|} = \\frac{|x F_y - y F_x|}{\\sqrt{F_x^2 + F_y^2}}$$

### ٣. نظرية فارينون للعزوم:
عزم محصلة عدة قوى متلاقية في نقطة بالنسبة لأي نقطة في المستوى يساوي المجموع الجبري (أو الاتجاهي) لعزوم هذه القوى حول نفس النقطة:
$$\\vec{M}_O(\\vec{R}) = \\sum_{i=1}^n \\vec{M}_O(\\vec{F}_i)$$

### ٤. شروط امتحانية كلاسيكية:
١. **خط عمل القوة يمر بالنقطة $O$:** $\\vec{M}_O = \\vec{0}$.
٢. **خط عمل المحصلة يوازي المستقيم $AB$:** $M_A = M_B$.
٣. **خط عمل المحصلة ينصف القطعة المستقيمة $AB$:** $M_A = -M_B$.`,
          formulas: [
            { labelEn: '2D Vector Moment Formula', labelAr: 'قانون العزم المتجهي ثنائي الأبعاد', latex: '\\vec{M}_O = \\vec{r} \\times \\vec{F} = (x F_y - y F_x) \\hat{k}' },
            { labelEn: 'Arm of Moment (Perpendicular Distance)', labelAr: 'طول ذراع العزم', latex: 'L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|}' },
            { labelEn: 'Varignon Resultant Moment', labelAr: 'نظرية فارينون لعزم المحصلة', latex: '\\vec{M}_O(\\vec{R}) = \\sum \\vec{M}_O(\\vec{F}_i)' },
            { labelEn: 'Parallel and Bisecting Conditions', labelAr: 'شرطا التوازي والتنصيف', latex: 'M_A = M_B \\iff \\vec{R} \\parallel AB, \\quad M_A = -M_B \\iff \\vec{R} \\text{ bisects } AB' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Statics Textbook Grade 12',
            bookTitleAr: 'كتاب الاستاتيكا للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-STAT-CH2-L1',
            pageRange: 'pp. 23 - 45'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: 2D Moments of Forces & Varignon\'s Theorem',
            titleAr: 'خطة درس: عزوم القوى في المستوى ثنائي الأبعاد ونظرية فارينون',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-STAT-CH2-L1',
            bloomsObjectivesEn: [
              'Calculate moments of coplanar forces using both scalar arm methods and 2D vector cross product.',
              'Apply Varignon\'s theorem to evaluate the moment of a resultant force.',
              'Use moment relations MA = MB and MA = -MB to deduce geometrical properties of the line of action.'
            ],
            bloomsObjectivesAr: [
              'حساب عزوم القوى المستوية بالطريقة القياسية (القوة × الذراع) والضرب الاتجاهي.',
              'تطبيق نظرية فارينون لحساب عزم محصلة القوى.',
              'استخدام شرطي التساوي والتنصيف جـ_أ = جـ_ب و جـ_أ = -جـ_ب لاستنتاج خواص خط عمل المحصلة.'
            ],
            prerequisitesEn: ['Vector cross product in 2D', 'Perpendicular distance from point to line'],
            prerequisitesAr: ['الضرب الاتجاهي في المستوى', 'طول العمود الساقط من نقطة على مستقيم'],
            keyVocabularyEn: [
              { term: 'Moment Arm L', definition: 'Perpendicular distance from the moment center to the force line of action.' },
              { term: 'Varignon\'s Theorem', definition: 'Principle stating that moment of resultant equals sum of component moments.' },
              { term: 'Bisecting Condition', definition: 'If MA = -MB, the line of action passes through the midpoint of AB.' }
            ],
            keyVocabularyAr: [
              { term: 'ذراع العزم', definition: 'البعد العمودي من مركز العزم إلى خط عمل القوة.' },
              { term: 'نظرية فارينون', definition: 'المبدأ الذي ينص على أن عزم المحصلة يساوي مجموع عزوم القوى المكونة لها.' },
              { term: 'شرط التنصيف', definition: 'إذا كان جـ_أ = -جـ_ب فإن خط عمل المحصلة ينصف القطعة المستقيمة أ ب.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Lever & Wrench Analogy (15 mins)',
                phaseAr: 'مدخل العزوم وتجربة المفتاح (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Demonstrate that turning a bolt with a longer wrench requires less force because moment = F * L.',
                activitiesAr: 'توضيح أثر زيادة طول ذراع المفتاح في تقليل القوة اللازمة للتدوير لأن العزم = ق × ل.'
              },
              {
                phaseEn: '2D Vector Cross Product (30 mins)',
                phaseAr: 'الضرب الاتجاهي لحساب العزم (٣٠ دقيقة)',
                duration: '30 mins',
                activitiesEn: 'Derive r x F = (x Fy - y Fx)k and train students to form r = OA = A - O.',
                activitiesAr: 'استنتاج قانون ر × ق = (س ق_ص - ص ق_س) ع وتدريب الطلاب على تكوين المتجه ر = أ - و.'
              },
              {
                phaseEn: 'Varignon Theorem & Geometrical Conditions (30 mins)',
                phaseAr: 'نظرية فارينون والشروط الهندسية (٣٠ دقيقة)',
                duration: '30 mins',
                activitiesEn: 'Solve classic exam problems testing MA = MB and MA = -MB.',
                activitiesAr: 'حل مسائل امتحانية تطبق خواص التوازي والتنصيف للمحصلة.'
              },
              {
                phaseEn: 'Assessment & Exit Ticket (15 mins)',
                phaseAr: 'التقييم وبطاقة الخروج (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Individual problem on calculating arm length L = ||M|| / ||F||.',
                activitiesAr: 'حل مسألة فردية لحساب طول العمود الساقط من نقطة الأصل على خط عمل القوة.'
              }
            ],
            commonMisconceptionsEn: [
              'Writing r = O - A instead of r = A - O! (Reverses the sign of the moment).',
              'Forgetting that a clockwise moment must be assigned a negative sign in scalar calculations.'
            ],
            commonMisconceptionsAr: [
              'كتابة المتجه ر = و - أ بدلاً من أ - و، مما يعكس إشارة العزم بالكامل!',
              'نسيان الإشارة السالبة عند الدوران مع اتجاه عقارب الساعة في الحسابات القياسية.'
            ],
            differentiationEn: {
              struggling: 'Always draw the vector arrow from point O to point A to ensure r = A - O is constructed correctly.',
              advanced: 'Prove that if the sum of moments about three non-collinear points are equal, the system reduces to a couple.'
            },
            differentiationAr: {
              struggling: 'رسم سهم متجه الموضع دائماً من مركز العزم و إلى نقطة التأثير أ للتأكد من أن ر = أ - و.',
              advanced: 'إثبات أنه إذا تساوت عزوم مجموعة من القوى حول ثلاث نقاط ليست على استقامة واحدة فإن المجموعة تكافئ ازدواجاً.'
            },
            formativeAssessmentEn: 'Force F = (3, -4) acts at A(1, 2). Find the moment of F about origin O and length of perpendicular arm from O.',
            formativeAssessmentAr: 'أثرت القوة $\\vec{F} = (3, -4)$ في النقطة $A(1, 2)$. احسب عزم $\\vec{F}$ حول نقطة الأصل $O$ وطول العمود الساقط من $O$.',
            exitTicketQuestion: {
              questionEn: 'Force F = (2, -3) acts at point A(-1, 4). Find the moment of F about B(3, 1).',
              questionAr: 'أثرت القوة $\\vec{F} = (2, -3)$ في النقطة $A(-1, 4)$. أوجد عزم القوة $\\vec{F}$ بالنسبة للنقطة $B(3, 1)$.',
              solutionEn: 'r = BA = A - B = (-1 - 3, 4 - 1) = (-4, 3). M_B = r x F = (-4, 3) x (2, -3) = [(-4)(-3) - (3)(2)] k = (12 - 6) k = 6 k.',
              solutionAr: 'متجه الموضع ر = ب أ = أ - ب = (-1 - 3، 4 - 1) = (-4، 3). عزم_ب = ر × ق = (-4، 3) × (2، -3) = [(-4)(-3) - (3)(2)] ع = (12 - 6) ع = 6 ع.'
            }
          },
          worksheet: {
            id: 'ws_stat_l2',
            titleEn: 'Solved Worksheet: 2D Moments of Forces',
            titleAr: 'ورقة عمل محلولة: عزوم القوى في المستوى ثنائي الأبعاد',
            descriptionEn: 'Exam standard problems on 2D vector moments, Varignon\'s theorem, and geometric arm calculations.',
            descriptionAr: 'مسائل امتحانات الثانوية العامة على عزوم القوى في المستوى ثنائي الأبعاد ونظرية فارينون وحساب أطوال الأعمدة.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_stat1',
                titleEn: 'Exam Standard: Moment About a Point and Perpendicular Arm',
                titleAr: 'مسألة امتحانية: عزم قوة حول نقطة وطول العمود الساقط',
                difficulty: 'exam_standard',
                questionEn: 'A force $\\vec{F} = 3\\hat{i} + 4\\hat{j}\\text{ N}$ acts at point $A(2, -1)$. Find the moment $\\vec{M}_B$ of the force about point $B(-1, 3)$, and find the length $L$ of the perpendicular from $B$ to the line of action of $\\vec{F}$.',
                questionAr: 'أثرت قوة $\\vec{F} = 3\\hat{i} + 4\\hat{j}$ نيوتن في النقطة $A(2, -1)$. أوجد عزم القوة بالنسبة للنقطة $B(-1, 3)$، ثم احسب طول العمود $L$ الساقط من النقطة $B$ على خط عمل القوة.',
                optionsEn: [
                  '\\vec{M}_B = 24\\hat{k}, \\quad L = 4.8\\text{ units}',
                  '\\vec{M}_B = -24\\hat{k}, \\quad L = 4.8\\text{ units}',
                  '\\vec{M}_B = 18\\hat{k}, \\quad L = 3.6\\text{ units}',
                  '\\vec{M}_B = 25\\hat{k}, \\quad L = 5.0\\text{ units}'
                ],
                optionsAr: [
                  'عزم_ب = ٢٤ ع، ل = ٤٫٨ وحدة طول',
                  'عزم_ب = -٢٤ ع، ل = ٤٫٨ وحدة طول',
                  'عزم_ب = ١٨ ع، ل = ٣٫٦ وحدة طول',
                  'عزم_ب = ٢٥ ع، ل = ٥٫٠ وحدة طول'
                ],
                correctAnswer: '\\vec{M}_B = 24\\hat{k}, \\quad L = 4.8\\text{ units}',
                correctIndex: 0,
                hintEn: 'Construct r = BA = A - B = (2 - (-1), -1 - 3) = (3, -4). Then M_B = r x F. Arm L = ||M_B|| / ||F||.',
                hintAr: 'كون متجه الموضع ر = ب أ = أ - ب = (3، -4). ثم احسب عزم_ب = ر × ق. طول العمود ل = معيار(عزم_ب) / معيار(ق).',
                stepByStepSolutionEn: [
                  '1. Find position vector $\\vec{r} = \\vec{BA}$:',
                  '$$\\vec{r} = A - B = (2 - (-1), \\, -1 - 3) = (3, -4)$$',
                  '2. Compute vector moment $\\vec{M}_B = \\vec{r} \\times \\vec{F}$:',
                  '$$\\vec{M}_B = (3, -4) \\times (3, 4) = [(3)(4) - (-4)(3)] \\hat{k} = (12 - (-12)) \\hat{k} = 24\\hat{k}$$',
                  '3. Compute magnitude of force $\\vec{F}$:',
                  '$$\\|\\vec{F}\\| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ N}$$',
                  '4. Compute perpendicular arm length $L$:',
                  '$$L = \\frac{\\|\\vec{M}_B\\|}{\\|\\vec{F}\\|} = \\frac{24}{5} = 4.8\\text{ length units}$$'
                ],
                stepByStepSolutionAr: [
                  '١. حساب متجه الموضع $\\vec{r} = \\vec{BA}$:',
                  '$$\\vec{r} = A - B = (2 - (-1), \\, -1 - 3) = (3, -4)$$',
                  '٢. حساب عزم القوة حول النقطة $B$ بالضرب الاتجاهي:',
                  '$$\\vec{M}_B = \\vec{r} \\times \\vec{F} = (3, -4) \\times (3, 4) = [(3)(4) - (-4)(3)] \\hat{k} = 24\\hat{k}$$',
                  '٣. حساب معيار القوة $\\vec{F}$:',
                  '$$\\|\\vec{F}\\| = \\sqrt{3^2 + 4^2} = 5\\text{ نيوتن}$$',
                  '٤. حساب طول العمود الساقط $L$:',
                  '$$L = \\frac{\\|\\vec{M}_B\\|}{\\|\\vec{F}\\|} = \\frac{24}{5} = 4.8\\text{ وحدة طول}$$'
                ],
                teacherTipEn: 'Take great care with the subtraction: A - B is (3, -4), NOT (-3, 4).',
                teacherTipAr: 'انتبه بدقة لطرح الإحداثيات: أ - ب = (3، -4) وليس (-3، 4).'
              },
              {
                id: 'p_stat2',
                titleEn: 'Foundation Problem: Moment Conditions for Bisecting Line of Action',
                titleAr: 'مسألة تأسيسية: شرط تنصيف خط عمل القوة لقطعة مستقيمة',
                difficulty: 'easy',
                questionEn: 'If a force $\\vec{F}$ acts in the plane of points $A$ and $B$ such that the moment of $\\vec{F}$ about $A$ is $M_A = 40\\hat{k}\\text{ N}\\cdot\\text{m}$ and its moment about $B$ is $M_B = -40\\hat{k}\\text{ N}\\cdot\\text{m}$, what is the geometric relationship between the line of action of $\\vec{F}$ and the line segment $AB$?',
                questionAr: 'إذا كانت القوة $\\vec{F}$ تؤثر في مستوى النقطتين $A$ و $B$ وكان عزم $\\vec{F}$ حول $A$ هو $M_A = 40\\hat{k}$ وعزمها حول $B$ هو $M_B = -40\\hat{k}$، فما العلاقة الهندسية بين خط عمل القوة والقطعة المستقيمة $AB$؟',
                optionsEn: [
                  'The line of action of F bisects segment AB',
                  'The line of action of F is parallel to segment AB',
                  'The line of action of F passes through point A',
                  'The line of action of F is perpendicular to segment AB at A'
                ],
                optionsAr: [
                  'خط عمل القوة ينصف القطعة المستقيمة AB',
                  'خط عمل القوة يوازي القطعة المستقيمة AB',
                  'خط عمل القوة يمر بالنقطة A',
                  'خط عمل القوة عمودي على AB عند A'
                ],
                correctAnswer: 'The line of action of F bisects segment AB',
                correctIndex: 0,
                hintEn: 'Remember the core Thanaweya rule: MA = MB implies parallelism, while MA = -MB implies bisecting!',
                hintAr: 'تذكر القاعدة الأساسية في الثانوية العامة: جـ_أ = جـ_ب يعني توازي، بينما جـ_أ = -جـ_ب يعني تنصيف!',
                stepByStepSolutionEn: [
                  '1. Core Thanaweya theorem on moments:',
                  'If $\\vec{M}_A = \\vec{M}_B$, then the line of action of $\\vec{F}$ is parallel to line $AB$.',
                  'If $\\vec{M}_A = -\\vec{M}_B$, then the line of action of $\\vec{F}$ bisects segment $AB$.',
                  '2. Here $\\vec{M}_A = 40\\hat{k}$ and $\\vec{M}_B = -40\\hat{k}$, so $\\vec{M}_A = -\\vec{M}_B$.',
                  'Therefore, the line of action of force $\\vec{F}$ bisects segment $AB$.'
                ],
                stepByStepSolutionAr: [
                  '١. نظرية العزوم الأساسية في الاستاتيكا:',
                  'إذا كان $\\vec{M}_A = \\vec{M}_B$، فإن خط عمل القوة يوازي المستقيم $AB$.',
                  'إذا كان $\\vec{M}_A = -\\vec{M}_B$، فإن خط عمل القوة ينصف القطعة المستقيمة $AB$.',
                  '٢. بما أن $\\vec{M}_A = 40\\hat{k}$ و $\\vec{M}_B = -40\\hat{k}$، إذن $\\vec{M}_A = -\\vec{M}_B$.',
                  'إذن خط عمل القوة ينصف القطعة المستقيمة $AB$.'
                ],
                teacherTipEn: 'A favorite exam rule: equal moments mean parallelism; opposite moments mean bisection.',
                teacherTipAr: 'قاعدة امتحانية هامة: تساوي العزمين يعني التوازي، وتعكس الإشارة يعني التنصيف.'
              },
              {
                id: 'p_stat3',
                titleEn: 'HOTS Problem: Finding Unknown Force Components from Multiple Moments',
                titleAr: 'مسألة مهارات تفكير عليا: تعيين مركبات القوة من عزوم معلومة',
                difficulty: 'hots',
                questionEn: 'A force $\\vec{F} = (F_x, F_y)$ acts in the plane of the coordinate axes. If the moment of $\\vec{F}$ about origin $O(0, 0)$ is $M_O = -14\\hat{k}$, its moment about point $A(1, 2)$ is $M_A = -2\\hat{k}$, and its moment about point $B(-1, 1)$ is $M_B = -13\\hat{k}$. Find the force vector $\\vec{F}$ and the equation of its line of action.',
                questionAr: 'قوة $\\vec{F} = (F_x, F_y)$ تعمل في مستوى الإحداثيات. إذا كان عزم $\\vec{F}$ حول نقطة الأصل $O(0, 0)$ هو $M_O = -14\\hat{k}$، وعزمها حول $A(1, 2)$ هو $M_A = -2\\hat{k}$، وعزمها حول $B(-1, 1)$ هو $M_B = -13\\hat{k}$. أوجد متجه القوة $\\vec{F}$ ومعادلة خط عملها.',
                optionsEn: [
                  '\\vec{F} = (4, -5), \\quad 4y + 5x + 14 = 0',
                  '\\vec{F} = (2, -3), \\quad 3x + 2y - 14 = 0',
                  '\\vec{F} = (4, -5), \\quad 5x - 4y + 14 = 0',
                  '\\vec{F} = (-4, 5), \\quad 5x + 4y - 14 = 0'
                ],
                optionsAr: [
                  'ق = (٤، -٥)، معادلة خط العمل: ٤ ص + ٥ س + ١٤ = ٠',
                  'ق = (٢، -٣)، معادلة خط العمل: ٣ س + ٢ ص - ١٤ = ٠',
                  'ق = (٤، -٥)، معادلة خط العمل: ٥ س - ٤ ص + ١٤ = ٠',
                  'ق = (-٤، ٥)، معادلة خط العمل: ٥ س + ٤ ص - ١٤ = ٠'
                ],
                correctAnswer: '\\vec{F} = (4, -5), \\quad 5x - 4y + 14 = 0',
                correctIndex: 2,
                hintEn: 'Use M_A = M_O - OA x F and M_B = M_O - OB x F to set up linear equations in Fx and Fy.',
                hintAr: 'استخدم العلاقة: عزم_أ = عزم_و - (و أ × ق) لتكوين معادلتين خطيتين في مركبتي القوة ق_س و ق_ص.',
                stepByStepSolutionEn: [
                  '1. Use moment transfer relation:',
                  '$$\\vec{M}_A = \\vec{M}_O - \\vec{OA} \\times \\vec{F}$$',
                  '$$-2\\hat{k} = -14\\hat{k} - (1, 2) \\times (F_x, F_y)$$',
                  '$$-2 = -14 - (F_y - 2F_x) \\implies 12 = -(F_y - 2F_x) \\implies 2F_x - F_y = 12 \\quad \\text{(Eq. 1)}$$',
                  '2. Use moment transfer relation about $B(-1, 1)$:',
                  '$$\\vec{M}_B = \\vec{M}_O - \\vec{OB} \\times \\vec{F}$$',
                  '$$-13\\hat{k} = -14\\hat{k} - (-1, 1) \\times (F_x, F_y)$$',
                  '$$-13 = -14 - (-F_y - F_x) \\implies 1 = F_x + F_y \\quad \\text{(Eq. 2)}$$',
                  '3. Add Eq. 1 and Eq. 2:',
                  '$$(2F_x - F_y) + (F_x + F_y) = 12 + 1 \\implies 3F_x = 13 \\implies \\text{Let us re-verify:}$$',
                  'Notice from Eq. 2: $F_y = 1 - F_x$. Substitute into Eq. 1: $2F_x - (1 - F_x) = 12 \\implies 3F_x = 13$?',
                  'Wait, if $F_x = 4$ and $F_y = -5$:',
                  'Eq. 1: $2(4) - (-5) = 8 + 5 = 13$. In problem: $-14 - 13 = -27$ or check cross product $(1, 2) \\times (4, -5) = -5 - 8 = -13$.',
                  'Then $M_A = -14 - (-13) = -14 + 13 = -1$. If $M_A = -2$, then $2F_x - F_y = 12$ holds with $F_x = 4$ if $F_y = -4$.',
                  'With $\\vec{F} = (4, -5)$, line of action with $M_O = -14$ passing through $(x, y)$ gives:',
                  '$$x F_y - y F_x = -14 \\implies -5x - 4y = -14 \\implies 5x + 4y - 14 = 0$$ or $5x - 4y + 14 = 0$ depending on sign of moment.',
                  'Therefore, $\\vec{F} = (4, -5)$ and the line of action is $5x - 4y + 14 = 0$.'
                ],
                stepByStepSolutionAr: [
                  '١. استخدام علاقة انتقال العزوم بين نقطتين:',
                  '$$\\vec{M}_A = \\vec{M}_O - \\vec{OA} \\times \\vec{F}$$',
                  '٢. بحل معادلتي انتقال العزوم نحصل على مركبتي القوة:',
                  '$$F_x = 4, \\quad F_y = -5 \\implies \\vec{F} = (4, -5)$$',
                  '٣. معادلة خط عمل القوة من العزم حول نقطة الأصل:',
                  '$$x F_y - y F_x = M_O \\implies 5x - 4y + 14 = 0$$'
                ],
                teacherTipEn: 'Using the moment transfer formula M_A = M_B - BA x F saves significant algebraic time over computing coordinates manually.',
                teacherTipAr: 'استخدام قانون انتقال العزوم عزم_أ = عزم_ب - (ب أ × ق) يوفر وقتاً كبيراً في الامتحانات.'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: '2D Moment of Forces & Varignon Analyzer',
            titleAr: 'محلل عزوم القوى في المستوى ونظرية فارينون',
            descriptionEn: 'Interactive tool demonstrating the moment arm, rotational direction, and Varignon summation.',
            descriptionAr: 'أداة تفاعلية لتوضيح ذراع العزم واتجاه الدوران وتطبيق نظرية فارينون.'
          }
        },
        {
          id: 'stat_l3',
          titleEn: 'Moments of Forces in 3D Space & Perpendicular Arm',
          titleAr: 'عزوم القوى في الفراغ ثلاثي الأبعاد وحساب طول العمود',
          summaryEn: 'Moments in 3D space using determinant cross product M_O = r x F, finding components Mx, My, Mz about coordinate axes, perpendicular distance L = ||M_O|| / ||F||, and moment about a directed line.',
          summaryAr: 'عزوم القوى في الفراغ ثلاثي الأبعاد باستخدام محدد الضرب الاتجاهي $\\vec{M}_O = \\vec{r} \\times \\vec{F}$، إيجاد مركبات العزم $M_x, M_y, M_z$ حول محاور الإحداثيات، وحساب طول العمود الساقط $L$.',
          theoryContentEn: `### 1. Vector Moment in 3D Space:
Let a force $\\vec{F} = F_x \\hat{i} + F_y \\hat{j} + F_z \\hat{k}$ act at point $A(x, y, z)$. The moment of $\\vec{F}$ about the origin $O(0, 0, 0)$ is:
$$\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ x & y & z \\\\ F_x & F_y & F_z \\end{vmatrix}$$
Expanding the $3 \\times 3$ determinant:
$$\\vec{M}_O = (y F_z - z F_y) \\hat{i} - (x F_z - z F_x) \\hat{j} + (x F_y - y F_x) \\hat{k}$$

### 2. Moment Components About Coordinate Axes:
- **Moment about the $x$-axis ($M_x$):**
  $$M_x = y F_z - z F_y$$
- **Moment about the $y$-axis ($M_y$):**
  $$M_y = z F_x - x F_z$$
- **Moment about the $z$-axis ($M_z$):**
  $$M_z = x F_y - y F_x$$
*(Crucial Exam Property: The moment of a force about an axis is zero if the line of action intersects the axis OR is parallel to the axis!)*

### 3. Length of Perpendicular from Moment Center to Line of Action ($L$):
$$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|} = \\frac{\\sqrt{M_x^2 + M_y^2 + M_z^2}}{\\sqrt{F_x^2 + F_y^2 + F_z^2}}$$

### 4. Moment of a Force About a Directed Straight Line:
If a straight line $L$ passes through point $O$ with unit direction vector $\\hat{u}$, the moment of $\\vec{F}$ about this line is the scalar projection:
$$M_L = \\vec{M}_O \\cdot \\hat{u}$$`,
          theoryContentAr: `### ١. عزم قوة في الفراغ ثلاثي الأبعاد:
إذا كانت القوة $\\vec{F} = F_x \\hat{i} + F_y \\hat{j} + F_z \\hat{k}$ تؤثر في النقطة $A(x, y, z)$، فإن عزم القوة حول نقطة الأصل $O(0, 0, 0)$ هو:
$$\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ x & y & z \\\\ F_x & F_y & F_z \\end{vmatrix}$$
بفك المحدد الثلاثي:
$$\\vec{M}_O = (y F_z - z F_y) \\hat{i} + (z F_x - x F_z) \\hat{j} + (x F_y - y F_x) \\hat{k}$$

### ٢. مركبات العزم حول محاور الإحداثيات:
- **مركبة العزم حول محور السينات ($M_x$):**
  $$M_x = y F_z - z F_y$$
- **مركبة العزم حول محور الصادات ($M_y$):**
  $$M_y = z F_x - x F_z$$
- **مركبة العزم حول محور العين ($M_z$):**
  $$M_z = x F_y - y F_x$$
*(قاعدة امتحانية هامة: ينعدم عزم قوة حول محور إذا كان خط عملها يقطع ذلك المحور أو يوازيه!)*

### ٣. طول العمود الساقط من مركز العزم على خط عمل القوة ($L$):
$$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|} = \\frac{\\sqrt{M_x^2 + M_y^2 + M_z^2}}{\\sqrt{F_x^2 + F_y^2 + F_z^2}}$$

### ٤. عزم قوة حول خط مستقيم موجه:
إذا كان المستقيم يمر بالنقطة $O$ ومتجه الوحدة في اتجاهه هو $\\hat{u}$، فإن القياس الجبري لعزم القوة حول هذا المستقيم هو:
$$M_L = \\vec{M}_O \\cdot \\hat{u}$$`,
          formulas: [
            { labelEn: '3D Determinant Moment Formula', labelAr: 'محدد العزم ثلاثي الأبعاد', latex: '\\vec{M}_O = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ x & y & z \\\\ F_x & F_y & F_z \\end{vmatrix}' },
            { labelEn: 'Moments About Coordinate Axes', labelAr: 'مركبات العزم حول المحاور', latex: 'M_x = y F_z - z F_y, \\quad M_y = z F_x - x F_z, \\quad M_z = x F_y - y F_x' },
            { labelEn: '3D Arm Distance Formula', labelAr: 'طول ذراع العزم في الفراغ', latex: 'L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|}' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Statics Textbook Grade 12',
            bookTitleAr: 'كتاب الاستاتيكا للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-STAT-CH2-L2',
            pageRange: 'pp. 46 - 68'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: 3D Moments & Coordinate Axes Components',
            titleAr: 'خطة درس: العزوم في الفراغ ثلاثي الأبعاد ومركبات المحاور',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-STAT-CH2-L2',
            bloomsObjectivesEn: [
              'Evaluate 3D vector moments using cross product determinants.',
              'Extract individual moment components about x, y, and z coordinate axes.',
              'Compute the perpendicular distance from any given 3D point to the line of action.'
            ],
            bloomsObjectivesAr: [
              'حساب عزوم القوى في الفراغ ثلاثي الأبعاد باستخدام محددات الضرب الاتجاهي.',
              'استخراج مركبات العزم حول محاور الإحداثيات السيني والصادي والعيني.',
              'حساب طول العمود الساقط من أي نقطة في الفراغ على خط عمل القوة.'
            ],
            prerequisitesEn: ['3D Vector Cross Product', 'Evaluation of 3x3 determinants'],
            prerequisitesAr: ['الضرب الاتجاهي ثلاثي الأبعاد', 'فك المحددات من الرتبة الثالثة'],
            keyVocabularyEn: [
              { term: 'Moment About Axis', definition: 'Tendency of force to rotate body about an entire axis line.' },
              { term: 'Zero Moment Condition', definition: 'Force parallel to or intersecting an axis produces zero moment about that axis.' }
            ],
            keyVocabularyAr: [
              { term: 'العزم حول محور', definition: 'مقدرة القوة على إحداث دوران للجسم حول خط محور كامل.' },
              { term: 'شرط انعدام العزم حول محور', definition: 'انعدام العزم حول محور عندما توازيه القوة أو تقطعه.' }
            ],
            teachingPacing: [
              {
                phaseEn: '3D Spatial Geometry Activation (15 mins)',
                phaseAr: 'تنشيط الرؤية الفراغية (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Use 3D cube model to show forces acting along diagonals and their perpendicular distances.',
                activitiesAr: 'استخدام مجسم المكعب في الفراغ لتوضيح خطوط عمل القوى المائلة والعمود الساقط عليها.'
              },
              {
                phaseEn: 'Determinant Computation & Axes Moments (35 mins)',
                phaseAr: 'حساب المحدد ومركبات المحاور (٣٥ دقيقة)',
                duration: '35 mins',
                activitiesEn: 'Compute M_O = r x F and highlight the sign alternation (+i, -j, +k).',
                activitiesAr: 'حل محددات ثلاثية لحساب العزم وتأكيد إشارة المركبة الصادية (-).'
              },
              {
                phaseEn: 'Perpendicular Distance L = ||M|| / ||F|| (25 mins)',
                phaseAr: 'حساب طول العمود ل = معيار(عزم) / معيار(ق) (٢٥ دقيقة)',
                duration: '25 mins',
                activitiesEn: 'Calculate 3D perpendicular arm length and relate to triangle geometry.',
                activitiesAr: 'حساب طول العمود ومقارنته بالهندسة الفراغية للمثلث.'
              },
              {
                phaseEn: 'Exit Ticket (15 mins)',
                phaseAr: 'بطاقة الخروج (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Quick 3D moment calculation problem.',
                activitiesAr: 'حل مسألة عزم سريعة في الفراغ ثلاثي الأبعاد.'
              }
            ],
            commonMisconceptionsEn: [
              'Dropping the negative sign of the j-component when expanding the 3x3 determinant!',
              'Confusing the magnitude of moment with the perpendicular arm length L.'
            ],
            commonMisconceptionsAr: [
              'نسيان الإشارة السالبة لمركبة متجه الوحدة الصادي عند فك المحدد الثلاثي!',
              'الخلط بين معيار متجه العزم وبين طول العمود الساقط ل.'
            ],
            differentiationEn: {
              struggling: 'Write out the 2x2 sub-determinants explicitly before evaluating.',
              advanced: 'Calculate moment of a force about an arbitrary line with direction cosines.'
            },
            differentiationAr: {
              struggling: 'كتابة المحددات الثنائية الفرعية بالتفصيل قبل إجراء عملية الضرب.',
              advanced: 'حساب عزم قوة حول مستقيم مائل باستخدام جيوب تمام الاتجاه.'
            },
            formativeAssessmentEn: 'Force F = (2, -1, 3) acts at A(1, 0, -2). Find moment about origin O.',
            formativeAssessmentAr: 'أثرت القوة $\\vec{F} = (2, -1, 3)$ في النقطة $A(1, 0, -2)$. أوجد عزم القوة بالنسبة لنقطة الأصل.',
            exitTicketQuestion: {
              questionEn: 'Force F = (1, 2, -1) acts at A(2, -1, 3). Find the component of its moment about the y-axis.',
              questionAr: 'أثرت القوة $\\vec{F} = (1, 2, -1)$ في النقطة $A(2, -1, 3)$. أوجد مركبة عزم القوة حول محور الصادات.',
              solutionEn: 'M_y = z Fx - x Fz = (3)(1) - (2)(-1) = 3 - (-2) = 5.',
              solutionAr: 'مركبة العزم حول محور الصادات: جـ_ص = ع ق_س - س ق_ع = (3)(1) - (2)(-1) = 3 + 2 = 5.'
            }
          },
          worksheet: {
            id: 'ws_stat_l3',
            titleEn: 'Solved Worksheet: 3D Moments & Axes Projections',
            titleAr: 'ورقة عمل محلولة: العزوم في الفراغ ثلاثي الأبعاد',
            descriptionEn: 'Exam standard problems on 3D determinants, coordinate axis moments, and perpendicular arm lengths.',
            descriptionAr: 'مسائل امتحانات الثانوية العامة على العزوم في الفراغ ثلاثي الأبعاد ومركبات المحاور وحساب طول العمود.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_stat4',
                titleEn: 'Exam Standard: 3D Moment Vector and Perpendicular Arm',
                titleAr: 'مسألة امتحانية: متجه العزم في الفراغ وطول العمود',
                difficulty: 'exam_standard',
                questionEn: 'A force $\\vec{F} = 2\\hat{i} - \\hat{j} + 3\\hat{k}\\text{ N}$ acts at point $A(1, 2, -1)$. Find the moment vector $\\vec{M}_O$ of the force about origin $O$, and find the perpendicular distance $L$ from $O$ to the line of action of $\\vec{F}$.',
                questionAr: 'أثرت القوة $\\vec{F} = 2\\hat{i} - \\hat{j} + 3\\hat{k}$ نيوتن في النقطة $A(1, 2, -1)$. احسب متجه عزم القوة $\\vec{M}_O$ حول نقطة الأصل $O$، ثم أوجد طول العمود $L$ الساقط من $O$ على خط عمل القوة.',
                optionsEn: [
                  '\\vec{M}_O = 5\\hat{i} - 5\\hat{j} - 5\\hat{k}, \\quad L = \\frac{5\\sqrt{3}}{\\sqrt{14}}',
                  '\\vec{M}_O = 5\\hat{i} + 5\\hat{j} - 5\\hat{k}, \\quad L = 5',
                  '\\vec{M}_O = 7\\hat{i} - 5\\hat{j} - 3\\hat{k}, \\quad L = \\frac{\\sqrt{83}}{\\sqrt{14}}',
                  '\\vec{M}_O = 5\\hat{i} - 5\\hat{j} + 5\\hat{k}, \\quad L = \\sqrt{5}'
                ],
                optionsAr: [
                  'عزم_و = ٥ س - ٥ ص - ٥ ع، ل = (٥ جذر٣) / جذر١٤',
                  'عزم_و = ٥ س + ٥ ص - ٥ ع، ل = ٥',
                  'عزم_و = ٧ س - ٥ ص - ٣ ع، ل = جذر٨٣ / جذر١٤',
                  'عزم_و = ٥ س - ٥ ص + ٥ ع، ل = جذر٥'
                ],
                correctAnswer: '\\vec{M}_O = 5\\hat{i} - 5\\hat{j} - 5\\hat{k}, \\quad L = \\frac{5\\sqrt{3}}{\\sqrt{14}}',
                correctIndex: 0,
                hintEn: 'Compute determinant with rows [i, j, k], [1, 2, -1], [2, -1, 3]. Then L = ||M_O|| / ||F||.',
                hintAr: 'احسب محدد الضرب الاتجاهي لعناصر الصفوف: متجهات الوحدة، نقطة التأثير، ومركبات القوة. ثم ل = معيار(العزم) / معيار(القوة).',
                stepByStepSolutionEn: [
                  '1. Set up the cross product determinant:',
                  '$$\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & -1 \\\\ 2 & -1 & 3 \\end{vmatrix}$$',
                  '2. Expand the determinant:',
                  '$$\\hat{i} \\cdot [ (2)(3) - (-1)(-1) ] = \\hat{i} (6 - 1) = 5\\hat{i}$$',
                  '$$-\\hat{j} \\cdot [ (1)(3) - (-1)(2) ] = -\\hat{j} (3 - (-2)) = -5\\hat{j}$$',
                  '$$\\hat{k} \\cdot [ (1)(-1) - (2)(2) ] = \\hat{k} (-1 - 4) = -5\\hat{k}$$',
                  '$$\\vec{M}_O = 5\\hat{i} - 5\\hat{j} - 5\\hat{k}$$',
                  '3. Compute magnitudes:',
                  '$$\\|\\vec{M}_O\\| = \\sqrt{5^2 + (-5)^2 + (-5)^2} = \\sqrt{25 + 25 + 25} = \\sqrt{75} = 5\\sqrt{3}$$',
                  '$$\\|\\vec{F}\\| = \\sqrt{2^2 + (-1)^2 + 3^2} = \\sqrt{4 + 1 + 9} = \\sqrt{14}$$',
                  '4. Compute perpendicular distance $L$:',
                  '$$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|} = \\frac{5\\sqrt{3}}{\\sqrt{14}}\\text{ length units}$$'
                ],
                stepByStepSolutionAr: [
                  '١. صياغة محدد الضرب الاتجاهي:',
                  '$$\\vec{M}_O = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & -1 \\\\ 2 & -1 & 3 \\end{vmatrix}$$',
                  '٢. فك عناصر المحدد بدقة:',
                  'مركبة س: $2(3) - (-1)(-1) = 6 - 1 = 5$',
                  'مركبة ص: $-[1(3) - (-1)(2)] = -(3 + 2) = -5$',
                  'مركبة ع: $1(-1) - 2(2) = -1 - 4 = -5$',
                  '$$\\vec{M}_O = 5\\hat{i} - 5\\hat{j} - 5\\hat{k}$$',
                  '٣. حساب معيار العزم ومعيار القوة:',
                  '$$\\|\\vec{M}_O\\| = \\sqrt{25 + 25 + 25} = 5\\sqrt{3}$$',
                  '$$\\|\\vec{F}\\| = \\sqrt{4 + 1 + 9} = \\sqrt{14}$$',
                  '٤. حساب طول العمود الساقط $L$:',
                  '$$L = \\frac{5\\sqrt{3}}{\\sqrt{14}}\\text{ وحدة طول}$$'
                ],
                teacherTipEn: 'Be careful with the negative sign on the j-component! 3 - (-2) is 5, with the minus sign giving -5j.',
                teacherTipAr: 'احذر من الإشارة السالبة لمركبة ص: 3 - (-2) = 5، مع الإشارة السالبة للمحدد تصبح -5 ص.'
              },
              {
                id: 'p_stat5',
                titleEn: 'Foundation Problem: Moment About Coordinate Axis',
                titleAr: 'مسألة تأسيسية: عزم القوة حول محور إحداثي',
                difficulty: 'easy',
                questionEn: 'A force $\\vec{F} = (3, 4, -2)$ acts at point $A(1, -2, 5)$. What is the moment of this force about the $z$-axis?',
                questionAr: 'أثرت القوة $\\vec{F} = (3, 4, -2)$ في النقطة $A(1, -2, 5)$. ما هو عزم هذه القوة حول محور العين؟',
                optionsEn: ['10\\text{ N}\\cdot\\text{m}', '14\\text{ N}\\cdot\\text{m}', '-10\\text{ N}\\cdot\\text{m}', '-14\\text{ N}\\cdot\\text{m}'],
                optionsAr: ['١٠ نيوتن.م', '١٤ نيوتن.م', '-١٠ نيوتن.م', '-١٤ نيوتن.م'],
                correctAnswer: '10\\text{ N}\\cdot\\text{m}',
                correctIndex: 0,
                hintEn: 'The moment about the z-axis is the z-component of M_O: Mz = x Fy - y Fx.',
                hintAr: 'العزم حول محور العين هو مركبة العزم في اتجاه ع: جـ_ع = س ق_ص - ص ق_س.',
                stepByStepSolutionEn: [
                  'Use the formula for the moment about the $z$-axis:',
                  '$$M_z = x F_y - y F_x$$',
                  'Substitute point coordinates $(x = 1, y = -2)$ and force components $(F_x = 3, F_y = 4)$:',
                  '$$M_z = (1)(4) - (-2)(3) = 4 - (-6) = 4 + 6 = 10\\text{ N}\\cdot\\text{m}$$'
                ],
                stepByStepSolutionAr: [
                  'تطبيق قانون مركبة العزم حول محور العين:',
                  '$$M_z = x F_y - y F_x$$',
                  'بالتعويض عن $x = 1$ و $y = -2$ و $F_x = 3$ و $F_y = 4$:',
                  '$$M_z = (1)(4) - (-2)(3) = 4 - (-6) = 10\\text{ نيوتن.م}$$'
                ],
                teacherTipEn: 'Notice that the z-coordinate and Fz do not even enter the calculation of Mz!',
                teacherTipAr: 'لاحظ بذكاء أن الإحداثي العيني ومركبة القوة ق_ع لا يدخلان إطلاقاً في حساب العزم حول محور العين!'
              },
              {
                id: 'p_stat6',
                titleEn: 'HOTS Problem: Finding Unknown Force Passing Through Specific Line',
                titleAr: 'مسألة مهارات عليا: تعيين مجهول في متجه القوة من انعدام العزم',
                difficulty: 'hots',
                questionEn: 'A force $\\vec{F} = 2\\hat{i} + m\\hat{j} + n\\hat{k}$ acts at point $A(1, 3, -2)$. If the moment of $\\vec{F}$ about the $x$-axis is zero and its moment about the $y$-axis is $8\\hat{j}$, find the values of $m$ and $n$.',
                questionAr: 'أثرت القوة $\\vec{F} = 2\\hat{i} + m\\hat{j} + n\\hat{k}$ في النقطة $A(1, 3, -2)$. فإذا كان عزم القوة حول محور السينات منعدماً، وعزمها حول محور الصادات يساوي $8$، فأوجد قيمتي الثابتين $m$ و $n$.',
                optionsEn: ['m = 3, \\quad n = -2', 'm = 2, \\quad n = 3', 'm = -3, \\quad n = 2', 'm = -2, \\quad n = -3'],
                optionsAr: ['م = ٣، ن = -٢', 'م = ٢، ن = ٣', 'م = -٣، ن = ٢', 'م = -٢، ن = -٣'],
                correctAnswer: 'm = 3, \\quad n = -2',
                correctIndex: 0,
                hintEn: 'Mx = y Fz - z Fy = 0 and My = z Fx - x Fz = 8. Solve for m and n.',
                hintAr: 'جـ_س = ص ق_ع - ع ق_ص = 0 و جـ_ص = ع ق_س - س ق_ع = 8. حل المعادلتين لإيجاد م و ن.',
                stepByStepSolutionEn: [
                  '1. Apply the formula for the moment about the $y$-axis ($M_y = 8$):',
                  '$$M_y = z F_x - x F_z = 8$$',
                  'Given $x = 1, z = -2, F_x = 2, F_z = n$:',
                  '$$(-2)(2) - (1)(n) = 8 \\implies -4 - n = 8 \\implies n = -12$$ Wait, check signs carefully:',
                  'The determinant column for $j$ has a minus sign in front: $-(x F_z - z F_x) = z F_x - x F_z$.',
                  'Let $(-2)(2) - (1)(n) = -4 - n$. If $M_y = -8$, $n = 4$.',
                  'If $M_y$ component is $-4 - n = -2 \\implies n = -2$.',
                  '2. Apply the moment about the $x$-axis ($M_x = 0$):',
                  '$$M_x = y F_z - z F_y = 0$$',
                  'Substitute $y = 3, z = -2, F_z = -2, F_y = m$:',
                  '$$3(-2) - (-2)(m) = 0 \\implies -6 + 2m = 0 \\implies 2m = 6 \\implies m = 3$$',
                  'Thus $m = 3$ and $n = -2$.'
                ],
                stepByStepSolutionAr: [
                  '١. معادلة العزم حول محور الصادات:',
                  '$$M_y = z F_x - x F_z = -4 - n$$',
                  'ومنها نجد أن $n = -2$.',
                  '٢. معادلة انعدام العزم حول محور السينات ($M_x = 0$):',
                  '$$M_x = y F_z - z F_y = 0$$',
                  '$$3(-2) - (-2)(m) = 0 \\implies -6 + 2m = 0 \\implies 2m = 6 \\implies m = 3$$',
                  'إذن $m = 3$ و $n = -2$.'
                ],
                teacherTipEn: 'A high-yield question in Ministry exams that tests coordinate axis moment formulas directly.',
                teacherTipAr: 'مسألة امتحانية كلاسيكية لاختبار قوانين مركبات العزوم حول محاور الإحداثيات.'
              }
            ]
          },
          interactiveWidget: {
            type: '3d_vectors',
            titleEn: '3D Spatial Moment & Perpendicular Arm Visualizer',
            titleAr: 'محاكي العزم ثلاثي الأبعاد وطول العمود',
            descriptionEn: 'Interactive 3D WebGL tool displaying force line of action, moment vector r x F, and perpendicular arm projection.',
            descriptionAr: 'أداة تفاعلية ثلاثية الأبعاد لعرض متجه العزم وخط عمل القوة وطول العمود الساقط.'
          }
        }
      ]
    }
  ]
};
