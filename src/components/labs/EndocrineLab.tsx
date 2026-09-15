import React, { useCallback, useMemo } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
  type LabParameterSchema,
  type LabPreset,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  Zap,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import endocrineImg from '../../assets/biology/endocrine_system_anatomy.jpg';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type EndocrineSubTab = 'feedback_axes' | 'clinical_pathology' | 'anatomy_explorer';
export type FeedbackAxisType = 'hpt_thyroid' | 'glucose_homeostasis' | 'calcium_homeostasis' | 'osmo_bp';
export type ClinicalDisorderType =
  | 'normal'
  | 'acromegaly'
  | 'myxedema'
  | 'exophthalmic_goiter'
  | 'tetany'
  | 'diabetes_mellitus'
  | 'adrenal_emergency';
export type GlandId = 'pituitary' | 'thyroid' | 'parathyroid' | 'adrenal' | 'pancreas';

export interface EndocrineParams {
  subTab: EndocrineSubTab;
  selectedAxis: FeedbackAxisType;
  selectedDisorder: ClinicalDisorderType;
  selectedGlandId: GlandId;
  hormonePerturbation: number; // -100 to +100%
  glucoseIntake: number; // 0 to 100 g
  calciumIntake: number; // 0 to 50 mg
  stressLevel: number; // 0 to 100%
}

export interface EndocrineSimState {
  tshLevel: number; // mIU/L (normal 0.4 to 4.0)
  thyroxineLevel: number; // ug/dL (normal 5.0 to 12.0)
  insulinLevel: number; // uIU/mL (normal 5 to 25)
  glucagonLevel: number; // pg/mL (normal 50 to 100)
  bloodGlucose: number; // mg/dL (normal 80 to 120)
  pthLevel: number; // pg/mL (normal 15 to 65)
  calcitoninLevel: number; // pg/mL (normal 0 to 8)
  serumCalcium: number; // mg/dL (normal 9.0 to 11.0)
  adhLevel: number; // pg/mL (normal 1.0 to 5.0)
  aldosteroneLevel: number; // ng/dL (normal 7 to 30)
  systolicBP: number; // mmHg (normal 115 to 125)
  heartRate: number; // BPM (normal 65 to 75)
  bmrKcal: number; // kcal/day (normal 1500 to 1700)
}

export interface GlandInfo {
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

export const GLANDS: GlandInfo[] = [
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
    nameEn: 'Thyroid Gland (Metabolic Regulator)',
    nameAr: 'الغدة الدرقية (غدة النشاط والأيض)',
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
    nameEn: 'Parathyroid Glands (Calcium Guardians)',
    nameAr: 'الغدد جارات الدرقية (حارسات الكالسيوم)',
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
    nameAr: 'الغدتان الكظريتان (فوق الكلويتين)',
    locationEn: 'Pyramid-shaped glands resting atop each kidney; composed of Cortex and Medulla.',
    locationAr: 'غدتان هرميتان تعلوان الكليتين؛ وتتكون كل منهما من قشرة ونخاع.',
    hormonesEn: [
      'Glucocorticoids (Cortisone & Corticosterone) - Cortex',
      'Mineralocorticoids (Aldosterone) - Cortex',
      'Sex Hormones (Androgens, Estrogens, Progestins) - Cortex',
      'Adrenaline (Epinephrine) & Noradrenaline - Medulla'
    ],
    hormonesAr: [
      'الهرمونات السكرية (الكورتيزون والكورتيكوستيرون) - القشرة',
      'الهرمونات المعدنية (الألدوستيرون) - القشرة',
      'الهرمونات الجنسية المفرزة من القشرة',
      'الأدرينالين والنورأدرينالين (هرمونا الطوارئ والنجدة) - النخاع'
    ],
    targetOrgansEn: 'Liver (metabolism), Kidneys (Aldosterone: Na+ reabsorption, K+ excretion), Cardiovascular system (Adrenaline).',
    targetOrgansAr: 'الكبد (تنظيم أيض الكربوهيدرات)، الكليتان (الألدوستيرون يمتص الصوديوم ويطرد البوتاسيوم)، القلب والأوعية (الأدرينالين).',
    disordersEn: 'Cortical sex hormone imbalance causes masculinization in females or feminization in males; Aldosterone deficiency leads to severe salt loss; Medullary surge prepares for fight or flight.',
    disordersAr: 'خلل الهرمونات الجنسية يسبب ظهور صفات الذكورة في الإناث أو العكس؛ نقص الألدوستيرون يسبب هبوط ضغط الدم وفقدان الأملاح.',
    examTipsEn: 'Adrenal medulla is directly innervated by the sympathetic nervous system, allowing instantaneous emergency mobilization without pituitary mediation.',
    examTipsAr: 'نخاع الكظرية يخضع لتنبيه عصبي مباشر من الجهاز السمبثاوي، مما يتيح استجابة فورية فائقة السرعة دون انتظار الغدة النخامية.'
  },
  {
    id: 'pancreas',
    nameEn: 'Pancreas (Islets of Langerhans)',
    nameAr: 'البنكرياس (جزر لانجرهانز)',
    locationEn: 'Retroperitoneal mixed gland in the loop of duodenum behind the stomach.',
    locationAr: 'غدة مختلطة (قنوية ولاقنوية) تقع في تجويف البطن خلف المعدة بين منحنى الاثني عشر.',
    hormonesEn: [
      'Insulin - Beta (β) Cells (majority of islet cells)',
      'Glucagon - Alpha (α) Cells (minority of islet cells)'
    ],
    hormonesAr: [
      'الإنسولين - خلايا بيتا (تمثل غالبية جزر لانجرهانز)',
      'الجلوكاجون - خلايا ألفا (تمثل قلة من جزر لانجرهانز)'
    ],
    targetOrgansEn: 'Liver, skeletal muscles, and adipose tissue.',
    targetOrgansAr: 'الكبد والعضلات الهيكلية والأنسجة الدهنية.',
    disordersEn: 'Insulin deficiency or receptor insensitivity causes Diabetes Mellitus (hyperglycemia, glucosuria, polydipsia, polyuria, diabetic coma).',
    disordersAr: 'نقص إفراز الإنسولين يسبب مرض البول السكري (ارتفاع السكر في الدم، ظهوره في البول، تعدد مرات التبول، والعطش المستمر).',
    examTipsEn: 'Insulin is the ONLY hormone in the human body that decreases blood glucose, whereas Glucagon, Adrenaline, Thyroxine, and Cortisol all elevate glucose.',
    examTipsAr: 'الإنسولين هو الهرمون الوحيد في الجسم الذي يخفض نسبة السكر في الدم، بينما ترفعه عدة هرمونات (الجلوكاجون، الأدرينالين، الثيروكسين، والكورتيزون).'
  }
];

export const INITIAL_ENDOCRINE_PARAMS: EndocrineParams = {
  subTab: 'feedback_axes',
  selectedAxis: 'hpt_thyroid',
  selectedDisorder: 'normal',
  selectedGlandId: 'pituitary',
  hormonePerturbation: 0,
  glucoseIntake: 25,
  calciumIntake: 10,
  stressLevel: 20,
};

