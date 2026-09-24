import React, { useState, useRef, useEffect } from 'react';
import type { Language } from '../../i18n/translations';
import {
  HOLY_SACRAMENTS,
  MONASTIC_MILESTONES,
  GOSPEL_SYNOPTICS,
  AUTHENTIC_CHRISTIAN_SCRIPTURE_RECORDINGS,
  BIOETHICS_TOPICS,
  CHRISTIAN_SCENARIO_QUIZ,
  type HolySacrament,
  type MonasticMilestone,
  type GospelSynopticItem,
  type AuthenticScriptureRecording,
  type BioethicsTopic,
} from '../../data/christianLab/christianLabData';
import {
  Volume2,
  Play,
  Pause,
  Loader2,
  Music,
  CheckCircle2,
  XCircle,
  Sparkles,
  Layers,
  Scale,
  Compass,
  RotateCcw,
  BookOpen,
  Award,
  Brain,
  ShieldCheck,
  Cross,
  Church,
  Scroll,
  HeartHandshake,
  Radio,
  AlertCircle,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Eye,
  Camera,
  Image as ImageIcon,
  Globe,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';
import { RealMonasticSatelliteMap } from './christian/RealMonasticSatelliteMap';
import { HistoricalManuscriptMapViewer } from './christian/HistoricalManuscriptMapViewer';
import { RealSanctuaryPhotoView } from './christian/RealSanctuaryPhotoView';
import { FourEvangelistsHighResView } from './christian/FourEvangelistsHighResView';
import { AncientManuscriptHighResView } from './christian/AncientManuscriptHighResView';
import { HiResImageModal, type HiResImageModalData } from './christian/HiResImageModal';

import antonyPhoto from '../../assets/christianLab/st_antony_monastery_red_sea.jpg';
import natrunPhoto from '../../assets/christianLab/wadi_el_natrun_monastery.jpg';
import sohagPhoto from '../../assets/christianLab/sohag_white_red_monastery.jpg';
import holyFamilyPhoto from '../../assets/christianLab/holy_family_egypt_flight.jpg';
import catherinePhoto from '../../assets/christianLab/st_catherine_sinai.jpg';

interface MilestonePhotoMeta {
  img: string;
  captionAr: string;
  captionEn: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descAr: string;
  descEn: string;
  locationAr: string;
  locationEn: string;
}

const MILESTONE_PHOTOS: Record<string, MilestonePhotoMeta> = {
  milestone_antony: {
    img: antonyPhoto,
    captionAr: 'دير الأنبا أنطونيوس: أسوار الحصن المنيع وواحة النخيل تحت جبل القلزم بالبحر الأحمر',
    captionEn: 'Fortress walls & palm oasis of St. Antony at Mount Clysma by the Red Sea',
    titleAr: 'دير القديس أنطونيوس الكبير (مهد الرهبنة الانفرادية)',
    titleEn: 'Monastery of St. Antony the Great (Anchoritic Cradle)',
    subtitleAr: 'أقدم دير مأهول في العالم في قلب جبال الجلالة القبلية',
    subtitleEn: "World's oldest continuously active monastery in the Red Sea mountains",
    descAr:
      'أنشئ هذا الصرح الرهباني في القرن الرابع الميلادي حول المغارة التي عاش فيها القديس أنطونيوس الكبير فوق قمة جبل القلزم. يضم الدير حصناً أثرياً دفاعياً وكنائس ذات قباب بيزنطية فريدة وبساتين نخيل ونبع ماء عذب يتدفق بأعجوبة وسط الصحراء القاحلة.',
    descEn:
      'Established in the 4th century around the solitary hermitage cave of St. Antony on Mount Clysma. Features fortified defense keeps, Byzantine domes, freshwater springs, and palm groves.',
    locationAr: 'جبل القلزم - الصحراء الشرقية - البحر الأحمر',
    locationEn: 'Mount Clysma, Eastern Desert, Red Sea',
  },
  milestone_macarius: {
    img: natrunPhoto,
    captionAr: 'أديرة برية شيهيت بوادي النطرون: الحصن الدفاعي الأثري وقباب الكنائس الباكرة',
    captionEn: 'Fortified keeps & ancient whitewashed domes of Wadi al-Natrun Monasteries',
    titleAr: 'برية شيهيت وأديرة وادي النطرون الأثرية',
    titleEn: 'Wilderness of Scetis (Wadi al-Natrun Monasteries)',
    subtitleAr: 'مهد الرهبنة شبه التوحدية (أديرة أبو مقار والأنبا بيشوي والسريان والبراموس)',
    subtitleEn: 'Sanctuary of semi-eremitic monasticism in the Scetis Desert',
    descAr:
      'تحتضن برية شيهيت قلاعاً نسكية تاريخية صدت غارات البربر والبدو عبر القرون من خلال حصونها الأثرية المزودة بجسور خشبية متحركة. وتعد مستودعاً هائلاً لكنوز التراث الآبائي والمخطوطات القبطية والسريانية.',
    descEn:
      'The Desert of Scetis houses ancient fortified monasteries with medieval drawbridges that protected monks and priceless patristic codices against nomad raids.',
    locationAr: 'وادي النطرون - الصحراء الغربية',
    locationEn: 'Wadi al-Natrun, Western Desert',
  },
  milestone_shenouda: {
    img: sohagPhoto,
    captionAr: 'الدير الأبيض بسوهاج: الصرح الحجري المستلهم من العمارة الفرعونية وفريسكات القباب',
    captionEn: 'Pharaonic-inspired limestone pylons & painted trefoil apse of the White Monastery',
    titleAr: 'الدير الأبيض ودير الأنبا بيشاي (الدير الأحمر) بسوهاج',
    titleEn: 'The White and Red Monasteries of Sohag',
    subtitleAr: 'صرح العمارة القبطية الصعيدية ومقر ريادة الأدب القبطي للأنبا شنودة',
    subtitleEn: 'Monumental limestone basilica of St. Shenouda the Archimandrite',
    descAr:
      'شُيد الدير الأبيض في القرن الخامس الميلادي بحجارة جيرية بيضاء ضخمة مستوحاة من الصروح والمعابد المصرية القديمة، ويحتوي على أروع هياكل مقوسة ثلاثية (Trefoil Apses) مزدانة بالفريسك القبطي والبيزنطي الملون، وشهد أعظم نهضة للأدب القبطي الصعيدي.',
    descEn:
      'Built in the 5th century using monumental white limestone blocks reflecting ancient Egyptian temple cornices, housing breathtaking painted trefoil apses and the greatest Sahidic library.',
    locationAr: 'غرب سوهاج - صعيد مصر',
    locationEn: 'West of Sohag, Upper Egypt',
  },
  milestone_holy_family: {
    img: holyFamilyPhoto,
    captionAr: 'رحلة العائلة المقدسة في مصر: ملاذ الأمان والبركة الإلهية على ضفاف النيل',
    captionEn: 'The Flight of the Holy Family into Egypt along the Nile at sunset',
    titleAr: 'مسار رحلة العائلة المقدسة في مصر وملاذ الأمان الخالد',
    titleEn: 'The Holy Family Pilgrimage Trail in Egypt',
    subtitleAr: 'تحقيق النبوة الإلهية الخالدة: «مبارك شعبي مصر»',
    subtitleEn: 'Universal Sanctuary fulfilling Isaiah\'s prophecy: "Blessed be Egypt My people"',
    descAr:
      'استضافت مصر السيد المسيح طفلاً مع القديسة مريم ويوسف النجار لأكثر من ثلاث سنوات ونصف، قاطعين مسافة تتجاوز ألفي كيلومتر من رفح والفرما شمالاً، عبر الدلتا ووادي النطرون والقاهرة القديمة ومغارة أبي سرجة، وصولاً إلى دير المحرق بجبل قسقام ودير درنكة بأسيوط.',
    descEn:
      'Egypt provided divine sanctuary to the Christ Child, the Virgin Mary, and St. Joseph for over three years, journeying over 2,000 kilometers from Sinai to Upper Egypt.',
    locationAr: 'مسار مصر التاريخي (سيناء، الدلتا، القاهرة، ووادي النيل)',
    locationEn: 'Trans-Egyptian Trail (Sinai, Delta, Cairo, Nile Valley)',
  },
  milestone_pachomius: {
    img: catherinePhoto,
    captionAr: 'دير سانت كاترين بجنوب سيناء وقلاع الرهبنة التراثية بصعيد مصر',
    captionEn: 'Monastery of St. Catherine beneath Mount Sinai & ancient cenobitic bastions',
    titleAr: 'دير سانت كاترين والشركة الباخومية في صعيد مصر',
    titleEn: 'St. Catherine Monastery & Pachomian Cenobitic Monasticism',
    subtitleAr: 'حصون النسك الجماعي عند أقدام جبل موسى وفي ثنية قنا والأقصر',
    subtitleEn: 'Ancient bastions of communal monasticism in Sinai and Upper Egypt',
    descAr:
      'يجسد دير سانت كاترين بسيناء ومجمعات الأنبا باخوميوس بصعيد مصر (طبنسين وفاو قبلي) أسمى نماذج الشركة الرهبانية والرهبنة الجماعية المنظمة، محتفظين بأندر المخطوطات الإنجيلية في العالم وأشجار العليقة والزيتون المعمرة.',
    descEn:
      'Exemplifies communal cenobitic monasticism in Sinai and Upper Egypt, preserving the Biblical Burning Bush, historic olive groves, and the world\'s oldest continuous libraries.',
    locationAr: 'جنوب سيناء وصعيد مصر (الأقصر وقنا)',
    locationEn: 'South Sinai & Upper Egypt (Luxor & Qena)',
  },
};

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: ChristianStudioTab;
}

export type ChristianStudioTab = 'sacraments' | 'monasticism' | 'synoptics' | 'scriptures' | 'bioethics' | 'quiz';


// ---------------------------------------------------------------------------
// 1. High-Resolution Realistic Sacred Coptic Iconostasis & Sanctuary Schematic
// ---------------------------------------------------------------------------

