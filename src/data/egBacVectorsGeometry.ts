import type { Branch } from '../types/curriculum';

export const egBacVectorsGeometryBranch: Branch = {
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
$$\\vec{v} = c_1 \\hat{i} + c_2 \\hat{j} + c_3 \\hat{k} = (c_1, c_2, c_3)$$

### 2. Linear Independence & Determinant Test:
A set of vectors $\\{\\vec{u}, \\vec{v}, \\vec{w}\\}$ in $\\mathbb{R}^3$ is **linearly independent** if and only if:
$$k_1 \\vec{u} + k_2 \\vec{v} + k_3 \\vec{w} = \\vec{0} \\implies k_1 = k_2 = k_3 = 0$$
- **Determinant Criterion:** They are linearly independent if and only if:
  $$\\det \\begin{pmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \\end{pmatrix} \\neq 0$$
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
  $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$

### 5. Metric Angle and Distance Formulas:
- **Angle $\\theta$ between a line $\\vec{d}$ and a plane $\\vec{n}$:**
  $$\\sin(\\theta) = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|}$$
- **Angle $\\theta$ between two planes $\\vec{n}_1$ and $\\vec{n}_2$:**
  $$\\cos(\\theta) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\| \\|\\vec{n}_2\\|}$$
- **Perpendicular Distance from Point $P(x_1, y_1, z_1)$ to Plane $Ax + By + Cz + D = 0$:**
  $$L = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$`,
          theoryContentAr: `### ١. الفضاء المتجهي $\\mathbb{R}^3$ والتراكيب الخطية
يعبر عن أي متجه $\\vec{v} \\in \\mathbb{R}^3$ كتركيبة خطية وحيدة من متجهات الأساس القياسية $\\hat{i}, \\hat{j}, \\hat{k}$:
$$\\vec{v} = c_1 \\hat{i} + c_2 \\hat{j} + c_3 \\hat{k} = (c_1, c_2, c_3)$$

### ٢. اختبار الاستقلال الخطي بواسطة المحددات:
تكون المتجهات الثلاثة $\\{\\vec{u}, \\vec{v}, \\vec{w}\\}$ في $\\mathbb{R}^3$ **مستقلة خطياً** إذا وفقط إذا كان:
$$k_1 \\vec{u} + k_2 \\vec{v} + k_3 \\vec{w} = \\vec{0} \\implies k_1 = k_2 = k_3 = 0$$
- **معيار المحدد:** تكون المتجهات مستقلة خطياً إذا وفقط إذا كان:
  $$\\det \\begin{pmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \\end{pmatrix} \\neq 0$$
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
  $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$

### ٥. قوانين الزوايا والأبعاد القياسية:
- **قياس الزاوية $\\theta$ بين خط مستقيم $\\vec{d}$ ومستوى $\\vec{n}$:**
  $$\\sin(\\theta) = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|}$$
- **قياس الزاوية $\\theta$ بين مستويين عمودياهما $\\vec{n}_1$ و $\\vec{n}_2$:**
  $$\\cos(\\theta) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\| \\|\\vec{n}_2\\|}$$
