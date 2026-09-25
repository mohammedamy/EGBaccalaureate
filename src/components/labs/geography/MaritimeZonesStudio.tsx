import React, { useState } from 'react';
import {
  Anchor,
  Maximize2,
  Sparkles,
  Info,
  Compass,
  CheckCircle2,
  Shield,
  Sliders,
  ChevronRight,
  Fish,
  Flame,
} from 'lucide-react';
import libyaTunisiaPhoto from '../../../assets/geography/libya_tunisia_map.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface MaritimeHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  legalSignificanceAr: string;
  legalSignificanceEn: string;
}

export const MARITIME_HOTSPOTS: MaritimeHotspot[] = [
  {
    id: 'gulf_of_gabes',
    xPct: 35.0,
    yPct: 40.0,
    titleAr: 'خليج قابس وجزيرة جربة (Gulf of Gabes & Djerba Island)',
    titleEn: 'Gulf of Gabes Coastal Indentation & Djerba Island',
    categoryAr: 'خط الأساس وتأثير الجزر الساحلية',
    categoryEn: 'Baseline & Coastal Configuration',
    descAr:
      'شاطئ خليج قابس التونسي المقعر أحدث تبدلاً جوهرياً في رسم الحدود البحرية؛ طالبت ليبيا برسم خط الحدود للشمال مباشرة بزاوية تعامدية، بينما دفعت تونس بوجود جزرها (جربة وقرقنة) لتعديل زاوية خط المنتصف نحو الشرق.',
    descEn:
      'The concave indentation of Tunisia’s Gulf of Gabes and off-lying Djerba Island fundamentally altered baseline projections. Libya advocated a straight northern meridian line, while Tunisia claimed offshore island baselines angling eastward.',
    legalSignificanceAr:
      'قاعدة محكمة العدل الدولية: الجزر الساحلية المأهولة يجب أن تمنح وزناً جزئياً (Half-effect) لمنع إجحاف حقوق الجرف القاري للدولة المقابلة.',
    legalSignificanceEn:
      'ICJ Jurisprudence: Substantial coastal islands are accorded proportional "half-effect" weighting in continental shelf delimitations.',
  },
  {
    id: 'kerkennah_shift',
    xPct: 45.0,
    yPct: 25.0,
    titleAr: 'أرخبيل جزر قرقنة وانكسار الزاوية إلى 52° (Kerkennah 52° Shift)',
    titleEn: 'Kerkennah Archipelago & 52° Lateral Shift',
    categoryAr: 'التعديل الهندسي لمحكمة العدل الدولية',
    categoryEn: 'Judicial Delimitation Angle Deflection',
    descAr:
      'حكمت المحكمة بتعديل اتجاه خط الحدود من زاوية 26 درجة شمالاً إلى زاوية 52 درجة شرقاً بمجرد محاذاة نقطة انكسار الساحل التونسي وقبالة جزر قرقنة، مما منح تونس حقوقاً سيادية واسعة في الجرف القاري الغني بالطاقة.',
    descEn:
      'The ICJ ruled that the maritime boundary line, initially projected at 26° north, should deflect to 52° east upon aligning with the change in direction of Tunisia’s coastline and the Kerkennah Archipelago.',
    legalSignificanceAr:
      'أدى هذا التعديل الزاوي إلى أن تصبح حقول بترول وغاز البوري والبريقة موزعة بعدالة قانونية متفق عليها دولياً.',
    legalSignificanceEn:
      'This angular deflection legally apportioned rich hydrocarbon reservoirs (including Bouri field) under binding international law.',
  },
  {
    id: 'continental_shelf_oil',
    xPct: 65.0,
    yPct: 55.0,
    titleAr: 'حقول نفط وغاز الرصيف القاري المشترك (Continental Shelf Hydrocarbons)',
    titleEn: 'Subsea Hydrocarbon Basins & Sedimentary Shelf',
    categoryAr: 'الثروات الاقتصادية السيادية في قاع البحر',
    categoryEn: 'Sovereign Subsea Energy Resources',
    descAr:
      'يمتد الرصيف القاري تحت مياه البحر المتوسط حتى حافة الحافة القارية؛ تتمتع الدول الساحلية بحقوق سيادية مطلقة وحصرية في التنقيب عن واستغلال الثروات المعدنية والهيدروكربونية في قاع البحر وباطن أرضه دون المساس بحرية الملاحة السطحية.',
    descEn:
      'The continental shelf seabed extends beneath the Mediterranean waters. Coastal states possess exclusive, inalienable sovereign rights to explore and exploit mineral and petroleum subsoil reserves without impeding surface navigation.',
    legalSignificanceAr:
      'المادة 77 من اتفاقية الأمم المتحدة لقانون البحار UNCLOS 1982: حقوق الدولة الساحلية على الرصيف القاري حقوق حصرية لا تتوقف على الاحتلال الفعلي.',
    legalSignificanceEn:
      'UNCLOS 1982 Article 77: Coastal sovereign rights over the continental shelf are exclusive and independent of formal occupation.',
  },
  {
    id: 'icj_verdict_1982',
    xPct: 50.0,
    yPct: 75.0,
    titleAr: 'حكم محكمة العدل الدولية لعام 1982 (1982 ICJ Judgment)',
    titleEn: '1982 International Court of Justice Maritime Award',
    categoryAr: 'التطبيق القضائي الدولي للمبادئ المنصفة',
    categoryEn: 'International Adjudication & Equitable Principles',
    descAr:
      'لجأ البلدان الشقيقان (ليبيا وتونس) طواعية إلى محكمة العدل الدولية بلاهاي لتسوية النزاع سلمياً، حيث طبقت المحكمة "المبادئ المنصفة" (Equitable Principles) والظروف الخاصة بدلاً من خط المنتصف الجامد، مما شكل نموذجاً ملهماً لحل النزاعات الحدودية.',
    descEn:
      'Libya and Tunisia voluntarily submitted their dispute to the ICJ in The Hague. The Court applied "Equitable Principles" taking into account special coastal configurations rather than rigid equidistance, establishing a global model for peaceful resolution.',
    legalSignificanceAr:
      'تطبيق المبادئ المنصفة مع مراعاة الظروف الجغرافية الخاصة بدلاً من خط المنتصف الحرفي الذي كان سيجحف بحق تونس.',
    legalSignificanceEn:
      'Application of equitable principles accommodating coastal geomorphology rather than rigid equidistance.',
  },
];

