import React, { useState } from 'react';
import {
  Mountain,
  Maximize2,
  Sparkles,
  Info,
  Layers,
  CheckCircle2,
  RotateCcw,
  Activity,
  ArrowRight,
  Shield,
  Clock,
  Eye,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import grandCanyonPhoto from '../../../assets/geology/grand_canyon_stratigraphy_unconformity.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface UnconformityHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  diagnosticEvidenceAr: string;
  diagnosticEvidenceEn: string;
}

export const UNCONFORMITY_HOTSPOTS: UnconformityHotspot[] = [
  {
    id: 'great_angular_surface',
    xPct: 52.0,
    yPct: 46.0,
    titleAr: 'سطح عدم التوافق الزاوي العظيم (The Great Angular Unconformity)',
    titleEn: 'The Great Angular Unconformity Contact Horizon',
    categoryAr: 'عدم توافق زاوي واسع النطاق بالأخدود العظيم',
    categoryEn: 'Major Angular Stratigraphic Boundary',
    descAr:
      'الخط التحاتي الفاصل بوضوح بين طبقات مجموعة الأخدود العظيم الرسوبية المائلة (Grand Canyon Supergroup) في الأسفل، وبين طبقات حجر الرمل تايبيست (Tapeats Sandstone) الأفقية تماماً في الأعلى. يمثل فجوة زمنية انقطاعية هائلة تتجاوز مليار سنة من تاريخ الأرض الجيولوجي.',
    descEn:
      'The sharp erosional contact separating tilted Proterozoic sedimentary and volcanic strata below from flat-lying Cambrian Tapeats Sandstone above, representing over 1 billion years of missing geologic record.',
    diagnosticEvidenceAr:
      'اختلاف زاوية ميل الطبقات بوضوح (طبقات سفلية مائلة بزاوية ~15° تعلوها طبقات أفقية 0°)، مع وجود طبقة كونجلوميرات قاعدية مستديرة الحصى.',
    diagnosticEvidenceEn:
      'Clear angular discordance between tilted underlying strata (~15° dip) and horizontal overlying strata (0°), directly topped by basal conglomerate.',
  },
  {
    id: 'tapeats_horizontal',
    xPct: 50.0,
    yPct: 22.0,
    titleAr: 'الطبقات الرسوبية الأفقية الحديثة (حجر الرمل تايبيست الكامبري)',
    titleEn: 'Horizontal Overlying Strata (Cambrian Tapeats Sandstone)',
    categoryAr: 'صخور رسوبية بحرية أحدث تعلو سطح التحات',
    categoryEn: 'Transgressive Marine Sedimentary Cover',
    descAr:
      'طبقات رسوبية أفقية منتظمة التطبق ترسبت في العصر الكامبري (بداية حقبة الحياة القديمة) نتيجة تقدم البحر وغمر اليابسة بعد فترة تحات طويلة، تحتوي على حفريات الترايلوبيت ثلاثية الفصوص الدالة.',
    descEn:
      'Flat-lying horizontal marine sandstone beds deposited during the Cambrian marine transgression across the eroded continental peneplain, bearing index Trilobite fossils.',
    diagnosticEvidenceAr:
      'طباقية متوازية مستقرة تماماً لم تتعرض لأي حركات تشويه تكتونية أو طي، تعلو صخور الكونجلوميرات مباشرة.',
    diagnosticEvidenceEn:
      'Undeformed horizontal bedding bearing no folding or tectonic tilting, directly superposed onto basal conglomerate lags.',
  },
  {
    id: 'tilted_precambrian',
    xPct: 35.0,
    yPct: 75.0,
    titleAr: 'الطبقات القديمة المائلة والمطوية (مجموعة حقب ما قبل الكامبري)',
    titleEn: 'Tilted & Faulted Subjacent Strata (Precambrian Supergroup)',
    categoryAr: 'طبقات رسوبية قديمة تعرضت لقوى تكتونية وطيات وفوالق',
    categoryEn: 'Pre-Unconformity Tilted & Deformed Strata',
    descAr:
      'طبقات قديمة تعرضت لحركات بانية للجبال، حيث حدث لها ميل وتصدع وتداخل لعروق نارية قديمة؛ ثم توقف الترسيب وتعرضت لتعرية شديدة سوت قممها قبل أن يغمرها البحر من جديد.',
    descEn:
      'Deeply tilted fault-block strata that underwent ancient orogenic deformation, faulting, and extensive erosion prior to subsequent marine inundation.',
    diagnosticEvidenceAr:
      'ميل الطبقات الرسوبية بزاوية حادة وانقطاع الفوالق والعروق النارية فجأة عند سطح عدم التوافق دون أن تمتد إلى الطبقات الأفقية العليا.',
    diagnosticEvidenceEn:
      'Strata dipping at significant angles; ancient faults and volcanic dykes terminate abruptly at the unconformity line.',
  },
  {
    id: 'basal_conglomerate',
    xPct: 70.0,
    yPct: 48.0,
    titleAr: 'طبقة الكونجلوميرات القاعدية (Basal Conglomerate Marker)',
    titleEn: 'Basal Conglomerate Lithologic Index Horizon',
    categoryAr: 'الشاهد الصخري الأول على تقدم البحر وبدء الترسيب الجديد',
    categoryEn: 'Primary Sedimentary Field Diagnostic Evidence',
    descAr:
      'طبقة من الصخور الرسوبية الفتاتية تتكون من حبيبات وحصى مستدير الحواف يزيد قطره عن 2 ملم، توجد ملاصقة مباشرة لسطح عدم التوافق من الأعلى؛ تدل على حركة مائية عنيفة ونشاط شاطئي كاسح عند تقدم البحر بعد فترة التحات.',
    descEn:
      'A distinct coarse clastic sedimentary layer composed of rounded gravel and cobbles (>2mm diameter) resting directly upon the erosional unconformity contact, signaling high-energy shoreline advance during sea transgression.',
    diagnosticEvidenceAr:
      'حصى مستدير بفعل التحات المائي والتدحرج (بخلاف البريشيا ذات الحواف الحادة المصاحبة للفوالق).',
    diagnosticEvidenceEn:
      'Rounded cobbles from aqueous hydraulic transport (unlike angular breccia found along fault planes).',
  },
];

