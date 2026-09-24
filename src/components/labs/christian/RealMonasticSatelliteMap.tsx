import React, { useState } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Compass,
  Navigation,
  Info,
  Maximize2,
  Mountain,
  Camera,
} from 'lucide-react';
import { type MonasticMilestone, MONASTIC_MILESTONES } from '../../../data/christianLab/christianLabData';

import egyptSatelliteMap from '../../../assets/geography/egypt_satellite_map.jpg';
import antonyPhoto from '../../../assets/christianLab/st_antony_monastery_red_sea.jpg';
import natrunPhoto from '../../../assets/christianLab/wadi_el_natrun_monastery.jpg';
import sohagPhoto from '../../../assets/christianLab/sohag_white_red_monastery.jpg';
import holyFamilyPhoto from '../../../assets/christianLab/holy_family_egypt_flight.jpg';
import catherinePhoto from '../../../assets/christianLab/st_catherine_sinai.jpg';
import { HiResImageModal, type HiResImageModalData } from './HiResImageModal';

export interface MonasticGeoSite {
  id: string;
  milestoneId: string;
  nameAr: string;
  nameEn: string;
  leaderAr: string;
  leaderEn: string;
  lat: number;
  lng: number;
  xPct: number; // 0 - 100% on satellite image
  yPct: number; // 0 - 100% on satellite image
  elevationMeters: number;
  terrainTypeAr: string;
  terrainTypeEn: string;
  significanceAr: string;
  significanceEn: string;
  photoUrl: string;
  photoCaptionAr: string;
  photoCaptionEn: string;
  isHolyFamilyTrail?: boolean;
}

