import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { Zap, HeartPulse, Info, AlertTriangle, Sparkles } from 'lucide-react';
import endocrineImg from '../../assets/biology/endocrine_system_anatomy.jpg';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

type GlandId = 'pituitary' | 'thyroid' | 'parathyroid' | 'adrenal' | 'pancreas';

interface GlandInfo {
  id: GlandId;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  hormonesEn: string[];
  hormonesAr: string[];
  targetOrgansEn: string;
  targetOrgansAr: string;
  disordersEn: string;
  disordersAr: string;
  examTipsEn: string;
  examTipsAr: string;
}

const GLANDS: GlandInfo[] = [
  {
    id: 'pituitary',
    nameEn: 'Pituitary Gland (Hypophysis)',
    nameAr: 'الغدة النخامية (سيدة الغدد الصماء)',
    locationEn: 'Attached to hypothalamus at the base of the brain in the sella turcica.',
    locationAr: 'تتصل بمنطقة تحت المهاد (الهيبوثالامس) أسفل المخ في تجويف عظمي خاص.',
    hormonesEn: [
      'Growth Hormone (GH) - Adenohypophysis',
      'Thyroid-Stimulating Hormone (TSH) - Adenohypophysis',
      'Adrenocorticotropic Hormone (ACTH) - Adenohypophysis',
      'Gonadotropins (FSH & LH) - Adenohypophysis',
      'Prolactin (PRL) - Adenohypophysis',
      'Antidiuretic Hormone (ADH / Vasopressin) - Neurohypophysis',
      'Oxytocin (OT) - Neurohypophysis'
    ],
    hormonesAr: [
      'هرمون النمو (GH) - الجزء الغدي',
      'الهرمون المنبه للغدة الدرقية (TSH) - الجزء الغدي',
      'الهرمون المنبه لقشرة الكظرية (ACTH) - الجزء الغدي',
      'الهرمونات المنبهة للمناسل (FSH و LH) - الجزء الغدي',
      'هرمون البرولاكتين المنبه لإفراز اللبن - الجزء الغدي',
      'الهرمون المضاد لإدرار البول والرافع لضغط الدم (ADH / قابض للأوعية) - الجزء العصبي',
      'هرمون الأوكسيتوسين المنبه لعضلات الرحم ونزول الحليب - الجزء العصبي'
    ],
    targetOrgansEn: 'All body bones & muscles (GH), Thyroid (TSH), Adrenal cortex (ACTH), Gonads (FSH/LH), Kidneys (ADH), Uterus (Oxytocin).',
    targetOrgansAr: 'عظام وعضلات الجسم (GH)، الدرقية (TSH)، قشرة الكظرية (ACTH)، الخصيتان والمبيضان (FSH/LH)، الكليتان (ADH)، الرحم (أوكسيتوسين).',
    disordersEn: 'Childhood GH deficiency causes Dwarfism; Childhood GH hypersecretion causes Gigantism; Adult GH hypersecretion causes Acromegaly (enlargement of facial bones, hands, and feet).',
    disordersAr: 'نقص GH في الطفولة يسبب القزامة؛ زيادته في الطفولة تسبب العملاقة؛ زيادته في البالغين تسبب الأكروميجالي (تضخم عظام الوجه والأطراف).',
    examTipsEn: 'ADH and Oxytocin are synthesized by neurosecretory cells in the hypothalamus and stored/released from the posterior pituitary lobe.',
    examTipsAr: 'هرمونات الجزء العصبي (ADH والأوكسيتوسين) تفرزها خلايا عصبية مفرزة في الهيبوثالامس، وتخزن فقط في الفص الخلفي.'
  },
  {
    id: 'thyroid',
    nameEn: 'Thyroid Gland',
    nameAr: 'الغدة الدرقية (غدة النشاط)',
    locationEn: 'In front of the trachea below the larynx; two lobes connected by an isthmus.',
    locationAr: 'في الجزء الأمامي من الرقبة ملاصقة للقصبة الهوائية أسفل الحنجرة، وتتكون من فصين بينهما برزخ.',
    hormonesEn: [
      'Thyroxine (Tetraiodothyronine T4) - Iodine-rich amino acid derivative',
      'Calcitonin - Peptide hormone'
    ],
    hormonesAr: [
      'الثيروكسين (مشتق حمض أميني يحتوي على اليود)',
      'الكالسيتونين (هرمون ببتيدي خافض لنسبة الكالسيوم)'
    ],
    targetOrgansEn: 'All body somatic cells (regulates basal metabolic rate, physical and mental development); bones (Calcitonin).',
    targetOrgansAr: 'جميع خلايا الجسم (ينظم الأيض الأساسي والنمو البدني والعقلي وامتصاص السكريات الأحادية)؛ العظام (الكالسيتونين).',
    disordersEn: 'Iodine deficiency causes Simple Goiter; Severe adult hyposecretion causes Myxedema; Severe childhood hyposecretion causes Cretinism; Hypersecretion causes Exophthalmic Goiter (high BMR, weight loss, nervousness, exophthalmos).',
    disordersAr: 'نقص اليود يسبب الجويتر البسيط؛ النقص الحاد في البالغين يسبب الميكسيديما؛ النقص الحاد في الأطفال يسبب القماءة؛ الزيادة المفرطة تسبب الجويتر الجحوظي.',
    examTipsEn: 'Calcitonin decreases calcium concentration in blood by preventing bone resorption and promoting calcium deposition in bone matrix.',
    examTipsAr: 'الكالسيتونين يقلل نسبة الكالسيوم في الدم ويمنع سحبه من العظام، ويعمل بتضاد دقيق مع هرمون الباراثورمون.'
  },
  {
    id: 'parathyroid',
    nameEn: 'Parathyroid Glands',
    nameAr: 'الغدد جارات الدرقية',
    locationEn: 'Four tiny oval bodies embedded on the posterior surface of the thyroid lobes (two on each side).',
    locationAr: 'أربع غدد صغيرة منفصلة تقع على السطح الخلفي لفصي الغدة الدرقية (اثنتان على كل جانب).',
    hormonesEn: ['Parathormone (Parathyroid Hormone - PTH)'],
    hormonesAr: ['هرمون الباراثورمون'],
    targetOrgansEn: 'Bones, kidneys, and intestinal mucosa (to mobilize and conserve calcium).',
    targetOrgansAr: 'العظام والكليتان والغشاء المخاطي للأمعاء (لسحب الكالسيوم وامتصاصه في الدم).',
    disordersEn: 'Hypersecretion leads to fragile, easily fractured bones due to calcium withdrawal; Hyposecretion causes painful muscular spasms (Tetany) and extreme excitability of the nervous system.',
    disordersAr: 'زيادة الإفراز تؤدي لهشاشة العظام وسهولة كسرها لسحب الكالسيوم منها؛ نقصه يسبب تشنجات عضلية مؤلمة وسرعة انفعال وغضب لأقل سبب (التيتاني).',
    examTipsEn: 'Parathormone and Calcitonin together maintain serum calcium level strictly between 9 and 11 mg/dL.',
    examTipsAr: 'الباراثورمون والكالسيتونين معاً يحافظان على ثبات نسبة الكالسيوم في الدم عند معدلها الطبيعي (٩ - ١١ مجم/١٠٠ سم٣).'
  },
  {
    id: 'adrenal',
    nameEn: 'Adrenal (Suprarenal) Glands',
    nameAr: 'الغدتان الكظريتان (فوق الكلوية)',
    locationEn: 'Crescent/pyramidal glands situated atop the superior pole of each kidney.',
    locationAr: 'غدتان هرميتان تقع كل واحدة منهما فوق قمة إحدى الكليتين.',
    hormonesEn: [
      'Cortex: Mineralocorticoids (Aldosterone - saves Na+, excretes K+)',
      'Cortex: Glucocorticoids (Cortisone & Corticosterone - carbohydrate metabolism)',
      'Cortex: Sex Hormones (Androgens, Estrogens, Progestins)',
      'Medulla: Adrenaline (Epinephrine) & Noradrenaline (Fight or Flight)'
    ],
    hormonesAr: [
      'القشرة: هرمونات معدنية (الألدوستيرون: يحافظ على الصوديوم ويتخلص من البوتاسيوم الزائد)',
      'القشرة: هرمونات سكرية (الكورتيزون والكورتيكوستيرون: ينظمان أيض الكربوهيدرات)',
      'القشرة: هرمونات جنسية مماثلة لهرمونات المناسل',
      'النخاع: الأدرينالين والنورأدرينالين (هرمونات الطوارئ والنجدة والقتال)'
    ],
    targetOrgansEn: 'Nephron tubules (Aldosterone), Liver and somatic tissues (Cortisol), Heart, vascular smooth muscle, and bronchioles (Adrenaline).',
    targetOrgansAr: 'أنابيب النفرونات (الألدوستيرون)، الكبد والأنسجة (الكورتيزون)، عضلة القلب والشرايين والقصبات الهوائية (الأدرينالين).',
    disordersEn: 'Tumors of the cortex cause masculinization in females and feminization in males; Chronic hypofunction of the cortex causes Addison\'s disease; Medullary adrenaline discharge causes tachycardia, elevated blood glucose, and hypertensive state.',
    disordersAr: 'أورام القشرة تسبب خللاً في التوازن الجنسي (ظهور صفات الذكورة لدى الإناث والعكس)؛ النقص المزمن يسبب مرض أديسون؛ نشاط النخاع يرفع سكر الدم وضغط الدم فورياً.',
    examTipsEn: 'The adrenal medulla is stimulated directly via sympathetic preganglionic nerves (nervous control), whereas the cortex is controlled by pituitary ACTH (hormonal control).',
    examTipsAr: 'نخاع الكظرية يخضع لتنبيه عصبي مباشر وسريع من الجهاز السمبثاوي، بينما قشرة الكظرية تخضع لتنبيه هرموني أبطأ عبر ACTH.'
  },
  {
    id: 'pancreas',
    nameEn: 'Pancreas (Islets of Langerhans)',
    nameAr: 'البنكرياس (جزر لانجرهانز)',
    locationEn: 'Mixed/heterocrine gland situated retroperitoneally behind the stomach in the loop of duodenum.',
    locationAr: 'غدة مشتركة (مختلطة قنوية ولاقنوية) تقع خلف المعدة بين منحنى الاثني عشر والطحال.',
    hormonesEn: [
      'Insulin - Synthesized by Beta (β) cells (dominant cell type, ~70%)',
      'Glucagon - Synthesized by Alpha (α) cells (fewer in number, ~25%)'
    ],
    hormonesAr: [
      'الأنسولين - تفرزه خلايا بيتا (تمثل غالبية خلايا جزر لانجرهانز)',
      'الجلوكاجون - تفرزه خلايا ألفا (قليلة العدد في جزر لانجرهانز)'
    ],
    targetOrgansEn: 'Liver, skeletal muscle, and adipose tissue.',
    targetOrgansAr: 'الكبد، العضلات الهيكلية، والأنسجة الدهنية.',
    disordersEn: 'Insulin deficiency causes Diabetes Mellitus (hyperglycemia, glucose in urine, metabolic ketoacidosis, excessive thirst and polyuria); Insulin overdose causes hypoglycemic coma.',
    disordersAr: 'نقص الأنسولين يسبب مرض البول السكري (ارتفاع جلوكوز الدم وخروجه في البول، تعدد التبول والعطش المستمر)؛ زيادته تسبب غيبوبة نقص السكر.',
    examTipsEn: 'Insulin facilitates glucose transport across cell membranes (except brain and liver) and stimulates glycogen synthesis in liver and muscles.',
    examTipsAr: 'الأنسولين يحث على نفاذ السكريات الأحادية (ما عدا الفركتوز الذي يمر دون الحاجة لأنسولين) عبر الأغشية الخلوية لأكسدتها وإنتاج الطاقة.'
  }
];

