import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import type { ThemeMode } from '../../types/curriculum';
import { MathRenderer } from '../MathRenderer';
import {
  RotateCw,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Filter,
  Shuffle,
  Eye,
  RefreshCw,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  onOpenDesmos?: () => void;
}

export interface PhysicsFlashcard {
  id: string;
  topic: 'circuits' | 'magnetism' | 'induction' | 'ac_resonance' | 'modern';
  titleEn: string;
  titleAr: string;
  frontEn: string;
  frontAr: string;
  backEn: string;
  backAr: string;
  latex?: string;
  teacherNoteEn?: string;
  teacherNoteAr?: string;
}

const PHYSICS_FLASHCARDS: PhysicsFlashcard[] = [
  // 1. DC Circuits & Kirchhoff
  {
    id: 'pfc_01',
    topic: 'circuits',
    titleEn: 'Wire Stretching & Geometric Resistance Scaling',
    titleAr: 'سحب وتشكيل الأسلاك وثبوت الحجم',
    frontEn: 'If a metallic wire of initial resistance R is uniformly stretched so that its length increases by 10%, what is the percentage increase in its resistance?',
    frontAr: 'إذا سُحب سلك معدني مقاومته الابتدائية R بانتظام بحيث زاد طوله بنسبة 10%، فما هي النسبة المئوية للزيادة في مقاومته؟',
    backEn: 'Since mass and volume remain constant, when length increases by factor 1.1, the cross-sectional area decreases by factor 1/1.1. Therefore, R scales with L^2: R2 = (1.1)^2 * R = 1.21 R. The resistance increases by 21%.',
    backAr: 'نظراً لثبوت الحجم والكتلة، عند زيادة الطول بنسبة 1.1 تقل مساحة المقطع إلى 1/1.1. وبالتالي تتناسب المقاومة طردياً مع مربع الطول (R ∝ L^2): R2 = (1.1)^2 * R = 1.21 R، أي تزداد المقاومة بنسبة 21%.',
    latex: 'R_2 = \\rho_e \\frac{L_2}{A_2} = \\rho_e \\frac{(1.1 L_1)}{\\frac{A_1}{1.1}} = (1.1)^2 R_1 = 1.21 R_1 \\implies +21\\%',
    teacherNoteEn: 'Scaling rule: When volume is constant, R ∝ L^2 ∝ 1/A^2 ∝ 1/r^4.',
    teacherNoteAr: 'قاعدة ذهبية: عند سحب سلك مع ثبوت حجمه تتناسب المقاومة طردياً مع L^2 وعكسياً مع r^4.',
  },
  {
    id: 'pfc_02',
    topic: 'circuits',
    titleEn: 'Battery Terminal Voltage (Discharge vs. Charge)',
    titleAr: 'فرق الجهد بين قطبي البطارية (تفريغ مقابل شحن)',
    frontEn: 'When does the terminal voltage V of a real battery exceed its electromotive force (V > VB)?',
    frontAr: 'متى يكون فرق الجهد بين قطبي بطارية أكبر من قوتها الدافعة الكهربية (V > VB)؟',
    backEn: 'Terminal voltage exceeds EMF (V = VB + I*r) when the battery is being charged by an external power source whose EMF is higher, forcing electric current into the battery positive terminal.',
    backAr: 'يكون فرق الجهد أكبر من القوة الدافعة (V = VB + I*r) عندما تكون البطارية في حالة شحن بواسطة مصدر كهربي خارجي ذي قوة دافعة أكبر يدفع التيار ليدخل من القطب الموجب للبطارية.',
    latex: 'V_{\\text{charging}} = V_B + I \\cdot r > V_B, \\quad V_{\\text{discharging}} = V_B - I \\cdot r < V_B',
    teacherNoteEn: 'In open circuit (I = 0), V = VB regardless of internal resistance r.',
    teacherNoteAr: 'في حالة الدائرة المفتوحة (I = 0) تنعدم قيمة Ir ويكون V = VB.',
  },
  {
    id: 'pfc_03',
    topic: 'circuits',
    titleEn: 'Wheatstone Bridge Null Deflection Condition',
    titleAr: 'شرط اتزان قنطرة ويتستون وإلغاء المقاومة',
    frontEn: 'Under what specific resistance ratio does a central resistor connected across a bridge circuit carry zero current?',
    frontAr: 'تحت أي نسبة محددة للمقاومات تلغى المقاومة المتصلة في فرع القنطرة الوسيط وينعدم التيار المار بها؟',
    backEn: 'When the ratio of upper adjacent arms equals the ratio of lower adjacent arms: R1 / R2 = R3 / R4 (or cross-product R1 * R4 = R2 * R3). The electric potential at both bridge junction nodes becomes identical (VB = VC), resulting in delta V = 0 and IG = 0.',
    backAr: 'عندما تتساوى نسب المقاومات على جانبي الفرع: R1 / R2 = R3 / R4 (أو R1 * R4 = R2 * R3). يتساوى الجهد الكهربي عند طرفي المقاومة (VB = VC) فيكون فرق الجهد صفراً وينعدم التيار IG = 0.',
    latex: '\\frac{R_1}{R_2} = \\frac{R_3}{R_4} \\iff R_1 R_4 = R_2 R_3 \\implies V_B = V_C, \\quad I_G = 0',
  },
  {
    id: 'pfc_04',
    topic: 'circuits',
    titleEn: 'Kirchhoff Conservation Principles',
    titleAr: 'مبادئ حفظ الطاقة والشحنة في قانوني كيرشوف',
    frontEn: 'State the fundamental physics conservation laws underlying Kirchhoff first and second circuit rules.',
    frontAr: 'ما هما قانونا الحفظ الفيزيائيان اللذان يقوم عليهما قانونا كيرشوف الأول والثاني؟',
    backEn: '• 1st Law (Junction Rule): Conservation of Electric Charge (sum of currents entering a junction equals sum of currents leaving: Σ I = 0).\n• 2nd Law (Loop Rule): Conservation of Energy (algebraic sum of EMFs in any closed loop equals algebraic sum of IR drops: Σ VB = Σ IR).',
    backAr: '• القانون الأول (العقدة): قانون حفظ الشحنة الكهربية (المجموع الجبري للتيارات عند نقطة اتصال = صفر).\n• القانون الثاني (المسار المغلق): قانون حفظ الطاقة (المجموع الجبري للقوى الدافعة = المجموع الجبري لفروق الجهد).',
    latex: '\\sum I_{\\text{in}} = \\sum I_{\\text{out}} \\quad (\\text{Charge}), \\quad \\sum V_B = \\sum (I R) \\quad (\\text{Energy})',
  },

  // 2. Magnetism & Measuring Instruments
  {
    id: 'pfc_05',
    topic: 'magnetism',
    titleEn: 'Neutral Point Location Between Parallel Wires',
    titleAr: 'موضع نقطة التعادل بين سلكين مستقيمين متوازيين',
    frontEn: 'Where does the magnetic neutral point (B_total = 0) locate for two long straight parallel wires carrying unequal currents in the same vs. opposite directions?',
    frontAr: 'أين تقع نقطة التعادل (B_total = 0) لسلكين مستقيمين متوازيين يمر بهما تياران غير متساويين في نفس الاتجاه وفي اتجاهين متضادين؟',
    backEn: '• Same direction: Located between the two wires, closer to the wire with weaker current: d1 / I1 = d2 / I2.\n• Opposite directions: Located outside the wires on the extension line, closer to the wire with weaker current.\n• If currents are equal in opposite directions: No neutral point exists anywhere in space.',
    backAr: '• في نفس الاتجاه: تقع بين السلكين أقرب للسلك الأقل تياراً: d1 / I1 = d2 / I2.\n• في اتجاهين متضادين: تقع خارج السلكين بجوار السلك الأقل تياراً.\n• إذا تساوى التياران في اتجاهين متضادين: لا توجد نقطة تعادل في أي موضع.',
    latex: '\\frac{I_1}{d_1} = \\frac{I_2}{d_2} \\implies B_1 = B_2',
  },
  {
    id: 'pfc_06',
    topic: 'magnetism',
    titleEn: 'Ammeter Shunt Resistance & Sensitivity',
    titleAr: 'مجزئ التيار في الأميتر وحساسية الجهاز',
    frontEn: 'Why is the shunt resistor Rs connected in parallel with the moving-coil galvanometer, and how does decreasing Rs affect ammeter range and sensitivity?',
    frontAr: 'لماذا يوصل مجزئ التيار Rs على التوازي مع ملف الجلفانومتر، وما أثر تصغير قيمة Rs على مدى وحساسية الأميتر؟',
    backEn: 'Rs is a small resistor connected in parallel to: (1) bypass most of the measured current to protect the coil from burnout, and (2) minimize total instrument resistance so it doesn\'t affect the circuit.\n• Decreasing Rs increases measuring range (I_max) and decreases sensitivity (Ig / I).',
    backAr: 'يوصل Rs (مقاومة صغيرة على التوازي) لـ: (١) تمرير الجزء الأكبر من التيار لحماية الملف من التلف، (٢) تصغير المقاومة الكلية للأميتر حتى لا تؤثر على تيار الدائرة.\n• كلما صغرت Rs زاد أقصى تيار يقيسه الأميتر (المدى) وقلت حساسية الجهاز.',
    latex: 'R_s = \\frac{I_g R_g}{I - I_g}, \\quad \\text{Sensitivity} = \\frac{I_g}{I} = \\frac{R_s}{R_s + R_g}',
  },
  {
    id: 'pfc_07',
    topic: 'magnetism',
    titleEn: 'Voltmeter Multiplier Resistance',
    titleAr: 'مضاعف الجهد في الفولتميتر',
    frontEn: 'What is the function of the multiplier resistor Rm in a DC voltmeter, and how does its value relate to maximum measurable voltage?',
    frontAr: 'ما هي وظيفة مضاعف الجهد Rm في الفولتميتر، وكيف ترتبط قيمته بأقصى فرق جهد يمكن قياسه؟',
    backEn: 'Rm is a large resistor connected in series with the galvanometer coil to: (1) increase total resistance so the voltmeter draws negligible current, and (2) expand voltage measurement range: V = Ig * (Rg + Rm).',
    backAr: 'مضاعف الجهد Rm مقاومة كبيرة توصل على التوالي مع ملف الجلفانومتر لـ: (١) جعل مقاومة الفولتميتر كبيرة جداً فلا يسحب تياراً من الدائرة، (٢) زيادة مدى قياس فرق الجهد V = Ig * (Rg + Rm).',
    latex: 'R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}, \\quad R_v = R_g + R_m',
  },
  {
    id: 'pfc_08',
    topic: 'magnetism',
    titleEn: 'Ohmmeter Non-Linear Scale Inversion',
    titleAr: 'عدم انتظام تدريج الأوميتر وعلاقته بالمقاومة المجهولة',
    frontEn: 'Why is the ohmmeter scale graduated in the opposite direction to current, and why are its divisions non-linear (crowded at the left)?',
    frontAr: 'لماذا يُدرج مقياس الأوميتر عكس تدريج التيار، ولماذا تكون أقسامه غير متساوية (تزدحم جهة اليسار)؟',
    backEn: '1. Opposite direction because current is inversely proportional to total resistance: zero external resistance (Rx = 0) gives full-scale current (I = Ig), while infinite resistance (Rx = infinity) gives zero current.\n2. Non-linear because I is proportional to 1 / (R_in + Rx), not 1 / Rx directly.',
    backAr: '١. عكسي لأن شدة التيار تتناسب عكسياً مع المقاومة الكلية: عند Rx = 0 يمر أقصى تيار Ig، وعند Rx = ∞ ينعدم التيار.\n٢. غير منتظم لأن شدة التيار تتناسب عكسياً مع المقاومة الكلية للدائرة (R_in + Rx) وليس مع المقاومة المجهولة Rx وحدها.',
    latex: 'I = \\frac{V_B}{R_{\\text{in}} + R_x} \\implies R_x = \\left(\\frac{I_g}{I} - 1\\right) R_{\\text{in}}',
  },

  // 3. Electromagnetic Induction & Dynamo
  {
    id: 'pfc_09',
    topic: 'induction',
    titleEn: 'Lenz Law & Sign of Induced EMF',
    titleAr: 'قانون لنز وإشارة القوة الدافعة المستحثة',
    frontEn: 'State Lenz\'s law and explain how it reflects the conservation of energy in electromagnetic induction.',
    frontAr: 'اذكر نص قانون لنز ووضح كيف يمثل تطبيقاً لمبدأ حفظ الطاقة في الحث الكهرومغناطيسي.',
    backEn: 'Lenz\'s Law: The direction of an induced EMF/current always opposes the change in magnetic flux that produces it. The negative sign in Faraday\'s law (-N * dPhi/dt) represents Lenz\'s law. Mechanical work must be done against the opposing magnetic force, which converts into electrical energy.',
    backAr: 'قانون لنز: يكون اتجاه التيار المستحث بحيث يعاكس التغير في الفيض المغناطيسي المسبب له. الإشارة السالبة في قانون فاراداي تعبر عن قانون لنز، فالشغل الميكانيكي المبذول للتغلب على قوى التنافر أو التجاذب يتحول إلى طاقة كهربية.',
    latex: '\\text{EMF} = -N \\frac{\\Delta \\Phi_m}{\\Delta t} = -N A \\frac{\\Delta B}{\\Delta t}',
  },
  {
    id: 'pfc_10',
    topic: 'induction',
    titleEn: 'AC Dynamo Coil Angles (Plane vs. Normal)',
    titleAr: 'زوايا ملف الدينامو: الزاوية بين العمودي والمستوى',
    frontEn: 'In an AC electric generator (dynamo), at what coil orientation does the induced EMF reach maximum, and at what orientation is magnetic flux through the coil maximum?',
    frontAr: 'في مولد التيار المتردد (الدينامو)، متى تصل القوة الدافعة المستحثة لقيمتها العظمى، ومتى يكون الفيض المغناطيسي خلال الملف قيمة عظمى؟',
    backEn: '• When coil plane is parallel to magnetic field (theta = 90 deg between normal to coil and B): Magnetic flux is ZERO, but the rate of flux cutting (dPhi/dt) is MAXIMUM => EMF = E_max.\n• When coil plane is perpendicular to B (theta = 0 deg): Flux Phi = B*A is MAXIMUM, but rate of cutting is ZERO => EMF = 0.',
    backAr: '• عندما يكون مستوى الملف موازياً لخطوط الفيض (الزاوية بين العمودي و B تساوي 90°): يكون الفيض نفسه صفراً، ومعدل قطع الخطوط قيمة عظمى => EMF = E_max.\n• عندما يكون مستوى الملف عمودياً على الفيض (الزاوية بين العمودي و B تساوي 0°): يكون الفيض عظمى (Φ = BA)، ومعدل القطع صفراً => EMF = 0.',
    latex: 'E_{\\text{inst}} = N B A \\omega \\sin\\theta, \\quad \\Phi_m = B A \\cos\\theta',
  },
  {
    id: 'pfc_11',
    topic: 'induction',
    titleEn: 'RMS Effective Value of Alternating Current',
    titleAr: 'القيمة الفعالة للتيار المتردد (I_eff)',
    frontEn: 'What is the physical definition of the root-mean-square (effective) value of an alternating current, and how is it calculated from peak current I_max?',
    frontAr: 'ما هو التعريف الفيزيائي للقيمة الفعالة للتيار المتردد، وما علاقتها الرياضية بالقيمة العظمى I_max؟',
    backEn: 'The effective value (I_eff) of an AC current is the value of a steady direct current (DC) that generates the identical amount of heat in a given resistor in the same time period.\nI_eff = I_max / sqrt(2) ≈ 0.707 * I_max.',
    backAr: 'القيمة الفعالة للتيار المتردد هي شدة التيار المستمر الذي يولد نفس كمية الحرارة (نفس القدرة الحرارية) في نفس المقاومة وخلال نفس الزمن.\nI_eff = I_max / √2 ≈ 0.707 I_max.',
    latex: 'I_{\\text{eff}} = \\frac{I_{\\max}}{\\sqrt{2}} = I_{\\max} \\sin(45^\\circ) \\approx 0.707 I_{\\max}',
  },
  {
    id: 'pfc_12',
    topic: 'induction',
    titleEn: 'Ideal vs. Real Transformer Efficiency',
    titleAr: 'كفاءة المحول الكهربي المثالي والواقعي',
    frontEn: 'What is the relationship between voltages, currents, and turn ratios in a step-up electric transformer, and why is an ideal transformer power-conserving?',
    frontAr: 'ما هي العلاقة بين الجهود والتيارات وعدد اللفات في المحول الرافع للجهد، ولماذا يحفظ المحول المثالي القدرة الكهربية؟',
    backEn: 'A step-up transformer has Ns > Np and Vs > Vp, but Is < Ip. An ideal transformer has 100% efficiency: Input Power = Output Power (Vp * Ip = Vs * Is). Power is conserved: raising voltage reduces current proportionally, which minimizes I^2*R transmission line losses.',
    backAr: 'في المحول الرافع للجهد يكون Ns > Np و Vs > Vp، بينما يقل التيار Is < Ip. كفاءة المحول المثالي 100% (قدرة الابتدائي = قدرة الثانوي: Vp * Ip = Vs * Is). رفع الجهد يخفض التيار بنفس النسبة لتقليل الفقد الحراري I^2*R في خطوط النقل.',
    latex: '\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%, \\quad \\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} \\quad (\\text{Ideal})',
  },

  // 4. AC Circuits & Resonance
  {
    id: 'pfc_13',
    topic: 'ac_resonance',
    titleEn: 'Phase Relationships in Pure AC Elements (R, L, C)',
    titleAr: 'فروق الطور في عناصر دوائر التيار المتردد النقية (مقاومة، ملف، مكثف)',
    frontEn: 'State the phase angle between voltage V and current I in: (1) pure ohmic resistor, (2) pure inductor, and (3) pure capacitor.',
    frontAr: 'ما هي زاوية الطور بين الجهد والتيار في: (١) مقاومة أومية عديمة الحث، (٢) ملف حث عديم المقاومة، و(٣) مكثف نقي؟',
    backEn: '1. Pure Resistor: Voltage and current are IN PHASE (phase angle phi = 0 deg).\n2. Pure Inductor: Voltage LEADS current by 90 deg (phi = +90 deg, V_L peaks before I).\n3. Pure Capacitor: Voltage LAGS current by 90 deg (phi = -90 deg, I peaks before V_C).',
    backAr: '١. مقاومة أومية عديمة الحث: الجهد والتيار متفقان في الطور (زاوية الطور = 0°).\n٢. ملف حث عديم المقاومة: الجهد يسبق التيار بربع دورة (زاوية الطور = +90°).\n٣. مكثف كهربي نقي: الجهد يتأخر عن التيار بربع دورة (زاوية الطور = -90°).',
    latex: 'V_R \\parallel I, \\quad V_L \\perp_{\\text{lead}} I \\ (+90^\\circ), \\quad V_C \\perp_{\\text{lag}} I \\ (-90^\\circ)',
  },
  {
    id: 'pfc_14',
    topic: 'ac_resonance',
    titleEn: 'Inductive vs. Capacitive Reactance Frequency Dependence',
    titleAr: 'علاقة المفاعلة الحثية والسعوية بالتردد',
    frontEn: 'How do inductive reactance XL and capacitive reactance XC change when the AC source frequency is quadrupled?',
    frontAr: 'كيف تتغير المفاعلة الحثية XL والمفاعلة السعوية XC عند مضاعفة تردد مصدر التيار المتردد أربعة أمثال؟',
    backEn: '• Inductive reactance is directly proportional to frequency: XL = 2*pi*f*L => quadrupling frequency multiplies XL by 4.\n• Capacitive reactance is inversely proportional to frequency: XC = 1 / (2*pi*f*C) => quadrupling frequency divides XC by 4 (becomes 1/4th).',
    backAr: '• المفاعلة الحثية تتناسب طردياً مع التردد: XL = 2πfL، فتتضاعف إلى أربعة أمثالها (4 XL).\n• المفاعلة السعوية تتناسب عكسياً مع التردد: XC = 1 / (2πfC)، فتقل إلى الربع (0.25 XC).',
    latex: 'X_L = 2\\pi f L \\propto f, \\quad X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}',
  },
  {
    id: 'pfc_15',
    topic: 'ac_resonance',
    titleEn: 'Conditions of Resonance in Series RLC Circuit',
    titleAr: 'خصائص وشروط حالة الرنين في دائرة RLC المتوالية',
    frontEn: 'What are the 5 definitive electrical characteristics of an RLC circuit operating at resonance?',
    frontAr: 'ما هي الخصائص والشروط الخمسة المميزة لدائرة RLC عندما تكون في حالة رنين؟',
    backEn: '1. Inductive reactance equals capacitive reactance: XL = XC.\n2. Inductor voltage cancels capacitor voltage: VL = VC.\n3. Total impedance is at its absolute minimum and purely ohmic: Z_min = R.\n4. Current amplitude is at its absolute maximum: I_max = V / R.\n5. Phase angle between total voltage and current is zero: tan(phi) = 0.',
    backAr: '١. تساوي المفاعلة الحثية مع المفاعلة السعوية: XL = XC.\n٢. جهد الملف يلاشي جهد المكثف: VL = VC.\n٣. المعاوقة الكلية للدائرة أقل ما يمكن وتساوي المقاومة الأومية فقط: Z = R.\n٤. شدة التيار المار بالدائرة تصل لأقصى قيمة ممكنة: I_max = V / R.\n٥. زاوية الطور بين الجهد الكلي والتيار تساوي صفراً (الدائرة لها خواص أومية نقية).',
    latex: 'f_0 = \\frac{1}{2\\pi\\sqrt{L C}}, \\quad Z_{\\min} = R, \\quad I_{\\max} = \\frac{V}{R}',
  },
  {
    id: 'pfc_16',
    topic: 'ac_resonance',
    titleEn: 'Oscillatory Circuit Energy Exchange',
    titleAr: 'تبادل الطاقة في الدائرة المهتزة (مكثف وملف)',
    frontEn: 'How does energy alternate inside an LC oscillatory circuit, and why does oscillation eventually damp out in real circuits?',
    frontAr: 'كيف تتبادل الطاقة في الدائرة المهتزة (LC)، ولماذا تضمحل الشحنة وتهبط سعة الاهتزاز في الدوائر الواقعية؟',
    backEn: 'Energy continuously converts back and forth between electrostatic potential energy in the capacitor electric field (E = 0.5 * Q^2 / C) and magnetic potential energy in the inductor magnetic field (E = 0.5 * L * I^2). In real circuits, wire ohmic resistance converts part of the electrical energy into dissipated heat (I^2*R) each cycle, damping oscillations.',
    backAr: 'تتبادل الطاقة بالتناوب بين طاقة كهربية مخزونة في المجال الكهربي للمكثف (0.5 Q^2 / C) وطاقة مغناطيسية مخزونة في المجال المغناطيسي للملف (0.5 L I^2). تضمحل الاهتزازات في الدوائر الحقيقية بسبب تحول جزء من الطاقة الكهربية إلى طاقة حرارية مفقودة بفعل مقاومة أسلاك الدائرة والملف.',
    latex: 'E_{\\text{electric}} = \\frac{Q^2}{2C} \\rightleftharpoons E_{\\text{magnetic}} = \\frac{1}{2} L I^2',
  },

  // 5. Modern Physics: Photons, Atoms & Electronics
  {
    id: 'pfc_17',
    topic: 'modern',
    titleEn: 'Planck Photon Energy & Quantum Equations',
    titleAr: 'طاقة الفوتون وعلاقات بلانك وأينشتاين',
    frontEn: 'What are the two expressions for the linear momentum p of a photon in terms of its frequency ν and wavelength λ?',
    frontAr: 'ما هما الصيغتان لكمية حركة الفوتون p بدلالة تردده ν وطوله الموجي λ؟',
    backEn: 'According to Planck and Einstein: E = h*nu = m*c^2. The photon momentum is p = E / c = (h * nu) / c = h / lambda.',
    backAr: 'وفقاً لنظرية الكم والنسبية الخاصة: E = hν = mc^2. إذن كمية حركة الفوتون: p = E / c = (hν) / c = h / λ.',
    latex: 'p = \\frac{E}{c} = \\frac{h \\cdot \\nu}{c} = \\frac{h}{\\lambda}, \\quad m = \\frac{h}{\\lambda \\cdot c}',
  },
  {
    id: 'pfc_18',
    topic: 'modern',
    titleEn: 'Einstein Photoelectric Equation & Cutoff Potential',
    titleAr: 'معادلة أينشتاين للظاهرة الكهروضوئية وجهد الإيقاف',
    frontEn: 'In photoelectric emission, what happens when incident light intensity is tripled while maintaining frequency below threshold frequency (ν < νc)?',
    frontAr: 'في الظاهرة الكهروضوئية، ماذا يحدث عند مضاعفة شدة الضوء الساقط 3 أمثال مع بقاء تردده أقل من التردد الحرج (ν < νc)؟',
    backEn: 'No electrons are emitted at all. Photoelectric emission requires the energy of each individual photon to equal or exceed the surface work function (h*nu >= W0). If nu < nuc, increasing intensity merely increases the count of sub-threshold photons per second, none of which can liberate an electron.',
    backAr: 'لا تنبعث أي إلكترونات على الإطلاق. الانبعاث الكهروضوئي يعتمد على تردد الفوتون الفردي؛ فإذا كان التردد أقل من التردد الحرج (ν < νc) فإن زيادة شدة الضوء تعني فقط زيادة عدد الفوتونات الساقطة دون زيادة طاقة أي منها، وبالتالي تظل غير قادرة على التحرير.',
    latex: 'K E_{\\max} = h \\nu - W_0 = e \\cdot V_{\\text{stop}} \\quad (\\text{Requires } \\nu \\ge \\nu_c)',
  },
  {
    id: 'pfc_19',
    topic: 'modern',
    titleEn: 'Compton Scattering Conservation of Momentum',
    titleAr: 'ظاهرة كومتون وإثبات الصفة الجسيمية للإشعاع',
    frontEn: 'When an X-ray photon collides elastically with a stationary free electron in the Compton effect, how do photon frequency, wavelength, and speed change?',
    frontAr: 'عندما يصطدم فوتون من أشعة إكس تصادماً مرناً بإلكترون حر في ظاهرة كومتون، كيف يتغير تردد وطول موجة وسرعة الفوتون المشتت؟',
    backEn: '• Photon frequency decreases (nu\' < nu) because it transfers kinetic energy to the electron.\n• Photon wavelength increases (lambda\' > lambda): Delta lambda = (h / m_e*c) * (1 - cos theta).\n• Photon speed remains CONSTANT (c = 3 * 10^8 m/s in vacuum).',
    backAr: '• يقل تردد الفوتون المشتت (ν\' < ν) لفقدانه جزءاً من طاقته الحركية لصالح الإلكترون.\n• يزداد طوله الموجي (λ\' > λ).\n• سرعة الفوتون تظل ثابتة لا تتغير (c = 3 × 10^8 م/ث في الفراغ).',
    latex: '\\Delta \\lambda = \\lambda\' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta), \\quad c = \\text{constant}',
  },
  {
    id: 'pfc_20',
    topic: 'modern',
    titleEn: 'De Broglie Matter Waves & Electron Microscope',
    titleAr: 'موجات دي برولي المادية والمجهر الإلكتروني',
    frontEn: 'Why does an electron microscope have vastly superior resolving power compared to an optical light microscope?',
    frontAr: 'لماذا يمتلك المجهر الإلكتروني قدرة تحليلية وتكبيرية أعلى بكثير من المجهر الضوئي؟',
    backEn: 'According to de Broglie, moving electrons behave as matter waves with wavelength lambda = h / (m_e * v). By applying high accelerating voltages V, electron speed increases (0.5 * m_e * v^2 = e * V), shrinking lambda by orders of magnitude below visible light wavelengths. Since resolving power is inversely proportional to wavelength, minute sub-cellular details are clearly resolved.',
    backAr: 'وفقاً لفرضية دي برولي، تصاحب حركة الإلكترونات موجات مادية طولها الموجي λ = h / mv. بتطبيق فرق جهد كهربي عالٍ V، تكتسب الإلكترونات سرعة فائقة (0.5 mv^2 = eV) فيقل طول موجتها المادية جداً ليصبح أصغر بآلاف المرات من الطول الموجي للضوء المرئي، فتزداد القدرة التحليلية والتكبيرية بدرجة هائلة.',
    latex: '\\lambda = \\frac{h}{m_e v} = \\frac{h}{\\sqrt{2 m_e e V}} \\ll \\lambda_{\\text{light}}',
  },
  {
    id: 'pfc_21',
    topic: 'modern',
    titleEn: 'Bohr Hydrogen Spectral Series Limits',
    titleAr: 'متسلسلات طيف ذرة الهيدروجين لحدود بور',
    frontEn: 'Name the 5 hydrogen spectral emission series in order of decreasing photon energy, and identify the spectral region for each.',
    frontAr: 'رتب متسلسلات طيف انبعاث ذرة الهيدروجين تنازلياً حسب الطاقة وتردد الفوتونات، وحدد نطاق كل منها.',
    backEn: '1. Lyman Series (transitions to n = 1): Ultraviolet (UV) - Highest energy.\n2. Balmer Series (transitions to n = 2): Visible Light spectrum.\n3. Paschen Series (transitions to n = 3): Near Infrared (IR).\n4. Brackett Series (transitions to n = 4): Middle Infrared (IR).\n5. Pfund Series (transitions to n = 5): Far Infrared (IR) - Lowest energy.',
    backAr: '١. متسلسلة ليمان (العودة للمستوى n = 1): فوق بنفسجية (الأعلى طاقة وتردداً).\n٢. متسلسلة بالمر (العودة للمستوى n = 2): الضوء المنظور (المرئي).\n٣. متسلسلة باشن (العودة للمستوى n = 3): تحت حمراء قريبة.\n٤. متسلسلة براكت (العودة للمستوى n = 4): تحت حمراء متوسطة.\n٥. متسلسلة فوند (العودة للمستوى n = 5): تحت حمراء بعيدة (الأقل طاقة).',
    latex: '\\Delta E = E_{n_2} - E_{n_1} = -\\frac{13.6}{n_2^2} - \\left(-\\frac{13.6}{n_1^2}\\right) = \\frac{h c}{\\lambda}',
  },
  {
    id: 'pfc_22',
    topic: 'modern',
    titleEn: 'Laser Population Inversion & Optical Cavity',
    titleAr: 'الإسكان المعكوس والتضخيم في الليزر (He-Ne)',
    frontEn: 'What is meant by population inversion, and why is an optical resonant cavity essential for laser light amplification?',
    frontAr: 'ما المقصود بحالة الإسكان المعكوس، ولماذا يعد التجويف الرنيني ضرورياً لتضخيم شعاع الليزر؟',
    backEn: '• Population Inversion: A non-equilibrium state where the number of excited atoms in higher metastable energy levels exceeds the number of atoms in lower energy states.\n• Optical Cavity: A pair of parallel mirrors (one 99.8% reflective, one 98% semi-transparent) that bounce emitted photons back and forth, triggering cascading stimulated emission and amplifying the coherent beam.',
    backAr: '• الإسكان المعكوس: حالة يكون فيها عدد الذرات في مستويات الإثارة شبه المستقرة أكبر من عددها في المستويات الأدنى.\n• التجويف الرنيني: مرآتان متوازيتان (إحداهما عاكسة 99.8% والأخرى شبه منفذة 98%) تعكسان الفوتونات ذهاباً وإياباً لتحفيز المزيد من الانبعاث المستحث وتضخيم شدة الحزمة الليزرية المترابطة.',
    latex: 'N_{\\text{excited}} > N_{\\text{ground}}, \\quad L = n \\frac{\\lambda}{2}',
  },
  {
    id: 'pfc_23',
    topic: 'modern',
    titleEn: 'Semiconductor p-n Junction Diode Biasing',
    titleAr: 'توصيل الوصلة الثنائية (الدايود) الأمامي والعكسي',
    frontEn: 'How does the depletion layer thickness and resistance change in a p-n junction under forward bias vs. reverse bias?',
    frontAr: 'كيف يتغير سُمك المنطقة القاحلة ومقاومة الوصلة الثنائية في حالتي التوصيل الأمامي والعكسي؟',
    backEn: '• Forward Bias (p-type to positive, n-type to negative): Applied voltage opposes internal contact potential, narrowing the depletion layer, drastically reducing resistance, and allowing strong current to flow.\n• Reverse Bias (p-type to negative, n-type to positive): Applied voltage reinforces internal field, widening depletion layer and causing near-infinite resistance (negligible leakage current).',
    backAr: '• التوصيل الأمامي (البلورة p بالقطب الموجب و n بالسالب): الجهد الخارجي يعاكس الجهد الحاجز، فيضيق سُمك المنطقة القاحلة وتقل المقاومة بشدة ويمر تيار كهربي قوي.\n• التوصيل العكسي (البلورة p بالسالب و n بالموجب): الجهد الخارجي يدعم الجهد الحاجز، فيتسع سُمك المنطقة القاحلة وتصبح المقاومة كبيرة جداً ويكاد ينعدم التيار.',
    latex: 'V_{\\text{net}} = V_{\\text{ext}} - V_{\\text{barrier}} \\quad (\\text{Forward Bias})',
  },
  {
    id: 'pfc_24',
    topic: 'modern',
    titleEn: 'Logic Gates Truth Tables (AND, OR, NOT)',
    titleAr: 'البوابات المنطقية وجداول التحقيق (AND, OR, NOT)',
    frontEn: 'What is the boolean expression and output for an AND gate vs. an OR gate when input A = 1 and input B = 0?',
    frontAr: 'ما هو الخرج والتعبير البوليني لبوابة AND وبوابة OR عندما يكون الدخل A = 1 والدخل B = 0؟',
    backEn: '• AND Gate (Y = A · B): Output is 1 ONLY if ALL inputs are 1. Here Y = 1 · 0 = 0.\n• OR Gate (Y = A + B): Output is 1 if AT LEAST ONE input is 1. Here Y = 1 + 0 = 1.\n• NOT Gate (Inverter Y = A_bar): Flips binary state (0 to 1, 1 to 0).',
    backAr: '• بوابة AND (التوافق Y = A · B): الخرج = 1 فقط إذا كانت جميع المدخلات 1. هنا Y = 1 · 0 = 0.\n• بوابة OR (الاختيار Y = A + B): الخرج = 1 إذا كان أي مدخل 1. هنا Y = 1 + 0 = 1.\n• بوابة NOT (العاكس): تعكس الحالة المنطقية (تحول 1 إلى 0 والعكس).',
    latex: 'Y_{\\text{AND}} = A \\cdot B, \\quad Y_{\\text{OR}} = A + B, \\quad Y_{\\text{NOT}} = \\bar{A}',
  },
];

