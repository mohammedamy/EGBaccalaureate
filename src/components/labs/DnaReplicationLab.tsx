import React, { useState, useMemo } from 'react';
import {
  Dna,
  Sparkles,
  CheckCircle2,
  Zap,
  ZoomIn,
  Info,
  ShieldAlert,
  Cpu,
  Scissors,
  Flame,
} from 'lucide-react';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  drawGlowingParticle,
  type LabDefinition,
  type LabViewportState,
  type LabParameterSchema,
  type LabPreset,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import dnaImg from '../../assets/biology/dna_double_helix.jpg';
import { toHindiDigits } from '../../utils/arabicNumerals';

interface Props {
  lang: 'ar' | 'en';
  theme?: 'dark' | 'light' | 'high-contrast';
}

// 64-Codon Universal Genetic Code Matrix
export const GENETIC_CODE_MATRIX: Record<string, { aa: string; nameEn: string; nameAr: string; type: 'start' | 'stop' | 'standard' }> = {
  // U row
  UUU: { aa: 'Phe', nameEn: 'Phenylalanine', nameAr: 'فينيل ألانين', type: 'standard' },
  UUC: { aa: 'Phe', nameEn: 'Phenylalanine', nameAr: 'فينيل ألانين', type: 'standard' },
  UUA: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين', type: 'standard' },
  UUG: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين', type: 'standard' },
  UCU: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين', type: 'standard' },
  UCC: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين', type: 'standard' },
  UCA: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين', type: 'standard' },
  UCG: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين', type: 'standard' },
  UAU: { aa: 'Tyr', nameEn: 'Tyrosine', nameAr: 'تيروسين', type: 'standard' },
  UAC: { aa: 'Tyr', nameEn: 'Tyrosine', nameAr: 'تيروسين', type: 'standard' },
  UAA: { aa: 'STOP', nameEn: 'Stop Codon (Ochre)', nameAr: 'كودون وقف (أوكر)', type: 'stop' },
  UAG: { aa: 'STOP', nameEn: 'Stop Codon (Amber)', nameAr: 'كودون وقف (عنبر)', type: 'stop' },
  UGU: { aa: 'Cys', nameEn: 'Cysteine', nameAr: 'سيستئين', type: 'standard' },
  UGC: { aa: 'Cys', nameEn: 'Cysteine', nameAr: 'سيستئين', type: 'standard' },
  UGA: { aa: 'STOP', nameEn: 'Stop Codon (Opal)', nameAr: 'كودون وقف (أوبال)', type: 'stop' },
  UGG: { aa: 'Trp', nameEn: 'Tryptophan', nameAr: 'تريبتوفان', type: 'standard' },

  // C row
  CUU: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين', type: 'standard' },
  CUC: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين', type: 'standard' },
  CUA: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين', type: 'standard' },
  CUG: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين', type: 'standard' },
  CCU: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين', type: 'standard' },
  CCC: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين', type: 'standard' },
  CCA: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين', type: 'standard' },
  CCG: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين', type: 'standard' },
  CAU: { aa: 'His', nameEn: 'Histidine', nameAr: 'هيستيدين', type: 'standard' },
  CAC: { aa: 'His', nameEn: 'Histidine', nameAr: 'هيستيدين', type: 'standard' },
  CAA: { aa: 'Gln', nameEn: 'Glutamine', nameAr: 'جلوتامين', type: 'standard' },
  CAG: { aa: 'Gln', nameEn: 'Glutamine', nameAr: 'جلوتامين', type: 'standard' },
  CGU: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين', type: 'standard' },
  CGC: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين', type: 'standard' },
  CGA: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين', type: 'standard' },
  CGG: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين', type: 'standard' },

  // A row
  AUU: { aa: 'Ile', nameEn: 'Isoleucine', nameAr: 'أيزوليوسين', type: 'standard' },
  AUC: { aa: 'Ile', nameEn: 'Isoleucine', nameAr: 'أيزوليوسين', type: 'standard' },
  AUA: { aa: 'Ile', nameEn: 'Isoleucine', nameAr: 'أيزوليوسين', type: 'standard' },
  AUG: { aa: 'Met', nameEn: 'Methionine (Start)', nameAr: 'ميثيونين (كودون بدء)', type: 'start' },
  ACU: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين', type: 'standard' },
  ACC: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين', type: 'standard' },
  ACA: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين', type: 'standard' },
  ACG: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين', type: 'standard' },
  AAU: { aa: 'Asn', nameEn: 'Asparagine', nameAr: 'أسباراجين', type: 'standard' },
  AAC: { aa: 'Asn', nameEn: 'Asparagine', nameAr: 'أسباراجين', type: 'standard' },
  AAA: { aa: 'Lys', nameEn: 'Lysine', nameAr: 'ليسين', type: 'standard' },
  AAG: { aa: 'Lys', nameEn: 'Lysine', nameAr: 'ليسين', type: 'standard' },
  AGU: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين', type: 'standard' },
  AGC: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين', type: 'standard' },
  AGA: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين', type: 'standard' },
  AGG: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين', type: 'standard' },

  // G row
  GUU: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين', type: 'standard' },
  GUC: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين', type: 'standard' },
  GUA: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين', type: 'standard' },
  GUG: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين', type: 'standard' },
  GCU: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين', type: 'standard' },
  GCC: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين', type: 'standard' },
  GCA: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين', type: 'standard' },
  GCG: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين', type: 'standard' },
  GAU: { aa: 'Asp', nameEn: 'Aspartate', nameAr: 'حمض الأسبارتيك', type: 'standard' },
  GAC: { aa: 'Asp', nameEn: 'Aspartate', nameAr: 'حمض الأسبارتيك', type: 'standard' },
  GAA: { aa: 'Glu', nameEn: 'Glutamate', nameAr: 'حمض الجلوتاميك', type: 'standard' },
  GAG: { aa: 'Glu', nameEn: 'Glutamate', nameAr: 'حمض الجلوتاميك', type: 'standard' },
  GGU: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين', type: 'standard' },
  GGC: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين', type: 'standard' },
  GGA: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين', type: 'standard' },
  GGG: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين', type: 'standard' },
};

// Parameter Schema
export interface DnaLabParams {
  investigationModule: 'helix_structure' | 'replication_fork' | 'transcription_translation' | 'dna_atlas';
  dnaSequence: string;
  temperatureC: number;
  replicationProgress: number; // 0 to 100%
  forkEnzymesActive: boolean;
  selectedEnzyme: 'all' | 'helicase' | 'polymerase' | 'ligase' | 'repair';
  mutationPreset: 'none' | 'sickle_cell' | 'silent' | 'nonsense' | 'frameshift';
  dmmMode: 'concentration' | 'purity_ratio' | 'melting_tm' | 'bond_count';
}

// Atlas Hotspot Pin Interface
interface AtlasHotspot {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  xPct: number;
  yPct: number;
  descriptionEn: string;
  descriptionAr: string;
  curriculumDetailsEn: string;
  curriculumDetailsAr: string;
  examTipsEn: string;
  examTipsAr: string;
}

