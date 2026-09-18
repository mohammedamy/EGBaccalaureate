import React from 'react';
import type { Language } from '../../../i18n/translations';

interface Props {
  blocKey: string;
  lang: Language;
  theme?: string;
}

export const HighResBlocMap: React.FC<Props> = ({ blocKey, lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  const graticuleStroke = isLight ? '#bae6fd' : '#1e293b';
  const nonMemberColor = isLight ? '#e2e8f0' : '#1e293b';

  return (
    <div className="w-full flex flex-col items-center justify-center select-none relative">
      <svg
        className="w-full max-w-2xl h-auto aspect-[16/10] rounded-2xl border border-slate-800 shadow-2xl drop-shadow-2xl overflow-hidden"
        viewBox="0 0 600 380"
      >
        <defs>
          <linearGradient id="blocOcean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLight ? '#f0f9ff' : '#040b17'} />
            <stop offset="100%" stopColor={isLight ? '#e0f2fe' : '#0a162b'} />
          </linearGradient>

          <linearGradient id="memberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <filter id="hqGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Ocean Background */}
        <rect width="600" height="380" fill="url(#blocOcean)" />

        {/* Graticule Grid */}
        <g stroke={graticuleStroke} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5">
          <line x1="30" y1="95" x2="570" y2="95" />
          <line x1="30" y1="190" x2="570" y2="190" />
          <line x1="30" y1="285" x2="570" y2="285" />
          <line x1="150" y1="20" x2="150" y2="360" />
          <line x1="300" y1="20" x2="300" y2="360" />
          <line x1="450" y1="20" x2="450" y2="360" />
        </g>

        {/* Frame */}
        <rect x="12" y="12" width="576" height="356" fill="none" stroke={isLight ? '#94a3b8' : '#334155'} strokeWidth="1.2" rx="10" />

        {/* ============================================================== */}
        {/* 1. COMESA (الكوميسا) - 21 Eastern & Southern African States     */}
        {/* ============================================================== */}
        {blocKey === 'comesa' && (
          <g id="bloc-comesa">
            {/* African Continent Silhouette */}
            {/* Non-member West/Northwest Africa */}
            <path
              d="M 170 50
                 C 210 45, 260 48, 290 60
                 C 280 90, 240 120, 200 130
                 C 160 140, 130 160, 150 200
                 C 170 230, 200 240, 230 250
                 L 230 160 L 290 120 L 290 60
                 Z"
              fill={nonMemberColor}
              stroke="#475569"
              strokeWidth="1"
            />

            {/* COMESA Member States Belt:
                Egypt in North, Sudan, Libya, Tunisia, Ethiopia, Kenya, Uganda, Rwanda, Burundi,
                DR Congo, Zambia, Zimbabwe, Malawi, Madagascar, etc.
            */}
            {/* Northern Anchor: Egypt & Libya & Tunisia */}
            <path
              d="M 280 50
                 L 430 50
                 L 440 100
                 L 410 130
                 L 370 140
                 L 330 110
                 L 280 90
                 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="2"
            />
            <text x="365" y="75" fill="#ffffff" fontSize="10" fontWeight="black" textAnchor="middle">
              {isArabic ? 'مصر 🇪🇬 (البوابة الشمالية الكبرى)' : 'Egypt (Northern Gateway)'}
            </text>

            {/* Central / Eastern / Southern COMESA Block */}
            <path
              d="M 370 140
                 L 460 150
                 C 490 180, 480 230, 450 260
                 C 420 300, 390 340, 360 360
                 C 340 340, 330 300, 320 270
                 C 300 250, 250 240, 260 210
                 C 280 180, 330 160, 370 140
                 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="2"
            />

            {/* Madagascar Island (COMESA Member) */}
            <path
              d="M 470 280 C 485 295, 475 330, 460 340 C 450 330, 455 300, 470 280 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="1.5"
            />
            <text x="495" y="315" fill="#38bdf8" fontSize="8" fontWeight="bold">
              {isArabic ? 'مدغشقر' : 'Madagascar'}
            </text>

            {/* Headquarters: Lusaka, Zambia */}
            <g transform="translate(360, 275)" filter="url(#hqGlow)">
              <circle cx="0" cy="0" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="12" y="4" fill="#fbbf24" fontSize="10" fontWeight="black">
                {isArabic ? 'لوساكا - زامبيا (المقر الدائم)' : 'Lusaka - Zambia (HQ)'}
              </text>
            </g>

            {/* Key Member Labels */}
            <g fill="#cbd5e1" fontSize="8" fontWeight="bold">
              <text x="360" y="170">{isArabic ? 'السودان' : 'Sudan'}</text>
              <text x="420" y="200">{isArabic ? 'إثيوبيا وكينيا' : 'Ethiopia & Kenya'}</text>
              <text x="280" y="235">{isArabic ? 'الكونغو الديمقراطية' : 'DR Congo'}</text>
              <text x="340" y="325">{isArabic ? 'زيمبابوي وملاوي' : 'Zimbabwe & Malawi'}</text>
            </g>

            {/* Bloc Header Tag */}
            <g transform="translate(35, 40)">
              <rect x="0" y="0" width="230" height="42" rx="8" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
              <text x="10" y="16" fill="#14b8a6" fontSize="9" fontWeight="bold">
                {isArabic ? 'تكتل الكوميسا (21 دولة أفريقية):' : 'COMESA (21 African States):'}
              </text>
              <text x="10" y="30" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'سوق ضخمة تضم أكثر من 600 مليون نسمة' : 'Single market of >600M population'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 2. EUROPEAN UNION (الاتحاد الأوروبي) - 27 Member States         */}
        {/* ============================================================== */}
        {blocKey === 'eu' && (
          <g id="bloc-eu">
            {/* European Landmass: EU Members Highlighted in Vibrant Teal */}
            {/* Western & Central Europe Member States */}
            <path
              d="M 160 120
                 C 220 90, 300 80, 380 95
                 C 420 120, 440 180, 420 240
                 C 380 270, 340 310, 300 320
                 C 250 310, 210 270, 180 230
                 C 150 180, 140 140, 160 120
                 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="2"
            />

            {/* Scandinavia (Sweden, Finland - EU members) */}
            <path
              d="M 310 40 C 340 35, 365 45, 375 75 C 345 80, 320 75, 310 40 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="1.5"
            />
            <text x="350" y="60" fill="#ffffff" fontSize="8" fontWeight="bold">
              {isArabic ? 'السويد وفنلندا' : 'Sweden / Finland'}
            </text>

            {/* Iberian Peninsula (Spain, Portugal - EU) */}
            <path
              d="M 150 240 L 210 240 L 200 310 L 140 300 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="1.5"
            />
            <text x="145" y="275" fill="#ffffff" fontSize="8" fontWeight="bold">
              {isArabic ? 'إسبانيا والبرتغال' : 'Spain & Portugal'}
            </text>

            {/* Italy Peninsula (EU) */}
            <path
              d="M 290 240 L 320 280 L 335 325 L 310 325 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="1.5"
            />
            <text x="315" y="295" fill="#ffffff" fontSize="8" fontWeight="bold">
              {isArabic ? 'إيطاليا' : 'Italy'}
            </text>

            {/* Non-member UK & Norway shown in muted grey */}
            <path
              d="M 160 80 C 180 70, 190 95, 175 120 C 155 110, 150 90, 160 80 Z"
              fill={nonMemberColor}
              stroke="#475569"
              strokeWidth="1"
            />
            <text x="135" y="100" fill="#64748b" fontSize="7">
              {isArabic ? 'بريطانيا (خروج البريكست)' : 'UK (Brexit)'}
            </text>

            {/* Headquarters: Brussels, Belgium */}
            <g transform="translate(240, 155)" filter="url(#hqGlow)">
              <circle cx="0" cy="0" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="12" y="4" fill="#fbbf24" fontSize="10" fontWeight="black">
                {isArabic ? 'بروكسل - بلجيكا (المقر الدائم والمفوضية)' : 'Brussels (EU Headquarters)'}
              </text>
            </g>

            {/* Key Member Labels */}
            <g fill="#cbd5e1" fontSize="9" fontWeight="bold">
              <text x="220" y="200">{isArabic ? 'فرنسا 🇫🇷' : 'France'}</text>
              <text x="290" y="160">{isArabic ? 'ألمانيا 🇩🇪' : 'Germany'}</text>
              <text x="360" y="180">{isArabic ? 'بولندا وشرق أوروبا' : 'Poland & East EU'}</text>
            </g>

            {/* Tag */}
            <g transform="translate(35, 310)">
              <rect x="0" y="0" width="240" height="42" rx="8" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
              <text x="10" y="16" fill="#14b8a6" fontSize="9" fontWeight="bold">
                {isArabic ? 'الاتحاد الأوروبي (27 دولة):' : 'European Union (27 Nations):'}
              </text>
              <text x="10" y="30" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'أعلى مراحل الاندماج: عملة موحدة (اليورو) وشنغن' : 'Highest integration: Eurozone & Schengen'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 3. GCC (مجلس التعاون الخليجي) - 6 Arabian Gulf States          */}
        {/* ============================================================== */}
        {blocKey === 'gcc' && (
          <g id="bloc-gcc">
            {/* Water Bodies */}
            <text x="380" y="140" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.8">
              {isArabic ? 'الخليج العربي (Arabian Gulf)' : 'Arabian Gulf'}
            </text>
            <text x="120" y="240" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.6" transform="rotate(-65 120 240)">
              {isArabic ? 'البحر الأحمر' : 'Red Sea'}
            </text>
            <text x="450" y="290" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.7">
              {isArabic ? 'بحر عمان والمحيط الهندي' : 'Sea of Oman & Indian Ocean'}
            </text>

            {/* Arabian Peninsula Mainland (All 6 GCC States highlighted) */}
            <path
              d="M 180 80
                 C 250 75, 330 85, 370 100
                 C 380 120, 395 140, 420 160
                 C 450 170, 490 190, 500 220
                 C 490 260, 440 310, 370 335
                 C 300 350, 240 330, 190 280
                 C 150 230, 150 140, 180 80
                 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="2.5"
            />

            {/* Strait of Hormuz Chokepoint Indicator */}
            <g transform="translate(455, 160)">
              <circle cx="0" cy="0" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <text x="-10" y="-8" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="end">
                {isArabic ? 'مضيق هرمز الاستراتيجي' : 'Strait of Hormuz'}
              </text>
            </g>

            {/* Headquarters: Riyadh, Saudi Arabia */}
            <g transform="translate(290, 185)" filter="url(#hqGlow)">
              <circle cx="0" cy="0" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="12" y="4" fill="#fbbf24" fontSize="10" fontWeight="black">
                {isArabic ? 'الرياض - السعودية (المقر الدائم)' : 'Riyadh - KSA (HQ)'}
              </text>
            </g>

            {/* Member States Pins */}
            <g fill="#ffffff" fontSize="9" fontWeight="bold">
              <text x="240" y="150">{isArabic ? 'المملكة العربية السعودية 🇸🇦' : 'Saudi Arabia'}</text>
              <text x="350" y="110">{isArabic ? 'الكويت 🇰🇼' : 'Kuwait'}</text>
              <text x="380" y="160">{isArabic ? 'البحرين 🇧🇭 وقطر 🇶🇦' : 'Bahrain & Qatar'}</text>
              <text x="420" y="200">{isArabic ? 'الإمارات 🇦🇪' : 'UAE'}</text>
              <text x="420" y="260">{isArabic ? 'سلطنة عمان 🇴🇲' : 'Oman'}</text>
            </g>

            {/* Tag */}
            <g transform="translate(35, 40)">
              <rect x="0" y="0" width="230" height="42" rx="8" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
              <text x="10" y="16" fill="#14b8a6" fontSize="9" fontWeight="bold">
                {isArabic ? 'مجلس التعاون لدول الخليج العربي (6 دول):' : 'GCC (6 Arab Gulf States):'}
              </text>
              <text x="10" y="30" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'تجانس جغرافي وتاريخي وثقافي ووفرة نفطية هائلة' : 'Homogeneous culture & immense petroleum reserves'}
              </text>
            </g>
          </g>
        )}

        {/* ============================================================== */}
        {/* 4. NATO (حلف شمال الأطلسي) - Transatlantic Defense Alliance     */}
        {/* ============================================================== */}
        {blocKey === 'nato' && (
          <g id="bloc-nato">
            {/* North Atlantic Ocean in the Center */}
            <text x="300" y="200" fill="#38bdf8" fontSize="13" fontWeight="bold" opacity="0.8" textAnchor="middle">
              {isArabic ? 'المحيط الأطلسي الشمالي (حلف دفاعي عبر الأطلسي)' : 'North Atlantic Ocean (Transatlantic Alliance)'}
            </text>

            {/* North America (USA & Canada) */}
            <path
              d="M 50 80
                 C 90 70, 150 80, 180 100
                 C 190 140, 180 220, 140 260
                 C 110 270, 80 250, 50 220
                 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="2"
            />
            <text x="100" y="140" fill="#ffffff" fontSize="11" fontWeight="black">
              {isArabic ? 'الولايات المتحدة الأمريكية 🇺🇸 وكندا 🇨🇦' : 'USA & Canada'}
            </text>

            {/* European Allies (Western & Northern & Central Europe) */}
            <path
              d="M 400 90
                 C 460 70, 530 80, 560 110
                 C 570 170, 540 240, 480 270
                 C 430 260, 390 200, 400 130
                 Z"
              fill="url(#memberGrad)"
              stroke="#14b8a6"
              strokeWidth="2"
            />
            <text x="470" y="160" fill="#ffffff" fontSize="11" fontWeight="black" textAnchor="middle">
              {isArabic ? 'الحلفاء الأوروبيون (أوروبا)' : 'European Allies'}
            </text>

            {/* Transatlantic Mutual Defense Shield Line (Article 5) */}
            <line
              x1="180"
              y1="150"
              x2="400"
              y2="150"
              stroke="#ef4444"
              strokeWidth="3"
              strokeDasharray="5 3"
            />
            <g transform="translate(290, 135)">
              <rect x="-70" y="-12" width="140" height="24" rx="6" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
              <text x="0" y="4" fill="#f87171" fontSize="9" fontWeight="black" textAnchor="middle">
                {isArabic ? 'المادة 5 (الدفاع المشترك)' : 'Article 5 (Mutual Defense)'}
              </text>
            </g>

            {/* Headquarters: Brussels, Belgium */}
            <g transform="translate(420, 150)" filter="url(#hqGlow)">
              <circle cx="0" cy="0" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
              <text x="12" y="4" fill="#fbbf24" fontSize="10" fontWeight="black">
                {isArabic ? 'بروكسل (مقر الحلف)' : 'Brussels (NATO HQ)'}
              </text>
            </g>

            {/* Tag */}
            <g transform="translate(35, 40)">
              <rect x="0" y="0" width="250" height="42" rx="8" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
              <text x="10" y="16" fill="#14b8a6" fontSize="9" fontWeight="bold">
                {isArabic ? 'حلف شمال الأطلسي (الناتو - 1949م):' : 'NATO (Formed 1949):'}
              </text>
              <text x="10" y="30" fill="#cbd5e1" fontSize="8">
                {isArabic ? 'أقوى حلف عسكري عالمي لمواجهة التهديدات المشتركة' : 'Preeminent collective defense military alliance'}
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
