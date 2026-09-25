import React, { useState } from 'react';
import {
  Scale,
  Maximize2,
  Sparkles,
  Info,
  MapPin,
  Compass,
  CheckCircle2,
  RotateCcw,
  Shield,
  Clock,
  ChevronRight,
  FileText,
  Award,
} from 'lucide-react';
import tabaPhoto from '../../../assets/geography/taba_satellite_map.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface TabaHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  legalEvidenceAr: string;
  legalEvidenceEn: string;
}

export const TABA_HOTSPOTS: TabaHotspot[] = [
  {
    id: 'pillar_91',
    xPct: 52.0,
    yPct: 35.0,
    titleAr: 'علامة الحدود رقم 91 على رأس طابا (Border Pillar 91)',
    titleEn: 'Border Pillar 91 on Ras Taba Granitic Cliff',
    categoryAr: 'العلامة الحدودية الفاصلة والموقع الأصلي المثبت',
    categoryEn: 'Primary In Situ Boundary Marker',
    descAr:
      'تقع العلامة 91 الأصلية على الحافة الصخرية الشاهقة لجبل رأس طابا المشرف مباشرة على مياه خليج العقبة؛ حاول الجانب الإسرائيلي إزاحتها مسافة كيلومتر تقريباً نحو الجنوب لضم ساحل فندق سونستا طابا وشاطئها الاستراتيجي، ولكن الدلائل الجيولوجية وبقايا القاعدة الحجرية المثبتة بالإسمنت عام 1906 أكدت صحة الموقف المصري تماماً.',
    descEn:
      'The authentic 1906 boundary pillar 91 stood firmly upon the sheer granite crest of Ras Taba overlooking the Gulf of Aqaba. Israel disputed its location by attempting to displace it ~1 km southward, but surviving in situ masonry bases definitively substantiated Egypt’s sovereign claim.',
    legalEvidenceAr:
      'بقايا القاعدة الحجرية الأصلية التي تعود لعام 1906، والصور الجوية البريطانية الدقيقة لعام 1932 التي توثق موقع العمود بدقة متناهية.',
    legalEvidenceEn:
      'Original 1906 masonry base remnants and British Royal Air Force 1932 aerial stereoscopic photographs confirming exact coordinates.',
  },
  {
    id: 'wadi_taba_estuary',
    xPct: 62.0,
    yPct: 65.0,
    titleAr: 'وادي طابا ومصب السيول (Wadi Taba Drainage & Estuary)',
    titleEn: 'Wadi Taba Hydrographic Basin & Natural Frontier',
    categoryAr: 'الشاهد الهيدروغرافي والجغرافي الطبيعي',
    categoryEn: 'Geomorphological & Hydrographic Proof',
    descAr:
      'وفقاً لاتفاقية 1 أكتوبر 1906 بين الدولة العثمانية ومصر الخديوية؛ فإن خط الحدود يتبع قمم الجبال ويصل إلى رأس طابا بحيث يقع وادي طابا بأكمله ومجراه المائي داخل الأراضي المصرية، وهو ما أكدته الطبيعة التضاريسية لمصرف مياه الأمطار في الخليج.',
    descEn:
      'Per the October 1, 1906 Ottoman-Egyptian separation agreement, the boundary traced mountain watersheds down to Ras Taba, ensuring the entire hydrographic drainage basin of Wadi Taba remained wholly within Egyptian sovereign territory.',
    legalEvidenceAr:
      'شهادات شيوخ وعواقل قبائل سيناء (الترابين والأحيوات) وأشجار الدوم التاريخية التي غرسها الأجداد على ضفاف الوادي.',
    legalEvidenceEn:
      'Historical testimonies of local Bedouin tribal elders (Tarabin and Ahyawat) and ancient doum palm grove land records along the wadi.',
  },
  {
    id: 'treaty_1906_line',
    xPct: 38.0,
    yPct: 20.0,
    titleAr: 'خريطة اتفاقية تعيين الحدود لعام 1906 (1906 Boundary Accord)',
    titleEn: '1906 Historic Boundary Delimitation Accord & Maps',
    categoryAr: 'الوثيقة التاريخية الملزمة للطرفين قانوناً',
    categoryEn: 'Binding Historical Legal Foundation',
    descAr:
      'الاتفاق المبرم بين الخديوية المصرية والدولة العثمانية في 1 أكتوبر 1906 لترسيم خط الحدود الإدارية والفصل بين ولاية الحجاز وشبه جزيرة سيناء؛ اعتمدت عليه المحكمة كمرجعية دولية غير قابلة للنقض عملاً بمبدأ ثبات واستقرار الحدود الموروثة (Uti Possidetis).',
    descEn:
      'The bilateral treaty concluded between Khedivial Egypt and the Ottoman Sublime Porte on October 1, 1906, establishing the administrative line between Hejaz and Sinai, recognized by the arbitration tribunal under the doctrine of *uti possidetis juris*.',
    legalEvidenceAr:
      'الخرائط العثمانية والبريطانية والمصرية المشتركة لعام 1906 و1915 المودعة بدار الوثائق القومية بالقاهرة والأرشيف البريطاني بلندن.',
    legalEvidenceEn:
      'Joint Ottoman-Egyptian-British maps from 1906 and 1915 deposited in Egyptian National Archives and the British Public Record Office.',
  },
  {
    id: 'geneva_tribunal',
    xPct: 25.0,
    yPct: 75.0,
    titleAr: 'حكم هيئة التحكيم الدولية بجنيف (Geneva Arbitral Award 1988)',
    titleEn: 'Geneva International Arbitral Award (September 29, 1988)',
    categoryAr: 'الانتصار القانوني والدبلوماسي التاريخي',
    categoryEn: 'International Judicial Victory',
    descAr:
      'في 29 سبتمبر 1988م أصدرت هيئة التحكيم الدولية المشكلة من 5 قضاة دوليين برئاسة القاضي السويدي جونار لاجيرجرين حكمها التاريخي بالإجماع والتأييد الكامل لموقف مصر في كافة العلامات الـ 14 المتنازع عليها ومن بينها طابا؛ ورُفع العلم المصري خفاقاً على طابا في 19 مارس 1989م.',
    descEn:
      'On September 29, 1988, the 5-member international arbitral tribunal presided over by Judge Gunnar Lagergren rendered its landmark award, unanimously confirming Egypt’s sovereignty over all 14 disputed border markers including Taba. The Egyptian flag was raised on March 19, 1989.',
    legalEvidenceAr:
      'حكم تحكيمي دولي نهائي وملزم قانوناً لا يقبل الاستئناف وفقاً لأحكام القانون الدولي العام وميثاق الأمم المتحدة.',
    legalEvidenceEn:
      'Final, legally binding arbitral award rendered under the rules of public international law and the UN Charter.',
  },
];

