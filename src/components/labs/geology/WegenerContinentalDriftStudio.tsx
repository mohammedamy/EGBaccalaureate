import React, { useState } from 'react';
import {
  Globe,
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Compass,
  Activity,
} from 'lucide-react';
import wegenerPhoto from '../../../assets/geology/wegener_continental_drift_1912.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface WegenerHotspot {
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

export const WEGENER_HOTSPOTS: WegenerHotspot[] = [
  {
    id: 'coastal_fit',
    xPct: 48.0,
    yPct: 52.0,
    titleAr: 'تطابق حواف القارات (Continental Margin Jigsaw Fit)',
    titleEn: 'Continental Shelf Margin Jigsaw Puzzle Fit',
    categoryAr: 'شواهد الانجراف القاري المورفولوجية',
    categoryEn: 'Morphological & Geometrical Evidence',
    descAr:
      'التطابق الهندسي البديع بين الحافة الشرقية لأمريكا الجنوبية والحافة الغربية لإفريقيا عند حافة الرصيف القاري (عمق 500 قامة)؛ يثبت أنهما كانتا كتلة قارية واحدة التحمت في قارة جندوانا العظيمة قبل أن تنفصلا في العصر الجوراسي.',
    descEn:
      'Geometric complementary fit between South America’s Atlantic margin and West Africa’s coastline at the 500-fathom isobath, proving continuous crustal assembly within Gondwana prior to Mesozoic rifting.',
    scientificProofAr:
      'دراسة إدوارد بولارد عام 1965 بالحاسوب أثبتت تطابق الحواف القارية بنسبة تتجاوز 98% عند حواف الجرف القاري وليس خط الساحل المتغير.',
    scientificProofEn:
      'Sir Edward Bullard’s 1965 computer-modeled continental fit verified 98% matching accuracy along continental shelf edges.',
  },
  {
    id: 'mesosaurus_fossils',
    xPct: 42.0,
    yPct: 70.0,
    titleAr: 'أحافير الزواحف والنباتات المشتركة (Fossil Correlation)',
    titleEn: 'Mesosaurus & Glossopteris Fossil Distribution',
    categoryAr: 'الشواهد الباليونتولوجية والأحفورية',
    categoryEn: 'Paleontological & Biostratigraphic Evidence',
    descAr:
      'وجود بقايا زاحف الميزوصور (Mesosaurus) النهري العذب الصغير في صخور البيرمي بجنوب البرازيل وجنوب إفريقيا فقط؛ وهو كائن مياه عذبة يستحيل أن يعبر محيطاً أطلسياً واسعاً ومالحاً، بجانب بذور سرخسيات الجلوسوبتريس في القارات الجنوبية والقطب الجنوبي.',
    descEn:
      'Identical Permian freshwater Mesosaurus reptiles restricted to South Africa and Brazil, and Glossopteris seed ferns across all southern continents, physically impossible to disperse across modern ocean basins.',
    scientificProofAr:
      'انتشار بذور نبات الجلوسوبتريس الثقيلة غير المحمولة بالرياح عبر الهند وأستراليا وإفريقيا والقطب الجنوبي يؤكد اتصال اليابسة الجنوبية قديماً.',
    scientificProofEn:
      'Heavy sub-polar Glossopteris seeds distributed across Africa, India, Australia, and Antarctica confirm Gondwana land connection.',
  },
  {
    id: 'paleomagnetism',
    xPct: 55.0,
    yPct: 35.0,
    titleAr: 'المغناطيسية القديمة والأشرطة المتماثلة (Paleomagnetism)',
    titleEn: 'Remanent Paleomagnetism & Symmetrical Oceanic Stripes',
    categoryAr: 'الفيزياء الأرضية والجيوفيزياء',
    categoryEn: 'Geomagnetic Inversions & Seafloor Spreading',
    descAr:
      'المغناطيسية المتبقية في معادن الحديد بالصخور البركانية البازلتية بقيعان المحيطات؛ أثبتت وجود أشرطة مغناطيسية عادية ومنعكسة متماثلة على جانبي حيد وسط المحيط، وأن عمر الصخور يزداد كلما ابتعدنا عن الحيد يميناً ويساراً.',
    descEn:
      'Curie-temperature thermoremanent magnetization locked in basaltic titanomagnetite reveals symmetrical normal/reversed magnetic stripes flanking mid-ocean ridges, with age increasing symmetrically away from the ridge crest.',
    scientificProofAr:
      'تغير زاوية انحراف الإبرة المغناطيسية لمعدن الماجنتيت من 0° عند خط الاستواء إلى 90° عند القطبين يثبت تحرك الصخور وزحزحة القارات من مواقع نشأتها.',
    scientificProofEn:
      'Magnetic inclination angles in hematite/magnetite vary from 0° at the paleo-equator to 90° at magnetic poles, proving latitudinal continental drift.',
  },
  {
    id: 'glacial_tillites',
    xPct: 65.0,
    yPct: 82.0,
    titleAr: 'رواسب الثلاجات القديمة بجندوانا (Permo-Carboniferous Tillites)',
    titleEn: 'Gondwana Glacial Tillites & Striated Pavements',
    categoryAr: 'المناخ القديم والجيولوجيا الجليدية',
    categoryEn: 'Paleoclimatology & Ancient Glaciation',
    descAr:
      'تطابق رواسب الجليد (الحريث الجليدي / Tillite) وخدوش الصخور الملساء العائدة لنهاية حقب الحياة القديمة (البرمو-كربوني) في إفريقيا وأمريكا الجنوبية والهند وأستراليا والقطب الجنوبي، مما يدل على تجمعها حول القطب الجنوبي ككتلة واحدة.',
    descEn:
      'Late Paleozoic glacial tillites and striated bedrock across equatorial South Africa, South America, India, and Australia, explicable only by clustering around the South Pole.',
    scientificProofAr:
      'خطوط الخدش الجليدي تدل على حركة الجليد من مركز قاري موحد يمتد خارج القارات الحالية إلى داخل المحيط، وهو مستحيل بغير التحام القارات.',
    scientificProofEn:
      'Glacial striation vectors radiate outwards from a unified continental centroid impossible under modern geographic configurations.',
  },
  {
    id: 'mountain_belts',
    xPct: 30.0,
    yPct: 28.0,
    titleAr: 'استمرارية السلاسل الجبلية والتراكيب (Mountain Belt Continuity)',
    titleEn: 'Structural & Orogenic Appalachian-Caledonian Continuity',
    categoryAr: 'الجيولوجيا التركيبية والبنائية',
    categoryEn: 'Structural Geology & Tectonic Continuity',
    descAr:
      'التطابق التام بين سلسلة جبال الأبالاش في شرق أمريكا الشمالية وجبال كاليدونيا في الجزر البريطانية وغرب إسكندنافيا؛ حيث تنتهي البنية الجيولوجية فجأة عند المحيط الأطلسي لتستكمل في القارة المقابلة.',
    descEn:
      'Appalachian mountain folding trends in North America terminate abruptly at the Atlantic margin and resume seamlessly as the Caledonian chain in Scotland and Scandinavia.',
    scientificProofAr:
      'تطابق نوع الصخور وأعمارها التكتونية وتشوهاتها وحفرياتها التموضع الجيولوجي الموحد قبل انفتاح المحيط الأطلسي الشمالي.',
    scientificProofEn:
      'Identical isotopic ages, structural deformational fabrics, and Paleozoic stratigraphy confirm pre-rift orogenic continuity.',
  },
];

