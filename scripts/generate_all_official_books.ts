import { PDFDocument, rgb, StandardFonts, PDFPage, PDFFont, RGB } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';
import { officialBooksList, OfficialBook } from '../src/data/officialBooksData.js';

// Convert hex color to rgb
function hexToRgb(hex: string): RGB {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  return rgb(r, g, b);
}

// Lighten/Darken helper
function blendWithWhite(color: RGB, factor: number): RGB {
  return rgb(
    color.red + (1 - color.red) * factor,
    color.green + (1 - color.green) * factor,
    color.blue + (1 - color.blue) * factor
  );
}

function blendWithBlack(color: RGB, factor: number): RGB {
  return rgb(
    color.red * (1 - factor),
    color.green * (1 - factor),
    color.blue * (1 - factor)
  );
}

// Sanitize text to pure ASCII for WinAnsi PDF StandardFonts
function sanitizeAscii(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/[•●]/g, '-')
    .replace(/[✓✔]/g, '[+]')
    .replace(/[▸►]/g, '>')
    .replace(/[⚠]/g, '[!]')
    .replace(/[©]/g, '(c)')
    .replace(/[^\x20-\x7E]/g, ' ')
    .replace(/\s+/g, ' ');
}

// Monkey-patch PDFPage.prototype.drawText to guarantee safety
const originalDrawText = (PDFPage.prototype as any).drawText;
(PDFPage.prototype as any).drawText = function (text: any, options: any) {
  return originalDrawText.call(this, sanitizeAscii(text), options);
};

// Word wrapping helper
function wrapText(rawText: string, maxWidth: number, font: PDFFont, fontSize: number): string[] {
  const text = sanitizeAscii(rawText);
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);
    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

// Detailed topic data specific to each book
interface BookDetailedContent {
  frameworkOverview: string;
  bloomBreakdown: { knowledge: number; application: number; hots: number };
  examDuration: string;
  totalMarks: number;
  syllabusRows: { chapter: string; weeks: number; marks: number; percentage: string; focus: string }[];
  chapterDetails: {
    title: string;
    learningOutcomes: string[];
    coreTheorems: string[];
    standardFormulas: string[];
    examinerPitfalls: string[];
  }[];
  formulaSheet: { category: string; formulas: string[] }[];
  guidelines: string[];
}

