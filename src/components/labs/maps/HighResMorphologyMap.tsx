import React from 'react';
import type { Language } from '../../../i18n/translations';

interface Props {
  countryKey: string;
  lang: Language;
  theme?: string;
}

export const HighResMorphologyMap: React.FC<Props> = ({ countryKey, lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  // Common styles
  const graticuleStroke = isLight ? '#bae6fd' : '#1e293b';
  const graticuleText = isLight ? '#64748b' : '#475569';
  const landFill = isLight ? 'url(#landGradLight)' : 'url(#landGradDark)';
  const landStroke = isLight ? '#0d9488' : '#14b8a6';

  return (
    <div className="w-full flex flex-col items-center justify-center select-none relative">
      <svg
        className="w-full max-w-2xl h-auto aspect-[16/11] rounded-2xl border border-slate-800 shadow-2xl drop-shadow-2xl overflow-hidden"
        viewBox="0 0 600 420"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLight ? '#f0f9ff' : '#040b17'} />
            <stop offset="50%" stopColor={isLight ? '#e0f2fe' : '#09152b'} />
            <stop offset="100%" stopColor={isLight ? '#bae6fd' : '#061021'} />
          </linearGradient>

          <linearGradient id="landGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#115e59" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#0f766e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#042f2e" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="landGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#99f6e4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="surroundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.7" />
          </linearGradient>

          {/* Filters */}
          <filter id="landGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#14b8a6" floodOpacity="0.25" />
          </filter>
          <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Ocean Background */}
        <rect width="600" height="420" fill="url(#oceanGrad)" />

        {/* Graticule Grid (Latitude & Longitude) */}
        <g stroke={graticuleStroke} strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6">
          <line x1="50" y1="70" x2="550" y2="70" />
          <line x1="50" y1="140" x2="550" y2="140" />
          <line x1="50" y1="210" x2="550" y2="210" />
          <line x1="50" y1="280" x2="550" y2="280" />
          <line x1="50" y1="350" x2="550" y2="350" />

          <line x1="100" y1="30" x2="100" y2="390" />
          <line x1="200" y1="30" x2="200" y2="390" />
          <line x1="300" y1="30" x2="300" y2="390" />
          <line x1="400" y1="30" x2="400" y2="390" />
          <line x1="500" y1="30" x2="500" y2="390" />
        </g>

        {/* Cartographic Neatline / Frame */}
        <rect
          x="12"
          y="12"
          width="576"
          height="396"
          fill="none"
          stroke={isLight ? '#94a3b8' : '#334155'}
          strokeWidth="1.5"
          rx="12"
        />
        <rect
          x="16"
          y="16"
          width="568"
          height="388"
          fill="none"
          stroke={isLight ? '#cbd5e1' : '#1e293b'}
          strokeWidth="0.75"
          rx="10"
        />

        {/* ============================================================== */}
        {/* 1. EGYPT (مصر) - Ideal Compact Shape with Dual Maritime Facades */}
        {/* ============================================================== */}
        {countryKey === 'egypt' && (
          <g id="map-egypt">
            {/* Graticule Labels */}
            <text x="24" y="80" fill={graticuleText} fontSize="9" fontFamily="monospace">31°30' N</text>
            <text x="24" y="220" fill={graticuleText} fontSize="9" fontFamily="monospace">27°00' N</text>
            <text x="24" y="360" fill={graticuleText} fontSize="9" fontFamily="monospace">22°00' N</text>
            <text x="130" y="405" fill={graticuleText} fontSize="9" fontFamily="monospace">25° E</text>
            <text x="350" y="405" fill={graticuleText} fontSize="9" fontFamily="monospace">31° E</text>
            <text x="495" y="405" fill={graticuleText} fontSize="9" fontFamily="monospace">37° E</text>

            {/* Mediterranean & Red Sea Water Text */}
            <text x="250" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.7" textAnchor="middle">
              {isArabic ? 'البحر المتوسط (Mediterranean Sea)' : 'Mediterranean Sea'}
            </text>
            <text x="505" y="270" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.6" textAnchor="middle" transform="rotate(55 505 270)">
              {isArabic ? 'البحر الأحمر (Red Sea)' : 'Red Sea'}
            </text>
            <text x="90" y="230" fill={graticuleText} fontSize="10" opacity="0.6" textAnchor="middle" transform="rotate(-90 90 230)">
              {isArabic ? 'ليبيا (25° شرقاً)' : 'Libya (25° E)'}
            </text>
            <text x="310" y="390" fill={graticuleText} fontSize="10" opacity="0.6" textAnchor="middle">
              {isArabic ? 'السودان (دائرة عرض 22° شمالاً)' : 'Sudan (22° N parallel)'}
            </text>

            {/* Authentic Egypt Sovereign Border Path */}
            <path
              d="M 150 75
                 C 170 78, 195 82, 220 80
                 C 250 82, 275 80, 295 76
                 C 305 74, 312 70, 318 72
                 C 335 73, 345 68, 355 68
                 C 368 69, 375 73, 382 75
                 C 400 76, 418 77, 430 78
                 C 442 79, 452 79, 458 80
                 L 454 142
                 C 452 155, 449 168, 448 175
                 C 445 190, 442 202, 438 208
                 C 432 205, 426 195, 420 185
                 C 412 170, 408 160, 405 155
                 C 395 140, 388 132, 382 125
                 C 385 132, 388 140, 390 145
                 C 398 162, 405 172, 410 180
                 C 425 202, 438 215, 445 225
                 C 450 235, 451 240, 452 245
                 C 458 260, 462 268, 465 275
                 C 475 290, 480 298, 485 305
                 C 495 320, 500 328, 505 335
                 C 515 350, 525 358, 530 365
                 L 150 365
                 L 150 95
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2.5"
              filter="url(#landGlow)"
            />

            {/* Hala'ib & Shalatin Triangle Highlight */}
            <path
              d="M 505 335 C 515 350, 525 358, 530 365 L 485 365 Z"
              fill="url(#highlightGrad)"
              opacity="0.4"
              stroke="#f59e0b"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <text x="515" y="380" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">
              {isArabic ? 'مثلث حلايب' : 'Hala\'ib'}
            </text>

            {/* Nile River Course & Delta */}
            <path
              d="M 375 365
                 C 373 345, 370 330, 372 315
                 C 374 300, 382 285, 380 270
                 C 378 255, 395 242, 392 230
                 C 388 220, 368 200, 365 180
                 C 362 160, 360 145, 358 128
                 C 356 120, 355 115, 355 110"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Delta Branches: Rosetta & Damietta */}
            <path
              d="M 355 110 C 340 95, 325 85, 318 72"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <path
              d="M 355 110 C 360 95, 362 82, 355 68"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
            />

            {/* Suez Canal */}
            <line
              x1="382"
              y1="75"
              x2="382"
              y2="125"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeDasharray="3 2"
            />
            <text x="395" y="100" fill="#fbbf24" fontSize="9" fontWeight="bold">
              {isArabic ? 'قناة السويس' : 'Suez Canal'}
            </text>

            {/* Lake Nasser */}
            <ellipse cx="373" cy="355" rx="6" ry="12" fill="#0284c7" opacity="0.8" />

            {/* Strategic Pins: Capital Cairo, Alexandria, Port Said, Taba, Aswan */}
            {/* Cairo */}
            <g transform="translate(355, 110)" filter="url(#pinGlow)">
              <circle cx="0" cy="0" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="10" y="4" fill="#ffffff" fontSize="10" fontWeight="black">
                {isArabic ? 'القاهرة (العاصمة المركزية)' : 'Cairo (Capital)'}
              </text>
            </g>

            {/* Alexandria */}
            <g transform="translate(295, 76)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="-8" y="-7" fill="#e2e8f0" fontSize="8" fontWeight="bold">
                {isArabic ? 'الإسكندرية' : 'Alexandria'}
              </text>
            </g>

            {/* Taba */}
            <g transform="translate(454, 142)">
              <circle cx="0" cy="0" r="4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="3" fill="#fef08a" fontSize="8" fontWeight="bold">
                {isArabic ? 'طابا (العلامة 91)' : 'Taba (Pillar 91)'}
              </text>
            </g>

            {/* Aswan */}
            <g transform="translate(372, 315)">
              <circle cx="0" cy="0" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="3" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'أسوان' : 'Aswan'}
              </text>
            </g>

            {/* Sharm El-Sheikh */}
            <g transform="translate(438, 208)">
              <circle cx="0" cy="0" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="3" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'شرم الشيخ' : 'Sharm El-Sheikh'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 2. FRANCE (فرنسا) - Ideal Compact Hexagonal Model               */}
        {/* ============================================================== */}
        {countryKey === 'france' && (
          <g id="map-france">
            {/* Surrounding Seas */}
            <text x="180" y="55" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.7">
              {isArabic ? 'بحر المانش (English Channel)' : 'English Channel'}
            </text>
            <text x="100" y="240" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.6">
              {isArabic ? 'خليج بسكاي (Bay of Biscay)' : 'Bay of Biscay'}
            </text>
            <text x="410" y="365" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.7">
              {isArabic ? 'البحر المتوسط (Mediterranean)' : 'Mediterranean Sea'}
            </text>

            {/* France Authentic Hexagonal Sovereign Territory */}
            <path
              d="M 310 65
                 C 275 75, 245 85, 215 95
                 C 170 105, 145 115, 130 130
                 C 140 150, 175 165, 195 175
                 C 210 205, 215 235, 220 260
                 C 215 285, 210 305, 200 320
                 C 240 325, 280 330, 310 335
                 C 325 315, 350 325, 365 330
                 C 390 320, 410 310, 425 305
                 C 420 285, 425 275, 430 270
                 C 415 250, 410 240, 405 230
                 C 400 215, 398 205, 395 200
                 C 410 175, 418 155, 420 140
                 C 395 125, 375 110, 360 95
                 C 340 85, 325 72, 310 65
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2.5"
              filter="url(#landGlow)"
            />

            {/* Corsica Island (Corse) */}
            <path
              d="M 465 330 C 470 340, 468 355, 465 365 C 460 360, 458 345, 460 335 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2"
            />
            <text x="480" y="350" fill="#94a3b8" fontSize="8" fontWeight="bold">
              {isArabic ? 'كورسيكا' : 'Corsica'}
            </text>

            {/* Hexagon Geometric Guideline Overlay (Illustrating the theoretical hexagon) */}
            <polygon
              points="310,65 130,130 200,320 310,335 425,305 420,140"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.4"
            />

            {/* Rivers: Seine & Rhône */}
            <path
              d="M 360 140 C 330 135, 305 130, 275 120 C 255 110, 235 102, 220 98"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <path
              d="M 405 230 C 375 245, 365 270, 365 330"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />

            {/* Capital: Paris */}
            <g transform="translate(295, 128)" filter="url(#pinGlow)">
              <circle cx="0" cy="0" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="10" y="4" fill="#ffffff" fontSize="10" fontWeight="black">
                {isArabic ? 'باريس (نواة الدولة وعاصمتها التاريخية)' : 'Paris (Historic Nucleus)'}
              </text>
            </g>

            {/* Major Cities */}
            <g transform="translate(370, 325)">
              <circle cx="0" cy="0" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="3" fill="#cbd5e1" fontSize="8">{isArabic ? 'مارسيليا' : 'Marseille'}</text>
            </g>
            <g transform="translate(145, 135)">
              <circle cx="0" cy="0" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="-8" y="-6" fill="#cbd5e1" fontSize="8">{isArabic ? 'برست' : 'Brest'}</text>
            </g>
            <g transform="translate(415, 145)">
              <circle cx="0" cy="0" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="3" fill="#cbd5e1" fontSize="8">{isArabic ? 'ستراسبورغ' : 'Strasbourg'}</text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 3. CHILE (تشيلي) - Elongated North-South Strip (> 4,300 km)     */}
        {/* ============================================================== */}
        {countryKey === 'chile' && (
          <g id="map-chile">
            {/* Pacific Ocean & Andes Mountains Text */}
            <text x="140" y="210" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.7" textAnchor="middle" transform="rotate(-90 140 210)">
              {isArabic ? 'المحيط الهادئ (Pacific Ocean)' : 'Pacific Ocean'}
            </text>
            <text x="350" y="160" fill="#94a3b8" fontSize="10" fontWeight="bold" opacity="0.6">
              {isArabic ? 'جبال الأنديز (الحدود الطبيعية مع الأرجنتين)' : 'Andes Mountains (Border with Argentina)'}
            </text>

            {/* Surrounding Context: Argentina Landmass Outline */}
            <path
              d="M 285 50 L 420 50 L 420 370 L 320 380 L 295 350 L 285 240 Z"
              fill="url(#surroundGrad)"
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text x="360" y="240" fill="#64748b" fontSize="14" fontWeight="bold">
              {isArabic ? 'الأرجنتين' : 'Argentina'}
            </text>

            {/* Authentic Narrow Elongated Chile Ribbon */}
            <path
              d="M 255 45
                 C 260 55, 262 75, 265 100
                 C 268 135, 265 170, 262 205
                 C 260 235, 255 265, 248 290
                 C 242 310, 235 325, 225 340
                 C 220 350, 215 365, 220 372
                 C 230 375, 240 370, 248 360
                 C 255 340, 260 320, 268 295
                 C 275 265, 280 230, 282 195
                 C 285 155, 286 115, 284 80
                 C 283 60, 275 50, 255 45
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2.5"
              filter="url(#landGlow)"
            />

            {/* Southern Patagonian Archipelago & Fjords */}
            <path d="M 215 345 C 210 355, 212 362, 218 365 Z" fill={landFill} stroke={landStroke} strokeWidth="1.5" />
            <path d="M 230 375 C 235 385, 242 388, 245 380 Z" fill={landFill} stroke={landStroke} strokeWidth="1.5" />

            {/* 3 Distinct Climate Zones Brackets */}
            {/* Zone 1: North Arid (Atacama) */}
            <line x1="235" y1="50" x2="235" y2="135" stroke="#f59e0b" strokeWidth="2" />
            <text x="225" y="95" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="end">
              {isArabic ? 'شمال جاف (صحراء أتاكاما)' : 'Arid North (Atacama Desert)'}
            </text>

            {/* Zone 2: Central Mediterranean (Valleys & Santiago) */}
            <line x1="230" y1="145" x2="230" y2="245" stroke="#10b981" strokeWidth="2.5" />
            <text x="220" y="195" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="end">
              {isArabic ? 'وسط معتدل متوسطي (تركز سكاني)' : 'Central Mediterranean (Population Core)'}
            </text>

            {/* Zone 3: South Cold/Fjords (Patagonia) */}
            <line x1="205" y1="255" x2="205" y2="365" stroke="#06b6d4" strokeWidth="2" />
            <text x="195" y="310" fill="#06b6d4" fontSize="8" fontWeight="bold" textAnchor="end">
              {isArabic ? 'جنوب قطبي بارد (خلجان وجزر)' : 'Subpolar South (Patagonian Fjords)'}
            </text>

            {/* Capital: Santiago */}
            <g transform="translate(272, 195)" filter="url(#pinGlow)">
              <circle cx="0" cy="0" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="12" y="4" fill="#ffffff" fontSize="10" fontWeight="black">
                {isArabic ? 'سانتياغو (العاصمة)' : 'Santiago (Capital)'}
              </text>
            </g>

            {/* Arica / Atacama Pin */}
            <g transform="translate(262, 55)">
              <circle cx="0" cy="0" r="3" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="3" fill="#fef08a" fontSize="8">{isArabic ? 'أريكا' : 'Arica'}</text>
            </g>

            {/* Punta Arenas / Strait of Magellan */}
            <g transform="translate(235, 365)">
              <circle cx="0" cy="0" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="3" fill="#e2e8f0" fontSize="8">{isArabic ? 'مضيق ماجلان' : 'Strait of Magellan'}</text>
            </g>

            {/* Elongation Metric Banner */}
            <g transform="translate(340, 310)">
              <rect x="0" y="0" width="200" height="48" rx="8" fill="#0f172a" stroke="#334155" />
              <text x="10" y="18" fill="#38bdf8" fontSize="9" fontWeight="bold">
                {isArabic ? 'الشكل الشريطي / المستطيل الطولي:' : 'Elongated Ribbon Morphology:'}
              </text>
              <text x="10" y="34" fill="#94a3b8" fontSize="8">
                {isArabic ? 'الطول (>4300 كم) : العرض (~175 كم) > 6 : 1' : 'Length (>4,300 km) : Width (~175 km) > 6 : 1'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 4. TURKEY (تركيا) - Transverse East-West Elongated Ribbon      */}
        {/* ============================================================== */}
        {countryKey === 'turkey' && (
          <g id="map-turkey">
            {/* Surrounding Seas */}
            <text x="320" y="65" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.7" textAnchor="middle">
              {isArabic ? 'البحر الأسود (Black Sea)' : 'Black Sea'}
            </text>
            <text x="75" y="200" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.7" textAnchor="middle" transform="rotate(-90 75 200)">
              {isArabic ? 'بحر إيجه (Aegean Sea)' : 'Aegean Sea'}
            </text>
            <text x="310" y="345" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.7" textAnchor="middle">
              {isArabic ? 'البحر المتوسط (Mediterranean Sea)' : 'Mediterranean Sea'}
            </text>

            {/* European Thrace */}
            <path
              d="M 95 105 L 140 100 L 145 125 L 115 135 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2"
            />
            <text x="110" y="95" fill="#94a3b8" fontSize="7" fontWeight="bold">
              {isArabic ? 'تراقيا' : 'Thrace'}
            </text>

            {/* Anatolian Main Landmass */}
            <path
              d="M 165 120
                 C 210 108, 270 102, 330 95
                 C 380 98, 430 105, 490 120
                 C 515 140, 525 165, 520 190
                 C 510 215, 495 230, 480 240
                 C 440 242, 410 245, 380 260
                 C 350 255, 300 258, 260 265
                 C 220 260, 180 250, 150 235
                 C 135 210, 130 185, 135 160
                 C 145 140, 155 130, 165 120
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2.5"
              filter="url(#landGlow)"
            />

            {/* The Vital Turkish Straits (Bosphorus & Dardanelles) */}
            <g transform="translate(150, 122)">
              <circle cx="0" cy="0" r="4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
              <text x="-4" y="-7" fill="#fbbf24" fontSize="8" fontWeight="bold">
                {isArabic ? 'مضيقا البوسفور والدردنيل' : 'Bosphorus & Dardanelles'}
              </text>
            </g>

            {/* Capital: Ankara (Interior Capital Chosen for Strategic Depth) */}
            <g transform="translate(290, 175)" filter="url(#pinGlow)">
              <circle cx="0" cy="0" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="10" y="4" fill="#ffffff" fontSize="10" fontWeight="black">
                {isArabic ? 'أنقرة (عاصمة ذات عمق جغرافي)' : 'Ankara (Strategic Depth Capital)'}
              </text>
            </g>

            {/* Historical Former Capital: Istanbul */}
            <g transform="translate(155, 115)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="2" fill="#e2e8f0" fontSize="8">{isArabic ? 'إسطنبول' : 'Istanbul'}</text>
            </g>

            {/* Izmir */}
            <g transform="translate(135, 185)">
              <circle cx="0" cy="0" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="2" fill="#cbd5e1" fontSize="8">{isArabic ? 'إزمير' : 'Izmir'}</text>
            </g>

            {/* Transverse Axis Banner */}
            <g transform="translate(150, 290)">
              <line x1="0" y1="0" x2="330" y2="0" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
              <text x="165" y="16" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">
                {isArabic
                  ? 'امتداد عرضي (شرق-غرب): لا يتيح تنوعاً مناخياً كبيراً لتشابه دوائر العرض'
                  : 'Transverse East-West axis: Limited climatic diversity due to uniform latitude'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 5. DR CONGO (الكونغو الديمقراطية) - Compact with Protrusions   */}
        {/* ============================================================== */}
        {countryKey === 'congo' && (
          <g id="map-congo">
            <text x="40" y="190" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.7">
              {isArabic ? 'المحيط الأطلسي' : 'Atlantic Ocean'}
            </text>

            {/* Massive Congo River Basin Main Body */}
            <path
              d="M 220 90
                 C 280 85, 340 95, 390 110
                 C 420 135, 435 170, 430 210
                 C 425 245, 415 270, 420 295
                 C 430 320, 440 345, 435 370
                 C 400 375, 375 365, 360 340
                 C 350 315, 335 300, 310 295
                 C 275 292, 240 290, 215 285
                 C 185 280, 160 270, 140 260
                 C 120 258, 95 262, 75 262
                 L 75 248
                 C 105 248, 130 245, 150 235
                 C 165 210, 170 170, 180 140
                 C 190 115, 205 100, 220 90
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2.5"
              filter="url(#landGlow)"
            />

            {/* Protrusion 1 Highlight: Western Atlantic Corridor */}
            <path
              d="M 150 235 L 75 248 L 75 262 L 140 260 Z"
              fill="url(#highlightGrad)"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <g transform="translate(60, 285)">
              <text x="0" y="0" fill="#f59e0b" fontSize="8" fontWeight="bold">
                {isArabic ? '⬅ البروز الغربي (منفذ الأطلسي)' : '⬅ Western Atlantic Protrusion'}
              </text>
            </g>

            {/* Protrusion 2 Highlight: Katanga Salient */}
            <path
              d="M 420 295 C 430 320, 440 345, 435 370 C 400 375, 375 365, 360 340 Z"
              fill="url(#highlightGrad)"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <g transform="translate(370, 395)">
              <text x="0" y="0" fill="#f59e0b" fontSize="8" fontWeight="bold">
                {isArabic ? 'بروز كاتانغا (حزام النحاس) ⬇' : 'Katanga Salient (Copperbelt) ⬇'}
              </text>
            </g>

            {/* Congo River Path */}
            <path
              d="M 390 320 C 350 250, 360 170, 310 130 C 260 110, 210 150, 190 190 C 175 215, 140 240, 75 255"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />

            {/* Capital: Kinshasa */}
            <g transform="translate(160, 235)" filter="url(#pinGlow)">
              <circle cx="0" cy="0" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="12" y="4" fill="#ffffff" fontSize="10" fontWeight="black">
                {isArabic ? 'كينشاسا (العاصمة على نهر الكونغو)' : 'Kinshasa (Capital)'}
              </text>
            </g>

            {/* Matadi Atlantic Port */}
            <g transform="translate(75, 255)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="-4" y="-8" fill="#e2e8f0" fontSize="8" fontWeight="bold">{isArabic ? 'ماتادي' : 'Matadi'}</text>
            </g>

            {/* Lubumbashi (Katanga Center) */}
            <g transform="translate(400, 350)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="-8" y="-6" fill="#cbd5e1" fontSize="8">{isArabic ? 'لوبومباشي' : 'Lubumbashi'}</text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 6. AFGHANISTAN (أفغانستان) - Protruded Shape (Wakhan Corridor)   */}
        {/* ============================================================== */}
        {countryKey === 'afghanistan' && (
          <g id="map-afghanistan">
            {/* Surrounding Landlocked Nations Text */}
            <text x="240" y="65" fill={graticuleText} fontSize="10" fontWeight="bold">
              {isArabic ? 'طاجيكستان وأوزبكستان وتركمانستان (شمالاً)' : 'Tajikistan / Uzbekistan / Turkmenistan (North)'}
            </text>
            <text x="60" y="220" fill={graticuleText} fontSize="10" fontWeight="bold" transform="rotate(-90 60 220)">
              {isArabic ? 'إيران (غرباً)' : 'Iran (West)'}
            </text>
            <text x="320" y="360" fill={graticuleText} fontSize="10" fontWeight="bold">
              {isArabic ? 'باكستان - خط ديورند (جنوباً وشرقاً)' : 'Pakistan - Durand Line (South & East)'}
            </text>
            <text x="500" y="80" fill="#f59e0b" fontSize="9" fontWeight="bold">
              {isArabic ? 'الصين (شرقاً)' : 'China (East)'}
            </text>

            {/* Authentic Afghanistan Territory with Wakhan Corridor */}
            <path
              d="M 175 115
                 C 230 110, 290 120, 345 130
                 C 370 120, 420 95, 490 85
                 L 495 95
                 C 440 110, 395 135, 370 150
                 C 365 190, 355 230, 340 260
                 C 300 300, 260 335, 220 330
                 C 175 325, 140 300, 120 265
                 C 125 215, 135 175, 145 155
                 C 155 135, 165 125, 175 115
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2.5"
              filter="url(#landGlow)"
            />

            {/* Wakhan Corridor Protrusion Highlight */}
            <path
              d="M 345 130 C 370 120, 420 95, 490 85 L 495 95 C 440 110, 395 135, 370 150 Z"
              fill="url(#highlightGrad)"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <g transform="translate(420, 60)">
              <text x="0" y="0" fill="#f59e0b" fontSize="9" fontWeight="bold">
                {isArabic ? 'بروز ممر واخان ↗' : 'Wakhan Corridor ↗'}
              </text>
              <text x="0" y="12" fill="#fbbf24" fontSize="7">
                {isArabic ? '(يفصل روسيا/آسيا الوسطى عن الهند سابقاً)' : '(Historical Great Game Buffer to China)'}
              </text>
            </g>

            {/* Capital: Kabul */}
            <g transform="translate(325, 195)" filter="url(#pinGlow)">
              <circle cx="0" cy="0" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="12" y="4" fill="#ffffff" fontSize="10" fontWeight="black">
                {isArabic ? 'كابول (العاصمة)' : 'Kabul (Capital)'}
              </text>
            </g>

            {/* Kandahar */}
            <g transform="translate(230, 275)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="2" fill="#cbd5e1" fontSize="8">{isArabic ? 'قندهار' : 'Kandahar'}</text>
            </g>

            {/* Herat */}
            <g transform="translate(160, 180)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="2" fill="#cbd5e1" fontSize="8">{isArabic ? 'هرات' : 'Herat'}</text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 7. LESOTHO (ليسوتو) - Perforated Enclave inside South Africa   */}
        {/* ============================================================== */}
        {countryKey === 'lesotho' && (
          <g id="map-lesotho">
            {/* Oceans */}
            <text x="60" y="270" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.7" transform="rotate(-90 60 270)">
              {isArabic ? 'المحيط الأطلسي' : 'Atlantic Ocean'}
            </text>
            <text x="490" y="270" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.7">
              {isArabic ? 'المحيط الهندي' : 'Indian Ocean'}
            </text>

            {/* South Africa Real Territory (The Perforating Host State) */}
            <path
              d="M 160 120
                 C 240 105, 340 100, 420 115
                 C 455 155, 470 210, 480 270
                 C 440 320, 380 360, 310 375
                 C 250 370, 190 340, 145 285
                 C 125 230, 140 170, 160 120
                 Z"
              fill="url(#surroundGrad)"
              stroke="#64748b"
              strokeWidth="2"
            />
            <text x="240" y="160" fill="#94a3b8" fontSize="13" fontWeight="bold">
              {isArabic ? 'جمهورية جنوب أفريقيا' : 'Republic of South Africa'}
            </text>
            <text x="210" y="340" fill="#64748b" fontSize="10">
              {isArabic ? '(الدولة المُطوِّقة الحاضنة)' : '(Surrounding Host State)'}
            </text>

            {/* Cape Town / Cape of Good Hope */}
            <g transform="translate(155, 305)">
              <circle cx="0" cy="0" r="3" fill="#64748b" stroke="#cbd5e1" strokeWidth="1" />
              <text x="-8" y="12" fill="#94a3b8" fontSize="7">{isArabic ? 'كيب تاون' : 'Cape Town'}</text>
            </g>

            {/* Sovereign Enclave: Kingdom of Lesotho */}
            <path
              d="M 370 215
                 C 388 220, 400 232, 405 248
                 C 402 265, 385 278, 365 272
                 C 350 262, 348 245, 355 230
                 C 360 220, 365 216, 370 215
                 Z"
              fill="url(#highlightGrad)"
              stroke="#f59e0b"
              strokeWidth="3"
              filter="url(#landGlow)"
            />

            {/* Capital: Maseru */}
            <g transform="translate(365, 238)" filter="url(#pinGlow)">
              <circle cx="0" cy="0" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="8" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="8" y="3" fill="#ffffff" fontSize="10" fontWeight="black">
                {isArabic ? 'ماسيرو (عاصمة ليسوتو المحتواة)' : 'Maseru (Lesotho Capital)'}
              </text>
            </g>

            {/* 360 Degree Enclosure Text & Educational Badge */}
            <g transform="translate(240, 240)">
              <text x="25" y="0" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="end">
                {isArabic ? 'تطويق جغرافي كامل 360°' : '360° Total Encirclement'}
              </text>
            </g>

            <g transform="translate(60, 40)">
              <rect x="0" y="0" width="220" height="42" rx="8" fill="#0f172a" stroke="#334155" />
              <text x="10" y="16" fill="#f59e0b" fontSize="9" fontWeight="bold">
                {isArabic ? 'الدولة المحتواة (الجيبية):' : 'Perforated (Enclave) State:'}
              </text>
              <text x="10" y="30" fill="#94a3b8" fontSize="8">
                {isArabic ? 'تتبع الدولة المطوقة لها في سياستها واقتصادها' : 'Must align with host state in diplomacy & transit'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 8. JAPAN (اليابان) - Fragmented Insular Archipelago             */}
        {/* ============================================================== */}
        {countryKey === 'japan' && (
          <g id="map-japan">
            {/* Surrounding Seas */}
            <text x="150" y="160" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.7" textAnchor="middle">
              {isArabic ? 'بحر اليابان (Sea of Japan)' : 'Sea of Japan'}
            </text>
            <text x="470" y="270" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.7" textAnchor="middle">
              {isArabic ? 'المحيط الهادئ (Pacific Ocean)' : 'Pacific Ocean'}
            </text>

            {/* The 4 Major Islands in Accurate Orientations */}
            {/* 1. Hokkaido (Northern Island) */}
            <path
              d="M 390 50
                 C 420 52, 450 65, 460 85
                 C 455 105, 425 110, 400 115
                 C 380 118, 365 100, 360 85
                 C 365 65, 375 52, 390 50
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2.5"
              filter="url(#landGlow)"
            />
            <text x="410" y="80" fill="#ffffff" fontSize="9" fontWeight="bold">
              {isArabic ? 'هوكايدو (Hokkaido)' : 'Hokkaido'}
            </text>

            {/* 2. Honshu (Main Sweeping Island with Tokyo) */}
            <path
              d="M 370 125
                 C 385 140, 395 170, 385 200
                 C 375 220, 350 240, 320 255
                 C 285 265, 245 270, 210 272
                 C 195 265, 215 250, 245 240
                 C 280 230, 315 210, 340 185
                 C 355 160, 360 135, 370 125
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2.5"
              filter="url(#landGlow)"
            />
            <text x="320" y="215" fill="#ffffff" fontSize="10" fontWeight="bold">
              {isArabic ? 'هونشو (Honshu)' : 'Honshu'}
            </text>

            {/* 3. Shikoku (South of Honshu across Inland Sea) */}
            <path
              d="M 235 275
                 C 255 272, 275 275, 275 288
                 C 265 298, 245 298, 230 292
                 C 225 285, 230 278, 235 275
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2"
              filter="url(#landGlow)"
            />
            <text x="250" y="288" fill="#ffffff" fontSize="7" fontWeight="bold">
              {isArabic ? 'شيكوكو' : 'Shikoku'}
            </text>

            {/* 4. Kyushu (Southwestern Island) */}
            <path
              d="M 185 275
                 C 200 280, 205 300, 195 320
                 C 180 335, 165 330, 160 315
                 C 158 295, 170 280, 185 275
                 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2"
              filter="url(#landGlow)"
            />
            <text x="175" y="305" fill="#ffffff" fontSize="8" fontWeight="bold">
              {isArabic ? 'كيوشو' : 'Kyushu'}
            </text>

            {/* Capital: Tokyo (Coastal Capital Chosen for Global Connectivity) */}
            <g transform="translate(355, 230)" filter="url(#pinGlow)">
              <circle cx="0" cy="0" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="12" y="4" fill="#ffffff" fontSize="10" fontWeight="black">
                {isArabic ? 'طوكيو (عاصمة مستحدثة على المحيط)' : 'Tokyo (Coastal Capital)'}
              </text>
            </g>

            {/* Historical Former Capital: Kyoto */}
            <g transform="translate(290, 245)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="-8" y="-7" fill="#cbd5e1" fontSize="8">{isArabic ? 'كيوتو (التاريخية)' : 'Kyoto (Historic)'}</text>
            </g>

            {/* Seto Inland Sea Annotation */}
            <text x="240" y="260" fill="#38bdf8" fontSize="7" fontWeight="bold">
              {isArabic ? 'بحر سيتو الداخلي' : 'Seto Inland Sea'}
            </text>

            {/* Morphology Info Box */}
            <g transform="translate(60, 40)">
              <rect x="0" y="0" width="230" height="42" rx="8" fill="#0f172a" stroke="#334155" />
              <text x="10" y="16" fill="#14b8a6" fontSize="9" fontWeight="bold">
                {isArabic ? 'الدولة المجزأة البحرية (الأرخبيل):' : 'Fragmented Maritime Archipelago:'}
              </text>
              <text x="10" y="30" fill="#94a3b8" fontSize="8">
                {isArabic ? 'تتألف من 4 جزر رئيسية: هوكايدو، هونشو، شيكوكو، كيوشو' : 'Consists of 4 main islands: Hokkaido, Honshu, Shikoku, Kyushu'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* Universal Map Ornaments: Compass Rose, Scale Bar, Graticule Ref */}
        {/* ============================================================== */}
        {/* Compass Rose (وردة البوصلة) */}
        <g transform="translate(545, 60)">
          <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#334155" strokeWidth="1" opacity="0.9" />
          {/* North Point */}
          <polygon points="0,-18 4,-4 0,0 -4,-4" fill="#ef4444" />
          {/* South Point */}
          <polygon points="0,18 4,4 0,0 -4,4" fill="#64748b" />
          {/* East Point */}
          <polygon points="18,0 4,4 0,0 4,-4" fill="#64748b" />
          {/* West Point */}
          <polygon points="-18,0 -4,4 0,0 -4,-4" fill="#64748b" />
          {/* Center */}
          <circle cx="0" cy="0" r="2.5" fill="#f8fafc" />
          <text x="0" y="-21" fill="#ef4444" fontSize="9" fontWeight="black" textAnchor="middle">N</text>
          <text x="0" y="27" fill="#64748b" fontSize="7" textAnchor="middle">S</text>
          <text x="24" y="2.5" fill="#64748b" fontSize="7" textAnchor="middle">E</text>
          <text x="-24" y="2.5" fill="#64748b" fontSize="7" textAnchor="middle">W</text>
        </g>

        {/* Graphic Linear Scale Bar (مقياس الرسم الخطي) */}
        <g transform="translate(35, 385)">
          <rect x="0" y="0" width="120" height="4" fill="#0f172a" stroke="#475569" strokeWidth="0.5" />
          <rect x="0" y="0" width="40" height="4" fill="#f8fafc" />
          <rect x="40" y="0" width="40" height="4" fill="#14b8a6" />
          <rect x="80" y="0" width="40" height="4" fill="#f8fafc" />
          <text x="0" y="-3" fill={graticuleText} fontSize="7" fontFamily="monospace">0</text>
          <text x="40" y="-3" fill={graticuleText} fontSize="7" fontFamily="monospace">150</text>
          <text x="80" y="-3" fill={graticuleText} fontSize="7" fontFamily="monospace">300</text>
          <text x="120" y="-3" fill={graticuleText} fontSize="7" fontFamily="monospace">
            {countryKey === 'chile' ? '1000 km' : countryKey === 'egypt' ? '500 km' : '400 km'}
          </text>
        </g>
      </svg>
    </div>
  );
};