interface IconostasisProps {
  selectedSacramentId: string;
  onSelectSacrament: (sacrament: HolySacrament) => void;
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

const CopticIconostasisSacramentsVectorSchematic: React.FC<IconostasisProps> = ({
  selectedSacramentId,
  onSelectSacrament,
  isArabic,
  isLight,
  isContrast,
}) => {
  // Sacrament stations mapped with 100% fidelity to HOLY_SACRAMENTS in christianLabData.ts
  const stations: Array<{
    id: string;
    cx: number;
    cy: number;
    titleAr: string;
    titleEn: string;
    matterAr: string;
    graceAr: string;
    matterEn: string;
    graceEn: string;
    symbol: string;
    accentColor: string;
  }> = [
    {
      id: 'sacrament_baptism',
      cx: 100,
      cy: 310,
      titleAr: 'سر المعمودية',
      titleEn: 'Holy Baptism',
      matterAr: 'الماء المصلى عليه بالتغطيس ٣ مرات باسم الثالوث',
      graceAr: 'الميلاد الجديد والخلاص وغفران الخطايا والتبني الإلهي',
      matterEn: 'Consecrated water by triple immersion',
      graceEn: 'Spiritual rebirth, divine adoption & remission of sins',
      symbol: '💧',
      accentColor: '#38bdf8',
    },
    {
      id: 'sacrament_myron',
      cx: 195,
      cy: 245,
      titleAr: 'سر الميرون',
      titleEn: 'Holy Chrismation',
      matterAr: 'زيت الميرون المقدس في ٣٦ رشماً على الجسد والحواس',
      graceAr: 'سكنى الروح القدس وختم الملكية الإلهية وتكريس الهيكل البشري',
      matterEn: 'Holy Myron chrism in 36 sacred anointings',
      graceEn: 'Indwelling of the Holy Spirit & divine seal of ownership',
      symbol: '🕊️',
      accentColor: '#fbbf24',
    },
    {
      id: 'sacrament_confession',
      cx: 310,
      cy: 280,
      titleAr: 'سر التوبة والاعتراف',
      titleEn: 'Confession & Repentance',
      matterAr: 'الإقرار بالخطايا بندم وانسحاق أمام الكاهن ونوال صلاة التحليل',
      graceAr: 'نوال الحل والمصالحة مع الله وغفران الآثام وتجديد الضمير',
      matterEn: 'Contrite confession before priest & liturgical absolution',
      graceEn: 'Reconciliation with God, remission of sins & clean heart',
      symbol: '🗝️',
      accentColor: '#c084fc',
    },
    {
      id: 'sacrament_eucharist',
      cx: 480,
      cy: 195,
      titleAr: 'سر الإفخارستيا',
      titleEn: 'Holy Eucharist',
      matterAr: 'قربان الحمل من القمح النقي وخمر عصير الكرمة الممزوج بالماء',
      graceAr: 'الاتحاد الحقيقي بجسد الرب ودمه الأقدسين وثبات الحياة الأبدية',
      matterEn: 'Pure wheat leavened bread (Qurban) & consecrated wine',
      graceEn: 'True communion with Christ\'s Body & Blood for eternal life',
      symbol: '🍷',
      accentColor: '#ef4444',
    },
    {
      id: 'sacrament_priesthood',
      cx: 650,
      cy: 280,
      titleAr: 'سر الكهنوت',
      titleEn: 'Holy Priesthood',
      matterAr: 'وضع يد الأسقف الشرعي والصلوات والنفخة الروحية الرسولية',
      graceAr: 'السلطان الروحي لمباشرة الأسرار ورعاية شعب الله واستقامة التعليم',
      matterEn: 'Laying on of episcopal hands & apostolic consecration',
      graceEn: 'Apostolic authority to administer mysteries & shepherd flock',
      symbol: '📜',
      accentColor: '#a855f7',
    },
    {
      id: 'sacrament_matrimony',
      cx: 765,
      cy: 245,
      titleAr: 'سر الزيجة',
      titleEn: 'Holy Matrimony',
      matterAr: 'الأكاليل والبرنوس والتبادل الرضائي للعهود المقدسة أمام المذبح',
      graceAr: 'اتحاد الزوجين كجسد واحد في المسيح وبناء الكنيسة المنزلية المباركة',
      matterEn: 'Nuptial crowns, vestments & solemn covenant before Altar',
      graceEn: 'Holy union as one flesh in Christ & domestic church sanctuary',
      symbol: '👑',
      accentColor: '#f472b6',
    },
    {
      id: 'sacrament_unction',
      cx: 860,
      cy: 310,
      titleAr: 'سر مسحة المرضى',
      titleEn: 'Unction of the Sick',
      matterAr: 'زيت الزيتون النقي المصلى عليه بسبع صلوات وإيقاد ٧ فتائل',
      graceAr: 'شفاء الأسقام الروحية والجسدية ونوال مغفرة الخطايا والضعفات',
      matterEn: 'Consecrated olive oil with seven prayers & seven wicks',
      graceEn: 'Bodily & spiritual healing, comfort, and forgiveness',
      symbol: '🕯️',
      accentColor: '#f59e0b',
    },
  ];

  const activeStation =
    stations.find((s) => s.id === selectedSacramentId) || stations[3];

  return (
    <div
      className={`rounded-2xl border p-4 md:p-5 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fdfbf7] via-[#fcf6ea] to-[#f7eed9] border-amber-300/80 shadow-amber-900/10'
          : 'bg-gradient-to-b from-[#0b0c10] via-[#120f18] to-[#1c120c] border-amber-500/40 shadow-amber-950/30'
      }`}
    >
      {/* Studio Header Bar */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b text-xs ${
          isLight ? 'border-amber-300/70' : 'border-amber-500/20'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}
          >
            <Church className="w-4 h-4" />
          </div>
          <div>
            <span
              className={`font-black tracking-wide text-xs md:text-sm ${
                isLight ? 'text-amber-950' : 'text-amber-300'
              }`}
            >
              {isArabic
                ? 'الهيكل القبطي الأرثوذكسي وحامل الأيقونات التراثي • موضع الأسرار الكنسية السبعة'
                : 'Holy Coptic Iconostasis & Sanctuary Schematic • The Seven Sacraments'}
            </span>
            <div
              className={`text-[11px] font-medium ${
                isLight ? 'text-amber-900/80' : 'text-slate-400'
              }`}
            >
              {isArabic
                ? 'مخطط كنسي تاريخي يوضح الارتباط اللاهوتي بين المذبح الأقدس والأسرار الكنسية'
                : 'Architectural ecclesiastical layout detailing sacramental theology centered on the Altar'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold border ${
              isLight
                ? 'bg-amber-200/80 border-amber-400 text-amber-950'
                : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            {isArabic ? 'اضغط على أي سر للإضاءة والبيان' : 'Click any sacrament node to inspect'}
          </span>
        </div>
      </div>

      {/* Realistic Sacred Sanctuary & Iconostasis SVG Canvas */}
      <div className="relative w-full aspect-[16/8] min-h-[340px] mt-3 flex items-center justify-center">
        <svg
          viewBox="0 0 960 460"
          className="w-full h-full select-none"
          style={{
            filter: isContrast ? 'none' : 'drop-shadow(0 4px 20px rgba(180, 83, 9, 0.12))',
          }}
        >
          <defs>
            {/* Sanctuary Wall Gradients */}
            <linearGradient id="sanctuaryWallLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fdf8ed" />
              <stop offset="40%" stopColor="#faedd3" />
              <stop offset="100%" stopColor="#f0dbc0" />
            </linearGradient>

            <linearGradient id="sanctuaryWallDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a0c14" />
              <stop offset="50%" stopColor="#15111a" />
              <stop offset="100%" stopColor="#22140a" />
            </linearGradient>

            {/* Apse Niche Gradient (حضن الآب) */}
            <radialGradient id="eastApseAura" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity={isLight ? '0.7' : '0.4'} />
              <stop offset="45%" stopColor="#f59e0b" stopOpacity={isLight ? '0.4' : '0.2'} />
              <stop offset="85%" stopColor="#b45309" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
            </radialGradient>

            {/* Carved Walnut Wood Grain for Iconostasis */}
            <linearGradient id="carvedWoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="35%" stopColor="#78350f" />
              <stop offset="70%" stopColor="#451a03" />
              <stop offset="100%" stopColor="#271003" />
            </linearGradient>

            <linearGradient id="woodArchitraveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="40%" stopColor="#451a03" />
              <stop offset="80%" stopColor="#2b1103" />
              <stop offset="100%" stopColor="#1a0a02" />
            </linearGradient>

            {/* Byzantine Coptic Gold Leaf */}
            <linearGradient id="copticGoldGilding" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="25%" stopColor="#fde047" />
              <stop offset="60%" stopColor="#d97706" />
              <stop offset="85%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            {/* Liturgical Royal Crimson Velvet Veil (ستر الهيكل) */}
            <linearGradient id="royalCurtainVelvet" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#991b1b" />
              <stop offset="30%" stopColor="#b91c1c" />
              <stop offset="70%" stopColor="#7f1d1d" />
              <stop offset="100%" stopColor="#450a0a" />
            </linearGradient>

            {/* Altar Pure White Linen with Embroidery (الكسوة الحريرية) */}
            <linearGradient id="altarSilkLinen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            {/* Liturgical Candle Light Glow */}
            <radialGradient id="candleFlameGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </radialGradient>

            {/* Marble Synthronon Steps */}
            <linearGradient id="marbleStepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isLight ? '#cbd5e1' : '#1e293b'} />
              <stop offset="50%" stopColor={isLight ? '#e2e8f0' : '#334155'} />
              <stop offset="100%" stopColor={isLight ? '#cbd5e1' : '#1e293b'} />
            </linearGradient>

            {/* Filigree Glow Filter */}
            <filter id="holySanctuaryGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Sanctuary Background Canvas */}
          <rect
            x="10"
            y="10"
            width="940"
            height="440"
            rx="16"
            fill={isLight ? 'url(#sanctuaryWallLight)' : 'url(#sanctuaryWallDark)'}
            stroke={isLight ? '#d97706' : '#78350f'}
            strokeWidth="1.5"
            strokeOpacity={isLight ? 0.6 : 0.4}
          />

          {/* 2. Central Sanctuary Niche: The East Apse ("حضن الآب - الشرقية") */}
          <path
            d="M 330,420 L 330,150 Q 480,45 630,150 L 630,420 Z"
            fill="url(#eastApseAura)"
            stroke={isLight ? '#b45309' : '#d97706'}
            strokeWidth="2.5"
            strokeOpacity={0.8}
          />

          {/* Romanesque Masonry Arch Voussoirs around East Apse */}
          <path
            d="M 320,155 Q 480,35 640,155"
            fill="none"
            stroke={isLight ? '#92400e' : '#f59e0b'}
            strokeWidth="5"
            strokeDasharray="16 6"
            strokeOpacity={0.5}
          />

          {/* Divine Pantocrator Radiance Starburst (المسيح ضابط الكل) */}
          <circle cx="480" cy="115" r="50" fill="url(#candleFlameGlow)" opacity={isLight ? 0.8 : 0.5} />
          <circle cx="480" cy="115" r="38" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
          
          {/* East Wall Coptic Cross */}
          <g transform="translate(480, 115)">
            <rect x="-3" y="-22" width="6" height="44" rx="2" fill="#fde047" stroke="#78350f" strokeWidth="1" />
            <rect x="-18" y="-10" width="36" height="6" rx="2" fill="#fde047" stroke="#78350f" strokeWidth="1" />
            {/* Trefoil endings */}
            <circle cx="0" cy="-24" r="3" fill="#fde047" />
            <circle cx="-20" cy="-7" r="3" fill="#fde047" />
            <circle cx="20" cy="-7" r="3" fill="#fde047" />
            <circle cx="0" cy="24" r="3" fill="#fde047" />
            <circle cx="0" cy="-7" r="5" fill="#d97706" />
          </g>

          {/* East Apse Label Badge (High Contrast in all themes!) */}
          <rect
            x="400"
            y="148"
            width="160"
            height="20"
            rx="10"
            fill={isLight ? '#ffffff' : '#0f172a'}
            stroke={isLight ? '#b45309' : '#f59e0b'}
            strokeWidth="1.2"
          />
          <text
            x="480"
            y="162"
            textAnchor="middle"
            fill={isLight ? '#451a03' : '#fde047'}
            fontSize="9"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            {isArabic ? 'حضن الآب • الشرقية المقدسة' : 'Synthronon • East Apse'}
          </text>

          {/* 3. Seven Hanging Vigil Oil Lamps (قناديل الهيكل السبعة الذهبية) */}
          {[-75, -50, -25, 0, 25, 50, 75].map((xOffset, idx) => (
            <g key={`lamp-${idx}`} transform={`translate(${480 + xOffset}, 80)`}>
              {/* Chain links */}
              <line x1="0" y1="-35" x2="0" y2="0" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="2 2" />
              {/* Brass Oil Bowl */}
              <ellipse cx="0" cy="5" rx="6" ry="3.5" fill="#d97706" stroke="#78350f" strokeWidth="0.7" />
              <path d="M -6,5 Q 0,14 6,5 Z" fill="#b45309" stroke="#78350f" strokeWidth="0.7" />
              {/* Candle Flame & Warm Halo */}
              <circle cx="0" cy="1" r="7" fill="url(#candleFlameGlow)" opacity={0.8} />
              <ellipse cx="0" cy="0" rx="1.5" ry="3.5" fill="#fde047" />
            </g>
          ))}

          {/* 4. Stepped Marble Synthronon (درج الرتب الكهنوتية) */}
          <path
            d="M 360,420 L 600,420 L 590,395 L 370,395 Z"
            fill="url(#marbleStepGrad)"
            stroke="#78350f"
            strokeWidth="1"
          />
          <path
            d="M 380,395 L 580,395 L 570,375 L 390,375 Z"
            fill="url(#marbleStepGrad)"
            stroke="#78350f"
            strokeWidth="1"
            opacity="0.85"
          />
          <path
            d="M 400,375 L 560,375 L 550,360 L 410,360 Z"
            fill="url(#marbleStepGrad)"
            stroke="#78350f"
            strokeWidth="1"
            opacity="0.7"
          />

          {/* 5. Northern Side Sanctuary (المذبح البحري - الشمالي) */}
          <path
            d="M 40,420 L 40,210 Q 185,150 320,210 L 320,420 Z"
            fill={isLight ? '#faf4e6' : '#0e121d'}
            stroke={isLight ? '#b45309' : '#78350f'}
            strokeWidth="1.5"
            strokeOpacity={0.7}
          />
          <rect
            x="105"
            y="190"
            width="160"
            height="22"
            rx="11"
            fill={isLight ? '#ffffff' : '#0f172a'}
            stroke={isLight ? '#b45309' : '#f59e0b'}
            strokeWidth="1.2"
          />
          <text
            x="185"
            y="204"
            textAnchor="middle"
            fill={isLight ? '#451a03' : '#fde047'}
            fontSize="9"
            fontWeight="900"
          >
            {isArabic ? 'المذبح البحري (الشمالي)' : 'Northern Sanctuary (Bahrí)'}
          </text>

          {/* 6. Southern Side Sanctuary (المذبح القبلي - الجنوبي) */}
          <path
            d="M 640,420 L 640,210 Q 775,150 920,210 L 920,420 Z"
            fill={isLight ? '#faf4e6' : '#0e121d'}
            stroke={isLight ? '#b45309' : '#78350f'}
            strokeWidth="1.5"
            strokeOpacity={0.7}
          />
          <rect
            x="705"
            y="190"
            width="160"
            height="22"
            rx="11"
            fill={isLight ? '#ffffff' : '#0f172a'}
            stroke={isLight ? '#b45309' : '#f59e0b'}
            strokeWidth="1.2"
          />
          <text
            x="785"
            y="204"
            textAnchor="middle"
            fill={isLight ? '#451a03' : '#fde047'}
            fontSize="9"
            fontWeight="900"
          >
            {isArabic ? 'المذبح القبلي (الجنوبي)' : 'Southern Sanctuary (Qeblí)'}
          </text>

          {/* 7. Central Altar Canopy / Ciborium (قبة المذبح الخشبية / السيبل) */}
          <path
            d="M 400,240 Q 480,185 560,240"
            fill="none"
            stroke="url(#copticGoldGilding)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Ciborium Columns */}
          <rect x="408" y="240" width="8" height="110" fill="url(#marbleStepGrad)" stroke="#78350f" strokeWidth="0.8" rx="2" />
          <rect x="544" y="240" width="8" height="110" fill="url(#marbleStepGrad)" stroke="#78350f" strokeWidth="0.8" rx="2" />

          {/* 8. The Holy Altar (المذبح المقدس الأوسط - مذبح عمانوئيل) */}
          {/* Altar Pedestal */}
          <rect x="410" y="270" width="140" height="110" rx="4" fill="url(#altarSilkLinen)" stroke="#b45309" strokeWidth="2" />
          {/* Crimson Liturgical Frontal Cloth */}
          <rect x="420" y="295" width="120" height="85" rx="3" fill="url(#royalCurtainVelvet)" stroke="#f59e0b" strokeWidth="1.2" />
          
          {/* Embroidered Golden Coptic Cross on Altar Frontal */}
          <g transform="translate(480, 335)">
            <rect x="-3" y="-22" width="6" height="44" fill="#fde047" rx="1" />
            <rect x="-16" y="-10" width="32" height="6" fill="#fde047" rx="1" />
            <circle cx="0" cy="-10" r="4" fill="#d97706" />
            <circle cx="-16" cy="-7" r="2.5" fill="#fde047" />
            <circle cx="16" cy="-7" r="2.5" fill="#fde047" />
            <circle cx="0" cy="-24" r="2.5" fill="#fde047" />
            <circle cx="0" cy="24" r="2.5" fill="#fde047" />
          </g>

          {/* Eucharistic Holy Vessels atop the Altar */}
          {/* The Holy Chalice (الكأس الإلهي) */}
          <g transform="translate(470, 275)">
            <path d="M -7,-12 L 7,-12 Q 7,-2 0,0 Q -7,-2 -7,-12 Z" fill="url(#copticGoldGilding)" stroke="#78350f" strokeWidth="0.8" />
            <line x1="0" y1="0" x2="0" y2="7" stroke="#d97706" strokeWidth="2" />
            <ellipse cx="0" cy="7" rx="5" ry="2" fill="url(#copticGoldGilding)" stroke="#78350f" strokeWidth="0.8" />
          </g>

          {/* The Holy Paten & Star (الصينية والنجم) */}
          <g transform="translate(495, 276)">
            <ellipse cx="0" cy="2" rx="9" ry="3" fill="url(#copticGoldGilding)" stroke="#78350f" strokeWidth="0.8" />
            <circle cx="0" cy="-4" r="3.5" fill="#ffffff" stroke="#d97706" strokeWidth="0.8" />
            <path d="M -4,-8 L 4,-8 L 0,-1 Z" fill="none" stroke="#f59e0b" strokeWidth="0.8" />
          </g>

          {/* Two Liturgical Candles flanking Altar with Warm Glow */}
          <g transform="translate(418, 272)">
            <rect x="-2" y="-18" width="4" height="18" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />
            <circle cx="0" cy="-21" r="8" fill="url(#candleFlameGlow)" />
            <ellipse cx="0" cy="-21" rx="1.5" ry="3.5" fill="#fde047" />
          </g>
          <g transform="translate(542, 272)">
            <rect x="-2" y="-18" width="4" height="18" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />
            <circle cx="0" cy="-21" r="8" fill="url(#candleFlameGlow)" />
            <ellipse cx="0" cy="-21" rx="1.5" ry="3.5" fill="#fde047" />
          </g>

          {/* 9. The Holy Coptic Iconostasis Architrave (حامل الأيقونات الخشبي الأثري) */}
          <rect
            x="20"
            y="410"
            width="920"
            height="26"
            rx="3"
            fill="url(#woodArchitraveGrad)"
            stroke="#b45309"
            strokeWidth="2"
          />

          {/* Inlaid Mother-of-Pearl Cross Pattern along the Architrave */}
          {Array.from({ length: 23 }).map((_, i) => (
            <g key={`inlay-${i}`} transform={`translate(${45 + i * 39}, 423)`}>
              <rect x="-1" y="-5" width="2" height="10" fill="#fde68a" opacity="0.75" />
              <rect x="-4" y="-1" width="8" height="2" fill="#fde68a" opacity="0.75" />
            </g>
          ))}

          {/* High-Contrast Architrave Title Plaque */}
          <rect
            x="310"
            y="414"
            width="340"
            height="18"
            rx="4"
            fill="#1a0a02"
            stroke="#f59e0b"
            strokeWidth="1.2"
          />
          <text
            x="480"
            y="426.5"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="9.5"
            fontWeight="900"
            letterSpacing="1.5"
          >
            {isArabic
              ? 'حامل الأيقونات المقدس • THE HOLY COPTIC ICONOSTASIS'
              : 'THE HOLY COPTIC ICONOSTASIS • CATHEDRAL SANCTUARY'}
          </text>

          {/* 10. The Royal Doors (الباب الملوكي) & Liturgical Curtain (ستر الهيكل) */}
          {/* Outer Carved Door Frame */}
          <rect
            x="380"
            y="210"
            width="200"
            height="200"
            fill="none"
            stroke="url(#copticGoldGilding)"
            strokeWidth="4"
            rx="8"
          />

          {/* Liturgical Crimson Silk Curtain (ستر الهيكل المطرز بالذهب) */}
          <path
            d="M 384,215 Q 405,300 392,410 L 420,410 Q 435,300 410,215 Z"
            fill="url(#royalCurtainVelvet)"
            stroke="#5c0915"
            strokeWidth="1.2"
          />
          <path
            d="M 576,215 Q 555,300 568,410 L 540,410 Q 525,300 550,215 Z"
            fill="url(#royalCurtainVelvet)"
            stroke="#5c0915"
            strokeWidth="1.2"
          />
          {/* Golden Curtain Tassels */}
          <circle cx="406" cy="408" r="3.5" fill="#fde047" stroke="#78350f" strokeWidth="0.8" />
          <circle cx="554" cy="408" r="3.5" fill="#fde047" stroke="#78350f" strokeWidth="0.8" />

          {/* 11. Top Pinnacle: The Golgotha Cross & Intercessors (صلبوت الجلجثة) */}
          <g transform="translate(480, 52)">
            {/* Divine Halo */}
            <circle cx="0" cy="0" r="28" fill="url(#eastApseAura)" opacity="0.9" />
            <circle cx="0" cy="0" r="24" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />

            {/* Carved Golden Cross */}
            <rect x="-3.5" y="-24" width="7" height="48" rx="2" fill="url(#copticGoldGilding)" stroke="#78350f" strokeWidth="1" />
            <rect x="-20" y="-13" width="40" height="7" rx="2" fill="url(#copticGoldGilding)" stroke="#78350f" strokeWidth="1" />
            {/* Trefoil endings */}
            <circle cx="0" cy="-26" r="3.5" fill="#fde047" stroke="#78350f" strokeWidth="0.8" />
            <circle cx="-22" cy="-9.5" r="3.5" fill="#fde047" stroke="#78350f" strokeWidth="0.8" />
            <circle cx="22" cy="-9.5" r="3.5" fill="#fde047" stroke="#78350f" strokeWidth="0.8" />
            <circle cx="0" cy="26" r="3.5" fill="#fde047" stroke="#78350f" strokeWidth="0.8" />

            {/* High-Contrast Flanking Medallions: St. Mary & St. John */}
            {/* St. Mary Icon Badge (Left) */}
            <g transform="translate(-48, 14)">
              <circle cx="0" cy="0" r="12" fill="url(#copticGoldGilding)" stroke="#78350f" strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fontSize="10">👩‍🍼</text>
              <rect
                x="-36"
                y="14"
                width="72"
                height="17"
                rx="8.5"
                fill={isLight ? '#ffffff' : '#0f172a'}
                stroke={isLight ? '#b45309' : '#f59e0b'}
                strokeWidth="1.2"
              />
              <text
                x="0"
                y="26"
                textAnchor="middle"
                fill={isLight ? '#451a03' : '#fef08a'}
                fontSize="8"
                fontWeight="900"
              >
                {isArabic ? 'العذراء مريم' : 'St. Mary'}
              </text>
            </g>

            {/* St. John Icon Badge (Right) */}
            <g transform="translate(48, 14)">
              <circle cx="0" cy="0" r="12" fill="url(#copticGoldGilding)" stroke="#78350f" strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fontSize="10">📖</text>
              <rect
                x="-36"
                y="14"
                width="72"
                height="17"
                rx="8.5"
                fill={isLight ? '#ffffff' : '#0f172a'}
                stroke={isLight ? '#b45309' : '#f59e0b'}
                strokeWidth="1.2"
              />
              <text
                x="0"
                y="26"
                textAnchor="middle"
                fill={isLight ? '#451a03' : '#fef08a'}
                fontSize="8"
                fontWeight="900"
              >
                {isArabic ? 'يوحنا الحبيب' : 'St. John'}
              </text>
            </g>
          </g>

          {/* 12. Apostles Tier Gallery (صف الرسل الإثني عشر وأيقونة العشاء السري) */}
          <rect
            x="140"
            y="94"
            width="680"
            height="26"
            rx="5"
            fill="url(#woodArchitraveGrad)"
            stroke="#b45309"
            strokeWidth="1.5"
          />

          {/* Apostles Icon Medallions Row */}
          {Array.from({ length: 12 }).map((_, i) => {
            const posX = i < 6 ? 165 + i * 36 : 595 + (i - 6) * 36;
            return (
              <g key={`apostle-${i}`} transform={`translate(${posX}, 107)`}>
                <circle cx="0" cy="0" r="8" fill="#d97706" stroke="#fde047" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="6" fill="#451a03" />
                <circle cx="0" cy="-1.5" r="2" fill="#fde047" />
                <path d="M -3,5 Q 0,1 3,5 Z" fill="#fde047" />
              </g>
            );
          })}

          {/* Central Last Supper Badge */}
          <rect
            x="385"
            y="97"
            width="190"
            height="20"
            rx="10"
            fill={isLight ? '#ffffff' : '#0f172a'}
            stroke={isLight ? '#b45309' : '#fde047'}
            strokeWidth="1.2"
          />
          <text
            x="480"
            y="111"
            textAnchor="middle"
            fill={isLight ? '#451a03' : '#fef08a'}
            fontSize="9"
            fontWeight="900"
          >
            {isArabic ? 'العشاء السري وصف الرسل الأطهار' : 'The Last Supper & The 12 Apostles Tier'}
          </text>

          {/* 13. Radiant Streams of Sacramental Grace from Altar to Each Sacrament */}
          {stations.map((st) => {
            const isSel = st.id === selectedSacramentId;
            return (
              <path
                key={`stream-${st.id}`}
                d={`M 480,240 Q ${(480 + st.cx) / 2},${(240 + st.cy) / 2 - 25} ${st.cx},${st.cy}`}
                fill="none"
                stroke={isSel ? '#f59e0b' : isLight ? '#b45309' : '#78350f'}
                strokeWidth={isSel ? 3 : 1.2}
                strokeDasharray={isSel ? '5 3' : '3 3'}
                strokeOpacity={isSel ? 1 : 0.4}
                className={isSel ? 'animate-pulse' : undefined}
              />
            );
          })}

          {/* 14. Seven Interactive Sacred Sacrament Medallions */}
          {stations.map((st) => {
            const isSel = st.id === selectedSacramentId;
            const sacramentData = HOLY_SACRAMENTS.find((s) => s.id === st.id);

            return (
              <g
                key={st.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => {
                  if (sacramentData) onSelectSacrament(sacramentData);
                }}
              >
                {/* Luminous Pulsing Halo when active */}
                {isSel && (
                  <>
                    <circle cx={st.cx} cy={st.cy} r="36" fill="url(#candleFlameGlow)" opacity="0.9" />
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r="28"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                    />
                  </>
                )}

                {/* Outer Gilded Filigree Ring */}
                <circle
                  cx={st.cx}
                  cy={st.cy}
                  r={isSel ? '22' : '17'}
                  fill="url(#copticGoldGilding)"
                  stroke={isSel ? '#ffffff' : '#78350f'}
                  strokeWidth={isSel ? 2.5 : 1.2}
                  filter={isSel ? 'url(#holySanctuaryGlow)' : undefined}
                />

                {/* Inner Jewel Core */}
                <circle
                  cx={st.cx}
                  cy={st.cy}
                  r={isSel ? '17' : '13'}
                  fill={isSel ? '#b45309' : isLight ? '#ffffff' : '#1e1b2e'}
                  stroke={st.accentColor}
                  strokeWidth="1.2"
                />

                {/* Liturgical Symbol */}
                <text
                  x={st.cx}
                  y={st.cy + (isSel ? 6 : 5)}
                  textAnchor="middle"
                  fontSize={isSel ? '16' : '13'}
                  className="pointer-events-none"
                >
                  {st.symbol}
                </text>

                {/* High-Contrast Sacrament Label Card below node (WCAG AAA in all modes!) */}
                <rect
                  x={st.cx - 52}
                  y={st.cy + (isSel ? 26 : 22)}
                  width="104"
                  height="22"
                  rx="11"
                  fill={
                    isSel
                      ? '#b45309'
                      : isLight
                      ? '#ffffff'
                      : '#0f172a'
                  }
                  stroke={
                    isSel
                      ? '#fde047'
                      : isLight
                      ? '#b45309'
                      : '#475569'
                  }
                  strokeWidth={isSel ? 2 : 1.2}
                />
                <text
                  x={st.cx}
                  y={st.cy + (isSel ? 40.5 : 36.5)}
                  textAnchor="middle"
                  fill={
                    isSel
                      ? '#ffffff'
                      : isLight
                      ? '#271003'
                      : '#f8fafc'
                  }
                  fontSize="9"
                  fontWeight="900"
                  fontFamily="sans-serif"
                >
                  {isArabic ? st.titleAr : st.titleEn}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Liturgical Theological Details Banner (Fixed contrast in Light, Dark, High-Contrast) */}
      <div
        className={`mt-4 p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 text-xs transition-all ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-gradient-to-r from-amber-50 via-white to-amber-100/70 border-amber-300 text-slate-900 shadow-sm'
            : 'bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-900/30 border-amber-500/30 text-amber-100'
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl font-bold border shrink-0 shadow-md ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-950'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}
          >
            {activeStation.symbol}
          </span>
          <div>
            <div
              className={`font-black text-sm md:text-base flex items-center gap-2 ${
                isLight ? 'text-amber-950' : 'text-amber-300'
              }`}
            >
              <span>{isArabic ? activeStation.titleAr : activeStation.titleEn}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                  isLight
                    ? 'bg-amber-200 border-amber-400 text-amber-950'
                    : 'bg-amber-500/20 border-amber-500/30 text-amber-400'
                }`}
              >
                ✝️ {isArabic ? 'سر كنسي مقرر' : 'Accredited Mystery'}
              </span>
            </div>
            <div className={`text-xs mt-1 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
              <strong className={isLight ? 'text-amber-900 font-black' : 'text-amber-400 font-bold'}>
                {isArabic ? 'المادة المنظورة: ' : 'Visible Sign: '}
              </strong>
              {isArabic ? activeStation.matterAr : activeStation.matterEn}
            </div>
          </div>
        </div>

        <div className="max-w-md text-start md:text-end">
          <div className={`text-xs ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
            <strong className={isLight ? 'text-emerald-800 font-black' : 'text-emerald-400 font-bold'}>
              {isArabic ? 'النعمة الإلهية غير المنظورة: ' : 'Invisible Grace: '}
            </strong>
            <span>{isArabic ? activeStation.graceAr : activeStation.graceEn}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 2. High-Resolution Realistic Sacred Egyptian Monastic Heritage Map Schematic
// ---------------------------------------------------------------------------

interface MonasticMapProps {
  selectedMilestoneId: string;
  onSelectMilestone: (milestone: MonasticMilestone) => void;
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

const EgyptianMonasticHeritageMapSchematic: React.FC<MonasticMapProps> = ({
  selectedMilestoneId,
  onSelectMilestone,
  isArabic,
  isLight,
  isContrast,
}) => {
  // Synchronized directly with MONASTIC_MILESTONES IDs from christianLabData.ts
  const monasticHubs: Array<{
    id: string;
    milestoneId: string;
    x: number;
    y: number;
    titleAr: string;
    titleEn: string;
    monasteriesAr: string;
    monasteriesEn: string;
    leaderAr: string;
    leaderEn: string;
    eraAr: string;
    eraEn: string;
  }> = [
    {
      id: 'alexandria_catechetical',
      milestoneId: 'milestone_holy_family', // Shares early era anchor
      x: 320,
      y: 90,
      titleAr: 'الإسكندرية (مدرسة اللاهوت وكرسي مارمرقس)',
      titleEn: 'Alexandria & Catechetical School',
      monasteriesAr: 'مدرسة الإسكندرية اللاهوتية وكرسي مارمرقس الرسول',
      monasteriesEn: 'Catechetical School & Patriarchal See of St. Mark',
      leaderAr: 'مارمرقس الإنجيلي، بنتينوس، وكيرلس الكبير',
      leaderEn: 'St. Mark the Apostle, Pantaenus, & St. Cyril',
      eraAr: 'فجر المسيحية (القرن الأول - الخامس م)',
      eraEn: '1st–5th Century AD',
    },
    {
      id: 'scetis_natrun',
      milestoneId: 'milestone_macarius',
      x: 380,
      y: 155,
      titleAr: 'برية شيهيت ووادي النطرون',
      titleEn: 'Wilderness of Scetis (Wadi El-Natrun)',
      monasteriesAr: 'أديرة أبو مقار، الأنبا بيشوي، السريان، والبراموس',
      monasteriesEn: 'St. Macarius, St. Bishoy, Surian, and Baramous',
      leaderAr: 'القديس مقار الكبير (أبو رهبنة وادي النطرون)',
      leaderEn: 'St. Macarius the Great & St. Bishoy',
      eraAr: 'القرن الرابع الميلادي (٣٠٠ - ٣٩١م)',
      eraEn: '4th Century AD (c. 300–391 AD)',
    },
    {
      id: 'red_sea_galala',
      milestoneId: 'milestone_antony',
      x: 650,
      y: 235,
      titleAr: 'صحراء البحر الأحمر وجبل القلزم',
      titleEn: 'Red Sea: Mt. Clysma & Galala',
      monasteriesAr: 'دير الأنبا أنطونيوس ودير الأنبا بولا أول السواح',
      monasteriesEn: 'St. Antony & St. Paul the Hermit Monasteries',
      leaderAr: 'القديس أنطونيوس الكبير (أبو الرهبان في العالم)',
      leaderEn: 'St. Antony the Great (Father of Monks)',
      eraAr: 'القرن الثالث والرابع م (٢٥١ - ٣٥٦م)',
      eraEn: '3rd–4th Century AD (c. 251–356 AD)',
    },
    {
      id: 'sohag_white_red',
      milestoneId: 'milestone_shenouda',
      x: 540,
      y: 310,
      titleAr: 'سوهاج (الدير الأبيض والدير الأحمر)',
      titleEn: 'Sohag: White & Red Monasteries',
      monasteriesAr: 'دير الأنبا شنودة رئيس المتوحدين والدير الأحمر',
      monasteriesEn: 'White & Red Monasteries of St. Shenouda',
      leaderAr: 'الأنبا شنودة رئيس المتوحدين (عميد الأدب القبطي)',
      leaderEn: 'St. Shenouda the Archimandrite',
      eraAr: 'القرن الرابع والخامس م (٣٤٨ - ٤٦٦م)',
      eraEn: '4th–5th Century AD (c. 348–466 AD)',
    },
    {
      id: 'thebaid_pachomian',
      milestoneId: 'milestone_pachomius',
      x: 585,
      y: 365,
      titleAr: 'الصعيد وإقليم طيبة (الشركة الباخومية)',
      titleEn: 'Upper Egypt & Thebaid (Koinonia)',
      monasteriesAr: 'أديرة طبنسين، دندرة، إشنى، وفاو قبلي',
      monasteriesEn: 'Tabennisi, Faw Qibli, Denderah, and Luxor',
      leaderAr: 'القديس باخوميوس (أب الشركة الرهبانية)',
      leaderEn: 'St. Pachomius (Father of Cenobitic Monasticism)',
      eraAr: 'القرن الرابع الميلادي (٢٩٢ - ٣٤٦م)',
      eraEn: '4th Century AD (c. 292–346 AD)',
    },
  ];

  const activeHub =
    monasticHubs.find((h) => h.milestoneId === selectedMilestoneId) || monasticHubs[1];

  return (
    <div
      className={`rounded-2xl border p-4 md:p-5 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fdfbf7] via-[#fbf5e6] to-[#f4e8cf] border-amber-300/80 shadow-amber-900/10'
          : 'bg-gradient-to-b from-[#0b0c10] via-[#120f18] to-[#1c120c] border-amber-500/40 shadow-amber-950/30'
      }`}
    >
      {/* Map Header */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b text-xs ${
          isLight ? 'border-amber-300/70' : 'border-amber-500/20'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}
          >
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span
              className={`font-black tracking-wide text-xs md:text-sm ${
                isLight ? 'text-amber-950' : 'text-amber-300'
              }`}
            >
              {isArabic
                ? 'الخريطة التاريخية المقدسة لمهد الرهبنة القبطية وبراري مصر ومسار العائلة المقدسة'
                : 'Sacred Historical Cartography of Egyptian Coptic Monastic Wilderness & Holy Family Trail'}
            </span>
            <div
              className={`text-[11px] font-medium ${
                isLight ? 'text-amber-900/80' : 'text-slate-400'
              }`}
            >
              {isArabic
                ? 'وثيقة جغرافية تاريخية توضح مراكز الآباء الرواد ومسارات التبتل والنسك'
                : 'Historical monastic atlas depicting founding desert fathers, ancient monasteries & pilgrimage trails'}
            </div>
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${
            isLight
              ? 'bg-amber-200/80 border-amber-400 text-amber-950'
              : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
          }`}
        >
          COPTIC-MONASTIC-ATLAS
        </span>
      </div>

      {/* Realistic Sacred Cartography Canvas */}
      <div className="relative w-full aspect-[16/8] min-h-[350px] mt-3 flex items-center justify-center">
        <svg
          viewBox="0 0 960 460"
          className="w-full h-full select-none"
          style={{
            filter: isContrast ? 'none' : 'drop-shadow(0 4px 20px rgba(180, 83, 9, 0.12))',
          }}
        >
          <defs>
            {/* Ancient Vellum / Papyrus Parchment Gradients */}
            <linearGradient id="mapParchmentLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdf8ec" />
              <stop offset="50%" stopColor="#f7eed8" />
              <stop offset="100%" stopColor="#edd8b4" />
            </linearGradient>

            <linearGradient id="mapParchmentDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#090d16" />
              <stop offset="50%" stopColor="#141824" />
              <stop offset="100%" stopColor="#1c1810" />
            </linearGradient>

            {/* Sea & Water Gradients */}
            <linearGradient id="seaWaterLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>

            <linearGradient id="seaWaterDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0c1e33" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>

            {/* Nile Green Delta Oasis */}
            <linearGradient id="nileDeltaFlora" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#059669" stopOpacity={isLight ? '0.35' : '0.45'} />
              <stop offset="100%" stopColor="#047857" stopOpacity={isLight ? '0.5' : '0.6'} />
            </linearGradient>

            {/* Sacred Compass Rose Gold */}
            <radialGradient id="compassGoldGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
          </defs>

          {/* 1. Map Base Canvas with Ancient Manuscript Border */}
          <rect
            x="10"
            y="10"
            width="940"
            height="440"
            rx="16"
            fill={isLight ? 'url(#mapParchmentLight)' : 'url(#mapParchmentDark)'}
            stroke={isLight ? '#b45309' : '#d97706'}
            strokeWidth="2"
            strokeOpacity={isLight ? 0.7 : 0.5}
          />

          {/* Ornamental Inner Border with Classical Corner Notches */}
          <rect
            x="20"
            y="20"
            width="920"
            height="420"
            rx="12"
            fill="none"
            stroke={isLight ? '#92400e' : '#f59e0b'}
            strokeWidth="0.8"
            strokeDasharray="6 3"
            strokeOpacity={0.6}
          />

          {/* 2. Mediterranean Sea Basin (شمال مصر) */}
          <path
            d="M 20,20 L 940,20 L 940,95 Q 850,92 780,90 Q 680,105 600,105 Q 520,115 480,140 Q 420,110 350,95 Q 260,85 140,88 L 20,90 Z"
            fill={isLight ? 'url(#seaWaterLight)' : 'url(#seaWaterDark)'}
            stroke={isLight ? '#0284c7' : '#38bdf8'}
            strokeWidth="1.5"
          />

          {/* Mediterranean Wave Stippling & High-Contrast Banner */}
          <rect
            x="130"
            y="35"
            width="200"
            height="24"
            rx="12"
            fill={isLight ? '#0369a1' : '#0c2747'}
            stroke={isLight ? '#bae6fd' : '#38bdf8'}
            strokeWidth="1"
          />
          <text
            x="230"
            y="51"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10"
            fontWeight="900"
            letterSpacing="0.8"
          >
            {isArabic ? 'البحر الأبيض المتوسط' : 'Mediterranean Sea'}
          </text>

          {/* 3. Red Sea Basin & Gulfs (البحر الأحمر وخليج السويس والعقبة) */}
          <path
            d="M 580,175 L 640,240 Q 700,320 760,420 L 890,420 L 800,280 Q 740,210 680,150 Z"
            fill={isLight ? 'url(#seaWaterLight)' : 'url(#seaWaterDark)'}
            stroke={isLight ? '#0284c7' : '#38bdf8'}
            strokeWidth="1.5"
          />
          {/* Gulf of Aqaba Branch */}
          <path
            d="M 720,175 L 755,230 L 775,225 L 740,170 Z"
            fill={isLight ? 'url(#seaWaterLight)' : 'url(#seaWaterDark)'}
            stroke={isLight ? '#0284c7' : '#38bdf8'}
            strokeWidth="1"
          />

          {/* Red Sea Label Banner */}
          <rect
            x="760"
            y="330"
            width="150"
            height="22"
            rx="11"
            fill={isLight ? '#0369a1' : '#0c2747'}
            stroke={isLight ? '#bae6fd' : '#38bdf8'}
            strokeWidth="1"
          />
          <text
            x="835"
            y="345"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10"
            fontWeight="900"
          >
            {isArabic ? 'البحر الأحمر' : 'Red Sea'}
          </text>

          {/* 4. Sinai Peninsula Mountainous Plateau (شبه جزيرة سيناء وجبل موسى) */}
          <path
            d="M 680,150 L 720,175 L 760,230 L 640,240 Z"
            fill={isLight ? '#f5d0a9' : '#2b1b17'}
            stroke={isLight ? '#d97706' : '#f59e0b'}
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <rect
            x="640"
            y="170"
            width="140"
            height="20"
            rx="10"
            fill={isLight ? '#ffffff' : '#1e1b2e'}
            stroke={isLight ? '#b45309' : '#f59e0b'}
            strokeWidth="1"
          />
          <text
            x="710"
            y="184"
            textAnchor="middle"
            fill={isLight ? '#78350f' : '#fde047'}
            fontSize="8.5"
            fontWeight="900"
          >
            {isArabic ? 'شبه جزيرة سيناء (جبل موسى)' : 'Sinai Peninsula (Mt. Sinai)'}
          </text>

          {/* 5. The Lush Green Nile Delta Fan (الدلتا الخضراء) */}
          <path
            d="M 460,170 L 330,95 Q 430,90 530,105 Z"
            fill="url(#nileDeltaFlora)"
            stroke="#10b981"
            strokeWidth="1"
          />
          <rect
            x="395"
            y="112"
            width="125"
            height="19"
            rx="9.5"
            fill={isLight ? '#065f46' : '#064e3b'}
            stroke="#34d399"
            strokeWidth="0.8"
          />
          <text
            x="457.5"
            y="125"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="8.5"
            fontWeight="900"
          >
            {isArabic ? 'الدلتا والقاهرة القديمة' : 'Nile Delta & Cairo'}
          </text>

          {/* 6. Realistic River Nile Spine (مجرى نهر النيل الخالد) */}
          {/* Rosetta Branch */}
          <path d="M 460,170 Q 400,130 330,95" fill="none" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
          {/* Damietta Branch */}
          <path d="M 460,170 Q 495,135 530,105" fill="none" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
          
          {/* Main Nile River Spine flowing through Upper Egypt */}
          <path
            d="M 460,170 Q 470,210 490,250 T 525,300 T 555,340 T 600,410"
            fill="none"
            stroke="#0284c7"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <rect
            x="540"
            y="418"
            width="150"
            height="20"
            rx="10"
            fill={isLight ? '#ffffff' : '#0f172a'}
            stroke={isLight ? '#0284c7' : '#38bdf8'}
            strokeWidth="1"
          />
          <text
            x="615"
            y="432"
            textAnchor="middle"
            fill={isLight ? '#0369a1' : '#7dd3fc'}
            fontSize="8.5"
            fontWeight="900"
          >
            {isArabic ? 'وادي النيل والصعيد' : 'Nile Valley • Upper Egypt'}
          </text>

          {/* 7. Holy Family Refuge Trail (مسار العائلة المقدسة في مصر) */}
          <path
            d="M 720,100 Q 640,115 540,110 T 460,170 T 380,155 T 480,240 T 530,290"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeDasharray="6 3"
            strokeOpacity="0.85"
          />

          {/* Desert Fathers Monastic Pilgrimage Trail (طريق آباء البرية) */}
          <path
            d="M 330,95 Q 360,130 380,155 T 460,170 T 650,235 T 540,310 T 585,365"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeOpacity="0.7"
          />

          {/* 8. Ornate Coptic Compass Rose (وردة الرياح القبطية المزخرفة) */}
          <g transform="translate(100, 370)">
            <circle cx="0" cy="0" r="32" fill="url(#compassGoldGrad)" opacity="0.25" />
            <circle cx="0" cy="0" r="24" fill="none" stroke="#b45309" strokeWidth="1" strokeDasharray="3 2" />
            {/* Compass Star Needles */}
            <polygon points="0,-28 5,-6 0,-2 -5,-6" fill="#b45309" />
            <polygon points="0,28 5,6 0,2 -5,6" fill="#78350f" />
            <polygon points="-28,0 -6,5 -2,0 -6,-5" fill="#78350f" />
            <polygon points="28,0 6,5 2,0 6,-5" fill="#78350f" />
            {/* North Coptic Cross indicator */}
            <text x="0" y="-32" textAnchor="middle" fill={isLight ? '#451a03' : '#fde047'} fontSize="11" fontWeight="bold">
              ✝ ش
            </text>
            <circle cx="0" cy="0" r="4" fill="#fde047" stroke="#78350f" strokeWidth="1" />
          </g>

          {/* 9. Interactive Monastic Hubs (Never truncated, high-contrast labels!) */}
          {monasticHubs.map((hub) => {
            const isSel = hub.milestoneId === selectedMilestoneId;
            const milestoneData = MONASTIC_MILESTONES.find((m) => m.id === hub.milestoneId);

            return (
              <g
                key={hub.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => {
                  if (milestoneData) onSelectMilestone(milestoneData);
                }}
              >
                {/* Luminous Animated Halo when selected */}
                {isSel && (
                  <>
                    <circle cx={hub.x} cy={hub.y} r="34" fill="#f59e0b" fillOpacity="0.2" className="animate-ping" />
                    <circle cx={hub.x} cy={hub.y} r="26" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                  </>
                )}

                {/* Hub Chapel / Fortress Pin */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isSel ? '18' : '13'}
                  fill={isSel ? '#f59e0b' : isLight ? '#ffffff' : '#1e293b'}
                  stroke={isSel ? '#ffffff' : '#b45309'}
                  strokeWidth={isSel ? 2.5 : 1.5}
                />

                <text
                  x={hub.x}
                  y={hub.y + (isSel ? 5 : 4)}
                  textAnchor="middle"
                  fontSize={isSel ? '13' : '10'}
                  fill={isSel ? '#000000' : isLight ? '#78350f' : '#fde047'}
                  fontWeight="black"
                >
                  ✝
                </text>

                {/* Full Un-Truncated High-Contrast Label Badge Card */}
                <g transform={`translate(${hub.x}, ${hub.y + (isSel ? 22 : 18)})`}>
                  <rect
                    x="-95"
                    y="0"
                    width="190"
                    height="26"
                    rx="13"
                    fill={
                      isSel
                        ? '#b45309'
                        : isLight
                        ? '#ffffff'
                        : '#0f172a'
                    }
                    stroke={
                      isSel
                        ? '#fde047'
                        : isLight
                        ? '#b45309'
                        : '#475569'
                    }
                    strokeWidth={isSel ? 2 : 1.2}
                    filter={isSel ? 'drop-shadow(0 2px 6px rgba(180, 83, 9, 0.4))' : undefined}
                  />

                  {/* Main Hub Title */}
                  <text
                    x="0"
                    y="13"
                    textAnchor="middle"
                    fill={
                      isSel
                        ? '#ffffff'
                        : isLight
                        ? '#271003'
                        : '#f8fafc'
                    }
                    fontSize="8.5"
                    fontWeight="900"
                    fontFamily="sans-serif"
                  >
                    {isArabic ? hub.titleAr.split('(')[0] : hub.titleEn.split(':')[0]}
                  </text>

                  {/* Era Tag */}
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    fill={
                      isSel
                        ? '#fef08a'
                        : isLight
                        ? '#78350f'
                        : '#94a3b8'
                    }
                    fontSize="7"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {isArabic ? hub.eraAr : hub.eraEn}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Monastic Hub Details Card (Fixed contrast in Light, Dark, High-Contrast) */}
      <div
        className={`mt-4 p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 text-xs transition-all ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-gradient-to-r from-amber-50 via-white to-amber-100/70 border-amber-300 text-slate-900 shadow-sm'
            : 'bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-900/30 border-amber-500/30 text-amber-100'
        }`}
      >
        <div className="space-y-1">
          <div
            className={`font-black text-sm md:text-base flex items-center gap-2 ${
              isLight ? 'text-amber-950' : 'text-amber-300'
            }`}
          >
            <span>📍 {isArabic ? activeHub.titleAr : activeHub.titleEn}</span>
            <span
              className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold border ${
                isLight
                  ? 'bg-amber-200 border-amber-400 text-amber-950'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
              }`}
            >
              {isArabic ? activeHub.eraAr : activeHub.eraEn}
            </span>
          </div>
          <p className={`text-xs ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
            <strong className={isLight ? 'text-amber-900 font-black' : 'text-amber-400 font-bold'}>
              {isArabic ? 'الرمز المؤسس: ' : 'Founding Leader: '}
            </strong>
            {isArabic ? activeHub.leaderAr : activeHub.leaderEn}
          </p>
        </div>

        <div className="text-start md:text-end space-y-0.5">
          <div
            className={`text-xs font-black ${
              isLight ? 'text-amber-900' : 'text-amber-300'
            }`}
          >
            {isArabic ? 'الأديرة والمعالم البارزة:' : 'Notable Monasteries & Landmarks:'}
          </div>
          <div className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
            {isArabic ? activeHub.monasteriesAr : activeHub.monasteriesEn}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 3. High-Resolution Gospel Synoptics & Tetramorph Schematic
// ---------------------------------------------------------------------------

interface SynopticsSchematicProps {
  selectedGospelId: string;
  onSelectGospel: (gospel: GospelSynopticItem) => void;
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

const GospelSynopticsFourEvangelistsSchematic: React.FC<SynopticsSchematicProps> = ({
  selectedGospelId,
  onSelectGospel,
  isArabic,
  isLight,
  isContrast,
}) => {
  // Synchronized with GOSPEL_SYNOPTICS IDs from christianLabData.ts
  const evangelists: Array<{
    id: string;
    nameAr: string;
    nameEn: string;
    symbolAr: string;
    symbolEn: string;
    theologicalThemeAr: string;
    theologicalThemeEn: string;
    verseCount: string;
    icon: string;
    accentColor: string;
    y: number;
  }> = [
    {
      id: 'gospel_matthew',
      nameAr: 'إنجيل متى',
      nameEn: 'Gospel of Matthew',
      symbolAr: 'الإنسان المجنح (الملاك)',
      symbolEn: 'Winged Man (Incarnation)',
      theologicalThemeAr: 'يسوع المسيح ابن داود، المسيا المتمم لعهود ونبوءات العهد القديم',
      theologicalThemeEn: 'Christ the Messiah & King fulfilling Old Testament prophecies',
      verseCount: '1071 آية',
      icon: '👤',
      accentColor: '#38bdf8',
      y: 90,
    },
    {
      id: 'gospel_mark',
      nameAr: 'إنجيل مرقس',
      nameEn: 'Gospel of Mark',
      symbolAr: 'الأسد المجنح (الغلبة والسلطان)',
      symbolEn: 'Winged Lion (Sovereignty)',
      theologicalThemeAr: 'المسيح الخادم القوي صانع المعجزات؛ أقدم الأناجيل تدويناً وأوجزها',
      theologicalThemeEn: 'The Servant of God & mighty worker of miracles; earliest Gospel',
      verseCount: '661 آية',
      icon: '🦁',
      accentColor: '#f59e0b',
      y: 170,
    },
    {
      id: 'gospel_luke',
      nameAr: 'إنجيل لوقا',
      nameEn: 'Gospel of Luke',
      symbolAr: 'الثور المجنح (الفداء والكهنوت)',
      symbolEn: 'Winged Ox (Sacrifice & Priesthood)',
      theologicalThemeAr: 'صديق الخطاة ومخلص كل البشرية؛ الإنجيل ذو البعد الإنساني والرحمة',
      theologicalThemeEn: 'The Savior of all humanity, focusing on compassion & outcasts',
      verseCount: '1151 آية',
      icon: '🐂',
      accentColor: '#10b981',
      y: 250,
    },
    {
      id: 'gospel_john',
      nameAr: 'إنجيل يوحنا',
      nameEn: 'Gospel of John',
      symbolAr: 'النسر المحلق (اللاهوت الأزلي)',
      symbolEn: 'Soaring Eagle (High Divinity)',
      theologicalThemeAr: 'الكلمة الأزلي المتجسد، ابن الله الفريد (في البدء كان الكلمة)',
      theologicalThemeEn: 'The Eternal Word Incarnate (Logos); profound high Christology',
      verseCount: '879 آية',
      icon: '🦅',
      accentColor: '#a855f7',
      y: 330,
    },
  ];

  const activeEvangelist =
    evangelists.find((e) => e.id === selectedGospelId) || evangelists[0];

  return (
    <div
      className={`rounded-2xl border p-4 md:p-5 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fdfbf7] via-[#fbf5e6] to-[#f4e8cf] border-amber-300/80 shadow-amber-900/10'
          : 'bg-gradient-to-b from-[#0b0c10] via-[#120f18] to-[#1c120c] border-amber-500/40 shadow-amber-950/30'
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b text-xs ${
          isLight ? 'border-amber-300/70' : 'border-amber-500/20'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}
          >
            <Scroll className="w-4 h-4" />
          </div>
          <div>
            <span
              className={`font-black tracking-wide text-xs md:text-sm ${
                isLight ? 'text-amber-950' : 'text-amber-300'
              }`}
            >
              {isArabic
                ? 'الكائنات الإنجيلية الأربعة ومخطط فرضية المصدرين (Two-Source Hypothesis)'
                : 'The Four Evangelists Tetramorph & Two-Source Hypothesis Matrix'}
            </span>
            <div
              className={`text-[11px] font-medium ${
                isLight ? 'text-amber-900/80' : 'text-slate-400'
              }`}
            >
              {isArabic
                ? 'تحليل أكاديمي معتمد لشبكة التداخل النصي بين متى ومرقس ولوقا ويوحنا'
                : 'Academic textual criticism matrix demonstrating synoptic interdependence & distinctive witnesses'}
            </div>
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${
            isLight
              ? 'bg-amber-200/80 border-amber-400 text-amber-950'
              : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
          }`}
        >
          SYNOPTICS-TETRAMORPH
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full aspect-[16/8] min-h-[340px] mt-3 flex items-center justify-center">
        <svg
          viewBox="0 0 920 400"
          className="w-full h-full select-none"
          style={{
            filter: isContrast ? 'none' : 'drop-shadow(0 4px 20px rgba(180, 83, 9, 0.12))',
          }}
        >
          <defs>
            <linearGradient id="qSourceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6d28d9" />
            </linearGradient>
            <linearGradient id="markGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>

          {/* Left Panel: The Four Evangelists (Tetramorph) */}
          <rect
            x="20"
            y="20"
            width="330"
            height="360"
            rx="14"
            fill={isLight ? '#ffffff' : '#0f172a'}
            stroke={isLight ? '#b45309' : '#334155'}
            strokeWidth="1.2"
          />
          <rect
            x="35"
            y="32"
            width="300"
            height="26"
            rx="13"
            fill={isLight ? '#fef3c7' : '#1e293b'}
            stroke={isLight ? '#d97706' : '#f59e0b'}
            strokeWidth="1"
          />
          <text
            x="185"
            y="49"
            textAnchor="middle"
            fill={isLight ? '#78350f' : '#fde047'}
            fontSize="10.5"
            fontWeight="900"
          >
            {isArabic ? 'الرموز الإنجيلية الأربعة (التترامورف)' : 'The Four Evangelists (Tetramorph)'}
          </text>

          {evangelists.map((ev) => {
            const isSel = ev.id === selectedGospelId;
            const gospelData = GOSPEL_SYNOPTICS.find((g) => g.id === ev.id);

            return (
              <g
                key={ev.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => {
                  if (gospelData) onSelectGospel(gospelData);
                }}
              >
                <rect
                  x="35"
                  y={ev.y - 25}
                  width="300"
                  height="58"
                  rx="12"
                  fill={
                    isSel
                      ? '#b45309'
                      : isLight
                      ? '#f8fafc'
                      : '#1e293b'
                  }
                  stroke={
                    isSel
                      ? '#fde047'
                      : isLight
                      ? '#cbd5e1'
                      : '#475569'
                  }
                  strokeWidth={isSel ? 2 : 1}
                />

                {/* Icon Medal */}
                <circle
                  cx="68"
                  cy={ev.y + 4}
                  r="19"
                  fill={isSel ? '#f59e0b' : isLight ? '#ffffff' : '#334155'}
                  stroke={isSel ? '#ffffff' : ev.accentColor}
                  strokeWidth="1.5"
                />
                <text x="68" y={ev.y + 9} textAnchor="middle" fontSize="16">
                  {ev.icon}
                </text>

                <text
                  x="100"
                  y={ev.y - 2}
                  fill={isSel ? '#ffffff' : isLight ? '#0f172a' : '#f8fafc'}
                  fontSize="11.5"
                  fontWeight="900"
                >
                  {isArabic ? ev.nameAr : ev.nameEn}
                </text>
                <text
                  x="100"
                  y={ev.y + 14}
                  fill={isSel ? '#fef08a' : isLight ? '#78350f' : '#cbd5e1'}
                  fontSize="9"
                  fontWeight="bold"
                >
                  {isArabic ? ev.symbolAr : ev.symbolEn} • ({ev.verseCount})
                </text>
              </g>
            );
          })}

          {/* Right Panel: Two-Source Hypothesis Diagram */}
          <rect
            x="370"
            y="20"
            width="530"
            height="360"
            rx="14"
            fill={isLight ? '#ffffff' : '#0f172a'}
            stroke={isLight ? '#b45309' : '#334155'}
            strokeWidth="1.2"
          />
          <rect
            x="390"
            y="32"
            width="490"
            height="26"
            rx="13"
            fill={isLight ? '#e0f2fe' : '#0c2747'}
            stroke={isLight ? '#0284c7' : '#38bdf8'}
            strokeWidth="1"
          />
          <text
            x="635"
            y="49"
            textAnchor="middle"
            fill={isLight ? '#0369a1' : '#7dd3fc'}
            fontSize="10.5"
            fontWeight="900"
          >
            {isArabic ? 'فرضية المصدرين في النقد الإزائي الأكاديمي' : 'Two-Source Hypothesis & Synoptic Interdependence'}
          </text>

          {/* Markan Priority Box */}
          <g
            className="cursor-pointer"
            onClick={() => {
              const m = GOSPEL_SYNOPTICS.find((g) => g.id === 'gospel_mark');
              if (m) onSelectGospel(m);
            }}
          >
            <rect x="400" y="70" width="220" height="65" rx="10" fill="url(#markGrad)" stroke="#fde047" strokeWidth="1.5" />
            <text x="510" y="96" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">
              {isArabic ? 'أسبقية إنجيل مرقس (Mark)' : 'Markan Priority (Mark)'}
            </text>
            <text x="510" y="116" textAnchor="middle" fill="#fef3c7" fontSize="8.5" fontWeight="bold">
              {isArabic ? 'أقدم الأناجيل تدويناً • ٦٦١ آية' : 'Earliest Gospel • 661 Verses'}
            </text>
          </g>

          {/* Q Document Source */}
          <g>
            <rect x="655" y="70" width="225" height="65" rx="10" fill="url(#qSourceGrad)" stroke="#c084fc" strokeWidth="1.5" />
            <text x="767.5" y="96" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">
              {isArabic ? 'وثيقة الأقوال Q (Quelle)' : 'Q Document (Quelle)'}
            </text>
            <text x="767.5" y="116" textAnchor="middle" fill="#e9d5ff" fontSize="8.5" fontWeight="bold">
              {isArabic ? 'أقوال وتعاليم مشتركة • ٢٣٠ آية' : 'Shared Sayings & Discourses • ~230 v'}
            </text>
          </g>

          {/* Special M Source */}
          <rect
            x="395"
            y="175"
            width="120"
            height="38"
            rx="8"
            fill={isLight ? '#fef3c7' : '#1e293b'}
            stroke="#f59e0b"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <text x="455" y="192" textAnchor="middle" fill={isLight ? '#78350f' : '#fcd34d'} fontSize="9" fontWeight="900">
            {isArabic ? 'خاص متى (M)' : 'Special M Source'}
          </text>
          <text x="455" y="205" textAnchor="middle" fill={isLight ? '#92400e' : '#cbd5e1'} fontSize="7.5">
            {isArabic ? 'المجوس وعظة الجبل' : 'Magi & Beatitudes'}
          </text>

          {/* Special L Source */}
          <rect
            x="760"
            y="175"
            width="120"
            height="38"
            rx="8"
            fill={isLight ? '#e0f2fe' : '#1e293b'}
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <text x="820" y="192" textAnchor="middle" fill={isLight ? '#0369a1' : '#7dd3fc'} fontSize="9" fontWeight="900">
            {isArabic ? 'خاص لوقا (L)' : 'Special L Source'}
          </text>
          <text x="820" y="205" textAnchor="middle" fill={isLight ? '#0284c7' : '#cbd5e1'} fontSize="7.5">
            {isArabic ? 'السامري والابن الضال' : 'Good Samaritan & Luke'}
          </text>

          {/* Connection Arrows */}
          <path d="M 470,135 L 470,250" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
          <path d="M 540,135 L 700,250" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M 725,135 L 560,250" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M 795,135 L 795,250" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="4 2" />
          <path d="M 455,213 L 490,250" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 820,213 L 785,250" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Canonical Matthew Result */}
          <g
            className="cursor-pointer"
            onClick={() => {
              const m = GOSPEL_SYNOPTICS.find((g) => g.id === 'gospel_matthew');
              if (m) onSelectGospel(m);
            }}
          >
            <rect
              x="420"
              y="255"
              width="200"
              height="75"
              rx="10"
              fill={isLight ? '#fef3c7' : '#1e1b4b'}
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <text x="520" y="280" textAnchor="middle" fill={isLight ? '#78350f' : '#fde047'} fontSize="12" fontWeight="900">
              {isArabic ? 'إنجيل متى القانوني' : 'Canonical Matthew'}
            </text>
            <text x="520" y="298" textAnchor="middle" fill={isLight ? '#451a03' : '#cbd5e1'} fontSize="8.5" fontWeight="bold">
              {isArabic ? 'مرقس + وثيقة Q + خاص متى (M)' : 'Mark + Q + Special M Source'}
            </text>
            <text x="520" y="315" textAnchor="middle" fill={isLight ? '#92400e' : '#94a3b8'} fontSize="8">
              {isArabic ? '١٠٧١ آية • موجه لليهود المتنصرين' : '1,071 Verses • Jewish-Christian Audience'}
            </text>
          </g>

          {/* Canonical Luke Result */}
          <g
            className="cursor-pointer"
            onClick={() => {
              const l = GOSPEL_SYNOPTICS.find((g) => g.id === 'gospel_luke');
              if (l) onSelectGospel(l);
            }}
          >
            <rect
              x="655"
              y="255"
              width="200"
              height="75"
              rx="10"
              fill={isLight ? '#ecfdf5' : '#042f2e'}
              stroke="#10b981"
              strokeWidth="2"
            />
            <text x="755" y="280" textAnchor="middle" fill={isLight ? '#065f46' : '#67e8f9'} fontSize="12" fontWeight="900">
              {isArabic ? 'إنجيل لوقا القانوني' : 'Canonical Luke'}
            </text>
            <text x="755" y="298" textAnchor="middle" fill={isLight ? '#064e3b' : '#cbd5e1'} fontSize="8.5" fontWeight="bold">
              {isArabic ? 'مرقس + وثيقة Q + خاص لوقا (L)' : 'Mark + Q + Special L Source'}
            </text>
            <text x="755" y="315" textAnchor="middle" fill={isLight ? '#047857' : '#94a3b8'} fontSize="8">
              {isArabic ? '١١٥١ آية • موجه للأمم واليونانيين' : '1,151 Verses • Gentile-Christian Audience'}
            </text>
          </g>

          {/* Gospel of John Independent Witness */}
          <g
            className="cursor-pointer"
            onClick={() => {
              const j = GOSPEL_SYNOPTICS.find((g) => g.id === 'gospel_john');
              if (j) onSelectGospel(j);
            }}
          >
            <rect
              x="420"
              y="345"
              width="435"
              height="26"
              rx="6"
              fill={isLight ? '#f3e8ff' : '#312e81'}
              stroke="#818cf8"
              strokeWidth="1.2"
            />
            <text
              x="637.5"
              y="362"
              textAnchor="middle"
              fill={isLight ? '#581c87' : '#e0e7ff'}
              fontSize="9"
              fontWeight="900"
            >
              {isArabic
                ? 'إنجيل يوحنا: رؤية لاهوتية مستقلة ومكملة للأناجيل الإزائية الثلاثة (٨٧٩ آية)'
                : 'Gospel of John: Independent Theological Witness Complementing the Synoptics (879 Verses)'}
            </text>
          </g>
        </svg>
      </div>

      {/* Details Bar */}
      <div
        className={`mt-4 p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 text-xs transition-all ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-gradient-to-r from-amber-50 via-white to-amber-100/70 border-amber-300 text-slate-900 shadow-sm'
            : 'bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-900/30 border-amber-500/30 text-amber-100'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{activeEvangelist.icon}</span>
          <div>
            <div
              className={`font-black text-sm md:text-base ${
                isLight ? 'text-amber-950' : 'text-amber-300'
              }`}
            >
              {isArabic ? activeEvangelist.nameAr : activeEvangelist.nameEn} — {isArabic ? activeEvangelist.symbolAr : activeEvangelist.symbolEn}
            </div>
            <div className={`text-xs mt-0.5 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
              {isArabic ? activeEvangelist.theologicalThemeAr : activeEvangelist.theologicalThemeEn}
            </div>
          </div>
        </div>
        <span
          className={`font-mono text-xs px-3 py-1 rounded-full font-bold border ${
            isLight
              ? 'bg-amber-200 border-amber-400 text-amber-950'
              : 'bg-amber-500/20 border-amber-500/30 text-amber-300'
          }`}
        >
          {activeEvangelist.verseCount}
        </span>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 4. Main ChristianHeritageStudio Component
// ---------------------------------------------------------------------------

export const ChristianHeritageStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'sacraments',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);

  // Local theme state for instantaneous user testing across all 3 visual modes
  const [localTheme, setLocalTheme] = useState<'dark' | 'light' | 'high-contrast'>(theme);

  // Synchronize when external prop changes
  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  const cycleTheme = () => {
    setLocalTheme((prev) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'high-contrast';
      return 'dark';
    });
  };

  const isLight = localTheme === 'light';
  const isContrast = localTheme === 'high-contrast';
  const isArabic = lang === 'ar';

  // Active Tab
  const [activeTab, setActiveTab] = useState<ChristianStudioTab>(initialTab);

  // Tab 1: Sacraments State
  const [selectedSacrament, setSelectedSacrament] = useState<HolySacrament>(HOLY_SACRAMENTS[0]);

  // Tab 2: Monastic Heritage State
  const [selectedMilestone, setSelectedMilestone] = useState<MonasticMilestone>(MONASTIC_MILESTONES[0]);

  // Tab 3: Gospel Synoptics State
  const [selectedGospel, setSelectedGospel] = useState<GospelSynopticItem>(GOSPEL_SYNOPTICS[0]);

  // Tab 4: Scripture Audio Matrix State
  const [selectedScripture, setSelectedScripture] = useState<AuthenticScriptureRecording>(
    AUTHENTIC_CHRISTIAN_SCRIPTURE_RECORDINGS[0]
  );

  // Tab 5: Bioethics State
  const [selectedTopic, setSelectedTopic] = useState<BioethicsTopic>(BIOETHICS_TOPICS[0]);

  // Tab 6: Quiz State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Real Maps & High-Res View Selectors
  const [monasticMapView, setMonasticMapView] = useState<'satellite' | 'manuscript' | 'schematic'>('satellite');
  const [sanctuaryView, setSanctuaryView] = useState<'photo' | 'schematic'>('photo');
  const [synopticsView, setSynopticsView] = useState<'icons' | 'schematic'>('icons');
  const [lightboxModalData, setLightboxModalData] = useState<HiResImageModalData | null>(null);

  // Authentic Christian Church Audio Player State
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [audioLoading, setAudioLoading] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop audio on tab change or component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlayingAudioId(null);
      setAudioLoading(false);
      setAudioError(null);
    };
  }, [activeTab]);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setPlayingAudioId(null);
    setAudioLoading(false);
    setAudioProgress(0);
    setAudioCurrentTime(0);
  };

  const playScriptureAudio = (id: string, primaryUrl: string, fallbackUrl?: string) => {
    if (playingAudioId === id && audioRef.current) {
      stopAudio();
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    setPlayingAudioId(id);
    setAudioLoading(true);
    setAudioError(null);
    setAudioProgress(0);
    setAudioCurrentTime(0);

    const audio = new Audio(primaryUrl);
    audio.preload = 'auto';
    audioRef.current = audio;

    audio.oncanplay = () => {
      setAudioLoading(false);
    };

    audio.onloadedmetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setAudioDuration(audio.duration);
      }
    };

    audio.ontimeupdate = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        setAudioProgress((audio.currentTime / audio.duration) * 100);
        setAudioCurrentTime(audio.currentTime);
      }
    };

    audio.onplaying = () => {
      setAudioLoading(false);
    };

    audio.onended = () => {
      setPlayingAudioId(null);
      setAudioLoading(false);
      setAudioProgress(0);
      audioRef.current = null;
    };

    audio.onerror = () => {
      if (fallbackUrl) {
        console.warn(`Primary audio failed for ${id}, switching to church fallback URL...`);
        const fallbackAudio = new Audio(fallbackUrl);
        fallbackAudio.preload = 'auto';
        audioRef.current = fallbackAudio;

        fallbackAudio.oncanplay = () => setAudioLoading(false);
        fallbackAudio.onplaying = () => setAudioLoading(false);
        fallbackAudio.onloadedmetadata = () => {
          if (fallbackAudio.duration && !isNaN(fallbackAudio.duration)) {
            setAudioDuration(fallbackAudio.duration);
          }
        };
        fallbackAudio.ontimeupdate = () => {
          if (fallbackAudio.duration && !isNaN(fallbackAudio.duration) && fallbackAudio.duration > 0) {
            setAudioProgress((fallbackAudio.currentTime / fallbackAudio.duration) * 100);
            setAudioCurrentTime(fallbackAudio.currentTime);
          }
        };
        fallbackAudio.onended = () => {
          setPlayingAudioId(null);
          setAudioLoading(false);
          setAudioProgress(0);
          audioRef.current = null;
        };
        fallbackAudio.onerror = () => {
          setAudioLoading(false);
          setPlayingAudioId(null);
          setAudioError(
            isArabic
              ? 'تعذر تشغيل التسجيل الصوتي للنص الإنجيلي حالياً، يرجى التحقق من اتصال الشبكة.'
              : 'Could not stream church scripture recording, please check network connection.'
          );
          audioRef.current = null;
        };
        fallbackAudio.play().catch(() => {
          setAudioLoading(false);
          setPlayingAudioId(null);
          audioRef.current = null;
        });
      } else {
        setAudioLoading(false);
        setPlayingAudioId(null);
        setAudioError(
          isArabic
            ? 'تعذر تشغيل التسجيل الصوتي للنص الإنجيلي حالياً، يرجى التحقق من اتصال الشبكة.'
            : 'Could not stream church scripture recording, please check network connection.'
        );
        audioRef.current = null;
      }
    };

    audio.play().catch((err) => {
      console.warn('Audio play prevented by browser policy or network issue:', err);
      setAudioLoading(false);
    });
  };

  const formatAudioTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleQuizSubmit = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
    setIsAnswerSubmitted(true);
    if (index === CHRISTIAN_SCENARIO_QUIZ[currentQIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < CHRISTIAN_SCENARIO_QUIZ.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
  };

  // High-Contrast Theme System
  const themeClasses = isContrast
    ? 'bg-black text-yellow-300 border-yellow-400'
    : isLight
    ? 'bg-gradient-to-b from-[#fdfbf7] via-[#fbf7ee] to-[#f4ebe0] text-slate-900 border-amber-300/80 shadow-md'
    : 'bg-gradient-to-br from-slate-950 via-[#130f1c] to-[#1c120c] text-amber-50 border-amber-900/50 shadow-2xl';

  const cardClasses = isContrast
    ? 'bg-black border-2 border-yellow-400 shadow-none'
    : isLight
    ? 'bg-white border border-amber-300/80 text-slate-900 shadow-md shadow-amber-900/5'
    : 'bg-slate-900/85 backdrop-blur border border-amber-500/25 shadow-xl shadow-amber-950/20';

  return (
    <div
      className={`border p-4 md:p-6 transition-all duration-300 flex flex-col gap-6 ${themeClasses} ${
        isFullscreen
          ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0'
          : 'rounded-2xl min-h-[700px]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Header Banner */}
      <div
        className={`flex flex-wrap items-center justify-between gap-4 pb-4 border-b ${
          isLight ? 'border-amber-300/80' : 'border-amber-500/20'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-amber-600/30">
            <Cross className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2
                className={`text-xl md:text-2xl font-black tracking-tight ${
                  isLight ? 'text-amber-950' : 'text-white'
                }`}
              >
                {isArabic ? 'مختبر التراث والدراسات المسيحية التفاعلي' : 'Christian Heritage & Studies Interactive Studio'}
              </h2>
              <span
                className={`px-2.5 py-0.5 text-xs font-bold rounded-full border ${
                  isLight
                    ? 'bg-amber-200 border-amber-400 text-amber-950'
                    : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                }`}
              >
                ✝️ {isArabic ? 'معتمد رسمياً' : 'Ministry-Accredited'}
              </span>
            </div>
            <p
              className={`text-xs md:text-sm mt-0.5 ${
                isLight ? 'text-slate-800 font-medium' : 'text-slate-400'
              }`}
            >
              {isArabic
                ? 'استكشاف الأسرار الكنسية، مسار الرهبنة وتاريخ الكنيسة القبطية، مقارنة الأناجيل، والأخلاقيات الحيوية المعاصرة'
                : 'Interactive exploration of Holy Sacraments, Coptic Monastic Heritage, Gospel Synoptics, and Bioethics'}
            </p>
          </div>
        </div>

        {/* Navigation Tabs & Tool Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div
            className={`flex flex-wrap items-center gap-1.5 p-1 rounded-xl border ${
              isLight ? 'bg-amber-100/90 border-amber-300' : 'bg-slate-900/60 border-amber-500/20'
            }`}
          >
            <button
              onClick={() => setActiveTab('sacraments')}
              className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === 'sacraments'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : isLight
                  ? 'text-amber-950 hover:bg-amber-200/80 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Church className="w-4 h-4" />
              <span>{isArabic ? 'أسرار الكنيسة (٧)' : 'Sacraments (7)'}</span>
            </button>

            <button
              onClick={() => setActiveTab('monasticism')}
              className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === 'monasticism'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : isLight
                  ? 'text-amber-950 hover:bg-amber-200/80 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{isArabic ? 'التراث والرهبنة' : 'Monastic Heritage'}</span>
            </button>

            <button
              onClick={() => setActiveTab('synoptics')}
              className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === 'synoptics'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : isLight
                  ? 'text-amber-950 hover:bg-amber-200/80 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Scroll className="w-4 h-4" />
              <span>{isArabic ? 'الأناجيل الإزائية' : 'Gospel Synoptics'}</span>
            </button>

            <button
              onClick={() => setActiveTab('scriptures')}
              className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === 'scriptures'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : isLight
                  ? 'text-amber-950 hover:bg-amber-200/80 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>{isArabic ? 'تسجيلات النصوص' : 'Scripture Audio'}</span>
            </button>

            <button
              onClick={() => setActiveTab('bioethics')}
              className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === 'bioethics'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : isLight
                  ? 'text-amber-950 hover:bg-amber-200/80 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>{isArabic ? 'الأخلاقيات الحيوية' : 'Bioethics'}</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : isLight
                  ? 'text-amber-950 hover:bg-amber-200/80 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>{isArabic ? 'المحاكاة الوزارية' : 'Scenario Quiz'}</span>
            </button>
          </div>

          {/* Quick 3-State Theme Mode Switcher */}
          <button
            type="button"
            onClick={cycleTheme}
            className={`p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl transition-all border font-bold text-xs gap-1.5 shadow-sm ${
              isLight
                ? 'bg-amber-100 border-amber-300 text-amber-950 hover:bg-amber-200'
                : isContrast
                ? 'bg-black border-yellow-400 text-yellow-300'
                : 'bg-slate-900/80 border-amber-500/30 text-amber-300 hover:bg-slate-800'
            }`}
            title={
              localTheme === 'dark'
                ? 'الوضع الليلي (Dark Mode) - اضغط للتغيير'
                : localTheme === 'light'
                ? 'الوضع النهاري (Light Mode) - اضغط للتغيير'
                : 'وضع التباين العالي (High Contrast) - اضغط للتغيير'
            }
          >
            {localTheme === 'dark' ? (
              <Moon className="w-4 h-4 text-amber-400" />
            ) : localTheme === 'light' ? (
              <Sun className="w-4 h-4 text-amber-600" />
            ) : (
              <Eye className="w-4 h-4 text-yellow-400" />
            )}
          </button>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl transition-colors border shadow-sm ${
              isLight
                ? 'text-amber-950 border-amber-300 bg-amber-100 hover:bg-amber-200'
                : 'text-amber-300/90 hover:text-white hover:bg-amber-800/30 border-amber-500/30 bg-slate-900/80'
            }`}
            title={isFullscreen ? (isArabic ? 'خروج من ملء الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Tab 1: Holy Sacraments Explorer */}
      {activeTab === 'sacraments' && (
        <div className="space-y-6">
          {/* View Mode Toggle: Real Sanctuary 4K Photo vs Vector Schematic */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl border bg-black/40 border-amber-500/20 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSanctuaryView('photo')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  sanctuaryView === 'photo'
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                    : isLight
                    ? 'bg-white/80 text-slate-800 hover:bg-amber-100'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Camera className="w-4 h-4" />
                <span>{isArabic ? 'الهيكل والأيقونسطاس الحقيقي (4K Photo)' : 'Real 4K Sanctuary Photo'}</span>
              </button>

              <button
                onClick={() => setSanctuaryView('schematic')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  sanctuaryView === 'schematic'
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                    : isLight
                    ? 'bg-white/80 text-slate-800 hover:bg-amber-100'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Church className="w-4 h-4" />
                <span>{isArabic ? 'المخطط الطقسي المتجهي والأسرار' : 'Liturgical Vector Schematic'}</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-amber-400 font-bold px-3">
              SACRED-SANCTUARY-4K
            </span>
          </div>

          {sanctuaryView === 'photo' ? (
            <RealSanctuaryPhotoView isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
          ) : (
            <CopticIconostasisSacramentsVectorSchematic
              selectedSacramentId={selectedSacrament.id}
              onSelectSacrament={(sac) => setSelectedSacrament(sac)}
              isArabic={isArabic}
              isLight={isLight}
              isContrast={isContrast}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sacraments Selector Sidebar */}
            <div className="lg:col-span-4 space-y-2.5">
              <h3
                className={`text-sm font-black uppercase tracking-wider flex items-center gap-2 mb-3 ${
                  isLight ? 'text-amber-950' : 'text-slate-400'
                }`}
              >
                <Church className="w-4 h-4 text-amber-500" />
                {isArabic ? 'الأسرار الكنسية السبعة المقررة' : 'The Seven Sacraments'}
              </h3>
              {HOLY_SACRAMENTS.map((sacrament) => {
                const isSelected = selectedSacrament.id === sacrament.id;
                return (
                  <button
                    key={sacrament.id}
                    onClick={() => setSelectedSacrament(sacrament)}
                    className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 flex items-center justify-between shadow-sm ${
                      isSelected
                        ? isLight
                          ? 'bg-amber-100 border-amber-500 text-amber-950 font-black shadow-md'
                          : 'bg-gradient-to-r from-amber-600/25 to-purple-600/25 border-amber-500 text-amber-300 font-bold shadow-md'
                        : isLight
                        ? 'bg-white border-amber-200/70 hover:border-amber-400 text-slate-900'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-3 h-3 rounded-full ${
                          isSelected ? 'bg-amber-500 animate-pulse' : 'bg-slate-500'
                        }`}
                      />
                      <div>
                        <div
                          className={`text-sm leading-tight font-bold ${
                            isSelected && isLight ? 'text-amber-950' : ''
                          }`}
                        >
                          {isArabic ? sacrament.nameAr : sacrament.nameEn}
                        </div>
                        <div
                          className={`text-xs mt-0.5 ${
                            isLight ? 'text-slate-800 font-medium' : 'text-slate-400'
                          }`}
                        >
                          {isArabic ? sacrament.categoryAr : sacrament.categoryEn}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                        sacrament.isRepeatable
                          ? isLight
                            ? 'bg-blue-100 text-blue-900 border border-blue-300'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : isLight
                          ? 'bg-purple-100 text-purple-900 border border-purple-300'
                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}
                    >
                      {sacrament.isRepeatable
                        ? isArabic
                          ? 'متكرر'
                          : 'Repeatable'
                        : isArabic
                        ? 'غير متكرر'
                        : 'Non-repeatable'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sacrament Deep Theological Inspector Card */}
            <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-5`}>
              <div className="pb-3 border-b border-amber-500/20 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span
                    className={`text-xs font-mono font-bold ${
                      isLight ? 'text-amber-900' : 'text-amber-400'
                    }`}
                  >
                    {isArabic ? selectedSacrament.categoryAr : selectedSacrament.categoryEn}
                  </span>
                  <h3
                    className={`text-2xl font-black mt-1 ${
                      isLight ? 'text-amber-950' : 'text-white'
                    }`}
                  >
                    {isArabic ? selectedSacrament.nameAr : selectedSacrament.nameEn}
                  </h3>
                </div>

                {selectedSacrament.audioUrl && (
                  <button
                    onClick={() =>
                      playScriptureAudio(
                        selectedSacrament.id,
                        selectedSacrament.audioUrl!,
                        selectedSacrament.audioFallbackUrl
                      )
                    }
                    disabled={audioLoading && playingAudioId === selectedSacrament.id}
                    className={`flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all border shadow-sm ${
                      playingAudioId === selectedSacrament.id
                        ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-amber-500/30'
                        : isLight
                        ? 'bg-amber-100 hover:bg-amber-200 text-amber-950 border-amber-300'
                        : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border-amber-500/30'
                    }`}
                  >
                    {audioLoading && playingAudioId === selectedSacrament.id ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{isArabic ? 'جارٍ التحميل...' : 'Buffering...'}</span>
                      </>
                    ) : playingAudioId === selectedSacrament.id ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'إيقاف التسجيل' : 'Pause'}</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'استماع للسند الكتابي' : 'Listen Scripture'}</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Audio progress bar if playing */}
              {playingAudioId === selectedSacrament.id && (
                <div
                  className={`p-3 rounded-xl border space-y-2 ${
                    isLight ? 'bg-amber-50 border-amber-300' : 'bg-amber-500/10 border-amber-500/20'
                  }`}
                >
                  <div
                    className={`flex items-center justify-between text-xs font-bold ${
                      isLight ? 'text-amber-950' : 'text-amber-300'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Music className="w-3.5 h-3.5 animate-pulse text-amber-500" />
                      {isArabic ? selectedSacrament.audioCitationAr : selectedSacrament.audioCitationEn}
                    </span>
                    <span className="font-mono">{formatAudioTime(audioCurrentTime)} / {formatAudioTime(audioDuration)}</span>
                  </div>
                  <div className="w-full bg-slate-300 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: `${audioProgress}%` }} />
                  </div>
                </div>
              )}

              {/* 2-Column Signs & Graces Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-xl border space-y-1.5 ${
                    isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-900/60 border-slate-700/60'
                  }`}
                >
                  <div
                    className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                      isLight ? 'text-amber-950' : 'text-amber-400'
                    }`}
                  >
                    <span>👁️</span>
                    <span>{isArabic ? 'المادة والطقس المنظور' : 'Visible Sign & Matter'}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                    {isArabic ? selectedSacrament.visibleSignAr : selectedSacrament.visibleSignEn}
                  </p>
                </div>

                <div
                  className={`p-4 rounded-xl border space-y-1.5 ${
                    isLight ? 'bg-emerald-50/70 border-emerald-200' : 'bg-emerald-950/20 border-emerald-500/30'
                  }`}
                >
                  <div
                    className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                      isLight ? 'text-emerald-950' : 'text-emerald-400'
                    }`}
                  >
                    <span>✨</span>
                    <span>{isArabic ? 'النعمة والمفعول الإلهي غير المنظور' : 'Invisible Grace'}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                    {isArabic ? selectedSacrament.invisibleGraceAr : selectedSacrament.invisibleGraceEn}
                  </p>
                </div>
              </div>

              {/* Scripture Basis Quote */}
              <div
                className={`p-4 rounded-xl border space-y-2 ${
                  isLight ? 'bg-amber-100/60 border-amber-300' : 'bg-amber-950/25 border-amber-500/30'
                }`}
              >
                <div
                  className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    isLight ? 'text-amber-950' : 'text-amber-400'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{isArabic ? 'السند الكتابي والتأسيس الإلهي' : 'Scriptural Foundation'}</span>
                </div>
                <blockquote
                  className={`text-sm md:text-base font-serif italic leading-relaxed border-s-4 border-amber-500 ps-4 py-0.5 ${
                    isLight ? 'text-slate-950 font-bold' : 'text-amber-100'
                  }`}
                >
                  {isArabic ? selectedSacrament.scriptureBasisAr : selectedSacrament.scriptureBasisEn}
                </blockquote>
              </div>

              {/* Theological Depth */}
              <div
                className={`p-4 rounded-xl border space-y-1.5 ${
                  isLight ? 'bg-purple-50/70 border-purple-200' : 'bg-purple-950/20 border-purple-500/30'
                }`}
              >
                <div
                  className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    isLight ? 'text-purple-950' : 'text-purple-400'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isArabic ? 'المدلول العقيدي واللاهوتي الكنسي' : 'Theological Significance'}</span>
                </div>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                  {isArabic ? selectedSacrament.theologicalDepthAr : selectedSacrament.theologicalDepthEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Monastic Heritage & Milestones */}
      {activeTab === 'monasticism' && (
        <div className="space-y-6">
          {/* 3-Mode Map Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl border bg-black/40 border-amber-500/20 backdrop-blur-md">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setMonasticMapView('satellite')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  monasticMapView === 'satellite'
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                    : isLight
                    ? 'bg-white/80 text-slate-800 hover:bg-amber-100'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{isArabic ? 'الخريطة الفضائية الحقيقية (Real Satellite Map)' : 'Real Satellite Map'}</span>
              </button>

              <button
                onClick={() => setMonasticMapView('manuscript')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  monasticMapView === 'manuscript'
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                    : isLight
                    ? 'bg-white/80 text-slate-800 hover:bg-amber-100'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Scroll className="w-4 h-4" />
                <span>{isArabic ? 'المخطوطة الأثرية النادرة (Manuscript Map)' : 'Historical Manuscript Map'}</span>
              </button>

              <button
                onClick={() => setMonasticMapView('schematic')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  monasticMapView === 'schematic'
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                    : isLight
                    ? 'bg-white/80 text-slate-800 hover:bg-amber-100'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>{isArabic ? 'المخطط الجغرافي للبراري' : 'Spatial Vector Map'}</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-amber-400 font-bold px-3">
              EGYPT-MONASTIC-ATLAS-4K
            </span>
          </div>

          {monasticMapView === 'satellite' && (
            <RealMonasticSatelliteMap
              selectedMilestoneId={selectedMilestone.id}
              onSelectMilestone={(m) => setSelectedMilestone(m)}
              isArabic={isArabic}
              isLight={isLight}
              isContrast={isContrast}
            />
          )}

          {monasticMapView === 'manuscript' && (
            <HistoricalManuscriptMapViewer
              isArabic={isArabic}
              isLight={isLight}
              isContrast={isContrast}
            />
          )}

          {monasticMapView === 'schematic' && (
            <EgyptianMonasticHeritageMapSchematic
              selectedMilestoneId={selectedMilestone.id}
              onSelectMilestone={(m) => setSelectedMilestone(m)}
              isArabic={isArabic}
              isLight={isLight}
              isContrast={isContrast}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Milestone Selection Timeline */}
            <div className="lg:col-span-4 space-y-2.5">
              <h3
                className={`text-sm font-black uppercase tracking-wider flex items-center gap-2 mb-3 ${
                  isLight ? 'text-amber-950' : 'text-slate-400'
                }`}
              >
                <Layers className="w-4 h-4 text-amber-500" />
                {isArabic ? 'محطات التراث الرهباني القبطي' : 'Monastic Milestones'}
              </h3>
              {MONASTIC_MILESTONES.map((milestone) => {
                const isSelected = selectedMilestone.id === milestone.id;
                return (
                  <button
                    key={milestone.id}
                    onClick={() => setSelectedMilestone(milestone)}
                    className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 shadow-sm ${
                      isSelected
                        ? isLight
                          ? 'bg-amber-100 border-amber-500 text-amber-950 font-black shadow-md'
                          : 'bg-gradient-to-r from-amber-600/25 to-purple-600/25 border-amber-500 text-amber-300 font-bold shadow-md'
                        : isLight
                        ? 'bg-white border-amber-200/70 hover:border-amber-400 text-slate-900'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div
                      className={`text-xs font-mono font-bold mb-1 ${
                        isLight ? 'text-amber-900' : 'text-amber-400'
                      }`}
                    >
                      {isArabic ? milestone.eraAr : milestone.eraEn}
                    </div>
                    <div className="text-sm font-bold leading-tight">
                      {isArabic ? milestone.leaderAr : milestone.leaderEn}
                    </div>
                    <div
                      className={`text-xs mt-1 font-medium ${
                        isLight ? 'text-slate-800' : 'text-slate-400'
                      }`}
                    >
                      📍 {isArabic ? milestone.locationAr : milestone.locationEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Milestone Details Card */}
            <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-5`}>
              {/* High-Res Photograph Showcase for Selected Milestone */}
              {(() => {
                const photoMeta =
                  MILESTONE_PHOTOS[selectedMilestone.id] || MILESTONE_PHOTOS.milestone_antony;
                return (
                  <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                    <img
                      src={photoMeta.img}
                      alt={isArabic ? photoMeta.titleAr : photoMeta.titleEn}
                      className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90" />

                    <button
                      onClick={() =>
                        setLightboxModalData({
                          imageUrl: photoMeta.img,
                          titleAr: photoMeta.titleAr,
                          titleEn: photoMeta.titleEn,
                          subtitleAr: photoMeta.subtitleAr,
                          subtitleEn: photoMeta.subtitleEn,
                          descriptionAr: photoMeta.descAr,
                          descriptionEn: photoMeta.descEn,
                          locationAr: photoMeta.locationAr,
                          locationEn: photoMeta.locationEn,
                          dateOrEraAr: isArabic ? selectedMilestone.eraAr : selectedMilestone.eraEn,
                          dateOrEraEn: isArabic ? selectedMilestone.eraAr : selectedMilestone.eraEn,
                        })
                      }
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs cursor-pointer"
                    >
                      <span className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-black flex items-center gap-2 shadow-2xl">
                        <Maximize2 className="w-4 h-4" />
                        <span>
                          {isArabic
                            ? 'تكبير الصورة بدقة 4K وفحص التفاصيل'
                            : 'Inspect 4K High-Res View'}
                        </span>
                      </span>
                    </button>

                    <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-200/90 font-medium">
                      <span>📷 {isArabic ? photoMeta.captionAr : photoMeta.captionEn}</span>
                      <span className="px-2 py-0.5 rounded bg-black/75 border border-amber-500/40 text-[10px] font-mono text-amber-300">
                        4K ARCHIVAL PHOTO
                      </span>
                    </div>
                  </div>
                );
              })()}

              <div className="pb-3 border-b border-amber-500/20">
                <span
                  className={`text-xs font-mono font-bold ${
                    isLight ? 'text-amber-900' : 'text-amber-400'
                  }`}
                >
                  {isArabic ? selectedMilestone.eraAr : selectedMilestone.eraEn}
                </span>
                <h3
                  className={`text-2xl font-black mt-1 ${
                    isLight ? 'text-amber-950' : 'text-white'
                  }`}
                >
                  {isArabic ? selectedMilestone.leaderAr : selectedMilestone.leaderEn}
                </h3>
                <div
                  className={`text-sm mt-1 flex items-center gap-1.5 font-medium ${
                    isLight ? 'text-slate-800' : 'text-slate-300'
                  }`}
                >
                  <span>📍</span>
                  <span>{isArabic ? selectedMilestone.locationAr : selectedMilestone.locationEn}</span>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border space-y-2 ${
                  isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-900/60 border-slate-700/60'
                }`}
              >
                <h4
                  className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    isLight ? 'text-amber-950' : 'text-amber-400'
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  {isArabic ? 'الدلالة التاريخية والتأسيس الروحي' : 'Historical & Spiritual Significance'}
                </h4>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                  {isArabic ? selectedMilestone.significanceAr : selectedMilestone.significanceEn}
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border space-y-2 ${
                  isLight ? 'bg-purple-50/70 border-purple-200' : 'bg-purple-950/20 border-purple-500/30'
                }`}
              >
                <h4
                  className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    isLight ? 'text-purple-950' : 'text-purple-400'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  {isArabic ? 'الأثر الحضاري والتراث الإنساني الخالد' : 'Enduring Civilizational & Literary Legacy'}
                </h4>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                  {isArabic ? selectedMilestone.legacyAr : selectedMilestone.legacyEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Gospel Synoptics Comparative Matrix */}
      {activeTab === 'synoptics' && (
        <div className="space-y-6">
          {/* Tab 3 View Mode Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl border bg-black/40 border-amber-500/20 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSynopticsView('icons')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  synopticsView === 'icons'
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                    : isLight
                    ? 'bg-white/80 text-slate-800 hover:bg-amber-100'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>{isArabic ? 'أيقونة الإنجيليين الأربعة والتترابورف (4K Icons)' : 'Four Evangelists 4K Icons'}</span>
              </button>

              <button
                onClick={() => setSynopticsView('schematic')}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  synopticsView === 'schematic'
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                    : isLight
                    ? 'bg-white/80 text-slate-800 hover:bg-amber-100'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Scroll className="w-4 h-4" />
                <span>{isArabic ? 'مخطط نظرية المصدرين الإزائي' : 'Two-Source Vector Matrix'}</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-amber-400 font-bold px-3">
              GOSPEL-SYNOPTICS-4K
            </span>
          </div>

          {synopticsView === 'icons' ? (
            <FourEvangelistsHighResView isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
          ) : (
            <GospelSynopticsFourEvangelistsSchematic
              selectedGospelId={selectedGospel.id}
              onSelectGospel={(g) => setSelectedGospel(g)}
              isArabic={isArabic}
              isLight={isLight}
              isContrast={isContrast}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Gospel Selection */}
            <div className="lg:col-span-4 space-y-2.5">
              <h3
                className={`text-sm font-black uppercase tracking-wider flex items-center gap-2 mb-3 ${
                  isLight ? 'text-amber-950' : 'text-slate-400'
                }`}
              >
                <Scroll className="w-4 h-4 text-amber-500" />
                {isArabic ? 'الأناجيل الأربعة القانونية' : 'The Four Canonical Gospels'}
              </h3>
              {GOSPEL_SYNOPTICS.map((gospel) => {
                const isSelected = selectedGospel.id === gospel.id;
                return (
                  <button
                    key={gospel.id}
                    onClick={() => setSelectedGospel(gospel)}
                    className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 shadow-sm ${
                      isSelected
                        ? isLight
                          ? 'bg-amber-100 border-amber-500 text-amber-950 font-black shadow-md'
                          : 'bg-gradient-to-r from-amber-600/25 to-purple-600/25 border-amber-500 text-amber-300 font-bold shadow-md'
                        : isLight
                        ? 'bg-white border-amber-200/70 hover:border-amber-400 text-slate-900'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="text-sm font-bold leading-tight">
                      {isArabic ? gospel.gospelAr : gospel.gospelEn}
                    </div>
                    <div
                      className={`text-xs mt-1 font-bold ${
                        isLight ? 'text-amber-900' : 'text-amber-400'
                      }`}
                    >
                      {isArabic ? gospel.symbolAr : gospel.symbolEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Gospel Analysis Card */}
            <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-5`}>
              <div className="pb-3 border-b border-amber-500/20">
                <div
                  className={`flex items-center gap-2 text-xs font-bold ${
                    isLight ? 'text-amber-900' : 'text-amber-400'
                  }`}
                >
                  <span>{isArabic ? selectedGospel.symbolAr : selectedGospel.symbolEn}</span>
                </div>
                <h3
                  className={`text-2xl font-black mt-1 ${
                    isLight ? 'text-amber-950' : 'text-white'
                  }`}
                >
                  {isArabic ? selectedGospel.gospelAr : selectedGospel.gospelEn}
                </h3>
                <p className={`text-sm mt-1 font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
                  ✍️ {isArabic ? selectedGospel.authorAr : selectedGospel.authorEn}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-xl border space-y-1.5 ${
                    isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-900/60 border-slate-700/60'
                  }`}
                >
                  <div
                    className={`text-xs font-black uppercase tracking-wider ${
                      isLight ? 'text-amber-950' : 'text-amber-400'
                    }`}
                  >
                    {isArabic ? 'الجمهور المستهدف' : 'Target Audience'}
                  </div>
                  <p className={`text-sm ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                    {isArabic ? selectedGospel.targetAudienceAr : selectedGospel.targetAudienceEn}
                  </p>
                </div>

                <div
                  className={`p-4 rounded-xl border space-y-1.5 ${
                    isLight ? 'bg-purple-50/70 border-purple-200' : 'bg-slate-900/60 border-slate-700/60'
                  }`}
                >
                  <div
                    className={`text-xs font-black uppercase tracking-wider ${
                      isLight ? 'text-purple-950' : 'text-purple-400'
                    }`}
                  >
                    {isArabic ? 'الموضوع والمحور اللاهوتي الرئيسي' : 'Central Theological Theme'}
                  </div>
                  <p className={`text-sm ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                    {isArabic ? selectedGospel.keyThemeAr : selectedGospel.keyThemeEn}
                  </p>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border space-y-3 ${
                  isLight ? 'bg-amber-100/60 border-amber-300' : 'bg-amber-950/20 border-amber-500/30'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div
                    className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                      isLight ? 'text-amber-950' : 'text-amber-400'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    {isArabic ? 'أبرز المقاطع والخصائص الأسلوبية' : 'Notable Passages & Characteristics'}
                  </div>

                  {selectedGospel.audioUrl && (
                    <button
                      onClick={() =>
                        playScriptureAudio(
                          selectedGospel.id,
                          selectedGospel.audioUrl!,
                          selectedGospel.audioFallbackUrl
                        )
                      }
                      disabled={audioLoading && playingAudioId === selectedGospel.id}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        playingAudioId === selectedGospel.id
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                          : isLight
                          ? 'bg-amber-200/90 text-amber-950 hover:bg-amber-300 border-amber-400'
                          : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border-amber-500/30'
                      }`}
                    >
                      {audioLoading && playingAudioId === selectedGospel.id ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>{isArabic ? 'جارٍ التحميل...' : 'Buffering...'}</span>
                        </>
                      ) : playingAudioId === selectedGospel.id ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'إيقاف التسجيل' : 'Pause'}</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>
                            {isArabic
                              ? `استماع لتسجيل: ${selectedGospel.passageRefAr || selectedGospel.gospelAr}`
                              : `Listen: ${selectedGospel.passageRefEn || selectedGospel.gospelEn}`}
                          </span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {playingAudioId === selectedGospel.id && (
                  <div
                    className={`p-3 rounded-lg border space-y-2 ${
                      isLight ? 'bg-amber-50 border-amber-300' : 'bg-amber-500/10 border-amber-500/20'
                    }`}
                  >
                    <div
                      className={`flex flex-wrap items-center justify-between gap-1 text-[11px] font-bold ${
                        isLight ? 'text-amber-950' : 'text-amber-300'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Music className="w-3.5 h-3.5 animate-pulse text-amber-500" />
                        {isArabic ? selectedGospel.passageRefAr : selectedGospel.passageRefEn}
                      </span>
                      <span className="font-mono">{formatAudioTime(audioCurrentTime)} / {formatAudioTime(audioDuration)}</span>
                    </div>
                    <div className="w-full bg-slate-300 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: `${audioProgress}%` }} />
                    </div>
                  </div>
                )}

                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                  {isArabic ? selectedGospel.notablePassageAr : selectedGospel.notablePassageEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Scripture Audio Studio */}
      {activeTab === 'scriptures' && (
        <div className="space-y-6">
          <AncientManuscriptHighResView
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Scripture Selection Sidebar */}
          <div className="lg:col-span-4 space-y-2.5">
            <h3
              className={`text-sm font-black uppercase tracking-wider flex items-center gap-2 mb-3 ${
                isLight ? 'text-amber-950' : 'text-slate-400'
              }`}
            >
              <Volume2 className="w-4 h-4 text-amber-500" />
              {isArabic ? 'تسجيلات النصوص الإنجيلية المقررة' : 'Accredited Scripture Recordings'}
            </h3>
            {AUTHENTIC_CHRISTIAN_SCRIPTURE_RECORDINGS.map((rec) => {
              const isSelected = selectedScripture.id === rec.id;
              const isPlaying = playingAudioId === rec.id;
              return (
                <button
                  key={rec.id}
                  onClick={() => setSelectedScripture(rec)}
                  className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 shadow-sm ${
                    isSelected
                      ? isLight
                        ? 'bg-amber-100 border-amber-500 text-amber-950 font-black shadow-md'
                        : 'bg-gradient-to-r from-amber-600/25 to-purple-600/25 border-amber-500 text-amber-300 font-bold shadow-md'
                      : isLight
                      ? 'bg-white border-amber-200/70 hover:border-amber-400 text-slate-900'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-bold leading-tight">
                      {isArabic ? rec.titleAr : rec.titleEn}
                    </div>
                    {isPlaying && (
                      <span
                        className={`flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded border shrink-0 font-bold ${
                          isLight
                            ? 'bg-amber-200 text-amber-950 border-amber-400'
                            : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        }`}
                      >
                        <Music className="w-3 h-3 animate-spin" />
                        {isArabic ? 'يُعزف' : 'Playing'}
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-xs mt-1 flex items-center gap-1.5 font-medium ${
                      isLight ? 'text-amber-900 font-bold' : 'text-amber-400/90'
                    }`}
                  >
                    <BookOpen className="w-3 h-3 text-amber-500" />
                    <span>{isArabic ? rec.referenceAr : rec.referenceEn}</span>
                  </div>
                </button>
              );
            })}

            {/* Note badge */}
            <div
              className={`p-3 rounded-xl border text-[11px] space-y-1 ${
                isLight ? 'bg-amber-50/80 border-amber-300 text-slate-800' : 'bg-slate-900/60 border-slate-800 text-slate-400'
              }`}
            >
              <div
                className={`flex items-center gap-1.5 font-bold ${
                  isLight ? 'text-amber-950' : 'text-amber-400'
                }`}
              >
                <Radio className="w-3.5 h-3.5 text-amber-500" />
                <span>{isArabic ? 'تسجيلات كنسية حقيقية 100%' : '100% Authentic Human Voice'}</span>
              </div>
              <p className="leading-relaxed font-medium">
                {isArabic
                  ? 'تم استبدال النطق الحاسوبي بتسجيلات صوتية كنسية حقيقية بصوت قراء معتمدين للكتاب المقدس العربي (سميث وفانديك) لضمان الدقة الروحية واللغوية الكاملة.'
                  : 'Synthesized browser speech has been replaced by authentic human church audio recordings from official Arabic Holy Bible archives.'}
              </p>
            </div>
          </div>

          {/* Scripture Detail & Audio Player Card */}
          <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-5`}>
            {/* Header & Meta */}
            <div className="pb-3 border-b border-amber-500/20 flex flex-wrap items-start justify-between gap-3">
              <div>
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    isLight ? 'text-amber-900' : 'text-amber-400'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  {isArabic ? selectedScripture.referenceAr : selectedScripture.referenceEn}
                </span>
                <h3
                  className={`text-xl md:text-2xl font-black mt-1 ${
                    isLight ? 'text-amber-950' : 'text-white'
                  }`}
                >
                  {isArabic ? selectedScripture.titleAr : selectedScripture.titleEn}
                </h3>
                <p
                  className={`text-xs md:text-sm mt-1 font-medium ${
                    isLight ? 'text-amber-900' : 'text-amber-200/80'
                  }`}
                >
                  ✨ {isArabic ? selectedScripture.themeAr : selectedScripture.themeEn}
                </p>
              </div>

              {/* Player Button */}
              <button
                onClick={() =>
                  playScriptureAudio(
                    selectedScripture.id,
                    selectedScripture.audioUrl,
                    selectedScripture.audioFallbackUrl
                  )
                }
                disabled={audioLoading && playingAudioId === selectedScripture.id}
                className={`flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-xl text-sm font-bold transition-all shadow-md border ${
                  playingAudioId === selectedScripture.id
                    ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-amber-500/30'
                    : isLight
                    ? 'bg-amber-200/90 text-amber-950 hover:bg-amber-300 border-amber-400'
                    : 'bg-gradient-to-r from-amber-600/30 to-purple-600/30 text-amber-300 hover:from-amber-600/40 hover:to-purple-600/40 border-amber-500/40'
                }`}
              >
                {audioLoading && playingAudioId === selectedScripture.id ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isArabic ? 'جارٍ التحميل...' : 'Buffering...'}</span>
                  </>
                ) : playingAudioId === selectedScripture.id ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>{isArabic ? 'إيقاف مؤقت' : 'Pause'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>{isArabic ? 'تشغيل التسجيل الصوتي' : 'Play Authentic Audio'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Active Audio Player Progress Bar */}
            {playingAudioId === selectedScripture.id && (
              <div
                className={`p-4 rounded-xl border space-y-3 ${
                  isLight ? 'bg-amber-50 border-amber-300' : 'bg-amber-500/10 border-amber-500/30'
                }`}
              >
                <div
                  className={`flex flex-wrap items-center justify-between gap-2 text-xs font-bold ${
                    isLight ? 'text-amber-950' : 'text-amber-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Music className="w-4 h-4 animate-bounce text-amber-500" />
                    {isArabic ? selectedScripture.referenceAr : selectedScripture.referenceEn}
                  </span>
                  <span
                    className={`text-[11px] px-2.5 py-0.5 rounded-full border font-bold ${
                      isLight
                        ? 'bg-amber-200 border-amber-400 text-amber-950'
                        : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                    }`}
                  >
                    {isArabic ? selectedScripture.reciterAr : selectedScripture.reciterEn}
                  </span>
                </div>

                <div className="w-full bg-slate-300 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 transition-all duration-200 rounded-full"
                    style={{ width: `${audioProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-bold">
                  <span className="font-mono text-amber-600 dark:text-amber-300">{formatAudioTime(audioCurrentTime)}</span>
                  <span className="text-amber-800 dark:text-amber-400 flex items-center gap-1.5 text-[11px]">
                    <Radio className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                    {isArabic ? 'تسجيل كنسي حقيقي — غير مخلق آلياً' : 'Authentic Church Recording'}
                  </span>
                  <span className="font-mono">{audioDuration > 0 ? formatAudioTime(audioDuration) : '--:--'}</span>
                </div>
              </div>
            )}

            {audioError && playingAudioId === selectedScripture.id && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-xs text-rose-700 dark:text-rose-300 font-bold">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{audioError}</span>
              </div>
            )}

            {/* Scripture Full Biblical Text */}
            <div
              className={`p-5 md:p-6 rounded-xl border space-y-3 ${
                isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-900/80 border-slate-700/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    isLight ? 'text-amber-950' : 'text-slate-400'
                  }`}
                >
                  <Scroll className="w-3.5 h-3.5 text-amber-500" />
                  {isArabic ? 'النص الإنجيلي المعتمد في المنهج الوزاري' : 'Ministry-Accredited Scripture Text'}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded border font-bold ${
                    isLight
                      ? 'bg-amber-200 border-amber-400 text-amber-950'
                      : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                  }`}
                >
                  {isArabic ? 'ترجمة سميث وفانديك' : 'Smith & Van Dyck'}
                </span>
              </div>
              <blockquote
                className={`text-base md:text-lg font-serif italic leading-loose border-s-4 border-amber-500 ps-4 py-1 ${
                  isLight ? 'text-slate-950 font-bold' : 'text-amber-100'
                }`}
              >
                {isArabic ? selectedScripture.textAr : selectedScripture.textEn}
              </blockquote>
            </div>

            {/* Secondary Language Translation & Theological Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-xl border space-y-1.5 ${
                  isLight ? 'bg-slate-100/80 border-slate-300' : 'bg-slate-800/40 border-slate-700/50'
                }`}
              >
                <div
                  className={`text-xs font-black uppercase tracking-wider ${
                    isLight ? 'text-slate-900' : 'text-slate-400'
                  }`}
                >
                  {isArabic ? 'الترجمة الإنجليزية الموازية' : 'Arabic Translation'}
                </div>
                <p className={`text-xs md:text-sm leading-relaxed italic ${isLight ? 'text-slate-900 font-medium' : 'text-slate-300'}`}>
                  {isArabic ? selectedScripture.textEn : selectedScripture.textAr}
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border space-y-1.5 ${
                  isLight ? 'bg-amber-100/60 border-amber-300' : 'bg-amber-950/20 border-amber-500/30'
                }`}
              >
                <div
                  className={`text-xs font-black uppercase tracking-wider ${
                    isLight ? 'text-amber-950' : 'text-amber-400'
                  }`}
                >
                  {isArabic ? 'المدلول الروحي واللاهوتي' : 'Spiritual & Theological Reflection'}
                </div>
                <p className={`text-xs md:text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                  {isArabic ? selectedScripture.themeAr : selectedScripture.themeEn}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Tab 5: Contemporary Bioethics Sandbox */}
      {activeTab === 'bioethics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Bioethics Topics Selector */}
          <div className="lg:col-span-4 space-y-2.5">
            <h3
              className={`text-sm font-black uppercase tracking-wider flex items-center gap-2 mb-3 ${
                isLight ? 'text-amber-950' : 'text-slate-400'
              }`}
            >
              <Scale className="w-4 h-4 text-amber-500" />
              {isArabic ? 'قضايا الأخلاقيات الحيوية والطبية' : 'Bioethical Issues'}
            </h3>
            {BIOETHICS_TOPICS.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 shadow-sm ${
                    isSelected
                      ? isLight
                        ? 'bg-amber-100 border-amber-500 text-amber-950 font-black shadow-md'
                        : 'bg-gradient-to-r from-amber-600/25 to-purple-600/25 border-amber-500 text-amber-300 font-bold shadow-md'
                      : isLight
                      ? 'bg-white border-amber-200/70 hover:border-amber-400 text-slate-900'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-sm font-bold leading-tight">
                    {isArabic ? topic.titleAr : topic.titleEn}
                  </div>
                  <div className="mt-1.5">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                        topic.statusEn === 'Permitted & Encouraged'
                          ? isLight
                            ? 'bg-emerald-100 text-emerald-950 border border-emerald-400'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : topic.statusEn === 'Strictly Prohibited'
                          ? isLight
                            ? 'bg-rose-100 text-rose-950 border border-rose-400'
                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : isLight
                          ? 'bg-amber-100 text-amber-950 border border-amber-400'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {isArabic ? topic.statusAr : topic.statusEn}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bioethics Analysis Card */}
          <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-5`}>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-500/20">
              <h3
                className={`text-xl md:text-2xl font-black ${
                  isLight ? 'text-amber-950' : 'text-white'
                }`}
              >
                {isArabic ? selectedTopic.titleAr : selectedTopic.titleEn}
              </h3>
              <span
                className={`text-xs px-3 py-1 rounded-full font-bold border ${
                  selectedTopic.statusEn === 'Permitted & Encouraged'
                    ? isLight
                      ? 'bg-emerald-100 text-emerald-950 border-emerald-400'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : selectedTopic.statusEn === 'Strictly Prohibited'
                    ? isLight
                      ? 'bg-rose-100 text-rose-950 border-rose-400'
                      : 'bg-red-500/20 text-red-300 border border-red-500/40'
                    : isLight
                    ? 'bg-amber-100 text-amber-950 border-amber-400'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}
              >
                {isArabic ? selectedTopic.statusAr : selectedTopic.statusEn}
              </span>
            </div>

            <div
              className={`p-4 rounded-xl border space-y-2 ${
                isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-900/60 border-slate-700/60'
              }`}
            >
              <h4
                className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  isLight ? 'text-amber-950' : 'text-amber-400'
                }`}
              >
                <HeartHandshake className="w-4 h-4" />
                {isArabic ? 'المبدأ اللاهوتي والكرامة الإنسانية' : 'Theological Principle & Human Dignity'}
              </h4>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                {isArabic ? selectedTopic.theologicalPrincipleAr : selectedTopic.theologicalPrincipleEn}
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border space-y-2 ${
                isLight ? 'bg-purple-50/70 border-purple-200' : 'bg-purple-950/20 border-purple-500/30'
              }`}
            >
              <h4
                className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  isLight ? 'text-purple-950' : 'text-purple-400'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                {isArabic ? 'الضوابط الرعوية والتوجيه الأخلاقي' : 'Pastoral Guidance & Ethical Boundaries'}
              </h4>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-200'}`}>
                {isArabic ? selectedTopic.pastoralGuidanceAr : selectedTopic.pastoralGuidanceEn}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Ministerial Scenario Simulator / Quiz */}
      {activeTab === 'quiz' && (
        <div className={`max-w-3xl mx-auto w-full ${cardClasses} p-6 rounded-2xl space-y-6`}>
          <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-amber-500" />
              <h3 className={`font-black text-lg ${isLight ? 'text-amber-950' : 'text-white'}`}>
                {isArabic ? 'محاكي الأسئلة الوزارية وسيناريوهات الفكر المسيحي' : 'Ministerial Scenario & Reasoning Quiz'}
              </h3>
            </div>
            <div
              className={`text-xs font-bold px-3 py-1 rounded-full border ${
                isLight
                  ? 'bg-amber-200 border-amber-400 text-amber-950'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}
            >
              {isArabic
                ? `السؤال ${currentQIndex + 1} من ${CHRISTIAN_SCENARIO_QUIZ.length}`
                : `Question ${currentQIndex + 1} of ${CHRISTIAN_SCENARIO_QUIZ.length}`}
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-4">
            <h4 className={`text-base md:text-lg font-bold leading-relaxed ${isLight ? 'text-slate-950' : 'text-white'}`}>
              {isArabic
                ? CHRISTIAN_SCENARIO_QUIZ[currentQIndex].questionAr
                : CHRISTIAN_SCENARIO_QUIZ[currentQIndex].questionEn}
            </h4>

            {/* Options */}
            <div className="space-y-2.5">
              {(isArabic
                ? CHRISTIAN_SCENARIO_QUIZ[currentQIndex].optionsAr
                : CHRISTIAN_SCENARIO_QUIZ[currentQIndex].optionsEn
              ).map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === CHRISTIAN_SCENARIO_QUIZ[currentQIndex].correctIndex;

                let btnStyles = isLight
                  ? 'bg-slate-50 border-slate-300 hover:border-amber-400 text-slate-900 font-semibold shadow-sm'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyles = isLight
                      ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black shadow-md'
                      : 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                  } else if (isSelected) {
                    btnStyles = isLight
                      ? 'bg-rose-100 border-rose-500 text-rose-950 font-bold shadow-md'
                      : 'bg-red-950/40 border-red-500 text-red-200';
                  }
                } else if (isSelected) {
                  btnStyles = isLight
                    ? 'bg-amber-100 border-amber-500 text-amber-950 font-black shadow-md'
                    : 'bg-amber-600/30 border-amber-500 text-amber-300 font-bold';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleQuizSubmit(idx)}
                    className={`w-full text-start p-4 min-h-[48px] rounded-xl border text-sm leading-relaxed transition-all flex items-start justify-between gap-3 ${btnStyles}`}
                  >
                    <span>{option}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next */}
            {isAnswerSubmitted && (
              <div
                className={`p-4 rounded-xl border space-y-3 animate-fadeIn ${
                  isLight ? 'bg-amber-100/60 border-amber-300 shadow-sm' : 'bg-slate-900/80 border-slate-700'
                }`}
              >
                <div
                  className={`text-xs font-black uppercase tracking-wider ${
                    isLight ? 'text-amber-950' : 'text-amber-400'
                  }`}
                >
                  {isArabic ? 'التحليل المنهجي المعتمد' : 'Accredited Curriculum Analysis'}
                </div>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-300'}`}>
                  {isArabic
                    ? CHRISTIAN_SCENARIO_QUIZ[currentQIndex].explanationAr
                    : CHRISTIAN_SCENARIO_QUIZ[currentQIndex].explanationEn}
                </p>
                <div className="flex justify-end pt-2">
                  {currentQIndex < CHRISTIAN_SCENARIO_QUIZ.length - 1 ? (
                    <button
                      onClick={nextQuestion}
                      className="px-5 py-2.5 min-h-[44px] flex items-center justify-center rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all shadow-md shadow-amber-600/30"
                    >
                      {isArabic ? 'السؤال التالي ←' : 'Next Question →'}
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400">
                        {isArabic
                          ? `النتيجة النهائية: ${quizScore} من ${CHRISTIAN_SCENARIO_QUIZ.length}`
                          : `Final Score: ${quizScore} / ${CHRISTIAN_SCENARIO_QUIZ.length}`}
                      </span>
                      <button
                        onClick={resetQuiz}
                        className="flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-600"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'إعادة الاختبار' : 'Restart Quiz'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global High-Resolution Lightbox Modal */}
      <HiResImageModal
        isOpen={Boolean(lightboxModalData)}
        onClose={() => setLightboxModalData(null)}
        data={lightboxModalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};