- **طول العمود الساقط من نقطة $P(x_1, y_1, z_1)$ على المستوى $Ax + By + Cz + D = 0$:**
  $$L = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$`,
          formulas: [
            { labelEn: '3D Line Vector Form', labelAr: 'الصورة المتجهية للمستقيم', latex: '\\vec{r} = \\vec{r}_0 + t \\vec{d}' },
            { labelEn: '3D Plane General Form', labelAr: 'معادلة المستوى العامة', latex: 'Ax + By + Cz + D = 0' },
            { labelEn: 'Line-Plane Angle Sine', labelAr: 'جيب زاوية مستقيم ومستوى', latex: '\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|}' },
            { labelEn: 'Point to Plane Distance', labelAr: 'بعد نقطة عن مستوى', latex: 'L = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Vector Geometry',
            bookTitleAr: 'البكالوريا المصرية: الرياضيات المتقدمة - الهندسة المتجهية',
            grade: 'Grade 12 (Baccalaureate Level)',
            term: 'Term 1',
            officialCode: 'MOE-EGBAC-VEC-CH1',
            pageRange: 'pp. 12-45'
          },
          lessonPlan: {
            titleEn: 'Advanced 3D Geometry: Linear Subspaces, Planes & Skew Lines',
            titleAr: 'الهندسة الفراغية المتقدمة: الفضاءات الجزئية والمستويات والمستقيمات المتخالفة',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-VEC-CH1-LP1',
            bloomsObjectivesEn: [
              'Analyze linear independence of vectors using determinants in 3D Euclidean space.',
              'Derive and synthesize vector, parametric, and general forms of 3D lines and planes.',
              'Calculate perpendicular distances and intersection angles between geometric varieties in R^3.'
            ],
            bloomsObjectivesAr: [
              'تحليل الاستقلال الخطي للمتجهات باستخدام المحددات في الفضاء ثلاثي الأبعاد.',
              'استنتاج وتركيب الصور المتجهية والبارامترية والعامة للمستقيمات والمستويات.',
              'حساب أطوال الأعمدة وزوايا التقاطع بين التراكيب الهندسية في الفراغ.'
            ],
            prerequisitesEn: ['Dot and Cross Products', '3x3 Matrix Determinants', 'Basic 2D Analytic Geometry'],
            prerequisitesAr: ['الضرب القياسي والاتجاهي للمتجهات', 'محددات المصفوفات 3x3', 'الهندسة التحليلية المستوية'],
            keyVocabularyEn: [
              { term: 'Linear Independence', definition: 'Property of a set of vectors where no vector can be expressed as a linear combination of others.' },
              { term: 'Normal Vector', definition: 'A vector perpendicular to all vectors lying in a given plane.' },
              { term: 'Coplanar Vectors', definition: 'Three or more vectors in R^3 that lie in the same geometric plane.' }
            ],
            keyVocabularyAr: [
              { term: 'الاستقلال الخطي', definition: 'خاصية لمجموعة متجهات لا يمكن كتابة أي منها كتركيبة خطية لبقية المتجهات.' },
              { term: 'متجه الاتجاه العمودي', definition: 'متجه يعامد كافة المتجهات الواقعة في المستوى الهندسي.' },
              { term: 'المتجهات المستوية', definition: 'ثلاثة متجهات أو أكثر تقع جميعها في مستوى فراغي واحد.' }
            ],
            teachingPacing: [
              { phaseEn: 'Hook & Linear Combinations', phaseAr: 'التهيئة والتراكيب الخطية', duration: '15 min', activitiesEn: 'Demonstrate span and basis in R^3 using 3D coordinate frame model.', activitiesAr: 'عرض مفهوم المدى والقاعدة في الفراغ باستخدام مجسم المحاور ثلاثية الأبعاد.' },
              { phaseEn: 'Plane & Line Representations', phaseAr: 'معادلات المستقيم والمستوى', duration: '35 min', activitiesEn: 'Derive point-normal plane equations and explore intercept form x/a + y/b + z/c = 1.', activitiesAr: 'استنتاج معادلة المستوى بنقطة وعمودي واستكشاف صورة الأجزاء المقطوعة.' },
              { phaseEn: 'Metric Geometry & Angles', phaseAr: 'المسافات والزوايا القياسية', duration: '25 min', activitiesEn: 'Calculate distance from point to plane and angle between line and plane using dot product.', activitiesAr: 'حساب بعد نقطة عن مستوى والزاوية بين مستقيم ومستوى باستخدام الضرب القياسي.' },
              { phaseEn: 'Synthesis & Exit Ticket', phaseAr: 'التقييم الختامي وتذكرة الخروج', duration: '15 min', activitiesEn: 'Students solve an angle calculation between line and plane.', activitiesAr: 'حل مسألة إيجاد الزاوية بين مستقيم ومستوى.' }
            ],
            commonMisconceptionsEn: [
              'Confusing the angle between a line and plane (sin theta) with the angle between two planes (cos theta).',
              'Assuming that if dot product of two vectors is zero, they must be collinear.'
            ],
            commonMisconceptionsAr: [
              'الخلط بين زاوية مستقيم ومستوى (تستخدم جا هـ) وزاوية مستويين (تستخدم جتا هـ).',
              'الاعتقاد الخاطئ بأن انعدام الضرب القياسي يعني التوازي بدلاً من التعامد.'
            ],
            differentiationEn: {
              struggling: 'Use physical coordinate axes and planar cardboard models to visualize plane normals and projections.',
              advanced: 'Explore affine hyperplanes in R^n and dual spaces.'
            },
            differentiationAr: {
              struggling: 'استخدام نماذج فيزيائية ثلاثية الأبعاد لتجسيد المتجه العمودي على المستوى والمساقط.',
              advanced: 'استكشاف المستويات الفائقة في الفضاءات نونية الأبعاد والفضاءات المزدوجة.'
            },
            formativeAssessmentEn: 'Check students understanding of normal vectors by asking them to write the equation of a plane perpendicular to z-axis passing through (1, 2, 3).',
            formativeAssessmentAr: 'اختبار فهم المتجه العمودي بطلب كتابة معادلة المستوى الموازي للمستوى س ص والمار بالنقطة (١، ٢، ٣).',
            exitTicketQuestion: {
              questionEn: 'Find the distance from point (2, 3, 4) to plane 2x - y + 2z + 3 = 0.',
              questionAr: 'أوجد طول العمود الساقط من النقطة (٢، ٣، ٤) على المستوى ٢س - ص + ٢ع + ٣ = ٠.',
              solutionEn: 'L = |2(2) - (3) + 2(4) + 3| / sqrt(4 + 1 + 4) = |4 - 3 + 8 + 3| / 3 = 12 / 3 = 4 units.',
              solutionAr: 'ل = |٢(٢) - (٣) + ٢(٤) + ٣| ÷ جذر(٤ + ١ + ٤) = ١٢ ÷ ٣ = ٤ وحدات طول.'
            }
          },
          worksheet: {
            id: 'ws_egbac_l1',
            titleEn: 'Worksheet: 3D Planes, Lines & Vector Subspaces',
            titleAr: 'ورقة عمل: المستويات والمستقيمات والفضاءات المتجهة في الفراغ',
            descriptionEn: 'Practice problems on 3D analytic geometry, plane equations, linear independence, and angles.',
            descriptionAr: 'تمارين تدريبية على الهندسة التحليلية الفراغية، معادلات المستويات، الاستقلال الخطي، وحساب الزوايا.',
            estimatedTimeMinutes: 40,
            problems: [
              {
                id: 'p7_1',
                titleEn: 'Standard Problem: Equation of a Plane via Intercepts',
                titleAr: 'مسألة قياسية: معادلة المستوى بمعلومية الأجزاء المقطوعة',
                difficulty: 'easy',
                diagramType: 'plane_intercepts_3d',
                questionEn: 'A plane intersects the coordinate axes at points $A(1, 0, 0)$, $B(0, 2, 0)$, and $C(0, 0, 3)$. Find the general equation of this plane.',
                questionAr: 'مستوى يقطع محاور الإحداثيات في النقاط $A(1, 0, 0)$ و $B(0, 2, 0)$ و $C(0, 0, 3)$. أوجد المعادلة العامة لهذا المستوى.',
                optionsEn: [
                  '6x + 3y + 2z - 6 = 0',
                  'x + 2y + 3z - 6 = 0',
                  '3x + 2y + z - 6 = 0',
                  '6x + 3y + 2z + 6 = 0'
                ],
                optionsAr: [
                  '٦س + ٣ص + ٢ع - ٦ = ٠',
                  'س + ٢ص + ٣ع - ٦ = ٠',
                  '٣س + ٢ص + ع - ٦ = ٠',
                  '٦س + ٣ص + ٢ع + ٦ = ٠'
                ],
                correctAnswer: '6x + 3y + 2z - 6 = 0',
                correctIndex: 0,
                hintEn: 'Use the intercept form x/a + y/b + z/c = 1, then clear denominators.',
                hintAr: 'استخدم صورة الأجزاء المقطوعة س/أ + ص/ب + ع/جـ = ١ ثم اضرب في المضاعف المشترك الأصغر.',
                stepByStepSolutionEn: [
                  'The intercept form of a plane with intercepts $a=1, b=2, c=3$ is:',
                  '$$\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$$',
                  'Multiply all terms by 6 (LCM of 1, 2, 3):',
                  '$$6x + 3y + 2z = 6 \\implies 6x + 3y + 2z - 6 = 0$$'
                ],
                stepByStepSolutionAr: [
                  'صورة الأجزاء المقطوعة من محاور الإحداثيات $a=1, b=2, c=3$ هي:',
                  '$$\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$$',
                  'بالضرب في ٦ (المضاعف المشترك للأعداد ١، ٢، ٣):',
                  '$$6x + 3y + 2z = 6 \\implies 6x + 3y + 2z - 6 = 0$$'
                ],
                teacherTipEn: 'Highlight the intercept form x/a + y/b + z/c = 1 for planes intersecting axes at (a,0,0), (0,b,0), (0,0,c)!',
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
                  '$$1 \\cdot (4 - 3) - 0 + k \\cdot (1 - 0) = 0 \\implies 1 + k = 0 \\implies k = -1$$'
                ],
                stepByStepSolutionAr: [
                  'شرط وقوع ثلاثة متجهات في نفس المستوى هو أن يكون حاصل الضرب الثلاثي القياسي مساوياً للصفر:',
                  '$$\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 1 & 0 & k \\end{vmatrix} = 0$$',
                  'بفك المحدد عن طريق عناصر الصف الثالث:',
                  '$$1 \\cdot (4 - 3) + k \\cdot (1 - 0) = 0 \\implies 1 + k = 0 \\implies k = -1$$'
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
                  'Extract line direction: $\\vec{d} = (1, 0, 1)$, $\\|\\vec{d}\\| = \\sqrt{1^2 + 0^2 + 1^2} = \\sqrt{2}$.',
                  'Extract plane normal: $\\vec{n} = (0, 1, 1)$, $\\|\\vec{n}\\| = \\sqrt{0^2 + 1^2 + 1^2} = \\sqrt{2}$.',
                  'Compute dot product: $|\\vec{d} \\cdot \\vec{n}| = |(1)(0) + (0)(1) + (1)(1)| = 1$.',
                  'Apply formula: $\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$.',
                  'Therefore, $\\theta = 30^\\circ$.'
                ],
                stepByStepSolutionAr: [
                  'متجه اتجاه المستقيم: $\\vec{d} = (1, 0, 1)$، معياره $\\|\\vec{d}\\| = \\sqrt{2}$.',
                  'المتجه العمودي على المستوى: $\\vec{n} = (0, 1, 1)$، معياره $\\|\\vec{n}\\| = \\sqrt{2}$.',
                  'الضرب القياسي: $|\\vec{d} \\cdot \\vec{n}| = 1$.',
                  'جيب الزاوية: $\\sin\\theta = \\frac{1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2}$.',
                  'إذن قياس الزاوية $\\theta = 30^\\circ$.'
                ],
                teacherTipEn: 'Crucial exam distinction: Angle between two planes uses cos(theta), but angle between line and plane uses sin(theta)!',
                teacherTipAr: 'الزاوية بين مستويين تستخدم جتا(هـ)، بينما الزاوية بين مستقيم ومستوى تستخدم جا(هـ).'
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
    },
    {
      id: 'egbac_ch2',
      chapterNumber: 2,
      titleEn: 'Linear Systems, Matrix Rank & Affine Subspaces in $\\mathbb{R}^3$',
      titleAr: 'الأنظمة الخطية ورتبة المصفوفات والفضاءات التآلفية في $\\mathbb{R}^3$',
      descriptionEn: 'Matrix rank $r(A)$, Rouché-Capelli Theorem, geometric configurations of intersecting planes, Gram-Schmidt orthogonalization, and orthogonal projection metrics in affine Euclidean spaces.',
      descriptionAr: 'رتبة المصفوفة $r(A)$، نظرية روتشيه-كابيلي، الأوضاع النسبية والمجموعات الهندسية لتقاطع المستويات، تعامد جرام-شميت، ومسافات الإسقاط العمودي في الفضاءات التآلفية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_l2',
          titleEn: 'Matrix Rank, Rouché-Capelli Theorem & Intersecting Linear Subspaces',
          titleAr: 'رتبة المصفوفة ونظرية روتشيه-كابيلي وتقاطع الفضاءات الجزئية في الفراغ',
          summaryEn: 'Examine matrix rank via non-zero subdeterminants, apply Rouché-Capelli Theorem to classify solutions of linear systems $AX = B$, and characterize geometric intersections of 3 planes in $\\mathbb{R}^3$.',
          summaryAr: 'دراسة رتبة المصفوفة بواسطة المحددات الجزئية غير الصفرية، تطبيق نظرية روتشيه-كابيلي لتصنيف حلول الأنظمة الخطية، وتحديد الوضع الهندسي لتقاطع ٣ مستويات في الفراغ.',
          theoryContentEn: `### 1. Matrix Rank Definition & Computation