export interface TabaTimelineEvent {
  year: string;
  titleAr: string;
  titleEn: string;
  detailAr: string;
  detailEn: string;
}

export const TABA_TIMELINE: TabaTimelineEvent[] = [
  {
    year: '1906',
    titleAr: 'اتفاقية ترسيم الحدود بين مصر والدولة العثمانية',
    titleEn: '1906 Ottoman-Egyptian Boundary Accord',
    detailAr: 'تثبيت 91 عموداً حدودياً من رفح شمالاً حتى رأس طابا جنوباً على خليج العقبة.',
    detailEn: 'Installation of 91 stone pillars from Rafah on Mediterranean to Ras Taba on Gulf of Aqaba.',
  },
  {
    year: '1982',
    titleAr: 'انسحاب إسرائيل من سيناء وتفجير نزاع العلامات الحدودية',
    titleEn: 'Israeli Withdrawal & Border Pillar Dispute',
    detailAr: 'أثناء الانسحاب الإسرائيلي وفق معاهدة السلام، افتعلت إسرائيل نزاعاً حول 14 علامة أبرزها العلامة 91 بطابا.',
    detailEn: 'During withdrawal per the 1979 peace treaty, Israel contested 14 border markers, primarily Pillar 91.',
  },
  {
    year: '1986',
    titleAr: 'توقيع مشارطة التحكيم الدولي (Arbitration Compromis)',
    titleEn: 'Signing of the Arbitration Compromis',
    detailAr: 'إصرار القيادة المصرية على اللجوء للتحكيم الدولي الإلزامي ورفض التفريط في شبر واحد من التراب الوطني.',
    detailEn: 'Egypt mandated binding international arbitration, rejecting any territorial concession.',
  },
  {
    year: '1988',
    titleAr: 'صدور حكم هيئة التحكيم بجنيف لصالح مصر (29 سبتمبر)',
    titleEn: 'Geneva Arbitral Tribunal Ruling (Sept 29)',
    detailAr: 'الحكم النهائي بالإجماع بأحقية مصر الكاملة في طابا وتثبيت موقع العلامة 91 التاريخي.',
    detailEn: 'Final unanimous verdict affirming Egypt’s full sovereignty over Taba and Pillar 91.',
  },
  {
    year: '1989',
    titleAr: 'رفع العلم المصري على طابا واستكمال تحرير الأرض (19 مارس)',
    titleEn: 'Raising of the Egyptian Flag over Taba (March 19)',
    detailAr: 'تخليد يوم 19 مارس عيداً قومياً لمحافظة جنوب سيناء واكتمال السيادة الوطنية غير منقوصة.',
    detailEn: 'March 19 celebrated annually as South Sinai National Day, marking complete territorial integrity.',
  },
];

