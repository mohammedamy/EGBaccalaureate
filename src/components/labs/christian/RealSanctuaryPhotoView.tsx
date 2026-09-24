import React, { useState } from 'react';
import { Maximize2, Sparkles, Church } from 'lucide-react';
import sanctuaryPhoto from '../../../assets/christianLab/coptic_iconostasis_sanctuary.jpg';
import altarVesselsPhoto from '../../../assets/christianLab/seven_sacraments_altar.jpg';
import { HiResImageModal, type HiResImageModalData } from './HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

interface SanctuaryHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

const SANCTUARY_HOTSPOTS: SanctuaryHotspot[] = [
  {
    id: 'holy_altar',
    xPct: 50.0,
    yPct: 70.0,
    titleAr: 'المذبح المقدس والمظلة الرخامية (Ciborium)',
    titleEn: 'Holy Altar & Marble Ciborium Canopy',
    descAr:
      'المذبح الحجري المدشن بالميرون المقدس والمغطى باللفائف الحريرية البيضاء؛ فوقه ترتفع المظلة الرخامية ذات الأعمدة الأربعة التي ترمز للإنجيليين الأربعة وعرش الله القدوس.',
    descEn:
      'Chrism-consecrated altar covered in white silk liturgical vestments beneath the four-column marble ciborium symbolizing the Four Evangelists.',
  },
  {
    id: 'east_apse',
    xPct: 50.0,
    yPct: 15.0,
    titleAr: 'حضن الآب والقناديل السبعة (The East Apse)',
    titleEn: 'East Apse & Seven Vigil Oil Lamps',
    descAr:
      'التجويف الشرقي نصف الدائري الذي يمثل فتحة السماء وأحضان الله المحبة؛ تتدلى منه سبعة قناديل زيتية ترمز إلى أرواح الله السبعة وأسرار الكنيسة السبعة.',
    descEn:
      'The semicircular eastern niche representing heaven\'s embrace; seven hanging vigil oil lamps symbolize the seven gifts of the Holy Spirit and seven sacraments.',
  },
  {
    id: 'royal_doors_curtain',
    xPct: 59.5,
    yPct: 58.0,
    titleAr: 'الباب الملوكي وستر الهيكل القرمزي المطرز',
    titleEn: 'The Royal Doors & Crimson Liturgical Curtain',
    descAr:
      'المدخل الأوسط للهيكل؛ يُغطى بستر مخملي قرمزي فاخر مطرز بخيوط الذهب البيزنطية حاملاً الصليب القبطي، ويُفتح أثناء إقامة صلوات التمجيد ورفع بخور العشية والقداس.',
    descEn:
      'Central sanctuary gateway adorned with a rich crimson velvet curtain embroidered with golden crosses, opened during Eucharistic liturgies.',
  },
  {
    id: 'apostles_tier',
    xPct: 50.0,
    yPct: 24.5,
    titleAr: 'صف الرسل وأيقونة العشاء السري (The Apostles Tier)',
    titleEn: 'Apostles Tier & The Last Supper Icon',
    descAr:
      'الصف العلوي للأيقونسطاس؛ يتوسطه السيد المسيح مع تلاميذه الاثني عشر في العشاء السري، محاطاً بأيقونات الرسل الأطهار شاهداً على امتداد التسليم الرسولي الحي.',
    descEn:
      'Upper iconostasis tier featuring Christ and the Twelve Apostles at the Mystical Supper, attesting to apostolic succession.',
  },
  {
    id: 'mother_of_pearl_inlay',
    xPct: 33.0,
    yPct: 62.0,
    titleAr: 'حشوات خشب الجوز المطعمة بالصدف والأرابيسك',
    titleEn: 'Walnut Woodwork & Mother-of-Pearl Inlays',
    descAr:
      'فن الأرابيسك القبطي الدقيق؛ ألواح خشب الجوز المعشق والمطعم بصدف البحر الطبيعي على هيئة صلبان هندسية متداخلة تعكس دقة وحرفية التراث الكنسي المصري.',
    descEn:
      'Exquisite Coptic interlocking walnut woodwork inlaid with iridescent mother-of-pearl geometric crosses.',
  },
];