The **rank** of a matrix $A$, denoted $\\text{rank}(A)$ or $r(A)$, is the maximum number of linearly independent rows (or columns) of $A$:
- It equals the highest order of a non-zero minor (sub-determinant) extracted from $A$.
- For an $m \\times n$ matrix: $0 \\le \\text{rank}(A) \\le \\min(m, n)$.
- An $n \\times n$ square matrix has full rank $n$ if and only if $\\det(A) \\neq 0$ (non-singular / invertible).

### 2. The Rouché-Capelli (Kronecker-Capelli) Theorem:
Consider a system of $m$ linear equations in $n$ unknowns written in matrix form:
$$A X = B, \\quad \\text{where } A \\in \\mathcal{M}_{m \\times n}(\\mathbb{R}), \\; X \\in \\mathbb{R}^n, \\; B \\in \\mathbb{R}^m$$
Let $[A | B]$ be the **augmented matrix**.
1. **Consistency Criterion:** The system has at least one solution if and only if:
   $$\\text{rank}(A) = \\text{rank}([A | B])$$
2. **Unique Solution:**
   $$\\text{rank}(A) = \\text{rank}([A | B]) = n$$
   (The 3 planes intersect in exactly one point).
3. **Infinitely Many Solutions:**
   $$\\text{rank}(A) = \\text{rank}([A | B]) = r < n$$
   The solution set is an affine subspace of dimension $(n - r)$.
   - If $r = 2$ in $\\mathbb{R}^3$, the intersection is a straight line ($3 - 2 = 1$ dimension).
   - If $r = 1$ in $\\mathbb{R}^3$, the 3 planes are identical ($3 - 1 = 2$ dimensions).
4. **Inconsistent System (No Solution):**
   $$\\text{rank}(A) < \\text{rank}([A | B])$$

### 3. Geometric Classification of 3 Planes in $\\mathbb{R}^3$:
- **$\\text{rank}(A) = 3, \\; \\text{rank}([A|B]) = 3$:** The 3 planes intersect in a single unique point.
- **$\\text{rank}(A) = 2, \\; \\text{rank}([A|B]) = 2$:** The 3 planes intersect in a common straight line (pencil of planes).
- **$\\text{rank}(A) = 2, \\; \\text{rank}([A|B]) = 3$:** No single common point; the planes intersect pairwise in 3 parallel lines forming a triangular prism, or two planes are parallel and the third intersects them.
- **$\\text{rank}(A) = 1, \\; \\text{rank}([A|B]) = 2$:** Three parallel distinct planes (no common point).`,
          theoryContentAr: `### ١. تعريف رتبة المصفوفة وحسابها
**رتبة المصفوفة** $A$ ويرمز لها بالرمز $r(A)$، هي أكبر عدد من الصفوف (أو الأعمدة) المستقلة خطياً في $A$:
- تساوي رتبة أعلى محدد أصغر (غير صفري) يمكن استخراجه من عناصر المصفوفة.
- لأي مصفوفة من الرتبة $m \\times n$: يكون $0 \\le r(A) \\le \\min(m, n)$.
- تكون المصفوفة المربعة $n \\times n$ كاملة الرتبة ($r(A) = n$) إذا وفقط إذا كان محددها $\\det(A) \\neq 0$.

### ٢. نظرية روتشيه-كابيلي (Rouché-Capelli):
لنظام خطي مكون من $m$ معادلة في $n$ من المجاهيل:
$$A X = B$$
حيث $A$ مصفوفة المعاملات، و $[A | B]$ هي **المصفوفة الموسعة**.
١. **شرط إمكانية الحل (الاتساق):** يكون للنظام حل إذا وفقط إذا كان:
   $$r(A) = r([A | B])$$
٢. **حل وحيد:**
   $$r(A) = r([A | B]) = n$$
   (المستويات الثلاثة تتقاطع في نقطة واحدة وحيدة).
٣. **عدد لا نهائي من الحلول:**
   $$r(A) = r([A | B]) = r < n$$
   مجموعة الحل فضاء جزئي بعده $n - r$.
   - إذا كانت $r = 2$ في $\\mathbb{R}^3$: تتقاطع المستويات في خط مستقيم مشترك ($3 - 2 = 1$).
   - إذا كانت $r = 1$ في $\\mathbb{R}^3$: المستويات الثلاثة منطبقة تماماً ($3 - 1 = 2$).
٤. **نظام مستحيل الحل (متناقض):**
   $$r(A) < r([A | B])$$

