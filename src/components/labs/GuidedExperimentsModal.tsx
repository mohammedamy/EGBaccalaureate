import React, { useState } from 'react';
import type { Language } from '../../i18n/translations';
import { MathRenderer } from '../MathRenderer';
import {
  X,
  FileSpreadsheet,
  CheckCircle,
  Printer,
  Sparkles,
  Award,
  RotateCcw,
  BookOpen,
  ChevronDown,
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  activeLab: 'math' | 'physics' | 'chemistry' | 'biology';
}

interface GuidedExperiment {
  id: string;
  lab: 'math' | 'physics' | 'chemistry' | 'biology';
  titleEn: string;
  titleAr: string;
  gradeEn: string;
  gradeAr: string;
  hypothesisEn: string;
  hypothesisAr: string;
  apparatusEn: string[];
  apparatusAr: string[];
  stepsEn: string[];
  stepsAr: string[];
  formula: string;
  expectedConclusionEn: string;
  expectedConclusionAr: string;
}

const EXPERIMENTS: GuidedExperiment[] = [
  // Physics
  {
    id: 'phys-exp-1',
    lab: 'physics',
    titleEn: 'Verification of Closed-Circuit Ohm Law & Internal Resistance (r)',
    titleAr: 'تحقيق قانون أوم للدائرة المغلقة وتعيين المقاومة الداخلية للعمود (r)',
    gradeEn: 'Grade 12 Physics - Electricity & Circuits',
    gradeAr: 'الصف الثالث الثانوي - التيار الكهربي وقانون أوم للدائرة المغلقة',
    hypothesisEn: 'Terminal voltage $V$ decreases linearly with current $I$ due to internal potential drop $Ir$: $V = V_B - Ir$.',
    hypothesisAr: 'يهبط فرق الجهد بين قطبي المصدر ($V$) خطياً مع زيادة شدة التيار ($I$) بمقدار الهبوط في الجهد عبر المقاومة الداخلية ($Ir$).',
    apparatusEn: ['DC Battery source with EMF $V_B$', 'Digital Voltmeter across battery terminals ($V$)', 'Ammeter in series ($I$)', 'Variable load resistor Rheostat ($R_{\\text{ext}}$)', 'Connecting leads'],
    apparatusAr: ['بطارية ذات قوة دافعة $V_B$ ومقاومة داخلية $r$', 'فولتميتر رقمي بين طرفي البطارية ($V$)', 'أميتر موصل على التوالي ($I$)', 'ريوستات منزلق (مقاومة متغيرة $R_{\\text{ext}}$)', 'أسلاك توصيل منعدمة المقاومة'],
    stepsEn: [
      'Set battery EMF $V_B$ to $12\\text{ V}$ and internal resistance $r$ to $1.0\\;\\Omega$.',
      'Vary external resistance $R_{\\text{eq}}$ across 5 different values ($2, 4, 6, 8, 10\\;\\Omega$).',
      'Record circuit current $I$ and terminal voltage $V$ in the observation table.',
      'Plot $V$ on the vertical axis against $I$ on the horizontal axis.',
      'Calculate the slope of the line ($-r$) and the vertical intercept ($V_B$).',
    ],
    stepsAr: [
      'اضبط القوة الدافعة للبطارية $V_B$ على $12\\text{ V}$ والمقاومة الداخلية $r$ على $1.0\\;\\Omega$.',
      'غيّر المقاومة الخارجية $R_{\\text{eq}}$ عبر ٥ قيم مختلفة ($2, 4, 6, 8, 10\\;\\Omega$).',
      'سجّل قراءة شدة التيار $I$ وفرق الجهد بين طرفي العمود $V$ في جدول النتائج.',
      'مثّل بيانياً العلاقة بين $V$ على المحور الرأسي و $I$ على المحور الأفقي.',
      'احسب ميل الخط المستقيم ($-r$) والجزء المقطوع من المحور الرأسي ($V_B$).',
    ],
    formula: 'V = V_B - I \\cdot r \\implies \\text{Slope} = -r, \\quad V_{\\text{intercept}} = V_B',
    expectedConclusionEn: 'The vertical intercept gives EMF $V_B = 12.0\\text{ V}$, and the slope confirms internal resistance $r = 1.0\\;\\Omega$ with 100% precision.',
    expectedConclusionAr: 'يؤكد الجزء المقطوع من المحور الصادي القوة الدافعة $V_B = 12\\text{ V}$، ويؤكد الميل المقاومة الداخلية $r = 1.0\\;\\Omega$ بدقة تامة.',
  },
  {
    id: 'phys-exp-2',
    lab: 'physics',
    titleEn: 'Photoelectric Effect & Planck Constant Determination',
    titleAr: 'دراسة الظاهرة الكهروضوئية وتعيين ثابت بلانك ودالة الشغل',
    gradeEn: 'Grade 12 Physics - Modern Physics & Quantum Photons',
    gradeAr: 'الصف الثالث الثانوي - ازدواجية الموجة والجسيم وفيزياء الكم',
    hypothesisEn: 'Stopping potential $V_s$ is linearly proportional to frequency $\\nu$: $e V_s = h \\nu - \\Phi$.',
    hypothesisAr: 'يتناسب جهد الإيقاف $V_s$ طردياً مع تردد الفوتون الساقط $\\nu$: $e V_s = h \\nu - \\Phi$ (دالة الشغل).',
    apparatusEn: ['Photoelectric vacuum cell with Cesium cathode ($\\Phi = 2.14\\text{ eV}$)', 'Monochromatic tunable light source', 'Retarding voltage potentiometer', 'Nanoammeter'],
    apparatusAr: ['خلية كهروضوئية مفرغة بمهبط من السيزيوم ($\\Phi = 2.14\\text{ eV}$)', 'مصدر ضوئي أحادي اللون متغير الطول الموجي', 'مجزئ جهد عكسي لتطبيق جهد الإيقاف', 'نانوأميتر حساس لقياس تيار الانبعاث'],
    stepsEn: [
      'Select Cesium cathode with work function $\\Phi = 2.14\\text{ eV}$.',
      'Illuminate cathode with light at $350\\text{ nm}$, $400\\text{ nm}$, $450\\text{ nm}$, and $500\\text{ nm}$.',
      'Increase negative retarding potential $V_s$ until photocurrent drops exactly to zero.',
      'Record stopping potential $V_s$ for each frequency $\\nu$.',
      'Plot $V_s$ versus $\\nu$ to find slope $h/e$ and threshold frequency $\\nu_0$.',
    ],
    stepsAr: [
      'اختر مهبط السيزيوم ذو دالة شغل $\\Phi = 2.14\\text{ eV}$.',
      'وجّه حزمة ضوئية بأطوال موجية $350\\text{ nm}$، $400\\text{ nm}$، $450\\text{ nm}$، و $500\\text{ nm}$.',
      'زد جهد الإيقاف العكسي السالب $V_s$ حتى ينعدم التيار الكهروضوئي تماماً.',
      'سجّل جهد الإيقاف $V_s$ المقابل لكل تردد $\\nu$ في جدول الملاحظات.',
      'ارسم العلاقة بين $V_s$ والتردد $\\nu$ لحساب النسبة $(h/e)$ والتردد الحرج $\\nu_0$.',
    ],
    formula: 'e V_s = h \\nu - \\Phi \\implies V_s = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\Phi}{e}',
    expectedConclusionEn: 'Light below threshold frequency produces zero photocurrent regardless of intensity, validating Einstein photon hypothesis.',
    expectedConclusionAr: 'التردد الأقل من التردد الحرج لا يحرر إلكترونات مهما بلغت شدة الضوء، مما يثبت فرضية فوتونات أينشتاين.',
  },
  {
    id: 'phys-exp-3',
    lab: 'physics',
    titleEn: 'Electromagnetic Induction & AC Dynamo Generation (Faraday Law)',
    titleAr: 'الحث الكهرومغناطيسي وتوليد التيار المتردد بالدينامو (قانون فاراداي)',
    gradeEn: 'Grade 12 Physics - Electromagnetic Induction',
    gradeAr: 'الصف الثالث الثانوي - الحث الكهرومغناطيسي والدينامو',
    hypothesisEn: 'Induced EMF in a rotating coil is proportional to angular speed $\\omega$, turns $N$, field $B$, and area $A$: $\\mathcal{E} = N B A \\omega \\sin\\theta$.',
    hypothesisAr: 'تتناسب القوة الدافعة المستحثة في ملف يدور طردياً مع السرعة الزاوية $\\omega$ وعدد اللفات $N$ والمساحة $A$ والفيض $B$: $\\mathcal{E} = N B A \\omega \\sin\\theta$.',
    apparatusEn: ['Rotating armature coil in permanent $B$ field', 'Digital oscilloscope with sine wave display', 'Two continuous bronze slip rings with carbon brushes', 'Split-ring commutator toggle', 'Angle scrubber $\\theta$'],
    apparatusAr: ['ملف دينامو قابل للدوران بين قطبي مغناطيس $B$', 'راسم ذبذبات أوسيلوسكوب رقمي لعرض منحنى الجهد', 'حلقتان معدنيتان للانزلاق وفرشاتا كربون', 'مقوم معدني مشقوق لنصفين للتيار المستمر', 'منزلق زاوية الدوران اللحظية $\\theta$'],
    stepsEn: [
      'Set coil turns $N = 200$, magnetic field $B = 0.5\\text{ T}$, and area $A = 0.04\\text{ m}^2$.',
      'Rotate armature coil and observe sine waveform on the oscilloscope display.',
      'Record peak voltage $\\mathcal{E}_{\\max}$ when coil plane is parallel to field ($\\theta = 90^\\circ$).',
      'Verify that induced EMF $\\mathcal{E} = 0$ when coil plane is perpendicular to field lines ($\\theta = 0^\\circ$).',
      'Switch to DC Commutator mode and note current rectification into unidirectional half-waves.',
    ],
    stepsAr: [
      'اضبط عدد اللفات $N = 200$، وكثافة الفيض $B = 0.5\\text{ T}$، ومساحة المقطع $A = 0.04\\text{ m}^2$.',
      'دوّر ملف الدينامو ولاحظ المنحنى الجيبي المتولد على شاشة الأوسيلوسكوب.',
      'سجّل القيمة العظمى للجهد $\\mathcal{E}_{\\max}$ عندما يكون مستوى الملف موازياً لخطوط الفيض ($\\theta = 90^\\circ$).',
      'تحقق من انعدام ق.د.ك المستحثة ($\\mathcal{E} = 0$) عندما يكون مستوى الملف عمودياً على خطوط الفيض ($\\theta = 0^\\circ$).',
      'حوّل إلى وضع المقوم المعدني (نصفا الأسطوانة) ولاحظ توحيد اتجاه التيار لنبضات موجبة فقط.',
    ],
    formula: '\\mathcal{E} = N B A \\omega \\sin(\\omega t), \\quad \\mathcal{E}_{\\text{eff}} = \\frac{\\mathcal{E}_{\\max}}{\\sqrt{2}}',
    expectedConclusionEn: 'Sinusoidal EMF is generated by continuous flux rate of change; commutator rectifies polarity to pulsating DC.',
    expectedConclusionAr: 'يتولد تيار متردد جيبي نتيجة التغير المستمر في معدل قطع خطوط الفيض، ويعمل المقوم المعدني على توحيد اتجاه التيار.',
  },
  {
    id: 'phys-exp-4',
    lab: 'physics',
    titleEn: 'Series RLC Circuit Impedance, Phasors & Electrical Resonance',
    titleAr: 'معاوقة دائرة RLC ومخطط المتجهات الطورية وحالة الرنين الكهربي',
    gradeEn: 'Grade 12 Physics - Alternating Current Circuits',
    gradeAr: 'الصف الثالث الثانوي - دوائر التيار المتردد ودائرة الرنين والتوليف',
    hypothesisEn: 'At resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$, inductive and capacitive reactances cancel ($X_L = X_C$), minimizing impedance to $Z = R$ and maximizing current.',
    hypothesisAr: 'عند تردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$، تتساوى المفاعلتان وتلغي كل منهما الأخرى ($X_L = X_C$)، فتصل المعاوقة لأقل قيمة $Z = R$ والتيار لأقصى قيمة.',
    apparatusEn: ['Variable frequency AC power source', 'Inductor coil ($L = 100\\text{ mH}$)', 'Capacitor ($C = 20\\;\\mu\\text{F}$)', 'Resistor ($R = 50\\;\\Omega$)', 'Real-time phasor diagram monitor and resonance response curve'],
    apparatusAr: ['مصدر تيار متردد متغير التردد', 'ملف حث مهمل المقاومة ($L = 100\\text{ mH}$)', 'مكثف ثابت السعة ($C = 20\\;\\mu\\text{F}$)', 'مقاومة أومية ($R = 50\\;\\Omega$)', 'شاشة متجهات طورية ومنحنى استجابة الرنين'],
    stepsEn: [
      'Set $R = 50\\;\\Omega$, $L = 100\\text{ mH}$, $C = 20\\;\\mu\\text{F}$, and $V = 100\\text{ V}$.',
      'Sweep frequency from $20\\text{ Hz}$ to $300\\text{ Hz}$ and record total impedance $Z$ and current $I$.',
      'Click "Snap to Resonant $f_0$" ($112.5\\text{ Hz}$); observe phase angle $\\phi$ drop exactly to $0^\\circ$.',
      'Verify that current reaches maximum peak $I_{\\max} = V / R = 2.0\\text{ A}$ at resonance.',
      'Inspect phasor diagram to confirm $V_L$ and $V_C$ vectors are equal and opposite in phase.',
    ],
    stepsAr: [
      'اضبط المقاومة $R = 50\\;\\Omega$، والحث $L = 100\\text{ mH}$، والسعة $C = 20\\;\\mu\\text{F}$، والجهد $V = 100\\text{ V}$.',
      'غيّر التردد تدريجياً من $20$ إلى $300\\text{ Hz}$ وسجّل قيم المعاوقة $Z$ وشدة التيار $I$.',
      'اضغط على "ضبط تردد الرنين $f_0$" ($112.5\\text{ Hz}$) ولاحظ هبوط زاوية الطور $\\phi$ إلى صفر تماماً.',
      'تحقق من بلوغ شدة التيار قيمتها العظمى $I_{\\max} = V / R = 2.0\\text{ A}$ عند الرنين.',
      'افحص مخطط المتجهات للتأكد من أن متجهي $V_L$ و $V_C$ متساويان في المقدار ومتعاكسان في الاتجاه.',
    ],
    formula: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad I_{\\max} = \\frac{V}{R}',
    expectedConclusionEn: 'Resonance achieves maximum power transfer and zero phase angle, forming the basis of radio tuning receivers.',
    expectedConclusionAr: 'تحقق حالة الرنين أقصى شدة تيار وانعدام زاوية الطور، وهي الأساس العلمي لدوائر الاستقبال والتوليف الإذاعي.',
  },

  // Chemistry
  {
    id: 'chem-exp-1',
    lab: 'chemistry',
    titleEn: 'Le Chatelier Principle in Nitrogen Dioxide Equilibrium (2NO2 <=> N2O4)',
    titleAr: 'تطبيق قاعدة لوشاتيليه على اتزان غازي ثاني أكسيد النيتروجين ورابع أكسيد النيتروجين',
    gradeEn: 'Grade 12 Chemistry - Chemical Equilibrium',
    gradeAr: 'الصف الثالث الثانوي - الاتزان الكيميائي والعوامل المؤثرة على موضع الاتزان',
    hypothesisEn: 'Cooling favors exothermic dimerization to colorless $\\text{N}_2\\text{O}_4$; increasing pressure shifts toward fewer moles.',
    hypothesisAr: 'التبريد يزيح الاتزان في الاتجاه الطارد للحرارة (تكوين $\\text{N}_2\\text{O}_4$ عديم اللون)، وزيادة الضغط تزيحه نحو الحجم الأقل.',
    apparatusEn: ['Sealed glass gas vessel with $\\text{NO}_2/\\text{N}_2\\text{O}_4$ mixture', 'Hot water bath ($80^\\circ\\text{C}$)', 'Ice-water cooling bath ($0^\\circ\\text{C}$)', 'Digital spectrophotometer for color intensity'],
    apparatusAr: ['أنبوبة زجاجية محكمة الإغلاق تحتوي خليط $\\text{NO}_2 / \\text{N}_2\\text{O}_4$', 'حمام مائي ساخن ($80^\\circ\\text{C}$)', 'حمام ثلجي مبرد ($0^\\circ\\text{C}$)', 'مقياس طيف ضوئي لقياس شدة اللون البني المحمر'],
    stepsEn: [
      'Place sealed vessel at room temperature ($25^\\circ\\text{C}$) and observe pale reddish-brown color.',
      'Immerse in ice bath at $0^\\circ\\text{C}$; observe progressive fading to colorless as $\\text{N}_2\\text{O}_4$ forms.',
      'Transfer to boiling bath at $80^\\circ\\text{C}$; observe deepening of intense dark brown $\\text{NO}_2$ color.',
      'Apply pressure compression from $1.0\\text{ atm}$ to $4.0\\text{ atm}$; verify volume shift toward $\\text{N}_2\\text{O}_4$.',
    ],
    stepsAr: [
      'ضع الأنبوبة المحكمة في درجة حرارة الغرفة ($25^\\circ\\text{C}$) ولاحظ اللون البني المحمر الفاتح.',
      'اغمر الأنبوبة في حمام ثلجي عند $0^\\circ\\text{C}$؛ لاحظ اختفاء اللون تدريجياً لتكون $\\text{N}_2\\text{O}_4$.',
      'انقل الأنبوبة إلى حمام ساخن عند $80^\\circ\\text{C}$؛ لاحظ ازدياد حدة اللون البني المحمر الداكن $\\text{NO}_2$.',
      'ارفع الضغط من $1.0\\text{ atm}$ إلى $4.0\\text{ atm}$؛ ولاحظ انزياح الاتزان نحو الحجم الأقل.',
    ],
    formula: '2\\text{NO}_2\\text{ (red-brown)} \\rightleftharpoons \\text{N}_2\\text{O}_4\\text{ (colorless)} + \\text{Heat} \\quad (\\Delta H < 0)',
    expectedConclusionEn: 'Exothermic reactions shift backward with heating and forward with cooling, in exact accordance with Le Chatelier principle.',
    expectedConclusionAr: 'التفاعلات الطاردة للحرارة تنزاح عكسياً بالتسخين وطردياً بالتبريد، تأكيداً تاماً لقاعدة لوشاتيليه.',
  },
  {
    id: 'chem-exp-2',
    lab: 'chemistry',
    titleEn: 'Volumetric Acid-Base Neutralization Titration',
    titleAr: 'المعايرة الحجمية بالتعادل لتعيين تركيز محلول حمض الهيدروكلوريك',
    gradeEn: 'Grade 12 Chemistry - Quantitative Chemical Analysis',
    gradeAr: 'الصف الثالث الثانوي - التحليل الكيميائي الكمي الحجمي',
    hypothesisEn: 'Equivalence is reached when moles of $\\text{H}^+$ equal moles of $\\text{OH}^-$: $\\frac{M_a \\cdot V_a}{n_a} = \\frac{M_b \\cdot V_b}{n_b}$.',
    hypothesisAr: 'تتحقق نقطة التعادل والتكافؤ تماماً عندما تتساوى مولات $\\text{H}^+$ مع مولات $\\text{OH}^-$: $\\frac{M_a \\cdot V_a}{n_a} = \\frac{M_b \\cdot V_b}{n_b}$.',
    apparatusEn: ['50 mL Precision Buret', '25 mL Volumetric Pipet', 'Erlenmeyer Flask', 'Standard $0.1\\text{ M NaOH}$ solution', '$\\text{HCl}$ solution of unknown molarity', 'Phenolphthalein indicator'],
    apparatusAr: ['سحاحة مدرجة سعة ٥٠ مل', 'ماصة عيارية سعة ٢٥ مل', 'دورق مخروطي', 'محلول قياسي معلوم التركيز من $\\text{NaOH}$ $0.1\\text{ M}$', 'حمض $\\text{HCl}$ مجهول التركيز', 'دليل الفينولفثالين'],
    stepsEn: [
      'Transfer $25.0\\text{ mL}$ of unknown $\\text{HCl}$ into Erlenmeyer flask using pipet.',
      'Add 2-3 drops of phenolphthalein indicator (colorless in acid).',
      'Fill buret with standard $0.10\\text{ M NaOH}$ and record initial reading.',
      'Titrate dropwise with swirling until the first faint persistent pink color appears.',
      'Record final buret volume $V_b$ and calculate acid molarity $M_a$.',
    ],
    stepsAr: [
      'انقل $25.0\\text{ mL}$ من حمض $\\text{HCl}$ مجهول التركيز إلى الدورق المخروطي بالماصة.',
      'أضف قطرتين من دليل الفينولفثالين (عديم اللون في الوسط الحمضي).',
      'املأ السحاحة بمحلول $\\text{NaOH}$ القياسي بتركيز $0.10\\text{ M}$ وسجل القراءة الابتدائية.',
      'أضف القلوي قطرة بقطرة مع التقليب المستمر حتى ظهور أول لون وردي خفيف مستديم.',
      'سجل حجم القلوي المستهلك $V_b$ واحسب تركيز الحمض $M_a$ بمعادلة المعايرة.',
    ],
    formula: '\\frac{M_a \\cdot V_a}{n_a} = \\frac{M_b \\cdot V_b}{n_b} \\implies M_a = \\frac{M_b \\cdot V_b}{V_a}',
    expectedConclusionEn: 'Sharp pH transition across equivalence point indicates quantitative stoichiometric neutralization.',
    expectedConclusionAr: 'التغير المفاجئ في قيمة الأس الهيدروجيني pH عند نقطة التكافؤ يحدد التركيز المولي بدقة استثنائية.',
  },
  {
    id: 'chem-exp-3',
    lab: 'chemistry',
    titleEn: 'Daniell Galvanic Cell EMF & Concentration Shifts via Nernst Equation',
    titleAr: 'تعيين القوة الدافعة الكهربية لخلية دانيال وأثر التركيز بمعادلة نيرنست',
    gradeEn: 'Grade 12 Chemistry - Electrochemistry & Galvanic Cells',
    gradeAr: 'الصف الثالث الثانوي - الكيمياء الكهربية والخلايا الجلفانية وإنتاج الطاقة',
    hypothesisEn: 'Standard Daniell cell potential $E^\\circ_{\\text{cell}} = 1.10\\text{ V}$ decreases as anode $[\\text{Zn}^{2+}]$ increases and increases as cathode $[\\text{Cu}^{2+}]$ increases: $E = E^\\circ - \\frac{RT}{nF}\\ln\\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}$.',
    hypothesisAr: 'قوة الخلية القياسية $E^\\circ_{\\text{cell}} = 1.10\\text{ V}$ تنخفض بزيادة تركيز $[\\text{Zn}^{2+}]$ وتزداد بزيادة تركيز $[\\text{Cu}^{2+}]$ وفق معادلة نيرنست.',
    apparatusEn: ['Zinc anode in $\\text{ZnSO}_4$ solution', 'Copper cathode in $\\text{CuSO}_4$ solution', '$\\text{KNO}_3$ agar salt bridge', 'High-impedance digital millivoltmeter', 'External connecting circuit with indicator bulb'],
    apparatusAr: ['لوح خارصين (مصعد) مغمور في محلول $\\text{ZnSO}_4$', 'لوح نحاس (مهبط) مغمور في محلول $\\text{CuSO}_4$', 'قنطرة ملحية زجاجية بها هلام أجار ونترات بوتاسيوم $\\text{KNO}_3$', 'فولتميتر رقمي عالي الدقة', 'دائرة توصيل خارجية ومصباح إضاءة'],
    stepsEn: [
      'Assemble Daniell cell with $1.0\\text{ M } \\text{Zn}^{2+}$ and $1.0\\text{ M } \\text{Cu}^{2+}$ at standard $25^\\circ\\text{C}$ ($298.15\\text{ K}$).',
      'Measure standard electromotive force $E^\\circ_{\\text{cell}}$ on the voltmeter ($1.10\\text{ V}$).',
      'Increase anode $[\\text{Zn}^{2+}]$ to $2.0\\text{ M}$ and observe EMF drop due to backward Le Chatelier shift.',
      'Increase cathode $[\\text{Cu}^{2+}]$ to $2.0\\text{ M}$ and observe positive rebound in cell voltage.',
      'Verify calculated Gibbs free energy change $\\Delta G < 0$, confirming spontaneous reaction.',
    ],
    stepsAr: [
      'ركّب خلية دانيال بمحلولي $\\text{Zn}^{2+}$ و $\\text{Cu}^{2+}$ بتركيز $1.0\\text{ M}$ عند درجة حرارة $25^\\circ\\text{C}$ القياسية.',
      'قِس القوة الدافعة الكهربية القياسية $E^\\circ_{\\text{cell}}$ على شاشة الفولتميتر ($1.10\\text{ V}$).',
      'زد تركيز أيونات المصعد $[\\text{Zn}^{2+}]$ إلى $2.0\\text{ M}$ ولاحظ انخفاض الجهد طبقاً لقاعدة لوشاتيليه.',
      'زد تركيز أيونات المهبط $[\\text{Cu}^{2+}]$ إلى $2.0\\text{ M}$ ولاحظ ارتفاع الجهد الناتج من الخلية.',
      'تحقق من أن التغير في طاقة جيبس الحرة $\\Delta G < 0$ سالب، مما يؤكد تلقائية التفاعل الكيميائي.',
    ],
    formula: 'E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{RT}{nF} \\ln\\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}, \\quad \\Delta G = -nFE_{\\text{cell}}',
    expectedConclusionEn: 'Chemical redox energy converts spontaneously into electric current; removing the salt bridge disrupts neutrality and immediately halts current.',
    expectedConclusionAr: 'تتحول طاقة تفاعل الأكسدة والاختزال التلقائي إلى تيار كهربي؛ ونزع القنطرة الملحية يوقف سريان التيار في الحال.',
  },

  // Biology
  {
    id: 'bio-exp-1',
    lab: 'biology',
    titleEn: 'Sarcomere Contraction Mechanism & Muscle Tetany / Fatigue',
    titleAr: 'آلية انقباض الساركومير في اللييفة العضلية والشد العضلي والإجهاد',
    gradeEn: 'Grade 12 Biology - Support & Movement',
    gradeAr: 'الصف الثالث الثانوي - الدعامة والحركة في الكائنات الحية (انقباض العضلات الهيكلية)',
    hypothesisEn: 'Myosin cross-bridges require $\\text{Ca}^{2+}$ to attach to actin and $\\text{ATP}$ to detach; $\\text{ATP}$ deficiency causes sustained spasm.',
    hypothesisAr: 'تتطلب الروابط المستعرضة للميوسين أيونات الكالسيوم $\\text{Ca}^{2+}$ للاتصال بالأكتين وطاقة $\\text{ATP}$ للانفصال؛ ونقص $\\text{ATP}$ يسبب شد عضلي مستمر.',
    apparatusEn: ['Interactive Electron Microscopy Sarcomere Simulator', 'Calcium ion $\\text{Ca}^{2+}$ influx controller', '$\\text{ATP}$ energy reservoir slider', 'Myofibril dimension calipers'],
    apparatusAr: ['محاكي الساركومير المجهري ثلاثي الأبعاد', 'مفتاح تدفق أيونات الكالسيوم $\\text{Ca}^{2+}$', 'منزلق مخزون طاقة $\\text{ATP}$', 'محدد أبعاد القطعة العضلية (المناطق المضيئة والداكنة وشبه المضيئة)'],
    stepsEn: [
      'Examine relaxed sarcomere at rest length $2.8\\;\\mu\\text{m}$ (wide H-zone and I-bands).',
      'Toggle Calcium influx ON to expose actin binding sites via troponin-tropomyosin shift.',
      'Observe myosin heads pulling actin filaments toward sarcomere center (Z-discs approach).',
      'Notice A-band remains strictly constant at $1.5\\;\\mu\\text{m}$ while H-zone completely disappears.',
      'Deplete $\\text{ATP}$ supply while calcium remains present; observe persistent painful muscle spasm.',
    ],
    stepsAr: [
      'افحص القطعة العضلية المنبسطة عند طول $2.8\\;\\mu\\text{m}$ (المنطقة شبه المضيئة H والمضيئة I متسعة).',
      'فعّل تدفق أيونات الكالسيوم $\\text{Ca}^{2+}$ لكشف مواقع الارتباط على خيوط الأكتين.',
      'لاحظ سحب رؤوس الميوسين لخيوط الأكتين نحو مركز الساركومير وتقارب خطي Z.',
      'لاحظ بقاء طول المنطقة الداكنة A ثابتاً تماماً عند $1.5\\;\\mu\\text{m}$ بينما تختفي المنطقة H.',
      'استنفد مخزون طاقة $\\text{ATP}$ مع بقاء الكالسيوم؛ ولاحظ حدوث الشد العضلي المؤلم لعدم انفصال الروابط.',
    ],
    formula: '\\text{Contraction}: \\Delta Z < 0, \\quad \\Delta I < 0, \\quad \\Delta H \\to 0, \\quad \\text{Length}(A) = \\text{Constant}',
    expectedConclusionEn: 'Sliding filament theory explains muscle contraction via cross-bridge ratchet; ATP is mandatory for relaxation.',
    expectedConclusionAr: 'تثبت نظرية الخيوط المنزلقة لهكسلي أن حركة الجسور المستعرضة تعتمد على الكالسيوم، وأن ATP ضروري لفك الارتباط والانبساط.',
  },
  {
    id: 'bio-exp-2',
    lab: 'biology',
    titleEn: 'DNA Sequence Complementarity, Transcription & Translation',
    titleAr: 'تكامل شريطي DNA، النسخ إلى mRNA، وترجمة الشفرة إلى ببتيد',
    gradeEn: 'Grade 12 Biology - Molecular Biology & Genetics',
    gradeAr: 'الصف الثالث الثانوي - البيولوجيا الجزيئية: تركيب DNA وتخليق البروتين',
    hypothesisEn: 'Antiparallel strands follow Chargaff parity: $\\text{A}$ pairs with $\\text{T}$ (2 H-bonds) and $\\text{G}$ pairs with $\\text{C}$ (3 H-bonds).',
    hypothesisAr: 'الشريطان المتعاكسان يحققان قاعدة تشارجاف: الأدنين يرتبط بالثايمين برابطتين، والجوانين بالسيتوزين بثلاث روابط هيدروجينية.',
    apparatusEn: ['Digital DNA Nucleotide Sequence Builder', 'Antiparallel strand generator ($3\' \\to 5\'$)', 'RNA Polymerase transcription engine', 'Ribosome codon decoder'],
    apparatusAr: ['استوديو بناء تتابع نيوكليوتيدات DNA', 'مولد الشريط المكمل المتعاكس $3\' \\to 5\'$', 'محاكي إنزيم بلمرة RNA للنسخ', 'محرك فك الشفرة الوراثية بالريبوسوم'],
    stepsEn: [
      'Enter $5\' \\to 3\'$ sequence: AUG UUU GGC UAA.',
      'Verify automatic generation of complementary $3\' \\to 5\'$ strand.',
      'Calculate total hydrogen bonds (2 per $\\text{A-T}$ and 3 per $\\text{G-C}$).',
      'Trigger mRNA transcription: $\\text{T}$ is replaced by $\\text{U}$.',
      'Follow ribosome translation: Identify Start codon AUG (Met), Glycine, and Stop codon UAA.',
    ],
    stepsAr: [
      'أدخل التتابع من $5\'$ إلى $3\'$: AUG UUU GGC UAA.',
      'تحقق من التوليد التلقائي للشريط المكمل المتعاكس من $3\'$ إلى $5\'$.',
      'احسب إجمالي الروابط الهيدروجينية (رابطتان لـ $\\text{A-T}$ وثلاث روابط لـ $\\text{G-C}$).',
      'فعّل نسخ mRNA مع استبدال الثايمين $\\text{T}$ باليوراسيل $\\text{U}$.',
      'تابع ترجمة الريبوسوم: تعرّف على كودون البدء AUG (ميثيونين)، ثم بقية الأحماض وكودون الوقف UAA.',
    ],
    formula: '\\text{Chargaff}: \\%A = \\%T, \\quad \\%G = \\%C, \\quad \\%\\text{Purines} = \\%\\text{Pyrimidines} = 50\\%',
    expectedConclusionEn: 'Complementary base pairing ensures faithful replication and accurate genetic message transmission to proteins.',
    expectedConclusionAr: 'يضمن التكامل الدقيق بين القواعد تضاعفاً دقيقاً ونقلاً أميناً للمعلومات الوراثية لبناء البروتين.',
  },
  {
    id: 'bio-exp-3',
    lab: 'biology',
    titleEn: 'Comparative Bioenergetics: Aerobic Cellular Respiration vs Anaerobic Fermentation',
    titleAr: 'دراسة مقارنة للطاقة الحيوية: التنفس الخلوي الهوائي مقابل التخمر اللاهوائي',
    gradeEn: 'Grade 12 Biology - Cellular Bioenergetics & Respiration',
    gradeAr: 'الصف الثالث الثانوي - الطاقة والتنفس الخلوي في الكائنات الحية',
    hypothesisEn: 'Aerobic respiration yields $32\\text{ ATP}$ per glucose mole via mitochondrial chemiosmosis, whereas anaerobic fermentation yields only $2\\text{ ATP}$.',
    hypothesisAr: 'أكسدة مول واحد من الجلوكوز هوائياً تنتج $32\\text{ ATP}$ عبر الميتوكوندريا، بينما ينتج التخمر اللاهوائي جزيئين $2\\text{ ATP}$ فقط.',
    apparatusEn: ['Mitochondrial chemiosmosis simulator', 'Oxygen flow rate controller ($\\text{O}_2$)', 'Substrate glucose mole regulator', 'ATP synthase rotary motor visualizer', 'Respirometer gas volume analyzer'],
    apparatusAr: ['محاكي الأسموزية الكيميائية في الميتوكوندريا', 'محبس تدفق الأكسجين $\\text{O}_2$', 'منظم كمية الجلوكوز المستهلكة', 'محرك إنزيم بناء ATP الدوار', 'مقياس استهلاك الغازات التنفسية'],
    stepsEn: [
      'Input $1.0\\text{ mol}$ of glucose under full aerobic conditions ($\\text{O}_2$ available).',
      'Track 4 biochemical stages: Glycolysis ($2\\text{ ATP}$ net), Link reaction, Krebs cycle, and Electron Transport Chain.',
      'Record total aerobic ATP harvest ($32\\text{ ATP}$ per glucose mole) and stoichiometric release of $6\\text{ CO}_2$.',
      'Switch oxygen supply OFF to simulate strenuous muscle exertion or anaerobic yeast metabolism.',
      'Observe rapid shutdown of Krebs cycle and electron transport, yielding only $2\\text{ ATP}$ net via glycolysis and lactate/ethanol formation.',
    ],
    stepsAr: [
      'أدخل $1.0\\text{ mol}$ من الجلوكوز في وجود وفرة من غاز الأكسجين $\\text{O}_2$ (تنفس هوائي كامل).',
      'تتبع المراحل الأربعة: انشطار الجلوكوز ($2\\text{ ATP}$)، تفاعل الربط، دورة كريبس، وسلسلة نقل الإلكترون.',
      'سجّل الحصيلة النهائية للطاقة ($32\\text{ ATP}$ لكل مول جلوكوز) وانطلاق $6\\text{ CO}_2$.',
      'أغلق مصدر الأكسجين لمحاكاة الإجهاد العضلي أو التخمر الكحولي في فطر الخميرة.',
      'لاحظ توقف دورة كريبس وسلسلة النقل، واقتصار الناتج على $2\\text{ ATP}$ فقط مع تراكم حمض اللاكتيك أو الإيثانول.',
    ],
    formula: '\\text{Aerobic}: \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 32\\,\\text{ATP}',
    expectedConclusionEn: 'Mitochondrial oxidative phosphorylation is 16 times more energy-efficient than anaerobic substrate-level glycolysis.',
    expectedConclusionAr: 'الفسفرة التأكسدية الميتوكوندرية أعلى كفاءة في إنتاج الطاقة بمقدار ١٦ ضعفاً مقارنة بالتخمر اللاهوائي.',
  },
  {
    id: 'bio-exp-4',
    lab: 'biology',
    titleEn: 'Endocrine Glucose Homeostasis & Dual Pancreatic Hormone Negative Feedback',
    titleAr: 'التوازن الهرموني لمستوى سكر الجلوكوز في الدم والتغذية الراجعة للبنكرياس',
    gradeEn: 'Grade 12 Biology - Hormonal Coordination',
    gradeAr: 'الصف الثالث الثانوي - التنسيق الهرموني في الكائنات الحية (التوازن السكري)',
    hypothesisEn: 'Pancreatic islet $\\beta$-cells secrete insulin in response to hyperglycemia to store glycogen, while $\\alpha$-cells secrete glucagon during hypoglycemia to mobilize glucose.',
    hypothesisAr: 'تفرز خلايا بيتا $\\beta$ بجزر لانجرهانز الأنسولين عند ارتفاع السكر لتخزين الجليكوجين، بينما تفرز خلايا ألفا $\\alpha$ الجلوكاجون عند انخفاضه لتحفيز تحلل الجليكوجين.',
    apparatusEn: ['Dynamic Blood Glucose Biosensor Simulator', 'Pancreatic Islet Endocrine Secretion Module', 'Hepatic Glycogen Storage Visualizer', 'Insulin & Glucagon Infusion Controller'],
    apparatusAr: ['محاكي الاستشعار الحيوي لجلوكوز الدم', 'وحدة إفراز جزر لانجرهانز البنكرياسية', 'مخطط تخزين الجليكوجين الكبدي والعضلي', 'متحكم ضخ هرموني الأنسولين والجلوكاجون'],
    stepsEn: [
      'Initialize baseline fasting blood glucose at $90\\text{ mg/dL}$.',
      'Administer a $75\\text{ g}$ postprandial glucose spike to reach $160\\text{ mg/dL}$.',
      'Observe immediate activation of $\\beta$-islet cells releasing insulin, accelerating GLUT-4 translocation.',
      'Track hepatic glycogenesis and peripheral glucose uptake restoring normoglycemia ($80-120\\text{ mg/dL}$).',
      'Simulate prolonged fasting; observe $\\alpha$-cells secreting glucagon to stimulate glycogenolysis.',
    ],
    stepsAr: [
      'اضبط مستوى سكر الجلوكوز الصائم عند المستوى الطبيعي $90\\text{ mg/dL}$.',
      'أدخل جرعة جلوكوز $75\\text{ g}$ لمحاكاة تناول وجبة وارتفاع السكر إلى $160\\text{ mg/dL}$.',
      'لاحظ استجابة خلايا بيتا $\\beta$ الفورية بإفراز الأنسولين لتحفيز نواقل الجلوكوز ودخوله الخلايا.',
      'تتبع بناء الجليكوجين في الكبد والعضلات وانخفاض السكر للمعدل الطبيعي ($80-120\\text{ mg/dL}$).',
      'حاكي حالة الصيام المطول؛ ولاحظ إفراز خلايا ألفا $\\alpha$ للجلوكاجون لتحويل الجليكوجين الكبدي إلى جلوكوز.',
    ],
    formula: '\\text{Insulin}: [\\text{Glu}]_{\\text{blood}} \\xrightarrow{\\beta\\text{-cells}} \\text{Glycogen}_{\\text{liver}}, \\quad \\text{Glucagon}: \\text{Glycogen} \\xrightarrow{\\alpha\\text{-cells}} [\\text{Glu}]_{\\text{blood}}',
    expectedConclusionEn: 'Antagonistic negative feedback loops between insulin and glucagon maintain dynamic physiological blood glucose stability.',
    expectedConclusionAr: 'التكامل والتضاد بين هرموني الأنسولين والجلوكاجون بالتغذية الراجعة السلبية يحفظ التوازن الفسيولوجي الدقيق للسكر في الدم.',
  },
  {
    id: 'bio-exp-5',
    lab: 'biology',
    titleEn: 'Ovarian & Menstrual Cycle Phasic Hormonal Dynamics',
    titleAr: 'ديناميكا دورة الطمث والتغيرات الهرمونية والرحمية في أنثى الإنسان',
    gradeEn: 'Grade 12 Biology - Reproduction in Humans',
    gradeAr: 'الصف الثالث الثانوي - التكاثر في الكائنات الحية (الجهاز التناسلي الأنثوي ودورة الطمث)',
    hypothesisEn: 'Pulsatile pituitary $\\text{FSH}$ and $\\text{LH}$ trigger follicular maturation and day-14 ovulation, driven by biphasic estrogen and progesterone feedback on the endometrium.',
    hypothesisAr: 'يحفز هرمونا $\\text{FSH}$ و $\\text{LH}$ النخاميان نضج حويصلة جراف والتبويض في اليوم الـ١٤، محكومين بالتغذية الراجعة للإستروجين والبروجسترون وتغيرات بطانة الرحم.',
    apparatusEn: ['Interactive 28-Day Menstrual Cycle Chronometer', 'Hypothalamic-Pituitary Hormone Profiler (FSH/LH)', 'Ovarian Follicle Morphogenesis Scanner', 'Endometrial Thickness Ultrasound Simulator'],
    apparatusAr: ['مؤقت دورة الطمث التفاعلي (٢٨ يوماً)', 'راسم منحنيات الهرمونات النخامية ($\\text{FSH}$ و $\\text{LH}$)', 'ماسح نضج حويصلة جراف وتكوين الجسم الأصفر', 'محاكي سمك وإمداد بطانة الرحم الدموي'],
    stepsEn: [
      'Advance timeline to Days 1-5 (Menstruation): Observe low progesterone and estrogen triggering endometrial sloughing.',
      'Progress to Days 6-13 (Proliferative Phase): Rising $\\text{FSH}$ stimulates follicle growth and $17\\beta$-estradiol secretion, rebuilding the endometrium.',
      'Trigger Day 14 (Ovulation): Observe acute positive feedback $\\text{LH}$ surge causing Graafian follicle rupture and secondary oocyte release.',
      'Examine Days 15-28 (Secretory Phase): Corpus luteum synthesizes high progesterone, maximizing endometrial vascularization.',
      'Simulate non-fertilization: Observe corpus luteum degeneration, plummeting progesterone, and initiation of a new cycle.',
    ],
    stepsAr: [
      'قدم المؤشر للأيام ١-٥ (مرحلة الطمث): لاحظ هبوط البروجسترون والإستروجين وتهدم بطانة الرحم.',
      'انتقل للأيام ٦-١٣ (مرحلة نضج البويضة): يفرز $\\text{FSH}$ لإنضاج حويصلة جراف وإفراز الإستروجين لإنماء بطانة الرحم.',
      'فعّل اليوم ١٤ (مرحلة التبويض): لاحظ ذروة تدفق $\\text{LH}$ السريعة المسببة لانفجار الحويصلة وخروج البويضة الثانوية.',
      'افحص الأيام ١٥-٢٨ (مرحلة تكوين الجسم الأصفر): يفرز البروجسترون بكثافة لزيادة سمك وإمداد بطانة الرحم بالدم.',
      'حاكي غياب الإخصاب: لاحظ ضمور الجسم الأصفر، انخفاض البروجسترون الحاد، وبدء دورة طمث جديدة.',
    ],
    formula: '\\text{Ovulation Trigger}: \\uparrow \\text{Estrogen} \\implies \\text{LH Surge} \\implies \\text{Oocyte Release at Day } 14',
    expectedConclusionEn: 'Sequential hormonal surges orchestrate endometrial preparation for embryonic implantation; absence of hCG initiates menstrual sloughing.',
    expectedConclusionAr: 'تتحكم الهرمونات النخامية والمبيضية بدقة متناهية في تهيئة الرحم لاستقبال الجنين، ويؤدي غياب الإخصاب لانحدار الهرمونات وبدء الطمث.',
  },
  {
    id: 'bio-exp-6',
    lab: 'biology',
    titleEn: 'Dual-Branch Adaptive Immunity: Humoral B-Cell & Cytotoxic T-Cell Activation',
    titleAr: 'آليات المناعة المكتسبة ثنائية المسار: المناعة الخلطية والمناعة بالخلايا الوسيطة',
    gradeEn: 'Grade 12 Biology - Immunology',
    gradeAr: 'الصف الثالث الثانوي - المناعة في الإنسان (الاستجابة المناعية الخلطية والخلوية)',
    hypothesisEn: 'Antigen-presenting macrophages activate $\\text{CD4}^+$ T-helper cells via $\\text{MHC-II}$, branching into B-cell antibody production and $\\text{CD8}^+$ cytotoxic T-cell perforin-mediated target cell lysis.',
    hypothesisAr: 'تُنشط الخلايا البلعمية العارضة للأنتيجين عبر $\\text{MHC-II}$ خلايا $\\text{CD4}^+$ المساعدة، التي تفرز السيتوكينات لتفعيل الخلايا البائية لإنتاج الأجسام المضادة وخلايا $\\text{CD8}^+$ القاتلة.',
    apparatusEn: ['Macrophage-Phagosome Antigen Processing Chamber', 'MHC Class I & II Receptor Flow Cytometry Module', 'Helper T ($\\text{CD4}^+$) Interleukin/Cytokine Dispenser', 'Cytotoxic T ($\\text{CD8}^+$) Perforin & Granzyme Assay'],
    apparatusAr: ['غرفة بلعمة ومعالجة الأنتيجين بالخلايا البلعمية', 'وحدة قياس مستقبلات التوافق النسيجي $\\text{MHC-I}$ و $\\text{MHC-II}$', 'موزع إنترلوكينات وسيتوكينات الخلايا التائية المساعدة $\\text{CD4}^+$', 'مقياس إفراز البيرفورين والسموم اللمفاوية للخلايا التائية القاتلة $\\text{CD8}^+$'],
    stepsEn: [
      'Engulf pathogen with macrophage, degrade antigens, and present epitopes on membrane $\\text{MHC-II}$.',
      'Dock naive $\\text{CD4}^+$ T-helper cell onto $\\text{MHC-II}$ epitope complex; trigger Interleukin-1/2 secretion.',
      'Track Path A (Humoral): Interleukins stimulate B-cells to proliferate into plasma cells producing IgG/IgM and memory cells.',
      'Track Path B (Cell-Mediated): Activated Th cells secrete cytokines, recruiting $\\text{CD8}^+$ cytotoxic T-cells.',
      'Observe cytotoxic Tc cells docking via $\\text{CD8}$ to $\\text{MHC-I}$ of infected cells, secreting perforin to punch pores and granzymes to induce apoptosis.',
    ],
    stepsAr: [
      'ابتلع الميكروب بالخلية البلعمية الكبيرة، فكك الأنتيجين واعرضه على السطح مرتبطاً ببروتين $\\text{MHC-II}$.',
      'اربط الخلية التائية المساعدة $\\text{CD4}^+$ بالمركب عبر مستقبل TCR، وشاهد إفراز الإنترلوكينات المنشطة.',
      'تتبع المسار الأول (المناعة الخلطية): تنشيط الخلايا البائية للتمايز لخلايا بلازمية تنتج أجساماً مضادة وخلايا ذاكرة.',
      'تتبع المسار الثاني (المناعة الخلوية): إفراز السيتوكينات لتنشيط الخلايا التائية القاتلة $\\text{CD8}^+$ والخلايا القاتلة الطبيعية NK.',
      'شاهد التحام خلية Tc عبر $\\text{CD8}$ ببروتين $\\text{MHC-I}$ للخلية المصابة وإفراز البيرفورين والسموم لتحفيز الموت المبرمج.',
    ],
    formula: '\\text{Cell Lysis}: \\text{Tc}(\\text{CD8}^+) + \\text{MHC-I/Ag} \\implies \\text{Perforin (pores)} + \\text{Granzymes} \\implies \\text{Apoptosis}',
    expectedConclusionEn: 'Coordinated helper T-cell signaling unites humoral antibody neutralization with cytotoxic cell-mediated target destruction.',
    expectedConclusionAr: 'يضمن التنسيق المركزي للخلايا التائية المساعدة استجابة مناعية متكاملة تجمع بين تحييد الأجسام المضادة والقضاء الخلوي المباشر.',
  },

  // Math
  {
    id: 'math-exp-1',
    lab: 'math',
    titleEn: 'Investigating the Derivative as the Limit of Secant Slopes',
    titleAr: 'استقصاء المشتقة الأولى كنهاية لميل القاطع عند اقتراب النقطتين ($h \\to 0$)',
    gradeEn: 'Grade 12 Pure Math - Calculus',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات البحتة (التفاضل والتكامل ومعدل التغير)',
    hypothesisEn: 'As the increment $h$ approaches $0$, the secant slope converges precisely to the tangent derivative $f\'(x_0)$.',
    hypothesisAr: 'كلما اقترب التغير $h$ من الصفر، يقترب ميل القاطع تماماً من ميل المماس (المشتقة الأولى) عند نقطة التماس $x_0$.',
    apparatusEn: ['Interactive Calculus Tangent Visualizer', 'Secant point offset slider $h$', 'Slope calculation engine', 'Zoomable Cartesian coordinate plane'],
    apparatusAr: ['محاكي مماسات التفاضل التفاعلي', 'منزلق إزاحة القاطع $h$', 'حاسبة ميل المماس وميل القاطع اللحظية', 'شبكة إحداثيات متعامدة ديناميكية'],
    stepsEn: [
      'Set function $f(x) = x^3 - 3x$ and choose point of tangency $x_0 = 1.0$.',
      'Observe theoretical derivative $f\'(1.0) = 3(1)^2 - 3 = 0.0$ (horizontal tangent).',
      'Set secant offset $h = 1.0$; compute secant slope.',
      'Gradually decrease $h$ to $0.5$, $0.1$, $0.01$, and $0.001$.',
      'Verify that the secant line rotates continuously until it coincides with the tangent line.',
    ],
    stepsAr: [
      'اختر الدالة $f(x) = x^3 - 3x$ وحدد نقطة التماس عند $x_0 = 1.0$.',
      'احسب المشتقة نظرياً: $f\'(1.0) = 3(1)^2 - 3 = 0$ (مماس أفقي).',
      'اضبط إزاحة القاطع $h = 1.0$ واحسب ميل القاطع المار بالنقطتين.',
      'قلل قيمة $h$ تدريجياً إلى $0.5$، ثم $0.1$، ثم $0.01$، ثم $0.001$.',
      'لاحظ دوران القاطع تدريجياً حتى ينطبق تماماً على خط المماس عند نقطة التماس.',
    ],
    formula: 'f\'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}',
    expectedConclusionEn: 'The instantaneous rate of change is the limiting value of average rates of change as interval duration approaches zero.',
    expectedConclusionAr: 'معدل التغير اللحظي (المشتقة) هو النهاية الرياضية الدقيقة لمتوسط التغير عندما تؤول الفترة الزمنية إلى الصفر.',
  },
  {
    id: 'math-exp-2',
    lab: 'math',
    titleEn: 'Verifying Static Friction Angles on an Inclined Plane',
    titleAr: 'تحقيق زاوية الاحتكاك السكوني وشروط الاتزان على مستوى مائل خشن',
    gradeEn: 'Grade 12 Applied Math - Statics',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات التطبيقية (الاستاتيكا: اتزان جسم على مستوى مائل)',
    hypothesisEn: 'A body placed on a rough inclined plane is on the verge of sliding when angle $\\theta$ equals friction angle $\\lambda$: $\\tan\\theta = \\mu_s = \\tan\\lambda$.',
    hypothesisAr: 'يكون الجسم الموضوع على مستوى مائل خشن على وشك الانزلاق تحت تأثير وزنه فقط عندما تتساوى زاوية ميل المستوى مع زاوية الاحتكاك: $\\tan\\theta = \\mu_s = \\tan\\lambda$.',
    apparatusEn: ['Adjustable inclination plane model', 'Test block of mass $m$', 'Friction coefficient selector ($\\mu_s = 0.577$)', 'Force decomposition vector display'],
    apparatusAr: ['نموذج مستوى مائل قابل لتعديل زاوية الميل $\\theta$', 'جسم كتلته $m$ موضوع على السطح', 'محدد معامل الاحتكاك السكوني $\\mu_s = 0.577$', 'لوحة تحليل متجهات القوى (الوزن ومركبتيه، ورد الفعل العمودي، وقوة الاحتكاك)'],
    stepsEn: [
      'Set static friction coefficient $\\mu_s = 0.577$ ($\\lambda = 30^\\circ$).',
      'Start with inclination angle $\\theta = 15^\\circ$; verify equilibrium ($F_{\\text{friction}} < F_{s,\\max}$).',
      'Gradually increase $\\theta$ to $25^\\circ$; observe friction force increasing.',
      'Reach $\\theta = 30^\\circ$; observe body reaches limiting equilibrium (on the verge of motion).',
      'Increase $\\theta$ above $30^\\circ$; verify body loses equilibrium and accelerates downward.',
    ],
    stepsAr: [
      'اضبط معامل الاحتكاك السكوني $\\mu_s$ على $0.577$ (زاوية الاحتكاك $\\lambda = 30^\\circ$).',
      'ابدأ بزاوية ميل $\\theta = 15^\\circ$؛ وتحقق من ثبات واتزان الجسم ($F_s < F_{s,\\max}$).',
      'زد زاوية الميل تدريجياً إلى $25^\\circ$؛ ولاحظ ازدياد قوة الاحتكاك لموازنة مركبة الوزن.',
      'عند زاوية $\\theta = 30^\\circ$ تماماً، يصل الجسم لحالة الاتزان النهائي (على وشك الحركة).',
      'زد الزاوية فوق $30^\\circ$؛ ولاحظ اختلال الاتزان وبدء انزلاق الجسم لأسفل المستوى.',
    ],
    formula: '\\text{Limiting Equilibrium}: \\tan\\theta = \\mu_s = \\tan\\lambda \\implies \\theta = \\lambda',
    expectedConclusionEn: 'When theta equals lambda, limiting equilibrium is attained independently of body mass.',
    expectedConclusionAr: 'يتحقق الاتزان النهائي وشك الحركة عندما تساوي زاوية ميل المستوى زاوية الاحتكاك السكوني بصورة مستقلة تماماً عن كتلة الجسم.',
  },
  {
    id: 'math-exp-3',
    lab: 'math',
    titleEn: '3D Spatial Geometry: Direction Cosines & Vector Plane Equations',
    titleAr: 'الهندسة الفراغية ثلاثية الأبعاد: جيوب تمام الاتجاه ومعادلة المستوى في الفراغ',
    gradeEn: 'Grade 12 Pure Math - Solid Geometry & 3D Vectors',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات البحتة (الهندسة الفراغية والمتجهات في الفراغ)',
    hypothesisEn: 'The sum of squares of direction cosines for any 3D vector equals unity: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.',
    hypothesisAr: 'مجموع مربعات جيوب تمام الاتجاه لأي متجه في الفراغ ثلاثي الأبعاد يساوي دائماً الواحد الصحيح: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.',
    apparatusEn: ['Interactive 3D Three.js Vector Orbit Canvas', 'Direction angles $\\alpha, \\beta, \\gamma$ controllers', 'Normal vector plane generator', 'Unit sphere projection visualizer'],
    apparatusAr: ['محاكي الفضاء ثلاثي الأبعاد التفاعلي', 'محددات زوايا الاتجاه مع المحاور $\\alpha, \\beta, \\gamma$', 'مولد معادلة المستوى والمتجه العمودي', 'مسقط كرة الوحدة الفراغية'],
    stepsEn: [
      'Set direction angle with X-axis $\\alpha = 45^\\circ$ and with Y-axis $\\beta = 60^\\circ$.',
      'Calculate theoretical angle with Z-axis $\\gamma$ using direction cosines identity.',
      'Verify that $\\cos^2(45^\\circ) + \\cos^2(60^\\circ) + \\cos^2(\\gamma) = 0.5 + 0.25 + 0.25 = 1.0$ ($\\gamma = 60^\\circ$).',
      'Construct plane perpendicular to normal vector $\\vec{n} = (A, B, C)$ passing through point $P_0$.',
      'Rotate 3D coordinate frame to observe spatial orientation of vector and plane.',
    ],
    stepsAr: [
      'اضبط زاوية الاتجاه مع محور السينات $\\alpha = 45^\\circ$، ومع محور الصادات $\\beta = 60^\\circ$.',
      'احسب نظرياً الزاوية مع محور العينات $\\gamma$ باستخدام متطابقة جيوب تمام الاتجاه.',
      'تحقق من أن $\\cos^2(45^\\circ) + \\cos^2(60^\\circ) + \\cos^2(\\gamma) = 0.5 + 0.25 + 0.25 = 1.0$ ($\\gamma = 60^\\circ$).',
      'كوّن معادلة المستوى العمودي على المتجه $\\vec{n} = (A, B, C)$ والمار بالنقطة المعلومة $P_0$.',
      'دوّر محاور الإحداثيات ثلاثية الأبعاد لمشاهدة المستوى والعمودي عليه في الفراغ.',
    ],
    formula: '\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1, \\quad \\vec{n} \\cdot (\\vec{r} - \\vec{r}_0) = 0',
    expectedConclusionEn: 'Direction cosines uniquely define spatial vector directions and govern 3D vector scalar and cross-product operations.',
    expectedConclusionAr: 'تحدد جيوب تمام الاتجاه موضع المتجه في الفراغ بدقة متناهية وتتحكم في معادلات الخطوط المستقيمة والمستويات.',
  },
];

