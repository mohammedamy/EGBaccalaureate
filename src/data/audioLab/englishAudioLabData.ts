/**
 * Secondary 3 English Audio & Phonetic Pronunciation Laboratory Data Catalog
 * Includes:
 * 1. 44 International Phonetic Alphabet (IPA) phonemes with audio triggers and articulation guides
 * 2. High-confusion Minimal Pairs specifically targeting Arabic/Egyptian ESL speakers
 * 3. Heteronym Noun vs Verb Syllable Stress shifts with pitch metrics
 * 4. Suffix-driven Accent placement rules
 * 5. Connected speech phenomena (Schwa, Elision, Assimilation, Linking)
 * 6. Authentic Secondary 3 Academic Listening Tracks with examination questions
 */

export interface Phoneme {
  symbol: string;
  category: 'short_vowel' | 'long_vowel' | 'diphthong' | 'voiced_consonant' | 'voiceless_consonant';
  name: string;
  examples: string[];
  articulationGuide: string;
  audioTriggerWord: string;
  arabicContrastWarning?: string;
}

export interface MinimalPair {
  id: string;
  phoneme1: string;
  phoneme2: string;
  word1: string;
  word2: string;
  phonetic1: string;
  phonetic2: string;
  sentence1: string;
  sentence2: string;
  examTrapNote: string;
}

export interface StressShiftWord {
  id: string;
  word: string;
  nounPhonetic: string;
  verbPhonetic: string;
  nounSyllables: { text: string; stressed: boolean }[];
  verbSyllables: { text: string; stressed: boolean }[];
  nounDefinition: string;
  verbDefinition: string;
  nounExample: string;
  verbExample: string;
  secondary3Context: string;
}

export interface SuffixStressRule {
  id: string;
  suffixGroup: string;
  ruleName: string;
  stressPosition: 'penultimate' | 'antepenultimate' | 'suffix_itself';
  ruleExplanation: string;
  examples: { word: string; phonetic: string; stressIndex: number; syllables: string[] }[];
}

export interface ConnectedSpeechItem {
  id: string;
  type: 'schwa' | 'elision' | 'linking' | 'assimilation';
  title: string;
  description: string;
  formalCitation: string;
  connectedForm: string;
  exampleSentence: string;
  audioPrompt: string;
}

export interface ListeningTrack {
  id: string;
  titleEn: string;
  theme: string;
  genre: 'dialogue' | 'monologue' | 'interview' | 'lecture';
  recommendedVoice: 'en-GB' | 'en-US';
  audioScript: { speaker: string; text: string }[];
  fullText: string;
  comprehensionQuestions: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    rationale: string;
  }[];
}