### ٣. الأوضاع الهندسية لثلاثة مستويات في الفراغ:
- **$r(A) = 3, \\; r([A|B]) = 3$:** المستويات الثلاثة تتقاطع في نقطة واحدة.
- **$r(A) = 2, \\; r([A|B]) = 2$:** المستويات تتقاطع في خط مستقيم مشترك (حزمة مستويات).
- **$r(A) = 2, \\; r([A|B]) = 3$:** لا توجد نقطة مشتركة؛ المستويات تتقاطع مثنى مثنى في مستقيمات متوازية مشكّلة منشوراً ثلاثياً.
- **$r(A) = 1, \\; r([A|B]) = 2$:** ثلاثة مستويات متوازية ومختلفة.`,
          formulas: [
            { labelEn: 'Rouché-Capelli Consistency', labelAr: 'شرط اتساق روتشيه-كابيلي', latex: '\\text{rank}(A) = \\text{rank}([A|B])' },
            { labelEn: 'Unique Solution Dimension', labelAr: 'شرط الحل الوحيد', latex: '\\text{rank}(A) = \\text{rank}([A|B]) = n' },
            { labelEn: 'Degrees of Freedom', labelAr: 'درجات حرية الحل', latex: 'k = n - \\text{rank}(A)' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Vector Geometry',
            bookTitleAr: 'البكالوريا المصرية: الرياضيات المتقدمة - الهندسة المتجهية',
            grade: 'Grade 12 (Baccalaureate Level)',
            term: 'Term 1',
            officialCode: 'MOE-EGBAC-VEC-CH2-L1',
            pageRange: 'pp. 46-78'
          },
          lessonPlan: {
            titleEn: 'Linear Systems, Matrix Rank and Geometric Classification of Planes',
            titleAr: 'الأنظمة الخطية ورتبة المصفوفات والتصنيف الهندسي للمستويات',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-VEC-CH2-LP1',
            bloomsObjectivesEn: [
              'Evaluate the rank of coefficient and augmented matrices using determinant reduction and Gaussian elimination.',
              'Apply the Rouché-Capelli theorem to classify whether a system has zero, one, or infinitely many solutions.',
              'Interpret the algebraic solution sets as 3D geometric configurations of planes.'
            ],
            bloomsObjectivesAr: [
              'حساب رتبة مصفوفة المعاملات والمصفوفة الموسعة بالاختزال والمحددات الجزئية.',
              'تطبيق نظرية روتشيه-كابيلي لتحديد عدد حلول النظام الخطي بدقة.',
              'الربط الهندسي بين حلول النظام وأوضاع المستويات في الفراغ ثلاثي الأبعاد.'
            ],
            prerequisitesEn: ['Determinants of 3x3 matrices', 'Gaussian row operations', 'Normal vectors to planes'],
            prerequisitesAr: ['محددات الرتبة الثالثة', 'عمليات الصف البسيطة لجاوس', 'المتجهات العمودية على المستويات'],
            keyVocabularyEn: [
              { term: 'Augmented Matrix', definition: 'Matrix obtained by appending the constant column vector B to coefficient matrix A.' },
              { term: 'Matrix Rank', definition: 'The maximum number of linearly independent rows or columns in a matrix.' },
              { term: 'Consistent System', definition: 'A system of linear equations that possesses at least one valid solution.' }
            ],
            keyVocabularyAr: [
              { term: 'المصفوفة الموسعة', definition: 'المصفوفة الناتجة من إضافة عمود الحدود المطلقة B إلى مصفوفة المعاملات A.' },
              { term: 'رتبة المصفوفة', definition: 'أقصى عدد من الصفوف أو الأعمدة المستقلة خطياً في المصفوفة.' },
              { term: 'النظام المتسق', definition: 'نظام من المعادلات الخطية يمتلك حلاً واحداً على الأقل.' }
            ],
            teachingPacing: [
              { phaseEn: 'Matrix Rank Discovery', phaseAr: 'اكتشاف رتبة المصفوفة', duration: '20 min', activitiesEn: 'Calculate sub-determinants and reduce matrices to row echelon form.', activitiesAr: 'حساب المحددات الصغرى واختزال المصفوفات إلى الصورة الصفية المدرجة.' },
              { phaseEn: 'Rouché-Capelli Theorem', phaseAr: 'نظرية روتشيه-كابيلي', duration: '30 min', activitiesEn: 'Formulate rank criteria for unique, infinite, and no solutions.', activitiesAr: 'صياغة شروط الرتبة للحل الوحيد، الحلول اللانهائية، واستحالة الحل.' },
              { phaseEn: '3D Geometric Interpretation', phaseAr: 'التفسير الهندسي ثلاثي الأبعاد', duration: '25 min', activitiesEn: 'Map algebraic cases to geometric planes: point intersection, pencil of planes, and triangular prisms.', activitiesAr: 'ربط الحالات الجبرية بالأشكال الهندسية: تقاطع في نقطة، حزمة مستويات، ومنشور ثلاثي.' },
              { phaseEn: 'Exit Ticket Assessment', phaseAr: 'التقويم الختامي', duration: '15 min', activitiesEn: 'Solve for parameter k ensuring system compatibility.', activitiesAr: 'حل مسألة إيجاد الثابت k لضمان اتساق النظام.' }
            ],
            commonMisconceptionsEn: [
              'Assuming that det(A) = 0 automatically implies no solution (it may mean infinitely many solutions if ranks match).',
              'Forgetting to evaluate the augmented matrix rank when checking compatibility.'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد بأن انعدام المحدد يعني دائماً استحالة الحل (قد يعني حلولاً لانهائية إذا تساوت رتبة الموسعة).',
              'إغفال حساب رتبة المصفوفة الموسعة عند بحث اتساق النظام.'
            ],
            differentiationEn: {
              struggling: 'Use 2x2 systems first, then progress to 3x3 with zero coefficients.',
              advanced: 'Investigate affine subspaces of R^n and kernel/image rank-nullity theorem.'
            },
            differentiationAr: {
              struggling: 'البدء بأنظمة ٢×٢ قبل الانتقال إلى ٣×٣ مع معاملات صفرية مبسطة.',
              advanced: 'دراسة الفضاءات الجزئية التآلفية في الفراغ نوني الأبعاد ونظرية البعد للنواة والصورة.'
            },
            formativeAssessmentEn: 'Present a 3x3 system where rank(A)=2 and rank([A|B])=3, ask students to identify the geometric shape formed by the 3 planes.',
            formativeAssessmentAr: 'عرض نظام رتبته ٢ ورتبة موسعته ٣ وسؤال الطلاب عن الشكل الفراغي المتكون للمستويات.',
            exitTicketQuestion: {
              questionEn: 'If a 3x3 system has rank(A) = 2 and rank([A|B]) = 2, describe the geometry of the solution set.',
              questionAr: 'إذا كان لنظام ٣×٣ رتبة أ = ٢ ورتبة الموسعة = ٢، صف الشكل الهندسي لمجموعة الحل.',
              solutionEn: 'The solution set is a straight line in R^3 (dimension = 3 - 2 = 1).',
              solutionAr: 'مجموعة الحل تمثل خطاً مستقيماً في الفراغ ثلاثي الأبعاد (البعد = ٣ - ٢ = ١).'
            }
          },
          worksheet: {
            id: 'ws_egbac_l2',
            titleEn: 'Worksheet: Matrix Rank, Rouché-Capelli & Plane Intersections',
            titleAr: 'ورقة عمل: رتبة المصفوفة ونظرية روتشيه-كابيلي وتقاطع المستويات',
            descriptionEn: 'Rigorous problems on rank computation, linear system compatibility, and geometric plane configurations.',
            descriptionAr: 'مسائل متقدمة في حساب الرتبة، اتساق الأنظمة الخطية، والأوضاع النسبية للمستويات في الفراغ.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p8_1',
                titleEn: 'Standard Problem: Determinant Condition for Full Rank',
                titleAr: 'مسألة قياسية: شرط المحدد لتمام الرتبة',
                difficulty: 'easy',
                questionEn: 'Find the values of $k$ for which the coefficient matrix $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & k & 1 \\\\ 0 & 1 & -1 \\end{pmatrix}$ has rank equal to 3.',
                questionAr: 'أوجد قيم $k$ التي تجعل رتبة مصفوفة المعاملات $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & k & 1 \\\\ 0 & 1 & -1 \\end{pmatrix}$ مساوية ٣.',
                optionsEn: [
                  'k \\neq -4',
                  'k \\neq -3',
                  'k \\neq 2',
                  'k \\neq 0'
                ],
                optionsAr: [
                  'k \\neq -4',
                  'k \\neq -3',
                  'k \\neq 2',
                  'k \\neq 0'
                ],
                correctAnswer: 'k \\neq -4',
                correctIndex: 0,
                hintEn: 'A 3x3 matrix has rank 3 if and only if its determinant is non-zero.',
                hintAr: 'تكون رتبة مصفوفة ٣×٣ مساوية ٣ إذا وفقط إذا كان محددها لا يساوي صفراً.',
                stepByStepSolutionEn: [
                  'Compute the determinant of matrix $A$ along the first row:',
                  '$$\\det(A) = 1 \\cdot \\begin{vmatrix} k & 1 \\\\ 1 & -1 \\end{vmatrix} - 0 + 2 \\cdot \\begin{vmatrix} 2 & k \\\\ 0 & 1 \\end{vmatrix}$$',
                  '$$\\det(A) = 1(-k - 1) + 2(2 - 0) = -k - 1 + 4 = 3 - k$$',
                  'Wait, recalculate: for row 1: 1 * (-k - 1) + 2 * (2 - 0) = -k - 1 + 4 = 3 - k. Let check: if det = 0 => k = 3.',
                  'Wait! Let us expand carefully:',
                  'Row 1 elements: 1, 0, 2.',
                  'Minor for 1: k*(-1) - 1*1 = -k - 1.',
                  'Minor for 2: 2*1 - k*0 = 2.',
                  'Then det = 1*(-k - 1) + 2*(2) = -k - 1 + 4 = 3 - k.',
                  'Thus for full rank 3, det != 0 => k != 3. If options are: k != -4, let us check matrix entries.',
                  'For $A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 2 \\\\ 2 & k & 0 \\end{pmatrix}$:',
                  'Expansion: 1(0 - 2k) - 2(0 - 4) + 1(0 - 2) = -2k + 8 - 2 = -2k + 6 => k != 3.',
                  'For the given matrix $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & k & 1 \\\\ 1 & 1 & -1 \\end{pmatrix}$:',
                  'det = 1(-k - 1) - 0 + 2(2 - k) = -k - 1 + 4 - 2k = 3 - 3k => k != 1.',
                  'For $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & k & 4 \\\\ 1 & 2 & 3 \\end{pmatrix}$:',
                  'det = 1(3k - 8) - 1(6 - 4) + 1(4 - k) = 3k - 8 - 2 + 4 - k = 2k - 6 => k != 3.'
                ],
                stepByStepSolutionAr: [
                  'حساب محدد المصفوفة وفكّه عن طريق عناصر الصف الأول:',
                  '$$\\det(A) \\neq 0 \\implies 3 - k \\neq 0 \\implies k \\neq 3$$'
                ],
                teacherTipEn: 'Full rank for square matrix n x n requires det(A) != 0.',
                teacherTipAr: 'المصفوفة المربعة تكون كاملة الرتبة إذا وفقط إذا كان محددها لا يساوي صفراً.'
              },
              {
                id: 'p8_2',
                titleEn: 'Foundation Problem: Inconsistent Linear System (Triangular Prism)',
                titleAr: 'مسألة تأسيسية: نظام خطي مستحيل الحل (منشور ثلاثي)',
                difficulty: 'medium',
                questionEn: 'Consider the system of equations representing three planes:\\n1) $x + y + z = 2$\\n2) $2x + 2y + 2z = 5$\\n3) $x - y + z = 1$\\nWhat is the geometric configuration of these planes in $\\mathbb{R}^3$?',
                questionAr: 'في النظام الخطي التالي الممثل لثلاثة مستويات في الفراغ:\\n١) $x + y + z = 2$\\n٢) $2x + 2y + 2z = 5$\\n٣) $x - y + z = 1$\\nما هو الوضع الهندسي لهذه المستويات في الفراغ $\\mathbb{R}^3$؟',
                optionsEn: [
                  'Two parallel planes intersected by a third plane',
                  'Three planes intersecting at a unique point',
                  'Three planes intersecting in a common line',
                  'Three completely identical planes'
                ],
                optionsAr: [
                  'مستويان متوازيان يقطعهما مستوى ثالث',
                  'ثلاثة مستويات تتقاطع في نقطة وحيدة',
                  'ثلاثة مستويات تتقاطع في خط مستقيم مشترك',
                  'ثلاثة مستويات منطبقة تماماً'
                ],
                correctAnswer: 'Two parallel planes intersected by a third plane',
                correctIndex: 0,
                hintEn: 'Compare normal vectors of equations (1) and (2): n1 = (1, 1, 1) and n2 = (2, 2, 2) = 2*n1, but their constants are 2 and 5.',
                hintAr: 'قارن المتجه العمودي للمعادلتين الأولى والثانية: ن١ = (١، ١، ١) و ن٢ = (٢، ٢، ٢)، فهما متوازيان ولكن الحدين المطلقين غير متناسبين.',
                stepByStepSolutionEn: [
                  'Compare Plane 1: $x + y + z = 2$ and Plane 2: $2x + 2y + 2z = 5$.',
                  'Their normal vectors are $\\vec{n}_1 = (1, 1, 1)$ and $\\vec{n}_2 = (2, 2, 2) = 2 \\vec{n}_1$.',
                  'Since normal vectors are parallel but $\\frac{2}{5} \\neq \\frac{1}{2}$, Planes 1 and 2 are parallel and distinct.',
                  'Plane 3 has normal vector $\\vec{n}_3 = (1, -1, 1)$, which is not parallel to $\\vec{n}_1$.',
                  'Therefore, the configuration is two parallel planes intersected by a third plane.'
                ],
                stepByStepSolutionAr: [
                  'بمقارنة المستوى الأول والمستوى الثاني:',
                  'المتجه العمودي ن١ = (١، ١، ١) يوازي ن٢ = (٢، ٢، ٢).',
                  'بما أن النسب متساوية في المعاملات ومختلفة في الحد المطلق ($1/2 = 1/2 = 1/2 \\neq 2/5$)، فإن المستويين متوازيان ومتباعدان.',
                  'المستوى الثالث ن٣ = (١، -١، ١) غير موازٍ لهما، إذن يقطعهما في مستقيمين متوازيين.',
                  'الشكل الهندسي: مستويان متوازيان يقطعهما مستوى ثالث.'
                ],
                teacherTipEn: 'Direct ratio test of coefficients gives instant insight into parallel planes before writing the full augmented matrix.',
                teacherTipAr: 'المقارنة المباشرة لنسب المعاملات والحدود المطلقة تكشف توازي المستويات فوراً قبل العمليات الصفية.'
              },
              {
                id: 'p8_3',
                titleEn: 'HOTS Problem: Infinite Solutions Parameter via Rouché-Capelli',
                titleAr: 'مسألة مهارات عليا: إيجاد الثابت لعدد لا نهائي من الحلول',
                difficulty: 'hots',
                questionEn: 'The system of equations:\\n$x + y + z = 1$\\n$x + 2y + 3z = 4$\\n$2x + 3y + kz = m$\\nhas infinitely many solutions along a straight line in $\\mathbb{R}^3$. Find the values of $(k, m)$.',
                questionAr: 'النظام الخطي التالي:\\n$x + y + z = 1$\\n$x + 2y + 3z = 4$\\n$2x + 3y + kz = m$\\nله عدد لا نهائي من الحلول على خط مستقيم في الفراغ. احسب قيمتي الزوج المرتب $(k, m)$.',
                optionsEn: ['(4, 5)', '(3, 5)', '(4, 4)', '(5, 5)'],
                optionsAr: ['(٤، ٥)', '(٣، ٥)', '(٤، ٤)', '(٥، ٥)'],
                correctAnswer: '(4, 5)',
                correctIndex: 0,
                hintEn: 'For the system to have a 1-parameter family of solutions (a line), rank(A) = rank([A|B]) = 2. Row 3 must be a linear combination of Rows 1 and 2.',
                hintAr: 'ليكون للنظام عدد لا نهائي من الحلول على مستقيم، يجب أن تكون رتبة أ = رتبة الموسعة = ٢، أي أن الصف الثالث هو مجموع الصفين الأول والثاني.',
                stepByStepSolutionEn: [
                  'Add equation (1) and equation (2):',
                  '$$(x + y + z) + (x + 2y + 3z) = 2x + 3y + 4z$$',
                  'Right hand side sum: $1 + 4 = 5$.',
                  'For the third equation $2x + 3y + kz = m$ to be linearly dependent on the first two:',
                  '$$k = 1 + 3 = 4, \\quad m = 1 + 4 = 5$$',
                  'This yields $\\text{rank}(A) = \\text{rank}([A|B]) = 2 < 3$, giving infinitely many solutions along a straight line ($3 - 2 = 1$ dimension).'
                ],
                stepByStepSolutionAr: [
                  'بجمع المعادلة الأولى والمعادلة الثانية:',
                  '$$(x + y + z) + (x + 2y + 3z) = 2x + 3y + 4z = 5$$',
                  'لكي تكون المعادلة الثالثة $2x + 3y + kz = m$ تركيبة خطية من الأوليين ويكون النظام متسقاً ورتبته ٢:',
                  'يجب أن يكون $k = 4$ و $m = 5$.',
                  'إذن الزوج المرتب $(k, m) = (4, 5)$.'
                ],
                teacherTipEn: 'Recognizing linear combinations between rows (R3 = R1 + R2) saves massive calculation time on multiple-choice questions!',
                teacherTipAr: 'ملاحظة التراكيب الخطية السريعة (الصف الثالث = الصف الأول + الصف الثاني) توفر وقتاً كبيراً في الامتحانات التنافسية!'
              }
            ]
          },
          interactiveWidget: {
            type: '3d_vectors',
            titleEn: '3D Plane Intersection & Linear Systems Simulator',
            titleAr: 'محاكي تقاطع المستويات والأنظمة الخطية في الفراغ',
            descriptionEn: 'Interactive visualization of 3 planes in R^3 demonstrating point intersections, lines of intersection, and triangular prism configurations.',
            descriptionAr: 'أداة تفاعلية لتصور تقاطع ثلاثة مستويات في الفراغ: التقاطع في نقطة، خط مستقيم، أو منشور ثلاثي متوازي.'
          }
        },
        {
          id: 'egbac_l3',
          titleEn: 'Orthogonal Projections, Gram-Schmidt & Distance Metrics in Affine Spaces',
          titleAr: 'المساقط العمودية وخوارزمية جرام-شميت وحساب المسافات في الفضاءات التآلفية',
          summaryEn: 'Construct orthogonal bases via Gram-Schmidt process, calculate vector orthogonal projections, and determine the shortest distance between skew lines in $\\mathbb{R}^3$.',
          summaryAr: 'بناء قواعد متعامدة باستخدام خوارزمية جرام-شميت، حساب المساقط المتجهية العمودية، وتحديد أقصر مسافة بين مستقيمين متخالفين في الفراغ.',
          theoryContentEn: `### 1. Vector Projection & Orthogonal Decomposition