export const GuidedExperimentsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  activeLab,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedExpId, setSelectedExpId] = useState<string>(() => {
    const first = EXPERIMENTS.find((e) => e.lab === activeLab);
    return first ? first.id : EXPERIMENTS[0].id;
  });

  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const activeExp = EXPERIMENTS.find((e) => e.id === selectedExpId) || EXPERIMENTS[0];

  const handleToggleStep = (stepIdx: number) => {
    const key = `${activeExp.id}_step_${stepIdx}`;
    setCompletedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all animate-in fade-in"
      role="dialog"
      aria-modal="true"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div
        className={`relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden border ${
          isLight
            ? 'bg-slate-50 border-slate-300 text-slate-900'
            : isContrast
            ? 'bg-black border-2 border-yellow-400 text-yellow-300'
            : 'bg-slate-900 border-slate-700 text-white'
        }`}
      >
        {/* Header */}
        <div
          className={`p-4 sm:p-6 border-b flex items-center justify-between ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black">
                  {isArabic ? 'دليل التجارب المخبرية الموجهة' : 'Guided Scientific Experiments Protocol'}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                  MoE Ministry Accredited
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isArabic
                  ? 'بروتوكول التجارب العلمية العملية مع توثيق الفرضيات وجداول النتائج والتقارير المخبرية'
                  : 'Structured student investigation protocols with hypothesis entry, step checkpoints & printable reports'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintReport}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{isArabic ? 'طباعة التقرير' : 'Print Report'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Experiment Navigation Dropdown */}
        <div
          className={`px-4 sm:px-6 py-3 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
            isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900/60 border-slate-800'
          }`}
        >
          <label className="text-xs font-bold text-slate-400 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>{isArabic ? 'اختر التجربة العملية الموجهة:' : 'Select Guided Laboratory Experiment:'}</span>
          </label>
          <div className="relative flex-1 sm:max-w-md">
            <select
              value={activeExp.id}
              onChange={(e) => setSelectedExpId(e.target.value)}
              className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-800'
                  : 'bg-slate-950 border-slate-700 text-slate-200'
              }`}
            >
              {EXPERIMENTS.map((exp) => {
                const labBadge =
                  exp.lab === 'math'
                    ? '📐 Math'
                    : exp.lab === 'physics'
                    ? '⚡ Physics'
                    : exp.lab === 'chemistry'
                    ? '🧪 Chemistry'
                    : '🧬 Biology';
                return (
                  <option key={exp.id} value={exp.id} className="bg-slate-900 text-white">
                    [{labBadge}] {isArabic ? exp.titleAr : exp.titleEn}
                  </option>
                );
              })}
            </select>
            <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* Active Experiment Header Banner */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border ${
              isLight
                ? 'bg-white border-slate-200 shadow-sm'
                : 'bg-slate-950/70 border-slate-800'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                {isArabic ? activeExp.gradeAr : activeExp.gradeEn}
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {activeExp.id}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {isArabic ? activeExp.titleAr : activeExp.titleEn}
            </h3>
          </div>

          {/* Hypothesis & Scientific Formula */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>{isArabic ? 'الفرضية العلمية' : 'Scientific Hypothesis'}</span>
              </h4>
              <div className="text-xs sm:text-sm leading-relaxed text-slate-300">
                <MathRenderer text={isArabic ? activeExp.hypothesisAr : activeExp.hypothesisEn} lang={lang} />
              </div>
            </div>

            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>{isArabic ? 'القانون والنموذج الرياضي' : 'Governing Equation'}</span>
              </h4>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-cyan-300 overflow-x-auto text-center flex items-center justify-center min-h-[52px]">
                <MathRenderer
                  math={activeExp.formula}
                  block={true}
                  lang={lang}
                  className="no-box !my-0 !py-0 !border-0 !bg-transparent text-cyan-300"
                />
              </div>
            </div>
          </div>

          {/* Apparatus & Step-by-Step Checkpoints */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Apparatus List */}
            <div
              className={`p-4 rounded-2xl border md:col-span-1 ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>{isArabic ? 'الأدوات والمواد' : 'Apparatus & Materials'}</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {(isArabic ? activeExp.apparatusAr : activeExp.apparatusEn).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span className="flex-1">
                      <MathRenderer text={item} lang={lang} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Checkpoint Steps */}
            <div
              className={`p-4 rounded-2xl border md:col-span-2 ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>{isArabic ? 'خطوات العمل ومحطات الإنجاز' : 'Procedure & Checkpoints'}</span>
              </h4>
              <div className="space-y-2.5">
                {(isArabic ? activeExp.stepsAr : activeExp.stepsEn).map((step, idx) => {
                  const key = `${activeExp.id}_step_${idx}`;
                  const isDone = !!completedSteps[key];

                  return (
                    <div
                      key={idx}
                      onClick={() => handleToggleStep(idx)}
                      className={`p-2.5 rounded-xl border text-xs flex items-start gap-3 cursor-pointer transition-all ${
                        isDone
                          ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <button
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                          isDone
                            ? 'bg-emerald-500 text-white border-emerald-400'
                            : 'border-slate-600 bg-slate-800'
                        }`}
                      >
                        {isDone && <CheckCircle className="w-3.5 h-3.5" />}
                      </button>
                      <span className="flex-1 leading-relaxed">
                        <MathRenderer text={step} lang={lang} />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Student Observational Data Logger */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4" />
                <span>{isArabic ? 'تدوين النتائج وملاحظات الطالب' : 'Student Observation Log & Notes'}</span>
              </h4>
              <button
                onClick={() => setStudentNotes((prev) => ({ ...prev, [activeExp.id]: '' }))}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isArabic ? 'إعادة تعيين الملاحظات' : 'Reset Notes'}</span>
              </button>
            </div>

            <textarea
              rows={3}
              value={studentNotes[activeExp.id] || ''}
              onChange={(e) =>
                setStudentNotes((prev) => ({ ...prev, [activeExp.id]: e.target.value }))
              }
              placeholder={
                isArabic
                  ? 'سجّل هنا قراءاتك التجريبية، الحسابات الرياضية، وملاحظاتك أثناء تنفيذ التجربة...'
                  : 'Record your experimental readings, mathematical calculations, and observational remarks here...'
              }
              className="w-full text-xs sm:text-sm p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />

            <div className="mt-3 p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300">
              <span className="font-bold">{isArabic ? 'الاستنتاج العلمي المعتمد: ' : 'Official Conclusion: '}</span>
              <span>
                <MathRenderer
                  text={isArabic ? activeExp.expectedConclusionAr : activeExp.expectedConclusionEn}
                  lang={lang}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
