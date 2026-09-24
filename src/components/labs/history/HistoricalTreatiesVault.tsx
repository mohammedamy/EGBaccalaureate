import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Scroll,
  ShieldAlert,
  CheckCircle2,
  Scale,
  Award,
} from 'lucide-react';
import treatyPhoto from '../../../assets/historyLab/treaty_of_london_1840.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface TreatyHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  significanceAr: string;
  significanceEn: string;
}

export const TREATY_HOTSPOTS: TreatyHotspot[] = [
  {
    id: 'convention_title',
    xPct: 32,
    yPct: 28,
    titleAr: 'ديباجة معاهدة لندن (Convention of London 1840)',
    titleEn: 'Convention of London 1840 Preamble',
    significanceAr: 'عقدتها الدول الأوروبية الكبرى (بريطانيا، روسيا، النمسا، بروسيا) مع الدولة العثمانية لتطويق نفوذ محمد علي بعد انتصاراته الساحقة في معركة نزيب 1839.',
    significanceEn: 'Formulated by European powers (Britain, Russia, Austria, Prussia) with the Ottoman Empire to curb Muhammad Ali Pasha following his victory at Nezib.',
  },
  {
    id: 'wax_seals',
    xPct: 28,
    yPct: 78,
    titleAr: 'أختام الشمع الأحمر الدبلوماسية الملكية',
    titleEn: 'Red Wax Diplomatic Pendant Seals',
    significanceAr: 'أختام سفراء بريطانيا (بالمرستون) والنمسا وروسيا ووزير خارجية فرنسا لاحقاً، والتي صادقت على تجريد مصر من فتوحاتها في الشام والحجاز وكريت.',
    significanceEn: 'Seals of European plenipotentiaries mandating Egypt’s evacuation of Syria, the Hijaz, and Crete, restricting rule to hereditary Egypt.',
  },
  {
    id: 'sultan_tughra',
    xPct: 72,
    yPct: 28,
    titleAr: 'الطغراء العثمانية المذهبة وفرمانا 1841',
    titleEn: 'Imperial Sultanic Tughra & 1841 Firmans',
    significanceAr: 'أصدر السلطان العثماني فرماني فبراير ويونيو 1841 مكملين لمعاهدة لندن: وراثة مصر لأكبر أبناء محمد علي، وتقليص الجيش المصري إلى 18 ألف مقاتل وقت السلم.',
    significanceEn: 'The Sultan issued the 1841 firmans granting hereditary rule to Muhammad Ali’s eldest male heir, while restricting the peacetime army to 18,000 soldiers.',
  },
  {
    id: 'palmerston_signature',
    xPct: 38,
    yPct: 60,
    titleAr: 'توقيع وزير الخارجية البريطاني لورد بالمرستون',
    titleEn: 'Signature of British Foreign Secretary Palmerston',
    significanceAr: 'مهندس السياسة البريطانية التي اعتبرت صعود مصر دولة كبرى تهديداً مباشراً لطريق التجارة والمواصلات البريطانية إلى الهند والتوازن الدولي.',
    significanceEn: 'Architect of British policy viewing Egypt’s imperial expansion as a direct threat to British trade routes to India and the Balance of Power.',
  },
];

export interface MinisterialTreatyItem {
  id: string;
  year: number;
  nameAr: string;
  nameEn: string;
  partiesAr: string;
  partiesEn: string;
  hiddenMotiveAr: string;
  hiddenMotiveEn: string;
  clausesAr: string[];
  clausesEn: string[];
  thanawyaTakeawayAr: string;
  thanawyaTakeawayEn: string;
}

