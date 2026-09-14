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
              },
              {
                id: 'egbac_phys_ws_p2',
                titleEn: 'Photoelectric Threshold & Quantum Stopping Potential',
                titleAr: 'التردد الحرج وجهد الإيقاف الكمي في الخلية الكهروضوئية',
                difficulty: 'hots',
                diagramType: 'phys_photoelectric_circuit',
                questionEn: 'A potassium photocathode has work function $W_0 = 2.25\\text{ eV}$. It is illuminated with monochromatic light of frequency $\\nu = 1.20 \\times 10^{15}\\text{ Hz}$. What is the stopping potential $V_{\\text{stop}}$ required to reduce the photocurrent to zero? ($h = 4.136 \\times 10^{-15}\\text{ eV}\\cdot\\text{s}$)',
                questionAr: 'مهبط خلية كهروضوئية من البوتاسيوم دالة شغله $W_0 = 2.25\\text{ eV}$. أُضيء بضوء أحادي اللون تردده $\\nu = 1.20 \\times 10^{15}\\text{ هرتز}$. احسب قيمة جهد الإيقاف $V_{\\text{stop}}$ اللازم لقطع التيار الكهروضوئي تماماً.',
                optionsEn: [
                  '2.71 V',
                  '4.96 V',
                  '1.85 V',
                  '0.85 V'
                ],
                optionsAr: [
                  '٢,٧١ فولت',
                  '٤,٩٦ فولت',
                  '١,٨٥ فولت',
                  '٠,٨٥ فولت'
                ],
                correctAnswer: '2.71 V',
                correctIndex: 0,
                hintEn: 'Find photon energy $E = h\\nu$ in eV, then $e V_{\\text{stop}} = KE_{\\max} = E - W_0$.',
                hintAr: 'احسب طاقة الفوتون $E = h\\nu$ بالإلكترون فولت، ثم $e V_{\\text{stop}} = E - W_0$.',
                stepByStepSolutionEn: [
                  'Photon energy: $E = h\\nu = (4.136 \\times 10^{-15}\\text{ eV}\\cdot\\text{s}) \\times (1.20 \\times 10^{15}\\text{ s}^{-1}) = 4.963\\text{ eV}$.',
                  'Maximum kinetic energy of photoelectrons: $KE_{\\max} = E - W_0 = 4.963\\text{ eV} - 2.250\\text{ eV} = 2.713\\text{ eV}$.',
                  'Stopping voltage: $V_{\\text{stop}} = \\frac{KE_{\\max}}{e} = 2.713\\text{ V} \\approx 2.71\\text{ V}$.'
                ],
                stepByStepSolutionAr: [
                  'طاقة الفوتون الساقط: $E = h\\nu = 4.136 \\times 10^{-15} \\times 1.20 \\times 10^{15} = 4.963\\text{ إلكترون فولت}$.',
                  'أقصى طاقة حركة للإلكترونات: $KE_{\\max} = E - W_0 = 4.963 - 2.25 = 2.713\\text{ إلكترون فولت}$.',
                  'جهد الإيقاف: $V_{\\text{stop}} = 2.71\\text{ فولت}$.'
                ],
                teacherTipEn: 'The stopping potential is independent of the incident photon flux (light intensity); doubling intensity doubles current but leaves stopping voltage unchanged.',
                teacherTipAr: 'جهد الإيقاف لا يعتمد إطلاقاً على شدة الضوء الساقط، فمضاعفة الشدة تضاعف عدد الإلكترونات المنبعثة لكنها لا تغير جهد الإيقاف.'
              },
              {
                id: 'egbac_phys_ws_p3',
                titleEn: 'Compton Scattering Maximum Fractional Wavelength Shift',
                titleAr: 'أقصى انزياح نسبي في الطول الموجي بتشتت كومتون',
                difficulty: 'hots',
                questionEn: 'An incident X-ray photon has wavelength $\\lambda = 0.0243\\text{ nm}$ (matching the Compton wavelength $\\lambda_C = \\frac{h}{m_e c}$). What is the wavelength of the photon after being scattered directly backwards through $\\theta = 180^\\circ$?',
                questionAr: 'فوتون أشعة سينية طوله الموجي $\\lambda = 0.0243\\text{ nm}$ (يساوي طول موجة كومتون $\\lambda_C = \\frac{h}{m_e c}$). ما الطول الموجي للفوتون بعد تشتته في الاتجاه المعاكس مباشرة بزاوية $\\theta = 180^\\circ$؟',
                optionsEn: [
                  '0.0729 nm (3 times initial)',
                  '0.0486 nm (2 times initial)',
                  '0.0243 nm (unchanged)',
                  '0.0121 nm (half initial)'
                ],
                optionsAr: [
                  '٠,٠٧٢٩ نانومتر (ثلاثة أمثال الابتدائي)',
                  '٠,٠٤٨٦ نانومتر (ضعف الابتدائي)',
                  '٠,٠٢٤٣ نانومتر (دون تغيير)',
                  '٠,٠١٢١ نانومتر (نصف الابتدائي)'
                ],
                correctAnswer: '0.0729 nm (3 times initial)',
                correctIndex: 0,
                hintEn: 'Use Compton formula: $\\Delta\\lambda = \\lambda^\\prime - \\lambda = \\lambda_C (1 - \\cos\\theta)$ where $\\cos 180^\\circ = -1$.',
                hintAr: 'طبق معادلة كومتون: $\\Delta\\lambda = \\lambda_C (1 - \\cos\\theta)$ حيث $\\cos 180^\\circ = -1$.',
                stepByStepSolutionEn: [
                  'Compton shift equation: $\\Delta\\lambda = \\lambda^\\prime - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta) = \\lambda_C (1 - \\cos\\theta)$.',
                  'For backscattering $\\theta = 180^\\circ$, $1 - \\cos 180^\\circ = 1 - (-1) = 2$.',
                  'Therefore: $\\Delta\\lambda = 2 \\lambda_C = 2 \\times 0.0243\\text{ nm} = 0.0486\\text{ nm}$.',
                  'New wavelength: $\\lambda^\\prime = \\lambda + \\Delta\\lambda = 0.0243\\text{ nm} + 0.0486\\text{ nm} = 0.0729\\text{ nm} = 3\\lambda$.'
                ],
                stepByStepSolutionAr: [
                  'معادلة كومتون: $\\Delta\\lambda = \\lambda^\\prime - \\lambda = \\lambda_C (1 - \\cos\\theta)$.',
                  'عند التشتت في الاتجاه المعاكس $\\theta = 180^\\circ$: $1 - \\cos 180^\\circ = 1 - (-1) = 2$.',
                  'مقدار الزيادة في الطول الموجي: $\\Delta\\lambda = 2 \\lambda_C = 2 \\times 0.0243 = 0.0486\\text{ نانومتر}$.',
                  'الطول الموجي الجديد: $\\lambda^\\prime = 0.0243 + 0.0486 = 0.0729\\text{ نانومتر} = 3\\lambda$.'
                ],
                teacherTipEn: 'Maximum wavelength shift in Compton scattering always occurs at 180 degrees backscatter and is exactly $2\\lambda_C \\approx 0.0485\\text{ nm}$.',
                teacherTipAr: 'أقصى تغير في الطول الموجي لظاهرة كومتون يحدث دائماً عند زاوية 180 درجة (ارتداد كلي) ويساوي ضعف طول موجة كومتون.'
              }
            ]
          },
          interactiveWidget: {
            type: 'physics_photoelectric',
            titleEn: 'Photoelectric Quantum Simulator',
            titleAr: 'محاكي الظاهرة الكهروضوئية الكمية',
            descriptionEn: 'Interactive photocell experiment testing threshold frequencies, stopping potentials, and photon intensity effects.',
            descriptionAr: 'تجربة افتراضية للخلية الكهروضوئية لقياس التردد الحرج وجهد الإيقاف وطاقة فوتونات الضوء.'
          }
        },
        {
          "id": "egbac_phys_l2",
          "titleEn": "Quantum Atomic Physics: Bohr Postulates, Spectral Series & Characteristic X-Rays",
          "titleAr": "الفيزياء الذرية الكمية: فروض بور، السلاسل الطيفية والأشعة السينية المميزة",
          "summaryEn": "Quantized angular momentum, stationary orbits, hydrogen emission series (Lyman to Pfund), Rydberg equation, Duane-Hunt continuous X-ray cutoff, and Moseley atomic number law.",
          "summaryAr": "تكميم كمية الحركة الزاوية لإلكترونات بور، المدارات المستقرة، سلاسل طيف ذرة الهيدروجين من ليمان إلى بفوند، قانون ريدبرج، حد ديوان-هنت للأشعة السينية وقانون موزلي للعدد الذري.",
          "theoryContentEn": "### 1. The Bohr Model of the Hydrogen Atom\nNiels Bohr synthesized classical Coulomb forces with Planck's quantum theory through three foundational postulates:\n- **Quantization of Orbital Angular Momentum:**\n  Electrons orbit the nucleus only in stationary non-radiating states where angular momentum $L$ is an integer multiple of $\\hbar = \\frac{h}{2\\pi}$:\n  $L = m_e v r = \\frac{n h}{2\\pi} \\quad (n = 1, 2, 3, \\dots)$\n  Equating Coulomb attraction with centripetal force yields the Bohr radius and orbital energy:\n  $r_n = n^2 r_1 = n^2 (0.0529\\,\\text{nm}), \\quad E_n = -\\frac{13.6\\,\\text{eV}}{n^2}$\n- **Photon Transition Frequency (Bohr Frequency Condition):**\n  $h\\nu = E_{n_2} - E_{n_1} = 13.6\\,\\text{eV} \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$\n\n---\n\n### 2. Spectral Series of Hydrogen & The Rydberg Formula\nWhen excited electrons transition from upper energy levels $n_2$ to lower levels $n_1$, photons are emitted across discrete spectral series:\n- **Lyman Series ($n_1 = 1, \\, n_2 \\ge 2$):** Ultraviolet region. Highest energy transitions.\n- **Balmer Series ($n_1 = 2, \\, n_2 \\ge 3$):** Visible light region ($H_\\alpha = 656\\,\\text{nm}$ red, $H_\\beta = 486\\,\\text{nm}$ cyan, $H_\\gamma = 434\\,\\text{nm}$ blue, $H_\\delta = 410\\,\\text{nm}$ violet).\n- **Paschen Series ($n_1 = 3, \\, n_2 \\ge 4$):** Near-infrared region.\n- **Brackett Series ($n_1 = 4, \\, n_2 \\ge 5$):** Infrared region.\n- **Pfund Series ($n_1 = 5, \\, n_2 \\ge 6$):** Far-infrared region.\n- **Rydberg Formula:**\n  $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad R_H \\approx 1.09737 \\times 10^7\\,\\text{m}^{-1}$\n\n---\n\n### 3. Production of X-Rays & Moseley's Law\nIn a Coolidge vacuum tube, high-energy electrons accelerated through potential $V$ collide with a heavy target metal (e.g. tungsten):\n- **Continuous Spectrum (Bremsstrahlung / Braking Radiation):**\n  Electrons decelerate in the target Coulomb field, converting kinetic energy into photons. The minimum wavelength (Duane-Hunt Law):\n  $\\lambda_{\\min} = \\frac{h c}{e V}$\n  Independent of the target element; depends solely on accelerating potential $V$.\n- **Characteristic (Line) Spectrum:**\n  High-energy incident electrons eject inner-shell electrons ($K$ or $L$ shells). Vacancies are filled by transitions from outer shells ($L \\to K$ for $K_\\alpha$, $M \\to K$ for $K_\\beta$), emitting photons characteristic of the target material.\n- **Moseley's Law:**\n  $\\sqrt{\\nu} = a(Z - b)$\n  Demonstrated that the fundamental characteristic of each chemical element is its atomic number $Z$ (nuclear charge), rather than its atomic mass.",
          "theoryContentAr": "### ١. نموذج بور لذرة الهيدروجين\nجمع نيلز بور بين الميكانيكا الكلاسيكية وقوانين كولوم مع نظرية الكم لبلانك وأينشتاين عبر ثلاثة فروض رئيسية:\n- **تكميم كمية الحركة الزاوية للمدارات المستقرة:**\n  يدور الإلكترون حول النواة في مدارات محددة دون إشعاع طاقة، وتكون كمية حركته الزاوية مضاعفات صحيحة لمقدار $\\frac{h}{2\\pi}$:\n  $m_e v r = \\frac{n h}{2\\pi} \\quad (n = 1, 2, 3, \\dots)$\n  بتطبيق اتزان القوة المركزية مع التجاذب الكولومي، نحصل على نصف قطر المدار وطاقة المستوى:\n  $r_n = n^2 r_1, \\quad E_n = -\\frac{13.6\\,\\text{eV}}{n^2}$\n- **شرط بور للتردد وانبعاث الفوتونات:**\n  $h\\nu = E_{n_2} - E_{n_1} = 13.6\\,\\text{eV} \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$\n\n---\n\n### ٢. سلاسل طيف ذرة الهيدروجين وقانون ريدبرج\nعند هبوط الإلكترونات المثارة من مستويات عليا $n_2$ إلى مستويات أدنى $n_1$ تشع فوتونات ضمن سلاسل طيفية مميزة:\n- **مجموعة ليمان ($n_1 = 1$):** في منطقة الأشعة فوق البنفسجية (أعلى طاقات وترددات).\n- **مجموعة بالمر ($n_1 = 2$):** في منطقة الضوء المنظور وتضم خطوط $H_\\alpha, H_\\beta, H_\\gamma, H_\\delta$.\n- **مجموعة باشن ($n_1 = 3$):** في منطقة الأشعة تحت الحمراء القريبة.\n- **مجموعة براكت ($n_1 = 4$):** في منطقة الأشعة تحت الحمراء المتوسطة.\n- **مجموعة بفوند ($n_1 = 5$):** في منطقة الأشعة تحت الحمراء البعيدة (أقل طاقات وترددات).\n- **معادلة ريدبرج العامة:**\n  $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad R_H \\approx 1.09737 \\times 10^7\\,\\text{m}^{-1}$\n\n---\n\n### ٣. توليد الأشعة السينية وقانون موزلي\nتتولد الأشعة السينية في أنبوبة كولدج باصطدام إلكترونات معجلة بفرق جهد $V$ مع مادة الهدف:\n- **الطيف المستمر (أشعة الكبح أو الفرملة):**\n  تباطؤ الإلكترونات السريعة قرب أنوية الهدف يؤدي لتحول طاقتها الحركية إلى فوتونات كهرومغناطيسية. أقصر طول موجي (قانون ديوان-هنت):\n  $\\lambda_{\\min} = \\frac{h c}{e V}$\n  يتوقف فقط على فرق الجهد المعجل للإلكترونات ولا يتوقف على نوع مادة الهدف.\n- **الطيف الخطي المميز:**\n  انتزاع إلكترون من المستويات الداخلية القريبة من النواة ($K$ أو $L$) ثم هبوط إلكترون من مستوى أعلى ليحل محله، فتنتج فوتونات ذات أطوال موجية محددة تميز عنصر الهدف فقط.\n- **قانون موزلي:**\n  $\\sqrt{\\nu} = a(Z - b)$\n  أثبت أن الخصائص الدورية للعناصر تتحدد بالعدد الذري $Z$ (شحنة النواة) وليس بالوزن الذري.",
          "formulas": [
            {
              "labelEn": "Bohr Quantized Angular Momentum",
              "labelAr": "تكميم كمية الحركة الزاوية لبور",
              "latex": "m_e v r = \\frac{n h}{2\\pi}"
            },
            {
              "labelEn": "Hydrogen Energy Levels",
              "labelAr": "طاقات مستويات ذرة الهيدروجين",
              "latex": "E_n = -\\frac{13.6}{n^2}\\,\\text{eV}"
            },
            {
              "labelEn": "Duane-Hunt Minimum X-Ray Wavelength",
              "labelAr": "قانون ديوان-هنت لأقصر طول موجي للأشعة السينية",
              "latex": "\\lambda_{\\min} = \\frac{h c}{e V}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "EG-Bac Advanced Physics Handbook",
            "bookTitleAr": "مرجع الفيزياء المتقدمة - البكالوريا المصرية الدولية",
            "grade": "Grade 12 STEM",
            "term": "Full Year",
            "officialCode": "EGBAC-PHYS-ADV-CH1-L2",
            "pageRange": "pp. 160 - 205"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Quantum Atomic Models, Hydrogen Spectral Series & X-Ray Spectroscopy",
            "titleAr": "خطة درس: النماذج الذرية الكمية، السلاسل الطيفية وطيف الأشعة السينية",
            "gradeLevel": "Grade 12 Advanced Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-PHYS-ADV-CH1-L2",
            "bloomsObjectivesEn": [
              "Derive the radius and energy level formulas for hydrogen-like single electron ions using Bohr postulates.",
              "Calculate the photon wavelength for transitions across Lyman, Balmer, and Paschen series.",
              "Analyze X-ray Coolidge tube spectra to compute Duane-Hunt minimum wavelength and target atomic number."
            ],
            "bloomsObjectivesAr": [
              "استنتاج نصف قطر وطاقة مستويات ذرة الهيدروجين والأيونات أحادية الإلكترون باستخدام فروض بور.",
              "حساب الطول الموجي للفوتونات المنبعثة في سلاسل ليمان وبالمر وباشن.",
              "تحليل منحنى طيف الأشعة السينية وحساب أقصر طول موجي والعدد الذري لمادة الهدف."
            ],
            "prerequisitesEn": [
              "Coulomb electrostatic force",
              "Centripetal circular acceleration",
              "Photon energy quantization"
            ],
            "prerequisitesAr": [
              "قانون كولوم للكهربية الساكنة",
              "قوة الجذب المركزية",
              "تكميم طاقة الفوتونات"
            ],
            "keyVocabularyEn": [
              {
                "term": "Stationary State",
                "definition": "A stable quantized atomic orbit where an electron does not radiate electromagnetic energy."
              },
              {
                "term": "Bremsstrahlung",
                "definition": "Continuous radiation emitted by the deceleration of charged particles passing through matter."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "المدار المستقر",
                "definition": "مستوى طاقة كمي مسموح به يدور فيه الإلكترون دون أن يشع أي طاقة كهرومغناطيسية."
              },
              {
                "term": "أشعة الفرملة (الكبح)",
                "definition": "إشعاع كهرومغناطيسي مستمر ناتج عن تباطؤ الإلكترونات السريعة في المجال الكولومي لمادة الهدف."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Bohr Postulates & Angular Momentum",
                "phaseAr": "فروض بور وتكميم كمية الحركة الزاوية",
                "duration": "30 mins",
                "activitiesEn": "Deriving electron orbital radii and energy levels from Coulomb-centripetal balance.",
                "activitiesAr": "استنتاج أنصاف الأقطار وطاقات المستويات من اتزان قوة كولوم مع القوة المركزية."
              },
              {
                "phaseEn": "Spectral Series & Transitions",
                "phaseAr": "السلاسل الطيفية والانتقالات الإلكترونية",
                "duration": "30 mins",
                "activitiesEn": "Calculating Lyman, Balmer, and Paschen wavelength limits with Rydberg constant.",
                "activitiesAr": "حساب أطول وأقصر الأطوال الموجية لسلاسل ليمان وبالمر وباشن."
              },
              {
                "phaseEn": "Coolidge Tube X-Ray Spectra",
                "phaseAr": "طيف الأشعة السينية وأنبوبة كولدج",
                "duration": "30 mins",
                "activitiesEn": "Deconstructing continuous vs characteristic peaks and applying Moseley law.",
                "activitiesAr": "تحليل طيف الأشعة السينية وتطبيق قانون ديوان-هنت وقانون موزلي."
              }
            ],
            "commonMisconceptionsEn": [
              "Confusing the series: Balmer is in the visible spectrum, while Lyman is strictly ultraviolet.",
              "Thinking characteristic X-rays depend on the tube voltage (they depend ONLY on the target element Z)."
            ],
            "commonMisconceptionsAr": [
              "الخلط بين السلاسل: مجموعة بالمر هي التي تقع في نطاق الضوء المرئي بينما ليمان تقع في الأشعة فوق البنفسجية.",
              "الاعتقاد بأن الطيف الخطي للأشعة السينية يتغير بتغير فرق الجهد (هو يتوقف فقط على العدد الذري لمادة الهدف)."
            ],
            "differentiationEn": {
              "struggling": "Provide an energy level ladder diagram showing downward transition arrows and emitted photon colors.",
              "advanced": "Calculate the reduced mass correction factor for positronium versus hydrogen spectra."
            },
            "differentiationAr": {
              "struggling": "استخدام مخطط سلمي لمستويات الطاقة لتوضيح أسهم الانتقال وألوان الفوتونات المنبعثة.",
              "advanced": "حساب تصحيح الكتلة المختزلة للبوزترونيوم مقارنة بطيف ذرة الهيدروجين."
            },
            "formativeAssessmentEn": "What is the ratio between the maximum and minimum wavelengths of the Lyman spectral series?",
            "formativeAssessmentAr": "ما هي النسبة بين أطول وأقصر طول موجي في متسلسلة ليمان؟",
            "exitTicketQuestion": {
              "questionEn": "Calculate the minimum continuous X-ray wavelength produced by a Coolidge tube operated at 50 kV.",
              "questionAr": "احسب أقصر طول موجي مستمر للأشعة السينية الناتجة من أنبوبة كولدج تعمل بجهد ٥٠ كيلو فولت.",
              "solutionEn": "$\\lambda_{\\min} = \\frac{h c}{e V} = \\frac{(6.625 \\times 10^{-34})(3 \\times 10^8)}{(1.6 \\times 10^{-19})(50 \\times 10^3)} = \\frac{1.9875 \\times 10^{-25}}{8 \\times 10^{-15}} \\approx 0.0248\\,\\text{nm} = 0.248\\,\\text{Å}$.",
              "solutionAr": "$\\lambda_{\\min} = \\frac{h c}{e V} = \\frac{(6.625 \\times 10^{-34})(3 \\times 10^8)}{(1.6 \\times 10^{-19})(50 \\times 10^3)} \\approx 0.0248\\,\\text{nm} = 0.248\\,\\text{Å}$."
            }
          },
          "worksheet": {
            "id": "egbac_phys_ws_2",
            "titleEn": "Worksheet 2: Quantum Atomic Physics & X-Ray Spectroscopy",
            "titleAr": "ورقة عمل ٢: الفيزياء الذرية الكمية والتحليل الطيفي للأشعة السينية",
            "descriptionEn": "Quantitative exercises on Bohr orbit quantization, Rydberg transitions, and continuous/characteristic X-ray production.",
            "descriptionAr": "مسائل كمية متقدمة على تكميم مدارات بور وانتقالات ريدبرج وطيف الأشعة السينية المستمر والمميز.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_phys_ws_p2_1",
                "titleEn": "Shortest Wavelength of Balmer Series (Series Limit)",
                "titleAr": "أقصر طول موجي في متسلسلة بالمر (حد المتسلسلة)",
                "difficulty": "medium",
                "diagramType": "phys_bohr_atom_series",
                "questionEn": "What is the shortest wavelength (series limit) emitted in the Balmer series of hydrogen ($n_1 = 2$), given that $R_H = 1.097 \\times 10^7\\,\\text{m}^{-1}$?",
                "questionAr": "ما هو أقصر طول موجي (حد المتسلسلة) المنبعث في متسلسلة بالمر لذرة الهيدروجين ($n_1 = 2$)، علماً بأن $R_H = 1.097 \\times 10^7\\,\\text{m}^{-1}$؟",
                "optionsEn": [
                  "$364.6\\,\\text{nm}$",
                  "$656.3\\,\\text{nm}$",
                  "$121.6\\,\\text{nm}$",
                  "$820.4\\,\\text{nm}$"
                ],
                "optionsAr": [
                  "$364.6\\,\\text{nm}$",
                  "$656.3\\,\\text{nm}$",
                  "$121.6\\,\\text{nm}$",
                  "$820.4\\,\\text{nm}$"
                ],
                "correctAnswer": "$364.6\\,\\text{nm}$",
                "correctIndex": 0,
                "hintEn": "Shortest wavelength corresponds to maximum photon energy, which occurs when the electron transitions from infinity ($n_2 = \\infty$) to $n_1 = 2$.",
                "hintAr": "أقصر طول موجي يقابل أقصى طاقة فوتون ممكنة، وتحدث عند هبوط الإلكترون من اللانهاية ($n_2 = \\infty$) إلى المستوى الثاني ($n_1 = 2$).",
                "stepByStepSolutionEn": [
                  "Step 1: In the Balmer series, the lower level is $n_1 = 2$. The shortest wavelength corresponds to transition from $n_2 = \\infty$.",
                  "Step 2: Apply Rydberg equation: $\\frac{1}{\\lambda_{\\min}} = R_H \\left(\\frac{1}{2^2} - \\frac{1}{\\infty^2}\\right) = \\frac{R_H}{4}$.",
                  "Step 3: Solve for $\\lambda$: $\\lambda_{\\min} = \\frac{4}{R_H} = \\frac{4}{1.097 \\times 10^7} \\approx 3.646 \\times 10^{-7}\\,\\text{m} = 364.6\\,\\text{nm}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: في متسلسلة بالمر المستوى الأدنى هو $n_1 = 2$. أقصر طول موجي يقابل الانتقال من $n_2 = \\infty$.",
                  "الخطوة ٢: بتطبيق معادلة ريدبرج: $\\frac{1}{\\lambda_{\\min}} = R_H \\left(\\frac{1}{4} - 0\\right) = \\frac{R_H}{4}$.",
                  "الخطوة ٣: حساب الطول الموجي: $\\lambda_{\\min} = \\frac{4}{R_H} = \\frac{4}{1.097 \\times 10^7} \\approx 364.6\\,\\text{nm}$."
                ],
                "teacherTipEn": "Notice that the Balmer limit (364.6 nm) lies right at the boundary between visible violet and near-ultraviolet.",
                "teacherTipAr": "لاحظ أن حد متسلسلة بالمر (364.6 نانومتر) يقع تماماً عند بداية الأشعة فوق البنفسجية القريبة."
              },
              {
                "id": "egbac_phys_ws_p2_2",
                "titleEn": "Accelerating Voltage in Coolidge X-Ray Tube",
                "titleAr": "حساب جهد التعجيل في أنبوبة كولدج للأشعة السينية",
                "difficulty": "medium",
                "diagramType": "phys_coolidge_xray_tube",
                "questionEn": "If the minimum wavelength of continuous X-rays emitted from a Coolidge tube is $0.031\\,\\text{nm}$, what is the operating potential difference across the tube?",
                "questionAr": "إذا كان أقصر طول موجي للأشعة السينية المستمرة المنبعثة من أنبوبة كولدج هو $0.031\\,\\text{nm}$، فما هو فرق الجهد المعجل بين القطبين؟",
                "optionsEn": [
                  "$40.0\\,\\text{kV}$",
                  "$20.0\\,\\text{kV}$",
                  "$80.0\\,\\text{kV}$",
                  "$10.0\\,\\text{kV}$"
                ],
                "optionsAr": [
                  "$40.0\\,\\text{kV}$",
                  "$20.0\\,\\text{kV}$",
                  "$80.0\\,\\text{kV}$",
                  "$10.0\\,\\text{kV}$"
                ],
                "correctAnswer": "$40.0\\,\\text{kV}$",
                "correctIndex": 0,
                "hintEn": "Use Duane-Hunt relation: V = hc / (e * lambda_min).",
                "hintAr": "طبق علاقة ديوان-هنت: V = hc / (e * lambda_min).",
                "stepByStepSolutionEn": [
                  "Step 1: Duane-Hunt relation states: $\\lambda_{\\min} = \\frac{h c}{e V}$.",
                  "Step 2: Rearrange for voltage: $V = \\frac{h c}{e \\lambda_{\\min}}$.",
                  "Step 3: Substitute constants: $V = \\frac{(6.625 \\times 10^{-34})(3 \\times 10^8)}{(1.6 \\times 10^{-19})(0.031 \\times 10^{-9})} = \\frac{1.9875 \\times 10^{-25}}{4.96 \\times 10^{-30}} \\approx 40,070\\,\\text{V} \\approx 40.0\\,\\text{kV}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: قانون ديوان-هنت لأقصر طول موجي: $\\lambda_{\\min} = \\frac{h c}{e V}$.",
                  "الخطوة ٢: فرق الجهد: $V = \\frac{h c}{e \\lambda_{\\min}}$.",
                  "الخطوة ٣: بالتعويض: $V = \\frac{(6.625 \\times 10^{-34})(3 \\times 10^8)}{(1.6 \\times 10^{-19})(0.031 \\times 10^{-9})} \\approx 40,000\\,\\text{V} = 40.0\\,\\text{kV}$."
                ],
                "teacherTipEn": "A useful shortcut for Duane-Hunt calculations is $V \\approx \\frac{1240\\,\\text{V}\\cdot\\text{nm}}{\\lambda_{\\min}(\\text{nm})}$.",
                "teacherTipAr": "يمكن استخدام العلاقة السريعة: $V \\approx \\frac{1240}{\\lambda_{\\min}\\,(\\text{nm})} = \\frac{1240}{0.031} = 40,000\\,\\text{V}$."
              },
              {
                "id": "egbac_phys_ws_p2_3",
                "titleEn": "Bohr Orbit Quantization for Hydrogen-Like Helium Ion",
                "titleAr": "تكميم مدارات بور لأيون الهيليوم أحادي الإلكترون",
                "difficulty": "hots",
                "questionEn": "For a singly-ionized helium ion $\\text{He}^+$ ($Z = 2$), an electron is excited to the second orbit ($n = 2$). What is the binding energy (ionization energy) required to remove this electron completely to infinity? (Ground state hydrogen energy $E_1 = -13.6\\text{ eV}$)",
                "questionAr": "لأيون هيليوم أحادي التأين $\\text{He}^+$ ($Z = 2$)، أُثير الإلكترون إلى المدار الثاني ($n = 2$). ما هي طاقة التأين (طاقة الربط) اللازمة لتحرير هذا الإلكترون تماماً إلى اللانهاية؟ (طاقة المستوى الأرضي للهيدروجين $E_1 = -13.6\\text{ eV}$)",
                "optionsEn": [
                  "13.6 eV",
                  "54.4 eV",
                  "3.4 eV",
                  "27.2 eV"
                ],
                "optionsAr": [
                  "١٣,٦ إلكترون فولت",
                  "٥٤,٤ إلكترون فولت",
                  "٣,٤ إلكترون فولت",
                  "٢٧,٢ إلكترون فولت"
                ],
                "correctAnswer": "13.6 eV",
                "correctIndex": 0,
                "hintEn": "For hydrogen-like ions with atomic number $Z$, energy levels scale as $E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}$.",
                "hintAr": "للأيونات شبيهة الهيدروجين ذات العدد الذري $Z$، طاقة المستوى هي $E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}$.",
                "stepByStepSolutionEn": [
                  "Formula for energy of hydrogen-like ion: $E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}$.",
                  "Here $Z = 2$ for Helium and $n = 2$ for the second orbit.",
                  "$E_2 = -13.6 \\times \\frac{2^2}{2^2} = -13.6 \\times \\frac{4}{4} = -13.6\\text{ eV}$.",
                  "Ionization energy required to remove the electron to $n = \\infty$ ($E_\\infty = 0$): $E_{\\text{ion}} = 0 - (-13.6\\text{ eV}) = 13.6\\text{ eV}$."
                ],
                "stepByStepSolutionAr": [
                  "قانون طاقة المستويات للأيونات الهيدروجينية: $E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}$.",
                  "العدد الذري للهيليوم $Z = 2$ ورقم المدار $n = 2$.",
                  "$E_2 = -13.6 \\times \\frac{2^2}{2^2} = -13.6\\text{ eV}$.",
                  "طاقة التأين اللازمة لنقل الإلكترون للمالانهاية: $E_{\\text{ion}} = 0 - (-13.6) = 13.6\\text{ إلكترون فولت}$."
                ],
                "teacherTipEn": "Notice that because $Z=2$ and $n=2$, the factors cancel and the $n=2$ state of He+ has exactly the same energy (-13.6 eV) as the ground state of hydrogen.",
                "teacherTipAr": "لاحظ أنه بتساوي $Z=2$ مع $n=2$ تختصر النسبة وتكون طاقة المدار الثاني للهيليوم مساوية تماماً لطاقة المستوى الأرضي للهيدروجين."
              }
            ]
          },
          "interactiveWidget": {
            "type": "physics_atomic_lasers",
            "titleEn": "Hydrogen Orbit & X-Ray Spectrum Simulator",
            "titleAr": "محاكي مدارات الهيدروجين وطيف الأشعة السينية",
            "descriptionEn": "Interactive atomic visualizer calculating Bohr transitions and continuous vs characteristic X-ray emission lines.",
            "descriptionAr": "محاكاة تفاعلية لانتقالات مستويات بور وحساب خطوط طيف الأشعة السينية المستمر والمميز."
          }
        },
        {
          "id": "egbac_phys_l3",
          "titleEn": "Lasers & Coherent Optics: Population Inversion, Resonators & Holography",
          "titleAr": "أشعة الليزر والبصريات المترابطة: الإسكان المعكوس، التجاويف الرنينية والتصوير المجسم",
          "summaryEn": "Stimulated emission, Einstein coefficients, population inversion in metastable states, He-Ne laser pumping cycle, coherence properties, and wavefront holography principles.",
          "summaryAr": "الانبعاث المستحث، معاملات أينشتاين، حالة الإسكان المعكوس في المستويات شبه المستقرة، دورة ضخ ليزر الهيليوم-نيون، خصائص الترابط البصري ومبادئ التصوير المجسم (الهولوجرافي).",
          "theoryContentEn": "### 1. Fundamentals of Laser Action & Einstein Coefficients\nLaser is an acronym for **Light Amplification by Stimulated Emission of Radiation**.\n- **Three Quantum Radiation Processes:**\n  1. **Induced Absorption:** Electron absorbs photon $h\\nu = E_2 - E_1$, transitioning from ground state $E_1$ to excited state $E_2$. Rate $\\propto \\rho(\\nu) N_1$.\n  2. **Spontaneous Emission:** Electron returns from $E_2$ to $E_1$ randomly without external stimulus after mean lifetime $\\approx 10^{-8}\\,\\text{s}$, emitting an incoherent photon of random phase and direction.\n  3. **Stimulated Emission (Einstein, 1917):** An incident photon of energy $h\\nu = E_2 - E_1$ stimulates an excited electron to transition downward, emitting a **second photon identical** in frequency, phase, direction, and polarization (coherent amplification).\n- **Einstein Coefficients:** $B_{12} = B_{21}$ (stimulated emission probability equals absorption probability).\n\n---\n\n### 2. Necessary Conditions for Laser Generation\n- **Metastable Energy State:**\n  An excited level with a relatively long radiative lifetime ($\\approx 10^{-3}\\,\\text{s}$, about $10^5$ times longer than standard excited states), allowing accumulation of excited atoms.\n- **Population Inversion ($N_2 > N_1$):**\n  Under thermal equilibrium, Boltzmann distribution mandates $N_2 = N_1 e^{-(E_2 - E_1)/k_B T} < N_1$. Laser amplification requires a non-equilibrium state where the higher energy level contains more atoms than the lower level ($N_2 > N_1$).\n- **Optical Pumping & Active Medium:** Supplying external energy (electric discharge, optical flashlamps, or semiconductor injection).\n- **Optical Resonant Cavity (Resonator):**\n  Two parallel mirrors bounding the active medium (one totally reflecting $R_1 \\approx 99.9\\%$, one partially transmitting output coupler $R_2 \\approx 98\\%$). Forms standing electromagnetic waves with resonant frequencies $\\nu_m = \\frac{m c}{2 L}$, repeatedly passing photons through the inverted medium to achieve exponential gain.\n\n---\n\n### 3. The Helium-Neon (He-Ne) Gas Laser\n- **Gas Mixture:** $10:1$ ratio of Helium (He) to Neon (Ne) at low pressure ($approx 0.6\\,\\text{mmHg}$).\n- **Mechanism:**\n  1. Electrical discharge excites Helium atoms by inelastic electron collisions to metastable levels ($2^1S_0$ and $2^3S_1$).\n  2. Resonant energy transfer: Excited He atoms collide with ground-state Ne atoms, transferring energy with high efficiency because their energy levels coincide closely (He $20.61\\,\\text{eV} \\approx$ Ne $20.66\\,\\text{eV}$).\n  3. Population inversion occurs between Ne $3s$ and $2p$ levels.\n  4. Stimulated transitions emit characteristic bright red coherent photons at $\\lambda = 632.8\\,\\text{nm}$.\n\n---\n\n### 4. Characteristics of Laser Light & Holography\n- **Four Core Properties:**\n  1. **Monochromaticity:** Extremely narrow spectral line width ($\\Delta \\lambda \\to 0$).\n  2. **Coherence:** Strict spatial and temporal phase synchronization across all photons in the beam.\n  3. **Collimation & Low Divergence:** Parallel beam propagating long distances without spreading.\n  4. **High Brightness / Intensity:** Massive photon flux density concentrated in space and time.\n- **Holography (3D Wavefront Reconstruction):**\n  - Conventional 2D photography records only the **intensity (amplitude)** of light reflected from an object ($I \\propto A^2$).\n  - Holography records **both amplitude and phase** by superimposing a coherent reference laser beam with the reflected object beam on a photographic plate, creating a micro-interference pattern (the hologram).\n  - Illuminating the developed hologram with the original reference laser reconstructs the exact original 3D wavefront through diffraction.",
          "theoryContentAr": "### ١. أسس فعل الليزر ومعاملات أينشتاين\nكلمة ليزر (LASER) هي اختصار لتكبير الضوء بالانبعاث المستحث للإشعاع.\n- **العمليات الإشعاعية الكمية الثلاث:**\n  ١. **الامتصاص المستحث:** يمتص إلكترون فوتوناً طاقته $h\\nu = E_2 - E_1$ وينتقل من المستوى الأدنى للمستوى الأعلى.\n  ٢. **الانبعاث التلقائي:** يهبط الإلكترون تلقائياً بعد انتهاء فترة العمر ($\\approx 10^{-8}\\,\\text{s}$) ويطلق فوتوناً عشوائي الاتجاه والطور.\n  ٣. **الانبعاث المستحث:** مرور فوتون طاقته $h\\nu = E_2 - E_1$ بالقرب من ذرة مثارة قبل انتهاء فترة العمر يحثها على الهبوط، فينتج **فوتون مطابق تماماً** للفوتون الساقط في التردد والطور والاتجاه والاستقطاب.\n\n---\n\n### ٢. شروط توليد الليزر\n- **مستوى الطاقة شبه المستقر:** مستوى إثارة يتميز بفترة عمر طويلة نسبياً ($\\approx 10^{-3}\\,\\text{s}$) تتيح تراكم الذرات المثارة فيه.\n- **حالة الإسكان المعكوس ($N_2 > N_1$):**\n  حالة غير طبيعية يكون فيها عدد الذرات في مستويات الإثارة العليا أكبر من عددها في المستويات الأدنى، وهي الشرط الأساسي لتفوق الانبعاث المستحث على الامتصاص.\n- **عملية الضخ:** إمداد الوسط الفعال بالطاقة الخارجية (تفريغ كهربي، ضخ ضوئي، أو كيميائي) للوصول للإسكان المعكوس.\n- **التجويف الرنيني:** وعاء حاوٍ للوسط الفعال مزود بمرآتين متوازيتين (إحداهما عاكسة تماماً والأخرى شبه منفذة بنفاذية $\\approx 2\\%$)، يتيح تكرار انعكاس الفوتونات وتكبير شدة الإشعاع بالانبعاث المستحث.\n\n---\n\n### ٣. ليزر الهيليوم - نيون (He-Ne)\n- **مكونات الوسط:** خليط من غازي الهيليوم والنيون بنسبة $10 : 1$ تحت ضغط منخفض داخل أنبوبة كوارتز.\n- **دورة التشغيل:**\n  ١. يصطدم الإلكترون السريع بذرات الهيليوم فيثيرها لمستويات طاقة شبه مستقرة ($20.61\\,\\text{eV}$).\n  ٢. تصطدم ذرات الهيليوم المثارة بذرات النيون غير المثارة تصادماً غير مرن فتنقل إليها طاقتها لتقارب طاقة المستويين شبه المستقرين فيهما ($20.66\\,\\text{eV}$).\n  ٣. يتحقق الإسكان المعكوس في ذرات النيون بين المستوى $3s$ والمستوى $2p$.\n  ٤. تهبط ذرات النيون بالانبعاث المستحث مسببة شعاع الليزر الأحمر بطول موجي $\\lambda = 632.8\\,\\text{nm}$.\n\n---\n\n### ٤. خصائص شعاع الليزر والتصوير المجسم (الهولوجرافي)\n- **الخصائص الأربعة:**\n  ١. **النقاء الطيفي (أحادي اللون):** خط طيفي ضيق جداً ($\\Delta\\lambda \\to 0$).\n  ٢. **الترابط الزماني والمكاني:** الفوتونات متفقة تماماً في الطور والاتجاه.\n  ٣. **توازي الحزمة وعدم الانفراج:** تنتقل لمسافات شاسعة دون تشتت ملحوظ.\n  ٤. **الشدة العالية والسطوع:** تركيز هائل للطاقة في مساحة وزمن ضئيلين.\n- **الهولوجرافي (التصوير ثلاثي الأبعاد):**\n  - التصوير التقليدي يسجل فقط **شدة الضوء (السعة)** وتفقد معلومات التضاريس والعمق.\n  - الهولوجرافي يسجل **السعة والطور معاً** عن طريق تداخل حزمة مرجعية من الليزر مع الحزمة المنعكسة من الجسم على اللوح الفوتوغرافي، وتتكون هدب تداخل دقيقة هي (الهولوجرام)، وعند إضاءتها بنفس شعاع الليزر تظهر صورة مجسمة ثلاثية الأبعاد مطابقة للأصل.",
          "formulas": [
            {
              "labelEn": "Stimulated Emission Frequency Condition",
              "labelAr": "شرط تردد الانبعاث المستحث",
              "latex": "h\\nu = E_2 - E_1"
            },
            {
              "labelEn": "Resonant Cavity Longitudinal Mode Frequencies",
              "labelAr": "ترددات الأنماط الطولية للتجويف الرنيني",
              "latex": "\\nu_m = \\frac{m c}{2 L}"
            },
            {
              "labelEn": "He-Ne Laser Wavelength",
              "labelAr": "الطول الموجي لليزر الهيليوم نيون",
              "latex": "\\lambda = 632.8\\,\\text{nm}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "EG-Bac Advanced Physics Handbook",
            "bookTitleAr": "مرجع الفيزياء المتقدمة - البكالوريا المصرية الدولية",
            "grade": "Grade 12 STEM",
            "term": "Full Year",
            "officialCode": "EGBAC-PHYS-ADV-CH1-L3",
            "pageRange": "pp. 206 - 245"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Lasers, Coherent Optical Resonators & Holographic Wavefronts",
            "titleAr": "خطة درس: أشعة الليزر، التجاويف الرنينية والتصوير المجسم ثلاثي الأبعاد",
            "gradeLevel": "Grade 12 Advanced Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-PHYS-ADV-CH1-L3",
            "bloomsObjectivesEn": [
              "Compare spontaneous and stimulated emission mechanisms and evaluate Einstein transition probabilities.",
              "Explain the role of resonant collisions between He and Ne in achieving population inversion.",
              "Contrast 2D intensity photographic recording with 3D phase-amplitude holographic reconstruction."
            ],
            "bloomsObjectivesAr": [
              "المقارنة الفيزيائية بين الانبعاثين التلقائي والمستحث وتقييم احتمالات أينشتاين للانتقال.",
              "تفسير دور التصادمات غير المرنة بين ذرات الهيليوم والنيون في تحقيق الإسكان المعكوس.",
              "المقارنة بين التصوير التقليدي أحادي البعدين والتصوير ثلاثي الأبعاد بالهولوجرام المسجل لفرق الطور والسعة."
            ],
            "prerequisitesEn": [
              "Wave interference",
              "Atomic excitation and decay",
              "Optical reflection"
            ],
            "prerequisitesAr": [
              "تداخل الموجات الضوئية",
              "إثارة وانحلال الذرات",
              "الانعكاس البصري"
            ],
            "keyVocabularyEn": [
              {
                "term": "Population Inversion",
                "definition": "A non-equilibrium condition in which a higher energy state contains more atoms than a lower state."
              },
              {
                "term": "Metastable State",
                "definition": "An excited atomic state with a prolonged lifespan (~10^-3 s) crucial for laser pumping."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "الإسكان المعكوس",
                "definition": "حالة غير متزنة حرارياً يكون فيها عدد الذرات في المستويات العليا أكبر من عددها في المستويات الأدنى."
              },
              {
                "term": "المستوى شبه المستقر",
                "definition": "مستوى طاقة إثارة يتميز بفترة عمر طويلة نسبياً تتيح تراكم الذرات لإحداث التكبير."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Stimulated Emission & Einstein Coefficients",
                "phaseAr": "الانبعاث المستحث ومعاملات أينشتاين",
                "duration": "25 mins",
                "activitiesEn": "Analyzing Einstein rate equations and deducing stimulated emission amplification conditions.",
                "activitiesAr": "تحليل معادلات أينشتاين لاحتمالات الانتقال واستنتاج شروط تكبير الإشعاع."
              },
              {
                "phaseEn": "He-Ne Laser Anatomy & Pumping Cycle",
                "phaseAr": "تشريح ليزر الهيليوم-نيون ودورة الضخ",
                "duration": "35 mins",
                "activitiesEn": "Tracing energy level diagrams for He 2S and Ne 3s, and calculating Fabry-Perot cavity round-trip gain.",
                "activitiesAr": "تتبع مستويات الطاقة لذرات الهيليوم والنيون ودراسة التكبير في التجويف الرنيني."
              },
              {
                "phaseEn": "Coherence & Holography Principles",
                "phaseAr": "الترابط البصري والتصوير المجسم",
                "duration": "30 mins",
                "activitiesEn": "Diagramming reference beam interference and holographic wavefront phase reconstruction.",
                "activitiesAr": "رسم مسار الحزمة المرجعية وتداخلها مع الشعاع المنعكس من الجسم لتسجيل الهولوجرام."
              }
            ],
            "commonMisconceptionsEn": [
              "Believing laser intensity comes from creating energy (it comes from concentrating stimulated coherent photons).",
              "Thinking holography works with ordinary white light (holographic recording requires strictly coherent laser light)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد الخاطئ بأن الليزر يستحدث طاقة جديدة (هو يركز الطاقة الفوتونية في حزمة مترابطة دقيقة فقط).",
              "الظن بإمكانية تسجيل الهولوجرام بالضوء الأبيض العادي (التصوير المجسم يتطلب ضوء ليزر مترابطاً مكانياً وزمانياً)."
            ],
            "differentiationEn": {
              "struggling": "Use side-by-side animated photon wave packet diagrams showing random vs coherent phase alignment.",
              "advanced": "Calculate the longitudinal mode spacing $\\Delta \\nu = c / (2L)$ for an He-Ne cavity of length 30 cm."
            },
            "differentiationAr": {
              "struggling": "استخدام رسوم توضيحية تقارن بين فوتونات الضوء العادي العشوائية وفوتونات الليزر متفقة الطور والتردد.",
              "advanced": "حساب الفاصل الترددي بين الأنماط الطولية لتجويف ليزر طوله ٣٠ سم."
            },
            "formativeAssessmentEn": "Why is a partially reflecting mirror necessary at the output end of a laser cavity?",
            "formativeAssessmentAr": "علل: يجب أن تكون إحدى مرآتي التجويف الرنيني شبه منفذة وليست عاكسة تماماً؟",
            "exitTicketQuestion": {
              "questionEn": "Calculate the photon energy (in eV) corresponding to the red emission line of an He-Ne laser (lambda = 632.8 nm).",
              "questionAr": "احسب طاقة الفوتون (بالإلكترون فولت) لخط انبعاث ليزر الهيليوم نيون الأحمر (طوله الموجي ٦٣٢,٨ نانومتر).",
              "solutionEn": "$E = \\frac{h c}{\\lambda} = \\frac{(6.625 \\times 10^{-34})(3 \\times 10^8)}{632.8 \\times 10^{-9}} = 3.14 \\times 10^{-19}\\,\\text{J} = \\frac{3.14 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 1.96\\,\\text{eV}$.",
              "solutionAr": "$E = \\frac{h c}{\\lambda} = \\frac{(6.625 \\times 10^{-34})(3 \\times 10^8)}{632.8 \\times 10^{-9}} \\approx 3.14 \\times 10^{-19}\\,\\text{J} = 1.96\\,\\text{eV}$."
            }
          },
          "worksheet": {
            "id": "egbac_phys_ws_3",
            "titleEn": "Worksheet 3: Lasers, Optical Resonators & Holographic Optics",
            "titleAr": "ورقة عمل ٣: أشعة الليزر والتجاويف الرنينية والبصريات الهولوجرافية",
            "descriptionEn": "Rigorous quantitative and conceptual problems on population inversion, Einstein relations, and laser cavity modes.",
            "descriptionAr": "مسائل علمية وحسابية متقدمة على الإسكان المعكوس ومعاملات أينشتاين وتجويف فابري-بيرو الرنيني.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_phys_ws_p3_1",
                "titleEn": "Longitudinal Mode Frequency Spacing of Laser Cavity",
                "titleAr": "الفاصل الترددي بين الأنماط الطولية لتجويف الليزر",
                "difficulty": "medium",
                "questionEn": "An He-Ne laser has an optical resonant cavity of length $L = 30.0\\,\\text{cm}$. What is the frequency spacing between two consecutive longitudinal modes?",
                "questionAr": "ليزر هيليوم نيون طول تجويفه الرنيني $L = 30.0\\,\\text{cm}$. ما هو الفارق في التردد بين نمطين طوليين متتاليين داخل التجويف؟",
                "optionsEn": [
                  "$500\\,\\text{MHz}$",
                  "$1.0\\,\\text{GHz}$",
                  "$250\\,\\text{MHz}$",
                  "$100\\,\\text{MHz}$"
                ],
                "optionsAr": [
                  "$500\\,\\text{MHz}$",
                  "$1.0\\,\\text{GHz}$",
                  "$250\\,\\text{MHz}$",
                  "$100\\,\\text{MHz}$"
                ],
                "correctAnswer": "$500\\,\\text{MHz}$",
                "correctIndex": 0,
                "hintEn": "The standing wave condition gives nu_m = m * c / (2L), so delta_nu = c / (2L).",
                "hintAr": "شرط الموجات الموقوفة داخل التجويف: nu_m = m * c / (2L)، وبالتالي الفارق بين نمطين متتاليين delta_nu = c / (2L).",
                "stepByStepSolutionEn": [
                  "Step 1: Resonant frequencies of a Fabry-Perot cavity satisfy: $\\nu_m = \\frac{m c}{2 L}$.",
                  "Step 2: Frequency spacing between consecutive modes ($m$ and $m+1$): $\\Delta \\nu = \\nu_{m+1} - \\nu_m = \\frac{c}{2 L}$.",
                  "Step 3: Substitute values: $\\Delta \\nu = \\frac{3 \\times 10^8\\,\\text{m/s}}{2 \\times 0.30\\,\\text{m}} = \\frac{3 \\times 10^8}{0.60} = 5 \\times 10^8\\,\\text{Hz} = 500\\,\\text{MHz}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: ترددات الرنين للموجات الموقوفة في التجويف: $\\nu_m = \\frac{m c}{2 L}$.",
                  "الخطوة ٢: الفاصل الترددي بين نمطين متتاليين: $\\Delta \\nu = \\frac{c}{2 L}$.",
                  "الخطوة ٣: بالتعويض: $\\Delta \\nu = \\frac{3 \\times 10^8}{2 \\times 0.30} = 5 \\times 10^8\\,\\text{Hz} = 500\\,\\text{MHz}$."
                ],
                "teacherTipEn": "Remember that only cavity modes lying within the Doppler-broadened gain profile of the medium will actually lase.",
                "teacherTipAr": "تذكر أن الأنماط الطولية التي تقع ضمن منحنى كسب النيون فقط هي التي تنتج إشعاع ليزر فعلياً."
              },
              {
                "id": "egbac_phys_ws_p3_2",
                "titleEn": "Divergence Beam Spot Size at Long Distance",
                "titleAr": "حساب قطر بقعة شعاع الليزر على مسافة بعيدة",
                "difficulty": "medium",
                "questionEn": "A laser beam has a beam divergence angle of $\\theta = 0.50\\,\\text{mrad}$ ($0.50 \\times 10^{-3}\\,\\text{rad}$). If the initial aperture radius is negligible, what is the beam diameter after traveling a distance of $2.0\\,\\text{km}$?",
                "questionAr": "شعاع ليزر له زاوية انفراج قدرها $\\theta = 0.50\\,\\text{mrad}$ ($0.50 \\times 10^{-3}\\,\\text{rad}$). إذا أهمل القطر الابتدائي للحزمة، فما هو قطر بقعة الشعاع بعد قطع مسافة قدرها $2.0\\,\\text{km}$؟",
                "optionsEn": [
                  "$1.0\\,\\text{m}$",
                  "$0.50\\,\\text{m}$",
                  "$2.0\\,\\text{m}$",
                  "$0.25\\,\\text{m}$"
                ],
                "optionsAr": [
                  "$1.0\\,\\text{m}$",
                  "$0.50\\,\\text{m}$",
                  "$2.0\\,\\text{m}$",
                  "$0.25\\,\\text{m}$"
                ],
                "correctAnswer": "$1.0\\,\\text{m}$",
                "correctIndex": 0,
                "hintEn": "Spot diameter D = 2 * r = 2 * (d * tan(theta/2)) approx d * theta for small angles.",
                "hintAr": "قطر بقعة الضوء المستعرضة: D = d * theta للزوايا الصغيرة بالراديان.",
                "stepByStepSolutionEn": [
                  "Step 1: Angular divergence relates distance $d$ and beam spot diameter $D$: $D \\approx d \\cdot \\theta$.",
                  "Step 2: Distance $d = 2.0\\,\\text{km} = 2000\\,\\text{m}$.",
                  "Step 3: Substitute: $D = 2000 \\times (0.50 \\times 10^{-3}) = 1.0\\,\\text{m}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: قطر بقعة الحزمة الناتجة عن زاوية الانفراج الصغيرة: $D \\approx d \\cdot \\theta$.",
                  "الخطوة ٢: المسافة $d = 2.0\\,\\text{km} = 2000\\,\\text{m}$.",
                  "الخطوة ٣: بالتعويض: $D = 2000 \\times (0.50 \\times 10^{-3}) = 1.0\\,\\text{m}$."
                ],
                "teacherTipEn": "Notice how remarkably small this divergence is: ordinary flashlights would expand to hundreds of meters over this distance.",
                "teacherTipAr": "لاحظ قلة تشتت وانفراج الليزر: ضوء المصباح العادي يتسع لمئات الأمتار على نفس هذه مسافة."
              },
              {
                "id": "egbac_phys_ws_p3_3",
                "titleEn": "Optical Gain & Critical Threshold Population Inversion",
                "titleAr": "معامل الكسب الضوئي وشرط عتبة الانعكاس الإسكاني الحرج",
                "difficulty": "hots",
                "questionEn": "In a Helium-Neon laser cavity of length $L = 0.30\\text{ m}$, the two end mirrors have reflectivities $R_1 = 1.0$ (100% full reflection) and $R_2 = 0.98$ (98% partial output transmission). If internal non-resonant scattering loss is negligible, what is the minimum threshold gain coefficient $\\gamma_{\\text{th}}$ per unit length required for sustained laser oscillation?",
                "questionAr": "في تجويف ليزر هيليوم-نيون طوله $L = 0.30\\text{ m}$، المرآتان الطرفيتان لهما معاملا انعكاس $R_1 = 1.0$ (انعكاس كلي) و $R_2 = 0.98$ (انعكاس جزئي بنفاذية 2%). بافتراض إهمال فواقد التشتت، احسب أقل معامل كسب حرج $\\gamma_{\\text{th}}$ لوحدة الأطوال لبدء واستمرار توليد الليزر.",
                "optionsEn": [
                  "$0.0337\\text{ m}^{-1}$",
                  "$0.0674\\text{ m}^{-1}$",
                  "$0.0168\\text{ m}^{-1}$",
                  "$0.337\\text{ m}^{-1}$"
                ],
                "optionsAr": [
                  "$0.0337\\text{ م}^{-1}$",
                  "$0.0674\\text{ م}^{-1}$",
                  "$0.0168\\text{ م}^{-1}$",
                  "$0.337\\text{ م}^{-1}$"
                ],
                "correctAnswer": "$0.0337\\text{ m}^{-1}$",
                "correctIndex": 0,
                "hintEn": "Threshold condition for round-trip loop gain: $R_1 R_2 e^{2\\gamma_{\\text{th}} L} = 1 \\implies \\gamma_{\\text{th}} = \\frac{1}{2L} \\ln\\left(\\frac{1}{R_1 R_2}\\right)$.",
                "hintAr": "شرط عتبة الليزر لدورة كاملة: $R_1 R_2 e^{2\\gamma_{\\text{th}} L} = 1 \\implies \\gamma_{\\text{th}} = \\frac{1}{2L} \\ln\\left(\\frac{1}{R_1 R_2}\\right)$.",
                "stepByStepSolutionEn": [
                  "For continuous laser oscillation, round-trip amplification must balance mirror transmission loss: $R_1 R_2 e^{2 \\gamma_{\\text{th}} L} = 1$.",
                  "Rearrange: $2 \\gamma_{\\text{th}} L = \\ln\\left(\\frac{1}{R_1 R_2}\\right) = -\\ln(R_1 R_2)$.",
                  "Substitute $R_1 = 1.0$ and $R_2 = 0.98$: $\\ln\\left(\\frac{1}{0.98}\\right) = \\ln(1.0204) \\approx 0.02020$.",
                  "Solve for gain: $\\gamma_{\\text{th}} = \\frac{0.02020}{2 \\times 0.30\\text{ m}} = \\frac{0.02020}{0.60} \\approx 0.03367\\text{ m}^{-1} \\approx 0.0337\\text{ m}^{-1}$."
                ],
                "stepByStepSolutionAr": [
                  "شرط استمرار انبعاث الليزر: التكبير خلال دورة كاملة ذهاباً وإياباً يعوض فقد المرايا: $R_1 R_2 e^{2 \\gamma_{\\text{th}} L} = 1$.",
                  "إذن: $2 \\gamma_{\\text{th}} L = \\ln\\left(\\frac{1}{R_1 R_2}\\right)$.",
                  "حساب اللوغاريتم: $\\ln\\left(\\frac{1}{0.98}\\right) \\approx 0.0202$.",
                  "معامل الكسب الحرج: $\\gamma_{\\text{th}} = \\frac{0.0202}{2 \\times 0.30} = 0.0337\\text{ م}^{-1}$."
                ],
                "teacherTipEn": "Notice how low this gain requirement is: He-Ne lasers operate with low single-pass gain because the resonant cavity allows hundreds of round-trip passes.",
                "teacherTipAr": "لاحظ أن معامل الكسب المطلوب ضئيل جداً لأن التجويف الرنيني يسمح للشعاع بالانعكاس مئات المرات مما يضاعف التكبير."
              }
            ]
          },
          "interactiveWidget": {
            "type": "physics_atomic_lasers",
            "titleEn": "Laser Pumping & Resonator Mode Simulator",
            "titleAr": "محاكي ضخ الليزر وأنماط التجويف الرنيني",
            "descriptionEn": "Interactive simulator visualizing population inversion, He-Ne energy transfer, and resonant cavity standing waves.",
            "descriptionAr": "محاكاة تفاعلية للإسكان المعكوس وضخ ذرات الهيليوم نيون والموجات الموقوفة بالتجويف الرنيني."
          }
        },
        {
          "id": "egbac_phys_l4",
          "titleEn": "Solid-State Quantum Electronics: Semiconductor Energy Bands, p-n Junction & Transistors",
          "titleAr": "إلكترونيات الحالة الصلبة الكمية: حزم الطاقة، الوصلة الثنائية والترانزستور",
          "summaryEn": "Band theory of solids, intrinsic and doped semiconductors, mass action law, p-n junction barrier dynamics, rectification, photodiode principles, and bipolar transistor amplification gain.",
          "summaryAr": "نظرية حزم الطاقة في المواد الصلبة، أشباه الموصلات النقية والمعالجة، قانون فعل الكتلة، ديناميكا الوصلة الثنائية وتقويم التيار، والترانزستور كمكبر ومفتاح إلكتروني.",
          "theoryContentEn": "### 1. Quantum Band Theory of Solids\nIn crystalline lattices, overlapping atomic wavefunctions split discrete atomic energy levels into continuous energy bands:\n- **Valence Band:** Low-lying band completely filled with valence electrons at $0\\,\\text{K}$.\n- **Conduction Band:** Higher band that electrons must reach to conduct electric current.\n- **Energy Gap (Forbidden Band, $E_g$):**\n  - **Conductors:** Valence and conduction bands overlap ($E_g = 0$). Infinite free electrons available.\n  - **Semiconductors:** Small energy gap ($E_g \\approx 1.1\\,\\text{eV}$ in Silicon, $0.7\\,\\text{eV}$ in Germanium). At $0\\,\\text{K}$, semiconductors are perfect insulators. Raising temperature breaks covalent bonds, generating mobile electron-hole pairs ($n_i = p_i$).\n  - **Insulators:** Very wide forbidden gap ($E_g > 5\\,\\text{eV}$). Thermal energy cannot promote electrons.\n\n---\n\n### 2. Extrinsic (Doped) Semiconductors & Mass Action Law\nDoping introduces impurity atoms to exponentially increase electrical conductivity without high thermal agitation:\n- **n-Type Semiconductor:**\n  Silicon doped with pentavalent donor atoms (Phosphorus, Arsenic, Antimony). Donors contribute free conduction electrons:\n  $n \\approx N_d^+, \\quad p = \\frac{n_i^2}{N_d^+}$\n- **p-Type Semiconductor:**\n  Silicon doped with trivalent acceptor atoms (Boron, Aluminum, Gallium). Acceptors create holes in the valence band:\n  $p \\approx N_a^-, \\quad n = \\frac{n_i^2}{N_a^-}$\n- **Law of Mass Action:**\n  At thermal equilibrium at constant temperature:\n  $n \\cdot p = n_i^2$\n\n---\n\n### 3. The p-n Junction Diode\nFusing p-type and n-type semiconductor regions forms a p-n junction:\n- **Depletion Region & Built-in Potential:**\n  Electrons diffuse from the n-side to the p-side, while holes diffuse from the p-side to the n-side. This leaves uncompensated positive donor ions on the n-side and negative acceptor ions on the p-side, establishing an internal electric field that produces a built-in barrier potential ($V_0 \\approx 0.7\\,\\text{V}$ for Si).\n- **Biasing Conditions:**\n  - **Forward Bias:** Connect positive battery terminal to p-side and negative to n-side. External field opposes built-in field, narrowing the depletion layer; current increases exponentially once $V > 0.7\\,\\text{V}$.\n  - **Reverse Bias:** Connect positive terminal to n-side and negative to p-side. External field reinforces built-in field, widening the depletion layer and blocking majority carrier current.\n- **Applications:** AC half-wave and full-wave rectification; Light-Emitting Diodes (LEDs, direct bandgap radiative recombination); and Photovoltaic Solar Cells (absorbed photons create electron-hole pairs separated by built-in field).\n\n---\n\n### 4. Bipolar Junction Transistors (BJTs)\nThree-layer semiconductor device (npn or pnp) with three terminals: Emitter (E), Base (B), and Collector (C).\n- **Current Relation:**\n  $I_e = I_b + I_c$\n  where base current $I_b$ is very small ($approx 1\\%$) due to thin, lightly doped base.\n- **Current Amplification Factors:**\n  - Common-Base Alpha: $\\alpha = \\frac{I_c}{I_e} \\approx 0.98 - 0.99$.\n  - Common-Emitter Beta (Current Gain):\n    $\\beta = \\frac{I_c}{I_b} = \\frac{\\alpha}{1 - \\alpha} \\quad (\\text{typically } 50 - 500)$\n- **Transistor as a Linear Amplifier & Inverter Switch:**\n  Input signal fed to base-emitter circuit; amplified output voltage taken across collector resistor: $V_{ce} = V_{cc} - I_c R_c$.",
          "theoryContentAr": "### ١. نظرية حزم الطاقة في المواد الصلبة\nفي الشبكات البلورية تنقسم مستويات الطاقة الذرية المنفصلة نتيجة تقارب الذرات وتداخلها إلى حزم طاقة:\n- **حزمة التكافؤ:** حزمة طاقة سفلية ممتلئة بإلكترونات التكافؤ عند الصفر المطلق.\n- **حزمة التوصيل:** حزمة عليا تكون شبه فارغة، وتتحرك فيها الإلكترونات بحرية لنقل التيار.\n- **فجوة الطاقة المحظورة ($E_g$):**\n  - **الموصلات:** تتداخل حزمتا التكافؤ والتوصيل ($E_g = 0$).\n  - **أشباه الموصلات:** فجوة طاقة صغيرة ($E_g \\approx 1.1\\,\\text{eV}$ للسيليكون). عند الصفر كلفن تكون عازلة تماماً، وبرفع درجة الحرارة تنكسر بعض الروابط وتتولد أزواج من الإلكترونات والفجوات ($n_i = p_i$).\n  - **العوازل:** فجوة طاقة كبيرة جداً ($E_g > 5\\,\\text{eV}$) تعجز الطاقة الحرارية عن نقل الإلكترونات عبرها.\n\n---\n\n### ٢. أشباه الموصلات غير النقية (المعالجة) وقانون فعل الكتلة\nإضافة شوائب بنسب ضئيلة جداً (التطعيم) يزيد التوصيلية الكهربية بدرجة فائقة وثابتة:\n- **النوع السالب (n-type):**\n  تطعيم السيليكون بذرات خماسية التكافؤ مانحة (الفوسفور أو الزرنيخ):\n  $n \\approx N_d^+, \\quad p = \\frac{n_i^2}{N_d^+}$\n- **النوع الموجب (p-type):**\n  تطعيم السيليكون بذرات ثلاثية التكافؤ مستقبلة (البورون أو الجاليوم):\n  $p \\approx N_a^-, \\quad n = \\frac{n_i^2}{N_a^-}$\n- **قانون فعل الكتلة:** عند ثبوت درجة الحرارة في حالة الاتزان الديناميكي:\n  $n \\cdot p = n_i^2$\n\n---\n\n### ٣. الوصلة الثنائية (الدايود)\nالتحام بلورة من النوع الموجب مع بلورة من النوع السالب:\n- **منطقة النضوب والجهد الحاجز:**\n  تنتشر الإلكترونات من المنطقة n إلى p وتنتشر الفجوات من p إلى n، فتتكون منطقة فاصلة خالية من حاملات الشحنة الحرة تحتوي فقط على أيونات موجبة وسالبة ثابتة، ويتولد فرق جهد داخلي يسمى **الجهد الحاجز** ($\\approx 0.7\\,\\text{V}$ للسيليكون).\n- **التوصيل الأمامي والعكسي:**\n  - التوصيل الأمامي: توصيل القطب الموجب بالبلورة p والسالب بالبلورة n. يقل اتساع منطقة النضوب ويمر تيار قوي.\n  - التوصيل العكسي: توصيل القطب الموجب بالبلورة n والسالب بالبلورة p. يتسع حاجز الجهد وينعدم مرور تيار الأغلبية.\n- **التطبيقات:** تقويم التيار المتردد، الصمام الثنائي الباعث للضوء (LED)، والخلايا الشمسية.\n\n---\n\n### ٤. الترانزستور ثنائي القطبية (BJT)\nبلورة ثلاثية الطبقات (npn أو pnp) تتكون من الباعث (E) والقاعدة (B) والمجمع (C):\n- **معادلة التيارات:**\n  $I_e = I_b + I_c$\n- **معاملات التكبير:**\n  - نسبة التوزيع: $\\alpha = \\frac{I_c}{I_e} \\approx 0.98 - 0.99$.\n  - معامل تكبير التيار في دائرة الباعث المشترك:\n    $\\beta = \\frac{I_c}{I_b} = \\frac{\\alpha}{1 - \\alpha}$\n- **استخدامات الترانزستور:** مكبر للإشارات الكهربية الضعيفة، ومفتاح إلكتروني عاكس (NOT Gate): $V_{ce} = V_{cc} - I_c R_c$.",
          "formulas": [
            {
              "labelEn": "Semiconductor Mass Action Law",
              "labelAr": "قانون فعل الكتلة لأشباه الموصلات",
              "latex": "n \\cdot p = n_i^2"
            },
            {
              "labelEn": "Transistor Current Conservation",
              "labelAr": "قانون حفظ تيار الترانزستور",
              "latex": "I_e = I_b + I_c"
            },
            {
              "labelEn": "Transistor Common-Emitter Current Gain",
              "labelAr": "معامل تكبير التيار للترانزستور",
              "latex": "\\beta = \\frac{I_c}{I_b} = \\frac{\\alpha}{1 - \\alpha}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "EG-Bac Advanced Physics Handbook",
            "bookTitleAr": "مرجع الفيزياء المتقدمة - البكالوريا المصرية الدولية",
            "grade": "Grade 12 STEM",
            "term": "Full Year",
            "officialCode": "EGBAC-PHYS-ADV-CH1-L4",
            "pageRange": "pp. 246 - 290"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Solid-State Physics, p-n Junction Dynamics & Transistor Amplification",
            "titleAr": "خطة درس: فيزياء الحالة الصلبة، ديناميكا الوصلة الثنائية وتكبير الترانزستور",
            "gradeLevel": "Grade 12 Advanced Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-PHYS-ADV-CH1-L4",
            "bloomsObjectivesEn": [
              "Contrast energy band structures among metals, intrinsic semiconductors, and insulators.",
              "Apply the mass action law to calculate minority carrier concentrations in doped semiconductors.",
              "Analyze common-emitter transistor amplifier circuits to compute current gain and voltage swing."
            ],
            "bloomsObjectivesAr": [
              "المقارنة بين تركيب حزم الطاقة في الموصلات وأشباه الموصلات والعوازل.",
              "تطبيق قانون فعل الكتلة لحساب تركيز حاملات الشحنة الأقلية في بلورات السيليكون المعالجة.",
              "تحليل دوائر الترانزستور كمكبر في دائرة الباعث المشترك وحساب معامل التكبير وتغيرات الجهد."
            ],
            "prerequisitesEn": [
              "Covalent bonding in Silicon",
              "Ohm's law and circuit loops",
              "Electric field potential"
            ],
            "prerequisitesAr": [
              "الروابط التساهمية في السيليكون",
              "قانون أوم وتحليل الدوائر",
              "جهد المجال الكهربي"
            ],
            "keyVocabularyEn": [
              {
                "term": "Depletion Region",
                "definition": "Zone at a p-n junction void of mobile charge carriers, occupied solely by fixed ionized dopants."
              },
              {
                "term": "Current Gain (Beta)",
                "definition": "Ratio of collector current change to base current change in a common-emitter transistor."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "منطقة النضوب (الفجوة الحرة)",
                "definition": "منطقة فاصلة في الوصلة الثنائية تخلو من الشحنات الحرة وتحتوي على أيونات موجبة وسالبة مقيدة."
              },
              {
                "term": "معامل تكبير التيار (بيتا)",
                "definition": "النسبة بين تيار المجمع إلى تيار القاعدة في دائرة الترانزستور ذي الباعث المشترك."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Band Theory & Doping Equilibrium",
                "phaseAr": "نظرية حزم الطاقة واتزان التطعيم",
                "duration": "30 mins",
                "activitiesEn": "Constructing energy band diagrams and calculating minority carrier densities with mass action law.",
                "activitiesAr": "رسم حزم الطاقة وحساب تركيز حاملات الشحنة الأقلية بقانون فعل الكتلة."
              },
              {
                "phaseEn": "p-n Junction Biasing & Rectification",
                "phaseAr": "انحياز الوصلة الثنائية وتقويم التيار",
                "duration": "30 mins",
                "activitiesEn": "Modeling forward/reverse depletion dynamics and diode half-wave rectification circuits.",
                "activitiesAr": "تتبع حركة حاملات الشحنة في الانحياز الأمامي والعكسي ودوائر تقويم التيار."
              },
              {
                "phaseEn": "Bipolar Transistor Circuit Analysis",
                "phaseAr": "تحليل دوائر الترانزستور والتكبير",
                "duration": "30 mins",
                "activitiesEn": "Solving current loop equations and designing common-emitter amplifiers.",
                "activitiesAr": "حل مسائل كيرشوف لتيارات الترانزستور وحساب معامل التكبير وجهد الخرج."
              }
            ],
            "commonMisconceptionsEn": [
              "Believing n-type crystals carry a net negative charge (crystals remain strictly electrically neutral).",
              "Thinking base current supplies the output power (base current controls the larger collector-emitter current flow)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن بلورة النوع n مشحونة بشحنة سالبة (البلورة متعادلة كهربياً لاحتواء الأيونات المانحة الموجبة).",
              "الظن بأن تيار القاعدة هو مصدر طاقة الخرج (تيار القاعدة يتحكم فقط في تدفق تيار المجمع القادم من المصدر الرئيسي)."
            ],
            "differentiationEn": {
              "struggling": "Use water pipe analogies: base is a sensitive valve controlling a large flood from emitter to collector.",
              "advanced": "Calculate small-signal input impedance and transconductance $g_m = I_c / V_T$ for a BJT."
            },
            "differentiationAr": {
              "struggling": "تشبيه الترانزستور بصنبور ماء: تيار القاعدة يمثل المحبس الحساس الذي يتحكم في التدفق القوي للباعث والمجمع.",
              "advanced": "حساب المعاوقة الديناميكية لدخل الترانزستور والموصلية التحويلية."
            },
            "formativeAssessmentEn": "Why does the electric conductivity of a pure semiconductor increase with temperature, whereas a metal's conductivity decreases?",
            "formativeAssessmentAr": "علل: تزداد التوصيلية الكهربية لشبه الموصل النقي برفع درجة الحرارة بينما تقل توصيلية الفلزات؟",
            "exitTicketQuestion": {
              "questionEn": "If a transistor has alpha = 0.98 and base current Ib = 40 microamperes, calculate the collector current Ic and beta.",
              "questionAr": "إذا كان لترانزستور ألفا = ٠,٩٨ وتيار القاعدة ٤٠ ميكروأمبير، احسب تيار المجمع ومعامل تكبير التيار بيتا.",
              "solutionEn": "$\\beta = \\frac{\\alpha}{1 - \\alpha} = \\frac{0.98}{0.02} = 49$. Then $I_c = \\beta I_b = 49 \\times 40\\,\\mu\\text{A} = 1960\\,\\mu\\text{A} = 1.96\\,\\text{mA}$.",
              "solutionAr": "$\\beta = \\frac{\\alpha}{1 - \\alpha} = \\frac{٠,٩٨}{٠,٠٢} = ٤٩$. إذن $I_c = ٤٩ \\times ٤٠ = ١٩٦٠\\,\\mu\\text{A} = ١,٩٦\\,\\text{mA}$."
            }
          },
          "worksheet": {
            "id": "egbac_phys_ws_4",
            "titleEn": "Worksheet 4: Solid-State Semiconductors & Transistor Amplifiers",
            "titleAr": "ورقة عمل ٤: أشباه الموصلات الصلبة ومكبرات الترانزستور",
            "descriptionEn": "Rigorous problems on mass action carrier densities, diode barrier behavior, and transistor amplification calculations.",
            "descriptionAr": "مسائل تدريبية متقدمة على كثافة الشحنات بقانون فعل الكتلة وتطبيقات الترانزستور كمكبر للإشارات.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_phys_ws_p4_1",
                "titleEn": "Minority Carrier Concentration via Mass Action Law",
                "titleAr": "حساب تركيز حاملات الشحنة الأقلية بقانون فعل الكتلة",
                "difficulty": "medium",
                "questionEn": "A pure silicon crystal has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\,\\text{cm}^{-3}$. If it is doped with phosphorus atoms to a donor concentration of $N_d = 1.0 \\times 10^{16}\\,\\text{cm}^{-3}$, what is the minority hole concentration $p$ at thermal equilibrium?",
                "questionAr": "بلورة سيليكون نقية تركيز الإلكترونات الحرة فيها $n_i = 1.5 \\times 10^{10}\\,\\text{cm}^{-3}$. إذا تم تطعيمها بذرات فوسفور مانحة بتركيز $N_d = 1.0 \\times 10^{16}\\,\\text{cm}^{-3}$، فما هو تركيز الفجوات الموجبة الأقلية $p$ عند الاتزان؟",
                "optionsEn": [
                  "$2.25 \\times 10^4\\,\\text{cm}^{-3}$",
                  "$1.5 \\times 10^6\\,\\text{cm}^{-3}$",
                  "$2.25 \\times 10^8\\,\\text{cm}^{-3}$",
                  "$1.0 \\times 10^4\\,\\text{cm}^{-3}$"
                ],
                "optionsAr": [
                  "$2.25 \\times 10^4\\,\\text{cm}^{-3}$",
                  "$1.5 \\times 10^6\\,\\text{cm}^{-3}$",
                  "$2.25 \\times 10^8\\,\\text{cm}^{-3}$",
                  "$1.0 \\times 10^4\\,\\text{cm}^{-3}$"
                ],
                "correctAnswer": "$2.25 \\times 10^4\\,\\text{cm}^{-3}$",
                "correctIndex": 0,
                "hintEn": "Apply mass action law: n * p = n_i^2, with n approx N_d.",
                "hintAr": "طبق قانون فعل الكتلة: n * p = n_i^2، حيث n تقريباً يساوي تركيز الذرات المانحة Nd.",
                "stepByStepSolutionEn": [
                  "Step 1: Doping with pentavalent donors makes the semiconductor n-type, where $n \\approx N_d = 1.0 \\times 10^{16}\\,\\text{cm}^{-3}$.",
                  "Step 2: By the Law of Mass Action: $n \\cdot p = n_i^2$.",
                  "Step 3: Solve for hole concentration: $p = \\frac{n_i^2}{N_d} = \\frac{(1.5 \\times 10^{10})^2}{1.0 \\times 10^{16}} = \\frac{2.25 \\times 10^{20}}{1.0 \\times 10^{16}} = 2.25 \\times 10^4\\,\\text{cm}^{-3}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: التطعيم بذرات مانحة ينتج بلورة سالبة يكون فيها تركيز الإلكترونات $n \\approx N_d = 1.0 \\times 10^{16}\\,\\text{cm}^{-3}$.",
                  "الخطوة ٢: من قانون فعل الكتلة: $n \\cdot p = n_i^2$.",
                  "الخطوة ٣: تركيز الفجوات الأقلية: $p = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{1.0 \\times 10^{16}} = 2.25 \\times 10^4\\,\\text{cm}^{-3}$."
                ],
                "teacherTipEn": "Notice the staggering ratio: electrons outnumber holes by twelve orders of magnitude ($10^{16}$ vs $10^4$).",
                "teacherTipAr": "لاحظ الفارق الهائل: عدد الإلكترونات يفوق عدد الفجوات باثنتي عشرة رتبة مقدارية بفضل التطعيم."
              },
              {
                "id": "egbac_phys_ws_p4_2",
                "titleEn": "Current Gain & Output Voltage in Common-Emitter BJT",
                "titleAr": "معامل تكبير التيار وجهد الخرج في ترانزستور الباعث المشترك",
                "difficulty": "medium",
                "diagramType": "phys_pn_junction_transistor",
                "questionEn": "In a common-emitter amplifier circuit, the collector load resistor is $R_c = 4.0\\,\\text{k}\\Omega$ and the supply voltage is $V_{cc} = 12.0\\,\\text{V}$. If $\\beta = 100$ and base current is $I_b = 20\\,\\mu\\text{A}$, what is the output voltage $V_{ce}$?",
                "questionAr": "في دائرة مكبر باعث مشترك، مقاومة المجمع $R_c = 4.0\\,\\text{k}\\Omega$ وبطارية التغذية $V_{cc} = 12.0\\,\\text{V}$. إذا كان معامل التكبير $\\beta = 100$ وتيار القاعدة $I_b = 20\\,\\mu\\text{A}$، فما هو فرق جهد الخرج $V_{ce}$ بين المجمع والباعث؟",
                "optionsEn": [
                  "$4.0\\,\\text{V}$",
                  "$8.0\\,\\text{V}$",
                  "$2.0\\,\\text{V}$",
                  "$6.0\\,\\text{V}$"
                ],
                "optionsAr": [
                  "$4.0\\,\\text{V}$",
                  "$8.0\\,\\text{V}$",
                  "$2.0\\,\\text{V}$",
                  "$6.0\\,\\text{V}$"
                ],
                "correctAnswer": "$4.0\\,\\text{V}$",
                "correctIndex": 0,
                "hintEn": "Calculate Ic = beta * Ib, then use Kirchhoff output loop: Vce = Vcc - Ic * Rc.",
                "hintAr": "احسب تيار المجمع Ic = beta * Ib، ثم طبق معادلة خرج كيرشوف: Vce = Vcc - Ic * Rc.",
                "stepByStepSolutionEn": [
                  "Step 1: Calculate collector current: $I_c = \\beta I_b = 100 \\times (20 \\times 10^{-6}\\,\\text{A}) = 2.0 \\times 10^{-3}\\,\\text{A} = 2.0\\,\\text{mA}$.",
                  "Step 2: Calculate voltage drop across collector resistor: $V_{R_c} = I_c R_c = (2.0 \\times 10^{-3}\\,\\text{A})(4000\\,\\Omega) = 8.0\\,\\text{V}$.",
                  "Step 3: Calculate output collector-emitter voltage: $V_{ce} = V_{cc} - I_c R_c = 12.0\\,\\text{V} - 8.0\\,\\text{V} = 4.0\\,\\text{V}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: حساب تيار المجمع: $I_c = \\beta I_b = 100 \\times 20\\,\\mu\\text{A} = 2.0\\,\\text{mA}$.",
                  "الخطوة ٢: هبوط الجهد على مقاومة المجمع: $V_{R_c} = I_c R_c = 2.0\\,\\text{mA} \\times 4.0\\,\\text{k}\\Omega = 8.0\\,\\text{V}$.",
                  "الخطوة ٣: جهد الخرج بين المجمع والباعث: $V_{ce} = V_{cc} - I_c R_c = 12.0 - 8.0 = 4.0\\,\\text{V}$."
                ],
                "teacherTipEn": "When base current increases, collector current increases, which drives Vce down; this demonstrates phase inversion.",
                "teacherTipAr": "زيادة تيار القاعدة تؤدي لزيادة تيار المجمع وانخفاض جهد Vce، وهذا يفسر كون الترانزستور عاكساً لطور الإشارة."
              },
              {
                "id": "egbac_phys_ws_p4_3",
                "titleEn": "Series RLC Resonance & Quality Factor in Tuned Sensor Circuit",
                "titleAr": "رنين دائرة RLC ومعامل الجودة لمستشعر إلكتروني عالي الانتقائية",
                "difficulty": "hots",
                "diagramType": "phys_rlc_resonance_phasor",
                "questionEn": "A tuned detection circuit consists of a resistor $R = 10\\,\\Omega$, an inductor $L = 2.0\\,\\text{mH}$, and a capacitor $C = 50\\,\\text{nF}$ in series. Calculate the circuit resonance frequency $f_0$ and its quality factor $Q$.",
                "questionAr": "دائرة استشعار وتوليف إلكترونية تتكون من مقاومة أومية $R = 10\\,\\Omega$ وملف حث $L = 2.0\\,\\text{mH}$ ومكثف سعته $C = 50\\,\\text{nF}$ متصلة على التوالي. احسب تردد الرنين $f_0$ ومعامل جودة الرنين $Q$ لهذه الدائرة.",
                "optionsEn": [
                  "$f_0 \\approx 15.92\\,\\text{kHz},\\, Q = 20.0$",
                  "$f_0 \\approx 31.83\\,\\text{kHz},\\, Q = 10.0$",
                  "$f_0 \\approx 7.96\\,\\text{kHz},\\, Q = 40.0$",
                  "$f_0 \\approx 15.92\\,\\text{kHz},\\, Q = 2.0$"
                ],
                "optionsAr": [
                  "$f_0 \\approx 15.92\\,\\text{kHz},\\, Q = 20.0$",
                  "$f_0 \\approx 31.83\\,\\text{kHz},\\, Q = 10.0$",
                  "$f_0 \\approx 7.96\\,\\text{kHz},\\, Q = 40.0$",
                  "$f_0 \\approx 15.92\\,\\text{kHz},\\, Q = 2.0$"
                ],
                "correctAnswer": "$f_0 \\approx 15.92\\,\\text{kHz},\\, Q = 20.0$",
                "correctIndex": 0,
                "hintEn": "Use $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$ and quality factor $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{\\omega_0 L}{R}$.",
                "hintAr": "طبق $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$ ومعامل الجودة $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
                "stepByStepSolutionEn": [
                  "Step 1: Calculate $LC = (2.0 \\times 10^{-3}\\text{ H}) \\times (50 \\times 10^{-9}\\text{ F}) = 1.0 \\times 10^{-10}\\text{ s}^2$.",
                  "Step 2: $\\sqrt{LC} = 1.0 \\times 10^{-5}\\text{ s}$.",
                  "Step 3: Resonant frequency: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}} = \\frac{1}{2 \\times 3.1416 \\times 10^{-5}} \\approx 15915\\,\\text{Hz} \\approx 15.92\\,\\text{kHz}$.",
                  "Step 4: Quality factor: $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{1}{10}\\sqrt{\\frac{2.0 \\times 10^{-3}}{50 \\times 10^{-9}}} = \\frac{1}{10}\\sqrt{40000} = \\frac{200}{10} = 20.0$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: حساب حاصل ضرب $LC = (2.0 \\times 10^{-3}) \\times (50 \\times 10^{-9}) = 1.0 \\times 10^{-10}\\text{ s}^2$.",
                  "الخطوة ٢: الجذر التربيعي: $\\sqrt{LC} = 10^{-5}\\text{ s}$.",
                  "الخطوة ٣: تردد الرنين: $f_0 = \\frac{1}{2\\pi \\times 10^{-5}} \\approx 15.92\\,\\text{kHz}$.",
                  "الخطوة ٤: معامل الجودة: $Q = \\frac{1}{10}\\sqrt{\\frac{2 \\times 10^{-3}}{50 \\times 10^{-9}}} = \\frac{1}{10}\\sqrt{40000} = \\frac{200}{10} = 20.0$."
                ],
                "teacherTipEn": "Higher Q means a sharper resonance curve and higher frequency selectivity, essential for communications filters.",
                "teacherTipAr": "كلما زاد معامل الجودة Q زادت حدة قمة منحنى الرنين وزادت قدرة الدائرة على فرز وتوليف الإشارات بدقة عالية."
              }
            ]
          },
          "interactiveWidget": {
            "type": "physics_resonance",
            "titleEn": "Semiconductor Band Gap & Transistor Simulator",
            "titleAr": "محاكي فجوة طاقة أشباه الموصلات والترانزستور",
            "descriptionEn": "Interactive solid-state visualizer for mass action dopant equilibria, diode IV curves, and BJT signal amplification.",
            "descriptionAr": "محاكاة تفاعلية لتوزيع حزم الطاقة ومنحنى خواص الدايود وتكبير الإشارات بدوائر الترانزستور."
          }
        },
        {
          "id": "egbac_phys_l5",
          "titleEn": "Relativistic Mechanics & Nuclear Quantum Physics: Mass Defect, Binding Energy & Reactions",
          "titleAr": "الميكانيكا النسبية وفيزياء النواة الكمية: نقص الكتلة، طاقة الترابط والتفاعلات النووية",
          "summaryEn": "Special relativity principles, mass-energy equivalence ($E = mc^2$), mass defect, nuclear binding energy curve, liquid drop model, fission chain reactions, and fusion stellar nucleosynthesis.",
          "summaryAr": "مبادئ النسبية الخاصة، تكافؤ الكتلة والطاقة، نقص الكتلة، منحنى طاقة الترابط لكل نيوكلون، الانشطار النووي المتسلسل والاندماج النووي في النجوم.",
          "theoryContentEn": "### 1. Special Relativity Principles & Mass-Energy Equivalence\nAlbert Einstein's Special Theory of Relativity (1905) rests on two postulates:\n1. The laws of physics are identical in all inertial reference frames.\n2. The speed of light in vacuum ($c = 3.0 \\times 10^8\\,\\text{m/s}$) is a universal constant for all observers.\n- **Lorentz Transformation Factor:**\n  $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$\n- **Relativistic Energy-Momentum Relation:**\n  $E = \\gamma m_0 c^2 = K + m_0 c^2, \\quad E^2 = (p c)^2 + (m_0 c^2)^2$\n- **Mass-Energy Equivalence Principle:**\n  $E = m c^2 \\implies \\Delta E = \\Delta m \\cdot c^2$\n  Conversion metric: $1\\,\\text{atomic mass unit (u)} = 1.66054 \\times 10^{-27}\\,\\text{kg} \\equiv 931.5\\,\\text{MeV}$.\n\n---\n\n### 2. Nuclear Architecture, Mass Defect & Binding Energy\nAtomic nuclei comprise $Z$ protons and $N$ neutrons held together against Coulomb repulsion by the strong nuclear force (short-range, attractive, charge-independent).\n- **Mass Defect ($\\Delta m$):**\n  The total mass of a stable bound nucleus $M_{\\text{nucleus}}$ is strictly less than the combined sum of its constituent individual free protons and neutrons:\n  $\\Delta m = \\left(Z m_p + N m_n\\right) - M_{\\text{nucleus}}$\n- **Nuclear Binding Energy ($BE$):**\n  The energy equivalent of the mass defect released when forming the nucleus (or required to completely dissociate it):\n  $BE = \\Delta m \\times 931.5\\,\\text{MeV}$\n- **Binding Energy per Nucleon ($BE / A$):**\n  Measure of nuclear stability. Climbs steeply from light nuclei ($^2_1\\text{H} \\approx 1.1\\,\\text{MeV}$), reaches a peak of $\\approx 8.8\\,\\text{MeV/nucleon}$ at Iron-56 ($^{56}_{26}\\text{Fe}$), then gradually declines toward heavy elements ($^{238}_{92}\\text{U} \\approx 7.6\\,\\text{MeV}$).\n  - **Fission:** Splitting heavy nuclei ($A > 200$) releases energy because product fragments have higher $BE/A$.\n  - **Fusion:** Merging light nuclei ($A < 20$) releases enormous energy as the compound nucleus climbs steeply toward the Iron peak.\n\n---\n\n### 3. Nuclear Fission & Chain Reactions\n- **Thermal Neutron Fission of Uranium-235:**\n  $^{235}_{92}\\text{U} + ^1_0\\text{n} \\to ^{236}_{92}\\text{U}^* \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3 ^1_0\\text{n} + Q$\n  where $Q \\approx 200\\,\\text{MeV}$ per fission event, primarily appearing as kinetic energy of fission fragments.\n- **Sustained Chain Reaction & Critical Mass:**\n  Fission neutrons must be slowed by a **moderator** (graphite, heavy water $\\text{D}_2\\text{O}$, or ordinary light water) to thermal speeds ($approx 0.025\\,\\text{eV}$) to match the high absorption resonance of $^{235}\\text{U}$.\n- **Reactor Control:** Cadmium or boron control rods absorb excess neutrons to maintain multiplication factor $k = 1$ (critical state).\n\n---\n\n### 4. Thermonuclear Fusion & Stellar Energy\nMerging very light isotopes under extreme temperatures ($T > 10^7\\,\\text{K}$) overcomes electrostatic Coulomb repulsion:\n- **Deuterium-Tritium (D-T) Fusion:**\n  $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0\\text{n} + 17.6\\,\\text{MeV}$\n- **Lawson Criterion for Net Energy Gain:**\n  The plasma density $n$ and energy confinement time $\\tau$ must satisfy:\n  $n \\cdot \\tau \\ge 10^{14}\\,\\text{s/cm}^3 \\quad (\\text{at } T \\approx 100 \\times 10^6\\,\\text{K})$\n  Achieved through magnetic confinement (Tokamaks) or inertial laser confinement.",
          "theoryContentAr": "### ١. مبادئ النسبية الخاصة وتكافؤ الكتلة والطاقة\nتقوم النظرية النسبية الخاصة لألبرت أينشتاين (١٩٠٥م) على فرضين أساسيين:\n١. قوانين الفيزياء متماثلة في جميع أطر الإسناد القصورية.\n٢. سرعة الضوء في الفراغ ($c = 3.0 \\times 10^8\\,\\text{m/s}$) ثابت كوني مطلق لا يتغير بتغير حركة المصدر أو الراصد.\n- **معامل لورنتز النسبي:**\n  $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$\n- **معادلة الطاقة النسبية وكمية الحركة:**\n  $E^2 = (p c)^2 + (m_0 c^2)^2, \\quad E = \\gamma m_0 c^2$\n- **مبدأ تكافؤ الكتلة والطاقة:**\n  $E = m c^2 \\implies \\Delta E = \\Delta m \\cdot c^2$\n  عامل التحويل الذري: كل $1\\,\\text{amu} = 1.66 \\times 10^{-27}\\,\\text{kg}$ يكافئ طاقة قدرها $931.5\\,\\text{MeV}$.\n\n---\n\n### ٢. البنية النووية، نقص الكتلة وطاقة الترابط النووي\nتتكون النواة من $Z$ بروتون و $N$ نيوترون تربطها القوة النووية القوية ذات المدى القصير جداً.\n- **نقص الكتلة ($\\Delta m$):**\n  كتلة النواة المستقرة المترابطة أقل دائماً من مجموع كتل مكوناتها الحرة المنفردة:\n  $\\Delta m = \\left(Z m_p + N m_n\\right) - M_{\\text{النواة}}$\n- **طاقة الترابط النووي ($BE$):**\n  الطاقة المكافئة لنقص الكتلة المتحررة عند تكوين النواة:\n  $BE = \\Delta m \\times 931.5\\,\\text{MeV}$\n- **طاقة الترابط لكل نيوكلون ($BE / A$):**\n  المقياس الحقيقي لمدى استقرار النواة. تبلغ أقصى قيمة استقرار لها عند نواة الحديد-٥٦ ($\\approx 8.8\\,\\text{MeV/nucleon}$):\n  - **الانشطار النووي:** انقسام الأنوية الثقيلة ($A > 200$) يحرر طاقة لانتقال النواتج نحو أنوية ذات طاقة ترابط أعلى لكل نيوكلون.\n  - **الاندماج النووي:** دمج الأنوية الخفيفة ($A < 20$) يحرر طاقة هائلة جداً بالصعود الحاد نحو قمة منحنى الاستقرار.\n\n---\n\n### ٣. الانشطار النووي والتفاعل المتسلسل\n- **انشطار اليورانيوم-٢٣٥ بالنيوترونات الحرارية:**\n  $^{235}_{92}\\text{U} + ^1_0\\text{n} \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3 ^1_0\\text{n} + 200\\,\\text{MeV}$\n- **التفاعل المتسلسل والكتلة الحرجة:**\n  استمرار انشطار الأنوية بالنيوترونات الناتجة يتطلب وصول كتلة اليورانيوم إلى **الكتلة الحرجة** ووجود **مهدئ** (ماء ثقيل أو جرافيت) لإبطاء النيوترونات لتصبح حرارية وسهلة الاقتناص.\n- **التحكم في المفاعل النووي:** قضبان الكادميوم والبورون لامتصاص النيوترونات الزائدة للحفاظ على معدل التكاثر $k = 1$.\n\n---\n\n### ٤. الاندماج النووي وطاقة النجوم\nدمج أنوية نظائر الهيدروجين الخفيفة (الديوتيريوم والتريتيوم) في درجات حرارة فائقة تتجاوز ملايين الدرجات للتغلب على قوى التنافر الكهربي:\n$^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0\\text{n} + 17.6\\,\\text{MeV}$\nيمثل الاندماج النووي مصدر طاقة الشمس ويسعى العلماء لاحتوائه مغناطيسياً في مفاعلات التوكاماك لإنتاج طاقة نظيفة لا تنفد.",
          "formulas": [
            {
              "labelEn": "Einstein Mass-Energy Equivalence",
              "labelAr": "معادلة أينشتاين لتكافؤ الكتلة والطاقة",
              "latex": "E = m c^2 \\quad (\\text{or } E = \\Delta m \\times 931.5\\,\\text{MeV})"
            },
            {
              "labelEn": "Nuclear Mass Defect",
              "labelAr": "نقص الكتلة في النواة",
              "latex": "\\Delta m = (Z m_p + N m_n) - M_{\\text{nucleus}}"
            },
            {
              "labelEn": "Relativistic Energy-Momentum Invariant",
              "labelAr": "علاقة الطاقة وكمية الحركة النسبية الثابتة",
              "latex": "E^2 = (p c)^2 + (m_0 c^2)^2"
            }
          ],
          "moeRef": {
            "bookTitleEn": "EG-Bac Advanced Physics Handbook",
            "bookTitleAr": "مرجع الفيزياء المتقدمة - البكالوريا المصرية الدولية",
            "grade": "Grade 12 STEM",
            "term": "Full Year",
            "officialCode": "EGBAC-PHYS-ADV-CH1-L5",
            "pageRange": "pp. 291 - 340"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Relativistic Mass-Energy, Nuclear Binding & Fission/Fusion Energetics",
            "titleAr": "خطة درس: تكافؤ الكتلة والطاقة النسبي، طاقة الترابط والانشطار والاندماج النووي",
            "gradeLevel": "Grade 12 Advanced Baccalaureate",
            "durationMinutes": 90,
            "moeCode": "EGBAC-PHYS-ADV-CH1-L5",
            "bloomsObjectivesEn": [
              "Apply relativistic energy-momentum invariants to calculate kinetic energies of subatomic particles.",
              "Compute nuclear mass defect and binding energy per nucleon from constituent proton/neutron masses.",
              "Evaluate energy yield and neutron economy in Uranium-235 fission chain reactions."
            ],
            "bloomsObjectivesAr": [
              "تطبيق معادلات الطاقة وكمية الحركة النسبية لحساب طاقة حركة الجسيمات دون الذرية.",
              "حساب نقص الكتلة وطاقة الترابط النووي لكل نيوكلون من كتل البروتونات والنيوترونات.",
              "تقييم الطاقة الناتجة والاقتصاد النيوتروني في التفاعلات المتسلسلة لانشطار اليورانيوم-٢٣٥."
            ],
            "prerequisitesEn": [
              "Nuclear isotope notation",
              "Conservation of momentum",
              "Newtonian kinetic energy limits"
            ],
            "prerequisitesAr": [
              "رموز النظائر النووية",
              "قانون حفظ كمية الحركة",
              "حدود طاقة الحركة الكلاسيكية"
            ],
            "keyVocabularyEn": [
              {
                "term": "Mass Defect",
                "definition": "Difference between the combined sum of free nucleon masses and the actual bound nuclear mass."
              },
              {
                "term": "Critical Mass",
                "definition": "Minimum mass of fissile material required to maintain a self-sustaining nuclear chain reaction."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "نقص الكتلة",
                "definition": "الفرق بين مجموع كتل مكونات النواة وهي منفردة وكتلة النواة المترابطة الفعلية."
              },
              {
                "term": "الكتلة الحرجة",
                "definition": "الحد الأدنى من كتلة المادة الانشطارية اللازم للحفاظ على استمرار التفاعل النووي المتسلسل."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Relativistic Energy & Mass Equivalence",
                "phaseAr": "الطاقة النسبية وتكافؤ الكتلة",
                "duration": "25 mins",
                "activitiesEn": "Deriving E = mc^2 consequences and working with MeV/c^2 units.",
                "activitiesAr": "دراسة نتائج معادلة أينشتاين واستخدام وحدات الكتلة الذرية والميجا إلكترون فولت."
              },
              {
                "phaseEn": "Mass Defect & Binding Energy Curve",
                "phaseAr": "نقص الكتلة ومنحنى طاقة الترابط",
                "duration": "35 mins",
                "activitiesEn": "Plotting BE/A vs mass number and explaining why Iron-56 represents the maximum stability point.",
                "activitiesAr": "رسم منحنى طاقة الترابط لكل نيوكلون وتفسير قمة استقرار نواة الحديد-٥٦."
              },
              {
                "phaseEn": "Nuclear Fission & Fusion Thermodynamics",
                "phaseAr": "ديناميكا الانشطار والاندماج النووي",
                "duration": "30 mins",
                "activitiesEn": "Calculating Q values for U-235 fission and D-T thermonuclear fusion reactions.",
                "activitiesAr": "حساب الطاقة المحررة Q في انشطار اليورانيوم واندماج نظائر الهيدروجين."
              }
            ],
            "commonMisconceptionsEn": [
              "Believing nuclear mass is lost into nothingness (mass is converted directly into electromagnetic/kinetic energy via E = mc^2).",
              "Thinking nuclear fusion produces long-lived radioactive waste like fission (fusion products such as Helium are benign)."
            ],
            "commonMisconceptionsAr": [
              "الظن بأن كتلة النواة تفنى إلى العدم (الكتلة تتحول مباشرة إلى طاقة إشعاع وحركة طبقاً لقانون أينشتاين).",
              "الاعتقاد بأن الاندماج النووي ينتج نفايات مشعة طويلة العمر كالانشطار (الناتج الرئيسي للاندماج هو الهيليوم الآمن تماماً)."
            ],
            "differentiationEn": {
              "struggling": "Provide a step-by-step calculation checklist for finding mass defect: (1) count Z and N, (2) multiply by mp and mn, (3) subtract M, (4) multiply by 931.5.",
              "advanced": "Derive the threshold kinetic energy required in the laboratory frame for the endothermic reaction p + p -> p + p + pi^0."
            },
            "differentiationAr": {
              "struggling": "قائمة خطوات مرتبة لحساب طاقة الترابط: حساب عدد Z و N ثم ضرب الكتل ثم طرح كتلة النواة ثم الضرب في 931.5.",
              "advanced": "استنتاج طاقة الحركة الدنيا في معمل الفيزياء اللازمة لتوليد الميزون في تصادم بروتونين."
            },
            "formativeAssessmentEn": "Why do both fission of heavy nuclei and fusion of light nuclei release energy rather than absorb it?",
            "formativeAssessmentAr": "علل: كل من انشطار الأنوية الثقيلة واندماج الأنوية الخفيفة تفاعلات طاردة للطاقة وليست ماصة؟",
            "exitTicketQuestion": {
              "questionEn": "Calculate the energy released (in MeV) by the destruction of 0.0025 amu of mass defect.",
              "questionAr": "احسب الطاقة المحررة (بالميجا إلكترون فولت) الناتجة عن تحول نقص في الكتلة قدره ٠,٠٠٢٥ وحدة كتل ذرية.",
              "solutionEn": "$E = \\Delta m \\times 931.5 = 0.0025 \\times 931.5 = 2.32875\\,\\text{MeV}$.",
              "solutionAr": "$E = ٠,٠٠٢٥ \\times ٩٣١,٥ = ٢,٣٢٨٧٥\\,\\text{MeV}$."
            }
          },
          "worksheet": {
            "id": "egbac_phys_ws_5",
            "titleEn": "Worksheet 5: Relativistic Quantum Mechanics & Nuclear Energetics",
            "titleAr": "ورقة عمل ٥: الميكانيكا النسبية وحسابات الطاقة النووية",
            "descriptionEn": "Advanced quantitative problems on mass defect, binding energy per nucleon, and energy release in fission and fusion.",
            "descriptionAr": "مسائل تدريبية متقدمة على نقص الكتلة وطاقة الترابط النووي وحساب الطاقة المحررة في الانشطار والاندماج.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "egbac_phys_ws_p5_1",
                "titleEn": "Binding Energy per Nucleon for Alpha Particle",
                "titleAr": "حساب طاقة الترابط لكل نيوكلون لجسيم ألفا (نواة الهيليوم)",
                "difficulty": "medium",
                "questionEn": "Calculate the binding energy per nucleon for an alpha particle ($^4_2\\text{He}$, mass $= 4.0015\\,\\text{u}$) given: $m_p = 1.0073\\,\\text{u}$ and $m_n = 1.0087\\,\\text{u}$.",
                "questionAr": "احسب طاقة الترابط النووي لكل نيوكلون لجسيم ألفا ($^4_2\\text{He}$، كتلته الفعليّة $= 4.0015\\,\\text{u}$)، علماً بأن: $m_p = 1.0073\\,\\text{u}$ و $m_n = 1.0087\\,\\text{u}$.",
                "optionsEn": [
                  "$7.10\\,\\text{MeV/nucleon}$",
                  "$28.4\\,\\text{MeV/nucleon}$",
                  "$14.2\\,\\text{MeV/nucleon}$",
                  "$8.80\\,\\text{MeV/nucleon}$"
                ],
                "optionsAr": [
                  "$7.10\\,\\text{MeV/nucleon}$",
                  "$28.4\\,\\text{MeV/nucleon}$",
                  "$14.2\\,\\text{MeV/nucleon}$",
                  "$8.80\\,\\text{MeV/nucleon}$"
                ],
                "correctAnswer": "$7.10\\,\\text{MeV/nucleon}$",
                "correctIndex": 0,
                "hintEn": "Calculate mass defect delta_m = 2*m_p + 2*m_n - M_He, find total BE = delta_m * 931.5 MeV, then divide by A = 4.",
                "hintAr": "احسب نقص الكتلة delta_m = 2*mp + 2*mn - M_He، ثم احسب طاقة الترابط الكلية بالضرب في 931.5 واقسم على عدد النيوكلونات A = 4.",
                "stepByStepSolutionEn": [
                  "Step 1: Alpha nucleus has $Z = 2$ protons and $N = 4 - 2 = 2$ neutrons.",
                  "Step 2: Sum of free nucleon masses: $2(1.0073) + 2(1.0087) = 2.0146 + 2.0174 = 4.0320\\,\\text{u}$.",
                  "Step 3: Mass defect: $\\Delta m = 4.0320 - 4.0015 = 0.0305\\,\\text{u}$.",
                  "Step 4: Total binding energy: $BE = 0.0305 \\times 931.5 = 28.41\\,\\text{MeV}$.",
                  "Step 5: Binding energy per nucleon: $BE / A = \\frac{28.41}{4} \\approx 7.10\\,\\text{MeV/nucleon}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: نواة الهيليوم تحتوي على بروتونين ($Z = 2$) ونيوترونين ($N = 2$).",
                  "الخطوة ٢: مجموع كتل المكونات الحرة: $2(1.0073) + 2(1.0087) = 4.0320\\,\\text{u}$.",
                  "الخطوة ٣: نقص الكتلة: $\\Delta m = 4.0320 - 4.0015 = 0.0305\\,\\text{u}$.",
                  "الخطوة ٤: طاقة الترابط الكلية: $BE = 0.0305 \\times 931.5 = 28.41\\,\\text{MeV}$.",
                  "الخطوة ٥: طاقة الترابط لكل نيوكلون: $BE / A = \\frac{28.41}{4} \\approx 7.10\\,\\text{MeV/nucleon}$."
                ],
                "teacherTipEn": "An alpha particle has an exceptionally high BE/A (7.1 MeV) for such a light nucleus, making it extremely stable.",
                "teacherTipAr": "تمتلك نواة الهيليوم طاقة ترابط عالية جداً (7.1 MeV) مقارنة بكتلتها الصغيرة، مما يفسر استقرارها الفائق وخروجها كإشعاع ألفا."
              },
              {
                "id": "egbac_phys_ws_p5_2",
                "titleEn": "Total Energy Output from Complete Fission of Uranium-235",
                "titleAr": "إجمالي الطاقة الناتجة عن الانشطار الكامل لجرام واحد من اليورانيوم-٢٣٥",
                "difficulty": "medium",
                "questionEn": "If each fission of a $^{235}\\text{U}$ nucleus releases $200\\,\\text{MeV}$ of energy, what is the total energy released (in Joules) by the complete fission of $1.0\\,\\text{g}$ of $^{235}\\text{U}$ ($M_m = 235\\,\\text{g/mol}$)?",
                "questionAr": "إذا كان انشطار نواة واحدة من اليورانيوم-٢٣٥ يحرر طاقة $200\\,\\text{MeV}$، فما مقدار الطاقة الإجمالية (بالجول) الناتجة عن الانشطار التام لكتلة $1.0\\,\\text{g}$ من اليورانيوم-٢٣٥ ($M_m = 235\\,\\text{g/mol}$)؟",
                "optionsEn": [
                  "$8.2 \\times 10^{10}\\,\\text{J}$",
                  "$4.1 \\times 10^{10}\\,\\text{J}$",
                  "$1.6 \\times 10^{11}\\,\\text{J}$",
                  "$2.0 \\times 10^{10}\\,\\text{J}$"
                ],
                "optionsAr": [
                  "$8.2 \\times 10^{10}\\,\\text{J}$",
                  "$4.1 \\times 10^{10}\\,\\text{J}$",
                  "$1.6 \\times 10^{11}\\,\\text{J}$",
                  "$2.0 \\times 10^{10}\\,\\text{J}$"
                ],
                "correctAnswer": "$8.2 \\times 10^{10}\\,\\text{J}$",
                "correctIndex": 0,
                "hintEn": "Calculate number of nuclei N = (m / M_m) * N_A, then multiply by 200 MeV * 1.6 x 10^-13 J/MeV.",
                "hintAr": "احسب عدد الأنوية N = (m / M_m) * N_A، ثم اضرب في الطاقة الناتجة لكل انشطار بالجول (200 * 1.6 x 10^-13 جول).",
                "stepByStepSolutionEn": [
                  "Step 1: Number of nuclei in $1.0\\,\\text{g}$: $N = \\frac{m}{M_m} \\times N_A = \\frac{1.0}{235} \\times (6.022 \\times 10^{23}) \\approx 2.5625 \\times 10^{21}\\,\\text{nuclei}$.",
                  "Step 2: Energy per fission in Joules: $E_1 = 200\\,\\text{MeV} \\times 1.602 \\times 10^{-13}\\,\\text{J/MeV} = 3.204 \\times 10^{-11}\\,\\text{J}$.",
                  "Step 3: Total energy released: $E_{\\text{total}} = N \\times E_1 = (2.5625 \\times 10^{21}) \\times (3.204 \\times 10^{-11}) \\approx 8.21 \\times 10^{10}\\,\\text{J}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: عدد الأنوية في جرام واحد: $N = \\frac{1.0}{235} \\times 6.022 \\times 10^{23} \\approx 2.5625 \\times 10^{21}$ نواة.",
                  "الخطوة ٢: طاقة الانشطار الواحد بالجول: $E_1 = 200 \\times 1.602 \\times 10^{-13} = 3.204 \\times 10^{-11}\\,\\text{J}$.",
                  "الخطوة ٣: إجمالي الطاقة بالجول: $E_{\\text{total}} = 2.5625 \\times 10^{21} \\times 3.204 \\times 10^{-11} \\approx 8.21 \\times 10^{10}\\,\\text{J}$ (أكثر من 82 مليار جول!)."
                ],
                "teacherTipEn": "To appreciate this scale: 82 billion Joules is equivalent to burning over 2.5 metric tons of premium coal.",
                "teacherTipAr": "لإدراك هذه الطاقة الهائلة: انشطار جرام واحد من اليورانيوم يكافئ حرق أكثر من ٢,٥ طن من الفحم الحجري الممتاز."
              },
              {
                "id": "egbac_phys_ws_p5_3",
                "titleEn": "Thermonuclear D-T Fusion Energy Yield & Mass Defect",
                "titleAr": "الطاقة المحررة ونقص الكتلة في تفاعل الاندماج النووي (ديوتيريوم - تريتيوم)",
                "difficulty": "hots",
                "questionEn": "In the thermonuclear fusion reaction: $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0\\text{n} + Q$, the isotopic masses are $m(^2\\text{H}) = 2.0141\\,\\text{u}$, $m(^3\\text{H}) = 3.0160\\,\\text{u}$, $m(^4\\text{He}) = 4.0026\\,\\text{u}$, and $m(^1\\text{n}) = 1.0087\\,\\text{u}$. Calculate the mass defect $\\Delta m$ and the energy $Q$ released per reaction in MeV.",
                "questionAr": "في تفاعل الاندماج الحراري النووي: $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0\\text{n} + Q$، إذا كانت الكتل الذرية هي: $m(^2\\text{H}) = 2.0141\\,\\text{u}$ و $m(^3\\text{H}) = 3.0160\\,\\text{u}$ و $m(^4\\text{He}) = 4.0026\\,\\text{u}$ و $m(^1\\text{n}) = 1.0087\\,\\text{u}$. احسب نقص الكتلة $\\Delta m$ ومقدار الطاقة $Q$ المحررة عن كل تفاعل بالميجا إلكترون فولت.",
                "optionsEn": [
                  "$\\Delta m = 0.0188\\,\\text{u},\\, Q \\approx 17.51\\,\\text{MeV}$",
                  "$\\Delta m = 0.0376\\,\\text{u},\\, Q \\approx 35.02\\,\\text{MeV}$",
                  "$\\Delta m = 0.0094\\,\\text{u},\\, Q \\approx 8.76\\,\\text{MeV}$",
                  "$\\Delta m = 0.0188\\,\\text{u},\\, Q \\approx 200.0\\,\\text{MeV}$"
                ],
                "optionsAr": [
                  "$\\Delta m = 0.0188\\,\\text{u},\\, Q \\approx 17.51\\,\\text{MeV}$",
                  "$\\Delta m = 0.0376\\,\\text{u},\\, Q \\approx 35.02\\,\\text{MeV}$",
                  "$\\Delta m = 0.0094\\,\\text{u},\\, Q \\approx 8.76\\,\\text{MeV}$",
                  "$\\Delta m = 0.0188\\,\\text{u},\\, Q \\approx 200.0\\,\\text{MeV}$"
                ],
                "correctAnswer": "$\\Delta m = 0.0188\\,\\text{u},\\, Q \\approx 17.51\\,\\text{MeV}$",
                "correctIndex": 0,
                "hintEn": "Mass defect $\\Delta m = (m(^2\\text{H}) + m(^3\\text{H})) - (m(^4\\text{He}) + m(^1\\text{n}))$. Multiply by $931.5\\,\\text{MeV/u}$.",
                "hintAr": "نقص الكتلة $\\Delta m = (m_D + m_T) - (m_\\alpha + m_n)$. اضرب في $931.5\\,\\text{MeV}$.",
                "stepByStepSolutionEn": [
                  "Step 1: Total initial reactant mass: $M_{\\text{reactants}} = 2.0141 + 3.0160 = 5.0301\\,\\text{u}$.",
                  "Step 2: Total final product mass: $M_{\\text{products}} = 4.0026 + 1.0087 = 5.0113\\,\\text{u}$.",
                  "Step 3: Mass defect: $\\Delta m = 5.0301 - 5.0113 = 0.0188\\,\\text{u}$.",
                  "Step 4: Energy released: $Q = \\Delta m \\times 931.5\\,\\text{MeV/u} = 0.0188 \\times 931.5 \\approx 17.512\\,\\text{MeV}$."
                ],
                "stepByStepSolutionAr": [
                  "الخطوة ١: مجموع كتل المتفاعلات: $M_{\\text{reactants}} = 2.0141 + 3.0160 = 5.0301\\,\\text{u}$.",
                  "الخطوة ٢: مجموع كتل النواتج: $M_{\\text{products}} = 4.0026 + 1.0087 = 5.0113\\,\\text{u}$.",
                  "الخطوة ٣: نقص الكتلة: $\\Delta m = 5.0301 - 5.0113 = 0.0188\\,\\text{u}$.",
                  "الخطوة ٤: الطاقة المحررة: $Q = 0.0188 \\times 931.5 \\approx 17.51\\,\\text{MeV}$."
                ],
                "teacherTipEn": "Notice that per nucleon, fusion yields $\\approx 17.5 / 5 = 3.5\\,\\text{MeV/nucleon}$, nearly 4 times the energy density of Uranium fission ($\approx 200 / 235 = 0.85\\,\\text{MeV/nucleon}$).",
                "teacherTipAr": "لكل نيوكلون: يحرر الاندماج 3.5 ميجا إلكترون فولت/نيوكلون مقارنة بـ 0.85 ميجا إلكترون فولت/نيوكلون للانشطار، فالاندماج أعلى كفاءة بنحو 4 أضعاف."
              }
            ]
          },
          "interactiveWidget": {
            "type": "physics_flashcards",
            "titleEn": "Nuclear Binding Energy & Fission Chain Reactor",
            "titleAr": "محاكي طاقة الترابط النووي وتفاعل الانشطار المتسلسل",
            "descriptionEn": "Interactive simulator modeling nuclear mass defect, binding energy curves, and critical mass chain reaction dynamics.",
            "descriptionAr": "محاكاة تفاعلية لمنحنى طاقة الترابط النووي ونقص الكتلة ومفاعل الانشطار المتسلسل."
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
