import type { Branch } from '../types/curriculum';
import { chemCh1Databank } from './databanks/thanaweya/chemCh1Databank';
import { chemCh2Databank } from './databanks/thanaweya/chemCh2Databank';
import { chemCh3Databank } from './databanks/thanaweya/chemCh3Databank';
import { chemCh4Databank } from './databanks/thanaweya/chemCh4Databank';
import { chemCh5Databank } from './databanks/thanaweya/chemCh5Databank';
import { thChemCh1SolvedExamples, thChemCh1Exercises } from './textbook/thanaweya/thChemCh1Textbook';
import { thChemCh2SolvedExamples, thChemCh2Exercises } from './textbook/thanaweya/thChemCh2Textbook';
import { thChemCh3SolvedExamples, thChemCh3Exercises } from './textbook/thanaweya/thChemCh3Textbook';
import { thChemCh4SolvedExamples, thChemCh4Exercises } from './textbook/thanaweya/thChemCh4Textbook';
import { thChemCh5SolvedExamples, thChemCh5Exercises } from './textbook/thanaweya/thChemCh5Textbook';

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
        },
      ],
      solvedExamples: thChemCh1SolvedExamples,
      exerciseProblems: thChemCh1Exercises,
      databank: chemCh1Databank
    },
    {
      id: 'th_chem_ch2',
      chapterNumber: 2,
      titleEn: 'Chemical Analysis: Qualitative & Quantitative',
      titleAr: 'التحليل الكيميائي: الكيفي والكمي',
      descriptionEn: 'Qualitative identification of acid radicals (anions) via dilute HCl, conc. H2SO4, and BaCl2; detection of basic radicals (cations) in analytical groups; and quantitative volumetric neutralization, precipitation, redox titrations, and gravimetric hydration analysis.',
      descriptionAr: 'التحليل الكيفي للشقوق الحامضية (الأنيونات) بمجموعات حمض الهيدروكلوريك المخفف وحمض الكبريتيك المركز وكلوريد الباريوم؛ وكشف الكاتيونات في المجموعات التحليلية؛ والتحليل الكمي الحجمي لمعادلات المعايرة والتحليل الكتلي لحساب ماء التبلور.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "th_chem_l2",
          "titleEn": "Chemical Analysis: Qualitative Anions/Cations & Volumetric Titration",
          "titleAr": "التحليل الكيميائي: التحليل الكيفي للشقوق الحامضية والقاعدية والتحليل الكمي الحجمي",
          "summaryEn": "Qualitative identification of acid radicals (anions) via dilute HCl, conc. H2SO4, and BaCl2; detection of basic radicals (cations) in analytical groups; and quantitative volumetric neutralization, precipitation, redox titrations, and gravimetric hydration analysis.",
          "summaryAr": "التحليل الكيفي للشقوق الحامضية (الأنيونات) بمجموعات حمض الهيدروكلوريك المخفف وحمض الكبريتيك المركز وكلوريد الباريوم؛ وكشف الكاتيونات في المجموعات التحليلية؛ والتحليل الكمي الحجمي لمعادلات المعايرة والتحليل الكتلي لحساب ماء التبلور.",
          "theoryContentEn": "### 1. Qualitative Analysis of Acid Radicals (Anions)\nInorganic qualitative analysis detects ions through characteristic precipitate formation, color changes, and gas evolution.\n\n- **Group 1: Dilute Hydrochloric Acid ($\\text{HCl}$) Group:**\n  Applies the principle that a more stable acid displaces a less stable acid from its solid salt as a gas.\n  - **Carbonate ($\\text{CO}_3^{2-}$) & Bicarbonate ($\\text{HCO}_3^-$):**\n    Main test: Salt $+ \\text{HCl} \\to \\text{CO}_2\\uparrow$ (effervescence, turns clear limewater $\\text{Ca(OH)}_2$ turbid for short time: $\\text{CO}_2 + \\text{Ca(OH)}_2 \\to \\text{CaCO}_3\\downarrow + \\text{H}_2\\text{O}$; turbidity disappears with prolonged passing forming soluble $\\text{Ca(HCO}_3)_2$).\n    Confirmatory test with $\\text{MgSO}_4$:\n    - $\\text{CO}_3^{2-}$ forms a **white precipitate in the cold** ($\\text{MgCO}_3$).\n    - $\\text{HCO}_3^-$ forms a **white precipitate only after boiling** ($\\text{Mg(HCO}_3)_2 \\xrightarrow{\\Delta} \\text{MgCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2$).\n  - **Sulfite ($\\text{SO}_3^{2-}$):** Evolves $\\text{SO}_2$ gas with pungent odor, turns paper wet with acidified potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}_2\\text{SO}_4$) from orange to green due to formation of chromium(III) sulfate:\n    $3\\text{SO}_2 + \\text{K}_2\\text{Cr}_2\\text{O}_7 + \\text{H}_2\\text{SO}_4 \\to \\text{K}_2\\text{SO}_4 + \\text{Cr}_2(\\text{SO}_4)_3 + \\text{H}_2\\text{O}$\n  - **Thiosulfate ($\\text{S}_2\\text{O}_3^{2-}$):** Evolves $\\text{SO}_2$ gas with precipitation of yellow colloidal sulfur suspended in solution. Confirmatory: decolors brown iodine solution:\n    $2\\text{Na}_2\\text{S}_2\\text{O}_3 + \\text{I}_2 \\to 2\\text{NaI} + \\text{Na}_2\\text{S}_4\\text{O}_6 \\quad (\\text{sodium tetrathionate})$\n  - **Sulfide ($\\text{S}^{2-}$):** Evolves $\\text{H}_2\\text{S}$ gas with rotten egg odor, turns lead(II) acetate paper black: $\\text{H}_2\\text{S} + (\\text{CH}_3\\text{COO})_2\\text{Pb} \\to \\text{PbS}\\downarrow + 2\\text{CH}_3\\text{COOH}$.\n  - **Nitrite ($\\text{NO}_2^-$):** Evolves colorless $\\text{NO}$ gas that turns reddish-brown $\\text{NO}_2$ at test tube mouth ($2\\text{NO} + \\text{O}_2 \\to 2\\text{NO}_2$). Confirmatory: decolors acidified potassium permanganate ($\\text{KMnO}_4$).\n\n- **Group 2: Concentrated Sulfuric Acid ($\\text{H}_2\\text{SO}_4$) Group:**\n  - **Chloride ($\\text{Cl}^-$):** Evolves colorless $\\text{HCl}$ gas, forming dense white fumes of $\\text{NH}_4\\text{Cl}$ with a glass rod dipped in ammonia. Confirmatory with $\\text{AgNO}_3$: forms white precipitate of $\\text{AgCl}$ that turns violet in sunlight and readily dissolves in aqueous ammonia.\n  - **Bromide ($\\text{Br}^-$):** Evolves orange-red bromine vapors ($\\text{Br}_2$) turning starch paper yellow. Confirmatory with $\\text{AgNO}_3$: forms yellowish-white precipitate of $\\text{AgBr}$ that dissolves slowly in concentrated ammonia.\n  - **Iodide ($\\text{I}^-$):** Evolves violet iodine vapors ($\\text{I}_2$) turning starch paper blue. Confirmatory with $\\text{AgNO}_3$: forms yellow precipitate of $\\text{AgI}$ that is completely insoluble in aqueous ammonia.\n  - **Nitrate ($\\text{NO}_3^-$):** Evolves dense reddish-brown $\\text{NO}_2$ vapors increased by adding copper turnings ($4\\text{HNO}_3 + \\text{Cu} \\to \\text{Cu(NO}_3)_2 + 2\\text{NO}_2 + 2\\text{H}_2\\text{O}$). Confirmatory: **Brown Ring Test** (salt solution $+ \\text{FeSO}_4$ freshly prepared, then concentrated $\\text{H}_2\\text{SO}_4$ added down the wall yields a brown ring of $[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$ at the junction).\n\n- **Group 3: Barium Chloride ($\\text{BaCl}_2$) Group:**\n  Used for radicals that do not react with $\\text{HCl}$ or $\\text{H}_2\\text{SO}_4$:\n  - **Sulfate ($\\text{SO}_4^{2-}$):** Forms white precipitate of $\\text{BaSO}_4$ **insoluble** in dilute $\\text{HCl}$.\n  - **Phosphate ($\\text{PO}_4^{3-}$):** Forms white precipitate of $\\text{Ba}_3(\\text{PO}_4)_2$ **soluble** in dilute $\\text{HCl}$. With $\\text{AgNO}_3$, forms a bright yellow precipitate of $\\text{Ag}_3\\text{PO}_4$ soluble in both ammonia and nitric acid.\n\n---\n\n### 2. Qualitative Analysis of Basic Radicals (Cations)\n- **Analytical Group I ($\\text{Ag}^+, \\text{Hg}_2^{2+}, \\text{Pb}^{2+}$):** Precipitated as insoluble chlorides using dilute $\\text{HCl}$.\n- **Analytical Group II ($\\text{Cu}^{2+}$):** Precipitated as black copper(II) sulfide ($\\text{CuS}$) using $\\text{H}_2\\text{S}$ in dilute $\\text{HCl}$ acidic medium.\n- **Analytical Group III ($\\text{Al}^{3+}, \\text{Fe}^{2+}, \\text{Fe}^{3+}$):** Precipitated as hydroxides using ammonium hydroxide ($\\text{NH}_4\\text{OH}$) in the presence of $\\text{NH}_4\\text{Cl}$:\n  - $\\text{Al}^{3+}$: White gelatinous $\\text{Al(OH)}_3$ precipitate, soluble in excess $\\text{NaOH}$ forming soluble sodium meta-aluminate:\n    $\\text{Al(OH)}_3 + \\text{NaOH} \\to \\text{NaAlO}_2 + 2\\text{H}_2\\text{O}$\n  - $\\text{Fe}^{2+}$: White precipitate turning dirty-green upon air exposure ($\\text{Fe(OH)}_2$).\n  - $\\text{Fe}^{3+}$: Reddish-brown gelatinous precipitate ($\\text{Fe(OH)}_3$).\n- **Analytical Group V ($\\text{Ca}^{2+}$):** Precipitated as white calcium carbonate ($\\text{CaCO}_3$) using ammonium carbonate ($(\\text{NH}_4)_2\\text{CO}_3$). Dry flame test imparts a characteristic brick-red color to non-luminous Bunsen flame.\n\n---\n\n### 3. Quantitative Chemical Analysis (Volumetric & Gravimetric)\n- **Titration Neutralization Law:**\n  $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$\n  where $M_a, M_b$ are molar concentrations, $V_a, V_b$ are volumes in liters (or mL), and $n_a, n_b$ are stoichiometric coefficients from the balanced equation.\n- **Gravimetric Hydration Analysis (Water of Crystallization):**\n  $\\text{Mass of water of crystallization} = m_{\\text{hydrated salt}} - m_{\\text{anhydrous salt}}$\n  $\\%\\, \\text{Water} = \\frac{m_{\\text{water}}}{m_{\\text{hydrated}}} \\times 100\\%$\n  The number of water molecules $x$ in hydrated formula $\\text{Salt} \\cdot x\\text{H}_2\\text{O}$ is calculated via mole ratios:\n  $x = \\frac{n(\\text{H}_2\\text{O})}{n(\\text{anhydrous salt})} = \\frac{m_{\\text{water}} / 18}{m_{\\text{anhydrous}} / M_{\\text{anhydrous}}}$",
          "theoryContentAr": "### ١. التحليل الكيفي للشقوق الحامضية (الأنيونات)\nيهدف التحليل الوصفي إلى الكشف عن مكونات المادة والتعرف على الأيونات المختلفة. تعتمد الفكرة العلمية للكشف عن الأنيونات على أن الحمض الأكثر ثباتاً يطرد الحمض الأقل ثباتاً من أملاحه على هيئة غاز يمكن الكشف عنه.\n\n- **مجموعة حمض الهيدروكلوريك المخفف ($\\text{HCl}$):**\n  - **الكربونات ($\\text{CO}_3^{2-}$) والبيكربونات ($\\text{HCO}_3^-$):**\n    التجربة الأساسية: الملح الصلب $+ \\text{HCl} \\to$ فوران وتصاعد غاز $\\text{CO}_2$ الذي يعكر ماء الجير الرائق $\\text{Ca(OH)}_2$ لفترة قصيرة لتكون كربونات الكالسيوم غير الذائبة، ويزول التعكير عند إمرار الغاز لفترة طويلة لتكون بيكربونات الكالسيوم الذائبة.\n    التجربة التأكيدية بمحلول كبريتات الماغنسيوم $\\text{MgSO}_4$:\n    - الكربونات تعطي **راسباً أبيض على البارد** ($\\text{MgCO}_3$).\n    - البيكربونات تعطي **راسباً أبيض بعد التسخين** ($\\text{Mg(HCO}_3)_2 \\xrightarrow{\\Delta} \\text{MgCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2$).\n  - **الكبريتيت ($\\text{SO}_3^{2-}$):** يتصاعد غاز $\\text{SO}_2$ ذو الرائحة النفاذة ويخضر ورقة مبللة بمحلول ثاني كرومات البوتاسيوم المحمضة بحمض الكبريتيك المركز بسبب تكون كبريتات الكروم III الخضراء.\n  - **الثيوكبريتات ($\\text{S}_2\\text{O}_3^{2-}$):** يتصاعد غاز $\\text{SO}_2$ ويترسب الكبريت الأصفر معلقاً في المحلول. التجربة التأكيدية: يزيل لون محلول اليود البني لتكون رباعي ثيونات الصوديوم ويوديد الصوديوم عديم اللون.\n  - **الكبريتيد ($\\text{S}^{2-}$):** يتصاعد غاز $\\text{H}_2\\text{S}$ ذو رائحة كريهة (البيض الفاسد) ويسود ورقة مبللة بمحلول أسيتات الرصاص II لتكون كبريتيد الرصاص $\\text{PbS}$ الأسود.\n  - **النيتريت ($\\text{NO}_2^-$):** يتصاعد غاز أكسيد النيتريك $\\text{NO}$ عديم اللون الذي يتحول عند فوهة الأنبوبة إلى أبخرة بنية حمراء من غاز ثاني أكسيد النيتروجين $\\text{NO}_2$. التأكيدية: يزيل لون محلول برمنجانات البوتاسيوم المحمضة البنفسجي.\n\n- **مجموعة حمض الكبريتيك المركز ($\\text{H}_2\\text{SO}_4$):**\n  - **الكلوريد ($\\text{Cl}^-$):** يتصاعد غاز $\\text{HCl}$ عديم اللون ويكون سحباً بيضاء كثيفة مع ساق مبللة بمحلول النشادر. التأكيدية: مع $\\text{AgNO}_3$ يعطي راسباً أبيض من $\\text{AgCl}$ يتحول للبنفسجي في الضوء ويذوب بسهولة في محلول النشادر.\n  - **البروميد ($\\text{Br}^-$):** تتصاعد أبخرة البروم البرتقالية الحمراء التي تصفر ورقة مبللة بالنشا. التأكيدية: مع $\\text{AgNO}_3$ يعطي راسباً أبيض مصفر من $\\text{AgBr}$ يذوب ببطء في محلول النشادر.\n  - **اليوديد ($\\text{I}^-$):** تتصاعد أبخرة اليود البنفسجية التي تزرق ورقة مبللة بالنشا. التأكيدية: مع $\\text{AgNO}_3$ يعطي راسباً أصفر من $\\text{AgI}$ لا يذوب في محلول النشادر.\n  - **النترات ($\\text{NO}_3^-$):** تتصاعد أبخرة بنية حمراء من $\\text{NO}_2$ تزداد بإضافة خراطة النحاس. التأكيدية: **تجربة الحلقة البنية** عند إضافة محلول كبريتات الحديد II حديثة التحضير ثم إضافة قطرات من حمض الكبريتيك المركز باحتراس على الجدار الداخلي للأنبوبة يتكون مركب الحلقة البنية $[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$ وتزول بالرج أو التسخين.\n\n- **مجموعة محلول كلوريد الباريوم ($\\text{BaCl}_2$):**\n  - **الكبريتات ($\\text{SO}_4^{2-}$):** يعطي راسباً أبيض من كبريتات الباريوم $\\text{BaSO}_4$ **لا يذوب** في حمض $\\text{HCl}$ المخفف.\n  - **الفوسفات ($\\text{PO}_4^{3-}$):** يعطي راسباً أبيض من فوسفات الباريوم $\\text{Ba}_3(\\text{PO}_4)_2$ **يذوب** في حمض $\\text{HCl}$ المخفف. ومع $\\text{AgNO}_3$ يعطي راسباً أصفر من $\\text{Ag}_3\\text{PO}_4$ يذوب في محلول النشادر وحمض النيتريك.\n\n---\n\n### ٢. التحليل الكيفي للشقوق القاعدية (الكاتيونات)\n- **المجموعة التحليلية الأولى ($\\text{Ag}^+, \\text{Hg}_2^{2+}, \\text{Pb}^{2+}$):** تترسب على هيئة كلوريدات شحيحة الذوبان في الماء بواسطة حمض $\\text{HCl}$ المخفف.\n- **المجموعة التحليلية الثانية ($\\text{Cu}^{2+}$):** تترسب على هيئة كبريتيد نحاس II أسود ($\\text{CuS}$) بإمرار غاز $\\text{H}_2\\text{S}$ في وسط حامضي من حمض $\\text{HCl}$.\n- **المجموعة التحليلية الثالثة ($\\text{Al}^{3+}, \\text{Fe}^{2+}, \\text{Fe}^{3+}$):** تترسب على هيئة هيدروكسيدات بإضافة هيدروكسيد الأمونيوم $\\text{NH}_4\\text{OH}$:\n  - $\\text{Al}^{3+}$: راسب أبيض جيلاتيني من $\\text{Al(OH)}_3$ يذوب في الزيادة من الصودا الكاوية لتكون ميتا ألومينات الصوديوم الذائبة في الماء.\n  - $\\text{Fe}^{2+}$: راسب أبيض يتحول إلى أبيض مخضر بتعرضه للهواء ($\\text{Fe(OH)}_2$).\n  - $\\text{Fe}^{3+}$: راسب بني محمر جيلاتيني ($\\text{Fe(OH)}_3$).\n- **المجموعة التحليلية الخامسة ($\\text{Ca}^{2+}$):** تترسب على هيئة كربونات كالسيوم بيضاء ($\\text{CaCO}_3$) بإضافة كربونات الأمونيوم. الكشف الجاف (كشف اللهب): تلون لهب بنزن بلون أحمر طوبي.\n\n---\n\n### ٣. التحليل الكيميائي الكمي (الحجمي والكتلي)\n- **قانون المعايرة والتعادل الحجمي:**\n  $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$\n- **التحليل الكتلي بالتطاير وحساب ماء التبلور:**\n  $\\text{كتلة ماء التبلور} = \\text{كتلة العينة المتهدرتة} - \\text{كتلة الملح غير المتهدرت}$\n  $\\%\\, \\text{الماء} = \\frac{\\text{كتلة ماء التبلور}}{\\text{كتلة العينة المتهدرتة}} \\times 100\\%$\n  عدد جزيئات ماء التبلور $x$ في الصيغة الجزيئية $\\text{Salt} \\cdot x\\text{H}_2\\text{O}$:\n  $x = \\frac{n(\\text{H}_2\\text{O})}{n(\\text{الملح الجاف})} = \\frac{m_{\\text{ماء}} / 18}{m_{\\text{جاف}} / M_{\\text{جاف}}}$",
          "formulas": [
            {
              "labelEn": "Titration Neutralization Formula",
              "labelAr": "قانون نقطة التكافؤ للمعايرة",
              "latex": "\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}"
            },
            {
              "labelEn": "Dissolved Solute Mass Formula",
              "labelAr": "علاقة التركيز والكتلة وحجم المحلول",
              "latex": "m = M \\times V_{(\\text{L})} \\times M_m"
            },
            {
              "labelEn": "Water of Crystallization Mole Ratio",
              "labelAr": "نسبة مولات ماء التبلور للملح الجاف",
              "latex": "x = \\frac{m_{\\text{water}} / 18}{m_{\\text{dry}} / M_{\\text{dry}}}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Chemistry Textbook Grade 12",
            "bookTitleAr": "كتاب الكيمياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-CHEM-CH2-L1",
            "pageRange": "pp. 28 - 60"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Qualitative Anions/Cations & Volumetric Titration",
            "titleAr": "خطة درس: التحليل الكيفي للأيونات والتحليل الحجمي بالمعايرة",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-CHEM-CH2-L1",
            "bloomsObjectivesEn": [
              "Differentiate systematically between acid radicals using HCl, H2SO4, and BaCl2.",
              "Identify cations in analytical groups I, II, III, and V through selective precipitation.",
              "Apply titration stoichiometry to calculate molarities, purity percentages, and waters of crystallization."
            ],
            "bloomsObjectivesAr": [
              "التمييز المنهجي بين الأنيونات باستخدام مجموعات الكواشف الثلاثة.",
              "التعرف على الكاتيونات في المجموعات التحليلية الأولى والثانية والثالثة والخامسة.",
              "تطبيق علاقات المعايرة الحجمية والتحليل الكتلي لحساب التركيز وماء التبلور ونسبة النقاء."
            ],
            "prerequisitesEn": [
              "Precipitation reactions",
              "Acid-base neutralization",
              "Molarity stoichiometry"
            ],
            "prerequisitesAr": [
              "تفاعلات الترسيب",
              "تعادل الأحماض والقلويات",
              "حسابات التركيز المولاري"
            ],
            "keyVocabularyEn": [
              {
                "term": "Qualitative Analysis",
                "definition": "Identification of unknown ions and radicals in a chemical substance."
              },
              {
                "term": "Equivalence Point",
                "definition": "Point in titration where stoichiometric equivalents of acid and base neutralize completely."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "التحليل الكيفي (الوصفي)",
                "definition": "سلسلة من التفاعلات المختارة للكشف عن نوع العناصر أو الأيونات المكونة للمادة."
              },
              {
                "term": "نقطة نهاية التفاعل (التكافؤ)",
                "definition": "النقطة التي يتم عندها تمام تفاعل التعادل بين الحمض والقاعدة ويتغير عندها لون الدليل."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Qualitative Anion Groups",
                "phaseAr": "كشف الشقوق الحامضية",
                "duration": "35 mins",
                "activitiesEn": "Systematic analysis of HCl, H2SO4, and BaCl2 anion groups with confirmatory test reactions.",
                "activitiesAr": "دراسة تفاعلات الكشف عن الأنيونات وتجارب التأكيد وترسب الفوسفات والكبريتات."
              },
              {
                "phaseEn": "Cation Analytical Groups",
                "phaseAr": "المجموعات التحليلية للكاتيونات",
                "duration": "25 mins",
                "activitiesEn": "Precipitation of CuS, Al(OH)3, Fe(OH)2, Fe(OH)3, and CaCO3.",
                "activitiesAr": "دراسة كواشف المجموعات التحليلية وخواص هيدروكسيدات الألومنيوم والحديد."
              },
              {
                "phaseEn": "Volumetric & Gravimetric Stoichiometry",
                "phaseAr": "المعايرة والحساب الكتلي",
                "duration": "30 mins",
                "activitiesEn": "Solving titration equivalence problems and water of crystallization empirical formulas.",
                "activitiesAr": "حل مسائل المعايرة الحجمية ونسب التبلور والشوائب."
              }
            ],
            "commonMisconceptionsEn": [
              "Confusing MgSO4 results: cold precipitate is carbonate, boiled precipitate is bicarbonate.",
              "Forgetting that BaSO4 is insoluble in dilute HCl while Ba3(PO4)2 is soluble."
            ],
            "commonMisconceptionsAr": [
              "الخلط بين كبريتات الماغنسيوم: الراسب على البارد كربونات، وبعد التسخين بيكربونات.",
              "نسيان أن كبريتات الباريوم لا تذوب في حمض HCl المخفف بينما فوسفات الباريوم تذوب فيه."
            ],
            "differentiationEn": {
              "struggling": "Use visual precipitate color flowcharts showing reagent additions.",
              "advanced": "Calculate percentage purity of impure CaCO3 samples from back-titration data."
            },
            "differentiationAr": {
              "struggling": "توفير مخطط انسيابي لوني لألوان الرواسب مع كواشف التأكيد.",
              "advanced": "حساب نسبة النقاء لعينات غير نقية باستخدام المعايرة الراجعة."
            },
            "formativeAssessmentEn": "Why does the turbidity in limewater disappear when CO2 gas is passed for a long time?",
            "formativeAssessmentAr": "علل: يزول تعكير ماء الجير الرائق عند إمرار غاز ثاني أكسيد الكربون فيه لفترة طويلة؟",
            "exitTicketQuestion": {
              "questionEn": "What volume of 0.2 M HCl is required to completely neutralize 25 mL of 0.1 M Na2CO3?",
              "questionAr": "ما حجم حمض HCl تركيزه ٠,٢ مولار اللازم لتعادل ٢٥ مل من كربونات الصوديوم ٠,١ مولار تماماً؟",
              "solutionEn": "Reaction: $2\\text{HCl} + \\text{Na}_2\\text{CO}_3 \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$. $\\frac{0.2 V_a}{2} = \\frac{0.1 \\times 25}{1} \\implies 0.1 V_a = 2.5 \\implies V_a = 25\\,\\text{mL}$.",
              "solutionAr": "المعادلة: $2\\text{HCl} + \\text{Na}_2\\text{CO}_3 \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$. $\\frac{٠,٢ V_a}{٢} = \\frac{٠,١ \\times ٢٥}{١} \\implies V_a = ٢٥\\,\\text{mL}$."
            }
          },
          "worksheet": {
            "id": "th_chem_ws_2",
            "titleEn": "Worksheet 2: Qualitative Anions/Cations & Volumetric Titration",
            "titleAr": "ورقة عمل ٢: التحليل الكيفي للأيونات والتحليل الحجمي بالمعايرة",
            "descriptionEn": "Comprehensive worksheet covering acid radical precipitation tests, cation analytical groups, and stoichiometric volumetric titration.",
            "descriptionAr": "ورقة تدريبية شاملة تغطي كشف الشقوق الحامضية بالمجموعات الترسيبية، والمجموعات التحليلية للكاتيونات، ومسائل المعايرة الحجمية.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_chem_ws_p2_1",
                "titleEn": "Identification of Carbonate vs Bicarbonate",
                "titleAr": "التمييز بين الكربونات والبيكربونات",
                "difficulty": "medium",
                "questionEn": "A solid salt gives effervescence with dilute $\\text{HCl}$ producing a gas that turns limewater turbid. An aqueous solution of the same salt produces a white precipitate when treated with $\\text{MgSO}_4$ only after heating. What is the anion?",
                "questionAr": "ملح صلب يحدث فوراناً عند إضافة حمض $\\text{HCl}$ المخفف ويتصاعد غاز يعكر ماء الجير الرائق، وعند إضافة محلول $\\text{MgSO}_4$ إلى محلول نفس الملح يتكون راسب أبيض بعد التسخين فقط. ما هو هذا الشق الحامضي؟",
                "optionsEn": [
                  "Carbonate ($CO_3^{2-}$)",
                  "Bicarbonate ($HCO_3^-$)",
                  "Sulfite ($SO_3^{2-}$)",
                  "Thiosulfate ($S_2O_3^{2-}$)"
                ],
                "optionsAr": [
                  "الكربونات ($CO_3^{2-}$)",
                  "البيكربونات ($HCO_3^-$)",
                  "الكبريتيت ($SO_3^{2-}$)",
                  "الثيوكبريتات ($S_2O_3^{2-}$)"
                ],
                "correctAnswer": "Bicarbonate ($HCO_3^-$)",
                "correctIndex": 1,
                "hintEn": "Carbonates precipitate magnesium carbonate in the cold, whereas magnesium bicarbonate is soluble until boiled.",
                "hintAr": "أملاح الكربونات تعطي راسب كربونات الماغنسيوم على البارد، بينما بيكربونات الماغنسيوم تذوب في الماء ولا تترسب إلا بعد التسخين والانحلال.",
                "stepByStepSolutionEn": [
                  "Step 1: Dilute $\\text{HCl}$ effervescence with turbidity in limewater confirms a carbonate or bicarbonate anion.",
                  "Step 2: $\\text{MgSO}_4$ addition to bicarbonate solution forms soluble $\\text{Mg(HCO}_3)_2$ in the cold.",
                  "Step 3: Heating decomposes $\\text{Mg(HCO}_3)_2 \\xrightarrow{\\Delta} \\text{MgCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$, producing a white precipitate after boiling. Hence, the anion is bicarbonate ($\\text{HCO}_3^-$)."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: الفوران مع $\\text{HCl}$ المخفف وتعكير ماء الجير يثبت أن الأنيون إما كربونات أو بيكربونات.",
                  "الخطوة ٢: إضافة كبريتات الماغنسيوم تعطي بيكربونات ماغنسيوم ذائبة في الماء على البارد فلا يظهر راسب مباشرة.",
                  "الخطوة ٣: بالتسخين تنحل بيكربونات الماغنسيوم بالحرارة إلى كربونات ماغنسيوم بيضاء شحيحة الذوبان تترسب، إذن الأنيون هو البيكربونات ($\\text{HCO}_3^-$)."
                ],
                "teacherTipEn": "Always differentiate between carbonate and bicarbonate using cold MgSO4 solution without heating.",
                "teacherTipAr": "التفرقة الأساسية بين الكربونات والبيكربونات تكون بمحلول كبريتات الماغنسيوم: راسب أبيض على البارد = كربونات، راسب أبيض بعد التسخين = بيكربونات."
              },
              {
                "id": "th_chem_ws_p2_2",
                "titleEn": "Neutralization Titration Molarity Calculation",
                "titleAr": "حساب التركيز المولاري في معايرة التعادل",
                "difficulty": "medium",
                "questionEn": "In a titration, $25.0\\,\\text{mL}$ of $0.10\\,\\text{M}\\,\\text{Ca(OH)}_2$ was completely neutralized by $20.0\\,\\text{mL}$ of hydrochloric acid solution ($\\text{HCl}$). What is the molar concentration of the acid?",
                "questionAr": "في تجربة معايرة، تعادل $25.0\\,\\text{mL}$ من محلول هيدروكسيد الكالسيوم $\\text{Ca(OH)}_2$ تركيزه $0.10\\,\\text{M}$ تماماً مع $20.0\\,\\text{mL}$ من محلول حمض الهيدروكلوريك $\\text{HCl}$. ما التركيز المولاري للحمض؟",
                "optionsEn": [
                  "$0.125\\,\\text{M}$",
                  "$0.250\\,\\text{M}$",
                  "$0.050\\,\\text{M}$",
                  "$0.500\\,\\text{M}$"
                ],
                "optionsAr": [
                  "$0.125\\,\\text{M}$",
                  "$0.250\\,\\text{M}$",
                  "$0.050\\,\\text{M}$",
                  "$0.500\\,\\text{M}$"
                ],
                "correctAnswer": "$0.250\\,\\text{M}$",
                "correctIndex": 1,
                "hintEn": "Write the balanced neutralization equation: 1 mole of Ca(OH)2 requires 2 moles of HCl.",
                "hintAr": "اكتب المعادلة الكيميائية الموزونة: مول واحد من هيدروكسيد الكالسيوم يحتاج إلى مولين من حمض الهيدروكلوريك للتعادل التام.",
                "stepByStepSolutionEn": [
                  "Step 1: Balanced reaction: $2\\text{HCl} + \\text{Ca(OH)}_2 \\to \\text{CaCl}_2 + 2\\text{H}_2\\text{O}$.",
                  "Step 2: Stoichiometric coefficients: $n_a = 2, \\, n_b = 1$.",
                  "Step 3: Titration formula: $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$.",
                  "Step 4: Substitute: $\\frac{M_a \\times 20.0}{2} = \\frac{0.10 \\times 25.0}{1} \\implies 10 M_a = 2.5 \\implies M_a = 0.250\\,\\text{M}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: المعادلة الموزونة: $2\\text{HCl} + \\text{Ca(OH)}_2 \\to \\text{CaCl}_2 + 2\\text{H}_2\\text{O}$.",
                  "الخطوة ٢: معاملات المعادلة: $n_a = 2$ للحمض، و$n_b = 1$ للقاعدة.",
                  "الخطوة ٣: قانون المعايرة: $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$.",
                  "الخطوة ٤: بالتعويض: $\\frac{M_a \\times 20.0}{2} = \\frac{0.10 \\times 25.0}{1} \\implies 10 M_a = 2.5 \\implies M_a = 0.250\\,\\text{M}$."
                ],
                "teacherTipEn": "Take note of dibasic hydroxides like Ca(OH)2 where nb = 1 reacts with 2 HCl (na = 2).",
                "teacherTipAr": "انتبه دوماً لعدد مجموعات الهيدروكسيل في القلوي وعدد بروتونات الحمض عند كتابة المعادلة لتحديد na و nb بدقة."
              }
            ]
          },
          "interactiveWidget": {
            "type": "titration_curve",
            "titleEn": "Interactive Chemical Analysis & Titration Curve Studio",
            "titleAr": "استوديو منحنيات المعايرة والتحليل الكيميائي التفاعلي",
            "descriptionEn": "Live SVG titration curve, Henderson-Hasselbalch buffer zone (pH = pKa), indicator color spectrum, and digital pH probe.",
            "descriptionAr": "منحنى معايرة تفاعلي حي، حسابات المنطقة المنظمة (pH = pKa)، أطياف ألوان الأدلة والكواشف، ومسبار pH رقمي."
          }
        },
      ],
      solvedExamples: thChemCh2SolvedExamples,
      exerciseProblems: thChemCh2Exercises,
      databank: chemCh2Databank
    },
    {
      id: 'th_chem_ch3',
      chapterNumber: 3,
      titleEn: 'Chemical Equilibrium & Reaction Kinetics',
      titleAr: 'الاتزان الكيميائي والاتزان الأيوني',
      descriptionEn: 'Dynamic chemical equilibrium, Law of Mass Action, Le Chatelier principle, factors affecting rate (T, P, C, catalysts), Ostwald dilution law for weak electrolytes, water autoionization, pH/pOH, salt hydrolysis, and Ksp calculations.',
      descriptionAr: 'الاتزان الكيميائي الديناميكي، قانون فعل الكتلة، قاعدة لوشاتيليه، العوامل المؤثرة على سرعة التفاعل والاتزان، قانون أستفالد للمحاليل الإلكتروليتية الضعيفة، تأين الماء، مقياس pH/pOH، تميؤ الأملاح، وحساب حاصل الإذابة Ksp.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "th_chem_l3",
          "titleEn": "Chemical Equilibrium, Ionic Equilibria, pH/pOH & Solubility Product",
          "titleAr": "الاتزان الكيميائي والاتزان الأيوني وحسابات pH/pOH وحاصل الإذابة",
          "summaryEn": "Dynamic chemical equilibrium, Law of Mass Action, Le Chatelier principle, factors affecting rate (T, P, C, catalysts), Ostwald dilution law for weak electrolytes, water autoionization, pH/pOH, salt hydrolysis, and Ksp calculations.",
          "summaryAr": "الاتزان الكيميائي الديناميكي، قانون فعل الكتلة، قاعدة لوشاتيليه، العوامل المؤثرة على سرعة التفاعل والاتزان، قانون أستفالد للمحاليل الإلكتروليتية الضعيفة، تأين الماء، مقياس pH/pOH، تميؤ الأملاح، وحساب حاصل الإذابة Ksp.",
          "theoryContentEn": "### 1. Chemical Equilibrium & Le Chatelier's Principle\n- **Reversible Reactions & Equilibrium State:**\n  A state reached when the forward reaction rate ($r_1$) equals the reverse reaction rate ($r_2$), and reactant/product concentrations remain constant.\n- **Law of Mass Action (Guldberg & Waage):**\n  For the general reversible reaction $aA + bB \\rightleftharpoons cC + dD$:\n  $K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}, \\quad K_p = \\frac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b}$\n  Pure solids ($s$) and pure liquid solvents ($l$) are omitted from equilibrium constant expressions because their effective concentrations remain virtually constant.\n- **Le Chatelier's Principle:**\n  If an external stress (change in concentration, temperature, or pressure) is applied to a system at equilibrium, the system shifts in the direction that counteracts the stress.\n  - **Effect of Temperature:**\n    - **Exothermic Reaction ($\\Delta H < 0$):** Heat is a product ($A + B \\rightleftharpoons C + \\text{Heat}$). Heating shifts equilibrium left, decreasing $K_c$. Cooling shifts equilibrium right, increasing $K_c$.\n    - **Endothermic Reaction ($\\Delta H > 0$):** Heat is a reactant ($A + B + \\text{Heat} \\rightleftharpoons C$). Heating shifts equilibrium right, increasing $K_c$. Cooling shifts left, decreasing $K_c$.\n    *(Temperature is the ONLY factor that alters the numerical value of $K_c$ and $K_p$)*.\n  - **Effect of Pressure:**\n    Affects only gaseous systems where total moles of gaseous reactants $\\neq$ gaseous products ($\\Delta n_g \\neq 0$). Increasing pressure shifts toward fewer gas moles.\n  - **Catalyst:**\n    Lowers the activation energy ($E_a$) equally for both forward and reverse pathways, accelerating equilibrium achievement without shifting equilibrium position or altering $K_c$.\n\n---\n\n### 2. Ionic Equilibrium in Weak Electrolytes\n- **Ostwald's Dilution Law:**\n  For a weak monoprotic acid $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$ with initial concentration $C_a$ and ionization degree $\\alpha$:\n  $K_a = \\frac{\\alpha^2 C_a}{1 - \\alpha} \\approx \\alpha^2 C_a \\implies \\alpha = \\sqrt{\\frac{K_a}{C_a}}$\n- **Hydronium Ion Concentration ($[\\text{H}_3\\text{O}^+]$):**\n  $[\\text{H}_3\\text{O}^+] = \\alpha C_a = \\sqrt{K_a \\cdot C_a}$\n  For weak bases (e.g. $\\text{NH}_4\\text{OH}$):\n  $[\\text{OH}^-] = \\sqrt{K_b \\cdot C_b}$\n\n---\n\n### 3. Autoionization of Water, pH Scale & Salt Hydrolysis\n- **Ionic Product of Water ($K_w$):**\n  At $25^\\circ\\text{C}$:\n  $K_w = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$\n  $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+], \\quad \\text{pOH} = -\\log[\\text{OH}^-]$\n  $\\text{pH} + \\text{pOH} = \\text{p}K_w = 14$\n- **Hydrolysis of Salts:**\n  - Salt of Strong Acid + Weak Base (e.g. $\\text{NH}_4\\text{Cl}$): Hydrolysis produces acidic solution ($\\text{pH} < 7$).\n  - Salt of Weak Acid + Strong Base (e.g. $\\text{CH}_3\\text{COONa}$): Hydrolysis produces alkaline solution ($\\text{pH} > 7$).\n  - Salt of Strong Acid + Strong Base (e.g. $\\text{NaCl}$): Neither ion undergoes significant hydrolysis; solution is neutral ($\\text{pH} = 7$).\n- **Solubility Product Constant ($K_{sp}$):**\n  For a sparingly soluble salt $A_x B_y(s) \\rightleftharpoons x A^{y+}(aq) + y B^{x-}(aq)$ with solubility degree $x_{\\text{sol}}$:\n  $K_{sp} = [A^{y+}]^x [B^{x-}]^y$\n  - Binary salt (e.g. $\\text{AgCl}$): $K_{sp} = x_{\\text{sol}}^2$.\n  - 1:2 salt (e.g. $\\text{PbCl}_2, \\text{Ca(OH)}_2$): $K_{sp} = [x_{\\text{sol}}][2x_{\\text{sol}}]^2 = 4x_{\\text{sol}}^3$.\n  - 1:3 salt (e.g. $\\text{Al(OH)}_3$): $K_{sp} = [x_{\\text{sol}}][3x_{\\text{sol}}]^3 = 27x_{\\text{sol}}^4$.",
          "theoryContentAr": "### ١. الاتزان الكيميائي وقاعدة لوشاتيليه\n- **التفاعلات الانعكاسية وحالة الاتزان:**\n  نظام ديناميكي يحدث عندما تتساوى سرعة التفاعل الطردي ($r_1$) مع سرعة التفاعل العكسي ($r_2$) وتثبت تركيزات المتفاعلات والنواتج طالما أن ظروف التفاعل ثابتة.\n- **قانون فعل الكتلة (جلبرج وفاج):**\n  عند ثبوت درجة الحرارة، تتناسب سرعة التفاعل الكيميائي طردياً مع حاصل ضرب التركيزات الجزيئية لمواد التفاعل كل مرفوع لأس يساوي عدد المولات:\n  $K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$\n  لا يكتب تركيز الماء النقي كمذيب ($l$) أو المواد الصلبة ($s$) في معادلة ثابت الاتزان لأن تركيزها يظل ثابتاً مهما تغيرت كميتها.\n- **قاعدة لوشاتيليه:**\n  إذا حدث تغير في أحد العوامل المؤثرة على نظام متزن مثل التركيز أو الضغط أو درجة الحرارة، فإن النظام ينشط في الاتجاه الذي يقلل أو يلغي تأثير هذا التغير.\n  - **تأثير درجة الحرارة:** العامل الوحيد الذي يغير من القيمة العددية لثابت الاتزان $K_c$:\n    - التفاعل الطارد للحرارة ($\\Delta H < 0$): رفع درجة الحرارة يزيح التفاعل عكسياً ويقلل قيمة $K_c$، وخفض الحرارة يزيحه طردياً ويزيد $K_c$.\n    - التفاعل الماص للحرارة ($\\Delta H > 0$): رفع درجة الحرارة يزيح التفاعل طردياً ويزيد قيمة $K_c$.\n  - **تأثير الضغط:** يؤثر فقط على التفاعلات الغازية الانعكاسية المصحوبة بتغير في الحجوم الغازية ($\\Delta n_g \\neq 0$). زيادة الضغط توجه التفاعل نحو الحجم الأقل (المولات الأقل).\n  - **العامل الحفاز:** يقلل طاقة التنشيط ويزيد سرعة التفاعلين الطردي والعكسي بنفس المقدار، فيصل بالنظام إلى الاتزان في زمن أقل دون أن يؤثر على موضع الاتزان أو قيمة $K_c$.\n\n---\n\n### ٢. الاتزان الأيوني في الإلكتروليتات الضعيفة\n- **قانون أستفالد للتخفيف:**\n  للأحماض الضعيفة أحادية البروتون ذات التركيز $C_a$ ودرجة التفكك $\\alpha$:\n  $K_a = \\frac{\\alpha^2 C_a}{1 - \\alpha} \\approx \\alpha^2 C_a \\implies \\alpha = \\sqrt{\\frac{K_a}{C_a}}$\n- **تركيز أيون الهيدرونيوم ($[\\text{H}_3\\text{O}^+]$):**\n  $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a}$\n  وللقواعد الضعيفة: $[\\text{OH}^-] = \\sqrt{K_b \\cdot C_b}$.\n\n---\n\n### ٣. الحاصل الأيوني للماء ومقياس pH وحاصل الإذابة $K_{sp}$\n- **الحاصل الأيوني للماء ($K_w$):**\n  $K_w = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 10^{-14} \\quad (25^\\circ\\text{C})$\n  $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+], \\quad \\text{pOH} = -\\log[\\text{OH}^-], \\quad \\text{pH} + \\text{pOH} = 14$\n- **تميؤ الأملاح:**\n  - ملح مشتق من حمض قوي وقاعدة ضعيفة (مثل $\\text{NH}_4\\text{Cl}$): المحلول حمضي و$\\text{pH} < 7$.\n  - ملح مشتق من حمض ضعيف وقاعدة قوية (مثل $\\text{CH}_3\\text{COONa}$): المحلول قلوي و$\\text{pH} > 7$.\n  - ملح مشتق من حمض قوي وقاعدة قوية (مثل $\\text{NaCl}$): المحلول متعادل و$\\text{pH} = 7$.\n- **حاصل الإذابة ($K_{sp}$) للأملاح الشحيحة الذوبان:**\n  $K_{sp} = [A^{y+}]^x [B^{x-}]^y$\n  - للملح أحادي التكافؤ (مثل $\\text{AgCl}$): $K_{sp} = x^2$.\n  - للملح ثلاثي الأيونات (مثل $\\text{PbCl}_2$): $K_{sp} = 4x^3$.\n  - للملح رباعي الأيونات (مثل $\\text{Al(OH)}_3$): $K_{sp} = 27x^4$.",
          "formulas": [
            {
              "labelEn": "Equilibrium Constant Expression",
              "labelAr": "صيغة ثابت الاتزان الكيميائي",
              "latex": "K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}"
            },
            {
              "labelEn": "Hydronium Concentration in Weak Acid",
              "labelAr": "تركيز أيون الهيدرونيوم في الحمض الضعيف",
              "latex": "[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a}"
            },
            {
              "labelEn": "Water Autoionization & pH Summation",
              "labelAr": "العلاقة بين pH و pOH وتأين الماء",
              "latex": "\\text{pH} + \\text{pOH} = 14 \\quad (\\text{at } 25^\\circ\\text{C})"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Chemistry Textbook Grade 12",
            "bookTitleAr": "كتاب الكيمياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-CHEM-CH3-L1",
            "pageRange": "pp. 62 - 95"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Chemical Equilibrium, Ionic Equilibria & Solubility Product",
            "titleAr": "خطة درس: الاتزان الكيميائي والاتزان الأيوني وحاصل الإذابة",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-CHEM-CH3-L1",
            "bloomsObjectivesEn": [
              "Apply Le Chatelier principle to predict directional shifts under temperature, pressure, and concentration changes.",
              "Derive and calculate weak electrolyte ionization parameters using Ostwald dilution law.",
              "Calculate pH, pOH, and solubility products (Ksp) for saturated electrolyte solutions."
            ],
            "bloomsObjectivesAr": [
              "تطبيق قاعدة لوشاتيليه لتحديد اتجاه الإزاحة عند تغير الضغط والحرارة والتركيز.",
              "حساب درجة التفكك وتركيز الهيدرونيوم باستخدام قانون أستفالد للتخفيف.",
              "حساب الرقم الهيدروجيني وحاصل الإذابة للأملاح شحيحة الذوبان."
            ],
            "prerequisitesEn": [
              "Reversible reactions",
              "Collision theory",
              "Electrolyte conductivity"
            ],
            "prerequisitesAr": [
              "التفاعلات الانعكاسية",
              "نظرية التصادم",
              "التوصيل الكهربي للإلكتروليتات"
            ],
            "keyVocabularyEn": [
              {
                "term": "Le Chatelier Principle",
                "definition": "States that an equilibrium system responds to an external stress by shifting to relieve that stress."
              },
              {
                "term": "Solubility Product (Ksp)",
                "definition": "Equilibrium constant for the dissolution of a sparingly soluble ionic compound."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "قاعدة لوشاتيليه",
                "definition": "إذا حدث تغير في أحد العوامل المؤثرة على نظام متزن فإن النظام ينشط في الاتجاه الذي يلغي تأثير هذا التغير."
              },
              {
                "term": "حاصل الإذابة (Ksp)",
                "definition": "حاصل ضرب تركيزات أيونات مركب أيوني شحيح الذوبان في محلوله المشبع كل مرفوع لأس عدد مولاته."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Dynamic Equilibrium & Le Chatelier",
                "phaseAr": "الاتزان الديناميكي وقاعدة لوشاتيليه",
                "duration": "35 mins",
                "activitiesEn": "Analyzing rate curves and predicting shifts with temperature and pressure.",
                "activitiesAr": "تحليل منحنيات سرعة التفاعل وتوقع موضع الاتزان مع الضغط والحرارة."
              },
              {
                "phaseEn": "Ionic Equilibria & Weak Acids",
                "phaseAr": "الاتزان الأيوني والأحماض الضعيفة",
                "duration": "30 mins",
                "activitiesEn": "Deriving Ostwald dilution law and computing [H3O+] from Ka and Ca.",
                "activitiesAr": "استنتاج قانون أستفالد وحساب تركيز أيونات الهيدرونيوم."
              },
              {
                "phaseEn": "pH Scale, Hydrolysis & Ksp",
                "phaseAr": "مقياس pH والتميؤ وحاصل الإذابة",
                "duration": "25 mins",
                "activitiesEn": "Classifying salt hydrolysis solutions and solving sparingly soluble salt Ksp values.",
                "activitiesAr": "تحديد نوع المحلول المائي للأملاح وحساب حاصل الإذابة للأملاح الشحيحة."
              }
            ],
            "commonMisconceptionsEn": [
              "Believing catalysts shift equilibrium position (they only accelerate its achievement).",
              "Thinking temperature does not change Kc (temperature is the ONLY variable that alters Kc)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن العامل الحفاز يغير موضع الاتزان أو قيمة Kc (هو فقط يقلل زمن الوصول للاتزان).",
              "الظن بأن درجة الحرارة لا تغير ثابت الاتزان (الحرارة هي العامل الوحيد الذي يغير قيمة Kc)."
            ],
            "differentiationEn": {
              "struggling": "Provide a table correlating endothermic/exothermic reactions with temperature shifts.",
              "advanced": "Calculate common-ion effect suppression on solubility of AgCl in 0.1 M NaCl."
            },
            "differentiationAr": {
              "struggling": "جدول مقارنة يربط نوع التفاعل (طارد/ماص) بتأثير التبريد والتسخين على موضع الاتزان.",
              "advanced": "حساب تأثير الأيون المشترك على ذوبانية كلوريد الفضة في محلول كلوريد الصوديوم."
            },
            "formativeAssessmentEn": "Why does adding solid sodium acetate to acetic acid solution decrease its electric conductivity?",
            "formativeAssessmentAr": "علل: إضافة أسيتات الصوديوم الصلبة لمحلول حمض الأسيتيك تقلل من تركيز أيونات الهيدرونيوم؟",
            "exitTicketQuestion": {
              "questionEn": "Calculate the solubility of AgCl in pure water if Ksp = 1.6 x 10^-10.",
              "questionAr": "احسب درجة ذوبانية كلوريد الفضة في الماء النقي إذا كان Ksp = 1.6 x 10^-10.",
              "solutionEn": "$K_{sp} = x^2 = 1.6 \\times 10^{-10} \\implies x = \\sqrt{1.6 \\times 10^{-10}} \\approx 1.26 \\times 10^{-5}\\,\\text{M}$.",
              "solutionAr": "$K_{sp} = x^2 = 1.6 \\times 10^{-10} \\implies x = \\sqrt{1.6 \\times 10^{-10}} \\approx 1.26 \\times 10^{-5}\\,\\text{M}$."
            }
          },
          "worksheet": {
            "id": "th_chem_ws_3",
            "titleEn": "Worksheet 3: Chemical Equilibrium, pH & Solubility Product",
            "titleAr": "ورقة عمل ٣: الاتزان الكيميائي وحسابات pH وحاصل الإذابة",
            "descriptionEn": "Rigorous exercises on Le Chatelier equilibrium shifts, Ostwald dilution law, and hydronium/pH calculations in weak electrolytes.",
            "descriptionAr": "تدريبات مكثفة على إزاحة الاتزان بقاعدة لوشاتيليه وقانون أستفالد للتخفيف وحسابات تركيز الهيدرونيوم والرقم الهيدروجيني pH.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_chem_ws_p3_1",
                "titleEn": "Le Chatelier Pressure & Temperature Shift in Ammonia Synthesis",
                "titleAr": "تطبيق قاعدة لوشاتيليه على إنتاج النشادر",
                "difficulty": "medium",
                "questionEn": "For the exothermic reaction: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g), \\; \\Delta H = -92\\,\\text{kJ}$. Which change will shift the equilibrium position to the right and increase the production of ammonia?",
                "questionAr": "في التفاعل الطارد للحرارة: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g), \\; \\Delta H = -92\\,\\text{kJ}$. أي التغيرات الآتية تزيح موضع الاتزان طردياً لزيادة إنتاج غاز النشادر؟",
                "optionsEn": [
                  "Decreasing the pressure and heating the mixture",
                  "Increasing the pressure and cooling the mixture",
                  "Adding a catalyst at constant volume",
                  "Removing hydrogen gas continuously"
                ],
                "optionsAr": [
                  "خفض الضغط وتسخين خليط التفاعل",
                  "زيادة الضغط وخفض درجة الحرارة (التبريد)",
                  "إضافة عامل حفاز عند ثبوت الحجم",
                  "سحب غاز الهيدروجين باستمرار من حيز التفاعل"
                ],
                "correctAnswer": "Increasing the pressure and cooling the mixture",
                "correctIndex": 1,
                "hintEn": "Exothermic reactions shift right upon cooling; reactions with fewer product gas moles shift right upon increasing pressure.",
                "hintAr": "التفاعلات الطاردة للحرارة تنشط في الاتجاه الطردي بالتبريد، والتفاعلات التي يصاحبها نقص في عدد المولات الغازية تنشط طردياً بزيادة الضغط.",
                "stepByStepSolutionEn": [
                  "Step 1: Reaction is exothermic ($\\Delta H < 0$). Lowering the temperature favors the forward exothermic pathway to replace lost heat.",
                  "Step 2: Moles of gas: reactants $= 1 + 3 = 4\\,\\text{mol}$; products $= 2\\,\\text{mol}$. Increasing pressure favors the forward direction with fewer moles."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: التفاعل طارد للحرارة ($\\Delta H < 0$)، وبالتالي فإن خفض درجة الحرارة يوجه التفاعل في الاتجاه الطردي لتعويض الحرارة المفقودة.",
                  "الخطوة ٢: عدد مولات الغازات: المتفاعلات $= 4$ مولات، والنواتج $= 2$ مول. زيادة الضغط توجه النظام نحو عدد المولات الأقل أي الاتجاه الطردي."
                ],
                "teacherTipEn": "Remember that catalysts do NOT shift the equilibrium position; they only decrease the time required to attain equilibrium.",
                "teacherTipAr": "تذكر أن العامل الحفاز لا يغير موضع الاتزان ولا يزيد كمية النواتج، بل يقلل زمن الوصول لحالة الاتزان فقط."
              },
              {
                "id": "th_chem_ws_p3_2",
                "titleEn": "pH Calculation for Weak Monoprotic Acid",
                "titleAr": "حساب الرقم الهيدروجيني لحمض أحادي البروتون ضعيف",
                "difficulty": "medium",
                "questionEn": "Calculate the pH of a $0.10\\,\\text{M}$ acetic acid solution ($\\text{CH}_3\\text{COOH}$) given that $K_a = 1.8 \\times 10^{-5}$.",
                "questionAr": "احسب قيمة pH لمحلول حمض الأسيتيك $\\text{CH}_3\\text{COOH}$ تركيزه $0.10\\,\\text{M}$، علماً بأن $K_a = 1.8 \\times 10^{-5}$.",
                "optionsEn": [
                  "$\\text{pH} \\approx 1.00$",
                  "$\\text{pH} \\approx 2.87$",
                  "$\\text{pH} \\approx 4.74$",
                  "$\\text{pH} \\approx 5.87$"
                ],
                "optionsAr": [
                  "$\\text{pH} \\approx 1.00$",
                  "$\\text{pH} \\approx 2.87$",
                  "$\\text{pH} \\approx 4.74$",
                  "$\\text{pH} \\approx 5.87$"
                ],
                "correctAnswer": "$\\text{pH} \\approx 2.87$",
                "correctIndex": 1,
                "hintEn": "Use [H3O+] = sqrt(Ka * Ca), then pH = -log[H3O+].",
                "hintAr": "احسب تركيز أيون الهيدرونيوم بالقانون: [H3O+] = sqrt(Ka * Ca)، ثم احسب pH = -log[H3O+].",
                "stepByStepSolutionEn": [
                  "Step 1: Calculate $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a} = \\sqrt{(1.8 \\times 10^{-5})(0.10)} = \\sqrt{1.8 \\times 10^{-6}} = 1.342 \\times 10^{-3}\\,\\text{M}$.",
                  "Step 2: Calculate $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] = -\\log(1.342 \\times 10^{-3}) \\approx 3 - \\log(1.342) \\approx 2.87$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: حساب $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a} = \\sqrt{(1.8 \\times 10^{-5})(0.10)} = 1.342 \\times 10^{-3}\\,\\text{M}$.",
                  "الخطوة ٢: حساب $\\text{pH} = -\\log(1.342 \\times 10^{-3}) = 2.87$."
                ],
                "teacherTipEn": "Remember that acetic acid is a weak electrolyte; you cannot set [H3O+] equal to Ca.",
                "teacherTipAr": "حمض الأسيتيك إلكتروليت ضعيف لا يتأين كلياً، لذلك لا يساوي تركيز الهيدرونيوم تركيز الحمض مباشرة بل يحسب بجذر (Ka * Ca)."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Dynamic Equilibrium & pH Simulator",
            "titleAr": "محاكي الاتزان الكيميائي والديناميكا وأس الهيدروجين",
            "descriptionEn": "Interactive simulator visualizing Le Chatelier shifts and pH titration titration curves.",
            "descriptionAr": "محاكاة تفاعلية لتطبيق قاعدة لوشاتيليه مع التغير في درجات الحرارة والضغط وحسابات pH."
          }
        },
      ],
      solvedExamples: thChemCh3SolvedExamples,
      exerciseProblems: thChemCh3Exercises,
      databank: chemCh3Databank
    },
    {
      id: 'th_chem_ch4',
      chapterNumber: 4,
      titleEn: 'Electrochemistry: Galvanic & Electrolytic Cells',
      titleAr: 'الكيمياء الكهربية وتآكل المعادن',
      descriptionEn: 'Electrochemical series, Daniell cell, fuel cell, lead accumulator, Li-ion battery, electrochemical mechanism of iron rusting, Faraday laws of electrolysis, electroplating, copper refining, and aluminum bauxite extraction.',
      descriptionAr: 'السلسلة الكهروكيميائية، خلية دانيال، خلية الوقود، بطارية الرصاص الحامضية، بطارية أيون الليثيوم، ميكانيكية صدأ الحديد، قوانين فاراداي للتحليل الكهربي، الطلاء الكهربي، تنقية النحاس واستخلاص الألومنيوم.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "th_chem_l4",
          "titleEn": "Electrochemistry: Galvanic Cells, Metal Corrosion & Electrolysis",
          "titleAr": "الكيمياء الكهربية: الخلايا الجلفانية وتآكل المعادن والتحليل الكهربي",
          "summaryEn": "Electrochemical series, Daniell cell, fuel cell, lead accumulator, Li-ion battery, electrochemical mechanism of iron rusting, Faraday laws of electrolysis, electroplating, copper refining, and aluminum bauxite extraction.",
          "summaryAr": "السلسلة الكهروكيميائية، خلية دانيال، خلية الوقود، بطارية الرصاص الحامضية، بطارية أيون الليثيوم، ميكانيكية صدأ الحديد، قوانين فاراداي للتحليل الكهربي، الطلاء الكهربي، تنقية النحاس واستخلاص الألومنيوم.",
          "theoryContentEn": "### 1. Galvanic Cells & Standard Cell Potential\nGalvanic cells convert chemical energy into electrical energy through spontaneous oxidation-reduction reactions.\n- **Electromotive Series (Electrochemical Series):**\n  Elements arranged in descending order of standard oxidation potentials (or ascending reduction potentials).\n  - Elements with high oxidation potentials (top of series, e.g. $\\text{Li, K, Na, Zn}$) are strong reducing agents, easily oxidized, and act as anodes.\n  - Elements below hydrogen (e.g. $\\text{Cu, Ag, Au}$) have negative oxidation potentials and cannot displace hydrogen from dilute acids.\n- **Cell EMF Equation:**\n  $E_{\\text{cell}}^\\circ = E_{\\text{ox}}^\\circ(\\text{anode}) + E_{\\text{red}}^\\circ(\\text{cathode}) = E_{\\text{red}}^\\circ(\\text{cathode}) - E_{\\text{red}}^\\circ(\\text{anode})$\n  - If $E_{\\text{cell}} > 0$: Reaction is **spontaneous** (galvanic cell, $\\Delta G < 0$).\n  - If $E_{\\text{cell}} < 0$: Reaction is **non-spontaneous** (requires external electrolytic power, $\\Delta G > 0$).\n- **Primary Galvanic Cells:** Non-rechargeable.\n  - **Daniell Cell:** $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\to \\text{Zn}^{2+}(aq) + \\text{Cu}(s), \\, E_{\\text{cell}}^\\circ = +1.10\\,\\text{V}$. Salt bridge ($\\text{Na}_2\\text{SO}_4$) neutralizes excess charges and connects half-cells without direct mixing.\n  - **Mercury Cell:** Small button battery. $\\text{Zn} + \\text{HgO} \\to \\text{ZnO} + \\text{Hg}, \\, E_{\\text{cell}} = 1.35\\,\\text{V}$.\n  - **Fuel Cell:** Consumes hydrogen and oxygen continuously without storing energy:\n    $2\\text{H}_2(g) + \\text{O}_2(g) \\to 2\\text{H}_2\\text{O}(l), \\quad E_{\\text{cell}} = 1.23\\,\\text{V}$\n    Electrolyte: hot aqueous $\\text{KOH}$. Produces drinkable water and electric power in space capsules.\n\n- **Secondary Galvanic Cells (Storage Batteries):** Reversible / Rechargeable.\n  - **Lead-Acid Storage Battery (Car Accumulator):**\n    - Anode: spongy lead ($\\text{Pb}$); Cathode: lead dioxide ($\\text{PbO}_2$); Electrolyte: dilute sulfuric acid ($\\text{H}_2\\text{SO}_4$).\n    - Overall Discharge Reaction:\n      $\\text{Pb}(s) + \\text{PbO}_2(s) + 2\\text{H}_2\\text{SO}_4(aq) \\rightleftharpoons 2\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l), \\quad E_{\\text{cell}} \\approx 2.05\\,\\text{V} \\times 6 = 12.3\\,\\text{V}$\n    - Battery charge status is measured with a **hydrometer**: fully charged density is $1.28 - 1.30\\,\\text{g/cm}^3$; requires recharge if density falls below $1.20\\,\\text{g/cm}^3$.\n  - **Lithium-Ion Battery:**\n    - Anode: Lithium graphite ($\\text{LiC}_6$); Cathode: Lithium cobalt oxide ($\\text{LiCoO}_2$); Electrolyte: non-aqueous lithium hexafluorophosphate ($\\text{LiPF}_6$).\n    - EMF $= 3.0\\,\\text{V}$. High energy density due to lithium's extremely low atomic weight and highest oxidation potential ($+3.045\\,\\text{V}$).\n\n---\n\n### 2. Metal Corrosion (Iron Rusting)\nCorrosion is an unwanted electrochemical process where metals are oxidized by environmental agents.\n- **Electrochemical Mechanism:**\n  When iron contains impurities (e.g. carbon) and contacts moisture and oxygen:\n  - Anode (Oxidation of iron): $2\\text{Fe} \\to 2\\text{Fe}^{2+} + 4e^-$.\n  - Cathode (Reduction of dissolved oxygen): $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$.\n  - Precipitation: $\\text{Fe}^{2+} + 2\\text{OH}^- \\to \\text{Fe(OH)}_2$.\n  - Oxidation to rust: $2\\text{Fe(OH)}_2 + \\frac{1}{2}\\text{O}_2 + \\text{H}_2\\text{O} \\to 2\\text{Fe(OH)}_3$ (hydrated iron(III) oxide $\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$).\n- **Protection Methods:**\n  - **Cathodic Protection (Sacrificial Anode):** Connecting iron to a more active metal (e.g. magnesium or zinc block on ship hulls and buried pipelines; zinc galvanization).\n  - **Anodic Coating:** Covering iron with a less active metal (e.g. tin plating $\\text{Sn}$ in food cans); however, if scratched, iron corrodes much faster.\n\n---\n\n### 3. Electrolytic Cells & Faraday's Laws\n- **Faraday's First Law:** Mass deposited or dissolved is directly proportional to the quantity of electricity ($Q = I \\times t$): $m \\propto Q$.\n- **Faraday's Second Law:** Mass deposited by the same quantity of electricity is directly proportional to the chemical equivalent weight:\n  $\\text{Equivalent Weight} = \\frac{\\text{Molar Mass}}{z \\quad (\\text{valence})}$\n- **Faraday's Constant ($1\\,\\text{F} = 96,500\\,\\text{C}$):**\n  Quantity of charge required to deposit or liberate 1 gram-equivalent of any element.\n  $m = \\frac{I \\cdot t \\cdot \\text{Eq. Wt.}}{96,500} = \\frac{Q \\cdot M}{z \\cdot 96,500}$\n  To liberate 1 mole of element atoms: $Q = z \\times 1\\,\\text{Faraday}$.\n  To liberate 1 mole of diatomic gas molecules (e.g. $\\text{O}_2, \\text{Cl}_2, \\text{H}_2$): $Q = n_{\\text{atoms}} \\times z \\times 1\\,\\text{F}$ (e.g. for $\\text{O}_2$, $Q = 2 \\times 2 = 4\\,\\text{F}$).",
          "theoryContentAr": "### ١. الخلايا الجلفانية وجهد الخلية القياسي\nالخلايا الجلفانية خلايا كهركيميائية تتحول فيها الطاقة الكيميائية إلى طاقة كهربائية من خلال تفاعل أكسدة واختزال تلقائي.\n- **متسلسلة الجهود الكهربية:**\n  ترتيب العناصر تنازلياً حسب جهود التأكسد القياسية (أو تصاعدياً حسب جهود الاختزال القياسية) بالنسبة لقطب الهيدروجين القياسي ($E^\\circ = 0.00\\,\\text{V}$).\n  - العناصر ذات جهود التأكسد الموجبة الكبيرة تقع أعلى المتسلسلة، وتعتبر عوامل مختزلة قوية، وتتأكسد بسهولة وتعمل كأنود.\n  - العناصر التي تلي الهيدروجين في المتسلسلة جهود تأكسدها سالبة ولا تحل محل هيدروجين الماء أو الأحماض.\n- **القوة الدافعة الكهربية للخلية ($E_{\\text{cell}}$):**\n  $E_{\\text{cell}}^\\circ = E_{\\text{ox}}^\\circ(\\text{الأنود}) + E_{\\text{red}}^\\circ(\\text{الكاثود})$\n  - إذا كانت القيمة موجبة: التفاعل **تلقائي**، والخلية جلفانية منتجة للتيار.\n  - إذا كانت القيمة سالبة: التفاعل **غير تلقائي**، والخلية إلكتروليتية تستهلك تياراً.\n- **الخلايا الجلفانية الأولية (غير الانعكاسية):**\n  - **خلية دانيال:** $\\text{Zn} + \\text{Cu}^{2+} \\to \\text{Zn}^{2+} + \\text{Cu}, \\, E_{\\text{cell}} = 1.10\\,\\text{V}$. القنطرة الملحية تصل بين محلولي نصفي الخلية بطريقة غير مباشرة وتعادل الشحنات الموجبة والسالبة الزائدة.\n  - **خلية الوقود:** يزود بوقود غازي الهيدروجين والأكسجين من مصدر خارجي:\n    $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}, \\quad E_{\\text{cell}} = 1.23\\,\\text{V}$\n    تستخدم في مركبات الفضاء لتوليد الكهرباء ومياه الشرب لرواد الفضاء.\n- **الخلايا الجلفانية الثانوية (الانعكاسية / بطاريات التخزين):**\n  - **المركم الرصاصي (بطارية السيارة):**\n    - الأنود: شبكة رصاص مملوءة برصاص إسفنجي ($\\text{Pb}$). الكاثود: شبكة رصاص مملوءة بثاني أكسيد الرصاص ($\\text{PbO}_2$). الإلكتروليت: حمض كبريتيك مخفف.\n    - معادلة التفريغ والشحن:\n      $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}, \\quad E_{\\text{cell}} \\approx 12\\,\\text{V}$\n    - يتم التعرف على حالة البطارية بواسطة **الهيدروميتر** لقياس كثافة الحمض ($1.28 - 1.30\\,\\text{g/cm}^3$ تام الشحن، وأقل من $1.20\\,\\text{g/cm}^3$ بحاجة للشحن).\n  - **بطارية أيون الليثيوم:** الأنود من جرافيت الليثيوم $\\text{LiC}_6$ والكاثود من أكسيد الليثيوم كوبلت $\\text{LiCoO}_2$، وتنتج $3.0\\,\\text{V}$، وتتميز بخفة وزن الليثيوم وأعلى جهد تأكسد قياسي ($+3.045\\,\\text{V}$).\n\n---\n\n### ٢. تآكل المعادن (صدأ الحديد)\nعملية كهروكيميائية تلقائية تؤدي لتلف الفلز نتيجة تفاعله مع البيئة المحيطة.\n- ميكانيكية الصدأ: الحديد النقي لا يصدأ بسهولة، ولكن وجود شوائب كربونية يكون خلايا جلفانية موضعية:\n  - الأنود: ذرات الحديد تتأكسد: $2\\text{Fe} \\to 2\\text{Fe}^{2+} + 4e^-$.\n  - الكاثود: الأكسجين الذائب في الماء يختزل: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$.\n  - يتحد الأيونان لإنتاج هيدروكسيد حديد II الذي يتأكسد بالأكسجين إلى هيدروكسيد حديد III البني المحمر (الصدأ).\n- الحماية من الصدأ: **الغطاء الأنودي (القطب المضحي)** بتوصيل الحديد بفلز أكثر نشاطاً منه كالماغنسيوم أو الخارصين (الجلفنة)، وهو أكثر أماناً من الغطاء الكاثودي (بالقصدير).\n\n---\n\n### ٣. التحليل الكهربي وقوانين فاراداي\n- **قانون فاراداي الأول:** تتناسب كتلة المادة المترسبة أو المتصاعدة طردياً مع كمية الكهرباء المارة في المحلول ($Q = I \\cdot t$).\n- **قانون فاراداي الثاني:** تتناسب كتل المواد المختلفة المترسبة بنفس كمية الكهرباء طردياً مع كتلها المكافئة الجرامية:\n  $\\text{الكتلة المكافئة الجرامية} = \\frac{\\text{الكتلة المولية الذرية}}{\\text{التكافؤ}}$\n- **الفاراداي ($1\\,\\text{F} = 96,500\\,\\text{Coulombs}$):**\n  كمية الكهرباء اللازمة لترسيب أو تصعيد كتلة مكافئة جرامية واحدة من أي مادة.\n  $m = \\frac{I \\cdot t \\cdot \\text{الكتلة المكافئة}}{96,500}$\n  لتحرير مول ذرة من عنصر تكافؤه $z$: يلزم كمية كهرباء $= z \\times 1\\,\\text{Faraday}$.",
          "formulas": [
            {
              "labelEn": "Standard Cell Electromotive Force",
              "labelAr": "القوة الدافعة الكهربية للخلية الجلفانية",
              "latex": "E_{\\text{cell}}^\\circ = E_{\\text{ox}}^\\circ(\\text{anode}) + E_{\\text{red}}^\\circ(\\text{cathode})"
            },
            {
              "labelEn": "Faraday Electrodeposition Formula",
              "labelAr": "قانون فاراداي العام للتحليل الكهربي",
              "latex": "m = \\frac{I \\times t \\times \\text{Eq. Wt.}}{96,500}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Chemistry Textbook Grade 12",
            "bookTitleAr": "كتاب الكيمياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-CHEM-CH4-L1",
            "pageRange": "pp. 96 - 135"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Electrochemistry: Galvanic Cells, Corrosion & Electrolysis",
            "titleAr": "خطة درس: الكيمياء الكهربية والخلايا الجلفانية وتآكل المعادن وقوانين فاراداي",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-CHEM-CH4-L1",
            "bloomsObjectivesEn": [
              "Calculate galvanic cell EMF and determine reaction spontaneity using standard potentials.",
              "Explain the electrochemical mechanism of iron rusting and evaluate cathodic sacrificial protection.",
              "Apply Faraday laws of electrolysis to calculate electrodeposited mass, current, and gas volumes."
            ],
            "bloomsObjectivesAr": [
              "حساب القوة الدافعة الكهربية وتحديد تلقائية تفاعلات الأكسدة والاختزال.",
              "تفسير الميكانيكية الكهروكيميائية لصدأ الحديد وتقييم الحماية بالقطب المضحي.",
              "تطبيق قوانين فاراداي لحساب كتل المواد المترسبة وحجوم الغازات المتصاعدة في التحليل الكهربي."
            ],
            "prerequisitesEn": [
              "Redox oxidation numbers",
              "Standard hydrogen electrode",
              "Electric circuit fundamentals"
            ],
            "prerequisitesAr": [
              "أعداد التأكسد والاختزال",
              "قطب الهيدروجين القياسي",
              "أساسيات الدوائر الكهربية"
            ],
            "keyVocabularyEn": [
              {
                "term": "Electromotive Force (EMF)",
                "definition": "Maximum potential difference generated between two half-cells in a galvanic cell."
              },
              {
                "term": "Sacrificial Anode",
                "definition": "More active metal connected to protect an iron structure by oxidizing preferentially."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "القوة الدافعة الكهربية (ق.د.ك)",
                "definition": "الفرق الأقصى في الجهد بين نصفي الخلية الجلفانية عند عدم سحب تيار كبير."
              },
              {
                "term": "القطب المضحي",
                "definition": "فلز نشط يتصل بالحديد ليتآكل بدلاً منه لحمايته من الصدأ (حماية أنودية)."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Electrochemical Series & Galvanic Cells",
                "phaseAr": "السلسلة الكهروكيميائية والخلايا الجلفانية",
                "duration": "35 mins",
                "activitiesEn": "Constructing half-cell reactions and calculating cell potentials for Daniell, fuel, and secondary cells.",
                "activitiesAr": "كتابة تفاعلات نصفي الخلية وحساب القوة الدافعة لخلية دانيال وخلايا الوقود والمركم."
              },
              {
                "phaseEn": "Corrosion Mechanism & Protection",
                "phaseAr": "ميكانيكية تآكل المعادن والوقاية",
                "duration": "25 mins",
                "activitiesEn": "Analyzing galvanic local couples in iron rusting and contrasting sacrificial vs cathodic protection.",
                "activitiesAr": "شرح تكوين الخلايا الجلفانية الموضعية المسببة للصدأ والتمييز بين الغطاءين الأنودي والكاثودي."
              },
              {
                "phaseEn": "Electrolytic Refining & Faraday Laws",
                "phaseAr": "التحليل الكهربي وقوانين فاراداي",
                "duration": "30 mins",
                "activitiesEn": "Solving Faraday electrodeposition problems and reviewing industrial aluminum and copper refining.",
                "activitiesAr": "حل مسائل قوانين فاراداي وتطبيقات الطلاء الكهربي واستخلاص الألومنيوم وتنقية النحاس."
              }
            ],
            "commonMisconceptionsEn": [
              "Forgetting that oxidizing diatomic gases (O2) requires 4 Faradays per mole, not 2.",
              "Assuming tin plating (anodic coating) protects iron better than zinc galvanizing if scratched."
            ],
            "commonMisconceptionsAr": [
              "نسيان أن تصعيد مول كامل من جزيئات غاز الأكسجين O2 يتطلب 4 فاراداي وليس 2 فاراداي.",
              "الاعتقاد الخاطئ بأن طلاء الحديد بالقصدير أفضل من جلفنته بالخارصين عند حدوث خدش."
            ],
            "differentiationEn": {
              "struggling": "Provide a step-by-step formula map converting grams to moles, gram-equivalents, and Coulombs.",
              "advanced": "Calculate the total thickness of copper plated onto a known surface area from electric current data."
            },
            "differentiationAr": {
              "struggling": "خريطة تحويل متدرجة توضح الانتقال بين الكتلة وعدد المولات والمكافئات الجرامية والكولوم.",
              "advanced": "حساب سمك طبقة النحاس المترسبة على لوح معدني ذي مساحة محددة بمعلومية الكثافة وشحنة التيار."
            },
            "formativeAssessmentEn": "Why does iron rust faster in seawater than in freshwater?",
            "formativeAssessmentAr": "علل: يصدأ الحديد في ماء البحر أسرع من صدئه في ماء الصنبور؟",
            "exitTicketQuestion": {
              "questionEn": "How many Faradays are required to deposit 10.8 g of silver (Ag = 108, z = 1)?",
              "questionAr": "كم فاراداي يلزم لترسيب ١٠,٨ جم من الفضة (الكتلة الذرية للفضة = ١٠٨، والتكافؤ = ١)؟",
              "solutionEn": "$m = \\frac{Q_{(\\text{F})} \\cdot M}{z} \\implies Q_{(\\text{F})} = \\frac{m \\cdot z}{M} = \\frac{10.8 \\times 1}{108} = 0.1\\,\\text{F}$.",
              "solutionAr": "$Q_{(\\text{F})} = \\frac{m \\times z}{M} = \\frac{١٠,٨ \\times ١}{١٠٨} = ٠,١\\,\\text{Faraday}$."
            }
          },
          "worksheet": {
            "id": "th_chem_ws_4",
            "titleEn": "Worksheet 4: Galvanic Cells, Corrosion & Faraday Electrolysis",
            "titleAr": "ورقة عمل ٤: الخلايا الجلفانية وصدأ المعادن وقوانين فاراداي",
            "descriptionEn": "Electrochemical cells, standard cell EMF determination, cathode/anode identification, and quantitative Faraday electrodeposition calculations.",
            "descriptionAr": "الخلايا الكهروكيميائية، حساب القوة الدافعة الكهربية، تحديد قطبي الأنود والكاثود، وحسابات قوانين فاراداي للتحليل الكهربي.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_chem_ws_p4_1",
                "titleEn": "Standard Cell Potential & Spontaneity of Daniell Cell Pair",
                "titleAr": "حساب جهد الخلية القياسي وتحديد الأنود لقطبي الخارصين والنحاس",
                "difficulty": "medium",
                "questionEn": "Given the standard reduction potentials: $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\,\\text{V}$ and $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\,\\text{V}$. What is the EMF of the galvanic cell combining these two electrodes, and which electrode serves as the anode?",
                "questionAr": "إذا علمت أن جهود الاختزال القياسية: $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\,\\text{V}$، و $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\,\\text{V}$. ما القوة الدافعة الكهربية للخلية الجلفانية المكونة منهما، وأي القطبين يمثل الأنود؟",
                "optionsEn": [
                  "$E_{\\text{cell}} = 1.10\\,\\text{V}$, Zinc is the anode",
                  "$E_{\\text{cell}} = 0.42\\,\\text{V}$, Copper is the anode",
                  "$E_{\\text{cell}} = -1.10\\,\\text{V}$, Zinc is the anode",
                  "$E_{\\text{cell}} = 1.10\\,\\text{V}$, Copper is the anode"
                ],
                "optionsAr": [
                  "$E_{\\text{cell}} = 1.10\\,\\text{V}$، والخارصين هو الأنود",
                  "$E_{\\text{cell}} = 0.42\\,\\text{V}$، والنحاس هو الأنود",
                  "$E_{\\text{cell}} = -1.10\\,\\text{V}$، والخارصين هو الأنود",
                  "$E_{\\text{cell}} = 1.10\\,\\text{V}$، والنحاس هو الأنود"
                ],
                "correctAnswer": "$E_{\\text{cell}} = 1.10\\,\\text{V}$, Zinc is the anode",
                "correctIndex": 0,
                "hintEn": "The electrode with the lower reduction potential (higher oxidation potential) undergoes oxidation at the anode.",
                "hintAr": "القطب ذو جهد الاختزال الأقل (جهد التأكسد الأكبر) تحدث له عملية أكسدة ويعمل كأنود.",
                "stepByStepSolutionEn": [
                  "Step 1: Zinc has lower reduction potential ($-0.76\\,\\text{V}$ vs $+0.34\\,\\text{V}$), so Zinc undergoes oxidation at the anode.",
                  "Step 2: $E_{\\text{ox}}(\\text{Zn}) = +0.76\\,\\text{V}$, and $E_{\\text{red}}(\\text{Cu}) = +0.34\\,\\text{V}$.",
                  "Step 3: $E_{\\text{cell}} = E_{\\text{ox}}(\\text{anode}) + E_{\\text{red}}(\\text{cathode}) = 0.76 + 0.34 = +1.10\\,\\text{V}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: قطب الخارصين له جهد اختزال أقل ($-0.76\\,\\text{V}$) وجهد تأكسد أكبر ($+0.76\\,\\text{V}$)، إذن الخارصين يتأكسد ويعمل كأنود.",
                  "الخطوة ٢: قطب النحاس له جهد اختزال أعلى ($+0.34\\,\\text{V}$)، إذن أيونات النحاس تختزل وتعمل ككاثود.",
                  "الخطوة ٣: القوة الدافعة للخلية $E_{\\text{cell}} = 0.76 + 0.34 = 1.10\\,\\text{V}$."
                ],
                "teacherTipEn": "Remember that in galvanic cells, oxidation always occurs at the negative anode.",
                "teacherTipAr": "في الخلايا الجلفانية تحدث الأكسدة دائماً عند القطب السالب وهو الأنود (المصعد)."
              },
              {
                "id": "th_chem_ws_p4_2",
                "titleEn": "Electric Charge Required for Diatomic Oxygen Evolution",
                "titleAr": "حساب كمية الكهرباء بالكولوم لتصعيد غاز الأكسجين ثنائي الذرة",
                "difficulty": "medium",
                "questionEn": "How many coulombs of electricity are required to liberate $0.5\\,\\text{mol}$ of oxygen gas ($\\text{O}_2$) during the electrolysis of acidified water?",
                "questionAr": "كم كولوم من الكهرباء تلزم لتصعيد $0.5\\,\\text{mol}$ من غاز الأكسجين ($\\text{O}_2$) أثناء التحليل الكهربي للماء المحمض؟",
                "optionsEn": [
                  "$96,500\\,\\text{C}$",
                  "$193,000\\,\\text{C}$",
                  "$48,250\\,\\text{C}$",
                  "$386,000\\,\\text{C}$"
                ],
                "optionsAr": [
                  "$96,500\\,\\text{C}$",
                  "$193,000\\,\\text{C}$",
                  "$48,250\\,\\text{C}$",
                  "$386,000\\,\\text{C}$"
                ],
                "correctAnswer": "$193,000\\,\\text{C}$",
                "correctIndex": 1,
                "hintEn": "Liberating 1 mole of O2 gas molecules requires 4 Faradays because oxygen is divalent and O2 is diatomic (2 x 2 = 4 F).",
                "hintAr": "لتصعيد مول واحد كامل من جزيئات غاز الأكسجين يلزم 4 فاراداي لأن الأكسجين ثنائي التكافؤ والجزيء ثنائي الذرة ($2 \\times 2 = 4\\,\\text{F}$).",
                "stepByStepSolutionEn": [
                  "Step 1: The liberation of $1\\,\\text{mol}$ of $\\text{O}_2$ gas requires $4\\,\\text{F}$ of charge ($2\\text{O}^{2-} \\to \\text{O}_2 + 4e^-$).",
                  "Step 2: For $0.5\\,\\text{mol}$ of $\\text{O}_2$: $Q = 0.5 \\times 4\\,\\text{F} = 2.0\\,\\text{F}$.",
                  "Step 3: Convert Faradays to Coulombs: $Q = 2.0 \\times 96,500\\,\\text{C} = 193,000\\,\\text{C}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: تفاعل تصعيد الأكسجين عند الأنود: $2\\text{O}^{2-} \\to \\text{O}_2 + 4e^-$، إذن تصعيد مول جزيء كامل من $\\text{O}_2$ يتطلب $4\\,\\text{Faraday}$.",
                  "الخطوة ٢: لتصعيد $0.5\\,\\text{mol}$ يلزم: $Q = 0.5 \\times 4 = 2.0\\,\\text{Faraday}$.",
                  "الخطوة ٣: التحويل إلى كولوم: $Q = 2.0 \\times 96,500 = 193,000\\,\\text{C}$."
                ],
                "teacherTipEn": "Take note of diatomic gaseous elements: O2 requires 4 F per mole, while Cl2 and H2 require 2 F per mole.",
                "teacherTipAr": "انتبه دوماً للغازات ثنائية الذرة: تصعيد 1 مول من H2 أو Cl2 يحتاج 2 فاراداي، بينما 1 مول من O2 يحتاج 4 فاراداي."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Interactive Galvanic Cell & Faraday Electrolyzer",
            "titleAr": "مختبر الخلايا الجلفانية وقوانين فاراداي التفاعلي",
            "descriptionEn": "Interactive electrochemical simulator for half-cell EMF calculations and Faraday electrodeposition rates.",
            "descriptionAr": "محاكاة تفاعلية لحساب القوة الدافعة الكهربية ومعدلات الترسيب بقوانين فاراداي للتحليل الكهربي."
          }
        },
      ],
      solvedExamples: thChemCh4SolvedExamples,
      exerciseProblems: thChemCh4Exercises,
      databank: chemCh4Databank
    },
    {
      id: 'th_chem_ch5',
      chapterNumber: 5,
      titleEn: 'Organic Chemistry: Hydrocarbons & Derivatives',
      titleAr: 'الكيمياء العضوية: الهيدروكربونات والمشتقات',
      descriptionEn: 'Wöhler synthesis, organic classification, alkanes, alkenes, Markovnikov addition rule, alkynes, benzene structure and electrophilic aromatic substitution, alcohols, phenols, carboxylic acids, and esters.',
      descriptionAr: 'تجربة فوهلر وسقوط نظرية القوى الحيوية، تصنيف الهيدروكربونات، الألكانات، الألكينات وقاعدة ماركونيكوف، الألكاينات، البنزين العطري وتفاعلات الاستبدال، الكحولات، الفينولات، الأحماض الكربوكسيلية، والإسترات.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "th_chem_l5",
          "titleEn": "Organic Chemistry: Hydrocarbons & Oxygenated Organic Derivatives",
          "titleAr": "الكيمياء العضوية: الهيدروكربونات والمشتقات الهيدروكربونية الأكسجينية",
          "summaryEn": "Wöhler synthesis, organic classification, alkanes, alkenes, Markovnikov addition rule, alkynes, benzene structure and electrophilic aromatic substitution, alcohols, phenols, carboxylic acids, and esters.",
          "summaryAr": "تجربة فوهلر وسقوط نظرية القوى الحيوية، تصنيف الهيدروكربونات، الألكانات، الألكينات وقاعدة ماركونيكوف، الألكاينات، البنزين العطري وتفاعلات الاستبدال، الكحولات، الفينولات، الأحماض الكربوكسيلية، والإسترات.",
          "theoryContentEn": "### 1. Fundamentals of Organic Chemistry & Hydrocarbons\n- **Wöhler's Historic Experiment (1828):**\n  Overthrew Berzelius's Vital Force Theory by synthesizing the organic compound **urea** from an inorganic salt (ammonium cyanate):\n  $\\text{NH}_4\\text{CNO} \\xrightarrow{\\Delta} \\text{CO(NH}_2)_2$\n- **Detection of C and H in Organic Compounds:**\n  Heating organic compound with black copper(II) oxide ($\\text{CuO}$):\n  - Hydrogen oxidizes to water ($\\text{H}_2\\text{O}$), turning white anhydrous copper(II) sulfate blue.\n  - Carbon oxidizes to carbon dioxide ($\\text{CO}_2$), which turns clear limewater turbid.\n\n---\n\n### 2. Aliphatic Open-Chain Hydrocarbons\n- **Alkanes (Paraffins, $\\text{C}_n\\text{H}_{2n+2}$):**\n  Saturated hydrocarbons with single covalent $\\sigma$-bonds (strong, unreactive).\n  - **Methane ($\\text{CH}_4$):** Prepared in laboratory by dry distillation of anhydrous sodium acetate with soda lime ($\\text{NaOH} + \\text{CaO}$, where $\\text{CaO}$ lowers the melting point of the mixture):\n    $\\text{CH}_3\\text{COONa} + \\text{NaOH} \\xrightarrow{\\text{CaO},\\, \\Delta} \\text{CH}_4\\uparrow + \\text{Na}_2\\text{CO}_3$\n  - Halogenation by substitution under ultraviolet (UV) light:\n    $\\text{CH}_4 \\xrightarrow[\\text{UV}]{+\\text{Cl}_2} \\text{CH}_3\\text{Cl} \\xrightarrow[\\text{UV}]{+\\text{Cl}_2} \\text{CH}_2\\text{Cl}_2 \\xrightarrow[\\text{UV}]{+\\text{Cl}_2} \\text{CHCl}_3 \\xrightarrow[\\text{UV}]{+\\text{Cl}_2} \\text{CCl}_4$\n- **Alkenes (Olefins, $\\text{C}_n\\text{H}_{2n}$):**\n  Unsaturated hydrocarbons with double bond ($1\\,\\sigma + 1\\,\\pi$).\n  - **Ethene ($\\text{C}_2\\text{H}_4$):** Prepared in lab by dehydration of ethanol with conc. $\\text{H}_2\\text{SO}_4$ at $180^\\circ\\text{C}$:\n    $\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow[180^\\circ\\text{C}]{\\text{conc. }\\text{H}_2\\text{SO}_4} \\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O}$\n  - **Markovnikov's Rule:**\n    When an asymmetrical reagent (like $\\text{HX}$ or $\\text{H}_2\\text{O}$) is added to an asymmetrical alkene, the positive hydrogen ion ($\\text{H}^+$) attaches to the double-bonded carbon bearing the greater number of hydrogen atoms (rich gets richer), and the negative radical attaches to the carbon with fewer hydrogen atoms.\n    $\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\text{HBr} \\to \\text{CH}_3-\\text{CH(Br)}-\\text{CH}_3 \\quad (\\text{2-bromopropane, NOT 1-bromopropane})$\n  - **Baeyer's Test:** Oxidation with cold alkaline potassium permanganate ($\\text{KMnO}_4$) decolors purple color, producing ethylene glycol (antifreeze):\n    $\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} + [\\text{O}] \\xrightarrow{\\text{alkaline }\\text{KMnO}_4} \\text{CH}_2(\\text{OH})-\\text{CH}_2(\\text{OH})$\n- **Alkynes (Acetylenes, $\\text{C}_n\\text{H}_{2n-2}$):**\n  - **Ethyne ($\\text{C}_2\\text{H}_2$):** Prepared by dropping water on calcium carbide: $\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{C}_2\\text{H}_2\\uparrow$.\n  - Oxyacetylene flame reaches $3000^\\circ\\text{C}$ for cutting and welding metals. Catalytic hydration of ethyne ($\\text{H}_2\\text{SO}_4/40\\% + \\text{HgSO}_4/60^\\circ\\text{C}$) yields acetaldehyde (ethanal, $\\text{CH}_3\\text{CHO}$).\n\n---\n\n### 3. Aromatic Hydrocarbons & Oxygenated Derivatives\n- **Benzene ($\\text{C}_6\\text{H}_6$):**\n  Six carbon ring with alternating double bonds in resonance stabilization (delocalized $\\pi$-electron cloud). Undergoes electrophilic aromatic substitution:\n  - Halogenation (with $\\text{FeCl}_3$ catalyst): yields chlorobenzene.\n  - Nitration (conc. $\\text{HNO}_3 + \\text{H}_2\\text{SO}_4$ at $50^\\circ\\text{C}$): yields nitrobenzene.\n  - Friedel-Crafts Alkylation ($\\text{CH}_3\\text{Cl}$ with anhydrous $\\text{AlCl}_3$): yields toluene (methylbenzene).\n  - Directing groups:\n    - Ortho/Para directors: $-\\text{OH}, -\\text{NH}_2, -\\text{R}, -\\text{X}$.\n    - Meta directors: $-\\text{NO}_2, -\\text{CHO}, -\\text{COOH}, -\\text{CO-R}$.\n- **Alcohols & Phenols:**\n  - Classification of alcohols by carbon attached to $-\\text{OH}$ (carbinol): primary ($-CH_2OH$), secondary ($-CH(OH)-$), tertiary ($-C(OH)-$).\n  - Oxidation: primary alcohols $\\to$ aldehydes $\\to$ carboxylic acids; secondary alcohols $\\to$ ketones; tertiary alcohols resist oxidation.\n  - **Phenol ($\\text{C}_6\\text{H}_5\\text{OH}$, Carbolic Acid):** More acidic than alcohols due to benzene ring electron withdrawal; reacts with $\\text{NaOH}$ to form sodium phenoxide, whereas alcohols do not react with $\\text{NaOH}$.\n- **Carboxylic Acids & Esters:**\n  - Esterification equilibrium:\n    $\\text{R-COOH} + \\text{R'-OH} \\xrightleftharpoons{\\text{conc. }\\text{H}_2\\text{SO}_4} \\text{R-COO-R'} + \\text{H}_2\\text{O}$\n  - Saponification (Alkaline Hydrolysis of Esters):\n    $\\text{Fat / Oil} + 3\\text{NaOH} \\to \\text{Soap} + \\text{Glycerol}$\n  - Aspirin (acetylsalicylic acid): reaction of salicylic acid with acetic acid; oil of wintergreen (methyl salicylate): salicylic acid with methanol.",
          "theoryContentAr": "### ١. أسس الكيمياء العضوية والهيدروكربونات\n- **تجربة فوهلر التاريخية (١٨٢٨م):**\n  حطمت نظرية القوى الحيوية لبرزيليوس بتحضير أول مركب عضوي وهو **اليوريا (البولينا)** معملياً بتسخين محلول مائي لمركبين غير عضويين (كلوريد الأمونيوم وسيانات الفضة):\n  $\\text{NH}_4\\text{CNO} \\xrightarrow{\\Delta} \\text{CO(NH}_2)_2$\n- **الكشف عن عنصري الكربون والهيدروجين في المركبات العضوية:**\n  تسخين المادة العضوية مع أكسيد النحاس II الأسود ($\\text{CuO}$): يتأكسد الهيدروجين إلى بخار ماء يحول كبريتات النحاس المائية اللامائية البيضاء إلى زرقاء، ويتأكسد الكربون إلى ثاني أكسيد كربون يعكر ماء الجير الرائق.\n\n---\n\n### ٢. الهيدروكربونات الأليفاتية مفتوحة السلسلة\n- **الألكانات (البارافينات، $\\text{C}_n\\text{H}_{2n+2}$):**\n  هيدروكربونات مشبعة بروابط أحادية قوية من النوع سيجما ($\\sigma$) صعبة الكسر.\n  - **الميثان ($\\text{CH}_4$):** يحضر في المختبر بالتقطير الجاف لأسيتات الصوديوم اللامائية مع الجير الصودي ($\\text{NaOH} + \\text{CaO}$ حيث يعمل $\\text{CaO}$ كمادة صاهرة تخفض درجة انصهار الخليط):\n    $\\text{CH}_3\\text{COONa} + \\text{NaOH} \\xrightarrow{\\text{CaO},\\, \\Delta} \\text{CH}_4\\uparrow + \\text{Na}_2\\text{CO}_3$\n  - تفاعلات الاستبدال بالهلجنة في وجود الأشعة فوق البنفسجية (UV) ينتج كلوروميثان ثم ثنائي كلوروميثان ثم الكلوروفورم ($\\text{CHCl}_3$) ثم رابع كلوريد الكربون ($\\text{CCl}_4$).\n- **الألكينات (الأوليفينات، $\\text{C}_n\\text{H}_{2n}$):**\n  غير مشبعة برابطة مزدوجة ($1\\,\\sigma + 1\\,\\pi$).\n  - **الإيثين ($\\text{C}_2\\text{H}_4$):** يحضر بنزع الماء من الكحول الإيثيلي بواسطة حمض الكبريتيك المركز عند $180^\\circ\\text{C}$.\n  - **قاعدة ماركونيكوف:** عند إضافة متفاعل غير متماثل (مثل $\\text{HX}$ أو $\\text{H}_2\\text{O}$) إلى ألكين غير متماثل، فإن الشق الموجب (الهيدروجين) يضاف إلى ذرة الكربون غير المشبعة الحاملة للعدد الأكبر من ذرات الهيدروجين، بينما يضاف الشق السالب إلى ذرة الكربون الحاملة لعدد أقل من الهيدروجين:\n    $\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\text{HBr} \\to \\text{CH}_3-\\text{CH(Br)}-\\text{CH}_3 \\quad (\\text{2-بروموبروبان})$\n  - **تفاعل باير:** أكسدة الإيثين بمحلول برمنجانات البوتاسيوم القلوية البنفسجية فيزول اللون ويتكون إيثيلين جليكول (مانع تجمد الماء في مبردات السيارات).\n- **الألكاينات (الأسيتيلينات، $\\text{C}_n\\text{H}_{2n-2}$):**\n  - **الإيثاين (الأسيتيلين):** يحضر بتنقيط الماء على كربيد الكالسيوم معملياً: $\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{C}_2\\text{H}_2\\uparrow$.\n  - لهب الأكسي أسيتيلين تصل حرارته إلى $3000^\\circ\\text{C}$ في لحام وقطع المعادن. الهيدرة الحفزية للإيثاين تعطي الأسيتالدهيد (الإيثانال $\\text{CH}_3\\text{CHO}$).\n\n---\n\n### ٣. الهيدروكربونات الأروماتية والمشتقات الأكسجينية\n- **البنزين العطري ($\\text{C}_6\\text{H}_6$):**\n  حلقة سداسية بروابط متبادلة وتمركز غير محدد لإلكترونات باي (رنين). يدخل تفاعلات الإحلال الإلكتروفيلي: الهلجنة، النيترة، الألكلة (تفاعل فريدل-كرافتس مع $\\text{CH}_3\\text{Cl}$ وكلوريد الألومنيوم اللامائي لإنتاج التولوين).\n  - المجموعات الموجهة للموضعين أرثو وبارا: $-\\text{OH}, -\\text{NH}_2, -\\text{R}, -\\text{X}$.\n  - المجموعات الموجهة للموضع ميتا: $-\\text{NO}_2, -\\text{CHO}, -\\text{COOH}, -\\text{CO-R}$.\n- **الكحولات والفينولات:**\n  - تصنيف الكحولات تبعا لذرة كربون الكاربينول: أولية (تتأكسد على خطوتين لألدهيد ثم حمض كربوكسيلي)، ثانوية (تتأكسد لكيتون)، ثالثية (تقاوم الأكسدة).\n  - **الفينول (حمض الكربوليك):** أكثر حامضية من الكحول لتأثير حلقة البنزين الساحبة للإلكترونات، لذا يتفاعل الفينول مع الصودا الكاوية بينما لا يتفاعل الكحول معها.\n- **الأحماض الكربوكسيلية والإسترات:**\n  - تفاعل القسطرة (تكوين الإستر): حمض كربوكسيلي $+$ كحول $\\xrightleftharpoons{\\text{حمض كبريتيك مركز}} \\text{إستر} + \\text{ماء}$.\n  - التصبن: التحلل المائي للإسترات في وسط قلوي يعطي الصابون والجلسرين.\n  - أهم الإسترات الطبية: الأسبرين (أسيتيل حمض الساليسيليك) ومروخ الزيت (ساليسيلات الميثيل).",
          "formulas": [
            {
              "labelEn": "General Formula of Hydrocarbon Families",
              "labelAr": "القوانين الجزيئية العامة لسلاسل الهيدروكربونات",
              "latex": "\\text{Alkanes: } \\text{C}_n\\text{H}_{2n+2}, \\quad \\text{Alkenes: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{Alkynes: } \\text{C}_n\\text{H}_{2n-2}"
            },
            {
              "labelEn": "Esterification Equilibrium Reaction",
              "labelAr": "معادلة تكوين الإستر (القسطرة)",
              "latex": "\\text{R-COOH} + \\text{R'-OH} \\xrightleftharpoons{\\text{conc. }\\text{H}_2\\text{SO}_4} \\text{R-COO-R'} + \\text{H}_2\\text{O}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Chemistry Textbook Grade 12",
            "bookTitleAr": "كتاب الكيمياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-CHEM-CH5-L1",
            "pageRange": "pp. 136 - 192"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Organic Chemistry: Hydrocarbons & Oxygenated Derivatives",
            "titleAr": "خطة درس: الكيمياء العضوية والهيدروكربونات والمشتقات الأكسجينية",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-CHEM-CH5-L1",
            "bloomsObjectivesEn": [
              "Classify hydrocarbons into alkanes, alkenes, alkynes, and aromatic benzene.",
              "Apply Markovnikov rule to asymmetrical electrophilic additions across double bonds.",
              "Distinguish chemical reactivities and acidities among alcohols, phenols, carboxylic acids, and esters."
            ],
            "bloomsObjectivesAr": [
              "تصنيف الهيدروكربونات إلى ألكانات وألكينات وألكاينات وهيدروكربونات أروماتية.",
              "تطبيق قاعدة ماركونيكوف على تفاعلات الإضافة غير المتماثلة للرابطة المزدوجة.",
              "التمييز بين الخواص الكيميائية والحامضية للكحولات والفينولات والأحماض العضوية والإسترات."
            ],
            "prerequisitesEn": [
              "Covalent bonding and hybridization",
              "Structural isomerism",
              "IUPAC nomenclature"
            ],
            "prerequisitesAr": [
              "الروابط التساهمية والتهجين",
              "التشابه الجزيئي (الأيزومورفيزم)",
              "تسمية المركبات بنظام الأيوباك"
            ],
            "keyVocabularyEn": [
              {
                "term": "Markovnikov Rule",
                "definition": "Addition rule where hydrogen attaches to the carbon with more hydrogen atoms in an asymmetrical alkene."
              },
              {
                "term": "Saponification",
                "definition": "Alkaline hydrolysis of fats or esters producing soap and glycerol."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "قاعدة ماركونيكوف",
                "definition": "عند إضافة متفاعل غير متماثل لألكين غير متماثل يضاف الهيدروجين لذرة الكربون الأكثر غنى بالهيدروجين."
              },
              {
                "term": "التصبن",
                "definition": "التحلل المائي للإستر في وسط قلوي هيدروكسيد صوديوم لتكوين ملح الحمض (الصابون) والكحول."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Aliphatic Hydrocarbons (Alkanes & Alkenes)",
                "phaseAr": "الهيدروكربونات الأليفاتية (الألكانات والألكينات)",
                "duration": "35 mins",
                "activitiesEn": "Analyzing methane substitution, ethene dehydration, and Markovnikov electrophilic addition.",
                "activitiesAr": "دراسة تحضير الميثان وهلجنته، ونزع الماء لتحضير الإيثين وتطبيق قاعدة ماركونيكوف."
              },
              {
                "phaseEn": "Alkynes & Aromatic Benzene",
                "phaseAr": "الألكاينات والبنزين العطري",
                "duration": "25 mins",
                "activitiesEn": "Comparing acetylene reactions with benzene resonance and electrophilic substitution.",
                "activitiesAr": "مقارنة تفاعلات الإيثاين بتفاعلات الاستبدال في حلقة البنزين وظاهرة الرنين."
              },
              {
                "phaseEn": "Oxygenated Derivatives: Alcohols to Esters",
                "phaseAr": "المشتقات الهيدروكربونية الأكسجينية",
                "duration": "30 mins",
                "activitiesEn": "Tracing oxidation pathways from alcohols to acids, and analyzing ester synthesis & saponification.",
                "activitiesAr": "تتبع مراحل أكسدة الكحولات وتفاعلات القسطرة والتصبن والأسبرين."
              }
            ],
            "commonMisconceptionsEn": [
              "Adding HBr to propene gives 2-bromopropane, NOT 1-bromopropane (Markovnikov rule).",
              "Thinking alcohols react with NaOH (only phenols and carboxylic acids react with NaOH)."
            ],
            "commonMisconceptionsAr": [
              "الظن بأن إضافة HBr للبروبين تنتج 1-بروموبروبان (الصحيح هو 2-بروموبروبان بقاعدة ماركونيكوف).",
              "الاعتقاد بأن الكحولات تتفاعل مع الصودا الكاوية NaOH (الفينولات والأحماض فقط هي التي تتفاعل معها)."
            ],
            "differentiationEn": {
              "struggling": "Use molecular building cards showing where the H and Br atoms attach during addition.",
              "advanced": "Outline the full multi-step synthesis of aspirin starting from benzene."
            },
            "differentiationAr": {
              "struggling": "استخدام نماذج جزيئية توضح ذرة الكربون الحاملة لأكبر عدد من الهيدروجين أثناء الإضافة.",
              "advanced": "تتبع مخطط تحضير الأسبرين ومروخ الزيت بدءاً من البنزين العطري على عدة خطوات."
            },
            "formativeAssessmentEn": "Why is phenol more acidic than ethyl alcohol?",
            "formativeAssessmentAr": "علل: الفينول أكثر حامضية من الكحول الإيثيلي؟",
            "exitTicketQuestion": {
              "questionEn": "What is the structural formula of the product formed by catalytic hydration of ethyne?",
              "questionAr": "ما هو الناتج المتكون من الهيدرة الحفزية للإيثاين (الأسيتيلين)؟",
              "solutionEn": "Ethyne catalytic hydration initially forms unstable vinyl alcohol, which rapidly isomerizes to acetaldehyde (ethanal, $\\text{CH}_3\\text{CHO}$).",
              "solutionAr": "الهيدرة الحفزية للإيثاين تعطي كحول الفينيل غير الثابت الذي يعاد ترتيب ذراته سريعاً إلى أسيتالدهيد (إيثانال $\\text{CH}_3\\text{CHO}$)."
            }
          },
          "worksheet": {
            "id": "th_chem_ws_5",
            "titleEn": "Worksheet 5: Organic Hydrocarbons, Markovnikov & Functional Groups",
            "titleAr": "ورقة عمل ٥: الهيدروكربونات العضوية وقاعدة ماركونيكوف والمجموعات الوظيفية",
            "descriptionEn": "Organic chemistry reaction pathways, Markovnikov addition to asymmetrical alkenes, and functional group acidity comparisons.",
            "descriptionAr": "مسارات التفاعلات العضوية، آلية إضافة ماركونيكوف للألكينات غير المتماثلة، ومقارنة حامضية المجموعات الوظيفية.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_chem_ws_p5_1",
                "titleEn": "Electrophilic Addition of HBr to Propene (Markovnikov Rule)",
                "titleAr": "إضافة بروميد الهيدروجين إلى البروبين وقاعدة ماركونيكوف",
                "difficulty": "medium",
                "questionEn": "What is the main organic product when hydrogen bromide ($\\text{HBr}$) is added to propene ($\\text{CH}_3-\\text{CH}=\\text{CH}_2$)?",
                "questionAr": "ما هو الناتج العضوي الرئيسي عند إضافة بروميد الهيدروجين ($\\text{HBr}$) إلى البروبين ($\\text{CH}_3-\\text{CH}=\\text{CH}_2$)؟",
                "optionsEn": [
                  "1-bromopropane",
                  "2-bromopropane",
                  "1,2-dibromopropane",
                  "Propyl alcohol"
                ],
                "optionsAr": [
                  "١-بروموبروبان",
                  "٢-بروموبروبان",
                  "١، ٢-ثنائي بروموبروبان",
                  "كحول بروبيلي"
                ],
                "correctAnswer": "2-bromopropane",
                "correctIndex": 1,
                "hintEn": "Apply Markovnikov rule: H attaches to the carbon with more hydrogen atoms (CH2), and Br attaches to CH.",
                "hintAr": "طبق قاعدة ماركونيكوف: يضاف الهيدروجين لذرة الكربون الحاملة لأكبر عدد من الهيدروجين (CH2)، والبروم لذرة الكربون الحاملة لهيدروجين أقل (CH).",
                "stepByStepSolutionEn": [
                  "Step 1: Propene $\\text{CH}_3-\\text{CH}=\\text{CH}_2$ is an asymmetrical alkene.",
                  "Step 2: By Markovnikov rule, the electrophilic proton $\\text{H}^+$ attaches to the carbon holding 2 hydrogens ($\\text{CH}_2$), forming a stable secondary carbocation.",
                  "Step 3: Bromide ion $\\text{Br}^-$ attacks the central carbon, yielding exclusively 2-bromopropane ($\\text{CH}_3-\\text{CH(Br)}-\\text{CH}_3$)."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: البروبين $\\text{CH}_3-\\text{CH}=\\text{CH}_2$ ألكين غير متماثل لاختلاف عدد ذرات الهيدروجين على طرفي الرابطة المزدوجة.",
                  "الخطوة ٢: طبقاً لقاعدة ماركونيكوف يضاف الهيدروجين إلى ذرة الكربون غير المشبعة الأكثر غنى بالهيدروجين ($\\text{CH}_2$).",
                  "الخطوة ٣: يضاف أيون البروميد السالب إلى ذرة الكربون الوسطية الحاملة لهيدروجين أقل ($\\text{CH}$)، فيتكون ٢-بروموبروبان فقط."
                ],
                "teacherTipEn": "Markovnikov rule applies exclusively to asymmetrical addition across asymmetrical double or triple bonds.",
                "teacherTipAr": "تطبق قاعدة ماركونيكوف فقط عند إضافة متفاعل غير متماثل (مثل HBr أو الماء) إلى ألكين غير متماثل."
              },
              {
                "id": "th_chem_ws_p5_2",
                "titleEn": "Acidity & NaOH Reactivity: Phenol vs Alcohols",
                "titleAr": "مقارنة الحامضية والتفاعل مع هيدروكسيد الصوديوم بين الفينول والإيثانول",
                "difficulty": "medium",
                "questionEn": "Which of the following compounds reacts with sodium hydroxide solution ($\\text{NaOH}$)?",
                "questionAr": "أي من المركبات العضوية الآتية يتفاعل مع محلول هيدروكسيد الصوديوم ($\\text{NaOH}$)؟",
                "optionsEn": [
                  "Ethanol",
                  "Phenol",
                  "Methane",
                  "Benzene"
                ],
                "optionsAr": [
                  "الإيثانول",
                  "الفينول",
                  "الميثان",
                  "البنزين العطري"
                ],
                "correctAnswer": "Phenol",
                "correctIndex": 1,
                "hintEn": "Phenol is more acidic than alcohols due to the resonance effect of the benzene ring weakening the O-H bond.",
                "hintAr": "الفينول يسمى بحمض الكربوليك وتزداد حامضيته بتأثير حلقة البنزين، فيتفاعل مع القلويات القوية مكوناً فينوكسيد الصوديوم.",
                "stepByStepSolutionEn": [
                  "Step 1: Alcohols like ethanol are extremely weak acids that react with active metals like sodium but do not react with strong bases like $\\text{NaOH}$.",
                  "Step 2: In phenol, the benzene ring withdraws electrons, shortening the $\\text{C-O}$ bond and lengthening/weakening the $\\text{O-H}$ bond, making proton release significantly easier.",
                  "Step 3: Hence, phenol behaves as carbolic acid and reacts readily with $\\text{NaOH}$ to form sodium phenoxide ($\\text{C}_6\\text{H}_5\\text{ONa}$) and water."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: الكحولات إلكتروليتات ضعيفة جداً وتتفاعل فقط مع الفلزات النشطة كالصوديوم ولا تتفاعل إطلاقاً مع القلويات مثل $\\text{NaOH}$.",
                  "الخطوة ٢: في الفينول، تقوم حلقة البنزين بسحب زوج إلكترونات ذرة الأكسجين، مما يقصر الرابطة C-O ويزيد طول وضعف الرابطة O-H فيسهل انفصال بروتون الهيدروجين.",
                  "الخطوة ٣: تزداد الصفة الحامضية للفينول ويسمى بحمض الكربوليك، ويتفاعل مع الصودا الكاوية $\\text{NaOH}$ مكوناً فينوكسيد الصوديوم والماء."
                ],
                "teacherTipEn": "Use NaOH to distinguish between phenol (reacts) and ethanol (does not react).",
                "teacherTipAr": "يستخدم هيدروكسيد الصوديوم للتفرقة العملية بين الفينول والإيثانول: يتفاعل مع الفينول ولا يتفاعل مع الإيثانول."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Interactive Organic Molecule & Reaction Mechanism Lab",
            "titleAr": "مختبر آليات التفاعلات العضوية وبناء الجزيئات التفاعلي",
            "descriptionEn": "Interactive 3D molecular builder demonstrating Markovnikov addition and functional group reactions.",
            "descriptionAr": "محاكاة تفاعلية ثلاثية الأبعاد لبناء الجزيئات العضوية وتتبع تفاعلات الإضافة والاستبدال وقاعدة ماركونيكوف."
          }
        }
      ],
      solvedExamples: thChemCh5SolvedExamples,
      exerciseProblems: thChemCh5Exercises,
      databank: chemCh5Databank
    }
  ]
};
