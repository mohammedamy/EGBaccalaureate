import React, { useState } from 'react';
import { Activity, Volume2, Layers, Wind } from 'lucide-react';
import { aiVoiceEngine } from '../../services/aiVoiceEngine';

export type ArticulatoryPlace =
  | 'bilabial'
  | 'labiodental'
  | 'dental'
  | 'alveolar'
  | 'post_alveolar'
  | 'retroflex'
  | 'palatal'
  | 'velar'
  | 'uvular'
  | 'pharyngeal'
  | 'glottal'
  | 'vowel_front_high'
  | 'vowel_back_high'
  | 'vowel_open_low'
  | 'vowel_central';

export interface RealisticVocalTractProps {
  symbol?: string;
  name?: string;
  manner?: string;
  place?: ArticulatoryPlace | string;
  isVoiced?: boolean;
  isNasal?: boolean;
  audioExampleWord?: string;
  language?: 'en' | 'fr' | 'de' | 'it' | 'es' | 'zh' | 'ar';
  isLight?: boolean;
  onSelectPlace?: (place: ArticulatoryPlace) => void;
  showSelector?: boolean;
}

interface PlaceConfig {
  id: ArticulatoryPlace;
  nameEn: string;
  nameAr: string;
  mannerDefault: string;
  targetX: number;
  targetY: number;
  tonguePath: string;
  velumLowered: boolean;
  lipShape: 'neutral' | 'closed' | 'labiodental' | 'rounded';
  descriptionEn: string;
  descriptionAr: string;
  examplePhonemes: string[];
  exampleWord: { text: string; lang: string; translation: string };
}

