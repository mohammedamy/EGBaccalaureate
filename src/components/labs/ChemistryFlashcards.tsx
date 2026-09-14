import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import type { ThemeMode } from '../../types/curriculum';
import { MathRenderer } from '../MathRenderer';
import {
  RotateCw,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Filter,
  Shuffle,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

export interface ChemistryFlashcard {
  id: string;
  topic: 'transition' | 'analysis' | 'equilibrium' | 'electrochemistry' | 'organic';
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

const CHEMISTRY_FLASHCARDS: ChemistryFlashcard[] = [
  // 1. Transition Elements & Iron Metallurgy (Chapter 1)
  {
    id: 'cfc_01',
    topic: 'transition',
    titleEn: 'Anomalous Electronic Configuration of Chromium & Copper',
    titleAr: 'شذوذ التوزيع الإلكتروني للكروم والنحاس',
    frontEn: 'Why do Chromium (Z=24) and Copper (Z=29) deviate from the standard Aufbau filling order?',
    frontAr: 'علل: شذوذ التوزيع الإلكتروني لكل من عنصري الكروم (Z=24) والنحاس (Z=29) عن مبدأ البناء التصاعدي؟',
    backEn: 'In Chromium, an electron promotes from 4s to 3d giving [Ar] 4s¹ 3d⁵ (half-filled subshell). In Copper, it gives [Ar] 4s¹ 3d¹⁰ (completely filled subshell). Half-filled and completely filled subshells confer extra thermodynamic stability.',
    backAr: 'في الكروم ينتقل إلكترون من 4s إلى 3d ليصبح [Ar] 4s¹ 3d⁵ (نصف ممتلئ)، وفي النحاس يصبح [Ar] 4s¹ 3d¹⁰ (تام الامتلاء). المستويات الفرعية نصف الممتلئة أو تامة الامتلاء تمنح الذرة قدراً أكبر من الاستقرار والثبات النسبي.',
    latex: '\\text{Cr}_{24}: [\\text{Ar}]\\, 4s^1 3d^5, \\quad \\text{Cu}_{29}: [\\text{Ar}]\\, 4s^1 3d^{10}',
    teacherNoteEn: 'Zinc (Z=30: 3d¹⁰) and Scandium (Z=21: Sc³⁺ has 3d⁰) are diamagnetic and colorless in their +2 and +3 states.',
    teacherNoteAr: 'الخارصين ليس عنصراً انتقالياً لامتلاء المستوى 3d في الحالة الذرية وحالة التأكسد الوحيدة +2.',
  },
  {
    id: 'cfc_02',
    topic: 'transition',
    titleEn: 'Magnetic Moment & Paramagnetism Formula',
    titleAr: 'العزم المغناطيسي والخاصية البارامغناطيسية',
    frontEn: 'How is the magnetic moment μ of a transition metal ion determined from its number of unpaired electrons (n)?',
    frontAr: 'كيف يُحسب العزم المغناطيسي لأيون عنصر انتقالي بدلالة عدد الإلكترونات المفردة (n)؟',
    backEn: 'Magnetic moment is calculated by μ = √(n(n+2)) Bohr Magnetons (BM). As the number of unpaired d-electrons increases (from 1 to 5), both paramagnetism and magnetic moment increase to a maximum at d⁵ (e.g., Fe³⁺, Mn²⁺: μ = 5.92 BM).',
    backAr: 'يُحسب العزم المغناطيسي من العلاقة: μ = √(n(n+2)) بوهرمغنتون. كلما زاد عدد الإلكترونات المفردة زادت الخاصية البارامغناطيسية ليصل العزم لأقصاه عند 5 إلكترونات مفردة (مثل Fe³⁺ و Mn²⁺: μ = 5.92 BM).',
    latex: '\\mu = \\sqrt{n(n+2)}\\,\\text{B.M.} \\quad (n = \\text{عدد الإلكترونات المفردة})',
    teacherNoteEn: 'Diamagnetic species (n=0) have μ = 0 (e.g. Sc³⁺, Ti⁴⁺, Zn²⁺, Cu⁺).',
    teacherNoteAr: 'المركبات الدايامغناطيسية (n=0) عزمها المغناطيسي صفر مثل Sc³⁺ و Zn²⁺.',
  },
  {
    id: 'cfc_03',
    topic: 'transition',
    titleEn: 'Blast Furnace vs. Midrex Reduction Chemistry',
    titleAr: 'مقارنة غازات الاختزال بين الفرن العالي وفرن مدركس',
    frontEn: 'What is the active reducing agent in the Blast Furnace versus the Midrex Furnace, and how is each generated?',
    frontAr: 'ما هو العامل المختزل الفعال في كل من الفرن العالي وفرن مدركس، وكيف يتم تحضيره؟',
    backEn: 'Blast Furnace: Carbon Monoxide (CO), produced from coke (C + O₂ → CO₂; CO₂ + C → 2CO). Midrex Furnace: Water Gas (CO + H₂ mixture), generated from methane with steam and CO₂ over a catalyst.',
    backAr: 'الفرن العالي: غاز أول أكسيد الكربون (CO) الناتج من فحم الكوك. فرن مدركس: الغاز المائي (خليط من CO و H₂) المحضر من الغاز الطبيعي (الميثان) مع الماء وثاني أكسيد الكربون.',
    latex: '\\text{Blast}: \\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{> 700^\\circ\\text{C}} 2\\text{Fe} + 3\\text{CO}_2, \\quad \\text{Midrex}: 2\\text{Fe}_2\\text{O}_3 + 3\\text{CO} + 3\\text{H}_2 \\xrightarrow{\\Delta} 4\\text{Fe} + 3\\text{CO}_2 + 3\\text{H}_2\\text{O}',
    teacherNoteEn: 'Limestone (CaCO₃) in the blast furnace decomposes to CaO, which reacts with silica (SiO₂) to form fusible slag (CaSiO₃).',
    teacherNoteAr: 'الحجر الجيري يتحلل إلى CaO ليتحد مع شوائب السيليكا مكوناً الخَبَث CaSiO₃ الذي يطفو فوق الحديد المنصهر.',
  },
  {
    id: 'cfc_04',
    topic: 'transition',
    titleEn: 'Thermal Decomposition of Iron Oxalate (In Absence of Air)',
    titleAr: 'الانحلال الحراري لأكسالات الحديد الثنائية بمعزل عن الهواء',
    frontEn: 'Why does heating iron(II) oxalate in the absence of air produce FeO rather than Fe₂O₃?',
    frontAr: 'علل: ينتج أكسيد الحديد الثنائي FeO وليس Fe₂O₃ عند تسخين أكسالات الحديد II بمعزل عن الهواء؟',
    backEn: 'Because Carbon Monoxide (CO) is co-produced alongside FeO and CO₂, and CO acts as a reducing agent that prevents the oxidation of FeO into higher iron oxides (Fe₂O₃).',
    backAr: 'لأن التفاعل يُنتج غاز أول أكسيد الكربون (CO) وهو عامل مختزل قوي يمنع أكسدة أكسيد الحديد الثنائي FeO إلى أكسيد حديد ثلاثي Fe₂O₃.',
    latex: '(\\text{COO})_2\\text{Fe} \\xrightarrow{\\Delta,\\, \\text{معزل عن الهواء}} \\text{FeO} + \\text{CO} + \\text{CO}_2',
    teacherNoteEn: 'Heating iron(II) sulfate (FeSO₄) strongly in air yields Fe₂O₃ + SO₂ + SO₃.',
    teacherNoteAr: 'تسخين كبريتات الحديد II بشدة يعطي Fe₂O₃ لتصاعد SO₃ المؤكسد.',
  },

  // 2. Qualitative & Quantitative Analysis (Chapter 2)
  {
    id: 'cfc_05',
    topic: 'analysis',
    titleEn: 'Distinguishing Carbonate from Bicarbonate',
    titleAr: 'التمييز المعملي بين الكربونات والبيكربونات',
    frontEn: 'How can you experimentally distinguish between sodium carbonate and sodium bicarbonate solutions using MgSO₄?',
    frontAr: 'كيف تميز معملياً بين محلولي كربونات الصوديوم وبيكربونات الصوديوم باستخدام كبريتات الماغنسيوم؟',
    backEn: 'Add magnesium sulfate (MgSO₄) solution to both in the cold: With Carbonate: A white precipitate of MgCO₃ forms immediately on the cold. With Bicarbonate: No precipitate in the cold; a white precipitate appears ONLY after boiling/heating due to thermal decomposition of Mg(HCO₃)₂.',
    backAr: 'بإضافة محلول كبريتات الماغنسيوم على البارد لكلا المحلولين: مع الكربونات يتكون راسب أبيض على البارد مباشرة (MgCO₃). مع البيكربونات لا يتكون راسب على البارد، ويتكون راسب أبيض بعد التسخين لانحلال بيكربونات الماغنسيوم بالحرارة.',
    latex: '\\text{Cold}: \\text{CO}_3^{2-} + \\text{Mg}^{2+} \\to \\text{MgCO}_3\\downarrow, \\quad \\text{Heat}: \\text{Mg}(\\text{HCO}_3)_2 \\xrightarrow{\\Delta} \\text{MgCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow',
    teacherNoteEn: 'All bicarbonates are soluble in water; all carbonates are insoluble except Na⁺, K⁺, NH₄⁺.',
    teacherNoteAr: 'جميع أملاح البيكربونات تذوب في الماء؛ بينما كربونات الصوديوم والبوتاسيوم والأمونيوم فقط هي التي تذوب.',
  },
  {
    id: 'cfc_06',
    topic: 'analysis',
    titleEn: 'Brown Ring Test for Nitrate Radical',
    titleAr: 'تجربة الحلقة البنية للكشف عن أنيون النترات',
    frontEn: 'What are the conditions and the chemical formula of the Brown Ring compound?',
    frontAr: 'ما هي شروط تكوّن مركب الحلقة البنية وما هي صيغته الكيميائية؟',
    backEn: 'Add fresh iron(II) sulfate (FeSO₄) to nitrate solution, then carefully trickle concentrated H₂SO₄ down the inner wall of the test tube. A brown ring forms at the liquid junction of formula [Fe(H₂O)₅NO]SO₄. It disappears upon shaking or heating.',
    backAr: 'إضافة محلول كبريتات حديد II حديث التحضير إلى محلول النترات، ثم إضافة قطرات من حمض كبريتيك مركز باحتراس على الجدار الداخلي للأنبوبة. تتكون حلقة بنية عند السطح الفاصل صيغتها [Fe(H₂O)₅NO]SO₄ تزول بالرج أو التسخين.',
    latex: '\\text{FeSO}_4 + \\text{NO} + 5\\text{H}_2\\text{O} \\to [\\text{Fe}(\\text{H}_2\\text{O})_5\\text{NO}]\\text{SO}_4',
    teacherNoteEn: 'FeSO₄ must be freshly prepared so it has not auto-oxidized into Fe³⁺ by atmospheric oxygen.',
    teacherNoteAr: 'يجب أن تكون كبريتات الحديد II حديثة التحضير لمنع تأكسدها بأكسجين الهواء إلى كبريتات حديد III.',
  },
  {
    id: 'cfc_07',
    topic: 'analysis',
    titleEn: 'Silver Halide Precipitate Solubilities in Ammonium Hydroxide',
    titleAr: 'ذوبانية رواسب هاليدات الفضة في محلول النشادر المركز',
    frontEn: 'How do the precipitates of AgCl, AgBr, and AgI behave in concentrated aqueous ammonia (NH₄OH)?',
    frontAr: 'كيف تختلف رواسب AgCl و AgBr و AgI في سلوك ذوبانها في محلول النشادر المركز (NH₄OH)؟',
    backEn: 'AgCl (white): Dissolves rapidly and completely to form soluble diamminesilver(I) complex [Ag(NH₃)₂]⁺. AgBr (pale yellow): Dissolves slowly. AgI (bright yellow): Completely insoluble in concentrated ammonia.',
    backAr: 'AgCl (أبيض): يذوب بسرعة وبسهولة مكوناً متراكب الفضة الأمونيومي. AgBr (أبيض مصفر): يذوب ببطء. AgI (أصفر ناصع): لا يذوب إطلاقاً في محلول النشادر المركز.',
    latex: '\\text{AgCl}: \\text{سريع الذوبان}, \\quad \\text{AgBr}: \\text{بطيء الذوبان}, \\quad \\text{AgI}: \\text{لا يذوب}',
    teacherNoteEn: 'Silver phosphate (Ag₃PO₄) is also yellow but is SOLUBLE in ammonia and in nitric acid, distinguishing it from AgI.',
    teacherNoteAr: 'فوسفات الفضة راسب أصفر أيضاً لكنه يذوب في كل من محلول النشادر وحمض النيتريك، عكس يوديد الفضة.',
  },
  {
    id: 'cfc_08',
    topic: 'analysis',
    titleEn: 'Neutralization Titration Equivalence Law',
    titleAr: 'قانون المعايرة والتكافؤ في تفاعلات التعادل',
    frontEn: 'What is the stoichiometric relation used to determine the concentration of an unknown acid or base during volumetric titration?',
    frontAr: 'ما هي العلاقة الرياضية لحساب تركيز حمض أو مجهول في تجارب المعايرة الحجمية؟',
    backEn: 'At the equivalence neutralization endpoint: (M_a * V_a) / n_a = (M_b * V_b) / n_b, where M is molarity, V is volume (mL or L), and n_a, n_b are the stoichiometric coefficients from the balanced equation.',
    backAr: 'عند نقطة التعادل والتكافؤ: (M_a * V_a) / n_a = (M_b * V_b) / n_b، حيث M التركيز المولاري، V الحجم، و n_a و n_b عدد مولات الحمض والقاعدة في معادلة التفاعل الموزونة.',
    latex: '\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}',
    teacherNoteEn: 'Methyl orange is yellow in base, red in acid, orange at endpoint (pH 3.1 - 4.4). Phenolphthalein is pink in base, colorless in acid (pH 8.2 - 10.0).',
    teacherNoteAr: 'دليل الفينولفثالين عديم اللون في الوسط الحامضي والمتعادل، ووردي في الوسط القاعدي.',
  },

  // 3. Chemical & Ionic Equilibrium (Chapter 3)
  {
    id: 'cfc_09',
    topic: 'equilibrium',
    titleEn: "Le Chatelier's Principle & Gaseous Pressure Perturbation",
    titleAr: 'قاعدة لوشاتيليه وأثر الضغط على الاتزان الغازي',
    frontEn: 'Under what condition does a change in pressure have NO directional effect on a gaseous equilibrium system?',
    frontAr: 'متى لا يكون لتغيير الضغط أي تأثير على موضع الاتزان في نظام تفاعل غازي منعكس؟',
    backEn: 'When the total number of gaseous reactant moles equals the total number of gaseous product moles (Δn_g = 0), such as in H₂(g) + I₂(g) ⇌ 2HI(g). Increasing pressure shifts equilibrium only toward the side with fewer gas moles.',
    backAr: 'عندما يتساوى عدد مولات الغازات المتفاعلة مع عدد مولات الغازات الناتجة (Δn = 0)، مثل: H₂(g) + I₂(g) ⇌ 2HI(g). لأن زيادة الضغط تنشط التفاعل في اتجاه عدد المولات الأقل.',
    latex: '\\Delta n_g = \\Sigma n_{\\text{products}} - \\Sigma n_{\\text{reactants}} = 0 \\implies K_p = K_c',
    teacherNoteEn: 'Only a change in TEMPERATURE can alter the numerical value of the equilibrium constant (Kc or Kp).',
    teacherNoteAr: 'العامل الوحيد الذي يغير من القيمة العددية لثابت الاتزان Kc أو Kp هو درجة الحرارة فقط.',
  },
  {
    id: 'cfc_10',
    topic: 'equilibrium',
    titleEn: 'Ostwald Dilution Law for Weak Electrolytes',
    titleAr: 'قانون أوستفالد للتخفيف للأحماض والقواعد الضعيفة',
    frontEn: 'What is the relationship between degree of ionization (α), concentration (C), and acid dissociation constant (Ka)?',
    frontAr: 'ما هي العلاقة بين درجة التفكك (ألفا) والتركيز المولاري (C) وثابت التأين (Ka)؟',
    backEn: 'According to Ostwald: For weak electrolytes where α << 1, Ka = α² * C. Therefore, α = √(Ka / C). As dilution increases (C decreases), the degree of ionization α increases.',
    backAr: 'تبعاً لقانون أوستفالد: للألكتروليتات الضعيفة حيث α << 1: Ka = α² * C، ومنها: α = √(Ka / C). تزداد درجة التأين α طردياً مع زيادة التخفيف (نقصان التركيز C) ليبقى Ka ثابتاً.',
    latex: 'K_a = \\alpha^2 \\cdot C_a \\implies \\alpha = \\sqrt{\\frac{K_a}{C_a}}, \\quad [\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a}',
    teacherNoteEn: 'pH = -log[H₃O⁺]; pOH = -log[OH⁻]; pH + pOH = 14 at 25°C.',
    teacherNoteAr: 'الأس الهيدروجيني: pH = -log[H₃O⁺]، وحاصل جمع pH + pOH = 14 عند ٢٥°س.',
  },
  {
    id: 'cfc_11',
    topic: 'equilibrium',
    titleEn: 'Common Ion Effect on Sparingly Soluble Salts',
    titleAr: 'تأثير الأيون المشترك على ذوبانية الأملاح شحيحة الذوبان',
    frontEn: 'How does adding sodium chloride (NaCl) affect the solubility of silver chloride (AgCl) in water?',
    frontAr: 'ما أثر إضافة كلوريد الصوديوم NaCl إلى محلول مائي مشبع من كلوريد الفضة AgCl؟',
    backEn: 'Adding NaCl introduces common Cl⁻ ions. By Le Chatelier principle, the increase in [Cl⁻] shifts the dissolution equilibrium AgCl(s) ⇌ Ag⁺ + Cl⁻ backwards (left), precipitating more AgCl and significantly suppressing its solubility.',
    backAr: 'إضافة NaCl تزيد من تركيز أيون الكلوريد المشترك Cl⁻ في المحلول. وتطبيقاً لقاعدة لوشاتيليه ينشط التفاعل في الاتجاه العكسي لترسيب المزيد من AgCl، فتقل ذوبانية الملح شحيح الذوبان.',
    latex: '\\text{AgCl}_{(s)} \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^- \\quad (\\text{ينشط عكسياً بزيادة } [\\text{Cl}^-])',
    teacherNoteEn: 'Ksp = [Ag⁺][Cl⁻] remains constant at constant temperature.',
    teacherNoteAr: 'حاصل الإذابة Ksp يظل ثابتاً لا يتغير إلا بتغير درجة الحرارة.',
  },

  // 4. Electrochemistry & Corrosion (Chapter 4)
  {
    id: 'cfc_12',
    topic: 'electrochemistry',
    titleEn: 'Daniell Cell Standard EMF Calculation',
    titleAr: 'حساب القوة الدافعة الكهربية القياسية لخلية دانيال',
    frontEn: 'Given standard reduction potentials E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V, what is the standard cell EMF?',
    frontAr: 'إذا علمت أن جهد اختزال الخارصين -0.76 V والنحاس +0.34 V، فما القوة الدافعة الكهربية القياسية لخلية دانيال؟',
    backEn: 'Zinc has lower reduction potential (higher oxidation potential), so it acts as anode: E°_cell = E°_red(cathode) - E°_red(anode) = +0.34 - (-0.76) = +1.10 V. The positive EMF confirms spontaneous galvanic reaction.',
    backAr: 'الخارصين له جهد اختزال أقل (جهد تأكسد أكبر) فيعمل كمصعد (أنود): ق.د.ك = جهد اختزال المهبط - جهد اختزال المصعد = +0.34 - (-0.76) = +1.10 فولت. الإشارة الموجبة تؤكد أن التفاعل تلقائي وتنتج طاقة كهربية.',
    latex: 'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{red}}(\\text{Cu}) - E^\\circ_{\\text{red}}(\\text{Zn}) = 0.34 - (-0.76) = +1.10\\,\\text{V}',
    teacherNoteEn: 'ΔG° = -n F E°cell = -2 * 96500 * 1.10 = -212.3 kJ/mol (< 0 spontaneous).',
    teacherNoteAr: 'طاقة جبس الحرة القياسية ΔG° سالبة في الخلايا الجلفانية التلقائية وتساوي -n F E°.',
  },
  {
    id: 'cfc_13',
    topic: 'electrochemistry',
    titleEn: 'Lead-Acid Battery Discharging Chemistry & Hydrometer',
    titleAr: 'تفريغ مركم الرصاص الحمضي واستخدام الهيدروميتر',
    frontEn: 'What chemical changes occur to the electrolyte and electrodes during car battery discharge?',
    frontAr: 'ما التغيرات الكيميائية التي تطرأ على الإلكتروليت والأقطاب أثناء تفريغ بطارية السيارة؟',
    backEn: 'Both spongy Pb (anode) and PbO₂ (cathode) convert to lead sulfate (PbSO₄). Sulfuric acid (H₂SO₄) is consumed and water is produced, causing the acid density to drop below 1.20 g/cm³ (measured via hydrometer to gauge charge state).',
    backAr: 'يتحول كل من الرصاص الإسفنجي (الأنود) وثاني أكسيد الرصاص (الكاثود) إلى كبريتات رصاص ثنائية PbSO₄. ويُستهلك حمض الكبريتيك ويتكون الماء فتنخفض كثافة الحمض عن 1.20 جم/سم³ (تُقاس بالهيدروميتر لمعرفة كفاءة البطارية).',
    latex: '\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\xrightarrow{\\text{تفريغ}} 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O} \\quad (E_{\\text{cell}} \\approx 2.05\\,\\text{V})',
    teacherNoteEn: 'During recharging, the battery is connected to a DC source slightly higher than 12 V, reversing the cell reactions.',
    teacherNoteAr: 'عند الشحن يتم توصيل المركم بمصدر مستمر جهده أكبر قليلاً من 12 فولت لتنعكس تفاعلات الأقطاب.',
  },
  {
    id: 'cfc_14',
    topic: 'electrochemistry',
    titleEn: "Faraday's General Law of Electrolysis",
    titleAr: 'القانون العام للتحليل الكهربي وقانون فاراداي',
    frontEn: 'What mass of a substance is liberated at an electrode when 1 Faraday (96,500 Coulombs) of electricity passes through an electrolyte?',
    frontAr: 'ما كتلة المادة المتحررة عند أحد القطبين عند مرور كمية كهرباء مقدارها ١ فاراداي (٩٦٥٠٠ كولوم)؟',
    backEn: 'Passing 1 Faraday (96,500 C = 1 mol electrons) always liberates exactly ONE gram equivalent mass of the element: Gram Equivalent = Atomic Mass / Valence (z). Mass = (I * t * Equivalent Mass) / 96500.',
    backAr: 'مرور ١ فاراداي (٩٦٥٠٠ كولوم) يؤدي دائماً لترسيب أو تصاعد كتلة مكافئة جرامية واحدة من المادة. الكتلة المكافئة = الكتلة الذرية / التكافؤ. الكتلة المتحررة = (I * t * الكتلة المكافئة) / 96500.',
    latex: 'm = \\frac{I \\cdot t \\cdot \\text{Equivalent Mass}}{96500}, \\quad \\text{Eq. Mass} = \\frac{\\text{Atomic Mass}}{z}',
    teacherNoteEn: 'To liberate 1 mole of element requires z Faradays (e.g. Al³⁺ requires 3 Faradays per mole).',
    teacherNoteAr: 'لتحرير مول واحد من أي عنصر يلزم عدد من الفاراداي يساوي تكافؤ العنصر z (مثلاً الألومنيوم يلزم له ٣ فاراداي).',
  },
  {
    id: 'cfc_15',
    topic: 'electrochemistry',
    titleEn: 'Galvanic Protection (Sacrificial Anode) vs. Cathodic Protection',
    titleAr: 'الغطاء الأنودي (القطب المضحي) مقابل الغطاء الكاثودي',
    frontEn: 'Why is anodic protection (galvanizing iron with zinc) far superior to cathodic protection (coating iron with tin) upon scratching?',
    frontAr: 'علل: الغطاء الأنودي (جلفنة الحديد بالخارصين) أفضل بكثير من الغطاء الكاثودي (طلاء الحديد بالقصدير) عند حدوث خدش؟',
    backEn: 'Because Zinc precedes Iron in the electrochemical series (higher oxidation potential). Upon scratching, a galvanic micro-cell forms where Zinc acts as anode and corrodes sacrificially, fully protecting the iron cathode. With Tin (which follows iron), iron acts as anode and corrodes much faster than normal!',
    backAr: 'لأن الخارصين يسبق الحديد في السلسلة الكهروكيميائية (أنشط منه). فعند حدوث خدش تتكون خلية جلفانية موضعية يكون فيها الخارصين هو المصعد (أنود مضحي) فيتآكل أولاً لحماية الحديد. أما القصدير فيلي الحديد، فيتآكل الحديد بسرعة أكبر.',
    latex: 'E^\\circ_{\\text{ox}}(\\text{Zn}) = +0.76\\,\\text{V} > E^\\circ_{\\text{ox}}(\\text{Fe}) = +0.44\\,\\text{V} > E^\\circ_{\\text{ox}}(\\text{Sn}) = +0.14\\,\\text{V}',
    teacherNoteEn: 'Magnesium ingots are used as sacrificial anodes to protect ship hulls and underground steel oil pipes.',
    teacherNoteAr: 'تُستخدم كتل الماغنسيوم كأقطاب مضحية لحماية هياكل السفن وأنابيب البترول المدفونة.',
  },

  // 5. Organic Chemistry (Chapter 5)
  {
    id: 'cfc_16',
    topic: 'organic',
    titleEn: "Markovnikov's Rule for Asymmetric Addition",
    titleAr: 'قاعدة ماركونيكوف للإضافة غير المتماثلة',
    frontEn: 'What product forms when Hydrogen Bromide (HBr) is added to Propene (CH₃-CH=CH₂)?',
    frontAr: 'ما هو الناتج الرئيسي المتكون عند إضافة بروميد الهيدروجين HBr إلى البروبين؟',
    backEn: '2-Bromopropane (CH₃-CH(Br)-CH₃), NOT 1-bromopropane. In accordance with Markovnikov rule: The electrophilic H⁺ attaches to the C=C carbon with more hydrogens (C1: =CH₂), generating the more stable secondary carbocation, which then binds Br⁻.',
    backAr: 'يتكون ٢- بروموبروبان وليس ١- بروموبروبان، تطبيقاً لقاعدة ماركونيكوف: يضاف الشق الموجب H⁺ لذرة الكربون غير المشبعة الغنية بالهيدروجين (الطرفية)، والبروم لذرة الكربون المركزية الأقل هيدروجيناً.',
    latex: '\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\text{HBr} \\to \\text{CH}_3-\\text{CH(Br)}-\\text{CH}_3 \\quad (\\text{٢- بروموبروبان})',
    teacherNoteEn: 'Adding water (hydration) to propene yields propan-2-ol (secondary alcohol), never propan-1-ol.',
    teacherNoteAr: 'الهيدرة الحفزية للبروبين تعطي كحول أيزوبروبيلي (ثانوي) ولا تعطي كحول بروبيلي أولي إطلاقاً.',
  },
  {
    id: 'cfc_17',
    topic: 'organic',
    titleEn: 'Preparation of Methane by Dry Distillation',
    titleAr: 'التقطير الجاف لأسيتات الصوديوم لتحضير الميثان',
    frontEn: 'Why is Soda Lime (NaOH + CaO) used instead of pure Caustic Soda (NaOH) to prepare methane in the lab?',
    frontAr: 'علل: يُستخدم الجير الصودي (NaOH + CaO) بدلاً من الصودا الكاوية النقية في تحضير الميثان معملياً؟',
    backEn: 'Because Calcium Oxide (CaO) acts as a flux that lowers the melting point of the reaction mixture and prevents the glass tube from fusing, while NaOH provides the chemical decarboxylation.',
    backAr: 'لأن أكسيد الكالسيوم (الجير الحي CaO) مادة صهارة تعمل على خفض درجة انصهار الخليط وعدم التصاق وتلف أنبوبة الاختبار الزجاجية، بينما تشترك الصودا الكاوية في التفاعل.',
    latex: '\\text{CH}_3\\text{COONa} + \\text{NaOH} \\xrightarrow[\\Delta]{\\text{CaO}} \\text{CH}_4\\uparrow + \\text{Na}_2\\text{CO}_3',
    teacherNoteEn: 'Methane is collected by downward displacement of water because it is sparingly soluble in water and less dense than air.',
    teacherNoteAr: 'يجمع غاز الميثان بإزاحة الماء لأسفل لشحه ذوبانه في الماء ولأنه أخف من الهواء.',
  },
  {
    id: 'cfc_18',
    topic: 'organic',
    titleEn: "Baeyer's Test for Carbon-Carbon Double Bonds",
    titleAr: 'تفاعل باير للكشف عن الرابطة المزدوجة في الألكينات',
    frontEn: 'What is Baeyer reagent and what visual observation confirms the presence of an alkene?',
    frontAr: 'ما هو كاشف باير وما هي المشاهدة التي تؤكد وجود الرابطة المزدوجة في الألكينات؟',
    backEn: 'Baeyer reagent is an alkaline, cold dilute Potassium Permanganate solution (KMnO₄ in alkaline medium). Upon bubbling an alkene (like ethene), oxidation occurs to form ethylene glycol, and the violet color of KMnO₄ is completely discharged.',
    backAr: 'كاشف باير هو محلول مائي بارد مخفف من برمنجنات البوتاسيوم في وسط قلوي. يزول لون البرمنجنات البنفسجي ويتكون إيثيلين جليكول (كحول ثنائي الهيدروكسيل مانع لتجمد الماء).',
    latex: '\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} + [\\text{O}] \\xrightarrow{\\text{KMnO}_4 / \\text{وسط قلوي}} \\text{CH}_2\\text{OH}-\\text{CH}_2\\text{OH} \\quad (\\text{إيثيلين جليكول})',
    teacherNoteEn: 'Baeyer test is both an oxidation and addition reaction simultaneously.',
    teacherNoteAr: 'تفاعل باير يعتبر تفاعل أكسدة وإضافة في نفس الوقت.',
  },
  {
    id: 'cfc_19',
    topic: 'organic',
    titleEn: 'Preparation of Acetylene & Role of Copper Sulfate',
    titleAr: 'تحضير الأسيتيلين ودور كبريتات النحاس في حمض الكبريتيك',
    frontEn: 'Why must the acetylene gas generated from calcium carbide pass through an acidified CuSO₄ wash bottle?',
    frontAr: 'علل: يمرر غاز الأسيتيلين الناتج من تنقيط الماء على كاربيد الكالسيوم على محلول كبريتات نحاس في حمض كبريتيك مخفف؟',
    backEn: 'To absorb and remove toxic phosphine (PH₃) and hydrogen sulfide (H₂S) gas impurities that are produced from commercial impurities in calcium carbide.',
    backAr: 'للتخلص من شوائب غازي الفوسفين (PH₃) وكبريتيد الهيدروجين (H₂S) الناتجة من الشوائب الموجودة في كاربيد الكالسيوم التجاري.',
    latex: '\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\to \\text{C}_2\\text{H}_2\\uparrow + \\text{Ca(OH)}_2',
    teacherNoteEn: 'Oxyacetylene flame burns at 3,000°C and is widely used for cutting and welding metals.',
    teacherNoteAr: 'لهب الأكسي أسيتيلين تصل حرارته إلى ٣٠٠٠°س ويُستخدم في قطع ولحام المعادن.',
  },
  {
    id: 'cfc_20',
    topic: 'organic',
    titleEn: 'Friedel-Crafts Alkylation of Benzene',
    titleAr: 'تفاعل فريدل-كرافتس لألكلة البنزين العطري',
    frontEn: 'What catalyst is required to react benzene with methyl chloride, and what product forms?',
    frontAr: 'ما هو العامل الحفاز اللازم لتفاعل البنزين مع كلوريد الميثيل، وما هو المركب الناتج؟',
    backEn: 'Anhydrous Aluminum Chloride (AlCl₃) acts as a Lewis acid catalyst to generate the CH₃⁺ electrophile. Toluene (methylbenzene) and HCl gas are produced.',
    backAr: 'كلوريد الألومنيوم اللامائي (AlCl₃) كعامل حفاز يولد إلكتروفيل الميثيل. ينتج مركب التولوين (ميثيل بنزين) ويتصاعد غاز كلوريد الهيدروجين HCl.',
    latex: '\\text{C}_6\\text{H}_6 + \\text{CH}_3\\text{Cl} \\xrightarrow{\\text{anhydrous } \\text{AlCl}_3} \\text{C}_6\\text{H}_5\\text{-CH}_3 + \\text{HCl}',
    teacherNoteEn: 'The methyl group (-CH₃) is an activating, ortho/para-directing group for subsequent electrophilic aromatic substitution.',
    teacherNoteAr: 'مجموعة الميثيل توجه البديل التالي إلى الموضعين أورثو وبارا.',
  },
  {
    id: 'cfc_21',
    topic: 'organic',
    titleEn: 'Distinguishing Alcohols: Lucas Test (Primary, Secondary, Tertiary)',
    titleAr: 'التمييز بين الكحولات الأولية والثانوية والثالثية باختبار لوكاس والأكسدة',
    frontEn: 'How do primary, secondary, and tertiary alcohols behave toward acidified potassium dichromate oxidation?',
    frontAr: 'كيف تختلف الكحولات الأولية والثانوية والثالثية عند أكسدتها بمحلول ثاني كرومات البوتاسيوم المحمضة؟',
    backEn: 'Primary alcohols (R-CH₂OH) oxidize in two steps (Aldehyde → Carboxylic Acid). Secondary alcohols (R₂CHOH) oxidize in one step to Ketones. Tertiary alcohols (R₃COH) resist oxidation under ordinary conditions because the carbinol carbon has no hydrogen atoms.',
    backAr: 'الكحولات الأولية تتأكسد على مرحلتين (ألدهيد ثم حمض كربوكسيلي). الكحولات الثانوية تتأكسد على مرحلة واحدة وتعطي كيتون. الكحولات الثالثية تقاوم الأكسدة لعدم اتصال ذرة الكاربينول بأي ذرات هيدروجين.',
    latex: '\\text{Primary} \\xrightarrow{[\\text{O}]} \\text{Aldehyde} \\xrightarrow{[\\text{O}]} \\text{Acid}, \\quad \\text{Secondary} \\xrightarrow{[\\text{O}]} \\text{Ketone}, \\quad \\text{Tertiary} \\xrightarrow{[\\text{O}]} \\text{No reaction}',
    teacherNoteEn: 'Oxidation changes dichromate color from orange (Cr⁶⁺) to green (Cr³⁺).',
    teacherNoteAr: 'يتغير لون ثاني كرومات البوتاسيوم من البرتقالي للأخضر عند حدوث الأكسدة.',
  },
  {
    id: 'cfc_22',
    topic: 'organic',
    titleEn: 'Acidity of Phenol vs. Alcohols',
    titleAr: 'حمضية الفينول (حمض الكربوليك) مقارنة بالكحولات',
    frontEn: 'Why is Phenol acidic enough to react with sodium hydroxide (NaOH), whereas Ethanol does not react with NaOH?',
    frontAr: 'علل: الفينول أكثر حامضية من الإيثانول ويتفاعل مع هيدروكسيد الصوديوم بينما لا يتفاعل الإيثانول معها؟',
    backEn: 'The aromatic benzene ring pulls electrons away from the oxygen atom via resonance, shortening and strengthening the C-O bond while lengthening and weakening the O-H bond, making the proton (H⁺) much easier to release. In ethanol, the electron-donating ethyl group strengthens the O-H bond.',
    backAr: 'حلقة البنزين في الفينول مجموعة ساحبة للإلكترونات فتزيد من الشحنة الموجبة على الأكسجين وتقصر الرابطة C-O وتطيل الرابطة O-H وتضعفها فيسهل انفصال بروتون H⁺. بينما مجموعة الإيثيل معطية للإلكترونات وتصعب انفصال H⁺.',
    latex: '\\text{C}_6\\text{H}_5\\text{OH} + \\text{NaOH} \\to \\text{C}_6\\text{H}_5\\text{ONa} + \\text{H}_2\\text{O} \\quad (\\text{فينوكسيد الصوديوم})',
    teacherNoteEn: 'Phenol gives a violet color with neutral FeCl₃ solution, and a white precipitate with bromine water.',
    teacherNoteAr: 'يعطي الفينول لوناً بنفسجياً مع محلول كلوريد الحديد III وراسباً أبيض مع ماء البروم.',
  },
  {
    id: 'cfc_23',
    topic: 'organic',
    titleEn: 'Esterification Mechanism & Oxygen-18 Isotope Experiment',
    titleAr: 'آلية تفاعل القسطرة وتجربة نظير الأكسجين 18',
    frontEn: 'What did the Oxygen-18 isotopic tracer experiment prove about the source of oxygen in the water formed during esterification?',
    frontAr: 'ماذا أثبتت تجربة نظير الأكسجين ١٨ حول مصدر ذرة أكسجين الماء الناتج في تفاعل القسطرة؟',
    backEn: 'When reacting ethanoic acid with ethanol containing Oxygen-18 (C₂H₅-¹⁸OH), the resulting water contained ordinary ¹⁶O and all ¹⁸O remained in the ester. This conclusively proved that water oxygen originates from the CARBOXYLIC ACID -OH group, while alcohol loses only H⁺.',
    backAr: 'عند تفاعل حمض الإيثانويك مع إيثانول يحوي نظير الأكسجين ١٨، كان الأكسجين في الماء الناتج من النوع العادي ١٦O، وظهر نظير ١٨O كاملاً في الإستر. هذا أثبت أن الماء ينشأ من انفصال مجموعة -OH من الحمض وهيدروجينة H⁺ من الكحول.',
    latex: '\\text{CH}_3\\text{CO}-\\text{OH} + \\text{H}-^{18}\\text{O}-\\text{C}_2\\text{H}_5 \\xrightleftharpoons{\\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{CO}-^{18}\\text{O}-\\text{C}_2\\text{H}_5 + \\text{H}_2\\text{O}',
    teacherNoteEn: 'Concentrated H₂SO₄ is used as a dehydrating agent to absorb water and prevent the reversible backward hydrolysis.',
    teacherNoteAr: 'حمض الكبريتيك المركز ينزع الماء لمنع التفاعل العكسي وتفضل الأسترة.',
  },
  {
    id: 'cfc_24',
    topic: 'organic',
    titleEn: 'Aspirin and Oil of Wintergreen (Esters of Salicylic Acid)',
    titleAr: 'الأسبرين وزيت المروخ (إسترات حمض الساليسيليك)',
    frontEn: 'What is the structural difference between Aspirin and Oil of Wintergreen (Methyl Salicylate)?',
    frontAr: 'ما الفرق في التخليق بين دواء الأسبرين وزيت المروخ (ساليسيلات الميثيل)؟',
    backEn: 'Salicylic acid has both a phenolic -OH and a carboxylic -COOH group. In Aspirin: Salicylic acid acts as alcohol, reacting its phenolic -OH with Acetic Acid. In Oil of Wintergreen: Salicylic acid acts as acid, reacting its -COOH group with Methanol (CH₃OH).',
    backAr: 'حمض الساليسيليك يحوي مجموعتين وظيفيتين: فينولية -OH وكربوكسيلية -COOH. في الأسبرين: يسلك ككحول ويتفاعل بالهيدروكسيل مع حمض الأسيتيك. في زيت المروخ (دهان موضعي للروماتيزم): يسلك كحمض ويتفاعل بالكربوكسيل مع الميثانول.',
    latex: '\\text{Aspirin}: \\text{C}_6\\text{H}_4(\\text{COOH})(\\text{OCOCH}_3), \\quad \\text{Wintergreen}: \\text{C}_6\\text{H}_4(\\text{OH})(\\text{COOCH}_3)',
    teacherNoteEn: 'Aspirin contains an acetyl group (-COCH₃) which prevents free salicylic acid from causing severe stomach irritation.',
    teacherNoteAr: 'إضافة مجموعة الأسيتيل للأسبرين تقلل من حموضته وتأثيره المهيج لجدار المعدة.',
  },
];

export const ChemistryFlashcards: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTopic, setActiveTopic] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [challengeMode, setChallengeMode] = useState<boolean>(false);
  const [revealFormula, setRevealFormula] = useState<boolean>(false);

  // Filtered Cards
  const filteredCards = useMemo(() => {
    if (activeTopic === 'all') return CHEMISTRY_FLASHCARDS;
    return CHEMISTRY_FLASHCARDS.filter((c) => c.topic === activeTopic);
  }, [activeTopic]);

  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const isMastered = masteredIds.has(currentCard.id);

  const handleNext = () => {
    setIsFlipped(false);
    setRevealFormula(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setRevealFormula(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const toggleMastered = () => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentCard.id)) {
        next.delete(currentCard.id);
      } else {
        next.add(currentCard.id);
      }
      return next;
    });
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setRevealFormula(false);
    setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
  };

  return (
    <div
      className={`p-6 rounded-2xl border transition-all ${
        isContrast
          ? 'bg-black border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-300 shadow-xl text-slate-900'
          : 'bg-slate-900/90 border-slate-800 text-slate-100'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-700/60 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-black tracking-tight">
              {isArabic ? 'بطاقات الاستذكار الفعال وتحدي الكواشف العضوية' : 'Active Recall Chemistry Flashcards & Reagent Challenge'}
            </h3>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              {isArabic ? `${filteredCards.length} بطاقة معتمدة` : `${filteredCards.length} Standard Cards`}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {isArabic
              ? 'مراجعة تفاعلية سريعة لأهم تعليلات ومعادلات ومفاهيم امتحانات الكيمياء الوزارية'
              : 'Interactive spaced repetition deck covering high-yield ministerial reasoning, mechanisms, and equations'}
          </p>
        </div>

        {/* Top Actions: Challenge Mode & Shuffle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setChallengeMode(!challengeMode);
              setRevealFormula(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
              challengeMode
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md'
                : isLight
                ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                : 'bg-amber-950/40 text-amber-300 border-amber-800/60 hover:bg-amber-900/40'
            }`}
          >
            <span>⚡</span>
            <span>{isArabic ? 'تحدي إخفاء الكواشف' : 'Reagent Challenge Mode'}</span>
          </button>

          <button
            onClick={handleShuffle}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-600'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isArabic ? 'ترتيب عشوائي' : 'Shuffle'}
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Topic Filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none">
        <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1 rtl:mr-0 rtl:ml-1" />
        {[
          { id: 'all', labelEn: 'All Units', labelAr: 'جميع الأبواب' },
          { id: 'transition', labelEn: 'Transition & Iron', labelAr: 'العناصر الانتقالية' },
          { id: 'analysis', labelEn: 'Qualitative & Titration', labelAr: 'التحليل الكيميائي' },
          { id: 'equilibrium', labelEn: 'Equilibrium', labelAr: 'الاتزان الكيميائي' },
          { id: 'electrochemistry', labelEn: 'Electrochemistry', labelAr: 'الكيمياء الكهربية' },
          { id: 'organic', labelEn: 'Organic Chemistry', labelAr: 'الكيمياء العضوية' },
        ].map((topic) => (
          <button
            key={topic.id}
            onClick={() => {
              setActiveTopic(topic.id);
              setCurrentIndex(0);
              setIsFlipped(false);
              setRevealFormula(false);
            }}
            className={`px-3 py-1 rounded-xl text-xs font-bold shrink-0 transition-all border cursor-pointer ${
              activeTopic === topic.id
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                : isLight
                ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {isArabic ? topic.labelAr : topic.labelEn}
          </button>
        ))}
      </div>

      {/* Main Flashcard Canvas */}
      <div className="max-w-2xl mx-auto space-y-4">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`min-h-[290px] p-6 sm:p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between relative shadow-lg select-none ${
            isFlipped
              ? isContrast
                ? 'bg-slate-950 border-emerald-400'
                : isLight
                ? 'bg-emerald-50/70 border-emerald-300'
                : 'bg-slate-900 border-emerald-500/80 shadow-emerald-950/40'
              : isContrast
              ? 'bg-black border-cyan-400'
              : isLight
              ? 'bg-white border-slate-300'
              : 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
          }`}
        >
          {/* Card Meta Top */}
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
              {currentIndex + 1} / {filteredCards.length}
            </span>
            <span className="text-xs font-black text-emerald-400">
              {isArabic ? currentCard.titleAr : currentCard.titleEn}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-slate-400 font-bold">
                {isFlipped ? (isArabic ? 'الإجابة والمعادلة' : 'Answer') : (isArabic ? 'السؤال' : 'Prompt')}
              </span>
              <RotateCw className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          {/* Card Content Middle */}
          <div className="my-auto py-4">
            {!isFlipped ? (
              <div className="space-y-3">
                <p className="text-base sm:text-lg font-bold leading-relaxed">
                  {isArabic ? currentCard.frontAr : currentCard.frontEn}
                </p>
                <div className="text-[11px] text-slate-400 italic">
                  {isArabic ? 'انقر على البطاقة لقلبها وإظهار التفسير والمعادلة...' : 'Click card to flip and reveal explanation...'}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-slate-200">
                  {isArabic ? currentCard.backAr : currentCard.backEn}
                </p>

                {/* Equation Block */}
                {currentCard.latex && (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    {challengeMode && !revealFormula ? (
                      <div className="flex items-center justify-center gap-2 py-1">
                        <span className="text-xs font-mono font-black text-amber-400">
                          [ ? = معادلة التفاعل والشروط ]
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setRevealFormula(true);
                          }}
                          className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold hover:bg-amber-500/30 cursor-pointer"
                        >
                          {isArabic ? 'إظهار المعادلة 👁️' : 'Reveal Equation'}
                        </button>
                      </div>
                    ) : (
                      <div className="text-xs sm:text-sm font-bold text-cyan-300">
                        <MathRenderer math={currentCard.latex} lang={lang} />
                      </div>
                    )}
                  </div>
                )}

                {/* Teacher Note */}
                {currentCard.teacherNoteEn && (
                  <div className="text-[11px] text-amber-300/90 bg-amber-950/30 p-2.5 rounded-lg border border-amber-800/40 flex items-start gap-1.5">
                    <span className="shrink-0 font-bold">💡</span>
                    <span>
                      {isArabic ? currentCard.teacherNoteAr : currentCard.teacherNoteEn}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] text-slate-400">
            <span>
              {isMastered ? (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isArabic ? 'تم إتقانها' : 'Mastered'}
                </span>
              ) : (
                <span>{isArabic ? 'قيد المراجعة' : 'In Review'}</span>
              )}
            </span>
            <span className="text-[10px] font-mono">
              {isArabic ? 'مقرر الكيمياء الرسمي' : 'Ministry Blueprint'}
            </span>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1 cursor-pointer ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
          >
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{isArabic ? 'السابق' : 'Previous'}</span>
          </button>

          <button
            onClick={toggleMastered}
            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
              isMastered
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-600'
                : 'border-slate-700 hover:bg-slate-800 text-slate-400'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isMastered ? (isArabic ? 'أتقنتها ✓' : 'Mastered ✓') : (isArabic ? 'تحديد كمتقن' : 'Mark Mastered')}</span>
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>{isArabic ? 'التالي' : 'Next'}</span>
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};
