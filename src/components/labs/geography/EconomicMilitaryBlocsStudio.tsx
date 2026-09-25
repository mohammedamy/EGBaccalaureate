import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Maximize2,
  Sparkles,
  ShieldAlert,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  CheckCircle2,
  Building2,
  Coins,
  Globe2,
  Scale,
  Compass,
  Eye,
} from 'lucide-react';
import comesaMap from '../../../assets/geography/comesa_africa_map.jpg';
import euMap from '../../../assets/geography/european_union_map.jpg';
import natoMap from '../../../assets/geography/nato_transatlantic_map.jpg';
import gccMap from '../../../assets/geography/gcc_arabian_gulf_map.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export type BlocCategory = 'economic' | 'military';

export interface RegionalBloc {
  id: string;
  nameAr: string;
  nameEn: string;
  category: BlocCategory;
  categoryAr: string;
  categoryEn: string;
  satelliteMap: string;
  establishedYear: number;
  foundingTreatyAr: string;
  foundingTreatyEn: string;
  headquartersAr: string;
  headquartersEn: string;
  memberCount: number;
  currentStageAr: string;
  currentStageEn: string;
  strategicRoleAr: string;
  strategicRoleEn: string;
  egyptRoleAr: string;
  egyptRoleEn: string;
  keyFeaturesAr: string[];
  keyFeaturesEn: string[];
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

export interface IntegrationStage {
  stageNumber: number;
  titleAr: string;
  titleEn: string;
  definitionAr: string;
  definitionEn: string;
  mechanismsAr: string[];
  mechanismsEn: string[];
  realWorldExampleAr: string;
  realWorldExampleEn: string;
}

export const INTEGRATION_STAGES: IntegrationStage[] = [
  {
    stageNumber: 1,
    titleAr: 'المرحلة الأولى: منطقة التجارة الحرة (Free Trade Area)',
    titleEn: 'Stage 1: Free Trade Area (FTA)',
    definitionAr:
      'إلغاء وتفكيك كافة الحواجز الجمركية والقيود غير الجمركية (الحصص والرخص) على تدفق السلع الوطنية المنتجة بين الدول الأعضاء، مع احتفاظ كل دولة عضو بتعريفتها الجمركية الخاصة والمستقلة تجاه الدول غير الأعضاء خارج التكتل.',
    definitionEn:
      'Elimination of tariffs, customs duties, and import quotas on national goods traded among member states, while each member retains its sovereign external tariff schedules toward non-member countries.',
    mechanismsAr: [
      'تطبيق قواعد المنشأ الوطنية (Rules of Origin) للتأكد من نسبة المكون المحلي ومنع إعادة تصدير سلع الدول الثالثة.',
      'تخفيض الرسوم الجمركية البينية تدريجياً حتى الإلغاء الكامل.',
    ],
    mechanismsEn: [
      'Application of strict Rules of Origin to verify domestic value-added and prevent trade deflection.',
      'Progressive reduction and ultimate abolition of mutual customs tariffs.',
    ],
    realWorldExampleAr: 'اتفاقية التجارة الحرة لأمريكا الشمالية (USMCA / نافتا سابقاً)، ومنطقة التجارة الحرة العربية الكبرى (GAFTA).',
    realWorldExampleEn: 'North American Free Trade Agreement (USMCA/NAFTA), and Pan-Arab Free Trade Area (GAFTA).',
  },
  {
    stageNumber: 2,
    titleAr: 'المرحلة الثانية: الاتحاد الجمركي (Customs Union)',
    titleEn: 'Stage 2: Customs Union (CU)',
    definitionAr:
      'الاتفاق على وضع وتطبيق "تعريفة جمركية موحدة" (Common External Tariff - CET) تطبقها كافة الدول الأعضاء على جميع السلع والواردات القادمة من الدول غير الأعضاء خارج التكتل، مما يلغي الحاجة للتفتيش الجمركي في الحدود البينية.',
    definitionEn:
      'Harmonization of a unified Common External Tariff (CET) levied on all imports originating from non-member nations, eliminating internal border customs inspections for cleared goods.',
    mechanismsAr: [
      'توحيد السياسات التجارية الخارجية تجاه العالم الخارجي.',
      'توزيع الإيرادات الجمركية المحصلة عند المنافذ الخارجية وفق معادلة عادلة بين الأعضاء.',
    ],
    mechanismsEn: [
      'Unified commercial foreign trade policy towards outside trading partners.',
      'Equitable distribution formula for external customs revenues collected at entry ports.',
    ],
    realWorldExampleAr: 'الاتحاد الجمركي للاتحاد الأوروبي (1968)، والاتحاد الجمركي لدول مجلس التعاون الخليجي (2003).',
    realWorldExampleEn: 'European Economic Community Customs Union (1968), and GCC Customs Union (2003).',
  },
  {
    stageNumber: 3,
    titleAr: 'المرحلة الثالثة: السوق المشتركة (Common Market)',
    titleEn: 'Stage 3: Common Market (CM)',
    definitionAr:
      'تحرير كامل لحركة كافة عناصر الإنتاج الأربعة (حرية انتقال السلع، والخدمات، ورؤوس الأموال، وقوة العمل الوطنية) بين الدول الأعضاء دون أي قيود، مع منح مواطني الدول الأعضاء حقوق العمل والإقامة والتملك المتساوية.',
    definitionEn:
      'Complete liberalization of the Four Freedoms of economic factors: free movement of goods, services, capital, and labor, guaranteeing equal rights of employment, residency, and establishment.',
    mechanismsAr: [
      'إلغاء تصاريح العمل وتأشيرات الإقامة لمواطني التكتل.',
      'الاعتراف المتبادل بالشهادات المهنية والمؤهلات الأكاديمية والتراخيص الاستثمارية.',
    ],
    mechanismsEn: [
      'Abolition of work permits and visa barriers for citizens of member states.',
      'Mutual recognition of professional diplomas, academic degrees, and business licenses.',
    ],
    realWorldExampleAr: 'السوق الأوروبية المشتركة بموجب القانون الأوروبي الموحد (1993)، والسوق الخليجية المشتركة (2008).',
    realWorldExampleEn: 'European Single Market under Single European Act (1993), and GCC Common Market (2008).',
  },
  {
    stageNumber: 4,
    titleAr: 'المرحلة الرابعة: الوحدة الاقتصادية (Economic Union)',
    titleEn: 'Stage 4: Economic & Monetary Union (EMU)',
    definitionAr:
      'تنسيق وتوحيد السياسات الاقتصادية والمالية والنقدية الكلية، وإنشاء بنك مركزي مشترك يتولى إصدار "عملة نقدية موحدة" واستقرار أسعار الفائدة والصرف وإلغاء مخاطر تحويل العملات الوطنية.',
    definitionEn:
      'Comprehensive coordination and harmonization of macroeconomic, fiscal, and monetary policies, culminating in a single central bank issuing a unified single currency with unified monetary policy.',
    mechanismsAr: [
      'إصدار عملة موحدة مشتركة (مثل اليورو) وتأسيس بنك مركزي قاري (البنك المركزي الأوروبي بفرانكفورت).',
      'وضع معايير انضباط مالي صارمة لنسب عجز الموازنة (أقل من 3%) ونسبة الدين العام (أقل من 60%).',
    ],
    mechanismsEn: [
      'Creation of a single currency (Euro) and supranational central bank (European Central Bank).',
      'Enforcement of strict fiscal convergence rules (budget deficit <3% GDP, public debt <60% GDP).',
    ],
    realWorldExampleAr: 'منطقة اليورو (Eurozone) داخل الاتحاد الأوروبي وتطبيق اتفاقية ماستريخت (1999/2002).',
    realWorldExampleEn: 'Eurozone within the European Union established under the Maastricht Treaty (1999/2002).',
  },
  {
    stageNumber: 5,
    titleAr: 'المرحلة الخامسة: الاندماج الاقتصادي والسياسي الكامل (Complete Integration)',
    titleEn: 'Stage 5: Complete Economic & Political Integration',
    definitionAr:
      'أرقى وأعلى مراحل التكامل والتكتل الجغرافي؛ حيث تذوب السياسات الاقتصادية والسيادية الوطنية في كيان فيدرالي أو كونفدرالي فائق الوطنية (Supranational)، ببرلمان تشريعي موحد، وسياسة خارجية وأمنية ودفاعية مشتركة.',
    definitionEn:
      'The zenith of geopolitical integration: national sovereignty merges into a supranational confederate or federal framework, featuring a unified parliament, joint foreign policy, and common defense command.',
    mechanismsAr: [
      'برلمان موحد يصدر تشريعات ملزمة تعلو القوانين الوطنية (البرلمان الأوروبي بستراسبورغ).',
      'جنسية قارية موحدة، وسياسة دفاع وخارجية مشتركة، وإلغاء الحدود السياسية البينية (فضاء شنجن).',
    ],
    mechanismsEn: [
      'Supranational legislative parliament enacting directly applicable community directives.',
      'Unified citizenship, common defense apparatus, and total border eradication (Schengen Area).',
    ],
    realWorldExampleAr: 'الاتحاد الأوروبي بموجب معاهدة لشبونة (يمثل النموذج الأكثر تقدماً واقتراباً من هذه المرحلة عالمياً).',
    realWorldExampleEn: 'European Union under the Lisbon Treaty (the closest living paradigm to full integration).',
  },
];

export const REGIONAL_BLOCS: RegionalBloc[] = [
  {
    id: 'comesa',
    nameAr: 'تكتل الكوميسا (COMESA) - شرق وجنوب إفريقيا',
    nameEn: 'Common Market for Eastern and Southern Africa (COMESA)',
    category: 'economic',
    categoryAr: 'تكتل اقتصادي إقليمي رائد في إفريقيا',
    categoryEn: 'Premier African Regional Economic Community',
    satelliteMap: comesaMap,
    establishedYear: 1994,
    foundingTreatyAr: 'معاهدة لوساكا (بدأ كمنطقة تجارة تفضيلية PTA عام 1981 ثم تحول إلى كوميسا عام 1994)',
    foundingTreatyEn: 'Treaty of Lusaka (Evolved from Preferential Trade Area PTA established in 1981)',
    headquartersAr: 'لوساكا (عاصمة جمهورية زامبيا)',
    headquartersEn: 'Lusaka (Capital of Zambia)',
    memberCount: 21,
    currentStageAr: 'منطقة التجارة الحرة وتطبيق الاتحاد الجمركي تدريجياً',
    currentStageEn: 'Operational Free Trade Area progressing to Customs Union',
    strategicRoleAr:
      'يضم التكتل 21 دولة إفريقية تمتد من مصر شمالاً حتى زيمبابوي وسوازيلاند جنوباً بمساحة تبلغ 12 مليون كم² وسكان يتجاوزون 600 مليون نسمة؛ يهدف التكتل لتحقيق التنمية المشتركة وتفكيك الحواجز الجمركية وربط الموانئ الإفريقية بممرات لوجستية كبرى.',
    strategicRoleEn:
      'Encompassing 21 African member states spanning from Egypt in the north to Zimbabwe and Eswatini in the south across 12 million km² and over 600 million consumers. Aims at tariff-free intra-regional trade, infrastructural corridor linkage, and industrial integration.',
    egyptRoleAr:
      'انضمت مصر للكوميسا عام 1998 ووقعت اتفاقية التجارة الحرة عام 2000؛ وتعد مصر القوة الاقتصادية والصناعية الأكبر في التكتل، حيث تصدر لمصر سنوياً سلعاً صناعية وبتروكيماويات وأجهزة هندسية بمليارات الدولارات مع إعفاء جمركي بنسبة 100% بشرط توافر نسبة قيمة مضافة محلية (45%).',
    egyptRoleEn:
      'Egypt acceded to COMESA in 1998 and joined the FTA in 2000. Serving as the industrial heavyweight of the bloc, Egypt exports manufactured goods, petrochemicals, and processed foods tariff-free (with 45% local value-added rules of origin).',
    keyFeaturesAr: [
      'سوق استهلاكي استراتيجي ضخم يستوعب الصادرات الصناعية المصرية بلا رسوم جمركية.',
      'تأمين احتياجات مصر من المواد الخام الزراعية والمعدنية الإفريقية كالشاي والبن والنحاس والجلود.',
      'ربط مصر بعمقها الاستراتيجي الإفريقي عبر ممر القاهرة-كيب تاون البري ومشروع الممر الملاحي (فيكتوريا - المتوسط).',
    ],
    keyFeaturesEn: [
      'Expansive tariff-free market for Egyptian manufactured industrial goods.',
      'Secures critical raw materials: copper, timber, tea, coffee, livestock, and unrefined minerals.',
      'Anchors Egypt’s African geopolitical depth via the Cairo-Cape Town Highway and VICMED waterway.',
    ],
    hotspots: [
      {
        id: 'lusaka_hq',
        xPct: 54.0,
        yPct: 68.0,
        titleAr: 'مقر سكرتارية الكوميسا - لوساكا (زامبيا)',
        titleEn: 'COMESA Secretariat HQ - Lusaka (Zambia)',
        descAr: 'المركز الإداري والتنفيذي للتكتل لإدارة قواعد المنشأ ومحكمة عدل الكوميسا وبنك التجارة والتنمية.',
        descEn: 'Administrative nerve center administering Rules of Origin, COMESA Court, and Trade & Development Bank.',
      },
      {
        id: 'cairo_gateway',
        xPct: 56.0,
        yPct: 22.0,
        titleAr: 'القاهرة - القاطرة الصناعية وبوابة الشمال',
        titleEn: 'Cairo - Northern Industrial Locomotive',
        descAr: 'المحور التصديري الأكبر في الكوميسا الذي يربط السوق الإفريقية المشتركة بالبحر المتوسط وأوروبا.',
        descEn: 'The bloc’s largest industrial exporter connecting eastern African markets to Mediterranean Europe.',
      },
    ],
  },
  {
    id: 'eu',
    nameAr: 'الاتحاد الأوروبي (European Union - EU)',
    nameEn: 'European Union (EU)',
    category: 'economic',
    categoryAr: 'النموذج الأرقى عالمياً في التكتلات الاقتصادية',
    categoryEn: 'Global Benchmark of Advanced Supranational Integration',
    satelliteMap: euMap,
    establishedYear: 1993,
    foundingTreatyAr: 'معاهدة ماستريخت 1992 (انطلق من معاهدة باريس للفحم والصلب 1951 ومعاهدة روما 1957)',
    foundingTreatyEn: 'Maastricht Treaty 1992 (Evolving from ECSC Paris 1951 & EEC Rome Treaty 1957)',
    headquartersAr: 'بروكسل (بلجيكا) - المفوضية والمجلس الأوروبي',
    headquartersEn: 'Brussels (Belgium) - European Commission & Council',
    memberCount: 27,
    currentStageAr: 'الوحدة الاقتصادية والنقدية والاقتراب من الاندماج الكامل',
    currentStageEn: 'Economic & Monetary Union approaching Full Supranational Integration',
    strategicRoleAr:
      'يضم 27 دولة أوروبية متقدمة تشكل كتلة اقتصادية جبارة تستحوذ على أكثر من 16% من حجم التجارة العالمية؛ ألغى الاتحاد الحدود بين 29 دولة عبر اتفاقية شنجن واعتمد اليورو كعملة رسمية لـ 20 دولة، مع التزامه بشروط كوبنهاجن الصارمة (شروط سياسية واقتصادية وتشريعية).',
    strategicRoleEn:
      'A superpower economic confederation of 27 nations accounting for over 16% of global trade. Enforces borderless travel across Schengen zone, common currency (Euro) in 20 member states, and rigorous Copenhagen Criteria (political democracy, market economy, legislative body).',
    egyptRoleAr:
      'الاتحاد الأوروبي هو الشريك التجاري والاستثماري الأول لمصر؛ ترتبط مصر بالاتحاد باتفاقية المشاركة المصرية الأوروبية (2004) لإنشاء منطقة تجارة حرة وتحديث الصناعة ونقل التكنولوجيا.',
    egyptRoleEn:
      'The EU is Egypt’s foremost trading partner and source of FDI, governed by the 2004 EU-Egypt Association Agreement fostering industrial modernization and technology transfer.',
    keyFeaturesAr: [
      'المفوضية الأوروبية ببروكسل كجهاز تنفيذي مستقل يقترح القوانين والموازنة المشتركة.',
      'البرلمان الأوروبي المنتخب مباشرة من شعوب القارة ومقره ستراسبورغ وفرنسا.',
      'البنك المركزي الأوروبي بفرانكفورت كمسؤول أوحد عن السياسة النقدية لمنطقة اليورو.',
    ],
    keyFeaturesEn: [
      'European Commission in Brussels acting as independent executive proposing legislation.',
      'Directly elected European Parliament in Strasbourg representing European citizenry.',
      'European Central Bank in Frankfurt governing monetary policy and interest rates for the Eurozone.',
    ],
    hotspots: [
      {
        id: 'brussels_eu',
        xPct: 45.0,
        yPct: 42.0,
        titleAr: 'بروكسل - العاصمة السياسية للاتحاد الأوروبي',
        titleEn: 'Brussels - De Facto Capital of the EU',
        descAr: 'مقر المفوضية الأوروبية والمجلس الأوروبي ومقر صياغة القرارات السيادية القارية.',
        descEn: 'Host of the European Commission, Council of the EU, and architect of continental regulations.',
      },
      {
        id: 'frankfurt_ecb',
        xPct: 52.0,
        yPct: 46.0,
        titleAr: 'فرانكفورت - المقر المالي للبنك المركزي الأوروبي',
        titleEn: 'Frankfurt - European Central Bank Tower',
        descAr: 'القلب المالي لمنطقة اليورو المشرف على استقرار العملة الموحدة والاحتياطيات النقدية.',
        descEn: 'Financial command center issuing the Euro and steering Eurozone interest rate decisions.',
      },
    ],
  },
  {
    id: 'nato',
    nameAr: 'حلف شمال الأطلسي (NATO)',
    nameEn: 'North Atlantic Treaty Organization (NATO)',
    category: 'military',
    categoryAr: 'الحلف العسكري الأقوى والأضخم في التاريخ المعاصر',
    categoryEn: 'Premier Transatlantic Collective Defense Alliance',
    satelliteMap: natoMap,
    establishedYear: 1949,
    foundingTreatyAr: 'معاهدة واشنطن (4 أبريل 1949)',
    foundingTreatyEn: 'North Atlantic Treaty / Washington Treaty (April 4, 1949)',
    headquartersAr: 'بروكسل (بلجيكا) - المقر السياسي، ومونس (SHAPE) - القيادة العسكرية العليا',
    headquartersEn: 'Brussels (Political HQ) & Mons (SHAPE Military Command, Belgium)',
    memberCount: 32,
    currentStageAr: 'حلف عسكري جماعي دفاعي وردع استراتيجي نووي وتقليدي',
    currentStageEn: 'Integrated Military Alliance & Transatlantic Strategic Deterrence',
    strategicRoleAr:
      'تأسس الحلف لمواجهة التوسع السوفيتي وحماية أمن أوروبا الغربية وأمريكا الشمالية؛ يرتكز على "المادة الخامسة" للدفاع المشترك التي تنص على أن أي هجوم مسلح ضد أي دولة عضو يعد هجوماً على سائر الأعضاء. توسع الحلف شرقاً بعد سقوط حلف وارسو وتفكك الاتحاد السوفيتي عام 1991.',
    strategicRoleEn:
      'Formed to counter Soviet expansion and safeguard democratic transatlantic security. Anchored by "Article 5" collective defense principle: an armed assault against one ally is treated as an assault on all. Expanded eastward into Central Europe following Warsaw Pact collapse in 1991.',
    egyptRoleAr:
      'ترتبط مصر مع حلف الناتو بشراكة استراتيجية عسكرية عبر مبادرة "الحوار المتوسطي" (Mediterranean Dialogue) منذ 1994 لتعزيز التعاون في مكافحة الإرهاب، وأمن الملاحة البحرية، وإزالة الألغام من الصحراء الغربية.',
    egyptRoleEn:
      'Egypt participates in NATO’s Mediterranean Dialogue since 1994, cooperating in maritime security, counter-terrorism, disaster relief, and de-mining legacy munitions in the Western Desert.',
    keyFeaturesAr: [
      'المادة الخامسة: الالتزام الصارم بالدفاع المشترك تم تفعيله رسمياً مرة واحدة في التاريخ بعد أحداث 11 سبتمبر 2001.',
      'تفكك الخصم التاريخي (حلف وارسو) عام 1991 بينما استمر الناتو وتوسع ليشمل 32 دولة (بما فيها فنلندا والسويد).',
      'قيادة القوات المتحالفة في أوروبا (SHAPE) لتنسيق الجيوش والأسلحة الاستراتيجية المشتركة.',
    ],
    keyFeaturesEn: [
      'Article 5 invocation: Historic collective defense enacted once after September 11, 2001.',
      'Dissolution of Warsaw Pact in 1991 solidified NATO expansion to 32 sovereign democracies.',
      'Supreme Headquarters Allied Powers Europe (SHAPE) orchestrating joint operational command.',
    ],
    hotspots: [
      {
        id: 'nato_shape',
        xPct: 44.0,
        yPct: 44.0,
        titleAr: 'القيادة العسكرية العليا للناتو (SHAPE) - مونس',
        titleEn: 'SHAPE Supreme Military HQ - Mons (Belgium)',
        descAr: 'غرفة العمليات المركزية لإدارة الخطط الدفاعية والانتشار العملياتي والردع النووي للحلف.',
        descEn: 'Strategic operations hub commanding Allied land, air, cyber, and naval force postures.',
      },
    ],
  },
  {
    id: 'gcc',
    nameAr: 'مجلس التعاون لدول الخليج العربية (GCC)',
    nameEn: 'Gulf Cooperation Council (GCC)',
    category: 'economic',
    categoryAr: 'تكتل عربي متجانس سياسياً واقتصادياً وثقافياً',
    categoryEn: 'Homogeneous Arab Geopolitical & Economic Bloc',
    satelliteMap: gccMap,
    establishedYear: 1981,
    foundingTreatyAr: 'ميثاق أبوظبي (25 مايو 1981)',
    foundingTreatyEn: 'Abu Dhabi Charter (May 25, 1981)',
    headquartersAr: 'الرياض (المملكة العربية السعودية)',
    headquartersEn: 'Riyadh (Kingdom of Saudi Arabia)',
    memberCount: 6,
    currentStageAr: 'اتحاد جمركي وسوق مشتركة مع درع الجزيرة العسكري',
    currentStageEn: 'Operational Customs Union & Common Market with Peninsula Shield Defense',
    strategicRoleAr:
      'يضم 6 دول عربية خليجية (السعودية، الإمارات، الكويت، قطر، البحرين، عمان) تتمتع بأعلى درجات التجانس الثقافي والديني واللغوي والجغرافي؛ تحتضن دول المجلس أكثر من 40% من احتياطيات النفط العالمية ونحو ربع احتياطي الغاز الطبيعي وتتحكم في مضيق هرمز الاستراتيجي.',
    strategicRoleEn:
      'Comprising 6 Arabian Gulf monarchies characterized by deep linguistic, religious, and socio-cultural homogeneity. Controls >40% of proven global crude oil reserves, extensive natural gas fields, and commands the vital Strait of Hormuz chokepoint.',
    egyptRoleAr:
      'ترتبط مصر بدول مجلس التعاون بعلاقات أمن قومي وتكامل اقتصادي واستثماري عضوي ("أمن الخليج خط أحمر وجزء لا يتجزأ من أمن مصر القومي")، بالإضافة لمليارات الدولارات من الاستثمارات الخليجية وملايين العمالة المصرية في الخليج.',
    egyptRoleEn:
      'Egypt considers Arabian Gulf stability a fundamental red line of Egyptian national security, bonded by billions in development funding, joint military exercises, and millions of Egyptian expatriates.',
    keyFeaturesAr: [
      'التجانس السكاني والجغرافي الكامل؛ اتصال أرضي متصل، لغة عربية، دين إسلامي، وتاريخ مشترك.',
      'تأسيس قوة عسكرية دفاعية مشتركة باسم "قوات درع الجزيرة" عام 1982 ومقرها حفر الباطن.',
      'إنجاز الاتحاد الجمركي الخليجي (2003) وإطلاق السوق الخليجية المشتركة (2008).',
    ],
    keyFeaturesEn: [
      'Unmatched cultural and geographic homogeneity: contiguous landmass, Arabic language, and Islam.',
      'Joint collective military deterrence: Peninsula Shield Force established in 1982.',
      'Milestones: Unified Customs Union (2003) and Gulf Single Common Market (2008).',
    ],
    hotspots: [
      {
        id: 'riyadh_gcc',
        xPct: 45.0,
        yPct: 48.0,
        titleAr: 'الرياض - الأمانة العامة لمجلس التعاون الخليجي',
        titleEn: 'Riyadh - GCC General Secretariat HQ',
        descAr: 'المركز السياسي والدبلوماسي الموجه للقمم الخليجية السنوية وتوحيد التشريعات الاقتصادية.',
        descEn: 'Diplomatic headquarters hosting ministerial councils and steering unified economic integration.',
      },
      {
        id: 'hormuz_strait',
        xPct: 78.0,
        yPct: 35.0,
        titleAr: 'مضيق هرمز - شريان الطاقة العالمي',
        titleEn: 'Strait of Hormuz - Global Hydrocarbon Artery',
        descAr: 'الممر المائي الاستراتيجي الذي يعبر منه نحو 20% من إمدادات البترول العالمي يومياً.',
        descEn: 'The critical maritime chokepoint funneling 20% of world petroleum consumption daily.',
      },
    ],
  },
];

export const EconomicMilitaryBlocsStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedBlocId, setSelectedBlocId] = useState<string>('comesa');
  const [activeHotspotId, setActiveHotspotId] = useState<string>('lusaka_hq');
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const selectedBloc = useMemo(() => {
    return (
      REGIONAL_BLOCS.find((b) => b.id === selectedBlocId) || REGIONAL_BLOCS[0]
    );
  }, [selectedBlocId]);

  const activeHotspot = useMemo(() => {
    return (
      selectedBloc.hotspots.find((h) => h.id === activeHotspotId) ||
      selectedBloc.hotspots[0]
    );
  }, [selectedBloc, activeHotspotId]);

  const activeStage = INTEGRATION_STAGES[currentStageIndex];

  const handleBlocChange = (id: string) => {
    setSelectedBlocId(id);
    const bloc = REGIONAL_BLOCS.find((b) => b.id === id);
    if (bloc) {
      setActiveHotspotId(bloc.hotspots[0]?.id || '');
    }
  };

  const handleOpenModal = () => {
    setModalData({
      imageUrl: selectedBloc.satelliteMap,
      titleAr: `خريطة الأقمار الصناعية 4K — ${selectedBloc.nameAr}`,
      titleEn: `4K Satellite Cartography — ${selectedBloc.nameEn}`,
      subtitleAr: `${selectedBloc.categoryAr} | ${selectedBloc.memberCount} دولة عضواً | تأسس عام ${selectedBloc.establishedYear}`,
      subtitleEn: `${selectedBloc.categoryEn} | ${selectedBloc.memberCount} Member States | Founded ${selectedBloc.establishedYear}`,
      descriptionAr: `${selectedBloc.strategicRoleAr} | المقر الدائم: ${selectedBloc.headquartersAr} | المرحلة الراهنة: ${selectedBloc.currentStageAr}. دور مصر: ${selectedBloc.egyptRoleAr}`,
      descriptionEn: `${selectedBloc.strategicRoleEn} | Permanent HQ: ${selectedBloc.headquartersEn} | Current Stage: ${selectedBloc.currentStageEn}. Egypt’s Role: ${selectedBloc.egyptRoleEn}`,
      locationAr: selectedBloc.headquartersAr,
      locationEn: selectedBloc.headquartersEn,
      dateOrEraAr: `تأسس عام ${selectedBloc.establishedYear} ميلادية`,
      dateOrEraEn: `Established ${selectedBloc.establishedYear} CE`,
    });
  };

  // Theme styles
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
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {isArabic
                ? 'مختبر التكتلات الاقتصادية والأحلاف العسكرية 4K'
                : 'Economic Blocs & Military Alliances Studio'}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
              COMESA & EU Deep Dive
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
            <TrendingUp className="w-7 h-7 text-blue-400" />
            {isArabic
              ? 'مختبر التكتلات الاقتصادية والأحلاف العسكرية (Geopolitical Blocs)'
              : 'Economic Integration Blocs & Transatlantic Alliances'}
          </h2>
          <p
            className={`mt-1 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
          >
            {isArabic
              ? 'استكشاف الأقمار الصناعية 4K لتكتلات الكوميسا والاتحاد الأوروبي ومجلس التعاون الخليجي وحلف الناتو، مع العارض التفاعلي لمراحل التكامل الاقتصادي الخمس.'
              : 'Interactive 4K satellite study of COMESA, EU, GCC, and NATO with a step-by-step 5-Stage Economic Integration Stepper.'}
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-blue-500/20 self-start md:self-auto cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          {isArabic ? 'استعراض الخريطة 4K' : 'View Full 4K Map'}
        </button>
      </div>

      {/* Bloc Selector Cards */}
      <div className="my-6">
        <label
          className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
        >
          {isArabic
            ? 'اختر التكتل أو الحلف المدروس بالمنهج:'
            : 'Select Geopolitical Bloc / Alliance:'}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {REGIONAL_BLOCS.map((b) => {
            const isSelected = b.id === selectedBlocId;
            return (
              <button
                key={b.id}
                onClick={() => handleBlocChange(b.id)}
                className={`p-3 rounded-xl border text-right transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-500/30 scale-[1.02]'
                    : isLight
                      ? 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                      : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/60 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/30 font-bold">
                    {b.establishedYear}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      b.category === 'military'
                        ? 'bg-red-500/30 text-red-200 border border-red-400/40'
                        : 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40'
                    }`}
                  >
                    {isArabic ? b.categoryAr.split(' ')[0] : b.category}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold truncate">
                    {isArabic ? b.nameAr : b.nameEn}
                  </h4>
                  <span className="text-[11px] opacity-80 block truncate">
                    {isArabic ? b.headquartersAr : b.headquartersEn}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Interactive Satellite Canvas + Strategic Profile (Top) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 4K Satellite Canvas with Dynamic Hotspots (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-black aspect-[4/3] group shadow-inner">
            <img
              src={selectedBloc.satelliteMap}
              alt={selectedBloc.nameEn}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

            {/* Top Bar on Map */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 text-blue-300 backdrop-blur-md border border-blue-500/40 flex items-center gap-1.5 shadow">
                <Compass className="w-3.5 h-3.5 text-blue-400 animate-spin-slow" />
                {isArabic ? selectedBloc.nameAr : selectedBloc.nameEn}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/70 text-slate-200 backdrop-blur-md border border-slate-700">
                {selectedBloc.memberCount} {isArabic ? 'دولة عضواً' : 'Members'}
              </span>
            </div>

            {/* Hotspots Pin Overlay */}
            {selectedBloc.hotspots.map((h) => {
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
                        isActive ? 'bg-amber-400' : 'bg-blue-400'
                      }`}
                    />
                    <div
                      className={`relative w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 transition-all ${
                        isActive
                          ? 'bg-amber-500 border-white text-black scale-125'
                          : 'bg-blue-600 border-white text-white hover:scale-110'
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
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-slate-700 text-white text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-blue-400 block">
                  {isArabic
                    ? selectedBloc.categoryAr
                    : selectedBloc.categoryEn}
                </span>
                <span className="text-slate-300 text-[11px]">
                  {isArabic
                    ? selectedBloc.headquartersAr
                    : selectedBloc.headquartersEn}
                </span>
              </div>
              <button
                onClick={handleOpenModal}
                className="px-3 py-1.5 rounded-lg bg-blue-600/80 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
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
              <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold text-sm">
                <Globe2 className="w-4 h-4 text-blue-400" />
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

        {/* Right: Geostrategic Profile & Egypt's National Role (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Strategic Overview Card */}
          <div className={`p-4 rounded-xl border ${innerCardBg}`}>
            <h3 className="text-base font-bold flex items-center gap-2 mb-2 text-blue-400">
              <Building2 className="w-4 h-4" />
              {isArabic
                ? 'الدور الجيوسياسي والصفات الهيكلية'
                : 'Geopolitical Mandate & Structural Architecture'}
            </h3>
            <p
              className={`text-xs leading-relaxed mb-3.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}
            >
              {isArabic
                ? selectedBloc.strategicRoleAr
                : selectedBloc.strategicRoleEn}
            </p>

            {/* Key Features Bullet List */}
            <div className="space-y-1.5 mb-3.5">
              {(isArabic
                ? selectedBloc.keyFeaturesAr
                : selectedBloc.keyFeaturesEn
              ).map((feat, idx) => (
                <div
                  key={idx}
                  className={`text-[11px] leading-snug flex items-start gap-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
                >
                  <ChevronRight className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Egypt's Geostrategic Engagement Box */}
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
              <span className="font-bold flex items-center gap-1.5 mb-1 text-amber-400">
                <Scale className="w-3.5 h-3.5" />
                {isArabic
                  ? 'موقع ومكاسب جمهورية مصر العربية:'
                  : 'Egypt’s Strategic Engagement & Dividends:'}
              </span>
              <p
                className={`text-[11px] leading-relaxed ${isLight ? 'text-slate-800' : 'text-amber-100/90'}`}
              >
                {isArabic
                  ? selectedBloc.egyptRoleAr
                  : selectedBloc.egyptRoleEn}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: 5-Stage Interactive Economic Integration Stepper */}
      <div className="mt-8 pt-6 border-t border-slate-700/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              {isArabic
                ? 'المنهج الدراسي - الوحدة الثالثة'
                : 'Curriculum Core - Unit 3'}
            </span>
            <h3 className="text-xl font-extrabold flex items-center gap-2">
              <Coins className="w-5 h-5 text-emerald-400" />
              {isArabic
                ? 'المراحل الخمس للتكامل والاندماج الاقتصادي'
                : 'The 5 Sequential Stages of Economic Integration'}
            </h3>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setCurrentStageIndex((prev) => Math.max(prev - 1, 0))
              }
              disabled={currentStageIndex === 0}
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700 cursor-pointer transition-colors"
              title={isArabic ? 'المرحلة السابقة' : 'Previous Stage'}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-black/40 border border-slate-700">
              {currentStageIndex + 1} / 5
            </span>
            <button
              onClick={() =>
                setCurrentStageIndex((prev) =>
                  Math.min(prev + 1, INTEGRATION_STAGES.length - 1)
                )
              }
              disabled={currentStageIndex === INTEGRATION_STAGES.length - 1}
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700 cursor-pointer transition-colors"
              title={isArabic ? 'المرحلة التالية' : 'Next Stage'}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentStageIndex(0)}
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors ml-1"
              title={isArabic ? 'البدء من المرحلة الأولى' : 'Restart'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Progress Tabs Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-4">
          {INTEGRATION_STAGES.map((s, idx) => {
            const isActive = idx === currentStageIndex;
            const isCompleted = idx < currentStageIndex;
            return (
              <button
                key={s.stageNumber}
                onClick={() => setCurrentStageIndex(idx)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  isActive
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md font-bold'
                    : isCompleted
                      ? 'bg-emerald-950/40 text-emerald-300 border-emerald-700/60'
                      : isLight
                        ? 'bg-slate-100 border-slate-200 text-slate-600'
                        : 'bg-slate-800/40 border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-1 text-[11px] font-mono">
                  {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  <span>Stage {s.stageNumber}</span>
                </div>
                <span className="text-xs font-semibold truncate w-full">
                  {isArabic
                    ? s.titleAr.split(':')[1]?.trim() || s.titleAr
                    : s.titleEn.split(':')[1]?.trim() || s.titleEn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Slide */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            isContrast
              ? 'bg-zinc-950 border-amber-400'
              : isLight
                ? 'bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200 text-slate-800'
                : 'bg-gradient-to-r from-slate-900 to-emerald-950/40 border-emerald-500/40 text-slate-100'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono">
              Stage #{activeStage.stageNumber}
            </span>
            <h4 className="text-lg font-bold text-emerald-400">
              {isArabic ? activeStage.titleAr : activeStage.titleEn}
            </h4>
          </div>

          <p
            className={`text-xs sm:text-sm leading-relaxed mb-4 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}
          >
            {isArabic ? activeStage.definitionAr : activeStage.definitionEn}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-700/40">
            {/* Mechanisms */}
            <div>
              <h5 className="text-xs font-bold text-blue-400 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isArabic ? 'الآليات والركائز التنفيذية:' : 'Operational Mechanisms:'}
              </h5>
              <ul className="space-y-1.5">
                {(isArabic
                  ? activeStage.mechanismsAr
                  : activeStage.mechanismsEn
                ).map((m, idx) => (
                  <li
                    key={idx}
                    className={`text-xs flex items-start gap-1.5 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real World Benchmark */}
            <div className="p-3 rounded-xl bg-black/40 border border-slate-700 flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1 mb-1">
                <Globe2 className="w-3.5 h-3.5" />
                {isArabic ? 'أمثلة وتطبيقات واقعية:' : 'Real-World Paradigm:'}
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {isArabic
                  ? activeStage.realWorldExampleAr
                  : activeStage.realWorldExampleEn}
              </p>
            </div>
          </div>
        </div>

        {/* Military Alliances Comparative Summary Alert */}
        <div className="mt-4 p-4 rounded-xl border border-red-500/30 bg-red-950/20 text-xs text-slate-300 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-red-300 block mb-1">
              {isArabic
                ? 'المقارنة الجيوسياسية للأحلاف العسكرية في المنهج (NATO vs. Warsaw vs. Peninsula Shield):'
                : 'Curriculum Comparative Framework for Military Alliances:'}
            </span>
            <p className="leading-relaxed">
              {isArabic
                ? 'بينما تفكك حلف وارسو عام 1991 مع تفكك الاتحاد السوفيتي لغياب التجانس السياسي الداخلي وفرض موسكو سيطرتها بالقوة العسكرية في أحداث المجر (1956) وتشيكوسلوفاكيا (1968)، فإن حلف شمال الأطلسي (NATO) استمر وتوسع شرقاً كأقوى حلف عسكري جماعي يقوم على مبدأ الدفاع المشترك (المادة 5)، بينما يمثل درع الجزيرة قوة ردع إقليمية عربية خليجية متجانسة.'
                : 'While the Warsaw Pact dissolved in 1991 due to ideological strain and lack of voluntary cohesion, NATO expanded eastward to 32 member states anchored by Article 5 collective defense. Simultaneously, the Peninsula Shield Force represents a cohesive regional deterrence mechanism in the Arabian Gulf.'}
            </p>
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
