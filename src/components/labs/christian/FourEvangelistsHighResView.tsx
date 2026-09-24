import React, { useState } from 'react';
import { Maximize2, Scroll, Quote, Info } from 'lucide-react';
import fourEvangelistsPhoto from '../../../assets/christianLab/four_evangelists_icons.jpg';
import { HiResImageModal, type HiResImageModalData } from './HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

interface EvangelistHotspot {
  id: string;
  xPct: number;
  yPct: number;
  nameAr: string;
  nameEn: string;
  symbolAr: string;
  symbolEn: string;
  icon: string;
  propheticSourceAr: string;
  propheticSourceEn: string;
  theologyAr: string;
  theologyEn: string;
  keyVerseAr: string;
  keyVerseEn: string;
  audienceAr: string;
  audienceEn: string;
}

const EVANGELIST_HOTSPOTS: EvangelistHotspot[] = [
  {
    id: 'matthew',
    xPct: 18.0,
    yPct: 48.0,
    nameAr: 'القديس متى الإنجيلي (لاوي)',
    nameEn: 'St. Matthew the Evangelist (Levi)',
    symbolAr: 'الإنسان المجنح / الملاك (The Winged Man)',
    symbolEn: 'The Winged Man / Angel (Incarnation)',
    icon: '👤',
    propheticSourceAr: 'رؤيا حزقيال (1: 10) ورؤيا يوحنا (4: 7) - شبه إنسان',
    propheticSourceEn: 'Ezekiel 1:10 & Revelation 4:7 - "face of a man"',
    theologyAr:
      'يرمز للتجسد الإلهي وظهور المسيح كإنسان متجسد من نسل داود؛ يبدأ إنجيله بسلسلة نسب يسوع المسيح ابن داود ابن إبراهيم، مبرهناً تحقيق نبوءات العهد القديم والملكوت المسياني.',
    theologyEn:
      'Symbolizes the Divine Incarnation; opens with the human genealogy of Jesus Christ, son of David, son of Abraham, fulfilling Old Testament Messianic prophecies of the King.',
    keyVerseAr: '«كِتَابُ مِيلاَدِ يَسُوعَ الْمَسِيحِ ابْنِ دَاوُدَ ابْنِ إِبْراهِيمَ» (متى 1: 1)',
    keyVerseEn: '"The book of the genealogy of Jesus Christ, the Son of David, the Son of Abraham" (Matt 1:1)',
    audienceAr: 'مكتوب لليهود والمتنصرين لإثبات أن يسوع هو المسيا الموعود',
    audienceEn: 'Addressed to Jewish Christians demonstrating Jesus as the Promised Messiah',
  },
  {
    id: 'mark',
    xPct: 39.5,
    yPct: 48.0,
    nameAr: 'القديس مرقس الرسول (كاروز ديار مصر)',
    nameEn: 'St. Mark the Apostle (Evangelist of Egypt)',
    symbolAr: 'الأسد المجنح (The Winged Lion)',
    symbolEn: 'The Winged Lion (Sovereign Power & Kingship)',
    icon: '🦁',
    propheticSourceAr: 'رؤيا حزقيال (1: 10) - شبه أسد عن اليمين',
    propheticSourceEn: 'Ezekiel 1:10 & Revelation 4:7 - "face of a lion"',
    theologyAr:
      'يرمز للسلطان الملوكي وقوة القيامة الظافرة وصوت الزارع والمنادي في البرية؛ وهو أقدم الأناجيل تدويناً، وأسس الكنيسة القبطية الأرثوذكسية والكرسي المرقسي السكندري العريق.',
    theologyEn:
      'Symbolizes Christ\'s royal authority, resurrection triumph, and the "voice crying in the wilderness"; earliest Gospel and founder of the Coptic See of Alexandria.',
    keyVerseAr: '«صَوْتُ صَارِخٍ فِي الْبَرِّيَّةِ: أَعِدُّوا طَرِيقَ الرَّبِّ، اصْنَعُوا سُبُلَهُ مُسْتَقِيمَةً» (مرقس 1: 3)',
    keyVerseEn: '"The voice of one crying in the wilderness: Prepare the way of the Lord, make His paths straight" (Mark 1:3)',
    audienceAr: 'مكتوب للرومان والأمم بأسلوب عملي سريع مبرزاً قوة المسيح صانع المعجزات',
    audienceEn: 'Written for the Roman mindset emphasizing dynamic action and divine authority',
  },
  {
    id: 'luke',
    xPct: 60.5,
    yPct: 48.0,
    nameAr: 'القديس لوقا الطبيب والرسام',
    nameEn: 'St. Luke the Physician & Evangelist',
    symbolAr: 'الثور المجنح (The Winged Ox)',
    symbolEn: 'The Winged Ox (Sacrifice & Priesthood)',
    icon: '🐂',
    propheticSourceAr: 'رؤيا حزقيال (1: 10) - شبه ثور عن الشمال',
    propheticSourceEn: 'Ezekiel 1:10 & Revelation 4:7 - "face of an ox"',
    theologyAr:
      'يرمز للذبيحة الكفارية والكهنوت والرحمة الشاملة لمخلص العالم؛ يبدأ بالهيكل وبخور زكريا، ويركز على الصلاة والروح القدس والسامري الصالح والابن الضال وقبول الخطاة.',
    theologyEn:
      'Symbolizes sacrificial atonement, priesthood, and universal compassion; opens in the Temple with incense, spotlighting prayer, the Holy Spirit, outcasts and the lost.',
    keyVerseAr: '«لأَنَّ ابْنَ الإِنْسَانِ قَدْ جَاءَ لِكَيْ يَطْلُبَ وَيُخَلِّصَ مَا قَدْ هَلَكَ» (لوقا 19: 10)',
    keyVerseEn: '"For the Son of Man has come to seek and to save that which was lost" (Luke 19:10)',
    audienceAr: 'مكتوب لليونانيين والأمم وذوي الثقافة الإنسانية مبرزاً كمال إنسانية المسيح ورحمته',
    audienceEn: 'Addressed to Hellenistic Gentiles highlighting the universal humanitarian scope of salvation',
  },
  {
    id: 'john',
    xPct: 81.5,
    yPct: 48.0,
    nameAr: 'القديس يوحنا الحبيب (اللاهوتي)',
    nameEn: 'St. John the Beloved (The Theologian)',
    symbolAr: 'النسر المحلق (The Soaring Eagle)',
    symbolEn: 'The Soaring Eagle (High Divinity & Logos)',
    icon: '🦅',
    propheticSourceAr: 'رؤيا حزقيال (1: 10) - شبه نسر محلق في الأعالي',
    propheticSourceEn: 'Ezekiel 1:10 & Revelation 4:7 - "like a flying eagle"',
    theologyAr:
      'يرمز للسمو اللاهوتي الفائق والتحليق في التأملات الإلهية العميقة؛ يبدأ بالكلمة الأزلي (اللوغوس) «في البدء كان الكلمة»، ويوثق الخطب اللاهوتية الكبرى وآيات المسيح الفائقة.',
    theologyEn:
      'Symbolizes high theological contemplation soaring toward celestial mysteries; opens with the eternal Logos: "In the beginning was the Word, and the Word was God."',
    keyVerseAr: '«فِي الْبَدْءِ كَانَ الْكَلِمَةُ، وَالْكَلِمَةُ كَانَ عِنْدَ اللهِ، وَكَانَ الْكَلِمَةُ اللهَ» (يوحنا 1: 1)',
    keyVerseEn: '"In the beginning was the Word, and the Word was with God, and the Word was God" (John 1:1)',
    audienceAr: 'مكتوب للكنيسة الجامعة الشاملة لتثبيت الإيمان بلاهوت المسيح ابن الله الأزلي',
    audienceEn: 'Composed for the universal Church confirming faith in the eternal divinity of Jesus Christ',
  },
];

