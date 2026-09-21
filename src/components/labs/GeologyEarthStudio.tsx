import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Mountain,
  Gem,
  Flame,
  Activity,
  Layers,
  Compass,
  RotateCcw,
  Droplets,
  Sun,
  ShieldCheck,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialMode?: 'crystals' | 'bowen' | 'tectonics' | 'stratigraphy' | 'ecosystem';
}

type StudioMode = 'crystals' | 'bowen' | 'tectonics' | 'stratigraphy' | 'ecosystem';

export const GeologyEarthStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialMode = 'crystals',
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
  // Mode 1: 7 Crystal Systems & Mohs Hardness Scratch Tester
  // -------------------------------------------------------------
  const [selectedSystem, setSelectedSystem] = useState<string>('cubic');
  const [selectedMineral, setSelectedMineral] = useState<number>(7); // Quartz (Mohs 7)
  const [selectedScratchTool, setSelectedScratchTool] = useState<number>(5.5); // Glass Slide (5.5)

  const crystalSystemsData: Record<
    string,
    {
      nameEn: string;
      nameAr: string;
      axesEn: string;
      axesAr: string;
      anglesEn: string;
      anglesAr: string;
      symmetryEn: string;
      symmetryAr: string;
      examplesEn: string;
      examplesAr: string;
      wireframe: { w: number; h: number; skewX: number; skewY: number };
    }
  > = {
    cubic: {
      nameEn: 'Cubic / Isometric System',
      nameAr: 'النظام المكعبي',
      axesEn: 'a1 = a2 = a3 (Three equal axes)',
      axesAr: 'أ١ = أ٢ = أ٣ (ثلاثة محاور متساوية تماماً)',
      anglesEn: 'α = β = γ = 90° (Mutually perpendicular)',
      anglesAr: 'ألفا = بيتا = جاما = ٩٠° (محاور متعامدة الزوايا)',
      symmetryEn: 'Highest degree of crystallographic symmetry (9 planes of symmetry)',
      symmetryAr: 'أعلى درجات التماثل البلوري (٩ مستويات تماثل)',
      examplesEn: 'Halite (NaCl), Galena (PbS), Pyrite',
      examplesAr: 'ملح الطعام الهاليت، الجالينا، البيريت',
      wireframe: { w: 120, h: 120, skewX: 0, skewY: 0 }
    },
    tetragonal: {
      nameEn: 'Tetragonal System',
      nameAr: 'النظام الرباعي',
      axesEn: 'a1 = a2 ≠ c (Two equal horizontal, unequal vertical c)',
      axesAr: 'أ١ = أ٢ ≠ جـ (محوران أفقيان متساويان ومحور رأسي مختلف)',
      anglesEn: 'α = β = γ = 90° (Mutually perpendicular)',
      anglesAr: 'ألفا = بيتا = جاما = ٩٠° (محاور متعامدة الزوايا)',
      symmetryEn: 'High symmetry with vertical four-fold axis of rotation',
      symmetryAr: 'تماثل بلوري رباعي حول المحور الرأسي جـ',
      examplesEn: 'Zircon, Chalcopyrite, Rutile',
      examplesAr: 'الزيركون، الشالكوبيريت، الروتيل',
      wireframe: { w: 100, h: 160, skewX: 0, skewY: 0 }
    },
    orthorhombic: {
      nameEn: 'Orthorhombic System',
      nameAr: 'النظام المعيني القائم',
      axesEn: 'a ≠ b ≠ c (Three unequal axes)',
      axesAr: 'أ ≠ ب ≠ جـ (ثلاثة محاور مختلفة الأطوال)',
      anglesEn: 'α = β = γ = 90° (Mutually perpendicular)',
      anglesAr: 'ألفا = بيتا = جاما = ٩٠° (محاور متعامدة الزوايا)',
      symmetryEn: 'Moderate symmetry with three perpendicular two-fold axes',
      symmetryAr: 'تماثل معيني قائم بمحاور متعامدة مختلفة الأطوال',
      examplesEn: 'Barite, Sulfur, Olivine, Topaz',
      examplesAr: 'الباريت، الكبريت، الأوليفين، التوباز',
      wireframe: { w: 140, h: 100, skewX: 0, skewY: 0 }
    },
    monoclinic: {
      nameEn: 'Monoclinic System',
      nameAr: 'نظام أحادي الميل',
      axesEn: 'a ≠ b ≠ c (Three unequal axes)',
      axesAr: 'أ ≠ ب ≠ جـ (ثلاثة محاور مختلفة الأطوال)',
      anglesEn: 'α = γ = 90° ≠ β (Two angles perpendicular, one oblique)',
      anglesAr: 'ألفا = جاما = ٩٠° ≠ بيتا (محوران متعامدان والثالث مائل)',
      symmetryEn: 'Single two-fold axis and one mirror plane. Most minerals belong to this system (>60%)',
      symmetryAr: 'تنتمي إليه معظم وأغلبية المعادن المعروفة في صخور القشرة الأرضية (> ٦٠٪)',
      examplesEn: 'Orthoclase Feldspar, Gypsum, Mica, Hornblende',
      examplesAr: 'الفلسبار الأرثوكليز، الجبس، الميكا، الهورنبلند',
      wireframe: { w: 120, h: 110, skewX: -15, skewY: 0 }
    },
    triclinic: {
      nameEn: 'Triclinic System',
      nameAr: 'نظام ثلاثي الميل',
      axesEn: 'a ≠ b ≠ c (Three unequal axes)',
      axesAr: 'أ ≠ ب ≠ جـ (ثلاثة محاور مختلفة الأطوال)',
      anglesEn: 'α ≠ β ≠ γ ≠ 90° (All three angles oblique and unequal)',
      anglesAr: 'ألفا ≠ بيتا ≠ جاما ≠ ٩٠° (جميع الزوايا غير متعامدة ومائلة)',
      symmetryEn: 'Lowest crystallographic symmetry (no planes of symmetry, center of inversion only)',
      symmetryAr: 'أقل الأنظمة تماثلاً بلورياً على الإطلاق لانعدام التعامد والتساوي',
      examplesEn: 'Microcline Feldspar, Plagioclase, Albite',
      examplesAr: 'الميكروكلين، الفلسبار البلاجيوكليزي، الألبيت',
      wireframe: { w: 130, h: 110, skewX: -20, skewY: -10 }
    },
    hexagonal: {
      nameEn: 'Hexagonal System (4-Axis)',
      nameAr: 'النظام السداسي (رباعي المحاور)',
      axesEn: 'a1 = a2 = a3 ≠ c (3 equal horizontal axes at 120°, 1 vertical perpendicular c)',
      axesAr: 'أ١ = أ٢ = أ٣ ≠ جـ (٣ محاور أفقية متساوية تتقاطع بزوايا ١٢٠° ومحور رأسي متعامد)',
      anglesEn: 'Horizontal angles = 120°, vertical angle with horizontals = 90°',
      anglesAr: 'الزوايا الأفقية = ١٢٠°، والمحور الرأسي يصنع ٩٠° مع الأفقيات',
      symmetryEn: 'Has a distinct horizontal plane of symmetry (مستوى تماثل أفقي)',
      symmetryAr: 'يحتوي على مستوى تماثل أفقي يقسم البلورة لنصفين متطابقين تماماً',
      examplesEn: 'Beryl, Apatite, Graphite',
      examplesAr: 'الزمرد (البريل)، الأباتيت، الجرافيت',
      wireframe: { w: 120, h: 150, skewX: 0, skewY: 0 }
    },
    trigonal: {
      nameEn: 'Trigonal System (4-Axis)',
      nameAr: 'النظام الثلاثي (رباعي المحاور)',
      axesEn: 'a1 = a2 = a3 ≠ c (3 equal horizontal axes at 120°, 1 vertical perpendicular c)',
      axesAr: 'أ١ = أ٢ = أ٣ ≠ جـ (٣ محاور أفقية متساوية تتقاطع بزوايا ١٢٠° ومحور رأسي متعامد)',
      anglesEn: 'Horizontal angles = 120°, vertical angle with horizontals = 90°',
      anglesAr: 'الزوايا الأفقية = ١٢٠°، والمحور الرأسي يصنع ٩٠° مع الأفقيات',
      symmetryEn: 'LACKS a horizontal plane of symmetry (لا يحتوي على مستوى تماثل أفقي)',
      symmetryAr: 'لا يحتوي على مستوى تماثل أفقي (الفارق الجوهري عن النظام السداسي)',
      examplesEn: 'Quartz (SiO2), Calcite (CaCO3), Tourmaline',
      examplesAr: 'الكوارتز (المرو)، الكالسيت (كربونات الكالسيوم)، التورمالين',
      wireframe: { w: 110, h: 140, skewX: 0, skewY: 0 }
    }
  };

  const mohsMinerals = [
    { rank: 1, nameEn: 'Talc', nameAr: 'التلك', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Pearly / Greasy', lusterAr: 'لؤلؤي / دهني' },
    { rank: 2, nameEn: 'Gypsum', nameAr: 'الجبس', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Silky / Pearly', lusterAr: 'حريري / لؤلؤي' },
    { rank: 3, nameEn: 'Calcite', nameAr: 'الكالسيت', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 4, nameEn: 'Fluorite', nameAr: 'الفلوريت', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 5, nameEn: 'Apatite', nameAr: 'الأباتيت', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 6, nameEn: 'Orthoclase', nameAr: 'الأرثوكليز', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Pearly / Vitreous', lusterAr: 'لؤلؤي' },
    { rank: 7, nameEn: 'Quartz', nameAr: 'الكوارتز (المرو)', streakEn: 'White (Constant)', streakAr: 'أبيض ثابت لا يتغير', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 8, nameEn: 'Topaz', nameAr: 'التوباز', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 9, nameEn: 'Corundum', nameAr: 'الكوراندوم (الياقوت)', streakEn: 'Colorless', streakAr: 'عديم اللون', lusterEn: 'Adamantine to Vitreous', lusterAr: 'ماسي إلى زجاجي' },
    { rank: 10, nameEn: 'Diamond', nameAr: 'الماس', streakEn: 'Colorless', streakAr: 'عديم اللون', lusterEn: 'Adamantine (Ultra-brilliant)', lusterAr: 'ماسي ناصع شديد التلألؤ' }
  ];

  const scratchTools = [
    { hardness: 2.5, nameEn: 'Human Fingernail (2.5)', nameAr: 'ظفر الإنسان (٢٫٥)' },
    { hardness: 3.5, nameEn: 'Copper Coin (3.5)', nameAr: 'عملة نحاسية (٣٫٥)' },
    { hardness: 5.5, nameEn: 'Window Glass Slide (5.5)', nameAr: 'قطعة زجاج نافذة (٥٫٥)' },
    { hardness: 6.5, nameEn: 'Streak Plate / Steel File (6.5)', nameAr: 'لوح المخدش الخزفي / مبرد صلب (٦٫٥)' }
  ];

  const currentMineralObj = mohsMinerals.find(m => m.rank === selectedMineral) || mohsMinerals[6];
  const isMineralScratched = selectedScratchTool > currentMineralObj.rank;

  // -------------------------------------------------------------
  // Mode 2: Bowen's Reaction Series & Igneous Petrology Suite
  // -------------------------------------------------------------
  const [bowenTemp, setBowenTemp] = useState<number>(950); // Celsius (1200 to 750)
  const [selectedRock, setSelectedRock] = useState<string>('granite');

  const rockCatalog: Record<
    string,
    {
      nameEn: string;
      nameAr: string;
      type: 'ultrabasic' | 'basic' | 'intermediate' | 'acidic';
      origin: 'plutonic' | 'hypabyssal' | 'volcanic';
      silica: string;
      tempC: string;
      textureEn: string;
      textureAr: string;
      colorEn: string;
      colorAr: string;
      mineralsEn: string;
      mineralsAr: string;
    }
  > = {
    peridotite: {
      nameEn: 'Peridotite',
      nameAr: 'بيريدوتيت',
      type: 'ultrabasic',
      origin: 'plutonic',
      silica: '< 45% (Ultrabasic)',
      tempC: '> 1100°C',
      textureEn: 'Coarse-grained (Phaneritic)',
      textureAr: 'خشن التبلور، بلورات كبيرة الحجم',
      colorEn: 'Dark Greenish Black (High Fe, Mg)',
      colorAr: 'شديد السواد مائل للخضرة (غني بالحديد والماغنسيوم)',
      mineralsEn: 'Olivine (dominant) + Pyroxene',
      mineralsAr: 'أوليفين (غالب) + بيروكسين'
    },
    basalt: {
      nameEn: 'Basalt',
      nameAr: 'بازلت',
      type: 'basic',
      origin: 'volcanic',
      silica: '45% - 52% (Basic)',
      tempC: '~ 1100°C',
      textureEn: 'Fine-grained (Aphanitic) or Glassy',
      textureAr: 'دقيق التبلور أو زجاجي التبريد السريع',
      colorEn: 'Dark Black (Dominates ocean floors)',
      colorAr: 'أسود داكن (الصخر السائد في قيعان المحيطات والسيما)',
      mineralsEn: 'Pyroxene, Ca-Plagioclase, Olivine, Amphibole',
      mineralsAr: 'بيروكسين، بلاجيوكليز كلسي، أوليفين، أمفيبول'
    },
    gabbro: {
      nameEn: 'Gabbro',
      nameAr: 'جابرو',
      type: 'basic',
      origin: 'plutonic',
      silica: '45% - 52% (Basic)',
      tempC: '~ 1100°C',
      textureEn: 'Coarse-grained (Deep intrusive)',
      textureAr: 'خشن التبلور (جوفي يبرد ببطء في باطن الأرض)',
      colorEn: 'Dark Gray to Black',
      colorAr: 'رمادي داكن إلى أسود',
      mineralsEn: 'Pyroxene, Ca-Plagioclase, Olivine',
      mineralsAr: 'بيروكسين، بلاجيوكليز كلسي، أوليفين'
    },
    andesite: {
      nameEn: 'Andesite',
      nameAr: 'أنديزيت',
      type: 'intermediate',
      origin: 'volcanic',
      silica: '52% - 66% (Intermediate)',
      tempC: '~ 900°C - 1000°C',
      textureEn: 'Fine-grained / Porphyritic',
      textureAr: 'دقيق التبلور أو بورفيري (نسبة لجبال الأنديز البركانية)',
      colorEn: 'Intermediate Medium Gray',
      colorAr: 'رمادي متوسط بين الفاتح والداكن',
      mineralsEn: 'Plagioclase, Amphibole, Pyroxene, Biotite',
      mineralsAr: 'بلاجيوكليز، أمفيبول، بيروكسين، بيوتيت'
    },
    granite: {
      nameEn: 'Granite',
      nameAr: 'جرانيت',
      type: 'acidic',
      origin: 'plutonic',
      silica: '> 66% (Acidic)',
      tempC: '~ 750°C - 800°C',
      textureEn: 'Coarse-grained (Continental shield builder)',
      textureAr: 'خشن التبلور، بلورات واضحة ترى بالعين المجردة',
      colorEn: 'Light Pink to Reddish (Abundant K-Feldspar)',
      colorAr: 'وردي فاتح (لوفرة فلسبار البوتاسيوم الأرثوكليز والكوارتز)',
      mineralsEn: 'Quartz (~25%), K-Feldspar, Plagioclase, Muscovite/Biotite',
      mineralsAr: 'كوارتز (٢٥٪)، فلسبار بوتاسي، ميكا، بلاجيوكليز صودي'
    },
    pumice: {
      nameEn: 'Pumice',
      nameAr: 'بيومس (حجر الخفاف)',
      type: 'acidic',
      origin: 'volcanic',
      silica: '> 66% (Acidic)',
      tempC: '~ 750°C',
      textureEn: 'Vesicular (Trapped gas bubbles, floats on water)',
      textureAr: 'فقاعي مليء بالثقوب الهوائية يطفو فوق سطح الماء',
      colorEn: 'Light Gray to Pale Pink',
      colorAr: 'رمادي فاتح شاحب وخفيف الوزن جداً',
      mineralsEn: 'Glassy acidic volcanic magma froth',
      mineralsAr: 'زجاج صخري بركاني حامضي فقاعي غازي'
    },
    obsidian: {
      nameEn: 'Obsidian',
      nameAr: 'أوبسيديان (الزجاج البركاني)',
      type: 'acidic',
      origin: 'volcanic',
      silica: '> 66% (Acidic)',
      tempC: '~ 750°C',
      textureEn: 'Glassy non-crystalline (Instant quench)',
      textureAr: 'عديم التبلور زجاجي أملس (تبريد فوري في الهواء)',
      colorEn: 'Glossy Pitch Black with Conchoidal Fracture',
      colorAr: 'أسود لامع براق بمكسر محاري حاد القواطع',
      mineralsEn: 'Rapidly frozen silica-rich volcanic lava',
      mineralsAr: 'حمم بركانية حامضية تجمدت لحظياً دون تبلور'
    }
  };

  const currentRockObj = rockCatalog[selectedRock] || rockCatalog.granite;

  // -------------------------------------------------------------
  // Mode 3: Plate Tectonics & Airy's Isostasy Simulator
  // -------------------------------------------------------------
  const [riftTimeMillionYears, setRiftTimeMillionYears] = useState<number>(25); // 25 Ma since Red Sea initiation
  const [mountainElevation, setMountainElevation] = useState<number>(2629); // Mount Catherine in Sinai (2,629m)

  const redSeaWidthKm = (riftTimeMillionYears * 1_000_000 * 2.5) / 100_000; // 2.5 cm/yr converted to km
  const mountainRootDepth = mountainElevation * 4;
  const totalMountainCrust = mountainElevation * 5;

  // -------------------------------------------------------------
  // Mode 4: Stratigraphic Cross-Section & Geological History Solver
  // -------------------------------------------------------------
  const [foldCompression, setFoldCompression] = useState<number>(50); // 0 (flat) to 100 (intense folding)
  const [faultThrow, setFaultThrow] = useState<number>(30); // displacement throw in px
  const [hasBasaltDyke, setHasBasaltDyke] = useState<boolean>(true);
  const [hasUpperUnconformity, setHasUpperUnconformity] = useState<boolean>(true);

  // -------------------------------------------------------------
  // Mode 5: Marine Hydrostatic Pressure & Ecosystem Energy Pyramid
  // -------------------------------------------------------------
  const [oceanDepthMeters, setOceanDepthMeters] = useState<number>(200); // 0 to 11000m
  const [baseSolarEnergyKcal, setBaseSolarEnergyKcal] = useState<number>(100_000); // Level 1 Phytoplankton

  const hydrostaticPressureAtm = (oceanDepthMeters / 10) + 1;
  const lightPercent = oceanDepthMeters <= 200 ? Math.max(1, 100 - (oceanDepthMeters * 0.49)) : (oceanDepthMeters <= 500 ? Math.max(0.01, 2 - ((oceanDepthMeters - 200) * 0.0066)) : 0);
  
  const getMarineZone = (depth: number) => {
    if (depth <= 200) return { en: 'Photic Continental Shelf Zone (المنطقة الشاطئية والرف القاري)', ar: 'منطقة المياه الضحلة والرف القاري المضيئة' };
    if (depth <= 2000) return { en: 'Bathyal Continental Slope Zone (المنحدر القاري)', ar: 'منطقة حافة الأعماق والمنحدر القاري' };
    return { en: 'Abyssal Deep Ocean Floor Zone (الأعماق السحيقة)', ar: 'منطقة الأعماق السحيقة شديدة البرودة والظلام' };
  };

  // Card theme classes
  const containerBg = isLight
    ? 'bg-stone-50 border-stone-200 text-stone-900'
    : isContrast
    ? 'bg-black border-yellow-400 text-yellow-300'
    : 'bg-stone-950 border-stone-800 text-stone-100';

  const cardBg = isLight
    ? 'bg-white border-stone-200 shadow-sm'
    : isContrast
    ? 'bg-stone-950 border-yellow-400'
    : 'bg-stone-900/70 border-stone-800';

  return (
    <div className={`flex flex-col w-full rounded-2xl border ${containerBg} p-4 md:p-6 transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto rounded-none p-4 md:p-6' : ''}`} data-fullscreen-lab={isFullscreen ? 'true' : undefined} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Studio Header */}
      <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-600 via-stone-700 to-emerald-700 text-white shadow-lg shadow-amber-900/20">
            <Mountain className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <span className={isLight ? 'text-stone-900 font-extrabold' : ''}>{isArabic ? 'استوديو علوم الأرض والبيئة التفاعلي' : 'Earth Science & Environmental Studio'}</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${isLight ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
                {isArabic ? 'الجيولوجيا الرسمية' : 'Official Geology & Eco'}
              </span>
            </h2>
            <p className={`text-xs md:text-sm ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
              {isArabic
                ? 'محاكاة تفاعلية للأنظمة البلورية السبعة، متسلسلة بوين، تكتونية الصفائح، القطاعات الطبقية، وهرم الطاقة البيئية'
                : 'Interactive simulator for 7 Crystal Systems, Bowen Reaction Series, Plate Tectonics, Stratigraphy, and Eco-Energy Pyramids'}
            </p>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className={`flex flex-wrap gap-1.5 p-1 rounded-xl ${isLight ? 'bg-stone-200/90 border border-stone-300' : 'bg-stone-900 border border-stone-800'}`}>
          <button
            onClick={() => setActiveMode('crystals')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeMode === 'crystals'
                ? 'bg-amber-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Gem className="w-4 h-4" />
            <span>{isArabic ? 'البلورات وموهس' : 'Crystals & Mohs'}</span>
          </button>
          <button
            onClick={() => setActiveMode('bowen')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeMode === 'bowen'
                ? 'bg-orange-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>{isArabic ? 'متسلسلة بوين' : 'Bowen & Rocks'}</span>
          </button>
          <button
            onClick={() => setActiveMode('tectonics')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeMode === 'tectonics'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{isArabic ? 'الصفائح والأخدود' : 'Tectonics & Rift'}</span>
          </button>
          <button
            onClick={() => setActiveMode('stratigraphy')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeMode === 'stratigraphy'
                ? 'bg-stone-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isArabic ? 'القطاعات والطبقات' : 'Stratigraphy'}</span>
          </button>
          <button
            onClick={() => setActiveMode('ecosystem')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeMode === 'ecosystem'
                ? 'bg-cyan-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Droplets className="w-4 h-4" />
            <span>{isArabic ? 'الضغط وهرم الطاقة' : 'Pressure & Energy'}</span>
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
              isLight ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90' : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
            title={isFullscreen ? (isArabic ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'Exit Fullscreen (Esc)') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4 text-amber-400" />}
            <span className="hidden sm:inline">{isFullscreen ? (isArabic ? 'إنهاء' : 'Exit') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="mt-6 flex-1 flex flex-col gap-6">
        {/* ========================================================= */}
        {/* MODE 1: 7 Crystal Systems & Mohs Scratch Tester           */}
        {/* ========================================================= */}
        {activeMode === 'crystals' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: 7 Systems Selector & 3D Wireframe */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-amber-800 font-extrabold' : 'text-amber-400'}`}>
                    <Gem className="w-5 h-5" />
                    {isArabic ? 'فاحص الأنظمة البلورية السبعة' : '7 Crystal Systems Inspector'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-amber-950/60 text-amber-300 border border-amber-800/50'}`}>
                    {isArabic ? 'الهندسة البلورية' : 'Crystallography'}
                  </span>
                </h3>

                {/* System Selection Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                  {Object.entries(crystalSystemsData).map(([key, sys]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedSystem(key)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium border text-start transition-all cursor-pointer ${
                        selectedSystem === key
                          ? isLight
                            ? 'bg-amber-500 text-white border-amber-600 shadow-md font-bold'
                            : 'bg-amber-600/30 border-amber-500 text-amber-200 shadow-sm font-bold'
                          : isLight
                          ? 'border-stone-300 bg-white text-stone-800 hover:bg-stone-100 hover:text-stone-950 font-semibold shadow-2xs'
                          : 'border-stone-800 bg-stone-900/50 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                      }`}
                    >
                      {isArabic ? sys.nameAr : sys.nameEn.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Crystal 3D SVG Projection & Structural Parameters */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-4 rounded-xl border ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/60 border-stone-800'}`}>
                  {/* High-Resolution Realistic 3D Faceted Crystal Viewport */}
                  <div className="h-60 flex items-center justify-center relative overflow-hidden rounded-xl bg-gradient-to-b from-stone-900 via-stone-950 to-black p-4 border border-stone-800 shadow-2xl">
                    <svg viewBox="-120 -110 240 220" className="w-56 h-56 drop-shadow-2xl">
                      <defs>
                        {/* Shading Gradients for Specular Facets */}
                        <linearGradient id="facetHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#fde68a" stopOpacity="0.6" />
                        </linearGradient>
                        <linearGradient id="facetMidtone" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#d97706" stopOpacity="0.65" />
                        </linearGradient>
                        <linearGradient id="facetShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#b45309" stopOpacity="0.75" />
                          <stop offset="100%" stopColor="#78350f" stopOpacity="0.85" />
                        </linearGradient>
                        <linearGradient id="facetInternal" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#d97706" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>

                      {/* Crystallographic Coordinate Axes Guidelines with Labels */}
                      <line x1="0" y1="90" x2="0" y2="-90" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.6" />
                      <line x1="-80" y1="45" x2="80" y2="-45" stroke="#10b981" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.6" />
                      <line x1="-90" y1="-25" x2="90" y2="25" stroke="#3b82f6" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.6" />
                      <text x="5" y="-88" fill="#f59e0b" fontSize="9" fontWeight="bold" fontFamily="monospace">
                        {isArabic ? (selectedSystem === 'cubic' ? 'المحور الرأسي أ٣ (c)' : 'المحور الرأسي جـ (c)') : 'c-axis'}
                      </text>
                      <text x="82" y="-43" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="monospace">
                        {isArabic ? (selectedSystem === 'cubic' ? 'المحور الأفقي أ٢ (b)' : 'المحور الأفقي ب (b)') : 'b-axis'}
                      </text>
                      <text x="88" y="27" fill="#3b82f6" fontSize="9" fontWeight="bold" fontFamily="monospace">
                        {isArabic ? (selectedSystem === 'cubic' ? 'المحور الأفقي أ١ (a)' : 'المحور الأفقي أ (a)') : 'a-axis'}
                      </text>

                      {/* 1. CUBIC SYSTEM (Halite / Pyrite) - Isometric Hexahedron with Beveled Facets */}
                      {selectedSystem === 'cubic' && (
                        <g>
                          {/* Inner ghost prism */}
                          <polygon points="0,-70 60,-35 0,0 -60,-35" fill="url(#facetHighlight)" stroke="#fef3c7" strokeWidth="1.5" />
                          <polygon points="0,0 60,-35 60,35 0,70" fill="url(#facetMidtone)" stroke="#fbbf24" strokeWidth="1.5" />
                          <polygon points="0,0 -60,-35 -60,35 0,70" fill="url(#facetShadow)" stroke="#b45309" strokeWidth="1.5" />
                          {/* Internal refraction bevel lines */}
                          <line x1="0" y1="-70" x2="0" y2="70" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" strokeDasharray="2 2" />
                          <line x1="-60" y1="-35" x2="60" y2="35" stroke="#ffffff" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 2" />
                          {/* Mineral label */}
                          <text x="0" y="88" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            Cubic Hexahedron • الهيكل المكعبي (NaCl)
                          </text>
                        </g>
                      )}

                      {/* 2. TETRAGONAL SYSTEM (Zircon) - Elongated Square Column with Pyramidal Termination */}
                      {selectedSystem === 'tetragonal' && (
                        <g>
                          {/* Upper Pyramidal Cap */}
                          <polygon points="0,-85 45,-50 0,-30" fill="url(#facetHighlight)" stroke="#fef3c7" strokeWidth="1.5" />
                          <polygon points="0,-85 -45,-50 0,-30" fill="url(#facetMidtone)" stroke="#fbbf24" strokeWidth="1.5" />
                          {/* Elongated Columnar Body (c > a) */}
                          <polygon points="0,-30 45,-50 45,45 0,65" fill="url(#facetMidtone)" stroke="#d97706" strokeWidth="1.5" />
                          <polygon points="0,-30 -45,-50 -45,45 0,65" fill="url(#facetShadow)" stroke="#b45309" strokeWidth="1.5" />
                          {/* Lower Pyramidal Cap */}
                          <polygon points="0,65 45,45 0,85" fill="url(#facetShadow)" stroke="#78350f" strokeWidth="1.5" />
                          <polygon points="0,65 -45,45 0,85" fill="#451a03" stroke="#78350f" strokeWidth="1.5" />
                          <text x="0" y="100" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            Tetragonal Prism • منشوري رباعي (ZrSiO₄)
                          </text>
                        </g>
                      )}

                      {/* 3. ORTHORHOMBIC SYSTEM (Topaz / Sulfur) - Rhombic Prism (a ≠ b ≠ c, all 90°) */}
                      {selectedSystem === 'orthorhombic' && (
                        <g>
                          {/* Top Rhombic Facet */}
                          <polygon points="0,-50 75,-25 0,0 -75,-25" fill="url(#facetHighlight)" stroke="#fef3c7" strokeWidth="1.5" />
                          {/* Right Side Wall */}
                          <polygon points="0,0 75,-25 75,35 0,60" fill="url(#facetMidtone)" stroke="#d97706" strokeWidth="1.5" />
                          {/* Left Side Wall */}
                          <polygon points="0,0 -75,-25 -75,35 0,60" fill="url(#facetShadow)" stroke="#b45309" strokeWidth="1.5" />
                          {/* Rhombic Bevel Edge */}
                          <line x1="0" y1="-50" x2="0" y2="60" stroke="#fef08a" strokeWidth="1.8" />
                          <text x="0" y="80" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            {isArabic ? 'منشور معيني قائم • التوباز (Topaz)' : 'Orthorhombic Prism • Topaz'}
                          </text>
                        </g>
                      )}

                      {/* 4. MONOCLINIC SYSTEM (Gypsum) - Inclined Prism (β ≠ 90°) */}
                      {selectedSystem === 'monoclinic' && (
                        <g>
                          {/* Sheared/Inclined Top Facet */}
                          <polygon points="20,-65 65,-30 10,5 -35,-30" fill="url(#facetHighlight)" stroke="#fef3c7" strokeWidth="1.5" />
                          {/* Tilted Right Lateral Face */}
                          <polygon points="10,5 65,-30 45,40 -10,75" fill="url(#facetMidtone)" stroke="#d97706" strokeWidth="1.5" />
                          {/* Tilted Left Lateral Face */}
                          <polygon points="10,5 -35,-30 -55,40 -10,75" fill="url(#facetShadow)" stroke="#b45309" strokeWidth="1.5" />
                          {/* Inclined Axis β Marker */}
                          <path d="M 10 5 A 18 18 0 0 1 20 -12" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
                          <text x="24" y="-3" fill="#fb7185" fontSize="8" fontWeight="bold" fontFamily="monospace">β=105°</text>
                          <text x="0" y="94" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            Monoclinic • أحادي الميل (CaSO₄·2H₂O)
                          </text>
                        </g>
                      )}

                      {/* 5. TRICLINIC SYSTEM (Turquoise / Feldspar) - Asymmetric Pinacoid (α ≠ β ≠ γ ≠ 90°) */}
                      {selectedSystem === 'triclinic' && (
                        <g>
                          {/* Oblique Skewed Top */}
                          <polygon points="28,-58 70,-15 15,18 -40,-25" fill="url(#facetHighlight)" stroke="#fef3c7" strokeWidth="1.5" />
                          {/* Skewed Right Face */}
                          <polygon points="15,18 70,-15 48,50 -08,78" fill="url(#facetMidtone)" stroke="#d97706" strokeWidth="1.5" />
                          {/* Skewed Left Face */}
                          <polygon points="15,18 -40,-25 -65,38 -08,78" fill="url(#facetShadow)" stroke="#b45309" strokeWidth="1.5" />
                          <text x="0" y="96" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            Triclinic Pinacoid • ثلاثي الميل (Feldspar)
                          </text>
                        </g>
                      )}

                      {/* 6. HEXAGONAL SYSTEM (Beryl / Apatite) - 4-Axis Hexagonal Prism with Basal Pinacoid */}
                      {selectedSystem === 'hexagonal' && (
                        <g>
                          {/* Top Regular Hexagonal Base */}
                          <polygon points="0,-65 48,-42 48,5 0,-18 -48,5 -48,-42" fill="url(#facetHighlight)" stroke="#fef3c7" strokeWidth="1.5" />
                          {/* Front Right Face */}
                          <polygon points="0,-18 48,5 48,65 0,42" fill="url(#facetMidtone)" stroke="#d97706" strokeWidth="1.5" />
                          {/* Front Left Face */}
                          <polygon points="0,-18 -48,5 -48,65 0,42" fill="url(#facetShadow)" stroke="#b45309" strokeWidth="1.5" />
                          <text x="0" y="85" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            Hexagonal Prism • سداسي الأوجه (Beryl)
                          </text>
                        </g>
                      )}

                      {/* 7. TRIGONAL SYSTEM (Calcite / Quartz) - 3-Fold Axis Rhombohedron */}
                      {selectedSystem === 'trigonal' && (
                        <g>
                          {/* 3-Fold Apex Rhomb */}
                          <polygon points="0,-75 50,-40 0,-2 -50,-40" fill="url(#facetHighlight)" stroke="#fef3c7" strokeWidth="1.5" />
                          {/* 3-Fold Rhomb Face Right */}
                          <polygon points="0,-2 50,-40 45,35 0,72" fill="url(#facetMidtone)" stroke="#d97706" strokeWidth="1.5" />
                          {/* 3-Fold Rhomb Face Left */}
                          <polygon points="0,-2 -50,-40 -45,35 0,72" fill="url(#facetShadow)" stroke="#b45309" strokeWidth="1.5" />
                          {/* Striation lines typical of Calcite cleavage */}
                          <line x1="-30" y1="-10" x2="-10" y2="10" stroke="#fef08a" strokeWidth="0.8" opacity="0.6" />
                          <line x1="-35" y1="10" x2="-15" y2="30" stroke="#fef08a" strokeWidth="0.8" opacity="0.6" />
                          <text x="0" y="90" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            Trigonal Rhombohedron • ثلاثي التماثل (Calcite)
                          </text>
                        </g>
                      )}
                    </svg>
                    <span className="absolute bottom-2 end-2 text-[10px] text-amber-400 font-mono bg-stone-900/80 px-2 py-0.5 rounded border border-amber-500/30">
                      {isArabic ? 'إسقاط بلوري فراغي ثلاثي الأبعاد' : '3D Realistic Crystallography'}
                    </span>
                  </div>

                  {/* System Parameters Details */}
                  <div className="flex flex-col gap-2 text-xs">
                    <div>
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>{isArabic ? 'المحاور البلورية:' : 'Crystallographic Axes:'}</span>
                      <p className={`font-semibold font-mono ${isLight ? 'text-amber-800 font-bold' : 'text-amber-300'}`}>
                        {isArabic ? crystalSystemsData[selectedSystem].axesAr : crystalSystemsData[selectedSystem].axesEn}
                      </p>
                    </div>
                    <div>
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>{isArabic ? 'الزوايا بين المحاور:' : 'Interaxial Angles:'}</span>
                      <p className={`font-semibold font-mono ${isLight ? 'text-emerald-800 font-bold' : 'text-emerald-300'}`}>
                        {isArabic ? crystalSystemsData[selectedSystem].anglesAr : crystalSystemsData[selectedSystem].anglesEn}
                      </p>
                    </div>
                    <div>
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>{isArabic ? 'درجة التماثل البلوري:' : 'Symmetry Characteristics:'}</span>
                      <p className={isLight ? 'text-stone-900 font-semibold' : 'text-stone-300'}>
                        {isArabic ? crystalSystemsData[selectedSystem].symmetryAr : crystalSystemsData[selectedSystem].symmetryEn}
                      </p>
                    </div>
                    <div>
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>{isArabic ? 'أشهر الأمثلة في المنهج:' : 'Textbook Mineral Examples:'}</span>
                      <p className={`font-semibold ${isLight ? 'text-sky-800 font-bold' : 'text-sky-300'}`}>
                        {isArabic ? crystalSystemsData[selectedSystem].examplesAr : crystalSystemsData[selectedSystem].examplesEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mohs Hardness Scratch Tester */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-emerald-800 font-extrabold' : 'text-emerald-400'}`}>
                    <Activity className="w-5 h-5" />
                    {isArabic ? 'مختبر اختبار الخدش بمقياس موهس' : 'Mohs Scratch Testing Lab'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'}`}>
                    {isArabic ? 'الصلادة النسبية' : 'Relative Hardness'}
                  </span>
                </h3>

                {/* Select Mineral Dropdown */}
                <div className="mb-4">
                  <label className={`block text-xs mb-1 ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>
                    {isArabic ? '١. اختر المعدن المراد اختباره:' : '1. Select Mineral to Test:'}
                  </label>
                  <select
                    value={selectedMineral}
                    onChange={(e) => setSelectedMineral(Number(e.target.value))}
                    className={`w-full rounded-lg p-2.5 text-xs focus:outline-none ${isLight ? 'bg-white border border-stone-300 text-stone-900 focus:border-amber-600 shadow-2xs font-semibold' : 'bg-stone-900 border border-stone-700 text-stone-200 focus:border-amber-500'}`}
                  >
                    {mohsMinerals.map((m) => (
                      <option key={m.rank} value={m.rank}>
                        {m.rank}. {isArabic ? `${m.nameAr} (صلادة ${m.rank})` : `${m.nameEn} (Hardness ${m.rank})`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Tool Dropdown */}
                <div className="mb-5">
                  <label className={`block text-xs mb-1 ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>
                    {isArabic ? '٢. اختر أداة الخدش الشائعة:' : '2. Select Common Scratching Tool:'}
                  </label>
                  <select
                    value={selectedScratchTool}
                    onChange={(e) => setSelectedScratchTool(Number(e.target.value))}
                    className={`w-full rounded-lg p-2.5 text-xs focus:outline-none ${isLight ? 'bg-white border border-stone-300 text-stone-900 focus:border-emerald-600 shadow-2xs font-semibold' : 'bg-stone-900 border border-stone-700 text-stone-200 focus:border-emerald-500'}`}
                  >
                    {scratchTools.map((t) => (
                      <option key={t.hardness} value={t.hardness}>
                        {isArabic ? t.nameAr : t.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Scratch Test Outcome Panel */}
                <div
                  className={`p-4 rounded-xl border flex flex-col gap-3 transition-all ${
                    isMineralScratched
                      ? isLight
                        ? 'bg-rose-50 border-rose-300 text-rose-950 font-medium shadow-2xs'
                        : 'bg-red-950/20 border-red-800/60 text-red-200'
                      : isLight
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium shadow-2xs'
                        : 'bg-emerald-950/20 border-emerald-800/60 text-emerald-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {isMineralScratched ? (
                      <>
                        <RotateCcw className={`w-5 h-5 ${isLight ? 'text-rose-700' : 'text-red-400'}`} />
                        <span className={isLight ? 'text-rose-950 font-black' : ''}>{isArabic ? 'النتيجة: تم خدش المعدن بنجاح!' : 'Result: Mineral is SCRATCHED!'}</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className={`w-5 h-5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                        <span className={isLight ? 'text-emerald-950 font-black' : ''}>{isArabic ? 'النتيجة: المعدن يقاوم الخدش ويثلم الأداة!' : 'Result: Mineral RESISTS Scratching!'}</span>
                      </>
                    )}
                  </div>

                  <p className="text-xs">
                    {isArabic
                      ? `صلادة الأداة (${selectedScratchTool}) ${
                          isMineralScratched ? 'أكبر من' : 'أقل من'
                        } صلادة معدن ${currentMineralObj.nameAr} (${currentMineralObj.rank}). طبقاً لقاعدة موهس: الأشد صلادة يخدش الأقل صلادة.`
                      : `Tool hardness (${selectedScratchTool}) is ${
                          isMineralScratched ? 'greater than' : 'less than or equal to'
                        } ${currentMineralObj.nameEn} (Mohs ${currentMineralObj.rank}). Harder substances scratch softer ones.`}
                  </p>

                  <div className={`pt-2 border-t ${isLight ? 'border-stone-200' : 'border-stone-800/50'} grid grid-cols-2 gap-2 text-xs`}>
                    <div>
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'} block`}>{isArabic ? 'لون المخدش التشخيصي:' : 'Diagnostic Streak:'}</span>
                      <span className={`font-semibold ${isLight ? 'text-amber-800 font-bold' : 'text-amber-300'}`}>{isArabic ? currentMineralObj.streakAr : currentMineralObj.streakEn}</span>
                    </div>
                    <div>
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'} block`}>{isArabic ? 'نوع البريق:' : 'Luster Type:'}</span>
                      <span className={`font-semibold ${isLight ? 'text-sky-800 font-bold' : 'text-sky-300'}`}>{isArabic ? currentMineralObj.lusterAr : currentMineralObj.lusterEn}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 2: Bowen's Reaction Series & Igneous Rocks Suite     */}
        {/* ========================================================= */}
        {activeMode === 'bowen' && (
          <div className="flex flex-col gap-6">
            {/* Top Bowen Interactive Ladder */}
            <div className={`p-5 rounded-xl border ${cardBg}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-semibold flex items-center gap-2 text-orange-400">
                    <Flame className="w-5 h-5" />
                    <span className={isLight ? 'text-orange-950 font-black' : ''}>{isArabic ? 'متسلسلة تفاعلات بوين الحرارية لتبلور الصهارة' : "Bowen's Reaction Series Temperature Ladder"}</span>
                  </h3>
                  <p className={`text-xs ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
                    {isArabic
                      ? 'حرك مؤشر درجة الحرارة لاستكشاف المعادن المتبلورة في الفرعين المتصل وغير المتصل'
                      : 'Slide the temperature control to inspect active crystallization across discontinuous & continuous branches'}
                  </p>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${isLight ? 'bg-stone-100 border-stone-300 shadow-2xs' : 'bg-stone-900 border-stone-800'}`}>
                  <span className={`text-xs ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'}`}>{isArabic ? 'درجة الحرارة الحالية:' : 'Current Temp:'}</span>
                  <span className={`text-sm font-black font-mono ${isLight ? 'text-orange-700' : 'text-orange-400'}`}>{bowenTemp}°C</span>
                </div>
              </div>

              {/* Temperature Slider */}
              <div className="flex items-center gap-4 mb-6">
                <span className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>1200°C ({isArabic ? 'بداية التبلور' : 'Early'})</span>
                <input
                  type="range"
                  min="750"
                  max="1200"
                  step="25"
                  value={bowenTemp}
                  onChange={(e) => setBowenTemp(Number(e.target.value))}
                  className={`flex-1 accent-orange-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                />
                <span className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>750°C ({isArabic ? 'نهاية التبلور' : 'Late'})</span>
              </div>

              {/* Two Branches Visualization Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Discontinuous Branch (Mafic) */}
                <div className={`p-4 rounded-xl border flex flex-col gap-3 ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/60 border-stone-800'}`}>
                  <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center justify-between ${isLight ? 'text-amber-900 font-black' : 'text-amber-400'}`}>
                    <span>{isArabic ? 'الفرع غير المتصل (غني بالحديد والماغنسيوم)' : 'Discontinuous Branch (Fe-Mg Mafic)'}</span>
                    <span className={`text-[10px] font-semibold ${isLight ? 'text-stone-600' : 'text-stone-500'}`}>Olivine → Biotite</span>
                  </h4>
                  <div className="flex flex-col gap-2">
                    {[
                      { nameEn: 'Olivine', nameAr: 'الأوليفين', temp: 1200, descEn: 'First mineral to crystallize (Ultrabasic)', descAr: 'أول المعادن تبلوراً من الصهارة على الإطلاق' },
                      { nameEn: 'Pyroxene', nameAr: 'البيروكسين', temp: 1100, descEn: 'Forms in basic & ultrabasic melts', descAr: 'يتبلور في الصخور فوق القاعدية والقاعدية' },
                      { nameEn: 'Amphibole', nameAr: 'الأمفيبول', temp: 950, descEn: 'Intermediate crystallization temperature', descAr: 'يتبلور في درجات حرارة متوسطة' },
                      { nameEn: 'Biotite (Black Mica)', nameAr: 'البيوتيت (الميكا السوداء)', temp: 850, descEn: 'Last mafic mineral before late phase', descAr: 'آخر معادن الفرع غير المتصل تبلوراً' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg border flex items-center justify-between text-xs transition-all ${
                          bowenTemp <= item.temp
                            ? isLight
                              ? 'bg-amber-100/90 border-amber-400 text-amber-950 font-medium shadow-2xs'
                              : 'bg-amber-950/30 border-amber-600/60 text-amber-200'
                            : isLight
                            ? 'bg-white border-stone-200 text-stone-500'
                            : 'bg-stone-900/40 border-stone-800 text-stone-500'
                        }`}
                      >
                        <div>
                          <span className={`font-bold block ${bowenTemp <= item.temp && isLight ? 'text-amber-950 font-black' : ''}`}>{isArabic ? item.nameAr : item.nameEn}</span>
                          <span className={`text-[11px] ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>{isArabic ? item.descAr : item.descEn}</span>
                        </div>
                        <span className={`font-mono text-[11px] px-2 py-0.5 rounded font-bold ${isLight ? 'bg-white text-stone-800 border border-stone-200 shadow-2xs' : 'bg-stone-900 text-stone-300'}`}>
                          ~{item.temp}°C
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continuous Branch (Feldspar Plagioclase) */}
                <div className={`p-4 rounded-xl border flex flex-col gap-3 ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/60 border-stone-800'}`}>
                  <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center justify-between ${isLight ? 'text-sky-900 font-black' : 'text-sky-400'}`}>
                    <span>{isArabic ? 'الفرع المتصل (الفلسبار البلاجيوكليزي)' : 'Continuous Branch (Plagioclase Feldspar)'}</span>
                    <span className={`text-[10px] font-semibold ${isLight ? 'text-stone-600' : 'text-stone-500'}`}>Ca-rich → Na-rich</span>
                  </h4>
                  <div className="flex flex-col gap-2">
                    {[
                      { nameEn: 'Anorthite (Ca-rich Plagioclase)', nameAr: 'بلاجيوكليز كلسي غني بالكالسيوم', temp: 1200, descEn: 'Early crystallization at high temperatures', descAr: 'يبدأ غنياً بالكالسيوم بالكامل' },
                      { nameEn: 'Ca-Na Plagioclase Solid Solution', nameAr: 'بلاجيوكليز كلسي صودي متدرج', temp: 1050, descEn: 'Continuous ionic substitution of Ca with Na', descAr: 'إحلال تدريجي للصوديوم محل الكالسيوم' },
                      { nameEn: 'Albite (Na-rich Plagioclase)', nameAr: 'بلاجيوكليز صودي غني بالصوديوم', temp: 850, descEn: 'Dominates intermediate to acidic magmas', descAr: 'يتحول إلى غني بالصوديوم بالكامل' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg border flex items-center justify-between text-xs transition-all ${
                          bowenTemp <= item.temp
                            ? isLight
                              ? 'bg-sky-100/90 border-sky-400 text-sky-950 font-medium shadow-2xs'
                              : 'bg-sky-950/30 border-sky-600/60 text-sky-200'
                            : isLight
                            ? 'bg-white border-stone-200 text-stone-500'
                            : 'bg-stone-900/40 border-stone-800 text-stone-500'
                        }`}
                      >
                        <div>
                          <span className={`font-bold block ${bowenTemp <= item.temp && isLight ? 'text-sky-950 font-black' : ''}`}>{isArabic ? item.nameAr : item.nameEn}</span>
                          <span className={`text-[11px] ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>{isArabic ? item.descAr : item.descEn}</span>
                        </div>
                        <span className={`font-mono text-[11px] px-2 py-0.5 rounded font-bold ${isLight ? 'bg-white text-stone-800 border border-stone-200 shadow-2xs' : 'bg-stone-900 text-stone-300'}`}>
                          ~{item.temp}°C
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Late Crystallization Stage Box */}
                  <div className={`mt-1 p-3 rounded-lg border text-xs ${isLight ? 'bg-pink-100/80 border-pink-300 text-stone-900 shadow-2xs' : 'bg-pink-950/10 border-pink-900/40 text-stone-300'}`}>
                    <span className={`font-bold block mb-1 ${isLight ? 'text-pink-900 font-black' : 'text-pink-400'}`}>
                      {isArabic ? 'المرحلة الأخيرة من التبلور (عند حوالي ٧٥٠°م):' : 'Final Magma Phase (~800°C - 750°C):'}
                    </span>
                    <p className={`text-[11px] ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
                      {isArabic
                        ? 'الفلسبار البوتاسي (الأرثوكليز) ← الميكا البيضاء (المسكوفيت) ← الكوارتز (آخر المعادن تبلوراً بنسبة ٢٥٪ في الجرانيت).'
                        : 'K-Feldspar (Orthoclase) → Muscovite (White Mica) → Quartz (Final mineral to crystallize, ~25% in Granite).'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Igneous Rock Catalog */}
            <div className={`p-5 rounded-xl border ${cardBg}`}>
              <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                <span className={`flex items-center gap-2 ${isLight ? 'text-stone-900 font-extrabold' : 'text-stone-200'}`}>
                  <Mountain className="w-5 h-5 text-amber-500" />
                  {isArabic ? 'كتالوج ومطياف الصخور النارية' : 'Igneous Rocks Petrology Matrix'}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded ${isLight ? 'bg-stone-200 text-stone-900 border border-stone-300 font-bold' : 'bg-stone-800 text-stone-300'}`}>
                  {isArabic ? 'نسبة السيليكا ومكان التبلور' : 'Silica % & Texture'}
                </span>
              </h3>

              {/* Rock Selector Buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(rockCatalog).map(([key, rk]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedRock(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedRock === key
                        ? 'bg-amber-600 border-amber-500 text-white shadow-sm font-bold'
                        : isLight
                        ? 'bg-white border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-950 font-semibold'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {isArabic ? rk.nameAr : rk.nameEn}
                  </button>
                ))}
              </div>

              {/* Rock Specimen Card */}
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl border text-xs ${
                isLight ? 'bg-stone-50 border-stone-200 text-stone-900 shadow-2xs' : 'bg-stone-950/60 border-stone-800'
              }`}>
                <div>
                  <span className={`block ${isLight ? 'text-stone-600 font-bold' : 'text-stone-400'}`}>{isArabic ? 'التصنيف الكيميائي ومحتوى السيليكا:' : 'Chemical Classification & Silica:'}</span>
                  <span className={`text-sm ${isLight ? 'text-amber-900 font-black' : 'text-amber-300 font-bold'}`}>{currentRockObj.silica}</span>
                  <span className={`block mt-2 ${isLight ? 'text-stone-600 font-bold' : 'text-stone-400'}`}>{isArabic ? 'حرارة التبلور:' : 'Crystallization Temp:'}</span>
                  <span className={`font-semibold ${isLight ? 'text-orange-900 font-bold' : 'text-orange-400'}`}>{currentRockObj.tempC}</span>
                </div>
                <div>
                  <span className={`block ${isLight ? 'text-stone-600 font-bold' : 'text-stone-400'}`}>{isArabic ? 'النسيج ومكان التبلور:' : 'Texture & Origin:'}</span>
                  <span className={`font-semibold ${isLight ? 'text-stone-900 font-bold' : 'text-stone-200'}`}>{isArabic ? currentRockObj.textureAr : currentRockObj.textureEn}</span>
                  <span className={`block mt-2 ${isLight ? 'text-stone-600 font-bold' : 'text-stone-400'}`}>{isArabic ? 'اللون المميز:' : 'Diagnostic Color:'}</span>
                  <span className={`font-semibold ${isLight ? 'text-stone-900 font-bold' : 'text-stone-300'}`}>{isArabic ? currentRockObj.colorAr : currentRockObj.colorEn}</span>
                </div>
                <div>
                  <span className={`block ${isLight ? 'text-stone-600 font-bold' : 'text-stone-400'}`}>{isArabic ? 'المعادن المكونة الرئيسية:' : 'Key Mineral Composition:'}</span>
                  <span className={`font-semibold ${isLight ? 'text-emerald-900 font-bold' : 'text-emerald-300'}`}>{isArabic ? currentRockObj.mineralsAr : currentRockObj.mineralsEn}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 3: Plate Tectonics & Airy's Isostasy Simulator        */}
        {/* ========================================================= */}
        {activeMode === 'tectonics' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Red Sea Rift Expansion Simulator */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-emerald-800 font-extrabold' : 'text-emerald-400'}`}>
                    <Compass className="w-5 h-5" />
                    {isArabic ? 'محاكي اتساع البحر الأحمر (حافة تباعدية بناءة)' : 'Red Sea Divergent Rift Simulator'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'}`}>
                    2.5 cm/yr
                  </span>
                </h3>

                <p className={`text-xs mb-4 ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
                  {isArabic
                    ? 'تباعد اللوح العربي عن اللوح الأفريقي بمعدل ٢٫٥ سم سنوياً يحول البحر الأحمر تدريجياً إلى محيط شاسع مستقبلاً.'
                    : 'The Arabian plate diverges from the African plate at 2.5 cm/year, gradually widening the Red Sea into a future ocean.'}
                </p>

                {/* Rift Time Slider */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>{isArabic ? 'الزمن الجيولوجي المنقضي:' : 'Geological Elapsed Time:'}</span>
                    <span className={`font-black font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{riftTimeMillionYears} {isArabic ? 'مليون سنة' : 'Million Years'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    step="1"
                    value={riftTimeMillionYears}
                    onChange={(e) => setRiftTimeMillionYears(Number(e.target.value))}
                    className={`w-full accent-emerald-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>

                {/* Calculated Rift Width Display */}
                <div className={`p-4 rounded-xl border flex items-center justify-between ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/70 border-stone-800'}`}>
                  <div>
                    <span className={`text-xs block ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'}`}>{isArabic ? 'الاتساع المحسوب للأخدود:' : 'Calculated Rift Width:'}</span>
                    <span className={`text-2xl font-black font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>{redSeaWidthKm.toFixed(1)} km</span>
                  </div>
                  <div className={`text-end text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    <span>{isArabic ? 'معادلة الإزاحة:' : 'Displacement Formula:'}</span>
                    <span className={`block font-mono font-bold ${isLight ? 'text-stone-900' : 'text-stone-300'}`}>ΔW = 2.5 cm/yr × Time</span>
                  </div>
                </div>

                {/* High-Resolution Realistic Geological Cross-Section of Red Sea Divergent Rift */}
                <div className="mt-4 h-48 bg-stone-950 rounded-xl border border-stone-800 p-2 relative overflow-hidden flex items-center justify-center shadow-xl">
                  <svg viewBox="-160 -60 320 120" className="w-full h-full">
                    <defs>
                      <linearGradient id="mantlePlumeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#7f1d1d" />
                        <stop offset="40%" stopColor="#dc2626" />
                        <stop offset="80%" stopColor="#ea580c" />
                        <stop offset="100%" stopColor="#facc15" />
                      </linearGradient>
                      <linearGradient id="redSeaWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="#0284c7" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0c4a6e" />
                      </linearGradient>
                      <linearGradient id="continentalCrustGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#78716c" />
                        <stop offset="100%" stopColor="#57534e" />
                      </linearGradient>
                      <marker id="divergenceArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
                      </marker>
                    </defs>

                    {/* Asthenosphere Mantle Bedrock */}
                    <rect x="-160" y="10" width="320" height="50" fill="#292524" />
                    {/* Mantle Convection Upwelling Plume */}
                    <path d="M -50 60 Q -30 20 0 10 Q 30 20 50 60 Z" fill="url(#mantlePlumeGrad)" opacity="0.85" />
                    {/* Convection Circulation Arrows */}
                    <path d="M -35 45 Q -25 28 -5 18" fill="none" stroke="#facc15" strokeWidth="1.8" strokeDasharray="3 2" markerEnd="url(#divergenceArrow)" />
                    <path d="M 35 45 Q 25 28 5 18" fill="none" stroke="#facc15" strokeWidth="1.8" strokeDasharray="3 2" markerEnd="url(#divergenceArrow)" />

                    {/* African Continental Plate (Left) with Graben Step-Fault Terraces */}
                    {(() => {
                      const shift = riftTimeMillionYears * 0.8;
                      const leftX = -155 - shift;
                      return (
                        <g>
                          {/* Main Continental Block */}
                          <polygon
                            points={`${leftX},-25 ${leftX + 85},-25 ${leftX + 98},-10 ${leftX + 110},8 ${leftX + 110},50 ${leftX},50`}
                            fill="url(#continentalCrustGrad)"
                            stroke="#a8a29e"
                            strokeWidth="1.2"
                          />
                          {/* Coastal Mountain Shoulder */}
                          <polygon points={`${leftX + 40},-25 ${leftX + 60},-38 ${leftX + 75},-25`} fill="#a8a29e" />
                          <text x={leftX + 50} y="-8" fill="#f5f5f4" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                            {isArabic ? 'اللوح الأفريقي (مصر)' : 'African Plate'}
                          </text>
                          {/* Normal Step Fault Lines */}
                          <line x1={leftX + 85} y1="-25" x2={leftX + 98} y2="-10" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 2" />
                          <line x1={leftX + 98} y1="-10" x2={leftX + 110} y2="8" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 2" />
                          {/* Divergence Motion Vector Arrow */}
                          <line x1={leftX + 90} y1="-18" x2={leftX + 65} y2="-18" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#divergenceArrow)" />
                          <text x={leftX + 75} y="-30" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            {isArabic ? '← ٢.٥ سم/سنة' : '← 2.5 cm/yr'}
                          </text>
                        </g>
                      );
                    })()}

                    {/* Arabian Continental Plate (Right) with Complementary Graben Terraces */}
                    {(() => {
                      const shift = riftTimeMillionYears * 0.8;
                      const rightX = 45 + shift;
                      return (
                        <g>
                          {/* Main Continental Block */}
                          <polygon
                            points={`${rightX},-10 ${rightX + 12},-25 ${rightX + 105},-25 ${rightX + 105},50 ${rightX - 10},50 ${rightX - 10},8`}
                            fill="url(#continentalCrustGrad)"
                            stroke="#a8a29e"
                            strokeWidth="1.2"
                          />
                          {/* Hijaz Mountain Shoulder */}
                          <polygon points={`${rightX + 25},-25 ${rightX + 45},-38 ${rightX + 65},-25`} fill="#a8a29e" />
                          <text x={rightX + 55} y="-8" fill="#f5f5f4" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                            {isArabic ? 'اللوح العربي (الحجاز)' : 'Arabian Plate'}
                          </text>
                          {/* Normal Fault Lines */}
                          <line x1={rightX - 10} y1="8" x2={rightX} y2="-10" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 2" />
                          <line x1={rightX} y1="-10" x2={rightX + 12} y2="-25" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 2" />
                          {/* Divergence Motion Vector Arrow */}
                          <line x1={rightX + 15} y1="-18" x2={rightX + 40} y2="-18" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#divergenceArrow)" />
                          <text x={rightX + 28} y="-30" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            {isArabic ? '٢.٥ سم/سنة →' : '2.5 cm/yr →'}
                          </text>
                        </g>
                      );
                    })()}

                    {/* Central Oceanic Floor Basalt & Hydrothermal Ridge */}
                    <polygon points="-25,12 25,12 18,22 -18,22" fill="#1c1917" stroke="#44403c" strokeWidth="1" />
                    {/* Young Mid-Rift Volcanic Cone */}
                    <polygon points="0,5 8,12 -8,12" fill="#ea580c" />

                    {/* Red Sea Seawater Column in Graben Basin */}
                    <polygon points="-40,-12 40,-12 30,10 -30,10" fill="url(#redSeaWaterGrad)" stroke="#38bdf8" strokeWidth="0.8" />
                    <text x="0" y="2" fill="#f0f9ff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                      {isArabic ? 'البحر الأحمر (حوض محيطي وليد)' : 'Red Sea Proto-Ocean Basin'}
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Airy's Isostasy Mountain Root Calculator */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-amber-800 font-extrabold' : 'text-amber-400'}`}>
                    <Mountain className="w-5 h-5" />
                    {isArabic ? 'حاسبة التوازن الإيزوستاتيكي (للبروفيسور إيري)' : "Airy's Isostasy Root Depth Calculator"}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-amber-950/60 text-amber-300 border border-amber-800/50'}`}>
                    Root = 4H
                  </span>
                </h3>

                <p className={`text-xs mb-4 ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
                  {isArabic
                    ? 'سلاسل الجبال تمتلك جذوراً تغوص في صخور الوشاح عالية الكثافة لعمق يعادل ٤ أمثال ارتفاعها فوق مستوى سطح البحر.'
                    : 'Mountain chains possess deep subterranean granite roots sinking into the dense mantle to a depth 4 times their elevation.'}
                </p>

                {/* Elevation Input Slider */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>{isArabic ? 'ارتفاع الجبل فوق سطح البحر (H):' : 'Mountain Elevation Above Sea Level (H):'}</span>
                    <span className={`font-black font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{mountainElevation} m</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="9000"
                    step="50"
                    value={mountainElevation}
                    onChange={(e) => setMountainElevation(Number(e.target.value))}
                    className={`w-full accent-amber-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <button
                    onClick={() => setMountainElevation(2629)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'جبل كاترين بمصر (٢٦٢٩ م)' : 'Mount Catherine, Sinai (2,629m)'}
                  </button>
                  <button
                    onClick={() => setMountainElevation(8848)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'قمة إيفرست بالهيمالايا (٨٨٤٨ م)' : 'Mount Everest, Himalayas (8,848m)'}
                  </button>
                </div>

                {/* Output Metrics */}
                <div className={`grid grid-cols-2 gap-3 p-4 rounded-xl border text-xs ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/70 border-stone-800'}`}>
                  <div>
                    <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'} block`}>{isArabic ? 'عمق الجذر الغاطس في الوشاح (4H):' : 'Subterranean Root Depth (4H):'}</span>
                    <span className={`text-xl font-black font-mono ${isLight ? 'text-sky-800' : 'text-sky-400'}`}>{mountainRootDepth.toLocaleString()} m</span>
                    <span className={`text-[10px] ${isLight ? 'text-stone-600' : 'text-stone-500'} block`}>{(mountainRootDepth / 1000).toFixed(2)} km</span>
                  </div>
                  <div>
                    <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'} block`}>{isArabic ? 'السمك الكلي للكتلة الجبلية (5H):' : 'Total Lithospheric Mass (5H):'}</span>
                    <span className={`text-xl font-black font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{totalMountainCrust.toLocaleString()} m</span>
                    <span className={`text-[10px] ${isLight ? 'text-stone-600' : 'text-stone-500'} block`}>{(totalMountainCrust / 1000).toFixed(2)} km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 4: Stratigraphic Cross-Section & Geological History   */}
        {/* ========================================================= */}
        {activeMode === 'stratigraphy' && (
          <div className="flex flex-col gap-6">
            <div className={`p-5 rounded-xl border ${cardBg}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-semibold flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-500" />
                    <span className={isLight ? 'text-stone-900 font-black' : 'text-stone-200'}>{isArabic ? 'محاكي القطاعات الجيولوجية والتحليل الطبقي' : 'Stratigraphic Cross-Section & Tectonic History Simulator'}</span>
                  </h3>
                  <p className={`text-xs ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
                    {isArabic
                      ? 'تحكم في قوى الطي التكتونية، مقدار رمية الفالق، التداخلات النارية، واستنتج التسلسل الزمني للأحداث'
                      : 'Simulate compressional folds, fault slip throw, igneous dykes, and deduce chronological history'}
                  </p>
                </div>
              </div>

              {/* Tectonic Controls Bar */}
              <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border mb-6 text-xs ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                <div>
                  <label className={`block mb-1 font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>{isArabic ? 'شدة الطي والانثناء:' : 'Fold Compression:'}</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={foldCompression}
                    onChange={(e) => setFoldCompression(Number(e.target.value))}
                    className={`w-full accent-amber-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>
                <div>
                  <label className={`block mb-1 font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>{isArabic ? 'إزاحة الفالق (الرمية):' : 'Fault Throw (px):'}</label>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={faultThrow}
                    onChange={(e) => setFaultThrow(Number(e.target.value))}
                    className={`w-full accent-red-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <input
                    type="checkbox"
                    id="chkDyke"
                    checked={hasBasaltDyke}
                    onChange={(e) => setHasBasaltDyke(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded cursor-pointer"
                  />
                  <label htmlFor="chkDyke" className={`cursor-pointer ${isLight ? 'text-stone-900 font-bold' : 'text-stone-300'}`}>
                    {isArabic ? 'تداخل عرق ناري قاطع' : 'Intrusive Basalt Dyke'}
                  </label>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <input
                    type="checkbox"
                    id="chkUnconf"
                    checked={hasUpperUnconformity}
                    onChange={(e) => setHasUpperUnconformity(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded cursor-pointer"
                  />
                  <label htmlFor="chkUnconf" className={`cursor-pointer ${isLight ? 'text-stone-900 font-bold' : 'text-stone-300'}`}>
                    {isArabic ? 'سطح عدم توافق زاوي' : 'Angular Unconformity'}
                  </label>
                </div>
              </div>

              {/* High-Resolution Realistic Stratigraphic Cross-Section SVG Canvas */}
              <div className="h-72 bg-stone-950 rounded-xl border border-stone-800 p-3 relative overflow-hidden flex items-center justify-center shadow-2xl">
                <svg viewBox="0 0 600 250" className="w-full h-full">
                  <defs>
                    {/* 1. Sandstone Geological Pattern (Stippled Grains) */}
                    <pattern id="sandstoneHatch" width="16" height="16" patternUnits="userSpaceOnUse">
                      <rect width="16" height="16" fill="#78350f" opacity="0.85" />
                      <circle cx="4" cy="4" r="1" fill="#fef3c7" opacity="0.7" />
                      <circle cx="12" cy="6" r="1.2" fill="#fde68a" opacity="0.6" />
                      <circle cx="8" cy="12" r="1" fill="#fef3c7" opacity="0.7" />
                      <circle cx="2" cy="14" r="0.8" fill="#fbbf24" opacity="0.5" />
                    </pattern>

                    {/* 2. Limestone Geological Pattern (Standard Offset Brickwork) */}
                    <pattern id="limestoneHatch" width="28" height="14" patternUnits="userSpaceOnUse">
                      <rect width="28" height="14" fill="#1e3a8a" opacity="0.8" />
                      {/* Horizontal bedding planes */}
                      <line x1="0" y1="0" x2="28" y2="0" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6" />
                      <line x1="0" y1="7" x2="28" y2="7" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6" />
                      {/* Staggered vertical joints */}
                      <line x1="14" y1="0" x2="14" y2="7" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6" />
                      <line x1="0" y1="7" x2="0" y2="14" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6" />
                      <line x1="28" y1="7" x2="28" y2="14" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6" />
                    </pattern>

                    {/* 3. Shale Geological Pattern (Fissile Laminations) */}
                    <pattern id="shaleHatch" width="20" height="10" patternUnits="userSpaceOnUse">
                      <rect width="20" height="10" fill="#064e3b" opacity="0.8" />
                      <line x1="2" y1="3" x2="10" y2="3" stroke="#6ee7b7" strokeWidth="0.8" opacity="0.6" />
                      <line x1="12" y1="7" x2="18" y2="7" stroke="#6ee7b7" strokeWidth="0.8" opacity="0.6" />
                      <line x1="0" y1="10" x2="20" y2="10" stroke="#6ee7b7" strokeWidth="0.8" opacity="0.4" />
                    </pattern>

                    {/* 4. Upper Tertiary Cover Bed Pattern */}
                    <pattern id="tertiaryHatch" width="24" height="8" patternUnits="userSpaceOnUse">
                      <rect width="24" height="8" fill="#581c87" opacity="0.6" />
                      <line x1="0" y1="4" x2="24" y2="4" stroke="#d8b4fe" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="0" y1="8" x2="24" y2="8" stroke="#d8b4fe" strokeWidth="0.8" opacity="0.4" />
                    </pattern>

                    {/* 5. Conglomerate Pebble Gradient */}
                    <radialGradient id="pebbleGrad" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#fde68a" />
                      <stop offset="60%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#78350f" />
                    </radialGradient>
                  </defs>

                  {/* Bed 1: Deep Cambrian Sandstone (Folded Anticline with Stippling) */}
                  <path
                    d={`M 0,220 Q 150,${220 - foldCompression * 0.4} 300,220 T 600,220 L 600,250 L 0,250 Z`}
                    fill="url(#sandstoneHatch)"
                    stroke="#d97706"
                    strokeWidth="1.2"
                  />
                  {/* Bed 2: Ordovician Limestone (Brickwork Pattern) */}
                  <path
                    d={`M 0,180 Q 150,${180 - foldCompression * 0.4} 300,180 T 600,180 L 600,220 Q 450,220 300,220 T 0,220 Z`}
                    fill="url(#limestoneHatch)"
                    stroke="#60a5fa"
                    strokeWidth="1.2"
                  />
                  {/* Bed 3: Silurian Shale (Laminated Pattern) */}
                  <path
                    d={`M 0,140 Q 150,${140 - foldCompression * 0.4} 300,140 T 600,140 L 600,180 Q 450,180 300,180 T 0,180 Z`}
                    fill="url(#shaleHatch)"
                    stroke="#34d399"
                    strokeWidth="1.2"
                  />

                  {/* Fault Plane Line & Displacement Arrows */}
                  {faultThrow > 0 && (
                    <g>
                      <line x1="240" y1="120" x2="360" y2="245" stroke="#ef4444" strokeWidth="3.5" strokeDasharray="5 3" />
                      {/* Fault Gouge Zone */}
                      <line x1="238" y1="120" x2="358" y2="245" stroke="#f87171" strokeWidth="1" opacity="0.6" />
                      {/* Downthrow Slip Arrow */}
                      <polygon points="315,190 325,185 320,195" fill="#ef4444" />
                      <text x="345" y="195" fill="#fca5a5" fontSize="9" fontWeight="bold" fontFamily="monospace">
                        {isArabic ? `إزاحة الفالق (المقدار: ${faultThrow} م)` : `Fault Slip (Throw: ${faultThrow}m)`}
                      </text>
                    </g>
                  )}

                  {/* Basaltic Magmatic Dyke with Thermal Contact Metamorphism Aureole */}
                  {hasBasaltDyke && (
                    <g>
                      {/* Contact Metamorphic Halo (Thermal Aureole Baked Zone) */}
                      <polygon points="114,250 141,250 176,120 149,120" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="3 2" />
                      {/* Discordant Basaltic Igneous Body */}
                      <polygon points="120,250 135,250 170,120 155,120" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
                      {/* Basalt Mineral Phenocryst Texture */}
                      {[150, 175, 200, 225].map((py, i) => (
                        <line key={i} x1={135 + i * 5} y1={py} x2={142 + i * 5} y2={py} stroke="#a1a1aa" strokeWidth="1.5" />
                      ))}
                      <text x="185" y="152" fill="#f87171" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">
                        {isArabic ? 'عرق بازلتي قاطع (أحدث من الطية)' : 'Basalt Dyke (Cross-cutting)'}
                      </text>
                    </g>
                  )}

                  {/* Angular Unconformity Surface with Basal Conglomerate Pebbles */}
                  {hasUpperUnconformity && (
                    <g>
                      {/* Horizontal Angular Unconformity Line */}
                      <line x1="0" y1="120" x2="600" y2="120" stroke="#f59e0b" strokeWidth="3.5" />
                      {/* Basal Conglomerate Rounded Pebbles indicating Marine Transgression */}
                      {[25, 55, 95, 135, 175, 215, 255, 295, 335, 375, 415, 455, 495, 535, 575].map((cx, i) => (
                        <g key={i}>
                          <ellipse cx={cx} cy="115" rx="6" ry="4.5" fill="url(#pebbleGrad)" stroke="#451a03" strokeWidth="1" />
                          <ellipse cx={cx + 12} cy="117" rx="4" ry="3" fill="url(#pebbleGrad)" stroke="#451a03" strokeWidth="0.8" />
                        </g>
                      ))}
                      {/* Horizontal Tertiary Sedimentary Bedding */}
                      <rect x="0" y="65" width="600" height="53" fill="url(#tertiaryHatch)" stroke="#c084fc" strokeWidth="1.2" />
                      <text x="440" y="105" fill="#fef08a" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                        {isArabic ? 'سطح عدم توافق زاوي (طبقة كونجلوميرات)' : 'Angular Unconformity Surface (Conglomerate)'}
                      </text>
                      <text x="50" y="95" fill="#e9d5ff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                        {isArabic ? 'طبقات العصر الثالث الأفقية الحديثة' : 'Horizontal Tertiary Strata'}
                      </text>
                    </g>
                  )}

                  {/* Strata Labels */}
                  <text x="25" y="210" fill="#fef3c7" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                    {isArabic ? 'حجر رملي كامبري (طية محدبة مطوية)' : 'Cambrian Sandstone (Folded Anticline)'}
                  </text>
                  <text x="25" y="170" fill="#bfdbfe" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                    {isArabic ? 'حجر جيري أوردوفيشي' : 'Ordovician Limestone'}
                  </text>
                  <text x="25" y="132" fill="#a7f3d0" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                    {isArabic ? 'طفلة/شيل سيلوري' : 'Silurian Shale'}
                  </text>
                </svg>
              </div>

              {/* Deductions Chronometer */}
              <div className={`mt-4 p-4 rounded-xl border text-xs ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/70 border-stone-800'}`}>
                <span className={`font-black block mb-2 ${isLight ? 'text-amber-900' : 'text-amber-400'}`}>
                  {isArabic ? 'الاستنتاج الجيولوجي للتتابع الزمني للأحداث (من الأقدم للأحدث):' : 'Geological Chronological Sequence of Events (Oldest to Youngest):'}
                </span>
                <ol className={`list-decimal list-inside space-y-1 ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
                  <li>{isArabic ? 'ترسيب المجموعات الصخرية السفلية في وضع أفقي في أحواض الترسيب.' : 'Deposition of lower sedimentary beds in horizontal basin.'}</li>
                  <li>{isArabic ? 'تعرض المنطقة لقوى ضغط تكتونية سببت انثناء الطبقات وتكوين الطية المحدبة.' : 'Tectonic lateral compression folding strata into an anticline.'}</li>
                  {hasBasaltDyke && (
                    <li>{isArabic ? 'اندفاع الصهارة النارية وتكوين العرق البازلتي القاطع للطبقات المطوية (القاطع أحدث من المقطوع).' : 'Intrusion of basaltic magma forming discordant dyke (Cross-cutting relationships).'}</li>
                  )}
                  {hasUpperUnconformity && (
                    <>
                      <li>{isArabic ? 'حدوث حركات أرضية رافعة وانحسار ماء البحر وتعرض الطبقات لتعرية طويلة شكلت سطح عدم التوافق الزاوي الموضح بالكونجلوميرات.' : 'Uplift and marine regression causing erosional hiatus and basal conglomerate deposition.'}</li>
                      <li>{isArabic ? 'تقدم ماء البحر مجدداً وترسيب الطبقات الرسوبية العلوية الأفقية.' : 'Marine transgression depositing upper horizontal beds.'}</li>
                    </>
                  )}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 5: Marine Hydrostatic Pressure & Ecosystem Energy    */}
        {/* ========================================================= */}
        {activeMode === 'ecosystem' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Hydrostatic Pressure Calculator */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-cyan-900 font-extrabold' : 'text-cyan-400'}`}>
                    <Droplets className="w-5 h-5" />
                    {isArabic ? 'حاسبة الضغط الهيدروستاتيكي المائي' : 'Marine Hydrostatic Pressure Lab'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-cyan-100 text-cyan-900 border border-cyan-300' : 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/50'}`}>
                    P = D/10 + 1
                  </span>
                </h3>

                {/* Depth Slider */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>{isArabic ? 'عمق المياه بالأمتار (D):' : 'Ocean Depth in Meters (D):'}</span>
                    <span className={`font-black font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>{oceanDepthMeters} m</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="11000"
                    step="50"
                    value={oceanDepthMeters}
                    onChange={(e) => setOceanDepthMeters(Number(e.target.value))}
                    className={`w-full accent-cyan-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>

                {/* Quick Depth Presets */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <button
                    onClick={() => setOceanDepthMeters(10)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    10m (2 atm)
                  </button>
                  <button
                    onClick={() => setOceanDepthMeters(200)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    200m ({isArabic ? 'الرف القاري' : 'Shelf limit'})
                  </button>
                  <button
                    onClick={() => setOceanDepthMeters(2000)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    2000m ({isArabic ? 'المنحدر القاري' : 'Slope limit'})
                  </button>
                  <button
                    onClick={() => setOceanDepthMeters(11000)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    11000m ({isArabic ? 'خندق ماريانا' : 'Mariana Trench'})
                  </button>
                </div>

                {/* Calculated Results */}
                <div className={`p-4 rounded-xl border grid grid-cols-2 gap-4 text-xs ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/70 border-stone-800'}`}>
                  <div>
                    <span className={`block ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'}`}>{isArabic ? 'الضغط الكلي الواقع على الكائن:' : 'Total Hydrostatic Pressure:'}</span>
                    <span className={`text-2xl font-black font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-300'}`}>{hydrostaticPressureAtm.toFixed(1)} atm</span>
                    <span className={`text-[10px] ${isLight ? 'text-stone-600' : 'text-stone-500'} block`}>
                      {isArabic ? 'يشمل ١ ضغط جوي للغلاف السطحي' : 'Includes 1 atm surface pressure'}
                    </span>
                  </div>
                  <div>
                    <span className={`block ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'}`}>{isArabic ? 'النطاق البحري المعتمد:' : 'Marine Depth Zone:'}</span>
                    <span className={`font-bold ${isLight ? 'text-stone-900' : 'text-stone-200'}`}>
                      {isArabic ? getMarineZone(oceanDepthMeters).ar : getMarineZone(oceanDepthMeters).en}
                    </span>
                    <span className={`text-[10px] ${isLight ? 'text-stone-600 font-medium' : 'text-stone-500'} block mt-1`}>
                      {isArabic ? `نفاذ الضوء: ${lightPercent.toFixed(1)}%` : `Light Transmission: ${lightPercent.toFixed(1)}%`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Ecosystem Energy Pyramid Simulator */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-emerald-900 font-extrabold' : 'text-emerald-400'}`}>
                    <Sun className="w-5 h-5" />
                    {isArabic ? 'هرم الطاقة الغذائية وقاعدة العشر (١٠٪)' : 'Trophic Food Web Energy Pyramid'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'}`}>
                    90% Dissipation
                  </span>
                </h3>

                {/* Base Energy Input */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>{isArabic ? 'طاقة المنتجين الأساسية (سعر حراري):' : 'Base Primary Producer Energy (kcal):'}</span>
                    <span className={`font-black font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{baseSolarEnergyKcal.toLocaleString()} kcal</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={baseSolarEnergyKcal}
                    onChange={(e) => setBaseSolarEnergyKcal(Number(e.target.value))}
                    className={`w-full accent-emerald-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>

                {/* 4-Tier Energy Pyramid Levels */}
                <div className="flex flex-col gap-2">
                  {[
                    { level: 4, nameEn: 'Top Predators (Sharks, Whales)', nameAr: 'المستهلك الثالث (الحيتان وأسماك القرش)', factor: 0.001 },
                    { level: 3, nameEn: 'Secondary Consumers (Predatory Fish)', nameAr: 'المستهلك الثاني (الأسماك الكبيرة المفترسة)', factor: 0.01 },
                    { level: 2, nameEn: 'Primary Consumers (Zooplankton)', nameAr: 'المستهلك الأول (الهائمات الحيوانية)', factor: 0.1 },
                    { level: 1, nameEn: 'Primary Producers (Phytoplankton)', nameAr: 'المنتجون (الهائمات النباتية والطحالب)', factor: 1.0 }
                  ].map((tier) => {
                    const energy = baseSolarEnergyKcal * tier.factor;
                    const tierStyle = tier.level === 4
                      ? (isLight ? 'bg-rose-100/90 border-rose-300 text-rose-950 shadow-2xs' : 'bg-red-950/30 border-red-800 text-red-200')
                      : tier.level === 3
                      ? (isLight ? 'bg-orange-100/90 border-orange-300 text-orange-950 shadow-2xs' : 'bg-orange-950/30 border-orange-800 text-orange-200')
                      : tier.level === 2
                      ? (isLight ? 'bg-amber-100/90 border-amber-300 text-amber-950 shadow-2xs' : 'bg-yellow-950/30 border-yellow-800 text-yellow-200')
                      : (isLight ? 'bg-emerald-100/90 border-emerald-300 text-emerald-950 shadow-2xs' : 'bg-emerald-950/30 border-emerald-800 text-emerald-200');

                    return (
                      <div key={tier.level} className={`p-2.5 rounded-lg border flex items-center justify-between text-xs ${tierStyle}`}>
                        <div>
                          <span className="font-bold block">{isArabic ? tier.nameAr : tier.nameEn}</span>
                          <span className={`text-[10px] ${isLight ? 'text-stone-700 font-semibold' : 'text-stone-400'}`}>
                            {isArabic ? `المستوى الغذائي ${tier.level}` : `Trophic Level ${tier.level}`}
                          </span>
                        </div>
                        <div className="text-end">
                          <span className="font-mono font-bold text-sm block">{energy.toLocaleString()} kcal</span>
                          <span className="text-[10px] opacity-80 font-medium">
                            {tier.factor === 1 ? '100% Base' : `${(tier.factor * 100).toFixed(1)}% Available`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
