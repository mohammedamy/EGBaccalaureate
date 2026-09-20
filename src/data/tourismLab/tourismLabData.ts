/**
 * Tourism, Hospitality & Cultural Heritage Management Virtual Laboratory Data
 * Accredited for Egyptian General Secondary (Thanaweya Amma) & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Tourism & Hospitality Simulation Architecture
 */

// ============================================================================
// STATION 1: Hotel Yield Management & Performance Indicators (RevPAR / ADR / GOPPAR)
// ============================================================================

export interface HotelYieldPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  totalRooms: number;
  availableRooms: number;
  occupiedRooms: number;
  averageDailyRateEgp: number;
  foodBeverageRevenueEgp: number;
  otherOperatingRevenueEgp: number;
  departmentalExpensesEgp: number;
  undistributedExpensesEgp: number;
}

export const HOTEL_YIELD_PRESETS: HotelYieldPreset[] = [
  {
    id: 'nile_luxury_hotel',
    nameEn: 'Grand Nile Palace Cairo (5-Star Luxury)',
    nameAr: 'فندق قصر النيل الكبير بالقاهرة (٥ نجوم ديلوكس)',
    categoryEn: 'Urban Business & Luxury City Hotel',
    categoryAr: 'فنادق العاصمة ورجال الأعمال والضيافة الفاخرة',
    totalRooms: 400,
    availableRooms: 390,
    occupiedRooms: 312, // 80% occupancy
    averageDailyRateEgp: 4500,
    foodBeverageRevenueEgp: 680000,
    otherOperatingRevenueEgp: 150000,
    departmentalExpensesEgp: 720000,
    undistributedExpensesEgp: 420000,
  },
  {
    id: 'red_sea_resort',
    nameEn: 'Red Sea Crystal Bay Resort Sharm El-Sheikh',
    nameAr: 'منتجع كريستال باي شرم الشيخ (٥ نجوم شاطئي)',
    categoryEn: 'All-Inclusive Beach & Leisure Resort',
    categoryAr: 'منتجعات السياحة الترفيهية والشاطئية الشاملة',
    totalRooms: 500,
    availableRooms: 500,
    occupiedRooms: 450, // 90% occupancy
    averageDailyRateEgp: 3200,
    foodBeverageRevenueEgp: 950000,
    otherOperatingRevenueEgp: 280000,
    departmentalExpensesEgp: 980000,
    undistributedExpensesEgp: 550000,
  },
  {
    id: 'nile_cruise_vessel',
    nameEn: 'Nefertiti Royal Nile Cruiser (Luxor–Aswan)',
    nameAr: 'باخرة نفرتيتي الملكية النيلية (الأقصر - أسوان)',
    categoryEn: 'Floating Boutique Hotel & River Cruising',
    categoryAr: 'الفنادق العائمة والرحلات النيلية الثقافية',
    totalRooms: 75,
    availableRooms: 75,
    occupiedRooms: 69, // 92% occupancy
    averageDailyRateEgp: 6200,
    foodBeverageRevenueEgp: 220000,
    otherOperatingRevenueEgp: 65000,
    departmentalExpensesEgp: 210000,
    undistributedExpensesEgp: 130000,
  },
];

// ============================================================================
// STATION 2: Tour Package Costing & Itinerary Pricing
// ============================================================================

export interface TourPackagePreset {
  id: string;
  nameEn: string;
  nameAr: string;
  durationDays: number;
  descriptionEn: string;
  descriptionAr: string;
  fixedCoachTransportEgp: number;
  fixedGuideFeesEgp: number;
  fixedPermitsEgp: number;
  variableHotelPerPaxEgp: number;
  variableMealsPerPaxEgp: number;
  variableEntranceTicketsPerPaxEgp: number;
  variableDomesticFlightsPerPaxEgp: number;
  agencyMarkupPct: number;
  anticipatedPax: number;
}

