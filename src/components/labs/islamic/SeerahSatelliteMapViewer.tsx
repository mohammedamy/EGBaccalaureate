import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  Navigation,
  Camera,
} from 'lucide-react';
import kaabaPhoto from '../../../assets/islamicLab/holy_kaaba_mecca_sanctuary.jpg';
import medinaPhoto from '../../../assets/islamicLab/prophetic_sanctuary_medina.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface SeerahLocation {
  id: string;
  nameAr: string;
  nameEn: string;
  xPct: number;
  yPct: number;
  lat: number;
  lng: number;
  elevationM: number;
  categoryAr: string;
  categoryEn: string;
  quranicRefAr: string;
  quranicRefEn: string;
  descriptionAr: string;
  descriptionEn: string;
  photoUrl?: string;
  photoTitleAr?: string;
  photoTitleEn?: string;
  historicalSignificanceAr: string;
  historicalSignificanceEn: string;
}

export const SEERAH_LOCATIONS: SeerahLocation[] = [
  {
    id: 'mecca',
    nameAr: 'مكة المكرمة والمسجد الحرام',
    nameEn: 'Holy Mecca & Al-Masjid al-Haram',
    xPct: 52.0,
    yPct: 78.0,
    lat: 21.4225,
    lng: 39.8262,
    elevationM: 277,
    categoryAr: 'مهبط الوحي والبيت الحرام',
    categoryEn: 'Cradle of Revelation & Sacred House',
    quranicRefAr: '«إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكاً وَهُدًى لِّلْعَالَمِينَ» (آل عمران: 96)',
    quranicRefEn: 'Quran 3:96 ("Indeed, the first House established for mankind was that at Makkah")',
    descriptionAr:
      'مولد النبي ﷺ ومهبط الوحي الأمين؛ وفيها الكعبة المشرفة قبلة المسلمين في مشارق الأرض ومغاربها ومقصد الحج والعمرة والفتح الأعظم عام 8هـ.',
    descriptionEn:
      'Birthplace of the Prophet ﷺ, locus of the first revelation, site of the Holy Kaaba, and target of the historic Conquest of Mecca in 8 AH.',
    photoUrl: kaabaPhoto,
    photoTitleAr: 'الكعبة المشرفة وصحن المطاف بالمسجد الحرام (4K)',
    photoTitleEn: 'The Holy Kaaba & Mataf at Dawn (4K Ultra-HD)',
    historicalSignificanceAr: 'مركز العهد المكي والبعثة النبوية لثلاثة عشر عاماً، ومركز التوحيد الأعظم.',
    historicalSignificanceEn: 'Epicenter of the 13-year Meccan prophetic mission and monotheistic foundation.',
  },
  {
    id: 'medina',
    nameAr: 'المدينة المنورة والمسجد النبوي',
    nameEn: 'Holy Medina & The Prophet’s Mosque',
    xPct: 50.0,
    yPct: 28.0,
    lat: 24.4672,
    lng: 39.6111,
    elevationM: 608,
    categoryAr: 'دار الهجرة وعاصمة الإسلام',
    categoryEn: 'Haven of Hijrah & Islamic Capital',
    quranicRefAr: '«وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ» (الحشر: 9)',
    quranicRefEn: 'Quran 59:9 ("And those who were settled in the home and adopted the faith before them")',
    descriptionAr:
      'دار الهجرة النبوية المباركة ومثوى الجسد الشريف للرسول الأعظم ﷺ؛ فيها تأسست أول دولة إسلامية قائمة على المؤاخاة والوثيقة الدستورية الجامعة.',
    descriptionEn:
      'The blessed sanctuary of the Hijrah, resting place of the Prophet ﷺ, and seat of the first constitutional Islamic commonwealth.',
    photoUrl: medinaPhoto,
    photoTitleAr: 'المسجد النبوي الشريف والقبة الخضراء بالمدينة المنورة (4K)',
    photoTitleEn: 'The Prophet’s Mosque & The Green Dome (4K Ultra-HD)',
    historicalSignificanceAr: 'مهبط التشريعات المدنية، وبناء المسجد النبوي، ومقر قيادة الفتوحات ومجتمع الأنصار والمهاجرين.',
    historicalSignificanceEn: 'Center of Medinan legislation, societal brotherhood, and early Islamic leadership.',
  },
  {
    id: 'cave_hira',
    nameAr: 'غار حراء بجبل النور',
    nameEn: 'Cave of Hira (Jabal al-Nour)',
    xPct: 54.0,
    yPct: 75.0,
    lat: 21.4583,
    lng: 39.858,
    elevationM: 634,
    categoryAr: 'مبتدأ الوحي وقرآن الفجر',
    categoryEn: 'Dawn of Revelation & Prophetic Call',
    quranicRefAr: '«اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ» (العلق: 1)',
    quranicRefEn: 'Quran 96:1 ("Recite in the name of your Lord who created")',
    descriptionAr:
      'الغار الشامخ في قمة جبل النور؛ كان يتحنث فيه النبي ﷺ الليالي ذوات العدد طلباً للحق، وفيه نزل جبريل عليه السلام بتباشير الوحي الخاتم في شهر رمضان المبارك.',
    descriptionEn:
      'The mountain cave atop Mount of Light where the Prophet ﷺ engaged in contemplative devotion and received the opening revelation of Surah al-Alaq.',
    historicalSignificanceAr: 'انطلاق الرسالة الإسلامية الخالدة ونقل البشرية من ظلمات الجاهلية إلى نور التوحيد والعلم.',
    historicalSignificanceEn: 'The definitive turning point of human history marking the advent of divine revelation.',
  },
  {
    id: 'cave_thawr',
    nameAr: 'غار ثور وطريق الهجرة',
    nameEn: 'Cave of Thawr (The Hijrah Refuge)',
    xPct: 51.0,
    yPct: 83.0,
    lat: 21.3789,
    lng: 39.8503,
    elevationM: 750,
    categoryAr: 'محطة الصديق والتوكل الأعظم',
    categoryEn: 'Sanctuary of Faith & Divine Protection',
    quranicRefAr: '«إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا» (التوبة: 40)',
    quranicRefEn: 'Quran 9:40 ("When he said to his companion: Do not grieve; indeed Allah is with us")',
    descriptionAr:
      'الغار الذي لجأ إليه النبي ﷺ بصحبة أبي بكر الصديق لثلاث ليالٍ أثناء الهجرة، فعميت عنهما أبصار المشركين بحفظ الله وتوفيقه.',
    descriptionEn:
      'The summit cavern where the Prophet ﷺ and Abu Bakr took refuge for three nights during the Hijrah, sheltered by divine intervention.',
    historicalSignificanceAr: 'درس عملي خالد في الأخذ بالأسباب مع كمال التوكل واليقين بمعية الله.',
    historicalSignificanceEn: 'The classic paradigm of meticulous strategic planning blended with unshakeable reliance on God.',
  },
  {
    id: 'badr',
    nameAr: 'ميدان بدر الكبرى (يوم الفرقان)',
    nameEn: 'Badr Battlefield (The Great Criterion)',
    xPct: 35.0,
    yPct: 45.0,
    lat: 23.7786,
    lng: 38.7889,
    elevationM: 160,
    categoryAr: 'أولى المعارك الفاصلة (17 رمضان 2هـ)',
    categoryEn: 'First Decisive Battle (17 Ramadan 2 AH)',
    quranicRefAr: '«وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ فَاتَّقُوا اللَّهَ لَعَلَّكُمْ تَشْكُرُونَ» (آل عمران: 123)',
    quranicRefEn: 'Quran 3:123 ("And already had Allah given you victory at Badr while you were few in number")',
    descriptionAr:
      'الموقع التاريخي لغزوة بدر الكبرى جنوب غرب المدينة؛ انتصرت فيه فئة الإيمان القليلة (313 صحابياً) على جيش قريش، وتأسست به مهابة الأمة الإسلامية.',
    descriptionEn:
      'Historic site of the first major military encounter where 313 early Muslims secured victory against the heavily-armed Quraysh confederation.',
    historicalSignificanceAr: 'سميت في القرآن بـ "يوم الفرقان"؛ لأن الله فرق بها بين الحق والباطل وثبت دعائم الدولة.',
    historicalSignificanceEn: 'Designated the "Day of the Criterion" establishing the geopolitical standing of the Medinan state.',
  },
  {
    id: 'uhud',
    nameAr: 'جبل أحد ومقبرة الشهداء',
    nameEn: 'Mount Uhud & Martyrs’ Cemetery',
    xPct: 51.0,
    yPct: 24.0,
    lat: 24.5033,
    lng: 39.6128,
    elevationM: 1077,
    categoryAr: 'ملحمة أحد والصبر (شوال 3هـ)',
    categoryEn: 'Battle of Uhud (Shawwal 3 AH)',
    quranicRefAr: '«إِن يَمْسَسْكُمْ قَرْحٌ فَقَدْ مَسَّ الْقَوْمَ قَرْحٌ مِّثْلُهُ وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ» (آل عمران: 140)',
    quranicRefEn: 'Quran 3:140 ("If a wound touches you, be sure a similar wound touched the other people")',
    descriptionAr:
      'جبل جرانيتي أحمر شامخ شمال المدينة قال عنه النبي ﷺ: «أحد جبل يحبنا ونحبه»؛ شهد ملحمة أحد العظيمة ومقبرة سيد الشهداء حمزة بن عبد المطلب و70 صحابياً.',
    descriptionEn:
      'Monumental red granite mountain north of Medina, beloved by the Prophet ﷺ; site of the Battle of Uhud and resting place of Hamzah ibn Abd al-Muttalib.',
    historicalSignificanceAr: 'درس بليغ في وجوب طاعة الأوامر العسكرية النبوية وعدم الانشغال بالغنائم المادية.',
    historicalSignificanceEn: 'Profound lesson on military discipline, strategic obedience, and steadfastness in trial.',
  },
  {
    id: 'khandaq',
    nameAr: 'موقع الخندق والمساجد السبعة',
    nameEn: 'The Trench (Ghazwat al-Ahzab 5 AH)',
    xPct: 48.0,
    yPct: 27.0,
    lat: 24.4761,
    lng: 39.5964,
    elevationM: 595,
    categoryAr: 'غزوة الأحزاب وحصار المدينة (5هـ)',
    categoryEn: 'Battle of the Trench (5 AH)',
    quranicRefAr: '«إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ» (الأحزاب: 10)',
    quranicRefEn: 'Quran 33:10 ("When they came at you from above you and from below you")',
    descriptionAr:
      'الخندق الدفاعي العبقري الذي حفره المسلمون شمال المدينة بإشارة الصحابي سلمان الفارسي رضي الله عنه لصد تحالف 10 آلاف مقاتل من الأحزاب والقبائل.',
    descriptionEn:
      'The strategic defensive ditch excavated north of Medina on the counsel of Salman al-Farsi, neutralizing a siege of 10,000 confederate troops.',
    historicalSignificanceAr: 'قمة التخطيط الاستراتيجي العسكري وتكامل الخبرات الإنسانية مع الدعاء ونصر الريح المباركة.',
    historicalSignificanceEn: 'Exemplifies tactical ingenuity, multi-tribal alliance disruption, and divine deliverance.',
  },
];