export const PhysicsFlashcards: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});
  const [shuffledCards, setShuffledCards] = useState<PhysicsFlashcard[]>(PHYSICS_FLASHCARDS);

  // Filter cards by topic
  const filteredCards = useMemo(() => {
    if (selectedTopic === 'all') return shuffledCards;
    return shuffledCards.filter((c) => c.topic === selectedTopic);
  }, [selectedTopic, shuffledCards]);

  const activeCard = filteredCards[currentIndex] || filteredCards[0];
  const totalInFilter = filteredCards.length;
  const isMastered = activeCard ? !!masteredCards[activeCard.id] : false;

  const masteredCount = useMemo(() => {
    return filteredCards.filter((c) => masteredCards[c.id]).length;
  }, [filteredCards, masteredCards]);

  const progressPercent = totalInFilter > 0 ? Math.round((masteredCount / totalInFilter) * 100) : 0;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % totalInFilter);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + totalInFilter) % totalInFilter);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const copy = [...PHYSICS_FLASHCARDS];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    setShuffledCards(copy);
    setCurrentIndex(0);
  };

  const handleReset = () => {
    setMasteredCards({});
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const toggleMastery = (e: React.MouseEvent, status: boolean) => {
    e.stopPropagation();
    if (!activeCard) return;
    setMasteredCards((prev) => ({
      ...prev,
      [activeCard.id]: status,
    }));
    handleNext();
  };

  const topicOptions = [
    { id: 'all', labelEn: 'All Topics (24 Cards)', labelAr: 'جميع فصول الفيزياء (٢٤ بطاقة)' },
    { id: 'circuits', labelEn: '1. DC Circuits & Kirchhoff', labelAr: '١. دوائر التيار وقانونا كيرشوف' },
    { id: 'magnetism', labelEn: '2. Magnetism & Instruments', labelAr: '٢. التأثير المغناطيسي وأجهزة القياس' },
    { id: 'induction', labelEn: '3. Induction & AC Dynamo', labelAr: '٣. الحث الكهرومغناطيسي والدينامو' },
    { id: 'ac_resonance', labelEn: '4. AC Circuits & Resonance', labelAr: '٤. دوائر التيار المتردد والرنين' },
    { id: 'modern', labelEn: '5. Modern Physics & Quantum', labelAr: '٥. الفيزياء الحديثة والفيزياء الكمية' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/90 border border-slate-800 shadow-lg">
        {/* Topic Selector */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400 shrink-0" />
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-hidden focus:border-cyan-400 cursor-pointer"
          >
            {topicOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {isAr ? opt.labelAr : opt.labelEn}
              </option>
            ))}
          </select>
        </div>

        {/* Progress & Quick Actions */}
        <div className="flex items-center justify-between md:justify-end gap-3">
          <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
            <span>{isAr ? 'نسبة الإتقان:' : 'Mastery:'}</span>
            <span className="font-mono text-cyan-400 font-black">{progressPercent}%</span>
            <span className="text-[11px] text-slate-500">
              ({masteredCount}/{totalInFilter})
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShuffle}
              title={isAr ? 'خلط البطاقات عشوائياً' : 'Shuffle Deck'}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer"
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              title={isAr ? 'إعادة تعيين التقدم' : 'Reset Progress'}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Flashcard View */}
      {activeCard ? (
        <div className="flex flex-col items-center">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`w-full max-w-2xl min-h-[380px] p-6 sm:p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xl relative select-none ${
              isFlipped
                ? isContrast
                  ? 'bg-black border-yellow-400 text-white'
                  : 'bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-900 border-cyan-500/50 text-slate-100 shadow-cyan-950/30'
                : isContrast
                ? 'bg-black border-white text-white'
                : isLight
                ? 'bg-gradient-to-br from-white to-sky-50/50 border-slate-300 text-slate-900 shadow-slate-200'
                : 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-800 text-slate-100 shadow-slate-950/40'
            }`}
          >
            {/* Top Bar of the Card */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
              <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {isAr ? activeCard.titleAr : activeCard.titleEn}
              </span>
              <div className="flex items-center gap-2">
                {isMastered && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isAr ? 'تم الإتقان' : 'Mastered'}</span>
                  </span>
                )}
                <span className="text-xs font-mono text-slate-400 font-bold">
                  {currentIndex + 1} / {totalInFilter}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="my-6 flex-1 flex flex-col justify-center">
              {!isFlipped ? (
                // Front: Question Prompt
                <div className="space-y-4 text-center sm:text-left rtl:sm:text-right">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 block">
                    {isAr ? 'سؤال الاستدعاء النشط:' : 'Active Recall Prompt:'}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-black leading-relaxed text-slate-100">
                    {isAr ? activeCard.frontAr : activeCard.frontEn}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1 pt-4">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isAr ? 'انقر على البطاقة لإظهار الإجابة والتحليل الفيزيائي' : 'Click card to reveal physical model & solution'}</span>
                  </p>
                </div>
              ) : (
                // Back: Scientific Model & Formulas
                <div className="space-y-4 animate-in fade-in duration-200">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 block">
                    {isAr ? 'التحليل الفيزيائي المعتمد:' : 'Pedagogical Physical Model:'}
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line text-slate-200">
                    {isAr ? activeCard.backAr : activeCard.backEn}
                  </p>
                  {activeCard.latex && (
                    <div className="py-2 px-3 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-center text-cyan-300">
                      <MathRenderer math={activeCard.latex} lang={lang} />
                    </div>
                  )}
                  {(activeCard.teacherNoteAr || activeCard.teacherNoteEn) && (
                    <div className="text-[11px] p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 font-medium">
                      <span className="font-black text-amber-300 block mb-0.5">
                        {isAr ? '💡 ملحوظة واضعي الامتحان:' : '💡 Examiner Tip:'}
                      </span>
                      {isAr ? activeCard.teacherNoteAr : activeCard.teacherNoteEn}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Flip Button Indicator */}
            <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between text-xs text-slate-400">
              <span className="text-[11px] font-mono">ID: {activeCard.id}</span>
              <div className="flex items-center gap-1.5 font-bold text-cyan-400">
                <RotateCw className="w-3.5 h-3.5" />
                <span>{isFlipped ? (isAr ? 'اقلب للسؤال' : 'Flip to Question') : (isAr ? 'اقلب للإجابة' : 'Flip to Solution')}</span>
              </div>
            </div>
          </div>

          {/* Action Navigation & Rating Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 w-full max-w-2xl">
            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-2 order-2 sm:order-1">
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                <span>{isAr ? 'السابق' : 'Previous'}</span>
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>{isAr ? 'التالي' : 'Next'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

            {/* Leitner Rating Buttons */}
            <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto">
              <button
                onClick={(e) => toggleMastery(e, false)}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>{isAr ? 'يحتاج مراجعة' : 'Needs Review'}</span>
              </button>
              <button
                onClick={(e) => toggleMastery(e, true)}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{isAr ? 'أتقنته تماماً' : 'Mastered'}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 text-slate-400">
          {isAr ? 'لا توجد بطاقات في هذا القسم.' : 'No flashcards available in this topic.'}
        </div>
      )}
    </div>
  );
};
