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
  Building2,
  Shield,
  Info,
} from 'lucide-react';

import comesaMap from '../../../assets/geography/comesa_africa_map.jpg';
import euMap from '../../../assets/geography/european_union_map.jpg';
import gccMap from '../../../assets/geography/gcc_arabian_gulf_map.jpg';
import natoMap from '../../../assets/geography/nato_transatlantic_map.jpg';

interface Props {
  blocKey: string;
  lang: Language;
  theme?: string;
}

interface BlocPinData {
  x: number;
  y: number;
  type: 'hq' | 'member' | 'strait' | 'feature';
  labelAr: string;
  labelEn: string;
  detailAr: string;
  detailEn: string;
}

interface BlocMapConfig {
  image: string;
  titleAr: string;
  titleEn: string;
  coords: string;
  scaleKm: string;
  membershipAr: string;
  membershipEn: string;
  headquartersAr: string;
  headquartersEn: string;
  strategicAnalysisAr: string;
  strategicAnalysisEn: string;
  pins: BlocPinData[];
}

const blocMapData: Record<string, BlocMapConfig> = {
  comesa: {
    image: comesaMap,
    titleAr: 'تجمع الكوميسا (السوق المشتركة لشرق وجنوب أفريقيا)',
    titleEn: 'COMESA (Common Market for Eastern & Southern Africa)',
    coords: '15°25′ S, 28°17′ E',
    scaleKm: '0 - 1000 - 2000 km',
    membershipAr: '21 دولة أفريقية (من مصر شمالاً إلى إيسواتيني وزيمبابوي جنوباً)',
    membershipEn: '21 African Sovereign Nations (Egypt in North to Eswatini in South)',
    headquartersAr: 'لوساكا - زامبيا (Lusaka, Zambia)',
    headquartersEn: 'Lusaka, Zambia',
    strategicAnalysisAr:
      'أكبر تكتل اقتصادي إقليمي في أفريقيا. انضمت مصر عام 1998، وتستفيد من إعفاء جمركي كامل لمنتجاتها الصناعية ومواد البناء، بينما تستورد الشاي والبن والنحاس الخام.',
    strategicAnalysisEn:
      'Largest regional trade bloc in Africa. Acceded by Egypt in 1998, fostering full customs exemption for industrial and construction goods in exchange for tea, coffee, and copper raw materials.',
    pins: [
      {
        x: 54,
        y: 68,
        type: 'hq',
        labelAr: 'المقر الدائم للأمانة العامة (لوساكا - زامبيا)',
        labelEn: 'COMESA Secretariat HQ (Lusaka)',
        detailAr: 'المقر المركزي لإدارة اتفاقيات التجارة الحرة وفض النزاعات التجارية بين الدول الأعضاء.',
        detailEn: 'Administrative headquarters executing free-trade protocols and economic harmonization.',
      },
      {
        x: 62,
        y: 22,
        type: 'member',
        labelAr: 'جمهورية مصر العربية (القاهرة)',
        labelEn: 'Egypt (Major Industrial Engine)',
        detailAr: 'أكبر سوق استهلاكي وقوة صناعية رائدة في التجمع تصدر السلع المصنعة والأدوية للأعضاء.',
        detailEn: 'Major demographic and manufacturing powerhouse exporting pharmaceutical and engineered wares.',
      },
      {
        x: 68,
        y: 44,
        type: 'member',
        labelAr: 'دول حوض النيل والقرن الأفريقي',
        labelEn: 'Nile Basin & Horn of Africa Partners',
        detailAr: 'السودان وإثيوبيا وكينيا وأوغندا - عمق حيوي يربط التبادل التجاري بالأمن المائي الإقليمي.',
        detailEn: 'Strategic riverine partners linking trade flows to regional water and infrastructure security.',
      },
      {
        x: 80,
        y: 74,
        type: 'member',
        labelAr: 'مدغشقر والدول الجزرية بالمحيط الهندي',
        labelEn: 'Madagascar & Indian Ocean Islands',
        detailAr: 'موريشيوس وجزر القمر وسيشل ومدغشقر تمنح التكتل واجهة بحرية وتجارية عالمية على المحيط الهندي.',
        detailEn: 'Island economies providing vital maritime commercial corridors across the Indian Ocean.',
      },
      {
        x: 42,
        y: 55,
        type: 'member',
        labelAr: 'جمهورية الكونغو الديمقراطية وحوض الكونغو',
        labelEn: 'DR Congo (Mineral & Resource Vault)',
        detailAr: 'مستودع المعادن الأضخم في القارة واحتياطيات النحاس والكوبالت والقدرات الكهرومائية.',
        detailEn: 'Resource vault encompassing world-class copper, cobalt, and clean hydroelectric capacities.',
      },
    ],
  },
  eu: {
    image: euMap,
    titleAr: 'الاتحاد الأوروبي (أقوى نموذج للتكامل الاقتصادي والسياسي)',
    titleEn: 'European Union (27 Sovereign Nations)',
    coords: '50°50′ N, 04°21′ E',
    scaleKm: '0 - 500 - 1000 km',
    membershipAr: '27 دولة أوروبية موحدة تحت مظلة اقتصادية وتشريعية وسياسية',
    membershipEn: '27 Sovereign European Nations',
    headquartersAr: 'بروكسل - بلجيكا (المفوضية ومجلس الاتحاد)',
    headquartersEn: 'Brussels, Belgium',
    strategicAnalysisAr:
      'تكتل وصل لمرحلة الاندماج الاقتصادي والسياسي الكامل مستنداً لشروط كوبنهاجن 1993 (اقتصادية وتشريعية وسياسية)، مع حرية تنقل الأفراد ورؤوس الأموال والسلع والخدمات عبر منطقة الشنغن.',
    strategicAnalysisEn:
      'Apex economic and political union anchored by the 1993 Copenhagen criteria, featuring four fundamental freedoms across the Schengen borderless zone and single market.',
    pins: [
      {
        x: 42,
        y: 44,
        type: 'hq',
        labelAr: 'بروكسل (المفوضية ومجلس الاتحاد الأوروبي)',
        labelEn: 'Brussels (European Commission & Council)',
        detailAr: 'العاصمة السياسية للاتحاد ومقر الجهاز التنفيذي ومجلس القادة لصياغة القوانين.',
        detailEn: 'Executive capital housing the European Commission and Council crafting supranational legislation.',
      },
      {
        x: 48,
        y: 48,
        type: 'member',
        labelAr: 'البرلمان الأوروبي (ستراسبورغ - فرنسا)',
        labelEn: 'European Parliament (Strasbourg)',
        detailAr: 'الهيئة التشريعية الوحيدة المنتخبة مباشرة كل 5 سنوات من أكثر من 450 مليون مواطن أوروبي.',
        detailEn: 'Directly elected supranational parliament sharing legislative and budgetary powers.',
      },
      {
        x: 52,
        y: 44,
        type: 'member',
        labelAr: 'البنك المركزي الأوروبي (فرانكفورت - ألمانيا)',
        labelEn: 'European Central Bank (Frankfurt)',
        detailAr: 'المسؤول عن إدارة عملة اليورو الموحدة وضمان الاستقرار المالي والنقدي لمنطقة اليورو.',
        detailEn: 'Monetary guardian setting Eurozone monetary policy and price stability.',
      },
      {
        x: 38,
        y: 62,
        type: 'member',
        labelAr: 'منطقة الشنغن (حرية تنقل الأفراد دون حدود)',
        labelEn: 'Schengen Borderless Travel Area',
        detailAr: 'منطقة تضم 29 دولة ألغت الحدود الداخلية بينها تماماً لتجسيد الوحدة الأوروبية.',
        detailEn: 'Historic border-free zone eliminating internal passport controls.',
      },
      {
        x: 44,
        y: 46,
        type: 'member',
        labelAr: 'محكمة العدل الأوروبية (لوكسمبورغ)',
        labelEn: 'Court of Justice of the EU (Luxembourg)',
        detailAr: 'السلطة القضائية العليا لضمان تطبيق القوانين وتفسير معاهدات الاتحاد وحل الخلافات.',
        detailEn: 'Supreme judicial tribunal enforcing treaties and uniform application of EU community law.',
      },
    ],
  },
  gcc: {
    image: gccMap,
    titleAr: 'مجلس التعاون لدول الخليج العربية (GCC)',
    titleEn: 'Gulf Cooperation Council (Arabian Peninsula)',
    coords: '24°42′ N, 46°40′ E',
    scaleKm: '0 - 300 - 600 km',
    membershipAr: '6 دول عربية (السعودية، الإمارات، الكويت، قطر، البحرين، سلطنة عمان)',
    membershipEn: '6 Arabian Gulf Monarchies',
    headquartersAr: 'الرياض - المملكة العربية السعودية',
    headquartersEn: 'Riyadh, Kingdom of Saudi Arabia',
    strategicAnalysisAr:
      'يتميز بأعلى درجات التجانس الثقافي واللغوي والديني والديموغرافي بين سكانه، وتعتمد اقتصاداته على تصدير النفط والغاز مع تحكم استراتيجي في مضيق هرمز وقوة عسكرية مشتركة (درع الجزيرة).',
    strategicAnalysisEn:
      'Features unparalleled cultural, linguistic, and religious homogeneity, anchored by oil and gas wealth, control of the Strait of Hormuz, and unified defense under Peninsula Shield.',
    pins: [
      {
        x: 48,
        y: 48,
        type: 'hq',
        labelAr: 'الرياض (مقر الأمانة العامة لمجلس التعاون)',
        labelEn: 'Riyadh (Secretariat-General HQ)',
        detailAr: 'المقر الدائم للأمانة العامة والهيئات التنسيقية المشتركة لمشاريع الربط الخليجي.',
        detailEn: 'Permanent seat of the GCC Secretariat-General orchestrating joint policy and integration.',
      },
      {
        x: 78,
        y: 42,
        type: 'strait',
        labelAr: 'مضيق هرمز (الممر النفطي الأهم عالمياً)',
        labelEn: 'Strait of Hormuz Oil Chokepoint',
        detailAr: 'الممر المائي الاستراتيجي الذي يعبر منه نحو 20% من نفط العالم المنقول بحراً.',
        detailEn: 'Worlds vital energy bottleneck funneling ~20% of maritime crude oil shipments.',
      },
      {
        x: 62,
        y: 38,
        type: 'member',
        labelAr: 'حقول الطاقة البحرية في الخليج العربي',
        labelEn: 'Arabian Gulf Energy Basins',
        detailAr: 'أضخم احتياطيات مؤكدة للنفط الخام والغاز الطبيعي المسال على كوكب الأرض.',
        detailEn: 'Vast submarine oil and LNG reservoirs underpinning global petrochemical supply.',
      },
      {
        x: 74,
        y: 64,
        type: 'member',
        labelAr: 'سلطنة عمان والموانئ المفتوحة على بحر العرب',
        labelEn: 'Oman & Arabian Sea Ocean Gateways',
        detailAr: 'موانئ الدقم وصلالة المطلة على المحيط الهندي لتفادي أي إغلاق محتمل لمضيق هرمز.',
        detailEn: 'Oceanic deepwater ports bypassing the Gulf strait directly facing global shipping lines.',
      },
      {
        x: 46,
        y: 56,
        type: 'member',
        labelAr: 'قوات درع الجزيرة المشتركة',
        labelEn: 'Peninsula Shield Unified Defense Force',
        detailAr: 'القوة العسكرية المشتركة التي أنشئت لحماية سيادة دول المجلس والردع الاستراتيجي.',
        detailEn: 'Combined regional military vanguard safeguarding sovereignty and collective security.',
      },
    ],
  },
  nato: {
    image: natoMap,
    titleAr: 'حلف شمال الأطلسي - الناتو (North Atlantic Treaty Organization)',
    titleEn: 'North Atlantic Treaty Organization (32 Allied Nations)',
    coords: '50°52′ N, 04°25′ E',
    scaleKm: '0 - 1500 - 3000 km',
    membershipAr: '32 دولة حليفة عبر المحيط الأطلسي (أمريكا الشمالية وأوروبا)',
    membershipEn: '32 Sovereign Transatlantic Allied Nations',
    headquartersAr: 'بروكسل - بلجيكا (المقر العام لقيادة الحلف)',
    headquartersEn: 'Brussels, Belgium',
    strategicAnalysisAr:
      'أقوى حلف عسكري دفاعي في التاريخ المعاصر. يرتكز على المادة 5 (الدفاع الجماعي): الهجوم على أي دولة عضو يعتبر هجوماً على الجميع. تأسس عام 1949 لمواجهة الاتحاد السوفيتي وتوسع شرقاً بعد 1991.',
    strategicAnalysisEn:
      'Premier collective defense military alliance in history. Anchored by Article 5 stating an armed attack against one ally is considered an attack against all, ensuring transatlantic deterrence.',
    pins: [
      {
        x: 65,
        y: 38,
        type: 'hq',
        labelAr: 'المقر العام لقيادة حلف الناتو (بروكسل)',
        labelEn: 'NATO Allied Headquarters (Brussels)',
        detailAr: 'المركز السياسي والعسكري المشترك لصناع القرار والقيادة العليا لعمليات الحلف (SHAPE).',
        detailEn: 'Civilian and supreme military command coordinating allied operations and strategic doctrine.',
      },
      {
        x: 22,
        y: 44,
        type: 'member',
        labelAr: 'الولايات المتحدة الأمريكية (المظلة الاستراتيجية)',
        labelEn: 'United States (Strategic Nuclear Umbrella)',
        detailAr: 'القوة العسكرية والاقتصادية الأضخم التي توفر الردع النووي واللوجستي لجميع الحلفاء.',
        detailEn: 'Superpower guarantor furnishing advanced missile defense and intercontinental logistics.',
      },
      {
        x: 44,
        y: 50,
        type: 'strait',
        labelAr: 'المحيط الأطلسي (شريان الربط الدفاعي)',
        labelEn: 'Transatlantic Maritime Lifeline',
        detailAr: 'المسرح البحري الذي يوحد قارتي أمريكا الشمالية وأوروبا ويضمن خطوط الإمداد العسكري.',
        detailEn: 'Naval highway cementing transatlantic collective solidarity and deployment corridors.',
      },
      {
        x: 74,
        y: 35,
        type: 'member',
        labelAr: 'الجناح الشرقي (دول البلطيق وبولندا ورومانيا)',
        labelEn: 'NATO Eastern Flank & Frontline Deterrence',
        detailAr: 'خط الردع الأمامي مع روسيا المعزز بمجموعات قتالية متعددة الجنسيات متأهبة دائماً.',
        detailEn: 'Fortified deterrence perimeter reinforced by multinational battle groups.',
      },
      {
        x: 80,
        y: 48,
        type: 'member',
        labelAr: 'تركيا (البوابة الجنوبية الشرقية والسيطرة على المضائق)',
        labelEn: 'Turkey (Southern Anchor & Black Sea Straits)',
        detailAr: 'ثاني أكبر جيش في الحلف وحامي الجناح الجنوبي الشرقي والمتحكم في مضائق البحر الأسود.',
        detailEn: 'Strategic bulwark anchoring the southeastern frontier and controlling maritime straits.',
      },
    ],
  },
};

