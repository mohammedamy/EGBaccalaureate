import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  BookOpen,
  Vote,
  Shield,
  CheckCircle2,
  XCircle,
  Sliders,
  Scale,
} from 'lucide-react';
import constitution1923Photo from '../../../assets/civics/egypt_constitution_1923.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  constitutionalInsightAr: string;
  constitutionalInsightEn: string;
}

export const CONSTITUTION_1923_HOTSPOTS: Hotspot[] = [
  {
    id: 'royal_folio_committee_thirty',
    x: 48,
    y: 46,
    titleAr: 'لجنة الثلاثين وديباجة دستور ۱۹۲۳',
    titleEn: 'Committee of Thirty & Constitutional Preamble',
    categoryAr: 'الصياغة والتشريع',
    categoryEn: 'Legislative Drafting',
    descAr:
      'تشكلت لجنة الثلاثين برئاسة حسين رشدي باشا وضمت قامات القانون مثل عبد العزيز باشا فهمي لصياغة دستور وطني حديث بعد ثورة 1919، مستلهماً من الدستور البلجيكي لعام 1831.',
    descEn:
      'Formed under Hussein Rushdi Pasha with top legal luminaries like Abdel Aziz Fahmy, tasked with drafting a modern charter post-1919 Revolution, inspired by the 1831 Belgian Constitution.',
    constitutionalInsightAr:
      'أرست المادة 23 المبدأ الديمقراطي الخالد: "جميع السلطات أصلها من الأمة، واستعمالها يكون على الوجه المبين بهذا الدستور"، منتقلة بمصر من حكم الفرد إلى السيادة الشعبية.',
    constitutionalInsightEn:
      'Article 23 codified the eternal democratic principle: "All powers emanate from the Nation, exercised in accordance with this Constitution", transitioning Egypt from dynastic rule to popular sovereignty.',
  },
  {
    id: 'article_1_national_sovereignty',
    x: 55,
    y: 48,
    titleAr: 'المادة الأولى: استقلال مصر وسيادتها',
    titleEn: 'Article 1: Egyptian Independence & Sovereignty',
    categoryAr: 'سيادة الدولة',
    categoryEn: 'State Sovereignty',
    descAr:
      'نصت المادة الأولى صراحة: "مصر دولة ذات سيادة، وهي حرة مستقلة، ملكها لا يجزأ ولا ينزل عن شيء منه، وحكومتها ملكية وراثية وشكلها نيابي".',
    descEn:
      'Article 1 expressly proclaimed: "Egypt is a sovereign, free and independent state, its territory is indivisible and inalienable, its government is a hereditary monarchy with a representative system".',
    constitutionalInsightAr:
      'شكلت المادة الأولى الإعلان الدستوري الأساسي لإنهاء الحماية البريطانية وتثبيت الشخصية الاعتبارية والسيادية للدولة المصرية في القانون الدولي الحديث.',
    constitutionalInsightEn:
      'Article 1 served as the paramount constitutional decree extinguishing British protectorate status and cementing Egypt sovereign legal personhood in international law.',
  },
  {
    id: 'bicameral_parliament_structure',
    x: 88,
    y: 53,
    titleAr: 'النظام النيابي ذو المجلسين ومسؤولية الوزارة',
    titleEn: 'Bicameral Parliament & Ministerial Accountability',
    categoryAr: 'السلطة التشريعية',
    categoryEn: 'Legislative Branch',
    descAr:
      'أسس الدستور برلماناً يتألف من مجلس الشيوخ ومجلس النواب. ويُنتخب النواب بالاقتراع العام السري، بينما الشيوخ نصفهم منتخب ونصفهم معين من الشخصيات العامة.',
    descEn:
      'Established a bicameral parliament consisting of the Senate and the Chamber of Deputies. Deputies were fully elected by universal secret ballot, while Senators were divided between election and appointment.',
    constitutionalInsightAr:
      'كرست المواد 61-65 مبدأ المسؤولية الوزارية التضامنية أمام مجلس النواب؛ حيث تسقط الحكومة فوراً إذا صوتت أغلبية النواب بسحب الثقة منها، مانعة الاستبداد التنفيذي.',
    constitutionalInsightEn:
      'Articles 61-65 enshrined collective cabinet responsibility before the Chamber of Deputies; the ministry fell immediately upon a no-confidence vote by parliamentary majority.',
  },
  {
    id: 'quill_and_ministerial_wax_seal',
    x: 16,
    y: 70,
    titleAr: 'الخاتم الملكي والريشة الذهبية للإصدار',
    titleEn: 'Royal Wax Seal & Gold Promulgation Quill',
    categoryAr: 'المصادقة والتصديق',
    categoryEn: 'Royal Assent & Promulgation',
    descAr:
      'توقيع جلالة الملك فؤاد الأول ورئيس الوزراء يحيى إبراهيم باشا وخاتم الشمع الأحمر لمجلس الوزراء على الأمر الملكي رقم 42 لسنة 1923 بوضع الدستور موضع التنفيذ في 19 أبريل 1923.',
    descEn:
      'Signed by King Fuad I and Prime Minister Yehia Ibrahim Pasha with the red wax seal of the Council of Ministers, executing Royal Decree No. 42 of 1923 on April 19, 1923.',
    constitutionalInsightAr:
      'منحت المادة 34 الملك حق التصديق على القوانين، لكنها وضعت كابحاً برلمانياً: إذا رد الملك قانوناً، يمكن للبرلمان تجاوزه والتصديق عليه نهائياً بأغلبية ثلثي الأعضاء.',
    constitutionalInsightEn:
      'Article 34 granted the monarch statutory veto power, yet provided a robust democratic check: parliament could override the royal veto with a two-thirds supermajority vote.',
  },
  {
    id: 'fundamental_civil_liberties',
    x: 28,
    y: 42,
    titleAr: 'ميثاق الحريات العامة والمساواة الدستورية',
    titleEn: 'Charter of Public Liberties & Constitutional Equality',
    categoryAr: 'الحقوق والحريات',
    categoryEn: 'Civil Rights & Liberties',
    descAr:
      'أفرد الدستور بابه الثاني للحريات والحقوق: المساواة التامة أمام القانون (المادة 3)، وحرمة المساكن (المادة 8)، وحرية الاعتقاد المطلقة (المادة 12)، وحرية الرأي والصحافة (المادة 14).',
    descEn:
      'Devoted Chapter 2 to fundamental rights: absolute equality before the law (Art. 3), inviolability of the home (Art. 8), freedom of belief (Art. 12), and freedom of speech and press (Art. 14).',
    constitutionalInsightAr:
      'المادة 15 حظرت الرقابة على الصحف ومنعت تعطيلها أو إلغاءها بالطريق الإداري، مما جعل الصحافة المصرية في العشرينيات والثلاثينيات الأكثر ازدهاراً وتأثيراً في الشرق الأوسط.',
    constitutionalInsightEn:
      'Article 15 prohibited administrative censorship and outlawed executive suspension of newspapers, creating the golden age of independent Egyptian print journalism.',
  },
];