// -------------------------------------------------------------
// 1. 44 IPA PHONEMES
// -------------------------------------------------------------
export const IPA_PHONEMES: Phoneme[] = [
  // Short Vowels
  {
    symbol: '/ɪ/',
    category: 'short_vowel',
    name: 'Near-close near-front unrounded vowel',
    examples: ['ship', 'hit', 'minute'],
    articulationGuide: 'Short, lax vowel. Lips relaxed, jaw slightly more open than /iː/.',
    audioTriggerWord: 'ship',
    arabicContrastWarning: 'Do NOT lengthen to /iː/. Saying /iː/ turns "ship" into "sheep".',
  },
  {
    symbol: '/e/',
    category: 'short_vowel',
    name: 'Close-mid front unrounded vowel',
    examples: ['pen', 'bed', 'many'],
    articulationGuide: 'Mid front vowel. Lips loosely spread, tongue mid-height.',
    audioTriggerWord: 'pen',
    arabicContrastWarning: 'Do NOT confuse with /æ/. Saying /æ/ turns "pen" into "pan".',
  },
  {
    symbol: '/æ/',
    category: 'short_vowel',
    name: 'Near-open front unrounded vowel',
    examples: ['cat', 'apple', 'plagiarism'],
    articulationGuide: 'Open mouth widely, pull tongue down in the front.',
    audioTriggerWord: 'cat',
    arabicContrastWarning: 'Often replaced by /e/ or /ɑː/. Keep jaw wide open.',
  },
  {
    symbol: '/ɒ/',
    category: 'short_vowel',
    name: 'Open back rounded vowel',
    examples: ['hot', 'lock', 'robbery'],
    articulationGuide: 'Back of tongue low, lips loosely rounded. Short sound in British RP.',
    audioTriggerWord: 'hot',
    arabicContrastWarning: 'Keep lips open-rounded; do not lengthen to /ɔː/ (port).',
  },
  {
    symbol: '/ʌ/',
    category: 'short_vowel',
    name: 'Open-mid back unrounded vowel',
    examples: ['cup', 'love', 'conduct'],
    articulationGuide: 'Short central-back vowel. Neutral lips, tongue lowered mid-back.',
    audioTriggerWord: 'cup',
    arabicContrastWarning: 'Distinct from Arabic /a/; much shorter and slightly retracted.',
  },
  {
    symbol: '/ʊ/',
    category: 'short_vowel',
    name: 'Near-close near-back rounded vowel',
    examples: ['book', 'put', 'could'],
    articulationGuide: 'Short lax rounded vowel. Lips gently rounded, not pursed tightly.',
    audioTriggerWord: 'book',
    arabicContrastWarning: 'Do NOT lengthen to /uː/. "Pull" vs "pool".',
  },
  {
    symbol: '/ə/',
    category: 'short_vowel',
    name: 'Mid-central vowel (The Schwa)',
    examples: ['about', 'camera', 'piracy'],
    articulationGuide: 'The most frequent vowel in English. Completely relaxed, unstressed mouth.',
    audioTriggerWord: 'about',
    arabicContrastWarning: 'Occurs ONLY on unstressed syllables. Never stress the schwa.',
  },

  // Long Vowels
  {
    symbol: '/iː/',
    category: 'long_vowel',
    name: 'Close front unrounded long vowel',
    examples: ['sheep', 'freeze', 'unique'],
    articulationGuide: 'Tense, high front tongue position. Lips spread into a wide smile.',
    audioTriggerWord: 'sheep',
    arabicContrastWarning: 'Significantly longer than /ɪ/. Contrast: "seat" vs "sit".',
  },
  {
    symbol: '/ɑː/',
    category: 'long_vowel',
    name: 'Open back unrounded long vowel',
    examples: ['car', 'father', 'calm'],
    articulationGuide: 'Deep, open back resonant vowel. Jaw dropped deeply, unrounded lips.',
    audioTriggerWord: 'father',
    arabicContrastWarning: 'Corresponds to long alif in Arabic, keep it resonant and open.',
  },
  {
    symbol: '/ɔː/',
    category: 'long_vowel',
    name: 'Open-mid back rounded long vowel',
    examples: ['door', 'water', 'broadcast'],
    articulationGuide: 'Tense, fully rounded long vowel. Tongue drawn back and raised slightly.',
    audioTriggerWord: 'door',
    arabicContrastWarning: 'Contrast with short /ɒ/. "Caught" vs "cot".',
  },
  {
    symbol: '/uː/',
    category: 'long_vowel',
    name: 'Close back rounded long vowel',
    examples: ['moon', 'crew', 'pollution'],
    articulationGuide: 'High back tongue position, tight lip protrusion and rounding.',
    audioTriggerWord: 'moon',
    arabicContrastWarning: 'Tense and elongated compared to lax /ʊ/ in "foot".',
  },
  {
    symbol: '/ɜː/',
    category: 'long_vowel',
    name: 'Open-mid central unrounded long vowel',
    examples: ['bird', 'learn', 'resilience'],
    articulationGuide: 'Central tongue height, neutral lips, held long without lip rounding.',
    audioTriggerWord: 'bird',
    arabicContrastWarning: 'Do NOT roll an /r/ unless rhotic. Pure central sound.',
  },

  // Diphthongs
  {
    symbol: '/eɪ/',
    category: 'diphthong',
    name: 'Closing diphthong: /e/ to /ɪ/',
    examples: ['face', 'great', 'innovate'],
    articulationGuide: 'Glide smoothly from mid-front /e/ towards near-close /ɪ/.',
    audioTriggerWord: 'face',
  },
  {
    symbol: '/aɪ/',
    category: 'diphthong',
    name: 'Closing diphthong: /a/ to /ɪ/',
    examples: ['time', 'piracy', 'criteria'],
    articulationGuide: 'Glide from open /a/ up towards /ɪ/. Wide jaw closing motion.',
    audioTriggerWord: 'time',
  },
  {
    symbol: '/ɔɪ/',
    category: 'diphthong',
    name: 'Closing diphthong: /ɔ/ to /ɪ/',
    examples: ['boy', 'coin', 'exploit'],
    articulationGuide: 'Glide from rounded back /ɔ/ to spread front /ɪ/.',
    audioTriggerWord: 'boy',
  },
  {
    symbol: '/aʊ/',
    category: 'diphthong',
    name: 'Closing diphthong: /a/ to /ʊ/',
    examples: ['now', 'ground', 'outperform'],
    articulationGuide: 'Glide from open front /a/ to rounded back /ʊ/.',
    audioTriggerWord: 'now',
  },
  {
    symbol: '/əʊ/',
    category: 'diphthong',
    name: 'Closing diphthong: /ə/ to /ʊ/',
    examples: ['home', 'stone', 'protocol'],
    articulationGuide: 'Start at central neutral schwa /ə/ and round lips gently toward /ʊ/.',
    audioTriggerWord: 'home',
  },
  {
    symbol: '/ɪə/',
    category: 'diphthong',
    name: 'Centring diphthong: /ɪ/ to /ə/',
    examples: ['near', 'peer', 'career'],
    articulationGuide: 'Glide from high front /ɪ/ toward neutral central schwa /ə/.',
    audioTriggerWord: 'near',
  },
  {
    symbol: '/eə/',
    category: 'diphthong',
    name: 'Centring diphthong: /e/ to /ə/',
    examples: ['hair', 'bear', 'precarious'],
    articulationGuide: 'Glide from mid-open /e/ to neutral schwa /ə/.',
    audioTriggerWord: 'hair',
  },
  {
    symbol: '/ʊə/',
    category: 'diphthong',
    name: 'Centring diphthong: /ʊ/ to /ə/',
    examples: ['pure', 'tour', 'cure'],
    articulationGuide: 'Glide from rounded /ʊ/ to central unrounded schwa /ə/.',
    audioTriggerWord: 'pure',
  },

  // Voiceless Consonants
  {
    symbol: '/p/',
    category: 'voiceless_consonant',
    name: 'Voiceless bilabial plosive',
    examples: ['pen', 'piracy', 'publish'],
    articulationGuide: 'Both lips close, pressure builds, released with an audible puff of air.',
    audioTriggerWord: 'pen',
    arabicContrastWarning: 'CRITICAL: Arabic lacks /p/. Vocal cords must NOT vibrate. Contrast: "park" vs "bark".',
  },
  {
    symbol: '/t/',
    category: 'voiceless_consonant',
    name: 'Voiceless alveolar plosive',
    examples: ['time', 'ten', 'tabloid'],
    articulationGuide: 'Tongue tip seals against alveolar ridge behind upper teeth; aspirated release.',
    audioTriggerWord: 'time',
  },
  {
    symbol: '/k/',
    category: 'voiceless_consonant',
    name: 'Voiceless velar plosive',
    examples: ['key', 'clash', 'copyright'],
    articulationGuide: 'Back of tongue presses firmly against soft palate (velum); crisp release.',
    audioTriggerWord: 'key',
  },
  {
    symbol: '/f/',
    category: 'voiceless_consonant',
    name: 'Voiceless labiodental fricative',
    examples: ['four', 'fake', 'formula'],
    articulationGuide: 'Upper incisors press lightly against lower lip; continuous air stream.',
    audioTriggerWord: 'four',
  },
  {
    symbol: '/θ/',
    category: 'voiceless_consonant',
    name: 'Voiceless dental fricative',
    examples: ['think', 'threat', 'ethics'],
    articulationGuide: 'Tongue tip protrudes slightly between front teeth without voice vibration.',
    audioTriggerWord: 'think',
    arabicContrastWarning: 'Equivalent to Arabic (ث). Do NOT replace with /s/ ("think" vs "sink").',
  },
  {
    symbol: '/s/',
    category: 'voiceless_consonant',
    name: 'Voiceless alveolar fricative',
    examples: ['see', 'city', 'space'],
    articulationGuide: 'Tongue blade close to alveolar ridge creating sharp high-frequency hissing.',
    audioTriggerWord: 'see',
  },
  {
    symbol: '/ʃ/',
    category: 'voiceless_consonant',
    name: 'Voiceless post-alveolar fricative',
    examples: ['she', 'ship', 'issue'],
    articulationGuide: 'Tongue raised towards hard palate, lips slightly rounded/protruded.',
    audioTriggerWord: 'she',
  },
  {
    symbol: '/tʃ/',
    category: 'voiceless_consonant',
    name: 'Voiceless post-alveolar affricate',
    examples: ['chair', 'nature', 'challenge'],
    articulationGuide: 'Stops airflow as /t/ then friction release as /ʃ/. Crisp single sound.',
    audioTriggerWord: 'chair',
  },
  {
    symbol: '/h/',
    category: 'voiceless_consonant',
    name: 'Voiceless glottal fricative',
    examples: ['hat', 'hello', 'hypothesis'],
    articulationGuide: 'Exhalation of breath through open vocal tract without vocal cord vibration.',
    audioTriggerWord: 'hat',
  },

  // Voiced Consonants
  {
    symbol: '/b/',
    category: 'voiced_consonant',
    name: 'Voiced bilabial plosive',
    examples: ['book', 'broadsheet', 'burnout'],
    articulationGuide: 'Both lips close, vocal cords vibrate actively during closure and burst.',
    audioTriggerWord: 'book',
    arabicContrastWarning: 'Contrast with /p/. Do NOT voice /p/ in words like "pride" or "piracy".',
  },
  {
    symbol: '/d/',
    category: 'voiced_consonant',
    name: 'Voiced alveolar plosive',
    examples: ['door', 'data', 'diversity'],
    articulationGuide: 'Tongue tip against alveolar ridge with full vocal fold vibration.',
    audioTriggerWord: 'door',
  },
  {
    symbol: '/ɡ/',
    category: 'voiced_consonant',
    name: 'Voiced velar plosive',
    examples: ['good', 'great', 'generate'],
    articulationGuide: 'Back of tongue on velum with vocal vibration.',
    audioTriggerWord: 'good',
  },
  {
    symbol: '/v/',
    category: 'voiced_consonant',
    name: 'Voiced labiodental fricative',
    examples: ['voice', 'victim', 'innovative'],
    articulationGuide: 'Upper teeth on lower lip with strong vocal buzz.',
    audioTriggerWord: 'voice',
    arabicContrastWarning: 'Arabic lacks /v/. Do NOT replace with /f/ or /w/ ("vine" vs "wine").',
  },
  {
    symbol: '/ð/',
    category: 'voiced_consonant',
    name: 'Voiced dental fricative',
    examples: ['this', 'breathe', 'furthermore'],
    articulationGuide: 'Tongue between teeth with vibrating vocal cords.',
    audioTriggerWord: 'this',
    arabicContrastWarning: 'Equivalent to Arabic (ذ). Do NOT replace with /z/ or /d/.',
  },
  {
    symbol: '/z/',
    category: 'voiced_consonant',
    name: 'Voiced alveolar fricative',
    examples: ['zoo', 'rise', 'resilience'],
    articulationGuide: 'Hissing sound with vocal cords actively vibrating.',
    audioTriggerWord: 'zoo',
  },
  {
    symbol: '/ʒ/',
    category: 'voiced_consonant',
    name: 'Voiced post-alveolar fricative',
    examples: ['measure', 'vision', 'conclusion'],
    articulationGuide: 'Voiced equivalent of /ʃ/. Soft vibrating hum.',
    audioTriggerWord: 'vision',
  },
  {
    symbol: '/dʒ/',
    category: 'voiced_consonant',
    name: 'Voiced post-alveolar affricate',
    examples: ['job', 'journalism', 'digitize'],
    articulationGuide: 'Voiced stop /d/ followed immediately by friction /ʒ/.',
    audioTriggerWord: 'job',
  },
  {
    symbol: '/m/',
    category: 'voiced_consonant',
    name: 'Voiced bilabial nasal',
    examples: ['man', 'media', 'motivate'],
    articulationGuide: 'Lips closed, soft palate lowered so sound resonates through nose.',
    audioTriggerWord: 'man',
  },
  {
    symbol: '/n/',
    category: 'voiced_consonant',
    name: 'Voiced alveolar nasal',
    examples: ['no', 'novel', 'necessity'],
    articulationGuide: 'Tongue against alveolar ridge, nasal resonance.',
    audioTriggerWord: 'novel',
  },
  {
    symbol: '/ŋ/',
    category: 'voiced_consonant',
    name: 'Voiced velar nasal',
    examples: ['sing', 'ranking', 'long-term'],
    articulationGuide: 'Back of tongue on velum, nasal airflow. Never pronounce a hard /ɡ/ after in English standard RP.',
    audioTriggerWord: 'sing',
  },
  {
    symbol: '/l/',
    category: 'voiced_consonant',
    name: 'Voiced alveolar lateral approximant',
    examples: ['light', 'law', 'literature'],
    articulationGuide: 'Tongue tip on alveolar ridge, air escapes around the sides of the tongue.',
    audioTriggerWord: 'light',
  },
  {
    symbol: '/r/',
    category: 'voiced_consonant',
    name: 'Voiced post-alveolar approximant',
    examples: ['red', 'reform', 'rhetoric'],
    articulationGuide: 'Tongue tip curled back towards palate without touching it. Not rolled/tapped.',
    audioTriggerWord: 'red',
  },
  {
    symbol: '/w/',
    category: 'voiced_consonant',
    name: 'Voiced labio-velar approximant',
    examples: ['we', 'work', 'wellbeing'],
    articulationGuide: 'Lips tightly rounded then glide open into the following vowel.',
    audioTriggerWord: 'we',
    arabicContrastWarning: 'Do NOT confuse with /v/. "West" has rounded lips; "vest" uses teeth on lip.',
  },
  {
    symbol: '/j/',
    category: 'voiced_consonant',
    name: 'Voiced palatal approximant',
    examples: ['yes', 'year', 'youth'],
    articulationGuide: 'Front of tongue close to hard palate, quickly gliding into following vowel.',
    audioTriggerWord: 'yes',
  },
];