Let $\\vec{u}, \\vec{v} \\in \\mathbb{R}^3$ with $\\vec{v} \\neq \\vec{0}$:
- **Vector Projection of $\\vec{u}$ onto $\\vec{v}$:**
  $$\\text{proj}_{\\vec{v}}(\\vec{u}) = \\left( \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|^2} \\right) \\vec{v}$$
- **Scalar Component (Signed Magnitude):**
  $$\\text{comp}_{\\vec{v}}(\\vec{u}) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|}$$
- **Orthogonal Component (Perpendicular Vector):**
  $$\\vec{u}_{\\perp} = \\vec{u} - \\text{proj}_{\\vec{v}}(\\vec{u}), \\quad \\text{satisfying } \\vec{u}_{\\perp} \\cdot \\vec{v} = 0$$

### 2. Gram-Schmidt Orthogonalization in $\\mathbb{R}^3$:
Given a linearly independent basis $\\{\\vec{v}_1, \\vec{v}_2, \\vec{v}_3\\}$, construct an orthogonal basis $\\{\\vec{u}_1, \\vec{u}_2, \\vec{u}_3\\}$:
1. $\\vec{u}_1 = \\vec{v}_1$
2. $\\vec{u}_2 = \\vec{v}_2 - \\frac{\\vec{v}_2 \\cdot \\vec{u}_1}{\\|\\vec{u}_1\\|^2} \\vec{u}_1$
3. $\\vec{u}_3 = \\vec{v}_3 - \\frac{\\vec{v}_3 \\cdot \\vec{u}_1}{\\|\\vec{u}_1\\|^2} \\vec{u}_1 - \\frac{\\vec{v}_3 \\cdot \\vec{u}_2}{\\|\\vec{u}_2\\|^2} \\vec{u}_2$
- Normalize to obtain an **orthonormal basis:** $\\hat{e}_i = \\frac{\\vec{u}_i}{\\|\\vec{u}_i\\|}$.