export const TOUR_PACKAGE_PRESETS: TourPackagePreset[] = [
  {
    id: 'cairo_classical_tour',
    nameEn: 'Classical Cairo & Giza Antiquities (4 Days / 3 Nights)',
    nameAr: 'برنامج القاهرة الكلاسيكية وآثار الجيزة (٤ أيام / ٣ ليالٍ)',
    durationDays: 4,
    descriptionEn: 'Giza Pyramids, Sphinx, Saqqara, NMEC, GEM, Egyptian Museum, and Historic Islamic Cairo.',
    descriptionAr: 'أهرامات الجيزة، تمثال أبو الهول، سقارة، متحف الحضارة، المتحف الكبير، والقاهرة التاريخية.',
    fixedCoachTransportEgp: 36000,
    fixedGuideFeesEgp: 14000,
    fixedPermitsEgp: 5000,
    variableHotelPerPaxEgp: 6000,
    variableMealsPerPaxEgp: 2400,
    variableEntranceTicketsPerPaxEgp: 1800,
    variableDomesticFlightsPerPaxEgp: 0,
    agencyMarkupPct: 22,
    anticipatedPax: 25,
  },
  {
    id: 'luxor_aswan_nile_voyage',
    nameEn: 'Upper Egypt Pharaohs Nile Voyage (7 Days / 6 Nights)',
    nameAr: 'رحلة فراعنة صعيد مصر النيلية (٧ أيام / ٦ ليالٍ)',
    durationDays: 7,
    descriptionEn: 'Karnak, Luxor Temple, Valley of the Kings, Hatshepsut, Edfu, Kom Ombo, Philae, and Abu Simbel.',
    descriptionAr: 'معابد الكرنك والأقصر، وادي الملوك، حتشبسوت، إدفو، كوم أمبو، فيلة، ومعابد أبو سمبل.',
    fixedCoachTransportEgp: 55000,
    fixedGuideFeesEgp: 28000,
    fixedPermitsEgp: 12000,
    variableHotelPerPaxEgp: 18000,
    variableMealsPerPaxEgp: 5600,
    variableEntranceTicketsPerPaxEgp: 4200,
    variableDomesticFlightsPerPaxEgp: 4800,
    agencyMarkupPct: 25,
    anticipatedPax: 30,
  },
  {
    id: 'sinai_eco_expedition',
    nameEn: 'Sinai Eco-Trek & Red Sea Coral Safari (5 Days / 4 Nights)',
    nameAr: 'مغامرة سيناء البيئية وسفاري مرجان البحر الأحمر (٥ أيام / ٤ ليالٍ)',
    durationDays: 5,
    descriptionEn: 'Saint Catherine Monastery, Mount Sinai sunrise trek, Ras Mohammed marine diving, and Bedouin eco-camp.',
    descriptionAr: 'دير سانت كاترين، صعود جبل موسى، الغوص بمحمية رأس محمد، ومخيم بيئي بدوي مستدام.',
    fixedCoachTransportEgp: 42000,
    fixedGuideFeesEgp: 18000,
    fixedPermitsEgp: 8000,
    variableHotelPerPaxEgp: 7500,
    variableMealsPerPaxEgp: 3200,
    variableEntranceTicketsPerPaxEgp: 2200,
    variableDomesticFlightsPerPaxEgp: 3200,
    agencyMarkupPct: 20,
    anticipatedPax: 20,
  },
];

// ============================================================================
// STATION 3: UNESCO World Heritage & Egyptian Antiquities Explorer
// ============================================================================

export interface EgyptianHeritageSite {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  inscribedYear: number;
  periodEn: string;
  periodAr: string;
  significanceEn: string;
  significanceAr: string;
  coordinates: { lat: number; lng: number };
  architecturalHighlightsEn: string[];
  architecturalHighlightsAr: string[];
  conservationChallengesEn: string;
  conservationChallengesAr: string;
}