// -------------------------------------------------------------
// 2. TARGETED MINIMAL PAIRS FOR ARABIC/EGYPTIAN ESL LEARNERS
// -------------------------------------------------------------
export const MINIMAL_PAIRS: MinimalPair[] = [
  {
    id: 'mp_01',
    phoneme1: '/p/',
    phoneme2: '/b/',
    word1: 'piracy',
    word2: 'bureaucracy',
    phonetic1: '/ˈpaɪ.rə.si/',
    phonetic2: '/bjʊəˈrɒk.rə.si/',
    sentence1: 'Digital piracy causes millions of pounds in economic damage.',
    sentence2: 'Governmental bureaucracy delayed the approval of the license.',
    examTrapNote: 'Do not voice the initial /p/ in "piracy". Arabic speakers frequently mispronounce /p/ as /b/.',
  },
  {
    id: 'mp_02',
    phoneme1: '/p/',
    phoneme2: '/b/',
    word1: 'park',
    word2: 'bark',
    phonetic1: '/pɑːk/',
    phonetic2: '/bɑːk/',
    sentence1: 'We strolled through the botanical park.',
    sentence2: 'The outer bark of the ancient oak tree was thick.',
    examTrapNote: 'In "park", the vocal cords must remain idle during the initial plosive burst.',
  },
  {
    id: 'mp_03',
    phoneme1: '/θ/',
    phoneme2: '/s/',
    word1: 'think',
    word2: 'sink',
    phonetic1: '/θɪŋk/',
    phonetic2: '/sɪŋk/',
    sentence1: 'Philosophers think deeply about ethical dilemmas.',
    sentence2: 'The damaged cargo vessel began to sink.',
    examTrapNote: 'Keep the tongue tip between the teeth for /θ/ (ث). Retracting it behind teeth creates /s/.',
  },
  {
    id: 'mp_04',
    phoneme1: '/v/',
    phoneme2: '/w/',
    word1: 'vest',
    word2: 'west',
    phonetic1: '/vest/',
    phonetic2: '/west/',
    sentence1: 'The construction engineer wore a high-visibility safety vest.',
    sentence2: 'The research expedition traveled toward the barren west.',
    examTrapNote: 'For /v/, upper teeth touch lower lip. For /w/, lips are rounded like a kiss without dental contact.',
  },
  {
    id: 'mp_05',
    phoneme1: '/ɪ/',
    phoneme2: '/iː/',
    word1: 'ship',
    word2: 'sheep',
    phonetic1: '/ʃɪp/',
    phonetic2: '/ʃiːp/',
    sentence1: 'The cargo ship blocked navigation along the maritime canal.',
    sentence2: 'The farmer shears the wool from the sheep every spring.',
    examTrapNote: '/ɪ/ is short and lax. /iː/ is long, tense, and articulated with spread lips.',
  },
  {
    id: 'mp_06',
    phoneme1: '/e/',
    phoneme2: '/æ/',
    word1: 'pen',
    word2: 'pan',
    phonetic1: '/pen/',
    phonetic2: '/pæn/',
    sentence1: 'He signed the contractual agreement with an ink pen.',
    sentence2: 'The chef heated the olive oil in a stainless-steel pan.',
    examTrapNote: 'Drop your jaw significantly wider for /æ/. /e/ has a much narrower mouth aperture.',
  },
  {
    id: 'mp_07',
    phoneme1: '/ɒ/',
    phoneme2: '/ɔː/',
    word1: 'spot',
    word2: 'sport',
    phonetic1: '/spɒt/',
    phonetic2: '/spɔːt/',
    sentence1: 'Astronomers identified a dark sunspot on the solar surface.',
    sentence2: 'Competitive team sport fosters psychological resilience and discipline.',
    examTrapNote: '/ɒ/ is a short, open back vowel; /ɔː/ is long and more tightly rounded.',
  },
  {
    id: 'mp_08',
    phoneme1: '/ð/',
    phoneme2: '/z/',
    word1: 'breathe',
    word2: 'breeze',
    phonetic1: '/briːð/',
    phonetic2: '/briːz/',
    sentence1: 'Patients with respiratory infections struggle to breathe freely.',
    sentence2: 'A gentle Mediterranean breeze cooled the coastal evening air.',
    examTrapNote: '/ð/ is interdental (ذ); /z/ is alveolar hissing (ز).',
  },
  {
    id: 'mp_09',
    phoneme1: '/tʃ/',
    phoneme2: '/ʃ/',
    word1: 'chair',
    word2: 'share',
    phonetic1: '/tʃeə/',
    phonetic2: '/ʃeə/',
    sentence1: 'The distinguished professor was elected to the academic chair.',
    sentence2: 'Investors bought a majority share in the renewable energy startup.',
    examTrapNote: '/tʃ/ begins with a complete alveolar stop [t] before exploding into [ʃ].',
  },
  {
    id: 'mp_10',
    phoneme1: '/f/',
    phoneme2: '/v/',
    word1: 'fault',
    word2: 'vault',
    phonetic1: '/fɔːlt/',
    phonetic2: '/vɔːlt/',
    sentence1: 'Geologists detected tectonic movement along the seismic fault.',
    sentence2: 'The bullion was secured inside an underground bank vault.',
    examTrapNote: '/f/ is voiceless; /v/ requires active vibration of the vocal cords.',
  },
];

