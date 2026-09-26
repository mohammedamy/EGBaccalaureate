import React, { useState } from 'react';
import {
  Compass,
  Maximize2,
  Sparkles,
  BookOpen,
  Layers,
  RotateCcw,
} from 'lucide-react';
import euclidPhoto from '../../../assets/math/euclid_elements_geometry_300bc.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface EuclidHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificProofAr: string;
  scientificProofEn: string;
}

export const EUCLID_HOTSPOTS: EuclidHotspot[] = [
  {
    id: 'pythagorean_brides_chair',
    xPct: 62.0,
    yPct: 45.0,
    titleAr: 'مبرهنة فيثاغورس (المقالة الأولى، القضية 47) - كرسي العروس',
    titleEn: 'Proposition I.47: Pythagorean Theorem ("Bride’s Chair" Windmill Figure)',
    categoryAr: 'الهندسة الإقليدية البراهينية',
    categoryEn: 'Euclidean Geometric Proofs',
    descAr:
      'الرسم الهندسي الأيقوني الشهير في كتاب الأصول الذي يبرهن أن مساحة المربع المنشأ على الوتر تساوي مجموع مساحتي المربعين المنشأين على الضلعين الآخرين (a² + b² = c²)، من خلال تقسيم مربع الوتر إلى مستطيلين عبر إسقاط عمود من رأس الزاوية القائمة.',
    descEn:
      'The iconic windmill or "Bride’s Chair" diagram proving Euclid’s Proposition I.47: the square erected on the hypotenuse equals the sum of the squares erected on the two legs. Euclid establishes equality by shearing triangles into parallelograms of equal base and height without relying on algebraic coordinates.',
    scientificProofAr:
      'يرتكز البرهان على تطابق المثلثات وقاعدة تساوي مساحات متوازيات الأضلاع المشتركة في نفس القاعدة والمحصورة بين متوازيين (قضية 35 و 41).',
    scientificProofEn:
      'The proof hinges on congruent triangles and shearing: parallelograms on the same base and between the same parallels have equal area (Propositions I.35 & I.41).',
  },
  {
    id: 'parallel_postulate_five',
    xPct: 35.0,
    yPct: 42.0,
    titleAr: 'المصادرة الخامسة (مسلمة التوازي الإقليدية)',
    titleEn: 'The Fifth Postulate (Euclidean Parallel Axiom)',
    categoryAr: 'البديهيات والمسلمات',
    categoryEn: 'Axiomatic Foundations',
    descAr:
      'المسلمة الأكثر إثارة للجدل في تاريخ الرياضيات: إذا قطع مستقيم مستقيمين وكون زاويتين داخلتين في جهة واحدة مجموعهما أقل من قائمتين، فإن المستقيمين يتلاقيان إذا مُدا في تلك الجهة. قادت محاولات إثباتها إلى ولادة الهندسات اللاإقليدية (لوباتفيسكي، ريمان).',
    descEn:
      'The most scrutinized axiom in mathematical history: if a straight line falling on two straight lines makes interior angles on the same side less than two right angles, the two lines meet indefinitely on that side. Centuries of failed proofs directly yielded non-Euclidean hyperbolic and elliptic geometries.',
    scientificProofAr:
      'تعد المسلمة الخامسة الركيزة الأساسية التي يستند إليها إثبات أن مجموع زوايا أي مثلث يساوي 180 درجة بدقة في الفضاء الإقليدي المستوي.',
    scientificProofEn:
      'The parallel postulate is fundamentally required to prove that the interior angles of any planar triangle sum to exactly two right angles (180°).',
  },
  {
    id: 'compass_straightedge_axioms',
    xPct: 75.0,
    yPct: 72.0,
    titleAr: 'أدوات الإنشاء الهندسي: الفرجار والمسطرة غير المدرجة',
    titleEn: 'Classical Compass & Straightedge Construction Axioms',
    categoryAr: 'الإنشاءات الهندسية',
    categoryEn: 'Classical Constructions',
    descAr:
      'قوانين الإنشاء الإقليدي الصارم الذي يشترط رسم الخطوط المستمرة وتدوير الدوائر باستخدام المسطرة المستقيمة والفرجار فقط دون أي تدريج قياسي رقمي، وهو ما استندت إليه مسائل العصور الكلاسيكية الثلاث: تربيع الدائرة، وتثليث الزاوية، ومضاعفة المكعب.',
    descEn:
      'Euclidean constructive geometry restricts instruments strictly to an idealized collapsing compass and an unmarked straightedge. This foundational restriction framed the three impossible classical Greek geometric puzzles: squaring the circle, trisecting the angle, and doubling the cube.',
    scientificProofAr:
      'أثبتت نظرية غالوا في القرن التاسع عشر أن الإنشاءات الممكنة بالمسطرة والفرجار تتطابق رياضياً مع الأعداد القابلة للإنشاء الناتجة عن امتدادات حقول من الدرجة الثانية 2ⁿ.',
    scientificProofEn:
      'Galois theory proved in the 19th century that compass-and-straightedge constructible lengths correspond precisely to field extensions of degree 2ⁿ.',
  },
  {
    id: 'prime_infinitude_proof',
    xPct: 30.0,
    yPct: 25.0,
    titleAr: 'برهان لا نهائية الأعداد الأولية (المقالة التاسعة، القضية 20)',
    titleEn: 'Infinitude of Prime Numbers (Book IX, Proposition 20)',
    categoryAr: 'نظرية الأعداد الإقليدية',
    categoryEn: 'Euclidean Number Theory',
    descAr:
      'برهان إقليدس البديع بالتناقض على أن الأعداد الأولية أكثر من أي عدد محدد معطى؛ فبافتراض وجود قائمة منتهية p₁·p₂···pₙ + 1، فإن هذا العدد الجديد إما أن يكون أولياً بحد ذاته أو يقبل القسمة على عدد أولي غير موجود في القائمة.',
    descEn:
      'Euclid’s celebrated proof by contradiction establishing that prime numbers are more numerous than any assigned multitude. Considering N = p₁p₂···pₙ + 1, N is either prime itself or divisible by a prime factor not in the finite set, refuting any finiteness assumption.',
    scientificProofAr:
      'يعد هذا البرهان المعيار الذهبي للجمال الرياضي والصرامة البرهانية في نظرية الأعداد التحليلية حتى يومنا هذا.',
    scientificProofEn:
      'Universally acknowledged as the golden archetype of mathematical beauty and deductive elegance in analytic and algebraic number theory.',
  },
  {
    id: 'greek_scholion_annotations',
    xPct: 18.0,
    yPct: 65.0,
    titleAr: 'الحواشي الهامشية والمخطوطات البيزنطية لكتاب الأصول',
    titleEn: 'Marginal Scholia & Byzantine Transmission Lineage',
    categoryAr: 'التاريخ وعلم المخطوطات',
    categoryEn: 'Paleography & Transmission',
    descAr:
      'حواشٍ شروحية باللغة اليونانية القديمة كتبها علماء الإسكندرية وبيزنطة مثل ثيون الإسكندري وبروكلس، وتوضح كيفية وصول النص الإقليدي إلى بغداد حيث تُرجم للعربية على يد الحجاج بن مطر وثابت بن قرة، ومنها إلى اللاتينية الأوروبية.',
    descEn:
      'Ancient Greek marginal scholia added by Alexandrian and Byzantine commentators, including Theon of Alexandria and Proclus. This textual tradition migrated directly to Baghdad’s Bayt al-Hikma, translated by al-Hajjaj ibn Matar and Thabit ibn Qurra, preserving geometry for the Renaissance.',
    scientificProofAr:
      'تعتمد المناهج الثانوية العالمية والمصرية بالكامل على المسلمات الخمس والمفاهيم المشتركة (Common Notions) الواردة في مطلع المقالة الأولى.',
    scientificProofEn:
      'Modern secondary school Euclidean geometry curricula rest completely on the 5 postulates and common notions formulated in Book I.',
  },
];

