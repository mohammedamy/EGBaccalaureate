import React, { useState } from 'react';
import type { Language } from '../../../i18n/translations';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  X,
  MapPin,
  Layers,
  Compass,
  Navigation,
  Crosshair,
  Flame,
  Scale,
  Info,
} from 'lucide-react';

import tabaMap from '../../../assets/geography/taba_satellite_map.jpg';
import ceutaMelillaMap from '../../../assets/geography/ceuta_melilla_map.jpg';
import kashmirMap from '../../../assets/geography/kashmir_satellite_map.jpg';
import libyaTunisiaMap from '../../../assets/geography/libya_tunisia_map.jpg';
import sahelMap from '../../../assets/geography/sahel_satellite_map.jpg';

interface Props {
  hotspotKey: string;
  lang: Language;
  theme?: string;
}

interface HotspotPinData {
  x: number;
  y: number;
  type: 'pillar' | 'dispute' | 'strait' | 'maritime' | 'capital' | 'feature';
  labelAr: string;
  labelEn: string;
  detailAr: string;
  detailEn: string;
}

interface HotspotMapConfig {
  image: string;
  titleAr: string;
  titleEn: string;
  coords: string;
  scaleKm: string;
  partiesAr: string;
  partiesEn: string;
  settlementMethodAr: string;
  settlementMethodEn: string;
  verdictAr: string;
  verdictEn: string;
  pins: HotspotPinData[];
}