// -------------------------------------------------------------
// 3. NOUN VS VERB STRESS SHIFTS (HETERONYMS)
// -------------------------------------------------------------
export const STRESS_SHIFT_WORDS: StressShiftWord[] = [
  {
    id: 'ss_01',
    word: 'record',
    nounPhonetic: '/ˈrek.ɔːd/',
    verbPhonetic: '/rɪˈkɔːd/',
    nounSyllables: [
      { text: 'REC', stressed: true },
      { text: 'ord', stressed: false },
    ],
    verbSyllables: [
      { text: 're', stressed: false },
      { text: 'CORD', stressed: true },
    ],
    nounDefinition: 'An official written document or piece of audio data preserved for posterity.',
    verbDefinition: 'To set down in writing or store electronically for future reproduction.',
    nounExample: 'He holds the national secondary school record for scientific excellence.',
    verbExample: 'Journalists record interviews using high-fidelity digital audio equipment.',
    secondary3Context: 'Unit 1 Media & Journalism examination distinction.',
  },
  {
    id: 'ss_02',
    word: 'present',
    nounPhonetic: '/ˈprez.ənt/',
    verbPhonetic: '/prɪˈzent/',
    nounSyllables: [
      { text: 'PRES', stressed: true },
      { text: 'ent', stressed: false },
    ],
    verbSyllables: [
      { text: 'pre', stressed: false },
      { text: 'SENT', stressed: true },
    ],
    nounDefinition: 'A gift, or the current moment in time.',
    verbDefinition: 'To formally exhibit, introduce, or award something to an audience.',
    nounExample: 'We must focus on the present economic challenges facing developing nations.',
    verbExample: 'The pioneering researcher will present her findings at the Cairo summit.',
    secondary3Context: 'Units 2 & 5 Academic Rhetoric.',
  },
  {
    id: 'ss_03',
    word: 'produce',
    nounPhonetic: '/ˈprɒd.juːs/',
    verbPhonetic: '/prəˈdjuːs/',
    nounSyllables: [
      { text: 'PROD', stressed: true },
      { text: 'uce', stressed: false },
    ],
    verbSyllables: [
      { text: 'pro', stressed: false },
      { text: 'DUCE', stressed: true },
    ],
    nounDefinition: 'Agricultural farm crops, fresh fruits, and vegetables harvested.',
    verbDefinition: 'To manufacture, create, or bring something into physical existence.',
    nounExample: 'Local organic produce is transported daily to wholesale city markets.',
    verbExample: 'Egypt aims to produce green hydrogen on an unprecedented industrial scale.',
    secondary3Context: 'Unit 3 Space & Sustainable Energy.',
  },
  {
    id: 'ss_04',
    word: 'conflict',
    nounPhonetic: '/ˈkɒn.flɪkt/',
    verbPhonetic: '/kənˈflɪkt/',
    nounSyllables: [
      { text: 'CON', stressed: true },
      { text: 'flict', stressed: false },
    ],
    verbSyllables: [
      { text: 'con', stressed: false },
      { text: 'FLICT', stressed: true },
    ],
    nounDefinition: 'A serious disagreement, war, or collision between opposing principles.',
    verbDefinition: 'To be incompatible, clash, or run contrary to another entity.',
    nounExample: 'Diplomatic mediation brought an end to the protracted border conflict.',
    verbExample: 'These partisan allegations conflict with all empirical historical evidence.',
    secondary3Context: 'Unit 1 Media & Journalistic Spin.',
  },
  {
    id: 'ss_05',
    word: 'desert',
    nounPhonetic: '/ˈdez.ət/',
    verbPhonetic: '/dɪˈzɜːt/',
    nounSyllables: [
      { text: 'DES', stressed: true },
      { text: 'ert', stressed: false },
    ],
    verbSyllables: [
      { text: 'de', stressed: false },
      { text: 'SERT', stressed: true },
    ],
    nounDefinition: 'A dry, barren geographical region with minimal annual rainfall.',
    verbDefinition: 'To abandon or withdraw from someone or something in an irresponsible manner.',
    nounExample: 'The Western Desert solar energy park produces gigawatts of clean electricity.',
    verbExample: 'Soldiers who desert their battalion during armed conflict face severe courts-martial.',
    secondary3Context: 'Frequent Thanawya Amma homograph trick question.',
  },
  {
    id: 'ss_06',
    word: 'contract',
    nounPhonetic: '/ˈkɒn.trækt/',
    verbPhonetic: '/kənˈtrækt/',
    nounSyllables: [
      { text: 'CON', stressed: true },
      { text: 'tract', stressed: false },
    ],
    verbSyllables: [
      { text: 'con', stressed: false },
      { text: 'TRACT', stressed: true },
    ],
    nounDefinition: 'A legally binding agreement enforceable by civil law.',
    verbDefinition: 'To shrink in volume or size, or to catch an infectious illness.',
    nounExample: 'The publishing house signed a binding contract with the prize-winning novelist.',
    verbExample: 'Metals expand upon heating and contract upon thermal cooling.',
    secondary3Context: 'Physics and Business English crossover.',
  },
  {
    id: 'ss_07',
    word: 'rebel',
    nounPhonetic: '/ˈreb.əl/',
    verbPhonetic: '/rɪˈbel/',
    nounSyllables: [
      { text: 'REB', stressed: true },
      { text: 'el', stressed: false },
    ],
    verbSyllables: [
      { text: 're', stressed: false },
      { text: 'BEL', stressed: true },
    ],
    nounDefinition: 'A person who resists authority or conventional societal expectations.',
    verbDefinition: 'To actively rise in opposition or armed revolt against established rule.',
    nounExample: 'In Dickens’ novel, Pip acts as an unintentional rebel against class rigidity.',
    verbExample: 'Young pioneers rebel against antiquated traditions that stifle scientific innovation.',
    secondary3Context: 'Literature analysis (*Great Expectations*).',
  },
  {
    id: 'ss_08',
    word: 'object',
    nounPhonetic: '/ˈɒb.dʒɪkt/',
    verbPhonetic: '/əbˈdʒekt/',
    nounSyllables: [
      { text: 'OB', stressed: true },
      { text: 'ject', stressed: false },
    ],
    verbSyllables: [
      { text: 'ob', stressed: false },
      { text: 'JECT', stressed: true },
    ],
    nounDefinition: 'A material entity that can be perceived by the senses.',
    verbDefinition: 'To state or raise a formal objection or express disapproval.',
    nounExample: 'Astronomers detected an unidentified interstellar object entering the solar orbit.',
    verbExample: 'Defense counsel will object to the admissibility of hearsay witness testimony.',
    secondary3Context: 'Unit 3 Space exploration & Legal register.',
  },
  {
    id: 'ss_09',
    word: 'permit',
    nounPhonetic: '/ˈpɜː.mɪt/',
    verbPhonetic: '/pəˈmɪt/',
    nounSyllables: [
      { text: 'PER', stressed: true },
      { text: 'mit', stressed: false },
    ],
    verbSyllables: [
      { text: 'per', stressed: false },
      { text: 'MIT', stressed: true },
    ],
    nounDefinition: 'An official certificate giving authorization to carry out an activity.',
    verbDefinition: 'To authorize, allow, or consent to the occurrence of an event.',
    nounExample: 'You must obtain a municipal building permit before commencing construction.',
    verbExample: 'Strict copyright regulations do not permit the unauthorized copying of textbook data.',
    secondary3Context: 'Unit 1 Media & Piracy Laws.',
  },
  {
    id: 'ss_10',
    word: 'suspect',
    nounPhonetic: '/ˈsʌs.pekt/',
    verbPhonetic: '/səˈspekt/',
    nounSyllables: [
      { text: 'SUS', stressed: true },
      { text: 'pect', stressed: false },
    ],
    verbSyllables: [
      { text: 'sus', stressed: false },
      { text: 'PECT', stressed: true },
    ],
    nounDefinition: 'An individual suspected of committing a felony or crime.',
    verbDefinition: 'To have an idea or belief about something without conclusive proof.',
    nounExample: 'Detectives interrogated the prime suspect regarding the bank heist.',
    verbExample: 'Epidemiologists suspect that the new pathogen spreads via airborne aerosols.',
    secondary3Context: 'Unit 1 Crime & Journalistic ethics.',
  },
];

