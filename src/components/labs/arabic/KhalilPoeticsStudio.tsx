import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  BookOpen,
  Award,
  AlertTriangle,
  Play,
  RotateCcw,
  Volume2,
} from 'lucide-react';
import khalilPhoto from '../../../assets/arabic/khalil_poetic_meter_circle_786.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface KhalilHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  roleAr: string;
  roleEn: string;
  historicalContextAr: string;
  historicalContextEn: string;
  pedagogicalTakeawayAr: string;
  pedagogicalTakeawayEn: string;
}

const KHALIL_HOTSPOTS: KhalilHotspot[] = [
  {
    id: 'center_compass_hub',
    xPct: 50,
    yPct: 48,
    titleAr: 'محور الدوائر العروضية والنسب الرياضية',
    titleEn: 'Central Compass Hub & Mathematical Prosody',
    roleAr: 'ابتكار الدوائر العروضية الخمس وحصر أوزان الشعر العربي',
    roleEn: 'Inventing the 5 prosodic circles classifying Arabic poetic meters',
    historicalContextAr:
      'ابتكر الخليل بن أحمد الفراهيدي (100 - 170 هـ / 718 - 786 م) علم العروض في البصرة، مستلهماً إيقاع المطارق في سوق الصفارين؛ فوضع دوائره الخمس (المختلف، المؤتلف، المجتلب، المشتبه، المتفق) واستنبط منها بحور الشعر العربي الستة عشر.',
    historicalContextEn:
      'Al-Khalil ibn Ahmad al-Farahidi (d. 786 CE) invented the science of prosody (Arud) in Basra, inspired by the rhythmic cadences of coppersmith hammers. He modeled the meters onto five geometric circles (al-Mukhtalif, al-Mu’talif, al-Mujtalab, al-Mushtabih, al-Muttafiq).',
    pedagogicalTakeawayAr:
      'علم العروض يقوم على قاعدة صوتية صارمة: "كل ما يُنطق يُكتب (وإن لم يكن مكتوباً)، وكل ما لا يُنطق لا يُكتب (وإن كان مكتوباً)".',
    pedagogicalTakeawayEn:
      'Prosodic notation obeys an acoustic rule: "Whatever is pronounced is written (including nunation and geminate unfolding), and whatever is silent is omitted."',
  },
  {
    id: 'concentric_meter_rings',
    xPct: 68,
    yPct: 32,
    titleAr: 'أطواق البحور الشعرية وأوتادها',
    titleEn: 'Concentric Metric Rings & Watad/Sabab Roots',
    roleAr: 'بنية التفاعيل المتولدة من الأسباب والأوتاد والفواصل',
    roleEn: 'Structure of metric feet generated from causes, pegs, and intervals',
    historicalContextAr:
      'تتألف التفاعيل من وحدات بنائية صغرى: السبب الخفيف (/0)، السبب الثقيل (//)، الوتد المجموع (//0)، والوتد المفروق (/0/)، وتتجمع لتشكل التفاعيل العشر المشهورة.',
    historicalContextEn:
      'Metric feet are built from phonetic atoms: light cause (Sabab Khafif: /0), heavy cause (//), conjoined peg (Watad Majmu’: //0), and separated peg (/0/), compounding into the 10 classical rhythmic feet.',
    pedagogicalTakeawayAr:
      'الوتد المجموع ثابت لا يدخله الزحاف غالباً، بينما الأسباب تقبل الحذف والتسكين، وهو ما يفسر مرونة الشعر العربي في التعبير العاطفي.',
    pedagogicalTakeawayEn:
      'The peg (Watad) is the immovable acoustic anchor resistant to poetic alteration (Zihaf), whereas causes (Asbab) permit ellipsis and quelling.',
  },
  {
    id: 'prosodic_feet_tafail',
    xPct: 32,
    yPct: 35,
    titleAr: 'التفاعيل العشر ومفاتيح البحور',
    titleEn: 'Ten Tafa’il Metric Feet & Poetic Keys',
    roleAr: 'الموازين الصوتية: فَعُولُنْ، مَفَاعِيلُنْ، مُسْتَفْعِلُنْ، فَاعِلاتُنْ',
    roleEn: 'Acoustic weights: Fa’ulun, Mafa’ilun, Mustaf’ilun, Fa’ilatun',
    historicalContextAr:
      'وضع صفي الدين الحلي لاحقاً مفاتيح منظومة لكل بحر لتيسير حفظ موازين الخليل، كقوله في بحر الطويل: "طَوِيلٌ لَهُ دُونَ البُحُورِ فَضَائِلُ * فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُ".',
    historicalContextEn:
      'Safi al-Din al-Hilli later composed mnemonic keys for each meter to facilitate mastery, such as for the Tawil meter: "Tawilun lahu duna al-buhuri fada’ilu * Fa’ulun Mafa’ilun Fa’ulun Mafa’ilu".',
    pedagogicalTakeawayAr:
      'أسئلة الثانوية العامة في البلاغة والنصوص تعتمد على تمييز الموسيقى الظاهرة (الوزن والقافية والمحسنات البديعية الصوتية كالتصريع والجناس وحسن التقسيم) عن الموسيقى الخفية.',
    pedagogicalTakeawayEn:
      'Thanawya Amma rhetoric questions require differentiating overt music (meter, rhyme, acoustic devices like Tasri’ and Jinas) from subtle internal harmony.',
  },
  {
    id: 'zihaf_ilal_scholia',
    xPct: 50,
    yPct: 88,
    titleAr: 'شروح الزحافات والعلل والقوافي',
    titleEn: 'Zihaf, Ilal & Rhyme Scholia',
    roleAr: 'التغييرات الطارئة على التفاعيل جوازاً ولزوماً',
    roleEn: 'Permissible vs mandatory metrical variations in feet and cadences',
    historicalContextAr:
      'الزحاف تغيير يختص بثواني الأسباب ولا يلزم، كالخبن (حذف الثاني الساكن: فاعلن -> فَعِلُنْ)، أما العلة فتصيب الأوتاد والأسباب وتلزم العروض والضرب.',
    historicalContextEn:
      'Zihaf represents optional alterations to causes (e.g. Khabn: dropping the 2nd unvocalized letter), while Ilal represent systemic changes impacting cadences.',
    pedagogicalTakeawayAr:
      'القافية هي من آخر ساكن في البيت إلى أقرب ساكن يسبقه مع المتحرك الذي قبله، وحروفها: الروي، والوصل، والخروج، والردف، والتأسيس.',
    pedagogicalTakeawayEn:
      'The rhyme (Qafiyah) spans from the final quiescent consonant to the nearest preceding quiescent consonant plus the preceding vowel, centered on the Rawiyy.',
  },
];

