import type { Branch } from '../types/curriculum';
import { musicCh1SolvedExamples, musicCh1Exercises } from './textbook/thanaweya/musicCh1Textbook';
import { musicCh2SolvedExamples, musicCh2Exercises } from './textbook/thanaweya/musicCh2Textbook';
import { musicCh3SolvedExamples, musicCh3Exercises } from './textbook/thanaweya/musicCh3Textbook';
import { musicCh4SolvedExamples, musicCh4Exercises } from './textbook/thanaweya/musicCh4Textbook';
import { musicCh1Databank } from './databanks/thanaweya/musicCh1Databank';
import { musicCh2Databank } from './databanks/thanaweya/musicCh2Databank';
import { musicCh3Databank } from './databanks/thanaweya/musicCh3Databank';
import { musicCh4Databank } from './databanks/thanaweya/musicCh4Databank';

export const thanaweyaMusicBranch: Branch = {
  id: 'thanaweya_music',
  titleEn: 'Music Theory & Arab/Western Musicology',
  titleAr: 'التربية الموسيقية والنظريات الموسيقية',
  iconName: 'Music',
  colorGradient: 'from-amber-600 via-purple-700 to-indigo-950',
  categoryEn: 'Official Egyptian General Secondary curriculum for Music Theory: acoustic wave physics, Western staff notation, classical harmony, 24-quarter-tone Arab music theory & Maqamat, classical Iqa\'at rhythms, organology, and Egyptian music renaissance history.',
  categoryAr: 'المنهج الوزاري المعتمد لشهادة الثانوية العامة للتربية الموسيقية والنظريات: الأسس الفيزيائية للصوت والتدوين الموسيقي الغربي، الهارموني والتآلفات، النظريات الموسيقية العربية وسلم الربع تون والمقامات، الإيقاعات والضروب الكلاسيكية، وتاريخ الموسيقى المصرية ورواد النهضة.',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_music_ch1',
      titleEn: 'Acoustic Fundamentals, Sound Physics, Staff Notation & Western Clefs',
      titleAr: 'الأسس الفيزيائية للصوت والتدوين الموسيقي الغربي وقراءة المفاتيح',
      descriptionEn: 'Acoustic physics of sound waves, frequency, amplitude, timbre, the 5-line staff, Treble and Bass clefs, note durations, accidentals, and simple/compound meters.',
      descriptionAr: 'الفيزياء الصوتية للموجات، التردد، الشدة، الطابع النغمي، المدرج الموسيقي الخماسي، مفتاحي صول وفا، أزمنة النغمات، علامات التحويل، والموازين البسيطة والمركبة.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_mus_ch1_l1',
          titleEn: 'Lesson 1: Acoustic Wave Physics, Pitch, Timbre, and Staff Reading',
          titleAr: 'الدرس الأول: الفيزياء الصوتية، النغمة، الطابع والمدرج الموسيقي',
          summaryEn: 'Physics of sound waves, frequency in Hz, amplitude, harmonics, five-line staff, Treble Clef and Bass Clef reading.',
          summaryAr: 'الفيزياء الموجية للصوت، التردد بالهرتز، الشدة، النغمات التوافقية، المدرج الخماسي، وقراءة مفتاحي صول وفا.',
          estimatedMinutes: 60,
          theoryContentEn: `# Acoustics of Musical Sound & Staff Notation
## فيزياء الصوت الموسيقي والتدوين على المدرج

### 1. Acoustic Properties of Sound (الخصائص الفيزيائية للصوت)
Sound is a longitudinal mechanical wave propagating through an elastic medium. Musical sound is distinguished from noise by its periodic waveform.
- **Pitch (درجة الصوت)**: Determined by frequency in Hertz ($Hz$).
- **Loudness / Volume (شدة الصوت)**: Governed by the amplitude of acoustic pressure.
- **Timbre / Tone Color (طابع الصوت)**: Defined by the presence and amplitudes of harmonic overtones.

### 2. The Western Grand Staff (المدرج الموسيقي العام)
- **Treble Clef (مفتاح صول)**: Designates the second line as G4 ($392\\text{ Hz}$).
- **Bass Clef (مفتاح فا)**: Designates the fourth line as F3 ($174.6\\text{ Hz}$).
- **Middle C (دو الوسطى - C4)**: Resides on the ledger line between the staves ($261.63\\text{ Hz}$).
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Music Curriculum Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الموسيقية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-MUS-MOE-2025',
            pageRange: 'pp. 10-38'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Acoustic Physics and Staff Fluency',
            titleAr: 'الخطة التدريسية: الفيزياء الصوتية والطلاقة في قراءة المدرج الموسيقي',
            objectives: [
              'Calculate wavelength and frequency relations for fundamental acoustic notes.',
              'Transcribe pitches fluently on both Treble and Bass staves.',
              'Distinguish between simple and compound meter subdivisions.'
            ],
            warmUpEn: 'Play tuning fork frequencies ($440\text{ Hz}$) and show oscilloscope frequency spectrums.',
            warmUpAr: 'عرض ترددات الشوكة الرنانة ٤٤٠ هرتز ومقارنة رنينها بموجات راسم الذبذبات الرقمي.',
            activitiesEn: 'Students identify staff notes and calculate frequencies using the interactive studio keyboard.',
            activitiesAr: 'يقوم الطلاب بقراءة نغمات على المدرج وحساب تردداتها عبر استوديو النظريات الموسيقية.',
            differentiation: {
              support: 'Provide annotated clef mnemonic charts (EGBDF and FACE).',
              advanced: 'Calculate acoustic intervals using pitch ratios ($3:2$ fifth and $4:3$ fourth).'
            },
            formativeAssessmentEn: 'Four-question diagnostic exit ticket on clef reading and wave velocity.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية من أربعة أسئلة حول قراءة المفاتيح وعلاقة سرعة الصوت بالطول الموجي.',
            exitTicketQuestion: {
              questionEn: 'Which line on the standard five-line staff does the Treble Clef anchor as G4?',
              questionAr: 'أي خط في المدرج الموسيقي الخماسي يلتف حوله مفتاح صول لتحديد نغمة صول٤؟',
              solutionEn: 'The second line from the bottom (الخط الثاني من الأسفل).',
              solutionAr: 'الخط الثاني من الأسفل.'
            }
          },
          worksheet: {
            id: 'ws_th_mus_ch1_l1',
            titleEn: 'Student Studio Worksheet: Pitch Physics and Staff Reading',
            titleAr: 'ورقة عمل الطالب: فيزياء النغم وقراءة المدرج',
            descriptionEn: 'Exercises on note reading, ledger lines, and frequency calculations.',
            descriptionAr: 'تدريبات على قراءة النغمات والخطوط الإضافية وحساب الترددات.',
            estimatedTimeMinutes: 45,
            problems: musicCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'music_theory_studio',
            titleEn: 'Music Theory & Quarter-Tone Audio Workstation',
            titleAr: 'استوديو النظريات والموسيقى والربع تون الافتراضي',
            descriptionEn: 'Interactive Web Audio synthesizer with 24-EDO microtones, Maqamat, and rhythm sequencer.',
            descriptionAr: 'محاكي صوتي حقيقي لسلم الربع تون والمقامات الشرقية والمسرع الإيقاعي للضروب.'
          }
        }
      ],
      solvedExamples: musicCh1SolvedExamples,
      exerciseProblems: musicCh1Exercises,
      databank: musicCh1Databank
    },

    {
      id: 'th_music_ch2',
      titleEn: 'Harmony, Intervals, Triads, Seventh Chords & Harmonic Cadences',
      titleAr: 'الهارموني الكلاسيكي والتآلفات وبناء الدرجات والقفلات الموسيقية',
      descriptionEn: 'Diatonic intervals, major/minor triads, chord inversions, dominant seventh V7 chords, SATB four-part voice leading, and canonical cadences.',
      descriptionAr: 'المسافات الصوتية، التآلفات الثلاثية الكبيرة والصغيرة، انقلابات التآلفات، تآلف السابعة للمسيطر، التصريف الصوتي الرباعي، والقفلات الهارمونية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_mus_ch2_l1',
          titleEn: 'Lesson 1: Intervals, Triads, V7 Resolution, and Cadential Progressions',
          titleAr: 'الدرس الأول: المسافات، التآلفات الثلاثية، تصريف تآلف السابعة والقفلات',
          summaryEn: 'Interval qualities, major/minor/diminished triads, inversions, V7 chord tension, voice leading, and PAC/Plagal cadences.',
          summaryAr: 'أنواع المسافات، التآلفات الكبيرة والصغيرة والناقصة، تآلف السابعة للمسيطر، والتصريف الهارموني للقفلات.',
          estimatedMinutes: 60,
          theoryContentEn: `# Classical Harmony & Voice Leading
## الهارموني الكلاسيكي والتصريف الصوتي

### 1. Triads and Inversions (التآلفات الثلاثية وانقلاباتها)
- **Major Triad (التآلف الكبير)**: Major 3rd + Minor 3rd ($I, IV, V$ in major keys).
- **Minor Triad (التآلف الصغير)**: Minor 3rd + Major 3rd ($ii, iii, vi$).
- **Diminished Triad (التآلف الناقص)**: Two stacked Minor 3rds ($vii^\circ$).

### 2. The Dominant Seventh Chord (V7)
Spans the dominant root, major 3rd (leading tone), perfect 5th, and minor 7th. Resolves decisively to the tonic ($I$).

### 3. Harmonic Cadences (القفلات الموسيقية)
- **Perfect Authentic Cadence (PAC)**: $V \to I$ in root position with tonic in soprano.
- **Plagal Cadence**: $IV \to I$ ("Amen" cadence).
- **Deceptive Cadence**: $V \to vi$.
- **Half Cadence**: Pauses on $V$.
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Music Curriculum Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الموسيقية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-MUS-MOE-2025',
            pageRange: 'pp. 39-75'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Harmonic Analysis and Cadence Construction',
            titleAr: 'الخطة التدريسية: التحليل الهارموني وبناء القفلات الكلاسيكية',
            objectives: [
              'Build and invert major and minor triads on scale degrees.',
              'Voice lead the dominant seventh V7 chord to the tonic triad.',
              'Identify authentic, plagal, deceptive, and half cadences in musical scores.'
            ],
            warmUpEn: 'Play piano recordings of PAC and Plagal cadences to contrast resolution weight.',
            warmUpAr: 'الاستماع لقفلات تامة وفرعية وخادعة عبر البيانو لمقارنة شحنة الاستقرار النفسي.',
            activitiesEn: 'Students voice-lead a 4-part SATB chorale cadence using the studio chord synthesizer.',
            activitiesAr: 'يقوم الطلاب ببناء تصريف صوتي رباعي SATB لقفلة تامة وخادعة بالاستوديو.',
            differentiation: {
              support: 'Provide Roman numeral chord charts in C Major.',
              advanced: 'Analyze deceptive cadence resolutions in Bach chorales.'
            },
            formativeAssessmentEn: 'Identification of cadential types from audio chord progressions.',
            formativeAssessmentAr: 'اختبار سماعي لتحديد نوع القفلة (تامة، فرعية، أو خادعة).',
            exitTicketQuestion: {
              questionEn: 'Which chord progression defines the classical Plagal Cadence?',
              questionAr: 'ما هو التتابع الهارموني الذي يحدد القفلة الفرعية (الكنسية)؟',
              solutionEn: 'IV -> I (Subdominant to Tonic / الدرجة الرابعة إلى الأولى).',
              solutionAr: 'الانتقال من الدرجة الرابعة إلى الأولى (IV -> I).'
            }
          },
          worksheet: {
            id: 'ws_th_mus_ch2_l1',
            titleEn: 'Student Studio Worksheet: Harmony and Cadence Identification',
            titleAr: 'ورقة عمل الطالب: الهارموني وتحديد القفلات الموسيقية',
            descriptionEn: 'Drills building triads, resolving V7, and identifying cadences.',
            descriptionAr: 'تدريبات على بناء التآلفات، تصريف V7، وتحديد القفلات.',
            estimatedTimeMinutes: 45,
            problems: musicCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'music_theory_studio',
            titleEn: 'Western Harmony & Cadence Progression Explorer',
            titleAr: 'استوديو الهارموني والقفلات الموسيقية الغربية',
            descriptionEn: 'Interactive polyphonic synthesizer playing authentic, plagal, and deceptive cadences.',
            descriptionAr: 'عازف صوتي بوليفوني للقفلات الهارمونية الكلاسيكية والتصريف الصوتي.'
          }
        }
      ],
      solvedExamples: musicCh2SolvedExamples,
      exerciseProblems: musicCh2Exercises,
      databank: musicCh2Databank
    },

    {
      id: 'th_music_ch3',
      titleEn: 'Arab Music Theory, 24-EDO Quarter-Tone & 8 Principal Maqamat Families',
      titleAr: 'النظريات الموسيقية الشرقية وسلم الربع تون وعائلات المقامات الثمانية',
      descriptionEn: '24-EDO microtonality, the 8 fundamental Maqam families (Rast, Bayati, Sikah, Hijaz, Nahawand, Kurd, Ajam, Saba), Ajnas tetrachords, and transposition (Tasweer).',
      descriptionAr: 'سلم الربع تون (٢٤ درجة متساوية)، عائلات المقامات الثمانية الأساسية، الأجناس والتراكيب النغمية، وقواعد التصوير الموسيقي والانتقال المقامي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_mus_ch3_l1',
          titleEn: 'Lesson 1: The 24 Quarter-Tone Scale and the Eight Fundamental Maqamat',
          titleAr: 'الدرس الأول: سلم الـ ٢٤ ربع تون وعائلات المقامات الشرقية الثمانية',
          summaryEn: 'Cairo 1932 Congress system, quarter-tone accidentals, scale formulas, Ajnas (Rast, Bayati, Sikah, Hijaz), and expressive modal characters.',
          summaryAr: 'نظام مؤتمر القاهرة ١٩٣٢، علامات الربع تون، أبعاد المقامات، أجناس الأصل والفرع، والدلالات الوجدانية للمقامات.',
          estimatedMinutes: 60,
          theoryContentEn: `# Arab Music Theory & The Eight Maqamat
## النظريات الموسيقية العربية والمقامات الثمانية

### 1. The 24-EDO System (سلم الـ ٢٤ ربع تون)
Standardized at the 1932 Cairo Congress, dividing the octave into 24 equal quarter-tones (50 cents each).
- **Sikah / Half-Flat (نصف بيمول)**: Lowers pitch by 1 quarter-tone.
- **Half-Sharp (نصف دييز)**: Raises pitch by 1 quarter-tone.

### 2. The 8 Principal Maqamat (المقامات الثمانية الأساسية)
- **Rast (راست)**: $C, D, E\\text{-half-flat}, F, G, A, B\\text{-half-flat}, C'$ (1 - 3/4 - 3/4 - 1 - 1 - 3/4 - 3/4).
- **Bayati (بياتي)**: $D, E\\text{-half-flat}, F, G, A, B\\flat, C, D'$ (3/4 - 3/4 - 1 - 1 - 1/2 - 1 - 1).
- **Sikah (سيكاه)**: Starts on $E\\text{-half-flat}$ (3/4 - 1 - 1 - 3/4 - 1 - 1 - 3/4).
- **Hijaz (حجاز)**: Features augmented second (1/2 - 1.5 - 1/2 - 1 - 1/2 - 1 - 1).
- **Nahawand (نهاوند)**: Corresponds to Western harmonic/natural minor.
- **Kurd (كرد)**: Phrygian modal structure on $D$.
- **Ajam (عجم)**: Corresponds to Western Major ($C$).
- **Saba (صبا)**: Unique overlapping Jins structure on $D$ and $F$.
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Music Curriculum Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الموسيقية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-MUS-MOE-2025',
            pageRange: 'pp. 76-112'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Maqam Identification and Ajnas Construction',
            titleAr: 'الخطة التدريسية: استكشاف المقامات وبناء الأجناس والانتقال المقامي',
            objectives: [
              'Distinguish between 24-EDO microtones and 12-TET semitones.',
              'Analyze the scale formula and Ajnas for Rast, Bayati, and Hijaz.',
              'Identify Maqamat aurally from vocal and instrumental excerpts.'
            ],
            warmUpEn: 'Play the ascending scale of Maqam Rast and Maqam Bayati with quarter-tones using the studio audio engine.',
            warmUpAr: 'عزف سلمي الراست والبياتي صعوداً وهبوطاً بالربع تون عبر المحاكي الصوتي للاستوديو.',
            activitiesEn: 'Students explore all 8 Maqamat on the interactive studio, observing the microtone frequencies.',
            activitiesAr: 'يقوم الطلاب باستعراض المقامات الثمانية والاستماع لدرجاتها والربع تون في الاستوديو.',
            differentiation: {
              support: 'Visual scale ladders showing tone, half-tone, and 3/4-tone steps.',
              advanced: 'Demonstrate modal transposition (Tasweer) of Maqam Rast onto G (Nawa).'
            },
            formativeAssessmentEn: 'Ear training diagnostic distinguishing Rast from Ajam and Bayati from Kurd.',
            formativeAssessmentAr: 'اختبار تمييز سمعي بين الراست والعجم، وبين البياتي والكرد.',
            exitTicketQuestion: {
              questionEn: 'Which note in Maqam Rast on C is altered by a quarter-tone?',
              questionAr: 'ما هي النغمة التي تهبط بربع تون في سلم مقام الراست على الدو؟',
              solutionEn: 'E-half-flat (Sikah) and B-half-flat (Aouj) / مي نصف بيمول وسي نصف بيمول.',
              solutionAr: 'المي نصف بيمول (سيكاه) والسي نصف بيمول (أوج).'
            }
          },
          worksheet: {
            id: 'ws_th_mus_ch3_l1',
            titleEn: 'Student Studio Worksheet: Maqamat and Quarter-Tone Analysis',
            titleAr: 'ورقة عمل الطالب: المقامات وتحليل الربع تون',
            descriptionEn: 'Exercises calculating scale steps, identifying Ajnas, and classifying Maqamat.',
            descriptionAr: 'تدريبات على حساب أبعاد المقامات، تحديد الأجناس، وتصنيف المقامات الشرقية.',
            estimatedTimeMinutes: 45,
            problems: musicCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'music_theory_studio',
            titleEn: 'Oriental Maqamat & Microtone Synthesizer',
            titleAr: 'استوديو المقامات الشرقية ومحلل الربع تون',
            descriptionEn: 'Interactive 24-EDO quarter-tone synthesizer and 8 Maqam families player.',
            descriptionAr: 'محاكي صوتي متقدم لعزف سلالم المقامات الشرقية الثمانية بالربع تون.'
          }
        }
      ],
      solvedExamples: musicCh3SolvedExamples,
      exerciseProblems: musicCh3Exercises,
      databank: musicCh3Databank
    },

    {
      id: 'th_music_ch4',
      titleEn: 'Arab Rhythms (Iqa\'at), Organology & Egyptian Music Renaissance',
      titleAr: 'الإيقاعات والضروب العربية وتصنيف الآلات وتاريخ رواد النهضة المصرية',
      descriptionEn: 'Arab metrics (Dum/Tak), canonical rhythms (Maqsum, Baladi, Saidi, Wahda, Malfuf, Samai), organology of the Takht, and modern pioneers (Sayed Darwish, Abdel Wahab, Umm Kulthum, Sunbati).',
      descriptionAr: 'الإيقاعات والضروب الكلاسيكية والشعبية، تصنيف الآلات الموسيقية، قوالب التخت، وأعلام النهضة المصرية (سيد درويش، عبد الوهاب، أم كلثوم، السنباطي، خيرت).',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_mus_ch4_l1',
          titleEn: 'Lesson 1: Arab Iqa\'at Drum Patterns, Organology, and Renaissance Masters',
          titleAr: 'الدرس الأول: الإيقاعات والضروب العربية، تصنيف الآلات ورواد النهضة',
          summaryEn: 'Dum and Tak metric system, Maqsum, Baladi, Saidi, Wahda, Takht organology (Oud, Qanun, Nay, Riqq), and pioneers Sayed Darwish, Abdel Wahab, and Umm Kulthum.',
          summaryAr: 'النظام الوزني (دم وتك)، إيقاعات المقسوم والبلدي والصعيدي، آلات التخت العربي، وتاريخ رواد النهضة المصرية.',
          estimatedMinutes: 60,
          theoryContentEn: `# Arab Rhythms, Instruments & Egyptian Heritage
## الإيقاعات والآلات والتراث الموسيقي المصري

### 1. Arab Iqa'at Metric Strokes (الضروب الإيقاعية)
- **Dum (دُمْ)**: Deep bass stroke in the center of the drum skin.
- **Tak (تَكْ)**: Sharp, crisp treble stroke on the rim.
- **Sakta (سكتة)**: Metric rest duration.

### 2. Foundational Egyptian Rhythms (أشهر الإيقاعات)
- **Maqsum (مقسوم - 4/4)**: Dum Tak _ Tak Dum _ Tak _.
- **Baladi (بلدي - 4/4)**: Dum Dum _ Tak Dum _ Tak _.
- **Sa'idi (صعيدي - 4/4)**: Dum Tak _ Dum Dum _ Tak _.
- **Wahda (وحدة كبيرة - 4/4)**: Dum _ _ _ Tak _ Tak _.
- **Malfuf (ملفوف - 2/4)**: Dum _ Tak Tak.

### 3. Organology of the Arab Takht (آلات التخت)
Oud (أمير الآلات), Qanun (دستور النغم), Nay (شجن القصب), Riqq (ضابط الإيقاع والمايسترو), and Violin (الكمانجة).

### 4. Pioneers of the Egyptian Renaissance (رواد النهضة المصرية)
Sayed Darwish, Mohamed Abdel Wahab, Umm Kulthum, Riad Al-Sunbati, and Abu Bakr Khairat.
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Music Curriculum Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الموسيقية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-MUS-MOE-2025',
            pageRange: 'pp. 113-154'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Rhythmic Performance and Historical Appreciation',
            titleAr: 'الخطة التدريسية: الأداء الإيقاعي والتذوق التاريخي لرواد الموسيقى المصرية',
            objectives: [
              'Perform the Dum and Tak stroke sequences for Maqsum and Baladi.',
              'Classify traditional Arab and Western instruments by acoustic sound generation.',
              'Analyze the historical contributions of Sayed Darwish and Mohamed Abdel Wahab.'
            ],
            warmUpEn: 'Play the studio drum sequencer on Iqa Maqsum and have students clap the Dum on chest and Tak on hands.',
            warmUpAr: 'تشغيل إيقاع المقسوم عبر مسرع الاستوديو وتدريب الطلاب على أداء ضربات الدم والتك.',
            activitiesEn: 'Students manipulate BPM on the studio drum sequencer and match instrument classifications in the organology tab.',
            activitiesAr: 'يقوم الطلاب بتغيير سرعة الإيقاع وتصنيف الآلات في استوديو الأورجانولوجي.',
            differentiation: {
              support: 'Visual drum stroke color cues (amber Dum vs. purple Tak).',
              advanced: 'Analyze the 10/8 metric cycle of Samai Thaqil in classical instrumental suites.'
            },
            formativeAssessmentEn: 'Rhythm identification quiz distinguishing Baladi from Maqsum.',
            formativeAssessmentAr: 'اختبار تمييز سمعي بين إيقاعي البلدي والمقسوم.',
            exitTicketQuestion: {
              questionEn: 'What stroke sequence distinguishes the opening measure of Iqa Baladi from Maqsum?',
              questionAr: 'ما هي النبضات التي تميز بداية إيقاع البلدي عن إيقاع المقسوم؟',
              solutionEn: 'Two consecutive Dums: "Dum Dum _ Tak" (دمتان متتاليتان).',
              solutionAr: 'دمتان متتاليتان: (دم دم _ تك).'
            }
          },
          worksheet: {
            id: 'ws_th_mus_ch4_l1',
            titleEn: 'Student Studio Worksheet: Arab Rhythms and Organology',
            titleAr: 'ورقة عمل الطالب: الإيقاعات وتصنيف الآلات الموسيقية',
            descriptionEn: 'Exercises transcribing rhythm strokes, analyzing meter, and classifying instruments.',
            descriptionAr: 'تدريبات على كتابة ضربات الإيقاع، تحليل الميزان، وتصنيف آلات التخت العربي.',
            estimatedTimeMinutes: 45,
            problems: musicCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'music_theory_studio',
            titleEn: 'Classical Arab Iqa\'at Drum Machine & Sequencer',
            titleAr: 'المسرع الإيقاعي ومولد الضروب العربية',
            descriptionEn: 'Interactive drum machine playing Maqsum, Baladi, Saidi, and Samai with BPM tempo control.',
            descriptionAr: 'محاكي إيقاعي تفاعلي لعزف المقسوم والبلدي والصعيدي مع التحكم في السرعة.'
          }
        }
      ],
      solvedExamples: musicCh4SolvedExamples,
      exerciseProblems: musicCh4Exercises,
      databank: musicCh4Databank
    }
  ]
};
