import React, { useState, useId } from 'react';
import type { Language } from '../../i18n/translations';
import {
  PERSPECTIVE_PRESETS,
  COLOR_HARMONIES,
  GOLDEN_RATIO_ARCHETYPES,
  ISLAMIC_TESSELLATION_PATTERNS,
  FINE_ARTS_APTITUDE_QUIZ,
  type PerspectivePreset,
  type ColorHarmonicScheme,
  type GoldenRatioElement,
  type IslamicTessellationPattern,
} from '../../data/fineArtsLab/fineArtsLabData';
import {
  Palette,
  Compass,
  CheckCircle2,
  XCircle,
  Sparkles,
  RotateCcw,
  BookOpen,
  Award,
  Sliders,
  Eye,
  Building2,
  Brush,
  ChevronRight,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';
import { ThutmoseNefertitiStudio } from './fine_arts/ThutmoseNefertitiStudio';
import { MahmoudMokhtarNahdatMisrStudio } from './fine_arts/MahmoudMokhtarNahdatMisrStudio';
import { HassanFathyNewGournaStudio } from './fine_arts/HassanFathyNewGournaStudio';
import { VitruvianManArchitectureStudio } from './fine_arts/VitruvianManArchitectureStudio';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: FineArtsStudioTab;
}

export type FineArtsStudioTab =
  | 'thutmose_nefertiti'
  | 'mokhtar_nahdat_misr'
  | 'hassan_fathy_gourna'
  | 'da_vinci_vitruvian'
  | 'perspective'
  | 'colors'
  | 'golden_ratio'
  | 'tessellation'
  | 'quiz';

