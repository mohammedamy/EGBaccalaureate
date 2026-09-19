import type { Branch } from '../types/curriculum';
import { fineArtsCh1SolvedExamples, fineArtsCh1Exercises } from './textbook/thanaweya/fineArtsCh1Textbook';
import { fineArtsCh2SolvedExamples, fineArtsCh2Exercises } from './textbook/thanaweya/fineArtsCh2Textbook';
import { fineArtsCh3SolvedExamples, fineArtsCh3Exercises } from './textbook/thanaweya/fineArtsCh3Textbook';
import { fineArtsCh4SolvedExamples, fineArtsCh4Exercises } from './textbook/thanaweya/fineArtsCh4Textbook';
import { fineArtsCh1Databank } from './databanks/thanaweya/fineArtsCh1Databank';
import { fineArtsCh2Databank } from './databanks/thanaweya/fineArtsCh2Databank';
import { fineArtsCh3Databank } from './databanks/thanaweya/fineArtsCh3Databank';
import { fineArtsCh4Databank } from './databanks/thanaweya/fineArtsCh4Databank';

export const thanaweyaFineArtsBranch: Branch = {
  id: 'thanaweya_fine_arts',
  titleEn: 'Fine Arts, Architectural Design & Heritage',
  titleAr: 'الفنون الجميلة والتصميم المعماري والتراث',
  iconName: 'Palette',
  colorGradient: 'from-fuchsia-950 via-rose-900 to-amber-950',
  categoryEn: 'Official Egyptian General Secondary curriculum for Fine Arts & Architecture: art history and Egyptian masters, linear perspective and shadow casting, visual composition principles, color harmonies, vernacular heritage (Hassan Fathy), and faculty aptitude test standards.',
  categoryAr: 'المنهج الوزاري المعتمد لشهادة الثانوية العامة لمادة الفنون الجميلة والتصميم المعماري: تاريخ الفن ورواد النهضة المصرية، قواعد المنظور والظل والظلال، أسس التكوين والتصميم والدائرة اللونية، العمارة التراثية وفلسفة حسن فتحي، ومعايير اختبارات القدرات.',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_fine_arts_ch1',
      titleEn: 'History of Visual Arts & Egyptian Artistic Evolution',
      titleAr: 'تاريخ الفنون التشكيلية وتطور الفن المصري عبر العصور',
      descriptionEn: 'Ancient Egyptian canons of proportion, Coptic encaustic icon tradition, Islamic arabesque and geometric interlace, and the pioneers of the Modern Egyptian Renaissance.',
      descriptionAr: 'قواعد النسب والرمزية في الفن المصري القديم، الأيقونة القبطية وتقنيات الإنكوستيك، الزخرفة الإسلامية وتجريد الأرابيسك، ورواد حركة الفن التشكيلي المصري الحديث.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_fa_ch1_l1',
          titleEn: 'Lesson 1: Ancient Egyptian Canon, Coptic Iconography & Islamic Geometric Interlace',
          titleAr: 'الدرس الأول: قواعد الفن المصري القديم، الأيقونة القبطية والتشبيك الهندسي الإسلامي',
          summaryEn: 'Ancient Egyptian 18-fist canon, frontality rule, symbolic palette, Coptic encaustic monastic icons, and Islamic geometric star polygons with stylized arabesque.',
          summaryAr: 'شبكة الـ 18 قبضة في الفن الفرعوني، قانون المواجهة والرمزية اللونية، تقنية الإنكوستيك في الأيقونة القبطية، والأطباق النجمية والتوريق النباتي في الفن الإسلامي.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Ancient Egyptian Art, Coptic Icons & Islamic Arabesque
## الفن المصري القديم، الأيقونة القبطية والزخرفة الإسلامية

### 1. Ancient Egyptian Figural Canon (النسب في الفن المصري القديم)
Ancient Egyptian figurative sculpture and wall relief followed an unyielding mathematical grid system based on 18 squares from the ground line to the hairline (extended to 21 squares in the Late Period). Figures obey the rule of frontality (قانون المواجهة), showing eyes and shoulders frontally with head and limbs in profile.

### 2. Coptic Iconography & Encaustic Technique (الأيقونة القبطية وتقنية الشمع الساخن)
Coptic monastic art transitioned from Hellenistic physical naturalism to transcendent spiritual symbolism. Pigments suspended in hot beeswax (الإنكوستيك) yielded rich permanence. Features emphasize deep spiritual contemplation: enlarged almond eyes facing forward, minute mouths indicating holy silence, and golden nimbi symbolizing uncreated celestial radiance.

### 3. Islamic Geometrical Arabesque (الزخرفة الهندسية والأرابيسك الإسلامي)
Islamic aesthetic expression avoided representational idolatry by pioneering non-figurative infinite patterns:
- **Geometric Star Rosettes (الأطباق النجمية)**: Derived through compass and straightedge geometric division (8-fold, 10-fold, 12-fold symmetry).
- **Vegetal Arabesque (التوريق النباتي)**: Stylized interlocking leafy rhythmic curves.
- **Architectural Calligraphy (الخط المعماري)**: Epigraphic bands in monumental Kufic and fluid Thuluth script.
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Fine Arts & Visual Culture Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الفنية والفنون التشكيلية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-ARTS-MOE-2025',
            pageRange: 'pp. 12-45'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Comparative Evolution of Egyptian Visual Arts',
            titleAr: 'الخطة التدريسية: التطور المقارن للفنون البصرية المصرية عبر العصور',
            objectives: [
              'Analyze the geometric proportional grid of ancient Egyptian wall reliefs.',
              'Contrast Coptic spiritual icon simplification against Greco-Roman naturalism.',
              'Construct an authentic 8-fold Islamic star rosette using geometric step methods.'
            ],
            warmUpEn: 'Examine high-resolution projections of Tutankhamun murals alongside a 6th-century Coptic icon and an Ibn Tulun decorative frieze.',
            warmUpAr: 'عرض نماذج مكبرة لجداريات توت عنخ آمون بجوار أيقونة قبطية من القرن السادس وإفريز جامع أحمد بن طولون لمقارنة أساليب التجريد والرمزية.',
            activitiesEn: 'Students draft an 18-unit grid on drawing paper and construct a proportional human figure, then analyze color symbolism.',
            activitiesAr: 'يرسم الطلاب شبكة الـ 18 وحدة بالمسطرة ويوقعون نسب الجسد الآدمي وفق القواعد المصرية القديمة، ثم يحللون دلالات الألوان المستخدمة.',
            differentiation: {
              support: 'Provide pre-scaled grid templates with annotated bodily anchor lines.',
              advanced: 'Calculate mathematical ratios in 10-fold Girih tile rosettes and discuss their non-periodic tessellation properties.'
            },
            formativeAssessmentEn: 'Four-question diagnostic exit ticket on Egyptian art canons, encaustic mediums, and star-polygon geometries.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية من أربعة أسئلة حول نسب الفن المصري، وتقنية الإنكوستيك، وهندسة الأطباق النجمية.',
            exitTicketQuestion: {
              questionEn: 'Which mathematical unit served as the proportional foundation for the 18-square ancient Egyptian human canon?',
              questionAr: 'ما هي الوحدة القياسية التي اعتمدت كأساس نسبي لشبكة الـ 18 مربعاً في الفن المصري القديم؟',
              solutionEn: 'The width of the clenched human fist (قبضة اليد).',
              solutionAr: 'عرض قبضة يد الإنسان المغلقة.'
            }
          },
          worksheet: {
            id: 'ws_th_fa_ch1_l1',
            titleEn: 'Student Studio Worksheet: Egyptian Classical Canons & Islamic Geometry',
            titleAr: 'ورقة عمل الطالب: القواعد المصرية القديمة وهندسة الزخارف الإسلامية',
            descriptionEn: 'Hands-on practice analyzing proportion grids, iconic color meanings, and star-pattern construction.',
            descriptionAr: 'تطبيق عملي تحليلي لشبكات النسب، ودلالات الرموز اللونية، ورسم النماذج الهندسية النجمية.',
            estimatedTimeMinutes: 45,
            problems: fineArtsCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Egyptian Heritage & Geometric Tessellation Studio',
            titleAr: 'استوديو التراث المصري والزخارف الهندسية',
            descriptionEn: 'Interactive geometric star pattern generator and Egyptian proportional grid analyzer.',
            descriptionAr: 'مولد تفاعلي للأطباق النجمية الإسلامية ومحلل شبكة النسب المصرية القديمة.'
          }
        },
        {
          id: 'th_fa_ch1_l2',
          titleEn: 'Lesson 2: Pioneers of the Modern Egyptian Renaissance: Mokhtar, Ayad, Said & Aflatoun',
          titleAr: 'الدرس الثاني: رواد النهضة التشكيلية المصرية: مختار، عياد، سعيد، وأفلاطون',
          summaryEn: "Mahmoud Mokhtar's monumental modern sculpture (Nahdat Misr), Ragheb Ayad's folk expressionism, Mahmoud Said's Mediterranean light and sculptural painting, and Inji Aflatoun's social realism.",
          summaryAr: 'صرحية النحت عند محمود مختار (تمثال نهضة مصر)، التعبيرية الشعبية عند راغب عياد، ضوء المتوسط والتجسيم الشاعري عند محمود سعيد، والواقعية الاجتماعية عند إنجي أفلاطون.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Pioneers of Modern Egyptian Fine Arts
## رواد حركة الفن التشكيلي المصري المعاصر

### 1. Mahmoud Mokhtar (محمود مختار 1891–1934)
The founding father of modern Egyptian sculpture. His monumental masterwork "Nahdat Misr" (نهضة مصر - Egypt's Awakening) in pink Aswan granite depicts the Sphinx rising alongside an Egyptian peasant woman lifting her veil, symbolizing historical continuity, female emancipation, and national awakening.

### 2. Ragheb Ayad (راغب عياد 1892–1982)
The pioneer of Egyptian Folk Expressionism. He translated genuine rural and popular community traditions (stick dancers, working donkeys, street cafes) using animated dynamic outlines, stylized elongation, and earthy gouache palettes.

### 3. Mahmoud Said (محمود سعيد 1897–1964)
The master of Mediterranean atmospheric luminescence and sculptural volume in oil. Paintings like "Banat Bahari" (بنات بحري) and "Al-Madina" utilize classical chiaroscuro and oil glazing to reveal the voluptuous plastic essence of the Egyptian soul.

### 4. Inji Aflatoun (إنجي أفلاطون 1924–1989)
Pioneer of surrealism and social realism. Her vibrant undulating brushstrokes captured Egyptian agricultural laborers and prison memories, utilizing high-contrast vivid color harmonies.
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Fine Arts & Visual Culture Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الفنية والفنون التشكيلية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-ARTS-MOE-2025',
            pageRange: 'pp. 46-78'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Stylistic Analysis of Modern Egyptian Masterpieces',
            titleAr: 'الخطة التدريسية: التحليل الأسلوبي لرواد الفن التشكيلي المصري الحديث',
            objectives: [
              "Analyze the symbolic national iconography of Mahmoud Mokhtar's Nahdat Misr.",
              "Identify the expressive kinetic lines of Ragheb Ayad's rural depictions.",
              "Deconstruct the chiaroscuro and glaze technique of Mahmoud Said."
            ],
            warmUpEn: 'Present high-definition slides of Nahdat Misr and compare its granite texture with ancient Egyptian New Kingdom statuary.',
            warmUpAr: 'عرض صور تفصيلية لتمثال نهضة مصر ومقارنة معالجة حجر الغرانيت الوردي بتماثيل الدولة الحديثة في مصر القديمة.',
            activitiesEn: 'Students select one modern pioneer and produce a comparative matrix contrasting color palette, subject matter, and philosophical worldview.',
            activitiesAr: 'يختار الطلاب أحد الرواد الأربعة ويعدون مصفوفة مقارنة تشمل: الخامة، الأسلوب البصري، ودلالة العمل الوطنية والمجتمعية.',
            differentiation: {
              support: 'Provide vocabulary guide on sculpture techniques, glazing, and folk expressionism.',
              advanced: 'Debate the synthesis of European academic technique with authentic Egyptian cultural identity in 1920s Cairo.'
            },
            formativeAssessmentEn: 'Short critique analyzing the plastic balance and light sources in a painting by Mahmoud Said.',
            formativeAssessmentAr: 'تحليل نقدي موجز يوضح معالجة الضوء والكتلة في إحدى لوحات محمود سعيد الشهيرة.',
            exitTicketQuestion: {
              questionEn: "Which two iconic figures are sculpted together in Mahmoud Mokhtar's national monument \"Nahdat Misr\"?",
              questionAr: 'ما هما العنصران الرمزيان الرئيسيان المنحوتان معاً في تمثال "نهضة مصر" لمحمود مختار؟',
              solutionEn: 'The rising Sphinx (أبو الهول) and an Egyptian peasant woman lifting her veil (الفلاحة المصرية رافعة الحجاب).',
              solutionAr: 'تمثال أبو الهول وهو ينهض بجوار فلاحة مصرية ترفع الحجاب.'
            }
          },
          worksheet: {
            id: 'ws_th_fa_ch1_l2',
            titleEn: 'Student Studio Worksheet: Modern Pioneers Critique and Analysis',
            titleAr: 'ورقة عمل الطالب: التحليل والنقد التشكيلي لرواد الحركة المعاصرة',
            descriptionEn: 'Exercises examining masterwork composition, sculpture volumes, and cultural symbolism.',
            descriptionAr: 'تدريبات على نقد الأعمال الفنية الصرحية، ودراسة الكتل النحتية، والرمزية الوطنية.',
            estimatedTimeMinutes: 45,
            problems: fineArtsCh1SolvedExamples.slice(3, 6)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Modern Egyptian Art Gallery & Style Explorer',
            titleAr: 'معرض الفن المصري الحديث ومحلل الأساليب التشكيلية',
            descriptionEn: 'Virtual gallery exploring works by Mokhtar, Ayad, Said, and contemporary Egyptian masters.',
            descriptionAr: 'معرض افتراضي لاستكشاف روائع مختار وعياد وسعيد وأفلاطون وتحليل تكويناتها التشكيلية.'
          }
        }
      ],
      solvedExamples: fineArtsCh1SolvedExamples,
      exerciseProblems: fineArtsCh1Exercises,
      databank: fineArtsCh1Databank
    },

    // Chapter 2
    {
      id: 'th_fine_arts_ch2',
      titleEn: 'Linear Perspective, Shadows & Spatial Volumetrics',
      titleAr: 'قواعد المنظور الهندسي وعلم الظل والظلال وتجسيم الفراغ',
      descriptionEn: 'Horizon line, eye levels, 1-point, 2-point, and 3-point vanishing systems, physics of core and cast shadows, and volumetric spatial projections.',
      descriptionAr: 'خط الأفق ومستويات النظر، نظم التلاشي بنقطة ونقطتين وثلاث نقاط تلاشٍ، فيزياء الظل الذاتي والساقط، وتجسيم الكتل الفراغية في الفضاء الهندسي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_fa_ch2_l1',
          titleEn: 'Lesson 1: Horizon Line, Eye Levels & Vanishing Point Systems',
          titleAr: 'الدرس الأول: خط الأفق، مستويات النظر وأنظمة نقاط التلاشي الهندسية',
          summaryEn: "Horizon line correspondence to eye level, one-point central perspective, two-point angular perspective, three-point oblique perspective, and viewing angles (bird's eye, worm's eye).",
          summaryAr: 'تطابق خط الأفق مع مستوى عين المشاهد، المنظور المركزي بنقطة تلاشٍ واحدة، المنظور الزاوي بنقطتين، المنظور المائل بثلاث نقاط، وزوايا الرؤية (عين الطائر وعين النملة).',
          estimatedMinutes: 60,
          theoryContentEn: `
# Linear Perspective & Vanishing Point Systems
## قواعد المنظور الهندسي وأنظمة نقاط التلاشي

### 1. The Horizon Line (خط الأفق ومستوى النظر)
The horizon line in linear perspective is the horizontal line that corresponds exactly to the viewer’s eye level. Objects positioned above the horizon line expose their underside, while objects placed below it reveal their top surfaces.

### 2. Vanishing Systems (أنظمة نقاط التلاشي)
- **One-Point (Central) Perspective (منظور نقطة التلاشي الواحدة)**: Used when the viewer looks directly at the front face of a geometric mass. All front-facing lines remain horizontal and vertical; all receding depth lines converge to a single central vanishing point (VP).
- **Two-Point (Angular) Perspective (منظور نقطتي التلاشي)**: Used when viewing an object corner-first. Vertical lines remain strictly vertical; horizontal sets of lines converge to two vanishing points (VP1 on the left, VP2 on the right) on the horizon line.
- **Three-Point (Oblique) Perspective (منظور ثلاث نقاط تلاشٍ)**: Applied when looking steeply up (Worm's-Eye View / عين النملة) or steeply down (Bird's-Eye View / عين الطائر). Vertical lines converge to a third zenith or nadir vanishing point (VP3).
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Fine Arts & Visual Culture Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الفنية والفنون التشكيلية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-ARTS-MOE-2025',
            pageRange: 'pp. 80-112'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Constructing Accurate Angular Perspective Volumes',
            titleAr: 'الخطة التدريسية: البناء الهندسي الدقيق للكتل في المنظور الزاوي',
            objectives: [
              'Establish the horizon line and two vanishing points at authentic angular intervals.',
              'Project geometric cubes and architectural forms without optical distortion.',
              "Contrast bird's-eye view with worm's-eye view spatial dynamics."
            ],
            warmUpEn: 'Demonstrate vanishing point convergence using string attached to a magnetic whiteboard over an architectural photograph.',
            warmUpAr: 'استخدام خيوط مرنة مثبتة بمغناطيس على لوح الفصل لتوضيح مسار تلاقي خطوط الهروب إلى نقاط التلاشي فوق صورة فوتوغرافية لمعلم معماري.',
            activitiesEn: 'Students draw an interior room or urban street scene in 2-point perspective, ensuring all doors and windows obey receding convergence.',
            activitiesAr: 'يرسم الطلاب منظورا زاويا لشارع أو فراغ داخلي بنقطتي تلاشٍ مع إسقاط الأبواب والنوافذ بدقة على خطوط الهروب.',
            differentiation: {
              support: 'Step-by-step drafting rubric with pre-placed VP coordinates.',
              advanced: 'Calculate measuring points (نقاط القياس المترية) to scale real metric depths inside the perspective grid.'
            },
            formativeAssessmentEn: 'Identification of perspective convergence errors in three sample architectural student drawings.',
            formativeAssessmentAr: 'استخراج الأخطاء المنظورية في نماذج رسوم معمارية غير متقنة وتصحيح زوايا الهروب.',
            exitTicketQuestion: {
              questionEn: 'When drawing a tall building in two-point perspective, which set of lines remains strictly parallel and perpendicular to the horizon?',
              questionAr: 'عند رسم مبنى في المنظور الزاوي ذي نقطتي تلاشٍ، ما هي مجموعة الخطوط التي تظل رأسية متوازية وعمودية تماماً على خط الأفق؟',
              solutionEn: 'The vertical edges of the building (الخطوط والأحرف الرأسية للمبنى).',
              solutionAr: 'الخطوط والأحرف الرأسية لكتلة المبنى.'
            }
          },
          worksheet: {
            id: 'ws_th_fa_ch2_l1',
            titleEn: 'Student Studio Worksheet: Perspective Drafting and Vanishing Grids',
            titleAr: 'ورقة عمل الطالب: الرسم المنظوري وشبكات التلاشي الهندسية',
            descriptionEn: 'Structured exercises drafting boxes, rooms, and urban corridors in 1-point and 2-point perspective.',
            descriptionAr: 'تدريبات متدرجة لرسم الكتل المكعبة والغرف والممرات الحضرية في المنظور بنقطة ونقطتين.',
            estimatedTimeMinutes: 45,
            problems: fineArtsCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Interactive 3D Perspective Drafter Lab',
            titleAr: 'مختبر المنظور ثلاثي الأبعاد التفاعلي',
            descriptionEn: 'Live perspective grid builder with movable horizon line, adjustable vanishing points, and real-time 3D box projection.',
            descriptionAr: 'أداة تفاعلية لبناء شبكة المنظور مع إمكانية تحريك خط الأفق ونقاط التلاشي وتجسيم الكتل ثلاثية الأبعاد فورياً.'
          }
        },
        {
          id: 'th_fa_ch2_l2',
          titleEn: 'Lesson 2: Light Rays, Core Shadows, Cast Shadows & Volumetric Rendering',
          titleAr: 'الدرس الثاني: مسارات الضوء، الظل الذاتي، الظل الساقط والتظليل التجسيمي',
          summaryEn: 'Physics of illumination, incident light angles, highlight, midtones, core shadow (الظل الذاتي), ambient reflected light, cast shadow projection on horizontal/vertical surfaces.',
          summaryAr: 'فيزياء الإضاءة وزوايا سقوط الأشعة، بؤرة النور، الدرجات النصفية، الظل الذاتي للكتلة، الضوء المنعكس، وإسقاط الظل الساقط على الأسطح الأفقية والرأسية.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Physics of Light, Core Shadows & Cast Shadow Geometry
## فيزياء الضوء وهندسة الظل والظلال

### 1. Zones of Tonal Value (مناطق القيمة التظليلية للكتلة)
When light strikes a three-dimensional curved or planar form, five distinct value zones emerge:
1. **Highlight (بؤرة الضوء / اللمعة)**: The brightest point reflecting the light source directly.
2. **Midtone / Halftone (المنطقة النصفية)**: True local color illuminated by direct light.
3. **Core Shadow (الظل الذاتي)**: The darkest band where the form turns past the tangent light rays away from the source.
4. **Reflected Light (الضوء المنعكس)**: Soft secondary illumination bouncing back from neighboring surfaces into the shadow zone.
5. **Cast Shadow (الظل الساقط)**: The occlusion silhouette projected by the object onto the floor or adjacent walls.

### 2. Geometry of Cast Shadows (هندسة إسقاط الظلال الساقطة)
The boundary of a cast shadow is determined by two coordinates:
- The physical position of the light source in space.
- The vertical projection of the light source onto the ground plane (Light Foot / مسقط مصدر الضوء).
Drawing rays from the light source through the object vertices and intersecting them with ground rays from the light foot delineates the exact geometric perimeter of the cast shadow.
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Fine Arts & Visual Culture Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الفنية والفنون التشكيلية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-ARTS-MOE-2025',
            pageRange: 'pp. 113-145'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Rendering Realistic Volumetric Values and Cast Shadows',
            titleAr: 'الخطة التدريسية: بناء التجسيم التظليلي الواقعي وحساب الظلال الساقطة',
            objectives: [
              'Differentiate between core shadow (ظل ذاتي) and cast shadow (ظل ساقط).',
              'Construct the exact geometric cast shadow of cubes and cylinders on horizontal ground.',
              'Render a smooth 5-step value gradient displaying highlight, midtone, core shadow, and reflected light.'
            ],
            warmUpEn: 'Place a plaster sphere and cube under a single spotlight in a darkened studio and trace the shadow boundaries.',
            warmUpAr: 'وضع مجسمات جبسية (كرة ومكعب) تحت مصباح مسلط مباشر وتتبع خطوط الظل الذاتي وانعكاسات الضوء والظل الساقط.',
            activitiesEn: 'Students execute a graded graphite shading study of a sphere, cylinder, and architectural portal with mathematically calculated cast shadows.',
            activitiesAr: 'ينفذ الطلاب تدريباً تظليلياً بالقلم الرصاص على أشكال هندسية (كرة، أسطوانة، مدخل معماري) مع إسقاط الظل الساقط هندسياً.',
            differentiation: {
              support: 'Provide step-by-step value scales (from 2H to 6B graphite grades).',
              advanced: 'Calculate shadow projections from secondary artificial ambient light sources intersecting natural sun rays.'
            },
            formativeAssessmentEn: 'Rubric evaluation of value range depth and shadow edge softness.',
            formativeAssessmentAr: 'تقييم تدريجي لمدى اتساع التدرج الظلي ودقة حواف الظل الساقط وتلاشيها التدريجي.',
            exitTicketQuestion: {
              questionEn: 'Why is the core shadow on a sphere darker than the area receiving reflected ambient light at the back of the shadow side?',
              questionAr: 'لماذا تكون منطقة الظل الذاتي على سطح الكرة أشد عتمة من المنطقة الخلفية الواقعة في الظل؟',
              solutionEn: 'Because the back edge receives subtle reflected light bouncing off the ground surface (بفعل الضوء المنعكس من الأرضية المجاورة).',
              solutionAr: 'بسبب تلقي الحافة الخلفية ارتداداً خافتاً من الضوء المنعكس من السطح المستوي المجاور.'
            }
          },
          worksheet: {
            id: 'ws_th_fa_ch2_l2',
            titleEn: 'Student Studio Worksheet: Value Scales and Shadow Construction',
            titleAr: 'ورقة عمل الطالب: تدريج القيم الظلية وهندسة الظل والظلال',
            descriptionEn: 'Rendering practice for geometric solids, core shadows, and cast shadow projection.',
            descriptionAr: 'تمارين عملية لتظليل المجسمات الهندسية ورسم حدود الظلال الذاتية والساقطة.',
            estimatedTimeMinutes: 45,
            problems: fineArtsCh2SolvedExamples.slice(3, 6)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Light & Shadow Simulator Studio',
            titleAr: 'استوديو محاكاة الضوء والظل التجسيمي',
            descriptionEn: 'Interactive light source controller showing real-time core and cast shadow alterations on 3D geometric primitives.',
            descriptionAr: 'أداة تفاعلية للتحكم في موضع مصدر الضوء ومشاهدة تغيرات الظلال الذاتية والساقطة على المجسمات الهندسية فورياً.'
          }
        }
      ],
      solvedExamples: fineArtsCh2SolvedExamples,
      exerciseProblems: fineArtsCh2Exercises,
      databank: fineArtsCh2Databank
    },

    // Chapter 3
    {
      id: 'th_fine_arts_ch3',
      titleEn: 'Principles of Design Composition & Color Harmony',
      titleAr: 'أسس التصميم والتكوين الفني ونظرية وتناغم الألوان',
      descriptionEn: 'Balance, visual rhythm, dominance, unity, the Golden Ratio (Phi), Itten color wheel, subtractive CMYK vs additive RGB, and psychological color harmonies.',
      descriptionAr: 'الاتزان، الإيقاع البصري، السيادة والوحدة، النسبة الذهبية (فاي)، الدائرة اللونية ليوهانس إيتن، خلط الألوان الجمعي والطرحي، والتوافقات وسيكولوجيا الألوان.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_fa_ch3_l1',
          titleEn: 'Lesson 1: Principles of Composition: Balance, Rhythm, Dominance & Golden Ratio',
          titleAr: 'الدرس الأول: أسس التكوين الفني: الاتزان، الإيقاع، السيادة والنسبة الذهبية',
          summaryEn: 'Symmetrical and asymmetrical balance, kinetic rhythm, center of dominance/focal point, visual unity, and the Golden Section (Phi = 1.618) with Fibonacci spiral.',
          summaryAr: 'الاتزان المتماثل وغير المتماثل، الإيقاع البصري، مركز السيادة ونقطة الجذب، الوحدة التشكيلية، والنسبة الذهبية (فاي = 1.618) مع الحلزون اللوغاريتمي لفيبوناتشي.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Principles of Visual Composition & The Golden Ratio
## أسس التكوين البصري والتناسب بالنسبة الذهبية

### 1. Structural Principles of Composition (أسس بناء العمل الفني)
- **Balance (الاتزان)**: Visual equilibrium of elements. May be Symmetrical (formal, calm) or Asymmetrical (dynamic, weighted by color, scale, and texture contrast).
- **Rhythm (الإيقاع البصري)**: Repetition or progressive variation of motifs that guides the eye across the canvas.
- **Dominance / Focal Point (السيادة / مركز الاهتمام)**: The primary area that arrests the viewer’s gaze first, achieved through high tonal contrast, detail density, or convergent directional lines.
- **Unity & Harmony (الوحدة والتوافق)**: The holistic cohesion binding all parts so that no element appears extraneous.

### 2. The Golden Ratio ($Phi approx 1.618$) (النسبة الذهبية)
The Golden Ratio ($\Phi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$) divides a line segment so that $\\frac{A+B}{A} = \\frac{A}{B}$.
Applying this proportion iteratively to rectangles yields the Golden Rectangle. Connecting quarter-circle arcs across golden square subdivisions generates the Golden Spiral (Fibonacci Spiral). The simplified Rule of Thirds places focal elements at the four grid intersection points to invoke similar dynamic visual tension.
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Fine Arts & Visual Culture Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الفنية والفنون التشكيلية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-ARTS-MOE-2025',
            pageRange: 'pp. 148-180'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Constructing Golden Ratio Compositions',
            titleAr: 'الخطة التدريسية: توظيف النسبة الذهبية وقواعد التكوين البصري المتوازن',
            objectives: [
              'Distinguish asymmetrical balance from symmetrical balance using visual weight calculations.',
              'Calculate and plot the Golden Section ($Phi approx 1.618$) on a canvas.',
              'Construct a dynamic focal point using value contrast and directional vectors.'
            ],
            warmUpEn: "Overlay digital Golden Spirals over Leonardo da Vinci's Mona Lisa and the Parthenon facade.",
            warmUpAr: 'عرض تحليل بصري للموناليزا وواجهة البارثينون بتراكب حلزون النسبة الذهبية لإبراز استقرار التكوين.',
            activitiesEn: 'Students design a balanced visual poster using asymmetric focal placement based on the Rule of Thirds and Fibonacci geometry.',
            activitiesAr: 'يصمم الطلاب ملصقاً فنياً يطبق الاتزان غير المتماثل مع توقيع نقطة السيادة عند تقاطع النسبة الذهبية.',
            differentiation: {
              support: 'Provide transparent golden grid overlays to aid sketch layout.',
              advanced: 'Derive the mathematical Fibonacci sequence ($F_n = F_{n-1} + F_{n-2}$) and calculate the limit ratio converging to Phi.'
            },
            formativeAssessmentEn: 'Peer review analyzing whether the focal point commands immediate visual attention.',
            formativeAssessmentAr: 'تقييم تبادلي بين الطلاب للتحقق من وضوح نقطة السيادة وتوازن الأوزان البصرية.',
            exitTicketQuestion: {
              questionEn: 'What is the numerical approximation of the Golden Ratio ($Phi$) used in classical fine arts and architectural proportions?',
              questionAr: 'ما هي القيمة العددية التقريبية للنسبة الذهبية ($Phi$) المستخدمة في النسب الجمالية الكلاسيكية؟',
              solutionEn: 'Approximately 1.618 (حوالي 1.618).',
              solutionAr: '1.618 تقريباً.'
            }
          },
          worksheet: {
            id: 'ws_th_fa_ch3_l1',
            titleEn: 'Student Studio Worksheet: Compositional Layout and Golden Grids',
            titleAr: 'ورقة عمل الطالب: بناء التكوين وشبكات النسبة الذهبية',
            descriptionEn: 'Practical layout exercises practicing balance, golden spirals, and focal dominance.',
            descriptionAr: 'تمارين تطبيقية لتوزيع الكتل بالاتزان غير المتماثل والحلزون الذهبي.',
            estimatedTimeMinutes: 45,
            problems: fineArtsCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Golden Ratio & Proportion Calculator',
            titleAr: 'حاسبة النسبة الذهبية والنسب الهندسية الجمالية',
            descriptionEn: 'Interactive dynamic Golden Rectangle subdivider and Fibonacci spiral overlay generator.',
            descriptionAr: 'أداة تفاعلية لرسم وتجزئة المستطيل الذهبي وتوليد الحلزون اللوغاريتمي على الأعمال الفنية والمعمارية.'
          }
        },
        {
          id: 'th_fa_ch3_l2',
          titleEn: "Lesson 2: Color Theory: Itten's Wheel, Additive/Subtractive Systems & Harmonies",
          titleAr: 'الدرس الثاني: نظرية الألوان: دائرة إيتن، الخلط الجمعي والطرحي ومخططات التوافق',
          summaryEn: "Johannes Itten's 12-color wheel, primary, secondary, and tertiary hues, additive RGB vs subtractive CMYK systems, complementary contrast, analogous harmonies, and color psychology.",
          summaryAr: 'دائرة الألوان لاثني عشر لوناً ليوهانس إيتن، الألوان الأساسية والثانوية والثلاثية، الخلط الجمعي RGB والطرحي CMYK، التباين التكاملي، التوافق المتجاور، وسيكولوجيا الألوان.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Color Theory, Pigment Systems & Harmonic Palettes
## نظرية الألوان، أنظمة الخلط والتوافقات اللونية

### 1. The 12-Part Color Wheel (دائرة يوهانس إيتن اللونية)
- **Primary Hues (الألوان الأساسية)**: Red, Yellow, Blue — cannot be created by mixing other pigments.
- **Secondary Hues (الألوان الثانوية)**: Orange, Green, Violet — mixed from equal pairs of primaries.
- **Tertiary Hues (الألوان الثلاثية)**: Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Violet, Red-Violet.

### 2. Scientific Color Systems (الخلط الجمعي والطرحي)
- **Additive Synthesis (RGB) (الخلط الجمعي للضوء)**: Red, Green, and Blue light beams combine to create white light. Used in digital screens, projectors, and digital cameras.
- **Subtractive Synthesis (CMYK) (الخلط الطرحي للأصباغ)**: Cyan, Magenta, Yellow, and Key Black physical pigments absorb wavelengths from white light, combining toward darkness. Used in painting and offset printing.

### 3. Harmonic Schemes (مخططات التوافق اللوني)
- **Complementary (التوافقي التكاملي)**: Hues diametrically opposed on the wheel (e.g., Red and Green). Maximizes vibrant contrast.
- **Analogous (التوافقي المتجاور)**: Three adjacent hues sharing a parent primary (e.g., Yellow, Yellow-Green, Green). Yields serene visual cohesion.
- **Triadic (التوافقي الثلاثي)**: Three equidistant hues forming an equilateral triangle (e.g., Red, Yellow, Blue).
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Fine Arts & Visual Culture Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الفنية والفنون التشكيلية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-ARTS-MOE-2025',
            pageRange: 'pp. 182-215'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Mixing Pigment Harmonies and Value Calibration',
            titleAr: 'الخطة التدريسية: خلط الألوان الصبغية وتطوير التوافقات والتناغم اللوني',
            objectives: [
              'Differentiate additive light (RGB) from subtractive pigment (CMYK) color mixing.',
              'Mix precise secondary and tertiary hues using pure gouache/tempera primaries.',
              'Construct a high-impact complementary harmony composition using chromatic neutrals.'
            ],
            warmUpEn: 'Mix primary gouache pigments on a studio palette to observe subtractive desaturation into chromatic brown/black.',
            warmUpAr: 'خلط الألوان الأساسية الثلاثة بالجواش عملياً لملاحظة الامتصاص الطرحي للضوء والتحول إلى الرمادي اللوني الداكن.',
            activitiesEn: 'Students paint a 12-hue color wheel and create two color studies: one analogous calm scheme and one dynamic complementary scheme.',
            activitiesAr: 'يرسم الطلاب الدائرة اللونية كاملة ويلونون تصميمين: أحدهما بتوافق لوني متجاور والآخر بتوافق تكاملي متباين.',
            differentiation: {
              support: 'Provide pre-printed 12-sector circular templates with mixing ratios.',
              advanced: "Analyze Chevreul's simultaneous contrast law and design optical vibration edges using complementary borders."
            },
            formativeAssessmentEn: "Quiz evaluating students' ability to identify color schemes from masterwork color palettes.",
            formativeAssessmentAr: 'اختبار قصير لتحديد نوع التوافق اللوني المستخدم في أعمال تصويرية عالمية ومصرية.',
            exitTicketQuestion: {
              questionEn: "What color scheme is formed by choosing colors that sit directly opposite each other on Itten's color wheel?",
              questionAr: 'ما هو المخطط اللوني الذي ينتج عن اختيار لونين متقابلين تماماً على دائرة الألوان؟',
              solutionEn: 'Complementary color scheme (المخطط التوافقي التكاملي).',
              solutionAr: 'المخطط التكاملي (الألوان المتممة / التكاملية).'
            }
          },
          worksheet: {
            id: 'ws_th_fa_ch3_l2',
            titleEn: 'Student Studio Worksheet: Color Wheel Calibration and Harmonies',
            titleAr: 'ورقة عمل الطالب: معايرة الدائرة اللونية ومخططات التوافق',
            descriptionEn: 'Palette mixing drills, chromatic contrast challenges, and harmony classification.',
            descriptionAr: 'تدريبات خلط الألوان الأساسية، واستخراج الدرجات التكاملية، وضبط التوافق اللوني.',
            estimatedTimeMinutes: 45,
            problems: fineArtsCh3SolvedExamples.slice(3, 6)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Harmonic Color Wheel & Contrast Studio',
            titleAr: 'استوديو الدائرة اللونية التفاعلية والتوافق اللوني',
            descriptionEn: 'Interactive 12-hue color wheel with complementary, analogous, triadic selectors, and WCAG contrast check.',
            descriptionAr: 'دائرة لونية تفاعلية تمكن من اختيار التوافقات التكاملية والمتجاورة والثلاثية واختبار درجات التباين.'
          }
        }
      ],
      solvedExamples: fineArtsCh3SolvedExamples,
      exerciseProblems: fineArtsCh3Exercises,
      databank: fineArtsCh3Databank
    },

    // Chapter 4
    {
      id: 'th_fine_arts_ch4',
      titleEn: 'Egyptian Architecture, Decorative Arts & Applied Design',
      titleAr: 'العمارة المصرية وفنون الزخرفة والتصميم التطبيقي',
      descriptionEn: "Heritage Egyptian architecture from Karnak to Islamic domes, Hassan Fathy's vernacular mudbrick philosophy, graphic typography, and faculty aptitude testing.",
      descriptionAr: 'العمارة المصرية التراثية من الكرنك إلى القباب والمشربيات الإسلامية، فلسفة حسن فتحي وعمارة الطين، التصميم الجرافيكي والصناعي، ومعايير اختبارات القدرات الفنية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_fa_ch4_l1',
          titleEn: "Lesson 1: Egyptian Monumental Architecture & Hassan Fathy's Vernacular Philosophy",
          titleAr: 'الدرس الأول: العمارة المصرية الصرحية وفلسفة حسن فتحي في عمارة الفقراء',
          summaryEn: "Ancient monumental post-and-beam architecture, Islamic urban features (Sabil-Kuttab, stone domes, Mashrabiya cooling), and Hassan Fathy's vernacular mudbrick bioclimatic architecture in New Gourna.",
          summaryAr: 'العمارة الفرعونية القائمة على العتب والعمود، العمارة الإسلامية بالقاهرة (السبيل والكتاب، القباب المنحوتة، المشربية)، وفلسفة حسن فتحي المعمارية في القرنة الجديدة.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Egyptian Monumental Architecture & Hassan Fathy's Legacy
## العمارة المصرية الصرحية وتراث المعماري حسن فتحي

### 1. Ancient & Islamic Heritage Typologies (الأنماط المعمارية التاريخية)
- **Ancient Egyptian Temples**: Monumental pylon gateways, colonnaded hypostyle halls (صالة الأعمدة بالكرنك), with capitals inspired by papyrus and lotus blossoms.
- **Islamic Cairo**: Sabil-Kuttab public drinking and Quranic school endowments, Mamluk stone domes with intricate geometric carving, and carved wooden Mashrabiyas (المشربية) that filter sunlight, control cross-ventilation, and preserve family privacy.

### 2. Hassan Fathy (حسن فتحي 1900–1989)
World-renowned pioneer of vernacular architecture and author of "Architecture for the Poor" (عمارة الفقراء). He demonstrated that sustainable, dignified, and thermally comfortable architecture can be built using cheap, local sun-dried mud bricks (adobe / الطين النيء) without costly imported steel or concrete.
Key sustainable mechanisms revived by Fathy:
- **Nubian Vault and Dome (القبو والقبة النوبية)**: Self-supporting mud-brick vaults built without centering or timber frameworks.
- **Malkaf (ملقف الهواء)**: Roof windcatchers that scoop cool prevailing upper breezes and direct them down through the living spaces.
- **Courtyard (الفناء الداخلي)**: Shaded microclimatic oasis functioning as thermal regulator through natural night-time radiative cooling.
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Fine Arts & Visual Culture Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الفنية والفنون التشكيلية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-ARTS-MOE-2025',
            pageRange: 'pp. 218-255'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Environmental Principles of Egyptian Vernacular Architecture',
            titleAr: 'الخطة التدريسية: الخصائص البيئية والإنشائية للعمارة المصرية المحلية',
            objectives: [
              'Identify the passive cooling functions of the traditional Islamic Mashrabiya.',
              'Explain the zero-timber vaulting techniques championed by Hassan Fathy in New Gourna.',
              'Sketch an architectural cross-section demonstrating the airflow cycle of a Malkaf windcatcher.'
            ],
            warmUpEn: 'Show video footage of New Gourna village and compare thermal infrared images of concrete roofs versus earthen domes in summer.',
            warmUpAr: 'عرض لقطات وثائقية لقرية القرنة الجديدة ومقارنة صور الأشعة الحرارية للأسقف الخرسانية والقباب الطينية في ذروة الصيف.',
            activitiesEn: 'Students draft an architectural section drawing of an Egyptian vernacular house featuring a central courtyard, fountain, and Malkaf.',
            activitiesAr: 'يرسم الطلاب قطاعاً معمارياً لمنزل ريفي مصري يوضح حركة الهواء عبر الملقف والفناء المظلل ذي الفسقية.',
            differentiation: {
              support: 'Provide schematic air-vector templates illustrating convection loops.',
              advanced: 'Calculate the thermal lag hours of a 50cm mud-brick wall compared to a 15cm reinforced concrete slab.'
            },
            formativeAssessmentEn: 'Quick sketch assessment evaluating structural understanding of Nubian mudbrick arching.',
            formativeAssessmentAr: 'تقييم فوري لرسم تخطيطي يوضح كيفية رص قوالب الطوب في الأقبية النوبية دون شدات خشبية.',
            exitTicketQuestion: {
              questionEn: 'How did the traditional Egyptian Malkaf (windcatcher) lower interior temperatures without electricity?',
              questionAr: 'كيف استطاع ملقف الهواء المصري التراثي خفض درجات الحرارة داخل المبنى دون استهلاك كهرباء؟',
              solutionEn: 'By catching cooler high-altitude breezes and channeling them downward across water jars into the living space (باقتناص الهواء العلوي البارد وتوجيهه للأسفل فوق أواني فخارية رطبة).',
              solutionAr: 'باقتناص تيارات الهواء النقية الباردة من أعلى وتوجيهها لأسفل عبر مسار رطب لتبريد الفراغ.'
            }
          },
          worksheet: {
            id: 'ws_th_fa_ch4_l1',
            titleEn: 'Student Studio Worksheet: Vernacular Architecture and Environmental Design',
            titleAr: 'ورقة عمل الطالب: العمارة المحلية والتصميم البيئي التراثي',
            descriptionEn: 'Exercises drafting vernacular architectural elements and bioclimatic thermal features.',
            descriptionAr: 'تدريبات على رسم العناصر التراثية (المشربية، الملقف، القبة) وتفسير وظائفها البيئية.',
            estimatedTimeMinutes: 45,
            problems: fineArtsCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Egyptian Vernacular & Bioclimatic Architecture Studio',
            titleAr: 'استوديو العمارة المحلية والبيوكليمتية المصرية',
            descriptionEn: 'Interactive simulator modeling airflow through Malkafs, courtyards, and mudbrick domes.',
            descriptionAr: 'محاكاة تفاعلية لحركة الهواء والتبريد السلبي عبر الملاقف والأفنية والقباب الطينية.'
          }
        },
        {
          id: 'th_fa_ch4_l2',
          titleEn: 'Lesson 2: Applied Arts, Typography, Product Design & Faculty Aptitude Standards',
          titleAr: 'الدرس الثاني: الفنون التطبيقية، التايبوجرافي، التصميم الصناعي واختبارات القدرات',
          summaryEn: 'Fields of applied design (interior, graphic, ceramic, industrial product design), typographic hierarchy and font anatomy, and official ministerial aptitude test standards for faculties of Fine Arts and Architecture.',
          summaryAr: 'مجالات الفنون التطبيقية (العمارة الداخلية، الخزف، الجرافيك، التصميم الصناعي)، تشريح الحرف التايبوجرافي، ومعايير اختبارات القدرات الرسمية لكليات الفنون الجميلة والعمارة.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Applied Arts, Typography & Faculty Aptitude Testing
## الفنون التطبيقية، التايبوجرافي ومعايير اختبارات القدرات الأكاديمية

### 1. Applied Arts & Design Disciplines (مجالات الفنون التطبيقية)
- **Interior Architecture (التصميم الداخلي)**: Spatial ergonomics, functional circulation, artificial and natural lighting, and acoustic comfort.
- **Graphic Design & Typography (التصميم الجرافيكي وفنون الخط)**: Visual identity, advertising posters, branding, and font anatomy (Serif vs Sans-serif, x-height, baseline, kerning).
- **Industrial Product Design (التصميم الصناعي)**: Designing mass-produced functional tools, furniture, and appliances integrating ergonomics, production economics, and aesthetic appeal.

### 2. Egyptian Faculty Aptitude Exam Standards (معايير اختبارات القدرات لكليات الفنون والعمارة)
Ministerial aptitude examinations evaluate candidates across three critical components:
1. **Freehand Drawing & Perspective (الرسم المنظوري الحر)**: Constructing an authentic 2-point perspective architectural space or object composition with strict vanishing point alignment.
2. **Design & Compositional Layout (التصميم الابتكاري)**: Creating a balanced thematic poster or pattern utilizing dynamic typography, stylized motifs, and harmonious complementary/analogous color schemes.
3. **Visual Culture & Proportional Judgment (الثقافة البصرية ومعالجة الظلال)**: Accurate rendering of 5-value tone gradations, cast shadows, and knowledge of Egyptian art history.
`,
          moeRef: {
            bookTitleEn: 'Official Ministry Fine Arts & Visual Culture Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الفنية والفنون التشكيلية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-ARTS-MOE-2025',
            pageRange: 'pp. 256-290'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Mastering the Egyptian Faculty Aptitude Examination',
            titleAr: 'الخطة التدريسية: الإتقان الاحترافي لاختبارات قدرات كليات الفنون والعمارة',
            objectives: [
              'Draft an interior architectural perspective under timed exam conditions (45 minutes).',
              'Design an expressive advertising poster featuring Arabic typographic integration and color harmony.',
              'Execute clean volumetric shading and cast shadow projections on complex geometric assemblies.'
            ],
            warmUpEn: 'Review authentic past ministerial aptitude test prompt sheets and analyze the grading rubrics used by university juries.',
            warmUpAr: 'مراجعة أوراق أسئلة امتحانات القدرات الوزارية للسنوات السابقة وتحليل معايير لجان التحكيم في كليات الفنون والعمارة.',
            activitiesEn: 'Timed mock exam simulation: Students produce a complete perspective sketch and poster design conforming to aptitude examination specifications.',
            activitiesAr: 'محاكاة اختبار عملي مؤقت: ينفذ الطلاب موضوعاً منظورياً متكاملاً وتصميماً ابتكارياً وفق مقاييس اختبارات القدرات.',
            differentiation: {
              support: 'Provide step-by-step checklist covering perspective lines, scale, and value contrast.',
              advanced: 'Introduce advanced two-point interior perspective with multi-level split ceilings and curved arches.'
            },
            formativeAssessmentEn: 'Jury-style critique applying the official Ministry 100-point aptitude assessment grid.',
            formativeAssessmentAr: 'تحكيم نموذجي يطبق استمارة التقييم الوزارية الرسمية ذات الـ 100 درجة لاختبارات القدرات.',
            exitTicketQuestion: {
              questionEn: 'In ministerial aptitude examinations, what is the key difference between Serif and Sans-serif typefaces in design layout?',
              questionAr: 'في اختبارات التصميم والقدرات، ما هو الفارق الشكلي الأساسي بين الخطوط ذات التذييلات (Serif) والخطوط المجردة (Sans-serif)؟',
              solutionEn: 'Serif fonts have small decorative strokes (feet) at letter ends, conveying classic formality, while Sans-serif fonts lack them, projecting modern clean minimalism.',
              solutionAr: 'خطوط السيريف تحتوي على زوائد وزخارف دقيقة في نهايات الحروف تمنحها طابعاً كلاسيكياً، بينما تخلو خطوط السانس سيريف من الزوائد لتعطي انطباعاً عصرياً بسيطاً.'
            }
          },
          worksheet: {
            id: 'ws_th_fa_ch4_l2',
            titleEn: 'Student Studio Worksheet: Aptitude Exam Drills & Typographic Design',
            titleAr: 'ورقة عمل الطالب: تدريبات اختبارات القدرات وتصميم التايبوجرافي',
            descriptionEn: 'Timed design challenges, perspective constructions, and poster typography layouts.',
            descriptionAr: 'تدريبات عملية مكثفة على نماذج اختبارات القدرات وتوزيع العبارات والخطوط في الملصقات.',
            estimatedTimeMinutes: 45,
            problems: fineArtsCh4SolvedExamples.slice(3, 6)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Faculty Aptitude Exam Simulator & Evaluator',
            titleAr: 'محاكي ومقيم اختبارات قدرات الفنون والعمارة',
            descriptionEn: 'Interactive aptitude scenario analyzer providing automated criteria evaluation for perspective, composition, and shading.',
            descriptionAr: 'محاكي تفاعلي لموضوعات اختبارات القدرات يقدم تقييماً فورياً لمهارات المنظور والتكوين والتظليل.'
          }
        }
      ],
      solvedExamples: fineArtsCh4SolvedExamples,
      exerciseProblems: fineArtsCh4Exercises,
      databank: fineArtsCh4Databank
    }
  ]
};