export const RealSanctuaryPhotoView: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<SanctuaryHotspot>(SANCTUARY_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const handleOpenSanctuaryModal = () => {
    setModalData({
      imageUrl: sanctuaryPhoto,
      titleAr: 'الهيكل المقدس وحجاب الأيقونسطاس القبطي الأثري فائق الدقة',
      titleEn: 'Sacred Coptic Orthodox Sanctuary & Masterpiece Iconostasis',
      subtitleAr: 'توثيق معماري وطقسي بمتحف وكنائس التراث القبطي بمصر',
      subtitleEn: 'High-Resolution Architectural & Liturgical Documentation',
      descriptionAr:
        'لقطة توثيقية حقيقية للهيكل المقدس القبطي تبرز حجاب الأيقونسطاس الخشبي المحفور يدوياً والمطعم بعرق اللؤلؤ والصدف الطبيعي، وستر الهيكل القرمزي المخملي، والمظلة الرخامية فوق المذبح المحاطة بقناديل الهيكل السبعة المضاءة بزيت الزيتون النقي، مع أيقونات السيدة العذراء والضابط الكل والرسل الأطهار.',
      descriptionEn:
        'Authentic museum-grade view of a Coptic Orthodox sanctuary showcasing hand-carved walnut iconostasis with mother-of-pearl crosses, crimson velvet curtain, marble ciborium altar canopy, and hanging vigil oil lamps.',
      locationAr: 'القاهرة التاريخية ومصر القديمة',
      locationEn: 'Historic Coptic Cairo & Ancient Basilicas',
      dateOrEraAr: 'تراث كنسي عريق',
      dateOrEraEn: 'Historic Sacred Liturgical Heritage',
    });
  };

  const handleOpenAltarVesselsModal = () => {
    setModalData({
      imageUrl: altarVesselsPhoto,
      titleAr: 'الأواني المقدسة وأدوات الأسرار السبعة على المذبح',
      titleEn: 'Sacred Liturgical Vessels & Seven Sacraments Implements',
      subtitleAr: 'الكأس والصينية والميرون والبخور وأكاليل الزيجة المقدسة',
      subtitleEn: 'Eucharistic Chalice, Paten, Holy Myron Cruet & Nuptial Crowns',
      descriptionAr:
        'لقطة مقربة فائقة الدقة للأواني المقدسة المستخدمة في ممارسة الأسرار الكنسية السبعة: الكأس الذهبي والصينية والنجم واللفائف الحريرية، وقارورة زيت الميرون المقدس، ومبخرة الشوربة الفضية ذات السلاسل الثلاث، وأكاليل سر الزيجة المذهبة، والإنجيل المقدس المفتوح.',
      descriptionEn:
        'Close-up still life of sacred liturgical vessels on consecrated altar silk: golden Eucharistic chalice, paten, veil, Holy Chrism cruet, silver incense censer, marriage crowns, and Gospel codex.',
      locationAr: 'المذبح المقدس القبطي',
      locationEn: 'Coptic Holy Altar',
      dateOrEraAr: 'أدوات ليتورجية مقدسة',
      dateOrEraEn: 'Sacred Liturgical Implements',
    });
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fdfbf7] via-[#f7f0e2] to-[#ede0c5] border-amber-300 shadow-amber-950/15'
          : 'bg-gradient-to-b from-[#0c0d13] via-[#14121b] to-[#191410] border-amber-500/30 shadow-black/70'
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-4 border-b ${
          isLight ? 'border-amber-300/80' : 'border-amber-500/20'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}
          >
            <Church className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'الهيكل المقدس وحجاب الأيقونسطاس الحقيقي فائق الدقة (Real Sacred Sanctuary)'
                : 'Sacred Coptic Sanctuary & Masterpiece Iconostasis (Real 4K View)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'صورة واقعية عالية الدقة للمذبح وحجاب الهيكل مع نقاط تفاعلية لشرح الأبعاد الطقسية'
                : 'Photorealistic high-resolution sanctuary view with interactive theological hotspot markers'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenSanctuaryModal}
          className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير الهيكل في شاشة كاملة' : 'Fullscreen 4K Inspector'}</span>
        </button>
      </div>

      {/* Main Interactive Sanctuary Photo with Hotspots */}
      <div className="relative w-full aspect-[16/9] min-h-[380px] md:min-h-[500px] rounded-2xl overflow-hidden mt-4 border border-amber-500/30 shadow-2xl bg-black select-none group">
        <img
          src={sanctuaryPhoto}
          alt="Coptic Orthodox Sanctuary Interior"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.95] contrast-[1.05]"
        />

        {/* Interactive Hotspots */}
        {SANCTUARY_HOTSPOTS.map((spot) => {
          const isSelected = spot.id === activeHotspot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-125 z-20 group/spot"
              style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
              title={isArabic ? spot.titleAr : spot.titleEn}
            >
              {/* Pulsating Ping */}
              <div
                className={`absolute -inset-2 rounded-full animate-ping pointer-events-none ${
                  isSelected ? 'bg-amber-400/80' : 'bg-amber-500/30'
                }`}
              />

              <div
                className={`relative flex items-center justify-center rounded-full border-2 shadow-2xl transition-all ${
                  isSelected
                    ? 'w-7 h-7 bg-amber-500 border-white text-black font-black scale-110 shadow-amber-500/80'
                    : 'w-5 h-5 bg-black/85 border-amber-400 text-amber-300'
                }`}
              >
                <Sparkles className="w-3 h-3" />
              </div>

              {/* Mini Tooltip */}
              <div className="absolute bottom-full start-1/2 -translate-x-1/2 mb-2 hidden group-hover/spot:flex flex-col items-center pointer-events-none z-30">
                <div className="px-2.5 py-1 rounded-lg bg-black/90 border border-amber-400/60 backdrop-blur-md shadow-2xl text-center whitespace-nowrap text-[11px] font-bold text-amber-300">
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Active Hotspot Telemetry Card at Bottom */}
        <div className="absolute bottom-3 start-3 end-3 p-3.5 rounded-2xl bg-black/85 backdrop-blur-md border border-amber-500/40 text-white flex flex-wrap items-center justify-between gap-3 shadow-2xl z-30">
          <div className="space-y-0.5 max-w-3xl">
            <div className="text-xs font-black text-amber-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {SANCTUARY_HOTSPOTS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveHotspot(s)}
                className={`w-6 h-6 rounded-full text-xs font-bold transition-all ${
                  s.id === activeHotspot.id
                    ? 'bg-amber-500 text-black scale-110'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Liturgical Altar Still Life Secondary Gallery Card */}
      <div
        className={`mt-5 p-4 md:p-5 rounded-2xl border transition-all ${
          isLight ? 'bg-white border-amber-200 shadow-md' : 'bg-slate-900/60 border-amber-500/20 shadow-lg'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          <div className="md:col-span-4 relative rounded-xl overflow-hidden border border-amber-500/30 group">
            <img
              src={altarVesselsPhoto}
              alt="Sacred Altar Vessels"
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <button
              onClick={handleOpenAltarVesselsModal}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs cursor-pointer"
            >
              <span className="px-3 py-1.5 rounded-lg bg-amber-500 text-black text-xs font-black flex items-center gap-1.5 shadow-xl">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'تكبير 4K' : 'Zoom 4K'}</span>
              </span>
            </button>
          </div>

          <div className="md:col-span-8 space-y-2">
            <div className={`font-black text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'أواني المذبح الطقسية وأدوات الأسرار السبعة المقدسة'
                : 'Sacred Altar Vessels & Seven Sacraments Implements'}
            </div>
            <p className={`text-xs md:text-sm leading-relaxed ${isLight ? 'text-slate-800 font-medium' : 'text-slate-300'}`}>
              {isArabic
                ? 'تشتمل خدمة الأسرار على الكأس المقدس والصينية (Paten)، واللفائف الحريرية (Veil)، وقارورة زيت الميرون المقدس المدشن بنفحات الطيب والزيوت العطرية، ومبخرة الشوربة الفضية، وأكاليل سر الزيجة، مع الإنجيل الشريف؛ مجسدة تلاقي الجمال الحسي المادي مع النعمة الإلهية غير المنظورة.'
                : 'Includes the golden Chalice, Paten, veil, Holy Chrism cruet, silver censer, nuptial crowns, and Gospel codex, harmonizing sensory beauty with invisible divine grace.'}
            </p>
          </div>
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