// -------------------------------------------------------------
// 4. SUFFIX-DRIVEN ACCENT PLACEMENT RULES
// -------------------------------------------------------------
export const SUFFIX_STRESS_RULES: SuffixStressRule[] = [
  {
    id: 'suf_01',
    suffixGroup: '-tion, -sion, -ic, -cian',
    ruleName: 'Penultimate Syllable Rule',
    stressPosition: 'penultimate',
    ruleExplanation:
      'Suffixes ending in -tion, -sion, -ic, or -cian systematically place the primary lexical stress on the penultimate syllable (the syllable immediately preceding the suffix).',
    examples: [
      { word: 'competition', phonetic: '/ˌkɒm.pəˈtɪʃ.ən/', stressIndex: 2, syllables: ['com', 'pe', 'TI', 'tion'] },
      { word: 'decision', phonetic: '/dɪˈsɪʒ.ən/', stressIndex: 1, syllables: ['de', 'CI', 'sion'] },
      { word: 'scientific', phonetic: '/ˌsaɪənˈtɪf.ɪk/', stressIndex: 2, syllables: ['sci', 'en', 'TI', 'fic'] },
      { word: 'politician', phonetic: '/ˌpɒl.ɪˈtɪʃ.ən/', stressIndex: 2, syllables: ['pol', 'i', 'TI', 'cian'] },
      { word: 'inspiration', phonetic: '/ˌɪn.spɪˈreɪ.ʃən/', stressIndex: 2, syllables: ['in', 'spi', 'RA', 'tion'] },
    ],
  },
  {
    id: 'suf_02',
    suffixGroup: '-ity, -ical, -ify, -ate, -phy',
    ruleName: 'Antepenultimate Syllable Rule',
    stressPosition: 'antepenultimate',
    ruleExplanation:
      'Suffixes ending in -ity, -ical, -ify, -ate, or -phy reliably place primary stress on the antepenultimate syllable (the third syllable counting backward from the end).',
    examples: [
      { word: 'responsibility', phonetic: '/rɪˌspɒn.sɪˈbɪl.ə.ti/', stressIndex: 3, syllables: ['re', 'spon', 'si', 'BIL', 'i', 'ty'] },
      { word: 'economical', phonetic: '/ˌiː.kəˈnɒm.ɪ.kəl/', stressIndex: 2, syllables: ['e', 'co', 'NOM', 'i', 'cal'] },
      { word: 'simplify', phonetic: '/ˈsɪm.plɪ.faɪ/', stressIndex: 0, syllables: ['SIM', 'pli', 'fy'] },
      { word: 'communicate', phonetic: '/kəˈmjuː.nɪ.keɪt/', stressIndex: 1, syllables: ['com', 'MU', 'ni', 'cate'] },
      { word: 'philosophy', phonetic: '/fɪˈlɒs.ə.fi/', stressIndex: 1, syllables: ['phi', 'LOS', 'o', 'phy'] },
    ],
  },
  {
    id: 'suf_03',
    suffixGroup: '-ee, -eer, -ese, -esque',
    ruleName: 'Stress-Attracting Suffix Rule',
    stressPosition: 'suffix_itself',
    ruleExplanation:
      'Borrowed predominantly from French, these heavy suffixes pull the primary stress directly onto themselves.',
    examples: [
      { word: 'employee', phonetic: '/ɪmˈplɔɪ.iː/', stressIndex: 1, syllables: ['em', 'ploy', 'EE'] },
      { word: 'engineer', phonetic: '/ˌen.dʒɪˈnɪə/', stressIndex: 2, syllables: ['en', 'gi', 'NEER'] },
      { word: 'refugee', phonetic: '/ˌref.juˈdʒiː/', stressIndex: 2, syllables: ['ref', 'u', 'GEE'] },
      { word: 'picturesque', phonetic: '/ˌpɪk.tʃərˈesk/', stressIndex: 2, syllables: ['pic', 'tur', 'ESQUE'] },
    ],
  },
];

