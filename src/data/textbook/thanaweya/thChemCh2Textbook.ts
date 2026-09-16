import type { SolvedProblem } from '../../../types/curriculum';

export const thChemCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_chem_ch2_se_01",
    "titleEn": "MoE Example 1: Differentiating Carbonate and Bicarbonate Anions",
    "titleAr": "مثال الوزارة ١: التمييز العملي بين أنيوني الكربونات والبيكربونات",
    "difficulty": "easy",
    "questionEn": "How can an aqueous solution of sodium carbonate ($\\text{Na}_2\\text{CO}_3$) be chemically distinguished from sodium bicarbonate ($\\text{NaHCO}_3$) using magnesium sulfate solution ($\\text{MgSO}_4$)?",
    "questionAr": "كيف يمكن التمييز عملياً بين محلولي كربونات الصوديوم ($\\text{Na}_2\\text{CO}_3$) وبيكربونات الصوديوم ($\\text{NaHCO}_3$) باستخدام محلول كبريتات الماغنسيوم ($\\text{MgSO}_4$)؟",
    "optionsEn": [
      "$\\text{Na}_2\\text{CO}_3$ forms a white precipitate of $\\text{MgCO}_3$ in the cold, whereas $\\text{NaHCO}_3$ forms a white precipitate only after heating",
      "$\\text{Na}_2\\text{CO}_3$ forms a reddish-brown precipitate in the cold, whereas $\\text{NaHCO}_3$ gives no precipitate even upon heating",
      "$\\text{NaHCO}_3$ forms a white precipitate in the cold, whereas $\\text{Na}_2\\text{CO}_3$ forms a yellow precipitate after boiling",
      "Both form an immediate white precipitate in the cold that dissolves upon heating"
    ],
    "optionsAr": [
      "تعطي كربونات الصوديوم راسباً أبيض على البارد من $\\text{MgCO}_3$، بينما تعطي بيكربونات الصوديوم راسباً أبيض بعد التسخين فقط",
      "تعطي كربونات الصوديوم راسباً بنياً محمراً على البارد، بينما لا تعطي البيكربونات أي راسب حتى بالتسخين",
      "تعطي بيكربونات الصوديوم راسباً أبيض على البارد، بينما تعطي الكربونات راسباً أصفر بعد الغليان",
      "يعطي كلاهما راسباً أبيض فورياً على البارد يذوب بالتسخين"
    ],
    "correctAnswer": "$\\text{Na}_2\\text{CO}_3$ forms a white precipitate of $\\text{MgCO}_3$ in the cold, whereas $\\text{NaHCO}_3$ forms a white precipitate only after heating",
    "correctIndex": 0,
    "hintEn": "Magnesium carbonate (MgCO3) is insoluble in cold water, while magnesium bicarbonate (Mg(HCO3)2) is soluble in cold water and decomposes to MgCO3 upon boiling.",
    "hintAr": "كبريتات الماغنسيوم ترسب الكربونات مباشرة كـ $\\text{MgCO}_3$ أبيض شحيح الذوبان في الماء، أما بيكربونات الماغنسيوم فتذوب في الماء وتتحلل حرارياً بالحرارة إلى كربونات الماغنسيوم.",
    "stepByStepSolutionEn": [
      "Addition of $\\text{MgSO}_4$ to $\\text{Na}_2\\text{CO}_3$: forms an immediate white precipitate of magnesium carbonate $\\text{MgCO}_3$ without heating.",
      "Reaction: $\\text{Na}_2\\text{CO}_3 + \\text{MgSO}_4 \\to \\text{Na}_2\\text{SO}_4 + \\text{MgCO}_3\\downarrow$ (white precipitate on cold).",
      "Addition of $\\text{MgSO}_4$ to $\\text{NaHCO}_3$: forms soluble magnesium bicarbonate $\\text{Mg(HCO}_3)_2$, so no precipitate appears initially in the cold.",
      "Upon heating, magnesium bicarbonate thermally decomposes: $\\text{Mg(HCO}_3)_2 \\xrightarrow{\\Delta} \\text{MgCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$."
    ],
    "stepByStepSolutionAr": [
      "عند إضافة محلول $\\text{MgSO}_4$ إلى محلول كربونات الصوديوم يتكون راسب أبيض على البارد من كربونات الماغنسيوم $\\text{MgCO}_3$.",
      "المعادلة: $\\text{Na}_2\\text{CO}_3 + \\text{MgSO}_4 \\to \\text{Na}_2\\text{SO}_4 + \\text{MgCO}_3\\downarrow$.",
      "عند الإضافة إلى بيكربونات الصوديوم يتكون بيكربونات الماغنسيوم الذائبة في الماء فلا يتكون راسب على البارد.",
      "عند التسخين تتحلل بيكربونات الماغنسيوم حرارياً: $\\text{Mg(HCO}_3)_2 \\xrightarrow{\\Delta} \\text{MgCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$ ويتكون الراسب الأبيض بعد التسخين."
    ],
    "teacherTipEn": "All bicarbonates are soluble in water; all carbonates are insoluble except sodium, potassium, and ammonium carbonates.",
    "teacherTipAr": "جميع أملاح البيكربونات تذوب في الماء، بينما جميع أملاح الكربونات لا تذوب في الماء باستثناء كربونات الصوديوم والبوتاسيوم والأمونيوم."
  },
  {
    "id": "th_chem_ch2_se_02",
    "titleEn": "MoE Example 2: Detection of Sulfite and Thiosulfate Anions",
    "titleAr": "مثال الوزارة ٢: الكشف عن أنيوني الكبريتيت والثيوكبريتات",
    "difficulty": "medium",
    "questionEn": "When dilute hydrochloric acid ($\\text{HCl}$) is added to solid salt (A), a gas with a choking pungent odor evolves that turns filter paper moistened with acidified potassium dichromate solution green. When added to solid salt (B), the same gas evolves along with the separation of a yellow precipitate suspended in the solution. What are salts A and B?",
    "questionAr": "عند إضافة حمض الهيدروكلوريك المخفف ($\\text{HCl}$) إلى الملح الصلب (A)، يتصاعد غاز نفاذ الرائحة يخضر ورقة مبللة بمحلول ثاني كرومات البوتاسيوم المحمضة بحمض الكبريتيك. وعند إضافته للملح الصلب (B) يتصاعد نفس الغاز مع ظهور راسب أصفر معلق في المحلول. ما هما الملحان A و B؟",
    "optionsEn": [
      "A is sodium sulfite ($\\text{Na}_2\\text{SO}_3$) and B is sodium thiosulfate ($\\text{Na}_2\\text{S}_2\\text{O}_3$)",
      "A is sodium sulfide ($\\text{Na}_2\\text{S}$) and B is sodium sulfate ($\\text{Na}_2\\text{SO}_4$)",
      "A is sodium nitrite ($\\text{NaNO}_2$) and B is sodium sulfite ($\\text{Na}_2\\text{SO}_3$)",
      "A is sodium thiosulfate ($\\text{Na}_2\\text{S}_2\\text{O}_3$) and B is sodium sulfite ($\\text{Na}_2\\text{SO}_3$)"
    ],
    "optionsAr": [
      "الملح A هو كبريتيت الصوديوم ($\\text{Na}_2\\text{SO}_3$) والملح B هو ثيوكبريتات الصوديوم ($\\text{Na}_2\\text{S}_2\\text{O}_3$)",
      "الملح A هو كبريتيد الصوديوم ($\\text{Na}_2\\text{S}$) والملح B هو كبريتات الصوديوم ($\\text{Na}_2\\text{SO}_4$)",
      "الملح A هو نيتريت الصوديوم ($\\text{NaNO}_2$) والملح B هو كبريتيت الصوديوم ($\\text{Na}_2\\text{SO}_3$)",
      "الملح A هو ثيوكبريتات الصوديوم ($\\text{Na}_2\\text{S}_2\\text{O}_3$) والملح B هو كبريتيت الصوديوم ($\\text{Na}_2\\text{SO}_3$)"
    ],
    "correctAnswer": "A is sodium sulfite ($\\text{Na}_2\\text{SO}_3$) and B is sodium thiosulfate ($\\text{Na}_2\\text{S}_2\\text{O}_3$)",
    "correctIndex": 0,
    "hintEn": "The yellow suspended precipitate is elemental colloidal sulfur (S), which uniquely characterizes thiosulfate.",
    "hintAr": "الراسب الأصفر المعلق هو عنصر الكبريت الغروي الناتج عن تفكك حمض الثيوكبريتيك غير الثابت، وهو كشف مميز للثيوكبريتات.",
    "stepByStepSolutionEn": [
      "For salt A: $\\text{Na}_2\\text{SO}_3 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{SO}_2\\uparrow$.",
      "$\\text{SO}_2$ reduces $\\text{K}_2\\text{Cr}_2\\text{O}_7$ (orange) to $\\text{Cr}_2(\\text{SO}_4)_3$ (green). Salt A is sodium sulfite.",
      "For salt B: $\\text{Na}_2\\text{S}_2\\text{O}_3 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{SO}_2\\uparrow + \\text{S}\\downarrow$ (yellow colloidal sulfur).",
      "Salt B is therefore sodium thiosulfate."
    ],
    "stepByStepSolutionAr": [
      "للملح A: $\\text{Na}_2\\text{SO}_3 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{SO}_2\\uparrow$.",
      "غاز $\\text{SO}_2$ يختزل ثاني كرومات البوتاسيوم البرتقالية إلى كبريتات الكروم III الخضراء، إذن الملح A هو كبريتيت صوديوم.",
      "للملح B: $\\text{Na}_2\\text{S}_2\\text{O}_3 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{SO}_2\\uparrow + \\text{S}\\downarrow$ (راسب أصفر معلق من الكبريت).",
      "إذن الملح B هو ثيوكبريتات الصوديوم."
    ],
    "teacherTipEn": "Confirmatory test for thiosulfate: decoloring brown aqueous iodine solution due to formation of sodium tetrathionate (Na2S4O6) and sodium iodide.",
    "teacherTipAr": "التجربة التأكيدية للثيوكبريتات: زوال لون محلول اليود البني لتكون يوديد الصوديوم ورباعي ثيونات الصوديوم عديمي اللون."
  },
  {
    "id": "th_chem_ch2_se_03",
    "titleEn": "MoE Example 3: Halide Identification with Silver Nitrate Solution",
    "titleAr": "مثال الوزارة ٣: الكشف التأكيدي عن الهاليدات بمحلول نترات الفضة",
    "difficulty": "medium",
    "questionEn": "Three unknown sodium salt solutions $(X, Y, Z)$ each reacted with silver nitrate solution $(\\text{AgNO}_3)$: (X) produced a white precipitate that turns violet in sunlight and rapidly dissolves in aqueous ammonia; (Y) produced a yellowish-white precipitate that dissolves slowly in concentrated ammonia; (Z) produced a yellow precipitate that does not dissolve in ammonia. Identify anions $X, Y,$ and $Z$.",
    "questionAr": "ثلاثة محاليل لأملاح صوديوم مجهولة $(X, Y, Z)$ أضيف إلى كل منها محلول نترات الفضة $(\\text{AgNO}_3)$: (X) أعطى راسباً أبيض يصير بنفسجياً في ضوء الشمس ويذوب سريعاً في محلول النشادر؛ (Y) أعطى راسباً أبيض مصفر يذوب ببطء في محلول النشادر المركز؛ (Z) أعطى راسباً أصفر لا يذوب في محلول النشادر. ما هي الأنيونات الثلاثة؟",
    "optionsEn": [
      "$X = \\text{Cl}^-$ (Chloride), $Y = \\text{Br}^-$ (Bromide), $Z = \\text{I}^-$ (Iodide)",
      "$X = \\text{I}^-$ (Iodide), $Y = \\text{Br}^-$ (Bromide), $Z = \\text{Cl}^-$ (Chloride)",
      "$X = \\text{Cl}^-$ (Chloride), $Y = \\text{PO}_4^{3-}$ (Phosphate), $Z = \\text{I}^-$ (Iodide)",
      "$X = \\text{Br}^-$ (Bromide), $Y = \\text{Cl}^-$ (Chloride), $Z = \\text{S}^{2-}$ (Sulfide)"
    ],
    "optionsAr": [
      "$X = \\text{Cl}^-$ (كلوريد)، $Y = \\text{Br}^-$ (بروميد)، $Z = \\text{I}^-$ (يوديد)",
      "$X = \\text{I}^-$ (يوديد)، $Y = \\text{Br}^-$ (بروميد)، $Z = \\text{Cl}^-$ (كلوريد)",
      "$X = \\text{Cl}^-$ (كلوريد)، $Y = \\text{PO}_4^{3-}$ (فوسفات)، $Z = \\text{I}^-$ (يوديد)",
      "$X = \\text{Br}^-$ (بروميد)، $Y = \\text{Cl}^-$ (كلوريد)، $Z = \\text{S}^{2-}$ (كبريتيد)"
    ],
    "correctAnswer": "$X = \\text{Cl}^-$ (Chloride), $Y = \\text{Br}^-$ (Bromide), $Z = \\text{I}^-$ (Iodide)",
    "correctIndex": 0,
    "hintEn": "AgCl is white (freely soluble in NH3), AgBr is pale cream (slowly soluble in conc. NH3), and AgI is yellow (insoluble in NH3).",
    "hintAr": "راسب كلوريد الفضة أبيض يذوب سريعاً في النشادر، وبروميد الفضة أبيض مصفر يذوب ببطء، ويوديد الفضة أصفر لا يذوب في النشادر.",
    "stepByStepSolutionEn": [
      "Reaction with $\\text{AgNO}_3$:\n1. $\\text{NaCl} + \\text{AgNO}_3 \\to \\text{NaNO}_3 + \\text{AgCl}\\downarrow$ (white, turns violet in sunlight, readily soluble in $\\text{NH}_4\\text{OH}$). So $X = \\text{Cl}^-$.",
      "2. $\\text{NaBr} + \\text{AgNO}_3 \\to \\text{NaNO}_3 + \\text{AgBr}\\downarrow$ (pale yellowish-white, dissolves slowly in conc. $\\text{NH}_4\\text{OH}$). So $Y = \\text{Br}^-$.",
      "3. $\\text{NaI} + \\text{AgNO}_3 \\to \\text{NaNO}_3 + \\text{AgI}\\downarrow$ (bright yellow, completely insoluble in $\\text{NH}_4\\text{OH}$). So $Z = \\text{I}^-$.",
      "Therefore, the sequence is Chloride, Bromide, Iodide."
    ],
    "stepByStepSolutionAr": [
      "تفاعلات نترات الفضة مع الهاليدات:\n١. مع الكلوريد: $\\text{AgCl}$ راسب أبيض يصير بنفسجياً في الضوء ويذوب بسرعة في النشادر، إذن $X = \\text{Cl}^-$.",
      "٢. مع البروميد: $\\text{AgBr}$ راسب أبيض مصفر يذوب ببطء في محلول النشادر المركز، إذن $Y = \\text{Br}^-$.",
      "٣. مع اليوديد: $\\text{AgI}$ راسب أصفر لا يذوب إطلاقاً في محلول النشادر، إذن $Z = \\text{I}^-$.",
      "إذن الترتيب الصحيح هو: كلوريد، بروميد، يوديد."
    ],
    "teacherTipEn": "Distinguish between yellow AgI (insoluble in ammonia) and yellow Ag3PO4 (soluble in ammonia and nitric acid).",
    "teacherTipAr": "انتبه: كل من يوديد الفضة وفوسفات الفضة راسب أصفر، ولكن يوديد الفضة لا يذوب في محلول النشادر بينما فوسفات الفضة يذوب في محلول النشادر وحمض النيتريك."
  },
  {
    "id": "th_chem_ch2_se_04",
    "titleEn": "MoE Example 4: Distinguishing Sulfate and Phosphate Anions with BaCl2",
    "titleAr": "مثال الوزارة ٤: التمييز بين أنيوني الكبريتات والفوسفات بمحلول كلوريد الباريوم",
    "difficulty": "medium",
    "questionEn": "Both sulfate ($\\text{SO}_4^{2-}$) and phosphate ($\\text{PO}_4^{3-}$) form a white precipitate upon adding barium chloride solution ($\\text{BaCl}_2$). How can one chemically distinguish between the two resulting white precipitates?",
    "questionAr": "يعطي كل من أنيون الكبريتات ($\\text{SO}_4^{2-}$) وأنيون الفوسفات ($\\text{PO}_4^{3-}$) راسباً أبيض عند إضافة محلول كلوريد الباريوم ($\\text{BaCl}_2$). كيف يمكن التمييز كيميائياً بين الراسبين البيضاوين؟",
    "optionsEn": [
      "By adding dilute hydrochloric acid ($\\text{HCl}$): barium phosphate dissolves, whereas barium sulfate does not dissolve",
      "By boiling with water: barium sulfate dissolves, whereas barium phosphate does not dissolve",
      "By adding dilute hydrochloric acid ($\\text{HCl}$): barium sulfate dissolves, whereas barium phosphate does not dissolve",
      "By adding ammonia solution: barium sulfate turns yellow, while barium phosphate turns red"
    ],
    "optionsAr": [
      "بإضافة حمض الهيدروكلوريك المخفف ($\\text{HCl}$): يذوب راسب فوسفات الباريوم، بينما لا يذوب راسب كبريتات الباريوم",
      "بالغليان مع الماء: يذوب كبريتات الباريوم ولا يذوب فوسفات الباريوم",
      "بإضافة حمض الهيدروكلوريك المخفف ($\\text{HCl}$): يذوب كبريتات الباريوم بينما لا يذوب فوسفات الباريوم",
      "بإضافة محلول النشادر: يتحول كبريتات الباريوم إلى اللون الأصفر بينما يتحول فوسفات الباريوم للأحمر"
    ],
    "correctAnswer": "By adding dilute hydrochloric acid ($\\text{HCl}$): barium phosphate dissolves, whereas barium sulfate does not dissolve",
    "correctIndex": 0,
    "hintEn": "BaSO4 is insoluble in dilute HCl because sulfuric acid is more stable than hydrochloric acid, whereas phosphoric acid is less stable and Ba3(PO4)2 dissolves.",
    "hintAr": "كبريتات الباريوم ملح لحمض الكبريتيك الأكثر ثباتاً من حمض الهيدروكلوريك فلا يذوب فيه، بينما فوسفات الباريوم يذوب في حمض الهيدروكلوريك المخفف.",
    "stepByStepSolutionEn": [
      "Adding $\\text{BaCl}_2$ to a sulfate solution forms white barium sulfate: $\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\to 2\\text{NaCl} + \\text{BaSO}_4\\downarrow$.",
      "Adding $\\text{BaCl}_2$ to a phosphate solution forms white barium phosphate: $2\\text{Na}_3\\text{PO}_4 + 3\\text{BaCl}_2 \\to 6\\text{NaCl} + \\text{Ba}_3(\\text{PO}_4)_2\\downarrow$.",
      "Upon adding dilute $\\text{HCl}$ to both precipitates:",
      "$\\text{BaSO}_4$ precipitate is **insoluble** in dilute $\\text{HCl}$.",
      "$\\text{Ba}_3(\\text{PO}_4)_2$ precipitate is **soluble** in dilute $\\text{HCl}$ forming barium chloride and phosphoric acid."
    ],
    "stepByStepSolutionAr": [
      "عند إضافة $\\text{BaCl}_2$ لمحلول الكبريتات يتكون راسب أبيض من كبريتات الباريوم: $\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\to 2\\text{NaCl} + \\text{BaSO}_4\\downarrow$.",
      "عند إضافة $\\text{BaCl}_2$ لمحلول الفوسفات يتكون راسب أبيض من فوسفات الباريوم: $2\\text{Na}_3\\text{PO}_4 + 3\\text{BaCl}_2 \\to 6\\text{NaCl} + \\text{Ba}_3(\\text{PO}_4)_2\\downarrow$.",
      "بإضافة حمض $\\text{HCl}$ المخفف لكل منهما:",
      "راسب $\\text{BaSO}_4$ **لا يذوب** في حمض $\\text{HCl}$ المخفف.",
      "راسب $\\text{Ba}_3(\\text{PO}_4)_2$ **يذوب** في حمض $\\text{HCl}$ المخفف."
    ],
    "teacherTipEn": "Dilute HCl is the key reagent to differentiate BaSO4 from Ba3(PO4)2.",
    "teacherTipAr": "حمض HCl المخفف هو الكاشف الفارق بين راسبي كبريتات الباريوم وفوسفات الباريوم."
  },
  {
    "id": "th_chem_ch2_se_05",
    "titleEn": "MoE Example 5: Identification of Cation Group III (Al3+, Fe2+, Fe3+)",
    "titleAr": "مثال الوزارة ٥: الكشف عن كاتيونات المجموعة التحليلية الثالثة (الألومنيوم والحديد II والحديد III)",
    "difficulty": "medium",
    "questionEn": "Sodium hydroxide solution ($\\text{NaOH}$) was added dropwise to three separate solutions containing $\\text{Al}^{3+}$, $\\text{Fe}^{2+}$, and $\\text{Fe}^{3+}$ ions until excess. What are the observed colors and behaviors of the precipitates?",
    "questionAr": "أضيف محلول هيدروكسيد الصوديوم ($\\text{NaOH}$) قطرة قطرة حتى الوفرة إلى ثلاثة محاليل منفصلة تحتوي على كاتيونات $\\text{Al}^{3+}$ و $\\text{Fe}^{2+}$ و $\\text{Fe}^{3+}$. ما هي ألوان وسلوك الرواسب المتكونة؟",
    "optionsEn": [
      "$\\text{Al}^{3+}$: white gelatinous precipitate that dissolves in excess $\\text{NaOH}$; $\\text{Fe}^{2+}$: white precipitate turning dirty green, insoluble in excess $\\text{NaOH}$; $\\text{Fe}^{3+}$: reddish-brown gelatinous precipitate, insoluble in excess $\\text{NaOH}$",
      "$\\text{Al}^{3+}$: reddish-brown precipitate insoluble in excess; $\\text{Fe}^{2+}$: blue precipitate dissolving in excess; $\\text{Fe}^{3+}$: white precipitate",
      "$\\text{Al}^{3+}$: white precipitate insoluble in excess; $\\text{Fe}^{2+}$: black precipitate dissolving in excess; $\\text{Fe}^{3+}$: dirty green precipitate",
      "All three form white precipitates that dissolve completely in excess $\\text{NaOH}$"
    ],
    "optionsAr": [
      "$\\text{Al}^{3+}$: راسب أبيض جيلاتيني يذوب في وفرة $\\text{NaOH}$؛ $\\text{Fe}^{2+}$: راسب أبيض يتحول لأبيض مخضر لا يذوب في الوفرة؛ $\\text{Fe}^{3+}$: راسب بني محمر جيلاتيني لا يذوب في الوفرة",
      "$\\text{Al}^{3+}$: راسب بني محمر لا يذوب في الوفرة؛ $\\text{Fe}^{2+}$: راسب أزرق يذوب في الوفرة؛ $\\text{Fe}^{3+}$: راسب أبيض",
      "$\\text{Al}^{3+}$: راسب أبيض لا يذوب في الوفرة؛ $\\text{Fe}^{2+}$: راسب أسود يذوب في الوفرة؛ $\\text{Fe}^{3+}$: راسب أبيض مخضر",
      "تكون الكاتيونات الثلاثة رواسب بيضاء تذوب جميعها في وفرة $\\text{NaOH}$"
    ],
    "correctAnswer": "$\\text{Al}^{3+}$: white gelatinous precipitate that dissolves in excess $\\text{NaOH}$; $\\text{Fe}^{2+}$: white precipitate turning dirty green, insoluble in excess $\\text{NaOH}$; $\\text{Fe}^{3+}$: reddish-brown gelatinous precipitate, insoluble in excess $\\text{NaOH}$",
    "correctIndex": 0,
    "hintEn": "Al(OH)3 is amphoteric and dissolves in excess NaOH to form soluble sodium meta-aluminate (NaAlO2).",
    "hintAr": "هيدروكسيد الألومنيوم $\\text{Al(OH)}_3$ مادة مترددة تتفاعل مع القلوي القوي $\\text{NaOH}$ مكونة ميتا ألومينات الصوديوم الذائبة في الماء $\\text{NaAlO}_2$.",
    "stepByStepSolutionEn": [
      "1. $\\text{Al}^{3+} + 3\\text{OH}^- \\to \\text{Al(OH)}_3\\downarrow$ (white gelatinous).",
      "In excess $\\text{NaOH}$: $\\text{Al(OH)}_3 + \\text{NaOH} \\to \\text{NaAlO}_2 + 2\\text{H}_2\\text{O}$ (soluble sodium meta-aluminate, precipitate completely dissolves).",
      "2. $\\text{Fe}^{2+} + 2\\text{OH}^- \\to \\text{Fe(OH)}_2\\downarrow$ (white precipitate that turns dirty green on air exposure, insoluble in excess $\\text{NaOH}$).",
      "3. $\\text{Fe}^{3+} + 3\\text{OH}^- \\to \\text{Fe(OH)}_3\\downarrow$ (reddish-brown gelatinous, insoluble in excess $\\text{NaOH}$)."
    ],
    "stepByStepSolutionAr": [
      "١. الألومنيوم: $\\text{Al}^{3+} + 3\\text{OH}^- \\to \\text{Al(OH)}_3\\downarrow$ (راسب أبيض جيلاتيني).",
      "في وفرة $\\text{NaOH}$: يذوب الراسب لتكون ميتا ألومينات الصوديوم: $\\text{Al(OH)}_3 + \\text{NaOH} \\to \\text{NaAlO}_2 + 2\\text{H}_2\\text{O}$.",
      "٢. الحديد II: $\\text{Fe}^{2+} + 2\\text{OH}^- \\to \\text{Fe(OH)}_2\\downarrow$ (راسب أبيض يتحول إلى أبيض مخضر بتعرضه للهواء ولا يذوب في الوفرة).",
      "٣. الحديد III: $\\text{Fe}^{3+} + 3\\text{OH}^- \\to \\text{Fe(OH)}_3\\downarrow$ (راسب بني محمر جيلاتيني لا يذوب في وفرة القلوي)."
    ],
    "teacherTipEn": "Notice that Al(OH)3 dissolves in excess NaOH, but it does NOT dissolve in excess NH4OH (a weak base).",
    "teacherTipAr": "هام جداً: هيدروكسيد الألومنيوم يذوب في الزيادة من محلول هيدروكسيد الصوديوم القوي، ولا يذوب في الزيادة من محلول هيدروكسيد الأمونيوم الضعيف."
  },
  {
    "id": "th_chem_ch2_se_06",
    "titleEn": "MoE Example 6: Volumetric Titration Neutralization Calculation",
    "titleAr": "مثال الوزارة ٦: مسألة المعايرة وحساب التركيز المولاري للقلوي",
    "difficulty": "medium",
    "questionEn": "In a neutralization titration, $25\\,\\text{mL}$ of a sodium hydroxide solution ($\\text{NaOH}$) required $20\\,\\text{mL}$ of $0.1\\,\\text{M}$ sulfuric acid ($\\text{H}_2\\text{SO}_4$) for complete neutralization. What is the molar concentration of the $\\text{NaOH}$ solution?",
    "questionAr": "في تجربة معايرة تعادل، تعادل $25\\,\\text{mL}$ من محلول هيدروكسيد الصوديوم ($\\text{NaOH}$) تماماً مع $20\\,\\text{mL}$ من حمض الكبريتيك ($\\text{H}_2\\text{SO}_4$) تركيزه $0.1\\,\\text{M}$. ما هو التركيز المولاري لمحلول $\\text{NaOH}$؟",
    "optionsEn": [
      "$0.16\\,\\text{M}$",
      "$0.08\\,\\text{M}$",
      "$0.32\\,\\text{M}$",
      "$0.25\\,\\text{M}$"
    ],
    "optionsAr": [
      "$0.16\\,\\text{M}$",
      "$0.08\\,\\text{M}$",
      "$0.32\\,\\text{M}$",
      "$0.25\\,\\text{M}$"
    ],
    "correctAnswer": "$0.16\\,\\text{M}$",
    "correctIndex": 0,
    "hintEn": "Balanced equation: 2 NaOH + H2SO4 -> Na2SO4 + 2 H2O. Therefore na = 1 and nb = 2 in the titration law.",
    "hintAr": "المعادلة الموزونة: $2\\text{NaOH} + \\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$، إذن $n_a = 1$ و $n_b = 2$.",
    "stepByStepSolutionEn": [
      "Balanced equation: $2\\text{NaOH} + \\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$.",
      "Stoichiometric coefficients: $n_a = 1$, $n_b = 2$.",
      "Titration formula: $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$.",
      "Substitute values: $\\frac{0.1 \\times 20}{1} = \\frac{M_b \\times 25}{2}$.",
      "$2.0 = 12.5 \\times M_b \\implies M_b = \\frac{2.0 \\times 2}{25} = \\frac{4.0}{25} = 0.16\\,\\text{M}$."
    ],
    "stepByStepSolutionAr": [
      "المعادلة الموزونة: $2\\text{NaOH} + \\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$.",
      "معاملات المعادلة: $n_a = 1$ لحمض الكبريتيك، و $n_b = 2$ لهيدروكسيد الصوديوم.",
      "قانون المعايرة: $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$.",
      "التعويض: $\\frac{0.1 \\times 20}{1} = \\frac{M_b \\times 25}{2}$.",
      "$M_b = \\frac{0.1 \\times 20 \\times 2}{25} = \\frac{4}{25} = 0.16\\,\\text{M}$."
    ],
    "teacherTipEn": "Always check the stoichiometric ratio: sulfuric acid is diprotic (na = 1), needing 2 moles of NaOH (nb = 2).",
    "teacherTipAr": "انتبه دائماً لوزن المعادلة: حمض الكبريتيك ثنائي البروتون ويتعادل مع مولين من هيدروكسيد الصوديوم."
  },
  {
    "id": "th_chem_ch2_se_07",
    "titleEn": "MoE Example 7: Water of Crystallization Gravimetric Analysis",
    "titleAr": "مثال الوزارة ٧: مسألة التحليل الكتلي بالتطاير وحساب ماء التبلور",
    "difficulty": "exam_standard",
    "questionEn": "A sample of hydrated barium chloride $(\\text{BaCl}_2 \\cdot x\\text{H}_2\\text{O})$ of mass $2.6903\\,\\text{g}$ was heated strongly until its mass became constant at $2.2923\\,\\text{g}$. What is the value of $x$ in the chemical formula? $(\\text{Ba} = 137, \\, \\text{Cl} = 35.5, \\, \\text{H} = 1, \\, \\text{O} = 16)$",
    "questionAr": "سُخنت عينة من كلوريد الباريوم المتهدرت $(\\text{BaCl}_2 \\cdot x\\text{H}_2\\text{O})$ كتلتها $2.6903\\,\\text{g}$ تسخيناً شديداً حتى ثبتت كتلتها عند $2.2923\\,\\text{g}$. احسب عدد مولات ماء التبلور $x$ في الصيغة الجزيئية. $(\\text{Ba} = 137, \\, \\text{Cl} = 35.5, \\, \\text{H} = 1, \\, \\text{O} = 16)$",
    "optionsEn": [
      "$x = 2$",
      "$x = 1$",
      "$x = 4$",
      "$x = 5$"
    ],
    "optionsAr": [
      "$x = 2$",
      "$x = 1$",
      "$x = 4$",
      "$x = 5$"
    ],
    "correctAnswer": "$x = 2$",
    "correctIndex": 0,
    "hintEn": "Mass of water = m(hydrated) - m(anhydrous) = 2.6903 - 2.2923 = 0.3980 g. Molar mass of BaCl2 = 208 g/mol, H2O = 18 g/mol.",
    "hintAr": "كتلة ماء التبلور = كتلة العينة قبل التسخين - كتلتها بعد التسخين = $0.398\\,\\text{g}$. الكتلة المولية لـ $\\text{BaCl}_2 = 208\\,\\text{g/mol}$، وللماء $= 18\\,\\text{g/mol}$.",
    "stepByStepSolutionEn": [
      "1. Mass of anhydrous $\\text{BaCl}_2 = 2.2923\\,\\text{g}$.",
      "2. Mass of water evaporated $= 2.6903 - 2.2923 = 0.3980\\,\\text{g}$.",
      "3. Molar masses: $M(\\text{BaCl}_2) = 137 + 2(35.5) = 208\\,\\text{g/mol}$, $M(\\text{H}_2\\text{O}) = 18\\,\\text{g/mol}$.",
      "4. Moles of anhydrous $\\text{BaCl}_2 = \\frac{2.2923}{208} \\approx 0.01102\\,\\text{mol}$.",
      "5. Moles of $\\text{H}_2\\text{O} = \\frac{0.3980}{18} \\approx 0.02211\\,\\text{mol}$.",
      "6. Value of $x = \\frac{n(\\text{H}_2\\text{O})}{n(\\text{BaCl}_2)} = \\frac{0.02211}{0.01102} \\approx 2$. Formula is $\\text{BaCl}_2 \\cdot 2\\text{H}_2\\text{O}$."
    ],
    "stepByStepSolutionAr": [
      "١. كتلة الملح الجاف (غير المتهدرت) $= 2.2923\\,\\text{g}$.",
      "٢. كتلة ماء التبلور المتطاير $= 2.6903 - 2.2923 = 0.3980\\,\\text{g}$.",
      "٣. الكتلة المولية: $M(\\text{BaCl}_2) = 137 + (2 \\times 35.5) = 208\\,\\text{g/mol}$، و $M(\\text{H}_2\\text{O}) = 18\\,\\text{g/mol}$.",
      "٤. عدد مولات الملح الجاف $= \\frac{2.2923}{208} = 0.01102\\,\\text{mol}$.",
      "٥. عدد مولات الماء $= \\frac{0.3980}{18} = 0.02211\\,\\text{mol}$.",
      "٦. قيمة $x = \\frac{0.02211}{0.01102} = 2$. الصيغة هي $\\text{BaCl}_2 \\cdot 2\\text{H}_2\\text{O}$."
    ],
    "teacherTipEn": "Always divide moles of water by moles of anhydrous salt to find integer coefficient x.",
    "teacherTipAr": "عدد جزيئات ماء التبلور $x$ دائماً يساوي النسبة بين عدد مولات الماء إلى عدد مولات الملح الجاف."
  },
  {
    "id": "th_chem_ch2_se_08",
    "titleEn": "MoE Example 8: Purity Percentage of Limestone via Titration",
    "titleAr": "مثال الوزارة ٨: حساب النسبة المئوية لنقاء خام كربونات الكالسيوم بالمعايرة",
    "difficulty": "exam_standard",
    "questionEn": "An impure sample of calcium carbonate ($\\text{CaCO}_3$) weighing $2.0\\,\\text{g}$ was completely reacted with $100\\,\\text{mL}$ of $0.3\\,\\text{M}$ hydrochloric acid ($\\text{HCl}$). What is the purity percentage of $\\text{CaCO}_3$ in the sample? $(\\text{Ca} = 40, \\, \\text{C} = 12, \\, \\text{O} = 16)$",
    "questionAr": "عينة غير نقية من كربونات الكالسيوم ($\\text{CaCO}_3$) كتلتها $2.0\\,\\text{g}$ تفاعلت تماماً مع $100\\,\\text{mL}$ من حمض الهيدروكلوريك ($\\text{HCl}$) تركيزه $0.3\\,\\text{M}$. احسب النسبة المئوية لنقاء كربونات الكالسيوم في العينة. $(\\text{Ca} = 40, \\, \\text{C} = 12, \\, \\text{O} = 16)$",
    "optionsEn": [
      "$75\\%$",
      "$50\\%$",
      "$85\\%$",
      "$60\\%$"
    ],
    "optionsAr": [
      "$75\\%$",
      "$50\\%$",
      "$85\\%$",
      "$60\\%$"
    ],
    "correctAnswer": "$75\\%$",
    "correctIndex": 0,
    "hintEn": "Equation: CaCO3 + 2 HCl -> CaCl2 + H2O + CO2. 1 mole of CaCO3 (100 g) reacts with 2 moles of HCl.",
    "hintAr": "المعادلة: $\\text{CaCO}_3 + 2\\text{HCl} \\to \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$. كل مول من $\\text{CaCO}_3$ (100 جرام) يتفاعل مع 2 مول من $\\text{HCl}$.",
    "stepByStepSolutionEn": [
      "Balanced equation: $\\text{CaCO}_3 + 2\\text{HCl} \\to \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$.",
      "Moles of $\\text{HCl}$ consumed $= M \\times V = 0.3 \\times 0.100 = 0.030\\,\\text{mol}$.",
      "From stoichiometry, $n(\\text{CaCO}_3) = \\frac{n(\\text{HCl})}{2} = \\frac{0.030}{2} = 0.015\\,\\text{mol}$.",
      "Molar mass of $\\text{CaCO}_3 = 40 + 12 + 3(16) = 100\\,\\text{g/mol}$.",
      "Mass of pure $\\text{CaCO}_3 = 0.015 \\times 100 = 1.5\\,\\text{g}$.",
      "Purity percentage $= \\frac{1.5\\,\\text{g}}{2.0\\,\\text{g}} \\times 100\\% = 75\\%$."
    ],
    "stepByStepSolutionAr": [
      "معادلة التفاعل: $\\text{CaCO}_3 + 2\\text{HCl} \\to \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$.",
      "عدد مولات حمض $\\text{HCl} = M \\times V = 0.3 \\times 0.100 = 0.030\\,\\text{mol}$.",
      "من وزن المعادلة: كل 1 مول $\\text{CaCO}_3$ يتفاعل مع 2 مول $\\text{HCl}$.",
      "عدد مولات $\\text{CaCO}_3$ النقية $= \\frac{0.030}{2} = 0.015\\,\\text{mol}$.",
      "الكتلة المولية لـ $\\text{CaCO}_3 = 40 + 12 + 48 = 100\\,\\text{g/mol}$.",
      "كتلة $\\text{CaCO}_3$ النقية $= 0.015 \\times 100 = 1.5\\,\\text{g}$.",
      "نسبة النقاء $= \\frac{1.5}{2.0} \\times 100\\% = 75\\%$."
    ],
    "teacherTipEn": "Purity percentage is always (mass of pure component / mass of impure sample) * 100%.",
    "teacherTipAr": "نسبة النقاء دائماً = (كتلة المادة النقية ÷ كتلة العينة الكلية غير النقية) × 100%."
  },
  {
    "id": "th_chem_ch2_se_09",
    "titleEn": "MoE Example 9: Precipitation Gravimetric Analysis of Chloride",
    "titleAr": "مثال الوزارة ٩: التحليل الكتلي بطريقة الترسيب لتعيين نسبة الكلوريد",
    "difficulty": "exam_standard",
    "questionEn": "A solution of sodium chloride ($\\text{NaCl}$) containing impurities was treated with excess silver nitrate solution ($\\text{AgNO}_3$). A dry precipitate of silver chloride ($\\text{AgCl}$) weighing $2.87\\,\\text{g}$ was collected. What mass of chlorine ($\\text{Cl}^-$) was present in the original sample? $(\\text{Ag} = 108, \\, \\text{Cl} = 35.5)$",
    "questionAr": "أضيف وفرة من محلول نترات الفضة ($\\text{AgNO}_3$) إلى محلول يحتوي على كلوريد الصوديوم غير النقي، فتكون راسب من كلوريد الفضة ($\\text{AgCl}$) كتلته بعد التجفيف $2.87\\,\\text{g}$. احسب كتلة الكلور في العينة. $(\\text{Ag} = 108, \\, \\text{Cl} = 35.5)$",
    "optionsEn": [
      "$0.71\\,\\text{g}$",
      "$0.355\\,\\text{g}$",
      "$1.42\\,\\text{g}$",
      "$2.16\\,\\text{g}$"
    ],
    "optionsAr": [
      "$0.71\\,\\text{g}$",
      "$0.355\\,\\text{g}$",
      "$1.42\\,\\text{g}$",
      "$2.16\\,\\text{g}$"
    ],
    "correctAnswer": "$0.71\\,\\text{g}$",
    "correctIndex": 0,
    "hintEn": "Molar mass of AgCl = 108 + 35.5 = 143.5 g/mol. Mass of Cl = 2.87 * (35.5 / 143.5).",
    "hintAr": "الكتلة المولية لـ $\\text{AgCl} = 143.5\\,\\text{g/mol}$. كتلة الكلور = كتلة الراسب × (35.5 ÷ 143.5).",
    "stepByStepSolutionEn": [
      "Reaction: $\\text{Cl}^- + \\text{Ag}^+ \\to \\text{AgCl}\\downarrow$.",
      "Molar mass of $\\text{AgCl} = 108 + 35.5 = 143.5\\,\\text{g/mol}$.",
      "Every $143.5\\,\\text{g}$ of $\\text{AgCl}$ contains $35.5\\,\\text{g}$ of $\\text{Cl}^-$.",
      "Mass of $\\text{Cl}^- = 2.87 \\times \\frac{35.5}{143.5} = 2.87 \\times 0.247386 = 0.71\\,\\text{g}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة الترسيب: $\\text{Cl}^- + \\text{Ag}^+ \\to \\text{AgCl}\\downarrow$.",
      "الكتلة المولية لـ $\\text{AgCl} = 108 + 35.5 = 143.5\\,\\text{g/mol}$.",
      "كل $143.5\\,\\text{g}$ من $\\text{AgCl}$ تحتوي على $35.5\\,\\text{g}$ من الكلور.",
      "كتلة الكلور $= 2.87 \\times \\frac{35.5}{143.5} = 0.71\\,\\text{g}$."
    ],
    "teacherTipEn": "In gravimetric precipitation, use the gravimetric factor (atomic mass of analyte / formula mass of precipitate).",
    "teacherTipAr": "في التحليل الكتلي بالترسيب، نستخدم المعامل الوزني: نسبة الكتلة الذرية للعنصر المراد تقديره إلى الكتلة المولية للراسب."
  },
  {
    "id": "th_chem_ch2_se_10",
    "titleEn": "MoE Example 10: Quantitative Titration of a Mixture of NaOH and Na2CO3",
    "titleAr": "مثال الوزارة ١٠: المسائل المتقدمة لمخاليط القلويات والكربونات",
    "difficulty": "hots",
    "questionEn": "A $0.5\\,\\text{g}$ mixture of sodium hydroxide ($\\text{NaOH}$) and sodium chloride ($\\text{NaCl}$) was dissolved in water and titrated against $0.1\\,\\text{M}$ hydrochloric acid ($\\text{HCl}$). The volume of $\\text{HCl}$ needed to reach the end point was $100\\,\\text{mL}$. What is the percentage of $\\text{NaCl}$ in the mixture? $(\\text{Na} = 23, \\, \\text{O} = 16, \\, \\text{H} = 1, \\, \\text{Cl} = 35.5)$",
    "questionAr": "أذيب خليط كتلته $0.5\\,\\text{g}$ من هيدروكسيد الصوديوم ($\\text{NaOH}$) وكلوريد الصوديوم ($\\text{NaCl}$) في الماء ولزم لمعايرته $100\\,\\text{mL}$ من حمض الهيدروكلوريك ($\\text{HCl}$) تركيزه $0.1\\,\\text{M}$. احسب النسبة المئوية لكلوريد الصوديوم في الخليط. $(\\text{Na} = 23, \\, \\text{O} = 16, \\, \\text{H} = 1, \\, \\text{Cl} = 35.5)$",
    "optionsEn": [
      "$20\\%$",
      "$80\\%$",
      "$40\\%$",
      "$10\\%$"
    ],
    "optionsAr": [
      "$20\\%$",
      "$80\\%$",
      "$40\\%$",
      "$10\\%$"
    ],
    "correctAnswer": "$20\\%$",
    "correctIndex": 0,
    "hintEn": "Only NaOH reacts with HCl; NaCl does not react. Moles of HCl = 0.1 * 0.1 = 0.01 mol = moles of NaOH. Mass of NaOH = 0.01 * 40 = 0.4 g.",
    "hintAr": "حمض HCl يتفاعل فقط مع NaOH ولا يتفاعل مع NaCl. عدد مولات الحمض $= 0.01\\,\\text{mol} =$ عدد مولات NaOH. كتلة NaOH $= 0.4\\,\\text{g}$، وكتلة NaCl $= 0.1\\,\\text{g}$.",
    "stepByStepSolutionEn": [
      "$\\text{NaCl}$ does not react with $\\text{HCl}$. Only $\\text{NaOH}$ reacts: $\\text{NaOH} + \\text{HCl} \\to \\text{NaCl} + \\text{H}_2\\text{O}$.",
      "Moles of $\\text{HCl} = M \\times V = 0.1 \\times 0.100 = 0.010\\,\\text{mol}$.",
      "From 1:1 stoichiometry, moles of $\\text{NaOH} = 0.010\\,\\text{mol}$.",
      "Molar mass of $\\text{NaOH} = 23 + 16 + 1 = 40\\,\\text{g/mol}$.",
      "Mass of $\\text{NaOH} = 0.010 \\times 40 = 0.40\\,\\text{g}$.",
      "Mass of $\\text{NaCl} = \\text{Total mass} - \\text{Mass of NaOH} = 0.50 - 0.40 = 0.10\\,\\text{g}$.",
      "Percentage of $\\text{NaCl} = \\frac{0.10}{0.50} \\times 100\\% = 20\\%$."
    ],
    "stepByStepSolutionAr": [
      "كلوريد الصوديوم لا يتفاعل مع حمض الهيدروكلوريك، والتفاعل يتم فقط بين $\\text{NaOH}$ وحمض $\\text{HCl}$: $\\text{NaOH} + \\text{HCl} \\to \\text{NaCl} + \\text{H}_2\\text{O}$.",
      "عدد مولات الحمض المستهلك $= M \\times V = 0.1 \\times 0.100 = 0.010\\,\\text{mol}$.",
      "بما أن النسبة 1:1، فإن عدد مولات هيدروكسيد الصوديوم $= 0.010\\,\\text{mol}$.",
      "الكتلة المولية لـ $\\text{NaOH} = 23 + 16 + 1 = 40\\,\\text{g/mol}$.",
      "كتلة هيدروكسيد الصوديوم $= 0.010 \\times 40 = 0.40\\,\\text{g}$.",
      "كتلة كلوريد الصوديوم في الخليط $= 0.50 - 0.40 = 0.10\\,\\text{g}$.",
      "النسبة المئوية لكلوريد الصوديوم $= \\frac{0.10}{0.50} \\times 100\\% = 20\\%$."
    ],
    "teacherTipEn": "Pay close attention to what is asked: the question asked for percentage of NaCl, not NaOH.",
    "teacherTipAr": "انتبه للمطلوب بدقة: السؤال يطلب النسبة المئوية لكلوريد الصوديوم (المادة غير المتفاعلة) وليس هيدروكسيد الصوديوم."
  }
];

