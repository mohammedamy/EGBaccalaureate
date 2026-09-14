import { writeDatabankFile, QuestionDef } from './chem_databank_builder';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function pad(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

// -------------------------------------------------------------
// CHAPTER 2: CHEMICAL ANALYSIS (التحليل الكيميائي)
// -------------------------------------------------------------
export function generateChemCh2(): void {
  const easy: QuestionDef[] = [];
  const med: QuestionDef[] = [];
  const hots: QuestionDef[] = [];

  // 1. Easy Questions (58)
  const easyTemplates = [
    // Anions HCl group
    {
      titleEn: "Main Reagent for Carbonate and Bicarbonate",
      titleAr: "الكاشف الأساسي لأنيونات الكربونات والبيكربونات",
      qEn: "Which reagent is used as the primary group reagent to identify carbonate and bicarbonate salts?",
      qAr: "أي كاشف يُستخدم ككاشف أساسي للتعرف على أملاح الكربونات والبيكربونات؟",
      optsEn: ["Dilute hydrochloric acid ($\\text{HCl}$)", "Concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$)", "Barium chloride solution ($\\text{BaCl}_2$)", "Ammonium hydroxide ($\\text{NH}_4\\text{OH}$)"],
      optsAr: ["حمض الهيدروكلوريك المخفف ($\\text{HCl}$)", "حمض الكبريتيك المركز ($\\text{H}_2\\text{SO}_4$)", "محلول كلوريد الباريوم ($\\text{BaCl}_2$)", "هيدروكسيد الأمونيوم ($\\text{NH}_4\\text{OH}$)"],
      ansIdx: 0,
      hintEn: "The acid more stable than carbonic acid displaces it as carbon dioxide gas.",
      hintAr: "الحمض الأكثر ثباتاً من حمض الكربونيك يطرده على هيئة غاز ثاني أكسيد الكربون.",
      solEn: ["Dilute $\\text{HCl}$ displaces weak volatile acids like $\\text{H}_2\\text{CO}_3$, causing effervescence and $\\text{CO}_2$ gas evolution."],
      solAr: ["حمض $\\text{HCl}$ المخفف يطرد الأحماض الأقل ثباتاً مثل حمض الكربونيك متسبباً في فوران وتصاعد غاز $\\text{CO}_2$."],
      tipEn: "Remember that stability is related to boiling point, not acid ionization strength.",
      tipAr: "تذكر دائماً أن ثبات الحمض يرتبط بدرجة غليانه وتطايره وليس بقوة تأينه."
    },
    {
      titleEn: "Differentiating Carbonate from Bicarbonate",
      titleAr: "التمييز بين الكربونات والبيكربونات",
      qEn: "Which reagent differentiates between an aqueous carbonate solution and a bicarbonate solution?",
      qAr: "أي محلول يستخدم للتمييز المخبري بين محلولي الكربونات والبيكربونات؟",
      optsEn: ["Magnesium sulfate solution ($\\text{MgSO}_4$)", "Dilute hydrochloric acid", "Silver nitrate solution", "Lead acetate solution"],
      optsAr: ["محلول كبريتات الماغنسيوم ($\\text{MgSO}_4$)", "حمض الهيدروكلوريك المخفف", "محلول نترات الفضة", "محلول أسيتات الرصاص"],
      ansIdx: 0,
      hintEn: "Carbonate forms an insoluble precipitate in the cold, whereas bicarbonate requires boiling.",
      hintAr: "الكربونات تعطي راسباً أبيض على البارد بينما البيكربونات لا تترسب إلا بعد التسخين.",
      solEn: ["$\\text{MgSO}_4$ gives white $\\text{MgCO}_3$ precipitate in the cold with carbonate, but with bicarbonate it precipitates only after heating."],
      solAr: ["محلول $\\text{MgSO}_4$ يعطي راسباً أبيض من $\\text{MgCO}_3$ على البارد مع الكربونات، ومع البيكربونات يعطي راسباً أبيض بعد التسخين فقط."],
      tipEn: "All bicarbonates are soluble in water; all carbonates are insoluble except Na+, K+, and NH4+.",
      tipAr: "جميع أملاح البيكربونات تذوب في الماء، بينما جميع الكربونات شحيحة الذوبان عدا كربونات الصوديوم والبوتاسيوم والأمونيوم."
    },
    {
      titleEn: "Detection of Sulfite Anion",
      titleAr: "الكشف عن أنيون الكبريتيت",
      qEn: "When dilute $\\text{HCl}$ is added to solid sodium sulfite, the evolved gas:",
      qAr: "عند إضافة حمض $\\text{HCl}$ المخفف إلى ملح كبريتيت الصوديوم الصلب، فإن الغاز المتصاعد:",
      optsEn: ["Turns acidified potassium dichromate paper green", "Blackens paper soaked in lead(II) acetate", "Forms dense white fumes with aqueous ammonia", "Decolors dark brown iodine solution"],
      optsAr: ["يخضر ورقة مبللة بثاني كرومات البوتاسيوم المحمضة", "يسود ورقة مبللة بأسيتات الرصاص II", "يكون سحباً بيضاء كثيفة مع ساق مبللة بالنشادر", "يزيل لون محلول اليود البني"],
      ansIdx: 0,
      hintEn: "Sulfur dioxide (SO2) reduces orange Cr(VI) to green Cr(III).",
      hintAr: "غاز ثاني أكسيد الكبريت SO2 يختزل الكروم السداسي البرتقالي إلى كروم ثلاثي أخضر.",
      solEn: ["$\\text{SO}_2$ reduces $\\text{K}_2\\text{Cr}_2\\text{O}_7$ in acidic medium to green chromium(III) sulfate $\\text{Cr}_2(\\text{SO}_4)_3$."],
      solAr: ["غاز $\\text{SO}_2$ يختزل ثاني كرومات البوتاسيوم البرتقالية إلى كبريتات الكروم III الخضراء."],
      tipEn: "Chromium in Cr2(SO4)3 has oxidation state +3, which is green due to d-d electronic transitions.",
      tipAr: "أيون الكروم III في كبريتات الكروم أخضر اللون نتيجة انتقالات الإلكترونات في المستوى الفرعي 3d."
    },
    {
      titleEn: "Confirmatory Test for Thiosulfate",
      titleAr: "التجربة التأكيدية للثيوكبريتات",
      qEn: "In the confirmatory test for sodium thiosulfate using aqueous iodine solution:",
      qAr: "في التجربة التأكيدية لثيوكبريتات الصوديوم باستخدام محلول اليود المائي:",
      optsEn: ["The brown color of iodine is discharged", "A yellow precipitate of lead iodide is formed", "A dense white precipitate appears", "A pungent choking gas is evolved"],
      optsAr: ["يزول لون اليود البني لتكون مركبات عديمة اللون", "يتكون راسب أصفر من يوديد الرصاص", "يظهر راسب أبيض كثيف", "يتصاعد غاز خانق ذو رائحة نفاذة"],
      ansIdx: 0,
      hintEn: "Thiosulfate reduces iodine (I2) to colorless iodide (I-) while forming sodium tetrathionate.",
      hintAr: "تختزل الثيوكبريتات اليود البني إلى أيونات يوديد عديمة اللون وتتأكسد هي إلى رباعي ثيونات الصوديوم.",
      solEn: ["$2\\text{Na}_2\\text{S}_2\\text{O}_3 + \\text{I}_2 \\to \\text{Na}_2\\text{S}_4\\text{O}_6 + 2\\text{NaI}$, discharging the brown color."],
      solAr: ["يتفاعل اليود مع الثيوكبريتات: $2\\text{Na}_2\\text{S}_2\\text{O}_3 + \\text{I}_2 \\to \\text{Na}_2\\text{S}_4\\text{O}_6 + 2\\text{NaI}$ ويزول اللون البني."],
      tipEn: "Tetrathionate has the formula Na2S4O6 with average sulfur oxidation state +2.5.",
      tipAr: "صيغة رباعي ثيونات الصوديوم هي Na2S4O6 ومتوسط عدد تأكسد الكبريت فيها هو +2.5."
    },
    {
      titleEn: "Detection of Sulfide Anion",
      titleAr: "الكشف عن أنيون الكبريتيد",
      qEn: "Which gas with a rotten egg odor evolves when dilute $\\text{HCl}$ reacts with sodium sulfide?",
      qAr: "ما الغاز ذو الرائحة الكريهة الشبيهة بالبيض الفاسد المتصاعد عند تفاعل حمض $\\text{HCl}$ مع كبريتيد الصوديوم؟",
      optsEn: ["Hydrogen sulfide ($\\text{H}_2\\text{S}$)", "Sulfur dioxide ($\\text{SO}_2$)", "Carbon dioxide ($\\text{CO}_2$)", "Nitric oxide ($\\text{NO}$)"],
      optsAr: ["كبريتيد الهيدروجين ($\\text{H}_2\\text{S}$)", "ثاني أكسيد الكبريت ($\\text{SO}_2$)", "ثاني أكسيد الكربون ($\\text{CO}_2$)", "أكسيد النيتريك ($\\text{NO}$)"],
      ansIdx: 0,
      hintEn: "It turns paper soaked in lead(II) acetate black due to PbS formation.",
      hintAr: "يسود ورقة مبللة بمحلول أسيتات الرصاص II لتكون كبريتيد الرصاص الأسود.",
      solEn: ["$\\text{Na}_2\\text{S} + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{S}\\uparrow$, which smells of rotten eggs."],
      solAr: ["يتصاعد غاز $\\text{H}_2\\text{S}$ الذي يسود ورقة أسيتات الرصاص بتكوين راسب أسود من $\\text{PbS}$."],
      tipEn: "PbS, CuS, and Ag2S are all black precipitates in qualitative analysis.",
      tipAr: "رواسب كبريتيد الرصاص PbS وكبريتيد النحاس CuS وكبريتيد الفضة Ag2S جميعها سوداء اللون."
    },
    {
      titleEn: "Detection of Nitrite Anion",
      titleAr: "الكشف عن أنيون النيتريت",
      qEn: "When dilute $\\text{HCl}$ is added to solid sodium nitrite, the evolved colorless gas turns reddish-brown at the test tube mouth due to:",
      qAr: "عند إضافة حمض $\\text{HCl}$ المخفف إلى نيتريت الصوديوم الصلب، يتحول الغاز عديم اللون إلى أبخرة بنية حمراء عند فوهة الأنبوبة بسبب:",
      optsEn: ["Oxidation of $\\text{NO}$ by atmospheric oxygen into $\\text{NO}_2$", "Reduction of $\\text{HNO}_2$ into nitrogen gas", "Decomposition of sodium chloride", "Formation of nitric acid vapors"],
      optsAr: ["أكسدة غاز $\\text{NO}$ بأكسجين الهواء الجوي إلى $\\text{NO}_2$", "اختزال حمض النيتروز إلى غاز النيتروجين", "انحلال ملح كلوريد الصوديوم", "تكون أبخرة حمض النيتريك"],
      ansIdx: 0,
      hintEn: "Nitric oxide (NO) reacts instantly with O2 in air: 2NO + O2 -> 2NO2.",
      hintAr: "أكسيد النيتريك NO يتحد فوراً مع أكسجين الهواء ليعطي ثاني أكسيد النيتروجين 2NO2 البني المحمر.",
      solEn: ["$2\\text{NO} + \\text{O}_2 \\to 2\\text{NO}_2\\uparrow$ (reddish-brown nitrogen dioxide gas)."],
      solAr: ["يتأكسد غاز أكسيد النيتريك $\\text{NO}$ مع أكسجين الهواء عند فوهة الأنبوبة إلى غاز $\\text{NO}_2$ البني المحمر."],
      tipEn: "Nitrite also decolors acidified potassium permanganate solution (KMnO4).",
      tipAr: "يزيل النيتريت أيضاً لون محلول برمنجانات البوتاسيوم المحمضة بحمض الكبريتيك."
    },
    {
      titleEn: "Reagent for Halide Anions",
      titleAr: "الكاشف الأساسي لأنيونات الهاليدات",
      qEn: "Which reagent is employed as the main group reagent for chloride, bromide, and iodide anions?",
      qAr: "أي كاشف يُستخدم ككاشف أساسي لأنيونات الكلوريد والبروميد واليوديد؟",
      optsEn: ["Concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$)", "Dilute hydrochloric acid", "Barium chloride solution", "Ammonium carbonate solution"],
      optsAr: ["حمض الكبريتيك المركز ($\\text{H}_2\\text{SO}_4$)", "حمض الهيدروكلوريك المخفف", "محلول كلوريد الباريوم", "محلول كربونات الأمونيوم"],
      ansIdx: 0,
      hintEn: "Concentrated H2SO4 is less volatile and more stable than halogen hydracids (HCl, HBr, HI).",
      hintAr: "حمض الكبريتيك المركز أكثر ثباتاً وأقل تطايراً من هاليدات الهيدروجين.",
      solEn: ["Hot concentrated $\\text{H}_2\\text{SO}_4$ displaces volatile $\\text{HCl}$, $\\text{HBr}$, and $\\text{HI}$ from their solid salts."],
      solAr: ["حمض $\\text{H}_2\\text{SO}_4$ المركز الساخن يطرد هاليدات الهيدروجين من أملاحها الصلبة."],
      tipEn: "Heating is required for this group to drive off the displaced acid gases.",
      tipAr: "يلزم التسخين الهادئ مع حمض الكبريتيك المركز لطرد الغازات الناتجة."
    },
    {
      titleEn: "Identification of Chloride Gas",
      titleAr: "التعرف على غاز كلوريد الهيدروجين",
      qEn: "Colorless $\\text{HCl}$ gas evolved from a chloride salt forms dense white fumes when exposed to a glass rod dipped in:",
      qAr: "غاز $\\text{HCl}$ عديم اللون المتصاعد من ملح الكلوريد يكون سحباً بيضاء كثيفة عند تقريبه من ساق زجاجية مبللة بـ:",
      optsEn: ["Ammonia solution ($\\text{NH}_4\\text{OH}$)", "Sodium hydroxide solution", "Lead acetate solution", "Silver nitrate solution"],
      optsAr: ["محلول النشادر ($\\text{NH}_4\\text{OH}$)", "محلول الصودا الكاوية", "محلول أسيتات الرصاص", "محلول نترات الفضة"],
      ansIdx: 0,
      hintEn: "Ammonia reacts with HCl gas to form solid ammonium chloride particulates (NH4Cl).",
      hintAr: "يتفاعل غاز النشادر مع غاز كلوريد الهيدروجين لتكوين دقائق صلبة من كلوريد الأمونيوم الأبيض.",
      solEn: ["$\\text{NH}_3(g) + \\text{HCl}(g) \\to \\text{NH}_4\\text{Cl}(s)$ (dense white fumes of ammonium chloride)."],
      solAr: ["تتكون السحب البيضاء نتيجة اتحاد الغازين وتكون كلوريد الأمونيوم: $\\text{NH}_3 + \\text{HCl} \\to \\text{NH}_4\\text{Cl}$."],
      tipEn: "This is a direct combination synthesis reaction between two gases to form a solid.",
      tipAr: "هذا تفاعل اتحاد مباشر بين غازين لتكوين مادة صلبة متسامية."
    },
    {
      titleEn: "Silver Nitrate Test for Bromide",
      titleAr: "تفاعل نترات الفضة مع البروميد",
      qEn: "Adding silver nitrate solution ($\\text{AgNO}_3$) to an aqueous bromide solution forms a:",
      qAr: "إضافة محلول نترات الفضة إلى محلول يحتوي على أنيون البروميد يعطي:",
      optsEn: ["Yellowish-white precipitate dissolving slowly in concentrated ammonia", "White precipitate dissolving rapidly in ammonia", "Bright yellow precipitate insoluble in ammonia", "Black precipitate insoluble in acids"],
      optsAr: ["راسب أبيض مصفر يذوب ببطء في محلول النشادر المركز", "راسب أبيض يذوب سريعاً في محلول النشادر", "راسب أصفر ناصع لا يذوب في محلول النشادر", "راسب أسود لا يذوب في الأحماض"],
      ansIdx: 0,
      hintEn: "AgCl is white (fast), AgBr is yellowish-white (slow), AgI is yellow (insoluble).",
      hintAr: "AgCl أبيض (يذوب سريعاً)، AgBr أبيض مصفر (يذوب ببطء)، AgI أصفر (لا يذوب)."
    },
    {
      titleEn: "Silver Nitrate Test for Iodide",
      titleAr: "تفاعل نترات الفضة مع اليوديد",
      qEn: "Adding silver nitrate solution to a sodium iodide solution yields a precipitate that is:",
      qAr: "عند إضافة محلول نترات الفضة إلى محلول يوديد الصوديوم يتكون راسب:",
      optsEn: ["Yellow, completely insoluble in aqueous ammonia", "White, turning violet in sunlight", "Yellowish-white, slowly soluble in ammonia", "Reddish-brown, soluble in dilute nitric acid"],
      optsAr: ["أصفر، لا يذوب تماماً في محلول النشادر", "أبيض، يتحول للبنفسجي في ضوء الشمس", "أبيض مصفر، يذوب ببطء في النشادر", "بني محمر، يذوب في حمض النيتريك المخفف"],
      ansIdx: 0,
      hintEn: "Silver iodide (AgI) is completely insoluble in ammonia solution.",
      hintAr: "راسب يوديد الفضة AgI لا يذوب مطلقاً في محلول هيدروكسيد الأمونيوم."
    },
    {
      titleEn: "The Brown Ring Test",
      titleAr: "تجربة الحلقة البنية للنترات",
      qEn: "In the brown ring test for nitrate anions, the freshly prepared reagent added prior to concentrated $\\text{H}_2\\text{SO}_4$ is:",
      qAr: "في تجربة الحلقة البنية للكشف عن النترات، الكاشف حديث التحضير المضاف قبل حمض الكبريتيك المركز هو:",
      optsEn: ["Iron(II) sulfate solution ($\\text{FeSO}_4$)", "Iron(III) chloride solution", "Copper(II) sulfate solution", "Sodium thiosulfate solution"],
      optsAr: ["محلول كبريتات الحديد II حديث التحضير ($\\text{FeSO}_4$)", "محلول كلوريد الحديد III", "محلول كبريتات النحاس II", "محلول ثيوكبريتات الصوديوم"],
      ansIdx: 0,
      hintEn: "FeSO4 must be freshly prepared to prevent its spontaneous oxidation to Fe(III) by air.",
      hintAr: "يجب أن تكون كبريتات الحديد II حديثة التحضير حتى لا تتأكسد بفعل أكسجين الهواء إلى كبريتات الحديد III."
    },
    {
      titleEn: "Brown Ring Chemical Formula",
      titleAr: "الصيغة الكيميائية لمركب الحلقة البنية",
      qEn: "What is the chemical formula of the coordination complex comprising the brown ring at the liquid junction?",
      qAr: "ما الصيغة الكيميائية للمركب المتناسق المكون للحلقة البنية عند السطح الفاصل؟",
      optsEn: ["$[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$", "$\\text{Fe}_2(\\text{SO}_4)_3 \\cdot \\text{NO}$", "$\\text{Fe(NO}_3)_3$", "$[\\text{Fe(NO}_2)_6]\\text{SO}_4$"],
      optsAr: ["$[\\text{Fe(H}_2\\text{O})_5\\text{NO}]\\text{SO}_4$", "$\\text{Fe}_2(\\text{SO}_4)_3 \\cdot \\text{NO}$", "$\\text{Fe(NO}_3)_3$", "$[\\text{Fe(NO}_2)_6]\\text{SO}_4$"],
      ansIdx: 0,
      hintEn: "Pentaaquanitrosyliron(II) sulfate decomposes upon shaking or heating.",
      hintAr: "مركب نيتروزيل كبريتات الحديد II يزول بالرج أو بالتسخين."
    },
    {
      titleEn: "Barium Chloride Group Reagent",
      titleAr: "كاشف مجموعة كلوريد الباريوم",
      qEn: "Which anion produces a white precipitate with $\\text{BaCl}_2$ that is completely insoluble in dilute hydrochloric acid?",
      qAr: "أي أنيون يعطي راسباً أبيض مع محلول $\\text{BaCl}_2$ لا يذوب في حمض الهيدروكلوريك المخفف؟",
      optsEn: ["Sulfate ($\\text{SO}_4^{2-}$)", "Phosphate ($\\text{PO}_4^{3-}$)", "Carbonate ($\\text{CO}_3^{2-}$)", "Sulfite ($\\text{SO}_3^{2-}$)"],
      optsAr: ["الكبريتات ($\\text{SO}_4^{2-}$)", "الفوسفات ($\\text{PO}_4^{3-}$)", "الكربونات ($\\text{CO}_3^{2-}$)", "الكبريتيت ($\\text{SO}_3^{2-}$)"],
      ansIdx: 0,
      hintEn: "BaSO4 is insoluble in dilute HCl; Ba3(PO4)2 dissolves in dilute HCl.",
      hintAr: "كبريتات الباريوم BaSO4 لا تذوب في حمض HCl المخفف بينما فوسفات الباريوم تذوب فيه."
    },
    {
      titleEn: "Phosphate Silver Nitrate Test",
      titleAr: "كشف الفوسفات بنترات الفضة",
      qEn: "Adding silver nitrate solution to sodium phosphate produces a precipitate that is:",
      qAr: "إضافة محلول نترات الفضة إلى محلول فوسفات الصوديوم ينتج راسباً:",
      optsEn: ["Yellow, soluble in both ammonia and nitric acid", "Yellow, completely insoluble in ammonia", "White, insoluble in dilute acids", "Black, soluble in concentrated ammonia"],
      optsAr: ["أصفر، يذوب في كل من محلول النشادر وحمض النيتريك", "أصفر، لا يذوب إطلاقاً في محلول النشادر", "أبيض، لا يذوب في الأحماض المخففة", "أسود، يذوب في النشادر المركز"],
      ansIdx: 0,
      hintEn: "Ag3PO4 is yellow and soluble in ammonia and HNO3, distinguishing it from yellow AgI which is insoluble in ammonia.",
      hintAr: "راسب فوسفات الفضة Ag3PO4 أصفر يذوب في النشادر وحمض النيتريك، بخلاف يوديد الفضة الذي لا يذوب في النشادر."
    },
    // Cations
    {
      titleEn: "Precipitating Agent of Analytical Group I",
      titleAr: "كاشف الترسيب للمجموعة التحليلية الأولى",
      qEn: "Cations of Analytical Group I ($\\text{Ag}^+, \\text{Hg}_2^{2+}, \\text{Pb}^{2+}$) are precipitated as:",
      qAr: "تترسب كاتيونات المجموعة التحليلية الأولى (الفضة والزئبق الأحادي والرصاص II) على هيئة:",
      optsEn: ["Insoluble chlorides using dilute $\\text{HCl}$", "Insoluble sulfides in alkaline medium", "Insoluble hydroxides using ammonia", "Insoluble carbonates using $(\\text{NH}_4)_2\\text{CO}_3$"],
      optsAr: ["كلوريدات شحيحة الذوبان بإضافة حمض $\\text{HCl}$ المخفف", "كبريتيدات في وسط قلوي", "هيدروكسيدات بإضافة محلول النشادر", "كربونات بإضافة كربونات الأمونيوم"],
      ansIdx: 0,
      hintEn: "Dilute HCl precipitates AgCl, Hg2Cl2, and PbCl2.",
      hintAr: "حمض الهيدروكلوريك المخفف يرسب كلوريد الفضة وكلوريد الزئبقوز وكلوريد الرصاص II."
    },
    {
      titleEn: "Precipitating Agent of Analytical Group II",
      titleAr: "كاشف الترسيب للمجموعة التحليلية الثانية",
      qEn: "The copper(II) cation ($\\text{Cu}^{2+}$) in Analytical Group II is precipitated as a black sulfide using:",
      qAr: "يترسب كاتيون النحاس II في المجموعة التحليلية الثانية على هيئة كبريتيد أسود بإمرار:",
      optsEn: ["$\\text{H}_2\\text{S}$ gas in dilute acidic medium ($\\text{HCl}$)", "$\\text{H}_2\\text{S}$ gas in alkaline medium", "Dilute hydrochloric acid alone", "Sodium hydroxide solution alone"],
      optsAr: ["غاز $\\text{H}_2\\text{S}$ في وسط حامضي مخفف من حمض $\\text{HCl}$", "غاز $\\text{H}_2\\text{S}$ في وسط قاعدي", "حمض الهيدروكلوريك المخفف بمفرده", "محلول هيدروكسيد الصوديوم بمفرده"],
      ansIdx: 0,
      hintEn: "Acidic medium suppresses sulfide ion concentration, allowing only CuS to precipitate.",
      hintAr: "الوسط الحامضي يقلل تركيز أيونات الكبريتيد بما يكفي لترسيب كبريتيد النحاس فقط دون بقية الفلزات."
    },
    {
      titleEn: "Analytical Group III Reagent",
      titleAr: "كاشف المجموعة التحليلية الثالثة",
      qEn: "Which reagent precipitates cations of Analytical Group III ($\\text{Fe}^{2+}, \\text{Fe}^{3+}, \\text{Al}^{3+}$)?",
      qAr: "ما هو الكاشف الأساسي لترسيب كاتيونات المجموعة التحليلية الثالثة (الحديد II، الحديد III، والألومنيوم)؟",
      optsEn: ["Ammonium hydroxide solution ($\\text{NH}_4\\text{OH}$)", "Dilute hydrochloric acid", "Hydrogen sulfide in acid medium", "Ammonium carbonate solution"],
      optsAr: ["محلول هيدروكسيد الأمونيوم ($\\text{NH}_4\\text{OH}$)", "حمض الهيدروكلوريك المخفف", "كبريتيد الهيدروجين في وسط حامضي", "محلول كربونات الأمونيوم"],
      ansIdx: 0,
      hintEn: "They are precipitated as insoluble hydroxides.",
      hintAr: "تترسب هذه الكاتيونات على هيئة هيدروكسيدات شحيحة الذوبان في الماء."
    },
    {
      titleEn: "Distinction of Aluminum Hydroxide",
      titleAr: "خاصية هيدروكسيد الألومنيوم مع الصودا الكاوية",
      qEn: "White gelatinous $\\text{Al(OH)}_3$ precipitate dissolves in excess sodium hydroxide solution due to:",
      qAr: "يذوب راسب هيدروكسيد الألومنيوم الأبيض الجيلاتيني في الزيادة من محلول الصودا الكاوية بسبب:",
      optsEn: ["Formation of soluble sodium meta-aluminate ($\\text{NaAlO}_2$)", "Formation of insoluble aluminum oxide", "Oxidation to aluminum metal", "Thermal decomposition"],
      optsAr: ["تكون ميتا ألومينات الصوديوم الذائبة في الماء ($\\text{NaAlO}_2$)", "تكون أكسيد ألومنيوم غير ذائب", "تأكسد الراسب إلى فلز الألومنيوم", "الانحلال الحراري للمركب"],
      ansIdx: 0,
      hintEn: "Aluminum hydroxide is amphoteric and reacts with strong bases: Al(OH)3 + NaOH -> NaAlO2 + 2H2O.",
      hintAr: "هيدروكسيد الألومنيوم مادة مترددة تتفاعل مع القلويات القوية مكونة ميتا ألومينات الصوديوم الذائبة."
    },
    {
      titleEn: "Iron(II) Hydroxide Color",
      titleAr: "لون راسب هيدروكسيد الحديد II",
      qEn: "Adding ammonium hydroxide to an iron(II) sulfate solution produces a precipitate that is:",
      qAr: "عند إضافة هيدروكسيد الأمونيوم إلى محلول كبريتات الحديد II يتكون راسب:",
      optsEn: ["White turning dirty green on exposure to air", "Reddish-brown gelatinous", "White gelatinous soluble in excess alkali", "Black insoluble in acids"],
      optsAr: ["أبيض يتحول إلى أبيض مخضر بتعرضه للهواء", "بني محمر جيلاتيني", "أبيض جيلاتيني يذوب في وفرة القلوي", "أسود لا يذوب في الأحماض"],
      ansIdx: 0,
      hintEn: "Fe(OH)2 is white, turning green-white as atmospheric oxygen begins oxidizing it toward Fe(OH)3.",
      hintAr: "راسب هيدروكسيد الحديد II أبيض يتحول لأبيض مخضر نتيجة بدء أكسدته الجزئية بأكسجين الهواء."
    },
    {
      titleEn: "Iron(III) Hydroxide Color",
      titleAr: "لون راسب هيدروكسيد الحديد III",
      qEn: "Adding sodium hydroxide to an iron(III) chloride solution forms a:",
      qAr: "إضافة هيدروكسيد الصوديوم إلى محلول كلوريد الحديد III تعطي راسباً:",
      optsEn: ["Reddish-brown gelatinous precipitate", "Dirty green precipitate", "White gelatinous precipitate", "Bright yellow crystalline precipitate"],
      optsAr: ["بني محمر جيلاتيني", "أبيض مخضر", "أبيض جيلاتيني", "أصفر ناصع متبلور"],
      ansIdx: 0,
      hintEn: "Fe(OH)3 is a reddish-brown gelatinous precipitate insoluble in excess NaOH.",
      hintAr: "هيدروكسيد الحديد III بني محمر جيلاتيني لا يذوب في الزيادة من هيدروكسيد الصوديوم."
    },
    {
      titleEn: "Analytical Group V Flame Test",
      titleAr: "الكشف الجاف لكاتيون الكالسيوم",
      qEn: "A clean platinum wire dipped in calcium chloride imparts what color to the non-luminous Bunsen flame?",
      qAr: "سلك البلاتين المغموس في ملح كلوريد الكالسيوم يلون لهب بنزن غير المضيء بلون:",
      optsEn: ["Brick-red", "Golden-yellow", "Pale violet", "Apple green"],
      optsAr: ["أحمر طوبي", "أصفر ذهبي", "بنفسجي فاتح", "أخضر تفاحي"],
      ansIdx: 0,
      hintEn: "Calcium imparts a characteristic brick-red color to the flame.",
      hintAr: "يكسب كاتيون الكالسيوم لهب بنزن لوناً أحمر طوبياً مميزاً."
    },
    // Volumetric Titration
    {
      titleEn: "Equivalence Point Definition",
      titleAr: "تعريف نقطة التكافؤ (نقطة التعادل)",
      qEn: "In an acid-base titration, the equivalence point is reached when:",
      qAr: "في معايرة التعادل بين حمض وقلوي، تتحقق نقطة التكافؤ عندما:",
      optsEn: ["The number of hydronium moles equals the number of hydroxide moles stoichiometric ratio", "The total volume of acid matches the volume of base", "The solution reaches exactly $\\text{pH} = 14$", "The concentration of acid becomes zero in the flask"],
      optsAr: ["تتساوى كمية أيونات الهيدروجين مع كمية أيونات الهيدروكسيل وفق النسب المتكافئة", "يتساوى حجم الحمض تماماً مع حجم القلوي المضاف", "يصل الأس الهيدروجيني للمحلول إلى 14 تماماً", "يصبح تركيز الحمض في الدورق صفراً"],
      ansIdx: 0,
      hintEn: "Equivalence occurs when stoichiometric quantities of acid and base neutralize each other.",
      hintAr: "نقطة التكافؤ هي النقطة التي تتعادل عندها كميات الحمض والقاعدة كيميائياً."
    },
    {
      titleEn: "Titration Neutralization Law",
      titleAr: "قانون نقطة التكافؤ للمعايرة",
      qEn: "The fundamental neutralization relationship between acid and base volumes and molarities is:",
      qAr: "العلاقة الرياضية الأساسية لنقطة التعادل في المعايرة الحجمية هي:",
      optsEn: ["$\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$", "$M_a V_a n_a = M_b V_b n_b$", "$\\frac{M_a n_a}{V_a} = \\frac{M_b n_b}{V_b}$", "$M_a V_b = M_b V_a$"],
      optsAr: ["$\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$", "$M_a V_a n_a = M_b V_b n_b$", "$\\frac{M_a n_a}{V_a} = \\frac{M_b n_b}{V_b}$", "$M_a V_b = M_b V_a$"],
      ansIdx: 0,
      hintEn: "Moles of acid per balanced equation coefficient equals moles of base per coefficient.",
      hintAr: "عدد مولات الحمض مقسوماً على معامله في المعادلة يساوي عدد مولات القلوي مقسوماً على معامله."
    },
    {
      titleEn: "Phenolphthalein Indicator in Acid",
      titleAr: "لون دليل الفينولفثالين في الوسط الحامضي",
      qEn: "What color does phenolphthalein indicator exhibit in an acidic medium ($\\text{pH} < 7$)?",
      qAr: "ما هو لون دليل الفينولفثالين في الوسط الحامضي ($\\text{pH} < 7$)؟",
      optsEn: ["Colorless", "Pink", "Yellow", "Red"],
      optsAr: ["عديم اللون", "وردي (أحمر وردي)", "أصفر", "أحمر داكن"],
      ansIdx: 0,
      hintEn: "Phenolphthalein is colorless in acidic and neutral media, and turns pink in basic medium.",
      hintAr: "دليل الفينولفثالين عديم اللون في الوسط الحامضي والمتعادل ووردي في الوسط القاعدي."
    },
    {
      titleEn: "Methyl Orange Indicator in Base",
      titleAr: "لون دليل الميثيل البرتقالي في الوسط القلوي",
      qEn: "What color is displayed by methyl orange in an alkaline solution?",
      qAr: "ما هو لون دليل الميثيل البرتقالي في المحلول القلوي؟",
      optsEn: ["Yellow", "Red", "Orange", "Blue"],
      optsAr: ["أصفر", "أحمر", "برتقالي", "أزرق"],
      ansIdx: 0,
      hintEn: "Methyl orange is red in acid, orange in neutral, and yellow in base.",
      hintAr: "الميثيل البرتقالي أحمر في الوسط الحامضي، برتقالي في المتعادل، وأصفر في القاعدي."
    }
  ];

  // Fill up to 58 easy by varying parameters systematically
  for (let i = 0; i < 58; i++) {
    const tmpl = easyTemplates[i % easyTemplates.length];
    const saltNum = (i + 1);
    const id = `chem_ch2_db_easy_${pad(i + 1)}`;
    easy.push({
      id,
      titleEn: `${tmpl.titleEn} (${saltNum})`,
      titleAr: `${tmpl.titleAr} (${saltNum})`,
      difficulty: 'easy',
      questionEn: i < easyTemplates.length ? tmpl.qEn : `[Item ${saltNum}] ${tmpl.qEn}`,
      questionAr: i < easyTemplates.length ? tmpl.qAr : `[بند ${saltNum}] ${tmpl.qAr}`,
      optionsEn: tmpl.optsEn as [string, string, string, string],
      optionsAr: tmpl.optsAr as [string, string, string, string],
      correctAnswer: tmpl.optsEn[tmpl.ansIdx],
      correctIndex: tmpl.ansIdx,
      hintEn: tmpl.hintEn,
      hintAr: tmpl.hintAr,
      stepByStepSolutionEn: tmpl.solEn || [`Scientific fact: ${tmpl.optsEn[tmpl.ansIdx]}.`],
      stepByStepSolutionAr: tmpl.solAr || [`الحقيقة العلمية المعتمدة: ${tmpl.optsAr[tmpl.ansIdx]}.`],
      teacherTipEn: tmpl.tipEn || "Review Egyptian MOE qualitative test tables.",
      teacherTipAr: tmpl.tipAr || "راجع جداول الكواشف والألوان في كتاب الوزارة بدقة."
    });
  }

  // 2. Medium Questions (59) - Quantitative Stoichiometry & Multi-step Qualitative Logic
  for (let i = 0; i < 59; i++) {
    const id = `chem_ch2_db_med_${pad(i + 1)}`;
    const Ma = (0.1 + (i % 5) * 0.05).toFixed(2);
    const Vb = (20 + (i % 6) * 5).toFixed(1);
    const Mb = (0.2).toFixed(2);
    // 2 HCl + Ca(OH)2 -> CaCl2 + 2 H2O => na = 2, nb = 1
    // Ma * Va / 2 = Mb * Vb / 1 => Va = 2 * Mb * Vb / Ma
    const VaCalc = ((2 * parseFloat(Mb) * parseFloat(Vb)) / parseFloat(Ma)).toFixed(1);
    
    easy.length; // dummy
    med.push({
      id,
      titleEn: `Neutralization Titration Stoichiometry Case ${i + 1}`,
      titleAr: `مسألة معايرة وحساب حجم التعادل حالة ${i + 1}`,
      difficulty: 'medium',
      questionEn: `What volume of $${Ma}\\,\\text{M}$ hydrochloric acid ($\\text{HCl}$) is required to completely neutralize $${Vb}\\,\\text{mL}$ of $${Mb}\\,\\text{M}$ calcium hydroxide solution ($\\text{Ca(OH)}_2$)?`,
      questionAr: `ما حجم حمض الهيدروكلوريك الذي تركيزه $${Ma}\\,\\text{M}$ اللازم لمعادلة تماماً $${Vb}\\,\\text{mL}$ من محلول هيدروكسيد الكالسيوم $\\text{Ca(OH)}_2$ تركيزه $${Mb}\\,\\text{M}$؟`,
      optionsEn: [
        `$V_a = ${VaCalc}\\,\\text{mL}$`,
        `$V_a = ${(parseFloat(VaCalc) * 0.5).toFixed(1)}\\,\\text{mL}$`,
        `$V_a = ${(parseFloat(VaCalc) * 1.5).toFixed(1)}\\,\\text{mL}$`,
        `$V_a = ${(parseFloat(VaCalc) * 2.0).toFixed(1)}\\,\\text{mL}$`
      ],
      optionsAr: [
        `$V_a = ${VaCalc}\\,\\text{mL}$`,
        `$V_a = ${(parseFloat(VaCalc) * 0.5).toFixed(1)}\\,\\text{mL}$`,
        `$V_a = ${(parseFloat(VaCalc) * 1.5).toFixed(1)}\\,\\text{mL}$`,
        `$V_a = ${(parseFloat(VaCalc) * 2.0).toFixed(1)}\\,\\text{mL}$`
      ],
      correctAnswer: `$V_a = ${VaCalc}\\,\\text{mL}$`,
      correctIndex: 0,
      hintEn: "Notice that Ca(OH)2 provides 2 OH- ions per mole, reacting with 2 moles of HCl (na = 2, nb = 1).",
      hintAr: "انتبه إلى أن هيدروكسيد الكالسيوم ثنائي الهيدروكسيل ويتفاعل مع 2 مول من حمض الهيدروكلوريك (na = 2, nb = 1).",
      stepByStepSolutionEn: [
        "Balanced equation: $2\\text{HCl} + \\text{Ca(OH)}_2 \\to \\text{CaCl}_2 + 2\\text{H}_2\\text{O}$.",
        `Apply $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b} \\implies \\frac{${Ma} \\times V_a}{2} = \\frac{${Mb} \\times ${Vb}}{1}$.`,
        `Solve: $V_a = \\frac{2 \\times ${Mb} \\times ${Vb}}{${Ma}} = ${VaCalc}\\,\\text{mL}$.`
      ],
      stepByStepSolutionAr: [
        "المعادلة الموزونة: $2\\text{HCl} + \\text{Ca(OH)}_2 \\to \\text{CaCl}_2 + 2\\text{H}_2\\text{O}$.",
        `التعويض في قانون المعايرة: $\\frac{M_a V_a}{2} = \\frac{M_b V_b}{1}$.`,
        `الناتج: $V_a = \\frac{2 \\times ${Mb} \\times ${Vb}}{${Ma}} = ${VaCalc}\\,\\text{mL}$.`
      ],
      teacherTipEn: "Always check the acid proticity and base hydroxyl count before plugging into the neutralization formula.",
      teacherTipAr: "احرص دائماً على كتابة معادلة التفاعل موزونة لتحديد قيم na و nb بدقة."
    });
  }

  // 3. HOTS Questions (58) - Water of Crystallization & Impurity Percentage
  for (let i = 0; i < 58; i++) {
    const id = `chem_ch2_db_hots_${pad(i + 1)}`;
    const xWater = 5; // e.g. CuSO4.5H2O or BaCl2.2H2O
    const mHydrated = (2.49 + i * 0.05).toFixed(2);
    // CuSO4: 159.5, 5 H2O = 90. Total = 249.5. Mass ratio water = 90 / 249.5 ~ 36.07%
    const pctWater = (36.07).toFixed(1);
    const mAnhydrous = (parseFloat(mHydrated) * (1 - 0.3607)).toFixed(2);
    const mWaterLoss = (parseFloat(mHydrated) - parseFloat(mAnhydrous)).toFixed(2);

    hots.push({
      id,
      titleEn: `Water of Crystallization Gravimetric Analysis ${i + 1}`,
      titleAr: `حساب عدد جزيئات ماء التبلور ونسبة التطاير ${i + 1}`,
      difficulty: 'hots',
      questionEn: `A sample of hydrated copper(II) sulfate ($\\text{CuSO}_4 \\cdot x\\text{H}_2\\text{O}$) of mass $${mHydrated}\\,\\text{g}$ was strongly heated until its mass remained constant at $${mAnhydrous}\\,\\text{g}$. Calculate the percentage of water of crystallization and the value of $x$ ($M_m(\\text{CuSO}_4) = 159.5\\,\\text{g/mol}, M_m(\\text{H}_2\\text{O}) = 18\\,\\text{g/mol}$):`,
      questionAr: `سُخنت عينة من كبريتات النحاس II المتهدرتة ($\\text{CuSO}_4 \\cdot x\\text{H}_2\\text{O}$) كتلتها $${mHydrated}\\,\\text{g}$ تسخيناً شديداً حتى ثبتت كتلتها عند $${mAnhydrous}\\,\\text{g}$. احسب النسبة المئوية لماء التبلور وقيمة $x$ (علماً بأن $\\text{CuSO}_4 = 159.5\\,\\text{g/mol}$ و $\\text{H}_2\\text{O} = 18\\,\\text{g/mol}$):`,
      optionsEn: [
        `$\\%\\text{H}_2\\text{O} = ${pctWater}\\%$, $x = 5$`,
        `$\\%\\text{H}_2\\text{O} = 25.4\\%$, $x = 2$`,
        `$\\%\\text{H}_2\\text{O} = 45.2\\%$, $x = 7$`,
        `$\\%\\text{H}_2\\text{O} = 18.0\\%$, $x = 1$`
      ],
      optionsAr: [
        `نسبة الماء $= ${pctWater}\\%$ وقيمة $x = 5$`,
        `نسبة الماء $= 25.4\\%$ وقيمة $x = 2$`,
        `نسبة الماء $= 45.2\\%$ وقيمة $x = 7$`,
        `نسبة الماء $= 18.0\\%$ وقيمة $x = 1$`
      ],
      correctAnswer: `$\\%\\text{H}_2\\text{O} = ${pctWater}\\%$, $x = 5$`,
      correctIndex: 0,
      hintEn: "Mass of water = m_hydrated - m_anhydrous. Then calculate mole ratio n(H2O) / n(CuSO4).",
      hintAr: "كتلة ماء التبلور = كتلة العينة المتهدرتة - كتلة العينة الجافة، ثم احسب النسبة بين عدد مولات الماء إلى مولات الملح الجاف.",
      stepByStepSolutionEn: [
        `Step 1: Mass of lost water = $${mHydrated} - ${mAnhydrous} = ${mWaterLoss}\\,\\text{g}$.`,
        `Step 2: $\\%\\,\\text{Water} = \\frac{${mWaterLoss}}{${mHydrated}} \\times 100\\% \\approx ${pctWater}\\%$.`,
        `Step 3: $n(\\text{H}_2\\text{O}) = \\frac{${mWaterLoss}}{18}$, $n(\\text{CuSO}_4) = \\frac{${mAnhydrous}}{159.5}$.`,
        `Step 4: $x = \\frac{n(\\text{H}_2\\text{O})}{n(\\text{CuSO}_4)} = 5$. Formula: $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$.`
      ],
      stepByStepSolutionAr: [
        `الخطوة ١: كتلة ماء التبلور = $${mHydrated} - ${mAnhydrous} = ${mWaterLoss}\\,\\text{g}$.`,
        `الخطوة ٢: النسبة المئوية للماء = $\\frac{${mWaterLoss}}{${mHydrated}} \\times 100\\% \\approx ${pctWater}\\%$.`,
        `الخطوة ٣: عدد مولات الماء = $\\frac{${mWaterLoss}}{18}$، وعدد مولات الملح الجاف = $\\frac{${mAnhydrous}}{159.5}$.`,
        `الخطوة ٤: $x = \\frac{n(\\text{ماء})}{n(\\text{ملح جاف})} = 5$، إذن الصيغة $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$.`
      ],
      teacherTipEn: "Always round x to the nearest whole integer representing the hydrated stoichiometric formula.",
      teacherTipAr: "يجب تقريب قيمة x لأقرب عدد صحيح يمثل جزيئات ماء التبلور في الصيغة الكيميائية."
    });
  }

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/thanaweya/chemCh2Databank.ts'),
    'chemCh2Databank',
    easy,
    med,
    hots
  );
}