export const ARTICULATORY_PLACES: Record<ArticulatoryPlace, PlaceConfig> = {
  bilabial: {
    id: 'bilabial',
    nameEn: 'Bilabial (Upper & Lower Lips)',
    nameAr: 'شفوي (انطباق أو استدارة الشفتين)',
    mannerDefault: 'Plosive / Nasal / Approximant',
    targetX: 78,
    targetY: 154,
    // Lips pressed together, tongue neutral low
    tonguePath: 'M 95,178 C 120,175 150,170 190,172 C 225,175 235,210 230,240 L 170,240 C 120,230 100,205 95,178 Z',
    velumLowered: false,
    lipShape: 'closed',
    descriptionEn: 'Produced by complete closure or narrowing of both upper and lower lips.',
    descriptionAr: 'يخرج بانطباق الشفتين أو تدويرهما معاً مثل الباء والميم والواو.',
    examplePhonemes: ['/p/', '/b/', '/m/', '/w/'],
    exampleWord: { text: 'pen', lang: 'en', translation: 'قلم' },
  },
  labiodental: {
    id: 'labiodental',
    nameEn: 'Labiodental (Upper Teeth & Lower Lip)',
    nameAr: 'شفوي أسناني (الثنايا العليا مع باطن الشفة السفلى)',
    mannerDefault: 'Fricative',
    targetX: 86,
    targetY: 158,
    // Lower lip raised to upper teeth, tongue resting
    tonguePath: 'M 96,176 C 120,172 155,168 190,170 C 225,175 235,210 230,240 L 170,240 C 120,230 100,205 96,176 Z',
    velumLowered: false,
    lipShape: 'labiodental',
    descriptionEn: 'Lower lip makes light, turbulent contact with the incisal edges of upper incisors.',
    descriptionAr: 'يخرج باقتراب باطن الشفة السفلى من أطراف الثنايا العليا كما في الفاء [f, v].',
    examplePhonemes: ['/f/', '/v/'],
    exampleWord: { text: 'fan', lang: 'en', translation: 'مروحة' },
  },
  dental: {
    id: 'dental',
    nameEn: 'Dental / Interdental (Tongue Tip & Incisors)',
    nameAr: 'أسناني ولثوي (رأس اللسان مع أطراف الثنايا العليا)',
    mannerDefault: 'Fricative',
    targetX: 104,
    targetY: 150,
    // Tongue tip protrudes between/behind incisors
    tonguePath: 'M 88,154 C 110,150 145,158 185,165 C 220,170 235,210 230,240 L 170,240 C 120,230 100,205 88,154 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Tongue tip placed against or protruding between the upper and lower front teeth.',
    descriptionAr: 'يخرج بملامسة رأس اللسان لأطراف الأسنان الأمامية مثل الثاء والذال والظاء [θ, ð].',
    examplePhonemes: ['/θ/', '/ð/'],
    exampleWord: { text: 'think', lang: 'en', translation: 'يفكّر' },
  },
  alveolar: {
    id: 'alveolar',
    nameEn: 'Alveolar Ridge (Gum Ridge Behind Teeth)',
    nameAr: 'لثوي نطعي (طرف اللسان مع أصول الثنايا العليا)',
    mannerDefault: 'Plosive / Fricative / Nasal / Lateral',
    targetX: 128,
    targetY: 130,
    // Tongue tip sharply raised to touch alveolar ridge
    tonguePath: 'M 102,175 C 110,150 126,132 135,133 C 145,142 165,160 195,168 C 225,175 235,210 230,240 L 170,240 C 120,230 100,205 102,175 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Tongue tip or blade firmly seals or constricts against the alveolar gum ridge.',
    descriptionAr: 'يخرج بطرف اللسان مع لثة الأسنان العليا كحروف [t, d, s, z, n, l, r] والطاء والدال والتاء.',
    examplePhonemes: ['/t/', '/d/', '/s/', '/z/', '/n/', '/l/'],
    exampleWord: { text: 'top', lang: 'en', translation: 'قمة' },
  },
  post_alveolar: {
    id: 'post_alveolar',
    nameEn: 'Post-Alveolar / Palato-Alveolar',
    nameAr: 'شجري خلف لثوي (وسط اللسان متقوس نحو مقدم الحنك)',
    mannerDefault: 'Affricate / Sibilant Fricative',
    targetX: 156,
    targetY: 124,
    // Tongue blade high arched behind alveolar ridge, slightly cupped
    tonguePath: 'M 98,174 C 115,152 142,126 160,126 C 175,135 190,158 205,168 C 225,175 235,210 230,240 L 170,240 C 120,230 100,205 98,174 Z',
    velumLowered: false,
    lipShape: 'rounded',
    descriptionEn: 'Tongue blade elevates toward the transition between alveolar ridge and hard palate.',
    descriptionAr: 'يخرج بتقوس مقدمة وسط اللسان نحو الحنك الصلب مثل الشين والجيم [ʃ, ʒ, tʃ, dʒ].',
    examplePhonemes: ['/ʃ/', '/ʒ/', '/tʃ/', '/dʒ/'],
    exampleWord: { text: 'ship', lang: 'en', translation: 'سفينة' },
  },
  retroflex: {
    id: 'retroflex',
    nameEn: 'Retroflex (Curled Tongue Tip)',
    nameAr: 'ارتدادي مقلوب (انعطاف رأس اللسان للوراء)',
    mannerDefault: 'Fricative / Affricate / Approximant',
    targetX: 168,
    targetY: 122,
    // Tongue tip curled backwards towards roof of mouth (Chinese zh/ch/sh/r)
    tonguePath: 'M 104,175 C 120,158 148,138 162,124 C 168,132 178,145 200,165 C 225,175 235,210 230,240 L 170,240 C 120,230 100,205 104,175 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Tongue tip curls upwards and backwards toward the center of the hard palate (characteristic of Mandarin Chinese).',
    descriptionAr: 'ينعطف رأس اللسان إلى الخلف مقوساً نحو سقف الحنك، وهو مخرج أصوات الـ Retroflex في الصينية (zh, ch, sh, r).',
    examplePhonemes: ['/tʂ/', '/tʂʰ/', '/ʂ/', '/ʐ/'],
    exampleWord: { text: 'zhōng', lang: 'zh', translation: 'وسط' },
  },
  palatal: {
    id: 'palatal',
    nameEn: 'Palatal (Center Hard Palate)',
    nameAr: 'حنكي شجري (وسط اللسان مع الحنك العظمي الصلب)',
    mannerDefault: 'Approximant / Fricative / Nasal',
    targetX: 188,
    targetY: 118,
    // Tongue dorsum lifted to hard palate, tip low
    tonguePath: 'M 96,178 C 125,170 160,128 190,120 C 210,132 225,160 228,172 C 235,210 230,240 L 170,240 C 120,230 100,205 96,178 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Tongue body/dorsum raises to the hard palate roof of the oral cavity (e.g. English /j/, German ich-Laut /ç/, Italian gn /ɲ/).',
    descriptionAr: 'يرتفع وسط اللسان محاذياً الحنك الأعلى الصلب كالياء والـ ich-Laut الألمانية والـ gn الإيطالية.',
    examplePhonemes: ['/j/', '/ç/', '/ɲ/', '/ʎ/'],
    exampleWord: { text: 'yes', lang: 'en', translation: 'نعم' },
  },
  velar: {
    id: 'velar',
    nameEn: 'Velar (Soft Palate / Velum)',
    nameAr: 'حنكي لثوي رخو (أقصى اللسان مع الحنك الرخو)',
    mannerDefault: 'Plosive / Fricative / Nasal',
    targetX: 228,
    targetY: 130,
    // Tongue back humped way back to touch soft palate
    tonguePath: 'M 96,180 C 130,178 170,165 200,150 C 220,132 232,130 235,145 C 240,185 235,215 230,240 L 170,240 C 120,230 100,205 96,180 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Back of tongue (dorsum) arches up to contact the soft palate / velum (e.g. /k/, /g/, /ŋ/, German ach-Laut /x/).',
    descriptionAr: 'يرتفع أقصى اللسان ملامساً الحنك الرخو كالكاف والجيم القاهرية والـ ach-Laut الألمانية والـ j الإسبانية.',
    examplePhonemes: ['/k/', '/g/', '/ŋ/', '/x/'],
    exampleWord: { text: 'cat', lang: 'en', translation: 'قطة' },
  },
  uvular: {
    id: 'uvular',
    nameEn: 'Uvular (Uvula & Back Throat)',
    nameAr: 'لهوي (أقصى اللسان مع اللهاة)',
    mannerDefault: 'Trill / Fricative / Stop',
    targetX: 236,
    targetY: 160,
    // Tongue post-dorsum retracted back to contact hanging uvula (French /ʁ/, Arabic /q/, /x/, /ɣ/)
    tonguePath: 'M 96,180 C 130,180 170,172 205,162 C 225,158 238,162 236,175 C 235,205 232,225 230,240 L 170,240 C 120,230 100,205 96,180 Z',
    velumLowered: true,
    lipShape: 'neutral',
    descriptionEn: 'Back of tongue contacts or vibrates against the uvula (French Parisian "r" /ʁ/, Arabic Qāf /q/, Khā /x/, Ghayn /ɣ/).',
    descriptionAr: 'يخرج من أقصى اللسان مع اللهاة مثل القاف الفصيحة والخاء والغين، وراء باريس الفرنسية [ʁ].',
    examplePhonemes: ['/ʁ/', '/q/', '/χ/', '/ʁ/'],
    exampleWord: { text: 'rouge', lang: 'fr', translation: 'أحمر' },
  },
  pharyngeal: {
    id: 'pharyngeal',
    nameEn: 'Pharyngeal (Deep Throat Constriction)',
    nameAr: 'حلقي (وسط الحلق عند لسان المزمار)',
    mannerDefault: 'Fricative',
    targetX: 232,
    targetY: 208,
    // Tongue root pulled deep into throat constricting pharyngeal wall (Arabic /ħ/ ح, /ʕ/ ع)
    tonguePath: 'M 96,180 C 130,180 175,175 210,172 C 225,182 238,205 232,222 C 228,232 225,238 220,242 L 170,240 C 120,230 100,205 96,180 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Tongue root retracts deeply toward the posterior pharyngeal wall, creating deep throat constriction (Arabic Ḥā [ħ] and ‘Ayn [ʕ]).',
    descriptionAr: 'يرجع جذر اللسان للوراء مضیقاً مجرى البلعوم عند لسان المزمار كالحاء والعين الفصيحتين.',
    examplePhonemes: ['/ħ/', '/ʕ/'],
    exampleWord: { text: 'حياة', lang: 'ar', translation: 'Life' },
  },
  glottal: {
    id: 'glottal',
    nameEn: 'Glottal (Vocal Folds / Larynx)',
    nameAr: 'حنجري (أقصى الحلق عند الحبلين الصوتيين)',
    mannerDefault: 'Fricative / Glottal Stop',
    targetX: 242,
    targetY: 265,
    // Tongue low neutral, sound produced directly in the larynx
    tonguePath: 'M 96,182 C 125,180 160,175 190,175 C 220,178 232,205 230,240 L 170,240 C 120,230 100,205 96,182 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Airstream modulated directly between the vocal cords in the larynx (Hamza /ʔ/, English /h/, German Knacklaut).',
    descriptionAr: 'يخرج من بين الوترين الصوتيين مباشرة في الحنجرة كالهمزة والهاء والـ Knacklaut الألمانية.',
    examplePhonemes: ['/h/', '/ʔ/'],
    exampleWord: { text: 'hat', lang: 'en', translation: 'قبعة' },
  },
  vowel_front_high: {
    id: 'vowel_front_high',
    nameEn: 'High Front Vowel [iː, y, ɪ]',
    nameAr: 'صائت أمامي مرتفع (كسرة طويلة / ياء مدية)',
    mannerDefault: 'Close Front Vowel',
    targetX: 172,
    targetY: 125,
    tonguePath: 'M 96,170 C 125,140 155,122 182,125 C 210,135 228,160 230,240 L 170,240 C 120,230 100,205 96,170 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Tongue body lifted close to the hard palate at the front of the mouth. Lips spread (or rounded in French/German /y/).',
    descriptionAr: 'يرتفع جسم اللسان إلى أقصى علو أمامي نحو الحنك الصلب مع انبساط الشفتين كما في /iː/ أو استدارتهما كما في /y/.',
    examplePhonemes: ['/iː/', '/ɪ/', '/y/'],
    exampleWord: { text: 'see', lang: 'en', translation: 'يرى' },
  },
  vowel_back_high: {
    id: 'vowel_back_high',
    nameEn: 'High Back Vowel [uː, ʊ]',
    nameAr: 'صائت خلفي مرتفع (ضمة طويلة / واو مدية)',
    mannerDefault: 'Close Back Rounded Vowel',
    targetX: 224,
    targetY: 135,
    tonguePath: 'M 96,182 C 128,180 165,165 195,150 C 220,135 232,135 234,155 C 238,190 232,220 230,240 L 170,240 C 120,230 100,205 96,182 Z',
    velumLowered: false,
    lipShape: 'rounded',
    descriptionEn: 'Tongue dorsum elevated high in the back towards the soft palate with rounded, protruded lips.',
    descriptionAr: 'يرتفع أقصى اللسان نحو الحنك الرخو مع استدارة وبروز الشفتين كما في الضمة والواو المدية.',
    examplePhonemes: ['/uː/', '/ʊ/'],
    exampleWord: { text: 'moon', lang: 'en', translation: 'قمر' },
  },
  vowel_open_low: {
    id: 'vowel_open_low',
    nameEn: 'Open Low Vowel [ɑː, æ, a]',
    nameAr: 'صائت مفتوح منخفض (فتحة طويلة / ألف مدية)',
    mannerDefault: 'Open Vowel',
    targetX: 185,
    targetY: 165,
    tonguePath: 'M 96,185 C 130,185 165,185 190,185 C 215,188 230,210 230,240 L 170,240 C 120,230 100,205 96,185 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Mandible drops wide; tongue body lies flat and depressed on the floor of the mouth.',
    descriptionAr: 'ينخفض الفك واللسان إلى قاع الفم مع فتح المجرى الفموي بالكامل كما في الألف المدية والفتحة.',
    examplePhonemes: ['/ɑː/', '/æ/', '/a/'],
    exampleWord: { text: 'father', lang: 'en', translation: 'أب' },
  },
  vowel_central: {
    id: 'vowel_central',
    nameEn: 'Central Neutral Vowel [ə, ɜː] (Schwa)',
    nameAr: 'صائت مركزي محايد (شوا Schwa)',
    mannerDefault: 'Mid-Central Vowel',
    targetX: 180,
    targetY: 148,
    tonguePath: 'M 96,178 C 125,170 160,158 185,158 C 210,165 228,185 230,240 L 170,240 C 120,230 100,205 96,178 Z',
    velumLowered: false,
    lipShape: 'neutral',
    descriptionEn: 'Tongue sits in relaxed neutral rest position in the dead center of the oral cavity.',
    descriptionAr: 'يستقر اللسان في وضع الاسترخاء التام في منتصف التجويف الفموي دون إجهاد.',
    examplePhonemes: ['/ə/', '/ɜː/'],
    exampleWord: { text: 'about', lang: 'en', translation: 'حوالي' },
  },
};