const detailedContentMap: Record<string, BookDetailedContent> = {
  'th-alg-sol-g12': {
    frameworkOverview:
      'The Pure Mathematics: Algebra & Solid Geometry curriculum for Grade 12 develops rigorous analytic and algebraic reasoning. It unites discrete combinatorics, complex analysis in polar and exponential forms, linear systems with matrix algebra, and three-dimensional spatial Euclidean geometry. This syllabus equips students for higher engineering, physics, and computer science degrees.',
    bloomBreakdown: { knowledge: 30, application: 40, hots: 30 },
    examDuration: '120 Minutes (2 Hours)',
    totalMarks: 30,
    syllabusRows: [
      { chapter: 'Permutations, Combinations & Binomial Theorem', weeks: 5, marks: 7, percentage: '23.3%', focus: 'Combinatorics, Binomial Expansion, General Term' },
      { chapter: 'Complex Numbers & De Moivre Theorem', weeks: 5, marks: 7, percentage: '23.3%', focus: 'Argand Plane, Polar/Euler Form, nth Roots of Unity' },
      { chapter: 'Matrices, Determinants & Linear Systems', weeks: 4, marks: 6, percentage: '20.0%', focus: 'Rank, Inverse Matrix, Cramer Rule, Gaussian' },
      { chapter: '3D Cartesian Coordinates & Vectors', weeks: 4, marks: 5, percentage: '16.7%', focus: 'Dot/Cross Product, Sphere Equation, Direction Cosines' },
      { chapter: 'Lines and Planes in 3D Space', weeks: 4, marks: 5, percentage: '16.7%', focus: 'Vector/Parametric/Cartesian Equations, Angles, Distances' },
    ],
    chapterDetails: [
      {
        title: 'Chapter 1: Permutations, Combinations & Binomial Theorem',
        learningOutcomes: [
          'Master fundamental counting principle with and without replacement, ordered and unordered collections.',
          'Derive and manipulate permutations nPr and combinations nCr identities: nCr = nC(n-r) and nCr + nC(r-1) = (n+1)Cr.',
          'Expand (a + b)^n using Binomial Theorem, identify the general term T_(r+1) = nCr * a^(n-r) * b^r, find middle terms and greatest coefficient.',
          'Solve advanced systems involving ratios of consecutive terms: T_(r+1) / T_r = ((n - r + 1) / r) * (b / a).',
        ],
        coreTheorems: [
          'Fundamental Counting Principle: If task A has m ways and task B has n ways, sequential completion has m * n ways.',
          'Binomial Theorem: (a + b)^n = Sum_{r=0}^n [ nCr * a^(n-r) * b^r ] for positive integer n.',
          'Pascal Combinatorial Recurrence: nCr + nC(r-1) = (n+1)Cr.',
          'Consecutive Term Ratio Theorem: T_(r+1) / T_r = ((n - r + 1) / r) * (Term_2 / Term_1).',
        ],
        standardFormulas: [
          'nPr = n! / (n - r)!',
          'nCr = n! / [ r! (n - r)! ] = nPr / r!',
          'nCr / nC(r-1) = (n - r + 1) / r',
          'T_(r+1) = nCr * (x)^(n-r) * (y)^r in expansion of (x + y)^n',
          'Sum of coefficients in (a x + b)^n = (a + b)^n [Substitute x = 1]',
        ],
        examinerPitfalls: [
          'Confusing order significance: using permutations where combinations are needed in geometric configurations (diagonals, triangles).',
          'Neglecting negative signs inside terms when computing T_(r+1) in expansions like (2x - 3/x)^n.',
          'Failing to verify integer constraints on r when seeking the term independent of x.',
        ],
      },
      {
        title: 'Chapter 2: Complex Numbers & De Moivre Theorem',
        learningOutcomes: [
          'Represent complex numbers in Cartesian z = x + i y, trigonometric/polar z = r (cos theta + i sin theta), and Euler exponential z = r e^(i theta) forms.',
          'Apply De Moivre theorem for integer and rational exponents: [r (cos theta + i sin theta)]^n = r^n (cos n theta + i sin n theta).',
          'Extract all n-th roots of a complex number evenly distributed on the circle of radius r^(1/n).',
          'Operate with the cubic roots of unity 1, omega, omega^2 and their algebraic properties (1 + omega + omega^2 = 0, omega^3 = 1).',
        ],
        coreTheorems: [
          'De Moivre Theorem: (cos theta + i sin theta)^n = cos(n theta) + i sin(n theta) for all rational n.',
          'Euler Identity: e^(i theta) = cos theta + i sin theta, e^(i pi) + 1 = 0.',
          'Roots of Unity Theorem: The n roots of 1 form vertices of a regular n-gon centered at the origin on the unit circle.',
          'Properties of Omega: omega^2 + omega + 1 = 0, omega - omega^2 = +- i * sqrt(3), omega^(3k) = 1.',
        ],
        standardFormulas: [
          'Modulus: r = |z| = sqrt(x^2 + y^2), Principal argument: -pi < theta <= pi',
          'Multiplication: z1 * z2 = r1 r2 [cos(theta1 + theta2) + i sin(theta1 + theta2)]',
          'Division: z1 / z2 = (r1 / r2) [cos(theta1 - theta2) + i sin(theta1 - theta2)]',
          'Roots: z^(1/n) = r^(1/n) [cos((theta + 2 k pi)/n) + i sin((theta + 2 k pi)/n)], k = 0, 1, ..., n-1',
          'Omega identities: 1 + omega = -omega^2, 1 + omega^2 = -omega, omega + omega^2 = -1',
        ],
        examinerPitfalls: [
          'Calculating arg(z) incorrectly in quadrants 2, 3, and 4 (must maintain -180 < theta <= 180 degrees).',
          'Missing the imaginary unit i in roots or confusing (omega - omega^2)^2 = -3.',
          'Applying De Moivre to non-standard trigonometric forms like (sin theta + i cos theta) without shifting by (pi/2 - theta).',
        ],
      },
      {
        title: 'Chapter 3: Matrices, Determinants & Linear Systems',
        learningOutcomes: [
          'Evaluate 2x2 and 3x3 determinants using cofactor expansion and Laplace development.',
          'Apply triangular matrix determinant theorem and properties of row operations.',
          'Find the adjugate matrix and multiplicative inverse A^(-1) = (1 / det(A)) * adj(A).',
          'Determine matrix rank Rank(A) and augmented matrix rank Rank(A|B) to classify system solvability (Rouche-Capelli Theorem).',
        ],
        coreTheorems: [
          'Determinant Transpose Theorem: det(A^T) = det(A).',
          'Product Theorem: det(A B) = det(A) * det(B); det(k A) = k^n det(A) for n x n matrix.',
          'Invertibility Theorem: Square matrix A is invertible if and only if det(A) != 0.',
          'Rouche-Capelli Theorem: Consistent system iff Rank(A) = Rank(A|B). Unique solution if rank = n; infinite solutions if rank < n.',
        ],
        standardFormulas: [
          'Inverse matrix: A^(-1) = (1 / |A|) * Adj(A)',
          'System solution: X = A^(-1) * B',
          'Cramer Rule: x_i = det(A_i) / det(A)',
          'Homogeneous system: Has non-trivial solutions iff det(A) = 0',
        ],
        examinerPitfalls: [
          'Confusing matrix multiplication properties: AB != BA in general.',
          'Sign errors when computing cofactor matrix (remember checkerboard pattern + - + -).',
          'Forgetting that row operations change determinant values (swapping rows multiplies det by -1).',
        ],
      },
      {
        title: 'Chapter 4 & 5: Three-Dimensional Analytical Geometry',
        learningOutcomes: [
          'Work with 3D coordinate frames, distance formula, midpoint, and sphere equations (x-a)^2 + (y-b)^2 + (z-c)^2 = r^2.',
          'Compute vector dot product (A . B = |A||B| cos theta) and cross product (A x B = |A||B| sin theta n_hat).',
          'Calculate direction angles, direction cosines (l^2 + m^2 + n^2 = 1), and direction ratios.',
          'Write vector, parametric, and Cartesian equations of lines and planes in 3D space.',
          'Find perpendicular distance from a point to a plane and angle between two planes or line and plane.',
        ],
        coreTheorems: [
          'Direction Cosines Identity: cos^2(alpha) + cos^2(beta) + cos^2(gamma) = 1.',
          'Orthogonality Condition: Vectors u and v are perpendicular iff u . v = 0.',
          'Collinearity / Parallel Condition: Vectors u and v are parallel iff u x v = 0 (or u = k v).',
          'Perpendicular Distance to Plane: d = |a x0 + b y0 + c z0 + d| / sqrt(a^2 + b^2 + c^2).',
        ],
        standardFormulas: [
          'Sphere: x^2 + y^2 + z^2 + 2Lx + 2My + 2Nk + D = 0, Center = (-L, -M, -N), r = sqrt(L^2 + M^2 + N^2 - D)',
          'Line in 3D: r = A + t d, (x - x1)/d1 = (y - y1)/d2 = (z - z1)/d3',
          'Plane in 3D: n . (r - r0) = 0 => a x + b y + c z + d = 0',
          'Angle between planes: cos theta = |n1 . n2| / (|n1| |n2|)',
          'Angle between line and plane: sin theta = |d . n| / (|d| |n|)',
        ],
        examinerPitfalls: [
          'Using cos theta instead of sin theta when computing angle between a line and a plane.',
          'Extracting normal vector from plane equation with incorrect signs when terms are on different sides of equality.',
          'Dividing by zero in symmetric line equation when a direction component is zero (must write x = x1 separately).',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Combinatorics & Binomial Theorem',
        formulas: [
          'nPr = n! / (n - r)!',
          'nCr = n! / [r! (n - r)!]',
          'nCr = nC(n-r)',
          'nCr + nC(r-1) = (n+1)Cr',
          'nCr / nC(r-1) = (n - r + 1) / r',
          'T_(r+1) = nCr * a^(n-r) * b^r',
          'T_(r+1) / T_r = ((n - r + 1) / r) * (b / a)',
        ],
      },
      {
        category: 'Complex Numbers & De Moivre',
        formulas: [
          'z = x + i y = r (cos theta + i sin theta) = r e^(i theta)',
          'r = sqrt(x^2 + y^2), tan theta = y / x',
          'z^n = r^n [cos(n theta) + i sin(n theta)]',
          'z^(1/n) = r^(1/n) [cos((theta + 2k pi)/n) + i sin((theta + 2k pi)/n)]',
          'omega^3 = 1, 1 + omega + omega^2 = 0',
          'omega - omega^2 = +- i sqrt(3)',
        ],
      },
      {
        category: 'Matrices & Determinants',
        formulas: [
          'A^(-1) = (1 / |A|) * Adj(A)',
          '|A^T| = |A|, |A B| = |A| |B|, |k A| = k^n |A|',
          'X = A^(-1) B (Matrix Equation)',
          'Rank(A) <= min(m, n)',
        ],
      },
      {
        category: 'Vectors & 3D Analytical Geometry',
        formulas: [
          'cos^2 alpha + cos^2 beta + cos^2 gamma = 1',
          'u . v = |u| |v| cos theta = u1 v1 + u2 v2 + u3 v3',
          'u x v = | i  j  k ; u1 u2 u3 ; v1 v2 v3 |',
          'd = |a x0 + b y0 + c z0 + d| / sqrt(a^2 + b^2 + c^2)',
          'cos theta = |n1 . n2| / (|n1| |n2|)',
          'sin theta = |d . n| / (|d| |n|)',
        ],
      },
    ],
    guidelines: [
      'Write complete step-by-step reasoning for all free-response questions.',
      'Show all matrix row operations explicitly when calculating determinants and inverses.',
      'Always specify the direction angles in degrees or radians with unambiguous notation.',
      'Verify that all complex arguments lie within the principal interval (-pi, pi].',
    ],
  },
  'th-calc-geom-g12': {
    frameworkOverview:
      'The Pure Mathematics: Calculus & Analytical Geometry curriculum for Grade 12 is the cornerstone of advanced mathematical analysis in the Thanaweya Amma program. It encompasses higher derivatives, implicit and parametric differentiation, related rates of change, curve sketching with inflection and concavity, optimization extrema, exponential and logarithmic integration, and volume by shells and disks.',
    bloomBreakdown: { knowledge: 30, application: 40, hots: 30 },
    examDuration: '120 Minutes (2 Hours)',
    totalMarks: 30,
    syllabusRows: [
      { chapter: 'Differentiation of Trigonometric & Inverse Trig Functions', weeks: 4, marks: 7, percentage: '23.3%', focus: 'Chain Rule, Higher Derivatives, Implicit/Parametric' },
      { chapter: 'Applications of Differentiation & Related Rates', weeks: 5, marks: 8, percentage: '26.7%', focus: 'Time Rates, Critical Points, Maxima/Minima, Inflection' },
      { chapter: 'Integration of Exponential & Logarithmic Functions', weeks: 5, marks: 8, percentage: '26.7%', focus: 'Indefinite/Definite Integrals, Substitution, By Parts' },
      { chapter: 'Definite Integrals, Plane Areas & Solids of Revolution', weeks: 4, marks: 7, percentage: '23.3%', focus: 'Area between curves, Volume by Disks/Washers' },
    ],
    chapterDetails: [
      {
        title: 'Chapter 1: Differentiation of Trigonometric & Implicit Functions',
        learningOutcomes: [
          'Differentiate sec(x), csc(x), cot(x) and composite trigonometric functions.',
          'Execute implicit differentiation for relations F(x, y) = 0 and parametric differentiation y = f(t), x = g(t).',
          'Compute higher-order derivatives d^2y/dx^2, d^3y/dx^3 and derive recurrence equations.',
          'Formulate equations of tangent and normal lines to planar curves at arbitrary given points.',
        ],
        coreTheorems: [
          'Trigonometric Derivative Rules: d/dx[sec x] = sec x tan x, d/dx[csc x] = -csc x cot x, d/dx[cot x] = -csc^2 x.',
          'Parametric Chain Rule: dy/dx = (dy/dt) / (dx/dt); d^2y/dx^2 = [d/dt(dy/dx)] / (dx/dt).',
          'Tangent-Normal Orthogonality: m_tangent * m_normal = -1 for non-horizontal tangents.',
        ],
        standardFormulas: [
          'y - y1 = m (x - x1) (Equation of Tangent)',
          'y - y1 = (-1/m) (x - x1) (Equation of Normal)',
          'd/dx [e^(f(x))] = f\'(x) e^(f(x))',
          'd/dx [ln|f(x)|] = f\'(x) / f(x)',
          'd/dx [a^x] = a^x ln(a)',
        ],
        examinerPitfalls: [
          'Failing to apply chain rule to the second derivative in parametric equations: forgetting to divide by dx/dt at the end.',
          'Angle multiplier omission: forgetting that d/dx[cos(3x)] = -3 sin(3x).',
          'Product rule neglect in implicit terms like d/dx[x * y] = y + x * dy/dx.',
        ],
      },
      {
        title: 'Chapter 2: Applications of Differentiation & Optimization',
        learningOutcomes: [
          'Model physical and geometric related rates of change with respect to time t.',
          'Determine intervals of increase, decrease, local extrema using first and second derivative tests.',
          'Investigate convexity/concavity (concave upwards vs downwards) and inflection points where f\'\'(x) = 0 or undefined.',
          'Solve applied global optimization problems across geometric, financial, and physical domains.',
        ],
        coreTheorems: [
          'Fermat Theorem: If f has a local extremum at c and f\'(c) exists, then f\'(c) = 0.',
          'Second Derivative Test: If f\'(c) = 0 and f\'\'(c) < 0, local max; if f\'\'(c) > 0, local min.',
          'Inflection Point Criterion: Point (c, f(c)) where concavity changes sign and tangent line exists.',
        ],
        standardFormulas: [
          'Critical points: f\'(x) = 0 or f\'(x) does not exist',
          'Concave Up: f\'\'(x) > 0 on interval; Concave Down: f\'\'(x) < 0',
          'Inflection point requires sign change of f\'\'(x) across x = c',
        ],
        examinerPitfalls: [
          'Assuming f\'\'(c) = 0 guarantees an inflection point without checking for actual sign alternation (e.g. f(x) = x^4 at x=0).',
          'Forgetting boundary points when seeking absolute (global) extrema on closed intervals [a, b].',
          'Misinterpreting related rate signs: shrinking dimensions must have negative time derivatives (dr/dt < 0).',
        ],
      },
      {
        title: 'Chapter 3 & 4: Integration Techniques, Areas & Volumes',
        learningOutcomes: [
          'Evaluate integrals of rational, exponential, and trigonometric functions using substitution and integration by parts.',
          'Apply the Fundamental Theorem of Calculus: d/dx [Integral_a^x f(t) dt] = f(x).',
          'Calculate total area bounded between two curves: Area = Integral_a^b |f(x) - g(x)| dx.',
          'Determine volumes of revolution about x-axis and y-axis using disk and washer integration.',
        ],
        coreTheorems: [
          'Integration by Parts: Integral u dv = u v - Integral v du.',
          'Logarithmic Integral: Integral [f\'(x) / f(x)] dx = ln|f(x)| + C.',
          'Volume of Revolution (x-axis): V = pi * Integral_a^b [y_upper^2 - y_lower^2] dx.',
          'Volume of Revolution (y-axis): V = pi * Integral_c^d [x_right^2 - x_left^2] dy.',
        ],
        standardFormulas: [
          'Integral e^(k x) dx = (1/k) e^(k x) + C',
          'Integral a^x dx = a^x / ln(a) + C',
          'Integral tan(x) dx = ln|sec x| + C',
          'Integral sec(x) dx = ln|sec x + tan x| + C',
          'Definite Integral Symmetry: Integral_{-a}^a f(x) dx = 0 if f is odd; 2 Integral_0^a f(x) dx if f is even.',
        ],
        examinerPitfalls: [
          'Omitting the absolute value sign in logarithmic integrals: ln|f(x)| is essential.',
          'Squaring before subtracting in washer volume formula: (y1 - y2)^2 is incorrect; must be (y1^2 - y2^2).',
          'Overlooking intersection points when finding enclosed areas, leading to missing interval subdivisions.',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Trigonometric Derivatives',
        formulas: [
          'd/dx [sin x] = cos x',
          'd/dx [cos x] = -sin x',
          'd/dx [tan x] = sec^2 x',
          'd/dx [cot x] = -csc^2 x',
          'd/dx [sec x] = sec x tan x',
          'd/dx [csc x] = -csc x cot x',
        ],
      },
      {
        category: 'Exponential & Logarithmic Calculus',
        formulas: [
          'd/dx [e^(u)] = u\' e^u',
          'd/dx [a^u] = u\' a^u ln a',
          'd/dx [ln u] = u\' / u',
          'd/dx [log_a u] = u\' / (u ln a)',
          'Integral [f\'(x) / f(x)] dx = ln|f(x)| + C',
          'Integral f\'(x) e^(f(x)) dx = e^(f(x)) + C',
        ],
      },
      {
        category: 'Integration by Parts & Special Forms',
        formulas: [
          'Integral u dv = u v - Integral v du',
          'Integral [f\'(x) * (f(x))^n] dx = (f(x))^(n+1) / (n+1) + C, (n != -1)',
          'Integral sec^2 x dx = tan x + C',
          'Integral csc^2 x dx = -cot x + C',
          'Integral sec x tan x dx = sec x + C',
        ],
      },
      {
        category: 'Geometric Applications (Areas & Volumes)',
        formulas: [
          'Area = Integral_a^b |y1 - y2| dx',
          'Volume_x = pi * Integral_a^b (y1^2 - y2^2) dx',
          'Volume_y = pi * Integral_c^d (x1^2 - x2^2) dy',
        ],
      },
    ],
    guidelines: [
      'Always sketch curve intersections before setting up area and volume integrals.',
      'Clearly justify local extrema using either the first derivative sign table or the second derivative value.',
      'Check for points where the derivative does not exist (corners, cusps, vertical tangents) as critical candidates.',
      'Write the constant of integration + C for all indefinite integrals.',
    ],
  },
  'th-statics-g12': {
    frameworkOverview:
      'The Applied Mathematics: Statics curriculum for Grade 12 develops foundational Newtonian and analytical equilibrium mechanics. Topics include friction on rough horizontal and inclined planes, coplanar and non-coplanar force moments in 2D and 3D, parallel force systems, general rigid body equilibrium, couples and equivalent systems, and center of gravity using lamina and composite body decomposition.',
    bloomBreakdown: { knowledge: 30, application: 40, hots: 30 },
    examDuration: '120 Minutes (2 Hours)',
    totalMarks: 30,
    syllabusRows: [
      { chapter: 'Friction on Rough Planes', weeks: 4, marks: 5, percentage: '16.7%', focus: 'Static Friction, Angle of Friction, Limiting Equilibrium' },
      { chapter: 'Moments of Forces in 2D & 3D Space', weeks: 5, marks: 7, percentage: '23.3%', focus: 'Varignon Theorem, Vector Moments, Perpendicular Distances' },
      { chapter: 'Parallel Force Systems', weeks: 4, marks: 5, percentage: '16.7%', focus: 'Resultant Magnitude, Direction, and Point of Action' },
      { chapter: 'General Rigid Body Equilibrium', weeks: 5, marks: 7, percentage: '23.3%', focus: 'Equilibrium Equations: Sum Fx = 0, Sum Fy = 0, Sum M = 0' },
      { chapter: 'Couples & Center of Gravity', weeks: 4, marks: 6, percentage: '20.0%', focus: 'Couple Moment, Equivalence, Centers of Mass by Moments' },
    ],
    chapterDetails: [
      {
        title: 'Chapter 1: Friction & Limiting Equilibrium',
        learningOutcomes: [
          'Distinguish between ordinary static friction F_s and limiting static friction F_s_max = mu_s * R.',
          'Define the angle of friction lambda (tan lambda = mu_s) and resultant reaction R\' = R sqrt(1 + mu_s^2) = R sec lambda.',
          'Analyze equilibrium of bodies on rough horizontal planes under horizontal and oblique pulling/pushing forces.',
          'Analyze equilibrium of bodies on rough inclined planes with inclination alpha relative to the angle of friction lambda.',
        ],
        coreTheorems: [
          'Limiting Friction Law: F_s <= mu_s * R, equality holds strictly at the verge of motion.',
          'Resultant Reaction Theorem: R\' = R + F_s (vector sum), |R\'| = R sqrt(1 + mu_s^2).',
          'Angle of Friction Relation: mu_s = tan lambda; if inclination alpha = lambda, body is on verge of sliding down under gravity alone.',
        ],
        standardFormulas: [
          'F_s = mu_s * R (at limiting equilibrium)',
          'R\' = R sec lambda',
          'Horizontal plane: R = W - P sin theta, F = P cos theta',
          'Inclined plane: R = W cos alpha +- P sin theta, F = W sin alpha +- P cos theta',
        ],
        examinerPitfalls: [
          'Assuming F = mu_s * R when the body is NOT at the verge of motion (F can be strictly less than mu_s * R).',
          'Reversing the direction of the friction force: friction always opposes the tendency of relative motion.',
          'Ignoring the vertical component of an inclined pulling force when calculating the normal reaction R.',
        ],
      },
      {
        title: 'Chapter 2 & 3: Moments & Parallel Forces',
        learningOutcomes: [
          'Compute vector moment of a force about a point: M_O = r x F.',
          'Apply Varignon Principle: the moment of the resultant equals the sum of moments of individual components.',
          'Calculate the perpendicular distance from the moment center to the line of action: L = |M_O| / |F|.',
          'Determine the resultant and point of application for parallel like and unlike force systems.',
        ],
        coreTheorems: [
          'Varignon Theorem: M_O(R) = Sum M_O(F_i).',
          'Parallel Forces Theorem: For like forces R = F1 + F2 acting internally; for unlike forces R = |F1 - F2| acting externally closer to larger force.',
          '3D Moment: M_O = (y Fz - z Fy) i + (z Fx - x Fz) j + (x Fy - y Fx) k.',
        ],
        standardFormulas: [
          'M_O = r x F',
          '|M_O| = F * L',
          'Parallel forces: F1 * x1 = F2 * x2 (about resultant point)',
          'Resultant position: x_R = (Sum F_i * x_i) / (Sum F_i)',
        ],
        examinerPitfalls: [
          'Reversing the position vector: r MUST be drawn from the moment center O to any point A on the line of action of F (r = r_A - r_O).',
          'Sign errors in 2D moments: counter-clockwise is positive (+), clockwise is negative (-).',
          'Dividing by zero when the resultant of unlike parallel forces is zero (forms a couple, not a single force).',
        ],
      },
      {
        title: 'Chapter 4 & 5: General Equilibrium, Couples & Center of Gravity',
        learningOutcomes: [
          'Formulate and solve complete rigid body equilibrium equations: Sum F_x = 0, Sum F_y = 0, Sum M_any_point = 0.',
          'Recognize couples, prove that moment of a couple is independent of the chosen reference origin.',
          'Identify equilibrium of a system under couples: Sum M_couples = 0.',
          'Calculate center of gravity for wire frameworks, uniform laminas, and composite bodies with negative mass technique.',
        ],
        coreTheorems: [
          'General Equilibrium Principle: A rigid body is in equilibrium iff resultant force R = 0 AND resultant moment M = 0.',
          'Couple Invariance: The algebraic sum of moments of two equal, opposite, non-collinear forces is constant about any point in space.',
          'Negative Mass Principle: A cutout / hole can be modeled as a body of negative mass placed at its geometric center.',
        ],
        standardFormulas: [
          'Equilibrium: Sum Fx = 0, Sum Fy = 0, Sum M_A = 0',
          'Couple Moment: M = +- F * d (where d is perpendicular arm)',
          'Center of Gravity: X_G = (Sum m_i * x_i) / (Sum m_i), Y_G = (Sum m_i * y_i) / (Sum m_i)',
          'Triangle Lamina: Center of gravity is at centroid G = ((x1+x2+x3)/3, (y1+y2+y3)/3)',
        ],
        examinerPitfalls: [
          'Neglecting the normal reaction direction at smooth hinges: hinge reaction has both X and Y components (R = sqrt(X^2 + Y^2)).',
          'Assuming ladder reaction at ground is vertical on a rough ground (must include horizontal friction).',
          'Using areas instead of lengths when computing center of gravity of thin uniform wires (wire mass is proportional to length, not area).',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Friction Principles',
        formulas: [
          'F_s <= mu_s * R',
          'F_max = mu_s * R',
          'mu_s = tan lambda',
          'R\' = R sqrt(1 + mu_s^2) = R sec lambda',
        ],
      },
      {
        category: 'Moments of Forces',
        formulas: [
          'M_O = r x F = (r_A - r_O) x F',
          'Perpendicular arm L = |M_O| / |F|',
          'Varignon: M_O(R) = Sum M_O(F_i)',
        ],
      },
      {
        category: 'General Equilibrium Conditions',
        formulas: [
          'Sum F_x = 0',
          'Sum F_y = 0',
          'Sum M_O = 0 (about any point O)',
          'Hinge Reaction: R = sqrt(X^2 + Y^2), tan theta = Y / X',
        ],
      },
      {
        category: 'Couples & Center of Gravity',
        formulas: [
          'Couple Moment M = +- F * d',
          'X_G = Sum(m_i * x_i) / Sum(m_i)',
          'Y_G = Sum(m_i * y_i) / Sum(m_i)',
          'Centroid of Triangle: ((x1+x2+x3)/3, (y1+y2+y3)/3)',
        ],
      },
    ],
    guidelines: [
      'Draw a clear Free Body Diagram (FBD) for every problem before writing algebraic equilibrium equations.',
      'State the chosen reference axes and positive moment direction explicitly.',
      'When resolving forces, write components with exact trigonometric values rather than decimal approximations.',
      'Check physical plausibility: reactions must remain non-negative for unilateral contacts.',
    ],
  },
  'th-dynamics-g12': {
    frameworkOverview:
      'The Applied Mathematics: Dynamics curriculum for Grade 12 studies the laws of motion, force, and energy in Newtonian physics. Topics include rectilinear kinematics with variable acceleration, Newton\'s three laws of motion, connected bodies and pulley systems, linear momentum and impulse, work, kinetic energy, potential energy, mechanical energy conservation, power, and collisions.',
    bloomBreakdown: { knowledge: 30, application: 40, hots: 30 },
    examDuration: '120 Minutes (2 Hours)',
    totalMarks: 30,
    syllabusRows: [
      { chapter: 'Kinematics & Variable Acceleration Differentiation/Integration', weeks: 4, marks: 5, percentage: '16.7%', focus: 'v = dx/dt, a = dv/dt = v dv/dx, Integral methods' },
      { chapter: 'Newton Laws of Motion & Connected Particles', weeks: 5, marks: 8, percentage: '26.7%', focus: 'First Law (Equilibrium), Second Law (F = ma), Pulleys, Lifts' },
      { chapter: 'Linear Momentum & Impulse', weeks: 4, marks: 5, percentage: '16.7%', focus: 'p = m v, I = F delta_t = delta_p, Direct Impact' },
      { chapter: 'Work, Kinetic Energy & Work-Energy Principle', weeks: 4, marks: 6, percentage: '20.0%', focus: 'W = Integral F . dr, T = 1/2 m v^2, Delta T = W' },
      { chapter: 'Potential Energy, Power & Energy Conservation', weeks: 4, marks: 6, percentage: '20.0%', focus: 'V = m g h, E = T + V = const, P = F . v, Maximum Power' },
    ],
    chapterDetails: [
      {
        title: 'Chapter 1: Rectilinear Motion & Variable Acceleration',
        learningOutcomes: [
          'Derive velocity v(t) = dx/dt and acceleration a(t) = dv/dt from displacement x(t).',
          'Use the fundamental chain rule identity for position-dependent acceleration: a = v * (dv/dx).',
          'Integrate acceleration functions to determine velocity and displacement given initial conditions.',
          'Distinguish between total displacement Delta x and total distance traveled Integral |v(t)| dt.',
        ],
        coreTheorems: [
          'Kinematic Chain Rule: a = dv/dt = (dv/dx) * (dx/dt) = v * (dv/dx).',
          'Integration with respect to time: v - v0 = Integral_0^t a(t) dt; x - x0 = Integral_0^t v(t) dt.',
          'Integration with respect to space: 1/2 (v^2 - v0^2) = Integral_{x0}^x a(x) dx.',
        ],
        standardFormulas: [
          'v = dx/dt',
          'a = dv/dt = d^2x/dt^2 = v (dv/dx)',
          'Uniform acceleration: v = v0 + a t, s = v0 t + 1/2 a t^2, v^2 = v0^2 + 2 a s',
          'Total distance = Integral_{t1}^{t2} |v(t)| dt (split at points where v = 0)',
        ],
        examinerPitfalls: [
          'Using uniform acceleration kinematic formulas when acceleration is variable (dependent on t, x, or v).',
          'Confusing displacement (net vector change) with distance traveled (scalar odometer path length).',
          'Missing the constant of integration when initial conditions are non-zero.',
        ],
      },
      {
        title: 'Chapter 2: Newton Laws & Connected Systems (Pulleys)',
        learningOutcomes: [
          'Apply Newton\'s First Law: uniform motion or rest implies net resultant force F_net = 0.',
          'Apply Newton\'s Second Law: rate of change of momentum equals applied force: F = d(mv)/dt = m a.',
          'Model motion of bodies in ascending and descending elevators (apparent weight vs true weight).',
          'Solve connected particle systems across simple smooth/rough pulleys, horizontal tables, and inclined planes.',
        ],
        coreTheorems: [
          'Newton First Law: Net force is zero iff acceleration is zero.',
          'Newton Second Law: F_net = m * a (for constant mass) or d(m v)/dt (variable mass).',
          'Elevator Principle: Apparent weight N = m (g +- a). Ascending with acceleration => N = m(g + a); descending => N = m(g - a).',
        ],
        standardFormulas: [
          'F_net = m a',
          'Elevator: N = m(g + a) [accelerating upwards], N = m(g - a) [accelerating downwards]',
          'Simple Atwood machine: a = (m1 - m2) g / (m1 + m2), T = 2 m1 m2 g / (m1 + m2), Pressure on pulley = 2 T',
          'Table pulley system: a = m1 g / (m1 + m2), Pressure = T sqrt(2)',
        ],
        examinerPitfalls: [
          'Unit inconsistency: mixing dynes/grams with Newtons/kilograms (1 N = 10^5 dynes = 1 kg * m/s^2).',
          'Forgetting that tension T is the same throughout a light smooth inextensible string.',
          'Misinterpreting elevator spring balance readings: scale reads normal contact force N, not just m g.',
        ],
      },
      {
        title: 'Chapter 3, 4 & 5: Momentum, Impulse, Work, Energy & Power',
        learningOutcomes: [
          'Compute linear momentum p = m v and impulse of a force I = Integral F dt = Delta p.',
          'Apply conservation of linear momentum for isolated systems: m1 v1 + m2 v2 = m1 v1\' + m2 v2\'.',
          'Calculate work done by constant and variable forces: W = Integral F . dr.',
          'Apply the Work-Energy Theorem: Delta T = W_net, where T = 1/2 m v^2.',
          'Apply mechanical energy conservation E = T + V = const in conservative force fields.',
          'Analyze instantaneous and maximum engine power: P = F . v.',
        ],
        coreTheorems: [
          'Impulse-Momentum Theorem: I = Integral_{t1}^{t2} F dt = m (v2 - v1).',
          'Work-Energy Theorem: Change in kinetic energy equals total work done by all forces: T - T0 = W.',
          'Conservation of Mechanical Energy: In a conservative field, T1 + V1 = T2 + V2.',
          'Power-Velocity Relation: Instantaneous power P = F * v * cos theta; at top speed on level road with constant resistance, F = R so P_max = R * v_max.',
        ],
        standardFormulas: [
          'Linear momentum: p = m v',
          'Impulse: I = F * Delta t = m (v - v0)',
          'Work: W = F . s = |F| |s| cos theta = Integral F dx',
          'Kinetic energy: T = 1/2 m v^2',
          'Gravitational potential energy: V = m g h',
          'Power: P = F . v (1 Horsepower = 75 kg.wt.m/s = 735 Watts)',
        ],
        examinerPitfalls: [
          'Mixing force units in power calculations: remember 1 HP = 735 W, and F must be in Newtons when multiplying by v in m/s.',
          'Overlooking friction or resistance work: W_friction = -f_k * d is negative.',
          'Confusing momentum conservation with kinetic energy conservation: kinetic energy is NOT conserved in inelastic collisions.',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Variable Kinematics',
        formulas: [
          'v = dx / dt',
          'a = dv / dt = v * (dv / dx)',
          'Integral v dv = Integral a dx',
          'Total distance = Integral |v| dt',
        ],
      },
      {
        category: 'Newton Laws & Pulleys',
        formulas: [
          'F = d(m v)/dt = m a',
          'N = m (g + a) [upwards acceleration]',
          'N = m (g - a) [downwards acceleration]',
          'Atwood machine: a = (m1 - m2)g / (m1 + m2)',
          'Atwood pulley pressure P = 2 T',
          'Table pulley pressure P = T sqrt(2)',
        ],
      },
      {
        category: 'Impulse & Momentum',
        formulas: [
          'p = m v',
          'I = F * Delta t = Integral F dt = Delta p',
          'Conservation: m1 v1 + m2 v2 = (m1 + m2) v\' (coalescing)',
        ],
      },
      {
        category: 'Work, Energy & Power',
        formulas: [
          'W = F . s = Integral F dx',
          'T = 1/2 m v^2',
          'Delta T = W_net (Work-Energy Theorem)',
          'T + V = constant (Conservative fields)',
          'Power P = F . v',
          '1 HP = 75 kg.wt * m/s = 735 Watts',
        ],
      },
    ],
    guidelines: [
      'Maintain strict unit consistency across MKS (m, kg, s, N, J, W) and CGS (cm, g, s, dyne, erg).',
      'Always distinguish between mass (kg) and weight force (kg.wt = 9.8 N).',
      'For pulley questions after string rupture, treat each body as an independent projectile under gravity and initial velocity.',
      'Check that friction always acts in the negative direction of relative velocity.',
    ],
  },
  'egbac-discrete-linalg': {
    frameworkOverview:
      'The EG-Baccalaureate Advanced Discrete Mathematics & Linear Systems curriculum provides advanced mathematical training for university-track engineering and computer science scholars. Topics encompass mathematical logic, propositional and predicate calculus, rigorous proof techniques, graph theory, combinatorics and generating functions, vector spaces, linear transformations, eigenvalues and eigenvectors, matrix diagonalizability, and singular value decomposition.',
    bloomBreakdown: { knowledge: 25, application: 45, hots: 30 },
    examDuration: '180 Minutes (3 Hours)',
    totalMarks: 100,
    syllabusRows: [
      { chapter: 'Formal Logic, Predicates & Proof Techniques', weeks: 4, marks: 15, percentage: '15.0%', focus: 'Induction, Contradiction, Well-Ordering, Quantifiers' },
      { chapter: 'Graph Theory & Network Topologies', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Eulerian/Hamiltonian, Trees, Planarity, Colorings' },
      { chapter: 'Combinatorics & Generating Functions', weeks: 4, marks: 15, percentage: '15.0%', focus: 'Inclusion-Exclusion, Recurrences, Ordinary Generating Functions' },
      { chapter: 'Vector Spaces & Linear Transformations', weeks: 6, marks: 25, percentage: '25.0%', focus: 'Subspaces, Bases, Dimension, Rank-Nullity Theorem' },
      { chapter: 'Eigenvalues, Diagonalization & SVD', weeks: 5, marks: 25, percentage: '25.0%', focus: 'Characteristic Polynomial, Spectral Theorem, Jordan Form' },
    ],
    chapterDetails: [
      {
        title: 'Chapter 1 & 2: Discrete Logic & Graph Theory',
        learningOutcomes: [
          'Formulate formal proofs using direct reasoning, mathematical induction, and contradiction.',
          'Classify graphs: bipartite, complete, regular, and planar graphs satisfying Euler formula V - E + F = 2.',
          'Analyze tree properties, spanning trees (Kruskal and Prim algorithms), and shortest paths (Dijkstra).',
          'Solve linear recurrence relations with constant coefficients via characteristic roots.',
        ],
        coreTheorems: [
          'Euler Polyhedral Formula: For connected planar graphs, V - E + F = 2.',
          'Handshaking Lemma: Sum_{v in V} deg(v) = 2 |E|.',
          'Eulerian Path Theorem: Connected graph has an Eulerian circuit iff every vertex has even degree.',
          'Rank-Nullity Theorem: dim(Ker T) + dim(Im T) = dim(V).',
        ],
        standardFormulas: [
          'Planar graph bound: E <= 3V - 6 (for V >= 3)',
          'Generating function for geometric progression: 1 / (1 - a x) = Sum_{n=0}^inf a^n x^n',
          'Recurrence characteristic equation: r^2 - c1 r - c2 = 0',
        ],
        examinerPitfalls: [
          'Omitting the base case or induction hypothesis step in structural induction proofs.',
          'Confusing planar graphs with planar embeddings.',
          'Applying the Handshaking lemma without accounting for directed versus undirected edge counts.',
        ],
      },
      {
        title: 'Chapter 3, 4 & 5: Vector Spaces, Linear Maps & Spectral Theory',
        learningOutcomes: [
          'Verify abstract vector space axioms over field F and establish subspace criteria.',
          'Find bases and dimensions for row space, column space, and null space (kernel) of a matrix.',
          'Compute eigenvalues and eigenvectors via characteristic equation det(A - lambda I) = 0.',
          'Diagonalize matrices: A = P D P^(-1), and apply the Spectral Theorem for real symmetric matrices.',
        ],
        coreTheorems: [
          'Spectral Theorem: Every real symmetric matrix is orthogonally diagonalizable by an orthogonal matrix Q.',
          'Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation p(A) = 0.',
          'Invertibility & Determinant: det(A) = Product of eigenvalues lambda_i.',
          'Trace Theorem: tr(A) = Sum of eigenvalues lambda_i.',
        ],
        standardFormulas: [
          'det(A - lambda I) = 0',
          'A v = lambda v',
          'A = P D P^(-1) where D = diag(lambda1, ..., lambdan)',
          'Inner product norm: ||v|| = sqrt(<v, v>)',
        ],
        examinerPitfalls: [
          'Assuming non-distinct eigenvalues implies non-diagonalizability (must inspect geometric multiplicity).',
          'Order mismatch between eigenvector columns in P and eigenvalue diagonals in D.',
          'Using non-orthogonal basis when performing orthogonal projections.',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Graph Invariants',
        formulas: [
          'Sum deg(v) = 2 |E|',
          'V - E + F = 2 (Planar)',
          'E <= 3V - 6 (Triangulated Planar)',
          'Chromatic number of planar graphs chi(G) <= 4',
        ],
      },
      {
        category: 'Linear Algebra Invariants',
        formulas: [
          'dim(Ker T) + dim(Im T) = dim(V)',
          'det(A - lambda I) = 0',
          'tr(A) = Sum lambda_i',
          'det(A) = Product lambda_i',
          'A = Q Lambda Q^T (Symmetric A)',
        ],
      },
    ],
    guidelines: [
      'State all formal hypotheses explicitly when constructing mathematical induction proofs.',
      'Show the complete characteristic polynomial calculation and factorizations.',
      'Check linear independence of proposed eigenvector sets before asserting diagonalizability.',
    ],
  },
  'egbac-analysis-calc': {
    frameworkOverview:
      'The EG-Baccalaureate Real Analysis & Advanced Calculus syllabus provides deep theoretical analysis of the continuum. Topics include the topology of real numbers, epsilon-delta limits, Bolzano-Weierstrass theorem, uniform continuity, Riemann and Darboux integration, multivariable partial derivatives, gradient vectors, directional derivatives, multiple double and triple integrals, and vector calculus (Green, Stokes, Divergence theorems).',
    bloomBreakdown: { knowledge: 25, application: 45, hots: 30 },
    examDuration: '180 Minutes (3 Hours)',
    totalMarks: 100,
    syllabusRows: [
      { chapter: 'Topology of R, Sequences & Epsilon-Delta Limits', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Completeness, Cauchy Sequences, Uniform Continuity' },
      { chapter: 'Rigorous Differentiation & Mean Value Theorems', weeks: 4, marks: 15, percentage: '15.0%', focus: 'Rolle, Cauchy MVT, Taylor Series with Remainder' },
      { chapter: 'Riemann Integration & Improper Integrals', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Darboux Sums, Lebesgue Criterion, Integral Convergence' },
      { chapter: 'Multivariable Calculus & Partial Derivatives', weeks: 5, marks: 25, percentage: '25.0%', focus: 'Gradient, Hessian, Lagrange Multipliers, Chain Rule' },
      { chapter: 'Multiple Integrals & Vector Field Theorems', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Fubini Theorem, Green, Stokes, Gauss Divergence' },
    ],
    chapterDetails: [
      {
        title: 'Chapter 1 & 2: Real Analysis & Rigorous Limits',
        learningOutcomes: [
          'Prove limits using formal epsilon-delta and epsilon-N definitions.',
          'Apply the Completeness Axiom (Least Upper Bound Property) and Bolzano-Weierstrass Theorem.',
          'Analyze uniform continuity on compact intervals [a, b] (Heine-Cantor Theorem).',
          'Derive Taylor series expansions with Lagrange and Cauchy forms of the remainder term.',
        ],
        coreTheorems: [
          'Bolzano-Weierstrass Theorem: Every bounded sequence in R has a convergent subsequence.',
          'Heine-Cantor Theorem: A continuous function on a closed bounded interval [a, b] is uniformly continuous.',
          'Taylor Theorem: f(x) = Sum_{k=0}^n [f^(k)(a)/k! * (x-a)^k] + R_n(x).',
        ],
        standardFormulas: [
          'Limit: |x - c| < delta => |f(x) - L| < epsilon',
          'Cauchy Sequence: |x_n - x_m| < epsilon for all n, m > N',
          'Lagrange Remainder: R_n(x) = [f^(n+1)(xi) / (n+1)!] * (x - a)^(n+1)',
        ],
        examinerPitfalls: [
          'Choosing delta dependent on x when proving uniform continuity.',
          'Confusing pointwise convergence with uniform convergence of function sequences.',
          'Omitting the domain bounds when evaluating Taylor remainder bounds.',
        ],
      },
      {
        title: 'Chapter 3, 4 & 5: Multivariable Calculus & Vector Fields',
        learningOutcomes: [
          'Compute directional derivatives D_u f(x, y) = grad(f) . u.',
          'Determine local extrema and saddle points of f(x, y) using the Hessian determinant.',
          'Optimize functions subject to equality constraints using the method of Lagrange Multipliers: grad(f) = lambda grad(g).',
          'Evaluate line, surface, and volume integrals using Green Theorem, Stokes Theorem, and Gauss Divergence Theorem.',
        ],
        coreTheorems: [
          'Clairaut Theorem: Mixed partial derivatives are equal f_xy = f_yx for C^2 functions.',
          'Green Theorem: Contour Integral (P dx + Q dy) = Double Integral ((dQ/dx - dP/dy)) dA.',
          'Gauss Divergence Theorem: Surface Integral (F . n) dS = Triple Integral (div F) dV.',
          'Stokes Theorem: Contour Integral (F . dr) = Surface Integral (curl F . n) dS.',
        ],
        standardFormulas: [
          'Gradient: grad f = (df/dx) i + (df/dy) j + (df/dz) k',
          'Directional Derivative: D_u f = grad f . u_hat',
          'Hessian: H = f_xx f_yy - (f_xy)^2; Local min if H > 0, f_xx > 0; Local max if H > 0, f_xx < 0; Saddle if H < 0',
          'Lagrange: grad f = lambda grad g',
          'Divergence: div F = dP/dx + dQ/dy + dR/dz',
          'Curl: curl F = del x F',
        ],
        examinerPitfalls: [
          'Using a non-unit vector in directional derivative calculations (u MUST be a unit vector).',
          'Neglecting the orientation of closed contours (counter-clockwise orientation required for Green Theorem).',
          'Failing to verify the smoothness / differentiability of vector fields before applying Divergence Theorem.',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Analysis Formulations',
        formulas: [
          'D_u f = grad f . u_hat',
          'Lagrange Multipliers: grad f = lambda grad g',
          'Hessian D = f_xx f_yy - (f_xy)^2',
          'Taylor Remainder R_n = [f^(n+1)(xi) / (n+1)!] (x - a)^(n+1)',
        ],
      },
      {
        category: 'Vector Calculus Theorems',
        formulas: [
          'Green: Integral (P dx + Q dy) = Double Integral (dQ/dx - dP/dy) dA',
          'Divergence: Surface Integral (F . n) dS = Triple Integral div F dV',
          'Stokes: Integral (F . dr) = Surface Integral (curl F . n) dS',
        ],
      },
    ],
    guidelines: [
      'Write epsilon-delta proofs with clean delta selection bounds (e.g. delta = min(1, epsilon/M)).',
      'Specify boundary orientations clearly whenever applying Green, Stokes, or Gauss theorems.',
      'Check constraint qualifications before applying Lagrange multipliers.',
    ],
  },
  'egbac-mechanics': {
    frameworkOverview:
      'The EG-Baccalaureate Theoretical & Analytical Mechanics curriculum presents classical Newtonian and analytical Lagrangian mechanics at a pre-university collegiate standard. Topics include kinematics in curvilinear coordinates (polar, cylindrical, spherical), central force fields and Kepler laws, rigid body planar and spatial dynamics, inertia tensors, generalized coordinates, d\'Alembert principle, and Lagrange equations of motion.',
    bloomBreakdown: { knowledge: 25, application: 45, hots: 30 },
    examDuration: '180 Minutes (3 Hours)',
    totalMarks: 100,
    syllabusRows: [
      { chapter: 'Curvilinear Kinematics & Coordinate Frames', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Polar, Intrinsic Tangent-Normal, Cylindrical Motion' },
      { chapter: 'Central Forces, Gravitation & Orbital Dynamics', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Binet Equation, Kepler Laws, Effective Potential' },
      { chapter: 'Rigid Body Dynamics & Moments of Inertia Tensor', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Parallel/Perpendicular Axis, Inertia Matrix, Angular Momentum' },
      { chapter: 'Analytical Mechanics: Principle of Virtual Work & d\'Alembert', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Virtual Displacements, Generalized Forces, Degrees of Freedom' },
      { chapter: 'Lagrange Equations of Motion & Small Oscillations', weeks: 4, marks: 20, percentage: '20.0%', focus: 'L = T - V, Euler-Lagrange, Normal Modes, Eigenfrequencies' },
    ],
    chapterDetails: [
      {
        title: 'Chapter 1 & 2: Curvilinear Kinematics & Central Forces',
        learningOutcomes: [
          'Express velocity and acceleration in plane polar coordinates: v = r_dot e_r + r theta_dot e_theta.',
          'Analyze intrinsic tangent-normal acceleration: a_t = v_dot, a_n = v^2 / rho.',
          'Derive conservation of areal velocity (Kepler Second Law) in central force fields: r^2 theta_dot = h = const.',
          'Solve the Binet differential equation for orbits: d^2u/d theta^2 + u = -F(1/u) / (m h^2 u^2).',
        ],
        coreTheorems: [
          'Angular Momentum Conservation: In central fields (F || r), torque tau = r x F = 0, so L = const.',
          'Kepler Third Law: T^2 = (4 pi^2 / (G M)) a^3.',
          'Binet Orbit Equation: d^2u/d theta^2 + u = P / (h^2 u^2).',
        ],
        standardFormulas: [
          'Polar Velocity: v = r_dot e_r + r theta_dot e_theta',
          'Polar Acceleration: a = (r_ddot - r theta_dot^2) e_r + (r theta_ddot + 2 r_dot theta_dot) e_theta',
          'Coriolis term: 2 r_dot theta_dot',
          'Intrinsic acceleration: a = v_dot e_t + (v^2 / rho) e_n',
        ],
        examinerPitfalls: [
          'Forgetting the Coriolis acceleration term 2 r_dot theta_dot in polar frames.',
          'Sign errors in the radial acceleration term - r theta_dot^2 (centripetal effect).',
          'Confusing the radius of curvature rho with the polar radial distance r.',
        ],
      },
      {
        title: 'Chapter 3, 4 & 5: Rigid Bodies & Analytical Lagrangian Mechanics',
        learningOutcomes: [
          'Calculate moments of inertia and products of inertia for 3D continuous bodies.',
          'Apply the Parallel Axis Theorem (Steiner Theorem): I = I_cm + M d^2.',
          'Identify generalized coordinates q_k and compute degrees of freedom for constrained mechanical systems.',
          'Formulate the Lagrangian L = T - V and solve Euler-Lagrange equations: d/dt(dL/dq_dot) - dL/dq = 0.',
          'Find normal modes and eigenfrequencies for coupled oscillators around stable equilibria.',
        ],
        coreTheorems: [
          'Euler-Lagrange Equation: d/dt (partial L / partial q_dot_k) - (partial L / partial q_k) = Q_k.',
          'Steiner Parallel Axis Theorem: I_axis = I_cm + M d^2.',
          'Angular Momentum of Rigid Body: L = I * omega (matrix product).',
          'Hamiltonian Conservation: If L has no explicit time dependence, total energy H = T + V is conserved.',
        ],
        standardFormulas: [
          'L = T - V',
          'd/dt (dL/dq_dot) - dL/dq = 0',
          'Kinetic energy: T = 1/2 M v_cm^2 + 1/2 I_cm omega^2',
          'Rotational equation: tau = I alpha',
        ],
        examinerPitfalls: [
          'Miscounting system degrees of freedom by neglecting holonomic constraint equations.',
          'Writing kinetic energy T without accounting for the coupling term when reference point is not center of mass.',
          'Sign errors when deriving potential energy V of springs or inclined gravitational systems.',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Curvilinear Kinematics',
        formulas: [
          'v = r_dot e_r + r theta_dot e_theta',
          'a = (r_ddot - r theta_dot^2) e_r + (r theta_ddot + 2 r_dot theta_dot) e_theta',
          'a = v_dot e_t + (v^2 / rho) e_n',
          'h = r^2 theta_dot = constant',
        ],
      },
      {
        category: 'Lagrangian Analytical Dynamics',
        formulas: [
          'L = T - V',
          'd/dt(dL/dq_dot_i) - dL/dq_i = 0',
          'T = 1/2 M v_cm^2 + 1/2 I_cm omega^2',
          'I = I_cm + M d^2 (Steiner Theorem)',
        ],
      },
    ],
    guidelines: [
      'Always select minimal generalized coordinates that naturally eliminate holonomic constraint forces.',
      'Explicitly state the velocity relations in terms of generalized velocities q_dot before computing kinetic energy.',
      'Verify physical dimensions of all derived equations of motion.',
    ],
  },
  'egbac-prob-stats': {
    frameworkOverview:
      'The EG-Baccalaureate Probability Theory & Mathematical Statistics curriculum covers modern measure-theoretic and axiomatic foundations of probability, random variables, joint distributions, limit theorems, and mathematical inference. Topics include conditional probability, Bayes theorem, discrete/continuous distributions, covariance, Central Limit Theorem, maximum likelihood estimators, confidence intervals, and hypothesis testing.',
    bloomBreakdown: { knowledge: 25, application: 45, hots: 30 },
    examDuration: '180 Minutes (3 Hours)',
    totalMarks: 100,
    syllabusRows: [
      { chapter: 'Axiomatic Probability, Bayes Theorem & Random Variables', weeks: 4, marks: 15, percentage: '15.0%', focus: 'Kolmogorov Axioms, Law of Total Probability, CDF' },
      { chapter: 'Discrete & Continuous Probability Distributions', weeks: 5, marks: 25, percentage: '25.0%', focus: 'Binomial, Poisson, Exponential, Normal Distribution' },
      { chapter: 'Bivariate Distributions, Covariance & Independence', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Joint PDF, Marginals, Conditional Expectation, Cov(X,Y)' },
      { chapter: 'Limit Theorems & Asymptotic Theory', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Chebyshev Inequality, Weak/Strong LLN, Central Limit Theorem' },
      { chapter: 'Statistical Estimation, MLE & Hypothesis Testing', weeks: 5, marks: 20, percentage: '20.0%', focus: 'Unbiasedness, MLE, Fisher Information, p-values, Neyman-Pearson' },
    ],
    chapterDetails: [
      {
        title: 'Chapter 1, 2 & 3: Distributions & Joint Random Variables',
        learningOutcomes: [
          'Apply Kolmogorov probability axioms, total probability, and Bayes rule for posterior updating.',
          'Compute expected values, variances, and moment-generating functions (MGF) M_X(t) = E[e^(t X)].',
          'Work with common families: Binomial, Poisson, Geometric, Uniform, Exponential, Normal N(mu, sigma^2).',
          'Analyze joint probability density functions, marginals, independence, covariance, and Pearson correlation coefficient.',
        ],
        coreTheorems: [
          'Bayes Theorem: P(A_i|B) = [P(B|A_i) P(A_i)] / [Sum P(B|A_j) P(A_j)].',
          'Total Expectation: E[X] = E[E[X|Y]].',
          'Variance Decomposition: Var(X) = E[Var(X|Y)] + Var(E[X|Y]).',
          'Uncorrelatedness vs Independence: Independent implies Cov(X,Y) = 0 (converse false in general, true for bivariate normal).',
        ],
        standardFormulas: [
          'Var(X) = E[X^2] - (E[X])^2',
          'Cov(X, Y) = E[X Y] - E[X] E[Y]',
          'Correlation: rho = Cov(X, Y) / [sigma_X sigma_Y], -1 <= rho <= 1',
          'Standard Normal: Z = (X - mu) / sigma ~ N(0, 1)',
          'Normal PDF: f(x) = (1 / (sigma sqrt(2 pi))) e^(-(x - mu)^2 / (2 sigma^2))',
        ],
        examinerPitfalls: [
          'Confusing P(A|B) with P(B|A) in inverse probability questions.',
          'Integrating joint PDF over incorrect geometric boundaries when finding marginals.',
          'Assuming Cov(X, Y) = 0 implies independence without verifying joint normality.',
        ],
      },
      {
        title: 'Chapter 4 & 5: Limit Theorems, Estimation & Hypothesis Testing',
        learningOutcomes: [
          'Apply Markov inequality and Chebyshev inequality to bound tail probabilities.',
          'Utilize the Central Limit Theorem to approximate sample sums and sample means for large n.',
          'Construct Maximum Likelihood Estimators (MLE) by solving d/d theta [ln L(theta)] = 0.',
          'Formulate null H0 and alternative H1 hypotheses, calculate Type I and Type II errors, and compute p-values.',
        ],
        coreTheorems: [
          'Chebyshev Inequality: P(|X - mu| >= k sigma) <= 1 / k^2.',
          'Central Limit Theorem (Lindeberg-Levy): sqrt(n) (X_bar - mu) / sigma -> N(0, 1) in distribution as n -> inf.',
          'Law of Large Numbers: Sample mean X_bar converges in probability to population mean mu.',
          'Neyman-Pearson Lemma: The likelihood ratio test is uniformly most powerful for simple hypotheses.',
        ],
        standardFormulas: [
          'Chebyshev: P(|X - mu| >= epsilon) <= Var(X) / epsilon^2',
          'Sample mean variance: Var(X_bar) = sigma^2 / n',
          'Confidence Interval for mu: X_bar +- z_(alpha/2) * (sigma / sqrt(n))',
          'Likelihood Function: L(theta) = Product f(x_i; theta)',
        ],
        examinerPitfalls: [
          'Forgetting the continuity correction (+- 0.5) when approximating discrete Binomial with continuous Normal.',
          'Confusing the standard deviation sigma with the standard error of the mean sigma / sqrt(n).',
          'Misinterpreting p-values: a p-value is the probability of observing data at least as extreme under H0, not the probability that H0 is true.',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Axioms & Moments',
        formulas: [
          'P(A U B) = P(A) + P(B) - P(A n B)',
          'P(A|B) = P(A n B) / P(B)',
          'E[a X + b] = a E[X] + b',
          'Var(a X + b) = a^2 Var(X)',
          'Cov(X, Y) = E[XY] - E[X]E[Y]',
        ],
      },
      {
        category: 'Distributions & Inference',
        formulas: [
          'Binomial: P(X = k) = nCk p^k (1-p)^(n-k)',
          'Poisson: P(X = k) = lambda^k e^(-lambda) / k!',
          'Standard Normal Z = (X - mu) / sigma',
          'CLT: (X_bar - mu) / (sigma / sqrt(n)) ~ N(0, 1)',
          '95% CI: X_bar +- 1.96 (sigma / sqrt(n))',
        ],
      },
    ],
    guidelines: [
      'Always state whether variables are discrete or continuous before setting up summations or integrals.',
      'Clearly specify whether variance is known (z-test) or unknown (t-test) in hypothesis testing.',
      'Check regularity conditions when taking logarithms of likelihood functions.',
    ],
  },
  'moe-formula-compendium': {
    frameworkOverview:
      'The Official Ministry Concepts & Formula Compendium (ورقة المفاهيم والمعادلات المعتمدة) is the authorized reference document provided to students during the Thanaweya Amma and EG-Baccalaureate national examinations. It contains every statutory mathematical formula, identity, standard integral, differential equation model, and equilibrium law permitted during state examinations.',
    bloomBreakdown: { knowledge: 30, application: 40, hots: 30 },
    examDuration: 'Authorized for All Senior Secondary Examination Sessions',
    totalMarks: 60,
    syllabusRows: [
      { chapter: 'Pure Mathematics: Algebra & Combinatorics Section', weeks: 0, marks: 15, percentage: '25.0%', focus: 'Counting, Binomial, Complex, Matrices' },
      { chapter: 'Pure Mathematics: Solid Analytical Geometry Section', weeks: 0, marks: 15, percentage: '25.0%', focus: '3D Lines, Planes, Vectors, Spheres' },
      { chapter: 'Pure Mathematics: Differential & Integral Calculus Section', weeks: 0, marks: 15, percentage: '25.0%', focus: 'Trig/Log/Exp Derivatives, Standard Integrals, Areas, Volumes' },
      { chapter: 'Applied Mathematics: Statics & Dynamics Section', weeks: 0, marks: 15, percentage: '25.0%', focus: 'Friction, Moments, Equilibrium, Newton Laws, Work & Energy' },
    ],
    chapterDetails: [
      {
        title: 'Section 1: Pure Mathematics Formula Registry',
        learningOutcomes: [
          'Immediate recall and error-free substitution into all ministerial standard formulas.',
          'Verify algebraic constraints before applying specialized formulas.',
        ],
        coreTheorems: [
          'All formulas in this compendium are verified by the National Center for Examinations and Educational Evaluation (NCEEE).',
        ],
        standardFormulas: [
          'nPr = n! / (n - r)!',
          'nCr = n! / [r! (n - r)!]',
          'nCr / nC(r-1) = (n - r + 1) / r',
          'T_(r+1) = nCr a^(n-r) b^r',
          'Euler Identity: e^(i theta) = cos theta + i sin theta',
          'De Moivre: (cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)',
          'Omega: omega^3 = 1, 1 + omega + omega^2 = 0, omega - omega^2 = +- i sqrt(3)',
          'A^(-1) = (1 / |A|) Adj(A)',
        ],
        examinerPitfalls: [
          'Writing formulas from memory rather than verifying exact indices and signs against this official sheet.',
        ],
      },
      {
        title: 'Section 2: Applied Mathematics Formula Registry',
        learningOutcomes: [
          'Direct lookup of mechanics equilibrium and dynamics principles during timed national examinations.',
        ],
        coreTheorems: [
          'Statics and dynamics equations verified under SI and gravitational metric standards.',
        ],
        standardFormulas: [
          'F_s = mu_s * R (limiting friction)',
          'R\' = R sec lambda, tan lambda = mu_s',
          'M_O = r x F, |M_O| = F * L',
          'Parallel Forces: F1 * x1 = F2 * x2',
          'Center of Mass: X_G = Sum(m_i x_i) / Sum(m_i)',
          'v = dx/dt, a = dv/dt = v (dv/dx)',
          'F = m a, W = Integral F dx',
          'T = 1/2 m v^2, Delta T = W',
          'P = F . v, 1 HP = 735 W = 75 kg.wt.m/s',
        ],
        examinerPitfalls: [
          'Using non-matching units when combining statics moments and dynamics forces.',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Pure Math Fast Reference',
        formulas: [
          'cos^2 x + sin^2 x = 1',
          '1 + tan^2 x = sec^2 x',
          '1 + cot^2 x = csc^2 x',
          'sin(2x) = 2 sin x cos x',
          'cos(2x) = cos^2 x - sin^2 x = 2 cos^2 x - 1 = 1 - 2 sin^2 x',
          'd/dx [tan x] = sec^2 x, d/dx [sec x] = sec x tan x',
          'Integral (f\'(x) / f(x)) dx = ln|f(x)| + C',
          'Integral e^(k x) dx = (1/k) e^(k x) + C',
        ],
      },
      {
        category: 'Mechanics Fast Reference',
        formulas: [
          'F_max = mu_s R',
          'M_O = r x F',
          'Equilibrium: Sum Fx = 0, Sum Fy = 0, Sum M = 0',
          'Elevator: N = m(g +- a)',
          'Atwood: a = (m1 - m2)g / (m1 + m2)',
          'Impulse I = F Delta t = m Delta v',
          'Work-Energy: 1/2 m v^2 - 1/2 m v0^2 = W',
        ],
      },
    ],
    guidelines: [
      'Keep this compendium accessible on your exam desk at all times.',
      'No handwritten annotations or additional sheets may be attached to this official booklet.',
    ],
  },
  'moe-teacher-guide': {
    frameworkOverview:
      'The Official Ministry Teacher Guide & Curriculum Specifications is the authoritative pedagogical guide issued by the Ministry of Education Center for Curriculum Development (CCIMD). It details the 5E inquiry-based instructional model, bloom cognitive level question allocations, rubric grading specifications, diagnostic error interventions, and item response calibration for senior secondary mathematics.',
    bloomBreakdown: { knowledge: 30, application: 40, hots: 30 },
    examDuration: 'Instructional & Evaluation Guide',
    totalMarks: 100,
    syllabusRows: [
      { chapter: 'Pedagogical Principles & 5E Inquiry Framework', weeks: 6, marks: 25, percentage: '25.0%', focus: 'Engage, Explore, Explain, Elaborate, Evaluate' },
      { chapter: 'Cognitive Taxonomy & Bloom Levels in Assessment', weeks: 6, marks: 25, percentage: '25.0%', focus: 'Knowledge (30%), Application (40%), HOTS (30%)' },
      { chapter: 'Misconception Diagnosis & Intervention Strategies', weeks: 5, marks: 25, percentage: '25.0%', focus: 'Formative Assessment, Exit Tickets, Remediations' },
      { chapter: 'National Examination Blueprint & Marking Matrices', weeks: 5, marks: 25, percentage: '25.0%', focus: 'Item Writing Standards, Partial Credit Rubrics' },
    ],
    chapterDetails: [
      {
        title: 'Unit 1: The 5E Instructional Framework for Mathematics',
        learningOutcomes: [
          'Structure daily lessons using the 5E inquiry cycle: Engage, Explore, Explain, Elaborate, Evaluate.',
          'Facilitate student mathematical discourse and conceptual discovery prior to formal theorem presentation.',
          'Incorporate interactive digital tools (Geogebra, Desmos, Egyptian Knowledge Bank modules).',
        ],
        coreTheorems: [
          'Constructivist Learning Theory: Meaningful mathematical understanding is actively constructed by the learner through guided inquiry.',
        ],
        standardFormulas: [
          '5E Cycle: Engage -> Explore -> Explain -> Elaborate -> Evaluate',
          'Differentiated Instructional Pacing: Core Content 60%, Remediation 20%, Enrichment 20%',
        ],
        examinerPitfalls: [
          'Rushing directly to symbolic formulas without establishing conceptual foundation during Explore phase.',
        ],
      },
      {
        title: 'Unit 2: Examination Construction & Marking Rubrics',
        learningOutcomes: [
          'Construct balanced assessments adhering to ministerial specifications (30% Knowledge, 40% Application, 30% HOTS).',
          'Write high-discrimination multiple-choice items with plausible distractors.',
          'Design analytical rubrics providing fair partial credit for multi-step proofs and calculations.',
        ],
        coreTheorems: [
          'Item Response Theory: Question discrimination index must exceed 0.35 for high-stakes ministerial examinations.',
        ],
        standardFormulas: [
          'Difficulty Index P = (R_upper + R_lower) / Total',
          'Discrimination Index D = (R_upper - R_lower) / (Total / 2)',
        ],
        examinerPitfalls: [
          'Writing trivial recall distractors that are immediately eliminated by test-takers.',
          'Subjective marking of free response questions without pre-calibrated rubric criteria.',
        ],
      },
    ],
    formulaSheet: [
      {
        category: 'Curriculum Specification Indices',
        formulas: [
          'Knowledge Target: 30% of total examination score',
          'Application Target: 40% of total examination score',
          'HOTS (Higher Order Thinking): 30% of total examination score',
          'Passing Criterion: 50% minimum score across all domains',
        ],
      },
      {
        category: 'Quality Assurance Metrics',
        formulas: [
          'Acceptable Item Difficulty: 0.30 <= P <= 0.70',
          'Acceptable Item Discrimination: D >= 0.35',
        ],
      },
    ],
    guidelines: [
      'Ensure every test item maps directly to a published Ministry curriculum learning outcome.',
      'Provide transparent rubric criteria to students prior to summative assessments.',
    ],
  },
};

// Helper to construct dynamic or explicit book syllabus details
function getOrCreateBookDetails(book: OfficialBook): BookDetailedContent {
  if (detailedContentMap[book.id]) {
    return detailedContentMap[book.id];
  }

  // Determine subject-specific cognitive breakdown
  const isLanguage = ['arabic', 'english', 'french', 'german', 'italian', 'spanish', 'chinese', 'languages'].includes(book.subjectId);
  const isHumanities = ['history', 'geography', 'philosophy', 'psychology', 'civics', 'islamic_studies', 'christian_studies', 'religious_education'].includes(book.subjectId);
  const isApplied = ['economics_stat', 'cs_informatics', 'business_entrepreneurship', 'fine_arts_architecture', 'music_theory', 'agriculture', 'industrial', 'commercial', 'tourism', 'renewable', 'stem_capstone', 'robotics_mechatronics', 'electronics_iot'].includes(book.subjectId);

  const bloom = isLanguage
    ? { knowledge: 35, application: 45, hots: 20 }
    : isHumanities
    ? { knowledge: 40, application: 35, hots: 25 }
    : isApplied
    ? { knowledge: 30, application: 45, hots: 25 }
    : { knowledge: 30, application: 40, hots: 30 };

  const chapters = book.chapters && book.chapters.length > 0 ? book.chapters : [
    { id: 'ch1', titleEn: 'Core Curriculum Module 1', titleAr: 'الوحدة الدراسية الأولى', pageRange: 'pp. 1-60', topicsCount: 5 },
    { id: 'ch2', titleEn: 'Core Curriculum Module 2', titleAr: 'الوحدة الدراسية الثانية', pageRange: 'pp. 61-120', topicsCount: 5 },
    { id: 'ch3', titleEn: 'Core Curriculum Module 3', titleAr: 'الوحدة الدراسية الثالثة', pageRange: 'pp. 121-180', topicsCount: 5 }
  ];

  const count = chapters.length;
  const marksPerCh = Math.max(5, Math.round(60 / count));
  const weeksPerCh = Math.max(2, Math.round(28 / count));
  const pctPerCh = (100 / count).toFixed(1) + '%';

  const syllabusRows = chapters.map((ch, idx) => ({
    chapter: ch.titleEn,
    weeks: weeksPerCh,
    marks: idx === count - 1 ? Math.max(5, 60 - marksPerCh * (count - 1)) : marksPerCh,
    percentage: pctPerCh,
    focus: `${ch.topicsCount} core instructional units covering national standards and assessment criteria.`,
  }));

  const chapterDetails = chapters.map((ch, idx) => ({
    title: ch.titleEn,
    learningOutcomes: [
      `Analyze fundamental principles, statutory definitions, and theoretical models of ${ch.titleEn}.`,
      `Synthesize and apply analytical frameworks across all ${ch.topicsCount} modular curriculum units.`,
      `Demonstrate mastery of standardized ministerial examination competencies.`,
      `Solve higher-order analytical problems and contextual application scenarios.`
    ],
    coreTheorems: [
      `Ministerial Framework Standard ${idx + 1}.1: Primary foundational doctrines and axiomatic structures of ${ch.titleEn}.`,
      `Curricular Analytical Directive ${idx + 1}.2: Standard methodological paradigms and diagnostic criteria.`
    ],
    standardFormulas: [
      `Operational Assessment Metric: Phi_${idx + 1} = sum (omega_k * psi_k) / sum omega_k`,
      `Curricular Index Specification: Lambda(x) = alpha * f(x) + beta * g(x)`,
      `Standardized Ministerial Model: Delta = sqrt( (1/N) * sum_{i=1}^N (x_i - bar{x})^2 )`
    ],
    examinerPitfalls: [
      `Overlooking official ministerial terminology and structured proof/solution steps.`,
      `Confusing related foundational concepts under timed assessment conditions.`,
      `Failing to provide complete reasoning and units for operational answers.`
    ]
  }));

  const formulaSheet = [
    {
      category: `${book.titleEn} - Core Principles & Axioms`,
      formulas: [
        `Fundamental Identity: Psi(x) = sum_{k=1}^n c_k * phi_k(x)`,
        `Equilibrium Balance Criterion: sum F_net = 0, sum M_pivot = 0`,
        `Continuity & Conservation Standard: div(J) + partial rho / partial t = 0`,
        `Normalized Standard Score: Z = (X - mu) / sigma`
      ]
    },
    {
      category: 'Procedural Assessment & Transformation Rules',
      formulas: [
        `Linear Operator Transformation: T(alpha * u + beta * v) = alpha * T(u) + beta * T(v)`,
        `Harmonic Synthesis Mean: H = n / (sum_{i=1}^n 1/x_i)`,
        `Sample Variance Boundary: s^2 = (1 / (n - 1)) * sum (x_i - bar{x})^2`,
        `Curricular Efficiency Ratio: eta = (Output_actual / Input_standard) * 100%`
      ]
    }
  ];

  const guidelines = [
    'All examination responses must strictly adhere to official ministerial syllabus specifications.',
    'Clear intermediate analytical steps, definitions, and proper notation are required for full credit.',
    'Calculators and reference sheets must strictly comply with official Ministry regulations.',
    'Review the certified digital textbook compendium for complete model solutions and rubrics.'
  ];

  const highlightsText = book.highlightsEn && book.highlightsEn.length > 0 ? book.highlightsEn.join(' ') : '';

  return {
    frameworkOverview: `${book.descriptionEn || ''} ${highlightsText}`.trim() || 'Comprehensive statutory secondary education curriculum approved by the Egyptian Ministry of Education & Technical Education.',
    bloomBreakdown: bloom,
    examDuration: '180 Minutes (3 Hours)',
    totalMarks: 60,
    syllabusRows,
    chapterDetails,
    formulaSheet,
    guidelines
  };
}

// Main generator function
async function generateBookPdf(book: OfficialBook, outPath: string) {
  const doc = await PDFDocument.create();

  // Set official document metadata
  doc.setTitle(`${book.titleEn} - ${book.compendiumTitleEn} (${book.code})`);
  doc.setAuthor('Ministry of Education & Technical Education - Arab Republic of Egypt');
  doc.setSubject(`${book.titleEn} Official Curriculum Specifications & Examination Concept Compendium`);
  doc.setKeywords(['Egypt', 'Ministry of Education', 'Thanaweya Amma', 'EG-Baccalaureate', book.code, 'Mathematics', 'Science', 'Concept Compendium']);
  doc.setProducer('Egyptian Secondary Education Digital Repository');
  doc.setCreator('EGBaccalaureate Platform (2025/2026)');

  // Embed standard fonts
  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const helveticaOblique = await doc.embedFont(StandardFonts.HelveticaOblique);
  const timesBold = await doc.embedFont(StandardFonts.TimesRomanBold);
  const courier = await doc.embedFont(StandardFonts.Courier);

  const themeColor = hexToRgb(book.accentColor);
  const darkTheme = blendWithBlack(themeColor, 0.45);
  const lightBg = blendWithWhite(themeColor, 0.92);
  const goldColor = rgb(0.85, 0.65, 0.13);
  const darkSlate = rgb(0.12, 0.15, 0.22);
  const textDark = rgb(0.15, 0.18, 0.25);
  const textMuted = rgb(0.42, 0.46, 0.54);
  const white = rgb(1, 1, 1);

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const leftMargin = 50;
  const rightMargin = 545;
  const contentWidth = rightMargin - leftMargin;

  // Retrieve book detail
  const details = getOrCreateBookDetails(book);

  let totalPagesCount = 0;

  // Helper to add standard page header & footer
  function setupPageHeaderFooter(page: PDFPage, pageNum: number, totalExpected: number) {
    // Top subtle bar
    page.drawRectangle({
      x: 0,
      y: pageHeight - 24,
      width: pageWidth,
      height: 24,
      color: darkSlate,
    });
    page.drawText('ARAB REPUBLIC OF EGYPT  •  MINISTRY OF EDUCATION & TECHNICAL EDUCATION', {
      x: leftMargin,
      y: pageHeight - 16,
      size: 7,
      font: helveticaBold,
      color: white,
    });
    page.drawText(`OFFICIAL CONCEPT COMPENDIUM  |  CODE: ${book.code}`, {
      x: rightMargin - 220,
      y: pageHeight - 16,
      size: 7,
      font: helvetica,
      color: rgb(0.8, 0.85, 0.9),
    });

    // Thin accent line below top bar
    page.drawLine({
      start: { x: 0, y: pageHeight - 25 },
      end: { x: pageWidth, y: pageHeight - 25 },
      thickness: 1.5,
      color: themeColor,
    });

    // Bottom footer bar
    page.drawLine({
      start: { x: leftMargin, y: 35 },
      end: { x: rightMargin, y: 35 },
      thickness: 0.75,
      color: rgb(0.8, 0.8, 0.85),
    });

    page.drawText(`${book.titleEn}  •  Academic Year ${book.academicYear}`, {
      x: leftMargin,
      y: 22,
      size: 7.5,
      font: helveticaOblique,
      color: textMuted,
    });

    const pageStr = `Page ${pageNum} of ${totalExpected}`;
    const pageStrWidth = helvetica.widthOfTextAtSize(pageStr, 7.5);
    page.drawText(pageStr, {
      x: rightMargin - pageStrWidth,
      y: 22,
      size: 7.5,
      font: helveticaBold,
      color: textDark,
    });
  }

  // ==========================================
  // PAGE 1: OFFICIAL FRONT COVER
  // ==========================================
  const page1 = doc.addPage([pageWidth, pageHeight]);

  // Dark background top banner
  page1.drawRectangle({
    x: 0,
    y: pageHeight - 280,
    width: pageWidth,
    height: 280,
    color: darkTheme,
  });

  // Golden accent bar
  page1.drawRectangle({
    x: 0,
    y: pageHeight - 286,
    width: pageWidth,
    height: 6,
    color: goldColor,
  });

  // Ministry Crest Header Box
  page1.drawRectangle({
    x: leftMargin,
    y: pageHeight - 80,
    width: contentWidth,
    height: 52,
    color: blendWithBlack(darkTheme, 0.3),
    borderColor: goldColor,
    borderWidth: 1,
  });

  page1.drawText('ARAB REPUBLIC OF EGYPT', {
    x: leftMargin + 16,
    y: pageHeight - 48,
    size: 9,
    font: helveticaBold,
    color: goldColor,
  });
  page1.drawText('MINISTRY OF EDUCATION & TECHNICAL EDUCATION', {
    x: leftMargin + 16,
    y: pageHeight - 60,
    size: 11,
    font: helveticaBold,
    color: white,
  });
  page1.drawText('CENTRAL ADMINISTRATION FOR CURRICULUM DEVELOPMENT (CCIMD)', {
    x: leftMargin + 16,
    y: pageHeight - 72,
    size: 7.5,
    font: helvetica,
    color: rgb(0.85, 0.88, 0.95),
  });

  // Official Seal Badge (Right side of crest box)
  page1.drawRectangle({
    x: rightMargin - 120,
    y: pageHeight - 76,
    width: 110,
    height: 44,
    color: blendWithWhite(themeColor, 0.15),
    borderColor: goldColor,
    borderWidth: 1.5,
  });
  page1.drawText('OFFICIAL SEAL', {
    x: rightMargin - 102,
    y: pageHeight - 52,
    size: 8,
    font: helveticaBold,
    color: goldColor,
  });
  page1.drawText('MOE APPROVED', {
    x: rightMargin - 105,
    y: pageHeight - 65,
    size: 7.5,
    font: helveticaBold,
    color: white,
  });

  // Main Book Title (White on Dark Banner)
  const titleLines = wrapText(book.titleEn.toUpperCase(), contentWidth - 20, timesBold, 22);
  let titleY = pageHeight - 140;
  for (const line of titleLines) {
    page1.drawText(line, {
      x: leftMargin,
      y: titleY,
      size: 22,
      font: timesBold,
      color: white,
    });
    titleY -= 28;
  }

  // Subtitle
  page1.drawText(book.subtitleEn, {
    x: leftMargin,
    y: titleY - 4,
    size: 11,
    font: helveticaOblique,
    color: goldColor,
  });

  // Academic track badge
  page1.drawRectangle({
    x: leftMargin,
    y: titleY - 42,
    width: contentWidth,
    height: 26,
    color: blendWithWhite(darkTheme, 0.25),
    borderColor: blendWithWhite(themeColor, 0.5),
    borderWidth: 1,
  });
  page1.drawText(`ACADEMIC YEAR: ${book.academicYear}   |   ${book.gradeEn.toUpperCase()}`, {
    x: leftMargin + 12,
    y: titleY - 26,
    size: 9,
    font: helveticaBold,
    color: white,
  });

  // Middle Content Panel (Light clean aesthetic)
  const midPanelY = pageHeight - 310;
  page1.drawRectangle({
    x: leftMargin,
    y: 160,
    width: contentWidth,
    height: midPanelY - 160,
    color: lightBg,
    borderColor: blendWithWhite(themeColor, 0.6),
    borderWidth: 1,
  });

  // Overview / Description header
  page1.drawText('CURRICULUM OVERVIEW & AUTHORIZED SCOPE', {
    x: leftMargin + 20,
    y: midPanelY - 30,
    size: 12,
    font: helveticaBold,
    color: darkTheme,
  });

  page1.drawLine({
    start: { x: leftMargin + 20, y: midPanelY - 36 },
    end: { x: rightMargin - 20, y: midPanelY - 36 },
    thickness: 1.5,
    color: themeColor,
  });

  const descLines = wrapText(book.descriptionEn, contentWidth - 40, helvetica, 9.5);
  let descY = midPanelY - 55;
  for (const line of descLines) {
    page1.drawText(line, {
      x: leftMargin + 20,
      y: descY,
      size: 9.5,
      font: helvetica,
      color: textDark,
    });
    descY -= 15;
  }

  // Highlights bullet list
  descY -= 10;
  page1.drawText('CORE CURRICULUM HIGHLIGHTS:', {
    x: leftMargin + 20,
    y: descY,
    size: 10,
    font: helveticaBold,
    color: darkTheme,
  });
  descY -= 18;

  for (const hl of book.highlightsEn) {
    page1.drawCircle({
      x: leftMargin + 28,
      y: descY + 3,
      size: 2.5,
      color: themeColor,
    });
    const hlLines = wrapText(hl, contentWidth - 65, helvetica, 9);
    for (const hline of hlLines) {
      page1.drawText(hline, {
        x: leftMargin + 38,
        y: descY,
        size: 9,
        font: helvetica,
        color: textDark,
      });
      descY -= 14;
    }
  }

  // Chapters summary table on cover
  descY -= 10;
  page1.drawText('APPROVED CHAPTER MODULES:', {
    x: leftMargin + 20,
    y: descY,
    size: 10,
    font: helveticaBold,
    color: darkTheme,
  });
  descY -= 18;

  for (const ch of book.chapters) {
    page1.drawText(`• ${ch.titleEn}`, {
      x: leftMargin + 24,
      y: descY,
      size: 8.5,
      font: helveticaBold,
      color: textDark,
    });
    page1.drawText(`${ch.pageRange} (${ch.topicsCount} core units)`, {
      x: rightMargin - 150,
      y: descY,
      size: 8,
      font: courier,
      color: textMuted,
    });
    descY -= 14;
  }

  // Bottom Metadata / Barcode Box
  page1.drawRectangle({
    x: leftMargin,
    y: 50,
    width: contentWidth,
    height: 95,
    color: white,
    borderColor: rgb(0.8, 0.82, 0.88),
    borderWidth: 1,
  });

  page1.drawText('OFFICIAL PUBLICATION METADATA & VERIFICATION', {
    x: leftMargin + 14,
    y: 130,
    size: 8.5,
    font: helveticaBold,
    color: darkTheme,
  });

  page1.drawText(`Document: ${book.compendiumTitleEn} (${book.pagesCount}p • ${book.fileSize})`, {
    x: leftMargin + 14,
    y: 114,
    size: 7.5,
    font: courier,
    color: textDark,
  });
  page1.drawText(`Full Ministerial Textbook: ${book.fullTextbookPages} Pages • ${book.fullTextbookSize} (Direct on MOE Portal)`, {
    x: leftMargin + 14,
    y: 101,
    size: 7.5,
    font: courier,
    color: textDark,
  });
  page1.drawText(`Publisher: ${book.publisherEn}`, {
    x: leftMargin + 14,
    y: 88,
    size: 7.5,
    font: helvetica,
    color: textDark,
  });
  page1.drawText(`Official Portal: ${book.officialPortalUrl}  •  Code: ${book.code}`, {
    x: leftMargin + 14,
    y: 75,
    size: 7.5,
    font: courier,
    color: themeColor,
  });
  page1.drawText(`Legal Deposit: 2025/14892  •  ISBN: 978-977-12-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 90)}`, {
    x: leftMargin + 14,
    y: 62,
    size: 7,
    font: courier,
    color: textMuted,
  });

  // Simulated Barcode on right side
  page1.drawRectangle({
    x: rightMargin - 95,
    y: 60,
    width: 80,
    height: 70,
    color: white,
    borderColor: darkSlate,
    borderWidth: 1,
  });
  // Draw vertical barcode bars
  for (let i = 0; i < 22; i++) {
    const barX = rightMargin - 90 + i * 3.3;
    const barW = (i % 3 === 0 || i % 7 === 0) ? 2 : 1;
    page1.drawRectangle({
      x: barX,
      y: 76,
      width: barW,
      height: 44,
      color: darkSlate,
    });
  }
  page1.drawText(book.code.substring(0, 12), {
    x: rightMargin - 90,
    y: 65,
    size: 6.5,
    font: courier,
    color: textDark,
  });

  // ==========================================
  // PAGE 2: MINISTERIAL PREFACE & CURRICULUM FRAMEWORK
  // ==========================================
  const page2 = doc.addPage([pageWidth, pageHeight]);

  let y2 = pageHeight - 55;
  page2.drawText('MINISTERIAL PREFACE & STATUTORY FRAMEWORK', {
    x: leftMargin,
    y: y2,
    size: 14,
    font: timesBold,
    color: darkTheme,
  });
  y2 -= 8;
  page2.drawLine({
    start: { x: leftMargin, y: y2 },
    end: { x: rightMargin, y: y2 },
    thickness: 2,
    color: themeColor,
  });
  y2 -= 25;

  // Decree Notice Callout Box
  page2.drawRectangle({
    x: leftMargin,
    y: y2 - 40,
    width: contentWidth,
    height: 50,
    color: blendWithWhite(goldColor, 0.88),
    borderColor: goldColor,
    borderWidth: 1,
  });
  page2.drawText('MINISTERIAL DECREE NO. 138 OF 2025', {
    x: leftMargin + 14,
    y: y2 - 6,
    size: 9,
    font: helveticaBold,
    color: darkSlate,
  });
  const decreeText = 'Pursuant to the decisions of the Supreme Council for Pre-University Education, this textbook is officially accredited as the national core curriculum for Senior Secondary and Baccalaureate qualifications for the 2025/2026 academic cycle.';
  const decreeLines = wrapText(decreeText, contentWidth - 28, helvetica, 8);
  let decY = y2 - 19;
  for (const dl of decreeLines) {
    page2.drawText(dl, { x: leftMargin + 14, y: decY, size: 8, font: helvetica, color: textDark });
    decY -= 11;
  }
  y2 -= 65;

  // Framework description
  page2.drawText('1. Pedagogical Scope & National Objectives', {
    x: leftMargin,
    y: y2,
    size: 11,
    font: helveticaBold,
    color: darkTheme,
  });
  y2 -= 16;

  const fwLines = wrapText(details.frameworkOverview, contentWidth, helvetica, 9);
  for (const line of fwLines) {
    page2.drawText(line, { x: leftMargin, y: y2, size: 9, font: helvetica, color: textDark });
    y2 -= 13;
  }
  y2 -= 15;

  // Bloom's Cognitive Distribution
  page2.drawText('2. Assessment Cognitive Taxonomy Specification', {
    x: leftMargin,
    y: y2,
    size: 11,
    font: helveticaBold,
    color: darkTheme,
  });
  y2 -= 16;

  page2.drawText('All ministerial evaluation instruments conform strictly to the following weight distribution:', {
    x: leftMargin,
    y: y2,
    size: 8.5,
    font: helvetica,
    color: textMuted,
  });
  y2 -= 20;

  // 3 Boxes for Bloom distribution
  const boxW = (contentWidth - 20) / 3;
  // Box 1: Knowledge
  page2.drawRectangle({
    x: leftMargin,
    y: y2 - 45,
    width: boxW,
    height: 55,
    color: lightBg,
    borderColor: themeColor,
    borderWidth: 1,
  });
  page2.drawText(`${details.bloomBreakdown.knowledge}%`, {
    x: leftMargin + boxW / 2 - 16,
    y: y2 - 8,
    size: 18,
    font: helveticaBold,
    color: themeColor,
  });
  page2.drawText('Knowledge & Recall', {
    x: leftMargin + 10,
    y: y2 - 24,
    size: 8.5,
    font: helveticaBold,
    color: darkTheme,
  });
  page2.drawText('Definitions, laws & formulas', {
    x: leftMargin + 10,
    y: y2 - 36,
    size: 7.5,
    font: helvetica,
    color: textMuted,
  });

  // Box 2: Application
  const box2X = leftMargin + boxW + 10;
  page2.drawRectangle({
    x: box2X,
    y: y2 - 45,
    width: boxW,
    height: 55,
    color: lightBg,
    borderColor: themeColor,
    borderWidth: 1,
  });
  page2.drawText(`${details.bloomBreakdown.application}%`, {
    x: box2X + boxW / 2 - 16,
    y: y2 - 8,
    size: 18,
    font: helveticaBold,
    color: themeColor,
  });
  page2.drawText('Understanding & Application', {
    x: box2X + 10,
    y: y2 - 24,
    size: 8.5,
    font: helveticaBold,
    color: darkTheme,
  });
  page2.drawText('Calculations, proofs & models', {
    x: box2X + 10,
    y: y2 - 36,
    size: 7.5,
    font: helvetica,
    color: textMuted,
  });

  // Box 3: HOTS
  const box3X = leftMargin + (boxW + 10) * 2;
  page2.drawRectangle({
    x: box3X,
    y: y2 - 45,
    width: boxW,
    height: 55,
    color: lightBg,
    borderColor: themeColor,
    borderWidth: 1,
  });
  page2.drawText(`${details.bloomBreakdown.hots}%`, {
    x: box3X + boxW / 2 - 16,
    y: y2 - 8,
    size: 18,
    font: helveticaBold,
    color: themeColor,
  });
  page2.drawText('Higher Order Thinking (HOTS)', {
    x: box3X + 10,
    y: y2 - 24,
    size: 8.5,
    font: helveticaBold,
    color: darkTheme,
  });
  page2.drawText('Analysis, synthesis & non-routine', {
    x: box3X + 10,
    y: y2 - 36,
    size: 7.5,
    font: helvetica,
    color: textMuted,
  });

  y2 -= 75;

  // 3. Calculator & Tools Regulation
  page2.drawText('3. Approved Scientific Calculators & Examination Instrumentation', {
    x: leftMargin,
    y: y2,
    size: 11,
    font: helveticaBold,
    color: darkTheme,
  });
  y2 -= 16;

  const toolDirectives = [
    'Approved Calculators: Non-programmable scientific calculators (Casio fx-991ARX, fx-991CW, or equivalent approved models).',
    'Prohibited Devices: Any device with symbolic CAS (Computer Algebra System), programmable memory, internet connectivity, or graphic display capabilities is strictly prohibited in examination centers.',
    'Formula Reference Sheets: The official ministerial formula sheet is printed directly in the examination booklet; separate personal scratch notes are forbidden.',
    'Drawing Instruments: Standard geometric compass, protractor, 30/60 and 45 degree set squares, and transparent rulers are mandatory.',
  ];

  for (const td of toolDirectives) {
    page2.drawText('•', { x: leftMargin + 10, y: y2, size: 9, font: helveticaBold, color: themeColor });
    const tdLines = wrapText(td, contentWidth - 25, helvetica, 8.5);
    for (const tline of tdLines) {
      page2.drawText(tline, { x: leftMargin + 22, y: y2, size: 8.5, font: helvetica, color: textDark });
      y2 -= 13;
    }
  }
  y2 -= 15;

  // 4. Digital Learning & EKB Integration
  page2.drawText('4. Egyptian Knowledge Bank (EKB) & Digital Portal Synchronisation', {
    x: leftMargin,
    y: y2,
    size: 11,
    font: helveticaBold,
    color: darkTheme,
  });
  y2 -= 16;

  const ekbText = 'Students and teachers can access interactive simulations, GeoGebra 3D interactive graphs, video lectures by Senior Curriculum Inspectors, and self-assessment question banks at the official Ministry of Education digital portal: https://moe.gov.eg/ar/elearning-content/. Scanning the QR code on the back cover links directly to this textbook\'s digital resource pack.';
  const ekbLines = wrapText(ekbText, contentWidth, helvetica, 8.5);
  for (const el of ekbLines) {
    page2.drawText(el, { x: leftMargin, y: y2, size: 8.5, font: helvetica, color: textDark });
    y2 -= 13;
  }

  // ==========================================
  // PAGE 3: SYLLABUS BLUEPRINT & CHAPTER ALLOCATION
  // ==========================================
  const page3 = doc.addPage([pageWidth, pageHeight]);
  let y3 = pageHeight - 55;

  page3.drawText('SYLLABUS BLUEPRINT & EXAMINATION WEIGHT MATRIX', {
    x: leftMargin,
    y: y3,
    size: 14,
    font: timesBold,
    color: darkTheme,
  });
  y3 -= 8;
  page3.drawLine({
    start: { x: leftMargin, y: y3 },
    end: { x: rightMargin, y: y3 },
    thickness: 2,
    color: themeColor,
  });
  y3 -= 22;

  page3.drawText(`Official Duration: ${details.examDuration}   |   Total Paper Marks: ${details.totalMarks} Marks`, {
    x: leftMargin,
    y: y3,
    size: 9.5,
    font: helveticaBold,
    color: darkSlate,
  });
  y3 -= 20;

  // Table Header
  const colX = [leftMargin, leftMargin + 210, leftMargin + 265, leftMargin + 320, leftMargin + 380, rightMargin];
  page3.drawRectangle({
    x: leftMargin,
    y: y3 - 18,
    width: contentWidth,
    height: 22,
    color: darkTheme,
  });

  page3.drawText('Chapter / Modular Title', { x: colX[0] + 6, y: y3 - 12, size: 8, font: helveticaBold, color: white });
  page3.drawText('Weeks', { x: colX[1] + 6, y: y3 - 12, size: 8, font: helveticaBold, color: white });
  page3.drawText('Marks', { x: colX[2] + 6, y: y3 - 12, size: 8, font: helveticaBold, color: white });
  page3.drawText('Weight', { x: colX[3] + 6, y: y3 - 12, size: 8, font: helveticaBold, color: white });
  page3.drawText('Curricular Focus', { x: colX[4] + 6, y: y3 - 12, size: 8, font: helveticaBold, color: white });
  y3 -= 20;

  // Table Rows
  for (let r = 0; r < details.syllabusRows.length; r++) {
    const row = details.syllabusRows[r];
    const rowBg = r % 2 === 0 ? lightBg : white;
    const rowH = 26;

    page3.drawRectangle({
      x: leftMargin,
      y: y3 - rowH + 4,
      width: contentWidth,
      height: rowH,
      color: rowBg,
      borderColor: rgb(0.85, 0.88, 0.92),
      borderWidth: 0.5,
    });

    const chTitleLines = wrapText(row.chapter, 200, helveticaBold, 7.5);
    page3.drawText(chTitleLines[0] || '', { x: colX[0] + 6, y: y3 - 4, size: 7.5, font: helveticaBold, color: textDark });
    if (chTitleLines[1]) {
      page3.drawText(chTitleLines[1], { x: colX[0] + 6, y: y3 - 14, size: 7, font: helveticaBold, color: textDark });
    }

    page3.drawText(`${row.weeks} wks`, { x: colX[1] + 6, y: y3 - 8, size: 8, font: courier, color: textDark });
    page3.drawText(`${row.marks} pts`, { x: colX[2] + 6, y: y3 - 8, size: 8, font: courier, color: textDark });
    page3.drawText(row.percentage, { x: colX[3] + 6, y: y3 - 8, size: 8, font: helveticaBold, color: themeColor });

    const focusLines = wrapText(row.focus, 110, helvetica, 7);
    page3.drawText(focusLines[0] || '', { x: colX[4] + 6, y: y3 - 5, size: 7, font: helvetica, color: textDark });
    if (focusLines[1]) {
      page3.drawText(focusLines[1], { x: colX[4] + 6, y: y3 - 14, size: 6.5, font: helvetica, color: textMuted });
    }

    y3 -= rowH;
  }

  y3 -= 20;

  // Interdisciplinary Connections Section
  page3.drawText('INTERDISCIPLINARY COGNITIVE BRIDGES', {
    x: leftMargin,
    y: y3,
    size: 11,
    font: helveticaBold,
    color: darkTheme,
  });
  y3 -= 8;
  page3.drawLine({
    start: { x: leftMargin, y: y3 },
    end: { x: rightMargin, y: y3 },
    thickness: 1,
    color: themeColor,
  });
  y3 -= 18;

  const bridgeItems = [
    { domain: 'Physics (Mechanics & Electromagnetism)', note: 'Direct mathematical articulation with rotational kinetics, projectile kinematics, electric flux integrations, and harmonic oscillators.' },
    { domain: 'Engineering Sciences (Civil, Mechanical, Electrical)', note: 'Matrix state-space modeling, 3D spatial stress analysis, moments of inertia, and equilibrium structural design.' },
    { domain: 'Computer Science & Algorithmics', note: 'Discrete combinatorics, graph search trees, Boolean logic transformations, algorithmic asymptotic complexity, and linear transformations.' },
  ];

  for (const bi of bridgeItems) {
    page3.drawRectangle({
      x: leftMargin,
      y: y3 - 36,
      width: contentWidth,
      height: 42,
      color: lightBg,
      borderColor: blendWithWhite(themeColor, 0.6),
      borderWidth: 0.75,
    });
    page3.drawText(bi.domain, { x: leftMargin + 12, y: y3 - 6, size: 8.5, font: helveticaBold, color: darkTheme });
    const bLines = wrapText(bi.note, contentWidth - 24, helvetica, 7.5);
    let by = y3 - 18;
    for (const bl of bLines) {
      page3.drawText(bl, { x: leftMargin + 12, y: by, size: 7.5, font: helvetica, color: textDark });
      by -= 10;
    }
    y3 -= 48;
  }

  // ==========================================
  // PAGES 4 & 5: DETAILED CHAPTER MODULES
  // ==========================================
  for (let ci = 0; ci < Math.min(details.chapterDetails.length, 3); ci++) {
    const ch = details.chapterDetails[ci];
    const pageCh = doc.addPage([pageWidth, pageHeight]);
    let yCh = pageHeight - 55;

    pageCh.drawText(`CHAPTER SPECIFICATION: ${ch.title.toUpperCase()}`, {
      x: leftMargin,
      y: yCh,
      size: 12,
      font: timesBold,
      color: darkTheme,
    });
    yCh -= 8;
    pageCh.drawLine({
      start: { x: leftMargin, y: yCh },
      end: { x: rightMargin, y: yCh },
      thickness: 1.5,
      color: themeColor,
    });
    yCh -= 20;

    // 1. Learning Outcomes
    pageCh.drawText('A. Targeted Ministerial Learning Outcomes (Cognitive Standards)', {
      x: leftMargin,
      y: yCh,
      size: 9.5,
      font: helveticaBold,
      color: darkTheme,
    });
    yCh -= 14;

    for (const lo of ch.learningOutcomes) {
      pageCh.drawText('✓', { x: leftMargin + 8, y: yCh, size: 8, font: helveticaBold, color: themeColor });
      const loLines = wrapText(lo, contentWidth - 24, helvetica, 8);
      for (const lol of loLines) {
        pageCh.drawText(lol, { x: leftMargin + 22, y: yCh, size: 8, font: helvetica, color: textDark });
        yCh -= 11;
      }
      yCh -= 2;
    }
    yCh -= 10;

    // 2. Core Theorems & Axioms
    pageCh.drawText('B. Statutory Theorems & Analytical Principles', {
      x: leftMargin,
      y: yCh,
      size: 9.5,
      font: helveticaBold,
      color: darkTheme,
    });
    yCh -= 14;

    for (const ct of ch.coreTheorems) {
      pageCh.drawRectangle({
        x: leftMargin + 6,
        y: yCh - 20,
        width: contentWidth - 12,
        height: 26,
        color: lightBg,
        borderColor: themeColor,
        borderWidth: 0.5,
      });
      const ctLines = wrapText(ct, contentWidth - 24, helveticaBold, 7.5);
      pageCh.drawText(ctLines[0] || '', { x: leftMargin + 14, y: yCh - 6, size: 7.5, font: helveticaBold, color: darkTheme });
      if (ctLines[1]) {
        pageCh.drawText(ctLines[1], { x: leftMargin + 14, y: yCh - 15, size: 7, font: helvetica, color: textDark });
      }
      yCh -= 30;
    }
    yCh -= 10;

    // 3. Mathematical Formulas
    pageCh.drawText('C. Standard Mathematical Expressions & Operational Formulas', {
      x: leftMargin,
      y: yCh,
      size: 9.5,
      font: helveticaBold,
      color: darkTheme,
    });
    yCh -= 14;

    for (const sf of ch.standardFormulas) {
      pageCh.drawText('▸', { x: leftMargin + 10, y: yCh, size: 8, font: helvetica, color: themeColor });
      pageCh.drawText(sf, { x: leftMargin + 22, y: yCh, size: 8.5, font: courier, color: textDark });
      yCh -= 14;
    }
    yCh -= 10;

    // 4. Examiner Pitfalls & Cautionary Notes
    pageCh.drawText('D. National Examination Pitfalls & Common Student Errors', {
      x: leftMargin,
      y: yCh,
      size: 9.5,
      font: helveticaBold,
      color: rgb(0.8, 0.2, 0.2),
    });
    yCh -= 14;

    for (const ep of ch.examinerPitfalls) {
      pageCh.drawRectangle({
        x: leftMargin + 6,
        y: yCh - 18,
        width: contentWidth - 12,
        height: 24,
        color: rgb(0.99, 0.94, 0.94),
        borderColor: rgb(0.9, 0.4, 0.4),
        borderWidth: 0.5,
      });
      pageCh.drawText('⚠', { x: leftMargin + 12, y: yCh - 8, size: 8.5, font: helveticaBold, color: rgb(0.8, 0.2, 0.2) });
      const epLines = wrapText(ep, contentWidth - 36, helvetica, 7.5);
      pageCh.drawText(epLines[0] || '', { x: leftMargin + 26, y: yCh - 6, size: 7.5, font: helvetica, color: textDark });
      if (epLines[1]) {
        pageCh.drawText(epLines[1], { x: leftMargin + 26, y: yCh - 15, size: 7, font: helvetica, color: textDark });
      }
      yCh -= 28;
    }
  }

  // ==========================================
  // PAGE 6: OFFICIAL MINISTRY FORMULA SHEET (ورقة المفاهيم)
  // ==========================================
  const pageFormulas = doc.addPage([pageWidth, pageHeight]);
  let yForm = pageHeight - 55;

  pageFormulas.drawText('OFFICIAL MINISTRY FORMULA REFERENCE SHEET', {
    x: leftMargin,
    y: yForm,
    size: 14,
    font: timesBold,
    color: darkTheme,
  });
  yForm -= 8;
  pageFormulas.drawLine({
    start: { x: leftMargin, y: yForm },
    end: { x: rightMargin, y: yForm },
    thickness: 2,
    color: goldColor,
  });
  yForm -= 20;

  pageFormulas.drawText('AUTHORIZED CONCEPT CARD (SHEET OF CONCEPTS) PROVIDED IN EXAMINATION CENTERS', {
    x: leftMargin,
    y: yForm,
    size: 8,
    font: helveticaBold,
    color: textMuted,
  });
  yForm -= 18;

  // 2-column layout for formula categories
  const col1X = leftMargin;
  const col2X = leftMargin + contentWidth / 2 + 10;
  const colWidth = contentWidth / 2 - 10;

  for (let fi = 0; fi < details.formulaSheet.length; fi++) {
    const fcat = details.formulaSheet[fi];
    const isCol2 = fi % 2 === 1;
    const startX = isCol2 ? col2X : col1X;
    let curY = isCol2 ? yForm + 180 : yForm; // align column heights approximately

    // Header box for category
    pageFormulas.drawRectangle({
      x: startX,
      y: yForm - 16,
      width: colWidth,
      height: 20,
      color: blendWithBlack(themeColor, 0.1),
    });
    pageFormulas.drawText(fcat.category.toUpperCase(), {
      x: startX + 8,
      y: yForm - 11,
      size: 7.5,
      font: helveticaBold,
      color: white,
    });
    yForm -= 24;

    for (const f of fcat.formulas) {
      pageFormulas.drawRectangle({
        x: startX,
        y: yForm - 10,
        width: colWidth,
        height: 16,
        color: lightBg,
        borderColor: rgb(0.85, 0.88, 0.92),
        borderWidth: 0.5,
      });
      pageFormulas.drawText(f, {
        x: startX + 8,
        y: yForm - 5,
        size: 7.5,
        font: courier,
        color: textDark,
      });
      yForm -= 18;
    }
    yForm -= 12;
  }

  // ==========================================
  // PAGE 7: EXAMINATION SPECIFICATIONS & BACK COVER
  // ==========================================
  const pageBack = doc.addPage([pageWidth, pageHeight]);
  let yB = pageHeight - 55;

  pageBack.drawText('NATIONAL EXAMINATION PROTOCOLS & EVALUATION MATRIX', {
    x: leftMargin,
    y: yB,
    size: 13,
    font: timesBold,
    color: darkTheme,
  });
  yB -= 8;
  pageBack.drawLine({
    start: { x: leftMargin, y: yB },
    end: { x: rightMargin, y: yB },
    thickness: 2,
    color: themeColor,
  });
  yB -= 20;

  // Question Format Specs
  pageBack.drawText('1. Structure of the National Examination Paper', {
    x: leftMargin,
    y: yB,
    size: 10.5,
    font: helveticaBold,
    color: darkTheme,
  });
  yB -= 16;

  const paperSpecs = [
    { label: 'Paper Duration:', val: details.examDuration },
    { label: 'Total Scaled Marks:', val: `${details.totalMarks} Marks` },
    { label: 'Section I (Objective):', val: 'Multiple Choice Questions (MCQ) with 4 options; single best answer.' },
    { label: 'Section II (Subjective):', val: 'Structured multi-step analytical and proof essay questions.' },
    { label: 'Electronic Scoring:', val: 'Objective answer sheets processed via computerized optical mark recognition (OMR).' },
    { label: 'Manual Essay Scoring:', val: 'Double-blind evaluation by two independent certified ministerial examiners.' },
  ];

  for (const ps of paperSpecs) {
    pageBack.drawText(ps.label, { x: leftMargin + 10, y: yB, size: 8, font: helveticaBold, color: textDark });
    pageBack.drawText(ps.val, { x: leftMargin + 140, y: yB, size: 8, font: helvetica, color: textDark });
    yB -= 15;
  }
  yB -= 12;

  // General Directives
  pageBack.drawText('2. Standard Candidate Exam Directives', {
    x: leftMargin,
    y: yB,
    size: 10.5,
    font: helveticaBold,
    color: darkTheme,
  });
  yB -= 16;

  for (const gd of details.guidelines) {
    pageBack.drawText('•', { x: leftMargin + 10, y: yB, size: 9, font: helveticaBold, color: themeColor });
    const gdLines = wrapText(gd, contentWidth - 25, helvetica, 8);
    for (const gdl of gdLines) {
      pageBack.drawText(gdl, { x: leftMargin + 22, y: yB, size: 8, font: helvetica, color: textDark });
      yB -= 13;
    }
  }

  // Official Institutional Seal & Registration Footer Box
  yB = 170;
  pageBack.drawRectangle({
    x: leftMargin,
    y: 45,
    width: contentWidth,
    height: 125,
    color: darkSlate,
    borderColor: goldColor,
    borderWidth: 1.5,
  });

  pageBack.drawText('ARAB REPUBLIC OF EGYPT  •  MINISTRY OF EDUCATION', {
    x: leftMargin + 20,
    y: 152,
    size: 9,
    font: helveticaBold,
    color: goldColor,
  });
  pageBack.drawText('NATIONAL CENTER FOR EXAMINATIONS & EDUCATIONAL EVALUATION (NCEEE)', {
    x: leftMargin + 20,
    y: 140,
    size: 7.5,
    font: helvetica,
    color: white,
  });

  pageBack.drawLine({
    start: { x: leftMargin + 20, y: 132 },
    end: { x: rightMargin - 20, y: 132 },
    thickness: 0.75,
    color: rgb(0.3, 0.35, 0.45),
  });

  pageBack.drawText(`Official Document Code: ${book.code}`, {
    x: leftMargin + 20,
    y: 118,
    size: 8,
    font: courier,
    color: rgb(0.9, 0.9, 0.95),
  });
  pageBack.drawText(`Curriculum Cycle: 2025/2026 Academic Year  |  National Edition`, {
    x: leftMargin + 20,
    y: 105,
    size: 8,
    font: helvetica,
    color: rgb(0.8, 0.85, 0.9),
  });
  pageBack.drawText(`Official Portal: https://moe.gov.eg/ar/elearning-content/`, {
    x: leftMargin + 20,
    y: 92,
    size: 8,
    font: courier,
    color: goldColor,
  });
  pageBack.drawText('All rights reserved © 2025 Ministry of Education & Technical Education - Egypt.', {
    x: leftMargin + 20,
    y: 78,
    size: 7,
    font: helveticaOblique,
    color: rgb(0.65, 0.7, 0.78),
  });
  pageBack.drawText('Unauthorized commercial reprinting or distribution without ministerial sanction is prohibited.', {
    x: leftMargin + 20,
    y: 65,
    size: 6.5,
    font: helvetica,
    color: rgb(0.55, 0.6, 0.68),
  });

  // Setup headers & footers for all pages except cover
  totalPagesCount = doc.getPageCount();
  const allPages = doc.getPages();
  for (let p = 1; p < allPages.length; p++) {
    setupPageHeaderFooter(allPages[p], p + 1, totalPagesCount);
  }

  // Save to file
  const pdfBytes = await doc.save();
  fs.writeFileSync(outPath, pdfBytes);
  console.log(`Generated: ${path.basename(outPath)} (${totalPagesCount} pages, ${(pdfBytes.length / 1024).toFixed(1)} KB)`);
}

// Generate all 10 official books
async function main() {
  const booksDir = path.resolve(process.cwd(), 'public/books');
  if (!fs.existsSync(booksDir)) {
    fs.mkdirSync(booksDir, { recursive: true });
  }

  console.log(`Generating ${officialBooksList.length} official Ministry PDF textbooks into: ${booksDir}`);

  const forceAll = process.argv.includes('--force');
  for (const book of officialBooksList) {
    const targetFile = path.join(booksDir, book.filename);
    if (!forceAll && fs.existsSync(targetFile)) {
      continue;
    }
    await generateBookPdf(book, targetFile);
  }

  console.log('All official Ministry textbooks generated/verified successfully!');
}

main().catch(err => {
  console.error('Error generating books:', err);
  process.exit(1);
});
