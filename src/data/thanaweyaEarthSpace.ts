import type { Branch, Chapter } from '../types/curriculum';
import { earthSpaceCh1Databank } from './databanks/thanaweya/earthSpaceCh1Databank';
import { earthSpaceCh2Databank } from './databanks/thanaweya/earthSpaceCh2Databank';
import { earthSpaceCh3Databank } from './databanks/thanaweya/earthSpaceCh3Databank';
import { earthSpaceCh4Databank } from './databanks/thanaweya/earthSpaceCh4Databank';
import { earthSpaceCh5Databank } from './databanks/thanaweya/earthSpaceCh5Databank';
import { earthSpaceCh6Databank } from './databanks/thanaweya/earthSpaceCh6Databank';
import { earthSpaceCh7Databank } from './databanks/thanaweya/earthSpaceCh7Databank';
import { earthSpaceCh8Databank } from './databanks/thanaweya/earthSpaceCh8Databank';
import { earthSpaceCh9Databank } from './databanks/thanaweya/earthSpaceCh9Databank';
import { earthSpaceCh10Databank } from './databanks/thanaweya/earthSpaceCh10Databank';
import { earthSpaceCh1SolvedExamples, earthSpaceCh1Exercises } from './textbook/thanaweya/earthSpaceCh1Textbook';
import { earthSpaceCh2SolvedExamples, earthSpaceCh2Exercises } from './textbook/thanaweya/earthSpaceCh2Textbook';
import { earthSpaceCh3SolvedExamples, earthSpaceCh3Exercises } from './textbook/thanaweya/earthSpaceCh3Textbook';
import { earthSpaceCh4SolvedExamples, earthSpaceCh4Exercises } from './textbook/thanaweya/earthSpaceCh4Textbook';
import { earthSpaceCh5SolvedExamples, earthSpaceCh5Exercises } from './textbook/thanaweya/earthSpaceCh5Textbook';
import { earthSpaceCh6SolvedExamples, earthSpaceCh6Exercises } from './textbook/thanaweya/earthSpaceCh6Textbook';
import { earthSpaceCh7SolvedExamples, earthSpaceCh7Exercises } from './textbook/thanaweya/earthSpaceCh7Textbook';
import { earthSpaceCh8SolvedExamples, earthSpaceCh8Exercises } from './textbook/thanaweya/earthSpaceCh8Textbook';
import { earthSpaceCh9SolvedExamples, earthSpaceCh9Exercises } from './textbook/thanaweya/earthSpaceCh9Textbook';
import { earthSpaceCh10SolvedExamples, earthSpaceCh10Exercises } from './textbook/thanaweya/earthSpaceCh10Textbook';