export const SeerahSatelliteMapViewer: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<SeerahLocation>(SEERAH_LOCATIONS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [showHijrahTrail, setShowHijrahTrail] = useState<boolean>(true);

  const handleOpenPhotoModal = (loc: SeerahLocation) => {
    if (!loc.photoUrl) return;
    setModalData({
      imageUrl: loc.photoUrl,
      titleAr: loc.photoTitleAr || loc.nameAr,
      titleEn: loc.photoTitleEn || loc.nameEn,
      subtitleAr: loc.categoryAr,
      subtitleEn: loc.categoryEn,
      descriptionAr: loc.descriptionAr,
      descriptionEn: loc.descriptionEn,
      locationAr: loc.nameAr,
      locationEn: loc.nameEn,
      dateOrEraAr: 'مهبط الوحي النبوي والحرم الشريف',
      dateOrEraEn: 'Sanctuary of Prophetic History & Revelation',
    });
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl transition-all duration-300 ${
        isContrast
          ? 'bg-black border-emerald-400 text-emerald-300'
          : isLight
          ? 'bg-gradient-to-b from-[#f9faf7] via-[#f3f7f0] to-[#e6ece1] border-emerald-300 shadow-emerald-950/10'
          : 'bg-gradient-to-b from-[#0a120e] via-[#101a14] to-[#152219] border-emerald-500/30 shadow-black/80'
      }`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-emerald-100 border-emerald-400 text-emerald-900'
                : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
            }`}
          >
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-emerald-950' : 'text-emerald-300'}`}>
              {isArabic
                ? 'الخريطة الجغرافية التفاعلية للسيرة النبوية وطريق الهجرة (Seerah Satellite Map)'
                : 'Interactive Seerah Satellite Map & Prophetic Hijrah Route'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'إحداثيات جغرافية دقيقة لمكة المكرمة والمدينة المنورة، وغار حراء وثور، وميادين بدر وأحد والخندق'
                : 'Calibrated GPS cartography of Mecca, Medina, Caves of Hira & Thawr, and battlefields of Badr & Uhud'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowHijrahTrail(!showHijrahTrail)}
          className={`px-3 py-1.5 rounded-xl border text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
            showHijrahTrail
              ? 'bg-emerald-500 text-black border-emerald-400'
              : 'bg-slate-800 text-slate-300 border-slate-700'
          }`}
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>{isArabic ? 'مسار الهجرة النبوية' : 'Hijrah Trail'}</span>
        </button>
      </div>

      {/* Main Interactive Map & Landmark Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 items-stretch">
        {/* Geographic Map Viewport (SVG Satellite Simulation) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-[#111915] select-none">
            {/* SVG Terrain Map representing Hijaz & Red Sea Coastline */}
            <svg viewBox="0 0 500 400" className="w-full h-full">
              <defs>
                <linearGradient id="seaWaterGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0c2340" />
                  <stop offset="100%" stopColor="#08182b" />
                </linearGradient>
                <linearGradient id="desertTerrainGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1a251e" />
                  <stop offset="50%" stopColor="#25352b" />
                  <stop offset="100%" stopColor="#19241d" />
                </linearGradient>
                <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Arabian Peninsula Landmass */}
              <rect x="0" y="0" width="500" height="400" fill="url(#desertTerrainGrad)" />

              {/* Red Sea Coastline Polyline on Left */}
              <path
                d="M 0,0 L 120,0 Q 140,80 110,160 Q 80,240 130,320 Q 160,370 180,400 L 0,400 Z"
                fill="url(#seaWaterGrad)"
                stroke="#1e3a5f"
                strokeWidth="1.5"
              />

              {/* Red Sea Label */}
              <text x="50" y="200" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.6" transform="rotate(-70, 50, 200)">
                {isArabic ? 'البحر الأحمر (بحر القلزم)' : 'Red Sea (Bahr al-Qulzum)'}
              </text>

              {/* Sarawat Mountain Range Ridge Line */}
              <path
                d="M 270,20 Q 250,120 280,220 Q 290,320 280,390"
                fill="none"
                stroke="#3f5145"
                strokeWidth="6"
                strokeDasharray="4,4"
                opacity="0.5"
              />
              <text x="310" y="180" fill="#86efac" fontSize="9" fontWeight="bold" opacity="0.4" transform="rotate(75, 310, 180)">
                {isArabic ? 'جبال السروات والحجاز' : 'Sarawat Mountain Ridge'}
              </text>

              {/* The Prophetic Hijrah Trail Polyline */}
              {showHijrahTrail && (
                <g filter="url(#glowGreen)">
                  {/* Glowing Track */}
                  <path
                    d="M 260,312 Q 220,290 190,240 Q 180,180 250,112"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    strokeDasharray="6,4"
                    className="animate-pulse"
                  />
                  {/* Directional markers along route */}
                  <circle cx="210" cy="270" r="3" fill="#34d399" />
                  <circle cx="185" cy="210" r="3" fill="#34d399" />
                  <circle cx="215" cy="150" r="3" fill="#34d399" />
                </g>
              )}

              {/* Badr Expedition Spur */}
              <line x1="250" y1="112" x2="175" y2="180" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="3,3" opacity="0.7" />

              {/* Map Locations Radar Markers */}
              {SEERAH_LOCATIONS.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                // Convert percentage coordinates to SVG 500x400
                const cx = (loc.xPct / 100) * 500;
                const cy = (loc.yPct / 100) * 400;

                return (
                  <g
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className="cursor-pointer group/pin"
                  >
                    {/* Pulsing Outer Radar Ring */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 14 : 9}
                      fill={isSelected ? '#10b981' : '#34d399'}
                      opacity={isSelected ? 0.35 : 0.2}
                      className="animate-ping"
                    />
                    {/* Ring Border */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 10 : 7}
                      fill="none"
                      stroke={isSelected ? '#34d399' : '#10b981'}
                      strokeWidth={isSelected ? 2 : 1.2}
                    />
                    {/* Center Core */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 5 : 3.5}
                      fill={isSelected ? '#fef08a' : '#ffffff'}
                      filter="drop-shadow(0 0 3px #10b981)"
                    />
                    {/* Location Name Tag */}
                    <text
                      x={cx + (loc.xPct > 50 ? 12 : -12)}
                      y={cy + 4}
                      fill={isSelected ? '#fef08a' : '#ffffff'}
                      fontSize="9.5"
                      fontWeight="bold"
                      textAnchor={loc.xPct > 50 ? 'start' : 'end'}
                      filter="drop-shadow(0 1px 2px rgba(0,0,0,0.9))"
                    >
                      {isArabic ? loc.nameAr.split(' ')[0] : loc.nameEn.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Bottom HUD Telemetry Overlay */}
            <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-emerald-500/30 text-white text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-emerald-300">
                  {isArabic ? 'الموقع النشط:' : 'Active Landmark:'}{' '}
                  {isArabic ? selectedLocation.nameAr : selectedLocation.nameEn}
                </span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400">
                GPS: {selectedLocation.lat.toFixed(4)}°N, {selectedLocation.lng.toFixed(4)}°E ({selectedLocation.elevationM}m)
              </span>
            </div>
          </div>

          {/* Quick Landmark Jump Buttons */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {SEERAH_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedLocation.id === loc.id
                    ? 'bg-emerald-500 text-black shadow-md font-black'
                    : isLight
                    ? 'bg-emerald-100 text-slate-800 hover:bg-emerald-200'
                    : 'bg-slate-900 border border-emerald-500/20 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {isArabic ? loc.nameAr.split(' ')[0] : loc.nameEn.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Deep Historical Landmark & 4K Photo Drawer */}
        <div
          className={`lg:col-span-5 p-5 rounded-2xl border flex flex-col justify-between ${
            isLight
              ? 'bg-white/90 border-emerald-300 shadow-sm'
              : 'bg-black/50 border-emerald-500/30 shadow-xl'
          }`}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-emerald-500/20">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {isArabic ? selectedLocation.categoryAr : selectedLocation.categoryEn}
              </span>
              <span className="text-[11px] font-mono text-slate-400 font-bold">
                {selectedLocation.elevationM}m ASL
              </span>
            </div>

            <div>
              <h4 className={`text-base font-black ${isLight ? 'text-emerald-950' : 'text-emerald-300'}`}>
                {isArabic ? selectedLocation.nameAr : selectedLocation.nameEn}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                {isArabic ? selectedLocation.descriptionAr : selectedLocation.descriptionEn}
              </p>
            </div>

            {/* Quranic Citation Box */}
            <div
              className={`p-3 rounded-xl border text-xs font-serif leading-relaxed ${
                isLight
                  ? 'bg-emerald-100/60 border-emerald-300 text-emerald-950'
                  : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1 font-sans text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                {isArabic ? 'الشاهد القرآني الكريم:' : 'Quranic Citation:'}
              </div>
              <div className="text-sm font-bold text-emerald-300">
                {isArabic ? selectedLocation.quranicRefAr : selectedLocation.quranicRefEn}
              </div>
            </div>

            {/* Historical Lessons */}
            <div className="text-xs space-y-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                {isArabic ? 'المدلول القيادي والتربوي في السيرة النبوية:' : 'Prophetic Strategic & Leadership Lessons:'}
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {isArabic ? selectedLocation.historicalSignificanceAr : selectedLocation.historicalSignificanceEn}
              </p>
            </div>
          </div>

          {/* 4K Photo Inspection Launcher Card if photo available */}
          {selectedLocation.photoUrl && (
            <div className="mt-4 pt-4 border-t border-emerald-500/20">
              <div className="relative rounded-xl overflow-hidden border border-emerald-500/30 aspect-[16/9] group">
                <img
                  src={selectedLocation.photoUrl}
                  alt={selectedLocation.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-3">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-black text-white">
                      {isArabic ? selectedLocation.photoTitleAr : selectedLocation.photoTitleEn}
                    </span>
                    <button
                      onClick={() => handleOpenPhotoModal(selectedLocation)}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-[11px] font-black flex items-center gap-1 cursor-pointer shadow-md"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{isArabic ? 'تكبير 4K' : 'View 4K'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
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