export const RealisticVocalTractSchematic: React.FC<RealisticVocalTractProps> = ({
  symbol,
  name,
  manner,
  place = 'alveolar',
  isVoiced = true,
  isNasal = false,
  audioExampleWord,
  language = 'en',
  isLight = false,
  onSelectPlace,
  showSelector = true,
}) => {
  const [activePlaceKey, setActivePlaceKey] = useState<ArticulatoryPlace>(() => {
    if (typeof place === 'string' && place in ARTICULATORY_PLACES) {
      return place as ArticulatoryPlace;
    }
    return 'alveolar';
  });

  // Automatically update when external prop changes
  React.useEffect(() => {
    if (typeof place === 'string' && place in ARTICULATORY_PLACES) {
      setActivePlaceKey(place as ArticulatoryPlace);
    }
  }, [place]);

  const currentConfig = ARTICULATORY_PLACES[activePlaceKey] || ARTICULATORY_PLACES.alveolar;
  const isNasalActive = isNasal || currentConfig.velumLowered;

  const handleSelectPlace = (newPlace: ArticulatoryPlace) => {
    setActivePlaceKey(newPlace);
    onSelectPlace?.(newPlace);
  };

  const playPronunciation = (textToPlay: string, langToUse?: string) => {
    aiVoiceEngine.speak(textToPlay, {
      lang: langToUse || language || 'en',
      rate: 0.9,
    });
  };

  return (
    <div
      className={`rounded-3xl border shadow-2xl transition-all duration-300 p-4 sm:p-5 flex flex-col items-center space-y-4 ${
        isLight
          ? 'bg-gradient-to-b from-slate-50 to-indigo-50/50 border-indigo-100 text-slate-900 shadow-indigo-100/50'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-slate-800/80 text-slate-100 shadow-slate-950/80'
      }`}
    >
      {/* Schematic Header & Voicing Badge */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-800/60">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wide flex items-center gap-1.5">
              <span>Sagittal Vocal Tract Cross-Section</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 font-mono">
                HD Anatomy
              </span>
            </h4>
            <div className="text-[11px] text-slate-400 font-serif">
              المقطع السهمي التشريحي لجهاز النطق ومخارج الأصوات
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isNasalActive && (
            <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
              <Wind className="w-3 h-3" />
              <span>NASAL (Open Velum)</span>
            </span>
          )}
          <span
            className={`text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${
              isVoiced
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-sm shadow-emerald-500/20'
                : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isVoiced ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'
              }`}
            />
            <span>{isVoiced ? 'VOICED (Vibrating Cords)' : 'VOICELESS (Open Glottis)'}</span>
          </span>
        </div>
      </div>

      {/* Main SVG Medical Illustration Viewport */}
      <div className="relative w-full max-w-[420px] aspect-[4/3] flex items-center justify-center rounded-2xl overflow-hidden bg-slate-950/60 border border-slate-800/80 shadow-inner">
        <svg viewBox="0 0 400 320" className="w-full h-full select-none">
          <defs>
            {/* Bone Texture & Cranium Shading */}
            <linearGradient id="craniumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#1e293b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
            </linearGradient>

            {/* Muscle Striations & Fleshy Tongue Gradient */}
            <linearGradient id="tongueFlesh" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#e11d48" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#9f1239" stopOpacity="1" />
              <stop offset="100%" stopColor="#881337" stopOpacity="1" />
            </linearGradient>

            {/* Mucosal Lining Surface */}
            <linearGradient id="mucosaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="50%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>

            {/* Palatal Bone & Gingiva Gradient */}
            <linearGradient id="hardPalateBone" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="40%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Respiratory Airway Glow */}
            <linearGradient id="airwayGlow" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.05" />
            </linearGradient>

            {/* Target Pulse Radar */}
            <radialGradient id="targetPulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
            </radialGradient>

            {/* Nasal Cavity Atmospheric Tint */}
            <radialGradient id="nasalChamber" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.03" />
            </radialGradient>

            {/* Vertebrae Column Gradient */}
            <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>

          {/* 1. Cervical Vertebrae & Spine Column (C1 - C4) */}
          <g opacity="0.6">
            <rect x="295" y="105" width="28" height="24" rx="4" fill="url(#spineGrad)" stroke="#475569" strokeWidth="1" />
            <text x="328" y="122" fill="#64748b" fontSize="8" fontFamily="monospace">C1</text>
            <rect x="295" y="135" width="28" height="24" rx="4" fill="url(#spineGrad)" stroke="#475569" strokeWidth="1" />
            <text x="328" y="152" fill="#64748b" fontSize="8" fontFamily="monospace">C2</text>
            <rect x="295" y="165" width="28" height="24" rx="4" fill="url(#spineGrad)" stroke="#475569" strokeWidth="1" />
            <text x="328" y="182" fill="#64748b" fontSize="8" fontFamily="monospace">C3</text>
            <rect x="295" y="195" width="28" height="24" rx="4" fill="url(#spineGrad)" stroke="#475569" strokeWidth="1" />
            <text x="328" y="212" fill="#64748b" fontSize="8" fontFamily="monospace">C4</text>
            <rect x="295" y="225" width="28" height="24" rx="4" fill="url(#spineGrad)" stroke="#475569" strokeWidth="1" />
            <text x="328" y="242" fill="#64748b" fontSize="8" fontFamily="monospace">C5</text>
          </g>

          {/* 2. Cranial Outer Profile (Forehead, Nose, Upper Lip, Chin, Neck) */}
          <path
            d="M 60,35 Q 110,18 190,18 Q 285,18 295,95 L 290,295 L 260,295 L 255,255 Q 250,180 230,170 Q 210,165 170,165 L 140,195 Q 120,225 100,240 L 68,240 Q 56,182 62,160 Q 72,150 62,140 Q 52,130 48,118 Q 44,95 55,75 Z"
            fill="url(#craniumGrad)"
            stroke="#475569"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* 3. Nasal Cavity (تجويف الأنف والقرينات الأنفية الثلاث) */}
          <path
            d="M 75,98 Q 110,65 185,68 Q 228,72 238,105 L 210,105 Q 180,82 120,82 Q 90,88 75,98 Z"
            fill="url(#nasalChamber)"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          {/* Superior, Middle & Inferior Nasal Conchae (القرينات الأنفية) */}
          <path d="M 105,80 Q 140,74 175,82" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M 115,88 Q 150,83 185,90" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
          <path d="M 125,96 Q 160,92 195,98" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <text x="140" y="78" fill="#38bdf8" fontSize="9" fontWeight="bold" letterSpacing="0.5">
            Nasal Cavity (تجويف الأنف)
          </text>

          {/* Dynamic Nasal Airflow Stream (for nasal sounds like [m, n, ŋ, ɑ̃, ɛ̃]) */}
          {isNasalActive && (
            <g className="animate-pulse">
              <path
                d="M 235,145 Q 220,110 180,95 Q 130,85 85,98"
                fill="none"
                stroke="#00f2fe"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="6 4"
              />
              <circle cx="95" cy="97" r="4" fill="#38bdf8" />
              <circle cx="145" cy="89" r="3" fill="#38bdf8" />
              <circle cx="195" cy="98" r="4" fill="#38bdf8" />
            </g>
          )}

          {/* 4. Hard Palate Bone (سقف الحنك الصلب) with Rugae texturing */}
          <path
            d="M 94,142 Q 125,122 175,116 Q 215,116 230,128"
            fill="none"
            stroke="url(#hardPalateBone)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Rugae (التجاعيد الحنكية خلف الأسنان) */}
          <path d="M 106,134 Q 112,130 118,136" fill="none" stroke="#475569" strokeWidth="1.5" />
          <path d="M 124,129 Q 130,125 136,131" fill="none" stroke="#475569" strokeWidth="1.5" />

          {/* 5. Soft Palate (Velum) & Uvula (الحنك الرخو واللهاة) - Dynamic Elevation */}
          {isNasalActive ? (
            // Lowered Velum: Open port to nasal cavity, hangs into pharynx
            <path
              d="M 230,128 Q 235,145 234,168 C 233,178 238,185 236,190"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="5"
              strokeLinecap="round"
            />
          ) : (
            // Raised Velum: Sealed against posterior pharyngeal wall
            <path
              d="M 230,128 Q 242,138 255,145 C 258,155 254,166 250,172"
              fill="none"
              stroke="#be185d"
              strokeWidth="5"
              strokeLinecap="round"
            />
          )}
          <text x="248" y="132" fill="#cbd5e1" fontSize="8" fontWeight="bold">
            Velum (الحنك الرخو)
          </text>

          {/* 6. Upper Incisors (الأسنان العليا) & Gum Margin */}
          <path d="M 72,138 Q 82,143 90,149" fill="none" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
          {/* Enamel Crown with Dental Root Gradient */}
          <rect x="88" y="145" width="7" height="9" rx="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />

          {/* 7. Lower Lip & Lower Incisors (الشفة السفلى والأسنان السفلية) */}
          {currentConfig.lipShape === 'closed' ? (
            // Sealed Lips (Bilabial)
            <g>
              <path d="M 70,148 Q 80,149 88,149" fill="none" stroke="#e11d48" strokeWidth="5.5" strokeLinecap="round" />
              <rect x="88" y="152" width="7" height="9" rx="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
            </g>
          ) : currentConfig.lipShape === 'labiodental' ? (
            // Lower Lip Tucked under Upper Teeth
            <g>
              <path d="M 74,162 Q 86,156 90,154" fill="none" stroke="#e11d48" strokeWidth="5" strokeLinecap="round" />
              <rect x="86" y="160" width="7" height="9" rx="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
            </g>
          ) : currentConfig.lipShape === 'rounded' ? (
            // Rounded / Protruded Lips
            <g>
              <path d="M 64,142 Q 76,145 84,150" fill="none" stroke="#e11d48" strokeWidth="5" strokeLinecap="round" />
              <path d="M 65,168 Q 78,165 85,160" fill="none" stroke="#e11d48" strokeWidth="5" strokeLinecap="round" />
              <rect x="88" y="159" width="7" height="9" rx="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
            </g>
          ) : (
            // Neutral Natural Lips
            <g>
              <path d="M 70,140 Q 80,145 88,150" fill="none" stroke="#e11d48" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 72,172 Q 82,168 88,162" fill="none" stroke="#e11d48" strokeWidth="4.5" strokeLinecap="round" />
              <rect x="88" y="159" width="7" height="9" rx="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
            </g>
          )}

          {/* 8. Tongue Musculature (عضلة اللسان التشريحية الكاملة) with Dynamic Deformation */}
          <g>
            {/* Base Tongue Flesh Volume */}
            <path
              d={currentConfig.tonguePath}
              fill="url(#tongueFlesh)"
              stroke="url(#mucosaGrad)"
              strokeWidth="2"
              className="transition-all duration-300 ease-out"
            />
            {/* Genioglossus & Verticalis Muscle Fiber Highlights */}
            <path
              d="M 125,190 Q 155,185 185,190"
              fill="none"
              stroke="#fda4af"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.4"
            />
            <path
              d="M 140,205 Q 170,200 200,205"
              fill="none"
              stroke="#fda4af"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.3"
            />
            <text x="145" y="210" fill="#fecdd3" fontSize="9" fontWeight="bold" opacity="0.85">
              Tongue (اللسان)
            </text>
          </g>

          {/* 9. Pharynx & Epiglottis (البلعوم ولسان المزمار) */}
          <path
            d="M 245,195 Q 235,215 228,235"
            fill="none"
            stroke="#a855f7"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <text x="250" y="215" fill="#d8b4fe" fontSize="8" fontWeight="bold">
            Epiglottis (لسان المزمار)
          </text>

          {/* 10. Vocal Folds & Larynx (الحنجرة والأوتار الصوتية) */}
          <g transform="translate(225, 255)">
            {/* Laryngeal Cavity Frame */}
            <rect x="0" y="0" width="36" height="24" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
            <ellipse
              cx="18"
              cy="12"
              rx="13"
              ry="7"
              fill="#020617"
              stroke={isVoiced ? '#10b981' : '#f59e0b'}
              strokeWidth="2"
            />
            {isVoiced ? (
              // Active Vibrating Vocal Folds (Sine Wave Oscillation)
              <g className="animate-pulse">
                <path d="M 8,12 Q 13,8 18,12 T 28,12" fill="none" stroke="#34d399" strokeWidth="2.5" />
                <path d="M 8,12 Q 13,16 18,12 T 28,12" fill="none" stroke="#10b981" strokeWidth="2" />
              </g>
            ) : (
              // Open Glottal Slit (Voiceless / Whispered / Aspiration)
              <line x1="18" y1="6" x2="18" y2="18" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
            )}
            <text
              x="18"
              y="-4"
              textAnchor="middle"
              fill={isVoiced ? '#6ee7b7' : '#fde68a'}
              fontSize="9"
              fontWeight="bold"
            >
              Glottis (الحبلان الصوتيان)
            </text>
          </g>

          {/* 11. Interactive Articulatory Target Hotspot (Glowing Pulse Ring) */}
          <g transform={`translate(${currentConfig.targetX}, ${currentConfig.targetY})`}>
            <circle cx="0" cy="0" r="22" fill="url(#targetPulse)" className="animate-ping origin-center" />
            <circle cx="0" cy="0" r="10" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="4" fill="#ffffff" />
          </g>

          {/* 12. Active Target Name Callout Banner Inside SVG */}
          <g transform="translate(18, 275)">
            <rect
              x="0"
              y="0"
              width="220"
              height="30"
              rx="10"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1.5"
              opacity="0.95"
            />
            <text x="12" y="19" fill="#f8fafc" fontSize="10.5" fontWeight="bold">
              🎯 {currentConfig.nameEn.split('(')[0].trim()}
            </text>
          </g>
        </svg>
      </div>

      {/* Place of Articulation Quick Switcher Tabs */}
      {showSelector && (
        <div className="w-full space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              <span>مواضع النطق التفاعلية (Articulatory Places)</span>
            </span>
            <span className="text-[10px] text-violet-400 font-mono">Click to test anatomy</span>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-[140px] overflow-y-auto p-1 rounded-2xl bg-slate-900/50 border border-slate-800">
            {(Object.keys(ARTICULATORY_PLACES) as ArticulatoryPlace[]).map((key) => {
              const cfg = ARTICULATORY_PLACES[key];
              const isSelected = activePlaceKey === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSelectPlace(key)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/30 scale-102 border border-violet-400'
                      : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700/50'
                  }`}
                >
                  <span>{cfg.nameEn.split(' ')[0]}</span>
                  <span className="text-[10px] opacity-75">({cfg.examplePhonemes[0]})</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Dynamic Linguistic & Pedagogical Details Card */}
      <div
        className={`w-full p-4 rounded-2xl border transition-all ${
          isLight ? 'bg-violet-50/80 border-violet-200' : 'bg-slate-900/90 border-violet-500/30'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <div>
            <div className="text-xs sm:text-sm font-bold text-violet-300 flex items-center gap-1.5">
              <span>{name || currentConfig.nameEn}</span>
              {symbol && (
                <span className="px-2 py-0.5 rounded-lg bg-violet-500/20 text-violet-200 font-mono text-xs border border-violet-500/30">
                  {symbol}
                </span>
              )}
            </div>
            <div className="text-xs font-serif text-amber-300 mt-0.5" dir="rtl">
              {currentConfig.nameAr}
            </div>
          </div>

          {/* Pronunciation & Listen Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                const wordToPlay =
                  audioExampleWord ||
                  (symbol ? symbol.replace(/\//g, '') : currentConfig.exampleWord.text);
                const langToPlay = currentConfig.exampleWord.lang || language;
                playPronunciation(wordToPlay, langToPlay);
              }}
              className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-violet-600/25 cursor-pointer"
              title="استمع إلى النطق الصوتي الفصيح"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>
                نطق المثال ({audioExampleWord || currentConfig.exampleWord.text})
              </span>
            </button>
          </div>
        </div>

        {/* Anatomical Manner & Explanation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 font-bold block mb-1">Manner of Articulation:</span>
            <span className="text-slate-200 font-medium">
              {manner || currentConfig.mannerDefault}
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 font-bold block mb-1">الأصوات الناتجة (IPA):</span>
            <span className="text-emerald-400 font-mono font-bold">
              {currentConfig.examplePhonemes.join('   ')}
            </span>
          </div>
        </div>

        <div className="mt-3 text-[11px] sm:text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60">
          <p className="mb-1">{currentConfig.descriptionEn}</p>
          <p className="font-serif text-amber-200/90" dir="rtl">
            {currentConfig.descriptionAr}
          </p>
        </div>
      </div>
    </div>
  );
};
