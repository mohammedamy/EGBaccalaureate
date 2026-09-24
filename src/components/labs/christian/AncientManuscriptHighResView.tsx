import React, { useState } from 'react';
import { Maximize2, BookOpen, Sparkles, Feather, Layers, Info } from 'lucide-react';
import manuscriptPhoto from '../../../assets/christianLab/ancient_coptic_manuscript.jpg';
import { HiResImageModal, type HiResImageModalData } from './HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

interface ManuscriptHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  technicalDetailsAr: string;
  technicalDetailsEn: string;
}

const MANUSCRIPT_HOTSPOTS: ManuscriptHotspot[] = [
  {
    id: 'illuminated_initial',
    xPct: 22.0,
    yPct: 26.0,
    titleAr: 'الحرف الاستهلالي المذهب (Illuminated Drop Cap)',
    titleEn: 'Illuminated Initial Gold Drop Cap',
    categoryAr: 'تذهيب وزخرفة أيقونية',
    categoryEn: 'Gilding & Initial Ornamentation',
    descAr:
      'الحرف الاستهلالي البديع الذي يفتتح النص الإنجيلي؛ رُسم بماء الذهب ورقائق الذهب العيار 24 محاطاً بحليات مضفورة وزخارف صلبان قبطية دقيقة تعكس تقديس الكلمة الإلهية وفن نساخة المخطوطات الإسكندرية.',
    descEn:
      'Monumental drop-cap letter opening the gospel pericopes, gilded with 24-karat gold leaf and encircled by intricate interlaced Coptic ribbon crosses.',
    technicalDetailsAr: 'تقنية التذهيب بالغراء الحيواني (Gilding Bole) وصقل العقيق الطبيعي مع حبر الزنجفر المعدني.',
    technicalDetailsEn: 'Animal-size mordant gilding burnished with natural agate stones and vermilion mineral borders.',
  },
  {
    id: 'cinnabar_rubrics',
    xPct: 56.0,
    yPct: 18.0,
    titleAr: 'عناوين الزنجفر القرمزي (Cinnabar Rubrics & Titles)',
    titleEn: 'Cinnabar Red Rubrics & Chapter Headings',
    categoryAr: 'أحبار كنسية ومعادن طبيعية',
    categoryEn: 'Ecclesiastical Inks & Minerals',
    descAr:
      'عناوين الأصحاحات والمردات الليتورجية المكتوبة بحبر الزنجفر القرمزي المستخرج من كبريتيد الزئبق الطبيعي؛ تميز علامات التوقف اللحني والتناوب بين الخورسين البحري والقبلي.',
    descEn:
      'Liturgical titles and choir prompts written in vibrant cinnabar red ink derived from natural mercuric sulfide, designating antiphonal choral chants.',
    technicalDetailsAr: 'حبر معدني ثابت لا يبهت عبر القرون، محضر من مسحوق الزنجفر مع الصمغ العربي.',
    technicalDetailsEn: 'Highly stable inorganic pigment prepared from purified cinnabar ore emulsified in Acacia gum.',
  },
  {
    id: 'uncial_calligraphy',
    xPct: 50.0,
    yPct: 50.0,
    titleAr: 'الخط الأونسيال الباكر (Early Coptic Uncial Script)',
    titleEn: 'Early Coptic Uncial Book-Hand Calligraphy',
    categoryAr: 'باليوغرافيا وفقه الخطوط القديمة',
    categoryEn: 'Palaeography & Ancient Epigraphy',
    descAr:
      'خط الكتب الرسمي ذو الحروف الكبيرة المنفصلة (Uncial/Majuscule)؛ يتميز بالهيبة والوضوح، ويجمع 25 حرفاً يونانياً بالإضافة إلى 7 أحرف مشتقة من الخط الديموطيقي المصري القديم للتعبير عن أصوات اللسان المصري الأصيل.',
    descEn:
      'Formal book-hand majuscule script combining 25 Greek-derived letters with 7 Demotic Egyptian glyphs representing native Egyptian phonemes.',
    technicalDetailsAr: 'كُتب بقلم البوص النيلي (Calamus) المشطوف بزاوية 45 درجة وحبر السناج الكربوني العضوي المقاوم للرطوبة.',
    technicalDetailsEn: 'Penned using split Nile reed pens (calamus) angled at 45° with indelible carbon lampblack gall ink.',
  },
  {
    id: 'papyrus_fibers',
    xPct: 78.0,
    yPct: 70.0,
    titleAr: 'شبكة ألياف البردي النيلي المتعامدة (Papyrus Fiber Grid)',
    titleEn: 'Crossed Nile Papyrus Fibers (Recto/Verso Grid)',
    categoryAr: 'علوم المواد وعلم الآثار القديمة',
    categoryEn: 'Material Science & Archaeometry',
    descAr:
      'نسيج الورق البردي المصري الأصيل؛ شُرائح نخاع ساق نبات البردي (Cyperus papyrus) مقطوعة طولياً ومرصوصة في طبقتين متعامدتين (أفقية وعمودية)، مدمجة بالعصير النباتي اللزج ومصقولة بمحار البحر الأبيض.',
    descEn:
      'Authentic Egyptian papyrus substrate composed of longitudinal strips of Cyperus papyrus pith aligned in perpendicular layers, bonded by natural sap.',
    technicalDetailsAr: 'الوجه الأمامي (Recto) بالألياف الأفقية لتسهيل مسار القلم، والوجه الخلفي (Verso) بالألياف الرأسية.',
    technicalDetailsEn: 'Recto side with horizontal fibers facilitating script stroke flow; Verso side with vertical stabilizing fibers.',
  },
  {
    id: 'margin_knotwork',
    xPct: 20.0,
    yPct: 78.0,
    titleAr: 'حليات الهوامش وصلبان التسابيح (Marginal Doxology Knotwork)',
    titleEn: 'Marginal Doxology Knotwork & Alleluia Crosses',
    categoryAr: 'زخرفة الهوامش وفن النساخة',
    categoryEn: 'Marginalia & Manuscript Illumination',
    descAr:
      'صلبان وحليات هندسية بالأحبار الملونة على هوامش الصفحة تُحدد مواضع مردات «الليلويا» وتسابيح السهرانة؛ تحمي أطراف النص وتمنح الصفحة توازناً بصرياً وتأملاً روحياً.',
    descEn:
      'Decorative marginal cross motifs and knotwork anchors indicating Alleluia chants and vigil responses, providing visual aesthetic balance.',
    technicalDetailsAr: 'زخارف هندسية مستوحاة من نسيج القباطي المصري وعمارة الأديرة الباكرة بوادي النطرون والصعيد.',
    technicalDetailsEn: 'Geometric knotwork echoing ancient Coptic tapestry (Qubati) and early monastic architectural motifs.',
  },
];

