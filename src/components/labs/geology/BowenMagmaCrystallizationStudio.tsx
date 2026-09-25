import React, { useState } from 'react';
import {
  Flame,
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Thermometer,
  CheckCircle2,
  RotateCcw,
  Activity,
  Shield,
  Sliders,
  ChevronDown,
} from 'lucide-react';
import bowenPhoto from '../../../assets/geology/bowen_reaction_series_1928.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface BowenHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  tempRangeAr: string;
  tempRangeEn: string;
  chemicalCharacteristicsAr: string;
  chemicalCharacteristicsEn: string;
}

export const BOWEN_HOTSPOTS: BowenHotspot[] = [
  {
    id: 'discontinuous_branch',
    xPct: 22.0,
    yPct: 28.0,
    titleAr: 'الفرع غير المتصل (Discontinuous Series) — سيليكات الحديد والماغنسيوم',
    titleEn: 'Discontinuous Reaction Branch (Mafic Fe-Mg Silicates)',
    categoryAr: 'سلسلة التبلور غير المستمر للمغنيسيوم والحديد',
    categoryEn: 'Discontinuous Mafic Crystallization',
    descAr:
      'يبدأ عند 1200°م بالأوليفين (أبسط تراكيب السيليكات الأحادية)، ثم يتفاعل السائل المتبقي مع البلورات لإنتاج البيروكسين (سلاسل مفردة)، يليه الأمفيبول (سلاسل مزدوجة)، ثم البيوتيت (ميكا سوداء صفائحية). كل مرحلة تمثل معدناً ذا تركيب بلوري وكيميائي جديد كلياً.',
    descEn:
      'Begins at ~1200°C with isolated-tetrahedra Olivine, transforming sequentially through Pyroxene (single chain), Amphibole (double chain), to sheet-silicate Biotite mica. Each step produces a completely distinct crystal structure.',
    tempRangeAr: '1200°م إلى 850°م',
    tempRangeEn: '1200°C to 850°C',
    chemicalCharacteristicsAr: 'غني بالحديد (Fe) والمغنيسيوم (Mg) والكالسيوم (Ca)، وفقير بالسيليكا (SiO2 < 45%).',
    chemicalCharacteristicsEn: 'Enriched in Fe, Mg, Ca; depleted in silica (SiO2 < 45%).',
  },
  {
    id: 'continuous_branch',
    xPct: 78.0,
    yPct: 28.0,
    titleAr: 'الفرع المتصل (Continuous Series) — فلدسبار البلاجيوكليز المتدرج',
    titleEn: 'Continuous Reaction Branch (Plagioclase Feldspar Solid Solution)',
    categoryAr: 'محلول بلوري متصل لفلسبارات الكالسيوم والصوديوم',
    categoryEn: 'Continuous Solid-Solution Series',
    descAr:
      'يتبلور فيه فلدسبار البلاجيوكليز تدريجياً وبنفس الهيكل البلوري الشبكي؛ يبدأ بأنورثيت غني بالكالسيوم (Ca-Plagioclase) عند درجات الحرارة المرتفعة، ثم يُستبدل الكالسيوم تدريجياً بالصوديوم عبر محلول جامد لينتهي بألبيت نقي غني بالصوديوم (Na-Plagioclase) عند انخفاض الحرارة.',
    descEn:
      'Plagioclase feldspars undergo continuous solid-solution cation exchange within identical framework tectosilicates: from early Ca-rich Anorthite to intermediate zoned crystals, down to low-temperature Na-rich Albite.',
    tempRangeAr: '1200°م إلى 850°م',
    tempRangeEn: '1200°C to 850°C',
    chemicalCharacteristicsAr: 'استبدال أيوني تدريجي: Ca2+ + Al3+ ↔ Na+ + Si4+ مع الحفاظ على التوازن الكهربائي للشبكة البلورية.',
    chemicalCharacteristicsEn: 'Coupled ionic substitution: Ca2+ + Al3+ ↔ Na+ + Si4+ maintaining crystal charge balance.',
  },
  {
    id: 'felsic_stage',
    xPct: 50.0,
    yPct: 75.0,
    titleAr: 'المرحلة الحامضية الأخيرة (Felsic Terminus) — فلدسبار بوتاسي، موسكوفيت، كوارتز',
    titleEn: 'Final Felsic Crystallization Stage (K-Feldspar, Muscovite, Quartz)',
    categoryAr: 'نهاية تبلور الصهارة عند انخفاض الحرارة وزيادة السيليكا',
    categoryEn: 'Residual Silica-Enriched Late Melt',
    descAr:
      'بعد تجمد 50% من الصهارة واستنفاد أغلب الحديد والمغنيسيوم والكالسيوم؛ يصبح السائل المتبقي غنياً جداً بالسيليكا (SiO2 > 66%) والصوديوم والبوتاسيوم. يتبلور أولاً الفلدسبار البوتاسي (الأورثوكليز)، ثم الميكا البيضاء (الموسكوفيت)، ويتبقى السيليكا النقية لتتبلور أخيراً في صورة الكوارتز النقي عند ~750-800°م.',
    descEn:
      'Once 50% of the magma crystallizes and exhausts Fe, Mg, and Ca, the residual melt becomes heavily enriched in SiO2 (>66%), K, and Na. Orthoclase crystallizes first, followed by Muscovite mica, leaving pure SiO2 to crystallize last as Quartz at ~750°C-800°C.',
    tempRangeAr: '850°م إلى 750°م',
    tempRangeEn: '850°C to 750°C',
    chemicalCharacteristicsAr: 'نسبة سيليكا فائقة (>66%)، غنية بالبوتاسيوم (K) والألومنيوم والماء والغازات المحبوسة، لزوجة عالية.',
    chemicalCharacteristicsEn: 'Ultra-high silica (>66%), high potassium, volatile-rich, exceptionally high magma viscosity.',
  },
  {
    id: 'igneous_classification',
    xPct: 50.0,
    yPct: 92.0,
    titleAr: 'تصنيف الصخور النارية (Igneous Petrology Matrix)',
    titleEn: 'Igneous Rock Classification (Ultrabasic → Basic → Intermediate → Acidic)',
    categoryAr: 'علاقة نسبة السيليكا ومكان التبلور بنوع الصخر',
    categoryEn: 'Silica Ratio & Crystallization Depth Correlation',
    descAr:
      'تنقسم الصخور النارية منهجياً إلى 4 رتب: فوق قاعدية (<45% سيليكا مثل البيريدوتيت والكوماتيت)، قاعدية (45-55% مثل الجابرو والدوليرايت والبازلت)، متوسطة (55-66% مثل الديوريت والأنديزيت)، وحامضية (>66% مثل الجرانيت والريولايت والأوبسيديان والبيومس). مكان التبلور يحدد النسيج (جوفي خشن، متداخل بورفيري، بركاني دقيق أو زجاجي أو فقاعي).',
    descEn:
      'Standard 4-tier classification: Ultrabasic (<45% SiO2; Peridotite/Komatiite), Basic (45-55%; Gabbro/Basalt), Intermediate (55-66%; Diorite/Andesite), Acidic (>66%; Granite/Rhyolite/Obsidian/Pumice). Cooling depth dictates texture: Plutonic coarse-grained, Subvolcanic porphyritic, Volcanic fine/glassy/vesicular.',
    tempRangeAr: '1200°م إلى 700°م',
    tempRangeEn: '1200°C to 700°C',
    chemicalCharacteristicsAr: 'تدرج كثافي من 3.3 جم/سم3 (صخور فوق قاعدية داكنة) إلى 2.7 جم/سم3 (جرانيت فاتح وردي).',
    chemicalCharacteristicsEn: 'Density drops from 3.3 g/cm3 (dense dark ultramafic) to 2.7 g/cm3 (pink lightweight granite).',
  },
];