export const EGYPTIAN_HERITAGE_SITES: EgyptianHeritageSite[] = [
  {
    id: 'giza_memphis',
    nameEn: 'Memphis and its Necropolis – the Pyramid Fields from Giza to Dahshur',
    nameAr: 'منف ومقبرتها – حقول الأهرام من الجيزة إلى دهشور',
    locationEn: 'Giza Governorate, Greater Cairo',
    locationAr: 'محافظة الجيزة، إقليم القاهرة الكبرى',
    inscribedYear: 1979,
    periodEn: 'Old Kingdom (3rd to 6th Dynasties, c. 2686–2181 BC)',
    periodAr: 'الدولة القديمة (الأسرات ٣ إلى ٦، حوالي ٢٦٨٦-٢١٨١ ق.م)',
    significanceEn: 'Outstanding Universal Value illustrating the pinnacle of monumental stone architecture, royal funerary beliefs, and cosmic solar alignments.',
    significanceAr: 'قيمة عالمية استثنائية تجسد ذروة العمارة الحجرية الضخمة والعقائد الجنائزية الملكية والتعامدات الفلكية الشمسية.',
    coordinates: { lat: 29.9792, lng: 31.1342 },
    architecturalHighlightsEn: [
      'The Great Pyramid of Khufu (146.6m original height, ~2.3M limestone blocks)',
      'The Great Sphinx carved from a single natural limestone bedrock ridge',
      'Step Pyramid of Djoser at Saqqara designed by Imhotep (first stone monument)',
      'The Bent and Red Pyramids of Sneferu at Dahshur showing geometric mastery'
    ],
    architecturalHighlightsAr: [
      'الهرم الأكبر للملك خوفو (الارتفاع الأصلي ١٤٦.٦ م، قرابة ٢.٣ مليون كتلة حجرية)',
      'تمثال أبو الهول المنحوت في تكوين صخري كلسي طبيعي مفرد في هضبة الجيزة',
      'هرم زوسر المدرج بسقارة من تصميم إيمحوتب (أول بناء حجري ضخم في التاريخ)',
      'الهرم المنحني والهرم الأحمر للملك سنفرو بدهشور موثقين النضج الهندسي'
    ],
    conservationChallengesEn: 'Subterranean groundwater table fluctuations, urban encroachment from neighboring settlements, and desert wind erosion.',
    conservationChallengesAr: 'تذبذب منسوب المياه الجوفية، الزحف العمراني العشوائي، وتأثير التعرية الميكانيكية للرياح المحملة بالرمال.'
  },
  {
    id: 'ancient_thebes',
    nameEn: 'Ancient Thebes with its Necropolis (Karnak, Luxor & Valley of the Kings)',
    nameAr: 'طيبة القديمة ومقبرتها (الكرنك، الأقصر، ووادي الملوك)',
    locationEn: 'Luxor Governorate, Upper Egypt',
    locationAr: 'محافظة الأقصر، صعيد مصر',
    inscribedYear: 1979,
    periodEn: 'New Kingdom (18th to 20th Dynasties, c. 1550–1069 BC)',
    periodAr: 'الدولة الحديثة (الأسرات ١٨ إلى ٢٠، حوالي ١٥٥٠-١٠٦٩ ق.م)',
    significanceEn: 'The supreme religious capital of the Egyptian Empire, housing the largest cult temple complex (Karnak) and rock-cut royal tombs.',
    significanceAr: 'العاصمة الدينية الكبرى للإمبراطورية المصرية القديمة، تضم أكبر مجمع معابد كهنوتية في التاريخ ومقابر الملوك المنحوتة في الصخر.',
    coordinates: { lat: 25.7188, lng: 32.6573 },
    architecturalHighlightsEn: [
      'The Great Hypostyle Hall at Karnak (134 sandstone columns spanning 5,000 m²)',
      'Avenue of Sphinxes (2.7 km stone promenade connecting Karnak and Luxor temples)',
      'Tomb of Tutankhamun (KV62) and tomb of Seti I (KV17) with vivid polychrome murals',
      'Terraced Mortuary Temple of Queen Hatshepsut at Deir el-Bahari'
    ],
    architecturalHighlightsAr: [
      'صالة الأعمدة الكبرى بالكرنك (١٣٤ عموداً من الحجر الرملي على مساحة ٥٠٠٠ م²)',
      'طريق الكباش (طريق حجري بطول ٢.٧ كم يربط بين معبدي الكرنك والأقصر)',
      'مقبرة توت عنخ آمون (KV62) ومقبرة سيتي الأول (KV17) بنقوشهما الجدارية الزاهية',
      'معبد الملكة حتشبسوت المدرج بالدير البحري المتناغم مع جرف الجبل الطبيعي'
    ],
    conservationChallengesEn: 'Human perspiration and respiration humidity within rock tombs, micro-fissure expansion, and seasonal flash flood risks.',
    conservationChallengesAr: 'الرطوبة الناتجة عن تنفس وعرق الزائرين داخل المقابر، تمدد الشروخ الدقيقة، ومخاطر السيول الجبلية.'
  },
  {
    id: 'nubian_monuments',
    nameEn: 'Nubian Monuments from Abu Simbel to Philae',
    nameAr: 'معالم النوبة من أبو سمبل إلى فيلة',
    locationEn: 'Aswan Governorate, Southern Egypt',
    locationAr: 'محافظة أسوان، جنوب مصر',
    inscribedYear: 1979,
    periodEn: 'New Kingdom to Greco-Roman (c. 1279 BC – 100 AD)',
    periodAr: 'الدولة الحديثة إلى العصر اليوناني الروماني (١٢٧٩ ق.م - ١٠٠م)',
    significanceEn: 'Masterpiece of human creative genius saved through the legendary UNESCO International Campaign (1960–1980), relocating colossal temples to higher ground.',
    significanceAr: 'إنجاز هندسي وإبداعي تاريخي تم إنقاذه عبر حملة اليونسكو الدولية الكبرى، بنقل المعابد الصخرية العملاقة لتفادي الغرق ببحيرة ناصر.',
    coordinates: { lat: 22.3372, lng: 31.6258 },
    architecturalHighlightsEn: [
      'Great Sun Temple of Ramses II at Abu Simbel (4 seated colossi, 20m high)',
      'Temple of Hathor and Nefertari at Abu Simbel',
      'Island Temple Complex of Isis at Philae rebuilt on Agilkia Island',
      'Solar equinoctial alignment illuminating the sanctuary twice yearly'
    ],
    architecturalHighlightsAr: [
      'معبد الشمس الكبير لرمسيس الثاني بأبو سمبل (٤ تماثيل جدارية بارتفاع ٢٠ متراً)',
      'معبد الإلهة حتحور والملكة نفرتاري بأبو سمبل المزين بتماثيل الواجهة المنحوتة',
      'مجمع معابد الإلهة إيزيس بجزيرة فيلة المعاد تجميعه فوق جزيرة أجيليكا',
      'ظاهرة تعامد الشمس النادرة داخل قدس أقداس معبد أبو سمبل مرتين سنوياً'
    ],
    conservationChallengesEn: 'Lake Nasser wave action, solar thermal thermal shock on sandstone, and isolated desert logistics.',
    conservationChallengesAr: 'أمواج بحيرة ناصر، الصدمات الحرارية الناتجة عن التفاوت بين ليل ونهار الصحراء، واللوجستيات النائية.'
  },
  {
    id: 'historic_cairo',
    nameEn: 'Historic Cairo (Islamic Cairo)',
    nameAr: 'القاهرة التاريخية (القاهرة الإسلامية التراثية)',
    locationEn: 'Cairo Governorate',
    locationAr: 'محافظة القاهرة',
    inscribedYear: 1979,
    periodEn: 'Fatimid, Ayyubid, Mamluk & Ottoman Periods (969–1805 AD)',
    periodAr: 'العصور الفاطمية والأيوبية والمملوكية والعثمانية (٩٦٩-١٨٠٥م)',
    significanceEn: 'One of the world\'s oldest and densest Islamic urban environments, with over 600 registered historic mosques, madrasas, hammams, and caravanserais.',
    significanceAr: 'واحدة من أقدم وأعرق المدن الإسلامية الحية في العالم، تضم أكثر من ٦٠٠ أثر إسلامي مسجل من مساجد ومدارس وأسبلة ووكالات وحمامات.',
    coordinates: { lat: 30.0444, lng: 31.2619 },
    architecturalHighlightsEn: [
      'Al-Azhar Mosque & University founded in 970 AD',
      'Bab Zuweila and northern fortified Fatimid city gates',
      'Mosque-Madrasa of Sultan Hassan (pinnacle of Mamluk cruciform Iwan architecture)',
      'Complex of Sultan Qalawun featuring exquisite stucco and marble mosaics'
    ],
    architecturalHighlightsAr: [
      'الجامع الأزهر الشريف المؤسس عام ٩٧٠م كأول جامعة ومنارة فكرية كبرى',
      'بوابة باب زويلة وأسوار القاهرة الفاطمية الشمالية (باب النصر وباب الفتوح)',
      'مسجد ومدرسة السلطان حسن (قمة عمارة الإيوانات المتعامدة في العصر المملوكي)',
      'مجمع السلطان قلاوون المحتوي على ضريح ومدرسة وبيمارستان بنقوش رخامية فريدة'
    ],
    conservationChallengesEn: 'High municipal vehicular traffic, rising salinity ground moisture, and commercial urban densification.',
    conservationChallengesAr: 'كثافة الحركة المرورية والتلوث، رطوبة التربة الحضرية والأملاح، وضغوط النشاط التجاري بالأسواق.'
  },
];