const DEMOTIC_LETTERS = [
  { coptic: 'Ϣ', nameAr: 'شاي (Shai)', nameEn: 'Shai', sound: '/ʃ/ (ش)', demoticOrigin: '𓆷 (حقل بردي)' },
  { coptic: 'Ϥ', nameAr: 'فاي (Fai)', nameEn: 'Fai', sound: '/f/ (ف)', demoticOrigin: '𓆑 (حية قرناء)' },
  { coptic: 'Ϧ', nameAr: 'خاي (Khai)', nameEn: 'Khai', sound: '/x/ (خ)', demoticOrigin: '𓐍 (مشيمة/جذر)' },
  { coptic: 'Ϩ', nameAr: 'هوري (Hori)', nameEn: 'Hori', sound: '/h/ (هـ)', demoticOrigin: '𓉔 (فناء منزل)' },
  { coptic: 'Ϫ', nameAr: 'جانجا (Janja)', nameEn: 'Janja', sound: '/dʒ/ (جـ معطشة)', demoticOrigin: '𓆓 (ثعبان)' },
  { coptic: 'Ϭ', nameAr: 'تشيما (Chima)', nameEn: 'Chima', sound: '/tʃ/ (تش)', demoticOrigin: '𓈎 (قصبة/سنبلة)' },
  { coptic: 'Ϯ', nameAr: 'تي (Ti)', nameEn: 'Ti', sound: '/ti/ (تي)', demoticOrigin: '𓏙 (يد تعطي رغيف)' },
];