// -------------------------------------------------------------
// 5. CONNECTED SPEECH & ACOUSTIC RHYTHM
// -------------------------------------------------------------
export const CONNECTED_SPEECH_DATA: ConnectedSpeechItem[] = [
  {
    id: 'cs_01',
    type: 'schwa',
    title: 'Vowel Reduction to Schwa /ə/ in Function Words',
    description:
      'In natural connected English, unstressed grammatical auxiliary verbs and prepositions reduce to their weak forms centered around the schwa.',
    formalCitation: 'I can /kæn/ go to /tuː/ the library for /fɔː/ you.',
    connectedForm: 'I can /kən/ go to /tə/ the library for /fə/ you.',
    exampleSentence: 'Could you give it to him?',
    audioPrompt: 'Could you give it to him?',
  },
  {
    id: 'cs_02',
    type: 'elision',
    title: 'Elision of Alveolar Stops (/t/ and /d/)',
    description:
      'When /t/ or /d/ occurs between two consonants in rapid fluent speech, it is regularly dropped entirely to streamline speech articulation.',
    formalCitation: 'The next /nekst/ day /deɪ/ was the last /lɑːst/ train /treɪn/.',
    connectedForm: 'The nex’ /neks/ day was the las’ /lɑːs/ train.',
    exampleSentence: 'She was the next door neighbor.',
    audioPrompt: 'She was the next door neighbor.',
  },
  {
    id: 'cs_03',
    type: 'linking',
    title: 'Intrusive and Linking /r/',
    description:
      'In non-rhotic accents like British RP, an unwritten /r/ sound is inserted between a word ending in a vowel sound and a word beginning with a vowel sound to prevent glottal stops.',
    formalCitation: 'Law and order /lɔː ænd ɔː.də/',
    connectedForm: 'Law-(r)-and order /lɔː.rənd.ɔː.də/',
    exampleSentence: 'There is a flaw in the plan.',
    audioPrompt: 'There is a flaw in the plan.',
  },
  {
    id: 'cs_04',
    type: 'assimilation',
    title: 'Regressive Place Assimilation',
    description:
      'An alveolar consonant (/n/, /t/, /d/) adapts its place of articulation to match a following bilabial (/p/, /b/, /m/) or velar (/k/, /ɡ/) consonant.',
    formalCitation: 'good boy /ɡʊd bɔɪ/ & ten men /ten men/',
    connectedForm: 'goob-boy /ɡʊb bɔɪ/ & tem-men /tem men/',
    exampleSentence: 'He is a good boy with ten pens.',
    audioPrompt: 'He is a good boy with ten pens.',
  },
];