// ============================================================================
// STATION 4: Tourism Carrying Capacity & Environmental Impact Modeler
// ============================================================================

export interface CarryingCapacityModel {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  totalUsableAreaSqM: number;
  spaceRequiredPerVisitorSqM: number;
  dailyOperatingHours: number;
  averageVisitDurationHours: number;
  sunExcessReductionFactor: number;
  biodiversityVulnerabilityFactor: number;
  infrastructureCapacityFactor: number;
}

export const CARRYING_CAPACITY_MODELS: CarryingCapacityModel[] = [
  {
    id: 'ras_mohammed_reef',
    nameEn: 'Ras Mohammed National Park – Shark & Yolanda Reefs',
    nameAr: 'محمية رأس محمد الوطنية – شعاب سمك القرش ويولاندا',
    locationEn: 'Southern Sinai Marine Biosphere',
    locationAr: 'المحميات البحرية لجنوب سيناء',
    totalUsableAreaSqM: 15000,
    spaceRequiredPerVisitorSqM: 50, // 50 sq m per diver to prevent coral collisions
    dailyOperatingHours: 8,
    averageVisitDurationHours: 1.5,
    sunExcessReductionFactor: 0.15, // rough wave conditions
    biodiversityVulnerabilityFactor: 0.35, // fragile branching coral vulnerability
    infrastructureCapacityFactor: 0.20, // mooring buoy limit
  },
  {
    id: 'tutankhamun_tomb',
    nameEn: 'Tomb of King Tutankhamun (KV62) Burial Chamber',
    nameAr: 'غرفة دفن الملك توت عنخ آمون (KV62) بوادي الملوك',
    locationEn: 'Theban Necropolis, West Bank Luxor',
    locationAr: 'طيبة الغربية، الأقصر',
    totalUsableAreaSqM: 35,
    spaceRequiredPerVisitorSqM: 3.5, // 10 persons max in chamber
    dailyOperatingHours: 9,
    averageVisitDurationHours: 0.25, // 15-minute visit slot
    sunExcessReductionFactor: 0.05, // indoor climatic stability
    biodiversityVulnerabilityFactor: 0.45, // extreme perspiration moisture risk to painted plaster
    infrastructureCapacityFactor: 0.15, // air extraction damper flow limit
  },
  {
    id: 'siwa_ecolodge',
    nameEn: 'Siwa Oasis Adrere Amellal Desert Ecolodge Zone',
    nameAr: 'منطقة أدرير أملال البيئية المستدامة بواحة سيوة',
    locationEn: 'Western Desert Protected Oasis Area',
    locationAr: 'المحميات الصحراوية بواحة سيوة، الصحراء الغربية',
    totalUsableAreaSqM: 80000,
    spaceRequiredPerVisitorSqM: 400,
    dailyOperatingHours: 10,
    averageVisitDurationHours: 5.0,
    sunExcessReductionFactor: 0.30, // intense desert heat window (12 PM - 3 PM)
    biodiversityVulnerabilityFactor: 0.25, // fragile desert crust and water table constraints
    infrastructureCapacityFactor: 0.10, // renewable solar / organic waste load limit
  },
];