export interface UnclosZone {
  id: string;
  nameAr: string;
  nameEn: string;
  distanceAr: string;
  distanceEn: string;
  sovereigntyLevelAr: string;
  sovereigntyLevelEn: string;
  legalRightsAr: string[];
  legalRightsEn: string[];
  badgeColor: string;
}

export const UNCLOS_ZONES: UnclosZone[] = [
  {
    id: 'internal_waters',
    nameAr: '1. المياه الداخلية (Internal Waters)',
    nameEn: '1. Internal Waters',
    distanceAr: 'داخل خط الأساس نحو اليابسة (الخلجان والبحيرات الساحلية ومصاب الأنهار)',
    distanceEn: 'Landward side of baseline (Bays, coastal lagoons, estuaries)',
    sovereigntyLevelAr: 'سيادة وطنية تامة ومطلقة لا تختلف عن أرض الدولة',
    sovereigntyLevelEn: 'Absolute, unrestricted national territorial sovereignty',
    legalRightsAr: [
      'جزء لا يتجزأ من إقليم الدولة البري ولا تسري فيها حرية المرور دون إذن مسبق.',
      'سيادة كاملة على المياه السطحية، قاع البحر، باطن الأرض، والفضاء الجوي الذي يعلوها.',
      'تخضع السفن الأجنبية الداخلة إليها للولاية القضائية والجنائية والمدنية للدولة الساحلية.',
    ],
    legalRightsEn: [
      'Integral sovereign part of land territory; no right of innocent passage without prior permission.',
      'Full sovereignty over water column, seabed, subsoil, and airspace above.',
      'Foreign vessels are subject to full civil, administrative, and criminal port-state jurisdiction.',
    ],
    badgeColor: 'bg-emerald-600',
  },
  {
    id: 'territorial_sea',
    nameAr: '2. المياه الإقليمية (Territorial Sea)',
    nameEn: '2. Territorial Sea',
    distanceAr: 'حتى 12 ميلاً بحرياً من خط الأساس (1 ميل بحري = 1.852 كم)',
    distanceEn: 'Up to 12 nautical miles from baseline (1 nm = 1.852 km)',
    sovereigntyLevelAr: 'سيادة تامة مشروطة فقط بحق "المرور السلمي" للسفن الأجنبية',
    sovereigntyLevelEn: 'Complete sovereignty conditioned by "Innocent Passage" right',
    legalRightsAr: [
      'تمتد سيادة الدولة الساحلية على مياهها وقاعها وباطن أرضها وفضائها الجوي.',
      'حق المرور السلمي (Innocent Passage): مسموح للسفن التجارية غير الضارة بأمن الدولة، ولا يشمل الطائرات دون تصريح.',
      'للغواصات الأجنبية حق المرور السلمي بشرط الطفو على السطح ورفع علم دولتها.',
    ],
    legalRightsEn: [
      'Full coastal sovereignty extends over water, seabed, subsoil, and superjacent airspace.',
      'Right of innocent passage granted to foreign civil merchant vessels (not extending to aircraft).',
      'Foreign submarines must navigate on the surface and show their flag.',
    ],
    badgeColor: 'bg-teal-600',
  },
  {
    id: 'contiguous_zone',
    nameAr: '3. المياه التكميلية / الملاصقة (Contiguous Zone)',
    nameEn: '3. Contiguous Zone',
    distanceAr: '12 ميلاً بحرياً إضافية (حتى 24 ميلاً بحرياً من خط الأساس)',
    distanceEn: 'Additional 12 nautical miles (up to 24 nm from baseline)',
    sovereigntyLevelAr: 'ولاية إشرافية ورقابية محددة (جمركية، ضريبية، صحية، أمنية)',
    sovereigntyLevelEn: 'Enforcement jurisdiction (Customs, fiscal, immigration, sanitary)',
    legalRightsAr: [
      'ليست سيادة تامة؛ بل سلطة وقائية لمنع خرق قوانين الجمارك والضرائب والصحة العامة.',
      'حق معاقبة وملاحقة المخالفين (Hot Pursuit) لقوانين الدولة المرتكبة داخل إقليمها أو مياهها الإقليمية.',
      'تعتبر جزءاً من المياه الدولية من حيث حرية الملاحة التجارية العالمية.',
    ],
    legalRightsEn: [
      'Limited preventive enforcement to prevent infringement of customs, tax, immigration, or sanitary laws.',
      'Right of hot pursuit against violators fleeing from territorial waters.',
      'Treated as international waters for general commercial navigation.',
    ],
    badgeColor: 'bg-cyan-600',
  },
  {
    id: 'exclusive_economic_zone',
    nameAr: '4. المنطقة الاقتصادية الخالصة (EEZ)',
    nameEn: '4. Exclusive Economic Zone (EEZ)',
    distanceAr: 'حتى 200 ميل بحري من خط الأساس مقيسة من خطوط الأساس',
    distanceEn: 'Up to 200 nautical miles from baseline',
    sovereigntyLevelAr: 'حقوق سيادية اقتصادية حصرية على الثروات الحية وغير الحية',
    sovereigntyLevelEn: 'Exclusive sovereign rights for resource exploitation',
    legalRightsAr: [
      'حق استئثاري للدولة الساحلية في صيد الأسماك، استخراج النفط والغاز، وتوليد الطاقة من الرياح والأمواج.',
      'إقامة وإدارة الجزر الاصطناعية والمنصات البحرية والأبحاث العلمية البحرية.',
      'تتمتع سائر دول العالم بحرية الملاحة البحرية، وحرية الطيران الجوي، ومد الكابلات والأنابيب المغمورة.',
    ],
    legalRightsEn: [
      'Exclusive coastal sovereign rights over fisheries, offshore oil/gas drilling, wave/wind energy.',
      'Jurisdiction over construction of artificial islands, subsea platforms, and marine scientific research.',
      'All other states retain freedom of navigation, overflight, and laying submarine cables and pipelines.',
    ],
    badgeColor: 'bg-blue-600',
  },
  {
    id: 'continental_shelf',
    nameAr: '5. الرصيف القاري (Continental Shelf)',
    nameEn: '5. Continental Shelf',
    distanceAr: 'امتداد قاع البحر الطبيعي حتى عمق 200م أو حافة الحافة القارية (حتى 350 ميلاً)',
    distanceEn: 'Subsea prolongation to 200m depth or continental margin edge (up to 350 nm)',
    sovereigntyLevelAr: 'حقوق سيادية حصرية على قاع البحر وباطن أرضه فقط',
    sovereigntyLevelEn: 'Exclusive subsea sovereign rights on seabed & subsoil',
    legalRightsAr: [
      'حق حصري أصيل للدولة الساحلية في استخراج النفط والغاز الطبيعي والمعادن من قاع البحر وباطنه.',
      'حق ملكية الكائنات الحية القاعية غير المتحركة (Sedentary species مثل الإسفنج واللؤلؤ والمحار).',
      'لا تؤثر حقوق الرصيف القاري على الوضع القانوني للمياه التي تعلوه (تظل مياهاً دولية أو منطقة اقتصادية).',
    ],
    legalRightsEn: [
      'Inherent exclusive rights to exploit petroleum, gas, and mineral ores in the seabed and subsoil.',
      'Sovereignty over sedentary benthic marine organisms (pearls, sponges, oysters).',
      'Seabed shelf rights do not legally affect the superjacent waters (which remain EEZ or high seas).',
    ],
    badgeColor: 'bg-indigo-600',
  },
  {
    id: 'high_seas',
    nameAr: '6. أعالي البحار / المياه الدولية (High Seas / The Area)',
    nameEn: '6. High Seas / Common Heritage',
    distanceAr: 'ما وراء المنطقة الاقتصادية الخالصة (تغطي أكثر من 60% من محيطات الكوكب)',
    distanceEn: 'Beyond national EEZs (Covering >60% of planetary oceans)',
    sovereigntyLevelAr: 'تراث مشترك للإنسانية جمعاء (لا سيادة لأي دولة عليها)',
    sovereigntyLevelEn: 'Common heritage of mankind (Zero national sovereignty)',
    legalRightsAr: [
      'حرية الملاحة والطيران والصيد والبحث العلمي السلمي لجميع دول العالم الساحلية والحبيسة.',
      'تخضع السفينة لقانون دولة العلم (Flag State Jurisdiction).',
      'ولاية قضائية عالمية لمكافحة القرصنة وتجارة الرقيق والمخدرات والبث الإذاعي غير المصرح به.',
    ],
    legalRightsEn: [
      'Absolute freedom of navigation, overflight, fishing, and research for coastal and landlocked nations.',
      'Vessels subject exclusively to flag-state jurisdiction.',
      'Universal international jurisdiction against piracy, slave trafficking, and illicit broadcasting.',
    ],
    badgeColor: 'bg-slate-600',
  },
];

