import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  Dna,
  Bone,
  Activity,
  Leaf,
  ZoomIn,
  Play,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

// High-resolution scientific photos
import skeletonImg from '../../assets/biology/human_skeleton_anatomy.jpg';
import sarcomereImg from '../../assets/biology/sarcomere_ultrastructure.jpg';
import dnaImg from '../../assets/biology/dna_double_helix.jpg';
import plantImg from '../../assets/biology/plant_stem_histology.jpg';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

type BioTab = 'skeleton' | 'sarcomere' | 'dna' | 'plant';

interface BoneRegion {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: 'Axial Skeleton' | 'Appendicular Skeleton';
  categoryAr: 'الهيكل المحوري' | 'الهيكل الطرفي';
  count: number;
  subBonesEn: string;
  subBonesAr: string;
  jointTypesEn: string;
  jointTypesAr: string;
  descriptionEn: string;
  descriptionAr: string;
  examTipsEn: string;
  examTipsAr: string;
  highlightY: number; // percentage from top
  highlightX: number; // percentage from left
}

const BONE_REGIONS: BoneRegion[] = [
  {
    id: 'skull',
    nameEn: 'Skull & Facial Bones',
    nameAr: 'الجمجمة وعظام الوجه',
    categoryEn: 'Axial Skeleton',
    categoryAr: 'الهيكل المحوري',
    count: 29,
    subBonesEn: 'Cranium (8 flat bones with serrated edges), Facial bones (14), Auditory ossicles (6), Hyoid bone (1)',
    subBonesAr: 'الجزء المخي (٨ عظام مسننة الأطراف متصلة بتشابك ليفي)، الوجهي (١٤)، عظيمات السمع (٦)، العظم اللامي (١)',
    jointTypesEn: 'Fibrous joints (immovable, become ossified with age)',
    jointTypesAr: 'مفاصل ليفية (عديمة الحركة، تتحول لأنسجة عظمية مع تقدم العمر)',
    descriptionEn: 'Protects the brain and primary sensory organs. The large foramen magnum at the base connects the brain to the spinal cord.',
    descriptionAr: 'تحمي المخ وأعضاء الحس الرئيسية. يوجد في قاع الجزء المخي الثقب الأعظم الذي يتصل عبره المخ بالنخاع الشوكي.',
    examTipsEn: 'Exam focus: Foramen magnum location; immobility of fibrous suture joints; brain box protection.',
    examTipsAr: 'سؤال وزاري متكرر: موقع ووظيفة الثقب الأعظم، ونوع المفاصل بين عظام الجزء المخي (مفاصل ليفية عديمة الحركة).',
    highlightY: 8,
    highlightX: 28,
  },
  {
    id: 'vertebrae',
    nameEn: 'Vertebral Column (Spine)',
    nameAr: 'العمود الفقري',
    categoryEn: 'Axial Skeleton',
    categoryAr: 'الهيكل المحوري',
    count: 33,
    subBonesEn: '7 Cervical (articulated), 12 Thoracic (articulated), 5 Lumbar (largest articulated), 5 Sacral (fused as 1 bone), 4 Coccygeal (fused as 1 bone) = 26 individual bones total',
    subBonesAr: '٧ عنقية (متمفصلة)، ١٢ ظهرية (متمفصلة)، ٥ قطنية (أكبر الفقرات حجماً متمفصلة)، ٥ عجزية (ملتحمة كعظمة واحدة)، ٤ عصعصية (ملتحمة كعظمة واحدة) = ٢٦ عظمة منفصلة',
    jointTypesEn: 'Cartilaginous joints (limited movement) with fibrocartilaginous intervertebral discs',
    jointTypesAr: 'مفاصل غضروفية (محدودة الحركة جداً) تفصل بينها أقراص غضروفية تمتص الصدمات',
    descriptionEn: 'Main central axis of the human body. Protects the spinal cord inside the neural canal and supports head and upper torso weight.',
    descriptionAr: 'الدعامة الرئيسية للجسم، يحمي الحبل الشوكي داخله في القناة العصبية ويدعم ثقل الرأس والنصف العلوي.',
    examTipsEn: 'Lumbar vertebrae (#20-#24) bear the maximum physical load. Sacral & coccygeal are fused.',
    examTipsAr: 'الفقرات القطنية (رقم ٢٠ إلى ٢٤) هي الأكبر حجماً وتحمل أكبر ضغط جسدي. الفقرة المنصفة للعنقية هي رقم ٤، والمنصفة للعمود الفقري كله هي رقم ١٧.',
    highlightY: 30,
    highlightX: 28,
  },
  {
    id: 'ribcage',
    nameEn: 'Thoracic Cage & Sternum',
    nameAr: 'القفص الصدري وعظمة القص',
    categoryEn: 'Axial Skeleton',
    categoryAr: 'الهيكل المحوري',
    count: 25,
    subBonesEn: '12 pairs of ribs (24 ribs total) + 1 Sternum (breastbone). Pairs 1-7 True ribs, pairs 8-10 False ribs, pairs 11-12 Floating ribs',
    subBonesAr: '١٢ زوجاً من الضلوع (٢٤ ضلعاً) + عظمة القص (عظمة مفلطحة مدببة من أسفل جزءها السفلي غضروفي). أزواج ١-٧ حقيقية، ٨-١٠ كاذبة، ١١-١٢ عائمة',
    jointTypesEn: 'Cartilaginous joints to sternum via costal cartilage; Synovial gliding to thoracic vertebrae',
    jointTypesAr: 'مفاصل غضروفية تتصل بالقص عبر الغضاريف الضلعية؛ ومفاصل زلالية محدودة مع الفقرات الظهرية',
    descriptionEn: 'Conical cage protecting heart and lungs. Ribs move forward and laterally during inhalation to expand thoracic volume.',
    descriptionAr: 'علبة مخروطية تحمي القلب والرئتين. تتحرك الضلوع للأمام والجانبين أثناء الشهيق لزيادة حجم التجويف الصدري.',
    examTipsEn: 'Floating ribs (pairs 11 & 12) connect posteriorly to thoracic vertebrae 11 & 12 (vertebrae #18 & #19 of spine) and do not attach to sternum.',
    examTipsAr: 'الضلوع العائمة (الزوجان ١١ و١٢) تتصل فقط بالفقرتين الظهرتين ١١ و١٢ (الفقرتين رقم ١٨ و١٩ من العمود الفقري) ولا تتصل بالقص إطلاقاً.',
    highlightY: 25,
    highlightX: 28,
  },
  {
    id: 'pectoral_arms',
    nameEn: 'Pectoral Girdle & Upper Limbs',
    nameAr: 'الحزام الصدري والطرفان العلويان',
    categoryEn: 'Appendicular Skeleton',
    categoryAr: 'الهيكل الطرفي',
    count: 64,
    subBonesEn: 'Pectoral Girdle (2 Clavicles, 2 Scapulae with Glenoid cavity) = 4; Upper Limbs = 2x(1 Humerus, 1 Radius, 1 Ulna, 8 Carpals, 5 Metacarpals, 14 Phalanges) = 60',
    subBonesAr: 'الحزام الصدري (٢ ترقوة، ٢ لوح كتف به التجويف الأروح) = ٤؛ الطرفان العلويان = ٢× (عضد، كعبرة تدور حول الزند الثابت، زند، ٨ رسغ يد، ٥ أمشاط، ١٤ سلامية) = ٦٠',
    jointTypesEn: 'Shoulder: Ball-and-socket synovial (freely movable); Elbow: Hinge synovial; Wrist: Condyloid synovial',
    jointTypesAr: 'الكتف: زلالي واسع الحركة (حق/كرة)؛ الكوع: زلالي محدود الحركة؛ الرسغ: زلالي ثنائي المحور',
    descriptionEn: 'The Glenoid cavity on the lateral corner of the scapula receives the head of the humerus forming the freely movable shoulder joint.',
    descriptionAr: 'يستقر رأس عظمة العضد في التجويف الأروح لعظمة لوح الكتف مكوناً مفصل الكتف واسع الحركة.',
    examTipsEn: 'The radius rotates around the fixed ulna in a semi-circular motion. Hand wrist has 8 carpal bones in two rows.',
    examTipsAr: 'الكعبرة تتحرك حركة نصف دائرية حول الزند الثابت. رسغ اليد يتكون من ٨ عظام في صفين، يتصل طرفها العلوي بالكعبرة فقط.',
    highlightY: 34,
    highlightX: 18,
  },
  {
    id: 'pelvic_legs',
    nameEn: 'Pelvic Girdle & Lower Limbs',
    nameAr: 'الحزام الحوضي والطرفان السفليان',
    categoryEn: 'Appendicular Skeleton',
    categoryAr: 'الهيكل الطرفي',
    count: 62,
    subBonesEn: 'Pelvic Girdle (2 fused hip bones: Ilium, Ischium, Pubis meeting at Pubic Symphysis and Acetabulum) = 2; Lower Limbs = 2x(1 Femur, 1 Patella, 1 Tibia, 1 Fibula, 7 Tarsals, 5 Metatarsals, 14 Phalanges) = 60',
    subBonesAr: 'الحزام الحوضي (نصفان متماثلان يلتحمان في الارتفاق العاني: حرقفة ظهرية، ورك، عانة، به التجويف الحقي) = ٢؛ الطرفان السفليان = ٢× (فخذ، رضفة، قصبة داخلية، شظية خارجية، ٧ رسغ قدم، ٥ أمشاط، ١٤ سلامية) = ٦٠',
    jointTypesEn: 'Hip: Ball-and-socket synovial (deep, stable); Knee: Hinge synovial with cruciate ligaments; Ankle: Hinge synovial',
    jointTypesAr: 'الفخذ: زلالي واسع الحركة أكثر عمقاً وثباتاً من الكتف؛ الركبة: زلالي محدود الحركة تدعمه ٤ أربطة صليبية؛ الكاحل: زلالي',
    descriptionEn: 'The deep Acetabular cavity accommodates the head of the femur. The heel bone (calcaneus) is the largest tarsal, connected to calf muscle via Achilles tendon.',
    descriptionAr: 'يستقر رأس عظمة الفخذ في التجويف الحقي العميق. عظمة الكعب هي كبرى عظام رسغ القدم (العرقوب) وتتصل بعضلة الساق عبر وتر أخيل.',
    examTipsEn: 'Knee joint cruciate ligaments: Anterior cruciate, Posterior cruciate, Medial collateral, Lateral collateral. Achilles tendon rupture occurs by sudden strenuous effort.',
    examTipsAr: 'أربطة مفصل الركبة: رباط صليبي أمامي، رباط صليبي خلفي، رباط وسطي (يربط الفخذ بالقصبة)، ورباط جانبي (يربط الفخذ بالشظية). تمزق وتر أخيل يعالج بتدخل جراحي إذا كان كاملاً.',
    highlightY: 65,
    highlightX: 25,
  },
];

