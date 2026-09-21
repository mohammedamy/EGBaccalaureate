import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { HighResMorphologyMap } from './maps/HighResMorphologyMap';
import { HighResHotspotMap } from './maps/HighResHotspotMap';
import { HighResBlocMap } from './maps/HighResBlocMap';
import {
  Globe,
  Compass,
  Shield,
  Layers,
  BarChart3,
  Anchor,
  Flame,
  Scale,
  Building2,
  Navigation,
  Info,
  CheckCircle2,
  RotateCcw,
  Sliders,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialMode?: 'morphology' | 'unclos' | 'hotspots' | 'blocs' | 'geopower';
}

type StudioMode = 'morphology' | 'unclos' | 'hotspots' | 'blocs' | 'geopower';

export const GeopoliticalMapStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialMode = 'morphology',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeMode, setActiveMode] = useState<StudioMode>(initialMode);

  // -------------------------------------------------------------
  // Mode 1: Morphology & Compactness Calculator
  // -------------------------------------------------------------
  const [selectedCountryPreset, setSelectedCountryPreset] = useState<string>('egypt');

  const countryPresets: Record<
    string,
    {
      nameEn: string;
      nameAr: string;
      area: number;
      perimeter: number;
      shapeEn: string;
      shapeAr: string;
      category: 'compact' | 'elongated' | 'fragmented' | 'perforated' | 'protruded';
      capitalEn: string;
      capitalAr: string;
      notesEn: string;
      notesAr: string;
      defenseBonus: number; // 0-100
      adminControl: number; // 0-100
    }
  > = {
    egypt: {
      nameEn: 'Egypt (مصر)',
      nameAr: 'مصر (جمهورية مصر العربية)',
      area: 1002000,
      perimeter: 4960,
      shapeEn: 'Ideal Compact (منتظم/مندمج مثالي)',
      shapeAr: 'منتظم مندمج ذو واجهتين بحريتين',
      category: 'compact',
      capitalEn: 'Cairo (Historical & Sovereign depth)',
      capitalAr: 'القاهرة (عاصمة تاريخية ذات عمق استراتيجي)',
      notesEn:
        'Distance from center to frontiers is almost equal. Maximizes internal governance, shortest borders relative to area, high troop mobility, minimizes border conflict friction.',
      notesAr:
        'المسافة من المركز إلى الأطراف متساوية تقريباً. يمنح الدولة سهولة الإدارة وحسن السيطرة وحرية حركة الجيش، ويقلل من طول الحدود مقارنة بالمساحة مما يقلل الاحتكاك.',
      defenseBonus: 92,
      adminControl: 95,
    },
    france: {
      nameEn: 'France (فرنسا)',
      nameAr: 'فرنسا',
      area: 643801,
      perimeter: 4075,
      shapeEn: 'Ideal Compact Model (نموذج الشكل المندمج)',
      shapeAr: 'النموذج المثالي للشكل المندمج المنتظم',
      category: 'compact',
      capitalEn: 'Paris (Historic nucleus)',
      capitalAr: 'باريس (نواة الدولة التاريخية)',
      notesEn:
        'Standard textbook model for compact states. Hexagonal perimeter allows swift administrative communication and centralized defense.',
      notesAr:
        'النموذج الكلاسيكي في الجغرافيا السياسية للشكل المندمج ذو الشكل السداسي، سهولة الاتصال الداخلي والسيطرة.',
      defenseBonus: 90,
      adminControl: 94,
    },
    chile: {
      nameEn: 'Chile (تشيلي)',
      nameAr: 'تشيلي',
      area: 756102,
      perimeter: 7800,
      shapeEn: 'North-South Elongated / Strip (شريطي طولي شمالي-جنوبي)',
      shapeAr: 'شريطي مستطيل طولي من الشمال للجنوب',
      category: 'elongated',
      capitalEn: 'Santiago',
      capitalAr: 'سانتياغو',
      notesEn:
        'Length is more than 6x width. Diversity of climates and ecological zones, but severe defense difficulties, long vulnerable borders, and complex internal communications.',
      notesAr:
        'طولها يزيد عن 6 أضعاف عرضها؛ يتيح تنوع المناخ والأقاليم النباتية، لكنه يعاني من صعوبة الدفاع، وطول مفرط للحدود، وصعوبة الاتصال بين أطراف الدولة.',
      defenseBonus: 35,
      adminControl: 45,
    },
    turkey: {
      nameEn: 'Turkey (تركيا)',
      nameAr: 'تركيا',
      area: 783562,
      perimeter: 7200,
      shapeEn: 'East-West Elongated (مستطيل عرضي من الشرق للغرب)',
      shapeAr: 'شريطي مستطيل عرضي من الشرق للغرب',
      category: 'elongated',
      capitalEn: 'Ankara (Defensive depth chosen over Istanbul)',
      capitalAr: 'أنقرة (تم نقلها من إسطنبول لتوفير عمق دفاعي)',
      notesEn:
        'East-west orientation does not offer climate diversity because it spans fewer latitudinal lines, while presenting longitudinal logistical challenges.',
      notesAr:
        'امتداد عرضي لا يساعد على تنوع المناخ (لقلة دوائر العرض المقطوعة)، مع تحديات لوجستية على امتداد خطوط الطول.',
      defenseBonus: 65,
      adminControl: 70,
    },
    congo: {
      nameEn: 'DR Congo (الكونغو الديمقراطية)',
      nameAr: 'جمهورية الكونغو الديمقراطية',
      area: 2345000,
      perimeter: 10730,
      shapeEn: 'Compact with Protrusion (مندمج ذو بروز)',
      shapeAr: 'مندمج ذو بروز نحو المحيط الأطلسي',
      category: 'protruded',
      capitalEn: 'Kinshasa',
      capitalAr: 'كينشاسا',
      notesEn:
        'Narrow western corridor provides vital access to the Atlantic Ocean, turning a potentially landlocked area into a maritime state.',
      notesAr:
        'بروز ضيق نحو الغرب يمنح الدولة منفذاً استراتيجياً حيوياً على المحيط الأطلسي، محولاً إياها من دولة حبيسة إلى دولة بحرية.',
      defenseBonus: 58,
      adminControl: 62,
    },
    afghanistan: {
      nameEn: 'Afghanistan (أفغانستان)',
      nameAr: 'أفغانستان',
      area: 652864,
      perimeter: 5529,
      shapeEn: 'Compact with Wakhan Protrusion (مندمج ذو بروز واخان)',
      shapeAr: 'مندمج ذو بروز ممر واخان باتجاه الصين',
      category: 'protruded',
      capitalEn: 'Kabul',
      capitalAr: 'كابول',
      notesEn:
        'Wakhan corridor was historically demarcated as a geopolitical buffer between British India and the Russian Empire, touching modern China.',
      notesAr:
        'ممر واخان تم ترسميه تاريخياً كمنطقة عازلة بين الإمبراطورية الروسية والهند البريطانية، ليمس حدود الصين حالياً.',
      defenseBonus: 45,
      adminControl: 50,
    },
    lesotho: {
      nameEn: 'Lesotho (ليسوتو)',
      nameAr: 'مملكة ليسوتو',
      area: 30355,
      perimeter: 1106,
      shapeEn: 'Perforated / Enclave (دولة جيبية محتواة)',
      shapeAr: 'دولة جيبية محتواة بالكامل داخل جنوب أفريقيا',
      category: 'perforated',
      capitalEn: 'Maseru',
      capitalAr: 'ماسيرو',
      notesEn:
        'Completely encircled by South Africa. Cannot contact the outside world without traversing South African territory. Highly subservient foreign policy and economic dependency.',
      notesAr:
        'محاطة كلياً بدولة جنوب أفريقيا، ولا يمكنها الاتصال بالعالم الخارجي إلا عبر أراضي دولة واحدة، مما يضعف استقلالها السياسي ويجعلها تابعة اقتصادياً.',
      defenseBonus: 15,
      adminControl: 75,
    },
    japan: {
      nameEn: 'Japan (اليابان)',
      nameAr: 'اليابان',
      area: 377975,
      perimeter: 29751,
      shapeEn: 'Maritime Fragmented Archipelagic (مجزأ بحري/أرخبيل)',
      shapeAr: 'دولة جزرية مجزأة بحرياً (أرخبيل من 4 جزر كبرى)',
      category: 'fragmented',
      capitalEn: 'Tokyo (Coastal commercial & dynamic capital)',
      capitalAr: 'طوكيو (عاصمة ساحلية مستحدثة بدلاً من كيوتو)',
      notesEn:
        'Consists of 4 main islands (Honshu, Hokkaido, Kyushu, Shikoku). High maritime access and merchant fleet, overcome fragmentation via high-speed bullet trains and tunnels.',
      notesAr:
        'تتكون من 4 جزر رئيسية؛ تتمتع بحرية ملاحية وثروة بحرية هائلة، وتغلبت على عائق التجزؤ بشبكات الأنفاق والجسور العملاقة والقطارات فائقة السرعة.',
      defenseBonus: 72,
      adminControl: 88,
    },
  };

  // Circular Compactness (Polsby-Popper score): S = 4 * PI * Area / Perimeter^2
  // Maximum is 1.0 (perfect circle)
  const currentArea = countryPresets[selectedCountryPreset]?.area || 1000000;
  const currentPerimeter = countryPresets[selectedCountryPreset]?.perimeter || 4000;
  const compactnessIndex = Math.min(1.0, Math.max(0.01, (4 * Math.PI * currentArea) / (currentPerimeter * currentPerimeter)));
  const compactnessPercent = Math.round(compactnessIndex * 100);

  // -------------------------------------------------------------
  // Mode 2: UNCLOS Maritime Delimitation
  // -------------------------------------------------------------
  const [selectedMaritimeZone, setSelectedMaritimeZone] = useState<string>('territorial');

  const maritimeZonesData: Record<
    string,
    {
      titleEn: string;
      titleAr: string;
      extentEn: string;
      extentAr: string;
      sovereigntyEn: string;
      sovereigntyAr: string;
      rightsEn: string[];
      rightsAr: string[];
      unclosRef: string;
      badgeColor: string;
    }
  > = {
    internal: {
      titleEn: 'Internal Waters (المياه الداخلية)',
      titleAr: 'المياه الداخلية للدولة',
      extentEn: 'All water bodies landward of the baseline (lakes, estuaries, coastal bays like Lake Manzala, Burullus, Idku in Egypt).',
      extentAr: 'جميع المسطحات المائية المتصلة بالبحر وتقع خلف خط الأساس، كالبحيرات الساحلية المصرية ومصبات الأنهار.',
      sovereigntyEn: 'Absolute territorial sovereignty identical to land territory. No right of innocent passage without prior permission.',
      sovereigntyAr: 'سيادة وطنية مطلقة مماثلة تماماً للسيادة على اليابسة؛ لا يحق لأي سفينة أجنبية المرور دون إذن صريح.',
      rightsEn: [
        'Total state sovereignty over surface, water column, seabed, subsoil, and airspace',
        'Foreign vessels cannot enter without official diplomatic clearances',
        'State exercises full civil, criminal, and environmental jurisdiction',
      ],
      rightsAr: [
        'سيادة كاملة للدولة على سطح الماء، عمود الماء، القاع وما تحت القاع، والمجال الجوي',
        'لا تتمتع السفن الأجنبية بحق المرور البريء في المياه الداخلية',
        'تخضع تماماً للقوانين الجمركية والبيئية والأمنية والجبائية للدولة الساحلية',
      ],
      unclosRef: 'UNCLOS 1982 Art. 8',
      badgeColor: 'bg-blue-600',
    },
    territorial: {
      titleEn: 'Territorial Sea (المياه الإقليمية)',
      titleAr: 'المياه الإقليمية للدولة',
      extentEn: 'Extends from the baseline seaward up to 12 nautical miles (1 NM ≈ 1.852 km). Egypt: 12 NM.',
      extentAr: 'تمتد من خط الأساس نحو البحر بمسافة تصل إلى 12 ميلاً بحرياً (الميل البحري ≈ 1.852 كم). في مصر: 12 ميلاً.',
      sovereigntyEn: 'Full state sovereignty, subject to the foreign right of Innocent Passage (المرور البريء).',
      sovereigntyAr: 'سيادة وطنية كاملة للدولة الساحلية مع التزامها بالسماح بـ «حق المرور البريء» للسفن التجارية الأجنبية.',
      rightsEn: [
        'Outer edge defines the state maritime political border (الحد السياسي البحري للدولة)',
        'Exclusive rights to fisheries, oil, natural gas, and mineral extraction',
        'Sovereignty over the overlying airspace and underlying continental seabed',
        'Foreign warships must adhere to peace, security, and environmental safety protocols',
      ],
      rightsAr: [
        'حافتها الخارجية تمثل الحد السياسي البحري الرسمي للدولة الساحلية',
        'حق حصري للدولة في صيد الأسماك واستخراج الثروات والنفط والغاز الطبيعي',
        'سيادة كاملة على المجال الجوي فوقها وقاع البحر وما تحت القاع',
        'حق السفن التجارية في المرور البريء ما دامت لا تضر بأمن وسلامة الدولة الساحلية',
      ],
      unclosRef: 'UNCLOS 1982 Art. 2–16',
      badgeColor: 'bg-teal-600',
    },
    contiguous: {
      titleEn: 'Contiguous Zone (المياه التكميلية / الملاصقة)',
      titleAr: 'المياه التكميلية (الملاصقة)',
      extentEn: 'Extends up to 12 nautical miles beyond the outer edge of the territorial sea (maximum 24 NM from baseline).',
      extentAr: 'تمتد بمسافة 12 ميلاً بحرياً تالية للمياه الإقليمية (أي حتى مسافة 24 ميلاً بحرياً كحد أقصى من خط الأساس).',
      sovereigntyEn: 'Specialized protective and customs jurisdiction; part of the open international waters/EEZ.',
      sovereigntyAr: 'سلطات رقابية وجمركية وأمنية مشروطة بحماية أمن وسلامة الدولة وسلامة أراضيها ومصالحها الحيوية.',
      rightsEn: [
        'Power to prevent and punish infringement of customs, fiscal, immigration, or sanitary laws',
        'State security surveillance and quarantine enforcement',
        'Conditional jurisdiction: must not impede lawful international transit without just cause',
      ],
      rightsAr: [
        'ممارسة الرقابة والإشراف الضروريين لمنع مخالفة القوانين الجمركية والمالية والهجرة والصحية',
        'إجراءات أمنية ووقائية لضمان سلامة الدولة الساحلية قبل اقتراب السفن من شواطئها',
        'تعد جزءاً من المياه الدولية لكنها تخضع لسلطات الدولة الرقابية المشروطة',
      ],
      unclosRef: 'UNCLOS 1982 Art. 33',
      badgeColor: 'bg-emerald-600',
    },
    eez: {
      titleEn: 'Exclusive Economic Zone (المنطقة الاقتصادية الخالصة - EEZ)',
      titleAr: 'المنطقة الاقتصادية الخالصة (EEZ)',
      extentEn: 'Extends from the outer baseline up to 200 nautical miles seaward.',
      extentAr: 'تمتد من خطوط الأساس حتى مسافة أقصاها 200 ميل بحري باتجاه عرض البحر.',
      sovereigntyEn: 'Sovereign rights for exploring, exploiting, conserving and managing all natural living and non-living resources.',
      sovereigntyAr: 'حقوق سيادية استكشافية واقتصادية لحصاد الموارد الحية (الأسماك) وغير الحية (النفط والغاز الطبيعي كالظهر ونور).',
      rightsEn: [
        'Sole rights to build artificial islands, offshore oil platforms, and wind energy installations',
        'Crucial for offshore natural gas discoveries (e.g. Egypt’s Zohr field in the East Mediterranean)',
        'All other states enjoy freedoms of navigation, overflight, and laying submarine cables and pipelines',
      ],
      rightsAr: [
        'حق حصري في استغلال حقول الغاز الطبيعي والنفط (مثل حقل ظهر العملاق في شرق المتوسط)',
        'حق إنشاء الجزر الصناعية والمنصات النفطية ومحطات الطاقة البحرية',
        'تتمتع باقي دول العالم بحرية الملاحة البحرية والجوية ومد الكابلات والأنابيب المغمورة دون إعاقة',
      ],
      unclosRef: 'UNCLOS 1982 Part V, Art. 55–75',
      badgeColor: 'bg-cyan-600',
    },
    shelf: {
      titleEn: 'Continental Shelf (الرصيف القاري)',
      titleAr: 'الرصيف القاري (قاع البحر)',
      extentEn: 'The seabed and subsoil of submarine areas extending from shore down to 100 fathoms (≈ 200 meters water depth).',
      extentAr: 'امتداد اليابسة تحت مياه البحر حتى عمق 100 قامة (حوالي 200 متر من سطح الماء).',
      sovereigntyEn: 'Exclusive sovereign rights over the seabed and its subterranean mineral & hydrocarbon riches.',
      sovereigntyAr: 'حقوق سيادية حصرية للدولة الساحلية في التنقيب واستخراج الموارد القاعية والبترولية والغاز.',
      rightsEn: [
        'Triggered high-profile boundary disputes after discovery of massive oil and gas (e.g., North Sea, Gulf of Mexico, Arab Gulf)',
        'Famous ICJ 1982 dispute between Libya and Tunisia was settled based on continental shelf deflection angles',
        'Does not affect the legal status of the overlying waters or airspace',
      ],
      rightsAr: [
        'ازدادت أهميته الجيوسياسية بعد الحرب العالمية الثانية وظهور آبار النفط والغاز المغمورة (كالخليج العربي وبحر الشمال)',
        'فصلت محكمة العدل الدولية عام 1982 في النزاع الشهير بين ليبيا وتونس حول الرصيف القاري بتعديل زاوية الحد لـ 52 درجة',
        'تقتصر السيادة على القاع وما تحته ولا تشمل مياه البحر السطحية أو أجوائها',
      ],
      unclosRef: 'UNCLOS 1982 Part VI, Art. 76–85',
      badgeColor: 'bg-amber-600',
    },
    highseas: {
      titleEn: 'High Seas / International Waters (أعالي البحار / المياه الدولية)',
      titleAr: 'أعالي البحار (المياه الدولية)',
      extentEn: 'All parts of the sea that are not included in the EEZ, territorial sea, or internal waters.',
      extentAr: 'المناطق البحرية المفتوحة التي تقع خارج نطاق المناطق الاقتصادية الخالصة والمياه الإقليمية للدول.',
      sovereigntyEn: 'Common heritage of mankind (مشاع للإنسانية جمعاء). No nation can claim sovereignty over any part of it.',
      sovereigntyAr: 'تراث مشترك للإنسانية جمعاء؛ مفتوحة لجميع الدول بحرية مطلقة ولا يجوز لأي دولة ادعاء السيادة عليها.',
      rightsEn: [
        'Freedom of navigation for civilian merchant and naval vessels of all coastal and landlocked nations',
        'Freedom of overflight for civil and military aviation',
        'Freedom of marine scientific research and laying submarine pipelines',
        'Universal international jurisdiction against piracy, illicit narcotics trafficking, and unauthorized broadcasting',
      ],
      rightsAr: [
        'حرية الملاحة التامة لجميع سفن العالم الساحلية والحبيسة',
        'حرية الطيران والملاحة الجوية والبحث العلمي السلمي',
        'تخضع للقانون الدولي والولاية القضائية العالمية في مكافحة القرصنة وتجارة المخدرات',
      ],
      unclosRef: 'UNCLOS 1982 Part VII, Art. 86–120',
      badgeColor: 'bg-indigo-600',
    },
  };

  // -------------------------------------------------------------
  // Mode 3: Dispute Hotspots & Geopolitical Flashpoints
  // -------------------------------------------------------------
  const [selectedHotspot, setSelectedHotspot] = useState<string>('ceuta_melilla');

  const hotspotsData: Record<
    string,
    {
      titleEn: string;
      titleAr: string;
      regionEn: string;
      regionAr: string;
      partiesEn: string;
      partiesAr: string;
      coreCauseEn: string;
      coreCauseAr: string;
      curriculumDetailsEn: string[];
      curriculumDetailsAr: string[];
      strategicImportanceEn: string;
      strategicImportanceAr: string;
      settlementStatusEn: string;
      settlementStatusAr: string;
    }
  > = {
    ceuta_melilla: {
      titleEn: 'Ceuta & Melilla (سبتة ومليلية)',
      titleAr: 'قضية سبتة ومليلية',
      regionEn: 'North African Moroccan Mediterranean Coast',
      regionAr: 'الساحل الشمالي لدولة المغرب على البحر المتوسط',
      partiesEn: 'Morocco vs. Spain',
      partiesAr: 'المملكة المغربية ضد إسبانيا',
      coreCauseEn: 'Colonial inheritance dating to the 15th century (Ceuta occupied 1415, Melilla 1497).',
      coreCauseAr: 'إرث استعماري قديم؛ سقطت سبتة بيد البرتغال 1415م ثم إسبانيا 1580م، وسقطت مليلية 1497م.',
      curriculumDetailsEn: [
        'Spain claims historical longevity and that the population is currently 60% Spanish citizens.',
        'Spain contends that neither city was registered on the UN list of non-self-governing territories in 1947.',
        'Morocco demands peaceful retrocession, stressing geographical contiguity and non-prescription of colonial occupation.',
        '1985 Spanish Aliens Law (قانون الأجانب) exacerbated the conflict by classifying Moroccan indigenous residents as foreigners needing residence permits every 5 years.',
        'Morocco seeks friendly bilateral dialogue to safeguard deep diplomatic and trade relations with Spain.',
      ],
      curriculumDetailsAr: [
        'تتمسك إسبانيا بالتقادم التاريخي (مضي أكثر من 5 قرون) وبأن 60% من السكان من أصول إسبانية.',
        'تدعي إسبانيا أن المدينتين لم تسجلا في قائمة الأمم المتحدة للمناطق المحتلة غير المتمتعة بالحكم الذاتي عام 1947م.',
        'يطالب المغرب باسترداد المدينتين مؤكداً على العامل الجغرافي (الاتصال الأرضي بالمغرب) وأن الاستعمار لا يسقط بالتقادم.',
        'تأزمت المشكلة بعد صدور قانون الأجانب الإسباني عام 1985م الذي اعتبر المغاربة أجانب يطلب منهم إذن إقامة كل 5 سنوات.',
        'يحرص المغرب على تسوية النزاع ودياً لحماية العلاقات الاقتصادية والاستراتيجية الوثيقة مع إسبانيا.',
      ],
      strategicImportanceEn: 'Direct control over the southern portal of the Strait of Gibraltar, commanding trans-Mediterranean trade.',
      strategicImportanceAr: 'السيطرة الإشرافية المباشرة على المدخل الجنوبي لمضيق جبل طارق والتحكم في تجارة البحر المتوسط.',
      settlementStatusEn: 'Ongoing dormant dispute; Morocco requests negotiations or international arbitration.',
      settlementStatusAr: 'نزاع مجمد قيد الانتظار؛ المغرب يطرح الحوار الدبلوماسي أو التدويل، وإسبانيا ترفض المساس بالسيادة.',
    },
    kashmir: {
      titleEn: 'Kashmir Conflict (نزاع إقليم كشمير)',
      titleAr: 'نزاع إقليم كشمير',
      regionEn: 'Himalayan Frontier between South & Central Asia',
      regionAr: 'منطقة جبال الهيمالايا بين الهند وباكستان والصين',
      partiesEn: 'India vs. Pakistan (with Chinese border involvement)',
      partiesAr: 'الهند ضد باكستان (مع تداخل عسكري صيني)',
      coreCauseEn: '1947 British partition of the Indian subcontinent along religious lines without settling Kashmir.',
      coreCauseAr: 'تقسيم بريطانيا لشبه القارة الهندية عام 1947م على أساس ديني دون حسم مصير كشمير.',
      curriculumDetailsEn: [
        'Kashmir population was 80% Muslim, but the ruling Maharaja Hari Singh was Hindu.',
        'Maharaja initially preferred independence, but when Muslim tribes revolted, he sought Indian military assistance in return for joining the Indian Union.',
        'Pakistan intervened militarily to protect the Muslim majority, triggering the First Indo-Pakistani War.',
        'UN intervened in 1949 and demarcated a Ceasefire Line (خط وقف إطلاق النار), dividing Kashmir into Indian Kashmir (2/3) and Pakistani Kashmir (1/3).',
        'UN proposed a three-stage resolution: Ceasefire -> Demilitarization -> Free plebiscite (استفتاء شعبي) under UN auspices (still unexecuted).',
      ],
      curriculumDetailsAr: [
        'كان غالبية سكان كشمير (أكثر من 80%) مسلمين، بينما كان حاكم الإقليم (المهراجا هاري سينغ) هندوسياً.',
        'فضل الحاكم عدم الانضمام لأي من الدولتين في البداية، ولكن مع اندلاع ثورة المسلمين استنجد بالجيش الهندي مقابل التوقيع على الانضمام للهند.',
        'تدخلت باكستان عسكرياً لمساندة الشعب الكشميري، فاندلعت أول حرب نظامية بين الدولتين.',
        'أوقفت الأمم المتحدة القتال عام 1949م ورسمت خط وقف إطلاق النار: فسيطرت الهند على ثلثي الإقليم وباكستان على الثلث.',
        'اقترحت الأمم المتحدة حلاً شاملاً: وقف القتال، تجريد كشمير من السلاح، ثم إجراء استفتاء شعبي محايد لتقرير المصير (لم ينفذ).',
      ],
      strategicImportanceEn: 'Headwaters of the Indus River basin (حوض نهر السند), natural highland buffer, and tourist retreat.',
      strategicImportanceAr: 'منابع الأنهار المغذية لحوض نهر السند، وموقع استراتيجي جبلي عازل بين قوى نووية آسيوية كبرى.',
      settlementStatusEn: 'Line of Control (LoC) remains one of the world’s most heavily militarized flashpoints.',
      settlementStatusAr: 'خط السيطرة (LoC) ما زال مشتعلاً وعسكرياً بين دولتين تمتلكان أسلحة نووية.',
    },
    libya_tunisia: {
      titleEn: 'Libya–Tunisia Continental Shelf (الرصيف القاري بين ليبيا وتونس)',
      titleAr: 'قضية الرصيف القاري بين ليبيا وتونس',
      regionEn: 'Gulf of Gabes, Central Mediterranean',
      regionAr: 'خليج قابس ووسط البحر الأبيض المتوسط',
      partiesEn: 'Libya vs. Tunisia (ICJ 1982)',
      partiesAr: 'ليبيا ضد تونس (أمام محكمة العدل الدولية 1982م)',
      coreCauseEn: 'Discovery of immense offshore petroleum and gas fields in the continental shelf seabed.',
      coreCauseAr: 'ظهور حقول النفط والغاز الطبيعي العملاقة المغمورة في قاع البحر المتوسط.',
      curriculumDetailsEn: [
        'Libya demanded that the maritime boundary line head straight north into the Mediterranean (خط مستقيم شمالاً).',
        'Tunisia requested that the boundary be drawn at a 45-degree angle northeast, following the general trend of its coastline.',
        'The International Court of Justice (ICJ) ruled in 1982 with an equitable compromise based on cartographical realities.',
        'The ICJ decreed that the boundary run at an initial angle of 26 degrees, then deflect to 52 degrees northeast.',
        'The deflection was mandated by the presence of Tunisian islands (Djerba and Kerkennah), affirming Tunisia’s sovereign exploration rights over offshore fields.',
      ],
      curriculumDetailsAr: [
        'طالبت ليبيا بأن يمتد خط الحدود السياسية البحرية إلى الشمال مباشرة في مياه البحر المتوسط.',
        'طالبت تونس بأن ينحرف خط الحدود بزاوية 45 درجة شرقاً تماشياً مع الاتجاه العام لخط سواحلها.',
        'لجأت الدولتان إلى محكمة العدل الدولية (ICJ) التي أصدرت حكمها التاريخي العادل عام 1982م.',
        'حكمت المحكمة بأن يسير الحد بزاوية 26 درجة شمالاً ثم ينحرف بزاوية 52 درجة باتجاه الشمال الشرقي.',
        'كان سبب انحراف الحد بزاوية 52 درجة هو مراعاة الوجود الجغرافي للجزر التونسية (جربة وقرقنة) مما منح تونس حقوقاً سيادية في حقول النفط والغاز.',
      ],
      strategicImportanceEn: 'Model for peaceful judicial resolution of continental shelf petroleum demarcation disputes.',
      strategicImportanceAr: 'النموذج الأبرز في المنهج الوزاري لحل نزاعات الحدود البحرية والثروات البترولية بالطرق السلمية والتحكيم.',
      settlementStatusEn: 'Fully implemented; permanent maritime boundary demarcated peacefully under ICJ judgment.',
      settlementStatusAr: 'تم التسوية وتنفيذ الحكم نهائياً ورسم الحدود البحرية بسلام بين البلدين الشقيقين.',
    },
    taba: {
      titleEn: 'Taba International Arbitration (قضية طابا والتحكيم الدولي)',
      titleAr: 'التحكيم الدولي في قضية طابا (1988م)',
      regionEn: 'Gulf of Aqaba, Sinai Peninsula, Egypt',
      regionAr: 'رأس خليج العقبة، شبه جزيرة سيناء، جمهورية مصر العربية',
      partiesEn: 'Egypt vs. Israel (Arbitration Tribunal, Geneva)',
      partiesAr: 'مصر ضد إسرائيل (هيئة التحكيم الدولية بجنيف)',
      coreCauseEn: 'Dispute over the placement of Border Pillar No. 91 during the final Israeli withdrawal from Sinai in 1982.',
      coreCauseAr: 'خلاف إسرائيلي حول موقع العلامة الحدودية رقم (91) عند الانسحاب النهائي من سيناء عام 1982م.',
      curriculumDetailsEn: [
        'Israel attempted to shift Pillar 91 inland to annex the strategic beachfront and hotel of Taba.',
        'Egypt stood firm, adhering to the 1906 historical boundary demarcation agreement between Ottoman Egypt and the Ottoman Vilayet of Hijaz.',
        'In 1986, both parties signed a formal compromis to submit the dispute to an international arbitration tribunal.',
        'Egyptian legal, geographical, historical, and military experts presented indisputable archival maps, cadastral surveys, and geological proofs.',
        'On September 29, 1988, the Geneva Arbitration Tribunal ruled unequivocally that Taba belongs entirely to Egyptian sovereignty.',
        'On March 19, 1989, the Egyptian national flag was triumphantly raised over Taba, restoring the last inch of national soil.',
      ],
      curriculumDetailsAr: [
        'حاولت إسرائيل إزاحة العلامة رقم 91 للداخل لضم شاطئ طابا الاستراتيجي المطل على خليج العقبة.',
        'تمسكت مصر بحقها التاريخي وفقاً لاتفاقية الحدود التاريخية الموقعة عام 1906م بين مصر والدولة العثمانية.',
        'اتفق الطرفان عام 1986م على إحالة النزاع إلى هيئة تحكيم دولية مشكلة وفق قواعد القانون الدولي.',
        'قدمت اللجنة القومية المصرية للدفاع عن طابا وثائق وخرائط تاريخية ومساحية وجيولوجية قاطعة أثبتت موقع العلامة الأصلي.',
        'في 29 سبتمبر 1988م، أصدرت هيئة التحكيم بجنيف حكمها التاريخي القاطع بأحقية مصر الكاملة في طابا.',
        'في 19 مارس 1989م، رفع العلم المصري خفاقاً فوق طابا لتكتمل السيادة المصرية على آخر بقعة من تراب سيناء.',
      ],
      strategicImportanceEn: 'Strategic apex of the Gulf of Aqaba, tri-border junction (Egypt, Jordan, Saudi Arabia, Palestine), and symbol of international law power.',
      strategicImportanceAr: 'قمة خليج العقبة الاستراتيجية ومفترق الطرق بين 4 دول، وأعظم نموذج للانتصار الدبلوماسي والجغرافي والقانوني.',
      settlementStatusEn: 'Decisively settled with full Egyptian sovereign control.',
      settlementStatusAr: 'محسومة نهائياً بسيادة مصرية تاريخية ومطلقة.',
    },
    pastoral_tribes: {
      titleEn: 'African Sahel Pastoral Tribes (مشكلات حركة الرعاة في الساحل الأفريقي)',
      titleAr: 'مشكلات حركة القبائل الرعوية في الساحل الأفريقي',
      regionEn: 'Sub-Saharan Savannah & Sahel Belt (Senegal to Sudan)',
      regionAr: 'إقليم السافانا والساحل الأفريقي جنوب الصحراء الكبرى',
      partiesEn: 'Sahel nations (Mauritania, Senegal, Mali, Niger, Chad, Sudan)',
      partiesAr: 'دول غرب ووسط أفريقيا (موريتانيا، السنغال، مالي، النيجر، تشاد، السودان)',
      coreCauseEn: 'Colonial boundary demarcation dividing tribal homelands, climate change, and demographic shifts.',
      coreCauseAr: 'ترسيم الحدود السياسية الهندسية دون مراعاة لحركة القبائل، والتغيرات المناخية، والزحف الزراعي.',
      curriculumDetailsEn: [
        'European colonial powers drew geometric boundaries that fragmented historical nomadic ethnic groups across multiple states.',
        'Severe droughts in the 1970s and 1980s decimated millions of livestock, forcing pastoralists to migrate south toward agricultural regions.',
        'Expansion of settled agriculture onto traditional grazing pastures caused bloody farmer-herder clashes.',
        'Taxes, customs duties, and currency disparities imposed along state borders hindered transhumance movement.',
        'International agreements were forged to organize seasonal movements, notably the ECOWAS agreement (16 West African states) and the Mauritania-Senegal and Mauritania-Mali bilateral pacts.',
      ],
      curriculumDetailsAr: [
        'رسم المستعمر الأوروبي حدوداً سياسية هندسية وفلكية قسمت مواطن القبائل وحركتها الطبيعية بين عدة دول.',
        'التغيرات المناخية وموجات الجفاف الشديدة في السبعينيات والثمانينيات أدت لنفوق ملايين الماشية وهجرة الرعاة جنوباً.',
        'تحويل أراضي المراعي إلى الزراعة المروية والاستقرار الزراعي أدى إلى نزاعات دامية بين الرعاة والمزارعين.',
        'فرض الرسوم الجمركية والضرائب وتباين العملات بين الدول أثقل كاهل القبائل الرعوية.',
        'تم توقيع اتفاقيات نموذجية لتنظيم حركة الرعاة، مثل معاهدة الإيكواس (ECOWAS) بين 16 دولة غرب أفريقية، والاتفاقيات الثنائية بين موريتانيا والسنغال، وموريتانيا ومالي.',
      ],
      strategicImportanceEn: 'Direct threat to human security, food supply, and political stability in Africa.',
      strategicImportanceAr: 'أكبر مهدد للأمن الغذائي والاستقرار المجتمعي وحفظ دماء الشعوب في القارة الأفريقية.',
      settlementStatusEn: 'Mitigated via regional migration protocols (ECOWAS, bilateral pacts), but challenged by climate stress.',
      settlementStatusAr: 'تتم إدارته عبر الاتفاقيات الإقليمية (الإيكواس والاتفاقيات الثنائية) مع استمرار تحديات التصحر والجفاف.',
    },
  };

  // -------------------------------------------------------------
  // Mode 4: Economic Blocs & Alliances
  // -------------------------------------------------------------
  const [selectedBloc, setSelectedBloc] = useState<string>('eu');

  const blocsData: Record<
    string,
    {
      nameEn: string;
      nameAr: string;
      type: 'economic' | 'military';
      membersEn: string;
      membersAr: string;
      headquartersEn: string;
      headquartersAr: string;
      stagesEn: string[];
      stagesAr: string[];
      strengthsEn: string[];
      strengthsAr: string[];
      egyptLinkEn?: string;
      egyptLinkAr?: string;
    }
  > = {
    eu: {
      nameEn: 'European Union (الاتحاد الأوروبي)',
      nameAr: 'الاتحاد الأوروبي (EU)',
      type: 'economic',
      membersEn: '27 European nations (4.1 million km², ~450 million population)',
      membersAr: '27 دولة أوروبية (مساحة 4.1 مليون كم²، وسكان يتجاوزون 450 مليون نسمة)',
      headquartersEn: 'Brussels (Belgium) - Capital of European institutions',
      headquartersAr: 'بروكسل (عاصمة بلجيكا ومقر المفوضية ومجلس الاتحاد)',
      stagesEn: [
        '1. Free Trade Area (1957 Treaty of Rome): Elimination of internal customs duties.',
        '2. Customs Union (1968): Unified external customs tariff on third-party imports.',
        '3. Common Market (Single European Act 1986): Free flow of capital, labor, goods, and services.',
        '4. Economic Union (1992 Maastricht Treaty): Euro currency and coordination of monetary policies.',
        '5. Comprehensive Integration: Deep institutional alignment and common security policy.',
      ],
      stagesAr: [
        '١. منطقة التجارة الحرة (معاهدة روما 1957م): إلغاء الحواجز والرسوم الجمركية البينية.',
        '٢. الاتحاد الجمركي (1968م): توحيد التعريفة الجمركية على السلع المستوردة من خارج دول الاتحاد.',
        '٣. السوق المشتركة (1986م): حرية انتقال رؤوس الأموال، العمالة، والسلع والخدمات بين الدول الأعضاء.',
        '٤. الوحدة الاقتصادية (معاهدة ماستريخت 1992م): إقرار العملة الأوروبية الموحدة (اليورو) وتنسيق السياسات النقدية.',
        '٥. الاندماج الاقتصادي الكامل: التنسيق المؤسسي والسياسي الشامل وشروط كوبنهاجن 1993م.',
      ],
      strengthsEn: [
        'Copenhagen Criteria (1993): Economic, Legislative, and Political conditions for accession',
        'Advanced industrial infrastructure and technological prowess',
        'Schengen Area enabling passport-free border crossings',
      ],
      strengthsAr: [
        'شروط كوبنهاجن (1993م): شروط اقتصادية وتشريعية وسياسية تضمن كفاءة الدول المنضمة',
        'بنية صناعية وتكنولوجية متقدمة وتكامل إنتاجي فريد',
        'اتفاقية شنجن لحرية تنقل الأفراد عبر الحدود دون تأشيرات',
      ],
    },
    comesa: {
      nameEn: 'COMESA (الكوميسا)',
      nameAr: 'تجمع الكوميسا (COMESA)',
      type: 'economic',
      membersEn: '21 Eastern & Southern African nations (12 million km², 580M population)',
      membersAr: '21 دولة من شرق وجنوب القارة الأفريقية (مساحة 12 مليون كم²، 580 مليون نسمة)',
      headquartersEn: 'Lusaka (Zambia)',
      headquartersAr: 'لوساكا (عاصمة زامبيا)',
      stagesEn: [
        'Formed in 1994 as the successor to the Preferential Trade Area (PTA).',
        'Free Trade Area achieved zero tariffs among ratified member states.',
        'Customs Union launched in 2009 in Victoria Falls.',
        'Progressing toward Common Market and Monetary Union.',
      ],
      stagesAr: [
        'تأسس عام 1994م خلفاً لمنطقة التجارة التفضيلية (PTA).',
        'منطقة تجارة حرة حققت إعفاء جمركياً شاملاً ومتبادلاً بين الدول الموقعة.',
        'إعلان الاتحاد الجمركي في قمة شلالات فيكتوريا عام 2009م.',
        'التطلع المستمر للوصول إلى السوق المشتركة والوحدة النقدية الأفريقية.',
      ],
      strengthsEn: [
        'Vast agricultural, raw mineral, and renewable energy reserves',
        'Huge consumer market of over half a billion African citizens',
        'Trade remedies and dispute settlement court in Khartoum',
      ],
      strengthsAr: [
        'احتياطيات هائلة من الموارد الطبيعية والمحاصيل الزراعية والثروات التعدينية',
        'سوق استهلاكي واعد يتجاوز نصف مليار مستهلك أفريقي',
        'محكمة عدل الكوميسا لفض المنازعات التجارية والتنسيق الجمركي',
      ],
      egyptLinkEn:
        'Egypt joined in 1998, securing tariff-free exports for Egyptian chemical, cement, pharmaceutical, ceramic, and manufactured goods across Africa.',
      egyptLinkAr:
        'انضمت مصر عام 1998م وتستفيد من الإعفاء الجمركي الكامل لصادراتها الصناعية (الكيماويات، الأسمنت، السيراميك، الأدوية، والأجهزة الكهربائية) إلى الأسواق الأفريقية.',
    },
    gcc: {
      nameEn: 'Gulf Cooperation Council (مجلس التعاون لدول الخليج العربية - GCC)',
      nameAr: 'مجلس التعاون لدول الخليج العربية',
      type: 'economic',
      membersEn: '6 Arab Gulf States (Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman)',
      membersAr: '6 دول خليجية عربية (السعودية، الإمارات، الكويت، قطر، البحرين، سلطنة عمان)',
      headquartersEn: 'Riyadh (Saudi Arabia)',
      headquartersAr: 'الرياض (المملكة العربية السعودية)',
      stagesEn: [
        'Founded in 1981 in Abu Dhabi based on common geographic, cultural, and religious ties.',
        'Free Trade Zone launched 1983.',
        'Unified Customs Union implemented in 2003.',
        'Gulf Common Market declared in 2008.',
      ],
      stagesAr: [
        'تأسس عام 1981م في أبو ظبي انطلاقاً من الروابط الجغرافية والدينية واللغوية المشتركة.',
        'إقامة منطقة التجارة الحرة عام 1983م.',
        'تطبيق الاتحاد الجمركي الموحد عام 2003م.',
        'إعلان قيام السوق الخليجية المشتركة عام 2008م.',
      ],
      strengthsEn: [
        'Supreme homogeneity: identical language, religion, Arab heritage, contiguous landmass',
        'Controls unmatched reserves of global oil and liquified natural gas (LNG)',
        'Peninsula Shield Force (درع الجزيرة) as collective defense arm',
      ],
      strengthsAr: [
        'أعلى درجات التجانس الجغرافي والبشري: وحدة اللغة والدين والتاريخ والموقع الجغرافي المتصل',
        'امتلاك أضخم احتياطي ومخزون من النفط والغاز الطبيعي المسال عالمياً',
        'قوة درع الجزيرة العسكرية كذراع أمني دفاعي مشترك',
      ],
    },
    nato: {
      nameEn: 'NATO (حلف شمال الأطلسي)',
      nameAr: 'حلف شمال الأطلسي (الناتو - NATO)',
      type: 'military',
      membersEn: '32 North American & European member states',
      membersAr: '32 دولة من أمريكا الشمالية وأوروبا (بعد انضمام فنلندا والسويد)',
      headquartersEn: 'Brussels (Belgium)',
      headquartersAr: 'بروكسل (عاصمة بلجيكا)',
      stagesEn: [
        'Signed in Washington in 1949 by 12 founding nations following the Berlin Blockade.',
        'Article 5 Principle: An armed attack against one member is deemed an attack against all.',
        'Confronted the Soviet Warsaw Pact throughout the Cold War until 1991.',
        'Post-Cold War expansion eastward toward Eastern Europe and the Baltic states.',
      ],
      stagesAr: [
        'توقيع معاهدة واشنطن عام 1949م بين 12 دولة مؤسسة إثر حصار الاتحاد السوفيتي لبرلين.',
        'المادة الخامسة: أي هجوم مسلح ضد أي دولة عضو يعد هجوماً على سائر أعضاء الحلف جميعاً.',
        'خاض الحرب الباردة في مواجهة حلف وارسو حتى تفكك الأخير وانهيار الاتحاد السوفيتي عام 1991م.',
        'توسيع نطاق الحلف شرقاً ليشمل دول شرق أوروبا ودول البلطيق وحفظ السلام الدولي.',
      ],
      strengthsEn: [
        'Massive integrated conventional and nuclear command and control',
        'Intervention capability in peacekeeping operations (Bosnia, Kosovo, counter-piracy)',
        'Technological and intelligence superiority under US leadership',
      ],
      strengthsAr: [
        'أقوى قيادة عسكرية موحدة متطورة تجمع الترسانة التقليدية والنووية',
        'القدرة على التدخل وحفظ السلام الدولي (أزمات البوسنة والهرسك، كوسوفو، ومكافحة القرصنة)',
        'التفوق التكنولوجي والاستخباراتي الهائل بقيادة الولايات المتحدة',
      ],
    },
  };

  // -------------------------------------------------------------
  // Mode 5: Geopolitical Power Balance Matrix
  // -------------------------------------------------------------
  const [geoFactors, setGeoFactors] = useState({
    morphology: 85, // physical site & size
    demographics: 70, // population quality & skills
    economics: 75, // agriculture, energy & minerals
    military: 80, // troops, doctrine & tech
    organization: 78, // governance, stability & institutions
  });

  const overallPowerScore = Math.round(
    geoFactors.morphology * 0.2 +
      geoFactors.demographics * 0.2 +
      geoFactors.economics * 0.25 +
      geoFactors.military * 0.2 +
      geoFactors.organization * 0.15
  );

  const getPowerClassification = (score: number) => {
    if (score >= 85) return { en: 'Global Superpower / Hegemon', ar: 'قوة عظمى مهيمنة عالمياً', color: 'text-emerald-400' };
    if (score >= 70) return { en: 'Major Regional Power', ar: 'قوة إقليمية كبرى مؤثرة', color: 'text-teal-400' };
    if (score >= 50) return { en: 'Intermediate Stable State', ar: 'دولة متوسطة القوة متوازنة', color: 'text-amber-400' };
    return { en: 'Vulnerable / Dependent State', ar: 'دولة محدودة القوة هشة جيوسياسياً', color: 'text-rose-400' };
  };

  const powerRank = getPowerClassification(overallPowerScore);

  return (
    <div
      className={`rounded-3xl border transition-all overflow-hidden ${
        isContrast
          ? 'bg-black border-yellow-400 text-white'
          : isLight
          ? 'bg-slate-50 border-slate-200 text-slate-900 shadow-xl'
          : 'bg-slate-900 border-slate-800 text-white shadow-2xl'
      } ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto rounded-none p-6' : 'p-4 sm:p-6'}`}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 shrink-0">
            <Globe className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                {isArabic ? 'استوديو الخرائط والجيوبولتيك التفاعلي' : 'Geopolitical Map & Analysis Studio'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                MoE MoE-Certified
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {isArabic
                ? 'محاكاة أشكال الدول، الحدود البحرية UNCLOS، بؤر النزاعات الدولية، والتكتلات الاقتصادية'
                : 'Interactive state morphology, UNCLOS maritime zones, dispute hotspots & economic blocs'}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 overflow-x-auto max-w-full">
          {[
            { id: 'morphology', labelEn: 'Morphology', labelAr: 'شكل الدولة والاندماج', icon: Sliders },
            { id: 'unclos', labelEn: 'UNCLOS Maritime', labelAr: 'المناطق المائية', icon: Anchor },
            { id: 'hotspots', labelEn: 'Hotspots', labelAr: 'بؤر النزاعات', icon: Flame },
            { id: 'blocs', labelEn: 'Blocs & Alliances', labelAr: 'التكتلات والأحلاف', icon: Building2 },
            { id: 'geopower', labelEn: 'Power Matrix', labelAr: 'مصفوفة القوة', icon: BarChart3 },
          ].map((tab) => {
            const isSelected = activeMode === tab.id;
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveMode(tab.id as StudioMode)}
                className={`flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-500/30'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
              </button>
            );
          })}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all whitespace-nowrap text-slate-400 hover:text-white hover:bg-slate-800/60 cursor-pointer"
            title={isFullscreen ? (isArabic ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'Exit Fullscreen (Esc)') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-amber-400" /> : <Maximize2 className="w-3.5 h-3.5 text-teal-400" />}
            <span>{isFullscreen ? (isArabic ? 'إنهاء' : 'Exit') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="mt-6">
        {/* ========================================================= */}
        {/* TAB 1: Morphology & Compactness Calculator               */}
        {/* ========================================================= */}
        {activeMode === 'morphology' && (
          <div className="space-y-6">
            {/* Country Presets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {Object.keys(countryPresets).map((key) => {
                const item = countryPresets[key];
                const isSelected = selectedCountryPreset === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedCountryPreset(key)}
                    className={`p-3 rounded-2xl text-start transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-teal-500/10 border-teal-500 text-teal-300 shadow-md shadow-teal-500/10'
                        : isLight
                        ? 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-black truncate">{isArabic ? item.nameAr : item.nameEn}</div>
                    <div className="text-[10px] text-slate-500 mt-1 truncate">
                      {isArabic ? item.shapeAr : item.shapeEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Morphology Visual & Metrics Display */}
            {countryPresets[selectedCountryPreset] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left/Main Column: Analytical Card */}
                <div className="lg:col-span-8 p-6 rounded-3xl bg-slate-950/50 border border-slate-800/80 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-white">
                          {isArabic
                            ? countryPresets[selectedCountryPreset].nameAr
                            : countryPresets[selectedCountryPreset].nameEn}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {isArabic
                            ? countryPresets[selectedCountryPreset].shapeAr
                            : countryPresets[selectedCountryPreset].shapeEn}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                        <span>🏛️ {isArabic ? 'العاصمة:' : 'Capital:'}</span>
                        <span className="text-teal-300 font-semibold">
                          {isArabic
                            ? countryPresets[selectedCountryPreset].capitalAr
                            : countryPresets[selectedCountryPreset].capitalEn}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs">
                      <div>
                        <span className="text-slate-500 block">{isArabic ? 'المساحة:' : 'Area:'}</span>
                        <span className="font-black text-white">
                          {countryPresets[selectedCountryPreset].area.toLocaleString()} km²
                        </span>
                      </div>
                      <div className="w-px h-8 bg-slate-800" />
                      <div>
                        <span className="text-slate-500 block">{isArabic ? 'محيط الحدود:' : 'Perimeter:'}</span>
                        <span className="font-black text-white">
                          {countryPresets[selectedCountryPreset].perimeter.toLocaleString()} km
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Shape Morphology Cartographic Map */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-3 px-1">
                      <span className="font-bold flex items-center gap-1.5 text-teal-400">
                        <Globe className="w-4 h-4" />
                        <span>{isArabic ? 'الخريطة السياسية والمورفولوجية عالية الدقة' : 'High-Resolution Political Morphology Map'}</span>
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                        {isArabic ? 'إسقاط كارتوجرافي جغرافي حقيقي' : 'Authentic Geodetic Boundary Vectors'}
                      </span>
                    </div>

                    <HighResMorphologyMap countryKey={selectedCountryPreset} lang={lang} theme={theme} />

                    <div className="text-xs text-slate-400 text-center mt-3 max-w-lg z-10 leading-relaxed">
                      {isArabic
                        ? countryPresets[selectedCountryPreset].notesAr
                        : countryPresets[selectedCountryPreset].notesEn}
                    </div>
                  </div>

                  {/* Geopolitical Impact Analysis */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-slate-400 font-bold flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-teal-400" />
                          <span>{isArabic ? 'كفاءة الدفاع والقدرة العسكرية' : 'Defense & Tactical Mobility'}</span>
                        </span>
                        <span className="font-black text-teal-400">
                          {countryPresets[selectedCountryPreset].defenseBonus}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-500"
                          style={{ width: `${countryPresets[selectedCountryPreset].defenseBonus}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">
                        {countryPresets[selectedCountryPreset].defenseBonus > 70
                          ? isArabic
                            ? 'خطوط إمداد دفاعية قصيرة وسريعة؛ انخفاض طول الحدود مقارنة بالمساحة يقلل احتمالات الاختراق.'
                            : 'Short internal supply lines, minimal borders relative to area, superior rapid troop deployment.'
                          : isArabic
                          ? 'حدود مفرطة الطول تزيد من صعوبة التأمين وتجعل أطراف الدولة عرضة للتهديدات الخارجية.'
                          : 'Vulnerable extended borders require elevated defense spending and dispersed border patrols.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-slate-400 font-bold flex items-center gap-1.5">
                          <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{isArabic ? 'السيطرة الإدارية وتماسك الدولة' : 'Administrative Governance & Unity'}</span>
                        </span>
                        <span className="font-black text-cyan-400">
                          {countryPresets[selectedCountryPreset].adminControl}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 transition-all duration-500"
                          style={{ width: `${countryPresets[selectedCountryPreset].adminControl}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">
                        {countryPresets[selectedCountryPreset].adminControl > 70
                          ? isArabic
                            ? 'سهولة بسط سلطة الحكومة المركزية، تقليل فرص النزعات الانفصالية، وتجانس ثقافي واجتماعي.'
                            : 'Seamless centralized administrative authority, reduced secessionist risk, robust societal cohesion.'
                          : isArabic
                          ? 'عزلة جغرافية لبعض الأقاليم؛ صعوبة في السيطرة الإدارية المركزية وقد يشجع النزعات الانفصالية.'
                          : 'Geographical isolation of outlying provinces can foment separatist tendencies or administrative neglect.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Mathematical Compactness Index Box */}
                <div className="lg:col-span-4 p-6 rounded-3xl bg-slate-950/50 border border-slate-800/80 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5" />
                      <span>{isArabic ? 'مؤشر الاندماج الهندسي' : 'Compactness Index'}</span>
                    </span>
                    <h4 className="text-base font-black text-white mt-1">
                      {isArabic ? 'مقياس بولسبي-بوبر الدائري' : 'Polsby-Popper Circularity Score'}
                    </h4>

                    {/* Math Formula Display */}
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800/90 text-center font-mono text-sm text-teal-300 mt-3 dir-ltr">
                      S = 4π · Area / Perimeter²
                    </div>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {isArabic
                        ? 'الدائرة هي الشكل الهندسي الأمثل بأقصر محيط لأكبر مساحة (S = 1.0). كلما اقتربت النسبة من 100% كان شكل الدولة أكثر اندماجاً ومثالية.'
                        : 'A circle possesses the shortest perimeter for a given area (S = 1.0). The closer the value to 100%, the more compact and militarily secure the state.'}
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                        {compactnessPercent}%
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {isArabic ? 'مستوى الاندماج والشكل' : 'Circularity & Compactness'}
                      </div>
                      <div className="mt-3 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                        {compactnessPercent >= 40
                          ? isArabic
                            ? 'مندمج / منتظم ممتاز'
                            : 'High Compactness'
                          : compactnessPercent >= 20
                          ? isArabic
                            ? 'متوسط الاندماج'
                            : 'Moderate'
                          : isArabic
                          ? 'شريطي / مجزأ عالي الهشاشة'
                          : 'Low / Elongated'}
                      </div>
                    </div>
                  </div>

                  {/* MoE Exam Takeaway */}
                  <div className="p-4 rounded-2xl bg-teal-950/30 border border-teal-800/40 text-xs text-teal-200">
                    <div className="font-bold flex items-center gap-1.5 mb-1 text-teal-400">
                      <Info className="w-3.5 h-3.5" />
                      <span>{isArabic ? 'قاعدة امتحان الثانوية العامة:' : 'MoE Exam Core Rule:'}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      {isArabic
                        ? '«أفضل أشكال الدول هو الشكل المندمج (المنتظم) لأنه يحقق أقل طول للحدود بالنسبة للمساحة، مما يقلل فرص النزاع ويوفر مرونة دفاعية وسيطرة إدارية كاملة».'
                        : '"Compact morphology represents the optimal state configuration because it yields the minimal border perimeter per unit area, minimizing border friction and optimizing defense."'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: UNCLOS Maritime Delimitation Cross-Section        */}
        {/* ========================================================= */}
        {activeMode === 'unclos' && (
          <div className="space-y-6">
            {/* Interactive Maritime Cross-Section SVG */}
            <div className="p-6 rounded-3xl bg-slate-950/60 border border-slate-800/80 overflow-hidden relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-base font-black text-white">
                    {isArabic
                      ? 'القطاع العرضي للمناطق البحرية (اتفاقية الأمم المتحدة لقانون البحار UNCLOS 1982م)'
                      : 'UNCLOS 1982 Maritime Delimitation Cross-Section'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isArabic
                      ? 'انقر على أي منطقة مائية لاستعراض أبعادها القانونية وسيادة الدولة عليها وفقاً لمنهج الجغرافيا السياسية'
                      : 'Click any maritime zone to inspect its territorial legal status and sovereign jurisdiction under MoE syllabus'}
                  </p>
                </div>
                <span className="text-xs font-mono text-teal-400 bg-teal-950/50 px-3 py-1 rounded-full border border-teal-800/50 shrink-0">
                  1 Nautical Mile = 1.852 km
                </span>
              </div>

              {/* Cross-Section Graphic */}
              <div className="w-full overflow-x-auto pb-4">
                <svg className="w-[800px] h-[260px] mx-auto select-none" viewBox="0 0 800 260">
                  {/* Sky Background */}
                  <rect x="0" y="0" width="800" height="150" fill="#0f172a" />

                  {/* Land / Coast */}
                  <polygon
                    points="0,120 120,120 140,150 0,150"
                    fill="#1e293b"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />
                  <text x="60" y="110" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
                    {isArabic ? 'اليابسة / الساحل' : 'Land / Coast'}
                  </text>

                  {/* Baseline (خط الأساس) */}
                  <line x1="120" y1="90" x2="120" y2="240" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
                  <text x="120" y="85" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
                    {isArabic ? 'خط الأساس (Baseline)' : 'Baseline'}
                  </text>

                  {/* Zone 1: Internal Waters */}
                  <rect
                    x="20"
                    y="125"
                    width="95"
                    height="25"
                    fill="#1d4ed8"
                    opacity={selectedMaritimeZone === 'internal' ? 0.9 : 0.4}
                    className="cursor-pointer transition-all hover:opacity-80"
                    onClick={() => setSelectedMaritimeZone('internal')}
                  />
                  <text
                    x="67"
                    y="142"
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="cursor-pointer"
                    onClick={() => setSelectedMaritimeZone('internal')}
                  >
                    {isArabic ? 'المياه الداخلية' : 'Internal'}
                  </text>

                  {/* Zone 2: Territorial Sea (12 NM) */}
                  <rect
                    x="120"
                    y="130"
                    width="140"
                    height="40"
                    fill="#0d9488"
                    opacity={selectedMaritimeZone === 'territorial' ? 0.9 : 0.4}
                    className="cursor-pointer transition-all hover:opacity-80"
                    onClick={() => setSelectedMaritimeZone('territorial')}
                  />
                  <text
                    x="190"
                    y="155"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="cursor-pointer"
                    onClick={() => setSelectedMaritimeZone('territorial')}
                  >
                    {isArabic ? 'المياه الإقليمية (12 ميل)' : 'Territorial (12 NM)'}
                  </text>
                  <line x1="260" y1="110" x2="260" y2="240" stroke="#14b8a6" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="260" y="105" fill="#14b8a6" fontSize="9" textAnchor="middle">
                    {isArabic ? 'الحد السياسي البحري' : 'State Border'}
                  </text>

                  {/* Zone 3: Contiguous Zone (12 NM beyond territorial, up to 24 NM) */}
                  <rect
                    x="260"
                    y="130"
                    width="130"
                    height="50"
                    fill="#059669"
                    opacity={selectedMaritimeZone === 'contiguous' ? 0.9 : 0.4}
                    className="cursor-pointer transition-all hover:opacity-80"
                    onClick={() => setSelectedMaritimeZone('contiguous')}
                  />
                  <text
                    x="325"
                    y="155"
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="cursor-pointer"
                    onClick={() => setSelectedMaritimeZone('contiguous')}
                  >
                    {isArabic ? 'التكميلية (24 ميل)' : 'Contiguous (24 NM)'}
                  </text>
                  <line x1="390" y1="115" x2="390" y2="240" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Zone 4: EEZ (up to 200 NM) */}
                  <rect
                    x="390"
                    y="130"
                    width="230"
                    height="65"
                    fill="#0284c7"
                    opacity={selectedMaritimeZone === 'eez' ? 0.9 : 0.4}
                    className="cursor-pointer transition-all hover:opacity-80"
                    onClick={() => setSelectedMaritimeZone('eez')}
                  />
                  <text
                    x="505"
                    y="155"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="cursor-pointer"
                    onClick={() => setSelectedMaritimeZone('eez')}
                  >
                    {isArabic ? 'المنطقة الاقتصادية الخالصة (EEZ - 200 ميل)' : 'EEZ (Up to 200 NM)'}
                  </text>
                  <line x1="620" y1="110" x2="620" y2="240" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="620" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">
                    200 NM Outer EEZ
                  </text>

                  {/* Zone 5: High Seas (International Waters) */}
                  <rect
                    x="620"
                    y="130"
                    width="170"
                    height="85"
                    fill="#4338ca"
                    opacity={selectedMaritimeZone === 'highseas' ? 0.9 : 0.4}
                    className="cursor-pointer transition-all hover:opacity-80"
                    onClick={() => setSelectedMaritimeZone('highseas')}
                  />
                  <text
                    x="705"
                    y="160"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="cursor-pointer"
                    onClick={() => setSelectedMaritimeZone('highseas')}
                  >
                    {isArabic ? 'أعالي البحار (المياه الدولية)' : 'High Seas'}
                  </text>

                  {/* Seabed & Continental Shelf Profile */}
                  <path
                    d="M 120,170 Q 260,185 390,205 T 620,230 L 800,245 L 800,260 L 0,260 L 0,170 Z"
                    fill="#090d16"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  {/* Continental shelf marker */}
                  <rect
                    x="120"
                    y="185"
                    width="270"
                    height="20"
                    fill="#d97706"
                    opacity={selectedMaritimeZone === 'shelf' ? 0.9 : 0.3}
                    rx="3"
                    className="cursor-pointer transition-all hover:opacity-80"
                    onClick={() => setSelectedMaritimeZone('shelf')}
                  />
                  <text
                    x="255"
                    y="199"
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="cursor-pointer"
                    onClick={() => setSelectedMaritimeZone('shelf')}
                  >
                    {isArabic ? 'الرصيف القاري (حتى عمق 200 متر)' : 'Continental Shelf (< 200m depth)'}
                  </text>
                </svg>
              </div>

              {/* Zone Selector Buttons */}
              <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-slate-800">
                {Object.keys(maritimeZonesData).map((key) => {
                  const z = maritimeZonesData[key];
                  const isSelected = selectedMaritimeZone === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedMaritimeZone(key)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        isSelected
                          ? `${z.badgeColor} text-white border-transparent shadow-md shadow-teal-500/20`
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {isArabic ? z.titleAr : z.titleEn}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Zone Deep Dive Card */}
            {maritimeZonesData[selectedMaritimeZone] && (
              <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h4 className="text-xl font-black text-white">
                        {isArabic
                          ? maritimeZonesData[selectedMaritimeZone].titleAr
                          : maritimeZonesData[selectedMaritimeZone].titleEn}
                      </h4>
                      <p className="text-xs text-teal-400 mt-0.5">
                        {isArabic
                          ? maritimeZonesData[selectedMaritimeZone].extentAr
                          : maritimeZonesData[selectedMaritimeZone].extentEn}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                      {maritimeZonesData[selectedMaritimeZone].unclosRef}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs leading-relaxed text-slate-300">
                    <span className="font-bold text-white block mb-1">
                      {isArabic ? '⚖️ الوضع القانوني ومستوى السيادة:' : '⚖️ Sovereign Jurisdiction & Legal Status:'}
                    </span>
                    {isArabic
                      ? maritimeZonesData[selectedMaritimeZone].sovereigntyAr
                      : maritimeZonesData[selectedMaritimeZone].sovereigntyEn}
                  </div>

                  <div>
                    <h5 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">
                      {isArabic ? 'الحقوق والواجبات الجيوسياسية المقررة:' : 'Exclusive Geopolitical Rights & Duties:'}
                    </h5>
                    <div className="space-y-2">
                      {(isArabic
                        ? maritimeZonesData[selectedMaritimeZone].rightsAr
                        : maritimeZonesData[selectedMaritimeZone].rightsEn
                      ).map((right, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span className="text-slate-300">{right}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Egypt Geopolitical Case Study */}
                <div className="lg:col-span-4 p-5 rounded-2xl bg-teal-950/20 border border-teal-800/30 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-teal-400 text-xs font-black uppercase tracking-wider">
                      <Globe className="w-4 h-4" />
                      <span>{isArabic ? 'التطبيق على الدولة المصرية 🇪🇬' : 'Egypt Case Application 🇪🇬'}</span>
                    </div>
                    <h5 className="text-sm font-bold text-white mt-2">
                      {isArabic
                        ? 'ترسيم الحدود البحرية المصرية وحقل ظهر'
                        : 'Egyptian Maritime Delimitation & Zohr Field'}
                    </h5>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {isArabic
                        ? 'قامت مصر بترسيم حدود منطقتها الاقتصادية الخالصة (EEZ) مع قبرص واليونان في شرق المتوسط، مما أتاح للشركات العالمية استكشاف وإنتاج الغاز من حقل ظهر العملاق في المياه العميقة دون أي نزاع قانوني دولي.'
                        : 'Egypt negotiated formal EEZ delimitation treaties with Cyprus and Greece in the East Mediterranean, legally safeguarding offshore hydrocarbon exploration, culminating in the giant deepwater Zohr natural gas field discovery.'}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                    <span className="font-bold text-amber-400 block mb-0.5">
                      {isArabic ? '💡 معلومة امتحانية مؤكدة:' : '💡 Official Exam Essential:'}
                    </span>
                    {isArabic
                      ? 'الحد السياسي البحري للدولة يقع عند نهاية المياه الإقليمية (وليس المياه الداخلية أو الاقتصادية)، بينما المياه التكميلية والاقتصادية تقع خارج الحد السياسي للدولة وتتمتع فيها بحقوق رقابية واقتصادية.'
                      : 'The official maritime international border of any state lies at the outer boundary of its Territorial Sea (12 NM), not its EEZ.'}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: Dispute Hotspots & Geopolitical Flashpoints       */}
        {/* ========================================================= */}
        {activeMode === 'hotspots' && (
          <div className="space-y-6">
            {/* Hotspot Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {Object.keys(hotspotsData).map((hKey) => {
                const item = hotspotsData[hKey];
                const isSelected = selectedHotspot === hKey;
                return (
                  <button
                    key={hKey}
                    type="button"
                    onClick={() => setSelectedHotspot(hKey)}
                    className={`p-3.5 rounded-2xl text-start transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/10 border-teal-500 text-teal-300 shadow-lg shadow-teal-500/10'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] text-slate-500 font-mono uppercase">
                        {isArabic ? item.regionAr : item.regionEn}
                      </span>
                      <Flame className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                    </div>
                    <div className="text-xs font-black text-white truncate">
                      {isArabic ? item.titleAr : item.titleEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Hotspot Analytical dossier */}
            {hotspotsData[selectedHotspot] && (
              <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-white">
                        {isArabic ? hotspotsData[selectedHotspot].titleAr : hotspotsData[selectedHotspot].titleEn}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {isArabic ? hotspotsData[selectedHotspot].partiesAr : hotspotsData[selectedHotspot].partiesEn}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {isArabic ? hotspotsData[selectedHotspot].coreCauseAr : hotspotsData[selectedHotspot].coreCauseEn}
                    </p>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-teal-300 shrink-0">
                    <span className="text-slate-500 font-bold block">{isArabic ? 'الحالة الراهنة:' : 'Status:'}</span>
                    <span>
                      {isArabic
                        ? hotspotsData[selectedHotspot].settlementStatusAr
                        : hotspotsData[selectedHotspot].settlementStatusEn}
                    </span>
                  </div>
                </div>

                {/* Regional High-Res Hotspot Map */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 px-1">
                    <span className="font-bold flex items-center gap-1.5 text-teal-400">
                      <Compass className="w-4 h-4" />
                      <span>{isArabic ? 'الخريطة الجيوسياسية الإقليمية لبؤرة النزاع' : 'Regional Geopolitical Conflict Map'}</span>
                    </span>
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                      {isArabic ? 'إسقاط جغرافي دقيق لخطوط الهدنة والتحكيم' : 'Arbitration & Boundary Demarcation Layer'}
                    </span>
                  </div>
                  <HighResHotspotMap hotspotKey={selectedHotspot} lang={lang} theme={theme} />
                </div>

                {/* Key Points & Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 space-y-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-teal-400" />
                      <span>{isArabic ? 'تفاصيل القضية وتحليل نواتج التعلم الوزارية:' : 'Curriculum Blueprint & Historical Sequence:'}</span>
                    </h4>

                    <div className="space-y-2.5">
                      {(isArabic
                        ? hotspotsData[selectedHotspot].curriculumDetailsAr
                        : hotspotsData[selectedHotspot].curriculumDetailsEn
                      ).map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 text-xs leading-relaxed"
                        >
                          <div className="w-5 h-5 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                            {dIdx + 1}
                          </div>
                          <span className="text-slate-200">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategic Importance Card */}
                  <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Compass className="w-4 h-4" />
                        <span>{isArabic ? 'الأهمية الجيواستراتيجية' : 'Geostrategic Value'}</span>
                      </span>
                      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                        {isArabic
                          ? hotspotsData[selectedHotspot].strategicImportanceAr
                          : hotspotsData[selectedHotspot].strategicImportanceEn}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                      <span className="font-bold text-teal-400 block mb-1">
                        {isArabic ? '🎯 مهارات التفكير العليا (HOTS):' : '🎯 HOTS Analytical Takeaway:'}
                      </span>
                      {selectedHotspot === 'taba' &&
                        (isArabic
                          ? 'تثبت طابا أن الحدود السياسية التي رسمها الاستعمار يمكن الدفاع عنها بالوثائق والخرائط والتحكيم السلمي دون التفريط في حبة رمل واحدة.'
                          : 'Taba demonstrates that colonial boundary delineations can be peacefully and definitively resolved through rigorous archival cartography and international arbitration.')}
                      {selectedHotspot === 'libya_tunisia' &&
                        (isArabic
                          ? 'توضح قضية الجرف القاري بين ليبيا وتونس أثر الجزر الساحلية (جربة وقرقنة) في تغيير مسار الحدود البحرية الدولية.'
                          : 'Highlights how coastal archipelagic features (islands) alter judicial maritime delimitations.')}
                      {selectedHotspot === 'ceuta_melilla' &&
                        (isArabic
                          ? 'تمثل سبتة ومليلية استعماراً بحرياً أوروبياً قديماً داخل القارة الأفريقية لم يسقط بالتقادم برغم محاولات التهويد الثقافي.'
                          : 'Exemplifies persistent European colonial exclaves in Africa unextinguished by temporal prescription.')}
                      {selectedHotspot === 'kashmir' &&
                        (isArabic
                          ? 'نزاع كشمير يجسد إخفاق تقسيم المستعمر على أسس عرقية ودينية وخطورة تجاهل حق الشعوب في تقرير المصير.'
                          : 'Exposes how flawed colonial religious partition lines trigger multi-generational nuclear standoffs.')}
                      {selectedHotspot === 'pastoral_tribes' &&
                        (isArabic
                          ? 'مشكلات الرعاة تؤكد أن الحدود السياسية المصطنعة تعجز عن إيقاف حركة البيئة والمناخ وتتطلب تكاملاً إقليمياً.'
                          : 'Proves artificial political borders cannot arrest ecological transhumance without multilateral mobility treaties.')}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: Economic Blocs & Alliances                        */}
        {/* ========================================================= */}
        {activeMode === 'blocs' && (
          <div className="space-y-6">
            {/* Bloc Selection Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {Object.keys(blocsData).map((bKey) => {
                const bloc = blocsData[bKey];
                const isSelected = selectedBloc === bKey;
                return (
                  <button
                    key={bKey}
                    type="button"
                    onClick={() => setSelectedBloc(bKey)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-teal-500/20 border-teal-500 text-teal-300 shadow-md shadow-teal-500/10'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{isArabic ? bloc.nameAr : bloc.nameEn}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Bloc Deep Dive */}
            {blocsData[selectedBloc] && (
              <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {isArabic ? blocsData[selectedBloc].nameAr : blocsData[selectedBloc].nameEn}
                    </h3>
                    <p className="text-xs text-teal-400 mt-0.5">
                      {isArabic ? blocsData[selectedBloc].membersAr : blocsData[selectedBloc].membersEn}
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="text-slate-500 block font-bold">{isArabic ? 'المقر الدائم:' : 'Headquarters:'}</span>
                    <span className="text-white font-semibold">
                      {isArabic ? blocsData[selectedBloc].headquartersAr : blocsData[selectedBloc].headquartersEn}
                    </span>
                  </div>
                </div>

                {/* High-Res Cartographic Bloc Map */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 px-1">
                    <span className="font-bold flex items-center gap-1.5 text-teal-400">
                      <Globe className="w-4 h-4" />
                      <span>{isArabic ? 'الخريطة الجغرافية للتكتل / الحلف والدول الأعضاء' : 'Geographic Bloc & Membership Scope Map'}</span>
                    </span>
                    <span className="text-[11px] font-mono text-teal-400 bg-teal-950/40 px-2.5 py-0.5 rounded-full border border-teal-800/40">
                      {isArabic ? 'نطاق السيادة والتكامل الإقليمي' : 'Sovereign Scope & Regional Integration'}
                    </span>
                  </div>
                  <HighResBlocMap blocKey={selectedBloc} lang={lang} theme={theme} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Stages Column */}
                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-teal-400" />
                      <span>{isArabic ? 'مراحل التكوين والاندماج التدريجي:' : 'Formation Stages & Integration Level:'}</span>
                    </h4>

                    <div className="space-y-2">
                      {(isArabic ? blocsData[selectedBloc].stagesAr : blocsData[selectedBloc].stagesEn).map(
                        (st, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-start gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs leading-relaxed"
                          >
                            <div className="w-5 h-5 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              {sIdx + 1}
                            </div>
                            <span className="text-slate-200">{st}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Strengths & Egypt Connection Column */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                      <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'المقومات الجيوسياسية ومصادر القوة:' : 'Geopolitical Pillars & Leverage:'}</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {(isArabic ? blocsData[selectedBloc].strengthsAr : blocsData[selectedBloc].strengthsEn).map(
                          (str, strIdx) => (
                            <li key={strIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{str}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {blocsData[selectedBloc].egyptLinkEn && (
                      <div className="p-4 rounded-2xl bg-teal-950/20 border border-teal-800/40 text-xs">
                        <div className="font-bold text-teal-300 flex items-center gap-1.5 mb-1">
                          <Globe className="w-3.5 h-3.5 text-teal-400" />
                          <span>{isArabic ? 'علاقة مصر واستفادتها الاقتصادية 🇪🇬:' : 'Egypt’s Strategic Benefits 🇪🇬:'}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-[11px]">
                          {isArabic
                            ? blocsData[selectedBloc].egyptLinkAr
                            : blocsData[selectedBloc].egyptLinkEn}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: State Comprehensive Power Balance Matrix           */}
        {/* ========================================================= */}
        {activeMode === 'geopower' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Sliders Input Column */}
              <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-950/50 border border-slate-800/80 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-white flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-teal-400" />
                    <span>{isArabic ? 'محددات قوة الدولة (نموذج أرسطو الحديث)' : 'State Comprehensive Power Weights'}</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      setGeoFactors({
                        morphology: 85,
                        demographics: 70,
                        economics: 75,
                        military: 80,
                        organization: 78,
                      })
                    }
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{isArabic ? 'إعادة ضبط' : 'Reset'}</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      key: 'morphology' as const,
                      labelEn: 'Physical & Geographical Morphology (الموقع، المساحة، التضاريس، والمناخ)',
                      labelAr: 'المقومات الطبيعية: الموقع الجغرافي، المساحة، التضاريس، والمناخ',
                      color: 'accent-teal-500',
                    },
                    {
                      key: 'demographics' as const,
                      labelEn: 'Demographic & Human Capital (السكان، التكنولوجيا، والمهارات البشرية)',
                      labelAr: 'المقومات البشرية: حجم السكان، التعليم، التكنولوجيا، والعقول البشرية',
                      color: 'accent-emerald-500',
                    },
                    {
                      key: 'economics' as const,
                      labelEn: 'Economic Resilience (الإنتاج الزراعي، المعادن، ومصادر الطاقة)',
                      labelAr: 'المقومات الاقتصادية: الأمن الغذائي، الموارد المعدنية، والطاقة (البترول والغاز)',
                      color: 'accent-cyan-500',
                    },
                    {
                      key: 'military' as const,
                      labelEn: 'Military Strength (الجيش، المعدات، الإنفاق، والعقيدة القتالية)',
                      labelAr: 'القوة العسكرية: القوات المسلحة، العتاد الحربي، الإنفاق، والعقيدة القتالية',
                      color: 'accent-amber-500',
                    },
                    {
                      key: 'organization' as const,
                      labelEn: 'Political & Organizational Stability (كفاءة الحكومة، الشفافية، والمؤسسات)',
                      labelAr: 'القوة التنظيمية والسياسية: استقرار الحكم، الشفافية، وكفاءة المؤسسات',
                      color: 'accent-indigo-500',
                    },
                  ].map((dim) => (
                    <div key={dim.key} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-300">{isArabic ? dim.labelAr : dim.labelEn}</span>
                        <span className="font-mono font-bold text-teal-400">{geoFactors[dim.key]}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={geoFactors[dim.key]}
                        onChange={(e) =>
                          setGeoFactors({
                            ...geoFactors,
                            [dim.key]: parseInt(e.target.value, 10),
                          })
                        }
                        className={`w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer ${dim.color}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Aggregated Output Score Card */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-950/50 border border-slate-800/80 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'مؤشر الوزن الجيوسياسي المركب' : 'Composite Geopolitical Index'}</span>
                  </span>

                  <div className="mt-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400">
                      {overallPowerScore}%
                    </div>
                    <div className={`text-sm font-black mt-2 ${powerRank.color}`}>
                      {isArabic ? powerRank.ar : powerRank.en}
                    </div>
                    <p className="text-[11px] text-slate-400 text-center mt-3 leading-relaxed">
                      {isArabic
                        ? 'تتحقق قوة الدولة من التفاعل والتوازن بين عناصرها وليس بمجرد ضخامة عدد السكان أو اتساع المساحة الجغرافية (نظرية أرسطو).'
                        : 'National power emanates from the balanced interplay of all components, not merely demographic size or spatial landmass (Aristotle’s Law).'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-teal-950/30 border border-teal-800/40 text-xs">
                  <div className="font-bold text-teal-300 mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>{isArabic ? 'خلاصة التحليل السياسي للقوة:' : 'Strategic Power Takeaway:'}</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {isArabic
                      ? 'اليابان دولة جبلية مجزأة محدودة الموارد المعدنية، لكنها تحولت إلى قوة عظمى بفضل العقول والتكنولوجيا (الوزن البشري). وفي المقابل، دول كبرى المساحة تفقد وزنها إن غاب التنظيم والتكنولوجيا.'
                      : 'Japan overcame rough mountainous terrain and scarce mineral reserves through elite human capital, innovation, and technology, becoming an economic juggernaut.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
