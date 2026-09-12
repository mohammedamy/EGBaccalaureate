import type { Branch } from '../types/curriculum';
import { egBacPhysCh1Databank } from './databanks/egbac/egBacPhysCh1Databank';

export const egBacPhysicsBranch: Branch = {
  id: 'egbac_physics',
  titleEn: 'Advanced Physics (STEM Track)',
  titleAr: 'الفيزياء المتقدمة (مسار العلوم والهندسة STEM)',
  categoryEn: 'Advanced Sciences',
  categoryAr: 'العلوم المتقدمة',
  iconName: 'Atom',
  colorGradient: 'from-sky-600 to-indigo-800',
  chapters: [
    {
      id: 'egbac_phys_ch1',
      chapterNumber: 1,
      titleEn: 'Wave-Particle Duality, Photons & Quantum Physics',
      titleAr: 'ازدواجية الموجة والجسيم والفوتونات والفيزياء الكمية',
      descriptionEn: 'Blackbody radiation curves, Planck quantum hypothesis, Einstein photoelectric equation, Compton scattering, photon linear momentum, de Broglie matter wave hypothesis, and electron microscope resolving power.',
      descriptionAr: 'منحنيات إشعاع الجسم الأسود، فرضية بلانك لتكميم الطاقة، معادلة أينشتاين للظاهرة الكهروضوئية، ظاهرة كومتون وكمية حركة الفوتون، فرضية دي برولي للموجات المادية، والقدرة التحليلية للمجهر الإلكتروني.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_phys_l1',
          titleEn: 'Quantum Radiation & Matter-Wave Duality',
          titleAr: 'الإشعاع الكمي وازدواجية الموجة والجسيم',
          summaryEn: 'Quantum foundation: Planck energy packets $E = h\\nu$, Einstein photoelectric emission $h\\nu = W_0 + KE_{\\max}$, Compton momentum conservation $p = \\frac{h}{\\lambda}$, de Broglie wavelength $\\lambda = \\frac{h}{p}$, and wave optics of electron beams.',
          summaryAr: 'أسس فيزياء الكم: كمات الطاقة لبلانك $E = h\\nu$، الانبعاث الكهروضوئي لأينشتاين $h\\nu = W_0 + KE_{\\max}$، تصادم كومتون وحفظ كمية الحركة $p = \\frac{h}{\\lambda}$، وموجات دي برولي المادية $\\lambda = \\frac{h}{mv}$.',
          theoryContentEn: `### 1. Blackbody Radiation & Planck's Quantum Hypothesis
- **Classical Wave Theory Failure:** Classical electromagnetism predicted that radiation intensity continuously increases as wavelength decreases toward the ultraviolet (the "ultraviolet catastrophe").
- **Planck's Law:** Radiation is emitted and absorbed not as continuous waves, but in discrete, localized packets of energy called **photons**:
  $$E = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}$$
  where $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ is Planck's constant, $c = 3 \\times 10^8\\text{ m/s}$ is the speed of light in vacuum, and $\\nu$ is frequency.
- **Wien's Displacement Law:** The wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) is inversely proportional to absolute temperature ($T$ in Kelvin):
  $$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$$

### 2. The Photoelectric Effect & Einstein's Equation
- **Phenomenon:** The emission of electrons from a clean metal surface when illuminated by electromagnetic radiation of sufficiently high frequency.
- **Work Function ($W_0$ or $\\Phi$):** The minimum energy required to liberate an electron from the metal surface without giving it kinetic energy:
  $$W_0 = h \\cdot \\nu_c = \\frac{h \\cdot c}{\\lambda_c}$$
  where $\\nu_c$ is the threshold critical frequency and $\\lambda_c$ is the threshold wavelength.
- **Einstein's Photoelectric Equation:**
  $$E_{\\text{photon}} = W_0 + KE_{\\max}$$
  $$h \\cdot \\nu = h \\cdot \\nu_c + \\frac{1}{2} m_e v_{\\max}^2 = e \\cdot V_{\\text{stop}}$$
  where $e = 1.6 \\times 10^{-19}\\text{ C}$ and $V_{\\text{stop}}$ is the stopping (cutoff) potential.
- **Key Experimental Facts:**
  - If $\\nu < \\nu_c$: No photoelectrons are emitted, regardless of radiation intensity or exposure duration.
  - If $\\nu \\ge \\nu_c$: Emission is instantaneous (within $10^{-9}\\text{ s}$).
  - Increasing radiation **intensity** increases the **number** of emitted photoelectrons per second (photocurrent), but leaves their maximum kinetic energy unchanged.
  - Increasing radiation **frequency** increases the **maximum kinetic energy** ($KE_{\\max}$) of photoelectrons linearly.

### 3. The Compton Effect & Photon Momentum
- In 1923, Arthur Compton scattered high-energy X-ray and gamma-ray photons off stationary free electrons:
  - The scattered photon had a **longer wavelength** (lower frequency and lower energy):
    $$\\Delta \\lambda = \\lambda' - \\lambda = \\frac{h}{m_e c} (1 - \\cos\\theta)$$
  - The electron was ejected with kinetic energy: $KE = h\\nu - h\\nu'$.
- **Significance:** Proves conclusively that photons possess particle properties:
  - **Photon Linear Momentum:**
    $$p = \\frac{E}{c} = \\frac{h \\cdot \\nu}{c} = \\frac{h}{\\lambda}$$
  - **Photon Relativistic Mass:**
    $$m = \\frac{E}{c^2} = \\frac{h \\cdot \\nu}{c^2} = \\frac{h}{\\lambda \\cdot c}$$
  - Both **total energy** and **total linear momentum** are conserved during the collision.

### 4. De Broglie's Matter Wave Hypothesis
- In 1924, Louis de Broglie hypothesized that since light displays dual wave-particle properties, moving material particles (such as electrons, protons, and neutrons) must also exhibit wave properties:
  $$\\lambda = \\frac{h}{p} = \\frac{h}{m \\cdot v}$$
  where $\\lambda$ is the de Broglie matter wavelength.
- **Electron Microscope:** Uses high accelerating potential $V$ to impart large kinetic energy ($KE = e V = \\frac{1}{2} m v^2$), which reduces the de Broglie wavelength of electrons to values thousands of times smaller than visible light:
  $$\\lambda = \\frac{h}{\\sqrt{2 m_e e V}}$$
  This allows the electron microscope to resolve microscopic viral and atomic details far below the diffraction limit of optical microscopes.`,
          theoryContentAr: `### ١. إشعاع الجسم الأسود وفرضية بلانك الكمية
- **قصور النظرية الكلاسيكية (الفيزياء الموجية التقليدية):** افترضت الفيزياء الكلاسيكية أن الإشعاع موجات كهرومغناطيسية متصلة، وتوقعت زيادة شدة الإشعاع كلما قل الطول الموجي مقترباً من الصفر (كارثة الأشعة فوق البنفسجية).
- **فرضية ماكس بلانك (١٩٠٠):** الإشعاع يتألف من كمات محددة وصغيرة من الطاقة تُسمى **الفوتونات**:
  $$E = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}$$
  حيث $h = 6.625 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$ ثابت بلانك، $c = 3 \\times 10^8\\text{ م/ث}$ سرعة الضوء في الفراغ، و $\\nu$ تردد الإشعاع.
- **قانون فين للإزاحة:** الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$) يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع ($T$ بالكلفن):
  $$\\lambda_{\\max} \\cdot T = \\text{ثابت} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$$

### ٢. التأثير الكهروضوئي ومعادلة أينشتاين
- **الظاهرة:** انبعاث إلكترونات (إلكترونات ضوئية) من أسطح المعادن عند سقوط ضوء ذي تردد مناسب عليها.
- **دالة الشغل ($W_0$):** الحد الأدنى من الطاقة اللازم لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة:
  $$W_0 = h \\cdot \\nu_c = \\frac{h \\cdot c}{\\lambda_c}$$
  حيث $\\nu_c$ هو التردد الحرج، و $\\lambda_c$ هو الطول الموجي الحرج.
- **معادلة أينشتاين للظاهرة الكهروضوئية:**
  $$E_{\\text{فوتون}} = W_0 + KE_{\\max}$$
  $$h \\cdot \\nu = h \\cdot \\nu_c + \\frac{1}{2} m_e v_{\\max}^2 = e \\cdot V_{\\text{stop}}$$
  حيث $V_{\\text{stop}}$ هو جهد الإيقاف (جهد القطع).
- **الحقائق التجريبية الحاسمة:**
  - إذا كان $\\nu < \\nu_c$: لا تنبعث أي إلكترونات مهما زادت شدة الضوء أو طالت فترة تعريضه.
  - إذا كان $\\nu \\ge \\nu_c$: يحدث الانبعاث فورياً (في زمن أقل من $10^{-9}\\text{ ثانية}$).
  - زيادة **شدة الضوء** تزيد من **عدد** الإلكترونات المنبعثة في الثانية (شدة التيار الكهروضوئي)، دون أي تأثير على طاقة حركتها.
  - زيادة **تردد الضوء** تزيد من **طاقة الحركة العظمى** ($KE_{\\max}$) للإلكترونات وسرعتها خطياً.

### ٣. ظاهرة كومتون وإثبات الصفة الجسيمية للضوء
- عند إسقاط فوتون ذي طاقة عالية (أشعة إكس أو غاما) على إلكترون حر ساكن:
  - يتشتت الفوتون بطاقة أقل وتردد أقل و**طول موجي أكبر** ($\\lambda' > \\lambda$).
  - يكتسب الإلكترون طاقة حركة ويتشتت بسرعة متزايدة.
- **الدلالة الفيزيائية:** إثبات أن الفوتون جسيم يمتلك كتلة وكمية حركة ويخضع لقانوني بقاء الطاقة وبقاء كمية الحركة:
  - **كمية حركة الفوتون:**
    $$p = \\frac{E}{c} = \\frac{h \\cdot \\nu}{c} = \\frac{h}{\\lambda}$$
  - **الكتلة المكافئة للفوتون أثناء حركته:**
    $$m = \\frac{E}{c^2} = \\frac{h \\nu}{c^2} = \\frac{h}{\\lambda c}$$

### ٤. فرضية دي برولي للموجات المادية
- افترض لويس دي برولي (١٩٢٤) أنه كما أن للضوء طبيعة مزدوجة (موجية وجسيمية)، فإن لأي جسيم مادي متحرك موجة مصاحبة لحركته:
  $$\\lambda = \\frac{h}{p} = \\frac{h}{m \\cdot v}$$
- **المجهر الإلكتروني:** يُعجل شعاع من الإلكترونات بفرق جهد كهربي مرتفع $V$ فيكتسب طاقة حركة هائلة، فيقصر الطول الموجي المصاحب لحركته إلى قيم أصغر بآلاف المرات من الطول الموجي للضوء المرئي:
  $$\\lambda = \\frac{h}{\\sqrt{2 m_e e V}}$$
  مما يمكنه من تكبير ورؤية أدق التفاصيل الفيروسية التي تعجز عنها المجاهر الضوئية لحيود الضوء.`,
          formulas: [
            { labelEn: 'Photon Energy (Planck)', labelAr: 'طاقة الفوتون لبلانك', latex: 'E = h \\nu = \\frac{h c}{\\lambda}' },
            { labelEn: 'Einstein Photoelectric Equation', labelAr: 'معادلة أينشتاين الكهروضوئية', latex: 'h \\nu = W_0 + \\frac{1}{2} m_e v^2' },
            { labelEn: 'Photon Linear Momentum', labelAr: 'كمية حركة الفوتون', latex: 'p = \\frac{h}{\\lambda} = \\frac{E}{c}' },
            { labelEn: 'De Broglie Matter Wavelength', labelAr: 'طول موجة دي برولي المادية', latex: '\\lambda = \\frac{h}{m v}' },
            { labelEn: 'Wien\'s Displacement Law', labelAr: 'قانون فين للإزاحة', latex: '\\lambda_{\\max} \\cdot T = \\text{const}' }
          ],
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced Physics Handbook',
            bookTitleAr: 'مرجع الفيزياء المتقدمة - البكالوريا المصرية الدولية',
            grade: 'Grade 12 STEM',
            term: 'Full Year',
            officialCode: 'EGBAC-PHYS-ADV-CH1',
            pageRange: 'pp. 110 - 158'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Quantum Photons, Photoelectric Emission & De Broglie Waves',
            titleAr: 'خطة درس: فوتونات الكم، الانبعاث الكهروضوئي وموجات دي برولي',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'EGBAC-PHYS-ADV-CH1',
            bloomsObjectivesEn: [
              'Derive stopping potential from Einstein\'s photoelectric equation and Planck\'s constant.',
              'Apply conservation of relativistic four-momentum to Compton photon-electron scattering.',
              'Calculate the accelerating potential required for electron beam microscopy of sub-nanometer viruses.'
            ],
            bloomsObjectivesAr: [
              'استنتاج جهد الإيقاف من معادلة أينشتاين الكهروضوئية وثابت بلانك.',
              'تطبيق قانوني حفظ الطاقة وكمية الحركة على تصادم كومتون بين الفوتون والإلكترون.',
              'حساب فرق الجهد اللازم لتعجيل حزمة إلكترونات في المجهر الإلكتروني لفحص فيروس بأبعاد نانومترية.'
            ],
            prerequisitesEn: ['Wave optics', 'Relativistic energy', 'Electromagnetic spectrum'],
            prerequisitesAr: ['بصريات الموجات', 'الطاقة والكتلة النسبية', 'الطيف الكهرومغناطيسي'],
            keyVocabularyEn: [
              { term: 'Work Function (W_0)', definition: 'Minimum photon energy required to liberate an electron from a metal surface.' },
              { term: 'De Broglie Wavelength', definition: 'The wavelength of quantum probability waves associated with a moving particle.' }
            ],
            keyVocabularyAr: [
              { term: 'دالة الشغل', definition: 'أقل طاقة ضوئية تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.' },
              { term: 'طول موجة دي برولي', definition: 'الطول الموجي المصاحب لحركة أي جسيم مادي ذي كتلة وسرعة.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Failure of Classical Wave Theory',
                phaseAr: 'قصور النظرية الموجية الكلاسيكية',
                duration: '20 mins',
                activitiesEn: 'Analyzing blackbody spectral curves and discussing the ultraviolet catastrophe.',
                activitiesAr: 'تحليل منحنيات بلانك ومقارنة التوقعات الكلاسيكية مع النتائج المعملية الفعلية.'
              },
              {
                phaseEn: 'Photoelectric & Compton Proofs',
                phaseAr: 'إثباتات الظاهرة الكهروضوئية وكومتون',
                duration: '35 mins',
                activitiesEn: 'Plotting KE_max versus frequency and determining slope as Planck\'s constant h.',
                activitiesAr: 'رسم العلاقة البيانية بين طاقة الحركة وتردد الضوء الساقط وإثبات أن الميل يساوي ثابت بلانك.'
              },
              {
                phaseEn: 'Wave-Particle Synthesis & Microscopy',
                phaseAr: 'التكامل الموجي-الجسيمي والمجهر الإلكتروني',
                duration: '35 mins',
                activitiesEn: 'Solving de Broglie resolution problems for electron microscopes.',
                activitiesAr: 'حل مسائل القدرة التحليلية للمجهر الإلكتروني بدلالة فرق الجهد المعجل.'
              }
            ],
            commonMisconceptionsEn: [
              'Assuming that higher light intensity can liberate electrons when frequency is below the critical threshold.',
              'Confusing matter waves (de Broglie) with electromagnetic waves.'
            ],
            commonMisconceptionsAr: [
              'الظن بأن زيادة شدة الضوء يمكن أن تحرر إلكترونات إذا كان التردد أقل من التردد الحرج.',
              'الخلط بين الموجات المادية المصاحبة للجسيمات (دي برولي) وبين الموجات الكهرومغناطيسية الضوئية.'
            ],
            differentiationEn: {
              struggling: 'Use interactive simulation sliders showing photon energy packets hitting cathode electrons.',
              advanced: 'Derive the Compton wavelength shift formula from relativistic four-momentum invariance.'
            },
            differentiationAr: {
              struggling: 'استخدام برمجيات المحاكاة التفاعلية لتوضيح اصطدام فوتون مفرد بإلكترون سطحي وتحرره.',
              advanced: 'استنتاج إزاحة كومتون من حفظ كمية الحركة ثنائية الأبعاد في النسبية الخاصة.'
            },
            formativeAssessmentEn: 'Why is an electron microscope capable of resolving smaller objects than an optical microscope?',
            formativeAssessmentAr: 'فسر: لماذا يتميز المجهر الإلكتروني بقدرة تحليلية هائلة مقارنة بالمجهر الضوئي؟',
            exitTicketQuestion: {
              questionEn: 'If monochromatic light of frequency $\\nu = 2 \\nu_c$ illuminates a metal surface with work function $W_0$, what is the maximum kinetic energy of the emitted photoelectrons?',
              questionAr: 'إذا سقط ضوء أحادي اللون تردده $\\nu = 2 \\nu_c$ على سطح فلز دالة شغله $W_0$، فما أقصى طاقة حركة للإلكترونات الكهروضوئية المنبعثة؟',
              solutionEn: 'Using Einstein\'s equation: $KE_{\\max} = h\\nu - W_0 = h(2\\nu_c) - h\\nu_c = h\\nu_c = W_0$.',
              solutionAr: 'بتطبيق معادلة أينشتاين: $KE_{\\max} = h\\nu - W_0 = h(2\\nu_c) - h\\nu_c = h\\nu_c = W_0$.'
            }
          },
          worksheet: {
            id: 'egbac_phys_ws_1',
            titleEn: 'Worksheet: Photons, Compton Collision & De Broglie Waves',
            titleAr: 'ورقة عمل: الفوتونات، تصادم كومتون وموجات دي برولي المادية',
            descriptionEn: 'Advanced analytical problems on quantum photon energy, work function, Compton scattering, and electron beam microscopy.',
            descriptionAr: 'مسائل تحليلية متقدمة في طاقة الفوتون ودالة الشغل وتشتت كومتون والمجهر الإلكتروني.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'egbac_phys_ws_p1',
                titleEn: 'De Broglie Wavelength of Accelerated Electron',
                titleAr: 'طول موجة دي برولي لإلكترون معجل',
                difficulty: 'medium',
                questionEn: 'An electron is accelerated from rest through a potential difference $V = 100\\text{ V}$. Find the order of magnitude of its de Broglie wavelength.',
                questionAr: 'عُجل إلكترون من السكون عبر فرق جهد قدره $V = 100\\text{ فولت}$. احسب رتبة المقدار لطول موجة دي برولي المصاحبة لحركته.',
                optionsEn: ['$\\approx 0.123\\text{ nm}$', '$\\approx 1.23\\text{ nm}$', '$\\approx 12.3\\text{ nm}$', '$\\approx 0.012\\text{ nm}$'],
                optionsAr: ['$\\approx 0.123\\text{ نانومتر}$', '$\\approx 1.23\\text{ نانومتر}$', '$\\approx 12.3\\text{ نانومتر}$', '$\\approx 0.012\\text{ نانومتر}$'],
                correctAnswer: '$\\approx 0.123\\text{ nm}$',
                correctIndex: 0,
                hintEn: 'Use $\\lambda = \\frac{h}{\\sqrt{2 m_e e V}}$.',
                hintAr: 'طبق العلاقة $\\lambda = \\frac{h}{\\sqrt{2 m_e e V}}$.',
                stepByStepSolutionEn: [
                  'Kinetic energy gained: $KE = e V = 1.6 \\times 10^{-19} \\times 100 = 1.6 \\times 10^{-17}\\text{ J}$.',
                  'Linear momentum: $p = \\sqrt{2 m_e KE} = \\sqrt{2 \\times 9.1 \\times 10^{-31} \\times 1.6 \\times 10^{-17}} \\approx 5.396 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$.',
                  'De Broglie wavelength: $\\lambda = \\frac{h}{p} = \\frac{6.625 \\times 10^{-34}}{5.396 \\times 10^{-24}} \\approx 1.228 \\times 10^{-10}\\text{ m} = 0.123\\text{ nm}$.'
                ],
                stepByStepSolutionAr: [
                  'طاقة الحركة المكتسبة: $KE = eV = 1.6 \\times 10^{-19} \\times 100 = 1.6 \\times 10^{-17}\\text{ جول}$.',
                  'كمية الحركة: $p = \\sqrt{2 m_e KE} = \\sqrt{2 \\times 9.1 \\times 10^{-31} \\times 1.6 \\times 10^{-17}} \\approx 5.396 \\times 10^{-24}\\text{ كجم}\\cdot\\text{م/ث}$.',
                  'طول موجة دي برولي: $\\lambda = \\frac{h}{p} = \\frac{6.625 \\times 10^{-34}}{5.396 \\times 10^{-24}} \\approx 1.228 \\times 10^{-10}\\text{ م} = 0.123\\text{ نانومتر}$.'
                ],
                teacherTipEn: 'Notice that $0.123\\text{ nm}$ is comparable to atomic spacing in crystals, allowing electron diffraction.',
                teacherTipAr: 'لاحظ أن الطول الموجي $0.123\\text{ نانومتر}$ يقارب المسافات البينية لذرات البلورات مما يتيح حيود الإلكترونات.'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'Photoelectric Quantum Simulator',
            titleAr: 'محاكي الظاهرة الكهروضوئية الكمية',
            descriptionEn: 'Interactive photocell experiment testing threshold frequencies, stopping potentials, and photon intensity effects.',
            descriptionAr: 'تجربة افتراضية للخلية الكهروضوئية لقياس التردد الحرج وجهد الإيقاف وطاقة فوتونات الضوء.'
          }
        }
      ],
      solvedExamples: [
        {
          id: 'egbac_phys_se_01',
          titleEn: 'Advanced Example 1: Photoelectric Stopping Potential',
          titleAr: 'مثال متقدم ١: حساب جهد الإيقاف في الخلية الكهروضوئية',
          difficulty: 'easy',
          questionEn: 'Light of wavelength $\\lambda = 300\\text{ nm}$ strikes a metal surface with work function $W_0 = 2.4\\text{ eV}$. Given $h c \\approx 1240\\text{ eV}\\cdot\\text{nm}$, calculate the stopping potential $V_{\\text{stop}}$.',
          questionAr: 'سقط ضوء طوله الموجي $\\lambda = 300\\text{ نانومتر}$ على سطح فلز دالة شغله $W_0 = 2.4\\text{ إلكترون فولت}$. بمعلومية $h c \\approx 1240\\text{ eV}\\cdot\\text{nm}$، احسب جهد الإيقاف $V_{\\text{stop}}$.',
          optionsEn: ['$1.73\\text{ V}$', '$2.40\\text{ V}$', '$4.13\\text{ V}$', '$0.85\\text{ V}$'],
          optionsAr: ['$1.73\\text{ فولت}$', '$2.40\\text{ فولت}$', '$4.13\\text{ فولت}$', '$0.85\\text{ فولت}$'],
          correctAnswer: '$1.73\\text{ V}$',
          correctIndex: 0,
          hintEn: 'Photon energy $E = \\frac{hc}{\\lambda} = \\frac{1240}{300}\\text{ eV}$, then $e V_{\\text{stop}} = E - W_0$.',
          hintAr: 'طاقة الفوتون $E = \\frac{hc}{\\lambda} = \\frac{1240}{300}\\text{ eV}$، ثم $e V_{\\text{stop}} = E - W_0$.',
          stepByStepSolutionEn: [
            'Photon energy: $E = \\frac{1240}{300} = 4.133\\text{ eV}$.',
            'Maximum kinetic energy: $KE_{\\max} = E - W_0 = 4.133 - 2.40 = 1.733\\text{ eV}$.',
            'Stopping potential: Since $KE_{\\max} = e V_{\\text{stop}}$, $V_{\\text{stop}} = 1.733\\text{ V}$.'
          ],
          stepByStepSolutionAr: [
            'طاقة الفوتون الساقط: $E = \\frac{1240}{300} = 4.133\\text{ إلكترون فولت}$.',
            'طاقة الحركة العظمى: $KE_{\\max} = E - W_0 = 4.133 - 2.40 = 1.733\\text{ إلكترون فولت}$.',
            'جهد الإيقاف: بما أن $KE_{\\max} = e V_{\\text{stop}}$، إذن $V_{\\text{stop}} = 1.733\\text{ فولت}$.'
          ],
          teacherTipEn: 'Stopping potential depends only on photon frequency and the metal work function, not on light intensity.',
          teacherTipAr: 'جهد الإيقاف يعتمد حصرياً على تردد الضوء ودالة شغل الفلز ولا يتأثر إطلاقاً بشدة الضوء.'
        }
      ],
      exerciseProblems: [
        {
          id: 'egbac_phys_ex_01',
          titleEn: 'Exercise 1: Compton Scattering Wavelength Shift',
          titleAr: 'تمرين ١: مقدار التغير في الطول الموجي في ظاهرة كومتون',
          difficulty: 'easy',
          questionEn: 'In a Compton scattering experiment, an X-ray photon is scattered by an angle $\\theta = 90^\\circ$. What is the increase in wavelength $\\Delta \\lambda$?',
          questionAr: 'في تجربة كومتون، تشتت فوتون أشعة سينية بزاوية $\\theta = 90^\\circ$. ما مقدار الزيادة في الطول الموجي للفوتون $\\Delta \\lambda$؟',
          optionsEn: ['$\\frac{h}{m_e c} \\approx 2.43 \\times 10^{-12}\\text{ m}$', '$0$', '$\\frac{2h}{m_e c}$', '$\\frac{h}{2 m_e c}$'],
          optionsAr: ['$\\frac{h}{m_e c} \\approx 2.43 \\times 10^{-12}\\text{ م}$', '$0$', '$\\frac{2h}{m_e c}$', '$\\frac{h}{2 m_e c}$'],
          correctAnswer: '$\\frac{h}{m_e c} \\approx 2.43 \\times 10^{-12}\\text{ m}$',
          correctIndex: 0,
          hintEn: 'Use Compton formula: $\\Delta \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$ with $\\cos(90^\\circ) = 0$.',
          hintAr: 'طبق قانون كومتون: $\\Delta \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$ حيث $\\cos(90^\\circ) = 0$.',
          stepByStepSolutionEn: [
            'Compton wavelength shift: $\\Delta \\lambda = \\frac{h}{m_e c} (1 - \\cos\\theta)$.',
            'For $\\theta = 90^\\circ$, $\\cos(90^\\circ) = 0$.',
            'Therefore, $\\Delta \\lambda = \\frac{h}{m_e c} = \\lambda_c \\approx 2.426 \\times 10^{-12}\\text{ m} = 0.00243\\text{ nm}$.'
          ],
          stepByStepSolutionAr: [
            'قانون إزاحة كومتون: $\\Delta \\lambda = \\frac{h}{m_e c} (1 - \\cos\\theta)$.',
            'عند زاوية تشتت $\\theta = 90^\\circ$ يكون $\\cos(90^\\circ) = 0$.',
            'إذن التغير في الطول الموجي $\\Delta \\lambda = \\frac{h}{m_e c} \\approx 2.43 \\times 10^{-12}\\text{ م}$.'
          ],
          teacherTipEn: 'The quantity $h / (m_e c)$ is known as the Compton wavelength of the electron.',
          teacherTipAr: 'المقدار $\\frac{h}{m_e c}$ يُسمى الطول الموجي لكومتون للإلكترون وهو ثابت فيزيائي أساسي.'
        }
      ],
      databank: egBacPhysCh1Databank
    }
  ]
};