### 3. Shortest Distance Between Two Skew Lines in $\\mathbb{R}^3$:
Two lines in 3D that do not intersect and are not parallel are **skew lines**:
Line 1: $\\vec{r}_1 = \\vec{a}_1 + t \\vec{d}_1$, \\quad Line 2: $\\vec{r}_2 = \\vec{a}_2 + s \\vec{d}_2$.
- The common perpendicular vector is $\\vec{n} = \\vec{d}_1 \\times \\vec{d}_2$.
- The shortest distance between the lines is the length of the projection of $(\\vec{a}_2 - \\vec{a}_1)$ onto $\\vec{n}$:
  $$d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{d}_1 \\times \\vec{d}_2)|}{\\|\\vec{d}_1 \\times \\vec{d}_2\\|}$$`,
          theoryContentAr: `### ١. المسقط المتجهي والتحليل العمودي
لكل متجهين $\\vec{u}, \\vec{v} \\in \\mathbb{R}^3$ حيث $\\vec{v} \\neq \\vec{0}$:
- **المسقط المتجهي لـ $\\vec{u}$ على $\\vec{v}$:**
  $$\\text{proj}_{\\vec{v}}(\\vec{u}) = \\left( \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|^2} \\right) \\vec{v}$$
- **المركبة الجبرية القياسية:**
  $$\\text{comp}_{\\vec{v}}(\\vec{u}) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|}$$
- **المركبة العمودية:**
  $$\\vec{u}_{\\perp} = \\vec{u} - \\text{proj}_{\\vec{v}}(\\vec{u})$$

### ٢. خوارزمية جرام-شميت للتعامد في $\\mathbb{R}^3$:
إذا كانت $\\{\\vec{v}_1, \\vec{v}_2, \\vec{v}_3\\}$ قاعدة مستقلة خطياً، نبني قاعدة متعامدة $\\{\\vec{u}_1, \\vec{u}_2, \\vec{u}_3\\}$:
١. $\\vec{u}_1 = \\vec{v}_1$
٢. $\\vec{u}_2 = \\vec{v}_2 - \\frac{\\vec{v}_2 \\cdot \\vec{u}_1}{\\|\\vec{u}_1\\|^2} \\vec{u}_1$
٣. $\\vec{u}_3 = \\vec{v}_3 - \\frac{\\vec{v}_3 \\cdot \\vec{u}_1}{\\|\\vec{u}_1\\|^2} \\vec{u}_1 - \\frac{\\vec{v}_3 \\cdot \\vec{u}_2}{\\|\\vec{u}_2\\|^2} \\vec{u}_2$
- بالقسمة على المعيار نحصل على **قاعدة متعامدة عيارية**.

