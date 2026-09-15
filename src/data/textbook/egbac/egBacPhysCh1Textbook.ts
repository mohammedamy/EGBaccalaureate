import type { SolvedProblem } from '../../../types/curriculum';

export const egBacPhysCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_phys_ch1_se_01",
    "titleEn": "Photon Energy & Spectral Wavelength of Green Light",
    "titleAr": "طاقة الفوتون والطول الموجي لطيف الضوء الأخضر",
    "difficulty": "easy",
    "questionEn": "A laser emits green monochromatic light of wavelength $\\lambda = 500\\text{ nm}$. Given Planck's constant $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.0 \\times 10^8\\text{ m/s}$, and $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$, calculate the energy of a single photon in electron-volts ($\\text{eV}$).",
    "questionAr": "يبعث ليزر ضوءاً أحادي اللون بلون أخضر طوله الموجي $\\lambda = 500\\text{ نانومتر}$. بمعلومية ثابت بلانك $h = 6.625 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$، وسرعة الضوء $c = 3.0 \\times 10^8\\text{ م/ث}$، و $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ جول}$، احسب طاقة الفوتون الواحد بوحدة الإلكترون فولت ($\\text{eV}$).",
    "optionsEn": [
      "$2.48\\text{ eV}$",
      "$1.85\\text{ eV}$",
      "$3.12\\text{ eV}$",
      "$4.96\\text{ eV}$"
    ],
    "optionsAr": [
      "$2.48\\text{ إلكترون فولت}$",
      "$1.85\\text{ إلكترون فولت}$",
      "$3.12\\text{ إلكترون فولت}$",
      "$4.96\\text{ إلكترون فولت}$"
    ],
    "correctAnswer": "$2.48\\text{ eV}$",
    "correctIndex": 0,
    "hintEn": "Use Planck's energy equation: E = hc / lambda, then divide by 1.6 * 10^-19 to convert Joules to eV.",
    "hintAr": "استخدم قانون بلانك: E = hc / lambda، ثم اقسم على شحنة الإلكترون للتحويل إلى إلكترون فولت.",
    "stepByStepSolutionEn": [
      "1. Calculate photon energy in Joules: $E = \\frac{hc}{\\lambda} = \\frac{(6.625 \\times 10^{-34})(3.0 \\times 10^8)}{500 \\times 10^{-9}} = 3.975 \\times 10^{-19}\\text{ J}$.",
      "2. Convert Joules to electron-volts: $E_{\\text{eV}} = \\frac{3.975 \\times 10^{-19}\\text{ J}}{1.6 \\times 10^{-19}\\text{ J/eV}} \\approx 2.484\\text{ eV}$.",
      "3. Thus, the photon carries approximately $2.48\\text{ eV}$ of localized energy."
    ],
    "stepByStepSolutionAr": [
      "١. حساب طاقة الفوتون بالجول: $E = \\frac{hc}{\\lambda} = \\frac{(6.625 \\times 10^{-34})(3.0 \\times 10^8)}{500 \\times 10^{-9}} = 3.975 \\times 10^{-19}\\text{ جول}$.",
      "٢. التحويل إلى إلكترون فولت: $E_{\\text{eV}} = \\frac{3.975 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 2.484\\text{ إلكترون فولت}$.",
      "٣. إذن طاقة فوتون الضوء الأخضر تساوي $2.48\\text{ إلكترون فولت}$ تقريباً."
    ],
    "teacherTipEn": "A handy shortcut for photon energy is E(eV) ≈ 1240 / λ(nm). Here, 1240 / 500 = 2.48 eV.",
    "teacherTipAr": "قاعدة سريعة ومفيدة في مسائل الفيزياء الذریة: E(eV) ≈ 1240 / λ(nm). هنا 1240 / 500 = 2.48 إلكترون فولت."
  },
  {
    "id": "egbac_phys_ch1_se_02",
    "titleEn": "Wien's Displacement Law & Stellar Surface Temperature",
    "titleAr": "قانون فين للإزاحة وحساب درجة حرارة سطح النجم",
    "difficulty": "medium",
    "questionEn": "The spectral emission curve of a distant star shows a maximum radiant intensity at a wavelength of $\\lambda_{\\max} = 480\\text{ nm}$. If the Sun has a peak emission at $\\lambda_{\\max,\\odot} = 500\\text{ nm}$ with a surface temperature of $T_\\odot = 5800\\text{ K}$, determine the surface temperature of the distant star using Wien's displacement law.",
    "questionAr": "يُظهر منحنى الإشعاع لنجم بعيد قمة شدة إشعاع عند طول موجي $\\lambda_{\\max} = 480\\text{ نانومتر}$. إذا كانت قمة إشعاع الشمس عند $\\lambda_{\\max,\\odot} = 500\\text{ نانومتر}$ ودرجة حرارة سطحها $T_\\odot = 5800\\text{ كلفن}$، فاحسب درجة حرارة سطح هذا النجم باستخدام قانون فين للإزاحة.",
    "optionsEn": [
      "$5568\\text{ K}$",
      "$6042\\text{ K}$",
      "$6450\\text{ K}$",
      "$7250\\text{ K}$"
    ],
    "optionsAr": [
      "$5568\\text{ كلفن}$",
      "$6042\\text{ كلفن}$",
      "$6450\\text{ كلفن}$",
      "$7250\\text{ كلفن}$"
    ],
    "correctAnswer": "$6042\\text{ K}$",
    "correctIndex": 1,
    "hintEn": "Wien's law states that lambda_max * T is constant, so T_star / T_sun = lambda_max,sun / lambda_max,star.",
    "hintAr": "ينص قانون فين على أن حاصل ضرب الطول الموجي الأقصى في درجة الحرارة المطلقة مقدار ثابت: T_star / T_sun = lambda_max,sun / lambda_max,star.",
    "stepByStepSolutionEn": [
      "1. State Wien's displacement law: $\\lambda_{\\max} \\cdot T = \\text{constant}$, meaning $\\frac{T_{\\text{star}}}{T_\\odot} = \\frac{\\lambda_{\\max,\\odot}}{\\lambda_{\\max,\\text{star}}}$.",
      "2. Substitute known values: $T_{\\text{star}} = 5800 \\times \\frac{500\\text{ nm}}{480\\text{ nm}} = 5800 \\times 1.0417$.",
      "3. Calculate the resulting temperature: $T_{\\text{star}} \\approx 6041.7\\text{ K} \\approx 6042\\text{ K}$."
    ],
    "stepByStepSolutionAr": [
      "١. نص قانون فين للإزاحة: $\\lambda_{\\max} \\cdot T = \\text{ثابت}$، ومنه: $\\frac{T_{\\text{star}}}{T_\\odot} = \\frac{\\lambda_{\\max,\\odot}}{\\lambda_{\\max,\\text{star}}}$.",
      "٢. التعويض بالقيم المعطاة: $T_{\\text{star}} = 5800 \\times \\frac{500}{480} = 5800 \\times 1.0417$.",
      "٣. إذن درجة حرارة سطح النجم تساوي $6042\\text{ كلفن}$ تقريباً."
    ],
    "teacherTipEn": "Remember that higher surface temperature shifts the blackbody emission peak toward shorter wavelengths (bluer light).",
    "teacherTipAr": "تذكر دائماً أن ارتفاع درجة حرارة الجسم المشع يزيح قمة المنحنى نحو الأطوال الموجية الأقصر (الضوء الأزرق)."
  },
  {
    "id": "egbac_phys_ch1_se_03",
    "titleEn": "Photoelectric Stopping Potential of Cesium Metal",
    "titleAr": "جهد الإيقاف الكهروضوئي لفلز السيزيوم",
    "difficulty": "easy",
    "questionEn": "Monochromatic light of wavelength $\\lambda = 420\\text{ nm}$ falls onto a clean cesium cathode with a work function of $\\Phi = 1.90\\text{ eV}$. Given $hc \\approx 1240\\text{ eV}\\cdot\\text{nm}$, what is the stopping potential $V_{\\text{stop}}$ required to completely cut off the photocurrent?",
    "questionAr": "سقط ضوء أحادي اللون طوله الموجي $\\lambda = 420\\text{ نانومتر}$ على مهبط من السيزيوم دالة شغله $\\Phi = 1.90\\text{ إلكترون فولت}$. بمعلومية $hc \\approx 1240\\text{ eV}\\cdot\\text{nm}$، ما جهد الإيقاف $V_{\\text{stop}}$ اللازم لقطع التيار الكهروضوئي تماماً؟",
    "optionsEn": [
      "$0.75\\text{ V}$",
      "$1.45\\text{ V}$",
      "$1.05\\text{ V}$",
      "$2.95\\text{ V}$"
    ],
    "optionsAr": [
      "$0.75\\text{ فولت}$",
      "$1.45\\text{ فولت}$",
      "$1.05\\text{ فولت}$",
      "$2.95\\text{ فولت}$"
    ],
    "correctAnswer": "$1.05\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "First find incident photon energy E = 1240 / 420 eV, then find KE_max = E - Phi, and V_stop = KE_max / e.",
    "hintAr": "احسب طاقة الفوتون الساقط E = 1240 / 420 إلكترون فولت، ثم أوجد طاقة الحركة العظمى KE_max = E - Phi، وجهد الإيقاف V_stop = KE_max / e.",
    "stepByStepSolutionEn": [
      "1. Calculate the energy of the incident photon: $E = \\frac{hc}{\\lambda} = \\frac{1240}{420} \\approx 2.952\\text{ eV}$.",
      "2. Apply Einstein's photoelectric equation: $KE_{\\max} = E - \\Phi = 2.952 - 1.90 = 1.052\\text{ eV}$.",
      "3. Determine the stopping potential: Since $e V_{\\text{stop}} = KE_{\\max}$, we have $V_{\\text{stop}} = 1.052\\text{ V} \\approx 1.05\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "١. طاقة الفوتون الساقط: $E = \\frac{hc}{\\lambda} = \\frac{1240}{420} \\approx 2.952\\text{ إلكترون فولت}$.",
      "٢. تطبيق معادلة أينشتاين للظاهرة الكهروضوئية: $KE_{\\max} = E - \\Phi = 2.952 - 1.90 = 1.052\\text{ إلكترون فولت}$.",
      "٣. حساب جهد الإيقاف: بما أن $e V_{\\text{stop}} = KE_{\\max}$، إذن $V_{\\text{stop}} = 1.052\\text{ فولت} \\approx 1.05\\text{ فولت}$."
    ],
    "teacherTipEn": "Stopping potential is numerically equal to the maximum kinetic energy expressed in electron-volts.",
    "teacherTipAr": "القيمة العددية لجهد الإيقاف بالفولت تساوي تماماً القيمة العددية لطاقة الحركة العظمى بالإلكترون فولت."
  },
  {
    "id": "egbac_phys_ch1_se_04",
    "titleEn": "Maximum Velocity of Emitted Photoelectrons Under UV Light",
    "titleAr": "السرعة القصوى للإلكترونات الضوئية المنبعثة تحت الأشعة فوق البنفسجية",
    "difficulty": "medium",
    "questionEn": "Ultraviolet light of frequency $\\nu = 1.2 \\times 10^{15}\\text{ Hz}$ illuminates a metal surface with threshold frequency $\\nu_c = 8.0 \\times 10^{14}\\text{ Hz}$. Given $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and electron rest mass $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, calculate the maximum speed $v_{\\max}$ of the ejected photoelectrons.",
    "questionAr": "أسقط ضوء فوق بنفسجي تردده $\\nu = 1.2 \\times 10^{15}\\text{ هرتز}$ على سطح فلزي تردده الحرج $\\nu_c = 8.0 \\times 10^{14}\\text{ هرتز}$. بمعلومية ثابت بلانك $h = 6.625 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$ وكتلة سكون الإلكترون $m_e = 9.1 \\times 10^{-31}\\text{ كجم}$، احسب أقصى سرعة $v_{\\max}$ للإلكترونات الضوئية المنبعثة.",
    "optionsEn": [
      "$5.39 \\times 10^5\\text{ m/s}$",
      "$9.12 \\times 10^5\\text{ m/s}$",
      "$3.81 \\times 10^5\\text{ m/s}$",
      "$7.63 \\times 10^5\\text{ m/s}$"
    ],
    "optionsAr": [
      "$5.39 \\times 10^5\\text{ م/ث}$",
      "$9.12 \\times 10^5\\text{ م/ث}$",
      "$3.81 \\times 10^5\\text{ م/ث}$",
      "$7.63 \\times 10^5\\text{ م/ث}$"
    ],
    "correctAnswer": "$7.63 \\times 10^5\\text{ m/s}$",
    "correctIndex": 3,
    "hintEn": "Calculate KE_max = h * (nu - nu_c), then use KE_max = 0.5 * m_e * v_max^2 to solve for v_max.",
    "hintAr": "احسب طاقة الحركة العظمى KE_max = h * (nu - nu_c)، ثم طبق العلاقة KE_max = 0.5 * m_e * v_max^2 لإيجاد السرعة القصوى.",
    "stepByStepSolutionEn": [
      "1. Determine maximum kinetic energy: $KE_{\\max} = h(\\nu - \\nu_c) = (6.625 \\times 10^{-34})(1.2 \\times 10^{15} - 0.8 \\times 10^{15}) = (6.625 \\times 10^{-34})(4.0 \\times 10^{14}) = 2.65 \\times 10^{-19}\\text{ J}$.",
      "2. Relate kinetic energy to velocity: $KE_{\\max} = \\frac{1}{2} m_e v_{\\max}^2 \\implies v_{\\max} = \\sqrt{\\frac{2 KE_{\\max}}{m_e}}$.",
      "3. Calculate: $v_{\\max} = \\sqrt{\\frac{2(2.65 \\times 10^{-19})}{9.1 \\times 10^{-31}}} = \\sqrt{5.824 \\times 10^{11}} \\approx 7.632 \\times 10^5\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. طاقة الحركة العظمى: $KE_{\\max} = h(\\nu - \\nu_c) = (6.625 \\times 10^{-34})(1.2 \\times 10^{15} - 0.8 \\times 10^{15}) = 2.65 \\times 10^{-19}\\text{ جول}$.",
      "٢. علاقة السرعة بطاقة الحركة: $v_{\\max} = \\sqrt{\\frac{2 KE_{\\max}}{m_e}}$.",
      "٣. التعويض والحساب: $v_{\\max} = \\sqrt{\\frac{2 \\times 2.65 \\times 10^{-19}}{9.1 \\times 10^{-31}}} \\approx 7.632 \\times 10^5\\text{ م/ث}$."
    ],
    "teacherTipEn": "Notice that maximum speed is proportional to the square root of the excess frequency above threshold: v_max ∝ √(ν - ν_c).",
    "teacherTipAr": "لاحظ أن السرعة القصوى تتناسب طردياً مع الجذر التربيعي لفرق التردد عن التردد الحرج: v_max ∝ √(ν - ν_c)."
  },
  {
    "id": "egbac_phys_ch1_se_05",
    "titleEn": "Compton Scattering Wavelength Shift at 60 Degrees",
    "titleAr": "إزاحة كومتون في الطول الموجي عند زاوية ٦٠ درجة",
    "difficulty": "easy",
    "questionEn": "An X-ray photon collides with a stationary free electron and is scattered at an angle of $\\theta = 60^\\circ$ relative to its original trajectory. Calculate the shift in the photon's wavelength $\\Delta\\lambda$. (Given Compton wavelength $\\lambda_C = \\frac{h}{m_e c} \\approx 2.426\\text{ pm}$).",
    "questionAr": "اصطدم فوتون أشعة سينية بإلكترون حر ساكن وتشتت بزاوية $\\theta = 60^\\circ$ بالنسبة لاتجاه حركته الأصلي. احسب مقدار الزيادة في الطول الموجي للفوتون $\\Delta\\lambda$. (بمعلومية طول موجة كومتون $\\lambda_C = \\frac{h}{m_e c} \\approx 2.426\\text{ بيكومتر}$).",
    "optionsEn": [
      "$1.213\\text{ pm}$",
      "$2.426\\text{ pm}$",
      "$0.607\\text{ pm}$",
      "$4.852\\text{ pm}$"
    ],
    "optionsAr": [
      "$1.213\\text{ بيكومتر}$",
      "$2.426\\text{ بيكومتر}$",
      "$0.607\\text{ بيكومتر}$",
      "$4.852\\text{ بيكومتر}$"
    ],
    "correctAnswer": "$1.213\\text{ pm}$",
    "correctIndex": 0,
    "hintEn": "Use Compton's formula: Δλ = (h / m_e c) * (1 - cos θ) with cos(60°) = 0.5.",
    "hintAr": "طبق معادلة كومتون: Δλ = (h / m_e c) * (1 - cos θ) مع العلم أن جتا(٦٠°) = ٠٫٥.",
    "stepByStepSolutionEn": [
      "1. State the Compton scattering formula: $\\Delta\\lambda = \\lambda' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$.",
      "2. For $\\theta = 60^\\circ$, we have $\\cos 60^\\circ = 0.5$, so $(1 - \\cos 60^\\circ) = 0.5$.",
      "3. Calculate the shift: $\\Delta\\lambda = 2.426\\text{ pm} \\times 0.5 = 1.213\\text{ pm}$ ($1.213 \\times 10^{-12}\\text{ m}$)."
    ],
    "stepByStepSolutionAr": [
      "١. قانون كومتون للتشتت: $\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$.",
      "٢. بما أن $\\theta = 60^\\circ$، فإن $\\cos 60^\\circ = 0.5$، وبالتالي $(1 - \\cos 60^\\circ) = 0.5$.",
      "٣. حساب الإزاحة: $\\Delta\\lambda = 2.426 \\times 0.5 = 1.213\\text{ بيكومتر}$ ($1.213 \\times 10^{-12}\\text{ م}$)."
    ],
    "teacherTipEn": "The Compton wavelength shift depends purely on the scattering angle θ and is independent of the incident photon's initial wavelength.",
    "teacherTipAr": "إزاحة كومتون تعتمد حصرياً على زاوية التشتت θ ولا تعتمد على الطول الموجي للفوتون الساقط."
  },
  {
    "id": "egbac_phys_ch1_se_06",
    "titleEn": "Kinetic Energy Imparted to Recoil Electron in Compton Collision",
    "titleAr": "طاقة الحركة المكتسبة للإلكترون المرتد في تصادم كومتون",
    "difficulty": "hots",
    "questionEn": "An incident photon has initial energy $E = 100\\text{ keV}$. After scattering off a stationary electron at $\\theta = 90^\\circ$, the scattered photon has energy $E' = 83.6\\text{ keV}$. By applying the principle of conservation of energy, determine the kinetic energy acquired by the recoil electron in keV and Joules.",
    "questionAr": "فوتون ساقط طاقته الابتدائية $E = 100\\text{ كيلو إلكترون فولت}$. بعد تشتته عن إلكترون حر ساكن بزاوية $\\theta = 90^\\circ$، أصبحت طاقة الفوتون المتشتت $E' = 83.6\\text{ كيلو إلكترون فولت}$. بتطبيق مبدأ بقاء الطاقة، احسب طاقة الحركة المكتسبة للإلكترون المرتد بوحدة keV ووحدة الجول.",
    "optionsEn": [
      "$24.2\\text{ keV} \\; (3.872 \\times 10^{-15}\\text{ J})$",
      "$16.4\\text{ keV} \\; (2.624 \\times 10^{-15}\\text{ J})$",
      "$83.6\\text{ keV} \\; (1.338 \\times 10^{-14}\\text{ J})$",
      "$116.4\\text{ keV} \\; (1.862 \\times 10^{-14}\\text{ J})$"
    ],
    "optionsAr": [
      "$24.2\\text{ كيلو إلكترون فولت} \\; (3.872 \\times 10^{-15}\\text{ جول})$",
      "$16.4\\text{ كيلو إلكترون فولت} \\; (2.624 \\times 10^{-15}\\text{ جول})$",
      "$83.6\\text{ كيلو إلكترون فولت} \\; (1.338 \\times 10^{-14}\\text{ جول})$",
      "$116.4\\text{ كيلو إلكترون فولت} \\; (1.862 \\times 10^{-14}\\text{ جول})$"
    ],
    "correctAnswer": "$16.4\\text{ keV} \\; (2.624 \\times 10^{-15}\\text{ J})$",
    "correctIndex": 1,
    "hintEn": "Total energy is conserved during Compton collision: E_initial = E_scattered + KE_electron.",
    "hintAr": "الطاقة الكلية محفوظة في تصادم كومتون: طاقة الفوتون الساقط = طاقة الفوتون المتشتت + طاقة حركة الإلكترون.",
    "stepByStepSolutionEn": [
      "1. State conservation of energy: $E = E' + KE_e \\implies KE_e = E - E'$.",
      "2. Calculate kinetic energy in keV: $KE_e = 100\\text{ keV} - 83.6\\text{ keV} = 16.4\\text{ keV}$.",
      "3. Convert to Joules: $KE_e = 16.4 \\times 10^3\\text{ eV} \\times (1.6 \\times 10^{-19}\\text{ J/eV}) = 2.624 \\times 10^{-15}\\text{ J}$."
    ],
    "stepByStepSolutionAr": [
      "١. مبدأ بقاء الطاقة: $E = E' + KE_e \\implies KE_e = E - E'$.",
      "٢. حساب طاقة الحركة بوحدة keV: $KE_e = 100 - 83.6 = 16.4\\text{ كيلو إلكترون فولت}$.",
      "٣. التحويل إلى وحدة الجول: $KE_e = 16.4 \\times 10^3 \\times (1.6 \\times 10^{-19}) = 2.624 \\times 10^{-15}\\text{ جول}$."
    ],
    "teacherTipEn": "The Compton effect conclusively demonstrates that photons possess localized mechanical energy and momentum, acting as quantum particles.",
    "teacherTipAr": "تثبت ظاهرة كومتون بصورة قاطعة أن الفوتونات تمتلك طاقة وكمية حركة ميكانيكية وتتصرف كجسيمات كمية متصادمة."
  },
  {
    "id": "egbac_phys_ch1_se_07",
    "titleEn": "Linear Momentum and Relativistic Mass of a Gamma-Ray Photon",
    "titleAr": "كمية التحرك الخطي والكتلة النسبية المكافئة لفوتون أشعة غاما",
    "difficulty": "medium",
    "questionEn": "A gamma-ray photon has an energy of $E = 1.02\\text{ MeV}$. Given $c = 3.0 \\times 10^8\\text{ m/s}$ and $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$, calculate the linear momentum $p$ of the photon.",
    "questionAr": "فوتون أشعة غاما طاقته $E = 1.02\\text{ مليون إلكترون فولت}$. بمعلومية $c = 3.0 \\times 10^8\\text{ م/ث}$ و $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ جول}$، احسب كمية التحرك الخطي $p$ للفوتون.",
    "optionsEn": [
      "$2.72 \\times 10^{-22}\\text{ kg}\\cdot\\text{m/s}$",
      "$1.63 \\times 10^{-29}\\text{ kg}\\cdot\\text{m/s}$",
      "$5.44 \\times 10^{-22}\\text{ kg}\\cdot\\text{m/s}$",
      "$8.16 \\times 10^{-22}\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "optionsAr": [
      "$2.72 \\times 10^{-22}\\text{ كجم}\\cdot\\text{م/ث}$",
      "$1.63 \\times 10^{-29}\\text{ كجم}\\cdot\\text{م/ث}$",
      "$5.44 \\times 10^{-22}\\text{ كجم}\\cdot\\text{م/ث}$",
      "$8.16 \\times 10^{-22}\\text{ كجم}\\cdot\\text{م/ث}$"
    ],
    "correctAnswer": "$5.44 \\times 10^{-22}\\text{ kg}\\cdot\\text{m/s}$",
    "correctIndex": 2,
    "hintEn": "Use Einstein's photon momentum equation: p = E / c, converting MeV to Joules first.",
    "hintAr": "استخدم معادلة أينشتاين لكمية تحرك الفوتون: p = E / c مع تحويل الطاقة من MeV إلى جول أولاً.",
    "stepByStepSolutionEn": [
      "1. Convert photon energy to Joules: $E = 1.02 \\times 10^6\\text{ eV} \\times (1.6 \\times 10^{-19}\\text{ J/eV}) = 1.632 \\times 10^{-13}\\text{ J}$.",
      "2. Relate energy to linear momentum: $p = \\frac{E}{c} = \\frac{1.632 \\times 10^{-13}\\text{ J}}{3.0 \\times 10^8\\text{ m/s}} = 5.44 \\times 10^{-22}\\text{ kg}\\cdot\\text{m/s}$.",
      "3. Thus, despite having zero rest mass, the moving photon possesses a linear momentum of $5.44 \\times 10^{-22}\\text{ kg}\\cdot\\text{m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. تحويل طاقة الفوتون إلى جول: $E = 1.02 \\times 10^6 \\times 1.6 \\times 10^{-19} = 1.632 \\times 10^{-13}\\text{ جول}$.",
      "٢. حساب كمية التحرك الخطي: $p = \\frac{E}{c} = \\frac{1.632 \\times 10^{-13}}{3.0 \\times 10^8} = 5.44 \\times 10^{-22}\\text{ كجم}\\cdot\\text{م/ث}$.",
      "٣. رغم أن كتلة سكون الفوتون تساوي صفراً، إلا أنه يحمل كمية تحرك خطي قدرها $5.44 \\times 10^{-22}\\text{ كجم}\\cdot\\text{م/ث}$."
    ],
    "teacherTipEn": "Remember: A photon has no rest mass (m_0 = 0), but while moving at speed c it carries momentum p = h/λ = E/c and equivalent relativistic mass m = E/c^2.",
    "teacherTipAr": "تذكر دائماً: الفوتون ليس له كتلة سكون (m_0 = 0)، ولكنه أثناء حركته بسرعة الضوء c يمتلك كمية تحرك p = E/c وكتلة مكافئة m = E/c^2."
  },
  {
    "id": "egbac_phys_ch1_se_08",
    "titleEn": "Radiation Pressure & Mechanical Force of a Reflected Laser Beam",
    "titleAr": "الضغط الإشعاعي والقوة الميكانيكية لشعاع ليزر منعكس",
    "difficulty": "hots",
    "questionEn": "A continuous high-power laser beam of power $P = 60\\text{ W}$ falls normally onto a perfectly reflecting flat mirror surface ($R = 1.0$). Given $c = 3.0 \\times 10^8\\text{ m/s}$, calculate the total mechanical force $F$ exerted by the photon beam on the mirror.",
    "questionAr": "سقط شعاع ليزر مستمر عالي القدرة قدرته $P = 60\\text{ واط}$ عمودياً على مرآة مستوية تامة الانعكاس ($R = 1.0$). بمعلومية $c = 3.0 \\times 10^8\\text{ م/ث}$، احسب القوة الميكانيكية الكلية $F$ التي يؤثر بها سيل الفوتونات على سطح المرآة.",
    "optionsEn": [
      "$2.0 \\times 10^{-7}\\text{ N}$",
      "$1.2 \\times 10^{-6}\\text{ N}$",
      "$6.0 \\times 10^{-8}\\text{ N}$",
      "$4.0 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$2.0 \\times 10^{-7}\\text{ نيوتن}$",
      "$1.2 \\times 10^{-6}\\text{ نيوتن}$",
      "$6.0 \\times 10^{-8}\\text{ نيوتن}$",
      "$4.0 \\times 10^{-7}\\text{ نيوتن}$"
    ],
    "correctAnswer": "$4.0 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 3,
    "hintEn": "For a completely reflected beam, the change in momentum per photon is 2p, so total force F = 2P / c.",
    "hintAr": "في حالة الانعكاس التام، يتغير اتجاه كمية التحرك بمقدار 2p لكل فوتون، وبالتالي فإن القوة الكلية F = 2P / c.",
    "stepByStepSolutionEn": [
      "1. Each reflected photon undergoes momentum change $\\Delta p = p - (-p) = 2p = \\frac{2E}{c}$.",
      "2. Total force is rate of momentum transfer: $F = \\frac{\\Delta p_{\\text{total}}}{\\Delta t} = \\frac{2}{c} \\frac{\\Delta E_{\\text{total}}}{\\Delta t} = \\frac{2P}{c}$.",
      "3. Substitute numbers: $F = \\frac{2 \\times 60\\text{ W}}{3.0 \\times 10^8\\text{ m/s}} = 4.0 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار التغير في كمية تحرك كل فوتون منعكس: $\\Delta p = 2p = \\frac{2E}{c}$.",
      "٢. القوة الميكانيكية تساوي المعدل الزمني للتغير في كمية التحرك: $F = \\frac{2P}{c}$.",
      "٣. الحساب: $F = \\frac{2 \\times 60}{3.0 \\times 10^8} = 4.0 \\times 10^{-7}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "If the surface were totally absorbing, the force would be halved: F = P / c = 2.0 * 10^-7 N.",
    "teacherTipAr": "لو كان السطح تام الامتصاص لكانت القوة نصف هذه القيمة: F = P / c = 2.0 * 10^-7 نيوتن."
  },
  {
    "id": "egbac_phys_ch1_se_09",
    "titleEn": "De Broglie Wavelength of an Accelerated Electron Beam",
    "titleAr": "الطول الموجي لدي برولي لحزمة إلكترونات معجلة",
    "difficulty": "medium",
    "questionEn": "An electron is accelerated from rest through an electric potential difference of $V = 150\\text{ V}$. Given $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, and $e = 1.6 \\times 10^{-19}\\text{ C}$, determine its de Broglie matter wavelength $\\lambda$.",
    "questionAr": "عُجل إلكترون من السكون عبر فرق جهد كهربائي $V = 150\\text{ فولت}$. بمعلومية $h = 6.625 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$ و $m_e = 9.1 \\times 10^{-31}\\text{ كجم}$ و $e = 1.6 \\times 10^{-19}\\text{ كولوم}$، احسب الطول الموجي المصاحب لحركته (موجة دي برولي) $\\lambda$.",
    "optionsEn": [
      "$0.100\\text{ nm} \\; (1.00 \\times 10^{-10}\\text{ m})$",
      "$0.050\\text{ nm} \\; (5.00 \\times 10^{-11}\\text{ m})$",
      "$0.200\\text{ nm} \\; (2.00 \\times 10^{-10}\\text{ m})$",
      "$1.227\\text{ nm} \\; (1.23 \\times 10^{-9}\\text{ m})$"
    ],
    "optionsAr": [
      "$0.100\\text{ نانومتر} \\; (1.00 \\times 10^{-10}\\text{ م})$",
      "$0.050\\text{ نانومتر} \\; (5.00 \\times 10^{-11}\\text{ م})$",
      "$0.200\\text{ نانومتر} \\; (2.00 \\times 10^{-10}\\text{ م})$",
      "$1.227\\text{ نانومتر} \\; (1.23 \\times 10^{-9}\\text{ م})$"
    ],
    "correctAnswer": "$0.100\\text{ nm} \\; (1.00 \\times 10^{-10}\\text{ m})$",
    "correctIndex": 0,
    "hintEn": "Kinetic energy is KE = eV = p^2 / (2m_e), so momentum p = √(2m_e eV) and λ = h / p.",
    "hintAr": "طاقة الحركة KE = eV = p^2 / (2m_e)، وكمية التحرك p = √(2m_e eV)، وطول دي برولي λ = h / p.",
    "stepByStepSolutionEn": [
      "1. Relate accelerating potential to electron momentum: $p = \\sqrt{2 m_e e V} = \\sqrt{2(9.1 \\times 10^{-31})(1.6 \\times 10^{-19})(150)} = \\sqrt{4.368 \\times 10^{-47}} \\approx 6.609 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$.",
      "2. Apply de Broglie's formula: $\\lambda = \\frac{h}{p} = \\frac{6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}{6.609 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}} \\approx 1.002 \\times 10^{-10}\\text{ m} = 0.100\\text{ nm}$.",
      "3. Note the standard shortcut: $\\lambda(\\text{nm}) \\approx \\sqrt{\\frac{1.5}{V}} = \\sqrt{\\frac{1.5}{150}} = \\sqrt{0.01} = 0.100\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب كمية التحرك من فرق الجهد المعجل: $p = \\sqrt{2 m_e e V} = \\sqrt{2 \\times 9.1 \\times 10^{-31} \\times 1.6 \\times 10^{-19} \\times 150} \\approx 6.609 \\times 10^{-24}\\text{ كجم}\\cdot\\text{م/ث}$.",
      "٢. تطبيق علاقة دي برولي: $\\lambda = \\frac{h}{p} = \\frac{6.625 \\times 10^{-34}}{6.609 \\times 10^{-24}} \\approx 1.002 \\times 10^{-10}\\text{ م} = 0.100\\text{ نانومتر}$.",
      "٣. صيغة التقريب السريعة للإلكترون: $\\lambda(\\text{nm}) \\approx \\sqrt{\\frac{1.5}{V}} = \\sqrt{\\frac{1.5}{150}} = 0.100\\text{ نانومتر}$."
    ],
    "teacherTipEn": "This wavelength (0.100 nm = 1.0 Å) is on the order of atomic spacing in crystal lattices, allowing electron diffraction.",
    "teacherTipAr": "هذا الطول الموجي (0.1 نانومتر = 1 أنجستروم) يقارب المسافات البينية بين ذرات البلورات، مما يسمح بحدوث حيود للإلكترونات."
  },
  {
    "id": "egbac_phys_ch1_se_10",
    "titleEn": "Resolving Power Limit of Transmission Electron Microscope",
    "titleAr": "حد القدرة التحليلية للمجهر الإلكتروني النافذ",
    "difficulty": "hots",
    "questionEn": "An optical microscope uses green light ($\\lambda_\\text{opt} = 550\\text{ nm}$) and cannot resolve a virus of diameter $d = 2.0\\text{ nm}$. An electron microscope accelerates electrons through a potential difference $V$ to achieve a de Broglie wavelength equal to $\\lambda = 0.05\\text{ nm}$. Using $\\lambda = \\frac{h}{\\sqrt{2 m_e e V}}$, find the required accelerating voltage $V$.",
    "questionAr": "يستخدم مجهر ضوئي ضوءاً أخضر ($\\lambda_\\text{opt} = 550\\text{ نانومتر}$) ويعجز عن رؤية فيروس قطره $d = 2.0\\text{ نانومتر}$. يعجل مجهر إلكتروني إلكتروناته عبر فرق جهد $V$ لتحقيق طول موجي لدي برولي قدره $\\lambda = 0.05\\text{ نانومتر}$. باستخدام $\\lambda = \\frac{h}{\\sqrt{2 m_e e V}}$، احسب فرق الجهد المعجل المطلوب $V$.",
    "optionsEn": [
      "$150\\text{ V}$",
      "$603\\text{ V}$",
      "$300\\text{ V}$",
      "$1200\\text{ V}$"
    ],
    "optionsAr": [
      "$150\\text{ فولت}$",
      "$603\\text{ فولت}$",
      "$300\\text{ فولت}$",
      "$1200\\text{ فولت}$"
    ],
    "correctAnswer": "$603\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "Rearrange the de Broglie voltage formula: V = h^2 / (2 * m_e * e * lambda^2) or use V = 1.5 / lambda(nm)^2.",
    "hintAr": "أعد ترتيب معادلة فرق الجهد المعجل: V = h^2 / (2 * m_e * e * lambda^2) أو استخدم صيغة التقريب V = 1.5 / lambda(nm)^2.",
    "stepByStepSolutionEn": [
      "1. Rearrange de Broglie relation for accelerating voltage: $V = \\frac{h^2}{2 m_e e \\lambda^2}$.",
      "2. Substitute constants with $\\lambda = 0.05 \\times 10^{-9}\\text{ m}$: $V = \\frac{(6.625 \\times 10^{-34})^2}{2(9.1 \\times 10^{-31})(1.6 \\times 10^{-19})(0.05 \\times 10^{-9})^2}$.",
      "3. Calculate numerator: $4.389 \\times 10^{-67}$; denominator: $2(9.1 \\times 10^{-31})(1.6 \\times 10^{-19})(2.5 \\times 10^{-21}) = 7.28 \\times 10^{-70}$.",
      "4. Compute voltage: $V = \\frac{4.389 \\times 10^{-67}}{7.28 \\times 10^{-70}} \\approx 602.9\\text{ V} \\approx 603\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "١. إعادة ترتيب معادلة دي برولي لفرق الجهد المعجل: $V = \\frac{h^2}{2 m_e e \\lambda^2}$.",
      "٢. التعويض بالثوابت مع $\\lambda = 0.05 \\times 10^{-9}\\text{ م}$: $V = \\frac{(6.625 \\times 10^{-34})^2}{2 \\times 9.1 \\times 10^{-31} \\times 1.6 \\times 10^{-19} \\times (0.05 \\times 10^{-9})^2}$.",
      "٣. حساب البسط: $4.389 \\times 10^{-67}$، والمقام: $7.28 \\times 10^{-70}$.",
      "٤. إذن فرق الجهد المطلوب: $V \\approx 603\\text{ فولت}$."
    ],
    "teacherTipEn": "Condition for resolution: The wavelength of the imaging probe must be smaller than the dimensions of the object being resolved (λ < d).",
    "teacherTipAr": "شرط الرؤية والتحليل المجهري: يجب أن يكون الطول الموجي للشعاع المستخدم أصغر من أبعاد الجسم المراد تفحصه (λ < d)."
  }
];