const DNA_HOTSPOTS: AtlasHotspot[] = [
  {
    id: 'antiparallel_ends',
    nameEn: 'Antiparallel Polarity (5\' & 3\' Ends)',
    nameAr: 'تعاكس اتجاه شريطي DNA (النهايات 5\' و 3\')',
    categoryEn: 'Strand Geometry',
    categoryAr: 'هندسة الشريطين',
    xPct: 32,
    yPct: 15,
    descriptionEn: 'One strand runs 5\' to 3\' (free phosphate group at C5\'), while the complementary strand runs 3\' to 5\' (free hydroxyl at C3\').',
    descriptionAr: 'يمتد أحد الشريطين في اتجاه 5\' إلى 3\' (مجموعة فوسفات حرة عند ذرة الكربون 5\')، والآخر في اتجاه 3\' إلى 5\' (مجموعة هيدروكسيل حرة عند ذرة الكربون 3\').',
    curriculumDetailsEn: 'This antiparallel orientation is essential for the nitrogenous bases to form stable hydrogen bonds in the interior of the double helix.',
    curriculumDetailsAr: 'هذا التعاكس شرط أساسي لتكوين روابط هيدروجينية سليمة بين القواعد النيتروجينية في قلب اللولب المزدوج.',
    examTipsEn: 'Exam focus: Why are DNA strands antiparallel? To allow hydrogen bonds to form properly between complementary inward-facing nitrogenous bases.',
    examTipsAr: 'سؤال وزاري متكرر: علل: شريطا DNA متعاكسان؟ حتى تتكون الروابط الهيدروجينية بشكل سليم بين القواعد النيتروجينية المتكاملة للداخل.',
  },
  {
    id: 'sugar_phosphate_backbone',
    nameEn: 'Sugar-Phosphate Backbone',
    nameAr: 'هيكل سكر-فوسفات المتناوب',
    categoryEn: 'Covalent Framework',
    categoryAr: 'الهيكل التساهمي',
    xPct: 22,
    yPct: 40,
    descriptionEn: 'Formed of alternating deoxyribose sugar and phosphate groups linked by strong covalent phosphodiester bonds.',
    descriptionAr: 'يتكون من تعاقب جزيئات سكر الديوكسي ريبوز ومجموعات الفوسفات المرتبطة بروابط تساهمية قوية.',
    curriculumDetailsEn: 'The backbone faces the aqueous exterior. The phosphate attached to C5\' of one deoxyribose links to C3\' of the adjacent sugar.',
    curriculumDetailsAr: 'يكون الهيكل للخارج محاطاً بالماء، وترتبط مجموعة الفوسفات بذرة الكربون 5\' لسكر ديوكسي ريبوز، وبالكربون 3\' للسكر التالي برابطة تساهمية.',
    examTipsEn: 'Exam focus: The sugar-phosphate backbone is non-symmetrical and carries a negative electrical charge due to ionized phosphate groups.',
    examTipsAr: 'نقطة هامة: هيكل سكر-فوسفات غير متماثل ويحمل شحنة سالبة بسبب تأين مجموعات الفوسفات السطحية.',
  },
  {
    id: 'base_pairing_hbonds',
    nameEn: 'Complementary Base Pairing & H-Bonds',
    nameAr: 'تكامل القواعد النيتروجينية والروابط الهيدروجينية',
    categoryEn: 'Core Energetics',
    categoryAr: 'طاقة الارتباط المركزية',
    xPct: 50,
    yPct: 48,
    descriptionEn: 'Purines (A, G - double ring) strictly pair with Pyrimidines (T, C - single ring). A=T (2 H-bonds) and G≡C (3 H-bonds).',
    descriptionAr: 'ترتبط القواعد البيورينية (A, G - حلقتان) بالقواعد البيريميدينية (T, C - حلقة واحدة). A=T برابطتين، و G≡C بثلاث روابط هيدروجينية.',
    curriculumDetailsEn: 'This pairing maintains a strictly uniform 2.0 nm duplex width along the entire length of the DNA molecule.',
    curriculumDetailsAr: 'يحافظ هذا التزاوج على ثبات قطر جزيء DNA منتظماً بمقدار 2.0 نانومتر على امتداد الجزيء بالكامل.',
    examTipsEn: 'GC-rich sequences require higher thermal energy (higher Tm) to denature because of 3 hydrogen bonds per pair.',
    examTipsAr: 'سؤال وزاري: علل: ارتفاع درجة انصهار قطع DNA الغنية بقواعد G-C؟ لاحتوائها على 3 روابط هيدروجينية تحتاج طاقة حرارية أكبر لكسرها.',
  },
  {
    id: 'major_minor_grooves',
    nameEn: 'Major & Minor Helical Grooves',
    nameAr: 'الميزاب الأكبر والميزاب الأصغر للولب',
    categoryEn: 'Topography',
    categoryAr: 'تضاريس اللولب',
    xPct: 68,
    yPct: 35,
    descriptionEn: 'The helical turn produces a wider Major Groove (2.2 nm) and a narrower Minor Groove (1.2 nm) for regulatory protein docking.',
    descriptionAr: 'ينتج عن التفاف اللولب ميزاب أكبر متسع (2.2 نانومتر) وميزاب أصغر ضيق (1.2 نانومتر) لارتباط البروتينات التنظيمية.',
    curriculumDetailsEn: 'Histones and transcription factors read base sequences directly through hydrogen bond donors and acceptors exposed in the major groove.',
    curriculumDetailsAr: 'تتعرف بروتينات الهستونات وعوامل النسخ على تتابع القواعد من خلال الروابط المكشوفة في الميزاب الأكبر دون فك اللولب.',
    examTipsEn: 'DNA packaging into nucleosomes reduces length by 10x; fully folded chromosomes condense DNA by 100,000x.',
    examTipsAr: 'تكثيف DNA: النيوكليوسومات تقصر طول DNA بمقدار 10 مرات، بينما التكثيف النهائي للكروموسوم يقصره بمقدار 100,000 مرة.',
  },
  {
    id: 'replication_fork_helicase',
    nameEn: 'Replication Origin & Helicase Cleavage',
    nameAr: 'منشأ التضاعف وعمل إنزيم اللولب',
    categoryEn: 'Replication Fork',
    categoryAr: 'شوكة التضاعف',
    xPct: 45,
    yPct: 68,
    descriptionEn: 'Helicase enzyme moves along the duplex, breaking hydrogen bonds between base pairs to separate the two template strands.',
    descriptionAr: 'يتحرك إنزيم اللولب على امتداد اللولب المزدوج كاسراً الروابط الهيدروجينية بين القواعد النيتروجينية لفصل شريطي القالب.',
    curriculumDetailsEn: 'Operates concurrently with single-stranded binding proteins to prevent premature re-annealing of separated strands.',
    curriculumDetailsAr: 'يعمل بالتوازي مع بروتينات الارتباط بالشريط المفرد لمنع إعادة التحام الشريطيْن المنفصلين أثناء التضاعف.',
    examTipsEn: 'Helicase does NOT synthesize DNA; it strictly cleaves hydrogen bonds, consuming ATP.',
    examTipsAr: 'نقطة امتحانية: إنزيم اللولب لا يبني نيوكليوتيدات؛ وظيفته تقتصر على فك اللولب وكسر الروابط الهيدروجينية فقط.',
  },
  {
    id: 'polymerase_directionality',
    nameEn: 'DNA Polymerase (5\' to 3\' Strict Synthesis)',
    nameAr: 'إنزيم بلمرة DNA (البناء الحصري في اتجاه 5\' إلى 3\')',
    categoryEn: 'Polymerization',
    categoryAr: 'إنزيمات البلمرة',
    xPct: 78,
    yPct: 60,
    descriptionEn: 'DNA Polymerase synthesizes new strands strictly in the 5\' to 3\' direction by adding deoxynucleoside triphosphates to 3\'-OH.',
    descriptionAr: 'يبني إنزيم بلمرة DNA الشريط الجديد حصرياً في اتجاه 5\' إلى 3\' عن طريق إضافة النيوكليوتيدات للنهاية 3\' (OH الحرة).',
    curriculumDetailsEn: 'On the 3\' to 5\' template, synthesis is continuous (leading strand). On the 5\' to 3\' template, synthesis is discontinuous in Okazaki fragments.',
    curriculumDetailsAr: 'على القالب 3\' إلى 5\' يكون البناء متصلاً (الشريط المتقدم)، بينما على القالب 5\' إلى 3\' يكون البناء متقطعاً في صورة قطع أوكازاكي.',
    examTipsEn: 'Why is lagging strand synthesis discontinuous? Because DNA Polymerase can only read templates in 3\'->5\' direction and synthesize in 5\'->3\'.',
    examTipsAr: 'سؤال امتحاني: علل: بناء أحد شريطي DNA الجديدين يكون في صورة قطع متقطعة؟ لأن إنزيم البلمرة يعمل فقط في اتجاه 5\' إلى 3\'.',
  },
  {
    id: 'ligase_phosphodiester',
    nameEn: 'DNA Ligase (Sealing Phosphodiester Nicks)',
    nameAr: 'إنزيم الربط (وصل قطع أوكازاكي بالروابط التساهمية)',
    categoryEn: 'Ligation & Repair',
    categoryAr: 'الربط والإصلاح',
    xPct: 60,
    yPct: 82,
    descriptionEn: 'DNA Ligase catalyzes covalent phosphodiester bonds to join adjacent Okazaki fragments on the lagging strand.',
    descriptionAr: 'يحفز إنزيم الربط تكوين الروابط التساهمية بين السكر والفوسفات لربط قطع أوكازاكي المتجاورة في الشريط المتأخر.',
    curriculumDetailsEn: 'Also plays a vital, non-stop role in DNA repair mechanisms alongside 20 distinct repair enzymes to fix daily environmental lesions.',
    curriculumDetailsAr: 'يلعب دوراً جوهرياً مستمراً في إصلاح عيوب DNA بالتعاون مع 20 إنزيم ربط وإصلاح لمعالجة التلف اليومي الناتج عن الحرارة والإشعاع.',
    examTipsEn: 'Without DNA ligase, replication of the lagging strand cannot be completed, leading to cell cycle arrest and death.',
    examTipsAr: 'ماذا يحدث عند غياب إنزيمات الربط؟ تفشل عملية تضاعف DNA في الشريط المتأخر، وتتراكم عيوب وتلفيات الحمض النووي مما يسبب موت الخلية.',
  },
  {
    id: 'transcription_promoter',
    nameEn: 'Promoter & RNA Polymerase Transcription',
    nameAr: 'المحفز ونسخ mRNA بإنزيم بلمرة RNA',
    categoryEn: 'Transcription',
    categoryAr: 'عملية النسخ',
    xPct: 30,
    yPct: 88,
    descriptionEn: 'RNA Polymerase binds to the Promoter (المحفز) on DNA template strand (3\' to 5\'), transcribing a complementary single-stranded mRNA (5\' to 3\').',
    descriptionAr: 'يرتبط إنزيم بلمرة RNA بتتابع المحفز على شريط DNA القالب (3\' إلى 5\')، لينسخ شريط mRNA مفرد في اتجاه 5\' إلى 3\'.',
    curriculumDetailsEn: 'Thymine (T) is replaced by Uracil (U). In eukaryotes, there are 3 distinct RNA polymerases (for mRNA, tRNA, rRNA), whereas bacteria possess only one.',
    curriculumDetailsAr: 'تستبدل قاعدة الثايمين (T) باليوراسيل (U). في حقيقيات النواة توجد 3 إنزيمات بلمرة مختلفة، بينما في أوليات النواة إنزيم بلمرة واحد فقط.',
    examTipsEn: 'The promoter is NOT transcribed into mRNA; it functions solely as a molecular orientation and docking signal for the polymerase.',
    examTipsAr: 'نقطة دقيقة: المحفز تتابع لا يُنسخ إلى mRNA، بل يوجه إنزيم بلمرة RNA للشريط الذي سيُنسخ واتجاه النسخ.',
  },
  {
    id: 'mrna_post_transcriptional',
    nameEn: 'Ribosomal Binding Site & Poly-A Tail',
    nameAr: 'موقع الارتباط بالريبوسوم وذيل عديد الأدينين',
    categoryEn: 'mRNA Processing',
    categoryAr: 'معالجة mRNA',
    xPct: 75,
    yPct: 20,
    descriptionEn: 'The 5\' end carries the Ribosomal Binding Site (موقع الارتباط بالريبوسوم), while the 3\' end carries a Poly-A Tail (~200 adenylic acid molecules).',
    descriptionAr: 'يحمل الطرف 5\' موقع الارتباط بالريبوسوم، بينما يحمل الطرف 3\' ذيل عديد الأدينين (حوالي 200 جزيء أدينوزين).',
    curriculumDetailsEn: 'The Poly-A tail does not represent genetic code; its sole physiological function is protecting mRNA from cytoplasmic enzymatic breakdown.',
    curriculumDetailsAr: 'ذيل عديد الأدينين لا يمثل شفرة وراثية، ووظيفته الوحيدة حماية mRNA من التحلل بفعل الإنزيمات في السيتوبلازم.',
    examTipsEn: 'Exam question: What happens if an mRNA molecule is transcribed without a Poly-A tail? It gets degraded rapidly by cytoplasmic nucleases before translation.',
    examTipsAr: 'سؤال وزاري: ماذا يحدث إذا نُسخ جزيء mRNA بدون ذيل عديد الأدينين؟ يتحلل سريعاً بواسطة إنزيمات السيتوبلازم قبل ترجمته لبروتين.',
  },
  {
    id: 'translation_ribosome_trna',
    nameEn: 'Ribosome P/A Sites & Peptidyl Transferase',
    nameAr: 'موقعا P و A بالريبوسوم وإنزيم ببتيديل ترانسفيريز',
    categoryEn: 'Translation',
    categoryAr: 'الترجمة وتخليق البروتين',
    xPct: 18,
    yPct: 62,
    descriptionEn: 'The large subunit contains two sites: P-site (Peptidyl) and A-site (Aminoacyl). Peptidyl transferase catalyzes peptide bond formation.',
    descriptionAr: 'تحتوي تحت الوحدة الكبيرة على موقعين: موقع ببتيديل (P) وموقع أمينوأسيل (A). يحفز إنزيم ببتيديل ترانسفيريز تكوين الرابطة الببتيدية.',
    curriculumDetailsEn: 'Translation starts at codon AUG (Methionine, anticodon UAC) and ends when a Release Factor (عامل الإطلاق) binds to stop codons (UAA, UAG, UGA).',
    curriculumDetailsAr: 'تبدأ الترجمة عند كودون البدء AUG (ميثيونين، مضاد كودون UAC) وتنتهي بارتباط عامل الإطلاق بأحد كودونات الوقف (UAA, UAG, UGA).',
    examTipsEn: 'Peptidyl transferase is a ribozyme (catalytic rRNA within the large ribosomal subunit), not a protein enzyme.',
    examTipsAr: 'معلومة ذهبية: إنزيم ببتيديل ترانسفيريز جزء من تحت وحدة الريبوسوم الكبيرة وليس بروتيناً منفصلاً، ويحفز تفاعلاً نازعاً للماء.',
  },
];

export const DNA_DEFAULT_PARAMS: DnaLabParams = {
  investigationModule: 'helix_structure',
  dnaSequence: 'ATGGCTTTCTAA',
  temperatureC: 37,
  replicationProgress: 50,
  forkEnzymesActive: true,
  selectedEnzyme: 'all',
  mutationPreset: 'none',
  dmmMode: 'concentration',
};