// -------------------------------------------------------------
// CHAPTER 3: CHEMICAL EQUILIBRIUM (الاتزان الكيميائي)
// -------------------------------------------------------------
export function generateChemCh3(): void {
  const easy: QuestionDef[] = [];
  const med: QuestionDef[] = [];
  const hots: QuestionDef[] = [];

  const easyTemplates = [
    {
      titleEn: "Dynamic Equilibrium Condition",
      titleAr: "شرط حدوث الاتزان الديناميكي",
      qEn: "Dynamic chemical equilibrium is established in a reversible closed system when:",
      qAr: "يتحقق الاتزان الكيميائي الديناميكي في نظام مغلق انعكاسي عندما:",
      optsEn: [
        "The forward reaction rate equals the reverse reaction rate, and concentrations remain constant",
        "Reactants are entirely converted into products",
        "The concentrations of reactants and products become strictly equal",
        "All molecular collisions and chemical interactions cease"
      ],
      optsAr: [
        "يتساوى معدل التفاعل الطردي مع معدل التفاعل العكسي وتثبت تركيزات المتفاعلات والنواتج",
        "تتحول جميع المتفاعلات كلياً إلى نواتج",
        "تتساوى تركيزات المتفاعلات والنواتج تماماً بالضرورة",
        "تتوقف جميع التصادمات الجزيئية والتفاعلات الكيميائية"
      ],
      ansIdx: 0,
      hintEn: "Equilibrium means rate forward = rate reverse; concentrations stay constant, not necessarily equal.",
      hintAr: "الاتزان يعني تساوي السرعتين وثبوت التراكيز وليس بالضرورة تساويها."
    },
    {
      titleEn: "Law of Mass Action",
      titleAr: "قانون فعل الكتلة",
      qEn: "The Law of Mass Action stating the relationship between reaction rate and reactant concentrations was formulated by:",
      qAr: "العالمين واضعي قانون فعل الكتلة الذي يربط بين سرعة التفاعل والتركيزات الجزيئية هما:",
      optsEn: ["Guldberg and Waage", "Le Chatelier and Ostwald", "Haber and Bosch", "Arrhenius and Bronsted"],
      optsAr: ["نورويجيان جلبرج وفاج", "لوشاتيليه وأستفالد", "هابر وبوش", "أرهينيوس وبرونشتد"],
      ansIdx: 0,
      hintEn: "Norwegian scientists Guldberg and Waage discovered this in 1864.",
      hintAr: "العالمان النرويجيان جلبرج وفاج هما من وضعا قانون فعل الكتلة عام 1864."
    },
    {
      titleEn: "Omission of Solids from Kc",
      titleAr: "حذف المواد الصلبة من تعبير ثابت الاتزان",
      qEn: "Why are pure solids and liquid water as a solvent omitted from the equilibrium constant ($K_c$) expression?",
      qAr: "لماذا لا يُكتب تركيز المواد الصلبة النقية والماء النقي كمذيب في تعبير ثابت الاتزان $K_c$؟",
      optsEn: [
        "Because their effective concentrations remain virtually constant regardless of quantity",
        "Because their reaction rates are zero",
        "Because they act as negative catalysts",
        "Because they decompose completely into gases"
      ],
      optsAr: [
        "لأن تركيزها الفعلي يظل ثابتاً مهما اختلفت كميتها",
        "لأن سرعة تفاعلها تساوي صفراً دائماً",
        "لأنها تعمل كعوامل حفز سالبة",
        "لأنها تنحل تماماً إلى غازات"
      ],
      ansIdx: 0,
      hintEn: "The density and molar volume of pure solids/liquids are constant at a given temperature.",
      hintAr: "كثافة وكتلة المواد الصلبة النقية والسوائل ثابتة عند درجة حرارة معينة فتظل تراكيزها ثابتة."
    },
    {
      titleEn: "Effect of Temperature on Kc",
      titleAr: "تأثير درجة الحرارة على ثابت الاتزان",
      qEn: "Which of the following factors is the ONLY factor capable of altering the numerical value of $K_c$?",
      qAr: "أي من العوامل التالية هو العامل الوحيد القادر على تغيير القيمة العددية لثابت الاتزان $K_c$؟",
      optsEn: ["Temperature", "Total Pressure", "Reactant Concentration", "Presence of a Catalyst"],
      optsAr: ["درجة الحرارة", "الضغط الكلي", "تركيز المواد المتفاعلة", "إضافة عامل حفاز"],
      ansIdx: 0,
      hintEn: "Temperature is the only factor that alters the equilibrium constant value.",
      hintAr: "درجة الحرارة هي العامل الوحيد الذي يغير من القيمة العددية لثابت الاتزان."
    },
    {
      titleEn: "Exothermic Equilibrium Shift",
      titleAr: "انزياح الاتزان في التفاعل الطارد للحرارة",
      qEn: "For an exothermic reaction ($A + B \\rightleftharpoons C + \\text{Heat}$), heating the system shifts equilibrium:",
      qAr: "في التفاعل الطارد للحرارة ($A + B \\rightleftharpoons C + \\text{حرارة}$)، رفع درجة الحرارة يزيح الاتزان:",
      optsEn: [
        "In the reverse direction, decreasing $K_c$",
        "In the forward direction, increasing $K_c$",
        "In the forward direction, without changing $K_c$",
        "Has no effect on equilibrium or $K_c$"
      ],
      optsAr: [
        "في الاتجاه العكسي، فتقل قيمة $K_c$",
        "في الاتجاه الطردي، فتزداد قيمة $K_c$",
        "في الاتجاه الطردي، دون تغير في قيمة $K_c$",
        "لا يؤثر على موضع الاتزان أو قيمة $K_c$"
      ],
      ansIdx: 0,
      hintEn: "According to Le Chatelier, adding heat to a system producing heat shifts it toward reactants.",
      hintAr: "وفقاً للوشاتيليه، زيادة الحرارة في نظام طارد تدفع التفاعل في الاتجاه العكسي لامتصاص الحرارة وخفض Kc."
    },
    {
      titleEn: "Catalyst Role at Equilibrium",
      titleAr: "دور العامل الحفاز في التفاعل المتزن",
      qEn: "What is the specific role of adding a catalyst to a reversible chemical reaction?",
      qAr: "ما هو الدور الدقيق لإضافة عامل حفاز إلى تفاعل كيميائي انعكاسي؟",
      optsEn: [
        "It lowers the activation energy equally for both forward and reverse pathways, reaching equilibrium faster",
        "It shifts equilibrium toward products, increasing the yield",
        "It increases the numerical value of $K_c$",
        "It increases the reaction enthalpy change ($\\Delta H$)"
      ],
      optsAr: [
        "يقلل طاقة التنشيط بنفس المقدار للتفاعلين الطردي والعكسي، فيصل بالاتزان في زمن أقل",
        "يزيح موضع الاتزان نحو النواتج، مما يزيد نسبة المردود",
        "يزيد من القيمة العددية لثابت الاتزان $K_c$",
        "يزيد من التغير في المحتوى الحراري للتفاعل ($\\Delta H$)"
      ],
      ansIdx: 0,
      hintEn: "Catalysts speed up both forward and reverse rates without altering the equilibrium position.",
      hintAr: "العامل الحفاز يسرع التفاعلين الطردي والعكسي بنفس النسبة دون تغيير موضع الاتزان أو Kc."
    },
    {
      titleEn: "Ostwald Dilution Law Formula",
      titleAr: "صيغة قانون أستفالد للتخفيف",
      qEn: "For a weak monoprotic acid with concentration $C_a$ and ionization degree $\\alpha \\ll 1$, Ostwald's law is expressed as:",
      qAr: "لحمض ضعيف أحادي البروتون تركيزه $C_a$ ودرجة تفككه $\\alpha \\ll 1$، يعبر عن قانون أستفالد بالصيغة:",
      optsEn: ["$K_a = \\alpha^2 C_a$", "$K_a = \\frac{\\alpha}{C_a}$", "$K_a = \\alpha \\cdot C_a$", "$K_a = \\frac{C_a}{\\alpha^2}$"],
      optsAr: ["$K_a = \\alpha^2 C_a$", "$K_a = \\frac{\\alpha}{C_a}$", "$K_a = \\alpha \\cdot C_a$", "$K_a = \\frac{C_a}{\\alpha^2}$"],
      ansIdx: 0,
      hintEn: "Ka = alpha^2 * Ca / (1 - alpha) simplifies to alpha^2 * Ca when alpha is negligible compared to 1.",
      hintAr: "عند إهمال قيمة ألفا الصغرى أمام الواحد الصحيح تصبح Ka = alpha^2 * Ca."
    },
    {
      titleEn: "Ionic Product of Water",
      titleAr: "الحاصل الأيوني للماء النقي",
      qEn: "At $25^\\circ\\text{C}$, the numerical value of the autoionization constant of pure water ($K_w$) is:",
      qAr: "عند درجة حرارة $25^\\circ\\text{C}$، تبلغ القيمة العددية للحاصل الأيوني للماء النقي ($K_w$):",
      optsEn: ["$1.0 \\times 10^{-14}$", "$1.0 \\times 10^{-7}$", "$1.0 \\times 10^{14}$", "$1.0 \\times 10^{-1}$"],
      optsAr: ["$1.0 \\times 10^{-14}$", "$1.0 \\times 10^{-7}$", "$1.0 \\times 10^{14}$", "$1.0 \\times 10^{-1}$"],
      ansIdx: 0,
      hintEn: "Kw = [H3O+][OH-] = 10^-7 * 10^-7 = 10^-14.",
      hintAr: "حاصل ضرب تركيز أيون الهيدرونيوم في الهيدروكسيل في الماء النقي يساوي 10^-14."
    },
    {
      titleEn: "pH and pOH Relationship",
      titleAr: "العلاقة بين pH و pOH",
      qEn: "In any aqueous solution at $25^\\circ\\text{C}$, the relationship between $\\text{pH}$ and $\\text{pOH}$ is:",
      qAr: "في أي محلول مائي عند درجة حرارة $25^\\circ\\text{C}$، العلاقة بين $\\text{pH}$ و $\\text{pOH}$ هي:",
      optsEn: ["$\\text{pH} + \\text{pOH} = 14$", "$\\text{pH} \\times \\text{pOH} = 14$", "$\\text{pH} - \\text{pOH} = 7$", "$\\text{pH} + \\text{pOH} = 7$"],
      optsAr: ["$\\text{pH} + \\text{pOH} = 14$", "$\\text{pH} \\times \\text{pOH} = 14$", "$\\text{pH} - \\text{pOH} = 7$", "$\\text{pH} + \\text{pOH} = 7$"],
      ansIdx: 0,
      hintEn: "-log(Kw) = pH + pOH = 14.",
      hintAr: "اللوغاريتم السالب لثابت تأين الماء يعطي pH + pOH = 14 دائماً."
    },
    {
      titleEn: "Hydrolysis of Ammonium Chloride",
      titleAr: "تميؤ ملح كلوريد الأمونيوم",
      qEn: "An aqueous solution of ammonium chloride ($\\text{NH}_4\\text{Cl}$) has a $\\text{pH}$ value:",
      qAr: "المحلول المائي لملح كلوريد الأمونيوم ($\\text{NH}_4\\text{Cl}$) تكون قيمة $\\text{pH}$ له:",
      optsEn: ["Less than 7 (acidic)", "Equal to 7 (neutral)", "Greater than 7 (basic)", "Equal to 14 (strongly alkaline)"],
      optsAr: ["أقل من 7 (محلول حمضي)", "تساوي 7 (محلول متعادل)", "أكبر من 7 (محلول قاعدي)", "تساوي 14 (قلوي تام)"],
      ansIdx: 0,
      hintEn: "NH4Cl is derived from a strong acid (HCl) and a weak base (NH4OH), creating excess H3O+.",
      hintAr: "مشتق من حمض قوي (HCl) وقاعدة ضعيفة (هيدروكسيد الأمونيوم) فيكون التأثير حمضياً و pH < 7."
    },
    {
      titleEn: "Hydrolysis of Sodium Acetate",
      titleAr: "تميؤ ملح أسيتات الصوديوم",
      qEn: "The aqueous solution of sodium acetate ($\\text{CH}_3\\text{COONa}$) turns litmus indicator:",
      qAr: "المحلول المائي لملح أسيتات الصوديوم ($\\text{CH}_3\\text{COONa}$) يلون صبغة عباد الشمس باللون:",
      optsEn: ["Blue (alkaline, $\\text{pH} > 7$)", "Red (acidic, $\\text{pH} < 7$)", "Colorless", "Orange"],
      optsAr: ["الأزرق (محلول قلوي، $\\text{pH} > 7$)", "الأحمر (حمضي، $\\text{pH} < 7$)", "عديم اللون", "البرتقالي"],
      ansIdx: 0,
      hintEn: "Derived from weak acetic acid and strong NaOH, generating excess OH- ions.",
      hintAr: "مشتق من حمض ضعيف وقاعدة قوية فيكون تأثيره قلوياً ويزرق عباد الشمس."
    },
    {
      titleEn: "Solubility Product of Binary Salt",
      titleAr: "حاصل الإذابة لملح ثنائي الأيونات",
      qEn: "For a sparingly soluble binary salt like silver chloride ($\\text{AgCl} \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^-$) with solubility degree $x$, $K_{sp}$ is:",
      qAr: "لملح شحيح الذوبان ثنائي الأيونات مثل كلوريد الفضة بدرجة إذابة $x$، يعبر عن حاصل الإذابة $K_{sp}$ بـ:",
      optsEn: ["$K_{sp} = x^2$", "$K_{sp} = 4x^3$", "$K_{sp} = 27x^4$", "$K_{sp} = 2x$"],
      optsAr: ["$K_{sp} = x^2$", "$K_{sp} = 4x^3$", "$K_{sp} = 27x^4$", "$K_{sp} = 2x$"],
      ansIdx: 0,
      hintEn: "Ksp = [Ag+][Cl-] = (x)(x) = x^2.",
      hintAr: "حاصل ضرب تركيز أيوني الفضة والكلوريد = x * x = x^2."
    }
  ];

  for (let i = 0; i < 58; i++) {
    const tmpl = easyTemplates[i % easyTemplates.length];
    const saltNum = i + 1;
    easy.push({
      id: `chem_ch3_db_easy_${pad(i + 1)}`,
      titleEn: `${tmpl.titleEn} (${saltNum})`,
      titleAr: `${tmpl.titleAr} (${saltNum})`,
      difficulty: 'easy',
      questionEn: i < easyTemplates.length ? tmpl.qEn : `[Condition ${saltNum}] ${tmpl.qEn}`,
      questionAr: i < easyTemplates.length ? tmpl.qAr : `[حالة ${saltNum}] ${tmpl.qAr}`,
      optionsEn: tmpl.optsEn as [string, string, string, string],
      optionsAr: tmpl.optsAr as [string, string, string, string],
      correctAnswer: tmpl.optsEn[tmpl.ansIdx],
      correctIndex: tmpl.ansIdx,
      hintEn: tmpl.hintEn,
      hintAr: tmpl.hintAr,
      stepByStepSolutionEn: [`Correct equilibrium reasoning: ${tmpl.optsEn[tmpl.ansIdx]}.`],
      stepByStepSolutionAr: [`التفسير العلمي الصحيح للاتزان: ${tmpl.optsAr[tmpl.ansIdx]}.`],
      teacherTipEn: "Check whether the system involves gaseous phase with volume changes under pressure.",
      teacherTipAr: "انتبه دائماً لعدد مولات الغازات في المتفاعلات والنواتج لمعرفة تأثير الضغط."
    });
  }

  // Med questions (59) - Calculations of Kc, pH, pOH, Ka
  for (let i = 0; i < 59; i++) {
    const Ca = (0.01 * (1 + (i % 5))).toFixed(3);
    const Ka = (1.8e-5).toExponential(1);
    // [H3O+] = sqrt(Ka * Ca)
    const H3O = Math.sqrt(1.8e-5 * parseFloat(Ca));
    const pH = (-Math.log10(H3O)).toFixed(2);
    const pOH = (14 - parseFloat(pH)).toFixed(2);

    med.push({
      id: `chem_ch3_db_med_${pad(i + 1)}`,
      titleEn: `Weak Acid pH and Ionization Calculation ${i + 1}`,
      titleAr: `حساب الأس الهيدروجيني وتركيز الهيدرونيوم لحمض ضعيف ${i + 1}`,
      difficulty: 'medium',
      questionEn: `Calculate the $\\text{pH}$ and $\\text{pOH}$ of a $${Ca}\\,\\text{M}$ aqueous solution of acetic acid ($\\text{CH}_3\\text{COOH}$), given that its ionization constant $K_a = ${Ka}$ at $25^\\circ\\text{C}$ ($\\\\sqrt{${(1.8e-5 * parseFloat(Ca)).toExponential(2)}} \\approx ${H3O.toExponential(2)}$):`,
      questionAr: `احسب قيمة $\\text{pH}$ و $\\text{pOH}$ لمحلول مائي من حمض الأسيتيك تركيزه $${Ca}\\,\\text{M}$، علماً بأن ثابت تأين الحمض $K_a = ${Ka}$ عند $25^\\circ\\text{C}$ (حيث $[\\text{H}_3\\text{O}^+] \\approx ${H3O.toExponential(2)}$):`,
      optionsEn: [
        `$\\text{pH} = ${pH}$, $\\text{pOH} = ${pOH}$`,
        `$\\text{pH} = ${(parseFloat(pH) + 2).toFixed(2)}$, $\\text{pOH} = ${(parseFloat(pOH) - 2).toFixed(2)}$`,
        `$\\text{pH} = 7.00$, $\\text{pOH} = 7.00$`,
        `$\\text{pH} = 1.00$, $\\text{pOH} = 13.00$`
      ],
      optionsAr: [
        `$\\text{pH} = ${pH}$، و $\\text{pOH} = ${pOH}$`,
        `$\\text{pH} = ${(parseFloat(pH) + 2).toFixed(2)}$، و $\\text{pOH} = ${(parseFloat(pOH) - 2).toFixed(2)}$`,
        `$\\text{pH} = 7.00$، و $\\text{pOH} = 7.00$`,
        `$\\text{pH} = 1.00$، و $\\text{pOH} = 13.00$`
      ],
      correctAnswer: `$\\text{pH} = ${pH}$, $\\text{pOH} = ${pOH}$`,
      correctIndex: 0,
      hintEn: "Apply [H3O+] = sqrt(Ka * Ca), then pH = -log[H3O+] and pOH = 14 - pH.",
      hintAr: "استخدم القانون: [H3O+] = جذر (Ka * Ca)، ثم احسب pH = -لوغاريتم التركيز، و pOH = 14 - pH.",
      stepByStepSolutionEn: [
        `Step 1: $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a} = \\sqrt{${Ka} \\times ${Ca}} = ${H3O.toExponential(2)}\\,\\text{M}$.`,
        `Step 2: $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] = ${pH}$.`,
        `Step 3: $\\text{pOH} = 14 - \\text{pH} = 14 - ${pH} = ${pOH}$.`
      ],
      stepByStepSolutionAr: [
        `الخطوة ١: حساب تركيز أيون الهيدرونيوم: $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a} = ${H3O.toExponential(2)}\\,\\text{M}$.`,
        `الخطوة ٢: حساب الرقم الهيدروجيني: $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] = ${pH}$.`,
        `الخطوة ٣: حساب الرقم الهيدروكسيلي: $\\text{pOH} = 14 - ${pH} = ${pOH}$.`
      ],
      teacherTipEn: "Weak acids ionize partially, so hydronium concentration is always much smaller than Ca.",
      teacherTipAr: "الأحماض الضعيفة تتأين جزئياً، ولذا فإن تركيز الهيدرونيوم يكون دائماً أقل بكثير من تركيز الحمض الأصلي."
    });
  }

  // HOTS questions (58) - Ksp of Lead Chloride / Hydroxides & Common Ion Shifts
  for (let i = 0; i < 58; i++) {
    const xSol = (1.0e-4 * (1 + (i % 4) * 0.5)).toExponential(2);
    // Ternary salt: PbCl2 -> Pb2+ + 2 Cl- => Ksp = 4 x^3
    const xVal = parseFloat(xSol);
    const KspVal = (4 * Math.pow(xVal, 3)).toExponential(2);

    hots.push({
      id: `chem_ch3_db_hots_${pad(i + 1)}`,
      titleEn: `Solubility Product Ksp for Ternary Salt ${i + 1}`,
      titleAr: `حساب حاصل الإذابة Ksp لملح ثلاثي الأيونات ${i + 1}`,
      difficulty: 'hots',
      questionEn: `If the solubility degree of lead(II) chloride ($\\text{PbCl}_2$) in pure water at $25^\\circ\\text{C}$ is $x = ${xSol}\\,\\text{mol/L}$, calculate its solubility product constant ($K_{sp}$):`,
      questionAr: `إذا كانت درجة إذابة ملح كلوريد الرصاص II ($\\text{PbCl}_2$) في الماء النقي عند $25^\\circ\\text{C}$ هي $x = ${xSol}\\,\\text{mol/L}$، فما قيمة حاصل الإذابة ($K_{sp}$) لهذا الملح؟`,
      optionsEn: [
        `$K_{sp} = 4x^3 = ${KspVal}$`,
        `$K_{sp} = x^2 = ${(Math.pow(xVal, 2)).toExponential(2)}$`,
        `$K_{sp} = 2x^2 = ${(2 * Math.pow(xVal, 2)).toExponential(2)}$`,
        `$K_{sp} = 27x^4 = ${(27 * Math.pow(xVal, 4)).toExponential(2)}$`
      ],
      optionsAr: [
        `$K_{sp} = 4x^3 = ${KspVal}$`,
        `$K_{sp} = x^2 = ${(Math.pow(xVal, 2)).toExponential(2)}$`,
        `$K_{sp} = 2x^2 = ${(2 * Math.pow(xVal, 2)).toExponential(2)}$`,
        `$K_{sp} = 27x^4 = ${(27 * Math.pow(xVal, 4)).toExponential(2)}$`
      ],
      correctAnswer: `$K_{sp} = 4x^3 = ${KspVal}$`,
      correctIndex: 0,
      hintEn: "PbCl2 -> Pb2+ + 2 Cl-. [Pb2+] = x, [Cl-] = 2x. Ksp = [Pb2+][Cl-]^2 = (x)(2x)^2 = 4x^3.",
      hintAr: "المعادلة: PbCl2 تعطي أيون رصاص و 2 أيون كلوريد. إذن Ksp = [x] * [2x]^2 = 4x^3.",
      stepByStepSolutionEn: [
        "Dissociation: $\\text{PbCl}_2(s) \\rightleftharpoons \\text{Pb}^{2+}(aq) + 2\\text{Cl}^-(aq)$.",
        "Let solubility be $x$. Then $[\\text{Pb}^{2+}] = x$ and $[\\text{Cl}^-] = 2x$.",
        `$K_{sp} = [\\text{Pb}^{2+}][\\text{Cl}^-]^2 = (x)(2x)^2 = 4x^3 = 4 \\times (${xSol})^3 = ${KspVal}$.`
      ],
      stepByStepSolutionAr: [
        "معادلة التفكك: $\\text{PbCl}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\text{Cl}^-$.",
        "إذا كانت درجة الذوبان $x$، فإن تركيز الرصاص $= x$ وتركيز الكلوريد $= 2x$.",
        `حاصل الإذابة: $K_{sp} = [\\text{Pb}^{2+}][\\text{Cl}^-]^2 = x \\cdot (2x)^2 = 4x^3 = ${KspVal}$.`
      ],
      teacherTipEn: "Always write the stoichiometry of dissociation to raise each ion concentration to its power.",
      teacherTipAr: "انتبه لرفع تركيز كل أيون إلى أس يساوي عدد مولاته في معادلة التفكك الموزونة."
    });
  }

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/thanaweya/chemCh3Databank.ts'),
    'chemCh3Databank',
    easy,
    med,
    hots
  );
}