export interface UnconformityTypeRecord {
  id: string;
  nameAr: string;
  nameEn: string;
  definitionAr: string;
  definitionEn: string;
  lowerRockAr: string;
  lowerRockEn: string;
  upperRockAr: string;
  upperRockEn: string;
  fieldEvidencesAr: string[];
  fieldEvidencesEn: string[];
  diagramHintAr: string;
  diagramHintEn: string;
}

export const UNCONFORMITY_TYPES: UnconformityTypeRecord[] = [
  {
    id: 'nonconformity',
    nameAr: '1. عدم التوافق المتباين (Nonconformity)',
    nameEn: '1. Nonconformity',
    definitionAr:
      'سطح عدم توافق يفصل بين صخور نارية أو متحولة قديمة في الأسفل، وصخور رسوبية أحدث منها تعلوها في الأعلى (بشرط ألا تكون الصخور النارية متداخلة في الرسوبية كقاطع حديث).',
    definitionEn:
      'Erosional contact separating older igneous or metamorphic rocks below from younger sedimentary strata deposited directly above them.',
    lowerRockAr: 'صخور نارية أو متحولة (كتلية/مورقة) تبلورت في العمق ثم رُفعت وتآكلت.',
    lowerRockEn: 'Deep-seated igneous (granite) or metamorphic (gneiss/schist) basement.',
    upperRockAr: 'صخور رسوبية طبقية متوازية (حجر رملي، حجر جيري، طين).',
    upperRockEn: 'Bedded sedimentary layers (sandstone, limestone, shale).',
    fieldEvidencesAr: [
      'اختلاف كامل في طبيعة الصخور (صخور كتلية نارية بالأسفل وطبقات رسوبية بالأعلى).',
      'وجود طبقة كونجلوميرات قاعدية مستديرة الحصى تعلو الصخر الناري مباشرة.',
      'غياب أي علامات تحول حراري (Baked zone) في الطبقة الرسوبية العليا (يثبت أن الناري أقدم وليس متداخلاً حديثاً).',
    ],
    fieldEvidencesEn: [
      'Fundamental rock contrast: Massive crystalline basement below layered sedimentary strata above.',
      'Basal conglomerate bed resting directly on the eroded basement interface.',
      'Absence of thermal contact metamorphism in upper sedimentary strata (verifying the igneous unit is older).',
    ],
    diagramHintAr: 'كتلة جرانيتية قديمة بالأسفل تعلوها طبقات حجر جيري أفقية مستقرة.',
    diagramHintEn: 'Ancient crystalline granite body overlain by flat fossiliferous limestone beds.',
  },
  {
    id: 'angular',
    nameAr: '2. عدم التوافق الزاوي (Angular Unconformity)',
    nameEn: '2. Angular Unconformity',
    definitionAr:
      'سطح عدم توافق يفصل بين مجموعتين صخريتين رسوبيتين مائلتين باتجاهين مختلفين، أو مجموعة رسوبية قديمة مائلة (أو مطوية في طيات محدبة ومقعرة) تعلوها مجموعة رسوبية أحدث أفقية.',
    definitionEn:
      'Erosional surface separating horizontally layered sedimentary strata from underlying tilted or folded sedimentary rock strata.',
    lowerRockAr: 'صخور رسوبية مائلة أو مطوية (طيات محدبة/مقعرة) ومقطوعة بالفوالق.',
    lowerRockEn: 'Deformed sedimentary layers tilted at steep angles, folded, or faulted.',
    upperRockAr: 'صخور رسوبية أفقية أو ذات زاوية ميل مختلفة تماماً.',
    upperRockEn: 'Horizontal or discordant gently dipping sedimentary beds.',
    fieldEvidencesAr: [
      'اختلاف واضح في زاوية ميل الطبقات على جانبي سطح عدم التوافق.',
      'انقطاع الطيات والفوالق والعروق النارية عند سطح عدم التوافق وعدم امتدادها للطبقات العليا.',
      'وجود كونجلوميرات تعلو السطح مباشرة وتفصل بين الميلين.',
    ],
    fieldEvidencesEn: [
      'Pronounced angular discordance between upper and lower dip orientations.',
      'Abrupt truncation of folds, faults, and dykes at the unconformity line without entering upper strata.',
      'Basal conglomerate bed tracing the angular contact.',
    ],
    diagramHintAr: 'طية محدبة تآكلت قمتها الأفقية، وترسبت فوقها طبقات رملية أفقية جديدة.',
    diagramHintEn: 'Folded anticline truncated flat by erosion, draped by horizontal sandstone strata.',
  },
  {
    id: 'disconformity',
    nameAr: '3. عدم التوافق الانقطاعي (Disconformity)',
    nameEn: '3. Disconformity',
    definitionAr:
      'سطح عدم توافق يفصل بين مجموعتين صخريتين رسوبيتين متوازيتين تماماً، حيث يختفي الترسيب لفترة زمنية بفعل انحسار البحر وتعرية الطبقات، ويصعب تمييزه بالعين المجردة بدون المحتوى الحفري.',
    definitionEn:
      'An erosional or non-depositional surface separating parallel sedimentary strata, usually recognized by biostratigraphic fossil gaps.',
    lowerRockAr: 'صخور رسوبية أفقية قديمة تحتوي على حفريات عصر جيولوجي أقدم.',
    lowerRockEn: 'Horizontal sedimentary strata containing fossils of an earlier geologic period.',
    upperRockAr: 'صخور رسوبية أفقية أحدث موازية للأولى تماماً لكن بحفريات عصر أحدث وبينهما فجوة حفرية.',
    upperRockEn: 'Parallel horizontal strata containing significantly younger fossils with biozone hiatus.',
    fieldEvidencesAr: [
      'التغير المفاجئ في تتابع المحتوى الحفري (غياب عصر جيولوجي كامل مثل غياب السيلوري بين الأوردوفيشي والديفوني).',
      'وجود طبقة الكونجلوميرات ذات الحصى المستدير أعلى سطح عدم التوافق مباشرة.',
      'مظاهر التحات والتربة القديمة والشقوق الصخرية الدقيقة الممتلئة برسوبيات أحدث.',
    ],
    fieldEvidencesEn: [
      'Sudden faunal hiatus: Absence of entire index fossil periods (e.g. missing Silurian between Ordovician and Devonian).',
      'Presence of rounded basal conglomerate at the paraconformity boundary.',
      'Fossil paleosols, karst dissolution cavities, and ancient scour channels.',
    ],
    diagramHintAr: 'طبقات أفقية متوازية؛ الطبقة السفلية تحتوي على ثلاثية الفصوص والعليا تحتوي على ثدييات مشيمية (فجوة زمنية ضخمة).',
    diagramHintEn: 'Parallel horizontal beds; lower bed has Cambrian trilobites, upper has Cretaceous ammonites.',
  },
];

