import type { Branch } from '../types/curriculum';
import { chemCh1Databank } from './databanks/thanaweya/chemCh1Databank';

export const thanaweyaChemistryBranch: Branch = {
  id: 'thanaweya_chemistry',
  titleEn: 'Chemistry (Natural Sciences)',
  titleAr: 'الكيمياء (العلوم الطبيعية)',
  categoryEn: 'Natural Sciences',
  categoryAr: 'العلوم الطبيعية',
  iconName: 'FlaskConical',
  colorGradient: 'from-emerald-600 to-teal-800',
  chapters: [
    {
      id: 'th_chem_ch1',
      chapterNumber: 1,
      titleEn: 'First Transition Series & Iron Metallurgy',
      titleAr: 'العناصر الانتقالية الأولى وتعدين الحديد',
      descriptionEn: 'Electronic configuration of 3d elements, anomalous configurations of chromium and copper, oxidation states, magnetic moment and unpaired electrons, catalytic action, iron ores, blast furnace versus Midrex reduction, and chemistry of iron oxides.',
      descriptionAr: 'التوزيع الإلكتروني لعناصر السلسلة الانتقالية الأولى، شذوذ التوزيع في الكروم والنحاس، حالات التأكسد، الخاصية المغناطيسية والعزم المغناطيسي، النشاط الحفزي، خامات الحديد، أفران الاختزال (الفرن العالي ومدركس)، وتفاعلات أكاسيد الحديد.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_chem_l1',
          titleEn: 'Transition Metals & Chemical Metallurgy of Iron',
          titleAr: 'العناصر الانتقالية والخواص الكيميائية وتعدين الحديد',
          summaryEn: 'Analysis of $3d$ transition metals: $[\\text{Ar}]\\, 4s^2\\, 3d^n$, stability of half-filled and completely filled subshells, magnetic moment $\\mu = \\sqrt{n(n+2)}$, iron extraction in blast furnace and Midrex, and oxidation conversions among $\\text{Fe}$, $\\text{FeO}$, $\\text{Fe}_3\\text{O}_4$, and $\\text{Fe}_2\\text{O}_3$.',
          summaryAr: 'دراسة عناصر السلسلة الانتقالية الأولى $3d$: التوزيع العام $[\\text{Ar}] 4s^2 3d^n$، استقرار المستويات النصف ممتلئة والتامة، العزم المغناطيسي $\\mu = \\sqrt{n(n+2)}$، استخلاص الحديد في الفرن العالي ومدركس، والتحولات الكيميائية بين الحديد وأكاسيده.',
          theoryContentEn: `### 1. Definition and General Electronic Configuration
- **Transition Element:** An element having incompletely filled $d$ or $f$ subshells in either its elemental state or in any of its oxidation states.
- **First Transition Series ($3d$):** Ten elements from Scandium ($_{21}\\text{Sc}$) to Zinc ($_{30}\\text{Zn}$), located in Period 4.
- **General Configuration:** $[\\text{Ar}]_{18}\\, 4s^{1-2}\\, 3d^{1-10}$.
- **Anomalous Configurations (Stability Principle):**
  - Chromium ($_{24}\\text{Cr}$): $[\\text{Ar}]\\, 4s^1\\, 3d^5$ (half-filled $3d^5$ confers extra thermodynamic stability).
  - Copper ($_{29}\\text{Cu}$): $[\\text{Ar}]\\, 4s^1\\, 3d^{10}$ (completely filled $3d^{10}$ confers extra stability).

### 2. General Physical and Chemical Properties
- **Variable Oxidation States:** Electrons are lost first from the outermost $4s$ subshell, followed successively by electrons from the close-energy $3d$ subshell. Maximum oxidation state is $+7$ in Manganese ($_{25}\\text{Mn}: [\\text{Ar}]\\, 4s^2\\, 3d^5$).
- **Magnetic Properties:**
  - **Paramagnetism:** Attraction to an external magnetic field due to the presence of **unpaired electrons** in $3d$ orbitals.
  - **Diamagnetism:** Repulsion by an external magnetic field due to all orbital electrons being **paired**.
  - **Magnetic Moment ($\\mu$):** Quantified in Bohr Magnetons (B.M.):
    $$\\mu = \\sqrt{n(n+2)}$$
    where $n$ is the number of unpaired electrons ($1 \\le n \\le 5$).
- **Catalytic Activity:** Transition elements and their compounds act as excellent catalysts (e.g., finely divided $\\text{Fe}$ in Haber-Bosch synthesis of ammonia, and $\\text{V}_2\\text{O}_5$ in the contact process for sulfuric acid) because their $4s$ and $3d$ electrons can form temporary bonds with reactant molecules, lowering the activation energy.

### 3. Iron Metallurgy & Industrial Extraction
- **Major Iron Ores:**
  - Hematite: $\\text{Fe}_2\\text{O}_3$ (Red, easily reducible).
  - Magnetite: $\\text{Fe}_3\\text{O}_4$ (Black, magnetic).
  - Limonite: $2\\text{Fe}_2\\text{O}_3 \\cdot 3\\text{H}_2\\text{O}$ (Yellow).
  - Siderite: $\\text{FeCO}_3$ (Iron(II) carbonate).
- **Reduction in the Blast Furnace:**
  - Reducing agent: Carbon monoxide ($\\text{CO}$), generated from coke.
  - Primary reduction at $T > 700^\\circ\\text{C}$:
    $$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{> 700^\\circ\\text{C}} 2\\text{Fe} + 3\\text{CO}_2$$
- **Reduction in the Midrex Furnace:**
  - Reducing agent: Water gas (mixture of $\\text{CO} + \\text{H}_2$), produced from natural gas (methane):
    $$\\text{CH}_4 + \\text{CO}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{catalyst}} 3\\text{CO} + 5\\text{H}_2$$
    $$2\\text{Fe}_2\\text{O}_3 + 3\\text{CO} + 3\\text{H}_2 \\xrightarrow{\\Delta} 4\\text{Fe} + 3\\text{CO}_2 + 3\\text{H}_2\\text{O}$$

### 4. Iron Oxides Chemistry
1. **Iron(II) Oxide ($\\text{FeO}$):**
   - Prepared by thermal decomposition of iron(II) oxalate in absence of air:
     $$(\\text{COO})_2\\text{Fe} \\xrightarrow{\\Delta,\\, \\text{no air}} \\text{FeO} + \\text{CO} + \\text{CO}_2$$
2. **Magnetic Iron Oxide ($\\text{Fe}_3\\text{O}_4$):**
   - Prepared by heating iron with steam or oxygen at $500^\\circ\\text{C}$:
     $$3\\text{Fe} + 4\\text{H}_2\\text{O} \\xrightarrow{500^\\circ\\text{C}} \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2$$
3. **Iron(III) Oxide ($\\text{Fe}_2\\text{O}_3$):**
   - Prepared by heating iron(II) sulfate strongly:
     $$2\\text{FeSO}_4 \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3 + \\text{SO}_2 + \\text{SO}_3$$`,
          theoryContentAr: `### ١. تعريف السلسلة والتوزيع الإلكتروني العام
- **العنصر الانتقالي:** هو العنصر الذي تكون فيه أوربيتالات $d$ أو $f$ مشغولة بالإلكترونات ولكنها غير ممتلئة، سواء في الحالة الذرية أو في أي حالة من حالات تأكسده.
- **السلسلة الانتقالية الأولى ($3d$):** تشمل عشرة عناصر تبدأ بالسكانديوم ($_{21}\\text{Sc}$) وتنتهي بالخارصين ($_{30}\\text{Zn}$) وتقع في الدورة الرابعة.
- **التوزيع الإلكتروني العام:** $[\\text{Ar}]_{18}\\, 4s^{1-2}\\, 3d^{1-10}$.
- **شذوذ التوزيع الإلكتروني (مبدأ الاستقرار الذري):**
  - الكروم ($_{24}\\text{Cr}$): $[\\text{Ar}]\\, 4s^1\\, 3d^5$ (المستوى الفرعي $3d$ نصف ممتلئ، مما يعطي الذرة ثباتاً واستقراراً نسبياً).
  - النحاس ($_{29}\\text{Cu}$): $[\\text{Ar}]\\, 4s^1\\, 3d^{10}$ (المستوى الفرعي $3d$ تام الامتلاء، مما يمنح الذرة طاقة استقرار قصوى).

### ٢. الخواص العامة لعناصر السلسلة
- **تعدد حالات التأكسد:** تفقد الذرة إلكتروني المستوى الفرعي $4s$ أولاً الأبعد عن النواة، ثم يتتابع خروج إلكترونات $3d$ المتقارب معه في الطاقة. أقصى حالة تأكسد تصل إلى $+7$ في المنجنيز ($_{25}\\text{Mn}: [\\text{Ar}]\\, 4s^2\\, 3d^5$).
- **الخواص المغناطيسية:**
  - **المادة البارامغناطيسية:** تنجذب نحو المجال المغناطيسي الخارجي لوجود **إلكترونات مفردة** في أوربيتالات $3d$.
  - **المادة الدايامغناطيسية:** تتنافر مع المجال المغناطيسي الخارجي لازدواج جميع إلكترونات أوربيتالاتها.
  - **العزم المغناطيسي ($\\mu$):** يتناسب طردياً مع عدد الإلكترونات المفردة ($n$):
    $$\\mu = \\sqrt{n(n+2)}$$
- **النشاط الحفزي:** تعمل الفلزات الانتقالية ومركباتها كعوامل حفز مثالية (مثل الحديد المجزأ في تحضير النشادر بطريقة هابر-بوش، وخامس أكسيد الفانديوم $\\text{V}_2\\text{O}_5$ في تحضير حمض الكبريتيك بطريقة التلامس) لقدرة إلكترونات $4s$ و $3d$ على تكوين روابط مع المتفاعلات وإضعاف روابطها وخفض طاقة التنشيط.

### ٣. تعدين واستخلاص الحديد
- **خامات الحديد الرئيسية:**
  - الهيماتيت: $\\text{Fe}_2\\text{O}_3$ (أكسيد الحديد III - أحمر داكن وسهل الاختزال).
  - الماجنتيت: $\\text{Fe}_3\\text{O}_4$ (الأكسيد الأسود المغناطيسي).
  - الليمونيت: $2\\text{Fe}_2\\text{O}_3 \\cdot 3\\text{H}_2\\text{O}$ (أصفر).
  - السيدريت: $\\text{FeCO}_3$ (كربونات الحديد II).
- **الاختزال في الفرن العالي:**
  - العامل المختزل: أول أكسيد الكربون ($\\text{CO}$) الناتج من فحم الكوك.
  - معادلة الاختزال عند درجة حرارة أعلى من $700^\\circ\\text{C}$:
    $$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{> 700^\\circ\\text{C}} 2\\text{Fe} + 3\\text{CO}_2$$
- **الاختزال في فرن مدركس:**
  - العامل المختزل: الغاز المائي (خليط من $\\text{CO} + \\text{H}_2$) المستخلص من الغاز الطبيعي (الميثان):
    $$\\text{CH}_4 + \\text{CO}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{حافز}} 3\\text{CO} + 5\\text{H}_2$$
    $$2\\text{Fe}_2\\text{O}_3 + 3\\text{CO} + 3\\text{H}_2 \\xrightarrow{\\Delta} 4\\text{Fe} + 3\\text{CO}_2 + 3\\text{H}_2\\text{O}$$

### ٤. كيمياء أكاسيد الحديد
١. **أكسيد الحديد II ($\\text{FeO}$):**
   - يُحضر بالتسخين الشديد لأوكسالات الحديد II بمعزل عن الهواء:
     $$(\\text{COO})_2\\text{Fe} \\xrightarrow{\\Delta,\\, \\text{معزل عن الهواء}} \\text{FeO} + \\text{CO} + \\text{CO}_2$$
٢. **أكسيد الحديد المغناطيسي ($\\text{Fe}_3\\text{O}_4$):**
   - يُحضر بتسخين الحديد لدرجة الاحمرار ($500^\\circ\\text{C}$) مع الهواء أو بخار الماء:
     $$3\\text{Fe} + 4\\text{H}_2\\text{O} \\xrightarrow{500^\\circ\\text{C}} \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2$$
٣. **أكسيد الحديد III ($\\text{Fe}_2\\text{O}_3$):**
   - يُحضر بالتسخين الشديد لكبريتات الحديد II:
     $$2\\text{FeSO}_4 \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3 + \\text{SO}_2 + \\text{SO}_3$$`,
          formulas: [
            { labelEn: 'General Electron Configuration', labelAr: 'التوزيع الإلكتروني العام', latex: '[\\text{Ar}]_{18}\\, 4s^{1-2}\\, 3d^{1-10}' },
            { labelEn: 'Magnetic Moment Formula', labelAr: 'قانون العزم المغناطيسي', latex: '\\mu = \\sqrt{n(n+2)}\\,\\text{B.M.}' },
            { labelEn: 'Blast Furnace Reduction', labelAr: 'معادلة اختزال الفرن العالي', latex: '\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{> 700^\\circ\\text{C}} 2\\text{Fe} + 3\\text{CO}_2' },
            { labelEn: 'Midrex Furnace Reduction', labelAr: 'معادلة اختزال فرن مدركس', latex: '2\\text{Fe}_2\\text{O}_3 + 3\\text{CO} + 3\\text{H}_2 \\xrightarrow{\\Delta} 4\\text{Fe} + 3\\text{CO}_2 + 3\\text{H}_2\\text{O}' },
            { labelEn: 'Iron Oxalate Decomposition', labelAr: 'انحلال أوكسالات الحديد بمعزل عن الهواء', latex: '(\\text{COO})_2\\text{Fe} \\xrightarrow{\\Delta} \\text{FeO} + \\text{CO} + \\text{CO}_2' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Chemistry Textbook Grade 12',
            bookTitleAr: 'كتاب الكيمياء للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-CHEM-CH1-L1',
            pageRange: 'pp. 1 - 42'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: 3d Transition Electronic Structure & Chemical Extraction of Iron',
            titleAr: 'خطة درس: البنية الإلكترونية لعناصر السلسلة 3d والتعدين الكيميائي للحديد',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-CHEM-CH1-L1',
            bloomsObjectivesEn: [
              'Distinguish between paramagnetic and diamagnetic transition metal complexes using orbital diagrams.',
              'Evaluate the thermodynamic conditions governing reduction reactions in Blast and Midrex furnaces.',
              'Formulate balanced stoichiometric pathways to convert iron(II) sulfate into iron(III) chloride.'
            ],
            bloomsObjectivesAr: [
              'التمييز بين المواد البارامغناطيسية والدايامغناطيسية وحساب العزم المغناطيسي من عدد الإلكترونات المفردة.',
              'مقارنة الشروط الكيميائية والعوامل المختزلة في الفرن العالي وفرن مدركس.',
              'استنتاج وتطبيق المعادلات الكيميائية المتسلسلة لتحويل كبريتات الحديد II إلى كلوريد الحديد III.'
            ],
            prerequisitesEn: ['Aufbau principle', 'Hund\'s rule', 'Redox reactions'],
            prerequisitesAr: ['مبدأ البناء التصاعدي', 'قاعدة هوند', 'تفاعلات الأكسدة والاختزال'],
            keyVocabularyEn: [
              { term: 'Paramagnetism', definition: 'Substance attracted to an external magnetic field due to unpaired d-electrons.' },
              { term: 'Water Gas', definition: 'Reducing mixture of carbon monoxide and hydrogen used in the Midrex process.' }
            ],
            keyVocabularyAr: [
              { term: 'الخاصية البارامغناطيسية', definition: 'خاصية تظهر في المواد التي تحتوي أوربيتالاتها على إلكترونات مفردة فتنجذب للمجال المغناطيسي.' },
              { term: 'الغاز المائي', definition: 'خليط من أول أكسيد الكربون والهيدروجين يستخدم كعامل مختزل في فرن مدركس.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Electronic Configurations & Anomalies',
                phaseAr: 'التوزيع الإلكتروني والحالات الشاذة',
                duration: '25 mins',
                activitiesEn: 'Analyzing Cr and Cu subshell stability and drawing orbital box diagrams.',
                activitiesAr: 'رسم التوزيع الإلكتروني للكروم والنحاس ومناقشة طاقة الاستقرار للمستويات النصف ممتلئة.'
              },
              {
                phaseEn: 'Magnetic Moments & Catalysis',
                phaseAr: 'العزم المغناطيسي والنشاط الحفزي',
                duration: '30 mins',
                activitiesEn: 'Calculating magnetic moment values and analyzing catalytic energy profiles.',
                activitiesAr: 'حساب قيم العزم المغناطيسي ودراسة منحنيات طاقة التنشيط بوجود عامل حفاز.'
              },
              {
                phaseEn: 'Iron Metallurgy & Oxide Conversions',
                phaseAr: 'تعدين الحديد وتفاعلات الأكاسيد',
                duration: '35 mins',
                activitiesEn: 'Mapping transformation schemes connecting iron, FeO, Fe3O4, and Fe2O3.',
                activitiesAr: 'بناء مخطط تفاعلي شامل للتحويلات بين الحديد وأكاسيده الثلاثة.'
              }
            ],
            commonMisconceptionsEn: [
              'Thinking Zn is a typical transition metal despite having completely full 3d subshells in elemental and ionic states.',
              'Confusing roasting of iron ores with actual furnace reduction.'
            ],
            commonMisconceptionsAr: [
              'اعتبار الخارصين عنصراً انتقالياً رئيسياً رغم امتلاء المستوى الفرعي 3d تماماً في الحالة الذرية وأيون +2.',
              'الخلط بين مرحلة تحميص خامات الحديد للتجفيف والأكسدة وبين مرحلة الاختزال الفعلي في الأفران.'
            ],
            differentiationEn: {
              struggling: 'Use colorful orbital cards to visually pair up electrons in 3d subshells.',
              advanced: 'Calculate crystal field stabilization energy differences for high-spin versus low-spin Fe(II) and Fe(III).'
            },
            differentiationAr: {
              struggling: 'استخدام بطاقات ملونة للأوربيتالات الخمسة لتوضيح الإلكترونات المفردة والمزدوجة بقاعدة هوند.',
              advanced: 'تكليف الطلاب بمقارنة استقرار أيونات Fe+2 و Fe+3 وتفسير سهولة أكسدة الأول وصعوبة أكسدة الثاني.'
            },
            formativeAssessmentEn: 'Why is Fe^3+ more chemically stable and resistant to oxidation than Fe^2+?',
            formativeAssessmentAr: 'علل: أيون الحديد III أكثر استقراراً وصعوبة في الأكسدة من أيون الحديد II؟',
            exitTicketQuestion: {
              questionEn: 'Which of the following transition metal ions exhibits the highest magnetic moment: $\\text{Sc}^{3+}$, $\\text{Ti}^{3+}$, $\\text{Fe}^{3+}$, or $\\text{Zn}^{2+}$?',
              questionAr: 'أي من أيونات العناصر الانتقالية الآتية يمتلك أكبر عزم مغناطيسي: $\\text{Sc}^{3+}$، $\\text{Ti}^{3+}$، $\\text{Fe}^{3+}$، أم $\\text{Zn}^{2+}$؟',
              solutionEn: '$\\text{Fe}^{3+}$ has electronic configuration $[\\text{Ar}]\\, 3d^5$ with $5$ unpaired electrons, yielding the maximum possible magnetic moment $\\mu = \\sqrt{5(7)} \\approx 5.92\\,\\text{B.M.}$.',
              solutionAr: 'أيون $\\text{Fe}^{3+}$ توزيعه $[\\text{Ar}]\\, 3d^5$ ويحتوي على $5$ إلكترونات مفردة (نصف ممتلئ)، مما يعطيه أكبر عزم مغناطيسي ممكن $\\mu = \\sqrt{5(7)} \\approx 5.92\\,\\text{B.M.}$.'
            }
          },
          worksheet: {
            id: 'th_chem_ws_1',
            titleEn: 'Worksheet: First Transition Series Chemistry & Iron Metallurgy',
            titleAr: 'ورقة عمل: كيمياء السلسلة الانتقالية الأولى وتعدين الحديد',
            descriptionEn: 'Focused questions on magnetic properties, oxidation state transitions, blast furnace equations, and iron oxide reactions.',
            descriptionAr: 'تدريبات مخصصة للخواص المغناطيسية، حالات التأكسد، معادلات الفرن العالي ومدركس، وتفاعلات أكاسيد الحديد.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'th_chem_ws_p1',
                titleEn: 'Oxidation of Iron Oxides Scheme',
                titleAr: 'مخطط أكسدة واختزال أكاسيد الحديد',
                difficulty: 'medium',
                questionEn: 'Heating iron(II) oxalate in absence of air produces black oxide $X$. Heating $X$ in air produces red oxide $Y$. What are compounds $X$ and $Y$?',
                questionAr: 'عند تسخين أوكسالات الحديد II بمعزل عن الهواء ينتج الأكسيد الأسود $X$. وعند تسخين $X$ في الهواء يتكون الأكسيد الأحمر $Y$. ما المركبان $X$ و $Y$؟',
                optionsEn: ['$X = \\text{FeO},\\, Y = \\text{Fe}_2\\text{O}_3$', '$X = \\text{Fe}_3\\text{O}_4,\\, Y = \\text{FeO}$', '$X = \\text{Fe}_2\\text{O}_3,\\, Y = \\text{FeO}$', '$X = \\text{Fe},\\, Y = \\text{Fe}_3\\text{O}_4$'],
                optionsAr: ['$X = \\text{FeO},\\, Y = \\text{Fe}_2\\text{O}_3$', '$X = \\text{Fe}_3\\text{O}_4,\\, Y = \\text{FeO}$', '$X = \\text{Fe}_2\\text{O}_3,\\, Y = \\text{FeO}$', '$X = \\text{Fe},\\, Y = \\text{Fe}_3\\text{O}_4$'],
                correctAnswer: '$X = \\text{FeO},\\, Y = \\text{Fe}_2\\text{O}_3$',
                correctIndex: 0,
                hintEn: 'Decomposition of iron(II) oxalate in absence of air yields iron(II) oxide (FeO), which oxidizes in air to hematite (Fe2O3).',
                hintAr: 'انحلال أوكسالات الحديد بمعزل عن الهواء ينتج أكسيد الحديد II (FeO)، الذي يتأكسد في الهواء إلى الهيماتيت (Fe2O3).',
                stepByStepSolutionEn: [
                  'Step 1: $(\\text{COO})_2\\text{Fe} \\xrightarrow{\\Delta,\\, \\text{no air}} \\text{FeO} + \\text{CO} + \\text{CO}_2$. Hence $X = \\text{FeO}$.',
                  'Step 2: $4\\text{FeO} + \\text{O}_2 \\xrightarrow{\\Delta} 2\\text{Fe}_2\\text{O}_3$. Hence $Y = \\text{Fe}_2\\text{O}_3$ (hematite).'
                ],
                stepByStepSolutionAr: [
                  'الخطوة ١: $(\\text{COO})_2\\text{Fe} \\xrightarrow{\\Delta,\\, \\text{معزل عن الهواء}} \\text{FeO} + \\text{CO} + \\text{CO}_2$، إذن $X = \\text{FeO}$.',
                  'الخطوة ٢: $4\\text{FeO} + \\text{O}_2 \\xrightarrow{\\Delta} 2\\text{Fe}_2\\text{O}_3$، إذن $Y = \\text{Fe}_2\\text{O}_3$ (الهيماتيت الأحمر).'
                ],
                teacherTipEn: 'Carbon monoxide gas (CO) acts as a reducing agent, preventing the oxidation of FeO during the decomposition step in absence of air.',
                teacherTipAr: 'غاز أول أكسيد الكربون الناتج عامل مختزل يمنع أكسدة أكسيد الحديد II أثناء الانحلال بمعزل عن الهواء.'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'Transition Metal Orbital & Magnetism Lab',
            titleAr: 'مختبر أوربيتالات العناصر الانتقالية والمغناطيسية',
            descriptionEn: 'Interactive orbital visualizer displaying electron spins in 3d orbitals and calculating resulting magnetic moments.',
            descriptionAr: 'محاكاة تفاعلية لتوزيع إلكترونات أوربيتالات 3d وحساب العزم المغناطيسي وتحديد نوع الخاصية المغناطيسية.'
          }
        }
      ],
      solvedExamples: [
        {
          id: 'th_chem_se_01',
          titleEn: 'MoE Example 1: Calculating Unpaired Electrons & Paramagnetism',
          titleAr: 'مثال الوزارة ١: حساب عدد الإلكترونات المفردة ونوع الخاصية المغناطيسية',
          difficulty: 'easy',
          questionEn: 'Determine the number of unpaired electrons in the ion $\\text{Co}^{2+}$ (atomic number of $\\text{Co} = 27$) and specify whether the compound $\\text{CoCl}_2$ is paramagnetic or diamagnetic.',
          questionAr: 'احسب عدد الإلكترونات المفردة في أيون $\\text{Co}^{2+}$ (العدد الذري للكوبالت $= 27$)، وبيّن ما إذا كان مركب $\\text{CoCl}_2$ مادة بارامغناطيسية أم دايامغناطيسية.',
          optionsEn: ['3 unpaired electrons; Paramagnetic', '2 unpaired electrons; Diamagnetic', '1 unpaired electron; Paramagnetic', '0 unpaired electrons; Diamagnetic'],
          optionsAr: ['3 إلكترونات مفردة؛ مادة بارامغناطيسية', '2 إلكترون مفرد؛ مادة دايامغناطيسية', 'إلكترون مفرد واحد؛ مادة بارامغناطيسية', '0 إلكترونات مفردة؛ مادة دايامغناطيسية'],
          correctAnswer: '3 unpaired electrons; Paramagnetic',
          correctIndex: 0,
          hintEn: 'Neutral Cobalt is $[\\text{Ar}]\\, 4s^2\\, 3d^7$. To form $\\text{Co}^{2+}$, two electrons are removed from $4s$.',
          hintAr: 'الكوبالت المتعادل $[\\text{Ar}]\\, 4s^2\\, 3d^7$. عند تكوين الأيون $+2$ يفقد إلكتروني المستوى $4s$.',
          stepByStepSolutionEn: [
            'Atomic number $Z = 27$: Neutral cobalt is $[\\text{Ar}]_{18}\\, 4s^2\\, 3d^7$.',
            'In $\\text{CoCl}_2$, cobalt has oxidation state $+2$: $\\text{Co}^{2+} = [\\text{Ar}]_{18}\\, 3d^7$.',
            'By Hund\'s rule, the 5 d-orbitals accommodate 7 electrons as: 2 pairs and 3 single electrons ($n = 3$).',
            'Since there are unpaired electrons ($n = 3$), the compound is paramagnetic.'
          ],
          stepByStepSolutionAr: [
            'العدد الذري للكوبالت $Z = 27$: ذرة الكوبالت $[\\text{Ar}]_{18}\\, 4s^2\\, 3d^7$.',
            'في مركب $\\text{CoCl}_2$ حالة تأكسد الكوبالت $+2$: أيون $\\text{Co}^{2+} = [\\text{Ar}]_{18}\\, 3d^7$.',
            'بتطبيق قاعدة هوند، تشغل الإلكترونات الـ 7 خمسة أوربيتالات: زوجان و 3 إلكترونات مفردة ($n = 3$).',
            'نظراً لوجود 3 إلكترونات مفردة، يكون المركب مادة بارامغناطيسية وتنجذب للمجال المغناطيسي.'
          ],
          teacherTipEn: 'Electrons are always removed from the outermost $4s$ subshell before the $3d$ subshell.',
          teacherTipAr: 'تُفقد الإلكترونات دائماً من المستوى الفرعي الأبعد $4s$ أولاً ثم من المستوى الفرعي $3d$.'
        }
      ],
      exerciseProblems: [
        {
          id: 'th_chem_ex_01',
          titleEn: 'Exercise 1: Reducing Agent in Midrex Furnace',
          titleAr: 'تمرين ١: العامل المختزل في فرن مدركس',
          difficulty: 'easy',
          questionEn: 'What is the chemical composition of the reducing gas mixture utilized in the Midrex furnace for iron extraction?',
          questionAr: 'ما التركيب الكيميائي لخليط الغاز المختزل المستخدم في فرن مدركس لاستخلاص الحديد؟',
          optionsEn: ['Carbon monoxide and hydrogen $(\\text{CO} + \\text{H}_2)$', 'Carbon monoxide only $(\\text{CO})$', 'Methane and oxygen $(\\text{CH}_4 + \\text{O}_2)$', 'Hydrogen only $(\\text{H}_2)$'],
          optionsAr: ['أول أكسيد الكربون والهيدروجين $(\\text{CO} + \\text{H}_2)$', 'أول أكسيد الكربون فقط $(\\text{CO})$', 'الميثان والأكسجين $(\\text{CH}_4 + \\text{O}_2)$', 'الهيدروجين فقط $(\\text{H}_2)$'],
          correctAnswer: 'Carbon monoxide and hydrogen $(\\text{CO} + \\text{H}_2)$',
          correctIndex: 0,
          hintEn: 'The reducing agent in the Midrex process is water gas, derived from natural gas (methane).',
          hintAr: 'العامل المختزل في فرن مدركس هو الغاز المائي المحضر من الغاز الطبيعي (الميثان).',
          stepByStepSolutionEn: [
            'In the Blast Furnace, the reducing agent is carbon monoxide $\\text{CO}$ alone.',
            'In the Midrex Furnace, the reducing agent is water gas: a mixture of $\\text{CO} + \\text{H}_2$.',
            'Water gas is produced from methane: $\\text{CH}_4 + \\text{CO}_2 + \\text{H}_2\\text{O} \\to 3\\text{CO} + 5\\text{H}_2$.'
          ],
          stepByStepSolutionAr: [
            'في الفرن العالي، العامل المختزل هو أول أكسيد الكربون $\\text{CO}$ بمفرده.',
            'في فرن مدركس، العامل المختزل هو الغاز المائي: خليط من أول أكسيد الكربون والهيدروجين $(\\text{CO} + \\text{H}_2)$.',
            'يتم تحضير الغاز المائي من الغاز الطبيعي: $\\text{CH}_4 + \\text{CO}_2 + \\text{H}_2\\text{O} \\to 3\\text{CO} + 5\\text{H}_2$.'
          ],
          teacherTipEn: 'Remember: Blast furnace uses coke to make CO; Midrex uses natural gas to make water gas.',
          teacherTipAr: 'تذكر دائماً: الفرن العالي يعتمد على فحم الكوك لإنتاج CO، بينما فرن مدركس يعتمد على الغاز الطبيعي لإنتاج الغاز المائي.'
        }
      ],
      databank: chemCh1Databank
    }
  ]
};
