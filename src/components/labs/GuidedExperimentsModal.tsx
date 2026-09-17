import React, { useState } from 'react';
import type { Language } from '../../i18n/translations';
import { MathRenderer } from '../MathRenderer';
import { formatPlainMathTitle } from '../../services/labReportService';
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
  onOpenReportGenerator?: (expId: string) => void;
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
  {
    id: 'phys-exp-5',
    lab: 'physics',
    titleEn: 'Semiconductor Diode Barrier Potential & Coolidge Tube X-Ray Spectra',
    titleAr: 'دراسة حاجز الجهد للوصلة الثنائية وأطياف الأشعة السينية في أنبوبة كولدج',
    gradeEn: 'Grade 12 Physics - Modern Physics & Electronics (Chapters 6 & 8)',
    gradeAr: 'الصف الثالث الثانوي - الإلكترونيات الحديثة والأطياف الذرية وأشعة إكس',
    hypothesisEn: 'Forward bias collapses depletion barrier ($V > 0.7\\text{ V}$ Si); Coolidge tube accelerating potential determines Duane-Hunt minimum wavelength: $\\lambda_{\\min} = \\frac{hc}{eV}$.',
    hypothesisAr: 'التوصيل الأمامي يهبط بحاجز الجهد ($V > 0.7\\text{ V}$ للسيليكون) ممرراً التيار؛ ويحدد فرق الجهد العالي في أنبوبة كولدج أقصر طول موجي مستمر وفق قانون دوين-هانت.',
    apparatusEn: [
      'Silicon & Germanium p-n Junction Diodes',
      'Dual-trace AC Rectifier oscilloscope with smoothing capacitor',
      'NPN Bipolar Junction Transistor (BJT) Common-Emitter Circuit',
      'High-voltage Coolidge X-Ray Tube with Tungsten/Molybdenum Target',
      'X-Ray crystal spectrometer with scintillation detector',
    ],
    apparatusAr: [
      'وصلات ثنائية p-n من السيليكون والجرمانيوم',
      'راسم إشارة ركيزة لتقويم التيار المتناوب مع مكثف تنعيم',
      'دائرة ترانزستور NPN في وضع الباعث المشترك كمكبر وعاكس',
      'أنبوبة كولدج لتوليد أشعة إكس بجهد عالي وهدف من التنجستن/الموليبدنوم',
      'مطياف أشعة سينية بلوري مع كاشف وميضي',
    ],
    stepsEn: [
      'Select Silicon p-n diode and sweep forward bias from $0$ to $1.2\\text{ V}$; observe exponential conduction above $V_{\\text{bi}} \\approx 0.7\\text{ V}$.',
      'Switch to Full-Wave Bridge Rectifier mode; observe continuous positive half-cycles with ripple suppression as capacitance $C$ increases.',
      'Configure BJT in Common-Emitter mode; verify that collector output AC sine wave displays a strict $180^\\circ$ phase inversion relative to base input.',
      'Operate Coolidge tube at accelerating potentials $V = 30, 50, 70\\text{ kV}$; observe continuous Bremsstrahlung spectrum shift.',
      'Verify that minimum cutoff wavelength follows Duane-Hunt law: $\\lambda_{\\min} = \\frac{12.4}{V_{\\text{kV}}}\\text{ \\AA}$.',
      'Exceed $69.5\\text{ kV}$ on Tungsten target to trigger characteristic $K_\\alpha$ and $K_\\beta$ emission peaks.',
    ],
    stepsAr: [
      'اختر وصلة سيليكون ثنائية وزد جهد التوصيل الأمامي تدريجياً؛ لاحظ بدء التوصيل الأسي عند تجاوز حاجز الجهد $V_{\\text{bi}} \\approx 0.7\\text{ V}$.',
      'انتقل إلى وضع قنطرة التقويم الموجي الكامل؛ ولاحظ تقويم كلا نصفي الموجة وتلاشي التموج بزيادة سعة المكثف $C$.',
      'شغّل الترانزستور كقاعدة باعث مشترك؛ وتحقق من انعكاس طور إشارة الخرج بمقدار $180^\\circ$ بالنسبة لإشارة الدخل.',
      'اضبط جهد أنبوبة كولدج على $30$، $50$، و $70\\text{ kV}$ وراقب زحف الطيف المستمر نحو أطوال موجية أقصر.',
      'تحقق من انطباق قانون دوين-هانت على أقصر طول موجي: $\\lambda_{\\min} = \\frac{12.4}{V_{\\text{kV}}}\\text{ \\AA}$.',
      'ارفع الجهد فوق $69.5\\text{ kV}$ لملاحظة ظهور قمتي الطيف الخطي المميز $K_\\alpha$ و $K_\\beta$ لهدف التنجستن.',
    ],
    formula: '\\lambda_{\\min} = \\frac{hc}{eV} = \\frac{12398}{V\\text{ (V)}} \\text{ \\AA}, \\quad I_C = \\beta I_B, \\quad V_r = \\frac{I_{\\text{dc}}}{2 f C}',
    expectedConclusionEn: 'Duane-Hunt cutoff validates quantum photon emission from electron kinetic deceleration, while p-n barrier and BJT current amplification govern modern electronic circuits.',
    expectedConclusionAr: 'يثبت حد دوين-هانت انبعاث فوتونات الكم إثر كبح الإلكترونات السريعة، وتؤكد خواص الوصلة والترانزستور مبادئ الإلكترونيات الحديثة.',
  },
  {
    id: 'phys-exp-6',
    lab: 'physics',
    titleEn: 'Rutherford Alpha Scattering Cross-Section, Bohr Quantum Transitions & He-Ne Laser Resonator',
    titleAr: 'تشتت جسيمات ألفا لرذرفورد ونموذج بور للأطياف الذرية والمرنان الضوئي لليزر الهيليوم-نيون',
    gradeEn: 'Grade 12 Physics - Modern Physics & Quantum Mechanics (Chapters 6 & 7)',
    gradeAr: 'الصف الثالث الثانوي - الفيزياء الحديثة: الأطياف الذرية والليزر',
    hypothesisEn: 'Alpha particles undergo Coulomb scattering with differential cross-section $\\frac{d\\sigma}{d\\Omega} \\propto \\frac{1}{\\sin^4(\\theta/2)}$ confirming a dense nucleus, atomic hydrogen emits discrete Balmer lines $h\\nu = E_i - E_f$, and optical cavity standing waves satisfy $L = m\\frac{\\lambda}{2}$.',
    hypothesisAr: 'تخضع جسيمات ألفا للتشتت الكولومي بزاوية تتناسب عكسياً مع $\\sin^4(\\theta/2)$ مما يثبت تمركز الشحنة والكتلة في النواة، وتنبعث خطوط بالمر عند هبوط الإلكترون لمستوى $n=2$، ويحقق المرنان الضوئي شرط الأمواج الموقوفة $L = m\\frac{\\lambda}{2}$.',
    apparatusEn: [
      'High-energy Polonium-210 Alpha Emitter ($5.4\\text{ MeV}$)',
      'Ultra-thin Gold Foil ($0.4\\;\\mu\\text{m}$ / $400\\text{ nm}$)',
      'Movable Zinc Sulfide (ZnS) Scintillation Detector ($0^\\circ - 180^\\circ$)',
      'Hydrogen Gas Discharge Tube with High-Voltage Excitation ($5\\text{ kV}$)',
      'Diffraction Grating Spectrometer with Vernier Scale ($600\\text{ lines/mm}$)',
      'Helium-Neon ($632.8\\text{ nm}$) Laser Tube with Plano-Concave Optical Cavity Mirrors',
    ],
    apparatusAr: [
      'مصدر بولونيوم-210 مشع لجسيمات ألفا عالية الطاقة ($5.4\\text{ MeV}$)',
      'صفيحة رقيقة جداً من الذهب النقي سمكها ($0.4\\;\\mu\\text{m}$)',
      'شاشة كبريتيد الخارصين (ZnS) الوميضية القابلة للدوران ($0^\\circ - 180^\\circ$)',
      'أنبوبة تفريغ غاز الهيدروجين مع مصدر جهد عالٍ ($5\\text{ kV}$)',
      'مطياف ذري بمحزوز حيود دقيق ($600\\text{ خط/مم}$)',
      'أنبوبة ليزر الهيليوم-نيون ($632.8\\text{ nm}$) بمرآتين مستوية ومقعرة شبه منفذة',
    ],
    stepsEn: [
      'Direct collimated alpha stream onto the gold foil; observe that $>99.9\\%$ pass undeflected ($0^\\circ - 2^\\circ$).',
      'Rotate ZnS detector to large angles ($>90^\\circ$); record backward backscattered alpha scintillations ($1\\text{ in } 8000$) proving concentrated positive core.',
      'Calculate closest approach distance $r_0 = \\frac{2 Z e^2}{4\\pi\\varepsilon_0 K_\\alpha} \\approx 4.2 \\times 10^{-14}\\text{ m}$.',
      'Excite atomic hydrogen gas discharge; calibrate spectrometer against visible Balmer emission series.',
      'Measure emission wavelengths: $H_\\alpha = 656.3\\text{ nm}$ ($3 \\to 2$, red), $H_\\beta = 486.1\\text{ nm}$ ($4 \\to 2$, cyan), $H_\\gamma = 434.0\\text{ nm}$ ($5 \\to 2$, blue), $H_\\delta = 410.2\\text{ nm}$ ($6 \\to 2$, violet).',
      'Energize He-Ne laser; tune resonant cavity length $L = 30\\text{ cm}$ to observe longitudinal standing wave modes with standing condition $L = m \\frac{\\lambda}{2}$ yielding coherent $632.8\\text{ nm}$ red beam.',
    ],
    stepsAr: [
      'وجّه حزمة جسيمات ألفا نحو صفيحة الذهب؛ ولاحظ نفاذ أكثر من $99.9\\%$ على استقامتها بزوايا ضئيلة ($0^\\circ - 2^\\circ$).',
      'أدر شاشة كبريتيد الخارصين لزوايا انحراف كبيرة ($>90^\\circ$)؛ وسجل الومضات المرتدة للخلف (جسيم من كل 8000) إثباتاً لكثافة النواة الموجبة.',
      'احسب أقصر مسافة اقتراب للنواة $r_0 = \\frac{2 Z e^2}{4\\pi\\varepsilon_0 K_\\alpha} \\approx 4.2 \\times 10^{-14}\\text{ m}$.',
      'شغّل أنبوبة التفريغ الكهربي لغاز الهيدروجين؛ واضبط المطياف لرصد متسلسلة بالمر في نطاق الضوء المنظور.',
      'قِس الأطوال الموجية المنبعثة: خط $H_\\alpha = 656.3\\text{ nm}$ (أحمر)، $H_\\beta = 486.1\\text{ nm}$ (سماوي)، $H_\\gamma = 434.0\\text{ nm}$ (أزرق)، $H_\\delta = 410.2\\text{ nm}$ (بنفسجي).',
      'شغّل ليزر الهيليوم-نيون واضبط طول التجويف الرنيني $L = 30\\text{ cm}$ لملاحظة الأمواج الموقوفة وشرط الرنين $L = m \\frac{\\lambda}{2}$ للحصول على حزمة متماسكة حمراء بطول موجي $632.8\\text{ nm}$.',
    ],
    formula: '\\frac{d\\sigma}{d\\Omega} = \\left(\\frac{z Z e^2}{4\\pi\\varepsilon_0 \\cdot 4 K}\\right)^2 \\frac{1}{\\sin^4(\\theta/2)}, \\quad \\Delta E = \\frac{hc}{\\lambda} = E_i - E_f, \\quad L = m \\frac{\\lambda}{2}',
    expectedConclusionEn: 'Rutherford scattering disproves Thomson plum pudding model, establishing nuclear atom structure. Discrete Balmer lines validate quantized energy levels, and optical cavity standing waves confirm laser optical amplification.',
    expectedConclusionAr: 'برهن تشتت رذرفورد خطأ نموذج طومسون مؤكداً وجود النواة المركزية الموجبة. وتثبت خطوط بالمر تكميم مستويات الطاقة في ذرة الهيدروجين، بينما يؤكد المرنان الضوئي التضخيم بالانبعاث المستحث وإنتاج ليزر متماسك.',
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
  {
    id: 'chem-exp-4',
    lab: 'chemistry',
    titleEn: 'Organic Synthesis: Benzene Electrophilic Substitution & Fischer Esterification',
    titleAr: 'التخليق العضوي: توجيه الاستبدال في حلقة البنزين والاتزان في تكوين الإسترات',
    gradeEn: 'Grade 12 Chemistry - Organic Chemistry (Chapter 5)',
    gradeAr: 'الصف الثالث الثانوي - الكيمياء العضوية (الهيدروكربونات الأروماتية ومشتقاتها)',
    hypothesisEn: 'Activating ortho/para groups stabilize arenium ion resonance; water extraction in Fischer esterification drives yield past equilibrium.',
    hypothesisAr: 'المجموعات المعطية للإلكترونات توجه لموضعي أرثو وبارا عبر استقرار أيون الأرينيوم، ونزع الماء في تكوين الإستر يزيح الاتزان لزيادة المردود.',
    apparatusEn: [
      'Benzene EAS Reaction Chamber with Nitration, Chlorination, and Alkylation catalysts',
      'Electronic Resonance Arenium Ion Wheland Complex Visualizer',
      'Reflux setup with round-bottom flask and Liebig condenser',
      'Dean-Stark water separator for Le Chatelier equilibrium shift',
      'Carboxylic acid and alcohol fragrance synthesis catalog',
    ],
    apparatusAr: [
      'غرفة تفاعل الاستبدال الإلكتروفيلي في البنزين مع عوامل حفازة للنيترة والكلورة والألكلة',
      'مستعرض الرنين الإلكتروني لأيون الأرينيوم (معقد ويلاند)',
      'جهاز تكثيف مرتد ودورق كروي ومكثف ليبيج للتسخين',
      'مصيدة دين-ستارك لنزع الماء وإزاحة الاتزان وفق لوشاتيليه',
      'كتالوج الأحماض الكربوكسيلية والكحولات لتخليق النكهات والعطور',
    ],
    stepsEn: [
      'Select Toluene ($-\\text{CH}_3$) and react with nitrating mixture (conc. $\\text{HNO}_3 + \\text{H}_2\\text{SO}_4$) at $50^\\circ\\text{C}$.',
      'Observe directing effect yielding ortho and para nitrotoluene due to electron-donating inductive and hyperconjugative stabilization.',
      'Select Nitrobenzene ($-\\text{NO}_2$) and perform bromination; confirm selective meta-bromonitrobenzene formation.',
      'Synthesize Isoamyl acetate (Banana aroma) from Acetic acid and Isoamyl alcohol with concentrated $\\text{H}_2\\text{SO}_4$.',
      'Observe reversible equilibrium limit at $\\approx 66.7\\%$ yield under closed conditions.',
      'Engage water extraction via dehydrating agent; observe Le Chatelier shift propelling yield to $>95\\%$.',
    ],
    stepsAr: [
      'اختر التولوين ($-\\text{CH}_3$) وفاعله مع خليط النيترة (حمض نيتريك وكبريتيك مركزين) عند $50^\\circ\\text{C}$.',
      'لاحظ التوجيه لموضعي أرثو وبارا لتكوين أرثو وبارا نيتروتولوين بفعل استقرار البنية الرنينية.',
      'اختر النيتروبنزين ($-\\text{NO}_2$) وقم بإجراء البرومة؛ تحقق من التوجيه الحصري للموضع ميتا.',
      'قم بتخليق إستر أسيتات الأيزوأميل (رائحة الموز) من حمض الأسيتيك وكحول الأيزوأميل بحمض كبريتيك مركز.',
      'سجّل وصول التفاعل إلى حالة اتزان ديناميكي عند مردود يقارب $66.7\\%$ في الظروف العادية.',
      'فعّل نزع الماء بواسطة مادة نازعة للماء؛ ولاحظ انزياح الاتزان طردياً ليتجاوز المردود $95\\%$.',
    ],
    formula: '\\text{R-COOH} + \\text{R\'-OH} \\xrightleftharpoons[\\text{conc. } \\text{H}_2\\text{SO}_4]{\\Delta} \\text{R-COOR\'} + \\text{H}_2\\text{O}, \\quad K_c = \\frac{[\\text{Ester}][\\text{H}_2\\text{O}]}{[\\text{Acid}][\\text{Alcohol}]}',
    expectedConclusionEn: 'Aromatic directing groups are dictated by carbocation resonance delocalization, and esterification equilibrium is successfully shifted forward by Le Chatelier principle.',
    expectedConclusionAr: 'تحدد شحنة الرنين الإلكتروني في مركب ويلاند نواتج الاستبدال، ويثبت إزاحة اتزان الأسترة بنزع الماء صحة قاعدة لوشاتيليه.',
  },
  {
    id: 'chem-exp-5',
    lab: 'chemistry',
    titleEn: 'VSEPR Stereochemistry, Bond Angle Repulsion & Metallurgy Crystal Packing',
    titleAr: 'هندسة الجزيئات الفراغية بنظرية تنافر أزواج الإلكترونات (VSEPR) والتعبئة البلورية للسبائك المعدنية',
    gradeEn: 'Grade 12 / Secondary Chemistry - Chemical Bonding & Transition Metal Metallurgy (Chapter 1)',
    gradeAr: 'الصف الثالث الثانوي - الروابط الكيميائية وهندسة الجزيئات وعناصر السلسلة الانتقالية الأولى (السبائك)',
    hypothesisEn: 'Electron pair repulsion hierarchy ($LP-LP > LP-BP > BP-BP$) compresses bond angles ($CH_4: 109.5^\\circ \\to NH_3: 107.0^\\circ \\to H_2O: 104.5^\\circ$), and interstitial carbon atoms in steel distort BCC lattice slip planes, drastically boosting yield strength.',
    hypothesisAr: 'تدرج قوى التنافر بين أزواج الإلكترونات (زوج حر-حر > حر-رابط > رابط-رابط) يقلل زوايا الروابط من $109.5^\\circ$ في الميثان إلى $107.0^\\circ$ في الأمونيا ثم $104.5^\\circ$ في الماء، بينما تمنع ذرات الكربون البينية انزلاق طبقات الحديد، مضاعفة صلابة سبيكة الصلب.',
    apparatusEn: [
      'Interactive 3D WebGL Molecular Orbit Vector Visualizer',
      'VSEPR Geometry Goniometer (measuring bond angles to $0.1^\\circ$)',
      'Toroidal $\\pi$-electron resonance cloud density scanner (Benzene $C_6H_6$)',
      'Metallurgy Atomic Crystal Lattice Slicer (BCC Pure Iron, Interstitial Steel, Substitutional Stainless Steel, Intermetallic Cementite $Fe_3C$)',
      'Slip Plane Shear Stress & Vickers Microhardness Simulation Gauge',
    ],
    apparatusAr: [
      'مستعرض مدارات الروابط الجزيئية ثلاثي الأبعاد التفاعلي بتقنية WebGL',
      'مقياس زوايا الروابط الجزيئية الدقيق لنظرية VSEPR (بدقة $0.1^\\circ$)',
      'ماسح السحابة الإلكترونية الرنينية الحلقية لإلكترونات باي $\\pi$ في البنزين العطري',
      'قاطع البلورات الفلزية الذري (حديد نقي BCC، صلب بيني، صلب لا يصدأ استبدالي، سيمنتيت $Fe_3C$)',
      'مقياس إجهاد القص لانزلاق الطبقات واختبار صلادة فيكرز الميكانيكية للسبائك',
    ],
    stepsEn: [
      'Load Methane ($CH_4$): identify $AX_4$ steric number 4 with zero lone pairs; measure tetrahedral bond angle of $109.5^\\circ$.',
      'Load Ammonia ($NH_3$): identify $AX_3E$ with 1 lone pair; observe lone-pair repulsion compressing bond angles to $107.0^\\circ$ in trigonal pyramidal shape.',
      'Load Water ($H_2O$): identify $AX_2E_2$ with 2 lone pairs; observe maximum lone-pair repulsion bending the angle to $104.5^\\circ$.',
      'Load Carbon Dioxide ($CO_2$) and Boron Trifluoride ($BF_3$); record linear $180^\\circ$ and trigonal planar $120^\\circ$ geometries with zero net dipole.',
      'Inspect Benzene ($C_6H_6$): verify planar hexagonal ring with delocalized cyclic $\\pi$ resonance toroidal clouds above and below the carbon skeleton.',
      'Switch to Metallurgy Mode: apply shear stress to pure BCC iron; observe low-resistance crystal dislocation plane slip.',
      'Insert interstitial carbon atoms into interstitial voids; observe lattice distortion locking slip planes and elevating yield hardness in carbon steel.',
    ],
    stepsAr: [
      'حمّل جزيء الميثان ($CH_4$): افحص الصيغة $AX_4$ مع صفر أزواج حرة؛ وقِس زاوية الربط الرباعية السطوح $109.5^\\circ$.',
      'حمّل جزيء النشادر ($NH_3$): افحص الصيغة $AX_3E$ مع زوج حر واحد؛ ولاحظ ضغط الزوج الحر للروابط لتصبح الزاوية $107.0^\\circ$ بهرم ثلاثي القاعدة.',
      'حمّل جزيء الماء ($H_2O$): افحص الصيغة $AX_2E_2$ مع زوجين حرين؛ ولاحظ التنافر الأقصى الذي يقلص الزاوية إلى $104.5^\\circ$ في شكل زاوي منحني.',
      'حمّل ثاني أكسيد الكربون ($CO_2$) وثالث فلوريد البورون ($BF_3$)؛ وسجل الزاوية الخطية $180^\\circ$ والمثلثة المستوية $120^\\circ$ مع انعدام العزم القطبي الكلي.',
      'افحص حلقة البنزين العطري ($C_6H_6$): تحقق من الشكل السداسي المستوي والسحابة الرنينية غير المتمركزة لإلكترونات $\\pi$ أعلى وأسفل الحلقة.',
      'انتقل لنمط السبائك المعدنية: طبّق إجهاد القص على بلورة الحديد النقي BCC؛ ولاحظ سهولة انزلاق الطبقات الذرية.',
      'أدخل ذرات الكربون صغيرة الحجم في المسافات البينية؛ ولاحظ تشوه الشبكة وإعاقة انزلاق الطبقات، مما يكسب سبيكة الصلب صلابة ومقاومة ميكانيكية فائقة.',
    ],
    formula: '\\text{Repulsion}: LP-LP > LP-BP > BP-BP, \\quad \\theta(CH_4) = 109.5^\\circ > \\theta(NH_3) = 107.0^\\circ > \\theta(H_2O) = 104.5^\\circ, \\quad \\tau = \\frac{F}{A} \\cos\\phi \\cos\\lambda',
    expectedConclusionEn: 'VSEPR steric geometries rigorously govern molecular 3D shapes and dipole polarities. In transition metal metallurgy, interstitial and substitutional alloying obstructs crystal dislocation planes, transforming malleable pure iron into high-strength industrial alloys.',
    expectedConclusionAr: 'تحكم نظرية تنافر أزواج الإلكترونات الأشكال الهندسية وقطبية الجزيئات بدقة عالية. وفي كيمياء الفلزات الانتقالية، تمنع السبائك البينية والاستبدالية انزلاق الطبقات البلورية، محولة الحديد النقي اللين إلى سبائك صناعية فائقة الصلابة والمتانة.',
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
  {
    id: 'bio-exp-7',
    lab: 'biology',
    titleEn: 'Cellular Immunity: 6-Stage Phagocytosis & Cytotoxic T-Cell (CD8+) Perforin Lysis',
    titleAr: 'المناعة الخلوية: مراحل البلعمة الست وتثقيب البيرفورين القاتل للخلايا المصابة',
    gradeEn: 'Grade 12 Biology - Immunology (Chapter 4)',
    gradeAr: 'الصف الثالث الثانوي - المناعة في الكائنات الحية والمناعة الخلوية بالوساطة التائية',
    hypothesisEn: 'Macrophages process engulfed antigens via lysosomes onto MHC-II; cytotoxic CD8+ T-cells secrete perforin pores and lymphotoxins inducing cytolysis and apoptosis.',
    hypothesisAr: 'تبتلع الخلايا البلعمية الميكروبات وتحللها بالليزوسومات لتعرضها على MHC-II؛ وتفرز الخلايا التائية السامة البيرفورين لثقب الغشاء والسموم اللمفاوية لتحفيز الموت المبرمج.',
    apparatusEn: [
      'High-resolution Macrophage Amoeboid Dynamic Viewport',
      'Bacterial pathogen colony with IgG & C3b opsonization markers',
      'Lysosomal fusion and hydrolytic lysozyme enzyme tracker',
      'Cytotoxic T-Lymphocyte ($CD8^+$ $T_C$) Perforin Secretion Chamber',
      'Target cancer/virus-infected cell membrane permeability sensor',
    ],
    apparatusAr: [
      'مجهر فائق الدقة لرصد حركة الخلية البلعمية الكبيرة الأميبية',
      'مستعمرة بكتيرية مسببة للمرض مزودة بمستضدات ومغلفة بالأجسام المضادة (Opsonization)',
      'متتبع اندماج الليزوسومات والإنزيمات الهاضمة المحللة',
      'غرفة إفراز بروتين البيرفورين والسموم اللمفاوية للخلايا التائية السامة ($CD8^+$)',
      'حساس نفاذية الغشاء الخلوي للخلية المصابة بالفيروس أو الخلية السرطانية',
    ],
    stepsEn: [
      'Initiate Stage 1 (Chemotaxis): observe macrophage pseudopodia directed along chemokine concentration gradient.',
      'Progress to Stages 2 & 3: witness receptor-mediated adherence followed by pseudopod engulfment into an intracellular phagosome.',
      'Trigger Stage 4 (Phagolysosome fusion): observe primary lysosomes discharging lysozymes into the phagosome.',
      'Monitor Stage 5 & 6: track enzymatic protein fragmentation and display of peptide fragments on surface MHC-II complexes.',
      'Switch to Cytotoxic T-Cell ($CD8^+$) module: observe TCR recognition of foreign antigen presented on infected cell.',
      'Trigger Perforin exocytosis: observe calcium-dependent multimerization into cylindrical pores ($16\\text{ nm}$), inducing rapid osmotic swelling and lysis.',
      'Deploy Lymphotoxins: observe activation of endogenous nucleases causing targeted apoptotic DNA fragmentation.',
    ],
    stepsAr: [
      'ابدأ المرحلة الأولى (الانجذاب الكيميائي): راقب حركة الأقدام الكاذبة للبلعمية نحو تركيز المواد الكيميائية الجاذبة.',
      'انتقل للمرحلتين الثانية والثالثة: شاهد الالتصاق السطحي ثم الإحاطة بالأقدام الكاذبة لتكوين الفجوة البلعومية.',
      'فعّل المرحلة الرابعة: راقب اندماج الليزوسومات مع الفجوة وتفريغ الإنزيمات الهاضمة القاتلة.',
      'تابع المرحلتين الخامسة والسادسة: لاحظ تفكيك بروتينات الميكروب وعرض شظاياها مرتبطة ببروتينات التوافق النسيجي MHC-II.',
      'انتقل إلى استوديو الخلايا التائية السامة ($CD8^+$): راقب التعرف النوعي لمستقبل TCR على الخلية المصابة.',
      'أطلق بروتين البيرفورين: شاهد بلمرة البروتين في الغشاء وتكوين ثقوب أسطوانية ($16\\text{ nm}$) تؤدي لانفجار الخلية أوزموزياً.',
      'أطلق السموم اللمفاوية: لاحظ تنشيط جينات معينة داخل نواة الخلية المصابة تؤدي لتفتيت DNA وموت الخلية المبرمج.',
    ],
    formula: '\\text{Perforin} + \\text{Target Bilayer} \\xrightarrow{\\text{Ca}^{2+}} \\text{Transmembrane Pores} \\implies \\text{Osmotic Lysis}',
    expectedConclusionEn: 'Sequential phagocytosis provides the indispensable bridge between innate and adaptive immunity, while perforin and lymphotoxins deliver cytotoxic clearance.',
    expectedConclusionAr: 'تشكل البلعمة حلقة الوصل الحيوية بين المناعة الطبيعية والمكتسبة، بينما يمثل البيرفورين والسموم اللمفاوية ذروة الاستجابة المناعية الخلوية المتخصصة.',
  },
  {
    id: 'bio-exp-8',
    lab: 'biology',
    titleEn: 'B-DNA Thermal Denaturation (100°C), tRNA Codon Recognition & Chromatin Compaction Hierarchy',
    titleAr: 'التهجين الحراري وتفكك اللولب المزدوج لـ DNA عند 100°م والتعرف الكودوني لـ tRNA ومستويات تكثيف الصبغي',
    gradeEn: 'Grade 12 Biology - Molecular Biology & Genetics (DNA & RNA)',
    gradeAr: 'الصف الثالث الثانوي - البيولوجيا الجزيئية: الحمض النووي DNA وتخليق البروتين',
    hypothesisEn: 'Thermal heating to $100^\\circ\\text{C}$ breaks inter-strand hydrogen bonds ($A=T$ with 2 H-bonds, $G \\equiv C$ with 3 H-bonds) causing denaturation, cooling allows sequence-specific hybridization, tRNA anticodons recognize mRNA triplets, and histone octamers compact $2\\text{ m}$ DNA by $100,000\\times$ into metaphase chromosomes.',
    hypothesisAr: 'التسخين لدرجة $100^\\circ\\text{م}$ يكسر الروابط الهيدروجينية الضعيفة بين شريطي DNA (رابطتان بين A=T وثلاث روابط بين G≡C) مفككاً اللولب المزدوج، بينما يسمح التبريد بإعادة التهجين النوعي، ويتعرف مضاد الكودون في tRNA على كودون mRNA، وتكثف بروتينات الهستونات خيط DNA بطول مترين بمقدار 100,000 مرة إلى كروموسوم استوائي.',
    apparatusEn: [
      'Interactive 3D WebGL B-DNA Double Helix Macromolecular Viewport',
      'Precision Thermal Denaturation Chamber ($25^\\circ\\text{C} - 100^\\circ\\text{C}$)',
      'UV Spectrophotometric Hyperchromic Absorbance Monitor ($260\\text{ nm}$)',
      'Folded tRNA Cloverleaf & L-shape Dynamic Simulator with CCA-3\' Amino Acid Acceptor',
      'Basic Histone Octamer (Arginine & Lysine) & Multi-Scale Chromatin Compaction Slider ($1\\times \\to 100,000\\times$)',
    ],
    apparatusAr: [
      'مستعرض اللولب المزدوج B-DNA الجزيئي ثلاثي الأبعاد بتقنية WebGL',
      'غرفة فك الارتباط والتهجين الحراري الدقيقة ($25^\\circ\\text{م} - 100^\\circ\\text{م}$)',
      'مقياس الامتصاص الطيفي الفوق بنفسجي لظاهرة زيادة الامتصاص ($260\\text{ nm}$)',
      'محاكي جزيء tRNA ثلاثي الأبعاد بشكل حرف L وموقع الارتباط بالحمض الأميني CCA-3\'',
      'مستعرض ثماني الهستونات القاعدي (أرجينين وليسين) ومكثف الكروماتين متعدد المقاييس ($1\\times \\to 100,000\\times$)',
    ],
    stepsEn: [
      'Inspect B-DNA double helix: observe antiparallel $5\' \\to 3\'$ and $3\' \\to 5\'$ sugar-phosphate backbones.',
      'Verify Watson-Crick hydrogen bonding: 2 H-bonds between Adenine and Thymine ($A=T$), 3 H-bonds between Guanine and Cytosine ($G \\equiv C$).',
      'Ramp temperature from $25^\\circ\\text{C}$ to $100^\\circ\\text{C}$: observe progressive hydrogen bond melting and strand unzipping into two single strands with hyperchromic UV rise.',
      'Initiate controlled cooling to $60^\\circ\\text{C}$: observe sequence-specific complementary re-annealing (DNA hybridization).',
      'Switch to tRNA mode: inspect L-shaped tertiary fold, $5\'$ phosphorylation, $3\'$ CCA invariant sequence, and anticodon loop triplets.',
      'Test codon-anticodon pairing with mRNA (e.g. AUG codon binding UAC anticodon carrying Methionine).',
      'Switch to Chromatin Compaction: observe wrapping of negatively charged DNA around positively charged basic histone octamers forming $10\\text{ nm}$ nucleosomes ($7\\times$).',
      'Advance compaction slider: track $30\\text{ nm}$ solenoid fiber ($40\\times$), looped domains on non-histone scaffold ($1,000\\times$), and condensed metaphase chromatid ($100,000\\times$) fitting into a $5\\;\\mu\\text{m}$ cell nucleus.',
    ],
    stepsAr: [
      'افحص اللولب المزدوج B-DNA: لاحظ تعاكس اتجاهي الشريطان ($5\' \\to 3\'$ و $3\' \\to 5\'$) وهيكل سكر-فوسفات الخارجي.',
      'تحقق من الروابط الهيدروجينية لقواعد واطسون وكريك: رابطتان هيدروجينيتان بين A و T ($A=T$) وثلاث روابط بين G و C ($G \\equiv C$).',
      'ارفع درجة الحرارة تدريجياً من $25^\\circ\\text{م}$ حتى $100^\\circ\\text{م}$: راقب انكسار الروابط الهيدروجينية وانفصال الشريطين وظاهرة زيادة امتصاص الأشعة فوق البنفسجية.',
      'ابدأ التبريد التدريجي المنظم حتى $60^\\circ\\text{م}$: شاهد عودة التحام وتكامل الشريطين (التهجين الحمضي).',
      'انتقل لجزيء tRNA: افحص الشكل الفراغي المميز (حرف L مقلوب)، والنهاية \'5 المفسفرة، وموقع الارتباط CCA-3\'، وحلقة مضاد الكودون.',
      'اختبر تطابق مضاد الكودون مع كودون mRNA (مثل ارتباط كودون البدء AUG بمضاد الكودون UAC الحامل للميثيونين).',
      'انتقل لنمط تكثيف الصبغي (الكروماتين): راقب التفاف شريط DNA سالب الشحنة حول بروتينات الهستونات القاعدية الموجبة مكوناً النيوكليوسومات ($7\\times$).',
      'حرّك مؤشر التكثيف تدريجياً: تتبع ألياف النيوكليوسومات ($40\\times$)، ثم الحلقات حول هيكل البروتينات غير الهستونية ($1,000\\times$)، حتى الكروموسوم الاستوائي المكتمل ($100,000\\times$) ليستقر داخل نواة قطرها $5\\;\\mu\\text{m}$ فقط.',
    ],
    formula: '\\text{Denaturation}: \\text{dsDNA} \\xrightarrow{100^\\circ\\text{C}} 2\\,\\text{ssDNA}, \\quad T_m \\approx 64.9 + 41 \\times \\frac{\\%G+C}{100}, \\quad \\text{Compaction} = \\frac{2.0\\,\\text{m}}{2.0\\,\\mu\\text{m}} = 100,000\\times',
    expectedConclusionEn: 'DNA thermal stability is governed by GC content and hydrogen bond thermodynamics. tRNA specific anticodons bridge genetic information to proteins, and electrostatic packaging between basic histones and acidic DNA condenses two meters of genetic blueprint into microscopic nuclei.',
    expectedConclusionAr: 'تتحكم نسبة القواعد النيتروجينية G و C والروابط الهيدروجينية في الثبات الحراري لـ DNA ودرجة انصهاره. وينقل tRNA الأحماض الأمينية بدقة كودونية متناهية، بينما يُمكّن التجاذب الكهربي بين الهستونات القاعدية ومجموعات الفوسفات الحامضية من تكثيف مترين من شريط DNA 100,000 مرة ليستقر داخل النواة المجهرية.',
  },

  // Math
  {
    id: 'math-exp-1',
    lab: 'math',
    titleEn: 'Investigating the Derivative as the Limit of Secant Slopes',
    titleAr: 'استقصاء المشتقة الأولى كنهاية لميل القاطع عند اقتراب النقطتين $(h \\to 0)$',
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
  {
    id: 'math-exp-4',
    lab: 'math',
    titleEn: 'Conservation of Linear Momentum in 2D Collisions & Ballistic Projectile Trajectories',
    titleAr: 'قانون حفظ كمية الحركة في التصادمات ثنائية الأبعاد ومسارات المقذوفات البالستية',
    gradeEn: 'Grade 12 Applied Math - Dynamics (Chapters 2 & 3)',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات التطبيقية (الديناميكا: كمية الحركة والدفع والمقذوفات)',
    hypothesisEn: 'Total linear momentum is conserved across all collisions ($\\Delta P = 0$); horizontal range is maximized at $45^\\circ$ launch angle in vacuum.',
    hypothesisAr: 'كمية الحركة الكلية محفوظة تماماً في جميع أنواع التصادمات ($\\Delta P = 0$)؛ والمدى الأفقي للمقذوف في الفراغ يبلغ ذروته عند زاوية إطلاق $45^\\circ$.',
    apparatusEn: [
      '2D Direct and Oblique Collision Sandbox with adjustable mass $m_1, m_2$',
      'Restitution coefficient $e$ controller ($0 \\le e \\le 1$)',
      'Ballistic launcher with variable muzzle velocity $v_0$ and launch angle $\\theta$',
      'Quadratic aerodynamic air drag simulator ($C_d = 0.47$)',
      'Dual vector telemetry displaying impulse $\\vec{J}$, $\\Delta KE$, and mechanical energy $E_{\\text{mech}}$',
    ],
    apparatusAr: [
      'منصة التصادم في بعدين المباشر وغير المباشر بكتل متغيرة $m_1, m_2$',
      'محدد معامل الارتداد لنيوتن $e$ ($0 \\le e \\le 1$)',
      'مدفع قذف بالستي متغير سرعة الإطلاق $v_0$ وزاوية الميل $\\theta$',
      'محاكي مقاومة الهواء الهوائية التربيعية مع عامل الإعاقة $C_d$',
      'شاشة قياسات لحظية لمتجه الدفع $\\vec{J}$، الطاقة المفقودة $\\Delta KE$، والطاقة الميكانيكية الكلية $E_{\\text{mech}}$',
    ],
    stepsEn: [
      'Set $m_1 = m_2 = 2.0\\text{ kg}$, $v_1 = 5.0\\text{ m/s}$, $v_2 = 0$, and $e = 1.0$ (Newton Cradle).',
      'Observe complete velocity exchange: Ball 1 stops ($v\'_1 = 0$) while Ball 2 departs at $5.0\\text{ m/s}$ with $\\Delta KE = 0$.',
      'Set $e = 0$ (Plastic Coalescence); verify common velocity $V = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$ and measure maximum kinetic energy loss.',
      'Configure 2D oblique collision with impact parameter $b$; observe normal impulse $\\vec{J}$ transfer while tangential velocity is conserved.',
      'Switch to Projectile Motion module; launch projectile at $v_0 = 20\\text{ m/s}$ across angles $30^\\circ, 45^\\circ, 60^\\circ$.',
      'Verify that $45^\\circ$ angle achieves maximum horizontal range $R = \\frac{v_0^2}{g} \\approx 40.8\\text{ m}$.',
      'Confirm complementary angle symmetry: $R(30^\\circ) = R(60^\\circ) = 35.3\\text{ m}$.',
      'Enable aerodynamic drag; observe range compression and asymmetric steepening of descent angle.',
    ],
    stepsAr: [
      'اضبط $m_1 = m_2 = 2.0\\text{ kg}$ و $v_1 = 5.0\\text{ m/s}$ و $v_2 = 0$ ومعامل الارتداد $e = 1.0$ (بندول نيوتن).',
      'لاحظ التبادل التام للسرعات: يتوقف الجسم الأول تماماً بينما ينطلق الثاني بسرعة $5.0\\text{ m/s}$ مع انعدام الفقد في طاقة الحركة.',
      'اضبط $e = 0$ (تصادم غير مرن تام - التحام)؛ تحقق من السرعة المشتركة $V = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$ وسجل أقصى فقد في الطاقة.',
      'اضبط تصادماً مائلاً مع إزاحة $b$؛ ولاحظ انتقال الدفع عمودياً وثبات السرعة في اتجاه المماس المشترك.',
      'انتقل إلى محاكي المقذوفات؛ أطلق مقذوفاً بسرعة $v_0 = 20\\text{ m/s}$ عند زوايا $30^\\circ$ و $45^\\circ$ و $60^\\circ$.',
      'تحقق من أن زاوية $45^\\circ$ تحقق أقصى مدى أفقي ممكن $R = \\frac{v_0^2}{g} \\approx 40.8\\text{ m}$.',
      'أثبت تماثل الزوايا المتتامة: $R(30^\\circ) = R(60^\\circ) = 35.3\\text{ m}$.',
      'فعّل مقاومة الهواء؛ ولاحظ انكماش المدى الأفقي وزيادة حدة زاوية الهبوط مقارنة بالصعود.',
    ],
    formula: 'm_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}\'_1 + m_2 \\vec{v}\'_2, \\quad R = \\frac{v_0^2\\sin(2\\theta)}{g}, \\quad \\vec{J} = \\Delta\\vec{p}',
    expectedConclusionEn: 'Linear momentum conservation is fundamental in all collisions, while projectile trajectories validate parabolic kinematics and aerodynamic drag compression.',
    expectedConclusionAr: 'يعد حفظ كمية الحركة قانوناً عاماً في كل التصادمات، وتبرهن مسارات المقذوفات تماثل الزوايا المتتامة وتأثير الإعاقة الهوائية.',
  },
  {
    id: 'math-exp-5',
    lab: 'math',
    titleEn: 'Complex Numbers & De Moivre Theorem: Argand Representation & n-th Roots of Unity',
    titleAr: 'الأعداد المركبة ونظرية ديموافر: شكل أرجاند والجذور النونية للواحد الصحيح (أوميجا)',
    gradeEn: 'Grade 12 Pure Math - Algebra (Chapter 2)',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات البحتة (الجبر: الأعداد المركبة ونظرية ديموافر)',
    hypothesisEn: 'Any complex number $z = x + iy$ uniquely maps to trigonometric $r(\\cos\\theta + i\\sin\\theta)$ and Euler $r e^{i\\theta}$ forms; its $n$-th roots form vertices of a regular $n$-gon on circle radius $\\sqrt[n]{r}$ with angular step $2\\pi/n$ satisfying $\\sum_{k=0}^{n-1} z_k = 0$.',
    hypothesisAr: 'كل عدد مركب $z = x + iy$ يكافئ تماماً صورته المثلثية $r(\\cos\\theta + i\\sin\\theta)$ والأسية $r e^{i\\theta}$؛ وجذوره النونية تمثل رؤوس مضلع منتظم ذي $n$ ضلعاً على دائرة نصف قطرها $\\sqrt[n]{r}$ بفارق زاوي مقداره $2\\pi/n$ وتحقق حفظ المجموع الصفري $\\sum_{k=0}^{n-1} z_k = 0$.',
    apparatusEn: [
      'Interactive Argand Plane Coordinate Canvas',
      'Real (Re) and Imaginary (Im) axis sliders with coordinate lock',
      'Trigonometric & Exponential Euler form live converter',
      'Conjugate $\\bar{z}$ and Additive Inverse $-z$ reflection visualizer',
      'De Moivre $n$-th root circle generator ($n = 2, 3, 4, 5, 6$)',
      'Cubic roots of unity $(\\omega, \\omega^2)$ algebraic relationship analyzer',
    ],
    apparatusAr: [
      'لوحة شكل أرجاند التفاعلية لمستوى الأعداد المركبة',
      'منزلقات الإحداثي الحقيقي (Re) والتخيلي (Im) مع شبكة متعامدة',
      'محول فوري بين الصورة الجبرية، المثلثية والأسية لأويلر',
      'أداة عرض تماثل المرافق $\\bar{z}$ والمعكوس الجمعي $-z$',
      'مولد الجذور النونية على دائرة المقياس لديموافر ($n = 2, 3, 4, 5, 6$)',
      'لوحة تحليل الجذور التكعيبية للواحد الصحيح (علاقات أوميجا $\\omega$ و $\\omega^2$)',
    ],
    stepsEn: [
      'Set Cartesian coordinates to $x = 3$ and $y = 3$; observe complex vector $z = 3 + 3i$.',
      'Verify modulus $r = \\sqrt{3^2 + 3^2} = 3\\sqrt{2} \\approx 4.24$ and principal argument $\\theta = \\arctan(3/3) = 45^\\circ$ ($\\frac{\\pi}{4}$ rad) in Quadrant I.',
      'Examine trigonometric form $z = 3\\sqrt{2}\\left(\\cos 45^\\circ + i\\sin 45^\\circ\\right)$ and Euler form $z = 3\\sqrt{2} e^{i\\frac{\\pi}{4}}$.',
      'Toggle conjugate $\\bar{z} = 3 - 3i$; verify reflection across the horizontal Real axis with argument $-\\theta = -45^\\circ$.',
      'Toggle additive inverse $-z = -3 - 3i$; verify point reflection through the origin into Quadrant III with argument $\\theta - 180^\\circ = -135^\\circ$.',
      'Switch to De Moivre & Roots subtab and set root degree $n = 3$.',
      'Verify the 3 roots lie on a circle of radius $\\sqrt[3]{3\\sqrt{2}} \\approx 1.62$, distributed at angular increments of $\\frac{360^\\circ}{3} = 120^\\circ$.',
      'Confirm the fundamental identities of cubic roots of unity: $1 + \\omega + \\omega^2 = 0$ and $\\omega^3 = 1$.',
    ],
    stepsAr: [
      'اضبط الإحداثيات الكارتيزية على $x = 3$ و $y = 3$؛ لاحظ متجه العدد المركب $z = 3 + 3i$.',
      'تحقق من المقياس $r = \\sqrt{3^2 + 3^2} = 3\\sqrt{2} \\approx 4.24$ والسعة الأساسية $\\theta = 45^\\circ$ ($\\frac{\\pi}{4}$) في الربع الأول.',
      'افحص الصورة المثلثية $z = 3\\sqrt{2}(\\cos 45^\\circ + i\\sin 45^\\circ)$ والصورة الأسية $z = 3\\sqrt{2} e^{i\\frac{\\pi}{4}}$.',
      'فعّل إظهار المرافق $\\bar{z} = 3 - 3i$؛ ولاحظ الانعكاس حول محور السينات الحقيقي وسعته $-\\theta = -45^\\circ$.',
      'فعّل إظهار المعكوس الجمعي $-z = -3 - 3i$؛ ولاحظ الانعكاس في نقطة الأصل بالربع الثالث وسعته $-135^\\circ$.',
      'انتقل إلى تبويب نظرية ديموافر والجذور واضبط رتبة الجذر على $n = 3$ (الجذور التكعيبية).',
      'تحقق من وقوع الجذور الثلاثة على دائرة نصف قطرها $\\sqrt[3]{r} \\approx 1.62$، متباعدة بزوايا $\\frac{360^\\circ}{3} = 120^\\circ$.',
      'أثبت العلاقات الأساسية للجذور التكعيبية للواحد الصحيح: $1 + \\omega + \\omega^2 = 0$ و $\\omega^3 = 1$.',
    ],
    formula: 'z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}, \\quad z^{1/n} = \\sqrt[n]{r}\\left(\\cos\\frac{\\theta + 2k\\pi}{n} + i\\sin\\frac{\\theta + 2k\\pi}{n}\\right), \\quad 1 + \\omega + \\omega^2 = 0',
    expectedConclusionEn: 'De Moivre theorem establishes the geometric harmony between complex roots and regular cyclic polygons, verifying rotational multiplication and zero-sum cyclic balance.',
    expectedConclusionAr: 'تبرهن نظرية ديموافر التوافق الهندسي الرائع بين الجذور النونية والمضلعات المنتظمة داخل مستوى أرجاند، مع تحقق متطابقات أوميجا وحفظ المجموع الصفري.',
  },
];

export const GuidedExperimentsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  activeLab,
  onOpenReportGenerator,
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
            {onOpenReportGenerator && (
              <button
                onClick={() => onOpenReportGenerator(activeExp.id)}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-200" />
                <span>{isArabic ? 'استمارة التقرير المعملي A4' : 'A4 Lab Report'}</span>
              </button>
            )}
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
                    [{labBadge}] {formatPlainMathTitle(isArabic ? exp.titleAr : exp.titleEn)}
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
                <MathRenderer text={isArabic ? activeExp.gradeAr : activeExp.gradeEn} inline={true} lang={lang} />
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {activeExp.id}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              <MathRenderer text={isArabic ? activeExp.titleAr : activeExp.titleEn} inline={true} lang={lang} />
            </h3>

            {onOpenReportGenerator && (
              <button
                onClick={() => onOpenReportGenerator(activeExp.id)}
                className="mt-3 w-full py-2 px-3 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-cyan-300" />
                <span>{isArabic ? 'فتح وتدوين التقرير العملي الكامل لهذه التجربة (A4 + جدول القراءات)' : 'Open & Edit Full Practical Lab Report (A4 + Data Table)'}</span>
              </button>
            )}
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
