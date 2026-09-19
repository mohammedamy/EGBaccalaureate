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
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  initialTab?: FineArtsStudioTab;
}

export type FineArtsStudioTab = 'perspective' | 'colors' | 'golden_ratio' | 'tessellation' | 'quiz';

export const FineArtsArchitectureStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen = false,
  initialTab = 'perspective',
}) => {
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
    <div className={`w-full rounded-2xl border ${panelBg} p-4 md:p-6 transition-all duration-300 ${isFullscreen ? 'min-h-screen' : ''}`}>
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
          <button
            onClick={() => setActiveTab('perspective')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'perspective'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            {isArabic ? 'المنظور الحر' : 'Perspective'}
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'colors'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Brush className="w-3.5 h-3.5" />
            {isArabic ? 'دائرة الألوان' : 'Color Wheel'}
          </button>
          <button
            onClick={() => setActiveTab('golden_ratio')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'golden_ratio'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            {isArabic ? 'النسبة الذهبية φ' : 'Golden Ratio'}
          </button>
          <button
            onClick={() => setActiveTab('tessellation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'tessellation'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            {isArabic ? 'الأطباق النجمية' : 'Islamic Stars'}
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'quiz'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            {isArabic ? 'اختبار القدرات' : 'Aptitude Exam'}
          </button>
        </div>
      </div>

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
                    className={`w-full text-start p-3 rounded-lg border text-xs transition-all ${
                      selectedPersp.id === preset.id
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-semibold'
                        : 'border-slate-700/50 hover:border-slate-600 text-slate-400'
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
                    className={`px-2.5 py-1 text-xs rounded border ${
                      showWireframe ? 'bg-rose-500/20 border-rose-500 text-rose-400' : 'border-slate-700 text-slate-400'
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
                    className={`w-full text-start p-3 rounded-lg border text-xs transition-all ${
                      selectedScheme.id === scheme.id
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-semibold'
                        : 'border-slate-700/50 hover:border-slate-600 text-slate-400'
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
                    className={`flex-1 py-1.5 px-2 rounded border text-[11px] ${
                      dimensionMode === 'widthToHeight'
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                        : 'border-slate-700 text-slate-400'
                    }`}
                  >
                    {isArabic ? 'العرض -> الارتفاع (÷ φ)' : 'Width -> Height (÷ φ)'}
                  </button>
                  <button
                    onClick={() => setDimensionMode('heightToWidth')}
                    className={`flex-1 py-1.5 px-2 rounded border text-[11px] ${
                      dimensionMode === 'heightToWidth'
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                        : 'border-slate-700 text-slate-400'
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
            <div className="relative w-full h-[360px] rounded-xl border border-rose-500/30 bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
              <svg className="w-full h-full max-w-[500px]" viewBox="0 0 500 310">
                {/* Golden Rectangle subdivisions */}
                {/* Main 191.6 square */}
                <rect x="10" y="10" width="191.6" height="191.6" fill="none" stroke="#f43f5e" strokeWidth="2" />
                <rect x="201.6" y="10" width="118.4" height="118.4" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <rect x="201.6" y="128.4" width="73.2" height="73.2" fill="none" stroke="#3b82f6" strokeWidth="2" />
                <rect x="274.8" y="128.4" width="45.2" height="45.2" fill="none" stroke="#10b981" strokeWidth="2" />

                {/* Fibonacci Golden Spiral Curve */}
                <path
                  d="M 201.6,201.6 A 191.6,191.6 0 0,1 10,10 A 118.4,118.4 0 0,1 201.6,10 A 73.2,73.2 0 0,1 274.8,128.4"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3.5"
                />

                {/* Annotation Badges */}
                <text x="70" y="110" fill="#f43f5e" fontSize="16" fontWeight="bold">φ = 1.618</text>
                <text x="240" y="70" fill="#f59e0b" fontSize="13" fontWeight="bold">1.000</text>
                <text x="230" y="170" fill="#3b82f6" fontSize="11" fontWeight="bold">0.618</text>
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
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setAblaqPalette('traditional')}
                  className={`p-2 rounded border text-[11px] font-semibold text-center ${
                    ablaqPalette === 'traditional'
                      ? 'bg-amber-600/30 border-amber-500 text-amber-300'
                      : 'border-slate-700 text-slate-400'
                  }`}
                >
                  {isArabic ? 'أبلق تقليدي (أحمر وأبيض)' : 'Classic Ablaq'}
                </button>
                <button
                  onClick={() => setAblaqPalette('golden')}
                  className={`p-2 rounded border text-[11px] font-semibold text-center ${
                    ablaqPalette === 'golden'
                      ? 'bg-yellow-600/30 border-yellow-500 text-yellow-300'
                      : 'border-slate-700 text-slate-400'
                  }`}
                >
                  {isArabic ? 'مذهب مملوكي' : 'Mamluk Gold'}
                </button>
                <button
                  onClick={() => setAblaqPalette('turquoise')}
                  className={`p-2 rounded border text-[11px] font-semibold text-center ${
                    ablaqPalette === 'turquoise'
                      ? 'bg-teal-600/30 border-teal-500 text-teal-300'
                      : 'border-slate-700 text-slate-400'
                  }`}
                >
                  {isArabic ? 'فيروزي فاطمي' : 'Fatimid Teal'}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Islamic Rosette Canvas */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="relative w-full h-[380px] rounded-xl border border-rose-500/30 bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
              <svg className="w-80 h-80" viewBox="0 0 300 300">
                <defs>
                  <radialGradient id={`${svgId}-rosetteGlow`}>
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="150" cy="150" r="140" fill={`url(#${svgId}-rosetteGlow)`} />
                <circle cx="150" cy="150" r="130" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="150" cy="150" r="85" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />

                {/* 8-Fold or 12-Fold Star Rosette Rays */}
                {Array.from({ length: selectedTessellation.symmetryOrder }).map((_, idx) => {
                  const angle = (idx * 360) / selectedTessellation.symmetryOrder;
                  const rad = (angle * Math.PI) / 180;
                  const radMid = ((angle + 360 / (selectedTessellation.symmetryOrder * 2)) * Math.PI) / 180;

                  const xOuter = 150 + 120 * Math.cos(rad);
                  const yOuter = 150 + 120 * Math.sin(rad);
                  const xInner = 150 + 55 * Math.cos(radMid);
                  const yInner = 150 + 55 * Math.sin(radMid);

                  const rayColor =
                    ablaqPalette === 'traditional'
                      ? idx % 2 === 0
                        ? '#be123c'
                        : '#f8fafc'
                      : ablaqPalette === 'golden'
                      ? idx % 2 === 0
                        ? '#f59e0b'
                        : '#78350f'
                      : idx % 2 === 0
                      ? '#0d9488'
                      : '#0284c7';

                  return (
                    <g key={idx}>
                      <polygon
                        points={`150,150 ${xOuter},${yOuter} ${xInner},${yInner}`}
                        fill={rayColor}
                        fillOpacity="0.85"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                      />
                    </g>
                  );
                })}

                {/* Central Medallion */}
                <circle cx="150" cy="150" r="30" fill="#0f172a" stroke="#f59e0b" strokeWidth="3" />
                <circle cx="150" cy="150" r="8" fill="#f59e0b" />
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
                    className={`w-full text-start p-3.5 rounded-xl border text-xs transition-all flex items-start justify-between gap-3 ${optClass}`}
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
                className="px-3 py-1.5 rounded-lg border border-slate-700 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
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
                    className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs disabled:opacity-50 transition-all shadow-md shadow-rose-600/30"
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
                    className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-md shadow-rose-600/30"
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
