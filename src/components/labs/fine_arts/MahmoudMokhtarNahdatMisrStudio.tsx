import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Landmark,
  Scale,
  Award,
  Layers,
  TrendingUp,
} from 'lucide-react';
import mokhtarPhoto from '../../../assets/fine_arts/mokhtar_nahdat_misr_1928.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface MokhtarHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificInsightAr: string;
  scientificInsightEn: string;
}

export const MOKHTAR_HOTSPOTS: MokhtarHotspot[] = [
  {
    id: 'awakening_sphinx_resurgence',
    xPct: 48.0,
    yPct: 34.0,
    titleAr: 'أبو الهول الناهض ورمزية اليقظة الحضارية',
    titleEn: 'The Awakening Sphinx & Civilizational Resurgence',
    categoryAr: 'الرمزية الوطنية وفلسفة التكوين',
    categoryEn: 'National Iconography & Sculpture Dynamics',
    descAr:
      'يجسد تمثال أبو الهول في رؤية محمود مختار انبعاث مصر الخالدة بعد سبات طويل؛ إذ لا يظهر رابضاً ومستسلماً كما في أصله الفرعوني، بل يستند على قوائمه الأمامية في حركة ديناميكية تدل على التوثب والنهوض. يعكس هذا التحول النحتي العبقري روح ثورة 1919 بقيادة سعد زغلول واليقظة الوطنية لاستعادة الاستقلال والسيادة.',
    descEn:
      'In Mahmoud Mokhtar’s visionary masterpiece, the colossal Sphinx is not passive or dormant as in ancient antiquity; rather, it rises powerfully upon its forepaws in a dynamic posture of awakening. This sculptural breakthrough embodied the spirit of Egypt’s 1919 Revolution, symbolizing a sovereign civilization rising into modernity.',
    scientificInsightAr:
      'الخط التكويني الأفقي لجسد أبو الهول (بطول 15 متراً) يمنح العمل ثقلاً ميكانيكياً ورسوخاً أرضياً هائلاً، يمهد للانطلاق الصاعد لتمثال الفلاحة المصرية المجاورة له.',
    scientificInsightEn:
      'The massive horizontal compositional base of the Sphinx (spanning 15 meters) provides grounding structural equilibrium that anchors the vertical upward thrust of the adjacent peasant woman.',
  },
  {
    id: 'veillifting_fellaha_symbolism',
    xPct: 72.0,
    yPct: 32.0,
    titleAr: 'الفلاحة المصرية ورفع البرقع (رمزية التحرر والمستقبل)',
    titleEn: 'The Peasant Woman Unveiling (Emancipation & Future)',
    categoryAr: 'النهضة المجتمعية وحرية المرأة',
    categoryEn: 'Social Modernity & Women’s Liberation',
    descAr:
      'تقف الفلاحة المصرية منتصبة القامة بشموخ وكبرياء، تضع يدها اليمنى على كتف أبو الهول كرمز للالتحام مع التاريخ، بينما ترفع بيدها اليسرى البرقع عن وجهها لتتطلع نحو الأفق المشرق. ترمز هذه اللفتة التعبيرية إلى ولادة مصر الحديثة، وتعليم المرأة، وتحرر المجتمع بقيادة رائدات التنوير مثل هدى شعراوي.',
    descEn:
      'The Egyptian peasant woman (Al-Fellaha) stands erect with serene majesty, resting her right hand upon the Sphinx’s shoulder while raising her veil (al-burqu’) with her left hand to gaze into the luminous horizon. This gesture captures modern national sovereignty, rural dignity, and the feminist awakening led by pioneers like Huda Sha’arawi.',
    scientificInsightAr:
      'استخدم مختار الثنيات النحتية العمودية الصارمة لرداء الفلاحة (*الجلابية*) لمحاكاة خطوط الأعمدة الإغريقية والفرعونية القديمة، محققاً استطالة بصرية توحي بالخلود والصلابة.',
    scientificInsightEn:
      'Mokhtar utilized vertical fluting folds in the woman’s traditional robe to echo the fluted shafts of classical Egyptian and Greek columns, imparting architectural verticality and timeless monumentality.',
  },
  {
    id: 'aswan_pink_granite_medium',
    xPct: 30.0,
    yPct: 56.0,
    titleAr: 'جرانيت أسوان الوردي (صلابة المادة وخلود الحجر)',
    titleEn: 'Aswan Rose-Pink Granite (Enduring Geological Medium)',
    categoryAr: 'علم المعادن وخواص الصخور النحتية',
    categoryEn: 'Petrology & Sculptural Materiality',
    descAr:
      'أصر مختار على نحت الصرح بالكامل من صخور الجرانيت الوردي المستخرجة من محاجر أسوان النوبية، وهي ذات الصخور النارية الصلبة التي استخدمها الفراعنة في نحت المسلات الملكية وتماثيل رمسيس الثاني. واجه النحات تحدياً تقنياً هائلاً نظراً لصلادة الجرانيت العالية (6.5 على مقياس موهس) ومقاومته الشديدة لآلات الحفر والنقر.',
    descEn:
      'Mokhtar insisted that the monument be carved exclusively from rose-pink Aswan granite quarried in Upper Egypt—the identical igneous rock used by pharaohs for monumental obelisks and colossi. Carving this medium was an extraordinary engineering feat due to its high quartz hardness (6.5 on the Mohs scale) and resistance to weathering.',
    scientificInsightAr:
      'يتكون جرانيت أسوان من الفلسبار البوتاسي الوردي (الأورثوكليز) والكوارتز الشفاف والبيوتيت، وتبلغ كثافته 2.65 جم/سم³، مما يجعل الكتلة الإجمالية للنصب تتجاوز 220 طناً مترياً.',
    scientificInsightEn:
      'Aswan granite comprises pink potassium feldspar (orthoclase), quartz crystals, and dark biotite with a density of 2.65 g/cm³, bringing the total mass of the monument to over 220 metric tons.',
  },
  {
    id: 'neoclassical_pharaonic_synthesis',
    xPct: 35.0,
    yPct: 70.0,
    titleAr: 'التركيب النيوكلاسيكي والواقعية الفرعونية التجريدية',
    titleEn: 'Neoclassical Synthesis & Abstract Pharaonic Planes',
    categoryAr: 'الأسلوب والمدارس النحتية المعاصرة',
    categoryEn: 'Artistic Style & French-Egyptian Synthesis',
    descAr:
      'يُمثل مختار حلقة الوصل العبقرية بين النحت الكلاسيكي الغربي (تتلمذ في مدرسة الفنون الجميلة بالقاهرة على يد النحات الفرنسي غيوم لابلان، ثم في بوزار باريس) وبين الفن المصري القديم. استطاع اختزال التفاصيل المعقدة إلى سطوح هندسية نقية ومستويات كتلوية صريحة تحاكي أسلوب التكعيبية والآرت ديكو مع الحفاظ على روح الشرق.',
    descEn:
      'Mokhtar embodies a profound synthesis of Western academic sculpture (trained at Cairo Fine Arts under Guillaume Laplagne and the École des Beaux-Arts in Paris) and ancient Egyptian monumental abstraction. He distilled anatomical complexity into pure geometric planes and bold volumetric masses reminiscent of Art Deco and Cubism.',
    scientificInsightAr:
      'فاز ماكيت التمثال الصغير المصنوع من الجبس والبرونز بالميدالية الذهبية في صالون باريس للربيع عام 1920، مما جذب أنظار الدوائر الفنية الدولية نحو النهضة المصرية الحديثة.',
    scientificInsightEn:
      'Mokhtar’s preliminary bronze maquette was awarded the Gold Medal at the prestigious 1920 Paris Salon des Artistes Français, drawing global acclaim to modern Egyptian arts.',
  },
  {
    id: 'national_subscription_movement',
    xPct: 78.0,
    yPct: 82.0,
    titleAr: 'الاكتتاب الشعبي التاريخي وتدشين النصب 1928',
    titleEn: 'The Historic National Subscription & 1928 Inauguration',
    categoryAr: 'التاريخ الوطني والذاكرة الجمعية',
    categoryEn: 'National Memory & Public Financing',
    descAr:
      'يُعد تمثال نهضة مصر أول أثر وطني في العصر الحديث يُشيد بأموال الشعب وليس بأمر من الحاكم؛ إذ أطلق السياسي والكاتب ويصا واصف حملة اكتتاب شعبي كبرى عام 1920 تسابق فيها الفلاحون والعمال والطلبة للتبرع بقروشهم القليلة. أُزيح الستار عن التمثال رسمياً في 20 مايو 1928 بميدان باب الحديد (رمسيس حالياً)، قبل أن يُنقل عام 1955 إلى ميدان جامعة القاهرة.',
    descEn:
      'Egypt’s Renaissance is the first modern public monument financed entirely by popular crowdfunding rather than royal patronage. Wissa Wassef launched a historic national subscription in 1920, where farmers, laborers, and students donated their humble piasters. The monument was inaugurated on May 20, 1928, at Bab al-Hadid before its relocation to Cairo University Square in 1955.',
    scientificInsightAr:
      'تم نقل كتل الجرانيت العملاقة من أسوان إلى القاهرة عبر الصنادل النيلية في رحلة استغرقت شهوراً، في استحضار حي لتقنيات النقل النهري الفرعونية قبل آلاف السنين.',
    scientificInsightEn:
      'The colossal granite monoliths were transported down the River Nile from Aswan to Cairo on heavy cargo barges, reviving ancient riverine freight logistics.',
  },
];

export const MahmoudMokhtarNahdatMisrStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<MokhtarHotspot>(MOKHTAR_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Engine Mode: 'composition_forces' | 'national_awakening'
  const [engineMode, setEngineMode] = useState<'composition_forces' | 'national_awakening'>('composition_forces');

  // Monument Dynamics State
  const [viewDistance, setViewDistance] = useState<number>(25); // Meters
  const [graniteScaleTons, setGraniteScaleTons] = useState<number>(220); // Metric tons

  const modalData: HiResImageModalData = useMemo(
    () => ({
      imageUrl: mokhtarPhoto,
      titleAr: 'تمثال نهضة مصر للنحات محمود مختار — 1928',
      titleEn: 'Nahdat Misr (Egypt’s Renaissance) by Mahmoud Mokhtar — 1928',
      subtitleAr: 'صرح من جرانيت أسوان الوردي والماكيت البرونزي وأدوات النحت الحجري',
      subtitleEn: 'Monumental Aswan Rose Granite with Paris Salon Bronze Maquette & Chisel Suite',
      descriptionAr:
        'رمز البعث الوطني المصري وأيقونة الفن الحديث. يجسد تمثال نهضة مصر التحام التاريخ الخالد بالانطلاق المستقبلي نحو الحرية والعلم والسيادة عبر أبو الهول الناهض والفلاحة المصرية التي ترفع نقابها. نُحت بأموال الاكتتاب الشعبي وأزيح الستار عنه عام 1928 بميدان جامعة القاهرة.',
      descriptionEn:
        'The definitive monument of modern Egyptian national awakening. Combining an awakening Sphinx rising on its forepaws and an Egyptian peasant woman lifting her veil toward the dawn of independence, education, and social emancipation. Financed by historic popular crowdfunding and inaugurated in 1928.',
      locationAr: 'ميدان جامعة القاهرة، الجيزة، مصر',
      locationEn: 'Cairo University Square, Giza, Egypt',
      dateOrEraAr: '1920 (الماكيت الذهبي بباريس) — 20 مايو 1928 (التدشين الرسمي)',
      dateOrEraEn: '1920 (Paris Gold Medal Maquette) — May 20, 1928 (Official Inauguration)',
    }),
    []
  );

  const containerBg = isLight
    ? 'bg-rose-50/60 border-rose-200 text-slate-900'
    : isContrast
    ? 'bg-black border-rose-400 text-rose-300'
    : 'bg-slate-950 border-rose-950/40 text-slate-100';

  const cardBg = isLight
    ? 'bg-white border-slate-200 shadow-sm'
    : isContrast
    ? 'bg-black border-rose-500'
    : 'bg-slate-900/80 border-rose-500/20 backdrop-blur-sm';

  return (
    <div className={`rounded-2xl border p-4 sm:p-6 space-y-6 ${containerBg}`}>
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-rose-500/20">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-500 to-amber-600 text-white shadow-lg shadow-rose-600/20">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30">
                1928 CE • Cairo University Square
              </span>
              <span className="text-xs font-mono text-slate-400">Aswan Pink Granite</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {isArabic ? 'محمود مختار وصرح نهضة مصر 4K' : 'Mahmoud Mokhtar: Nahdat Misr 4K'}
            </h2>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-rose-500/30 rounded-xl text-xs">
          <button
            onClick={() => setEngineMode('composition_forces')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'composition_forces'
                ? 'bg-rose-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'ديناميكية التكوين والكتلة' : 'Composition & Mass'}
          </button>
          <button
            onClick={() => setEngineMode('national_awakening')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'national_awakening'
                ? 'bg-rose-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'رمزية اليقظة الوطنية' : 'National Awakening'}
          </button>
        </div>
      </div>

      {/* 4K Archival Canvas with Hotspots */}
      <div className="relative rounded-2xl overflow-hidden border border-rose-500/30 shadow-2xl bg-black">
        <img
          src={mokhtarPhoto}
          alt="Mahmoud Mokhtar Nahdat Misr 1928"
          className="w-full h-auto max-h-[560px] object-contain mx-auto select-none"
        />

        {/* Hotspots */}
        {MOKHTAR_HOTSPOTS.map((h, idx) => {
          const isSelected = selectedHotspot.id === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setSelectedHotspot(h)}
              style={{ left: `${h.xPct}%`, top: `${h.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all cursor-pointer group z-20"
              title={isArabic ? h.titleAr : h.titleEn}
            >
              <span
                className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 font-mono text-xs font-black transition-all ${
                  isSelected
                    ? 'bg-rose-500 border-white text-black scale-125 shadow-lg shadow-rose-500/50'
                    : 'bg-black/80 border-rose-400 text-rose-300 hover:scale-110 hover:border-white'
                }`}
              >
                {idx + 1}
              </span>
            </button>
          );
        })}

        {/* Fullscreen HD Modal Trigger */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-3 left-3 z-30 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/80 hover:bg-black text-rose-300 border border-rose-500/40 text-xs font-semibold backdrop-blur transition-all cursor-pointer min-h-[44px]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص اللوحة الأرشيفية بدقة 4K' : 'Inspect 4K Master Folio'}</span>
        </button>

        {/* Badge */}
        <div className="absolute top-3 right-3 z-30 px-3 py-1.5 rounded-xl bg-black/80 text-rose-300 border border-rose-500/40 text-xs font-mono backdrop-blur flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>{isArabic ? 'الميدالية الذهبية بصالون باريس 1920' : 'Paris Salon 1920 Gold Medal'}</span>
        </div>
      </div>

      {/* Selected Hotspot Card */}
      <div className={`p-4 rounded-xl border ${cardBg} space-y-2`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-rose-400">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/30">
            {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
        </p>
        <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-start gap-2">
          <BookOpen className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
          <p className="text-xs font-mono text-rose-300/90 leading-relaxed">
            <strong className="text-rose-400">
              {isArabic ? 'التحليل المعماري والنحتي: ' : 'Architectural & Sculptural Analysis: '}
            </strong>
            {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
          </p>
        </div>
      </div>

      {/* Interactive Simulator Engine */}
      {engineMode === 'composition_forces' ? (
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-rose-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'محلل المتجهات الديناميكية والكتلة الجرانيتية' : 'Dynamic Compositional Vectors & Granite Mass Analyzer'}
              </h3>
            </div>
            <div className="text-xs font-mono text-rose-400">
              {isArabic ? 'كتلة الصرح: 220 طناً مترياً' : 'Total Mass: 220 Metric Tons'}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Vector Force Diagram SVG */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
              <svg viewBox="0 0 340 240" className="w-full max-w-[340px] h-auto overflow-visible">
                {/* Ground Pedestal */}
                <rect x="20" y="195" width="300" height="25" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
                <text x="170" y="212" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Aswan Granite Pedestal (قاعدة الجرانيت الوردي)
                </text>

                {/* Horizontal Grounding Force Vector (Sphinx Mass) */}
                <line x1="40" y1="180" x2="220" y2="180" stroke="#f43f5e" strokeWidth="3.5" markerEnd="url(#arrow-rose)" />
                <path d="M40,195 Q90,120 180,115 Q210,95 210,65 Q225,120 220,195 Z" fill="#e11d48" fillOpacity="0.25" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="110" y="172" fill="#fecdd3" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  Horizontal Anchor (استقرار أفقي: 15m)
                </text>

                {/* Rising Forepaws Vector */}
                <line x1="170" y1="180" x2="205" y2="105" stroke="#fbbf24" strokeWidth="3" />
                <circle cx="205" cy="105" r="4" fill="#fbbf24" />

                {/* Vertical Upward Aspirational Vector (Fellaha Standing) */}
                <line x1="260" y1="195" x2="260" y2="35" stroke="#38bdf8" strokeWidth="3.5" />
                <path d="M245,195 L250,90 Q260,80 270,90 L275,195 Z" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="260" cy="50" r="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="260" y="25" fill="#bae6fd" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  Vertical Ascension (شموخ رأسي: 7.5m)
                </text>

                {/* Diagonal Connection Vector (Hand on Sphinx) */}
                <line x1="250" y1="100" x2="210" y2="105" stroke="#34d399" strokeWidth="2.5" strokeDasharray="3 2" />
                <circle cx="210" cy="105" r="3.5" fill="#34d399" />
                <text x="230" y="92" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  Bond (الالتحام)
                </text>
              </svg>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-rose-500" /> Sphinx Grounding Mass
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-sky-500" /> Fellaha Vertical Thrust
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-500" /> Historic Contact Point
                </span>
              </div>
            </div>

            {/* Scale Controls & Physical Parameters */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span>{isArabic ? 'مسافة مراقبة الصرح (Viewer Distance)' : 'Viewer Observation Distance'}</span>
                  <span className="font-mono text-rose-400">{viewDistance} meters</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={viewDistance}
                  onChange={(e) => setViewDistance(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span>{isArabic ? 'كتلة الصرح الجرانيتي التقديرية' : 'Estimated Granite Block Weight'}</span>
                  <span className="font-mono text-amber-400">{graniteScaleTons} tons</span>
                </label>
                <input
                  type="range"
                  min="150"
                  max="300"
                  step="10"
                  value={graniteScaleTons}
                  onChange={(e) => setGraniteScaleTons(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Material Metrics Card */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'صلادة موهس' : 'Mohs Hardness'}</div>
                  <div className="text-rose-400 text-sm font-bold mt-0.5">6.5 - 7.0</div>
                  <div className="text-[10px] text-slate-400">Igneous Granodiorite</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'الكثافة الحجمية' : 'Rock Density'}</div>
                  <div className="text-amber-400 text-sm font-bold mt-0.5">2.65 g/cm³</div>
                  <div className="text-[10px] text-slate-400">Pure Aswan Quarry Bed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Engine Mode 2: National Awakening Symbolism Matrix */
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-rose-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'مصفوفة الرمزية الوطنية والانبعاث الحضاري' : 'National Awakening & Dual Symbolism Matrix'}
              </h3>
            </div>
            <span className="text-xs font-mono text-rose-400">1919 Revolution • Wissa Wassef Fund</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Ancient Axis (Sphinx) */}
            <div className="p-4 rounded-xl bg-slate-950 border border-rose-800/40 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <Layers className="w-4 h-4" />
                <span>{isArabic ? 'القطب الأول: أبو الهول (الذاكرة والجذور)' : 'First Pole: The Sphinx (Roots & Memory)'}</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li>{isArabic ? 'يمثل 7000 عام من الحضارة والرسوخ الأسطوري.' : 'Represents 7,000 years of civilization and eternal endurance.'}</li>
                <li>{isArabic ? 'الارتكاز على القائمتين الأماميتين يرمز لليقظة وليس الاستسلام.' : 'Rising on forepaws symbolizes dynamic awakening, not inert slumber.'}</li>
                <li>{isArabic ? 'الكتلة الأفقية الضخمة توفر قاعدة مادية صلبة للمستقبل.' : 'Massive horizontal mass provides an immovable foundation for the future.'}</li>
              </ul>
            </div>

            {/* The Modern Axis (Fellaha) */}
            <div className="p-4 rounded-xl bg-slate-950 border border-sky-800/40 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>{isArabic ? 'القطب الثاني: الفلاحة (النهوض والمستقبل)' : 'Second Pole: The Peasant Woman (Sovereignty & Future)'}</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li>{isArabic ? 'رفع البرقع يرمز للتحرر من الجهل والانطلاق نحو العلم.' : 'Unveiling signifies emancipation from ignorance into education.'}</li>
                <li>{isArabic ? 'الوقفة العمودية الشامخة تمثل طموح وسيادة الدولة الوطنية.' : 'Erect vertical stance personifies modern national sovereignty.'}</li>
                <li>{isArabic ? 'اليد الموضوعة على رأس أبو الهول توثق الصلة بين الماضي والغد.' : 'Hand on the Sphinx bonds ancestral heritage with modern destiny.'}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Hi-Res 4K Modal */}
      {isModalOpen && (
        <HiResImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
          lang={isArabic ? 'ar' : 'en'}
          theme={isLight ? 'light' : isContrast ? 'high-contrast' : 'dark'}
        />
      )}
    </div>
  );
};