// Codon Translation Table
const GENETIC_CODE: Record<string, { aa: string; nameEn: string; nameAr: string }> = {
  AUG: { aa: 'Met', nameEn: 'Methionine (Start)', nameAr: 'ميثيونين (بدء)' },
  UUU: { aa: 'Phe', nameEn: 'Phenylalanine', nameAr: 'فينيل ألانين' },
  UUC: { aa: 'Phe', nameEn: 'Phenylalanine', nameAr: 'فينيل ألانين' },
  UUA: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  UUG: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  UCU: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UCC: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UCA: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UCG: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  GCU: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GCC: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GCA: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GCG: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  AAA: { aa: 'Lys', nameEn: 'Lysine', nameAr: 'ليسين' },
  AAG: { aa: 'Lys', nameEn: 'Lysine', nameAr: 'ليسين' },
  GAU: { aa: 'Asp', nameEn: 'Aspartate', nameAr: 'حمض الأسبارتيك' },
  GAC: { aa: 'Asp', nameEn: 'Aspartate', nameAr: 'حمض الأسبارتيك' },
  GAA: { aa: 'Glu', nameEn: 'Glutamate', nameAr: 'حمض الجلوتاميك' },
  GAG: { aa: 'Glu', nameEn: 'Glutamate', nameAr: 'حمض الجلوتاميك' },
  UGG: { aa: 'Trp', nameEn: 'Tryptophan', nameAr: 'تريبتوفان' },
  UAA: { aa: 'STOP', nameEn: 'Stop Codon (Ochre)', nameAr: 'كودون وقف' },
  UAG: { aa: 'STOP', nameEn: 'Stop Codon (Amber)', nameAr: 'كودون وقف' },
  UGA: { aa: 'STOP', nameEn: 'Stop Codon (Opal)', nameAr: 'كودون وقف' },
};