const hotspotMapData: Record<string, HotspotMapConfig> = {
  taba: {
    image: tabaMap,
    titleAr: 'قضية طابا والتحكيم الدولي المصري (العلامة 91)',
    titleEn: 'Taba International Arbitration & Boundary Line 91',
    coords: '29°29′ N, 34°53′ E',
    scaleKm: '0 - 5 - 10 km',
    partiesAr: 'جمهورية مصر العربية ⚔️ إسرائيل',
    partiesEn: 'Arab Republic of Egypt vs Israel',
    settlementMethodAr: 'التحكيم الدولي (International Arbitration) بموجب اتفاقية 1982',
    settlementMethodEn: 'Binding International Arbitration under 1982 Framework',
    verdictAr:
      'أصدرت هيئة التحكيم الدولية بجنيف حكمها التاريخي في 29 سبتمبر 1988 بأحقية مصر الكاملة في طابا وتثبيت العلامة 91، ورُفع العلم المصري في 19 مارس 1989.',
    verdictEn:
      'On September 29, 1988, the Geneva Arbitration Tribunal ruled definitively in favor of Egypt, establishing Pillar 91. The Egyptian flag was raised on March 19, 1989.',
    pins: [
      {
        x: 50,
        y: 40,
        type: 'pillar',
        labelAr: 'العلامة 91 (Border Pillar 91)',
        labelEn: 'Disputed Border Pillar 91',
        detailAr: 'موقع العلامة الصخرية الأصلية لعام 1906 على وادي طابا التي حاول الاحتلال تزييف موقعها نحو الغرب.',
        detailEn: 'The historic 1906 boundary marker at Wadi Taba which Israel attempted to shift westward.',
      },
      {
        x: 62,
        y: 28,
        type: 'dispute',
        labelAr: 'إيلات (الميناء الإسرائيلي)',
        labelEn: 'Eilat Port (Northern Gulf Apex)',
        detailAr: 'الميناء الإسرائيلي الذي كان يسعى لتوسيع شريطه الشاطئي عبر ضم طابا المصرية.',
        detailEn: 'Israeli port at the northern apex of the Gulf seeking to annex Taba for coastal expansion.',
      },
      {
        x: 66,
        y: 72,
        type: 'maritime',
        labelAr: 'خليج العقبة (الممر المائي الدولي)',
        labelEn: 'Gulf of Aqaba International Waterway',
        detailAr: 'الممر البحري الاستراتيجي الذي تشرف عليه مصر والأردن والسعودية وإسرائيل.',
        detailEn: 'Strategic international waterway flanked by Egypt, Jordan, Saudi Arabia, and Israel.',
      },
      {
        x: 36,
        y: 35,
        type: 'feature',
        labelAr: 'رأس النقب والممرات الجبلية',
        labelEn: 'Ras Al-Naqb Strategic Mountain Pass',
        detailAr: 'المرتفعات الجبلية التي تشكل خط الدفاع الغربي المشرف على ممر الحدود لعام 1906.',
        detailEn: 'Rugged high terrain dominating the historic 1906 demarcation line.',
      },
      {
        x: 46,
        y: 68,
        type: 'feature',
        labelAr: 'جزيرة فرعون وقلعة صلاح الدين',
        labelEn: 'Pharaoh Island & Citadel of Saladin',
        detailAr: 'جزيرة مرجانية استراتيجية في مياه مصر الإقليمية تحرس خطوط الملاحة وحجاج بيت الله الحرام.',
        detailEn: 'Historic island citadel securing medieval Egyptian pilgrimage and sea routes.',
      },
    ],
  },
  ceuta_melilla: {
    image: ceutaMelillaMap,
    titleAr: 'قضية سبتة ومليلية والجزر المغربية المحتلة',
    titleEn: 'Ceuta, Melilla & The Moroccan Enclaves Dispute',
    coords: '35°53′ N, 05°18′ W',
    scaleKm: '0 - 25 - 50 km',
    partiesAr: 'المملكة المغربية ⚔️ المملكة الإسبانية',
    partiesEn: 'Kingdom of Morocco vs Kingdom of Spain',
    settlementMethodAr: 'المطالبات الدبلوماسية ولجان الصداقة المشتركة (المفاوضات)',
    settlementMethodEn: 'Bilateral Diplomatic Dialogue & Historical Sovereignty Claims',
    verdictAr:
      'يطالب المغرب باستعادة سيادته على المدينتين، بينما ترفض إسبانيا الجلاء عنهما بدعوى التقادم الزمني (محتلتان منذ 1415 و1497) وكون سكانهما إسباناً بنسبة تزيد عن 60%.',
    verdictEn:
      'Morocco asserts historic sovereignty over its occupied enclaves, while Spain rejects withdrawal citing historical prescription and resident demographics.',
    pins: [
      {
        x: 46,
        y: 42,
        type: 'dispute',
        labelAr: 'مدينة سبتة المحتلة (1415م)',
        labelEn: 'Ceuta Enclave (Occupied 1415)',
        detailAr: 'شبه جزيرة مغربية تقع في مواجهة جبل طارق مباشرة، وتبعد عن ساحل إسبانيا 26 كم فقط.',
        detailEn: 'Strategic peninsular bastion at the entrance of Gibraltar just 26 km from mainland Spain.',
      },
      {
        x: 78,
        y: 56,
        type: 'dispute',
        labelAr: 'مدينة مليلية المحتلة (1497م)',
        labelEn: 'Melilla Enclave (Occupied 1497)',
        detailAr: 'مدينة وميناء في شرق الريف المغربي تحيط بها أراضي المغرب براً وتواجه إسبانيا بحراً.',
        detailEn: 'Enclaved port city in eastern Morocco surrounded by Moroccan territory on land.',
      },
      {
        x: 48,
        y: 26,
        type: 'strait',
        labelAr: 'مضيق جبل طارق (14 كم)',
        labelEn: 'Strait of Gibraltar (14 km Chokepoint)',
        detailAr: 'الممر الملاحي العالمي الذي يربط البحر الأبيض المتوسط بالمحيط الأطلسي.',
        detailEn: 'Worlds premiere maritime bottleneck connecting Mediterranean waters to the Atlantic.',
      },
      {
        x: 26,
        y: 52,
        type: 'feature',
        labelAr: 'مدينة طنجة والميناء المتوسطي',
        labelEn: 'Tangier & Tanger Med Mega-Port',
        detailAr: 'العملاق الاقتصادي المغربي المشرف على المضيق والمنافس للموانئ الإسبانية.',
        detailEn: 'Moroccan deepwater hub rivaling European ports along the Gibraltar corridor.',
      },
      {
        x: 62,
        y: 48,
        type: 'feature',
        labelAr: 'صخرة باديس والجزر الجعفرية',
        labelEn: 'Penon de Velez & Chafarinas Islands',
        detailAr: 'صخور وجزر شاطئية مغربية تحتلها إسبانيا عسكرياً على مسافة أمتار من الشاطئ المغربي.',
        detailEn: 'Coastal rocky bastions garrisoned by Spanish forces mere meters from Moroccan soil.',
      },
    ],
  },
  kashmir: {
    image: kashmirMap,
    titleAr: 'نزاع إقليم كشمير (الهند وباكستان)',
    titleEn: 'Kashmir Territorial Dispute (Himalayas)',
    coords: '34°05′ N, 74°47′ E',
    scaleKm: '0 - 100 - 200 km',
    partiesAr: 'جمهورية الهند ⚔️ جمهورية باكستان الإسلامية (والصين)',
    partiesEn: 'Republic of India vs Islamic Republic of Pakistan (and China)',
    settlementMethodAr: 'الحروب العسكرية وقرارات مجلس الأمن (خط السيطرة الدولي)',
    settlementMethodEn: 'Militarized Conflict & UN Ceasefire Delimitation (LoC)',
    verdictAr:
      'قسّم الإقليم بخط وقف إطلاق النار (خط السيطرة LoC) ليمنح الهند الثلثين وباكستان الثلث. وطالبت الأمم المتحدة باستفتاء تقرير المصير للشعب الكشميري.',
    verdictEn:
      'Partitioned by the UN Line of Control (LoC) with two-thirds administered by India and one-third by Pakistan, pending a self-determination referendum.',
    pins: [
      {
        x: 48,
        y: 48,
        type: 'dispute',
        labelAr: 'خط السيطرة (Line of Control - LoC)',
        labelEn: 'Line of Control (Militarized LoC)',
        detailAr: 'أطول خط وقف إطلاق نار محصن في العالم يفصل بين القوات الهندية والباكستانية في جبال كشمير.',
        detailEn: 'Heavily fortified ceasefire boundary dividing Indian and Pakistani armed forces.',
      },
      {
        x: 54,
        y: 52,
        type: 'capital',
        labelAr: 'سريناغار (عاصمة الإقليم)',
        labelEn: 'Srinagar (Valley Capital)',
        detailAr: 'القلب السكاني والتاريخي لوادي كشمير ومركز الصراع السياسي والديموغرافي.',
        detailEn: 'Historic cultural capital and demographic center of the Kashmir Valley.',
      },
      {
        x: 65,
        y: 30,
        type: 'feature',
        labelAr: 'جبال قراقرم والهيمالايا الشاهقة',
        labelEn: 'Karakoram & Himalayan Ranges',
        detailAr: 'أعلى سلاسل جبلية في العالم ومسرح معارك نهر سياشين الجليدي المتجمد.',
        detailEn: 'High-altitude battleground of the Siachen Glacier at extreme sub-zero conditions.',
      },
      {
        x: 36,
        y: 62,
        type: 'feature',
        labelAr: 'حوض نهر السند (شريان باكستان)',
        labelEn: 'Indus River Headwaters',
        detailAr: 'الروافد المائية الحيوية التي تعتمد عليها زراعة وباكستان واقتصادها (اتفاقية مياه السند 1960).',
        detailEn: 'Critical river basins irrigating Pakistani agricultural lands regulated by treaty.',
      },
      {
        x: 82,
        y: 34,
        type: 'dispute',
        labelAr: 'أكساي تشين (السيطرة الصينية)',
        labelEn: 'Aksai Chin Plateau (Chinese Administered)',
        detailAr: 'هضبة استراتيجية عسكرية تربط إقليم التبت بشينجيانغ وتخضع لسيطرة الصين وتطالب بها الهند.',
        detailEn: 'Strategic highway plateau linking Tibet and Xinjiang held by China.',
      },
    ],
  },
  libya_tunisia: {
    image: libyaTunisiaMap,
    titleAr: 'النزاع الليبي التونسي على الرصيف القاري (1982)',
    titleEn: 'Libya-Tunisia Continental Shelf Dispute (Gulf of Gabes)',
    coords: '33°50′ N, 10°50′ E',
    scaleKm: '0 - 50 - 100 km',
    partiesAr: 'الجمهورية التونسية ⚔️ دولة ليبيا',
    partiesEn: 'Republic of Tunisia vs State of Libya',
    settlementMethodAr: 'محكمة العدل الدولية (القضاء الدولي / International Court of Justice)',
    settlementMethodEn: 'Adjudication by the International Court of Justice (ICJ)',
    verdictAr:
      'قضت محكمة العدل الدولية عام 1982 بأن يسير خط الحدود نحو الشمال أولاً، ثم ينحرف بزاوية 52° شرقاً مراعاة لوجود الجزر التونسية (قرقنة وجربة)، مما منح تونس حقوق استغلال البترول والغاز.',
    verdictEn:
      'In 1982, the ICJ decreed that the maritime boundary proceed north then deflect 52 degrees east to accommodate Tunisian islands (Djerba and Kerkennah).',
    pins: [
      {
        x: 54,
        y: 46,
        type: 'strait',
        labelAr: 'خط الحدود المنحرف 52° شرقاً',
        labelEn: '1982 ICJ 52° Deflected Line',
        detailAr: 'خط الترسيم البحري العادل الذي حكمت به محكمة العدل الدولية مستندة لمبادئ الإنصاف والجزر الشاطئية.',
        detailEn: 'Equitable continental shelf boundary demarcated by the World Court respecting insular geography.',
      },
      {
        x: 38,
        y: 40,
        type: 'maritime',
        labelAr: 'خليج قابس (حقول النفط والغاز)',
        labelEn: 'Gulf of Gabes Energy Reserves',
        detailAr: 'مكامن الغاز الطبيعي والنفط البحرية الضخمة التي كانت محل النزاع على الرصيف القاري.',
        detailEn: 'Submarine oil and gas fields over which sovereign extraction rights were contested.',
      },
      {
        x: 62,
        y: 68,
        type: 'pillar',
        labelAr: 'رأس جدير (نقطة الحدود البرية)',
        labelEn: 'Ras Ajdir Land Border Terminal',
        detailAr: 'المعبر الحدودي البري المشترك على الشاطئ الذي انطلقت منه خطوط الترسيم البحرية.',
        detailEn: 'Coastal land terminus serving as the geodetic anchor for the maritime projection.',
      },
      {
        x: 46,
        y: 54,
        type: 'feature',
        labelAr: 'جزيرة جربة التونسية',
        labelEn: 'Djerba Island (Tunisia)',
        detailAr: 'الجزيرة التونسية الشاطئية التي أثرت في انحراف خط الحدود البحرية نحو الشرق.',
        detailEn: 'Large coastal island influencing coastal configuration arguments before the ICJ.',
      },
      {
        x: 38,
        y: 26,
        type: 'feature',
        labelAr: 'جزر قرقنة التونسية',
        labelEn: 'Kerkennah Archipelago',
        detailAr: 'مجموعة الجزر التي استندت إليها هيئة الدفاع التونسية لتحقيق انحراف زاوية الحدود 52°.',
        detailEn: 'Archipelago off Sfax providing the legal justification for the 52 degree eastern deflection.',
      },
    ],
  },
  sahel: {
    image: sahelMap,
    titleAr: 'نزاعات الرعاة والمزارعين في حزام الساحل الأفريقي',
    titleEn: 'Pastoralist Conflicts in the African Sahel Belt',
    coords: '14°00′ N, 02°00′ E',
    scaleKm: '0 - 250 - 500 km',
    partiesAr: 'دول غرب ووسط أفريقيا (النيجر، مالي، تشاد، بوركينا فاسو، موريتانيا)',
    partiesEn: 'Sahelian States (Niger, Mali, Chad, Burkina Faso, Mauritania)',
    settlementMethodAr: 'الاتفاقيات والمعاهدات الإقليمية (إيكواس ECOWAS / سيلس CILSS)',
    settlementMethodEn: 'Regional Transhumance Pacts (ECOWAS & CILSS Frameworks)',
    verdictAr:
      'فرض الحدود السياسية وتغير المناخ والتصحر أدى لنزاعات قبلية مسلحة، مما دفع دول غرب أفريقيا لعقد اتفاقيات تحدد مسارات الهجرة الموسمية وتلزم برعاية الثروة الحيوانية والرسوم.',
    verdictEn:
      'Arbitrary colonial borders combined with severe droughts spurred pastoral conflicts, prompting ECOWAS cross-border agreements to regulate seasonal transhumance routes.',
    pins: [
      {
        x: 50,
        y: 46,
        type: 'dispute',
        labelAr: 'مسار هجرة الرعاة السنوي (Transhumance)',
        labelEn: 'Annual Pastoral Migration Corridor',
        detailAr: 'الممرات الرعوية الموسمية التي تعبر حدود عدة دول بين شمال الصحراء وجنوب السافانا الرطبة.',
        detailEn: 'Centuries-old livestock transhumance corridors intersecting arbitrary national borders.',
      },
      {
        x: 34,
        y: 58,
        type: 'feature',
        labelAr: 'بروتوكول الإيكواس لتنظيم الرعي (ECOWAS)',
        labelEn: 'ECOWAS Cross-Border Pastoral Accord',
        detailAr: 'اتفاقية إقليمية تلزم الرعاة بشهادات بيطرية ومسارات محددة لمنع الاعتداء على الأراضي الزراعية.',
        detailEn: 'Binding regional protocol mandating veterinary passports and designated transhumance paths.',
      },
      {
        x: 68,
        y: 32,
        type: 'feature',
        labelAr: 'نطاق الجفاف والتصحر المتقدم',
        labelEn: 'Advancing Desertification Front',
        detailAr: 'الموجات الجافة الكارثية في السبعينيات التي دمرت المراعي ودفعت الرعاة للهجرة جنوباً.',
        detailEn: 'Devastating sub-Saharan droughts driving pastoral populations southward into farming belts.',
      },
      {
        x: 44,
        y: 64,
        type: 'feature',
        labelAr: 'حوض نهر النيجر الزراعي',
        labelEn: 'Niger River Agricultural Basin',
        detailAr: 'شريان الري الزراعي الرئيسي ونقطة التماس الساخنة بين الفلاحين المستقرين والرعاة الرحل.',
        detailEn: 'Vital irrigation basin representing the primary friction point between farmers and herders.',
      },
      {
        x: 82,
        y: 52,
        type: 'feature',
        labelAr: 'حوض بحيرة تشاد',
        labelEn: 'Shrinking Lake Chad Basin',
        detailAr: 'انكماش مساحة البحيرة بأكثر من 90% بسبب تغير المناخ فجر نزاعات مائية إقليمية حادة.',
        detailEn: 'Over 90% surface area shrinkage triggering ecological distress and armed friction.',
      },
    ],
  },
};