export const AncientManuscriptHighResView: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<ManuscriptHotspot>(MANUSCRIPT_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const handleOpenModal = () => {
    setModalData({
      imageUrl: manuscriptPhoto,
      titleAr: 'مخطوطة قبطية وإنجيلية أثرية على البردي والرق فائق الدقة',
      titleEn: 'Ancient Coptic Papyrus Gospel Codex (High-Resolution View)',
      subtitleAr: 'خط بحيري وصعيدي أونسيال أصيل مع حليات وتذهيب بالحبر الشنجرفي',
      subtitleEn: 'Bohairic & Sahidic Uncial Calligraphy with Gold Leaf Illuminations',
      descriptionAr:
        'مخطوطة بردي نادرة معروضة بمتحف المخطوطات الكنسية تبرز فن الخط القبطي القديم (Bohairic / Sahidic Uncial) بالحبر الكربوني الأسود وحبر الزنجفر الأحمر والأوراق المذهبة. تبدأ الصفحة بالحرف المذهب الكبير (Illuminated Initial) المحاط بزخارف صلبان الأرابيسك القبطية المتشابكة، وتوثق نصوص التسبيح والتسابيح الكنسية القديمة «الليلويا».',
      descriptionEn:
        'Museum-grade archival photography of an ancient Coptic codex on aged papyrus, featuring Bohairic and Sahidic uncial calligraphy in cinnabar red and carbon ink with elaborate gold-leaf illuminated drop caps and intricate margin knotwork.',
      locationAr: 'متحف المخطوطات القبطية بالبطريركية القديمة',
      locationEn: 'Patriarchal Coptic Manuscript Museum',
      dateOrEraAr: 'القرن الرابع - الخامس الميلادي (العصر الذهبي للمخطوطات)',
      dateOrEraEn: '4th–5th Century AD (Golden Era of Coptic Manuscripts)',
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
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'مخطوطة الأناجيل والبرديات القبطية المذهبة (Ancient Coptic Codex 4K)'
                : 'Ancient Coptic Gospel Codex & Illuminated Papyrus (4K Macro View)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'وثيقة مخطوطة أصيلة توضح الخط القبطي الصعيدي والبحيري الباكر وتذهيب الحروف الاستهلالية'
                : 'Authentic papyrus leaf displaying uncial script, cinnabar ink rubrics & gold leaf illuminations'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenModal}
          className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير وفحص ألياف البردي' : 'Inspect 4K Papyrus'}</span>
        </button>
      </div>

      {/* Main Image Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[16/9] min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden mt-4 border border-amber-500/30 shadow-2xl bg-black select-none group">
        <img
          src={manuscriptPhoto}
          alt="Ancient Coptic Papyrus Codex"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.08]"
        />

        {/* Interactive Hotspot Markers */}
        {MANUSCRIPT_HOTSPOTS.map((spot) => {
          const isActive = spot.id === activeHotspot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/btn cursor-pointer focus:outline-none"
              title={isArabic ? spot.titleAr : spot.titleEn}
            >
              <div className="relative flex items-center justify-center">
                {/* Glowing Pulse Rings */}
                <span
                  className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-amber-400' : 'bg-amber-500/50'
                  }`}
                />
                <span
                  className={`absolute w-6 h-6 rounded-full border-2 ${
                    isActive
                      ? 'border-amber-300 bg-amber-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-amber-400'
                  }`}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-amber-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-amber-300'
                  }`}
                >
                  <Sparkles className="w-2 h-2 text-black" />
                </div>

                {/* Hotspot Floating Label */}
                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-amber-300 border-amber-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Bottom Metadata Bar */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-amber-300">
            <span>{isArabic ? '🔤 الخط: أونسيال قبطي يوناني' : '🔤 Script: Greek-Coptic Uncial'}</span>
            <span>•</span>
            <span>{isArabic ? '🎨 الحبر: زنجفر أحمر وكربون أسود' : '🎨 Ink: Cinnabar Red & Carbon Black'}</span>
            <span>•</span>
            <span>{isArabic ? '📜 الخامة: بردي مصري ورق جلد عتيق' : '📜 Support: Egyptian Papyrus & Aged Vellum'}</span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 font-bold">
            ARCHIVAL-CODEX-RESOLUTION
          </span>
        </div>
      </div>

      {/* Active Hotspot Deep Inspection Drawer */}
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
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-md ${
                isLight
                  ? 'bg-amber-200 border-amber-400 text-amber-950'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
              }`}
            >
              <Feather className="w-5 h-5" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
                <h4 className={`text-base font-black ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h4>
              </div>

              <p className={`text-xs md:text-sm mt-1.5 leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
              </p>

              <div
                className={`mt-3 p-2.5 rounded-xl border text-[11px] font-medium flex items-center gap-2 ${
                  isLight
                    ? 'bg-amber-100/70 border-amber-300 text-amber-950'
                    : 'bg-black/40 border-amber-500/30 text-amber-200/90'
                }`}
              >
                <Info className="w-4 h-4 shrink-0 text-amber-500" />
                <span>
                  <strong>{isArabic ? 'التحليل الأثري والتقني: ' : 'Archaeometrical Data: '}</strong>
                  {isArabic ? activeHotspot.technicalDetailsAr : activeHotspot.technicalDetailsEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-[11px] font-bold text-amber-400">
              {isArabic ? 'نقاط الفحص والتدقيق:' : 'Codex Focus Points:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {MANUSCRIPT_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    s.id === activeHotspot.id
                      ? 'bg-amber-500 text-black shadow-md'
                      : isLight
                      ? 'bg-amber-100 text-slate-800 hover:bg-amber-200'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {isArabic ? s.titleAr.split(' ')[0] + ' ' + (s.titleAr.split(' ')[1] || '') : s.titleEn.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The 7 Demotic Letters of the Coptic Alphabet (Curriculum Core) */}
      <div
        className={`mt-4 p-4 rounded-2xl border ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-white/80 border-amber-300/80 text-slate-900 shadow-sm'
            : 'bg-slate-950/60 border-amber-500/20 text-slate-200'
        }`}
      >
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-amber-500/20">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-500" />
            <h5 className="text-xs md:text-sm font-black text-amber-400">
              {isArabic
                ? 'الحروف السبعة الديموطيقية في الأبجدية القبطية (الأصل المصري القديم)'
                : 'The 7 Demotic Glyphs Preserved in Coptic from Ancient Egyptian'}
            </h5>
          </div>
          <span className="text-[10px] font-mono text-amber-500 font-bold px-2 py-0.5 rounded bg-amber-500/10">
            DEMOTIC-COPTIC-HERITAGE
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {DEMOTIC_LETTERS.map((item) => (
            <div
              key={item.coptic}
              className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                isLight
                  ? 'bg-amber-50/80 border-amber-200 hover:border-amber-400'
                  : 'bg-black/40 border-amber-500/20 hover:border-amber-500/50'
              }`}
            >
              <span className="text-2xl font-serif font-black text-amber-400">{item.coptic}</span>
              <span className="text-xs font-black mt-1 text-amber-300">{isArabic ? item.nameAr : item.nameEn}</span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">{item.sound}</span>
              <span className="text-[9px] text-amber-500/80 mt-1 font-medium">{item.demoticOrigin}</span>
            </div>
          ))}
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

