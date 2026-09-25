import React, { useState, useMemo } from 'react';
import {
  Globe2,
  Maximize2,
  Sparkles,
  Info,
  Compass,
  CheckCircle2,
  Shield,
  ChevronRight,
  Calculator,
  RotateCcw,
  Navigation,
  Eye,
} from 'lucide-react';
import egyptMap from '../../../assets/geography/egypt_satellite_map.jpg';
import franceMap from '../../../assets/geography/france_satellite_map.jpg';
import chileMap from '../../../assets/geography/chile_satellite_map.jpg';
import turkeyMap from '../../../assets/geography/turkey_satellite_map.jpg';
import congoMap from '../../../assets/geography/congo_satellite_map.jpg';
import afghanistanMap from '../../../assets/geography/afghanistan_satellite_map.jpg';
import lesothoMap from '../../../assets/geography/lesotho_satellite_map.jpg';
import japanMap from '../../../assets/geography/japan_satellite_map.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export type MorphologyType =
  | 'compact'
  | 'compact_protruded'
  | 'elongated_ns'
  | 'elongated_ew'
  | 'fragmented'
  | 'perforated';

export interface StateCaseStudy {
  id: string;
  nameAr: string;
  nameEn: string;
  type: MorphologyType;
  typeAr: string;
  typeEn: string;
  satelliteMap: string;
  areaKm2: number;
  perimeterKm: number;
  polsbyPopper: number; // 4 * pi * A / P^2
  capitalAr: string;
  capitalEn: string;
  strategicDescAr: string;
  strategicDescEn: string;
  advantagesAr: string[];
  advantagesEn: string[];
  disadvantagesAr: string[];
  disadvantagesEn: string[];
  hotspots: {
    id: string;
    xPct: number;
    yPct: number;
    titleAr: string;
    titleEn: string;
    descAr: string;
    descEn: string;
  }[];
}