export const HighResBlocMap: React.FC<Props> = ({ blocKey, lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showPins, setShowPins] = useState<boolean>(true);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [activePinIndex, setActivePinIndex] = useState<number | null>(null);
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);

  const config = blocMapData[blocKey] || blocMapData['comesa'];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 1));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setActivePinIndex(null);
  };

  const getPinColor = (type: BlocPinData['type']) => {
    switch (type) {
      case 'hq':
        return 'bg-amber-500 text-amber-950 border-amber-300 shadow-amber-500/50';
      case 'member':
        return 'bg-teal-500 text-teal-950 border-teal-300 shadow-teal-500/50';
      case 'strait':
        return 'bg-cyan-500 text-cyan-950 border-cyan-300 shadow-cyan-500/50';
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
            <div className="w-full h-full grid grid-cols-6 grid-rows-4 border border-teal-500/30">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border-r border-b border-teal-500/20 relative">
                  <span className="absolute top-1 left-1 font-mono text-[8px] text-teal-400/60 select-none">
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
                    pin.type === 'hq'
                      ? 'bg-amber-400'
                      : pin.type === 'strait'
                      ? 'bg-cyan-400'
                      : 'bg-teal-400'
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
                      <span className="text-xs font-bold text-teal-400 flex items-center gap-1">
                        <Crosshair className="w-3 h-3 text-teal-400" />
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
          <Building2 className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-teal-300">
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
              showPins ? 'bg-teal-500/20 text-teal-300' : 'text-slate-400 hover:bg-slate-800'
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
            <div className="w-16 h-1 border-b-2 border-l-2 border-r-2 border-teal-400 mb-0.5" />
            <span className="font-mono text-[9px] text-teal-300">{config.scaleKm}</span>
          </div>
          <span className="text-slate-500 font-mono text-[9px] border-l border-slate-700 pl-2">
            Strategic Alliance Geodesy
          </span>
        </div>

        <div className="pointer-events-auto bg-slate-950/85 backdrop-blur-md p-1.5 rounded-full border border-slate-800 flex items-center justify-center shadow-lg">
          <Compass className="w-5 h-5 text-teal-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center select-none relative">
      {renderMapContent(false)}

      {/* Alliance Information Strip */}
      <div className="w-full mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
            <Shield className="w-3 h-3 text-teal-400" />
            {isArabic ? 'نطاق العضوية والدول المشتركة' : 'Membership Scope'}
          </span>
          <span className="font-bold text-teal-300 mt-0.5">
            {isArabic ? config.membershipAr : config.membershipEn}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
            <Building2 className="w-3 h-3 text-amber-400" />
            {isArabic ? 'المقر الدائم والأمانة العامة' : 'Headquarters & Secretariat'}
          </span>
          <span className="font-bold text-amber-300 mt-0.5">
            {isArabic ? config.headquartersAr : config.headquartersEn}
          </span>
        </div>
      </div>

      {/* Strategic Integration Lesson Note */}
      <div className="w-full mt-2.5 p-3 rounded-xl bg-gradient-to-r from-teal-950/30 via-slate-900/50 to-emerald-950/30 border border-teal-800/40 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
        <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-teal-300 block mb-0.5">
            {isArabic ? 'التحليل الجيوسياسي ومكتسبات التكامل:' : 'Geopolitical Integration Analysis:'}
          </span>
          {isArabic ? config.strategicAnalysisAr : config.strategicAnalysisEn}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreenModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="w-full max-w-6xl relative flex flex-col">
            <div className="flex items-center justify-between mb-3 text-white">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-teal-400" />
                <h3 className="font-bold text-lg text-teal-300">
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