export const HighResHotspotMap: React.FC<Props> = ({ hotspotKey, lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showPins, setShowPins] = useState<boolean>(true);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [activePinIndex, setActivePinIndex] = useState<number | null>(null);
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);

  const config = hotspotMapData[hotspotKey] || hotspotMapData['taba'];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 1));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setActivePinIndex(null);
  };

  const getPinColor = (type: HotspotPinData['type']) => {
    switch (type) {
      case 'pillar':
        return 'bg-amber-500 text-amber-950 border-amber-300 shadow-amber-500/50';
      case 'dispute':
        return 'bg-rose-500 text-rose-950 border-rose-300 shadow-rose-500/50';
      case 'strait':
        return 'bg-cyan-500 text-cyan-950 border-cyan-300 shadow-cyan-500/50';
      case 'maritime':
        return 'bg-blue-500 text-blue-950 border-blue-300 shadow-blue-500/50';
      case 'capital':
        return 'bg-emerald-500 text-emerald-950 border-emerald-300 shadow-emerald-500/50';
      case 'feature':
        return 'bg-purple-500 text-purple-950 border-purple-300 shadow-purple-500/50';
    }
  };

  const renderMapContent = (isModal: boolean = false) => (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border ${
        isLight ? 'border-slate-300 bg-slate-900' : 'border-slate-800 bg-slate-950'
      } shadow-2xl transition-all duration-300 ${isModal ? 'h-[80vh]' : 'aspect-[16/10]'}`}
    >
      {/* Zoomable Image Container */}
      <div
        className="w-full h-full relative cursor-grab active:cursor-grabbing transition-transform duration-300 ease-out flex items-center justify-center"
        style={{
          transform: `scale(${zoomLevel})`,
          transformOrigin: 'center center',
        }}
      >
        <img
          src={config.image}
          alt={isArabic ? config.titleAr : config.titleEn}
          className="w-full h-full object-cover select-none pointer-events-none filter saturate-[1.08] contrast-[1.06]"
          loading="eager"
        />

        {/* Tactical Coordinates Graticule */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none opacity-35">
            <div className="w-full h-full grid grid-cols-6 grid-rows-4 border border-rose-500/30">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border-r border-b border-rose-500/20 relative">
                  <span className="absolute top-1 left-1 font-mono text-[8px] text-rose-400/60 select-none">
                    +
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tactical Pins */}
        {showPins &&
          config.pins.map((pin, idx) => {
            const isActive = activePinIndex === idx;
            return (
              <div
                key={idx}
                className="absolute z-20 transition-transform duration-200"
                style={{
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Ping Beacon */}
                <div
                  className={`absolute -inset-2 rounded-full opacity-60 animate-ping pointer-events-none ${
                    pin.type === 'dispute'
                      ? 'bg-rose-500'
                      : pin.type === 'pillar'
                      ? 'bg-amber-400'
                      : pin.type === 'strait'
                      ? 'bg-cyan-400'
                      : 'bg-emerald-400'
                  }`}
                />

                {/* Pin Button */}
                <button
                  type="button"
                  onClick={() => setActivePinIndex(isActive ? null : idx)}
                  className={`relative p-1.5 rounded-full border-2 shadow-lg flex items-center justify-center transition-all ${
                    isActive ? 'scale-125 ring-2 ring-white' : 'hover:scale-110'
                  } ${getPinColor(pin.type)}`}
                  title={isArabic ? pin.labelAr : pin.labelEn}
                >
                  <MapPin className="w-3.5 h-3.5" />
                </button>

                {/* Callout Tooltip */}
                {isActive && (
                  <div
                    className={`absolute z-30 bottom-full mb-3 w-64 p-3 rounded-xl border shadow-2xl backdrop-blur-xl text-left ${
                      isArabic ? 'text-right' : 'text-left'
                    } ${
                      isLight
                        ? 'bg-white/95 border-slate-300 text-slate-800'
                        : 'bg-slate-950/95 border-slate-700 text-white'
                    } animate-in fade-in zoom-in-95 duration-150`}
                    style={{
                      left: pin.x > 70 ? 'auto' : pin.x < 30 ? '0' : '50%',
                      right: pin.x > 70 ? '0' : 'auto',
                      transform: pin.x >= 30 && pin.x <= 70 ? 'translateX(-50%)' : 'none',
                    }}
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-slate-700/40 pb-1.5 mb-1.5">
                      <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                        <Crosshair className="w-3 h-3 text-rose-400" />
                        {isArabic ? pin.labelAr : pin.labelEn}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePinIndex(null);
                        }}
                        className="text-slate-400 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300">
                      {isArabic ? pin.detailAr : pin.detailEn}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {/* Top HUD */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="pointer-events-auto flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800/80 text-white shadow-lg">
          <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-rose-300">
              {isArabic ? config.titleAr : config.titleEn}
            </span>
            <span className="text-[9px] font-mono text-slate-400">{config.coords}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1 rounded-xl border border-slate-800/80 shadow-lg text-white">
          <button
            type="button"
            onClick={handleZoomIn}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title={isArabic ? 'تكبير (+)' : 'Zoom In'}
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title={isArabic ? 'تصغير (-)' : 'Zoom Out'}
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          {zoomLevel > 1 && (
            <button
              type="button"
              onClick={handleResetZoom}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-amber-400 transition-colors"
              title={isArabic ? 'إعادة ضبط' : 'Reset Zoom'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
          <div className="w-px h-4 bg-slate-700 mx-0.5" />
          <button
            type="button"
            onClick={() => setShowPins((prev) => !prev)}
            className={`p-1.5 rounded-lg transition-colors ${
              showPins ? 'bg-rose-500/20 text-rose-300' : 'text-slate-400 hover:bg-slate-800'
            }`}
            title={isArabic ? 'إظهار/إخفاء المؤشرات' : 'Toggle Markers'}
          >
            <MapPin className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setShowGrid((prev) => !prev)}
            className={`p-1.5 rounded-lg transition-colors ${
              showGrid ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:bg-slate-800'
            }`}
            title={isArabic ? 'إظهار/إخفاء شبكة الإحداثيات' : 'Toggle Grid'}
          >
            <Layers className="w-4 h-4" />
          </button>
          {!isModal && (
            <button
              type="button"
              onClick={() => setIsFullscreenModal(true)}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title={isArabic ? 'معاينة سينمائية بملء الشاشة' : 'Fullscreen HD Lightbox'}
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Bottom Scale & Compass */}
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none z-10">
        <div className="pointer-events-auto bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] text-slate-300 flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 border-b-2 border-l-2 border-r-2 border-rose-400 mb-0.5" />
            <span className="font-mono text-[9px] text-rose-300">{config.scaleKm}</span>
          </div>
          <span className="text-slate-500 font-mono text-[9px] border-l border-slate-700 pl-2">
            Dispute Geodesy
          </span>
        </div>

        <div className="pointer-events-auto bg-slate-950/85 backdrop-blur-md p-1.5 rounded-full border border-slate-800 flex items-center justify-center shadow-lg">
          <Compass className="w-5 h-5 text-rose-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center select-none relative">
      {renderMapContent(false)}

      {/* Disputed Frontier Information Strip */}
      <div className="w-full mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
            <Flame className="w-3 h-3 text-rose-400" />
            {isArabic ? 'أطراف النزاع السياسي' : 'Parties to the Dispute'}
          </span>
          <span className="font-bold text-rose-300 mt-0.5">
            {isArabic ? config.partiesAr : config.partiesEn}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
            <Scale className="w-3 h-3 text-amber-400" />
            {isArabic ? 'طريقة التسوية القانونية' : 'Legal Settlement Method'}
          </span>
          <span className="font-bold text-amber-300 mt-0.5">
            {isArabic ? config.settlementMethodAr : config.settlementMethodEn}
          </span>
        </div>
      </div>

      {/* Final Ruling / Historical Status Banner */}
      <div className="w-full mt-2.5 p-3 rounded-xl bg-gradient-to-r from-rose-950/30 via-slate-900/50 to-amber-950/30 border border-rose-800/40 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
        <Info className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-rose-300 block mb-0.5">
            {isArabic ? 'الحكم القضائي والوضع الجيوسياسي النهائي:' : 'Adjudicated Ruling & Geopolitical Status:'}
          </span>
          {isArabic ? config.verdictAr : config.verdictEn}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreenModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="w-full max-w-6xl relative flex flex-col">
            <div className="flex items-center justify-between mb-3 text-white">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-rose-400" />
                <h3 className="font-bold text-lg text-rose-300">
                  {isArabic ? config.titleAr : config.titleEn}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsFullscreenModal(false);
                  handleResetZoom();
                }}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors"
                title={isArabic ? 'إغلاق' : 'Close'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {renderMapContent(true)}
          </div>
        </div>
      )}
    </div>
  );
};
