import type { Branch } from '../types/curriculum';
import { physCh1Databank } from './databanks/thanaweya/physCh1Databank';

export const thanaweyaPhysicsBranch: Branch = {
  id: 'thanaweya_physics',
  titleEn: 'Physics (Natural Sciences)',
  titleAr: 'الفيزياء (العلوم الطبيعية)',
  categoryEn: 'Natural Sciences',
  categoryAr: 'العلوم الطبيعية',
  iconName: 'Atom',
  colorGradient: 'from-blue-600 to-cyan-800',
  chapters: [
    {
      id: 'th_phys_ch1',
      chapterNumber: 1,
      titleEn: 'Electric Current, Ohm\'s Law & Kirchhoff\'s Laws',
      titleAr: 'التيار الكهربي وقانون أوم وقانونا كيرشوف',
      descriptionEn: 'Fundamentals of current intensity, potential difference, electric resistance, resistivity, series and parallel resistor combinations, electromotive force, Ohm\'s Law for closed circuits, and Kirchhoff\'s first and second circuit laws.',
      descriptionAr: 'أساسيات شدة التيار الكهربي، فرق الجهد، المقاومة الكهربية والمقاومة النوعية والتوصيلية الكهربية، توصيل المقاومات على التوالي والتوازي، قانون أوم للدوائر المغلقة، وقانونا كيرشوف الأول والثاني.',
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
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'Electric Circuit & Kirchhoff Simulation',
            titleAr: 'محاكاة الدوائر الكهربية وشبكات كيرشوف',
            descriptionEn: 'Interactive multiloop solver displaying node currents, loop electromotive forces, and branch voltage drops.',
            descriptionAr: 'أداة تفاعلية لحساب تيارات العقد وفروق الجهد ومحصلة القوى الدافعة في الدوائر المغلقة.'
          }
        }
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
        },
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
        },
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
      ],
      databank: physCh1Databank
    }
  ]
};