export const MINISTERIAL_TREATIES_DATA: MinisterialTreatyItem[] = [
  {
    id: 'arish_1800',
    year: 1800,
    nameAr: 'معاهدة العريش (يناير 1800)',
    nameEn: 'Treaty of El-Arish (Jan 1800)',
    partiesAr: 'الجنرال كليبر (فرنسا) والدولة العثمانية وقائد الأسطول الإنجليزي',
    partiesEn: 'General Kléber (France), Ottoman Empire, British Fleet',
    hiddenMotiveAr: 'أدرك كليبر استحالة بقاء الحملة لنقص الجند وثورات المصريين وحصار الإنجليز للشواطئ المصرية.',
    hiddenMotiveEn: 'Kléber recognized the French Expedition was unsustainable due to British naval blockade and ongoing revolts.',
    clausesAr: [
      'جلاء القوات الفرنسية عن مصر على نفقة الدولة العثمانية بكامل أسلحتهم ومعداتهم.',
      'رفضت الحكومة البريطانية المعاهدة وأصرت على استسلام الجيش الفرنسي كأسرى حرب.',
      'رفض كليبر الإهانة واستأنف القتال وهزم الجيش العثماني في معركة عين شمس.',
    ],
    clausesEn: [
      'French evacuation from Egypt funded by Ottomans with full weapons and honor.',
      'British government rejected treaty, demanding French surrender as prisoners of war.',
      'Kléber refused surrender, attacking and defeating Ottoman forces at Ain Shams.',
    ],
    thanawyaTakeawayAr: 'فشل المعاهدة بسبب التعنت الإنجليزي أدى لتأخير جلاء الحملة الفرنسية عن مصر حتى عام 1801.',
    thanawyaTakeawayEn: 'British intransigence caused the treaty to collapse, prolonging the French occupation until 1801.',
  },
  {
    id: 'balta_liman_1838',
    year: 1838,
    nameAr: 'معاهدة بلطة ليمان التجارية (أغسطس 1838)',
    nameEn: 'Treaty of Balta Liman (Aug 1838)',
    partiesAr: 'بريطانيا والدولة العثمانية (موجهة ضد محمد علي)',
    partiesEn: 'Great Britain & Ottoman Empire (Targeting Muhammad Ali)',
    hiddenMotiveAr: 'ضرب نظام الاحتكار الاقتصادي الذي طبقه محمد علي، وفتح الأسواق المصرية أمام تدفق البضائع البريطانية الناتجة عن الثورة الصناعية.',
    hiddenMotiveEn: 'Destroy Muhammad Ali’s state monopoly system to flood Egyptian markets with British industrial manufactured goods.',
    clausesAr: [
      'إلغاء نظام الاحتكار التجاري في كافة أرجاء الدولة العثمانية بما فيها مصر.',
      'السماح للتجار الأجانب بحرية البيع والشراء في الأسواق الداخلية دون عوائق جمركية.',
      'رفض محمد علي في البداية حفاظاً على الإنتاج الداخلي، ثم اضطر لتنفيذها بموجب معاهدة لندن 1840.',
    ],
    clausesEn: [
      'Abolition of all trade monopolies throughout the Ottoman Empire, including Egypt.',
      'Foreign merchants granted unrestricted access to internal commerce and agriculture.',
      'Initially refused by Muhammad Ali; enforced following the 1840 Convention of London.',
    ],
    thanawyaTakeawayAr: 'سقوط نظام الاحتكار أدى لسيادة مناخ الحرية الاقتصادية (الباب المفتوح) وتدهور الصناعات الحربية تدريجياً.',
    thanawyaTakeawayEn: 'Collapse of the monopoly system triggered free-market penetration and gradual decline of national domestic industries.',
  },
  {
    id: 'london_1840',
    year: 1840,
    nameAr: 'معاهدة لندن وفرمانا 1841',
    nameEn: 'Convention of London (1840) & 1841 Firmans',
    partiesAr: 'إنجلترا، روسيا، النمسا، بروسيا، الدولة العثمانية (ضد محمد علي)',
    partiesEn: 'Britain, Russia, Austria, Prussia, Ottomans (vs. Muhammad Ali)',
    hiddenMotiveAr: 'منع قيام دولة عربية كبرى وموحدة بزعامة محمد علي تهدد التوازن الدولي والمصالح الاستعمارية الأوروبية.',
    hiddenMotiveEn: 'Prevent the emergence of a unified, powerful Arab empire led by Egypt that threatened European Balance of Power.',
    clausesAr: [
      'إعطاء محمد علي وخلفائه حكم مصر وراثياً، وعكا طوال حياته فقط (سقطت برفضه المهلة الأولى).',
      'إخلاء قوات مصر لبلاد الشام والحجاز وكريت وإعادة الأسطول العثماني.',
      'اعتبار قوات مصر البرية والبحرية جزءاً من قوات السلطان العثماني ودفع جزية سنوية.',
      'تحديد جيش مصر بـ 18,000 مقاتل وقت السلم، وعدم بناء سفن حربية إلا بإذن السلطان.',
    ],
    clausesEn: [
      'Muhammad Ali granted hereditary rule of Egypt and lifelong rule of Acre.',
      'Evacuation of Egyptian forces from Levant, Hijaz, and Crete; return of Ottoman fleet.',
      'Egyptian land and naval forces placed under Sultan’s sovereignty; annual tribute paid.',
      'Egyptian peacetime army limited to 18,000 troops; prohibition on warships without firman.',
    ],
    thanawyaTakeawayAr: 'حرمت مصر من انتصاراتها الخارجية الكبرى، لكنها جعلت لمصر شخصية دولية معترفاً بها بحدود وراثية ثابتة.',
    thanawyaTakeawayEn: 'Stripped Egypt of overseas imperial conquests while formally granting it hereditary international standing.',
  },
  {
    id: 'entente_cordiale_1904',
    year: 1904,
    nameAr: 'الوفاق الودي الفرنسي الإنجليزي (1904م)',
    nameEn: 'Entente Cordiale (1904)',
    partiesAr: 'إنجلترا وفرنسا (صفقة استعمارية كبرى)',
    partiesEn: 'Great Britain & France (Colonial Bargain)',
    hiddenMotiveAr: 'تسوية الخلافات الاستعمارية للتفرغ لمواجهة القوة المتنامية لألمانيا القيصرية في أوروبا.',
    hiddenMotiveEn: 'Settle colonial disputes in Africa to counter the rising military strength of Imperial Germany.',
    clausesAr: [
      'إطلاق يد إنجلترا في مصر مقابل إطلاق يد فرنسا في مراكش (المغرب).',
      'تخلت فرنسا تماماً عن تأييد الحركة الوطنية المصرية ومصطفى كامل.',
      'اطمأن اللورد كرومر إلى عدم وجود معارضة دولية فاشتد في قمع الوطنيين (حادثة دنشواي 1906).',
    ],
    clausesEn: [
      'Britain recognized French dominance in Morocco in exchange for France recognizing British rule in Egypt.',
      'France withdrew all support for Mustafa Kamel and the Egyptian national movement.',
      'Lord Cromer tightened autocratic repression, directly leading to the Dinshaway Incident (1906).',
    ],
    thanawyaTakeawayAr: 'درس تاريخي حاسم في المنهج: الدول الاستعمارية لا تقيم وزناً إلا لمصالحها وتضحي بحلفائها دوماً.',
    thanawyaTakeawayEn: 'Curriculum core lesson: Imperialist nations prioritize only their interests, readily abandoning local allies.',
  },
  {
    id: 'sykes_picot_1916',
    year: 1916,
    nameAr: 'اتفاقية سايكس بيكو السرية (1916م)',
    nameEn: 'Sykes-Picot Agreement (1916)',
    partiesAr: 'بريطانيا (مارك سايكس) وفرنسا (فرانسوا بيكو) بمباركة روسيا القيصرية',
    partiesEn: 'Britain (Mark Sykes) & France (François Georges-Picot)',
    hiddenMotiveAr: 'المؤامرة الاستعمارية لتقسيم أراضي الهلال الخصيب وأملاك الدولة العثمانية قبل انتهاء الحرب العالمية الأولى.',
    hiddenMotiveEn: 'Secret partition of Ottoman Arab provinces in the Fertile Crescent during World War I.',
    clausesAr: [
      'فرنسا تأخذ جنوب الأناضول (أطنة والإسكندرونة) وساحل الشام وشمال العراق (الموصل).',
      'إنجلترا تأخذ بغداد والبصرة وحيفا وعكا وأجزاء من جنوب الشام حتى الخليج.',
      'وضع فلسطين تحت إدارة دولية (عُدلت في مؤتمر سان ريمو 1920 لصالح الانتداب البريطاني لتنفيذ وعد بلفور).',
    ],
    clausesEn: [
      'France received southern Anatolia, coastal Syria, and northern Iraq (Mosul).',
      'Britain secured Baghdad, Basra, Haifa, Acre, and Transjordan.',
      'Palestine placed under international administration, revised at San Remo (1920) for British mandate.',
    ],
    thanawyaTakeawayAr: 'غدر الحلفاء بالشريف حسين بن علي وثورته العربية 1916 ورفض إقامة الخلافة أو الدولة العربية الموحدة.',
    thanawyaTakeawayEn: 'Allied betrayal of Sharif Hussein’s 1916 Arab Revolt, denying Arab unified independence.',
  },
  {
    id: 'declaration_1922',
    year: 1922,
    nameAr: 'تصريح 28 فبراير 1922 (الاستقلال المقيد)',
    nameEn: 'Unilateral Declaration of Feb 28, 1922',
    partiesAr: 'الحكومة البريطانية (إعلان أحادي الجانب)',
    partiesEn: 'British Government (Unilateral Declaration)',
    hiddenMotiveAr: 'امتصاص غضب الشعب المصري بعد ثورة 1919 ونفي سعد زغلول، مع الإبقاء على جوهر الاحتلال العسكري.',
    hiddenMotiveEn: 'Appease Egyptian revolutionary unrest following the 1919 uprising while maintaining military presence.',
    clausesAr: [
      'إنهاء الحماية البريطانية على مصر والاعتراف بمصر دولة مستقلة ذات سيادة.',
      'التحفظات الأربعة: تأمين مواصلات الإمبراطورية، الدفاع عن مصر، حماية المصالح الأجنبية، والتصرف في السودان.',
      'رفع لقب حاكم مصر من "سلطان" إلى "ملك" (الملك فؤاد الأول) وصدور دستور 1923.',
    ],
    clausesEn: [
      'Termination of British Protectorate; recognition of Egypt as an independent sovereign state.',
      'Four Reserved Points: British Imperial communications, defense, minority protection, and Sudan status.',
      'Ruler’s title elevated from Sultan to King (Fuad I); paved the way for the 1923 Constitution.',
    ],
    thanawyaTakeawayAr: 'استقلال صوري ناقص لم يحقق الجلاء الفعلي لوجود جيش الاحتلال بذريعة التحفظات الأربعة.',
    thanawyaTakeawayEn: 'Incomplete nominal sovereignty that legitimized British military garrisoning under the Four Reservations.',
  },
  {
    id: 'treaty_1936',
    year: 1936,
    nameAr: 'معاهدة الصداقة والتحالف (معاهدة 1936م)',
    nameEn: 'Anglo-Egyptian Treaty of 1936',
    partiesAr: 'مصطفى النحاس باشا (الوفد/مصر) والحكومة البريطانية',
    partiesEn: 'Mostafa El-Nahas Pasha (Wafd/Egypt) & Great Britain',
    hiddenMotiveAr: 'تخوف بريطانيا من اندلاع حرب عالمية ثانية وصعود الفاشية والنازية (غزو إيطاليا للحبشة 1935).',
    hiddenMotiveEn: 'British urgency to secure Egyptian cooperation ahead of WWII following Mussolini’s invasion of Ethiopia (1935).',
    clausesAr: [
      'انتهاء احتلال مصر عسكرياً مع استمرار بقاء قوات بريطانية في منطقة قناة السويس.',
      'انضمام مصر إلى عصبة الأمم كدولة مستقلة وإلغاء الامتيازات الأجنبية في مؤتمر مونترو 1937.',
      'إرجاع الجيش المصري إلى السودان والاعتراف بالإدارة المشتركة.',
      'ألغاها مصطفى النحاس باشا في أكتوبر 1951 معلناً الكفاح المسلح لجيش الفدائيين في القناة.',
    ],
    clausesEn: [
      'Military occupation officially ended, but British troops remained garrisoned around Suez Canal.',
      'Egypt joined League of Nations; capitulations abolished at Montreux Convention (1937).',
      'Egyptian Army returned to Sudan under the Condominium Agreement.',
      'Unilaterally abrogated by El-Nahas Pasha in October 1951, unleashing guerrilla resistance.',
    ],
    thanawyaTakeawayAr: 'حولت العلاقة بين مصر وبريطانيا من احتلال إلى تحالف، لكنها رسخت الوجود العسكري بمنطقة القناة.',
    thanawyaTakeawayEn: 'Transformed Egypt-UK relations from occupation to alliance while cementing British troops along the Canal.',
  },
  {
    id: 'camp_david_peace_1978_79',
    year: 1979,
    nameAr: 'اتفاقية كامب ديفيد (1978) ومعاهدة السلام (1979)',
    nameEn: 'Camp David Accords (1978) & Peace Treaty (1979)',
    partiesAr: 'الرئيس محمد أنور السادات، مناحم بيجن، ورعاية الرئيس الأمريكي جيمي كارتر',
    partiesEn: 'President Anwar Sadat, Menachem Begin, President Jimmy Carter',
    hiddenMotiveAr: 'استثمار النصر العسكري في حرب أكتوبر 1973 لتحقيق الانسحاب الإسرائيلي الكامل من الأراضي المصرية سلمياً.',
    hiddenMotiveEn: 'Capitalizing on the military breakthrough of the 1973 War to enforce complete Israeli withdrawal from Sinai.',
    clausesAr: [
      'إنهاء حالة الحرب وإقامة علاقات سلام طبيعية بين الطرفين.',
      'انسحاب إسرائيل التام من شبه جزيرة سيناء إلى ما وراء الحدود الدولية لمصر.',
      'تطبيق قرار مجلس الأمن 242 والاعتراف بالحقوق المشروعة للشعب الفلسطيني.',
      'إنشاء مناطق محدودة السلاح على جانبي الحدود (المناطق أ، ب، ج في سيناء، والمنطقة د).',
    ],
    clausesEn: [
      'Termination of the state of war and establishment of normal peaceful diplomatic relations.',
      'Complete Israeli withdrawal from the Sinai Peninsula to the international frontier.',
      'Implementation of UN Resolution 242 and recognition of legitimate Palestinian rights.',
      'Creation of demilitarized and limited-armament zones (Zones A, B, C in Sinai, Zone D).',
    ],
    thanawyaTakeawayAr: 'استعادة سيناء بالكامل في 25 أبريل 1982، واللجوء للتحكيم الدولي لاستعادة طابا في 19 مارس 1989.',
    thanawyaTakeawayEn: 'Sinai fully liberated on April 25, 1982; Taba regained via international arbitration on March 19, 1989.',
  },
];

