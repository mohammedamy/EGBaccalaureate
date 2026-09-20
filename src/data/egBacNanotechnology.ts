import type { Branch } from '../types/curriculum';
import { egBacNanotechnologyCh1Textbook } from './textbook/egbac/egBacNanotechnologyCh1Textbook';
import { egBacNanotechnologyCh2Textbook } from './textbook/egbac/egBacNanotechnologyCh2Textbook';
import { egBacNanotechnologyCh3Textbook } from './textbook/egbac/egBacNanotechnologyCh3Textbook';
import { egBacNanotechnologyCh4Textbook } from './textbook/egbac/egBacNanotechnologyCh4Textbook';
import { egBacNanotechnologyCh1Databank } from './databanks/egbac/egBacNanotechnologyCh1Databank';
import { egBacNanotechnologyCh2Databank } from './databanks/egbac/egBacNanotechnologyCh2Databank';
import { egBacNanotechnologyCh3Databank } from './databanks/egbac/egBacNanotechnologyCh3Databank';
import { egBacNanotechnologyCh4Databank } from './databanks/egbac/egBacNanotechnologyCh4Databank';

export const egBacNanotechnologyBranch: Branch = {
  id: 'egbac_nanotechnology',
  titleEn: 'Nanotechnology, Quantum Materials & Nanoscale Engineering',
  titleAr: 'النانوتكنولوجي، المواد الكمية والهندسة النانوية',
  iconName: 'Atom',
  colorGradient: 'from-teal-600 via-cyan-600 to-blue-700',
  categoryEn: 'Nanotechnology & Advanced Materials',
  categoryAr: 'النانوتكنولوجي والمواد المتقدمة',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_nanotechnology_ch1',
      chapterNumber: 1,
      titleEn: 'Quantum Transport, 2D Van der Waals Heterostructures & Nanoscale Metrology',
      titleAr: 'نقل الشحنات الكمي، اللامتجانسات الفاندرفالسية ثنائية الأبعاد ومترولوجيا النانو',
      descriptionEn: 'Landauer-Büttiker conductance quantization, quantum Hall effect, twisted bilayer graphene Moiré superlattices, transition metal dichalcogenides (TMDs), and atomic force / scanning tunneling microscopy.',
      descriptionAr: 'تكميم التوصيلية الكهربية لاندور-بوتيكر، تأثير هول الكمي، شبكات مواريه في الجرافين ثنائي الطبقة الملتوي، ثنائي كالكوجينيدات المعادن الانتقالية (TMDs)، ومجهر القوة الذرية ومجهر المسح النفقي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_nanotechnology_ch1_l1',
          titleEn: 'Quantum Conductance Quantization, Moiré Magic Angles & Scanning Probe Physics',
          titleAr: 'تكميم التوصيلية الكمية، زوايا مواريه السحرية وفيزياء مجاهر المجسات الماسحة',
          summaryEn: 'Landauer formula G = (2e²/h)M, quantum point contacts, flat electronic bands at magic angle 1.1°, and quantum tunneling current spectroscopy.',
          summaryAr: 'معادلة لاندور لتكميم التوصيلية، نقاط التلامس الكمية، الحزم الإلكترونية المسطحة عند الزاوية السحرية 1.1°، ومطيافية تيار النفق الكمي.',
          theoryContentEn: 'Advanced nanoscale engineering exploits quantum coherence across low-dimensional architectures. In ballistic one-dimensional conductors and quantum point contacts, electrical conductance is quantized in fundamental quanta governed by the Landauer formula: G = (2e²/h) ∑ T_n. Vertically stacking atomically thin 2D monolayers via weak Van der Waals interactions enables artificial heterostructures without lattice mismatch constraints. In twisted bilayer graphene rotated to the magic angle (θ ≈ 1.1°), long-period Moiré superlattices reconstruct electronic dispersions, flattening the Dirac bands and triggering correlated Mott insulator states and unconventional superconductivity. Nanoscale surface metrology deploys Scanning Tunneling Microscopy (STM), where quantum mechanical electron tunneling currents decay exponentially with probe-sample barrier separation (I ∝ e^(-2κd)), achieving sub-angstrom spatial topographic and spectroscopic resolution.',
          theoryContentAr: 'توظف الهندسة النانوية المتقدمة الترابط الكمي عبر التراكيب منخفضة الأبعاد. ففي الموصلات أحادية البعد الباليستية ونقاط التلامس الكمية، تتكمم التوصيلية الكهربية في وحدات أساسية تحكمها معادلة لاندور: G = (2e²/h) ∑ T_n. ويتيح التراصف الرأسي للطبقات الذرية ثنائية الأبعاد عبر قوى فاندرفالس الضعيفة بناء لامتجانسات اصطناعية دون قيود التوافق البلوري. وعند لف طبقتي جرافين بزاوية سحرية (θ ≈ 1.1°)، تعيد شبكات مواريه الفائقة بناء تشتت الحزم الإلكترونية، مفلطحة حزم ديراك ومولدة حالات عزل موت فائق الموصلية غير التقليدية. وتعتمد المترولوجيا النانوية على مجهر المسح النفقي (STM)، حيث يتناقص تيار النفق الكمي للإلكترونات أسياً مع المسافة الفاصلة (I ∝ e^(-2κd)) محققاً دقة تصوير طبوغرافية ومطيافية دون الأنغستروم.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Curriculum: Nanotechnology & Quantum Materials',
            bookTitleAr: 'منهج البكالوريا المصرية المتقدم: النانوتكنولوجي والمواد الكمية',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-NANOTECH-G12-MOD1',
            pageRange: 'pp. 1-84'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Landauer Quantum Conductance & STM Tunneling Current Derivations',
            titleAr: 'خطة الدرس: استنتاج تكميم لاندور للتوصيلية وتيار النفق الكمي في STM',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Calculate quantized electrical conductance steps in ballistic quantum point contacts',
              'Derive exponential tunneling current decay in scanning tunneling microscopy as a function of barrier work function',
              'Analyze flat band formation conditions at Moiré magic angles in twisted 2D superlattices'
            ]
          },
          worksheet: {
            id: 'ws_egbac_nanotechnology_ch1_l1',
            titleEn: 'Worksheet 1: Quantum Conductance & Moiré Superlattice Calculations',
            titleAr: 'ورقة عمل 1: حسابات التوصيلية الكمية وشبكات مواريه الفائقة',
            descriptionEn: 'Compute conductance quanta multiples, STM tunneling currents, and Moiré superlattice periods.',
            descriptionAr: 'حساب مضاعفات كموم التوصيلية، وتيارات نفق STM، وفترات شبكات مواريه الفائقة.',
            estimatedTimeMinutes: 45,
            problems: egBacNanotechnologyCh1Textbook.slice(0, 3)
          },
          interactiveWidget: {
            type: 'quantum_transport_simulator',
            titleEn: 'Landauer Conductance Quantization & Moiré Superlattice Simulator',
            titleAr: 'محاكي تكميم لاندور للتوصيلية وشبكات مواريه الفائقة الملتوية',
            descriptionEn: 'Vary quantum wire constriction width to observe stepped plateaus of 2e²/h, and rotate bilayer graphene sheets to identify the 1.1° magic angle.',
            descriptionAr: 'غيّر اتساع السلك الكمي لمشاهدة مدرجات التوصيلية (2e²/h)، وقم بتدوير طبقات الجرافين للعثور على زاوية مواريه السحرية 1.1°.'
          }
        }
      ],
      solvedExamples: egBacNanotechnologyCh1Textbook.slice(0, 10),
      exerciseProblems: egBacNanotechnologyCh1Textbook.slice(10, 25),
      databank: egBacNanotechnologyCh1Databank
    },
    {
      id: 'egbac_nanotechnology_ch2',
      chapterNumber: 2,
      titleEn: 'Molecular Nanotechnology, DNA Origami & Supramolecular Nanomachines',
      titleAr: 'النانوتكنولوجي الجزيئي، أوريغامي الـ DNA والآلات النانوية فوق الجزيئية',
      descriptionEn: 'Rotaxanes and catenanes, molecular motors driven by light/chemistry, DNA scaffold origami folding, staple strand hybridization thermodynamics, and autonomous molecular nanorobots.',
      descriptionAr: 'الروتاكسانات والكاتينانات، المحركات الجزيئية المدفوعة بالضوء والتفاعلات الكيميائية، طي هياكل أوريغامي DNA، الديناميكا الحرارية لخيوط التدبيس، والروبوتات النانوية الجزيئية المستقلة.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_nanotechnology_ch2_l1',
          titleEn: 'Synthetic Molecular Motors, DNA Scaffold Origami & Mechanical Nano-Actuation',
          titleAr: 'المحركات الجزيئية التخليقية، أوريغامي DNA والتحريك الميكانيكي النانوي',
          summaryEn: 'Unidirectional Feringa motor rotations, mechanical interlocked molecules, DNA origami folding algorithms, and thermodynamic stability.',
          summaryAr: 'الدوران أحادي الاتجاه لمحركات فيرينجا، الجزيئات المتشابكة ميكانيكياً، خوارزميات طي أوريغامي DNA، والاستقرار الديناميكي الحراري.',
          theoryContentEn: 'Molecular nanotechnology constructs functional machines and nanostructures from bottom-up atomic and molecular assemblies. Mechanically interlocked architectures (rotaxanes, catenanes) achieve controlled sub-nanometer shuttle displacement without covalent bond breakage. Unidirectional molecular motors, pioneered by Ben Feringa, execute continuous 360° rotary motion powered by alternating photoisomerization and thermal helix inversion steps. In structural DNA nanotechnology, DNA origami folds a single long viral genomic scaffold strand (M13mp18, ~7,249 nt) into predefined 2D and 3D nanoscale shapes using hundreds of short synthetic staple strands. Hybridization thermodynamics (Gibbs free energy ΔG = ΔH - TΔS) dictate precise Watson-Crick base-pairing, enabling autonomous DNA walkers, nanocontainers that open in response to aptamer-target triggers, and programmed payload release.',
          theoryContentAr: 'يبني النانوتكنولوجي الجزيئي آلات وهياكل وظيفية من التجميع الذاتي للذرات والجزيئات من أسفل لأعلى. وتحقق الهياكل المتشابكة ميكانيكياً (كالروتاكسانات والكاتينانات) حركة انزلاقية محكومة دون كسر الروابط التساهمية. وتنفذ المحركات الجزيئية أحادية الاتجاه دوراناً متواصلاً بزاوية 360° مدفوعاً بالتزامر الضوئي والانعكاس الحراري. وفي تكنولوجيا DNA الهيكلية، يطوي أوريغامي الـ DNA شريطاً هيكلياً فيروسياً طويلاً (M13mp18 بـ 7,249 نيوكليوتيدة) إلى أشكال نانوية محددة ثنائية وثلاثية الأبعاد باستخدام مئات الخيوط التثبيتية القصيرة. وتحدد الديناميكا الحرارية للتهجين (ΔG = ΔH - TΔS) دقة الازدواج القاعدي لواتسون وكريك، مما يتيح روبوتات نانوية متحركة وحاويات ذكية تفتح شحنتها الدوائية استجابة للأبتامرات.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Curriculum: Nanotechnology & Quantum Materials',
            bookTitleAr: 'منهج البكالوريا المصرية المتقدم: النانوتكنولوجي والمواد الكمية',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-NANOTECH-G12-MOD2',
            pageRange: 'pp. 85-168'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Feringa Motor Thermodynamics & DNA Origami Staple Design',
            titleAr: 'خطة الدرس: ديناميكا محركات فيرينجا وتصميم خيوط تدبيس أوريغامي DNA',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Analyze the four-step photo-thermal cycle of light-driven unidirectional molecular motors',
              'Calculate thermodynamic hybridization stability and melting temperatures of DNA staple strands',
              'Design logic-gated DNA nanorobot latching mechanisms actuated by molecular aptamers'
            ]
          },
          worksheet: {
            id: 'ws_egbac_nanotechnology_ch2_l1',
            titleEn: 'Worksheet 2: Molecular Motor Torque & DNA Hybridization ΔG',
            titleAr: 'ورقة عمل 2: عزم دوران المحركات الجزيئية وحسابات طاقة تهجين DNA',
            descriptionEn: 'Compute rotational motor frequencies, molecular torques, and Gibbs free energy hybridization values.',
            descriptionAr: 'حساب ترددات دوران المحركات الجزيئية، والعزوم الميكانيكية، وقيم طاقة غيبس الحرة لتهجين DNA.',
            estimatedTimeMinutes: 45,
            problems: egBacNanotechnologyCh2Textbook.slice(0, 3)
          },
          interactiveWidget: {
            type: 'dna_origami_nanomotor_simulator',
            titleEn: 'DNA Origami Folding & Molecular Rotary Motor Simulator',
            titleAr: 'محاكي طي أوريغامي الـ DNA والمحركات الجزيئية الدوارة',
            descriptionEn: 'Fold the 7,249 nt M13 scaffold into complex nanostructures and trigger light-activated rotation in molecular motors.',
            descriptionAr: 'اطوِ هيكل M13 الجينومي إلى تراكيب نانوية متقدمة وشاهد دوران المحرك الجزيئي بالتحفيز الضوئي.'
          }
        }
      ],
      solvedExamples: egBacNanotechnologyCh2Textbook.slice(0, 10),
      exerciseProblems: egBacNanotechnologyCh2Textbook.slice(10, 25),
      databank: egBacNanotechnologyCh2Databank
    },
    {
      id: 'egbac_nanotechnology_ch3',
      chapterNumber: 3,
      titleEn: 'Metamaterials, Plasmonics & Photonic Nanocavities',
      titleAr: 'المواد الخارقة، البلازمونيات والتجاويف الضوئية النانوية',
      descriptionEn: 'Negative refractive index (Veselago-Pendry lenses), split-ring resonators, surface plasmon polaritons (SPPs), Purcell effect in photonic crystal cavities, and metasurface wavefront shaping.',
      descriptionAr: 'معامل الانكسار السالب (عدسات فيسيلاغو-بيندري)، رنانات الحلقة المنقسمة، بولاريتونات البلازمون السطحي (SPPs)، تأثير بيرسيل في التجاويف الفوتونية، وتشكيل جبهات الموجة بالميتاسطوح.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_nanotechnology_ch3_l1',
          titleEn: 'Negative Index Metamaterials, Surface Plasmon Polaritons & Purcell Enhancement',
          titleAr: 'المواد الخارقة سالبة الانكسار، بولاريتونات البلازمون وتأثير بيرسيل',
          summaryEn: 'Simultaneous negative permittivity and permeability (ε < 0, μ < 0), sub-diffraction perfect imaging, SPP dispersion, and Purcell factor spontaneous emission enhancement.',
          summaryAr: 'السماحية والنفاذية السالبتان معاً، التصوير المثالي فائق الدقة متجاوز الحيود، تشتت SPP، ومضاعفة الانبعاث التلقائي بعامل بيرسيل.',
          theoryContentEn: 'Metamaterials and plasmonic nanostructures engineer artificial electromagnetic constitutive parameters beyond nature. When both electric permittivity and magnetic permeability are engineered to be simultaneously negative (ε < 0 and μ < 0) through arrays of metallic split-ring resonators and thin wires, the refractive index becomes negative (n = -√(ε·μ)). In such left-handed media, phase velocity is antiparallel to the Poynting vector, reversing Snell law, Doppler shifts, and Cherenkov radiation. Pendry perfect lens restores evanescent decaying waves, enabling sub-diffraction imaging. At metal-dielectric interfaces, collective electron oscillations couple with photons to form Surface Plasmon Polaritons (SPPs), confining electromagnetic energy beyond classical diffraction barriers. Inside high-Q photonic crystal nanocavities with sub-wavelength mode volume V, the Purcell factor F_p = (3/(4π²))(λ/n)³(Q/V) exponentially boosts quantum emitter spontaneous emission rates.',
          theoryContentAr: 'تهندس المواد الخارقة والتراكيب البلازمونية المعاملات الكهرومغناطيسية للمادة خارج النطاق الطبيعي. فعند تصميم السماحية الكهربية والنفاذية المغناطيسية لتكونا سالبتين معاً (ε < 0 و μ < 0) عبر مصفوفات رنانات الحلقات المنقسمة والأسلاك الرفيعة، يصبح معامل الانكسار سالباً (n = -√(ε·μ)). وفي هذه الأوساط اليسارية، تتعاكس سرعة الطور مع متجه بوينتنغ، مما يعكس قانون سنيل وتأثير دوبلر وإشعاع شيرينكوف. وتستعيد عدسة بيندري المثالية الموجات المتلاشية متجاوزة حدود الحيود. وعند السطح الفاصل بين المعدن والعازل، تقترن تذبذبات الإلكترونات بالفوتونات مكونة بولاريتونات البلازمون السطحي (SPPs) لحبس الضوء في أبعاد نانوية. وداخل التجاويف الفوتونية فائقة الجودة Q وحجم النمط V، يضاعف عامل بيرسيل معدل الانبعاث التلقائي للبتات الكمية.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Curriculum: Nanotechnology & Quantum Materials',
            bookTitleAr: 'منهج البكالوريا المصرية المتقدم: النانوتكنولوجي والمواد الكمية',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-NANOTECH-G12-MOD3',
            pageRange: 'pp. 169-248'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Negative Refraction Derivations & Photonic Cavity Purcell Factors',
            titleAr: 'خطة الدرس: استنتاجات الانكسار السالب وحسابات عامل بيرسيل في التجاويف الفوتونية',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Derive negative refractive index conditions from Maxwell equations in double-negative metamaterials',
              'Calculate surface plasmon polariton dispersion relationships at gold-dielectric interfaces',
              'Compute Purcell factor spontaneous emission rate enhancement in photonic crystal nanocavities'
            ]
          },
          worksheet: {
            id: 'ws_egbac_nanotechnology_ch3_l1',
            titleEn: 'Worksheet 3: Metasurface Phase Gradient & Purcell Cavity Modes',
            titleAr: 'ورقة عمل 3: تدرج طور الميتاسطوح وأنماط تجاويف بيرسيل الفوتونية',
            descriptionEn: 'Compute anomalous refraction angles, SPP decay lengths, and cavity Purcell factors.',
            descriptionAr: 'حساب زوايا الانكسار الشاذة، وأطوال تلاشي موجات SPP، وعوامل بيرسيل لتعزيز الانبعاث الفوتوني.',
            estimatedTimeMinutes: 45,
            problems: egBacNanotechnologyCh3Textbook.slice(0, 3)
          },
          interactiveWidget: {
            type: 'negative_index_metamaterial_simulator',
            titleEn: 'Negative Index Metamaterial & Photonic Cavity Simulator',
            titleAr: 'محاكي المواد الخارقة سالبة الانكسار وتجاويف بيرسيل الفوتونية',
            descriptionEn: 'Visualize negative refraction bending of light rays, evanescent wave recovery in Pendry superlens, and SPP mode confinement.',
            descriptionAr: 'محاكاة انكسار الضوء في الاتجاه السالب، واستعادة الموجات المتلاشية بالعدسة الخارقة، وحبس موجات SPP البلازمونية.'
          }
        }
      ],
      solvedExamples: egBacNanotechnologyCh3Textbook.slice(0, 10),
      exerciseProblems: egBacNanotechnologyCh3Textbook.slice(10, 25),
      databank: egBacNanotechnologyCh3Databank
    },
    {
      id: 'egbac_nanotechnology_ch4',
      chapterNumber: 4,
      titleEn: 'Nanotoxicology, Environmental Fate & Advanced Nano-Biomaterials',
      titleAr: 'السمية النانوية، المصير البيئي والمواد النانوية الحيوية المتقدمة',
      descriptionEn: 'Nanoparticle-protein corona formation, cellular endocytic pathways, blood-brain barrier translocation, bioaccumulation and trophic transfer, and green nanotoxicology risk assessment frameworks.',
      descriptionAr: 'تشكل إكليل البروتين حول الجسيمات النانوية، مسارات الإدخال الخلوي، عبور الحاجز الدموي الدماغي، التراكم الحيوي عبر المستويات الغذائية، وأطر تقييم المخاطر في السمية النانوية الخضراء.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_nanotechnology_ch4_l1',
          titleEn: 'Biomolecular Protein Corona Dynamics, Nanomaterial Translocation & Ecotoxicology',
          titleAr: 'ديناميكيات إكليل البروتين الحيوي، انتقال المواد النانوية والسمية البيئية',
          summaryEn: 'Vroman effect in hard/soft protein coronas, receptor-mediated clathrin/caveolae endocytosis, BBB penetration, and OECD nanomaterial safety testing.',
          summaryAr: 'تأثير فرومان في إكليل البروتين الصلب والمرن، الإدخال الخلوي عبر الكلاثرين، اختراق الحاجز الدموي الدماغي، واختبارات السلامة النانوية لـ OECD.',
          theoryContentEn: 'The biological identity of nanomaterials is fundamentally determined by their physiological microenvironment. Upon entering biological fluids, nanomaterials are immediately coated by a dynamic biomolecular mantle termed the protein corona. Highly abundant, lower-affinity proteins adsorb rapidly and are progressively displaced by higher-affinity proteins (e.g., apolipoproteins, albumin, fibrinogen) via the Vroman effect, yielding a persistent "hard corona" that dictates cellular uptake and receptor recognition. Cellular internalisation proceeds primarily through receptor-mediated clathrin-dependent and caveolae-dependent endocytosis. Appropriately engineered lipophilic or transferrin-conjugated nanocarriers cross the blood-brain barrier (BBB) via receptor-mediated transcytosis, opening avenues for neurological therapeutics. Concurrently, environmental nanotoxicology monitors nanoparticle aggregation, dissolution kinetics, and bioaccumulation across aquatic and terrestrial trophic cascades under OECD guidelines.',
          theoryContentAr: 'تتحدد الهوية البيولوجية للمواد النانوية بالوسط الفسيولوجي المحيط بها. فبمجرد دخولها السوائل الحيوية، تُحاط بغلاف ديناميكي من الجزيئات الحيوية يُعرف باسم «إكليل البروتين». وتلتصق البروتينات الوفيرة منخفضة الألفة أولاً ثم تستبدل تدريجياً ببروتينات ذات ألفة ارتباط عالية (كالألبومين والفيبرينوجين) وفق تأثير فرومان، مكونة «إكليلاً صلباً» ثابتاً يحدد التعرف الخلوي. وتدخل الجزيئات النانوية للخلايا عبر مسارات الإدخال الخلوي المعتمدة على الكلاثرين والكافيولين. وتتمكن النواقل المغلفة بالترانسفيرين من عبور الحاجز الدموي الدماغي (BBB) لعلاج الاضطرابات العصبية. وتراقب السمية النانوية البيئية معدلات التجمع والذوبان والتراكم الحيوي عبر السلاسل الغذائية وفق إرشادات منظمة OECD.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Curriculum: Nanotechnology & Quantum Materials',
            bookTitleAr: 'منهج البكالوريا المصرية المتقدم: النانوتكنولوجي والمواد الكمية',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-NANOTECH-G12-MOD4',
            pageRange: 'pp. 249-328'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Protein Corona Vroman Thermodynamics & Blood-Brain Barrier Transport',
            titleAr: 'خطة الدرس: ديناميكا تأثير فرومان لإكليل البروتين والنقل عبر الحاجز الدموي الدماغي',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Model protein adsorption kinetics and equilibrium dissociation constants on nanoparticle surfaces',
              'Calculate receptor-mediated transcytosis efficiency across brain microvascular endothelial cells',
              'Evaluate ecotoxicological bioaccumulation factors (BAF) across aquatic trophic levels'
            ]
          },
          worksheet: {
            id: 'ws_egbac_nanotechnology_ch4_l1',
            titleEn: 'Worksheet 4: Corona Thickness & BBB Transport Permeability',
            titleAr: 'ورقة عمل 4: سمك إكليل البروتين ومعامل نفاذية الحاجز الدموي الدماغي',
            descriptionEn: 'Compute hydrodynamic corona diameters, BBB permeability-surface area products, and aquatic trophic transfer factors.',
            descriptionAr: 'حساب الأقطار الهيدروديناميكية لإكليل البروتين، ومعاملات نفاذية الحاجز الدماغي، وعوامل الانتقال البيئي.',
            estimatedTimeMinutes: 45,
            problems: egBacNanotechnologyCh4Textbook.slice(0, 3)
          },
          interactiveWidget: {
            type: 'protein_corona_ecotox_simulator',
            titleEn: 'Protein Corona Formation & Blood-Brain Barrier Transcytosis Simulator',
            titleAr: 'محاكي تشكل إكليل البروتين وعبور الحاجز الدموي الدماغي',
            descriptionEn: 'Simulate dynamic competitive protein adsorption (Vroman effect) and watch functionalized nanocarriers cross the blood-brain barrier.',
            descriptionAr: 'محاكاة التنافس الديناميكي لامتصاص البروتينات (تأثير فرومان) ومشاهدة عبور النواقل النانوية للحاجز الدموي الدماغي.'
          }
        }
      ],
      solvedExamples: egBacNanotechnologyCh4Textbook.slice(0, 10),
      exerciseProblems: egBacNanotechnologyCh4Textbook.slice(10, 25),
      databank: egBacNanotechnologyCh4Databank
    }
  ]
};