export const MaritimeZonesStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<MaritimeHotspot>(MARITIME_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [selectedZone, setSelectedZone] = useState<UnclosZone>(UNCLOS_ZONES[1]);
  const [activeTab, setActiveTab] = useState<'unclos_cross_section' | 'icj_dispute'>('unclos_cross_section');

  const handleOpenModal = () => {
    setModalData({
      imageUrl: libyaTunisiaPhoto,
      titleAr: 'الجرف القاري الليبي-التونسي — حكم محكمة العدل الدولية 1982',
      titleEn: 'Libya-Tunisia Continental Shelf: 1982 ICJ Landmark Judgment',
      subtitleAr: 'الوثيقة الخرائطية الفضائية لتعديل خط الحدود البحرية بزاوية 52 درجة بخليج قابس',
      subtitleEn: 'High-Resolution Satellite Cartography Illustrating the 52° Angle Boundary Shift',
      descriptionAr:
        'خريطة فضائية عالية الدقة توثق النزاع البحري الشهير بين ليبيا وتونس على الجرف القاري الغني بحقول النفط والغاز، وكيف أدى حكم محكمة العدل الدولية لعام 1982 إلى تطبيق المبادئ المنصفة ومراعاة جزر جربة وقرقنة لتعديل زاوية الحدود من 26° إلى 52° وتأمين مصالح البلدين.',
      descriptionEn:
        'Archival satellite map documenting the historic Libya-Tunisia continental shelf dispute over Mediterranean oil and gas basins, illustrating the 1982 ICJ ruling applying equitable principles to deflect the maritime boundary by 52° respecting Kerkennah and Djerba islands.',
      locationAr: 'خليج قابس، البحر الأبيض المتوسط، الحدود البحرية بين ليبيا وتونس',
      locationEn: 'Gulf of Gabes, Mediterranean Sea, Libya-Tunisia Maritime Frontier',
      dateOrEraAr: '1982 ميلادية (صدور حكم محكمة العدل الدولية)',
      dateOrEraEn: '1982 CE (International Court of Justice Judgment)',
    });
  };

  return (
    <div
      className={`rounded-2xl border p-5 md:p-8 transition-all ${
        isContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : isLight
          ? 'bg-sky-50/40 text-stone-900 border-sky-200 shadow-sm'
          : 'bg-stone-950/80 text-stone-100 border-sky-900/50 shadow-2xl backdrop-blur-md'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 border-sky-500/20">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                isContrast
                  ? 'bg-amber-400 text-black'
                  : 'bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-sm'
              }`}
            >
              <Anchor className="w-3.5 h-3.5" />
              {isArabic ? 'متحف قانون البحار والحدود المائية' : 'UNCLOS Law of the Sea Archive'}
            </span>
            <span className="text-xs text-sky-400/90 font-mono">
              {isArabic ? 'اتفاقية 1982 وقضية الجرف القاري' : '1982 Treaty & Continental Shelf'}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            {isArabic
              ? 'استوديو المناطق المائية وقانون البحار (UNCLOS 1982)'
              : 'UNCLOS Maritime Zones & Continental Shelf Studio'}
          </h2>
          <p className="text-sm mt-1 text-stone-400 max-w-3xl leading-relaxed">
            {isArabic
              ? 'تحليل تفاعلي للقطاع العرضي للمناطق المائية الست (المياه الداخلية، الإقليمية، التكميلية، الاقتصادية الخالصة، الرصيف القاري، أعالي البحار)، وقضية النزاع الليبي-التونسي أمام محكمة العدل الدولية.'
              : 'Interactive masterclass on the 6 UNCLOS maritime zones, coastal baselines, sovereign exploration rights, and the 1982 ICJ Libya-Tunisia continental shelf delimitation.'}
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md ${
            isContrast
              ? 'bg-amber-400 text-black hover:bg-amber-300'
              : 'bg-sky-600 hover:bg-sky-500 text-white hover:shadow-sky-500/25'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'معاينة خريطة الجرف القاري 4K' : 'View 4K Continental Shelf Map'}</span>
        </button>
      </div>

      {/* Main Grid: Interactive Canvas & Hotspot Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left: 4K Map Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div
            className={`relative rounded-xl overflow-hidden border shadow-inner group ${
              isContrast ? 'border-amber-400 bg-black' : 'border-sky-900/40 bg-stone-900'
            }`}
            style={{ minHeight: '380px' }}
          >
            <img
              src={libyaTunisiaPhoto}
              alt="Libya Tunisia Continental Shelf"
              className="w-full h-auto object-contain max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Hotspot Markers */}
            {MARITIME_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
                  aria-label={isArabic ? spot.titleAr : spot.titleEn}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isSelected
                      ? 'ring-4 ring-sky-400 bg-amber-400 text-stone-950 scale-125 shadow-xl'
                      : 'bg-stone-900/90 text-sky-300 border border-sky-400/70 hover:scale-110 hover:bg-sky-500 hover:text-black'
                  }`}
                >
                  <Anchor className={`w-4 h-4 ${isSelected ? 'animate-pulse' : ''}`} />
                  <span className="sr-only">{isArabic ? spot.titleAr : spot.titleEn}</span>
                </button>
              );
            })}

            {/* Canvas Overlay Badge */}
            <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-sky-500/30 text-xs text-sky-200/90 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>
                {isArabic
                  ? 'انقر على نقاط خليج قابس، جزر قرقنة، وحقول الرصيف القاري'
                  : 'Click Gulf of Gabes, Kerkennah shift, and continental shelf hotspots'}
              </span>
            </div>
          </div>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap gap-2 pt-1">
            {MARITIME_HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setSelectedHotspot(spot)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all border ${
                  selectedHotspot.id === spot.id
                    ? isContrast
                      ? 'bg-amber-400 text-black border-amber-400'
                      : 'bg-sky-600 text-white border-sky-500 shadow-sm'
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
                ? 'bg-white border-sky-200 shadow-sm'
                : 'bg-stone-900/70 border-sky-900/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b pb-3 mb-3 border-sky-500/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
                </span>
                <span className="text-xs font-mono bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded border border-sky-500/20">
                  {isArabic ? 'قانون دولي' : 'Maritime Law'}
                </span>
              </div>

              <h3 className="text-lg font-black text-sky-400 mb-2">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </h3>

              <p className="text-sm leading-relaxed text-stone-300 mb-4">
                {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
              </p>

              <div
                className={`p-3.5 rounded-lg border text-xs leading-relaxed space-y-2 ${
                  isLight
                    ? 'bg-sky-50/80 border-sky-200 text-stone-800'
                    : 'bg-sky-950/20 border-sky-500/30 text-sky-200'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 text-sky-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'الأثر القانوني والجيوسياسي:' : 'Geopolitical Legal Ramification:'}</span>
                </div>
                <div>
                  {isArabic ? selectedHotspot.legalSignificanceAr : selectedHotspot.legalSignificanceEn}
                </div>
              </div>
            </div>

            {/* Curriculum Rule Banner */}
            <div className="mt-4 pt-3 border-t border-sky-500/20 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {isArabic
                  ? 'منهج الجغرافيا: لا يمكن قياس المياه الإقليمية إلا بدءاً من خط الأساس'
                  : 'Curriculum Rule: Maritime zones must be measured from coastal baseline'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Switcher: UNCLOS Cross-Section vs ICJ Dispute Breakdown */}
      <div
        className={`my-8 p-6 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-amber-400'
            : isLight
            ? 'bg-stone-50 border-sky-200 shadow-sm'
            : 'bg-stone-900/60 border-sky-800/40'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('unclos_cross_section')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeTab === 'unclos_cross_section'
                  ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                  : 'bg-stone-800/60 text-stone-300 border-stone-700'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 inline mr-1.5" />
              {isArabic ? 'المناطق المائية الست (اتفاقية UNCLOS 1982)' : 'The 6 UNCLOS Maritime Zones'}
            </button>
            <button
              onClick={() => setActiveTab('icj_dispute')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeTab === 'icj_dispute'
                  ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                  : 'bg-stone-800/60 text-stone-300 border-stone-700'
              }`}
            >
              <Compass className="w-3.5 h-3.5 inline mr-1.5" />
              {isArabic ? 'ملف قضية الجرف القاري بين ليبيا وتونس' : 'Libya-Tunisia Continental Shelf Case'}
            </button>
          </div>
        </div>

        {activeTab === 'unclos_cross_section' ? (
          <div>
            {/* Zone Selector Horizontal Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {UNCLOS_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedZone.id === zone.id
                      ? isContrast
                        ? 'bg-amber-400 text-black border-amber-400'
                        : `${zone.badgeColor} text-white shadow-md`
                      : isLight
                      ? 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                      : 'bg-stone-900/70 text-stone-300 border-stone-800 hover:bg-stone-800'
                  }`}
                >
                  {isArabic ? zone.nameAr.split('(')[0] : zone.nameEn.split('(')[0]}
                </button>
              ))}
            </div>

            {/* Zone Detail Card */}
            <div
              className={`p-5 rounded-xl border ${
                isContrast
                  ? 'bg-stone-950 border-amber-400'
                  : isLight
                  ? 'bg-white border-sky-200 shadow-sm'
                  : 'bg-stone-900/70 border-sky-900/30'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 mb-3 border-stone-800">
                <h4 className="text-base font-black text-sky-400">
                  {isArabic ? selectedZone.nameAr : selectedZone.nameEn}
                </h4>
                <span className="text-xs px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 font-mono border border-sky-500/30">
                  {isArabic ? selectedZone.distanceAr : selectedZone.distanceEn}
                </span>
              </div>

              <div className="text-xs font-bold text-amber-400 mb-2">
                {isArabic ? 'درجة السيادة الوطنية:' : 'Degree of Sovereign Authority:'}
                <span className="font-normal text-stone-200 ml-2">
                  {isArabic ? selectedZone.sovereigntyLevelAr : selectedZone.sovereigntyLevelEn}
                </span>
              </div>

              <div className="mt-3">
                <div className="text-xs font-bold text-emerald-400 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isArabic ? 'الحقوق والاختصاصات القانونية المقررة للدولة:' : 'Prescribed Sovereign Rights & Jurisdiction:'}
                </div>
                <ul className="text-xs space-y-1.5">
                  {(isArabic ? selectedZone.legalRightsAr : selectedZone.legalRightsEn).map((right, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-200">
                      <ChevronRight className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-rose-400 mb-1 flex items-center gap-1.5">
                <Fish className="w-3.5 h-3.5" />
                {isArabic ? 'موقف دولة ليبيا في النزاع:' : 'Libyan Legal Stance:'}
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mt-2">
                {isArabic
                  ? 'طالبت ليبيا بأن ينطلق خط الحدود البحرية مباشرة إلى الشمال وفق اتجاه خط الحدود البرية (شمالاً بزاوية تعامدية)، استناداً إلى امتداد الهضبة القارية، مما كان سيمنحها السيطرة على غالبية حقول النفط البحرية.'
                  : 'Libya asserted that the boundary should extend due northward following the land frontier meridian, arguing natural prolongation of the continental landmass, capturing the majority of hydrocarbon concessions.'}
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-teal-400 mb-1 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                {isArabic ? 'موقف دولة تونس وحكم المحكمة:' : 'Tunisian Stance & ICJ Resolution:'}
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mt-2">
                {isArabic
                  ? 'طالبت تونس بانحراف الخط شرقاً بزاوية 45° لوجود خليج قابس وجزرها الساحلية. قضت المحكمة ببدء الخط بزاوية 26° ثم تعديله إلى 52° شرقاً قبالة جزر قرقنة إعمالاً للعدالة التوزيعية، مما حفظ حقوق الطرفين.'
                  : 'Tunisia argued for an eastward deflection of 45° to accommodate the Gulf of Gabes and coastal islands. The ICJ decreed a two-segment line (26° northward then 52° eastward off Kerkennah), balancing both nations’ rights.'}
              </p>
            </div>
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
