export interface DesmosPreset {
  id: string;
  category: 'calculus' | 'solid_3d' | 'statics_dynamics' | 'algebra_analysis' | 'scientific';
  mode: '2d' | '3d' | 'scientific' | 'geometry';
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  latex: string;
  expressions: string[];
}

export const desmosPresets: DesmosPreset[] = [
  // --- 1. Calculus & Analysis (2D) ---
  {
    id: 'calc_tangent_normal',
    category: 'calculus',
    mode: '2d',
    titleEn: 'Tangent & Normal to a Cubic Curve',
    titleAr: 'مماس وعمودي لمنحنى دالة تكعيبية',
    descEn: 'Dynamic tangent and normal line at point a on cubic function f(x) = x³ - 3x.',
    descAr: 'مماس وعمودي ديناميكي عند النقطة a على منحنى الدالة التكعيبية د(س) = س³ - ٣س.',
    latex: 'f(x) = x^3 - 3x,\\quad y - f(a) = f\'(a)(x - a)',
    expressions: [
      'f(x) = x^3 - 3x',
      'a = 1',
      '(a, f(a))',
      'y - f(a) = f\'(a)(x - a)',
      'y - f(a) = -\\frac{1}{f\'(a)}(x - a)'
    ]
  },
  {
    id: 'calc_extrema_inflection',
    category: 'calculus',
    mode: '2d',
    titleEn: 'Critical Points & Point of Inflection',
    titleAr: 'النقاط الحرجة ونقطة الانقلاب وفترات التحدب',
    descEn: 'Plot function alongside its first and second derivatives to analyze concavity.',
    descAr: 'تمثيل الدالة مع المشتقة الأولى والثانية لتحليل التحدب لأعلى ولأسفل ونقط الانقلاب.',
    latex: 'f(x) = 2x^3 - 9x^2 + 12x + 1,\\quad f\'(x),\\quad f\'\'(x)',
    expressions: [
      'f(x) = 2x^3 - 9x^2 + 12x + 1',
      'f\'(x)',
      'f\'\'(x)',
      '(1, f(1))',
      '(2, f(2))',
      '(1.5, f(1.5))'
    ]
  },
  {
    id: 'calc_trig_reciprocals',
    category: 'calculus',
    mode: '2d',
    titleEn: 'Secant & Cosecant Graphs & Asymptotes',
    titleAr: 'منحنيات القاطع وقاطع التمام وخطوط التقارب الرأسية',
    descEn: 'Visualize sec(x) and csc(x) with their characteristic vertical asymptotes.',
    descAr: 'رسم قا(س) وقتا(س) وتوضيح خطوط التقارب الرأسية ودورات الدوال.',
    latex: 'y = \\sec(x),\\quad y = \\csc(x)',
    expressions: [
      'y = \\sec(x)',
      'y = \\csc(x)',
      'x = \\frac{\\pi}{2} + k\\pi'
    ]
  },
  {
    id: 'calc_exponential_log',
    category: 'calculus',
    mode: '2d',
    titleEn: 'Natural Exponential & Natural Logarithm',
    titleAr: 'الدالة الأسية الطبيعية واللوغاريتم الطبيعي (الأساس هـ)',
    descEn: 'Inverse function relationship across line y = x and slope at x = 1.',
    descAr: 'علاقة الانعكاس حول المستقيم ص = س وميل المماس عند س = ١.',
    latex: 'y = e^x,\\quad y = \\ln(x),\\quad y = x',
    expressions: [
      'y = e^x',
      'y = \\ln(x)',
      'y = x',
      '(1, 0)',
      '(0, 1)'
    ]
  },
  {
    id: 'calc_area_between_curves',
    category: 'calculus',
    mode: '2d',
    titleEn: 'Area Enclosed Between Two Curves',
    titleAr: 'المساحة المحصورة بين منحنيين',
    descEn: 'Region bounded by parabola y = 4 - x² and straight line y = x + 2.',
    descAr: 'المنطقة المحصورة بين المنحنى ص = ٤ - س² والمستقيم ص = س + ٢.',
    latex: 'y_1 = 4 - x^2,\\quad y_2 = x + 2,\\quad \\int_{-2}^1 (y_1 - y_2)\\,dx',
    expressions: [
      'f(x) = 4 - x^2',
      'g(x) = x + 2',
      'x + 2 \\le y \\le 4 - x^2 \\left\\{-2 \\le x \\le 1\\right\\}'
    ]
  },

  // --- 2. Solid Geometry (3D) ---
  {
    id: 'solid_plane_standard',
    category: 'solid_3d',
    mode: '3d',
    titleEn: 'Equation of Plane & Normal Vector in R³',
    titleAr: 'معادلة المستوى ومتجه الاتجاه العمودي ن في الفراغ',
    descEn: 'Plane 2x + 3y + 4z = 12 with normal vector n = (2, 3, 4) and axis intercepts.',
    descAr: 'المستوى ٢س + ٣ص + ٤ع = ١٢ مع متجه العمودي ن = (٢، ٣، ٤) والأجزاء المقطوعة من المحاور.',
    latex: '2x + 3y + 4z = 12,\\quad \\vec{n} = (2, 3, 4)',
    expressions: [
      '2x + 3y + 4z = 12',
      'x/6 + y/4 + z/3 = 1',
      '(6, 0, 0)',
      '(0, 4, 0)',
      '(0, 0, 3)'
    ]
  },
  {
    id: 'solid_sphere_shifted',
    category: 'solid_3d',
    mode: '3d',
    titleEn: 'Sphere in Space with Center & Radius',
    titleAr: 'معادلة الكرة في الفراغ بمعلومية المركز ونصف القطر',
    descEn: 'Sphere with center (2, -3, 4) and radius R = 4.',
    descAr: 'كرة مركزها م(٢، -٣، ٤) ونصف قطرها نق = ٤ وحدات طول.',
    latex: '(x - 2)^2 + (y + 3)^2 + (z - 4)^2 = 16',
    expressions: [
      '(x - 2)^2 + (y + 3)^2 + (z - 4)^2 = 16',
      '(2, -3, 4)'
    ]
  },
  {
    id: 'solid_intersecting_planes',
    category: 'solid_3d',
    mode: '3d',
    titleEn: 'Line of Intersection of Two Planes',
    titleAr: 'خط تقاطع مستويين في الفراغ ثلاثي الأبعاد',
    descEn: 'Simultaneous intersection of x + y + z = 3 and 2x - y + z = 1.',
    descAr: 'التقاطع المشترك للمستويين س + ص + ع = ٣ و ٢س - ص + ع = ١.',
    latex: 'x + y + z = 3,\\quad 2x - y + z = 1',
    expressions: [
      'x + y + z = 3',
      '2x - y + z = 1'
    ]
  },
  {
    id: 'solid_cone_surface',
    category: 'solid_3d',
    mode: '3d',
    titleEn: 'Right Circular Cone Quadric Surface',
    titleAr: 'سطح المخروط الدائري القائم ثلاثي الأبعاد',
    descEn: 'Double cone quadric surface with vertex at the origin.',
    descAr: 'سطح المخروط المزدوج الذي رأسه عند نقطة الأصل في الفراغ.',
    latex: 'z^2 = x^2 + y^2',
    expressions: [
      'z^2 = x^2 + y^2',
      'z = \\sqrt{x^2 + y^2}'
    ]
  },
  {
    id: 'solid_paraboloid_elliptic',
    category: 'solid_3d',
    mode: '3d',
    titleEn: 'Elliptic Paraboloid Quadric Surface',
    titleAr: 'السطح المكافئ الدوراني (Paraboloid)',
    descEn: 'Bowl-shaped quadric surface generated by revolving a parabola.',
    descAr: 'السطح الناتج عن دوران قطع مكافئ حول محور تماثله.',
    latex: 'z = x^2 + y^2',
    expressions: [
      'z = x^2 + y^2',
      'z = 4'
    ]
  },
  {
    id: 'solid_cylinder',
    category: 'solid_3d',
    mode: '3d',
    titleEn: 'Circular Cylinder Along Z-Axis',
    titleAr: 'الأسطوانة الدائرية القائمة الموازية لمحور ع',
    descEn: 'Infinite cylindrical shell of radius R = 3 centered along z-axis.',
    descAr: 'أسطوانة دائرية نصف قطرها ٣ وحدات طول ممتدة على طول محور ع.',
    latex: 'x^2 + y^2 = 9',
    expressions: [
      'x^2 + y^2 = 9'
    ]
  },

  // --- 3. Statics & Dynamics (Applied Math) ---
  {
    id: 'dyn_projectile_trajectory',
    category: 'statics_dynamics',
    mode: '2d',
    titleEn: 'Projectile Motion Trajectory with Launch Angle',
    titleAr: 'مسار حركة المقذوفات وزاوية الإطلاق والمدى الأفقي',
    descEn: 'Parabolic trajectory equation under gravity g = 9.8 m/s² with adjustable angle and velocity.',
    descAr: 'معادلة مسار المقذوف تحت تأثير الجاذبية الأرضية مع زاوية القذف والسرعة الابتدائية.',
    latex: 'y = x\\tan(\\theta) - \\frac{g x^2}{2 v_0^2 \\cos^2(\\theta)}',
    expressions: [
      'g = 9.8',
      'v_0 = 25',
      '\\theta = 0.785',
      'y = x\\tan(\\theta) - \\frac{g x^2}{2 v_0^2 \\cos^2(\\theta)} \\left\\{y \\ge 0\\right\\}'
    ]
  },
  {
    id: 'stat_resultant_angle',
    category: 'statics_dynamics',
    mode: '2d',
    titleEn: 'Resultant of Two Concurrent Forces vs Angle',
    titleAr: 'محصلة قوتين متلاقيتين في نقطة بدلالة الزاوية بينهما',
    descEn: 'Magnitude of resultant R as angle theta varies from 0 to pi.',
    descAr: 'معيار المحصلة ح عند تغير الزاوية ي بين ٠ و ١٨٠ درجة.',
    latex: 'R(\\theta) = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos(\\theta)}',
    expressions: [
      'F_1 = 30',
      'F_2 = 40',
      'R(x) = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos(x)} \\left\\{0 \\le x \\le \\pi\\right\\}'
    ]
  },
  {
    id: 'dyn_shm_motion',
    category: 'statics_dynamics',
    mode: '2d',
    titleEn: 'Simple Harmonic Motion Displacement & Velocity',
    titleAr: 'الحركة التوافقية البسيطة: الإزاحة والسرعة والزمن',
    descEn: 'Sinusoidal displacement x(t) and velocity v(t) showing 90-degree phase shift.',
    descAr: 'منحنى الإزاحة والسرعة مع فرق الطور بمقدار ٩٠ درجة.',
    latex: 'x(t) = A\\cos(\\omega t),\\quad v(t) = -A\\omega\\sin(\\omega t)',
    expressions: [
      'A = 5',
      'w = 2',
      'x(t) = A \\cos(w \\cdot t)',
      'v(t) = -A \\cdot w \\cdot \\sin(w \\cdot t)'
    ]
  },

  // --- 4. Scientific Calculator Basics ---
  {
    id: 'sci_combinatorics',
    category: 'scientific',
    mode: 'scientific',
    titleEn: 'Combinations & Permutations (nCr & nPr)',
    titleAr: 'التوافيق والتباديل ومضروب العدد (ق، ل، !)',
    descEn: 'Official high-frequency Thanaweya combinatorics operations.',
    descAr: 'حساب التباديل والتوافيق والمضاريب لمنهج الجبر المصري.',
    latex: 'nCr(10, 3) = 120,\\quad nPr(10, 3) = 720,\\quad 7! = 5040',
    expressions: [
      'nCr(10, 3)',
      'nPr(10, 3)',
      '7!'
    ]
  }
];