export const MONASTIC_GEO_SITES: MonasticGeoSite[] = [
  {
    id: 'geo_scetis_natrun',
    milestoneId: 'milestone_macarius',
    nameAr: 'برية شيهيت ووادي النطرون (أديرة أبو مقار والأنبا بيشوي والسريان والبراموس)',
    nameEn: 'Wilderness of Scetis (Wadi al-Natrun Monasteries)',
    leaderAr: 'القديس مقار الكبير والأنبا بيشوي',
    leaderEn: 'St. Macarius the Great & St. Bishoy',
    lat: 30.38,
    lng: 30.34,
    xPct: 53.5,
    yPct: 27.8,
    elevationMeters: -24,
    terrainTypeAr: 'منخفض صحراوي وادي النطرون (بحيرات الملح والرمال البيضاء)',
    terrainTypeEn: 'Depression basin with natron salt lakes & arid dunes',
    significanceAr: 'مهد الرهبنة شبه التوحدية الإسقيطية في القرن الرابع الميلادي؛ قلاع روحية صدت غارات البربر عبر حصونها التاريخية.',
    significanceEn: 'Cradle of 4th-century semi-eremitic monasticism; fortified keeps shielded monks against desert raiders.',
    photoUrl: natrunPhoto,
    photoCaptionAr: 'دير الأنبا بيشوي ومقار بوادي النطرون: الحصن الدفاعي الأثري وقباب الكنائس الباكرة في قلب البرية',
    photoCaptionEn: 'Wadi al-Natrun Monastery Keep & Ancient Domes in the Egyptian Western Desert',
    isHolyFamilyTrail: true,
  },
  {
    id: 'geo_antony_red_sea',
    milestoneId: 'milestone_antony',
    nameAr: 'دير القديس أنطونيوس الكبير (جبل القلزم - البحر الأحمر)',
    nameEn: 'Monastery of St. Antony the Great (Mount Clysma, Red Sea)',
    leaderAr: 'القديس أنطونيوس الكبير (أبو الرهبان في العالم)',
    leaderEn: 'St. Antony the Great (Father of Christian Monks)',
    lat: 28.924,
    lng: 32.35,
    xPct: 67.2,
    yPct: 42.2,
    elevationMeters: 485,
    terrainTypeAr: 'سلسلة جبال الجلالة القبلية الصخرية الوعرة المشرفة على خليج السويس',
    terrainTypeEn: 'Rugged limestone cliffs of Northern Galala facing Gulf of Suez',
    significanceAr: 'أقدم دير مأهول في العالم؛ انطلقت منه حركة الرهبنة الانفرادية التوحدية التي غيرت مسار الحضارة والروحانية المسيحية.',
    significanceEn: 'World\'s oldest continuously active monastery; inception of solitary anchoritic monasticism.',
    photoUrl: antonyPhoto,
    photoCaptionAr: 'دير الأنبا أنطونيوس: أسوار الدير المنيعة ونخيل الواحة المحتمية تحت صخور جبل القلزم الحمراء الشاهقة',
    photoCaptionEn: 'Fortress walls & palm oasis of St. Antony at the base of Mount Clysma',
  },
  {
    id: 'geo_paul_hermit',
    milestoneId: 'milestone_antony',
    nameAr: 'دير القديس بولا أول السواح (وادي الدير - البحر الأحمر)',
    nameEn: 'Monastery of St. Paul the First Hermit (Red Sea)',
    leaderAr: 'القديس بولا البسيط أول السواح',
    leaderEn: 'St. Paul of Thebes (First Anchorite)',
    lat: 28.847,
    lng: 32.529,
    xPct: 68.6,
    yPct: 44.0,
    elevationMeters: 520,
    terrainTypeAr: 'شعب وادي صخري شديد الوعرة في عمق جبال الجلالة القبلية',
    terrainTypeEn: 'Steep remote mountain gorge in the Eastern Desert',
    significanceAr: 'عاش القديس بولا في مغارته أكثر من تسعين عاماً متوحداً في الصلاة الدائمة مقتاتاً على نصف خبزة يأتيه بها الغراب.',
    significanceEn: 'St. Paul inhabited his cave for over 90 years in solitary prayer, sustained by a raven with bread.',
    photoUrl: antonyPhoto,
    photoCaptionAr: 'صخور وادي الدير التاريخي بالبحر الأحمر وحصن دير الأنبا بولا',
    photoCaptionEn: 'Red Sea mountain gorge and sanctuary of St. Paul the Anchorite',
  },
  {
    id: 'geo_sohag_white_red',
    milestoneId: 'milestone_shenouda',
    nameAr: 'الدير الأبيض والدير الأحمر (الأنبا شنودة رئيس المتوحدين والأنبا بيشاي - سوهاج)',
    nameEn: 'White & Red Monasteries of St. Shenouda (Sohag, Upper Egypt)',
    leaderAr: 'الأنبا شنودة رئيس المتوحدين',
    leaderEn: 'St. Shenouda the Archimandrite',
    lat: 31.89,
    lng: 31.637,
    xPct: 61.2,
    yPct: 56.8,
    elevationMeters: 85,
    terrainTypeAr: 'حافة الهضبة الصحراوية الغربية المطلة على وادي النيل الخصيب بسوهاج',
    terrainTypeEn: 'Desert escarpment edge overlooking Upper Egypt Nile flood basin',
    significanceAr: 'صرح معماري فريد استلهم واجهاته الضخمة من الصروح الفرعونية القديمة ليدشن أكبر مجمع رهباني ومكتبة مخطوطات قبطية صعيدية.',
    significanceEn: 'Monumental 5th-century limestone basilica blending Pharaonic pylons with Coptic Christian architecture.',
    photoUrl: sohagPhoto,
    photoCaptionAr: 'الدير الأبيض بسوهاج: الصرح الحجري الضخم وأعمدة البازيليكا والشرقية المزينة بالفريسك القبطي الباكر',
    photoCaptionEn: 'Monumental limestone pylons & painted apse frescoes of the White Monastery in Sohag',
  },
  {
    id: 'geo_pachomius_upper_egypt',
    milestoneId: 'milestone_pachomius',
    nameAr: 'مجمع الشركة الباخومية (فاو قبلي، دندرة، والأقصر - قنا وصعيد مصر)',
    nameEn: 'Pachomian Cenobitic Foundation (Tabennisi, Faw Qibli, Denderah & Luxor)',
    leaderAr: 'القديس باخوميوس (أب الشركة الرهبانية)',
    leaderEn: 'St. Pachomius (Father of Cenobitic Monasticism)',
    lat: 26.166,
    lng: 32.666,
    xPct: 65.4,
    yPct: 63.8,
    elevationMeters: 78,
    terrainTypeAr: 'سهول وادي النيل العليا وثنية قنا التاريخية',
    terrainTypeEn: 'Upper Nile fertile plain around the Qena bend',
    significanceAr: 'ابتكار نظام الشركة الرهبانية المقننة، الذي نظّم العمل اليدوي، إعانة المحتاجين، والصلوات المشتركة ونُقل إلى أرجاء العالم القديم.',
    significanceEn: 'Codified the Cenobitic rule of communal industry, shared prayer, and egalitarian charity.',
    photoUrl: sohagPhoto,
    photoCaptionAr: 'تراث صعيد مصر الرهباني: البازيليكا الباخومية الكبرى ومراكز النسخ والحرف اليدوية',
    photoCaptionEn: 'Upper Egypt monastic heartland: Pachomian basilic foundations and scriptoria',
  },
  {
    id: 'geo_catherine_sinai',
    milestoneId: 'milestone_antony', // Earliest desert anchors
    nameAr: 'دير سانت كاترين وشجرة العليقة الملتهبة (جبل موسى - جنوب سيناء)',
    nameEn: 'Monastery of St. Catherine & Burning Bush (Mount Sinai)',
    leaderAr: 'رهبان سيناء الأوائل والإمبراطور جستنيان',
    leaderEn: 'Early Sinai Hermits & Justinian I',
    lat: 28.556,
    lng: 33.976,
    xPct: 76.8,
    yPct: 45.6,
    elevationMeters: 1570,
    terrainTypeAr: 'مرتفعات جرانيتية بركانية شاهقة في قلب شبه جزيرة سيناء',
    terrainTypeEn: 'High rugged rose-granite peaks of Mount Horeb',
    significanceAr: 'يضم شجرة العليقة المقدسة ومكتبة مخطوطات نادرة تحوي أقدم نسخ الأسفار الإنجيلية والأيقونات البيزنطية والقبطية الشمعية.',
    significanceEn: 'Encloses the Biblical Burning Bush and world\'s oldest active library of ancient biblical codices & encaustic icons.',
    photoUrl: catherinePhoto,
    photoCaptionAr: 'دير سانت كاترين: قلعة الجرانيت المنيعة عند أقدام جبل موسى وأشجار السرو والزيتون في وادي الراحة',
    photoCaptionEn: 'Granite fortifications of St. Catherine Monastery beneath Mount Horeb',
  },
  {
    id: 'geo_holy_family_muharraq',
    milestoneId: 'milestone_holy_family',
    nameAr: 'دير السيدة العذراء بالمحرق (جبل قسقام - أسيوط)',
    nameEn: 'Al-Muharraq Monastery at Mount Qusqam (Holy Family Sanctuary, Assiut)',
    leaderAr: 'العائلة المقدسة (السيد المسيح، العذراء مريم، والقديس يوسف)',
    leaderEn: 'The Holy Family in Egypt',
    lat: 27.433,
    lng: 30.812,
    xPct: 57.5,
    yPct: 50.2,
    elevationMeters: 70,
    terrainTypeAr: 'السفوح الصحراوية المشرفة على أراضي الزراعة غرب القوصية',
    terrainTypeEn: 'Desert foothills bordering fertile Nile basin at Al-Qusiya',
    significanceAr: 'أطول محطة استقرت بها العائلة المقدسة في مصر (٦ أشهر و١٠ أيام)؛ مذكر بحجري دشنه السيد المسيح بنفسه وتحقق فيه: «مبارك شعبي مصر».',
    significanceEn: 'Major Holy Family refuge for over 6 months; the stone altar was consecrated by Christ, fulfilling Isaiah\'s prophecy.',
    photoUrl: holyFamilyPhoto,
    photoCaptionAr: 'رحلة العائلة المقدسة إلى مصر: ملاذ الأمان والسلام على ضفاف النيل عند الغروب',
    photoCaptionEn: 'The Flight of the Holy Family into Egypt at sunset along the Nile',
    isHolyFamilyTrail: true,
  },
  {
    id: 'geo_holy_family_cairo',
    milestoneId: 'milestone_holy_family',
    nameAr: 'كنيسة القديسين سرجيوس وواخس (أبي سرجة) ومصر القديمة',
    nameEn: 'Church of Saints Sergius & Bacchus (Abu Serga, Old Cairo)',
    leaderAr: 'العائلة المقدسة ومارمرقس الرسول',
    leaderEn: 'The Holy Family & St. Mark',
    lat: 30.006,
    lng: 31.23,
    xPct: 58.2,
    yPct: 31.6,
    elevationMeters: 32,
    terrainTypeAr: 'موقع حصن بابليون التاريخي عند نقطة التقاء الدلتا بالصعيد',
    terrainTypeEn: 'Historic Roman Fortress of Babylon at the Delta apex',
    significanceAr: 'تضم المغارة الأثرية التي احتمت بها العائلة المقدسة في قلب مصر القديمة، وتعد منارة للتاريخ الروحي القبطي والوطني.',
    significanceEn: 'Houses the sacred subterranean crypt where the Holy Family took refuge during their stay in Old Cairo.',
    photoUrl: holyFamilyPhoto,
    photoCaptionAr: 'مغارة أبي سرجة الأثرية بمصر القديمة ومسار السلام للعائلة المقدسة',
    photoCaptionEn: 'Ancient crypt of Abu Serga in Old Cairo on the Holy Family trail',
    isHolyFamilyTrail: true,
  },
  {
    id: 'geo_holy_family_jabal_teir',
    milestoneId: 'milestone_holy_family',
    nameAr: 'جبل الطير وكنيسة السيدة العذراء بسمالوط (المنيا)',
    nameEn: 'Jabal al-Tair Sanctuary (Samalut, Minya)',
    leaderAr: 'العائلة المقدسة والإمبراطورة هيلانة',
    leaderEn: 'The Holy Family & Empress Helena',
    lat: 28.29,
    lng: 30.77,
    xPct: 57.0,
    yPct: 44.5,
    elevationMeters: 110,
    terrainTypeAr: 'جرف صخري شاهق منحوت في الجبل الشرقي المشرف على نهر النيل',
    terrainTypeEn: 'High limestone precipice carved into the eastern Nile cliff',
    significanceAr: 'موقع كنيسة الكهف المنحوتة في الصخر؛ حيث أوقف الطفل يسوع صخرة كادت تسقط على القارب تاركاً طبعة كفه الشريف.',
    significanceEn: 'Cave church carved into the cliff face where tradition holds the Christ Child stopped a falling rock with His hand.',
    photoUrl: holyFamilyPhoto,
    photoCaptionAr: 'كنيسة جبل الطير المنحوتة في الجبل المشرف على نيل مصر بالمنيا',
    photoCaptionEn: 'Cliffside rock-hewn sanctuary of Jabal al-Tair overlooking the Nile',
    isHolyFamilyTrail: true,
  },
  {
    id: 'geo_holy_family_dronka',
    milestoneId: 'milestone_holy_family',
    nameAr: 'دير درنكة ومغارة العائلة المقدسة بجبل أسيوط الغربي',
    nameEn: 'Dronka Monastery & Mountain Cave (Assiut)',
    leaderAr: 'العائلة المقدسة والقديس يوسف النجار',
    leaderEn: 'The Holy Family in Upper Egypt',
    lat: 27.123,
    lng: 31.173,
    xPct: 58.5,
    yPct: 52.4,
    elevationMeters: 135,
    terrainTypeAr: 'كهف طبيعي ضخم في عمق الجبل الغربي بارتفاع 100م فوق السهل النيلي',
    terrainTypeEn: 'Vast natural mountain cavern 100m above the Western Nile plain',
    significanceAr: 'آخر المحطات الصعيدية الكبرى التي لجأت إليها العائلة المقدسة في طريق العودة إلى فلسطين، ومزار سنوي لملايين الزائرين.',
    significanceEn: 'Vast mountain cave sanctuary marking the southernmost turn-point before returning north to Nazareth.',
    photoUrl: holyFamilyPhoto,
    photoCaptionAr: 'مغارة دير درنكة في جبل أسيوط الغربي: محطة الأمان والعبادة',
    photoCaptionEn: 'Dronka Mountain Cavern sanctuary in Assiut',
    isHolyFamilyTrail: true,
  },
];