const chapters: Chapter[] = [
  {
    id: 'th_es_ch1',
    chapterNumber: 1,
    titleEn: "Unit 1: Celestial Mechanics, Universal Gravitation & Keplerian Orbits",
    titleAr: "الباب الأول: ميكانيكا الأجرام الفلكية، الجاذبية الكونية ومدارات كبلر",
    descriptionEn: "Newton's law of universal gravitation, gravitational fields, Kepler's three laws of planetary motion, orbital and escape velocities, Vis-Viva energy equation, and Keplerian orbital elements.",
    descriptionAr: "قانون الجذب العام لنيوتن والمجالات التثاقلية، قوانين كبلر الثلاثة لحركة الكواكب، السرعة المدارية وسرعة الإفلات، معادلة الطاقة الحية، والعناصر المدارية الكبلرية الستة.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'space_orbit_sim',
        titleEn: "Keplerian Orbit & Planetary Mechanics Simulator",
        titleAr: "استوديو محاكاة مدارات كبلر والميكانيكا الفلكية",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch1_l1',
        titleEn: "Universal Gravitation, Gravitational Fields & Kepler's Laws",
        titleAr: "الجاذبية الكونية والمجالات التثاقلية وقوانين كبلر الفلكية",
        summaryEn: "Newton’s inverse-square law of gravity, planetary gravitational acceleration, and Kepler’s First and Second Laws of planetary motion.",
        summaryAr: "قانون التربيع العكسي لنيوتن في الجاذبية، تسارع الجاذبية الكوكبي، وقانونا كبلر الأول والثاني (قانون المساحات المتساوية).",
        theoryContentEn: "### 1. Newton's Law of Universal Gravitation\n- **Universal Force Law:** Every particle attracts every other particle with a mutual force directly proportional to their masses and inversely proportional to the square of the separation distance:\n$$F_g = G \\frac{M m}{r^2}$$\nwhere $G = 6.67430 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.\n- **Gravitational Field Strength:** The local acceleration due to gravity produced by a spherical mass $M$ at radial distance $r$:\n$$g(r) = \\frac{GM}{r^2}$$\n\n### 2. Kepler's Laws of Planetary Motion\n1. **First Law (Law of Ellipses):** Planetary orbits are ellipses with the Sun occupying one of the two foci. The degree of flattening is measured by eccentricity $e = \\frac{c}{a}$.\n2. **Second Law (Law of Equal Areas):** A radius vector joining any planet to the Sun sweeps out equal areas in equal intervals of time:\n$$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$$\nproving that orbital angular momentum is conserved in central force fields.",
        theoryContentAr: "### ١. قانون الجذب العام لنيوتن والمجال التثاقلي\n- **قانون الجذب العام:** تتجاذب أي كتلتين في الكون بقوة تتناسب طردياً مع حاصل ضرب الكتلتين وعكسياً مع مربع المسافة الفاصلة بين مركزيهما:\n$$F_g = G \\frac{M m}{r^2}$$\nحيث $G = 6.67430 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ يمثل ثابت الجذب العام الكوني.\n- **شدة مجال الجاذبية (تسارع السقوط الحر):**\n$$g(r) = \\frac{GM}{r^2}$$\n\n### ٢. قانونا كبلر الأول والثاني\n١. **قانون كبلر الأول (قانون المدارات الإهليلجية):** تدور الكواكب في مدارات بيضاوية (إهليلجية) تمثل الشمس إحدى بؤرتيها، ويحدد معامل الاختلاف المركزي $e = \\frac{c}{a}$ استطالة المدار.\n٢. **قانون كبلر الثاني (قانون المساحات المتساوية):** الخط الواصل بين مركز الشمس ومركز الكوكب يمسح مساحات متساوية في أزمنة متساوية:\n$$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{ثابت}$$\nمما يثبت بقاء كمية التحرك الزاوي المدارية للكوكب.",
        formulas: [
          {
                    "labelEn": "Newton's Law of Universal Gravitation",
                    "labelAr": "قانون الجذب العام لنيوتن",
                    "latex": "F_g = G \\frac{M m}{r^2}"
          },
          {
                    "labelEn": "Areal Velocity Conservation",
                    "labelAr": "معدل مسح المساحات وبقاء كمية التحرك الزاوي",
                    "latex": "\\frac{dA}{dt} = \\frac{L}{2m} = \\text{const}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH01-L1',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Universal Gravitation, Gravitational Fields & Kepler's Laws",
          titleAr: "دليل المعلم التوجيهي: الجاذبية الكونية والمجالات التثاقلية وقوانين كبلر الفلكية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH01-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Universal Gravitation, Gravitational Fields & Kepler's Laws",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ الجاذبية الكونية والمجالات التثاقلية وقوانين كبلر الفلكية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch1_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'space_orbit_sim',
          titleEn: 'Keplerian Orbit & Planetary Mechanics Simulator',
          titleAr: 'استوديو محاكاة مدارات كبلر والميكانيكا الفلكية',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch1_l2',
        titleEn: "Kepler's Third Law, Orbital Energies & Escape Velocities",
        titleAr: "قانون كبلر الثالث، طاقات المدارات وسرعة الإفلات الكوكبية",
        summaryEn: "Harmonic orbital period law, circular orbital speed, Vis-Viva energy equation, and escape velocity from celestial bodies.",
        summaryAr: "قانون التوافق المداري، السرعة المدارية الدائرية، معادلة الطاقة الحية، وسرعة الإفلات من الجاذبية الكوكبية.",
        theoryContentEn: "### 1. Kepler's Third Law (The Harmonic Law)\n- **Proportionality:** The square of the orbital period $T$ is directly proportional to the cube of the semi-major axis $a$:\n$$T^2 = \\frac{4\\pi^2}{G(M + m)} a^3$$\nFor solar system planets ($M_\\odot \\gg m$), this reduces to $T^2 [\\text{yr}] = a^3 [\\text{AU}]$.\n\n### 2. Orbital Speeds & Energy Conservation\n- **Circular Orbital Velocity:** Setting gravitational force equal to centripetal requirement:\n$$v_c = \\sqrt{\\frac{GM}{r}}$$\n- **Escape Velocity ($v_e$):** Speed required to reach infinity with zero kinetic energy:\n$$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} v_c$$\n- **Vis-Viva Equation:** The instantaneous velocity $v$ of a body in an orbit with semi-major axis $a$ at distance $r$:\n$$v^2 = GM \\left(\\frac{2}{r} - \\frac{1}{a}\\right)$$",
        theoryContentAr: "### ١. قانون كبلر الثالث (قانون التوافق المداري)\n- **العلاقة الرياضية:** يتناسب مربع زمن الدورة الفلكية للكوكب $T^2$ طردياً مع مكعب نصف المحور الأكبر لمداره $a^3$:\n$$T^2 = \\frac{4\\pi^2}{G(M + m)} a^3$$\nوفي النظام الشمسي، حيث كتلة الشمس هائلة ($M_\\odot \\gg m$): يكتب القانون مبسطاً: $T^2 [\\text{سنة}] = a^3 [\\text{وحدة فلكية}]$.\n\n### ٢. السرعة المدارية وسرعة الإفلات وحفظ الطاقة\n- **السرعة المدارية الدائرية:**\n$$v_c = \\sqrt{\\frac{GM}{r}}$$\n- **سرعة الإفلات الكوكبية:**\n$$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} v_c$$\n- **معادلة الطاقة الحية (Vis-Viva Equation):**\n$$v^2 = GM \\left(\\frac{2}{r} - \\frac{1}{a}\\right)$$",
        formulas: [
          {
                    "labelEn": "Kepler's Third Harmonic Law",
                    "labelAr": "قانون كبلر الثالث التوافقي",
                    "latex": "T^2 = \\frac{4\\pi^2}{GM} a^3"
          },
          {
                    "labelEn": "Vis-Viva Energy Equation",
                    "labelAr": "معادلة الطاقة الحية للمدارات الإهليلجية",
                    "latex": "v^2 = GM \\left(\\frac{2}{r} - \\frac{1}{a}\\right)"
          },
          {
                    "labelEn": "Escape Velocity Relation",
                    "labelAr": "سرعة الإفلات من الجاذبية الكوكبية",
                    "latex": "v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} v_c"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH01-L2',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Kepler's Third Law, Orbital Energies & Escape Velocities",
          titleAr: "دليل المعلم التوجيهي: قانون كبلر الثالث، طاقات المدارات وسرعة الإفلات الكوكبية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH01-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Kepler's Third Law, Orbital Energies & Escape Velocities",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ قانون كبلر الثالث، طاقات المدارات وسرعة الإفلات الكوكبية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch1_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'space_orbit_sim',
          titleEn: 'Keplerian Orbit & Planetary Mechanics Simulator',
          titleAr: 'استوديو محاكاة مدارات كبلر والميكانيكا الفلكية',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh1SolvedExamples,
    exerciseProblems: earthSpaceCh1Exercises,
    databank: earthSpaceCh1Databank
  },
  {
    id: 'th_es_ch2',
    chapterNumber: 2,
    titleEn: "Unit 2: Solar System Architecture & Comparative Planetology",
    titleAr: "الباب الثاني: بنية النظام الشمسي، المقارنة الكوكبية والأجرام الجليدية",
    descriptionEn: "Nebular hypothesis, Frost line differentiation, terrestrial versus Jovian planets, planetary geophysics, volcanism, icy moons, and small Solar System bodies.",
    descriptionAr: "فرضية السديم الشمسي، خط التجمد، الكواكب الصخرية والغازية، الجيوفيزياء الكوكبية، البراكين، الأقمار الجليدية وأجرام حزام كايبر وسحابة أورت.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'planetary_viewer',
        titleEn: "Comparative Planetology & Solar System Explorer",
        titleAr: "استوديو المقارنة الكوكبية وجيولوجيا النظام الشمسي",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch2_l1',
        titleEn: "Solar Nebula Collapse, The Frost Line & Planetary Differentiation",
        titleAr: "انهيار السديم الشمسي، خط التجمد وتمايز الكواكب الصخرية والغازية",
        summaryEn: "Formation of protoplanetary disks, condensation gradient across the Frost Line, core accretion model, and internal compositional differentiation.",
        summaryAr: "تطور القرص الكوكبي الأولي، تدرج التكثف عبر خط التجمد (Frost Line)، ونموذج التراكم النواتي وتمايز طبقات الكواكب.",
        theoryContentEn: "### 1. The Solar Nebula Accretion Model\n- **Gravitational Collapse:** Triggered ~4.57 Ga ago in an interstellar molecular cloud, angular momentum conservation flattened the gas and dust into a protoplanetary circumstellar disk.\n- **The Frost Line (~2.7 AU):** Inside this boundary, intense solar thermal radiation prevented volatile ices from condensing, leaving only refractory metals and silicates to form terrestrial planets. Beyond 2.7 AU, abundant water, methane, and ammonia ices condensed into massive planetary cores.\n\n### 2. Planetary Differentiation\n- Gravitational settling caused dense metallic iron-nickel alloys to sink into planetary cores, while buoyant low-density silicates floated upward to form mantles and crusts.",
        theoryContentAr: "### ١. نموذج تراكم السديم الشمسي\n- **الانهيار الجاذبي الأولي:** بدأ قبل حوالي 4.57 مليار سنة، حيث أدى حفظ كمية التحرك الزاوي إلى تفلطح السديم الغازي الدوار إلى قرص كوكبي أولي.\n- **خط التجمد (Frost Line عند 2.7 وحدة فلكية):** حال الإشعاع الشمسي الحار دون تكثف الجليد في الداخل، فتشكلت الكواكب الصخرية؛ بينما في الخارج، تجمدت مركبات الماء والميثان والأمونيا لتشكل نوى العمالقة الغازية الضخمة.\n\n### ٢. التمايز الكوكبي الداخلي\n- أدى التسخين الانصهاري بالجاذبية والنشاط الإشعاعي إلى غوص فلزات الحديد والنيكل الكثيفة نحو المركز لتصنع النواة، وطفو السيليكات الخفيفة لصنع الوشاح والقشرة.",
        formulas: [
          {
                    "labelEn": "Planetary Surface Gravity",
                    "labelAr": "جاذبية سطح الكوكب بالنسبة للأرض",
                    "latex": "g_{\\text{rel}} = \\frac{M/M_\\oplus}{(R/R_\\oplus)^2}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH02-L1',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Solar Nebula Collapse, The Frost Line & Planetary Differentiation",
          titleAr: "دليل المعلم التوجيهي: انهيار السديم الشمسي، خط التجمد وتمايز الكواكب الصخرية والغازية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH02-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Solar Nebula Collapse, The Frost Line & Planetary Differentiation",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ انهيار السديم الشمسي، خط التجمد وتمايز الكواكب الصخرية والغازية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch2_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'planetary_viewer',
          titleEn: 'Comparative Planetology & Solar System Explorer',
          titleAr: 'استوديو المقارنة الكوكبية وجيولوجيا النظام الشمسي',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch2_l2',
        titleEn: "Comparative Planetology: Terrestrial Surfaces, Giants & Icy Moons",
        titleAr: "المقارنة الكوكبية: أسطح الكواكب الصخرية، العمالقة والأقمار الجليدية",
        summaryEn: "Atmospheric runaway greenhouse on Venus, Martian Olympus Mons volcanism, Jovian metallic hydrogen, and subsurface ocean moons (Europa, Enceladus).",
        summaryAr: "ظاهرة الاحتباس الحراري الانفلاتي بالزهرة، براكين المريخ الضخمة، الهيدروجين الفلزي بالمشتري، ومحيطات أقمار أوروبا وإنسيلادوس الجليدية.",
        theoryContentEn: "### 1. Comparative Terrestrial Geology\n- **Venus:** Extreme greenhouse atmosphere (96.5% CO2, surface pressure 92 bar, surface temperature 737 K) without plate tectonics.\n- **Mars:** Cold, thin CO2 atmosphere (6 mbar); massive volcanic structures (Olympus Mons, 22 km high) due to stationary crust over mantle hot spots.\n\n### 2. Gas & Ice Giants vs. Active Ocean Moons\n- **Jupiter:** Massive metallic hydrogen mantle under extreme pressure (>200 GPa) generating intense dipolar magnetic fields.\n- **Europa & Enceladus:** Tidal flexing by giant planet gravity generates internal geothermal heat, sustaining global liquid water oceans beneath outer icy shells with cryovolcanic geysers.",
        theoryContentAr: "### ١. الجيولوجيا المقارنة للكواكب الصخرية\n- **الزهرة:** احتباس حراري جامح بغلاف جوي 96.5% ثاني أكسيد كربون وضغط سطحي 92 بار وحرارة تبلغ 737 كلفن دون تكتونية صفائح.\n- **المريخ:** غلاف جوي رقيق وبارد (6 مليبار)، براكين درعية عملاقة كبركان أوليمبوس مونس (بارتفاع 22 كم) لاستقرار القشرة فوق النقاط الساخنة.\n\n### ٢. العمالقة الكوكبية والأقمار المحيطية النشطة\n- **المشتري:** وشاح داخلي هائل من الهيدروجين الفلزي السائل فائق التوصيل يولد مجاله المغناطيسي الجبار.\n- **أوروبا وإنسيلادوس:** التسخين المدي بالاحتكاك يولد حرارة باطنية تحافظ على محيطات مائية سائلة شاسعة تحت القشرة الجليدية مع فوارات جليدية نشطة.",
        formulas: [
          {
                    "labelEn": "Planetary Thermal Radiation Equilibrium",
                    "labelAr": "حرارة الاتزان الحراري للكواكب",
                    "latex": "T_{\\text{eq}} = T_\\odot \\left(\\frac{R_\\odot}{2d}\\right)^{1/2} (1 - A)^{1/4}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH02-L2',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Comparative Planetology: Terrestrial Surfaces, Giants & Icy Moons",
          titleAr: "دليل المعلم التوجيهي: المقارنة الكوكبية: أسطح الكواكب الصخرية، العمالقة والأقمار الجليدية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH02-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Comparative Planetology: Terrestrial Surfaces, Giants & Icy Moons",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ المقارنة الكوكبية: أسطح الكواكب الصخرية، العمالقة والأقمار الجليدية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch2_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'planetary_viewer',
          titleEn: 'Comparative Planetology & Solar System Explorer',
          titleAr: 'استوديو المقارنة الكوكبية وجيولوجيا النظام الشمسي',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh2SolvedExamples,
    exerciseProblems: earthSpaceCh2Exercises,
    databank: earthSpaceCh2Databank
  },
  {
    id: 'th_es_ch3',
    chapterNumber: 3,
    titleEn: "Unit 3: Earth-Moon Geodynamics & Planetary Magnetospheres",
    titleAr: "الباب الثالث: ديناميكا الأرض والقمر والمجالات المغناطيسية الكوكبية",
    descriptionEn: "Giant impact hypothesis, lunar orbital recession, tidal friction, geodynamo magnetic field generation, Van Allen radiation belts, and auroral particle excitation.",
    descriptionAr: "فرضية الاصطدام العملاق لنشأة القمر، تراجع مدار القمر بفعل المد، الدينامو المغناطيسي الأرضي، أحزمة فان ألين الإشعاعية، وفيزياء الشفق القطبي.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'planetary_viewer',
        titleEn: "Geomagnetic Dynamo & Magnetosphere Visualizer",
        titleAr: "استوديو الدينامو المغناطيسي والغلاف المغناطيسي الأرضي",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch3_l1',
        titleEn: "The Giant Impact Model, Tidal Locking & Lunar Orbital Recession",
        titleAr: "فرضية الاصطدام العملاق، الانغلاق المدي وتراجع المدار القمري",
        summaryEn: "Protoplanetary collision of Theia with proto-Earth, tidal dissipation torque, 1:1 spin-orbit tidal locking, and the ~3.8 cm/yr lunar recession rate.",
        summaryAr: "اصطدام الكوكب الأولي ثيا بالأرض البدائية، عزم التبديد المدي، الانغلاق المدي التزامني، ومعدل تراجع القمر البالغ 3.8 سم سنوياً.",
        theoryContentEn: "### 1. The Giant Impact Hypothesis\n- Collision between proto-Earth and a Mars-sized planetesimal (Theia) ejected vaporized mantle silicates into orbit, rapidly accreting to form the Moon ~4.51 Ga ago.\n- Low volatile abundance and identical oxygen isotopic ratios ($^{17}\\text{O}/^{16}\\text{O}$) substantiate this co-evolutionary origin.\n\n### 2. Tidal Dissipation & Orbital Evolution\n- Gravitational tidal bulges raised on Earth by the Moon lead the Earth-Moon axis due to Earth's rapid axial rotation.\n- This tidal torque transfers rotational angular momentum from Earth to lunar orbital motion, gradually lengthening the terrestrial day and driving the Moon outward at $3.82 \\pm 0.07 \\text{ cm/year}$.",
        theoryContentAr: "### ١. فرضية الاصطدام العملاق لنشأة القمر\n- اصطدام كوكب أولي بحجم المريخ (ثيا) بالأرض البدائية قذف مواد الوشاح المنصهرة إلى مدار كوكبي تكثف سريعاً ليشكل القمر قبل 4.51 مليار سنة.\n- تشابه نسب نظائر الأكسجين ($^{17}\\text{O}/^{16}\\text{O}$) بين الأرض والقمر مع شح العناصر المتطايرة يؤكد صحة هذا الأصل التكويني المشترك.\n\n### ٢. التبديد المدي وتطور المدار القمري\n- يؤدي دوران الأرض السريع حول محورها إلى تقدم نتوء المد والجزر المائي قليلاً أمام الخط الواصل بين الأرض والقمر.\n- يولد هذا التباين عزماً يفرمل دوران الأرض وينقل الطاقة الميكانيكية لمدار القمر متسبباً في تراجعه مبتعداً بمعدل 3.82 سم سنوياً.",
        formulas: [
          {
                    "labelEn": "Tidal Gravitational Gradient Force",
                    "labelAr": "قوة التدرج التفاضلي للمد والجزر",
                    "latex": "\\Delta F_{\\text{tide}} = \\frac{2GMm R}{r^3}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH03-L1',
          pageRange: '45-65'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: The Giant Impact Model, Tidal Locking & Lunar Orbital Recession",
          titleAr: "دليل المعلم التوجيهي: فرضية الاصطدام العملاق، الانغلاق المدي وتراجع المدار القمري",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH03-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of The Giant Impact Model, Tidal Locking & Lunar Orbital Recession",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ فرضية الاصطدام العملاق، الانغلاق المدي وتراجع المدار القمري",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch3_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'planetary_viewer',
          titleEn: 'Geomagnetic Dynamo & Magnetosphere Visualizer',
          titleAr: 'استوديو الدينامو المغناطيسي والغلاف المغناطيسي الأرضي',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch3_l2',
        titleEn: "Earth Geodynamo, Van Allen Belts & The Protective Magnetosphere",
        titleAr: "الدينامو الجيومغناطيسي، أحزمة فان ألين الإشعاعية ودرع الغلاف المغناطيسي",
        summaryEn: "Outer core convective dynamo, magnetic dipolar shielding, trapping charged solar wind particles, and auroral emissions in polar upper atmospheres.",
        summaryAr: "حمل مصهور الحديد باللب الخارجي، الحماية المغناطيسية، احتجاز الجسيمات المشحونة بأحزمة فان ألين، وإثارة غازات الشفق القطبي.",
        theoryContentEn: "### 1. The Planetary Geodynamo\n- Thermal and compositional convection of molten liquid iron-nickel in the outer core coupled with Coriolis forces creates helicoidal conductive flow loops, sustaining a dipolar magnetic field ($B \\approx 30\\text{--}60\\,\\mu\\text{T}$).\n\n### 2. Van Allen Belts & Auroral Physics\n- **Van Allen Radiation Belts:** Concentric magnetic trap zones holding energetic protons ($E > 100\\text{ MeV}$) in the inner belt and relativistic electrons in the outer belt.\n- **Aurora Borealis & Australis:** Reconnection in the magnetotail accelerates electrons along magnetic field lines into polar ionospheres, exciting atomic oxygen ($557.7\\text{ nm}$ green, $630.0\\text{ nm}$ red) and molecular nitrogen.",
        theoryContentAr: "### ١. الدينامو الجيومغناطيسي الأرضي\n- تولد تيارات الحمل الحراري لمصهور الحديد والنيكل في اللب الخارجي المتزامنة مع تأثير كوريوليس دورانياً دوامات موصلة تولد المجال المغناطيسي الأرضي ($30\\text{--}60\\,\\mu\\text{T}$).\n\n### ٢. أحزمة فان ألين وفيزياء الشفق القطبي\n- **أحزمة فان ألين الإشعاعية:** منطقتان مغناطيسيتان تحتجزان البروتونات عالية الطاقة في الحزام الداخلي والإلكترونات النسبية في الحزام الخارجي.\n- **الشفق القطبي (الأورورا):** ظاهرة إعادة الاتصال المغناطيسي في ذيل الغلاف المغناطيسي تقذف الجسيمات لتصطدم بذرات الأكسجين والنيتروجين في الغلاف المتأين باعثة أضواء خضراء وحمراء وبنفسجية ساحرة.",
        formulas: [
          {
                    "labelEn": "Lorentz Force on Charged Cosmic Particles",
                    "labelAr": "قوة لورنتز المغناطيسية على الجسيمات المشحونة",
                    "latex": "\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH03-L2',
          pageRange: '45-65'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Earth Geodynamo, Van Allen Belts & The Protective Magnetosphere",
          titleAr: "دليل المعلم التوجيهي: الدينامو الجيومغناطيسي، أحزمة فان ألين الإشعاعية ودرع الغلاف المغناطيسي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH03-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Earth Geodynamo, Van Allen Belts & The Protective Magnetosphere",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ الدينامو الجيومغناطيسي، أحزمة فان ألين الإشعاعية ودرع الغلاف المغناطيسي",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch3_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'planetary_viewer',
          titleEn: 'Geomagnetic Dynamo & Magnetosphere Visualizer',
          titleAr: 'استوديو الدينامو المغناطيسي والغلاف المغناطيسي الأرضي',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh3SolvedExamples,
    exerciseProblems: earthSpaceCh3Exercises,
    databank: earthSpaceCh3Databank
  },
  {
    id: 'th_es_ch4',
    chapterNumber: 4,
    titleEn: "Unit 4: Heliophysics, Solar Interior & Space Weather",
    titleAr: "الباب الرابع: فيزياء الشمس، التفاعلات النووية والطقس الفضائي",
    descriptionEn: "Solar internal anatomy, proton-proton chain nuclear fusion, solar luminosity, 11-year magnetic cycle, sunspots, solar flares, coronal mass ejections, and geomagnetic storms.",
    descriptionAr: "الطبقات الداخلية للشمس، الاندماج النووي بسلسلة بروتون-بروتون، دورة النشاط المغناطيسي الشمسي (11 سنة)، البقع الشمسية، الانبعاثات الكتلية الإكليلية والعواصف الجيومغناطيسية.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'space_orbit_sim',
        titleEn: "Heliophysics & Solar Activity Space Weather Monitor",
        titleAr: "استوديو الفيزياء الشمسية ومراقبة الطقس الفضائي",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch4_l1',
        titleEn: "Solar Interior Stratification & Proton-Proton Nuclear Fusion",
        titleAr: "الطبقات الباطنية للشمس وسلسلة بروتون-بروتون للاندماج النووي",
        summaryEn: "Core, radiative zone, tachocline, convective zone, photosphere, chromosphere, and the $4^1\\text{H} \\to ^4\\text{He}$ hydrogen fusion pathway.",
        summaryAr: "نواة الشمس الاندماجية، المنطقة الإشعاعية، منطقة الحمل الحراري، وسلسلة اندماج الهيدروجين إلى هيليوم مع تحول الكتلة لطاقة مشعة.",
        theoryContentEn: "### 1. Internal Structure of the Sun\n- **Core ($r < 0.25 R_\\odot$):** Temperature reaches $1.57 \\times 10^7\\text{ K}$, density $\\sim 150\\text{ g/cm}^3$, hosting all nuclear fusion.\n- **Radiative Zone ($0.25\\text{--}0.7 R_\\odot$):** Photons undergo millions of Thomson scattering interactions, diffusing outward over $\\sim 10^5\\text{ years}$.\n- **Convective Zone ($0.7\\text{--}1.0 R_\\odot$):** Opacity rises, driving buoyant convective thermal plasma plumes up to the photosphere.\n\n### 2. The Proton-Proton Chain Reaction\n$$4\\,^1\\text{H} \\longrightarrow \\,^4\\text{He} + 2e^+ + 2\\nu_e + 26.73\\text{ MeV}$$\n- Mass deficit $\\Delta m = 0.0287\\text{ u}$ (0.71% of initial mass) converts directly into radiant energy via Einstein’s $E = mc^2$, sustaining solar luminosity $L_\\odot = 3.828 \\times 10^{26}\\text{ W}$.",
        theoryContentAr: "### ١. بنية باطن الشمس وطبقاتها\n- **النواة الاندماجية:** حرارتها 15.7 مليون كلفن وكثافتها 150 جم/سم٣، وتحدث فيها كافة تفاعلات الاندماج النووي الشمسية.\n- **المنطقة الإشعاعية:** ينتقل فيها الإشعاع بالامتصاص وإعادة البث، وتستغرق الفوتونات حوالي 100 ألف سنة لتصل إلى أطرافها.\n- **منطقة الحمل الحراري:** تنقل الحرارة عبر تيارات صاعدة وهابطة من البلازما إلى السطح الضوئي (الفوتوسفير).\n\n### ٢. سلسلة اندماج بروتون-بروتون (p-p Chain)\n$$4\\,^1\\text{H} \\longrightarrow \\,^4\\text{He} + 2e^+ + 2\\nu_e + 26.73\\text{ MeV}$$\n- يتحول 0.71% من كتلة الهيدروجين المندمج إلى طاقة إشعاعية صافية وفق معادلة $E = mc^2$ لتوليد لمعان الشمس البالغ $3.828 \\times 10^{26}$ واط.",
        formulas: [
          {
                    "labelEn": "Nuclear Mass-Energy Equivalence",
                    "labelAr": "تكافؤ الكتلة والطاقة في الاندماج الشمسي",
                    "latex": "E = \\Delta m \\cdot c^2"
          },
          {
                    "labelEn": "Solar Mass Burn Rate",
                    "labelAr": "معدل استهلاك كتلة الشمس في الثانية",
                    "latex": "\\frac{dM}{dt} = \\frac{L_\\odot}{c^2} \\approx 4.26 \\times 10^9 \\text{ kg/s}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH04-L1',
          pageRange: '65-85'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Solar Interior Stratification & Proton-Proton Nuclear Fusion",
          titleAr: "دليل المعلم التوجيهي: الطبقات الباطنية للشمس وسلسلة بروتون-بروتون للاندماج النووي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH04-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Solar Interior Stratification & Proton-Proton Nuclear Fusion",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ الطبقات الباطنية للشمس وسلسلة بروتون-بروتون للاندماج النووي",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch4_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'space_orbit_sim',
          titleEn: 'Heliophysics & Solar Activity Space Weather Monitor',
          titleAr: 'استوديو الفيزياء الشمسية ومراقبة الطقس الفضائي',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch4_l2',
        titleEn: "Sunspot Magnetic Cycles, Solar Flares & Coronal Mass Ejections",
        titleAr: "الدورة المغناطيسية للبقع الشمسية، التوهجات والانبعاثات الكتلية الإكليلية",
        summaryEn: "The 11-year sunspot cycle, magnetic field reconnection, Coronal Mass Ejections (CMEs), supersonic solar wind, and satellite/grid disruptions.",
        summaryAr: "دورة النشاط الشمسي (11 سنة)، إعادة الاتصال المغناطيسي، الانبعاثات الكتلية الإكليلية (CME)، وتأثير العواصف الفضائية على شبكات الطاقة والأقمار.",
        theoryContentEn: "### 1. Sunspots & The Magnetic Solar Cycle\n- Sunspots are cool regions ($T \\approx 4,000\\text{ K}$) where concentrated magnetic flux tubes ($B \\sim 0.3\\text{ T}$) stifle convective heat rising.\n- Differential rotation winds poloidal magnetic field lines into intense toroidal bundles, driving the 11-year solar sunspot cycle (22-year Hale magnetic cycle).\n\n### 2. Space Weather & Coronal Mass Ejections (CMEs)\n- Magnetic reconnection releases up to $10^{25}\\text{ J}$ in solar flares and ejects billions of tons of magnetized coronal plasma at $400\\text{--}2,000\\text{ km/s}$.\n- Earth-directed CMEs produce severe geomagnetic storms, inducing harmful geomagnetically induced currents (GICs) in terrestrial power grids and disrupting GNSS satellites.",
        theoryContentAr: "### ١. البقع الشمسية ودورة النشاط المغناطيسي\n- البقع الشمسية هي بؤر أبرد نسبياً (4000 كلفن) تتشكل بفعل تركز خطوط المجال المغناطيسي التي تمنع صعود تيارات الحمل الساخنة.\n- يؤدي الدوران التفاضلي للشمس إلى شد وتكثيف الخطوط المغناطيسية في دورة منتظمة مدتها 11 سنة (و22 سنة لاكتمال القطبية المغناطيسية).\n\n### ٢. الطقس الفضائي والانبعاثات الكتلية الإكليلية (CMEs)\n- تؤدي ظاهرة إعادة الاتصال المغناطيسي لانفجار التوهجات الشمسية وقذف مليارات الأطنان من البلازما بسرعات تصل إلى 2000 كم/ث.\n- وصول هذه الانبعاثات للأرض يثير عواصف جيومغناطيسية تتسبب في تيارات مستحثة تشل شبكات الكهرباء وتعطل أقمار الملاحة الفضائية.",
        formulas: [
          {
                    "labelEn": "Solar Wind Dynamic Pressure",
                    "labelAr": "الضغط الديناميكي للرياح الشمسية",
                    "latex": "P_{\\text{dyn}} = \\frac{1}{2} \\rho_{\\text{sw}} v_{\\text{sw}}^2"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH04-L2',
          pageRange: '65-85'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Sunspot Magnetic Cycles, Solar Flares & Coronal Mass Ejections",
          titleAr: "دليل المعلم التوجيهي: الدورة المغناطيسية للبقع الشمسية، التوهجات والانبعاثات الكتلية الإكليلية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH04-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Sunspot Magnetic Cycles, Solar Flares & Coronal Mass Ejections",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ الدورة المغناطيسية للبقع الشمسية، التوهجات والانبعاثات الكتلية الإكليلية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch4_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'space_orbit_sim',
          titleEn: 'Heliophysics & Solar Activity Space Weather Monitor',
          titleAr: 'استوديو الفيزياء الشمسية ومراقبة الطقس الفضائي',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh4SolvedExamples,
    exerciseProblems: earthSpaceCh4Exercises,
    databank: earthSpaceCh4Databank
  },
  {
    id: 'th_es_ch5',
    chapterNumber: 5,
    titleEn: "Unit 5: Observational Astronomy, Telescopes & Astrophysics Spectroscopy",
    titleAr: "الباب الخامس: الفلك الرصدي، التلسكوبات الفضائية والتحليل الطيفي",
    descriptionEn: "Electromagnetic multi-wavelength windows, optical refracting/reflecting telescopes, angular resolution, adaptive optics, space observatories, Kirchhoff laws, and Doppler shift.",
    descriptionAr: "النوافذ الكهرومغناطيسية لرصد الكون، التلسكوبات الكاسرة والعاكسة، الفصل الزاوي، البصريات التكيفية، تلسكوبا هابل وجيمس ويب، قوانين كيرشوف، وتأثير دوبلر الفلكي.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'remote_sensing_spectroscopy',
        titleEn: "Astrophysical Spectroscopy & Astronomical Optics Lab",
        titleAr: "استوديو التحليل الطيفي والبصريات الفلكية المتقدمة",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch5_l1',
        titleEn: "Astronomical Telescopes, Angular Resolution & Adaptive Optics",
        titleAr: "التلسكوبات الفلكية، الاستبانة الزاوية وتقنيات البصريات التكيفية",
        summaryEn: "Light gathering power, diffraction-limited resolution, Rayleigh criterion, Cassegrain reflectors, and deformable mirror atmospheric correction.",
        summaryAr: "قدرة تجميع الضوء، حد الحيود الضوئي، معيار ريليه، تلسكوبات كاسيجرين العاكسة، والبصريات التكيفية لتصحيح اضطرابات الغلاف الجوي.",
        theoryContentEn: "### 1. Optical Telescope Fundamentals\n- **Light Gathering Power:** Scales with the primary collecting aperture area: $\\text{LGP} \\propto D^2$.\n- **Diffraction Limit (Rayleigh Criterion):** Minimum angular separation $\\theta$ resolvable at wavelength $\\lambda$ by aperture $D$:\n$$\\theta = 1.22 \\frac{\\lambda}{D} \\text{ [radians]}$$\n\n### 2. Adaptive Optics (AO)\n- Earth's atmospheric turbulence breaks light waves into speckles, limiting angular resolution to $\\sim 0.5\\text{--}1.0''$ (seeing limit).\n- Adaptive optics uses wavefront sensors, artificial laser guide stars, and high-frequency deformable mirrors ($>1\\text{ kHz}$) to cancel phase distortions in real time.",
        theoryContentAr: "### ١. أسس التلسكوبات البصرية الفلكية\n- **قدرة تجميع الضوء:** تتناسب طردياً مع مساحة مرآة أو عدسة التلسكوب الرئيسية: $\\text{LGP} \\propto D^2$.\n- **حد الحيود ومعيار ريليه للقدرة التمييزية:** أدنى زاوية فصل $\\theta$ يمكن تمييزها بين جرمين عند طول موجي $\\lambda$ باستخدام فتحة قطرها $D$:\n$$\\theta = 1.22 \\frac{\\lambda}{D} \\text{ [زاوية نصف قطرية]}$$\n\n### ٢. منظومات البصريات التكيفية (Adaptive Optics)\n- تسبب التيارات الهوائية في الغلاف الجوي تشوهات بصرية تحد من دقة المراصد الأرضية (حد الرؤية الجوي).\n- تعالج البصريات التكيفية هذا التشوه بنجوم ليزرية اصطناعية ومرايا مرنة تتشوه مئات المرات في الثانية لتعويض اضطراب الموجة في الزمن الحقيقي.",
        formulas: [
          {
                    "labelEn": "Rayleigh Angular Resolution Criterion",
                    "labelAr": "معيار ريليه للفصل الزاوي",
                    "latex": "\\theta = 1.22 \\frac{\\lambda}{D}"
          },
          {
                    "labelEn": "Telescope Magnification Formula",
                    "labelAr": "قانون التكبير البصري للتلسكوب",
                    "latex": "M = \\frac{f_{\\text{objective}}}{f_{\\text{eyepiece}}}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH05-L1',
          pageRange: '85-105'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Astronomical Telescopes, Angular Resolution & Adaptive Optics",
          titleAr: "دليل المعلم التوجيهي: التلسكوبات الفلكية، الاستبانة الزاوية وتقنيات البصريات التكيفية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH05-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Astronomical Telescopes, Angular Resolution & Adaptive Optics",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ التلسكوبات الفلكية، الاستبانة الزاوية وتقنيات البصريات التكيفية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch5_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'remote_sensing_spectroscopy',
          titleEn: 'Astrophysical Spectroscopy & Astronomical Optics Lab',
          titleAr: 'استوديو التحليل الطيفي والبصريات الفلكية المتقدمة',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch5_l2',
        titleEn: "Kirchhoff's Laws of Spectroscopy & Doppler Radial Velocities",
        titleAr: "قوانين كيرشوف الطيفية، التحليل العنصري والسرعات الشعاعية الدوبلرية",
        summaryEn: "Continuous, emission, and absorption spectra, atomic electronic transitions, stellar composition identification, and Doppler radial velocity shifts.",
        summaryAr: "أطياف الانبعاث والامتصاص المستمرة والخطية، بصمات العناصر في النجوم، وتأثير دوبلر لحساب السرعات الشعاعية وحركة الأجرام.",
        theoryContentEn: "### 1. Kirchhoff's Laws of Spectroscopy\n1. **Continuous Spectrum:** Emitted by hot, dense solid, liquid, or high-pressure gas.\n2. **Emission Line Spectrum:** Emitted by hot, low-density gas, displaying bright lines characteristic of atomic transitions.\n3. **Absorption Line Spectrum:** Formed when continuous light passes through cooler, low-density gas, creating dark Fraunhofer lines.\n\n### 2. Doppler Shift & Velocity Measurements\n- Radial motion shifts spectral lines according to:\n$$z = \\frac{\\Delta \\lambda}{\\lambda_0} = \\frac{v_r}{c}$$\n- Approaching sources produce Blueshift ($z < 0$); receding sources produce Redshift ($z > 0$).",
        theoryContentAr: "### ١. قوانين كيرشوف للتحليل الطيفي\n١. **الطيف المستمر:** ينبعث من الأجسام الصلبة أو السوائل أو الغازات الكثيفة شديدة السخونة.\n٢. **طيف الانبعاث الخطي:** يصدر عن الغازات الساخنة منخفضة الكثافة، ويظهر كخطوط ملونة براقة مميزة لذرات كل عنصر.\n٣. **طيف الامتصاص الخطي:** يتشكل عند مرور ضوء مستمر عبر غاز أبرد، فتظهر خطوط مظلمة (خطوط فراونهوفر) تدل على التركيب العنصري للنجم.\n\n### ٢. تأثير دوبلر وحساب السرعة الشعاعية\n- انزياح الخطوط الطيفية يحسب بالعلاقة:\n$$z = \\frac{\\Delta \\lambda}{\\lambda_0} = \\frac{v_r}{c}$$\n- انزياح نحو الأزرق يعني اقتراب الجرم ($z < 0$)، وانزياح نحو الأحمر يعني ابتعاد الجرم عن الراصد ($z > 0$).",
        formulas: [
          {
                    "labelEn": "Doppler Radial Velocity Equation",
                    "labelAr": "معادلة دوبلر للسرعة الشعاعية",
                    "latex": "z = \\frac{\\Delta \\lambda}{\\lambda_0} = \\frac{v_r}{c}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH05-L2',
          pageRange: '85-105'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Kirchhoff's Laws of Spectroscopy & Doppler Radial Velocities",
          titleAr: "دليل المعلم التوجيهي: قوانين كيرشوف الطيفية، التحليل العنصري والسرعات الشعاعية الدوبلرية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH05-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Kirchhoff's Laws of Spectroscopy & Doppler Radial Velocities",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ قوانين كيرشوف الطيفية، التحليل العنصري والسرعات الشعاعية الدوبلرية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch5_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'remote_sensing_spectroscopy',
          titleEn: 'Astrophysical Spectroscopy & Astronomical Optics Lab',
          titleAr: 'استوديو التحليل الطيفي والبصريات الفلكية المتقدمة',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh5SolvedExamples,
    exerciseProblems: earthSpaceCh5Exercises,
    databank: earthSpaceCh5Databank
  },
  {
    id: 'th_es_ch6',
    chapterNumber: 6,
    titleEn: "Unit 6: Stellar Astrophysics, Fusion Cycles & The H-R Diagram",
    titleAr: "الباب السادس: الفيزياء الفلكية للنجوم، الاندماج ومخطط هرتزبرونغ-راسل",
    descriptionEn: "Jeans instability star birth, hydrostatic equilibrium, Stefan-Boltzmann luminosity, Wien displacement law, Morgan-Keenan spectral types, H-R diagram, and stellar lifetimes.",
    descriptionAr: "ولادة النجوم وعدم استقرار جينز، الاتزان الهيدروستاتيكي، قانون ستيفان-بولتزمان للمعان، قانون فين، التصنيف الطيفي النجمي، مخطط هرتزبرونغ-راسل وأعمار النجوم.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'stellar_lifecycle',
        titleEn: "Hertzsprung-Russell (H-R) Stellar Evolution Playground",
        titleAr: "استوديو مخطط هرتزبرونغ-راسل والتطور الفيزيائي للنجوم",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch6_l1',
        titleEn: "Star Formation, Hydrostatic Equilibrium & Blackbody Radiation Laws",
        titleAr: "تخلق النجوم، الاتزان الهيدروستاتيكي وقوانين إشعاع الجسم الأسود",
        summaryEn: "Molecular cloud gravitational collapse, Jeans criterion, hydrostatic stellar pressure balance, Stefan-Boltzmann luminosity, and Wien displacement.",
        summaryAr: "انهيار السحب الجزيئية تحت الجاذبية، كتلة جينز، الاتزان الهيدروستاتيكي للنجم، قانون ستيفان-بولتزمان للمعان، وقانون فين لدرجة الحرارة.",
        theoryContentEn: "### 1. Stellar Formation & Hydrostatic Equilibrium\n- **Jeans Mass ($M_J$):** Critical mass above which thermal gas pressure cannot support an interstellar cloud against self-gravitational collapse:\n$$M_J \\propto T^{3/2} \\rho^{-1/2}$$\n- **Hydrostatic Balance:** Every spherical shell in a stable star balances gravity with outward pressure gradient:\n$$\\frac{dP}{dr} = -\\frac{G M(r) \\rho(r)}{r^2}$$\n\n### 2. Fundamental Blackbody Radiation Laws\n- **Wien's Displacement Law:** Relates surface effective temperature to peak emission wavelength:\n$$\\lambda_{\\max} T = b = 2.8978 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$$\n- **Stefan-Boltzmann Luminosity:** Total power radiated across a spherical stellar surface of radius $R$:\n$$L = 4\\pi R^2 \\sigma T_{\\text{eff}}^4$$",
        theoryContentAr: "### ١. ولادة النجوم والاتزان الهيدروستاتيكي\n- **كتلة جينز الحرجة ($M_J$):** الحد الأدنى لكتلة السحابة الغازية الباردة التي تبدأ عندها بالانهيار التثاقلي وتكوين نجم أولي:\n$$M_J \\propto T^{3/2} \\rho^{-1/2}$$\n- **معادلة الاتزان الهيدروستاتيكي:** تتوازن قوة الجاذبية الساحبة نحو المركز تماماً مع التدرج في ضغط الغاز والإشعاع الدافع للخارج:\n$$\\frac{dP}{dr} = -\\frac{G M(r) \\rho(r)}{r^2}$$\n\n### ٢. قوانين إشعاع الجسم الأسود الفلكية\n- **قانون فين للإزاحة:** يربط بين درجة حرارة سطح النجم وذروة الطول الموجي المشع:\n$$\\lambda_{\\max} T = 2.8978 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$$\n- **قانون ستيفان-بولتزمان للمعان النجمي:** إجمالي الطاقة الإشعاعية الصادرة من كامل مساحة سطح النجم:\n$$L = 4\\pi R^2 \\sigma T_{\\text{eff}}^4$$",
        formulas: [
          {
                    "labelEn": "Stefan-Boltzmann Stellar Luminosity",
                    "labelAr": "قانون ستيفان-بولتزمان للمعان النجمي",
                    "latex": "L = 4\\pi R^2 \\sigma T_{\\text{eff}}^4"
          },
          {
                    "labelEn": "Wien's Displacement Law",
                    "labelAr": "قانون فين لذروة الإشعاع النجمي",
                    "latex": "\\lambda_{\\max} T = 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH06-L1',
          pageRange: '105-125'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Star Formation, Hydrostatic Equilibrium & Blackbody Radiation Laws",
          titleAr: "دليل المعلم التوجيهي: تخلق النجوم، الاتزان الهيدروستاتيكي وقوانين إشعاع الجسم الأسود",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH06-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Star Formation, Hydrostatic Equilibrium & Blackbody Radiation Laws",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ تخلق النجوم، الاتزان الهيدروستاتيكي وقوانين إشعاع الجسم الأسود",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch6_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'stellar_lifecycle',
          titleEn: 'Hertzsprung-Russell (H-R) Stellar Evolution Playground',
          titleAr: 'استوديو مخطط هرتزبرونغ-راسل والتطور الفيزيائي للنجوم',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch6_l2',
        titleEn: "The Hertzsprung-Russell Diagram, Spectral Classes & Stellar Lifetimes",
        titleAr: "مخطط هرتزبرونغ-راسل (H-R)، الفئات الطيفية وأعمار نجوم التتابع الرئيسي",
        summaryEn: "OBAFGKM spectral classification, Morgan-Keenan luminosity classes, Main Sequence mass-luminosity scaling ($L \\propto M^{3.5}$), and stellar life expectancy.",
        summaryAr: "التصنيف الطيفي (OBAFGKM)، فئات اللمعان، علاقة الكتلة باللمعان ($L \\propto M^{3.5}$)، وتقدير عمر النجم على التتابع الرئيسي.",
        theoryContentEn: "### 1. The Hertzsprung-Russell (H-R) Diagram\n- Plots stellar luminosity ($L/L_\\odot$) or absolute magnitude versus effective surface temperature or spectral type (O, B, A, F, G, K, M).\n- **Key Branches:**\n  - *Main Sequence (V):* Core hydrogen burning equilibrium band (~90% of a star’s life).\n  - *Red Giants & Supergiants (III, I):* Expanded, cool post-main-sequence envelopes.\n  - *White Dwarfs:* Exposed, degenerate stellar cores lacking active fusion.\n\n### 2. Mass-Luminosity Scaling & Lifetimes\n- For main-sequence stars, luminosity scales steeply with mass:\n$$L \\propto M^{3.5}$$\n- Main-sequence lifetime is proportional to available fuel divided by luminosity consumption rate:\n$$\\tau_{\\text{MS}} \\approx 10^{10} \\left(\\frac{M_\\odot}{M}\\right)^{2.5} \\text{ years}$$",
        theoryContentAr: "### ١. مخطط هرتزبرونغ-راسل (H-R)\n- رسم بياني محوري يربط لمعان النجوم ($L/L_\\odot$) بدرجة حرارتها وفئتها الطيفية (O, B, A, F, G, K, M).\n- **المجموعات النجمية الرئيسية:**\n  - *التتابع الرئيسي (فئة V):* مرحلة استقرار حرق الهيدروجين في النواة (تمثل 90% من عمر النجم).\n  - *العمالقة والعمالقة الفائقة (فئات III و I):* نجوم مسنة منتفخة بعد استنفاد هيدروجين النواة.\n  - *الأقزام البيضاء:* نوى متبقية فائقة الكثافة بدون تفاعلات اندماج جارية.\n\n### ٢. علاقة الكتلة باللمعان وعمر النجم\n- يتناسب لمعان نجوم التتابع الرئيسي طردياً مع القوة 3.5 لكتلتها:\n$$L \\propto M^{3.5}$$\n- يحسب عمر النجم على التتابع الرئيسي بالعلاقة:\n$$\\tau_{\\text{MS}} \\approx 10^{10} \\left(\\frac{M_\\odot}{M}\\right)^{2.5} \\text{ سنة}$$",
        formulas: [
          {
                    "labelEn": "Stellar Mass-Luminosity Relation",
                    "labelAr": "علاقة الكتلة باللمعان لنجوم التتابع الرئيسي",
                    "latex": "L \\propto M^{3.5}"
          },
          {
                    "labelEn": "Main Sequence Stellar Lifetime",
                    "labelAr": "عمر النجم على التتابع الرئيسي",
                    "latex": "\\tau_{\\text{MS}} \\approx 10^{10} \\left(\\frac{M_\\odot}{M}\\right)^{2.5} \\text{ yr}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH06-L2',
          pageRange: '105-125'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: The Hertzsprung-Russell Diagram, Spectral Classes & Stellar Lifetimes",
          titleAr: "دليل المعلم التوجيهي: مخطط هرتزبرونغ-راسل (H-R)، الفئات الطيفية وأعمار نجوم التتابع الرئيسي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH06-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of The Hertzsprung-Russell Diagram, Spectral Classes & Stellar Lifetimes",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ مخطط هرتزبرونغ-راسل (H-R)، الفئات الطيفية وأعمار نجوم التتابع الرئيسي",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch6_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'stellar_lifecycle',
          titleEn: 'Hertzsprung-Russell (H-R) Stellar Evolution Playground',
          titleAr: 'استوديو مخطط هرتزبرونغ-راسل والتطور الفيزيائي للنجوم',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh6SolvedExamples,
    exerciseProblems: earthSpaceCh6Exercises,
    databank: earthSpaceCh6Databank
  },
  {
    id: 'th_es_ch7',
    chapterNumber: 7,
    titleEn: "Unit 7: Stellar Evolution, Supernovae & Compact Remnants",
    titleAr: "الباب السابع: تطور النجوم، المستعرات العظمى والأجرام المدمجة",
    descriptionEn: "Red giant phases, planetary nebulae, white dwarf degeneracy, Chandrasekhar limit, core-collapse Type II supernovae, neutron stars, pulsars, TOV limit, and black holes.",
    descriptionAr: "مراحل العمالقة الحمر، السدم الكوكبية، ضغط الانفطار الإلكتروني، حد شاندراسيخار، مستعرات الانهيار القلبي، النجوم النيوترونية، النوابض، وحد TOV والثقوب السوداء.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'stellar_lifecycle',
        titleEn: "Supernovae, Neutron Stars & Black Hole Metric Simulator",
        titleAr: "استوديو المستعرات العظمى والنجوم النيوترونية ومترية الثقوب السوداء",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch7_l1',
        titleEn: "Low-Mass Star Endpoints: Red Giants, Planetary Nebulae & White Dwarfs",
        titleAr: "نهاية النجوم منخفضة الكتلة: العمالقة الحمر، السدم الكوكبية والأقزام البيضاء",
        summaryEn: "Hydrogen shell burning, helium flash, asymptotic giant branch, planetary nebula ejection, and the Chandrasekhar $1.44 M_\\odot$ limit.",
        summaryAr: "حرق الهيدروجين في القشور، وميض الهيليوم، قذف الأغلفة الخارجية كسديم كوكبي، واستقرار القزم الأبيض عند حد شاندراسيخار (1.44 كتلة شمسية).",
        theoryContentEn: "### 1. Evolution of Solar-Mass Stars ($M < 8 M_\\odot$)\n- Following core hydrogen exhaustion, the core contracts while the envelope expands dramatically into a Red Giant.\n- Core helium ignites (Helium Flash for $M < 2 M_\\odot$) via the triple-alpha process ($3\\,^4\\text{He} \\to \\,^{12}\\text{C}$).\n- On the Asymptotic Giant Branch (AGB), thermal pulses blow away the outer atmosphere, forming a glowing Planetary Nebula.\n\n### 2. White Dwarfs & The Chandrasekhar Limit\n- The exposed degenerate core forms a White Dwarf, supported against gravity exclusively by quantum electron degeneracy pressure.\n- **Chandrasekhar Mass Limit:** Beyond $1.44 M_\\odot$, relativistic electron velocities approach the speed of light, degeneracy pressure fails, and the star must collapse further:\n$$M_{\\text{Ch}} \\approx 1.44 M_\\odot$$",
        theoryContentAr: "### ١. التطور النهائي للنجوم متوسطة ومنخفضة الكتلة ($M < 8 M_\\odot$)\n- بعد نفاد هيدروجين النواة، تنكمش النواة ويتمدد الغلاف الخارجي ليصبح النجم عملاقاً أحمر.\n- يشتعل الهيليوم في النواة عبر تفاعل ألفا الثلاثي ($3\\,^4\\text{He} \\to \\,^{12}\\text{C}$) مصنعاً الكربون والأكسجين.\n- تقذف النبضات الحرارية الأغلفة الخارجية في الفضاء لتصنع سديماً كوكبياً يضيء بإشعاع النواة المتبقية.\n\n### ٢. الأقزام البيضاء وحد شاندراسيخار\n- تتحول النواة المكشوفة إلى قزم أبيض فائق الكثافة، يدعمه ضغط الانفطار الإلكتروني الكمي الناتج عن مبدأ باولي للاستبعاد.\n- **حد شاندراسيخار (1.44 كتلة شمسية):** أقصى كتلة فيزيائية يمكن للقزم الأبيض تحملها؛ وإذا تجاوزتها الكتلة ينهار القزم حتماً:\n$$M_{\\text{Ch}} \\approx 1.44 M_\\odot$$",
        formulas: [
          {
                    "labelEn": "Chandrasekhar Upper Mass Limit",
                    "labelAr": "حد شاندراسيخار لكتلة الأقزام البيضاء",
                    "latex": "M_{\\text{Ch}} \\approx 1.44 M_\\odot"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH07-L1',
          pageRange: '125-145'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Low-Mass Star Endpoints: Red Giants, Planetary Nebulae & White Dwarfs",
          titleAr: "دليل المعلم التوجيهي: نهاية النجوم منخفضة الكتلة: العمالقة الحمر، السدم الكوكبية والأقزام البيضاء",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH07-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Low-Mass Star Endpoints: Red Giants, Planetary Nebulae & White Dwarfs",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ نهاية النجوم منخفضة الكتلة: العمالقة الحمر، السدم الكوكبية والأقزام البيضاء",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch7_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'stellar_lifecycle',
          titleEn: 'Supernovae, Neutron Stars & Black Hole Metric Simulator',
          titleAr: 'استوديو المستعرات العظمى والنجوم النيوترونية ومترية الثقوب السوداء',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch7_l2',
        titleEn: "Core Collapse Supernovae, Neutron Stars & The Schwarzschild Black Hole",
        titleAr: "مستعرات الانهيار القلبي، النجوم النيوترونية وثقوب شفارتزشيلد السوداء",
        summaryEn: "Silicon burning to iron core, photodisintegration, neutron star degeneracy, pulsars, TOV limit, and the Schwarzschild event horizon radius.",
        summaryAr: "تخليق الحديد، الانهيار الكارثي للقلب، النجوم النيوترونية، حد تولمان-أوبنهايمر-فولكوف، ونصف قطر أفق الحدث لشفارتزشيلد.",
        theoryContentEn: "### 1. Core-Collapse (Type II) Supernovae\n- Massive stars fuse silicon into iron-56. Because fusing iron is endothermic, the core loses radiation support and collapses in milliseconds.\n- Electron capture ($p + e^- \\to n + \\nu_e$) converts the core into degenerate neutrons, releasing a titanic burst of neutrinos and blowing the star apart in a Type II Supernova.\n\n### 2. Neutron Stars & Black Holes\n- **Neutron Star:** Supported by neutron degeneracy pressure; typical radius $\\sim 10\\text{--}12\\text{ km}$, density $\\sim 10^{14}\\text{ g/cm}^3$.\n- **TOV Limit ($2.1\\text{--}2.3 M_\\odot$):** Maximum mass supported by neutron degeneracy before collapsing into a black hole.\n- **Schwarzschild Radius ($R_s$):** Boundary of the event horizon for a non-rotating black hole:\n$$R_s = \\frac{2GM}{c^2}$$",
        theoryContentAr: "### ١. مستعرات الانهيار القلبي (Supernovae Type II)\n- تدمج النجوم الضخمة السيليكون لتصنع قلباً من الحديد-56، ولأن اندماج الحديد يمتص الطاقة، يفقد النجم دعمه الإشعاعي وينهار قلبه في أجزاء من الثانية.\n- يؤدي اقتناص الإلكترونات ($p + e^- \\to n + \\nu_e$) إلى تحول النواة إلى نيوترونات نقية مطلقة طوفاناً نيوترينياً يفجر النجم في مستعر أعظم.\n\n### ٢. النجوم النيوترونية والثقوب السوداء\n- **النجوم النيوترونية:** أجرام مدمجة يدعمها ضغط الانفطار النيوتروني، بقطر لا يتعدى 20 كم وكثافة نووية خارقة.\n- **حد TOV ($2.1\\text{--}2.3 M_\\odot$):** أقصى كتلة للنجوم النيوترونية قبل الانهيار الحتمي إلى ثقب أسود.\n- **نصف قطر شفارتزشيلد (أفق الحدث):** المسافة الحرجة التي لا يفلت منها الضوء:\n$$R_s = \\frac{2GM}{c^2}$$",
        formulas: [
          {
                    "labelEn": "Schwarzschild Event Horizon Radius",
                    "labelAr": "نصف قطر أفق الحدث لشفارتزشيلد",
                    "latex": "R_s = \\frac{2GM}{c^2}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH07-L2',
          pageRange: '125-145'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Core Collapse Supernovae, Neutron Stars & The Schwarzschild Black Hole",
          titleAr: "دليل المعلم التوجيهي: مستعرات الانهيار القلبي، النجوم النيوترونية وثقوب شفارتزشيلد السوداء",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH07-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Core Collapse Supernovae, Neutron Stars & The Schwarzschild Black Hole",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ مستعرات الانهيار القلبي، النجوم النيوترونية وثقوب شفارتزشيلد السوداء",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch7_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'stellar_lifecycle',
          titleEn: 'Supernovae, Neutron Stars & Black Hole Metric Simulator',
          titleAr: 'استوديو المستعرات العظمى والنجوم النيوترونية ومترية الثقوب السوداء',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh7SolvedExamples,
    exerciseProblems: earthSpaceCh7Exercises,
    databank: earthSpaceCh7Databank
  },
  {
    id: 'th_es_ch8',
    chapterNumber: 8,
    titleEn: "Unit 8: Galactic Dynamics, Dark Matter & Physical Cosmology",
    titleAr: "الباب الثامن: ديناميكا المجرات، المادة المظلمة وعلم الكونيات",
    descriptionEn: "Milky Way morphology, supermassive black hole Sgr A*, Hubble tuning fork classification, flat galaxy rotation curves, dark matter halos, Hubble-Lemaître law, and cosmic acceleration.",
    descriptionAr: "بنية مجرة درب التبانة، الثقب الأسود الرامي أ*، تصنيف هابل للمجرات، منحنيات دوران المجرات المسطحة، المادة المظلمة، قانون هابل، وتمدد الكون المتسارع والطاقة المظلمة.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'space_orbit_sim',
        titleEn: "Cosmological Expansion & Dark Matter Halo Simulator",
        titleAr: "استوديو تمدد الكون وهالات المادة المظلمة الكونية",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch8_l1',
        titleEn: "Galactic Anatomy, Supermassive Black Holes & Dark Matter Evidence",
        titleAr: "تشريح المجرات، الثقوب السوداء الفائقة والأدلة الرصدية للمادة المظلمة",
        summaryEn: "Milky Way spiral structure, central supermassive black hole Sagittarius A*, flat galactic rotation curves, and the missing dark matter halo mass.",
        summaryAr: "أذرع مجرة درب التبانة، الثقب الأسود الفائق في مركز المجرة (Sgr A*)، منحنيات الدوران المسطحة، وهالة المادة المظلمة غير المرئية.",
        theoryContentEn: "### 1. Anatomy of the Milky Way\n- **Components:** Central bulge with barred core, thin disk ($h_z \\approx 300\\text{ pc}$) containing spiral arms and gas, thick disk, and an extended stellar halo with globular clusters.\n- **Sagittarius A*:** Orbiting stellar telemetry (e.g., star S2) definitively proves a central supermassive black hole with mass $M = (4.15 \\pm 0.13) \\times 10^6 M_\\odot$.\n\n### 2. Flat Rotation Curves & Dark Matter\n- Classical Keplerian expectation predicts orbital velocity drops with radius outside visible mass: $v(r) \\propto r^{-1/2}$.\n- Observations by Vera Rubin showed $v(r) \\approx \\text{constant}$ out to large radii, requiring a pervasive, non-luminous Dark Matter Halo enclosing the galaxy with mass profile $M(r) \\propto r$.",
        theoryContentAr: "### ١. بنية مجرة درب التبانة والمركز المجري\n- **المكونات:** حوصلة مركزية ذات قضيب نجمي، قرص حلزوني رقيق غني بالغاز والنجوم الشابة، وقرص سميك وهالة كروية تحتضن العناقيد النجمية.\n- **الثقب الأسود الفائق (الرامي أ*):** أكدت حركة مدارات النجوم القريبة (مثل النجم S2) وجود ثقب أسود عملاق بكتلة تعادل 4.15 مليون كتلة شمسية.\n\n### ٢. منحنيات الدوران المسطحة ودليل المادة المظلمة\n- يتوقع القانون الكبلري هبوط سرعة النجوم عند أطراف المجرة وفق: $v(r) \\propto r^{-1/2}$.\n- أثبتت الأرصاد الفلكية ثبات السرعات المدارية ($v(r) \\approx \\text{ثابت}$)، مما برهن وجود هالة عملاقة غير مرئية من المادة المظلمة تحيط بالمجرة وتزيد كتلتها خطياً مع البعد.",
        formulas: [
          {
                    "labelEn": "Enclosed Mass from Galactic Rotation Speed",
                    "labelAr": "الكتلة المحتواة بدلالة سرعة دوران المجرة",
                    "latex": "M(r) = \\frac{v^2 r}{G}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH08-L1',
          pageRange: '145-165'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Galactic Anatomy, Supermassive Black Holes & Dark Matter Evidence",
          titleAr: "دليل المعلم التوجيهي: تشريح المجرات، الثقوب السوداء الفائقة والأدلة الرصدية للمادة المظلمة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH08-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Galactic Anatomy, Supermassive Black Holes & Dark Matter Evidence",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ تشريح المجرات، الثقوب السوداء الفائقة والأدلة الرصدية للمادة المظلمة",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch8_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'space_orbit_sim',
          titleEn: 'Cosmological Expansion & Dark Matter Halo Simulator',
          titleAr: 'استوديو تمدد الكون وهالات المادة المظلمة الكونية',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch8_l2',
        titleEn: "Hubble-Lemaître Cosmic Expansion, The Big Bang & Dark Energy",
        titleAr: "قانون هابل-لومتر للتمدد الكوني، الانفجار العظيم والطاقة المظلمة",
        summaryEn: "Hubble expansion velocity ($v = H_0 d$), Hubble time cosmic age estimate, Cosmic Microwave Background, and accelerated cosmic expansion via dark energy.",
        summaryAr: "سرعة التباعد الكوني في قانون هابل ($v = H_0 d$)، عمر الكون وزمن هابل، إشعاع الخلفية الكونية، وتسارع التمدد الكوني بالطاقة المظلمة.",
        theoryContentEn: "### 1. The Hubble-Lemaître Law\n- Distant galaxies recede with velocities proportional to distance:\n$$v = H_0 d$$\nwhere $H_0 \\approx 70\\text{ km/s/Mpc}$.\n- **Hubble Time:** Inversion provides an order-of-magnitude cosmic age: $t_H = \\frac{1}{H_0} \\approx 14\\text{ billion years}$.\n\n### 2. Cosmic Microwave Background & Dark Energy\n- **CMBR:** Remnant radiation from recombination ($z \\approx 1100$, 380,000 years after Big Bang), uniformly observed at $T = 2.725\\text{ K}$.\n- **Accelerating Universe & Dark Energy:** Distant Type Ia supernovae observations revealed cosmic expansion is accelerating, explained by positive cosmological constant $\\Lambda$ (Dark Energy $\\approx 68\\%$, Dark Matter $\\approx 27\\%$, Baryonic Matter $\\approx 5\\%$).",
        theoryContentAr: "### ١. قانون هابل-لومتر للتمدد الكوني\n- تتباعد المجرات السحيقة بسرعات تتناسب طردياً مع بعدها عنا:\n$$v = H_0 d$$\nحيث $H_0 \\approx 70$ كم/ث/ميجافرسخ يمثل ثابت هابل التوسعي.\n- **زمن هابل:** يعطي تقديراً أولياً لعمر الكون: $t_H = \\frac{1}{H_0} \\approx 14$ مليار سنة.\n\n### ٢. إشعاع الخلفية الكونية الميكروويفي والطاقة المظلمة\n- **إشعاع الخلفية الكونية (CMBR):** الشفق الحراري الصادر عند تحرر الفوتونات بعد 380 ألف سنة من الانفجار العظيم، ويرصد اليوم عند حرارة متجانسة $T = 2.725$ كلفن.\n- **تسارع التمدد والطاقة المظلمة:** كشفت أرصاد المستعرات العظمى عن تسارع تمدد الكون بفعل الطاقة المظلمة التي تشغل نحو 68% من محتوى الكون.",
        formulas: [
          {
                    "labelEn": "Hubble-Lemaître Law",
                    "labelAr": "قانون هابل-لومتر للتمدد الكوني",
                    "latex": "v = H_0 \\cdot d"
          },
          {
                    "labelEn": "Hubble Time Cosmic Age Approximation",
                    "labelAr": "تقدير عمر الكون بزمن هابل",
                    "latex": "t_H = \\frac{1}{H_0} \\approx 13.8 \\times 10^9 \\text{ yr}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH08-L2',
          pageRange: '145-165'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Hubble-Lemaître Cosmic Expansion, The Big Bang & Dark Energy",
          titleAr: "دليل المعلم التوجيهي: قانون هابل-لومتر للتمدد الكوني، الانفجار العظيم والطاقة المظلمة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH08-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Hubble-Lemaître Cosmic Expansion, The Big Bang & Dark Energy",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ قانون هابل-لومتر للتمدد الكوني، الانفجار العظيم والطاقة المظلمة",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch8_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'space_orbit_sim',
          titleEn: 'Cosmological Expansion & Dark Matter Halo Simulator',
          titleAr: 'استوديو تمدد الكون وهالات المادة المظلمة الكونية',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh8SolvedExamples,
    exerciseProblems: earthSpaceCh8Exercises,
    databank: earthSpaceCh8Databank
  },
  {
    id: 'th_es_ch9',
    chapterNumber: 9,
    titleEn: "Unit 9: Exoplanetary Systems, Habitability & Astrobiology",
    titleAr: "الباب التاسع: الكواكب الخارجية، نطاقات قابلية الحياة وعلم الأحياء الفلكي",
    descriptionEn: "Exoplanet detection techniques (transit photometry, radial velocity, microlensing, direct imaging), circumstellar habitable zone boundaries, transmission spectroscopy, and atmospheric biosignatures.",
    descriptionAr: "طرق رصد الكواكب الخارجية (العبور الضوئي، السرعة الشعاعية، العدسات الصغرية، التصوير المباشر)، النطاقات الصالحة للحياة، التحليل الطيفي لنفاذية الغلاف الجوي، والبصمات الحيوية.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'planetary_viewer',
        titleEn: "Exoplanet Transit Photometry & Habitable Zone Explorer",
        titleAr: "استوديو منحنيات العبور الضوئي ونطاقات قابلية الحياة للكواكب",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch9_l1',
        titleEn: "Exoplanet Detection: Transit Photometry & Radial Velocity Doppler Shifts",
        titleAr: "طرق اكتشاف الكواكب الخارجية: العبور الضوئي وإزاحات دوبلر الشعاعية",
        summaryEn: "Transit light curve dip depth ($Delta F/F = (R_p/R_*)^2$), orbital period determination, and stellar reflex wobble measured by Doppler spectroscopy.",
        summaryAr: "منحنيات العبور الضوئي وانخفاض اللمعان، تحديد نصف قطر الكوكب وفترته المدارية، وتذبذب النجم بالسرعة الشعاعية الدوبلرية.",
        theoryContentEn: "### 1. Transit Photometry\n- When an exoplanet passes directly in front of its host star along the observer’s line of sight, it dims the stellar flux by an amount proportional to the cross-sectional area ratio:\n$$\\frac{\\Delta F}{F} = \\left(\\frac{R_p}{R_*}\\right)^2$$\n- The orbital period $T$ is obtained from recurrent dips, allowing calculation of the orbital distance $a$ via Kepler's Third Law.\n\n### 2. Radial Velocity (Doppler Spectroscopy)\n- The orbiting planet exerts a gravitational tug, causing the host star to execute a tiny reflex orbit around the shared center of mass.\n- Measuring periodic Doppler wavelength shifts yields the stellar radial velocity amplitude $K$, providing the planet's minimum mass $M_p \\sin i$.",
        theoryContentAr: "### ١. طريقة العبور الضوئي الفلكي (Transit Photometry)\n- عند عبور الكوكب أمام قرص نجمه يحجب جزءاً من الضوء متسبباً في هبوط طفيف بلمعان النجم يتناسب مع مربع نسبي الأقطار:\n$$\\frac{\\Delta F}{F} = \\left(\\frac{R_p}{R_*}\\right)^2$$\n- تكشف المدة بين العبورات الدورية عن الزمن المداري $T$، مما يحدد نصف المحور الأكبر للمدار عبر قانون كبلر الثالث.\n\n### ٢. طريقة السرعة الشعاعية (Doppler Spectroscopy)\n- تشد جاذبية الكوكب نجمه الأم ليدور كلاهما حول مركز الكتلة المشترك.\n- يولد هذا التذبذب انزياحاً دورياً في الخطوط الطيفية للنجم بفعل تأثير دوبلر، مما يمكننا من حساب الحد الأدنى لكتلة الكوكب $M_p \\sin i$.",
        formulas: [
          {
                    "labelEn": "Transit Light Curve Depth",
                    "labelAr": "عمق هبوط منحنى العبور الضوئي للكوكب",
                    "latex": "\\frac{\\Delta F}{F} = \\left(\\frac{R_p}{R_*}\\right)^2"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH09-L1',
          pageRange: '165-185'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Exoplanet Detection: Transit Photometry & Radial Velocity Doppler Shifts",
          titleAr: "دليل المعلم التوجيهي: طرق اكتشاف الكواكب الخارجية: العبور الضوئي وإزاحات دوبلر الشعاعية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH09-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Exoplanet Detection: Transit Photometry & Radial Velocity Doppler Shifts",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ طرق اكتشاف الكواكب الخارجية: العبور الضوئي وإزاحات دوبلر الشعاعية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch9_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'planetary_viewer',
          titleEn: 'Exoplanet Transit Photometry & Habitable Zone Explorer',
          titleAr: 'استوديو منحنيات العبور الضوئي ونطاقات قابلية الحياة للكواكب',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch9_l2',
        titleEn: "Habitable Zones, Transmission Spectroscopy & Astrobiological Biosignatures",
        titleAr: "النطاقات الصالحة للحياة، طيف نفاذية الغلاف الجوي والبصمات الحيوية",
        summaryEn: "Circumstellar habitable zone boundaries, planetary climate equilibrium, transit transmission spectroscopy, and atmospheric chemical disequilibrium biosignatures.",
        summaryAr: "نطاق الحياة حول النجوم (Goldilocks Zone)، الاتزان المناخي الكوكبي، التحليل الطيفي لنفاذية الغازات، والبصمات الحيوية الكيميائية خارج الأرض.",
        theoryContentEn: "### 1. The Circumstellar Habitable Zone (HZ)\n- Defined as the orbital shell around a host star where incident flux allows liquid water to persist on an Earth-like planetary surface.\n- Scales outward with stellar luminosity: $d_{\\text{HZ}} \\propto \\sqrt{L_*}$.\n\n### 2. Transmission Spectroscopy & Biosignatures\n- During a transit, filtered starlight passing through the exoplanet's atmosphere imprints molecular absorption lines (e.g., $\\text{H}_2\\text{O}, \\text{CO}_2, \\text{CH}_4$).\n- **Biosignatures:** Atmospheric chemical disequilibrium—such as the simultaneous detection of oxidants ($\\text{O}_2 / \\text{O}_3$) and reducers ($\\text{CH}_4$)—provides strong evidence of active biological metabolisms.",
        theoryContentAr: "### ١. النطاق الصالح للحياة (Habitable Zone)\n- المدى المداري حول النجم الذي يتيح لسطح كوكب صخري الاحتفاظ بالمياه السائلة تحت ضغط جوي معتدل.\n- يتسع ويبتعد عن النجم طردياً مع الجذر التربيعي للمعان النجم: $d_{\\text{HZ}} \\propto \\sqrt{L_*}$.\n\n### ٢. طيف النفاذية الغلافية والبصمات الحيوية\n- ينفذ ضوء النجم عبر الغلاف الجوي للكوكب العابر تاركاً بصمات امتصاص تدل على وجود بخار الماء وثاني أكسيد الكربون والميثان.\n- **البصمات الحيوية (Biosignatures):** يعد وجود غازات في حالة عدم اتزان كيميائي دائم (كالأكسجين والميثان معاً) دليلاً قوياً على وجود نشاط حيوي يجددها باستمرار.",
        formulas: [
          {
                    "labelEn": "Habitable Zone Distance Scaling",
                    "labelAr": "مدى النطاق الصالح للحياة بدلالة لمعان النجم",
                    "latex": "d_{\\text{HZ}} \\approx \\sqrt{\\frac{L_*}{L_\\odot}} \\text{ [AU]}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH09-L2',
          pageRange: '165-185'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Habitable Zones, Transmission Spectroscopy & Astrobiological Biosignatures",
          titleAr: "دليل المعلم التوجيهي: النطاقات الصالحة للحياة، طيف نفاذية الغلاف الجوي والبصمات الحيوية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH09-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Habitable Zones, Transmission Spectroscopy & Astrobiological Biosignatures",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ النطاقات الصالحة للحياة، طيف نفاذية الغلاف الجوي والبصمات الحيوية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch9_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'planetary_viewer',
          titleEn: 'Exoplanet Transit Photometry & Habitable Zone Explorer',
          titleAr: 'استوديو منحنيات العبور الضوئي ونطاقات قابلية الحياة للكواكب',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh9SolvedExamples,
    exerciseProblems: earthSpaceCh9Exercises,
    databank: earthSpaceCh9Databank
  },
  {
    id: 'th_es_ch10',
    chapterNumber: 10,
    titleEn: "Unit 10: Space Exploration, Astrodynamics & Satellite Remote Sensing",
    titleAr: "الباب العاشر: استكشاف الفضاء، الملاحة الفلكية والاستشعار عن بعد",
    descriptionEn: "Tsiolkovsky rocket equation, multi-stage vehicles, Hohmann orbit transfers, Lagrange equilibrium points, gravity assists, satellite orbits (LEO, GEO, SSO), and multispectral remote sensing.",
    descriptionAr: "معادلة تسالكوفسكي الصاروخية، الصواريخ متعددة المراحل، مدارات هوهمان الانتقالية، نقاط لاغرانج، المقلاع الجاذبي، مدارات الأقمار الاصطناعية، والاستشعار عن بعد.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'hohmann_transfer',
        titleEn: "Astrodynamics, Hohmann Transfer & Satellite Orbit Calculator",
        titleAr: "استوديو الملاحة الفضائية ومدارات هوهمان ومناورات الأقمار",
        descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
        descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
      }
    ],
    lessons: [
      {
        id: 'th_es_ch10_l1',
        titleEn: "The Tsiolkovsky Rocket Equation, Staging & Hohmann Orbital Transfers",
        titleAr: "معادلة تسالكوفسكي الصاروخية، المراحل المتعددة ومدارات هوهمان الانتقالية",
        summaryEn: "Exhaust velocity, specific impulse, mass ratio, delta-v budgeting, and Hohmann minimum-energy elliptical transfer orbits between planets.",
        summaryAr: "سرعة نفث العادم، الدفع النوعي، نسبة الكتلة، ميزانية التغير في السرعة ($Delta v$)، ومدارات هوهمان الانتقالية الاقتصادية بين المدارات.",
        theoryContentEn: "### 1. The Tsiolkovsky Rocket Equation\n$$\\Delta v = v_e \\ln\\left(\\frac{m_0}{m_f}\\right) = I_{\\text{sp}} g_0 \\ln\\left(\\frac{m_0}{m_f}\\right)$$\nwhere $v_e$ is effective exhaust velocity, $I_{\\text{sp}}$ is specific impulse in seconds, $m_0$ is wet launch mass, and $m_f$ is dry payload/structure mass.\n- Multi-staging drops spent structural mass, drastically increasing final achievable $\\Delta v$.\n\n### 2. Hohmann Orbital Transfer Dynamics\n- Most fuel-efficient two-impulse transfer between two coplanar circular orbits ($r_1$ and $r_2$).\n- The transfer ellipse has semi-major axis:\n$$a_{\\text{trans}} = \\frac{r_1 + r_2}{2}$$\n- Required velocity burns at periapsis and apoapsis:\n$$\\Delta v_1 = \\sqrt{\\frac{GM}{r_1}} \\left(\\sqrt{\\frac{2r_2}{r_1 + r_2}} - 1\\right), \\quad \\Delta v_2 = \\sqrt{\\frac{GM}{r_2}} \\left(1 - \\sqrt{\\frac{2r_1}{r_1 + r_2}}\\right)$$",
        theoryContentAr: "### ١. معادلة تسالكوفسكي الصاروخية والمراحل\n$$\\Delta v = v_e \\ln\\left(\\frac{m_0}{m_f}\\right) = I_{\\text{sp}} g_0 \\ln\\left(\\frac{m_0}{m_f}\\right)$$\nحيث $v_e$ سرعة عادم المحرك، و$I_{\\text{sp}}$ الدفع النوعي بالثواني، و$m_0$ كتلة الإطلاق الكلية، و$m_f$ الكتلة النهائية الجافة.\n- التخلص من خزانات الوقود المستهلكة بالمراحل المتعددة يرفع نسبة الكتلة ويزيد السرعة المكتسبة النهائية بشكل كبير.\n\n### ٢. ديناميكا مدار هوهمان الانتقالي (Hohmann Transfer)\n- أكفأ مسار مداري بنبضتي دفع لنقل مركبة بين مدارين دائريين متحدي المستوى بنصفي قطرين $r_1$ و $r_2$.\n- نصف المحور الأكبر للمدار الإهليلجي الانتقالي:\n$$a_{\\text{trans}} = \\frac{r_1 + r_2}{2}$$\n- يحسب الدفعان المداريان عند الحضيض والأوج لتعديل وتثبيت السرعة المدارية المطلوبة.",
        formulas: [
          {
                    "labelEn": "Tsiolkovsky Rocket Equation",
                    "labelAr": "معادلة تسالكوفسكي الصاروخية",
                    "latex": "\\Delta v = I_{\\text{sp}} g_0 \\ln\\left(\\frac{m_0}{m_f}\\right)"
          },
          {
                    "labelEn": "Hohmann Semi-Major Axis",
                    "labelAr": "نصف المحور الأكبر لمدار هوهمان الانتقالي",
                    "latex": "a_{\\text{trans}} = \\frac{r_1 + r_2}{2}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH10-L1',
          pageRange: '185-205'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: The Tsiolkovsky Rocket Equation, Staging & Hohmann Orbital Transfers",
          titleAr: "دليل المعلم التوجيهي: معادلة تسالكوفسكي الصاروخية، المراحل المتعددة ومدارات هوهمان الانتقالية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH10-L1',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of The Tsiolkovsky Rocket Equation, Staging & Hohmann Orbital Transfers",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ معادلة تسالكوفسكي الصاروخية، المراحل المتعددة ومدارات هوهمان الانتقالية",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch10_l1_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'hohmann_transfer',
          titleEn: 'Astrodynamics, Hohmann Transfer & Satellite Orbit Calculator',
          titleAr: 'استوديو الملاحة الفضائية ومدارات هوهمان ومناورات الأقمار',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
      {
        id: 'th_es_ch10_l2',
        titleEn: "Lagrange Points, Gravity Assists & Satellite Earth Observation (NDVI)",
        titleAr: "نقاط لاغرانج، مناورات المقلاع الجاذبي والاستشعار عن بعد (مؤشر NDVI)",
        summaryEn: "Three-body equilibrium points ($L_1\\text{--}L_5$), gravitational slingshots, Sun-synchronous orbits, and multispectral remote sensing indices.",
        summaryAr: "نقاط لاغرانج الخمس، مناورة المقلاع الجاذبي لكسب السرعة، المدار المتزامن مع الشمس، وتطبيقات مؤشر الغطاء النباتي (NDVI).",
        theoryContentEn: "### 1. Lagrange Equilibrium Points & Slingshot Maneuvers\n- In the circular restricted three-body problem, five Lagrange points ($L_1\\text{--}L_5$) balance combined gravity and centrifugal acceleration.\n- **Gravity Assist (Slingshot):** A spacecraft flying through a moving planet's gravitational well gains heliocentric momentum in an elastic hyperbolic encounter, accelerating deep-space probes without propellant consumption.\n\n### 2. Earth Remote Sensing & NDVI\n- **Sun-Synchronous Orbits (SSO):** Precess at 360°/year, passing over given ground targets at constant local solar time.\n- **Normalized Difference Vegetation Index (NDVI):** Exploits chlorophyll's high near-infrared (NIR) reflectance and red absorption:\n$$\\text{NDVI} = \\frac{\\text{NIR} - \\text{Red}}{\\text{NIR} + \\text{Red}}$$",
        theoryContentAr: "### ١. نقاط لاغرانج التوازنية ومناورات المقلاع الجاذبي\n- في مسألة الأجسام الثلاثة، توجد خمس نقاط توازن فضائية ($L_1\\text{--}L_5$) تتوازن عندها قوى الجاذبية مع القوة الطاردة المركزية.\n- **المقلاع الجاذبي (Gravity Assist):** مناورة تكتسب فيها المركبة سرعة شمسية إضافية باقتناص جزء يسير من الزخم المداري للكواكب العملاقة دون استهلاك وقود.\n\n### ٢. الاستشعار عن بعد ومؤشر الغطاء النباتي (NDVI)\n- **المدارات المتزامنة مع الشمس (SSO):** تدور بزاوية ميل محسوبة تمكنها من عبور خطوط العرض في نفس التوقيت الشمسي يومياً.\n- **مؤشر الغطاء النباتي (NDVI):** يستغل امتصاص الكلوروفيل للضوء الأحمر وانعكاسه الشديد للأشعة تحت الحمراء القريبة (NIR):\n$$\\text{NDVI} = \\frac{\\text{NIR} - \\text{Red}}{\\text{NIR} + \\text{Red}}$$",
        formulas: [
          {
                    "labelEn": "Normalized Difference Vegetation Index (NDVI)",
                    "labelAr": "مؤشر الغطاء النباتي المعياري (NDVI)",
                    "latex": "\\text{NDVI} = \\frac{\\text{NIR} - \\text{Red}}{\\text{NIR} + \\text{Red}}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Earth & Planetary Space Sciences',
          bookTitleAr: 'الكتاب المدرسي الرسمي لعلوم الأرض والفلك وعلوم الفضاء - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH10-L2',
          pageRange: '185-205'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Lagrange Points, Gravity Assists & Satellite Earth Observation (NDVI)",
          titleAr: "دليل المعلم التوجيهي: نقاط لاغرانج، مناورات المقلاع الجاذبي والاستشعار عن بعد (مؤشر NDVI)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH10-L2',
          bloomsObjectivesEn: [
            "Synthesize theoretical principles of Lagrange Points, Gravity Assists & Satellite Earth Observation (NDVI)",
            'Compute quantitative astronomical outcomes using governing equations',
            'Evaluate physical perturbations and boundary constraints'
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ النظرية الحاكمة لـ نقاط لاغرانج، مناورات المقلاع الجاذبي والاستشعار عن بعد (مؤشر NDVI)",
            'حساب النتائج الفيزيائية والفلكية الدقيقة باستخدام القوانين المعتمدة',
            'تحليل الاضطرابات الكونية ومحددات الاتزان الفضائي'
          ],
          prerequisitesEn: ['Newtonian gravitation', 'Vector calculus', 'High school physics'],
          prerequisitesAr: ['قوانين نيوتن في الجاذبية', 'جبر المتجهات', 'مبادئ الفيزياء العامة'],
          keyVocabularyEn: [
            { term: 'Astro-dynamic Orbit', definition: 'The trajectory of an object governed by gravity' },
            { term: 'Equilibrium', definition: 'Balance between opposing physical forces' }
          ],
          keyVocabularyAr: [
            { term: 'المدار الفلكي', definition: 'المسار المنحني للجرم السماوي المحكوم بالجاذبية' },
            { term: 'الاتزان الفيزيائي', definition: 'تساوي القوى المؤثرة على الجرم' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Engage & Explore',
              phaseAr: 'التهيئة والاستكشاف',
              duration: '20 min',
              activitiesEn: 'Interactive simulation and real-world mission inquiry',
              activitiesAr: 'محاكاة تفاعلية ومناقشة سيناريوهات المهام الفضائية الحقيقية'
            },
            {
              phaseEn: 'Mathematical Modeling & Practice',
              phaseAr: 'النمذجة الرياضية والتطبيق',
              duration: '70 min',
              activitiesEn: 'Guided derivations, solved examples, and databank assessment',
              activitiesAr: 'اشتقاق المعادلات، حل المسائل النموذجية، واختبارات بنك الأسئلة'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing orbital free-fall weightlessness with the complete absence of gravity'
          ],
          commonMisconceptionsAr: [
            'الاعتقاد الخاطئ بأن انعدام الوزن في المدار ناتج عن انعدام الجاذبية بدلاً من السقوط الحر الدائم'
          ],
          differentiationEn: {
            struggling: 'Provide guided formula roadmaps, visual orbit geometry aids, and stepwise unit conversions.',
            advanced: 'Assign complex multi-body perturbation derivations and non-coplanar orbital transfer problems.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط توجيهية للقوانين وتوضيحات هندسية للمدارات وتحويلات الوحدات خطوة بخطوة.',
            advanced: 'تكليف الطلاب بحساب اضطرابات الأجسام المتعددة ومناورات الانتقال المداري ثلاثي الأبعاد.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring celestial mechanics and astrophysical principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب الميكانيكا السماوية والفيزياء الفلكية.',
          exitTicketQuestion: {
            questionEn: 'How does the orbital speed of a planet vary as it moves from perihelion to aphelion in an elliptical orbit?',
            questionAr: 'كيف تتغير السرعة المدارية لكوكب أثناء حركته من نقطة الحضيض إلى نقطة الأوج في مدار إهليلجي؟',
            solutionEn: 'Orbital speed decreases from maximum at perihelion to minimum at aphelion, conserving angular momentum (Kepler’s Second Law).',
            solutionAr: 'تقل السرعة المدارية تدريجياً من قيمتها العظمى عند الحضيض لتصل إلى أدنى قيمة عند الأوج، تحقيقاً لقانون حفظ كمية التحرك الزاوي (قانون كبلر الثاني).'
          }
        },
        worksheet: {
          id: 'th_es_ch10_l2_ws',
          titleEn: 'Astrophysics Practice Worksheet',
          titleAr: 'ورقة عمل التطبيقات الفلكية',
          descriptionEn: 'Solve the following orbital dynamics and astrophysical problems.',
          descriptionAr: 'أجب عن الأسئلة الحسابية والتطبيقية وفق القوانين الفيزيائية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'hohmann_transfer',
          titleEn: 'Astrodynamics, Hohmann Transfer & Satellite Orbit Calculator',
          titleAr: 'استوديو الملاحة الفضائية ومدارات هوهمان ومناورات الأقمار',
          descriptionEn: 'Interactive real-time physics and orbital dynamics simulation engine.',
          descriptionAr: 'محرك محاكاة تفاعلي لحظي لقوانين الفيزياء والديناميكا المدارية.'
        }
      },
    ],
    solvedExamples: earthSpaceCh10SolvedExamples,
    exerciseProblems: earthSpaceCh10Exercises,
    databank: earthSpaceCh10Databank
  },
];

export const thanaweyaEarthSpaceBranch: Branch = {
  id: 'thanaweya_earth_space',
  titleEn: 'Earth & Planetary Space Sciences',
  titleAr: 'علوم الأرض والفلك وعلوم الفضاء',
  categoryEn: 'National Scientific Core Subject',
  categoryAr: 'المادة القومية العلمية الكبرى',
  iconName: 'Orbit',
  colorGradient: 'from-blue-950 via-indigo-900 to-amber-900',
  chapters
};
