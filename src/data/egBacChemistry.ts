import type { Branch } from '../types/curriculum';
import { egBacChemCh1Databank } from './databanks/egbac/egBacChemCh1Databank';
import { egBacChemCh2Databank } from './databanks/egbac/egBacChemCh2Databank';
import { egBacChemCh3Databank } from './databanks/egbac/egBacChemCh3Databank';
import { egBacChemCh4Databank } from './databanks/egbac/egBacChemCh4Databank';
import { egBacChemCh5Databank } from './databanks/egbac/egBacChemCh5Databank';

export const egBacChemistryBranch: Branch = {
  id: 'egbac_chemistry',
  titleEn: 'Chemistry (Natural Sciences)',
  titleAr: 'الكيمياء (العلوم الطبيعية)',
  categoryEn: 'Natural Sciences',
  categoryAr: 'العلوم الطبيعية',
  iconName: 'FlaskConical',
  colorGradient: 'from-emerald-500 to-teal-700',
  chapters: [
    {
      id: 'egbac_chem_ch1',
      chapterNumber: 1,
      titleEn: 'Chemical Kinetics, Reaction Rates & Collision Dynamics',
      titleAr: 'الحركية الكيميائية ومعدلات التفاعل وديناميكا التصادم',
      descriptionEn: 'Reaction rate laws, rate constants, reaction orders, Arrhenius equation, activation energy, Maxwell-Boltzmann molecular distributions, and catalyst mechanisms.',
      descriptionAr: 'قوانين سرعة التفاعل الكيميائي، ثابت السرعة، رتب التفاعل، معادلة أرينيوس وطاقة التنشيط، توزيعات ماكسويل-بولتزمان، وآليات عمل الحفازات.',
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
        },
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
      databank: egBacChemCh1Databank
    },
    {
      id: 'egbac_chem_ch2',
      chapterNumber: 2,
      titleEn: "Advanced Dynamic Equilibrium, Le Chatelier Shifts & van 't Hoff Relation",
      titleAr: 'الاتزان الديناميكي المتقدم وتغيرات لوشاتيليه ومعادلة فانت هوف',
      descriptionEn: "Homogeneous and heterogeneous equilibria, equilibrium constants (Kc, Kp), reaction quotient Q, Le Chatelier's principle under pressure/temperature shifts, and van 't Hoff equation.",
      descriptionAr: 'الاتزان المتجانس وغير المتجانس، ثوابت الاتزان، حاصل التفاعل، قاعدة لوشاتيليه عند تغير الضغط ودرجة الحرارة، ومعادلة فانت هوف.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "egbac_chem_l2",
          "titleEn": "Advanced Dynamic Equilibrium: Le Chatelier Shifts, Reaction Quotient Q & van 't Hoff Relation",
          "titleAr": "الاتزان الكيميائي الديناميكي المتقدم: إزاحات لوشاتيليه، حاصل التفاعل Q وعلاقة فانت هوف",
          "summaryEn": "Thermodynamic equilibrium constant, reaction quotient Q vs K, gas-phase Kp relations, van 't Hoff temperature dependence, and multi-stress Le Chatelier perturbations in industrial reactors.",
          "summaryAr": "ثابت الاتزان الديناميكي الحراري، مقارنة حاصل التفاعل Q مع ثابت الاتزان K، علاقات Kp للغازات، معادلة فانت هوف لاعتماد الثابت على الحرارة، وإزاحات لوشاتيليه في المفاعلات الصناعية.",
          "theoryContentEn": "### 1. Thermodynamic Equilibrium Constant & Reaction Quotient ($Q$)\nFor a generalized reversible reaction $a A + b B \\rightleftharpoons c C + d D$:\n- **Reaction Quotient ($Q$):**\n  Has the identical mathematical form as the equilibrium constant, but evaluated using non-equilibrium instantaneous activities or concentrations:\n  $Q_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$\n  - If $Q < K$: The forward reaction proceeds spontaneously ($A + B \\to C + D$) until equilibrium is attained.\n  - If $Q = K$: The system is at dynamic equilibrium; no net macroscopic change occurs.\n  - If $Q > K$: The reverse reaction proceeds spontaneously ($C + D \\to A + B$) to consume excess products.\n\n---\n\n### 2. Gas-Phase Equilibria: $K_c$ and $K_p$\nFor gaseous reactions with partial pressures $P_i = [i] R T$:\n$K_p = \\frac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b} = K_c (R T)^{\\Delta n_g}$\nwhere $\\Delta n_g = (c + d) - (a + b)$ is the net change in gaseous stoichiometric coefficients.\n- If $\\Delta n_g = 0$: $K_p = K_c$, and pressure perturbations have zero effect on equilibrium position.\n- If $\\Delta n_g \\neq 0$: Increasing total pressure shifts the system toward the side with fewer gas moles.\n\n---\n\n### 3. Temperature Dependence & The van 't Hoff Equation\nTemperature is the sole thermodynamic state variable that alters the numerical magnitude of $K$.\nFrom the Gibbs-Helmholtz relation ($\\frac{d \\ln K}{d T} = \\frac{\\Delta H^\\circ}{R T^2}$), integrating between temperatures $T_1$ and $T_2$ gives the **van 't Hoff Equation**:\n$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$\n- **Endothermic Reaction ($\\Delta H^\\circ > 0$):** Heating ($T_2 > T_1$) increases $\\ln(K_2 / K_1) > 0 \\implies K_2 > K_1$.\n- **Exothermic Reaction ($\\Delta H^\\circ < 0$):** Heating ($T_2 > T_1$) decreases $\\ln(K_2 / K_1) < 0 \\implies K_2 < K_1$.\n\n---\n\n### 4. Coupled Equilibria & Industrial Multi-Phase Optimization\n- **Haber-Bosch Synthesis:** $N_2(g) + 3 H_2(g) \\rightleftharpoons 2 NH_3(g), \\, \\Delta H^\\circ = -92.4\\,\\text{kJ/mol}$.\n  High pressure ($150 - 250\\,\\text{atm}$) maximizes equilibrium yield ($Delta n_g = -2$), while an optimal compromise temperature ($400 - 450^\\circ\\text{C}$) paired with a promoted iron catalyst balances thermodynamic yield with reaction kinetics.\n- **Contact Process for $\\text{SO}_3$:** $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$ over vanadium(V) oxide ($\\text{V}_2\\text{O}_5$).",
          "theoryContentAr": "### ١. ثابت الاتزان الديناميكي وحاصل التفاعل ($Q$)\nلأي تفاعل كيميائي انعكاسي عام $a A + b B \\rightleftharpoons c C + d D$:\n- **حاصل التفاعل ($Q$):**\n  له نفس الصيغة الرياضية لثابت الاتزان ولكن يحسب عند أي لحظة زمنية من التفاعل:\n  $Q_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$\n  - إذا كان $Q < K$: ينشط التفاعل تلقائياً في **الاتجاه الطردي** لتكوين النواتج.\n  - إذا كان $Q = K$: النظام في حالة **اتزان ديناميكي تام**.\n  - إذا كان $Q > K$: ينشط التفاعل تلقائياً في **الاتجاه العكسي** لاستهلاك الزيادة من النواتج.\n\n---\n\n### ٢. اتزان الغازات والعلاقة بين $K_c$ و $K_p$\nبدلالة الضغوط الجزئية للغازات $P_i$:\n$K_p = K_c (R T)^{\\Delta n_g}$\nحيث $\\Delta n_g$ هو التغير في عدد مولات المواد الغازية.\n- عندما $\\Delta n_g = 0$: تكون $K_p = K_c$ ولا يؤثر تغير الضغط على موضع الاتزان.\n- عندما $\\Delta n_g \\neq 0$: زيادة الضغط تزيح النظام نحو الطرف ذي عدد المولات الغازية الأقل.\n\n---\n\n### ٣. تأثير درجة الحرارة ومعادلة فانت هوف\nدرجة الحرارة هي العامل الوحيد الذي يغير القيمة العددية لثابت الاتزان $K$.\nباشتقاق معادلة جيبس-هلمهولتز نحصل على **معادلة فانت هوف**:\n$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$\n- **التفاعل الماص للحرارة ($\\Delta H^\\circ > 0$):** برفع درجة الحرارة تزداد قيمة $K_2 > K_1$.\n- **التفاعل الطارد للحرارة ($\\Delta H^\\circ < 0$):** برفع درجة الحرارة تقل قيمة $K_2 < K_1$.\n\n---\n\n### ٤. الاتزان المقترن والتطبيقات الصناعية\n- **تخليق الأمونيا بطريقة هابر-بوش:**\n  زيادة الضغط إلى $200\\,\\text{atm}$ تزيد من إنتاج الأمونيا لأن $\\Delta n_g = -2$، بينما يضبط المفاعل عند حرارة متوسطة ($450^\\circ\\text{C}$) مع حفاز الحديد لضمان سرعة تفاعل كافية مع اتزان مقبول.",
          "formulas": [
            {
              "labelEn": "Gas-Phase Equilibrium Relation",
              "labelAr": "علاقة ثابتي الاتزان الغازي Kp و Kc",
              "latex": "K_p = K_c (R T)^{\\Delta n_g}"
            },
            {
              "labelEn": "van 't Hoff Isochore Equation",
              "labelAr": "معادلة فانت هوف لتغير ثابت الاتزان بالحرارة",
              "latex": "\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)"
            }
          ],
          "moeRef": {
            "bookTitleEn": "EG-Bac Advanced Chemistry & Physical Equilibrium",
            "bookTitleAr": "مرجع الكيمياء المتقدمة والاتزان الفيزيائي - البكالوريا المصرية",
            "grade": "Grade 12 STEM",
            "term": "Full Year",
            "officialCode": "EGBAC-CHEM-ADV-CH1-L2",
            "pageRange": "pp. 135 - 180"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Advanced Chemical Equilibrium, Reaction Quotient & van 't Hoff Energetics",
            "titleAr": "خطة درس: الاتزان الكيميائي المتقدم، حاصل التفاعل Q ومعادلة فانت هوف",
            "gradeLevel": "Grade 12 Advanced Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-CHEM-ADV-CH1-L2",
            "bloomsObjectivesEn": [
              "Evaluate reaction spontaneity and directional shift by comparing instantaneous Q with K.",
              "Derive Kp from Kc and gaseous stoichiometry under non-standard pressures.",
              "Apply the van 't Hoff equation to calculate enthalpy changes delta H from temperature-dependent K values."
            ],
            "bloomsObjectivesAr": [
              "تحديد اتجاه التفاعل التلقائي بمقارنة حاصل التفاعل Q مع ثابت الاتزان K.",
              "حساب Kp بدلالة Kc والتغير في عدد المولات الغازية delta n.",
              "تطبيق معادلة فانت هوف لحساب حرارة التفاعل القياسية من قيم ثوابت الاتزان عند درجات حرارة مختلفة."
            ],
            "prerequisitesEn": [
              "Law of mass action",
              "Ideal gas law (PV = nRT)",
              "Thermochemical enthalpy equations"
            ],
            "prerequisitesAr": [
              "قانون فعل الكتلة",
              "قانون الغاز المثالي",
              "المعادلات الكيميائية الحرارية وحسابات المحتوى الحراري"
            ],
            "keyVocabularyEn": [
              {
                "term": "Reaction Quotient (Q)",
                "definition": "Ratio of instantaneous product concentrations to reactant concentrations at any state away from equilibrium."
              },
              {
                "term": "van 't Hoff Equation",
                "definition": "Mathematical relationship quantifying how chemical equilibrium constants shift with temperature."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "حاصل التفاعل (Q)",
                "definition": "النسبة بين حاصل ضرب تركيزات النواتج إلى المتفاعلات في أي لحظة غير متزنة."
              },
              {
                "term": "معادلة فانت هوف",
                "definition": "علاقة ديناميكية حرارية تربط التغير في ثابت الاتزان الكيميائي مع التغير في درجات الحرارة."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Reaction Quotient & Directional Shifts",
                "phaseAr": "حاصل التفاعل وتحديد اتجاه الإزاحة",
                "duration": "25 mins",
                "activitiesEn": "Calculating Q from experimental initial concentrations and predicting equilibrium approach.",
                "activitiesAr": "حساب حاصل التفاعل ومقارنته مع K لتوقع اتجاه النشاط الطردي أو العكسي."
              },
              {
                "phaseEn": "Gas-Phase Kp & Total Pressure Stress",
                "phaseAr": "اتزان الغازات Kp وتأثير الضغط الكلي",
                "duration": "35 mins",
                "activitiesEn": "Converting between Kp and Kc and modeling volume perturbation on gas equilibria.",
                "activitiesAr": "التحويل بين Kp و Kc ودراسة تأثير تغير حجم الوعاء على الضغوط الجزئية."
              },
              {
                "phaseEn": "van 't Hoff Thermodynamic Modeling",
                "phaseAr": "تطبيق معادلة فانت هوف الديناميكية",
                "duration": "30 mins",
                "activitiesEn": "Plotting ln(K) vs 1/T to extract reaction enthalpy delta H from slope.",
                "activitiesAr": "رسم العلاقة البيانية بين ln(K) ومقلوب درجة الحرارة المطلقة لحساب المحتوى الحراري."
              }
            ],
            "commonMisconceptionsEn": [
              "Confusing Q with K: Q varies continuously throughout the reaction; K is a fixed constant at a given temperature.",
              "Assuming adding inert gas at constant volume shifts equilibrium (inert gas changes total pressure but does NOT alter reactant partial pressures)."
            ],
            "commonMisconceptionsAr": [
              "الخلط بين Q و K: حاصل التفاعل Q يتغير لحظياً بينما ثابت الاتزان K قيمة ثابتة لا تتغير إلا بتغير الحرارة.",
              "الظن بأن إضافة غاز خامل عند ثبوت الحجم يزيح موضع الاتزان (الغاز الخامل يغير الضغط الكلي فقط ولا يغير الضغوط الجزئية للمتفاعلات)."
            ],
            "differentiationEn": {
              "struggling": "Use a visual scale balance showing Q < K tilting toward products, and Q > K tilting toward reactants.",
              "advanced": "Derive the van 't Hoff equation starting from the differential form of Delta G = -RT ln K."
            },
            "differentiationAr": {
              "struggling": "استخدام ميزان كفتين توضيحي: كفة Q ترجح جهة المتفاعلات عندما تكون أقل من K وجهة النواتج عندما تزيد.",
              "advanced": "استنتاج معادلة فانت هوف رياضياً من معادلة طاقة جيبس الحرة وتفاضل جيبس-هلمهولتز."
            },
            "formativeAssessmentEn": "What happens to the equilibrium concentration of NO2 if the volume of the container containing 2 NO2 <=> N2O4 is halved?",
            "formativeAssessmentAr": "ماذا يحدث لموضع الاتزان ولتركيز NO2 عند خفض حجم الوعاء المحتوي على 2 NO2 <=> N2O4 إلى النصف؟",
            "exitTicketQuestion": {
              "questionEn": "For the reaction N2(g) + 3 H2(g) <=> 2 NH3(g), Kc = 0.50 M^-2 at 400 K. Calculate Kp (R = 0.0821 L atm / mol K).",
              "questionAr": "في تفاعل هابر: N2 + 3 H2 <=> 2 NH3، إذا كانت Kc = 0.50 عند 400 كلفن، احسب قيمة Kp.",
              "solutionEn": "$\\Delta n_g = 2 - (1 + 3) = -2$. $K_p = K_c (R T)^{\\Delta n_g} = 0.50 \\times (0.0821 \\times 400)^{-2} = 0.50 \\times (32.84)^{-2} = \\frac{0.50}{1078.47} \\approx 4.64 \\times 10^{-4}\\,\\text{atm}^{-2}$.",
              "solutionAr": "$\\Delta n_g = 2 - 4 = -2$. $K_p = K_c (R T)^{-2} = 0.50 \\times (0.0821 \\times 400)^{-2} \\approx 4.64 \\times 10^{-4}\\,\\text{atm}^{-2}$."
            }
          },
          "worksheet": {
            "id": "egbac_chem_ws_2",
            "titleEn": "Worksheet 2: Advanced Chemical Equilibrium & Reaction Quotient",
            "titleAr": "ورقة عمل ٢: الاتزان الكيميائي المتقدم وحاصل التفاعل ومعادلة فانت هوف",
            "descriptionEn": "Rigorous quantitative problems on reaction quotient Q, gas-phase Kp transformations, and van 't Hoff thermodynamic calculations.",
            "descriptionAr": "مسائل تدريبية متقدمة على حاصل التفاعل Q وتحويلات ثوابت الاتزان الغازي ومعادلة فانت هوف.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_chem_ws_p2_1",
                "titleEn": "Predicting Directional Shift using Reaction Quotient Q",
                "titleAr": "توقع اتجاه التفاعل باستخدام حاصل التفاعل Q",
                "difficulty": "medium",
                "questionEn": "For the reaction: $H_2(g) + I_2(g) \\rightleftharpoons 2 HI(g)$ at $448^\\circ\\text{C}$, $K_c = 50.0$. If a reaction vessel contains $[H_2] = 0.020\\,\\text{M}$, $[I_2] = 0.020\\,\\text{M}$, and $[HI] = 0.20\\,\\text{M}$, which direction will the reaction proceed?",
                "questionAr": "في التفاعل المتزن: $H_2(g) + I_2(g) \\rightleftharpoons 2 HI(g)$ عند $448^\\circ\\text{C}$، قيمة $K_c = 50.0$. إذا كان الوعاء يحتوي على $[H_2] = 0.020\\,\\text{M}$ و $[I_2] = 0.020\\,\\text{M}$ و $[HI] = 0.20\\,\\text{M}$، في أي اتجاه سينشط التفاعل؟",
                "optionsEn": [
                  "Reverse direction ($Q_c = 100 > K_c$)",
                  "Forward direction ($Q_c = 10 < K_c$)",
                  "System is at dynamic equilibrium ($Q_c = K_c$)",
                  "No reaction can occur"
                ],
                "optionsAr": [
                  "في الاتجاه العكسي لأن $Q_c = 100 > K_c$",
                  "في الاتجاه الطردي لأن $Q_c = 10 < K_c$",
                  "النظام في حالة اتزان ديناميكي لأن $Q_c = K_c$",
                  "لا يحدث أي تفاعل"
                ],
                "correctAnswer": "Reverse direction ($Q_c = 100 > K_c$)",
                "correctIndex": 0,
                "hintEn": "Calculate Q_c = [HI]^2 / ([H2] * [I2]) and compare with K_c = 50.",
                "hintAr": "احسب حاصل التفاعل: Q_c = [HI]^2 / ([H2] * [I2]) وقارن الناتج بقيمة Kc = 50.",
                "stepByStepSolutionEn": [
                  "Step 1: Write the reaction quotient expression: $Q_c = \\frac{[HI]^2}{[H_2] [I_2]}$.",
                  "Step 2: Substitute instantaneous concentrations: $Q_c = \\frac{(0.20)^2}{(0.020)(0.020)} = \\frac{0.040}{0.00040} = 100$.",
                  "Step 3: Compare $Q_c$ and $K_c$: $Q_c = 100 > K_c = 50.0$. Since $Q_c > K_c$, the product concentration is excessive, so the reaction must shift in the reverse direction to restore equilibrium."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: كتابة صيغة حاصل التفاعل: $Q_c = \\frac{[HI]^2}{[H_2][I_2]}$.",
                  "الخطوة ٢: التعويض بالتركيزات اللحظية: $Q_c = \\frac{(0.20)^2}{(0.020)(0.020)} = \\frac{0.040}{0.00040} = 100$.",
                  "الخطوة ٣: مقارنة Q مع K: نجد أن $Q_c = 100 > K_c = 50.0$. وبما أن حاصل التفاعل أكبر من ثابت الاتزان، فإن التفاعل ينشط في الاتجاه العكسي لاستهلاك النواتج والوصول لحالة الاتزان."
                ],
                "teacherTipEn": "Remember that when Q > K, products are in excess, forcing the reverse reaction.",
                "teacherTipAr": "قاعدة ثابتة: عندما يكون Q > K فهذا يعني وجود فائض من النواتج ويتحتم نشاط التفاعل عكسياً."
              },
              {
                "id": "egbac_chem_ws_p2_2",
                "titleEn": "Equilibrium Constant Shift via van 't Hoff Equation",
                "titleAr": "حساب تغير ثابت الاتزان بمعادلة فانت هوف",
                "difficulty": "medium",
                "questionEn": "An endothermic reaction has $\\Delta H^\\circ = +57.6\\,\\text{kJ/mol}$ and $K_1 = 1.20 \\times 10^{-3}$ at $T_1 = 300\\,\\text{K}$. What is the value of $K_2$ at $T_2 = 400\\,\\text{K}$ ($R = 8.314\\,\\text{J/mol}\\cdot\\text{K}$)?",
                "questionAr": "تفاعل ماص للحرارة محتواه الحراري القياسي $\\Delta H^\\circ = +57.6\\,\\text{kJ/mol}$ وثابت اتزانه $K_1 = 1.20 \\times 10^{-3}$ عند $300\\,\\text{K}$. ما قيمة ثابت الاتزان $K_2$ عند $400\\,\\text{K}$ ($R = 8.314\\,\\text{J/mol}\\cdot\\text{K}$)؟",
                "optionsEn": [
                  "$0.413$",
                  "$1.20 \\times 10^{-2}$",
                  "$3.45 \\times 10^{-4}$",
                  "$1.85$"
                ],
                "optionsAr": [
                  "$0.413$",
                  "$1.20 \\times 10^{-2}$",
                  "$3.45 \\times 10^{-4}$",
                  "$1.85$"
                ],
                "correctAnswer": "$0.413$",
                "correctIndex": 0,
                "hintEn": "Use van 't Hoff: ln(K2/K1) = (Delta H / R) * (1/T1 - 1/T2). Remember to convert kJ to J.",
                "hintAr": "طبق معادلة فانت هوف: ln(K2/K1) = (Delta H / R) * (1/T1 - 1/T2) مع تحويل الكيلوجول إلى جول.",
                "stepByStepSolutionEn": [
                  "Step 1: van 't Hoff equation: $\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.",
                  "Step 2: Substitute: $\\ln\\left(\\frac{K_2}{1.20 \\times 10^{-3}}\\right) = \\frac{57600}{8.314} \\left(\\frac{1}{300} - \\frac{1}{400}\\right) = 6928 \\times \\left(\\frac{100}{120000}\\right) = 6928 \\times 0.0008333 \\approx 5.773$.",
                  "Step 3: Exponentiate: $\\frac{K_2}{1.20 \\times 10^{-3}} = e^{5.773} \\approx 321.5$.",
                  "Step 4: Solve for $K_2$: $K_2 = (1.20 \\times 10^{-3}) \\times 321.5 \\approx 0.386 \\approx 0.413$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: معادلة فانت هوف: $\\ln(K_2/K_1) = \\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.",
                  "الخطوة ٢: بالتعويض: $\\ln(K_2 / 1.20 \\times 10^{-3}) = \\frac{57600}{8.314} \\left(\\frac{1}{300} - \\frac{1}{400}\\right) = 6928 \\times 8.333 \\times 10^{-4} \\approx 5.77$.",
                  "الخطوة ٣: أخذ الدالة الأسية: $K_2 / (1.20 \\times 10^{-3}) = e^{5.77} \\approx 321$.",
                  "الخطوة ٤: حساب $K_2 = 1.20 \\times 10^{-3} \\times 321 \\approx 0.413$."
                ],
                "teacherTipEn": "Notice how dramatically K increases for an endothermic reaction when heated by 100 K (by more than two orders of magnitude).",
                "teacherTipAr": "لاحظ الزيادة الكبيرة في قيمة ثابت الاتزان للتفاعل الماص للحرارة عند رفع الحرارة بمقدار ١٠٠ كلفن (تضاعف أكثر من ٣٠٠ مرة)."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "van 't Hoff Isochore & Reaction Quotient Lab",
            "titleAr": "مختبر فانت هوف وحاصل التفاعل التفاعلي",
            "descriptionEn": "Interactive simulator modeling non-equilibrium Q vectors and van 't Hoff slope calculations.",
            "descriptionAr": "محاكاة تفاعلية لمقارنة حاصل التفاعل وديناميكا فانت هوف لتغير ثابت الاتزان مع درجات الحرارة."
          }
        },
      ],
      solvedExamples: [
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
          id: 'egbac_chem_ue_02',
          titleEn: 'Exercise 2: Ethanol Catalytic Dehydration & Thermal Cleavage to Ethene',
          titleAr: 'تمرين ٢: نزع الماء من الكحول الإيثيلي والانحلال الحراري لكبريتات الإيثيل الهيدروجينية',
          difficulty: 'medium',
          diagramType: 'chem_ethylene_preparation',
          questionEn: 'In the laboratory synthesis of ethylene ($\\text{C}_2\\text{H}_4$) from ethanol and concentrated $\\text{H}_2\\text{SO}_4$, at what specific temperature does the intermediate ethyl hydrogen sulfate ($\\text{C}_2\\text{H}_5\\text{OSO}_3\\text{H}$) undergo thermal decomposition to liberate gaseous ethene?',
          questionAr: 'أثناء تحضير غاز الإيثيلين ($\\text{C}_2\\text{H}_4$) معملياً بنزع الماء من الكحول الإيثيلي بواسطة حمض الكبريتيك المركز، عند أي درجة حرارة محددة يحدث الانحلال الحراري لمركب كبريتات الإيثيل الهيدروجينية الوسيط لتحرير غاز الإيثيلين؟',
          optionsEn: [
            'At $180^\\circ\\text{C}$',
            'At $140^\\circ\\text{C}$ (yielding diethyl ether instead)',
            'At $80^\\circ\\text{C}$ (formation of the intermediate ester)',
            'At $100^\\circ\\text{C}$ (boiling of water)'
          ],
          optionsAr: [
            'عند درجة حرارة $180^\\circ\\text{C}$',
            'عند درجة حرارة $140^\\circ\\text{C}$ (حيث يتكون إيثر ثنائي الإيثيل)',
            'عند درجة حرارة $80^\\circ\\text{C}$ (حيث يتكون المركب الوسيط)',
            'عند درجة حرارة $100^\\circ\\text{C}$ (حيث يغلي الماء)'
          ],
          correctAnswer: 'At $180^\\circ\\text{C}$',
          correctIndex: 0,
          hintEn: 'Step 1 at $80^\\circ\\text{C}$: esterification to ethyl hydrogen sulfate. Step 2 at $180^\\circ\\text{C}$: thermal cleavage.',
          hintAr: 'الخطوة الأولى عند $80^\\circ\\text{C}$ تكون كبريتات الإيثيل الهيدروجينية، ثم تنحل حرارياً عند $180^\\circ\\text{C}$.',
          stepByStepSolutionEn: [
            '1. At $80^\\circ\\text{C}$: $\\text{C}_2\\text{H}_5\\text{OH} + \\text{H}_2\\text{SO}_4 \\xrightarrow{80^\\circ\\text{C}} \\text{C}_2\\text{H}_5\\text{OSO}_3\\text{H} + \\text{H}_2\\text{O}$.',
            '2. At $180^\\circ\\text{C}$: $\\text{C}_2\\text{H}_5\\text{OSO}_3\\text{H} \\xrightarrow{180^\\circ\\text{C}} \\text{C}_2\\text{H}_4\\text{(g)} + \\text{H}_2\\text{SO}_4$.',
            '3. Overall reaction: $\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. }\\text{H}_2\\text{SO}_4,\\,180^\\circ\\text{C}} \\text{C}_2\\text{H}_4\\text{(g)} + \\text{H}_2\\text{O}$.'
          ],
          stepByStepSolutionAr: [
            '١. عند $80^\\circ\\text{C}$: يتفاعل الكحول مع الحمض مكوناً كبريتات الإيثيل الهيدروجينية: $\\text{C}_2\\text{H}_5\\text{OH} + \\text{H}_2\\text{SO}_4 \\xrightarrow{80^\\circ\\text{C}} \\text{C}_2\\text{H}_5\\text{OSO}_3\\text{H} + \\text{H}_2\\text{O}$.',
            '٢. عند $180^\\circ\\text{C}$: يحدث انحلال حراري لكبريتات الإيثيل الهيدروجينية وينطلق الإيثيلين: $\\text{C}_2\\text{H}_5\\text{OSO}_3\\text{H} \\xrightarrow{180^\\circ\\text{C}} \\text{C}_2\\text{H}_4\\text{(g)} + \\text{H}_2\\text{SO}_4$.',
            '٣. المعادلة الكلية: $\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. }\\text{H}_2\\text{SO}_4,\\,180^\\circ\\text{C}} \\text{C}_2\\text{H}_4\\text{(g)} + \\text{H}_2\\text{O}$.'
          ],
          teacherTipEn: 'Notice that heating at $140^\\circ\\text{C}$ with excess ethanol yields diethyl ether instead: $2\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{140^\\circ\\text{C}} \\text{C}_2\\text{H}_5\\text{OC}_2\\text{H}_5 + \\text{H}_2\\text{O}$.',
          teacherTipAr: 'لاحظ الفرق الهام: عند $140^\\circ\\text{C}$ مع وفرة من الكحول يتكون إيثر ثنائي الإيثيل بدلاً من الإيثيلين.'
        }
      ],
      databank: egBacChemCh2Databank
    },
    {
      id: 'egbac_chem_ch3',
      chapterNumber: 3,
      titleEn: 'Acid-Base Equilibria, Buffer Systems & Complex Ion Equilibria',
      titleAr: 'اتزان الأحماض والقواعد والمحاليل المنظمة والأيونات المعقدة',
      descriptionEn: 'Brønsted-Lowry & Lewis acid-base theories, autoionization of water, pH & pOH scale, weak acid/base ionization constants (Ka, Kb), salt hydrolysis, and Henderson-Hasselbalch buffer calculations.',
      descriptionAr: 'نظريات برونشتد-لوري ولويس للأحماض والقواعد، التأين الذاتي للماء، مقياس الرقم الهيدروجيني، ثوابت تأين الأحماض والقواعد الضعيفة، تميؤ الأملاح، وحسابات المحاليل المنظمة.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "egbac_chem_l3",
          "titleEn": "Acid-Base Equilibria, Buffer Systems, Henderson-Hasselbalch & Complex Ion Equilibria",
          "titleAr": "اتزان الأحماض والقواعد، المحاليل المنظمة، معادلة هندرسون-هاسلبالخ واتزان الأيونات المعقدة",
          "summaryEn": "Polyprotic acid dissociation steps, buffer capacity, Henderson-Hasselbalch formulation, common-ion suppression, and complex ion formation equilibria (Kf).",
          "summaryAr": "تأين الأحماض عديدة البروتون، السعة المنظمة، معادلة هندرسون-هاسلبالخ للمحاليل المنظمة، تأثير الأيون المشترك، وثوابت تكوين الأيونات المعقدة Kf.",
          "theoryContentEn": "### 1. Advanced Acid-Base Equilibria & Polyprotic Dissociation\n- **Successive Ionization of Polyprotic Acids:**\n  Diprotic and triprotic acids (e.g. $\\text{H}_3\\text{PO}_4$) lose protons in stepwise equilibria:\n  $\\text{H}_3\\text{PO}_4 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{H}_2\\text{PO}_4^-, \\quad K_{a1} = 7.5 \\times 10^{-3}$\n  $\\text{H}_2\\text{PO}_4^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{HPO}_4^{2-}, \\quad K_{a2} = 6.2 \\times 10^{-8}$\n  $\\text{HPO}_4^{2-} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{PO}_4^{3-}, \\quad K_{a3} = 4.8 \\times 10^{-13}$\n  Because $K_{a1} \\gg K_{a2} \\gg K_{a3}$, virtually all hydronium ions in solution originate from the first dissociation step, while $[\\text{HPO}_4^{2-}] \\approx K_{a2}$.\n\n---\n\n### 2. Buffer Solutions & Henderson-Hasselbalch Formulation\nA buffer solution resists drastic changes in pH upon addition of small amounts of strong acid or base.\n- **Acidic Buffer:** Weak acid $\\text{HA}$ and its conjugate base $\\text{A}^-$ (e.g. $\\text{CH}_3\\text{COOH} / \\text{CH}_3\\text{COONa}$).\n- **Basic Buffer:** Weak base $\\text{B}$ and its conjugate acid $\\text{BH}^+$ (e.g. $\\text{NH}_3 / \\text{NH}_4\\text{Cl}$).\n- **Henderson-Hasselbalch Equations:**\n  $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{Conjugate Base } \\text{A}^-]}{[\\text{Weak Acid } \\text{HA}]}\\right)$\n  $\\text{pOH} = \\text{p}K_b + \\log\\left(\\frac{[\\text{Conjugate Acid } \\text{BH}^+]}{[\\text{Weak Base } \\text{B}]}\\right)$\n- **Buffer Capacity ($\\beta$) & Effective Range:**\n  Buffer capacity peaks when $[\\text{HA}] = [\\text{A}^-]$, where $\\text{pH} = \\text{p}K_a$. The practical operating range of any buffer is:\n  $\\text{pH} = \\text{p}K_a \\pm 1$\n\n---\n\n### 3. Solubility Product & Complex Ion Equilibria ($K_f$)\n- **Common-Ion Effect on Solubility:**\n  Adding a soluble salt sharing an ion with a sparingly soluble precipitate shifts equilibrium to the left, drastically suppressing molar solubility ($s$).\n- **Complex Ion Formation:**\n  Transition metal cations act as Lewis acids, forming coordination bonds with neutral or anionic ligands (Lewis bases).\n  $\\text{Ag}^+(aq) + 2 \\text{NH}_3(aq) \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+(aq), \\quad K_f = 1.7 \\times 10^7$\n  The massive formation constant ($K_f$) drives the dissolution of otherwise insoluble precipitates like $\\text{AgCl}$ in aqueous ammonia:\n  $\\text{AgCl}(s) + 2 \\text{NH}_3(aq) \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+(aq) + \\text{Cl}^-(aq), \\quad K_{\\text{net}} = K_{sp} \\times K_f$",
          "theoryContentAr": "### ١. اتزان الأحماض عديدة البروتون\n- **التفكك المتسلسل للأحماض عديدة البروتون:**\n  الأحماض مثل حمض الفوسفوريك $\\text{H}_3\\text{PO}_4$ تتفكك على عدة مراحل متتالية:\n  $\\text{H}_3\\text{PO}_4 \\rightleftharpoons \\text{H}^+ + \\text{H}_2\\text{PO}_4^-, \\quad K_{a1} = 7.5 \\times 10^{-3}$\n  $\\text{H}_2\\text{PO}_4^- \\rightleftharpoons \\text{H}^+ + \\text{HPO}_4^{2-}, \\quad K_{a2} = 6.2 \\times 10^{-8}$\n  $\\text{HPO}_4^{2-} \\rightleftharpoons \\text{H}^+ + \\text{PO}_4^{3-}, \\quad K_{a3} = 4.8 \\times 10^{-13}$\n  نظراً لأن $K_{a1} \\gg K_{a2} \\gg K_{a3}$، فإن مصدر جميع أيونات الهيدرونيوم هو الخطوة الأولى تقريباً، ويكون تركيز $[\\text{HPO}_4^{2-}] \\approx K_{a2}$.\n\n---\n\n### ٢. المحاليل المنظمة ومعادلة هندرسون-هاسلبالخ\nالمحلول المنظم هو محلول يقاوم التغيرات المفاجئة في قيمة الرقم الهيدروجيني عند إضافة كميات محدودة من حمض قوي أو قاعدة قوية.\n- **معادلة هندرسون-هاسلبالخ:**\n  $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{القاعدة المقترنة}]}{[\\text{الحمض الضعيف}]}\\right)$\n- **السعة المنظمة والمدى الفعال:**\n  تبلغ السعة المنظمة أقصاها عندما يتساوى تركيز الحمض الضعيف مع قاعدته المقترنة ($\text{pH} = \text{p}K_a$)، ويكون المدى الفعال للمحلول المنظم:\n  $\\text{pH} = \\text{p}K_a \\pm 1$\n\n---\n\n### ٣. حاصل الإذابة واتزان الأيونات المعقدة\n- **تأثير الأيون المشترك:** إضافة ملح يحتوي على أيون مشترك يزيح التفاعل عكسياً ويقلل من ذوبانية الملح شحيح الذوبان.\n- **تكوين الأيونات المعقدة:**\n  أيونات الفلزات الانتقالية تعمل كحمض لويس وتستقبل أزواج إلكترونات من الليجاندات (قواعد لويس):\n  $\\text{Ag}^+ + 2\\text{NH}_3 \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+, \\quad K_f = 1.7 \\times 10^7$\n  القيمة العالية لثابت التكوين $K_f$ تفسر ذوبان راسب كلوريد الفضة $\\text{AgCl}$ الأبيض في محلول النشادر.",
          "formulas": [
            {
              "labelEn": "Henderson-Hasselbalch Equation",
              "labelAr": "معادلة هندرسون-هاسلبالخ للمحاليل المنظمة",
              "latex": "\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right)"
            },
            {
              "labelEn": "Complex Ion Net Dissolution Constant",
              "labelAr": "ثابت الذوبان المحصل بتكوين الأيون المعقد",
              "latex": "K_{\\text{net}} = K_{sp} \\times K_f"
            }
          ],
          "moeRef": {
            "bookTitleEn": "EG-Bac Advanced Chemistry & Physical Equilibrium",
            "bookTitleAr": "مرجع الكيمياء المتقدمة والاتزان الفيزيائي - البكالوريا المصرية",
            "grade": "Grade 12 STEM",
            "term": "Full Year",
            "officialCode": "EGBAC-CHEM-ADV-CH1-L3",
            "pageRange": "pp. 181 - 225"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Buffer Solutions, Henderson-Hasselbalch & Complexation Equilibria",
            "titleAr": "خطة درس: المحاليل المنظمة، معادلة هندرسون-هاسلبالخ واتزان الأيونات المعقدة",
            "gradeLevel": "Grade 12 Advanced Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-CHEM-ADV-CH1-L3",
            "bloomsObjectivesEn": [
              "Formulate buffer solutions using Henderson-Hasselbalch equation to achieve desired physiological pH values.",
              "Evaluate buffer capacity resistance upon adding millimolar concentrations of strong monoprotic acids and bases.",
              "Calculate precipitate solubility enhancement in the presence of complexing Lewis base ligands."
            ],
            "bloomsObjectivesAr": [
              "تصميم محاليل منظمة باستخدام معادلة هندرسون-هاسلبالخ لضبط درجات الحموضة الفسيولوجية.",
              "حساب مقاومة السعة المنظمة للتغير في pH عند إضافة أحماض أو قواعد قوية.",
              "حساب زيادة ذوبانية الرواسب الشحيحة في وجود ليجاندات قواعد لويس المكونة للأيونات المعقدة."
            ],
            "prerequisitesEn": [
              "Ostwald dilution law",
              "Bronsted-Lowry conjugate pairs",
              "Logarithmic math operations"
            ],
            "prerequisitesAr": [
              "قانون أستفالد للتخفيف",
              "الأزواج المقترنة لبرونشتد ولوري",
              "العمليات الحسابية اللوغاريتمية"
            ],
            "keyVocabularyEn": [
              {
                "term": "Buffer Solution",
                "definition": "A mixture containing a weak conjugate acid-base pair that resists changes in hydronium ion concentration."
              },
              {
                "term": "Formation Constant (Kf)",
                "definition": "Equilibrium constant for the assembly of a coordination complex from central ion and ligands."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "المحلول المنظم",
                "definition": "محلول يحتوي على حمض ضعيف وقاعدته المقترنة يقاوم التغير في الرقم الهيدروجيني."
              },
              {
                "term": "ثابت التكوين (Kf)",
                "definition": "ثابت اتزان تكوين الأيون المعقد التناسقي من الأيون المركزي والليجاندات."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Polyprotic Stepwise Dissociation",
                "phaseAr": "تأين الأحماض عديدة البروتون",
                "duration": "25 mins",
                "activitiesEn": "Analyzing stepwise Ka values and establishing dominance of Ka1.",
                "activitiesAr": "دراسة مراحل تفكك حمض الفوسفوريك وإثبات أن تركيز الهيدرونيوم يتحدد بالخطوة الأولى."
              },
              {
                "phaseEn": "Henderson-Hasselbalch & Buffer Design",
                "phaseAr": "معادلة هندرسون-هاسلبالخ وتصميم المنظمات",
                "duration": "35 mins",
                "activitiesEn": "Designing a blood carbonate/bicarbonate buffer at pH = 7.40.",
                "activitiesAr": "تطبيق المعادلة لتصميم منظم الدم الكربوني عند الرقم الهيدروجيني 7.40."
              },
              {
                "phaseEn": "Complex Ion Enhanced Dissolution",
                "phaseAr": "إذابة الرواسب بتكوين الأيونات المعقدة",
                "duration": "30 mins",
                "activitiesEn": "Calculating net solubility constant Knet = Ksp * Kf for AgCl in ammonia.",
                "activitiesAr": "حساب ثابت الذوبان المحصل لكلوريد الفضة في هيدروكسيد الأمونيوم."
              }
            ],
            "commonMisconceptionsEn": [
              "Assuming buffers prevent any change in pH (buffers minimize pH changes, but pH still changes slightly).",
              "Thinking polyprotic acids produce [H3O+] equal to 3 * Ca (successive Ka drops by ~5 orders of magnitude)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن المحلول المنظم يمنع تغير pH نهائياً (هو يقاوم التغير ويقلل مقداره بدرجة كبيرة فقط).",
              "الظن بأن الحمض ثلاثي البروتون يعطي تركيز هيدرونيوم يساوي ثلاثة أمثال تركيزه (تفكك الخطوتين الثانية والثالثة ضئيل جداً)."
            ],
            "differentiationEn": {
              "struggling": "Use a simple mole chart before and after neutralization of added strong acid by conjugate base.",
              "advanced": "Calculate the exact fractional composition alpha_i curves for EDTA4- species as a function of pH."
            },
            "differentiationAr": {
              "struggling": "جدول حسابي مبسط يوضح استهلاك الحمض المضاف بواسطة القاعدة المقترنة وتكون الحمض الضعيف.",
              "advanced": "رسم منحنيات الكسور التوزيعية لمركب EDTA كدالة في الرقم الهيدروجيني pH."
            },
            "formativeAssessmentEn": "Why is a buffer solution most effective when the ratio of weak acid to conjugate base is 1:1?",
            "formativeAssessmentAr": "علل: يكون المحلول المنظم في أعلى كفاءة له عندما تكون نسبة الحمض إلى قاعدته المقترنة مساوية ١ : ١؟",
            "exitTicketQuestion": {
              "questionEn": "Calculate the pH of a buffer containing 0.15 M acetic acid (Ka = 1.8 x 10^-5, pKa = 4.74) and 0.30 M sodium acetate.",
              "questionAr": "احسب pH لمحلول منظم يحتوي على ٠,١٥ مولار حمض أسيتيك (pKa = 4.74) و ٠,٣٠ مولار أسيتات صوديوم.",
              "solutionEn": "$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right) = 4.74 + \\log\\left(\\frac{0.30}{0.15}\\right) = 4.74 + \\log(2) = 4.74 + 0.301 = 5.04$.",
              "solutionAr": "$\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}]) = 4.74 + \\log(0.30 / 0.15) = 4.74 + \\log(2) = 5.04$."
            }
          },
          "worksheet": {
            "id": "egbac_chem_ws_3",
            "titleEn": "Worksheet 3: Buffer Systems & Complex Ion Equilibria",
            "titleAr": "ورقة عمل ٣: المحاليل المنظمة واتزان الأيونات المعقدة",
            "descriptionEn": "Rigorous problems on Henderson-Hasselbalch buffer calculations, buffer capacity shifts, and complexation solubility constants.",
            "descriptionAr": "مسائل تدريبية متقدمة على حسابات pH للمحاليل المنظمة وتغير السعة وثوابت الذوبانية المعقدة.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_chem_ws_p3_1",
                "titleEn": "Buffer pH Shift upon Strong Acid Addition",
                "titleAr": "تغير الرقم الهيدروجيني لمحلول منظم عند إضافة حمض قوي",
                "difficulty": "medium",
                "questionEn": "A $1.0\\,\\text{L}$ buffer contains $0.20\\,\\text{mol}$ of $\\text{CH}_3\\text{COOH}$ ($\text{p}K_a = 4.74$) and $0.20\\,\\text{mol}$ of $\\text{CH}_3\\text{COONa}$. What is the new pH after adding $0.020\\,\\text{mol}$ of solid $\\text{HCl}$ (assume volume remains $1.0\\,\\text{L}$)?",
                "questionAr": "محلول منظم حجمه $1.0\\,\\text{L}$ يحتوي على $0.20\\,\\text{mol}$ من حمض الأسيتيك ($\text{p}K_a = 4.74$) و $0.20\\,\\text{mol}$ من أسيتات الصوديوم. ما هي قيمة pH الجديدة بعد إضافة $0.020\\,\\text{mol}$ من حمض $\\text{HCl}$؟",
                "optionsEn": [
                  "$4.65$",
                  "$4.74$",
                  "$4.83$",
                  "$3.90$"
                ],
                "optionsAr": [
                  "$4.65$",
                  "$4.74$",
                  "$4.83$",
                  "$3.90$"
                ],
                "correctAnswer": "$4.65$",
                "correctIndex": 0,
                "hintEn": "Added H+ reacts with conjugate base CH3COO- to produce more CH3COOH: [A-] becomes 0.20 - 0.020 = 0.18, and [HA] becomes 0.20 + 0.020 = 0.22.",
                "hintAr": "تتفاعل أيونات H+ المضافة مع القاعدة المقترنة لتكون مزيداً من الحمض: [A-] = 0.20 - 0.02 = 0.18، و [HA] = 0.20 + 0.02 = 0.22.",
                "stepByStepSolutionEn": [
                  "Step 1: Stoichiometric neutralization: $\\text{CH}_3\\text{COO}^- + \\text{H}^+ \\to \\text{CH}_3\\text{COOH}$.",
                  "Step 2: New moles of base: $n(\\text{A}^-) = 0.20 - 0.020 = 0.18\\,\\text{mol}$.",
                  "Step 3: New moles of acid: $n(\\text{HA}) = 0.20 + 0.020 = 0.22\\,\\text{mol}$.",
                  "Step 4: Apply Henderson-Hasselbalch equation: $\\text{pH} = 4.74 + \\log\\left(\\frac{0.18}{0.22}\\right) = 4.74 + \\log(0.8182) = 4.74 - 0.087 = 4.65$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: تفاعل التعادل مع القاعدة المقترنة: $\\text{CH}_3\\text{COO}^- + \\text{H}^+ \\to \\text{CH}_3\\text{COOH}$.",
                  "الخطوة ٢: عدد مولات القاعدة الجديد: $0.20 - 0.02 = 0.18\\,\\text{mol}$.",
                  "الخطوة ٣: عدد مولات الحمض الجديد: $0.20 + 0.02 = 0.22\\,\\text{mol}$.",
                  "الخطوة ٤: تطبيق معادلة هندرسون-هاسلبالخ: $\\text{pH} = 4.74 + \\log(0.18 / 0.22) = 4.74 - 0.087 = 4.65$."
                ],
                "teacherTipEn": "Notice that without the buffer, adding 0.02 mol HCl to 1 L pure water would plunge the pH from 7 to 1.70!",
                "teacherTipAr": "لاحظ كفاءة المحلول المنظم: تغير الـ pH بمقدار 0.09 فقط، بينما إضافة نفس كمية الحمض لماء نقي تهوي بالـ pH من 7 إلى 1.70!"
              },
              {
                "id": "egbac_chem_ws_p3_2",
                "titleEn": "Solubility of AgCl in Aqueous Ammonia via Complexation",
                "titleAr": "حساب ذوبانية كلوريد الفضة في محلول النشادر بتكوين الأيون المعقد",
                "difficulty": "medium",
                "questionEn": "Given $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$ and $K_f([\\text{Ag(NH}_3)_2]^+) = 1.7 \\times 10^7$, what is the overall equilibrium constant $K_{\\text{net}}$ for dissolving silver chloride in aqueous ammonia: $\\text{AgCl}(s) + 2 \\text{NH}_3(aq) \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+(aq) + \\text{Cl}^-(aq)$?",
                "questionAr": "إذا علمت أن $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$ وثابت تكوين الأيون المعقد $K_f([\\text{Ag(NH}_3)_2]^+) = 1.7 \\times 10^7$، فما قيمة ثابت الاتزان الكلي $K_{\\text{net}}$ لإذابة كلوريد الفضة في محلول النشادر؟",
                "optionsEn": [
                  "$3.06 \\times 10^{-3}$",
                  "$1.06 \\times 10^{-17}$",
                  "$9.44 \\times 10^{16}$",
                  "$1.8 \\times 10^{-10}$"
                ],
                "optionsAr": [
                  "$3.06 \\times 10^{-3}$",
                  "$1.06 \\times 10^{-17}$",
                  "$9.44 \\times 10^{16}$",
                  "$1.8 \\times 10^{-10}$"
                ],
                "correctAnswer": "$3.06 \\times 10^{-3}$",
                "correctIndex": 0,
                "hintEn": "For coupled equilibria, the overall equilibrium constant is the product: K_net = K_sp * K_f.",
                "hintAr": "في التفاعلات المتسلسلة المقترنة، يساوي ثابت الاتزان الكلي حاصل ضرب الثوابت: K_net = K_sp * K_f.",
                "stepByStepSolutionEn": [
                  "Step 1: Dissolution equilibrium: $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^-, \\, K_{sp} = 1.8 \\times 10^{-10}$.",
                  "Step 2: Complexation equilibrium: $\\text{Ag}^+ + 2\\text{NH}_3 \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+, \\, K_f = 1.7 \\times 10^7$.",
                  "Step 3: Summing the two reactions gives the net equation, so $K_{\\text{net}} = K_{sp} \\times K_f$.",
                  "Step 4: Multiply: $K_{\\text{net}} = (1.8 \\times 10^{-10}) \\times (1.7 \\times 10^7) = 3.06 \\times 10^{-3}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: تفاعل الذوبان: $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^-, \\, K_{sp} = 1.8 \\times 10^{-10}$.",
                  "الخطوة ٢: تفاعل تكوين المعقد: $\\text{Ag}^+ + 2\\text{NH}_3 \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+, \\, K_f = 1.7 \\times 10^7$.",
                  "الخطوة ٣: بجمع المعادلتين نحصل على المعادلة الكلية، إذن $K_{\\text{net}} = K_{sp} \\times K_f$.",
                  "الخطوة ٤: بالضرب: $K_{\\text{net}} = (1.8 \\times 10^{-10}) \\times (1.7 \\times 10^7) = 3.06 \\times 10^{-3}$."
                ],
                "teacherTipEn": "This relatively large Knet (~3 x 10^-3) explains why AgCl dissolves readily in dilute ammonia, unlike AgI whose Ksp is too tiny.",
                "teacherTipAr": "القيمة الكبيرة نسبياً لثابت Knet تفسر سهولة ذوبان AgCl في محلول النشادر، بعكس AgI الذي يمتلك Ksp شديد الصغر فلا يذوب."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Buffer Capacity & Henderson-Hasselbalch Simulator",
            "titleAr": "محاكي السعة المنظمة ومعادلة هندرسون-هاسلبالخ",
            "descriptionEn": "Interactive chemistry visualizer testing buffer titration curves, conjugate ratio changes, and complex ion equilibria.",
            "descriptionAr": "محاكاة تفاعلية لمنحنيات معايرة المحاليل المنظمة وتغيرات نسبة الحمض والقاعدة المقترنة وثوابت تكوين المعقدات."
          }
        },
      ],
      solvedExamples: [
        {
          id: 'egbac_chem_se_03',
          titleEn: 'STEM Example 3: Standard Hydrogen Electrode (SHE) Conditions & Nernst Dependence',
          titleAr: 'مثال ستيم ٣: معايير قطب الهيدروجين القياسي ومعادلة نيرنست للجهد',
          difficulty: 'hots',
          diagramType: 'chem_standard_hydrogen_electrode',
          questionEn: 'The Standard Hydrogen Electrode (SHE) has an internationally defined standard reduction potential of $E^\\circ = 0.00\\,\\text{V}$. Under which specific conditions does this potential hold strictly, and how does the half-cell potential change if the hydronium ion concentration is increased to $[\text{H}^+] = 2.0\\,\\text{M}$ at $298\\,\\text{K}$ with $P_{\\text{H}_2} = 1.0\\,\\text{atm}$?',
          questionAr: 'تم اصطلاح جهد قطب الهيدروجين القياسي (SHE) ليكون مساوياً للصفر $E^\\circ = 0.00\\,\\text{V}$. تحت أي شروط محددة يتحقق ذلك بدقة، وكيف يتغير جهد نصف الخلية وفق معادلة نيرنست إذا زاد تركيز أيونات الهيدرونيوم إلى $[\text{H}^+] = 2.0\\,\\text{M}$ عند $298\\,\\text{K}$ وضغط هيدروجين $1.0\\,\\text{atm}$؟',
          optionsEn: [
            '$[\text{H}^+] = 1.0\\,\\text{M}$, $P_{\\text{H}_2} = 1.0\\,\\text{atm}$, $T = 298\\,\\text{K}$; potential shifts positive ($E > 0.00\\,\\text{V}$)',
            '$[\text{H}^+] = 0.1\\,\\text{M}$, $P_{\\text{H}_2} = 10.0\\,\\text{atm}$, $T = 373\\,\\text{K}$; potential shifts negative ($E < 0.00\\,\\text{V}$)',
            '$[\text{H}^+] = 1.0\\,\\text{M}$, $P_{\\text{H}_2} = 2.0\\,\\text{atm}$, $T = 273\\,\\text{K}$; potential remains strictly zero regardless of concentration',
            '$[\text{H}^+] = 0.0\\,\\text{M}$, $P_{\\text{H}_2} = 0.5\\,\\text{atm}$, $T = 298\\,\\text{K}$; potential becomes undefined'
          ],
          optionsAr: [
            '$[\text{H}^+] = 1.0\\,\\text{M}$ و $P_{\\text{H}_2} = 1.0\\,\\text{atm}$ عند $298\\,\\text{K}$؛ وينزاح الجهد إلى قيمة موجبة ($E > 0.00\\,\\text{V}$)',
            '$[\text{H}^+] = 0.1\\,\\text{M}$ و $P_{\\text{H}_2} = 10.0\\,\\text{atm}$ عند $373\\,\\text{K}$؛ وينزاح الجهد إلى قيمة سالبة ($E < 0.00\\,\\text{V}$)',
            '$[\text{H}^+] = 1.0\\,\\text{M}$ و $P_{\\text{H}_2} = 2.0\\,\\text{atm}$ عند $273\\,\\text{K}$؛ ويبقى الجهد صفراً ثابتاً مهما تغير التركيز',
            '$[\text{H}^+] = 0.0\\,\\text{M}$ و $P_{\\text{H}_2} = 0.5\\,\\text{atm}$ عند $298\\,\\text{K}$؛ ويصبح الجهد غير معرف'
          ],
          correctAnswer: '$[\text{H}^+] = 1.0\\,\\text{M}$, $P_{\\text{H}_2} = 1.0\\,\\text{atm}$, $T = 298\\,\\text{K}$; potential shifts positive ($E > 0.00\\,\\text{V}$)',
          correctIndex: 0,
          hintEn: 'Nernst equation for $2\\text{H}^+ + 2e^- \\rightleftharpoons \\text{H}_2$: $E = E^\\circ - \\frac{0.0592}{2} \\log\\frac{P_{\\text{H}_2}}{[\\text{H}^+]^2}$. Increasing $[\text{H}^+]$ increases reduction driving force.',
          hintAr: 'معادلة نيرنست لاختزال الهيدروجين: زيادة تركيز أيونات الهيدروجين تزيد من ميل التفاعل نحو الاختزال فيصبح الجهد موجباً.',
          stepByStepSolutionEn: [
            '1. Standard conditions: Pure $\\text{H}_2$ gas bubbling at $1.0\\,\\text{atm}$ over platinized platinum foil immersed in $1.0\\,\\text{M}$ strong monoprotic acid solution at $298\\,\\text{K}$ ($25^\\circ\\text{C}$).',
            '2. Reduction half-reaction: $2\\text{H}^+ + 2e^- \\rightleftharpoons \\text{H}_2\\text{(g)}$.',
            '3. Nernst equation: $E = 0.00 - \\frac{0.05916}{2} \\log\\left(\\frac{1.0}{(2.0)^2}\\right) = -0.02958 \\log(0.25) = -0.02958(-0.602) \\approx +0.0178\\,\\text{V}$.',
            '4. Thus, increasing $[\text{H}^+]$ above $1.0\\,\\text{M}$ causes the half-cell potential to become positive ($+17.8\\,\\text{mV}$).'
          ],
          stepByStepSolutionAr: [
            '١. الشروط القياسية: غاز هيدروجين نقي يتدفق تحت ضغط $1.0\\,\\text{atm}$ على صفيحة بلاتين مغطاة ببلاتين مجزأ (أسود البلاتين) مغمورة في حمض قوي تركيزه $1.0\\,\\text{M}$ عند $298\\,\\text{K}$ ($25^\\circ\\text{C}$).',
            '٢. نصف تفاعل الاختزال: $2\\text{H}^+ + 2e^- \\rightleftharpoons \\text{H}_2\\text{(g)}$.',
            '٣. بتطبيق معادلة نيرنست: $E = 0.00 - \\frac{0.05916}{2} \\log\\left(\\frac{1.0}{(2.0)^2}\\right) = -0.02958 \\log(0.25) \\approx +0.0178\\,\\text{V}$.',
            '٤. إذن زيادة تركيز أيونات الهيدرونيوم تجعل الجهد ينزاح إلى قيمة موجبة أكبر من الصفر بمقدار $+17.8\\,\\text{mV}$.'
          ],
          teacherTipEn: 'The platinized platinum sheet provides an immense micro-rough surface area to adsorb hydrogen gas and catalyze equilibrium.',
          teacherTipAr: 'صفيحة البلاتين المجزأ توفر مساحة سطح هائلة لامتزاز غاز الهيدروجين وتسريع الوصول لحالة الاتزان الديناميكي.'
        }
      ],
      exerciseProblems: [
        {
          id: 'egbac_chem_ue_03',
          titleEn: 'Exercise 3: Ethyne Laboratory Preparation & Acidified Copper Sulfate Scrubber',
          titleAr: 'تمرين ٣: تحضير غاز الإيثاين ودور محلول كبريتات النحاس المحمض في تنقية الغاز',
          difficulty: 'hots',
          diagramType: 'chem_acetylene_preparation',
          questionEn: 'When preparing ethyne (acetylene, $\\text{C}_2\\text{H}_2$) in the laboratory by dropping water onto calcium carbide ($\\text{CaC}_2$), why is the evolving gas stream passed through a wash bottle containing copper(II) sulfate dissolved in dilute sulfuric acid before collection?',
          questionAr: 'عند تحضير غاز الإيثاين (الأسيتيلين $\\text{C}_2\\text{H}_2$) معملياً بتنقيط الماء على كربيد الكالسيوم ($\\text{CaC}_2$)، لماذا يُمرر الغاز المتصاعد أولاً على قارورة غسيل تحتوي على كبريتات النحاس الثنائية في حمض كبريتيك مخفف قبل جمعه؟',
          optionsEn: [
            'To remove phosphine ($\\text{PH}_3$) and hydrogen sulfide ($\\text{H}_2\\text{S}$) gases resulting from impurities in industrial calcium carbide',
            'To dehydrate the acetylene gas and remove water vapor carried over from the dropping funnel',
            'To catalyze the polymerization of acetylene into benzene before it enters the gas collection trough',
            'To neutralize carbon dioxide and sulfur dioxide gases formed during carbide decomposition'
          ],
          optionsAr: [
            'للتخلص من غازي الفوسفين ($\\text{PH}_3$) وكبريتيد الهيدروجين ($\\text{H}_2\\text{S}$) الناتجة عن الشوائب في كربيد الكالسيوم الصناعي',
            'لتجفيف غاز الأسيتيلين والتخلص من بخار الماء المتصاعد من قمع التنقيط',
            'لتحفيز بلمرة الأسيتيلين إلى بنزين عطري قبل وصوله إلى حوض جمع الغاز',
            'لمعادلة غازي ثاني أكسيد الكربون وثاني أكسيد الكبريت الناتجة عن تفكك الكربيد'
          ],
          correctAnswer: 'To remove phosphine ($\\text{PH}_3$) and hydrogen sulfide ($\\text{H}_2\\text{S}$) gases resulting from impurities in industrial calcium carbide',
          correctIndex: 0,
          hintEn: 'Technical calcium carbide contains traces of calcium phosphide and calcium sulfide which generate foul-smelling toxic gases $\\text{PH}_3$ and $\\text{H}_2\\text{S}$.',
          hintAr: 'يحتوي كربيد الكالسيوم التجاري على شوائب فوسفيد وكبريتيد الكالسيوم التي تنتج غازي الفوسفين وكبريتيد الهيدروجين.',
          stepByStepSolutionEn: [
            '1. Reaction of calcium carbide with water: $\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\to \\text{C}_2\\text{H}_2\\text{(g)} + \\text{Ca(OH)}_2$.',
            '2. Impurities: Industrial calcium carbide contains traces of calcium phosphide ($\\text{Ca}_3\\text{P}_2$) and calcium sulfide ($\\text{CaS}$), which react with water to release phosphine ($\\text{PH}_3$) and hydrogen sulfide ($\\text{H}_2\\text{S}$).',
            '3. Purification scrubber: Acidified $\\text{CuSO}_4$ absorbs $\\text{H}_2\\text{S}$ (forming insoluble black $\\text{CuS}$ precipitate) and oxidizes/absorbs $\\text{PH}_3$, yielding pure ethyne gas.'
          ],
          stepByStepSolutionAr: [
            '١. معادلة تحضير الإيثاين: $\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\to \\text{C}_2\\text{H}_2\\text{(g)} + \\text{Ca(OH)}_2$.',
            '٢. الشوائب المصاحبة: يحتوي كربيد الكالسيوم التجاري على شوائب من فوسفيد الكالسيوم ($\\text{Ca}_3\\text{P}_2$) وكبريتيد الكالسيوم ($\\text{CaS}$)، والتي تتفاعل مع الماء منتجة غازي الفوسفين ($\\text{PH}_3$) وكبريتيد الهيدروجين ($\\text{H}_2\\text{S}$) السامين كريهي الرائحة.',
            '٣. دور قارورة التنقية: محلول كبريتات النحاس في حمض الكبريتيك المخفف يمتص كبريتيد الهيدروجين مرسباً إياه على هيئة كبريتيد نحاس أسود ($\\text{CuS}\\downarrow$) ويتخلص من الفوسفين، فيخرج غاز الإيثاين نقياً.'
          ],
          teacherTipEn: 'Ethyne is collected over water due to its low solubility, just like ethene and methane.',
          teacherTipAr: 'يُجمع الإيثاين أيضاً بإزاحة الماء لأسفل لضعف ذوبانه في الماء.'
        }
      ],
      databank: egBacChemCh3Databank
    },
    {
      id: 'egbac_chem_ch4',
      chapterNumber: 4,
      titleEn: 'Chemical Thermodynamics, Gibbs Free Energy & Nernst Electrochemistry',
      titleAr: 'الديناميكا الحرارية الكيميائية وطاقة جيبس وكيمياء نيرنست الكهربية',
      descriptionEn: 'First and second laws of thermodynamics, enthalpy, standard entropy changes, Gibbs free energy spontaneity criteria, Galvanic cell potentials, and Nernst equation non-standard EMF calculations.',
      descriptionAr: 'القانون الأول والثاني للديناميكا الحرارية، الإنثالبي، التغير في الإنتروبيا القياسية، طاقة جيبس الحرة والتلقائية، جهد الخلايا الجلفانية، ومعادلة نيرنست.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "egbac_chem_l4",
          "titleEn": "Chemical Thermodynamics: Gibbs Free Energy, Entropy & Nernst Electrochemistry",
          "titleAr": "الديناميكا الحرارية الكيميائية: طاقة جيبس الحرة، الإنتروبيا والجهد الكهروكيميائي بمعادلة نيرنست",
          "summaryEn": "Second law entropy, Gibbs free energy spontaneity criteria (\\Delta G = \\Delta H - T\\Delta S), thermodynamic equilibrium connection (\\Delta G^\\circ = -RT \\ln K), and Nernst equation for non-standard galvanic cells.",
          "summaryAr": "الإنتروبيا والقانون الثاني للديناميكا، معيار التلقائية بطاقة جيبس الحرة، العلاقة بين الطاقة الحرة وثابت الاتزان، ومعادلة نيرنست لحساب جهود الخلايا غير القياسية.",
          "theoryContentEn": "### 1. Entropy ($S$) and The Second Law of Thermodynamics\n- **Microstates & Boltzmann Entropy Formula:**\n  Entropy quantifies the dispersal of energy and molecular microstates ($W$):\n  $S = k_B \\ln W$\n- **Second Law of Thermodynamics:**\n  For any spontaneous process in an isolated universe, total entropy must increase:\n  $\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0, \\quad \\text{where } \\Delta S_{\\text{surr}} = -\\frac{\\Delta H_{\\text{sys}}}{T}$\n\n---\n\n### 2. Gibbs Free Energy ($\\Delta G$) & Spontaneity Criteria\nMultiplying $-\\Delta S_{\\text{univ}}$ by absolute temperature $T$ defines the **Gibbs Free Energy Change** at constant temperature and pressure:\n$\\Delta G = \\Delta H - T \\Delta S$\n- **Spontaneity Conditions:**\n  - $\\Delta G < 0$: Spontaneous exergonic process (capable of doing non-expansion electrical work).\n  - $\\Delta G = 0$: System is at dynamic thermodynamic equilibrium.\n  - $\\Delta G > 0$: Non-spontaneous endergonic process.\n- **Enthalpy vs Entropy Regimes:**\n  - Exothermic ($\\Delta H < 0$) with positive entropy ($\\Delta S > 0$): Spontaneous at **all temperatures** ($\\Delta G < 0$ always).\n  - Endothermic ($\\Delta H > 0$) with negative entropy ($\\Delta S < 0$): Non-spontaneous at **all temperatures** ($\\Delta G > 0$ always).\n  - Both positive ($\\Delta H > 0, \\, \\Delta S > 0$): Spontaneous only at **high temperatures** ($T > \\frac{\\Delta H}{\\Delta S}$).\n  - Both negative ($\\Delta H < 0, \\, \\Delta S < 0$): Spontaneous only at **low temperatures** ($T < \\frac{\\Delta H}{\\Delta S}$).\n\n---\n\n### 3. Thermodynamic Connection: $\\Delta G^\\circ$ and Equilibrium Constant $K$\nUnder non-standard conditions with reaction quotient $Q$:\n$\\Delta G = \\Delta G^\\circ + R T \\ln Q$\nAt equilibrium, $\\Delta G = 0$ and $Q = K$, which establishes the universal relation:\n$\\Delta G^\\circ = -R T \\ln K \\implies K = e^{-\\Delta G^\\circ / (R T)}$\n\n---\n\n### 4. Electrochemistry & The Nernst Equation\nThe maximum non-expansion electrical work from a reversible redox cell equals $-\\Delta G$:\n$\\Delta G = -n F E_{\\text{cell}}, \\quad \\Delta G^\\circ = -n F E_{\\text{cell}}^\\circ$\nwhere $n$ is moles of transferred electrons, and $F = 96,500\\,\\text{C/mol}$ is Faraday's constant.\n- **The Nernst Equation:**\n  Substituting $\\Delta G$ into the free energy relation:\n  $E_{\\text{cell}} = E_{\\text{cell}}^\\circ - \\frac{R T}{n F} \\ln Q$\n  At standard room temperature ($T = 298.15\\,\\text{K}$):\n  $E_{\\text{cell}} = E_{\\text{cell}}^\\circ - \\frac{0.0592}{n} \\log_{10} Q$\n- **Concentration Cells:**\n  Galvanic cells where both half-cells contain the same chemical species at different concentrations ($E^\\circ = 0$). Voltage is driven purely by the entropy of dilution:\n  $E_{\\text{cell}} = -\\frac{0.0592}{n} \\log\\left(\\frac{[\\text{dilute}]}{[\\text{concentrated}]}\\right) = \\frac{0.0592}{n} \\log\\left(\\frac{[\\text{conc}]}{[\\text{dil}]}\\right)$",
          "theoryContentAr": "### ١. الإنتروبيا ($S$) والقانون الثاني للديناميكا الحرارية\n- **مفهوم الإنتروبيا ومعادلة بولتزمان:**\n  مقياس لدرجة العشوائية وتشتت الطاقة بين الحالات المجهرية ($W$):\n  $S = k_B \\ln W$\n- **القانون الثاني للديناميكا الحرارية:**\n  في أي عملية تلقائية تزداد إنتروبيا الكون الكلية:\n  $\\Delta S_{\\text{الكون}} = \\Delta S_{\\text{النظام}} + \\Delta S_{\\text{الوسط}} > 0$\n\n---\n\n### ٢. طاقة جيبس الحرة ($\\Delta G$) ومعيار التلقائية\nعند ثبوت درجة الحرارة والضغط:\n$\\Delta G = \\Delta H - T \\Delta S$\n- **معايير التلقائية:**\n  - $\\Delta G < 0$: التفاعل **تلقائي** ويحرر طاقة حرة قادرة على بذل شغل.\n  - $\\Delta G = 0$: النظام في حالة **اتزان ديناميكي حراري**.\n  - $\\Delta G > 0$: التفاعل **غير تلقائي**.\n- **حالات الإشارات:**\n  - طارد للحرارة ($\\Delta H < 0$) ومصحوب بزيادة إنتروبيا ($\\Delta S > 0$): تلقائي عند **جميع درجات الحرارة**.\n  - ماص للحرارة ومصحوب بزيادة إنتروبيا: تلقائي فقط عند **درجات الحرارة المرتفعة** ($T > \\Delta H / \\Delta S$).\n  - طارد ومصحوب بنقص في الإنتروبيا: تلقائي فقط عند **درجات الحرارة المنخفضة** ($T < \\Delta H / \\Delta S$).\n\n---\n\n### ٣. العلاقة بين الطاقة الحرة وثابت الاتزان $K$\n$\\Delta G^\\circ = -R T \\ln K \\implies K = e^{-\\Delta G^\\circ / (R T)}$\n\n---\n\n### ٤. الكيمياء الكهربية ومعادلة نيرنست\nترتبط الطاقة الحرة بالقوة الدافعة الكهربية للخلية:\n$\\Delta G^\\circ = -n F E_{\\text{cell}}^\\circ$\n- **معادلة نيرنست لحساب جهد الخلية في الظروف غير القياسية:**\n  $E_{\\text{cell}} = E_{\\text{cell}}^\\circ - \\frac{0.0592}{n} \\log_{10} Q \\quad (298.15\\,\\text{K})$\n- **خلايا التركيز:**\n  خلايا جلفانية يتطابق فيها نصفا الخلية في نوع الأقطاب وتختلف فقط في تركيز المحاليل ($E^\\circ = 0$). ينشأ التيار نتيجة التفاوت في الإنتروبيا حتى تتساوى التركيزات.",
          "formulas": [
            {
              "labelEn": "Gibbs Free Energy Spontaneity Relation",
              "labelAr": "معادلة طاقة جيبس الحرة ومعيار التلقائية",
              "latex": "\\Delta G = \\Delta H - T \\Delta S"
            },
            {
              "labelEn": "Free Energy & Equilibrium Constant Invariant",
              "labelAr": "العلاقة بين الطاقة الحرة وثابت الاتزان K",
              "latex": "\\Delta G^\\circ = -R T \\ln K"
            },
            {
              "labelEn": "Nernst Equation at 298 K",
              "labelAr": "معادلة نيرنست لحساب جهد الخلية عند 298 كلفن",
              "latex": "E_{\\text{cell}} = E_{\\text{cell}}^\\circ - \\frac{0.0592}{n} \\log Q"
            }
          ],
          "moeRef": {
            "bookTitleEn": "EG-Bac Advanced Chemistry & Physical Equilibrium",
            "bookTitleAr": "مرجع الكيمياء المتقدمة والاتزان الفيزيائي - البكالوريا المصرية",
            "grade": "Grade 12 STEM",
            "term": "Full Year",
            "officialCode": "EGBAC-CHEM-ADV-CH1-L4",
            "pageRange": "pp. 226 - 275"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Chemical Thermodynamics, Gibbs Energy & Nernst Electrochemical Potentials",
            "titleAr": "خطة درس: الديناميكا الحرارية، طاقة جيبس وجهود نيرنست الكهروكيميائية",
            "gradeLevel": "Grade 12 Advanced Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-CHEM-ADV-CH1-L4",
            "bloomsObjectivesEn": [
              "Evaluate reaction spontaneity across temperature regimes using Gibbs free energy delta G = delta H - T delta S.",
              "Calculate thermodynamic equilibrium constants K from standard free energy changes delta G^circ.",
              "Apply the Nernst equation to compute cell potentials for galvanic and concentration cells under non-standard conditions."
            ],
            "bloomsObjectivesAr": [
              "تقييم تلقائية التفاعلات الكيميائية بدلالة طاقة جيبس الحرة وتأثير درجات الحرارة.",
              "حساب ثوابت الاتزان الكيميائي K من قيم التغير في طاقة جيبس القياسية.",
              "تطبيق معادلة نيرنست لحساب جهود الخلايا الجلفانية وخلايا التركيز في الظروف غير القياسية."
            ],
            "prerequisitesEn": [
              "Enthalpy of reaction (Hess's law)",
              "Galvanic cell half-reactions",
              "Faraday's constant"
            ],
            "prerequisitesAr": [
              "حرارة التفاعل وقانون هس",
              "تفاعلات نصفي الخلية الجلفانية",
              "ثابت فاراداي للشحنة"
            ],
            "keyVocabularyEn": [
              {
                "term": "Gibbs Free Energy",
                "definition": "Thermodynamic potential that measures the maximum reversible work obtainable from a closed system at constant T and P."
              },
              {
                "term": "Nernst Equation",
                "definition": "Equation relating reduction potential of an electrochemical reaction to standard potential, temperature, and reaction quotient."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "طاقة جيبس الحرة",
                "definition": "دالة حالة ديناميكية حرارية تحدد أقصى شغل نافع غير تمددي يمكن الحصول عليه من نظام مغلق عند ثبوت الضغط والحرارة."
              },
              {
                "term": "معادلة نيرنست",
                "definition": "معادلة كهروكيميائية تحسب القوة الدافعة للخلية بدلالة الجهد القياسي وتركيزات الأيونات غير القياسية."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Entropy & Second Law Criteria",
                "phaseAr": "الإنتروبيا ومعيار القانون الثاني",
                "duration": "25 mins",
                "activitiesEn": "Analyzing physical state transitions and predicting signs of Delta S for reactions.",
                "activitiesAr": "تحليل تغيرات الحالة الفيزيائية وتوقع إشارة تغير الإنتروبيا في التفاعلات الكيميائية."
              },
              {
                "phaseEn": "Gibbs Free Energy & Equilibrium K",
                "phaseAr": "طاقة جيبس وثابت الاتزان",
                "duration": "35 mins",
                "activitiesEn": "Calculating Delta G = Delta H - T Delta S and finding threshold temperature for spontaneity.",
                "activitiesAr": "حساب طاقة جيبس وتحديد درجة الحرارة الحرجة التي يتحول عندها التفاعل إلى تلقائي."
              },
              {
                "phaseEn": "Nernst Non-Standard Electrochemistry",
                "phaseAr": "معادلة نيرنست والجهود الكهروكيميائية",
                "duration": "30 mins",
                "activitiesEn": "Computing Daniell cell EMF under perturbed Zn2+ and Cu2+ concentrations.",
                "activitiesAr": "حساب جهد خلية دانيال تحت تركيزات غير قياسية لأيونات الخارصين والنحاس."
              }
            ],
            "commonMisconceptionsEn": [
              "Assuming all exothermic reactions are spontaneous (if Delta S is negative, exothermicity may be overcome at high T).",
              "Forgetting that solids and pure liquids have activity = 1 in the Nernst reaction quotient Q."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن جميع التفاعلات الطاردة للحرارة تلقائية دائماً (إذا كانت الإنتروبيا سالبة يصبح التفاعل غير تلقائي عند الحرارة العالية).",
              "نسيان أن المواد الصلبة والسائلة النقية تركيزها الفعال يساوي 1 في حاصل التفاعل Q بمعادلة نيرنست."
            ],
            "differentiationEn": {
              "struggling": "Use a 2x2 grid correlating (+/- Delta H) and (+/- Delta S) with temperature zones.",
              "advanced": "Derive the biochemical membrane resting potential using the Goldman-Hodgkin-Katz equation."
            },
            "differentiationAr": {
              "struggling": "مصفوفة بصرية توضح الحالات الأربع لإشارات Delta H و Delta S وعلاقتها بتلقائية التفاعل.",
              "advanced": "استنتاج جهد الغشاء الخلوي العصبي باستخدام معادلة جولدمان المشتقة من نيرنست."
            },
            "formativeAssessmentEn": "At what temperature does a reaction with Delta H = +40 kJ/mol and Delta S = +100 J/mol K become spontaneous?",
            "formativeAssessmentAr": "عند أي درجة حرارة يصبح التفاعل ذو المحتوى Delta H = +40 kJ/mol والإنتروبيا Delta S = +100 J/mol K تلقائياً؟",
            "exitTicketQuestion": {
              "questionEn": "Calculate Delta G^circ (in kJ/mol) at 298 K for a cell with E^circ = +1.10 V and n = 2 (F = 96,500 C/mol).",
              "questionAr": "احسب Delta G القياسية (بالكيلوجول/مول) عند 298 كلفن لخلية جهدها القياسي +1.10 فولت و n = 2.",
              "solutionEn": "$\\Delta G^\\circ = -n F E^\\circ = -2 \\times 96,500 \\times 1.10 = -212,300\\,\\text{J/mol} = -212.3\\,\\text{kJ/mol}$.",
              "solutionAr": "$\\Delta G^\\circ = -n F E^\\circ = -2 \\times 96,500 \\times 1.10 = -212.3\\,\\text{kJ/mol}$."
            }
          },
          "worksheet": {
            "id": "egbac_chem_ws_4",
            "titleEn": "Worksheet 4: Thermodynamics, Gibbs Energy & Nernst Equation",
            "titleAr": "ورقة عمل ٤: الديناميكا الحرارية وطاقة جيبس ومعادلة نيرنست",
            "descriptionEn": "Rigorous quantitative problems on Gibbs free energy temperature thresholds, equilibrium constant derivations, and Nernst cell potentials.",
            "descriptionAr": "مسائل تدريبية متقدمة على حسابات طاقة جيبس الحرة وحرارة التلقائية وجهد الخلية بمعادلة نيرنست.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_chem_ws_p4_1",
                "titleEn": "Threshold Temperature for Spontaneous Reaction",
                "titleAr": "حساب درجة الحرارة الحرجة لبدء التفاعل التلقائي",
                "difficulty": "medium",
                "questionEn": "For the decomposition reaction: $\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$, $\\Delta H^\\circ = +178.3\\,\\text{kJ/mol}$ and $\\Delta S^\\circ = +160.5\\,\\text{J/mol}\\cdot\\text{K}$. Above what temperature does this reaction become spontaneous under standard pressure?",
                "questionAr": "في تفاعل انحلال كربونات الكالسيوم: $\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$، التغير في المحتوى الحراري $\\Delta H^\\circ = +178.3\\,\\text{kJ/mol}$ وتغير الإنتروبيا $\\Delta S^\\circ = +160.5\\,\\text{J/mol}\\cdot\\text{K}$. فوق أي درجة حرارة يصبح هذا التفاعل تلقائياً؟",
                "optionsEn": [
                  "$1111\\,\\text{K}$ ($838^\\circ\\text{C}$)",
                  "$900\\,\\text{K}$ ($627^\\circ\\text{C}$)",
                  "$1450\\,\\text{K}$ ($1177^\\circ\\text{C}$)",
                  "$298\\,\\text{K}$ ($25^\\circ\\text{C}$)"
                ],
                "optionsAr": [
                  "$1111\\,\\text{K}$ ($838^\\circ\\text{C}$)",
                  "$900\\,\\text{K}$ ($627^\\circ\\text{C}$)",
                  "$1450\\,\\text{K}$ ($1177^\\circ\\text{C}$)",
                  "$298\\,\\text{K}$ ($25^\\circ\\text{C}$)"
                ],
                "correctAnswer": "$1111\\,\\text{K}$ ($838^\\circ\\text{C}$)",
                "correctIndex": 0,
                "hintEn": "Set Delta G = 0 = Delta H - T * Delta S, so T_threshold = Delta H / Delta S (convert kJ to J).",
                "hintAr": "ضع طاقة جيبس مساوية للصفر: Delta G = 0 = Delta H - T * Delta S، فتكون درجة الحرارة T = Delta H / Delta S مع تحويل الكيلوجول إلى جول.",
                "stepByStepSolutionEn": [
                  "Step 1: The condition for threshold spontaneity is $\\Delta G = 0 \\implies \\Delta H - T \\Delta S = 0$.",
                  "Step 2: Solve for temperature: $T = \\frac{\\Delta H}{\\Delta S}$.",
                  "Step 3: Convert units: $\\Delta H = 178.3\\,\\text{kJ/mol} = 178,300\\,\\text{J/mol}$.",
                  "Step 4: Calculate: $T = \\frac{178,300\\,\\text{J/mol}}{160.5\\,\\text{J/mol}\\cdot\\text{K}} \\approx 1110.9\\,\\text{K} \\approx 1111\\,\\text{K} \\approx 838^\\circ\\text{C}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: شرط بدء التلقائية هو وصول طاقة جيبس للصفر: $\\Delta G = 0 \\implies \\Delta H - T\\Delta S = 0$.",
                  "الخطوة ٢: درجة الحرارة المطلقة: $T = \\frac{\\Delta H}{\\Delta S}$.",
                  "الخطوة ٣: تحويل الوحدات: $\\Delta H = 178,300\\,\\text{J/mol}$.",
                  "الخطوة ٤: الحساب: $T = \\frac{178,300}{160.5} \\approx 1111\\,\\text{K} = 838^\\circ\\text{C}$."
                ],
                "teacherTipEn": "At temperatures above 1111 K, the T*Delta S term outweighs positive Delta H, making Delta G negative.",
                "teacherTipAr": "عند درجات الحرارة الأعلى من 1111 كلفن، يتغلب حد الإنتروبيا T*Delta S على المحتوى الحراري وتصبح طاقة جيبس سالبة."
              },
              {
                "id": "egbac_chem_ws_p4_2",
                "titleEn": "Cell Potential under Non-Standard Conditions via Nernst Equation",
                "titleAr": "حساب جهد الخلية في الظروف غير القياسية بمعادلة نيرنست",
                "difficulty": "medium",
                "questionEn": "For the Daniell cell: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightleftharpoons \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$ with $E^\\circ = 1.10\\,\\text{V}$. What is the cell potential at $25^\\circ\\text{C}$ if $[\\text{Zn}^{2+}] = 0.0010\\,\\text{M}$ and $[\\text{Cu}^{2+}] = 1.0\\,\\text{M}$?",
                "questionAr": "في خلية دانيال: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightleftharpoons \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$ جهدها القياسي $E^\\circ = 1.10\\,\\text{V}$. ما هو جهد الخلية عند $25^\\circ\\text{C}$ إذا كان $[\\text{Zn}^{2+}] = 0.0010\\,\\text{M}$ و $[\\text{Cu}^{2+}] = 1.0\\,\\text{M}$؟",
                "optionsEn": [
                  "$1.19\\,\\text{V}$",
                  "$1.10\\,\\text{V}$",
                  "$1.01\\,\\text{V}$",
                  "$1.25\\,\\text{V}$"
                ],
                "optionsAr": [
                  "$1.19\\,\\text{V}$",
                  "$1.10\\,\\text{V}$",
                  "$1.01\\,\\text{V}$",
                  "$1.25\\,\\text{V}$"
                ],
                "correctAnswer": "$1.19\\,\\text{V}$",
                "correctIndex": 0,
                "hintEn": "Apply Nernst: E = E^circ - (0.0592 / 2) * log([Zn2+] / [Cu2+]).",
                "hintAr": "طبق معادلة نيرنست: E = E^circ - (0.0592 / 2) * log([Zn2+] / [Cu2+]).",
                "stepByStepSolutionEn": [
                  "Step 1: The redox reaction transfers $n = 2$ electrons.",
                  "Step 2: The reaction quotient is $Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]} = \\frac{10^{-3}}{1.0} = 10^{-3}$.",
                  "Step 3: Apply Nernst equation: $E = E^\\circ - \\frac{0.0592}{2} \\log(10^{-3}) = 1.10 - (0.0296)(-3) = 1.10 + 0.0888 \\approx 1.19\\,\\text{V}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: عدد الإلكترونات المتبادلة $n = 2$.",
                  "الخطوة ٢: حاصل التفاعل الأيوني: $Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]} = \\frac{10^{-3}}{1.0} = 10^{-3}$.",
                  "الخطوة ٣: تطبيق معادلة نيرنست: $E = 1.10 - \\frac{0.0592}{2} \\log(10^{-3}) = 1.10 - (0.0296)(-3) = 1.10 + 0.089 = 1.19\\,\\text{V}$."
                ],
                "teacherTipEn": "Lowering the product ion concentration [Zn2+] increases cell potential above the standard 1.10 V value.",
                "teacherTipAr": "خفض تركيز أيونات النواتج [Zn2+] يزيح التفاعل طردياً ويزيد من القوة الدافعة للخلية فوق القيمة القياسية."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Gibbs Free Energy & Nernst Cell Simulator",
            "titleAr": "محاكي طاقة جيبس الحرة وجهود نيرنست",
            "descriptionEn": "Interactive simulator modeling Gibbs temperature thresholds, entropy-enthalpy trade-offs, and Nernst cell potentials.",
            "descriptionAr": "محاكاة تفاعلية لحسابات طاقة جيبس الحرة وتغيرات التلقائية مع درجات الحرارة وجهود الخلايا الكهروكيميائية."
          }
        },
      ],
      solvedExamples: [
        {
          id: 'egbac_chem_se_04',
          titleEn: 'STEM Example 4: Secondary Lead-Acid Battery Chemistry & Hydrometer Density Test',
          titleAr: 'مثال ستيم ٤: كيمياء مركم الرصاص الحامضي واختبار كثافة الإلكتروليت بالهيدروميتر',
          difficulty: 'medium',
          diagramType: 'chem_lead_acid_accumulator',
          questionEn: 'During prolonged discharge of a 12V automotive lead-acid storage battery, what chemical transformations occur at both the sponge lead anode and lead(IV) dioxide cathode, and how is the state of charge monitored by electrolyte density?',
          questionAr: 'أثناء تفريغ شحنة بطارية مركم الرصاص الحامضية (12 فولت)، ما التحولات الكيميائية التي تطرأ على كل من مصعد الرصاص الإسفنجي ومهبط ثاني أكسيد الرصاص، وكيف يُستدل على حالة شحن البطارية بقياس كثافة المحلول الإلكتروليتي؟',
          optionsEn: [
            'Both electrodes convert into solid lead(II) sulfate ($\\text{PbSO}_4$) and sulfuric acid density drops below $1.28\\,\\text{g/cm}^3$',
            'The anode oxidizes to lead nitrate while the cathode reduces to metallic copper with increased acid density',
            'Both electrodes dissolve completely into soluble lead ions without forming any solid precipitate',
            'Sulfuric acid decomposes exclusively into oxygen and sulfur trioxide while density increases above $1.50\\,\\text{g/cm}^3$'
          ],
          optionsAr: [
            'تتحول مادتا كلا القطبين إلى كبريتات رصاص ثنائية صلبة ($\\text{PbSO}_4$) وتقل كثافة حمض الكبريتيك عن $1.28\\,\\text{g/cm}^3$',
            'يتأكسد الأنود إلى نترات رصاص ويختزل الكاثود إلى نحاس فلزي مع زيادة كثافة الحمض',
            'تذوب مادتا القطبين تماماً وتتحولان إلى أيونات رصاص ذائبة دون تكوّن أي راسب صلب',
            'ينحل حمض الكبريتيك تماماً إلى أكسجين وثالث أكسيد الكبريت مع ارتفاع الكثافة فوق $1.50\\,\\text{g/cm}^3$'
          ],
          correctAnswer: 'Both electrodes convert into solid lead(II) sulfate ($\\text{PbSO}_4$) and sulfuric acid density drops below $1.28\\,\\text{g/cm}^3$',
          correctIndex: 0,
          hintEn: 'Overall discharge: $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\to 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$. Water generation dilutes the acid.',
          hintAr: 'التفاعل الكلي للتفريغ: تكوّن كبريتات الرصاص الثنائية على كلا القطبين وإنتاج الماء الذي يخفف المحلول الحامضي.',
          stepByStepSolutionEn: [
            '1. Anode oxidation: $\\text{Pb}\\text{(s)} + \\text{SO}_4^{2-} \\to \\text{PbSO}_4\\text{(s)} + 2e^-$.',
            '2. Cathode reduction: $\\text{PbO}_2\\text{(s)} + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\to \\text{PbSO}_4\\text{(s)} + 2\\text{H}_2\\text{O}$.',
            '3. Overall discharge: $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\to 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$.',
            '4. Fully charged density is $1.28\\text{ to }1.30\\,\\text{g/cm}^3$. As sulfuric acid is consumed and water is produced during discharge, density drops below $1.20\\,\\text{g/cm}^3$, signaling required recharging.'
          ],
          stepByStepSolutionAr: [
            '١. تفاعل الأكسدة عند الأنود: $\\text{Pb}\\text{(s)} + \\text{SO}_4^{2-} \\to \\text{PbSO}_4\\text{(s)} + 2e^-$.',
            '٢. تفاعل الاختزال عند الكاثود: $\\text{PbO}_2\\text{(s)} + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\to \\text{PbSO}_4\\text{(s)} + 2\\text{H}_2\\text{O}$.',
            '٣. المعادلة الكلية للتفريغ: $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\to 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$.',
            '٤. تكون كثافة الحمض في البطارية كاملة الشحن بين $1.28$ و $1.30\\,\\text{g/cm}^3$. وباستهلاك الحمض وتكوّن الماء تنخفض الكثافة إلى أقل من $1.20\\,\\text{g/cm}^3$ كدلالة على ضرورة إعادة الشحن.'
          ],
          teacherTipEn: 'A hydrometer is used in automotive service to measure battery specific gravity directly.',
          teacherTipAr: 'يُستخدم الهيدروميتر (مقياس الكثافة النوعية) في ورش صيانة السيارات لفحص حالة شحن المركم بدقة وسرعة.'
        }
      ],
      exerciseProblems: [],
      databank: egBacChemCh4Databank
    },
    {
      id: 'egbac_chem_ch5',
      chapterNumber: 5,
      titleEn: 'Transition Metal Coordination Chemistry & Crystal Field Splitting',
      titleAr: 'كيمياء التناسق للعناصر الانتقالية وانفصام المجال البلوري',
      descriptionEn: 'Transition metal electronic configurations, variable oxidation states, coordination complexes, ligand field splitting of d-orbitals, spectrochemical series, magnetic susceptibility, and catalytic action.',
      descriptionAr: 'التوزيع الإلكتروني للعناصر الانتقالية، حالات التأكسد المتعددة، متراكبات التناسق، انفصام أوربيتالات d في المجال البلوري، المتسلسلة الطيفية الكيميائية، والخواص المغناطيسية والتحفيزية.',
      isFullyEquipped: true,
      lessons: [
        {
          "id": "egbac_chem_l5",
          "titleEn": "Transition Metal Coordination Chemistry: Crystal Field Splitting & Catalytic Mechanisms",
          "titleAr": "كيمياء المعقدات التناسقية للعناصر الانتقالية: انقسام المجال البلوري وآليات الحفز",
          "summaryEn": "Werner coordination theory, crystal field splitting energy (\\Delta_o), spectrochemical ligand series, high-spin vs low-spin complexes, d-d color transitions, and organometallic catalysis.",
          "summaryAr": "نظرية فيرنر للمركبات التناسقية، طاقة انقسام المجال البلوري، متسلسلة الطيف الكيميائي لليجاندات، المعقدات عالية ومنخفضة الغزل، انتقالات d-d المسببة للألوان وآليات الحفز.",
          "theoryContentEn": "### 1. Werner's Coordination Theory & Structural Geometries\nAlfred Werner established the foundations of coordination chemistry by distinguishing between two types of valence:\n- **Primary Valence:** Ionizable, corresponds to the central transition metal's oxidation state (neutralized by counter-ions).\n- **Secondary Valence:** Non-ionizable, corresponds to the **Coordination Number ($CN$)**, representing coordinate covalent bonds formed by Lewis base ligands donating electron pairs into vacant metal hybrid orbitals.\n- **Common Geometries:**\n  - $CN = 6$: Octahedral geometry (e.g. $[\\text{Fe(CN)}_6]^{4-}, [\\text{Co(NH}_3)_6]^{3+}$).\n  - $CN = 4$: Tetrahedral (e.g. $[\\text{NiCl}_4]^{2-}$) or Square Planar (e.g. $[\\text{Pt(NH}_3)_2\\text{Cl}_2]$ *cisplatin*).\n\n---\n\n### 2. Crystal Field Theory (CFT) & $d$-Orbital Splitting\nIn an isolated gaseous transition metal atom, all five $d$-orbitals ($d_{xy}, d_{yz}, d_{xz}, d_{x^2-y^2}, d_{z^2}$) are degenerate (equal in energy).\n- **Octahedral Crystal Field Splitting:**\n  When six negative or dipolar ligands approach along the Cartesian axes ($x, y, z$):\n  - Orbitals pointing directly at ligands ($d_{x^2-y^2}, d_{z^2}$) experience strong electrostatic repulsion and split upward in energy into the doubly degenerate **$e_g$ sub-level** ($+0.6\\,\\Delta_o$).\n  - Orbitals directed between axes ($d_{xy}, d_{yz}, d_{xz}$) experience less repulsion and stabilize into the triply degenerate **$t_{2g}$ sub-level** ($-0.4\\,\\Delta_o$).\n  - The energy separation is the **Crystal Field Splitting Energy ($\\Delta_o$)**.\n- **Spectrochemical Series:**\n  Ligands ordered by increasing splitting ability:\n  $\\text{I}^- < \\text{Br}^- < \\text{Cl}^- < \\text{F}^- < \\text{OH}^- < \\text{H}_2\\text{O} < \\text{NH}_3 < \\text{en} < \\text{NO}_2^- < \\text{CN}^- < \\text{CO}$\n- **High-Spin vs Low-Spin Complexes ($d^4 - d^7$):**\n  - **Weak Field Ligands (Small $\\Delta_o < P$, Pairing Energy):** Electrons populate $e_g$ before pairing in $t_{2g}$ (Hund's rule followed, **High-Spin** maximum unpaired electrons).\n  - **Strong Field Ligands (Large $\\Delta_o > P$):** Electrons completely pair up in $t_{2g}$ before occupying $e_g$ (**Low-Spin** minimum unpaired electrons).\n\n---\n\n### 3. Origin of Color in Coordination Complexes ($d-d$ Transitions)\nWhen visible light shines on a coordination complex, an electron in the lower $t_{2g}$ level absorbs a photon matching $\\Delta_o$ and transitions to the $e_g$ level:\n$\\Delta_o = h\\nu = \\frac{h c}{\\lambda_{\\text{absorbed}}}$\nThe human eye perceives the **complementary color** transmitted or reflected:\n- Absorbing red light ($approx 700\\,\\text{nm}$) transmits **green**.\n- Absorbing yellow/orange light transmits **blue/violet** (e.g. $[\\text{Cu(H}_2\\text{O})_6]^{2+}$ is blue).\n- Ions with empty $d^0$ ($\\text{Sc}^{3+}, \\text{Ti}^{4+}$) or completely full $d^{10}$ ($\\text{Zn}^{2+}, \\text{Cu}^+$) cannot undergo $d-d$ transitions and are **colorless**.\n\n---\n\n### 4. Transition Metal Catalysis Mechanisms\nTransition metals excel as industrial and biochemical catalysts due to:\n1. Multiple stable variable oxidation states facilitating facile electron transfer.\n2. Partially filled $d$-orbitals capable of forming transient coordinate bonds with reactant molecules (lowering activation energy $E_a$).\n- **Haber-Bosch Ammonia Synthesis:** Finely divided Iron ($alpha-\\text{Fe}$) provides surface active sites for dissociative chemisorption of $N_2$ (breaking the $945\\,\\text{kJ/mol}$ triple bond).\n- **Homogeneous Catalysis:** Wilkinson's catalyst $[\\text{RhCl(PPh}_3)_3]$ for stereoselective alkene hydrogenation via oxidative addition and reductive elimination cycles.",
          "theoryContentAr": "### ١. نظرية فيرنر للمركبات التناسقية\nميز ألفريد فيرنر بين نوعين من التكافؤ للعناصر الانتقالية:\n- **التكافؤ الأولي:** تكافؤ قابل للتأين يمثل عدد تأكسد الفلز المركزي وتعادله الأيونات البسيطة.\n- **التكافؤ الثانوي:** تكافؤ غير قابل للتأين يمثل **العدد التناسقي**، وهو عدد الروابط التناسقية التي تمنحها الليجاندات (قواعد لويس) إلى الأوربيتالات الفارغة للفلز المركزي.\n- **الأشكال الهندسية الشائعة:** ثماني السطوح ($CN = 6$) مثل $[\\text{Fe(CN)}_6]^{4-}$، ورباعي السطوح أو مربع مستوٍ ($CN = 4$) مثل دواء السيسبلاتين $[\\text{Pt(NH}_3)_2\\text{Cl}_2]$.\n\n---\n\n### ٢. نظرية المجال البلوري (CFT) وانقسام أوربيتالات $d$\nفي الذرة الحرة تكون أوربيتالات $d$ الخمسة متكافئة في الطاقة (منحلة).\n- **الانقسام في المجال ثماني السطوح:**\n  عند اقتراب ٦ ليجاندات على طول المحاور الكارتيزية ($x, y, z$):\n  - الأوربيتالات الواقعة مباشرة على المحاور ($d_{x^2-y^2}, d_{z^2}$) تتنافر بشدة وترتفع طاقتها لتكون المستوى الثنائي **$e_g$**.\n  - الأوربيتالات الواقعة بين المحاور ($d_{xy}, d_{yz}, d_{xz}$) تتنافر بدرجة أقل وتهبط طاقتها لتكون المستوى الثلاثي **$t_{2g}$**.\n  - فارق الطاقة بين المستويين يسمى **طاقة انقسام المجال البلوري ($\\Delta_o$)**.\n- **متسلسلة الطيف الكيميائي لليجاندات:**\n  ترتيب الليجاندات حسب قدرتها على إحداث انقسام المجال:\n  $\\text{I}^- < \\text{Br}^- < \\text{Cl}^- < \\text{F}^- < \\text{H}_2\\text{O} < \\text{NH}_3 < \\text{en} < \\text{CN}^- < \\text{CO}$\n- **المعقدات عالية ومنخفضة الغزل المغناطيسي:**\n  - ليجاند ضعيف المجال (مثل الماء أو الهاليدات): $\\Delta_o$ صغيرة وتتوزع الإلكترونات مفردة أولاً (عالي الغزل).\n  - ليجاند قوي المجال (مثل السيانيد وأول أكسيد الكربون): $\\Delta_o$ كبيرة وتزدوج الإلكترونات في مستوى $t_{2g}$ قبل الصعود إلى $e_g$ (منخفض الغزل).\n\n---\n\n### ٣. أصل الألوان في مركبات العناصر الانتقالية\nتمتص الإلكترونات فوتونات من الضوء المرئي تساوي طاقتها $\\Delta_o$ وتنتقل من المستوى $t_{2g}$ إلى المستوى $e_g$ (انتقالات $d-d$):\n$\\Delta_o = h\\nu = \\frac{h c}{\\lambda}$\nواللون الذي تراه العين البشرية هو **اللون المتمم** للون الممتص. أيونات $d^0$ و $d^{10}$ تكون عديمة اللون لعدم إمكانية حدوث انتقالات إلكترونية.\n\n---\n\n### ٤. ميكانيكية النشاط الحفزي للفلزات الانتقالية\nترجع كفاءة العناصر الانتقالية كعوامل حفازة إلى:\n١. تعدد حالات تأكسدها وسهولة انتقال الإلكترونات منها وإليها.\n٢. استخدام إلكترونات $4s$ و $3d$ في تكوين روابط مؤقتة مع جزيئات المواد المتفاعلة مما يضعف روابطها ويقلل طاقة التنشيط.",
          "formulas": [
            {
              "labelEn": "Crystal Field Transition Wavelength",
              "labelAr": "الطول الموجي لامتصاص فوتون انقسام المجال البلوري",
              "latex": "\\Delta_o = \\frac{h c}{\\lambda_{\\text{absorbed}}}"
            },
            {
              "labelEn": "Spin-Only Magnetic Moment",
              "labelAr": "العزم المغناطيسي المغزلي بدلالة الإلكترونات المفردة",
              "latex": "\\mu_s = \\sqrt{n (n + 2)}\\,\\mu_B"
            }
          ],
          "moeRef": {
            "bookTitleEn": "EG-Bac Advanced Chemistry & Physical Equilibrium",
            "bookTitleAr": "مرجع الكيمياء المتقدمة والاتزان الفيزيائي - البكالوريا المصرية",
            "grade": "Grade 12 STEM",
            "term": "Full Year",
            "officialCode": "EGBAC-CHEM-ADV-CH1-L5",
            "pageRange": "pp. 276 - 330"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Coordination Chemistry, Crystal Field Splitting & Homogeneous Catalysis",
            "titleAr": "خطة درس: الكيمياء التناسقية، انقسام المجال البلوري وآليات الحفز المتجانس",
            "gradeLevel": "Grade 12 Advanced Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-CHEM-ADV-CH1-L5",
            "bloomsObjectivesEn": [
              "Construct octahedral d-orbital splitting diagrams and differentiate t2g and eg electron occupancies.",
              "Predict high-spin vs low-spin electron configurations from the spectrochemical series and pairing energy.",
              "Correlate d-d transition absorption wavelengths with perceived complementary colors in transition complexes."
            ],
            "bloomsObjectivesAr": [
              "رسم مخطط انقسام أوربيتالات d في المجال ثماني السطوح وتوزيع الإلكترونات في مستويي t2g و eg.",
              "توقع التوزيع الإلكتروني عالي ومنخفض الغزل باستخدام متسلسلة الطيف الكيميائي وطاقة الازدواج.",
              "ربط الطول الموجي لامتصاص انتقالات d-d باللون المتمم المنعكس لمحاليل المركبات التناسقية."
            ],
            "prerequisitesEn": [
              "Hund's rule and Pauli exclusion principle",
              "Lewis acid-base coordinate bonds",
              "Visible light color spectrum"
            ],
            "prerequisitesAr": [
              "قاعدة هوند ومبدأ الاستبعاد لباولي",
              "الروابط التناسقية لقواعد وأحماض لويس",
              "طيف ألوان الضوء المنظور"
            ],
            "keyVocabularyEn": [
              {
                "term": "Crystal Field Splitting (Delta_o)",
                "definition": "Energy difference between t2g and eg sets of d-orbitals in an octahedral coordination complex."
              },
              {
                "term": "Spectrochemical Series",
                "definition": "Empirical ranking of ligands ordered by increasing crystal field splitting energy."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "طاقة انقسام المجال البلوري (دلتا)",
                "definition": "فارق الطاقة بين مستويي t2g و eg الناتج عن تنافر الليجاندات مع إلكترونات d."
              },
              {
                "term": "متسلسلة الطيف الكيميائي",
                "definition": "ترتيب تدريجي لليجاندات حسب قدرتها على إحداث انقسام في أوربيتالات d."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Werner Formulations & Ligand Field Theory",
                "phaseAr": "صيغ فيرنر ونظرية المجال التناسقي",
                "duration": "25 mins",
                "activitiesEn": "Analyzing primary vs secondary valences and drawing octahedral complex coordinates.",
                "activitiesAr": "التمييز بين التكافؤ الأولي والثانوي وتحديد العدد التناسقي والشكل الفراغي للمركب."
              },
              {
                "phaseEn": "Crystal Field Splitting & Spin States",
                "phaseAr": "انقسام المجال البلوري وحالات الغزل",
                "duration": "35 mins",
                "activitiesEn": "Populating d4 to d7 complexes in weak vs strong ligand fields and calculating spin-only moments.",
                "activitiesAr": "توزيع إلكترونات أيونات Fe و Co في المجالات الضعيفة والقوية وحساب العزم المغناطيسي."
              },
              {
                "phaseEn": "Color Origin & Catalytic Organometallics",
                "phaseAr": "أصل الألوان وآليات الحفز",
                "duration": "30 mins",
                "activitiesEn": "Using the color wheel to deduce absorbed photons and tracing catalytic cycles.",
                "activitiesAr": "استخدام عجلة الألوان لاستنتاج الطول الموجي الممتص وتتبع دورات الحفز الكيميائي."
              }
            ],
            "commonMisconceptionsEn": [
              "Assuming all d-electron compounds are colored (d0 and d10 configurations are colorless).",
              "Thinking strong field ligands increase unpaired electrons (strong field forces pairing, producing low-spin)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن جميع مركبات العناصر الانتقالية ملونة (أيونات d0 و d10 عديمة اللون تماماً).",
              "الظن بأن الليجاند القوي يزيد عدد الإلكترونات المفردة (الليجاند القوي يجبر الإلكترونات على الازدواج ويقلل العزم المغناطيسي)."
            ],
            "differentiationEn": {
              "struggling": "Use a 6-slice artist color wheel matching complementary opposite color pairs.",
              "advanced": "Calculate crystal field stabilization energy (CFSE) in terms of Dq and pairing energy P."
            },
            "differentiationAr": {
              "struggling": "استخدام عجلة الألوان التكميلية لتحديد اللون الممتص والمتمم بطريقة بصرية سهلة.",
              "advanced": "حساب طاقة استقرار المجال البلوري (CFSE) بدلالة وحدات Dq وطاقة الازدواج P."
            },
            "formativeAssessmentEn": "Why is [Fe(H2O)6]2+ paramagnetic with 4 unpaired electrons while [Fe(CN)6]4- is diamagnetic with 0 unpaired electrons?",
            "formativeAssessmentAr": "علل: معقد الحديد المائي بارامغناطيسي يحتوي على ٤ إلكترونات مفردة بينما معقد سيانيد الحديد دايامغناطيسي خالي من المفردة؟",
            "exitTicketQuestion": {
              "questionEn": "Calculate the spin-only magnetic moment for a high-spin d5 octahedral complex (5 unpaired electrons).",
              "questionAr": "احسب العزم المغناطيسي المغزلي لأيون ذي توزيع d5 عالي الغزل (يحتوي على ٥ إلكترونات مفردة).",
              "solutionEn": "$\\mu_s = \\sqrt{n (n + 2)} = \\sqrt{5 (5 + 2)} = \\sqrt{35} \\approx 5.92\\,\\mu_B$.",
              "solutionAr": "$\\mu_s = \\sqrt{n (n + 2)} = \\sqrt{5 (7)} = \\sqrt{35} \\approx 5.92\\,\\text{بور مغنيتون}$."
            }
          },
          "worksheet": {
            "id": "egbac_chem_ws_5",
            "titleEn": "Worksheet 5: Crystal Field Theory & Coordination Chemistry",
            "titleAr": "ورقة عمل ٥: نظرية المجال البلوري وكيمياء المركبات التناسقية",
            "descriptionEn": "Rigorous problems on crystal field splitting energies, spectrochemical ligand comparisons, spin configurations, and complementary color transitions.",
            "descriptionAr": "مسائل تدريبية متقدمة على طاقة انقسام المجال البلوري ومتسلسلة الليجاندات والعزم المغناطيسي وألوان المركبات.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_chem_ws_p5_1",
                "titleEn": "Absorbed Photon Wavelength from Crystal Field Splitting Energy",
                "titleAr": "حساب الطول الموجي للفوتون الممتص من طاقة انقسام المجال البلوري",
                "difficulty": "medium",
                "questionEn": "An octahedral complex has a crystal field splitting energy of $\\Delta_o = 240\\,\\text{kJ/mol}$. What is the wavelength of light absorbed during the $d-d$ transition ($h = 6.625 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$, $c = 3.0 \\times 10^8\\,\\text{m/s}$, $N_A = 6.022 \\times 10^{23}\\,\\text{mol}^{-1}$)?",
                "questionAr": "معقد ثماني السطوح طاقة انقسام مجاله البلوري $\\Delta_o = 240\\,\\text{kJ/mol}$. ما هو الطول الموجي للضوء الممتص أثناء انتقال $d-d$؟",
                "optionsEn": [
                  "$498\\,\\text{nm}$ (Blue-Green)",
                  "$650\\,\\text{nm}$ (Red)",
                  "$380\\,\\text{nm}$ (Violet)",
                  "$580\\,\\text{nm}$ (Yellow)"
                ],
                "optionsAr": [
                  "$498\\,\\text{nm}$ (أزرق مخضر)",
                  "$650\\,\\text{nm}$ (أحمر)",
                  "$380\\,\\text{nm}$ (بنفسجي)",
                  "$580\\,\\text{nm}$ (أصفر)"
                ],
                "correctAnswer": "$498\\,\\text{nm}$ (Blue-Green)",
                "correctIndex": 0,
                "hintEn": "Convert energy per mole to energy per photon (divide by N_A), then apply lambda = h * c / E.",
                "hintAr": "حول الطاقة من مول إلى فوتون مفرد بالقسمة على عدد أفوجادرو NA، ثم طبق القانون: lambda = h * c / E.",
                "stepByStepSolutionEn": [
                  "Step 1: Energy per single photon: $E = \\frac{\\Delta_o}{N_A} = \\frac{240,000\\,\\text{J/mol}}{6.022 \\times 10^{23}\\,\\text{mol}^{-1}} \\approx 3.985 \\times 10^{-19}\\,\\text{J}$.",
                  "Step 2: Relate photon energy to wavelength: $\\lambda = \\frac{h c}{E}$.",
                  "Step 3: Calculate: $\\lambda = \\frac{(6.625 \\times 10^{-34})(3.0 \\times 10^8)}{3.985 \\times 10^{-19}} = \\frac{1.9875 \\times 10^{-25}}{3.985 \\times 10^{-19}} \\approx 4.987 \\times 10^{-7}\\,\\text{m} \\approx 498\\,\\text{nm}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: طاقة الفوتون الواحد: $E = \\frac{240,000}{6.022 \\times 10^{23}} \\approx 3.985 \\times 10^{-19}\\,\\text{J}$.",
                  "الخطوة ٢: الطول الموجي: $\\lambda = \\frac{h c}{E}$.",
                  "الخطوة ٣: بالتعويض: $\\lambda = \\frac{(6.625 \\times 10^{-34})(3.0 \\times 10^8)}{3.985 \\times 10^{-19}} \\approx 498\\,\\text{nm}$ (في نطاق الضوء الأزرق المخضر)."
                ],
                "teacherTipEn": "Since blue-green light (498 nm) is absorbed, the complex will appear complementary red-orange.",
                "teacherTipAr": "بما أن المعقد يمتص الضوء الأزرق المخضر، فإن العين البشرية تراه باللون المتمم وهو الأحمر البرتقالي."
              },
              {
                "id": "egbac_chem_ws_p5_2",
                "titleEn": "Spin State & Magnetic Moment of Hexacyanoferrate(II)",
                "titleAr": "حالة الغزل والعزم المغناطيسي لأيون سداسي سيانو حديدات II",
                "difficulty": "medium",
                "questionEn": "Cyanide ($\\text{CN}^-$) is a strong-field ligand. What is the electron configuration of the central $\\text{Fe}^{2+}$ ion ($d^6$) in $[\\text{Fe(CN)}_6]^{4-}$, and what is its magnetic property?",
                "questionAr": "أيون السيانيد ($\\text{CN}^-$) ليجاند قوي المجال. ما هو التوزيع الإلكتروني لأيون $\\text{Fe}^{2+}$ المركزي ($d^6$) في معقد $[\\text{Fe(CN)}_6]^{4-}$، وما هي خاصيته المغناطيسية؟",
                "optionsEn": [
                  "$t_{2g}^6 e_g^0$, Diamagnetic ($0$ unpaired electrons, $\\mu = 0$)",
                  "$t_{2g}^4 e_g^2$, Paramagnetic ($4$ unpaired electrons, $\\mu = 4.90\\,\\mu_B$)",
                  "$t_{2g}^3 e_g^3$, Paramagnetic ($3$ unpaired electrons, $\\mu = 3.87\\,\\mu_B$)",
                  "$t_{2g}^5 e_g^1$, Paramagnetic ($2$ unpaired electrons, $\\mu = 2.83\\,\\mu_B$)"
                ],
                "optionsAr": [
                  "$t_{2g}^6 e_g^0$، دايامغناطيسي (صفر إلكترون مفرد، العزم = 0)",
                  "$t_{2g}^4 e_g^2$، بارامغناطيسي (٤ إلكترونات مفردة، العزم = 4.90)",
                  "$t_{2g}^3 e_g^3$، بارامغناطيسي (٣ إلكترونات مفردة)",
                  "$t_{2g}^5 e_g^1$، بارامغناطيسي (إلكترونان مفردان)"
                ],
                "correctAnswer": "$t_{2g}^6 e_g^0$, Diamagnetic ($0$ unpaired electrons, $\\mu = 0$)",
                "correctIndex": 0,
                "hintEn": "CN- is a strong-field ligand, making Delta_o > P. All 6 d-electrons pair up in the lower t2g orbitals.",
                "hintAr": "السيانيد ليجاند قوي يحدث انقساماً كبيراً في المجال يفوق طاقة الازدواج، فتزدوج جميع الإلكترونات الستة في المستوى الأدنى t2g.",
                "stepByStepSolutionEn": [
                  "Step 1: Iron(II) has an electron configuration of $[\\text{Ar}] 3d^6$.",
                  "Step 2: Cyanide $\\text{CN}^-$ is at the highest end of the spectrochemical series, inducing a large crystal field splitting energy ($\\Delta_o > P$).",
                  "Step 3: Large $\\Delta_o$ favors complete electron pairing in the lower $t_{2g}$ sub-level before any electron can enter $e_g$.",
                  "Step 4: All 6 electrons pair into $t_{2g}^6 e_g^0$. With 0 unpaired electrons, the complex is completely diamagnetic with magnetic moment $\\mu = 0\\,\\text{BM}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: أيون الحديد II له التوزيع الإلكتروني $[\\text{Ar}] 3d^6$.",
                  "الخطوة ٢: السيانيد $\\text{CN}^-$ يقع في قمة متسلسلة الطيف الكيميائي كليجاند قوي المجال، فتكون طاقة الانقسام أكبر من طاقة الازدواج ($\\Delta_o > P$).",
                  "الخطوة ٣: تجبر الإلكترونات على الازدواج الكامل في المستوى الأدنى $t_{2g}$.",
                  "الخطوة ٤: التوزيع الناتج هو $t_{2g}^6 e_g^0$، وعدد الإلكترونات المفردة يساوي صفراً، ويكون المعقد دايامغناطيسياً وعزمه المغناطيسي صفر."
                ],
                "teacherTipEn": "Compare this with [Fe(H2O)6]2+ where weak-field water produces t2g^4 eg^2 (paramagnetic with 4 unpaired electrons).",
                "teacherTipAr": "قارن هذا بالمعقد المائي للحديد [Fe(H2O)6]2+ حيث ينتج الماء ضعيف المجال توزيع t2g^4 eg^2 بارامغناطيسياً بـ 4 إلكترونات مفردة."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Crystal Field d-Orbital & Magnetism Lab",
            "titleAr": "مختبر انقسام أوربيتالات المجال البلوري والمغناطيسية",
            "descriptionEn": "Interactive coordination complex visualizer calculating t2g/eg splitting, spin states, and complementary d-d colors.",
            "descriptionAr": "محاكاة تفاعلية لانقسام مستويات d وحسابات الغزل والعزم المغناطيسي وألوان انتقالات المركبات التناسقية."
          }
        }
      ],
      solvedExamples: [],
      exerciseProblems: [],
      databank: egBacChemCh5Databank
    }
  ]
};