interface Props {
  selectedMilestoneId: string;
  onSelectMilestone: (milestone: MonasticMilestone) => void;
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export const RealMonasticSatelliteMap: React.FC<Props> = ({
  selectedMilestoneId,
  onSelectMilestone,
  isArabic,
  isLight,
  isContrast,
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [selectedSiteId, setSelectedSiteId] = useState<string>('geo_antony_red_sea');
  const [showHolyFamilyTrail, setShowHolyFamilyTrail] = useState<boolean>(true);
  const [showTerrainHUD, setShowTerrainHUD] = useState<boolean>(true);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const selectedSite =
    MONASTIC_GEO_SITES.find((s) => s.id === selectedSiteId) || MONASTIC_GEO_SITES[0];

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 2.5));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.85));
  const handleReset = () => setZoom(1);

  const handleSelectSite = (site: MonasticGeoSite) => {
    setSelectedSiteId(site.id);
    if (onSelectMilestone) {
      const milestone = MONASTIC_MILESTONES.find((m) => m.id === site.milestoneId);
      if (milestone) {
        onSelectMilestone(milestone);
      }
    }
  };

  const handleOpenPhotoModal = (site: MonasticGeoSite) => {
    setModalData({
      imageUrl: site.photoUrl,
      titleAr: site.nameAr,
      titleEn: site.nameEn,
      subtitleAr: site.terrainTypeAr,
      subtitleEn: site.terrainTypeEn,
      descriptionAr: site.significanceAr,
      descriptionEn: site.significanceEn,
      locationAr: `${site.lat.toFixed(3)}° شمالاً، ${site.lng.toFixed(3)}° شرقاً (ارتفاع: ${site.elevationMeters}م)`,
      locationEn: `${site.lat.toFixed(3)}° N, ${site.lng.toFixed(3)}° E (Elev: ${site.elevationMeters}m)`,
      dateOrEraAr: 'تراث كنسي وتاريخي معتمد',
      dateOrEraEn: 'Official Ecclesiastical Heritage',
    });
  };

  // Holy Family connected path points on map % coordinates:
  const holyFamilyRoutePath = [
    { x: 68.0, y: 24.5, name: 'الفرما (بيلوسيوم)' },
    { x: 62.0, y: 26.5, name: 'تل بسطة (الشرقية)' },
    { x: 59.5, y: 24.8, name: 'سمنود وسخا (كفر الشيخ)' },
    { x: 53.5, y: 27.8, name: 'وادي النطرون (برية شيهيت)' },
    { x: 58.6, y: 30.6, name: 'المطرية وشجرة مريم' },
    { x: 58.2, y: 31.6, name: 'مصر القديمة وكنيسة أبي سرجة' },
    { x: 58.5, y: 33.2, name: 'المعادي وموقع العبور النيلي' },
    { x: 57.0, y: 44.5, name: 'جبل الطير بسمالوط (المنيا)' },
    { x: 57.5, y: 50.2, name: 'دير المحرق بجبل قسقام (أسيوط)' },
    { x: 58.5, y: 52.4, name: 'دير درنكة ومغارة أسيوط' },
  ];

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fefbf6] via-[#f9f2e4] to-[#f2e4cb] border-amber-300 shadow-amber-950/15'
          : 'bg-gradient-to-b from-[#0a0d14] via-[#10131d] to-[#181512] border-amber-500/30 shadow-black/60'
      }`}
    >
      {/* Header with Title and Mode Toggles */}
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
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'الخريطة الطبوغرافية والفضائية الحقيقية لبراري الرهبنة ومسار العائلة المقدسة'
                : 'Real Geographic Satellite & Topographic Map of Egyptian Monasticism & Holy Family Trail'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'مرئيات فضائية حقيقية ملتقطة بالأقمار الصناعية توضح إحداثيات ومواقع الأديرة التاريخية'
                : 'Authentic high-resolution satellite imagery with calibrated GPS coordinates & elevation telemetry'}
            </p>
          </div>
        </div>

        {/* Toolbar & Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Layer toggles */}
          <button
            onClick={() => setShowHolyFamilyTrail(!showHolyFamilyTrail)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              showHolyFamilyTrail
                ? isLight
                  ? 'bg-amber-200 border-amber-500 text-amber-950 font-black'
                  : 'bg-amber-500/25 border-amber-400 text-amber-300 font-bold'
                : isLight
                ? 'bg-white border-slate-300 text-slate-700'
                : 'bg-slate-850 border-slate-700 text-slate-400'
            }`}
          >
            <span>✝️</span>
            <span>{isArabic ? 'مسار العائلة المقدسة' : 'Holy Family Trail'}</span>
          </button>

          <button
            onClick={() => setShowTerrainHUD(!showTerrainHUD)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              showTerrainHUD
                ? isLight
                  ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black'
                  : 'bg-emerald-500/25 border-emerald-400 text-emerald-300 font-bold'
                : isLight
                ? 'bg-white border-slate-300 text-slate-700'
                : 'bg-slate-850 border-slate-700 text-slate-400'
            }`}
          >
            <Mountain className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تضاريس البراري' : 'Terrain HUD'}</span>
          </button>

          {/* Zoom Buttons */}
          <div
            className={`flex items-center rounded-xl border p-0.5 ${
              isLight ? 'bg-white border-amber-300' : 'bg-slate-900 border-slate-700'
            }`}
          >
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg hover:bg-amber-500/20 text-amber-500 transition-colors"
              title={isArabic ? 'تكبير (+)' : 'Zoom In'}
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 font-mono text-[11px] font-bold text-amber-500">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-lg hover:bg-amber-500/20 text-amber-500 transition-colors"
              title={isArabic ? 'تصغير (-)' : 'Zoom Out'}
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg hover:bg-amber-500/20 text-slate-400 transition-colors"
              title={isArabic ? 'إعادة ضبط' : 'Reset'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Satellite Viewport & Interactive Overlay */}
      <div className="relative w-full aspect-[16/9] min-h-[380px] md:min-h-[520px] rounded-2xl overflow-hidden mt-4 border border-amber-500/30 shadow-inner bg-slate-950 select-none">
        {/* Real Satellite Map Image */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out origin-center"
          style={{ transform: `scale(${zoom})` }}
        >
          <img
            src={egyptSatelliteMap}
            alt="Real Satellite Map of Egypt"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08]"
          />

          {/* SVG Overlay for Vector Routes & Golden Glow Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="goldenRouteGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Holy Family Refuge Trail Glowing Line */}
            {showHolyFamilyTrail && (
              <>
                <polyline
                  points={holyFamilyRoutePath.map((p) => `${p.x},${p.y}`).join(' ')}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="0.75"
                  strokeDasharray="1.5 1"
                  filter="url(#goldenRouteGlow)"
                  className="animate-pulse"
                />
                {/* Station Dots along the trail */}
                {holyFamilyRoutePath.map((p, idx) => (
                  <circle
                    key={idx}
                    cx={p.x}
                    cy={p.y}
                    r="0.8"
                    fill="#fef08a"
                    stroke="#b45309"
                    strokeWidth="0.3"
                  />
                ))}
              </>
            )}
          </svg>

          {/* Interactive Georeferenced Pins */}
          {MONASTIC_GEO_SITES.map((site) => {
            const isSelected =
              site.id === selectedSite.id ||
              (Boolean(selectedMilestoneId) && site.milestoneId === selectedMilestoneId);
            return (
              <div
                key={site.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-125 z-20 group"
                style={{ left: `${site.xPct}%`, top: `${site.yPct}%` }}
                onClick={() => handleSelectSite(site)}
              >
                {/* Pulsating Radar Glow */}
                <div
                  className={`absolute -inset-2 rounded-full animate-ping pointer-events-none ${
                    isSelected ? 'bg-amber-400/80' : 'bg-amber-500/30'
                  }`}
                />

                {/* Marker Button */}
                <div
                  className={`relative flex items-center justify-center rounded-full border-2 shadow-2xl transition-all ${
                    isSelected
                      ? 'w-7 h-7 bg-amber-500 border-white text-black scale-110 shadow-amber-500/70'
                      : site.isHolyFamilyTrail
                      ? 'w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-600 border-amber-100 text-amber-950'
                      : 'w-5 h-5 bg-slate-900/90 border-amber-400 text-amber-300'
                  }`}
                >
                  <span className="text-[10px] font-black leading-none">
                    {site.isHolyFamilyTrail ? '✝' : '🏛'}
                  </span>
                </div>

                {/* Tooltip on Hover */}
                <div className="absolute bottom-full start-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-30">
                  <div className="px-2.5 py-1.5 rounded-lg bg-black/90 border border-amber-400/60 backdrop-blur-md shadow-2xl text-center whitespace-nowrap">
                    <p className="text-[11px] font-black text-amber-300">
                      {isArabic ? site.nameAr.split('(')[0] : site.nameEn.split('(')[0]}
                    </p>
                    <p className="text-[9px] font-mono text-slate-300">
                      {site.lat.toFixed(2)}°N, {site.lng.toFixed(2)}°E • {site.elevationMeters}m
                    </p>
                  </div>
                  <div className="w-1.5 h-1.5 bg-black border-r border-b border-amber-400/60 rotate-45 -mt-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Top Geographic Labels HUD */}
        <div className="absolute top-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none z-30">
          <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-mono font-bold shadow-lg">
            <span>🛰️ SATELLITE HUD: EGYPT TOPOGRAPHY</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-slate-700 text-slate-300 text-[10px] font-bold">
              🌊 {isArabic ? 'البحر المتوسط' : 'Mediterranean'}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-slate-700 text-slate-300 text-[10px] font-bold">
              🌿 {isArabic ? 'دلتا النيل' : 'Nile Delta'}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-slate-700 text-slate-300 text-[10px] font-bold">
              ⛰️ {isArabic ? 'شبه جزيرة سيناء' : 'Sinai Peninsula'}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-slate-700 text-slate-300 text-[10px] font-bold">
              🔴 {isArabic ? 'البحر الأحمر' : 'Red Sea'}
            </span>
          </div>
        </div>

        {/* Floating Bottom Telemetry Bar */}
        {showTerrainHUD && (
          <div className="absolute bottom-3 start-3 end-3 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-amber-500/40 text-white flex flex-wrap items-center justify-between gap-3 shadow-2xl z-30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-300 flex items-center gap-2">
                  <span>{isArabic ? selectedSite.nameAr : selectedSite.nameEn}</span>
                  {selectedSite.isHolyFamilyTrail && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-400 text-black font-black">
                      {isArabic ? 'محطة العائلة المقدسة' : 'Holy Family'}
                    </span>
                  )}
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-3 mt-0.5">
                  <span>GPS: {selectedSite.lat.toFixed(3)}°N, {selectedSite.lng.toFixed(3)}°E</span>
                  <span>|</span>
                  <span>{isArabic ? 'الارتفاع:' : 'Elev:'} {selectedSite.elevationMeters}m</span>
                  <span>|</span>
                  <span className="text-amber-200/90">{isArabic ? selectedSite.terrainTypeAr : selectedSite.terrainTypeEn}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenPhotoModal(selectedSite)}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/30 transition-all cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{isArabic ? 'عرض الصورة عالية الدقة' : 'View 4K Photo'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Selected Site High-Res Photo & Architectural Showcase Card */}
      <div
        className={`mt-5 p-4 md:p-6 rounded-2xl border transition-all ${
          isLight ? 'bg-white border-amber-200 shadow-md' : 'bg-slate-900/60 border-amber-500/20 shadow-lg'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* High-Res Photo Thumbnail with Zoom Trigger */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl group">
            <img
              src={selectedSite.photoUrl}
              alt={isArabic ? selectedSite.nameAr : selectedSite.nameEn}
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90" />
            <button
              onClick={() => handleOpenPhotoModal(selectedSite)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs cursor-pointer"
            >
              <span className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-black flex items-center gap-2 shadow-2xl">
                <Maximize2 className="w-4 h-4" />
                <span>{isArabic ? 'تكبير وفحص الصورة فائقة الدقة' : 'Inspect 4K High-Res View'}</span>
              </span>
            </button>
            <div className="absolute bottom-3 start-3 end-3 text-xs text-amber-200/90 font-medium">
              📷 {isArabic ? selectedSite.photoCaptionAr : selectedSite.photoCaptionEn}
            </div>
          </div>

          {/* Architectural & Spiritual Content */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-amber-500/20">
              <div>
                <span className={`text-xs font-mono font-bold ${isLight ? 'text-amber-900' : 'text-amber-400'}`}>
                  {selectedSite.lat.toFixed(3)}°N, {selectedSite.lng.toFixed(3)}°E • {selectedSite.elevationMeters}m
                </span>
                <h4 className={`text-xl font-black mt-0.5 ${isLight ? 'text-amber-950' : 'text-white'}`}>
                  {isArabic ? selectedSite.nameAr : selectedSite.nameEn}
                </h4>
              </div>
            </div>

            <div className="space-y-2 text-xs md:text-sm">
              <div
                className={`p-3 rounded-xl border ${
                  isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-800/50 border-slate-700/60'
                }`}
              >
                <div className={`font-bold mb-1 flex items-center gap-1.5 ${isLight ? 'text-amber-950' : 'text-amber-400'}`}>
                  <Info className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'الدلالة التاريخية والتأسيس الرهباني' : 'Historical & Monastic Significance'}</span>
                </div>
                <p className={`leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                  {isArabic ? selectedSite.significanceAr : selectedSite.significanceEn}
                </p>
              </div>

              <div
                className={`p-3 rounded-xl border ${
                  isLight ? 'bg-emerald-50/70 border-emerald-200' : 'bg-emerald-950/20 border-emerald-500/30'
                }`}
              >
                <div className={`font-bold mb-1 flex items-center gap-1.5 ${isLight ? 'text-emerald-950' : 'text-emerald-400'}`}>
                  <Mountain className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'الطبيعة الجغرافية والبرية الحاضنة' : 'Topography & Desert Sanctuary'}</span>
                </div>
                <p className={`leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                  {isArabic ? selectedSite.terrainTypeAr : selectedSite.terrainTypeEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Res Lightbox Modal */}
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