interface PoeticMeter {
  id: string;
  nameAr: string;
  nameEn: string;
  keyVerseAr: string;
  keyVerseEn: string;
  tafailAr: string;
  tafailEn: string;
  famousStanzaAr: string;
  famousStanzaEn: string;
  poetAr: string;
  poetEn: string;
  moodAr: string;
  moodEn: string;
}

const POETIC_METERS: PoeticMeter[] = [
  {
    id: 'tawil',
    nameAr: 'بحر الطويل (سيد البحور وأفخمها)',
    nameEn: 'Al-Tawil (The Grand/Lofty Meter)',
    keyVerseAr: 'طَوِيلٌ لَهُ دُونَ البُحُورِ فَضَائِلُ ... فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُ',
    keyVerseEn: 'Tawil has virtues above other meters ... Fa’ulun Mafa’ilun Fa’ulun Mafa’ilu',
    tafailAr: 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِيلُنْ (مرتين)',
    tafailEn: 'Fa’ulun Mafa’ilun Fa’ulun Mafa’ilun (repeated)',
    famousStanzaAr:
      'قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ ... بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ',
    famousStanzaEn:
      'Halt, friends, and let us weep at the memory of a beloved and an abode, at the dune crest between al-Dakhul and Hawmal.',
    poetAr: 'امرؤ القيس (معلقة امرئ القيس - العصر الجاهلي)',
    poetEn: 'Imru’ al-Qays (Pre-Islamic Mu’allaqah)',
    moodAr: 'الفخامة، الحكمة، الملاحم، والوجد الجليل',
    moodEn: 'Majesty, philosophical contemplation, and grand epic lament',
  },
  {
    id: 'kamil',
    nameAr: 'بحر الكامل (أعذب البحور وأطربها)',
    nameEn: 'Al-Kamil (The Perfect/Harmonious Meter)',
    keyVerseAr: 'كَمُلَ الجَمَالُ مِنَ البُحُورِ الكَامِلُ ... مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُ',
    keyVerseEn: 'Beauty is perfected in the Kamil meter ... Mutafa’ilun Mutafa’ilun Mutafa’ilu',
    tafailAr: 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ (مرتين)',
    tafailEn: 'Mutafa’ilun Mutafa’ilun Mutafa’ilun (repeated)',
    famousStanzaAr:
      'وَإِذَا صَحَوْتُ فَمَا أُقَصِّرُ عَنْ نَدًى ... وَكَمَا عَلِمْتِ شَمَائِلِي وَتَكَرُّمِي',
    famousStanzaEn:
      'And when I sober up, I never fall short in generosity, and as you well know, my nobility and magnanimity remain steadfast.',
    poetAr: 'عنترة بن شداد (معلقة عنترة - الفخر والفروسية)',
    poetEn: 'Antarah ibn Shaddad (Mu’allaqah of Chivalry)',
    moodAr: 'الحماسة، الفروسية، الرثاء، والوجد العاطفي الرقراق',
    moodEn: 'Chivalric courage, martial ardor, and melodic romance',
  },
  {
    id: 'basit',
    nameAr: 'بحر البسيط (المتسع الرصين)',
    nameEn: 'Al-Basit (The Expansive Meter)',
    keyVerseAr: 'إِنَّ البَسِيطَ لَدَيْهِ يُبْسَطُ الأَمَلُ ... مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُ',
    keyVerseEn: 'Verily in al-Basit hope is unfolded ... Mustaf’ilun Fa’ilun Mustaf’ilun Fa’ilu',
    tafailAr: 'مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ (مرتين)',
    tafailEn: 'Mustaf’ilun Fa’ilun Mustaf’ilun Fa’ilun (repeated)',
    famousStanzaAr:
      'الخَيْلُ وَاللَّيْلُ وَالبَيْدَاءُ تَعْرِفُنِي ... وَالسَّيْفُ وَالرُّمْحُ وَالقِرْطَاسُ وَالقَلَمُ',
    famousStanzaEn:
      'The steed, the night, and the barren desert know me well; as do the sword, the spear, the parchment, and the pen.',
    poetAr: 'أبو الطيب المتنبي (العصر العباسي)',
    poetEn: 'Al-Mutanabbi (Abbasid Golden Age)',
    moodAr: 'الفخر الذاتي، الرصانة الفلسفية، وقوة الحجة',
    moodEn: 'Unrivaled self-pride, philosophical gravity, and eloquence',
  },
  {
    id: 'khafif',
    nameAr: 'بحر الخفيف (الرشيق المتدفق)',
    nameEn: 'Al-Khafif (The Graceful/Light Meter)',
    keyVerseAr: 'يَا خَفِيفاً خَفَّتْ بِهِ الحَرَكَاتُ ... فَاعِلاتُنْ مُسْتَفْعِلُنْ فَاعِلاتُ',
    keyVerseEn: 'O graceful meter whose movements flow light ... Fa’ilatun Mustaf’ilun Fa’ilatu',
    tafailAr: 'فَاعِلاتُنْ مُسْتَفْعِ لُنْ فَاعِلاتُنْ (مرتين)',
    tafailEn: 'Fa’ilatun Mustaf’ilun Fa’ilatun (repeated)',
    famousStanzaAr:
      'دَقَّاتُ قَلْبِ المَرْءِ قَائِلَةٌ لَهُ ... إِنَّ الحَيَاةَ دَقَائِقٌ وَثَوَانِي',
    famousStanzaEn:
      'A person’s heartbeats declare to him: truly, life is but minutes and fleeting seconds.',
    poetAr: 'أمير الشعراء أحمد شوقي (الأدب العربي الحديث - مصر)',
    poetEn: 'Ahmad Shawqi, Prince of Poets (Modern Egypt)',
    moodAr: 'الحكمة المعاصرة، التأمل الوجودي، والرثاء الوطني',
    moodEn: 'Existential contemplation, national elegy, and lyrical wisdom',
  },
];