export const HistoricalTreatiesVault: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedTreaty, setSelectedTreaty] = useState<MinisterialTreatyItem>(MINISTERIAL_TREATIES_DATA[2]); // Treaty of London 1840 by default
  const [activeHotspot, setActiveHotspot] = useState<TreatyHotspot>(TREATY_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const openFullModal = () => {
    setModalData({
      imageUrl: treatyPhoto,
      titleAr: 'وثيقة معاهدة لندن وفرمانا 1841 — ترسيم حدود مصر الحديثة',
      titleEn: 'Convention of London (1840) & 1841 Ottoman Firmans — Defining Modern Egypt',
      subtitleAr: 'الرق الدبلوماسي الملكي لمعاهدة لندن 1840 بالأختام الشمعية وطغراء السلطان',
      subtitleEn: 'The Royal Sovereign Parchment with Wax Seals and Ottoman Imperial Tughra',
      dateOrEraAr: 'عهد محمد علي باشا (1840 - 1841م) — بناء الدولة الحديثة',
      dateOrEraEn: 'Reign of Muhammad Ali Pasha (1840–1841 CE) — Modern State Building',
      locationAr: 'لندن (المملكة المتحدة) / الأستانة (إسطنبول) / قصر عابدين (القاهرة)',
      locationEn: 'London (UK) / Constantinople (Istanbul) / Abdeen Palace (Cairo)',
      descriptionAr:
        'الوثيقة الدبلوماسية التاريخية المكتوبة على الرق الملكي الأثري بأختام الشمع الأحمر وطغراء السلطان العثماني، التي فرضتها الدول الاستعمارية الكبرى على مصر عقب انتصارات إبراهيم باشا في الشام ومعركة نزيب 1839. حددت المعاهدة حكم مصر وراثياً في أسرة محمد علي مع تقليص الجيش ودفع جزية سنوية وفرض السيادة العثمانية.',
      descriptionEn:
        'The historic diplomatic parchment sealed with red wax pendant seals and the imperial Ottoman Tughra, imposed by major European powers on Egypt following Ibrahim Pasha’s victories in Syria. Established hereditary dynastic rule in Muhammad Ali’s lineage while capping the military and imposing financial tribute.',
    });
  };

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-b from-stone-50 via-amber-50/20 to-slate-100 border-amber-200 shadow-sm text-slate-900'
          : 'bg-gradient-to-b from-stone-950 via-slate-900 to-amber-950/20 border-amber-500/20 shadow-xl text-stone-100'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-amber-500/20 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-700 via-stone-800 to-stone-950 flex items-center justify-center text-amber-200 shadow-lg border border-amber-500/30">
            <Scroll className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-black tracking-tight">
                {isArabic ? 'خزانة المعاهدات والوثائق الدبلوماسية الكبرى' : 'Grand Diplomatic Treaties & Sovereignty Vault'}
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                📜 8 Core Treaties
              </span>
            </div>
            <p className="text-xs text-amber-400/80">
              {isArabic
                ? 'فحص الوثائق الأصلية بالختم الملكي وتحليل بنود المعاهدات الاستعمارية ونواتج التعلم الوزارية'
                : 'High-res diplomatica inspector with wax-sealed treaties analysis and exam takeaway rubrics'}
            </p>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="min-h-[44px] flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-stone-700 hover:from-amber-500 hover:to-stone-600 text-white font-bold text-xs shadow-md transition-all border border-amber-400/30"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'وثيقة لندن الأصلية 4K' : 'Original 4K London Treaty'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 4K Parchment View with Hotspots */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black group max-h-[440px]">
            <img
              src={treatyPhoto}
              alt="Convention of London 1840"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Pulsing Hotspots */}
            {TREATY_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'bg-amber-400 text-stone-950 scale-125 ring-4 ring-amber-300/60 shadow-lg shadow-amber-500/50 z-20'
                      : 'bg-stone-900/80 text-amber-300 hover:bg-amber-500 hover:text-white border border-amber-400/60 shadow-md z-10'
                  }`}
                  title={isArabic ? spot.titleAr : spot.titleEn}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-current animate-ping opacity-60 absolute" />
                  <Sparkles className="w-4 h-4" />
                </button>
              );
            })}

            {/* Bottom Overlay Pill */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur border border-amber-500/30 flex items-center justify-between text-xs text-amber-200">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="line-clamp-1 font-semibold">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-950 border border-amber-500/30 text-amber-300 shrink-0">
                London 1840
              </span>
            </div>
          </div>

          {/* Active Hotspot Explanatory Box */}
          <div
            className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
              isLight ? 'bg-white border-amber-200 text-slate-800' : 'bg-stone-900/60 border-amber-500/20 text-stone-300'
            }`}
          >
            <h5 className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5" />
              {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
            </h5>
            <p>{isArabic ? activeHotspot.significanceAr : activeHotspot.significanceEn}</p>
          </div>
        </div>

        {/* Right Column: 8 Ministerial Treaties Selector & Deep Analysis */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Treaties Horizontal Carousel Pills */}
          <div className="flex flex-wrap gap-1.5">
            {MINISTERIAL_TREATIES_DATA.map((t) => {
              const isSelected = selectedTreaty.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTreaty(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-400 shadow-md font-black'
                      : 'bg-black/30 border-amber-500/20 text-amber-200/80 hover:bg-amber-900/20'
                  }`}
                >
                  <span className="font-mono text-[10px] px-1 py-0.2 rounded bg-black/40 border border-amber-400/30">
                    {t.year}
                  </span>
                  <span>{isArabic ? t.nameAr.split('(')[0] : t.nameEn.split('(')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Treaty Dossier Card */}
          <div
            className={`p-5 rounded-2xl border space-y-4 ${
              isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-900/70 border-amber-500/30'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-amber-500/20">
              <div>
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedTreaty.year} CE
                </span>
                <h4 className="text-lg font-black text-amber-400 mt-1">
                  {isArabic ? selectedTreaty.nameAr : selectedTreaty.nameEn}
                </h4>
              </div>
              <div className="text-xs text-stone-400">
                <span className="font-bold text-amber-300 block">
                  {isArabic ? 'الأطراف الموقعة:' : 'Signatory Parties:'}
                </span>
                <span>{isArabic ? selectedTreaty.partiesAr : selectedTreaty.partiesEn}</span>
              </div>
            </div>

            {/* Hidden Imperialist Motive */}
            <div
              className={`p-3 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-red-50 border-red-200 text-red-950' : 'bg-red-950/20 border-red-500/30 text-red-200'
              }`}
            >
              <span className="font-bold text-red-400 block mb-1 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                {isArabic ? 'الدافع الاستعماري الخفي وحقيقة الموقف الدولي:' : 'Hidden Imperialist Geopolitical Motive:'}
              </span>
              {isArabic ? selectedTreaty.hiddenMotiveAr : selectedTreaty.hiddenMotiveEn}
            </div>

            {/* Treaty Clauses List */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                {isArabic ? 'أهم البنود والشروط الملزمة:' : 'Key Clauses & Enforced Conditions:'}
              </span>
              <ul className="space-y-1.5 text-xs">
                {(isArabic ? selectedTreaty.clausesAr : selectedTreaty.clausesEn).map((clause, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2 p-2.5 rounded-lg border ${
                      isLight ? 'bg-stone-50 border-stone-200 text-stone-800' : 'bg-black/30 border-amber-500/10 text-stone-300'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{clause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thanawya Amma Exam Takeaway */}
            <div
              className={`p-3 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-amber-50 border-amber-200 text-amber-950 font-medium' : 'bg-amber-950/30 border-amber-500/30 text-amber-200'
              }`}
            >
              <span className="font-bold text-amber-400 block mb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                {isArabic ? '🎯 استنتاج واضع الامتحان (الدروس المستفادة):' : '🎯 Ministerial Exam Insight:'}
              </span>
              {isArabic ? selectedTreaty.thanawyaTakeawayAr : selectedTreaty.thanawyaTakeawayEn}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <HiResImageModal
        isOpen={!!modalData}
        data={modalData}
        onClose={() => setModalData(null)}
        lang={isArabic ? 'ar' : 'en'}
        theme={isLight ? 'light' : isContrast ? 'high-contrast' : 'dark'}
      />
    </div>
  );
};