export const WegenerContinentalDriftStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<WegenerHotspot>(WEGENER_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Paleogeographic Era Slider (Million Years Ago)
  const [timeMa, setTimeMa] = useState<number>(250);

  // Spreading Rate Calculator
  const [distanceKm, setDistanceKm] = useState<number>(5000); // 5000 km ocean width
  const [spreadingTimeMa, setSpreadingTimeMa] = useState<number>(200); // 200 Ma

  const calculatedRateCmYear =
    spreadingTimeMa > 0 ? (distanceKm * 100000) / (spreadingTimeMa * 1000000) : 0;

  const modalData: HiResImageModalData = {
    imageUrl: wegenerPhoto,
    titleAr: 'خريطة ألفريد فيجنر الأصلية لنظرية الانجراف القاري (1912 - 1924 م)',
    titleEn: 'Alfred Wegener’s Original Continental Drift Map (1912–1924 CE)',
    subtitleAr: 'أصل القارات والمحيطات (Die Entstehung der Kontinente und Ozeane) ونشأة قارة بانجايا العظيمة',
    subtitleEn: 'The Origin of Continents and Oceans: Pangaea reconstruction, Laurussia & Gondwana dislocation',
    dateOrEraAr: '1912 - 1924 م (معهد الأرصاد والجيوفيزياء، هامبورغ/ماربورغ)',
    dateOrEraEn: '1912–1924 CE (University of Marburg / Hamburg Geophysics Institute)',
    locationAr: 'المتحف الجيولوجي الألماني / أرشيف جامعة ماربورغ',
    locationEn: 'German Geological Museum & Marburg University Archives',
    descriptionAr:
      'صورة فائقة الدقة (4K) للرسم الخرائطي والجيوفيزيائي الأصلي الذي نشره عالم الأرصاد والجيوفيزياء الألماني ألفريد فيجنر في كتابه التاريخي "أصل القارات والمحيطات". يوضح الرسم المراحل الثلاث لانفصال قارة أم القارات (بانجايا Pangea) المحاطة بمحيط بانثلاسا العظيم، وانقسامها إلى لوراسيا شمالاً وجندوانا جنوباً عبر بحر تيثيس القديم، متطابقة مع شواهد الزواحف والمستحاثات والمغناطيسية القديمة.',
    descriptionEn:
      'Museum-grade 4K archival photograph of Alfred Wegener’s original 1912/1924 paleogeographic maps from "The Origin of Continents and Oceans". Depicts the breakup of supercontinent Pangaea into Laurasia and Gondwana, separated by the Tethys Ocean, corroborated by paleontological, paleoclimatic, and geomagnetic seafloor spreading telemetry.',
  };

  const eras = [
    { ma: 250, nameAr: 'العصر البيرمي (250 مليون سنة)', nameEn: 'Permian (250 Ma) - Pangaea Supercontinent', statusAr: 'قارة بانجايا موحدة محاطة بمحيط بانثلاسا' },
    { ma: 200, nameAr: 'العصر الترياسي (200 مليون سنة)', nameEn: 'Triassic (200 Ma) - Initial Rifting', statusAr: 'بداية تصدع بانجايا وانفصال لوراسيا عن جندوانا وبحر تيثيس' },
    { ma: 145, nameAr: 'العصر الجوراسي (145 مليون سنة)', nameEn: 'Jurassic (145 Ma) - Atlantic Opening', statusAr: 'انفتاح جنوب المحيط الأطلسي وانفصال إفريقيا عن أمريكا الجنوبية' },
    { ma: 65, nameAr: 'العصر الطباشيري المتأخر (65 مليون سنة)', nameEn: 'Late Cretaceous (65 Ma) - Modern Outlines', statusAr: 'تباعد القارات واقتراب الهند من آسيا واصطدام الصفائح' },
    { ma: 0, nameAr: 'العصر الحالي (الحاضر)', nameEn: 'Present Day (0 Ma) - Global Plate Mosaic', statusAr: 'توزيع القارات السبع وتكون جبال الهيمالايا والألب والبحر الأحمر' },
  ];

  const currentEra = eras.find((e) => e.ma === timeMa) || eras[0];

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : isLight
          ? 'bg-gradient-to-br from-amber-50/70 via-stone-50 to-orange-50/50 text-stone-900 border-amber-200/80 shadow-md'
          : 'bg-gradient-to-br from-stone-950 via-neutral-900 to-amber-950/30 text-stone-100 border-amber-900/50 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {isArabic ? 'نظرية الانجراف القاري 1912 م' : 'Continental Drift Theory 1912 CE'}
              </span>
              <span className="text-xs text-amber-500/80 font-mono">4K Archival Plate</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو ألفريد فيجنر: زحزحة القارات وتكتونية الصفائح'
                : 'Alfred Wegener Studio: Continental Drift & Plate Tectonics'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-amber-500 text-stone-950 hover:bg-amber-400 transition-all shadow-md cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير خريطة فيجنر 4K' : 'Inspect 4K Wegener Map'}</span>
        </button>
      </div>

      {/* 4K Archival Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-amber-500/30 shadow-2xl bg-black select-none group">
        <img
          src={wegenerPhoto}
          alt="Alfred Wegener Continental Drift Map"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.96] contrast-[1.06]"
        />

        {/* Pulsating Interactive Hotspots */}
        {WEGENER_HOTSPOTS.map((spot) => {
          const isActive = spot.id === activeHotspot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/btn cursor-pointer focus:outline-none"
              title={isArabic ? spot.titleAr : spot.titleEn}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-amber-400' : 'bg-amber-500/50'
                  }`}
                />
                <span
                  className={`absolute w-6 h-6 rounded-full border-2 ${
                    isActive
                      ? 'border-amber-300 bg-amber-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-amber-400'
                  }`}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-amber-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-amber-300'
                  }`}
                >
                  <Sparkles className="w-2 h-2 text-black" />
                </div>

                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-amber-300 border-amber-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Bottom Metadata Bar */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-amber-300">
            <span>{isArabic ? '🌍 المرجع: كتاب أصل القارات والمحيطات (1915)' : '🌍 Source: Wegener (1915)'}</span>
            <span>•</span>
            <span>{isArabic ? '🧩 القارة الأم: بانجايا (Pangea)' : '🧩 Supercontinent: Pangaea'}</span>
            <span>•</span>
            <span>{isArabic ? '🌊 المحيط القديم: بانثلاسا (Panthalassa)' : '🌊 Universal Ocean: Panthalassa'}</span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 font-bold">
            HISTORICAL-GEOPHYSICAL-ARCHIVE
          </span>
        </div>
      </div>

      {/* Selected Hotspot Detailed Diagnostic Drawer */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-gradient-to-r from-amber-50 via-white to-orange-50/70 border-amber-300 text-stone-900 shadow-sm'
            : 'bg-gradient-to-r from-stone-900 via-neutral-900 to-amber-950/40 border-amber-800/40 text-stone-100 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
                <h3 className="text-base sm:text-lg font-bold">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h3>
              </div>

              <p className="text-xs sm:text-sm mt-2 leading-relaxed opacity-90">
                {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
              </p>

              <div
                className={`mt-3 p-3 rounded-xl border text-xs font-medium flex items-center gap-2.5 ${
                  isLight
                    ? 'bg-amber-100/70 border-amber-300 text-stone-950'
                    : 'bg-black/40 border-amber-500/30 text-amber-200'
                }`}
              >
                <Info className="w-4 h-4 shrink-0 text-amber-500" />
                <span>
                  <strong>{isArabic ? 'البرهان العلمي والجيوفيزيائي: ' : 'Geophysical Telemetry: '}</strong>
                  {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-xs font-bold text-amber-500">
              {isArabic ? 'شواهد فيجنر الخمسة:' : 'Wegener’s 5 Evidences:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {WEGENER_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    s.id === activeHotspot.id
                      ? 'bg-amber-500 text-black shadow-md font-black'
                      : isLight
                      ? 'bg-amber-100 text-stone-800 hover:bg-amber-200'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {isArabic ? s.titleAr.split(' ')[0] + ' ' + (s.titleAr.split(' ')[1] || '') : s.titleEn.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Paleogeographic Pangaea Breakup Timeline */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isLight ? 'bg-white border-amber-200' : 'bg-stone-900/60 border-amber-900/40'
        }`}
      >
        <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-500" />
            <h4 className="text-sm font-bold">
              {isArabic ? 'محاكي تفكك بانجايا وتطور التوزيع القاري عبر العصور الجيولوجية' : 'Pangaea Breakup & Paleogeographic Evolution Timeline'}
            </h4>
          </div>
          <span className="text-xs font-mono font-bold text-amber-400">
            {timeMa === 0 ? (isArabic ? 'الحاضر' : 'Present') : `${timeMa} Ma`}
          </span>
        </div>

        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={eras.findIndex((e) => e.ma === timeMa)}
            onChange={(e) => setTimeMa(eras[Number(e.target.value)].ma)}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] font-mono font-bold text-stone-400 mt-2">
            <span>250 Ma (البيرمي)</span>
            <span>200 Ma (الترياسي)</span>
            <span>145 Ma (الجوراسي)</span>
            <span>65 Ma (الطباشيري)</span>
            <span>0 Ma (الحالي)</span>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-amber-400">
              {isArabic ? currentEra.nameAr : currentEra.nameEn}
            </div>
            <div className="text-xs text-stone-300 mt-0.5">
              {currentEra.statusAr}
            </div>
          </div>
          <div className="text-xs font-mono font-black text-amber-400 bg-amber-500/20 px-3 py-1.5 rounded-lg border border-amber-500/40">
            Tethys & Gondwana
          </div>
        </div>
      </div>

      {/* Seafloor Spreading Rate & Plate Boundary Physics Engine */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-amber-200' : 'bg-stone-900/60 border-amber-900/40'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            <Activity className="w-4 h-4" />
            <span>{isArabic ? 'حاسبة معدل توسع قاع المحيط (Seafloor Spreading Rate)' : 'Seafloor Spreading Rate Calculator'}</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span>{isArabic ? 'المسافة بين القارتين عبر المحيط:' : 'Separation Distance:'}</span>
                <span className="font-mono font-bold text-amber-400">{distanceKm} km</span>
              </div>
              <input
                type="range"
                min="1000"
                max="8000"
                step="250"
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>{isArabic ? 'الزمن المنقضي منذ بداية الانفتاح:' : 'Elapsed Rifting Duration:'}</span>
                <span className="font-mono font-bold text-amber-400">{spreadingTimeMa} Ma (مليون سنة)</span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="10"
                value={spreadingTimeMa}
                onChange={(e) => setSpreadingTimeMa(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/30 flex items-center justify-between mt-2">
              <span className="text-stone-300 font-semibold">{isArabic ? 'معدل التباعد السنوي (v = d / t):' : 'Spreading Velocity:'}</span>
              <span className="text-sm font-mono font-black text-amber-400">
                {calculatedRateCmYear.toFixed(2)} cm/year (سم/سنة)
              </span>
            </div>
            <p className="text-[11px] text-stone-400">
              {isArabic
                ? 'معدل تباعد قاع المحيط الأطلسي يبلغ حوالي 2.5 سم/سنة، ومعدل اتساع البحر الأحمر 2.5 سم/سنة كحوض محيطي وليد.'
                : 'Mid-Atlantic spreading averages ~2.5 cm/yr; the Red Sea widens at ~2.5 cm/yr as an incipient proto-ocean.'}
            </p>
          </div>
        </div>

        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-amber-200' : 'bg-stone-900/60 border-amber-900/40'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4" />
            <span>{isArabic ? 'أنواع حدود الصفائح التكتونية الوزارية' : 'Ministerial Plate Boundaries Matrix'}</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="font-bold text-amber-400">{isArabic ? '1. حدود تباعدية (بناءة / Divergent):' : '1. Divergent (Constructive):'}</span>
                <p className="text-[11px] text-stone-300 mt-0.5">{isArabic ? 'قوى شد ينتج عنها حيد وسط المحيط والبحر الأحمر وخليج السويس.' : 'Tensile stress producing mid-ocean ridges, Red Sea rift.'}</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">Constructive</span>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="font-bold text-amber-400">{isArabic ? '2. حدود تقاربية (هدامة / Convergent):' : '2. Convergent (Destructive):'}</span>
                <p className="text-[11px] text-stone-300 mt-0.5">{isArabic ? 'قوى ضغط (قاري-قاري كالهيمالايا، قاري-محيطي كالأنديز والبحر المتوسط).' : 'Compressional stress (Himalayas, Andes, Mediterranean).'}</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[10px] font-mono">Destructive</span>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="font-bold text-amber-400">{isArabic ? '3. حدود تطاحنية (انزلاقية / Transform):' : '3. Transform (Conservative):'}</span>
                <p className="text-[11px] text-stone-300 mt-0.5">{isArabic ? 'حركة أفقية انزلاقية لكتلتي الصخور كصدع سان أندرياس وخليج العقبة.' : 'Shear strike-slip faulting (San Andreas, Gulf of Aqaba).'}</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-mono">Conservative</span>
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