export const EndocrineLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedGland, setSelectedGland] = useState<GlandInfo>(GLANDS[0]);
  const [bloodGlucose, setBloodGlucose] = useState<number>(100); // 50 to 250 mg/dL
  const [bloodCalcium, setBloodCalcium] = useState<number>(10.0); // 5.0 to 15.0 mg/dL

  // Derived Pancreatic Feedback
  const insulinOutput = Math.min(100, Math.max(0, (bloodGlucose - 80) * 1.25));
  const glucagonOutput = Math.min(100, Math.max(0, (120 - bloodGlucose) * 2.0));

  // Derived Calcium Feedback
  const calcitoninOutput = Math.min(100, Math.max(0, (bloodCalcium - 9.5) * 20));
  const parathormoneOutput = Math.min(100, Math.max(0, (10.5 - bloodCalcium) * 20));

  return (
    <div className="space-y-6">
      {/* Overview & High-Res Photographic Atlas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Anatomical Image Display */}
        <div
          className={`lg:col-span-5 rounded-2xl border p-4 flex flex-col items-center justify-center relative overflow-hidden ${
            isContrast
              ? 'bg-black border-yellow-400'
              : isLight
              ? 'bg-slate-50 border-slate-200 shadow-sm'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-extrabold flex items-center gap-1.5 text-rose-400">
              <Sparkles className="w-3.5 h-3.5" />
              {isArabic ? 'أطلس الغدد الصماء فائق الدقة' : 'High-Res Endocrine Atlas'}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">840 KB • 8K Render</span>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden border border-slate-700/60 shadow-lg group">
            <img
              src={endocrineImg}
              alt="Human Endocrine System Anatomy"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-slate-200 flex justify-between items-center border border-white/10">
              <span>{isArabic ? 'محور تحت المهاد والنخامية والغدد التابعة' : 'Hypothalamic-Pituitary-Endocrine Axis'}</span>
              <span className="text-emerald-400 font-bold">{isArabic ? 'كامل' : 'Authentic'}</span>
            </div>
          </div>

          {/* Gland Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full mt-4">
            {GLANDS.map((g) => {
              const isActive = selectedGland.id === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGland(g)}
                  className={`p-2 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                    isActive
                      ? isContrast
                        ? 'bg-yellow-400 text-black font-black border-yellow-300'
                        : 'bg-rose-600 text-white font-extrabold shadow-md border-rose-500'
                      : isLight
                      ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {isArabic ? g.nameAr.split(' ')[1] || g.nameAr : g.nameEn.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Gland Technical Dossier */}
        <div
          className={`lg:col-span-7 rounded-2xl border p-5 sm:p-6 space-y-4 ${
            isContrast
              ? 'bg-black border-yellow-400 text-white'
              : isLight
              ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
              : 'bg-slate-900/90 border-slate-800 text-slate-100'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-lg font-black text-rose-400">
                {isArabic ? selectedGland.nameAr : selectedGland.nameEn}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isArabic ? selectedGland.locationAr : selectedGland.locationEn}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-rose-500/10 text-rose-400 border border-rose-500/30">
              {isArabic ? 'هرمونات رئيسية' : 'Endocrine Focus'}
            </span>
          </div>

          {/* Hormones List */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-black text-indigo-400">
              {isArabic ? 'الهرمونات المفرزة ووظائفها:' : 'Secreted Hormones & Target Tissues:'}
            </h4>
            <div className="grid grid-cols-1 gap-1.5">
              {(isArabic ? selectedGland.hormonesAr : selectedGland.hormonesEn).map((h, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Pathologies / Disorders */}
          <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-extrabold text-amber-400">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{isArabic ? 'الاعتلالات المرضية (الزيادة والنقص):' : 'Clinical Pathology & Endocrine Disorders:'}</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {isArabic ? selectedGland.disordersAr : selectedGland.disordersEn}
            </p>
          </div>

          {/* Teacher & Ministerial Examination Insight */}
          <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-800/40 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-extrabold text-indigo-400">
              <Info className="w-4 h-4 shrink-0" />
              <span>{isArabic ? 'ملاحظة امتحانات الثانوية العامة:' : 'Ministry Examination Key Insight:'}</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {isArabic ? selectedGland.examTipsAr : selectedGland.examTipsEn}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Homeostasis Feedback Simulators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Glucose Feedback Simulator */}
        <div
          className={`rounded-2xl border p-5 space-y-4 ${
            isContrast
              ? 'bg-black border-yellow-400'
              : isLight
              ? 'bg-white border-slate-200 shadow-sm'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-rose-500" />
              <h4 className="font-black text-sm text-slate-100">
                {isArabic ? 'محاكي اتزان سكر الجلوكوز في الدم' : 'Blood Glucose Homeostasis Simulator'}
              </h4>
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-800 text-rose-300">
              {bloodGlucose} mg/dL
            </span>
          </div>

          <p className="text-xs text-slate-400">
            {isArabic
              ? 'حرك مؤشر الجلوكوز لمراقبة استجابة خلايا بيتا (الأنسولين) وخلايا ألفا (الجلوكاجون):'
              : 'Adjust glucose concentration to observe dynamic Beta (Insulin) vs Alpha (Glucagon) secretion:'}
          </p>

          <input
            type="range"
            min="50"
            max="250"
            value={bloodGlucose}
            onChange={(e) => setBloodGlucose(parseInt(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block font-bold">
                {isArabic ? 'إفراز الأنسولين (خلايا بيتا):' : 'Insulin Secretion (β-cells):'}
              </span>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${insulinOutput}%` }}
                />
              </div>
              <span className="font-mono text-emerald-400 font-bold">{insulinOutput.toFixed(0)}%</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block font-bold">
                {isArabic ? 'إفراز الجلوكاجون (خلايا ألفا):' : 'Glucagon Secretion (α-cells):'}
              </span>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${glucagonOutput}%` }}
                />
              </div>
              <span className="font-mono text-amber-400 font-bold">{glucagonOutput.toFixed(0)}%</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300">
            {bloodGlucose > 120 ? (
              <span className="text-emerald-300 font-semibold">
                {isArabic
                  ? '⚡ حالة ارتفاع سكر (Hyperglycemia): تفرز خلايا بيتا الأنسولين ليحث الخلايا على امتصاص الجلوكوز وأكسدته، وتحويل الفائض إلى جليكوجين بالكبد والعضلات.'
                  : '⚡ Hyperglycemia: Beta cells release Insulin to promote cellular glucose uptake, glycolysis, and glycogen synthesis in liver and muscles.'}
              </span>
            ) : bloodGlucose < 80 ? (
              <span className="text-amber-300 font-semibold">
                {isArabic
                  ? '⚠️ حالة انخفاض سكر (Hypoglycemia): تفرز خلايا ألفا الجلوكاجون لتحفيز تحلل جليكوجين الكبد فقط إلى جلوكوز لإعادة النسبة للمعدل الطبيعي.'
                  : '⚠️ Hypoglycemia: Alpha cells release Glucagon to stimulate glycogenolysis in liver only, raising blood glucose back to normal.'}
              </span>
            ) : (
              <span className="text-cyan-300 font-semibold">
                {isArabic
                  ? '✅ المعدل الطبيعي المتزن (80 - 120 مجم/100 سم3): توازن ديناميكي مستقر بين الأنسولين والجلوكاجون.'
                  : '✅ Normoglycemia (80 - 120 mg/dL): Dynamic homeostatic equilibrium between Insulin and Glucagon.'}
              </span>
            )}
          </div>
        </div>

        {/* Calcium Feedback Simulator */}
        <div
          className={`rounded-2xl border p-5 space-y-4 ${
            isContrast
              ? 'bg-black border-yellow-400'
              : isLight
              ? 'bg-white border-slate-200 shadow-sm'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <h4 className="font-black text-sm text-slate-100">
                {isArabic ? 'محاكي اتزان الكالسيوم (الدرقية وجارات الدرقية)' : 'Blood Calcium Homeostasis Simulator'}
              </h4>
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-800 text-amber-300">
              {bloodCalcium.toFixed(1)} mg/dL
            </span>
          </div>

          <p className="text-xs text-slate-400">
            {isArabic
              ? 'حرك مؤشر كالسيوم الدم لمراقبة التضاد بين الكالسيتونين والباراثورمون:'
              : 'Adjust calcium concentration to observe antagonistic Calcitonin vs Parathormone action:'}
          </p>

          <input
            type="range"
            min="6.0"
            max="14.0"
            step="0.1"
            value={bloodCalcium}
            onChange={(e) => setBloodCalcium(parseFloat(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block font-bold">
                {isArabic ? 'إفراز الكالسيتونين (الدرقية):' : 'Calcitonin (Thyroid):'}
              </span>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-500 h-full transition-all duration-300"
                  style={{ width: `${calcitoninOutput}%` }}
                />
              </div>
              <span className="font-mono text-cyan-400 font-bold">{calcitoninOutput.toFixed(0)}%</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block font-bold">
                {isArabic ? 'إفراز الباراثورمون (جارات الدرقية):' : 'Parathormone (Parathyroids):'}
              </span>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-rose-500 h-full transition-all duration-300"
                  style={{ width: `${parathormoneOutput}%` }}
                />
              </div>
              <span className="font-mono text-rose-400 font-bold">{parathormoneOutput.toFixed(0)}%</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300">
            {bloodCalcium > 11.0 ? (
              <span className="text-cyan-300 font-semibold">
                {isArabic
                  ? '⚡ فرط كالسيوم الدم: تفرز الغدة الدرقية الكالسيتونين ليقلل امتصاص الكالسيوم ويمنع سحبه من العظام لترسيبه فيها.'
                  : '⚡ Hypercalcemia: Thyroid secretes Calcitonin to inhibit bone resorption and stimulate calcium deposition into bones.'}
              </span>
            ) : bloodCalcium < 9.0 ? (
              <span className="text-rose-300 font-semibold">
                {isArabic
                  ? '⚠️ نقص كالسيوم الدم: تفرز الغدد جارات الدرقية الباراثورمون لسحب الكالسيوم من العظام وزيادة امتصاصه من الكلى والأمعاء لتجنب التشنجات العضلية (التيتاني).'
                  : '⚠️ Hypocalcemia: Parathyroid glands release PTH to resorb calcium from bones and increase renal/gut reabsorption, preventing tetany.'}
              </span>
            ) : (
              <span className="text-emerald-300 font-semibold">
                {isArabic
                  ? '✅ المعدل الطبيعي المتزن (9 - 11 مجم/100 سم3): صحة العظام والجهاز العصبي في حالة توازن مثالي.'
                  : '✅ Normocalcemia (9 - 11 mg/dL): Perfect structural and neuromuscular balance.'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