export const FineArtsArchitectureStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'perspective',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  // Unique ID prefix for SVG gradient / pattern definitions
  const svgId = useId();

  // Active Tab
  const [activeTab, setActiveTab] = useState<FineArtsStudioTab>(initialTab);

  // Tab 1: Perspective Drafting Controls
  const [selectedPersp, setSelectedPersp] = useState<PerspectivePreset>(PERSPECTIVE_PRESETS[0]);
  const [horizonPos, setHorizonPos] = useState<number>(selectedPersp.horizonY);
  const [vp1Offset, setVp1Offset] = useState<number>(selectedPersp.vp1X);
  const [vp2Offset, setVp2Offset] = useState<number>(selectedPersp.vp2X || 85);
  const [showWireframe, setShowWireframe] = useState<boolean>(true);

  // Tab 2: Color Harmony State
  const [selectedScheme, setSelectedScheme] = useState<ColorHarmonicScheme>(COLOR_HARMONIES[0]);
  const [activeHueAngle, setActiveHueAngle] = useState<number>(selectedScheme.baseHue);

  // Tab 3: Golden Ratio State
  const [selectedArchetype, setSelectedArchetype] = useState<GoldenRatioElement>(GOLDEN_RATIO_ARCHETYPES[0]);
  const [inputDimension, setInputDimension] = useState<number>(10);
  const [dimensionMode, setDimensionMode] = useState<'widthToHeight' | 'heightToWidth'>('widthToHeight');

  // Tab 4: Islamic Tessellation State
  const [selectedTessellation, setSelectedTessellation] = useState<IslamicTessellationPattern>(ISLAMIC_TESSELLATION_PATTERNS[0]);
  const [ablaqPalette, setAblaqPalette] = useState<'traditional' | 'golden' | 'turquoise'>('traditional');
  const [_tessellationStep, setTessellationStep] = useState<number>(0);

  // Tab 5: Aptitude Quiz State
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Styling helper classes
  const panelBg = isLight
    ? 'bg-white border-rose-200 shadow-sm text-slate-900'
    : isContrast
    ? 'bg-black border-yellow-400 text-yellow-300'
    : 'bg-slate-900/90 border-rose-900/40 text-slate-100 shadow-xl backdrop-blur-md';

  const subPanelBg = isLight
    ? 'bg-rose-50/50 border-rose-200/60'
    : isContrast
    ? 'bg-zinc-950 border-yellow-500/50'
    : 'bg-slate-800/60 border-slate-700/60';

  // Reset Tab 1 parameters on preset selection
  const handleSelectPerspPreset = (p: PerspectivePreset) => {
    setSelectedPersp(p);
    setHorizonPos(p.horizonY);
    setVp1Offset(p.vp1X);
    if (p.vp2X) setVp2Offset(p.vp2X);
  };

  // Calculate Golden Ratio outputs
  const calculatedPhiResult = dimensionMode === 'widthToHeight'
    ? (inputDimension / 1.618).toFixed(2)
    : (inputDimension * 1.618).toFixed(2);

  return (
    <div
      className={`w-full border ${panelBg} p-4 md:p-6 transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0' : 'rounded-2xl'
      }`}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-rose-500/20 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-rose-600/30">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                {isArabic ? 'المرسم المعماري والفنون الجميلة الافتراضي' : 'Virtual Fine Arts & Architectural Studio'}
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-rose-500/10 text-rose-500 border border-rose-500/30">
                MoE Accredited 🎨
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {isArabic
                ? 'محاكاة المنظور الحر، دائرة وتناغمات الألوان، حاسبة النسبة الذهبية φ، الأطباق النجمية الإسلامية، واختبارات القدرات'
                : 'Freehand perspective drafting, color harmonic wheels, Golden Ratio φ calculator, Islamic geometric stars & aptitude simulations'}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950/40 border border-rose-500/20">
          {/* 4K Archival Museum Studios */}
          <button
            onClick={() => setActiveTab('thutmose_nefertiti')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'thutmose_nefertiti'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-amber-400/90 hover:text-amber-300 hover:bg-amber-950/40 border border-amber-500/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            {isArabic ? 'نفرتيتي (1345 ق.م) 4K' : 'Nefertiti 4K'}
          </button>
          <button
            onClick={() => setActiveTab('mokhtar_nahdat_misr')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'mokhtar_nahdat_misr'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-rose-400/90 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-500/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-rose-300" />
            {isArabic ? 'نهضة مصر (1928) 4K' : 'Nahdat Misr 4K'}
          </button>
          <button
            onClick={() => setActiveTab('hassan_fathy_gourna')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'hassan_fathy_gourna'
                ? 'bg-amber-700 text-white shadow-md shadow-amber-700/30'
                : 'text-yellow-400/90 hover:text-yellow-300 hover:bg-yellow-950/40 border border-yellow-500/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            {isArabic ? 'حسن فتحي (1945) 4K' : 'Hassan Fathy 4K'}
          </button>
          <button
            onClick={() => setActiveTab('da_vinci_vitruvian')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'da_vinci_vitruvian'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                : 'text-sky-400/90 hover:text-sky-300 hover:bg-sky-950/40 border border-sky-500/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            {isArabic ? 'فيتروفيان (1490) 4K' : 'Vitruvian Man 4K'}
          </button>

          <span className="w-px h-6 bg-slate-700/50 mx-1 hidden sm:inline-block" />

          <button
            onClick={() => setActiveTab('perspective')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'perspective'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Eye className="w-4 h-4" />
            {isArabic ? 'المنظور الحر' : 'Perspective'}
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'colors'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Brush className="w-4 h-4" />
            {isArabic ? 'دائرة الألوان' : 'Color Wheel'}
          </button>
          <button
            onClick={() => setActiveTab('golden_ratio')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'golden_ratio'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Building2 className="w-4 h-4" />
            {isArabic ? 'النسبة الذهبية φ' : 'Golden Ratio'}
          </button>
          <button
            onClick={() => setActiveTab('tessellation')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'tessellation'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Compass className="w-4 h-4" />
            {isArabic ? 'الأطباق النجمية' : 'Islamic Stars'}
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'quiz'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Award className="w-4 h-4" />
            {isArabic ? 'اختبار القدرات' : 'Aptitude Exam'}
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/60 transition-colors border border-rose-500/20 cursor-pointer flex items-center justify-center shrink-0"
            title={isFullscreen ? (isArabic ? 'خروج من ملء الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-rose-400" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 4K Archival Fine Arts & Architecture Master Studios Showcase Jump Banner */}
      <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-rose-950/30 to-slate-950 border border-amber-500/30 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {isArabic ? 'متاحف الفنون التشكيلية والعمارة الخالدة بدقة 4K الأرشيفية' : '4K Archival Fine Arts & Vernacular Architecture Studios'}
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            {isArabic ? '4 استوديوهات متحفية تفاعلية مدعومة بنقاط الفحص والتحليل البصري' : '4 Historical Museum Folios with Deep Interactive Explorers'}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <button
            onClick={() => setActiveTab('thutmose_nefertiti')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer min-h-[44px] flex items-center justify-between ${
              activeTab === 'thutmose_nefertiti'
                ? 'bg-amber-600/30 border-amber-400 text-white shadow-md'
                : 'bg-slate-900/80 border-amber-500/20 text-slate-300 hover:border-amber-400/60'
            }`}
          >
            <div>
              <div className="text-xs font-bold text-amber-300">
                {isArabic ? 'تحتمس: رأس نفرتيتي' : 'Thutmose: Nefertiti Bust'}
              </div>
              <div className="text-[10px] text-slate-400">c. 1345 BCE • Amarna Canon</div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400">4K</span>
          </button>

          <button
            onClick={() => setActiveTab('mokhtar_nahdat_misr')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer min-h-[44px] flex items-center justify-between ${
              activeTab === 'mokhtar_nahdat_misr'
                ? 'bg-rose-600/30 border-rose-400 text-white shadow-md'
                : 'bg-slate-900/80 border-rose-500/20 text-slate-300 hover:border-rose-400/60'
            }`}
          >
            <div>
              <div className="text-xs font-bold text-rose-300">
                {isArabic ? 'محمود مختار: نهضة مصر' : 'Mahmoud Mokhtar: Nahdat Misr'}
              </div>
              <div className="text-[10px] text-slate-400">1928 CE • Aswan Granite</div>
            </div>
            <span className="text-xs font-mono font-bold text-rose-400">4K</span>
          </button>

          <button
            onClick={() => setActiveTab('hassan_fathy_gourna')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer min-h-[44px] flex items-center justify-between ${
              activeTab === 'hassan_fathy_gourna'
                ? 'bg-amber-700/30 border-yellow-400 text-white shadow-md'
                : 'bg-slate-900/80 border-yellow-500/20 text-slate-300 hover:border-yellow-400/60'
            }`}
          >
            <div>
              <div className="text-xs font-bold text-yellow-300">
                {isArabic ? 'حسن فتحي: عمارة الفقراء' : 'Hassan Fathy: New Gourna'}
              </div>
              <div className="text-[10px] text-slate-400">1945 CE • Adobe & Malqaf</div>
            </div>
            <span className="text-xs font-mono font-bold text-yellow-400">4K</span>
          </button>

          <button
            onClick={() => setActiveTab('da_vinci_vitruvian')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer min-h-[44px] flex items-center justify-between ${
              activeTab === 'da_vinci_vitruvian'
                ? 'bg-sky-600/30 border-sky-400 text-white shadow-md'
                : 'bg-slate-900/80 border-sky-500/20 text-slate-300 hover:border-sky-400/60'
            }`}
          >
            <div>
              <div className="text-xs font-bold text-sky-300">
                {isArabic ? 'ليوناردو: رجل فيتروفيان' : 'Da Vinci: Vitruvian Man'}
              </div>
              <div className="text-[10px] text-slate-400">c. 1490 CE • Golden Ratio Φ</div>
            </div>
            <span className="text-xs font-mono font-bold text-sky-400">4K</span>
          </button>
        </div>
      </div>

      {/* 4K Archival Master Studio Viewports */}
      {activeTab === 'thutmose_nefertiti' && (
        <div className="mt-6">
          <ThutmoseNefertitiStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {activeTab === 'mokhtar_nahdat_misr' && (
        <div className="mt-6">
          <MahmoudMokhtarNahdatMisrStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {activeTab === 'hassan_fathy_gourna' && (
        <div className="mt-6">
          <HassanFathyNewGournaStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {activeTab === 'da_vinci_vitruvian' && (
        <div className="mt-6">
          <VitruvianManArchitectureStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {/* Tab 1: Perspective Drafting Studio */}
      {activeTab === 'perspective' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-4`}>
              <h3 className="text-sm font-bold flex items-center gap-2 text-rose-400">
                <Sliders className="w-4 h-4" />
                {isArabic ? 'أنماط المنظور الهندسي' : 'Perspective Projections'}
              </h3>
              <div className="space-y-2">
                {PERSPECTIVE_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPerspPreset(preset)}
                    className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border text-xs transition-all cursor-pointer ${
                      selectedPersp.id === preset.id
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-semibold shadow-xs'
                        : 'border-slate-700/50 hover:border-slate-600 text-slate-400 hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="font-bold text-slate-200">
                      {isArabic ? preset.nameAr : preset.nameEn}
                    </div>
                    <div className="text-[11px] opacity-80 mt-1 line-clamp-1">
                      {isArabic ? preset.architecturalExamplesAr : preset.architecturalExamplesEn}
                    </div>
                  </button>
                ))}
              </div>

              {/* Dynamic Adjusters */}
              <div className="space-y-3 pt-3 border-t border-slate-700/50">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">{isArabic ? 'مستوى خط الأفق (عين الناظر):' : 'Horizon Level:'}</span>
                    <span className="font-mono text-rose-400">{horizonPos}%</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="85"
                    value={horizonPos}
                    onChange={(e) => setHorizonPos(Number(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">{isArabic ? 'موضع نقطة التلاشي 1 (VP1):' : 'Vanishing Point 1:'}</span>
                    <span className="font-mono text-rose-400">{vp1Offset}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={vp1Offset}
                    onChange={(e) => setVp1Offset(Number(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                </div>

                {selectedPersp.type !== 'one-point' && (
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">{isArabic ? 'موضع نقطة التلاشي 2 (VP2):' : 'Vanishing Point 2:'}</span>
                      <span className="font-mono text-rose-400">{vp2Offset}%</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="98"
                      value={vp2Offset}
                      onChange={(e) => setVp2Offset(Number(e.target.value))}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400">{isArabic ? 'إظهار خطوط الأشعة الشبكية:' : 'Show Ray Lines:'}</span>
                  <button
                    onClick={() => setShowWireframe(!showWireframe)}
                    className={`min-h-[44px] min-w-[70px] px-3 py-2 text-xs font-bold rounded-xl border cursor-pointer transition-all flex items-center justify-center ${
                      showWireframe ? 'bg-rose-500/20 border-rose-500 text-rose-400 shadow-xs' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {showWireframe ? (isArabic ? 'مفعّلة' : 'Active') : (isArabic ? 'معطلة' : 'Hidden')}
                  </button>
                </div>
              </div>
            </div>

            {/* Architectural Rule Callout */}
            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-2`}>
              <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {isArabic ? 'القاعدة المعمارية الذهبية:' : 'Architectural Rule:'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isArabic ? selectedPersp.keyRuleAr : selectedPersp.keyRuleEn}
              </p>
            </div>
          </div>

          {/* Interactive Drafting Canvas Column */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="relative w-full h-[420px] rounded-xl border border-rose-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden flex items-center justify-center shadow-inner">
              <svg className="w-full h-full" viewBox="0 0 800 420" preserveAspectRatio="none">
                {/* Horizon Line */}
                <line
                  x1="0"
                  y1={(horizonPos / 100) * 420}
                  x2="800"
                  y2={(horizonPos / 100) * 420}
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                <text
                  x="20"
                  y={(horizonPos / 100) * 420 - 8}
                  fill="#ef4444"
                  fontSize="12"
                  fontWeight="bold"
                >
                  {isArabic ? 'خط الأفق (مستوى عين الناظر)' : 'Horizon Line (Eye Level)'}
                </text>

                {/* Vanishing Points */}
                <circle cx={(vp1Offset / 100) * 800} cy={(horizonPos / 100) * 420} r="5" fill="#f59e0b" />
                <text
                  x={(vp1Offset / 100) * 800 - 15}
                  y={(horizonPos / 100) * 420 + 20}
                  fill="#f59e0b"
                  fontSize="11"
                  fontWeight="bold"
                >
                  VP1
                </text>

                {selectedPersp.type !== 'one-point' && (
                  <>
                    <circle cx={(vp2Offset / 100) * 800} cy={(horizonPos / 100) * 420} r="5" fill="#3b82f6" />
                    <text
                      x={(vp2Offset / 100) * 800 - 15}
                      y={(horizonPos / 100) * 420 + 20}
                      fill="#3b82f6"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      VP2
                    </text>
                  </>
                )}

                {/* Projected Architectural Volume */}
                {selectedPersp.type === 'one-point' && (
                  <g>
                    {/* Perspective Ray Lines */}
                    {showWireframe && (
                      <>
                        <line x1="280" y1="280" x2={(vp1Offset / 100) * 800} y2={(horizonPos / 100) * 420} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                        <line x1="520" y1="280" x2={(vp1Offset / 100) * 800} y2={(horizonPos / 100) * 420} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                        <line x1="280" y1="140" x2={(vp1Offset / 100) * 800} y2={(horizonPos / 100) * 420} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                        <line x1="520" y1="140" x2={(vp1Offset / 100) * 800} y2={(horizonPos / 100) * 420} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                      </>
                    )}

                    {/* Back Plane */}
                    <rect x="340" y="175" width="120" height="70" fill="#1e293b" stroke="#e2e8f0" strokeWidth="1.5" strokeOpacity="0.7" />

                    {/* Connecting Side Walls */}
                    <polygon points={`280,140 340,175 340,245 280,280`} fill="#334155" fillOpacity="0.8" stroke="#94a3b8" strokeWidth="1.5" />
                    <polygon points={`520,140 460,175 460,245 520,280`} fill="#475569" fillOpacity="0.8" stroke="#94a3b8" strokeWidth="1.5" />

                    {/* Ceiling & Floor */}
                    <polygon points={`280,140 520,140 460,175 340,175`} fill="#0f172a" fillOpacity="0.9" stroke="#cbd5e1" strokeWidth="1.5" />
                    <polygon points={`280,280 520,280 460,245 340,245`} fill="#1e1b4b" fillOpacity="0.8" stroke="#cbd5e1" strokeWidth="1.5" />

                    {/* Front Frame */}
                    <rect x="280" y="140" width="240" height="140" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
                  </g>
                )}

                {selectedPersp.type === 'two-point' && (
                  <g>
                    {/* Front Corner Upright */}
                    <line x1="400" y1="160" x2="400" y2="330" stroke="#f43f5e" strokeWidth="3" />

                    {/* Orthogonals to VP1 */}
                    {showWireframe && (
                      <>
                        <line x1="400" y1="160" x2={(vp1Offset / 100) * 800} y2={(horizonPos / 100) * 420} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                        <line x1="400" y1="330" x2={(vp1Offset / 100) * 800} y2={(horizonPos / 100) * 420} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                      </>
                    )}

                    {/* Orthogonals to VP2 */}
                    {showWireframe && (
                      <>
                        <line x1="400" y1="160" x2={(vp2Offset / 100) * 800} y2={(horizonPos / 100) * 420} stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                        <line x1="400" y1="330" x2={(vp2Offset / 100) * 800} y2={(horizonPos / 100) * 420} stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                      </>
                    )}

                    {/* Left Facade Polygon */}
                    <polygon
                      points={`400,160 250,185 250,295 400,330`}
                      fill="#be123c"
                      fillOpacity="0.75"
                      stroke="#fb7185"
                      strokeWidth="2"
                    />

                    {/* Right Facade Polygon */}
                    <polygon
                      points={`400,160 550,185 550,295 400,330`}
                      fill="#881337"
                      fillOpacity="0.9"
                      stroke="#fda4af"
                      strokeWidth="2"
                    />

                    {/* Rooftop Polygon if below horizon */}
                    {horizonPos > 40 && (
                      <polygon
                        points={`400,160 250,185 400,210 550,185`}
                        fill="#f43f5e"
                        fillOpacity="0.5"
                        stroke="#fecdd3"
                        strokeWidth="1.5"
                      />
                    )}
                  </g>
                )}

                {selectedPersp.type === 'three-point' && (
                  <g>
                    {/* Skyward / Nadir convergence */}
                    <polygon
                      points={`400,100 280,310 400,350`}
                      fill="#be123c"
                      fillOpacity="0.8"
                      stroke="#fb7185"
                      strokeWidth="2"
                    />
                    <polygon
                      points={`400,100 520,310 400,350`}
                      fill="#881337"
                      fillOpacity="0.95"
                      stroke="#fda4af"
                      strokeWidth="2"
                    />
                    <line x1="400" y1="100" x2="400" y2="350" stroke="#f43f5e" strokeWidth="3" />
                  </g>
                )}
              </svg>
            </div>

            <div className={`p-4 rounded-xl border ${subPanelBg} text-xs text-slate-300 leading-relaxed`}>
              <span className="font-bold text-rose-400">{isArabic ? 'وصف النمط المختار:' : 'Selected Mode Description:'} </span>
              {isArabic ? selectedPersp.descriptionAr : selectedPersp.descriptionEn}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Color Wheel & Harmonic Schemes */}
      {activeTab === 'colors' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-4">
            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-3`}>
              <h3 className="text-sm font-bold flex items-center gap-2 text-rose-400">
                <Brush className="w-4 h-4" />
                {isArabic ? 'نظم التوافق اللوني المعماري' : 'Harmonic Color Systems'}
              </h3>
              <div className="space-y-2">
                {COLOR_HARMONIES.map((scheme) => (
                  <button
                    key={scheme.id}
                    onClick={() => {
                      setSelectedScheme(scheme);
                      setActiveHueAngle(scheme.baseHue);
                    }}
                    className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border text-xs transition-all cursor-pointer ${
                      selectedScheme.id === scheme.id
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-semibold shadow-xs'
                        : 'border-slate-700/50 hover:border-slate-600 text-slate-400 hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200">{isArabic ? scheme.nameAr : scheme.nameEn}</span>
                      <div className="flex gap-1">
                        {scheme.colors.map((c, i) => (
                          <span
                            key={i}
                            className="w-3.5 h-3.5 rounded-full border border-black/40 inline-block"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Psych & Architectural Impact */}
            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-3`}>
              <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {isArabic ? 'الأثر النفسي والمعماري المعتمد:' : 'Psychological & Architectural Impact:'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-100">{isArabic ? 'التأثير الحسي:' : 'Sensory Effect:'} </span>
                {isArabic ? selectedScheme.emotionalEffectAr : selectedScheme.emotionalEffectEn}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-700/50">
                <span className="font-semibold text-slate-100">{isArabic ? 'الاستخدام المعماري:' : 'Architectural Use:'} </span>
                {isArabic ? selectedScheme.architecturalUseAr : selectedScheme.architecturalUseEn}
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-400">
                {isArabic ? 'معدل التباين الضوئي:' : 'Contrast Ratio:'} {selectedScheme.lightContrastRatio}
              </div>
            </div>
          </div>

          {/* Color Wheel & Palette Visualizer */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* SVG Color Wheel */}
              <div className="h-[340px] rounded-xl border border-rose-500/30 bg-slate-950 flex flex-col items-center justify-center p-4 relative">
                <svg className="w-64 h-64" viewBox="0 0 200 200">
                  <defs>
                    <radialGradient id={`${svgId}-colorWheelGrad`}>
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#1e293b" />
                    </radialGradient>
                  </defs>
                  {/* Spectrum ring segments */}
                  {Array.from({ length: 12 }).map((_, idx) => {
                    const angle = idx * 30;
                    const rad1 = ((angle - 15) * Math.PI) / 180;
                    const rad2 = ((angle + 15) * Math.PI) / 180;
                    const x1 = 100 + 75 * Math.cos(rad1);
                    const y1 = 100 + 75 * Math.sin(rad1);
                    const x2 = 100 + 75 * Math.cos(rad2);
                    const y2 = 100 + 75 * Math.sin(rad2);
                    const isDominant = Math.abs(angle - activeHueAngle) <= 15;
                    return (
                      <path
                        key={idx}
                        d={`M 100,100 L ${x1},${y1} A 75 75 0 0 1 ${x2},${y2} Z`}
                        fill={`hsl(${angle}, 75%, 50%)`}
                        stroke={isDominant ? '#ffffff' : '#0f172a'}
                        strokeWidth={isDominant ? 3 : 1}
                        className="cursor-pointer hover:opacity-90 transition-all"
                        onClick={() => setActiveHueAngle(angle)}
                      />
                    );
                  })}
                  <circle cx="100" cy="100" r="35" fill="#0f172a" stroke="#f43f5e" strokeWidth="2" />
                  <text x="100" y="105" textAnchor="middle" fill="#f43f5e" fontSize="12" fontWeight="bold">
                    {activeHueAngle}°
                  </text>
                </svg>
                <div className="text-[11px] text-slate-400 mt-2 text-center">
                  {isArabic ? 'انقر على أي قطاع لتغيير زاوية الأساس اللوني' : 'Click any hue sector to calibrate base angle'}
                </div>
              </div>

              {/* Color Swatch Breakdown */}
              <div className={`p-4 rounded-xl border ${subPanelBg} flex flex-col justify-between space-y-3`}>
                <h4 className="text-xs font-bold text-slate-300">
                  {isArabic ? 'مخطط التوزيع الوزني للألوان بالمشروع (قاعدة 60-30-10):' : 'Palette Distribution (60-30-10 Rule):'}
                </h4>
                <div className="space-y-3">
                  {selectedScheme.colors.map((c, i) => (
                    <div key={i} className="p-3 rounded-lg border border-slate-700/60 bg-slate-900/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg shadow-md border border-white/20"
                          style={{ backgroundColor: c.hex }}
                        />
                        <div>
                          <div className="text-xs font-bold text-slate-100">
                            {isArabic ? c.nameAr : c.nameEn}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {isArabic ? c.roleAr : c.roleEn}
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded">
                        {c.hex}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded border border-slate-800">
                  {isArabic
                    ? '💡 قاعدة 60-30-10: 60% للون المحايد الأساسي للجدران، 30% للون الثانوي للأثاث والفتحات، 10% للون المكمل للوحات واللمسات البصرية.'
                    : '💡 60-30-10 Rule: 60% dominant wall field, 30% secondary structure/casework, 10% accent vibrancy pop.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Golden Ratio & Architectural Orders */}
      {activeTab === 'golden_ratio' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-4">
            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-3`}>
              <h3 className="text-sm font-bold flex items-center gap-2 text-rose-400">
                <Building2 className="w-4 h-4" />
                {isArabic ? 'نماذج العمارة الخاضعة لـ φ' : 'Monuments Built on φ'}
              </h3>
              <div className="space-y-2">
                {GOLDEN_RATIO_ARCHETYPES.map((arch) => (
                  <button
                    key={arch.id}
                    onClick={() => setSelectedArchetype(arch)}
                    className={`w-full text-start p-3 rounded-lg border text-xs transition-all ${
                      selectedArchetype.id === arch.id
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-semibold'
                        : 'border-slate-700/50 hover:border-slate-600 text-slate-400'
                    }`}
                  >
                    <div className="font-bold text-slate-200">{isArabic ? arch.nameAr : arch.nameEn}</div>
                    <div className="text-[11px] opacity-80 mt-1 flex justify-between">
                      <span>{isArabic ? arch.monumentAr : arch.monumentEn}</span>
                      <span className="text-amber-400 font-mono">φ ≈ 1.618</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Dimension Calculator */}
            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-3`}>
              <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                {isArabic ? 'حاسبة التناسب الذهبي الفوري:' : 'Golden Ratio Dimension Engine:'}
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex gap-2">
                  <button
                    onClick={() => setDimensionMode('widthToHeight')}
                    className={`flex-1 min-h-[44px] py-2 px-3 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-center ${
                      dimensionMode === 'widthToHeight'
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-xs'
                        : 'border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {isArabic ? 'العرض -> الارتفاع (÷ φ)' : 'Width -> Height (÷ φ)'}
                  </button>
                  <button
                    onClick={() => setDimensionMode('heightToWidth')}
                    className={`flex-1 min-h-[44px] py-2 px-3 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-center ${
                      dimensionMode === 'heightToWidth'
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-xs'
                        : 'border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {isArabic ? 'الارتفاع -> العرض (× φ)' : 'Height -> Width (× φ)'}
                  </button>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">{isArabic ? 'البعد المعلوم (متر):' : 'Known Dimension (m):'}</span>
                    <span className="font-mono text-rose-400 font-bold">{inputDimension} m</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={inputDimension}
                    onChange={(e) => setInputDimension(Number(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400">{isArabic ? 'البعد الذهبي المتناسق المطلوب:' : 'Harmonized Golden Dimension:'}</span>
                  <div className="text-lg font-mono font-bold text-amber-400 mt-0.5">
                    {calculatedPhiResult} {isArabic ? 'متراً' : 'meters'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Golden Spiral & Architectural Diagram */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="relative w-full h-[360px] rounded-xl border border-rose-500/30 bg-slate-950 flex items-center justify-center p-4 overflow-hidden shadow-inner">
              <svg className="w-full h-full max-w-[500px]" viewBox="0 0 500 310">
                <defs>
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer Golden Rectangle (Border Guide) */}
                <rect x="50" y="35" width="388.3" height="240" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                {/* Nested Golden Squares with Precise Proportions (φ ≈ 1.618) */}
                <rect x="50" y="35" width="240" height="240" fill="rgba(244, 63, 94, 0.06)" stroke="#f43f5e" strokeWidth="2" />
                <rect x="290" y="35" width="148.3" height="148.3" fill="rgba(245, 158, 11, 0.06)" stroke="#f59e0b" strokeWidth="2" />
                <rect x="346.7" y="183.3" width="91.7" height="91.7" fill="rgba(59, 130, 246, 0.06)" stroke="#3b82f6" strokeWidth="2" />
                <rect x="290" y="218.3" width="56.7" height="56.7" fill="rgba(16, 185, 129, 0.06)" stroke="#10b981" strokeWidth="2" />
                <rect x="290" y="183.3" width="35.0" height="35.0" fill="rgba(139, 92, 246, 0.06)" stroke="#8b5cf6" strokeWidth="1.5" />
                <rect x="325" y="183.3" width="21.6" height="21.6" fill="rgba(236, 72, 153, 0.06)" stroke="#ec4899" strokeWidth="1.5" />
                <rect x="333.3" y="205.0" width="13.4" height="13.4" fill="rgba(6, 182, 212, 0.06)" stroke="#06b6d4" strokeWidth="1" />
                <rect x="325" y="210.1" width="8.3" height="8.3" fill="rgba(234, 179, 8, 0.06)" stroke="#eab308" strokeWidth="1" />

                {/* Continuous Fibonacci Logarithmic Golden Spiral Curve */}
                <path
                  d="M 50.0,275.0 A 240.0,240.0 0 0,1 290.0,35.0 A 148.3,148.3 0 0,1 438.3,183.3 A 91.7,91.7 0 0,1 346.7,275.0 A 56.7,56.7 0 0,1 290.0,218.3 A 35.0,35.0 0 0,1 325.0,183.3 A 21.6,21.6 0 0,1 346.7,205.0 A 13.4,13.4 0 0,1 333.3,218.3 A 8.3,8.3 0 0,1 325.0,210.1"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#goldGlow)"
                />

                {/* Dimension & Proportion Scale Labels */}
                <text x="170" y="155" fill="#f43f5e" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">φ = 1.618</text>
                <text x="364" y="110" fill="#f59e0b" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">1.000</text>
                <text x="392" y="235" fill="#60a5fa" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">0.618</text>
                <text x="318" y="252" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">0.382</text>
              </svg>
            </div>

            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-2`}>
              <h4 className="text-xs font-bold text-rose-400">
                {isArabic ? selectedArchetype.nameAr : selectedArchetype.nameEn} ({isArabic ? selectedArchetype.eraAr : selectedArchetype.eraEn})
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isArabic ? selectedArchetype.aspectDescriptionAr : selectedArchetype.aspectDescriptionEn}
              </p>
              <p className="text-xs text-amber-300/90 pt-1">
                {isArabic ? selectedArchetype.architecturalImpactAr : selectedArchetype.architecturalImpactEn}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Islamic Tessellation & Geometric Star Rosettes */}
      {activeTab === 'tessellation' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-4">
            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-3`}>
              <h3 className="text-sm font-bold flex items-center gap-2 text-rose-400">
                <Compass className="w-4 h-4" />
                {isArabic ? 'أنواع الأطباق النجمية' : 'Star Rosette Orders'}
              </h3>
              <div className="space-y-2">
                {ISLAMIC_TESSELLATION_PATTERNS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedTessellation(p);
                      setTessellationStep(0);
                    }}
                    className={`w-full text-start p-3 rounded-lg border text-xs transition-all ${
                      selectedTessellation.id === p.id
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-semibold'
                        : 'border-slate-700/50 hover:border-slate-600 text-slate-400'
                    }`}
                  >
                    <div className="font-bold text-slate-200">{isArabic ? p.nameAr : p.nameEn}</div>
                    <div className="text-[11px] opacity-80 mt-1 flex justify-between">
                      <span>{isArabic ? p.historicalPeriodAr : p.historicalPeriodEn}</span>
                      <span className="text-amber-400 font-bold">{p.symmetryOrder}-Fold</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Ablaq Material Switcher */}
            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-3`}>
              <h4 className="text-xs font-bold text-amber-400">
                {isArabic ? 'طراز التعشيق الرخامي (الأبلق):' : 'Ablaq Marble Colorways:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => setAblaqPalette('traditional')}
                  className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all flex items-center justify-center ${
                    ablaqPalette === 'traditional'
                      ? 'bg-amber-600/30 border-amber-500 text-amber-300 shadow-xs'
                      : 'border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  {isArabic ? 'أبلق تقليدي (أحمر وأبيض)' : 'Classic Ablaq'}
                </button>
                <button
                  onClick={() => setAblaqPalette('golden')}
                  className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all flex items-center justify-center ${
                    ablaqPalette === 'golden'
                      ? 'bg-yellow-600/30 border-yellow-500 text-yellow-300 shadow-xs'
                      : 'border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  {isArabic ? 'مذهب مملوكي' : 'Mamluk Gold'}
                </button>
                <button
                  onClick={() => setAblaqPalette('turquoise')}
                  className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all flex items-center justify-center ${
                    ablaqPalette === 'turquoise'
                      ? 'bg-teal-600/30 border-teal-500 text-teal-300 shadow-xs'
                      : 'border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  {isArabic ? 'فيروزي فاطمي' : 'Fatimid Teal'}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Islamic Rosette Canvas - Museum-Grade Girih Geometric Strapwork */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="relative w-full h-[410px] rounded-xl border border-rose-500/30 bg-slate-950 flex items-center justify-center p-4 overflow-hidden shadow-2xl">
              <svg className="w-96 h-96" viewBox="0 0 320 320">
                <defs>
                  {/* Radial Backdrop Glow */}
                  <radialGradient id={`${svgId}-rosetteGlow`}>
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#78350f" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                  </radialGradient>

                  {/* Gold Leaf Shimmer */}
                  <linearGradient id={`${svgId}-goldLeaf`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="40%" stopColor="#f59e0b" />
                    <stop offset="70%" stopColor="#b45309" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>

                  {/* Central Medallion Dome Gradient */}
                  <radialGradient id={`${svgId}-centralBoss`} cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#fde68a" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#78350f" />
                  </radialGradient>

                  {/* Filter for Drop Shadow on Strapwork Ribbons */}
                  <filter id={`${svgId}-girihShadow`} x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Outer Decorative Circular Frame */}
                <circle cx="160" cy="160" r="150" fill={`url(#${svgId}-rosetteGlow)`} />
                <circle cx="160" cy="160" r="146" fill="none" stroke="url(#${svgId}-goldLeaf)" strokeWidth="2.5" />
                <circle cx="160" cy="160" r="140" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
                <circle cx="160" cy="160" r="95" fill="none" stroke="#64748b" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />

                {/* 1. Outer Star Petals / Kite Louzat (Outer Tier) */}
                {Array.from({ length: selectedTessellation.symmetryOrder }).map((_, idx) => {
                  const N = selectedTessellation.symmetryOrder;
                  const step = 360 / N;
                  const angle = idx * step;
                  const rad1 = (angle * Math.PI) / 180;
                  const radMid = ((angle + step / 2) * Math.PI) / 180;
                  const radNext = (((angle + step)) * Math.PI) / 180;

                  const rTip = 138;
                  const rNotch = 95;
                  const rInner = 60;

                  const tipX = 160 + rTip * Math.cos(rad1);
                  const tipY = 160 + rTip * Math.sin(rad1);

                  const notchX = 160 + rNotch * Math.cos(radMid);
                  const notchY = 160 + rNotch * Math.sin(radMid);

                  const inner1X = 160 + rInner * Math.cos(rad1);
                  const inner1Y = 160 + rInner * Math.sin(rad1);

                  const nextTipX = 160 + rTip * Math.cos(radNext);
                  const nextTipY = 160 + rTip * Math.sin(radNext);

                  const primaryColor =
                    ablaqPalette === 'traditional'
                      ? idx % 2 === 0 ? '#991b1b' : '#f8fafc'
                      : ablaqPalette === 'golden'
                      ? idx % 2 === 0 ? '#d97706' : '#292524'
                      : idx % 2 === 0 ? '#0f766e' : '#0369a1';

                  const secondaryColor =
                    ablaqPalette === 'traditional'
                      ? idx % 2 === 0 ? '#be123c' : '#e2e8f0'
                      : ablaqPalette === 'golden'
                      ? idx % 2 === 0 ? '#f59e0b' : '#44403c'
                      : idx % 2 === 0 ? '#14b8a6' : '#0284c7';

                  return (
                    <g key={idx} filter={`url(#${svgId}-girihShadow)`}>
                      {/* Louza Outer Kite Polygon */}
                      <polygon
                        points={`160,160 ${inner1X},${inner1Y} ${tipX},${tipY} ${notchX},${notchY}`}
                        fill={primaryColor}
                        stroke="#f59e0b"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points={`160,160 ${notchX},${notchY} ${nextTipX},${nextTipY}`}
                        fill={secondaryColor}
                        stroke="#f59e0b"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </g>
                  );
                })}

                {/* 2. Middle Interlocking Girih Strapwork Ribbon Band */}
                {Array.from({ length: selectedTessellation.symmetryOrder }).map((_, idx) => {
                  const N = selectedTessellation.symmetryOrder;
                  const step = 360 / N;
                  const angle = idx * step;
                  const rad1 = (angle * Math.PI) / 180;
                  const radMid = ((angle + step / 2) * Math.PI) / 180;

                  const rOuter = 95;
                  const rInner = 52;

                  const xO = 160 + rOuter * Math.cos(radMid);
                  const yO = 160 + rOuter * Math.sin(radMid);
                  const xI = 160 + rInner * Math.cos(rad1);
                  const yI = 160 + rInner * Math.sin(rad1);

                  return (
                    <line
                      key={`strap-${idx}`}
                      x1={xI}
                      y1={yI}
                      x2={xO}
                      y2={yO}
                      stroke="url(#${svgId}-goldLeaf)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* 3. Inner Polygonal Rosette Star (Central Khatam Core) */}
                <circle cx="160" cy="160" r="48" fill="#090d16" stroke="#f59e0b" strokeWidth="2.5" />
                {Array.from({ length: selectedTessellation.symmetryOrder }).map((_, idx) => {
                  const N = selectedTessellation.symmetryOrder;
                  const angle = (idx * 360) / N;
                  const rad = (angle * Math.PI) / 180;
                  const radMid = ((angle + 180 / N) * Math.PI) / 180;
                  const x1 = 160 + 44 * Math.cos(rad);
                  const y1 = 160 + 44 * Math.sin(rad);
                  const x2 = 160 + 26 * Math.cos(radMid);
                  const y2 = 160 + 26 * Math.sin(radMid);

                  return (
                    <polygon
                      key={`core-${idx}`}
                      points={`160,160 ${x1},${y1} ${x2},${y2}`}
                      fill={idx % 2 === 0 ? 'url(#${svgId}-goldLeaf)' : '#1e1b4b'}
                      stroke="#f59e0b"
                      strokeWidth="1.2"
                    />
                  );
                })}

                {/* 4. Central Raised Gilded Boss (Sultani Medal Center) */}
                <circle cx="160" cy="160" r="22" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="160" cy="160" r="14" fill={`url(#${svgId}-centralBoss)`} />
                <circle cx="160" cy="160" r="5" fill="#ffffff" opacity="0.8" />

                {/* Compass Axes & Construction Nodes */}
                <circle cx="160" cy="160" r="146" fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity="0.3" />
              </svg>
            </div>

            {/* Geometric Construction Steps */}
            <div className={`p-4 rounded-xl border ${subPanelBg} space-y-2`}>
              <h4 className="text-xs font-bold text-rose-400">
                {isArabic ? 'خطوات التشييد الهندسي الأكاديمي:' : 'Academic Geometry Construction Steps:'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                {(isArabic ? selectedTessellation.constructionStepAr : selectedTessellation.constructionStepEn).map(
                  (step, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-slate-900/60 border border-slate-700/50 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Fine Arts Faculty Aptitude Exam Simulator */}
      {activeTab === 'quiz' && (
        <div className="mt-6 max-w-3xl mx-auto space-y-6">
          <div className={`p-6 rounded-xl border ${subPanelBg} space-y-4`}>
            {/* Quiz Progress & Score */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold text-slate-300">
                  {isArabic ? 'السؤال' : 'Question'} {quizIndex + 1} / {FINE_ARTS_APTITUDE_QUIZ.length}
                </span>
              </div>
              <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {isArabic ? 'الدرجة:' : 'Score:'} {quizScore} / {FINE_ARTS_APTITUDE_QUIZ.length}
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full">
                {isArabic
                  ? FINE_ARTS_APTITUDE_QUIZ[quizIndex].categoryAr
                  : FINE_ARTS_APTITUDE_QUIZ[quizIndex].categoryEn}
              </span>
              <h3 className="text-base font-bold text-slate-100 leading-relaxed">
                {isArabic
                  ? FINE_ARTS_APTITUDE_QUIZ[quizIndex].questionAr
                  : FINE_ARTS_APTITUDE_QUIZ[quizIndex].questionEn}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-2.5 pt-2">
              {FINE_ARTS_APTITUDE_QUIZ[quizIndex].optionsAr.map((_, optIdx) => {
                const optText = isArabic
                  ? FINE_ARTS_APTITUDE_QUIZ[quizIndex].optionsAr[optIdx]
                  : FINE_ARTS_APTITUDE_QUIZ[quizIndex].optionsEn[optIdx];
                const isSelected = selectedQuizOption === optIdx;
                const isCorrect = FINE_ARTS_APTITUDE_QUIZ[quizIndex].correctIndex === optIdx;

                let optClass = 'border-slate-700/70 hover:border-slate-600 text-slate-300 bg-slate-900/40';
                if (isQuizSubmitted) {
                  if (isCorrect) {
                    optClass = 'border-emerald-500 bg-emerald-500/20 text-emerald-300 font-bold';
                  } else if (isSelected) {
                    optClass = 'border-rose-500 bg-rose-500/20 text-rose-300 line-through';
                  }
                } else if (isSelected) {
                  optClass = 'border-rose-500 bg-rose-500/20 text-rose-300 font-semibold';
                }

                return (
                  <button
                    key={optIdx}
                    disabled={isQuizSubmitted}
                    onClick={() => setSelectedQuizOption(optIdx)}
                    className={`w-full min-h-[44px] text-start p-3.5 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between gap-3 ${optClass}`}
                  >
                    <span>{optText}</span>
                    {isQuizSubmitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {isQuizSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Callout */}
            {isQuizSubmitted && (
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/30 text-xs text-emerald-200 leading-relaxed space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isArabic ? 'التحليل الأكاديمي النموذجي:' : 'Academic Explanation:'}
                </div>
                <div>
                  {isArabic
                    ? FINE_ARTS_APTITUDE_QUIZ[quizIndex].explanationAr
                    : FINE_ARTS_APTITUDE_QUIZ[quizIndex].explanationEn}
                </div>
              </div>
            )}

            {/* Quiz Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
              <button
                onClick={() => {
                  setQuizIndex(0);
                  setSelectedQuizOption(null);
                  setIsQuizSubmitted(false);
                  setQuizScore(0);
                }}
                className="min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-bold flex items-center gap-2 cursor-pointer transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                {isArabic ? 'إعادة الاختبار' : 'Reset'}
              </button>

              <div className="flex items-center gap-2">
                {!isQuizSubmitted ? (
                  <button
                    disabled={selectedQuizOption === null}
                    onClick={() => {
                      if (selectedQuizOption !== null) {
                        setIsQuizSubmitted(true);
                        if (selectedQuizOption === FINE_ARTS_APTITUDE_QUIZ[quizIndex].correctIndex) {
                          setQuizScore((prev) => prev + 1);
                        }
                      }
                    }}
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs disabled:opacity-50 transition-all shadow-md shadow-rose-600/30 cursor-pointer flex items-center justify-center"
                  >
                    {isArabic ? 'تأكيد الإجابة' : 'Submit Answer'}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (quizIndex < FINE_ARTS_APTITUDE_QUIZ.length - 1) {
                        setQuizIndex((prev) => prev + 1);
                        setSelectedQuizOption(null);
                        setIsQuizSubmitted(false);
                      }
                    }}
                    disabled={quizIndex >= FINE_ARTS_APTITUDE_QUIZ.length - 1}
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-md shadow-rose-600/30 cursor-pointer"
                  >
                    {isArabic ? 'السؤال التالي' : 'Next Question'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
