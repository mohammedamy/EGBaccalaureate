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
  Shield,
  Info,
} from 'lucide-react';

import egyptMap from '../../../assets/geography/egypt_satellite_map.jpg';
import franceMap from '../../../assets/geography/france_satellite_map.jpg';
import chileMap from '../../../assets/geography/chile_satellite_map.jpg';
import turkeyMap from '../../../assets/geography/turkey_satellite_map.jpg';
import congoMap from '../../../assets/geography/congo_satellite_map.jpg';
import afghanistanMap from '../../../assets/geography/afghanistan_satellite_map.jpg';
import lesothoMap from '../../../assets/geography/lesotho_satellite_map.jpg';
import japanMap from '../../../assets/geography/japan_satellite_map.jpg';

interface Props {
  countryKey: string;
  lang: Language;
  theme?: string;
}

interface MapPinData {
  x: number;
  y: number;
  type: 'capital' | 'maritime' | 'strait' | 'feature';
  labelAr: string;
  labelEn: string;
  detailAr: string;
  detailEn: string;
}

interface CountryMapConfig {
  image: string;
  titleAr: string;
  titleEn: string;
  coords: string;
  scaleKm: string;
  shapeTypeAr: string;
  shapeTypeEn: string;
  compactScore: string;
  area: string;
  perimeter: string;
  strategicNoteAr: string;
  strategicNoteEn: string;
  pins: MapPinData[];
}

