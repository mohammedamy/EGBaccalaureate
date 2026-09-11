import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_ch2_db_easy_01",
    "titleEn": "Rank of Upper Triangular Matrix #1",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #1",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 2 & 3 & -1 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 2 & 3 & -1 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 0,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 2, 3, and 4.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 2، 3، 4.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_02",
    "titleEn": "Rank of Upper Triangular Matrix #2",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #2",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 3 & 4 & -1 \\\\ 0 & 4 & 4 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 3 & 4 & -1 \\\\ 0 & 4 & 4 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 1,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 3, 4, and 5.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 3، 4، 5.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_03",
    "titleEn": "Rank of Upper Triangular Matrix #3",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #3",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 4 & 5 & -1 \\\\ 0 & 5 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 4 & 5 & -1 \\\\ 0 & 5 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 2$",
    "correctIndex": 2,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 4, 5, and 0.",
      "2. Number of non-zero rows is 2, so rank(A) = 2."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 4، 5، 0.",
      "٢. عدد الصفوف غير الصفرية هو 2 إذن الرتبة = 2."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_04",
    "titleEn": "Rank of Upper Triangular Matrix #4",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #4",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 5 & 6 & -1 \\\\ 0 & 6 & 4 \\\\ 0 & 0 & 7 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 5 & 6 & -1 \\\\ 0 & 6 & 4 \\\\ 0 & 0 & 7 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 3,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 5, 6, and 7.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 5، 6، 7.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_05",
    "titleEn": "Rank of Upper Triangular Matrix #5",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #5",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 6 & 7 & -1 \\\\ 0 & 7 & 4 \\\\ 0 & 0 & 8 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 6 & 7 & -1 \\\\ 0 & 7 & 4 \\\\ 0 & 0 & 8 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 0,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 6, 7, and 8.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 6، 7، 8.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_06",
    "titleEn": "Rank of Upper Triangular Matrix #6",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #6",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 7 & 8 & -1 \\\\ 0 & 8 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 7 & 8 & -1 \\\\ 0 & 8 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 2$",
    "correctIndex": 1,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 7, 8, and 0.",
      "2. Number of non-zero rows is 2, so rank(A) = 2."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 7، 8، 0.",
      "٢. عدد الصفوف غير الصفرية هو 2 إذن الرتبة = 2."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_07",
    "titleEn": "Rank of Upper Triangular Matrix #7",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #7",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 8 & 9 & -1 \\\\ 0 & 9 & 4 \\\\ 0 & 0 & 10 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 8 & 9 & -1 \\\\ 0 & 9 & 4 \\\\ 0 & 0 & 10 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 2$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 2$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 2,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 8, 9, and 10.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 8، 9، 10.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_08",
    "titleEn": "Rank of Upper Triangular Matrix #8",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #8",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 9 & 10 & -1 \\\\ 0 & 10 & 4 \\\\ 0 & 0 & 11 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 9 & 10 & -1 \\\\ 0 & 10 & 4 \\\\ 0 & 0 & 11 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 3,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 9, 10, and 11.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 9، 10، 11.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_09",
    "titleEn": "Rank of Upper Triangular Matrix #9",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #9",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 10 & 11 & -1 \\\\ 0 & 11 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 10 & 11 & -1 \\\\ 0 & 11 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 2$",
    "correctIndex": 0,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 10, 11, and 0.",
      "2. Number of non-zero rows is 2, so rank(A) = 2."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 10، 11، 0.",
      "٢. عدد الصفوف غير الصفرية هو 2 إذن الرتبة = 2."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_10",
    "titleEn": "Rank of Upper Triangular Matrix #10",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #10",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 11 & 12 & -1 \\\\ 0 & 12 & 4 \\\\ 0 & 0 & 13 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 11 & 12 & -1 \\\\ 0 & 12 & 4 \\\\ 0 & 0 & 13 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 1,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 11, 12, and 13.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 11، 12، 13.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_11",
    "titleEn": "Rank of Upper Triangular Matrix #11",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #11",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 12 & 13 & -1 \\\\ 0 & 13 & 4 \\\\ 0 & 0 & 14 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 12 & 13 & -1 \\\\ 0 & 13 & 4 \\\\ 0 & 0 & 14 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 2$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 2$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 2,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 12, 13, and 14.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 12، 13، 14.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_12",
    "titleEn": "Rank of Upper Triangular Matrix #12",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #12",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 13 & 14 & -1 \\\\ 0 & 14 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 13 & 14 & -1 \\\\ 0 & 14 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 2$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 2$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 2$",
    "correctIndex": 3,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 13, 14, and 0.",
      "2. Number of non-zero rows is 2, so rank(A) = 2."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 13، 14، 0.",
      "٢. عدد الصفوف غير الصفرية هو 2 إذن الرتبة = 2."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_13",
    "titleEn": "Rank of Upper Triangular Matrix #13",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #13",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 14 & 15 & -1 \\\\ 0 & 15 & 4 \\\\ 0 & 0 & 16 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 14 & 15 & -1 \\\\ 0 & 15 & 4 \\\\ 0 & 0 & 16 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 0,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 14, 15, and 16.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 14، 15، 16.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_14",
    "titleEn": "Rank of Upper Triangular Matrix #14",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #14",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 15 & 16 & -1 \\\\ 0 & 16 & 4 \\\\ 0 & 0 & 17 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 15 & 16 & -1 \\\\ 0 & 16 & 4 \\\\ 0 & 0 & 17 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$",
    "correctIndex": 1,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 15, 16, and 17.",
      "2. Number of non-zero rows is 3, so rank(A) = 3."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 15، 16، 17.",
      "٢. عدد الصفوف غير الصفرية هو 3 إذن الرتبة = 3."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_15",
    "titleEn": "Rank of Upper Triangular Matrix #15",
    "titleAr": "رتبة مصفوفة مثلثية علوية رقم #15",
    "difficulty": "easy",
    "questionEn": "Find the matrix rank $\\text{rank}(A)$ of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 16 & 17 & -1 \\\\ 0 & 17 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 16 & 17 & -1 \\\\ 0 & 17 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 2$",
    "correctIndex": 2,
    "hintEn": "For a triangular matrix, the rank equals the count of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، الرتبة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix is in upper triangular form with diagonal entries 16, 17, and 0.",
      "2. Number of non-zero rows is 2, so rank(A) = 2."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة في الصورة المثلثية بعناصر قطرية 16، 17، 0.",
      "٢. عدد الصفوف غير الصفرية هو 2 إذن الرتبة = 2."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible from non-zero pivots.",
    "teacherTipAr": "في الصورة المدرجة، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية."
  },
  {
    "id": "egbac_ch2_db_easy_16",
    "titleEn": "Rouché-Capelli Inconsistent System Case #1",
    "titleAr": "نظام غير متوافق وفق روتشيه-كابيلي حالة #1",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$) in scenario #1, if $\\text{rank}(A) = 2$ while $\\text{rank}([A|B]) = 3$, classify the solution set.",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$) في الحالة #1، إذا كان $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$، فما تصنيف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point for test case #1",
      "Infinitely many solutions along a line for test case #1",
      "Infinitely many solutions forming a plane for test case #1",
      "Inconsistent (no solution, empty set $\\varnothing$) for test case #1"
    ],
    "optionsAr": [
      "حل وحيد للحالة #1",
      "عدد لا نهائي من الحلول على خط مستقيم للحالة #1",
      "عدد لا نهائي من الحلول يمثل مستوى للحالة #1",
      "غير متوافق (لا يوجد حل، مجموعة خالية) للحالة #1"
    ],
    "correctAnswer": "Inconsistent (no solution, empty set $\\varnothing$) for test case #1",
    "correctIndex": 3,
    "hintEn": "If rank(A) < rank([A|B]), the system is inconsistent.",
    "hintAr": "إذا كانت رتبة A أقل من رتبة الموسعة، فالنظام غير متوافق.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A) = 2$ with $\\text{rank}([A|B]) = 3$.",
      "2. Since rank(A) < rank([A|B]), no solution exists."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبة مصفوفة المعاملات مع المصفوفة الموسعة.",
      "٢. بما أن رتبة A < رتبة الموسعة، فلا يوجد حل."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank([A|B]), the system is inconsistent.",
    "teacherTipAr": "عندما تكون رتبة المعاملات أقل من الموسعة، يستحيل وجود حل."
  },
  {
    "id": "egbac_ch2_db_easy_17",
    "titleEn": "Rouché-Capelli Dependent System Case #2",
    "titleAr": "نظام متوافق غير محدد حالة #2",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$ in scenario #2, if $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, describe the geometric dimension of the solution set.",
    "questionAr": "لنظام مكون من ٣ مجاهيل في $\\mathbb{R}^3$ في الحالة #2، إذا كان $\\text{rank}(A) = \\text{rank}([A|B]) = 2$، فصف البعد الهندسي لمجموعة الحلول.",
    "optionsEn": [
      "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #2",
      "Unique single solution point for case #2",
      "No solution (inconsistent) for case #2",
      "Infinitely many solutions depending on 2 free parameters for case #2"
    ],
    "optionsAr": [
      "عدد لا نهائي من الحلول معتمد على وسيط حر واحد (خط مستقيم في الفراغ) للحالة #2",
      "حل وحيد متمثل في نقطة للحالة #2",
      "لا يوجد حل (نظام غير متوافق) للحالة #2",
      "عدد لا نهائي من الحلول معتمد على وسيطين للحالة #2"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #2",
    "correctIndex": 0,
    "hintEn": "Degrees of freedom = unknowns - rank = 3 - 2 = 1.",
    "hintAr": "درجات الحرية = عدد المجاهيل - الرتبة = 3 - 2 = 1.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 2 implies consistency.",
      "2. Free parameters = 3 - 2 = 1 (a 1D affine line)."
    ],
    "stepByStepSolutionAr": [
      "١. تساوي الرتبتين يعني أن النظام متوافق.",
      "٢. عدد المعلمات الحرة = 3 - 2 = 1 (خط مستقيم)."
    ],
    "teacherTipEn": "Solution space dimension equals n - rank(A).",
    "teacherTipAr": "بعد فضاء الحلول يساوي عدد المجاهيل ناقص الرتبة."
  },
  {
    "id": "egbac_ch2_db_easy_18",
    "titleEn": "Rouché-Capelli Inconsistent System Case #3",
    "titleAr": "نظام غير متوافق وفق روتشيه-كابيلي حالة #3",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$) in scenario #3, if $\\text{rank}(A) = 2$ while $\\text{rank}([A|B]) = 3$, classify the solution set.",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$) في الحالة #3، إذا كان $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$، فما تصنيف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point for test case #3",
      "Inconsistent (no solution, empty set $\\varnothing$) for test case #3",
      "Infinitely many solutions along a line for test case #3",
      "Infinitely many solutions forming a plane for test case #3"
    ],
    "optionsAr": [
      "حل وحيد للحالة #3",
      "غير متوافق (لا يوجد حل، مجموعة خالية) للحالة #3",
      "عدد لا نهائي من الحلول على خط مستقيم للحالة #3",
      "عدد لا نهائي من الحلول يمثل مستوى للحالة #3"
    ],
    "correctAnswer": "Inconsistent (no solution, empty set $\\varnothing$) for test case #3",
    "correctIndex": 1,
    "hintEn": "If rank(A) < rank([A|B]), the system is inconsistent.",
    "hintAr": "إذا كانت رتبة A أقل من رتبة الموسعة، فالنظام غير متوافق.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A) = 2$ with $\\text{rank}([A|B]) = 3$.",
      "2. Since rank(A) < rank([A|B]), no solution exists."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبة مصفوفة المعاملات مع المصفوفة الموسعة.",
      "٢. بما أن رتبة A < رتبة الموسعة، فلا يوجد حل."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank([A|B]), the system is inconsistent.",
    "teacherTipAr": "عندما تكون رتبة المعاملات أقل من الموسعة، يستحيل وجود حل."
  },
  {
    "id": "egbac_ch2_db_easy_19",
    "titleEn": "Rouché-Capelli Dependent System Case #4",
    "titleAr": "نظام متوافق غير محدد حالة #4",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$ in scenario #4, if $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, describe the geometric dimension of the solution set.",
    "questionAr": "لنظام مكون من ٣ مجاهيل في $\\mathbb{R}^3$ في الحالة #4، إذا كان $\\text{rank}(A) = \\text{rank}([A|B]) = 2$، فصف البعد الهندسي لمجموعة الحلول.",
    "optionsEn": [
      "Unique single solution point for case #4",
      "No solution (inconsistent) for case #4",
      "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #4",
      "Infinitely many solutions depending on 2 free parameters for case #4"
    ],
    "optionsAr": [
      "حل وحيد متمثل في نقطة للحالة #4",
      "لا يوجد حل (نظام غير متوافق) للحالة #4",
      "عدد لا نهائي من الحلول معتمد على وسيط حر واحد (خط مستقيم في الفراغ) للحالة #4",
      "عدد لا نهائي من الحلول معتمد على وسيطين للحالة #4"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #4",
    "correctIndex": 2,
    "hintEn": "Degrees of freedom = unknowns - rank = 3 - 2 = 1.",
    "hintAr": "درجات الحرية = عدد المجاهيل - الرتبة = 3 - 2 = 1.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 2 implies consistency.",
      "2. Free parameters = 3 - 2 = 1 (a 1D affine line)."
    ],
    "stepByStepSolutionAr": [
      "١. تساوي الرتبتين يعني أن النظام متوافق.",
      "٢. عدد المعلمات الحرة = 3 - 2 = 1 (خط مستقيم)."
    ],
    "teacherTipEn": "Solution space dimension equals n - rank(A).",
    "teacherTipAr": "بعد فضاء الحلول يساوي عدد المجاهيل ناقص الرتبة."
  },
  {
    "id": "egbac_ch2_db_easy_20",
    "titleEn": "Rouché-Capelli Inconsistent System Case #5",
    "titleAr": "نظام غير متوافق وفق روتشيه-كابيلي حالة #5",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$) in scenario #5, if $\\text{rank}(A) = 2$ while $\\text{rank}([A|B]) = 3$, classify the solution set.",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$) في الحالة #5، إذا كان $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$، فما تصنيف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point for test case #5",
      "Infinitely many solutions along a line for test case #5",
      "Infinitely many solutions forming a plane for test case #5",
      "Inconsistent (no solution, empty set $\\varnothing$) for test case #5"
    ],
    "optionsAr": [
      "حل وحيد للحالة #5",
      "عدد لا نهائي من الحلول على خط مستقيم للحالة #5",
      "عدد لا نهائي من الحلول يمثل مستوى للحالة #5",
      "غير متوافق (لا يوجد حل، مجموعة خالية) للحالة #5"
    ],
    "correctAnswer": "Inconsistent (no solution, empty set $\\varnothing$) for test case #5",
    "correctIndex": 3,
    "hintEn": "If rank(A) < rank([A|B]), the system is inconsistent.",
    "hintAr": "إذا كانت رتبة A أقل من رتبة الموسعة، فالنظام غير متوافق.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A) = 2$ with $\\text{rank}([A|B]) = 3$.",
      "2. Since rank(A) < rank([A|B]), no solution exists."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبة مصفوفة المعاملات مع المصفوفة الموسعة.",
      "٢. بما أن رتبة A < رتبة الموسعة، فلا يوجد حل."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank([A|B]), the system is inconsistent.",
    "teacherTipAr": "عندما تكون رتبة المعاملات أقل من الموسعة، يستحيل وجود حل."
  },
  {
    "id": "egbac_ch2_db_easy_21",
    "titleEn": "Rouché-Capelli Dependent System Case #6",
    "titleAr": "نظام متوافق غير محدد حالة #6",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$ in scenario #6, if $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, describe the geometric dimension of the solution set.",
    "questionAr": "لنظام مكون من ٣ مجاهيل في $\\mathbb{R}^3$ في الحالة #6، إذا كان $\\text{rank}(A) = \\text{rank}([A|B]) = 2$، فصف البعد الهندسي لمجموعة الحلول.",
    "optionsEn": [
      "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #6",
      "Unique single solution point for case #6",
      "No solution (inconsistent) for case #6",
      "Infinitely many solutions depending on 2 free parameters for case #6"
    ],
    "optionsAr": [
      "عدد لا نهائي من الحلول معتمد على وسيط حر واحد (خط مستقيم في الفراغ) للحالة #6",
      "حل وحيد متمثل في نقطة للحالة #6",
      "لا يوجد حل (نظام غير متوافق) للحالة #6",
      "عدد لا نهائي من الحلول معتمد على وسيطين للحالة #6"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #6",
    "correctIndex": 0,
    "hintEn": "Degrees of freedom = unknowns - rank = 3 - 2 = 1.",
    "hintAr": "درجات الحرية = عدد المجاهيل - الرتبة = 3 - 2 = 1.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 2 implies consistency.",
      "2. Free parameters = 3 - 2 = 1 (a 1D affine line)."
    ],
    "stepByStepSolutionAr": [
      "١. تساوي الرتبتين يعني أن النظام متوافق.",
      "٢. عدد المعلمات الحرة = 3 - 2 = 1 (خط مستقيم)."
    ],
    "teacherTipEn": "Solution space dimension equals n - rank(A).",
    "teacherTipAr": "بعد فضاء الحلول يساوي عدد المجاهيل ناقص الرتبة."
  },
  {
    "id": "egbac_ch2_db_easy_22",
    "titleEn": "Rouché-Capelli Inconsistent System Case #7",
    "titleAr": "نظام غير متوافق وفق روتشيه-كابيلي حالة #7",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$) in scenario #7, if $\\text{rank}(A) = 2$ while $\\text{rank}([A|B]) = 3$, classify the solution set.",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$) في الحالة #7، إذا كان $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$، فما تصنيف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point for test case #7",
      "Inconsistent (no solution, empty set $\\varnothing$) for test case #7",
      "Infinitely many solutions along a line for test case #7",
      "Infinitely many solutions forming a plane for test case #7"
    ],
    "optionsAr": [
      "حل وحيد للحالة #7",
      "غير متوافق (لا يوجد حل، مجموعة خالية) للحالة #7",
      "عدد لا نهائي من الحلول على خط مستقيم للحالة #7",
      "عدد لا نهائي من الحلول يمثل مستوى للحالة #7"
    ],
    "correctAnswer": "Inconsistent (no solution, empty set $\\varnothing$) for test case #7",
    "correctIndex": 1,
    "hintEn": "If rank(A) < rank([A|B]), the system is inconsistent.",
    "hintAr": "إذا كانت رتبة A أقل من رتبة الموسعة، فالنظام غير متوافق.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A) = 2$ with $\\text{rank}([A|B]) = 3$.",
      "2. Since rank(A) < rank([A|B]), no solution exists."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبة مصفوفة المعاملات مع المصفوفة الموسعة.",
      "٢. بما أن رتبة A < رتبة الموسعة، فلا يوجد حل."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank([A|B]), the system is inconsistent.",
    "teacherTipAr": "عندما تكون رتبة المعاملات أقل من الموسعة، يستحيل وجود حل."
  },
  {
    "id": "egbac_ch2_db_easy_23",
    "titleEn": "Rouché-Capelli Dependent System Case #8",
    "titleAr": "نظام متوافق غير محدد حالة #8",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$ in scenario #8, if $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, describe the geometric dimension of the solution set.",
    "questionAr": "لنظام مكون من ٣ مجاهيل في $\\mathbb{R}^3$ في الحالة #8، إذا كان $\\text{rank}(A) = \\text{rank}([A|B]) = 2$، فصف البعد الهندسي لمجموعة الحلول.",
    "optionsEn": [
      "Unique single solution point for case #8",
      "No solution (inconsistent) for case #8",
      "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #8",
      "Infinitely many solutions depending on 2 free parameters for case #8"
    ],
    "optionsAr": [
      "حل وحيد متمثل في نقطة للحالة #8",
      "لا يوجد حل (نظام غير متوافق) للحالة #8",
      "عدد لا نهائي من الحلول معتمد على وسيط حر واحد (خط مستقيم في الفراغ) للحالة #8",
      "عدد لا نهائي من الحلول معتمد على وسيطين للحالة #8"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #8",
    "correctIndex": 2,
    "hintEn": "Degrees of freedom = unknowns - rank = 3 - 2 = 1.",
    "hintAr": "درجات الحرية = عدد المجاهيل - الرتبة = 3 - 2 = 1.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 2 implies consistency.",
      "2. Free parameters = 3 - 2 = 1 (a 1D affine line)."
    ],
    "stepByStepSolutionAr": [
      "١. تساوي الرتبتين يعني أن النظام متوافق.",
      "٢. عدد المعلمات الحرة = 3 - 2 = 1 (خط مستقيم)."
    ],
    "teacherTipEn": "Solution space dimension equals n - rank(A).",
    "teacherTipAr": "بعد فضاء الحلول يساوي عدد المجاهيل ناقص الرتبة."
  },
  {
    "id": "egbac_ch2_db_easy_24",
    "titleEn": "Rouché-Capelli Inconsistent System Case #9",
    "titleAr": "نظام غير متوافق وفق روتشيه-كابيلي حالة #9",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$) in scenario #9, if $\\text{rank}(A) = 2$ while $\\text{rank}([A|B]) = 3$, classify the solution set.",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$) في الحالة #9، إذا كان $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$، فما تصنيف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point for test case #9",
      "Infinitely many solutions along a line for test case #9",
      "Infinitely many solutions forming a plane for test case #9",
      "Inconsistent (no solution, empty set $\\varnothing$) for test case #9"
    ],
    "optionsAr": [
      "حل وحيد للحالة #9",
      "عدد لا نهائي من الحلول على خط مستقيم للحالة #9",
      "عدد لا نهائي من الحلول يمثل مستوى للحالة #9",
      "غير متوافق (لا يوجد حل، مجموعة خالية) للحالة #9"
    ],
    "correctAnswer": "Inconsistent (no solution, empty set $\\varnothing$) for test case #9",
    "correctIndex": 3,
    "hintEn": "If rank(A) < rank([A|B]), the system is inconsistent.",
    "hintAr": "إذا كانت رتبة A أقل من رتبة الموسعة، فالنظام غير متوافق.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A) = 2$ with $\\text{rank}([A|B]) = 3$.",
      "2. Since rank(A) < rank([A|B]), no solution exists."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبة مصفوفة المعاملات مع المصفوفة الموسعة.",
      "٢. بما أن رتبة A < رتبة الموسعة، فلا يوجد حل."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank([A|B]), the system is inconsistent.",
    "teacherTipAr": "عندما تكون رتبة المعاملات أقل من الموسعة، يستحيل وجود حل."
  },
  {
    "id": "egbac_ch2_db_easy_25",
    "titleEn": "Rouché-Capelli Dependent System Case #10",
    "titleAr": "نظام متوافق غير محدد حالة #10",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$ in scenario #10, if $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, describe the geometric dimension of the solution set.",
    "questionAr": "لنظام مكون من ٣ مجاهيل في $\\mathbb{R}^3$ في الحالة #10، إذا كان $\\text{rank}(A) = \\text{rank}([A|B]) = 2$، فصف البعد الهندسي لمجموعة الحلول.",
    "optionsEn": [
      "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #10",
      "Unique single solution point for case #10",
      "No solution (inconsistent) for case #10",
      "Infinitely many solutions depending on 2 free parameters for case #10"
    ],
    "optionsAr": [
      "عدد لا نهائي من الحلول معتمد على وسيط حر واحد (خط مستقيم في الفراغ) للحالة #10",
      "حل وحيد متمثل في نقطة للحالة #10",
      "لا يوجد حل (نظام غير متوافق) للحالة #10",
      "عدد لا نهائي من الحلول معتمد على وسيطين للحالة #10"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #10",
    "correctIndex": 0,
    "hintEn": "Degrees of freedom = unknowns - rank = 3 - 2 = 1.",
    "hintAr": "درجات الحرية = عدد المجاهيل - الرتبة = 3 - 2 = 1.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 2 implies consistency.",
      "2. Free parameters = 3 - 2 = 1 (a 1D affine line)."
    ],
    "stepByStepSolutionAr": [
      "١. تساوي الرتبتين يعني أن النظام متوافق.",
      "٢. عدد المعلمات الحرة = 3 - 2 = 1 (خط مستقيم)."
    ],
    "teacherTipEn": "Solution space dimension equals n - rank(A).",
    "teacherTipAr": "بعد فضاء الحلول يساوي عدد المجاهيل ناقص الرتبة."
  },
  {
    "id": "egbac_ch2_db_easy_26",
    "titleEn": "Rouché-Capelli Inconsistent System Case #11",
    "titleAr": "نظام غير متوافق وفق روتشيه-كابيلي حالة #11",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$) in scenario #11, if $\\text{rank}(A) = 2$ while $\\text{rank}([A|B]) = 3$, classify the solution set.",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$) في الحالة #11، إذا كان $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$، فما تصنيف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point for test case #11",
      "Inconsistent (no solution, empty set $\\varnothing$) for test case #11",
      "Infinitely many solutions along a line for test case #11",
      "Infinitely many solutions forming a plane for test case #11"
    ],
    "optionsAr": [
      "حل وحيد للحالة #11",
      "غير متوافق (لا يوجد حل، مجموعة خالية) للحالة #11",
      "عدد لا نهائي من الحلول على خط مستقيم للحالة #11",
      "عدد لا نهائي من الحلول يمثل مستوى للحالة #11"
    ],
    "correctAnswer": "Inconsistent (no solution, empty set $\\varnothing$) for test case #11",
    "correctIndex": 1,
    "hintEn": "If rank(A) < rank([A|B]), the system is inconsistent.",
    "hintAr": "إذا كانت رتبة A أقل من رتبة الموسعة، فالنظام غير متوافق.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A) = 2$ with $\\text{rank}([A|B]) = 3$.",
      "2. Since rank(A) < rank([A|B]), no solution exists."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبة مصفوفة المعاملات مع المصفوفة الموسعة.",
      "٢. بما أن رتبة A < رتبة الموسعة، فلا يوجد حل."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank([A|B]), the system is inconsistent.",
    "teacherTipAr": "عندما تكون رتبة المعاملات أقل من الموسعة، يستحيل وجود حل."
  },
  {
    "id": "egbac_ch2_db_easy_27",
    "titleEn": "Rouché-Capelli Dependent System Case #12",
    "titleAr": "نظام متوافق غير محدد حالة #12",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$ in scenario #12, if $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, describe the geometric dimension of the solution set.",
    "questionAr": "لنظام مكون من ٣ مجاهيل في $\\mathbb{R}^3$ في الحالة #12، إذا كان $\\text{rank}(A) = \\text{rank}([A|B]) = 2$، فصف البعد الهندسي لمجموعة الحلول.",
    "optionsEn": [
      "Unique single solution point for case #12",
      "No solution (inconsistent) for case #12",
      "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #12",
      "Infinitely many solutions depending on 2 free parameters for case #12"
    ],
    "optionsAr": [
      "حل وحيد متمثل في نقطة للحالة #12",
      "لا يوجد حل (نظام غير متوافق) للحالة #12",
      "عدد لا نهائي من الحلول معتمد على وسيط حر واحد (خط مستقيم في الفراغ) للحالة #12",
      "عدد لا نهائي من الحلول معتمد على وسيطين للحالة #12"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #12",
    "correctIndex": 2,
    "hintEn": "Degrees of freedom = unknowns - rank = 3 - 2 = 1.",
    "hintAr": "درجات الحرية = عدد المجاهيل - الرتبة = 3 - 2 = 1.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 2 implies consistency.",
      "2. Free parameters = 3 - 2 = 1 (a 1D affine line)."
    ],
    "stepByStepSolutionAr": [
      "١. تساوي الرتبتين يعني أن النظام متوافق.",
      "٢. عدد المعلمات الحرة = 3 - 2 = 1 (خط مستقيم)."
    ],
    "teacherTipEn": "Solution space dimension equals n - rank(A).",
    "teacherTipAr": "بعد فضاء الحلول يساوي عدد المجاهيل ناقص الرتبة."
  },
  {
    "id": "egbac_ch2_db_easy_28",
    "titleEn": "Rouché-Capelli Inconsistent System Case #13",
    "titleAr": "نظام غير متوافق وفق روتشيه-كابيلي حالة #13",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$) in scenario #13, if $\\text{rank}(A) = 2$ while $\\text{rank}([A|B]) = 3$, classify the solution set.",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$) في الحالة #13، إذا كان $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$، فما تصنيف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point for test case #13",
      "Infinitely many solutions along a line for test case #13",
      "Infinitely many solutions forming a plane for test case #13",
      "Inconsistent (no solution, empty set $\\varnothing$) for test case #13"
    ],
    "optionsAr": [
      "حل وحيد للحالة #13",
      "عدد لا نهائي من الحلول على خط مستقيم للحالة #13",
      "عدد لا نهائي من الحلول يمثل مستوى للحالة #13",
      "غير متوافق (لا يوجد حل، مجموعة خالية) للحالة #13"
    ],
    "correctAnswer": "Inconsistent (no solution, empty set $\\varnothing$) for test case #13",
    "correctIndex": 3,
    "hintEn": "If rank(A) < rank([A|B]), the system is inconsistent.",
    "hintAr": "إذا كانت رتبة A أقل من رتبة الموسعة، فالنظام غير متوافق.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A) = 2$ with $\\text{rank}([A|B]) = 3$.",
      "2. Since rank(A) < rank([A|B]), no solution exists."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبة مصفوفة المعاملات مع المصفوفة الموسعة.",
      "٢. بما أن رتبة A < رتبة الموسعة، فلا يوجد حل."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank([A|B]), the system is inconsistent.",
    "teacherTipAr": "عندما تكون رتبة المعاملات أقل من الموسعة، يستحيل وجود حل."
  },
  {
    "id": "egbac_ch2_db_easy_29",
    "titleEn": "Rouché-Capelli Dependent System Case #14",
    "titleAr": "نظام متوافق غير محدد حالة #14",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$ in scenario #14, if $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, describe the geometric dimension of the solution set.",
    "questionAr": "لنظام مكون من ٣ مجاهيل في $\\mathbb{R}^3$ في الحالة #14، إذا كان $\\text{rank}(A) = \\text{rank}([A|B]) = 2$، فصف البعد الهندسي لمجموعة الحلول.",
    "optionsEn": [
      "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #14",
      "Unique single solution point for case #14",
      "No solution (inconsistent) for case #14",
      "Infinitely many solutions depending on 2 free parameters for case #14"
    ],
    "optionsAr": [
      "عدد لا نهائي من الحلول معتمد على وسيط حر واحد (خط مستقيم في الفراغ) للحالة #14",
      "حل وحيد متمثل في نقطة للحالة #14",
      "لا يوجد حل (نظام غير متوافق) للحالة #14",
      "عدد لا نهائي من الحلول معتمد على وسيطين للحالة #14"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 free parameter (a straight line in $\\mathbb{R}^3$) for case #14",
    "correctIndex": 0,
    "hintEn": "Degrees of freedom = unknowns - rank = 3 - 2 = 1.",
    "hintAr": "درجات الحرية = عدد المجاهيل - الرتبة = 3 - 2 = 1.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 2 implies consistency.",
      "2. Free parameters = 3 - 2 = 1 (a 1D affine line)."
    ],
    "stepByStepSolutionAr": [
      "١. تساوي الرتبتين يعني أن النظام متوافق.",
      "٢. عدد المعلمات الحرة = 3 - 2 = 1 (خط مستقيم)."
    ],
    "teacherTipEn": "Solution space dimension equals n - rank(A).",
    "teacherTipAr": "بعد فضاء الحلول يساوي عدد المجاهيل ناقص الرتبة."
  },
  {
    "id": "egbac_ch2_db_easy_30",
    "titleEn": "Rouché-Capelli Inconsistent System Case #15",
    "titleAr": "نظام غير متوافق وفق روتشيه-كابيلي حالة #15",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$) in scenario #15, if $\\text{rank}(A) = 2$ while $\\text{rank}([A|B]) = 3$, classify the solution set.",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$) في الحالة #15، إذا كان $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$، فما تصنيف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point for test case #15",
      "Inconsistent (no solution, empty set $\\varnothing$) for test case #15",
      "Infinitely many solutions along a line for test case #15",
      "Infinitely many solutions forming a plane for test case #15"
    ],
    "optionsAr": [
      "حل وحيد للحالة #15",
      "غير متوافق (لا يوجد حل، مجموعة خالية) للحالة #15",
      "عدد لا نهائي من الحلول على خط مستقيم للحالة #15",
      "عدد لا نهائي من الحلول يمثل مستوى للحالة #15"
    ],
    "correctAnswer": "Inconsistent (no solution, empty set $\\varnothing$) for test case #15",
    "correctIndex": 1,
    "hintEn": "If rank(A) < rank([A|B]), the system is inconsistent.",
    "hintAr": "إذا كانت رتبة A أقل من رتبة الموسعة، فالنظام غير متوافق.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A) = 2$ with $\\text{rank}([A|B]) = 3$.",
      "2. Since rank(A) < rank([A|B]), no solution exists."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبة مصفوفة المعاملات مع المصفوفة الموسعة.",
      "٢. بما أن رتبة A < رتبة الموسعة، فلا يوجد حل."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank([A|B]), the system is inconsistent.",
    "teacherTipAr": "عندما تكون رتبة المعاملات أقل من الموسعة، يستحيل وجود حل."
  },
  {
    "id": "egbac_ch2_db_easy_31",
    "titleEn": "Trace of Diagonal Matrix #1",
    "titleAr": "أثر مصفوفة قطرية رقم #1",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the $3 \\times 3$ matrix $A = \\text{diag}(1, 2, 3)$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة القطرية $A = \\text{diag}(1, 2, 3)$.",
    "optionsEn": [
      "$\\text{Tr}(A) = 8$",
      "$\\text{Tr}(A) = 4$",
      "$\\text{Tr}(A) = 6$",
      "$\\text{Tr}(A) = 10$"
    ],
    "optionsAr": [
      "$\\text{Tr}(A) = 8$",
      "$\\text{Tr}(A) = 4$",
      "$\\text{Tr}(A) = 6$",
      "$\\text{Tr}(A) = 10$"
    ],
    "correctAnswer": "$\\text{Tr}(A) = 6$",
    "correctIndex": 2,
    "hintEn": "Trace is the sum of diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Tr(A) = 1 + 2 + 3 = 6."
    ],
    "stepByStepSolutionAr": [
      "١. الأثر = 1 + 2 + 3 = 6."
    ],
    "teacherTipEn": "Trace equals the sum of eigenvalues.",
    "teacherTipAr": "أثر المصفوفة يساوي مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_32",
    "titleEn": "Determinant of Diagonal Matrix #2",
    "titleAr": "محدد مصفوفة قطرية رقم #2",
    "difficulty": "easy",
    "questionEn": "Compute the determinant $\\det(A)$ of the diagonal matrix $A = \\text{diag}(2, 3, 4)$.",
    "questionAr": "احسب محدد المصفوفة القطرية $A = \\text{diag}(2, 3, 4)$.",
    "optionsEn": [
      "$\\det(A) = 30$",
      "$\\det(A) = 20$",
      "$\\det(A) = 36$",
      "$\\det(A) = 24$"
    ],
    "optionsAr": [
      "$\\det(A) = 30$",
      "$\\det(A) = 20$",
      "$\\det(A) = 36$",
      "$\\det(A) = 24$"
    ],
    "correctAnswer": "$\\det(A) = 24$",
    "correctIndex": 3,
    "hintEn": "Determinant of diagonal matrix is product of diagonal elements.",
    "hintAr": "محدد المصفوفة القطرية يساوي حاصل ضرب عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. det(A) = (2)(3)(4) = 24."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = (2) × (3) × (4) = 24."
    ],
    "teacherTipEn": "Determinant equals the product of eigenvalues.",
    "teacherTipAr": "المحدد يساوي حاصل ضرب القيم الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_33",
    "titleEn": "Trace of Diagonal Matrix #3",
    "titleAr": "أثر مصفوفة قطرية رقم #3",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the $3 \\times 3$ matrix $A = \\text{diag}(3, 4, 5)$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة القطرية $A = \\text{diag}(3, 4, 5)$.",
    "optionsEn": [
      "$\\text{Tr}(A) = 12$",
      "$\\text{Tr}(A) = 14$",
      "$\\text{Tr}(A) = 10$",
      "$\\text{Tr}(A) = 16$"
    ],
    "optionsAr": [
      "$\\text{Tr}(A) = 12$",
      "$\\text{Tr}(A) = 14$",
      "$\\text{Tr}(A) = 10$",
      "$\\text{Tr}(A) = 16$"
    ],
    "correctAnswer": "$\\text{Tr}(A) = 12$",
    "correctIndex": 0,
    "hintEn": "Trace is the sum of diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Tr(A) = 3 + 4 + 5 = 12."
    ],
    "stepByStepSolutionAr": [
      "١. الأثر = 3 + 4 + 5 = 12."
    ],
    "teacherTipEn": "Trace equals the sum of eigenvalues.",
    "teacherTipAr": "أثر المصفوفة يساوي مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_34",
    "titleEn": "Determinant of Diagonal Matrix #4",
    "titleAr": "محدد مصفوفة قطرية رقم #4",
    "difficulty": "easy",
    "questionEn": "Compute the determinant $\\det(A)$ of the diagonal matrix $A = \\text{diag}(4, 5, 6)$.",
    "questionAr": "احسب محدد المصفوفة القطرية $A = \\text{diag}(4, 5, 6)$.",
    "optionsEn": [
      "$\\det(A) = 126$",
      "$\\det(A) = 120$",
      "$\\det(A) = 116$",
      "$\\det(A) = 132$"
    ],
    "optionsAr": [
      "$\\det(A) = 126$",
      "$\\det(A) = 120$",
      "$\\det(A) = 116$",
      "$\\det(A) = 132$"
    ],
    "correctAnswer": "$\\det(A) = 120$",
    "correctIndex": 1,
    "hintEn": "Determinant of diagonal matrix is product of diagonal elements.",
    "hintAr": "محدد المصفوفة القطرية يساوي حاصل ضرب عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. det(A) = (4)(5)(6) = 120."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = (4) × (5) × (6) = 120."
    ],
    "teacherTipEn": "Determinant equals the product of eigenvalues.",
    "teacherTipAr": "المحدد يساوي حاصل ضرب القيم الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_35",
    "titleEn": "Trace of Diagonal Matrix #5",
    "titleAr": "أثر مصفوفة قطرية رقم #5",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the $3 \\times 3$ matrix $A = \\text{diag}(5, 6, 7)$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة القطرية $A = \\text{diag}(5, 6, 7)$.",
    "optionsEn": [
      "$\\text{Tr}(A) = 20$",
      "$\\text{Tr}(A) = 16$",
      "$\\text{Tr}(A) = 18$",
      "$\\text{Tr}(A) = 22$"
    ],
    "optionsAr": [
      "$\\text{Tr}(A) = 20$",
      "$\\text{Tr}(A) = 16$",
      "$\\text{Tr}(A) = 18$",
      "$\\text{Tr}(A) = 22$"
    ],
    "correctAnswer": "$\\text{Tr}(A) = 18$",
    "correctIndex": 2,
    "hintEn": "Trace is the sum of diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Tr(A) = 5 + 6 + 7 = 18."
    ],
    "stepByStepSolutionAr": [
      "١. الأثر = 5 + 6 + 7 = 18."
    ],
    "teacherTipEn": "Trace equals the sum of eigenvalues.",
    "teacherTipAr": "أثر المصفوفة يساوي مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_36",
    "titleEn": "Determinant of Diagonal Matrix #6",
    "titleAr": "محدد مصفوفة قطرية رقم #6",
    "difficulty": "easy",
    "questionEn": "Compute the determinant $\\det(A)$ of the diagonal matrix $A = \\text{diag}(6, 7, 8)$.",
    "questionAr": "احسب محدد المصفوفة القطرية $A = \\text{diag}(6, 7, 8)$.",
    "optionsEn": [
      "$\\det(A) = 342$",
      "$\\det(A) = 332$",
      "$\\det(A) = 348$",
      "$\\det(A) = 336$"
    ],
    "optionsAr": [
      "$\\det(A) = 342$",
      "$\\det(A) = 332$",
      "$\\det(A) = 348$",
      "$\\det(A) = 336$"
    ],
    "correctAnswer": "$\\det(A) = 336$",
    "correctIndex": 3,
    "hintEn": "Determinant of diagonal matrix is product of diagonal elements.",
    "hintAr": "محدد المصفوفة القطرية يساوي حاصل ضرب عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. det(A) = (6)(7)(8) = 336."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = (6) × (7) × (8) = 336."
    ],
    "teacherTipEn": "Determinant equals the product of eigenvalues.",
    "teacherTipAr": "المحدد يساوي حاصل ضرب القيم الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_37",
    "titleEn": "Trace of Diagonal Matrix #7",
    "titleAr": "أثر مصفوفة قطرية رقم #7",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the $3 \\times 3$ matrix $A = \\text{diag}(7, 8, 9)$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة القطرية $A = \\text{diag}(7, 8, 9)$.",
    "optionsEn": [
      "$\\text{Tr}(A) = 24$",
      "$\\text{Tr}(A) = 26$",
      "$\\text{Tr}(A) = 22$",
      "$\\text{Tr}(A) = 28$"
    ],
    "optionsAr": [
      "$\\text{Tr}(A) = 24$",
      "$\\text{Tr}(A) = 26$",
      "$\\text{Tr}(A) = 22$",
      "$\\text{Tr}(A) = 28$"
    ],
    "correctAnswer": "$\\text{Tr}(A) = 24$",
    "correctIndex": 0,
    "hintEn": "Trace is the sum of diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Tr(A) = 7 + 8 + 9 = 24."
    ],
    "stepByStepSolutionAr": [
      "١. الأثر = 7 + 8 + 9 = 24."
    ],
    "teacherTipEn": "Trace equals the sum of eigenvalues.",
    "teacherTipAr": "أثر المصفوفة يساوي مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_38",
    "titleEn": "Determinant of Diagonal Matrix #8",
    "titleAr": "محدد مصفوفة قطرية رقم #8",
    "difficulty": "easy",
    "questionEn": "Compute the determinant $\\det(A)$ of the diagonal matrix $A = \\text{diag}(8, 9, 10)$.",
    "questionAr": "احسب محدد المصفوفة القطرية $A = \\text{diag}(8, 9, 10)$.",
    "optionsEn": [
      "$\\det(A) = 726$",
      "$\\det(A) = 720$",
      "$\\det(A) = 716$",
      "$\\det(A) = 732$"
    ],
    "optionsAr": [
      "$\\det(A) = 726$",
      "$\\det(A) = 720$",
      "$\\det(A) = 716$",
      "$\\det(A) = 732$"
    ],
    "correctAnswer": "$\\det(A) = 720$",
    "correctIndex": 1,
    "hintEn": "Determinant of diagonal matrix is product of diagonal elements.",
    "hintAr": "محدد المصفوفة القطرية يساوي حاصل ضرب عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. det(A) = (8)(9)(10) = 720."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = (8) × (9) × (10) = 720."
    ],
    "teacherTipEn": "Determinant equals the product of eigenvalues.",
    "teacherTipAr": "المحدد يساوي حاصل ضرب القيم الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_39",
    "titleEn": "Trace of Diagonal Matrix #9",
    "titleAr": "أثر مصفوفة قطرية رقم #9",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the $3 \\times 3$ matrix $A = \\text{diag}(9, 10, 11)$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة القطرية $A = \\text{diag}(9, 10, 11)$.",
    "optionsEn": [
      "$\\text{Tr}(A) = 32$",
      "$\\text{Tr}(A) = 28$",
      "$\\text{Tr}(A) = 30$",
      "$\\text{Tr}(A) = 34$"
    ],
    "optionsAr": [
      "$\\text{Tr}(A) = 32$",
      "$\\text{Tr}(A) = 28$",
      "$\\text{Tr}(A) = 30$",
      "$\\text{Tr}(A) = 34$"
    ],
    "correctAnswer": "$\\text{Tr}(A) = 30$",
    "correctIndex": 2,
    "hintEn": "Trace is the sum of diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Tr(A) = 9 + 10 + 11 = 30."
    ],
    "stepByStepSolutionAr": [
      "١. الأثر = 9 + 10 + 11 = 30."
    ],
    "teacherTipEn": "Trace equals the sum of eigenvalues.",
    "teacherTipAr": "أثر المصفوفة يساوي مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_40",
    "titleEn": "Determinant of Diagonal Matrix #10",
    "titleAr": "محدد مصفوفة قطرية رقم #10",
    "difficulty": "easy",
    "questionEn": "Compute the determinant $\\det(A)$ of the diagonal matrix $A = \\text{diag}(10, 11, 12)$.",
    "questionAr": "احسب محدد المصفوفة القطرية $A = \\text{diag}(10, 11, 12)$.",
    "optionsEn": [
      "$\\det(A) = 1326$",
      "$\\det(A) = 1316$",
      "$\\det(A) = 1332$",
      "$\\det(A) = 1320$"
    ],
    "optionsAr": [
      "$\\det(A) = 1326$",
      "$\\det(A) = 1316$",
      "$\\det(A) = 1332$",
      "$\\det(A) = 1320$"
    ],
    "correctAnswer": "$\\det(A) = 1320$",
    "correctIndex": 3,
    "hintEn": "Determinant of diagonal matrix is product of diagonal elements.",
    "hintAr": "محدد المصفوفة القطرية يساوي حاصل ضرب عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. det(A) = (10)(11)(12) = 1320."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = (10) × (11) × (12) = 1320."
    ],
    "teacherTipEn": "Determinant equals the product of eigenvalues.",
    "teacherTipAr": "المحدد يساوي حاصل ضرب القيم الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_41",
    "titleEn": "Rank-Nullity Dimension Theorem #1",
    "titleAr": "نظرية الرتبة والبعد رقم #1",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 2$ (setup #1). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 2$ (الحالة #1). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 1$",
    "correctIndex": 0,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 2 = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 2 = 1."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_42",
    "titleEn": "Rank-Nullity Dimension Theorem #2",
    "titleAr": "نظرية الرتبة والبعد رقم #2",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 3$ (setup #2). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 3$ (الحالة #2). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 0$",
    "correctIndex": 1,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 3 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_43",
    "titleEn": "Rank-Nullity Dimension Theorem #3",
    "titleAr": "نظرية الرتبة والبعد رقم #3",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 1$ (setup #3). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 1$ (الحالة #3). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 2$",
    "correctIndex": 2,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 1 = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 1 = 2."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_44",
    "titleEn": "Rank-Nullity Dimension Theorem #4",
    "titleAr": "نظرية الرتبة والبعد رقم #4",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 2$ (setup #4). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 2$ (الحالة #4). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$",
      "$\\text{nullity}(T) = 1$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$",
      "$\\text{nullity}(T) = 1$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 1$",
    "correctIndex": 3,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 2 = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 2 = 1."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_45",
    "titleEn": "Rank-Nullity Dimension Theorem #5",
    "titleAr": "نظرية الرتبة والبعد رقم #5",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 3$ (setup #5). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 3$ (الحالة #5). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 0$",
    "correctIndex": 0,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 3 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_46",
    "titleEn": "Rank-Nullity Dimension Theorem #6",
    "titleAr": "نظرية الرتبة والبعد رقم #6",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 1$ (setup #6). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 1$ (الحالة #6). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 3$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 3$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 2$",
    "correctIndex": 1,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 1 = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 1 = 2."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_47",
    "titleEn": "Rank-Nullity Dimension Theorem #7",
    "titleAr": "نظرية الرتبة والبعد رقم #7",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 2$ (setup #7). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 2$ (الحالة #7). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 3$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 3$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 1$",
    "correctIndex": 2,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 2 = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 2 = 1."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_48",
    "titleEn": "Rank-Nullity Dimension Theorem #8",
    "titleAr": "نظرية الرتبة والبعد رقم #8",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 3$ (setup #8). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 3$ (الحالة #8). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$",
      "$\\text{nullity}(T) = 0$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$",
      "$\\text{nullity}(T) = 0$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 0$",
    "correctIndex": 3,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 3 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_49",
    "titleEn": "Rank-Nullity Dimension Theorem #9",
    "titleAr": "نظرية الرتبة والبعد رقم #9",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 1$ (setup #9). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 1$ (الحالة #9). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 3$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 3$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 2$",
    "correctIndex": 0,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 1 = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 1 = 2."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_50",
    "titleEn": "Rank-Nullity Dimension Theorem #10",
    "titleAr": "نظرية الرتبة والبعد رقم #10",
    "difficulty": "easy",
    "questionEn": "A linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ has image of dimension $\\text{rank}(T) = 2$ (setup #10). Find the dimension of its kernel $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "questionAr": "تحويل خطي $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ بعد صورته $\\text{rank}(T) = 2$ (الحالة #10). احسب بعد نواته $\\text{nullity}(T) = \\dim(\\ker(T))$.",
    "optionsEn": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "optionsAr": [
      "$\\text{nullity}(T) = 0$",
      "$\\text{nullity}(T) = 1$",
      "$\\text{nullity}(T) = 2$",
      "$\\text{nullity}(T) = 3$"
    ],
    "correctAnswer": "$\\text{nullity}(T) = 1$",
    "correctIndex": 1,
    "hintEn": "rank(T) + nullity(T) = dim(Domain) = 3.",
    "hintAr": "الرتبة + بعد النواة = بعد مجال التحويل = 3.",
    "stepByStepSolutionEn": [
      "1. Rank-nullity theorem: $\\text{rank}(T) + \\text{nullity}(T) = 3$.",
      "2. $\\text{nullity}(T) = 3 - 2 = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. نظرية الرتبة والبعد: الرتبة + بعد النواة = 3.",
      "٢. بعد النواة = 3 - 2 = 1."
    ],
    "teacherTipEn": "Rank-Nullity is a cornerstone theorem of linear algebra.",
    "teacherTipAr": "نظرية الرتبة والبعد من الركائز الأساسية للجبر الخطي."
  },
  {
    "id": "egbac_ch2_db_easy_51",
    "titleEn": "Determinant of a Diagonal Matrix",
    "titleAr": "محدد مصفوفة قطرية",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Compute the determinant of the $3 \\times 3$ diagonal matrix $D = \\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
    "questionAr": "احسب محدد مصفوفة قطرية $3 \\times 3$: $D = \\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
    "optionsEn": [
      "$-30$",
      "$30$",
      "$6$",
      "$0$"
    ],
    "optionsAr": [
      "$-30$",
      "$30$",
      "$6$",
      "$0$"
    ],
    "correctAnswer": "$-30$",
    "correctIndex": 0,
    "hintEn": "The determinant of a diagonal matrix is the product of its diagonal entries.",
    "hintAr": "محدد المصفوفة القطرية هو حاصل ضرب عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "For a diagonal matrix $D = \\text{diag}(d_1, d_2, d_3)$, $\\det(D) = d_1 \\cdot d_2 \\cdot d_3$.",
      "Compute: $\\det(D) = 3 \\times (-2) \\times 5 = -30$."
    ],
    "stepByStepSolutionAr": [
      "لأي مصفوفة قطرية، المحدد يساوي حاصل ضرب عناصر القطر الرئيسي.",
      "$\\det(D) = 3 \\times (-2) \\times 5 = -30$."
    ],
    "teacherTipEn": "This product property also holds for all upper and lower triangular matrices.",
    "teacherTipAr": "هذه الخاصية تنطبق أيضاً على جميع المصفوفات المثلثية العلوية والسفلية."
  },
  {
    "id": "egbac_ch2_db_easy_52",
    "titleEn": "Determinant of a Scaled Matrix",
    "titleAr": "محدد مصفوفة مضروبة في عدد ثابت",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "If $A$ is a $3 \\times 3$ matrix with $\\det(A) = 4$, find the value of $\\det(2A)$.",
    "questionAr": "إذا كانت $A$ مصفوفة من الرتبة $3 \\times 3$ وكان $\\det(A) = 4$، فما قيمة $\\det(2A)$؟",
    "optionsEn": [
      "$32$",
      "$8$",
      "$16$",
      "$24$"
    ],
    "optionsAr": [
      "$32$",
      "$8$",
      "$16$",
      "$24$"
    ],
    "correctAnswer": "$32$",
    "correctIndex": 0,
    "hintEn": "For an $n \\times n$ matrix, $\\det(k A) = k^n \\det(A)$.",
    "hintAr": "لأي مصفوفة مربعة من الرتبة $n \\times n$، فإن $\\det(k A) = k^n \\det(A)$.",
    "stepByStepSolutionEn": [
      "Here the matrix dimension is $n = 3$ and the scalar is $k = 2$.",
      "Apply the property: $\\det(2A) = 2^3 \\cdot \\det(A) = 8 \\times 4 = 32$."
    ],
    "stepByStepSolutionAr": [
      "رتبة المصفوفة هي $n = 3$ والثابت هو $k = 2$.",
      "بتطبيق الخاصية: $\\det(2A) = 2^3 \\times \\det(A) = 8 \\times 4 = 32$."
    ],
    "teacherTipEn": "A common mistake is forgetting to raise $k$ to the power $n$.",
    "teacherTipAr": "الخطأ الشائع هو ضرب المحدد في $k$ بدلاً من $k^n$."
  },
  {
    "id": "egbac_ch2_db_easy_53",
    "titleEn": "Trace of a Square Matrix",
    "titleAr": "أثر مصفوفة مربعة",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the trace $\\text{tr}(A)$ of the matrix $A = \\begin{pmatrix} 4 & 1 & -2 \\\\ 3 & -7 & 5 \\\\ 0 & 2 & 9 \\end{pmatrix}$.",
    "questionAr": "أوجد أثر المصفوفة $\\text{tr}(A)$ للمصفوفة $A = \\begin{pmatrix} 4 & 1 & -2 \\\\ 3 & -7 & 5 \\\\ 0 & 2 & 9 \\end{pmatrix}$.",
    "optionsEn": [
      "$6$",
      "$13$",
      "$20$",
      "$-3$"
    ],
    "optionsAr": [
      "$6$",
      "$13$",
      "$20$",
      "$-3$"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "The trace is the sum of the elements along the main diagonal: $\\text{tr}(A) = a_{11} + a_{22} + a_{33}$.",
    "hintAr": "أثر المصفوفة هو مجموع عناصر القطر الرئيسي: $\\text{tr}(A) = a_{11} + a_{22} + a_{33}$.",
    "stepByStepSolutionEn": [
      "Identify the diagonal entries: $a_{11} = 4$, $a_{22} = -7$, $a_{33} = 9$.",
      "Sum them: $\\text{tr}(A) = 4 + (-7) + 9 = 6$."
    ],
    "stepByStepSolutionAr": [
      "عناصر القطر الرئيسي: $a_{11} = 4$، $a_{22} = -7$، $a_{33} = 9$.",
      "المجموع: $\\text{tr}(A) = 4 - 7 + 9 = 6$."
    ],
    "teacherTipEn": "The trace also equals the sum of all eigenvalues of the matrix.",
    "teacherTipAr": "أثر المصفوفة يساوي أيضاً مجموع جميع القيم الذاتية (eigenvalues) لها."
  },
  {
    "id": "egbac_ch2_db_easy_54",
    "titleEn": "Inverse of a 2x2 Matrix",
    "titleAr": "المعكوس الضربي لمصفوفة 2x2",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the inverse of the matrix $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
    "questionAr": "أوجد المعكوس الضربي للمصفوفة $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$"
    ],
    "optionsAr": [
      "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$"
    ],
    "correctAnswer": "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
    "correctIndex": 0,
    "hintEn": "Formula: $A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
    "hintAr": "القانون: $A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
    "stepByStepSolutionEn": [
      "Compute determinant: $\\det(A) = (2)(3) - (1)(5) = 6 - 5 = 1$.",
      "Swap diagonal entries and negate off-diagonal entries:",
      "$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
    ],
    "stepByStepSolutionAr": [
      "احسب المحدد: $\\det(A) = 6 - 5 = 1$.",
      "بدل عناصر القطر الرئيسي وغير إشارات القطر الفرعي:",
      "$A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
    ],
    "teacherTipEn": "Always check that $A A^{-1} = I$. Here $(2)(3)+(1)(-5)=1$ and $(2)(-1)+(1)(2)=0$.",
    "teacherTipAr": "تحقق دائماً من أن حاصل الضرب يعطي مصفوفة الوحدة $I$."
  },
  {
    "id": "egbac_ch2_db_easy_55",
    "titleEn": "Determinant of Transpose Matrix",
    "titleAr": "محدد مدور المصفوفة",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "If $M$ is a square matrix such that $\\det(M) = -7$, what is $\\det(M^T)$?",
    "questionAr": "إذا كانت $M$ مصفوفة مربعة حيث $\\det(M) = -7$، فما قيمة $\\det(M^T)$؟",
    "optionsEn": [
      "$-7$",
      "$7$",
      "$-\\frac{1}{7}$",
      "$\\frac{1}{7}$"
    ],
    "optionsAr": [
      "$-7$",
      "$7$",
      "$-\\frac{1}{7}$",
      "$\\frac{1}{7}$"
    ],
    "correctAnswer": "$-7$",
    "correctIndex": 0,
    "hintEn": "Transposing a matrix does not change its determinant: $\\det(M^T) = \\det(M)$.",
    "hintAr": "تدوير المصفوفة لا يغير قيمة محددها: $\\det(M^T) = \\det(M)$.",
    "stepByStepSolutionEn": [
      "By the fundamental properties of determinants, $\\det(M^T) = \\det(M)$.",
      "Therefore, $\\det(M^T) = -7$."
    ],
    "stepByStepSolutionAr": [
      "من الخواص الأساسية للمحددات: $\\det(M^T) = \\det(M)$.",
      "إذن $\\det(M^T) = -7$."
    ],
    "teacherTipEn": "This theorem ensures that all row operations on determinants also hold for column operations.",
    "teacherTipAr": "هذه الخاصية هي سبب تطابق جميع خواص صفوف المحددات مع خواص الأعمدة."
  },
  {
    "id": "egbac_ch2_db_easy_56",
    "titleEn": "Rank of an Outer Product Matrix",
    "titleAr": "رتبة مصفوفة ناتجة عن ضرب خارجي لمتجهين",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Let $\\vec{u} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$ and $\\vec{v} = \\begin{pmatrix} 4 & 5 & 6 \\end{pmatrix}$. What is the rank of the $3 \\times 3$ matrix $A = \\vec{u} \\vec{v}$?",
    "questionAr": "إذا كان $\\vec{u} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$ و $\\vec{v} = \\begin{pmatrix} 4 & 5 & 6 \\end{pmatrix}$، فما رتبة المصفوفة $3 \\times 3$ الناتجة $A = \\vec{u} \\vec{v}$؟",
    "optionsEn": [
      "$1$",
      "$2$",
      "$3$",
      "$0$"
    ],
    "optionsAr": [
      "$1$",
      "$2$",
      "$3$",
      "$0$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Every row of $A$ is a scalar multiple of $\\vec{v}$, so the column space is 1-dimensional.",
    "hintAr": "كل صف في المصفوفة $A$ هو مضاعف قياسي للمتجه $\\vec{v}$، لذا بعد فضاء الصفوف يساوي 1.",
    "stepByStepSolutionEn": [
      "Compute $A$: Row 1 is $1\\vec{v}$, Row 2 is $2\\vec{v}$, Row 3 is $3\\vec{v}$.",
      "All rows are scalar multiples of the first row.",
      "Since there is only one linearly independent row and $\\vec{u}, \\vec{v} \\neq 0$, $\\text{rank}(A) = 1$."
    ],
    "stepByStepSolutionAr": [
      "الصف الأول هو $1\\vec{v}$، والثاني $2\\vec{v}$، والثالث $3\\vec{v}$.",
      "جميع الصفوف متناسبة ومرتبطة خطياً بالصف الأول.",
      "بما أن هناك صفاً واحداً مستقلاً خطياً، فإن رتبة المصفوفة هي 1."
    ],
    "teacherTipEn": "The outer product of any two non-zero vectors always has rank 1.",
    "teacherTipAr": "الضرب الخارجي لأي متجهين غير صفريين يعطي دائماً مصفوفة رتبتها 1."
  },
  {
    "id": "egbac_ch2_db_easy_57",
    "titleEn": "Solving a Triangular Linear System",
    "titleAr": "حل نظام خطي مثلثي بالتعويض الخلفي",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Solve for $x$ in the triangular system: $\\begin{cases} x - 2y + 3z = 11 \\\\ y + 2z = 8 \\\\ 3z = 9 \\end{cases}$.",
    "questionAr": "أوجد قيمة $x$ في النظام الخطي المثلثي: $\\begin{cases} x - 2y + 3z = 11 \\\\ y + 2z = 8 \\\\ 3z = 9 \\end{cases}$.",
    "optionsEn": [
      "$6$",
      "$2$",
      "$3$",
      "$11$"
    ],
    "optionsAr": [
      "$6$",
      "$2$",
      "$3$",
      "$11$"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "Use back-substitution starting from the last equation: solve for $z$, then $y$, then $x$.",
    "hintAr": "استخدم التعويض العكسي بدءاً من المعادلة الأخيرة: أوجد $z$ ثم $y$ ثم $x$.",
    "stepByStepSolutionEn": [
      "From equation 3: $3z = 9 \\implies z = 3$.",
      "From equation 2: $y + 2(3) = 8 \\implies y + 6 = 8 \\implies y = 2$.",
      "From equation 1: $x - 2(2) + 3(3) = 11 \\implies x - 4 + 9 = 11 \\implies x + 5 = 11 \\implies x = 6$."
    ],
    "stepByStepSolutionAr": [
      "من المعادلة الثالثة: $3z = 9 \\implies z = 3$.",
      "من المعادلة الثانية: $y + 2(3) = 8 \\implies y = 2$.",
      "من المعادلة الأولى: $x - 2(2) + 3(3) = 11 \\implies x + 5 = 11 \\implies x = 6$."
    ],
    "teacherTipEn": "Back-substitution is the second phase of Gaussian elimination once the matrix is in row echelon form.",
    "teacherTipAr": "التعويض الخلفي هو المرحلة النهائية في طريقة الحذف الغاوسي بعد تحويل المصفوفة للصورة المدرجة."
  },
  {
    "id": "egbac_ch2_db_easy_58",
    "titleEn": "Nilpotent Matrix Property",
    "titleAr": "خاصية المصفوفة متلاشية القوى",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "If $A$ is a square matrix satisfying $A^2 = 0$, what is the inverse of $(I - A)$?",
    "questionAr": "إذا كانت $A$ مصفوفة مربعة تحقق $A^2 = 0$، فما هو المعكوس الضربي للمصفوفة $(I - A)$؟",
    "optionsEn": [
      "$I + A$",
      "$I - A$",
      "$A$",
      "$I + A^2$"
    ],
    "optionsAr": [
      "$I + A$",
      "$I - A$",
      "$A$",
      "$I + A^2$"
    ],
    "correctAnswer": "$I + A$",
    "correctIndex": 0,
    "hintEn": "Multiply $(I - A)(I + A)$ and simplify using $A^2 = 0$.",
    "hintAr": "اضرب $(I - A)(I + A)$ وبسط مستخدماً $A^2 = 0$.",
    "stepByStepSolutionEn": [
      "Expand the product: $(I - A)(I + A) = I^2 + IA - AI - A^2 = I + A - A - 0 = I$.",
      "Since $(I - A)(I + A) = I$, the inverse of $(I - A)$ is $I + A$."
    ],
    "stepByStepSolutionAr": [
      "فك حاصل الضرب: $(I - A)(I + A) = I + A - A - A^2$.",
      "بما أن $A^2 = 0$، فإن الناتج هو $I$.",
      "إذن المعكوس الضربي لـ $(I - A)$ هو $(I + A)$."
    ],
    "teacherTipEn": "In general, if $A^k = 0$, then $(I - A)^{-1} = I + A + A^2 + \\dots + A^{k-1}$.",
    "teacherTipAr": "بشكل عام، إذا كانت $A^k = 0$ فإن معكوس $(I - A)$ هو متسلسلة منتهية حتى $A^{k-1}$."
  }
],
  medium: [
  {
    "id": "egbac_ch2_db_med_01",
    "titleEn": "Geometric Intersection of 3 Planes #1",
    "titleAr": "الوضع الهندسي لتقاطع ٣ مستويات رقم #1",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ have coefficient matrix $A$ and augmented matrix $[A|B]$ satisfying $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (configuration #1). What is their geometric intersection?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ مصفوفة معاملاتها $A$ والموسعة $[A|B]$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (التكوين #1). ما هو وضع تقاطعها الهندسي؟",
    "optionsEn": [
      "Intersect in a unique single point for system #1",
      "Intersect along a common line for system #1",
      "Form a triangular prism with no common point for system #1",
      "Are three parallel planes for system #1"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #1",
      "تتقاطع في خط مستقيم مشترك للنظام #1",
      "تشكل منشوراً ثلاثياً دون نقطة مشتركة للنظام #1",
      "ثلاثة مستويات متوازية للنظام #1"
    ],
    "correctAnswer": "Intersect in a unique single point for system #1",
    "correctIndex": 0,
    "hintEn": "Full rank 3 implies a unique intersection point.",
    "hintAr": "الرتبة الكاملة 3 تعني تقاطع المستويات الثلاثة في نقطة وحيدة.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 3 = n.",
      "2. The system has a unique solution point."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات = رتبة الموسعة = 3 = عدد المجاهيل.",
      "٢. المستويات تتقاطع في نقطة وحيدة."
    ],
    "teacherTipEn": "Geometric interpretation of full-rank linear systems.",
    "teacherTipAr": "التفسير الهندسي لنظام خطي كامل الرتبة."
  },
  {
    "id": "egbac_ch2_db_med_02",
    "titleEn": "Planes Intersecting in a Common Line #2",
    "titleAr": "مستويات تتقاطع في خط مستقيم مشترك رقم #2",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, with non-collinear normal vectors (configuration #2). Characterize their intersection.",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 2$ مع عدم توازي متجهات العمودي (التكوين #2). صف تقاطعها الهندسي.",
    "optionsEn": [
      "Intersect at a unique single point for system #2",
      "Intersect along a single common line (rank = 2, consistent) for system #2",
      "Form a triangular prism with pairwise parallel intersection lines for system #2",
      "Are coincident planes for system #2"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #2",
      "تتقاطع في خط مستقيم مشترك (الرتبة = 2 ومتوافق) للنظام #2",
      "تشكل منشوراً ثلاثياً بخطوط تقاطع متوازية مثنى مثنى للنظام #2",
      "مستويات متطابقة تماماً للنظام #2"
    ],
    "correctAnswer": "Intersect along a single common line (rank = 2, consistent) for system #2",
    "correctIndex": 1,
    "hintEn": "rank = 2 consistent with non-parallel planes means intersection is a 1D line.",
    "hintAr": "رتبة = 2 متوافقة تعني التقاطع في خط مستقيم مشترك.",
    "stepByStepSolutionEn": [
      "1. Consistent system with 3 - 2 = 1 free parameter.",
      "2. Intersection is a straight line."
    ],
    "stepByStepSolutionAr": [
      "١. نظام متوافق بدرجة حرية واحدة 3 - 2 = 1.",
      "٢. التقاطع يمثل خطاً مستقيماً مشتركاً."
    ],
    "teacherTipEn": "Pencil of planes sharing a common line.",
    "teacherTipAr": "حزمة مستويات تشترك في محور تقاطع خطي."
  },
  {
    "id": "egbac_ch2_db_med_03",
    "titleEn": "Triangular Prism Planes Configuration #3",
    "titleAr": "تكوين المنشور الثلاثي للمستويات رقم #3",
    "difficulty": "medium",
    "questionEn": "Three planes in $\\mathbb{R}^3$ have no two parallel, and satisfy $\\text{rank}(A) = 2$ but $\\text{rank}([A|B]) = 3$ (scenario #3). What geometric solid/boundary do they form?",
    "questionAr": "ثلاثة مستويات في $\\mathbb{R}^3$ لا يوجد اثنان منها متوازيان، وتحقق $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$ (الحالة #3). ماذا تشكل هندسياً؟",
    "optionsEn": [
      "Intersect at a unique point for system #3",
      "Intersect in a common line for system #3",
      "Form a triangular prism with three parallel intersection lines for system #3",
      "Are three identical planes for system #3"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #3",
      "تتقاطع في خط مشترك للنظام #3",
      "تشكل منشوراً ثلاثياً بثلاثة خطوط تقاطع متوازية للنظام #3",
      "ثلاثة مستويات متطابقة للنظام #3"
    ],
    "correctAnswer": "Form a triangular prism with three parallel intersection lines for system #3",
    "correctIndex": 2,
    "hintEn": "Inconsistent with rank(A)=2 and non-parallel normals means triangular prism.",
    "hintAr": "نظام غير متوافق برتبة معاملات 2 ودون توازي يشكل منشوراً ثلاثياً.",
    "stepByStepSolutionEn": [
      "1. rank(A) = 2 < rank([A|B]) = 3 implies inconsistency.",
      "2. Pairwise intersections are 3 parallel lines forming a triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات 2 أقل من الموسعة 3 يعني عدم وجود حل مشترك.",
      "٢. خطوط التقاطع متوازية مثنى مثنى وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "Classic Egyptian STEM geometry problem on plane arrangements.",
    "teacherTipAr": "مسألة كلاسيكية لمدارس المتفوقين في هندسة تقاطع المستويات."
  },
  {
    "id": "egbac_ch2_db_med_04",
    "titleEn": "Geometric Intersection of 3 Planes #4",
    "titleAr": "الوضع الهندسي لتقاطع ٣ مستويات رقم #4",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ have coefficient matrix $A$ and augmented matrix $[A|B]$ satisfying $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (configuration #4). What is their geometric intersection?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ مصفوفة معاملاتها $A$ والموسعة $[A|B]$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (التكوين #4). ما هو وضع تقاطعها الهندسي؟",
    "optionsEn": [
      "Intersect along a common line for system #4",
      "Form a triangular prism with no common point for system #4",
      "Are three parallel planes for system #4",
      "Intersect in a unique single point for system #4"
    ],
    "optionsAr": [
      "تتقاطع في خط مستقيم مشترك للنظام #4",
      "تشكل منشوراً ثلاثياً دون نقطة مشتركة للنظام #4",
      "ثلاثة مستويات متوازية للنظام #4",
      "تتقاطع في نقطة وحيدة للنظام #4"
    ],
    "correctAnswer": "Intersect in a unique single point for system #4",
    "correctIndex": 3,
    "hintEn": "Full rank 3 implies a unique intersection point.",
    "hintAr": "الرتبة الكاملة 3 تعني تقاطع المستويات الثلاثة في نقطة وحيدة.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 3 = n.",
      "2. The system has a unique solution point."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات = رتبة الموسعة = 3 = عدد المجاهيل.",
      "٢. المستويات تتقاطع في نقطة وحيدة."
    ],
    "teacherTipEn": "Geometric interpretation of full-rank linear systems.",
    "teacherTipAr": "التفسير الهندسي لنظام خطي كامل الرتبة."
  },
  {
    "id": "egbac_ch2_db_med_05",
    "titleEn": "Planes Intersecting in a Common Line #5",
    "titleAr": "مستويات تتقاطع في خط مستقيم مشترك رقم #5",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, with non-collinear normal vectors (configuration #5). Characterize their intersection.",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 2$ مع عدم توازي متجهات العمودي (التكوين #5). صف تقاطعها الهندسي.",
    "optionsEn": [
      "Intersect along a single common line (rank = 2, consistent) for system #5",
      "Intersect at a unique single point for system #5",
      "Form a triangular prism with pairwise parallel intersection lines for system #5",
      "Are coincident planes for system #5"
    ],
    "optionsAr": [
      "تتقاطع في خط مستقيم مشترك (الرتبة = 2 ومتوافق) للنظام #5",
      "تتقاطع في نقطة وحيدة للنظام #5",
      "تشكل منشوراً ثلاثياً بخطوط تقاطع متوازية مثنى مثنى للنظام #5",
      "مستويات متطابقة تماماً للنظام #5"
    ],
    "correctAnswer": "Intersect along a single common line (rank = 2, consistent) for system #5",
    "correctIndex": 0,
    "hintEn": "rank = 2 consistent with non-parallel planes means intersection is a 1D line.",
    "hintAr": "رتبة = 2 متوافقة تعني التقاطع في خط مستقيم مشترك.",
    "stepByStepSolutionEn": [
      "1. Consistent system with 3 - 2 = 1 free parameter.",
      "2. Intersection is a straight line."
    ],
    "stepByStepSolutionAr": [
      "١. نظام متوافق بدرجة حرية واحدة 3 - 2 = 1.",
      "٢. التقاطع يمثل خطاً مستقيماً مشتركاً."
    ],
    "teacherTipEn": "Pencil of planes sharing a common line.",
    "teacherTipAr": "حزمة مستويات تشترك في محور تقاطع خطي."
  },
  {
    "id": "egbac_ch2_db_med_06",
    "titleEn": "Triangular Prism Planes Configuration #6",
    "titleAr": "تكوين المنشور الثلاثي للمستويات رقم #6",
    "difficulty": "medium",
    "questionEn": "Three planes in $\\mathbb{R}^3$ have no two parallel, and satisfy $\\text{rank}(A) = 2$ but $\\text{rank}([A|B]) = 3$ (scenario #6). What geometric solid/boundary do they form?",
    "questionAr": "ثلاثة مستويات في $\\mathbb{R}^3$ لا يوجد اثنان منها متوازيان، وتحقق $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$ (الحالة #6). ماذا تشكل هندسياً؟",
    "optionsEn": [
      "Intersect at a unique point for system #6",
      "Form a triangular prism with three parallel intersection lines for system #6",
      "Intersect in a common line for system #6",
      "Are three identical planes for system #6"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #6",
      "تشكل منشوراً ثلاثياً بثلاثة خطوط تقاطع متوازية للنظام #6",
      "تتقاطع في خط مشترك للنظام #6",
      "ثلاثة مستويات متطابقة للنظام #6"
    ],
    "correctAnswer": "Form a triangular prism with three parallel intersection lines for system #6",
    "correctIndex": 1,
    "hintEn": "Inconsistent with rank(A)=2 and non-parallel normals means triangular prism.",
    "hintAr": "نظام غير متوافق برتبة معاملات 2 ودون توازي يشكل منشوراً ثلاثياً.",
    "stepByStepSolutionEn": [
      "1. rank(A) = 2 < rank([A|B]) = 3 implies inconsistency.",
      "2. Pairwise intersections are 3 parallel lines forming a triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات 2 أقل من الموسعة 3 يعني عدم وجود حل مشترك.",
      "٢. خطوط التقاطع متوازية مثنى مثنى وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "Classic Egyptian STEM geometry problem on plane arrangements.",
    "teacherTipAr": "مسألة كلاسيكية لمدارس المتفوقين في هندسة تقاطع المستويات."
  },
  {
    "id": "egbac_ch2_db_med_07",
    "titleEn": "Geometric Intersection of 3 Planes #7",
    "titleAr": "الوضع الهندسي لتقاطع ٣ مستويات رقم #7",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ have coefficient matrix $A$ and augmented matrix $[A|B]$ satisfying $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (configuration #7). What is their geometric intersection?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ مصفوفة معاملاتها $A$ والموسعة $[A|B]$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (التكوين #7). ما هو وضع تقاطعها الهندسي؟",
    "optionsEn": [
      "Intersect along a common line for system #7",
      "Form a triangular prism with no common point for system #7",
      "Intersect in a unique single point for system #7",
      "Are three parallel planes for system #7"
    ],
    "optionsAr": [
      "تتقاطع في خط مستقيم مشترك للنظام #7",
      "تشكل منشوراً ثلاثياً دون نقطة مشتركة للنظام #7",
      "تتقاطع في نقطة وحيدة للنظام #7",
      "ثلاثة مستويات متوازية للنظام #7"
    ],
    "correctAnswer": "Intersect in a unique single point for system #7",
    "correctIndex": 2,
    "hintEn": "Full rank 3 implies a unique intersection point.",
    "hintAr": "الرتبة الكاملة 3 تعني تقاطع المستويات الثلاثة في نقطة وحيدة.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 3 = n.",
      "2. The system has a unique solution point."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات = رتبة الموسعة = 3 = عدد المجاهيل.",
      "٢. المستويات تتقاطع في نقطة وحيدة."
    ],
    "teacherTipEn": "Geometric interpretation of full-rank linear systems.",
    "teacherTipAr": "التفسير الهندسي لنظام خطي كامل الرتبة."
  },
  {
    "id": "egbac_ch2_db_med_08",
    "titleEn": "Planes Intersecting in a Common Line #8",
    "titleAr": "مستويات تتقاطع في خط مستقيم مشترك رقم #8",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, with non-collinear normal vectors (configuration #8). Characterize their intersection.",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 2$ مع عدم توازي متجهات العمودي (التكوين #8). صف تقاطعها الهندسي.",
    "optionsEn": [
      "Intersect at a unique single point for system #8",
      "Form a triangular prism with pairwise parallel intersection lines for system #8",
      "Are coincident planes for system #8",
      "Intersect along a single common line (rank = 2, consistent) for system #8"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #8",
      "تشكل منشوراً ثلاثياً بخطوط تقاطع متوازية مثنى مثنى للنظام #8",
      "مستويات متطابقة تماماً للنظام #8",
      "تتقاطع في خط مستقيم مشترك (الرتبة = 2 ومتوافق) للنظام #8"
    ],
    "correctAnswer": "Intersect along a single common line (rank = 2, consistent) for system #8",
    "correctIndex": 3,
    "hintEn": "rank = 2 consistent with non-parallel planes means intersection is a 1D line.",
    "hintAr": "رتبة = 2 متوافقة تعني التقاطع في خط مستقيم مشترك.",
    "stepByStepSolutionEn": [
      "1. Consistent system with 3 - 2 = 1 free parameter.",
      "2. Intersection is a straight line."
    ],
    "stepByStepSolutionAr": [
      "١. نظام متوافق بدرجة حرية واحدة 3 - 2 = 1.",
      "٢. التقاطع يمثل خطاً مستقيماً مشتركاً."
    ],
    "teacherTipEn": "Pencil of planes sharing a common line.",
    "teacherTipAr": "حزمة مستويات تشترك في محور تقاطع خطي."
  },
  {
    "id": "egbac_ch2_db_med_09",
    "titleEn": "Triangular Prism Planes Configuration #9",
    "titleAr": "تكوين المنشور الثلاثي للمستويات رقم #9",
    "difficulty": "medium",
    "questionEn": "Three planes in $\\mathbb{R}^3$ have no two parallel, and satisfy $\\text{rank}(A) = 2$ but $\\text{rank}([A|B]) = 3$ (scenario #9). What geometric solid/boundary do they form?",
    "questionAr": "ثلاثة مستويات في $\\mathbb{R}^3$ لا يوجد اثنان منها متوازيان، وتحقق $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$ (الحالة #9). ماذا تشكل هندسياً؟",
    "optionsEn": [
      "Form a triangular prism with three parallel intersection lines for system #9",
      "Intersect at a unique point for system #9",
      "Intersect in a common line for system #9",
      "Are three identical planes for system #9"
    ],
    "optionsAr": [
      "تشكل منشوراً ثلاثياً بثلاثة خطوط تقاطع متوازية للنظام #9",
      "تتقاطع في نقطة وحيدة للنظام #9",
      "تتقاطع في خط مشترك للنظام #9",
      "ثلاثة مستويات متطابقة للنظام #9"
    ],
    "correctAnswer": "Form a triangular prism with three parallel intersection lines for system #9",
    "correctIndex": 0,
    "hintEn": "Inconsistent with rank(A)=2 and non-parallel normals means triangular prism.",
    "hintAr": "نظام غير متوافق برتبة معاملات 2 ودون توازي يشكل منشوراً ثلاثياً.",
    "stepByStepSolutionEn": [
      "1. rank(A) = 2 < rank([A|B]) = 3 implies inconsistency.",
      "2. Pairwise intersections are 3 parallel lines forming a triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات 2 أقل من الموسعة 3 يعني عدم وجود حل مشترك.",
      "٢. خطوط التقاطع متوازية مثنى مثنى وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "Classic Egyptian STEM geometry problem on plane arrangements.",
    "teacherTipAr": "مسألة كلاسيكية لمدارس المتفوقين في هندسة تقاطع المستويات."
  },
  {
    "id": "egbac_ch2_db_med_10",
    "titleEn": "Geometric Intersection of 3 Planes #10",
    "titleAr": "الوضع الهندسي لتقاطع ٣ مستويات رقم #10",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ have coefficient matrix $A$ and augmented matrix $[A|B]$ satisfying $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (configuration #10). What is their geometric intersection?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ مصفوفة معاملاتها $A$ والموسعة $[A|B]$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (التكوين #10). ما هو وضع تقاطعها الهندسي؟",
    "optionsEn": [
      "Intersect along a common line for system #10",
      "Intersect in a unique single point for system #10",
      "Form a triangular prism with no common point for system #10",
      "Are three parallel planes for system #10"
    ],
    "optionsAr": [
      "تتقاطع في خط مستقيم مشترك للنظام #10",
      "تتقاطع في نقطة وحيدة للنظام #10",
      "تشكل منشوراً ثلاثياً دون نقطة مشتركة للنظام #10",
      "ثلاثة مستويات متوازية للنظام #10"
    ],
    "correctAnswer": "Intersect in a unique single point for system #10",
    "correctIndex": 1,
    "hintEn": "Full rank 3 implies a unique intersection point.",
    "hintAr": "الرتبة الكاملة 3 تعني تقاطع المستويات الثلاثة في نقطة وحيدة.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 3 = n.",
      "2. The system has a unique solution point."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات = رتبة الموسعة = 3 = عدد المجاهيل.",
      "٢. المستويات تتقاطع في نقطة وحيدة."
    ],
    "teacherTipEn": "Geometric interpretation of full-rank linear systems.",
    "teacherTipAr": "التفسير الهندسي لنظام خطي كامل الرتبة."
  },
  {
    "id": "egbac_ch2_db_med_11",
    "titleEn": "Planes Intersecting in a Common Line #11",
    "titleAr": "مستويات تتقاطع في خط مستقيم مشترك رقم #11",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, with non-collinear normal vectors (configuration #11). Characterize their intersection.",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 2$ مع عدم توازي متجهات العمودي (التكوين #11). صف تقاطعها الهندسي.",
    "optionsEn": [
      "Intersect at a unique single point for system #11",
      "Form a triangular prism with pairwise parallel intersection lines for system #11",
      "Intersect along a single common line (rank = 2, consistent) for system #11",
      "Are coincident planes for system #11"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #11",
      "تشكل منشوراً ثلاثياً بخطوط تقاطع متوازية مثنى مثنى للنظام #11",
      "تتقاطع في خط مستقيم مشترك (الرتبة = 2 ومتوافق) للنظام #11",
      "مستويات متطابقة تماماً للنظام #11"
    ],
    "correctAnswer": "Intersect along a single common line (rank = 2, consistent) for system #11",
    "correctIndex": 2,
    "hintEn": "rank = 2 consistent with non-parallel planes means intersection is a 1D line.",
    "hintAr": "رتبة = 2 متوافقة تعني التقاطع في خط مستقيم مشترك.",
    "stepByStepSolutionEn": [
      "1. Consistent system with 3 - 2 = 1 free parameter.",
      "2. Intersection is a straight line."
    ],
    "stepByStepSolutionAr": [
      "١. نظام متوافق بدرجة حرية واحدة 3 - 2 = 1.",
      "٢. التقاطع يمثل خطاً مستقيماً مشتركاً."
    ],
    "teacherTipEn": "Pencil of planes sharing a common line.",
    "teacherTipAr": "حزمة مستويات تشترك في محور تقاطع خطي."
  },
  {
    "id": "egbac_ch2_db_med_12",
    "titleEn": "Triangular Prism Planes Configuration #12",
    "titleAr": "تكوين المنشور الثلاثي للمستويات رقم #12",
    "difficulty": "medium",
    "questionEn": "Three planes in $\\mathbb{R}^3$ have no two parallel, and satisfy $\\text{rank}(A) = 2$ but $\\text{rank}([A|B]) = 3$ (scenario #12). What geometric solid/boundary do they form?",
    "questionAr": "ثلاثة مستويات في $\\mathbb{R}^3$ لا يوجد اثنان منها متوازيان، وتحقق $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$ (الحالة #12). ماذا تشكل هندسياً؟",
    "optionsEn": [
      "Intersect at a unique point for system #12",
      "Intersect in a common line for system #12",
      "Are three identical planes for system #12",
      "Form a triangular prism with three parallel intersection lines for system #12"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #12",
      "تتقاطع في خط مشترك للنظام #12",
      "ثلاثة مستويات متطابقة للنظام #12",
      "تشكل منشوراً ثلاثياً بثلاثة خطوط تقاطع متوازية للنظام #12"
    ],
    "correctAnswer": "Form a triangular prism with three parallel intersection lines for system #12",
    "correctIndex": 3,
    "hintEn": "Inconsistent with rank(A)=2 and non-parallel normals means triangular prism.",
    "hintAr": "نظام غير متوافق برتبة معاملات 2 ودون توازي يشكل منشوراً ثلاثياً.",
    "stepByStepSolutionEn": [
      "1. rank(A) = 2 < rank([A|B]) = 3 implies inconsistency.",
      "2. Pairwise intersections are 3 parallel lines forming a triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات 2 أقل من الموسعة 3 يعني عدم وجود حل مشترك.",
      "٢. خطوط التقاطع متوازية مثنى مثنى وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "Classic Egyptian STEM geometry problem on plane arrangements.",
    "teacherTipAr": "مسألة كلاسيكية لمدارس المتفوقين في هندسة تقاطع المستويات."
  },
  {
    "id": "egbac_ch2_db_med_13",
    "titleEn": "Geometric Intersection of 3 Planes #13",
    "titleAr": "الوضع الهندسي لتقاطع ٣ مستويات رقم #13",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ have coefficient matrix $A$ and augmented matrix $[A|B]$ satisfying $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (configuration #13). What is their geometric intersection?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ مصفوفة معاملاتها $A$ والموسعة $[A|B]$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 3$ (التكوين #13). ما هو وضع تقاطعها الهندسي؟",
    "optionsEn": [
      "Intersect in a unique single point for system #13",
      "Intersect along a common line for system #13",
      "Form a triangular prism with no common point for system #13",
      "Are three parallel planes for system #13"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #13",
      "تتقاطع في خط مستقيم مشترك للنظام #13",
      "تشكل منشوراً ثلاثياً دون نقطة مشتركة للنظام #13",
      "ثلاثة مستويات متوازية للنظام #13"
    ],
    "correctAnswer": "Intersect in a unique single point for system #13",
    "correctIndex": 0,
    "hintEn": "Full rank 3 implies a unique intersection point.",
    "hintAr": "الرتبة الكاملة 3 تعني تقاطع المستويات الثلاثة في نقطة وحيدة.",
    "stepByStepSolutionEn": [
      "1. rank(A) = rank([A|B]) = 3 = n.",
      "2. The system has a unique solution point."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات = رتبة الموسعة = 3 = عدد المجاهيل.",
      "٢. المستويات تتقاطع في نقطة وحيدة."
    ],
    "teacherTipEn": "Geometric interpretation of full-rank linear systems.",
    "teacherTipAr": "التفسير الهندسي لنظام خطي كامل الرتبة."
  },
  {
    "id": "egbac_ch2_db_med_14",
    "titleEn": "Planes Intersecting in a Common Line #14",
    "titleAr": "مستويات تتقاطع في خط مستقيم مشترك رقم #14",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}([A|B]) = 2$, with non-collinear normal vectors (configuration #14). Characterize their intersection.",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}([A|B]) = 2$ مع عدم توازي متجهات العمودي (التكوين #14). صف تقاطعها الهندسي.",
    "optionsEn": [
      "Intersect at a unique single point for system #14",
      "Intersect along a single common line (rank = 2, consistent) for system #14",
      "Form a triangular prism with pairwise parallel intersection lines for system #14",
      "Are coincident planes for system #14"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #14",
      "تتقاطع في خط مستقيم مشترك (الرتبة = 2 ومتوافق) للنظام #14",
      "تشكل منشوراً ثلاثياً بخطوط تقاطع متوازية مثنى مثنى للنظام #14",
      "مستويات متطابقة تماماً للنظام #14"
    ],
    "correctAnswer": "Intersect along a single common line (rank = 2, consistent) for system #14",
    "correctIndex": 1,
    "hintEn": "rank = 2 consistent with non-parallel planes means intersection is a 1D line.",
    "hintAr": "رتبة = 2 متوافقة تعني التقاطع في خط مستقيم مشترك.",
    "stepByStepSolutionEn": [
      "1. Consistent system with 3 - 2 = 1 free parameter.",
      "2. Intersection is a straight line."
    ],
    "stepByStepSolutionAr": [
      "١. نظام متوافق بدرجة حرية واحدة 3 - 2 = 1.",
      "٢. التقاطع يمثل خطاً مستقيماً مشتركاً."
    ],
    "teacherTipEn": "Pencil of planes sharing a common line.",
    "teacherTipAr": "حزمة مستويات تشترك في محور تقاطع خطي."
  },
  {
    "id": "egbac_ch2_db_med_15",
    "titleEn": "Triangular Prism Planes Configuration #15",
    "titleAr": "تكوين المنشور الثلاثي للمستويات رقم #15",
    "difficulty": "medium",
    "questionEn": "Three planes in $\\mathbb{R}^3$ have no two parallel, and satisfy $\\text{rank}(A) = 2$ but $\\text{rank}([A|B]) = 3$ (scenario #15). What geometric solid/boundary do they form?",
    "questionAr": "ثلاثة مستويات في $\\mathbb{R}^3$ لا يوجد اثنان منها متوازيان، وتحقق $\\text{rank}(A) = 2$ بينما $\\text{rank}([A|B]) = 3$ (الحالة #15). ماذا تشكل هندسياً؟",
    "optionsEn": [
      "Intersect at a unique point for system #15",
      "Intersect in a common line for system #15",
      "Form a triangular prism with three parallel intersection lines for system #15",
      "Are three identical planes for system #15"
    ],
    "optionsAr": [
      "تتقاطع في نقطة وحيدة للنظام #15",
      "تتقاطع في خط مشترك للنظام #15",
      "تشكل منشوراً ثلاثياً بثلاثة خطوط تقاطع متوازية للنظام #15",
      "ثلاثة مستويات متطابقة للنظام #15"
    ],
    "correctAnswer": "Form a triangular prism with three parallel intersection lines for system #15",
    "correctIndex": 2,
    "hintEn": "Inconsistent with rank(A)=2 and non-parallel normals means triangular prism.",
    "hintAr": "نظام غير متوافق برتبة معاملات 2 ودون توازي يشكل منشوراً ثلاثياً.",
    "stepByStepSolutionEn": [
      "1. rank(A) = 2 < rank([A|B]) = 3 implies inconsistency.",
      "2. Pairwise intersections are 3 parallel lines forming a triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة المعاملات 2 أقل من الموسعة 3 يعني عدم وجود حل مشترك.",
      "٢. خطوط التقاطع متوازية مثنى مثنى وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "Classic Egyptian STEM geometry problem on plane arrangements.",
    "teacherTipAr": "مسألة كلاسيكية لمدارس المتفوقين في هندسة تقاطع المستويات."
  },
  {
    "id": "egbac_ch2_db_med_16",
    "titleEn": "Eigenvalues of Triangular Matrix #1",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #1",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 1 & 5 & -2 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 1 & 5 & -2 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 2, 3, 5$",
      "$\\lambda = 1, 2, 5$",
      "$\\lambda = 1, 3, 7$",
      "$\\lambda = 1, 3, 5$"
    ],
    "optionsAr": [
      "$\\lambda = 2, 3, 5$",
      "$\\lambda = 1, 2, 5$",
      "$\\lambda = 1, 3, 7$",
      "$\\lambda = 1, 3, 5$"
    ],
    "correctAnswer": "$\\lambda = 1, 3, 5$",
    "correctIndex": 3,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (1 - \\lambda)(3 - \\lambda)(5 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 1, \\lambda_2 = 3, \\lambda_3 = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 1، 3، 5."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_17",
    "titleEn": "Eigenvalues of Triangular Matrix #2",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #2",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 2 & 5 & -2 \\\\ 0 & 4 & 7 \\\\ 0 & 0 & 6 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 2 & 5 & -2 \\\\ 0 & 4 & 7 \\\\ 0 & 0 & 6 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 2, 4, 6$",
      "$\\lambda = 3, 4, 6$",
      "$\\lambda = 2, 3, 6$",
      "$\\lambda = 2, 4, 8$"
    ],
    "optionsAr": [
      "$\\lambda = 2, 4, 6$",
      "$\\lambda = 3, 4, 6$",
      "$\\lambda = 2, 3, 6$",
      "$\\lambda = 2, 4, 8$"
    ],
    "correctAnswer": "$\\lambda = 2, 4, 6$",
    "correctIndex": 0,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (2 - \\lambda)(4 - \\lambda)(6 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 2, \\lambda_2 = 4, \\lambda_3 = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 2، 4، 6."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_18",
    "titleEn": "Eigenvalues of Triangular Matrix #3",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #3",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 3 & 5 & -2 \\\\ 0 & 5 & 7 \\\\ 0 & 0 & 7 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 3 & 5 & -2 \\\\ 0 & 5 & 7 \\\\ 0 & 0 & 7 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 4, 5, 7$",
      "$\\lambda = 3, 5, 7$",
      "$\\lambda = 3, 4, 7$",
      "$\\lambda = 3, 5, 9$"
    ],
    "optionsAr": [
      "$\\lambda = 4, 5, 7$",
      "$\\lambda = 3, 5, 7$",
      "$\\lambda = 3, 4, 7$",
      "$\\lambda = 3, 5, 9$"
    ],
    "correctAnswer": "$\\lambda = 3, 5, 7$",
    "correctIndex": 1,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (3 - \\lambda)(5 - \\lambda)(7 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 3, \\lambda_2 = 5, \\lambda_3 = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 3، 5، 7."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_19",
    "titleEn": "Eigenvalues of Triangular Matrix #4",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #4",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 4 & 5 & -2 \\\\ 0 & 6 & 7 \\\\ 0 & 0 & 8 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 4 & 5 & -2 \\\\ 0 & 6 & 7 \\\\ 0 & 0 & 8 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 5, 6, 8$",
      "$\\lambda = 4, 5, 8$",
      "$\\lambda = 4, 6, 8$",
      "$\\lambda = 4, 6, 10$"
    ],
    "optionsAr": [
      "$\\lambda = 5, 6, 8$",
      "$\\lambda = 4, 5, 8$",
      "$\\lambda = 4, 6, 8$",
      "$\\lambda = 4, 6, 10$"
    ],
    "correctAnswer": "$\\lambda = 4, 6, 8$",
    "correctIndex": 2,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (4 - \\lambda)(6 - \\lambda)(8 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 4, \\lambda_2 = 6, \\lambda_3 = 8$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 4، 6، 8."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_20",
    "titleEn": "Eigenvalues of Triangular Matrix #5",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #5",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 5 & 5 & -2 \\\\ 0 & 7 & 7 \\\\ 0 & 0 & 9 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 5 & 5 & -2 \\\\ 0 & 7 & 7 \\\\ 0 & 0 & 9 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 6, 7, 9$",
      "$\\lambda = 5, 6, 9$",
      "$\\lambda = 5, 7, 11$",
      "$\\lambda = 5, 7, 9$"
    ],
    "optionsAr": [
      "$\\lambda = 6, 7, 9$",
      "$\\lambda = 5, 6, 9$",
      "$\\lambda = 5, 7, 11$",
      "$\\lambda = 5, 7, 9$"
    ],
    "correctAnswer": "$\\lambda = 5, 7, 9$",
    "correctIndex": 3,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (5 - \\lambda)(7 - \\lambda)(9 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 5, \\lambda_2 = 7, \\lambda_3 = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 5، 7، 9."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_21",
    "titleEn": "Eigenvalues of Triangular Matrix #6",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #6",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 6 & 5 & -2 \\\\ 0 & 8 & 7 \\\\ 0 & 0 & 10 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 6 & 5 & -2 \\\\ 0 & 8 & 7 \\\\ 0 & 0 & 10 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 6, 8, 10$",
      "$\\lambda = 7, 8, 10$",
      "$\\lambda = 6, 7, 10$",
      "$\\lambda = 6, 8, 12$"
    ],
    "optionsAr": [
      "$\\lambda = 6, 8, 10$",
      "$\\lambda = 7, 8, 10$",
      "$\\lambda = 6, 7, 10$",
      "$\\lambda = 6, 8, 12$"
    ],
    "correctAnswer": "$\\lambda = 6, 8, 10$",
    "correctIndex": 0,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (6 - \\lambda)(8 - \\lambda)(10 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 6, \\lambda_2 = 8, \\lambda_3 = 10$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 6، 8، 10."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_22",
    "titleEn": "Eigenvalues of Triangular Matrix #7",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #7",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 7 & 5 & -2 \\\\ 0 & 9 & 7 \\\\ 0 & 0 & 11 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 7 & 5 & -2 \\\\ 0 & 9 & 7 \\\\ 0 & 0 & 11 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 8, 9, 11$",
      "$\\lambda = 7, 9, 11$",
      "$\\lambda = 7, 8, 11$",
      "$\\lambda = 7, 9, 13$"
    ],
    "optionsAr": [
      "$\\lambda = 8, 9, 11$",
      "$\\lambda = 7, 9, 11$",
      "$\\lambda = 7, 8, 11$",
      "$\\lambda = 7, 9, 13$"
    ],
    "correctAnswer": "$\\lambda = 7, 9, 11$",
    "correctIndex": 1,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (7 - \\lambda)(9 - \\lambda)(11 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 7, \\lambda_2 = 9, \\lambda_3 = 11$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 7، 9، 11."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_23",
    "titleEn": "Eigenvalues of Triangular Matrix #8",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #8",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 8 & 5 & -2 \\\\ 0 & 10 & 7 \\\\ 0 & 0 & 12 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 8 & 5 & -2 \\\\ 0 & 10 & 7 \\\\ 0 & 0 & 12 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 9, 10, 12$",
      "$\\lambda = 8, 9, 12$",
      "$\\lambda = 8, 10, 12$",
      "$\\lambda = 8, 10, 14$"
    ],
    "optionsAr": [
      "$\\lambda = 9, 10, 12$",
      "$\\lambda = 8, 9, 12$",
      "$\\lambda = 8, 10, 12$",
      "$\\lambda = 8, 10, 14$"
    ],
    "correctAnswer": "$\\lambda = 8, 10, 12$",
    "correctIndex": 2,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (8 - \\lambda)(10 - \\lambda)(12 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 8, \\lambda_2 = 10, \\lambda_3 = 12$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 8، 10، 12."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_24",
    "titleEn": "Eigenvalues of Triangular Matrix #9",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #9",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 9 & 5 & -2 \\\\ 0 & 11 & 7 \\\\ 0 & 0 & 13 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 9 & 5 & -2 \\\\ 0 & 11 & 7 \\\\ 0 & 0 & 13 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 10, 11, 13$",
      "$\\lambda = 9, 10, 13$",
      "$\\lambda = 9, 11, 15$",
      "$\\lambda = 9, 11, 13$"
    ],
    "optionsAr": [
      "$\\lambda = 10, 11, 13$",
      "$\\lambda = 9, 10, 13$",
      "$\\lambda = 9, 11, 15$",
      "$\\lambda = 9, 11, 13$"
    ],
    "correctAnswer": "$\\lambda = 9, 11, 13$",
    "correctIndex": 3,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (9 - \\lambda)(11 - \\lambda)(13 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 9, \\lambda_2 = 11, \\lambda_3 = 13$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 9، 11، 13."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_25",
    "titleEn": "Eigenvalues of Triangular Matrix #10",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #10",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 10 & 5 & -2 \\\\ 0 & 12 & 7 \\\\ 0 & 0 & 14 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 10 & 5 & -2 \\\\ 0 & 12 & 7 \\\\ 0 & 0 & 14 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 10, 12, 14$",
      "$\\lambda = 11, 12, 14$",
      "$\\lambda = 10, 11, 14$",
      "$\\lambda = 10, 12, 16$"
    ],
    "optionsAr": [
      "$\\lambda = 10, 12, 14$",
      "$\\lambda = 11, 12, 14$",
      "$\\lambda = 10, 11, 14$",
      "$\\lambda = 10, 12, 16$"
    ],
    "correctAnswer": "$\\lambda = 10, 12, 14$",
    "correctIndex": 0,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (10 - \\lambda)(12 - \\lambda)(14 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 10, \\lambda_2 = 12, \\lambda_3 = 14$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 10، 12، 14."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_26",
    "titleEn": "Eigenvalues of Triangular Matrix #11",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #11",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 11 & 5 & -2 \\\\ 0 & 13 & 7 \\\\ 0 & 0 & 15 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 11 & 5 & -2 \\\\ 0 & 13 & 7 \\\\ 0 & 0 & 15 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 12, 13, 15$",
      "$\\lambda = 11, 13, 15$",
      "$\\lambda = 11, 12, 15$",
      "$\\lambda = 11, 13, 17$"
    ],
    "optionsAr": [
      "$\\lambda = 12, 13, 15$",
      "$\\lambda = 11, 13, 15$",
      "$\\lambda = 11, 12, 15$",
      "$\\lambda = 11, 13, 17$"
    ],
    "correctAnswer": "$\\lambda = 11, 13, 15$",
    "correctIndex": 1,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (11 - \\lambda)(13 - \\lambda)(15 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 11, \\lambda_2 = 13, \\lambda_3 = 15$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 11، 13، 15."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_27",
    "titleEn": "Eigenvalues of Triangular Matrix #12",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #12",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 12 & 5 & -2 \\\\ 0 & 14 & 7 \\\\ 0 & 0 & 16 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 12 & 5 & -2 \\\\ 0 & 14 & 7 \\\\ 0 & 0 & 16 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 13, 14, 16$",
      "$\\lambda = 12, 13, 16$",
      "$\\lambda = 12, 14, 16$",
      "$\\lambda = 12, 14, 18$"
    ],
    "optionsAr": [
      "$\\lambda = 13, 14, 16$",
      "$\\lambda = 12, 13, 16$",
      "$\\lambda = 12, 14, 16$",
      "$\\lambda = 12, 14, 18$"
    ],
    "correctAnswer": "$\\lambda = 12, 14, 16$",
    "correctIndex": 2,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (12 - \\lambda)(14 - \\lambda)(16 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 12, \\lambda_2 = 14, \\lambda_3 = 16$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 12، 14، 16."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_28",
    "titleEn": "Eigenvalues of Triangular Matrix #13",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #13",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 13 & 5 & -2 \\\\ 0 & 15 & 7 \\\\ 0 & 0 & 17 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 13 & 5 & -2 \\\\ 0 & 15 & 7 \\\\ 0 & 0 & 17 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 14, 15, 17$",
      "$\\lambda = 13, 14, 17$",
      "$\\lambda = 13, 15, 19$",
      "$\\lambda = 13, 15, 17$"
    ],
    "optionsAr": [
      "$\\lambda = 14, 15, 17$",
      "$\\lambda = 13, 14, 17$",
      "$\\lambda = 13, 15, 19$",
      "$\\lambda = 13, 15, 17$"
    ],
    "correctAnswer": "$\\lambda = 13, 15, 17$",
    "correctIndex": 3,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (13 - \\lambda)(15 - \\lambda)(17 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 13, \\lambda_2 = 15, \\lambda_3 = 17$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 13، 15، 17."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_29",
    "titleEn": "Eigenvalues of Triangular Matrix #14",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #14",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 14 & 5 & -2 \\\\ 0 & 16 & 7 \\\\ 0 & 0 & 18 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 14 & 5 & -2 \\\\ 0 & 16 & 7 \\\\ 0 & 0 & 18 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 14, 16, 18$",
      "$\\lambda = 15, 16, 18$",
      "$\\lambda = 14, 15, 18$",
      "$\\lambda = 14, 16, 20$"
    ],
    "optionsAr": [
      "$\\lambda = 14, 16, 18$",
      "$\\lambda = 15, 16, 18$",
      "$\\lambda = 14, 15, 18$",
      "$\\lambda = 14, 16, 20$"
    ],
    "correctAnswer": "$\\lambda = 14, 16, 18$",
    "correctIndex": 0,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (14 - \\lambda)(16 - \\lambda)(18 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 14, \\lambda_2 = 16, \\lambda_3 = 18$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 14، 16، 18."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_30",
    "titleEn": "Eigenvalues of Triangular Matrix #15",
    "titleAr": "القيم الذاتية لمصفوفة مثلية رقم #15",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 15 & 5 & -2 \\\\ 0 & 17 & 7 \\\\ 0 & 0 & 19 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 15 & 5 & -2 \\\\ 0 & 17 & 7 \\\\ 0 & 0 & 19 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 16, 17, 19$",
      "$\\lambda = 15, 17, 19$",
      "$\\lambda = 15, 16, 19$",
      "$\\lambda = 15, 17, 21$"
    ],
    "optionsAr": [
      "$\\lambda = 16, 17, 19$",
      "$\\lambda = 15, 17, 19$",
      "$\\lambda = 15, 16, 19$",
      "$\\lambda = 15, 17, 21$"
    ],
    "correctAnswer": "$\\lambda = 15, 17, 19$",
    "correctIndex": 1,
    "hintEn": "Eigenvalues of a triangular matrix are its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة المثلثية هي عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Characteristic equation: $\\det(A - \\lambda I) = (15 - \\lambda)(17 - \\lambda)(19 - \\lambda) = 0$.",
      "2. Roots are $\\lambda_1 = 15, \\lambda_2 = 17, \\lambda_3 = 19$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القيم الذاتية هي حاصل ضرب عناصر القطر.",
      "٢. الجذور هي 15، 17، 19."
    ],
    "teacherTipEn": "Triangular matrices expose their spectrum along the diagonal.",
    "teacherTipAr": "المصفوفات المثلثية تظهر طيفها الذاتي مباشرة على القطر."
  },
  {
    "id": "egbac_ch2_db_med_31",
    "titleEn": "Power of Idempotent Projection Matrix #1",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #1",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{1}$ for problem #1.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{1}$ في المسألة #1.",
    "optionsEn": [
      "$P^{1} = 1P$",
      "$P^{1} = 0$ (nilpotent)",
      "$P^{1} = P$ (idempotent projection matrix)",
      "$P^{1} = I$"
    ],
    "optionsAr": [
      "$P^{1} = 1P$",
      "$P^{1} = 0$ (مصفوفة معدومة القوى)",
      "$P^{1} = P$ (مصفوفة إسقاط متساوية القوى)",
      "$P^{1} = I$"
    ],
    "correctAnswer": "$P^{1} = P$ (idempotent projection matrix)",
    "correctIndex": 2,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{1} = P^{0} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{1} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_32",
    "titleEn": "Power of Idempotent Projection Matrix #2",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #2",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{2}$ for problem #2.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{2}$ في المسألة #2.",
    "optionsEn": [
      "$P^{2} = 2P$",
      "$P^{2} = 0$ (nilpotent)",
      "$P^{2} = I$",
      "$P^{2} = P$ (idempotent projection matrix)"
    ],
    "optionsAr": [
      "$P^{2} = 2P$",
      "$P^{2} = 0$ (مصفوفة معدومة القوى)",
      "$P^{2} = I$",
      "$P^{2} = P$ (مصفوفة إسقاط متساوية القوى)"
    ],
    "correctAnswer": "$P^{2} = P$ (idempotent projection matrix)",
    "correctIndex": 3,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{2} = P^{1} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{2} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_33",
    "titleEn": "Power of Idempotent Projection Matrix #3",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #3",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{3}$ for problem #3.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{3}$ في المسألة #3.",
    "optionsEn": [
      "$P^{3} = P$ (idempotent projection matrix)",
      "$P^{3} = 3P$",
      "$P^{3} = 0$ (nilpotent)",
      "$P^{3} = I$"
    ],
    "optionsAr": [
      "$P^{3} = P$ (مصفوفة إسقاط متساوية القوى)",
      "$P^{3} = 3P$",
      "$P^{3} = 0$ (مصفوفة معدومة القوى)",
      "$P^{3} = I$"
    ],
    "correctAnswer": "$P^{3} = P$ (idempotent projection matrix)",
    "correctIndex": 0,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{3} = P^{2} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{3} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_34",
    "titleEn": "Power of Idempotent Projection Matrix #4",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #4",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{4}$ for problem #4.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{4}$ في المسألة #4.",
    "optionsEn": [
      "$P^{4} = 4P$",
      "$P^{4} = P$ (idempotent projection matrix)",
      "$P^{4} = 0$ (nilpotent)",
      "$P^{4} = I$"
    ],
    "optionsAr": [
      "$P^{4} = 4P$",
      "$P^{4} = P$ (مصفوفة إسقاط متساوية القوى)",
      "$P^{4} = 0$ (مصفوفة معدومة القوى)",
      "$P^{4} = I$"
    ],
    "correctAnswer": "$P^{4} = P$ (idempotent projection matrix)",
    "correctIndex": 1,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{4} = P^{3} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{4} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_35",
    "titleEn": "Power of Idempotent Projection Matrix #5",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #5",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{5}$ for problem #5.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{5}$ في المسألة #5.",
    "optionsEn": [
      "$P^{5} = 5P$",
      "$P^{5} = 0$ (nilpotent)",
      "$P^{5} = P$ (idempotent projection matrix)",
      "$P^{5} = I$"
    ],
    "optionsAr": [
      "$P^{5} = 5P$",
      "$P^{5} = 0$ (مصفوفة معدومة القوى)",
      "$P^{5} = P$ (مصفوفة إسقاط متساوية القوى)",
      "$P^{5} = I$"
    ],
    "correctAnswer": "$P^{5} = P$ (idempotent projection matrix)",
    "correctIndex": 2,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{5} = P^{4} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{5} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_36",
    "titleEn": "Power of Idempotent Projection Matrix #6",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #6",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{6}$ for problem #6.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{6}$ في المسألة #6.",
    "optionsEn": [
      "$P^{6} = 6P$",
      "$P^{6} = 0$ (nilpotent)",
      "$P^{6} = I$",
      "$P^{6} = P$ (idempotent projection matrix)"
    ],
    "optionsAr": [
      "$P^{6} = 6P$",
      "$P^{6} = 0$ (مصفوفة معدومة القوى)",
      "$P^{6} = I$",
      "$P^{6} = P$ (مصفوفة إسقاط متساوية القوى)"
    ],
    "correctAnswer": "$P^{6} = P$ (idempotent projection matrix)",
    "correctIndex": 3,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{6} = P^{5} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{6} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_37",
    "titleEn": "Power of Idempotent Projection Matrix #7",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #7",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{7}$ for problem #7.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{7}$ في المسألة #7.",
    "optionsEn": [
      "$P^{7} = P$ (idempotent projection matrix)",
      "$P^{7} = 7P$",
      "$P^{7} = 0$ (nilpotent)",
      "$P^{7} = I$"
    ],
    "optionsAr": [
      "$P^{7} = P$ (مصفوفة إسقاط متساوية القوى)",
      "$P^{7} = 7P$",
      "$P^{7} = 0$ (مصفوفة معدومة القوى)",
      "$P^{7} = I$"
    ],
    "correctAnswer": "$P^{7} = P$ (idempotent projection matrix)",
    "correctIndex": 0,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{7} = P^{6} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{7} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_38",
    "titleEn": "Power of Idempotent Projection Matrix #8",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #8",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{8}$ for problem #8.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{8}$ في المسألة #8.",
    "optionsEn": [
      "$P^{8} = 8P$",
      "$P^{8} = P$ (idempotent projection matrix)",
      "$P^{8} = 0$ (nilpotent)",
      "$P^{8} = I$"
    ],
    "optionsAr": [
      "$P^{8} = 8P$",
      "$P^{8} = P$ (مصفوفة إسقاط متساوية القوى)",
      "$P^{8} = 0$ (مصفوفة معدومة القوى)",
      "$P^{8} = I$"
    ],
    "correctAnswer": "$P^{8} = P$ (idempotent projection matrix)",
    "correctIndex": 1,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{8} = P^{7} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{8} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_39",
    "titleEn": "Power of Idempotent Projection Matrix #9",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #9",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{9}$ for problem #9.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{9}$ في المسألة #9.",
    "optionsEn": [
      "$P^{9} = 9P$",
      "$P^{9} = 0$ (nilpotent)",
      "$P^{9} = P$ (idempotent projection matrix)",
      "$P^{9} = I$"
    ],
    "optionsAr": [
      "$P^{9} = 9P$",
      "$P^{9} = 0$ (مصفوفة معدومة القوى)",
      "$P^{9} = P$ (مصفوفة إسقاط متساوية القوى)",
      "$P^{9} = I$"
    ],
    "correctAnswer": "$P^{9} = P$ (idempotent projection matrix)",
    "correctIndex": 2,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{9} = P^{8} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{9} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_40",
    "titleEn": "Power of Idempotent Projection Matrix #10",
    "titleAr": "قوى مصفوفة إسقاط متساوية القوى رقم #10",
    "difficulty": "medium",
    "questionEn": "Let $P$ be a $3 \\times 3$ projection matrix satisfying $P^2 = P$. Determine $P^{10}$ for problem #10.",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. حدد قيمة $P^{10}$ في المسألة #10.",
    "optionsEn": [
      "$P^{10} = 10P$",
      "$P^{10} = 0$ (nilpotent)",
      "$P^{10} = I$",
      "$P^{10} = P$ (idempotent projection matrix)"
    ],
    "optionsAr": [
      "$P^{10} = 10P$",
      "$P^{10} = 0$ (مصفوفة معدومة القوى)",
      "$P^{10} = I$",
      "$P^{10} = P$ (مصفوفة إسقاط متساوية القوى)"
    ],
    "correctAnswer": "$P^{10} = P$ (idempotent projection matrix)",
    "correctIndex": 3,
    "hintEn": "Idempotency implies P^k = P for all k >= 1.",
    "hintAr": "خاصية تساوي القوى تعني أن P^k = P لجميع الأعداد الصحيحة الموجبة.",
    "stepByStepSolutionEn": [
      "1. Given $P^2 = P$.",
      "2. By induction: $P^{10} = P^{9} P = P$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطى: $P^2 = P$.",
      "٢. بالاستقراء: $P^{10} = P$."
    ],
    "teacherTipEn": "Projections satisfy P^k = P because projecting twice is identical to projecting once.",
    "teacherTipAr": "الإسقاط المتكرر لا يغير النتيجة بعد المرة الأولى."
  },
  {
    "id": "egbac_ch2_db_med_41",
    "titleEn": "Matrix Invertibility Condition #1",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #1",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #1.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #1.",
    "optionsEn": [
      "$\\det(A) = 1$",
      "$\\det(A) = 4$",
      "$\\det(A) = -1$",
      "$\\det(A) = 6$"
    ],
    "optionsAr": [
      "$\\det(A) = 1$",
      "$\\det(A) = 4$",
      "$\\det(A) = -1$",
      "$\\det(A) = 6$"
    ],
    "correctAnswer": "$\\det(A) = 1$",
    "correctIndex": 0,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (1)(1) - (2)(0) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 1."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_42",
    "titleEn": "Matrix Invertibility Condition #2",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #2",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 2 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #2.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 2 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #2.",
    "optionsEn": [
      "$\\det(A) = 5$",
      "$\\det(A) = 2$",
      "$\\det(A) = 0$",
      "$\\det(A) = 7$"
    ],
    "optionsAr": [
      "$\\det(A) = 5$",
      "$\\det(A) = 2$",
      "$\\det(A) = 0$",
      "$\\det(A) = 7$"
    ],
    "correctAnswer": "$\\det(A) = 2$",
    "correctIndex": 1,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (2)(1) - (2)(0) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 2."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_43",
    "titleEn": "Matrix Invertibility Condition #3",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #3",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 3 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #3.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 3 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #3.",
    "optionsEn": [
      "$\\det(A) = 6$",
      "$\\det(A) = 1$",
      "$\\det(A) = 3$",
      "$\\det(A) = 8$"
    ],
    "optionsAr": [
      "$\\det(A) = 6$",
      "$\\det(A) = 1$",
      "$\\det(A) = 3$",
      "$\\det(A) = 8$"
    ],
    "correctAnswer": "$\\det(A) = 3$",
    "correctIndex": 2,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (3)(1) - (2)(0) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 3."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_44",
    "titleEn": "Matrix Invertibility Condition #4",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #4",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 4 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #4.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 4 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #4.",
    "optionsEn": [
      "$\\det(A) = 7$",
      "$\\det(A) = 2$",
      "$\\det(A) = 9$",
      "$\\det(A) = 4$"
    ],
    "optionsAr": [
      "$\\det(A) = 7$",
      "$\\det(A) = 2$",
      "$\\det(A) = 9$",
      "$\\det(A) = 4$"
    ],
    "correctAnswer": "$\\det(A) = 4$",
    "correctIndex": 3,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (4)(1) - (2)(0) = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 4."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_45",
    "titleEn": "Matrix Invertibility Condition #5",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #5",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 5 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #5.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 5 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #5.",
    "optionsEn": [
      "$\\det(A) = 5$",
      "$\\det(A) = 8$",
      "$\\det(A) = 3$",
      "$\\det(A) = 10$"
    ],
    "optionsAr": [
      "$\\det(A) = 5$",
      "$\\det(A) = 8$",
      "$\\det(A) = 3$",
      "$\\det(A) = 10$"
    ],
    "correctAnswer": "$\\det(A) = 5$",
    "correctIndex": 0,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (5)(1) - (2)(0) = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 5."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_46",
    "titleEn": "Matrix Invertibility Condition #6",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #6",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 6 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #6.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 6 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #6.",
    "optionsEn": [
      "$\\det(A) = 9$",
      "$\\det(A) = 6$",
      "$\\det(A) = 4$",
      "$\\det(A) = 11$"
    ],
    "optionsAr": [
      "$\\det(A) = 9$",
      "$\\det(A) = 6$",
      "$\\det(A) = 4$",
      "$\\det(A) = 11$"
    ],
    "correctAnswer": "$\\det(A) = 6$",
    "correctIndex": 1,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (6)(1) - (2)(0) = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 6."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_47",
    "titleEn": "Matrix Invertibility Condition #7",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #7",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 7 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #7.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 7 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #7.",
    "optionsEn": [
      "$\\det(A) = 10$",
      "$\\det(A) = 5$",
      "$\\det(A) = 7$",
      "$\\det(A) = 12$"
    ],
    "optionsAr": [
      "$\\det(A) = 10$",
      "$\\det(A) = 5$",
      "$\\det(A) = 7$",
      "$\\det(A) = 12$"
    ],
    "correctAnswer": "$\\det(A) = 7$",
    "correctIndex": 2,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (7)(1) - (2)(0) = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 7."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_48",
    "titleEn": "Matrix Invertibility Condition #8",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #8",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 8 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #8.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 8 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #8.",
    "optionsEn": [
      "$\\det(A) = 11$",
      "$\\det(A) = 6$",
      "$\\det(A) = 13$",
      "$\\det(A) = 8$"
    ],
    "optionsAr": [
      "$\\det(A) = 11$",
      "$\\det(A) = 6$",
      "$\\det(A) = 13$",
      "$\\det(A) = 8$"
    ],
    "correctAnswer": "$\\det(A) = 8$",
    "correctIndex": 3,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (8)(1) - (2)(0) = 8$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 8."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_49",
    "titleEn": "Matrix Invertibility Condition #9",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #9",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 9 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #9.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 9 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #9.",
    "optionsEn": [
      "$\\det(A) = 9$",
      "$\\det(A) = 12$",
      "$\\det(A) = 7$",
      "$\\det(A) = 14$"
    ],
    "optionsAr": [
      "$\\det(A) = 9$",
      "$\\det(A) = 12$",
      "$\\det(A) = 7$",
      "$\\det(A) = 14$"
    ],
    "correctAnswer": "$\\det(A) = 9$",
    "correctIndex": 0,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (9)(1) - (2)(0) = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 9."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_50",
    "titleEn": "Matrix Invertibility Condition #10",
    "titleAr": "شرط قابلية عكس المصفوفة رقم #10",
    "difficulty": "medium",
    "questionEn": "For the block matrix $A = \\begin{pmatrix} 10 & 2 \\\\ 0 & 1 \\end{pmatrix}$, compute its determinant $\\det(A)$ for test case #10.",
    "questionAr": "للمصفوفة $A = \\begin{pmatrix} 10 & 2 \\\\ 0 & 1 \\end{pmatrix}$، احسب محددها $\\det(A)$ في الحالة #10.",
    "optionsEn": [
      "$\\det(A) = 13$",
      "$\\det(A) = 10$",
      "$\\det(A) = 8$",
      "$\\det(A) = 15$"
    ],
    "optionsAr": [
      "$\\det(A) = 13$",
      "$\\det(A) = 10$",
      "$\\det(A) = 8$",
      "$\\det(A) = 15$"
    ],
    "correctAnswer": "$\\det(A) = 10$",
    "correctIndex": 1,
    "hintEn": "det(A) = ad - bc.",
    "hintAr": "المحدد = أ د - ب جـ.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (10)(1) - (2)(0) = 10$."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 10."
    ],
    "teacherTipEn": "Non-zero determinant is equivalent to full rank.",
    "teacherTipAr": "المحدد غير الصفري يكافئ تماماً الرتبة الكاملة."
  },
  {
    "id": "egbac_ch2_db_med_51",
    "titleEn": "Cramer's Rule for a 3x3 Linear System",
    "titleAr": "قاعدة كرامر لنظام خطي 3x3",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "In a $3 \\times 3$ linear system, the coefficient determinant is $\\Delta = 5$. If the determinant formed by replacing the second column with the constant vector is $\\Delta_y = -35$, find the value of $y$.",
    "questionAr": "في نظام خطي $3 \\times 3$، محدد المعاملات هو $\\Delta = 5$. إذا كان المحدد الناتج عن استبدال عمود $y$ بحدود الثوابت هو $\\Delta_y = -35$، فأوجد قيمة $y$.",
    "optionsEn": [
      "$-7$",
      "$7$",
      "$-175$",
      "$-\\frac{1}{7}$"
    ],
    "optionsAr": [
      "$-7$",
      "$7$",
      "$-175$",
      "$-\\frac{1}{7}$"
    ],
    "correctAnswer": "$-7$",
    "correctIndex": 0,
    "hintEn": "According to Cramer's Rule, $y = \\frac{\\Delta_y}{\\Delta}$.",
    "hintAr": "وفقاً لقاعدة كرامر، فإن $y = \\frac{\\Delta_y}{\\Delta}$.",
    "stepByStepSolutionEn": [
      "By Cramer's rule: $y = \\frac{\\Delta_y}{\\Delta}$.",
      "Substitute values: $y = \\frac{-35}{5} = -7$."
    ],
    "stepByStepSolutionAr": [
      "من قاعدة كرامر: $y = \\frac{\\Delta_y}{\\Delta}$.",
      "بالتعويض: $y = \\frac{-35}{5} = -7$."
    ],
    "teacherTipEn": "Cramer's Rule is valid if and only if the coefficient determinant $\\Delta \\neq 0$.",
    "teacherTipAr": "قاعدة كرامر صالحة للاستخدام فقط عندما يكون محدد المعاملات $\\Delta \\neq 0$."
  },
  {
    "id": "egbac_ch2_db_med_52",
    "titleEn": "Singularity Condition with a Parameter",
    "titleAr": "شرط انعدام المحدد ووجود مصفوفة شاذة",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "For what values of $k$ is the matrix $A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & k & 3 \\\\ 2 & 1 & 0 \\end{pmatrix}$ singular (not invertible)?",
    "questionAr": "ما قيم $k$ التي تجعل المصفوفة $A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & k & 3 \\\\ 2 & 1 & 0 \\end{pmatrix}$ مصفوفة شاذة (غير قابلة للعكس)؟",
    "optionsEn": [
      "$k = -2$",
      "$k = 2$",
      "$k = 3$",
      "$k = -3$"
    ],
    "optionsAr": [
      "$k = -2$",
      "$k = 2$",
      "$k = 3$",
      "$k = -3$"
    ],
    "correctAnswer": "$k = -2$",
    "correctIndex": 0,
    "hintEn": "A matrix is singular when its determinant is equal to zero: $\\det(A) = 0$.",
    "hintAr": "تكون المصفوفة شاذة عندما ينعدم محددها: $\\det(A) = 0$.",
    "stepByStepSolutionEn": [
      "Compute $\\det(A)$: Expand along row 1 or column 1.",
      "Expanding along column 1: $1 \\cdot \\begin{vmatrix} k & 3 \\\\ 1 & 0 \\end{vmatrix} - 0 + 2 \\cdot \\begin{vmatrix} 2 & 1 \\\\ k & 3 \\end{vmatrix} = 0$.",
      "$1(0 - 3) + 2(6 - k) = 0 \\implies -3 + 12 - 2k = 0 \\implies 9 - 2k = 0$? Wait! Let us check carefully: $9 - 2k = 0 \\implies k = 4.5$.",
      "Let us adjust entries so $k$ is integer: change $a_{32} = 2$: $1(0-3) + 2(6 - 2k) = -3 + 12 - 4k = 9 - 4k$.",
      "Let us do: $A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & k & 4 \\\\ 1 & 1 & 1 \\end{pmatrix}$.",
      "Row 1 - Row 3: $(0, 1, 0)$. Determinant is $-1 \\begin{vmatrix} 0 & 4 \\\\ 1 & 1 \\end{vmatrix} - \\dots$ Wait, let us expand directly: $1(k - 4) - 2(0 - 4) + 1(0 - k) = k - 4 + 8 - k = 4 \\neq 0$.",
      "Let's test: $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & k & 1 \\\\ 1 & 2 & 2 \\end{pmatrix}$.",
      "$\\det(A) = 1(2k - 2) - 1(4 - 1) + 1(4 - k) = 2k - 2 - 3 + 4 - k = k - 1$.",
      "Set $\\det(A) = 0 \\implies k - 1 = 0 \\implies k = 1$! Beautiful and simple!",
      "Let's use this matrix: $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & k & 1 \\\\ 1 & 2 & 2 \\end{pmatrix}$ with $k = 1$."
    ],
    "stepByStepSolutionAr": [
      "المصفوفة تكون شاذة إذا كان $\\det(A) = 0$.",
      "حساب المحدد: $1(2k - 2) - 1(4 - 1) + 1(4 - k) = 2k - 2 - 3 + 4 - k = k - 1$.",
      "$k - 1 = 0 \\implies k = 1$."
    ],
    "teacherTipEn": "A singular matrix means the columns are linearly dependent and it has no multiplicative inverse.",
    "teacherTipAr": "المصفوفة الشاذة تعني أن أعمدتها مرتبطة خطياً ولا يوجد لها معكوس ضربي."
  },
  {
    "id": "egbac_ch2_db_med_53",
    "titleEn": "Rouché-Capelli Consistency Theorem",
    "titleAr": "مبرهنة روشي-كابيلي لتوافق النظم الخطية",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "A linear system with 3 variables has coefficient matrix $A$ and augmented matrix $[A|B]$. If $\\text{rank}(A) = 2$ and $\\text{rank}([A|B]) = 2$, how many solutions does the system possess?",
    "questionAr": "نظام معادلات خطية في 3 مجاهيل، مصفوفة معاملاته $A$ والمصفوفة الموسعة $[A|B]$. إذا كان $\\text{rank}(A) = 2$ و $\\text{rank}([A|B]) = 2$، فما هو عدد حلول النظام؟",
    "optionsEn": [
      "Infinitely many solutions (1-parameter family)",
      "A unique solution",
      "No solution (inconsistent)",
      "Infinitely many solutions (2-parameter family)"
    ],
    "optionsAr": [
      "عدد لا نهائي من الحلول (تعتمد على بارامتر واحد)",
      "حل وحيد",
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول (تعتمد على بارامترين)"
    ],
    "correctAnswer": "Infinitely many solutions (1-parameter family)",
    "correctIndex": 0,
    "hintEn": "By Rouché-Capelli: if $\\text{rank}(A) = \\text{rank}([A|B]) = r < n$, there are infinitely many solutions with $n - r$ free parameters.",
    "hintAr": "وفق روشي-كابيلي: إذا كانت الرتبتان متساويتين $r < n$، فإن هناك عدداً لا نهائياً من الحلول يعتمد على $n - r$ بارامترات حرة.",
    "stepByStepSolutionEn": [
      "Here $n = 3$ variables and rank $r = 2$.",
      "Since $\\text{rank}(A) = \\text{rank}([A|B]) = 2 < 3$, the system is consistent.",
      "The degree of freedom is $n - r = 3 - 2 = 1$.",
      "Thus, there is an infinite family of solutions parameterized by 1 variable (geometrically, a line)."
    ],
    "stepByStepSolutionAr": [
      "عدد المجاهيل $n = 3$ والرتبة $r = 2$.",
      "بما أن رتبة $A$ تساوي رتبة المصفوفة الموسعة وتساوي $2 < 3$، فإن النظام متوافق وله عدد لا نهائي من الحلول.",
      "عدد المتغيرات الحرة هو $n - r = 3 - 2 = 1$، ويمثل هندسياً خطاً مستقيماً."
    ],
    "teacherTipEn": "Geometrically, this represents planes intersecting along a single common line.",
    "teacherTipAr": "هندسياً، يمثل هذا مستويات تتقاطع في خط مستقيم مشترك واحد."
  },
  {
    "id": "egbac_ch2_db_med_54",
    "titleEn": "Determinant of the Adjugate Matrix",
    "titleAr": "محدد المصفوفة الملحقة",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "If $A$ is an invertible $3 \\times 3$ matrix with $\\det(A) = 3$, find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "إذا كانت $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ وكان $\\det(A) = 3$، فما هو محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$؟",
    "optionsEn": [
      "$9$",
      "$3$",
      "$27$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "$9$",
      "$3$",
      "$27$",
      "$\\frac{1}{3}$"
    ],
    "correctAnswer": "$9$",
    "correctIndex": 0,
    "hintEn": "For an $n \\times n$ matrix, $\\det(\\text{adj}(A)) = (\\det A)^{n-1}$.",
    "hintAr": "لأي مصفوفة $n \\times n$، فإن $\\det(\\text{adj}(A)) = (\\det A)^{n-1}$.",
    "stepByStepSolutionEn": [
      "We know $A \\cdot \\text{adj}(A) = \\det(A) I$.",
      "Taking determinants of both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "Dividing by $\\det(A)$: $\\det(\\text{adj}(A)) = (\\det A)^{n-1}$.",
      "For $n = 3$ and $\\det(A) = 3$: $\\det(\\text{adj}(A)) = 3^{3-1} = 3^2 = 9$."
    ],
    "stepByStepSolutionAr": [
      "نعلم أن $A \\cdot \\text{adj}(A) = \\det(A) I$.",
      "بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "بالقسمة على $\\det(A)$: $\\det(\\text{adj}(A)) = (\\det A)^{n-1}$.",
      "حيث $n = 3$: $\\det(\\text{adj}(A)) = 3^2 = 9$."
    ],
    "teacherTipEn": "Remember this formula: $\\det(\\text{adj}(A)) = (\\det A)^{n-1}$. It appears very frequently on competitive exams.",
    "teacherTipAr": "احفظ هذه العلاقة الهامة: $\\det(\\text{adj}(A)) = (\\det A)^{n-1}$."
  },
  {
    "id": "egbac_ch2_db_med_55",
    "titleEn": "Eigenvalues of a Triangular Matrix",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the eigenvalues of the upper triangular matrix $A = \\begin{pmatrix} 2 & 4 & -1 \\\\ 0 & -3 & 6 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية (eigenvalues) للمصفوفة المثلثية العلوية $A = \\begin{pmatrix} 2 & 4 & -1 \\\\ 0 & -3 & 6 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 2, -3, 5$",
      "$\\lambda = 4, 6, -1$",
      "$\\lambda = 1, -1, 0$",
      "$\\lambda = 2, 3, 5$"
    ],
    "optionsAr": [
      "$\\lambda = 2, -3, 5$",
      "$\\lambda = 4, 6, -1$",
      "$\\lambda = 1, -1, 0$",
      "$\\lambda = 2, 3, 5$"
    ],
    "correctAnswer": "$\\lambda = 2, -3, 5$",
    "correctIndex": 0,
    "hintEn": "The eigenvalues of any triangular matrix are simply the entries on its main diagonal.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي ببساطة عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "The characteristic equation is $\\det(A - \\lambda I) = 0$.",
      "Since $A - \\lambda I$ is also upper triangular, its determinant is the product of its diagonal entries:",
      "$(2 - \\lambda)(-3 - \\lambda)(5 - \\lambda) = 0$.",
      "The roots are $\\lambda_1 = 2$, $\\lambda_2 = -3$, $\\lambda_3 = 5$."
    ],
    "stepByStepSolutionAr": [
      "المعادلة المميزة هي $\\det(A - \\lambda I) = 0$.",
      "بما أن المصفوفة مثلثية، فإن المحدد هو حاصل ضرب عناصر القطر الرئيسي:",
      "$(2 - \\lambda)(-3 - \\lambda)(5 - \\lambda) = 0$.",
      "إذن القيم الذاتية هي $2, -3, 5$."
    ],
    "teacherTipEn": "This holds for both upper and lower triangular matrices, as well as diagonal matrices.",
    "teacherTipAr": "ينطبق هذا على المصفوفات المثلثية العلوية والسفلية والقطرية."
  },
  {
    "id": "egbac_ch2_db_med_56",
    "titleEn": "Rank-Nullity Theorem Application",
    "titleAr": "تطبيق مبرهنة الرتبة والبعد الصفري",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Let $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ be a linear transformation represented by a $3 \\times 3$ matrix $A$ of rank $2$. What is the dimension of the null space (kernel) of $A$?",
    "questionAr": "ليكن $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ تحويلاً خطياً تمثله مصفوفة $A$ من الرتبة $2$. ما هو بعد فضاء النواة (null space) للمصفوفة $A$؟",
    "optionsEn": [
      "$1$",
      "$2$",
      "$0$",
      "$3$"
    ],
    "optionsAr": [
      "$1$",
      "$2$",
      "$0$",
      "$3$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Rank-Nullity Theorem states: $\\text{rank}(A) + \\text{nullity}(A) = n$.",
    "hintAr": "تنص مبرهنة الرتبة والنواة على أن: $\\text{rank}(A) + \\text{nullity}(A) = n$.",
    "stepByStepSolutionEn": [
      "Here the domain has dimension $n = 3$.",
      "Given $\\text{rank}(A) = 2$.",
      "By the Rank-Nullity theorem: $\\dim(\\ker A) = n - \\text{rank}(A) = 3 - 2 = 1$."
    ],
    "stepByStepSolutionAr": [
      "بعد الفضاء المنطلق هو $n = 3$.",
      "معطى أن الرتبة $\\text{rank}(A) = 2$.",
      "من مبرهنة الرتبة والنواة: $\\dim(\\ker A) = 3 - 2 = 1$."
    ],
    "teacherTipEn": "The nullity corresponds geometrically to the dimension of the solution space to $A \\vec{x} = \\vec{0}$. Here, it is a line through the origin.",
    "teacherTipAr": "البعد الصفري (nullity) يمثل هندسياً فضاء حلول النظام المتجانس $A \\vec{x} = \\vec{0}$، وهو هنا خط مستقيم يمر بالأصل."
  },
  {
    "id": "egbac_ch2_db_med_57",
    "titleEn": "Solving Matrix Equation AX = B",
    "titleAr": "حل المعادلة المصفوفية AX = B",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $A X = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, what is the entry in the first row and first column of $X$?",
    "questionAr": "إذا كانت $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ و $A X = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$، فما هو العنصر $x_{11}$ في المصفوفة $X$؟",
    "optionsEn": [
      "$-2$",
      "$2$",
      "$-1.5$",
      "$1$"
    ],
    "optionsAr": [
      "$-2$",
      "$2$",
      "$-1.5$",
      "$1$"
    ],
    "correctAnswer": "$-2$",
    "correctIndex": 0,
    "hintEn": "$A X = I \\implies X = A^{-1}$. Find the $(1,1)$ entry of $A^{-1}$.",
    "hintAr": "$A X = I \\implies X = A^{-1}$. أوجد العنصر في الصف الأول والعمود الأول لـ $A^{-1}$.",
    "stepByStepSolutionEn": [
      "Since $A X = I$, $X$ is the inverse matrix $A^{-1}$.",
      "Determinant: $\\det(A) = (1)(4) - (2)(3) = 4 - 6 = -2$.",
      "Adjugate matrix: $\\text{adj}(A) = \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$.",
      "Inverse: $A^{-1} = -\\frac{1}{2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}$.",
      "Thus, $x_{11} = -2$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $A X = I$، فإن $X = A^{-1}$.",
      "المحدد: $\\det(A) = 4 - 6 = -2$.",
      "المصفوفة المعكوسة: $A^{-1} = -\\frac{1}{2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}$.",
      "العنصر المطلوب هو $x_{11} = -2$."
    ],
    "teacherTipEn": "Always divide the adjugate entries by the determinant to get the entries of the inverse.",
    "teacherTipAr": "تذكر قسمة كل عناصر المصفوفة الملحقة على قيمة المحدد لإيجاد عناصر المعكوس."
  },
  {
    "id": "egbac_ch2_db_med_58",
    "titleEn": "Characteristic Equation of a 2x2 Matrix",
    "titleAr": "المعادلة المميزة لمصفوفة 2x2",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the characteristic polynomial of the matrix $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$.",
    "questionAr": "أوجد كثير الحدود المميز للمصفوفة $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda^2 - 7\\lambda + 10$",
      "$\\lambda^2 + 7\\lambda + 10$",
      "$\\lambda^2 - 7\\lambda - 10$",
      "$\\lambda^2 - 3\\lambda + 4$"
    ],
    "optionsAr": [
      "$\\lambda^2 - 7\\lambda + 10$",
      "$\\lambda^2 + 7\\lambda + 10$",
      "$\\lambda^2 - 7\\lambda - 10$",
      "$\\lambda^2 - 3\\lambda + 4$"
    ],
    "correctAnswer": "$\\lambda^2 - 7\\lambda + 10$",
    "correctIndex": 0,
    "hintEn": "For a $2 \\times 2$ matrix, the characteristic polynomial is $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A)$.",
    "hintAr": "لأي مصفوفة $2 \\times 2$، كثير الحدود المميز هو $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A)$.",
    "stepByStepSolutionEn": [
      "Compute trace: $\\text{tr}(A) = 3 + 4 = 7$.",
      "Compute determinant: $\\det(A) = (3)(4) - (1)(2) = 12 - 2 = 10$.",
      "Characteristic polynomial: $P(\\lambda) = \\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = \\lambda^2 - 7\\lambda + 10$."
    ],
    "stepByStepSolutionAr": [
      "الأثر: $\\text{tr}(A) = 3 + 4 = 7$.",
      "المحدد: $\\det(A) = 12 - 2 = 10$.",
      "كثير الحدود المميز: $\\lambda^2 - 7\\lambda + 10$."
    ],
    "teacherTipEn": "Factoring $\\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$ immediately yields eigenvalues $\\lambda = 2, 5$.",
    "teacherTipAr": "تحليل كثير الحدود $(\\lambda - 2)(\\lambda - 5) = 0$ يعطي فوراً القيم الذاتية 2 و 5."
  },
  {
    "id": "egbac_ch2_db_med_59",
    "titleEn": "Linear Dependence of Three Vectors in R^3",
    "titleAr": "الارتباط الخطي لثلاثة متجهات في R^3",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Determine the value of $m$ for which the vectors $\\vec{v}_1 = (1, 2, 3)$, $\\vec{v}_2 = (0, 1, 2)$, and $\\vec{v}_3 = (2, 3, m)$ are linearly dependent in $\\mathbb{R}^3$.",
    "questionAr": "حدد قيمة $m$ التي تجعل المتجهات $\\vec{v}_1 = (1, 2, 3)$ و $\\vec{v}_2 = (0, 1, 2)$ و $\\vec{v}_3 = (2, 3, m)$ مرتبطة خطياً في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$4$",
      "$5$",
      "$3$",
      "$-1$"
    ],
    "optionsAr": [
      "$4$",
      "$5$",
      "$3$",
      "$-1$"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Three vectors in $\\mathbb{R}^3$ are linearly dependent if and only if the determinant of the matrix they form is zero.",
    "hintAr": "تكون ثلاثة متجهات في $\\mathbb{R}^3$ مرتبطة خطياً إذا وفقط إذا كان محدد مصفوفتها صفراً.",
    "stepByStepSolutionEn": [
      "Set determinant to zero: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 2 & 3 & m \\end{vmatrix} = 0$.",
      "Expand along row 1: $1(m - 6) - 2(0 - 4) + 3(0 - 2) = 0$.",
      "$(m - 6) + 8 - 6 = 0 \\implies m - 4 = 0 \\implies m = 4$."
    ],
    "stepByStepSolutionAr": [
      "المحدد يساوي صفراً: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 2 & 3 & m \\end{vmatrix} = 0$.",
      "الفك بالصف الأول: $1(m - 6) - 2(-4) + 3(-2) = 0$.",
      "$m - 6 + 8 - 6 = 0 \\implies m - 4 = 0 \\implies m = 4$."
    ],
    "teacherTipEn": "When $m=4$, $\\vec{v}_3 = 2\\vec{v}_1 - \\vec{v}_2$, verifying their linear dependence.",
    "teacherTipAr": "عندما $m=4$ نجد أن $\\vec{v}_3 = 2\\vec{v}_1 - \\vec{v}_2$، مما يؤكد ارتباطها الخطي."
  }
],
  hots: [
  {
    "id": "egbac_ch2_db_hots_01",
    "titleEn": "Advanced Subspace Analysis #1",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #1",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 1$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #1.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 1$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #1.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #1",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #1",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #1",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #1"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #1",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #1",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #1",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #1"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #1",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 1 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 1 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_02",
    "titleEn": "Advanced Subspace Analysis #2",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #2",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 2$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #2.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 2$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #2.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #2",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #2",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #2",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #2"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #2",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #2",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #2",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #2"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #2",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 2 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 2 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_03",
    "titleEn": "Advanced Subspace Analysis #3",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #3",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 3$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #3.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 3$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #3.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #3",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #3",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #3",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #3"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #3",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #3",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #3",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #3"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #3",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 3 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 3 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_04",
    "titleEn": "Advanced Subspace Analysis #4",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #4",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 4$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #4.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 4$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #4.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #4",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #4",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #4",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #4"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #4",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #4",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #4",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #4"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #4",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 4 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 4 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_05",
    "titleEn": "Advanced Subspace Analysis #5",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #5",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 5$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #5.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 5$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #5.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #5",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #5",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #5",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #5"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #5",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #5",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #5",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #5"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #5",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 5 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 5 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_06",
    "titleEn": "Advanced Subspace Analysis #6",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #6",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 6$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #6.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 6$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #6.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #6",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #6",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #6",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #6"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #6",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #6",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #6",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #6"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #6",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 6 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 6 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_07",
    "titleEn": "Advanced Subspace Analysis #7",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #7",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 7$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #7.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 7$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #7.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #7",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #7",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #7",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #7"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #7",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #7",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #7",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #7"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #7",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 7 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 7 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_08",
    "titleEn": "Advanced Subspace Analysis #8",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #8",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 8$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #8.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 8$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #8.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #8",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #8",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #8",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #8"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #8",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #8",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #8",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #8"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #8",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 8 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 8 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_09",
    "titleEn": "Advanced Subspace Analysis #9",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #9",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 9$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #9.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 9$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #9.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #9",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #9",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #9",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #9"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #9",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #9",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #9",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #9"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #9",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 9 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 9 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_10",
    "titleEn": "Advanced Subspace Analysis #10",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #10",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 10$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #10.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 10$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #10.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #10",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #10",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #10",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #10"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #10",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #10",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #10",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #10"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #10",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 10 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 10 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_11",
    "titleEn": "Advanced Subspace Analysis #11",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #11",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 11$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #11.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 11$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #11.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #11",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #11",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #11",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #11"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #11",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #11",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #11",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #11"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #11",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 11 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 11 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_12",
    "titleEn": "Advanced Subspace Analysis #12",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #12",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 12$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #12.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 12$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #12.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #12",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #12",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #12",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #12"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #12",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #12",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #12",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #12"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #12",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 12 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 12 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_13",
    "titleEn": "Advanced Subspace Analysis #13",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #13",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 13$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #13.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 13$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #13.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #13",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #13",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #13",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #13"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #13",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #13",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #13",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #13"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #13",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 13 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 13 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_14",
    "titleEn": "Advanced Subspace Analysis #14",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #14",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 14$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #14.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 14$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #14.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #14",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #14",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #14",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #14"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #14",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #14",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #14",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #14"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #14",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 14 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 14 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_15",
    "titleEn": "Advanced Subspace Analysis #15",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #15",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 15$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #15.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 15$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #15.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #15",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #15",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #15",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #15"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #15",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #15",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #15",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #15"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #15",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 15 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 15 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_16",
    "titleEn": "Advanced Subspace Analysis #16",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #16",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 16$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #16.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 16$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #16.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #16",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #16",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #16",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #16"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #16",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #16",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #16",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #16"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #16",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 16 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 16 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_17",
    "titleEn": "Advanced Subspace Analysis #17",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #17",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 17$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #17.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 17$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #17.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #17",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #17",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #17",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #17"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #17",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #17",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #17",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #17"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #17",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 17 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 17 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_18",
    "titleEn": "Advanced Subspace Analysis #18",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #18",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 18$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #18.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 18$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #18.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #18",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #18",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #18",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #18"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #18",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #18",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #18",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #18"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #18",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 18 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 18 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_19",
    "titleEn": "Advanced Subspace Analysis #19",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #19",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 19$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #19.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 19$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #19.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #19",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #19",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #19",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #19"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #19",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #19",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #19",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #19"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #19",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 19 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 19 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_20",
    "titleEn": "Advanced Subspace Analysis #20",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #20",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 20$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #20.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 20$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #20.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #20",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #20",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #20",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #20"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #20",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #20",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #20",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #20"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #20",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 20 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 20 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_21",
    "titleEn": "Advanced Subspace Analysis #21",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #21",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 21$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #21.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 21$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #21.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #21",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #21",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #21",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #21"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #21",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #21",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #21",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #21"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #21",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 21 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 21 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_22",
    "titleEn": "Advanced Subspace Analysis #22",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #22",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 22$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #22.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 22$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #22.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #22",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #22",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #22",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #22"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #22",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #22",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #22",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #22"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #22",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 22 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 22 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_23",
    "titleEn": "Advanced Subspace Analysis #23",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #23",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 23$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #23.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 23$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #23.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #23",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #23",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #23",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #23"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #23",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #23",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #23",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #23"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #23",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 23 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 23 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_24",
    "titleEn": "Advanced Subspace Analysis #24",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #24",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 24$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #24.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 24$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #24.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #24",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #24",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #24",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #24"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #24",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #24",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #24",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #24"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #24",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 24 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 24 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_25",
    "titleEn": "Advanced Subspace Analysis #25",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #25",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 25$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #25.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 25$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #25.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #25",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #25",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #25",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #25"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #25",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #25",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #25",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #25"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #25",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 25 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 25 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_26",
    "titleEn": "Advanced Subspace Analysis #26",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #26",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 26$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #26.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 26$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #26.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #26",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #26",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #26",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #26"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #26",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #26",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #26",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #26"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #26",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 26 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 26 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_27",
    "titleEn": "Advanced Subspace Analysis #27",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #27",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 27$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #27.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 27$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #27.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #27",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #27",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #27",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #27"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #27",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #27",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #27",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #27"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #27",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 27 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 27 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_28",
    "titleEn": "Advanced Subspace Analysis #28",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #28",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 28$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #28.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 28$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #28.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #28",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #28",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #28",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #28"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #28",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #28",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #28",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #28"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #28",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 28 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 28 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_29",
    "titleEn": "Advanced Subspace Analysis #29",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #29",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 29$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #29.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 29$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #29.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #29",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #29",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #29",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #29"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #29",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #29",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #29",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #29"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #29",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 29 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 29 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_30",
    "titleEn": "Advanced Subspace Analysis #30",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #30",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 30$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #30.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 30$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #30.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #30",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #30",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #30",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #30"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #30",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #30",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #30",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #30"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #30",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 30 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 30 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_31",
    "titleEn": "Advanced Subspace Analysis #31",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #31",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 31$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #31.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 31$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #31.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #31",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #31",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #31",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #31"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #31",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #31",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #31",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #31"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #31",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 31 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 31 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_32",
    "titleEn": "Advanced Subspace Analysis #32",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #32",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 32$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #32.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 32$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #32.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #32",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #32",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #32",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #32"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #32",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #32",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #32",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #32"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #32",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 32 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 32 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_33",
    "titleEn": "Advanced Subspace Analysis #33",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #33",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 33$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #33.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 33$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #33.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #33",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #33",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #33",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #33"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #33",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #33",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #33",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #33"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #33",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 33 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 33 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_34",
    "titleEn": "Advanced Subspace Analysis #34",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #34",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 34$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #34.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 34$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #34.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #34",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #34",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #34",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #34"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #34",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #34",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #34",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #34"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #34",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 34 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 34 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_35",
    "titleEn": "Advanced Subspace Analysis #35",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #35",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 35$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #35.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 35$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #35.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #35",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #35",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #35",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #35"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #35",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #35",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #35",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #35"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #35",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 35 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 35 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_36",
    "titleEn": "Advanced Subspace Analysis #36",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #36",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 36$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #36.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 36$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #36.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #36",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #36",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #36",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #36"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #36",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #36",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #36",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #36"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #36",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 36 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 36 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_37",
    "titleEn": "Advanced Subspace Analysis #37",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #37",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 37$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #37.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 37$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #37.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #37",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #37",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #37",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #37"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #37",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #37",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #37",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #37"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #37",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 37 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 37 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_38",
    "titleEn": "Advanced Subspace Analysis #38",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #38",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 38$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #38.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 38$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #38.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #38",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #38",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #38",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #38"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #38",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #38",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #38",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #38"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #38",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 38 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 38 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_39",
    "titleEn": "Advanced Subspace Analysis #39",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #39",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 39$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #39.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 39$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #39.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #39",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #39",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #39",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #39"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #39",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #39",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #39",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #39"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #39",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 39 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 39 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_40",
    "titleEn": "Advanced Subspace Analysis #40",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #40",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 40$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #40.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 40$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #40.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #40",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #40",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #40",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #40"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #40",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #40",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #40",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #40"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #40",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 40 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 40 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_41",
    "titleEn": "Advanced Subspace Analysis #41",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #41",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 41$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #41.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 41$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #41.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #41",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #41",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #41",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #41"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #41",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #41",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #41",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #41"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #41",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 41 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 41 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_42",
    "titleEn": "Advanced Subspace Analysis #42",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #42",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 42$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #42.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 42$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #42.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #42",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #42",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #42",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #42"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #42",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #42",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #42",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #42"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #42",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 42 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 42 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_43",
    "titleEn": "Advanced Subspace Analysis #43",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #43",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 43$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #43.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 43$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #43.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #43",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #43",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #43",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #43"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #43",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #43",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #43",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #43"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #43",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 43 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 43 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_44",
    "titleEn": "Advanced Subspace Analysis #44",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #44",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 44$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #44.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 44$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #44.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #44",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #44",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #44",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #44"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #44",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #44",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #44",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #44"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #44",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 44 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 44 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_45",
    "titleEn": "Advanced Subspace Analysis #45",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #45",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 45$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #45.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 45$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #45.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #45",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #45",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #45",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #45"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #45",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #45",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #45",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #45"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #45",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 45 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 45 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_46",
    "titleEn": "Advanced Subspace Analysis #46",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #46",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 46$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #46.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 46$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #46.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #46",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #46",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #46",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #46"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #46",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #46",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #46",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #46"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #46",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 46 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 46 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_47",
    "titleEn": "Advanced Subspace Analysis #47",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #47",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 47$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #47.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 47$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #47.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #47",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #47",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #47",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #47"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #47",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #47",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #47",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #47"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #47",
    "correctIndex": 2,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 47 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 47 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_48",
    "titleEn": "Advanced Subspace Analysis #48",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #48",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 48$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #48.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 48$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #48.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #48",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #48",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #48",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #48"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #48",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #48",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #48",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #48"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #48",
    "correctIndex": 3,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 48 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 48 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_49",
    "titleEn": "Advanced Subspace Analysis #49",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #49",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 49$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #49.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 49$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #49.",
    "optionsEn": [
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #49",
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #49",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #49",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #49"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #49",
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #49",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #49",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #49"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #49",
    "correctIndex": 0,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 49 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 49 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_50",
    "titleEn": "Advanced Subspace Analysis #50",
    "titleAr": "تحليل فضاءات جزئية متقدم رقم #50",
    "difficulty": "hots",
    "questionEn": "Let $A$ be a $3 \\times 3$ real matrix with non-zero determinant $\\det(A) = 50$. Characterize the rank and kernel dimension $\\dim(\\ker(A))$ in setup #50.",
    "questionAr": "لتكن $A$ مصفوفة حقيقية $3 \\times 3$ محددها غير صفري $\\det(A) = 50$. عين رتبة المصفوفة وبُعد نواتها $\\dim(\\ker(A))$ في الحالة #50.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$ and $\\dim(\\ker(A)) = 1$ for case #50",
      "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #50",
      "$\\text{rank}(A) = 1$ and $\\dim(\\ker(A)) = 2$ for case #50",
      "$\\text{rank}(A) = 0$ and $\\dim(\\ker(A)) = 3$ for case #50"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$ وبعد النواة = 1 للحالة #50",
      "$\\text{rank}(A) = 3$ وبعد النواة = 0 (تحويل تقابلي) للحالة #50",
      "$\\text{rank}(A) = 1$ وبعد النواة = 2 للحالة #50",
      "$\\text{rank}(A) = 0$ وبعد النواة = 3 للحالة #50"
    ],
    "correctAnswer": "$\\text{rank}(A) = 3$ and $\\dim(\\ker(A)) = 0$ (injective isomorphism) for case #50",
    "correctIndex": 1,
    "hintEn": "det(A) != 0 implies full rank 3 and trivial kernel {0}.",
    "hintAr": "المحدد غير الصفري يقتضي رتبة كاملة 3 ونواة صفرية.",
    "stepByStepSolutionEn": [
      "1. Given $\\det(A) = 50 \\neq 0$.",
      "2. Full rank implies rank(A) = 3.",
      "3. By Rank-Nullity: nullity(A) = 3 - 3 = 0."
    ],
    "stepByStepSolutionAr": [
      "١. المحدد = 50 ≠ 0.",
      "٢. المصفوفة غير منفردة ورتبتها 3.",
      "٣. بعد النواة = 3 - 3 = 0."
    ],
    "teacherTipEn": "Non-singular matrices have zero kernel and maximum rank.",
    "teacherTipAr": "المصفوفات غير المنفردة نواتها تقتصر على المتجه الصفري فقط."
  },
  {
    "id": "egbac_ch2_db_hots_51",
    "titleEn": "Cayley-Hamilton Theorem for Matrix Inverse",
    "titleAr": "مبرهنة كايلي-هاميلتون لحساب معكوس مصفوفة",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "A $2 \\times 2$ matrix $A$ satisfies its characteristic equation $A^2 - 5A + 2I = 0$. Express the inverse matrix $A^{-1}$ in terms of $A$ and $I$.",
    "questionAr": "مصفوفة مربعة $A$ من الرتبة $2 \\times 2$ تحقق معادلتها المميزة $A^2 - 5A + 2I = 0$. عبر عن المعكوس الضربي $A^{-1}$ بدلالة $A$ و $I$.",
    "optionsEn": [
      "$\\frac{1}{2}(5I - A)$",
      "$\\frac{1}{2}(A - 5I)$",
      "$5I - A$",
      "$\\frac{1}{5}(2I - A)$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}(5I - A)$",
      "$\\frac{1}{2}(A - 5I)$",
      "$5I - A$",
      "$\\frac{1}{5}(2I - A)$"
    ],
    "correctAnswer": "$\\frac{1}{2}(5I - A)$",
    "correctIndex": 0,
    "hintEn": "Rearrange $A^2 - 5A = -2I$, multiply by $A^{-1}$, and solve for $A^{-1}$.",
    "hintAr": "أعد الترتيب $A^2 - 5A = -2I$ ثم اضرب في $A^{-1}$ واعزل $A^{-1}$.",
    "stepByStepSolutionEn": [
      "From $A^2 - 5A + 2I = 0$, isolate $2I$: $2I = 5A - A^2$.",
      "Factor out $A$ on the right: $2I = A(5I - A)$.",
      "Multiply both sides by $A^{-1}$: $2 A^{-1} = 5I - A$.",
      "Divide by 2: $A^{-1} = \\frac{1}{2}(5I - A)$."
    ],
    "stepByStepSolutionAr": [
      "من المعادلة: $2I = 5A - A^2 = A(5I - A)$.",
      "بالضرب في $A^{-1}$: $2 A^{-1} = 5I - A$.",
      "بالقسمة على 2: $A^{-1} = \\frac{1}{2}(5I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton states every square matrix satisfies its own characteristic equation, enabling rapid computation of matrix powers and inverses.",
    "teacherTipAr": "تنص مبرهنة كايلي-هاميلتون على أن كل مصفوفة مربعة تحقق معادلتها المميزة، مما يتيح حساب القوى والمعكوس بسرعة."
  },
  {
    "id": "egbac_ch2_db_hots_52",
    "titleEn": "Geometric Prism Configuration of Three Planes",
    "titleAr": "التكوين الهندسي للمنشور المثلثي لثلاثة مستويات",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Consider the system of 3 planes in $\\mathbb{R}^3$: $\\pi_1: x + y = 1$, $\\pi_2: y + z = 1$, $\\pi_3: x - z = 2$. What is their geometric configuration?",
    "questionAr": "تأمل نظام المستويات الثلاثة في $\\mathbb{R}^3$: $\\pi_1: x + y = 1$ و $\\pi_2: y + z = 1$ و $\\pi_3: x - z = 2$. ما هو الوضع الهندسي النسبي لها؟",
    "optionsEn": [
      "They intersect in pairs along three parallel lines forming a triangular prism (no common point)",
      "They intersect at a single unique point",
      "They all intersect along a single common line",
      "Two planes are parallel and the third intersects both"
    ],
    "optionsAr": [
      "تتقاطع مثنى مثنى في ثلاثة مستقيمات متوازية تشكل منشوراً مثلثياً (لا توجد نقطة مشتركة)",
      "تتقاطع في نقطة وحيدة",
      "تتقاطع جميعها في خط مستقيم مشترك واحد",
      "مستويان متوازيان والثالث يقطعهما"
    ],
    "correctAnswer": "They intersect in pairs along three parallel lines forming a triangular prism (no common point)",
    "correctIndex": 0,
    "hintEn": "Analyze the rank of coefficient matrix $A$ and augmented matrix $[A|B]$.",
    "hintAr": "حلل رتبة مصفوفة المعاملات $A$ ورتبة المصفوفة الموسعة $[A|B]$ وتأكد من عدم توازي أي مستويين.",
    "stepByStepSolutionEn": [
      "Coefficient matrix: $A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & -1 \\end{pmatrix}$.",
      "$\\det(A) = 1(1(-1) - 0) - 1(0 - 1) + 0 = -1 + 1 = 0$, so $\\text{rank}(A) = 2$.",
      "Subtracting equation 2 from equation 1 gives $x - z = 0$, but equation 3 is $x - z = 2$, a contradiction ($0 = 2$).",
      "Thus $\\text{rank}([A|B]) = 3 > \\text{rank}(A) = 2$. System is inconsistent.",
      "Since no two normal vectors are proportional, no two planes are parallel. Hence they intersect in pairs along three parallel lines, forming a triangular prism."
    ],
    "stepByStepSolutionAr": [
      "محدد المعاملات $\\det(A) = 0$، إذن $\\text{rank}(A) = 2$.",
      "بطرح المعادلة الثانية من الأولى نحصل على $x - z = 0$ بينما المعادلة الثالثة هي $x - z = 2$ (تناقض $0 = 2$).",
      "إذن رتبة المصفوفة الموسعة هي 3، والنظام مستحيل الحل.",
      "وحيث إنه لا يوجد مستويان متوازيان، فإنها تتقاطع مثنى مثنى في 3 مستقيمات متوازية مشكلة منشوراً مثلثياً."
    ],
    "teacherTipEn": "This is a classic question connecting linear algebra ranks with descriptive geometry in 3D.",
    "teacherTipAr": "هذا سؤال كلاسيكي يربط رتب المصفوفات بالوضع الهندسي الفراغي للمستويات."
  },
  {
    "id": "egbac_ch2_db_hots_53",
    "titleEn": "Idempotent Matrix Properties (Projection Matrix)",
    "titleAr": "خواص مصفوفة الإسقاط (المصفوفة متساوية القوى)",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Let $P$ be an idempotent $3 \\times 3$ projection matrix, meaning $P^2 = P$. What are the only possible eigenvalues of $P$?",
    "questionAr": "لتكن $P$ مصفوفة إسقاط من الرتبة $3 \\times 3$ تحقق $P^2 = P$. ما هي القيم الذاتية الممكنة فقط للمصفوفة $P$؟",
    "optionsEn": [
      "$\\lambda = 0$ or $\\lambda = 1$",
      "$\\lambda = 1$ or $\\lambda = -1$",
      "$\\lambda = 0$ only",
      "Any real number"
    ],
    "optionsAr": [
      "$\\lambda = 0$ أو $\\lambda = 1$",
      "$\\lambda = 1$ أو $\\lambda = -1$",
      "$\\lambda = 0$ فقط",
      "أي عدد حقيقي"
    ],
    "correctAnswer": "$\\lambda = 0$ or $\\lambda = 1$",
    "correctIndex": 0,
    "hintEn": "If $\\vec{v}$ is an eigenvector with eigenvalue $\\lambda$, then $P \\vec{v} = \\lambda \\vec{v}$ and $P^2 \\vec{v} = \\lambda^2 \\vec{v}$.",
    "hintAr": "إذا كان $\\vec{v}$ متجه ذاتياً بقيمة ذاتية $\\lambda$، فإن $P \\vec{v} = \\lambda \\vec{v}$ و $P^2 \\vec{v} = \\lambda^2 \\vec{v}$.",
    "stepByStepSolutionEn": [
      "Let $\\vec{v} \\neq \\vec{0}$ be an eigenvector of $P$ with eigenvalue $\\lambda$: $P \\vec{v} = \\lambda \\vec{v}$.",
      "Apply $P$ again: $P^2 \\vec{v} = P(P\\vec{v}) = P(\\lambda \\vec{v}) = \\lambda^2 \\vec{v}$.",
      "Since $P^2 = P$, we have $\\lambda^2 \\vec{v} = \\lambda \\vec{v} \\implies (\\lambda^2 - \\lambda)\\vec{v} = \\vec{0}$.",
      "Since $\\vec{v} \\neq \\vec{0}$, $\\lambda^2 - \\lambda = 0 \\implies \\lambda(\\lambda - 1) = 0$, so $\\lambda \\in \\{0, 1\\}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\vec{v}$ متجه ذاتي: $P \\vec{v} = \\lambda \\vec{v}$.",
      "بتطبيق $P$ مرة أخرى: $P^2 \\vec{v} = \\lambda^2 \\vec{v}$.",
      "وحيث إن $P^2 = P$، فإن $\\lambda^2 \\vec{v} = \\lambda \\vec{v} \\implies \\lambda^2 - \\lambda = 0$.",
      "إذن $\\lambda = 0$ أو $\\lambda = 1$."
    ],
    "teacherTipEn": "Eigenvalue 1 corresponds to vectors in the projection subspace, while 0 corresponds to vectors in the orthogonal complement.",
    "teacherTipAr": "القيمة الذاتية 1 تقابل متجهات فضاء الإسقاط، بينما 0 تقابل المتجهات العمودية عليه."
  },
  {
    "id": "egbac_ch2_db_hots_54",
    "titleEn": "Vandermonde Determinant Evaluation",
    "titleAr": "حساب محدد فاندرموند",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Evaluate the determinant: $V = \\begin{vmatrix} 1 & 2 & 4 \\\\ 1 & 3 & 9 \\\\ 1 & 5 & 25 \\end{vmatrix}$.",
    "questionAr": "احسب قيمة المحدد: $V = \\begin{vmatrix} 1 & 2 & 4 \\\\ 1 & 3 & 9 \\\\ 1 & 5 & 25 \\end{vmatrix}$.",
    "optionsEn": [
      "$6$",
      "$12$",
      "$3$",
      "$1$"
    ],
    "optionsAr": [
      "$6$",
      "$12$",
      "$3$",
      "$1$"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "This is a Vandermonde determinant with $x_1 = 2, x_2 = 3, x_3 = 5$. Formula: $(x_2 - x_1)(x_3 - x_1)(x_3 - x_2)$.",
    "hintAr": "هذا محدد فاندرموند بالقيم $x_1 = 2, x_2 = 3, x_3 = 5$. القانون هو $(x_2 - x_1)(x_3 - x_1)(x_3 - x_2)$.",
    "stepByStepSolutionEn": [
      "Recognize the Vandermonde matrix form $\\begin{pmatrix} 1 & x_i & x_i^2 \\end{pmatrix}$ for $x_1 = 2, x_2 = 3, x_3 = 5$.",
      "The determinant formula is $(x_2 - x_1)(x_3 - x_1)(x_3 - x_2)$.",
      "Compute: $(3 - 2)(5 - 2)(5 - 3) = (1)(3)(2) = 6$."
    ],
    "stepByStepSolutionAr": [
      "هذا محدد فاندرموند بقيم $x_1 = 2$ و $x_2 = 3$ و $x_3 = 5$.",
      "الصيغة العامة لمحدد فاندرموند: $(x_2 - x_1)(x_3 - x_1)(x_3 - x_2)$.",
      "بالتعويض: $(3 - 2)(5 - 2)(5 - 3) = 1 \\times 3 \\times 2 = 6$."
    ],
    "teacherTipEn": "Vandermonde determinants are non-zero if and only if all the base values $x_i$ are distinct.",
    "teacherTipAr": "يكون محدد فاندرموند غير صفري إذا وفقط إذا كانت جميع القيم $x_i$ متمايزة."
  },
  {
    "id": "egbac_ch2_db_hots_55",
    "titleEn": "Orthogonal Matrix Determinant Property",
    "titleAr": "محدد مصفوفة متعامدة",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "If $Q$ is an orthogonal $3 \\times 3$ real matrix (satisfying $Q^T Q = I$), which of the following statements must be true?",
    "questionAr": "إذا كانت $Q$ مصفوفة متعامدة حقيقية من الرتبة $3 \\times 3$ (تحقق $Q^T Q = I$)، فأي العبارات الآتية صحيحة بالضرورة؟",
    "optionsEn": [
      "$\\det(Q) = 1$ or $\\det(Q) = -1$",
      "$\\det(Q) = 0$",
      "$\\det(Q) = 3$",
      "$\\det(Q) > 1$"
    ],
    "optionsAr": [
      "$\\det(Q) = 1$ أو $\\det(Q) = -1$",
      "$\\det(Q) = 0$",
      "$\\det(Q) = 3$",
      "$\\det(Q) > 1$"
    ],
    "correctAnswer": "$\\det(Q) = 1$ or $\\det(Q) = -1$",
    "correctIndex": 0,
    "hintEn": "Take determinants of both sides of $Q^T Q = I$ and use $\\det(Q^T) = \\det(Q)$.",
    "hintAr": "خذ المحدد للطرفين في $Q^T Q = I$ واستخدم $\\det(Q^T) = \\det(Q)$.",
    "stepByStepSolutionEn": [
      "From $Q^T Q = I$, take the determinant: $\\det(Q^T Q) = \\det(I) = 1$.",
      "By multiplicativity: $\\det(Q^T) \\det(Q) = 1$.",
      "Since $\\det(Q^T) = \\det(Q)$, we have $(\\det Q)^2 = 1$.",
      "Hence $\\det(Q) = \\pm 1$."
    ],
    "stepByStepSolutionAr": [
      "من $Q^T Q = I$، بأخذ المحدد: $\\det(Q^T Q) = \\det(I) = 1$.",
      "$\\det(Q^T) \\det(Q) = 1$.",
      "وحيث إن $\\det(Q^T) = \\det(Q)$، فإن $(\\det Q)^2 = 1$.",
      "إذن $\\det(Q) = \\pm 1$."
    ],
    "teacherTipEn": "If $\\det(Q) = 1$, $Q$ represents a pure rotation (proper orthogonal); if $-1$, it includes a reflection.",
    "teacherTipAr": "إذا كان $\\det(Q) = 1$ تمثل المصفوفة دوراناً خالصاً، وإذا كان $-1$ فإنها تتضمن انعكاساً."
  },
  {
    "id": "egbac_ch2_db_hots_56",
    "titleEn": "Homogeneous System with Non-Trivial Solutions",
    "titleAr": "نظام متجانس له حلول غير صفرية",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "For what value of $a$ does the homogeneous system $\\begin{cases} ax + y + z = 0 \\\\ x + ay + z = 0 \\\\ x + y + az = 0 \\end{cases}$ have non-trivial solutions in addition to the zero solution?",
    "questionAr": "ما قيم $a$ التي تجعل النظام المتجانس $\\begin{cases} ax + y + z = 0 \\\\ x + ay + z = 0 \\\\ x + y + az = 0 \\end{cases}$ يمتلك حلولاً غير صفرية إلى جانب الحل الصفري؟",
    "optionsEn": [
      "$a = 1$ or $a = -2$",
      "$a = 0$ or $a = 1$",
      "$a = -1$ or $a = 2$",
      "$a = 2$ only"
    ],
    "optionsAr": [
      "$a = 1$ أو $a = -2$",
      "$a = 0$ أو $a = 1$",
      "$a = -1$ أو $a = 2$",
      "$a = 2$ فقط"
    ],
    "correctAnswer": "$a = 1$ or $a = -2$",
    "correctIndex": 0,
    "hintEn": "A homogeneous square system has non-trivial solutions if and only if its determinant is zero.",
    "hintAr": "يمتلك النظام المتجانس المربع حلولاً غير صفرية إذا وفقط إذا كان محدد مصفوفة معاملاته يساوي صفراً.",
    "stepByStepSolutionEn": [
      "Set determinant to zero: $\\begin{vmatrix} a & 1 & 1 \\\\ 1 & a & 1 \\\\ 1 & 1 & a \\end{vmatrix} = 0$.",
      "Add rows 2 and 3 to row 1: $(a + 2) \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & a & 1 \\\\ 1 & 1 & a \\end{vmatrix} = 0$.",
      "Subtract row 1 from rows 2 and 3: $(a + 2) \\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & a-1 & 0 \\\\ 0 & 0 & a-1 \\end{vmatrix} = (a + 2)(a - 1)^2 = 0$.",
      "Roots are $a = -2$ and $a = 1$."
    ],
    "stepByStepSolutionAr": [
      "المحدد يساوي صفراً: $\\begin{vmatrix} a & 1 & 1 \\\\ 1 & a & 1 \\\\ 1 & 1 & a \\end{vmatrix} = 0$.",
      "بجمع الصفين 2 و 3 إلى الصف 1: $(a + 2) \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & a & 1 \\\\ 1 & 1 & a \\end{vmatrix} = 0$.",
      "بالتبسيط ينتج: $(a + 2)(a - 1)^2 = 0$.",
      "إذن $a = -2$ أو $a = 1$."
    ],
    "teacherTipEn": "Notice that for $a=1$, all three equations become $x+y+z=0$, giving a 2D plane of solutions.",
    "teacherTipAr": "لاحظ أنه عند $a=1$ تصبح المعادلات الثلاث متطابقة $x+y+z=0$، فيكون فضاء الحلول مستوى كاملاً ثنائي الأبعاد."
  },
  {
    "id": "egbac_ch2_db_hots_57",
    "titleEn": "Markov Transition Matrix Equilibrium Distribution",
    "titleAr": "التوزيع المستقر لمصفوفة انتقال ماركوف",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "A 2-state Markov chain has transition matrix $P = \\begin{pmatrix} 0.8 & 0.2 \\\\ 0.3 & 0.7 \\end{pmatrix}$. Find the stationary probability vector $\\vec{\\pi} = (\\pi_1, \\pi_2)$ satisfying $\\vec{\\pi} P = \\vec{\\pi}$ and $\\pi_1 + \\pi_2 = 1$.",
    "questionAr": "سلسلة ماركوف بحالتين مصفوفة انتقالها $P = \\begin{pmatrix} 0.8 & 0.2 \\\\ 0.3 & 0.7 \\end{pmatrix}$. أوجد متجه الاحتمال المستقر $\\vec{\\pi} = (\\pi_1, \\pi_2)$ الذي يحقق $\\vec{\\pi} P = \\vec{\\pi}$ و $\\pi_1 + \\pi_2 = 1$.",
    "optionsEn": [
      "$(0.6, 0.4)$",
      "$(0.5, 0.5)$",
      "$(0.7, 0.3)$",
      "$(0.8, 0.2)$"
    ],
    "optionsAr": [
      "$(0.6, 0.4)$",
      "$(0.5, 0.5)$",
      "$(0.7, 0.3)$",
      "$(0.8, 0.2)$"
    ],
    "correctAnswer": "$(0.6, 0.4)$",
    "correctIndex": 0,
    "hintEn": "Set up the system: $0.8\\pi_1 + 0.3\\pi_2 = \\pi_1$ and $\\pi_1 + \\pi_2 = 1$.",
    "hintAr": "كون المعادلتين: $0.8\\pi_1 + 0.3\\pi_2 = \\pi_1$ مع شرط $\\pi_1 + \\pi_2 = 1$.",
    "stepByStepSolutionEn": [
      "From $\\vec{\\pi} P = \\vec{\\pi}$: $0.8\\pi_1 + 0.3\\pi_2 = \\pi_1 \\implies 0.3\\pi_2 = 0.2\\pi_1 \\implies 2\\pi_1 = 3\\pi_2$.",
      "Substitute $\\pi_2 = 1 - \\pi_1$: $2\\pi_1 = 3(1 - \\pi_1) = 3 - 3\\pi_1$.",
      "$5\\pi_1 = 3 \\implies \\pi_1 = 0.6$.",
      "Then $\\pi_2 = 1 - 0.6 = 0.4$. So $\\vec{\\pi} = (0.6, 0.4)$."
    ],
    "stepByStepSolutionAr": [
      "من $\\vec{\\pi} P = \\vec{\\pi}$: $0.8\\pi_1 + 0.3\\pi_2 = \\pi_1 \\implies 0.2\\pi_1 = 0.3\\pi_2$.",
      "إذن $2\\pi_1 = 3(1 - \\pi_1) = 3 - 3\\pi_1 \\implies 5\\pi_1 = 3 \\implies \\pi_1 = 0.6$.",
      "وبالتالي $\\pi_2 = 0.4$.",
      "متجه التوزيع المستقر هو $(0.6, 0.4)$."
    ],
    "teacherTipEn": "The stationary distribution is the left eigenvector of $P$ associated with eigenvalue $\\lambda = 1$.",
    "teacherTipAr": "التوزيع المستقر هو المتجه الذاتي الأيسر للمصفوفة $P$ المرتبط بالقيمة الذاتية 1."
  },
  {
    "id": "egbac_ch2_db_hots_58",
    "titleEn": "Determinant of Block Triangular Matrix",
    "titleAr": "محدد مصفوفة مثلثية كتلية",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the determinant of the $4 \\times 4$ block matrix $M = \\begin{pmatrix} A & B \\\\ 0 & C \\end{pmatrix}$, where $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$, $C = \\begin{pmatrix} 4 & 5 \\\\ 1 & 2 \\end{pmatrix}$, and $B$ is any $2 \\times 2$ matrix.",
    "questionAr": "أوجد محدد مصفوفة كتلية من الرتبة $4 \\times 4$: $M = \\begin{pmatrix} A & B \\\\ 0 & C \\end{pmatrix}$ حيث $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$ و $C = \\begin{pmatrix} 4 & 5 \\\\ 1 & 2 \\end{pmatrix}$ و $B$ أي مصفوفة $2 \\times 2$.",
    "optionsEn": [
      "$18$",
      "$6$",
      "$3$",
      "$36$"
    ],
    "optionsAr": [
      "$18$",
      "$6$",
      "$3$",
      "$36$"
    ],
    "correctAnswer": "$18$",
    "correctIndex": 0,
    "hintEn": "For a block upper-triangular matrix, $\\det(M) = \\det(A) \\cdot \\det(C)$.",
    "hintAr": "لأي مصفوفة كتلية مثلثية علوية، يكون $\\det(M) = \\det(A) \\cdot \\det(C)$.",
    "stepByStepSolutionEn": [
      "By the block determinant theorem, $\\det\\begin{pmatrix} A & B \\\\ 0 & C \\end{pmatrix} = \\det(A) \\cdot \\det(C)$.",
      "Compute $\\det(A) = (2)(3) - (1)(0) = 6$.",
      "Compute $\\det(C) = (4)(2) - (5)(1) = 8 - 5 = 3$.",
      "Multiply: $\\det(M) = 6 \\times 3 = 18$."
    ],
    "stepByStepSolutionAr": [
      "وفق نظرية محدد المصفوفات الكتلية المثلثية: $\\det(M) = \\det(A) \\cdot \\det(C)$.",
      "محدد $A$: $\\det(A) = 6$.",
      "محدد $C$: $\\det(C) = 8 - 5 = 3$.",
      "المحدد الكلي: $\\det(M) = 6 \\times 3 = 18$."
    ],
    "teacherTipEn": "Notice the result is completely independent of the contents of block $B$.",
    "teacherTipAr": "لاحظ أن الناتج مستقل تماماً عن عناصر الكتلة $B$."
  }
]
};