export const thChemCh2Exercises: SolvedProblem[] = [
  {
    "id": "th_chem_ch2_ex_01",
    "titleEn": "Exercise 1: Detection of Nitrite vs Nitrate via KMnO4",
    "titleAr": "تمرين ١: التمييز بين النيتريت والنترات بواسطة برمنجانات البوتاسيوم",
    "difficulty": "easy",
    "questionEn": "Acidified potassium permanganate solution ($\\text{KMnO}_4 / \\text{H}_2\\text{SO}_4$) was added to two separate test tubes containing sodium nitrite ($\\text{NaNO}_2$) and sodium nitrate ($\\text{NaNO}_3$). What is observed?",
    "questionAr": "أضيف محلول برمنجانات البوتاسيوم المحمضة بحمض الكبريتيك ($\\text{KMnO}_4 / \\text{H}_2\\text{SO}_4$) إلى أنبوبتي اختبار تحتوي إحداهما على نيتريت الصوديوم ($\\text{NaNO}_2$) والأخرى على نترات الصوديوم ($\\text{NaNO}_3$). ماذا يُلاحظ؟",
    "optionsEn": [
      "The purple color is discharged with $\\text{NaNO}_2$ because it oxidizes to nitrate, whereas the color persists with $\\text{NaNO}_3$",
      "The purple color is discharged with $\\text{NaNO}_3$ and persists with $\\text{NaNO}_2$",
      "Both solutions discharge the purple color immediately",
      "A brown ring forms in both test tubes"
    ],
    "optionsAr": [
      "يزول اللون البنفسجي مع نيتريت الصوديوم لأكسدته إلى نترات، بينما يظل اللون ثابتاً مع نترات الصوديوم",
      "يزول اللون البنفسجي مع نترات الصوديوم ويبقى ثابتاً مع نيتريت الصوديوم",
      "يزول اللون البنفسجي في كلا الأنبوبتين فوراً",
      "تتكون حلقة بنية في كلا الأنبوبتين"
    ],
    "correctAnswer": "The purple color is discharged with $\\text{NaNO}_2$ because it oxidizes to nitrate, whereas the color persists with $\\text{NaNO}_3$",
    "correctIndex": 0,
    "hintEn": "Nitrite (oxidation state +3) can be oxidized to nitrate (+5). Nitrate is already at maximum oxidation state (+5) and resists oxidation.",
    "hintAr": "النيتروجين في النيتريت عدد تأكسده +3 قابل للأكسدة إلى نترات (+5) فيختزل البرمنجانات ويزيل لونها، بينما النترات عدد تأكسد النيتروجين فيها +5 (أقصى قيمة) فلا تتأكسد.",
    "stepByStepSolutionEn": [
      "Nitrite (oxidation state +3) can be oxidized to nitrate (+5). Nitrate is already at maximum oxidation state (+5) and resists oxidation.",
      "Therefore, the correct answer is: The purple color is discharged with $\\text{NaNO}_2$ because it oxidizes to nitrate, whereas the color persists with $\\text{NaNO}_3$"
    ],
    "stepByStepSolutionAr": [
      "النيتروجين في النيتريت عدد تأكسده +3 قابل للأكسدة إلى نترات (+5) فيختزل البرمنجانات ويزيل لونها، بينما النترات عدد تأكسد النيتروجين فيها +5 (أقصى قيمة) فلا تتأكسد.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يزول اللون البنفسجي مع نيتريت الصوديوم لأكسدته إلى نترات، بينما يظل اللون ثابتاً مع نترات الصوديوم"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_02",
    "titleEn": "Exercise 2: Brown Ring Test Chemistry",
    "titleAr": "تمرين ٢: الأساس الكيميائي لتجربة الحلقة البنية للكشف عن النترات",
    "difficulty": "medium",
    "questionEn": "What is the chemical formula of the compound responsible for the brown ring formed at the junction between two liquid layers in the confirmatory test for nitrate ($\\text{NO}_3^-$)?",
    "questionAr": "ما الصيغة الكيميائية للمركب المسبب لظهور الحلقة البنية عند السطح الفاصل بين السائلين في التجربة التأكيدية لأنيون النترات ($\\text{NO}_3^-$)؟",
    "optionsEn": [
      "$[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$",
      "$\\text{Fe}_2(\\text{SO}_4)_3$",
      "$\\text{Fe(NO}_3)_3$",
      "$\\text{Cu(NO}_3)_2$"
    ],
    "optionsAr": [
      "$[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$",
      "$\\text{Fe}_2(\\text{SO}_4)_3$",
      "$\\text{Fe(NO}_3)_3$",
      "$\\text{Cu(NO}_3)_2$"
    ],
    "correctAnswer": "$[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$",
    "correctIndex": 0,
    "hintEn": "The brown ring is a nitroso-iron(II) complex: pentaaquanitrosyliron(II) sulfate.",
    "hintAr": "مركب الحلقة البنية هو كبريتات خماسي أكوا نيتروزيل الحديد II: $[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$ وتزول بالرج أو التسخين.",
    "stepByStepSolutionEn": [
      "The brown ring is a nitroso-iron(II) complex: pentaaquanitrosyliron(II) sulfate.",
      "Therefore, the correct answer is: $[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$"
    ],
    "stepByStepSolutionAr": [
      "مركب الحلقة البنية هو كبريتات خماسي أكوا نيتروزيل الحديد II: $[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$ وتزول بالرج أو التسخين.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_03",
    "titleEn": "Exercise 3: Analytical Group II Cation Precipitation",
    "titleAr": "تمرين ٣: كشف وترسيب كاتيون المجموعة التحليلية الثانية (النحاس II)",
    "difficulty": "medium",
    "questionEn": "Under which chemical conditions is copper(II) cation ($\\text{Cu}^{2+}$) precipitated as black copper(II) sulfide ($\\text{CuS}$)?",
    "questionAr": "تحت أي شروط كيميائية يتم ترسيب كاتيون النحاس II ($\\text{Cu}^{2+}$) على هيئة كبريتيد نحاس II أسود ($\\text{CuS}$)؟",
    "optionsEn": [
      "Passing hydrogen sulfide gas ($\\text{H}_2\\text{S}$) in an acidic medium acidified with dilute $\\text{HCl}$",
      "Passing $\\text{H}_2\\text{S}$ in an alkaline medium containing ammonia",
      "Adding dilute hydrochloric acid ($\\text{HCl}$) alone in the cold",
      "Adding ammonium carbonate solution in neutral medium"
    ],
    "optionsAr": [
      "إمرار غاز كبريتيد الهيدروجين ($\\text{H}_2\\text{S}$) في وسط حمضي محمض بحمض $\\text{HCl}$ المخفف",
      "إمرار غاز $\\text{H}_2\\text{S}$ في وسط قلوي يحتوي على النشادر",
      "إضافة حمض الهيدروكلوريك المخفف بمفرده على البارد",
      "إضافة محلول كربونات الأمونيوم في وسط متعادل"
    ],
    "correctAnswer": "Passing hydrogen sulfide gas ($\\text{H}_2\\text{S}$) in an acidic medium acidified with dilute $\\text{HCl}$",
    "correctIndex": 0,
    "hintEn": "Group II cations precipitate as sulfides in acidic medium (HCl + H2S).",
    "hintAr": "كاشف المجموعة التحليلية الثانية هو غاز $\\text{H}_2\\text{S}$ في وسط حمضي بحمض $\\text{HCl}$ المخفف لترسيب كاتيون $\\text{Cu}^{2+}$ على هيئة $\\text{CuS}$ أسود يذوب في حمض النيتريك الساخن.",
    "stepByStepSolutionEn": [
      "Group II cations precipitate as sulfides in acidic medium (HCl + H2S).",
      "Therefore, the correct answer is: Passing hydrogen sulfide gas ($\\text{H}_2\\text{S}$) in an acidic medium acidified with dilute $\\text{HCl}$"
    ],
    "stepByStepSolutionAr": [
      "كاشف المجموعة التحليلية الثانية هو غاز $\\text{H}_2\\text{S}$ في وسط حمضي بحمض $\\text{HCl}$ المخفف لترسيب كاتيون $\\text{Cu}^{2+}$ على هيئة $\\text{CuS}$ أسود يذوب في حمض النيتريك الساخن.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: إمرار غاز كبريتيد الهيدروجين ($\\text{H}_2\\text{S}$) في وسط حمضي محمض بحمض $\\text{HCl}$ المخفف"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_04",
    "titleEn": "Exercise 4: Identification of Calcium Cation in Analytical Group V",
    "titleAr": "تمرين ٤: كشف وترسيب كاتيون الكالسيوم في المجموعة التحليلية الخامسة",
    "difficulty": "easy",
    "questionEn": "Which reagent is used as the primary group reagent for Analytical Group V to precipitate calcium cations ($\\text{Ca}^{2+}$), and what color does $\\text{Ca}^{2+}$ impart in the dry flame test?",
    "questionAr": "ما هو كاشف المجموعة التحليلية الخامسة لترسيب كاتيون الكالسيوم ($\\text{Ca}^{2+}$)، وما اللون الذي يعطيه في الكشف الجاف (كشف اللهب)؟",
    "optionsEn": [
      "Ammonium carbonate solution ($(\\text{NH}_4)_2\\text{CO}_3$) forming white $\\text{CaCO}_3$; flame test gives a brick-red color",
      "Sodium hydroxide solution forming gelatinous white precipitate; flame test gives a green color",
      "Dilute hydrochloric acid forming white precipitate; flame test gives a golden yellow color",
      "Ammonium chloride forming black precipitate; flame test gives a violet color"
    ],
    "optionsAr": [
      "محلول كربونات الأمونيوم ($(\\text{NH}_4)_2\\text{CO}_3$) مكوناً راسباً أبيض من $\\text{CaCO}_3$؛ ويعطي في كشف اللهب لوناً أحمر طوبياً",
      "محلول هيدروكسيد الصوديوم مكوناً راسباً أبيض جيلاتينياً؛ ولهب بنزن بلون أخضر",
      "حمض الهيدروكلوريك المخفف مكوناً راسباً أبيض؛ ولهب بنزن بلون أصفر ذهبي",
      "كلوريد الأمونيوم مكوناً راسباً أسود؛ ولهب بنزن بلون بنفسجي"
    ],
    "correctAnswer": "Ammonium carbonate solution ($(\\text{NH}_4)_2\\text{CO}_3$) forming white $\\text{CaCO}_3$; flame test gives a brick-red color",
    "correctIndex": 0,
    "hintEn": "Group V reagent is (NH4)2CO3; dry flame imparts a brick-red color to non-luminous Bunsen flame.",
    "hintAr": "كاشف المجموعة الخامسة هو كربونات الأمونيوم، والكشف الجاف لكاتيون الكالسيوم يلون لهب بنزن غير المضيء باللون الأحمر الطوبي.",
    "stepByStepSolutionEn": [
      "Group V reagent is (NH4)2CO3; dry flame imparts a brick-red color to non-luminous Bunsen flame.",
      "Therefore, the correct answer is: Ammonium carbonate solution ($(\\text{NH}_4)_2\\text{CO}_3$) forming white $\\text{CaCO}_3$; flame test gives a brick-red color"
    ],
    "stepByStepSolutionAr": [
      "كاشف المجموعة الخامسة هو كربونات الأمونيوم، والكشف الجاف لكاتيون الكالسيوم يلون لهب بنزن غير المضيء باللون الأحمر الطوبي.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: محلول كربونات الأمونيوم ($(\\text{NH}_4)_2\\text{CO}_3$) مكوناً راسباً أبيض من $\\text{CaCO}_3$؛ ويعطي في كشف اللهب لوناً أحمر طوبياً"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_05",
    "titleEn": "Exercise 5: Acid Radical Evolution of Halogen Vapors",
    "titleAr": "تمرين ٥: تصاعد أبخرة البروم واليود وتأثيرها على ورقة النشا",
    "difficulty": "medium",
    "questionEn": "When concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$) is added to two solid salts, orange-red vapors evolve from salt (1) turning starch paper yellow, while violet vapors evolve from salt (2) turning starch paper blue. What are the two acid radicals?",
    "questionAr": "عند إضافة حمض الكبريتيك المركز الساخن إلى ملحين صلبين، تصاعدت من الملح (1) أبخرة برتقالية حمراء تصفر ورقة مبللة بالنشا، بينما تصاعدت من الملح (2) أبخرة بنفسجية تزرق ورقة مبللة بالنشا. ما هما الأنيونان؟",
    "optionsEn": [
      "(1) Bromide ($\\text{Br}^-$) and (2) Iodide ($\\text{I}^-$)",
      "(1) Chloride ($\\text{Cl}^-$) and (2) Bromide ($\\text{Br}^-$)",
      "(1) Nitrate ($\\text{NO}_3^-$) and (2) Nitrite ($\\text{NO}_2^-$)",
      "(1) Iodide ($\\text{I}^-$) and (2) Bromide ($\\text{Br}^-$)"
    ],
    "optionsAr": [
      "(1) البروميد ($\\text{Br}^-$) و (2) اليوديد ($\\text{I}^-$)",
      "(1) الكلوريد ($\\text{Cl}^-$) و (2) البروميد ($\\text{Br}^-$)",
      "(1) النترات ($\\text{NO}_3^-$) و (2) النيتريت ($\\text{NO}_2^-$)",
      "(1) اليوديد ($\\text{I}^-$) و (2) البروميد ($\\text{Br}^-$)"
    ],
    "correctAnswer": "(1) Bromide ($\\text{Br}^-$) and (2) Iodide ($\\text{I}^-$)",
    "correctIndex": 0,
    "hintEn": "Bromine vapors (Br2) are orange-red (turn starch yellow); Iodine vapors (I2) are violet (turn starch blue).",
    "hintAr": "أبخرة البروم $\\text{Br}_2$ برتقالية حمراء تصفر ورقة النشا، وأبخرة اليود $\\text{I}_2$ بنفسجية تزرق ورقة النشا.",
    "stepByStepSolutionEn": [
      "Bromine vapors (Br2) are orange-red (turn starch yellow); Iodine vapors (I2) are violet (turn starch blue).",
      "Therefore, the correct answer is: (1) Bromide ($\\text{Br}^-$) and (2) Iodide ($\\text{I}^-$)"
    ],
    "stepByStepSolutionAr": [
      "أبخرة البروم $\\text{Br}_2$ برتقالية حمراء تصفر ورقة النشا، وأبخرة اليود $\\text{I}_2$ بنفسجية تزرق ورقة النشا.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: (1) البروميد ($\\text{Br}^-$) و (2) اليوديد ($\\text{I}^-$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_06",
    "titleEn": "Exercise 6: Ammonia White Fumes Confirmatory Test for Chloride",
    "titleAr": "تمرين ٦: سحب كلوريد الأمونيوم البيضاء للكشف عن غاز كلوريد الهيدروجين",
    "difficulty": "easy",
    "questionEn": "A glass rod moistened with ammonia solution ($\\text{NH}_4\\text{OH}$) is brought near the mouth of a test tube releasing colorless hydrogen chloride gas ($\\text{HCl}$). What is formed?",
    "questionAr": "قُربت ساق زجاجية مبللة بمحلول النشادر ($\\text{NH}_4\\text{OH}$) إلى فوهة أنبوبة اختبار يتصاعد منها غاز كلوريد الهيدروجين ($\\text{HCl}$) عديم اللون. ما الذي يتكون؟",
    "optionsEn": [
      "Dense white fumes of solid ammonium chloride particles ($\\text{NH}_4\\text{Cl}$)",
      "A black coating on the glass rod",
      "Dense brown fumes of nitrogen dioxide",
      "A yellow precipitate on the glass wall"
    ],
    "optionsAr": [
      "سحب بيضاء كثيفة من دقائق كلوريد الأمونيوم الصلبة ($\\text{NH}_4\\text{Cl}$)",
      "طبقة سوداء على الساق الزجاجية",
      "أبخرة بنية كثيفة من ثاني أكسيد النيتروجين",
      "راسب أصفر على جدار الأنبوبة"
    ],
    "correctAnswer": "Dense white fumes of solid ammonium chloride particles ($\\text{NH}_4\\text{Cl}$)",
    "correctIndex": 0,
    "hintEn": "NH3(g) + HCl(g) -> NH4Cl(s) (dense white fumes).",
    "hintAr": "يتفاعل غاز النشادر المتصاعد من المحلول مع غاز كلوريد الهيدروجين مكوناً سحباً بيضاء كثيفة من كلوريد الأمونيوم: $\\text{NH}_3 + \\text{HCl} \\to \\text{NH}_4\\text{Cl}$.",
    "stepByStepSolutionEn": [
      "NH3(g) + HCl(g) -> NH4Cl(s) (dense white fumes).",
      "Therefore, the correct answer is: Dense white fumes of solid ammonium chloride particles ($\\text{NH}_4\\text{Cl}$)"
    ],
    "stepByStepSolutionAr": [
      "يتفاعل غاز النشادر المتصاعد من المحلول مع غاز كلوريد الهيدروجين مكوناً سحباً بيضاء كثيفة من كلوريد الأمونيوم: $\\text{NH}_3 + \\text{HCl} \\to \\text{NH}_4\\text{Cl}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: سحب بيضاء كثيفة من دقائق كلوريد الأمونيوم الصلبة ($\\text{NH}_4\\text{Cl}$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_07",
    "titleEn": "Exercise 7: Quantitative Neutralization with Dibasic Acid",
    "titleAr": "تمرين ٧: معايرة التعادل بين هيدروكسيد البوتاسيوم وحمض النيتريك",
    "difficulty": "medium",
    "questionEn": "What volume of $0.2\\,\\text{M}$ nitric acid ($\\text{HNO}_3$) is required to completely neutralize $40\\,\\text{mL}$ of $0.15\\,\\text{M}$ potassium hydroxide solution ($\\text{KOH}$)?",
    "questionAr": "ما حجم حمض النيتريك ($\\text{HNO}_3$) تركيزه $0.2\\,\\text{M}$ اللازم للتعادل تماماً مع $40\\,\\text{mL}$ من محلول هيدروكسيد البوتاسيوم ($\\text{KOH}$) تركيزه $0.15\\,\\text{M}$؟",
    "optionsEn": [
      "$30\\,\\text{mL}$",
      "$20\\,\\text{mL}$",
      "$40\\,\\text{mL}$",
      "$60\\,\\text{mL}$"
    ],
    "optionsAr": [
      "$30\\,\\text{mL}$",
      "$20\\,\\text{mL}$",
      "$40\\,\\text{mL}$",
      "$60\\,\\text{mL}$"
    ],
    "correctAnswer": "$30\\,\\text{mL}$",
    "correctIndex": 0,
    "hintEn": "KOH + HNO3 -> KNO3 + H2O. na = 1, nb = 1. Ma * Va = Mb * Vb -> 0.2 * Va = 0.15 * 40.",
    "hintAr": "المعادلة: $\\text{KOH} + \\text{HNO}_3 \\to \\text{KNO}_3 + \\text{H}_2\\text{O}$ نسبة المولات 1:1. $0.2 \\times V_a = 0.15 \\times 40$.",
    "stepByStepSolutionEn": [
      "KOH + HNO3 -> KNO3 + H2O. na = 1, nb = 1. Ma * Va = Mb * Vb -> 0.2 * Va = 0.15 * 40.",
      "Therefore, the correct answer is: $30\\,\\text{mL}$"
    ],
    "stepByStepSolutionAr": [
      "المعادلة: $\\text{KOH} + \\text{HNO}_3 \\to \\text{KNO}_3 + \\text{H}_2\\text{O}$ نسبة المولات 1:1. $0.2 \\times V_a = 0.15 \\times 40$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $30\\,\\text{mL}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_08",
    "titleEn": "Exercise 8: Identification of Black Precipitate with Lead Acetate",
    "titleAr": "تمرين ٨: كشف أنيون الكبريتيد بورقة أسيتات الرصاص II",
    "difficulty": "easy",
    "questionEn": "Which gas evolves upon adding dilute $\\text{HCl}$ to sodium sulfide ($\\text{Na}_2\\text{S}$) and turns paper wet with lead(II) acetate black?",
    "questionAr": "ما هو الغاز المتصاعد عند إضافة حمض $\\text{HCl}$ المخفف إلى كبريتيد الصوديوم ($\\text{Na}_2\\text{S}$) ويسود ورقة مبللة بمحلول أسيتات الرصاص II؟",
    "optionsEn": [
      "Hydrogen sulfide gas ($\\text{H}_2\\text{S}$), forming black lead(II) sulfide ($\\text{PbS}$)",
      "Sulfur dioxide gas ($\\text{SO}_2$), forming white lead sulfate",
      "Carbon dioxide gas ($\\text{CO}_2$), forming calcium carbonate",
      "Nitrogen dioxide gas ($\\text{NO}_2$), forming copper nitrate"
    ],
    "optionsAr": [
      "غاز كبريتيد الهيدروجين ($\\text{H}_2\\text{S}$)، مكوناً كبريتيد الرصاص II الأسود ($\\text{PbS}$)",
      "غاز ثاني أكسيد الكبريت ($\\text{SO}_2$)",
      "غاز ثاني أكسيد الكربون ($\\text{CO}_2$)",
      "غاز ثاني أكسيد النيتروجين ($\\text{NO}_2$)"
    ],
    "correctAnswer": "Hydrogen sulfide gas ($\\text{H}_2\\text{S}$), forming black lead(II) sulfide ($\\text{PbS}$)",
    "correctIndex": 0,
    "hintEn": "H2S has a rotten egg odor and reacts with (CH3COO)2Pb to precipitate black PbS.",
    "hintAr": "غاز كبريتيد الهيدروجين ذو رائحة كريهة ويكون راسباً أسود من كبريتيد الرصاص II: $\\text{H}_2\\text{S} + (\\text{CH}_3\\text{COO})_2\\text{Pb} \\to \\text{PbS}\\downarrow + 2\\text{CH}_3\\text{COOH}$.",
    "stepByStepSolutionEn": [
      "H2S has a rotten egg odor and reacts with (CH3COO)2Pb to precipitate black PbS.",
      "Therefore, the correct answer is: Hydrogen sulfide gas ($\\text{H}_2\\text{S}$), forming black lead(II) sulfide ($\\text{PbS}$)"
    ],
    "stepByStepSolutionAr": [
      "غاز كبريتيد الهيدروجين ذو رائحة كريهة ويكون راسباً أسود من كبريتيد الرصاص II: $\\text{H}_2\\text{S} + (\\text{CH}_3\\text{COO})_2\\text{Pb} \\to \\text{PbS}\\downarrow + 2\\text{CH}_3\\text{COOH}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: غاز كبريتيد الهيدروجين ($\\text{H}_2\\text{S}$)، مكوناً كبريتيد الرصاص II الأسود ($\\text{PbS}$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_09",
    "titleEn": "Exercise 9: Determination of Mass of Dissolved Base",
    "titleAr": "تمرين ٩: حساب كتلة القاعدة المذابة في حجم معين بعد المعايرة",
    "difficulty": "medium",
    "questionEn": "If $20\\,\\text{mL}$ of a sodium hydroxide solution ($\\text{NaOH}$) requires $10\\,\\text{mL}$ of $0.2\\,\\text{M}$ sulfuric acid ($\\text{H}_2\\text{SO}_4$) for neutralization, what is the mass of $\\text{NaOH}$ dissolved in $500\\,\\text{mL}$ of this solution? $(\\text{Na} = 23, \\, \\text{O} = 16, \\, \\text{H} = 1)$",
    "questionAr": "إذا تعادل $20\\,\\text{mL}$ من محلول هيدروكسيد الصوديوم ($\\text{NaOH}$) مع $10\\,\\text{mL}$ من حمض الكبريتيك ($\\text{H}_2\\text{SO}_4$) تركيزه $0.2\\,\\text{M}$، فما كتلة $\\text{NaOH}$ المذابة في $500\\,\\text{mL}$ من هذا المحلول؟ $(\\text{Na} = 23, \\, \\text{O} = 16, \\, \\text{H} = 1)$",
    "optionsEn": [
      "$4.0\\,\\text{g}$",
      "$2.0\\,\\text{g}$",
      "$8.0\\,\\text{g}$",
      "$1.0\\,\\text{g}$"
    ],
    "optionsAr": [
      "$4.0\\,\\text{g}$",
      "$2.0\\,\\text{g}$",
      "$8.0\\,\\text{g}$",
      "$1.0\\,\\text{g}$"
    ],
    "correctAnswer": "$4.0\\,\\text{g}$",
    "correctIndex": 0,
    "hintEn": "2 NaOH + H2SO4 -> Na2SO4 + 2 H2O. Mb = (2 * Ma * Va) / Vb = (2 * 0.2 * 10) / 20 = 0.2 M. Mass = M * V(L) * Mm = 0.2 * 0.5 * 40 = 4.0 g.",
    "hintAr": "تركيز القلوي $= 0.2\\,\\text{M}$. الكتلة $= M \\times V_{(\\text{L})} \\times M_m = 0.2 \\times 0.5 \\times 40 = 4.0\\,\\text{g}$.",
    "stepByStepSolutionEn": [
      "2 NaOH + H2SO4 -> Na2SO4 + 2 H2O. Mb = (2 * Ma * Va) / Vb = (2 * 0.2 * 10) / 20 = 0.2 M. Mass = M * V(L) * Mm = 0.2 * 0.5 * 40 = 4.0 g.",
      "Therefore, the correct answer is: $4.0\\,\\text{g}$"
    ],
    "stepByStepSolutionAr": [
      "تركيز القلوي $= 0.2\\,\\text{M}$. الكتلة $= M \\times V_{(\\text{L})} \\times M_m = 0.2 \\times 0.5 \\times 40 = 4.0\\,\\text{g}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $4.0\\,\\text{g}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_10",
    "titleEn": "Exercise 10: Percentage of Water in Hydrated Copper Sulfate",
    "titleAr": "تمرين ١٠: حساب النسبة المئوية لماء التبلور في كبريتات النحاس المتهدرتة",
    "difficulty": "medium",
    "questionEn": "What is the theoretical percentage of water of crystallization in blue vitriol $(\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O})$? $(\\text{Cu} = 63.5, \\, \\text{S} = 32, \\, \\text{O} = 16, \\, \\text{H} = 1)$",
    "questionAr": "ما النسبة المئوية الكتلية النظرية لماء التبلور في بلورات التوتيا الزرقاء $(\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O})$؟ $(\\text{Cu} = 63.5, \\, \\text{S} = 32, \\, \\text{O} = 16, \\, \\text{H} = 1)$",
    "optionsEn": [
      "$36.07\\%$",
      "$25.50\\%$",
      "$45.20\\%$",
      "$18.00\\%$"
    ],
    "optionsAr": [
      "$36.07\\%$",
      "$25.50\\%$",
      "$45.20\\%$",
      "$18.00\\%$"
    ],
    "correctAnswer": "$36.07\\%$",
    "correctIndex": 0,
    "hintEn": "Molar mass of CuSO4.5H2O = 63.5 + 32 + 64 + 5(18) = 249.5 g/mol. Mass of 5H2O = 90 g. % = (90 / 249.5) * 100% = 36.07%.",
    "hintAr": "الكتلة المولية للعينة المتهدرتة $= 249.5\\,\\text{g/mol}$. كتلة 5 مول ماء $= 90\\,\\text{g}$. النسبة $= (90 \\div 249.5) \\times 100\\% = 36.07\\%$.",
    "stepByStepSolutionEn": [
      "Molar mass of CuSO4.5H2O = 63.5 + 32 + 64 + 5(18) = 249.5 g/mol. Mass of 5H2O = 90 g. % = (90 / 249.5) * 100% = 36.07%.",
      "Therefore, the correct answer is: $36.07\\%$"
    ],
    "stepByStepSolutionAr": [
      "الكتلة المولية للعينة المتهدرتة $= 249.5\\,\\text{g/mol}$. كتلة 5 مول ماء $= 90\\,\\text{g}$. النسبة $= (90 \\div 249.5) \\times 100\\% = 36.07\\%$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $36.07\\%$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_11",
    "titleEn": "Exercise 11: Identifying Basic Radical Precipitated by H2S",
    "titleAr": "تمرين ١١: الكشف عن الكاتيون المترسب ككبريتيد في الوسط الحمضي",
    "difficulty": "easy",
    "questionEn": "Which of the following cations forms a black precipitate when hydrogen sulfide gas ($\\text{H}_2\\text{S}$) is passed through its acidic aqueous solution?",
    "questionAr": "أي من الكاتيونات الآتية يكون راسباً أسود عند إمرار غاز كبريتيد الهيدروجين ($\\text{H}_2\\text{S}$) في محلوله المائي المحمض بحمض الهيدروكلوريك؟",
    "optionsEn": [
      "$\\text{Cu}^{2+}$",
      "$\\text{Fe}^{3+}$",
      "$\\text{Al}^{3+}$",
      "$\\text{Ca}^{2+}$"
    ],
    "optionsAr": [
      "$\\text{Cu}^{2+}$",
      "$\\text{Fe}^{3+}$",
      "$\\text{Al}^{3+}$",
      "$\\text{Ca}^{2+}$"
    ],
    "correctAnswer": "$\\text{Cu}^{2+}$",
    "correctIndex": 0,
    "hintEn": "Cu2+ belongs to Analytical Group II and precipitates as black CuS in acidic solution.",
    "hintAr": "كاتيون النحاس II ينتمي للمجموعة التحليلية الثانية ويترسب على هيئة كبريتيد نحاس II أسود في الوسط الحمضي.",
    "stepByStepSolutionEn": [
      "Cu2+ belongs to Analytical Group II and precipitates as black CuS in acidic solution.",
      "Therefore, the correct answer is: $\\text{Cu}^{2+}$"
    ],
    "stepByStepSolutionAr": [
      "كاتيون النحاس II ينتمي للمجموعة التحليلية الثانية ويترسب على هيئة كبريتيد نحاس II أسود في الوسط الحمضي.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\text{Cu}^{2+}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_12",
    "titleEn": "Exercise 12: Thermal Decomposition of Limewater Precipitate",
    "titleAr": "تمرين ١٢: سبب تعكر ماء الجير الرائق ثم زوال التعكر",
    "difficulty": "medium",
    "questionEn": "When carbon dioxide gas ($\\text{CO}_2$) is passed through clear limewater ($\\text{Ca(OH)}_2$) for a short time, turbidity appears. Why does the turbidity disappear upon passing $\\text{CO}_2$ for a long time?",
    "questionAr": "عند إمرار غاز ثاني أكسيد الكربون في ماء الجير الرائق لفترة قصيرة يحدث تعكر، ولماذا يزول هذا التعكر عند استمرار إمرار الغاز لفترة طويلة؟",
    "optionsEn": [
      "Insoluble calcium carbonate ($\\text{CaCO}_3$) converts into water-soluble calcium bicarbonate ($\\text{Ca(HCO}_3)_2$)",
      "Calcium carbonate evaporates as a gas",
      "Calcium hydroxide is regenerated",
      "Calcium oxide precipitates at the bottom"
    ],
    "optionsAr": [
      "لتحول كربونات الكالسيوم غير الذائبة في الماء إلى بيكربونات الكالسيوم الذائبة في الماء ($\\text{Ca(HCO}_3)_2$)",
      "لتبخر كربونات الكالسيوم على هيئة غاز",
      "لإعادة تكون هيدروكسيد الكالسيوم مرة أخرى",
      "لترسب أكسيد الكالسيوم في القاع"
    ],
    "correctAnswer": "Insoluble calcium carbonate ($\\text{CaCO}_3$) converts into water-soluble calcium bicarbonate ($\\text{Ca(HCO}_3)_2$)",
    "correctIndex": 0,
    "hintEn": "CaCO3(s) + H2O(l) + CO2(g) -> Ca(HCO3)2(aq).",
    "hintAr": "يتفاعل كربونات الكالسيوم مع الماء والغاز الزائد مكوناً بيكربونات الكالسيوم الذائبة في الماء: $\\text{CaCO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2 \\to \\text{Ca(HCO}_3)_2$.",
    "stepByStepSolutionEn": [
      "CaCO3(s) + H2O(l) + CO2(g) -> Ca(HCO3)2(aq).",
      "Therefore, the correct answer is: Insoluble calcium carbonate ($\\text{CaCO}_3$) converts into water-soluble calcium bicarbonate ($\\text{Ca(HCO}_3)_2$)"
    ],
    "stepByStepSolutionAr": [
      "يتفاعل كربونات الكالسيوم مع الماء والغاز الزائد مكوناً بيكربونات الكالسيوم الذائبة في الماء: $\\text{CaCO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2 \\to \\text{Ca(HCO}_3)_2$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لتحول كربونات الكالسيوم غير الذائبة في الماء إلى بيكربونات الكالسيوم الذائبة في الماء ($\\text{Ca(HCO}_3)_2$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_13",
    "titleEn": "Exercise 13: Precipitation of Phosphate with Silver Nitrate",
    "titleAr": "تمرين ١٣: التجربة التأكيدية لأنيون الفوسفات بنترات الفضة",
    "difficulty": "medium",
    "questionEn": "When silver nitrate solution ($\\text{AgNO}_3$) is added to sodium phosphate solution ($\\text{Na}_3\\text{PO}_4$), a yellow precipitate forms. What is the behavior of this yellow precipitate towards ammonia solution and dilute nitric acid?",
    "questionAr": "عند إضافة محلول نترات الفضة ($\\text{AgNO}_3$) إلى محلول فوسفات الصوديوم ($\\text{Na}_3\\text{PO}_4$) يتكون راسب أصفر. ما سلوك هذا الراسب الأصفر مع كل من محلول النشادر وحمض النيتريك المخفف؟",
    "optionsEn": [
      "It dissolves in both aqueous ammonia and dilute nitric acid",
      "It dissolves in ammonia but is insoluble in nitric acid",
      "It is completely insoluble in both ammonia and nitric acid",
      "It dissolves in nitric acid but is insoluble in ammonia"
    ],
    "optionsAr": [
      "يذوب في كل من محلول النشادر وحمض النيتريك المخفف",
      "يذوب في النشادر ولا يذوب في حمض النيتريك",
      "لا يذوب في أي منهما إطلاقاً",
      "يذوب في حمض النيتريك ولا يذوب في النشادر"
    ],
    "correctAnswer": "It dissolves in both aqueous ammonia and dilute nitric acid",
    "correctIndex": 0,
    "hintEn": "Silver phosphate (Ag3PO4) is a yellow precipitate soluble in both ammonia and HNO3, distinguishing it from yellow AgI (insoluble in both).",
    "hintAr": "راسب فوسفات الفضة الأصفر $\\text{Ag}_3\\text{PO}_4$ يذوب في كل من محلول النشادر وحمض النيتريك المخفف.",
    "stepByStepSolutionEn": [
      "Silver phosphate (Ag3PO4) is a yellow precipitate soluble in both ammonia and HNO3, distinguishing it from yellow AgI (insoluble in both).",
      "Therefore, the correct answer is: It dissolves in both aqueous ammonia and dilute nitric acid"
    ],
    "stepByStepSolutionAr": [
      "راسب فوسفات الفضة الأصفر $\\text{Ag}_3\\text{PO}_4$ يذوب في كل من محلول النشادر وحمض النيتريك المخفف.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يذوب في كل من محلول النشادر وحمض النيتريك المخفف"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_14",
    "titleEn": "Exercise 14: Cation Identification in Analytical Group I",
    "titleAr": "تمرين ١٤: كاتيونات المجموعة التحليلية الأولى وصيغة ترسيبها",
    "difficulty": "easy",
    "questionEn": "Which group of cations is precipitated as insoluble chlorides upon adding dilute hydrochloric acid ($\\text{HCl}$) as a group reagent?",
    "questionAr": "أي مجموعات الكاتيونات الآتية تترسب على هيئة كلوريدات شحيحة الذوبان في الماء عند إضافة حمض الهيدروكلوريك المخفف ككاشف مجموعة؟",
    "optionsEn": [
      "$\\text{Ag}^+, \\, \\text{Hg}_2^{2+}, \\, \\text{Pb}^{2+}$",
      "$\\text{Cu}^{2+}, \\, \\text{Fe}^{2+}, \\, \\text{Fe}^{3+}$",
      "$\\text{Al}^{3+}, \\, \\text{Ca}^{2+}, \\, \\text{Mg}^{2+}$",
      "$\\text{Na}^+, \\, \\text{K}^+, \\, \\text{NH}_4^+$"
    ],
    "optionsAr": [
      "$\\text{Ag}^+, \\, \\text{Hg}_2^{2+}, \\, \\text{Pb}^{2+}$",
      "$\\text{Cu}^{2+}, \\, \\text{Fe}^{2+}, \\, \\text{Fe}^{3+}$",
      "$\\text{Al}^{3+}, \\, \\text{Ca}^{2+}, \\, \\text{Mg}^{2+}$",
      "$\\text{Na}^+, \\, \\text{K}^+, \\, \\text{NH}_4^+$"
    ],
    "correctAnswer": "$\\text{Ag}^+, \\, \\text{Hg}_2^{2+}, \\, \\text{Pb}^{2+}$",
    "correctIndex": 0,
    "hintEn": "Analytical Group I cations (Ag+, Hg2(2+), Pb2+) form insoluble chloride precipitates with dilute HCl.",
    "hintAr": "المجموعة التحليلية الأولى تضم كاتيون الفضة I والزئبق I والرصاص II وتترسب على هيئة كلوريدات بواسطة حمض HCl المخفف.",
    "stepByStepSolutionEn": [
      "Analytical Group I cations (Ag+, Hg2(2+), Pb2+) form insoluble chloride precipitates with dilute HCl.",
      "Therefore, the correct answer is: $\\text{Ag}^+, \\, \\text{Hg}_2^{2+}, \\, \\text{Pb}^{2+}$"
    ],
    "stepByStepSolutionAr": [
      "المجموعة التحليلية الأولى تضم كاتيون الفضة I والزئبق I والرصاص II وتترسب على هيئة كلوريدات بواسطة حمض HCl المخفف.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\text{Ag}^+, \\, \\text{Hg}_2^{2+}, \\, \\text{Pb}^{2+}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch2_ex_15",
    "titleEn": "Exercise 15: Mole Ratio in Acid-Base Titration",
    "titleAr": "تمرين ١٥: تحديد النسبة المولية ونقطة التعادل",
    "difficulty": "hots",
    "questionEn": "If $15\\,\\text{mL}$ of a diprotic acid solution ($\\text{H}_2\\text{A}$) of concentration $0.2\\,\\text{M}$ requires $30\\,\\text{mL}$ of a monobasic metal hydroxide ($\\text{MOH}$) for complete neutralization, what is the molarity of the metal hydroxide solution?",
    "questionAr": "إذا تعادل $15\\,\\text{mL}$ من محلول حمض ثنائي البروتون ($\\text{H}_2\\text{A}$) تركيزه $0.2\\,\\text{M}$ تماماً مع $30\\,\\text{mL}$ من محلول هيدروكسيد فلز أحادي الهيدروكسيل ($\\text{MOH}$)، فما هو التركيز المولاري لمحلول القلوي؟",
    "optionsEn": [
      "$0.20\\,\\text{M}$",
      "$0.10\\,\\text{M}$",
      "$0.40\\,\\text{M}$",
      "$0.05\\,\\text{M}$"
    ],
    "optionsAr": [
      "$0.20\\,\\text{M}$",
      "$0.10\\,\\text{M}$",
      "$0.40\\,\\text{M}$",
      "$0.05\\,\\text{M}$"
    ],
    "correctAnswer": "$0.20\\,\\text{M}$",
    "correctIndex": 0,
    "hintEn": "Equation: H2A + 2 MOH -> M2A + 2 H2O. na = 1, nb = 2. (0.2 * 15) / 1 = (Mb * 30) / 2 -> 3.0 = 15 * Mb -> Mb = 0.20 M.",
    "hintAr": "المعادلة: $\\text{H}_2\\text{A} + 2\\text{MOH} \\to \\text{M}_2\\text{A} + 2\\text{H}_2\\text{O}$، إذن $n_a = 1$ و $n_b = 2$. $(0.2 \\times 15) \\div 1 = (M_b \\times 30) \\div 2 \\implies M_b = 0.20\\,\\text{M}$.",
    "stepByStepSolutionEn": [
      "Equation: H2A + 2 MOH -> M2A + 2 H2O. na = 1, nb = 2. (0.2 * 15) / 1 = (Mb * 30) / 2 -> 3.0 = 15 * Mb -> Mb = 0.20 M.",
      "Therefore, the correct answer is: $0.20\\,\\text{M}$"
    ],
    "stepByStepSolutionAr": [
      "المعادلة: $\\text{H}_2\\text{A} + 2\\text{MOH} \\to \\text{M}_2\\text{A} + 2\\text{H}_2\\text{O}$، إذن $n_a = 1$ و $n_b = 2$. $(0.2 \\times 15) \\div 1 = (M_b \\times 30) \\div 2 \\implies M_b = 0.20\\,\\text{M}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.20\\,\\text{M}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];