// -------------------------------------------------------------
// 6. SECONDARY 3 ACADEMIC LISTENING COMPREHENSION TRACKS
// -------------------------------------------------------------
export const LISTENING_TRACKS: ListeningTrack[] = [
  {
    id: 'track_01',
    titleEn: 'Track 1: Clean Energy & Green Hydrogen (STEM Debate)',
    theme: 'Clean Energy & Hydrogen Infrastructure (Unit 3)',
    genre: 'dialogue',
    recommendedVoice: 'en-GB',
    audioScript: [
      {
        speaker: 'Dr. Sarah (Green Energy Fellow)',
        text: 'Welcome to this symposium. When we examine Egypt’s decarbonization roadmap, green hydrogen stands out as a revolutionary vector. Unlike traditional fossil fuels, its combustion releases zero carbon emissions, yielding only pure water vapor.',
      },
      {
        speaker: 'Prof. Mark (Power Systems Specialist)',
        text: 'I fully concur on its environmental potential, Sarah. However, we cannot turn a blind eye to the round-trip thermodynamic efficiency. Transporting liquified hydrogen requires cryogenic cooling to minus two hundred and fifty-three degrees Celsius, which consumes substantial electrical energy before the fuel even reaches export terminals.',
      },
      {
        speaker: 'Dr. Sarah',
        text: 'That is precisely why the Suez Canal Economic Zone is prioritizing localized ammonia synthesis. By converting hydrogen into ammonia, it can be shipped at ambient temperatures using existing chemical cargo infrastructure, radically curbing distribution overheads.',
      },
      {
        speaker: 'Prof. Mark',
        text: 'If that localized conversion proves commercially scalable by 2030, it will undoubtedly place Egypt at the forefront of the Mediterranean energy corridor.',
      },
    ],
    fullText:
      'Dr. Sarah: Welcome to this symposium. When we examine Egypt’s decarbonization roadmap, green hydrogen stands out as a revolutionary vector. Unlike traditional fossil fuels, its combustion releases zero carbon emissions, yielding only pure water vapor.\n\nProf. Mark: I fully concur on its environmental potential, Sarah. However, we cannot turn a blind eye to the round-trip thermodynamic efficiency. Transporting liquified hydrogen requires cryogenic cooling to minus two hundred and fifty-three degrees Celsius, which consumes substantial electrical energy before the fuel even reaches export terminals.\n\nDr. Sarah: That is precisely why the Suez Canal Economic Zone is prioritizing localized ammonia synthesis. By converting hydrogen into ammonia, it can be shipped at ambient temperatures using existing chemical cargo infrastructure, radically curbing distribution overheads.\n\nProf. Mark: If that localized conversion proves commercially scalable by 2030, it will undoubtedly place Egypt at the forefront of the Mediterranean energy corridor.',
    comprehensionQuestions: [
      {
        id: 't1_q1',
        question: 'What is the primary thermodynamic obstacle raised by Professor Mark regarding hydrogen?',
        options: [
          'Hydrogen produces greenhouse gases when combusted in power plants.',
          'Liquifying hydrogen requires cryogenic cooling that consumes substantial electrical power.',
          'Hydrogen cannot be converted into chemical compounds like ammonia.',
          'The Mediterranean region lacks adequate sunlight for solar electrolysis.',
        ],
        correctIndex: 1,
        rationale:
          'Prof. Mark specifically states that liquified hydrogen transport demands cooling down to -253°C, consuming substantial electrical energy.',
      },
      {
        id: 't1_q2',
        question: 'How does localized ammonia synthesis solve the distribution challenge outlined by Dr. Sarah?',
        options: [
          'It eliminates the need to combust hydrogen completely.',
          'It allows transportation at ambient temperatures using conventional maritime chemical vessels.',
          'It reduces the chemical reactivity of pure oxygen.',
          'It replaces green hydrogen with fossil fuels.',
        ],
        correctIndex: 1,
        rationale:
          'Ammonia can be shipped at ambient temperatures utilizing standard pre-existing chemical cargo vessels without extreme cryogenic cooling.',
      },
      {
        id: 't1_q3',
        question: 'What tone characterizes the interaction between Dr. Sarah and Professor Mark?',
        options: [
          'Hostile and confrontational.',
          'Dismissive and unscientific.',
          'Constructive, analytical, and respectful of empirical data.',
          'Indifferent and cynical.',
        ],
        correctIndex: 2,
        rationale:
          'Both speakers debate technical efficiency and infrastructure solutions collegially using empirical facts and academic register.',
      },
    ],
  },
  {
    id: 'track_02',
    titleEn: 'Track 2: The Moral Crucible of Pip in "Great Expectations"',
    theme: 'Literature Analysis (Unit 6 / Charles Dickens)',
    genre: 'monologue',
    recommendedVoice: 'en-GB',
    audioScript: [
      {
        speaker: 'Literary Critic (Oxford Lecture Series)',
        text: 'In Dickens’ Victorian masterpiece "Great Expectations", Pip’s psychological journey is fundamentally a critique of social snobbery. Raised in the rustic honesty of Joe Gargery’s forge, Pip is initially innocent. However, his exposure to Miss Havisham’s decaying grandeur at Satis House and the haughty cruelty of Estella implants an acute sense of shame regarding his humble origins.',
      },
      {
        speaker: 'Literary Critic',
        text: 'When anonymous wealth arrives, Pip erroneously presumes Miss Havisham is his aristocratic benefactor, grooming him to marry Estella. Dickens employs profound dramatic irony when the true benefactor is unmasked as Abel Magwitch—the hunted convict Pip aided on the marshes in childhood. Pip discovers that his coveted gentility was purchased not by noble patronage, but through the blood, sweat, and suffering of an outcast.',
      },
      {
        speaker: 'Literary Critic',
        text: 'Redemption occurs only when Pip casts off his superficial class pretensions, risking his life to orchestrate Magwitch’s escape and embracing Joe Gargery’s steadfast integrity.',
      },
    ],
    fullText:
      'In Dickens’ Victorian masterpiece "Great Expectations", Pip’s psychological journey is fundamentally a critique of social snobbery. Raised in the rustic honesty of Joe Gargery’s forge, Pip is initially innocent. However, his exposure to Miss Havisham’s decaying grandeur at Satis House and the haughty cruelty of Estella implants an acute sense of shame regarding his humble origins.\n\nWhen anonymous wealth arrives, Pip erroneously presumes Miss Havisham is his aristocratic benefactor, grooming him to marry Estella. Dickens employs profound dramatic irony when the true benefactor is unmasked as Abel Magwitch—the hunted convict Pip aided on the marshes in childhood. Pip discovers that his coveted gentility was purchased not by noble patronage, but through the blood, sweat, and suffering of an outcast.\n\nRedemption occurs only when Pip casts off his superficial class pretensions, risking his life to orchestrate Magwitch’s escape and embracing Joe Gargery’s steadfast integrity.',
    comprehensionQuestions: [
      {
        id: 't2_q1',
        question: 'According to the speaker, what is the profound dramatic irony at the heart of Pip’s expectations?',
        options: [
          'Miss Havisham secretly loved Joe Gargery all along.',
          'Pip’s wealth originated from Magwitch, a despised convict, rather than noble aristocratic patronage.',
          'Estella was revealed to be a wealthy heiress from London.',
          'Pip never actually traveled to London.',
        ],
        correctIndex: 1,
        rationale:
          'Pip presumed the aristocratic Miss Havisham was funding his gentility, but his fortune derived from the hunted convict Abel Magwitch.',
      },
      {
        id: 't2_q2',
        question: 'How does Pip achieve moral redemption by the novel’s conclusion?',
        options: [
          'By accumulating greater wealth on the London stock exchange.',
          'By discarding his snobbery, attempting to save Magwitch, and valuing Joe’s integrity.',
          'By returning to Satis House to restore Miss Havisham’s estate.',
          'By joining the British royal military forces.',
        ],
        correctIndex: 1,
        rationale:
          'The speaker explicitly highlights that redemption occurs when Pip sheds his superficial class pretensions and acts courageously for Magwitch.',
      },
    ],
  },
  {
    id: 'track_03',
    titleEn: 'Track 3: Digital Piracy & Media Ethics in the Streaming Era',
    theme: 'Media, Piracy & Ethics (Unit 1)',
    genre: 'interview',
    recommendedVoice: 'en-US',
    audioScript: [
      {
        speaker: 'News Anchor (Tech Horizon)',
        text: 'Good evening. Today we investigate intellectual property enforcement. Online book and cinema piracy costs creative industries over thirty billion dollars each year. We speak with intellectual property attorney Robert Sterling.',
      },
      {
        speaker: 'Attorney Sterling',
        text: 'The fundamental misconception among internet users is that digital piracy is a victimless crime. When unauthorized sites distribute scanned university textbooks or bootleg movies, they starve indie publishers and authors of rightful royalties.',
      },
      {
        speaker: 'News Anchor',
        text: 'Many college students argue that exorbitant academic textbook prices drive them toward pirated PDF links. Is pricing reform part of the solution?',
      },
      {
        speaker: 'Attorney Sterling',
        text: 'Undoubtedly. Punitive legal action alone cannot eradicate piracy. Publishers must provide affordable open-access licensing and micro-subscription models. However, ethical responsibility still rests with consumers to recognize copyright infringement as theft.',
      },
    ],
    fullText:
      'News Anchor: Good evening. Today we investigate intellectual property enforcement. Online book and cinema piracy costs creative industries over thirty billion dollars each year. We speak with intellectual property attorney Robert Sterling.\n\nAttorney Sterling: The fundamental misconception among internet users is that digital piracy is a victimless crime. When unauthorized sites distribute scanned university textbooks or bootleg movies, they starve indie publishers and authors of rightful royalties.\n\nNews Anchor: Many college students argue that exorbitant academic textbook prices drive them toward pirated PDF links. Is pricing reform part of the solution?\n\nAttorney Sterling: Undoubtedly. Punitive legal action alone cannot eradicate piracy. Publishers must provide affordable open-access licensing and micro-subscription models. However, ethical responsibility still rests with consumers to recognize copyright infringement as theft.',
    comprehensionQuestions: [
      {
        id: 't3_q1',
        question: 'What dual approach does Attorney Sterling advocate to curb digital textbook piracy?',
        options: [
          'Shutting down all internet access points for university students.',
          'Combining legal copyright enforcement with affordable digital subscription models.',
          'Allowing publishers to double their textbook prices.',
          'Legalizing all unauthorized streaming platforms.',
        ],
        correctIndex: 1,
        rationale:
          'Sterling highlights that punitive legal enforcement must be paired with affordable micro-subscriptions and open-access licensing.',
      },
    ],
  },
  {
    id: 'track_04',
    titleEn: 'Track 4: Cognitive Resilience & Overcoming Academic Burnout',
    theme: 'Psychological Wellbeing & Study Strategies (Unit 4)',
    genre: 'lecture',
    recommendedVoice: 'en-GB',
    audioScript: [
      {
        speaker: 'Prof. Evelyn Reed (Cognitive Psychology)',
        text: 'During Secondary Three examination preparation, students frequently fall into the trap of toxic productivity—believing that fourteen consecutive hours of study without breaks equates to superior academic yield. Cognitive neurobiology proves the opposite.',
      },
      {
        speaker: 'Prof. Evelyn Reed',
        text: 'Memory consolidation requires the brain’s default mode network, which activates during structured downtime and deep non-REM sleep. The Pomodoro method—twenty-five minutes of focused attention followed by five minutes of complete mental rest—prevents prefrontal cortex fatigue.',
      },
      {
        speaker: 'Prof. Evelyn Reed',
        text: 'Furthermore, proactive coping strategies like self-quizzing and spaced retrieval dramatically outperform passive re-reading. Rest is not the absence of learning; it is the neurological foundation upon which mastery is permanently wired.',
      },
    ],
    fullText:
      'During Secondary Three examination preparation, students frequently fall into the trap of toxic productivity—believing that fourteen consecutive hours of study without breaks equates to superior academic yield. Cognitive neurobiology proves the opposite.\n\nMemory consolidation requires the brain’s default mode network, which activates during structured downtime and deep non-REM sleep. The Pomodoro method—twenty-five minutes of focused attention followed by five minutes of complete mental rest—prevents prefrontal cortex fatigue.\n\nFurthermore, proactive coping strategies like self-quizzing and spaced retrieval dramatically outperform passive re-reading. Rest is not the absence of learning; it is the neurological foundation upon which mastery is permanently wired.',
    comprehensionQuestions: [
      {
        id: 't4_q1',
        question: 'Why does Professor Reed argue that continuous 14-hour study marathons are counter-productive?',
        options: [
          'Students forget all their textbooks after midnight.',
          'Memory consolidation necessitates downtime and sleep to engage the default mode network.',
          'Secondary 3 examinations do not require extensive preparation.',
          'Exams test only physical stamina rather than cognitive retention.',
        ],
        correctIndex: 1,
        rationale:
          'Neurobiological memory consolidation occurs when the brain is resting and during non-REM sleep.',
      },
      {
        id: 't4_q2',
        question: 'Which study method is cited as far more effective than passive re-reading?',
        options: [
          'Copying notes verbatim in colorful pens.',
          'Spaced retrieval and self-quizzing.',
          'Cramming textbooks the night before the exam.',
          'Listening to loud music while skimming paragraphs.',
        ],
        correctIndex: 1,
        rationale:
          'The lecture explicitly emphasizes active self-quizzing and spaced retrieval over passive re-reading.',
      },
    ],
  },
];
