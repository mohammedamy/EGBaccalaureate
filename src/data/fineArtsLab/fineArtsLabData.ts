export interface PerspectivePreset {
  id: string;
  nameAr: string;
  nameEn: string;
  type: 'one-point' | 'two-point' | 'three-point';
  horizonY: number; // percentage 0-100
  vp1X: number;     // percentage 0-100
  vp2X?: number;
  vp3Y?: number;
  descriptionAr: string;
  descriptionEn: string;
  architecturalExamplesAr: string;
  architecturalExamplesEn: string;
  keyRuleAr: string;
  keyRuleEn: string;
}

export interface ColorHarmonicScheme {
  id: string;
  nameAr: string;
  nameEn: string;
  baseHue: number; // degrees 0-360
  schemeType: 'complementary' | 'triadic' | 'analogous' | 'monochromatic' | 'split-complementary';
  colors: {
    hex: string;
    hue: number;
    nameAr: string;
    nameEn: string;
    roleAr: string;
    roleEn: string;
  }[];
  emotionalEffectAr: string;
  emotionalEffectEn: string;
  architecturalUseAr: string;
  architecturalUseEn: string;
  lightContrastRatio: string;
}

export interface GoldenRatioElement {
  id: string;
  nameAr: string;
  nameEn: string;
  monumentAr: string;
  monumentEn: string;
  eraAr: string;
  eraEn: string;
  phiRatio: number;
  aspectDescriptionAr: string;
  aspectDescriptionEn: string;
  dimensionsWidth: number;
  dimensionsHeight: number;
  architecturalImpactAr: string;
  architecturalImpactEn: string;
}

export interface IslamicTessellationPattern {
  id: string;
  nameAr: string;
  nameEn: string;
  symmetryOrder: number; // e.g. 8, 12, 16
  historicalPeriodAr: string;
  historicalPeriodEn: string;
  monumentAr: string;
  monumentEn: string;
  geometricOriginAr: string;
  geometricOriginEn: string;
  constructionStepAr: string[];
  constructionStepEn: string[];
  structuralSymbolismAr: string;
  structuralSymbolismEn: string;
}