export const TabaArbitrationStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<TabaHotspot>(TABA_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [activeTab, setActiveTab] = useState<'evidence' | 'timeline'>('evidence');
  const [timelineStep, setTimelineStep] = useState<number>(4);

  const handleOpenModal = () => {
    setModalData({
      imageUrl: tabaPhoto,
      titleAr: 'طابا وخليج العقبة — وثيقة النصر القانوني والدبلوماسي واسترداد الأرض',
      titleEn: 'Taba & Gulf of Aqaba: Legal Arbitration & Sovereign Triumph',
      subtitleAr: 'صورة فضائية فائقة الدقة 4K لرأس طابا، وادي طابا، والعلامة الحدودية رقم 91',
      subtitleEn: '4K Archival Satellite Exposure of Ras Taba, Wadi Taba, and Boundary Pillar 91',
      descriptionAr:
        'لقطة فضائية جيوسياسية دقيقة تظهر مدخل خليج العقبة ورأس طابا الصخري؛ حيث خاضت مصر أشرس معركة قانونية ودبلوماسية وخرائطية في تاريخها الحديث بقيادة نخبة من ألمع علماء القانون والتاريخ والجغرافيا والمساحة العسكرية لإثبات السيادة على العلامة 91 واسترداد طابا عام 1989.',
      descriptionEn:
        'High-resolution geopolitical satellite capture of Ras Taba and the Gulf of Aqaba entryway, where Egypt waged its most sophisticated international arbitration battle, marshaling cartographic, aerial, geological, and archival evidence to liberate Taba in 1989.',
      locationAr: 'رأس طابا، خليج العقبة، محافظة جنوب سيناء، جمهورية مصر العربية',
      locationEn: 'Ras Taba, Gulf of Aqaba, South Sinai Governorate, Egypt',
      dateOrEraAr: '1982 - 1989 ميلادية (ملحمة التحكيم الدولي واسترداد طابا)',
      dateOrEraEn: '1982 - 1989 CE (The Taba International Arbitration Campaign)',
    });
  };

  return (
    <div
      className={`rounded-2xl border p-5 md:p-8 transition-all ${
        isContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : isLight
          ? 'bg-teal-50/40 text-stone-900 border-teal-200 shadow-sm'
          : 'bg-stone-950/80 text-stone-100 border-teal-900/50 shadow-2xl backdrop-blur-md'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 border-teal-500/20">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                isContrast
                  ? 'bg-amber-400 text-black'
                  : 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white shadow-sm'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              {isArabic ? 'متحف الجيوبولتيك والقانون الدولي' : 'Geopolitical Legal Archive'}
            </span>
            <span className="text-xs text-teal-400/90 font-mono">
              {isArabic ? 'ملحمة طابا 1989 • 4K' : 'Taba 1989 Legal Triumph • 4K'}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            {isArabic
              ? 'استوديو ملحمة طابا والتحكيم الدولي (علامة الحدود 91)'
              : 'Taba International Arbitration & Border Pillar 91 Studio'}
          </h2>
          <p className="text-sm mt-1 text-stone-400 max-w-3xl leading-relaxed">
            {isArabic
              ? 'دراسة تفاعلية للخرائط التاريخية، صور الاستطلاع الجوي 1932، أركان الدفاع المصري، والأحكام القضائية لهيئة التحكيم الدولية بجنيف التي رسخت مبدأ ثبات الحدود واسترداد كامل تراب سيناء.'
              : 'Interactive exploration of 1906 treaties, 1932 aerial stereograms, Egyptian legal defense pillars, and the Geneva arbitral award cementing territorial stability.'}
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md ${
            isContrast
              ? 'bg-amber-400 text-black hover:bg-amber-300'
              : 'bg-teal-600 hover:bg-teal-500 text-white hover:shadow-teal-500/25'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'معاينة خريطة طابا الفضائية 4K' : 'View 4K Taba Satellite Map'}</span>
        </button>
      </div>

      {/* Main Grid: Interactive Canvas & Hotspot Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left: 4K Satellite Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div
            className={`relative rounded-xl overflow-hidden border shadow-inner group ${
              isContrast ? 'border-amber-400 bg-black' : 'border-teal-900/40 bg-stone-900'
            }`}
            style={{ minHeight: '380px' }}
          >
            <img
              src={tabaPhoto}
              alt="Taba Satellite Map"
              className="w-full h-auto object-contain max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Hotspot Markers */}
            {TABA_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
                  aria-label={isArabic ? spot.titleAr : spot.titleEn}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isSelected
                      ? 'ring-4 ring-teal-400 bg-amber-400 text-stone-950 scale-125 shadow-xl'
                      : 'bg-stone-900/90 text-teal-300 border border-teal-400/70 hover:scale-110 hover:bg-teal-500 hover:text-black'
                  }`}
                >
                  <MapPin className={`w-4 h-4 ${isSelected ? 'animate-bounce' : ''}`} />
                  <span className="sr-only">{isArabic ? spot.titleAr : spot.titleEn}</span>
                </button>
              );
            })}

            {/* Canvas Overlay Badge */}
            <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-teal-500/30 text-xs text-teal-200/90 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>
                {isArabic
                  ? 'انقر على العلامة 91 ورأس طابا ووادي طابا لاستكشاف الأدلة'
                  : 'Click Pillar 91, Ras Taba, and Wadi Taba to examine evidence'}
              </span>
            </div>
          </div>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap gap-2 pt-1">
            {TABA_HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setSelectedHotspot(spot)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all border ${
                  selectedHotspot.id === spot.id
                    ? isContrast
                      ? 'bg-amber-400 text-black border-amber-400'
                      : 'bg-teal-600 text-white border-teal-500 shadow-sm'
                    : isLight
                    ? 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                    : 'bg-stone-900/70 text-stone-300 border-stone-800 hover:bg-stone-800'
                }`}
              >
                {isArabic ? spot.titleAr.split('(')[0] : spot.titleEn.split('(')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Selected Hotspot Deep Analytical Inspector */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div
            className={`p-5 rounded-xl border h-full flex flex-col justify-between ${
              isContrast
                ? 'bg-stone-950 border-amber-400'
                : isLight
                ? 'bg-white border-teal-200 shadow-sm'
                : 'bg-stone-900/70 border-teal-900/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b pb-3 mb-3 border-teal-500/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
                </span>
                <span className="text-xs font-mono bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded border border-teal-500/20">
                  {isArabic ? 'وثيقة رسمية' : 'Official Record'}
                </span>
              </div>

              <h3 className="text-lg font-black text-teal-400 mb-2">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </h3>

              <p className="text-sm leading-relaxed text-stone-300 mb-4">
                {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
              </p>

              <div
                className={`p-3.5 rounded-lg border text-xs leading-relaxed space-y-2 ${
                  isLight
                    ? 'bg-teal-50/80 border-teal-200 text-stone-800'
                    : 'bg-teal-950/20 border-teal-500/30 text-teal-200'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 text-teal-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'السند القانوني والخرائطي في مرافعة جنيف:' : 'Arbitral Legal & Cartographic Ground:'}</span>
                </div>
                <div>
                  {isArabic ? selectedHotspot.legalEvidenceAr : selectedHotspot.legalEvidenceEn}
                </div>
              </div>
            </div>

            {/* Curriculum Rule Banner */}
            <div className="mt-4 pt-3 border-t border-teal-500/20 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {isArabic
                  ? 'منهج الثانوية العامة: التحكيم الدولي هو الأسلوب القانوني الحاسم لإنهاء النزاع'
                  : 'Curriculum Standard: Binding arbitration as peaceful resolution of border disputes'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Evidence Comparator vs Timeline */}
      <div
        className={`my-8 p-6 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-amber-400'
            : isLight
            ? 'bg-stone-50 border-teal-200 shadow-sm'
            : 'bg-stone-900/60 border-teal-800/40'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('evidence')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeTab === 'evidence'
                  ? 'bg-teal-600 text-white border-teal-500 shadow-sm'
                  : 'bg-stone-800/60 text-stone-300 border-stone-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5 inline mr-1.5" />
              {isArabic ? 'أركان ملف الدفاع المصري الأربعة' : 'The 4 Pillars of Egypt’s Defense'}
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeTab === 'timeline'
                  ? 'bg-teal-600 text-white border-teal-500 shadow-sm'
                  : 'bg-stone-800/60 text-stone-300 border-stone-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5 inline mr-1.5" />
              {isArabic ? 'الخط الزمني لمعركة استرداد طابا (1906 - 1989)' : 'Taba Liberation Chronology (1906-1989)'}
            </button>
          </div>
        </div>

        {activeTab === 'evidence' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-teal-400 mb-1 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                {isArabic ? '1. الدليل الخرائطي والوثائقي' : '1. Cartographic Archives'}
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mt-2">
                {isArabic
                  ? 'تقديم 29 خريطة تاريخية رسمية صادرة من مساحة مصر، ووزارة الحربية العثمانية، والأركان البريطانية بين عامي 1906 و1982؛ تتطابق جميعاً في وضع رأس طابا داخل السيادة المصرية.'
                  : 'Submission of 29 official historical maps from Egyptian Survey, Ottoman War Ministry, and British War Office (1906-1982), consistently placing Ras Taba within Egypt.'}
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                {isArabic ? '2. صور الاستطلاع الجوي 1932' : '2. 1932 Aerial Photography'}
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mt-2">
                {isArabic
                  ? 'العثور على صور جوية التقطتها القوات الجوية الملكية البريطانية عام 1932 في أرشيف مكتبة جامعة أكسفورد، تظهر بوضوح عمود العلامة 91 وظله على قمة الجبل المشرفة على الوادي.'
                  : 'Discovery of RAF stereoscopic aerial photos from 1932 in Oxford libraries, clearly resolving Pillar 91 and its shadow atop the ridge overlooking the wadi.'}
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {isArabic ? '3. المعاينة الميدانية وبقايا البناء' : '3. In Situ Physical Evidence'}
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mt-2">
                {isArabic
                  ? 'معاينة هيئة التحكيم الدولية للجبل؛ واكتشاف بقايا الإسمنت وقواعد الحجارة المطابقة لمواصفات مهندسي المساحة لعام 1906، ودحض المزاعم الإسرائيلية حول الموقع المزيف بالوادي.'
                  : 'On-site judicial inspection revealing original 1906 mortar and masonry footings precisely at the summit location, refuting Israeli claims of an alternate valley site.'}
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-950/70 border-stone-800'
              }`}
            >
              <div className="text-xs font-bold text-sky-400 mb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                {isArabic ? '4. الشهادات الحية وحيازة السيادة' : '4. Sovereign Possession Testimony'}
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mt-2">
                {isArabic
                  ? 'شهادات ضباط سلاح حرس الحدود المصريين وشيوخ قبائل سيناء الذين خدموا بالمنطقة قبل عدوان 1967، مؤكدين حراسة النقطة ورفع العلم المصري عليها منذ عقود.'
                  : 'Sworn depositions from Egyptian Border Guard officers and Bedouin tribal leaders stationed at Taba before 1967, verifying continuous exercise of sovereign policing.'}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
              <span className="text-xs text-stone-400">
                {isArabic ? `المرحلة المعروضة: ${timelineStep + 1} من ${TABA_TIMELINE.length}` : `Stage ${timelineStep + 1} of ${TABA_TIMELINE.length}`}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setTimelineStep((prev) => Math.max(0, prev - 1))}
                  disabled={timelineStep === 0}
                  className="px-2.5 py-1 rounded text-xs font-bold bg-stone-800 text-stone-300 disabled:opacity-40"
                >
                  {isArabic ? 'السابق' : 'Prev'}
                </button>
                <button
                  type="button"
                  onClick={() => setTimelineStep((prev) => Math.min(TABA_TIMELINE.length - 1, prev + 1))}
                  disabled={timelineStep === TABA_TIMELINE.length - 1}
                  className="px-2.5 py-1 rounded text-xs font-bold bg-teal-600 text-white disabled:opacity-40"
                >
                  {isArabic ? 'التالي' : 'Next'}
                </button>
                <button
                  type="button"
                  onClick={() => setTimelineStep(TABA_TIMELINE.length - 1)}
                  className="p-1 rounded text-xs bg-stone-800 text-stone-400 hover:text-white"
                  title={isArabic ? 'إعادة ضبط' : 'Reset'}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {TABA_TIMELINE.map((item, idx) => (
              <div
                key={item.year}
                className={`p-4 rounded-xl border transition-all ${
                  idx <= timelineStep
                    ? isContrast
                      ? 'bg-stone-950 border-amber-400'
                      : isLight
                      ? 'bg-white border-teal-300 shadow-sm'
                      : 'bg-stone-900/80 border-teal-600/40'
                    : 'opacity-40 bg-stone-950/40 border-stone-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-teal-500/20 text-teal-300 font-mono font-bold text-xs border border-teal-500/30">
                      {item.year}
                    </span>
                    <span className="font-bold text-sm text-stone-200">
                      {isArabic ? item.titleAr : item.titleEn}
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-stone-300 flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{isArabic ? item.detailAr : item.detailEn}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* HiRes Modal Viewer */}
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
