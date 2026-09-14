import type { Branch } from '../types/curriculum';
import { physCh1Databank } from './databanks/thanaweya/physCh1Databank';

export const thanaweyaPhysicsBranch: Branch = {
  id: 'thanaweya_physics',
  titleEn: 'Physics (Natural Sciences)',
  titleAr: 'الفيزياء (العلوم الطبيعية)',
  categoryEn: 'Natural Sciences',
  categoryAr: 'العلوم الطبيعية',
  iconName: 'Zap',
  colorGradient: 'from-amber-500 to-orange-700',
  chapters: [
    {
      id: 'th_phys_ch1',
      chapterNumber: 1,
      titleEn: "Electric Current, Ohm's Law & Kirchhoff's Laws",
      titleAr: 'التيار الكهربي وقانون أوم وقانونا كيرشوف',
      descriptionEn: "Electric current intensity, potential difference, Ohm's law for closed circuits, series and parallel resistance connections, electrical energy and power, and Kirchhoff's first and second laws for complex multi-loop circuits.",
      descriptionAr: 'شدة التيار الكهربي، فرق الجهد، قانون أوم للدوائر المغلقة، توصيل المقاومات على التوالي والتوازي، الطاقة والقدرة الكهربية، وقانونا كيرشوف للدوائر المعقدة.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_phys_l1',
          titleEn: 'Electric Circuit Analysis & Kirchhoff\'s Laws',
          titleAr: 'تحليل الدوائر الكهربية وقانونا كيرشوف',
          summaryEn: 'Core principles of electric current $I = \\frac{Q}{t}$, Ohm\'s Law $V = IR$, conductor resistance $R = \\rho_e \\frac{L}{A}$, closed-circuit Ohm\'s Law $I = \\frac{V_B}{R_{\\text{eq}} + r}$, and Kirchhoff\'s junction and loop conservation rules.',
          summaryAr: 'المبادئ الأساسية لشدة التيار $I = \\frac{Q}{t}$، قانون أوم $V = IR$، مقاومة الموصل $R = \\rho_e \\frac{L}{A}$، قانون أوم للدائرة المغلقة $I = \\frac{V_B}{R_{\\text{eq}} + r}$، وقانونا كيرشوف لحفظ الشحنة والطاقة.',
          theoryContentEn: `### 1. Electric Current & Potential Difference
- **Current Intensity ($I$):** The rate of flow of electric charges through a conductor cross-section:
  $$I = \\frac{Q}{t} = \\frac{n \\cdot e}{t}$$
  where $Q$ is electric charge (Coulombs), $t$ is time (seconds), $n$ is number of electrons, and $e = 1.6 \\times 10^{-19}\\text{ C}$.
- **Potential Difference ($V$):** The work done to transfer a unit charge ($1\\text{ C}$) between two points:
  $$V = \\frac{W}{Q}$$

### 2. Resistance and Resistivity
- **Ohm's Law:** At constant temperature, the current passing through a conductor is directly proportional to the potential difference across its terminals:
  $$V = I \\cdot R$$
- **Resistance of a Uniform Conductor:**
  $$R = \\rho_e \\frac{L}{A} = \\frac{L}{\\sigma \\cdot A} = \\rho_e \\frac{4L}{\\pi d^2}$$
  where $\\rho_e$ is electric resistivity ($\\Omega\\cdot\\text{m}$), $\\sigma = \\frac{1}{\\rho_e}$ is electric conductivity ($(\\Omega\\cdot\\text{m})^{-1}$), $L$ is length, and $A = \\pi r^2$ is cross-sectional area.
- **Volume and Mass Relationships:** Since volume $\\text{Vol} = A \\cdot L$ and mass $m = d_{mass} \\cdot A \\cdot L$:
  $$R = \\rho_e \\frac{L^2}{\\text{Vol}} = \\rho_e \\cdot d_{mass} \\frac{L^2}{m} = \\rho_e \\frac{m}{d_{mass} \\cdot A^2}$$

### 3. Combination of Resistors
- **Series Connection:** Resistors carry the identical current ($I = I_1 = I_2 = \\dots$):
  $$R_{eq} = R_1 + R_2 + \\dots + R_n$$
- **Parallel Connection:** Resistors share the identical voltage ($V = V_1 = V_2 = \\dots$):
  $$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n}$$
  For two parallel resistors: $R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}$.

### 4. Ohm's Law for Closed Circuits
In a complete circuit containing a source of EMF $V_B$ and internal resistance $r$:
$$I = \\frac{V_B}{R_{eq} + r}$$
- Terminal voltage of the battery when discharging:
  $$V = V_B - I \\cdot r$$
- When the circuit is open ($I = 0$), $V = V_B$.

### 5. Kirchhoff's Laws
1. **Kirchhoff's First Law (Junction Rule - Conservation of Charge):**
   The algebraic sum of currents meeting at any electrical node is zero:
   $$\\sum I_{in} = \\sum I_{out} \\iff \\sum I = 0$$
2. **Kirchhoff's Second Law (Loop Rule - Conservation of Energy):**
   In any closed loop, the algebraic sum of electromotive forces equals the algebraic sum of potential drops:
   $$\\sum V_B = \\sum (I \\cdot R)$$`,
          theoryContentAr: `### ١. شدة التيار الكهربي وفرق الجهد
- **شدة التيار الكهربي ($I$):** كمية الشحنة الكهربية المارة عبر مقطع من موصل في زمن قدره ثانية واحدة:
  $$I = \\frac{Q}{t} = \\frac{n \\cdot e}{t}$$
  حيث $Q$ الشحنة بالكولوم، $t$ الزمن بالثواني، $n$ عدد الإلكترونات، وشحنة الإلكترون $e = 1.6 \\times 10^{-19}\\text{ كولوم}$.
- **فرق الجهد الكهربي ($V$):** مقدار الشغل المبذول لنقل شحنة كهربية مقدارها كولوم واحد بين نقطتين:
  $$V = \\frac{W}{Q}$$

### ٢. المقاومة الكهربية والمقاومة النوعية
- **قانون أوم:** عند ثبوت درجة الحرارة، تتناسب شدة التيار المار في موصل طردياً مع فرق الجهد بين طرفيه:
  $$V = I \\cdot R$$
- **العوامل المؤثرة في مقاومة موصل منتظم المقطع:**
  $$R = \\rho_e \\frac{L}{A} = \\frac{L}{\\sigma \\cdot A} = \\rho_e \\frac{4L}{\\pi d^2}$$
  حيث $\\rho_e$ المقاومة النوعية لمادة الموصل (أوم$\\cdot$متر)، $\\sigma = \\frac{1}{\\rho_e}$ التوصيلية الكهربية، $L$ طول الموصل، و $A$ مساحة مقطعه.
- **العلاقة بدلالة الكتلة والكثافة والحجم:**
  $$R = \\rho_e \\frac{L^2}{\\text{Vol}} = \\rho_e \\cdot \\rho_{mass} \\frac{L^2}{m}$$

### ٣. توصيل المقاومات الكهربية
- **التوصيل على التوالي:** يمر بالجميع نفس شدة التيار ($I$ ثابت):
  $$R_{eq} = R_1 + R_2 + \\dots + R_n$$
- **التوصيل على التوازي:** يكون فرق الجهد متساوياً بين طرفي كل مقاومة ($V$ ثابت):
  $$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n}$$
  لحساب مقاومتين فقط على التوازي: $R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}$.

### ٤. قانون أوم للدائرة المغلقة
في دائرة كهربية تحتوي على عمود كهربي قوته الدافعة $V_B$ ومقاومته الداخلية $r$:
$$I = \\frac{V_B}{R_{eq} + r}$$
- فرق الجهد بين قطبي العمود في حالة التفريغ:
  $$V = V_B - I \\cdot r$$
- في حالة الدائرة المفتوحة ($I = 0$): $V = V_B$.

### ٥. قانونا كيرشوف
١. **قانون كيرشوف الأول (قانون العقدة - حفظ الشحنة):**
   المجموع الجبري للتيارات الداخلة إلى نقطة اتصال في دائرة مغلقة يساوي المجموع الجبري للتيارات الخارجة منها:
   $$\\sum I_{in} = \\sum I_{out} \\iff \\sum I = 0$$
٢. **قانون كيرشوف الثاني (قانون المسار المغلق - حفظ الطاقة):**
   في أي مسار كهربي مغلق، المجموع الجبري للقوى الدافعة الكهربية يساوي المجموع الجبري لفروق الجهد:
   $$\\sum V_B = \\sum (I \\cdot R)$$`,
          formulas: [
            { labelEn: 'Electric Current Intensity', labelAr: 'شدة التيار الكهربي', latex: 'I = \\frac{Q}{t} = \\frac{n e}{t}' },
            { labelEn: 'Conductor Resistance', labelAr: 'مقاومة الموصل', latex: 'R = \\rho_e \\frac{L}{A} = \\frac{L}{\\sigma A}' },
            { labelEn: 'Closed Circuit Ohm\'s Law', labelAr: 'قانون أوم للدائرة المغلقة', latex: 'I = \\frac{V_B}{R_{eq} + r}' },
            { labelEn: 'Battery Terminal Voltage', labelAr: 'جهد أطراف العمود', latex: 'V = V_B - I r' },
            { labelEn: 'Kirchhoff\'s Junction Law', labelAr: 'قانون كيرشوف الأول (العقدة)', latex: '\\sum I_{in} = \\sum I_{out}' },
            { labelEn: 'Kirchhoff\'s Loop Law', labelAr: 'قانون كيرشوف الثاني (المسار المغلق)', latex: '\\sum V_B = \\sum (I R)' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Physics Textbook Grade 12',
            bookTitleAr: 'كتاب الفيزياء للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-PHYS-CH1-L1',
            pageRange: 'pp. 2 - 38'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Electric Circuits, Resistance Scaling & Kirchhoff Analysis',
            titleAr: 'خطة درس: الدوائر الكهربية، نسب المقاومات وتحليل شبكات كيرشوف',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-PHYS-CH1-L1',
            bloomsObjectivesEn: [
              'Calculate equivalent resistance for complex bridge, delta, and symmetry circuits.',
              'Derive terminal voltage behavior during charging and discharging cycles.',
              'Formulate simultaneous linear loop and nodal equations using Kirchhoff\'s laws.'
            ],
            bloomsObjectivesAr: [
              'حساب المقاومة المكافئة لشبكات المقاومات المركبة والمتماثلة وجسور القنطرة.',
              'استنتاج سلوك فرق الجهد بين قطبي العمود أثناء عمليتي التفريغ والشحن.',
              'صياغة وحل معادلات خطية متزامنة للتيارات في شبكات كيرشوف المعقدة.'
            ],
            prerequisitesEn: ['Electric charge', 'Potential difference', 'Linear algebraic systems'],
            prerequisitesAr: ['الشحنة الكهربية', 'فرق الجهد', 'حل أنظمة المعادلات الخطية'],
            keyVocabularyEn: [
              { term: 'Resistivity (rho_e)', definition: 'Intrinsic property of a conductor material measured in ohm-meters.' },
              { term: 'Electromotive Force (V_B)', definition: 'Total work done by a power source to move a unit charge through the entire circuit.' }
            ],
            keyVocabularyAr: [
              { term: 'المقاومة النوعية', definition: 'خاصية فيزيائية مميزة للمادة تقاس بوحدة أوم.متر وتعتمد فقط على نوع المادة ودرجة الحرارة.' },
              { term: 'القوة الدافعة الكهربية', definition: 'الشغل الكلي المبذول لنقل شحنة مقدارها واحد كولوم في الدائرة الكهربية كلها داخل المصدر وخارجه.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Concept Exploration',
                phaseAr: 'استكشاف المفاهيم',
                duration: '20 mins',
                activitiesEn: 'Investigating resistivity changes with wire stretching and dimensional scaling.',
                activitiesAr: 'استكشاف تغير المقاومة عند سحب وتشكيل الأسلاك وثبوت الحجم.'
              },
              {
                phaseEn: 'Circuit Derivations',
                phaseAr: 'الاستنتاجات الرياضية',
                duration: '35 mins',
                activitiesEn: 'Setting up loop matrices for two-battery Kirchhoff networks.',
                activitiesAr: 'بناء مصفوفات المسارات المغلقة لشبكات كيرشوف متعددة البطاريات.'
              },
              {
                phaseEn: 'Problem Solving & Verification',
                phaseAr: 'حل المسائل والتحقق',
                duration: '35 mins',
                activitiesEn: 'Solving exam-standard bridge circuits and terminal voltmeter readings.',
                activitiesAr: 'حل مسائل امتحانات الوزارة لقراءات الفولتميتر والدائرة المفتوحة.'
              }
            ],
            commonMisconceptionsEn: [
              'Confusing resistivity (material constant) with resistance (dependent on geometry).',
              'Assuming terminal voltage always equals battery EMF, neglecting internal resistance drops.'
            ],
            commonMisconceptionsAr: [
              'الخلط بين المقاومة النوعية (ثابتة للمادة) والمقاومة الكهربية (تعتمد على الطول والمساحة).',
              'افتراض أن قراءة الفولتميتر بين قطبي العمود تساوي دائماً قوته الدافعة متجاهلين الهبوط في الجهد $Ir$.'
            ],
            differentiationEn: {
              struggling: 'Provide guided circuit loop sign conventions and color-coded junction charts.',
              advanced: 'Challenge students to analyze Wheatstone unbalanced bridge circuits via star-delta transformation.'
            },
            differentiationAr: {
              struggling: 'تقديم مخططات ملونة لقواعد إشارات التيارات ومسارات البطاريات في شبكات كيرشوف.',
              advanced: 'تكليف الطلاب بحساب المقاومة المكافئة لقنطرة ويتستون غير المتزنة ومكعب المقاومات.'
            },
            formativeAssessmentEn: 'Solve a two-loop circuit to find current through a shared middle branch resistor.',
            formativeAssessmentAr: 'حل دائرة كيرشوف ذات مسارين مغلقين لإيجاد شدة التيار المار في الفرع المشترك.',
            exitTicketQuestion: {
              questionEn: 'A copper wire is stretched uniformly so that its length increases by $20\\%$. Assuming its density and volume remain constant, what is the percentage increase in its electrical resistance?',
              questionAr: 'سُحب سلك نحاسي بانتظام بحيث زاد طوله بنسبة $20\\%$. بافتراض ثبوت الحجم والكثافة، احسب النسبة المئوية للزيادة في مقاومته الكهربية.',
              solutionEn: 'Since volume is constant, $L_2 = 1.2 L_1 \\implies A_2 = \\frac{A_1}{1.2}$. Then $R_2 = \\rho_e \\frac{L_2}{A_2} = (1.2)^2 R_1 = 1.44 R_1$. The increase is $(1.44 - 1) \\times 100\\% = 44\\%$.',
              solutionAr: 'نظراً لثبوت الحجم، يكون $L_2 = 1.2 L_1 \\implies A_2 = \\frac{A_1}{1.2}$. إذن المقاومة الجديدة $R_2 = \\rho_e \\frac{L_2}{A_2} = (1.2)^2 R_1 = 1.44 R_1$. الزيادة في المقاومة $= (1.44 - 1) \\times 100\\% = 44\\%$.'
            }
          },
          worksheet: {
            id: 'th_phys_ws_1',
            titleEn: 'Worksheet: Electric Circuits & Kirchhoff Analysis',
            titleAr: 'ورقة عمل: الدوائر الكهربية وشبكات كيرشوف',
            descriptionEn: 'Core worksheet targeting Ohm\'s law for closed circuits, wire elongation scaling, and branch currents in multiloop networks.',
            descriptionAr: 'ورقة تدريبية تستهدف قانون أوم للدائرة المغلقة، تشكيل وسحب الموصلات، وحساب التيارات في شبكات كيرشوف.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'th_phys_ws_p1',
                titleEn: 'Wire Stretching Scaling',
                titleAr: 'مسألة سحب وتشكيل موصل',
                difficulty: 'medium',
                questionEn: 'A cylindrical metallic wire of resistance $R = 8\\,\\Omega$ is drawn out uniformly until its radius is halved ($r_2 = 0.5 r_1$). What is its new resistance?',
                questionAr: 'سلك معدني أسطواني مقاومته $R = 8\\,\\Omega$ سُحب بانتظام حتى قل نصف قطر مقطعه إلى النصف ($r_2 = 0.5 r_1$). احسب مقاومته الكهربية الجديدة.',
                optionsEn: ['$128\\,\\Omega$', '$64\\,\\Omega$', '$32\\,\\Omega$', '$16\\,\\Omega$'],
                optionsAr: ['$128\\,\\Omega$', '$64\\,\\Omega$', '$32\\,\\Omega$', '$16\\,\\Omega$'],
                correctAnswer: '$128\\,\\Omega$',
                correctIndex: 0,
                hintEn: 'Since volume is constant, when radius is halved, area becomes 1/4, so length quadruples.',
                hintAr: 'لثبوت الحجم، عندما يقل نصف القطر للنصف تقل المساحة إلى الربع فيزداد الطول إلى أربعة أمثاله.',
                stepByStepSolutionEn: [
                  'Volume $\\text{Vol} = A \\cdot L = \\pi r^2 L = \\text{constant}$.',
                  'When $r_2 = \\frac{1}{2} r_1$, cross-sectional area $A_2 = \\frac{1}{4} A_1$.',
                  'Therefore, the length increases to $L_2 = 4 L_1$.',
                  'The new resistance is $R_2 = \\rho_e \\frac{L_2}{A_2} = \\rho_e \\frac{4 L_1}{(1/4) A_1} = 16 \\left(\\rho_e \\frac{L_1}{A_1}\\right) = 16 R_1 = 16 \\times 8 = 128\\,\\Omega$.'
                ],
                stepByStepSolutionAr: [
                  'الحجم ثابت: $\\text{Vol} = A \\cdot L = \\pi r^2 L = \\text{ثابت}$.',
                  'عندما يقل نصف القطر للنصف $r_2 = \\frac{1}{2}r_1$، تصبح المساحة $A_2 = \\frac{1}{4}A_1$.',
                  'وبالتالي يتضاعف الطول إلى $L_2 = 4 L_1$.',
                  'المقاومة الجديدة $R_2 = \\rho_e \\frac{L_2}{A_2} = \\rho_e \\frac{4L_1}{(1/4)A_1} = 16 R_1 = 16 \\times 8 = 128\\,\\Omega$.'
                ],
                teacherTipEn: 'Remember that resistance scales inversely with the 4th power of radius when volume is constant: $R \\propto 1/r^4$.',
                teacherTipAr: 'تذكر دائماً أنه عند سحب سلك مع ثبوت حجمه، تتناسب المقاومة عكسياً مع الأس الرابع لنصف القطر: $R \\propto \\frac{1}{r^4}$.'
              },
              {
                id: 'th_phys_ws_p2',
                titleEn: 'Balanced Wheatstone Bridge & Null Galvanometer',
                titleAr: 'قنطرة ويتستون المتزنة وانعدام تيار الجلفانومتر',
                difficulty: 'hots',
                diagramType: 'phys_wheatstone_bridge',
                questionEn: 'In a Wheatstone bridge network with four arms $R_1 = 6\\,\\Omega$, $R_2 = 12\\,\\Omega$, $R_3 = 3\\,\\Omega$, and $R_4 = 6\\,\\Omega$, a central galvanometer of resistance $R_G = 15\\,\\Omega$ is connected across the bridge. Calculate the equivalent resistance $R_{eq}$ between the input terminals.',
                questionAr: 'في شبكة قنطرة ويتستون مكونة من أربعة أفرع: $R_1 = 6\\,\\Omega$ و $R_2 = 12\\,\\Omega$ و $R_3 = 3\\,\\Omega$ و $R_4 = 6\\,\\Omega$، وُصل جلفانومتر مقاومته $R_G = 15\\,\\Omega$ بين نقطتي الاتصال المركزيتين. احسب المقاومة المكافئة $R_{eq}$ بين طرفي توصيل المصدر.',
                optionsEn: ['$6\\,\\Omega$', '$9\\,\\Omega$', '$12\\,\\Omega$', '$4.5\\,\\Omega$'],
                optionsAr: ['$6\\,\\Omega$', '$9\\,\\Omega$', '$12\\,\\Omega$', '$4.5\\,\\Omega$'],
                correctAnswer: '$6\\,\\Omega$',
                correctIndex: 0,
                hintEn: 'Check the balance condition: $R_1 / R_2 = R_3 / R_4$. If satisfied, the galvanometer branch carries zero current and can be eliminated.',
                hintAr: 'تحقق من شرط اتزان القنطرة: $R_1 / R_2 = R_3 / R_4$. إذا تحقق ينعدم فرق الجهد بين طرفي الجلفانومتر وتُلغى مقاومته.',
                stepByStepSolutionEn: [
                  'Ratio test: $\\frac{R_1}{R_2} = \\frac{6}{12} = \\frac{1}{2}$, and $\\frac{R_3}{R_4} = \\frac{3}{6} = \\frac{1}{2}$.',
                  'Since $\\frac{R_1}{R_2} = \\frac{R_3}{R_4}$, the bridge is perfectly balanced ($V_C = V_D$).',
                  'No current passes through the central galvanometer branch ($I_G = 0$), so $R_G$ is removed.',
                  'Top branch resistance: $R_{\\text{top}} = R_1 + R_2 = 6 + 12 = 18\\,\\Omega$.',
                  'Bottom branch resistance: $R_{\\text{bottom}} = R_3 + R_4 = 3 + 6 = 9\\,\\Omega$.',
                  'Equivalent resistance: $R_{eq} = \\frac{R_{\\text{top}} R_{\\text{bottom}}}{R_{\\text{top}} + R_{\\text{bottom}}} = \\frac{18 \\times 9}{18 + 9} = \\frac{162}{27} = 6\\,\\Omega$.'
                ],
                stepByStepSolutionAr: [
                  'اختبار نسب المقاومات: $\\frac{R_1}{R_2} = \\frac{6}{12} = \\frac{1}{2}$، وكذلك $\\frac{R_3}{R_4} = \\frac{3}{6} = \\frac{1}{2}$.',
                  'بما أن النسبتين متساويتان، فإن القنطرة متزنة تماماً ($V_C = V_D$).',
                  'لا يمر تيار في فرع الجلفانومتر ($I_G = 0$)، وبالتالي تُحذف مقاومته من الحسابات.',
                  'مقاومة الفرع العلوي: $R_{\\text{top}} = 6 + 12 = 18\\,\\Omega$.',
                  'مقاومة الفرع السفلي: $R_{\\text{bottom}} = 3 + 6 = 9\\,\\Omega$.',
                  'المقاومة المكافئة للفرعين على التوازي: $R_{eq} = \\frac{18 \\times 9}{18 + 9} = \\frac{162}{27} = 6\\,\\Omega$.'
                ],
                teacherTipEn: 'Whenever you see a bridge or cross-connection, always test the ratio of adjacent or opposite arms first before applying Kirchhoff loops.',
                teacherTipAr: 'في أي مسألة تحتوي على مقاومة مشتركة بين مسارين، اختبر نسبة ذراعي القنطرة أولاً؛ فإذا تساوت النسب يُحذف فرع التوصيل وتتحول المسألة لتوالي وتوازي بسيط.'
              },
              {
                id: 'th_phys_ws_p3',
                titleEn: 'Opposing Batteries: Charging & Discharging Terminal Voltages',
                titleAr: 'بطاريتان في حالة تضاد: جهد التفريغ وجهد الشحن',
                difficulty: 'medium',
                questionEn: 'Two batteries are connected in series opposition: Battery 1 has $V_{B1} = 18\\text{ V}$ with internal resistance $r_1 = 1\\,\\Omega$, and Battery 2 has $V_{B2} = 6\\text{ V}$ with $r_2 = 1\\,\\Omega$. The external circuit has resistance $R = 4\\,\\Omega$. What are the circuit current $I$ and the terminal voltmeter reading across Battery 2 ($V_2$)?',
                questionAr: 'وُصلت بطاريتان على التضاد في دائرة مغلقة: الأولى قوتها الدافعة $V_{B1} = 18\\text{ فولت}$ ومقاومتها الداخلية $r_1 = 1\\,\\Omega$، والثانية $V_{B2} = 6\\text{ فولت}$ ومقاومتها $r_2 = 1\\,\\Omega$. مقاومة الدائرة الخارجية $R = 4\\,\\Omega$. احسب شدة تيار الدائرة $I$ وقراءة الفولتميتر بين قطبي البطارية الثانية ($V_2$).',
                optionsEn: [
                  '$I = 2\\text{ A},\\, V_2 = 8\\text{ V}$',
                  '$I = 2\\text{ A},\\, V_2 = 4\\text{ V}$',
                  '$I = 4\\text{ A},\\, V_2 = 6\\text{ V}$',
                  '$I = 1.5\\text{ A},\\, V_2 = 7.5\\text{ V}$'
                ],
                optionsAr: [
                  '$I = 2\\text{ أمبير},\\, V_2 = 8\\text{ فولت}$',
                  '$I = 2\\text{ أمبير},\\, V_2 = 4\\text{ فولت}$',
                  '$I = 4\\text{ أمبير},\\, V_2 = 6\\text{ فولت}$',
                  '$I = 1.5\\text{ أمبير},\\, V_2 = 7.5\\text{ فولت}$'
                ],
                correctAnswer: '$I = 2\\text{ A},\\, V_2 = 8\\text{ V}$',
                correctIndex: 0,
                hintEn: 'Because $V_{B1} > V_{B2}$, Battery 1 discharges ($V_1 = V_{B1} - Ir_1$) while Battery 2 undergoes charging ($V_2 = V_{B2} + Ir_2$).',
                hintAr: 'نظراً لأن $V_{B1} > V_{B2}$، فإن البطارية الأولى في حالة تفريغ ($V_1 = V_{B1} - Ir_1$) بينما الثانية في حالة شحن ($V_2 = V_{B2} + Ir_2$).',
                stepByStepSolutionEn: [
                  'Net electromotive force: $V_{B,\\text{net}} = V_{B1} - V_{B2} = 18 - 6 = 12\\text{ V}$.',
                  'Total equivalent resistance: $R_{\\text{total}} = R + r_1 + r_2 = 4 + 1 + 1 = 6\\,\\Omega$.',
                  'Circuit current: $I = \\frac{V_{B,\\text{net}}}{R_{\\text{total}}} = \\frac{12}{6} = 2\\text{ A}$.',
                  'Battery 2 is in charging mode (current enters its positive terminal), so: $V_2 = V_{B2} + I \\cdot r_2 = 6 + (2 \\times 1) = 8\\text{ V}$.',
                  '(For verification, Battery 1 discharges: $V_1 = V_{B1} - I r_1 = 18 - 2 = 16\\text{ V}$, and $V_{\\text{external}} = I R = 2 \\times 4 = 8\\text{ V} = V_1 - V_2$).'
                ],
                stepByStepSolutionAr: [
                  'القوة الدافعة المحصلة: $V_{B,\\text{net}} = V_{B1} - V_{B2} = 18 - 6 = 12\\text{ فولت}$.',
                  'المقاومة الكلية للدائرة: $R_{\\text{total}} = R + r_1 + r_2 = 4 + 1 + 1 = 6\\,\\Omega$.',
                  'شدة التيار المار: $I = \\frac{12}{6} = 2\\text{ أمبير}$.',
                  'البطارية الثانية في حالة شحن (التيار يدخل قطبها الموجب)، وبالتالي: $V_2 = V_{B2} + I \\cdot r_2 = 6 + (2 \\times 1) = 8\\text{ فولت}$.'
                ],
                teacherTipEn: 'Pay close attention: when a battery is charged, its terminal potential difference exceeds its EMF ($V > V_B$) due to the internal voltage drop addition.',
                teacherTipAr: 'انتبه جيداً: عند شحن بطارية يكون فرق الجهد بين قطبيها أكبر من قوتها الدافعة الكهربية ($V > V_B$) لأن تيار الشحن يدخل للقطب الموجب.'
              }
            ]
          },
          interactiveWidget: {
            type: 'physics_circuits',
            titleEn: 'Electric Circuit & Kirchhoff Simulation',
            titleAr: 'محاكاة الدوائر الكهربية وشبكات كيرشوف',
            descriptionEn: 'Interactive multiloop solver displaying node currents, loop electromotive forces, and branch voltage drops.',
            descriptionAr: 'أداة تفاعلية لحساب تيارات العقد وفروق الجهد ومحصلة القوى الدافعة في الدوائر المغلقة.'
          }
        },
      ],
      solvedExamples: [
        {
          id: 'th_phys_se_01',
          titleEn: 'MoE Example 1: Closed Circuit Terminal Voltage & Internal Resistance',
          titleAr: 'مثال الوزارة ١: قراءة الفولتميتر والمقاومة الداخلية للدائرة المغلقة',
          difficulty: 'easy',
          questionEn: 'A battery of electromotive force $V_B = 12\\text{ V}$ and internal resistance $r = 1\\,\\Omega$ is connected to an external resistor $R = 5\\,\\Omega$. Find the circuit current $I$ and the terminal potential difference across the battery $V$.',
          questionAr: 'بطارية قوتها الدافعة الكهربية $V_B = 12\\text{ فولت}$ ومقاومتها الداخلية $r = 1\\,\\Omega$ وُصلت بمقاومة خارجية $R = 5\\,\\Omega$. احسب شدة التيار المار في الدائرة $I$ وفرق الجهد بين طرفي البطارية $V$.',
          optionsEn: ['$I = 2\\text{ A},\\, V = 10\\text{ V}$', '$I = 2.4\\text{ A},\\, V = 12\\text{ V}$', '$I = 1.5\\text{ A},\\, V = 9\\text{ V}$', '$I = 3\\text{ A},\\, V = 8\\text{ V}$'],
          optionsAr: ['$I = 2\\text{ A},\\, V = 10\\text{ V}$', '$I = 2.4\\text{ A},\\, V = 12\\text{ V}$', '$I = 1.5\\text{ A},\\, V = 9\\text{ V}$', '$I = 3\\text{ A},\\, V = 8\\text{ V}$'],
          correctAnswer: '$I = 2\\text{ A},\\, V = 10\\text{ V}$',
          correctIndex: 0,
          hintEn: 'Use Ohm\'s law for a closed circuit: $I = \\frac{V_B}{R + r}$, then $V = V_B - I r$.',
          hintAr: 'طبق قانون أوم للدائرة المغلقة: $I = \\frac{V_B}{R + r}$، ثم احسب $V = V_B - Ir$.',
          stepByStepSolutionEn: [
            'Total resistance of the circuit: $R_{total} = R + r = 5 + 1 = 6\\,\\Omega$.',
            'Circuit current: $I = \\frac{V_B}{R + r} = \\frac{12}{6} = 2\\text{ A}$.',
            'Terminal voltage of the battery: $V = V_B - I r = 12 - (2)(1) = 10\\text{ V}$ (or $V = I R = 2 \\times 5 = 10\\text{ V}$).'
          ],
          stepByStepSolutionAr: [
            'المقاومة الكلية للدائرة: $R_{total} = R + r = 5 + 1 = 6\\,\\Omega$.',
            'شدة تيار الدائرة: $I = \\frac{V_B}{R + r} = \\frac{12}{6} = 2\\text{ أمبير}$.',
            'فرق الجهد بين قطبي البطارية: $V = V_B - Ir = 12 - (2)(1) = 10\\text{ فولت}$ (أو $V = IR = 2 \\times 5 = 10\\text{ فولت}$).'
          ],
          teacherTipEn: 'The voltage drop inside the battery is $I r = 2\\text{ V}$, representing lost voltage.',
          teacherTipAr: 'الهبوط في الجهد داخل العمود يساوي $Ir = 2\\text{ فولت}$ ويمثل الجهد المفقود داخل المصدر.'
        }
      ],
      exerciseProblems: [
        {
          id: 'th_phys_ex_01',
          titleEn: 'Exercise 1: Conductor Resistance Ratio',
          titleAr: 'تمرين ١: النسبة بين مقاومتي موصلين',
          difficulty: 'easy',
          questionEn: 'Two copper wires $A$ and $B$: wire $A$ has length $L$ and diameter $d$, while wire $B$ has length $2L$ and diameter $2d$. What is the ratio of their resistances $R_A / R_B$?',
          questionAr: 'سلكان من النحاس $A$ و $B$: طول السلك $A$ هو $L$ وقطره $d$، بينما طول السلك $B$ هو $2L$ وقطره $2d$. ما النسبة بين مقاومتيهما $R_A / R_B$؟',
          optionsEn: ['$2 : 1$', '$1 : 2$', '$4 : 1$', '$1 : 1$'],
          optionsAr: ['$2 : 1$', '$1 : 2$', '$4 : 1$', '$1 : 1$'],
          correctAnswer: '$2 : 1$',
          correctIndex: 0,
          hintEn: 'Resistance is proportional to length and inversely proportional to diameter squared: $R \\propto L/d^2$.',
          hintAr: 'المقاومة تتناسب طردياً مع الطول وعكسياً مع مربع القطر: $R \\propto \\frac{L}{d^2}$.',
          stepByStepSolutionEn: [
            'Since both are copper, resistivity $\\rho_e$ is identical.',
            'Ratio formula: $\\frac{R_A}{R_B} = \\frac{L_A}{L_B} \\times \\left(\\frac{d_B}{d_A}\\right)^2$.',
            'Substitute values: $\\frac{R_A}{R_B} = \\frac{L}{2L} \\times \\left(\\frac{2d}{d}\\right)^2 = \\frac{1}{2} \\times 4 = 2$.'
          ],
          stepByStepSolutionAr: [
            'كلا السلكين من النحاس، إذن المقاومة النوعية $\\rho_e$ متطابقة.',
            'قانون النسبة: $\\frac{R_A}{R_B} = \\frac{L_A}{L_B} \\times \\left(\\frac{d_B}{d_A}\\right)^2$.',
            'بالتعويض: $\\frac{R_A}{R_B} = \\frac{L}{2L} \\times \\left(\\frac{2d}{d}\\right)^2 = \\frac{1}{2} \\times 4 = 2$.'
          ],
          teacherTipEn: 'When the diameter doubles, cross-sectional area quadruples ($A \\propto d^2$).',
          teacherTipAr: 'عند مضاعفة القطر تزداد المساحة أربعة أمثال لأن $A = \\frac{\\pi d^2}{4}$.'
        }
      ],
      databank: physCh1Databank
    },
    {
      id: 'th_phys_ch2',
      chapterNumber: 2,
      titleEn: 'Magnetic Effect of Electric Current & Measuring Instruments',
      titleAr: 'التأثير المغناطيسي للتيار الكهربي وأجهزة القياس',
      descriptionEn: 'Magnetic flux density around straight wires, circular coils, and solenoids; magnetic force on current-carrying conductors; magnetic torque on current loops; and DC measuring instruments (moving-coil galvanometer, ammeter shunt, voltmeter multiplier, and ohmmeter).',
      descriptionAr: 'كثافة الفيض المغناطيسي لسلك مستقيم وملف دائري وملف لولبي، القوة المغناطيسية المؤثرة على سلك، عزم الازدواج المغناطيسي، وأجهزة القياس التناظرية (الجلفانومتر، الأميتر، الفولتميتر، والأوميتر).',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "th_phys_l2",
          "titleEn": "Magnetic Effect of Electric Current & Analog Measuring Instruments",
          "titleAr": "التأثير المغناطيسي للتيار الكهربي وأجهزة القياس التناظرية",
          "summaryEn": "Magnetic flux density around straight wires, circular coils, and solenoids; magnetic force on current-carrying conductors ($F = BIL\\sin\\theta$); magnetic torque on coils ($\\tau = BIAN\\sin\\theta$); and galvanometer conversion to ammeters, voltmeters, and ohmmeters.",
          "summaryAr": "كثافة الفيض المغناطيسي لسلك مستقيم، ملف دائري، وملف لولبي؛ القوة المغناطيسية على سلك يمر به تيار؛ عزم الازدواج المغناطيسي المؤثر على ملف؛ وتحويل الجلفانومتر ذي الملف المتحرك إلى أميتر، فولتميتر، وأوميتر.",
          "theoryContentEn": "### 1. Magnetic Flux Density Produced by Currents\n- **Straight Wire (Ampere's Circuital Law):**\n  $B = \\frac{\\mu I}{2\\pi d}$\n  where $\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{T}\\cdot\\text{m/A}$. Right-hand grip rule gives field direction (concentric circular lines).\n- **Circular Coil:**\n  $B = \\frac{\\mu N I}{2r}$\n  Field at the center is perpendicular to the coil plane.\n- **Solenoid (Helical Coil):**\n  $B = \\frac{\\mu N I}{L} = \\mu n I$\n  where $n = N/L$ is turns per unit length. Field inside is uniform and parallel to axis.\n\n### 2. Magnetic Force and Magnetic Torque\n- **Magnetic Force on a Current-Carrying Wire:**\n  $F = B I L \\sin\\theta$\n  Direction given by **Fleming's Left-Hand Rule**. Force between two parallel wires of length $L$:\n  $F = \\frac{\\mu I_1 I_2 L}{2\\pi d} \\quad (\\text{Attraction if same direction, Repulsion if opposite})$\n- **Magnetic Torque on a Coil:**\n  $\\tau = B I A N \\sin\\theta' = B I A N \\cos\\theta$\n  where $\\theta'$ is angle between magnetic field and normal to the coil plane.\n- **Magnetic Dipole Moment ($m_d$):**\n  $|\\vec{m}_d| = I A N = \\frac{\\tau_{\\max}}{B}$\n\n### 3. Analog Measuring Instruments (Moving-Coil Galvanometer)\n- **Moving-Coil Galvanometer:**\n  - Operates on magnetic torque in a radial magnetic field (cylindrical iron core + concave poles).\n  - Sensitivity: $S = \\frac{\\theta}{I}$.\n- **DC Ammeter (Shunt Resistor $R_s$ in parallel):**\n  $R_s = \\frac{I_g R_g}{I - I_g}$\n- **DC Voltmeter (Multiplier Resistor $R_m$ in series):**\n  $R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$\n- **Ohmmeter:**\n  $I = \\frac{V_B}{R_{\\text{in}} + R_x}, \\quad \\text{where } R_{\\text{in}} = R_g + R_c + R_v + r$\n  $R_x = \\left(\\frac{I_g}{I} - 1\\right) R_{\\text{in}}$",
          "theoryContentAr": "### ١. كثافة الفيض المغناطيسي للتيار الكهربي\n- **سلك مستقيم (قانون أمبير الدائري):**\n  $B = \\frac{\\mu I}{2\\pi d}$\n  حيث $\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{T}\\cdot\\text{m/A}$. خطوط الفيض دوائر متحدة المركز يتحدد اتجاهها بقاعدة اليد اليمنى لأمبير.\n- **ملف دائري (عند المركز):**\n  $B = \\frac{\\mu N I}{2r}$\n- **ملف لولبي (حلزوني):**\n  $B = \\frac{\\mu N I}{L} = \\mu n I$\n  حيث $n = N/L$ عدد اللفات لوحدة الأطوال.\n\n### ٢. القوة المغناطيسية وعزم الازدواج\n- **القوة المؤثرة على سلك مستقيم:**\n  $F = B I L \\sin\\theta$\n  يتحدد اتجاهها بقاعدة **فلمنج لليد اليسرى**. القوة المتبادلة بين سلكين متوازيين:\n  $F = \\frac{\\mu I_1 I_2 L}{2\\pi d} \\quad (\\text{تجاذب للتيارين المتماثلين، تنافر للمتضادين})$\n- **عزم الازدواج المغناطيسي على ملف:**\n  $\\tau = B I A N \\sin\\theta'$\n  حيث $\\theta'$ هي الزاوية بين العمودي على مستوى الملف وخطوط الفيض.\n- **عزم ثنائي القطب المغناطيسي:**\n  $m_d = I A N = \\frac{\\tau_{\\max}}{B}$\n\n### ٣. أجهزة القياس التناظرية (الجلفانومتر الحساس)\n- **مجزئ التيار في الأميتر ($R_s$ على التوازي):**\n  $R_s = \\frac{I_g R_g}{I - I_g}$\n- **مضاعف الجهد في الفولتميتر ($R_m$ على التوالي):**\n  $R_m = \\frac{V - V_g}{I_g}$\n- **الأوميتر (لقياس المقاومات المجهولة $R_x$):**\n  $I = \\frac{V_B}{R_{\\text{in}} + R_x}$\n  حيث $R_{\\text{in}}$ المقاومة الداخلية الكلية للأوميتر.",
          "formulas": [
            {
              "labelEn": "Magnetic Force on Current Conductor",
              "labelAr": "القوة المغناطيسية على سلك مستقيم",
              "latex": "F = BIL\\sin\\theta"
            },
            {
              "labelEn": "Ammeter Shunt Resistance",
              "labelAr": "مقاومة مجزئ التيار للأميتر",
              "latex": "R_s = \\frac{I_g R_g}{I - I_g}"
            },
            {
              "labelEn": "Voltmeter Multiplier Resistance",
              "labelAr": "مقاومة مضاعف الجهد للفولتميتر",
              "latex": "R_m = \\frac{V - I_g R_g}{I_g}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Physics Textbook Grade 12",
            "bookTitleAr": "كتاب الفيزياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-PHYS-CH2-L1",
            "pageRange": "pp. 49 - 102"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Magnetic Flux, Torque & Analog Meters",
            "titleAr": "خطة درس: التأثير المغناطيسي وأجهزة القياس",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-PHYS-CH2-L1",
            "bloomsObjectivesEn": [
              "Calculate magnetic flux density at points around combinations of straight wires, circular loops, and solenoids.",
              "Derive shunt and multiplier resistances required to modify galvanometer measurement ranges.",
              "Analyze the non-linear reciprocal scale of an ohmmeter."
            ],
            "bloomsObjectivesAr": [
              "حساب محصلة كثافة الفيض المغناطيسي لسلكين متوازيين ونقاط التعادل.",
              "استنتاج قيمتي مجزئ التيار ومضاعف الجهد لتوسيع مدى قياس الجلفانومتر.",
              "تفسير عدم انتظام تدريج الأوميتر وتناسب شدة التيار عكسياً مع المقاومة الكلية."
            ],
            "prerequisitesEn": [
              "Ohm's law",
              "Vector addition",
              "Right-hand rule"
            ],
            "prerequisitesAr": [
              "قانون أوم",
              "جمع المتجهات",
              "قاعدة اليد اليمنى"
            ],
            "keyVocabularyEn": [
              {
                "term": "Neutral Point",
                "definition": "A point in a magnetic field where the resultant magnetic flux density is exactly zero."
              },
              {
                "term": "Shunt Resistor",
                "definition": "A very small resistor connected in parallel with a galvanometer to convert it into an ammeter."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "نقطة التعادل",
                "definition": "نقطة ينعدم عندها الفيض المغناطيسي المحصل لانعدام القوة المغناطيسية."
              },
              {
                "term": "مجزئ التيار",
                "definition": "مقاومة صغيرة جداً توصل على التوازي مع ملف الجلفانومتر لإنقاص حساسيته وزيادة مدى قياسه للتيار."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Magnetic Fields of Straight Wires & Coils",
                "phaseAr": "المجال المغناطيسي للأسلاك والملفات",
                "duration": "30 mins",
                "activitiesEn": "Deriving B fields and locating neutral points between opposite currents.",
                "activitiesAr": "استنتاج كثافة الفيض وتحديد موضع نقطة التعادل."
              },
              {
                "phaseEn": "Magnetic Force & Torque",
                "phaseAr": "القوة المغناطيسية وعزم الازدواج",
                "duration": "30 mins",
                "activitiesEn": "Applying Fleming's left hand rule and calculating torque on inclined coils.",
                "activitiesAr": "تطبيق قاعدة اليد اليسرى لفلمنج وحساب عزم ثنائي القطب."
              },
              {
                "phaseEn": "Galvanometer Conversion & Ohmmeter",
                "phaseAr": "تحويلات الجلفانومتر والأوميتر",
                "duration": "30 mins",
                "activitiesEn": "Circuit analysis of ammeters, voltmeters, and ohmmeter non-linear scales.",
                "activitiesAr": "حل مسائل مجزئ التيار ومضاعف الجهد والأوميتر."
              }
            ],
            "commonMisconceptionsEn": [
              "Confusing coil angle in torque formula (angle is between field and normal to the coil, not the coil itself).",
              "Thinking ohmmeter scale is linear (current is inversely proportional to R_in + R_x, not R_x alone)."
            ],
            "commonMisconceptionsAr": [
              "الخطأ في زاوية عزم الازدواج (الزاوية بين العمودي على الملف والمجال وليست مع مستوى الملف).",
              "الظن بأن تدريج الأوميتر منتظم (التيار يتناسب عكسياً مع المقاومة الكلية وليس المجهولة فقط)."
            ],
            "differentiationEn": {
              "struggling": "Provide a formula card with side-by-side diagrams of Rs (parallel) and Rm (series).",
              "advanced": "Calculate the mutual force between two non-parallel conducting wires."
            },
            "differentiationAr": {
              "struggling": "استخدام بطاقات مقارنة تلخص Rs على التوازي و Rm على التوالي مع الجلفانومتر.",
              "advanced": "حساب نقطة التعادل لسلكين يحملان تيارين متعامدين."
            },
            "formativeAssessmentEn": "Why is the scale of a galvanometer uniform while the scale of an ohmmeter is non-uniform?",
            "formativeAssessmentAr": "علل: تدريج الجلفانومتر منتظم بينما تدريج الأوميتر غير منتظم؟",
            "exitTicketQuestion": {
              "questionEn": "A galvanometer of resistance 50 ohms gives full-scale deflection with a current of 2 mA. What shunt resistance is needed to convert it to an ammeter reading up to 1 A?",
              "questionAr": "جلفانومتر مقاومة ملفه ٥٠ أوم ينحرف مؤشره لنهاية التدريج بتيار ٢ مللي أمبير. احسب مقاومة مجزئ التيار لتحويله لأميتر يقيس تياراً أقصاه ١ أمبير.",
              "solutionEn": "$R_s = \\frac{I_g R_g}{I - I_g} = \\frac{(0.002)(50)}{1 - 0.002} = \\frac{0.1}{0.998} \\approx 0.1002\\,\\Omega$.",
              "solutionAr": "$R_s = \\frac{I_g R_g}{I - I_g} = \\frac{(٠,٠٠٢)(٥٠)}{١ - ٠,٠٠٢} = \\frac{٠,١}{٠,٩٩٨} \\approx ٠,١٠٠٢\\,\\Omega$."
            }
          },
          "worksheet": {
            "id": "th_phys_ws_2",
            "titleEn": "Worksheet: Magnetic Fields, Force & Meter Modifications",
            "titleAr": "ورقة عمل: التأثير المغناطيسي وتحويلات أجهزة القياس",
            "descriptionEn": "Rigorous quantitative problems on magnetic fields, force pairs, and moving coil conversions.",
            "descriptionAr": "مسائل رياضية دقيقة على كثافة الفيض والقوة المغناطيسية ومجزئ التيار ومضاعف الجهد.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_phys_ws_p2_1",
                "titleEn": "Neutral Point Location for Two Parallel Wires",
                "titleAr": "تحديد موضع نقطة التعادل لسلكين متوازيين",
                "difficulty": "medium",
                "questionEn": "Two long parallel wires in vacuum are separated by 20 cm. Wire 1 carries a current of 2 A and Wire 2 carries a current of 6 A in opposite directions. At what distance from Wire 1 is the neutral point located?",
                "questionAr": "سلكان مستقيمان متوازيان في الهواء المسافة بينهما ٢٠ سم. يمر بالأول تيار ٢ أمبير وبالثاني ٦ أمبير في اتجاهين متضادين. على أي مسافة من السلك الأول تقع نقطة التعادل؟",
                "optionsEn": [
                  "10 cm outside the wires",
                  "5 cm between the wires",
                  "15 cm outside the wires",
                  "20 cm outside the wires"
                ],
                "optionsAr": [
                  "١٠ سم خارج السلكين بالقرب من السلك الأول",
                  "٥ سم بين السلكين",
                  "١٥ سم خارج السلكين",
                  "٢٠ سم خارج السلكين"
                ],
                "correctAnswer": "10 cm outside the wires",
                "correctIndex": 0,
                hintEn: "Since currents are opposite, the neutral point lies outside the two wires, closer to the weaker current: $I_1 / d_1 = I_2 / (D + d_1)$.",
                hintAr: "التياران متضادان، إذن نقطة التعادل تقع خارج السلكين بالقرب من التيار الأضعف: $I_1 / d = I_2 / (20 + d)$.",
                "stepByStepSolutionEn": [
                  "Opposite currents: neutral point is outside the region between the wires, near the weaker wire (Wire 1).",
                  "Condition: $\\frac{I_1}{d} = \\frac{I_2}{D + d}$.",
                  "$\\frac{2}{d} = \\frac{6}{20 + d} \\implies 6d = 40 + 2d \\implies 4d = 40 \\implies d = 10\\text{ cm}$.",
                  "The neutral point is located 10 cm outside Wire 1."
                ],
                "stepByStepSolutionAr": [
                  "بما أن التيارين في اتجاهين متضادين، فإن نقطة التعادل تقع خارج السلكين بجوار التيار الأقل (السلك الأول).",
                  "شرط التعادل: $\\frac{I_1}{d} = \\frac{I_2}{D + d}$.",
                  "$\\frac{٢}{d} = \\frac{٦}{٢٠ + d} \\implies ٦d = ٤٠ + ٢d \\implies ٤d = ٤٠ \\implies d = ١٠\\text{ سم}$.",
                  "تقع نقطة التعادل على بعد ١٠ سم خارج السلك الأول."
                ],
                "teacherTipEn": "Remember: if currents are in opposite directions, neutral point is always OUTSIDE the region between the wires.",
                "teacherTipAr": "قاعدة ثابتة: إذا كان التياران في اتجاهين متضادين تقع نقطة التعادل خارج السلكين بجوار التيار الأضعف."
              },
              {
                "id": "th_phys_ws_p2_2",
                "titleEn": "Solenoid Core Permeability & Axial Flux Density",
                "titleAr": "كثافة الفيض على محور ملف لولبي ونفاذية القلب الحديدي",
                "difficulty": "hots",
                "diagramType": "phys_solenoid_magnetic_field",
                "questionEn": "A solenoid of length $L = 20\\text{ cm}$ has $N = 500\\text{ turns}$ and carries a steady current $I = 2\\text{ A}$. If a cylindrical soft iron core of magnetic permeability $\\mu = 2 \\times 10^{-3}\\text{ T}\\cdot\\text{m/A}$ is inserted inside the core, what is the magnetic flux density along the internal axis of the solenoid?",
                "questionAr": "ملف لولبي طوله $L = 20\\text{ سم}$ يحتوي على $N = 500\\text{ لفة}$ ويمر به تيار مستمر $I = 2\\text{ أمبير}$. إذا وُضع بداخله ساق من الحديد المطاوع معامل نفاذيته المغناطيسية $\\mu = 2 \\times 10^{-3}\\text{ تسلا}\\cdot\\text{متر/أمبير}$، فما قيمة كثافة الفيض المغناطيسي عند نقطة على محوره في منتصف طوله؟",
                "optionsEn": [
                  "10.0 T",
                  "5.0 T",
                  "2.5 T",
                  "0.0126 T"
                ],
                "optionsAr": [
                  "١٠,٠ تسلا",
                  "٥,٠ تسلا",
                  "٢,٥ تسلا",
                  "٠,٠١٢٦ تسلا"
                ],
                "correctAnswer": "10.0 T",
                "correctIndex": 0,
                "hintEn": "Apply the solenoid formula $B = \\frac{\\mu N I}{L}$ substituting length in meters ($L = 0.2\\text{ m}$).",
                "hintAr": "طبق قانون كثافة الفيض للملف اللولبي: $B = \\frac{\\mu N I}{L}$ مع تحويل الطول إلى أمتار ($0.2\\text{ م}$).",
                "stepByStepSolutionEn": [
                  "Identify parameters: $L = 20\\text{ cm} = 0.20\\text{ m}$, $N = 500\\text{ turns}$, $I = 2\\text{ A}$.",
                  "Permeability of soft iron: $\\mu = 2 \\times 10^{-3}\\text{ T}\\cdot\\text{m/A}$.",
                  "Formula for solenoid axial flux density: $B = \\frac{\\mu N I}{L}$.",
                  "Substitute values: $B = \\frac{(2 \\times 10^{-3})(500)(2)}{0.20} = \\frac{2}{0.20} = 10.0\\text{ T}$.",
                  "Notice that without the iron core (in air with $\\mu_0 = 4\\pi \\times 10^{-7}$), $B$ would be only $\\approx 0.0063\\text{ T}$, demonstrating iron's massive flux concentration effect."
                ],
                "stepByStepSolutionAr": [
                  "المعطيات: الطول $L = 0.20\\text{ م}$، عدد اللفات $N = 500$، شدة التيار $I = 2\\text{ أمبير}$.",
                  "معامل نفاذية الحديد المطاوع: $\\mu = 2 \\times 10^{-3}\\text{ تسلا}\\cdot\\text{م/أمبير}$.",
                  "قانون كثافة الفيض لملف لولبي: $B = \\frac{\\mu N I}{L}$.",
                  "التعويض: $B = \\frac{(2 \\times 10^{-3}) \\times 500 \\times 2}{0.20} = \\frac{2}{0.20} = 10.0\\text{ تسلا}$.",
                  "لاحظ أن وجود قلب الحديد المطاوع ركز خطوط الفيض وضاعف شدة المجال آلاف المرات مقارنة بالهواء."
                ],
                "teacherTipEn": "Soft iron concentrates magnetic field lines because its permeability is thousands of times greater than air, which is fundamental to electromagnets and transformers.",
                "teacherTipAr": "يعمل الحديد المطاوع على تركيز خطوط الفيض المغناطيسي لأن معامل نفاذيته المغناطيسية أكبر بكثير من الهواء، وهو أساس عمل المغناطيس الكهربي والمحولات."
              },
              {
                "id": "th_phys_ws_p2_3",
                "titleEn": "Ohmmeter Quarter-Scale Deflection & External Resistor",
                "titleAr": "انحراف مؤشر الأوميتر إلى ربع التدريج والمقاومة المجهولة",
                "difficulty": "medium",
                "diagramType": "phys_galvanometer_multiplier",
                "questionEn": "An ohmmeter has total internal resistance $R_{\\text{in}} = 3000\\,\\Omega$. When an external resistor $R_x$ is connected between its terminals, its pointer deflects to $\\frac{1}{4}$ of its full-scale current ($I = \\frac{1}{4} I_g$). What is the value of $R_x$?",
                "questionAr": "أوميتر مقاومته الداخلية الكلية $R_{\\text{in}} = 3000\\,\\Omega$. عند توصيل مقاومة مجهولة $R_x$ بين طرفيه، انحرف مؤشره إلى ربع تدريج التيار ($I = \\frac{1}{4} I_g$). احسب قيمة المقاومة المجهولة $R_x$.",
                "optionsEn": [
                  "$9000\\,\\Omega$",
                  "$12000\\,\\Omega$",
                  "$6000\\,\\Omega$",
                  "$3000\\,\\Omega$"
                ],
                "optionsAr": [
                  "$9000\\,\\Omega$",
                  "$12000\\,\\Omega$",
                  "$6000\\,\\Omega$",
                  "$3000\\,\\Omega$"
                ],
                "correctAnswer": "$9000\\,\\Omega$",
                "correctIndex": 0,
                "hintEn": "Use the golden ohmmeter relation: if $I = \\frac{1}{n} I_g$, then $R_x = (n - 1) R_{\\text{in}}$.",
                "hintAr": "طبق العلاقة الذهبية للأوميتر: إذا انحرف المؤشر إلى $\\frac{1}{n}$ التدريج، فإن $R_x = (n - 1) R_{\\text{in}}$.",
                "stepByStepSolutionEn": [
                  "Full-scale current: $I_g = \\frac{V_B}{R_{\\text{in}}}$.",
                  "Reduced current with external resistor: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
                  "Given $I = \\frac{1}{4} I_g \\implies \\frac{V_B}{R_{\\text{in}} + R_x} = \\frac{1}{4} \\frac{V_B}{R_{\\text{in}}}$.",
                  "Cross-multiplying gives: $R_{\\text{in}} + R_x = 4 R_{\\text{in}} \\implies R_x = 3 R_{\\text{in}}$.",
                  "Substitute $R_{\\text{in}} = 3000\\,\\Omega$: $R_x = 3 \\times 3000 = 9000\\,\\Omega$."
                ],
                "stepByStepSolutionAr": [
                  "تيار نهاية التدريج: $I_g = \\frac{V_B}{R_{\\text{in}}}$.",
                  "التيار عند توصيل المقاومة $R_x$: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
                  "بما أن $I = \\frac{1}{4} I_g$، إذن المقاومة الكلية للدائرة أصبحت 4 أمثال ما كانت عليه: $R_{\\text{in}} + R_x = 4 R_{\\text{in}}$.",
                  "إذن: $R_x = 4 R_{\\text{in}} - R_{\\text{in}} = 3 R_{\\text{in}}$.",
                  "قيمة المقاومة المجهولة: $R_x = 3 \\times 3000 = 9000\\,\\Omega$."
                ],
                "teacherTipEn": "The ohmmeter scale is non-linear and inverted: zero current corresponds to infinite resistance ($R_x = \\infty$), and full-scale current corresponds to $R_x = 0$.",
                "teacherTipAr": "تدريج الأوميتر غير منتظم وأقسامه غير متساوية لأن شدة التيار تتناسب عكسياً مع المقاومة الكلية للدائرة ($R_{\\text{in}} + R_x$) وليس مع $R_x$ وحدها."
              }
            ]
          },
          "interactiveWidget": {
            "type": "physics_magnetism",
            "titleEn": "Magnetic Field & Galvanometer Converter Simulator",
            "titleAr": "محاكي المجال المغناطيسي وتحويلات الجلفانومتر",
            "descriptionEn": "Interactive simulation calculating magnetic flux density vectors and galvanometer shunt/multiplier resistances.",
            "descriptionAr": "محاكاة تفاعلية لحساب كثافة الفيض المغناطيسي وتعديل الجلفانومتر إلى أميتر وفولتميتر."
          }
        },
      ],
      solvedExamples: [
        {
          id: 'th_phys_se_02',
          titleEn: 'MoE Example 2: Parallel Resistors Current Division',
          titleAr: 'مثال الوزارة ٢: تجزئة التيار في التوصيل على التوازي',
          difficulty: 'medium',
          questionEn: 'Two resistors of $6\\,\\Omega$ and $12\\,\\Omega$ are connected in parallel across an ideal source of EMF $V_B = 24\\text{ V}$ ($r = 0$). Find the current through the $6\\,\\Omega$ resistor and the total circuit current.',
          questionAr: 'مقاومتان $6\\,\\Omega$ و $12\\,\\Omega$ متصلتان على التوازي مع مصدر كهربي مهمل المقاومة الداخلية قوته الدافعة $V_B = 24\\text{ فولت}$. احسب شدة التيار المار في المقاومة $6\\,\\Omega$ وشدة التيار الكلي للدائرة.',
          optionsEn: ['$I_1 = 4\\text{ A},\\, I_{total} = 6\\text{ A}$', '$I_1 = 2\\text{ A},\\, I_{total} = 6\\text{ A}$', '$I_1 = 3\\text{ A},\\, I_{total} = 4\\text{ A}$', '$I_1 = 4\\text{ A},\\, I_{total} = 8\\text{ A}$'],
          optionsAr: ['$I_1 = 4\\text{ A},\\, I_{total} = 6\\text{ A}$', '$I_1 = 2\\text{ A},\\, I_{total} = 6\\text{ A}$', '$I_1 = 3\\text{ A},\\, I_{total} = 4\\text{ A}$', '$I_1 = 4\\text{ A},\\, I_{total} = 8\\text{ A}$'],
          correctAnswer: '$I_1 = 4\\text{ A},\\, I_{total} = 6\\text{ A}$',
          correctIndex: 0,
          hintEn: 'In parallel connection, voltage is constant across both branches: $V_1 = V_2 = 24\\text{ V}$.',
          hintAr: 'في التوصيل على التوازي، فرق الجهد متساوٍ على الفرعين: $V_1 = V_2 = 24\\text{ فولت}$.',
          stepByStepSolutionEn: [
            'Equivalent resistance: $R_{eq} = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\,\\Omega$.',
            'Current through $6\\,\\Omega$ resistor: $I_1 = \\frac{V}{R_1} = \\frac{24}{6} = 4\\text{ A}$.',
            'Current through $12\\,\\Omega$ resistor: $I_2 = \\frac{V}{R_2} = \\frac{24}{12} = 2\\text{ A}$.',
            'Total current: $I_{total} = I_1 + I_2 = 4 + 2 = 6\\text{ A}$.'
          ],
          stepByStepSolutionAr: [
            'المقاومة المكافئة للتوازي: $R_{eq} = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\,\\Omega$.',
            'التيار المار في المقاومة الأولى: $I_1 = \\frac{V}{R_1} = \\frac{24}{6} = 4\\text{ أمبير}$.',
            'التيار المار في المقاومة الثانية: $I_2 = \\frac{V}{R_2} = \\frac{24}{12} = 2\\text{ أمبير}$.',
            'التيار الكلي للدائرة: $I_{total} = I_1 + I_2 = 4 + 2 = 6\\text{ أمبير}$.'
          ],
          teacherTipEn: 'Notice that the smaller resistance carries the larger fraction of total current.',
          teacherTipAr: 'لاحظ أن المقاومة الأصغر يمر بها التيار الأكبر بنسبة عكسية مع قيم المقاومات.'
        }
      ],
      exerciseProblems: [
        {
          id: 'th_phys_ex_02',
          titleEn: 'Exercise 2: Kirchhoff Junction Conservation',
          titleAr: 'تمرين ٢: تطبيق قانون كيرشوف الأول عند نقطة اتصال',
          difficulty: 'medium',
          questionEn: 'At an electrical circuit junction, currents $I_1 = 3\\text{ A}$ and $I_2 = 5\\text{ A}$ flow into the node, while currents $I_3 = 2\\text{ A}$ and an unknown current $I_4$ flow out. Find the value and direction of $I_4$.',
          questionAr: 'عند نقطة تفرع في دائرة كهربية، يدخل التياران $I_1 = 3\\text{ A}$ و $I_2 = 5\\text{ A}$ إلى النقطة، بينما يخرج تيار $I_3 = 2\\text{ A}$ وتيار مجهول $I_4$. احسب شدة واتجاه التيار $I_4$.',
          optionsEn: ['$I_4 = 6\\text{ A}$ exiting the node', '$I_4 = 10\\text{ A}$ entering the node', '$I_4 = 4\\text{ A}$ exiting the node', '$I_4 = 8\\text{ A}$ entering the node'],
          optionsAr: ['$I_4 = 6\\text{ A}$ خارجاً من النقطة', '$I_4 = 10\\text{ A}$ داخلاً للنقطة', '$I_4 = 4\\text{ A}$ خارجاً من النقطة', '$I_4 = 8\\text{ A}$ داخلاً للنقطة'],
          correctAnswer: '$I_4 = 6\\text{ A}$ exiting the node',
          correctIndex: 0,
          hintEn: 'Kirchhoff\'s first law states: $\\sum I_{in} = \\sum I_{out}$.',
          hintAr: 'قانون كيرشوف الأول ينص على: $\\sum I_{in} = \\sum I_{out}$.',
          stepByStepSolutionEn: [
            'Total incoming current: $\\sum I_{in} = I_1 + I_2 = 3 + 5 = 8\\text{ A}$.',
            'Total outgoing current: $\\sum I_{out} = I_3 + I_4 = 2 + I_4$.',
            'Equating: $8 = 2 + I_4 \\implies I_4 = 6\\text{ A}$ (exiting the junction).'
          ],
          stepByStepSolutionAr: [
            'مجموع التيارات الداخلة: $\\sum I_{in} = I_1 + I_2 = 3 + 5 = 8\\text{ أمبير}$.',
            'مجموع التيارات الخارجة: $\\sum I_{out} = I_3 + I_4 = 2 + I_4$.',
            'بالمساواة: $8 = 2 + I_4 \\implies I_4 = 6\\text{ أمبير}$ في اتجاه الخروج من النقطة.'
          ],
          teacherTipEn: 'Kirchhoff\'s junction rule is an explicit expression of the law of conservation of electric charge.',
          teacherTipAr: 'قانون كيرشوف الأول يمثل التطبيق الفيزيائي المباشر لمبدأ بقاء الشحنة الكهربية.'
        }
      ]
    },
    {
      id: 'th_phys_ch3',
      chapterNumber: 3,
      titleEn: 'Electromagnetic Induction, AC Dynamo & Transformers',
      titleAr: 'الحث الكهرومغناطيسي، الدينامو والمحولات الكهربية',
      descriptionEn: "Faraday's law of induction, Lenz's law, induced EMF in moving conductors, mutual and self-induction (RL circuits and back EMF), AC dynamo generator principles, electric transformer step-up and step-down efficiency, and DC electric motors.",
      descriptionAr: 'قانون فاراداي للحث، قاعدة لنز، القوة الدافعة المستحثة في سلك مستقيم، الحث المتبادل والحث الذاتي، مولد التيار المتردد (الدينامو)، المحول الكهربي الخافض والرافع، والمحرك الكهربي (الموتور).',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "th_phys_l3",
          "titleEn": "Electromagnetic Induction, Faraday's Law & AC Dynamo",
          "titleAr": "الحث الكهرومغناطيسي، قانون فاراداي ومولد التيار المتردد (الدينامو)",
          "summaryEn": "Faraday's law of induction, Lenz's directional rule, induced EMF in straight moving conductors ($BLv\\sin\\theta$), mutual and self-induction, AC electric generator (dynamo), and step-up / step-down electric transformers.",
          "summaryAr": "قانون فاراداي في الحث، قاعدة لنز، القوة الدافعة المستحثة في سلك مستقيم، الحث المتبادل والحث الذاتي، مولد التيار المتردد (الدينامو)، والمحولات الرافعة والخافضة للجهد.",
          "theoryContentEn": "### 1. Faraday's Law and Lenz's Law\n- **Faraday's Law of Electromagnetic Induction:**\n  $\\text{EMF} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$\n  where $\\Phi_m = B A \\cos\\theta$.\n- **Lenz's Law:** The induced current always flows in such a direction that its magnetic effect opposes the change in magnetic flux producing it (indicated by the negative sign in Faraday's equation).\n- **EMF Induced in a Moving Straight Conductor:**\n  $\\text{EMF} = -B L v \\sin\\theta$\n  Direction determined by **Fleming's Right-Hand Rule**.\n\n### 2. Mutual and Self-Induction\n- **Mutual Induction between Two Coils:**\n  $\\text{EMF}_2 = -M \\frac{\\Delta I_1}{\\Delta t} = -N_2 \\frac{\\Delta\\Phi_{m2}}{\\Delta t}$\n  where $M$ is the coefficient of mutual induction (measured in Henry, $\\text{H} = \\text{V}\\cdot\\text{s/A} = \\Omega\\cdot\\text{s}$).\n- **Self-Induction in a Single Coil:**\n  $\\text{EMF} = -L \\frac{\\Delta I}{\\Delta t}, \\quad L = \\frac{\\mu N^2 A}{\\ell}$\n  Opposes current rise upon switch closure (back EMF) and current collapse upon switch opening (forward high voltage spark).\n\n### 3. AC Electric Generator (Dynamo)\n- Rectangular coil rotating with angular velocity $\\omega = 2\\pi f$ in a uniform magnetic field $B$:\n  $\\text{EMF}_{\\text{inst}} = N B A \\omega \\sin\\theta = \\text{EMF}_{\\max} \\sin(2\\pi f t)$\n- **Effective (RMS) Values:**\n  $\\text{EMF}_{\\text{eff}} = \\frac{\\text{EMF}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{EMF}_{\\max}$\n  $I_{\\text{eff}} = \\frac{I_{\\max}}{\\sqrt{2}} \\approx 0.707\\,I_{\\max}$\n  $\\text{Average EMF over half cycle from zero} = \\frac{2}{\\pi}\\text{EMF}_{\\max} = \\frac{4 N B A}{\\tau}$\n\n### 4. Electric Transformers\n- Ideal transformer (100% efficiency):\n  $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$\n- Real transformer efficiency:\n  $\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$",
          "theoryContentAr": "### ١. قانون فاراداي وقاعدة لنز\n- **قانون فاراداي للحث الكهرومغناطيسي:**\n  $\\text{EMF} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$\n- **قاعدة لنز:** يكون اتجاه التيار الكهربي المستحث بحيث يعاكس التغير في الفيض المغناطيسي المسبب له.\n- **القوة الدافعة المستحثة في سلك مستقيم متحرك:**\n  $\\text{EMF} = -B L v \\sin\\theta$\n  يتحدد اتجاه التيار بقاعدة **فلمنج لليد اليمنى**.\n\n### ٢. الحث المتبادل والحث الذاتي\n- **معامل الحث المتبادل ($M$) والحث الذاتي ($L$):**\n  $\\text{EMF} = -L \\frac{\\Delta I}{\\Delta t}$\n  يقاس بالهنري ($\\text{Henry} = \\text{V}\\cdot\\text{s/A} = \\Omega\\cdot\\text{s}$).\n  قيمة معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu N^2 A}{\\ell}$.\n\n### ٣. مولد التيار المتردد (الدينامو)\n- دوران ملف بسرعة زاوية $\\omega = 2\\pi f$ في مجال مغناطيسي منتظم:\n  $\\text{EMF}_{\\text{inst}} = N B A \\omega \\sin\\theta = \\text{EMF}_{\\max} \\sin(2\\pi f t)$\n- **القيم الفعالة (RMS):**\n  $\\text{EMF}_{\\text{eff}} = \\frac{\\text{EMF}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{EMF}_{\\max}$\n- **متوسط القوة الدافعة خلال ربع أو نصف دورة من الوضع العمودي:**\n  $\\text{EMF}_{\\text{avg}} = \\frac{4 N B A}{T} = \\frac{2}{\\pi}\\text{EMF}_{\\max}$\n\n### ٤. المحول الكهربي\n- المحول المثالي (كفاءة ١٠٠٪):\n  $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$\n- كفاءة المحول غير المثالي:\n  $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$",
          "formulas": [
            {
              "labelEn": "Faraday Law of Induction",
              "labelAr": "قانون فاراداي للحث الكهرومغناطيسي",
              "latex": "\\text{EMF} = -N\\frac{\\Delta\\Phi_m}{\\Delta t}"
            },
            {
              "labelEn": "Dynamo Instantaneous EMF",
              "labelAr": "القوة الدافعة اللحظية للدينامو",
              "latex": "\\text{EMF}_{\\text{inst}} = NBA\\omega\\sin(2\\pi f t)"
            },
            {
              "labelEn": "Ideal Transformer Ratio",
              "labelAr": "معادلة المحول الكهربي المثالي",
              "latex": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Physics Textbook Grade 12",
            "bookTitleAr": "كتاب الفيزياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-PHYS-CH3-L1",
            "pageRange": "pp. 103 - 160"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Electromagnetic Induction & AC Generators",
            "titleAr": "خطة درس: الحث الكهرومغناطيسي ومولدات التيار المتردد",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-PHYS-CH3-L1",
            "bloomsObjectivesEn": [
              "Calculate instantaneous, maximum, effective, and average EMF values generated by an AC dynamo.",
              "Explain how Lenz's law embodies the law of conservation of energy.",
              "Solve transformer efficiency and transmission line power loss problems."
            ],
            "bloomsObjectivesAr": [
              "حساب القيم اللحظية والعظمى والفعالة والمتوسطة للقوة الدافعة المتولدة في ملف الدينامو.",
              "تفسير قاعدة لنز كصيغة من صيغ قانون بقاء الطاقة.",
              "حل مسائل كفاءة المحول الكهربي وفقد القدرة في خطوط النقل."
            ],
            "prerequisitesEn": [
              "Magnetic flux",
              "Circular motion",
              "Sinusoidal functions"
            ],
            "prerequisitesAr": [
              "الفيض المغناطيسي",
              "الحركة الدائرية",
              "الدوال الجيبية"
            ],
            "keyVocabularyEn": [
              {
                "term": "Effective Value of AC",
                "definition": "The value of direct current that generates thermal energy in a resistor at the same rate as the alternating current."
              },
              {
                "term": "Eddy Currents",
                "definition": "Induced circulating electric currents generated in solid metal cores subject to changing magnetic flux."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "القيمة الفعالة للتيار المتردد",
                "definition": "شدة التيار المستمر الذي يولد نفس كمية الحرارة في مقاومة في نفس الزمن."
              },
              {
                "term": "التيارات الدوامية",
                "definition": "تيارات كهربية مستحثة تسري في القطع المعدنية المصمتة المعرضة لفيض متغير وتسبب فقداً حرارياً."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Faraday & Lenz Law Experiments",
                "phaseAr": "تجارب فاراداي وقاعدة لنز",
                "duration": "30 mins",
                "activitiesEn": "Demonstrating magnet plunging into coils and checking induced current directions.",
                "activitiesAr": "تطبيق قاعدة لنز على حركة المغناطيس داخل ملف."
              },
              {
                "phaseEn": "Dynamo AC Waveform Analysis",
                "phaseAr": "تحليل موجة الدينامو الجيبية",
                "duration": "30 mins",
                "activitiesEn": "Calculating instantaneous and RMS values from angular positions.",
                "activitiesAr": "حساب القيم الفعالة واللحظية وزوايا الدوران."
              },
              {
                "phaseEn": "Transformers & Power Transmission",
                "phaseAr": "المحولات ونقل القدرة الكهربية",
                "duration": "30 mins",
                "activitiesEn": "Solving power loss P = I^2 R in transmission lines using step-up transformers.",
                "activitiesAr": "حساب الهبوط في الجهد والقدرة المفقودة في أسلاك النقل."
              }
            ],
            "commonMisconceptionsEn": [
              "Thinking average EMF over a full dynamo cycle is non-zero (it is exactly zero because halves cancel out).",
              "Confusing theta in dynamo equation (theta is the angle between the normal to the coil and magnetic field, so theta = 0 when coil is perpendicular to field)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن متوسط القوة الدافعة لدورة كاملة لا يساوي صفراً (يساوي صفراً لأن النصفين يتلاشيان).",
              "الخلط في زاوية الدينامو (تكون سيتا = صفر عندما يكون مستوى الملف عمودياً على خطوط الفيض)."
            ],
            "differentiationEn": {
              "struggling": "Use hand rotation mechanical dynamo model with LED to illustrate direction reversals.",
              "advanced": "Calculate total energy stored in a superconducting solenoid magnetic field ($E = \\frac{1}{2} L I^2$)."
            },
            "differentiationAr": {
              "struggling": "استخدام نموذج يدوي للدينامو مع لمبة LED لتوضيح انعكاس اتجاه التيار.",
              "advanced": "حساب الطاقة الكهرومغناطيسية المخزونة في المجال المغناطيسي لملف حث ($E = \\frac{1}{2} L I^2$)."
            },
            "formativeAssessmentEn": "Why are electric transformer cores constructed from laminated soft iron sheets insulated with varnish?",
            "formativeAssessmentAr": "علل: يصنع قلب المحول الكهربي من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها؟",
            "exitTicketQuestion": {
              "questionEn": "If the maximum EMF of an AC dynamo is 200 V, what is the effective (RMS) EMF?",
              "questionAr": "إذا كانت القوة الدافعة الكهربية العظمى لدينامو تيار متردد تساوي ٢٠٠ فولت، فما القيمة الفعالة لها؟",
              "solutionEn": "$\\text{EMF}_{\\text{eff}} = 200 \\times 0.707 = 141.4\\text{ V}$.",
              "solutionAr": "$\\text{EMF}_{\\text{eff}} = ٢٠٠ \\times ٠,٧٠٧ = ١٤١,٤\\text{ فولت}$."
            }
          },
          "worksheet": {
            "id": "th_phys_ws_3",
            "titleEn": "Worksheet: Induction, Dynamo & Transformer Calculations",
            "titleAr": "ورقة عمل: الحث الكهرومغناطيسي والدينامو والمحولات",
            "descriptionEn": "Rigorous problems on instantaneous and average EMF, self-induction, and transformer efficiency.",
            "descriptionAr": "مسائل علمية دقيقة على متوسط القوة الدافعة المستحثة ومعامل الحث وكفاءة المحول الكهربي.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_phys_ws_p3_1",
                "titleEn": "Average Dynamo EMF Calculation Over Quarter Cycle",
                "titleAr": "حساب متوسط القوة الدافعة للدينامو خلال ربع دورة",
                "difficulty": "medium",
                "questionEn": "An AC dynamo coil generates a maximum EMF of 100 V. What is the average induced EMF during a quarter of a cycle starting from the perpendicular position?",
                "questionAr": "ملف دينامو يولد قوة دافعة كهربية عظمى مقدارها ١٠٠ فولت. ما قيمة متوسط القوة الدافعة الكهربية المستحثة خلال ربع دورة بدءاً من الوضع العمودي؟",
                "optionsEn": [
                  "63.7 V",
                  "70.7 V",
                  "50.0 V",
                  "100 V"
                ],
                "optionsAr": [
                  "٦٣,٧ فولت",
                  "٧٠,٧ فولت",
                  "٥٠,٠ فولت",
                  "١٠٠ فولت"
                ],
                "correctAnswer": "63.7 V",
                "correctIndex": 0,
                "hintEn": "Average EMF over a quarter cycle from the vertical position equals $\\frac{2}{\\pi} \\text{EMF}_{\\max}$.",
                "hintAr": "متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي $\\frac{2}{\\pi} \\times \\text{EMF}_{\\max}$.",
                "stepByStepSolutionEn": [
                  "$\\text{EMF}_{\\max} = N B A \\omega = N B A (2\\pi f)$.",
                  "$\\text{EMF}_{\\text{avg}} = \\frac{N B A}{\\Delta t} = \\frac{N B A}{T/4} = 4 N B A f$.",
                  "Ratio: $\\frac{\\text{EMF}_{\\text{avg}}}{\\text{EMF}_{\\max}} = \\frac{4 N B A f}{2\\pi N B A f} = \\frac{2}{\\pi}$.",
                  "$\\text{EMF}_{\\text{avg}} = \\frac{2}{\\pi} (100\\text{ V}) = \\frac{200}{3.1416} \\approx 63.66\\text{ V} \\approx 63.7\\text{ V}$."
                ],
                "stepByStepSolutionAr": [
                  "$\\text{EMF}_{\\max} = N B A \\omega = N B A (٢\\pi f)$.",
                  "متوسط القوة الدافعة خلال ربع دورة: $\\text{EMF}_{\\text{avg}} = ٤ N B A f$.",
                  "النسبة: $\\frac{\\text{EMF}_{\\text{avg}}}{\\text{EMF}_{\\max}} = \\frac{٢}{\\pi}$.",
                  "$\\text{EMF}_{\\text{avg}} = \\frac{٢}{\\pi} \\times ١٠٠ = \\frac{٢٠٠}{٣,١٤١٦} \\approx ٦٣,٧\\text{ فولت}$."
                ],
                "teacherTipEn": "Average EMF over a quarter cycle from perpendicular equals average EMF over a half cycle from perpendicular ($\\frac{2}{\\pi} \\text{EMF}_{\\max}$).",
                "teacherTipAr": "متوسط القوة الدافعة خلال ربع دورة يساوي متوسطها خلال نصف دورة بدءاً من الوضع العمودي."
              },
              {
                "id": "th_phys_ws_p3_2",
                "titleEn": "AC Dynamo Armature Instantaneous & Effective EMF",
                "titleAr": "القوة الدافعة اللحظية والفعالة لمولد التيار المتردد",
                "difficulty": "hots",
                "diagramType": "phys_dynamo_generator",
                "questionEn": "An AC dynamo armature coil has $N = 100\\text{ turns}$, plane area $A = 0.04\\text{ m}^2$, and rotates in a uniform magnetic field $B = 0.5\\text{ T}$ at frequency $f = 50\\text{ Hz}$. What is the instantaneous EMF generated at $t = \\frac{1}{600}\\text{ s}$ after passing the perpendicular (zero-flux-change) position?",
                "questionAr": "ملف دينامو تيار متردد يتكون من $N = 100\\text{ لفة}$ ومساحة مقطعه $A = 0.04\\text{ م}^2$ يدور في مجال مغناطيسي منتظم $B = 0.5\\text{ تسلا}$ بتردد $f = 50\\text{ هرتز}$. احسب القوة الدافعة الكهربية المستحثة اللحظية بعد زمن $t = \\frac{1}{600}\\text{ ثانية}$ من لحظة مروره بالوضع العمودي على المجال.",
                "optionsEn": [
                  "314.2 V",
                  "628.3 V",
                  "444.3 V",
                  "157.1 V"
                ],
                "optionsAr": [
                  "٣١٤,٢ فولت",
                  "٦٢٨,٣ فولت",
                  "٤٤٤,٣ فولت",
                  "١٥٧,١ فولت"
                ],
                "correctAnswer": "314.2 V",
                "correctIndex": 0,
                "hintEn": "Calculate maximum EMF first: $\\text{EMF}_{\\max} = 2\\pi f N B A$, then rotation angle $\\theta = 2\\pi f t = 360 \\times 50 \\times t$.",
                "hintAr": "احسب القيمة العظمى أولاً: $\\text{EMF}_{\\max} = 2\\pi f N B A$ ثم زاوية الدوران $\\theta = 360 \\times 50 \\times t$.",
                "stepByStepSolutionEn": [
                  "Maximum electromotive force: $\\text{EMF}_{\\max} = N B A \\omega = N B A (2\\pi f) = 100 \\times 0.5 \\times 0.04 \\times (2 \\times 3.1416 \\times 50) = 2 \\times 314.16 = 628.32\\text{ V}$.",
                  "Angle of rotation from the perpendicular position: $\\theta = 360^\\circ \\times f \\times t = 360^\\circ \\times 50 \\times \\frac{1}{600} = \\frac{18000^\\circ}{600} = 30^\\circ$.",
                  "Instantaneous EMF: $\\text{EMF}_{\\text{inst}} = \\text{EMF}_{\\max} \\sin\\theta = 628.32 \\times \\sin 30^\\circ = 628.32 \\times 0.5 = 314.16\\text{ V} \\approx 314.2\\text{ V}$."
                ],
                "stepByStepSolutionAr": [
                  "القوة الدافعة الكهربية العظمى: $\\text{EMF}_{\\max} = NBA(2\\pi f) = 100 \\times 0.5 \\times 0.04 \\times (2\\pi \\times 50) = 200\\pi \\approx 628.32\\text{ فولت}$.",
                  "زاوية الدوران من الوضع العمودي: $\\theta = 360 \\times 50 \\times \\frac{1}{600} = 30^\\circ$.",
                  "القوة الدافعة اللحظية: $\\text{EMF}_{\\text{inst}} = \\text{EMF}_{\\max} \\sin 30^\\circ = 628.32 \\times 0.5 = 314.16\\text{ فولت}$."
                ],
                "teacherTipEn": "Angle theta in the dynamo EMF equation is measured between the normal to the coil and the magnetic field lines, which is identical to the angle rotated from the zero (perpendicular) position.",
                "teacherTipAr": "زاوية $\\theta$ في قانون الدينامو هي الزاوية بين العمودي على مستوى الملف واتجاه المجال المغناطيسي، وهي نفسها الزاوية التي دار بها الملف بدءاً من الوضع العمودي."
              },
              {
                "id": "th_phys_ws_p3_3",
                "titleEn": "Non-Ideal Step-Down Transformer Primary Current",
                "titleAr": "كفاءة المحول الخافض للجهد وحساب تيار الملف الابتدائي",
                "difficulty": "medium",
                "diagramType": "phys_transformer",
                "questionEn": "An electric step-down transformer has an efficiency of $\\eta = 80\\%$. It operates on an alternating source of primary voltage $V_p = 220\\text{ V}$ to deliver power to a lamp rated at $11\\text{ V}$ and $44\\text{ W}$. What is the current flowing in the primary coil?",
                "questionAr": "محول كهربي خافض للجهد كفاءته $80\\%$. يعمل على مصدر متردد جهده الابتدائي $V_p = 220\\text{ فولت}$ لتشغيل مصباح كهربي قدرته $44\\text{ وات}$ ويعمل على جهد $11\\text{ فولت}$. احسب شدة التيار المار في الملف الابتدائي.",
                "optionsEn": [
                  "0.25 A",
                  "0.20 A",
                  "0.50 A",
                  "4.00 A"
                ],
                "optionsAr": [
                  "٠,٢٥ أمبير",
                  "٠,٢٠ أمبير",
                  "٠,٥٠ أمبير",
                  "٤,٠٠ أمبير"
                ],
                "correctAnswer": "0.25 A",
                "correctIndex": 0,
                "hintEn": "Use transformer efficiency formula: $\\eta = \\frac{P_s}{P_p} = \\frac{P_s}{V_p I_p}$.",
                "hintAr": "طبق قانون كفاءة المحول الكهربي: $\\eta = \\frac{P_s}{P_p} = \\frac{P_s}{V_p I_p}$.",
                "stepByStepSolutionEn": [
                  "Given: secondary power $P_s = 44\\text{ W}$, efficiency $\\eta = 0.80$, primary voltage $V_p = 220\\text{ V}$.",
                  "Efficiency definition: $\\eta = \\frac{P_s}{P_p} = \\frac{P_s}{V_p I_p}$.",
                  "Rearrange for primary current: $I_p = \\frac{P_s}{\\eta \\cdot V_p} = \\frac{44}{0.80 \\times 220} = \\frac{44}{176} = 0.25\\text{ A}$.",
                  "(Note: Secondary current is $I_s = \\frac{P_s}{V_s} = \\frac{44}{11} = 4\\text{ A}$, so current was stepped up while voltage was stepped down)."
                ],
                "stepByStepSolutionAr": [
                  "المعطيات: قدرة الملف الثانوي $P_s = 44\\text{ وات}$، الكفاءة $\\eta = 80\\% = 0.80$، الجهد الابتدائي $V_p = 220\\text{ فولت}$.",
                  "قانون الكفاءة: $\\eta = \\frac{P_s}{V_p I_p}$.",
                  "حساب تيار الابتدائي: $I_p = \\frac{P_s}{\\eta \\cdot V_p} = \\frac{44}{0.80 \\times 220} = \\frac{44}{176} = 0.25\\text{ أمبير}$.",
                  "(للمقارنة: تيار الثانوي $I_s = \\frac{44}{11} = 4\\text{ أمبير}$، فالمحول الخافض للجهد رافع لشدة التيار)."
                ],
                "teacherTipEn": "A step-down voltage transformer is always a step-up current transformer. Energy losses occur mainly as heat in coils ($I^2 R$) and hysteresis in the iron core.",
                "teacherTipAr": "المحول الخافض للجهد يكون دائماً رافعاً لشدة التيار. وتحدث الفواقد أساساً على شكل حرارة في الأسلاك وتيارات دوامية في القلب الحديدي."
              }
            ]
          },
          "interactiveWidget": {
            "type": "physics_dynamo",
            "titleEn": "Faraday Induction & AC Dynamo Simulator",
            "titleAr": "محاكي الحث الكهرومغناطيسي والدينامو الجيبي",
            "descriptionEn": "Interactive coil rotation in magnetic field graphing sinusoidal instantaneous EMF curves and transformer primary/secondary ratios.",
            "descriptionAr": "محاكاة تفاعلية لدوران ملف الدينامو ورسم منحنى الجهد المتردد ونسب المحول الكهربي."
          }
        },
      ],
      solvedExamples: [
        {
          id: 'th_phys_se_03',
          titleEn: 'MoE Example 3: Galvanometer Multiplier for DC Voltmeter Conversion',
          titleAr: 'مثال الوزارة ٣: حساب مضاعف الجهد لتحويل الجلفانومتر إلى فولتميتر',
          difficulty: 'medium',
          diagramType: 'phys_galvanometer_multiplier',
          questionEn: 'A moving-coil galvanometer has a coil resistance of $R_g = 50\\,\\Omega$ and gives full-scale deflection with a current of $I_g = 10\\text{ mA}$. What series multiplier resistance $R_m$ is required to convert it into a voltmeter capable of measuring up to $V = 10\\text{ V}$?',
          questionAr: 'جلفانومتر ذو ملف متحرك مقاومة ملفه $R_g = 50\\,\\Omega$ وينحرف مؤشره إلى نهاية التدريج عند مرور تيار $I_g = 10\\text{ mA}$. احسب قيمة مقاومة مضاعف الجهد $R_m$ اللازم توصيلها على التوالي معه ليقيس فرق جهد أقصاه $V = 10\\text{ V}$.',
          optionsEn: ['$R_m = 950\\,\\Omega$', '$R_m = 1000\\,\\Omega$', '$R_m = 900\\,\\Omega$', '$R_m = 450\\,\\Omega$'],
          optionsAr: ['$R_m = 950\\,\\Omega$', '$R_m = 1000\\,\\Omega$', '$R_m = 900\\,\\Omega$', '$R_m = 450\\,\\Omega$'],
          correctAnswer: '$R_m = 950\\,\\Omega$',
          correctIndex: 0,
          hintEn: 'Use multiplier formula: $R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.',
          hintAr: 'طبق قانون مضاعف الجهد: $R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.',
          stepByStepSolutionEn: [
            'Maximum galvanometer voltage: $V_g = I_g R_g = 0.010\\text{ A} \\times 50\\,\\Omega = 0.5\\text{ V}$.',
            'Voltage drop across multiplier resistor: $V_m = V - V_g = 10\\text{ V} - 0.5\\text{ V} = 9.5\\text{ V}$.',
            'Multiplier resistance: $R_m = \\frac{V_m}{I_g} = \\frac{9.5}{0.010} = 950\\,\\Omega$.'
          ],
          stepByStepSolutionAr: [
            'أقصى فرق جهد يتحمله الجلفانومتر: $V_g = I_g R_g = 0.010 \\times 50 = 0.5\\text{ V}$.',
            'فرق الجهد المطلوب امتصاصه بمضاعف الجهد: $V_m = V - V_g = 10 - 0.5 = 9.5\\text{ V}$.',
            'قيمة مضاعف الجهد: $R_m = \\frac{V_m}{I_g} = \\frac{9.5}{0.010} = 950\\,\\Omega$.'
          ],
          teacherTipEn: 'Connecting Rm in series increases the total voltmeter resistance ($R_v = R_g + R_m = 1000\\,\\Omega$), minimizing current drawn from the tested circuit.',
          teacherTipAr: 'توصيل مضاعف الجهد على التوالي يزيد المقاومة الكلية للفولتميتر، فلا يسحب تياراً مؤثراً من الدائرة المراد قياس جهدها.'
        }
      ],
      exerciseProblems: [
        {
          id: 'th_phys_ex_03',
          titleEn: 'Exercise 3: Magnetic Force on Inclined Conductor',
          titleAr: 'تمرين ٣: القوة المغناطيسية المؤثرة على سلك مائل',
          difficulty: 'medium',
          questionEn: 'A straight wire of length $L = 0.5\\text{ m}$ carries a current of $I = 4\\text{ A}$ placed in a uniform magnetic field of flux density $B = 0.2\\text{ T}$. If the wire makes an angle of $30^\\circ$ with the magnetic field lines, calculate the magnetic force acting on the wire.',
          questionAr: 'سلك مستقيم طوله $0.5\\text{ m}$ يمر به تيار شدته $4\\text{ A}$ موضوع في مجال مغناطيسي منتظم كثافة فيضه $0.2\\text{ T}$. إذا كان السلك يصنع زاوية $30^\\circ$ مع اتجاه خطوط المجال، فاحسب مقدار القوة المغناطيسية المؤثرة عليه.',
          optionsEn: ['$0.20\\text{ N}$', '$0.40\\text{ N}$', '$0.35\\text{ N}$', '$0.10\\text{ N}$'],
          optionsAr: ['$0.20\\text{ N}$', '$0.40\\text{ N}$', '$0.35\\text{ N}$', '$0.10\\text{ N}$'],
          correctAnswer: '$0.20\\text{ N}$',
          correctIndex: 0,
          hintEn: 'Apply $F = BIL\\sin\\theta$, with $\\theta = 30^\\circ$ (so $\\sin 30^\\circ = 0.5$).',
          hintAr: 'طبق القانون $F = BIL\\sin\\theta$ مع التعويض عن $\\theta = 30^\\circ$ (حيث $\\sin 30^\\circ = 0.5$).',
          stepByStepSolutionEn: [
            'Magnetic force formula: $F = B I L \\sin\\theta$.',
            'Substitute values: $F = (0.2\\text{ T}) \\times (4\\text{ A}) \\times (0.5\\text{ m}) \\times \\sin 30^\\circ$.',
            'Calculate: $F = 0.40 \\times 0.5 = 0.20\\text{ N}$.'
          ],
          stepByStepSolutionAr: [
            'قانون القوة المغناطيسية: $F = BIL\\sin\\theta$.',
            'التعويض بالمعطيات: $F = 0.2 \\times 4 \\times 0.5 \\times \\sin 30^\\circ$.',
            'الناتج: $F = 0.40 \\times 0.5 = 0.20\\text{ نيوتن}$.'
          ],
          teacherTipEn: 'Remember that when theta is 30 degrees, the force is exactly half of the maximum possible force (BIL).',
          teacherTipAr: 'تذكر دائماً أنه عند زاوية 30 درجة مع المجال تكون القوة نصف قيمتها العظمى مباشرة.'
        }
      ]
    },
    {
      id: 'th_phys_ch4',
      chapterNumber: 4,
      titleEn: 'Alternating Current Circuits & RLC Resonance',
      titleAr: 'دوائر التيار المتردد والرنين الكهربي',
      descriptionEn: 'Hot-wire ammeter operation and calibration; pure resistive, inductive, and capacitive AC circuits; inductive reactance XL and capacitive reactance XC; series RLC impedance vectors, phase angle, and power; and resonant and oscillating tank circuits.',
      descriptionAr: 'الأميتر الحراري ومعايرته، دوائر المقاومة الأومية ومحث الحث والمكثف، المفاعلة الحثية والمفاعلة السعوية، المعاوقة الكلية وزاوية الطور في دوائر RLC، والدائرة المهتزة ودائرة الرنين.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "th_phys_l4",
          "titleEn": "Alternating Current Circuits, Impedance & Resonance",
          "titleAr": "دوائر التيار المتردد والمعاوقة الكهربية وحالة الرنين",
          "summaryEn": "AC behaviors in pure resistors, inductors, and capacitors; inductive reactance ($X_L$), capacitive reactance ($X_C$), impedance ($Z$) in series RLC circuits, phase angle, power consumption, electrical resonance ($f_0$), and tuning circuits.",
          "summaryAr": "سلوك التيار المتردد في المقاومة الأومية، ملف الحث، والمكثف؛ المفاعلة الحثية والمفاعلة السعوية، المعاوقة الكلية لدائرة RLC، زاوية الطور، القدرة المستهلكة، وحالة الرنين وتردد الرنين.",
          "theoryContentEn": "### 1. Pure AC Circuit Elements\n1. **Ohmic Resistor ($R$):** Current and potential difference are in the same phase ($\\Delta\\phi = 0$). Power consumed: $P = I_{\\text{eff}}^2 R$.\n2. **Pure Inductor ($L$):** Voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).\n   - Inductive Reactance:\n     $X_L = 2\\pi f L = \\omega L$\n   - Consumes zero average electrical energy (stores energy in magnetic field).\n3. **Pure Capacitor ($C$):** Current leads voltage by a phase angle of $90^\\circ$ ($\\pi/2$).\n   - Capacitive Reactance:\n     $X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$\n   - Consumes zero average electrical energy (stores energy in electric field).\n\n### 2. Series RLC Circuits\n- **Total Impedance ($Z$):**\n  $Z = \\sqrt{R^2 + (X_L - X_C)^2}$\n- **Total Voltage ($V$):**\n  $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$\n- **Phase Angle ($\\theta$):**\n  $\\tan\\theta = \\frac{X_L - X_C}{R} = \\frac{V_L - V_C}{V_R}$\n  - If $X_L > X_C$: Inductive circuit (voltage leads current, $\\theta > 0$).\n  - If $X_L < X_C$: Capacitive circuit (current leads voltage, $\\theta < 0$).\n  - If $X_L = X_C$: Resistive circuit in resonance ($\\theta = 0$).\n\n### 3. Electrical Resonance ($X_L = X_C$)\n- At resonance:\n  1. Impedance is at its absolute minimum: $Z = R$.\n  2. Current reaches its absolute maximum: $I_{\\max} = V/R$.\n  3. Voltage and current are in phase ($\\tan\\theta = 0$).\n  4. **Resonance Frequency Formula:**\n     $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$\n- **Applications:** Radio and wireless tuning receiver circuits, oscillatory circuits.",
          "theoryContentAr": "### ١. عناصر دوائر التيار المتردد النقية\n١. **المقاومة الأومية ($R$):** الجهد والتيار متفقان في الطور ($\\theta = 0$). تستهلك طاقة كهربية في صورة حرارة ($P = I_{\\text{eff}}^2 R$).\n٢. **ملف الحث النقي ($L$):** الجهد يسبق التيار بربع دورة ($90^\\circ$).\n   - المفاعلة الحثية:\n     $X_L = 2\\pi f L$\n   - لا يستهلك طاقة كهربية؛ بل يخزنها في صورة مجال مغناطيسي.\n٣. **المكثف النقي ($C$):** التيار يسبق الجهد بربع دورة ($90^\\circ$).\n   - المفاعلة السعوية:\n     $X_C = \\frac{1}{2\\pi f C}$\n   - يخزن الطاقة في صورة مجال كهربي.\n\n### ٢. دائرة المعاوقة المتوالية (R-L-C)\n- **المعاوقة الكلية ($Z$):**\n  $Z = \\sqrt{R^2 + (X_L - X_C)^2}$\n- **فرق الجهد الكلي:**\n  $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$\n- **زاوية الطور ($\\theta$):**\n  $\\tan\\theta = \\frac{X_L - X_C}{R}$\n\n### ٣. حالة الرنين الكهربي ($X_L = X_C$)\n- شروط وخصائص الرنين:\n  ١. المعاوقة تكون عند أقل قيمة لها ($Z = R$).\n  ٢. شدة التيار تصل لقيمتها العظمى ($I = V/R$).\n  ٣. الجهد والتيار متفقان في الطور (دائرة ذات خواص أومية نقية).\n  ٤. **قانون تردد الرنين:**\n     $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$\n- تستخدم في دوائر الاستقبال اللاسلكي وأجهزة الراديو لاختيار المحطة المطلوبة.",
          "formulas": [
            {
              "labelEn": "Series RLC Circuit Impedance",
              "labelAr": "معاوقة دائرة RLC المتوالية",
              "latex": "Z = \\sqrt{R^2 + (X_L - X_C)^2}"
            },
            {
              "labelEn": "Electrical Resonance Frequency",
              "labelAr": "تردد الرنين في دائرة RLC",
              "latex": "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}"
            },
            {
              "labelEn": "Phase Angle Tangent",
              "labelAr": "ظل زاوية الطور بين الجهد والتيار",
              "latex": "\\tan\\theta = \\frac{X_L - X_C}{R}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Physics Textbook Grade 12",
            "bookTitleAr": "كتاب الفيزياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-PHYS-CH4-L1",
            "pageRange": "pp. 161 - 210"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: AC Reactance, Impedance & Resonance",
            "titleAr": "خطة درس: المفاعلات والمعاوقة والرنين الكهربي",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-PHYS-CH4-L1",
            "bloomsObjectivesEn": [
              "Contrast phase relationships between voltage and current across resistors, inductors, and capacitors.",
              "Calculate series RLC impedance, current, phase angle, and individual component voltages.",
              "Derive and calculate the resonant frequency of radio receiver tuning circuits."
            ],
            "bloomsObjectivesAr": [
              "المقارنة بين العلاقات الطورية بين الجهد والتيار في المقاومة والملف والمكثف.",
              "حساب المعاوقة الكلية وتيار الدائرة وزاوية الطور وفروق الجهد الجزئية في دائرة RLC.",
              "استنتاج وحساب تردد الرنين لدوائر التوليف في أجهزة الاستقبال الإذاعي."
            ],
            "prerequisitesEn": [
              "AC generator fundamentals",
              "Vector trigonometry",
              "Pythagorean theorem"
            ],
            "prerequisitesAr": [
              "أساسيات مولد التيار المتردد",
              "حساب المثلثات المتجهية",
              "نظرية فيثاغورس"
            ],
            "keyVocabularyEn": [
              {
                "term": "Impedance",
                "definition": "The total opposition offered by resistors, inductors, and capacitors combined to the flow of alternating current."
              },
              {
                "term": "Resonance",
                "definition": "The state in an AC circuit where inductive reactance equals capacitive reactance, resulting in minimum impedance and maximum current."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "المعاوقة الكهربية",
                "definition": "مكافئ المقاومة الأومية والمفاعلة الحثية والسعوية معاً في دائرة التيار المتردد."
              },
              {
                "term": "حالة الرنين",
                "definition": "حالة تتساوى فيها المفاعلة الحثية مع السعوية وتصبح المعاوقة أقل ما يمكن والتيار نهاية عظمى."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Reactance Calculations",
                "phaseAr": "حسابات المفاعلة الحثية والسعوية",
                "duration": "30 mins",
                "activitiesEn": "Plotting XL vs f and XC vs f curves.",
                "activitiesAr": "رسم المنحنيات البيانية لتغير XL و XC مع التردد."
              },
              {
                "phaseEn": "RLC Impedance & Vector Diagrams",
                "phaseAr": "معاوقة RLC ومتجهات الطور",
                "duration": "30 mins",
                "activitiesEn": "Vector triangle representation of voltages and impedance.",
                "activitiesAr": "تمثيل فروق الجهد بالمتجهات الطورية وحساب المحصلة."
              },
              {
                "phaseEn": "Resonance & Tuning Circuits",
                "phaseAr": "الرنين ودوائر التوليف اللاسلكي",
                "duration": "30 mins",
                "activitiesEn": "Tuning variable capacitors to match broadcasting frequencies.",
                "activitiesAr": "محاكاة توليف تردد محطة إذاعية بتغيير سعة المكثف."
              }
            ],
            "commonMisconceptionsEn": [
              "Adding AC component voltages arithmetically instead of vectorially (e.g. V != V_R + V_L, but V = sqrt(V_R^2 + V_L^2)).",
              "Thinking inductors and capacitors consume electrical energy as heat (only pure resistance dissipates electrical energy)."
            ],
            "commonMisconceptionsAr": [
              "جمع فروق الجهد في التيار المتردد جمعاً جبرياً (يجب الجمع اتجاهياً بالجذر التربيعي).",
              "الظن بأن الملف والمكثف يستهلكان طاقة كهربية في صورة حرارة (المقاومة الأومية فقط هي التي تستهلك طاقة)."
            ],
            "differentiationEn": {
              "struggling": "Use phasor vector clock diagrams to visually display leads (+90) and lags (-90).",
              "advanced": "Calculate the quality factor Q-factor ($Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$) of an RLC circuit."
            },
            "differentiationAr": {
              "struggling": "استخدام متجهات أفقية ورأسية لتوضيح تقدم الجهد في الملف وتأخره في المكثف.",
              "advanced": "حساب معامل الجودة لمعامل الرنين ($Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$)."
            },
            "formativeAssessmentEn": "Why does doubling the frequency of an AC source multiply the inductive reactance by 2 but divide the capacitive reactance by 2?",
            "formativeAssessmentAr": "فسر: عند مضاعفة تردد المصدر المتردد، تزداد المفاعلة الحثية للضعف بينما تقل المفاعلة السعوية للنصف؟",
            "exitTicketQuestion": {
              "questionEn": "In a series RLC circuit, $R = 30\\,\\Omega$, $X_L = 80\\,\\Omega$, and $X_C = 40\\,\\Omega$. What is the total impedance $Z$?",
              "questionAr": "في دائرة RLC متوالية: $R = 30\\,\\Omega$ و $X_L = 80\\,\\Omega$ و $X_C = 40\\,\\Omega$. احسب المعاوقة الكلية $Z$.",
              "solutionEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{30^2 + (80 - 40)^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\,\\Omega$.",
              "solutionAr": "$Z = \\sqrt{٣٠^٢ + (٨٠ - ٤٠)^٢} = \\sqrt{٩٠٠ + ١٦٠٠} = \\sqrt{٢٥٠٠} = ٥٠\\,\\Omega$."
            }
          },
          "worksheet": {
            "id": "th_phys_ws_4",
            "titleEn": "Worksheet: AC Reactance, Vector Impedance & Resonance",
            "titleAr": "ورقة عمل: حسابات دوائر التيار المتردد والرنين",
            "descriptionEn": "Rigorous problems on RLC impedance, phase angle, and resonance tuning frequencies.",
            "descriptionAr": "مسائل رياضية دقيقة على المعاوقة الكلية وزاوية الطور وتعيين تردد الرنين.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_phys_ws_p4_1",
                "titleEn": "Resonant Frequency Calculation for Tuning Circuit",
                "titleAr": "حساب تردد الرنين لدائرة توليف لاسلكية",
                "difficulty": "medium",
                "questionEn": "A series resonance circuit has an inductor of self-inductance $L = 7\\,\\mu\\text{H}$ and a capacitor of capacitance $C = 70\\,\\text{pF}$. What is the resonant frequency of this circuit?",
                "questionAr": "دائرة رنين تتكون من ملف حثه الذاتي $L = ٧\\,\\mu\\text{H}$ ومكثف سعته $C = ٧٠\\,\\text{pF}$. احسب تردد الرنين لهذه الدائرة.",
                "optionsEn": [
                  "7.20 MHz",
                  "5.50 MHz",
                  "10.1 MHz",
                  "1.25 MHz"
                ],
                "optionsAr": [
                  "٧,٢٠ ميجاهرتز",
                  "٥,٥٠ ميجاهرتز",
                  "١٠,١ ميجاهرتز",
                  "١,٢٥ ميجاهرتز"
                ],
                "correctAnswer": "7.20 MHz",
                "correctIndex": 0,
                "hintEn": "Use the resonance frequency equation: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Ensure units are converted to Henry and Farad.",
                "hintAr": "طبق قانون تردد الرنين: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. حول الميكرو إلى $10^{-6}$ والبيكو إلى $10^{-12}$.",
                "stepByStepSolutionEn": [
                  "$L = 7 \\times 10^{-6}\\text{ H}$, $C = 70 \\times 10^{-12}\\text{ F}$.",
                  "$L \\times C = (7 \\times 10^{-6}) \\times (70 \\times 10^{-12}) = 4.9 \\times 10^{-16}\\text{ s}^2$.",
                  "$\\sqrt{LC} = \\sqrt{49 \\times 10^{-17}} = 2.2136 \\times 10^{-8}\\text{ s}$.",
                  "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}} = \\frac{1}{2 \\times 3.1416 \\times 2.2136 \\times 10^{-8}} \\approx 7.19 \\times 10^6\\text{ Hz} = 7.20\\text{ MHz}$."
                ],
                "stepByStepSolutionAr": [
                  "$L = ٧ \\times ١٠^{-٦}\\text{ H}$ و $C = ٧٠ \\times ١٠^{-١٢}\\text{ F}$.",
                  "$LC = ٤,٩ \\times ١٠^{-١٦}\\text{ s}^٢ \\implies \\sqrt{LC} \\approx ٢,٢١٤ \\times ١٠^{-٨}\\text{ s}$.",
                  "$f_0 = \\frac{١}{٢\\pi \\sqrt{LC}} = \\frac{١}{٢ \\times ٣,١٤١٦ \\times ٢,٢١٤ \\times ١٠^{-٨}} \\approx ٧,٢٠ \\times ١٠^٦\\text{ Hz} = ٧,٢٠\\text{ MHz}$."
                ],
                "teacherTipEn": "At resonance, impedance equals pure resistance and current amplitude reaches its absolute maximum.",
                "teacherTipAr": "في حالة الرنين تكون المعاوقة مساوية للمقاومة الأومية والتيار في قيمته العظمى."
              },
              {
                "id": "th_phys_ws_p4_2",
                "titleEn": "RLC Series Circuit Phasor Analysis & Impedance",
                "titleAr": "تحليل متجهات الطور وحساب معاوقة دائرة RLC متوالية",
                "difficulty": "hots",
                "diagramType": "phys_rlc_resonance_phasor",
                "questionEn": "A series RLC circuit connected to an alternating source of $V = 200\\text{ V}$ has resistance $R = 40\\,\\Omega$, inductive reactance $X_L = 100\\,\\Omega$, and capacitive reactance $X_C = 70\\,\\Omega$. What are the total impedance $Z$ and the phase angle $\\theta$ between total voltage and current?",
                "questionAr": "دائرة تيار متردد متوالية تحتوي على مقاومة أومية $R = 40\\,\\Omega$ وملف حث مفاعلته $X_L = 100\\,\\Omega$ ومكثف مفاعلته $X_C = 70\\,\\Omega$ متصلة بمصدر جهده $V = 200\\text{ فولت}$. احسب المعاوقة الكلية للدائرة $Z$ وزاوية الطور $\\theta$ بين الجهد الكلي والتيار.",
                "optionsEn": [
                  "$Z = 50\\,\\Omega,\\, \\theta \\approx 36.87^\\circ$ (voltage leads)",
                  "$Z = 50\\,\\Omega,\\, \\theta \\approx 36.87^\\circ$ (current leads)",
                  "$Z = 70\\,\\Omega,\\, \\theta \\approx 45.0^\\circ$ (voltage leads)",
                  "$Z = 40\\,\\Omega,\\, \\theta = 0^\\circ$ (in phase)"
                ],
                "optionsAr": [
                  "$Z = 50\\,\\Omega,\\, \\theta \\approx 36.87^\\circ$ (الجهد يتقدم)",
                  "$Z = 50\\,\\Omega,\\, \\theta \\approx 36.87^\\circ$ (التيار يتقدم)",
                  "$Z = 70\\,\\Omega,\\, \\theta \\approx 45.0^\\circ$ (الجهد يتقدم)",
                  "$Z = 40\\,\\Omega,\\, \\theta = 0^\\circ$ (متفقان في الطور)"
                ],
                "correctAnswer": "$Z = 50\\,\\Omega,\\, \\theta \\approx 36.87^\\circ$ (voltage leads)",
                "correctIndex": 0,
                "hintEn": "Calculate net reactance $X = X_L - X_C$, then $Z = \\sqrt{R^2 + X^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
                "hintAr": "احسب المفاعلة المحصلة $X = X_L - X_C$ ثم المعاوقة $Z = \\sqrt{R^2 + X^2}$ وزاوية الطور $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
                "stepByStepSolutionEn": [
                  "Net reactive component: $X = X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
                  "Total circuit impedance: $Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\,\\Omega$.",
                  "Phase angle tangent: $\\tan\\theta = \\frac{X_L - X_C}{R} = \\frac{30}{40} = 0.75$.",
                  "Phase angle: $\\theta = \\arctan(0.75) \\approx 36.87^\\circ$.",
                  "Because $X_L > X_C$, the circuit has inductive characteristics and the voltage vector leads the current vector by $36.87^\\circ$."
                ],
                "stepByStepSolutionAr": [
                  "المفاعلة المحصلة: $X = X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
                  "المعاوقة الكلية: $Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\,\\Omega$.",
                  "ظل زاوية الطور: $\\tan\\theta = \\frac{X_L - X_C}{R} = \\frac{30}{40} = 0.75$.",
                  "إذن زاوية الطور $\\theta \\approx 36.87^\\circ$.",
                  "بما أن $X_L > X_C$، فإن للدائرة خواصاً حثية ويكون الجهد الكلي متقدماً في الطور على التيار."
                ],
                "teacherTipEn": "Phasor diagrams represent voltages on a complex coordinate system where $V_R$ is real (along I), $V_L$ leads by $+90^\\circ$ (positive imaginary), and $V_C$ lags by $-90^\\circ$ (negative imaginary).",
                "teacherTipAr": "مخطط الطور يمثل فروق الجهد: جهد المقاومة يتفق مع التيار، جهد الملف يتقدم بربع دورة، وجهد المكثف يتأخر بربع دورة."
              },
              {
                "id": "th_phys_ws_p4_3",
                "titleEn": "Frequency Scaling of Inductive & Capacitive Reactances",
                "titleAr": "تأثير مضاعفة التردد على المفاعلتين الحثية والسعوية",
                "difficulty": "medium",
                "questionEn": "An alternating circuit contains an inductor and a capacitor. If the frequency of the AC generator is doubled while voltage is held constant, what happens to the inductive reactance $X_L$ and capacitive reactance $X_C$?",
                "questionAr": "دائرة كهربية تحتوي على ملف حث ومكثف متصلين بمصدر متردد. إذا تضاعف تردد دوران المولد مع ثبوت الجهد، فماذا يحدث لقيمة كل من المفاعلة الحثية $X_L$ والمفاعلة السعوية $X_C$؟",
                "optionsEn": [
                  "$X_L$ doubles ($2 X_L$), and $X_C$ is halved ($0.5 X_C$)",
                  "$X_L$ is halved ($0.5 X_L$), and $X_C$ doubles ($2 X_C$)",
                  "Both $X_L$ and $X_C$ double",
                  "Both $X_L$ and $X_C$ remain constant"
                ],
                "optionsAr": [
                  "تتضاعف $X_L$ وتنتصف $X_C$",
                  "تنتصف $X_L$ وتتضاعف $X_C$",
                  "تتضاعف كلتاهما",
                  "تظل كلتاهما ثابتة"
                ],
                "correctAnswer": "$X_L$ doubles ($2 X_L$), and $X_C$ is halved ($0.5 X_C$)",
                "correctIndex": 0,
                "hintEn": "Inductive reactance is directly proportional to frequency ($X_L = 2\\pi f L$), while capacitive reactance is inversely proportional ($X_C = \\frac{1}{2\\pi f C}$).",
                "hintAr": "المفاعلة الحثية طردية مع التردد ($X_L = 2\\pi f L$) بينما المفاعلة السعوية عكسية مع التردد ($X_C = \\frac{1}{2\\pi f C}$).",
                "stepByStepSolutionEn": [
                  "Formula for inductive reactance: $X_L = 2\\pi f L \\implies X_L \\propto f$.",
                  "When frequency doubles ($f' = 2f$), new inductive reactance: $X_L' = 2 X_L$.",
                  "Formula for capacitive reactance: $X_C = \\frac{1}{2\\pi f C} \\implies X_C \\propto \\frac{1}{f}$.",
                  "When frequency doubles ($f' = 2f$), new capacitive reactance: $X_C' = \\frac{1}{2} X_C = 0.5 X_C$."
                ],
                "stepByStepSolutionAr": [
                  "قانون المفاعلة الحثية: $X_L = 2\\pi f L \\implies X_L \\propto f$ (علاقة طردية).",
                  "عند مضاعفة التردد: تتضاعف المفاعلة الحثية $X_L' = 2 X_L$.",
                  "قانون المفاعلة السعوية: $X_C = \\frac{1}{2\\pi f C} \\implies X_C \\propto \\frac{1}{f}$ (علاقة عكسية).",
                  "عند مضاعفة التردد: تقل المفاعلة السعوية إلى النصف $X_C' = \\frac{1}{2} X_C$."
                ],
                "teacherTipEn": "At very high frequencies, an inductor behaves like an open circuit ($X_L \\to \\infty$), while a capacitor behaves like a short circuit ($X_C \\to 0$).",
                "teacherTipAr": "عند الترددات العالية جداً يعمل الملف كدائرة مفتوحة لممانعته الكبيرة، بينما يعمل المكثف كسلك عديم المقاومة لانعدام مفاعلته."
              }
            ]
          },
          "interactiveWidget": {
            "type": "physics_resonance",
            "titleEn": "RLC Impedance & Resonance Curve Simulator",
            "titleAr": "محاكي معاوقة دوائر التيار المتردد ومنحنى الرنين",
            "descriptionEn": "Interactive RLC circuit explorer plotting impedance and current vs frequency to illustrate the resonance peak.",
            "descriptionAr": "محاكاة تفاعلية لتغير المعاوقة والتيار مع التردد وتحديد قمة الرنين الكهربي."
          }
        },
      ],
      solvedExamples: [
        {
          id: 'th_phys_se_04',
          titleEn: 'MoE Example 4: Step-Up Transformer & Transmission Line Efficiency',
          titleAr: 'مثال الوزارة ٤: المحول الرافع للجهد وتقليل الفاقد في خطوط النقل',
          difficulty: 'medium',
          diagramType: 'phys_transformer',
          questionEn: 'An electric generating station produces $P = 200\\text{ kW}$ at a voltage of $V_p = 1000\\text{ V}$. A step-up transformer with turns ratio $N_s / N_p = 10$ and $100\\%$ efficiency steps up the voltage before transmission through lines of total resistance $R_{\\text{line}} = 5\\,\\Omega$. Calculate the power lost as heat in the transmission lines.',
          questionAr: 'محطة لتوليد الطاقة الكهربية تنتج قدرة $200\\text{ kW}$ بجهد $1000\\text{ V}$. استُخدم محول رافع للجهد كفاءته $100\\%$ بنسبة لفات $N_s / N_p = 10$ لرفع الجهد قبل نقله عبر خطوط نقل مقاومتها $5\\,\\Omega$. احسب القدرة الكهربية المفقودة على شكل حرارة في أسلاك النقل.',
          optionsEn: ['$2\\text{ kW}$', '$20\\text{ kW}$', '$4\\text{ kW}$', '$0.5\\text{ kW}$'],
          optionsAr: ['$2\\text{ kW}$', '$20\\text{ kW}$', '$4\\text{ kW}$', '$0.5\\text{ kW}$'],
          correctAnswer: '$2\\text{ kW}$',
          correctIndex: 0,
          hintEn: 'Find stepped-up secondary voltage $V_s = V_p \\times (N_s/N_p)$, then transmission line current $I_s = P / V_s$, then $P_{\\text{loss}} = I_s^2 R_{\\text{line}}$.',
          hintAr: 'احسب جهد الثانوي $V_s = V_p \\times (N_s/N_p)$ ثم تيار خط النقل $I_s = P / V_s$، وأخيراً القدرة المفقودة $P_{\\text{loss}} = I_s^2 R_{\\text{line}}$.',
          stepByStepSolutionEn: [
            'Secondary voltage: $V_s = V_p \\left(\\frac{N_s}{N_p}\\right) = 1000 \\times 10 = 10,000\\text{ V}$.',
            'Transmission line current: $I_s = \\frac{P}{V_s} = \\frac{200,000\\text{ W}}{10,000\\text{ V}} = 20\\text{ A}$.',
            'Power lost as Joule heating in lines: $P_{\\text{loss}} = I_s^2 R_{\\text{line}} = (20)^2 \\times 5 = 400 \\times 5 = 2000\\text{ W} = 2\\text{ kW}$.',
            '(Notice without the step-up transformer, transmission current would be $200\\text{ A}$, leading to catastrophic power loss of $200\\text{ kW}$!).'
          ],
          stepByStepSolutionAr: [
            'الجهد الثانوي بعد الرفع: $V_s = V_p \\times 10 = 10,000\\text{ فولت}$.',
            'شدة تيار خط النقل: $I_s = \\frac{P}{V_s} = \\frac{200,000}{10,000} = 20\\text{ أمبير}$.',
            'القدرة المفقودة في أسلاك النقل: $P_{\\text{loss}} = I_s^2 R_{\\text{line}} = (20)^2 \\times 5 = 400 \\times 5 = 2000\\text{ وات} = 2\\text{ كيلووات}$.',
            '(للمقارنة: بدون المحول كان التيار سيكون $200\\text{ أمبير}$ مما يفقد كامل طاقة المحطة $200\\text{ كيلووات}$ في الأسلاك!).'
          ],
          teacherTipEn: 'Step-up transformers are essential at generating power plants because stepping up voltage by 10 decreases power loss by a factor of 100 ($P_{\\text{loss}} \\propto 1/V^2$).',
          teacherTipAr: 'المحولات الرافعة لا غنى عنها عند محطات التوليد لأن مضاعفة الجهد 10 أمثال تخفض الفاقد الحراري بمقدار 100 ضعف.'
        }
      ],
      exerciseProblems: [
        {
          id: 'th_phys_ex_04',
          titleEn: 'Exercise 4: AC Dynamo Effective and Instantaneous EMF',
          titleAr: 'تمرين ٤: القيمة الفعالة واللحظية للقوة الدافعة لدينامو',
          difficulty: 'hots',
          diagramType: 'phys_dynamo_generator',
          questionEn: 'If the effective electromotive force produced by an alternating current dynamo is $\\text{EMF}_{\\text{eff}} = 200\\text{ V}$, what is the instantaneous EMF when the plane of the coil is inclined at $30^\\circ$ to the magnetic field lines?',
          questionAr: 'إذا كانت القيمة الفعالة للقوة الدافعة الكهربية المتولدة من دينامو تيار متردد هي $\\text{EMF}_{\\text{eff}} = 200\\text{ V}$، فما هي القوة الدافعة اللحظية عندما يكون مستوى الملف مائلاً بزاوية $30^\\circ$ على خطوط الفيض؟',
          optionsEn: ['$244.9\\text{ V}$', '$141.4\\text{ V}$', '$282.8\\text{ V}$', '$100.0\\text{ V}$'],
          optionsAr: ['$244.9\\text{ V}$', '$141.4\\text{ V}$', '$282.8\\text{ V}$', '$100.0\\text{ V}$'],
          correctAnswer: '$244.9\\text{ V}$',
          correctIndex: 0,
          hintEn: 'Maximum EMF is $\\text{EMF}_{\\max} = \\text{EMF}_{\\text{eff}} \\times \\sqrt{2}$. The angle between normal and field is $\\theta = 90^\\circ - 30^\\circ = 60^\\circ$.',
          hintAr: 'القيمة العظمى $\\text{EMF}_{\\max} = \\text{EMF}_{\\text{eff}} \\times \\sqrt{2}$. الزاوية مع العمودي على الملف هي $\\theta = 90^\\circ - 30^\\circ = 60^\\circ$.',
          stepByStepSolutionEn: [
            'Maximum EMF: $\\text{EMF}_{\\max} = \\text{EMF}_{\\text{eff}} \\times \\sqrt{2} = 200 \\times 1.4142 \\approx 282.84\\text{ V}$.',
            'Coil inclination angle to field lines is $30^\\circ$, so angle between the normal to the coil and field is $\\theta = 90^\\circ - 30^\\circ = 60^\\circ$.',
            'Instantaneous EMF: $\\text{EMF}_{\\text{inst}} = \\text{EMF}_{\\max} \\sin 60^\\circ = 282.84 \\times \\frac{\\sqrt{3}}{2} \\approx 244.95\\text{ V}$.'
          ],
          stepByStepSolutionAr: [
            'القيمة العظمى للقوة الدافعة: $\\text{EMF}_{\\max} = 200\\sqrt{2} \\approx 282.84\\text{ فولت}$.',
            'زاوية الملف مع المجال $30^\\circ$ إذن الزاوية مع العمودي هي $\\theta = 90^\\circ - 30^\\circ = 60^\\circ$.',
            'القيمة اللحظية: $\\text{EMF}_{\\text{inst}} = 282.84 \\times \\sin 60^\\circ = 282.84 \\times 0.866 \\approx 244.9\\text{ فولت}$.'
          ],
          teacherTipEn: 'Always be alert: the angle in the dynamo EMF formula is between the NORMAL to the coil and the field lines, not the plane of the coil.',
          teacherTipAr: 'انتبه بشدة: الزاوية في قانون الدينامو هي الزاوية بين العمودي على مستوى الملف وخطوط المجال وليست مع مستوى الملف نفسه.'
        }
      ]
    },
    {
      id: 'th_phys_ch5',
      chapterNumber: 5,
      titleEn: 'Modern Physics: Dual Nature of Wave and Particle',
      titleAr: 'الفيزياء الحديثة: ازدواجية الموجة والجسيم',
      descriptionEn: "Blackbody radiation spectrum and Planck's quantum hypothesis; photoelectric effect, work function, and Einstein's photoelectric equation; Compton scattering effect demonstrating photon momentum; and de Broglie matter wavelength with electron microscopy.",
      descriptionAr: 'إشعاع الجسم الأسود ومنحنيات بلانك، الانبعاث الكهروضوئي ودالة الشغل ومعادلة أينشتاين، ظاهرة كومتون وإثبات الصفة الجسيمية للفوتون، وفرضية دي براولي للموجات المادية والمجهر الإلكتروني.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "th_phys_l5",
          "titleEn": "Wave-Particle Duality, Quantum Photons & Compton Effect",
          "titleAr": "ازدواجية الموجة والجسيم، فوتونات الكم وظاهرة كومتون",
          "summaryEn": "Blackbody radiation curves, Planck's quantum hypothesis ($E = h\\nu$), Einstein's photoelectric equation and work function, photon linear momentum ($p = h/\\lambda$), Compton scattering, de Broglie matter waves, and the transmission electron microscope.",
          "summaryAr": "منحنيات إشعاع الجسم الأسود، فرض بلانك لتكميم الطاقة، الظاهرة الكهروضوئية ودالة الشغل لأينشتاين، كمية تحرك الفوتون، ظاهرة كومتون، موجات دي برولي المادية، والمجهر الإلكتروني.",
          "theoryContentEn": "### 1. Blackbody Radiation and Planck's Quantum Theory\n- **Classical Physics Failure:** Rayleigh-Jeans law predicted radiation intensity goes to infinity at short wavelengths (Ultraviolet Catastrophe).\n- **Planck's Quantum Postulate (1900):** Energy is emitted or absorbed in discrete packets called **quanta** or **photons**:\n  $E = h\\nu = \\frac{hc}{\\lambda}$\n  where $h = 6.626 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$.\n- **Wien's Displacement Law:** The wavelength corresponding to maximum radiation intensity is inversely proportional to absolute temperature:\n  $\\lambda_{\\max} \\propto \\frac{1}{T} \\implies \\lambda_{\\max} T = \\text{constant}$\n\n### 2. Einstein's Photoelectric Effect (1905)\n- Electrons are emitted from a metal surface when irradiated with light of frequency equal to or greater than the **threshold frequency** ($\\nu_c$):\n  $E_{\\text{photon}} = W_0 + KE_{\\max}$\n  $h\\nu = h\\nu_c + \\frac{1}{2}m_e v_{\\max}^2 = W_0 + e V_{\\text{stop}}$\n- **Key Principles:**\n  - If $\\nu < \\nu_c$: No emission occurs regardless of intensity or exposure duration.\n  - If $\\nu \\ge \\nu_c$: Number of emitted electrons is proportional to light intensity; kinetic energy depends strictly on light frequency.\n\n### 3. Photon Momentum and the Compton Effect (1923)\n- **Photon Physical Properties:**\n  - Relativistic mass: $m = \\frac{E}{c^2} = \\frac{h\\nu}{c^2} = \\frac{h}{c\\lambda}$.\n  - Linear momentum: $p = mc = \\frac{h}{\\lambda} = \\frac{E}{c}$.\n  - Force exerted by a photon beam of power $P$:\n    $F = \\frac{2P}{c} \\quad (\\text{upon complete reflection})$\n- **The Compton Scattering Effect:**\n  - An X-ray or gamma photon collides with a stationary free electron.\n  - Scattered photon has lower frequency and longer wavelength ($\\lambda' > \\lambda$).\n  - Conservation of total relativistic energy and linear momentum proves photons behave as particles.\n\n### 4. De Broglie Matter Waves and Electron Microscope\n- **De Broglie Hypothesis (1924):** Any moving particle of mass $m$ and velocity $v$ is accompanied by a matter wave:\n  $\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2 m e V}}$\n- **Transmission Electron Microscope (TEM):**\n  - High accelerating voltage $V$ imparts high velocity to electrons, shrinking their de Broglie wavelength to fractions of an Angstrom ($\\lambda \\ll \\lambda_{\\text{light}}$).\n  - Resolving power is dramatically superior to optical microscopes, allowing imaging of viruses and macromolecular structures.",
          "theoryContentAr": "### ١. إشعاع الجسم الأسود وفرض بلانك\n- **قصور الفيزياء الكلاسيكية:** توقعت أن شدة الإشعاع تزداد كلما قل الطول الموجي مقتربة من المالانهاية (كارثة الأشعة فوق البنفسجية).\n- **فرض ماكس بلانك (١٩٠٠):** الإشعاع يتكون من كمات أو دفقات صغيرة من الطاقة تسمى **فوتونات**:\n  $E = h\\nu = \\frac{hc}{\\lambda}$\n  حيث $h = 6.626 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$.\n- **قانون فين للإزاحة:** الطول الموجي المصاحب لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة:\n  $\\lambda_{\\max} T = \\text{ثابت}$\n\n### ٢. التأثير الكهروضوئي لأينشتاين (١٩٠٥)\n- انبعاث إلكترونات من سطح معدن عند سقوط ضوء تردده أكبر من أو يساوي **التردد الحرج** ($\\nu_c$):\n  $h\\nu = W_0 + KE_{\\max}$\n  حيث $W_0 = h\\nu_c$ هي دالة الشغل لسطح المعدن.\n- **قواعد الظاهرة الكهروضوئية:**\n  - إذا كان تردد الضوء الساقط أقل من التردد الحرج لا تنبعث إلكترونات مهما زادت شدة الضوء أو زمن التعرض.\n  - طاقة حركة الإلكترونات المتحررة تعتمد حصراً على تردد الضوء الساقط، بينما شدة التيار الكهروضوئي تتناسب طردياً مع شدة الضوء.\n\n### ٣. كمية تحرك الفوتون وظاهرة كومتون (١٩٢٣)\n- **خصائص الفوتون:**\n  - كتلة الفوتون أثناء حركته: $m = \\frac{h\\nu}{c^2}$.\n  - كمية تحرك الفوتون: $p = \\frac{h}{\\lambda}$.\n  - القوة التي يؤثر بها شعاع ضوئي قدرته $P$ عند انعكاسه: $F = \\frac{2P}{c}$.\n- **ظاهرة كومتون:**\n  - اصطدام فوتون أشعة إكس بإلكترون حر؛ يقل تردد الفوتون ويزداد طوله الموجي وتزداد سرعة الإلكترون، مما يثبت الصفة الجسيمية للضوء وتطبيق قانوني بقاء الطاقة وكمية التحرك.\n\n### ٤. موجات دي برولي والمجهر الإلكتروني\n- **طول موجة دي برولي المصاحبة لحركة الجسيمات:**\n  $\\lambda = \\frac{h}{mv} = \\frac{h}{\\sqrt{2 m e V}}$\n- **المجهر الإلكتروني:**\n  - تعجيل الإلكترونات بفرق جهد كهربي عالٍ يقلل طول موجة دي برولي لدرجة أصغر بكثير من أبعاد الفيروسات، مما يوفر قدرة تكبيرية وتفريقية فائقة.",
          "formulas": [
            {
              "labelEn": "Einstein Photoelectric Equation",
              "labelAr": "معادلة أينشتاين للظاهرة الكهروضوئية",
              "latex": "h\\nu = W_0 + \\frac{1}{2}m_e v_{\\max}^2"
            },
            {
              "labelEn": "De Broglie Matter Wavelength",
              "labelAr": "طول موجة دي برولي المادية",
              "latex": "\\lambda = \\frac{h}{mv} = \\frac{h}{\\sqrt{2m_e eV}}"
            },
            {
              "labelEn": "Photon Linear Momentum",
              "labelAr": "كمية تحرك الفوتون",
              "latex": "p = \\frac{h}{\\lambda} = \\frac{h\\nu}{c}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Physics Textbook Grade 12",
            "bookTitleAr": "كتاب الفيزياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-PHYS-CH5-L1",
            "pageRange": "pp. 211 - 248"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Quantum Duality, Photons & Matter Waves",
            "titleAr": "خطة درس: ازدواجية الموجة والجسيم وظاهرة كومتون",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-PHYS-CH5-L1",
            "bloomsObjectivesEn": [
              "Apply Einstein's photoelectric equation to calculate threshold frequency, work function, and stopping potential.",
              "Explain how the Compton effect provides conclusive experimental proof of photon particle nature.",
              "Calculate de Broglie wavelengths of accelerated electrons and explain TEM resolving power."
            ],
            "bloomsObjectivesAr": [
              "تطبيق معادلة أينشتاين الكهروضوئية لحساب دالة الشغل وجهد الإيقاف وسرعة الإلكترونات المتحررة.",
              "تفسير ظاهرة كومتون كدليل قاطع على السلوك الجسيمي للفوتونات.",
              "حساب طول موجة دي برولي للإلكترونات المعجلة وتفسير القدرة التحليلية للمجهر الإلكتروني."
            ],
            "prerequisitesEn": [
              "Wave theory of light",
              "Conservation of energy",
              "Conservation of momentum"
            ],
            "prerequisitesAr": [
              "النظرية الموجية للضوء",
              "قانون بقاء الطاقة",
              "قانون بقاء كمية التحرك"
            ],
            "keyVocabularyEn": [
              {
                "term": "Work Function",
                "definition": "The minimum energy required to liberate an electron from a metal surface without imparting kinetic energy."
              },
              {
                "term": "Compton Scattering",
                "definition": "The collision between a high-energy photon and a free electron demonstrating conservation of momentum."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "دالة الشغل لسطح المعدن",
                "definition": "أقل طاقة تلزم لتحرير إلكترون من سطح المعدن دون إكسابه طاقة حركة."
              },
              {
                "term": "ظاهرة كومتون",
                "definition": "اصطدام فوتون عالي الطاقة بإلكترون حر يثبت الطبيعة الجسيمية للضوء."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Blackbody Curves & Planck Postulate",
                "phaseAr": "إشعاع الجسم الأسود وفرض بلانك",
                "duration": "25 mins",
                "activitiesEn": "Analyzing spectral distribution curves and Wien displacement law.",
                "activitiesAr": "تحليل منحنيات بلانك وتطبيق قانون فين للإزاحة."
              },
              {
                "phaseEn": "Photoelectric Effect & Stopping Potential",
                "phaseAr": "الظاهرة الكهروضوئية وجهد الإيقاف",
                "duration": "35 mins",
                "activitiesEn": "Plotting KE_max vs frequency and finding h from slope.",
                "activitiesAr": "رسم العلاقة البيانية بين طاقة الحركة وتردد الضوء وإيجاد ثابت بلانك."
              },
              {
                "phaseEn": "Compton Effect & De Broglie Waves",
                "phaseAr": "ظاهرة كومتون وموجات دي برولي",
                "duration": "30 mins",
                "activitiesEn": "Solving photon-electron collision momentum vectors.",
                "activitiesAr": "حساب التغير في الطول الموجي وطول موجة دي برولي للإلكترون."
              }
            ],
            "commonMisconceptionsEn": [
              "Believing bright red light can emit electrons if dim blue light does (emission depends strictly on frequency exceeding threshold, not light brightness).",
              "Confusing de Broglie matter waves with electromagnetic waves (matter waves are quantum probability waves, not electromagnetic)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن الضوء الأحمر الشديد يمكنه تحرير إلكترونات إذا حررها ضوء أزرق خافت (التحرير يعتمد على التردد فقط وليس الشدة).",
              "الخلط بين موجات دي برولي والموجات الكهرومغناطيسية (موجات دي برولي موجات مادية مرافقة لحركة الجسيم وليست كهرومغناطيسية)."
            ],
            "differentiationEn": {
              "struggling": "Use energy diagram steps: Photon Energy = Work Function (step 1 to escape) + KE (speed to run).",
              "advanced": "Derive the relativistic Compton shift formula $\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$."
            },
            "differentiationAr": {
              "struggling": "استخدام تشبيه بطاقة العبور: طاقة الفوتون = ثمن التذكرة (دالة الشغل) + باقي النقود (طاقة الحركة).",
              "advanced": "استنتاج معادلة كومتون النسبية لحساب الزيادة في الطول الموجي بدلالة زاوية التشتت."
            },
            "formativeAssessmentEn": "Why does the slope of the kinetic energy versus frequency graph remain constant regardless of the target metal?",
            "formativeAssessmentAr": "علل: ميل الخط المستقيم في العلاقة البيانية بين طاقة الحركة وتردد الضوء الساقط يظل ثابتاً لجميع المعادن؟",
            "exitTicketQuestion": {
              "questionEn": "If a metal has a work function of 2.0 eV, what is the maximum kinetic energy of electrons emitted when illuminated by photons of energy 3.5 eV?",
              "questionAr": "إذا كانت دالة الشغل لسطح معدن تساوي ٢,٠ إلكترون فولت، فما أقصى طاقة حركة للإلكترونات المنبعثة عند سقوط فوتونات طاقتها ٣,٥ إلكترون فولت؟",
              "solutionEn": "$KE_{\\max} = E - W_0 = 3.5\\text{ eV} - 2.0\\text{ eV} = 1.5\\text{ eV} = 2.40 \\times 10^{-19}\\text{ J}$.",
              "solutionAr": "$KE_{\\max} = ٣,٥ - ٢,٠ = ١,٥\\text{ إلكترون فولت} = ٢,٤ \\times ١٠^{-١٩}\\text{ جول}$."
            }
          },
          "worksheet": {
            "id": "th_phys_ws_5",
            "titleEn": "Worksheet: Photoelectric Kinetics & Quantum Momentum",
            "titleAr": "ورقة عمل: حسابات الظاهرة الكهروضوئية وموجات دي برولي",
            "descriptionEn": "Rigorous problems on work function, stopping potential, photon collision momentum, and de Broglie wavelengths.",
            "descriptionAr": "مسائل علمية دقيقة على التردد الحرج وجهد الإيقاف وطول موجة دي برولي المرافقة للإلكترون.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_phys_ws_p5_1",
                "titleEn": "De Broglie Wavelength of an Accelerated Electron",
                "titleAr": "حساب طول موجة دي برولي لإلكترون معجل بفرق جهد",
                "difficulty": "medium",
                "questionEn": "An electron is accelerated from rest through a potential difference of 100 V. What is the de Broglie wavelength associated with the accelerated electron? ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, $e = 1.6 \\times 10^{-19}\\text{ C}$)",
                "questionAr": "عُجل إلكترون من السكون عبر فرق جهد قدره ١٠٠ فولت. احسب طول موجة دي برولي المصاحبة لحركة هذا الإلكترون.",
                "optionsEn": [
                  "0.123 nm",
                  "1.23 nm",
                  "0.012 nm",
                  "12.3 nm"
                ],
                "optionsAr": [
                  "٠,١٢٣ نانومتر",
                  "١,٢٣ نانومتر",
                  "٠,٠١٢ نانومتر",
                  "١٢,٣ نانومتر"
                ],
                "correctAnswer": "0.123 nm",
                "correctIndex": 0,
                "hintEn": "$KE = e V = \\frac{1}{2} m v^2 \\implies p = \\sqrt{2 m e V}$, then $\\lambda = h/p$.",
                "hintAr": "طاقة الحركة $KE = eV = \\frac{1}{2}mv^2 \\implies p = \\sqrt{2meV}$، ثم احسب الطول الموجي $\\lambda = h/p$.",
                "stepByStepSolutionEn": [
                  "Kinetic energy: $KE = e V = (1.6 \\times 10^{-19})(100) = 1.6 \\times 10^{-17}\\text{ J}$.",
                  "Linear momentum: $p = \\sqrt{2 m_e KE} = \\sqrt{2 (9.1 \\times 10^{-31})(1.6 \\times 10^{-17})} = \\sqrt{2.912 \\times 10^{-47}} \\approx 5.396 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$.",
                  "De Broglie wavelength: $\\lambda = \\frac{h}{p} = \\frac{6.626 \\times 10^{-34}}{5.396 \\times 10^{-24}} \\approx 1.228 \\times 10^{-10}\\text{ m} = 0.123\\text{ nm}$."
                ],
                "stepByStepSolutionAr": [
                  "طاقة الحركة: $KE = eV = (١,٦ \\times ١٠^{-١٩})(١٠٠) = ١,٦ \\times ١٠^{-١٧}\\text{ جول}$.",
                  "كمية التحرك: $p = \\sqrt{٢ m_e KE} = \\sqrt{٢(٩,١ \\times ١٠^{-٣١})(١,٦ \\times ١٠^{-١٧})} \\approx ٥,٣٩٦ \\times ١٠^{-٢٤}\\text{ kg}\\cdot\\text{m/s}$.",
                  "طول موجة دي برولي: $\\lambda = \\frac{h}{p} = \\frac{٦,٦٢٦ \\times ١٠^{-٣٤}}{٥,٣٩٦ \\times ١٠^{-٢٤}} \\approx ٠,١٢٣\\text{ نانومتر}$."
                ],
                "teacherTipEn": "Notice that 0.123 nm is roughly atomic dimension size, explaining why electron diffraction occurs with crystal lattices.",
                "teacherTipAr": "لاحظ أن ٠,١٢٣ نانومتر يقارب المسافات البينية في بلورات المعادن مما يفسر حدوث حيود للإلكترونات."
              },
              {
                "id": "th_phys_ws_p5_2",
                "titleEn": "Photoelectric Effect & Stopping Potential Circuit",
                "titleAr": "دائرة الظاهرة الكهروضوئية وتعيين جهد الإيقاف",
                "difficulty": "hots",
                "diagramType": "phys_photoelectric_circuit",
                "questionEn": "Monochromatic ultraviolet light of wavelength $\\lambda = 250\\text{ nm}$ illuminates a metal cathode whose work function is $W_0 = 2.14\\text{ eV}$. What is the stopping potential $V_{\\text{stop}}$ required to completely halt the photoelectric current?",
                "questionAr": "سقط ضوء أحادي اللون فوق بنفسجي طوله الموجي $\\lambda = 250\\text{ نانومتر}$ على مهبط معدني دالة شغله $W_0 = 2.14\\text{ إلكترون فولت}$. احسب قيمة جهد الإيقاف $V_{\\text{stop}}$ اللازم لقطع التيار الكهروضوئي تماماً.",
                "optionsEn": [
                  "2.82 V",
                  "4.96 V",
                  "2.14 V",
                  "1.41 V"
                ],
                "optionsAr": [
                  "٢,٨٢ فولت",
                  "٤,٩٦ فولت",
                  "٢,١٤ فولت",
                  "١,٤١ فولت"
                ],
                "correctAnswer": "2.82 V",
                "correctIndex": 0,
                "hintEn": "Calculate incident photon energy in eV: $E = \\frac{hc}{\\lambda} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{\\lambda\\text{ (nm)}}$, then $e V_{\\text{stop}} = KE_{\\max} = E - W_0$.",
                "hintAr": "احسب طاقة الفوتون الساقط بالإلكترون فولت: $E = \\frac{hc}{\\lambda} = \\frac{1240}{250} = 4.96\\text{ eV}$، ثم $e V_{\\text{stop}} = E - W_0$.",
                "stepByStepSolutionEn": [
                  "Energy of incident photon: $E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(3.0 \\times 10^8)}{250 \\times 10^{-9}} = 7.951 \\times 10^{-19}\\text{ J}$.",
                  "Convert photon energy to electron-volts: $E = \\frac{7.951 \\times 10^{-19}}{1.602 \\times 10^{-19}} \\approx 4.963\\text{ eV}$.",
                  "Maximum kinetic energy of emitted photoelectrons: $KE_{\\max} = E - W_0 = 4.963 - 2.14 = 2.823\\text{ eV}$.",
                  "Since $KE_{\\max} = e V_{\\text{stop}}$, the stopping voltage is $V_{\\text{stop}} = \\frac{KE_{\\max}}{e} = 2.82\\text{ V}$."
                ],
                "stepByStepSolutionAr": [
                  "طاقة الفوتون الساقط: $E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{250 \\times 10^{-9}} = 7.951 \\times 10^{-19}\\text{ جول}$.",
                  "التحويل إلى إلكترون فولت: $E = \\frac{7.951 \\times 10^{-19}}{1.602 \\times 10^{-19}} \\approx 4.96\\text{ eV}$.",
                  "أقصى طاقة حركة للإلكترونات المنبعثة: $KE_{\\max} = E - W_0 = 4.96 - 2.14 = 2.82\\text{ eV}$.",
                  "بما أن $KE_{\\max} = e V_{\\text{stop}}$، فإن جهد الإيقاف يساوي عددياً طاقة الحركة بوحدة الإلكترون فولت: $V_{\\text{stop}} = 2.82\\text{ فولت}$."
                ],
                "teacherTipEn": "Stopping potential depends solely on the frequency of incident light and cathode material work function; increasing light intensity increases the saturation current but does NOT alter stopping voltage.",
                "teacherTipAr": "جهد الإيقاف يعتمد فقط على تردد الضوء الساقط ونوع مادة المهبط؛ وزيادة شدة الضوء تزيد تيار التشبع ولا تؤثر إطلاقاً على قيمة جهد الإيقاف."
              },
              {
                "id": "th_phys_ws_p5_3",
                "titleEn": "Compton Scattering Conservation Principles",
                "titleAr": "قوانين البقاء في ظاهرة كومتون وخصائص الفوتون المتشتت",
                "difficulty": "medium",
                "questionEn": "In a Compton scattering experiment, an X-ray photon collides with a stationary free electron. Which of the following correctly describes the properties of the scattered photon compared to the incident photon?",
                "questionAr": "في ظاهرة كومتون، اصطدم فوتون من أشعة إكس بإلكترون حر ساكن. أي من الخيارات التالية يصف بدقة التغير في خصائص الفوتون المتشتت مقارنة بالفوتون الساقط؟",
                "optionsEn": [
                  "Longer wavelength, lower frequency, and unchanged speed $c$",
                  "Shorter wavelength, higher frequency, and lower speed",
                  "Longer wavelength, lower frequency, and lower speed",
                  "Unchanged wavelength, unchanged frequency, and lower speed"
                ],
                "optionsAr": [
                  "طول موجي أكبر، تردد أقل، وسرعة ثابتة $c$",
                  "طول موجي أقل، تردد أكبر، وسرعة أقل",
                  "طول موجي أكبر، تردد أقل، وسرعة أقل",
                  "طول موجي ثابت، تردد ثابت، وسرعة أقل"
                ],
                "correctAnswer": "Longer wavelength, lower frequency, and unchanged speed $c$",
                "correctIndex": 0,
                "hintEn": "The photon transfers part of its energy to the electron. Since $E = h\\nu = hc/\\lambda$, lower energy means lower frequency and longer wavelength. The speed of any electromagnetic wave in vacuum is always $c$.",
                "hintAr": "يفقد الفوتون جزءاً من طاقته لصالح الإلكترون. وبما أن $E = h\\nu = hc/\\lambda$، فإن نقص الطاقة يعني نقص التردد وزيادة الطول الموجي مع ثبوت سرعة الضوء $c$ في الفراغ.",
                "stepByStepSolutionEn": [
                  "By conservation of relativistic energy: $E_{\\text{photon}} + m_e c^2 = E'_{\\text{photon}} + E_{\\text{electron}}$.",
                  "The electron gains kinetic energy, so the scattered photon loses energy: $E' < E$.",
                  "Because $E = h\\nu$, the frequency decreases: $\\nu' < \\nu$.",
                  "Because $\\lambda = \\frac{c}{\\nu}$, the wavelength increases: $\\lambda' > \\lambda$ (Compton wavelength shift $\\Delta\\lambda > 0$).",
                  "Being an electromagnetic photon traveling in vacuum, its speed remains strictly constant at $c = 3.0 \\times 10^8\\text{ m/s}$."
                ],
                "stepByStepSolutionAr": [
                  "وفقاً لقانون بقاء الطاقة: طاقة الفوتون الساقط + طاقة سكون الإلكترون = طاقة الفوتون المتشتت + الطاقة الكلية للإلكترون.",
                  "يكتسب الإلكترون طاقة حركة، وبالتالي تقل طاقة الفوتون المتشتت: $E' < E$.",
                  "بما أن الطاقة طردية مع التردد: يقل تردد الفوتون المتشتت ($\\nu' < \\nu$).",
                  "بما أن التردد عكسي مع الطول الموجي: يزداد الطول الموجي للفوتون المتشتت ($\\lambda' > \\lambda$).",
                  "سرعة الفوتون في الفراغ تظل ثابتة دائماً وتساوي سرعة الضوء $c = 3 \\times 10^8\\text{ م/ث}$."
                ],
                "teacherTipEn": "Compton scattering provides definitive experimental proof of the particle nature of light and the validity of momentum conservation for electromagnetic radiation ($p = h/\\lambda$).",
                "teacherTipAr": "ظاهرة كومتون أثبتت بما لا يدع مجالاً للشك الصفة الجسيمية للإشعاع الكهرومغناطيسي وخضوعه لقانوني بقاء الطاقة وبقاء كمية التحرك الخطي."
              }
            ]
          },
          "interactiveWidget": {
            "type": "physics_photoelectric",
            "titleEn": "Photoelectric Effect & Stopping Voltage Simulator",
            "titleAr": "محاكي التأثير الكهروضوئي وجهد الإيقاف",
            "descriptionEn": "Interactive photocell simulation testing work functions, photon energy wavelengths, and stopping potentials.",
            "descriptionAr": "محاكاة تفاعلية للخلية الكهروضوئية لاختبار دالة الشغل وتأثير تردد وشدة الضوء وحساب جهد الإيقاف."
          }
        },
      ],
      solvedExamples: [
        {
          id: 'th_phys_se_05',
          titleEn: 'MoE Example 5: Series RLC Circuit Resonant Frequency & Impedance',
          titleAr: 'مثال الوزارة ٥: تردد الرنين والمعاوقة لدائرة تيار متردد RLC',
          difficulty: 'medium',
          diagramType: 'phys_rlc_resonance_phasor',
          questionEn: 'An AC series circuit contains a resistor $R = 25\\,\\Omega$, an inductor of inductance $L = \\frac{1}{\\pi}\\text{ H}$, and a capacitor of capacitance $C = \\frac{25}{\\pi}\\,\\mu\\text{F}$. Find the resonant frequency $f_0$ of the circuit and its impedance $Z$ at resonance.',
          questionAr: 'دائرة تيار متردد متوالية تتكون من مقاومة أومية $R = 25\\,\\Omega$ وملف حث معامل حثه الذاتي $L = \\frac{1}{\\pi}\\text{ H}$ ومكثف سعته $C = \\frac{25}{\\pi}\\,\\mu\\text{F}$. احسب تردد الرنين $f_0$ للدائرة ومعاوقتها $Z$ عند حالة الرنين.',
          optionsEn: ['$f_0 = 100\\text{ Hz},\\, Z = 25\\,\\Omega$', '$f_0 = 50\\text{ Hz},\\, Z = 50\\,\\Omega$', '$f_0 = 200\\text{ Hz},\\, Z = 25\\,\\Omega$', '$f_0 = 100\\text{ Hz},\\, Z = 0\\,\\Omega$'],
          optionsAr: ['$f_0 = 100\\text{ Hz},\\, Z = 25\\,\\Omega$', '$f_0 = 50\\text{ Hz},\\, Z = 50\\,\\Omega$', '$f_0 = 200\\text{ Hz},\\, Z = 25\\,\\Omega$', '$f_0 = 100\\text{ Hz},\\, Z = 0\\,\\Omega$'],
          correctAnswer: '$f_0 = 100\\text{ Hz},\\, Z = 25\\,\\Omega$',
          correctIndex: 0,
          hintEn: 'Use resonance formula: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. At resonance, $X_L = X_C$, so $Z = R$.',
          hintAr: 'طبق قانون تردد الرنين: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. وعند الرنين $X_L = X_C$ فتكون المعاوقة $Z = R$.',
          stepByStepSolutionEn: [
            'Product $LC = \\left(\\frac{1}{\\pi}\\right) \\times \\left(\\frac{25 \\times 10^{-6}}{\\pi}\\right) = \\frac{25 \\times 10^{-6}}{\\pi^2}$.',
            'Square root: $\\sqrt{LC} = \\frac{5 \\times 10^{-3}}{\\pi}$.',
            'Resonant frequency: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}} = \\frac{1}{2\\pi \\times \\frac{5 \\times 10^{-3}}{\\pi}} = \\frac{1}{10 \\times 10^{-3}} = 100\\text{ Hz}$.',
            'At resonance, inductive and capacitive reactances cancel exactly ($X_L = X_C$), so total impedance is minimum: $Z = R = 25\\,\\Omega$.'
          ],
          stepByStepSolutionAr: [
            'حاصل ضرب $LC = \\frac{1}{\\pi} \\times \\frac{25 \\times 10^{-6}}{\\pi} = \\frac{25 \\times 10^{-6}}{\\pi^2}$.',
            'الجذر التربيعي: $\\sqrt{LC} = \\frac{5 \\times 10^{-3}}{\\pi}$.',
            'تردد الرنين: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}} = \\frac{1}{2\\pi \\times \\frac{5 \\times 10^{-3}}{\\pi}} = \\frac{1}{10 \\times 10^{-3}} = 100\\text{ هرتز}$.',
            'عند الرنين تتساوى المفاعلة الحثية مع السعوية ($X_L = X_C$)، وتصل المعاوقة لأقل قيمة ممكنة وتساوي المقاومة الأومية: $Z = R = 25\\,\\Omega$.'
          ],
          teacherTipEn: 'At resonance, current is in phase with voltage (phase angle phi = 0), and power factor is unity (cos phi = 1).',
          teacherTipAr: 'في حالة الرنين يتفق الجهد الكلي مع التيار في الطور (زاوية الطور صفر) ومعامل القدرة يساوي الواحد الصحيح.'
        }
      ],
      exerciseProblems: [
        {
          id: 'th_phys_ex_05',
          titleEn: 'Exercise 5: Hydrogen Balmer Series First Spectral Line',
          titleAr: 'تمرين ٥: الطول الموجي لخط بالمر الأول (H-alpha) في طيف الهيدروجين',
          difficulty: 'medium',
          diagramType: 'phys_bohr_atom_series',
          questionEn: 'In the hydrogen atom spectrum, the first line of the Balmer series ($H_\\alpha$) results from an electron transition from level $n = 3$ ($E_3 = -1.51\\text{ eV}$) to level $n = 2$ ($E_2 = -3.40\\text{ eV}$). What is the wavelength of this visible spectral line?',
          questionAr: 'في طيف ذرة الهيدروجين، ينتج الخط الأول لمتسلسلة بالمر ($H_\\alpha$) عن انتقال إلكترون من المستوى الثالث ($E_3 = -1.51\\text{ eV}$) إلى المستوى الثاني ($E_2 = -3.40\\text{ eV}$). احسب الطول الموجي لهذا الخط الطيفي المرئي.',
          optionsEn: ['$656.3\\text{ nm}$ (red)', '$486.1\\text{ nm}$ (cyan)', '$121.6\\text{ nm}$ (ultraviolet)', '$434.0\\text{ nm}$ (blue)'],
          optionsAr: ['$656.3\\text{ nm}$ (أحمر)', '$486.1\\text{ nm}$ (أزرق مخضر)', '$121.6\\text{ nm}$ (فوق بنفسجي)', '$434.0\\text{ nm}$ (نيلي)'],
          correctAnswer: '$656.3\\text{ nm}$ (red)',
          correctIndex: 0,
          hintEn: 'Calculate energy difference $\\Delta E = E_3 - E_2 = 1.89\\text{ eV}$, then $\\lambda = \\frac{hc}{\\Delta E}$.',
          hintAr: 'احسب فرق الطاقة $\\Delta E = E_3 - E_2 = 1.89\\text{ eV}$ ثم طبق $\\lambda = \\frac{hc}{\\Delta E}$.',
          stepByStepSolutionEn: [
            'Transition energy: $\\Delta E = E_3 - E_2 = -1.51\\text{ eV} - (-3.40\\text{ eV}) = 1.89\\text{ eV}$.',
            'Convert to Joules: $\\Delta E = 1.89 \\times 1.602 \\times 10^{-19}\\text{ J} = 3.028 \\times 10^{-19}\\text{ J}$.',
            'Wavelength: $\\lambda = \\frac{hc}{\\Delta E} = \\frac{(6.626 \\times 10^{-34})(3.0 \\times 10^8)}{3.028 \\times 10^{-19}} = \\frac{1.988 \\times 10^{-25}}{3.028 \\times 10^{-19}} \\approx 6.565 \\times 10^{-7}\\text{ m} = 656.5\\text{ nm}$ (visible red $H_\\alpha$).'
          ],
          stepByStepSolutionAr: [
            'فرق الطاقة: $\\Delta E = -1.51 - (-3.40) = 1.89\\text{ إلكترون فولت}$.',
            'التحويل إلى جول: $\\Delta E = 1.89 \\times 1.602 \\times 10^{-19} = 3.028 \\times 10^{-19}\\text{ جول}$.',
            'الطول الموجي: $\\lambda = \\frac{hc}{\\Delta E} = \\frac{1.988 \\times 10^{-25}}{3.028 \\times 10^{-19}} \\approx 656.3\\text{ نانومتر}$ (ضوء أحمر مرئي $H_\\alpha$).'
          ],
          teacherTipEn: 'The H-alpha line at 656.3 nm is the prominent red glow seen in hydrogen discharge tubes and emission nebulae.',
          teacherTipAr: 'خط H-alpha بطول موجي 656.3 نانومتر يمنح أنبوبة تفريغ الهيدروجين وسديم الفضاء وهجها الأحمر المميز.'
        }
      ]
    },
    {
      id: 'th_phys_ch6',
      chapterNumber: 6,
      titleEn: 'Modern Physics: Atomic Spectra, Lasers & Electronics',
      titleAr: 'الفيزياء الحديثة: الأطياف الذرية، الليزر والإلكترونيات الحديثة',
      descriptionEn: 'Bohr hydrogen atom postulates and spectral series (Lyman, Balmer, Paschen); X-ray generation, continuous Bremsstrahlung, and characteristic line spectra; laser production principles, population inversion, optical pumping, and He-Ne lasers; and semiconductor physics, p-n junctions, transistors, and digital logic gates.',
      descriptionAr: 'نموذج بور لذرة الهيدروجين ومتسلسلات الطيف (ليمان، بالمر، باشن)، الأشعة السينية (أشعة إكس) وطيفها المستمر والخطي، نظرية إنتاج الليزر والإسكان المعكوس وليزر الهيليوم-نيون، وفيزياء أشباه الموصلات والوصلة الثنائية والترانزستور والبوابات المنطقية.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "th_phys_l6",
          "titleEn": "Atomic Spectra, Lasers & Solid-State Electronics",
          "titleAr": "الأطياف الذرية، الليزر والإلكترونيات الحديثة وأشباه الموصلات",
          "summaryEn": "Bohr hydrogen atom model, spectral series (Lyman to Pfund), X-ray continuous vs characteristic spectra, Laser principles (population inversion, optical pumping, stimulated emission, Helium-Neon laser), semiconductors, p-n diodes, and logic gates.",
          "summaryAr": "نموذج بور لذرة الهيدروجين، المتسلسلات الطيفية (ليمان وبالمار وباشن وبراكت وفوند)، الأشعة السينية، شروط الليزر الأربعة، ليزر الهيليوم-نيون، أشباه الموصلات، الوصلة الثنائية، والبوابات المنطقية.",
          "theoryContentEn": "### 1. Bohr's Atomic Model and Hydrogen Spectra\n- **Bohr Postulates (1913):**\n  - Electrons revolve in discrete non-radiating orbits where angular momentum is quantized:\n    $m v r = n \\frac{h}{2\\pi}$\n  - Energy of level $n$ in hydrogen atom:\n    $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$\n- **Hydrogen Spectral Series (Photon emission $\\Delta E = E_{\\text{upper}} - E_{\\text{lower}} = h\\nu$):**\n  1. **Lyman Series ($n \\to 1$):** Ultraviolet region (highest energy, shortest wavelength).\n  2. **Balmer Series ($n \\to 2$):** Visible light region (only visible series).\n  3. **Paschen Series ($n \\to 3$):** Infrared region.\n  4. **Brackett Series ($n \\to 4$):** Far infrared region.\n  5. **Pfund Series ($n \\to 5$):** Extreme far infrared region.\n\n### 2. X-Rays (Coolidge Tube)\n- High-energy electromagnetic radiation ($\\lambda \\approx 10^{-13} - 10^{-8}\\text{ m}$) generated in a Coolidge tube:\n  1. **Continuous Spectrum (Bremsstrahlung / Braking Radiation):** High-speed electrons decelerate near target heavy nuclei. Minimum wavelength:\n     $\\lambda_{\\min} = \\frac{hc}{e V}$\n     (depends strictly on accelerating voltage $V$).\n  2. **Characteristic Spectrum (Line Spectrum):** Projectile electron knocks out an inner shell electron ($K$ or $L$), and an electron from a higher shell drops down. Wavelength depends strictly on target element atomic number $Z$ (Moseley's law).\n\n### 3. Laser Physics (Light Amplification by Stimulated Emission of Radiation)\n- **Four Cardinal Laser Conditions:**\n  1. **Optical Pumping:** Excitation energy source (electrical discharge, optical flash).\n  2. **Metastable State:** Energy level with prolonged lifetime ($\\approx 10^{-3}\\text{ s}$ compared to $10^{-8}\\text{ s}$).\n  3. **Population Inversion (الانعكاس الإسكاني):** Number of excited atoms in metastable state exceeds those in the ground state.\n  4. **Resonant Optical Cavity:** Pair of parallel mirrors (one 100% reflective, one 98% partially reflective) providing optical feedback and amplification.\n- **Helium-Neon Laser:** Helium atoms excited by discharge collide inelastically with Neon atoms, pumping Neon to its metastable state ($20.66\\text{ eV} \\approx 20.61\\text{ eV}$), emitting coherent red laser light ($\\lambda = 632.8\\text{ nm}$).\n\n### 4. Modern Solid-State Electronics\n- **Semiconductors (Silicon / Germanium):**\n  - Pure crystal: Electrical conduction by thermal electron-hole pairs.\n  - Doped crystals: n-type (pentavalent donor e.g. Phosphorus) and p-type (trivalent acceptor e.g. Boron).\n- **p-n Junction Diode:** Forward bias conducts ($V > V_{\\text{barrier}}$); reverse bias blocks current. Used in rectification.\n- **Logic Gates:** NOT, AND, OR gates performing binary digital boolean algebra operations.",
          "theoryContentAr": "### ١. نموذج بور والأطياف الذرية للهيدروجين\n- **فروض نموذج بور:**\n  - تدور الإلكترونات في مستويات طاقة محددة دون إشعاع طاقة، وكمية التحرك الزاوي مكممة:\n    $m v r = n \\frac{h}{2\\pi}$\n  - طاقة المستوى $n$ في ذرة الهيدروجين:\n    $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$\n- **متسلسلات طيف ذرة الهيدروجين:**\n  ١. **ليمان ($n \\to 1$):** في منطقة الأشعة فوق البنفسجية (أعلى طاقة وتردد).\n  ٢. **بالمار ($n \\to 2$):** في منطقة الضوء المرئي (المتسلسلة المرئية الوحيدة).\n  ٣. **باشن ($n \\to 3$):** في منطقة الأشعة تحت الحمراء.\n  ٤. **براكت ($n \\to 4$):** في الأشعة تحت الحمراء البعيدة.\n  ٥. **فوند ($n \\to 5$):** في أقصى الأشعة تحت الحمراء.\n\n### ٢. الأشعة السينية (أنبوبة كوليدج)\n- **الطيف المستمر (أشعة الكابح أو الفرملة):** ينتج عن تباطؤ الإلكترونات السريعة عند اقترابها من ذرات مادة الهدف.\n  $\\lambda_{\\min} = \\frac{hc}{eV}$\n  يتوقف حصراً على فرق الجهد المطبق $V$.\n- **الطيف الخطي المميز:** ينتج عند اصطدام إلكترون سريع بإلكترون في المستويات الداخلية لمادة الهدف وإخراجه، ثم هبوط إلكترون من مستوى أعلى ليحل محله. يتوقف على العدد الذري لمادة الهدف.\n\n### ٣. فيزياء الليزر وشروطه الأربعة\n- **شروط إنتاج الليزر:**\n  ١. مصدر إثارة خارجي (الضخ الضوئي أو الكهربي).\n  ٢. وجود مستوى شبه مستقر ذي فترة عمر طويلة نسبياً (نحو $10^{-3}\\text{ s}$).\n  ٣. **الانعكاس الإسكاني:** وصول نسبة الذرات المثارة في المستوى شبه المستقر لتفوق عدد الذرات في المستوى الأدنى.\n  ٤. **التجويف الرنيني:** مرآتان متوازيتان (واحدة عاكسة تماماً والأخرى شبه منفذة بنسبة ٩٨٪) لتكبير وتضخيم الإشعاع بالانبعاث المستحث.\n- **ليزر الهيليوم-نيون:** ينبعث ضوء أحمر نقي بطول موجي $632.8\\text{ nm}$.\n\n### ٤. الإلكترونيات الحديثة وأشباه الموصلات\n- **البلورة شبه الموصلة من النوع n والنوع p:** التوصيل بواسطة الإلكترونات الحرة والفجوات الموجبة.\n- **الوصلة الثنائية (p-n Diode):** تسمح بمرور التيار في التوصيل الأمامي وتمنعه في التوصيل العكسي؛ تستخدم في تقويم التيار المتردد.\n- **البوابات المنطقية (Logic Gates):** بوابات NOT و AND و OR في الدوائر الرقمية.",
          "formulas": [
            {
              "labelEn": "Bohr Hydrogen Energy Levels",
              "labelAr": "طاقة مستويات ذرة الهيدروجين",
              "latex": "E_n = -\\frac{13.6}{n^2}\\,\\text{eV}"
            },
            {
              "labelEn": "Minimum X-ray Wavelength (Coolidge Tube)",
              "labelAr": "أقصر طول موجي للأشعة السينية",
              "latex": "\\lambda_{\\min} = \\frac{hc}{eV}"
            },
            {
              "labelEn": "Helium-Neon Laser Wavelength",
              "labelAr": "الطول الموجي لليزر الهيليوم-نيون",
              "latex": "\\lambda = 632.8\\,\\text{nm}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Physics Textbook Grade 12",
            "bookTitleAr": "كتاب الفيزياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-PHYS-CH6-L1",
            "pageRange": "pp. 249 - 288"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Hydrogen Spectra, X-Rays, Lasers & Logic Gates",
            "titleAr": "خطة درس: الأطياف الذرية والأشعة السينية والليزر والمنطق الرقمي",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-PHYS-CH6-L1",
            "bloomsObjectivesEn": [
              "Calculate photon energy and wavelength for transitions within the 5 hydrogen spectral series.",
              "Differentiate between continuous Bremsstrahlung and characteristic X-ray line spectra on spectra plots.",
              "Explain the mechanism of population inversion and stimulated emission in the He-Ne laser."
            ],
            "bloomsObjectivesAr": [
              "حساب طاقة وطول موجة الفوتونات المنبعثة في متسلسلات ذرة الهيدروجين الخمسة.",
              "التمييز بين الطيف المستمر والطيف الخطي المميز في منحنيات الأشعة السينية.",
              "شرح آلية حدوث الانعكاس الإسكاني والانبعاث المستحث في ليزر الهيليوم-نيون."
            ],
            "prerequisitesEn": [
              "Atomic structure",
              "Electromagnetic spectrum",
              "Photons"
            ],
            "prerequisitesAr": [
              "التركيب الذري",
              "الطيف الكهرومغناطيسي",
              "الفوتونات"
            ],
            "keyVocabularyEn": [
              {
                "term": "Population Inversion",
                "definition": "The non-equilibrium condition where the number of atoms in an excited metastable state exceeds the number in ground states."
              },
              {
                "term": "Stimulated Emission",
                "definition": "The process whereby an incident photon triggers an excited atom to drop to a lower state, emitting an identical twin photon."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "الانعكاس الإسكاني",
                "definition": "حالة تكون فيها نسبة الذرات في مستويات الإثارة شبه المستقرة أكبر من نسبتها في المستويات الأدنى."
              },
              {
                "term": "الانبعاث المستحث",
                "definition": "انبعاث فوتون من ذرة مثارة نتيجة تصادمها بفوتون طاقته مساوية لطاقة الإثارة قبل انقضاء فترة العمر."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Bohr Model & Hydrogen Series",
                "phaseAr": "نموذج بور ومتسلسلات الهيدروجين",
                "duration": "30 mins",
                "activitiesEn": "Calculating transitions to Lyman, Balmer, and Paschen levels.",
                "activitiesAr": "حساب أطوال موجات خطوط طيف الهيدروجين."
              },
              {
                "phaseEn": "Coolidge Tube X-Ray Spectra",
                "phaseAr": "طيف أنبوبة كوليدج للأشعة السينية",
                "duration": "30 mins",
                "activitiesEn": "Analyzing how accelerating voltage V and target atomic number Z shift spectra.",
                "activitiesAr": "تحليل أثر زيادة فرق الجهد واستبدال مادة الهدف."
              },
              {
                "phaseEn": "Laser Principles & Logic Gates",
                "phaseAr": "أسس الليزر والبوابات المنطقية",
                "duration": "30 mins",
                "activitiesEn": "Interactive simulation of He-Ne resonant cavity amplification and truth tables.",
                "activitiesAr": "محاكاة التجويف الرنيني لليزر وجداول التحقيق للبوابات."
              }
            ],
            "commonMisconceptionsEn": [
              "Assuming Balmer series lines are in the ultraviolet (Balmer series is visible light; Lyman is ultraviolet).",
              "Thinking characteristic X-ray wavelength changes when accelerating voltage is increased (characteristic spectrum depends strictly on target atomic number)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن متسلسلة بالمار في الأشعة فوق البنفسجية (بالمار تقع حصراً في منطقة الضوء المرئي).",
              "الظن بأن الطول الموجي للطيف الخطي للأشعة السينية يتغير بتغير فرق الجهد (يتغير فقط بنوع مادة الهدف وعدده الذري)."
            ],
            "differentiationEn": {
              "struggling": "Use ladder rung analogies for discrete Bohr energy levels.",
              "advanced": "Calculate the minimum accelerating voltage required to excite the K-alpha line of a Tungsten target."
            },
            "differentiationAr": {
              "struggling": "تمثيل مستويات طاقة بور بدرجات السلم التي لا يمكن الوقوف بينها.",
              "advanced": "حساب أقل فرق جهد يلزم لتوليد الخط الطيفي K-alpha لمادة تنجستين."
            },
            "formativeAssessmentEn": "Why is Helium gas mixed with Neon gas in a 10:1 ratio in the He-Ne laser tube?",
            "formativeAssessmentAr": "علل: يخلط غاز الهيليوم بغاز النيون بنسبة ١٠ إلى ١ في أنبوبة ليزر الهيليوم-نيون؟",
            "exitTicketQuestion": {
              "questionEn": "What is the shortest wavelength in the Balmer series of the hydrogen atom spectrum? ($E_1 = -13.6\\text{ eV}$)",
              "questionAr": "ما أقصر طول موجي في متسلسلة بالمار لطيف ذرة الهيدروجين؟",
              "solutionEn": "Transition from $n = \\infty$ to $n = 2$: $\\Delta E = 0 - (-13.6 / 4) = 3.4\\text{ eV} = 5.44 \\times 10^{-19}\\text{ J}$. $\\lambda = \\frac{hc}{\\Delta E} = \\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{5.44 \\times 10^{-19}} \\approx 365\\text{ nm}$.",
              "solutionAr": "الانتقال من المالانهاية إلى المستوى الثاني: $\\Delta E = ٣,٤\\text{ eV} = ٥,٤٤ \\times ١٠^{-١٩}\\text{ جول}$. الطول الموجي $\\lambda = \\frac{hc}{\\Delta E} \\approx ٣٦٥\\text{ نانومتر}$."
            }
          },
          "worksheet": {
            "id": "th_phys_ws_6",
            "titleEn": "Worksheet: Atomic Spectra, X-Rays & Laser Transitions",
            "titleAr": "ورقة عمل: أطياف الهيدروجين والأشعة السينية والليزر",
            "descriptionEn": "Rigorous problems on Bohr energy transitions, Bremsstrahlung X-ray cutoffs, and He-Ne laser kinetics.",
            "descriptionAr": "مسائل علمية دقيقة على انتقالات مستويات الطاقة وحساب أقصر طول موجي للأشعة السينية ومواصفات شعاع الليزر.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_phys_ws_p6_1",
                "titleEn": "Coolidge Tube Minimum X-Ray Wavelength Calculation",
                "titleAr": "حساب أقصر طول موجي للأشعة السينية في أنبوبة كوليدج",
                "difficulty": "medium",
                "diagramType": "phys_coolidge_xray_tube",
                "questionEn": "A Coolidge tube operates at an accelerating potential difference of 50,000 V (50 kV). What is the minimum wavelength of the continuous X-ray spectrum produced?",
                "questionAr": "تعمل أنبوبة كوليدج لتوليد الأشعة السينية بفرق جهد قدره ٥٠,٠٠٠ فولت (٥٠ كيلو فولت). احسب أقصر طول موجي للطيف المستمر للأشعة السينية الناتجة.",
                "optionsEn": [
                  "0.0248 nm",
                  "0.248 nm",
                  "0.0025 nm",
                  "2.48 nm"
                ],
                "optionsAr": [
                  "٠,٠٢٤٨ نانومتر",
                  "٠,٢٤٨ نانومتر",
                  "٠,٠٠٢٥ نانومتر",
                  "٢,٤٨ نانومتر"
                ],
                "correctAnswer": "0.0248 nm",
                "correctIndex": 0,
                "hintEn": "$\\lambda_{\\min} = \\frac{hc}{e V}$. Convert to nanometers ($1\\text{ nm} = 10^{-9}\\text{ m}$).",
                "hintAr": "طبق معادلة الطيف المستمر: $\\lambda_{\\min} = \\frac{hc}{eV}$. حول الناتج للنانومتر.",
                "stepByStepSolutionEn": [
                  "$\\lambda_{\\min} = \\frac{hc}{e V}$.",
                  "Numerator $hc = (6.626 \\times 10^{-34})(3.0 \\times 10^8) = 1.988 \\times 10^{-25}\\text{ J}\\cdot\\text{m}$.",
                  "Denominator $e V = (1.602 \\times 10^{-19})(50000) = 8.01 \\times 10^{-15}\\text{ J}$.",
                  "$\\lambda_{\\min} = \\frac{1.988 \\times 10^{-25}}{8.01 \\times 10^{-15}} \\approx 2.482 \\times 10^{-11}\\text{ m} = 0.0248\\text{ nm}$."
                ],
                "stepByStepSolutionAr": [
                  "أقصر طول موجي مستمر: $\\lambda_{\\min} = \\frac{hc}{eV}$.",
                  "البسط: $hc = (٦,٦٢٦ \\times ١٠^{-٣٤})(٣ \\times ١٠^٨) = ١,٩٨٨ \\times ١٠^{-٢٥}$.",
                  "المقام: $eV = (١,٦٠٢ \\times ١٠^{-١٩})(٥٠٠٠٠) = ٨,٠١ \\times ١٠^{-١٥}$.",
                  "$\\lambda_{\\min} = \\frac{١,٩٨٨ \\times ١٠^{-٢٥}}{٨,٠١ \\times ١٠^{-١٥}} \\approx ٠,٠٢٤٨\\text{ نانومتر}$."
                ],
                "teacherTipEn": "Remember that minimum wavelength depends solely on the potential difference V and is independent of target material.",
                "teacherTipAr": "أقصر طول موجي يعتمد حصراً على فرق الجهد المطبق بين الفتيلة والهدف ولا يتغير بنوع الهدف."
              },
              {
                "id": "th_phys_ws_p6_2",
                "titleEn": "Hydrogen Spectrum Balmer Series Transition Wavelength",
                "titleAr": "حساب الطول الموجي لخط طيفي في متسلسلة بالمار للهيدروجين",
                "difficulty": "medium",
                "diagramType": "phys_bohr_atom_series",
                "questionEn": "In a hydrogen atom, an excited electron drops from energy level $n = 4$ ($E_4 = -0.85\\text{ eV}$) to level $n = 2$ ($E_2 = -3.40\\text{ eV}$). What is the wavelength of the emitted spectral line? ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.0 \\times 10^8\\text{ m/s}$, $1\\text{ eV} = 1.602 \\times 10^{-19}\\text{ J}$)",
                "questionAr": "في ذرة هيدروجين مثارة، هبط إلكترون من مستوى الطاقة الرابع ($E_4 = -0.85\\text{ إلكترون فولت}$) إلى المستوى الثاني ($E_2 = -3.40\\text{ إلكترون فولت}$). احسب الطول الموجي للفوتون المنبعث من هذا الانتقال.",
                "optionsEn": [
                  "486.5 nm (visible blue-green)",
                  "656.3 nm (visible red)",
                  "434.1 nm (visible indigo)",
                  "121.6 nm (ultraviolet)"
                ],
                "optionsAr": [
                  "٤٨٦,٥ نانومتر (أزرق مخضر مرئي)",
                  "٦٥٦,٣ نانومتر (أحمر مرئي)",
                  "٤٣٤,١ نانومتر (نيلي مرئي)",
                  "١٢١,٦ نانومتر (فوق بنفسجي)"
                ],
                "correctAnswer": "486.5 nm (visible blue-green)",
                "correctIndex": 0,
                "hintEn": "Energy difference $\\Delta E = E_4 - E_2$. Convert $\\Delta E$ to Joules, then $\\lambda = \\frac{hc}{\\Delta E}$.",
                "hintAr": "فرق الطاقة $\\Delta E = E_4 - E_2$. حول الطاقة إلى جول ثم طبق $\\lambda = \\frac{hc}{\\Delta E}$.",
                "stepByStepSolutionEn": [
                  "Transition energy: $\\Delta E = E_4 - E_2 = -0.85\\text{ eV} - (-3.40\\text{ eV}) = 2.55\\text{ eV}$.",
                  "Convert to Joules: $\\Delta E = 2.55 \\times 1.602 \\times 10^{-19}\\text{ J} = 4.085 \\times 10^{-19}\\text{ J}$.",
                  "Wavelength of emitted photon: $\\lambda = \\frac{hc}{\\Delta E} = \\frac{(6.626 \\times 10^{-34})(3.0 \\times 10^8)}{4.085 \\times 10^{-19}} = \\frac{1.988 \\times 10^{-25}}{4.085 \\times 10^{-19}} \\approx 4.866 \\times 10^{-7}\\text{ m} = 486.6\\text{ nm}$.",
                  "This corresponds to the second line of the Balmer series ($H_\\beta$), situated in the visible blue-green spectral region."
                ],
                "stepByStepSolutionAr": [
                  "فرق الطاقة بين المستويين: $\\Delta E = E_4 - E_2 = -0.85 - (-3.40) = 2.55\\text{ إلكترون فولت}$.",
                  "التحويل إلى جول: $\\Delta E = 2.55 \\times 1.602 \\times 10^{-19} = 4.085 \\times 10^{-19}\\text{ جول}$.",
                  "حساب الطول الموجي: $\\lambda = \\frac{hc}{\\Delta E} = \\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{4.085 \\times 10^{-19}} \\approx 4.866 \\times 10^{-7}\\text{ م} = 486.6\\text{ نانومتر}$.",
                  "وهذا هو الخط الثاني في متسلسلة بالمار ($H_\\beta$) ويقع في نطاق الضوء المرئي الأزرق المخضر."
                ],
                "teacherTipEn": "All transitions terminating on level n = 2 form the Balmer series and produce spectral lines in the visible light spectrum.",
                "teacherTipAr": "جميع الانتقالات التي تهبط إلى المستوى الثاني (n = 2) تشكل متسلسلة بالمار وتقع خطوطها في نطاق الضوء المرئي."
              },
              {
                "id": "th_phys_ws_p6_3",
                "titleEn": "Transistor Common Emitter Amplification & Current Gain",
                "titleAr": "معامل تكبير التيار وثابت التوزيع للترانزستور في دائرة الباعث المشترك",
                "difficulty": "hots",
                "diagramType": "phys_pn_junction_transistor",
                "questionEn": "In an npn bipolar junction transistor connected in common-emitter configuration, the base current is $I_b = 50\\,\\mu\\text{A}$ and the collector current is $I_c = 4.95\\text{ mA}$. What are the current gain factor $\\beta_e$ and the current transfer ratio $\\alpha_e$?",
                "questionAr": "في ترانزستور npn متصل بطريقة الباعث المشترك، كانت شدة تيار القاعدة $I_b = 50\\,\\mu\\text{A}$ وشدة تيار المجمع $I_c = 4.95\\text{ mA}$. احسب كلاً من معامل تكبير التيار $\\beta_e$ وثابت التوزيع $\\alpha_e$.",
                "optionsEn": [
                  "$\\beta_e = 99,\\, \\alpha_e = 0.99$",
                  "$\\beta_e = 100,\\, \\alpha_e = 0.95$",
                  "$\\beta_e = 9.9,\\, \\alpha_e = 0.90$",
                  "$\\beta_e = 50,\\, \\alpha_e = 0.98$"
                ],
                "optionsAr": [
                  "$\\beta_e = 99,\\, \\alpha_e = 0.99$",
                  "$\\beta_e = 100,\\, \\alpha_e = 0.95$",
                  "$\\beta_e = 9.9,\\, \\alpha_e = 0.90$",
                  "$\\beta_e = 50,\\, \\alpha_e = 0.98$"
                ],
                "correctAnswer": "$\\beta_e = 99,\\, \\alpha_e = 0.99$",
                "correctIndex": 0,
                "hintEn": "Use definitions: $\\beta_e = \\frac{I_c}{I_b}$ and $\\alpha_e = \\frac{I_c}{I_e} = \\frac{\\beta_e}{1 + \\beta_e}$. Ensure units match ($1\\text{ mA} = 1000\\,\\mu\\text{A}$).",
                "hintAr": "طبق القوانين: $\\beta_e = \\frac{I_c}{I_b}$ و $\\alpha_e = \\frac{\\beta_e}{1 + \\beta_e}$ مع توحيد الوحدات ($1\\text{ mA} = 1000\\,\\mu\\text{A}$).",
                "stepByStepSolutionEn": [
                  "Match units: $I_c = 4.95\\text{ mA} = 4950\\,\\mu\\text{A}$, and $I_b = 50\\,\\mu\\text{A}$.",
                  "Current gain (amplification factor): $\\beta_e = \\frac{I_c}{I_b} = \\frac{4950}{50} = 99$.",
                  "Emitter current: $I_e = I_b + I_c = 50 + 4950 = 5000\\,\\mu\\text{A} = 5.0\\text{ mA}$.",
                  "Current transfer ratio (alpha): $\\alpha_e = \\frac{I_c}{I_e} = \\frac{4950}{5000} = 0.99$ (or $\\alpha_e = \\frac{\\beta_e}{1 + \\beta_e} = \\frac{99}{100} = 0.99$)."
                ],
                "stepByStepSolutionAr": [
                  "توحيد الوحدات: تيار المجمع $I_c = 4.95\\text{ mA} = 4950\\,\\mu\\text{A}$، وتيار القاعدة $I_b = 50\\,\\mu\\text{A}$.",
                  "معامل التكبير: $\\beta_e = \\frac{I_c}{I_b} = \\frac{4950}{50} = 99$.",
                  "تيار الباعث: $I_e = I_b + I_c = 50 + 4950 = 5000\\,\\mu\\text{A} = 5\\text{ mA}$.",
                  "ثابت التوزيع: $\\alpha_e = \\frac{I_c}{I_e} = \\frac{4950}{5000} = 0.99$ (أو $\\alpha_e = \\frac{\\beta_e}{1 + \\beta_e} = \\frac{99}{100} = 0.99$)."
                ],
                "teacherTipEn": "Alpha is always slightly less than 1 (typically 0.95 - 0.99) because a small fraction of charge carriers recombine in the thin base layer.",
                "teacherTipAr": "ثابت التوزيع دائماً أقل قليلاً من الواحد الصحيح (بين 0.95 و 0.99) لأن نسبة ضئيلة جداً من الشحنات تقتنصها القاعدة الرقيقة."
              }
            ]
          },
          "interactiveWidget": {
            "type": "physics_atomic_lasers",
            "titleEn": "Hydrogen Spectrum & Laser Resonator Simulator",
            "titleAr": "محاكي أطياف الهيدروجين والتجويف الرنيني لليزر",
            "descriptionEn": "Interactive Bohr level transition energy calculator and He-Ne laser optical pumping simulation.",
            "descriptionAr": "محاكاة تفاعلية لانتقالات مستويات طاقة بور وانبعاث خطوط الطيف والتجويف الرنيني لليزر."
          }
        }
      ],
      solvedExamples: [
        {
          id: 'th_phys_se_06',
          titleEn: 'MoE Example 6: Photoelectric Work Function & Stopping Voltage',
          titleAr: 'مثال الوزارة ٦: طاقة الحركة العظمى للإلكترونات وجهد الإيقاف',
          difficulty: 'medium',
          diagramType: 'phys_photoelectric_circuit',
          questionEn: 'Monochromatic light of frequency $\\nu = 8.0 \\times 10^{14}\\text{ Hz}$ falls on a metallic surface whose critical threshold frequency is $\\nu_c = 5.0 \\times 10^{14}\\text{ Hz}$. Given $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $e = 1.602 \\times 10^{-19}\\text{ C}$, calculate the maximum kinetic energy $KE_{\\max}$ of the emitted photoelectrons and the required stopping voltage $V_{\\text{stop}}$.',
          questionAr: 'سقط ضوء أحادي اللون تردده $\\nu = 8.0 \\times 10^{14}\\text{ Hz}$ على سطح فلز تردده الحرج $\\nu_c = 5.0 \\times 10^{14}\\text{ Hz}$. بمعلومية ثابت بلانك $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ وشحنة الإلكترون $e = 1.602 \\times 10^{-19}\\text{ C}$، احسب أقصى طاقة حركة للإلكترونات المنبعثة $KE_{\\max}$ وفرق جهد الإيقاف $V_{\\text{stop}}$.',
          optionsEn: ['$KE_{\\max} = 1.24\\text{ eV},\\, V_{\\text{stop}} = 1.24\\text{ V}$', '$KE_{\\max} = 3.31\\text{ eV},\\, V_{\\text{stop}} = 3.31\\text{ V}$', '$KE_{\\max} = 0.62\\text{ eV},\\, V_{\\text{stop}} = 0.62\\text{ V}$', '$KE_{\\max} = 2.48\\text{ eV},\\, V_{\\text{stop}} = 2.48\\text{ V}$'],
          optionsAr: ['$KE_{\\max} = 1.24\\text{ eV},\\, V_{\\text{stop}} = 1.24\\text{ V}$', '$KE_{\\max} = 3.31\\text{ eV},\\, V_{\\text{stop}} = 3.31\\text{ V}$', '$KE_{\\max} = 0.62\\text{ eV},\\, V_{\\text{stop}} = 0.62\\text{ V}$', '$KE_{\\max} = 2.48\\text{ eV},\\, V_{\\text{stop}} = 2.48\\text{ V}$'],
          correctAnswer: '$KE_{\\max} = 1.24\\text{ eV},\\, V_{\\text{stop}} = 1.24\\text{ V}$',
          correctIndex: 0,
          hintEn: 'Einstein equation: $KE_{\\max} = h(\\nu - \\nu_c)$. Convert Joules to electron-volts to get stopping voltage directly.',
          hintAr: 'معادلة أينشتاين: $KE_{\\max} = h(\\nu - \\nu_c)$. حول الناتج من جول لإلكترون فولت ليكون هو نفسه قيمة جهد الإيقاف بالفولت.',
          stepByStepSolutionEn: [
            'Maximum kinetic energy in Joules: $KE_{\\max} = h(\\nu - \\nu_c) = (6.626 \\times 10^{-34}) \\times (8.0 \\times 10^{14} - 5.0 \\times 10^{14}) = (6.626 \\times 10^{-34}) \\times (3.0 \\times 10^{14}) = 1.988 \\times 10^{-19}\\text{ J}$.',
            'Convert to electron-volts: $KE_{\\max} = \\frac{1.988 \\times 10^{-19}}{1.602 \\times 10^{-19}} \\approx 1.241\\text{ eV}$.',
            'Stopping potential: Since $KE_{\\max} = e V_{\\text{stop}}$, $V_{\\text{stop}} = 1.24\\text{ V}$.'
          ],
          stepByStepSolutionAr: [
            'طاقة الحركة العظمى بالجول: $KE_{\\max} = h(\\nu - \\nu_c) = (6.626 \\times 10^{-34}) \\times (3.0 \\times 10^{14}) = 1.988 \\times 10^{-19}\\text{ جول}$.',
            'التحويل لإلكترون فولت: $KE_{\\max} = \\frac{1.988 \\times 10^{-19}}{1.602 \\times 10^{-19}} = 1.24\\text{ إلكترون فولت}$.',
            'جهد الإيقاف: بما أن $KE_{\\max} = e V_{\\text{stop}}$، إذن $V_{\\text{stop}} = 1.24\\text{ فولت}$.'
          ],
          teacherTipEn: 'Stopping potential is numerically identical to KE_max expressed in electron-volts.',
          teacherTipAr: 'جهد الإيقاف بوحدة الفولت يساوي عددياً دائماً قيمة أقصى طاقة حركة معبراً عنها بوحدة الإلكترون فولت.'
        }
      ],
      exerciseProblems: [
        {
          id: 'th_phys_ex_06',
          titleEn: 'Exercise 6: Coolidge Tube Bremsstrahlung Wavelength Cutoff',
          titleAr: 'تمرين ٦: حساب أدنى طول موجي مستمر لأشعة إكس في أنبوبة كوليدج',
          difficulty: 'medium',
          diagramType: 'phys_coolidge_xray_tube',
          questionEn: 'A Coolidge X-ray tube operates at an accelerating potential of $V = 40\\text{ kV}$. What is the minimum cutoff wavelength of the continuous X-ray spectrum emitted?',
          questionAr: 'تعمل أنبوبة كوليدج للأشعة السينية عند فرق جهد معجل قدره $V = 40\\text{ kV}$. ما هو أدنى طول موجي مستمر لأشعة إكس المنبعثة؟',
          optionsEn: ['$0.031\\text{ nm}$', '$0.310\\text{ nm}$', '$0.015\\text{ nm}$', '$3.100\\text{ nm}$'],
          optionsAr: ['$0.031\\text{ nm}$', '$0.310\\text{ nm}$', '$0.015\\text{ nm}$', '$3.100\\text{ nm}$'],
          correctAnswer: '$0.031\\text{ nm}$',
          correctIndex: 0,
          hintEn: 'Apply Duane-Hunt law: $\\lambda_{\\min} = \\frac{hc}{eV}$.',
          hintAr: 'طبق قانون ديوان-هنت للطيف المستمر: $\\lambda_{\\min} = \\frac{hc}{eV}$.',
          stepByStepSolutionEn: [
            'Duane-Hunt cutoff relation: $\\lambda_{\\min} = \\frac{hc}{eV}$.',
            'Numerator $hc = 1.988 \\times 10^{-25}\\text{ J}\\cdot\\text{m}$.',
            'Denominator $eV = (1.602 \\times 10^{-19}\\text{ C})(40,000\\text{ V}) = 6.408 \\times 10^{-15}\\text{ J}$.',
            'Wavelength: $\\lambda_{\\min} = \\frac{1.988 \\times 10^{-25}}{6.408 \\times 10^{-15}} \\approx 3.102 \\times 10^{-11}\\text{ m} = 0.031\\text{ nm}$.'
          ],
          stepByStepSolutionAr: [
            'قانون ديوان-هنت لأقصر طول موجي: $\\lambda_{\\min} = \\frac{hc}{eV}$.',
            'حاصل ضرب $hc = 1.988 \\times 10^{-25}\\text{ جول}\\cdot\\text{متر}$.',
            'طاقة الإلكترون المعجل: $eV = 1.602 \\times 10^{-19} \\times 40,000 = 6.408 \\times 10^{-15}\\text{ جول}$.',
            'القسمة: $\\lambda_{\\min} = \\frac{1.988 \\times 10^{-25}}{6.408 \\times 10^{-15}} \\approx 0.031\\text{ نانومتر}$.'
          ],
          teacherTipEn: 'Notice that increasing the accelerating voltage shifts lambda_min toward shorter wavelengths and higher penetration powers.',
          teacherTipAr: 'زيادة فرق الجهد المعجل في أنبوبة كوليدج تزيح أدنى طول موجي نحو أطوال أقصر وترددات أعلى ذات قدرة نفاذ أكبر.'
        }
      ]
    }
  ]
};