export interface FineArtsAptitudeQuestion {
  id: string;
  questionAr: string;
  questionEn: string;
  categoryAr: string;
  categoryEn: string;
  optionsAr: [string, string, string, string];
  optionsEn: [string, string, string, string];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

export const PERSPECTIVE_PRESETS: PerspectivePreset[] = [
  {
    id: 'persp-1',
    nameAr: 'منظور ذو نقطة تلاشٍ واحدة (منظور أمامي موازي)',
    nameEn: 'One-Point Perspective (Frontal Parallel)',
    type: 'one-point',
    horizonY: 50,
    vp1X: 50,
    descriptionAr: 'يلتقي فيه خطان متوازيان متعامدان على مستوى الصورة في نقطة واحدة على خط الأفق تسمى نقطة التلاشي المركزية.',
    descriptionEn: 'All orthogonal lines perpendicular to the picture plane converge to a single central vanishing point on the horizon line.',
    architecturalExamplesAr: 'أروقة المعابد المصرية القديمة، ممرات المساجد الإسلامية الطولية، شوارع المدن الممتدة إلى الأمام.',
    architecturalExamplesEn: 'Ancient Egyptian temple hypostyle colonnades, longitudinal mosque corridors, deep urban street canyons.',
    keyRuleAr: 'الخطوط الأفقية تظل أفقية تماماً، والخطوط الرأسية تظل رأسية تماماً، وفقط الخطوط الذاهبة للعمق تتلاشى.',
    keyRuleEn: 'Horizontal lines remain purely horizontal, verticals remain vertical, only depth orthogonals converge.',
  },
  {
    id: 'persp-2',
    nameAr: 'منظور ذو نقطتي تلاشٍ (منظور زاوي حاد)',
    nameEn: 'Two-Point Perspective (Angular Oblique)',
    type: 'two-point',
    horizonY: 45,
    vp1X: 12,
    vp2X: 88,
    descriptionAr: 'يستخدم عند النظر إلى زاوية أو ركن المبنى؛ تلتقي أضلاع الوجه الأيمن في نقطة تلاشٍ يمنى، وأضلاع الوجه الأيسر في نقطة يسرى.',
    descriptionEn: 'Used when viewing a building corner; right-side orthogonals converge to the right VP, left-side to the left VP.',
    architecturalExamplesAr: 'واجهات المباني السكنية عند التقاطعات، أركان القلاع الحصينة، المنظور الخارجي المعتاد للمجسمات.',
    architecturalExamplesEn: 'Street-corner architectural facades, corner bastions of medieval citadels, standard exterior 3D block drafting.',
    keyRuleAr: 'الخطوط الرأسية تظل متوازية ورأسية 90°، بينما كل من خطوط الطول والعرض تتلاشى إلى نقطتي تلاشٍ على الأفق.',
    keyRuleEn: 'Vertical edges remain vertical at 90°, while both longitudinal and transversal edges recede to two horizon VPs.',
  },
  {
    id: 'persp-3',
    nameAr: 'منظور ذو ثلاث نقاط تلاشٍ (منظور عين الطائر / عين النملة)',
    nameEn: 'Three-Point Perspective (Bird\'s Eye / Worm\'s Eye View)',
    type: 'three-point',
    horizonY: 30,
    vp1X: 10,
    vp2X: 90,
    vp3Y: 92,
    descriptionAr: 'يضاف فيه نقطة تلاشٍ ثالثة رأسية إما في السماء (عين النملة عند النظر للأعلى) أو في باطن الأرض (عين الطائر عند النظر للأسفل).',
    descriptionEn: 'Adds a third vertical vanishing point either high above (worm\'s eye view) or deep below ground (bird\'s eye view).',
    architecturalExamplesAr: 'ناطحات السحاب الشاهقة، الأبراج الإدارية بالعاصمة الإدارية، اللقطات الجوية للمجمعات السكنية.',
    architecturalExamplesEn: 'Skyline skyscrapers, Iconic Tower in New Administrative Capital, aerial drone fly-throughs of urban masterplans.',
    keyRuleAr: 'لا يوجد أي خط متوازٍ في المشهد؛ حتى الخطوط الرأسية تميل لتتلاقى في نقطة التلاشي الرأسية الثالثة.',
    keyRuleEn: 'No parallel lines exist in the viewport; even vertical uprights converge toward the third vertical VP.',
  },
];

export const COLOR_HARMONIES: ColorHarmonicScheme[] = [
  {
    id: 'harm-comp',
    nameAr: 'التناغم المتكامل (المتضاد اللوني الصريح)',
    nameEn: 'Complementary Harmony',
    baseHue: 15, // Warm Terracotta Red-Orange
    schemeType: 'complementary',
    colors: [
      { hex: '#C0392B', hue: 15, nameAr: 'أحمر قرميدي فخاري', nameEn: 'Terracotta Red', roleAr: 'لون أساسي مسيطر (60%)', roleEn: 'Dominant Color (60%)' },
      { hex: '#16A085', hue: 195, nameAr: 'فيروزي مكمل (أزرق مخضر)', nameEn: 'Turquoise Teal', roleAr: 'لون التباين والتمييز (30%)', roleEn: 'Accent Contrast (30%)' },
      { hex: '#F39C12', hue: 45, nameAr: 'أصفر خردلي دافئ', nameEn: 'Warm Ochre', roleAr: 'لون لمسات جذب البصر (10%)', roleEn: 'Focal Accent (10%)' },
    ],
    emotionalEffectAr: 'يحدث أقصى طاقة بصرية واستثارة للحواس مع إحساس بالجرأة والنشاط والحيوية المشعة.',
    emotionalEffectEn: 'Creates maximum optical vibration and energetic contrast while establishing an exciting vibrant focus.',
    architecturalUseAr: 'تأكيد المداخل الرئيسية، اللوحات الجدارية، الفراغات الترفيهية والمطاعم الحديثة.',
    architecturalUseEn: 'Entrance portal accents, feature walls, entertainment pavilions and bold contemporary spaces.',
    lightContrastRatio: '7.8:1 (عالي التباين)',
  },
  {
    id: 'harm-triad',
    nameAr: 'التناغم الثلاثي المتوازن (مثلث الألوان المتساوي)',
    nameEn: 'Triadic Harmony',
    baseHue: 210, // Cobalt Blue
    schemeType: 'triadic',
    colors: [
      { hex: '#2980B9', hue: 210, nameAr: 'أزرق نيلي سماوي', nameEn: 'Cobalt Blue', roleAr: 'لون البيئة والسكينة (60%)', roleEn: 'Dominant Base (60%)' },
      { hex: '#E67E22', hue: 30, nameAr: 'برتقالي شمسي محترق', nameEn: 'Solar Ochre Orange', roleAr: 'لون الطاقة والتوازن (30%)', roleEn: 'Secondary Balance (30%)' },
      { hex: '#27AE60', hue: 120, nameAr: 'أخضر زمردي نباتي', nameEn: 'Emerald Green', roleAr: 'لون الحيوية الطبيعية (10%)', roleEn: 'Living Accent (10%)' },
    ],
    emotionalEffectAr: 'تنوع بصري غني ومتوازن دون أن يطغى لون على آخر؛ يشعر الرائي بالتناسق والحيوية الهادئة.',
    emotionalEffectEn: 'Rich, balanced visual diversity without visual chaos, creating harmony, vitality and comfortable stability.',
    architecturalUseAr: 'المراكز الثقافية، المدارس، قاعات المؤتمرات، والمستشفيات الحديثة ذات الطابع الشفائي.',
    architecturalUseEn: 'Cultural centres, educational complexes, convention halls and biophilic wellness hospitals.',
    lightContrastRatio: '6.4:1 (متوسط إلى عالي)',
  },
  {
    id: 'harm-analogous',
    nameAr: 'التناغم المتجاور (ألوان الطبيعة المتآلفة)',
    nameEn: 'Analogous Harmony',
    baseHue: 35, // Amber Yellow
    schemeType: 'analogous',
    colors: [
      { hex: '#D35400', hue: 20, nameAr: 'برتقالي طوبي عميق', nameEn: 'Rust Terracotta', roleAr: 'أساس أرضي (30%)', roleEn: 'Earthy Foundation (30%)' },
      { hex: '#F39C12', hue: 45, nameAr: 'عنبري ذهبي شمسي', nameEn: 'Warm Golden Amber', roleAr: 'اللون المسيطر المضيء (50%)', roleEn: 'Dominant Light (50%)' },
      { hex: '#27AE60', hue: 110, nameAr: 'أخضر زيتوني ناعم', nameEn: 'Soft Olive Green', roleAr: 'انتقال طبيعي ناعم (20%)', roleEn: 'Organic Transition (20%)' },
    ],
    emotionalEffectAr: 'يبعث على الراحة النفسية التامة والهدوء والتأمل لمحاكاته تدرجات أوراق الشجر وغروب الشمس في الطبيعة.',
    emotionalEffectEn: 'Evokes deep psychological tranquility, serenity and organic warmth, echoing natural foliage and desert sunsets.',
    architecturalUseAr: 'غرف المعيشة المنزلية، المنتجعات البيئية، النزل الصحراوية في سيوة والفيوم، صالات الاسترخاء.',
    architecturalUseEn: 'Residential lounges, eco-resorts, desert vernacular hotels (Siwa/Fayoum), and contemplative spas.',
    lightContrastRatio: '4.5:1 (ناعم ومريح للعين)',
  },
  {
    id: 'harm-mono',
    nameAr: 'التناغم أحادي اللون (تدرج القيمة والتشبع)',
    nameEn: 'Monochromatic Harmony',
    baseHue: 200, // Architectural Slate Blue
    schemeType: 'monochromatic',
    colors: [
      { hex: '#1B4F72', hue: 200, nameAr: 'أزرق داكن بترولي (ظل)', nameEn: 'Deep Slate Navy', roleAr: 'عمق ظلال الأساس (40%)', roleEn: 'Deep Shadow Structure (40%)' },
      { hex: '#3498DB', hue: 200, nameAr: 'أزرق بلوري نقي (نغمة متوسطة)', nameEn: 'Cerulean Midtone', roleAr: 'المساحة الوسطى الأساسية (40%)', roleEn: 'Midtone Mass (40%)' },
      { hex: '#AED6F1', hue: 200, nameAr: 'أزرق ثلجي مضيء (ضوء)', nameEn: 'Pale Ice Blue Tint', roleAr: 'إبراز الإضاءة والانعكاسات (20%)', roleEn: 'Light Highlight (20%)' },
    ],
    emotionalEffectAr: 'يعكس الرقي، الانضباط، النظام المؤسسي، النقاء، والتركيز العقلي الصافي دون مشتتات.',
    emotionalEffectEn: 'Projects sophistication, institutional discipline, architectural purity, and serene distraction-free focus.',
    architecturalUseAr: 'المتاحف الفنية الحديثة، مقرات الشركات المالية الكبرى، كليات العمارة واستوديوهات التصميم.',
    architecturalUseEn: 'Modernist art museums, corporate headquarters, architectural ateliers and high-tech minimalist pavilions.',
    lightContrastRatio: '8.5:1 (وضوح فائق للنصوص والعناصر)',
  },
];

export const GOLDEN_RATIO_ARCHETYPES: GoldenRatioElement[] = [
  {
    id: 'phi-pyramid',
    nameAr: 'الهرم الأكبر بالجيزة (خوفو)',
    nameEn: 'The Great Pyramid of Giza (Khufu)',
    monumentAr: 'أهرامات الجيزة - مصر',
    monumentEn: 'Giza Necropolis, Egypt',
    eraAr: 'الأسرة الرابعة (حوالي 2560 ق.م)',
    eraEn: '4th Dynasty (c. 2560 BCE)',
    phiRatio: 1.618,
    aspectDescriptionAr: 'النسبة بين الارتفاع المائل للوجه المثلثي ونصف طول قاعدة الهرم تساوي بالضبط النسبة الذهبية φ (حوالي 1.618).',
    aspectDescriptionEn: 'The ratio of the slant height of the face to half the base width equals the Golden Ratio φ (approx 1.618).',
    dimensionsWidth: 230.4,
    dimensionsHeight: 146.5,
    architecturalImpactAr: 'توليد هيبة استثنائية وثبات صخري أزلي ومقاومة فائقة للزلازل والرياح عبر التناسب الرياضي الإلهي.',
    architecturalImpactEn: 'Engineers unmatched monumental timelessness, structural equilibrium, and wind resistance via divine geometry.',
  },
  {
    id: 'phi-parthenon',
    nameAr: 'معبد البارثينون بأثينا',
    nameEn: 'The Parthenon at the Acropolis',
    monumentAr: 'الأكروبوليس - أثينا، اليونان',
    monumentEn: 'Acropolis of Athens, Greece',
    eraAr: 'العصر الكلاسيكي الإغريقي (447-432 ق.م)',
    eraEn: 'Classical Greek Period (447–432 BCE)',
    phiRatio: 1.618,
    aspectDescriptionAr: 'المستطيل المحيط بالواجهة الغربية بأعمدتها الدورية وإفريزها ومثلث الجملون يخضع بأكمله للنسبة الذهبية المستطيلة.',
    aspectDescriptionEn: 'The bounding rectangle of the western facade including entablature and pediment fits a golden rectangle.',
    dimensionsWidth: 30.88,
    dimensionsHeight: 13.72,
    architecturalImpactAr: 'تصحيح الخداع البصري (Entasis) واستقامة المظهر عند المشاهد من الأسفل، مع شعور فائق بالتوازن الإنساني.',
    architecturalImpactEn: 'Corrects optical curvature illusions (entasis), projecting absolute human-scale poise and balanced rhythm.',
  },
  {
    id: 'phi-sultan-hassan',
    nameAr: 'مجمع ومسجد السلطان حسن',
    nameEn: 'Sultan Hassan Mosque & Madrasa Complex',
    monumentAr: 'ميدان القلعة - القاهرة، مصر',
    monumentEn: 'Citadel Square, Cairo, Egypt',
    eraAr: 'العصر المملوكي البحري (1356-1363 م)',
    eraEn: 'Mamluk Sultanate Era (1356–1363 CE)',
    phiRatio: 1.618,
    aspectDescriptionAr: 'نسبة ارتفاع الإيوان الرئيسي (إيوان القبلة) إلى عرضه، وموقع القبة والمنارة الشامخة تحقق أبعاد المتتالية الفيبوناتشية.',
    aspectDescriptionEn: 'The qibla iwan height-to-width ratio and the placement of dome and minaret embody Fibonacci proportional grids.',
    dimensionsWidth: 40.0,
    dimensionsHeight: 38.0,
    architecturalImpactAr: 'إحساس بالخشوع والرهبة العلوية وانسياب الهواء والضوء الطبيعي عبر الإيوانات الأربعة المتعامدة.',
    architecturalImpactEn: 'Evokes spiritual awe, celestial verticality, and passive thermal microclimate airflows across the four iwans.',
  },
  {
    id: 'phi-villa-savoye',
    nameAr: 'فيلا سافوي للمعماري لوكوربوزييه',
    nameEn: 'Villa Savoye by Le Corbusier',
    monumentAr: 'بواسي - فرنسا',
    monumentEn: 'Poissy, France',
    eraAr: 'العمارة الحداثية الدولية (1928-1931 م)',
    eraEn: 'Modernist International Style (1928–1931 CE)',
    phiRatio: 1.618,
    aspectDescriptionAr: 'تطبيق مقياس "المودولور" (Modulor) الذي اخترعه لوكوربوزييه بالاعتماد على قامة الإنسان والنسبة الذهبية.',
    aspectDescriptionEn: 'Direct application of Le Corbusier\'s "Modulor" scale synthesizing human anthropology and golden sections.',
    dimensionsWidth: 21.5,
    dimensionsHeight: 9.4,
    architecturalImpactAr: 'تجسيد مبادئ العمارة الحديثة الخمسة: الأعمدة الخرسانية، المسقط الحر، الواجهة الحرة، النوافذ الشريطية، وحديقة السطح.',
    architecturalImpactEn: 'Demonstrates the Five Points of Architecture: pilotis, free plan, free facade, ribbon windows, and roof garden.',
  },
];

export const ISLAMIC_TESSELLATION_PATTERNS: IslamicTessellationPattern[] = [
  {
    id: 'tess-8',
    nameAr: 'الطبق النجمي الثماني (الخاتم السليماني المتناظر)',
    nameEn: 'Octagonal 8-Pointed Star Rosette',
    symmetryOrder: 8,
    historicalPeriodAr: 'العصر المملوكي والفاطمي بمصر',
    historicalPeriodEn: 'Mamluk & Fatimid Eras in Egypt',
    monumentAr: 'منبر جامع السلطان قايتباي والواجهات الخشبية بمتحف الفن الإسلامي',
    monumentEn: 'Minbar of Sultan Qaytbay & Woodwork in Islamic Art Museum Cairo',
    geometricOriginAr: 'ينشأ من تقاطع مربعين متطابقين أحدهما مائل بزاوية 45 درجة داخل دائرة رئيسية واحدة.',
    geometricOriginEn: 'Originates from intersecting two identical squares rotated 45° within a single circumscribed circle.',
    constructionStepAr: [
      'رسم الدائرة وتحديد الأقطار المتعامدة الأربعة لتقسيمها إلى 8 أقواس متساوية.',
      'وصل النقاط لتشكيل مربعين متراكبين بزاوية دوران 45°.',
      'تحديد نقاط تقاطع الأضلاع لتكوين النجمة الثمانية المركزية (الطبق).',
      'مد الأوتار للخارج لتكوين الكندات واللوزات المحيطة لضمان التكرار اللانهائي.',
    ],
    constructionStepEn: [
      'Draw circumscribing circle and divide circumference into 8 equal arcs using perpendicular bisectors.',
      'Connect alternating points to produce two interlocking squares rotated at 45°.',
      'Trace perimeter intersections to isolate the core 8-pointed star rosette.',
      'Extend outer rays to generate surrounding petals (kandat and almond segments) for infinite tessellation.',
    ],
    structuralSymbolismAr: 'يرمز لعرش الرحمن وثبات الاتجاهات الأربعة الرئيسية والفرعية وتناغم الكون الرياضي.',
    structuralSymbolismEn: 'Symbolizes cosmic equilibrium, the cardinal and ordinal directions, and infinite divine unity.',
  },
  {
    id: 'tess-12',
    nameAr: 'الطبق النجمي الإثناعشري ذو الاثني عشر كندا',
    nameEn: 'Dodecagonal 12-Pointed Star Rosette',
    symmetryOrder: 12,
    historicalPeriodAr: 'العصر المملوكي الجركسي والعثماني',
    historicalPeriodEn: 'Circassian Mamluk & Ottoman Dynasties',
    monumentAr: 'أبواب جامع الغوري ومشكاوات مدرسة ومسجد السلطان برقوق',
    monumentEn: 'Portals of Al-Ghuri Mosque & Mosque of Sultan Barquq',
    geometricOriginAr: 'ينشأ من تراكب ثلاثة مربعات بزوايا دوران 30° أو أربعة مثلثات متساوية الأضلاع.',
    geometricOriginEn: 'Constructed by overlaying three squares rotated at 30° or four equilateral triangles.',
    constructionStepAr: [
      'تقسيم محيط الدائرة إلى 12 قسماً متساوياً باستخدام الفرجار والمسطرة.',
      'رسم المضلعات النجمية المتداخلة بمد الخطوط حتى تلتقي عند نقاط التحول.',
      'استخلاص الصحن النجمي المركزي وحشوات اللوزات الخارجية المحيطة.',
      'تطبيق قواعد التناظر الانعكاسي والدوراني C12 لملء كامل المسطح دون فراغات.',
    ],
    constructionStepEn: [
      'Subdivide circle circumference into 12 equal sectors using compass and straightedge.',
      'Draft nested stellated polygons by extending line segments across vertex pairs.',
      'Extract the central 12-pointed rosette nucleus surrounded by 12 symmetric petals.',
      'Apply C12 cyclic and reflective symmetry to tile the planar surface seamlessly.',
    ],
    structuralSymbolismAr: 'يرمز لشهور السنة الفلكية والبروج السماوية وتكامل الزمان والمكان في الرؤية الإسلامية للكون.',
    structuralSymbolismEn: 'Symbolizes celestial zodiac houses, the solar year cycles, and the integration of spacetime in Islamic cosmology.',
  },
  {
    id: 'tess-16',
    nameAr: 'الطبق النجمي السداسي عشر الملكي المعقد',
    nameEn: 'Hexadecagonal 16-Pointed Royal Rosette',
    symmetryOrder: 16,
    historicalPeriodAr: 'ذروة العصر المملوكي - القرن التاسع الهجري',
    historicalPeriodEn: 'Peak Mamluk Renaissance (15th Century CE)',
    monumentAr: 'رخام محراب ومقرنصات قبة قايتباي بصحراء المماليك',
    monumentEn: 'Mihrab Inlaid Marbles & Dome of Qaytbay in Northern Cemetery',
    geometricOriginAr: 'أعلى درجات التعقيد الهندسي؛ يعتمد على تقسيم الدائرة إلى 16 زاوية متساوية مقدار كل منها 22.5 درجة.',
    geometricOriginEn: 'Highest geometric sophistication; divides circle into 16 equal angles of 22.5° each.',
    constructionStepAr: [
      'تنصيف الزوايا القائمة المتعامدة مرتين للوصول لـ 16 نقطة تماس متطابقة.',
      'بناء شبكة هندسية متعددة الحلقات متحدة المركز لضبط مقادير التراجع والتراكب.',
      'رسم أشعة النجوم المتشابكة بنظام الأطباق واللوزات والصواريف.',
      'تعشيق الوحدات الرخامية الملونة (الأبلق) مع خيوط النحاس أو الصدف المنمنم.',
    ],
    constructionStepEn: [
      'Bisect quadrants twice to yield 16 exact circumference contact vertices.',
      'Construct a concentric multi-ring grid to calibrate scale ratios of inner and outer rosettes.',
      'Draft interweaving star rays following the traditional Ablaq marble tessellation grammar.',
      'Inlay polychrome marble segments with brass stringing and mother-of-pearl accents.',
    ],
    structuralSymbolismAr: 'الكمال المعماري وإبراز عبقرية الصانع المصري في تحويل القوانين الرياضية الجافة إلى سيمفونية بصرية ساحرة.',
    structuralSymbolismEn: 'Represents architectural transcendence and master craftsmen\'s prowess in turning rigid math into visual poetry.',
  },
];

export const FINE_ARTS_APTITUDE_QUIZ: FineArtsAptitudeQuestion[] = [
  {
    id: 'art-quiz-1',
    questionAr: 'في منظور النقطة الواحدة (Frontal Perspective)، ما هي الخاصية الهندسية التي تظل محتفظة بزاويتها وشكلها الحقيقي دون أي تشويه أو تراجع؟',
    questionEn: 'In one-point perspective, which geometric property preserves its true angle and shape without converging or distortion?',
    categoryAr: 'قواعد المنظور الحر',
    categoryEn: 'Freehand Perspective Principles',
    optionsAr: [
      'الأسطح المستوية الموازية تماماً لمستوى الصورة (Picture Plane)',
      'الخطوط الذاهبة في عمق الفراغ والمتجهة نحو الأفق',
      'الزوايا القائمة لأضلاع المبنى الجانبية المتراجعة',
      'الأقطار المائلة للأسطح المائلة للأرضيات والممرات',
    ],
    optionsEn: [
      'Surfaces precisely parallel to the Picture Plane',
      'Lines receding deep into visual depth towards the horizon',
      'Right angles of receding side elevations',
      'Diagonal bisectors of inclined paving and corridors',
    ],
    correctIndex: 0,
    explanationAr: 'في منظور النقطة الواحدة، أي سطح أو جدار موازٍ تماماً لمستوى الصورة يحتفظ بنسبه وأبعاده وزواياه الحقيقية (أفقي أفقي ورأسي رأسي)، وفقط الخطوط المتعامدة على مستوى الصورة هي التي تتلاقى عند نقطة التلاشي.',
    explanationEn: 'In one-point perspective, planes parallel to the picture plane retain their true shapes and orthogonal angles without distortion.',
  },
  {
    id: 'art-quiz-2',
    questionAr: 'ما هو الترتيب الصحيح لدرجات الظلال الواقعة على كرة مصمتة معتمة مضاءة بمصدر ضوء جانبي نقطي واحد؟',
    questionEn: 'What is the correct sequential order of light and shadow zones on an opaque sphere illuminated by a single directional light source?',
    categoryAr: 'دراسة الظل والنور والتشكيل المجسم',
    categoryEn: 'Light, Shadow & Chiaroscuro Modeling',
    optionsAr: [
      'الضوء المباشر (Highlight) -> النغمة النصفية (Midtone) -> خط فاصل الظل (Core Shadow) -> الضوء المنعكس (Reflected Light) -> الظل الساقط (Cast Shadow)',
      'الظل الساقط -> خط فاصل الظل -> الضوء المنعكس -> النغمة النصفية -> الضوء المباشر',
      'الضوء المباشر -> الضوء المنعكس -> خط فاصل الظل -> الظل الساقط -> النغمة النصفية',
      'النغمة النصفية -> الضوء المنعكس -> الضوء المباشر -> الظل الساقط -> خط فاصل الظل',
    ],
    optionsEn: [
      'Highlight -> Halftone (Midtone) -> Terminator / Core Shadow -> Reflected Light -> Cast Shadow',
      'Cast Shadow -> Core Shadow -> Reflected Light -> Midtone -> Highlight',
      'Highlight -> Reflected Light -> Core Shadow -> Cast Shadow -> Midtone',
      'Midtone -> Reflected Light -> Highlight -> Cast Shadow -> Core Shadow',
    ],
    correctIndex: 0,
    explanationAr: 'التوزيع الأكاديمي الدقيق للقيم الظلية يبدأ بأشد نقطة إضاءة (Highlight)، تليها النغمات الوسطية (Midtones)، ثم أغمق منطقة على جسم الكرة وهي حد الظل الذاتي (Core Shadow)، تليها إضاءة خفيفة ناتجة عن ارتداد الأشعة من السطح (Reflected Light)، وأخيراً الظل الملقى على الأرض (Cast Shadow).',
    explanationEn: 'The classical academic chiaroscuro model progresses from Highlight -> Midtone -> Core Shadow -> Reflected Light -> Cast Shadow with ambient occlusion.',
  },
  {
    id: 'art-quiz-3',
    questionAr: 'عند تصميم واجهة معمارية تخضع للنسبة الذهبية الفيبوناتشية (Golden Ratio φ ≈ 1.618)، إذا كان عرض البهو الرئيسي 10 أمتار، فما هو الارتفاع المثالي لتحقيق التناسب الذهبي الكلاسيكي؟',
    questionEn: 'When designing an architectural facade adhering to the Golden Ratio (φ ≈ 1.618), if the main lobby width is 10 meters, what is the ideal height for golden classical proportion?',
    categoryAr: 'التناسب المعماري والنسبة الذهبية',
    categoryEn: 'Architectural Proportion & Golden Ratio',
    optionsAr: [
      '16.18 متراً (أو 6.18 متراً إذا كانت النسبة العرض هو الأطول)',
      '12.50 متراً بالضبط',
      '20.00 متراً بنسبة الضعف الصريح 2:1',
      '14.14 متراً وفقاً لنسبة الجذر التربيعي لـ 2',
    ],
    optionsEn: [
      '16.18 meters (or 6.18 meters if width is the major golden segment)',
      '12.50 meters exactly',
      '20.00 meters following 2:1 double ratio',
      '14.14 meters following root-2 geometry',
    ],
    correctIndex: 0,
    explanationAr: 'في المستطيل الذهبي، النسبة بين البعد الأكبر والأصغر هي دائماً φ ≈ 1.618. بالتالي: إذا كان 10 أمتار هو البعد الأصغر فإن الارتفاع = 10 × 1.618 = 16.18 م، وإذا كان 10 أمتار هو البعد الأكبر فالارتفاع = 10 ÷ 1.618 ≈ 6.18 م.',
    explanationEn: 'In a golden section, Long/Short = 1.618. Thus 10m × 1.618 = 16.18m (or 10m / 1.618 = 6.18m).',
  },
  {
    id: 'art-quiz-4',
    questionAr: 'ما هي الخاصية المميزة لـ "المقرنصات" (Muqarnas) في العمارة الإسلامية التاريخية بمصر والعالم العربي؟',
    questionEn: 'What is the definitive structural and decorative function of "Muqarnas" (Stalactite Vaulting) in Islamic Egyptian architecture?',
    categoryAr: 'العمارة الإسلامية والتراث',
    categoryEn: 'Islamic Architectural Heritage',
    optionsAr: [
      'عنصر معماري انتقالي متدرج يحول المسقط المربع للقاعة إلى مسقط دائري لحمل القبة، بالإضافة لوظيفته الجمالية الموزعة للظل والنور',
      'أعمدة دعم خارجية لمقاومة الرياح والزلازل في أسوار القلاع الحربية',
      'نوافذ زجاجية ملونة تستخدم لترشيح أشعة الشمس داخل المحاريب',
      'أحواض مائية أرضية لترطيب الهواء في فناء المساجد المكشوفة',
    ],
    optionsEn: [
      'A corbelled transition element converting square floor plans into circular rings to support domes, while dispersing light & shade',
      'External buttresses engineered to withstand seismic tremors in military citadels',
      'Stained glass clerestory windows filtering sunlight into mihrab niches',
      'Floor water basins cooling ambient air in open mosque courtyards',
    ],
    correctIndex: 0,
    explanationAr: 'المقرنصات حلت أعقد معضلة هندسية في العمارة الإسلامية وهي كيفية الانتقال السلس من الحيز المربع للجدران إلى الحيز الدائري للقبة، محققة تناغماً إنشائياً وجمالياً استثنائياً.',
    explanationEn: 'Muqarnas served as squinches/pendentives, transforming square cubic rooms into octagons and circles for dome resting.',
  },
  {
    id: 'art-quiz-5',
    questionAr: 'في دائرة الألوان، ما هو "اللون المكمل" للون الأصفر النقي في نظام الألوان الضوئية والصبغية التقليدية للفنون التشكيلية (RYB)؟',
    questionEn: 'On the traditional artists\' color wheel (RYB), what is the exact complementary color of pure Yellow?',
    categoryAr: 'نظريات الألوان التشكيلية',
    categoryEn: 'Fine Arts Color Wheel Theory',
    optionsAr: [
      'البنفسجي النقي (Violet / Purple)',
      'الأزرق المخضر (Cyan / Teal)',
      'الأحمر القرمزي (Crimson Red)',
      'البرتقالي المحترق (Burnt Orange)',
    ],
    optionsEn: [
      'Pure Violet / Purple',
      'Cyan / Teal',
      'Crimson Red',
      'Burnt Orange',
    ],
    correctIndex: 0,
    explanationAr: 'في دائرة الألوان الصبغية التشكيلية التقليدية (أحمر، أصفر، أزرق)، اللون المكمل للأصفر (الواقع أمامه مباشرة بزاوية 180°) هو البنفسجي (مزيج الأحمر والأزرق).',
    explanationEn: 'In classical RYB artists\' wheels, Violet directly opposes Yellow at 180°, creating maximum optical vibration.',
  },
];
