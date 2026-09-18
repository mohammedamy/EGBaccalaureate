import React from 'react';
import type { Language } from '../../../i18n/translations';

interface Props {
  hotspotKey: string;
  lang: Language;
  theme?: string;
}

export const HighResHotspotMap: React.FC<Props> = ({ hotspotKey, lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  const graticuleStroke = isLight ? '#bae6fd' : '#1e293b';
  const landFill = isLight ? '#f1f5f9' : '#1e293b';
  const landStroke = isLight ? '#94a3b8' : '#334155';
  const activeLand = isLight ? '#ccfbf1' : '#0f766e';
  const disputeColor = '#ef4444';

  return (
    <div className="w-full flex flex-col items-center justify-center select-none relative">
      <svg
        className="w-full max-w-2xl h-auto aspect-[16/10] rounded-2xl border border-slate-800 shadow-2xl drop-shadow-2xl overflow-hidden"
        viewBox="0 0 600 380"
      >
        <defs>
          <linearGradient id="hotspotOcean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLight ? '#f0f9ff' : '#040b17'} />
            <stop offset="100%" stopColor={isLight ? '#e0f2fe' : '#0a162b'} />
          </linearGradient>

          <filter id="hotspotGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ef4444" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Background Ocean */}
        <rect width="600" height="380" fill="url(#hotspotOcean)" />

        {/* Graticule Grid */}
        <g stroke={graticuleStroke} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5">
          <line x1="30" y1="95" x2="570" y2="95" />
          <line x1="30" y1="190" x2="570" y2="190" />
          <line x1="30" y1="285" x2="570" y2="285" />
          <line x1="150" y1="20" x2="150" y2="360" />
          <line x1="300" y1="20" x2="300" y2="360" />
          <line x1="450" y1="20" x2="450" y2="360" />
        </g>

        {/* Map Frame */}
        <rect x="12" y="12" width="576" height="356" fill="none" stroke={isLight ? '#94a3b8' : '#334155'} strokeWidth="1.2" rx="10" />

        {/* ============================================================== */}
        {/* 1. TABA (طابا) - Sinai, Gulf of Aqaba & 1906 Boundary Line      */}
        {/* ============================================================== */}
        {hotspotKey === 'taba' && (
          <g id="hotspot-taba">
            {/* Water Bodies */}
            <text x="320" y="320" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.8" transform="rotate(65 320 320)">
              {isArabic ? 'خليج العقبة (Gulf of Aqaba)' : 'Gulf of Aqaba'}
            </text>
            <text x="130" y="270" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.6" transform="rotate(-55 130 270)">
              {isArabic ? 'خليج السويس' : 'Gulf of Suez'}
            </text>
            <text x="220" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.7">
              {isArabic ? 'البحر المتوسط (رفح - العريش)' : 'Mediterranean Sea (Rafah - El Arish)'}
            </text>

            {/* Sinai Peninsula Real Cartographic Outline */}
            <path
              d="M 120 70
                 C 170 72, 230 70, 290 70
                 L 350 72
                 L 330 180
                 C 325 210, 310 250, 295 295
                 C 285 320, 275 340, 265 350
                 C 255 330, 230 290, 200 240
                 C 170 190, 150 150, 130 115
                 Z"
              fill={activeLand}
              stroke="#14b8a6"
              strokeWidth="2"
            />
            <text x="215" y="160" fill="#ffffff" fontSize="16" fontWeight="black" opacity="0.9">
              {isArabic ? 'شبه جزيرة سيناء (مصر 🇪🇬)' : 'Sinai Peninsula (Egypt)'}
            </text>

            {/* Eastern Land / Negev & Jordan Coast */}
            <path
              d="M 350 72 L 480 72 L 480 350 L 330 350 L 315 295 L 345 180 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="1.5"
            />
            <text x="390" y="140" fill="#94a3b8" fontSize="11" fontWeight="bold">
              {isArabic ? 'صحراء النقب' : 'Negev'}
            </text>
            <text x="365" y="250" fill="#94a3b8" fontSize="10" fontWeight="bold">
              {isArabic ? 'الأردن (العقبة)' : 'Jordan (Aqaba)'}
            </text>

            {/* International Border: Rafah to Taba (1906 Boundary Line) */}
            <line
              x1="350"
              y1="72"
              x2="330"
              y2="180"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeDasharray="4 2"
            />
            <text x="355" y="125" fill="#f59e0b" fontSize="8" fontWeight="bold">
              {isArabic ? 'خط الحدود الدولية 1906م' : '1906 Boundary Line'}
            </text>

            {/* Disputed Zone: Taba & Border Pillar 91 */}
            <g transform="translate(330, 180)" filter="url(#hotspotGlow)">
              <circle cx="0" cy="0" r="6" fill={disputeColor} stroke="#ffffff" strokeWidth="2" />
              <circle cx="0" cy="0" r="12" fill="none" stroke={disputeColor} strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />
              <text x="14" y="4" fill="#ffffff" fontSize="11" fontWeight="black">
                {isArabic ? 'طابا - العلامة 91 (حكم التحكيم الدولي 1988م)' : 'Taba - Pillar 91 (Arbitration Award 1988)'}
              </text>
            </g>

            {/* Other Key Points: Rafah, Nuweiba, Sharm El-Sheikh */}
            <g transform="translate(350, 72)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="2" fill="#e2e8f0" fontSize="8">{isArabic ? 'رفح' : 'Rafah'}</text>
            </g>
            <g transform="translate(315, 240)">
              <circle cx="0" cy="0" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="-8" y="2" fill="#cbd5e1" fontSize="8" textAnchor="end">{isArabic ? 'نويبع' : 'Nuweiba'}</text>
            </g>
            <g transform="translate(265, 345)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="8" y="2" fill="#cbd5e1" fontSize="8">{isArabic ? 'شرم الشيخ (رأس محمد)' : 'Sharm El-Sheikh'}</text>
            </g>

            {/* Geopolitical Outcome Badge */}
            <g transform="translate(35, 45)">
              <rect x="0" y="0" width="220" height="42" rx="8" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
              <text x="10" y="16" fill="#14b8a6" fontSize="9" fontWeight="bold">
                {isArabic ? 'التحكيم الدولي السلمي:' : 'Peaceful International Arbitration:'}
              </text>
              <text x="10" y="30" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'محكمة العدل بجنيف أكدت سيادة مصر التاريخية عام 1988م' : 'Geneva tribunal confirmed Egyptian sovereignty 1988'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 2. CEUTA & MELILLA (سبتة ومليلية) - Strait of Gibraltar         */}
        {/* ============================================================== */}
        {hotspotKey === 'ceuta_melilla' && (
          <g id="hotspot-ceuta-melilla">
            {/* Water Bodies */}
            <text x="300" y="160" fill="#38bdf8" fontSize="12" fontWeight="bold" opacity="0.8" textAnchor="middle">
              {isArabic ? 'مضيق جبل طارق (Strait of Gibraltar ~14 km)' : 'Strait of Gibraltar (~14 km)'}
            </text>
            <text x="90" y="180" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.6">
              {isArabic ? 'المحيط الأطلسي' : 'Atlantic'}
            </text>
            <text x="510" y="180" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.6">
              {isArabic ? 'البحر المتوسط' : 'Mediterranean'}
            </text>

            {/* Spain / Iberian Coast (North) */}
            <path
              d="M 50 40
                 C 150 45, 230 65, 270 95
                 C 290 110, 310 110, 330 95
                 C 380 65, 460 45, 550 40
                 L 550 20 L 50 20 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2"
            />
            <text x="300" y="55" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">
              {isArabic ? 'إسبانيا (أوروبا)' : 'Spain (Europe)'}
            </text>
            <g transform="translate(320, 98)">
              <circle cx="0" cy="0" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="6" y="-3" fill="#cbd5e1" fontSize="7">{isArabic ? 'صخرة جبل طارق (بريطانيا)' : 'Gibraltar (UK)'}</text>
            </g>

            {/* Morocco Coast (South) */}
            <path
              d="M 50 360
                 L 50 270
                 C 120 265, 180 250, 240 230
                 C 270 215, 280 200, 290 200
                 C 310 205, 340 220, 390 235
                 C 440 250, 480 240, 505 240
                 C 520 245, 540 260, 550 270
                 L 550 360 Z"
              fill={activeLand}
              stroke="#14b8a6"
              strokeWidth="2"
            />
            <text x="300" y="310" fill="#ffffff" fontSize="15" fontWeight="black" textAnchor="middle">
              {isArabic ? 'المملكة المغربية (أفريقيا 🇲🇦)' : 'Kingdom of Morocco (Africa)'}
            </text>

            {/* Tangier */}
            <g transform="translate(230, 235)">
              <circle cx="0" cy="0" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <text x="-8" y="2" fill="#e2e8f0" fontSize="8" textAnchor="end">{isArabic ? 'طنجة' : 'Tangier'}</text>
            </g>

            {/* Disputed Exclave 1: Ceuta (سبتة) */}
            <g transform="translate(290, 200)" filter="url(#hotspotGlow)">
              <circle cx="0" cy="0" r="5.5" fill={disputeColor} stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="11" fill="none" stroke={disputeColor} strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="-12" y="-12" fill="#ef4444" fontSize="10" fontWeight="black" textAnchor="end">
                {isArabic ? 'سبتة (مستعمرة إسبانية منذ 1415م)' : 'Ceuta (Spanish Exclave)'}
              </text>
            </g>

            {/* Disputed Exclave 2: Melilla (مليلية) */}
            <g transform="translate(505, 240)" filter="url(#hotspotGlow)">
              <circle cx="0" cy="0" r="5.5" fill={disputeColor} stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="11" fill="none" stroke={disputeColor} strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="12" y="-5" fill="#ef4444" fontSize="10" fontWeight="black">
                {isArabic ? 'مليلية (مستعمرة إسبانية منذ 1497م)' : 'Melilla (Spanish Exclave)'}
              </text>
            </g>

            {/* Legal Status Note */}
            <g transform="translate(35, 45)">
              <rect x="0" y="0" width="220" height="42" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
              <text x="10" y="16" fill="#f87171" fontSize="9" fontWeight="bold">
                {isArabic ? 'الاستعمار المتبقي في أفريقيا:' : 'Residual Colonial Exclaves:'}
              </text>
              <text x="10" y="30" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'المغرب يطالب باستردادهما لإنهاء الوجود الاستعماري' : 'Morocco demands full decolonization'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 3. KASHMIR (كشمير) - Line of Control (LoC) & Subcontinent       */}
        {/* ============================================================== */}
        {hotspotKey === 'kashmir' && (
          <g id="hotspot-kashmir">
            {/* Pakistan (West) */}
            <path
              d="M 50 120 L 220 100 L 220 350 L 50 350 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="1.5"
            />
            <text x="120" y="240" fill="#94a3b8" fontSize="14" fontWeight="bold">
              {isArabic ? 'باكستان 🇵🇰' : 'Pakistan'}
            </text>

            {/* India (South / East) */}
            <path
              d="M 220 350 L 220 220 L 360 220 L 550 250 L 550 350 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="1.5"
            />
            <text x="360" y="300" fill="#94a3b8" fontSize="14" fontWeight="bold">
              {isArabic ? 'الهند 🇮🇳' : 'India'}
            </text>

            {/* China / Aksai Chin (Northeast) */}
            <path
              d="M 420 50 L 550 50 L 550 250 L 420 180 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="1.5"
            />
            <text x="460" y="120" fill="#94a3b8" fontSize="12" fontWeight="bold">
              {isArabic ? 'الصين (أكساي تشين)' : 'China (Aksai Chin)'}
            </text>

            {/* Disputed Jammu & Kashmir Territory */}
            <path
              d="M 220 100
                 C 260 70, 340 60, 420 70
                 C 430 110, 410 160, 390 190
                 C 340 215, 270 210, 220 210
                 Z"
              fill="url(#hotspotGlow)"
              stroke={disputeColor}
              strokeWidth="2.5"
              filter="url(#hotspotGlow)"
            />

            {/* Line of Control (LoC) Ceasefire Boundary */}
            <line
              x1="220"
              y1="160"
              x2="360"
              y2="130"
              stroke="#fbbf24"
              strokeWidth="3"
              strokeDasharray="4 3"
            />
            <text x="270" y="120" fill="#fbbf24" fontSize="9" fontWeight="bold">
              {isArabic ? 'خط وقف إطلاق النار (LoC)' : 'Line of Control (LoC)'}
            </text>

            {/* Srinagar / Jammu */}
            <g transform="translate(290, 165)">
              <circle cx="0" cy="0" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <text x="8" y="3" fill="#ffffff" fontSize="9" fontWeight="bold">{isArabic ? 'سريناغار' : 'Srinagar'}</text>
            </g>

            {/* Himalayas Tag */}
            <text x="280" y="85" fill="#94a3b8" fontSize="10" fontWeight="bold">
              {isArabic ? '🏔️ جبال الهيمالايا ومنابع نهر السند' : '🏔️ Himalayas & Indus Headwaters'}
            </text>

            {/* Colonial Legacy Badge */}
            <g transform="translate(35, 45)">
              <rect x="0" y="0" width="220" height="42" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
              <text x="10" y="16" fill="#f87171" fontSize="9" fontWeight="bold">
                {isArabic ? 'إرث التقسيم الاستعماري 1947م:' : '1947 Colonial Partition:'}
              </text>
              <text x="10" y="30" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'نزاع ديني وإثني مستمر بين قوتين نوويتين' : 'Multi-generational nuclear flashpoint'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 4. LIBYA-TUNISIA (الجرف القاري) - Gulf of Gabes & ICJ Award     */}
        {/* ============================================================== */}
        {hotspotKey === 'libya_tunisia' && (
          <g id="hotspot-libya-tunisia">
            <text x="420" y="80" fill="#38bdf8" fontSize="12" fontWeight="bold" opacity="0.8">
              {isArabic ? 'البحر المتوسط (خليج قابس)' : 'Mediterranean (Gulf of Gabes)'}
            </text>

            {/* Tunisia Coast (West / North) */}
            <path
              d="M 50 50
                 L 180 50
                 C 200 80, 205 130, 195 180
                 C 185 210, 160 230, 180 250
                 C 210 270, 235 285, 260 295
                 L 260 360 L 50 360 Z"
              fill={activeLand}
              stroke="#14b8a6"
              strokeWidth="2"
            />
            <text x="110" y="160" fill="#ffffff" fontSize="15" fontWeight="black">
              {isArabic ? 'تونس 🇹🇳' : 'Tunisia'}
            </text>

            {/* Djerba and Kerkennah Islands (Critical Legal Drivers!) */}
            <g transform="translate(205, 235)">
              <ellipse cx="0" cy="0" rx="8" ry="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
              <text x="12" y="3" fill="#fef08a" fontSize="8" fontWeight="bold">{isArabic ? 'جزيرة جربة' : 'Djerba Island'}</text>
            </g>
            <g transform="translate(225, 175)">
              <ellipse cx="0" cy="0" rx="9" ry="4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
              <text x="14" y="3" fill="#fef08a" fontSize="8" fontWeight="bold">{isArabic ? 'جزر قرقنة' : 'Kerkennah Islands'}</text>
            </g>

            {/* Libya Coast (East / South) */}
            <path
              d="M 260 295
                 C 320 305, 380 315, 450 320
                 C 510 325, 540 330, 550 335
                 L 550 360 L 260 360 Z"
              fill={landFill}
              stroke={landStroke}
              strokeWidth="2"
            />
            <text x="380" y="345" fill="#94a3b8" fontSize="15" fontWeight="black">
              {isArabic ? 'ليبيا 🇱🇾' : 'Libya'}
            </text>

            {/* Border Point: Ras Ajdir (رأس جدير) */}
            <g transform="translate(260, 295)">
              <circle cx="0" cy="0" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <text x="-8" y="15" fill="#f87171" fontSize="9" fontWeight="bold">{isArabic ? 'رأس جدير (نقطة البداية)' : 'Ras Ajdir'}</text>
            </g>

            {/* Line 1: Libyan Claim / Initial 45° line */}
            <line
              x1="260"
              y1="295"
              x2="350"
              y2="190"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <text x="315" y="240" fill="#94a3b8" fontSize="7" transform="rotate(-50 315 240)">
              {isArabic ? 'زاوية 45° شمالاً' : '45° Heading'}
            </text>

            {/* Line 2: ICJ 1982 Judgement (Deflected to 52° due to Tunisian Islands!) */}
            <line
              x1="260"
              y1="295"
              x2="370"
              y2="160"
              stroke="#10b981"
              strokeWidth="3"
            />
            <text x="340" y="195" fill="#34d399" fontSize="8" fontWeight="black" transform="rotate(-52 340 195)">
              {isArabic ? 'الحد المحكوم: انحراف بزاوية 52° (بسبب الجزر التونسية)' : 'ICJ Award: 52° Deflection'}
            </text>

            {/* Offshore Oil / Gas Concession Icons */}
            <g transform="translate(340, 140)">
              <polygon points="0,-7 6,5 -6,5" fill="#f59e0b" />
              <text x="10" y="2" fill="#fbbf24" fontSize="8">{isArabic ? 'حقول النفط والغاز بالجرف القاري' : 'Offshore Hydrocarbon Fields'}</text>
            </g>

            {/* ICJ Outcome Badge */}
            <g transform="translate(35, 45)">
              <rect x="0" y="0" width="220" height="42" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
              <text x="10" y="16" fill="#34d399" fontSize="9" fontWeight="bold">
                {isArabic ? 'حكم محكمة العدل الدولية 1982م:' : 'ICJ Maritime Delimitation 1982:'}
              </text>
              <text x="10" y="30" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'أثر الجزر الساحلية في تغيير اتجاه الحد السياسي' : 'Islands deflected maritime boundary favorably'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 5. PASTORAL TRIBES (الساحل الأفريقي) - Transhumance Corridors  */}
        {/* ============================================================== */}
        {hotspotKey === 'pastoral_tribes' && (
          <g id="hotspot-pastoral">
            {/* Sahara Desert (North) */}
            <rect x="30" y="30" width="540" height="90" fill="#451a03" opacity="0.35" />
            <text x="300" y="75" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">
              {isArabic ? 'الصحراء الكبرى الأفريقية (مناطق الجفاف والتصحر)' : 'Sahara Desert (Arid Drought Belt)'}
            </text>

            {/* Sahel Transhumance Zone (Center Belt) */}
            <rect x="30" y="120" width="540" height="110" fill="#14532d" opacity="0.4" />
            <text x="300" y="145" fill="#4ade80" fontSize="13" fontWeight="black" textAnchor="middle">
              {isArabic ? 'إقليم الساحل الأفريقي (نطاق حركة الرعاة والنزاعات الحدودية)' : 'African Sahel Transhumance Belt'}
            </text>

            {/* Nations from West to East */}
            <g fill="#cbd5e1" fontSize="9" fontWeight="bold" textAnchor="middle">
              <text x="90" y="180">{isArabic ? 'موريتانيا / السنغال' : 'Mauritania / Senegal'}</text>
              <text x="210" y="180">{isArabic ? 'مالي' : 'Mali'}</text>
              <text x="300" y="180">{isArabic ? 'النيجر' : 'Niger'}</text>
              <text x="390" y="180">{isArabic ? 'بوركينا فاسو / تشاد' : 'Burkina / Chad'}</text>
              <text x="500" y="180">{isArabic ? 'السودان' : 'Sudan'}</text>
            </g>

            {/* Transhumance Migration Arrows (Moving South due to Drought) */}
            <g stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2">
              <line x1="90" y1="100" x2="90" y2="240" />
              <line x1="210" y1="100" x2="210" y2="240" />
              <line x1="300" y1="100" x2="300" y2="240" />
              <line x1="390" y1="100" x2="390" y2="240" />
              <line x1="500" y1="100" x2="500" y2="240" />
            </g>
            <text x="300" y="225" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle">
              {isArabic ? '⬇ هجرة الرعاة جنوباً بحثاً عن الكلأ والماء واصطدامها بالحدود السياسية ⬇' : '⬇ Southward Pastoralist Drought Migration vs Borders ⬇'}
            </text>

            {/* Savanna & Tropical Agriculture (South) */}
            <rect x="30" y="250" width="540" height="100" fill="#064e3b" opacity="0.3" />
            <text x="300" y="300" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
              {isArabic ? 'إقليم السافانا والزراعة المستقرة (الصدام بين الرعاة والمزارعين)' : 'Savanna Agriculture Zone (Farmer vs Herder Conflict)'}
            </text>

            {/* ECOWAS / Bilateral Treaties Note */}
            <g transform="translate(35, 305)">
              <rect x="0" y="0" width="310" height="34" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
              <text x="8" y="14" fill="#34d399" fontSize="8" fontWeight="bold">
                {isArabic ? 'المعالجة الجيوسياسية (اتفاقيات تنظيم حركة الرعاة):' : 'Geopolitical Solution (Transhumance Treaties):'}
              </text>
              <text x="8" y="26" fill="#cbd5e1" fontSize="7.5">
                {isArabic ? 'اتفاقيات إيكواس (ECOWAS) ومعاهدات موريتانيا والسنغال والنيجر' : 'ECOWAS protocols & Sahel pastoralist mobility treaties'}
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