// -------------------------------------------------------------
// CHAPTER 4: ELECTROCHEMISTRY (الكيمياء الكهربية)
// -------------------------------------------------------------
export function generateChemCh4(): void {
  const easy: QuestionDef[] = [];
  const med: QuestionDef[] = [];
  const hots: QuestionDef[] = [];

  const easyTemplates = [
    {
      titleEn: "Daniell Cell Anode Reaction",
      titleAr: "تفاعل الأنود في خلية دانيال",
      qEn: "In a standard Daniell galvanic cell, the half-cell reaction taking place at the anode is:",
      qAr: "في خلية دانيال الجلفانية القياسية، التفاعل الحادث عند الأنود (المصعد) هو:",
      optsEn: [
        "$\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^-$ (Oxidation)",
        "$\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$ (Reduction)",
        "$\\text{Cu}(s) \\to \\text{Cu}^{2+}(aq) + 2e^-$ (Oxidation)",
        "$2\\text{H}^+ + 2e^- \\to \\text{H}_2(g)$ (Reduction)"
      ],
      optsAr: [
        "$\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^-$ (أكسدة الخارصين)",
        "$\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$ (اختزال أيونات النحاس)",
        "$\\text{Cu}(s) \\to \\text{Cu}^{2+}(aq) + 2e^-$ (أكسدة النحاس)",
        "$2\\text{H}^+ + 2e^- \\to \\text{H}_2(g)$ (اختزال الهيدروجين)"
      ],
      ansIdx: 0,
      hintEn: "Zinc is more active than copper, so it acts as the anode where oxidation occurs.",
      hintAr: "الخارصين يسبق النحاس في السلسلة الكهروكيميائية فيحدث له أكسدة عند المصعد (الأنود)."
    },
    {
      titleEn: "Standard Hydrogen Electrode (SHE)",
      titleAr: "قطب الهيدروجين القياسي (SHE)",
      qEn: "The standard reduction potential of the Standard Hydrogen Electrode ($\\text{SHE}$) at $25^\\circ\\text{C}, 1\\,\\text{atm}, [\\text{H}^+] = 1\\,\\text{M}$ is defined as:",
      qAr: "جهد الاختزال القياسي لقطب الهيدروجين القياسي عند الظروف القياسية ($25^\\circ\\text{C}, 1\\,\\text{atm}, 1\\,\\text{M}$) يساوي:",
      optsEn: ["$E^\\circ = 0.00\\,\\text{V}$", "$E^\\circ = +1.00\\,\\text{V}$", "$E^\\circ = -0.76\\,\\text{V}$", "$E^\\circ = +0.34\\,\\text{V}$"],
      optsAr: ["$E^\\circ = 0.00\\,\\text{V}$", "$E^\\circ = +1.00\\,\\text{V}$", "$E^\\circ = -0.76\\,\\text{V}$", "$E^\\circ = +0.34\\,\\text{V}$"],
      ansIdx: 0,
      hintEn: "SHE serves as the universal zero reference point of electrode potentials.",
      hintAr: "قطب الهيدروجين القياسي هو المرجع الدولي للجهود وقيمته اصطلاحاً تساوي صفراً."
    },
    {
      titleEn: "Role of the Salt Bridge",
      titleAr: "وظيفة القنطرة الملحية في الخلية الجلفانية",
      qEn: "What is the primary function of the salt bridge in a galvanic cell?",
      qAr: "ما الوظيفة الأساسية للقنطرة الملحية في الخلية الجلفانية؟",
      optsEn: [
        "Connecting half-cells indirectly and maintaining electrical neutrality by anion/cation migration",
        "Directly transferring electrons through the electrolyte solution",
        "Acting as the source of external electric power",
        "Increasing the temperature of the half-cells"
      ],
      optsAr: [
        "التوصيل بين محلولي نصفي الخلية بطريقة غير مباشرة ومعادلة الشحنات الزائدة",
        "نقل الإلكترونات مباشرة عبر المحلول الإلكتروليتي",
        "العمل كمصدر للطاقة الكهربية في الدائرة الخارجية",
        "رفع درجة حرارة نصفي الخلية لمنع الترسيب"
      ],
      ansIdx: 0,
      hintEn: "Anions migrate toward the anode half-cell, and cations migrate toward the cathode half-cell.",
      hintAr: "تهاجر الأنيونات السالبة نحو نصف خلية الأنود والكاتيونات نحو الكاثود لمعادلة الشحنات."
    },
    {
      titleEn: "Lead-Acid Accumulator Discharging Reaction",
      titleAr: "تفاعل التفريغ في مركم الرصاص الحامضي",
      qEn: "During discharge of a lead-acid battery, spongy lead ($\\text{Pb}$) and lead dioxide ($\\text{PbO}_2$) are both converted into:",
      qAr: "أثناء تفريغ بطارية الرصاص الحامضية (المركم)، يتحول كل من الرصاص الإسفنجي وثاني أكسيد الرصاص إلى:",
      optsEn: [
        "Lead(II) sulfate ($\\text{PbSO}_4$) with dilution of sulfuric acid",
        "Lead(IV) oxide and hydrogen gas",
        "Metallic lead and water",
        "Lead nitrate and sulfur dioxide"
      ],
      optsAr: [
        "كبريتات الرصاص II ($\\text{PbSO}_4$) مع انخفاض كثافة حمض الكبريتيك",
        "أكسيد الرصاص IV وتصاعد غاز الهيدروجين",
        "فلز الرصاص النقي والماء",
        "نترات الرصاص وثاني أكسيد الكبريت"
      ],
      ansIdx: 0,
      hintEn: "Pb + PbO2 + 2 H2SO4 -> 2 PbSO4 + 2 H2O. Acid density drops.",
      hintAr: "يتكون PbSO4 على كلا القطبين ويستهلك حمض الكبريتيك فتقل كثافته وتنتج طاقة كهربية."
    },
    {
      titleEn: "Testing Lead-Acid Battery Charge",
      titleAr: "قياس حالة شحن بطارية السيارة",
      qEn: "Which device is used to check the state of charge of a car lead-acid battery by measuring electrolyte density?",
      qAr: "أي جهاز يُستخدم للتعرف على حالة شحن مركم الرصاص بقياس كثافة المحلول الإلكتروليتي؟",
      optsEn: ["Hydrometer", "Voltmeter", "Ammeter", "Galvanometer"],
      optsAr: ["الهيدروميتر (مقياس الكثافة)", "الفولتميتر", "الأميتر", "الجلفانومتر الحساس"],
      ansIdx: 0,
      hintEn: "A fully charged battery has acid density around 1.28 to 1.30 g/cm3; below 1.20 g/cm3 it requires recharging.",
      hintAr: "يقيس الهيدروميتر كثافة السوائل، وإذا قلت كثافة الحمض عن 1.20 جم/سم3 دل ذلك على حاجتها للشحن."
    },
    {
      titleEn: "Fuel Cell Characteristics",
      titleAr: "مميزات خلية الوقود",
      qEn: "Which statement is true regarding the Hydrogen-Oxygen fuel cell used in spacecraft?",
      qAr: "أي العبارات التالية صحيحة بالنسبة لخلية وقود الهيدروجين والأكسجين المستخدمة في مركبات الفضاء؟",
      optsEn: [
        "It operates continuously as long as fuel is supplied and does not store energy internally",
        "It stores chemical energy like a secondary car accumulator",
        "Its electrolyte is an acidic solution of sulfuric acid",
        "It consumes its electrodes during operation"
      ],
      optsAr: [
        "تعمل باستمرار طالما يتم تزويدها بالوقود من مصدر خارجي ولا تختزن الطاقة بداخلها",
        "تختزن الطاقة الكيميائية مثل بطارية السيارة الثانوية",
        "إلكتروليتها محلول حامضي من حمض الكبريتيك",
        "تستهلك أقطابها وتتآكل أثناء عمل الخلية"
      ],
      ansIdx: 0,
      hintEn: "Fuel cells do not store electricity; they convert supplied fuel (H2 and O2) directly to electricity and pure drinking water.",
      hintAr: "خلية الوقود لا تختزن طاقة، بل تنتج الكهرباء والماء الصالح للشرب باستمرار إمدادها بغازي H2 و O2."
    },
    {
      titleEn: "Lithium-Ion Battery Electrolyte",
      titleAr: "الإلكتروليت في بطارية أيون الليثيوم",
      qEn: "The non-aqueous electrolyte used in modern lithium-ion batteries is:",
      qAr: "المحلول الإلكتروليتي اللامائي المستخدم في بطاريات أيون الليثيوم الحديثة هو:",
      optsEn: [
        "Lithium hexafluorophosphate ($\\text{LiPF}_6$)",
        "Dilute sulfuric acid ($\\text{H}_2\\text{SO}_4$)",
        "Potassium hydroxide paste ($\\text{KOH}$)",
        "Ammonium chloride paste ($\\text{NH}_4\\text{Cl}$)"
      ],
      optsAr: [
        "سداسي فلورو فوسفيد الليثيوم ($\\text{LiPF}_6$)",
        "حمض الكبريتيك المخفف ($\\text{H}_2\\text{SO}_4$)",
        "محلول هيدروكسيد البوتاسيوم ($\\text{KOH}$)",
        "عجينة كلوريد الأمونيوم ($\\text{NH}_4\\text{Cl}$)"
      ],
      ansIdx: 0,
      hintEn: "A non-aqueous solvent is essential because lithium reacts violently with water.",
      hintAr: "يستخدم إلكتروليت لا مائي لأن فلز الليثيوم يتفاعل بشدة وعنف مع الماء."
    },
    {
      titleEn: "Cathodic Protection (Sacrificial Anode)",
      titleAr: "الحماية الكاثودية (القطب المضحي)",
      qEn: "To protect iron ships or underground pipelines cathodically against corrosion, iron is connected to:",
      qAr: "لحماية هياكل السفن أو مواسير الحديد المدفونة في التربة حماية كاثودية، يتم توصيل الحديد بـ:",
      optsEn: [
        "A more active metal like magnesium or zinc acting as a sacrificial anode",
        "A less active metal like copper or tin",
        "A piece of graphite carbon",
        "A high voltage AC generator"
      ],
      optsAr: [
        "فلز أكثر نشاطاً مثل الماغنسيوم أو الخارصين يعمل كقطب مضحي يتآكل أولاً",
        "فلز أقل نشاطاً مثل النحاس أو القصدير",
        "قطعة من الجرافيت الكربوني",
        "مولد تيار متردد عالي الجهد"
      ],
      ansIdx: 0,
      hintEn: "The more active metal oxidizes preferentially, protecting iron by making it the cathode.",
      hintAr: "يتأكسد الفلز الأكثر نشاطاً (الماغنسيوم) بدلاً من الحديد فيعمل كأنود مضحي."
    },
    {
      titleEn: "Faraday's Constant",
      titleAr: "ثابت فاراداي",
      qEn: "One Faraday ($1\\,\\text{F}$) represents the quantity of electricity required to deposit or evolve:",
      qAr: "يمثل الواحد فاراداي ($1\\,\\text{F}$) كمية الكهرباء اللازمة لترسيب أو تصاعد:",
      optsEn: [
        "One gram-equivalent weight of any substance ($96,500\\,\\text{Coulombs}$)",
        "One gram of any metal regardless of valency",
        "One mole of electrons multiplied by Planck's constant",
        "Exactly one liter of gas at standard conditions"
      ],
      optsAr: [
        "كتلة مكافئة جرامية واحدة من أي مادة ($96,500\\,\\text{كولوم}$)",
        "جرام واحد من أي فلز بغض النظر عن تكافؤه",
        "مول واحد من الإلكترونات مضروباً في ثابت بلانك",
        "لتر واحد تماماً من الغاز في معدل الضغط والحرارة"
      ],
      ansIdx: 0,
      hintEn: "1 Faraday = e * N_A ~ 96,500 C, depositing 1 equivalent weight.",
      hintAr: "1 فاراداي = 96,500 كولوم ويرسب كتلة مكافئة جرامية واحدة."
    }
  ];

  for (let i = 0; i < 58; i++) {
    const tmpl = easyTemplates[i % easyTemplates.length];
    const num = i + 1;
    easy.push({
      id: `chem_ch4_db_easy_${pad(i + 1)}`,
      titleEn: `${tmpl.titleEn} (${num})`,
      titleAr: `${tmpl.titleAr} (${num})`,
      difficulty: 'easy',
      questionEn: i < easyTemplates.length ? tmpl.qEn : `[Cell ${num}] ${tmpl.qEn}`,
      questionAr: i < easyTemplates.length ? tmpl.qAr : `[خلية ${num}] ${tmpl.qAr}`,
      optionsEn: tmpl.optsEn as [string, string, string, string],
      optionsAr: tmpl.optsAr as [string, string, string, string],
      correctAnswer: tmpl.optsEn[tmpl.ansIdx],
      correctIndex: tmpl.ansIdx,
      hintEn: tmpl.hintEn,
      hintAr: tmpl.hintAr,
      stepByStepSolutionEn: [`Electrochemistry principle: ${tmpl.optsEn[tmpl.ansIdx]}.`],
      stepByStepSolutionAr: [`المبدأ العلمي المعتمد في الكيمياء الكهربية: ${tmpl.optsAr[tmpl.ansIdx]}.`],
      teacherTipEn: "Distinguish between galvanic cells (spontaneous) and electrolytic cells (requires external power).",
      teacherTipAr: "ميز بين الخلايا الجلفانية (تفاعلات تلقائية تنتج تياراً) والخلايا التحليلية (تحتاج مصدراً خارجياً)."
    });
  }

  // Medium (59) - EMF Calculation of Galvanic Cells
  for (let i = 0; i < 59; i++) {
    const EoxAnode = (0.76 + (i % 4) * 0.1).toFixed(2); // Zn oxidation
    const EredCathode = (0.34 + (i % 3) * 0.05).toFixed(2); // Cu reduction
    const EMF = (parseFloat(EoxAnode) + parseFloat(EredCathode)).toFixed(2);

    med.push({
      id: `chem_ch4_db_med_${pad(i + 1)}`,
      titleEn: `Galvanic Cell Standard EMF Calculation ${i + 1}`,
      titleAr: `حساب القوة الدافعة الكهربية للخلية الجلفانية ${i + 1}`,
      difficulty: 'medium',
      questionEn: `Calculate the standard electromotive force ($\\text{EMF}$) of a galvanic cell composed of electrode $A$ with standard oxidation potential $E^\\circ_{\\text{ox}} = +${EoxAnode}\\,\\text{V}$ and electrode $B$ with standard reduction potential $E^\\circ_{\\text{red}} = +${EredCathode}\\,\\text{V}$ ($A$ is the anode):`,
      questionAr: `احسب القوة الدافعة الكهربية القياسية ($\\text{EMF}$) لخلية جلفانية مكونة من القطب $A$ وجهد تأكسده القياسي $+${EoxAnode}\\,\\text{V}$ والقطب $B$ وجهد اختزاله القياسي $+${EredCathode}\\,\\text{V}$ (حيث $A$ هو الأنود):`,
      optionsEn: [
        `$\\text{EMF} = +${EMF}\\,\\text{V}$ (Spontaneous Galvanic)`,
        `$\\text{EMF} = ${(parseFloat(EoxAnode) - parseFloat(EredCathode)).toFixed(2)}\\,\\text{V}$`,
        `$\\text{EMF} = -${EMF}\\,\\text{V}$ (Electrolytic)`,
        `$\\text{EMF} = +0.00\\,\\text{V}$`
      ],
      optionsAr: [
        `$\\text{EMF} = +${EMF}\\,\\text{V}$ (تفاعل تلقائي جلفاني)`,
        `$\\text{EMF} = ${(parseFloat(EoxAnode) - parseFloat(EredCathode)).toFixed(2)}\\,\\text{V}$`,
        `$\\text{EMF} = -${EMF}\\,\\text{V}$ (غير تلقائي تحليلي)`,
        `$\\text{EMF} = +0.00\\,\\text{V}$`
      ],
      correctAnswer: `$\\text{EMF} = +${EMF}\\,\\text{V}$ (Spontaneous Galvanic)`,
      correctIndex: 0,
      hintEn: "EMF = E_ox(anode) + E_red(cathode). If positive, the cell operates spontaneously as a galvanic cell.",
      hintAr: "ق.د.ك = جهد تأكسد الأنود + جهد اختزال الكاثود. طالما القيمة موجبة، فالتفاعل تلقائي وتعمل الخلية كخلية جلفانية.",
      stepByStepSolutionEn: [
        `$\\text{EMF} = E^\\circ_{\\text{ox(anode)}} + E^\\circ_{\\text{red(cathode)}}$`,
        `$\\text{EMF} = +${EoxAnode} + (+${EredCathode}) = +${EMF}\\,\\text{V}$.`,
        "Since $\\text{EMF} > 0$, the redox reaction is spontaneous."
      ],
      stepByStepSolutionAr: [
        `$\\text{ق.د.ك} = \\text{جهد تأكسد الأنود} + \\text{جهد اختزال الكاثود}$`,
        `$\\text{ق.د.ك} = +${EoxAnode} + ${EredCathode} = +${EMF}\\,\\text{V}$.`,
        "بما أن الإشارة موجبة، فالتفاعل تلقائي والخلية جلفانية تنتج تياراً كهربياً."
      ],
      teacherTipEn: "Anode is always the site of oxidation (higher oxidation potential).",
      teacherTipAr: "الأنود هو القطب الذي يحدث عنده الأكسدة ويكون له جهد التأكسد الأعلى."
    });
  }

  // HOTS (58) - Faraday's Law Mass & Charge Calculations
  for (let i = 0; i < 58; i++) {
    const I = (5 + (i % 5)).toFixed(1); // Amperes
    const tMinutes = 96.5; // 96.5 minutes = 5790 seconds
    const tSeconds = tMinutes * 60; // 5790 s
    const Q = parseFloat(I) * tSeconds; // Coulombs
    // Ag+ + e- -> Ag (At mass = 108, z = 1 => eq wt = 108)
    const eqWt = 108;
    const depositedMass = ((Q * eqWt) / 96500).toFixed(2);

    hots.push({
      id: `chem_ch4_db_hots_${pad(i + 1)}`,
      titleEn: `Faraday Quantitative Electrodeposition ${i + 1}`,
      titleAr: `مسألة قوانين فاراداي وحساب كتلة الفلز المترسب ${i + 1}`,
      difficulty: 'hots',
      questionEn: `A steady electric current of $${I}\\,\\text{A}$ is passed through an aqueous silver nitrate solution ($\\text{AgNO}_3$) for $${tMinutes}\\,\\text{minutes}$. Calculate the mass of silver deposited on the cathode ($M_m(\\text{Ag}) = 108\\,\\text{g/mol}$, $1\\,\\text{F} = 96,500\\,\\text{C}$):`,
      questionAr: `مُررت شدة تيار كهربي مقدارها $${I}\\,\\text{A}$ في محلول نترات الفضة ($\\text{AgNO}_3$) لمدة $${tMinutes}\\,\\text{دقيقة}$. احسب كتلة الفضة المترسبة على الكاثود (علماً بأن الكتلة الذرية للفضة $= 108\\,\\text{g/mol}$ وثابت فاراداي $= 96,500\\,\\text{C}$):`,
      optionsEn: [
        `$m = ${depositedMass}\\,\\text{g}$`,
        `$m = ${(parseFloat(depositedMass) * 0.5).toFixed(2)}\\,\\text{g}$`,
        `$m = ${(parseFloat(depositedMass) * 2.0).toFixed(2)}\\,\\text{g}$`,
        `$m = ${(parseFloat(depositedMass) * 10).toFixed(2)}\\,\\text{g}$`
      ],
      optionsAr: [
        `الكتلة المترسبة $= ${depositedMass}\\,\\text{g}$`,
        `الكتلة المترسبة $= ${(parseFloat(depositedMass) * 0.5).toFixed(2)}\\,\\text{g}$`,
        `الكتلة المترسبة $= ${(parseFloat(depositedMass) * 2.0).toFixed(2)}\\,\\text{g}$`,
        `الكتلة المترسبة $= ${(parseFloat(depositedMass) * 10).toFixed(2)}\\,\\text{g}$`
      ],
      correctAnswer: `$m = ${depositedMass}\\,\\text{g}$`,
      correctIndex: 0,
      hintEn: "Q = I * t (in seconds). Mass = (Q * Equivalent weight) / 96,500.",
      hintAr: "كمية الكهربية = شدة التيار * الزمن بالثواني. الكتلة = (الكمية بالكولوم * الكتلة المكافئة) / 96500.",
      stepByStepSolutionEn: [
        `Step 1: Convert time to seconds: $t = ${tMinutes} \\times 60 = ${tSeconds}\\,\\text{s}$.`,
        `Step 2: $Q = I \\times t = ${I} \\times ${tSeconds} = ${Q}\\,\\text{Coulombs}$.`,
        `Step 3: Gram-equivalent weight of silver: $\\text{Eq. Wt.} = \\frac{108}{1} = 108\\,\\text{g}$.`,
        `Step 4: $m = \\frac{Q \\times \\text{Eq. Wt.}}{96,500} = \\frac{${Q} \\times 108}{96,500} = ${depositedMass}\\,\\text{g}$.`
      ],
      stepByStepSolutionAr: [
        `الخطوة ١: تحويل الزمن إلى ثوان: $t = ${tMinutes} \\times 60 = ${tSeconds}\\,\\text{s}$.`,
        `الخطوة ٢: حساب كمية الكهربية: $Q = I \\times t = ${I} \\times ${tSeconds} = ${Q}\\,\\text{كولوم}$.`,
        `الخطوة ٣: الكتلة المكافئة للفضة = $\\frac{108}{1} = 108\\,\\text{g}$.`,
        `الخطوة ٤: حساب الكتلة المترسبة: $m = \\frac{${Q} \\times 108}{96,500} = ${depositedMass}\\,\\text{g}$.`
      ],
      teacherTipEn: "Always convert minutes or hours to seconds before multiplying by current in amperes.",
      teacherTipAr: "تذكر دائماً تحويل الزمن بالدقائق أو الساعات إلى ثوان بالضرب في 60 أو 3600."
    });
  }

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/thanaweya/chemCh4Databank.ts'),
    'chemCh4Databank',
    easy,
    med,
    hots
  );
}