export interface IgneousRockRecord {
  id: string;
  nameAr: string;
  nameEn: string;
  silicaRange: string;
  tempAr: string;
  tempEn: string;
  colorAr: string;
  colorEn: string;
  plutonicAr: string;
  plutonicEn: string;
  hypabyssalAr: string;
  hypabyssalEn: string;
  volcanicAr: string;
  volcanicEn: string;
  mineralsAr: string;
  mineralsEn: string;
  density: string;
  feMgCa: string;
  naK: string;
}

export const IGNEOUS_ROCKS: IgneousRockRecord[] = [
  {
    id: 'ultrabasic',
    nameAr: 'صخور فوق قاعدية (Ultrabasic / Ultramafic)',
    nameEn: 'Ultrabasic / Ultramafic Rocks',
    silicaRange: '< 45%',
    tempAr: 'أعلى من 1100°م (أول ما يتبلور)',
    tempEn: '> 1100°C (First to crystallize)',
    colorAr: 'شديد السواد / أخضر زيتوني داكن',
    colorEn: 'Deep black / Dark olive green',
    plutonicAr: 'بيريدوتيت (Peridotite) — جوفي خشن',
    plutonicEn: 'Peridotite (Coarse plutonic)',
    hypabyssalAr: 'نادر تواجده متداخلاً',
    hypabyssalEn: 'Rare as hypabyssal',
    volcanicAr: 'كوماتيت (Komatiite) — بركاني نادر',
    volcanicEn: 'Komatiite (Rare volcanic)',
    mineralsAr: 'أوليفين بنسبة رئيسية + بيروكسين (خالٍ تماماً من الكوارتز والفلدسبار البوتاسي)',
    mineralsEn: 'Predominantly Olivine + Pyroxene (Zero quartz & K-feldspar)',
    density: '3.2 - 3.4 g/cm³',
    feMgCa: 'مرتفع جداً (غني بالماغنسيوم والحديد)',
    naK: 'منعدم تقريباً',
  },
  {
    id: 'basic',
    nameAr: 'صخور قاعدية (Basic / Mafic)',
    nameEn: 'Basic / Mafic Rocks',
    silicaRange: '45% - 55%',
    tempAr: 'أكثر من 1000°م إلى 1100°م',
    tempEn: '1000°C - 1100°C',
    colorAr: 'أسود غامق (داكنة اللون)',
    colorEn: 'Dark charcoal black',
    plutonicAr: 'جابرو (Gabbro) — جوفي خشن متبلور في الأعماق',
    plutonicEn: 'Gabbro (Deep plutonic coarse)',
    hypabyssalAr: 'دوليرايت (Diabase/Dolerite) — متداخل بورفيري',
    hypabyssalEn: 'Dolerite / Diabase (Porphyritic)',
    volcanicAr: 'بازلت (Basalt) — بركاني سطحي سريع التبريد الأكثر انتشاراً',
    volcanicEn: 'Basalt (Fine volcanic, oceanic crust mainstay)',
    mineralsAr: 'أوليفين، بيروكسين، بلاجيوكليز كلسي (أنورثيت)، قليل من الأمفيبول',
    mineralsEn: 'Olivine, Pyroxene, Ca-rich Plagioclase, minor Amphibole',
    density: '2.9 - 3.1 g/cm³',
    feMgCa: 'مرتفع',
    naK: 'منخفض',
  },
  {
    id: 'intermediate',
    nameAr: 'صخور متوسطة (Intermediate)',
    nameEn: 'Intermediate Rocks',
    silicaRange: '55% - 66%',
    tempAr: '900°م إلى 1000°م',
    tempEn: '900°C - 1000°C',
    colorAr: 'متوسط بين الفاتح والغامق (رمادي ملح وفلفل)',
    colorEn: 'Intermediate salt-and-pepper grey',
    plutonicAr: 'ديوريت (Diorite) — جوفي خشن',
    plutonicEn: 'Diorite (Plutonic coarse)',
    hypabyssalAr: 'ميكروديوريت (Microdiorite) — متداخل بورفيري',
    hypabyssalEn: 'Microdiorite (Porphyritic dykes)',
    volcanicAr: 'أنديزيت (Andesite) — بركاني سطحي (نسبة لجبال الأنديز)',
    volcanicEn: 'Andesite (Subduction arc volcanic)',
    mineralsAr: 'بلاجيوكليز كلسي صودي، أمفيبول، بيروكسين، بيوتيت، قليل من الكوارتز والفلدسبار البوتاسي',
    mineralsEn: 'Ca-Na Plagioclase, Amphibole, Pyroxene, Biotite, minor Quartz',
    density: '2.8 - 2.9 g/cm³',
    feMgCa: 'متوسط',
    naK: 'متوسط',
  },
  {
    id: 'acidic',
    nameAr: 'صخور حامضية (Acidic / Felsic)',
    nameEn: 'Acidic / Felsic Rocks',
    silicaRange: '> 66%',
    tempAr: 'منخفضة نسبياً: أقل من 800°م (~750°م)',
    tempEn: '< 800°C (~750°C)',
    colorAr: 'وردي فاتح أو أبيض (فاتحة اللون)',
    colorEn: 'Light pink / Pale felsic',
    plutonicAr: 'جرانيت (Granite) — جوفي خشن واسع الانتشار بالدرع العربي النوبي',
    plutonicEn: 'Granite (Massive continental pluton)',
    hypabyssalAr: 'ميكروجرانيت (Microgranite) — متداخل بورفيري',
    hypabyssalEn: 'Microgranite (Porphyritic)',
    volcanicAr: 'ريولايت (دقيق)، أوبسيديان (زجاجي أسود مكسر محاري)، بيومس (فقاعي خفيف يطفو)',
    volcanicEn: 'Rhyolite (fine), Obsidian (glassy), Pumice (vesicular)',
    mineralsAr: 'كوارتز بنسبة 25%، فلدسبار بوتاسي (أورثوكليز)، فلدسبار صودي (ألبيت)، ميكا (بيوتيت وموسكوفيت)',
    mineralsEn: 'Quartz 25%, K-Feldspar (Orthoclase), Na-Plagioclase, Mica',
    density: '2.6 - 2.7 g/cm³',
    feMgCa: 'منخفض جداً وشبه منعدم',
    naK: 'مرتفع جداً (غني بالصوديوم والبوتاسيوم والسيليكا)',
  },
];

export const BowenMagmaCrystallizationStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<BowenHotspot>(BOWEN_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [chamberTemp, setChamberTemp] = useState<number>(1050);
  const [selectedRockTab, setSelectedRockTab] = useState<string>('basic');
  const [showFullMineralMatrix, setShowFullMineralMatrix] = useState<boolean>(false);

  // Compute crystallization stages based on chamberTemp (1200 down to 700)
  const getCrystallizationProgress = (temp: number) => {
    // 1200 -> 0%, 750 -> 100%
    const pct = Math.max(0, Math.min(100, Math.round(((1200 - temp) / 450) * 100)));
    return pct;
  };

  const currentProgress = getCrystallizationProgress(chamberTemp);

  const getCrystallizingMinerals = (temp: number) => {
    if (temp >= 1150) {
      return {
        stageAr: 'مرحلة التبلور الفوق قاعدية المبكرة (Early Ultramafic)',
        stageEn: 'Early Ultramafic Crystallization',
        mineralsAr: ['أوليفين (Olivine)', 'أنورثيت كلسي نقي (Ca-Plagioclase)'],
        mineralsEn: ['Olivine', 'Pure Anorthite (Ca-rich Plagioclase)'],
        meltStatusAr: 'الصهارة مشبعة بالحديد والمغنيسيوم والكالسيوم، سيليكا منخفضة جداً (<45%).',
        meltStatusEn: 'Melt saturated with Fe, Mg, Ca; very low silica (<45%).',
        rockTypeAr: 'بيريدوتيت / كوماتيت (صخور فوق قاعدية)',
        rockTypeEn: 'Peridotite / Komatiite (Ultrabasic)',
      };
    } else if (temp >= 1000) {
      return {
        stageAr: 'مرحلة التبلور القاعدية (Mafic / Basaltic Stage)',
        stageEn: 'Mafic / Basaltic Crystallization Stage',
        mineralsAr: ['بيروكسين (Pyroxene)', 'بلاجيوكليز كلسي-صودي', 'أوليفين متبقٍ'],
        mineralsEn: ['Pyroxene', 'Calcic-Sodic Plagioclase', 'Remaining Olivine'],
        meltStatusAr: 'استمرار استهلاك Fe و Mg؛ تبلور الجابرو والبازلت عند 45-55% سيليكا.',
        meltStatusEn: 'Active depletion of Fe and Mg; Gabbro and Basalt crystallize at 45-55% SiO2.',
        rockTypeAr: 'جابرو / بازلت / دوليرايت (صخور قاعدية)',
        rockTypeEn: 'Gabbro / Basalt / Dolerite (Basic)',
      };
    } else if (temp >= 850) {
      return {
        stageAr: 'مرحلة التبلور المتوسطة (Intermediate / Andesitic Stage)',
        stageEn: 'Intermediate / Andesitic Stage',
        mineralsAr: ['أمفيبول (Amphibole)', 'بلاجيوكليز صودي', 'بيوتيت (ميكا سوداء)'],
        mineralsEn: ['Amphibole', 'Sodic Plagioclase', 'Biotite Black Mica'],
        meltStatusAr: 'تجمد 50% من الصهارة؛ استنفاد Fe و Mg و Ca بالكامل وتراكم الصوديوم والبوتاسيوم.',
        meltStatusEn: '50% magma solidified; complete exhaustion of Fe/Mg/Ca, enrichment in Na/K.',
        rockTypeAr: 'ديوريت / أنديزيت / ميكروديوريت (صخور متوسطة)',
        rockTypeEn: 'Diorite / Andesite / Microdiorite (Intermediate)',
      };
    } else {
      return {
        stageAr: 'المرحلة الحامضية الأخيرة (Late Felsic / Granitic Stage)',
        stageEn: 'Late Felsic / Granitic Stage',
        mineralsAr: [
          'فلدسبار بوتاسي (أورثوكليز)',
          'موسكوفيت (ميكا بيضاء)',
          'كوارتز (SiO2 نقي - آخر المعادن تبلوراً)',
        ],
        mineralsEn: [
          'K-Feldspar (Orthoclase)',
          'Muscovite (White Mica)',
          'Quartz (Pure SiO2 - Last to crystallize)',
        ],
        meltStatusAr: 'سيليكا فائقة التركيز (>66%)؛ تبلور الجرانيت، لزوجة قصوى وانحباس الغازات.',
        meltStatusEn: 'Ultra-concentrated silica (>66%); Granite crystallizes, peak magma viscosity.',
        rockTypeAr: 'جرانيت / ريولايت / أوبسيديان / بيومس (صخور حامضية)',
        rockTypeEn: 'Granite / Rhyolite / Obsidian / Pumice (Acidic)',
      };
    }
  };

  const activeCryst = getCrystallizingMinerals(chamberTemp);
  const activeRockRecord = IGNEOUS_ROCKS.find((r) => r.id === selectedRockTab) || IGNEOUS_ROCKS[1];

  const handleOpenModal = () => {
    setModalData({
      imageUrl: bowenPhoto,
      titleAr: 'سلسلة تفاعلات بوين لتبلور الصهارة (1928) — الوثيقة البترولوجية التاريخية',
      titleEn: "Norman L. Bowen's 1928 Reaction Series of Igneous Petrology",
      subtitleAr: 'المخطط البترولوجي المرجعي لفيزياء تبلور الصهارة وتصنيف الصخور النارية',
      subtitleEn: 'Seminal Thermodynamic Crystallization Sequence of Silicate Melts',
      descriptionAr:
        'مخطط البروفيسور نورمان بوين الصادر عام 1928 في كتابه "تطور الصخور النارية"؛ يبين تجريبياً كيف تنشأ كافة أنواع الصخور النارية (فوق القاعدية، القاعدية، المتوسطة، الحامضية) من صهارة بازلتية أصلية واحدة بفعل التبلور الجزئي واختلاف درجات انصهار السيليكات.',
      descriptionEn:
        'Norman L. Bowen’s definitive 1928 experimental diagram from "The Evolution of the Igneous Rocks", demonstrating fractional crystallization of silicate melts from high-temperature mafic branches down to low-temperature felsic eutectics.',
      locationAr: 'معهد كارنيجي للعلوم بواشنطن / معامل الفيزياء الجيولوجية',
      locationEn: 'Carnegie Institution for Science, Geophysical Laboratory, Washington D.C.',
      dateOrEraAr: '1928 ميلادية (العصر الذهبي للبترولوجيا التجريبية)',
      dateOrEraEn: '1928 CE (Golden Era of Experimental Petrology)',
    });
  };

  return (
    <div
      className={`rounded-2xl border p-5 md:p-8 transition-all ${
        isContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : isLight
          ? 'bg-amber-50/40 text-stone-900 border-amber-200 shadow-sm'
          : 'bg-stone-950/80 text-stone-100 border-amber-900/50 shadow-2xl backdrop-blur-md'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 border-amber-500/20">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                isContrast
                  ? 'bg-amber-400 text-black'
                  : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              {isArabic ? 'متحف البترولوجيا النارية 1928' : '1928 Petrological Reaction Archive'}
            </span>
            <span className="text-xs text-amber-500/80 font-mono">
              {isArabic ? 'وثيقة د. نورمان بوين الأصلية' : 'Dr. Norman Bowen 1928 Document'}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            {isArabic
              ? 'استوديو تفاعلات بوين وتبلور الصهارة النارية'
              : "Bowen's Reaction Series & Magma Crystallization Studio"}
          </h2>
          <p className="text-sm mt-1 text-stone-400 max-w-3xl leading-relaxed">
            {isArabic
              ? 'استكشف المخطط البترولوجي التاريخي لعام 1928، ومحاكي غرفة تبريد الصهارة من 1200°م حتى 750°م، والمصفوفة المنهجية الكاملة لتصنيف الصخور النارية (فوق قاعدية، قاعدية، متوسطة، حامضية) طبقاً لمنهج الجيولوجيا المصري.'
              : 'Explore the 1928 seminal petrological diagram, dynamic magma cooling simulator (1200°C to 750°C), and the Egyptian national curriculum 4-tier igneous classification matrix.'}
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md ${
            isContrast
              ? 'bg-amber-400 text-black hover:bg-amber-300'
              : 'bg-amber-600 hover:bg-amber-500 text-white hover:shadow-amber-500/25'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'معاينة الوثيقة بوضوح 4K' : 'View 4K Archival Document'}</span>
        </button>
      </div>

      {/* Main Grid: Interactive Canvas & Hotspot Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left: 4K Archival Photographic Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div
            className={`relative rounded-xl overflow-hidden border shadow-inner group ${
              isContrast ? 'border-amber-400 bg-black' : 'border-amber-900/40 bg-stone-900'
            }`}
            style={{ minHeight: '380px' }}
          >
            <img
              src={bowenPhoto}
              alt="Bowen Reaction Series 1928"
              className="w-full h-auto object-contain max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Hotspot Markers */}
            {BOWEN_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
                  aria-label={isArabic ? spot.titleAr : spot.titleEn}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isSelected
                      ? 'ring-4 ring-orange-500 bg-amber-400 text-stone-950 scale-125 shadow-xl'
                      : 'bg-stone-900/90 text-amber-300 border border-amber-400/70 hover:scale-110 hover:bg-amber-500 hover:text-black'
                  }`}
                >
                  <Flame className={`w-4 h-4 ${isSelected ? 'animate-pulse' : ''}`} />
                  <span className="sr-only">{isArabic ? spot.titleAr : spot.titleEn}</span>
                </button>
              );
            })}

            {/* Canvas Overlay Badge */}
            <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30 text-xs text-amber-200/90 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {isArabic
                  ? 'انقر على نقاط الفرع المتصل وغير المتصل لاستكشاف التفاعل'
                  : 'Click branch hotspots to inspect reaction thermodynamics'}
              </span>
            </div>
          </div>

          {/* Quick Select Buttons under Canvas */}
          <div className="flex flex-wrap gap-2 pt-1">
            {BOWEN_HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setSelectedHotspot(spot)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all border ${
                  selectedHotspot.id === spot.id
                    ? isContrast
                      ? 'bg-amber-400 text-black border-amber-400'
                      : 'bg-amber-600 text-white border-amber-500 shadow-sm'
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
                ? 'bg-white border-amber-200 shadow-sm'
                : 'bg-stone-900/70 border-amber-900/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b pb-3 mb-3 border-amber-500/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
                </span>
                <span className="text-xs font-mono bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
                  {isArabic ? selectedHotspot.tempRangeAr : selectedHotspot.tempRangeEn}
                </span>
              </div>

              <h3 className="text-lg font-black text-amber-400 mb-2">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </h3>

              <p className="text-sm leading-relaxed text-stone-300 mb-4">
                {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
              </p>

              <div
                className={`p-3.5 rounded-lg border text-xs leading-relaxed space-y-2 ${
                  isLight
                    ? 'bg-amber-50/80 border-amber-200 text-stone-800'
                    : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 text-amber-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'الخصائص الجيوكيميائية والبلورية:' : 'Geochemical & Crystal Attributes:'}</span>
                </div>
                <div>
                  {isArabic
                    ? selectedHotspot.chemicalCharacteristicsAr
                    : selectedHotspot.chemicalCharacteristicsEn}
                </div>
              </div>
            </div>

            {/* Curriculum Rule Banner */}
            <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {isArabic ? 'قاعدة ثانوية عامة: أول المعادن تبلوراً الأوليفين وآخرها الكوارتز' : 'Curriculum Rule: Olivine first, Quartz last'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Magma Cooling Chamber Dynamic Lab */}
      <div
        className={`my-8 p-6 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-amber-400'
            : isLight
            ? 'bg-stone-50 border-amber-200 shadow-sm'
            : 'bg-stone-900/60 border-amber-800/40'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-600 to-amber-700 text-white shadow-md">
              <Thermometer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black flex items-center gap-2">
                <span>{isArabic ? 'محاكي غرفة تبريد الصهارة (Magma Cooling Chamber)' : 'Dynamic Magma Cooling Chamber Simulator'}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono">
                  {chamberTemp}°C
                </span>
              </h3>
              <p className="text-xs text-stone-400">
                {isArabic
                  ? 'حرك مؤشر درجة الحرارة لتتبع تسلسل تبلور المعادن ومحتوى الصهارة المتبقية'
                  : 'Adjust temperature to observe sequential crystallization & residual melt chemistry'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setChamberTemp(1050)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
              isLight
                ? 'bg-stone-200 text-stone-800 hover:bg-stone-300 border-stone-300'
                : 'bg-stone-800 text-stone-200 hover:bg-stone-700 border-stone-700'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isArabic ? 'إعادة ضبط (1050°م)' : 'Reset (1050°C)'}</span>
          </button>
        </div>

        {/* Temperature Range Slider */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-red-400 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" />
              1200°م ({isArabic ? 'صهارة بازلتية أولية' : 'Early Basaltic Melt'})
            </span>
            <span className="text-amber-400 font-mono text-sm font-black">
              {chamberTemp}°م &bull; {isArabic ? `اكتمل تبلور ${currentProgress}%` : `${currentProgress}% Solidified`}
            </span>
            <span className="text-sky-400 flex items-center gap-1">
              700°م ({isArabic ? 'صهارة جرانيتية أخيرة' : 'Late Felsic Residual'})
              <Activity className="w-3.5 h-3.5" />
            </span>
          </div>

          <input
            type="range"
            min="700"
            max="1200"
            step="10"
            value={chamberTemp}
            onChange={(e) => setChamberTemp(Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-red-600 via-amber-500 to-sky-500 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />

          <div className="flex justify-between text-[11px] text-stone-400 font-mono px-1">
            <span>1200°C</span>
            <span>1100°C</span>
            <span>1000°C</span>
            <span>900°C</span>
            <span>800°C</span>
            <span>700°C</span>
          </div>
        </div>

        {/* Dynamic Status Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
            }`}
          >
            <div className="text-xs font-bold text-amber-500 mb-1 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              {isArabic ? 'المرحلة البترولوجية النشطة:' : 'Active Petrological Stage:'}
            </div>
            <div className="text-sm font-black text-amber-300">{isArabic ? activeCryst.stageAr : activeCryst.stageEn}</div>
            <div className="text-xs text-stone-400 mt-2">{isArabic ? activeCryst.meltStatusAr : activeCryst.meltStatusEn}</div>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
            }`}
          >
            <div className="text-xs font-bold text-emerald-500 mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {isArabic ? 'المعادن المتبلورة حالياً:' : 'Actively Crystallizing Minerals:'}
            </div>
            <ul className="text-xs space-y-1.5 mt-1.5">
              {(isArabic ? activeCryst.mineralsAr : activeCryst.mineralsEn).map((min, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-stone-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                  {min}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
            }`}
          >
            <div className="text-xs font-bold text-sky-400 mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              {isArabic ? 'الصخور الناتجة المقابلة:' : 'Resulting Equivalent Rocks:'}
            </div>
            <div className="text-sm font-black text-sky-300">{isArabic ? activeCryst.rockTypeAr : activeCryst.rockTypeEn}</div>
            <div className="text-xs text-stone-400 mt-2">
              {isArabic
                ? 'تختلف مسميات الصخور باختلاف سرعة التبريد (جوفي في باطن الأرض أو بركاني على السطح).'
                : 'Rock names vary with cooling rate (deep plutonic vs fast volcanic surface).'}
            </div>
          </div>
        </div>
      </div>

      {/* 4-Tier Igneous Rock Matrix (منهج الجيولوجيا المصري للثانوية العامة) */}
      <div className="mt-8 border-t pt-6 border-amber-500/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xl font-black text-amber-400 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-500" />
              <span>{isArabic ? 'مصفوفة تصنيف الصخور النارية (منهج الثانوية العامة)' : '4-Tier Igneous Rock Classification Matrix'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic
                ? 'التصنيف المعتمد حسب نسبة السيليكا ومكان التبلور (جوفي خشن / متداخل بورفيري / بركاني سطحي)'
                : 'National Curriculum Standard: Classified by Silica Ratio & Crystallization Depth (Plutonic / Hypabyssal / Volcanic)'}
            </p>
          </div>

          <button
            onClick={() => setShowFullMineralMatrix(!showFullMineralMatrix)}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
              isLight
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-amber-950/40 text-amber-300 border-amber-500/30 hover:bg-amber-900/50'
            }`}
          >
            <span>{showFullMineralMatrix ? (isArabic ? 'طي التفاصيل' : 'Collapse') : (isArabic ? 'عرض المقارنة الشاملة' : 'Full Comparison Table')}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFullMineralMatrix ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-4">
          {IGNEOUS_ROCKS.map((rock) => (
            <button
              key={rock.id}
              onClick={() => setSelectedRockTab(rock.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedRockTab === rock.id
                  ? isContrast
                    ? 'bg-amber-400 text-black border-amber-400'
                    : 'bg-amber-600 text-white border-amber-500 shadow-md'
                  : isLight
                  ? 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                  : 'bg-stone-900/70 text-stone-300 border-stone-800 hover:bg-stone-800'
              }`}
            >
              {isArabic ? rock.nameAr.split('(')[0] : rock.nameEn.split('(')[0]}
              <span className="ml-1 opacity-75 font-mono">({rock.silicaRange})</span>
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div
          className={`p-5 rounded-xl border ${
            isContrast
              ? 'bg-stone-950 border-amber-400'
              : isLight
              ? 'bg-white border-amber-200 shadow-sm'
              : 'bg-stone-900/50 border-amber-900/30'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1">
              <span className="text-xs text-stone-400">{isArabic ? 'نسبة السيليكا (SiO2):' : 'Silica Content:'}</span>
              <div className="text-sm font-black text-amber-400 font-mono">{activeRockRecord.silicaRange}</div>
              <div className="text-xs text-stone-300">{isArabic ? activeRockRecord.tempAr : activeRockRecord.tempEn}</div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-stone-400">{isArabic ? 'لون الصخر والكثافة:' : 'Color & Density:'}</span>
              <div className="text-sm font-bold text-stone-200">{isArabic ? activeRockRecord.colorAr : activeRockRecord.colorEn}</div>
              <div className="text-xs font-mono text-stone-400">{activeRockRecord.density}</div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-stone-400">{isArabic ? 'المعادن المكونة:' : 'Mineral Constituents:'}</span>
              <div className="text-xs leading-relaxed text-stone-200 font-medium">
                {isArabic ? activeRockRecord.mineralsAr : activeRockRecord.mineralsEn}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-stone-400">{isArabic ? 'العناصر الكيميائية السائدة:' : 'Major Elements:'}</span>
              <div className="text-xs text-amber-300 font-bold">{isArabic ? activeRockRecord.feMgCa : activeRockRecord.feMgCa}</div>
              <div className="text-xs text-sky-300">{isArabic ? activeRockRecord.naK : activeRockRecord.naK}</div>
            </div>
          </div>

          {/* Depth Equivalents Sub-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-amber-500/20">
            <div
              className={`p-3 rounded-lg border ${
                isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950/60 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-amber-500 mb-1">
                {isArabic ? '1. صخر جوفي (نسيج خشن تبريد بطيء في العمق):' : '1. Plutonic (Coarse / Deep Slow Cooling):'}
              </div>
              <div className="text-sm font-black text-stone-200">
                {isArabic ? activeRockRecord.plutonicAr : activeRockRecord.plutonicEn}
              </div>
            </div>

            <div
              className={`p-3 rounded-lg border ${
                isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950/60 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-amber-500 mb-1">
                {isArabic ? '2. صخر متداخل (نسيج بورفيري تبريد على مرحلتين):' : '2. Hypabyssal (Porphyritic / Two-Stage Cooling):'}
              </div>
              <div className="text-sm font-black text-stone-200">
                {isArabic ? activeRockRecord.hypabyssalAr : activeRockRecord.hypabyssalEn}
              </div>
            </div>

            <div
              className={`p-3 rounded-lg border ${
                isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950/60 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-amber-500 mb-1">
                {isArabic ? '3. صخر بركاني سطحي (نسيج دقيق/زجاجي تبريد سريع):' : '3. Volcanic (Fine / Glassy / Vesicular Fast):'}
              </div>
              <div className="text-sm font-black text-stone-200">
                {isArabic ? activeRockRecord.volcanicAr : activeRockRecord.volcanicEn}
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Full Comparison Matrix Table */}
        {showFullMineralMatrix && (
          <div className="mt-4 overflow-x-auto rounded-xl border border-amber-500/20">
            <table className="w-full text-xs text-right border-collapse">
              <thead>
                <tr className={isLight ? 'bg-amber-100 text-stone-900' : 'bg-stone-900 text-amber-300'}>
                  <th className="p-2.5 border-b border-amber-500/20">{isArabic ? 'رتبة الصخر' : 'Rock Class'}</th>
                  <th className="p-2.5 border-b border-amber-500/20">{isArabic ? 'نسبة السيليكا' : 'Silica %'}</th>
                  <th className="p-2.5 border-b border-amber-500/20">{isArabic ? 'حرارة التبلور' : 'Cryst Temp'}</th>
                  <th className="p-2.5 border-b border-amber-500/20">{isArabic ? 'جوفي (خشن)' : 'Plutonic'}</th>
                  <th className="p-2.5 border-b border-amber-500/20">{isArabic ? 'متداخل (بورفيري)' : 'Hypabyssal'}</th>
                  <th className="p-2.5 border-b border-amber-500/20">{isArabic ? 'سطحي (بركاني)' : 'Volcanic'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-500/10">
                {IGNEOUS_ROCKS.map((r) => (
                  <tr
                    key={r.id}
                    className={`hover:bg-amber-500/10 transition-colors ${
                      selectedRockTab === r.id ? 'bg-amber-500/15 font-bold' : ''
                    }`}
                  >
                    <td className="p-2.5">{isArabic ? r.nameAr.split('(')[0] : r.nameEn.split('(')[0]}</td>
                    <td className="p-2.5 font-mono">{r.silicaRange}</td>
                    <td className="p-2.5">{isArabic ? r.tempAr : r.tempEn}</td>
                    <td className="p-2.5">{isArabic ? r.plutonicAr.split('(')[0] : r.plutonicEn.split('(')[0]}</td>
                    <td className="p-2.5">{isArabic ? r.hypabyssalAr.split('(')[0] : r.hypabyssalEn.split('(')[0]}</td>
                    <td className="p-2.5">{isArabic ? r.volcanicAr.split('(')[0] : r.volcanicEn.split('(')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