export const DNA_PARAM_SCHEMA: LabParameterSchema<DnaLabParams> = {
  investigationModule: {
    key: 'investigationModule',
    type: 'select',
    labelEn: 'Investigation Module',
    labelAr: 'الموديول العلمي النشط',
    defaultValue: 'helix_structure',
    category: 'primary',
    options: [
      { value: 'helix_structure', labelEn: '1. B-DNA Duplex & Chargaff Equivalence', labelAr: '١. اللولب المزدوج وقوانين شارجاف' },
      { value: 'replication_fork', labelEn: '2. Semi-Conservative Replication Fork', labelAr: '٢. شوكة التضاعف والإنزيمات الثلاثة' },
      { value: 'transcription_translation', labelEn: '3. Central Dogma: mRNA & Ribosome', labelAr: '٣. النسخ والترجمة وتخليق البروتين' },
      { value: 'dna_atlas', labelEn: '4. High-Resolution DNA Photographic Atlas', labelAr: '٤. الأطلس الجزيئي فائق الدقة' },
    ],
  },
  dnaSequence: {
    key: 'dnaSequence',
    type: 'select',
    labelEn: 'Template DNA Strand (5\' to 3\')',
    labelAr: 'تتابع شريط DNA القالب (5\' إلى 3\')',
    defaultValue: 'ATGGCTTTCTAA',
    category: 'primary',
    options: [
      { value: 'ATGGCTTTCTAA', labelEn: 'Standard Peptide (Met-Ala-Phe-Stop)', labelAr: 'ببتيد قياسي (بدء، ألانين، فينيل ألانين، وقف)' },
      { value: 'ATGGTGCACCTGACTCCTGAGGAG', labelEn: 'Normal Beta-Globin (HbA - Glu6)', labelAr: 'سلسلة بيتا جلوبين السليمة (HbA - حمض جلوتاميك)' },
      { value: 'ATGGTGCACCTGACTCCTGTGGAG', labelEn: 'Sickle Cell Beta-Globin (HbS - Val6)', labelAr: 'سلسلة أنيميا الخلايا المنجلية (HbS - فالين)' },
      { value: 'CGCGGCCGGCCGGCGC', labelEn: 'High GC-Rich Duplex (93% GC - High Tm)', labelAr: 'تتابع عالي الـ GC (٩٣٪ - انصهار حراري مرتفع)' },
      { value: 'ATATATATATATATAT', labelEn: 'High AT-Rich Duplex (100% AT - Low Tm)', labelAr: 'تتابع عالي الـ AT (١٠٠٪ - انصهار سريع)' },
    ],
    visibleIf: (p) => p.investigationModule !== 'dna_atlas',
  },
  temperatureC: {
    key: 'temperatureC',
    type: 'number',
    labelEn: 'Thermal Denaturation Temp (°C)',
    labelAr: 'درجة حرارة المسخ والانصهار (°م)',
    defaultValue: 37,
    min: 20,
    max: 100,
    step: 1,
    unit: '°C',
    category: 'secondary',
    visibleIf: (p) => p.investigationModule === 'helix_structure',
  },
  replicationProgress: {
    key: 'replicationProgress',
    type: 'number',
    labelEn: 'Replication Fork Unwinding (%)',
    labelAr: 'تقدم فك شوكة التضاعف (٪)',
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    category: 'secondary',
    visibleIf: (p) => p.investigationModule === 'replication_fork',
  },
  forkEnzymesActive: {
    key: 'forkEnzymesActive',
    type: 'boolean',
    labelEn: 'Active Enzymatic Synthesis',
    labelAr: 'تنشيط البلمرة الإنزيمية الحية',
    defaultValue: true,
    category: 'secondary',
    visibleIf: (p) => p.investigationModule === 'replication_fork',
  },
  selectedEnzyme: {
    key: 'selectedEnzyme',
    type: 'select',
    labelEn: 'Active Focused Enzyme',
    labelAr: 'الإنزيم المركز عليه',
    defaultValue: 'all',
    category: 'secondary',
    options: [
      { value: 'all', labelEn: 'All Enzymes Coordinated (Helicase + Pol + Ligase)', labelAr: 'جميع الإنزيمات متناسقة (اللولب + البلمرة + الربط)' },
      { value: 'helicase', labelEn: 'Helicase Focus (Unzipping H-Bonds)', labelAr: 'إنزيم اللولب (كسر الروابط الهيدروجينية)' },
      { value: 'polymerase', labelEn: 'DNA Polymerase (5\'->3\' Elongation)', labelAr: 'إنزيم البلمرة (البناء في اتجاه 5\' إلى 3\')' },
      { value: 'ligase', labelEn: 'DNA Ligase (Joining Okazaki Fragments)', labelAr: 'إنزيم الربط (وصل قطع أوكازاكي والتلفيات)' },
      { value: 'repair', labelEn: 'DNA Repair System (20 Repair Enzymes)', labelAr: 'منظومة إصلاح عيوب DNA (٢٠ إنزيم ربط)' },
    ],
    visibleIf: (p) => p.investigationModule === 'replication_fork',
  },
  mutationPreset: {
    key: 'mutationPreset',
    type: 'select',
    labelEn: 'Point Mutation Trigger',
    labelAr: 'محاكي الطفرات الجينية المستهدفة',
    defaultValue: 'none',
    category: 'secondary',
    options: [
      { value: 'none', labelEn: 'Wild-Type Sequence (No Mutations)', labelAr: 'تتابع سليم (طبيعي بدون طفرات)' },
      { value: 'sickle_cell', labelEn: 'Sickle Cell Anemia (GAG -> GUG, Glu -> Val)', labelAr: 'أنيميا الخلايا المنجلية (GAG -> GUG: جلوتاميك -> فالين)' },
      { value: 'silent', labelEn: 'Silent Mutation (UUA -> UUG: Leu -> Leu)', labelAr: 'طفرة صامتة (تغير كودون لنفس الحمض الأميني)' },
      { value: 'nonsense', labelEn: 'Nonsense Mutation (UAC -> UAA: Premature Stop)', labelAr: 'طفرة غير معبرة (كودون وقف مبكر يقطع الببتيد)' },
      { value: 'frameshift', labelEn: 'Frameshift Deletion (-1 nt: Shift All Codons)', labelAr: 'طفرة إزاحة حذف قاعدة (تغير إطار القراءة بالكامل)' },
    ],
    visibleIf: (p) => p.investigationModule === 'transcription_translation',
  },
  dmmMode: {
    key: 'dmmMode',
    type: 'select',
    labelEn: 'Digital Multimeter / Monitor Mode',
    labelAr: 'نمط جهاز الملتيميتر والقياس الحيوي',
    defaultValue: 'concentration',
    category: 'secondary',
    options: [
      { value: 'concentration', labelEn: 'dsDNA Concentration [ng/µL] via Beer-Lambert', labelAr: 'تركيز DNA [نانوجرام/ميكرولتر] بقانون بير-لامبرت' },
      { value: 'purity_ratio', labelEn: 'A260/A280 Optical Purity Ratio (Benchmark 1.80)', labelAr: 'نسبة النقاء الضوئي A260/A280 (المعيار ١.٨٠)' },
      { value: 'melting_tm', labelEn: 'Thermal Melting Temperature (Tm) [°C]', labelAr: 'درجة حرارة الانصهار الحراري (Tm) [°م]' },
      { value: 'bond_count', labelEn: 'Total Hydrogen Bonds & Purine/Pyrimidine %', labelAr: 'إجمالي الروابط الهيدروجينية ونسبة البيورينات' },
    ],
    visibleIf: (p) => p.investigationModule !== 'dna_atlas',
  },
};

export const DNA_PRESETS: LabPreset<DnaLabParams>[] = [
  {
    id: 'watson_crick_duplex',
    nameEn: '1. Canonical B-DNA & Chargaff Equivalence',
    nameAr: '١. نموذج واطسون وكريك واتزان شارجاف',
    descriptionEn: 'Explore the antiparallel double helix, 10 base pairs per turn, and exact purine/pyrimidine parity.',
    descriptionAr: 'استكشف اللولب المزدوج المتعاكس، ١٠ أزواج قواعد لكل لفة، وتطابق البيورينات والبيريميدينات.',
    params: {
      investigationModule: 'helix_structure',
      dnaSequence: 'ATGGCTTTCTAA',
      temperatureC: 37,
      replicationProgress: 0,
      forkEnzymesActive: false,
      selectedEnzyme: 'all',
      mutationPreset: 'none',
      dmmMode: 'bond_count',
    },
  },
  {
    id: 'replication_fork_active',
    nameEn: '2. Active Replication Fork & Okazaki Synthesis',
    nameAr: '٢. شوكة التضاعف النشطة وبناء قطع أوكازاكي',
    descriptionEn: 'Observe Helicase unzipping H-bonds, Polymerase 5\'->3\' synthesis, and Ligase covalent sealing.',
    descriptionAr: 'شاهد عمل إنزيم اللولب لفك الروابط، وبلمرة DNA في اتجاه 5\'->3\'، وربط قطع أوكازاكي.',
    params: {
      investigationModule: 'replication_fork',
      dnaSequence: 'ATGGTGCACCTGACTCCTGAGGAG',
      temperatureC: 37,
      replicationProgress: 65,
      forkEnzymesActive: true,
      selectedEnzyme: 'all',
      mutationPreset: 'none',
      dmmMode: 'concentration',
    },
  },
  {
    id: 'central_dogma_translation',
    nameEn: '3. Central Dogma: Full Transcription & Translation',
    nameAr: '٣. العقيدة المركزية: النسخ الكامل وترجمة الريبوسوم',
    descriptionEn: 'Transcribe mRNA from template DNA and translate codon triplets into functional peptide chains.',
    descriptionAr: 'انسخ mRNA من شريط DNA القالب وترجم ثلاثيات الكودونات إلى سلاسل ببتيدية.',
    params: {
      investigationModule: 'transcription_translation',
      dnaSequence: 'ATGGCTTTCTAA',
      temperatureC: 37,
      replicationProgress: 0,
      forkEnzymesActive: false,
      selectedEnzyme: 'all',
      mutationPreset: 'none',
      dmmMode: 'purity_ratio',
    },
  },
  {
    id: 'sickle_cell_mutation',
    nameEn: '4. Sickle Cell Anemia Point Mutation (GAG -> GUG)',
    nameAr: '٤. طفرة أنيميا الخلايا المنجلية (GAG -> GUG)',
    descriptionEn: 'Trace how a single nucleotide substitution replaces Glutamate with Valine, deforming hemoglobin.',
    descriptionAr: 'تتبع كيف يستبدل استبدال نيوكليوتيدة واحدة حمض الجلوتاميك بالفالين مشوهاً هيموجلوبين الدم.',
    params: {
      investigationModule: 'transcription_translation',
      dnaSequence: 'ATGGTGCACCTGACTCCTGTGGAG',
      temperatureC: 37,
      replicationProgress: 0,
      forkEnzymesActive: false,
      selectedEnzyme: 'all',
      mutationPreset: 'sickle_cell',
      dmmMode: 'bond_count',
    },
  },
  {
    id: 'thermal_denaturation',
    nameEn: '5. Thermal Denaturation & Hyperchromic Shift (Tm)',
    nameAr: '٥. الانصهار الحراري والانزياح فائق الصبغية (Tm)',
    descriptionEn: 'Heat duplex DNA to 85°C to witness complete hydrogen bond cleavage and UV hyperchromicity.',
    descriptionAr: 'سخّن جزيء DNA إلى ٨٥°م لملاحظة انفكاك الروابط الهيدروجينية وارتفاع الامتصاص الضوئي فائق الصبغية.',
    params: {
      investigationModule: 'helix_structure',
      dnaSequence: 'CGCGGCCGGCCGGCGC',
      temperatureC: 92,
      replicationProgress: 100,
      forkEnzymesActive: false,
      selectedEnzyme: 'all',
      mutationPreset: 'none',
      dmmMode: 'melting_tm',
    },
  },
];

