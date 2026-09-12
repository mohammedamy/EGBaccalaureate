import type { Branch } from '../types/curriculum';

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
          summaryEn: 'Detailed exploration of DNA as genetic material, antiparallel double helix, phosphodiester bonds, Chargaff stoichiometry %A=%T and %G=%C, DNA replication enzymes (helicase, primase, DNA polymerase III, ligase), mRNA transcription, and ribosomal peptide synthesis.',
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
      databank: {
        easy: [
          {
            id: 'egbac_bio_db_easy_01',
            titleEn: 'Identity of Bacteriophage Transforming Factor',
            titleAr: 'تحديد المادة الوراثية في تجربة هيرشي وتشيس',
            difficulty: 'easy',
            questionEn: 'In Hershey and Chase bacteriophage experiments, which chemical element was radioactively labeled to track the viral genetic material inside infected bacterial cells?',
            questionAr: 'في تجربة هيرشي وتشيس على الفيروسات، ما العنصر الكيميائي المشع الذي استُخدم لتتبع انتقال المادة الوراثية الفيروسية إلى داخل الخلايا البكتيرية؟',
            optionsEn: [
              'Radioactive phosphorus ($^{32}\\text{P}$) because phosphorus is present exclusively in DNA nucleotides but absent in viral proteins',
              'Radioactive sulfur ($^{35}\\text{S}$) because sulfur forms the core of purine bases',
              'Radioactive carbon ($^{14}\\text{C}$) because it selectively labels ribose sugars',
              'Radioactive nitrogen ($^{15}\\text{N}$) to distinguish between capsid and tail fibers'
            ],
            optionsAr: [
              'الفوسفور المشع ($^{32}\\text{P}$) لأن الفوسفور يدخل حصراً في تركيب نيوكليوتيدات الـ DNA وينعدم في بروتين الغلاف',
              'الكبريت المشع ($^{35}\\text{S}$) لأنه يدخل في تركيب القواعد النيتروجينية',
              'الكربون المشع ($^{14}\\text{C}$) لتمييز سكر الريبوز في الفيروسات',
              'النيتروجين المشع ($^{15}\\text{N}$) لتمييز رأس الفيروس عن ذيله'
            ],
            correctAnswer: 'Radioactive phosphorus ($^{32}\\text{P}$) because phosphorus is present exclusively in DNA nucleotides but absent in viral proteins',
            correctIndex: 0,
            hintEn: 'Phosphorus is abundant in nucleic acid backbones (phosphate groups) but absent in standard amino acids.',
            hintAr: 'الفوسفور مكون أساسي لمجموعات الفوسفات في الأحماض النووية، بينما لا يدخل في تركيب بروتين الغلاف.'
          ,
            stepByStepSolutionEn: [
              'DNA contains abundant phosphorus in its sugar-phosphate backbone, but contains no sulfur.',
              'Viral proteins contain sulfur in amino acids (cysteine, methionine), but contain no phosphorus.',
              'Therefore, Hershey and Chase used $^{32}\\text{P}$ to specifically label and track DNA into the host bacterium.'
            ],
            stepByStepSolutionAr: [
              'يحتوي DNA على الفوسفور بكثرة في هيكل السكر والفوسفات، بينما يخلو تماماً من الكبريت.',
              'يحتوي الغلاف البروتيني للفيروس على الكبريت في بعض الأحماض الأمينية (الميثيونين والسيستين)، بينما يخلو من الفوسفور.',
              'لذا استخدم هيرشي وتشيس الفوسفور المشع $^{32}\\text{P}$ لتتبع دخول مادة الـ DNA حصراً إلى داخل البكتيريا.'
            ],
            teacherTipEn: 'Always link 32P with DNA and 35S with Protein.',
            teacherTipAr: 'تذكر دائماً الربط الذهني: P-32 مع الـ DNA، و S-35 مع البروتين.'
          }
        ],
        medium: [
          {
            id: 'egbac_bio_db_med_01',
            titleEn: 'Enzymatic Resolution of Lagging Strand Okazaki Fragments',
            titleAr: 'الدور الإنزيمي في تجميع قطع أوكازاكي على الشريط المتأخر',
            difficulty: 'medium',
            questionEn: 'Which enzyme is biologically responsible for creating covalent phosphodiester bonds to join adjacent Okazaki fragments on the lagging strand during DNA replication?',
            questionAr: 'ما الإنزيم المسؤول بيولوجياً عن تكوين الروابط التساهمية الفوسفاتية لربط قطع أوكازاكي المتجاورة على الشريط المتأخر أثناء تضاعف DNA؟',
            optionsEn: [
              'DNA Ligase',
              'DNA Polymerase III',
              'DNA Helicase',
              'RNA Primase'
            ],
            optionsAr: [
              'إنزيم الربط (DNA Ligase)',
              'إنزيم بلمرة DNA (DNA Polymerase)',
              'إنزيم اللولب (DNA Helicase)',
              'إنزيم البادئ (RNA Primase)'
            ],
            correctAnswer: 'DNA Ligase',
            correctIndex: 0,
            hintEn: 'This enzyme repairs nicks in the sugar-phosphate backbone by forming phosphodiester bonds.',
            hintAr: 'هذا الإنزيم يصل الفجوات في هيكل السكر والفوسفات بإنشاء روابط تساهمية قوية.'
          ,
            stepByStepSolutionEn: [
              'During lagging strand synthesis, DNA Polymerase synthesizes disconnected Okazaki fragments.',
              'After RNA primers are removed and replaced with DNA nucleotides, nicks remain in the sugar-phosphate backbone.',
              'DNA Ligase utilizes ATP/NAD to form phosphodiester bonds between adjacent $3\\prime-\\text{OH}$ and $5\\prime-\\text{phosphate}$ groups, sealing the backbone.'
            ],
            stepByStepSolutionAr: [
              'أثناء تضاعف الشريط المتأخر، يبني إنزيم البلمرة قطعاً منفصلة تُعرف بقطع أوكازاكي.',
              'بعد استبدال بوادئ الـ RNA بنيوكليوتيدات DNA، تبقى فجوات في هيكل السكر والفوسفات.',
              'يقوم إنزيم الربط (DNA Ligase) بتكوين روابط فوسفاتية ثنائية الإستر بين طرف الهيدروكسيل 3\' وطرف الفوسفات 5\' ليلتئم الشريط.'
            ],
            teacherTipEn: 'DNA Ligase is also widely used in recombinant DNA genetic engineering to insert genes into plasmids.',
            teacherTipAr: 'إنزيم الربط يُستخدم أيضاً بكثرة في الهندسة الوراثية وتكنولوجيا الحمض النووي معاد الاتحاد لدمج الجينات في البلازميدات.'
          }
        ],
        hots: [
          {
            id: 'egbac_bio_db_hots_01',
            titleEn: 'Point Mutation Classification: Nonsense vs Missense Effects',
            titleAr: 'تصنيف الطفرات النقطية: الطفرة عديمة المعنى وتأثيرها على البروتين',
            difficulty: 'hots',
            questionEn: "A substitution mutation changes a single nucleotide in an exon from codon 5'-U-A-C-3' (coding for Tyrosine) to 5'-U-A-A-3'. What is the precise classification of this mutation and its phenotypic consequence on the resulting protein?",
            questionAr: "حدثت طفرة استبدال لنيوكليوتيدة واحدة في إكسون مشفر فتحول الكودون من 5'-U-A-C-3' (يشفر التيروزين) إلى 5'-U-A-A-3'. ما التصنيف الدقيق لهذه الطفرة وتأثيرها على بنية البروتين الناتج؟",
            optionsEn: [
              'Nonsense mutation causing premature translation termination and producing a truncated, usually nonfunctional polypeptide',
              'Silent mutation because the degenerate genetic code incorporates another aromatic amino acid',
              'Missense mutation that replaces Tyrosine with a hydrophobic residue without altering chain length',
              'Frameshift mutation that scrambles all downstream triplet codons'
            ],
            optionsAr: [
              'طفرة عديمة المعنى (Nonsense mutation) تؤدي إلى وقف مبكر للترجمة وإنتاج بروتين ناقص (مبتور) فاقد للوظيفة غالباً',
              'طفرة صامتة لأن الشفرة الوراثية تحافظ على نفس الحمض الأميني',
              'طفرة خاطئة المعنى تستبدل التيروزين بحمض آخر دون التأثير على طول السلسلة',
              'طفرة إزاحة إطار تُحدث فوضى في قراءة جميع الكودونات التالية'
            ],
            correctAnswer: 'Nonsense mutation causing premature translation termination and producing a truncated, usually nonfunctional polypeptide',
            correctIndex: 0,
            hintEn: 'UAA is one of the three universal stop codons (along with UAG and UGA).',
            hintAr: 'الكودون UAA هو أحد كودونات الوقف الثلاثة في الخلية (مع UAG و UGA).'
          ,
            stepByStepSolutionEn: [
              'The nucleotide substitution converts $UAC$ (Tyrosine) to $UAA$.',
              'Because $UAA$ is a stop (termination) codon, translation halts prematurely when the ribosome encounters it.',
              'This type of mutation is termed a **nonsense mutation**.',
              'The synthesized polypeptide chain is truncated (shortened), which typically destroys its tertiary folding and biological activity.'
            ],
            stepByStepSolutionAr: [
              'استبدال النيوكليوتيدة حول الكودون المشفر للتيروزين $UAC$ إلى $UAA$.',
              'بما أن $UAA$ هو كودون وقف، فإن الريبوسوم يتوقف فوراً عن الترجمة عند وصوله إليه.',
              'تُسمى هذه الطفرة **طفرة عديمة المعنى (Nonsense mutation)**.',
              'تؤدي إلى تخليق سلسلة ببتيدية قصيرة ومبتورة تفقد طياتها الفراغية وتفقد نشاطها الحيوي في معظم الحالات.'
            ],
            teacherTipEn: 'Contrast this with missense mutations (which change one amino acid to another) and silent mutations (synonymous codons).',
            teacherTipAr: 'قارن دائماً بين الطفرة عديمة المعنى (تخلق كودون وقف) وطفرة تبديل المعنى (تغير حمضاً بآخر) والطفرة الصامتة (لا تغير الحمض).'
          }
        ]
      }
    }
  ]
};
