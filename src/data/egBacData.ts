import type { Curriculum } from '../types/curriculum';

export const egBacCurriculum: Curriculum = {
  id: 'egbac',
  nameEn: 'New Egyptian Baccalaureate (EG-Bac)',
  nameAr: 'نظام البكالوريا المصرية الجديد (EG-Bac)',
  subtitleEn: 'Grade 12 Advanced Mathematical Sciences & STEM Track',
  subtitleAr: 'المرحلة الثانوية المتقدمة - المسار العلمي والرياضي الحديث بوزارة التربية والتعليم',
  moeOfficialBaselineEn: 'Egyptian Ministry of Education New Baccalaureate Educational Framework 2025/2026',
  moeOfficialBaselineAr: 'الإطار الوطني المطور لإعادة هيكلة الثانوية والبكالوريا المصرية - وزارة التربية والتعليم',
  branches: [
    {
      id: 'egbac_vectors_geometry',
      titleEn: 'Vector Spaces & 3D Geometry',
      titleAr: 'الفضاءات المتجهة والهندسة ثلاثية الأبعاد',
      categoryEn: 'Advanced Mathematics',
      categoryAr: 'الرياضيات المتقدمة',
      iconName: 'Grid',
      colorGradient: 'from-blue-600 to-cyan-800',
      chapters: [
        {
          id: 'egbac_ch1',
          chapterNumber: 1,
          titleEn: 'Vector Spaces & Analytic Geometry in $\\mathbb{R}^3$',
          titleAr: 'الفضاءات المتجهة والهندسة التحليلية في $\\mathbb{R}^3$',
          descriptionEn: 'Vector space properties, linear combinations, basis vectors $\\hat{i},\\hat{j},\\hat{k}$, inner products $\\vec{u} \\cdot \\vec{v}$, planes, lines, and distance metrics in 3D Euclidean space $\\mathbb{R}^3$.',
          descriptionAr: 'خواص الفضاءات المتجهة $\\mathbb{R}^3$، التراكيب الخطية، أساس الفضاء $\\hat{i},\\hat{j},\\hat{k}$، الضرب الداخلي، المستويات، المستقيمات، وحساب الأبعاد في الفراغ.',
          isFullyEquipped: true,
          lessons: [
            {
              id: 'egbac_l1',
              titleEn: 'Linear Independence, Basis & Inner Product in $\\mathbb{R}^3$',
              titleAr: 'الاستقلال الخطي والقواعد والضرب الداخلي في $\\mathbb{R}^3$',
              summaryEn: 'Understanding vector space $\\mathbb{R}^3$, linear independence test via determinants $\\det(M)$, standard basis vectors $(\\hat{i}, \\hat{j}, \\hat{k})$, and inner product properties $\\vec{u} \\cdot \\vec{v}$.',
              summaryAr: 'فهم فضاء المتجهات $\\mathbb{R}^3$، اختبار الاستقلال الخطي بواسطة المحددات، متجهات الأساس القياسية $(\\hat{i}, \\hat{j}, \\hat{k})$، وخواص الضرب الداخلي $\\vec{u} \\cdot \\vec{v}$.',
              theoryContentEn: `### 1. Vector Space $\\mathbb{R}^3$ & Linear Combinations
A vector $\\vec{v} \\in \\mathbb{R}^3$ is uniquely expressed as a linear combination of standard basis vectors $\\hat{i}, \\hat{j}, \\hat{k}$:
$\\vec{v} = c_1 \\hat{i} + c_2 \\hat{j} + c_3 \\hat{k} = (c_1, c_2, c_3)$

### 2. Linear Independence & Determinant Test:
A set of vectors $\\{\\vec{u}, \\vec{v}, \\vec{w}\\}$ in $\\mathbb{R}^3$ is **linearly independent** if and only if:
$k_1 \\vec{u} + k_2 \\vec{v} + k_3 \\vec{w} = \\vec{0} \\implies k_1 = k_2 = k_3 = 0$
- **Determinant Criterion:** They are linearly independent if and only if:
  $\\det \\begin{pmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \\end{pmatrix} \\neq 0$
- If the determinant equals zero, the vectors are **coplanar** (linearly dependent).

### 3. Equations of a Straight Line in 3D Space:
For a line passing through point $A(x_0, y_0, z_0)$ with direction vector $\\vec{d} = (a, b, c)$:
- **Vector Form:** $\\vec{r} = \\vec{r}_0 + t \\vec{d}$
- **Parametric Form:** $x = x_0 + at, \\quad y = y_0 + bt, \\quad z = z_0 + ct$
- **Cartesian (Symmetric) Form:** $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$

### 4. Equations of a Plane in 3D Space:
For a plane passing through $A(x_0, y_0, z_0)$ with normal vector $\\vec{n} = (A, B, C)$:
- **Vector Equation:** $\\vec{n} \\cdot \\vec{r} = \\vec{n} \\cdot \\vec{r}_0$
- **General Equation:** $Ax + By + Cz + D = 0$
- **Intercept Form:** If plane intersects axes at $(a, 0, 0)$, $(0, b, 0)$, and $(0, 0, c)$:
  $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$

### 5. Metric Angle and Distance Formulas:
- **Angle $\\theta$ between a line $\\vec{d}$ and a plane $\\vec{n}$:**
  $\\sin(\\theta) = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|}$
- **Angle $\\theta$ between two planes $\\vec{n}_1$ and $\\vec{n}_2$:**
  $\\cos(\\theta) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\| \\|\\vec{n}_2\\|}$
- **Perpendicular Distance from Point $P(x_1, y_1, z_1)$ to Plane $Ax + By + Cz + D = 0$:**
  $L = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$`,
              theoryContentAr: `### ١. الفضاء المتجهي $\\mathbb{R}^3$ والتراكيب الخطية
يعبر عن أي متجه $\\vec{v} \\in \\mathbb{R}^3$ كتركيبة خطية وحيدة من متجهات الأساس القياسية $\\hat{i}, \\hat{j}, \\hat{k}$:
$\\vec{v} = c_1 \\hat{i} + c_2 \\hat{j} + c_3 \\hat{k} = (c_1, c_2, c_3)$

### ٢. اختبار الاستقلال الخطي بواسطة المحددات:
تكون المتجهات الثلاثة $\\{\\vec{u}, \\vec{v}, \\vec{w}\\}$ في $\\mathbb{R}^3$ **مستقلة خطياً** إذا وفقط إذا كان:
$k_1 \\vec{u} + k_2 \\vec{v} + k_3 \\vec{w} = \\vec{0} \\implies k_1 = k_2 = k_3 = 0$
- **معيار المحدد:** تكون المتجهات مستقلة خطياً إذا وفقط إذا كان:
  $\\det \\begin{pmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \\end{pmatrix} \\neq 0$
- إذا كان المحدد مساوياً للصفر، تكون المتجهات **تقع في نفس المستوى** (مرتبطة خطياً).

### ٣. صور معادلة المستقيم في الفراغ:
المستقيم المار بالنقطة $A(x_0, y_0, z_0)$ ومتجه اتجاهه $\\vec{d} = (a, b, c)$:
- **الصورة المتجهية:** $\\vec{r} = \\vec{r}_0 + t \\vec{d}$
- **الصورة البارامترية:** $x = x_0 + at, \\quad y = y_0 + bt, \\quad z = z_0 + ct$
- **الصورة الكارتيزية (الإحداثية المتماثلة):** $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$

### ٤. صور معادلة المستوى في الفراغ:
المستوى المار بالنقطة $A(x_0, y_0, z_0)$ والمتجه العمودي عليه $\\vec{n} = (A, B, C)$:
- **الصورة المتجهية:** $\\vec{n} \\cdot \\vec{r} = \\vec{n} \\cdot \\vec{r}_0$
- **الصورة العامة:** $Ax + By + Cz + D = 0$
- **صورة الأجزاء المقطوعة:** إذا قطع المستوى محاور الإحداثيات في $(a, 0, 0)$ و $(0, b, 0)$ و $(0, 0, c)$:
  $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$

### ٥. قوانين الزوايا والأبعاد القياسية:
- **قياس الزاوية $\\theta$ بين خط مستقيم $\\vec{d}$ ومستوى $\\vec{n}$:**
  $\\sin(\\theta) = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|}$
- **قياس الزاوية $\\theta$ بين مستويين عمودياهما $\\vec{n}_1$ و $\\vec{n}_2$:**
  $\\cos(\\theta) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\| \\|\\vec{n}_2\\|}$
- **طول العمود الساقط من نقطة $P(x_1, y_1, z_1)$ على المستوى $Ax + By + Cz + D = 0$:**
  $L = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$`,
              formulas: [
                { labelEn: '3D Line Vector Form', labelAr: 'الصورة المتجهية للمستقيم', latex: '\\vec{r} = \\vec{r}_0 + t \\vec{d}' },
                { labelEn: '3D Plane General Form', labelAr: 'معادلة المستوى العامة', latex: 'Ax + By + Cz + D = 0' },
                { labelEn: 'Distance from Point to Plane', labelAr: 'طول العمود النازل من نقطة على مستوى', latex: 'L = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry EG-Bac Advanced Mathematics Curriculum Guide',
                bookTitleAr: 'دليل منهج البكالوريا المصرية الجديد - الرياضيات المتقدمة',
                grade: 'EG-Bac Senior Level',
                term: 'Term 1',
                officialCode: 'MOE-EGBAC-VEC-CH1-L1',
                pageRange: 'pp. 12 - 38'
              },
              lessonPlan: {
                titleEn: 'EG-Bac Lesson Plan: Vector Spaces & Planes in 3D',
                titleAr: 'خطة درس البكالوريا: الفضاءات المتجهة والمستويات في الفراغ',
                gradeLevel: 'EG-Bac Senior Track',
                durationMinutes: 90,
                moeCode: 'MOE-EGBAC-VEC-CH1-L1',
                bloomsObjectivesEn: [
                  'Evaluate linear independence of 3D vector sets using matrix determinants.',
                  'Transform seamlessly between Vector, Parametric, and Cartesian equations of lines and planes.',
                  'Calculate shortest distance between skew lines and perpendicular distance from a point to a plane.'
                ],
                bloomsObjectivesAr: [
                  'اختبار الاستقلال الخطي لمجموعة متجهات في الفراغ باستخدام المحددات.',
                  'التحويل السلس بين الصور المتجهية والبارامترية والكارتيزية للمستقيم والمستوى.',
                  'حساب أقصر بعد بين مستقيمين متخالفين وطول العمود النازل من نقطة على مستوى.'
                ],
                prerequisitesEn: ['3D Vector cross product', 'Matrix determinants 3x3'],
                prerequisitesAr: ['الضرب الاتجاهي للمتجهات في الفراغ', 'محدد المصفوفة ٣×٣'],
                keyVocabularyEn: [
                  { term: 'Linear Independence', definition: 'Set of vectors where none can be expressed as a linear combination of others.' },
                  { term: 'Normal Vector n', definition: 'Vector perpendicular to all vectors lying in the plane.' }
                ],
                keyVocabularyAr: [
                  { term: 'الاستقلال الخطي', definition: 'مجموعة من المتجهات لا يمكن كتابة أي منها كتركيبة خطية من المتجهات الأخرى.' },
                  { term: 'المتجه العمودي ن', definition: 'المتجه العمودي على المستوى وعلى جميع المتجهات الواقعة فيه.' }
                ],
                teachingPacing: [
                  {
                    phaseEn: '3D Interactive Geometry Lab (20 mins)',
                    phaseAr: 'مختبر الهندسة ثلاثية الأبعاد (٢٠ دقيقة)',
                    duration: '20 mins',
                    activitiesEn: 'Use 3D canvas tool to plot normal vector n and show how dot product n . (r - r0) = 0 defines a plane.',
                    activitiesAr: 'استخدام شاشة الرسم ثلاثية الأبعاد لعرض المتجه العمودي وكيف يحدد معادلة المستوى.'
                  }
                ],
                commonMisconceptionsEn: ['Assuming two lines in 3D space that do not intersect MUST be parallel! In 3D, non-parallel non-intersecting lines are skew lines.'],
                commonMisconceptionsAr: ['اعتقاد أن المستقيمين غير المتقاطعين في الفراغ يجب أن يكونا متوازيين! في الفراغ، المستقيمان غير المتوازيين وغير المتقاطعين هما مستقيمان متخالفان.'],
                differentiationEn: { struggling: 'Focus on 3D coordinate planes before general planes.', advanced: 'Derive formula for shortest distance between two skew lines.' },
                differentiationAr: { struggling: 'التركيز على المستويات المحورية أولاً قبل المستويات المائلة.', advanced: 'استنتاج قانون أقصر بعد بين مستقيمين متخالفين في الفراغ.' },
                formativeAssessmentEn: 'Find the Cartesian equation of the plane passing through A(1, 2, -1) with normal vector n = (3, -1, 4).',
                formativeAssessmentAr: 'أوجد المعادلة الكارتيزية للمستوى المار بالنقطة أ(١، ٢، -١) والمتجه العمودي عليه ن = (٣، -١، ٤).',
                exitTicketQuestion: {
                  questionEn: 'Find the perpendicular distance from point $P(2, 3, -1)$ to the plane $2x - y + 2z - 9 = 0$.',
                  questionAr: 'أوجد طول العمود النازل من النقطة $P(2, 3, -1)$ على المستوى $2x - y + 2z - 9 = 0$.',
                  solutionEn: '$$L = \\frac{|2(2) - 1(3) + 2(-1) - 9|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|4 - 3 - 2 - 9|}{\\sqrt{9}} = \\frac{|-10|}{3} = \\frac{10}{3}\\text{ units}$$',
                  solutionAr: '$$L = \\frac{|2(2) - 1(3) + 2(-1) - 9|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|4 - 3 - 2 - 9|}{\\sqrt{9}} = \\frac{|-10|}{3} = \\frac{10}{3}\\text{ وحدة طول}$$'
                }
              },
              worksheet: {
                id: 'ws_egbac_l1',
                titleEn: 'EG-Bac Solved Worksheet: Vector Geometry & Planes',
                titleAr: 'ورقة عمل محلولة: هندسة المتجهات والمستويات في البكالوريا',
                descriptionEn: 'Advanced STEM track exam questions.',
                descriptionAr: 'أسئلة مسار العلوم والرياضيات المتقدمة.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p7',
                    titleEn: 'EG-Bac Exam Problem (Plane Equation from 3 Points)',
                    titleAr: 'مسألة بكالوريا (معادلة المستوى المار بثلاث نقاط)',
                    difficulty: 'exam_standard',
                    diagramType: 'plane_intercepts_3d',
                    questionEn: 'Find the general equation of the plane passing through points $A(1, 0, 0)$, $B(0, 2, 0)$, and $C(0, 0, 3)$.',
                    questionAr: 'أوجد المعادلة العامة للمستوى المار بالنقاط $A(1, 0, 0)$ و $B(0, 2, 0)$ و $C(0, 0, 3)$.',
                    optionsEn: [
                      '6x + 3y + 2z - 6 = 0',
                      '3x + 6y + 2z - 6 = 0',
                      '6x + 3y + 2z + 6 = 0',
                      '2x + 3y + 6z - 6 = 0'
                    ],
                    optionsAr: [
                      '6x + 3y + 2z - 6 = 0',
                      '3x + 6y + 2z - 6 = 0',
                      '6x + 3y + 2z + 6 = 0',
                      '2x + 3y + 6z - 6 = 0'
                    ],
                    correctAnswer: '6x + 3y + 2z - 6 = 0',
                    correctIndex: 0,
                    hintEn: 'Form vectors AB and AC. Normal vector n = AB x AC.',
                    hintAr: 'كون المتجهين أب و أع. المتجه العمودي ن = أب × أع.',
                    stepByStepSolutionEn: [
                      'Form position vectors along the plane:',
                      '$$\\vec{AB} = B - A = (-1, 2, 0)$$',
                      '$$\\vec{AC} = C - A = (-1, 0, 3)$$',
                      'Calculate Normal Vector $\\vec{n} = \\vec{AB} \\times \\vec{AC}$ using 3x3 determinant:',
                      '$$\\vec{n} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ -1 & 2 & 0 \\\\ -1 & 0 & 3 \\end{vmatrix} = (6 - 0)\\hat{i} - (-3 - 0)\\hat{j} + (0 - (-2))\\hat{k} = (6, 3, 2)$$',
                      'General Plane Equation: $6x + 3y + 2z = d$.',
                      'Substitute point $A(1, 0, 0)$ to find $d$: $6(1) + 3(0) + 2(0) = 6 \\implies d = 6$.',
                      'Therefore, equation is $6x + 3y + 2z - 6 = 0$ (or intercept form $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$).'
                    ],
                    stepByStepSolutionAr: [
                      'تكوين متجهات الاتجاه في المستوى:',
                      '$$\\vec{AB} = B - A = (-1, 2, 0)$$',
                      '$$\\vec{AC} = C - A = (-1, 0, 3)$$',
                      'حساب المتجه العمودي $\\vec{n} = \\vec{AB} \\times \\vec{AC}$ بالمحدد:',
                      '$$\\vec{n} = (6, 3, 2)$$',
                      'معادلة المستوى العامة: $6x + 3y + 2z = d$.',
                      'بالتعويض بالنقطة $A(1, 0, 0)$ نجد أن $d = 6$.',
                      'إذن المعادلة هي $6x + 3y + 2z - 6 = 0$ (أو صورة الأجزاء المقطوعة $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$).'
                    ],
                    teacherTipEn: 'Highlight the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$ for planes intersecting axes at $(a,0,0)$, $(0,b,0)$, $(0,0,c)$!',
                    teacherTipAr: 'وضح للطلاب صورة الأجزاء المقطوعة س/أ + ص/ب + ع/جـ = ١ للمستوى المار بمحاور الإحداثيات!'
                  },
                  {
                    id: 'p7_2',
                    titleEn: 'Foundation Problem: Coplanar Vectors Determinant Test',
                    titleAr: 'مسألة تأسيسية: شرط توازي المستوى (المتجهات المستوية)',
                    difficulty: 'medium',
                    diagramType: 'coplanar_vectors_3d',
                    questionEn: 'In $\\mathbb{R}^3$, the three vectors $\\vec{u} = (1, 2, 3)$, $\\vec{v} = (0, 1, 2)$, and $\\vec{w} = (1, 0, k)$ are coplanar (linearly dependent). Find the value of $k$.',
                    questionAr: 'في الفراغ ثلاثي الأبعاد $\\mathbb{R}^3$، المتجهات الثلاثة $\\vec{u} = (1, 2, 3)$ و $\\vec{v} = (0, 1, 2)$ و $\\vec{w} = (1, 0, k)$ تقع في نفس المستوى (مرتبطة خطياً). احسب قيمة $k$.',
                    optionsEn: ['1', '-1', '2', '-2'],
                    optionsAr: ['١', '-١', '٢', '-٢'],
                    correctAnswer: '-1',
                    correctIndex: 1,
                    hintEn: 'Three vectors in R^3 are coplanar if and only if their scalar triple product (determinant) equals zero.',
                    hintAr: 'ثلاثة متجهات في الفراغ تقع في مستوى واحد إذا وفقط إذا كان الضرب الثلاثي القياسي (المحدد) يساوي صفراً.',
                    stepByStepSolutionEn: [
                      'The condition for coplanar vectors is that their scalar triple product equals zero:',
                      '$$\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 1 & 0 & k \\end{vmatrix} = 0$$',
                      'Expand along the third row:',
                      '$$1 \\cdot (4 - 3) - 0 + k \\cdot (1 - 0) = 0$$',
                      '$$1(1) + k(1) = 0 \\implies 1 + k = 0 \\implies k = -1$$'
                    ],
                    stepByStepSolutionAr: [
                      'شرط وقوع ثلاثة متجهات في نفس المستوى هو أن يكون حاصل الضرب الثلاثي القياسي مساوياً للصفر:',
                      '$$\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 1 & 0 & k \\end{vmatrix} = 0$$',
                      'بفك المحدد عن طريق عناصر الصف الثالث:',
                      '$$1 \\cdot (4 - 3) + k \\cdot (1 - 0) = 0$$',
                      '$$1 + k = 0 \\implies k = -1$$'
                    ],
                    teacherTipEn: 'Remind students of scalar triple product u . (v x w) = 0 for coplanar vectors.',
                    teacherTipAr: 'ذكّر الطلاب بأن الضرب الثلاثي القياسي يعبر عن حجم متوازي السطوح، وعندما تقع المتجهات في نفس المستوى فإن الحجم يساوي صفراً.'
                  },
                  {
                    id: 'p7_3',
                    titleEn: 'HOTS Problem: Angle Between a Straight Line and a Plane',
                    titleAr: 'مسألة مهارات عليا: قياس الزاوية بين مستقيم ومستوى',
                    difficulty: 'hots',
                    diagramType: 'line_plane_angle_3d',
                    questionEn: 'Find the measure of the angle $\\theta$ between the straight line $\\vec{r} = (2, -1, 3) + t(1, 0, 1)$ and the plane $y + z - 5 = 0$.',
                    questionAr: 'أوجد قياس الزاوية $\\theta$ بين الخط المستقيم $\\vec{r} = (2, -1, 3) + t(1, 0, 1)$ والمستوى $y + z - 5 = 0$.',
                    optionsEn: ['30^\\circ', '45^\\circ', '60^\\circ', '90^\\circ'],
                    optionsAr: ['30^\\circ', '45^\\circ', '60^\\circ', '90^\\circ'],
                    correctAnswer: '30^\\circ',
                    correctIndex: 0,
                    hintEn: 'Remember that the angle between a line and a plane uses sin(theta) = |d . n| / (||d|| * ||n||).',
                    hintAr: 'تذكر أن قياس الزاوية بين مستقيم ومستوى يستخدم قانون جا: جا(هـ) = |هـ . ن| / (معيار هـ × معيار ن).',
                    stepByStepSolutionEn: [
                      'Extract the direction vector of the line: $\\vec{d} = (1, 0, 1)$, with magnitude $\\|\\vec{d}\\| = \\sqrt{1^2 + 0^2 + 1^2} = \\sqrt{2}$.',
                      'Extract the normal vector to the plane $0x + 1y + 1z - 5 = 0$: $\\vec{n} = (0, 1, 1)$, with magnitude $\\|\\vec{n}\\| = \\sqrt{0^2 + 1^2 + 1^2} = \\sqrt{2}$.',
                      'Compute the dot product: $|\\vec{d} \\cdot \\vec{n}| = |(1)(0) + (0)(1) + (1)(1)| = 1$.',
                      'Apply the formula for the angle between a line and a plane:',
                      '$$\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$$',
                      'Since $\\sin\\theta = \\frac{1}{2}$, the angle is $\\theta = 30^\\circ$ (or $\\frac{\\pi}{6}\\text{ radians}$).'
                    ],
                    stepByStepSolutionAr: [
                      'استخراج متجه اتجاه المستقيم: $\\vec{d} = (1, 0, 1)$، معياره $\\|\\vec{d}\\| = \\sqrt{1 + 0 + 1} = \\sqrt{2}$.',
                      'استخراج المتجه العمودي على المستوى $0x + 1y + 1z - 5 = 0$: $\\vec{n} = (0, 1, 1)$، معياره $\\|\\vec{n}\\| = \\sqrt{0 + 1 + 1} = \\sqrt{2}$.',
                      'حساب الضرب القياسي: $|\\vec{d} \\cdot \\vec{n}| = |(1)(0) + (0)(1) + (1)(1)| = 1$.',
                      'تطبيق قانون جيب الزاوية بين مستقيم ومستوى:',
                      '$$\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$$',
                      'بما أن $\\sin\\theta = \\frac{1}{2}$، إذن قياس الزاوية هو $\\theta = 30^\\circ$ (أو $\\frac{\\pi}{6}$ راديان).'
                    ],
                    teacherTipEn: 'Crucial exam distinction: Angle between two planes uses cos(theta), but angle between line and plane uses sin(theta)!',
                    teacherTipAr: 'تمييز امتحاني هام جداً: الزاوية بين مستويين تستخدم جتا(هـ)، بينما الزاوية بين مستقيم ومستوى تستخدم جا(هـ) لأن المتجه ن عمودي على المستوى.'
                  }
                ]
              },
              interactiveWidget: {
                type: '3d_vectors',
                titleEn: '3D Plane & Normal Vector Interactive Explorer',
                titleAr: 'مستكشف المستويات والمتجه العمودي في الفراغ ثلاثي الأبعاد',
                descriptionEn: 'Interactive 3D WebGL tool for EG-Bac vectors, plane normal visualizer, and point-to-plane distance projection.',
                descriptionAr: 'أداة تفاعلية ثلاثية الأبعاد لعرض المستويات وإسقاط النقطة على المستوى.'
              }
            }
          ]
        }
      ]
    }
  ]
};
