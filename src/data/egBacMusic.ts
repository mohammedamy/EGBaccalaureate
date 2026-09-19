import type { Branch } from '../types/curriculum';
import { egBacMusicCh1SolvedExamples, egBacMusicCh1Exercises } from './textbook/egbac/egBacMusicCh1Textbook';
import { egBacMusicCh2SolvedExamples, egBacMusicCh2Exercises } from './textbook/egbac/egBacMusicCh2Textbook';
import { egBacMusicCh3SolvedExamples, egBacMusicCh3Exercises } from './textbook/egbac/egBacMusicCh3Textbook';
import { egBacMusicCh4SolvedExamples, egBacMusicCh4Exercises } from './textbook/egbac/egBacMusicCh4Textbook';
import { egBacMusicCh1Databank } from './databanks/egbac/egBacMusicCh1Databank';
import { egBacMusicCh2Databank } from './databanks/egbac/egBacMusicCh2Databank';
import { egBacMusicCh3Databank } from './databanks/egbac/egBacMusicCh3Databank';
import { egBacMusicCh4Databank } from './databanks/egbac/egBacMusicCh4Databank';

export const egBacMusicBranch: Branch = {
  id: 'egbac_music',
  titleEn: 'Advanced Music Theory, Psychoacoustics & Ethnomusicology',
  titleAr: 'النظريات الموسيقية المتقدمة والسايكو-أكوستيك والميوزيكولوجيا المقارنة',
  iconName: 'Music',
  colorGradient: 'from-amber-600 via-purple-700 to-indigo-950',
  categoryEn: 'Official Egyptian Baccalaureate curriculum for Advanced Music: psychoacoustics, Fourier wave analysis, Species Counterpoint, chromatic harmony, advanced modal modulation, and comparative ethnomusicology.',
  categoryAr: 'منهج البكالوريا المصرية المعتمد للنظريات الموسيقية المتقدمة: علم السمع النفسي، التحليل التوافقي لفورييه، الكونتربوينت الصارم، الهارموني الكروماتيكي، التحويل المقامي المتقدم، والميوزيكولوجيا المقارنة لحفظ التراث.',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_music_ch1',
      titleEn: 'Module 1: Advanced Acoustics, Psychoacoustics, Fourier Synthesis & Complex Metrics',
      titleAr: 'الوحدة الأولى: الفيزياء الصوتية المتقدمة والسايكو-أكوستيك والتحليل التوافقي والتدوين المعقد',
      descriptionEn: 'Harmonic series, Fourier analysis, psychoacoustic critical bands, equal-loudness contours, tuning systems (Pythagorean, Just, 12-TET, 24-EDO), and complex asymmetrical meters.',
      descriptionAr: 'السلسلة التوافقية، التحليل التوافقي لفورييه، الحزم الحرجة في السمع النفسي، منحنيات فليتشر-مونسون، مقارنة نظم الدوزان، والموازين الإيقاعية المركبة والمعقدة.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_mus_m1_l1',
          titleEn: 'Lesson 1: Acoustic Physics, Psychoacoustic Perception, and Tuning Systems',
          titleAr: 'الدرس الأول: الفيزياء الصوتية المتقدمة، الإدراك السمعي ونظم الدوزان المقارنة',
          summaryEn: 'Harmonic series, Fourier synthesis, Fletcher-Munson curves, critical bands, Pythagorean comma, 12-TET, and 24-EDO temperament.',
          summaryAr: 'السلسلة التوافقية، تحليل فورييه، منحنيات الجهارة المتساوية، الحزم السمعية الحرجة، كوما فيثاغورس، ونظام الـ ٢٤ ربع نغمة.',
          estimatedMinutes: 60,
          theoryContentEn: `# Advanced Acoustic Physics & Psychoacoustics
## الفيزياء الصوتية المتقدمة وعلم السمع النفسي

### 1. Harmonic Series & Fourier Synthesis (السلسلة التوافقية وتحليل فورييه)
Every musical sound produced by vibrating strings or air columns produces an infinite harmonic series: $f_n = n \cdot f_1$.
Fourier synthesis proves that any complex periodic waveform can be decomposed into a sum of pure sinusoidal waves with specific amplitudes and phase offsets.

### 2. Psychoacoustics: Hearing Mechanics (السمع النفسي)
- **Equal-Loudness Contours (Fletcher-Munson)**: The ear exhibits peak acoustic sensitivity between $2000-4000\\text{ Hz}$. Low frequencies require substantially higher sound pressure levels ($dB$) to achieve subjective equal loudness.
- **Critical Bands (الحزم الحرجة)**: When two frequencies fall within a critical band, sensory dissonance (roughness) occurs instead of clear interval perception.

### 3. Tuning Systems (نظم الدوزان)
- **Pythagorean Tuning**: Based on pure $3:2$ fifths, yielding a discrepancy of $\approx 23.46\\text{ cents}$ (Pythagorean comma).
- **12-TET**: Equalizes 12 semitones at 100 cents each ($2^{1/12}$).
- **24-EDO**: Equalizes 24 quarter-tones at 50 cents each ($2^{1/24}$), accommodating Arab neutral intervals.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Music Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات الموسيقية المتقدمة',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-MUS-MOE-2025',
            pageRange: 'pp. 12-48'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Advanced Acoustics and Tuning Computations',
            titleAr: 'الخطة التدريسية: الفيزياء الصوتية المتقدمة وحسابات الدوزان والترددات',
            objectives: [
              'Derive the Pythagorean comma mathematically from fifth and octave ratios.',
              'Interpret Fletcher-Munson contours across varying sound pressure levels.',
              'Analyze complex asymmetrical meters and polyrhythmic structures.'
            ],
            warmUpEn: 'Demonstrate Fourier waveform synthesis by combining sine harmonics to form a sawtooth wave.',
            warmUpAr: 'عرض توليد الموجات بفورييه بتركيب موجات جيبية توافقية لإنتاج موجة سن المنشار.',
            activitiesEn: 'Students compute cent deviations of Pythagorean thirds versus 12-TET and 24-EDO intervals.',
            activitiesAr: 'يحسب الطلاب انحرافات السنت بين الثالثات الفيثاغورية وسلالم الـ ١٢ والـ ٢٤ درجة متساوية.',
            differentiation: {
              support: 'Logarithmic frequency to cent conversion formula sheet.',
              advanced: 'Calculate metric modulation ratios in modern contemporary compositions.'
            },
            formativeAssessmentEn: 'Calculation of harmonic overtone frequencies and cent values.',
            formativeAssessmentAr: 'مسائل حسابية لتحديد ترددات التوافقيات وقيمتها بالسنت الصوتي.',
            exitTicketQuestion: {
              questionEn: 'What is the acoustic ratio of an octave and a pure fifth in just acoustic tuning?',
              questionAr: 'ما هي النسبة الترددية الفيزيائية الدقيقة لكل من الأوكتاف والخامسة الطبيعية الصافية؟',
              solutionEn: 'Octave is 2:1 and pure fifth is 3:2 (الأوكتاف ٢:١ والخامسة ٣:٢).',
              solutionAr: 'الأوكتاف ٢:١ والخامسة الطبيعية ٣:٢.'
            }
          },
          worksheet: {
            id: 'ws_egbac_mus_m1_l1',
            titleEn: 'Student Studio Worksheet: Advanced Acoustics and Temperament Math',
            titleAr: 'ورقة عمل الطالب: الفيزياء الصوتية وحسابات نظم الدوزان',
            descriptionEn: 'Quantitative drills on harmonic series, cent deviations, and psychoacoustic contours.',
            descriptionAr: 'مسائل كمية في السلسلة التوافقية، انحرافات السنت، ومنحنيات السمع النفسي.',
            estimatedTimeMinutes: 45,
            problems: egBacMusicCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'music_theory_studio',
            titleEn: 'Advanced Acoustic & Psychoacoustic Frequency Studio',
            titleAr: 'استوديو الصوتيات المتقدمة والسايكو-أكوستيك',
            descriptionEn: 'Interactive frequency synthesizer analyzing 24-EDO cents, harmonics, and waveforms.',
            descriptionAr: 'محاكي ترددي متقدم لتحليل السنت الصوتي والتوافقيات والأشكال الموجية.'
          }
        }
      ],
      solvedExamples: egBacMusicCh1SolvedExamples,
      exerciseProblems: egBacMusicCh1Exercises,
      databank: egBacMusicCh1Databank
    },

    {
      id: 'egbac_music_ch2',
      titleEn: 'Module 2: Polyphony, Species Counterpoint, Advanced Harmony & Classical Sonata Form',
      titleAr: 'الوحدة الثانية: البوليفونية وقواعد الكونتربوينت والهارموني المتقدم وقالب السوناتا',
      descriptionEn: 'Species counterpoint, prohibition of parallel fifths, secondary dominants, Neapolitan and augmented sixth chords, and structural sonata-allegro architecture.',
      descriptionAr: 'قواعد الكونتربوينت الصارم، تجنب التوازيات المحرمة، المسيطرات الثانوية، التآلفات الكروماتيكية (النابوليتاني والإيطالي والفرنسي)، وهندسة قالب السوناتا.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_mus_m2_l1',
          titleEn: 'Lesson 1: Strict Species Counterpoint, Chromatic Chords, and Sonata Architecture',
          titleAr: 'الدرس الأول: الكونتربوينت الصارم، التآلفات الكروماتيكية وهندسة السوناتا',
          summaryEn: 'Fux counterpoint rules, voice independence, parallel motion bans, Neapolitan/Augmented sixths, secondary dominants, and Sonata-Allegro tonal polarity.',
          summaryAr: 'قواعد فوكس للكونتربوينت، استقلالية الخطوط، حظر التوازي، سادسات نابولي والسادسات الزائدة، وهندسة قالب السوناتا.',
          estimatedMinutes: 60,
          theoryContentEn: `# Advanced Polyphony, Counterpoint & Sonata Form
## البوليفونية المتقدمة والكونتربوينت وقالب السوناتا

### 1. Fux Species Counterpoint (الكونتربوينت الصارم)
- **Species 1 (Note against Note)**: Consonant unisons, 3rds, 5ths, 6ths, and octaves exclusively.
- **Prohibitions**: Absolute ban on parallel 5ths and parallel 8ves to preserve auditory stream segregation.
- **Species 4 (Suspensions)**: Consonance tied to accented dissonance, resolving downward by step.

### 2. Chromatic Harmony (الهارموني الكروماتيكي)
- **Secondary Dominants (المسيطرات الثانوية)**: $V/V, V/IV, V/vi$ creating local tonicization.
- **Neapolitan Sixth ($N^6$)**: Major triad on $\\flat II$ in first inversion.
- **Augmented Sixth Chords**: Italian ($+6, 3$), French ($+6, 3, 4$), German ($+6, 3, \\flat 5$).

### 3. Sonata-Allegro Architecture (هندسة قالب السوناتا)
1. **Exposition (العرض)**: Primary theme (Tonic) $\to$ Transition $\to$ Secondary theme (Dominant/Relative).
2. **Development (التطوير والتفاعل)**: Fragmentation, modulation, and thematic conflict.
3. **Recapitulation (إعادة العرض)**: Reconciles both themes in the tonic home key.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Music Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات الموسيقية المتقدمة',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-MUS-MOE-2025',
            pageRange: 'pp. 49-92'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Counterpoint Voice Leading and Structural Sonata Analysis',
            titleAr: 'الخطة التدريسية: التصريف الصوتي في الكونتربوينت والتحليل البنيوي للسوناتا',
            objectives: [
              'Compose a first-species counterpoint line over a cantus firmus without parallelisms.',
              'Analyze and resolve Italian, French, and German augmented sixth chords.',
              'Deconstruct the tonal architecture of a classical Beethoven sonata exposition.'
            ],
            warmUpEn: 'Play examples of parallel fifths versus contrary motion to illustrate perceptual voice merging.',
            warmUpAr: 'مقارنة صوتية بين الخماسيات المتوازية والحركة العكسية لتوضيح تلاشي استقلالية الأصوات.',
            activitiesEn: 'Students identify chromatic harmony chords and draft a sonata structural map.',
            activitiesAr: 'يقوم الطلاب بتحليل تآلفات كروماتيكية متقدمة ورسم خريطة بنائية لقالب السوناتا.',
            differentiation: {
              support: 'Step-by-step augmented sixth chord identification flowchart.',
              advanced: 'Compose a 4-measure fugal subject and tonal answer.'
            },
            formativeAssessmentEn: 'Correction of voice-leading errors in a counterpoint exercise.',
            formativeAssessmentAr: 'اكتشاف وتصحيح أخطاء التصريف الصوتي والتوازيات في تمرين كونتربوينت.',
            exitTicketQuestion: {
              questionEn: 'Why are parallel fifths and octaves strictly forbidden in classical counterpoint?',
              questionAr: 'لماذا تُحظر الخماسيات والأوكتافات المتوازية تماماً في الكونتربوينت الكلاسيكي؟',
              solutionEn: 'They destroy the acoustic and perceptual independence of the polyphonic voices.',
              solutionAr: 'لأنها تلغي الاستقلالية السمعية والإدراكية للأصوات البوليفونية المتزامنة.'
            }
          },
          worksheet: {
            id: 'ws_egbac_mus_m2_l1',
            titleEn: 'Student Studio Worksheet: Counterpoint and Chromatic Harmony',
            titleAr: 'ورقة عمل الطالب: الكونتربوينت والهارموني الكروماتيكي',
            descriptionEn: 'Exercises writing counterpoint lines, resolving N6 and +6 chords, and analyzing sonatas.',
            descriptionAr: 'تدريبات على كتابة خطوط الكونتربوينت، تصريف تآلفات السادسة، وتحليل السوناتا.',
            estimatedTimeMinutes: 45,
            problems: egBacMusicCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'music_theory_studio',
            titleEn: 'Counterpoint & Chromatic Harmony Lab',
            titleAr: 'معمل الكونتربوينت والهارموني الكروماتيكي المتقدم',
            descriptionEn: 'Interactive polyphonic lab modeling voice leading, chromatic chords, and cadences.',
            descriptionAr: 'محاكي بوليفوني لتصريف الأصوات، التآلفات الكروماتيكية، والقفلات المتقدمة.'
          }
        }
      ],
      solvedExamples: egBacMusicCh2SolvedExamples,
      exerciseProblems: egBacMusicCh2Exercises,
      databank: egBacMusicCh2Databank
    },

    {
      id: 'egbac_music_ch3',
      titleEn: 'Module 3: Advanced Arab Microtonality, Modal Modulation & Transposition Science',
      titleAr: 'الوحدة الثالثة: المايكروتوناليت المقارنة والتحويل المقامي المتقدم وعلم تصوير المقامات',
      descriptionEn: 'Historical evolution from Urmawi to 1932 Cairo Congress, secondary Maqamat, advanced modal modulation matrices, and microtonal transposition dynamics.',
      descriptionAr: 'تطور السلم العربي من الأرموي والفارابي لمؤتمر القاهرة، فروع المقامات المركبة، مسارات التحويل المقامي المتقدم، وديناميكيات تصوير المقامات.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_mus_m3_l1',
          titleEn: 'Lesson 1: Urmawi vs. 24-EDO, Secondary Maqamat, and Transposition Science',
          titleAr: 'الدرس الأول: الأرموي ومؤتمر القاهرة، فروع المقامات وعلم تصوير المقامات',
          summaryEn: 'Safi al-Din al-Urmawi 17-tone scale, 24-EDO comparison, Suznak, Hijazkar, Nawa Athar, modal pivot modulations, and microtonal transposition.',
          summaryAr: 'سلم الـ ١٧ نغمة للأرموي، مقارنة 24-EDO، فروع السوزناك والحجاز كار ونوى أثر، وشبكات التحويل المقامي وتصوير النغم.',
          estimatedMinutes: 60,
          theoryContentEn: `# Advanced Arab Microtonality & Modal Science
## المايكروتوناليت العربية المتقدمة وعلم المقامات

### 1. Urmawi 17-Tone System vs. Modern 24-EDO
Safi al-Din al-Urmawi (1216-1294 AD) codified a 17-interval octave using limmas ($256:243$, 90 cents) and commas ($24$ cents). Modern 24-EDO standardized 50-cent equal divisions to facilitate multi-instrument orchestral arrangements.

### 2. Secondary & Compound Maqamat (فروع المقامات المركبة)
- **Suznak (سوزناك)**: Jins Rast on $C$ + Jins Hijaz on $G$.
- **Hijazkar (حجاز كار)**: Jins Hijaz on $C$ + Jins Hijaz on $G$.
- **Nawa Athar (نوى أثر)**: Jins Nikriz on $C$ + Jins Hijaz on $G$.
- **Shahnaz (شاهناز)**: Transposed Hijaz on $D$ with upper Sikah ornaments.

### 3. Modal Modulation Science (علم التحويل والتصوير)
- **Pivot Jins (الجنس المحوري)**: Transitioning via identical tetrachords in different modes.
- **Transposition (التصوير الموسيقي)**: Re-pitching an entire Maqam to non-traditional root pitches while maintaining exact microtonal step ratios.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Music Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات الموسيقية المتقدمة',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-MUS-MOE-2025',
            pageRange: 'pp. 93-130'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Comparative Microtonality and Transposition Logic',
            titleAr: 'الخطة التدريسية: المايكروتوناليت المقارنة ومنطق تصوير المقامات',
            objectives: [
              'Compare interval steps between Urmawi 17-tone scale and modern 24-EDO.',
              'Deconstruct compound Maqamat (Suznak, Hijazkar, Nawa Athar).',
              'Calculate frequency shifts required to transpose Maqam Sikah onto A.'
            ],
            warmUpEn: 'Play audio comparisons between pure acoustic comma thirds and 24-EDO neutral thirds.',
            warmUpAr: 'مقارنة صوتية دقيقة بين نغمات الثالثة الكومية الطبيعية وثالثة الـ ٢٤ ربع تون المتساوي.',
            activitiesEn: 'Students trace modulation pathways across a matrix of 16 Arab Maqam branches.',
            activitiesAr: 'يقوم الطلاب برسم شبكات التحويل المقامي عبر مصفوفة تضم فروع المقامات المركبة.',
            differentiation: {
              support: 'Provide Ajnas matching charts with root note highlights.',
              advanced: 'Demonstrate modulating from Maqam Rast to Maqam Saba through Jins Hijaz on F.'
            },
            formativeAssessmentEn: 'Identification of secondary Maqam structures from scale degree formulas.',
            formativeAssessmentAr: 'تحليل بنائي وتحديد اسم المقام المركب من صيغ الأبعاد والأجناس.',
            exitTicketQuestion: {
              questionEn: 'Which two Ajnas combine to form the compound Maqam Suznak on C?',
              questionAr: 'ما هما الجنسان اللذان يتحدان معاً لبناء مقام السوزناك المركب على نغمة الدو؟',
              solutionEn: 'Jins Rast on C and Jins Hijaz on G (جنس راست على الدو وجنس حجاز على الصول).',
              solutionAr: 'جنس راست على الدو وجنس حجاز على الصول.'
            }
          },
          worksheet: {
            id: 'ws_egbac_mus_m3_l1',
            titleEn: 'Student Studio Worksheet: Advanced Maqam Analysis and Transposition',
            titleAr: 'ورقة عمل الطالب: تحليل المقامات المتقدمة وعلم التصوير',
            descriptionEn: 'Problems on Urmawi scales, secondary Maqamat formulas, and transposition frequencies.',
            descriptionAr: 'مسائل في سلم الأرموي، صيغ المقامات المركبة، وحساب ترددات التصوير النغمي.',
            estimatedTimeMinutes: 45,
            problems: egBacMusicCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'music_theory_studio',
            titleEn: 'Microtonal Scale & Transposition Matrix',
            titleAr: 'مصفوفة المايكروتوناليت وتصوير المقامات',
            descriptionEn: 'Interactive microtonal matrix calculating exact frequencies for transposed Maqamat.',
            descriptionAr: 'محاكي تفاعلي لحساب ترددات تصوير المقامات على درجات ركوز جديدة.'
          }
        }
      ],
      solvedExamples: egBacMusicCh3SolvedExamples,
      exerciseProblems: egBacMusicCh3Exercises,
      databank: egBacMusicCh3Databank
    },

    {
      id: 'egbac_music_ch4',
      titleEn: 'Module 4: Comparative Ethnomusicology, Heritage Preservation & Egyptian Orchestral Symphonism',
      titleAr: 'الوحدة الرابعة: علم الموسيقى المقارن (Ethnomusicology) وحفظ التراث والسيمفونية القومية المصرية',
      descriptionEn: 'Ethnomusicological field analysis, Nubian pentatonic scales, Coptic liturgical hymns, Egyptian Nationalist symphonic movement (Khairat, Abdel-Rahim), and UNESCO sonic heritage.',
      descriptionAr: 'مناهج علم الموسيقى المقارن، السلم الخماسي النوبي، ألحان الكنيسة القبطية الشفاهية، المدرسة السيمفونية القومية المصرية، وتوثيق التراث الصوتي اللامادي باليونسكو.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_mus_m4_l1',
          titleEn: 'Lesson 1: Ethnomusicological Research, Regional Traditions, and Egyptian Symphonism',
          titleAr: 'الدرس الأول: مناهج الميوزيكولوجيا، التراث الإقليمي والمدرسة السيمفونية المصرية',
          summaryEn: 'Ethnomusicology fieldwork, Nubian pentatonic scales, Coptic oral hymnology, Abu Bakr Khairat, Gamal Abdel-Rahim, and UNESCO intangible cultural heritage.',
          summaryAr: 'التوثيق الميداني للتراث، السلم الخماسي النوبي، تواتر ألحان الكنيسة القبطية، أبو بكر خيرت، جمال عبد الرحيم، وصون التراث الإنساني.',
          estimatedMinutes: 60,
          theoryContentEn: `# Comparative Ethnomusicology & Egyptian Symphonic Heritage
## علم الموسيقى المقارن وحفظ التراث والسيمفونية المصرية

### 1. Comparative Ethnomusicology (علم الموسيقى المقارن)
Studies music as culture, employing fieldwork, high-fidelity audio preservation, cultural acoustics, and transcription methods that respect indigenous pitch temperaments.

### 2. Egyptian Regional Intangible Heritage (التراث الموسيقي الإقليمي)
- **Nubian Pentatonic Tradition (التراث النوبي الخماسي)**: Utilizes an anhemitonic 5-tone scale ($C, D, F, G, A$) coupled with polyrhythmic hand clapping.
- **Coptic Liturgical Hymns (الألحان القبطية)**: Preserved by oral transmission for over 2,000 years, featuring microtonal inflections, flexible non-metronomic meter, and ancient Egyptian vocal resonances.
- **Al-Sirah Al-Hilaliyya (السيرة الهلالية)**: Upper Egyptian oral epic with Rababa accompaniment recognized by UNESCO.

### 3. The Egyptian Nationalist Symphonic Movement (المدرسة السيمفونية القومية)
- **Abu Bakr Khairat (أبو بكر خيرت)**: Synthesized Egyptian modal themes with classical Western symphony and concerto architectures.
- **Gamal Abdel-Rahim (جمال عبد الرحيم)**: Pioneered modern Arabic modal polyphony and counterpoint without adopting functional Western harmony.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Music Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات الموسيقية المتقدمة',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-MUS-MOE-2025',
            pageRange: 'pp. 131-168'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Ethnomusicological Analysis and Symphonic Synthesis',
            titleAr: 'الخطة التدريسية: التحليل الإثنوموسيقي والصهر السيمفوني للتراث المصري',
            objectives: [
              'Analyze the intervals of the Nubian anhemitonic pentatonic scale.',
              'Evaluate the historical continuity of Coptic oral liturgical chanting.',
              'Deconstruct the polyphonic integration of folk modes in Abu Bakr Khairat symphonies.'
            ],
            warmUpEn: 'Listen to an archival field recording of an Upper Egyptian epic and compare with an orchestral overture by Abu Bakr Khairat.',
            warmUpAr: 'مقارنة تسجيل ميداني تراثي لشاعر السيرة الهلالية بافتتاحية سيمفونية لأبو بكر خيرت.',
            activitiesEn: 'Students draft an ethnomusicological preservation proposal for an endangered Egyptian sonic tradition.',
            activitiesAr: 'يعد الطلاب مشروع توثيق إثنوموسيقي لصون أحد أشكال التراث الصوتي المصري المهدد بالاندثار.',
            differentiation: {
              support: 'Provide comparative scale chart mapping pentatonic to diatonic keys.',
              advanced: 'Analyze Gamal Abdel-Rahim modal counterpoint techniques in chamber music.'
            },
            formativeAssessmentEn: 'Comparative critique evaluating oral preservation versus Western notation.',
            formativeAssessmentAr: 'تحليل نقدي يقارن بين كفاءة الحفظ الشفاهي والتسجيل الصوتي مقابل التدوين الغربي.',
            exitTicketQuestion: {
              questionEn: 'What foundational scale structure characterizes traditional Nubian folk music?',
              questionAr: 'ما هو السلم النغمي الأساسي الذي يميز الموسيقى والتراث الشعبي النوبي؟',
              solutionEn: 'The anhemitonic pentatonic scale (السلم الخماسي الخالي من أنصاف النغمات).',
              solutionAr: 'السلم الخماسي (Pentatonic Scale).'
            }
          },
          worksheet: {
            id: 'ws_egbac_mus_m4_l1',
            titleEn: 'Student Studio Worksheet: Ethnomusicology and Symphonic Heritage',
            titleAr: 'ورقة عمل الطالب: علم الموسيقى المقارن والتراث السيمفوني',
            descriptionEn: 'Exercises on pentatonic analysis, Coptic oral traditions, and symphonic modal scores.',
            descriptionAr: 'تدريبات على السلم الخماسي، التواتر الشفاهي للألحان، وتحليل المدونات السيمفونية القومية.',
            estimatedTimeMinutes: 45,
            problems: egBacMusicCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'music_theory_studio',
            titleEn: 'Ethnomusicology & Egyptian Heritage Archive Studio',
            titleAr: 'استوديو الأرشيف الإثنوموسيقي والتراث السيمفوني المصري',
            descriptionEn: 'Interactive multimedia archive exploring Nubian, Coptic, and Egyptian symphonic heritage.',
            descriptionAr: 'أرشيف تفاعلي يستعرض التراث النوبي والقبطي وروائع السيمفونية المصرية.'
          }
        }
      ],
      solvedExamples: egBacMusicCh4SolvedExamples,
      exerciseProblems: egBacMusicCh4Exercises,
      databank: egBacMusicCh4Databank
    }
  ]
};