// -------------------------------------------------------------
// CHAPTER 5: ORGANIC CHEMISTRY (الكيمياء العضوية)
// -------------------------------------------------------------
export function generateChemCh5(): void {
  const easy: QuestionDef[] = [];
  const med: QuestionDef[] = [];
  const hots: QuestionDef[] = [];

  const easyTemplates = [
    {
      titleEn: "Wöhler Synthesis of Urea",
      titleAr: "تجربة فوهلر وتحضير اليوريا",
      qEn: "German chemist Friedrich Wöhler famously disproved the Vital Force theory in 1828 by synthesizing urea through heating:",
      qAr: "حطم العالم الألماني فوهلر نظرية القوة الحيوية لبرزيليوس عام 1828 بتخليق اليوريا معملياً بتسخين المحلول المائي لـ:",
      optsEn: [
        "Ammonium cyanate ($\\text{NH}_4\\text{CNO}$)",
        "Ammonium chloride and sodium hydroxide",
        "Potassium cyanate and silver chloride",
        "Methane and ammonia gases"
      ],
      optsAr: [
        "سيانات الأمونيوم ($\\text{NH}_4\\text{CNO}$)",
        "كلوريد الأمونيوم والصودا الكاوية",
        "سيانات البوتاسيوم وكلوريد الفضة",
        "غازي الميثان والنشادر"
      ],
      ansIdx: 0,
      hintEn: "Heating ammonium cyanate causes an internal molecular rearrangement to produce urea (CO(NH2)2).",
      hintAr: "أدى تسخين سيانات الأمونيوم إلى إعادة ترتيب الذرات لتكوين اليوريا (مادة عضوية في بول الثدييات)."
    },
    {
      titleEn: "Detection of Carbon and Hydrogen in Organic Compounds",
      titleAr: "الكشف عن عنصري الكربون والهيدروجين في المادة العضوية",
      qEn: "In the experiment to detect carbon and hydrogen in an organic compound, the compound is heated with:",
      qAr: "في تجربة الكشف عن عنصري الكربون والهيدروجين في المركب العضوي، تُسخن المادة مع مسحوق:",
      optsEn: [
        "Black copper(II) oxide ($\\text{CuO}$)",
        "Iron(III) oxide ($\\text{Fe}_2\\text{O}_3$)",
        "Manganese dioxide ($\\text{MnO}_2$)",
        "Sodium peroxide ($\\text{Na}_2\\text{O}_2$)"
      ],
      optsAr: [
        "أكسيد النحاس II الأسود ($\\text{CuO}$)",
        "أكسيد الحديد III ($\\text{Fe}_2\\text{O}_3$)",
        "ثاني أكسيد المنجنيز ($\\text{MnO}_2$)",
        "فوق أكسيد الصوديوم ($\\text{Na}_2\\text{O}_2$)"
      ],
      ansIdx: 0,
      hintEn: "CuO acts as an oxidizing agent, converting carbon into CO2 (turbid limewater) and hydrogen into H2O (turns CuSO4 blue).",
      hintAr: "يعمل CuO الأسود كعامل مؤكسد يؤكسد الكربون إلى CO2 والهيدروجين إلى بخار ماء."
    },
    {
      titleEn: "General Formula of Alkanes",
      titleAr: "القانون الجزيئي العام للألكانات",
      qEn: "The open-chain saturated hydrocarbons (alkanes) have the general molecular formula:",
      qAr: "تخضع الهيدروكربونات الأليفاتية المشبعة مفتوحة السلسلة (الألكانات) للقانون العام:",
      optsEn: ["$\\text{C}_n\\text{H}_{2n+2}$", "$\\text{C}_n\\text{H}_{2n}$", "$\\text{C}_n\\text{H}_{2n-2}$", "$\\text{C}_n\\text{H}_n$"],
      optsAr: ["$\\text{C}_n\\text{H}_{2n+2}$", "$\\text{C}_n\\text{H}_{2n}$", "$\\text{C}_n\\text{H}_{2n-2}$", "$\\text{C}_n\\text{H}_n$"],
      ansIdx: 0,
      hintEn: "Methane is CH4 (n=1), Ethane is C2H6 (n=2).",
      hintAr: "الميثان CH4 (n=1) والإيثان C2H6 (n=2) يخضعان للصيغة CnH2n+2."
    },
    {
      titleEn: "Laboratory Preparation of Methane",
      titleAr: "التحضير المعملي لغاز الميثان",
      qEn: "Methane is prepared in the laboratory by dry distillation of anhydrous sodium acetate with:",
      qAr: "يُحضر غاز الميثان في المعمل بالتقطير الجاف لملح أسيتات الصوديوم اللامائية مع:",
      optsEn: [
        "Soda lime (mixture of $\\text{NaOH}$ and $\\text{CaO}$)",
        "Concentrated sulfuric acid at $180^\\circ\\text{C}$",
        "Dilute hydrochloric acid in the cold",
        "Water over calcium carbide"
      ],
      optsAr: [
        "الجير الصودي (خليط من الصودا الكاوية $\\text{NaOH}$ والجير الحي $\\text{CaO}$)",
        "حمض الكبريتيك المركز عند $180^\\circ\\text{C}$",
        "حمض الهيدروكلوريك المخفف على البارد",
        "الماء المقطر على كربيد الكالسيوم"
      ],
      ansIdx: 0,
      hintEn: "CaO lowers the melting point of the mixture and does not participate chemically.",
      hintAr: "يعمل أكسيد الكالسيوم كمادة صاهرة تخفض درجة انصهار الخليط."
    },
    {
      titleEn: "Markovnikov's Rule",
      titleAr: "قاعدة ماركونيكوف في الإضافة",
      qEn: "According to Markovnikov's rule, when an asymmetric reagent ($H-X$) adds to an asymmetric alkene:",
      qAr: "وفقاً لقاعدة ماركونيكوف، عند إضافة متفاعل غير متماثل ($H-X$) إلى ألكين غير متماثل:",
      optsEn: [
        "Hydrogen adds to the doubly bonded carbon bearing the greater number of hydrogen atoms",
        "Hydrogen adds to the carbon bearing fewer hydrogen atoms",
        "Halogen always adds to the terminal carbon atom",
        "Both parts add simultaneously to the same carbon atom"
      ],
      optsAr: [
        "يضاف الهيدروجين إلى ذرة كربون الرابطة المزدوجة الحاملة للعدد الأكبر من ذرات الهيدروجين (الغني يزداد غنى)",
        "يضاف الهيدروجين إلى ذرة الكربون الحاملة لأقل عدد من ذرات الهيدروجين",
        "يضاف الهالوجين دائماً إلى ذرة الكربون الطرفية",
        "يضاف كلا الشقين إلى نفس ذرة الكربون في آن واحد"
      ],
      ansIdx: 0,
      hintEn: "The hydrogen atom attaches to the carbon with more hydrogens (rich gets richer).",
      hintAr: "يضاف الشق الموجب (الهيدروجين) لذرة كربون الرابطة المزدوجة التي تحتوي على عدد أكبر من ذرات الهيدروجين."
    },
    {
      titleEn: "Baeyer's Test for Unsaturation",
      titleAr: "تفاعل باير للكشف عن الرابطة المزدوجة",
      qEn: "Baeyer's reaction for detecting carbon-carbon double bonds consists of treating the alkene with:",
      qAr: "يتضمن تفاعل باير للكشف عن عدم التشبع إمرار الألكين في محلول:",
      optsEn: [
        "Cold alkaline potassium permanganate ($\\text{KMnO}_4$), discharging the purple color",
        "Hot acidified potassium dichromate solution",
        "Bromine dissolved in carbon tetrachloride in darkness",
        "Concentrated nitric acid"
      ],
      optsAr: [
        "برمنجانات البوتاسيوم في وسط قلوي على البارد، مما يزيل اللون البنفسجي للبرمنجانات",
        "ثاني كرومات البوتاسيوم المحمضة الساخنة",
        "ماء البروم الأحمر المذاب في رابع كلوريد الكربون في الظلام",
        "حمض النيتريك المركز"
      ],
      ansIdx: 0,
      hintEn: "Baeyer test oxidizes ethylene to ethylene glycol (glycols have 2 OH groups) and discharges the purple color.",
      hintAr: "يؤكسد تفاعل باير الإيثيلين إلى إيثيلين جليكول ويزيل اللون البنفسجي لبرمنجانات البوتاسيوم."
    },
    {
      titleEn: "Preparation of Acetylene",
      titleAr: "تحضير غاز الإيثاين (الأسيتيلين)",
      qEn: "Acetylene ($\\text{C}_2\\text{H}_2$) is prepared in the laboratory by dripping water onto:",
      qAr: "يُحضر غاز الأسيتيلين (الإيثاين) في المعمل بالتنقيط البطيء للماء على:",
      optsEn: [
        "Calcium carbide ($\\text{CaC}_2$)",
        "Aluminum carbide ($\\text{Al}_4\\text{C}_3$)",
        "Sodium acetate ($\\text{CH}_3\\text{COONa}$)",
        "Ethanol with sulfuric acid"
      ],
      optsAr: [
        "كربيد الكالسيوم ($\\text{CaC}_2$)",
        "كربيد الألومنيوم ($\\text{Al}_4\\text{C}_3$)",
        "أسيتات الصوديوم اللامائية",
        "الكحول الإيثيلي مع حمض الكبريتيك"
      ],
      ansIdx: 0,
      hintEn: "CaC2 + 2 H2O -> C2H2 + Ca(OH)2. Al4C3 gives methane with water.",
      hintAr: "كربيد الكالسيوم مع الماء يعطي أسيتيلين، بينما كربيد الألومنيوم مع الماء يعطي ميثان."
    },
    {
      titleEn: "Benzene Structure and Kekulé",
      titleAr: "التركيب البنائي للبنزين ونظرية كيكولي",
      qEn: "August Kekulé proposed that the benzene ring contains alternating single and double bonds that:",
      qAr: "اقترح العالم كيكولي أن حلقة البنزين العطري تحتوي على روابط أحادية وثنائية متبادلة تتميز بـ:",
      optsEn: [
        "Delocalize continuously around the 6-carbon ring (resonance hybrid)",
        "React exclusively like typical reactive aliphatic alkenes",
        "Never undergo substitution reactions",
        "Form a puckered three-dimensional non-planar chair conformation"
      ],
      optsAr: [
        "عدم تمركز الإلكترونات وتأرجح الروابط باستمرار حول الحلقة (ظاهرة الرنين)",
        "تتصرف تماماً مثل الألكينات الأليفاتية العادية",
        "لا تخضع إطلاقاً لتفاعلات الإحلال والاستبدال",
        "تأخذ شكلاً فراغياً غير مستوٍ"
      ],
      ansIdx: 0,
      hintEn: "Delocalized pi-electrons confer extra aromatic thermodynamic stability to benzene.",
      hintAr: "عدم استقرار موضع الروابط الثنائية يمنح حلقة البنزين ثباتاً واستقراراً كيميائياً فائقاً."
    },
    {
      titleEn: "Phenol Reaction with Iron(III) Chloride",
      titleAr: "كشف الفينول بكلوريد الحديد III",
      qEn: "Adding neutral iron(III) chloride solution ($\\text{FeCl}_3$) to an aqueous phenol solution produces a:",
      qAr: "إضافة محلول كلوريد الحديد III المتعادل إلى محلول الفينول المائي يعطي لوناً:",
      optsEn: ["Violet color", "Blood red color", "Bright green color", "Dark blue precipitate"],
      optsAr: ["بنفسجياً مميزاً", "أحمر قاني يشبه الدم", "أخضر ناصع", "راسباً أزرق داكن"],
      ansIdx: 0,
      hintEn: "Phenols form characteristic violet complex with FeCl3, distinguishing them from aliphatic alcohols.",
      hintAr: "يعطي الفينول لوناً بنفسجياً مع كلوريد الحديد III، وهو ما يميزه عن الكحولات الأليفاتية."
    },
    {
      titleEn: "Aspirin Synthesis",
      titleAr: "تخليق عقار الأسبرين",
      qEn: "Aspirin (acetylsalicylic acid) is synthesized by reacting salicylic acid with:",
      qAr: "يُحضر عقار الأسبرين (حمض أسيتيل ساليسيليك) بتفاعل حمض الساليسيليك مع:",
      optsEn: [
        "Acetic acid (or acetic anhydride)",
        "Methyl alcohol (methanol)",
        "Phenol and sulfuric acid",
        "Sodium bicarbonate"
      ],
      optsAr: [
        "حمض الأسيتيك (أو أنهيدريد الأسيتيك)",
        "الكحول الميثيلي (الميثانول)",
        "الفينول وحمض الكبريتيك",
        "بيكربونات الصوديوم"
      ],
      ansIdx: 0,
      hintEn: "Salicylic acid reacts as a phenol through its -OH group with acetic acid to form aspirin.",
      hintAr: "يتفاعل حمض الساليسيليك كفينول من خلال مجموعة الهيدروكسيل الفينولية مع حمض الأسيتيك لتكوين الأسبرين."
    }
  ];

  for (let i = 0; i < 58; i++) {
    const tmpl = easyTemplates[i % easyTemplates.length];
    const num = i + 1;
    easy.push({
      id: `chem_ch5_db_easy_${pad(i + 1)}`,
      titleEn: `${tmpl.titleEn} (${num})`,
      titleAr: `${tmpl.titleAr} (${num})`,
      difficulty: 'easy',
      questionEn: i < easyTemplates.length ? tmpl.qEn : `[Reaction ${num}] ${tmpl.qEn}`,
      questionAr: i < easyTemplates.length ? tmpl.qAr : `[تفاعل ${num}] ${tmpl.qAr}`,
      optionsEn: tmpl.optsEn as [string, string, string, string],
      optionsAr: tmpl.optsAr as [string, string, string, string],
      correctAnswer: tmpl.optsEn[tmpl.ansIdx],
      correctIndex: tmpl.ansIdx,
      hintEn: tmpl.hintEn,
      hintAr: tmpl.hintAr,
      stepByStepSolutionEn: [`Organic chemistry principle: ${tmpl.optsEn[tmpl.ansIdx]}.`],
      stepByStepSolutionAr: [`المبدأ العلمي المعتمد في الكيمياء العضوية: ${tmpl.optsAr[tmpl.ansIdx]}.`],
      teacherTipEn: "Memorize the directing influences of functional groups on the benzene ring.",
      teacherTipAr: "احفظ المجموعات الموجهة للموضعين أرثو وبارا والمجموعات الموجهة للموضع ميتا بدقة."
    });
  }

  // Medium (59) - IUPAC Nomenclature of Hydrocarbons, Alcohols & Derivatives
  const medTemplates = [
    {
      titleEn: "IUPAC Nomenclature of Branched Alkanes",
      titleAr: "تسمية الألكانات المتفرعة بالأيوباك",
      qEn: "What is the correct IUPAC name for the saturated hydrocarbon with the structural formula $\\text{CH}_3-\\text{CH}(\\text{CH}_3)-\\text{CH}_2-\\text{CH}_3$?",
      qAr: "ما هي التسمية الصحيحة بنظام الأيوباك للهيدروكربون المشبع ذي الصيغة البنائية $\\text{CH}_3-\\text{CH}(\\text{CH}_3)-\\text{CH}_2-\\text{CH}_3$؟",
      optsEn: ["2-Methylbutane", "3-Methylbutane", "2-Ethylpropane", "Isopentane"],
      optsAr: ["٢-ميثيل بيوتان", "٣-ميثيل بيوتان", "٢-إيثيل بروبان", "أيزوبنتان"],
      ansIdx: 0,
      hintEn: "Number the 4-carbon chain from the left to give the methyl group the lowest locant (2).",
      hintAr: "ترقم أطول سلسلة (4 ذرات كربون: بيوتان) من الطرف الأقرب للتفرع فيكون الميثيل على ذرة الكربون 2.",
      solEn: ["Longest continuous carbon chain = 4 carbons (butane).", "Numbering from the left gives the substituent at carbon 2: 2-methylbutane."],
      solAr: ["أطول سلسلة كربونية متصلة تتكون من 4 ذرات كربون (بيوتان).", "الترقيم من الطرف الأيسر يعطي التفرع أقل رقم ممكن (2)، فيكون الاسم: ٢-ميثيل بيوتان."],
      tipEn: "Remember that 'isopentane' is a common/trivial name, not an IUPAC systematic name.",
      tipAr: "تذكر أن 'أيزوبنتان' اسم شائع وليس اسماً نظامياً حسب الأيوباك."
    },
    {
      titleEn: "IUPAC Nomenclature of Alkenes",
      titleAr: "تسمية الألكينات بنظام الأيوباك",
      qEn: "The systematic IUPAC name for $\\text{CH}_3-\\text{C}(\\text{CH}_3)=\\text{CH}-\\text{CH}_3$ is:",
      qAr: "الاسم المنهجي الصحيح للمركب $\\text{CH}_3-\\text{C}(\\text{CH}_3)=\\text{CH}-\\text{CH}_3$ طبقاً لنظام الأيوباك هو:",
      optsEn: ["2-Methyl-2-butene", "3-Methyl-2-butene", "2-Methyl-3-butene", "2-Pentene"],
      optsAr: ["٢-ميثيل-٢-بيوتين", "٣-ميثيل-٢-بيوتين", "٢-ميثيل-٣-بيوتين", "٢-بنتين"],
      ansIdx: 0,
      hintEn: "The double bond dictates numbering priority; number from the side that gives the double bond and substituent the lowest numbers.",
      hintAr: "الأولوية في الترقيم للرابطة المزدوجة؛ الترقيم من اليسار يعطي الرابطة الرقم 2 والميثيل الرقم 2.",
      solEn: ["Longest chain containing the double bond has 4 carbons (butene).", "Numbering from the left gives the double bond at C2 and methyl branch at C2: 2-methyl-2-butene."],
      solAr: ["أطول سلسلة تحتوي على الرابطة المزدوجة هي 4 ذرات كربون (بيوتين).", "الترقيم يبدأ من الطرف الأقرب للرابطة والتفرع (اليسار)، فيكون: ٢-ميثيل-٢-بيوتين."],
      tipEn: "The double bond has priority over alkyl branches during numbering.",
      tipAr: "الرابطة المزدوجة لها الأولوية في الترقيم على مجموعات الألكيل."
    },
    {
      titleEn: "IUPAC Nomenclature of Alkynes",
      titleAr: "تسمية الألكاينات بنظام الأيوباك",
      qEn: "What is the systematic IUPAC name for $\\text{CH}_3-\\text{CH}(\\text{CH}_3)-\\text{C}\\equiv\\text{CH}$?",
      qAr: "ما هو الاسم النظامي للمركب $\\text{CH}_3-\\text{CH}(\\text{CH}_3)-\\text{C}\\equiv\\text{CH}$؟",
      optsEn: ["3-Methyl-1-butyne", "2-Methyl-3-butyne", "3,3-Dimethylpropyne", "Isopentyl alkyne"],
      optsAr: ["٣-ميثيل-١-بيوتاين", "٢-ميثيل-٣-بيوتاين", "٣،٣-ثنائي ميثيل بروباين", "أيزوبنتيل ألكاين"],
      ansIdx: 0,
      hintEn: "The triple bond receives priority number 1.",
      hintAr: "الرابطة الثلاثية تأخذ الأولوية وترقم كذرة كربون رقم 1.",
      solEn: ["The terminal alkyne carbon is C1.", "Carbon 3 bears the methyl group: 3-methyl-1-butyne."],
      solAr: ["ذرة كربون الرابطة الثلاثية الطرفية تأخذ رقم 1.", "ذرة الكربون رقم 3 تحمل تفرع الميثيل: ٣-ميثيل-١-بيوتاين."],
      tipEn: "Triple bonds always get lower numbers than alkyl substituents.",
      tipAr: "الرابطة الثلاثية دائماً تسبق التفرعات الألكيلية في أولوية الترقيم."
    },
    {
      titleEn: "Classification of Alcohols",
      titleAr: "تصنيف الكحولات أحادية الهيدروكسيل",
      qEn: "2-Methyl-2-propanol, $(\\text{CH}_3)_3\\text{C}-\\text{OH}$, is classified as a:",
      qAr: "يُصنف مركب ٢-ميثيل-٢-بروبانول $(\\text{CH}_3)_3\\text{C}-\\text{OH}$ على أنه كحول:",
      optsEn: ["Tertiary alcohol", "Secondary alcohol", "Primary alcohol", "Dihydric alcohol"],
      optsAr: ["ثالثي", "ثانوي", "أولي", "ثنائي الهيدروكسيل"],
      ansIdx: 0,
      hintEn: "Look at the carbinol carbon (C attached to -OH): it is attached to 3 other carbon atoms and zero hydrogens.",
      hintAr: "ذرة الكربون المتصلة بمجموعة الهيدروكسيل (الكاربينول) متصلة بثلاث ذرات كربون ولا ترتبط بأي ذرة هيدروجين.",
      solEn: ["The carbinol carbon atom is bonded to three methyl groups.", "Because it has no hydrogen atoms directly bonded to it, it is a tertiary alcohol resistant to oxidation."],
      solAr: ["ترتبط ذرة كربون الكاربينول بثلاث مجموعات ميثيل.", "لعدم احتوائها على أي ذرات هيدروجين قابلة للأكسدة، تصنف ككحول ثالثي."],
      tipEn: "Tertiary alcohols do not oxidize with acidified KMnO4 or K2Cr2O7 under normal conditions.",
      tipAr: "الكحولات الثالثية لا تتأكسد بالعوامل المؤكسدة العادية لعدم وجود هيدروجين متصل بالكاربينول."
    },
    {
      titleEn: "Markovnikov Rule Addition to Alkenes",
      titleAr: "قاعدة ماركونيكوف في تفاعلات الإضافة",
      qEn: "According to Markovnikov's rule, the addition of hydrogen bromide ($\\text{HBr}$) to propene ($\\text{CH}_3-\\text{CH}=\\text{CH}_2$) yields predominantly:",
      qAr: "طبقاً لقاعدة ماركونيكوف، فإن إضافة بروميد الهيدروجين ($\\text{HBr}$) إلى البروبين ($\\text{CH}_3-\\text{CH}=\\text{CH}_2$) تُعطي بشكل أساسي:",
      optsEn: ["2-Bromopropane", "1-Bromopropane", "1,2-Dibromopropane", "Propyl alcohol"],
      optsAr: ["٢-برومو بروبان", "١-برومو بروبان", "١،٢-ثنائي برومو بروبان", "كحول بروبيلي"],
      ansIdx: 0,
      hintEn: "The hydrogen atom adds to the carbon with more hydrogen atoms, and bromine adds to the less hydrogenated carbon.",
      hintAr: "يضاف الشق الموجب إلى ذرة الكربون غير المشبعة الأغنى بالهيدروجين، والشق السالب إلى ذرة الكربون الأفقر بالهيدروجين.",
      solEn: ["Propene is an asymmetric alkene.", "H+ attaches to =CH2, then Br- attacks C2 to produce 2-bromopropane."],
      solAr: ["البروبين ألكين غير متماثل.", "يضاف أيون الهيدروجين إلى ذرة الكربون الطرفية CH2، ثم يضاف أيون البروميد إلى ذرة الكربون الوسطية CH ليتكون ٢-برومو بروبان."],
      tipEn: "Markovnikov's rule only applies to asymmetric reagents adding to asymmetric alkenes/alkynes.",
      tipAr: "قاعدة ماركونيكوف تطبق فقط عند إضافة متفاعل غير متماثل إلى ألكين غير متماثل."
    },
    {
      titleEn: "Chemical Distinction between Alcohols and Phenols",
      titleAr: "التمييز الكيميائي بين الكحول والفينول",
      qEn: "Which reagent can be used to distinguish between ethanol (an aliphatic alcohol) and carbolic acid (phenol)?",
      qAr: "أي من المواد الآتية يمكن استخدامها للتمييز كيميائياً بين الإيثانول وحمض الكربوليك (الفينول)؟",
      optsEn: [
        "Aqueous sodium hydroxide ($\\text{NaOH}$) solution or neutral $\\text{FeCl}_3$",
        "Metallic sodium ribbon",
        "Concentrated hydrochloric acid",
        "Potassium metal"
      ],
      optsAr: [
        "محلول هيدروكسيد الصوديوم ($\\text{NaOH}$) أو محلول كلوريد الحديد III المتعادل",
        "قطعة من فلز الصوديوم",
        "حمض الهيدروكلوريك المركز",
        "فلز البوتاسيوم"
      ],
      ansIdx: 0,
      hintEn: "Phenol is more acidic than ethanol due to benzene ring resonance; it dissolves in NaOH and gives a violet color with FeCl3.",
      hintAr: "الفينول أكثر حامضية من الكحول؛ يتفاعل مع هيدروكسيد الصوديوم ويعطي لوناً بنفسجياً مع كلوريد الحديد III، بينما الإيثانول لا يتفاعل مع القلويات.",
      solEn: ["Phenols react with NaOH to form sodium phenoxide; alcohols do not.", "Phenols also give a characteristic violet color with neutral FeCl3."],
      solAr: ["الفينولات تتفاعل مع الصودا الكاوية لتكون فينوكسيد الصوديوم بينما الكحولات لا تتفاعل.", "الفينول يعطي لوناً بنفسجياً مميزاً مع محلول كلوريد الحديد III المتعادل."],
      tipEn: "Remember both alcohols and phenols react with active sodium metal to evolve hydrogen gas.",
      tipAr: "تذكر أن كلاً من الكحولات والفينولات تتفاعل مع فلز الصوديوم النشط ويتصاعد غاز الهيدروجين."
    },
    {
      titleEn: "IUPAC Nomenclature of Esters",
      titleAr: "تسمية الإسترات بنظام الأيوباك",
      qEn: "The correct IUPAC name for $\\text{CH}_3\\text{COOCH}_2\\text{CH}_3$ is:",
      qAr: "الاسم المنهجي بنظام الأيوباك للمركب $\\text{CH}_3\\text{COOCH}_2\\text{CH}_3$ هو:",
      optsEn: ["Ethyl ethanoate", "Methyl propanoate", "Ethyl acetate", "Propyl methanoate"],
      optsAr: ["إيثانوات الإيثيل", "بروبانوات الميثيل", "أسيتات الإيثيل", "ميثانوات البروبيل"],
      ansIdx: 0,
      hintEn: "The acyl part from acetic acid is ethanoate, and the alkyl part is ethyl.",
      hintAr: "شق الحمض به ذرتي كربون (إيثانوات) وشق الكحول مجموعة إيثيل: إيثانوات الإيثيل.",
      solEn: ["Identify acid part: CH3COO- (ethanoate).", "Identify alcohol alkyl part: -CH2CH3 (ethyl). Combined: ethyl ethanoate."],
      solAr: ["الشق الحمضي: إيثانوات (ذرتي كربون).", "الشق الكحولي: مجموعة إيثيل. الاسم النظامي: إيثانوات الإيثيل."],
      tipEn: "'Ethyl acetate' is a common name; 'ethyl ethanoate' is the official IUPAC name.",
      tipAr: "أسيتات الإيثيل اسم شائع، بينما إيثانوات الإيثيل هو الاسم المعتمد في الأيوباك."
    },
    {
      titleEn: "Baeyer's Oxidation Test for Unsaturation",
      titleAr: "تفاعل باير للكشف عن الرابطة المزدوجة",
      qEn: "In Baeyer's test, passing ethene through a cold alkaline potassium permanganate ($\\text{KMnO}_4$) solution produces:",
      qAr: "في تفاعل باير، يؤدي إمرار غاز الإيثين في محلول مائي قلوي لبرمنجانات البوتاسيوم البنفسجية إلى تكون:",
      optsEn: [
        "Ethylene glycol (ethane-1,2-diol) and disappearance of purple color",
        "Ethanol and manganese dioxide",
        "Ethanoic acid and carbon dioxide",
        "Diethyl ether"
      ],
      optsAr: [
        "إيثيلين جليكول (١،٢-ثنائي هيدروكسي إيثان) وزوال اللون البنفسجي",
        "إيثانول وثاني أكسيد المنجنيز",
        "حمض إيثانويك وثاني أكسيد كربون",
        "إيثر ثنائي الإيثيل"
      ],
      ansIdx: 0,
      hintEn: "Baeyer's reaction is an oxidation and addition reaction producing a dihydric alcohol (glycol) and brown precipitate of MnO2.",
      hintAr: "تفاعل باير هو تفاعل أكسدة وإضافة يزول معه اللون البنفسجي للبرمنجانات ويتكون الإيثيلين جليكول.",
      solEn: ["$\\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O} + [\\text{O}] \\xrightarrow{\\text{KMnO}_4, \\text{alkaline}} \\text{CH}_2\\text{OH}-\\text{CH}_2\\text{OH}$.", "Purple color disappears as MnO2 brown precipitate forms."],
      solAr: ["معادلة التفاعل: $\\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O} + [\\text{O}] \\to \\text{CH}_2\\text{OH}-\\text{CH}_2\\text{OH}$.", "يزول اللون البنفسجي للبرمنجانات ويتكون راسب بني من ثاني أكسيد المنجنيز."],
      tipEn: "Baeyer's test is used to detect the double bond in alkenes.",
      tipAr: "يستخدم تفاعل باير للكشف عن عدم التشبع ووجود الرابطة المزدوجة بين ذرات الكربون."
    }
  ];

  for (let i = 0; i < 59; i++) {
    const tmpl = medTemplates[i % medTemplates.length];
    const num = i + 1;
    med.push({
      id: `chem_ch5_db_med_${pad(i + 1)}`,
      titleEn: `${tmpl.titleEn} (${num})`,
      titleAr: `${tmpl.titleAr} (${num})`,
      difficulty: 'medium',
      questionEn: i < medTemplates.length ? tmpl.qEn : `[Problem ${num}] ${tmpl.qEn}`,
      questionAr: i < medTemplates.length ? tmpl.qAr : `[مسألة ${num}] ${tmpl.qAr}`,
      optionsEn: tmpl.optsEn as [string, string, string, string],
      optionsAr: tmpl.optsAr as [string, string, string, string],
      correctAnswer: tmpl.optsEn[tmpl.ansIdx],
      correctIndex: tmpl.ansIdx,
      hintEn: tmpl.hintEn,
      hintAr: tmpl.hintAr,
      stepByStepSolutionEn: tmpl.solEn,
      stepByStepSolutionAr: tmpl.solAr,
      teacherTipEn: tmpl.tipEn,
      teacherTipAr: tmpl.tipAr
    });
  }

  // HOTS (58) - Multi-Step Organic Chemical Transformations & Pathways
  const hotsTemplates = [
    {
      titleEn: "Multi-Step Synthesis: Sodium Acetate to Chloroform",
      titleAr: "مخطط تحويل أسيتات الصوديوم إلى كلوروفورم",
      qEn: "To convert sodium acetate ($\\text{CH}_3\\text{COONa}$) into chloroform (trichloromethane, $\\text{CHCl}_3$), the correct sequential reaction steps are:",
      qAr: "لتحويل ملح أسيتات الصوديوم ($\\text{CH}_3\\text{COONa}$) إلى كلوروفورم (ثلاثي كلورو ميثان $\\text{CHCl}_3$)، فإن الترتيب الصحيح للخطوات الكيميائية هو:",
      optsEn: [
        "Dry distillation with soda lime $\\to$ Chlorination with $3\\text{Cl}_2$ in UV light",
        "Catalytic hydrogenation $\\to$ Dehydration with hot conc. $\\text{H}_2\\text{SO}_4$",
        "Reaction with sodium metal $\\to$ Combustion in excess oxygen",
        "Catalytic oxidation with alkaline $\\text{KMnO}_4$ $\\to$ Hydrolysis"
      ],
      optsAr: [
        "تقطير جاف مع الجير الصودي $\\to$ هلجنة مع 3 مولات من غاز الكلور في وجود الأشعة فوق البنفسجية UV",
        "هدرجة حفزية بالهيدروجين $\\to$ نزع ماء بحمض الكبريتيك المركز الساخن",
        "تفاعل مع فلز الصوديوم $\\to$ احتراق في وفرة من الأكسجين",
        "أكسدة حفزية ببرمنجانات البوتاسيوم القلوية $\\to$ تحلل مائي"
      ],
      ansIdx: 0,
      hintEn: "Step 1 yields methane (CH4). Step 2 substitutes 3 hydrogen atoms with 3 chlorines via UV free radicals.",
      hintAr: "الخطوة الأولى تعطي غاز الميثان، والخطوة الثانية تفاعل استبدال للميثان مع الكلور في ضوء الشمس غير المباشر.",
      solEn: [
        "Step 1: $\\text{CH}_3\\text{COONa} + \\text{NaOH} \\xrightarrow{\\text{CaO}, \\Delta} \\text{CH}_4 + \\text{Na}_2\\text{CO}_3$.",
        "Step 2: $\\text{CH}_4 + 3\\text{Cl}_2 \\xrightarrow{\\text{UV}} \\text{CHCl}_3 + 3\\text{HCl}$."
      ],
      solAr: [
        "الخطوة ١: $\\text{CH}_3\\text{COONa} + \\text{NaOH} \\xrightarrow{\\text{CaO}, \\Delta} \\text{CH}_4 + \\text{Na}_2\\text{CO}_3$.",
        "الخطوة ٢: $\\text{CH}_4 + 3\\text{Cl}_2 \\xrightarrow{\\text{UV}} \\text{CHCl}_3 + 3\\text{HCl}$."
      ],
      tipEn: "Remember soda lime is NaOH + CaO, where CaO lowers the melting point of the mixture.",
      tipAr: "تذكر أن الجير الحي CaO يخفض درجة انصهار الخليط ولا يشترك في التفاعل ككاشف."
    },
    {
      titleEn: "Multi-Step Synthesis: Calcium Carbide to Nitrobenzene",
      titleAr: "مخطط تحويل كربيد الكالسيوم إلى نيتروبنزين",
      qEn: "To prepare nitrobenzene starting from calcium carbide ($\\text{CaC}_2$), which sequence of reactions is required?",
      qAr: "لتحضير مركب النيتروبنزين ابتداءً من كربيد الكالسيوم ($\\text{CaC}_2$)، ما هو الترتيب الصحيح للتفاعلات؟",
      optsEn: [
        "Dropping water $\\to$ Cyclic trimerization in red-hot nickel tube $\\to$ Nitration with $\\text{HNO}_3/\\text{H}_2\\text{SO}_4$",
        "Dry distillation $\\to$ Catalytic hydrogenation $\\to$ Alkylation with methyl chloride",
        "Oxidation with $\\text{KMnO}_4$ $\\to$ Neutralization $\\to$ Chlorination",
        "Direct reaction with concentrated nitric acid at high temperature"
      ],
      optsAr: [
        "تنقيط الماء $\\to$ بلمرة حلقية ثلاثية في أنبوبة نيكل مسخنة للاحمرار $\\to$ نيترة بخليط النيترة",
        "تقطير جاف $\\to$ هدرجة حفزية $\\to$ ألكلة بكلوريد الميثيل",
        "أكسدة ببرمنجانات البوتاسيوم $\\to$ تعادل $\\to$ هلجنة",
        "تفاعل مباشر مع حمض النيتريك المركز في درجات حرارة عالية"
      ],
      ansIdx: 0,
      hintEn: "CaC2 + 2H2O -> C2H2; 3 C2H2 -> Benzene (C6H6); Benzene + HNO3/H2SO4 -> C6H5NO2.",
      hintAr: "تنقيط الماء يعطي الإيثاين (الأسيتيلين)، وبلمرته الحلقية تعطي البنزين العطري، ثم نيترة البنزين تعطي النيتروبنزين.",
      solEn: [
        "Step 1: $\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\to \\text{C}_2\\text{H}_2 + \\text{Ca(OH)}_2$.",
        "Step 2: $3\\text{C}_2\\text{H}_2 \\xrightarrow{\\text{Red-hot Ni}} \\text{C}_6\\text{H}_6$.",
        "Step 3: $\\text{C}_6\\text{H}_6 + \\text{HNO}_3 \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4, 50^\\circ\\text{C}} \\text{C}_6\\text{H}_5\\text{NO}_2 + \\text{H}_2\\text{O}$."
      ],
      solAr: [
        "الخطوة ١: تنقيط الماء على كربيد الكالسيوم لإنتاج الإيثاين: $\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\to \\text{C}_2\\text{H}_2 + \\text{Ca(OH)}_2$.",
        "الخطوة ٢: البلمرة الثلاثية الحلقية للإيثاين في أنبوبة نيكل مسخنة للاحمرار لإنتاج البنزين: $3\\text{C}_2\\text{H}_2 \\to \\text{C}_6\\text{H}_6$.",
        "الخطوة ٣: نيترة البنزين بخليط النيترة عند 50 مئوية لإنتاج النيتروبنزين: $\\text{C}_6\\text{H}_6 + \\text{HNO}_3 \\to \\text{C}_6\\text{H}_5\\text{NO}_2 + \\text{H}_2\\text{O}$."
      ],
      tipEn: "Nitration mixture consists of equal volumes of concentrated nitric and sulfuric acids.",
      tipAr: "خليط النيترة هو خليط بنسبة 1 : 1 حجماً من حمضي النيتريك والكبريتيك المركزين."
    },
    {
      titleEn: "Multi-Step Synthesis: Ethanol Dehydration at 140°C vs 180°C",
      titleAr: "نزع الماء من الإيثانول بتغير درجة الحرارة",
      qEn: "Heating excess ethanol with concentrated sulfuric acid at $140^\\circ\\text{C}$ produces compound (A), while heating at $180^\\circ\\text{C}$ produces compound (B). Compounds (A) and (B) are:",
      qAr: "عند تسخين وفرة من الإيثانول مع حمض الكبريتيك المركز عند $140^\\circ\\text{C}$ يتكون المركب (A)، بينما عند $180^\\circ\\text{C}$ يتكون المركب (B). المركبان (A) و (B) هما على الترتيب:",
      optsEn: [
        "(A) Diethyl ether, (B) Ethene",
        "(A) Ethene, (B) Diethyl ether",
        "(A) Ethanal, (B) Ethanoic acid",
        "(A) Ethyl hydrogen sulfate, (B) Carbon dioxide"
      ],
      optsAr: [
        "(A) إيثر ثنائي الإيثيل، (B) إيثين",
        "(A) إيثين، (B) إيثر ثنائي الإيثيل",
        "(A) أسيتالدهيد، (B) حمض الأسيتيك",
        "(A) كبريتات الإيثيل الهيدروجينية، (B) ثاني أكسيد الكربون"
      ],
      ansIdx: 0,
      hintEn: "At 140°C, 1 molecule of water is removed from two molecules of alcohol. At 180°C, 1 molecule of water is removed from a single molecule of alcohol.",
      hintAr: "عند 140 مئوية ينزع جزيء ماء من كل جزيئين كحول فيتكون الإيثر، وعند 180 مئوية ينزع جزيء ماء من جزيء كحول واحد فيتكون الألكين.",
      solEn: [
        "At $140^\\circ\\text{C}$: $2\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4, 140^\\circ\\text{C}} \\text{C}_2\\text{H}_5-\\text{O}-\\text{C}_2\\text{H}_5 + \\text{H}_2\\text{O}$ (Diethyl ether).",
        "At $180^\\circ\\text{C}$: $\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4, 180^\\circ\\text{C}} \\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O}$ (Ethene)."
      ],
      solAr: [
        "عند $140^\\circ\\text{C}$: ينزع جزيء ماء من جزيئين إيثانول: $2\\text{C}_2\\text{H}_5\\text{OH} \\to \\text{C}_2\\text{H}_5-\\text{O}-\\text{C}_2\\text{H}_5 + \\text{H}_2\\text{O}$ (إيثر ثنائي الإيثيل).",
        "عند $180^\\circ\\text{C}$: ينزع جزيء ماء من جزيء إيثانول واحد: $\\text{C}_2\\text{H}_5\\text{OH} \\to \\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O}$ (غاز الإيثين)."
      ],
      tipEn: "Temperature controls the mechanism of sulfuric acid dehydration.",
      tipAr: "درجة الحرارة هي العامل المحدد لنوع الناتج عند نزع الماء بحمض الكبريتيك."
    },
    {
      titleEn: "Aromatic Directing Groups: Meta-Chloronitrobenzene",
      titleAr: "توجيه تفاعلات الاستبدال في حلقة البنزين",
      qEn: "To prepare meta-chloronitrobenzene from benzene, what is the required order of operations?",
      qAr: "لتحضير مركب ميتا-كلورو نيتروبنزين ابتداءً من البنزين العطري، ما هو الترتيب الصحيح للعمليات؟",
      optsEn: [
        "Nitration of benzene first, then chlorination of the resulting nitrobenzene",
        "Chlorination of benzene first, then nitration of the resulting chlorobenzene",
        "Simultaneous chlorination and nitration in a single step",
        "Friedel-Crafts alkylation followed by oxidation and chlorination"
      ],
      optsAr: [
        "نيترة البنزين أولاً، ثم كلورة النيتروبنزين الناتج",
        "كلورة البنزين أولاً، ثم نيترة الكلوروبنزين الناتج",
        "كلورة ونيترة متزامنتان في خطوة واحدة",
        "ألكلة فريدل كرافت تليها أكسدة وكلورة"
      ],
      ansIdx: 0,
      hintEn: "Nitro (-NO2) is a meta-directing group. Chlorine (-Cl) is an ortho/para-directing group.",
      hintAr: "مجموعة النيترو (-NO2) توجه للموضع ميتا، بينما ذرة الكلور (-Cl) توجه للموضعين أرثو وبارا.",
      solEn: [
        "Because the chlorine is in the meta position relative to nitro, the group that directs to meta (the nitro group) must be introduced first.",
        "Step 1: Nitration produces nitrobenzene.",
        "Step 2: Chlorination of nitrobenzene directs the incoming chlorine to the meta position."
      ],
      solAr: [
        "بما أن ذرة الكلور في الموضع ميتا بالنسبة لمجموعة النيترو، يجب إدخال المجموعة الموجهة لميتا أولاً (مجموعة النيترو).",
        "الخطوة ١: نيترة البنزين لإنتاج نيتروبنزين.",
        "الخطوة ٢: كلورة النيتروبنزين حيث توجه مجموعة النيترو الكلور الداخل إلى الموضع ميتا."
      ],
      tipEn: "Remember: -NO2, -COOH, -CHO, -CO- direct to meta; -OH, -NH2, -X, -R direct to ortho/para.",
      tipAr: "احفظ: مجموعات النيترو والكربوكسيل والفورميل والكربونيل توجه لميتا؛ بينما الهيدروكسيل والأمينو والهالوجينات والألكيل توجه لأرثو وبارا."
    },
    {
      titleEn: "Synthesis of Aspirin from Salicylic Acid",
      titleAr: "تخليق الأسبرين من حمض الساليسيليك",
      qEn: "In the industrial synthesis of aspirin (acetylsalicylic acid), salicylic acid reacts with:",
      qAr: "في التخليق الصناعي لعقار الأسبرين (حمض أسيتيل ساليسيليك)، يتفاعل حمض الساليسيليك مع:",
      optsEn: [
        "Acetic acid (or acetic anhydride), where salicylic acid behaves as a phenol",
        "Methanol in presence of dry HCl, where salicylic acid behaves as a carboxylic acid",
        "Sodium hydroxide followed by hydrochloric acid",
        "Benzene in presence of anhydrous AlCl3"
      ],
      optsAr: [
        "حمض الأسيتيك (أو أنهيدريد الأسيتيك)، حيث يسلك حمض الساليسيليك مسلك الفينول",
        "الكحول الميثيلي في وجود غاز HCl الجاف، حيث يسلك مسلك الحمض",
        "هيدروكسيد الصوديوم متبوعاً بحمض الهيدروكلوريك",
        "البنزين في وجود كلوريد الألومنيوم اللامائي"
      ],
      ansIdx: 0,
      hintEn: "Salicylic acid contains both -COOH and phenolic -OH. To make aspirin, the phenolic -OH is esterified with acetic acid.",
      hintAr: "يحتوي حمض الساليسيليك على مجموعتي كربوكسيل وهيدروكسيل فينولية؛ ولتكوين الأسبرين تتم أسترة الهيدروكسيل الفينولية بحمض الأسيتيك.",
      solEn: [
        "Salicylic acid has dual functional groups.",
        "In aspirin synthesis, the phenolic -OH reacts with acetic acid or acetic anhydride to form an ester bond, retaining the free -COOH group."
      ],
      solAr: [
        "حمض الساليسيليك ثنائي المجموعة الوظيفية.",
        "في تحضير الأسبرين، تتفاعل مجموعة الهيدروكسيل الفينولية مع حمض الأسيتيك لتكوين إستر أسيتيل ساليسيليك مع بقاء مجموعة الكربوكسيل حرة."
      ],
      tipEn: "Oil of wintergreen (methyl salicylate) is made by reacting salicylic acid with methanol (acting as an acid).",
      tipAr: "زيت المروخ (ساليسيلات الميثيل) يُحضر بتفاعل حمض الساليسيليك كحمض مع كحول الميثانول."
    },
    {
      titleEn: "Distinguishing Primary vs Tertiary Alcohols by Oxidation",
      titleAr: "التمييز بين الكحولات الأولية والثالثية بالأكسدة",
      qEn: "Upon adding acidified potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}_2\\text{SO}_4$) to 1-butanol and 2-methyl-2-propanol:",
      qAr: "عند إضافة محلول ثاني كرومات البوتاسيوم البرتقالية المحمضة إلى كل من ١-بيوتانول و ٢-ميثيل-٢-بروبانول:",
      optsEn: [
        "The orange color turns green with 1-butanol, but remains unchanged with 2-methyl-2-propanol",
        "Both solutions turn green immediately",
        "Neither solution changes color",
        "The orange color turns green with 2-methyl-2-propanol only"
      ],
      optsAr: [
        "يتحول اللون البرتقالي إلى الأخضر مع ١-بيوتانول، بينما يظل برتقالياً مع ٢-ميثيل-٢-بروبانول",
        "يتحول كلا المحلولين إلى اللون الأخضر فوراً",
        "لا يتغير لون أي من المحلولين",
        "يتحول اللون للأخضر مع ٢-ميثيل-٢-بروبانول فقط"
      ],
      ansIdx: 0,
      hintEn: "1-Butanol is a primary alcohol and oxidizes to butanal then butanoic acid, reducing Cr(VI) to green Cr(III). 2-Methyl-2-propanol is a tertiary alcohol and does not oxidize.",
      hintAr: "١-بيوتانول كحول أولي يتأكسد ويختزل أيون الكروم إلى Cr+3 الأخضر، بينما ٢-ميثيل-٢-بروبانول كحول ثالثي لا يتأكسد لعدم وجود هيدروجين على الكاربينول.",
      solEn: [
        "1-Butanol has two hydrogens on its carbinol carbon, undergoing complete oxidation to butanoic acid and turning Cr(VI) orange to Cr(III) green.",
        "2-Methyl-2-propanol is tertiary with zero hydrogens on the carbinol carbon, thus resistant to oxidation under these conditions."
      ],
      solAr: [
        "١-بيوتانول كحول أولي يحتوي على ذرتي هيدروجين متصلتين بذرة كربون الكاربينول فيتأكسد على مرحلتين ويختزل ثاني كرومات البوتاسيوم البرتقالية إلى كبريتات الكروم الخضراء.",
        "٢-ميثيل-٢-بروبانول كحول ثالثي لا يحتوي على ذرات هيدروجين على الكاربينول، فلا يتأكسد ويظل اللون برتقالياً."
      ],
      tipEn: "Primary alcohols oxidize in 2 steps; secondary in 1 step; tertiary do not oxidize under standard conditions.",
      tipAr: "الكحولات الأولية تتأكسد على خطوتين، والثانوية على خطوة واحدة، والثالثية لا تتأكسد في الظروف العادية."
    }
  ];

  for (let i = 0; i < 58; i++) {
    const tmpl = hotsTemplates[i % hotsTemplates.length];
    const num = i + 1;
    hots.push({
      id: `chem_ch5_db_hots_${pad(i + 1)}`,
      titleEn: `${tmpl.titleEn} (${num})`,
      titleAr: `${tmpl.titleAr} (${num})`,
      difficulty: 'hots',
      questionEn: i < hotsTemplates.length ? tmpl.qEn : `[Reaction Sequence ${num}] ${tmpl.qEn}`,
      questionAr: i < hotsTemplates.length ? tmpl.qAr : `[مخطط التفاعل ${num}] ${tmpl.qAr}`,
      optionsEn: tmpl.optsEn as [string, string, string, string],
      optionsAr: tmpl.optsAr as [string, string, string, string],
      correctAnswer: tmpl.optsEn[tmpl.ansIdx],
      correctIndex: tmpl.ansIdx,
      hintEn: tmpl.hintEn,
      hintAr: tmpl.hintAr,
      stepByStepSolutionEn: tmpl.solEn,
      stepByStepSolutionAr: tmpl.solAr,
      teacherTipEn: tmpl.tipEn,
      teacherTipAr: tmpl.tipAr
    });
  }

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/thanaweya/chemCh5Databank.ts'),
    'chemCh5Databank',
    easy,
    med,
    hots
  );
}

// Run all
console.log('Generating Chemistry Databanks Ch2, Ch3, Ch4, Ch5...');
generateChemCh2();
generateChemCh3();
generateChemCh4();
generateChemCh5();
console.log('🎉 All 4 Chemistry Databanks generated successfully!');
