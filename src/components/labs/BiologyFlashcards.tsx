import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import type { ThemeMode } from '../../types/curriculum';
import { MathRenderer } from '../MathRenderer';
import {
  RotateCw,
  CheckCircle2,
  XCircle,
  Sparkles,
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

export interface Flashcard {
  id: string;
  chapter: string;
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

const BIOLOGY_FLASHCARDS: Flashcard[] = [
  // Chapter 1: Support & Movement
  {
    id: 'fc_01',
    chapter: 'ch1',
    titleEn: 'Axial vs. Appendicular Skeleton Count',
    titleAr: 'تعداد عظام الهيكل المحوري والطرفي',
    frontEn: 'What are the exact bone counts of the adult human axial and appendicular skeletons?',
    frontAr: 'ما هو التعداد الدقيق لعظام الهيكل العظمي المحوري والطرفي في الإنسان البالغ؟',
    backEn: 'Total = 206 bones:\n• Axial Skeleton = 80 bones (Skull & Hyoid: 29, Vertebral Column: 26 bones, Thoracic Cage: 25 bones).\n• Appendicular Skeleton = 126 bones (Pectoral girdle & Upper limbs: 64, Pelvic girdle & Lower limbs: 62).',
    backAr: 'الإجمالي = 206 عظمة:\n• الهيكل المحوري = 80 عظمة (الجمجمة وملحقاتها: 29، العمود الفقري: 26 عظمة، القفص الصدري: 25 عظمة).\n• الهيكل الطرفي = 126 عظمة (الحزام الصدري والطرفان العلويان: 64، الحزام الحوضي والطرفان السفليان: 62).',
    latex: 'N_{\\text{total}} = 80\\,(\\text{Axial}) + 126\\,(\\text{Appendicular}) = 206',
  },
  {
    id: 'fc_02',
    chapter: 'ch1',
    titleEn: 'Vertebral Count to Bone Count Conversion',
    titleAr: 'التحويل بين عدد الفقرات وعدد العظام في العمود الفقري',
    frontEn: 'Why does the human vertebral column consist of 33 vertebrae but only 26 individual bones?',
    frontAr: 'لماذا يتكون العمود الفقري البشري من 33 فقرة بينما يُعد 26 عظمة فقط من الناحية التشريحية؟',
    backEn: 'Because the 24 articulating vertebrae remain independent bones (7 cervical + 12 thoracic + 5 lumbar), whereas the 5 sacral vertebrae fuse into 1 single bone (Sacrum) and the 4 coccygeal vertebrae fuse into 1 single bone (Coccyx).',
    backAr: 'لأن الـ 24 فقرة المتمفصلة تمثل 24 عظمة منفصلة (7 عنقية + 12 صدرية + 5 قطنية)، بينما تلتحم الفقرات العجزية الـ 5 لتشكل عظمة واحدة (العجز)، وتلتحم الفقرات العصعصية الـ 4 لتشكل عظمة واحدة (العصعص).',
    latex: '24\\,\\text{Movable} + 1\\,\\text{Sacrum} + 1\\,\\text{Coccyx} = 26\\,\\text{Bones}',
  },
  {
    id: 'fc_03',
    chapter: 'ch1',
    titleEn: 'Physiological vs. Structural Plant Support',
    titleAr: 'الدعامة الفسيولوجية مقابل الدعامة التركيبية في النبات',
    frontEn: 'How do physiological and structural plant support differ in permanence and mechanism?',
    frontAr: 'كيف تختلف الدعامة الفسيولوجية عن الدعامة التركيبية في النبات من حيث الديمومة والآلية؟',
    backEn: '• Physiological Support: Temporary, whole-cell, osmotic uptake of water into vacuoles generating turgor pressure against cell walls.\n• Structural Support: Permanent, localized biochemical deposition of cutin, suberin, cellulose, or lignin in cell walls.',
    backAr: '• الدعامة الفسيولوجية: مؤقتة، تتناول الخلية ككل، وتعتمد على دخول الماء للفجوة العصارية بالأسموزية وتوليد ضغط امتلاء يضغط على الجدار.\n• الدعامة التركيبية: دائمة، تتناول جدران الخلايا، وتعتمد على ترسيب مواد صلبة غير منفذة مثل اللجنين والكيوتين والسوبرين والسيليلوز.',
  },
  {
    id: 'fc_04',
    chapter: 'ch1',
    titleEn: 'Sarcomere Band Changes During Contraction',
    titleAr: 'تغيرات مناطق القطعة العضلية (الساركومير) أثناء الانقباض',
    frontEn: 'According to Huxley sliding filament theory, which sarcomere band changes in length and which remains constant?',
    frontAr: 'وفقاً لفرضية الخيوط المنزلقة لهكسلي، أي مناطق القطعة العضلية يتغير طولها وأيها يظل ثابتاً تماماً؟',
    backEn: '• Constant: Dark A-band remains invariant (represents length of thick myosin filaments).\n• Shorten: Light I-band narrows; Semi-light H-zone narrows or disappears in complete contraction; distance between Z-lines decreases.',
    backAr: '• تظل ثابتة: المنطقة الداكنة (A) لا يتغير طولها نهائياً لأنها تمثل الطول الفعلي لخيوط الميوسين السميكة.\n• يقل طولها: المنطقة المضيئة (I) تضيق، والمنطقة شبه المضيئة (H) تتقلص أو تنعدم في الانقباض التام، وتتقارب خطوط (Z).',
    latex: '\\Delta L_{\\text{A-band}} = 0, \\quad L_{\\text{H-zone}} \\to 0, \\quad L_{\\text{I-band}} \\downarrow',
  },
  {
    id: 'fc_05',
    chapter: 'ch1',
    titleEn: 'Dual Essential Role of ATP in Muscle Mechanics',
    titleAr: 'الدور المزدوج الحاسم لـ ATP في ميكانيكا الانقباض والانبساط العضلي',
    frontEn: 'What are the two distinct, vital biochemical roles of ATP in skeletal muscle action?',
    frontAr: 'ما هما الدوران الكيميائيان الحيويان المتميزان والضروريان لـ ATP في عمل العضلة الهيكلية؟',
    backEn: '1. In Contraction: Hydrolysis of ATP energizes myosin cross-bridge heads to pull thin actin filaments inward toward the M-line.\n2. In Relaxation: Binding of fresh ATP is mandatory to detach myosin cross-bridges from actin. Severe ATP depletion causes continuous cross-bridge locking (Painful Muscle Spasm).',
    backAr: '١. في الانقباض: تحلل ATP يمد الروابط المستعرضة للميوسين بالطاقة لسحب خيوط الأكتين باتجاه مركز القطعة العضلية.\n٢. في الانبساط: يلزم جزيء ATP جديد لفصل الروابط المستعرضة عن خيوط الأكتين. والنقص الشديد في ATP يؤدي لفشل الانفصال وحدوث الشد العضلي المؤلم.',
  },
  {
    id: 'fc_06',
    chapter: 'ch1',
    titleEn: 'Muscle Fatigue vs. Muscle Spasm Pathology',
    titleAr: 'الفرق الفسيولوجي بين الإجهاد العضلي والشد العضلي المؤلم',
    frontEn: 'What is the distinct physiological difference between muscle fatigue and muscle spasm?',
    frontAr: 'ما الفرق الفسيولوجي الدقيق بين إجهاد العضلة وحدوث الشد العضلي المؤلم؟',
    backEn: '• Muscle Fatigue: Inadequate oxygen causes muscle to switch to anaerobic respiration, producing lactic acid which accumulates in fibers and reduces contraction force.\n• Muscle Spasm: Complete or critical depletion of ATP preventing cross-bridge detachment, or erratic conflicting nerve impulses from the motor cortex.',
    backAr: '• الإجهاد العضلي: نقص الأكسجين يجبر العضلة على التنفس اللاهوائي فيتراكم حمض اللاكتيك وتقل كفاءة وسرعة الانقباض.\n• الشد العضلي: استهلاك ونقص جزيئات ATP الحاد مما يمنع فك الروابط المستعرضة وتظل العضلة منقبضة بشدة، أو وصول نبضات عصبية خاطئة من المخ.',
  },

  // Chapter 2: Hormonal Coordination
  {
    id: 'fc_07',
    chapter: 'ch2',
    titleEn: 'Growth Hormone Pathologies: Gigantism vs. Acromegaly',
    titleAr: 'أمراض هرمون النمو: العملاقة مقابل الأكروميجالي',
    frontEn: 'How do the clinical symptoms of GH hypersecretion differ before vs. after puberty?',
    frontAr: 'كيف تختلف الأعراض الإكلينيكية لفرط إفراز هرمون النمو قبل البلوغ مقابل بعد البلوغ؟',
    backEn: '• Before Puberty: Gigantism (excessive longitudinal elongation of long bones prior to epiphyseal closure).\n• After Puberty (Adults): Acromegaly (elongation cannot occur; instead causes lateral thickening of flat bone extremities: hands, feet, and protruding mandible/jaw bones).',
    backAr: '• قبل البلوغ (الأطفال): العملقة (طول مفرط في العظام الطويلة قبل التئام غضاريف النمو).\n• بعد البلوغ (البالغين): الأكروميجالي (تضخم وتجدد نمو الأجزاء الطرفية للعظام الطويلة: كفوف اليدين، القدمين، وبروز عظام الفك السفلي والوجه).',
  },
  {
    id: 'fc_08',
    chapter: 'ch2',
    titleEn: 'Calcium Antagonistic Homeostasis: Calcitonin vs. Parathormone',
    titleAr: 'الاتزان المتضاد للكالسيوم: الكالسيتونين مقابل الباراثورمون',
    frontEn: 'How do Calcitonin and Parathormone coordinately regulate serum calcium levels?',
    frontAr: 'كيف ينظم الكالسيتونين والباراثورمون مستوى الكالسيوم في الدم بآلية تضادية متناسقة؟',
    backEn: '• Calcitonin (Thyroid C-cells): Secreted when blood [Ca²⁺] is high. Decreases blood calcium by inhibiting osteoclasts and depositing calcium into bone matrix.\n• Parathormone (Parathyroid glands): Secreted when blood [Ca²⁺] is low. Increases blood calcium by stimulating osteoclasts to mobilize calcium from bones into blood.',
    backAr: '• الكالسيتونين (الغدة الدرقية): يفرز عند ارتفاع الكالسيوم في الدم ليعمل على تقليله ومنع سحبه من العظام وترسيبه فيها.\n• الباراثورمون (الغدد جارات الدرقية): يفرز عند انخفاض الكالسيوم في الدم ليعمل على رفعه عبر امتصاصه من الكليتين وسحبه من العظام.',
    latex: '\\text{High } [Ca^{2+}] \\implies \\text{Calcitonin} (\\downarrow) \\quad \\iff \\quad \\text{Low } [Ca^{2+}] \\implies \\text{Parathormone} (\\uparrow)',
  },
  {
    id: 'fc_09',
    chapter: 'ch2',
    titleEn: 'Endocrine Pancreas: Alpha vs. Beta Cells',
    titleAr: 'غدة البنكرياس الصماء: خلايا بيتا مقابل خلايا ألفا في جزر لانجرهانز',
    frontEn: 'What are the distinct secretagogues, hormones, and physiological roles of islet alpha vs beta cells?',
    frontAr: 'ما هي الهرمونات والأدوار الفسيولوجية لخلايا ألفا وبيتا في جزر لانجرهانز بالبنكرياس؟',
    backEn: '• Beta Cells (Majority ~70%): Secrete Insulin when glucose is high; promotes cellular glucose uptake and converts excess glucose into glycogen in liver/muscles or lipids in adipose.\n• Alpha Cells (Minority): Secrete Glucagon when glucose is low; stimulates liver glycogenolysis (glycogen to glucose) to elevate fasting glycemia.',
    backAr: '• خلايا بيتا (الأغلبية ~70%): تفرز الإنسولين عند ارتفاع السكر، ليحث الخلايا على امتصاصه ويخزن الفائض كجليكوجين في الكبد والعضلات ومواد دهنية.\n• خلايا ألفا (الأقلية): تفرز الجلوكاجون عند انخفاض السكر، ليحث الكبد فقط على تحويل الجليكوجين المخزن به إلى جلوكوز لرفع سكر الدم.',
  },
  {
    id: 'fc_10',
    chapter: 'ch2',
    titleEn: 'Adrenal Gland: Cortex vs. Medulla Embryology & Hormones',
    titleAr: 'الغدة الكظرية: القشرة مقابل النخاع من حيث المنشأ والهرمونات',
    frontEn: 'How do the adrenal cortex and medulla fundamentally differ in tissue origin and hormone classes?',
    frontAr: 'كيف تختلف قشرة الكظرية عن نخاعها جوهرياً من حيث المنشأ النسيجي ونوعية الهرمونات المفرزة؟',
    backEn: '• Adrenal Cortex: Mesodermal origin, controlled by pituitary ACTH; secretes steroid hormones (Mineralocorticoids: Aldosterone, Glucocorticoids: Cortisone, Sex steroids).\n• Adrenal Medulla: Neuroectodermal (sympathetic) origin, controlled directly by sympathetic nerves; secretes catecholamine emergency hormones (Adrenaline & Noradrenaline).',
    backAr: '• قشرة الكظرية: منشأ ميزوديرمي، تقع تحت سيطرة هرمون ACTH النخامي؛ تفرز هرمونات ستيرويدية دهنية (الألدوستيرون، الكورتيزون، والهرمونات الجنسية).\n• نخاع الكظرية: منشأ عصبي سمبثاوي، يقع تحت تنبيه عصبي مباشر؛ يفرز هرمونات الطوارئ السريعة (الأدرينالين والنورأدرينالين).',
  },

  // Chapter 3: Reproduction
  {
    id: 'fc_11',
    chapter: 'ch3',
    titleEn: 'Parthenogenesis: Honeybee vs. Aphid Contrast',
    titleAr: 'التوالد البكري: مقارنة بين نحل العسل وحشرة المن',
    frontEn: 'How does parthenogenesis differ in chromosome ploidy between honeybees and aphids?',
    frontAr: 'كيف يختلف التوالد البكري بين نحل العسل وحشرة المن من حيث المجموعة الصبغية للأمشاج والنسل؟',
    backEn: '• Honeybee: Queen forms haploid ova (n) by meiosis. Unfertilized ovum develops parthenogenetically into haploid male Drone (n). Fertilized ovum (2n) develops into female Queen or Worker.\n• Aphid: Female forms diploid ova (2n) by mitosis without fertilization, developing into diploid females (2n).',
    backAr: '• نحل العسل: تنتج الملكة بويضات أحادية (n) بالانقسام الميوزي؛ تنمو البويضة غير المخصبة توالداً بكرياً لتعطي ذكراً أحادياً (n)، بينما البويضة المخصبة (2n) تعطي إناثاً (ملكات أو شغالات).\n• حشرة المن: تنتج الأنثى بويضات ثنائية (2n) بالانقسام الميتوزي تنمو توالداً بكرياً لتعطي إناثاً ثنائية (2n).',
  },
  {
    id: 'fc_12',
    chapter: 'ch3',
    titleEn: 'Flowering Plant Double Fertilization Mechanism',
    titleAr: 'آلية الإخصاب المزدوج في النباتات الزهرية',
    frontEn: 'What are the two simultaneous fertilization events defining double fertilization in angiosperms?',
    frontAr: 'ما هما عمليتا الإخصاب المتزامنتان اللتان تُعرفان بالإخصاب المزدوج في النباتات الزهرية مغطاة البذور؟',
    backEn: '1. True Fertilization: 1st sperm nucleus (n) fuses with ovum nucleus (n) to form the diploid Zygote (2n), developing into the embryo.\n2. Triple Fusion: 2nd sperm nucleus (n) fuses with the two central polar nuclei (n + n) to form the triploid Endosperm nucleus (3n), forming nutritive tissue.',
    backAr: '١. الإخصاب التام: تندمج النواة الزكرية الأولى (n) مع نواة البيضة (n) لتكوين الزيجوت (2n) الذي ينمو إلى الجنين.\n٢. الاندماج الثلاثي: تندمج النواة الزكرية الثانية (n) مع نواتي الكيس الجنيني (n+n) لتكوين نواة الإندوسبرم ثلاثية المجموعة الصبغية (3n) التي تغذي الجنين.',
    latex: '(n) + (n) \\to 2n\\,(\\text{Zygote}), \\quad (n) + (n+n) \\to 3n\\,(\\text{Endosperm})',
  },
  {
    id: 'fc_13',
    chapter: 'ch3',
    titleEn: 'Menstrual Cycle Timeline & Hormonal Triggers',
    titleAr: 'الجدول الزمني لدورة الطمث ومحفزات الهرمونات الأربعة',
    frontEn: 'What are the durations and key hormonal events of the 3 phases of the human menstrual cycle?',
    frontAr: 'ما هي مدد والمحطات الهرمونية الرئيسية للمراحل الثلاث في دورة الطمث لدى المرأة؟',
    backEn: '• Days 1–5 (Menstruation): Progesterone/estrogen plummet, shedding endometrium.\n• Days 5–14 (Follicular Phase, 10 days): Pituitary FSH develops Graafian follicle, which secretes Estrogen to repair endometrium.\n• Day 14 (Ovulation): Massive LH surge ruptures follicle, releasing ovum into fallopian tube.\n• Days 14–28 (Luteal Phase, 14 days): Ruptured follicle becomes Corpus Luteum, secreting Progesterone to thicken and vascularize endometrium.',
    backAr: '• الأيام ١–٥ (مرحلة الطمث): انهيار البروجستيرون والإستروجين يؤدي لتمزق بطانة الرحم وخروج دم الحيض.\n• الأيام ٥–١٤ (نضج الحوصلة - ١٠ أيام): هرمون FSH ينضج حوصلة جراف التي تفرز الإستروجين لإنماء بطانة الرحم.\n• اليوم ١٤ (التبويض): اندفاع هرمون LH يفجر حوصلة جراف ويحرر البويضة لتلتقطها قناة فالوب.\n• الأيام ١٤–٢٨ (مرحلة تكوين الجسم الأصفر - ١٤ يوماً): يتحول متبقي الحوصلة إلى جسم أصفر يفرز البروجستيرون لزيادة سمك وإمداد بطانة الرحم بالدم.',
  },
  {
    id: 'fc_14',
    chapter: 'ch3',
    titleEn: 'Identical (Monozygotic) vs. Fraternal (Dizygotic) Twins',
    titleAr: 'التوائم المتماثلة (أحادية اللقاحة) مقابل التوائم المتآخية (ثنائية اللقاحة)',
    frontEn: 'What are the embryological origins and genetic characteristics of identical vs fraternal twins?',
    frontAr: 'ما هو المنشأ الجنيني والصفات الوراثية للتوائم المتماثلة مقابل التوائم المتآخية؟',
    backEn: '• Identical (Monozygotic): 1 ovum fertilized by 1 sperm; early zygote/blastocyst divides into 2 separate embryos. Exactly identical DNA and same sex; share 1 placenta.\n• Fraternal (Dizygotic): 2 separate ova fertilized by 2 separate sperm cells. Non-identical genetics (like normal siblings), may be same or opposite sex; 2 separate placentas.',
    backAr: '• التوائم المتماثلة: بويضة واحدة أخصبها حيوان منوي واحد، وانفلقت الكتلة الخلوية لجنينين متطابقين. يحملان نفس الجينات ولهما نفس الجنس دائماً ويشتركان في مشيمة واحدة.\n• التوائم المتآخية: بويضتان منفصلتان أخصبهما حيوانان منويان مختلفان في نفس الوقت. وراثتهما كأي أخوين عاديين، قد يتشابهان أو يختلفان في الجنس، ولكل منهما مشيمة وكيس جنيني مستقل.',
  },

  // Chapter 4: Immunity
  {
    id: 'fc_15',
    chapter: 'ch4',
    titleEn: 'Primary vs. Secondary Lymphoid Organs',
    titleAr: 'الأعضاء الليمفاوية الأولية (المركزية) مقابل الثانوية (المحيطية)',
    frontEn: 'What distinguishes primary lymphoid organs from secondary lymphoid organs in humans?',
    frontAr: 'ما الفرق الجوهري بين الأعضاء الليمفاوية الأولية والأعضاء الليمفاوية الثانوية في الإنسان؟',
    backEn: '• Primary (Central): Sites of lymphocyte generation and maturation. Red Bone Marrow (origin of all blood cells + B and NK maturation) and Thymus (T-cell maturation via Thymosin).\n• Secondary (Peripheral): Sites where mature lymphocytes encounter antigens and mount immune defenses. Spleen, Lymph Nodes, Tonsils, Peyer\'s patches.',
    backAr: '• الأعضاء الأولية (المركزية): مواقع إنتاج ونضج الخلايا الليمفاوية. وتشمل نخاع العظام الأحمر (إنتاج كافة الخلايا ونضج البائية والقاتلة الطبيعية) والغدة التيموسية (نضج وتمايز التائية بهرمون التيموسين).\n• الأعضاء الثانوية: مواقع تخزين الخلايا والتقائها بالأنتيجينات وبدء المعركة المناعية. وتشمل الطحال، العقد الليمفاوية، اللوزتان، وبقع باير.',
  },
  {
    id: 'fc_16',
    chapter: 'ch4',
    titleEn: 'T-Lymphocyte Lineages: CD4+ vs. CD8+',
    titleAr: 'سلالات الخلايا التائية: خلايا CD4+ المساعدة مقابل خلايا CD8+ السامة والمثبطة',
    frontEn: 'What are the functions, cluster-of-differentiation markers, and secretory products of TH, TC, and TS cells?',
    frontAr: 'ما هي الوظائف والعلامات الجزيئية (CD) والإفرازات لكل من الخلايا التائية TH و TC و TS؟',
    backEn: '• T-Helper (TH, CD4+): Master coordinator; secretes Interleukins & Cytokines to activate B-cells, TC cells, and macrophages.\n• Cytotoxic T (TC, CD8+): Killer of virus-infected and tumor cells; secretes Perforin (punctures membranes) and Lymphotoxins (activates apoptotic genes).\n• Suppressor T (TS, CD8+): Halts immune response after victory; secretes Lymphokines to induce apoptosis of excess effector B and T cells.',
    backAr: '• التائية المساعدة (TH - CD4+): القائد المنشط؛ تفرز الإنترلوكينات والسيتوكينات لتنشيط البائية والتائية السامة والبلعميات.\n• التائية السامة (TC - CD8+): تهاجم الخلايا المصابة بالفيروس والخلايا السرطانية والأعضاء المزروعة؛ تفرز بروتين البيرفورين (صانع الثقوب) والسموم الليمفاوية (لتفتيت نواة الخلية المصابة).\n• التائية المثبطة (TS - CD8+): تنظم وتكبح الاستجابة المناعية بعد القضاء على العدوى؛ تفرز الليمفوكينات لتثبيط وموت الخلايا الفائضة.',
  },
  {
    id: 'fc_17',
    chapter: 'ch4',
    titleEn: 'Antibody Structure & Interchain Chemical Bonds',
    titleAr: 'تركيب الجسم المضاد والروابط الكيميائية بين السلاسل',
    frontEn: 'What is the molecular architecture of an IgG antibody monomer and how many disulfide bonds link it?',
    frontAr: 'ما هو التركيب الجزيئي لجزيء الجسم المضاد المفرد (IgG) وكم عدد الروابط الكبريتيدية التي تربطه؟',
    backEn: '• Polypeptides: 4 chains (2 identical Heavy chains + 2 identical Light chains).\n• Disulfide Bridges: 4 interchain disulfide bonds (-S-S-) (2 link the heavy chains in the hinge region, 1 links each light chain to a heavy chain).\n• Binding Sites: 2 identical antigen-binding sites (Fab) at the variable N-terminal tips.',
    backAr: '• السلاسل الببتيدية: 4 سلاسل (سلسلتان ثقيلتان طويلتان + سلسلتان خفيفتان قصيرتان).\n• الروابط الكبريتيدية: 4 روابط كبريتيدية ثنائية بين السلاسل (رابطتان تربطان السلسلتين الثقيلتين عند المفصلة، ورابطة واحدة تربط كل سلسلة خفيفة بسلسلتها الثقيلة).\n• مواقع الارتباط: موقعان متماثلان للارتباط بالأنتيجين عند الطرف المتغير (Fab).',
    latex: '2\\,\\text{Heavy (H)} + 2\\,\\text{Light (L)} + 4\\,\\text{Disulfide (-S-S-)} \\implies 2\\,\\text{Fab Sites}',
  },
  {
    id: 'fc_18',
    chapter: 'ch4',
    titleEn: '5 Mechanisms of Antibody Action Against Pathogens',
    titleAr: 'الآليات الخمس لعمل الأجسام المضادة ضد الميكروبات',
    frontEn: 'What are the 5 distinct physiological mechanisms utilized by antibodies to neutralize pathogens?',
    frontAr: 'ما هي الآليات الفسيولوجية الخمس التي تستخدمها الأجسام المضادة للقضاء على مسببات الأمراض؟',
    backEn: '1. Neutralization: Coats viral surface to block cell entry or prevents uncoating.\n2. Agglutination: IgM (10 sites) cross-links multiple microbes into large clumps for phagocytosis.\n3. Precipitation: Binds soluble antigens converting them into insoluble aggregates.\n4. Lysis: Antigen-antibody complex activates the Complement cascade to bore holes in membranes.\n5. Antitoxin: Combines with bacterial toxins and activates complement to destroy the toxin.',
    backAr: '١. التعادل: تحييد الفيروسات بالارتباط بأغلفتها ومنعها من الالتصاق بغشاء الخلية العائلة.\n٢. التلازن (الإلصاق): يرتبط IgM بعشرة مواقع لربط عدة ميكروبات معاً في كتل تسهل بلعمتها.\n٣. الترسيب: تحويل الأنتيجينات الذائبة إلى معقدات غير ذائبة يسهل على البلعميات التهامها.\n٤. التحلل: تنشيط بروتينات المتممات لإحداث ثقوب في غشاء الميكروب وإذابته.\n٥. إبطال مفعول السموم: الاتحاد مع جزيئات السم وتنشيط المتممات لتفكيك السم وحماية الخلايا.',
  },

  // Chapter 5: Molecular Biology & STEM Genetics
  {
    id: 'fc_19',
    chapter: 'ch5',
    titleEn: 'Avery, MacLeod & McCarty: DNase Critical Experiment',
    titleAr: 'تجربة أفري وزملائه الحاسمة: إنزيم ديوكسي ريبونيوكليز (DNase)',
    frontEn: 'How did Avery and his colleagues definitively prove that DNA, not protein, is the bacterial transforming factor?',
    frontAr: 'كيف أثبت العالم أفري وزملاؤه بشكل قاطع أن الـ DNA وليس البروتين هو مادة التحول البكتيري؟',
    backEn: 'They treated the active transforming extract with proteolytic enzymes (Proteases) and RNase, which did NOT abolish transformation. When treated specifically with Deoxyribonuclease (DNase), which degrades DNA while sparing proteins, transformation was completely destroyed, proving DNA is the genetic material.',
    backAr: 'قاموا بمعالجة مستخلص مادة التحول بإنزيمات هاضمة للبروتين (تربسين/ببتيداز) وإنزيم RNase، فاستمر التحول البكتيري. ولكن عند معالجته بإنزيم ديوكسي ريبونيوكليز (DNase) الذي يحلل DNA فقط، توقف التحول البكتيري تماماً، مما أثبت أن DNA هو المادة الوراثية.',
  },
  {
    id: 'fc_20',
    chapter: 'ch5',
    titleEn: 'Chargaff Equivalence Rules & DNA Dimensions',
    titleAr: 'قواعد شارجاف للتكافؤ وأبعاد اللولب المزدوج لـ DNA',
    frontEn: 'What are Chargaff stoichiometric ratios and the helical dimensions of 1 complete turn of DNA?',
    frontAr: 'ما هي نسب شارجاف الكمية وما هي الأبعاد الهندسية للفة الواحدة الكاملة في لولب DNA المزدوج؟',
    backEn: '• Chargaff: In double-stranded DNA: %A = %T (2 H-bonds) and %G = %C (3 H-bonds); Total purines = Total pyrimidines: (A+G)/(T+C) = 1.0.\n• Dimensions: 1 complete helical turn = 10 base pairs = 20 nucleotides = 3.4 nm length (0.34 nm per base pair); duplex diameter = 2.0 nm.',
    backAr: '• شارجاف: في اللولب المزدوج: نسبة A = T (برابطتين هيدروجينيتين) ونسبة G = C (بـ 3 روابط)؛ ومجموع البيورينات = مجموع البيريميدينات (A+G)/(T+C) = 1.\n• الأبعاد: اللفة الواحدة الكاملة = 10 أزواج من القواعد = 20 نيوكليوتيدة = 3.4 نانومتر في الطول (0.34 نانومتر لكل زوج) وقطر اللولب = 2 نانومتر.',
    latex: '\\frac{\\%A + \\%G}{\\%T + \\%C} = 1.0, \\quad 1\\,\\text{Turn} = 10\\,\\text{bp} = 3.4\\,\\text{nm}',
  },
  {
    id: 'fc_21',
    chapter: 'ch5',
    titleEn: 'Start Codon vs. 3 Stop Codons in Translation',
    titleAr: 'كودون البدء مقابل كودونات الوقف الثلاثة في تخليق البروتين',
    frontEn: 'What are the start codon and the three universal stop codons, and what binds to stop codons?',
    frontAr: 'ما هو كودون البدء وكودونات الوقف الثلاثة العامة، وما الذي يرتبط بكودون الوقف على الريبوسوم؟',
    backEn: '• Start Codon: 5\'-AUG-3\' on mRNA; codes for Methionine (initiator tRNA-Met).\n• Stop Codons: 5\'-UAA-3\', 5\'-UAG-3\', 5\'-UGA-3\'; do NOT code for any amino acid; no tRNA matches them.\n• Release Factor: Protein factor that binds to stop codons in the A-site, triggering peptidyl transferase to hydrolyze the polypeptide chain and disassemble the ribosomal subunits.',
    backAr: '• كودون البدء: 5\'-AUG-3\' على mRNA، يشفر حمض الميثيونين ويحمله tRNA البادئ.\n• كودونات الوقف الثلاثة: 5\'-UAA-3\' و 5\'-UAG-3\' و 5\'-UGA-3\'، ولا تشفر أي أحماض أمينية ولا يوجد لها tRNA.\n• عامل الإطلاق (Release Factor): بروتين يرتبط بكودون الوقف في موقع A بالريبوسوم فيحرر سلسلة عديد الببتيد وتنفصل تحت وحدتي الريبوسوم.',
  },
  {
    id: 'fc_22',
    chapter: 'ch5',
    titleEn: 'Type II Restriction Endonucleases & Palindromic Cleavage',
    titleAr: 'إنزيمات القصر البكتيرية (النوع الثاني) وتتابعات التعرف المتناظرة',
    frontEn: 'What characteristics define Type II restriction enzymes and their palindromic recognition sites?',
    frontAr: 'ما هي الخصائص المعيارية لإنزيمات القصر البكتيرية ومواقع التعرف المتناظرة الخاصة بها؟',
    backEn: '• Palindrome: A 4-to-8 base-pair recognition sequence that reads identically in the 5\' to 3\' direction on both complementary strands (e.g. EcoRI: 5\'-GAATTC-3\').\n• Cleavage: Cleaves phosphodiester bonds at specific sites inside or near the sequence, generating single-stranded protruding "sticky ends" (complementary cohesion) or "blunt ends".',
    backAr: '• موقع التعرف المتناظر: تتابع من 4 إلى 8 نيوكليوتيدات يُقرأ بنفس الترتيب في الاتجاه من 5\' إلى 3\' على كلا شريطي DNA المتكاملين (مثل إنزيم EcoRI: 5\'-GAATTC-3\').\n• القطع: يقطع الروابط الفوسفاتية ثنائية الإستر تاركاً أطرافاً لاصقة مفردة مائلة تتكامل مع أي قطعة أخرى قُطعت بنفس الإنزيم لتسهيل الاستنساخ.',
  },
  {
    id: 'fc_23',
    chapter: 'ch5',
    titleEn: 'CRISPR-Cas9: Guide RNA and PAM Requirement',
    titleAr: 'نظام كريسبر Cas9: متطلبات RNA المرشد وتتابع PAM المجاور',
    frontEn: 'How does SpCas9 identify its genomic target and why is the PAM motif mandatory?',
    frontAr: 'كيف يحدد إنزيم Cas9 هدفه الجيني بدقة، ولماذا يُعد تتابع PAM المجاور شرطاً إلزامياً للقطع؟',
    backEn: '• Cas9 utilizes a 20-nucleotide single-guide RNA (sgRNA) to match the target DNA protospacer.\n• PAM Requirement: Cas9 first scans DNA for the Protospacer Adjacent Motif (5\'-NGG-3\'). Cleavage occurs 3 base pairs upstream of PAM. Bacterial genomes omit PAM in their CRISPR array to avoid self-cleaving their own DNA.',
    backAr: '• يوجه إنزيم Cas9 جزيء RNA مرشد (sgRNA) يحمل 20 نيوكليوتيدة تطابق الجين المستهدف.\n• تتابع PAM (NGG): يبحث الإنزيم أولاً عن تتابع PAM المجاور، ثم يفك لولب DNA ويفحص تطابق المرشد، ويحدث الكسر المزدوج قبل PAM بثلاث قواعد. غياب PAM في مصفوفة البكتيريا يحمي جينومها من التدمير الذاتي.',
    latex: '5\'\\text{-Target (20 bp)-} \\quad [\\text{Cut: 3 bp}] \\quad \\mathbf{5\'\\text{-NGG-}3\'\\,(PAM)}',
  },
  {
    id: 'fc_24',
    chapter: 'ch5',
    titleEn: 'Cellular Respiration ATP Accounting: 32 vs. 38 ATP',
    titleAr: 'ميزانية الطاقة وإنتاج ATP في التنفس الخلوي الهوائي',
    frontEn: 'What is the theoretical yield of ATP per glucose molecule in aerobic cellular respiration and why does modern P/O ratio yield ~30-32 ATP?',
    frontAr: 'ما هي حصيلة جزيئات ATP الناتجة عن أكسدة جزيء جلوكوز واحد في التنفس الهوائي وكيف تفسر النسب الحديثة إنتاج 30-32 ATP؟',
    backEn: '• Classical yield: 38 ATP (Glycolysis: 2 ATP + 2 NADH; Link: 2 NADH; Krebs: 2 ATP + 6 NADH + 2 FADH₂; with 1 NADH = 3 ATP, 1 FADH₂ = 2 ATP).\n• Modern Chemiosmotic yield: ~30 to 32 ATP per glucose, because H⁺ proton-leak and active transport across the inner mitochondrial membrane yield ~2.5 ATP per NADH and ~1.5 ATP per FADH₂.',
    backAr: '• الحساب الكلاسيكي للوزارة: 38 ATP (انشطار الجلوكوز: 2 ATP + 2 NADH؛ تفاعل الربط: 2 NADH؛ دورة كريبس: 2 ATP + 6 NADH + 2 FADH₂؛ بافتراض كل NADH ينتج 3 ATP وكل FADH₂ ينتج 2 ATP).\n• الحساب الكيميائي الأسموزي الحديث: ~30 إلى 32 ATP لأن ضخ 4 بروتونات يلزم لإنتاج 1 ATP فينخفض إنتاج NADH إلى 2.5 ATP وإنتاج FADH₂ إلى 1.5 ATP.',
    latex: '\\text{Glucose} + 6\\,\\text{O}_2 \\to 6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + 38\\,\\text{ATP}',
  },
];

export const BiologyFlashcards: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isAr = lang === 'ar';
  const isContrast = theme === 'high-contrast';

  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [reviewIds, setReviewIds] = useState<Set<string>>(new Set());

  // Filtered card list
  const filteredCards = useMemo(() => {
    if (selectedChapter === 'all') return BIOLOGY_FLASHCARDS;
    return BIOLOGY_FLASHCARDS.filter((c) => c.chapter === selectedChapter);
  }, [selectedChapter]);

  // Current active card
  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  // Navigation handlers
  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
  };

  const markMastered = (id: string) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setReviewIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    handleNext();
  };

  const markReview = (id: string) => {
    setReviewIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setMasteredIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    handleNext();
  };

  const resetProgress = () => {
    setMasteredIds(new Set());
    setReviewIds(new Set());
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const progressPercent = Math.round(
    ((currentIndex + 1) / Math.max(1, filteredCards.length)) * 100
  );

  return (
    <div className="space-y-6">
      {/* Flashcards Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl border bg-slate-900/80 dark:bg-slate-950/80 border-slate-800 shadow-md">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>{isAr ? 'الاستذكار النشط والتكرار المتباعد' : 'Active Recall & Spaced Repetition'}</span>
            </span>
            <span className="text-xs font-mono font-bold text-slate-400">
              {currentIndex + 1} / {filteredCards.length}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            {isAr ? 'بطاقات المراجعة الشاملة لمفاهيم الأحياء' : 'Comprehensive Biology Flashcard Mastery'}
          </h2>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={handleShuffle}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-all cursor-pointer active:scale-95"
          >
            <Shuffle className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? 'خلط عشوائي' : 'Shuffle'}</span>
          </button>
          <button
            onClick={resetProgress}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-all cursor-pointer active:scale-95"
          >
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isAr ? 'إعادة ضبط' : 'Reset'}</span>
          </button>
        </div>
      </div>

      {/* Chapter Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1 pl-1">
          <Filter className="w-3.5 h-3.5 text-indigo-400" />
          <span>{isAr ? 'الفصل:' : 'Unit:'}</span>
        </span>
        {[
          { id: 'all', labelEn: 'All Chapters (24)', labelAr: 'كافة الفصول (٢٤)' },
          { id: 'ch1', labelEn: 'Ch 1: Support & Movement', labelAr: '١: الدعامة والحركة' },
          { id: 'ch2', labelEn: 'Ch 2: Endocrine Axis', labelAr: '٢: التنسيق الهرموني' },
          { id: 'ch3', labelEn: 'Ch 3: Reproduction', labelAr: '٣: التكاثر' },
          { id: 'ch4', labelEn: 'Ch 4: Immunity', labelAr: '٤: المناعة' },
          { id: 'ch5', labelEn: 'Ch 5: Molecular Genetics', labelAr: '٥: البيولوجيا الجزيئية' },
        ].map((tab) => {
          const isSelected = selectedChapter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedChapter(tab.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {isAr ? tab.labelAr : tab.labelEn}
            </button>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800/80 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-700/50">
        <div
          className="bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500 h-full rounded-full transition-all duration-300 shadow-sm"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 3D Flip Card Container */}
      <div className="w-full max-w-3xl mx-auto min-h-[380px] perspective-1000">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`w-full min-h-[380px] p-6 sm:p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer relative flex flex-col justify-between shadow-2xl select-none group ${
            isFlipped
              ? isContrast
                ? 'bg-black border-yellow-400 text-white'
                : 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-indigo-500/60 text-white'
              : isContrast
              ? 'bg-black border-white text-white'
              : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-slate-700/80 text-white hover:border-rose-500/60'
          }`}
        >
          {/* Card Top Meta */}
          <div className="flex items-center justify-between w-full border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-black uppercase tracking-wider text-rose-300">
                {isAr ? currentCard.titleAr : currentCard.titleEn}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                  isFlipped
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>{isFlipped ? (isAr ? 'الإجابة والآلية' : 'Answer & Mechanism') : (isAr ? 'انقر للقلب' : 'Click to Flip')}</span>
              </span>
            </div>
          </div>

          {/* Card Main Body */}
          <div className="py-6 flex flex-col items-center justify-center text-center">
            {!isFlipped ? (
              <div className="space-y-4 max-w-xl animate-in fade-in duration-200">
                <span className="text-3xl sm:text-4xl inline-block mb-1">🧬</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-100 leading-snug">
                  <MathRenderer text={isAr ? currentCard.frontAr : currentCard.frontEn} lang={lang} />
                </h3>
                <p className="text-xs text-slate-400">
                  {isAr ? 'استحضر الإجابة ذهنياً ثم انقر للتحقق' : 'Recall the mechanism mentally, then tap card to reveal'}
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-w-2xl text-left rtl:text-right animate-in fade-in duration-200">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                  <div className="text-sm sm:text-base font-bold text-slate-100 leading-relaxed whitespace-pre-line">
                    <MathRenderer text={isAr ? currentCard.backAr : currentCard.backEn} lang={lang} />
                  </div>
                </div>

                {currentCard.latex && (
                  <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-center">
                    <MathRenderer math={currentCard.latex} lang={lang} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Card Bottom Hint / Status */}
          <div className="flex items-center justify-between w-full border-t border-white/10 pt-3 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-500" />
              <span>{isAr ? 'المسافة أو النقر للقلب' : 'Spacebar or Tap to flip'}</span>
            </div>

            <div className="flex items-center gap-3">
              {masteredIds.has(currentCard.id) && (
                <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? 'متقن' : 'Mastered'}</span>
                </span>
              )}
              {reviewIds.has(currentCard.id) && (
                <span className="text-rose-400 font-bold flex items-center gap-1 text-[11px]">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>{isAr ? 'يحتاج مراجعة' : 'Review'}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Spaced Repetition Rating & Step Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            <span className="hidden sm:inline">{isAr ? 'السابق' : 'Previous'}</span>
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
          >
            <span className="hidden sm:inline">{isAr ? 'التالي' : 'Next'}</span>
            <ChevronRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>

        {/* Leitner Box Rating Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => markReview(currentCard.id)}
            className="px-4 py-2.5 rounded-2xl bg-rose-950/80 hover:bg-rose-900/90 text-rose-200 border border-rose-600/50 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-rose-950/30 transition-all cursor-pointer active:scale-95"
          >
            <XCircle className="w-4 h-4 text-rose-400" />
            <span>{isAr ? 'يحتاج مراجعة أخرى' : 'Needs Review'}</span>
          </button>

          <button
            onClick={() => markMastered(currentCard.id)}
            className="px-4 py-2.5 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900/90 text-emerald-200 border border-emerald-600/50 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/30 transition-all cursor-pointer active:scale-95"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? 'أتقنت هذا المفهوم' : 'Mastered!'}</span>
          </button>
        </div>
      </div>

      {/* Progress Stats Summary */}
      <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto pt-2">
        <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
          <p className="text-[11px] font-bold text-slate-400">{isAr ? 'إجمالي البطاقات' : 'Total Cards'}</p>
          <p className="text-xl font-black text-white mt-0.5">{filteredCards.length}</p>
        </div>
        <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center">
          <p className="text-[11px] font-bold text-emerald-300">{isAr ? 'المتقنة بنجاح' : 'Mastered'}</p>
          <p className="text-xl font-black text-emerald-400 mt-0.5">{masteredIds.size}</p>
        </div>
        <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-center">
          <p className="text-[11px] font-bold text-rose-300">{isAr ? 'قيد المراجعة' : 'To Review'}</p>
          <p className="text-xl font-black text-rose-400 mt-0.5">{reviewIds.size}</p>
        </div>
      </div>
    </div>
  );
};