export const egBacPhysCh1Exercises: SolvedProblem[] = [
  {
    "id": "egbac_phys_ch1_ex_01",
    "titleEn": "Threshold Frequency and Critical Wavelength of Potassium",
    "titleAr": "التردد الحرج والطول الموجي الحرج لفلز البوتاسيوم",
    "difficulty": "easy",
    "questionEn": "The work function of potassium metal is $\\Phi = 2.25\\text{ eV}$. Given $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3.0 \\times 10^8\\text{ m/s}$, calculate the threshold frequency $\\nu_c$ of potassium.",
    "questionAr": "دالة الشغل لفلز البوتاسيوم تساوي $\\Phi = 2.25\\text{ إلكترون فولت}$. بمعلومية $h = 6.625 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$ و $c = 3.0 \\times 10^8\\text{ م/ث}$، احسب التردد الحرج $\\nu_c$ للبوتاسيوم.",
    "optionsEn": [
      "$3.60 \\times 10^{14}\\text{ Hz}$",
      "$7.25 \\times 10^{14}\\text{ Hz}$",
      "$5.43 \\times 10^{14}\\text{ Hz}$",
      "$9.10 \\times 10^{14}\\text{ Hz}$"
    ],
    "optionsAr": [
      "$3.60 \\times 10^{14}\\text{ هرتز}$",
      "$7.25 \\times 10^{14}\\text{ هرتز}$",
      "$5.43 \\times 10^{14}\\text{ هرتز}$",
      "$9.10 \\times 10^{14}\\text{ هرتز}$"
    ],
    "correctAnswer": "$5.43 \\times 10^{14}\\text{ Hz}$",
    "correctIndex": 2,
    "hintEn": "Convert Phi to Joules by multiplying by 1.6 * 10^-19, then use nu_c = Phi / h.",
    "hintAr": "حول دالة الشغل إلى جول بالضرب في 1.6 * 10^-19، ثم طبق القانون nu_c = Phi / h.",
    "stepByStepSolutionEn": [
      "1. Convert work function to Joules: $\\Phi = 2.25 \\times (1.6 \\times 10^{-19}\\text{ J}) = 3.60 \\times 10^{-19}\\text{ J}$.",
      "2. Apply threshold definition: $\\nu_c = \\frac{\\Phi}{h} = \\frac{3.60 \\times 10^{-19}\\text{ J}}{6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}} \\approx 5.434 \\times 10^{14}\\text{ Hz}$.",
      "3. Any incident light with frequency $\\nu < 5.43 \\times 10^{14}\\text{ Hz}$ cannot liberate photoelectrons."
    ],
    "stepByStepSolutionAr": [
      "١. تحويل دالة الشغل إلى جول: $\\Phi = 2.25 \\times 1.6 \\times 10^{-19} = 3.60 \\times 10^{-19}\\text{ جول}$.",
      "٢. التردد الحرج: $\\nu_c = \\frac{\\Phi}{h} = \\frac{3.60 \\times 10^{-19}}{6.625 \\times 10^{-34}} \\approx 5.434 \\times 10^{14}\\text{ هرتز}$.",
      "٣. أي ضوء تردده أقل من هذا الحد يعجز تماماً عن تحرير إلكترونات ضوئية."
    ],
    "teacherTipEn": "The threshold frequency depends solely on the nature of the cathode metal and its lattice binding.",
    "teacherTipAr": "التردد الحرج خاصية مميزة لنوع مادة الفلز وتماسك إلكتروناته السطحية فقط."
  },
  {
    "id": "egbac_phys_ch1_ex_02",
    "titleEn": "Photoelectric Stopping Potential Under Doubled Frequency",
    "titleAr": "جهد الإيقاف الكهروضوئي عند مضاعفة تردد الضوء الساقط",
    "difficulty": "medium",
    "questionEn": "When light of frequency $\\nu_1 = 2\\nu_c$ illuminates a photosensitive plate, the stopping potential is $V_1$. When the frequency is increased to $\\nu_2 = 4\\nu_c$, what is the new stopping potential $V_2$ in terms of $V_1$?",
    "questionAr": "عند سقوط ضوء تردده $\\nu_1 = 2\\nu_c$ على سطح فلز، كان جهد الإيقاف $V_1$. فإذا زاد تردد الضوء الساقط إلى $\\nu_2 = 4\\nu_c$، فما قيمة جهد الإيقاف الجديد $V_2$ بدلالة $V_1$؟",
    "optionsEn": [
      "$V_2 = 2 V_1$",
      "$V_2 = 4 V_1$",
      "$V_2 = 1.5 V_1$",
      "$V_2 = 3 V_1$"
    ],
    "optionsAr": [
      "$V_2 = 2 V_1$",
      "$V_2 = 4 V_1$",
      "$V_2 = 1.5 V_1$",
      "$V_2 = 3 V_1$"
    ],
    "correctAnswer": "$V_2 = 3 V_1$",
    "correctIndex": 3,
    "hintEn": "Write Einstein's equation: eV = h nu - h nu_c = h(nu - nu_c) for both cases.",
    "hintAr": "اكتب معادلة أينشتاين: eV = h nu - h nu_c = h(nu - nu_c) لكلا الترددين.",
    "stepByStepSolutionEn": [
      "1. For $\\nu_1 = 2\\nu_c$: $e V_1 = h(2\\nu_c - \\nu_c) = h\\nu_c \\implies V_1 = \\frac{h\\nu_c}{e}$.",
      "2. For $\\nu_2 = 4\\nu_c$: $e V_2 = h(4\\nu_c - \\nu_c) = 3 h\\nu_c \\implies V_2 = \\frac{3 h\\nu_c}{e}$.",
      "3. Compare the two: $V_2 = 3 V_1$."
    ],
    "stepByStepSolutionAr": [
      "١. للحالة الأولى $\\nu_1 = 2\\nu_c$: $e V_1 = h(2\\nu_c - \\nu_c) = h\\nu_c \\implies V_1 = \\frac{h\\nu_c}{e}$.",
      "٢. للحالة الثانية $\\nu_2 = 4\\nu_c$: $e V_2 = h(4\\nu_c - \\nu_c) = 3 h\\nu_c \\implies V_2 = \\frac{3 h\\nu_c}{e}$.",
      "٣. بالمقارنة: $V_2 = 3 V_1$."
    ],
    "teacherTipEn": "Doubling the frequency does not simply double the stopping potential because of the constant subtractive work function term!",
    "teacherTipAr": "مضاعفة تردد الضوء لا تضاعف جهد الإيقاف بصورة مباشرة لوجود حد دالة الشغل المطروح!"
  },
  {
    "id": "egbac_phys_ch1_ex_03",
    "titleEn": "Photocurrent vs Incident Light Intensity",
    "titleAr": "شدة التيار الكهروضوئي وعلاقتها بشدة الإشعاع الساقط",
    "difficulty": "easy",
    "questionEn": "A photocell is illuminated with monochromatic light of frequency $\\nu > \\nu_c$. If the intensity of the light source is doubled while keeping its frequency constant, what happens to the saturation photocurrent $I_{\\text{sat}}$ and the maximum kinetic energy $KE_{\\max}$?",
    "questionAr": "أضيئت خلية كهروضوئية بضوء أحادي اللون ذي تردد $\\nu > \\nu_c$. إذا تضاعفت شدة مصدر الضوء مع ثبوت تردده، فماذا يحدث لشدة تيار التشبع الكهروضوئي $I_{\\text{sat}}$ وطاقة الحركة العظمى $KE_{\\max}$؟",
    "optionsEn": [
      "$I_{\\text{sat}}$ doubles, while $KE_{\\max}$ remains unchanged.",
      "Both $I_{\\text{sat}}$ and $KE_{\\max}$ double.",
      "$KE_{\\max}$ doubles, while $I_{\\text{sat}}$ remains unchanged.",
      "$I_{\\text{sat}}$ quadruples, while $KE_{\\max}$ halves."
    ],
    "optionsAr": [
      "تتضاعف شدة التيار $I_{\\text{sat}}$، بينما تظل $KE_{\\max}$ ثابتة دون تغيير.",
      "تتضاعف كل من شدة التيار $I_{\\text{sat}}$ وطاقة الحركة العظمى $KE_{\\max}$.",
      "تتضاعف طاقة الحركة العظمى $KE_{\\max}$، بينما تظل شدة التيار ثابتة.",
      "تزداد شدة التيار إلى أربعة أمثالها، بينما تقل طاقة الحركة إلى النصف."
    ],
    "correctAnswer": "$I_{\\text{sat}}$ doubles, while $KE_{\\max}$ remains unchanged.",
    "correctIndex": 0,
    "hintEn": "Intensity is the rate of photon arrival (photons/s), which dictates electron emission rate, not individual photon energy.",
    "hintAr": "شدة الضوء تمثل عدد الفوتونات الساقطة في الثانية والتي تحدد معدل انبعاث الإلكترونات، ولا تغير طاقة الفوتون الفردي.",
    "stepByStepSolutionEn": [
      "1. Radiation intensity represents the number of photons striking unit area per second ($N/t$).",
      "2. Doubling intensity doubles the number of incident photons per second, doubling the number of ejected photoelectrons ($I_{\\text{sat}} \\propto \\text{Intensity}$).",
      "3. The maximum kinetic energy $KE_{\\max} = h\\nu - \\Phi$ depends strictly on frequency $\\nu$, which is unchanged."
    ],
    "stepByStepSolutionAr": [
      "١. شدة الإشعاع تعبر عن عدد الفوتونات الساقطة في وحدة المساحة في الثانية.",
      "٢. مضاعفة الشدة تعني مضاعفة عدد الفوتونات الساقطة، مما يضاعف عدد الإلكترونات المحررة وتيار التشبع.",
      "٣. طاقة الحركة العظمى $KE_{\\max} = h\\nu - \\Phi$ تعتمد حصرياً على التردد وهو ثابت."
    ],
    "teacherTipEn": "This experimental independence of KE_max from intensity was the primary evidence disproving classical wave theory.",
    "teacherTipAr": "كان ثبوت طاقة الحركة مع زيادة الشدة هو الدليل التجريبي الحاسم الذي أسقط النظرية الموجية الكلاسيكية."
  },
  {
    "id": "egbac_phys_ch1_ex_04",
    "titleEn": "Rate of Photon Emission from a Monochromatic Light Bulb",
    "titleAr": "معدل انبعاث الفوتونات في الثانية من مصباح ضوئي أحادي اللون",
    "difficulty": "medium",
    "questionEn": "A sodium vapor lamp radiates light at wavelength $\\lambda = 589\\text{ nm}$ with an optical output power of $P = 50\\text{ W}$. Given $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3.0 \\times 10^8\\text{ m/s}$, how many photons does the lamp emit per second?",
    "questionAr": "يشع مصباح صوديوم ضوءاً بطول موجي $\\lambda = 589\\text{ نانومتر}$ بقدرة إشعاعية ضوئية $P = 50\\text{ واط}$. بمعلومية $h = 6.625 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$ و $c = 3.0 \\times 10^8\\text{ م/ث}$، كم فوتوناً يبعثه المصباح في الثانية الواحدة؟",
    "optionsEn": [
      "$7.41 \\times 10^{19}\\text{ photons/s}$",
      "$1.48 \\times 10^{20}\\text{ photons/s}$",
      "$2.96 \\times 10^{20}\\text{ photons/s}$",
      "$3.37 \\times 10^{19}\\text{ photons/s}$"
    ],
    "optionsAr": [
      "$7.41 \\times 10^{19}\\text{ فوتون/ث}$",
      "$1.48 \\times 10^{20}\\text{ فوتون/ث}$",
      "$2.96 \\times 10^{20}\\text{ فوتون/ث}$",
      "$3.37 \\times 10^{19}\\text{ فوتون/ث}$"
    ],
    "correctAnswer": "$1.48 \\times 10^{20}\\text{ photons/s}$",
    "correctIndex": 1,
    "hintEn": "Calculate the energy of one photon E_ph = hc / lambda, then rate of emission is n = P / E_ph.",
    "hintAr": "احسب طاقة الفوتون الواحد E_ph = hc / lambda، ثم أوجد معدل الانبعاث n = P / E_ph.",
    "stepByStepSolutionEn": [
      "1. Energy of a single sodium photon: $E_{\\text{ph}} = \\frac{hc}{\\lambda} = \\frac{(6.625 \\times 10^{-34})(3.0 \\times 10^8)}{589 \\times 10^{-9}} \\approx 3.374 \\times 10^{-19}\\text{ J}$.",
      "2. Total power is $P = n \\cdot E_{\\text{ph}}$, where $n$ is photon count per second.",
      "3. Calculate emission rate: $n = \\frac{P}{E_{\\text{ph}}} = \\frac{50\\text{ W}}{3.374 \\times 10^{-19}\\text{ J}} \\approx 1.482 \\times 10^{20}\\text{ photons/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. طاقة فوتون الصوديوم الواحد: $E_{\\text{ph}} = \\frac{hc}{\\lambda} = \\frac{6.625 \\times 10^{-34} \\times 3.0 \\times 10^8}{589 \\times 10^{-9}} \\approx 3.374 \\times 10^{-19}\\text{ جول}$.",
      "٢. القدرة الكلية: $P = n \\cdot E_{\\text{ph}}$ حيث $n$ هو عدد الفوتونات المنبعثة في الثانية.",
      "٣. معدل الانبعاث: $n = \\frac{50}{3.374 \\times 10^{-19}} \\approx 1.482 \\times 10^{20}\\text{ فوتون/ث}$."
    ],
    "teacherTipEn": "Macroscopic light sources emit colossal numbers of photons every second, making light appear continuous in daily life.",
    "teacherTipAr": "تبث المصادر الضوئية أعداداً هائلة من الفوتونات في الثانية الواحدة، مما يجعل الضوء يبدو متصلاً في حياتنا اليومية."
  },
  {
    "id": "egbac_phys_ch1_ex_05",
    "titleEn": "Maximum Compton Backscattering Wavelength Shift",
    "titleAr": "أقصى إزاحة في الطول الموجي لظاهرة كومتون عند الارتداد العكسي",
    "difficulty": "easy",
    "questionEn": "In a Compton collision experiment, at what scattering angle $\\theta$ does the photon experience the maximum wavelength shift $\\Delta\\lambda_{\\max}$, and what is its numerical value?",
    "questionAr": "في تجربة كومتون للتصادم، عند أي زاوية تشتت $\\theta$ يكتسب الفوتون أقصى إزاحة في الطول الموجي $\\Delta\\lambda_{\\max}$، وما قيمتها العددية؟",
    "optionsEn": [
      "$\\theta = 90^\\circ, \\quad \\Delta\\lambda = \\frac{h}{m_e c} \\approx 2.426\\text{ pm}$",
      "$\\theta = 360^\\circ, \\quad \\Delta\\lambda = 0\\text{ pm}$",
      "$\\theta = 180^\\circ, \\quad \\Delta\\lambda_{\\max} = \\frac{2h}{m_e c} \\approx 4.852\\text{ pm}$",
      "$\\theta = 45^\\circ, \\quad \\Delta\\lambda = \\frac{h}{2 m_e c} \\approx 1.213\\text{ pm}$"
    ],
    "optionsAr": [
      "$\\theta = 90^\\circ, \\quad \\Delta\\lambda = \\frac{h}{m_e c} \\approx 2.426\\text{ بيكومتر}$",
      "$\\theta = 360^\\circ, \\quad \\Delta\\lambda = 0\\text{ بيكومتر}$",
      "$\\theta = 180^\\circ, \\quad \\Delta\\lambda_{\\max} = \\frac{2h}{m_e c} \\approx 4.852\\text{ بيكومتر}$",
      "$\\theta = 45^\\circ, \\quad \\Delta\\lambda = \\frac{h}{2 m_e c} \\approx 1.213\\text{ بيكومتر}$"
    ],
    "correctAnswer": "$\\theta = 180^\\circ, \\quad \\Delta\\lambda_{\\max} = \\frac{2h}{m_e c} \\approx 4.852\\text{ pm}$",
    "correctIndex": 2,
    "hintEn": "Formula: Δλ = (h / m_e c) * (1 - cos θ). Find when (1 - cos θ) is maximum.",
    "hintAr": "القانون: Δλ = (h / m_e c) * (1 - cos θ). ابحث عن القيمة التي تجعل المقدار (1 - cos θ) في أقصى حد له.",
    "stepByStepSolutionEn": [
      "1. The term $(1 - \\cos\\theta)$ reaches its theoretical maximum when $\\cos\\theta = -1$, which occurs at $\\theta = 180^\\circ$.",
      "2. At $\\theta = 180^\\circ$ (complete backscattering): $(1 - (-1)) = 2$.",
      "3. Therefore: $\\Delta\\lambda_{\\max} = \\frac{2h}{m_e c} = 2 \\times 2.426\\text{ pm} = 4.852\\text{ pm}$ ($4.852 \\times 10^{-12}\\text{ m}$)."
    ],
    "stepByStepSolutionAr": [
      "١. يصل المقدار $(1 - \\cos\\theta)$ إلى أقصى قيمة ممكنة عندما يكون $\\cos\\theta = -1$، وذلك عند $\\theta = 180^\\circ$.",
      "٢. عند الارتداد العكسي التام ($\\theta = 180^\\circ$): $(1 - (-1)) = 2$.",
      "٣. إذن: $\\Delta\\lambda_{\\max} = 2 \\times 2.426\\text{ بيكومتر} = 4.852\\text{ بيكومتر}$."
    ],
    "teacherTipEn": "Backscattering (θ = 180°) transfers the greatest possible momentum and kinetic energy to the target electron.",
    "teacherTipAr": "الارتداد العكسي (θ = 180°) ينقل أكبر طاقة حركة وكمية تحرك ممكنة للإلكترون المصدوم."
  },
  {
    "id": "egbac_phys_ch1_ex_06",
    "titleEn": "Fractional Energy Loss in Compton Scattering",
    "titleAr": "النسبة المئوية لفقد الطاقة في تشتت كومتون",
    "difficulty": "hots",
    "questionEn": "An incident X-ray photon with initial wavelength $\\lambda = 0.02426\\text{ nm}$ undergoes Compton scattering at $\\theta = 90^\\circ$. What percentage of its initial energy is lost during the collision?",
    "questionAr": "فوتون أشعة سينية ساقط طوله الموجي الابتدائي $\\lambda = 0.02426\\text{ نانومتر}$ تشتت بظاهرة كومتون بزاوية $\\theta = 90^\\circ$. ما النسبة المئوية التي يفقدها الفوتون من طاقته الابتدائية في هذا التصادم؟",
    "optionsEn": [
      "$10.0\\%$",
      "$5.00\\%$",
      "$16.67\\%$",
      "$9.09\\%$"
    ],
    "optionsAr": [
      "$10.0\\%$",
      "$5.00\\%$",
      "$16.67\\%$",
      "$9.09\\%$"
    ],
    "correctAnswer": "$9.09\\%$",
    "correctIndex": 3,
    "hintEn": "Find new wavelength λ' = λ + λ_C * (1 - cos 90°), then calculate fractional energy loss (E - E') / E = 1 - λ / λ'.",
    "hintAr": "أوجد الطول الموجي الجديد λ' = λ + λ_C * (1 - cos 90°)، ثم احسب نسبة الطاقة المفقودة (E - E') / E = 1 - λ / λ'.",
    "stepByStepSolutionEn": [
      "1. Given $\\lambda = 24.26\\text{ pm}$ and Compton wavelength $\\lambda_C = 2.426\\text{ pm}$.",
      "2. At $\\theta = 90^\\circ$, $\\Delta\\lambda = \\lambda_C(1 - \\cos 90^\\circ) = 2.426\\text{ pm}$.",
      "3. The scattered wavelength is $\\lambda' = \\lambda + \\Delta\\lambda = 24.26 + 2.426 = 26.686\\text{ pm}$.",
      "4. Energy fraction remaining: $\\frac{E'}{E} = \\frac{\\lambda}{\\lambda'} = \\frac{24.26}{26.686} \\approx 0.9091$ ($90.91\\%$).",
      "5. Percentage energy lost to electron: $(1 - 0.9091) \\times 100\\% \\approx 9.09\\%$."
    ],
    "stepByStepSolutionAr": [
      "١. الطول الموجي الساقط $\\lambda = 24.26\\text{ بيكومتر}$ وطول موجة كومتون $\\lambda_C = 2.426\\text{ بيكومتر}$.",
      "٢. عند $\\theta = 90^\\circ$: $\\Delta\\lambda = 2.426\\text{ بيكومتر}$.",
      "٣. الطول الموجي المتشتت: $\\lambda' = 24.26 + 2.426 = 26.686\\text{ بيكومتر}$.",
      "٤. النسبة المتبقية من الطاقة: $\\frac{E'}{E} = \\frac{\\lambda}{\\lambda'} = \\frac{24.26}{26.686} \\approx 0.9091$ ($90.91\\%$).",
      "٥. النسبة المئوية المفقودة: $(1 - 0.9091) \\times 100\\% \\approx 9.09\\%$."
    ],
    "teacherTipEn": "Notice that E ∝ 1/λ, so fractional energy remaining is simply λ / λ'.",
    "teacherTipAr": "لاحظ أن طاقة الفوتون تتناسب عكسياً مع طوله الموجي، ولذا فإن نسبة الطاقة المتبقية هي ببساطة λ / λ'."
  },
  {
    "id": "egbac_phys_ch1_ex_07",
    "titleEn": "De Broglie Wavelength of Thermal Neutrons",
    "titleAr": "الطول الموجي لدي برولي لنيوترونات حرارية",
    "difficulty": "medium",
    "questionEn": "Thermal neutrons inside a nuclear reactor core are in thermal equilibrium at temperature $T = 300\\text{ K}$. Given neutron mass $m_n = 1.675 \\times 10^{-27}\\text{ kg}$, Boltzmann constant $k_B = 1.38 \\times 10^{-23}\\text{ J/K}$, and average kinetic energy $KE = \\frac{3}{2} k_B T$, determine the average de Broglie wavelength of these thermal neutrons.",
    "questionAr": "نيوترونات حرارية داخل قلب مفاعل نووي في حالة اتزان حراري عند درجة حرارة $T = 300\\text{ كلفن}$. بمعلومية كتلة النيوترون $m_n = 1.675 \\times 10^{-27}\\text{ كجم}$، وثابت بولتزمان $k_B = 1.38 \\times 10^{-23}\\text{ جول/كلفن}$، ومتوسط طاقة الحركة $KE = \\frac{3}{2} k_B T$، احسب متوسط الطول الموجي لموجة دي برولي المصاحبة لهذه النيوترونات.",
    "optionsEn": [
      "$0.145\\text{ nm}$",
      "$0.025\\text{ nm}$",
      "$0.550\\text{ nm}$",
      "$1.250\\text{ nm}$"
    ],
    "optionsAr": [
      "$0.145\\text{ نانومتر}$",
      "$0.025\\text{ نانومتر}$",
      "$0.550\\text{ نانومتر}$",
      "$1.250\\text{ نانومتر}$"
    ],
    "correctAnswer": "$0.145\\text{ nm}$",
    "correctIndex": 0,
    "hintEn": "Calculate kinetic energy KE = 1.5 * k_B * T, then momentum p = √(2 * m_n * KE) and λ = h / p.",
    "hintAr": "احسب طاقة الحركة KE = 1.5 * k_B * T، ثم كمية التحرك p = √(2 * m_n * KE) وطول دي برولي λ = h / p.",
    "stepByStepSolutionEn": [
      "1. Kinetic energy of thermal neutron: $KE = \\frac{3}{2}(1.38 \\times 10^{-23})(300) = 6.21 \\times 10^{-21}\\text{ J}$.",
      "2. Momentum: $p = \\sqrt{2 m_n KE} = \\sqrt{2(1.675 \\times 10^{-27})(6.21 \\times 10^{-21})} = \\sqrt{2.080 \\times 10^{-47}} \\approx 4.561 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$.",
      "3. Matter wavelength: $\\lambda = \\frac{h}{p} = \\frac{6.625 \\times 10^{-34}}{4.561 \\times 10^{-24}} \\approx 1.453 \\times 10^{-10}\\text{ m} = 0.145\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "١. طاقة حركة النيوترون الحراري: $KE = 1.5 \\times 1.38 \\times 10^{-23} \\times 300 = 6.21 \\times 10^{-21}\\text{ جول}$.",
      "٢. كمية التحرك: $p = \\sqrt{2 m_n KE} = \\sqrt{2 \\times 1.675 \\times 10^{-27} \\times 6.21 \\times 10^{-21}} \\approx 4.561 \\times 10^{-24}\\text{ كجم}\\cdot\\text{م/ث}$.",
      "٣. طول موجة دي برولي: $\\lambda = \\frac{6.625 \\times 10^{-34}}{4.561 \\times 10^{-24}} \\approx 0.145\\text{ نانومتر}$."
    ],
    "teacherTipEn": "Because λ ≈ 0.145 nm matches atomic crystalline planes, thermal neutrons are widely used in neutron diffraction to probe crystal structures.",
    "teacherTipAr": "نظراً لأن الطول الموجي (0.145 نانومتر) يناظر المسافات الذرية البلورية، تُستخدم النيوترونات الحرارية في دراسة تراكيب البلورات بالحيود."
  },
  {
    "id": "egbac_phys_ch1_ex_08",
    "titleEn": "Ratio of De Broglie Wavelengths: Proton vs Alpha Particle with Equal KE",
    "titleAr": "نسبة طولي موجتي دي برولي لبروتون وجسيم ألفا لهما نفس طاقة الحركة",
    "difficulty": "medium",
    "questionEn": "A proton (mass $m_p$) and an alpha particle (mass $m_\\alpha = 4 m_p$) have identical kinetic energies ($KE_p = KE_\\alpha$). What is the ratio of their de Broglie matter wavelengths $\\frac{\\lambda_p}{\\lambda_\\alpha}$?",
    "questionAr": "بروتون (كتلته $m_p$) وجسيم ألفا (كتلته $m_\\alpha = 4 m_p$) يمتلكان نفس طاقة الحركة تماماً ($KE_p = KE_\\alpha$). ما النسبة بين طولي موجتي دي برولي لهما $\\frac{\\lambda_p}{\\lambda_\\alpha}$؟",
    "optionsEn": [
      "$1 : 2$",
      "$2 : 1$",
      "$4 : 1$",
      "$1 : 4$"
    ],
    "optionsAr": [
      "$1 : 2$",
      "$2 : 1$",
      "$4 : 1$",
      "$1 : 4$"
    ],
    "correctAnswer": "$2 : 1$",
    "correctIndex": 1,
    "hintEn": "Express wavelength in terms of mass and kinetic energy: λ = h / √(2 m KE). Ratio is √(m_alpha / m_p).",
    "hintAr": "عبر عن الطول الموجي بدلالة الكتلة وطاقة الحركة: λ = h / √(2 m KE). فتكون النسبة √(m_alpha / m_p).",
    "stepByStepSolutionEn": [
      "1. Formula for de Broglie wavelength: $\\lambda = \\frac{h}{\\sqrt{2 m KE}}$.",
      "2. Since $KE$ and $h$ are identical: $\\lambda \\propto \\frac{1}{\\sqrt{m}}$.",
      "3. Form the ratio: $\\frac{\\lambda_p}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha}{m_p}} = \\sqrt{\\frac{4 m_p}{m_p}} = \\sqrt{4} = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. علاقة طول موجة دي برولي بطاقة الحركة: $\\lambda = \\frac{h}{\\sqrt{2 m KE}}$.",
      "٢. بما أن طاقة الحركة متساوية: $\\lambda \\propto \\frac{1}{\\sqrt{m}}$.",
      "٣. إذن النسبة: $\\frac{\\lambda_p}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha}{m_p}} = \\sqrt{4} = 2$."
    ],
    "teacherTipEn": "Lighter particles have longer de Broglie wavelengths when comparing particles with the same kinetic energy.",
    "teacherTipAr": "الجسيمات الأخف وزناً تكون موجاتها المادية أطول عند ثبوت طاقة الحركة."
  },
  {
    "id": "egbac_phys_ch1_ex_09",
    "titleEn": "Heisenberg Uncertainty in Position of an Electron",
    "titleAr": "مبدأ عدم التأكد لهايزنبرج في تحديد موضع الإلكترون",
    "difficulty": "hots",
    "questionEn": "An electron moves at a speed of $v = 6.0 \\times 10^5\\text{ m/s}$ measured with an experimental uncertainty of $0.01\\%$. Given $m_e = 9.1 \\times 10^{-31}\\text{ kg}$ and $\\hbar = \\frac{h}{2\\pi} = 1.055 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, what is the minimum uncertainty in the electron's position $\\Delta x$ according to Heisenberg's relation $\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}$?",
    "questionAr": "يتحرك إلكترون بسرعة $v = 6.0 \\times 10^5\\text{ م/ث}$ تم قياسها بنسبة عدم تأكد تجريبية قدرها $0.01\\%$. بمعلومية $m_e = 9.1 \\times 10^{-31}\\text{ كجم}$ و $\\hbar = \\frac{h}{2\\pi} = 1.055 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$، ما أقل مقدار لعدم التأكد في تحديد موضع الإلكترون $\\Delta x$ طبقاً لمبدأ هايزنبرج $\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}$؟",
    "optionsEn": [
      "$0.0966\\text{ μm}$",
      "$9.66\\text{ μm}$",
      "$0.966\\text{ μm} \\; (9.66 \\times 10^{-7}\\text{ m})$",
      "$0.483\\text{ μm}$"
    ],
    "optionsAr": [
      "$0.0966\\text{ ميكرومتر}$",
      "$9.66\\text{ ميكرومتر}$",
      "$0.966\\text{ ميكرومتر} \\; (9.66 \\times 10^{-7}\\text{ م})$",
      "$0.483\\text{ ميكرومتر}$"
    ],
    "correctAnswer": "$0.966\\text{ μm} \\; (9.66 \\times 10^{-7}\\text{ m})$",
    "correctIndex": 2,
    "hintEn": "Find Δv = 0.0001 * v, then Δp = m_e * Δv, and Δx >= ħ / (2 * Δp).",
    "hintAr": "احسب Δv = 0.0001 * v، ثم Δp = m_e * Δv، وأخيراً Δx >= ħ / (2 * Δp).",
    "stepByStepSolutionEn": [
      "1. Calculate speed uncertainty: $\\Delta v = 6.0 \\times 10^5 \\times 10^{-4} = 60\\text{ m/s}$.",
      "2. Momentum uncertainty: $\\Delta p = m_e \\Delta v = (9.1 \\times 10^{-31})(60) = 5.46 \\times 10^{-29}\\text{ kg}\\cdot\\text{m/s}$.",
      "3. Minimum position uncertainty: $\\Delta x = \\frac{\\hbar}{2 \\Delta p} = \\frac{1.055 \\times 10^{-34}}{2(5.46 \\times 10^{-29})} \\approx 9.661 \\times 10^{-7}\\text{ m} \\approx 0.966\\,\\mu\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "١. عدم التأكد في السرعة: $\\Delta v = 6.0 \\times 10^5 \\times 10^{-4} = 60\\text{ م/ث}$.",
      "٢. عدم التأكد في كمية التحرك: $\\Delta p = m_e \\Delta v = 9.1 \\times 10^{-31} \\times 60 = 5.46 \\times 10^{-29}\\text{ كجم}\\cdot\\text{م/ث}$.",
      "٣. أقل عدم تأكد في الموضع: $\\Delta x = \\frac{1.055 \\times 10^{-34}}{2 \\times 5.46 \\times 10^{-29}} \\approx 9.661 \\times 10^{-7}\\text{ م} \\approx 0.966\\text{ ميكرومتر}$."
    ],
    "teacherTipEn": "Heisenberg's principle is a fundamental quantum limitation arising from matter wave nature, not an imperfection in instruments.",
    "teacherTipAr": "مبدأ عدم التأكد لهايزنبرج هو خاصية جوهرية من الطبيعة الموجية للمادة وليس قصوراً في أجهزة القياس."
  },
  {
    "id": "egbac_phys_ch1_ex_10",
    "titleEn": "Radiation Force on a Completely Absorbing Surface",
    "titleAr": "القوة الإشعاعية المؤثرة على سطح تام الامتصاص",
    "difficulty": "easy",
    "questionEn": "A parallel electromagnetic beam of continuous power $P = 150\\text{ W}$ strikes a completely absorbing black matte surface at normal incidence. What is the total radiant force exerted on the surface?",
    "questionAr": "سقطت حزمة إشعاع كهرومغناطيسي متوازية قدرتها $P = 150\\text{ واط}$ عمودياً على سطح أسود غير لامع تام الامتصاص. ما القوة الكلية الناتجة عن ضغط الإشعاع على هذا السطح؟",
    "optionsEn": [
      "$1.0 \\times 10^{-6}\\text{ N}$",
      "$2.5 \\times 10^{-7}\\text{ N}$",
      "$1.5 \\times 10^{-5}\\text{ N}$",
      "$5.0 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$1.0 \\times 10^{-6}\\text{ نيوتن}$",
      "$2.5 \\times 10^{-7}\\text{ نيوتن}$",
      "$1.5 \\times 10^{-5}\\text{ نيوتن}$",
      "$5.0 \\times 10^{-7}\\text{ نيوتن}$"
    ],
    "correctAnswer": "$5.0 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 3,
    "hintEn": "For total absorption, photons are absorbed without bouncing, so F = P / c.",
    "hintAr": "في حالة الامتصاص التام، تُمتص الفوتونات دون ارتداد فتكون القوة F = P / c.",
    "stepByStepSolutionEn": [
      "1. When photons are absorbed, momentum delivered per second is $\\Delta p / \\Delta t = E_{\\text{total}} / (c \\Delta t) = P / c$.",
      "2. Radiant force is therefore: $F = \\frac{P}{c} = \\frac{150\\text{ W}}{3.0 \\times 10^8\\text{ m/s}} = 5.0 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. عند الامتصاص التام، كمية التحرك المنقولة في الثانية: $\\Delta p / \\Delta t = P / c$.",
      "٢. القوة الإشعاعية: $F = \\frac{150}{3.0 \\times 10^8} = 5.0 \\times 10^{-7}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Compare with a reflecting surface where momentum change is doubled (F = 2P/c).",
    "teacherTipAr": "قارن ذلك بالسطح العاكس حيث يتضاعف التغير في كمية التحرك (F = 2P/c)."
  },
  {
    "id": "egbac_phys_ch1_ex_11",
    "titleEn": "Threshold Photon Energy for Pair Production",
    "titleAr": "طاقة الفوتون الحرجة لإنتاج زوج (إلكترون - بوزيترون)",
    "difficulty": "medium",
    "questionEn": "A high-energy gamma-ray photon passes near a heavy nucleus and converts entirely into an electron-positron pair ($e^- + e^+$). Given that the rest mass of an electron is $m_e = 0.511\\text{ MeV}/c^2$ and the positron has identical rest mass, what is the theoretical minimum threshold energy $E_{\\min}$ that the photon must possess?",
    "questionAr": "مر فوتون أشعة غاما عالي الطاقة بالقرب من نواة ثقيلة فتحول بالكامل إلى زوج (إلكترون - بوزيترون) ($e^- + e^+$). إذا كانت كتلة سكون الإلكترون تكافئ $0.511\\text{ MeV}$ وللبوزيترون نفس كتلة السكون، فما أقل طاقة حرجة $E_{\\min}$ يجب أن يمتلكها الفوتون لحدوث هذه الظاهرة؟",
    "optionsEn": [
      "$1.022\\text{ MeV}$",
      "$0.511\\text{ MeV}$",
      "$2.044\\text{ MeV}$",
      "$1.533\\text{ MeV}$"
    ],
    "optionsAr": [
      "$1.022\\text{ مليون إلكترون فولت}$",
      "$0.511\\text{ مليون إلكترون فولت}$",
      "$2.044\\text{ مليون إلكترون فولت}$",
      "$1.533\\text{ مليون إلكترون فولت}$"
    ],
    "correctAnswer": "$1.022\\text{ MeV}$",
    "correctIndex": 0,
    "hintEn": "Total rest energy of the pair is 2 * m_e * c^2.",
    "hintAr": "طاقة السكون الكلية للزوج الناتج هي 2 * m_e * c^2.",
    "stepByStepSolutionEn": [
      "1. By Einstein's mass-energy relation, creation of two particles requires minimum energy $E_{\\min} = 2 m_e c^2$.",
      "2. Substitute electron rest mass equivalent: $E_{\\min} = 2 \\times 0.511\\text{ MeV} = 1.022\\text{ MeV}$.",
      "3. Any photon energy exceeding $1.022\\text{ MeV}$ is converted into the kinetic energies of the created electron and positron."
    ],
    "stepByStepSolutionAr": [
      "١. من علاقة أينشتاين لتحول الكتلة إلى طاقة: $E_{\\min} = 2 m_e c^2$.",
      "٢. التعويض بكتلة سكون الإلكترون: $E_{\\min} = 2 \\times 0.511 = 1.022\\text{ مليون إلكترون فولت}$.",
      "٣. أي طاقة زائدة عن هذا الحد تتحول إلى طاقة حركة للجسيمين الناتجين."
    ],
    "teacherTipEn": "Pair production represents a dramatic direct conversion of quantum electromagnetic energy into tangible matter.",
    "teacherTipAr": "تمثل ظاهرة إنتاج الزوج تحولاً مباشراً ومبهراً لطاقة الإشعاع الكمي الكهرومغناطيسي إلى مادة ملموسة."
  },
  {
    "id": "egbac_phys_ch1_ex_12",
    "titleEn": "Velocity Ratio of Electrons Under Accelerating Potentials V1 and V2",
    "titleAr": "نسبة سرعتي إلكترونين معجلين بفرقي جهد V1 و V2",
    "difficulty": "easy",
    "questionEn": "Two electrons are accelerated from rest through electric potential differences of $V_1 = 50\\text{ V}$ and $V_2 = 200\\text{ V}$ respectively. What is the ratio of their final speeds $\\frac{v_1}{v_2}$?",
    "questionAr": "عُجل إلكترونان من السكون عبر فرقي جهد كهربائيين $V_1 = 50\\text{ فولت}$ و $V_2 = 200\\text{ فولت}$ على الترتيب. ما النسبة بين سرعتيهما النهائيتين $\\frac{v_1}{v_2}$؟",
    "optionsEn": [
      "$1 : 4$",
      "$1 : 2$",
      "$2 : 1$",
      "$1 : \\sqrt{2}$"
    ],
    "optionsAr": [
      "$1 : 4$",
      "$1 : 2$",
      "$2 : 1$",
      "$1 : \\sqrt{2}$"
    ],
    "correctAnswer": "$1 : 2$",
    "correctIndex": 1,
    "hintEn": "Kinetic energy is eV = 0.5 * m * v^2, so v is proportional to √V.",
    "hintAr": "طاقة الحركة تساوي eV = 0.5 * m * v^2، ومنها تتناسب السرعة طردياً مع الجذر التربيعي لفرق الجهد المعجل.",
    "stepByStepSolutionEn": [
      "1. Relate speed to potential: $\\frac{1}{2} m_e v^2 = e V \\implies v = \\sqrt{\\frac{2 e V}{m_e}}$.",
      "2. Form the ratio: $\\frac{v_1}{v_2} = \\sqrt{\\frac{V_1}{V_2}} = \\sqrt{\\frac{50}{200}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. علاقة السرعة بفرق الجهد: $\\frac{1}{2} m_e v^2 = e V \\implies v = \\sqrt{\\frac{2 e V}{m_e}}$.",
      "٢. حساب النسبة: $\\frac{v_1}{v_2} = \\sqrt{\\frac{V_1}{V_2}} = \\sqrt{\\frac{50}{200}} = \\frac{1}{2}$."
    ],
    "teacherTipEn": "Quadrupling the accelerating voltage doubles the speed, and halves the de Broglie wavelength (λ ∝ 1/√V).",
    "teacherTipAr": "مضاعفة فرق الجهد أربع مرات يضاعف السرعة، ويقلل الطول الموجي لموجة دي برولي إلى النصف."
  },
  {
    "id": "egbac_phys_ch1_ex_13",
    "titleEn": "Slope and Intercepts of Photoelectric Graph",
    "titleAr": "الميل والتقاطعات في التمثيل البياني للظاهرة الكهروضوئية",
    "difficulty": "medium",
    "questionEn": "In a graph plotting maximum kinetic energy $KE_{\\max}$ (on the vertical $y$-axis) against radiation frequency $\\nu$ (on the horizontal $x$-axis) for different metals, what physical constants do the slope and horizontal intercept represent?",
    "questionAr": "في الرسم البياني الذي يمثل العلاقة بين طاقة الحركة العظمى للإلكترونات $KE_{\\max}$ (المحور الرأسي) وتردد الضوء الساقط $\\nu$ (المحور الأفقي) لعدة فلزات، ماذا يمثل كل من ميل الخط المستقيم ونقطة تقاطعه مع المحور الأفقي؟",
    "optionsEn": [
      "Slope represents work function $\\Phi$; $x$-intercept represents Planck's constant $h$.",
      "Slope represents speed of light $c$; $x$-intercept represents stopping potential $V_{\\text{stop}}$.",
      "Slope represents Planck's constant $h$; $x$-intercept represents threshold frequency $\\nu_c$.",
      "Slope represents electron charge $e$; $x$-intercept represents work function $\\Phi$."
    ],
    "optionsAr": [
      "الميل يمثل دالة الشغل $\\Phi$؛ والتقاطع يمثل ثابت بلانك $h$.",
      "الميل يمثل سرعة الضوء $c$؛ والتقاطع يمثل جهد الإيقاف $V_{\\text{stop}}$.",
      "الميل يمثل ثابت بلانك $h$؛ والتقاطع مع المحور الأفقي يمثل التردد الحرج $\\nu_c$.",
      "الميل يمثل شحنة الإلكترون $e$؛ والتقاطع يمثل دالة الشغل $\\Phi$."
    ],
    "correctAnswer": "Slope represents Planck's constant $h$; $x$-intercept represents threshold frequency $\\nu_c$.",
    "correctIndex": 2,
    "hintEn": "Compare Einstein's equation KE_max = h * nu - Phi to the line equation y = m*x + c.",
    "hintAr": "قارن معادلة أينشتاين KE_max = h * nu - Phi بمعادلة الخط المستقيم y = m*x + c.",
    "stepByStepSolutionEn": [
      "1. Einstein's equation is $KE_{\\max} = h\\nu - \\Phi$.",
      "2. Comparing with $y = mx + b$: vertical variable $y = KE_{\\max}$, horizontal variable $x = \\nu$, slope $m = h$ (Planck's constant).",
      "3. When $KE_{\\max} = 0$, $h\\nu = \\Phi \\implies \\nu = \\nu_c$, so the $x$-intercept is the threshold frequency $\\nu_c$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة أينشتاين: $KE_{\\max} = h\\nu - \\Phi$.",
      "٢. بمقارنتها بمعادلة الخط المستقيم $y = mx + b$: الميل $m = h$ (ثابت بلانك وهو ثابت لجميع الفلزات).",
      "٣. عند $KE_{\\max} = 0$: يكون $\\nu = \\nu_c$ وهو نقطة التقاطع مع محور السينات (التردد الحرج)."
    ],
    "teacherTipEn": "The slope h is universal for all metals (lines are parallel), while the x-intercept ν_c varies with the metal.",
    "teacherTipAr": "ميل الخط المستقيم h ثابت كوني لا يتغير بتغير نوع الفلز (الخطوط متوازية)، بينما يختلف التردد الحرج من فلز لآخر."
  },
  {
    "id": "egbac_phys_ch1_ex_14",
    "titleEn": "Davisson-Germer Electron Diffraction Bragg Angle",
    "titleAr": "زاوية حيود براغ للإلكترونات في تجربة دافيسون وجيرمر",
    "difficulty": "hots",
    "questionEn": "In the historic Davisson-Germer experiment, an electron beam accelerated through $V = 54\\text{ V}$ produces a strong diffraction peak at a scattering angle of $\\phi = 50^\\circ$ from nickel crystal planes. The glancing Bragg angle is $\\theta = 90^\\circ - \\phi/2 = 65^\\circ$. If the interplanar crystal spacing is $d = 0.091\\text{ nm}$, calculate the first-order ($n = 1$) wavelength predicted by Bragg's law $n\\lambda = 2d\\sin\\theta$.",
    "questionAr": "في تجربة دافيسون وجيرمر الشهيرة، سقطت حزمة إلكترونات معجلة بفرق جهد $V = 54\\text{ فولت}$ على بلورة نيكل، فظهرت قمة حيود قوية عند زاوية تشتت $\\phi = 50^\\circ$. زاوية براغ المماسية هي $\\theta = 90^\\circ - \\phi/2 = 65^\\circ$. إذا كانت المسافة البينية بين مستويات البلورة $d = 0.091\\text{ نانومتر}$، فاحسب الطول الموجي للرتبة الأولى ($n = 1$) المتوقع من قانون براغ $n\\lambda = 2d\\sin\\theta$.",
    "optionsEn": [
      "$0.082\\text{ nm}$",
      "$0.330\\text{ nm}$",
      "$0.125\\text{ nm}$",
      "$0.165\\text{ nm}$"
    ],
    "optionsAr": [
      "$0.082\\text{ نانومتر}$",
      "$0.330\\text{ نانومتر}$",
      "$0.125\\text{ نانومتر}$",
      "$0.165\\text{ نانومتر}$"
    ],
    "correctAnswer": "$0.165\\text{ nm}$",
    "correctIndex": 3,
    "hintEn": "Apply Bragg's condition: lambda = 2 * d * sin(theta) with theta = 65° and sin(65°) ≈ 0.9063.",
    "hintAr": "طبق قانون براغ: lambda = 2 * d * sin(theta) مع العلم أن theta = 65° و sin(65°) ≈ 0.9063.",
    "stepByStepSolutionEn": [
      "1. Bragg's law: $n\\lambda = 2d\\sin\\theta$.",
      "2. For $n = 1$: $\\lambda = 2(0.091\\text{ nm})\\sin(65^\\circ)$.",
      "3. Calculate: $\\lambda = 0.182 \\times 0.9063 \\approx 0.1649\\text{ nm} \\approx 0.165\\text{ nm}$.",
      "4. De Broglie's theoretical prediction for $54\\text{ V}$ was $\\lambda = \\sqrt{1.5/54} = 0.167\\text{ nm}$, showing remarkable agreement!"
    ],
    "stepByStepSolutionAr": [
      "١. قانون براغ للحيود: $n\\lambda = 2d\\sin\\theta$.",
      "٢. للرتبة الأولى ($n = 1$): $\\lambda = 2(0.091)\\sin(65^\\circ)$.",
      "٣. الحساب: $\\lambda = 0.182 \\times 0.9063 \\approx 0.165\\text{ نانومتر}$.",
      "٤. يتفق هذا القياس تماماً مع نبوءة دي برولي النظرية لفرق الجهد $54\\text{ فولت}$ (0.167 نانومتر) مما أكد الطبيعة الموجية للإلكترون."
    ],
    "teacherTipEn": "This experiment provided the first direct experimental proof of de Broglie's wave hypothesis for matter.",
    "teacherTipAr": "قدمت هذه التجربة أول إثبات عملي قاطع على صحة فرضية دي برولي للموجات المادية للإلكترونات."
  },
  {
    "id": "egbac_phys_ch1_ex_15",
    "titleEn": "Photon Flux Density Striking a Photodiode",
    "titleAr": "كثافة الفيض الفوتوني الساقط على ثنائي ضوئي",
    "difficulty": "medium",
    "questionEn": "A laser beam with photon energy $E = 2.0\\text{ eV}$ illuminates a small photodiode of surface area $A = 2.0\\text{ mm}^2$ with an intensity of $I = 500\\text{ W/m}^2$. How many photons strike the active area of the photodiode each second?",
    "questionAr": "شعاع ليزر طاقة فوتوناته $E = 2.0\\text{ إلكترون فولت}$ يسقط على ثنائي ضوئي مساحة سطحه الحساس $A = 2.0\\text{ مم}^2$ بشدة إشعاع $I = 500\\text{ واط/م}^2$. كم فوتوناً يسقط على هذه المساحة في كل ثانية؟",
    "optionsEn": [
      "$3.125 \\times 10^{15}\\text{ photons/s}$",
      "$1.562 \\times 10^{15}\\text{ photons/s}$",
      "$6.250 \\times 10^{15}\\text{ photons/s}$",
      "$9.375 \\times 10^{14}\\text{ photons/s}$"
    ],
    "optionsAr": [
      "$3.125 \\times 10^{15}\\text{ فوتون/ث}$",
      "$1.562 \\times 10^{15}\\text{ فوتون/ث}$",
      "$6.250 \\times 10^{15}\\text{ فوتون/ث}$",
      "$9.375 \\times 10^{14}\\text{ فوتون/ث}$"
    ],
    "correctAnswer": "$3.125 \\times 10^{15}\\text{ photons/s}$",
    "correctIndex": 0,
    "hintEn": "Total incident power is P = I * A. Convert photon energy E to Joules (2 eV = 3.2 * 10^-19 J), then rate = P / E.",
    "hintAr": "القدرة الساقطة P = I * A. حول طاقة الفوتون إلى جول (2 eV = 3.2 * 10^-19 جول)، ثم احسب المعدل = P / E.",
    "stepByStepSolutionEn": [
      "1. Calculate incident optical power: $A = 2.0\\text{ mm}^2 = 2.0 \\times 10^{-6}\\text{ m}^2$.",
      "   $P = I \\cdot A = 500\\text{ W/m}^2 \\times 2.0 \\times 10^{-6}\\text{ m}^2 = 1.0 \\times 10^{-3}\\text{ W} = 1.0\\text{ mW}$.",
      "2. Convert photon energy to Joules: $E = 2.0\\text{ eV} \\times (1.6 \\times 10^{-19}\\text{ J/eV}) = 3.2 \\times 10^{-19}\\text{ J}$.",
      "3. Compute photon arrival rate: $\\Phi_n = \\frac{P}{E} = \\frac{1.0 \\times 10^{-3}\\text{ W}}{3.2 \\times 10^{-19}\\text{ J}} = 3.125 \\times 10^{15}\\text{ photons/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب القدرة الضوئية الساقطة: $A = 2.0 \\times 10^{-6}\\text{ م}^2$.",
      "   $P = I \\cdot A = 500 \\times 2.0 \\times 10^{-6} = 1.0 \\times 10^{-3}\\text{ واط} = 1.0\\text{ مللي واط}$.",
      "٢. تحويل طاقة الفوتون إلى جول: $E = 2.0 \\times 1.6 \\times 10^{-19} = 3.2 \\times 10^{-19}\\text{ جول}$.",
      "٣. معدل وصول الفوتونات: $\\Phi_n = \\frac{1.0 \\times 10^{-3}}{3.2 \\times 10^{-19}} = 3.125 \\times 10^{15}\\text{ فوتون/ث}$."
    ],
    "teacherTipEn": "This rate directly determines the maximum theoretical photocurrent in a detector with quantum efficiency η: I_ph = η * e * Φ_n.",
    "teacherTipAr": "يحدد هذا المعدل أقصى تيار كهروضوئي نظري في الكواشف الضوئية بمعلومية الكفاءة الكمية: I_ph = η * e * Φ_n."
  }
];