export const DNA_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_meselson_stahl',
    titleEn: 'Meselson-Stahl Semi-Conservative Replication & Heavy Nitrogen',
    titleAr: 'تجربة ميسلسون وستال وإثبات التضاعف شبه المحافظ بالنيتروجين الثقيل',
    scenarioEn:
      'Bacteria grown in heavy nitrogen (¹⁵N) are transferred to normal light nitrogen (¹⁴N) medium for one generation of replication. What density distribution will appear in CsCl centrifugation?',
    scenarioAr:
      'بكتيريا زُرعت في وسط نيتروجين ثقيل (¹⁵N) نُقلت لوسط نيتروجين خفيف عادي (¹⁴N) لجيل تضاعف واحد. ما التوزيع الكثافي المتوقع في أنبوبة الطرد المركزي؟',
    questionEn: 'What percentage of hybrid ¹⁵N-¹⁴N intermediate density DNA will be formed in the 1st generation?',
    questionAr: 'ما هي نسبة جزيئات DNA الهجينة متوسطة الكثافة (¹⁵N-¹⁴N) المتكونة في الجيل الأول؟',
    optionsEn: [
      '100% Hybrid (¹⁵N-¹⁴N) intermediate density molecules',
      '50% fully heavy (¹⁵N-¹⁵N) and 50% fully light (¹⁴N-¹⁴N)',
      '25% heavy and 75% light molecules',
    ],
    optionsAr: [
      '١٠٠٪ جزيئات هجينة متوسطة الكثافة (¹⁵N-¹⁴N)',
      '٥٠٪ ثقيلة نقية و ٥٠٪ خفيفة نقية',
      '٢٥٪ ثقيلة و ٧٥٪ خفيفة',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Semi-conservative replication preserves each original parent strand as a template for synthesizing a complementary light strand. In Gen 1, 100% of duplexes consist of one ¹⁵N and one ¹⁴N strand (Hybrid density).',
    scientificExplanationAr:
      'التضاعف شبه المحافظ يحتفظ بكل شريط أصلي كقالب لبناء شريط جديد مكمل من الوسط الجديد. لذلك يحتوي كل جزيء في الجيل الأول على شريط ¹⁵N وشريط ¹⁴N (هجين بنسبة ١٠٠٪).',
  },
  {
    id: 'poe_double_strand_damage',
    titleEn: 'DNA Repair Enzyme Limits & Double-Strand Lesions',
    titleAr: 'حدود عمل إنزيمات الربط والإصلاح والتلف الثنائي المقابل',
    scenarioEn:
      'A human somatic cell experiences spontaneous loss of two nitrogenous bases at the exact same position across both complementary strands simultaneously.',
    scenarioAr:
      'تعرضت خلية جسدية لفقد قاعدتين نيتروجينيتين متقابلتين في نفس الموقع على كلا الشريطيْن في نفس الوقت بفعل إشعاع عالي الطاقة.',
    questionEn: 'Can the 20 DNA repair enzymes restore the original sequence without mutation?',
    questionAr: 'هل تستطيع إنزيمات الربط والإصلاح الـ 20 استعادة التتابع الأصلي بدقة وبدون طفرة؟',
    optionsEn: [
      'No, because neither strand has an intact template for repair, resulting in permanent mutation or deletion',
      'Yes, repair enzymes randomly guess and invariably select the correct complementary bases',
      'Yes, RNA polymerase synthesizes a temporary bridge to restore the bases',
    ],
    optionsAr: [
      'لا، لغياب القالب السليم على كلا الشريطيْن مما يؤدي حتماً إلى حدوث طفرة وراثية مستديمة',
      'نعم، تخمن الإنزيمات عشوائياً وتختار القواعد السليمة دائماً',
      'نعم، يقوم إنزيم بلمرة RNA ببناء جسر بديل مؤقت',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'DNA repair relies strictly on using the opposite intact strand as a reference template. When both opposing bases are lost at the same locus simultaneously, repair enzymes have no template to read, causing permanent chromosomal aberration or mutation.',
    scientificExplanationAr:
      'يعتمد عمل إنزيمات الربط والإصلاح بشكل قطعي على وجود شريط مقابل سليم كقالب إرشادي. فإذا حدث التلف في نفس الموقع على كلا الشريطيْن في نفس اللحظة، تعجز الإنزيمات عن التعرف على التتابع الأصلي فتحدث طفرة.',
  },
  {
    id: 'poe_sickle_cell',
    titleEn: 'Sickle Cell Anemia Hemoglobin Point Mutation Mechanism',
    titleAr: 'الآلية الجزيئية لطفرة استبدال الهيموجلوبين المنجلي',
    scenarioEn:
      'In the beta-globin gene, a single nucleotide mutation changes codon 6 from GAG to GUG on the mRNA strand.',
    scenarioAr:
      'في جين بيتا جلوبين، طفرة استبدال لقاعدة واحدة تحول الكودون السادس من GAG إلى GUG على شريط mRNA.',
    questionEn: 'What is the exact molecular and clinical consequence of this single base change?',
    questionAr: 'ما النتيجة الجزيئية والمرضية الدقيقة لهذا التغير في نيوكليوتيدة واحدة؟',
    optionsEn: [
      'Glutamate (hydrophilic) is replaced by Valine (hydrophobic), causing hemoglobin polymer crystallization and sickle-shaped RBCs',
      'A premature stop codon forms, completely halting beta-globin synthesis',
      'No change occurs because the genetic code is degenerate and both encode Glutamate',
    ],
    optionsAr: [
      'استبدال حمض الجلوتاميك (المحب للماء) بالفالين (الكاره للماء)، مما يسبب تبلور الهيموجلوبين وتحول كرات الدم لشكل هلالي منجلي',
      'تكون كودون وقف مبكر يوقف تخليق السلسلة بالكامل',
      'لا يحدث أي تغير لأن الشفرة الوراثية مترادفة وكلاهما يترجم لجلوتاميك',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'GAG encodes polar Glutamic acid, whereas GUG encodes non-polar Valine. At low oxygen tension, Valine sticks to adjacent hydrophobic patches, forming rigid polymer fibers that distort flexible red blood cells into fragile, sickle-shaped crescents.',
    scientificExplanationAr:
      'يشفر كودون GAG حمض الجلوتاميك القطبي، بينما يشفر GUG حمض الفالين غير القطبي. هذا التغير الطفيف يسبب التصاق جزيئات الهيموجلوبين ببعضها عند نقص الأكسجين مشكلة أليافاً صلبة تشوه كرات الدم الحمراء لشكل منجلي هش.',
  },
];

export const DNA_LAB_DEFINITION: LabDefinition<DnaLabParams, Record<string, any>> = {
  id: 'dna_replication_studio',
  subject: 'biology',
  chapterRef: 'Biology Chapter 5: Molecular Biology, DNA Structure, Replication & Protein Synthesis',
  titleEn: 'DNA Molecular Architecture, Replication Fork & Central Dogma Studio',
  titleAr: 'استوديو اللولب المزدوج، شوكة تضاعف DNA وتخليق البروتين',
  subtitleEn: 'Watson-Crick B-DNA, Helicase/Pol/Ligase Fork & Ribosome Translation',
  subtitleAr: 'نموذج واطسون-كريك، إنزيمات التضاعف (اللولب/البلمرة/الربط) وترجمة الريبوسوم',
  taglineEn: 'Interactive molecular genetics laboratory with UV hyperchromicity & point mutation engine',
  taglineAr: 'مختبر بيولوجيا جزيئية تفاعلي مع قياس فائق الصبغية ومحاكي الطفرات النقطية',
  objectives: [
    {
      id: 'obj1',
      textEn: 'Analyze Watson-Crick B-DNA geometry (2.0 nm diameter, 3.4 nm pitch, 10 bp/turn) and Chargaff base-pairing equilibrium.',
      textAr: 'دراسة أبعاد نموذج واطسون وكريك للولب المزدوج (قطر ٢ نانومتر، لفة ٣.٤ نانومتر، ١٠ أزواج/لفة) واتزان شارجاف.',
      bloomLevel: 'understand',
    },
    {
      id: 'obj2',
      textEn: 'Model semi-conservative replication fork kinetics: Helicase unzipping, Polymerase 5\'->3\' synthesis, and Ligase Okazaki fragment joining.',
      textAr: 'محاكاة ديناميكا شوكة التضاعف شبه المحافظ: فك روابط اللولب، بلمرة 5\'->3\'، وربط قطع أوكازاكي بإنزيم الربط.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj3',
      textEn: 'Demonstrate Central Dogma protein synthesis and trace the molecular pathology of Sickle Cell Anemia (GAG -> GUG, Glu -> Val).',
      textAr: 'تطبيق العقيدة المركزية لتخليق البروتين وتتبع الآلية الجزيئية لمرض أنيميا الخلايا المنجلية (GAG -> GUG).',
      bloomLevel: 'apply',
    },
  ],
  defaultParams: DNA_DEFAULT_PARAMS,
  paramSchema: DNA_PARAM_SCHEMA,
  presets: DNA_PRESETS,
  poePrompts: DNA_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Temperature',
    xLabelAr: 'درجة الحرارة',
    xUnit: '°C',
    yLabelEn: 'UV Absorbance (A260)',
    yLabelAr: 'الامتصاص الضوئي للأشعة فوق البنفسجية A260',
    yUnit: 'AU',
    recommendedPointsCount: 8,
  },
  supportedInstruments: ['multimeter', 'oscilloscope', 'stopwatch', 'scratchpad'],
};