export const BiologyLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<BioTab>('skeleton');

  // Skeleton state
  const [selectedBone, setSelectedBone] = useState<BoneRegion>(BONE_REGIONS[0]);

  // Sarcomere contraction state
  // Resting length = 2.8 um, fully contracted = 1.8 um
  const [sarcomereLength, setSarcomereLength] = useState<number>(2.5);
  const [atpLevel, setAtpLevel] = useState<number>(100);
  const [isAnimatingContraction, setIsAnimatingContraction] = useState<boolean>(false);

  // DNA sequence builder state
  const [dnaInput, setDnaInput] = useState<string>('ATGGCTTTCTAA');

  // Plant support state
  const [waterPotential, setWaterPotential] = useState<number>(85); // 0 (wilting) to 100 (full turgor)

  // DNA Complement & Translation calculation
  const cleanDna = dnaInput.toUpperCase().replace(/[^ATGC]/g, '');
  const complementDna = cleanDna
    .split('')
    .map((b) => {
      if (b === 'A') return 'T';
      if (b === 'T') return 'A';
      if (b === 'G') return 'C';
      if (b === 'C') return 'G';
      return '';
    })
    .join('');

  // mRNA Transcription (replace T with U)
  const mrnaSeq = cleanDna
    .split('')
    .map((b) => (b === 'T' ? 'U' : b))
    .join('');

  // Translation into codons and amino acids
  const codons: string[] = [];
  for (let i = 0; i < mrnaSeq.length; i += 3) {
    if (i + 3 <= mrnaSeq.length) {
      codons.push(mrnaSeq.substring(i, i + 3));
    }
  }

  const translatedPeptides = codons.map((codon) => {
    const entry = GENETIC_CODE[codon] || {
      aa: 'Xaa',
      nameEn: 'Unknown',
      nameAr: 'حمض غير معروف',
    };
    return { codon, ...entry };
  });

  // Calculate H-bonds: A-T = 2, G-C = 3
  const countA = (cleanDna.match(/A/g) || []).length + (cleanDna.match(/T/g) || []).length;
  const countGC = (cleanDna.match(/G/g) || []).length + (cleanDna.match(/C/g) || []).length;
  const totalHbonds = (countA / 2) * 2 + (countGC / 2) * 3;

  // Sarcomere measurements derived
  // A-band constant = 1.5 um
  const aBandLength = 1.5;
  // H-zone shrinks as sarcomere contracts
  const hZoneLength = Math.max(0, parseFloat((sarcomereLength - 1.8).toFixed(2)));
  // I-band length on each side
  const iBandTotal = Math.max(0, parseFloat((sarcomereLength - aBandLength).toFixed(2)));

  const handleContractCycle = () => {
    if (isAnimatingContraction) return;
    setIsAnimatingContraction(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step <= 10) {
        // Contract
        setSarcomereLength((prev) => Math.max(1.8, parseFloat((prev - 0.07).toFixed(2))));
      } else if (step <= 20) {
        // Relax
        setSarcomereLength((prev) => Math.min(2.8, parseFloat((prev + 0.07).toFixed(2))));
      } else {
        clearInterval(interval);
        setIsAnimatingContraction(false);
      }
    }, 120);
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-rose-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Lab Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-rose-400 text-rose-400'
                : 'bg-gradient-to-br from-rose-500 to-pink-600 text-white border-rose-400/40 shadow-rose-500/20'
            }`}
          >
            <Dna className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic ? 'مختبر الأحياء والبيولوجيا الجزيئية التفاعلي' : 'Virtual Biology & Molecular Genetics Lab'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-rose-400 text-black border-rose-300'
                    : isLight
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                }`}
              >
                Hi-Res Micro Atlas
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'أطلس تشريحي عالي الدقة (٢٠٦ عظمة)، محاكي انزلاق خيوط الساركومير، واستوديو اللولب المزدوج لترجمة الشفرة الوراثية'
                : 'High-resolution anatomical atlas (206 bones), sarcomere sliding filament engine, and DNA codon translation studio'}
            </p>
          </div>
        </div>

        {/* Lab Subtabs */}
        <div
          className={`flex items-center p-1 rounded-xl border self-stretch md:self-auto overflow-x-auto ${
            isContrast
              ? 'bg-black border-rose-400'
              : isLight
              ? 'bg-slate-100 border-slate-300'
              : 'bg-slate-900 border-slate-800'
          }`}
        >
          <button
            onClick={() => setActiveTab('skeleton')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'skeleton'
                ? isContrast
                  ? 'bg-rose-400 text-black font-black'
                  : 'bg-rose-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bone className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الهيكل العظمي (٢٠٦)' : 'Human Skeleton (206)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('sarcomere')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'sarcomere'
                ? isContrast
                  ? 'bg-rose-400 text-black font-black'
                  : 'bg-rose-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{isArabic ? 'انزلاق الساركومير' : 'Sarcomere Contraction'}</span>
          </button>

          <button
            onClick={() => setActiveTab('dna')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'dna'
                ? isContrast
                  ? 'bg-rose-400 text-black font-black'
                  : 'bg-rose-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Dna className="w-3.5 h-3.5" />
            <span>{isArabic ? 'استوديو اللولب المزدوج DNA' : 'DNA & Genetic Code'}</span>
          </button>

          <button
            onClick={() => setActiveTab('plant')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'plant'
                ? isContrast
                  ? 'bg-rose-400 text-black font-black'
                  : 'bg-rose-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Leaf className="w-3.5 h-3.5" />
            <span>{isArabic ? 'دعامة النبات ومجهر الأنسجة' : 'Plant Histology'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: SKELETON ATLAS */}
      {activeTab === 'skeleton' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: High-Res Interactive Image with Region Pins */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div
              className={`relative w-full rounded-2xl overflow-hidden border shadow-xl flex items-center justify-center p-2 group ${
                isContrast
                  ? 'bg-black border-rose-400'
                  : isLight
                  ? 'bg-slate-900 border-slate-300'
                  : 'bg-black/90 border-slate-800'
              }`}
            >
              <img
                src={skeletonImg}
                alt="Human Skeleton Anatomy"
                className="w-full max-h-[580px] object-contain rounded-xl select-none"
              />

              {/* Interactive Region Pins Overlay */}
              {BONE_REGIONS.map((region) => {
                const isSelected = selectedBone.id === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedBone(region)}
                    style={{
                      top: `${region.highlightY}%`,
                      left: `${region.highlightX}%`,
                    }}
                    title={isArabic ? region.nameAr : region.nameEn}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-black cursor-pointer shadow-xl transition-all duration-200 z-10 ${
                      isSelected
                        ? 'bg-rose-500 text-white ring-4 ring-rose-400/50 scale-110 shadow-rose-500/50'
                        : 'bg-slate-900/90 text-slate-100 hover:bg-rose-600 hover:text-white border border-rose-400/40 backdrop-blur-xs'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-300 animate-ping" />
                    <span>{isArabic ? region.nameAr : region.nameEn}</span>
                  </button>
                );
              })}

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px] text-white">
                <span className="flex items-center gap-1 font-semibold">
                  <ZoomIn className="w-3.5 h-3.5 text-rose-400" />
                  {isArabic ? 'اضغط على النقاط التفاعلية لفحص العظام' : 'Click on interactive hotspot pins to inspect'}
                </span>
                <span className="font-mono text-slate-300">
                  {isArabic ? `${toHindiDigits(206)} عظمة في البالغين` : '206 Bones in Adult'}
                </span>
              </div>
            </div>

            {/* Region Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 w-full">
              {BONE_REGIONS.map((region) => {
                const isSelected = selectedBone.id === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedBone(region)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
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
                    {isArabic ? region.nameAr : region.nameEn} ({isArabic ? toHindiDigits(region.count) : region.count})
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
                  {isArabic ? selectedBone.categoryAr : selectedBone.categoryEn}
                </span>
                <span className="text-xs font-mono font-bold text-rose-500">
                  {isArabic ? `${toHindiDigits(selectedBone.count)} عظمة معتمدة` : `${selectedBone.count} Accredited Bones`}
                </span>
              </div>

              <h3 className="text-xl font-black mt-2">
                {isArabic ? selectedBone.nameAr : selectedBone.nameEn}
              </h3>
              <p className={`text-xs mt-1.5 leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                {isArabic ? selectedBone.descriptionAr : selectedBone.descriptionEn}
              </p>

              {/* Sub-Bones Breakdown */}
              <div className="mt-4 pt-3 border-t border-rose-200 dark:border-rose-900/50 space-y-2">
                <h4 className="text-xs font-black flex items-center gap-1.5 text-rose-500">
                  <Info className="w-3.5 h-3.5" />
                  {isArabic ? 'التقسيم التشريحي التفصيلي:' : 'Detailed Anatomical Components:'}
                </h4>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  {isArabic ? selectedBone.subBonesAr : selectedBone.subBonesEn}
                </p>
              </div>

              {/* Joint Types */}
              <div className="mt-3 pt-3 border-t border-rose-200 dark:border-rose-900/50 space-y-1.5">
                <h4 className="text-xs font-black flex items-center gap-1.5 text-indigo-400">
                  <Activity className="w-3.5 h-3.5" />
                  {isArabic ? 'أنواع المفاصل المتصلة:' : 'Articulating Joint Types:'}
                </h4>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  {isArabic ? selectedBone.jointTypesAr : selectedBone.jointTypesEn}
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
                  {isArabic ? selectedBone.examTipsAr : selectedBone.examTipsEn}
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
                  {isArabic ? 'الهيكل المحوري' : 'Axial Skeleton'}
                </p>
                <p className="text-lg font-black text-rose-400 mt-0.5">
                  {isArabic ? `${toHindiDigits(80)} عظمة` : '80 Bones'}
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  {isArabic ? 'الجمجمة (٢٩) + العمود الفقري (٢٦) + القفص الصدري (٢٥)' : 'Skull (29) + Spine (26) + Ribcage (25)'}
                </p>
              </div>

              <div
                className={`p-3.5 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {isArabic ? 'الهيكل الطرفي' : 'Appendicular Skeleton'}
                </p>
                <p className="text-lg font-black text-indigo-400 mt-0.5">
                  {isArabic ? `${toHindiDigits(126)} عظمة` : '126 Bones'}
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  {isArabic ? 'الحزام الصدري والطرفان (٦٤) + الحزام الحوضي والطرفان (٦٢)' : 'Pectoral & Arms (64) + Pelvic & Legs (62)'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SARCOMERE SLIDING FILAMENT ENGINE */}
      {activeTab === 'sarcomere' && (
        <div className="mt-6 space-y-6">
          {/* High-Res Banner */}
          <div
            className={`relative rounded-2xl overflow-hidden border shadow-xl ${
              isContrast ? 'border-rose-400' : 'border-slate-800'
            }`}
          >
            <img
              src={sarcomereImg}
              alt="Sarcomere Ultrastructure"
              className="w-full h-56 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-600 text-white uppercase tracking-wider">
                  Huxley Sliding Filament Theory
                </span>
                <h3 className="text-lg sm:text-2xl font-black mt-1">
                  {isArabic ? 'نظرية الخيوط المنزلقة (هكسلي) والتركيب الدقيق للقطعة العضلية' : 'Ultrastructure & Sliding Filament Simulation'}
                </h3>
                <p className="text-xs text-slate-200 max-w-2xl mt-1 leading-relaxed">
                  {isArabic
                    ? 'تمتد القطعة العضلية (الساركومير) بين خطي Z متتاليين. تتكون من خيوط أكتين رفيعة وخيوط ميوسين سميكة تمتد منها روابط مستعرضة بمساعدة أيونات الكالسيوم وATP.'
                    : 'A sarcomere extends between consecutive Z-discs. Thin actin filaments slide over thick myosin filaments via cross-bridges powered by Ca²⁺ and ATP hydrolysis.'}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Mechanical & Biochemical Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Interactive Animated SVG Canvas */}
            <div
              className={`lg:col-span-8 p-5 rounded-2xl border flex flex-col justify-between ${
                isContrast
                  ? 'bg-black border-rose-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-black flex items-center gap-2">
                    <Activity className="w-4 h-4 text-rose-500" />
                    <span>{isArabic ? 'المحاكاة الهندسية لانزلاق الخيوط العضلية:' : 'Dynamic Sarcomere Contraction Plane:'}</span>
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-slate-400">{isArabic ? 'طول الساركومير:' : 'Length:'}</span>
                    <span className="font-extrabold text-rose-400">
                      {isArabic ? `${toHindiDigits(sarcomereLength.toFixed(2))} ميكرون` : `${sarcomereLength.toFixed(2)} µm`}
                    </span>
                  </div>
                </div>

                {/* SVG Sarcomere Diagram */}
                <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 shadow-inner overflow-x-auto">
                  <svg
                    viewBox="0 0 600 240"
                    className="w-full min-w-[500px] h-48 sm:h-56"
                  >
                    <defs>
                      <linearGradient id="myosinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                      <linearGradient id="actinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="50%" stopColor="#fb923c" />
                      </linearGradient>
                    </defs>

                    {(() => {
                      const scale = 140; // px per um
                      const center = 300;
                      const halfLen = (sarcomereLength * scale) / 2;
                      const zLeft = center - halfLen;
                      const zRight = center + halfLen;
                      const aHalf = (aBandLength * scale) / 2;
                      const hHalf = (hZoneLength * scale) / 2;

                      return (
                        <g>
                          {/* A-Band (Constant Length) */}
                          <rect
                            x={center - aHalf}
                            y="15"
                            width={aHalf * 2}
                            height="190"
                            fill="#a855f7"
                            fillOpacity="0.12"
                            stroke="#a855f7"
                            strokeDasharray="4 4"
                            strokeWidth="1"
                          />
                          <text
                            x={center}
                            y="28"
                            textAnchor="middle"
                            fill="#c084fc"
                            fontSize="11"
                            fontWeight="bold"
                          >
                            {isArabic ? 'المنطقة الداكنة A (ثابتة الطول)' : 'A-Band (Constant: 1.5 µm)'}
                          </text>

                          {/* H-Zone (Variable) */}
                          {hHalf > 5 && (
                            <g>
                              <rect
                                x={center - hHalf}
                                y="35"
                                width={hHalf * 2}
                                height="150"
                                fill="#fbbf24"
                                fillOpacity="0.15"
                                stroke="#f59e0b"
                                strokeWidth="1"
                              />
                              <text
                                x={center}
                                y="115"
                                textAnchor="middle"
                                fill="#facc15"
                                fontSize="10"
                                fontWeight="bold"
                              >
                                {isArabic ? `المنطقة شبه المضيئة H (${toHindiDigits(hZoneLength.toFixed(2))}µm)` : `H-Zone (${hZoneLength.toFixed(2)} µm)`}
                              </text>
                            </g>
                          )}

                          {/* Left Z-Line */}
                          <path
                            d={`M ${zLeft} 20 L ${zLeft - 6} 40 L ${zLeft + 6} 60 L ${zLeft - 6} 80 L ${zLeft + 6} 100 L ${zLeft - 6} 120 L ${zLeft + 6} 140 L ${zLeft - 6} 160 L ${zLeft + 6} 180 L ${zLeft} 200`}
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                          <text
                            x={zLeft}
                            y="225"
                            textAnchor="middle"
                            fill="#34d399"
                            fontSize="11"
                            fontWeight="bold"
                          >
                            {isArabic ? 'خط Z' : 'Z-Line'}
                          </text>

                          {/* Right Z-Line */}
                          <path
                            d={`M ${zRight} 20 L ${zRight - 6} 40 L ${zRight + 6} 60 L ${zRight - 6} 80 L ${zRight + 6} 100 L ${zRight - 6} 120 L ${zRight + 6} 140 L ${zRight - 6} 160 L ${zRight + 6} 180 L ${zRight} 200`}
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                          <text
                            x={zRight}
                            y="225"
                            textAnchor="middle"
                            fill="#34d399"
                            fontSize="11"
                            fontWeight="bold"
                          >
                            {isArabic ? 'خط Z' : 'Z-Line'}
                          </text>

                          {/* Central M-Line */}
                          <line
                            x1={center}
                            y1="20"
                            x2={center}
                            y2="200"
                            stroke="#e2e8f0"
                            strokeDasharray="3 3"
                            strokeWidth="1.5"
                          />
                          <text
                            x={center}
                            y="225"
                            textAnchor="middle"
                            fill="#94a3b8"
                            fontSize="10"
                          >
                            {isArabic ? 'خط M' : 'M-Line'}
                          </text>

                          {/* Thick Myosin Filaments */}
                          {[60, 100, 140].map((y) => (
                            <g key={`myosin-${y}`}>
                              <rect
                                x={center - aHalf}
                                y={y - 5}
                                width={aHalf * 2}
                                height="10"
                                rx="4"
                                fill="url(#myosinGrad)"
                              />
                              {/* Myosin Cross-Bridges (Heads) */}
                              {[-60, -35, -15, 15, 35, 60].map((dx) => (
                                <g key={`head-${dx}`}>
                                  <circle
                                    cx={center + dx}
                                    cy={y - 8}
                                    r="3.5"
                                    fill="#ec4899"
                                  />
                                  <line
                                    x1={center + dx}
                                    y1={y - 5}
                                    x2={center + dx}
                                    y2={y - 8}
                                    stroke="#ec4899"
                                    strokeWidth="2"
                                  />
                                  <circle
                                    cx={center + dx}
                                    cy={y + 8}
                                    r="3.5"
                                    fill="#ec4899"
                                  />
                                  <line
                                    x1={center + dx}
                                    y1={y + 5}
                                    x2={center + dx}
                                    y2={y + 8}
                                    stroke="#ec4899"
                                    strokeWidth="2"
                                  />
                                </g>
                              ))}
                            </g>
                          ))}

                          {/* Thin Actin Filaments attached to Z-lines */}
                          {[45, 75, 125, 155].map((y) => {
                            const actinLength = (1.0 * scale);
                            return (
                              <g key={`actin-${y}`}>
                                <line
                                  x1={zLeft}
                                  y1={y}
                                  x2={zLeft + actinLength}
                                  y2={y}
                                  stroke="url(#actinGrad)"
                                  strokeWidth="5"
                                  strokeLinecap="round"
                                />
                                <line
                                  x1={zRight}
                                  y1={y}
                                  x2={zRight - actinLength}
                                  y2={y}
                                  stroke="url(#actinGrad)"
                                  strokeWidth="5"
                                  strokeLinecap="round"
                                />
                              </g>
                            );
                          })}
                        </g>
                      );
                    })()}
                  </svg>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <span>{isArabic ? 'درجة الانقباض (طول القطعة العضلية):' : 'Contraction Extent (Length):'}</span>
                  </label>
                  <span className="text-xs font-mono font-black text-rose-400">
                    {sarcomereLength <= 1.9
                      ? isArabic
                        ? 'انقباض تام (تختفي المنطقة H)'
                        : 'Full Contraction (H disappears)'
                      : sarcomereLength >= 2.7
                      ? isArabic
                        ? 'انبساط كامل (أقصى اتساع لـ H)'
                        : 'Full Relaxation (Max H)'
                      : isArabic
                      ? 'انقباض جزئي'
                      : 'Partial Contraction'}
                  </span>
                </div>

                <input
                  type="range"
                  min="1.8"
                  max="2.8"
                  step="0.05"
                  value={sarcomereLength}
                  onChange={(e) => setSarcomereLength(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={handleContractCycle}
                    disabled={isAnimatingContraction}
                    className="px-3.5 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center gap-1.5 shadow-md shadow-rose-600/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'تشغيل دورة انقباض وانبساط تلقائية' : 'Animate Contraction Cycle'}</span>
                  </button>

                  <button
                    onClick={() => setSarcomereLength(2.6)}
                    className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'إعادة ضبط للانبساط' : 'Reset to Resting'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Real-time Quantitative Zone Measurements Table */}
            <div className="lg:col-span-4 space-y-4">
              <div
                className={`p-4 rounded-2xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <h4 className="text-xs font-black text-rose-500 mb-3 flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  <span>{isArabic ? 'جدول القياسات الدقيقة للمناطق (ثانوية عامة):' : 'Quantitative Zone Status:'}</span>
                </h4>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="font-bold text-slate-300">{isArabic ? 'خطي Z (Z-Discs):' : 'Z-Lines Distance:'}</span>
                    <span className="font-mono font-black text-emerald-400">
                      {isArabic ? `${toHindiDigits(sarcomereLength.toFixed(2))} µm (يتقاربان)` : `${sarcomereLength.toFixed(2)} µm (Approach)`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="font-bold text-slate-300">{isArabic ? 'المنطقة شبه المضيئة (H):' : 'H-Zone Width:'}</span>
                    <span className={`font-mono font-black ${hZoneLength === 0 ? 'text-red-400' : 'text-amber-400'}`}>
                      {hZoneLength === 0
                        ? isArabic
                          ? '٠ µm (تنعدم تماماً)'
                          : '0.00 µm (Disappears)'
                        : isArabic
                        ? `${toHindiDigits(hZoneLength.toFixed(2))} µm (تضيق)`
                        : `${hZoneLength.toFixed(2)} µm (Shortens)`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="font-bold text-slate-300">{isArabic ? 'المنطقة المضيئة (I):' : 'I-Band Total:'}</span>
                    <span className="font-mono font-black text-orange-400">
                      {isArabic ? `${toHindiDigits(iBandTotal.toFixed(2))} µm (يقل طولها)` : `${iBandTotal.toFixed(2)} µm (Shortens)`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="font-bold text-slate-300">{isArabic ? 'المنطقة الداكنة (A):' : 'A-Band Length:'}</span>
                    <span className="font-mono font-black text-purple-400">
                      {isArabic ? `${toHindiDigits(aBandLength.toFixed(2))} µm (ثابتة لا تتغير!)` : `${aBandLength.toFixed(2)} µm (Fixed/Constant)`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="font-bold text-slate-300">{isArabic ? 'خيوط الأكتين والميوسين:' : 'Myofilaments:'}</span>
                    <span className="font-mono font-semibold text-cyan-400">
                      {isArabic ? 'أطوالها ثابتة (تنزلق فقط)' : 'Constant Lengths (Slide)'}
                    </span>
                  </div>
                </div>

                {/* Biochemical Controls & Muscle Spasm Alert */}
                <div className="mt-4 pt-3 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">
                      {isArabic ? 'مستوى ATP المتوفر في الليفة:' : 'Cellular ATP Level:'}
                    </span>
                    <span className="text-xs font-mono font-black text-amber-400">{atpLevel}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={atpLevel}
                    onChange={(e) => setAtpLevel(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />

                  {atpLevel < 20 && (
                    <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/50 text-red-200 text-xs flex items-start gap-2 animate-pulse">
                      <AlertTriangle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                      <div>
                        <p className="font-black">
                          {isArabic ? 'حالة شد عضلي حاد مؤلم (Muscle Spasm):' : 'Severe Muscle Spasm Triggered:'}
                        </p>
                        <p className="text-[11px] text-red-300 mt-0.5 leading-relaxed">
                          {isArabic
                            ? 'نقص جزيئات ATP يمنع انفصال الروابط المستعرضة عن خيوط الأكتين، فتظل العضلة منقبضة وغير قادرة على الانبساط.'
                            : 'Lack of ATP prevents cross-bridges from detaching from actin filaments, locking the sarcomere in a sustained contraction.'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DNA DOUBLE HELIX & GENETIC CODE ENGINE */}
      {activeTab === 'dna' && (
        <div className="mt-6 space-y-6">
          {/* High-Res Banner */}
          <div
            className={`relative rounded-2xl overflow-hidden border shadow-xl ${
              isContrast ? 'border-rose-400' : 'border-slate-800'
            }`}
          >
            <img
              src={dnaImg}
              alt="DNA Double Helix 3D Structure"
              className="w-full h-56 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-cyan-600 text-white uppercase tracking-wider">
                  Watson-Crick Double Helix & Central Dogma
                </span>
                <h3 className="text-lg sm:text-2xl font-black mt-1">
                  {isArabic ? 'استوديو اللولب المزدوج، نسخ mRNA وترجمة الشفرة الوراثية' : 'DNA Double Helix & Translation Studio'}
                </h3>
                <p className="text-xs text-slate-200 max-w-2xl mt-1 leading-relaxed">
                  {isArabic
                    ? 'شريطا DNA متعاكسان (5\' إلى 3\' و 3\' إلى 5\')، القواعد النيتروجينية ترتبط بروابط هيدروجينية (A=T برابطتين، G≡C بثلاث روابط). ينسخ منه mRNA ثم يُترجم إلى ببتيد أحماض أمينية.'
                    : 'Antiparallel DNA strands paired via hydrogen bonds (A=T has 2 H-bonds, G≡C has 3 H-bonds). Transcribed into mRNA and translated into a functional polypeptide.'}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive DNA Sequence Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Interactive Sequence Builder */}
            <div
              className={`lg:col-span-7 p-5 rounded-2xl border space-y-4 ${
                isContrast
                  ? 'bg-black border-rose-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div>
                <label className="text-xs font-black text-slate-200 flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5">
                    <Dna className="w-4 h-4 text-cyan-400" />
                    <span>{isArabic ? 'شريط DNA الأساسي المقروء (اتجاه 5\' إلى 3\'):' : 'Template DNA Strand (5\' to 3\'):'}</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">
                    {isArabic ? `${toHindiDigits(cleanDna.length)} نيوكليوتيدة` : `${cleanDna.length} Nucleotides`}
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={dnaInput}
                    onChange={(e) => setDnaInput(e.target.value.toUpperCase())}
                    placeholder="e.g. ATGGCTTTCTAA"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono font-bold tracking-widest text-cyan-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                  <button
                    onClick={() => setDnaInput('ATGGCTGCCTAA')}
                    className="px-3 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 shrink-0 transition-all cursor-pointer"
                  >
                    {isArabic ? 'عينة' : 'Preset'}
                  </button>
                </div>
              </div>

              {/* DNA Duplex Rendering */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                {/* 5' to 3' Strand */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-rose-400 w-12 shrink-0">5' strand:</span>
                  <div className="flex items-center gap-1 overflow-x-auto py-1">
                    {cleanDna.split('').map((base, idx) => (
                      <span
                        key={`top-${idx}`}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 border ${
                          base === 'A'
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                            : base === 'T'
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : base === 'G'
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        }`}
                      >
                        {base}
                      </span>
                    ))}
                    <span className="text-slate-500 text-[10px] shrink-0">3'</span>
                  </div>
                </div>

                {/* Hydrogen Bonds Connecting */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500 w-12 shrink-0">Bonds:</span>
                  <div className="flex items-center gap-1 overflow-x-auto py-0.5">
                    {cleanDna.split('').map((base, idx) => (
                      <span
                        key={`bond-${idx}`}
                        className="w-7 text-center text-[10px] text-slate-400 font-bold shrink-0"
                      >
                        {base === 'A' || base === 'T' ? '==' : '≡≡≡'}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3' to 5' Complementary Strand */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-cyan-400 w-12 shrink-0">3' strand:</span>
                  <div className="flex items-center gap-1 overflow-x-auto py-1">
                    {complementDna.split('').map((base, idx) => (
                      <span
                        key={`bot-${idx}`}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 border ${
                          base === 'A'
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                            : base === 'T'
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : base === 'G'
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        }`}
                      >
                        {base}
                      </span>
                    ))}
                    <span className="text-slate-500 text-[10px] shrink-0">5'</span>
                  </div>
                </div>
              </div>

              {/* mRNA Transcription */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-black text-indigo-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'نسخ الحمض النووي الريبوزي (mRNA):' : 'Transcribed mRNA Strand (5\' to 3\'):'}</span>
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {isArabic ? 'استبدال الثايمين (T) باليوراسيل (U)' : 'Thymine (T) replaced by Uracil (U)'}
                  </span>
                </div>
                <div className="font-mono text-xs font-bold text-indigo-300 tracking-wider overflow-x-auto py-1">
                  5'-{mrnaSeq}-3'
                </div>
              </div>

              {/* Ribosome Translation Chain */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                <h5 className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isArabic ? 'ترجمة الريبوسوم إلى سلسلة عديد الببتيد (الأحماض الأمينية):' : 'Translated Polypeptide Amino Acid Chain:'}</span>
                </h5>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {translatedPeptides.length > 0 ? (
                    translatedPeptides.map((pep, idx) => (
                      <div
                        key={`pep-${idx}`}
                        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-mono font-bold shadow-xs ${
                          pep.aa === 'STOP'
                            ? 'bg-red-500/20 border-red-500/50 text-red-300'
                            : pep.aa === 'Met'
                            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                            : 'bg-indigo-500/20 border-indigo-500/50 text-indigo-200'
                        }`}
                      >
                        <span className="text-[10px] text-slate-400">[{pep.codon}]</span>
                        <span className="font-black">{pep.aa}</span>
                        <span className="text-[10px] opacity-75">
                          ({isArabic ? pep.nameAr : pep.nameEn})
                        </span>
                        {idx < translatedPeptides.length - 1 && (
                          <span className="text-slate-500 font-sans mx-1">→</span>
                        )}
                      </div>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500">
                      {isArabic ? 'أدخل على الأقل كودوناً واحداً (٣ نيوكليوتيدات)' : 'Enter at least 3 nucleotides for a codon'}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Chargaff Rules & Molecular Metrics */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className={`p-4 rounded-2xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <h4 className="text-xs font-black text-cyan-400 mb-3 flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  <span>{isArabic ? 'قوانين شارجاف وحسابات الروابط الهيدروجينية:' : 'Chargaff Rules & Bonding Metrics:'}</span>
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-300 font-bold">
                      {isArabic ? 'إجمالي الروابط الهيدروجينية في القطعة:' : 'Total Hydrogen Bonds in Duplex:'}
                    </span>
                    <span className="font-mono font-black text-rose-400 text-sm">
                      {isArabic ? `${toHindiDigits(totalHbonds)} رابطة` : `${totalHbonds} H-Bonds`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-300 font-bold">
                      {isArabic ? 'روابط الأدنين-الثايمين الثنائية (A=T):' : 'A=T Double Bonds (2 per pair):'}
                    </span>
                    <span className="font-mono font-black text-amber-400">
                      {isArabic ? `${toHindiDigits(countA / 2)} أزواج` : `${countA / 2} Pairs`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-300 font-bold">
                      {isArabic ? 'روابط الجوانين-السيتوزين الثلاثية (G≡C):' : 'G≡C Triple Bonds (3 per pair):'}
                    </span>
                    <span className="font-mono font-black text-cyan-400">
                      {isArabic ? `${toHindiDigits(countGC / 2)} أزواج` : `${countGC / 2} Pairs`}
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200 space-y-1.5">
                  <p className="font-black flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'أبعاد اللولب المزدوج (وفق نموذج واطسون وكريك):' : 'Canonical Dimensions (Watson-Crick Model):'}</span>
                  </p>
                  <ul className="list-disc list-inside text-[11px] space-y-1 text-slate-300">
                    <li>{isArabic ? 'قطر جزيء DNA يبلغ ٢ نانومتر (يتسع لبيورين مع بيريميدين)' : 'Diameter = 2.0 nm (fits one purine + one pyrimidine)'}</li>
                    <li>{isArabic ? 'اللفة الكاملة الواحدة تحتوي على ١٠ أزواج من القواعد بطول ٣.٤ نانومتر' : 'One complete turn = 10 base pairs (3.4 nm pitch)'}</li>
                    <li>{isArabic ? 'المسافة بين قاعدتين متتاليتين = ٠.٣٤ نانومتر' : 'Distance between consecutive base pairs = 0.34 nm'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PLANT HISTOLOGY & SUPPORT */}
      {activeTab === 'plant' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: High-Res Histology Image */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div
              className={`relative w-full rounded-2xl overflow-hidden border shadow-xl flex items-center justify-center p-2 group ${
                isContrast
                  ? 'bg-black border-rose-400'
                  : isLight
                  ? 'bg-slate-900 border-slate-300'
                  : 'bg-black/90 border-slate-800'
              }`}
            >
              <img
                src={plantImg}
                alt="Plant Stem Histology"
                className="w-full max-h-[520px] object-cover rounded-xl select-none"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-white">
                <span className="font-semibold text-emerald-400">
                  {isArabic ? 'قطاع عرضي في ساق نبات ذي فلقتين (صباغة السافرانين والأخضر السريع)' : 'Dicot Stem Cross Section (Safranin & Fast Green Staining)'}
                </span>
                <span className="font-mono text-slate-300">Optical 400x</span>
              </div>
            </div>
          </div>

          {/* Right Column: Physiological vs Structural Support Simulator */}
          <div className="lg:col-span-6 space-y-4">
            <div
              className={`p-5 rounded-2xl border ${
                isContrast
                  ? 'bg-black border-emerald-400'
                  : isLight
                  ? 'bg-emerald-50/50 border-emerald-200'
                  : 'bg-emerald-950/20 border-emerald-900/40'
              }`}
            >
              <h3 className="text-lg font-black flex items-center gap-2 text-emerald-500">
                <Leaf className="w-5 h-5" />
                <span>{isArabic ? 'الدعامة الفسيولوجية والدعامة التركيبية في النبات' : 'Plant Support: Physiological vs Structural'}</span>
              </h3>

              {/* Water Potential Slider */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300">
                    {isArabic ? 'الجهد المائي والضغط الأسموزي (الامتلاء):' : 'Water Potential & Turgor Pressure:'}
                  </span>
                  <span className="font-mono font-black text-emerald-400">
                    {waterPotential > 60
                      ? isArabic
                        ? 'امتلاء كامل (خلية منتفخة)'
                        : 'High Turgor (Turgid)'
                      : isArabic
                      ? 'انكماش وذبول (بلزمة)'
                      : 'Flaccid (Plasmolyzed)'}
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={waterPotential}
                  onChange={(e) => setWaterPotential(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {waterPotential > 60
                    ? isArabic
                      ? 'يدخل الماء بالخاصية الأسموزية إلى الفجوة العصارية، فيزداد حجم العصير الخلوي ويضغط على البروتوبلازم الذي يضغط بدوره على الجدار الخلوي فيتوتر ويكتسب النبات دعامته الفسيولوجية المؤقتة.'
                      : 'Water enters the vacuole by osmosis, expanding cell sap and pressing the protoplast against the elastic cell wall, causing turgidity (temporary physiological support).'
                    : isArabic
                    ? 'عند نقص الماء يفقد العصير الخلوي ماءه بالخاصية الأسموزية فينكمش البروتوبلازم ويزول توتر الجدار فيحدث الذبول وارتخاء السيقان العشبية.'
                    : 'Water loss causes vacuolar shrinkage and loss of cell wall tension, triggering wilting and flaccidity.'}
                </p>
              </div>

              {/* Structural Support Matrix */}
              <div className="mt-4 pt-3 border-t border-slate-800 space-y-2.5 text-xs">
                <h4 className="font-black text-slate-200">
                  {isArabic ? 'مواد الدعامة التركيبية الدائمة في جدران الخلايا:' : 'Permanent Structural Support Deposition:'}
                </h4>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="font-bold text-emerald-400">{isArabic ? 'السليلوز (Cellulose)' : 'Cellulose'}</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">
                      {isArabic ? 'يكسب الجدار مرونة وصلابة، يترسب في الخلايا الكولنشيمية' : 'Tensile strength, present in collenchyma'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="font-bold text-rose-400">{isArabic ? 'اللجنين (Lignin)' : 'Lignin'}</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">
                      {isArabic ? 'صلابة وقوة غير منفذ للماء، يترسب في أوعية الخشب والخلايا الإسكلرنشيمية' : 'Hardness and impermeability in xylem and sclerenchyma'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="font-bold text-amber-400">{isArabic ? 'الكيوتين (Cutin)' : 'Cutin'}</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">
                      {isArabic ? 'مادة شمعية غير منفذة للماء على بشرة أوراق النبات للحد من النتح' : 'Waxy waterproof coating on leaf epidermis'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="font-bold text-cyan-400">{isArabic ? 'السيوبرين (Suberin)' : 'Suberin'}</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">
                      {isArabic ? 'مادة غير منفذة للماء تترسب في جدران الخلايا الفلينية' : 'Impermeable barrier in cork layers'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