export interface DatingEvent {
  step: number;
  type: string;
  nameAr: string;
  nameEn: string;
  ruleAr: string;
  ruleEn: string;
  tagColor: string;
}

export const RELATIVE_DATING_CHALLENGE: DatingEvent[] = [
  {
    step: 1,
    type: 'sedimentation',
    nameAr: 'ترسيب الطبقات الرسوبية القديمة (أ، ب، ج)',
    nameEn: 'Deposition of Lower Strata (A, B, C)',
    ruleAr: 'قانون تعاقب الطبقات: في التتابع الرسوبي الطبيعي غير المقلوب، الطبقة السفلية (أ) هي الأقدم.',
    ruleEn: 'Law of Superposition: In undeformed sequences, lowest layer (A) is oldest.',
    tagColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    step: 2,
    type: 'folding',
    nameAr: 'قوى ضغط تكتونية سببت طي الطبقات (طية محدبة)',
    nameEn: 'Tectonic Compression Forming an Anticline',
    ruleAr: 'الطي يحدث بعد الترسيب؛ لا يمكن طي طبقة قبل أن تتواجد بالفعل.',
    ruleEn: 'Deformation postdates deposition; strata must exist before being folded.',
    tagColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  },
  {
    step: 3,
    type: 'faulting',
    nameAr: 'فالق معكوس يقطع الطية (الفالق F)',
    nameEn: 'Reverse Fault (F) Dissecting the Fold',
    ruleAr: 'مبدأ القاطع والمقطوع: الفالق أحدث من الطبقات التي كسرها وحركها.',
    ruleEn: 'Cross-cutting principle: Fault is younger than the strata it cuts.',
    tagColor: 'bg-red-500/20 text-red-400 border-red-500/30',
  },
  {
    step: 4,
    type: 'erosion',
    nameAr: 'حركات رفع وتوقف ترسيب وتعرية (تكوين سطح عدم توافق زاوي)',
    nameEn: 'Uplift, Emergence, and Truncation (Angular Unconformity)',
    ruleAr: 'التعرية قطعت قمة الطية والفالق وسوت السطح؛ أحدث من الفالق وأقدم من الطبقات التي تعلوه.',
    ruleEn: 'Erosion beveled the fold and fault tops prior to renewal of deposition.',
    tagColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  },
  {
    step: 5,
    type: 'sedimentation',
    nameAr: 'تقدم البحر وترسيب كونجلوميرات ثم الطبقات الأفقية (د، هـ)',
    nameEn: 'Transgression, Basal Conglomerate & Upper Strata (D, E)',
    ruleAr: 'ترسبت فوق سطح التحات أفقياً تماماً، وتثبت الكونجلوميرات بدء الترسيب الجديد.',
    ruleEn: 'Horizontal deposition above unconformity, confirmed by basal lag gravels.',
    tagColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  },
  {
    step: 6,
    type: 'intrusion',
    nameAr: 'اندفاع عرق ناري بازلتي قاطع (العرق D) يخترق كل الطبقات حتى السطح',
    nameEn: 'Basaltic Igneous Dyke (D) Cross-Cutting All Strata',
    ruleAr: 'العرق الناري هو أحدث الأحداث الجيولوجية لأنه قطع جميع الطبقات وسطح عدم التوافق.',
    ruleEn: 'Igneous dyke is the youngest feature as it cuts through all layers and unconformities.',
    tagColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  },
];

