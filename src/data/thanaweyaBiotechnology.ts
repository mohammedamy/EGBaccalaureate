import type { Branch } from '../types/curriculum';
import { th_biotechnology_ch1SolvedExamples, th_biotechnology_ch1ExerciseProblems } from './textbook/thanaweya/biotechnologyCh1Textbook';
import { th_biotechnology_ch2SolvedExamples, th_biotechnology_ch2ExerciseProblems } from './textbook/thanaweya/biotechnologyCh2Textbook';
import { th_biotechnology_ch3SolvedExamples, th_biotechnology_ch3ExerciseProblems } from './textbook/thanaweya/biotechnologyCh3Textbook';
import { th_biotechnology_ch4SolvedExamples, th_biotechnology_ch4ExerciseProblems } from './textbook/thanaweya/biotechnologyCh4Textbook';
import { th_biotechnology_ch1Databank } from './databanks/thanaweya/biotechnologyCh1Databank';
import { th_biotechnology_ch2Databank } from './databanks/thanaweya/biotechnologyCh2Databank';
import { th_biotechnology_ch3Databank } from './databanks/thanaweya/biotechnologyCh3Databank';
import { th_biotechnology_ch4Databank } from './databanks/thanaweya/biotechnologyCh4Databank';

export const thanaweyaBiotechnologyBranch: Branch = {
  id: 'thanaweya_biotechnology',
  titleEn: 'Biotechnology, Genetic Engineering & Applied Genetics',
  titleAr: 'التكنولوجيا الحيوية، الهندسة الوراثية والوراثة التطبيقية',
  iconName: 'Dna',
  colorGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
  categoryEn: 'Biotechnology & Genetic Engineering',
  categoryAr: 'التكنولوجيا الحيوية والهندسة الوراثية',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_biotechnology_ch1',
      chapterNumber: 1,
      titleEn: 'Molecular Genetics, Recombinant DNA & Gene Cloning',
      titleAr: 'الوراثة الجزيئية، حمض DNA معاد الاتحاد واستنساخ الجينات',
      descriptionEn: 'Restriction endonucleases, DNA ligase kinetics, plasmid vectors (pUC19/pBR322), cDNA libraries, bacterial transformation, and blue-white colony screening.',
      descriptionAr: 'إنزيمات القصر، حركية إنزيم الربط، نواقل البلازميدات، مكتبات cDNA، التحول البكتيري، وفرز المستعمرات بتقنية اللونين الأزرق والأبيض.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_biotechnology_ch1_l1',
          titleEn: 'Molecular Mechanisms of Recombinant DNA & Gene Cloning',
          titleAr: 'الآليات الجزيئية لحمض DNA معاد الاتحاد واستنساخ الجينات',
          summaryEn: 'Type II restriction endonucleases, plasmid vectors, sticky-end ligation, transformation protocols, and PCR amplification kinetics.',
          summaryAr: 'إنزيمات القصر من النوع الثاني، نواقل البلازميدات، ربط الأطراف اللاصقة، بروتوكولات التحول، وحركية تضاعف تفاعل PCR.',
          theoryContentEn: 'Recombinant DNA technology manipulates genetic sequences by combining DNA molecules from distinct biological sources. Type II restriction endonucleases recognize palindromic nucleotide sequences and cleave phosphodiester backbones, generating blunt or staggered sticky ends with single-stranded overhangs. Circular plasmid vectors, engineered with an origin of replication (ori), selectable antibiotic resistance markers, and multiple cloning sites (MCS), harbor inserted exogenous passenger DNA via DNA ligase catalysis. Competent bacterial host cells uptake recombinant plasmids through thermal shock or electroporation, and alpha-complementation in lacZ permits blue-white colony selection. Concurrently, the polymerase chain reaction (PCR) achieves exponential DNA copy yield over cyclical denaturation, primer annealing, and thermostable elongation steps.',
          theoryContentAr: 'تتحكم تكنولوجيا DNA معاد الاتحاد في التتابعات الجينية عبر دمج جزيئات DNA من مصادر بيولوجية مختلفة. وتتعرف إنزيمات القصر من النوع الثاني على تتابعات نيوكليوتيدية متناظرة وتقطع الروابط الفوسفاتية ثنائية الإستر لتنتج أطرافاً لاصقة أو غير حادة. وتستقبل نواقل البلازميدات الدائرية، المزودة بأصل تضاعف (ori) ومعلمات مقاومة المضادات ومواقع استنساخ متعددة (MCS)، قطع الجينات الدخيلة بربطها بإنزيم DNA ليجاز. وتلتقط الخلايا البكتيرية الكفؤة البلازميدات بالصدمة الحرارية أو التثقيب الكهربي، ويتيح التكامل في جين lacZ فرز المستعمرات باللونين الأزرق والأبيض. وبالتوازي، يحقق تفاعل PCR تضاعفاً أسياً للنسخ عبر دورات التمسخ والتحام البوادئ والاستطالة الحرارية.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Biotechnology Curriculum',
            bookTitleAr: 'منهج التكنولوجيا الحيوية والهندسة الوراثية لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-BIOTECH-G12-CH1',
            pageRange: 'pp. 1-76'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Restriction Mapping, Vector Selection & PCR Kinetics',
            titleAr: 'خطة الدرس: رسم الخرائط الجينية بإنزيمات القصر، تصميم النواقل وحركية PCR',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Predict restriction fragment sizes from circular and linear DNA digestions',
              'Calculate recombinant colony selection efficiencies in blue-white screening',
              'Formulate PCR amplification exponential copy yield curves based on cycle efficiency'
            ]
          },
          worksheet: {
            id: 'ws_th_biotechnology_ch1_l1',
            titleEn: 'Worksheet 1: Restriction Cleavage & Exponential PCR Yield',
            titleAr: 'ورقة عمل 1: قطع إنزيمات القصر وحسابات الحصيلة الأسية لـ PCR',
            descriptionEn: 'Calculate restriction fragment molecular weights, ligation efficiencies, and theoretical amplicon yields.',
            descriptionAr: 'حساب الأوزان الجزيئية لقطع القصر، وكفاءة ربط النواقل، وحصيلة نسخ التضخيم الجيني.',
            estimatedTimeMinutes: 45,
            problems: th_biotechnology_ch1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'dna_gel_electrophoresis_simulator',
            titleEn: 'Agarose Gel Electrophoresis DNA Fragment Migration Simulator',
            titleAr: 'محاكي هجرة قطع DNA بالترحيل الكهربي بهلام الأغاروز',
            descriptionEn: 'Simulate DNA fragment mobility versus log-molecular weight under varying agarose concentrations and voltages.',
            descriptionAr: 'محاكاة حركة قطع DNA بالنسبة للوغاريتم الوزن الجزيئي تحت تركيزات مختلفة للأغاروز والجهد الكهربي.'
          }
        }
      ],
      solvedExamples: th_biotechnology_ch1SolvedExamples,
      exerciseProblems: th_biotechnology_ch1ExerciseProblems,
      databank: th_biotechnology_ch1Databank
    },
    {
      id: 'th_biotechnology_ch2',
      chapterNumber: 2,
      titleEn: 'Industrial Biotechnology, Fermentation Kinetics & Enzyme Technology',
      titleAr: 'التكنولوجيا الحيوية الصناعية، حركية التخمير وتكنولوجيا الإنزيمات',
      descriptionEn: 'Stirred-tank bioreactors, Monod microbial kinetics, enzyme immobilization methods, downstream separation, and bioethanol/citric acid fermentation.',
      descriptionAr: 'المفاعلات الحيوية بالتقليب، حركية مونو للنمو الميكروبي، طرق تثبيت الإنزيمات، المعالجة اللاحقة، وتخميرات الإيثانول وحمض الستريك.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_biotechnology_ch2_l1',
          titleEn: 'Industrial Bioreactor Dynamics, Monod Microbial Growth & Downstream Processing',
          titleAr: 'ديناميكيات المفاعلات الحيوية الصناعية، نمو مونو الميكروبي والمعالجة اللاحقة',
          summaryEn: 'Monod growth equations, batch/chemostat operations, enzyme immobilization kinetics, chromatography purification, and yields.',
          summaryAr: 'معادلات نمو مونو، تشغيل المفاعلات المجمعة والمستمرة، حركية الإنزيمات المثبتة، التنقية الكروماتوجرافية، وحسابات المردود.',
          theoryContentEn: 'Industrial biotechnology deploys biological organisms and biocatalysts to mass-produce biochemicals, therapeutics, and bioenergy. Microbial cell growth in batch fermenters follows the hyperbolic Monod kinetic equation, governed by maximum specific growth rate and the substrate affinity constant. Continuous stirred-tank reactors (chemostats) maintain steady-state growth balanced by medium dilution rates. Immobilizing industrial enzymes on solid matrices (calcium alginate, glutaraldehyde crosslinking) boosts thermal and conformational resilience, enabling repeated catalytic cycles in continuous packed-bed reactors. Downstream processing separates, purifies, and concentrates target biomolecules through microfiltration, cell disruption, and multi-stage chromatography (affinity, ion-exchange, size-exclusion) to clinical-grade purity standards.',
          theoryContentAr: 'توظف التكنولوجيا الحيوية الصناعية الكائنات الحية والمحفزات الحيوية لإنتاج المواد الكيميائية الحيوية والأدوية والوقود الحيوي تجارياً. ويتبع نمو الخلايا الميكروبية في المخمرات معادلة مونو الحركية المحكومة بمعدل النمو النوعي الأقصى وثابت نصف السرعة لمادة التفاعل. وتحافظ مفاعلات الكيموستات المستمرة على حالة نمو مستقرة يحددها معدل تخفيف المغذي. كما يعزز تثبيت الإنزيمات على حوامل صلبة (كألجينات الكالسيوم) الاستقرار الحراري، متيحاً تكرار دورات التحفيز في المفاعلات العمودية. وتتولى المعالجة اللاحقة فصل المنتجات وتنبيتها بالترشيح الدقيق وتحطيم الخلايا والكروماتوجرافيا متعددة المراحل وفق معايير النقاوة الدوائية.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Biotechnology Curriculum',
            bookTitleAr: 'منهج التكنولوجيا الحيوية والهندسة الوراثية لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-BIOTECH-G12-CH2',
            pageRange: 'pp. 77-152'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Monod Kinetic Modeling & Downstream Product Recovery',
            titleAr: 'خطة الدرس: نمذجة حركية مونو الرياضية واستخلاص المنتجات الحيوية',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Calculate specific growth rates and doubling times using the Monod equation',
              'Evaluate enzyme operational half-life improvements from covalent immobilization',
              'Determine multi-stage downstream chromatographic separation recovery percentages'
            ]
          },
          worksheet: {
            id: 'ws_th_biotechnology_ch2_l1',
            titleEn: 'Worksheet 2: Monod Growth Parameters & Column Recovery Yields',
            titleAr: 'ورقة عمل 2: معاملات نمو مونو ومردود الاستعادة في أعمدة التنقية',
            descriptionEn: 'Compute microbial doubling times, chemostat steady-state biomass, and purified biopharmaceutical mass.',
            descriptionAr: 'حساب زمن تضاعف الميكروبات، والكتلة الحيوية المستقرة في الكيموستات، وكتلة الدواء الحيوي المستعاد.',
            estimatedTimeMinutes: 45,
            problems: th_biotechnology_ch2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'bioreactor_kinetics_simulator',
            titleEn: 'Bioreactor Fermentation & Monod Growth Kinetics Simulator',
            titleAr: 'محاكي المفاعلات الحيوية وحركية نمو مونو الميكروبي',
            descriptionEn: 'Model microbial biomass accumulation, substrate depletion, and product synthesis curves dynamically in batch and fed-batch fermenters.',
            descriptionAr: 'نمذجة تراكم الكتلة الحيوية، واستهلاك مادة التفاعل، ومنحنيات تكوين المنتج حيوياً في المخمرات.'
          }
        }
      ],
      solvedExamples: th_biotechnology_ch2SolvedExamples,
      exerciseProblems: th_biotechnology_ch2ExerciseProblems,
      databank: th_biotechnology_ch2Databank
    },
    {
      id: 'th_biotechnology_ch3',
      chapterNumber: 3,
      titleEn: 'Agricultural & Environmental Biotechnology & Bioremediation',
      titleAr: 'التكنولوجيا الحيوية الزراعية والبيئية والمعالجة الحيوية',
      descriptionEn: 'Transgenic crops (Bt crops, Golden Rice), abiotic stress tolerance, biological nitrogen fixation, phytoremediation, and microbial environmental cleanup.',
      descriptionAr: 'المحاصيل المعدلة وراثياً (محاصيل Bt، الأرز الذهبي)، تحمل الإجهادات البيئية، التثبيت الحيوي للنيتروجين، المعالجة بالنباتات، والتنظيف الحيوي الميكروبي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_biotechnology_ch3_l1',
          titleEn: 'Agricultural Transgenics, Bt Endotoxins & Bioremediation Pathways',
          titleAr: 'التحوير الوراثي الزراعي، سموم Bt ومسارات المعالجة الحيوية البيئية',
          summaryEn: 'Bt endotoxin crystal mode of action, vacuolar ion antiport, nutrient biofortification, and microbial petroleum hydrocarbon degradation.',
          summaryAr: 'آلية عمل بلورات سموم Bt، ناقلات الأيونات الفجوية، الإغناء الغذائي الحيوي، والتحلل الميكروبي للهيدروكربونات النفطية.',
          theoryContentEn: 'Agricultural and environmental biotechnology leverages genetic modification to enhance food security and remediate ecological hazards. Transgenic insect-resistant crops express crystalline Cry delta-endotoxins derived from Bacillus thuringiensis; upon ingestion, the alkaline insect midgut solubilizes protoxins, which are cleaved into active toxins that perforate epithelial membranes and kill pest larvae without harming mammals. Engineering abiotic stress tolerance introduces vacuolar Na+/H+ antiporters (AtNHX1) to sequester toxic ions and synthesize protective osmolytes against drought and salinity. In environmental cleanup, biostimulation and bioaugmentation deploy hydrocarbon-degrading microbes (Pseudomonas putida) carrying catabolic plasmids that enzymatically oxidize petroleum alkanes and aromatic pollutants into water and carbon dioxide.',
          theoryContentAr: 'توظف التكنولوجيا الحيوية الزراعية والبيئية التحوير الجيني لتعزيز الأمن الغذائي ومعالجة الملوثات البيئية. وتعبر المحاصيل المقاومة للحشرات عن سموم Cry البلورية المشتقة من بكتيريا Bacillus thuringiensis؛ حيث يذيب المعي الأوسط القلوي للحشرات السموم الأولية فتنشط وتثقب الأغشية الطلائية لتقضي على اليرقات بأمان تام للثدييات. وتُدخل هندسة تحمل الإجهادات البيئية نواقل الصوديوم/البروتون الفجوية لحجز الأيونات الزائدة وبناء مركبات الحماية الأسموزية ضد الجفاف والملوحة. وفي المعالجة البيئية، يسرع التحفيز الحيوي نشاط بكتيريا هدم الهيدروكربونات (Pseudomonas putida) الحاملة لبلازميدات تهدم الألكانات النفطية والمركبات العطرية إلى ماء وثاني أكسيد كربون.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Biotechnology Curriculum',
            bookTitleAr: 'منهج التكنولوجيا الحيوية والهندسة الوراثية لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-BIOTECH-G12-CH3',
            pageRange: 'pp. 153-228'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Cry Toxin Receptor Binding & Soil Salinity Antiporter Kinetics',
            titleAr: 'خطة الدرس: ارتباط مستقبلات سموم Cry وحركية مضخات تحمل الملوحة في التربة',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Explain the biochemical receptor activation and pore formation mechanism of Bt Cry endotoxins',
              'Analyze crop yield preservation metrics under hyper-saline soil conditions using NHX1 antiport',
              'Calculate stoichiometric nutrient ratios (C:N:P) for optimal oil spill microbial biostimulation'
            ]
          },
          worksheet: {
            id: 'ws_th_biotechnology_ch3_l1',
            titleEn: 'Worksheet 3: Transgenic Protection & Bioremediation Degradation Rates',
            titleAr: 'ورقة عمل 3: الحماية بالتحوير الجيني ومعدلات التحلل في المعالجة الحيوية',
            descriptionEn: 'Evaluate pesticide reduction percentages, saline crop yield retention, and petroleum mass decay curves.',
            descriptionAr: 'تقييم نسب خفض المبيدات الكيميائية، والمحافظة على إنتاجية المحاصيل المالحة، ومعدلات هدم النفط.',
            estimatedTimeMinutes: 45,
            problems: th_biotechnology_ch3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'phytoremediation_uptake_simulator',
            titleEn: 'Phytoremediation & Pollutant Enzymatic Degradation Simulator',
            titleAr: 'محاكي المعالجة الحيوية والتحلل الإنزيمي للملوثات',
            descriptionEn: 'Simulate the removal kinetics of soil heavy metals and petrochemicals by engineered plants and microbial consortia.',
            descriptionAr: 'محاكاة حركية إزالة المعادن الثقيلة والملوثات البتروكيماوية بواسطة النباتات والميكروبات المعدلة.'
          }
        }
      ],
      solvedExamples: th_biotechnology_ch3SolvedExamples,
      exerciseProblems: th_biotechnology_ch3ExerciseProblems,
      databank: th_biotechnology_ch3Databank
    },
    {
      id: 'th_biotechnology_ch4',
      chapterNumber: 4,
      titleEn: 'Medical Biotechnology, Gene Therapy & Stem Cell Applications',
      titleAr: 'التكنولوجيا الحيوية الطبية، العلاج الجيني وتطبيقات الخلايا الجذعية',
      descriptionEn: 'Monoclonal antibodies (hybridoma), recombinant therapeutic proteins, viral gene delivery vectors, CAR-T immunotherapy, and regenerative stem cell biology.',
      descriptionAr: 'الأجسام المضادة أحادية النسيلة (تقنية الهجينوم)، البروتينات العلاجية معاد الاتحاد، النواقل الفيروسية، العلاج المناعي بخلايا CAR-T، وبيولوجيا الخلايا الجذعية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_biotechnology_ch4_l1',
          titleEn: 'Monoclonal Antibody Engineering, Viral Gene Delivery & Stem Cell Therapeutics',
          titleAr: 'هندسة الأجسام المضادة أحادية النسيلة، النواقل الفيروسية والعلاجات الجذعية',
          summaryEn: 'Hybridoma HAT screening, recombinant glycoprotein manufacturing (CHO), viral capsid tropism, CAR-T constructs, and biosafety protocols.',
          summaryAr: 'فرز الهجينوم بوسط HAT، تصنيع البروتينات السكرية في خلايا CHO، كفاءة النواقل الفيروسية، مستقبلات CAR-T، وبروتوكولات الأمان الحيوي.',
          theoryContentEn: 'Medical biotechnology develops precision therapeutics by integrating molecular genetics, immunology, and cellular engineering. Hybridoma technology fuses immunized murine B cells with immortal myeloma lines, utilizing HAT medium selection to isolate monoclonal antibodies targeting oncogenic receptors like HER2. Recombinant biologics requiring post-translational human glycosylation (e.g., erythropoietin, Factor VIII) are expressed in Chinese Hamster Ovary (CHO) suspension bioreactors. In clinical gene therapy, non-replicating recombinant adeno-associated viral (AAV) vectors deliver curative functional transgenes directly to post-mitotic cardiac and motor neuronal cells. Furthermore, synthetic chimeric antigen receptor (CAR) T-cell immunotherapy reprogrammes patient lymphocytes to eradicate refractory leukemia, operating alongside rigorous BSL-1 to BSL-4 laboratory containment and bioethical protocols.',
          theoryContentAr: 'تطور التكنولوجيا الحيوية الطبية علاجات دقيقة عبر دمج الوراثة الجزيئية والمناعة والهندسة الخلوية. وتدمج تقنية الهجينوم الخلايا البائية المناعية مع خلايا المايلوما الخالدة، مستخدمة وسط HAT لفرز أجسام مضادة أحادية النسيلة تستهدف مستقبلات الأورام كـ HER2. كما تُنتج الأدوية الحيوية التي تتطلب إضافة سكريات بعد الترجمة (كالإريثروبويتين وعامل التخثر الثامن) في خلايا CHO المعلقة. وفي العلاج الجيني السريري، تنقل الفيروسات المرتبطة بالغدية (AAV) المهندسة جينات علاجية وظيفية مباشرة إلى الخلايا العصبية والقلبية. وتبرمج تقنية CAR-T المناعية الخلايا اللمفاوية للمريض للقضاء على خلايا اللوكيميا، بالتوازي مع التزام صارم بمعايير الأمان الحيوي BSL والأخلاقيات الحيوية.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Biotechnology Curriculum',
            bookTitleAr: 'منهج التكنولوجيا الحيوية والهندسة الوراثية لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-BIOTECH-G12-CH4',
            pageRange: 'pp. 229-308'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Hybridoma Selection Dynamics & CAR-T Chimeric Architecture',
            titleAr: 'خطة الدرس: ديناميكيات انتخاب الهجينوم والبنية المعمارية لمستقبلات CAR-T',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Explain the enzymatic mechanism of aminopterin nucleotide pathway blockage in HAT medium',
              'Design modular CAR-T constructs incorporating scFv antigen binding and 4-1BB/CD3zeta signaling',
              'Calculate therapeutic viral vector dose requirements (vector genomes/kg) for clinical gene delivery'
            ]
          },
          worksheet: {
            id: 'ws_th_biotechnology_ch4_l1',
            titleEn: 'Worksheet 4: Monoclonal Titers & CAR-T Cytotoxicity Indices',
            titleAr: 'ورقة عمل 4: عيارات الأجسام المضادة ومؤشرات السمية الخلوية لـ CAR-T',
            descriptionEn: 'Compute antibody equilibrium dissociation constants (Kd), viral vector copy titers, and leukemia remission percentages.',
            descriptionAr: 'حساب ثوابت تفكك الأجسام المضادة (Kd)، وعيارات جينومات الفيروسات، ونسب الشفاء من اللوكيميا.',
            estimatedTimeMinutes: 45,
            problems: th_biotechnology_ch4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'crispr_gene_editing_simulator',
            titleEn: 'CRISPR-Cas9 & Gene Therapy Delivery Vector Simulator',
            titleAr: 'محاكي التحرير الجيني بـ CRISPR ونواقل العلاج الجيني',
            descriptionEn: 'Visualize guide RNA target matching, PAM recognition, Cas9 endonuclease cleavage, and viral transgene delivery dynamics.',
            descriptionAr: 'محاكاة تطابق RNA المرشد، والتعرف على موقع PAM، وقطع إنزيم Cas9، ونقل الجينات بالفيروسات.'
          }
        }
      ],
      solvedExamples: th_biotechnology_ch4SolvedExamples,
      exerciseProblems: th_biotechnology_ch4ExerciseProblems,
      databank: th_biotechnology_ch4Databank
    }
  ]
};