const countryMapData: Record<string, CountryMapConfig> = {
  egypt: {
    image: egyptMap,
    titleAr: 'مصر (جمهورية مصر العربية)',
    titleEn: 'Egypt (Arab Republic of Egypt)',
    coords: '27°00′ N, 30°00′ E',
    scaleKm: '0 - 250 - 500 km',
    shapeTypeAr: 'شكل مندمج منتظم مثالي ذو واجهتين بحريتين',
    shapeTypeEn: 'Ideal Compact Morphology with Dual Maritime Fronts',
    compactScore: '0.82 (كفاءة إدارية ودفاعية فائقة)',
    area: '1,002,000 كم²',
    perimeter: '4,960 كم',
    strategicNoteAr:
      'تساوي المسافة تقريباً من المركز إلى الأطراف يمنح الجيش المصري حرية مناورة فائقة ويسهل الإدارة الداخلية، مع قلة الاحتكاك الحدودي بالنسبة للمساحة.',
    strategicNoteEn:
      'Equal distance from core to peripheries maximizes troop maneuverability and civil administration while minimizing border tension relative to area.',
    pins: [
      {
        x: 58,
        y: 33,
        type: 'capital',
        labelAr: 'القاهرة (العاصمة والعمق السياسي)',
        labelEn: 'Cairo (Historic Capital & Strategic Core)',
        detailAr: 'عاصمة تاريخية تتمتع بالعمق الجغرافي عند رأس الدلتا وملتقى الوجهين القبلي والبحري.',
        detailEn: 'Historic nucleus located at the apex of the Nile Delta with inward strategic depth.',
      },
      {
        x: 46,
        y: 20,
        type: 'maritime',
        labelAr: 'الإسكندرية (عروس المتوسط)',
        labelEn: 'Alexandria (Mediterranean Port)',
        detailAr: 'الميناء التجاري الأول وواجهة مصر البحرية الشمالية على حوض البحر المتوسط.',
        detailEn: 'Primary commercial maritime port facing the Mediterranean trade basin.',
      },
      {
        x: 66,
        y: 29,
        type: 'strait',
        labelAr: 'قناة السويس (شريان الملاحة)',
        labelEn: 'Suez Canal (Global Chokepoint)',
        detailAr: 'الممر الملاحي الأهم عالمياً الذي يربط البحرين المتوسط والأحمر ويختصر 40% من المسافة البحرية.',
        detailEn: 'Paramount international maritime bottleneck linking Europe and Asia.',
      },
      {
        x: 74,
        y: 36,
        type: 'feature',
        labelAr: 'شبه جزيرة سيناء',
        labelEn: 'Sinai Peninsula',
        detailAr: 'البوابة الاستراتيجية الشرقية لمصر ومحور الدفاع القومي الأول.',
        detailEn: 'Egypt eastern strategic land bridge and historical defense gateway.',
      },
      {
        x: 82,
        y: 65,
        type: 'maritime',
        labelAr: 'البحر الأحمر',
        labelEn: 'Red Sea Maritime Front',
        detailAr: 'الواجهة البحرية الشرقية الممتدة وسلاسل جبال البحر الأحمر الدفاعية.',
        detailEn: 'Eastern maritime frontier accompanied by protective coastal mountain ranges.',
      },
      {
        x: 58,
        y: 80,
        type: 'feature',
        labelAr: 'السد العالي وبحيرة ناصر',
        labelEn: 'Aswan High Dam & Lake Nasser',
        detailAr: 'صمام الأمان المائي وحصن الأمن القومي في الجنوب المصري.',
        detailEn: 'Hydraulic fortress anchoring Egyptian national water security.',
      },
    ],
  },
  france: {
    image: franceMap,
    titleAr: 'فرنسا (النموذج السداسي المندمج)',
    titleEn: 'France (Hexagonal Compact Model)',
    coords: '46°36′ N, 02°20′ E',
    scaleKm: '0 - 200 - 400 km',
    shapeTypeAr: 'النموذج المثالي للشكل المندمج المنتظم (L\'Hexagone)',
    shapeTypeEn: 'Classic Textbook Model of Compact Morphology',
    compactScore: '0.86 (النموذج القياسي في الجغرافيا السياسية)',
    area: '643,801 كم²',
    perimeter: '4,075 كم',
    strategicNoteAr:
      'شكلها السداسي المتناسق يوفر سهولة الاتصال وسرعة انتشار القوات المسلحة نحو أي جبهة مع حدود طبيعية حصينة (الألب والبرانس والراين).',
    strategicNoteEn:
      'Hexagonal symmetry optimizes internal communication lines and defensive troop mobilization reinforced by natural mountain and river frontiers.',
    pins: [
      {
        x: 52,
        y: 30,
        type: 'capital',
        labelAr: 'باريس (نواة الدولة وعاصمتها التاريخية)',
        labelEn: 'Paris (National Nucleus & Capital)',
        detailAr: 'العاصمة التاريخية في حوض باريس الخصيب مع شبكة مواصلات نجمية تربط أنحاء الدولة.',
        detailEn: 'Historic core in the Paris Basin with radial transport networks connecting all peripheries.',
      },
      {
        x: 38,
        y: 14,
        type: 'maritime',
        labelAr: 'بحر المانش (English Channel)',
        labelEn: 'English Channel / La Manche',
        detailAr: 'الحد المائي الشمالي الفاصل بين فرنسا وبريطانيا.',
        detailEn: 'Northern maritime buffer separating France from the British Isles.',
      },
      {
        x: 20,
        y: 54,
        type: 'maritime',
        labelAr: 'خليج بسكاي (المحيط الأطلسي)',
        labelEn: 'Bay of Biscay (Atlantic Coast)',
        detailAr: 'الواجهة البحرية الغربية على المحيط الأطلسي المفتوح.',
        detailEn: 'Western oceanic perimeter granting direct Atlantic shipping access.',
      },
      {
        x: 82,
        y: 65,
        type: 'feature',
        labelAr: 'جبال الألب (حدود طبيعية مع إيطاليا)',
        labelEn: 'Alps Mountains (Border with Italy)',
        detailAr: 'حاجز تضاريسي طبيعي حصين يعزز مناعة الدولة الدفاعية شرقاً.',
        detailEn: 'Imposing natural mountain wall providing formidable eastern frontier security.',
      },
      {
        x: 42,
        y: 89,
        type: 'feature',
        labelAr: 'جبال البرانس (حدود طبيعية مع إسبانيا)',
        labelEn: 'Pyrenees Range (Border with Spain)',
        detailAr: 'سلسلة جبلية تمتد كحد طبيعي مانع يفصل بين فرنسا وشبه الجزيرة الأيبيرية.',
        detailEn: 'Natural mountain barrier delimiting the frontier between France and Iberia.',
      },
    ],
  },
  chile: {
    image: chileMap,
    titleAr: 'تشيلي (الشكل الشريطي النحيل)',
    titleEn: 'Chile (Elongated Ribbon Morphology)',
    coords: '35°40′ S, 71°30′ W',
    scaleKm: '0 - 500 - 1000 km',
    shapeTypeAr: 'شكل شريطي طولي (طولها أكثر من 6 أضعاف متوسط عرضها)',
    shapeTypeEn: 'North-South Elongated Linear Ribbon (>6x length to width)',
    compactScore: '0.14 (احتكاك حدودي وصعوبة اتصال داخلي)',
    area: '756,102 كم²',
    perimeter: '6,339 كم',
    strategicNoteAr:
      'تنوع هائل في دوائر العرض ينتج عنه تنوع مناخي وزراعي فريد، ولكن يعيبه صعوبة الدفاع العسكري وطول خطوط الاتصال الداخلي.',
    strategicNoteEn:
      'Extensive latitudinal spread yields immense climatic and agricultural diversity, but poses extreme tactical vulnerability and logistic friction.',
    pins: [
      {
        x: 48,
        y: 50,
        type: 'capital',
        labelAr: 'سانتياغو (العاصمة في الوادي الأوسط)',
        labelEn: 'Santiago (Capital in Central Valley)',
        detailAr: 'تتركز العاصمة ومعظم السكان في الوادي الأوسط ذي مناخ البحر المتوسط الخصيب.',
        detailEn: 'Capital located in the Mediterranean fertile basin holding the country demographic weight.',
      },
      {
        x: 64,
        y: 38,
        type: 'feature',
        labelAr: 'جبال الأنديز (السياج الشرقي)',
        labelEn: 'Andes Cordillera Barrier',
        detailAr: 'حاجز طبيعي هائل يحمي تشيلي شرقاً ويفصلها عن الأرجنتين وبوليفيا.',
        detailEn: 'Towering eastern wall shielding Chile while complicating trans-continental transit.',
      },
      {
        x: 52,
        y: 20,
        type: 'feature',
        labelAr: 'صحراء أتاكاما (المناخ الجاف الشمالي)',
        labelEn: 'Atacama Desert (Arid North)',
        detailAr: 'أكثر مناطق العالم جفافاً، غنية باحتياطيات النحاس والليثيوم الاستراتيجية.',
        detailEn: 'Hyper-arid northern territory rich in strategic global copper and lithium deposits.',
      },
      {
        x: 46,
        y: 84,
        type: 'maritime',
        labelAr: 'مضائق باتاغونيا والجزر الجنوبية',
        labelEn: 'Patagonian Fjords & Subpolar Archipelago',
        detailAr: 'تضاريس شديدة الوعورة ومناخ بارد مع جزر متناثرة عند رأس هورن.',
        detailEn: 'Subpolar labyrinth of islands, glaciers, and fjords terminating at Cape Horn.',
      },
    ],
  },
  turkey: {
    image: turkeyMap,
    titleAr: 'تركيا (الشكل الشريطي العرضي)',
    titleEn: 'Turkey (Latitudinal Elongated State)',
    coords: '39°00′ N, 35°00′ E',
    scaleKm: '0 - 300 - 600 km',
    shapeTypeAr: 'شكل شريطي عرضي من الشرق إلى الغرب',
    shapeTypeEn: 'East-West Latitudinally Stretched State',
    compactScore: '0.38 (امتداد عرضي لا يوفر تنوعاً مناخياً كبيراً)',
    area: '783,562 كم²',
    perimeter: '2,816 كم',
    strategicNoteAr:
      'امتدادها العرضي عبر خطوط عرض متقاربة يحرمها من ميزة التنوع المناخي التي تتمتع بها تشيلي، لكن موقعها يتحكم في أهم مضائق العالم.',
    strategicNoteEn:
      'Latitudinal alignment limits climatic diversity compared to Chile, but its bridgehead location controls vital Eurasian choke points.',
    pins: [
      {
        x: 46,
        y: 44,
        type: 'capital',
        labelAr: 'أنقرة (عاصمة ذات عمق استراتيجي)',
        labelEn: 'Ankara (Strategic Inland Capital)',
        detailAr: 'نُقلت العاصمة من إسطنبول الساحلية إلى أنقرة الداخلية لتوفير الحماية العسكرية والعمق الدفاعي.',
        detailEn: 'Capital relocated inland from Istanbul to achieve sovereign depth and defense insulation.',
      },
      {
        x: 22,
        y: 32,
        type: 'strait',
        labelAr: 'مضيقا البوسفور والدردنيل',
        labelEn: 'Bosphorus & Dardanelles Straits',
        detailAr: 'الممران المائيان الحاكمان للملاحة بين البحر الأسود والبحر المتوسط وفق معاهدة مونترو.',
        detailEn: 'Crucial global chokepoints controlling Black Sea access under the Montreux Convention.',
      },
      {
        x: 52,
        y: 15,
        type: 'maritime',
        labelAr: 'البحر الأسود (الواجهة الشمالية)',
        labelEn: 'Black Sea Northern Coastline',
        detailAr: 'إطلالة بحرية واسعة تمكن تركيا من التواصل مع دول شرق أوروبا والقوقاز.',
        detailEn: 'Extensive maritime frontage connecting Turkey with Eastern Europe and the Caucasus.',
      },
      {
        x: 46,
        y: 75,
        type: 'maritime',
        labelAr: 'البحر المتوسط وبحر إيجة',
        labelEn: 'Mediterranean & Aegean Seas',
        detailAr: 'الواجهة الجنوبية والغربية ومحور السياحة والملاحة البحرية الدولية.',
        detailEn: 'Southern maritime axis vital for international shipping lanes and littoral tourism.',
      },
    ],
  },
  congo: {
    image: congoMap,
    titleAr: 'جمهورية الكونغو الديمقراطية (شكل ذو بروز)',
    titleEn: 'DR Congo (Prorupted / Protruded State)',
    coords: '04°02′ S, 21°45′ E',
    scaleKm: '0 - 400 - 800 km',
    shapeTypeAr: 'شكل مندمج ذو بروز مزدوج (بحري وبري)',
    shapeTypeEn: 'Compact Morphology with Dual Salient Corridors',
    compactScore: '0.44 (بروزات تضعف التماسك الحدودي)',
    area: '2,344,858 كم²',
    perimeter: '10,480 كم',
    strategicNoteAr:
      'بروز ممر غربي ضيق على المحيط الأطلسي (ميناء ماتادي ومواندا) يكسر عزلتها البحرية، وبروز كاتانغا الغني بالنحاس في الجنوب الشرقي.',
    strategicNoteEn:
      'A narrow western Atlantic corridor relieves landlocked isolation, while the Katanga copper salient juts into southern Africa.',
    pins: [
      {
        x: 24,
        y: 58,
        type: 'capital',
        labelAr: 'كينشاسا (العاصمة على نهر الكونغو)',
        labelEn: 'Kinshasa (Capital on Congo River)',
        detailAr: 'المركز الإداري والسكاني الأكبر على ضفاف نهر الكونغو مقابل مدينة برازافيل.',
        detailEn: 'Vast urban core located along the lower Congo River opposite Brazzaville.',
      },
      {
        x: 12,
        y: 62,
        type: 'strait',
        labelAr: 'ممر الأطلسي الضيق (ميناء مواندا وماتادي)',
        labelEn: 'Atlantic Ocean Salient Corridor',
        detailAr: 'بروز بحري ضيق لا يتعدى 40 كم يمنح الدولة منفذاً استراتيجياً مباشراً على التجارة الدولية.',
        detailEn: 'Vital narrow coastal corridor of ~40 km granting access to oceanic shipping lanes.',
      },
      {
        x: 52,
        y: 38,
        type: 'feature',
        labelAr: 'حوض نهر الكونغو المطير',
        labelEn: 'Congo River Basin Jungle',
        detailAr: 'ثاني أكبر حوض نهري استوائي في العالم غني بالأخشاب والموارد المائية الضخمة.',
        detailEn: 'Worlds second-largest tropical river basin dense in timber and hydroelectric power.',
      },
      {
        x: 78,
        y: 84,
        type: 'feature',
        labelAr: 'بروز إقليم كاتانغا التعديني',
        labelEn: 'Katanga Mineral Salient',
        detailAr: 'بروز أرضي عميق في الجنوب غني باحتياطيات النحاس والكوبالت واليورانيوم الاستراتيجية.',
        detailEn: 'Deep southern protrusion encompassing colossal copper, cobalt, and mineral wealth.',
      },
    ],
  },
  afghanistan: {
    image: afghanistanMap,
    titleAr: 'أفغانستان (شكل مندمج ذو بروز حبيس)',
    titleEn: 'Afghanistan (Landlocked Prorupted State)',
    coords: '33°56′ N, 67°42′ E',
    scaleKm: '0 - 250 - 500 km',
    shapeTypeAr: 'شكل مندمج ذو بروز شرقي جبلي (ممر واخان)',
    shapeTypeEn: 'Landlocked Compact with Wakhan Corridor Salient',
    compactScore: '0.48 (وعورة تضاريس وعزلة بحرية)',
    area: '652,864 كم²',
    perimeter: '5,987 كم',
    strategicNoteAr:
      'دولة حبيسة تتميز ببروز ممر واخان في أقصى الشرق الذي أنشئ في القرن الـ19 كمنطقة عازلة ليفصل بين الإمبراطورية الروسية والهند البريطانية ويلامس الصين.',
    strategicNoteEn:
      'Landlocked state with the Wakhan Corridor, created historically as a buffer strip touching China to separate Russian and British empires.',
    pins: [
      {
        x: 62,
        y: 46,
        type: 'capital',
        labelAr: 'كابول (العاصمة الجبلية الحصينة)',
        labelEn: 'Kabul (Highland Capital Fortress)',
        detailAr: 'العاصمة التاريخية الواقعة في ممر جبلي استراتيجي يربط شمال البلاد بجنوبها.',
        detailEn: 'Historic strategic capital nestling in narrow mountain defiles connecting North and South.',
      },
      {
        x: 84,
        y: 24,
        type: 'feature',
        labelAr: 'ممر واخان الناتئ (ملامس للصين)',
        labelEn: 'Wakhan Corridor (Bordering China)',
        detailAr: 'البروز الجغرافي الأشهر الذي يفصل بين طاجيكستان وباكستان ويصل لأراضي الصين.',
        detailEn: 'Signature territorial panhandle buffering Tajikistan and Pakistan while reaching China.',
      },
      {
        x: 55,
        y: 38,
        type: 'feature',
        labelAr: 'سلسلة جبال هندوكوش',
        labelEn: 'Hindu Kush Mountain Wall',
        detailAr: 'سلاسل جبلية شاهقة تمنح الدولة مناعة دفاعية شديدة وتعيق شبكات المواصلات الداخلية.',
        detailEn: 'Formidable alpine cordillera affording rugged natural defense while dividing regions.',
      },
    ],
  },
  lesotho: {
    image: lesothoMap,
    titleAr: 'مملكة ليسوتو (الدولة الجيبية المحتواة)',
    titleEn: 'Lesotho (Perforated Enclave State)',
    coords: '29°36′ S, 28°14′ E',
    scaleKm: '0 - 50 - 100 km',
    shapeTypeAr: 'دولة محتواة / جيب داخلي محاط بالكامل بدولة جنوب أفريقيا',
    shapeTypeEn: 'Perforated Enclave Completely Surrounded 360°',
    compactScore: '0.74 (شكلها دائري ولكن سيادتها مقيدة)',
    area: '30,355 كم²',
    perimeter: '909 كم',
    strategicNoteAr:
      'تطويقها بالكامل داخل جنوب أفريقيا يجبرها على اتباع سياسة موالية لها، ويقيد حريتها في الاتصال بالعالم الخارجي دون المرور بأراضي جنوب أفريقيا.',
    strategicNoteEn:
      'Being encircled 360° within South Africa severely curtails sovereign foreign policy and necessitates friendly transit accords.',
    pins: [
      {
        x: 34,
        y: 45,
        type: 'capital',
        labelAr: 'ماسيرو (العاصمة الحدودية)',
        labelEn: 'Maseru (Frontier Capital)',
        detailAr: 'العاصمة الواقعة مباشرة على الحدود الشمالية الغربية المشتركة مع جنوب أفريقيا.',
        detailEn: 'Capital situated directly adjacent to the northwestern frontier with South Africa.',
      },
      {
        x: 50,
        y: 15,
        type: 'feature',
        labelAr: 'دولة جنوب أفريقيا المطوقة 360°',
        labelEn: 'South Africa (Enclosing State 360°)',
        detailAr: 'الدولة المحيطة بالكامل بأراضي ليسوتو والتي تسيطر على جميع منافذ التجارة والعبور.',
        detailEn: 'The encompassing state governing all overland transit, trade and airspace avenues.',
      },
      {
        x: 68,
        y: 55,
        type: 'feature',
        labelAr: 'جبال دراكنزبرج (مملكة السماء)',
        labelEn: 'Drakensberg Highlands (Roof of Africa)',
        detailAr: 'مرتفعات وعرة توفر مصادر مياه عذبة نقية يتم تصديرها لجنوب أفريقيا عبر مشروع مياه ليسوتو.',
        detailEn: 'Rugged alpine highlands exporting fresh water to industrial South Africa.',
      },
    ],
  },
  japan: {
    image: japanMap,
    titleAr: 'اليابان (الدولة المجزأة البحرية - أرخبيل)',
    titleEn: 'Japan (Fragmented Island Archipelago)',
    coords: '36°12′ N, 138°15′ E',
    scaleKm: '0 - 300 - 600 km',
    shapeTypeAr: 'شكل مجزأ بحري (أرخبيل مكون من 4 جزر رئيسية)',
    shapeTypeEn: 'Fragmented Maritime Archipelago of 4 Primary Islands',
    compactScore: '0.22 (انفصال مائي وتشتت جغرافي)',
    area: '377,975 كم²',
    perimeter: '29,751 كم',
    strategicNoteAr:
      'تتكون من 4 جزر رئيسية (هونشو، هوكايدو، كيوشو، شيكوكو). ونقلت عاصمتها من كيوتو الداخلية إلى طوكيو الساحلية لتكون مركزاً تجارياً وحضارياً.',
    strategicNoteEn:
      'Spanning 4 main islands, Japan relocated its capital from inland Kyoto to coastal Tokyo on the Pacific to project global commercial hegemony.',
    pins: [
      {
        x: 68,
        y: 56,
        type: 'capital',
        labelAr: 'طوكيو (عاصمة ساحلية مستحدثة)',
        labelEn: 'Tokyo (Modern Coastal Capital on Pacific)',
        detailAr: 'عاصمة مستحدثة على ساحل المحيط الهادئ لدعم التجارة والانفتاح على العالم الخارجي.',
        detailEn: 'Modern capital relocated to the Pacific shoreline to catalyze international maritime commerce.',
      },
      {
        x: 58,
        y: 50,
        type: 'feature',
        labelAr: 'جزيرة هونشو (كبرى الجزر ونواة الدولة)',
        labelEn: 'Honshu (Main Island & Economic Engine)',
        detailAr: 'تحتوي على غالبية السكان والمراكز الصناعية الكبرى (طوكيو، أوساكا، كيوتو).',
        detailEn: 'Largest island hosting 80%+ of population, megalopolises, and industrial output.',
      },
      {
        x: 76,
        y: 22,
        type: 'feature',
        labelAr: 'جزيرة هوكايدو (الجزيرة الشمالية الباردة)',
        labelEn: 'Hokkaido (Northern Subarctic Island)',
        detailAr: 'الجزيرة الشمالية الغنية بالثروة الزراعية والغابات والمراعي الطبيعية.',
        detailEn: 'Northern cold agrarian frontier endowed with forests and dairy plains.',
      },
      {
        x: 30,
        y: 72,
        type: 'feature',
        labelAr: 'جزيرة كيوشو (الجزيرة الجنوبية)',
        labelEn: 'Kyushu (Southern Maritime Bastion)',
        detailAr: 'بوابة اليابان التاريخية نحو القارة الآسيوية ومراكز صناعة التكنولوجيا الحديثة.',
        detailEn: 'Historical maritime nexus facing the Asian mainland and high-tech manufacturing center.',
      },
      {
        x: 46,
        y: 65,
        type: 'feature',
        labelAr: 'جزيرة شيكوكو (الجزيرة الرابعة وبحر سيتو)',
        labelEn: 'Shikoku Island & Seto Inland Sea',
        detailAr: 'جزيرة هادئة ترتبط بهونشو عبر شبكة جسور عملاقة فوق بحر سيتو الداخلي.',
        detailEn: 'Smallest of the four core islands linked to Honshu via colossal suspension bridges.',
      },
    ],
  },
};

