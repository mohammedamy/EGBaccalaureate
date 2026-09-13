import type { Branch } from '../types/curriculum';
import { egBacBioCh1Databank } from './databanks/egbac/egBacBioCh1Databank';

export const egBacBiologyBranch: Branch = {
  id: 'egbac_biology',
  titleEn: 'Advanced Biology & Molecular Genetics (STEM Track)',
  titleAr: 'الأحياء المتقدمة والوراثة الجزيئية (مسار STEM)',
  categoryEn: 'Advanced Sciences',
  categoryAr: 'العلوم المتقدمة',
  iconName: 'Dna',
  colorGradient: 'from-fuchsia-600 to-rose-800',
  chapters: [
    {
      id: 'egbac_bio_ch1',
      chapterNumber: 1,
      titleEn: 'Molecular Genetics, DNA Structure & Genetic Code',
      titleAr: 'الوراثة الجزيئية وتركيب الحمض النووي والشفرة الوراثية',
      descriptionEn: 'Discovery of genetic material, Griffith-Avery transformation, Hershey-Chase bacteriophage radio-labeling, Watson-Crick double helix, Chargaff rules, semi-conservative replication, transcription, and ribosomal translation.',
      descriptionAr: 'اكتشاف المادة الوراثية، التحول البكتيري لجريفث وأفري، ترقيم هيرشي وتشيس، اللولب المزدوج لواطسون وكريك، قواعد شارجاف، التضاعف شبه المحافظ، النسخ، والترجمة في الريبوسومات.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_bio_l1',
          titleEn: 'Molecular Architecture of DNA & Central Dogma',
          titleAr: 'التركيب الجزيئي للـ DNA والعقيدة المركزية للبيولوجيا الجزيئية',
          summaryEn: 'Detailed exploration of DNA as genetic material, antiparallel double helix, phosphodiester bonds, Chargaff stoichiometry $\\%A = \\%T$ and $\\%G = \\%C$, DNA replication enzymes (helicase, primase, DNA polymerase III, ligase), mRNA transcription, and ribosomal peptide synthesis.',
          summaryAr: 'دراسة شاملة لـ DNA كمادة وراثية، اللولب المزدوج المتعاكس، الروابط التساهمية الفوسفاتية ثنائية الإستر، نسب شارجاف، إنزيمات التضاعف (اللولب، بلمرة DNA، الربط)، النسخ إلى mRNA، والترجمة في الريبوسومات.',
          theoryContentEn: `### 1. Proof of DNA as the Genetic Material
- **Griffith's Experiment (1928):** Bacterial transformation in *Streptococcus pneumoniae*:
  - Smooth ($S$) strain: Virulent, encapsulated $\\implies$ killed mice.
  - Rough ($R$) strain: Non-virulent, non-encapsulated $\\implies$ mice survived.
  - Heat-killed $S$ strain: Mice survived.
  - Mixture of heat-killed $S$ + living $R$: Mice died; living encapsulated $S$ bacteria were recovered from their blood (demonstrated **bacterial transformation**).
- **Avery, MacLeod & McCarty (1944):** Isolated the active transforming factor and treated it with enzymes:
  - Proteases and RNase did NOT destroy transforming activity.
  - **Deoxyribonuclease (DNase)** completely destroyed transforming activity $\\implies$ proved DNA is the transforming principle.
- **Hershey & Chase (1952) Bacteriophage Experiment:**
  - Labeled bacteriophage $T_2$ protein coat with radioactive sulfur ($^{35}\\text{S}$) and DNA with radioactive phosphorus ($^{32}\\text{P}$).
  - After infecting *E. coli* and agitating in a blender, $^{32}\\text{P}$ entered bacterial cells while $^{35}\\text{S}$ remained in the supernatant fluid, proving **DNA** is the viral genetic material injected into host cells.

### 2. Watson-Crick Double Helix Architecture
- DNA consists of two antiparallel polynucleotide chains coiled around a central axis in a right-handed double helix:
  - One strand runs $5' \\to 3'$ (from free phosphate at carbon 5' to free hydroxyl at carbon 3').
  - The opposite strand runs $3' \\to 5'$.
- **Sugar-Phosphate Backbone:** Alternating deoxyribose sugar and phosphate groups linked by covalent **phosphodiester bonds** on the outside of the helix.
- **Nitrogenous Base Pairing (Interior):**
  - **Purines** (double-ring: Adenine $A$, Guanine $G$) pair with **Pyrimidines** (single-ring: Thymine $T$, Cytosine $C$):
    - $A = T$ linked by **2 hydrogen bonds**.
    - $G \\equiv C$ linked by **3 hydrogen bonds** (conferring higher thermal and conformational stability).
  - Helix dimensions:
    - Diameter: $2.0\\text{ nm}$.
    - Each complete turn of the helix contains **10 base pairs** ($20$ nucleotides) and spans **$3.4\\text{ nm}$** ($0.34\\text{ nm}$ per base pair).

### 3. Chargaff's Stoichiometric Rules
In double-stranded DNA (dsDNA):
$$\\%A = \\%T \\quad \\text{and} \\quad \\%G = \\%C$$
$$\\frac{\\%A + \\%G}{\\%T + \\%C} = \\frac{\\text{Purines}}{\\text{Pyrimidines}} = 1.0$$
$$\\text{Total Hydrogen Bonds} = 2 \\times N_{A-T} + 3 \\times N_{G-C}$$

### 4. Semi-Conservative DNA Replication
- Proven by Meselson and Stahl (1958) using $^{15}\\text{N}$ and $^{14}\\text{N}$ isotope density gradient centrifugation:
  - Each daughter DNA molecule retains one intact ancestral parental strand and synthesizes one newly formed complementary strand.
- **Enzymatic Machinery:**
  1. **DNA Helicase:** Unwinds the double helix and breaks hydrogen bonds at replication forks.
  2. **Topoisomerase (Gyrase):** Relieves supercoiling tension ahead of the replication fork.
  3. **RNA Primase:** Synthesizes short RNA primers required for initiation.
  4. **DNA Polymerase:** Catalyzes nucleotide addition **strictly in the $5' \\to 3'$ direction**:
     - **Leading Strand:** Synthesized continuously toward the replication fork.
     - **Lagging Strand:** Synthesized discontinuously away from the fork as **Okazaki fragments**.
  5. **DNA Ligase:** Covalently seals nicks between adjacent Okazaki fragments by creating phosphodiester bonds.

### 5. Transcription & The Genetic Code
- **Central Dogma:** $\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Polypeptide / Protein}$.
- **Transcription (in nucleus):**
  - RNA Polymerase binds to the promoter sequence and reads the template DNA strand ($3' \\to 5'$), synthesizing single-stranded mRNA ($5' \\to 3'$):
  - In RNA, Uracil ($U$) replaces Thymine ($T$).
- **The Genetic Code:**
  - **Triplet Codon:** A sequence of 3 consecutive mRNA nucleotides coding for one specific amino acid.
  - Universal start codon: $\\text{AUG}$ (codes for Methionine).
  - Stop codons: $\\text{UAA}, \\text{UAG}, \\text{UGA}$ (do not code for amino acids; bind release factors).
  - Code degeneracy: 64 codons code for 20 standard amino acids (multiple codons can code for the same amino acid).`,
          theoryContentAr: `### ١. إثبات أن DNA هو المادة الوراثية
- **تجارب جريفث (١٩٢٨) في التحول البكتيري:**
  - استخدم بكتيريا *Streptococcus pneumoniae* المسببة للالتهاب الرئوي:
    - السلالة الملساء ($S$): مميتة ومحاطة بكبسولة مخاطية تحميها من جهاز المناعة.
    - السلالة الخشنة ($R$): غير مميتة وغير محاطة بكبسولة.
    - السلالة ($S$) المقتولة حرارياً: لم تقتل الفئران.
    - خليط من ($S$) المقتولة حرارياً + ($R$) الحية: ماتت الفئران وعُزلت من دمائها بكتيريا ($S$) حية $\\implies$ حدث **تحول بكتيري** بانتقال مادة وراثية من $S$ إلى $R$.
- **تجارب أفري وزملاؤه (١٩٤٤):**
  - عزلوا مادة التحول البكتيري وعاملوها بالإنزيمات:
    - إنزيمات تحليل البروتينات والـ RNA لم توقف التحول.
    - إنزيم **ديوكسي ريبونيوكليز (DNase)** حلل DNA تماماً وأوقف التحول الوراثي $\\implies$ دليل قاطع على أن DNA هو المادة الوراثية.
- **تجارب هيرشي وتشيس (١٩٥٢) على البكتيريوفاج (لاقمات البكتيريا):**
  - رقما الغلاف البروتيني للفيروس بالكبريت المشع ($^{35}\\text{S}$) والـ DNA بالفوسفور المشع ($^{32}\\text{P}$).
  - أثبتت التجربة أن الفوسفور المشع ($^{32}\\text{P}$) هو الذي دخل إلى داخل الخلايا البكتيرية وتضاعف، مما يؤكد أن **DNA** هو المادة الوراثية المحقونة.

### ٢. نموذج واطسون وكريك للولب المزدوج
- يتكون جزيء DNA من شريطين متعاكسي الاتجاه يلتفان حول محور مشترك بشكل لولبي أيمن:
  - أحد الشريطين يتجه من $5' \\to 3'$ (من طرف الفوسفات الحر عند الكربون 5 إلى طرف الهيدروكسيل الحر عند الكربون 3).
  - الشريط المقابل له يتجه في الاتجاه المعاكس من $3' \\to 5'$.
- **الهيكل السكري الفوسفاتي:** تتابع من سكر الديوكسي ريبوز ومجموعات الفوسفات المرتبطة بروابط تساهمية ثنائية الإستر، وهو يشكل الحافة الخارجية للولب.
- **القواعد النيتروجينية وازدواجها (داخل اللولب):**
  - **البيورينات** (قواعد ذات حلقتين: أدينين $A$ وجوانين $G$) ترتبط مع **البريميدينات** (قواعد ذات حلقة واحدة: ثايمين $T$ وسيتوسين $C$):
    - الأدينين يرتبط مع الثايمين بـ **رابطتين هيدروجينيتين** ($A = T$).
    - الجوانين يرتبط مع السيتوسين بـ **ثلاث روابط هيدروجينية** ($G \\equiv C$)، مما يمنح هذا الارتباط ثباتاً حرارياً وبنائياً أكبر.
  - أبعاد جزيء DNA:
    - قطر اللولب المزدوج ثنائي النيوكليوتيد: $2.0\\text{ نانومتر}$.
    - كل لفة كاملة تحتوي على **١٠ أزواج من القواعد** (٢٠ نيوكليوتيدة) وتمتد بطول **$3.4\\text{ نانومتر}$** ($0.34\\text{ نانومتر}$ لكل زوج).

### ٣. قواعد شارجاف الرياضية في الـ DNA مزدوج الشريط
في أي جزيء DNA مزدوج الشريط (dsDNA):
$$\\%A = \\%T \\quad \\text{و} \\quad \\%G = \\%C$$
$$\\frac{\\%A + \\%G}{\\%T + \\%C} = \\frac{\\text{مجموع البيورينات}}{\\text{مجموع البريميدينات}} = 1.0$$
$$\\text{إجمالي الروابط الهيدروجينية} = 2 \\times N_{A-T} + 3 \\times N_{G-C}$$

### ٤. التضاعف شبه المحافظ لـ DNA وإنزيماته
- أثبت ميسلسون وستال عام ١٩٥٨ باستخدام نظائر النيتروجين $^{15}\\text{N}$ و $^{14}\\text{N}$ أن تضاعف DNA **شبه محافظ**:
  - يحتوي كل جزيء DNA بنوي جديد على شريط أبوي قديم وشريط مكمل جديد.
- **المنظومة الإنزيمية للتضاعف:**
  ١. **إنزيم اللولب (Helicase):** يفصل شريطي DNA بكسر الروابط الهيدروجينية بين القواعد عند شوكة التضاعف.
  ٢. **إنزيم بلمرة DNA (DNA Polymerase):** يبني الشريط المكمل بإضافة النيوكليوتيدات الجديدة **حصراً في الاتجاه $5' \\to 3'$**:
     - الشريط المتقدم (Leading strand): يُبنى بصورة مستمرة نحو شوكة التضاعف.
     - الشريط المتأخر (Lagging strand): يُبنى بصورة غير مستمرة على هيئة قطع صغيرة تُعرف بـ **قطع أوكازاكي (Okazaki fragments)**.
  ٣. **إنزيم الربط (DNA Ligase):** يربط قطع أوكازاكي بإنشاء الروابط التساهمية الفوسفاتية ليكتمل بناء الشريط.

### ٥. النسخ والشفرة الوراثية وتخليق البروتين
- **العقيدة المركزية:** $\\text{DNA} \\xrightarrow{\\text{نسخ}} \\text{mRNA} \\xrightarrow{\\text{ترجمة}} \\text{بروتين / بولي ببتيد}$.
- **الشفرة الوراثية:**
  - **الكودون الثلاثي:** تتابع من ۳ نيوكليوتيدات على جزيء mRNA يشفر حمضاً أمينياً واحداً.
  - كودون البدء العالمي: $\\text{AUG}$ (يشفر الميثيونين).
  - كودونات الوقف: $\\text{UAA}, \\text{UAG}, \\text{UGA}$ (لا تشفر أحماضاً أمينية، بل ترتبط بعوامل الإطلاق).`,
          formulas: [
            { labelEn: "Chargaff's Stoichiometric Rule", labelAr: 'قاعدة شارجاف الرياضية للبيورينات والبريميدينات', latex: '\\%A = \\%T, \\quad \\%G = \\%C \\implies \\frac{A + G}{T + C} = 1.0' },
            { labelEn: 'Hydrogen Bond Count Formula', labelAr: 'معادلة حساب الروابط الهيدروجينية الإجمالية', latex: '\\text{Total H-bonds} = 2 N_{A-T} + 3 N_{G-C}' },
            { labelEn: 'Watson-Crick Double Helix Pitch', labelAr: 'أبعاد لفة اللولب المزدوج لواطسون وكريك', latex: '1 \\text{ Turn} = 10 \\text{ Base Pairs} = 20 \\text{ Nucleotides} = 3.4\\text{ nm}' },
            { labelEn: 'Coding Nucleotide to Polypeptide Ratio', labelAr: 'علاقة حساب عدد النيوكليوتيدات المشفرة لسلسلة الببتيد', latex: 'N_{\\text{nucleotides}} = 3 \\times (N_{\\text{amino acids}} + 1_{\\text{stop}})' }
          ],
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced Molecular Genetics & Biotechnology',
            bookTitleAr: 'مرجع الوراثة الجزيئية والتكنولوجيا الحيوية - البكالوريا المصرية',
            grade: 'Grade 12 STEM',
            term: 'Full Year',
            officialCode: 'EGBAC-BIO-ADV-CH1',
            pageRange: 'pp. 140 - 192'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Molecular Genetics, DNA Double Helix & Central Dogma',
            titleAr: 'خطة درس: الوراثة الجزيئية، اللولب المزدوج، والعقيدة المركزية',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'EGBAC-BIO-ADV-CH1',
            bloomsObjectivesEn: [
              'Analyze the experimental designs of Griffith, Avery, and Hershey-Chase proving DNA as genetic material.',
              'Calculate nucleotide ratios, hydrogen bonds, and physical helical length using Chargaff stoichiometry.',
              'Contrast continuous leading-strand replication with discontinuous lagging-strand synthesis.',
              'Transcribe DNA coding sequences into mRNA and deduce peptide amino acid sequences using the genetic code.'
            ],
            bloomsObjectivesAr: [
              'تحليل التصميم التجريبي لجريفث وأفري وهيرشي وتشيس في إثبات هوية المادة الوراثية.',
              'حساب نسب القواعد النيتروجينية وعدد الروابط الهيدروجينية وطول اللفات باستخدام علاقات شارجاف.',
              'المقارنة بين بناء الشريط المتقدم المستمر وبناء الشريط المتأخر المتقطع عبر قطع أوكازاكي.',
              'نسخ تتابعات DNA إلى mRNA وترجمتها إلى سلاسل أحماض أمينية ببتيدية باستخدام الشفرة الثلاثية.'
            ],
            prerequisitesEn: [
              'Basic cell biology and organelle functions (nucleus, ribosomes).',
              'Knowledge of organic macromolecules (nucleic acids, proteins).',
              'Basic algebraic ratios and fractions.'
            ],
            prerequisitesAr: [
              'بيولوجيا الخلية الأساسية ووظائف العضيات (النواة، الريبوسومات).',
              'الجزيئات البيولوجية الكبيرة (الأحماض النووية، البروتينات).',
              'النسب الرياضية والكسور الجبرية البسيطة.'
            ],
            keyVocabularyEn: [
              { term: 'Phosphodiester Bond', definition: 'Covalent linkage connecting 3-carbon of one sugar to 5-carbon of adjacent sugar via phosphate.' },
              { term: 'Okazaki Fragments', definition: 'Short segments of DNA synthesized discontinuously on the lagging template strand.' }
            ],
            keyVocabularyAr: [
              { term: 'رابطة تساهمية فوسفاتية', definition: 'رابطة قوية تربط ذرة الكربون رقم 3 في سكر ديوكسي ريبوز مع ذرة الكربون رقم 5 في السكر التالي عبر مجموعة فوسفات.' },
              { term: 'قطع أوكازاكي', definition: 'قطع قصيرة من الـ DNA تُبنى بصورة غير مستمرة على الشريط المتأخر أثناء تضاعف المادة الوراثية.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Identification of Genetic Material',
                phaseAr: 'إثبات هوية المادة الوراثية',
                duration: '20 mins',
                activitiesEn: 'Analyzing Griffith transformation and Hershey-Chase radioactive tracking data.',
                activitiesAr: 'تحليل تجارب جريفث في التحول وترقيم هيرشي وتشيس بالنظائر المشعة.'
              },
              {
                phaseEn: 'Double Helix Geometry & Chargaff Stoichiometry',
                phaseAr: 'هندسة اللولب المزدوج وقواعد شارجاف',
                duration: '25 mins',
                activitiesEn: 'Calculating purine-pyrimidine percentages and total hydrogen bond numbers in DNA fragments.',
                activitiesAr: 'حساب نسب البيورينات والبريميدينات وإجمالي الروابط الهيدروجينية في عينات DNA.'
              },
              {
                phaseEn: 'Semi-Conservative Replication Mechanics',
                phaseAr: 'آلية التضاعف شبه المحافظ والإنزيمات',
                duration: '25 mins',
                activitiesEn: 'Modeling replication fork helicase unwinding and DNA polymerase synthesis.',
                activitiesAr: 'محاكاة عمل إنزيمات اللولب والبلمرة والربط عند شوكة التضاعف.'
              },
              {
                phaseEn: 'Transcription & Codon Deciphering',
                phaseAr: 'النسخ وفك شفرة الكودونات',
                duration: '20 mins',
                activitiesEn: 'Translating mRNA codons and analyzing the effects of point mutations.',
                activitiesAr: 'ترجمة كودونات mRNA ودراسة تأثير الطفرات النقطية على البروتين.'
              }
            ],
            commonMisconceptionsEn: [
              'Students assume that in single-stranded RNA, %A must equal %U.',
              'Students believe DNA polymerase synthesizes both strands in opposite chemical directions.'
            ],
            commonMisconceptionsAr: [
              'اعتقاد الطلاب أن نسب القواعد متساوية حتماً في جزيئات الـ RNA أحادية الشريط (%A = %U).',
              'ظن الطلاب أن إنزيم بلمرة DNA يبني الشريطين في اتجاهين كيميائيين متعاكسين.'
            ],
            differentiationEn: {
              struggling: 'Provide color-coded Watson-Crick base-pairing charts showing AT (2 bonds) vs GC (3 bonds).',
              advanced: 'Calculate melting temperature Tm based on GC content and ionic strength.'
            },
            differentiationAr: {
              struggling: 'توفير مخططات ملونة توضح ازدواج القواعد A مع T برابطتين و G مع C بثلاث روابط.',
              advanced: 'حساب درجة حرارة الانصهار الحراري Tm بدلالة نسبة الجوانين والسيتوسين.'
            },
            formativeAssessmentEn: 'Given total base pairs and %A, calculate the number of GC pairs and total hydrogen bonds.',
            formativeAssessmentAr: 'حساب عدد أزواج GC وإجمالي الروابط الهيدروجينية بمعلومية الطول ونسبة الأدينين.',
            exitTicketQuestion: {
              questionEn: 'Why can DNA polymerase only synthesize a new strand in the 5-to-3 direction?',
              questionAr: 'علل: يبني إنزيم بلمرة DNA الشريط الجديد حصراً في الاتجاه من 5 إلى 3؟',
              solutionEn: 'Because DNA polymerase requires a free 3-OH group on the growing strand to catalyze phosphodiester bond formation.',
              solutionAr: 'لأن إنزيم البلمرة يضيف النيوكليوتيدات الجديدة فقط إلى مجموعة الهيدروكسيل الحرة 3-OH.'
            }
          },
          worksheet: {

            id: 'egbac_bio_ws1',
            titleEn: 'Worksheet: Molecular Genetics & Nucleic Acid Quantitative Analysis',
            titleAr: 'ورقة عمل: الوراثة الجزيئية والتحليل الكمي للأحماض النووية',
            descriptionEn: 'Mathematical and molecular problems on Chargaff base ratios, replication cycles, and protein translation coding.',
            descriptionAr: 'مسائل كمية وتطبيقية في نسب شارجاف ودورات التضاعف والترجمة البروتينية للشفرة الوراثية.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'egbac_bio_ws_p1',
                titleEn: 'Calculation of Hydrogen Bonds from Base Composition',
                titleAr: 'حساب عدد الروابط الهيدروجينية في عينة DNA',
                difficulty: 'medium',
                questionEn: 'A double-stranded DNA molecule contains 2000 base pairs (4000 nucleotides). If Adenine constitutes $28\\%$ of the total bases, what is the total number of hydrogen bonds stabilizing this DNA double helix?',
                questionAr: 'قطعة من جزيء DNA مزدوج الشريط تحتوي على ٢٠٠٠ زوج من القواعد (٤٠٠٠ نيوكليوتيدة). إذا كانت نسبة الأدينين $28\\%$ من إجمالي القواعد، فما هو العدد الإجمالي للروابط الهيدروجينية التي تربط شريطي هذه القطعة؟',
                optionsEn: ['4880 hydrogen bonds', '4000 hydrogen bonds', '5200 hydrogen bonds', '2440 hydrogen bonds'],
                optionsAr: ['٤٨٨٠ رابطة هيدروجينية', '٤٠٠٠ رابطة هيدروجينية', '٥٢٠٠ رابطة هيدروجينية', '٢٤٤٠ رابطة هيدروجينية'],
                correctAnswer: '4880 hydrogen bonds',
                correctIndex: 0,
                hintEn: 'Find the number of AT base pairs and GC base pairs, then apply $\\text{H-bonds} = 2 N_{A-T} + 3 N_{G-C}$.',
                hintAr: 'احسب عدد أزواج AT وأزواج GC، ثم طبق العلاقة: $\\text{H-bonds} = 2 N_{A-T} + 3 N_{G-C}$.',
                stepByStepSolutionEn: [
                  'Total nucleotides = 4000. Adenine percentage = 28%, so number of Adenine bases $N_A = 0.28 \\times 4000 = 1120$.',
                  'By Chargaff rules, $N_T = N_A = 1120$. Thus, there are 1120 AT base pairs.',
                  'Remaining bases: $N_G + N_C = 4000 - (1120 + 1120) = 4000 - 2240 = 1760$ nucleotides.',
                  'Since $N_G = N_C$, there are $1760 / 2 = 880$ GC base pairs.',
                  'Total hydrogen bonds: $2 \\times N_{A-T} + 3 \\times N_{G-C} = 2(1120) + 3(880) = 2240 + 2640 = 4880$ hydrogen bonds.'
                ],
                stepByStepSolutionAr: [
                  'إجمالي النيوكليوتيدات = 4000. نسبة الأدينين 28%، إذن عدد قواعد الأدينين $N_A = 0.28 \\times 4000 = 1120$.',
                  'وفق قواعد شارجاف: $N_T = N_A = 1120$. إذن عدد أزواج $A-T = 1120$ زوجاً.',
                  'مجموع قواعد الجوانين والسيتوسين: $4000 - (1120 + 1120) = 1760$ قاعدة.',
                  'عدد أزواج $G-C = 1760 / 2 = 880$ زوجاً.',
                  'إجمالي الروابط الهيدروجينية = $2(1120) + 3(880) = 2240 + 2640 = 4880$ رابطة هيدروجينية.'
                ],
                teacherTipEn: 'Always check that total percentage of AT + GC equals 100%: 28% A + 28% T + 22% G + 22% C = 100%.',
                teacherTipAr: 'تأكد دائماً أن مجموع النسب 100%: 28% أدينين + 28% ثايمين + 22% جوانين + 22% سيتوسين = 100%.'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'DNA Replication & Translation Interactive Simulator',
            titleAr: 'محاكي تضاعف الـ DNA والترجمة البروتينية',
            descriptionEn: 'Interactive simulation testing replication fork enzymology, Okazaki fragment ligation, and codon-anticodon tRNA pairing.',
            descriptionAr: 'محاكاة تفاعلية لاختبار عمل إنزيمات شوكة التضاعف وتكوين قطع أوكازاكي ومطابقة كودونات tRNA.'
          }
        },
        {
          "id": "egbac_bio_l2",
          "titleEn": "Biotechnology: Recombinant DNA, PCR Amplification & CRISPR-Cas9",
          "titleAr": "التكنولوجيا الحيوية: DNA معاد الاتحاد، تفاعل PCR وتعديل الجينات بكريسبر",
          "summaryEn": "Restriction endonucleases, palindromic recognition sequences, plasmid cloning vectors, reverse transcriptase, thermal cycling polymerase chain reaction (PCR), and CRISPR-Cas9 targeted genome editing.",
          "summaryAr": "إنزيمات القصر البكتيرية، تتابعات التعرف المتناظرة، بلازميدات الاستنساخ، إنزيم النسخ العكسي، مضاعفة الحمض النووي بجهاز PCR، وتعديل الجينوم الموجه بتقنية كريسبر-كاس9.",
          "theoryContentEn": "### 1. Molecular Tools of Recombinant DNA\n- **Restriction Endonucleases (إنزيمات القصر):**\n  - Bacterial defense enzymes that recognize specific 4-to-8 base pair **palindromic sequences** (reading identical $5' \\to 3'$ on both strands).\n  - Cleave phosphodiester bonds to leave either **sticky ends** (overhanging single-stranded ends) or blunt ends.\n  - Example: *EcoRI* recognizes $5'\\text{-GAATTC-}3'$ and cuts between $G$ and $A$:\n    $5'\\text{-G}\\downarrow\\text{AATTC-}3' \\quad \\text{and} \\quad 3'\\text{-CTTAA}\\uparrow\\text{G-}5'$\n- **DNA Ligase:**\n  - Catalyzes covalent phosphodiester bond formation between matching sticky ends of vector plasmid and target gene.\n- **Reverse Transcriptase (إنزيم النسخ العكسي):**\n  - Discovered in retroviruses; synthesizes complementary single-stranded cDNA from an mRNA template, bypassing non-coding eukaryotic introns.\n\n### 2. Polymerase Chain Reaction (PCR)\n- Automated in-vitro amplification of specific DNA fragments using a **thermal cycler** and heat-stable **Taq Polymerase** (isolated from *Thermus aquaticus*):\n  1. **Denaturation ($94 - 96^\\circ\\text{C}$):** High temperature breaks hydrogen bonds, separating dsDNA into single strands.\n  2. **Annealing ($50 - 65^\\circ\\text{C}$):** Forward and reverse primers bind specifically to flanking regions of the target sequence.\n  3. **Extension ($72^\\circ\\text{C}$):** Taq polymerase synthesizes complementary strands in the $5' \\to 3'$ direction.\n- **Exponential Amplification Formula:**\n  $N = N_0 \\times 2^n$\n  where $N_0$ is initial template copies and $n$ is the number of PCR cycles.\n\n### 3. CRISPR-Cas9 Targeted Genome Editing\n- Adapted from the prokaryotic adaptive immune system against bacteriophages:\n  - **Single Guide RNA (sgRNA):** Engineered 20-nucleotide sequence complementary to the target genomic locus, immediately adjacent to a Protospacer Adjacent Motif (**PAM**, typically $5'\\text{-NGG-}3'$).\n  - **Cas9 Endonuclease:** Creates a precise double-strand break (DSB) 3 base pairs upstream of the PAM sequence.\n  - Cellular repair via Non-Homologous End Joining (**NHEJ** $\\to$ gene knockout) or Homology-Directed Repair (**HDR** $\\to$ precise gene insertion/correction).",
          "theoryContentAr": "### ١. الأدوات الجزيئية لتكنولوجيا DNA معاد الاتحاد\n- **إنزيمات القصر البكتيرية (Restriction Endonucleases):**\n  - إنزيمات دفاعية بكتيرية تتعرف على تتابعات متناظرة (Palindromic) بطول ٤ إلى ٨ أزواج من النيوكليوتيدات تقرأ بنفس الترتيب في الاتجاهين $5' \\to 3'$.\n  - تشطر الروابط التساهمية الفوسفاتية مخلفة أطرافاً لاصقة مائلة (Sticky ends) أحادية الشريط تسهل الالتحام.\n  - مثال: إنزيم *EcoRI* يتعرف على التتابع $5'\\text{-GAATTC-}3'$ ويقطع بين الجوانين والأدينين.\n- **إنزيم الربط (DNA Ligase):**\n  - يكون روابط تساهمية فوسفاتية ثنائية الإستر بين الأطراف اللاصقة للجين والبلازميد الناقل.\n- **إنزيم النسخ العكسي (Reverse Transcriptase):**\n  - مستخلص من الفيروسات القهقرية، يقوم ببناء شريط DNA مفرد (cDNA) متكامل مع جزيء mRNA الناضج، متجاوزاً الإنترونات غير المشفرة في حقيقيات النواة.\n\n### ٢. تفاعل البلمرة المتسلسل (PCR)\n- تقنية معملية لمضاعفة ملايين النسخ من قطعة DNA محددة باستخدام جهاز الدورة الحرارية وإنزيم **Taq Polymerase** المقاوم للحرارة:\n  ١. **الدنترة وفصل الشريطين ($٩٤ - ٩٦^\\circ\\text{C}$):** تكسير الروابط الهيدروجينية بالحرارة.\n  ٢. **التحام البادئات ($٥٠ - ٦٥^\\circ\\text{C}$):** ارتباط بادئات DNA المفردة بنهايات التتابع المطلوب.\n  ٣. **الاستطالة وبناء الأشرطة ($٧٢^\\circ\\text{C}$):** يقوم إنزيم Taq ببناء الأشرطة الجديدة في اتجاه $5' \\to 3'$.\n- **قانون التضاعف الأسي:**\n  $N = N_0 \\times 2^n$\n  حيث $N_0$ هو عدد القوالب الأولية و $n$ عدد دورات الجهاز.\n\n### ٣. تعديل الجينوم الدقيق بنظام كريسبر-كاس9 (CRISPR-Cas9)\n- مستخلص من جهاز المناعة التكيفي في البكتيريا ضد الفيروسات:\n  - **المرشد الجيني (sgRNA):** تتابع بطول ٢٠ نيوكليوتيدة يتكامل بدقة مع الجين المستهدف بجوار تتابع PAM ($5'\\text{-NGG-}3'$).\n  - **إنزيم كاس9 (Cas9):** مقص جزيئي يقطع كلا شريطي DNA محدثاً كسراً مزدوجاً (DSB).\n  - إصلاح الكسر يؤدي إما لإلغاء عمل الجين (Knockout) أو إدخال جين سليم بدقة (Gene knockin).",
          "formulas": [
            {
              "labelEn": "PCR Exponential Amplification Yield",
              "labelAr": "الحصيلة الأسية لتفاعل PCR",
              "latex": "N = N_0 \\times 2^n"
            },
            {
              "labelEn": "EcoRI Palindromic Recognition Cleavage",
              "labelAr": "موقع قطع إنزيم القصر EcoRI",
              "latex": "5'\\text{-G}\\downarrow\\text{AATTC-}3'"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Advanced STEM Biology: Cellular & Genetic Engineering Grade 12",
            "bookTitleAr": "الأحياء المتقدمة لمدارس المتفوقين STEM - الصف الثالث الثانوي",
            "grade": "Grade 12 STEM",
            "term": "Semester 1",
            "officialCode": "EGBAC-STEM-BIO-CH1-L2",
            "pageRange": "pp. 45 - 78"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Gene Cloning, PCR & CRISPR Editing",
            "titleAr": "خطة درس: استنساخ الجينات ومضاعفة PCR وتعديل كريسبر",
            "gradeLevel": "Grade 12 STEM Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-STEM-BIO-CH1-L2",
            "bloomsObjectivesEn": [
              "Analyze palindromic restriction sequences and predict fragments produced after restriction digest.",
              "Calculate theoretical amplicon yields from multi-cycle PCR assays using exponential formulas.",
              "Evaluate ethical, therapeutic, and technological implications of CRISPR-Cas9 germline vs somatic gene editing."
            ],
            "bloomsObjectivesAr": [
              "تحليل تتابعات التعرف المتناظرة وتوقع قطع الهضم الناتجة عن إنزيمات القصر.",
              "حساب الحصيلة النظرية لتضاعف DNA بعد عدد محدد من دورات جهاز PCR.",
              "تقييم الأبعاد الأخلاقية والعلاجية لتقنية كريسبر-كاس9 في الخلايا الجسدية والجنسية."
            ],
            "prerequisitesEn": [
              "Watson-Crick base pairing",
              "Bacterial plasmid genetics",
              "Enzyme catalytic sites"
            ],
            "prerequisitesAr": [
              "ازدواج القواعد النيتروجينية",
              "وراثة البلازميدات البكتيرية",
              "المواقع النشطة للإنزيمات"
            ],
            "keyVocabularyEn": [
              {
                "term": "Palindromic Sequence",
                "definition": "A DNA sequence that reads identically in both strands in the 5' to 3' orientation."
              },
              {
                "term": "Taq Polymerase",
                "definition": "Thermostable DNA polymerase from Thermus aquaticus active at 72°C."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "تتابع التعرف المتناظر",
                "definition": "تتابع نيوكليوتيدات يقرأ بنفس الترتيب في شريطي DNA المتعاكسين في اتجاه 5 إلى 3."
              },
              {
                "term": "إنزيم Taq بوليميريز",
                "definition": "إنزيم بلمرة مستخلص من بكتيريا الينابيع الحارة يتحمل درجات الحرارة المرتفعة حتى 95 مئوية."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Restriction Digest & Plasmids",
                "phaseAr": "إنزيمات القصر والبلازميدات",
                "duration": "30 mins",
                "activitiesEn": "Tracing EcoRI and HindIII restriction cuts on plasmid maps.",
                "activitiesAr": "تحليل مواقع قطع إنزيمات القصر على خرائط البلازميدات."
              },
              {
                "phaseEn": "PCR Thermal Cycling Kinetics",
                "phaseAr": "حركية ودورات جهاز PCR",
                "duration": "30 mins",
                "activitiesEn": "Simulating primer annealing temperature gradients and exponential yields.",
                "activitiesAr": "محاكاة درجات حرارة دنترة والتحام البادئات وحساب التضاعف."
              },
              {
                "phaseEn": "CRISPR-Cas9 Mechanism",
                "phaseAr": "آلية عمل مقص كريسبر-كاس9",
                "duration": "30 mins",
                "activitiesEn": "Investigating guide RNA specificity, PAM sites, and gene knockout.",
                "activitiesAr": "مناقشة دور المرشد الجيني وتتابع PAM في توجيه كاس9."
              }
            ],
            "commonMisconceptionsEn": [
              "Believing restriction enzymes cut human DNA in bacterial cells naturally (bacteria methylate their own DNA to protect it).",
              "Confusing Taq polymerase with standard human DNA polymerase (human polymerase denatures irreversibly at 94°C)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن البكتيريا تقطع DNA الخاص بها (البكتيريا تضيف مجموعات ميثيل لتعديل مواقع القطع وحمايتها).",
              "الخلط بين إنزيم Taq وبلمرة الإنسان (إنزيم الإنسان يتلف نهائياً عند 94 مئوية)."
            ],
            "differentiationEn": {
              "struggling": "Provide paper plasmid models to physically cut with scissors and tape target gene inserts.",
              "advanced": "Design 20-bp sgRNA oligos targeting a specific oncogene adjacent to a 5'-NGG-3' PAM sequence."
            },
            "differentiationAr": {
              "struggling": "استخدام نماذج ورقية للبلازميدات لقصها ولصق الجين باليد لفهم الأطراف اللاصقة.",
              "advanced": "تصميم بادئات تتابع sgRNA لاستهداف جين سرطاني بجوار تتابع PAM محدد."
            },
            "formativeAssessmentEn": "Why is Taq polymerase preferred over E. coli DNA polymerase in automated PCR thermocyclers?",
            "formativeAssessmentAr": "علل: يفضل استخدام إنزيم Taq بوليميريز على إنزيم بلمرة بكتيريا إشيريشيا كولاي في جهاز PCR؟",
            "exitTicketQuestion": {
              "questionEn": "If a PCR reaction starts with 50 copies of a target gene, how many copies are present after 10 complete cycles?",
              "questionAr": "إذا بدأ تفاعل PCR بعدد ٥٠ نسخة من الجين المستهدف، فما عدد النسخ المتكونة بعد ١٠ دورات كاملة؟",
              "solutionEn": "$N = 50 \\times 2^{10} = 50 \\times 1024 = 51,200$ copies.",
              "solutionAr": "$N = ٥٠ \\times ٢^{١٠} = ٥٠ \\times ١٠٢٤ = ٥١,٢٠٠$ نسخة."
            }
          },
          "worksheet": {
            "id": "egbac_bio_ws_2",
            "titleEn": "Worksheet: Recombinant DNA & PCR Calculations",
            "titleAr": "ورقة عمل: تكنولوجيا DNA معاد الاتحاد ومسائل PCR",
            "descriptionEn": "Rigorous problems on restriction digest fragment counting, PCR cycle stoichiometry, and CRISPR targeting.",
            "descriptionAr": "مسائل علمية على عدد قطع الهضم الناتجة عن إنزيمات القصر وحسابات تضاعف PCR.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_bio_ws_p2_1",
                "titleEn": "Circular Plasmid Restriction Digest Fragment Counts",
                "titleAr": "حساب عدد قطع الهضم في بلازميد حلقي",
                "difficulty": "medium",
                "questionEn": "A circular bacterial plasmid has 4 recognition sites for the restriction enzyme EcoRI. How many linear DNA fragments are produced after complete digestion with EcoRI?",
                "questionAr": "بلازميد بكتيري حلقي يحتوي على ٤ مواقع تعرف لإنزيم القصر EcoRI. كم عدد قطع DNA الناتجة بعد اكتمال هضم البلازميد بهذا الإنزيم؟",
                "optionsEn": [
                  "4 fragments",
                  "5 fragments",
                  "3 fragments",
                  "8 fragments"
                ],
                "optionsAr": [
                  "٤ قطع",
                  "٥ قطع",
                  "٣ قطع",
                  "٨ قطع"
                ],
                "correctAnswer": "4 fragments",
                "correctIndex": 0,
                "hintEn": "Cutting a circular DNA molecule n times produces n fragments. (Cutting a linear molecule n times produces n+1 fragments).",
                "hintAr": "قطع جزيء DNA حلقي عدد n من المرات ينتج دائماً n من القطع. (بينما الجزيء الخطي ينتج n+1 من القطع).",
                "stepByStepSolutionEn": [
                  "The plasmid is a closed circular DNA molecule.",
                  "Each cut by a restriction enzyme linearizes or divides the closed loop.",
                  "For any circular molecule, $N_{\\text{fragments}} = N_{\\text{cut sites}}$.",
                  "With 4 cut sites: $N_{\\text{fragments}} = 4$ linear fragments."
                ],
                "stepByStepSolutionAr": [
                  "البلازميد عبارة عن جزيء DNA حلقي مغلق.",
                  "كل قطع بإنزيم القصر يفتح الحلقة أو يقسمها.",
                  "في أي جزيء حلقي: عدد القطع الناتجة = عدد مواقع القطع تماماً ($N_{\\text{cuts}} = N_{\\text{fragments}}$).",
                  "بما أن هناك ٤ مواقع قطع، فإن عدد القطع الناتجة = ٤ قطع خطية."
                ],
                "teacherTipEn": "Contrast circular plasmids (cuts = fragments) with linear eukaryotic chromosomes (fragments = cuts + 1).",
                "teacherTipAr": "قارن دائماً بين البلازميد الحلقي (القطع = المواقع) والكروموسوم الخطي (القطع = المواقع + ١)."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Recombinant DNA & PCR Thermocycler Simulator",
            "titleAr": "محاكي تكنولوجيا DNA معاد الاتحاد ودورات PCR الحرارية",
            "descriptionEn": "Interactive restriction endonuclease digestion, sticky end annealing, and multi-cycle PCR exponential amplification curve.",
            "descriptionAr": "محاكاة تفاعلية لهضم إنزيمات القصر والتحام الأطراف اللاصقة ورسم منحنى التضاعف الأسي في جهاز PCR."
          }
        },
        {
          "id": "egbac_bio_l3",
          "titleEn": "Cellular Respiration & Mitochondrial Bioenergetics",
          "titleAr": "التنفس الخلوي وتوليد الطاقة في الميتوكوندريا",
          "summaryEn": "Thermodynamics of ATP hydrolysis, glycolysis in cytosol, pyruvate dehydrogenase complex, citric acid cycle, chemiosmotic oxidative phosphorylation across cristae, and fermentation pathways.",
          "summaryAr": "ديناميكا التحلل المائي لـ ATP، انشطار الجلوكوز، أكسدة البيروفات، دورة كريبس، الفسفرة التأكسدية الأسموزية الكيميائية، ومسارات التخمر.",
          "theoryContentEn": "### 1. Thermodynamic Principles of Bioenergetics\n- **ATP as Universal Energy Currency:**\n  $\\text{ATP} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{ADP} + \\text{P}_i \\quad (\\Delta G^{\\circ\\prime} = -30.5\\text{ kJ/mol} = -7.3\\text{ kcal/mol})$\n- Coupling exergonic reactions (catabolism of carbohydrates, lipids) to endergonic cellular work (biosynthesis, active transport, muscle contraction).\n\n### 2. Complete Aerobic Respiration Pathway\n1. **Glycolysis (Cytoplasm):**\n   - Energy Investment: Phosphorylation of glucose by hexokinase and phosphofructokinase (consumes $2\\text{ ATP}$).\n   - Cleavage: Fructose 1,6-bisphosphate splits into DHAP and G3P (PGAL).\n   - Energy Payoff: Oxidation of $2\\text{ G3P}$ yields $4\\text{ ATP}$ (substrate-level phosphorylation) and $2\\text{ NADH}$.\n   - **Net:** $1\\text{ Glucose} \\to 2\\text{ Pyruvate} + 2\\text{ ATP} + 2\\text{ NADH}$.\n2. **Pyruvate Oxidation / Link Reaction (Mitochondrial Matrix):**\n   $2\\text{ Pyruvate} + 2\\text{ NAD}^+ + 2\\text{ CoA} \\longrightarrow 2\\text{ Acetyl-CoA} + 2\\text{ CO}_2 + 2\\text{ NADH}$\n3. **Krebs Cycle (Citric Acid Cycle):**\n   - Acetyl-CoA ($2\\text{C}$) + Oxaloacetate ($4\\text{C}$) $\\to$ Citrate ($6\\text{C}$).\n   - Per turn ($2\\text{ turns per glucose}$): $2\\text{ CO}_2$, $3\\text{ NADH}$, $1\\text{ FADH}_2$, $1\\text{ ATP}$ (via GTP).\n   - Total for 2 turns: $4\\text{ CO}_2 + 6\\text{ NADH} + 2\\text{ FADH}_2 + 2\\text{ ATP}$.\n4. **Oxidative Phosphorylation & Electron Transport Chain (Cristae):**\n   - Electrons from $10\\text{ NADH}$ and $2\\text{ FADH}_2$ cascade through Complexes I, II, III, and IV.\n   - Protons ($\text{H}^+$) pumped into intermembrane space establish a steep electrochemical gradient (proton-motive force, $\\Delta\\text{pH}$ and $\\Delta\\Psi$).\n   - $\\text{O}_2$ acts as terminal electron acceptor:\n     $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\longrightarrow 2\\text{H}_2\\text{O}$\n   - Protons return to matrix through **$F_0F_1$-ATP Synthase**, driving rotary catalysis to generate $30 - 32\\text{ ATP}$ total.",
          "theoryContentAr": "### ١. مبادئ الطاقة الحيوية والتحلل المائي لـ ATP\n- **ATP عملة الطاقة في الخلية:**\n  $\\text{ATP} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{ADP} + \\text{P}_i \\quad (\\Delta G^{\\circ\\prime} = -٣٠,٥\\text{ kJ/mol})$\n- اقتران التفاعلات الطاردة للطاقة (هدم الجلوكوز) بالتفاعلات الماصة للطاقة (النقل النشط، الانقباض العضلي، وبناء البروتين).\n\n### ٢. مسار التنفس الهوائي المتكامل\n١. **انشطار الجلوكوز (Glycolysis) في السيتوسول:**\n   - مرحلة استثمار الطاقة: استهلاك ٢ ATP لتنشيط الجلوكوز وتحويله لفركتوز ١,٦ ثنائي الفوسفات.\n   - مرحلة انشطار الجزيء وإنتاج الطاقة: إنتاج ٤ ATP (بالفسفرة المباشرة) واختزال ٢ NAD⁺ إلى ٢ NADH.\n   - **الصافي:** ١ جلوكوز $\\to$ ٢ بيروفات + ٢ ATP (صافي) + ٢ NADH.\n٢. **أكسدة حمض البيروفيك (ماتركس الميتوكوندريا):**\n   $٢\\text{ بيروفات} + ٢\\text{ NAD}^+ + ٢\\text{ CoA} \\longrightarrow ٢\\text{ أسيتيل-CoA} + ٢\\text{ CO}_2 + ٢\\text{ NADH}$\n٣. **دورة كريبس (دورة حمض الستريك):**\n   - يتحد أسيتيل-CoA ($2\\text{C}$) مع أوكسالأسيتيك ($4\\text{C}$) ليعطي الستريك ($6\\text{C}$).\n   - الدورة الواحدة تنتج: $٢\\text{ CO}_2$ و $٣\\text{ NADH}$ و $١\\text{ FADH}_2$ و $١\\text{ ATP}$.\n   - الحصيلة لجزيء جلوكوز (دورتان): $٤\\text{ CO}_2 + ٦\\text{ NADH} + ٢\\text{ FADH}_2 + ٢\\text{ ATP}$.\n٤. **الفسفرة التأكسدية وسلسلة نقل الإلكترون (الأعراف):**\n   - تمر الإلكترونات من ١٠ NADH و ٢ FADH₂ عبر معقدات السيتوكرومات (I, II, III, IV).\n   - يتم ضخ البروتونات $\\text{H}^+$ إلى الحيز بين الغشائين متسببة في قوة دافعة بروتونية كهروكيميائية.\n   - الأكسجين هو المستقبل الأخير للإلكترونات ليتكون الماء:\n     $\\text{O}_2 + ٤\\text{H}^+ + ٤e^- \\longrightarrow ٢\\text{H}_2\\text{O}$\n   - تتدفق البروتونات عبر إنزيم تخليق ATP لتوليد نحو $٣٠ - ٣٢\\text{ ATP}$.",
          "formulas": [
            {
              "labelEn": "Complete Aerobic Respiration Balance",
              "labelAr": "المعادلة الإجمالية للتنفس الهوائي",
              "latex": "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 30\\text{--}32\\,\\text{ATP}"
            },
            {
              "labelEn": "Free Energy of ATP Hydrolysis",
              "labelAr": "طاقة التحلل المائي القياسية لـ ATP",
              "latex": "\\Delta G^{\\circ\\prime} = -30.5\\,\\text{kJ/mol}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Advanced STEM Biology: Cellular & Genetic Engineering Grade 12",
            "bookTitleAr": "الأحياء المتقدمة لمدارس المتفوقين STEM - الصف الثالث الثانوي",
            "grade": "Grade 12 STEM",
            "term": "Semester 1",
            "officialCode": "EGBAC-STEM-BIO-CH1-L3",
            "pageRange": "pp. 79 - 110"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Mitochondrial Bioenergetics & Chemiosmosis",
            "titleAr": "خطة درس: الطاقة الحيوية بالميتوكوندريا والأسموزية الكيميائية",
            "gradeLevel": "Grade 12 STEM Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-STEM-BIO-CH1-L3",
            "bloomsObjectivesEn": [
              "Account for all ATP, NADH, FADH2, and CO2 molecules generated from 1 mole of oxidized glucose.",
              "Explain Mitchell's chemiosmotic hypothesis and the proton-motive force powering ATP synthase rotary mechanics.",
              "Predict metabolic consequences of chemical uncouplers (DNP) and respiratory inhibitors (cyanide, carbon monoxide)."
            ],
            "bloomsObjectivesAr": [
              "حساب الميزانية الدقيقة لجزيئات ATP و NADH و FADH2 و CO2 الناتجة عن أكسدة مول من الجلوكوز.",
              "شرح فرضية ميتشل للأسموزية الكيميائية وآلية دوران إنزيم تخليق ATP.",
              "توقع الآثار الأيضية للمثبطات التنفسية كالسيانيد وأول أكسيد الكربون ومثبطات الفسفرة مثل DNP."
            ],
            "prerequisitesEn": [
              "Redox reactions",
              "Membrane transport",
              "Mitochondrial anatomy"
            ],
            "prerequisitesAr": [
              "تفاعلات الأكسدة والاختزال",
              "النقل عبر الأغشية",
              "تركيب الميتوكوندريا"
            ],
            "keyVocabularyEn": [
              {
                "term": "Chemiosmosis",
                "definition": "Movement of protons across a selectively permeable membrane down their electrochemical gradient to drive ATP synthesis."
              },
              {
                "term": "Substrate-Level Phosphorylation",
                "definition": "Direct enzymatic transfer of a phosphate group to ADP from a phosphorylated metabolic intermediate."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "الأسموزية الكيميائية",
                "definition": "حركة البروتونات عبر الغشاء الداخلي مع تدرجها الكهروكيميائي لتشغيل إنزيم بناء ATP."
              },
              {
                "term": "الفسفرة على مستوى مادة التفاعل",
                "definition": "النقل المباشر لمجموعة فوسفات من مركب وسيط إلى ADP بفعل إنزيم نوعي دون الحاجة لسلسلة نقل الإلكترون."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Glycolysis & Link Reaction",
                "phaseAr": "الانشطار والتفاعل الرابط",
                "duration": "30 mins",
                "activitiesEn": "Tracing substrate carbon atoms and NAD+ reduction steps.",
                "activitiesAr": "تتبع ذرات الكربون وخطوات اختزال NAD+."
              },
              {
                "phaseEn": "Citric Acid Cycle",
                "phaseAr": "دورة حمض الستريك",
                "duration": "30 mins",
                "activitiesEn": "Diagramming 8-step cycle and substrate-level phosphorylation.",
                "activitiesAr": "رسم خطوات دورة كريبس الثمانية ومواقع انطلاق CO2."
              },
              {
                "phaseEn": "ETC & Rotary ATP Synthase",
                "phaseAr": "سلسلة الإلكترون ودوران الإنزيم",
                "duration": "30 mins",
                "activitiesEn": "Interactive simulation of proton gradient and rotary F1 head.",
                "activitiesAr": "محاكاة تفاعلية لضخ البروتونات وحركة رأس إنزيم بناء ATP."
              }
            ],
            "commonMisconceptionsEn": [
              "Thinking oxygen is consumed in glycolysis or Krebs cycle (oxygen is only consumed at Complex IV of ETC).",
              "Assuming FADH2 yields the same ATP as NADH (FADH2 enters at Complex II, pumping fewer protons, yielding ~1.5 ATP vs ~2.5 ATP for NADH)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن الأكسجين يستهلك في انشطار الجلوكوز أو كريبس (يستهلك حصراً في نهاية سلسلة نقل الإلكترون).",
              "الظن بأن FADH2 يعطي نفس طاقة NADH (يدخل FADH2 في المعقد II ويضخ بروتونات أقل ليعطي نحو 1.5 ATP مقابل 2.5 ATP لـ NADH)."
            ],
            "differentiationEn": {
              "struggling": "Use visual step-by-step ATP ledger accounting sheet for each cellular compartment.",
              "advanced": "Calculate the respiratory quotient (RQ) for glucose ($RQ = 1.0$) vs palmitic acid ($RQ = 0.7$)."
            },
            "differentiationAr": {
              "struggling": "استخدام جدول ميزانية محاسبية مبسطة لتتبع ATP في كل حجرة خلوية.",
              "advanced": "حساب معامل التنفس (RQ) للجلوكوز ($RQ = 1.0$) مقارنة بحمض البالميتيك الدهني ($RQ = 0.7$)."
            },
            "formativeAssessmentEn": "Why does cyanide poisoning cause rapid cellular death despite normal blood oxygen saturation?",
            "formativeAssessmentAr": "فسر: لماذا يسبب التسمم بالسيانيد وفاة خلوية سريعة رغم تشبع الدم بالأكسجين بنسبة طبيعية؟",
            "exitTicketQuestion": {
              "questionEn": "How many total molecules of CO2 are released from the complete aerobic catabolism of 3 molecules of glucose?",
              "questionAr": "كم جزيئاً من غاز ثاني أكسيد الكربون CO2 ينطلق عند الأكسدة التامة لـ ٣ جزيئات من الجلوكوز هوائياً؟",
              "solutionEn": "Each glucose releases 6 CO2 (2 in link reaction + 4 in Krebs cycle). For 3 glucose: $3 \\times 6 = 18$ CO2 molecules.",
              "solutionAr": "كل جزيء جلوكوز يطلق ٦ جزيئات CO2 (٢ في التفاعل الرابط + ٤ في دورة كريبس). إذن لـ ٣ جزيئات: $٣ \\times ٦ = ١٨$ جزيئاً من CO2."
            }
          },
          "worksheet": {
            "id": "egbac_bio_ws_3",
            "titleEn": "Worksheet: Cellular Respiration & ATP Stoichiometry",
            "titleAr": "ورقة عمل: حسابات التنفس الخلوي وميزانية ATP",
            "descriptionEn": "Rigorous stoichiometric problems on NADH/FADH2 oxidation, proton gradients, and respiratory inhibitors.",
            "descriptionAr": "مسائل كمية دقيقة على أكسدة مرافقات الإنزيمات وحسابات الطاقة المتولدة.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_bio_ws_p3_1",
                "titleEn": "ATP Yield Calculation from Reduced Coenzymes",
                "titleAr": "حساب الحصيلة الطاقوية الناتجة من مرافقات الإنزيم المختزلة",
                "difficulty": "medium",
                "questionEn": "During the complete aerobic oxidation of 2 glucose molecules, how many ATP molecules are synthesized strictly by oxidative phosphorylation via the Electron Transport Chain?",
                "questionAr": "أثناء الأكسدة الهوائية التامة لـ ٢ جزيء جلوكوز، كم جزيء ATP يتكون حصراً بعملية الفسفرة التأكسدية عبر سلسلة نقل الإلكترون؟",
                "optionsEn": [
                  "56 ATP molecules",
                  "64 ATP molecules",
                  "60 ATP molecules",
                  "32 ATP molecules"
                ],
                "optionsAr": [
                  "٥٦ جزيء ATP",
                  "٦٤ جزيء ATP",
                  "٦٠ جزيء ATP",
                  "٣٢ جزيء ATP"
                ],
                "correctAnswer": "56 ATP molecules",
                "correctIndex": 0,
                "hintEn": "Subtract substrate-level ATP (4 ATP per glucose = 8 ATP total) from total theoretical yield (64 ATP total).",
                "hintAr": "اطرح جزيئات ATP المتكونة بالفسفرة المباشرة (٤ لكل جلوكوز = ٨ إجمالي) من الحصيلة الكلية (٦٤ ATP).",
                "stepByStepSolutionEn": [
                  "Per 1 glucose: Total ATP = 32. Substrate-level ATP = 2 (glycolysis) + 2 (Krebs) = 4 ATP.",
                  "Oxidative phosphorylation ATP per glucose = $32 - 4 = 28$ ATP.",
                  "For 2 glucose molecules: $28 \\times 2 = 56$ ATP synthesized strictly via ETC."
                ],
                "stepByStepSolutionAr": [
                  "لكل جزيء جلوكوز: إجمالي ATP = ٣٢. المتكون بالفسفرة المباشرة = ٢ (الانشطار) + ٢ (كريبس) = ٤ ATP.",
                  "المتكون بالفسفرة التأكسدية عبر السلسلة لكل جلوكوز = $٣٢ - ٤ = ٢٨$ ATP.",
                  "لجزيئين من الجلوكوز: $٢٨ \\times ٢ = ٥٦$ جزيء ATP يتكون حصراً عبر السلسلة."
                ],
                "teacherTipEn": "Always distinguish between substrate-level phosphorylation and oxidative phosphorylation.",
                "teacherTipAr": "ميز دائماً بين الفسفرة على مستوى مادة التفاعل والفسفرة التأكسدية عبر السلسلة."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Mitochondrial Electron Transport Chain Simulator",
            "titleAr": "محاكي سلسلة نقل الإلكترون وتخليق ATP بالميتوكوندريا",
            "descriptionEn": "Interactive proton gradient builder across the inner mitochondrial membrane driving rotary ATP synthase catalysis.",
            "descriptionAr": "محاكاة تفاعلية لضخ البروتونات عبر الغشاء الداخلي وتشغيل الرأس الدوار لإنزيم تخليق ATP."
          }
        },
        {
          "id": "egbac_bio_l4",
          "titleEn": "Photosynthesis & Chloroplast Carbon Fixation (Calvin Cycle)",
          "titleAr": "البناء الضوئي وتثبيت الكربون في البلاستيدات الخضراء (حلقة كالفن)",
          "summaryEn": "Chloroplast anatomy, chlorophyll absorption spectra, thylakoid light reactions (Z-scheme photophosphorylation), water photolysis, stroma Calvin-Benson cycle (RuBisCO fixation, reduction, RuBP regeneration), and C3 vs C4 photosynthetic adaptations.",
          "summaryAr": "تركيب البلاستيدة الخضراء، أطياف امتصاص الكلوروفيل، التفاعلات الضوئية في الثايلاكويد، شطر الماء ضوئياً، حلقة كالفن-بنسون، وتكيفات نباتات C3 و C4.",
          "theoryContentEn": "### 1. Chloroplast Architecture and Pigments\n- **Ultrastructure:**\n  - Double membrane envelope enclosing the proteinaceous **stroma** (site of dark Calvin cycle reactions).\n  - Interconnected membranous discs called **thylakoids**, organized into stacks called **grana** (site of light-dependent photolysis and electron transport).\n- **Photosynthetic Pigments:**\n  - **Chlorophyll a:** Chief pigment (bluish-green); absorption peaks in blue ($\\approx 430\\text{ nm}$) and red ($\\approx 660\\text{ nm}$) regions.\n  - **Chlorophyll b:** Accessory pigment (yellowish-green; peaks $\\approx 450\\text{ nm}$ and $640\\text{ nm}$).\n  - **Carotenoids (Carotene & Xanthophyll):** Yellow/orange accessory pigments expanding light capture and dissipating excess harmful light (photoprotection).\n\n### 2. Light-Dependent Reactions (Thylakoid Membrane - Z-Scheme)\n1. **Photosystem II (PS II - $P680$):**\n   - Photons absorbed excite $P680$ reaction center electrons.\n   - Water-Splitting Complex catalyzes **Photolysis of Water**:\n     $2\\text{H}_2\\text{O} \\longrightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2 \\uparrow$\n   - Releases $\\text{O}_2$ to atmosphere; electrons replace lost $P680$ electrons.\n2. **Electron Transport Chain:**\n   - Electrons pass from PS II $\\to$ Plastoquinone ($PQ$) $\\to$ Cytochrome $b_6f$ complex (pumps $\\text{H}^+$ into thylakoid lumen) $\\to$ Plastocyanin ($PC$).\n3. **Photosystem I (PS I - $P700$):**\n   - Light re-excites electrons in $P700$, passing through Ferredoxin ($Fd$) to **$\\text{NADP}^+$ Reductase**:\n     $\\text{NADP}^+ + 2\\text{H}^+ + 2e^- \\longrightarrow \\text{NADPH} + \\text{H}^+$\n4. **Photophosphorylation:**\n   - Proton accumulation inside thylakoid lumen creates an electrochemical gradient ($>3\\,\\text{pH}$ units difference).\n   - Protons exit through chloroplast **ATP Synthase** into stroma, synthesizing $\\text{ATP}$.\n\n### 3. Light-Independent Reactions (Calvin-Benson Cycle in Stroma)\n- Operates in 3 coordinated phases:\n  1. **Carbon Fixation:** $\\text{CO}_2$ is covalently joined to ribulose 1,5-bisphosphate ($\\text{RuBP}$, $5\\text{C}$) catalyzed by **RuBisCO** (ribulose bisphosphate carboxylase-oxygenase), forming unstable $6\\text{C}$ intermediate that splits into two $3\\text{C}$ molecules of 3-phosphoglycerate ($3\\text{-PGA}$).\n  2. **Reduction:** $3\\text{-PGA}$ is phosphorylated by $\\text{ATP}$ and reduced by $\\text{NADPH}$ to form glyceraldehyde 3-phosphate ($\\text{G3P}$ or $\\text{PGAL}$).\n  3. **Regeneration of RuBP:** For every $3\\text{ CO}_2$ fixed, $6\\text{ G3P}$ are produced; $1\\text{ G3P}$ exits as net gain to synthesize hexose glucose, while the remaining $5\\text{ G3P}$ rearrange using $3\\text{ ATP}$ to regenerate $3\\text{ RuBP}$.\n- **Net Stoichiometry for 1 Glucose:**\n  $6\\text{CO}_2 + 18\\text{ATP} + 12\\text{NADPH} + 12\\text{H}^+ \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 18\\text{ADP} + 18\\text{P}_i + 12\\text{NADP}^+ + 6\\text{H}_2\\text{O}$",
          "theoryContentAr": "### ١. التركيب الدقيق للبلاستيدة الخضراء وأصباغ التمثيل\n- **التركيب الدقيق:**\n  - غشاء مزدوج يحيط بـ **الستروما** (أرضية بروتينية تحتوي على إنزيمات حلقة كالفن اللاضوئية).\n  - صفائح غشائية تسمى **الثايلاكويد**، تترتب في أقراص متراصة تسمى **الجرانا** (موقع التفاعلات الضوئية وشطر الماء).\n- **أصباغ البناء الضوئي:**\n  - **كلوروفيل أ:** الصبغ الأساسي (أخضر مزرق)؛ يمتص في منطقتي الأزرق ($٤٣٠\\text{ nm}$) والأحمر ($٦٦٠\\text{ nm}$).\n  - **كلوروفيل ب:** صبغ مساعد (أخضر مصفر).\n  - **الكاروتين والزانثوفيل:** أصباغ برتقالية وصفراء تمتص أطوالاً موجية إضافية وتحمي الكلوروفيل من التلف الضوئي.\n\n### ٢. التفاعلات الضوئية في أغشية الثايلاكويد (مخطط Z)\n١. **النظام الضوئي الثاني (PS II - $P680$):**\n   - تمتص جزيئات الصبغ فوتونات الضوء وتثير إلكترونات مركز التفاعل $P680$.\n   - مركب شطر الماء يحفز **التحلل الضوئي للماء**:\n     $٢\\text{H}_2\\text{O} \\longrightarrow ٤\\text{H}^+ + ٤e^- + \\text{O}_2 \\uparrow$\n   - ينطلق غاز الأكسجين للغلاف الجوي وتعوض الإلكترونات ما فقده الكلوروفيل.\n٢. **سلسلة نقل الإلكترون بالبلاستيدة:**\n   - تنتقل الإلكترونات عبر البلاستوكينون ومعقد السيتوكروم $b_6f$ (الذي يضخ البروتونات لداخل تجويف الثايلاكويد) ثم البلاستوسيانين.\n٣. **النظام الضوئي الأول (PS I - $P700$):**\n   - يعاد تنشيط الإلكترونات بالضوء وتنتقل عبر الفيريدوكسين إلى إنزيم مختزل $\\text{NADP}^+$:\n     $\\text{NADP}^+ + ٢\\text{H}^+ + ٢e^- \\longrightarrow \\text{NADPH} + \\text{H}^+$\n٤. **الفسفرة الضوئية:**\n   - تراكم البروتونات بتجويف الثايلاكويد يولد قوة دافعة تتدفق عبر إنزيم بناء ATP لتخليق ATP في الستروما.\n\n### ٣. التفاعلات اللاضوئية (حلقة كالفن-بنسون في الستروما)\n- تتم في ٣ مراحل منسقة:\n  ١. **تثبيت الكربون:** يتحد $\\text{CO}_2$ مع ريبولوز ثنائي الفوسفات (RuBP خماسي الكربون) بفعل إنزيم **روبيسكو** (RuBisCO) ليعطي مركبين من حمض ٣-فوسفوجليسرين ($3\\text{-PGA}$).\n  ٢. **الاختزال:** يستهلك ATP و NADPH لاختزال $3\\text{-PGA}$ إلى فوسفوجليسرالدهيد ($G3P$ أو $PGAL$).\n  ٣. **إعادة تجديد RuBP:** كل ٣ جزيئات $\\text{CO}_2$ تنتج ٦ جزيئات G3P؛ يخرج جزيء واحد لبناء الجلوكوز، وتستخدم ٥ جزيئات لإعادة بناء ٣ جزيئات من RuBP باستهلاك ٣ ATP.\n- **معادلة تكوين جزيء جلوكوز كامل:**\n  $٦\\text{CO}_2 + ١٨\\text{ATP} + ١٢\\text{NADPH} \\longrightarrow \\text{جلوكوز} + ١٨\\text{ADP} + ١٢\\text{NADP}^+$",
          "formulas": [
            {
              "labelEn": "Complete Photosynthetic Overall Equation",
              "labelAr": "معادلة البناء الضوئي الإجمالية الكاملة",
              "latex": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2"
            },
            {
              "labelEn": "Photolysis of Water Reaction",
              "labelAr": "معادلة الانشطار الضوئي للماء",
              "latex": "2\\text{H}_2\\text{O} \\longrightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Advanced STEM Biology: Cellular & Genetic Engineering Grade 12",
            "bookTitleAr": "الأحياء المتقدمة لمدارس المتفوقين STEM - الصف الثالث الثانوي",
            "grade": "Grade 12 STEM",
            "term": "Semester 1",
            "officialCode": "EGBAC-STEM-BIO-CH1-L4",
            "pageRange": "pp. 111 - 145"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Thylakoid Photophosphorylation & Calvin Cycle",
            "titleAr": "خطة درس: الفسفرة الضوئية في الثايلاكويد وحلقة كالفن",
            "gradeLevel": "Grade 12 STEM Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-STEM-BIO-CH1-L4",
            "bloomsObjectivesEn": [
              "Contrast non-cyclic and cyclic photophosphorylation in terms of ATP and NADPH output.",
              "Calculate the exact ATP and NADPH inputs required to synthesize 1 mole of glucose in the Calvin cycle.",
              "Analyze photosynthetic rate curves under variable light intensity and CO2 concentration based on Blackman's law."
            ],
            "bloomsObjectivesAr": [
              "المقارنة بين الفسفرة الضوئية الدائرية وغير الدائرية من حيث نواتج ATP و NADPH.",
              "حساب مدخلات ATP و NADPH المطلوبة لتخليق مول واحد من الجلوكوز في حلقة كالفن.",
              "تحليل منحنيات معدل البناء الضوئي تحت تأثير شدة الضوء وتركيز ثاني أكسيد الكربون استناداً لقانون بلاكمان."
            ],
            "prerequisitesEn": [
              "Electromagnetic spectrum",
              "Chloroplast structure",
              "Enzyme saturation"
            ],
            "prerequisitesAr": [
              "الطيف الكهرومغناطيسي",
              "تركيب البلاستيدة",
              "تشبع الإنزيمات"
            ],
            "keyVocabularyEn": [
              {
                "term": "RuBisCO",
                "definition": "Ribulose-1,5-bisphosphate carboxylase-oxygenase, the primary carbon-fixing enzyme in photosynthesis."
              },
              {
                "term": "Photolysis",
                "definition": "Light-driven enzymatic cleavage of water into protons, electrons, and molecular oxygen."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "إنزيم روبيسكو",
                "definition": "إنزيم تثبيت الكربون الأساسي في حلقة كالفن الذي يدمج ثاني أكسيد الكربون مع سكر RuBP."
              },
              {
                "term": "التحلل الضوئي للماء",
                "definition": "شطر جزيء الماء بفعل الطاقة الضوئية إلى بروتونات وإلكترونات وغاز الأكسجين."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Light Harvesting & Z-Scheme",
                "phaseAr": "اقتناص الضوء ومخطط Z",
                "duration": "30 mins",
                "activitiesEn": "Tracing electron flows through PS II, Cytochrome b6f, and PS I.",
                "activitiesAr": "تتبع مسار الإلكترونات عبر النظامين الضوئيين."
              },
              {
                "phaseEn": "Calvin Cycle Stoichiometry",
                "phaseAr": "حسابات حلقة كالفن",
                "duration": "30 mins",
                "activitiesEn": "Carbon accounting for 3 turns vs 6 turns to build glucose.",
                "activitiesAr": "حساب ذرات الكربون وعدد الدورات اللازمة لبناء الجلوكوز."
              },
              {
                "phaseEn": "Blackman Limiting Factors",
                "phaseAr": "محددات بلاكمان للبناء الضوئي",
                "duration": "30 mins",
                "activitiesEn": "Analyzing saturation plateaus on light and CO2 graphs.",
                "activitiesAr": "تحليل فترات الثبات والتشبع على منحنيات الضوء وثاني أكسيد الكربون."
              }
            ],
            "commonMisconceptionsEn": [
              "Thinking dark reactions only occur at night (Calvin cycle enzymes require light-activation and depend on daytime ATP/NADPH supplies).",
              "Believing oxygen released comes from CO2 (van Niel and Ruben-Kamen isotope experiments proved oxygen originates from H2O)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن التفاعلات المظلمة تحدث بالليل فقط (تتوقف فور نفاد ATP و NADPH الناتجة نهاراً وتنشط بالضوء).",
              "الظن بأن الأكسجين المنطلق مصدره CO2 (تجارب فان نيل ونظائر الأكسجين أثبتت أن مصدره شطر الماء H2O)."
            ],
            "differentiationEn": {
              "struggling": "Use color-coded carbon bead models to track RuBP (5C) + CO2 (1C) -> 2 x 3-PGA (3C).",
              "advanced": "Compare photorespiration costs in C3 plants vs spatial CO2 pumping in C4 Kranz anatomy plants."
            },
            "differentiationAr": {
              "struggling": "استخدام خرزات ملونة لتمثيل ذرات الكربون في تفاعل 5C + 1C -> 2x 3C.",
              "advanced": "المقارنة بين فقد الطاقة بالتنفس الضوئي في نباتات C3 وآلية ضخ الكربون في نباتات C4."
            },
            "formativeAssessmentEn": "Why did Ruben and Kamen find 18O in released oxygen gas only when plants were supplied with H2(18O) instead of C(18O)2?",
            "formativeAssessmentAr": "ما الدليل الذي استنتجه روبن وكامين عندما ظهر نظير الأكسجين المشع 18O في الغاز المنطلق فقط عند ري النبات بماء مشع H2(18O)؟",
            "exitTicketQuestion": {
              "questionEn": "How many molecules of ATP and NADPH are consumed in the Calvin cycle to produce 1 mole of glucose?",
              "questionAr": "كم جزيئاً من ATP و NADPH يستهلك في حلقة كالفن لتخليق مول واحد من الجلوكوز؟",
              "solutionEn": "18 ATP molecules and 12 NADPH molecules are consumed per glucose molecule.",
              "solutionAr": "يستهلك ١٨ جزيء ATP و ١٢ جزيء NADPH لتخليق جزيء واحد من الجلوكوز."
            }
          },
          "worksheet": {
            "id": "egbac_bio_ws_4",
            "titleEn": "Worksheet: Photophosphorylation & Calvin Cycle Rates",
            "titleAr": "ورقة عمل: الفسفرة الضوئية ومعدلات حلقة كالفن",
            "descriptionEn": "Rigorous problems on photosynthetic photon yields, ATP/NADPH stoichiometry, and Blackman limiting factors.",
            "descriptionAr": "مسائل علمية على استهلاك الطاقة في البناء الضوئي ومحددات بلاكمان.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_bio_ws_p4_1",
                "titleEn": "Energy Consumption for Starch Polymerization",
                "titleAr": "حساب الطاقة المستهلكة في بلمرة جزيء نشا",
                "difficulty": "medium",
                "questionEn": "To synthesize a starch polymer consisting of 100 glucose monomer units, how many total ATP molecules must be consumed by the Calvin-Benson cycle in the chloroplast stroma?",
                "questionAr": "لتخليق مبلمر نشا يتكون من ١٠٠ وحدة جلوكوز، كم جزيء ATP يجب أن يستهلك في حلقة كالفن-بنسون بستروما البلاستيدة الخضراء؟",
                "optionsEn": [
                  "1,800 ATP molecules",
                  "1,200 ATP molecules",
                  "3,600 ATP molecules",
                  "600 ATP molecules"
                ],
                "optionsAr": [
                  "١,٨٠٠ جزيء ATP",
                  "١,٢٠٠ جزيء ATP",
                  "٣,٦٠٠ جزيء ATP",
                  "٦٠٠ جزيء ATP"
                ],
                "correctAnswer": "1,800 ATP molecules",
                "correctIndex": 0,
                "hintEn": "Each single glucose molecule requires 18 ATP in the Calvin cycle (12 for 3-PGA reduction + 6 for RuBP regeneration).",
                "hintAr": "كل جزيء جلوكوز واحد يتطلب ١٨ جزيء ATP في حلقة كالفن (١٢ للاختزال + ٦ لتجديد RuBP).",
                "stepByStepSolutionEn": [
                  "The Calvin cycle requires 18 ATP to produce 1 glucose molecule ($6\\text{ CO}_2$ fixed).",
                  "For 100 glucose units: $100 \\times 18\\text{ ATP} = 1,800$ ATP molecules.",
                  "Therefore, 1,800 ATP molecules are consumed by the cycle."
                ],
                "stepByStepSolutionAr": [
                  "حلقة كالفن تستهلك ١٨ جزيء ATP لتخليق جزيء جلوكوز واحد (تثبيت ٦ جزيئات CO2).",
                  "لبناء ١٠٠ وحدة جلوكوز: $١٠٠ \\times ١٨ = ١,٨٠٠$ جزيء ATP.",
                  "إذن إجمالي الطاقة المستهلكة في الستروما = ١,٨٠٠ جزيء ATP."
                ],
                "teacherTipEn": "Remember that each turn fixing 1 CO2 consumes 3 ATP and 2 NADPH.",
                "teacherTipAr": "تذكر أن كل دورة لتثبيت جزيء CO2 واحد تستهلك ٣ ATP و ٢ NADPH."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Photosynthesis & Blackman Limiting Factors Simulator",
            "titleAr": "محاكي البناء الضوئي ومحددات بلاكمان التجريبية",
            "descriptionEn": "Interactive simulator testing light intensity, CO2 concentration, and temperature curves on oxygen evolution and Calvin cycle flux.",
            "descriptionAr": "محاكاة تفاعلية لاختبار تأثير شدة الضوء وتركيز ثاني أكسيد الكربون ودرجة الحرارة على معدل تصاعد الأكسجين وحلقة كالفن."
          }
        },
        {
          "id": "egbac_bio_l5",
          "titleEn": "Population Genetics, Hardy-Weinberg Law & Microevolution",
          "titleAr": "وراثة العشائر، قانون هاردي-واينبرج وآليات التطور الدقيق",
          "summaryEn": "Gene pools, allele frequencies, the Hardy-Weinberg equilibrium theorem ($p + q = 1$, $p^2 + 2pq + q^2 = 1$), 5 equilibrium conditions, microevolutionary forces (mutation, gene flow, genetic drift, founder/bottleneck effects), and natural selection.",
          "summaryAr": "المجمع الجيني، ترددات الأليلات، معادلة هاردي-واينبرج للاتزان الجيني، شروط الاتزان الخمسة، قوى التطور الدقيق (الانجراف الجيني، الطفرة، تدفق الجينات، تأثير المؤسس)، والانتخاب الطبيعي.",
          "theoryContentEn": "### 1. The Gene Pool and Allele Frequencies\n- **Gene Pool (المجمع الجيني):** The total aggregate of all alleles across all gene loci in all individuals of a biological population at a given time.\n- **Allele Frequency Calculations:**\n  - For a diallelic locus with alleles $A$ (dominant) and $a$ (recessive):\n    $p = \\text{freq}(A) \\quad \\text{and} \\quad q = \\text{freq}(a)$\n    $p + q = 1.0$\n\n### 2. The Hardy-Weinberg Equilibrium Principle (1908)\n- States that allele and genotype frequencies in a population will remain strictly constant from generation to generation in the absence of evolutionary influences.\n- **The Hardy-Weinberg Equation:**\n  $(p + q)^2 = p^2 + 2pq + q^2 = 1.0$\n  - $p^2$: Frequency of homozygous dominant genotype ($AA$).\n  - $2pq$: Frequency of heterozygous carrier genotype ($Aa$).\n  - $q^2$: Frequency of homozygous recessive genotype ($aa$).\n- **Five Mandatory Conditions for Equilibrium:**\n  1. No natural selection (all genotypes possess equal reproductive fitness).\n  2. No mutations (no alteration of allele sequences).\n  3. No gene flow / migration (closed population, no immigration or emigration).\n  4. Extremely large population size (negating genetic drift).\n  5. Completely random mating (panmixia; no sexual selection or assortative mating).\n\n### 3. Mechanisms of Microevolution\n- When any of the 5 equilibrium conditions are violated, microevolution occurs:\n  1. **Genetic Drift (الانجراف الجيني):** Unpredictable allele frequency fluctuations in small populations due to chance sampling:\n     - **Founder Effect:** A few individuals colonize a new habitat, carrying a non-representative fraction of parental alleles.\n     - **Bottleneck Effect:** Severe population crash (natural disaster, famine) drastically cuts genetic diversity.\n  2. **Gene Flow (تدفق الجينات):** Migration of fertile individuals or transfer of gametes between distinct populations.\n  3. **Natural Selection (الانتخاب الطبيعي):** Differential reproductive success altering allele frequencies towards increased environmental fitness. Types:\n     - **Directional Selection:** Favors one phenotypic extreme.\n     - **Disruptive Selection:** Favors both extremes over the intermediate phenotype.\n     - **Stabilizing Selection:** Favors intermediate phenotype, culling extremes.\n  4. **Heterozygote Advantage:** E.g., Sickle-cell allele ($Hb^S$) in malaria-endemic regions: $Hb^A Hb^S$ heterozygotes survive malaria without severe sickle-cell anemia.",
          "theoryContentAr": "### ١. المجمع الجيني وتردد الأليلات\n- **المجمع الجيني (Gene Pool):** المجموع الكلي لجميع الأليلات في جميع المواقع الجينية لكافة أفراد العشيرة في وقت معين.\n- **حساب تردد الأليلات:**\n  - لموقع جيني يحتوي على أليلين: أليل سائد $A$ وأليل متنحٍ $a$:\n    $p = \\text{تردد الأليل السائد } A \\quad \\text{و} \\quad q = \\text{تردد الأليل المتنحي } a$\n    $p + q = ١,٠$\n\n### ٢. مبدأ ومعادلة هاردي-واينبرج للاتزان الوراثي\n- ينص على أن ترددات الأليلات والتراكيب الجينية في عشيرة ما تظل ثابتة تماماً عبر الأجيال المتعاقبة ما لم تؤثر عليها قوى تطورية:\n- **معادلة هاردي-واينبرج:**\n  $p^2 + 2pq + q^2 = ١,٠$\n  - $p^2$: تردد التركيب الجيني السائد متماثل الألائل ($AA$).\n  - $2pq$: تردد التركيب الجيني الهجين الحامل ($Aa$).\n  - $q^2$: تردد التركيب الجيني المتنحي ($aa$).\n- **شروط الاتزان الوراثي الخمسة:**\n  ١. انعدام الانتخاب الطبيعي (تكافؤ فرص البقاء والتكاثر لجميع الطرز).\n  ٢. انعدام الطفرات (عدم تحول أليل لآخر).\n  ٣. انعدام الهجرة وتدفق الجينات (عشيرة معزولة).\n  ٤. كبر حجم العشيرة لدرجة لا نهائية (لتجنب الانجراف الجيني الصدفي).\n  ٥. التزاوج العشوائي التام (Random mating).\n\n### ٣. آليات التطور الدقيق (Microevolution)\n- عند اختلال أي من الشروط الخمسة يتغير المجمع الجيني:\n  ١. **الانجراف الجيني (Genetic Drift):** تغير عشوائي في ترددات الأليلات في العشائر الصغيرة بفعل الصدفة:\n     - **تأثير المؤسس (Founder Effect):** انفصال عدد قليل من الأفراد لتأسيس عشيرة جديدة بعيدة بمجمع جيني غير ممثل للأصل.\n     - **عنق الزجاجة (Bottleneck Effect):** انخفاض حاد ومفاجئ في حجم العشيرة نتيجة كارثة طبيعية يفقدها تنوعها.\n  ٢. **تدفق الجينات (Gene Flow):** انتقال الأفراد الخصبة أو حبوب اللقاح بين عشائر مختلفة.\n  ٣. **الانتخاب الطبيعي:** البقاء للأصلح؛ أنواعه: الاتجاهي (Directional)، التثبيتي (Stabilizing)، والتنويعي المشتت (Disruptive).\n  ٤. **أفضلية الهجين:** مثل جين أنيميا الخلايا المنجلية ($Hb^S$) في مناطق انتشار الملاريا؛ حيث يوفر الطراز الهجين مناعة ضد الملاريا دون الإصابة بالمرض الحاد.",
          "formulas": [
            {
              "labelEn": "Allele Frequency Identity",
              "labelAr": "قانون مجموع ترددات الأليلات",
              "latex": "p + q = 1"
            },
            {
              "labelEn": "Hardy-Weinberg Genotype Equilibrium",
              "labelAr": "معادلة هاردي-واينبرج للتركيب الجيني",
              "latex": "p^2 + 2pq + q^2 = 1"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Advanced STEM Biology: Cellular & Genetic Engineering Grade 12",
            "bookTitleAr": "الأحياء المتقدمة لمدارس المتفوقين STEM - الصف الثالث الثانوي",
            "grade": "Grade 12 STEM",
            "term": "Semester 2",
            "officialCode": "EGBAC-STEM-BIO-CH1-L5",
            "pageRange": "pp. 146 - 180"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Hardy-Weinberg Equilibrium & Population Genetics",
            "titleAr": "خطة درس: اتزان هاردي-واينبرج ووراثة العشائر",
            "gradeLevel": "Grade 12 STEM Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-STEM-BIO-CH1-L5",
            "bloomsObjectivesEn": [
              "Calculate allele frequencies (p, q) and carrier frequencies (2pq) from phenotypic population data.",
              "Differentiate between genetic drift, bottleneck effect, and gene flow using statistical examples.",
              "Assess how directional, stabilizing, and disruptive selection alter phenotypic distributions in wild populations."
            ],
            "bloomsObjectivesAr": [
              "حساب ترددات الأليلات والأفراد الحاملة للمرض بناءً على نسب الأفراد المتنحية في عشيرة.",
              "التمييز بين الانجراف الجيني، عنق الزجاجة، وتدفق الجينات بأمثلة إحصائية.",
              "تقييم تأثير أنماط الانتخاب الطبيعي على منحنيات التوزيع التكراري للصفات في الطبيعة."
            ],
            "prerequisitesEn": [
              "Mendelian monohybrid crosses",
              "Probability multiplication and addition rules"
            ],
            "prerequisitesAr": [
              "تزاوجات مندل الأحادية",
              "قواعد الاحتمالات (الضرب والجمع)"
            ],
            "keyVocabularyEn": [
              {
                "term": "Genetic Drift",
                "definition": "Unpredictable fluctuations in allele frequencies from one generation to the next due to chance in small populations."
              },
              {
                "term": "Heterozygote Advantage",
                "definition": "Greater reproductive fitness of heterozygous individuals compared to homozygous individuals at a locus."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "الانجراف الجيني",
                "definition": "تغير عشوائي غير موجه في ترددات الأليلات عبر الأجيال بفعل الصدفة الإحصائية في العشائر الصغيرة."
              },
              {
                "term": "أفضلية الطراز الهجين",
                "definition": "امتلاك الأفراد الهجينة قدرة تكيفية وتكاثرية أعلى من كلا الطرازين متماثلي الألائل."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Hardy-Weinberg Derivation",
                "phaseAr": "استنتاج قانون هاردي-واينبرج",
                "duration": "30 mins",
                "activitiesEn": "Deriving p^2 + 2pq + q^2 = 1 from Punnett square of gametes.",
                "activitiesAr": "استنتاج معادلة التراكيب الجينية من مربع بانيت للأمشاج."
              },
              {
                "phaseEn": "Calculating Carrier Frequencies",
                "phaseAr": "مسائل حساب الأفراد الحاملة",
                "duration": "30 mins",
                "activitiesEn": "Solving cystic fibrosis and albinism epidemiological problems.",
                "activitiesAr": "حل مسائل الألبينو والتليف الكيسي في العشائر البشرية."
              },
              {
                "phaseEn": "Mechanisms of Microevolution",
                "phaseAr": "آليات التطور الدقيق",
                "duration": "30 mins",
                "activitiesEn": "Simulating bottleneck vs founder effects on bead populations.",
                "activitiesAr": "محاكاة تأثير عنق الزجاجة وانخفاض التنوع الجيني."
              }
            ],
            "commonMisconceptionsEn": [
              "Assuming dominant alleles always increase in frequency over time (dominant alleles only increase if favored by natural selection).",
              "Confusing allele frequency (p, q) with genotype frequency (p^2, 2pq, q^2)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن الأليل السائد يزداد تردده تلقائياً بمرور الزمن (التردد يثبت ما لم يوجد انتخاب طبيعي لصالحه).",
              "الخلط بين تردد الأليل المفرد (p, q) وتردد الطراز الجيني الثنائي (p^2, 2pq, q^2)."
            ],
            "differentiationEn": {
              "struggling": "Step-by-step guideline: Always find q^2 first (recessive phenotype), take square root to get q, then p = 1 - q.",
              "advanced": "Extend Hardy-Weinberg to a 3-allele locus (ABO blood group: (p + q + r)^2 = 1)."
            },
            "differentiationAr": {
              "struggling": "قاعدة ذهبية: ابدأ دائماً بحساب q^2 (الصفة المتنحية)، ثم خذ الجذر التربيعي لـ q، ثم احسب p = 1 - q.",
              "advanced": "توسيع معادلة هاردي-واينبرج لنظام فصائل الدم ABO ثلاثي الأليلات: (p + q + r)^2 = 1."
            },
            "formativeAssessmentEn": "Why do isolated island populations frequently exhibit elevated rates of rare recessive genetic disorders?",
            "formativeAssessmentAr": "فسر: لماذا تظهر بعض الأمراض الوراثية المتنحية النادرة بنسب عالية في سكان الجزر المنعزلة؟",
            "exitTicketQuestion": {
              "questionEn": "In a population in Hardy-Weinberg equilibrium, 16% of individuals exhibit a recessive trait ($q^2 = 0.16$). What percentage of the population are heterozygous carriers ($2pq$)?",
              "questionAr": "في عشيرة خاضعة لاتزان هاردي-واينبرج، تبلغ نسبة الأفراد ذوي الصفة المتنحية ١٦٪ ($q^2 = ٠,١٦$). فما نسبة الأفراد الهجينة الحاملة للمرض ($2pq$) في هذه العشيرة؟",
              "solutionEn": "$q = \\sqrt{0.16} = 0.40 \\implies p = 1 - 0.40 = 0.60$. Heterozygotes $2pq = 2 \\times 0.60 \\times 0.40 = 0.48 = 48\\%$.",
              "solutionAr": "$q = \\sqrt{٠,١٦} = ٠,٤٠ \\implies p = ١ - ٠,٤٠ = ٠,٦٠$. نسبة الهجين $2pq = ٢ \\times ٠,٦٠ \\times ٠,٤٠ = ٠,٤٨ = ٤٨٪$."
            }
          },
          "worksheet": {
            "id": "egbac_bio_ws_5",
            "titleEn": "Worksheet: Population Genetics & Hardy-Weinberg Algebra",
            "titleAr": "ورقة عمل: وراثة العشائر وجبر هاردي-واينبرج",
            "descriptionEn": "Rigorous epidemiological problems calculating carrier risks, allele shifts, and selection coefficients.",
            "descriptionAr": "مسائل وبائية دقيقة لحساب احتمالات ولادة أطفال مصابين ونسب الأفراد الحاملة للمرض.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_bio_ws_p5_1",
                "titleEn": "Calculating Carrier Frequency in Autosomal Recessive Condition",
                "titleAr": "حساب نسبة الأفراد الحاملة لمرض وراثي متنحٍ",
                "difficulty": "medium",
                "questionEn": "In a human population of 10,000 people in Hardy-Weinberg equilibrium, 1 person in 2,500 has cystic fibrosis (autosomal recessive, $aa$). How many individuals in this population are expected to be heterozygous carriers ($Aa$)?",
                "questionAr": "في عشيرة بشرية تعدادها ١٠,٠٠٠ شخص تخضع لاتزان هاردي-واينبرج، يولد شخص واحد مصاب بالتليف الكيسي (مرض جسدي متنحٍ $aa$) من بين كل ٢,٥٠٠ شخص. كم يتوقع أن يكون عدد الأفراد الحاملين للمرض ($Aa$) في هذه العشيرة؟",
                "optionsEn": [
                  "392 carriers",
                  "400 carriers",
                  "196 carriers",
                  "960 carriers"
                ],
                "optionsAr": [
                  "٣٩٢ شخصاً حاملاً",
                  "٤٠٠ شخص حامل",
                  "١٩٦ شخصاً حاملاً",
                  "٩٦٠ شخصاً حاملاً"
                ],
                "correctAnswer": "392 carriers",
                "correctIndex": 0,
                "hintEn": "$q^2 = 1 / 2500 = 0.0004$. Find $q$, then $p = 1 - q$, then calculate $2pq \\times 10,000$.",
                "hintAr": "$q^2 = ١ / ٢٥٠٠ = ٠,٠٠٠٤$. احسب $q$ ثم $p = ١ - q$ ثم احسب $2pq \\times ١٠,٠٠٠$.",
                "stepByStepSolutionEn": [
                  "$q^2 = \\frac{1}{2500} = 0.0004 \\implies q = \\sqrt{0.0004} = 0.02$.",
                  "$p = 1 - q = 1 - 0.02 = 0.98$.",
                  "Carrier frequency $2pq = 2(0.98)(0.02) = 0.0392 = 3.92\\%$.",
                  "Number of carriers in 10,000 people = $0.0392 \\times 10,000 = 392$ individuals."
                ],
                "stepByStepSolutionAr": [
                  "$q^2 = \\frac{١}{٢٥٠٠} = ٠,٠٠٠٤ \\implies q = \\sqrt{٠,٠٠٠٤} = ٠,٠٢$.",
                  "$p = ١ - q = ١ - ٠,٠٢ = ٠,٩٨$.",
                  "تردد الأفراد الحاملة $2pq = ٢(٠,٩٨)(٠,٠٢) = ٠,٠٣٩٢ = ٣,٩٢٪$.",
                  "عدد الأفراد الحاملين في عشيرة من ١٠,٠٠٠ = $٠,٠٣٩٢ \\times ١٠,٠٠٠ = ٣٩٢$ فرداً."
                ],
                "teacherTipEn": "Notice that even for very rare recessive disorders ($1/2500$), carriers are surprisingly common (~4% of the population).",
                "teacherTipAr": "لاحظ أنه حتى للأمراض النادرة جداً (١ من ٢٥٠٠)، يكون تردد الحاملين كبيراً نسبياً (نحو ٤٪ من السكان)."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Hardy-Weinberg Population Genetics Simulator",
            "titleAr": "محاكي وراثة العشائر وقانون هاردي-واينبرج",
            "descriptionEn": "Interactive allele frequency grapher and random genetic drift simulator across generations.",
            "descriptionAr": "محاكاة تفاعلية لتغير ترددات الأليلات ومنحنيات هاردي-واينبرج والانجراف الجيني عبر الأجيال."
          }
        }
      ],
      solvedExamples: [
        {
          id: 'egbac_bio_se_01',
          titleEn: 'Example 1: Polypeptide Coding Length from mRNA Sequence',
          titleAr: 'مثال ١: تحديد طول سلسلة الببتيد من تتابع نيوكليوتيدات mRNA',
          difficulty: 'easy',
          questionEn: 'An mRNA molecule has a coding sequence of 450 nucleotides starting with the AUG start codon and ending with a UAA stop codon. How many amino acids will comprise the translated polypeptide chain?',
          questionAr: 'شريط mRNA يحتوي على تتابع مشفر طوله ٤٥٠ نيوكليوتيدة يبدأ بكودون البدء AUG وينتهي بكودون الوقف UAA. كم عدد الأحماض الأمينية في سلسلة عديد الببتيد الناتجة عن ترجمته؟',
          optionsEn: ['149 amino acids', '150 amino acids', '450 amino acids', '148 amino acids'],
          optionsAr: ['١٤٩ حمضاً أمينياً', '١٥٠ حمضاً أمينياً', '٤٥٠ حمضاً أمينياً', '١٤٨ حمضاً أمينياً'],
          correctAnswer: '149 amino acids',
          correctIndex: 0,
          hintEn: 'Total codons = 450 / 3 = 150 codons. Remember the stop codon does NOT code for an amino acid.',
          hintAr: 'إجمالي الكودونات = 450 / 3 = 150 كودوناً. تذكر أن كودون الوقف لا يترجم إلى حمض أميني.',
          stepByStepSolutionEn: [
            'Total codons on the mRNA: $N_{\\text{codons}} = \\frac{450}{3} = 150$ triplet codons.',
            'The AUG start codon translates into the first amino acid (Methionine).',
            'The UAA stop codon signals termination and binds a release factor, coding for NO amino acid.',
            'Therefore, the number of amino acids in the polypeptide chain is $150 - 1 = 149$ amino acids.'
          ],
          stepByStepSolutionAr: [
            'عدد الكودونات الكلية: $450 / 3 = 150$ كودوناً ثلاثياً.',
            'كودون البدء AUG يُترجم إلى الحمض الأميني الأول (الميثيونين).',
            'كودون الوقف UAA يرتبط بعامل الإطلاق لإنهاء الترجمة ولا يُشفر أي حمض أميني.',
            'إذن عدد الأحماض الأمينية في السلسلة = $150 - 1 = 149$ حمضاً أمينياً.'
          ],
          teacherTipEn: 'A very common ministerial exam trap: always subtract 1 for the stop codon when converting total mRNA codons to amino acids.',
          teacherTipAr: 'فخ امتحاني كلاسيكي: لا تنس دائماً طرح كودون الوقف (1-) عند حساب عدد الأحماض الأمينية.'
        },
        {
          id: 'egbac_bio_se_02',
          titleEn: 'Example 2: Meselson-Stahl Density Centrifugation Analysis',
          titleAr: 'مثال ٢: تحليل تجربة ميسلسون وستال في أجهزة الطرد المركزي فائقة السرعة',
          difficulty: 'medium',
          questionEn: 'E. coli bacteria grown in heavy isotope $^{15}\\text{N}$ medium for many generations were transferred to light isotope $^{14}\\text{N}$ medium and allowed to divide for exactly two generation cycles. What percentage of the resulting DNA molecules are hybrid ($^{15}\\text{N}-^{14}\\text{N}$)?',
          questionAr: 'بكتيريا إيشيريشيا كولاي نُميت في وسط يحتوي على نيتروجين ثقيل $^{15}\\text{N}$ لأجيال عديدة، ثم نُقلت إلى وسط يحتوي على نيتروجين خفيف $^{14}\\text{N}$ وتُركت لتتضاعف لجيلين متتاليين. ما النسبة المئوية لجزيئات DNA الهجينة ($^{15}\\text{N}-^{14}\\text{N}$)؟',
          optionsEn: ['50% hybrid molecules', '100% hybrid molecules', '25% hybrid molecules', '0% hybrid molecules'],
          optionsAr: ['٥٠٪ جزيئات هجينة', '١٠٠٪ جزيئات هجينة', '٢٥٪ جزيئات هجينة', 'صفر٪ جزيئات هجينة'],
          correctAnswer: '50% hybrid molecules',
          correctIndex: 0,
          hintEn: 'Generation 0: 1 heavy DNA (2 strands 15N). Generation 1: 2 hybrid DNAs. Generation 2: 4 DNAs total.',
          hintAr: 'الجيل الأول: جزيئان كلاهما هجين (100%). الجيل الثاني: يتضاعفان إلى 4 جزيئات، اثنان هجينان واثنان خفيفان تماماً.',
          stepByStepSolutionEn: [
            'Initial parental DNA: 1 double-stranded molecule ($^{15}\\text{N}-^{15}\\text{N}$).',
            'Generation 1 (in $^{14}\\text{N}$): 2 DNA molecules, both are hybrid ($^{15}\\text{N}-^{14}\\text{N}$) (100% hybrid).',
            'Generation 2 (in $^{14}\\text{N}$): 4 DNA molecules total. The two original $^{15}\\text{N}$ parental strands form 2 hybrid molecules ($^{15}\\text{N}-^{14}\\text{N}$), and the two $^{14}\\text{N}$ strands form 2 completely light molecules ($^{14}\\text{N}-^{14}\\text{N}$).',
            'Percentage of hybrid molecules: $\\frac{2}{4} \\times 100\\% = 50\\%$.'
          ],
          stepByStepSolutionAr: [
            'الجزيء الأبوي الابتدائي: جزيء ثقيل كلياً ($^{15}\\text{N}-^{15}\\text{N}$).',
            'الجيل الأول (في وسط $^{14}\\text{N}$): يتكون جزيئان، كلاهما هجين ($^{15}\\text{N}-^{14}\\text{N}$) بنسبة 100%.',
            'الجيل الثاني (في وسط $^{14}\\text{N}$): يتكون 4 جزيئات. الشريطان الثقيلان الأصليان يعطيان جزيئين هجينين، والشريطان الخفيفان يعطيان جزيئين خفيفين ($^{14}\\text{N}-^{14}\\text{N}$).',
            'نسبة الجزيئات الهجينة = $\\frac{2}{4} \\times 100\\% = 50\\%$.'
          ],
          teacherTipEn: 'Notice that the absolute number of hybrid molecules remains strictly constant at 2 across all subsequent generations, while the fraction diminishes as 2/2^n.',
          teacherTipAr: 'لاحظ أن العدد المطلق للجزيئات الهجينة يظل ثابتاً دائماً (جزيئان فقط) في جميع الأجيال التالية، بينما تتضاءل نسبتها وفق $2/2^n$.'
        }
      ],
      exerciseProblems: [
        {
          id: 'egbac_bio_ue_01',
          titleEn: 'Antiparallel Strand Directionality and Phosphodiester Linkages',
          titleAr: 'اتجاه الأشرطة المتعاكسة والروابط التساهمية الفوسفاتية',
          difficulty: 'medium',
          questionEn: "If a single DNA strand has the base sequence 5'-A-T-G-C-T-A-3', which option represents the correctly oriented complementary strand synthesized by DNA polymerase?",
          questionAr: "إذا كان تتابع القواعد في شريط مفرد من DNA هو 5'-A-T-G-C-T-A-3'، فما هو التتابع الصحيح للشريط المكمل له بالاتجاه الصحيح؟",
          optionsEn: [
            "5'-T-A-G-C-A-T-3' (or 3'-T-A-C-G-A-T-5')",
            "5'-A-T-G-C-T-A-3'",
            "3'-A-T-G-C-T-A-5'",
            "5'-U-A-G-C-A-U-3'"
          ],
          optionsAr: [
            "5'-T-A-G-C-A-T-3' (أو 3'-T-A-C-G-A-T-5')",
            "5'-A-T-G-C-T-A-3'",
            "3'-A-T-G-C-T-A-5'",
            "5'-U-A-G-C-A-U-3'"
          ],
          correctAnswer: "5'-T-A-G-C-A-T-3' (or 3'-T-A-C-G-A-T-5')",
          correctIndex: 0,
          hintEn: "Pair A with T and G with C, keeping in mind the strands run antiparallel (5' to 3' aligns with 3' to 5').",
          hintAr: "زاوج A مع T و G مع C وتذكر أن الشريطين متعاكسان، فالطرف 5' يقابله الطرف 3'.",
          stepByStepSolutionEn: [
            "Given template strand: 5'-A-T-G-C-T-A-3'.",
            "Direct complementary base pairing gives: 3'-T-A-C-G-A-T-5'.",
            "Reading this complementary strand from 5' to 3' yields: 5'-T-A-G-C-A-T-3'."
          ],
          stepByStepSolutionAr: [
            "الشريط المعطى: 5'-A-T-G-C-T-A-3'.",
            "التكامل المباشر للقواعد يعطي: 3'-T-A-C-G-A-T-5'.",
            "عند قراءة هذا الشريط المكمل من الطرف 5' إلى الطرف 3' يصبح: 5'-T-A-G-C-A-T-3'."
          ],

          teacherTipEn: 'Exam conventions typically present sequences 5-to-3 unless explicitly stated otherwise.',
          teacherTipAr: 'في الامتحانات الوزارية تُكتب التتابعات دوماً من الطرف 5 إلى 3 ما لم يُنص على غير ذلك صراحة.'
        }
      ],
      databank: egBacBioCh1Databank
    }
  ]
};