export const KhalilPoeticsStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<KhalilHotspot>(KHALIL_HOTSPOTS[0]);
  const [activeMeterIndex, setActiveMeterIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const currentMeter = POETIC_METERS[activeMeterIndex];

  // Acoustic chime synthesizer for prosodic rhythm
  const handlePlayProsodyRhythm = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      setIsPlayingAudio(true);

      // Metronome rhythm according to meter (short = 150ms, long = 300ms)
      const beats = currentMeter.id === 'tawil'
        ? [0.3, 0.15, 0.3, 0.15, 0.3, 0.3, 0.15, 0.3]
        : currentMeter.id === 'kamil'
        ? [0.15, 0.15, 0.3, 0.15, 0.15, 0.3, 0.15, 0.15, 0.3]
        : [0.3, 0.15, 0.3, 0.3, 0.15, 0.3];

      let startTime = ctx.currentTime + 0.1;

      beats.forEach((duration, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = index % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(index % 2 === 0 ? 440 : 554.37, startTime);

        gain.gain.setValueAtTime(0.25, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration * 0.85);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration * 0.9);

        startTime += duration;
      });

      setTimeout(() => {
        setIsPlayingAudio(false);
      }, (startTime - ctx.currentTime) * 1000);
    } catch {
      setIsPlayingAudio(false);
    }
  };

  const modalData: HiResImageModalData = {
    imageUrl: khalilPhoto,
    titleAr: 'مخطوط دوائر العروض للفراهيدي (786 م) — هندسة الشعر العربي',
    titleEn: 'Al-Khalil’s Poetic Circles Manuscript (786 CE) — The Geometry of Arabic Prosody',
    subtitleAr: 'الدوائر الخمس وضبط أوزان وبحور الشعر العربي الستة عشر',
    subtitleEn: 'The five geometric prosodic circles classifying the 16 Arabic poetic meters',
    dateOrEraAr: 'القرن الثاني الهجري / 786 م (البصرة، العصر العباسي)',
    dateOrEraEn: '2nd Century AH / 786 CE (Basra, Abbasid Era)',
    locationAr: 'مكتبة المخطوطات الملكية / دار الكتب المصرية',
    locationEn: 'Royal Manuscript Collections / Egyptian National Library',
    descriptionAr:
      'صورة فائقة الدقة (4K) لدوائر العروض الستة عشر التي رسمها الخليل بن أحمد الفراهيدي، مقسمة بحساب هندسي دقيق يُبرز تداخل التفاعيل وتوليد البحور الشعرية من حركة الأوتاد والأسباب.',
    descriptionEn:
      'Museum-grade 4K archival photograph of the 16 Poetic Circles geometrically devised by Al-Farahidi. Shows concentric circles, metric foot divisions, compass markings, and ancient scholia explaining poetic variations and caesura.',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : isLight
          ? 'bg-gradient-to-br from-amber-50/70 via-stone-50 to-orange-50/50 text-stone-900 border-amber-200/80 shadow-md'
          : 'bg-gradient-to-br from-stone-950 via-neutral-900 to-amber-950/30 text-stone-100 border-amber-900/50 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
            <Volume2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {isArabic ? 'هندسة العروض 786 م' : 'Prosodic Geometry 786 CE'}
              </span>
              <span className="text-xs text-amber-500/80 font-mono">4K Archival Codex</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو الخليل: دوائر العروض وموسيقى الشعر'
                : 'Al-Khalil Poetics Studio: Poetic Circles & Metric Harmony'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
            isContrast
              ? 'bg-amber-400 text-black hover:bg-amber-300'
              : 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-900/30'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير الدوائر 4K' : 'Expand 4K Circles'}</span>
        </button>
      </div>

      {/* Main Stage: 4K Canvas + Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: 4K Photographic Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black aspect-[16/9] group shadow-inner">
            <img
              src={khalilPhoto}
              alt="Al-Khalil Poetic Circles Manuscript 786 CE"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Hotspots */}
            {KHALIL_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-10 focus:outline-none"
                  title={isArabic ? spot.titleAr : spot.titleEn}
                >
                  <span className="relative flex h-7 w-7">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-amber-400' : 'bg-orange-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-7 w-7 items-center justify-center text-xs font-bold shadow-lg transition-transform ${
                        isSelected
                          ? 'bg-amber-500 text-black scale-125 ring-2 ring-white'
                          : 'bg-stone-900/90 text-amber-300 border border-amber-400/60 hover:scale-110'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs text-amber-200">
              <span className="truncate">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </span>
              <span className="text-amber-400 font-mono text-[10px] ml-2 shrink-0">
                {isArabic ? 'انقر على العلامات التفاعلية' : 'Click interactive pins'}
              </span>
            </div>
          </div>

          {/* Quick Selection Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {KHALIL_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  className={`px-2.5 py-2 rounded-lg text-xs font-medium text-right transition-all truncate border ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                      : isLight
                      ? 'bg-stone-100 hover:bg-stone-200/80 border-stone-300 text-stone-700'
                      : 'bg-stone-900/60 hover:bg-stone-800/80 border-stone-800 text-stone-300'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Active Hotspot Deep Inspection Drawer */}
        <div
          className={`lg:col-span-5 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between ${
            isContrast
              ? 'bg-black border-amber-400 text-amber-300'
              : isLight
              ? 'bg-white/90 border-amber-200/80 shadow-sm'
              : 'bg-stone-900/80 border-amber-900/40 text-stone-200'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {isArabic ? 'التحقيق العروضي والفلسفي' : 'Prosodic Analysis'}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {isArabic ? 'الفراهيدي (170 هـ)' : 'Al-Farahidi (170 AH)'}
              </span>
            </div>

            <h3 className="text-lg font-bold text-amber-400 mt-3">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
            <p className="text-xs text-amber-500 font-medium mt-0.5">
              {isArabic ? selectedHotspot.roleAr : selectedHotspot.roleEn}
            </p>

            <div className="mt-3.5 space-y-3 text-xs leading-relaxed">
              <div
                className={`p-3 rounded-xl border ${
                  isLight ? 'bg-amber-50/60 border-amber-200 text-stone-800' : 'bg-stone-950/60 border-stone-800 text-stone-300'
                }`}
              >
                <div className="font-semibold text-amber-400 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'السياق التاريخي والرياضي:' : 'Historical & Mathematical Context:'}</span>
                </div>
                <p>{isArabic ? selectedHotspot.historicalContextAr : selectedHotspot.historicalContextEn}</p>
              </div>

              <div
                className={`p-3 rounded-xl border ${
                  isLight ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950' : 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300'
                }`}
              >
                <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'مستخلص أسئلة النصوص والبلاغة:' : 'Textual & Rhetorical Exam Insight:'}</span>
                </div>
                <p>{isArabic ? selectedHotspot.pedagogicalTakeawayAr : selectedHotspot.pedagogicalTakeawayEn}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-stone-400">
            <span>{isArabic ? 'المرجع: "العروض والقوافي" لأبي الفتح الخوارزمي' : 'Ref: Classical Arabic Metrical Treatises'}</span>
            <span className="font-mono text-amber-400">16 Meters</span>
          </div>
        </div>
      </div>

      {/* Section 2: Poetic Metres Matrix & Audio Prosody Synthesizer */}
      <div className="mt-8 pt-6 border-t border-amber-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-amber-500" />
              <span>{isArabic ? 'ديوان البحور الشعرية ونغماتها الموسيقية' : 'Poetic Metres & Melodic Rhythm Synthesis'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic
                ? 'استمع إلى نبض التفاعيل واكتشف شواهد عيون الشعر العربي ومفاتيح الحفظ'
                : 'Listen to metrical cadence synthesis and explore classical Arabic stanzas'}
            </p>
          </div>

          {/* Meter Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-900/60 border border-stone-800 self-stretch sm:self-auto overflow-x-auto">
            {POETIC_METERS.map((meter, idx) => (
              <button
                key={meter.id}
                onClick={() => setActiveMeterIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeMeterIndex === idx
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {isArabic ? meter.nameAr.split(' ')[0] + ' ' + meter.nameAr.split(' ')[1] : meter.nameEn.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Meter Display Card */}
        <div
          className={`rounded-2xl p-5 border transition-all ${
            isContrast
              ? 'bg-black border-amber-400'
              : isLight
              ? 'bg-white border-amber-200 shadow-sm'
              : 'bg-stone-900/90 border-stone-800'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono text-amber-500">
                {isArabic ? 'الوزن العروضي:' : 'Metrical Weight:'}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-amber-400">
                {isArabic ? currentMeter.nameAr : currentMeter.nameEn}
              </h4>
            </div>

            {/* Audio Synthesis Action Button */}
            <button
              onClick={handlePlayProsodyRhythm}
              disabled={isPlayingAudio}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                isPlayingAudio
                  ? 'bg-amber-500 text-black animate-pulse'
                  : 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-spin' : ''}`} />
              <span>
                {isPlayingAudio
                  ? isArabic ? 'جارٍ العزف الإيقاعي...' : 'Synthesizing...'
                  : isArabic ? 'استمع إلى إيقاع البحر' : 'Play Metronomic Cadence'}
              </span>
            </button>
          </div>

          {/* Meter Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Key & Tafa'il */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between ${
                isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'
              }`}
            >
              <div>
                <span className="text-[11px] text-amber-500 font-semibold block mb-1">
                  {isArabic ? 'مفتاح البحر للحفظ (نظم الحلي):' : 'Mnemonic Verse Key:'}
                </span>
                <p className="font-serif text-sm sm:text-base text-amber-300 font-bold mb-3">
                  {isArabic ? currentMeter.keyVerseAr : currentMeter.keyVerseEn}
                </p>

                <span className="text-[11px] text-stone-400 font-semibold block mb-1">
                  {isArabic ? 'تفاعيل التجريد العروضي:' : 'Metric Tafa’il Formula:'}
                </span>
                <p className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
                  {isArabic ? currentMeter.tafailAr : currentMeter.tafailEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800/40 flex items-center justify-between text-xs text-stone-400">
                <span>{isArabic ? 'الغرض العاطفي الشائع:' : 'Dominant Emotional Tone:'}</span>
                <span className="text-amber-400 font-semibold">
                  {isArabic ? currentMeter.moodAr : currentMeter.moodEn}
                </span>
              </div>
            </div>

            {/* Famous Classical Stanza */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between ${
                isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-amber-950/20 border-amber-900/40'
              }`}
            >
              <div>
                <span className="text-[11px] text-amber-500 font-semibold block mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isArabic ? 'شاهد من عيون الشعر العربي المقرّر:' : 'Canonical Classical Stanza:'}</span>
                </span>
                <p className="font-serif text-base sm:text-lg text-stone-100 font-bold leading-relaxed mb-3">
                  {isArabic ? currentMeter.famousStanzaAr : currentMeter.famousStanzaEn}
                </p>
              </div>

              <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-xs">
                <span className="text-stone-400">{isArabic ? 'الشاعر والمصدر:' : 'Poet & Source:'}</span>
                <span className="text-amber-400 font-semibold">
                  {isArabic ? currentMeter.poetAr : currentMeter.poetEn}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Scansion Rules & Thanawya Amma Traps */}
      <div className="mt-8 pt-6 border-t border-amber-500/20">
        <h3 className="text-lg font-bold flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <span>{isArabic ? 'قواعد التقطيع وفخاخ أسئلة الموسيقى الشعرية' : 'Scansion Rules & Exam Traps'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div
            className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900/60 border-stone-800'
            }`}
          >
            <h5 className="text-xs font-bold text-amber-400 mb-1.5">
              {isArabic ? '1. فك التضعيف والتنوين' : '1. Gemination & Nunation'}
            </h5>
            <p className="text-xs text-stone-300 leading-relaxed">
              {isArabic
                ? 'الحرف المشدد يُفك إلى حرفين (ساكن فمتحرك: مَدَّ = مَدْدَ)، والتنوين يُكتب نوناً ساكنة (كتابٌ = كِتَابُنْ).'
                : 'Doubled letters unpack into quiescent then vocalized; nunation becomes an explicit nun.'}
            </p>
          </div>

          <div
            className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900/60 border-stone-800'
            }`}
          >
            <h5 className="text-xs font-bold text-amber-400 mb-1.5">
              {isArabic ? '2. حذف ما لا يُنطق' : '2. Elision of Silent Letters'}
            </h5>
            <p className="text-xs text-stone-300 leading-relaxed">
              {isArabic
                ? 'ألف الوصل تسقط في درج الكلام، واللام الشمسية تُحذف ويُشدد ما بعدها (والشَّمْس = وَشْشَمْس).'
                : 'Connecting alif drops in continuous speech; solar lam is absorbed with gemination.'}
            </p>
          </div>

          <div
            className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900/60 border-stone-800'
            }`}
          >
            <h5 className="text-xs font-bold text-amber-400 mb-1.5">
              {isArabic ? '3. إشباع حركة القافية' : '3. Cadence Vowel Lengthening'}
            </h5>
            <p className="text-xs text-stone-300 leading-relaxed">
              {isArabic
                ? 'تُشبع حركة الحرف الأخير في الشطرين غالباً فيتولد حرف مد (الضمة تصير واواً، والكسرة ياءً، والفتحة ألفاً).'
                : 'Final vowel of each hemistich lengthens into its corresponding long vowel.'}
            </p>
          </div>
        </div>
      </div>

      {/* HiRes Modal */}
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