export const STATE_CASE_STUDIES: StateCaseStudy[] = [
  {
    id: 'egypt',
    nameAr: 'جمهورية مصر العربية',
    nameEn: 'Arab Republic of Egypt',
    type: 'compact',
    typeAr: 'شكل مندمج / منتظم ذو تماسك استراتيجي',
    typeEn: 'Compact / Regular Ideal Geopolitical Form',
    satelliteMap: egyptMap,
    areaKm2: 1002450,
    perimeterKm: 4350,
    polsbyPopper: 0.665,
    capitalAr: 'القاهرة (قلب الدولة السياسي والملاحي)',
    capitalEn: 'Cairo (Political & Navigational Core)',
    strategicDescAr:
      'تمثل مصر النموذج المثالي للشكل المندمج المنتظم شبه المربع؛ حيث تتساوى المسافات تقريباً من المركز (القاهرة) إلى كافة الحدود السيادية، مع واجهتين بحريتين استراتيجيتين (البحر المتوسط شمالاً والبحر الأحمر شرقاً) وممر قناة السويس العالمي.',
    strategicDescEn:
      'Egypt serves as the textbook paradigm of a compact/regular state. With an equidistant radius from Cairo to outer frontiers, two extensive marine facades (Mediterranean and Red Sea), and the Suez Canal, it maximizes defensive depth and centralized administrative command.',
    advantagesAr: [
      'قصر طول الحدود السياسية مقارنة بالمساحة الضخمة مما يقلل نفقات التحصين والدفاع العسكري.',
      'سهولة الإدارة المركزية والسيطرة الميدانية وتطبيق القوانين من العاصمة لجميع الأطراف.',
      'حرية وسرعة حركة القوات المسلحة في أي اتجاه عبر شبكة المواصلات المحورية المتصلة.',
      'تقليل فرص النزاعات والتوترات الحدودية بفضل قصر خط الحدود التضاريسي المنضبط.',
    ],
    advantagesEn: [
      'Minimized boundary length relative to total land area, reducing frontier defense costs.',
      'Effective centralized governance and rapid administrative enforcement nationwide.',
      'High military mobility and rapid force deployment along internal interior lines.',
      'Reduced border friction and boundary vulnerability due to optimized perimeter geometry.',
    ],
    disadvantagesAr: [
      'التركز السكاني والتنموي الكثيف في الشريط الفيضي الخصب لوادي النيل والدلتا.',
      'الحاجة لمشروعات بنية تحتية وممرات تنمية لدمج الصحاري الشرقية والغربية وسيناء بالكامل.',
    ],
    disadvantagesEn: [
      'Concentrated population density and economic activity along the Nile Valley corridor.',
      'Requires substantial infrastructure development corridors across desert wilderness to Sinai.',
    ],
    hotspots: [
      {
        id: 'cairo_nexus',
        xPct: 53.0,
        yPct: 30.0,
        titleAr: 'القاهرة - قلب الدولة والمركز الهندسي',
        titleEn: 'Cairo - Political & Geographic Nexus',
        descAr:
          'موقع العاصمة التاريخي عند رأس الدلتا يضمن إشرافاً متوازناً على الدلتا شمالاً والصعيد جنوباً ومحور قناة السويس شرقاً.',
        descEn:
          'Located at the apex of the Nile Delta, Cairo affords equidistant political administration over Lower and Upper Egypt and the Suez Canal axis.',
      },
      {
        id: 'suez_canal',
        xPct: 62.0,
        yPct: 28.0,
        titleAr: 'قناة السويس - الشريان الملاحي العالمي',
        titleEn: 'Suez Canal - Global Maritime Arterial Chokepoint',
        descAr:
          'أهم ممر ملاحي اصطناعي يربط الشرق بالغرب ويدعم الواجهة البحرية المزدوجة للدولة المندمجة.',
        descEn:
          'World premier artificial waterway linking Atlantic/Mediterranean with Indo-Pacific trade corridors.',
      },
      {
        id: 'western_desert_depth',
        xPct: 30.0,
        yPct: 55.0,
        titleAr: 'الصحراء الغربية - العمق الاستراتيجي الواسع',
        titleEn: 'Western Desert - Strategic Territorial Depth',
        descAr:
          'هضبة شاسعة تمنح الدولة عمقاً دفاعياً كبيراً واحتياطيات مياه جوفية وثروات بترولية ومعدنية واعدة.',
        descEn:
          'Extensive plateau providing immense defensive strategic depth, sandstone aquifers, and mineral riches.',
      },
      {
        id: 'sinai_gateway',
        xPct: 70.0,
        yPct: 34.0,
        titleAr: 'شبه جزيرة سيناء - البوابة الشرقية الاستراتيجية',
        titleEn: 'Sinai Peninsula - Eastern Strategic Bastion',
        descAr:
          'الجسر البري الآسيوي الرابط لقارتي إفريقيا وآسيا ومفتاح الأمن القومي المصري عبر العصور.',
        descEn:
          'Afro-Asian land bridge serving as Egypt’s historic geopolitical forward shield and eastern threshold.',
      },
    ],
  },
  {
    id: 'france',
    nameAr: 'الجمهورية الفرنسية',
    nameEn: 'French Republic',
    type: 'compact',
    typeAr: 'شكل مندمج سداسي الأضلاع (Hexagone)',
    typeEn: 'Compact Hexagonal Morphology',
    satelliteMap: franceMap,
    areaKm2: 551695,
    perimeterKm: 3100,
    polsbyPopper: 0.722,
    capitalAr: 'باريس (حوض باريس الخصب)',
    capitalEn: 'Paris (Parisian Hydrographic Basin)',
    strategicDescAr:
      'يُطلق على فرنسا جغرافياً "الشكل السداسي"؛ وهو نموذج أوروبي مثالي للشكل المندمج مع توازن فريد بين الحدود الطبيعية (جبال الألب، البرانس، نهر الراين) والواجهات البحرية (المحيط الأطلسي والبحر المتوسط).',
    strategicDescEn:
      'Known as "L’Hexagone", France exemplifies compact morphology in Western Europe. Equidistant layout from Paris to peripheral departments maximizes communication, agricultural cohesion, and defensive stability.',
    advantagesAr: [
      'سهولة الحركة والاتصال الداخلي بين كافة الأقاليم بفضل استدارة الشكل.',
      'تنوع الواجهات البحرية مع السيطرة المركزية الصارمة من حوض باريس.',
      'حدود طبيعية منيعة في معظم الاتجاهات (جبال البرانس والألب وبحر المانش).',
    ],
    advantagesEn: [
      'Seamless internal connectivity and communication across provincial departments.',
      'Balanced dual oceanic/Mediterranean coastlines managed under central authority.',
      'Robust natural topographic frontiers (Pyrenees, Alps, Jura, and English Channel).',
    ],
    disadvantagesAr: [
      'السهل الشمالي المفتوح تاريخياً كان ممراً لغزوات عسكرية متعاقبة (الثغرة الفلاندرية).',
    ],
    disadvantagesEn: [
      'The open northern European plain historically constituted an undefended invasion corridor.',
    ],
    hotspots: [
      {
        id: 'paris_basin',
        xPct: 48.0,
        yPct: 32.0,
        titleAr: 'حوض باريس - القلب السياسي والاقتصادي',
        titleEn: 'Paris Basin - Core Hydrographic & Political Hub',
        descAr: 'شبكة أنهار متقاربة تصب في السين تجعل الإشراف على كامل التراب الفرنسي سهلاً وسريعاً.',
        descEn: 'Concentric river networks converging on Paris facilitate nationwide transport and governance.',
      },
      {
        id: 'alps_pyrenees',
        xPct: 65.0,
        yPct: 70.0,
        titleAr: 'الحواجز الجبلية الطبيعية الجنوبية والشرقية',
        titleEn: 'Alps & Pyrenees Natural Defensive Barriers',
        descAr: 'سلاسل جبلية وعرة تشكل حدوداً سياسية مستقرة وغير قابلة للاختراق بسهولة مع إسبانيا وإيطاليا.',
        descEn: 'Rugged alpine orogeny creating stable, legally delineated physical boundaries with Spain and Italy.',
      },
    ],
  },
  {
    id: 'chile',
    nameAr: 'جمهورية تشيلي',
    nameEn: 'Republic of Chile',
    type: 'elongated_ns',
    typeAr: 'شكل شريطي مستطيل طولي (شمال - جنوب)',
    typeEn: 'Elongated Latitudinal N-S Ribbon Morphology',
    satelliteMap: chileMap,
    areaKm2: 756102,
    perimeterKm: 6300,
    polsbyPopper: 0.239,
    capitalAr: 'سانتياغو (الوادي الأوسط)',
    capitalEn: 'Santiago (Central Longitudinal Valley)',
    strategicDescAr:
      'تمتد تشيلي كشريط ساحلي نحيف بطول يزيد عن 4,300 كم وعرض لا يتجاوز 175 كم في المتوسط بين جبال الأنديز الشاهقة والمحيط الهادئ؛ هذا الامتداد العرضي الضخم يمنحها تنوعاً مناخياً هائلاً من صحراء أتاكاما الجافة شمالاً وحتى القطب الجنوبي البارد جنوباً.',
    strategicDescEn:
      'Chile extends over 4,300 km north-to-south with an average width of only 175 km, bounded between the Andes cordillera and the Pacific Ocean. This extreme elongation produces immense climatic diversity but severe logistical defense handicaps.',
    advantagesAr: [
      'تنوع مناخي مذهل (صحراوي شمالاً، متوسطي بالوسط، محيطي رطب ومثلج جنوباً) يثري الإنتاج الزراعي والغابي.',
      'واجهة ساحلية هائلة على المحيط الهادئ تدعم قطاع الموانئ والثروة السمكية والتجارة العالمية.',
      'جبال الأنديز كدرع طبيعي صلب يحد من الأخطار العسكرية البرية من جهة الشرق.',
    ],
    advantagesEn: [
      'Unrivaled climatic diversity across 38 degrees of latitude boosting agricultural variety.',
      'Extensive Pacific maritime littoral facilitating global sea lines and maritime fishing.',
      'Imposing Andes mountain range acting as an impermeable eastern geological bulwark.',
    ],
    disadvantagesAr: [
      'صعوبة بالغة في الاتصال والمواصلات البرية والسيطرة الإدارية بين الشمال القاحل والجنوب الجليدي.',
      'طول خط الحدود الهائل يجعل الدفاع العسكري وحراسة السواحل شديد التكلفة والتعقيد.',
      'عرض الدولة الضيق جداً يجعلها عرضة للقطع العسكري بسهولة حال حدوث نزاع بري أو إنزال ساحلي.',
    ],
    disadvantagesEn: [
      'Severe infrastructural hurdles in longitudinal transport and remote governance.',
      'Enormous boundary and coastline length inflates national defense and surveillance costs.',
      'Narrow east-west depth renders the nation vulnerable to being sliced in two during warfare.',
    ],
    hotspots: [
      {
        id: 'atacama_north',
        xPct: 52.0,
        yPct: 20.0,
        titleAr: 'صحراء أتاكاما الشمالية - ثروة النحاس والليثيوم',
        titleEn: 'Atacama Desert - Global Mineral & Lithium Reserve',
        descAr: 'أجف بقعة على وجه الأرض لكنها تحتضن أكبر احتياطيات نحاس وليثيوم بالعالم في شكل شريطي منعزل.',
        descEn: 'Hyper-arid high desert harboring the world’s richest open-pit copper mines and lithium brine flats.',
      },
      {
        id: 'santiago_central',
        xPct: 48.0,
        yPct: 55.0,
        titleAr: 'الوادي الأوسط وسانتياغو - النواة الديموغرافية',
        titleEn: 'Central Valley & Santiago - Demographic Core',
        descAr: 'يضم أكثر من 70% من سكان تشيلي وأنشطتها الصناعية والزراعية بفضل المناخ المتوسطي المعتدل.',
        descEn: 'Home to over 70% of national population and economic engine under Mediterranean agro-climate.',
      },
    ],
  },
  {
    id: 'turkey',
    nameAr: 'الجمهورية التركية',
    nameEn: 'Republic of Turkey',
    type: 'elongated_ew',
    typeAr: 'شكل شريطي مستطيل عرضي (شرق - غرب)',
    typeEn: 'Elongated Longitudinal E-W Morphology',
    satelliteMap: turkeyMap,
    areaKm2: 783562,
    perimeterKm: 2875,
    polsbyPopper: 0.385,
    capitalAr: 'أنقرة (قلب هضبة الأناضول)',
    capitalEn: 'Ankara (Anatolian Plateau Hearth)',
    strategicDescAr:
      'تمتد تركيا عرضياً من آسيا الصغرى حتى أطراف جنوب شرق أوروبا؛ يمتد شكلها من الشرق إلى الغرب عبر مسافة تقارب 1,600 كم، مما يقلل التنوع المناخي مقارنة بالشكل الطولي، ولكنه يجعلها جسراً قارياً وجيوسياسياً فريداً بين الشرق والغرب.',
    strategicDescEn:
      'Turkey exhibits an east-west elongated morphology spanning ~1,600 km across the Anatolian peninsula into Eastern Thrace. Running along parallel latitudes limits climatic differentiation while creating an irreplaceable intercontinental transit bridge.',
    advantagesAr: [
      'موقع جيواستراتيجي فريد كجسر قاري ومركز أنابيب طاقة عالمي بين آسيا وأوروبا والشرق الأوسط.',
      'التحكم بالمضايق البحرية المحورية (البوسفور والدردنيل) بموجب اتفاقية مونترو 1936.',
      'وجود العاصمة أنقرة في قلب هضبة الأناضول يوفر حماية أمنية أفضل من العاصمة الساحلية التاريخية إسطنبول.',
    ],
    advantagesEn: [
      'Premier intercontinental transit land bridge for hydrocarbon pipelines between East and West.',
      'Command over Turkish Straits (Bosporus & Dardanelles) under the 1936 Montreux Convention.',
      'Relocation of capital to inland Ankara provided superior geostrategic defensive immunity.',
    ],
    disadvantagesAr: [
      'الامتداد العرضي يقع على دوائر عرض متقاربة نسبياً مما يقلل من التنوع المناخي للنبات الطبيعي والزراعة.',
      'تعرض الأطراف الشرقية الجبلية الوعرة لصعوبات لوجستية وتنموية مقارنة بالغرب الأوروبي الصناعي.',
    ],
    disadvantagesEn: [
      'East-west orientation follows similar latitudinal belts, moderating climatic variety.',
      'Rugged eastern mountainous Anatolia experiences infrastructure and integration friction.',
    ],
    hotspots: [
      {
        id: 'turkish_straits',
        xPct: 22.0,
        yPct: 28.0,
        titleAr: 'مضيقا البوسفور والدردنيل - بوابة البحر الأسود',
        titleEn: 'Turkish Straits - Chokepoints of Black Sea',
        descAr: 'الممر المائي الوحيد للدول الحبيسة والمشاطئة للبحر الأسود نحو البحار المفتوحة والمحيطات.',
        descEn: 'Sole maritime passage connecting Black Sea littoral nations to the Aegean and Mediterranean.',
      },
      {
        id: 'ankara_heart',
        xPct: 45.0,
        yPct: 40.0,
        titleAr: 'أنقرة - الحصانة الدفاعية في قلب الهضبة',
        titleEn: 'Ankara - Central Inviolable Citadel',
        descAr: 'اختيار أتاتورك لأنقرة عام 1923 كعاصمة جديدة عزز دفاعية الدولة بعيداً عن مرمى الأساطيل البحرية.',
        descEn: 'Designation of Ankara as capital in 1923 shielded executive power from naval amphibious threats.',
      },
    ],
  },
  {
    id: 'congo',
    nameAr: 'جمهورية الكونغو الديمقراطية',
    nameEn: 'Democratic Republic of the Congo',
    type: 'compact_protruded',
    typeAr: 'شكل مندمج ذو بروز مائي (بروز نحو المحيط الأطلسي)',
    typeEn: 'Compact with Panhandle / Maritime Protrusion',
    satelliteMap: congoMap,
    areaKm2: 2344858,
    perimeterKm: 10730,
    polsbyPopper: 0.256,
    capitalAr: 'كينشاسا (على ضفاف نهر الكونغو)',
    capitalEn: 'Kinshasa (Congo River Littoral)',
    strategicDescAr:
      'دولة عملاقة وسط إفريقيا ذات كتلة أرضية مندمجة ضخمة ولكن يخرج منها شريط أرضي ضيق (بروز) يمتد غرباً ليمنحها منفذاً بحرياً حيوياً بطول 40 كم فقط على المحيط الأطلسي وميناء ماتادي عند مصب نهر الكونغو.',
    strategicDescEn:
      'The DRC possesses an expansive compact core punctuated by a narrow western corridor (panhandle) that carves out a 40-km sovereign Atlantic coastline, transforming a landlocked giant into an ocean-connected state.',
    advantagesAr: [
      'كسر العزلة الجغرافية والحبيسة وتأمين منفذ مائي سيادي على مياه المحيط الأطلسي للتجارة الدولية.',
      'كتلة داخلية هائلة مندمجة وغنية بالمعادن الإستراتيجية (الكوبالت، الكولتان، النحاس).',
      'حوض نهر الكونغو الضخم يؤمن شبكة نقل مائي داخلية وتوليد كهرومائي هائل (سد إنجا).',
    ],
    advantagesEn: [
      'Prevents landlocked isolation by securing sovereign Atlantic oceanic access for resource exports.',
      'Massive inland continental mass endowed with premier critical minerals (cobalt, coltan, copper).',
      'Congo River fluvial basin powers domestic freight transport and monumental hydro potential.',
    ],
    disadvantagesAr: [
      'البروز الساحلي الضيق والهش محاط بجيران أقوياء (أنغولا وجيب كابيندا) ويسهل تطويقه.',
      'المساحة الاستوائية الهائلة تجعل بسط السيطرة الأمنية على الأقاليم الشرقية (كيفو) شديد الصعوبة.',
    ],
    disadvantagesEn: [
      'Vulnerable coastal bottleneck sandwiched between Angola and Cabinda exclave.',
      'Vast dense rainforest terrain complicates military control over rebellious eastern provinces.',
    ],
    hotspots: [
      {
        id: 'matadi_protrusion',
        xPct: 15.0,
        yPct: 62.0,
        titleAr: 'بروز المحيط الأطلسي وميناء ماتادي',
        titleEn: 'Atlantic Oceanic Protrusion & Port of Matadi',
        descAr: 'الشريان البحري الوحيد للدولة؛ ممر ضيق يربط مصب نهر الكونغو بالتجارة البحرية العالمية.',
        descEn: 'The critical 40-km bottleneck funneling national mineral wealth to global oceanic trade lanes.',
      },
      {
        id: 'katanga_copperbelt',
        xPct: 75.0,
        yPct: 80.0,
        titleAr: 'إقليم كاتانغا - حزام المعادن الثمين',
        titleEn: 'Katanga Copperbelt - Mineral Treasure House',
        descAr: 'أكبر مستودع للكوبالت والنحاس عالمياً؛ يقع في أقصى الجنوب الشرقي بعيداً عن العاصمة كينشاسا.',
        descEn: 'Global epicenter of cobalt and copper production situated on the southeastern periphery.',
      },
    ],
  },
  {
    id: 'afghanistan',
    nameAr: 'جمهورية أفغانستان',
    nameEn: 'Islamic Republic of Afghanistan',
    type: 'compact_protruded',
    typeAr: 'شكل مندمج ذو بروز جبلي (ممر واخان العازل)',
    typeEn: 'Compact with Wakhan Salient Protrusion',
    satelliteMap: afghanistanMap,
    areaKm2: 652864,
    perimeterKm: 5529,
    polsbyPopper: 0.268,
    capitalAr: 'كابول (المركز الحصين بين الجبال)',
    capitalEn: 'Kabul (Intermontane Fortress)',
    strategicDescAr:
      'دولة حبيسة جبلية ذات كتلة مركزية مندمجة ولكن يبرز منها في الشمال الشرقي شريط ضيق شديد الوعرة يُعرف بـ "ممر واخان" (Wakhan Corridor) يمتد لمسافة 350 كم ليفصل تاريخياً بين الإمبراطورية البريطانية في الهند والإمبراطورية الروسية في آسيا الوسطى ويصل حدود أفغانستان بالصين.',
    strategicDescEn:
      'A landlocked intermontane nation whose compact geometry features the northeastern Wakhan Corridor—a 350-km mountainous panhandle demarcated in 1895 as a buffer state barrier between the British Raj and Russian Tsarist empires.',
    advantagesAr: [
      'توفير نقطة تماس وحدود جغرافية مباشرة مع جمهورية الصين الشعبية للتجارة والتعاون.',
      'شكل حاجزاً جيوسياسياً أوقف الصدام الإمبراطوري في لعبة آسيا الكبرى (The Great Game).',
      'تضاريس جبلية وعرة تعطي دفاعاً طبيعياً هائلاً ضد أي احتلال أجنبي عبر التاريخ.',
    ],
    advantagesEn: [
      'Provides a direct physical land frontier and economic connection with the People’s Republic of China.',
      'Historic buffer zone preventing direct military friction during "The Great Game".',
      'Rugged Hindu Kush orography supplies natural asymmetric defensive fortifications.',
    ],
    disadvantagesAr: [
      'صعوبة السيطرة الإدارية على ممر واخان الوعر المعزول مناخياً بالثلوج معظم فترات العام.',
      'دولة حبيسة بالكامل تفتقر لأي منفذ بحري مما يجعل تجارتها رهناً برضا دول الجوار.',
    ],
    disadvantagesEn: [
      'Virtually inaccessible topography and snowbound passes in Wakhan for most of the year.',
      'Completely landlocked geopolitical status creating total dependency on transit through neighbors.',
    ],
    hotspots: [
      {
        id: 'wakhan_corridor',
        xPct: 82.0,
        yPct: 22.0,
        titleAr: 'ممر واخان - البروز الاستراتيجي نحو الصين',
        titleEn: 'Wakhan Corridor - Buffer Protrusion to China',
        descAr: 'ممر جبلي ضيق بين طاجيكستان وباكستان ينتهي بحدود مشتركة مع الصين في هضبة بامير.',
        descEn: 'High-altitude narrow buffer corridor terminating at the Chinese border in the Pamir Mountains.',
      },
    ],
  },
  {
    id: 'lesotho',
    nameAr: 'مملكة ليسوتو',
    nameEn: 'Kingdom of Lesotho',
    type: 'perforated',
    typeAr: 'دولة محتواة / جيبية بالكامل (Enclave)',
    typeEn: 'Perforated Host Enclave State',
    satelliteMap: lesothoMap,
    areaKm2: 30355,
    perimeterKm: 909,
    polsbyPopper: 0.462,
    capitalAr: 'مازيرو (قرب الحدود الغربية)',
    capitalEn: 'Maseru (Western Border Littoral)',
    strategicDescAr:
      'تقع ليسوتو محاطة بالكامل من جميع جهاتها بدولة واحدة فقط هي جمهورية جنوب إفريقيا (حيث تعتبر جنوب إفريقيا دولة مُخترَقة Perforated State وليوتسو هي الدولة الجيبية Enclave). هذا الوضع الجيوسياسي يجعل ليسوتو تابعة سياسياً واقتصادياً لجنوب إفريقيا بشكل مطلق.',
    strategicDescEn:
      'Completely encircled by a single sovereign state (South Africa), Lesotho represents an enclave within a perforated host country. This total encirclement dictates absolute political and economic dependency on South Africa for transit, goods, and electricity.',
    advantagesAr: [
      'التجانس العرقي واللغوي والثقافي التام لشعب الباسوتو داخل مملكتهم الجبلية.',
      'ثروة مائية هائلة في جبال دراكنزبرغ تبيعها لجنوب إفريقيا عبر مشروع مياه مرتفعات ليسوتو (LHWP).',
    ],
    advantagesEn: [
      'High ethnic, linguistic, and cultural homogeneity of the Basotho nation.',
      'Abundant clean freshwater stored in Drakensberg mountains exported to South Africa via the LHWP.',
    ],
    disadvantagesAr: [
      'تبعية سياسية واقتصادية مطلقة لجنوب إفريقيا؛ لا تستطيع الاتصال بالعالم الخارجي دون إذنها.',
      'عدم امتلاك أي سيادة جوية حرة أو منفذ بحري مستقل؛ أي حصار يفرضه الجار يخنق الدولة في أيام.',
      'فقدان حرية المناورة في السياسة الخارجية والاضطرار للتوافق مع سياسات بريتوريا.',
    ],
    disadvantagesEn: [
      'Total geopolitical subordination to South Africa; zero sovereign external transit routes.',
      'No independent access to global skies or open oceans; easily strangled by domestic blockades.',
      'Foreign diplomacy must strictly avoid alienating the encircling host nation.',
    ],
    hotspots: [
      {
        id: 'lesotho_highlands_water',
        xPct: 60.0,
        yPct: 45.0,
        titleAr: 'مشروع مياه مرتفعات ليسوتو وسد كاتسي',
        titleEn: 'Katse Dam & Lesotho Highlands Water Project',
        descAr: 'شريان تصدير "الذهب الأبيض" (المياه العذبة) إلى إقليم جوهانسبرغ الصناعي في جنوب إفريقيا.',
        descEn: 'Massive alpine reservoir exporting mountain freshwater to South Africa’s industrial heartland.',
      },
    ],
  },
  {
    id: 'japan',
    nameAr: 'دولة اليابان',
    nameEn: 'State of Japan',
    type: 'fragmented',
    typeAr: 'شكل مجزأ بحري (أرخبيل جزري)',
    typeEn: 'Fragmented Maritime Insular Archipelago',
    satelliteMap: japanMap,
    areaKm2: 377975,
    perimeterKm: 29751,
    polsbyPopper: 0.054,
    capitalAr: 'طوكيو (جزيرة هونشو)',
    capitalEn: 'Tokyo (Honshu Island Plain)',
    strategicDescAr:
      'تتكون اليابان من أرخبيل بحري يضم آلاف الجزر مع أربع جزر رئيسية (هونشو، هوكايدو، كيوشو، شيكوكو) تفصلها مياه البحر؛ يتطلب هذا الشكل المجزأ شبكات جسور وأنفاق عملاقة (مثل نفق سيكان) لربط الجزر وتحقيق التكامل القومي.',
    strategicDescEn:
      'An island archipelago comprising over 6,800 islands anchored by four main islands (Honshu, Hokkaido, Kyushu, Shikoku). Its fragmented sea-separated geography necessitates colossal engineering feats (e.g., Seikan Tunnel) to foster territorial and economic cohesion.',
    advantagesAr: [
      'سواحل بحرية هائلة ومياه إقليمية ومنطقة اقتصادية خالصة شاسعة غنية بالثروات السمكية.',
      'عزلة بحرية حمت اليابان تاريخياً من الغزوات البرية القارية (مثل صد الغزو المغولي).',
      'تطوير أسطول تجاري وموانئ عالمية عملاقة جعلتها قوة اقتصادية وصناعية رائدة.',
    ],
    advantagesEn: [
      'Tremendous coastline yielding vast EEZ maritime domains teeming with marine resources.',
      'Historic maritime moat insulating the homeland from continental overland invasions.',
      'World-class maritime logistics, shipyards, and mercantile ports fueling industrial hegemony.',
    ],
    disadvantagesAr: [
      'صعوبة وتكلفة الربط المادي بين الجزر وتحديات الاتصال الأرضي وقت الكوارث الطبيعية.',
      'تعرض الجزر المستمر للأعاصير البحرية وأمواج تسونامي والزلازل في حزام النار الهادئ.',
      'الفقر الشديد في الموارد المعدنية ومصادر الطاقة الأحفورية والاعتماد الكامل على الاستيراد البحري.',
    ],
    disadvantagesEn: [
      'High infrastructural costs to link fragmented islands across turbulent ocean straits.',
      'Acute vulnerability to seismic activity, tsunamis, and typhoons on the Pacific Ring of Fire.',
      'Critical deficiency in indigenous hydrocarbons and raw minerals requiring vulnerable sea supply lines.',
    ],
    hotspots: [
      {
        id: 'tokyo_bay',
        xPct: 62.0,
        yPct: 58.0,
        titleAr: 'خليج طوكيو وحزام هونشو الصناعي',
        titleEn: 'Tokyo Bay Megalopolis & Pacific Belt',
        descAr: 'أضخم تجمع سكاني وصناعي وتكنولوجي في العالم يتركز في جزيرة هونشو المركزية.',
        descEn: 'The world’s most populous urban and industrial agglomeration dominating central Honshu island.',
      },
      {
        id: 'seikan_tunnel',
        xPct: 68.0,
        yPct: 35.0,
        titleAr: 'نفق سيكان - قهر التجزئة البحرية',
        titleEn: 'Seikan Undersea Tunnel - Bridging Fragmentation',
        descAr: 'أطول نفق سكك حديدية تحت قاع البحر في العالم يربط جزيرة هونشو بجزيرة هوكايدو الشمالية.',
        descEn: 'World-record undersea rail link overcoming maritime separation between Honshu and Hokkaido.',
      },
    ],
  },
];