export const StratigraphicUnconformityStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<UnconformityHotspot>(UNCONFORMITY_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [activeUnconformityTab, setActiveUnconformityTab] = useState<string>('angular');
  const [revealedDatingStep, setRevealedDatingStep] = useState<number>(3);
  const [activeStructureTab, setActiveStructureTab] = useState<'folds' | 'faults'>('faults');

  const activeType =
    UNCONFORMITY_TYPES.find((t) => t.id === activeUnconformityTab) || UNCONFORMITY_TYPES[1];

  const handleOpenModal = () => {
    setModalData({
      imageUrl: grandCanyonPhoto,
      titleAr: 'الأخدود العظيم — سطح عدم التوافق الزاوي العظيم (The Great Unconformity)',
      titleEn: 'Grand Canyon: The Great Angular Unconformity Archival Exposure',
      subtitleAr: 'أشهر مكشف جيولوجي طباقي على سطح كوكب الأرض لفجوة زمنية تتجاوز مليار سنة',
      subtitleEn: 'World-Renowned Stratigraphic Contact Representing Over 1 Billion Years Hiatus',
      descriptionAr:
        'لقطة فوتوغرافية جيولوجية فائقة الدقة لجدران الأخدود العظيم بولاية أريزونا بأمريكا الشمالية، تظهر التباين الزاوي المدهش بين صخور ما قبل الكامبري المائلة والمصدوعة بالأسفل، وصخور حجر رمل تايبيست الكامبري الأفقية بالأعلى، مع ظهور صخور الكونجلوميرات القاعدية كشاهد مباشر على تقدم البحر.',
      descriptionEn:
        'High-resolution archival photograph of the Grand Canyon strata in Arizona, illustrating the dramatic angular unconformity between tilted Precambrian fault blocks below and flat-lying Cambrian Tapeats Sandstone above, with distinct basal conglomerate lags.',
      locationAr: 'الأخدود العظيم، هضبة كولورادو، أريزونا، الولايات المتحدة الأمريكية',
      locationEn: 'Grand Canyon National Park, Colorado Plateau, Arizona, USA',
      dateOrEraAr: 'مكشف جيولوجي (عمر الصخور: 1.7 مليار سنة إلى 500 مليون سنة)',
      dateOrEraEn: 'Geological Exposure (Rock Age: 1.7 Ga to 500 Ma)',
    });
  };

  return (
    <div
      className={`rounded-2xl border p-5 md:p-8 transition-all ${
        isContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : isLight
          ? 'bg-emerald-50/40 text-stone-900 border-emerald-200 shadow-sm'
          : 'bg-stone-950/80 text-stone-100 border-emerald-900/50 shadow-2xl backdrop-blur-md'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 border-emerald-500/20">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                isContrast
                  ? 'bg-amber-400 text-black'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-sm'
              }`}
            >
              <Mountain className="w-3.5 h-3.5" />
              {isArabic ? 'متحف الجيولوجيا التاريخية والطباقية' : 'Historical Stratigraphy Archive'}
            </span>
            <span className="text-xs text-emerald-500/90 font-mono">
              {isArabic ? 'الأخدود العظيم 4K' : 'Grand Canyon 4K Exposure'}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            {isArabic
              ? 'استوديو أسطح عدم التوافق والتراكيب الجيولوجية'
              : 'Stratigraphic Unconformities & Structural Geology Studio'}
          </h2>
          <p className="text-sm mt-1 text-stone-400 max-w-3xl leading-relaxed">
            {isArabic
              ? 'دراسة تفاعلية لأسطح عدم التوافق الثلاثة (المتباين، الزاوي، الانقطاعي)، وشواهد التعرف عليها (الكونجلوميرات، انقطاع الفوالق، الفجوة الحفرية)، ومختبر تعاقب الأحداث والتأريخ النسبي للصخور.'
              : 'Interactive masterclass on the three unconformity types (Nonconformity, Angular, Disconformity), field identification criteria, structural folds and faults, and the relative dating sequence lab.'}
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md ${
            isContrast
              ? 'bg-amber-400 text-black hover:bg-amber-300'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-500/25'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'معاينة الأخدود العظيم 4K' : 'View 4K Canyon Exposure'}</span>
        </button>
      </div>

      {/* Main Grid: Interactive Canvas & Hotspot Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left: 4K Archival Photographic Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div
            className={`relative rounded-xl overflow-hidden border shadow-inner group ${
              isContrast ? 'border-amber-400 bg-black' : 'border-emerald-900/40 bg-stone-900'
            }`}
            style={{ minHeight: '380px' }}
          >
            <img
              src={grandCanyonPhoto}
              alt="Grand Canyon Great Angular Unconformity"
              className="w-full h-auto object-contain max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Hotspot Markers */}
            {UNCONFORMITY_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
                  aria-label={isArabic ? spot.titleAr : spot.titleEn}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isSelected
                      ? 'ring-4 ring-emerald-400 bg-amber-400 text-stone-950 scale-125 shadow-xl'
                      : 'bg-stone-900/90 text-emerald-300 border border-emerald-400/70 hover:scale-110 hover:bg-emerald-500 hover:text-black'
                  }`}
                >
                  <Mountain className={`w-4 h-4 ${isSelected ? 'animate-pulse' : ''}`} />
                  <span className="sr-only">{isArabic ? spot.titleAr : spot.titleEn}</span>
                </button>
              );
            })}

            {/* Canvas Overlay Badge */}
            <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-500/30 text-xs text-emerald-200/90 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {isArabic
                  ? 'انقر على النقاط الاستكشافية لفحص عدم التوافق الزاوي وكونجلوميرات الترسيب'
                  : 'Click markers to inspect angular contact & basal conglomerate'}
              </span>
            </div>
          </div>

          {/* Quick Select Buttons under Canvas */}
          <div className="flex flex-wrap gap-2 pt-1">
            {UNCONFORMITY_HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setSelectedHotspot(spot)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all border ${
                  selectedHotspot.id === spot.id
                    ? isContrast
                      ? 'bg-amber-400 text-black border-amber-400'
                      : 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                    : isLight
                    ? 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                    : 'bg-stone-900/70 text-stone-300 border-stone-800 hover:bg-stone-800'
                }`}
              >
                {isArabic ? spot.titleAr.split('(')[0] : spot.titleEn.split('(')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Selected Hotspot Deep Analytical Inspector */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div
            className={`p-5 rounded-xl border h-full flex flex-col justify-between ${
              isContrast
                ? 'bg-stone-950 border-amber-400'
                : isLight
                ? 'bg-white border-emerald-200 shadow-sm'
                : 'bg-stone-900/70 border-emerald-900/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b pb-3 mb-3 border-emerald-500/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
                </span>
                <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                  {isArabic ? 'مكشف طباقي' : 'Stratigraphic Unit'}
                </span>
              </div>

              <h3 className="text-lg font-black text-emerald-400 mb-2">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </h3>

              <p className="text-sm leading-relaxed text-stone-300 mb-4">
                {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
              </p>

              <div
                className={`p-3.5 rounded-lg border text-xs leading-relaxed space-y-2 ${
                  isLight
                    ? 'bg-emerald-50/80 border-emerald-200 text-stone-800'
                    : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 text-emerald-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'الشاهد الحقلي التشخيصي:' : 'Field Diagnostic Criteria:'}</span>
                </div>
                <div>
                  {isArabic
                    ? selectedHotspot.diagnosticEvidenceAr
                    : selectedHotspot.diagnosticEvidenceEn}
                </div>
              </div>
            </div>

            {/* Curriculum Rule Banner */}
            <div className="mt-4 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {isArabic
                  ? 'قاعدة ثانوية عامة: الكونجلوميرات يعلو سطح عدم التوافق مباشرة'
                  : 'Curriculum Rule: Basal conglomerate directly caps unconformity'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Unconformity Types Deep Study Tabs */}
      <div
        className={`my-8 p-6 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-amber-400'
            : isLight
            ? 'bg-stone-50 border-emerald-200 shadow-sm'
            : 'bg-stone-900/60 border-emerald-800/40'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-xl font-black text-emerald-400 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-500" />
              <span>{isArabic ? 'أنواع أسطح عدم التوافق الثلاثة (منهج الثانوية العامة)' : 'The 3 Unconformity Types'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic
                ? 'قارن بين عدم التوافق المتباين، الزاوي، والانقطاعي وشواهد التمييز الميداني لكل منها'
                : 'Compare Nonconformity, Angular Unconformity, and Disconformity with field diagnostics'}
            </p>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {UNCONFORMITY_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveUnconformityTab(type.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeUnconformityTab === type.id
                  ? isContrast
                    ? 'bg-amber-400 text-black border-amber-400'
                    : 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                  : isLight
                  ? 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                  : 'bg-stone-900/70 text-stone-300 border-stone-800 hover:bg-stone-800'
              }`}
            >
              {isArabic ? type.nameAr : type.nameEn}
            </button>
          ))}
        </div>

        {/* Type Detail Panel */}
        <div
          className={`p-5 rounded-xl border ${
            isContrast
              ? 'bg-stone-950 border-amber-400'
              : isLight
              ? 'bg-white border-emerald-200 shadow-sm'
              : 'bg-stone-900/70 border-emerald-900/30'
          }`}
        >
          <div className="mb-4">
            <h4 className="text-base font-black text-emerald-300 mb-1">
              {isArabic ? activeType.nameAr : activeType.nameEn}
            </h4>
            <p className="text-sm text-stone-300 leading-relaxed">
              {isArabic ? activeType.definitionAr : activeType.definitionEn}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div
              className={`p-3.5 rounded-lg border ${
                isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950/60 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-amber-500 mb-1">
                {isArabic ? 'الصخور السفلية (الأقدم):' : 'Lower (Older) Rock Unit:'}
              </div>
              <div className="text-xs text-stone-200 leading-relaxed">
                {isArabic ? activeType.lowerRockAr : activeType.lowerRockEn}
              </div>
            </div>

            <div
              className={`p-3.5 rounded-lg border ${
                isLight ? 'bg-sky-50/50 border-sky-200' : 'bg-stone-950/60 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-sky-400 mb-1">
                {isArabic ? 'الصخور العلوية (الأحدث):' : 'Upper (Younger) Rock Unit:'}
              </div>
              <div className="text-xs text-stone-200 leading-relaxed">
                {isArabic ? activeType.upperRockAr : activeType.upperRockEn}
              </div>
            </div>
          </div>

          {/* Field Evidences List */}
          <div
            className={`p-4 rounded-lg border ${
              isLight ? 'bg-emerald-50/60 border-emerald-200' : 'bg-emerald-950/20 border-emerald-500/20'
            }`}
          >
            <div className="text-xs font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isArabic ? 'شواهد ودلائل وجود هذا السطح في الحقل:' : 'Field Diagnostic Criteria:'}</span>
            </div>
            <ul className="text-xs space-y-1.5">
              {(isArabic ? activeType.fieldEvidencesAr : activeType.fieldEvidencesEn).map((ev, i) => (
                <li key={i} className="flex items-start gap-2 text-stone-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{ev}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Diagram schematic hint */}
          <div className="mt-3 text-xs text-stone-400 flex items-center gap-2 italic">
            <Eye className="w-3.5 h-3.5 text-stone-500" />
            <span>{isArabic ? activeType.diagramHintAr : activeType.diagramHintEn}</span>
          </div>
        </div>
      </div>

      {/* Structural Geology Companion: Folds & Faults */}
      <div
        className={`my-8 p-6 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-amber-400'
            : isLight
            ? 'bg-stone-50 border-stone-200 shadow-sm'
            : 'bg-stone-900/60 border-stone-800'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-xl font-black text-amber-400 flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-500" />
              <span>{isArabic ? 'التراكيب الجيولوجية الثانوية (التكتونية): الطيات والفوالق' : 'Secondary Structural Geology: Folds & Faults'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic
                ? 'العناصر التركيبية المصاحبة لحركات الأرض والمقطوعة بأسطح عدم التوافق'
                : 'Tectonic structures truncated by stratigraphic unconformities'}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveStructureTab('faults')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                activeStructureTab === 'faults'
                  ? 'bg-amber-500 text-black border-amber-400 shadow-sm'
                  : 'bg-stone-800 text-stone-300 border-stone-700'
              }`}
            >
              {isArabic ? 'الفوالق (Faults)' : 'Faults'}
            </button>
            <button
              onClick={() => setActiveStructureTab('folds')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                activeStructureTab === 'folds'
                  ? 'bg-amber-500 text-black border-amber-400 shadow-sm'
                  : 'bg-stone-800 text-stone-300 border-stone-700'
              }`}
            >
              {isArabic ? 'الطيات (Folds)' : 'Folds'}
            </button>
          </div>
        </div>

        {activeStructureTab === 'faults' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-red-400 mb-1">{isArabic ? 'فالق عادي (Normal Fault)' : 'Normal Fault'}</div>
              <div className="text-xs text-stone-300 leading-relaxed">
                {isArabic
                  ? 'ينشأ بفعل قوى شد تكتونية؛ تتحرك فيه صخور الحائط العلوي إلى أسفل بالنسبة لصخور الحائط السفلي. يسبب زيادة في مساحة القشرة الأرضية وتكراراً رأسياً مفقوداً.'
                  : 'Formed by extensional tensional stress; hanging wall moves downward relative to footwall, resulting in crustal extension.'}
              </div>
              <div className="mt-2 text-[11px] font-mono text-stone-400">{isArabic ? 'قوة الشد (Tension)' : 'Tensional Force'}</div>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-amber-400 mb-1">
                {isArabic ? 'فالق معكوس / دسر (Reverse & Thrust)' : 'Reverse / Thrust Fault'}
              </div>
              <div className="text-xs text-stone-300 leading-relaxed">
                {isArabic
                  ? 'ينشأ بفعل قوى ضغط؛ تتحرك فيه صخور الحائط العلوي إلى أعلى بالنسبة لصخور الحائط السفلي. إذا قل ميل مستوى الفالق عن 45° يسمى فالق دسر (يزحف أفقياً تقريباً).'
                  : 'Formed by compressional stress; hanging wall thrusts upward relative to footwall. When dip is <45°, it is classified as a low-angle thrust.'}
              </div>
              <div className="mt-2 text-[11px] font-mono text-stone-400">{isArabic ? 'قوة الضغط (Compression)' : 'Compressional Force'}</div>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-sky-400 mb-1">
                {isArabic ? 'فالق ذو حركة أفقية / بارز / خندقي' : 'Strike-Slip & Horst/Graben'}
              </div>
              <div className="text-xs text-stone-300 leading-relaxed">
                {isArabic
                  ? 'الحركة الأفقية: إزاحة جانبية دون حركة رأسية. الفالق البارز (Horst) والخندقي (Graben): فوالق عادية تتحد في الحائط السفلي (بارز) أو الحائط العلوي (خندق/أخدود).'
                  : 'Strike-slip involves lateral shear without vertical offset. Horst and graben structures form when adjacent normal faults uplift or drop fault blocks.'}
              </div>
              <div className="mt-2 text-[11px] font-mono text-stone-400">{isArabic ? 'قص وقوى مركبة' : 'Shear & Block Faulting'}</div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-emerald-400 mb-1">{isArabic ? 'طية محدبة (Anticline)' : 'Anticline'}</div>
              <div className="text-xs text-stone-300 leading-relaxed">
                {isArabic
                  ? 'تنثني فيها الطبقات إلى أعلى؛ تتباعد الأجنحة بعيداً عن المستوى المحوري، وتوجد أقدم الطبقات في المركز والمحور.'
                  : 'Upward-arching convex fold; limbs dip away from the axial plane, and the oldest strata are located at the core.'}
              </div>
              <div className="mt-2 text-[11px] text-emerald-300 font-mono">
                {isArabic ? 'الأقدم في المركز' : 'Oldest strata in core'}
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-purple-400 mb-1">{isArabic ? 'طية مقعرة (Syncline)' : 'Syncline'}</div>
              <div className="text-xs text-stone-300 leading-relaxed">
                {isArabic
                  ? 'تنثني فيها الطبقات إلى أسفل؛ تميل الأجنحة باتجاه المستوى المحوري، وتوجد أحدث الطبقات في المركز والمحور.'
                  : 'Downward-trough concave fold; limbs dip toward the axial plane, and the youngest strata are located at the core.'}
              </div>
              <div className="mt-2 text-[11px] text-purple-300 font-mono">
                {isArabic ? 'الأحدث في المركز' : 'Youngest strata in core'}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Relative Dating Sequence Simulator Lab */}
      <div className="mt-8 border-t pt-6 border-emerald-500/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-xl font-black text-emerald-400 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-500" />
              <span>{isArabic ? 'مختبر رتب الأحداث الجيولوجية والتأريخ النسبي' : 'Geological Relative Dating Sequence Lab'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic
                ? 'طبق مبادئ الجيولوجيا (التعاقب الطبقي، القاطع والمقطوع، أسطح عدم التوافق) لتحديد التسلسل الزمني للأحداث'
                : 'Apply geologic principles (Superposition, Cross-cutting, Unconformities) to date events from oldest to youngest'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setRevealedDatingStep(RELATIVE_DATING_CHALLENGE.length)}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold border transition-all ${
                isLight
                  ? 'bg-stone-200 text-stone-800 hover:bg-stone-300 border-stone-300'
                  : 'bg-stone-800 text-stone-200 hover:bg-stone-700 border-stone-700'
              }`}
            >
              {isArabic ? 'كشف التسلسل كاملاً' : 'Reveal All Steps'}
            </button>
            <button
              onClick={() => setRevealedDatingStep(1)}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold border transition-all ${
                isLight
                  ? 'bg-stone-200 text-stone-800 hover:bg-stone-300 border-stone-300'
                  : 'bg-stone-800 text-stone-200 hover:bg-stone-700 border-stone-700'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Step-by-Step Flow */}
        <div className="space-y-3">
          {RELATIVE_DATING_CHALLENGE.map((ev) => {
            const isRevealed = ev.step <= revealedDatingStep;
            return (
              <div
                key={ev.step}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isRevealed
                    ? isContrast
                      ? 'bg-stone-950 border-amber-400'
                      : isLight
                      ? 'bg-white border-emerald-300 shadow-sm'
                      : 'bg-stone-900/80 border-emerald-600/40'
                    : 'opacity-50 bg-stone-950/40 border-stone-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                        isRevealed ? 'bg-emerald-500 text-black' : 'bg-stone-800 text-stone-500'
                      }`}
                    >
                      {ev.step}
                    </span>
                    <span className="font-bold text-sm text-stone-200">
                      {isArabic ? ev.nameAr : ev.nameEn}
                    </span>
                  </div>

                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${ev.tagColor}`}>
                    {isArabic ? `الحدث #${ev.step} (من الأقدم للأحدث)` : `Event #${ev.step} (Oldest to Youngest)`}
                  </span>
                </div>

                {isRevealed ? (
                  <div className="mt-2.5 pt-2.5 border-t border-stone-800 text-xs text-stone-300 flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isArabic ? ev.ruleAr : ev.ruleEn}</span>
                  </div>
                ) : (
                  <div className="mt-2 text-xs text-stone-500 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'انقر على التالي لكشف التفسير العلمي' : 'Step locked. Advance to reveal reasoning.'}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Step Controller */}
        {revealedDatingStep < RELATIVE_DATING_CHALLENGE.length && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setRevealedDatingStep((prev) => Math.min(RELATIVE_DATING_CHALLENGE.length, prev + 1))}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                isContrast
                  ? 'bg-amber-400 text-black'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              <span>{isArabic ? 'كشف الحدث التالي بالترتيب' : 'Reveal Next Chronological Event'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* HiRes Modal Viewer */}
      <HiResImageModal
        isOpen={Boolean(modalData)}
        onClose={() => setModalData(null)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