export const HighResMorphologyMap: React.FC<Props> = ({ countryKey, lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showPins, setShowPins] = useState<boolean>(true);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [activePinIndex, setActivePinIndex] = useState<number | null>(null);
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);

  const config = countryMapData[countryKey] || countryMapData['egypt'];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 1));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setActivePinIndex(null);
  };

  const getPinColor = (type: MapPinData['type']) => {
    switch (type) {
      case 'capital':
        return 'bg-amber-500 text-amber-950 border-amber-300 shadow-amber-500/50';
      case 'maritime':
        return 'bg-cyan-500 text-cyan-950 border-cyan-300 shadow-cyan-500/50';
      case 'strait':
        return 'bg-rose-500 text-rose-950 border-rose-300 shadow-rose-500/50';
      case 'feature':
        return 'bg-emerald-500 text-emerald-950 border-emerald-300 shadow-emerald-500/50';
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

        {/* Tactical Coordinates Graticule Overlay */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none opacity-35">
            <div className="w-full h-full grid grid-cols-6 grid-rows-4 border border-cyan-500/30">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border-r border-b border-cyan-500/20 relative">
                  <span className="absolute top-1 left-1 font-mono text-[8px] text-cyan-400/60 select-none">
                    +
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Tactical Pins */}
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
                {/* Ping Animation */}
                <div
                  className={`absolute -inset-2 rounded-full opacity-60 animate-ping pointer-events-none ${
                    pin.type === 'capital'
                      ? 'bg-amber-400'
                      : pin.type === 'strait'
                      ? 'bg-rose-400'
                      : pin.type === 'maritime'
                      ? 'bg-cyan-400'
                      : 'bg-emerald-400'
                  }`}
                />

                {/* Marker Button */}
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

                {/* Interactive Tooltip Callout */}
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

      {/* Modern Top HUD Overlay */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="pointer-events-auto flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800/80 text-white shadow-lg">
          <Navigation className="w-3.5 h-3.5 text-teal-400 animate-spin" style={{ animationDuration: '12s' }} />
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-teal-300">
              {isArabic ? config.titleAr : config.titleEn}
            </span>
            <span className="text-[9px] font-mono text-slate-400">{config.coords}</span>
          </div>
        </div>

        {/* Map Interactive Controls */}
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
            title={isArabic ? 'إظهار/إخفاء شبكة الإحداثيات' : 'Toggle Coordinate Grid'}
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

      {/* Bottom Cartographic Scale & Telemetry HUD */}
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none z-10">
        {/* Scale Bar */}
        <div className="pointer-events-auto bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] text-slate-300 flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 border-b-2 border-l-2 border-r-2 border-amber-400 mb-0.5" />
            <span className="font-mono text-[9px] text-amber-300">{config.scaleKm}</span>
          </div>
          <span className="text-slate-500 font-mono text-[9px] border-l border-slate-700 pl-2">
            1:500,000 HD
          </span>
        </div>

        {/* Compass Rose */}
        <div className="pointer-events-auto bg-slate-950/85 backdrop-blur-md p-1.5 rounded-full border border-slate-800 flex items-center justify-center shadow-lg">
          <Compass className="w-5 h-5 text-teal-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center select-none relative">
      {renderMapContent(false)}

      {/* High-Contrast Geodetic Telemetry Strip */}
      <div className="w-full mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
            <Shield className="w-3 h-3 text-teal-400" />
            {isArabic ? 'التصنيف المورفولوجي' : 'Morphological Class'}
          </span>
          <span className="font-bold text-teal-300 truncate mt-0.5">
            {isArabic ? config.shapeTypeAr : config.shapeTypeEn}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold">
            {isArabic ? 'معامل الاندماج (Polsby-Popper)' : 'Compactness Score'}
          </span>
          <span className="font-mono font-bold text-amber-400 mt-0.5">{config.compactScore}</span>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold">
            {isArabic ? 'المساحة الكلية' : 'Total Area'}
          </span>
          <span className="font-mono font-bold text-slate-200 mt-0.5">{config.area}</span>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold">
            {isArabic ? 'محيط الحدود' : 'Border Perimeter'}
          </span>
          <span className="font-mono font-bold text-slate-200 mt-0.5">{config.perimeter}</span>
        </div>
      </div>

      {/* Strategic Ministry Curriculum Lesson Note */}
      <div className="w-full mt-2.5 p-3 rounded-xl bg-gradient-to-r from-teal-950/30 via-slate-900/50 to-emerald-950/30 border border-teal-800/40 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
        <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-teal-300 block mb-0.5">
            {isArabic ? 'الأهمية الجيوسياسية وفق منهج الوزارة:' : 'Curriculum Geopolitical Core Analysis:'}
          </span>
          {isArabic ? config.strategicNoteAr : config.strategicNoteEn}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreenModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="w-full max-w-6xl relative flex flex-col">
            <div className="flex items-center justify-between mb-3 text-white">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-400" />
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