// Parameter schema
const ENDOCRINE_PARAM_SCHEMA: LabParameterSchema<EndocrineParams> = {
  subTab: {
    key: 'subTab',
    type: 'select',
    labelEn: 'Endocrine Investigation Module',
    labelAr: 'وحدة الاستكشاف الهرموني',
    defaultValue: 'feedback_axes',
    options: [
      { value: 'feedback_axes', labelEn: '1. Negative Feedback Axes', labelAr: '١. محاور التغذية الراجعة السلبية' },
      { value: 'clinical_pathology', labelEn: '2. Clinical Pathology & Disorders', labelAr: '٢. الاضطرابات المرضية والسريرية' },
      { value: 'anatomy_explorer', labelEn: '3. High-Res Endocrine Anatomy Atlas', labelAr: '٣. أطلس الغدد الصماء فائق الدقة' },
    ],
    category: 'primary',
  },
  selectedAxis: {
    key: 'selectedAxis',
    type: 'select',
    labelEn: 'Endocrine Feedback Axis',
    labelAr: 'محور التغذية الراجعة الهرموني',
    defaultValue: 'hpt_thyroid',
    options: [
      { value: 'hpt_thyroid', labelEn: 'HPT Axis: TSH & Thyroxine Feedback', labelAr: 'محور الغدة الدرقية: TSH والثيروكسين' },
      { value: 'glucose_homeostasis', labelEn: 'Pancreas: Insulin & Glucagon Loop', labelAr: 'البنكرياس: الإنسولين والجلوكاجون' },
      { value: 'calcium_homeostasis', labelEn: 'Calcium Loop: PTH & Calcitonin (9-11 mg/dL)', labelAr: 'توازن الكالسيوم: الباراثورمون والكالسيتونين' },
      { value: 'osmo_bp', labelEn: 'Osmoregulation & BP: ADH & Aldosterone', labelAr: 'الضغط والماء: ADH والألدوستيرون' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'feedback_axes',
  },
  selectedDisorder: {
    key: 'selectedDisorder',
    type: 'select',
    labelEn: 'Clinical Disorder Profile',
    labelAr: 'الحالة المرضية السريرية',
    defaultValue: 'normal',
    options: [
      { value: 'normal', labelEn: 'Euthyroid / Homeostatic Baseline', labelAr: 'حالة الاتزان الطبيعي السليم' },
      { value: 'acromegaly', labelEn: 'Acromegaly (Adult GH Hypersecretion)', labelAr: 'الأكروميجالي (زيادة هرمون النمو بالبالغين)' },
      { value: 'myxedema', labelEn: 'Myxedema (Adult Severe Thyroxine Drop)', labelAr: 'الميكسيديما (النقص الحاد بالبالغين)' },
      { value: 'exophthalmic_goiter', labelEn: 'Exophthalmic Goiter (High Thyroxine)', labelAr: 'الجويتر الجحوظي (فرط نشاط الدرقية)' },
      { value: 'tetany', labelEn: 'Tetany (Hypoparathyroidism & Low Ca2+)', labelAr: 'التيتاني وتشنجات نقص الباراثورمون' },
      { value: 'diabetes_mellitus', labelEn: 'Diabetes Mellitus (Insulin Deficiency)', labelAr: 'مرض البول السكري (نقص الإنسولين)' },
      { value: 'adrenal_emergency', labelEn: 'Adrenal Medullary Surge (Fight or Flight)', labelAr: 'طوارئ الأدرينالين والكر والفر' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'clinical_pathology',
  },
  selectedGlandId: {
    key: 'selectedGlandId',
    type: 'select',
    labelEn: 'Anatomical Gland Focus',
    labelAr: 'الغدة الصماء المستهدفة',
    defaultValue: 'pituitary',
    options: [
      { value: 'pituitary', labelEn: 'Pituitary Gland (Master Gland)', labelAr: 'الغدة النخامية (سيدة الغدد)' },
      { value: 'thyroid', labelEn: 'Thyroid Gland (Activity Gland)', labelAr: 'الغدة الدرقية (غدة النشاط)' },
      { value: 'parathyroid', labelEn: 'Parathyroid Glands (Ca2+)', labelAr: 'الغدد جارات الدرقية' },
      { value: 'adrenal', labelEn: 'Adrenal Glands (Emergency & Minerals)', labelAr: 'الغدتان الكظريتان' },
      { value: 'pancreas', labelEn: 'Pancreas (Islets of Langerhans)', labelAr: 'البنكرياس (جزر لانجرهانز)' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'anatomy_explorer',
  },
  hormonePerturbation: {
    key: 'hormonePerturbation',
    type: 'number',
    labelEn: 'Hormone Level Perturbation',
    labelAr: 'نسبة اضطراب إفراز الهرمون',
    defaultValue: 0,
    min: -100,
    max: 100,
    step: 10,
    unit: '%',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'feedback_axes',
  },
  glucoseIntake: {
    key: 'glucoseIntake',
    type: 'number',
    labelEn: 'Oral Glucose Ingestion',
    labelAr: 'جرعة الجلوكوز المتناولة',
    defaultValue: 25,
    min: 0,
    max: 100,
    step: 5,
    unit: ' g',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'feedback_axes' && p.selectedAxis === 'glucose_homeostasis',
  },
  calciumIntake: {
    key: 'calciumIntake',
    type: 'number',
    labelEn: 'Dietary Calcium Challenge',
    labelAr: 'تحدي الكالسيوم الغذائي',
    defaultValue: 10,
    min: 0,
    max: 50,
    step: 5,
    unit: ' mg',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'feedback_axes' && p.selectedAxis === 'calcium_homeostasis',
  },
  stressLevel: {
    key: 'stressLevel',
    type: 'number',
    labelEn: 'Sympathetic Stress Level',
    labelAr: 'مستوى التنبيه السمبثاوي والضغط',
    defaultValue: 20,
    min: 0,
    max: 100,
    step: 10,
    unit: '%',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'feedback_axes' && p.selectedAxis === 'osmo_bp',
  },
};

// Presets
const ENDOCRINE_PRESETS: LabPreset<EndocrineParams>[] = [
  {
    id: 'hpt_thyroid_negative_feedback',
    nameEn: 'Thyroid-Pituitary Negative Feedback Loop',
    nameAr: 'التغذية الراجعة السلبية بين النخامية والدرقية',
    descriptionEn: 'High circulating Thyroxine suppresses pituitary TSH secretion to maintain metabolic homeostasis.',
    descriptionAr: 'ارتفاع الثيروكسين في الدم يثبط إفراز TSH من النخامية للحفاظ على ثبات الأيض.',
    badge: 'Feedback',
    params: {
      subTab: 'feedback_axes',
      selectedAxis: 'hpt_thyroid',
      selectedDisorder: 'normal',
      selectedGlandId: 'thyroid',
      hormonePerturbation: 0,
      glucoseIntake: 25,
      calciumIntake: 10,
      stressLevel: 20,
    },
  },
  {
    id: 'glucose_insulin_response',
    nameEn: 'Postprandial Blood Glucose & Insulin Surge',
    nameAr: 'استجابة الإنسولين لتناول السكريات وخفض الجلوكوز',
    descriptionEn: 'Meal ingestion triggers beta-cell insulin secretion, driving glucose into liver and muscle cells.',
    descriptionAr: 'تناول وجبة سكرية يحفز خلايا بيتا لضخ الإنسولين وتخزين الجلوكوز كجليكوجين في الكبد والعضلات.',
    badge: 'Glucose',
    params: {
      subTab: 'feedback_axes',
      selectedAxis: 'glucose_homeostasis',
      selectedDisorder: 'normal',
      selectedGlandId: 'pancreas',
      hormonePerturbation: 0,
      glucoseIntake: 75,
      calciumIntake: 10,
      stressLevel: 10,
    },
  },
  {
    id: 'calcium_pth_calcitonin',
    nameEn: 'Calcium Homeostasis: PTH vs Calcitonin',
    nameAr: 'ثبات الكالسيوم: الباراثورمون في مواجهة الكالسيتونين',
    descriptionEn: 'Strict regulation of serum Ca2+ between 9.0 and 11.0 mg/dL via antagonistic bone and kidney actions.',
    descriptionAr: 'تنظيم تركيز الكالسيوم بدقة بين ٩ و ١١ مجم/١٠٠ سم٣ بتضاد دقيق بين الغدتين.',
    badge: 'Calcium',
    params: {
      subTab: 'feedback_axes',
      selectedAxis: 'calcium_homeostasis',
      selectedDisorder: 'normal',
      selectedGlandId: 'parathyroid',
      hormonePerturbation: 0,
      glucoseIntake: 25,
      calciumIntake: 35,
      stressLevel: 10,
    },
  },
  {
    id: 'exophthalmic_goiter_clinical',
    nameEn: 'Exophthalmic Goiter (Graves Hyperthyroidism)',
    nameAr: 'حالة سريرية: الجويتر الجحوظي وفرط الثيروكسين',
    descriptionEn: 'Severe thyroxine elevation causing hypermetabolism, rapid weight loss, tachycardia, and low TSH.',
    descriptionAr: 'ارتفاع حاد في الثيروكسين يسبب هبوط TSH، وزيادة استهلاك الأكسجين ونقص الوزن وسرعة ضربات القلب.',
    badge: 'Clinical',
    params: {
      subTab: 'clinical_pathology',
      selectedAxis: 'hpt_thyroid',
      selectedDisorder: 'exophthalmic_goiter',
      selectedGlandId: 'thyroid',
      hormonePerturbation: 80,
      glucoseIntake: 25,
      calciumIntake: 10,
      stressLevel: 60,
    },
  },
  {
    id: 'tetany_hypocalcemia',
    nameEn: 'Acute Tetany (Hypoparathyroidism)',
    nameAr: 'حالة سريرية: التيتاني والتشنجات العضلية الحادة',
    descriptionEn: 'Severe drop in PTH leading to critical hypocalcemia (<7.0 mg/dL) and painful involuntary spasms.',
    descriptionAr: 'هبوط الباراثورمون مسبباً انخفاض الكالسيوم وتشنجات عضلية مؤلمة مع سرعة الغضب والانفعال.',
    badge: 'Pathology',
    params: {
      subTab: 'clinical_pathology',
      selectedAxis: 'calcium_homeostasis',
      selectedDisorder: 'tetany',
      selectedGlandId: 'parathyroid',
      hormonePerturbation: -80,
      glucoseIntake: 25,
      calciumIntake: 5,
      stressLevel: 40,
    },
  },
];

// POE Prompts
const ENDOCRINE_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_primary_vs_secondary_hypothyroid',
    titleEn: 'Challenge 1: Primary Thyroid Failure vs Secondary Pituitary Failure',
    titleAr: 'تحدي ١: التمييز بين الخمول الدرقي الأولي وخمول الغدة النخامية',
    scenarioEn: 'A clinical blood test reveals a patient with low circulating Thyroxine (2.1 µg/dL). Further lab tests measure serum TSH at 28.5 mIU/L (normal is 0.4 - 4.0 mIU/L).',
    scenarioAr: 'أظهر تحليل دم لمريض انخفاضاً حاداً في هرمون الثيروكسين (٢.١ ميكروجرام/دسل). وعند قياس الهرمون المنبه للدرقية TSH في الدم، وجد مرتفعاً بشدة عند ٢٨.٥ وحدة (المعدل الطبيعي ٠.٤ - ٤.٠).',
    questionEn: 'Where is the primary pathological lesion located, and why is TSH elevated?',
    questionAr: 'أين يقع الخلل الأولي المسبب للمرض، ولماذا ارتفعت نسبة هرمون TSH؟',
    optionsEn: [
      'The primary failure is in the Thyroid gland (Primary Hypothyroidism); low thyroxine removes negative feedback, causing pituitary hypersecretion of TSH.',
      'The primary failure is in the Pituitary gland; it is overstimulated by high thyroxine.',
      'The Parathyroid glands are destroyed, which stops TSH from working on thyroid cells.',
      'The patient has an adrenal tumor secreting excess adrenaline that destroys TSH.'
    ],
    optionsAr: [
      'الخلل الأولي في الغدة الدرقية نفسها (قصور درقي أولي)؛ فنقص الثيروكسين أزال التثبيط الراجع السلبي، مما دفع النخامية لضخ TSH بغزارة لتنبيهها.',
      'الخلل في الغدة النخامية فقط لأنها تفرز هرموناتها دون أي استجابة للثيروكسين.',
      'الغدد جارات الدرقية هي المسؤولة لأنها توقف عمل مستقبلات TSH.',
      'يوجد ورم في نخاع الكظرية يفرز أدرينالين يدمر هرمون الثيروكسين.'
    ],
    correctOptionIndex: 0,
    scientificExplanationEn: 'Under negative feedback regulation, the anterior pituitary monitors circulating thyroxine. When thyroid tissue fails to produce thyroxine (e.g. iodine deficiency or autoimmune thyroiditis), the absence of negative feedback disinhibits the pituitary, causing compensatory hypersecretion of TSH.',
    scientificExplanationAr: 'وفق آلية التغذية الراجعة السلبية، تستشعر الغدة النخامية تركيز الثيروكسين في الدم. وعندما تعجز الغدة الدرقية عن إنتاجه (كما في الجويتر البسيط أو الميكسيديما)، يزول التثبيط الراجع السلبي فتفرز النخامية كميات هائلة من TSH في محاولة فاشلة لتنشيطها.',
  },
  {
    id: 'poe_adrenaline_glucose_override',
    titleEn: 'Challenge 2: Emergency Fight-or-Flight Hormone Hierarchy',
    titleAr: 'تحدي ٢: سيادة الأدرينالين وأولويات الطاقة أثناء الطوارئ',
    scenarioEn: 'During a sudden predatory threat or intense athletic sprint, the sympathetic nervous system triggers massive adrenaline secretion from the adrenal medulla.',
    scenarioAr: 'أثناء التعرض لخطر مفاجئ أو أثناء مسابقة الجري، يحفز الجهاز العصبي السمبثاوي إفرازاً كبيراً للأدرينالين من نخاع الكظرية.',
    questionEn: 'Why does adrenaline stimulate rapid liver glycogen breakdown while simultaneously suppressing insulin action?',
    questionAr: 'لماذا يحفز الأدرينالين التحلل السريع لجليكوجين الكبد مع تثبيط عمل الإنسولين في نفس الوقت؟',
    optionsEn: [
      'To rapidly saturate the bloodstream with glucose and prioritize fuel delivery directly to active muscles and the brain without storing it.',
      'Because adrenaline converts all glucose directly into bone calcium to strengthen the skeleton.',
      'Because insulin destroys adrenaline if both are active simultaneously in the bloodstream.',
      'To induce sudden sleep and protect the nervous system from exhaustion.'
    ],
    optionsAr: [
      'لرفع تركيز الجلوكوز في الدم فوراً وتوجيهه كوقود سريع للعضلات المنقبضة والمخ والقلب، ومنع تخزينه في الخلايا الدهنية.',
      'لأن الأدرينالين يحول الجلوكوز إلى كالسيوم لتقوية العظام أثناء الهروب.',
      'لأن الإنسولين يدمر الأدرينالين إذا وجدا معاً في الدم.',
      'لإحداث نوم مفاجئ لحماية الجهاز العصبي من الإرهاق.'
    ],
    correctOptionIndex: 0,
    scientificExplanationEn: 'Adrenaline is the hormone of emergency ("fight or flight"). It activates liver glycogen phosphorylase to pour glucose into circulation, elevates cardiac output and blood pressure, and transiently blocks insulin to ensure glucose remains available for critical muscular and cerebral work.',
    scientificExplanationAr: 'الأدرينالين هرمون الطوارئ والنجدة، يعمل على تحويل الجليكوجين المخزن في الكبد إلى جلوكوز فوري، وزيادة قوة وسرعة ضربات القلب، ورفع ضغط الدم، مع تثبيط سحب السكر للأنسجة الدهنية لضمان توفير أقصى طاقة حركية للعضلات الهيكلية.',
  },
  {
    id: 'poe_parathyroid_tetany_mechanism',
    titleEn: 'Challenge 3: Accidental Parathyroidectomy & Tetany Spasms',
    titleAr: 'تحدي ٣: الاستئصال غير المقصود لجارات الدرقية والتشنجات',
    scenarioEn: 'During a surgical thyroidectomy, a surgeon accidentally excises all four parathyroid glands along with the posterior thyroid lobes.',
    scenarioAr: 'أثناء عملية جراحية لاستئصال الغدة الدرقية، قام الجراح بالخطأ باستئصال الغدد جارات الدرقية الأربع بالكامل مع الفصين.',
    questionEn: 'What acute physiological catastrophe manifests within 24 to 48 hours, and why?',
    questionAr: 'ما هي الكارثة الفسيولوجية الحادة التي ستظهر على المريض خلال ٢٤ إلى ٤٨ ساعة، وما تفسيرها؟',
    optionsEn: [
      'Acute tetany with painful muscular spasms and extreme nervous irritability due to sudden hypocalcemia (<7.0 mg/dL).',
      'Instant dwarfism due to lack of growth hormone.',
      'Extreme obesity and myxedema within 1 hour.',
      'Severe hypoglycemia with blood glucose dropping to zero.'
    ],
    optionsAr: [
      'تشنجات عضلية مؤلمة وسرعة انفعال وغضب شديد (التيتاني) بسبب الهبوط الحاد في نسبة كالسيوم الدم عن ٧ مجم/١٠٠ سم٣.',
      'قزامة فورية بسبب غياب هرمون النمو.',
      'سمنة مفرطة وميكسيديما حادة خلال ساعة واحدة.',
      'هبوط سكر الدم إلى الصفر المطلق.'
    ],
    correctOptionIndex: 0,
    scientificExplanationEn: 'The parathyroid glands secrete Parathormone (PTH), which continuously maintains serum calcium between 9 and 11 mg/dL. Removing them halts PTH secretion, causing serum calcium to plummet. Low extracellular calcium destabilizes neuronal and sarcolemmal membranes, causing spontaneous repetitive depolarization, muscle tetany, and asphyxiation if untreated.',
    scientificExplanationAr: 'تفرز الغدد جارات الدرقية هرمون الباراثورمون الضروري لثبات كالسيوم الدم عند ٩ - ١١ مجم/١٠٠ سم٣. واستئصالها يؤدي لنقص حاد في الكالسيوم، مما يزيد استثارة الأعصاب وتكرار إشاراتها التلقائية فيحدث التيتاني (تشنجات عضلية مؤلمة وسرعة انفعال وغضب لأقل سبب).'
  }
];

// Physical calculation engine
export function computeEndocrineSimState(params: EndocrineParams): EndocrineSimState {
  const {
    selectedAxis,
    selectedDisorder,
    hormonePerturbation,
    glucoseIntake,
    calciumIntake,
    stressLevel,
  } = params;

  // Baseline healthy normal adult parameters
  let tsh = 1.8; // mIU/L (0.4 - 4.0)
  let thyroxine = 8.5; // ug/dL (5.0 - 12.0)
  let insulin = 12.0; // uIU/mL (5 - 25)
  let glucagon = 75.0; // pg/mL (50 - 100)
  let glucose = 95.0; // mg/dL (80 - 120)
  let pth = 35.0; // pg/mL (15 - 65)
  let calcitonin = 4.0; // pg/mL (0 - 8)
  let calcium = 10.0; // mg/dL (9.0 - 11.0)
  let adh = 2.5; // pg/mL (1.0 - 5.0)
  let aldosterone = 15.0; // ng/dL (7 - 30)
  let sbp = 120.0; // mmHg
  let hr = 72.0; // BPM
  let bmr = 1600.0; // kcal/day

  // Handle specific clinical disorder overrides
  if (selectedDisorder === 'acromegaly') {
    bmr = 1850.0;
    glucose = 135.0; // GH is diabetogenic
    insulin = 28.0;
    sbp = 138.0;
  } else if (selectedDisorder === 'myxedema') {
    thyroxine = 1.8;
    tsh = 32.0; // Unchecked high TSH due to lack of feedback
    bmr = 1100.0; // Low metabolic rate
    hr = 52.0; // Bradycardia
    sbp = 105.0;
  } else if (selectedDisorder === 'exophthalmic_goiter') {
    thyroxine = 24.5;
    tsh = 0.05; // Negative feedback suppression
    bmr = 2450.0; // Hypermetabolism
    hr = 118.0; // Tachycardia
    sbp = 155.0;
  } else if (selectedDisorder === 'tetany') {
    pth = 3.0; // Severe hypoparathyroidism
    calcium = 6.2; // Critical hypocalcemia (<7.0)
    calcitonin = 1.0;
    hr = 95.0;
  } else if (selectedDisorder === 'diabetes_mellitus') {
    insulin = 1.5; // Severe absolute insulin deficiency
    glucagon = 145.0;
    glucose = 310.0; // Marked hyperglycemia
    sbp = 135.0;
  } else if (selectedDisorder === 'adrenal_emergency') {
    stressLevel === 100;
    hr = 135.0;
    sbp = 175.0;
    glucose = 170.0; // Adrenaline glycogenolysis
    insulin = 6.0; // Suppressed
    glucagon = 130.0;
    bmr = 2100.0;
  } else {
    // Normal Axis dynamic simulation with sliders
    if (selectedAxis === 'hpt_thyroid') {
      const p = hormonePerturbation / 100; // -1 to +1
      thyroxine = Math.max(1.0, Math.min(25.0, 8.5 * (1 + p)));
      // Inverse negative feedback on TSH
      tsh = Math.max(0.02, Math.min(45.0, 1.8 / Math.pow(thyroxine / 8.5, 1.8)));
      bmr = Math.floor(1600 * Math.pow(thyroxine / 8.5, 0.45));
      hr = Math.floor(72 * (0.6 + 0.4 * (thyroxine / 8.5)));
      sbp = Math.floor(120 + (thyroxine - 8.5) * 2.2);
    } else if (selectedAxis === 'glucose_homeostasis') {
      // Dynamic response to glucose challenge
      const deltaG = (glucoseIntake - 25) * 1.2;
      glucose = Math.max(65.0, Math.min(220.0, 95.0 + deltaG * 0.5));
      if (glucose > 100) {
        // Insulin surge
        insulin = Math.min(80.0, 12.0 + (glucose - 100) * 0.7);
        glucagon = Math.max(25.0, 75.0 - (glucose - 100) * 0.4);
      } else {
        // Hypoglycemia response: Glucagon surge
        glucagon = Math.min(160.0, 75.0 + (100 - glucose) * 1.5);
        insulin = Math.max(3.0, 12.0 - (100 - glucose) * 0.2);
      }
    } else if (selectedAxis === 'calcium_homeostasis') {
      const deltaCa = (calciumIntake - 10) * 0.1;
      calcium = Math.max(6.5, Math.min(13.5, 10.0 + deltaCa * 0.4));
      if (calcium > 10.0) {
        calcitonin = Math.min(25.0, 4.0 + (calcium - 10.0) * 6.0);
        pth = Math.max(8.0, 35.0 - (calcium - 10.0) * 12.0);
      } else {
        pth = Math.min(95.0, 35.0 + (10.0 - calcium) * 22.0);
        calcitonin = Math.max(0.5, 4.0 - (10.0 - calcium) * 1.5);
      }
    } else if (selectedAxis === 'osmo_bp') {
      const str = stressLevel / 100;
      adh = Math.min(12.0, 2.5 + str * 6.5);
      aldosterone = Math.min(50.0, 15.0 + str * 25.0);
      sbp = Math.floor(120 + str * 35.0);
      hr = Math.floor(72 + str * 38.0);
    }
  }

  return {
    tshLevel: parseFloat(tsh.toFixed(2)),
    thyroxineLevel: parseFloat(thyroxine.toFixed(1)),
    insulinLevel: parseFloat(insulin.toFixed(1)),
    glucagonLevel: parseFloat(glucagon.toFixed(1)),
    bloodGlucose: parseFloat(glucose.toFixed(1)),
    pthLevel: parseFloat(pth.toFixed(1)),
    calcitoninLevel: parseFloat(calcitonin.toFixed(1)),
    serumCalcium: parseFloat(calcium.toFixed(2)),
    adhLevel: parseFloat(adh.toFixed(1)),
    aldosteroneLevel: parseFloat(aldosterone.toFixed(1)),
    systolicBP: Math.round(sbp),
    heartRate: Math.round(hr),
    bmrKcal: Math.round(bmr),
  };
}

// Lab Definition
export const ENDOCRINE_LAB_DEF: LabDefinition<EndocrineParams, EndocrineSimState> = {
  id: 'endocrine_feedback_lab',
  subject: 'biology',
  chapterRef: 'Chapter 2',
  titleEn: 'Endocrine Glands, Hormonal Axes & Feedback Loops Lab',
  titleAr: 'مختبر التنسيق الهرموني ومحاور التغذية الراجعة السلبية',
  subtitleEn: 'Interactive simulation of HPT axis, Pancreatic Glucose loop, Calcium PTH/Calcitonin, and Emergency fight-or-flight',
  subtitleAr: 'محاكاة تفاعلية لمحور الدرقية والنخامية، وحلقة السكر، وتوازن الكالسيوم، وطوارئ الأدرينالين',
  objectives: [
    {
      id: 'obj-hpt',
      textEn: 'Analyze the Hypothalamus-Pituitary-Thyroid (HPT) negative feedback loop and TSH compensatory dynamics.',
      textAr: 'تحليل آلية التغذية الراجعة السلبية بين الغدة النخامية والدرقية وسلوك هرمون TSH التعويضي.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-glucose',
      textEn: 'Evaluate blood glucose homeostasis governed antagonistically by Insulin and Glucagon.',
      textAr: 'تقييم الاتزان الحيوي لسكر الدم بواسطة التأثير المتضاد لهرموني الإنسولين والجلوكاجون.',
      bloomLevel: 'evaluate',
    },
    {
      id: 'obj-calcium',
      textEn: 'Investigate tight serum calcium control (9.0 - 11.0 mg/dL) through PTH and Calcitonin actions on bones and kidneys.',
      textAr: 'استقصاء الحفاظ الصارم على نسبة الكالسيوم (٩ - ١١ مجم/١٠٠ سم٣) بتأثير الباراثورمون والكالسيتونين.',
      bloomLevel: 'apply',
    },
    {
      id: 'obj-pathology',
      textEn: 'Diagnose clinical endocrine disorders: Acromegaly, Myxedema, Exophthalmic Goiter, Tetany, and Diabetes Mellitus.',
      textAr: 'تشخيص الاضطرابات الهرمونية الوزارية: الأكروميجالي، الميكسيديما، الجويتر الجحوظي، التيتاني، والبول السكري.',
      bloomLevel: 'evaluate',
    },
  ],
  keyFormulas: [
    {
      id: 'eq-negative-feedback',
      labelEn: 'Negative Feedback Inverse Relation',
      labelAr: 'علاقة التغذية الراجعة السلبية العكسية',
      tex: '[\\text{Thyroxine}] \\uparrow \\implies [\\text{TSH}]_{\\text{pituitary}} \\downarrow',
      descriptionEn: 'Elevated peripheral hormone feeds back negatively onto adenohypophysis, down-regulating trophic stimulator.',
      descriptionAr: 'زيادة إفراز الثيروكسين في الدم تؤدي لتثبيط إفراز TSH من الفص الأمامي للنخامية للحفاظ على الاتزان.',
    },
    {
      id: 'eq-calcium-norm',
      labelEn: 'Strict Serum Calcium Physiological Range',
      labelAr: 'المعدل الفسيولوجي الصارم لكالسيوم الدم',
      tex: '9.0 \\le [\\text{Ca}^{2+}]_{\\text{serum}} \\le 11.0 \\,\\text{mg/dL}',
      descriptionEn: 'Parathormone elevates calcium and Calcitonin decreases calcium to preserve neuromuscular stability.',
      descriptionAr: 'الباراثورمون يرفع الكالسيوم بسحبه من العظام، والكالسيتونين يخفضه بترسيبه فيها لضمان سلامة الأعصاب.',
    },
    {
      id: 'eq-fasting-glucose',
      labelEn: 'Fasting Blood Glucose Homeostasis',
      labelAr: 'المعدل الطبيعي لسكر الجلوكوز الصائم',
      tex: '80 \\le [\\text{Glucose}]_{\\text{fasting}} \\le 120 \\,\\text{mg/dL}',
      descriptionEn: 'Beta cells secrete insulin when glucose > 120 mg/dL; Alpha cells secrete glucagon when glucose < 80 mg/dL.',
      descriptionAr: 'تفرز خلايا بيتا الإنسولين عند زيادة الجلوكوز عن ١٢٠ مجم، وتفرز خلايا ألفا الجلوكاجون عند هبوطه عن ٨٠ مجم.',
    },
  ],
  defaultParams: INITIAL_ENDOCRINE_PARAMS,
  paramSchema: ENDOCRINE_PARAM_SCHEMA,
  presets: ENDOCRINE_PRESETS,
  poePrompts: ENDOCRINE_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Hormone Level (%) / Challenge',
    xLabelAr: 'مستوى الهرمون (%) / التحدي',
    xUnit: '%',
    yLabelEn: 'Biomarker (Glucose / Ca2+ / BP)',
    yLabelAr: 'المؤشر الفسيولوجي (سكر / كالسيوم / ضغط)',
    yUnit: 'mg/dL',
  },
};

// -------------------------------------------------------------
// Component Implementation
// -------------------------------------------------------------
export const EndocrineLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  const lab = useVirtualLab<EndocrineParams, EndocrineSimState>({
    definition: ENDOCRINE_LAB_DEF,
  });

  const { params, updateParam, resetParams } = lab;

  const simState = useMemo<EndocrineSimState>(() => {
    return computeEndocrineSimState(params);
  }, [params]);

  const currentGland = useMemo(() => {
    return GLANDS.find((g) => g.id === params.selectedGlandId) || GLANDS[0];
  }, [params.selectedGlandId]);

  // Telemetry Metrics
  const telemetry = useMemo<LabTelemetryMetric[]>(() => {
    return [
      {
        id: 'blood_glucose',
        labelEn: 'Blood Glucose',
        labelAr: 'سكر الجلوكوز',
        value: simState.bloodGlucose,
        unit: ' mg/dL',
        precision: 1,
        status:
          simState.bloodGlucose >= 80 && simState.bloodGlucose <= 120
            ? 'optimal'
            : simState.bloodGlucose < 70 || simState.bloodGlucose > 180
            ? 'alert'
            : 'warning',
      },
      {
        id: 'serum_calcium',
        labelEn: 'Serum Calcium',
        labelAr: 'كالسيوم الدم',
        value: simState.serumCalcium,
        unit: ' mg/dL',
        precision: 2,
        status:
          simState.serumCalcium >= 9.0 && simState.serumCalcium <= 11.0
            ? 'optimal'
            : simState.serumCalcium < 7.5 || simState.serumCalcium > 12.5
            ? 'alert'
            : 'warning',
      },
      {
        id: 'thyroxine',
        labelEn: 'Thyroxine (T4)',
        labelAr: 'الثيروكسين',
        value: simState.thyroxineLevel,
        unit: ' µg/dL',
        precision: 1,
        status:
          simState.thyroxineLevel >= 5.0 && simState.thyroxineLevel <= 12.0
            ? 'optimal'
            : simState.thyroxineLevel < 3.0 || simState.thyroxineLevel > 18.0
            ? 'alert'
            : 'warning',
      },
      {
        id: 'tsh',
        labelEn: 'TSH (Pituitary)',
        labelAr: 'الهرمون المنبه TSH',
        value: simState.tshLevel,
        unit: ' mIU/L',
        precision: 2,
        status:
          simState.tshLevel >= 0.4 && simState.tshLevel <= 4.0
            ? 'optimal'
            : 'warning',
      },
      {
        id: 'blood_pressure',
        labelEn: 'Systolic BP',
        labelAr: 'ضغط الدم الانقباضي',
        value: simState.systolicBP,
        unit: ' mmHg',
        precision: 0,
        status: simState.systolicBP <= 125 ? 'optimal' : simState.systolicBP > 150 ? 'alert' : 'warning',
      },
    ];
  }, [simState]);

  // Digital Multimeter / Physiological Monitor
  const multimeterReading: DMMReading = useMemo(() => ({
    mode: 'DCV',
    value: simState.bloodGlucose,
    displayString: `${simState.bloodGlucose} mg/dL`,
    secondaryString: `Ca2+: ${simState.serumCalcium} mg/dL | HR: ${simState.heartRate} BPM | BMR: ${simState.bmrKcal} kcal`,
    unit: 'mg/dL',
    voltageDC: simState.bloodGlucose,
    voltageAC: simState.serumCalcium,
    currentDC: simState.heartRate,
    resistance: simState.bmrKcal,
    continuityBeep: simState.bloodGlucose >= 80 && simState.bloodGlucose <= 120,
    isOverload: simState.bloodGlucose > 250 || simState.serumCalcium < 7.0,
  }), [simState]);

  // Dual-Trace Oscilloscope
  const oscilloscopeCh1: WaveformSignal = useMemo(() => ({
    id: 'trace_hormone',
    label: isArabic
      ? params.selectedAxis === 'hpt_thyroid'
        ? 'تركيز الثيروكسين (Thyroxine)'
        : params.selectedAxis === 'glucose_homeostasis'
        ? 'تركيز الإنسولين (Insulin)'
        : params.selectedAxis === 'calcium_homeostasis'
        ? 'تركيز الباراثورمون (PTH)'
        : 'تركيز الأدرينالين (Adrenaline)'
      : 'Hormone Concentration Curve',
    color: '#38bdf8',
    amplitude:
      params.selectedAxis === 'hpt_thyroid'
        ? Math.min(10, (simState.thyroxineLevel / 12) * 5)
        : params.selectedAxis === 'glucose_homeostasis'
        ? Math.min(10, (simState.insulinLevel / 25) * 5)
        : params.selectedAxis === 'calcium_homeostasis'
        ? Math.min(10, (simState.pthLevel / 65) * 5)
        : Math.min(10, (params.stressLevel / 100) * 8),
    frequency: 1.0,
    phase: 0,
    phaseDeg: 0,
    type: 'sine',
  }), [params.selectedAxis, params.stressLevel, simState, isArabic]);

  const oscilloscopeCh2: WaveformSignal = useMemo(() => ({
    id: 'trace_biomarker',
    label: isArabic
      ? params.selectedAxis === 'hpt_thyroid'
        ? 'معدل الأيض الأساسي (BMR)'
        : params.selectedAxis === 'glucose_homeostasis'
        ? 'سكر الدم (Blood Glucose)'
        : params.selectedAxis === 'calcium_homeostasis'
        ? 'كالسيوم الدم (Serum Ca2+)'
        : 'ضغط الدم ومعدل النبض'
      : 'Target Biomarker Response',
    color: '#f59e0b',
    amplitude:
      params.selectedAxis === 'glucose_homeostasis'
        ? Math.min(10, (simState.bloodGlucose / 120) * 5)
        : params.selectedAxis === 'calcium_homeostasis'
        ? Math.min(10, (simState.serumCalcium / 11) * 5)
        : Math.min(10, (simState.bmrKcal / 1600) * 5),
    frequency: 1.5,
    phase: Math.PI / 2,
    phaseDeg: 90,
    type: 'triangle',
  }), [params.selectedAxis, simState, isArabic]);

  // Canvas Renderer
  const renderSimulation = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _viewport: LabViewportState,
      _dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height);

      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isLight) {
        bgGrad.addColorStop(0, '#f8fafc');
        bgGrad.addColorStop(1, '#e2e8f0');
      } else {
        bgGrad.addColorStop(0, '#090d16');
        bgGrad.addColorStop(1, '#0f172a');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Grid overlay
      ctx.strokeStyle = isLight ? 'rgba(148, 163, 184, 0.15)' : 'rgba(51, 65, 85, 0.25)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const { subTab, selectedAxis, selectedDisorder } = params;
      const centerX = width / 2;
      const centerY = height / 2;

      if (subTab === 'feedback_axes') {
        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.textAlign = 'center';

        if (selectedAxis === 'hpt_thyroid') {
          ctx.fillText(
            isArabic
              ? 'محور الغدة النخامية والدرقية: التغذية الراجعة السلبية (Negative Feedback)'
              : 'Hypothalamus-Pituitary-Thyroid (HPT) Negative Feedback Loop',
            centerX,
            35
          );

          // Pituitary Node (Top)
          const pitX = centerX;
          const pitY = centerY - 100;
          ctx.fillStyle = isLight ? 'rgba(168, 85, 247, 0.2)' : 'rgba(147, 51, 234, 0.35)';
          ctx.strokeStyle = '#a855f7';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.roundRect(pitX - 90, pitY - 30, 180, 60, 15);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = '#a855f7';
          ctx.fillText(isArabic ? 'الغدة النخامية (الفص الأمامي)' : 'Anterior Pituitary Lobe', pitX, pitY - 5);
          ctx.font = 'bold 11px font-mono';
          ctx.fillStyle = isLight ? '#581c87' : '#d8b4fe';
          ctx.fillText(`TSH = ${simState.tshLevel} mIU/L`, pitX, pitY + 16);

          // Stimulatory Forward Arrow (TSH -> Thyroid)
          const thyrX = centerX;
          const thyrY = centerY + 90;

          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(pitX - 25, pitY + 30);
          ctx.lineTo(thyrX - 25, thyrY - 30);
          ctx.stroke();

          // Arrowhead
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.moveTo(thyrX - 25, thyrY - 30);
          ctx.lineTo(thyrX - 32, thyrY - 45);
          ctx.lineTo(thyrX - 18, thyrY - 45);
          ctx.fill();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(isArabic ? 'تنبيه (+) عبر TSH' : 'Stimulation (+) via TSH', pitX - 95, centerY);

          // Thyroid Node (Bottom)
          ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.2)' : 'rgba(5, 150, 105, 0.35)';
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.roundRect(thyrX - 90, thyrY - 30, 180, 60, 15);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = '#10b981';
          ctx.fillText(isArabic ? 'الغدة الدرقية (غدة النشاط)' : 'Thyroid Gland (Follicles)', thyrX, thyrY - 5);
          ctx.font = 'bold 11px font-mono';
          ctx.fillStyle = isLight ? '#065f46' : '#6ee7b7';
          ctx.fillText(`Thyroxine (T4) = ${simState.thyroxineLevel} µg/dL`, thyrX, thyrY + 16);

          // Negative Feedback Inhibitory Return Arrow (Thyroxine -> Pituitary)
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 3;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(thyrX + 35, thyrY - 30);
          ctx.lineTo(pitX + 35, pitY + 30);
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.moveTo(pitX + 35, pitY + 30);
          ctx.lineTo(pitX + 28, pitY + 45);
          ctx.lineTo(pitX + 42, pitY + 45);
          ctx.fill();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(isArabic ? 'تثبيط سلبي (-) بالثيروكسين' : 'Negative Feedback (-)', pitX + 115, centerY);

          // Homeostatic Status Badge
          ctx.fillStyle = simState.thyroxineLevel >= 5.0 && simState.thyroxineLevel <= 12.0 ? '#10b981' : '#ef4444';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(
            isArabic
              ? simState.thyroxineLevel >= 5.0 && simState.thyroxineLevel <= 12.0
                ? '✅ اتزان درقي سليم (Euthyroid Baseline)'
                : simState.thyroxineLevel > 12.0
                ? '⚠️ فرط نشاط درقي (Hyperthyroidism) ➔ تثبيط TSH'
                : '⚠️ قصور درقي (Hypothyroidism) ➔ ارتفاع TSH تعويضياً'
              : simState.thyroxineLevel >= 5.0 && simState.thyroxineLevel <= 12.0
              ? '✅ Euthyroid Homeostasis Maintained'
              : simState.thyroxineLevel > 12.0
              ? '⚠️ Hyperthyroidism: TSH suppressed'
              : '⚠️ Hypothyroidism: TSH elevated compensatorily',
            centerX,
            height - 25
          );
        } else if (selectedAxis === 'glucose_homeostasis') {
          ctx.fillText(
            isArabic
              ? 'تنظيم سكر الدم: هرمونا الإنسولين (خافض) والجلوكاجون (رافع)'
              : 'Blood Glucose Homeostasis: Antagonistic Insulin & Glucagon Loop',
            centerX,
            35
          );

          // Central Blood Glucose Vessel
          ctx.fillStyle = isLight ? 'rgba(239, 68, 68, 0.15)' : 'rgba(220, 38, 38, 0.25)';
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.roundRect(centerX - 130, centerY - 45, 260, 90, 20);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 13px sans-serif';
          ctx.fillStyle = '#ef4444';
          ctx.fillText(isArabic ? 'مستوى سكر الجلوكوز في الدم' : 'Circulating Blood Glucose', centerX, centerY - 15);
          ctx.font = 'bold 22px font-mono';
          ctx.fillText(`${simState.bloodGlucose} mg/dL`, centerX, centerY + 18);
          ctx.font = '10px sans-serif';
          ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
          ctx.fillText(isArabic ? 'المعدل الطبيعي: 80 - 120 مجم/100سم3' : 'Normal Fasting: 80 - 120 mg/dL', centerX, centerY + 34);

          // Left Box: Beta cells & Insulin
          const bxX = centerX - 190;
          ctx.fillStyle = isLight ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.25)';
          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(bxX - 70, centerY - 90, 140, 75, 12);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#3b82f6';
          ctx.fillText(isArabic ? 'خلايا بيتا (β)' : 'Beta (β) Cells', bxX, centerY - 68);
          ctx.fillText(isArabic ? 'إفراز الإنسولين ⬇' : 'Insulin Secretion ⬇', bxX, centerY - 50);
          ctx.font = 'bold 12px font-mono';
          ctx.fillText(`${simState.insulinLevel} µIU/mL`, bxX, centerY - 28);

          // Right Box: Alpha cells & Glucagon
          const axX = centerX + 190;
          ctx.fillStyle = isLight ? 'rgba(245, 158, 11, 0.15)' : 'rgba(217, 119, 6, 0.25)';
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(axX - 70, centerY - 90, 140, 75, 12);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#f59e0b';
          ctx.fillText(isArabic ? 'خلايا ألفا (α)' : 'Alpha (α) Cells', axX, centerY - 68);
          ctx.fillText(isArabic ? 'إفراز الجلوكاجون ⬆' : 'Glucagon Secretion ⬆', axX, centerY - 50);
          ctx.font = 'bold 12px font-mono';
          ctx.fillText(`${simState.glucagonLevel} pg/mL`, axX, centerY - 28);

          // Storage Target: Liver at bottom
          ctx.fillStyle = isLight ? 'rgba(168, 85, 247, 0.15)' : 'rgba(147, 51, 234, 0.25)';
          ctx.strokeStyle = '#a855f7';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(centerX - 160, centerY + 70, 320, 55, 15);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#a855f7';
          ctx.fillText(isArabic ? 'الكبد والعضلات الهيكلية (مستودع الجليكوجين)' : 'Target: Liver & Skeletal Muscle Glycogen Reserves', centerX, centerY + 92);
          ctx.font = '10px sans-serif';
          ctx.fillText(
            isArabic
              ? 'الإنسولين يحفز أكسدة الجلوكوز وبناء الجليكوجين | الجلوكاجون يفكك جليكوجين الكبد فقط'
              : 'Insulin promotes glycogenesis | Glucagon stimulates hepatic glycogenolysis',
            centerX,
            centerY + 110
          );
        } else if (selectedAxis === 'calcium_homeostasis') {
          ctx.fillText(
            isArabic
              ? 'توازن الكالسيوم: الباراثورمون (رافع) والكالسيتونين (خافض) [9 - 11 مجم/دسل]'
              : 'Serum Calcium Homeostasis: Parathormone (PTH) vs Calcitonin (9 - 11 mg/dL)',
            centerX,
            35
          );

          // Central Calcium Monitor
          ctx.fillStyle = isLight ? 'rgba(14, 165, 233, 0.15)' : 'rgba(2, 132, 199, 0.25)';
          ctx.strokeStyle = '#0284c7';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.roundRect(centerX - 130, centerY - 45, 260, 90, 20);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 13px sans-serif';
          ctx.fillStyle = '#0284c7';
          ctx.fillText(isArabic ? 'نسبة الكالسيوم في مصل الدم' : 'Total Serum Calcium (Ca2+)', centerX, centerY - 15);
          ctx.font = 'bold 22px font-mono';
          ctx.fillText(`${simState.serumCalcium} mg/dL`, centerX, centerY + 18);
          ctx.font = '10px sans-serif';
          ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
          ctx.fillText(isArabic ? 'المعدل الطبيعي الصارم: 9.0 - 11.0 مجم/دسل' : 'Strict Physiological Target: 9.0 - 11.0 mg/dL', centerX, centerY + 34);

          // Left: Parathyroid Glands & PTH
          const ptX = centerX - 180;
          ctx.fillStyle = isLight ? 'rgba(244, 63, 94, 0.15)' : 'rgba(225, 29, 72, 0.25)';
          ctx.strokeStyle = '#e11d48';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(ptX - 70, centerY - 80, 140, 70, 12);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#e11d48';
          ctx.fillText(isArabic ? 'جارات الدرقية (PTH)' : 'Parathyroids (PTH)', ptX, centerY - 60);
          ctx.fillText(isArabic ? 'سحب الكالسيوم للدم ⬆' : 'Mobilizes Ca2+ to blood ⬆', ptX, centerY - 42);
          ctx.font = 'bold 12px font-mono';
          ctx.fillText(`${simState.pthLevel} pg/mL`, ptX, centerY - 22);

          // Right: Thyroid C-Cells & Calcitonin
          const ctX = centerX + 180;
          ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.15)' : 'rgba(5, 150, 105, 0.25)';
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(ctX - 70, centerY - 80, 140, 70, 12);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#10b981';
          ctx.fillText(isArabic ? 'خلايا C الدرقية (كالسيتونين)' : 'Thyroid C-Cells (Calcitonin)', ctX, centerY - 60);
          ctx.fillText(isArabic ? 'ترسيب الكالسيوم بالعظام ⬇' : 'Deposits Ca2+ in bone ⬇', ctX, centerY - 42);
          ctx.font = 'bold 12px font-mono';
          ctx.fillText(`${simState.calcitoninLevel} pg/mL`, ctX, centerY - 22);

          // Target Organs
          ctx.fillStyle = '#64748b';
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(
            isArabic
              ? '🦴 العظام: مخزن الكالسيوم الرئيسي | 🫘 الكليتان: إعادة امتصاص الكالسيوم وتنشيط فيتامين د'
              : '🦴 Bones: Dynamic Calcium Reservoir | 🫘 Kidneys: Calcium Reabsorption & Calcitriol',
            centerX,
            height - 30
          );
        } else {
          // Osmoregulation & BP (ADH & Aldosterone)
          ctx.fillText(
            isArabic
              ? 'تنظيم الماء والضغط: هرمون ADH (النخامية الخلفية) والألدوستيرون (قشرة الكظرية)'
              : 'Osmoregulation & Blood Pressure: ADH (Vasopressin) & Aldosterone Axis',
            centerX,
            35
          );

          // Left Box: Posterior Pituitary ADH
          const adX = centerX - 120;
          ctx.fillStyle = isLight ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.25)';
          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(adX - 90, centerY - 70, 180, 80, 15);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = '#3b82f6';
          ctx.fillText(isArabic ? 'الفص الخلفي للنخامية' : 'Posterior Pituitary', adX, centerY - 48);
          ctx.fillText(isArabic ? 'هرمون ADH (قابض الأوعية)' : 'ADH / Vasopressin', adX, centerY - 30);
          ctx.font = 'bold 12px font-mono';
          ctx.fillText(`${simState.adhLevel} pg/mL`, adX, centerY - 8);

          // Right Box: Adrenal Cortex Aldosterone
          const alX = centerX + 120;
          ctx.fillStyle = isLight ? 'rgba(245, 158, 11, 0.15)' : 'rgba(217, 119, 6, 0.25)';
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(alX - 90, centerY - 70, 180, 80, 15);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = '#f59e0b';
          ctx.fillText(isArabic ? 'قشرة الغدة الكظرية' : 'Adrenal Cortex', alX, centerY - 48);
          ctx.fillText(isArabic ? 'هرمون الألدوستيرون (معدني)' : 'Aldosterone (Mineralocorticoid)', alX, centerY - 30);
          ctx.font = 'bold 12px font-mono';
          ctx.fillText(`${simState.aldosteroneLevel} ng/dL`, alX, centerY - 8);

          // Kidney response node at bottom
          ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.15)' : 'rgba(5, 150, 105, 0.25)';
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(centerX - 170, centerY + 35, 340, 70, 15);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = '#10b981';
          ctx.fillText(isArabic ? 'الكلية (أنابيب النفرون)' : 'Kidney Nephron Tubules', centerX, centerY + 58);
          ctx.font = '11px sans-serif';
          ctx.fillText(
            isArabic
              ? 'ADH: استعادة الماء وتقليل حجم البول | الألدوستيرون: استعادة الصوديوم وطرد البوتاسيوم'
              : 'ADH: Water reabsorption & concentrated urine | Aldosterone: Na+ conserved, K+ excreted',
            centerX,
            centerY + 80
          );
        }
      } else if (subTab === 'clinical_pathology') {
        // Mode B: Clinical Pathology
        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.textAlign = 'center';

        const disorderTitlesAr: Record<ClinicalDisorderType, string> = {
          normal: 'حالة الاتزان الطبيعي السليم (Euthyroid Homeostasis)',
          acromegaly: 'الأكروميجالي: تضخم عظام الوجه والفكين والأطراف لزيادة هرمون النمو بالبالغين',
          myxedema: 'الميكسيديما: هبوط حاد في الثيروكسين والأيض الأساسي وجفاف الجلد وبطء النبض',
          exophthalmic_goiter: 'الجويتر الجحوظي: فرط نشاط الدرقية وجحوظ العينين ونقص الوزن الشديد',
          tetany: 'التيتاني: نقص الباراثورمون وتشنجات عضلية مؤلمة وسرعة انفعال وغضب لأقل سبب',
          diabetes_mellitus: 'مرض البول السكري: نقص الإنسولين، ارتفاع السكر، العطش المستمر وتعدد التبول',
          adrenal_emergency: 'طوارئ النجدة والكر والفر: طفرة الأدرينالين وزيادة سكر الدم وسرعة ضربات القلب',
        };

        const disorderTitlesEn: Record<ClinicalDisorderType, string> = {
          normal: 'Physiological Baseline Homeostasis',
          acromegaly: 'Acromegaly: Adult GH Hypersecretion with Facial & Extremity Bone Growth',
          myxedema: 'Myxedema: Adult Severe Hypothyroidism with Low BMR & Dry Skin',
          exophthalmic_goiter: 'Exophthalmic Goiter: Hyperthyroidism with High BMR, Tachycardia & Exophthalmos',
          tetany: 'Tetany: Hypoparathyroidism causing Severe Hypocalcemia & Painful Spasms',
          diabetes_mellitus: 'Diabetes Mellitus: Insulin Deficiency with Hyperglycemia & Polyuria',
          adrenal_emergency: 'Sympathoadrenal Emergency Surge: Adrenaline Elevation & Tachycardia',
        };

        ctx.fillText(isArabic ? disorderTitlesAr[selectedDisorder] : disorderTitlesEn[selectedDisorder], centerX, 35);

        // Medical Chart Display
        const cardW = width * 0.75;
        const cardH = 200;
        ctx.fillStyle = isLight ? 'rgba(30, 41, 59, 0.05)' : 'rgba(15, 23, 42, 0.7)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(centerX - cardW / 2, centerY - cardH / 2, cardW, cardH, 16);
        ctx.fill();
        ctx.stroke();

        // 4 Key Clinical Signs
        const colW = cardW / 4;
        const startX = centerX - cardW / 2;

        // Metric 1: Blood Glucose
        ctx.fillStyle = simState.bloodGlucose >= 80 && simState.bloodGlucose <= 120 ? '#10b981' : '#ef4444';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'سكر الدم' : 'Glucose', startX + colW * 0.5, centerY - 50);
        ctx.font = 'bold 18px font-mono';
        ctx.fillText(`${simState.bloodGlucose}`, startX + colW * 0.5, centerY - 20);
        ctx.font = '10px sans-serif';
        ctx.fillText('mg/dL', startX + colW * 0.5, centerY - 2);

        // Metric 2: Serum Calcium
        ctx.fillStyle = simState.serumCalcium >= 9.0 && simState.serumCalcium <= 11.0 ? '#10b981' : '#ef4444';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'كالسيوم الدم' : 'Ca2+', startX + colW * 1.5, centerY - 50);
        ctx.font = 'bold 18px font-mono';
        ctx.fillText(`${simState.serumCalcium}`, startX + colW * 1.5, centerY - 20);
        ctx.font = '10px sans-serif';
        ctx.fillText('mg/dL', startX + colW * 1.5, centerY - 2);

        // Metric 3: Heart Rate
        ctx.fillStyle = simState.heartRate >= 60 && simState.heartRate <= 85 ? '#10b981' : '#f59e0b';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'النبض' : 'Heart Rate', startX + colW * 2.5, centerY - 50);
        ctx.font = 'bold 18px font-mono';
        ctx.fillText(`${simState.heartRate}`, startX + colW * 2.5, centerY - 20);
        ctx.font = '10px sans-serif';
        ctx.fillText('BPM', startX + colW * 2.5, centerY - 2);

        // Metric 4: BMR
        ctx.fillStyle = simState.bmrKcal >= 1400 && simState.bmrKcal <= 1800 ? '#10b981' : '#8b5cf6';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'معدل الأيض' : 'BMR', startX + colW * 3.5, centerY - 50);
        ctx.font = 'bold 18px font-mono';
        ctx.fillText(`${simState.bmrKcal}`, startX + colW * 3.5, centerY - 20);
        ctx.font = '10px sans-serif';
        ctx.fillText('kcal/day', startX + colW * 3.5, centerY - 2);

        // Clinical Diagnosis Banner
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(
          isArabic
            ? `التقرير الطبي: ${
                selectedDisorder === 'normal'
                  ? 'جميع المؤشرات الحيوية ضمن الحدود الفسيولوجية المثالية.'
                  : selectedDisorder === 'acromegaly'
                  ? 'تضخم العظام الطرفية واستطالة الفك وتضخم أصابع اليدين والقدمين.'
                  : selectedDisorder === 'myxedema'
                  ? 'هبوط حاد في الأيض الأساسي، عدم تحمل البرودة، تساقط الشعر وزيادة الوزن.'
                  : selectedDisorder === 'exophthalmic_goiter'
                  ? 'جحوظ العينين، سرعة النبض، النحافة السريعة، والأرق والتوتر العصبي.'
                  : selectedDisorder === 'tetany'
                  ? 'تشنجات عضلية مؤلمة مستمرة وسرعة الغضب والانفعال لأقل سبب.'
                  : selectedDisorder === 'diabetes_mellitus'
                  ? 'ظهور السكر في البول وعطش دائم وتبول متكرر وغيبوبة سكر.'
                  : 'زيادة السكر والنبض والضغط وتهيئة الجسم للكر والفر.'
              }`
            : `Clinical Report: ${
                selectedDisorder === 'normal'
                  ? 'All biomarker telemetry within normal physiological limits.'
                  : selectedDisorder === 'acromegaly'
                  ? 'Excessive adult bone enlargement in face, jaw, hands, and feet.'
                  : selectedDisorder === 'myxedema'
                  ? 'Low metabolic rate, cold intolerance, dry skin, and bradycardia.'
                  : selectedDisorder === 'exophthalmic_goiter'
                  ? 'High BMR, rapid weight loss, tachycardia, and exophthalmos.'
                  : selectedDisorder === 'tetany'
                  ? 'Painful muscle spasms and extreme neuromuscular irritability.'
                  : selectedDisorder === 'diabetes_mellitus'
                  ? 'Glucosuria, persistent polyuria, polydipsia, and hyperglycemia.'
                  : 'Massive sympathetic surge preparing body for immediate fight-or-flight.'
              }`,
          centerX,
          centerY + 60
        );
      } else {
        // Mode C: Anatomy Explorer Vector Map
        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? 'الأطلس التشريحي للغدد الصماء: النخامية، الدرقية وجاراتها، الكظريتان، والبنكرياس'
            : 'Human Endocrine System Anatomy: Pituitary, Thyroid/Parathyroids, Adrenals & Pancreas',
          centerX,
          35
        );

        // Body Silhouette Axis
        ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(centerX, 60);
        ctx.lineTo(centerX, height - 40);
        ctx.stroke();
        ctx.setLineDash([]);

        // 1. Pituitary (Head)
        const pitY = 85;
        ctx.fillStyle = params.selectedGlandId === 'pituitary' ? '#a855f7' : '#64748b';
        ctx.beginPath();
        ctx.arc(centerX, pitY, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'الغدة النخامية' : 'Pituitary', centerX + 60, pitY + 4);

        // 2. Thyroid & Parathyroids (Neck)
        const thyrY = 145;
        ctx.fillStyle = params.selectedGlandId === 'thyroid' || params.selectedGlandId === 'parathyroid' ? '#10b981' : '#64748b';
        ctx.beginPath();
        ctx.arc(centerX, thyrY, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'الدرقية وجارات الدرقية' : 'Thyroid / Parathyroids', centerX - 90, thyrY + 4);

        // 3. Adrenals (Abdomen - Kidneys)
        const adrY = 225;
        ctx.fillStyle = params.selectedGlandId === 'adrenal' ? '#f59e0b' : '#64748b';
        ctx.beginPath();
        ctx.arc(centerX - 35, adrY, 12, 0, Math.PI * 2);
        ctx.arc(centerX + 35, adrY, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'الغدتان الكظريتان' : 'Adrenals (Suprarenal)', centerX + 95, adrY + 4);

        // 4. Pancreas (Mid-Abdomen)
        const panY = 285;
        ctx.fillStyle = params.selectedGlandId === 'pancreas' ? '#3b82f6' : '#64748b';
        ctx.beginPath();
        ctx.roundRect(centerX - 28, panY - 8, 56, 16, 6);
        ctx.fill();
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'البنكرياس (جزر لانجرهانز)' : 'Pancreas (Islets)', centerX - 90, panY + 4);

        // Highlight selected gland info summary
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText(
          isArabic ? `الغدة المختارة: ${currentGland.nameAr}` : `Selected Gland: ${currentGland.nameEn}`,
          centerX,
          height - 20
        );
      }
    },
    [params, simState, currentGland, isLight, isArabic]
  );

  return (
    <VirtualLabShell
      definition={ENDOCRINE_LAB_DEF}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeCh1}
      oscilloscopeCh2={oscilloscopeCh2}
      currentXValue={params.hormonePerturbation}
      currentYValue={simState.bloodGlucose}
      onResetSimulation={resetParams}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* Main SubTab Selector */}
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-400 block">
              {isArabic ? 'وحدة الاستكشاف الهرموني:' : 'Endocrine Module:'}
            </label>
            <div className="relative">
              <select
                aria-label={isArabic ? 'وحدة الاستكشاف الهرموني' : 'Endocrine Module'}
                value={params.subTab}
                onChange={(e) => updateParam('subTab', e.target.value as EndocrineSubTab)}
                className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="feedback_axes">
                  {isArabic ? '١. محاور التغذية الراجعة السلبية' : '1. Negative Feedback Axes'}
                </option>
                <option value="clinical_pathology">
                  {isArabic ? '٢. الاضطرابات المرضية والسريرية' : '2. Clinical Pathology & Disorders'}
                </option>
                <option value="anatomy_explorer">
                  {isArabic ? '٣. أطلس الغدد الصماء فائق الدقة' : '3. High-Res Endocrine Anatomy Atlas'}
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sub-Tab Specific Controls */}
          {params.subTab === 'feedback_axes' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'محور الاتزان الهرموني:' : 'Endocrine Regulatory Axis:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'محور الاتزان الهرموني' : 'Regulatory Axis'}
                    value={params.selectedAxis}
                    onChange={(e) => updateParam('selectedAxis', e.target.value as FeedbackAxisType)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="hpt_thyroid">
                      {isArabic ? 'محور الغدة الدرقية (TSH والثيروكسين)' : 'HPT Axis (TSH & Thyroxine)'}
                    </option>
                    <option value="glucose_homeostasis">
                      {isArabic ? 'تنظيم سكر الدم (الإنسولين والجلوكاجون)' : 'Glucose Loop (Insulin & Glucagon)'}
                    </option>
                    <option value="calcium_homeostasis">
                      {isArabic ? 'توازن الكالسيوم (الباراثورمون والكالسيتونين)' : 'Calcium Loop (PTH & Calcitonin)'}
                    </option>
                    <option value="osmo_bp">
                      {isArabic ? 'الضغط والماء (ADH والألدوستيرون)' : 'Osmoregulation & BP (ADH & Aldosterone)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {params.selectedAxis === 'hpt_thyroid' && (
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'اضطراب إفراز الثيروكسين:' : 'Thyroxine Perturbation:'}
                    </span>
                    <span className="font-mono text-emerald-400">{params.hormonePerturbation}%</span>
                  </div>
                  <input
                    aria-label={isArabic ? 'اضطراب الثيروكسين' : 'Thyroxine Perturbation'}
                    type="range"
                    min="-100"
                    max="100"
                    step="10"
                    value={params.hormonePerturbation}
                    onChange={(e) => updateParam('hormonePerturbation', parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              )}

              {params.selectedAxis === 'glucose_homeostasis' && (
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'جرعة الجلوكوز المتناولة:' : 'Glucose Ingestion:'}
                    </span>
                    <span className="font-mono text-rose-400">{params.glucoseIntake} g</span>
                  </div>
                  <input
                    aria-label={isArabic ? 'جرعة الجلوكوز' : 'Glucose Dose'}
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={params.glucoseIntake}
                    onChange={(e) => updateParam('glucoseIntake', parseInt(e.target.value, 10))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                </div>
              )}

              {params.selectedAxis === 'calcium_homeostasis' && (
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'تحدي الكالسيوم الغذائي:' : 'Calcium Challenge:'}
                    </span>
                    <span className="font-mono text-cyan-400">{params.calciumIntake} mg</span>
                  </div>
                  <input
                    aria-label={isArabic ? 'تحدي الكالسيوم' : 'Calcium Challenge'}
                    type="range"
                    min="0"
                    max="50"
                    step="5"
                    value={params.calciumIntake}
                    onChange={(e) => updateParam('calciumIntake', parseInt(e.target.value, 10))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>
              )}

              {params.selectedAxis === 'osmo_bp' && (
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'مستوى الضغط والجهد السمبثاوي:' : 'Sympathetic Stress:'}
                    </span>
                    <span className="font-mono text-amber-400">{params.stressLevel}%</span>
                  </div>
                  <input
                    aria-label={isArabic ? 'مستوى الضغط' : 'Stress Level'}
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={params.stressLevel}
                    onChange={(e) => updateParam('stressLevel', parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              )}
            </div>
          )}

          {params.subTab === 'clinical_pathology' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'اختر الحالة المرضية السريرية:' : 'Clinical Disorder Profile:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'الحالة المرضية' : 'Clinical Disorder'}
                    value={params.selectedDisorder}
                    onChange={(e) => updateParam('selectedDisorder', e.target.value as ClinicalDisorderType)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="normal">
                      {isArabic ? 'حالة الاتزان الطبيعي السليم' : 'Healthy Baseline Homeostasis'}
                    </option>
                    <option value="acromegaly">
                      {isArabic ? 'الأكروميجالي (زيادة هرمون النمو بالبالغين)' : 'Acromegaly (Adult GH Hypersecretion)'}
                    </option>
                    <option value="myxedema">
                      {isArabic ? 'الميكسيديما (نقص الثيروكسين بالبالغين)' : 'Myxedema (Adult Severe Hypothyroidism)'}
                    </option>
                    <option value="exophthalmic_goiter">
                      {isArabic ? 'الجويتر الجحوظي (فرط الثيروكسين وجحوظ العينين)' : 'Exophthalmic Goiter (Graves Hyperthyroidism)'}
                    </option>
                    <option value="tetany">
                      {isArabic ? 'التيتاني (نقص الباراثورمون وتشنجات الكالسيوم)' : 'Tetany (Hypoparathyroidism & Low Ca2+)'}
                    </option>
                    <option value="diabetes_mellitus">
                      {isArabic ? 'مرض البول السكري (نقص إفراز الإنسولين)' : 'Diabetes Mellitus (Insulin Deficiency)'}
                    </option>
                    <option value="adrenal_emergency">
                      {isArabic ? 'طوارئ النجدة والكر والفر (طفرة الأدرينالين)' : 'Sympathoadrenal Emergency (Adrenaline Surge)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          )}

          {params.subTab === 'anatomy_explorer' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'اختر الغدة الصماء للاستكشاف:' : 'Select Endocrine Gland:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'الغدة الصماء' : 'Endocrine Gland'}
                    value={params.selectedGlandId}
                    onChange={(e) => updateParam('selectedGlandId', e.target.value as GlandId)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    {GLANDS.map((g) => (
                      <option key={g.id} value={g.id}>
                        {isArabic ? g.nameAr : g.nameEn}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Gland Details Card */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                <div className="text-slate-300">
                  <strong className="text-amber-400 block mb-0.5">{isArabic ? 'الموقع التشريحي:' : 'Location:'}</strong>
                  {isArabic ? currentGland.locationAr : currentGland.locationEn}
                </div>
                <div className="text-slate-300">
                  <strong className="text-blue-400 block mb-0.5">{isArabic ? 'الهرمونات المفرزة:' : 'Secreted Hormones:'}</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                    {(isArabic ? currentGland.hormonesAr : currentGland.hormonesEn).map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-[11px] text-amber-300 bg-amber-950/40 p-2 rounded-lg border border-amber-800/40">
                  <strong>{isArabic ? 'سؤال وزاري متكرر: ' : 'Curriculum Exam Tip: '}</strong>
                  {isArabic ? currentGland.examTipsAr : currentGland.examTipsEn}
                </div>
              </div>

              {/* High Res Micrograph */}
              <div className="rounded-xl overflow-hidden border border-slate-800">
                <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    {isArabic ? 'أطلس الغدد الصماء فائق الدقة' : '3D High-Res Endocrine Atlas'}
                  </span>
                  <span className="font-mono">840 KB</span>
                </div>
                <img
                  src={endocrineImg}
                  alt="Human Endocrine System Anatomy"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Dynamic Canvas Simulation Viewport */}
        <div className={`relative rounded-2xl overflow-hidden border shadow-lg ${
          isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-700/60 bg-slate-950'
        }`}>
          <CanvasSimulationViewport
            id="endocrine-workbench-viewport"
            lang={lang ?? 'ar'}
            theme={theme}
            aspectRatio="aspect-[16/10]"
            minHeight={420}
            onRender={renderSimulation}
          >
            {/* Real-time Status Overlay Badge */}
            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono font-bold text-amber-400 flex items-center gap-2 pointer-events-none select-none">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>
                {params.subTab === 'feedback_axes'
                  ? isArabic
                    ? params.selectedAxis === 'hpt_thyroid'
                      ? 'محور الغدة النخامية والدرقية'
                      : params.selectedAxis === 'glucose_homeostasis'
                      ? 'حلقة سكر الدم والإنسولين'
                      : params.selectedAxis === 'calcium_homeostasis'
                      ? 'توازن الكالسيوم (الباراثورمون والكالسيتونين)'
                      : 'تنظيم الضغط وهرمون ADH'
                    : params.selectedAxis === 'hpt_thyroid'
                    ? 'HPT Axis Feedback'
                    : params.selectedAxis === 'glucose_homeostasis'
                    ? 'Glucose-Insulin Loop'
                    : params.selectedAxis === 'calcium_homeostasis'
                    ? 'Calcium Homeostasis'
                    : 'Osmoregulation & ADH'
                  : params.subTab === 'clinical_pathology'
                  ? isArabic
                    ? `حالة سريرية: ${params.selectedDisorder}`
                    : `Clinical Profile: ${params.selectedDisorder}`
                  : isArabic
                  ? `أطلس: ${currentGland.nameAr}`
                  : `Atlas: ${currentGland.nameEn}`}
              </span>
            </div>
          </CanvasSimulationViewport>
        </div>

        {/* SUMMARY TELEMETRY CARDS */}
        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-slate-300 shadow-sm' : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'سكر الدم' : 'Blood Glucose'}
              </span>
              <span className="font-mono font-bold text-emerald-400 text-sm">
                {simState.bloodGlucose} mg/dL
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'كالسيوم الدم' : 'Serum Calcium'}
              </span>
              <span className="font-mono font-bold text-cyan-400 text-sm">
                {simState.serumCalcium} mg/dL
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'الثيروكسين (T4)' : 'Thyroxine (T4)'}
              </span>
              <span className="font-mono font-bold text-purple-400 text-sm">
                {simState.thyroxineLevel} µg/dL
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'الأيض الأساسي (BMR)' : 'Basal BMR'}
              </span>
              <span className="font-mono font-bold text-amber-400 text-sm">
                {simState.bmrKcal} kcal
              </span>
            </div>
          </div>
        </div>
      </div>
    </VirtualLabShell>
  );
};

export default EndocrineLab;