// ============================================================================
// STATION 5: Global Distribution Systems (GDS: Sabre/Amadeus) & PNR Terminal
// ============================================================================

export interface GdsFlightEntry {
  flightNumber: string;
  airlineNameEn: string;
  airlineNameAr: string;
  originIata: string;
  destIata: string;
  departureTime: string;
  arrivalTime: string;
  aircraftType: string;
  availableSeats: {
    firstClass: number;
    businessClass: number;
    economyClass: number;
  };
  fareEgp: {
    firstClass: number;
    businessClass: number;
    economyClass: number;
  };
}

export const GDS_FLIGHT_INVENTORY: GdsFlightEntry[] = [
  {
    flightNumber: 'MS 777',
    airlineNameEn: 'EgyptAir',
    airlineNameAr: 'مصر للطيران',
    originIata: 'CAI',
    destIata: 'LHR',
    departureTime: '09:15',
    arrivalTime: '13:30',
    aircraftType: 'Boeing 787-9 Dreamliner',
    availableSeats: { firstClass: 4, businessClass: 12, economyClass: 85 },
    fareEgp: { firstClass: 65000, businessClass: 38000, economyClass: 14500 },
  },
  {
    flightNumber: 'MS 985',
    airlineNameEn: 'EgyptAir',
    airlineNameAr: 'مصر للطيران',
    originIata: 'CAI',
    destIata: 'JFK',
    departureTime: '10:40',
    arrivalTime: '16:00',
    aircraftType: 'Boeing 777-300ER',
    availableSeats: { firstClass: 2, businessClass: 8, economyClass: 110 },
    fareEgp: { firstClass: 115000, businessClass: 72000, economyClass: 31000 },
  },
  {
    flightNumber: 'MS 066',
    airlineNameEn: 'EgyptAir Express',
    airlineNameAr: 'مصر للطيران إكسبريس',
    originIata: 'CAI',
    destIata: 'SSH',
    departureTime: '07:00',
    arrivalTime: '08:00',
    aircraftType: 'Airbus A320neo',
    availableSeats: { firstClass: 0, businessClass: 6, economyClass: 42 },
    fareEgp: { firstClass: 0, businessClass: 4500, economyClass: 2200 },
  },
  {
    flightNumber: 'MS 140',
    airlineNameEn: 'EgyptAir Express',
    airlineNameAr: 'مصر للطيران إكسبريس',
    originIata: 'CAI',
    destIata: 'LXR',
    departureTime: '06:30',
    arrivalTime: '07:35',
    aircraftType: 'Airbus A321neo',
    availableSeats: { firstClass: 0, businessClass: 8, economyClass: 54 },
    fareEgp: { firstClass: 0, businessClass: 4800, economyClass: 2400 },
  },
];