export const EuclidElementsStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<EuclidHotspot>(EUCLID_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Dynamic Pythagorean Theorem & Geometric Morphing Engine
  const [legA, setLegA] = useState<number>(3);
  const [legB, setLegB] = useState<number>(4);

  // Canonical Pythagorean Triples presets
  const presets = [
    { label: '(3, 4, 5)', a: 3, b: 4 },
    { label: '(5, 12, 13)', a: 5, b: 12 },
    { label: '(8, 15, 17)', a: 8, b: 15 },
    { label: '(7, 24, 25)', a: 7, b: 24 },
  ];

  // Mathematical Calculations
  const hypotenuseC = Number(Math.sqrt(legA * legA + legB * legB).toFixed(2));
  const areaSquareA = legA * legA;
  const areaSquareB = legB * legB;
  const areaSquareC = hypotenuseC * hypotenuseC;
  const triangleArea = Number((0.5 * legA * legB).toFixed(2));
  const inradius = Number(((legA + legB - hypotenuseC) / 2).toFixed(2));
  const altitudeH = Number(((legA * legB) / hypotenuseC).toFixed(2));
  const segmentP = Number(((legA * legA) / hypotenuseC).toFixed(2));
  const segmentQ = Number(((legB * legB) / hypotenuseC).toFixed(2));

  const modalData: HiResImageModalData = {
    imageUrl: euclidPhoto,
    titleAr: 'مخطوطة أصول الهندسة لإقليدس السكندري (حوالي 300 ق.م) - المقالة الأولى، قضية 47',
    titleEn: 'Euclid’s Stoicheia (The Elements, c. 300 BCE): Book I, Proposition 47 Folio',
    subtitleAr: 'مبرهنة فيثاغورس، شكل كرسي العروس، مصادرات الفرجار والمسطرة، ومسلمة التوازي',
    subtitleEn: 'Pythagorean Theorem "Bride’s Chair", Compass & Straightedge Axioms, and Parallel Postulate',
    descriptionAr:
      'معروضة متحفية نادرة لأعظم نص علمي تدرج في تاريخ المعرفة الإنسانية لأكثر من 2300 عام. يعرض المخطوط البرهان الإقليدي العبقري الصارم لمبرهنة فيثاغورس (a² + b² = c²) دون استخدام الجبر الإحداثي، مع أدوات الإنشاء الهندسية الأصلية كفرجار البرونز ومسطرة العاج.',
    descriptionEn:
      'A monumental archival display of Euclid’s Elements, the most influential deductive mathematical work ever composed. Featuring Proposition I.47 (the Pythagorean Theorem) proved via geometric dissection and shears, displayed with authentic ancient bronze drafting compass and bone straightedge.',
    dateOrEraAr: 'العصر الهلنستي الذهبي - مدرسة الإسكندرية (حوالي 300 قبل الميلاد)',
    dateOrEraEn: 'Hellenistic Golden Age & Mouseion of Alexandria (c. 300 BCE)',
    locationAr: 'مكتبة بودليان، جامعة أكسفورد، المملكة المتحدة / خزانة الإسكندرية',
    locationEn: 'Bodleian Library, University of Oxford / Museum Archive of Alexandria',
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-emerald-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-emerald-400 text-emerald-400'
                : 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white border-emerald-400/40 shadow-emerald-500/20'
            }`}
          >
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic
                  ? 'استوديو إقليدس السكندري وأصول الهندسة (300 ق.م) - 4K'
                  : 'Euclid’s Elements & Axiomatic Geometry Studio (300 BCE) - 4K'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-emerald-400 text-black border-emerald-300'
                    : isLight
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                }`}
              >
                Archival 4K Studio
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'مخطوطة كتاب الأصول، برهان مبرهنة فيثاغورس (كرسي العروس)، مسلمة التوازي، وإنشاءات الفرجار والمسطرة'
                : 'The Elements folio, Proposition I.47 Pythagorean proof, parallel postulate, and compass-straightedge constructions'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            isContrast
              ? 'bg-emerald-400 text-black border-emerald-300 hover:bg-emerald-300'
              : 'bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border-emerald-500/40'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'عرض المخطوطة بدقة 4K' : 'View 4K Archival Folio'}</span>
        </button>
      </div>

      {/* Main Studio Interactive Layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 4K Archival Plate with Pulsating Hotspots (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900 group">
            <img
              src={euclidPhoto}
              alt="Euclid Elements 300 BCE 4K Archival Folio"
              className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Interactive Hotspots Overlaid */}
            {EUCLID_HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot)}
                  style={{ top: `${hotspot.yPct}%`, left: `${hotspot.xPct}%` }}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer z-10 ${
                    isSelected
                      ? 'bg-emerald-500 text-white ring-4 ring-emerald-400/50 scale-125 shadow-lg shadow-emerald-500/50'
                      : 'bg-slate-900/80 text-emerald-300 border border-emerald-400/60 hover:scale-110 hover:bg-emerald-600 hover:text-white'
                  }`}
                >
                  <Compass className="w-4 h-4 animate-spin-slow" />
                  <span className="absolute -bottom-6 whitespace-nowrap text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-950/90 text-slate-200 border border-slate-700/80 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    {isArabic ? hotspot.titleAr.split(' ')[0] : hotspot.titleEn.split(' ')[0]}
                  </span>
                </button>
              );
            })}

            {/* Bottom Caption on Canvas */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-300 font-medium">
                {isArabic
                  ? '📍 اضغط على الدوائر التفاعلية لفحص نصوص وبراهين كتاب الأصول'
                  : '📍 Click glowing compass pins to inspect Euclid’s theorems & proofs'}
              </span>
              <span className="text-emerald-400 font-mono font-bold text-[11px]">
                Prop. I.47 • 300 BCE
              </span>
            </div>
          </div>

          {/* Active Hotspot Deep Inspection Card */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              isContrast
                ? 'bg-black border-emerald-400 text-white'
                : isLight
                ? 'bg-emerald-50/60 border-emerald-200 text-slate-900'
                : 'bg-slate-900/90 border-emerald-500/30 text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                {activeHotspot.id}
              </span>
            </div>

            <h3 className="text-sm font-black mb-1.5 text-emerald-400">
              {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
            </h3>

            <p className="text-xs leading-relaxed mb-3">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-emerald-500/20 text-xs">
              <span className="font-bold text-emerald-300 block mb-1">
                {isArabic ? 'الصرامة البرهانية وعلاقتها بالمنهج:' : 'Mathematical Proof & Curriculum Rigor:'}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Pythagorean Theorem & Triangle Dissection Simulator (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div
            className={`p-4 rounded-xl border flex flex-col gap-4 ${
              isContrast
                ? 'bg-black border-emerald-400 text-white'
                : isLight
                ? 'bg-slate-50 border-slate-200 text-slate-900'
                : 'bg-slate-900/90 border-slate-800 text-slate-100'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs sm:text-sm font-black">
                  {isArabic
                    ? 'محاكي براهين مبرهنة فيثاغورس الهندسية (إقليدس)'
                    : 'Euclidean Pythagorean Dissection Engine'}
                </h3>
              </div>
              <button
                onClick={() => {
                  setLegA(3);
                  setLegB(4);
                }}
                className="text-[11px] font-bold text-slate-400 hover:text-emerald-400 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isArabic ? 'إعادة ضبط' : 'Reset'}</span>
              </button>
            </div>

            {/* Presets for Canonical Triples */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                {isArabic ? 'ثلاثيات فيثاغورس القياسية (Pythagorean Triples):' : 'Canonical Pythagorean Triples:'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      setLegA(preset.a);
                      setLegB(preset.b);
                    }}
                    className={`py-1 px-2 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                      legA === preset.a && legB === preset.b
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-sm'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders for Legs a and b */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-emerald-400">{isArabic ? 'الضلع القائم الأول (a):' : 'First Leg (a):'}</span>
                  <span className="font-mono">{legA} وحدات</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="15"
                  step="1"
                  value={legA}
                  onChange={(e) => setLegA(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-teal-400">{isArabic ? 'الضلع القائم الثاني (b):' : 'Second Leg (b):'}</span>
                  <span className="font-mono">{legB} وحدات</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="1"
                  value={legB}
                  onChange={(e) => setLegB(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Pythagorean Theorem Equation Display */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-center space-y-1.5">
              <span className="text-[11px] text-slate-400 font-bold block">
                {isArabic ? 'صيغة مبرهنة فيثاغورس الإقليدية (I.47):' : 'Euclidean I.47 Relation:'}
              </span>
              <div className="text-base sm:text-lg font-black text-emerald-400 tracking-wider">
                {legA}² + {legB}² = {areaSquareA} + {areaSquareB} = {areaSquareC} = ({hypotenuseC})²
              </div>
              <div className="text-[11px] text-teal-300 font-semibold">
                c = √({legA}² + {legB}²) = √{areaSquareA + areaSquareB} = {hypotenuseC}
              </div>
            </div>

            {/* Secondary Geometric Metrics Table */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">
                  {isArabic ? 'مساحة المثلث (Area):' : 'Triangle Area:'}
                </span>
                <span className="font-mono font-black text-emerald-400 text-sm">
                  {triangleArea} وحدات²
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">
                  {isArabic ? 'الارتفاع الساقط على الوتر (h):' : 'Altitude to Hypotenuse (h):'}
                </span>
                <span className="font-mono font-black text-teal-400 text-sm">
                  {altitudeH} وحدات
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">
                  {isArabic ? 'نصف قطر الدائرة الداخلية (r):' : 'Inscribed Circle Radius (r):'}
                </span>
                <span className="font-mono font-black text-amber-400 text-sm">
                  {inradius} وحدات
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">
                  {isArabic ? 'مسقطا الضلعين (p, q):' : 'Hypotenuse Segments (p, q):'}
                </span>
                <span className="font-mono font-black text-indigo-400 text-sm">
                  {segmentP}, {segmentQ}
                </span>
              </div>
            </div>

            {/* Dynamic Geometric Graphic */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <span className="text-[10px] font-mono text-slate-400 mb-2">
                {isArabic ? 'المخطط الهندسي للمربعات المنشأة على الأضلاع' : 'Dissection Geometry of Erected Squares'}
              </span>
              <svg viewBox="0 0 280 200" className="w-full max-w-[260px] h-auto">
                {/* Right Triangle */}
                <polygon
                  points="50,140 170,140 170,60"
                  fill="rgba(16, 185, 129, 0.2)"
                  stroke="#10b981"
                  strokeWidth="2.5"
                />
                {/* Right angle marker */}
                <polyline
                  points="160,140 160,130 170,130"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.5"
                />
                {/* Square on leg a (vertical) */}
                <rect
                  x="170"
                  y="60"
                  width="80"
                  height="80"
                  fill="rgba(20, 184, 166, 0.15)"
                  stroke="#14b8a6"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <text x="210" y="105" fill="#14b8a6" fontSize="10" textAnchor="middle" fontWeight="bold">
                  b² = {areaSquareB}
                </text>
                {/* Square on leg b (horizontal) */}
                <rect
                  x="50"
                  y="140"
                  width="120"
                  height="45"
                  fill="rgba(16, 185, 129, 0.15)"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <text x="110" y="165" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">
                  a² = {areaSquareA}
                </text>
                {/* Labels */}
                <text x="110" y="132" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="bold">
                  a = {legA}
                </text>
                <text x="180" y="100" fill="#e2e8f0" fontSize="11" textAnchor="start" fontWeight="bold">
                  b = {legB}
                </text>
                <text x="100" y="90" fill="#f59e0b" fontSize="11" textAnchor="middle" fontWeight="bold">
                  c = {hypotenuseC}
                </text>
              </svg>
            </div>

            {/* Curricular Note */}
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-slate-300">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isArabic ? 'ربط وثيق بمنهج الهندسة وحساب المثلثات:' : 'Egyptian Curriculum Integration:'}</span>
              </span>
              <span>
                {isArabic
                  ? 'تشكل مبرهنة فيثاغورس ونظرية إقليدس للمثلث القائم (h² = p·q و a² = c·p) حجر الأساس لحساب المثلثات والهندسة التحليلية والفراغية للثانوية العامة.'
                  : 'Euclid’s right triangle theorems form the direct basis for secondary school trigonometry, analytic geometry, and 3D vectors.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4K Modal */}
      <HiResImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