export const FourEvangelistsHighResView: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeEvangelist, setActiveEvangelist] = useState<EvangelistHotspot>(EVANGELIST_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const handleOpenModal = () => {
    setModalData({
      imageUrl: fourEvangelistsPhoto,
      titleAr: 'أيقونة الإنجيليين الأربعة ورموزهم اللاهوتية (التترابورف) المذهبة',
      titleEn: 'Four Evangelists & Tetramorph Golden Icon Quadriptych',
      subtitleAr: 'أيقونة أثرية مذهبة بالقراطيس الذهبية البيزنطية والقبطية',
      subtitleEn: 'Masterpiece Gold-Leaf Byzantine & Coptic Quadriptych',
      descriptionAr:
        'أيقونة كنسية رفيعة المستوى تمثل الإنجيليين الأربعة في أربعة أروقة مقوسة مذهبة: القديس متى الإنجيلي وملاكه المجنح (رمز التجسد البشري)، القديس مرقس الرسول كاروز ديار مصر وأسده المجنح (رمز القوة الإلهية وسلطان المسيح)، القديس لوقا الطبيب وعجله المجنح (رمز الذبيحة والفداء)، والقديس يوحنا الحبيب ونسره المحلق (رمز اللاهوت السامي والتأمل الإلهي).',
      descriptionEn:
        'Exquisite gold-leaf icon depicting the Four Evangelists: St. Matthew with the Winged Angel (Incarnation), St. Mark with the Winged Lion (Sovereign Authority & Apostle of Alexandria), St. Luke with the Winged Ox (Sacrifice & Atonement), and St. John with the Soaring Eagle (High Theology & Contemplation).',
      locationAr: 'المتحف القبطي والمكتبات البطريركية الكبرى',
      locationEn: 'Coptic Museum & Patriarchal Archives',
      dateOrEraAr: 'القرن الخامس - السابع الميلادي (تراث بيزنطي قبطي أصيل)',
      dateOrEraEn: '5th–7th Century AD Classical Heritage',
    });
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fdfbf7] via-[#f7f1e4] to-[#ede2c8] border-amber-300 shadow-amber-950/15'
          : 'bg-gradient-to-b from-[#0d0c14] via-[#15121e] to-[#1a1410] border-amber-500/30 shadow-black/70'
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
            <Scroll className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'أيقونة الإنجيليين الأربعة والتترامورف المذهبة فائقة الدقة (Four Evangelists 4K)'
                : 'The Four Evangelists & Sacred Tetramorph Golden Icon (4K View)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'تصوير أيقونوغرافي أصيل بالذهب والتمبرا يجمع متى، مرقس، لوقا، ويوحنا مع كائنات حزقيال الأربعة'
                : 'Traditional tempera & gold leaf icon portraying the Four Evangelists with Ezekiel\'s cherubic tetramorph'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenModal}
          className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير الأيقونة بشاشة كاملة' : 'Fullscreen 4K Inspector'}</span>
        </button>
      </div>

      {/* Main Image with Interactive Hotspots */}
      <div className="relative w-full aspect-[16/9] min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden mt-4 border border-amber-500/30 shadow-2xl bg-black select-none group">
        <img
          src={fourEvangelistsPhoto}
          alt="Four Evangelists Golden Icon"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.05]"
        />

        {/* Interactive Hotspot Markers for the 4 Evangelists */}
        {EVANGELIST_HOTSPOTS.map((ev) => {
          const isActive = ev.id === activeEvangelist.id;
          return (
            <button
              key={ev.id}
              onClick={() => setActiveEvangelist(ev)}
              style={{ left: `${ev.xPct}%`, top: `${ev.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/btn cursor-pointer focus:outline-none"
              title={isArabic ? ev.nameAr : ev.nameEn}
            >
              <div className="relative flex items-center justify-center">
                {/* Glowing Pulse Rings */}
                <span
                  className={`absolute w-9 h-9 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-amber-400' : 'bg-amber-500/50'
                  }`}
                />
                <span
                  className={`absolute w-7 h-7 rounded-full border-2 ${
                    isActive
                      ? 'border-amber-300 bg-amber-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-amber-400'
                  }`}
                />
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-amber-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-amber-300'
                  }`}
                >
                  <span className="text-[10px] leading-none">{ev.icon}</span>
                </div>

                {/* Floating Hotspot Tag */}
                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-amber-300 border-amber-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? ev.nameAr.split(' ')[0] + ' ' + (ev.nameAr.split(' ')[1] || '') : ev.nameEn.split(' ')[0]}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Badges */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-amber-300">
            <span>{isArabic ? 'متى: الملاك (التجسد)' : 'Matthew: Angel (Incarnation)'}</span>
            <span>•</span>
            <span>{isArabic ? 'مرقس: الأسد (السلطان)' : 'Mark: Lion (Sovereignty)'}</span>
            <span>•</span>
            <span>{isArabic ? 'لوقا: الثور (الفداء)' : 'Luke: Ox (Sacrifice)'}</span>
            <span>•</span>
            <span>{isArabic ? 'يوحنا: النسر (اللاهوت)' : 'John: Eagle (Divinity)'}</span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 font-bold">
            BYZANTINE-COPTIC TETRAMORPH
          </span>
        </div>
      </div>

      {/* Active Evangelist Theological Analysis Drawer */}
      <div
        className={`mt-4 p-4 md:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-gradient-to-r from-amber-50 via-white to-amber-100/60 border-amber-300 text-slate-900 shadow-sm'
            : 'bg-gradient-to-r from-[#14121b] via-[#1a1410] to-[#120f18] border-amber-500/30 text-amber-100 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border text-2xl shadow-md ${
                isLight
                  ? 'bg-amber-200 border-amber-400 text-amber-950'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
              }`}
            >
              {activeEvangelist.icon}
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  {isArabic ? activeEvangelist.symbolAr : activeEvangelist.symbolEn}
                </span>
                <h4 className={`text-base font-black ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
                  {isArabic ? activeEvangelist.nameAr : activeEvangelist.nameEn}
                </h4>
              </div>

              <p className={`text-xs md:text-sm leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {isArabic ? activeEvangelist.theologyAr : activeEvangelist.theologyEn}
              </p>

              {/* Biblical Opening Key Verse Quote */}
              <div
                className={`p-3 rounded-xl border text-xs font-semibold flex items-start gap-2.5 ${
                  isLight
                    ? 'bg-amber-100/70 border-amber-300 text-amber-950'
                    : 'bg-black/50 border-amber-500/30 text-amber-200'
                }`}
              >
                <Quote className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
                <div>
                  <div className="italic font-bold">{isArabic ? activeEvangelist.keyVerseAr : activeEvangelist.keyVerseEn}</div>
                  <div className="text-[10px] text-amber-600 dark:text-amber-400/80 font-medium mt-1">
                    {isArabic ? activeEvangelist.propheticSourceAr : activeEvangelist.propheticSourceEn}
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5 pt-1">
                <Info className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>
                  <strong>{isArabic ? 'الجمهور المستهدف والغاية: ' : 'Audience & Scope: '}</strong>
                  {isArabic ? activeEvangelist.audienceAr : activeEvangelist.audienceEn}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Selector Buttons */}
          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-[11px] font-bold text-amber-400">
              {isArabic ? 'اختر الإنجيلي للفحص:' : 'Select Evangelist:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {EVANGELIST_HOTSPOTS.map((ev) => (
                <button
                  key={ev.id}
                  onClick={() => setActiveEvangelist(ev)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                    ev.id === activeEvangelist.id
                      ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30'
                      : isLight
                      ? 'bg-amber-100 text-slate-800 hover:bg-amber-200'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{ev.icon}</span>
                  <span>{isArabic ? ev.nameAr.split(' ')[1] || ev.nameAr : ev.nameEn.split(' ')[1] || ev.nameEn}</span>
                </button>
              ))}
            </div>
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

