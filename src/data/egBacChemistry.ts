import type { Branch } from '../types/curriculum';

export const egBacChemistryBranch: Branch = {
  id: 'egbac_chemistry',
  titleEn: 'Advanced Chemistry (Physical & Analytical)',
  titleAr: 'الكيمياء المتقدمة (الفيزيائية والتحليلية STEM)',
  categoryEn: 'Advanced Sciences',
  categoryAr: 'العلوم المتقدمة',
  iconName: 'FlaskConical',
  colorGradient: 'from-emerald-600 to-teal-800',
  chapters: [
    {
      id: 'egbac_chem_ch1',
      chapterNumber: 1,
      titleEn: 'Chemical Kinetics, Reaction Rates & Chemical Equilibrium',
      titleAr: 'الحركية الكيميائية وسرعة التفاعلات والاتزان الكيميائي',
      descriptionEn: 'Reaction rate laws, differential and integrated rate equations, collision theory, activation energy, Arrhenius equation, dynamic equilibrium, equilibrium constants Kc and Kp, Le Chatelier principle, ionic equilibria, and buffer solutions.',
      descriptionAr: 'قوانين سرعة التفاعل، معادلات السرعة التفاضلية والتكاملية، نظرية التصادم، طاقة التنشيط ومعادلة أرهينيوس، الاتزان الكيميائي الديناميكي، ثوابت الاتزان Kc و Kp، قاعدة لوشاتيليه، الاتزان الأيوني، والمحاليل المنظمة (البفر).',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_chem_l1',
          titleEn: 'Kinetics, Collision Dynamics & Dynamic Equilibrium',
          titleAr: 'حركية التفاعلات وديناميكا التصادم والاتزان الكيميائي',
          summaryEn: 'Detailed investigation of rate laws $r = k[A]^m[B]^n$, half-life kinetics, Arrhenius activation barriers, equilibrium quotients $Q_c$ vs $K_c$, $K_p = K_c(RT)^{\\Delta n}$, Le Chatelier perturbations, and buffer Henderson-Hasselbalch relations.',
          summaryAr: 'دراسة متعمقة لقوانين سرعة التفاعل $r = k[A]^m[B]^n$، حركية عمر النصف، حواجز طاقة التنشيط لأرهينيوس، حاصل التفاعل $Q_c$ مقابل $K_c$، العلاقة $K_p = K_c(RT)^{\\Delta n}$، إزاحات لوشاتيليه، ومحاليل البفر المنظمة.',
          theoryContentEn: `### 1. Reaction Rates & Rate Laws
- **Reaction Rate Definition:** The change in concentration of a reactant or product per unit time:
  $$r = -\\frac{1}{a} \\frac{d[A]}{dt} = \\frac{1}{b} \\frac{d[B]}{dt}$$
  for the generic reaction $a A \\to b B$.
- **Differential Rate Law:**
  $$r = k [A]^m [B]^n$$
  where $k$ is the specific rate constant, and $m, n$ are the partial reaction orders (determined **experimentally**, not necessarily stoichiometric coefficients).
  - Overall reaction order: $n_{\\text{total}} = m + n$.
  - Units of $k$: $\\text{mol}^{1-(m+n)} \\cdot \\text{L}^{(m+n)-1} \\cdot \\text{s}^{-1}$.

### 2. Integrated Rate Laws & Half-Life
- **Zero-Order Reaction ($r = k$):**
  $$[A]_t = -k t + [A]_0 \\implies t_{1/2} = \\frac{[A]_0}{2k}$$
- **First-Order Reaction ($r = k[A]$):**
  $$\\ln[A]_t = -k t + \\ln[A]_0 \\implies [A]_t = [A]_0 e^{-k t}$$
  $$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k} \\quad (\\text{independent of } [A]_0)$$
- **Second-Order Reaction ($r = k[A]^2$):**
  $$\\frac{1}{[A]_t} = k t + \\frac{1}{[A]_0} \\implies t_{1/2} = \\frac{1}{k [A]_0}$$

### 3. Collision Theory & Arrhenius Equation
- **Collision Theory Conditions:** Reactant particles must collide with:
  1. Sufficient kinetic energy $\\ge E_a$ (Activation Energy).
  2. Proper steric spatial orientation.
- **Arrhenius Equation:**
  $$k = A \\cdot e^{-\\frac{E_a}{R T}}$$
  Linearized logarithmic form:
  $$\\ln k = -\\frac{E_a}{R} \\left(\\frac{1}{T}\\right) + \\ln A$$
  Two-temperature form:
  $$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$
  where $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, $T$ is temperature in Kelvin, and $A$ is the frequency pre-exponential factor.
- **Catalyst Action:** Provides an alternative reaction pathway with a lower activation energy ($E_a' < E_a$), accelerating both forward and reverse rates equally without altering $\\Delta H$ or the equilibrium constant $K$.

### 4. Dynamic Chemical Equilibrium & Equilibrium Constant
- For the reversible homogeneous gas reaction: $a A_{(g)} + b B_{(g)} \\rightleftharpoons c C_{(g)} + d D_{(g)}$:
  - Dynamic equilibrium occurs when: $r_{\\text{forward}} = r_{\\text{reverse}} > 0$.
  - Concentrations of reactants and products remain constant over time.
- **Concentration Equilibrium Constant ($K_c$):**
  $$K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$$
- **Partial Pressure Equilibrium Constant ($K_p$):**
  $$K_p = \\frac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b}$$
- **Relation between $K_p$ and $K_c$:**
  $$K_p = K_c (R T)^{\\Delta n_g}$$
  where $\\Delta n_g = (c + d) - (a + b)$ is the change in gaseous moles.
  - If $\\Delta n_g = 0 \\implies K_p = K_c$.

### 5. Le Chatelier's Principle & Perturbations
When a system at dynamic equilibrium is subjected to an external stress (change in concentration, pressure/volume, or temperature), it shifts in the direction that counteracts and relieves that stress:
1. **Concentration:** Adding reactant shifts equilibrium forward (right); removing product shifts forward. $K$ is unchanged.
2. **Pressure / Volume (Gases):** Decreasing volume (increasing total pressure) shifts equilibrium toward the side with **fewer moles of gas**. If $\\Delta n_g = 0$, pressure has no directional effect. $K$ is unchanged.
3. **Temperature:** **Only temperature alters the numerical value of $K$**:
   - For **Exothermic** reactions ($\\Delta H < 0$): Heat is a product ($A \\rightleftharpoons B + \\text{Heat}$). Heating shifts equilibrium left, decreasing $K$.
   - For **Endothermic** reactions ($\\Delta H > 0$): Heating shifts equilibrium right, increasing $K$.
4. **Catalysts:** Accelerate arrival at equilibrium but do **not** shift position or change $K$.

### 6. Ionic Equilibrium & Buffer Solutions
- **Water Auto-ionization:** $K_w = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$ at $25^\\circ\\text{C}$.
- **Weak Acid Ionization:** $K_a = \\frac{[\\text{H}_3\\text{O}^+][A^-]}{[HA]} \\implies \\text{pH} = \\frac{1}{2}(\\text{p}K_a - \\log C_a)$.
- **Henderson-Hasselbalch Buffer Equation:**
  $$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{Conjugate Base } A^-]}{[\\text{Weak Acid } HA]}\\right)$$
  Buffer solutions resist changes in $\\text{pH}$ upon addition of small quantities of strong acids or bases.`,
          theoryContentAr: `### ١. سرعة التفاعلات وقوانين السرعة
- **تعريف سرعة التفاعل:** مقدار التغير في تركيز المواد المتفاعلة أو الناتجة في وحدة الزمن:
  $$r = -\\frac{1}{a} \\frac{d[A]}{dt} = \\frac{1}{b} \\frac{d[B]}{dt}$$
  للتفاعل العام $a A \\to b B$.
- **قانون السرعة التفاضلي:**
  $$r = k [A]^m [B]^n$$
  حيث $k$ هو ثابت سرعة التفاعل النوعي، و $m, n$ رتب التفاعل الجزئية (تُحدد **عملياً بالتجربة** وليس بالضرورة من المعاملات التكافئية).
  - الرتبة الكلية للتفاعل: $n_{\\text{total}} = m + n$.
  - وحدة قياس $k$: $\\text{mol}^{1-(m+n)} \\cdot \\text{L}^{(m+n)-1} \\cdot \\text{s}^{-1}$.

### ٢. معادلات السرعة التكاملية وفترة عمر النصف
- **تفاعل الرتبة الصفرية ($r = k$):**
  $$[A]_t = -k t + [A]_0 \\implies t_{1/2} = \\frac{[A]_0}{2k}$$
- **تفاعل الرتبة الأولى ($r = k[A]$):**
  $$\\ln[A]_t = -k t + \\ln[A]_0 \\implies [A]_t = [A]_0 e^{-k t}$$
  $$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k} \\quad (\\text{ثابت لا يعتمد على التركيز الابتدائي } [A]_0)$$
- **تفاعل الرتبة الثانية ($r = k[A]^2$):**
  $$\\frac{1}{[A]_t} = k t + \\frac{1}{[A]_0} \\implies t_{1/2} = \\frac{1}{k [A]_0}$$

### ٣. نظرية التصادم ومعادلة أرهينيوس
- **شروط التصادم الفعال (المثمر):**
  ١. امتلاك الجزيئات المتصادمة طاقة حركة كافية تعادل أو تفوق طاقة التنشيط ($E \\ge E_a$).
  ٢. التوجه الفراغي المناسب للجزيئات لحظة التصادم.
- **معادلة أرهينيوس:**
  $$k = A \\cdot e^{-\\frac{E_a}{R T}}$$
  الصورة اللوغاريتمية الخطية:
  $$\\ln k = -\\frac{E_a}{R} \\left(\\frac{1}{T}\\right) + \\ln A$$
  لحساب طاقة التنشيط عند درجتي حرارة مختلفتين:
  $$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$
  حيث $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ ثابت الغازات العام، و $T$ درجة الحرارة المطلقة بالكلفن، و $E_a$ طاقة التنشيط بالجول/مول.
- **دور العامل الحفاز:** يوفر مساراً بديلاً للتفاعل بطاقة تنشيط أقل ($E_a' < E_a$) فيزيد من سرعة التفاعلين الطردي والعكسي بنفس المقدار، دون تغيير حرارة التفاعل $\\Delta H$ أو موضع الاتزان أو قيمة $K_c$.

### ٤. الاتزان الكيميائي الديناميكي وثوابت الاتزان
- للتفاعل الغازي المتجانس الانعكاسي: $a A_{(g)} + b B_{(g)} \\rightleftharpoons c C_{(g)} + d D_{(g)}$:
  - يتحقق الاتزان عندما: تتساوى سرعة التفاعل الطردي مع العكسي ($r_{\\text{forward}} = r_{\\text{reverse}} > 0$).
  - تثبت تركيزات المتفاعلات والنواتج مع استمرار حدوث التفاعلين في كلا الاتجاهين.
- **ثابت الاتزان بدلالة التركيزات المولارية ($K_c$):**
  $$K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$$
- **ثابت الاتزان بدلالة الضغوط الجزئية ($K_p$):**
  $$K_p = \\frac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b}$$
- **العلاقة الرابطة بين $K_p$ و $K_c$:**
  $$K_p = K_c (R T)^{\\Delta n_g}$$
  حيث $\\Delta n_g = (c + d) - (a + b)$ فرق عدد مولات الغازات في معادلتي النواتج والمتفاعلات.

### ٥. قاعدة لوشاتيليه والعوامل المؤثرة على الاتزان
إذا حَدَثَ تغيرٌ في أحد الشروط المؤثرة على نظام متزن كيميائياً (مثل التركيز، أو الضغط/الحجم، أو درجة الحرارة)، فإن النظام يُزيح موضع اتزانه في الاتجاه الذي يُقلل أو يُلغي تأثير هذا التغير:
١. **التركيز:** زيادة متفاعل تزحزح الاتزان طردياً؛ سحب ناتج يزحزحه طردياً. قيمة $K$ تظل ثابتة.
٢. **الضغط والحجم:** تقليل الحجم (زيادة الضغط الكلي) يُزيح الاتزان نحو الطرف ذي **عدد المولات الغازية الأقل**. إذا كان $\\Delta n_g = 0$، فلا أثر للضغط على الاتزان.
٣. **درجة الحرارة:** **درجة الحرارة هي العامل الوحيد الذي يغير القيمة العددية لثابت الاتزان $K$**:
   - التفاعل **الطارد للحرارة** ($\\Delta H < 0$): رفع الحرارة يزيح الاتزان عكسياً وتقل قيمة $K$.
   - التفاعل **الماص للحرارة** ($\\Delta H > 0$): رفع الحرارة يزيح الاتزان طردياً وتزداد قيمة $K$.

### ٦. الاتزان الأيوني والمحاليل المنظمة (البفر)
- **معادلة هندرسون-هاسلبالخ لمحلول بفر حمضي:**
  $$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{الملح المشتق / القاعدة المرافقة}]}{[\\text{الحمض الضعيف}]}\\right)$$
  تقاوم محاليل البفر التغير المفاجئ في الرقم الهيدروجيني $\\text{pH}$ عند إضافة كميات محدودة من أحماض أو قواعد قوية.`,
          formulas: [
            { labelEn: 'Differential Rate Law', labelAr: 'قانون السرعة التفاضلي', latex: 'r = k [A]^m [B]^n' },
            { labelEn: 'First-Order Half-Life', labelAr: 'فترة عمر النصف لتفاعلات الرتبة الأولى', latex: 't_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}' },
            { labelEn: 'Arrhenius Activation Energy', labelAr: 'معادلة أرهينيوس لطاقة التنشيط', latex: 'k = A \\cdot e^{-\\frac{E_a}{R T}}' },
            { labelEn: 'Kp and Kc Conversion', labelAr: 'علاقة التحويل بين Kp و Kc', latex: 'K_p = K_c (R T)^{\\Delta n_g}' },
            { labelEn: 'Henderson-Hasselbalch Buffer Relation', labelAr: 'معادلة هندرسون-هاسلبالخ لمحاليل البفر', latex: '\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[A^-]}{[HA]}\\right)' }
          ],
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced Chemistry & Physical Equilibrium',
            bookTitleAr: 'مرجع الكيمياء المتقدمة والاتزان الفيزيائي - البكالوريا المصرية',
            grade: 'Grade 12 STEM',
            term: 'Full Year',
            officialCode: 'EGBAC-CHEM-ADV-CH1',
            pageRange: 'pp. 85 - 134'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Chemical Kinetics, Reaction Rates & Dynamic Equilibrium',
            titleAr: 'خطة درس: الحركية الكيميائية وسرعة التفاعلات والاتزان الديناميكي',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'EGBAC-CHEM-ADV-CH1',
            bloomsObjectivesEn: [
              'Derive and differentiate reaction orders (zero, first, second) using initial rates and half-life analysis.',
              'Calculate activation energy Ea using the two-temperature Arrhenius equation.',
              'Evaluate equilibrium shifts under combined concentration, volume, and temperature stresses using Le Chatelier principle.',
              'Formulate Henderson-Hasselbalch equations to design buffer systems at target pH.'
            ],
            bloomsObjectivesAr: [
              'استنتاج رتب التفاعل (الصفرية، الأولى، الثانية) من جداول السرعات الابتدائية وفترات عمر النصف.',
              'حساب طاقة التنشيط Ea باستخدام معادلة أرهينيوس عند درجتي حرارة مختلفتين.',
              'تقييم إزاحات الاتزان تحت التأثيرات المتزامنة لتغير الحجم ودرجة الحرارة وفق قاعدة لوشاتيليه.',
              'استخدام معادلة هندرسون-هاسلبالخ لتصميم وضبط محاليل البفر المنظمة عند pH محدد.'
            ],
            prerequisitesEn: [
              'Stoichiometry and molarity calculations.',
              'Basic chemical kinetics and equilibrium concepts.',
              'Logarithmic algebraic manipulations.'
            ],
            prerequisitesAr: [
              'الحسابات الكيميائية والمولارية.',
              'مفاهيم سرعة التفاعل والاتزان الأساسية.',
              'العمليات الجبرية للوغاريتمات والأسس.'
            ],
            keyVocabularyEn: [
              { term: 'Activation Energy (Ea)', definition: 'Minimum kinetic energy required for colliding molecules to undergo a chemical reaction.' },
              { term: 'Dynamic Equilibrium', definition: 'State where the forward and reverse rates are equal and reactant/product concentrations remain invariant.' }
            ],
            keyVocabularyAr: [
              { term: 'طاقة التنشيط', definition: 'الحد الأدنى من طاقة الحركة التي يجب أن تمتلكها الجزيئات عند التصادم لكي تتفاعل.' },
              { term: 'الاتزان الديناميكي', definition: 'حالة يتساوى عندها معدل التفاعل الطردي مع العكسي وتثبت عندها تركيزات المواد المتفاعلة والناتجة.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Differential and Integrated Rate Laws',
                phaseAr: 'قوانين السرعة التفاضلية والتكاملية',
                duration: '20 mins',
                activitiesEn: 'Analyzing initial rate tables and deriving zero-, first-, and second-order half-lives.',
                activitiesAr: 'تحليل جداول السرعات الابتدائية واستنتاج فترات عمر النصف لرتب التفاعل المختلفة.'
              },
              {
                phaseEn: 'Collision Theory & Arrhenius Equation',
                phaseAr: 'نظرية التصادم ومعادلة أرهينيوس',
                duration: '25 mins',
                activitiesEn: 'Plotting ln k versus 1/T to determine activation energy from slope.',
                activitiesAr: 'رسم العلاقة بين ln k ومقلوب درجة الحرارة المطلقة لحساب طاقة التنشيط من الميل.'
              },
              {
                phaseEn: 'Dynamic Equilibrium & Le Chatelier Perturbations',
                phaseAr: 'الاتزان الديناميكي واضطرابات لوشاتيليه',
                duration: '25 mins',
                activitiesEn: 'Solving coupled temperature and volume shifts on gaseous Haber synthesis.',
                activitiesAr: 'حل مسائل الإزاحة المزدوجة لتغيرات الضغط والحرارة على تفاعل هابر الغازي.'
              },
              {
                phaseEn: 'Ionic Equilibrium & Buffer Solutions',
                phaseAr: 'الاتزان الأيوني ومحاليل البفر',
                duration: '20 mins',
                activitiesEn: 'Applying Henderson-Hasselbalch equations to buffer mixtures.',
                activitiesAr: 'تطبيق معادلة هندرسون-هاسلبالخ لحساب pH محاليل البفر المنظمة.'
              }
            ],
            commonMisconceptionsEn: [
              'Students assume reaction orders must match stoichiometric coefficients in the balanced equation.',
              'Students think adding a catalyst increases the numerical value of Kc.'
            ],
            commonMisconceptionsAr: [
              'اعتقاد الطلاب أن رتب التفاعل يجب أن تطابق بالضرورة معاملات المعادلة الكيميائية الموزونة.',
              'ظن الطلاب أن إضافة العامل الحفاز تزيد من قيمة ثابت الاتزان Kc.'
            ],
            differentiationEn: {
              struggling: 'Provide a step-by-step ratio chart for finding reaction order from doubled initial rates.',
              advanced: 'Derive the pre-exponential frequency factor A from transition-state Eyring equation.'
            },
            differentiationAr: {
              struggling: 'تقديم جدول خطوات مبسط لمقارنة مضاعفة التركيزات واستنتاج رتبة التفاعل.',
              advanced: 'استنتاج معامل التردد A من نظرية الحالة الانتقالية لمعادلة أيرينج.'
            },
            formativeAssessmentEn: 'Given initial rates with doubled concentrations, find partial reaction orders.',
            formativeAssessmentAr: 'استنتاج رتب التفاعل الجزئية عند مضاعفة تركيزات المتفاعلات في جدول تجريبي.',
            exitTicketQuestion: {
              questionEn: 'Why does adding an inert gas at constant volume to a gaseous equilibrium mixture cause NO shift in equilibrium position?',
              questionAr: 'علل: إضافة غاز خامل عند ثبوت الحجم إلى خليط غازي متزن لا يُحدث أي إزاحة في موضع الاتزان؟',
              solutionEn: 'Because partial pressures of reacting gases remain constant when volume and temperature are unchanged.',
              solutionAr: 'لأن الضغوط الجزئية للغازات المتفاعلة والناتجة تظل ثابتة لثبوت الحجم ودرجة الحرارة.'
            }
          },
          worksheet: {

            id: 'egbac_chem_ws1',
            titleEn: 'Worksheet: Chemical Kinetics & Dynamic Equilibrium Masterclass',
            titleAr: 'ورقة عمل: الحركية الكيميائية وإتقان الاتزان الديناميكي',
            descriptionEn: 'Rigorous analytical problems on reaction orders, activation energy, Kp conversions, and buffer pH shifts.',
            descriptionAr: 'مسائل تدريبية متقدمة في استنتاج رتب التفاعل وحساب طاقة التنشيط وتحويلات ثوابت الاتزان والرقم الهيدروجيني لمحاليل البفر.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'egbac_chem_ws_p1',
                titleEn: 'Determination of Rate Law from Initial Rates',
                titleAr: 'استنتاج قانون السرعة من السرعات الابتدائية',
                difficulty: 'medium',
                questionEn: 'For the reaction $2 NO_{(g)} + O_{2(g)} \\to 2 NO_{2(g)}$, doubling $[NO]$ while keeping $[O_2]$ constant quadruples the rate. Doubling $[O_2]$ while keeping $[NO]$ constant doubles the rate. What is the overall reaction order and the rate law?',
                questionAr: 'للتفاعل $2 NO_{(g)} + O_{2(g)} \\to 2 NO_{2(g)}$، أدى مضاعفة تركيز $[NO]$ مع ثبوت $[O_2]$ إلى زيادة سرعة التفاعل ٤ مرات. وأدى مضاعفة $[O_2]$ مع ثبوت $[NO]$ إلى مضاعفة السرعة مرتين. ما قانون السرعة والرتبة الكلية؟',
                optionsEn: [
                  'Rate $= k [NO]^2 [O_2]$, Overall order = 3',
                  'Rate $= k [NO] [O_2]$, Overall order = 2',
                  'Rate $= k [NO]^2 [O_2]^2$, Overall order = 4',
                  'Rate $= k [NO] [O_2]^2$, Overall order = 3'
                ],
                optionsAr: [
                  'السرعة $= k [NO]^2 [O_2]$، الرتبة الكلية = ٣',
                  'السرعة $= k [NO] [O_2]$، الرتبة الكلية = ٢',
                  'السرعة $= k [NO]^2 [O_2]^2$، الرتبة الكلية = ٤',
                  'السرعة $= k [NO] [O_2]^2$، الرتبة الكلية = ٣'
                ],
                correctAnswer: 'Rate $= k [NO]^2 [O_2]$, Overall order = 3',
                correctIndex: 0,
                hintEn: 'Rate ratio $\\frac{r_2}{r_1} = \\left(\\frac{[NO]_2}{[NO]_1}\\right)^m \\implies 4 = 2^m \\implies m = 2$.',
                hintAr: 'نسبة السرعات: $\\frac{r_2}{r_1} = (2)^m = 4 \\implies m = 2$، وبالنسبة للأكسجين $(2)^n = 2 \\implies n = 1$.',
                stepByStepSolutionEn: [
                  'Let the rate law be $r = k [NO]^m [O_2]^n$.',
                  'When $[NO]$ is doubled at constant $[O_2]$: $2^m = 4 \\implies m = 2$ (second-order in $NO$).',
                  'When $[O_2]$ is doubled at constant $[NO]$: $2^n = 2 \\implies n = 1$ (first-order in $O_2$).',
                  'Rate law is $r = k [NO]^2 [O_2]$ and overall order is $m + n = 2 + 1 = 3$.'
                ],
                stepByStepSolutionAr: [
                  'نفرض قانون السرعة: $r = k [NO]^m [O_2]^n$.',
                  'بمضاعفة $[NO]$: $2^m = 4 \\implies m = 2$ (الرتبة الثانية بالنسبة لأكسيد النيتريك).',
                  'بمضاعفة $[O_2]$: $2^n = 2 \\implies n = 1$ (الرتبة الأولى بالنسبة للأكسجين).',
                  'إذن قانون السرعة: $r = k [NO]^2 [O_2]$، والرتبة الكلية $2 + 1 = 3$.'
                ],
                teacherTipEn: 'Notice that in this particular reaction the empirical rate law matches the stoichiometry, but this is a coincidence resulting from the termolecular-like pre-equilibrium mechanism.',
                teacherTipAr: 'لاحظ أن الرتب هنا طابقت المعاملات بالمصادفة بسبب ميكانيكية الاتزان الأولي السريع للمركب الوسيط $N_2O_2$.'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'Le Chatelier Chemical Equilibrium Simulator',
            titleAr: 'محاكي اتزان لوشاتيليه وحركية التفاعلات',
            descriptionEn: 'Interactive simulation testing temperature changes, pressure variations, and concentration perturbations on reversible reactions.',
            descriptionAr: 'محاكاة تفاعلية لاختبار تغيرات الحرارة والضغط والتركيز على الأنظمة الكيميائية المتزنة.'
          }
        }
      ],
      solvedExamples: [
        {
          id: 'egbac_chem_se_01',
          titleEn: 'Example 1: Converting Kc to Kp for Haber-Bosch Ammonia Synthesis',
          titleAr: 'مثال ١: تحويل ثابت التركيز Kc إلى ثابت الضغط Kp لتخليق النشادر',
          difficulty: 'medium',
          questionEn: 'For the synthesis of ammonia: $N_{2(g)} + 3 H_{2(g)} \\rightleftharpoons 2 NH_{3(g)}$ at $500\\text{ K}$, $K_c = 0.50\\text{ L}^2/\\text{mol}^2$. Calculate $K_p$ at this temperature (use $R = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$).',
          questionAr: 'لتفاعل تخليق غاز النشادر: $N_{2(g)} + 3 H_{2(g)} \\rightleftharpoons 2 NH_{3(g)}$ عند درجة $500\\text{ كلفن}$، كانت قيمة $K_c = 0.50$. احسب قيمة $K_p$ عند نفس درجة الحرارة (استخدم $R = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$).',
          optionsEn: ['$2.96 \\times 10^{-4}\\text{ atm}^{-2}$', '$8.41 \\times 10^{-2}\\text{ atm}^{-2}$', '$845\\text{ atm}^{-2}$', '$1.22 \\times 10^{-5}\\text{ atm}^{-2}$'],
          optionsAr: ['$2.96 \\times 10^{-4}\\text{ atm}^{-2}$', '$8.41 \\times 10^{-2}\\text{ atm}^{-2}$', '$845\\text{ atm}^{-2}$', '$1.22 \\times 10^{-5}\\text{ atm}^{-2}$'],
          correctAnswer: '$2.96 \\times 10^{-4}\\text{ atm}^{-2}$',
          correctIndex: 0,
          hintEn: 'Use $K_p = K_c (R T)^{\\Delta n_g}$ where $\\Delta n_g = 2 - (1 + 3) = -2$.',
          hintAr: 'طبق القانون $K_p = K_c (R T)^{\\Delta n_g}$ حيث $\\Delta n_g = 2 - (1 + 3) = -2$.',
          stepByStepSolutionEn: [
            'Change in gas moles: $\\Delta n_g = n_{\\text{products}} - n_{\\text{reactants}} = 2 - (1 + 3) = -2$.',
            'Compute $R T = 0.0821 \\times 500 = 41.05\\text{ L}\\cdot\\text{atm}/\\text{mol}$.',
            'Calculate $K_p = K_c \\cdot (R T)^{-2} = \\frac{0.50}{(41.05)^2} = \\frac{0.50}{1685.1} \\approx 2.967 \\times 10^{-4}\\text{ atm}^{-2}$.'
          ],
          stepByStepSolutionAr: [
            'فرق عدد مولات الغاز: $\\Delta n_g = 2 - (1 + 3) = -2$.',
            'حساب المقدار $R T = 0.0821 \\times 500 = 41.05$.',
            'تطبيق العلاقة: $K_p = K_c \\cdot (R T)^{-2} = \\frac{0.50}{(41.05)^2} = \\frac{0.50}{1685.1} \\approx 2.967 \\times 10^{-4}$.'
          ],
          teacherTipEn: 'When Delta n_g is negative, Kp is numerically much smaller than Kc, which is why industrial synthesis requires high pressures (200 atm).',
          teacherTipAr: 'عندما تكون دلتا n سالبة، تكون Kp أصغر بكثير من Kc، ولهذا يجرى تصنيع الأمونيا صناعياً تحت ضغوط مرتفعة جداً (حوالي 200 ضغط جوي).'
        },
        {
          id: 'egbac_chem_se_02',
          titleEn: 'Example 2: Henderson-Hasselbalch Buffer pH Calculation',
          titleAr: 'مثال ٢: حساب الرقم الهيدروجيني لمحلول منظم حمضي',
          difficulty: 'easy',
          questionEn: 'A buffer solution contains $0.20\\text{ M } CH_3COOH$ ($K_a = 1.8 \\times 10^{-5}$, $\\text{p}K_a = 4.74$) and $0.30\\text{ M } CH_3COONa$. Calculate the pH of the buffer solution.',
          questionAr: 'محلول منظم يحتوي على حمض الأسيتيك $CH_3COOH$ بتركيز $0.20\\text{ مولار}$ ($\text{p}K_a = 4.74$) وأسيتات الصوديوم $CH_3COONa$ بتركيز $0.30\\text{ مولار}$. احسب الرقم الهيدروجيني $\\text{pH}$ للمحلول.',
          optionsEn: ['$\\text{pH} = 4.92$', '$\\text{pH} = 4.56$', '$\\text{pH} = 5.20$', '$\\text{pH} = 4.74$'],
          optionsAr: ['$\\text{pH} = 4.92$', '$\\text{pH} = 4.56$', '$\\text{pH} = 5.20$', '$\\text{pH} = 4.74$'],
          correctAnswer: '$\\text{pH} = 4.92$',
          correctIndex: 0,
          hintEn: 'Apply $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right)$.',
          hintAr: 'طبق معادلة هندرسون-هاسلبالخ: $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{الملح}]}{[\\text{الحمض}]}\\right)$.',
          stepByStepSolutionEn: [
            'Henderson-Hasselbalch equation: $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[CH_3COO^-]}{[CH_3COOH]}\\right)$.',
            'Substitute values: $\\text{pH} = 4.74 + \\log\\left(\\frac{0.30}{0.20}\\right) = 4.74 + \\log(1.5)$.',
            'Since $\\log(1.5) \\approx 0.176$, $\\text{pH} = 4.74 + 0.176 = 4.916 \\approx 4.92$.'
          ],
          stepByStepSolutionAr: [
            'معادلة هندرسون-هاسلبالخ: $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[CH_3COO^-]}{[CH_3COOH]}\\right)$.',
            'التعويض بالقيم: $\\text{pH} = 4.74 + \\log\\left(\\frac{0.30}{0.20}\\right) = 4.74 + \\log(1.5)$.',
            'بما أن $\\log(1.5) \\approx 0.176$، إذن $\\text{pH} = 4.74 + 0.176 = 4.916 \\approx 4.92$.'
          ],
          teacherTipEn: 'Because conjugate base concentration exceeds acid concentration, the pH is slightly higher than pKa.',
          teacherTipAr: 'نظراً لأن تركيز القاعدة المرافقة (الملح) أعلى من تركيز الحمض الضعيف، فإن pH يكون أعلى قليلاً من pKa.'
        }
      ],
      exerciseProblems: [
        {
          id: 'egbac_chem_ue_01',
          titleEn: 'Arrhenius Activation Energy from Two Rate Constants',
          titleAr: 'حساب طاقة التنشيط من ثابتي سرعة عند درجتي حرارة مختلفتين',
          difficulty: 'medium',
          questionEn: 'The rate constant of a reaction is $k_1 = 0.020\\text{ s}^{-1}$ at $300\\text{ K}$ and $k_2 = 0.080\\text{ s}^{-1}$ at $320\\text{ K}$. Calculate the activation energy $E_a$ in $\\text{kJ/mol}$ ($R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$).',
          questionAr: 'بلغ ثابت سرعة تفاعل $k_1 = 0.020\\text{ ث}^{-1}$ عند درجة $300\\text{ كلفن}$ وارتفع إلى $k_2 = 0.080\\text{ ث}^{-1}$ عند $320\\text{ كلفن}$. احسب طاقة التنشيط $E_a$ بوحدة $\\text{kJ/mol}$ (علماً بأن $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$).',
          optionsEn: ['$55.3\\text{ kJ/mol}$', '$27.8\\text{ kJ/mol}$', '$110.6\\text{ kJ/mol}$', '$14.2\\text{ kJ/mol}$'],
          optionsAr: ['$55.3\\text{ كيلوجول/مول}$', '$27.8\\text{ كيلوجول/مول}$', '$110.6\\text{ كيلوجول/مول}$', '$14.2\\text{ كيلوجول/مول}$'],
          correctAnswer: '$55.3\\text{ kJ/mol}$',
          correctIndex: 0,
          hintEn: 'Use $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$.',
          hintAr: 'طبق صيغة أرهينيوس: $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$.',
          stepByStepSolutionEn: [
            'Calculate $\\ln(k_2 / k_1) = \\ln(0.080 / 0.020) = \\ln(4) \\approx 1.3863$.',
            'Temperature difference term: $\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{320 - 300}{300 \\times 320} = \\frac{20}{96000} = 2.0833 \\times 10^{-4}\\text{ K}^{-1}$.',
            'Solve for $E_a$: $E_a = \\frac{R \\cdot \\ln(k_2/k_1)}{2.0833 \\times 10^{-4}} = \\frac{8.314 \\times 1.3863}{2.0833 \\times 10^{-4}} \\approx 55322\\text{ J/mol} = 55.3\\text{ kJ/mol}$.'
          ],
          stepByStepSolutionAr: [
            'حساب النسبة: $\\ln(k_2 / k_1) = \\ln(4) \\approx 1.3863$.',
            'فرق مقلوب درجتي الحرارة: $\\frac{1}{300} - \\frac{1}{320} = \\frac{20}{96000} = 2.0833 \\times 10^{-4}\\text{ كلفن}^{-1}$.',
            'حساب طاقة التنشيط: $E_a = \\frac{8.314 \\times 1.3863}{2.0833 \\times 10^{-4}} \\approx 55322\\text{ جول/مول} = 55.3\\text{ كيلوجول/مول}$.'
          ],
          teacherTipEn: 'A general rule of thumb in general chemistry is that reaction rates double approximately every 10 K rise for Ea around 50 kJ/mol.',
          teacherTipAr: 'قاعدة تقريبية شائعة: تتضاعف سرعة التفاعل تقريباً كلما ارتفعت الحرارة 10 درجات مئوية إذا كانت طاقة التنشيط في حدود 50 كيلوجول/مول.'
        }
      ],
      databank: {
        easy: [
          {
            id: 'egbac_chem_db_easy_01',
            titleEn: 'Catalytic Effect on Equilibrium Constant',
            titleAr: 'أثر العامل الحفاز على ثابت الاتزان',
            difficulty: 'easy',
            questionEn: 'What is the exact effect of introducing a solid catalyst into a reversible gaseous reaction at dynamic equilibrium?',
            questionAr: 'ما هو الأثر الدقيق لإضافة عامل حفاز صلب إلى تفاعل غازي انعكاسي في حالة اتزان ديناميكي؟',
            optionsEn: [
              'It accelerates both forward and reverse rates equally, leaving the equilibrium position and Kc completely unchanged',
              'It increases the numerical value of Kc',
              'It shifts equilibrium exclusively toward the products side',
              'It decreases the total activation energy and increases the enthalpy change of reaction'
            ],
            optionsAr: [
              'يزيد سرعة التفاعلين الطردي والعكسي بنفس المقدار ويبقى موضع الاتزان وقيمة Kc دون أي تغيير',
              'يزيد من القيمة العددية لثابت الاتزان Kc',
              'يزيح موضع الاتزان تماماً نحو جهة النواتج',
              'يقلل طاقة التنشيط ويزيد من التغير في المحتوى الحراري للتفاعل'
            ],
            correctAnswer: 'It accelerates both forward and reverse rates equally, leaving the equilibrium position and Kc completely unchanged',
            correctIndex: 0,
            hintEn: 'Catalysts alter kinetic rates by lowering the activation barrier, but do not change thermodynamics or equilibrium constants.',
            hintAr: 'العامل الحفاز يسرع الوصول للاتزان بخفض طاقة التنشيط، لكنه لا يؤثر على ديناميكا التفاعل أو قيمة ثابت الاتزان.'
          ,
            stepByStepSolutionEn: [
              'A catalyst lowers the activation energy for both the forward and reverse reactions by the exact same amount $\\Delta E_a$.',
              'Therefore, $k_{\\text{forward}}$ and $k_{\\text{reverse}}$ are multiplied by the same factor.',
              'Since $K_c = \\frac{k_{\\text{forward}}}{k_{\\text{reverse}}}$, the equilibrium constant remains entirely unchanged.'
            ],
            stepByStepSolutionAr: [
              'يخفض العامل الحفاز طاقة التنشيط لكلا الاتجاهين الطردي والعكسي بنفس المقدار تماماً.',
              'لذلك يتضاعف ثابتا السرعة $k_{\\text{forward}}$ و $k_{\\text{reverse}}$ بنفس المعامل.',
              'بما أن $K_c = \\frac{k_{\\text{forward}}}{k_{\\text{reverse}}}$، فإن موضع الاتزان وقيمة $K_c$ لا تتغير مطلقاً.'
            ],
            teacherTipEn: 'Always emphasize that only temperature can alter the numerical value of an equilibrium constant K.',
            teacherTipAr: 'أكد دائماً أن درجة الحرارة هي المتغير الوحيد الذي يغير القيمة العددية لثابت الاتزان K.'
          }
        ],
        medium: [
          {
            id: 'egbac_chem_db_med_01',
            titleEn: 'Equilibrium Constant Expression for Heterogeneous Decomposition',
            titleAr: 'تعبير ثابت الاتزان لتفكك غير متجانس',
            difficulty: 'medium',
            questionEn: 'For the heterogeneous thermal decomposition reaction $CaCO_{3(s)} \\rightleftharpoons CaO_{(s)} + CO_{2(g)}$, which statement accurately represents the equilibrium constant $K_p$ at temperature $T$?',
            questionAr: 'لتفاعل التفكك الحراري غير المتجانس $CaCO_{3(s)} \\rightleftharpoons CaO_{(s)} + CO_{2(g)}$، أي عبارة تمثل بدقة ثابت الاتزان $K_p$ عند درجة حرارة $T$؟',
            optionsEn: [
              '$K_p = P_{CO_2}$ (depends solely on the partial pressure of carbon dioxide gas)',
              '$K_p = \\frac{P_{CaO} \\cdot P_{CO_2}}{P_{CaCO_3}}$',
              '$K_p = \\frac{P_{CO_2}}{[CaCO_3]}$',
              '$K_p = (P_{CO_2})^2$'
            ],
            optionsAr: [
              '$K_p = P_{CO_2}$ (يعتمد حصراً على الضغط الجزئي لغاز ثاني أكسيد الكربون)',
              '$K_p = \\frac{P_{CaO} \\cdot P_{CO_2}}{P_{CaCO_3}}$',
              '$K_p = \\frac{P_{CO_2}}{[CaCO_3]}$',
              '$K_p = (P_{CO_2})^2$'
            ],
            correctAnswer: '$K_p = P_{CO_2}$ (depends solely on the partial pressure of carbon dioxide gas)',
            correctIndex: 0,
            hintEn: 'Pure solids and liquids have constant concentrations and their thermodynamic activities equal 1.',
            hintAr: 'المواد الصلبة النقية تكون فعاليتها الكيميائية مساوية للواحد الصحيح وتُحذف من تعبير ثابت الاتزان.'
          ,
            stepByStepSolutionEn: [
              'In heterogeneous equilibria, pure solids ($CaCO_3$ and $CaO$) have an activity of 1 because their densities and concentrations are invariant.',
              'Therefore, they are excluded from the equilibrium expression.',
              'The equilibrium constant in terms of partial pressures is simply $K_p = P_{CO_2}$.'
            ],
            stepByStepSolutionAr: [
              'في الاتزان غير المتجانس، المواد الصلبة والسائلة النقية تحذف من قانون فعل الكتلة لأن كثافتها ثابتة ونشاطها يساوي 1.',
              'لذلك لا يظهر $CaCO_3$ أو $CaO$ في التعبير.',
              'ويكون ثابت الاتزان ببساطة مساوياً للضغط الجزئي للغاز الناتج: $K_p = P_{CO_2}$.'
            ],
            teacherTipEn: 'Adding more solid CaCO3 into the closed vessel will not alter the equilibrium pressure of CO2.',
            teacherTipAr: 'إضافة المزيد من كربونات الكالسيوم الصلبة إلى الوعاء المغلق لن يغير ضغط غاز ثاني أكسيد الكربون عند الاتزان.'
          }
        ],
        hots: [
          {
            id: 'egbac_chem_db_hots_01',
            titleEn: 'Simultaneous Stress Shifts on Exothermic Haber Synthesis',
            titleAr: 'تأثير الإجهاد المتزامن على تفاعل تخليق النشادر الطارد للحرارة',
            difficulty: 'hots',
            questionEn: 'Consider the Haber equilibrium: $N_{2(g)} + 3 H_{2(g)} \\rightleftharpoons 2 NH_{3(g)} + 92.4\\text{ kJ}$. If the volume of the reaction vessel is halved while the temperature is simultaneously increased by $100\\text{ K}$, what is the definitive impact on the equilibrium constant $K_c$ and the yield of $NH_3$?',
            questionAr: 'لتفاعل هابر المتزن: $N_{2(g)} + 3 H_{2(g)} \\rightleftharpoons 2 NH_{3(g)} + 92.4\\text{ kJ}$. إذا قُلِّص حجم الوعاء إلى النصف وفي نفس اللحظة رُفعت درجة الحرارة بمقدار $100\\text{ كلفن}$، ما التأثير الحتمي على ثابت الاتزان $K_c$ ونسبة النواتج؟',
            optionsEn: [
              '$K_c$ definitely decreases because the reaction is exothermic; while compression favors $NH_3$ formation, heating drives the reaction in reverse',
              '$K_c$ increases because compression forces particles closer together',
              '$K_c$ remains invariant because volume reduction cancels out temperature elevation',
              'The yield of $NH_3$ must unequivocally increase due to Le Chatelier volume reduction dominance'
            ],
            optionsAr: [
              'ينخفض $K_c$ حتماً لأن التفاعل طارد للحرارة؛ وبينما يشجع تقليص الحجم تكوين $NH_3$، فإن رفع الحرارة يزيح التفاعل عكسياً',
              'يزداد $K_c$ لأن تقليص الحجم يقارب الجزيئات ويزيد سرعة التفاعل',
              'يظل $K_c$ ثابتاً لأن نقص الحجم يعوض تماماً زيادة درجة الحرارة',
              'نسبة الأمونيا تزداد بشكل قاطع وحتمي بسبب غلبة تأثير تقليص الحجم وفق لوشاتيليه'
            ],
            correctAnswer: '$K_c$ definitely decreases because the reaction is exothermic; while compression favors $NH_3$ formation, heating drives the reaction in reverse',
            correctIndex: 0,
            hintEn: 'Pressure changes never alter Kc; only temperature alters Kc. For exothermic reactions, heating reduces Kc.',
            hintAr: 'تغير الضغط لا يغير أبداً من قيمة ثابت الاتزان Kc. فقط درجة الحرارة هي التي تغيره، وفي التفاعلات الطاردة رفع الحرارة يقلل Kc.'
          ,
            stepByStepSolutionEn: [
              'Effect on $K_c$: Volume/pressure perturbations do NOT change the equilibrium constant $K_c$. Since the forward reaction is exothermic ($\\Delta H = -92.4\\text{ kJ}$), increasing temperature supplies heat to the product side, driving equilibrium in reverse and strictly **decreasing** $K_c$.',
              'Effect on directional shift: Halving volume increases total pressure, favoring the forward direction (4 gas moles $\\to$ 2 gas moles). However, heating drives it backward.',
              'The net yield depends on the relative magnitudes of the two opposing effects, but $K_c$ unambiguously and strictly decreases.'
            ],
            stepByStepSolutionAr: [
              'التأثير على $K_c$: تغير الحجم أو الضغط لا يغير من القيمة العددية لثابت الاتزان أبداً. وبما أن التفاعل طارد للحرارة ($\\Delta H < 0$)، فإن رفع درجة الحرارة يزود النظام بحرارة ناتجة مما يزيح الاتزان عكسياً ويقلل قيمة $K_c$ حتماً.',
              'التأثير الاتجاهي: تقليل الحجم يزيد الضغط فيشجع الاتجاه الطردي (٤ مولات غاز $\\to$ ٢ مول غاز)، بينما رفع الحرارة يشجع الاتجاه العكسي.',
              'الناتج النهائي لتركيز $NH_3$ يتنازعه عاملان متعاكسان، ولكن $K_c$ يقل بصورة قاطعة لا لبس فيها.'
            ],
            teacherTipEn: 'Industrial Haber plants compromise at 450-500 deg C: higher temperature gives acceptable catalytic reaction rate despite lowering theoretical equilibrium yield.',
            teacherTipAr: 'تعمل مصانع هابر عند حرارة وسطية (450-500 مئوية) كحل وسط: الحرارة المرتفعة تمنح سرعة تفاعل كافية رغم أنها تقلل نسبة المحصول عند الاتزان.'
          }
        ]
      }
    }
  ]
};