export const Constitution1923Studio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(CONSTITUTION_1923_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Parliamentary Balance Simulator State
  const TOTAL_DEPUTIES = 214; // Historical 1923 Chamber of Deputies seats count
  const [coalitionSeats, setCoalitionSeats] = useState<number>(130); // Government coalition seats

  const oppositionSeats = TOTAL_DEPUTIES - coalitionSeats;
  const confidenceThreshold = Math.floor(TOTAL_DEPUTIES / 2) + 1; // 108 votes
  const supermajorityThreshold = Math.ceil((TOTAL_DEPUTIES * 2) / 3); // 143 votes

  const hasConfidence = coalitionSeats >= confidenceThreshold;
  const canOverrideVeto = coalitionSeats >= supermajorityThreshold;

  // Arc Coordinates for Vector SVG Semicircular Chamber
  const chamberSeats = useMemo(() => {
    const seats: { x: number; y: number; isCoalition: boolean }[] = [];
    const rows = 4;
    const seatsPerRow = [38, 48, 58, 70]; // Total 214

    let allocatedCoalition = 0;
    let seatIndex = 0;

    for (let r = 0; r < rows; r++) {
      const count = seatsPerRow[r];
      const radius = 100 + r * 28;
      for (let i = 0; i < count; i++) {
        // Angle from 180 to 0 degrees (semicircle)
        const angle = Math.PI - (i / (count - 1)) * Math.PI;
        const x = 200 + radius * Math.cos(angle);
        const y = 200 - radius * Math.sin(angle);

        // Assign left-to-right: coalition first then opposition
        const isCoalition = allocatedCoalition < coalitionSeats;
        if (isCoalition) allocatedCoalition++;

        seats.push({ x, y, isCoalition });
        seatIndex++;
      }
    }
    return seats;
  }, [coalitionSeats]);

  const modalData: HiResImageModalData = {
    imageUrl: constitution1923Photo,
    titleAr: 'دستور المملكة المصرية ۱۹۲۳ الأصلي',
    titleEn: 'Original 1923 Constitution of the Kingdom of Egypt',
    subtitleAr: 'المخطوط الملكي الأخضر المذهب وقرار الأمر الملكي رقم 42 لسنة 1923',
    subtitleEn: 'Gilded Royal Morocco Leather Folio & Royal Decree No. 42 of 1923',
    descriptionAr:
      'النسخة الأرشيفية المعتمدة لدستور 1923 المحفوظة بدار الوثائق القومية بالقاهرة. صاغته لجنة الثلاثين إثر ثورة 1919 ليرسي مبادئ سيادة الأمة، والمحاكمة العادلة، والمسؤولية الوزارية، وفصل السلطات في مصر الحديثة.',
    descriptionEn:
      'Archival master folio preserved in the National Archives in Cairo. Drafted by the Committee of Thirty following the 1919 Revolution, formalizing popular sovereignty, ministerial accountability, and bicameral parliamentary democracy.',
    locationAr: 'دار الوثائق القومية / قصر عابدين، القاهرة، مصر',
    locationEn: 'National Archives of Egypt / Abdin Palace, Cairo, Egypt',
    dateOrEraAr: '19 أبريل 1923 م (عهد الملك فؤاد الأول)',
    dateOrEraEn: 'April 19, 1923 (Reign of King Fuad I)',
  };

  const cardBg = isLight
    ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
    : isContrast
    ? 'bg-black border-yellow-400 text-yellow-300'
    : 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl';

  return (
    <div className="space-y-6">
      {/* 4K Archival Showcase Viewer */}
      <div className={`relative rounded-2xl overflow-hidden border ${cardBg}`}>
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-slate-950">
          <img
            src={constitution1923Photo}
            alt={isArabic ? 'دستور 1923 الأصلي' : '1923 Egyptian Constitution'}
            className="w-full h-full object-cover object-center select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Interactive Scientific & Archival Hotspots */}
          {CONSTITUTION_1923_HOTSPOTS.map((h) => {
            const isSelected = selectedHotspot.id === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setSelectedHotspot(h)}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                aria-label={isArabic ? h.titleAr : h.titleEn}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] ${
                  isSelected
                    ? 'bg-emerald-500 border-white shadow-lg shadow-emerald-500/50 scale-125 z-20'
                    : 'bg-emerald-950/80 border-emerald-400/80 hover:bg-emerald-600 hover:scale-110 z-10'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              </button>
            );
          })}

          {/* Zoom & Inspect 4K Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/70 hover:bg-black/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all cursor-pointer min-h-[44px]"
          >
            <Maximize2 className="w-4 h-4 text-emerald-400" />
            <span>{isArabic ? 'تكبير وفحص الوثيقة 4K' : 'Inspect 4K Folio'}</span>
          </button>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                {isArabic ? 'مخطوطة دار الوثائق القومية بالقاهرة ۱۹۲۳' : 'Cairo National Archives Charter 1923'}
              </span>
              <h2 className="text-lg md:text-xl font-black">
                {isArabic ? 'دستور المملكة المصرية ۱۹۲۳' : 'The 1923 Constitution of Egypt'}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span>{isArabic ? 'لجنة الثلاثين • نظام برلماني نيابي' : 'Committee of Thirty • Parliamentary Monarchy'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Hotspot Card */}
      <div className={`p-4 md:p-5 rounded-2xl border ${cardBg} space-y-3`}>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/50 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-base md:text-lg font-black text-emerald-400">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
          </span>
        </div>
        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
        </p>
        <div className="pt-2 flex items-start gap-2.5 text-xs font-mono text-emerald-300/90 bg-emerald-950/20 p-3 rounded-xl border border-emerald-800/40">
          <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-400">
              {isArabic ? 'الأثر الدستوري والتاريخي: ' : 'Constitutional & Historical Impact: '}
            </strong>
            {isArabic ? selectedHotspot.constitutionalInsightAr : selectedHotspot.constitutionalInsightEn}
          </div>
        </div>
      </div>

      {/* Parliamentary Chamber Balance Simulator */}
      <div className={`p-5 rounded-2xl border ${cardBg} space-y-5`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/60 pb-3">
          <div className="flex items-center gap-2.5">
            <Vote className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm md:text-base font-bold text-slate-100">
              {isArabic
                ? 'محاكي التوازن البرلماني والمسؤولية الوزارية لمجلس نواب 1923'
                : '1923 Chamber of Deputies Parliamentary Confidence & Veto Override Engine'}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">{isArabic ? 'إجمالي المقاعد:' : 'Total Seats:'} 214</span>
            <span className="px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 font-bold">
              {isArabic ? 'الأغلبية: 108' : 'Majority: 108'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Vector SVG Semicircle Chamber Layout */}
          <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
            <svg viewBox="0 0 400 220" className="w-full h-auto overflow-visible select-none">
              {/* Podium Desk */}
              <path d="M 160 210 Q 200 190 240 210 Z" fill="#059669" opacity="0.8" />
              <text x="200" y="206" fill="#ecfdf5" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                {isArabic ? 'منصة رئيس المجلس' : 'Speaker Podium'}
              </text>

              {/* 214 Parliamentary Seats */}
              {chamberSeats.map((s, idx) => (
                <circle
                  key={idx}
                  cx={s.x}
                  cy={s.y}
                  r="3.2"
                  fill={s.isCoalition ? '#10b981' : '#f43f5e'}
                  className="transition-colors duration-200"
                >
                  <title>
                    {s.isCoalition
                      ? isArabic
                        ? 'مقعد ائتلاف الأغلبية الحكومية'
                        : 'Government Majority Seat'
                      : isArabic
                      ? 'مقعد المعارضة البرلمانية'
                      : 'Opposition Deputy Seat'}
                  </title>
                </circle>
              ))}
            </svg>

            {/* Chamber Legend */}
            <div className="flex items-center justify-center gap-6 mt-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-emerald-300">
                  {isArabic ? `الأغلبية الحكومية: ${coalitionSeats} نائباً` : `Government Majority: ${coalitionSeats}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-rose-300">
                  {isArabic ? `المعارضة: ${oppositionSeats} نائباً` : `Opposition: ${oppositionSeats}`}
                </span>
              </div>
            </div>
          </div>

          {/* Controls & Constitutional Outcomes */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  {isArabic ? 'مقاعد الائتلاف الحكومي في البرلمان' : 'Government Coalition Seats'}
                </span>
                <span className="font-mono text-emerald-400 font-bold">{coalitionSeats} / 214</span>
              </label>
              <input
                type="range"
                min="40"
                max="214"
                step="1"
                value={coalitionSeats}
                onChange={(e) => setCoalitionSeats(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Scenario 1: Vote of Confidence (المسؤولية الوزارية) */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">
                  {isArabic ? 'التصويت على الثقة بالوزارة (م 61-65)' : 'Cabinet Confidence Vote (Art. 61-65)'}
                </span>
                {hasConfidence ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isArabic ? 'الوزارة مستقرة' : 'Cabinet Sustained'}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-600">
                    <XCircle className="w-3.5 h-3.5" />
                    {isArabic ? 'سقوط الوزارة دستورياً' : 'Cabinet Resignation'}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isArabic
                  ? `يتطلب بقاء الوزارة 108 أصوات على الأقل. الحاصل الآن: ${coalitionSeats} صوتاً (${((coalitionSeats / TOTAL_DEPUTIES) * 100).toFixed(1)}%).`
                  : `Requires at least 108 votes. Current: ${coalitionSeats} votes (${((coalitionSeats / TOTAL_DEPUTIES) * 100).toFixed(1)}%).`}
              </p>
            </div>

            {/* Scenario 2: Royal Veto Challenge (الفيتو الملكي والثلثين) */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">
                  {isArabic ? 'كسر الفيتو الملكي بأغلبية الثلثين (م 34)' : 'Royal Veto Override (Art. 34 Supermajority)'}
                </span>
                {canOverrideVeto ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isArabic ? 'يُصدق القانون رغماً عن الفيتو' : 'Veto Overridden'}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-600">
                    <Shield className="w-3.5 h-3.5" />
                    {isArabic ? 'يسري الفيتو الملكي' : 'Royal Veto Stands'}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isArabic
                  ? `يتطلب كسر اعتراض الملك وإصدار القانون نهائياً 143 نائباً (ثلثي المجلس). الحاصل الآن: ${coalitionSeats} صوتاً.`
                  : `Requires 143 deputies (2/3 supermajority) to enact the law despite royal objection. Current: ${coalitionSeats} votes.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4K Archival Fullscreen Inspection Modal */}
      <HiResImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