export const StateMorphologyStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>('egypt');
  const [activeHotspotId, setActiveHotspotId] = useState<string>('cairo_nexus');
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  // Compactness Calculator state
  const [calcArea, setCalcArea] = useState<number>(1002450);
  const [calcPerimeter, setCalcPerimeter] = useState<number>(4350);

  const selectedCountry = useMemo(() => {
    return (
      STATE_CASE_STUDIES.find((c) => c.id === selectedCountryId) ||
      STATE_CASE_STUDIES[0]
    );
  }, [selectedCountryId]);

  const activeHotspot = useMemo(() => {
    return (
      selectedCountry.hotspots.find((h) => h.id === activeHotspotId) ||
      selectedCountry.hotspots[0]
    );
  }, [selectedCountry, activeHotspotId]);

  // Polsby-Popper Compactness Score: C = 4 * PI * Area / Perimeter^2
  const calculatedCompactness = useMemo(() => {
    if (calcPerimeter <= 0) return 0;
    const score = (4 * Math.PI * calcArea) / (calcPerimeter * calcPerimeter);
    return Math.min(Math.max(score, 0), 1);
  }, [calcArea, calcPerimeter]);

  const getCompactnessLabel = (score: number) => {
    if (score >= 0.6) {
      return isArabic
        ? 'شكل مندمج مثالي فائق التماسك (Compact Excellence)'
        : 'Highly Compact / Ideal Regular Morphology';
    } else if (score >= 0.35) {
      return isArabic
        ? 'شكل متوسط التماسك (Moderate Compactness)'
        : 'Moderate Regularity / Mild Distortion';
    } else if (score >= 0.15) {
      return isArabic
        ? 'شكل شريطي أو ذو بروز (Elongated / Protruded Distortion)'
        : 'Significantly Elongated or Protruded Form';
    } else {
      return isArabic
        ? 'شكل شديد التشتت أو التجزؤ الجذري (Severely Fragmented / Ribbon)'
        : 'Extremely Fragmented / Linear Filament Form';
    }
  };

  const handleCountryChange = (id: string) => {
    setSelectedCountryId(id);
    const country = STATE_CASE_STUDIES.find((c) => c.id === id);
    if (country) {
      setActiveHotspotId(country.hotspots[0]?.id || '');
      setCalcArea(country.areaKm2);
      setCalcPerimeter(country.perimeterKm);
    }
  };

  const handleOpenModal = () => {
    setModalData({
      imageUrl: selectedCountry.satelliteMap,
      titleAr: `خريطة الأقمار الصناعية 4K — ${selectedCountry.nameAr}`,
      titleEn: `4K Satellite Cartography — ${selectedCountry.nameEn}`,
      subtitleAr: `${selectedCountry.typeAr} | معامل بولسبي-بوبر: ${selectedCountry.polsbyPopper.toFixed(3)}`,
      subtitleEn: `${selectedCountry.typeEn} | Polsby-Popper Ratio: ${selectedCountry.polsbyPopper.toFixed(3)}`,
      descriptionAr: `${selectedCountry.strategicDescAr} | العاصمة: ${selectedCountry.capitalAr} | المساحة: ${selectedCountry.areaKm2.toLocaleString()} كم² | المحيط: ${selectedCountry.perimeterKm.toLocaleString()} كم.`,
      descriptionEn: `${selectedCountry.strategicDescEn} | Capital: ${selectedCountry.capitalEn} | Area: ${selectedCountry.areaKm2.toLocaleString()} km² | Perimeter: ${selectedCountry.perimeterKm.toLocaleString()} km.`,
      locationAr: `${selectedCountry.nameAr} (${selectedCountry.capitalAr})`,
      locationEn: `${selectedCountry.nameEn} (${selectedCountry.capitalEn})`,
      dateOrEraAr: 'الجغرافيا السياسية المعاصرة — دراسة أشكال الدول',
      dateOrEraEn: 'Contemporary Political Geography — Morphology & Geometry',
    });
  };

  // Base theme classes
  const cardBg = isContrast
    ? 'bg-black border-amber-400 text-white'
    : isLight
      ? 'bg-white border-slate-200 text-slate-800 shadow-lg'
      : 'bg-slate-900/90 border-slate-700/80 text-slate-100 shadow-xl';

  const innerCardBg = isContrast
    ? 'bg-zinc-950 border-amber-400/60'
    : isLight
      ? 'bg-slate-50 border-slate-200'
      : 'bg-slate-800/60 border-slate-700/60';

  return (
    <div className={`p-4 sm:p-6 rounded-2xl border transition-all ${cardBg}`}>
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-700/40">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {isArabic
                ? 'مختبر مورفولوجيا وأشكال الدول 4K'
                : 'State Morphology & Geometry Studio'}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
              Polsby-Popper Metric
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
            <Globe2 className="w-7 h-7 text-emerald-400" />
            {isArabic
              ? 'مختبر أشكال الدول والتماسك الجيوسياسي (State Morphology)'
              : 'State Territorial Morphology & Geopolitical Cohesion'}
          </h2>
          <p
            className={`mt-1 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
          >
            {isArabic
              ? 'دراسة مقارنة تفاعلية لأشكال الدول الثمانية (المندمج، ذو البروز، الشريطي الطولي والعرضي، المجزأ، والمحتوى الجيبي) مع حاسبة بولسبي-بوبر الدقيقة لقياس الاندماج الهندسي.'
              : 'Comparative analysis of 8 global state geometries with interactive Polsby-Popper compactness calculator and satellite imagery.'}
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-emerald-500/20 self-start md:self-auto cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          {isArabic ? 'استعراض القمر الصناعي بدقة 4K' : 'View Full 4K Satellite'}
        </button>
      </div>

      {/* Country Selector Pill Carousel */}
      <div className="my-6">
        <label
          className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
        >
          {isArabic
            ? 'اختر الدولة المدروسة في المنهج:'
            : 'Select Curriculum Case Study:'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {STATE_CASE_STUDIES.map((c) => {
            const isSelected = c.id === selectedCountryId;
            return (
              <button
                key={c.id}
                onClick={() => handleCountryChange(c.id)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-500/30 font-bold scale-[1.02]'
                    : isLight
                      ? 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                      : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/60 text-slate-300'
                }`}
              >
                <span className="text-sm font-semibold truncate w-full">
                  {isArabic ? c.nameAr.split(' ')[0] : c.nameEn.split(' ')[0]}
                </span>
                <span className="text-[10px] opacity-80 truncate w-full font-mono">
                  {c.type}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Interactive Satellite Canvas + Morphological Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 4K Satellite Canvas with Dynamic Hotspots (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-black aspect-[4/3] group shadow-inner">
            <img
              src={selectedCountry.satelliteMap}
              alt={selectedCountry.nameEn}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Top Bar on Map */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 text-emerald-300 backdrop-blur-md border border-emerald-500/40 flex items-center gap-1.5 shadow">
                <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
                {isArabic ? selectedCountry.nameAr : selectedCountry.nameEn}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/70 text-slate-200 backdrop-blur-md border border-slate-700">
                P-P: {selectedCountry.polsbyPopper.toFixed(3)}
              </span>
            </div>

            {/* Hotspots Pin Overlay */}
            {selectedCountry.hotspots.map((h) => {
              const isActive = h.id === activeHotspotId;
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspotId(h.id)}
                  style={{ top: `${h.yPct}%`, left: `${h.xPct}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20 cursor-pointer focus:outline-none"
                  title={isArabic ? h.titleAr : h.titleEn}
                >
                  <div className="relative flex items-center justify-center">
                    <span
                      className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                        isActive ? 'bg-amber-400' : 'bg-emerald-400'
                      }`}
                    />
                    <div
                      className={`relative w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 transition-all ${
                        isActive
                          ? 'bg-amber-500 border-white text-black scale-125'
                          : 'bg-emerald-600 border-white text-white hover:scale-110'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  {/* Floating Tooltip Label */}
                  <span
                    className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[11px] font-bold whitespace-nowrap backdrop-blur-md transition-all shadow-md pointer-events-none ${
                      isActive
                        ? 'bg-amber-500 text-black border border-white'
                        : 'bg-black/80 text-white border border-slate-600 opacity-90 group-hover/pin:opacity-100'
                    }`}
                  >
                    {isArabic ? h.titleAr : h.titleEn}
                  </span>
                </button>
              );
            })}

            {/* Bottom Caption on Satellite Canvas */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-slate-700 text-white text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-emerald-400 block">
                  {isArabic ? selectedCountry.typeAr : selectedCountry.typeEn}
                </span>
                <span className="text-slate-300 text-[11px]">
                  {isArabic
                    ? selectedCountry.capitalAr
                    : selectedCountry.capitalEn}
                </span>
              </div>
              <button
                onClick={handleOpenModal}
                className="px-3 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1 transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                {isArabic ? 'تكبير 4K' : 'Zoom 4K'}
              </button>
            </div>
          </div>

          {/* Active Hotspot Detailed Analysis Card */}
          {activeHotspot && (
            <div
              className={`p-4 rounded-xl border transition-all ${innerCardBg}`}
            >
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-sm">
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </span>
              </div>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}
              >
                {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
              </p>
            </div>
          )}
        </div>

        {/* Right: Morphological Strategic Matrix & Compactness Calculator (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Morphology Profile Card */}
          <div className={`p-4 rounded-xl border ${innerCardBg}`}>
            <h3 className="text-base font-bold flex items-center gap-2 mb-3 text-emerald-400">
              <Shield className="w-4 h-4" />
              {isArabic
                ? 'التحليل الجيوسياسي للشكل المورفولوجي'
                : 'Geopolitical Morphological Analysis'}
            </h3>
            <p
              className={`text-xs leading-relaxed mb-4 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}
            >
              {isArabic
                ? selectedCountry.strategicDescAr
                : selectedCountry.strategicDescEn}
            </p>

            {/* Pros & Cons Accordion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-700/40">
              {/* Advantages */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isArabic ? 'المزايا الإستراتيجية:' : 'Strategic Advantages:'}
                </h4>
                <ul className="space-y-1.5">
                  {(isArabic
                    ? selectedCountry.advantagesAr
                    : selectedCountry.advantagesEn
                  ).map((adv, idx) => (
                    <li
                      key={idx}
                      className={`text-[11px] leading-snug flex items-start gap-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
                    >
                      <ChevronRight className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disadvantages / Challenges */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" />
                  {isArabic
                    ? 'التحديات والنقاط الحرجة:'
                    : 'Challenges & Vulnerabilities:'}
                </h4>
                <ul className="space-y-1.5">
                  {(isArabic
                    ? selectedCountry.disadvantagesAr
                    : selectedCountry.disadvantagesEn
                  ).map((dis, idx) => (
                    <li
                      key={idx}
                      className={`text-[11px] leading-snug flex items-start gap-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
                    >
                      <ChevronRight className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                      <span>{dis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Compactness Calculator (Polsby-Popper Model) */}
          <div
            className={`p-4 rounded-xl border border-emerald-500/40 shadow-md ${innerCardBg}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-400">
                <Calculator className="w-4 h-4" />
                {isArabic
                  ? 'حاسبة مؤشر الاندماج (Polsby-Popper Calculator)'
                  : 'Polsby-Popper Compactness Simulator'}
              </h3>
              <button
                onClick={() => {
                  setCalcArea(selectedCountry.areaKm2);
                  setCalcPerimeter(selectedCountry.perimeterKm);
                }}
                className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
                title={isArabic ? 'إعادة ضبط للقيم الفعلية' : 'Reset to actual'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {isArabic ? 'استعادة' : 'Reset'}
              </button>
            </div>

            {/* Formula Pill */}
            <div className="p-2.5 rounded-lg bg-black/60 border border-slate-700/80 mb-4 text-center font-mono text-xs">
              <span className="text-emerald-400 font-bold">C</span> ={' '}
              <span className="text-blue-300">4 · π · Area</span> /{' '}
              <span className="text-amber-300">Perimeter²</span>
            </div>

            {/* Area Slider */}
            <div className="space-y-1.5 mb-3.5">
              <div className="flex justify-between text-xs">
                <span
                  className={isLight ? 'text-slate-600' : 'text-slate-400'}
                >
                  {isArabic
                    ? 'المساحة الإجمالية (كم²):'
                    : 'Total Land Area (km²):'}
                </span>
                <span className="font-mono font-bold text-blue-400">
                  {calcArea.toLocaleString()} km²
                </span>
              </div>
              <input
                type="range"
                min={20000}
                max={3000000}
                step={10000}
                value={calcArea}
                onChange={(e) => setCalcArea(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Perimeter Slider */}
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between text-xs">
                <span
                  className={isLight ? 'text-slate-600' : 'text-slate-400'}
                >
                  {isArabic
                    ? 'طول المحيط الحدودي (كم):'
                    : 'Boundary Perimeter (km):'}
                </span>
                <span className="font-mono font-bold text-amber-400">
                  {calcPerimeter.toLocaleString()} km
                </span>
              </div>
              <input
                type="range"
                min={800}
                max={32000}
                step={100}
                value={calcPerimeter}
                onChange={(e) => setCalcPerimeter(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Calculation Output Box */}
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/50 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-emerald-300 uppercase tracking-wider block font-medium">
                  {isArabic
                    ? 'معامل الاندماج المحسوب'
                    : 'Computed Compactness (0-1)'}
                </span>
                <span className="text-2xl font-mono font-black text-emerald-400">
                  {calculatedCompactness.toFixed(3)}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-300 block">
                  {isArabic ? 'التصنيف المورفولوجي:' : 'Classification:'}
                </span>
                <span className="text-xs font-bold text-amber-300">
                  {getCompactnessLabel(calculatedCompactness)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HiRes Image Modal */}
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
