import type { Branch } from '../types/curriculum';
import { egbac_biotechnology_ch1SolvedExamples, egbac_biotechnology_ch1ExerciseProblems } from './textbook/egbac/egBacBiotechnologyCh1Textbook';
import { egbac_biotechnology_ch2SolvedExamples, egbac_biotechnology_ch2ExerciseProblems } from './textbook/egbac/egBacBiotechnologyCh2Textbook';
import { egbac_biotechnology_ch3SolvedExamples, egbac_biotechnology_ch3ExerciseProblems } from './textbook/egbac/egBacBiotechnologyCh3Textbook';
import { egbac_biotechnology_ch4SolvedExamples, egbac_biotechnology_ch4ExerciseProblems } from './textbook/egbac/egBacBiotechnologyCh4Textbook';
import { egbac_biotechnology_ch1Databank } from './databanks/egbac/egBacBiotechnologyCh1Databank';
import { egbac_biotechnology_ch2Databank } from './databanks/egbac/egBacBiotechnologyCh2Databank';
import { egbac_biotechnology_ch3Databank } from './databanks/egbac/egBacBiotechnologyCh3Databank';
import { egbac_biotechnology_ch4Databank } from './databanks/egbac/egBacBiotechnologyCh4Databank';

export const egBacBiotechnologyBranch: Branch = {
  id: 'egbac_biotechnology',
  titleEn: 'Genomic Engineering, Bioinformatics & Synthetic Systems',
  titleAr: 'الهندسة الجينومية، المعلوماتية الحيوية والنظم التخليقية',
  iconName: 'Dna',
  colorGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
  categoryEn: 'Genomic Engineering & Bioinformatics',
  categoryAr: 'الهندسة الجينومية والمعلوماتية الحيوية',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_biotechnology_ch1',
      chapterNumber: 1,
      titleEn: 'Next-Generation Sequencing, Nanopores & Transcriptomics',
      titleAr: 'تسلسل الجيل القادم، مساير النانوبور والترانسكريبتوميكس',
      descriptionEn: 'Illumina reversible terminators, bridge amplification, Oxford Nanopore ionic current translocation, RNA-Seq TPM quantification, and epigenetic methylation mapping.',
      descriptionAr: 'نهايات إلومينا العكوسة، التضخيم الجسري، انتقال التيار في نانوبور، القياس الكمي لـ RNA-Seq بـ TPM، ورسم خرائط الميثلة فوق الجينية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_biotechnology_ch1_l1',
          titleEn: 'Next-Generation Sequencing Chemistries, Nanopores & Transcriptomics',
          titleAr: 'كيمياء تسلسل الجيل القادم، مساير النانوبور والتحليلات الترانسكريبتومية',
          summaryEn: 'Cyclic reversible terminator synthesis, bridge PCR clusters, nanopore k-mer ionic disruption, and RNA-Seq length-normalized TPM calculations.',
          summaryAr: 'بناء النيوكليوتيدات بالنهايات العكوسة، عناقيد PCR الجسرية، إشارات تيار النانوبور، وحسابات TPM المعايرة لطول الجينات.',
          theoryContentEn: 'Advanced genomics decodes complex genomes through massively parallel high-throughput sequencing technologies. Illumina sequencing-by-synthesis utilizes fluorescently labeled 3\'-O-azidomethyl reversible terminator dNTPs to capture optical single-base incorporations across millions of clonally clustered bridge-amplified templates. Oxford Nanopore sequencing drives single-stranded native DNA molecules electrophoretically through biological protein nanopores, detecting real-time disruptions in ionic current modulated by translocation k-mers; this achieves ultra-long read lengths (N50 > 40 kb) and direct epigenetic 5-methylcytosine identification without bisulfite damage. In quantitative transcriptomics, RNA-Seq measures cellular gene expression, converting raw sequencing read counts into Transcripts Per Million (TPM) by normalizing first for transcript coding length and subsequently for total library sequencing depth.',
          theoryContentAr: 'تفكك الجينوميات المتقدمة الشفرات الوراثية المعقدة عبر تقنيات التسلسل فائق الإنتاجية بالتوازي الهائل. ويستخدم تسلسل إلومينا نيوكليوتيدات dNTPs ذات نهايات عكوسة وموسومة فلورياً لتسجيل إضافة قاعدة مفردة ضوئياً عبر ملايين العناقيد المتكونة بالتضخيم الجسري. بينما تمرر تقنية أكسفورد نانوبور جزيئات DNA الأصلية أحادية الشريط عبر ثقوب بروتينية، راصدة اضطرابات التيار الأيوني اللحظية؛ محققة قراءات فائقة الطول (N50 > 40 kb) ورصداً مباشراً لميثلة السيتوزين (5mC) دون تلف كيميائي. وفي الترانسكريبتوميكس، يقيس RNA-Seq التعبير الجيني معايراً عدد القراءات بطول الجين وعمق المكتبة بوحدة TPM.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Biotechnology Curriculum',
            bookTitleAr: 'منهج البكالوريا المصرية في الهندسة الجينومية والمعلوماتية الحيوية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-BIOTECH-G12-MOD1',
            pageRange: 'pp. 1-82'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Flow Cell Throughput, Nanopore Physics & TPM Normalization',
            titleAr: 'خطة الدرس: إنتاجية شرائح التدفق، فيزياء النانوبور ومعايرة تعبير TPM',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Calculate total raw genomic sequencing yield from cluster density and read lengths',
              'Analyze ionic current disruption waveforms in biological nanopores during translocation',
              'Formulate and execute two-step TPM normalization for differential RNA-Seq expression'
            ]
          },
          worksheet: {
            id: 'ws_egbac_biotechnology_ch1_l1',
            titleEn: 'Worksheet 1: NGS Flow Cell Gigabase Yields & TPM Metrics',
            titleAr: 'ورقة عمل 1: إنتاجية الجيجابايت لشرائح NGS ومقاييس وفرة TPM',
            descriptionEn: 'Compute gigabase throughput, nanopore translocation durations, and length-normalized gene expression TPM values.',
            descriptionAr: 'حساب إنتاجية الجيجابايت، وأزمنة مرور شريط DNA في النانوبور، وقيم TPM المعايرة لطول الجين.',
            estimatedTimeMinutes: 45,
            problems: egbac_biotechnology_ch1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'ngs_sequencing_flow_simulator',
            titleEn: 'Illumina & Oxford Nanopore Sequencing Simulator',
            titleAr: 'محاكي تسلسل الجيل القادم وتيار النانوبور',
            descriptionEn: 'Explore 4-color reversible terminator fluorescence chemistry and real-time ionic current trace translocation across synthetic nanopores.',
            descriptionAr: 'استكشاف كيمياء الفلورة رباعية الألوان ونبضات التيار الأيوني اللحظية عبر ثقوب النانوبور.'
          }
        }
      ],
      solvedExamples: egbac_biotechnology_ch1SolvedExamples,
      exerciseProblems: egbac_biotechnology_ch1ExerciseProblems,
      databank: egbac_biotechnology_ch1Databank
    },
    {
      id: 'egbac_biotechnology_ch2',
      chapterNumber: 2,
      titleEn: 'Computational Bioinformatics, Sequence Alignment & AlphaFold',
      titleAr: 'المعلوماتية الحيوية الحاسوبية، محاذاة التتابعات والتنبؤ بـ AlphaFold',
      descriptionEn: 'Needleman-Wunsch global dynamic programming, Smith-Waterman local alignment, BLAST E-value heuristics, BLOSUM62 matrices, and AlphaFold 3D protein structure prediction.',
      descriptionAr: 'البرمجة الديناميكية لمحاذاة Needleman-Wunsch، ومحاذاة Smith-Waterman الموضعية، إحصاءات BLAST، مصفوفات BLOSUM62، ونمذجة AlphaFold ثلاثية الأبعاد.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_biotechnology_ch2_l1',
          titleEn: 'Dynamic Programming Alignments, BLAST Statistics & Structural AlphaFold',
          titleAr: 'محاذاة البرمجة الديناميكية، إحصاءات BLAST ونمذجة AlphaFold البنيوية',
          summaryEn: 'Dynamic programming matrix recurrences, BLAST word indexing, Karlin-Altschul E-value statistics, and Evoformer structural predictions.',
          summaryAr: 'معادلات البرمجة الديناميكية التكرارية، فهرسة كلمات BLAST، إحصاءات القيمة المتوقعة (E-value)، وتنبؤات Evoformer البنيوية.',
          theoryContentEn: 'Computational bioinformatics derives mechanistic biological insights from biological sequence and structural data. Pairwise sequence alignment solves dynamic programming matrices: the Needleman-Wunsch algorithm establishes optimal global end-to-end alignment, while the Smith-Waterman algorithm isolates locally conserved catalytic domains by zeroing negative cell scores. For high-volume queries against comprehensive biological repositories, BLAST accelerates searches through heuristic k-mer seeds, evaluating match significance via Karlin-Altschul E-values under BLOSUM substitution matrices. Modern macromolecular modeling leverages deep learning architectures like AlphaFold, processing Multiple Sequence Alignments (MSAs) and residue pair geometries through attention Evoformer modules to predict atomic 3D protein structures with experimental crystallography accuracy.',
          theoryContentAr: 'تستخرج المعلوماتية الحيوية الحاسوبية الرؤى البيولوجية الدقيقة من تتابعات الأحماض النووية والبروتينات. وتحل المحاذاة الثنائية مصفوفات البرمجة الديناميكية: حيث تحقق خوارزمية Needleman-Wunsch المحاذاة العالمية الشاملة، بينما تعزل خوارزمية Smith-Waterman النطاقات الوظيفية الموضعية بتصفير القيم السالبة. وللبحث فائق السرعة في قواعد البيانات، تستخدم خوارزمية BLAST بذور k-mer التجريبية مقيمة الدلالة الإحصائية عبر قيم E-value ومصفوفات BLOSUM. ويوظف علم الأحياء البنيوي الحديث نماذج التعلم العميق مثل AlphaFold، التي تعالج محاذاة التتابعات المتعددة وهندسة أزواج الأحماض الأمينية عبر وحدات Evoformer للتنبؤ بالبنية الفراغية ثلاثية الأبعاد بدقة تقارب البلورات الشعاعية.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Biotechnology Curriculum',
            bookTitleAr: 'منهج البكالوريا المصرية في الهندسة الجينومية والمعلوماتية الحيوية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-BIOTECH-G12-MOD2',
            pageRange: 'pp. 83-164'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Dynamic Programming Recurrences & BLAST E-Value Inference',
            titleAr: 'خطة الدرس: تكرارات البرمجة الديناميكية واستدلال القيمة المتوقعة لـ BLAST',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Populate Needleman-Wunsch alignment matrices with match, mismatch, and affine gap penalties',
              'Calculate statistical Expectation Values (E-values) given database size and alignment bit score',
              'Interpret AlphaFold predicted Local Distance Difference Test (pLDDT) confidence curves'
            ]
          },
          worksheet: {
            id: 'ws_egbac_biotechnology_ch2_l1',
            titleEn: 'Worksheet 2: Matrix Traceback & BLAST Bit Score Statistics',
            titleAr: 'ورقة عمل 2: التتبع العكسي في المصفوفات وإحصاءات درجات BLAST',
            descriptionEn: 'Derive optimal traceback alignment paths, compute Poisson-like E-values, and evaluate pLDDT structural metrics.',
            descriptionAr: 'استنتاج مسارات التتبع العكسي للمحاذاة، وحساب قيم E-value الاحتمالية، وتقييم مؤشرات ثقة pLDDT.',
            estimatedTimeMinutes: 45,
            problems: egbac_biotechnology_ch2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'bioinformatics_alignment_simulator',
            titleEn: 'Dynamic Programming Sequence Alignment & BLAST Visualizer',
            titleAr: 'محاكي مصفوفات البرمجة الديناميكية ومحاذاة BLAST',
            descriptionEn: 'Interactive Needleman-Wunsch score grid computation, path traceback, and BLAST HSP seed extension explorer.',
            descriptionAr: 'حساب شبكة درجات Needleman-Wunsch تفاعلياً، وتتبع مسار المحاذاة، واستكشاف تمديد بذور BLAST.'
          }
        }
      ],
      solvedExamples: egbac_biotechnology_ch2SolvedExamples,
      exerciseProblems: egbac_biotechnology_ch2ExerciseProblems,
      databank: egbac_biotechnology_ch2Databank
    },
    {
      id: 'egbac_biotechnology_ch3',
      chapterNumber: 3,
      titleEn: 'CRISPR Genome Editing, Base/Prime Editing & Synthetic Circuits',
      titleAr: 'تحرير الجينوم بـ CRISPR، التحرير القاعدي والأولي والدوائر التخليقية',
      descriptionEn: 'Cas9 endonuclease mechanics, sgRNA-PAM interactions, NHEJ/HDR repair pathways, cytosine/adenine base editing, prime editing, and synthetic gene toggle switches.',
      descriptionAr: 'ميكانيكا إنزيم Cas9، تفاعلات sgRNA وموقع PAM، مسارات إصلاح NHEJ/HDR، التحرير القاعدي (CBE/ABE)، التحرير الأولي، ومفاتيح البيولوجيا التخليقية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_biotechnology_ch3_l1',
          titleEn: 'CRISPR Endonucleases, Precision Base Editing & Synthetic Gene Circuits',
          titleAr: 'إنزيمات كريسبر، التحرير القاعدي فائق الدقة والدوائر الجينية التخليقية',
          summaryEn: 'sgRNA-directed Cas9 cleavage, 5\'-NGG-3\' PAM interrogation, deaminase base editing without DSBs, and bistable toggle switch regulatory dynamics.',
          summaryAr: 'قطع Cas9 الموجه بـ sgRNA، فحص تتابع PAM، التحرير القاعدي بالديأمينيز دون كسور مزدوجة، وحركية المفاتيح الثنائية التخليقية.',
          theoryContentEn: 'Precision genome editing has superseded classical genetic manipulation through RNA-guided nucleases. Streptococcus pyogenes Cas9 complexes with a single guide RNA (sgRNA) containing a 20-nucleotide spacer that scans genomic chromatin for protospacer-adjacent motifs (5\'-NGG-3\' PAM); upon PAM docking and Watson-Crick duplex unwinding, RuvC and HNH nuclease domains generate double-strand DNA breaks (DSBs). While cellular Non-Homologous End Joining (NHEJ) disrupts target genes via stochastic insertion/deletion mutations, precision Base Editing (CBE/ABE) fuses catalytically impaired Cas9 nickases to deaminases, achieving transition substitutions without DSBs or donor templates. Furthermore, Prime Editing deploys an engineered reverse transcriptase with a prime editing guide RNA (pegRNA) to copy precise edits directly into the target locus, operating alongside synthetic biology transcriptional toggle switches and engineered biosynthetic cascades.',
          theoryContentAr: 'تفوقت تقنيات التحرير الجيني فائق الدقة على الطرق التقليدية عبر النيوكليازات الموجهة بـ RNA. ويتحد إنزيم Cas9 مع حمض نووي مرشد (sgRNA) يحوي تتابعاً بطول 20 نيوكليوتيد يفحص الكروماتين بحثاً عن موقع PAM بصيغة 5\'-NGG-3\'؛ وعند الارتباط وفك التواء الشريط المزدوج، يقطع نطاقا RuvC و HNH كلا شريطي DNA محدثين كسراً مزدوجاً. وبينما يعطل إصلاح NHEJ الجينات بطفرات إقحام/حذف عشوائية، يدمج التحرير القاعدي (CBE/ABE) إنزيم كاس المعطل مع إنزيم ديأمينيز لتحويل القواعد الفردية بدقة دون كسور مزدوجة. كما يستخدم التحرير الأولي (Prime Editing) إنزيم النسخ العكسي مع مرشد pegRNA لكتابة التعديلات المستهدفة مباشرة، بالتكامل مع المفاتيح الجينية التخليقية ومسارات التصنيع الحيوي المهندسة.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Biotechnology Curriculum',
            bookTitleAr: 'منهج البكالوريا المصرية في الهندسة الجينومية والمعلوماتية الحيوية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-BIOTECH-G12-MOD3',
            pageRange: 'pp. 165-246'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Cas9 DSB Mechanics & Non-DSB Base/Prime Editing Precision',
            titleAr: 'خطة الدرس: ميكانيكا كسور Cas9 ودقة التحرير القاعدي والأولي دون كسور مزدوجة',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Evaluate Cas9 protospacer-PAM binding kinetics and double-strand cleavage geometry',
              'Compare transition substitution fidelity in Cytosine versus Adenine Base Editors',
              'Design pegRNA extension architectures for prime editing correction of monogenic disease alleles'
            ]
          },
          worksheet: {
            id: 'ws_egbac_biotechnology_ch3_l1',
            titleEn: 'Worksheet 3: sgRNA Target Specificity & Prime Editing Efficiencies',
            titleAr: 'ورقة عمل 3: نوعية أهداف sgRNA وكفاءة التحرير الأولي للجينات',
            descriptionEn: 'Calculate Cas9 off-target cleavage risk scores, base conversion yields, and pegRNA primer binding energies.',
            descriptionAr: 'حساب درجات خطورة القطع غير المستهدف لـ Cas9، ونسب التحول القاعدي، وطاقات ارتباط بوادئ pegRNA.',
            estimatedTimeMinutes: 45,
            problems: egbac_biotechnology_ch3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'crispr_precision_editor_simulator',
            titleEn: 'CRISPR-Cas9 & Precision Base/Prime Editor Simulator',
            titleAr: 'محاكي أنظمة كريسبر والتحرير القاعدي والأولي الدقيق',
            descriptionEn: 'Interactive simulation of PAM search, guide RNA hybridization, Cas9 DSB induction, and deaminase base editing.',
            descriptionAr: 'محاكاة تفاعلية للبحث عن PAM، وتهجين RNA المرشد، وكسور Cas9، والتحرير القاعدي بالديأمينيز.'
          }
        }
      ],
      solvedExamples: egbac_biotechnology_ch3SolvedExamples,
      exerciseProblems: egbac_biotechnology_ch3ExerciseProblems,
      databank: egbac_biotechnology_ch3Databank
    },
    {
      id: 'egbac_biotechnology_ch4',
      chapterNumber: 4,
      titleEn: 'Bioprocess Fluid Dynamics, CAR-T Engineering & Global Biosafety',
      titleAr: 'ديناميكا موائع المعالجة الحيوية، هندسة خلايا CAR-T والأمان الحيوي الدولي',
      descriptionEn: 'Bioreactor mass transfer coefficients (kLa), oxygen transfer rates (OTR), CAR-T single-chain chimeric receptors, BSL-1 to BSL-4 facility engineering, and the Cartagena Protocol.',
      descriptionAr: 'معامل انتقال كتلة الأكسجين (kLa)، معدلات نقل الأكسجين (OTR)، مستقبلات خلايا CAR-T الكيميرية، هندسة معامل BSL-1 إلى BSL-4، وبروتوكول قرطاجنة الدولي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_biotechnology_ch4_l1',
          titleEn: 'Oxygen Mass Transfer Hydrodynamics, CAR-T Immunotherapy & Biosafety Regulations',
          titleAr: 'ديناميكا انتقال كتلة الأكسجين، العلاج المناعي بـ CAR-T وتشريعات الأمان الحيوي',
          summaryEn: 'Volumetric oxygen mass transfer modeling, impeller power inputs, synthetic modular CAR architectures, and international Cartagena biosafety compliance.',
          summaryAr: 'نمذجة انتقال كتلة الأكسجين الحجمي، قدرة تقليب المحركات، بنية مستقبلات CAR المعيارية، والامتثال لبروتوكول قرطاجنة.',
          theoryContentEn: 'Advanced bioprocess engineering balances physical fluid hydrodynamics with cellular metabolic demands to optimize biopharmaceutical manufacturing. In aerated stirred-tank bioreactors, the oxygen transfer rate (OTR) represents the critical design limitation, governed by the volumetric mass transfer coefficient kLa and concentration driving force (C* - CL). In cell therapy engineering, Chimeric Antigen Receptor (CAR) T cells feature synthetic single-chain variable fragments (scFv) linked via transmembrane hinges to intracellular 4-1BB/CD28 costimulatory modules and CD3zeta activation tails, inducing MHC-independent cytolytic destruction of malignant blasts. Industrial and clinical applications operate under rigorous biosafety standards: BSL-3 facilities maintain negative pressure and HEPA filtration for respiratory pathgens, while BSL-4 suits protect against hemorrhagic viruses, overseen by Cartagena Protocol biosafety governance frameworks.',
          theoryContentAr: 'توازن هندسة العمليات الحيوية المتقدمة بين ديناميكا الموائع الفيزيائية والمتطلبات الأيضية للخلايا لتحسين تصنيع الأدوية الحيوية. وفي المفاعلات الحيوية الهوائية، يشكل معدل انتقال الأكسجين (OTR) القيد الحرج الحاكم، محكوماً بمعامل انتقال الكتلة الحجمي kLa وفرق تركيز التشبع (C* - CL). وفي هندسة العلاجات الخلوية، تتميز خلايا CAR-T بمستقبلات كيميرية تضم أجزاء أجسام مضادة أحادية السلسلة (scFv) متصلة عبر نطاق غشائي بوحدات تحفيز 4-1BB/CD28 وذيل التنشيط CD3zeta، محفزة التدمير السام للخلايا الورمية دون الحاجة لمركب التوافق النسيجي MHC. وتخضع هذه التطبيقات لمعايير أمان صارمة: فتحافظ معامل BSL-3 على ضغط سالب وفلاتر HEPA، وتوفر بدلات BSL-4 حماية مطلقة من الفيروسات النزفية، محكومة ببروتوكول قرطاجنة الدولي للسلامة الإحيائية.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Biotechnology Curriculum',
            bookTitleAr: 'منهج البكالوريا المصرية في الهندسة الجينومية والمعلوماتية الحيوية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-BIOTECH-G12-MOD4',
            pageRange: 'pp. 247-328'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Volumetric Oxygen Transfer Modeling & CAR Modular Signaling',
            titleAr: 'خطة الدرس: نمذجة انتقال الأكسجين الحجمي وإشارات مستقبلات CAR المعيارية',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Derive volumetric oxygen transfer rates (OTR) from dynamic dissolved oxygen response data',
              'Analyze signal transduction potency of 4-1BB versus CD28 costimulatory domains in CAR constructs',
              'Formulate environmental containment parameters and risk assessment dossiers under the Cartagena Protocol'
            ]
          },
          worksheet: {
            id: 'ws_egbac_biotechnology_ch4_l1',
            titleEn: 'Worksheet 4: Bioreactor kLa Coefficients & CAR-T Cytolytic Kinetics',
            titleAr: 'ورقة عمل 4: معاملات kLa للمفاعلات وحركية القتل الخلوي لـ CAR-T',
            descriptionEn: 'Calculate volumetric kLa mass transfer coefficients, CAR-T tumor clearance half-lives, and containment air exchanges.',
            descriptionAr: 'حساب معاملات انتقال الكتلة kLa، وعمر نصف التخلص من الأورام بخلايا CAR-T، ومعدلات تبادل هواء الاحتواء.',
            estimatedTimeMinutes: 45,
            problems: egbac_biotechnology_ch4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'bioreactor_mass_transfer_simulator',
            titleEn: 'Bioreactor Hydrodynamics & Volumetric Oxygen Transfer Simulator',
            titleAr: 'محاكي ديناميكا الموائع وانتقال كتلة الأكسجين بالمفاعلات الحيوية',
            descriptionEn: 'Simulate impeller agitation power, aeration rates, and dynamic dissolved oxygen replenishment in industrial bioreactors.',
            descriptionAr: 'محاكاة قدرة تقليب المحرك ومعدلات التهوية وتعويض الأكسجين الذائب في المفاعلات الصناعية.'
          }
        }
      ],
      solvedExamples: egbac_biotechnology_ch4SolvedExamples,
      exerciseProblems: egbac_biotechnology_ch4ExerciseProblems,
      databank: egbac_biotechnology_ch4Databank
    }
  ]
};