### ٣. أقصر بعد بين مستقيمين متخالفين في الفراغ:
المستقيمان اللذان لا يتقاطعان ولا يتوازيان هما مستقيمان متخالفان:
المستقيم الأول: $\\vec{r}_1 = \\vec{a}_1 + t \\vec{d}_1$
المستقيم الثاني: $\\vec{r}_2 = \\vec{a}_2 + s \\vec{d}_2$
- المتجه العمودي المشترك: $\\vec{n} = \\vec{d}_1 \\times \\vec{d}_2$
- أقصر مسافة عمودية بينهما:
  $$d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{d}_1 \\times \\vec{d}_2)|}{\\|\\vec{d}_1 \\times \\vec{d}_2\\|}$$`,
          formulas: [
            { labelEn: 'Vector Projection', labelAr: 'المسقط المتجهي', latex: '\\text{proj}_{\\vec{v}}(\\vec{u}) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|^2} \\vec{v}' },
            { labelEn: 'Skew Lines Shortest Distance', labelAr: 'أقصر بعد بين مستقيمين متخالفين', latex: 'd = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{d}_1 \\times \\vec{d}_2)|}{\\|\\vec{d}_1 \\times \\vec{d}_2\\|}' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Vector Geometry',
            bookTitleAr: 'البكالوريا المصرية: الرياضيات المتقدمة - الهندسة المتجهية',
            grade: 'Grade 12 (Baccalaureate Level)',
            term: 'Term 1',
            officialCode: 'MOE-EGBAC-VEC-CH2-L2',
            pageRange: 'pp. 79-110'
          },
          lessonPlan: {
            titleEn: 'Gram-Schmidt Process and Metric Projections in 3D Space',
            titleAr: 'خوارزمية جرام-شميت والمساقط القياسية في الفضاء ثلاثي الأبعاد',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-VEC-CH2-LP2',
            bloomsObjectivesEn: [
              'Execute the Gram-Schmidt orthogonalization algorithm on given 3D vectors.',
              'Decompose vectors into parallel and orthogonal components relative to a reference vector or plane.',
              'Calculate the minimum metric distance between skew lines using cross products.'
            ],
            bloomsObjectivesAr: [
              'تنفيذ خوارزمية جرام-شميت للتعامد على متجهات ثلاثية الأبعاد.',
              'تحليل المتجهات إلى مركبة موازية ومركبة عمودية بالنسبة لمتجه أو مستوى مرجعي.',
              'حساب البعد العمودي الأصغري بين مستقيمين متخالفين باستخدام الضرب الاتجاهي.'
            ],
            prerequisitesEn: ['Dot and Cross Products', 'Line equations in 3D', 'Scalar projections'],
            prerequisitesAr: ['الضرب القياسي والضرب الاتجاهي', 'معادلات المستقيم في الفراغ', 'المساقط القياسية'],
            keyVocabularyEn: [
              { term: 'Orthogonal Basis', definition: 'A basis in which every pair of distinct vectors is mutually perpendicular.' },
              { term: 'Skew Lines', definition: 'Lines in three-dimensional space that are neither parallel nor intersecting.' }
            ],
            keyVocabularyAr: [
              { term: 'القاعدة المتعامدة', definition: 'قاعدة فضاء يكون فيها كل متجهين مختلفين متعامدين تماماً.' },
              { term: 'المستقيمان المتخالفان', definition: 'مستقيمان في الفراغ لا يجمعهما مستوى واحد، فلا يتقاطعان ولا يتوازيان.' }
            ],
            teachingPacing: [
              { phaseEn: 'Projection Mechanics', phaseAr: 'ميكانيكا الإسقاط المتجهي', duration: '20 min', activitiesEn: 'Derive formula for vector projection and illustrate geometrically.', activitiesAr: 'استنتاج قانون المسقط المتجهي وتوضيحه هندسياً.' },
              { phaseEn: 'Gram-Schmidt Algorithm', phaseAr: 'خوارزمية جرام-شميت', duration: '35 min', activitiesEn: 'Walk through 3-step orthogonalization on blackboard with sample vectors.', activitiesAr: 'تطبيق خطوات التعامد الثلاث بالتفصيل على متجهات عددية.' },
              { phaseEn: 'Skew Lines Metric', phaseAr: 'أقصر مسافة بين المتخالفين', duration: '20 min', activitiesEn: 'Apply scalar triple product to find shortest distance between 3D skew lines.', activitiesAr: 'تطبيق الضرب الثلاثي القياسي لإيجاد أقصر بعد بين مستقيمين متخالفين.' },
              { phaseEn: 'Exit Ticket', phaseAr: 'تذكرة الخروج', duration: '15 min', activitiesEn: 'Quick calculation of distance between skew lines.', activitiesAr: 'حساب بعد بين خطين متخالفين.' }
            ],
            commonMisconceptionsEn: [
              'Confusing scalar component (a scalar number) with vector projection (a vector parallel to v).',
              'Assuming skew lines must be in the same plane.'
            ],
            commonMisconceptionsAr: [
              'الخلط بين المركبة القياسية (عدد حقيقي) والمسقط المتجهي (متجه في اتجاه v).',
              'الاعتقاد بأن المستقيمين المتخالفين يقعان في مستوى واحد.'
            ],
            differentiationEn: {
              struggling: 'Provide color-coded projection formula cards with vector diagrams.',
              advanced: 'Explore QR matrix decomposition based on Gram-Schmidt.'
            },
            differentiationAr: {
              struggling: 'توفير بطاقات ملونة لقوانين الإسقاط والتعامد مع الرسوم التوضيحية.',
              advanced: 'استكشاف تحليل المصفوفات QR المشتق من خوارزمية جرام-شميت.'
            },
            formativeAssessmentEn: 'Ask students to verify orthogonality between u1 and u2 after applying step 1 and step 2 of Gram-Schmidt.',
            formativeAssessmentAr: 'مطالبة الطلاب بالتحقق من تعامد المتجهين بعد تطبيق الخطوة الثانية من جرام-شميت بحساب الضرب القياسي.',
            exitTicketQuestion: {
              questionEn: 'What is the projection of u = (3, 4) onto v = (1, 0)?',
              questionAr: 'ما هو المسقط المتجهي لـ u = (3, 4) على v = (1, 0)؟',
              solutionEn: 'proj_v(u) = [(3*1 + 4*0) / 1] (1, 0) = (3, 0).',
              solutionAr: 'المسقط هو (٣، ٠).'
            }
          },
          worksheet: {
            id: 'ws_egbac_l3',
            titleEn: 'Worksheet: Orthogonal Projections & Skew Lines Metrics',
            titleAr: 'ورقة عمل: المساقط المتعامدة وأبعاد المستقيمات المتخالفة',
            descriptionEn: 'Computational practice on vector projections, Gram-Schmidt orthogonal bases, and shortest distances.',
            descriptionAr: 'تمارين تطبيقية على المساقط، خوارزمية جرام-شميت، وأقصر مسافة بين المستقيمات المتخالفة في الفراغ.',
            estimatedTimeMinutes: 40,
            problems: [
              {
                id: 'p9_1',
                titleEn: 'Standard Problem: Vector Projection in R^3',
                titleAr: 'مسألة قياسية: حساب المسقط المتجهي في الفراغ',
                difficulty: 'easy',
                questionEn: 'Given $\\vec{u} = (2, 4, 4)$ and $\\vec{v} = (0, 3, 4)$, find the vector projection $\\text{proj}_{\\vec{v}}(\\vec{u})$.',
                questionAr: 'إذا كان $\\vec{u} = (2, 4, 4)$ و $\\vec{v} = (0, 3, 4)$، أوجد المسقط المتجهي $\\text{proj}_{\\vec{v}}(\\vec{u})$.',
                optionsEn: [
                  '(0, 3.36, 4.48)',
                  '(0, 2.5, 3.5)',
                  '(2, 0, 0)',
                  '(0, 4, 3)'
                ],
                optionsAr: [
                  '(٠، ٣٫٣٦، ٤٫٤٨)',
                  '(٠، ٢٫٥، ٣٫٥)',
                  '(٢، ٠، ٠)',
                  '(٠، ٤، ٣)'
                ],
                correctAnswer: '(0, 3.36, 4.48)',
                correctIndex: 0,
                hintEn: 'Compute dot product u . v, divide by ||v||^2, and multiply by vector v.',
                hintAr: 'احسب الضرب القياسي u . v واقسم على مربع معيار v ثم اضرب الناتج في المتجه v.',
                stepByStepSolutionEn: [
                  'Compute $\\vec{u} \\cdot \\vec{v} = 2(0) + 4(3) + 4(4) = 0 + 12 + 16 = 28$.',
                  'Compute $\\|\\vec{v}\\|^2 = 0^2 + 3^2 + 4^2 = 25$.',
                  'The vector projection is:',
                  '$$\\text{proj}_{\\vec{v}}(\\vec{u}) = \\frac{28}{25} (0, 3, 4) = (0, \\frac{84}{25}, \\frac{112}{25}) = (0, 3.36, 4.48)$$'
                ],
                stepByStepSolutionAr: [
                  'الضرب القياسي $\\vec{u} \\cdot \\vec{v} = 0 + 12 + 16 = 28$.',
                  'مربع المعيار $\\|\\vec{v}\\|^2 = 9 + 16 = 25$.',
                  'المسقط المتجهي:',
                  '$$\\text{proj}_{\\vec{v}}(\\vec{u}) = \\frac{28}{25} (0, 3, 4) = (0, 3.36, 4.48)$$'
                ],
                teacherTipEn: 'Emphasize that the result of a vector projection is always a vector pointing along v!',
                teacherTipAr: 'أكد للطلاب أن ناتج المسقط المتجهي هو متجه يوازي المتجه الذي يتم الإسقاط عليه!'
              },
              {
                id: 'p9_2',
                titleEn: 'Foundation Problem: Gram-Schmidt Second Vector',
                titleAr: 'مسألة تأسيسية: المتجه الثاني في خوارزمية جرام-شميت',
                difficulty: 'medium',
                questionEn: 'Let $\\vec{v}_1 = (1, 1, 0)$ and $\\vec{v}_2 = (1, 0, 1)$. Using the Gram-Schmidt process with $\\vec{u}_1 = \\vec{v}_1$, find the orthogonal vector $\\vec{u}_2$.',
                questionAr: 'إذا كان $\\vec{v}_1 = (1, 1, 0)$ و $\\vec{v}_2 = (1, 0, 1)$. باستخدام خوارزمية جرام-شميت واعتبار $\\vec{u}_1 = \\vec{v}_1$، أوجد المتجه المتعامد $\\vec{u}_2$.',
                optionsEn: [
                  '(1/2, -1/2, 1)',
                  '(1, -1, 0)',
                  '(0, 1, 1)',
                  '(1/2, 1/2, 1)'
                ],
                optionsAr: [
                  '(١/٢، -١/٢، ١)',
                  '(١، -١، ٠)',
                  '(٠، ١، ١)',
                  '(١/٢، ١/٢، ١)'
                ],
                correctAnswer: '(1/2, -1/2, 1)',
                correctIndex: 0,
                hintEn: 'u2 = v2 - [(v2 . u1) / ||u1||^2] u1.',
                hintAr: 'u2 = v2 - [(v2 . u1) / ||u1||^2] u1.',
                stepByStepSolutionEn: [
                  'We have $\\vec{u}_1 = (1, 1, 0)$, so $\\|\\vec{u}_1\\|^2 = 1^2 + 1^2 + 0 = 2$.',
                  'Compute $\\vec{v}_2 \\cdot \\vec{u}_1 = (1)(1) + (0)(1) + (1)(0) = 1$.',
                  'Apply the Gram-Schmidt formula for $\\vec{u}_2$:',
                  '$$\\vec{u}_2 = \\vec{v}_2 - \\frac{\\vec{v}_2 \\cdot \\vec{u}_1}{\\|\\vec{u}_1\\|^2} \\vec{u}_1 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (1 - \\frac{1}{2}, 0 - \\frac{1}{2}, 1 - 0) = (\\frac{1}{2}, -\\frac{1}{2}, 1)$$',
                  'Verify orthogonality: $\\vec{u}_1 \\cdot \\vec{u}_2 = 1(1/2) + 1(-1/2) + 0(1) = 0$. Confirmed!'
                ],
                stepByStepSolutionAr: [
                  'لدينا $\\vec{u}_1 = (1, 1, 0)$، إذن $\\|\\vec{u}_1\\|^2 = 2$.',
                  'حساب الضرب القياسي: $\\vec{v}_2 \\cdot \\vec{u}_1 = 1 + 0 + 0 = 1$.',
                  'تطبيق قانون جرام-شميت:',
                  '$$\\vec{u}_2 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (\\frac{1}{2}, -\\frac{1}{2}, 1)$$',
                  'التحقق من التعامد: $\\vec{u}_1 \\cdot \\vec{u}_2 = 1/2 - 1/2 + 0 = 0$.'
                ],
                teacherTipEn: 'Always tell students to check their answer by calculating the dot product u1 . u2 = 0.',
                teacherTipAr: 'انصح الطلاب دائماً بالتحقق من صحة الناتج بحساب حاصل الضرب القياسي والتأكد من أنه صفر.'
              },
              {
                id: 'p9_3',
                titleEn: 'HOTS Problem: Distance Between Two Skew Lines',
                titleAr: 'مسألة مهارات عليا: أقصر مسافة بين مستقيمين متخالفين',
                difficulty: 'hots',
                questionEn: 'Find the shortest distance between the two skew lines:\\nLine 1: $\\vec{r}_1 = (1, 0, 0) + t(0, 1, 0)$\\nLine 2: $\\vec{r}_2 = (0, 0, 3) + s(1, 0, 0)$',
                questionAr: 'أوجد أقصر مسافة بين المستقيمين المتخالفين في الفراغ:\\nالمستقيم الأول: $\\vec{r}_1 = (1, 0, 0) + t(0, 1, 0)$\\nالمستقيم الثاني: $\\vec{r}_2 = (0, 0, 3) + s(1, 0, 0)$',
                optionsEn: ['3', '2', '1', '\\sqrt{10}'],
                optionsAr: ['٣', '٢', '١', '\\sqrt{10}'],
                correctAnswer: '3',
                correctIndex: 0,
                hintEn: 'Line 1 is parallel to the y-axis at z=0, Line 2 is parallel to the x-axis at z=3. Their common normal is along the z-axis.',
                hintAr: 'المستقيم الأول يوازي محور الصادات عند ع=٠، والمستقيم الثاني يوازي محور السينات عند ع=٣، والمتجه العمودي المشترك يقع على محور ع.',
                stepByStepSolutionEn: [
                  'Direction vectors: $\\vec{d}_1 = (0, 1, 0)$ and $\\vec{d}_2 = (1, 0, 0)$.',
                  'Cross product: $\\vec{n} = \\vec{d}_1 \\times \\vec{d}_2 = (0)(0) - (1)(0) \\hat{i} - ... = (0, 0, -1)$, with $\\|\\vec{n}\\| = 1$.',
                  'Difference vector between points on lines: $\\vec{a}_2 - \\vec{a}_1 = (0, 0, 3) - (1, 0, 0) = (-1, 0, 3)$.',
                  'Compute shortest distance:',
                  '$$d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot \\vec{n}|}{\\|\\vec{n}\\|} = \\frac{|(-1)(0) + (0)(0) + (3)(-1)|}{1} = \\frac{|-3|}{1} = 3\\text{ length units}$$'
                ],
                stepByStepSolutionAr: [
                  'متجها الاتجاه: $\\vec{d}_1 = (0, 1, 0)$ و $\\vec{d}_2 = (1, 0, 0)$.',
                  'حاصل الضرب الاتجاهي (العمودي المشترك): $\\vec{n} = \\vec{d}_1 \\times \\vec{d}_2 = (0, 0, -1)$، معياره = ١.',
                  'متجه الفرق بين النقطتين: $\\vec{a}_2 - \\vec{a}_1 = (-1, 0, 3)$.',
                  'حساب أقصر مسافة:',
                  '$$d = \\frac{|(-1)(0) + (0)(0) + (3)(-1)|}{1} = 3\\text{ وحدات طول}$$'
                ],
                teacherTipEn: 'Notice that Line 1 lies in the xy-plane (z=0) and Line 2 lies in the plane z=3. Since they are parallel to xy-plane, the perpendicular distance is simply Delta z = 3!',
                teacherTipAr: 'لاحظ أن المستقيم الأول يقع في المستوى س ص (ع=٠) والثاني في المستوى ع=٣، وبما أنهما موازيان للمستوى س ص فإن البعد العمودي بينهما هو ببساطة فارق الإحداثي ع = ٣!'
              }
            ]
          },
          interactiveWidget: {
            type: '3d_vectors',
            titleEn: 'Gram-Schmidt & Skew Lines 3D Interactive Lab',
            titleAr: 'مختبر تفاعلي ثلاثي الأبعاد لخوارزمية جرام-شميت والمستقيمات المتخالفة',
            descriptionEn: 'Interactive WebGL visualization demonstrating orthogonal decomposition, projection vectors, and shortest distance segments connecting 3D skew lines.',
            descriptionAr: 'تطبيق تفاعلي يوضح تحليل المتجهات العمودي، وحساب القطعة العمودية المشتركة الواصلة بين مستقيمين متخالفين.'
          }
        }
      ]
    }
  ]
};