export const DnaReplicationLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Active sub-tab state inside DnaLab
  const [activeAtlasPin, setActiveAtlasPin] = useState<AtlasHotspot>(DNA_HOTSPOTS[0]);

  const lab = useVirtualLab<DnaLabParams, Record<string, any>>({
    definition: DNA_LAB_DEFINITION,
  });

  const { params, updateParam } = lab;

  // Derive mutated DNA sequence based on preset
  const activeDnaSeq = useMemo(() => {
    let seq = params.dnaSequence.toUpperCase().replace(/[^ATGC]/g, '');
    if (params.mutationPreset === 'sickle_cell') {
      // replace GAG with GTG (mRNA GUG)
      seq = seq.replace('GAG', 'GTG');
    } else if (params.mutationPreset === 'silent') {
      // replace TTA with TTG (both encode Leu)
      seq = seq.replace('TTA', 'TTG');
    } else if (params.mutationPreset === 'nonsense') {
      // replace TAC (Tyr) with TAA (Stop)
      seq = seq.replace('TAC', 'TAA');
    } else if (params.mutationPreset === 'frameshift') {
      // delete the 4th nucleotide
      if (seq.length > 5) {
        seq = seq.slice(0, 3) + seq.slice(4);
      }
    }
    return seq.length > 0 ? seq : 'ATGGCTTTCTAA';
  }, [params.dnaSequence, params.mutationPreset]);

  // Complementary DNA Strand (3' to 5')
  const complementDnaSeq = useMemo(() => {
    return activeDnaSeq
      .split('')
      .map((b) => {
        if (b === 'A') return 'T';
        if (b === 'T') return 'A';
        if (b === 'G') return 'C';
        if (b === 'C') return 'G';
        return '';
      })
      .join('');
  }, [activeDnaSeq]);

  // mRNA Transcription (5' to 3') - replacing T with U
  const mrnaSeq = useMemo(() => {
    return activeDnaSeq
      .split('')
      .map((b) => (b === 'T' ? 'U' : b))
      .join('');
  }, [activeDnaSeq]);

  // Translation into Codons & Amino Acids
  const translatedPeptides = useMemo(() => {
    const codons: string[] = [];
    for (let i = 0; i < mrnaSeq.length; i += 3) {
      if (i + 3 <= mrnaSeq.length) {
        codons.push(mrnaSeq.substring(i, i + 3));
      }
    }
    return codons.map((codon) => {
      const entry = GENETIC_CODE_MATRIX[codon] || {
        aa: 'Xaa',
        nameEn: 'Unknown',
        nameAr: 'حمض غير معروف',
        type: 'standard',
      };
      return { codon, ...entry };
    });
  }, [mrnaSeq]);

  // Base Counts & Hydrogen Bonds
  const counts = useMemo(() => {
    const nA = (activeDnaSeq.match(/A/g) || []).length;
    const nT = (activeDnaSeq.match(/T/g) || []).length;
    const nG = (activeDnaSeq.match(/G/g) || []).length;
    const nC = (activeDnaSeq.match(/C/g) || []).length;
    const totalSingle = activeDnaSeq.length;
    const totalDuplex = totalSingle * 2;

    // On double strand: A pairs with T (2 bonds), G pairs with C (3 bonds)
    const countA_duplex = nA + nT; // total A in duplex
    const countT_duplex = nT + nA; // total T in duplex
    const countG_duplex = nG + nC; // total G in duplex
    const countC_duplex = nC + nG; // total C in duplex

    const totalHbonds = (countA_duplex / 2) * 2 + (countG_duplex / 2) * 3;
    const gcPercentage = totalSingle > 0 ? ((nG + nC) / totalSingle) * 100 : 50;

    // Thermal melting temperature Tm (°C) via Marmur-Doty formula:
    const tm = 69.3 + 0.41 * gcPercentage;

    return {
      nA,
      nT,
      nG,
      nC,
      totalSingle,
      totalDuplex,
      totalHbonds,
      gcPercentage,
      tm,
      countA_duplex,
      countT_duplex,
      countG_duplex,
      countC_duplex,
    };
  }, [activeDnaSeq]);

  // Thermal Unwinding Fraction & UV Absorbance
  const { fractionUnwound, uvAbsorbanceA260 } = useMemo(() => {
    // Sigmoidal denaturation curve centered at Tm
    const deltaT = params.temperatureC - counts.tm;
    const fraction = 1 / (1 + Math.exp(-deltaT / 3.8)); // 0 = native duplex, 1 = denatured single strands
    // Hyperchromic shift: native = 1.00 AU, fully denatured = 1.40 AU (+40% increase)
    const a260 = 1.0 + 0.4 * fraction;
    return { fractionUnwound: fraction, uvAbsorbanceA260: a260 };
  }, [params.temperatureC, counts.tm]);

  // Telemetry Metrics
  const telemetry = useMemo(
    () => [
      {
        id: 'dna_tm',
        labelEn: 'Melting Temp (Tm)',
        labelAr: 'درجة حرارة الانصهار (Tm)',
        value: counts.tm.toFixed(1),
        unit: '°C',
        status: params.temperatureC >= counts.tm ? ('alert' as const) : ('optimal' as const),
      },
      {
        id: 'dna_gc_ratio',
        labelEn: 'G-C Ratio',
        labelAr: 'نسبة الجوانين والسيتوزين',
        value: counts.gcPercentage.toFixed(1),
        unit: '%',
        status: 'normal' as const,
      },
      {
        id: 'dna_h_bonds',
        labelEn: 'H-Bonds Total',
        labelAr: 'إجمالي الروابط الهيدروجينية',
        value: counts.totalHbonds,
        unit: 'bonds',
        status: 'normal' as const,
      },
      {
        id: 'dna_uv_a260',
        labelEn: 'UV A260 Absorbance',
        labelAr: 'الامتصاص الضوئي A260',
        value: uvAbsorbanceA260.toFixed(3),
        unit: 'AU',
        status: fractionUnwound > 0.5 ? ('warning' as const) : ('optimal' as const),
      },
      {
        id: 'dna_diameter',
        labelEn: 'Duplex Diameter',
        labelAr: 'قطر جزيء DNA',
        value: '2.0',
        unit: 'nm',
        status: 'optimal' as const,
      },
    ],
    [counts, params.temperatureC, uvAbsorbanceA260, fractionUnwound]
  );

  // Multimeter DMM Reading Modes
  const multimeterReading: DMMReading = useMemo(() => {
    switch (params.dmmMode) {
      case 'concentration': {
        // Beer-Lambert dsDNA concentration: [dsDNA] = A260 * 50 ng/uL
        const concNgUl = uvAbsorbanceA260 * 50.0;
        return {
          mode: 'voltage_dc',
          value: concNgUl,
          displayString: `${concNgUl.toFixed(1)} ng/µL`,
          secondaryString: isArabic ? 'تركيز DNA بقانون بير-لامبرت' : 'dsDNA Concentration (A260 × 50)',
          unit: 'ng/µL',
          voltageDC: concNgUl,
          voltageAC: 0,
          currentDC: 0,
          resistance: 0,
          continuityBeep: false,
          isOverload: false,
        };
      }
      case 'purity_ratio': {
        // Pure dsDNA standard A260/A280 is ~1.80
        const ratio = 1.8;
        return {
          mode: 'resistance',
          value: ratio,
          displayString: `${ratio.toFixed(2)} A260/A280`,
          secondaryString: isArabic ? 'نقاء استخلاص عالي (خالٍ من الفينول)' : 'Pure dsDNA Benchmark (~1.80)',
          unit: 'ratio',
          voltageDC: 0,
          voltageAC: 0,
          currentDC: 0,
          resistance: ratio,
          continuityBeep: true,
          isOverload: false,
        };
      }
      case 'melting_tm': {
        return {
          mode: 'current_dc',
          value: counts.tm,
          displayString: `${counts.tm.toFixed(1)} °C`,
          secondaryString: isArabic
            ? `Tm = 69.3 + 0.41 × (${counts.gcPercentage.toFixed(0)}% GC)`
            : `Marmur-Doty Tm (${counts.gcPercentage.toFixed(0)}% GC content)`,
          unit: '°C',
          voltageDC: 0,
          voltageAC: 0,
          currentDC: counts.tm,
          resistance: 0,
          continuityBeep: false,
          isOverload: false,
        };
      }
      case 'bond_count':
      default: {
        return {
          mode: 'continuity',
          value: counts.totalHbonds,
          displayString: `${counts.totalHbonds} Bonds`,
          secondaryString: isArabic
            ? `A=T: ${counts.countA_duplex / 2} أزواج | G≡C: ${counts.countG_duplex / 2} أزواج`
            : `A=T: ${counts.countA_duplex / 2} pairs | G≡C: ${counts.countG_duplex / 2} pairs`,
          unit: 'bonds',
          voltageDC: 0,
          voltageAC: 0,
          currentDC: 0,
          resistance: counts.totalHbonds,
          continuityBeep: true,
          isOverload: false,
        };
      }
    }
  }, [params.dmmMode, uvAbsorbanceA260, counts, isArabic]);

  // Dual-Trace Oscilloscope
  const oscilloscopeCh1: WaveformSignal = useMemo(
    () => ({
      amplitude: uvAbsorbanceA260,
      frequency: 1.0,
      phaseDeg: 0,
      type: 'sine',
      dcOffset: uvAbsorbanceA260 - 1.0,
    }),
    [uvAbsorbanceA260]
  );

  const oscilloscopeCh2: WaveformSignal = useMemo(
    () => {
      // Polymerase speed peaks at optimal 37°C, drops when denatured
      const tempFactor = Math.max(0, 1 - Math.abs(params.temperatureC - 37) / 40);
      return {
        amplitude: Math.max(0.1, tempFactor * 1.5),
        frequency: 2.0,
        phaseDeg: 45,
        type: 'triangle',
        dcOffset: tempFactor,
      };
    },
    [params.temperatureC]
  );

  // Render Canvas Simulation based on active module
  const renderCanvas = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    _viewport?: LabViewportState,
    _dpr?: number,
    time?: number
  ) => {
    ctx.clearRect(0, 0, width, height);
    const t = (time ?? performance.now()) * 0.001;

    // Adaptive gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    if (isContrast) {
      bgGrad.addColorStop(0, '#000000');
      bgGrad.addColorStop(1, '#000000');
    } else if (isLight) {
      bgGrad.addColorStop(0, '#f8fafc');
      bgGrad.addColorStop(1, '#f1f5f9');
    } else {
      bgGrad.addColorStop(0, '#020617');
      bgGrad.addColorStop(1, '#0f172a');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle coordinate grid
    ctx.strokeStyle = isLight ? 'rgba(203, 213, 225, 0.4)' : '#1e293b33';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (params.investigationModule === 'helix_structure') {
      renderBnaDuplexCanvas(ctx, width, height, t);
    } else if (params.investigationModule === 'replication_fork') {
      renderReplicationForkCanvas(ctx, width, height, t);
    } else if (params.investigationModule === 'transcription_translation') {
      renderTranscriptionTranslationCanvas(ctx, width, height, t);
    } else {
      renderDnaAtlasCanvas(ctx, width, height, t);
    }
  };

  // 1. B-DNA Duplex Canvas Renderer with continuous 60 FPS 3D rotation
  const renderBnaDuplexCanvas = (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
    const centerY = height / 2;
    const numBases = activeDnaSeq.length;
    const stepX = Math.min(60, (width - 120) / Math.max(1, numBases - 1));
    const startX = (width - (numBases - 1) * stepX) / 2;

    const amplitude = 48 * (1 - fractionUnwound * 0.7); // strands separate & flatten when denatured
    const separation = fractionUnwound * 70; // physical strand separation distance

    // Draw Duplex Header
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(
      isArabic
        ? `نموذج واطسون وكريك للولب المزدوج (قطر الجزيء = ٢ نانومتر، اللفة = ١٠ أزواج)`
        : `Watson-Crick B-DNA Model (2.0 nm Diameter, 10 bp/Turn, 0.34 nm Rise)`,
      20,
      28
    );

    // Draw Antiparallel Strand Labels
    ctx.fillStyle = '#f43f5e';
    ctx.font = 'bold 11px monospace';
    ctx.fillText("5' [P]", startX - 45, centerY - amplitude - separation - 8);
    ctx.fillText("3' [OH]", startX + (numBases - 1) * stepX + 15, centerY + amplitude - separation - 8);

    ctx.fillStyle = '#38bdf8';
    ctx.fillText("3' [OH]", startX - 45, centerY + amplitude + separation + 16);
    ctx.fillText("5' [P]", startX + (numBases - 1) * stepX + 15, centerY - amplitude + separation + 16);

    const getBaseColor = (base: string) => {
      return base === 'A' ? '#e11d48' : base === 'T' ? '#d97706' : base === 'G' ? '#0284c7' : '#059669';
    };

    // Draw Base Pair Rungs & Hydrogen Bonds with 3D depth
    for (let i = 0; i < numBases; i++) {
      const x = startX + i * stepX;
      // 60 FPS continuous helical rotation
      const phase = (i / 10) * Math.PI * 2 + t * 1.5;
      const z = Math.sin(phase);
      const y1 = centerY - Math.cos(phase) * amplitude - separation;
      const y2 = centerY + Math.cos(phase) * amplitude + separation;

      const baseTop = activeDnaSeq[i];
      const baseBot = complementDnaSeq[i];

      // Dotted Hydrogen Bond Line
      if (fractionUnwound < 0.8) {
        ctx.beginPath();
        ctx.strokeStyle = fractionUnwound > 0.4 ? '#f59e0b88' : '#ffffff55';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.moveTo(x, y1);
        ctx.lineTo(x, y2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Subtle glowing center H-bond particle
        drawGlowingParticle(ctx, x, (y1 + y2) / 2, 2.8, '#fde047', 0.5);
      }

      // Top Base Node (Spherical 3D Shading)
      const isAT = baseTop === 'A' || baseTop === 'T';
      const nodeR1 = 13 + z * 2.2;
      const topGrad = ctx.createRadialGradient(x - nodeR1 * 0.35, y1 - nodeR1 * 0.35, nodeR1 * 0.1, x, y1, nodeR1);
      topGrad.addColorStop(0, '#ffffff');
      topGrad.addColorStop(0.3, getBaseColor(baseTop));
      topGrad.addColorStop(1, '#0f172a');

      ctx.beginPath();
      ctx.arc(x, y1, nodeR1, 0, Math.PI * 2);
      ctx.fillStyle = topGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(baseTop, x, y1);

      // Bottom Base Node (Spherical 3D Shading)
      const nodeR2 = 13 - z * 2.2;
      const botGrad = ctx.createRadialGradient(x - nodeR2 * 0.35, y2 - nodeR2 * 0.35, nodeR2 * 0.1, x, y2, nodeR2);
      botGrad.addColorStop(0, '#ffffff');
      botGrad.addColorStop(0.3, getBaseColor(baseBot));
      botGrad.addColorStop(1, '#0f172a');

      ctx.beginPath();
      ctx.arc(x, y2, nodeR2, 0, Math.PI * 2);
      ctx.fillStyle = botGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 11px sans-serif';
      ctx.fillText(baseBot, x, y2);

      // Hydrogen Bond count annotation in center
      if (fractionUnwound < 0.6 && Math.abs(y2 - y1) > 28) {
        ctx.fillStyle = '#cbd5e1';
        ctx.font = 'bold 9px monospace';
        ctx.fillText(isAT ? '==' : '≡≡≡', x, (y1 + y2) / 2);
      }
    }

    // Sugar-Phosphate Continuous Backbone Strands with 3D glow ribbon
    // Top Strand Ribbon (5' to 3')
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(244, 63, 94, 0.4)';
    ctx.lineWidth = 7;
    for (let i = 0; i < numBases; i++) {
      const x = startX + i * stepX;
      const phase = (i / 10) * Math.PI * 2 + t * 1.5;
      const y = centerY - Math.cos(phase) * amplitude - separation;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 3.5;
    for (let i = 0; i < numBases; i++) {
      const x = startX + i * stepX;
      const phase = (i / 10) * Math.PI * 2 + t * 1.5;
      const y = centerY - Math.cos(phase) * amplitude - separation;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Bottom Strand Ribbon (3' to 5')
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 7;
    for (let i = 0; i < numBases; i++) {
      const x = startX + i * stepX;
      const phase = (i / 10) * Math.PI * 2 + t * 1.5;
      const y = centerY + Math.cos(phase) * amplitude + separation;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3.5;
    for (let i = 0; i < numBases; i++) {
      const x = startX + i * stepX;
      const phase = (i / 10) * Math.PI * 2 + t * 1.5;
      const y = centerY + Math.cos(phase) * amplitude + separation;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Thermal State Alert on canvas
    if (params.temperatureC >= counts.tm) {
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(
        isArabic ? `⚠️ مسخ حراري كامل: انفكاك الروابط الهيدروجينية (T ≥ Tm)` : `⚠️ Full Thermal Denaturation: H-Bonds Cleaved (T ≥ Tm)`,
        width - 20,
        height - 20
      );
    } else {
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(
        isArabic ? `✓ لولب مزدوج سليم ومستقر هيدروجينياً` : `✓ Stable Double Helix Native Conformation`,
        width - 20,
        height - 20
      );
    }
  };

  // 2. Replication Fork Canvas Renderer with 60 FPS enzyme animations
  const renderReplicationForkCanvas = (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
    const forkApexX = width * 0.45;
    const centerY = height / 2;

    // Header
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(
      isArabic
        ? `شوكة التضاعف شبه المحافظ: إنزيم اللولب (فك) + بلمرة (بناء 5'->3') + ربط (أوكازاكي)`
        : `Semi-Conservative Replication Fork: Helicase + Polymerase (5'->3') + Ligase`,
      20,
      28
    );

    // 1. Unopened Parental Duplex (Left of Fork Apex)
    ctx.beginPath();
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 5;
    ctx.moveTo(40, centerY - 15);
    ctx.lineTo(forkApexX, centerY - 15);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 5;
    ctx.moveTo(40, centerY + 15);
    ctx.lineTo(forkApexX, centerY + 15);
    ctx.stroke();

    // Dotted H-bonds in unopened duplex
    for (let x = 60; x < forkApexX - 10; x += 22) {
      ctx.beginPath();
      ctx.strokeStyle = '#ffffff44';
      ctx.setLineDash([3, 3]);
      ctx.moveTo(x, centerY - 15);
      ctx.lineTo(x, centerY + 15);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 2. Top Diverging Template Strand (Leading Template 3' to 5')
    ctx.beginPath();
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 5;
    ctx.moveTo(forkApexX, centerY - 15);
    ctx.bezierCurveTo(forkApexX + 80, centerY - 25, forkApexX + 120, centerY - 90, width - 40, centerY - 110);
    ctx.stroke();

    // 3. Bottom Diverging Template Strand (Lagging Template 5' to 3')
    ctx.beginPath();
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 5;
    ctx.moveTo(forkApexX, centerY + 15);
    ctx.bezierCurveTo(forkApexX + 80, centerY + 25, forkApexX + 120, centerY + 90, width - 40, centerY + 110);
    ctx.stroke();

    // 4. Helicase Hexameric Ring at Apex with 60 FPS Subunit Rotation
    ctx.save();
    ctx.translate(forkApexX, centerY);
    ctx.rotate(t * 3);
    for (let lobe = 0; lobe < 6; lobe++) {
      const lAngle = (lobe * Math.PI * 2) / 6;
      const lx = Math.cos(lAngle) * 14;
      const ly = Math.sin(lAngle) * 14;
      ctx.beginPath();
      ctx.arc(lx, ly, 9, 0, Math.PI * 2);
      ctx.fillStyle = '#059669';
      ctx.fill();
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    ctx.restore();

    // Center hub of helicase
    ctx.beginPath();
    ctx.arc(forkApexX, centerY, 12, 0, Math.PI * 2);
    ctx.fillStyle = '#10b981';
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 8px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('HELICASE', forkApexX, centerY - 4);
    ctx.fillText(isArabic ? 'إنزيم اللولب' : 'Unzipping', forkApexX, centerY + 6);

    // Cleavage energy sparks at the apex
    for (let s = 0; s < 4; s++) {
      const sFrac = ((t * 2 + s * 0.25) % 1);
      const sx = forkApexX + sFrac * 25;
      const sy = centerY + Math.sin(s * 3 + t * 8) * 14;
      drawGlowingParticle(ctx, sx, sy, 2.5, '#34d399', 0.8 * (1 - sFrac));
    }

    // 5. Leading Daughter Strand (Continuous 5'->3' synthesis towards fork)
    const leadingProgress = (params.replicationProgress / 100) * (width - forkApexX - 80);
    const leadingEndX = forkApexX + 40 + leadingProgress;

    ctx.beginPath();
    ctx.strokeStyle = '#38bdf8'; // daughter strand
    ctx.lineWidth = 4;
    ctx.moveTo(width - 60, centerY - 95);
    ctx.lineTo(leadingEndX, centerY - 50);
    ctx.stroke();

    // Leading DNA Polymerase Molecule with catalytic breathing
    const polPulse = 18 + Math.sin(t * 8) * 2;
    drawGlowingParticle(ctx, leadingEndX, centerY - 50, polPulse * 1.3, 'rgba(245, 158, 11, 0.35)', 0.7);

    ctx.beginPath();
    ctx.arc(leadingEndX, centerY - 50, polPulse, 0, Math.PI * 2);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 8px sans-serif';
    ctx.fillText('POL III', leadingEndX, centerY - 50);

    // Incoming dNTP precursors floating in at 60 FPS
    for (let d = 0; d < 3; d++) {
      const dFrac = ((t * 1.5 + d * 0.33) % 1);
      const dx = leadingEndX + 35 - dFrac * 25;
      const dy = centerY - 65 + Math.sin(d * 4 + t * 5) * 8;
      drawGlowingParticle(ctx, dx, dy, 3, '#38bdf8', 0.8);
    }

    // 6. Lagging Daughter Strand (Okazaki Fragments synthesized away from fork)
    // Fragment 1
    ctx.beginPath();
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 4;
    ctx.moveTo(forkApexX + 70, centerY + 45);
    ctx.lineTo(forkApexX + 150, centerY + 70);
    ctx.stroke();

    // Fragment 2
    ctx.beginPath();
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 4;
    ctx.moveTo(forkApexX + 170, centerY + 76);
    ctx.lineTo(forkApexX + 260, centerY + 98);
    ctx.stroke();

    // DNA Ligase sealing the nick between fragments with ATP glow
    const ligaseX = forkApexX + 160;
    const ligaseY = centerY + 73;
    const ligaseGlow = 14 + Math.sin(t * 6) * 3;
    drawGlowingParticle(ctx, ligaseX, ligaseY, ligaseGlow * 1.4, 'rgba(139, 92, 246, 0.45)', 0.7);

    ctx.beginPath();
    ctx.arc(ligaseX, ligaseY, 14, 0, Math.PI * 2);
    ctx.fillStyle = '#8b5cf6'; // purple ligase
    ctx.fill();
    ctx.strokeStyle = '#a78bfa';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 7px sans-serif';
    ctx.fillText('LIGASE', ligaseX, ligaseY - 2);
    ctx.fillText(isArabic ? 'ربط' : 'Nick', ligaseX, ligaseY + 6);

    // Labels & Direction Arrows
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(isArabic ? '← الشريط المتقدم (بناء متصل في اتجاه 5\' إلى 3\')' : 'Leading Strand (Continuous 5\'->3\') →', width - 20, centerY - 70);

    ctx.fillStyle = '#f43f5e';
    ctx.fillText(isArabic ? 'قطع أوكازاكي ← (بناء متقطع في اتجاه 5\' إلى 3\')' : '← Lagging Strand (Okazaki Fragments 5\'->3\')', width - 20, centerY + 70);
  };

  // 3. Transcription & Translation Canvas Renderer with continuous 60 FPS animation
  const renderTranscriptionTranslationCanvas = (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
    const centerY = height / 2;

    // Header
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(
      isArabic
        ? `العقيدة المركزية: نسخ mRNA في النواة وترجمة الريبوسوم لسلسلة عديد الببتيد`
        : `Central Dogma: mRNA Transcription & Ribosomal Polypeptide Biosynthesis`,
      20,
      28
    );

    // Draw mRNA Ribbon passing through Ribosome
    const mrnaY = centerY - 10;
    ctx.beginPath();
    ctx.fillStyle = '#1e1b4b';
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 2;
    ctx.roundRect(40, mrnaY - 14, width - 80, 28, 8);
    ctx.fill();
    ctx.stroke();

    // Codon blocks along mRNA
    const codonList = [];
    for (let i = 0; i < mrnaSeq.length; i += 3) {
      if (i + 3 <= mrnaSeq.length) {
        codonList.push(mrnaSeq.substring(i, i + 3));
      }
    }

    const startCodonX = 120;
    const codonStepX = 64;
    codonList.forEach((c, idx) => {
      const cx = startCodonX + idx * codonStepX;
      if (cx + 50 < width) {
        ctx.fillStyle = c === 'AUG' ? '#059669' : c === 'UAA' || c === 'UAG' || c === 'UGA' ? '#dc2626' : '#312e81';
        ctx.fillRect(cx - 24, mrnaY - 10, 48, 20);
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 1;
        ctx.strokeRect(cx - 24, mrnaY - 10, 48, 20);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(c, cx, mrnaY);
      }
    });

    // Ribosome Complex positioned over active codon with subtle 60 FPS mechanical pulsation
    const activeCodonIdx = Math.min(1, codonList.length - 1);
    const riboX = startCodonX + activeCodonIdx * codonStepX;
    const riboBreathing = Math.sin(t * 3.5) * 1.5;

    // Small Ribosomal Subunit (Bottom)
    ctx.beginPath();
    ctx.ellipse(riboX, mrnaY + 38 + riboBreathing, 70, 26, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#0f766e';
    ctx.fill();
    ctx.strokeStyle = '#2dd4bf';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px sans-serif';
    ctx.fillText(isArabic ? 'تحت وحدة الريبوسوم الصغيرة' : 'Small 40S Subunit', riboX, mrnaY + 40 + riboBreathing);

    // Large Ribosomal Subunit (Top) with P-site and A-site
    ctx.beginPath();
    ctx.ellipse(riboX, mrnaY - 55 - riboBreathing, 95, 45, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#0369a1';
    ctx.fill();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.stroke();

    // P-site Cavity (Peptidyl site)
    ctx.fillStyle = '#0c4a6e';
    ctx.fillRect(riboX - 45, mrnaY - 80, 40, 45);
    ctx.strokeStyle = '#7dd3fc';
    ctx.strokeRect(riboX - 45, mrnaY - 80, 40, 45);
    ctx.fillStyle = '#e0f2fe';
    ctx.font = 'black 10px sans-serif';
    ctx.fillText('P-Site', riboX - 25, mrnaY - 60);

    // A-site Cavity (Aminoacyl site)
    ctx.fillStyle = '#0c4a6e';
    ctx.fillRect(riboX + 5, mrnaY - 80, 40, 45);
    ctx.strokeStyle = '#7dd3fc';
    ctx.strokeRect(riboX + 5, mrnaY - 80, 40, 45);
    ctx.fillStyle = '#e0f2fe';
    ctx.font = 'black 10px sans-serif';
    ctx.fillText('A-Site', riboX + 25, mrnaY - 60);

    // Emerging Polypeptide Chain with 60 FPS undulation
    let chainY = mrnaY - 105;
    translatedPeptides.forEach((pep, i) => {
      const py = chainY - i * 22;
      const px = riboX - 25 + Math.sin(t * 3 + i * 0.8) * 4;
      if (py > 45) {
        ctx.beginPath();
        ctx.arc(px, py, 9, 0, Math.PI * 2);
        ctx.fillStyle = pep.aa === 'Met' ? '#10b981' : pep.aa === 'STOP' ? '#ef4444' : '#6366f1';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 7px sans-serif';
        ctx.fillText(pep.aa, px, py);
      }
    });

    // Peptidyl Transferase enzyme catalytic center
    drawGlowingParticle(ctx, riboX, mrnaY - 26, 8, 'rgba(245, 158, 11, 0.7)', 0.6);
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      isArabic ? '⚡ تفاعل نازع للماء (إنزيم ببتيديل ترانسفيريز)' : '⚡ Peptidyl Transferase (Dehydration Synthesis)',
      riboX,
      mrnaY - 26
    );
  };

  // 4. DNA Photographic Atlas Canvas Overlay
  const renderDnaAtlasCanvas = (ctx: CanvasRenderingContext2D, _width: number, _height: number, _t: number) => {
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(
      isArabic
        ? `أطلس اللولب المزدوج عالي الدقة: اضغط على النقاط التفاعلية لفحص التراكيب`
        : `High-Resolution Double Helix Photographic Atlas: Click pins to inspect`,
      20,
      28
    );
  };

  return (
    <VirtualLabShell
      definition={DNA_LAB_DEFINITION}
      lang={lang}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeCh1}
      oscilloscopeCh2={oscilloscopeCh2}
      currentXValue={params.temperatureC}
      currentYValue={uvAbsorbanceA260}
      onResetSimulation={lab.resetParams}
    >
      {/* MODULE 1: B-DNA DUPLEX & CHARGAFF EQUILIBRIUM */}
      {params.investigationModule === 'helix_structure' && (
        <div className="space-y-6">
          <CanvasSimulationViewport
            id="bna-duplex-viewport"
            minHeight={380}
            lang={lang}
            theme={theme}
            animated={true}
            onRender={renderCanvas}
          />

          {/* Chargaff's Equivalence Matrix & Hydrogen Bonding Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Column: Chargaff Equivalence Verification */}
            <div
              className={`lg:col-span-7 p-5 rounded-2xl border space-y-4 ${
                isContrast
                  ? 'bg-black border-rose-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-rose-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Info className="w-4 h-4" />
                  <span>{isArabic ? 'قوانين شارجاف للاتزان الكيميائي (Chargaff\'s Rules):' : 'Chargaff Chemical Parity Conservation:'}</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  (A+G)/(T+C) = 1.00
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-500/30 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Adenine (A)</span>
                  <p className="text-lg font-black text-rose-400 mt-0.5">
                    {isArabic ? toHindiDigits(counts.countA_duplex / 2) : counts.countA_duplex / 2}
                  </p>
                  <span className="text-[9px] text-slate-500">Purine (حلقتان)</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-500/30 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Thymine (T)</span>
                  <p className="text-lg font-black text-amber-400 mt-0.5">
                    {isArabic ? toHindiDigits(counts.countA_duplex / 2) : counts.countA_duplex / 2}
                  </p>
                  <span className="text-[9px] text-slate-500">Pyrimidine (حلقة)</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Guanine (G)</span>
                  <p className="text-lg font-black text-cyan-400 mt-0.5">
                    {isArabic ? toHindiDigits(counts.countG_duplex / 2) : counts.countG_duplex / 2}
                  </p>
                  <span className="text-[9px] text-slate-500">Purine (حلقتان)</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Cytosine (C)</span>
                  <p className="text-lg font-black text-emerald-400 mt-0.5">
                    {isArabic ? toHindiDigits(counts.countG_duplex / 2) : counts.countG_duplex / 2}
                  </p>
                  <span className="text-[9px] text-slate-500">Pyrimidine (حلقة)</span>
                </div>
              </div>

              {/* Ministerial Exam Principles */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-1.5 font-bold text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'المعادلات الوزارية القطعية لحسابات DNA:' : 'Core Egyptian Curriculum Formulas:'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                  <p>• %A = %T &amp; %G = %C</p>
                  <p>• %A + %G = %T + %C = 50%</p>
                  <p>• Total H-Bonds = 2(AT) + 3(GC)</p>
                  <p>• Duplex Width = 2.0 nm (Fixed)</p>
                </div>
              </div>
            </div>

            {/* Right Column: Thermal Denaturation & Hyperchromicity */}
            <div
              className={`lg:col-span-5 p-5 rounded-2xl border space-y-4 ${
                isContrast
                  ? 'bg-black border-amber-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-400 flex items-center gap-1.5 uppercase">
                  <Flame className="w-4 h-4" />
                  <span>{isArabic ? 'الانصهار الحراري والانزياح فائق الصبغية:' : 'Thermal Denaturation & Hyperchromicity:'}</span>
                </span>
                <span className="text-[10px] font-mono text-cyan-400">
                  Tm = {counts.tm.toFixed(1)} °C
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-bold">{isArabic ? 'درجة حرارة العينة الحالية:' : 'Current Temperature:'}</span>
                  <span className="font-mono font-black text-white text-sm">{params.temperatureC} °C</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={100}
                  value={params.temperatureC}
                  onChange={(e) => updateParam('temperatureC', Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                  <span className="text-slate-400">{isArabic ? 'حالة اللولب المزدوج:' : 'Duplex State:'}</span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded-md text-[10px] uppercase ${
                      fractionUnwound > 0.8
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                        : fractionUnwound > 0.2
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    }`}
                  >
                    {fractionUnwound > 0.8
                      ? isArabic
                        ? 'أشرطة مفردة متباعدة (انصهار كامل)'
                        : 'Denatured Single Strands'
                      : fractionUnwound > 0.2
                      ? isArabic
                        ? 'انفكاك جزئي للروابط'
                        : 'Partially Melted'
                      : isArabic
                      ? 'لولب مزدوج أصيل سليم'
                      : 'Native Double Helix'}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isArabic
                  ? 'عند تسخين DNA إلى ١٠٠°م، تنكسر جميع الروابط الهيدروجينية الضعيفة وينفصل الشريطان إلى شريطين مفردين، مع زيادة امتصاص الأشعة فوق البنفسجية A260 بنسبة تصل إلى ٤٠٪ (تأثير فائق الصبغية).'
                  : 'Heating DNA to 100°C cleaves all hydrogen bonds without breaking covalent phosphodiester bonds, yielding single strands with a 40% increase in UV A260 absorbance (hyperchromic effect).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 2: SEMI-CONSERVATIVE REPLICATION FORK */}
      {params.investigationModule === 'replication_fork' && (
        <div className="space-y-6">
          <CanvasSimulationViewport
            id="replication-fork-viewport"
            minHeight={380}
            lang={lang}
            theme={theme}
            animated={true}
            onRender={renderCanvas}
          />

          {/* The 3 Canonical Replication Enzymes in Egyptian Curriculum */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Helicase */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                params.selectedEnzyme === 'helicase' || params.selectedEnzyme === 'all'
                  ? 'bg-emerald-950/30 border-emerald-500/60 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-400 flex items-center gap-1.5 uppercase">
                  <Scissors className="w-4 h-4" />
                  <span>{isArabic ? '١. إنزيم اللولب' : '1. Helicase'}</span>
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300">
                  {isArabic ? 'فك الروابط' : 'Unzipping'}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mt-1.5">
                {isArabic ? 'كسر الروابط الهيدروجينية' : 'Cleaves Hydrogen Bonds'}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {isArabic
                  ? 'يتحرك على امتداد اللولب المزدوج فاصلاً الشريطيْن عن بعضهما عن طريق كسر الروابط الهيدروجينية الضعيفة لتهيئة قوالب البناء.'
                  : 'Separates parental duplex strands by breaking inter-base hydrogen bonds to expose single-stranded templates.'}
              </p>
            </div>

            {/* 2. DNA Polymerase */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                params.selectedEnzyme === 'polymerase' || params.selectedEnzyme === 'all'
                  ? 'bg-amber-950/30 border-amber-500/60 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-400 flex items-center gap-1.5 uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>{isArabic ? '٢. إنزيم بلمرة DNA' : '2. DNA Polymerase'}</span>
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300">
                  5' → 3'
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mt-1.5">
                {isArabic ? 'البناء الحصري في اتجاه 5\' إلى 3\'' : '5\' to 3\' Strict Synthesis'}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {isArabic
                  ? 'يضيف نيوكليوتيدات جديدة متكاملة للنهاية 3\' للشريط النامي؛ متصل على القالب 3\'->5\' ومتقطع في صورة قطع أوكازاكي على القالب 5\'->3\'.'
                  : 'Adds deoxynucleotides strictly to the 3\'-OH end; continuous on leading strand, discontinuous in Okazaki fragments on lagging strand.'}
              </p>
            </div>

            {/* 3. DNA Ligase */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                params.selectedEnzyme === 'ligase' || params.selectedEnzyme === 'all'
                  ? 'bg-purple-950/30 border-purple-500/60 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-purple-400 flex items-center gap-1.5 uppercase">
                  <Zap className="w-4 h-4" />
                  <span>{isArabic ? '٣. إنزيمات الربط' : '3. DNA Ligase'}</span>
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300">
                  {isArabic ? 'وصل + إصلاح' : 'Sealing & Repair'}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mt-1.5">
                {isArabic ? 'وصل القطع وإصلاح عيوب DNA' : 'Seals Nicks & Repairs Lesions'}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {isArabic
                  ? 'تصل قطع أوكازاكي بروابط تساهمية قوية، وتعمل منظومة من ٢٠ إنزيم ربط على إصلاح آلاف القواعد التالفة يومياً استناداً للشريط المقابل.'
                  : 'Catalyzes phosphodiester bonds to join Okazaki fragments and partners with 20 repair enzymes to correct thousands of daily spontaneous lesions.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 3: CENTRAL DOGMA: TRANSCRIPTION & TRANSLATION */}
      {params.investigationModule === 'transcription_translation' && (
        <div className="space-y-6">
          <CanvasSimulationViewport
            id="central-dogma-viewport"
            minHeight={360}
            lang={lang}
            theme={theme}
            animated={true}
            onRender={renderCanvas}
          />

          {/* Real-time Central Dogma Pipeline Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left: Interactive Sequence Input & mRNA Transcription */}
            <div
              className={`lg:col-span-7 p-5 rounded-2xl border space-y-4 ${
                isContrast
                  ? 'bg-black border-rose-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-cyan-400 flex items-center gap-1.5 uppercase">
                  <Dna className="w-4 h-4" />
                  <span>{isArabic ? 'شريط DNA القالب ونسخ mRNA:' : 'DNA Template & mRNA Transcription:'}</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {activeDnaSeq.length} {isArabic ? 'نيوكليوتيدة' : 'Nucleotides'}
                </span>
              </div>

              {/* DNA Template Display */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-rose-400 font-bold">
                  <span>DNA Template (3' to 5'):</span>
                  <span>Promoter Docked</span>
                </div>
                <div className="font-bold text-cyan-300 tracking-widest overflow-x-auto py-1">
                  3'-{complementDnaSeq}-5'
                </div>
              </div>

              {/* Transcribed mRNA Display */}
              <div className="p-3 rounded-xl bg-slate-950 border border-indigo-900/50 font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-indigo-400 font-bold">
                  <span>Transcribed mRNA (5' to 3'):</span>
                  <span>Uracil (U) for Thymine (T)</span>
                </div>
                <div className="font-bold text-indigo-200 tracking-widest overflow-x-auto py-1">
                  5'-{mrnaSeq}-3'
                </div>
              </div>

              {/* Translated Peptide Chain */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-900/50 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'سلسلة عديد الببتيد الناتجة من الترجمة:' : 'Translated Polypeptide Chain:'}</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {translatedPeptides.length} {isArabic ? 'أحماض أمينية' : 'Residues'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {translatedPeptides.map((pep, idx) => (
                    <div
                      key={`pep-${idx}`}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-mono font-bold border ${
                        pep.aa === 'STOP'
                          ? 'bg-red-500/20 text-red-300 border-red-500/50'
                          : pep.aa === 'Met'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                          : 'bg-indigo-500/20 text-indigo-200 border-indigo-500/50'
                      }`}
                    >
                      <span>{pep.codon}</span>
                      <span className="font-black">→ {pep.aa}</span>
                      <span className="text-[9px] opacity-70">({isArabic ? pep.nameAr : pep.nameEn})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Point Mutation & Clinical Pathology */}
            <div
              className={`lg:col-span-5 p-5 rounded-2xl border space-y-4 ${
                isContrast
                  ? 'bg-black border-yellow-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-400 flex items-center gap-1.5 uppercase">
                  <ShieldAlert className="w-4 h-4" />
                  <span>{isArabic ? 'تحليل الطفرات والأمراض الوراثية:' : 'Mutation Analysis & Clinical Phenotype:'}</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {params.mutationPreset.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">
                  {isArabic ? 'اختر نمط الطفرة الجينية:' : 'Select Mutation Mode:'}
                </label>
                <select
                  value={params.mutationPreset}
                  onChange={(e) => updateParam('mutationPreset', e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white focus:ring-1 focus:ring-rose-500 cursor-pointer"
                >
                  <option value="none">{isArabic ? 'تتابع سليم (طبيعي بدون طفرات)' : 'Wild-Type Sequence (Normal)'}</option>
                  <option value="sickle_cell">{isArabic ? 'أنيميا الخلايا المنجلية (GAG -> GUG, Glu -> Val)' : 'Sickle Cell Anemia (GAG -> GUG, Glu -> Val)'}</option>
                  <option value="silent">{isArabic ? 'طفرة صامتة (تغير كودون لنفس الحمض الأميني)' : 'Silent Mutation (UUA -> UUG: Leu -> Leu)'}</option>
                  <option value="nonsense">{isArabic ? 'طفرة غير معبرة (كودون وقف مبكر يقطع السلسلة)' : 'Nonsense Mutation (UAC -> UAA: Premature Stop)'}</option>
                  <option value="frameshift">{isArabic ? 'طفرة إزاحة (حذف قاعدة يغير كل الكودونات التالية)' : 'Frameshift Deletion (-1 nt)'}</option>
                </select>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                {params.mutationPreset === 'sickle_cell' && (
                  <p className="text-red-300 font-medium">
                    {isArabic
                      ? '⚠️ طفرة استبدال قاعدة نيتروجينية واحدة (أدينين بثايمين) أدت لتحول كودون GAG إلى GUG، مما استبدل حمض الجلوتاميك المحب للماء بحمض الفالين الكاره للماء في السلسلة بيتا، مسبباً تبلور الهيموجلوبين وتحول كرات الدم لشكل منجلي يتكسر بسهولة ويسد الشعيرات.'
                      : '⚠️ Single-nucleotide substitution of Thymine for Adenine converts codon GAG to GUG, replacing polar Glutamate with nonpolar Valine at position 6. Deoxygenated HbS crystallizes into rigid rods, distorting erythrocytes into fragile sickle shapes.'}
                  </p>
                )}
                {params.mutationPreset === 'silent' && (
                  <p className="text-emerald-300 font-medium">
                    {isArabic
                      ? '✓ طفرة صامتة: تغيرت القاعدة الثالثة في الكودون، ولكن نظراً لأن الشفرة الوراثية مترادفة، تم استدعاء نفس الحمض الأميني بالضبط (ليوسين)، فلم يتغير تركيب البروتين ولا وظيفته.'
                      : '✓ Silent mutation: Despite a nucleotide change, the wobble position still codes for Leucine due to codon degeneracy. Polypeptide structure and enzyme kinetics remain 100% unaffected.'}
                  </p>
                )}
                {params.mutationPreset === 'nonsense' && (
                  <p className="text-amber-300 font-medium">
                    {isArabic
                      ? '⚠️ طفرة غير معبرة: تكون كودون وقف مبكر (UAA) يرتبط به عامل الإطلاق فوراً، مما أدى لإنهاء مبكر للترجمة وإنتاج بروتين مقطوع فاقد للوظيفة الحيوية.'
                      : '⚠️ Nonsense mutation: Generates a premature stop codon (UAA), prompting immediate release factor binding and resulting in a truncated, non-functional protein.'}
                  </p>
                )}
                {params.mutationPreset === 'frameshift' && (
                  <p className="text-purple-300 font-medium">
                    {isArabic
                      ? '⚠️ طفرة إزاحة: حذف نيوكليوتيدة واحدة غيّر إطار القراءة بالكامل لجميع الكودونات التالية، مما أدى لتغير تام في تسلسل الأحماض الأمينية.'
                      : '⚠️ Frameshift deletion: Removing a single base shifts the triplet reading frame downstream, scrambling all subsequent codons and yielding an entirely altered peptide sequence.'}
                  </p>
                )}
                {params.mutationPreset === 'none' && (
                  <p className="text-slate-400">
                    {isArabic
                      ? 'تتابع بروتيني قياسي سليم يخضع للعقيدة المركزية بدقة مع مراعاة كودون البدء AUG وكودونات الوقف الثلاثة (UAA, UAG, UGA).'
                      : 'Canonical wild-type sequence translated faithfully under the Central Dogma with intact initiator and termination codons.'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 4: HIGH-RESOLUTION DNA PHOTOGRAPHIC ATLAS */}
      {params.investigationModule === 'dna_atlas' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: High-Res Interactive Visual Atlas */}
            <div className="lg:col-span-6 space-y-3">
              <div
                className={`relative rounded-2xl overflow-hidden border shadow-xl ${
                  isContrast ? 'border-rose-400' : 'border-slate-800'
                }`}
              >
                <img
                  src={dnaImg}
                  alt="High-Resolution DNA Double Helix 3D Microscopy"
                  className="w-full h-80 sm:h-96 object-cover"
                />

                {/* Interactive Hotspot Pins */}
                {DNA_HOTSPOTS.map((pin) => {
                  const isSelected = activeAtlasPin.id === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => setActiveAtlasPin(pin)}
                      style={{ top: `${pin.yPct}%`, left: `${pin.xPct}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] transition-all cursor-pointer shadow-lg ${
                        isSelected
                          ? 'bg-rose-500 text-white ring-4 ring-rose-400/50 scale-125 z-20 animate-bounce'
                          : 'bg-black/75 text-rose-300 border border-rose-400/60 hover:scale-110 z-10'
                      }`}
                      title={isArabic ? pin.nameAr : pin.nameEn}
                    >
                      <Sparkles className="w-3 h-3" />
                    </button>
                  );
                })}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px] text-white">
                  <span className="flex items-center gap-1 font-semibold">
                    <ZoomIn className="w-3.5 h-3.5 text-rose-400" />
                    {isArabic ? 'اضغط على النقاط التفاعلية لفحص التراكيب' : 'Click on interactive hotspot pins to inspect'}
                  </span>
                  <span className="font-mono text-cyan-300">
                    {isArabic ? `${toHindiDigits(10)} محطات جزيئية` : '10 Molecular Hotspots'}
                  </span>
                </div>
              </div>

              {/* Hotspot Selector Pills */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
                {DNA_HOTSPOTS.map((pin) => {
                  const isSelected = activeAtlasPin.id === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => setActiveAtlasPin(pin)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                        isSelected
                          ? isContrast
                            ? 'bg-rose-400 text-black border-rose-300 font-black'
                            : 'bg-rose-600 text-white border-rose-500 font-black shadow-sm'
                          : isContrast
                          ? 'bg-black border-rose-400/60 text-white'
                          : isLight
                          ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {isArabic ? pin.nameAr : pin.nameEn}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Detailed Anatomical Breakdown & Ministerial Focus */}
            <div className="lg:col-span-6 space-y-4">
              <div
                className={`p-5 rounded-2xl border ${
                  isContrast
                    ? 'bg-black border-rose-400'
                    : isLight
                    ? 'bg-rose-50/40 border-rose-200'
                    : 'bg-rose-950/20 border-rose-900/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-xs font-black px-2.5 py-1 rounded-lg border uppercase ${
                      isContrast
                        ? 'bg-rose-400 text-black border-rose-300'
                        : isLight
                        ? 'bg-rose-100 text-rose-800 border-rose-300'
                        : 'bg-rose-950/80 text-rose-300 border-rose-800'
                    }`}
                  >
                    {isArabic ? activeAtlasPin.categoryAr : activeAtlasPin.categoryEn}
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    B-DNA Architecture
                  </span>
                </div>

                <h3 className="text-xl font-black mt-2">
                  {isArabic ? activeAtlasPin.nameAr : activeAtlasPin.nameEn}
                </h3>
                <p className={`text-xs mt-1.5 leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? activeAtlasPin.descriptionAr : activeAtlasPin.descriptionEn}
                </p>

                {/* Detailed Curriculum Section */}
                <div className="mt-4 pt-3 border-t border-rose-200 dark:border-rose-900/50 space-y-2">
                  <h4 className="text-xs font-black flex items-center gap-1.5 text-rose-500">
                    <Info className="w-4 h-4" />
                    {isArabic ? 'التحليل البيولوجي والمنهجي المعتمد:' : 'Curriculum Biological Details:'}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {isArabic ? activeAtlasPin.curriculumDetailsAr : activeAtlasPin.curriculumDetailsEn}
                  </p>
                </div>

                {/* Ministerial Exam Tips */}
                <div
                  className={`mt-4 p-3.5 rounded-xl border ${
                    isContrast
                      ? 'bg-black border-yellow-400 text-yellow-300'
                      : isLight
                      ? 'bg-amber-50 border-amber-200 text-amber-950'
                      : 'bg-amber-950/30 border-amber-800/50 text-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-black mb-1">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>{isArabic ? 'ملاحظة ونقاط امتحانية هامة (الثانوية العامة والبكالوريا):' : 'Key Ministerial Exam Target Questions:'}</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    {isArabic ? activeAtlasPin.examTipsAr : activeAtlasPin.examTipsEn}
                  </p>
                </div>
              </div>

              {/* Quick Summary Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {isArabic ? 'قطر اللولب المزدوج' : 'Duplex Diameter'}
                  </p>
                  <p className="text-lg font-black text-rose-400 mt-0.5">
                    2.0 nm
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isArabic ? 'يتسع لقاعدة بيورين مع بيريميدين' : 'Accommodates 1 Purine + 1 Pyrimidine'}
                  </p>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {isArabic ? 'اللفة الكاملة الواحدة' : 'One Complete Pitch'}
                  </p>
                  <p className="text-lg font-black text-indigo-400 mt-0.5">
                    3.4 nm (10 bp)
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isArabic ? '٠.٣٤ نانومتر بين كل قاعدتين' : '0.34 nm rise per base pair'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </VirtualLabShell>
  );
};
export default DnaReplicationLab;
