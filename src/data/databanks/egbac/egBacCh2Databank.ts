import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_ch2_db_easy_01",
    "titleEn": "Rank of Upper Triangular Matrix #1",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 1",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 1 & 4 & -1 \\\\ 0 & 2 & 4 \\\\ 0 & 0 & 3 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 1 & 4 & -1 \\\\ 0 & 2 & 4 \\\\ 0 & 0 & 3 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 1 \\neq 0$, $a_{22} = 2 \\neq 0$, and $a_{33} = 3$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 1، 2، 3.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_02",
    "titleEn": "Rank of Upper Triangular Matrix #2",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 2",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 2 & 5 & -1 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 2 & 5 & -1 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 2 \\neq 0$, $a_{22} = 3 \\neq 0$, and $a_{33} = 4$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 2، 3، 4.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_03",
    "titleEn": "Rank of Upper Triangular Matrix #3",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 3",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 3 & 6 & -1 \\\\ 0 & 4 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 3 & 6 & -1 \\\\ 0 & 4 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 3 \\neq 0$, $a_{22} = 4 \\neq 0$, and $a_{33} = 0$.",
      "3. The number of non-zero rows is 2, so $\\text{rank}(A) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 3، 4، 0.",
      "٣. عدد الصفوف غير الصفرية هو 2، إذن $\\text{rank}(A) = 2$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_04",
    "titleEn": "Rank of Upper Triangular Matrix #4",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 4",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 4 & 7 & -1 \\\\ 0 & 5 & 4 \\\\ 0 & 0 & 6 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 4 & 7 & -1 \\\\ 0 & 5 & 4 \\\\ 0 & 0 & 6 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 4 \\neq 0$, $a_{22} = 5 \\neq 0$, and $a_{33} = 6$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 4، 5، 6.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_05",
    "titleEn": "Rank of Upper Triangular Matrix #5",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 5",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 5 & 8 & -1 \\\\ 0 & 6 & 4 \\\\ 0 & 0 & 7 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 5 & 8 & -1 \\\\ 0 & 6 & 4 \\\\ 0 & 0 & 7 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 5 \\neq 0$, $a_{22} = 6 \\neq 0$, and $a_{33} = 7$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 5، 6، 7.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_06",
    "titleEn": "Rank of Upper Triangular Matrix #6",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 6",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 6 & 9 & -1 \\\\ 0 & 7 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 6 & 9 & -1 \\\\ 0 & 7 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 6 \\neq 0$, $a_{22} = 7 \\neq 0$, and $a_{33} = 0$.",
      "3. The number of non-zero rows is 2, so $\\text{rank}(A) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 6، 7، 0.",
      "٣. عدد الصفوف غير الصفرية هو 2، إذن $\\text{rank}(A) = 2$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_07",
    "titleEn": "Rank of Upper Triangular Matrix #7",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 7",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 7 & 10 & -1 \\\\ 0 & 8 & 4 \\\\ 0 & 0 & 9 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 7 & 10 & -1 \\\\ 0 & 8 & 4 \\\\ 0 & 0 & 9 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 7 \\neq 0$, $a_{22} = 8 \\neq 0$, and $a_{33} = 9$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 7، 8، 9.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_08",
    "titleEn": "Rank of Upper Triangular Matrix #8",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 8",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 8 & 11 & -1 \\\\ 0 & 9 & 4 \\\\ 0 & 0 & 10 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 8 & 11 & -1 \\\\ 0 & 9 & 4 \\\\ 0 & 0 & 10 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 8 \\neq 0$, $a_{22} = 9 \\neq 0$, and $a_{33} = 10$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 8، 9، 10.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_09",
    "titleEn": "Rank of Upper Triangular Matrix #9",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 9",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 9 & 12 & -1 \\\\ 0 & 10 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 9 & 12 & -1 \\\\ 0 & 10 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 9 \\neq 0$, $a_{22} = 10 \\neq 0$, and $a_{33} = 0$.",
      "3. The number of non-zero rows is 2, so $\\text{rank}(A) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 9، 10، 0.",
      "٣. عدد الصفوف غير الصفرية هو 2، إذن $\\text{rank}(A) = 2$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_10",
    "titleEn": "Rank of Upper Triangular Matrix #10",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 10",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 10 & 13 & -1 \\\\ 0 & 11 & 4 \\\\ 0 & 0 & 12 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 10 & 13 & -1 \\\\ 0 & 11 & 4 \\\\ 0 & 0 & 12 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 10 \\neq 0$, $a_{22} = 11 \\neq 0$, and $a_{33} = 12$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 10، 11، 12.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_11",
    "titleEn": "Rank of Upper Triangular Matrix #11",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 11",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 11 & 14 & -1 \\\\ 0 & 12 & 4 \\\\ 0 & 0 & 13 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 11 & 14 & -1 \\\\ 0 & 12 & 4 \\\\ 0 & 0 & 13 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 11 \\neq 0$, $a_{22} = 12 \\neq 0$, and $a_{33} = 13$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 11، 12، 13.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_12",
    "titleEn": "Rank of Upper Triangular Matrix #12",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 12",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 12 & 15 & -1 \\\\ 0 & 13 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 12 & 15 & -1 \\\\ 0 & 13 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 12 \\neq 0$, $a_{22} = 13 \\neq 0$, and $a_{33} = 0$.",
      "3. The number of non-zero rows is 2, so $\\text{rank}(A) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 12، 13، 0.",
      "٣. عدد الصفوف غير الصفرية هو 2، إذن $\\text{rank}(A) = 2$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_13",
    "titleEn": "Rank of Upper Triangular Matrix #13",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 13",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 13 & 16 & -1 \\\\ 0 & 14 & 4 \\\\ 0 & 0 & 15 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 13 & 16 & -1 \\\\ 0 & 14 & 4 \\\\ 0 & 0 & 15 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 13 \\neq 0$, $a_{22} = 14 \\neq 0$, and $a_{33} = 15$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 13، 14، 15.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_14",
    "titleEn": "Rank of Upper Triangular Matrix #14",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 14",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 14 & 17 & -1 \\\\ 0 & 15 & 4 \\\\ 0 & 0 & 16 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 14 & 17 & -1 \\\\ 0 & 15 & 4 \\\\ 0 & 0 & 16 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 14 \\neq 0$, $a_{22} = 15 \\neq 0$, and $a_{33} = 16$.",
      "3. The number of non-zero rows is 3, so $\\text{rank}(A) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 14، 15، 16.",
      "٣. عدد الصفوف غير الصفرية هو 3، إذن $\\text{rank}(A) = 3$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_15",
    "titleEn": "Rank of Upper Triangular Matrix #15",
    "titleAr": "رتبة مصفوفة مثلية علوية رقم 15",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 15 & 18 & -1 \\\\ 0 & 16 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 15 & 18 & -1 \\\\ 0 & 16 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
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
    "hintEn": "For a triangular matrix, the rank equals the number of non-zero diagonal entries.",
    "hintAr": "في المصفوفة المثلثية، رتبة المصفوفة تساوي عدد العناصر غير الصفرية في القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Matrix $A$ is in upper-triangular form.",
      "2. The diagonal entries are $a_{11} = 15 \\neq 0$, $a_{22} = 16 \\neq 0$, and $a_{33} = 0$.",
      "3. The number of non-zero rows is 2, so $\\text{rank}(A) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. المصفوفة $A$ في الصورة المثلثية العلوية.",
      "٢. عناصر القطر الرئيسي هي 15، 16، 0.",
      "٣. عدد الصفوف غير الصفرية هو 2، إذن $\\text{rank}(A) = 2$."
    ],
    "teacherTipEn": "In echelon or triangular form, rank is immediately visible as the count of pivot entries.",
    "teacherTipAr": "في الصورة المدرجة أو المثلثية، تتحدد الرتبة مباشرة بعدد الصفوف غير الصفرية (المحاور)."
  },
  {
    "id": "egbac_ch2_db_easy_16",
    "titleEn": "Rouché-Capelli System Consistency #1",
    "titleAr": "توافق النظام وفق روتشيه-كابيلي رقم 1",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$), if $\\text{rank}(A) = 3$ and $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$)، إذا كانت $\\text{rank}(A) = 3$ و $\\text{rank}(A^*) = 3$، فما طبيعة مجموعة الحلول؟",
    "optionsEn": [
      "No solution (inconsistent system)",
      "Infinitely many solutions with 1 parameter",
      "Infinitely many solutions with 2 parameters",
      "Unique solution (consistent, 0 degrees of freedom)"
    ],
    "optionsAr": [
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول معتمد على وسيط واحد",
      "عدد لا نهائي من الحلول معتمد على وسيطين",
      "حل وحيد (نظام متوافق، صفر درجات حرية)"
    ],
    "correctAnswer": "Unique solution (consistent, 0 degrees of freedom)",
    "correctIndex": 3,
    "hintEn": "When rank(A) = rank(A*) = n (number of variables), the system has a unique solution.",
    "hintAr": "عندما تتساوى رتبة مصفوفة المعاملات مع رتبة المصفوفة الموسعة وتساوي عدد المجاهيل، يكون للنظام حل وحيد.",
    "stepByStepSolutionEn": [
      "1. According to the Rouché-Capelli theorem, $\\text{rank}(A) = \\text{rank}(A^*)$ means the system is consistent.",
      "2. Since $\\text{rank}(A) = n = 3$, the dimension of the solution space is $n - r = 3 - 3 = 0$.",
      "3. Hence, there exists a unique solution."
    ],
    "stepByStepSolutionAr": [
      "١. وفق نظرية روتشيه-كابيلي، تساوي رتبتي المعاملات والموسعة يعني أن النظام متوافق.",
      "٢. بما أن الرتبة تساوي عدد المجاهيل ٣، فإن عدد المتغيرات الحرة $n - r = 3 - 3 = 0$.",
      "٣. بالتالي للنظام حل وحيد."
    ],
    "teacherTipEn": "r(A) = r(A*) = n guarantees a unique single point of intersection in 3D.",
    "teacherTipAr": "تساوي الرتبتين مع عدد المجاهيل يضمن تقاطع المستويات الثلاثة في نقطة وحيدة."
  },
  {
    "id": "egbac_ch2_db_easy_17",
    "titleEn": "Rouché-Capelli Inconsistency #2",
    "titleAr": "عدم توافق النظام وفق روتشيه-كابيلي رقم 2",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns, if $\\text{rank}(A) = 2$ while the augmented matrix rank is $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي من ٣ معادلات في ٣ مجاهيل، إذا كانت $\\text{rank}(A) = 2$ بينما رتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما مجموعة الحل؟",
    "optionsEn": [
      "No solution (inconsistent system, empty set)",
      "Unique solution",
      "Infinitely many solutions (line in 3D)",
      "Infinitely many solutions (plane in 3D)"
    ],
    "optionsAr": [
      "لا يوجد حل (نظام غير متوافق، المجموعة الخالية)",
      "حل وحيد",
      "عدد لا نهائي من الحلول (خط مستقيم)",
      "عدد لا نهائي من الحلول (مستوى)"
    ],
    "correctAnswer": "No solution (inconsistent system, empty set)",
    "correctIndex": 0,
    "hintEn": "If rank(A) < rank(A*), the system contains a contradictory equation like 0 = c (c != 0).",
    "hintAr": "إذا كانت رتبة A أقل من رتبة A*، فإن النظام يحتوي على معادلة متناقضة من الشكل 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A)$ and $\\text{rank}(A^*)$.",
      "2. Here $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "3. By Rouché-Capelli, the system is inconsistent, so there is no solution (empty set $\\varnothing$)."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبتي $A$ و $A^*$.",
      "٢. هنا $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "٣. بحسب نظرية روتشيه-كابيلي، النظام غير متوافق ومجموعة الحل هي $\\varnothing$."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank(A*), no solution can possibly exist.",
    "teacherTipAr": "إذا كانت رتبة المعاملات أقل قطعا من رتبة الموسعة، يستحيل وجود أي حل."
  },
  {
    "id": "egbac_ch2_db_easy_18",
    "titleEn": "Rouché-Capelli Dependent System #3",
    "titleAr": "نظام غير محدد وفق روتشيه-كابيلي رقم 3",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$, if $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how many free parameters describe the solution set?",
    "questionAr": "لـ ٣ مجاهيل في $\\mathbb{R}^3$، إذا كانت $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكم وسيطاً حراً يصف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point",
      "Infinitely many solutions depending on 1 parameter (a straight line)",
      "No solution (inconsistent)",
      "Infinitely many solutions depending on 2 parameters (a plane)"
    ],
    "optionsAr": [
      "حل وحيد متمثل في نقطة",
      "عدد لا نهائي من الحلول معتمد على وسيط واحد (خط مستقيم)",
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول معتمد على وسيطين (مستوى)"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 parameter (a straight line)",
    "correctIndex": 1,
    "hintEn": "Degrees of freedom = number of unknowns - rank = 3 - 2 = 1.",
    "hintAr": "عدد المتغيرات الحرة = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ the system is consistent.",
      "2. Degrees of freedom = $n - r = 3 - 2 = 1$.",
      "3. The solution set forms a 1-dimensional affine subspace (a line in $\\mathbb{R}^3$)."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. عدد المعلمات الحرة = $n - r = 3 - 2 = 1$.",
      "٣. مجموعة الحلول تمثل فضاءً تآلفياً أحادي البعد (مستقيم في الفراغ)."
    ],
    "teacherTipEn": "Each unit reduction in rank below n adds one dimension to the solution set.",
    "teacherTipAr": "كل نقص بمقدار واحد في الرتبة عن عدد المجاهيل يضيف بعداً واحداً لفضاء الحلول."
  },
  {
    "id": "egbac_ch2_db_easy_19",
    "titleEn": "Rouché-Capelli System Consistency #4",
    "titleAr": "توافق النظام وفق روتشيه-كابيلي رقم 4",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$), if $\\text{rank}(A) = 3$ and $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$)، إذا كانت $\\text{rank}(A) = 3$ و $\\text{rank}(A^*) = 3$، فما طبيعة مجموعة الحلول؟",
    "optionsEn": [
      "No solution (inconsistent system)",
      "Infinitely many solutions with 1 parameter",
      "Unique solution (consistent, 0 degrees of freedom)",
      "Infinitely many solutions with 2 parameters"
    ],
    "optionsAr": [
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول معتمد على وسيط واحد",
      "حل وحيد (نظام متوافق، صفر درجات حرية)",
      "عدد لا نهائي من الحلول معتمد على وسيطين"
    ],
    "correctAnswer": "Unique solution (consistent, 0 degrees of freedom)",
    "correctIndex": 2,
    "hintEn": "When rank(A) = rank(A*) = n (number of variables), the system has a unique solution.",
    "hintAr": "عندما تتساوى رتبة مصفوفة المعاملات مع رتبة المصفوفة الموسعة وتساوي عدد المجاهيل، يكون للنظام حل وحيد.",
    "stepByStepSolutionEn": [
      "1. According to the Rouché-Capelli theorem, $\\text{rank}(A) = \\text{rank}(A^*)$ means the system is consistent.",
      "2. Since $\\text{rank}(A) = n = 3$, the dimension of the solution space is $n - r = 3 - 3 = 0$.",
      "3. Hence, there exists a unique solution."
    ],
    "stepByStepSolutionAr": [
      "١. وفق نظرية روتشيه-كابيلي، تساوي رتبتي المعاملات والموسعة يعني أن النظام متوافق.",
      "٢. بما أن الرتبة تساوي عدد المجاهيل ٣، فإن عدد المتغيرات الحرة $n - r = 3 - 3 = 0$.",
      "٣. بالتالي للنظام حل وحيد."
    ],
    "teacherTipEn": "r(A) = r(A*) = n guarantees a unique single point of intersection in 3D.",
    "teacherTipAr": "تساوي الرتبتين مع عدد المجاهيل يضمن تقاطع المستويات الثلاثة في نقطة وحيدة."
  },
  {
    "id": "egbac_ch2_db_easy_20",
    "titleEn": "Rouché-Capelli Inconsistency #5",
    "titleAr": "عدم توافق النظام وفق روتشيه-كابيلي رقم 5",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns, if $\\text{rank}(A) = 2$ while the augmented matrix rank is $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي من ٣ معادلات في ٣ مجاهيل، إذا كانت $\\text{rank}(A) = 2$ بينما رتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما مجموعة الحل؟",
    "optionsEn": [
      "Unique solution",
      "Infinitely many solutions (line in 3D)",
      "Infinitely many solutions (plane in 3D)",
      "No solution (inconsistent system, empty set)"
    ],
    "optionsAr": [
      "حل وحيد",
      "عدد لا نهائي من الحلول (خط مستقيم)",
      "عدد لا نهائي من الحلول (مستوى)",
      "لا يوجد حل (نظام غير متوافق، المجموعة الخالية)"
    ],
    "correctAnswer": "No solution (inconsistent system, empty set)",
    "correctIndex": 3,
    "hintEn": "If rank(A) < rank(A*), the system contains a contradictory equation like 0 = c (c != 0).",
    "hintAr": "إذا كانت رتبة A أقل من رتبة A*، فإن النظام يحتوي على معادلة متناقضة من الشكل 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A)$ and $\\text{rank}(A^*)$.",
      "2. Here $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "3. By Rouché-Capelli, the system is inconsistent, so there is no solution (empty set $\\varnothing$)."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبتي $A$ و $A^*$.",
      "٢. هنا $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "٣. بحسب نظرية روتشيه-كابيلي، النظام غير متوافق ومجموعة الحل هي $\\varnothing$."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank(A*), no solution can possibly exist.",
    "teacherTipAr": "إذا كانت رتبة المعاملات أقل قطعا من رتبة الموسعة، يستحيل وجود أي حل."
  },
  {
    "id": "egbac_ch2_db_easy_21",
    "titleEn": "Rouché-Capelli Dependent System #6",
    "titleAr": "نظام غير محدد وفق روتشيه-كابيلي رقم 6",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$, if $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how many free parameters describe the solution set?",
    "questionAr": "لـ ٣ مجاهيل في $\\mathbb{R}^3$، إذا كانت $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكم وسيطاً حراً يصف مجموعة الحلول؟",
    "optionsEn": [
      "Infinitely many solutions depending on 1 parameter (a straight line)",
      "Unique single solution point",
      "No solution (inconsistent)",
      "Infinitely many solutions depending on 2 parameters (a plane)"
    ],
    "optionsAr": [
      "عدد لا نهائي من الحلول معتمد على وسيط واحد (خط مستقيم)",
      "حل وحيد متمثل في نقطة",
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول معتمد على وسيطين (مستوى)"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 parameter (a straight line)",
    "correctIndex": 0,
    "hintEn": "Degrees of freedom = number of unknowns - rank = 3 - 2 = 1.",
    "hintAr": "عدد المتغيرات الحرة = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ the system is consistent.",
      "2. Degrees of freedom = $n - r = 3 - 2 = 1$.",
      "3. The solution set forms a 1-dimensional affine subspace (a line in $\\mathbb{R}^3$)."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. عدد المعلمات الحرة = $n - r = 3 - 2 = 1$.",
      "٣. مجموعة الحلول تمثل فضاءً تآلفياً أحادي البعد (مستقيم في الفراغ)."
    ],
    "teacherTipEn": "Each unit reduction in rank below n adds one dimension to the solution set.",
    "teacherTipAr": "كل نقص بمقدار واحد في الرتبة عن عدد المجاهيل يضيف بعداً واحداً لفضاء الحلول."
  },
  {
    "id": "egbac_ch2_db_easy_22",
    "titleEn": "Rouché-Capelli System Consistency #7",
    "titleAr": "توافق النظام وفق روتشيه-كابيلي رقم 7",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$), if $\\text{rank}(A) = 3$ and $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$)، إذا كانت $\\text{rank}(A) = 3$ و $\\text{rank}(A^*) = 3$، فما طبيعة مجموعة الحلول؟",
    "optionsEn": [
      "No solution (inconsistent system)",
      "Unique solution (consistent, 0 degrees of freedom)",
      "Infinitely many solutions with 1 parameter",
      "Infinitely many solutions with 2 parameters"
    ],
    "optionsAr": [
      "لا يوجد حل (نظام غير متوافق)",
      "حل وحيد (نظام متوافق، صفر درجات حرية)",
      "عدد لا نهائي من الحلول معتمد على وسيط واحد",
      "عدد لا نهائي من الحلول معتمد على وسيطين"
    ],
    "correctAnswer": "Unique solution (consistent, 0 degrees of freedom)",
    "correctIndex": 1,
    "hintEn": "When rank(A) = rank(A*) = n (number of variables), the system has a unique solution.",
    "hintAr": "عندما تتساوى رتبة مصفوفة المعاملات مع رتبة المصفوفة الموسعة وتساوي عدد المجاهيل، يكون للنظام حل وحيد.",
    "stepByStepSolutionEn": [
      "1. According to the Rouché-Capelli theorem, $\\text{rank}(A) = \\text{rank}(A^*)$ means the system is consistent.",
      "2. Since $\\text{rank}(A) = n = 3$, the dimension of the solution space is $n - r = 3 - 3 = 0$.",
      "3. Hence, there exists a unique solution."
    ],
    "stepByStepSolutionAr": [
      "١. وفق نظرية روتشيه-كابيلي، تساوي رتبتي المعاملات والموسعة يعني أن النظام متوافق.",
      "٢. بما أن الرتبة تساوي عدد المجاهيل ٣، فإن عدد المتغيرات الحرة $n - r = 3 - 3 = 0$.",
      "٣. بالتالي للنظام حل وحيد."
    ],
    "teacherTipEn": "r(A) = r(A*) = n guarantees a unique single point of intersection in 3D.",
    "teacherTipAr": "تساوي الرتبتين مع عدد المجاهيل يضمن تقاطع المستويات الثلاثة في نقطة وحيدة."
  },
  {
    "id": "egbac_ch2_db_easy_23",
    "titleEn": "Rouché-Capelli Inconsistency #8",
    "titleAr": "عدم توافق النظام وفق روتشيه-كابيلي رقم 8",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns, if $\\text{rank}(A) = 2$ while the augmented matrix rank is $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي من ٣ معادلات في ٣ مجاهيل، إذا كانت $\\text{rank}(A) = 2$ بينما رتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما مجموعة الحل؟",
    "optionsEn": [
      "Unique solution",
      "Infinitely many solutions (line in 3D)",
      "No solution (inconsistent system, empty set)",
      "Infinitely many solutions (plane in 3D)"
    ],
    "optionsAr": [
      "حل وحيد",
      "عدد لا نهائي من الحلول (خط مستقيم)",
      "لا يوجد حل (نظام غير متوافق، المجموعة الخالية)",
      "عدد لا نهائي من الحلول (مستوى)"
    ],
    "correctAnswer": "No solution (inconsistent system, empty set)",
    "correctIndex": 2,
    "hintEn": "If rank(A) < rank(A*), the system contains a contradictory equation like 0 = c (c != 0).",
    "hintAr": "إذا كانت رتبة A أقل من رتبة A*، فإن النظام يحتوي على معادلة متناقضة من الشكل 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A)$ and $\\text{rank}(A^*)$.",
      "2. Here $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "3. By Rouché-Capelli, the system is inconsistent, so there is no solution (empty set $\\varnothing$)."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبتي $A$ و $A^*$.",
      "٢. هنا $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "٣. بحسب نظرية روتشيه-كابيلي، النظام غير متوافق ومجموعة الحل هي $\\varnothing$."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank(A*), no solution can possibly exist.",
    "teacherTipAr": "إذا كانت رتبة المعاملات أقل قطعا من رتبة الموسعة، يستحيل وجود أي حل."
  },
  {
    "id": "egbac_ch2_db_easy_24",
    "titleEn": "Rouché-Capelli Dependent System #9",
    "titleAr": "نظام غير محدد وفق روتشيه-كابيلي رقم 9",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$, if $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how many free parameters describe the solution set?",
    "questionAr": "لـ ٣ مجاهيل في $\\mathbb{R}^3$، إذا كانت $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكم وسيطاً حراً يصف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point",
      "No solution (inconsistent)",
      "Infinitely many solutions depending on 2 parameters (a plane)",
      "Infinitely many solutions depending on 1 parameter (a straight line)"
    ],
    "optionsAr": [
      "حل وحيد متمثل في نقطة",
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول معتمد على وسيطين (مستوى)",
      "عدد لا نهائي من الحلول معتمد على وسيط واحد (خط مستقيم)"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 parameter (a straight line)",
    "correctIndex": 3,
    "hintEn": "Degrees of freedom = number of unknowns - rank = 3 - 2 = 1.",
    "hintAr": "عدد المتغيرات الحرة = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ the system is consistent.",
      "2. Degrees of freedom = $n - r = 3 - 2 = 1$.",
      "3. The solution set forms a 1-dimensional affine subspace (a line in $\\mathbb{R}^3$)."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. عدد المعلمات الحرة = $n - r = 3 - 2 = 1$.",
      "٣. مجموعة الحلول تمثل فضاءً تآلفياً أحادي البعد (مستقيم في الفراغ)."
    ],
    "teacherTipEn": "Each unit reduction in rank below n adds one dimension to the solution set.",
    "teacherTipAr": "كل نقص بمقدار واحد في الرتبة عن عدد المجاهيل يضيف بعداً واحداً لفضاء الحلول."
  },
  {
    "id": "egbac_ch2_db_easy_25",
    "titleEn": "Rouché-Capelli System Consistency #10",
    "titleAr": "توافق النظام وفق روتشيه-كابيلي رقم 10",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$), if $\\text{rank}(A) = 3$ and $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$)، إذا كانت $\\text{rank}(A) = 3$ و $\\text{rank}(A^*) = 3$، فما طبيعة مجموعة الحلول؟",
    "optionsEn": [
      "Unique solution (consistent, 0 degrees of freedom)",
      "No solution (inconsistent system)",
      "Infinitely many solutions with 1 parameter",
      "Infinitely many solutions with 2 parameters"
    ],
    "optionsAr": [
      "حل وحيد (نظام متوافق، صفر درجات حرية)",
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول معتمد على وسيط واحد",
      "عدد لا نهائي من الحلول معتمد على وسيطين"
    ],
    "correctAnswer": "Unique solution (consistent, 0 degrees of freedom)",
    "correctIndex": 0,
    "hintEn": "When rank(A) = rank(A*) = n (number of variables), the system has a unique solution.",
    "hintAr": "عندما تتساوى رتبة مصفوفة المعاملات مع رتبة المصفوفة الموسعة وتساوي عدد المجاهيل، يكون للنظام حل وحيد.",
    "stepByStepSolutionEn": [
      "1. According to the Rouché-Capelli theorem, $\\text{rank}(A) = \\text{rank}(A^*)$ means the system is consistent.",
      "2. Since $\\text{rank}(A) = n = 3$, the dimension of the solution space is $n - r = 3 - 3 = 0$.",
      "3. Hence, there exists a unique solution."
    ],
    "stepByStepSolutionAr": [
      "١. وفق نظرية روتشيه-كابيلي، تساوي رتبتي المعاملات والموسعة يعني أن النظام متوافق.",
      "٢. بما أن الرتبة تساوي عدد المجاهيل ٣، فإن عدد المتغيرات الحرة $n - r = 3 - 3 = 0$.",
      "٣. بالتالي للنظام حل وحيد."
    ],
    "teacherTipEn": "r(A) = r(A*) = n guarantees a unique single point of intersection in 3D.",
    "teacherTipAr": "تساوي الرتبتين مع عدد المجاهيل يضمن تقاطع المستويات الثلاثة في نقطة وحيدة."
  },
  {
    "id": "egbac_ch2_db_easy_26",
    "titleEn": "Rouché-Capelli Inconsistency #11",
    "titleAr": "عدم توافق النظام وفق روتشيه-كابيلي رقم 11",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns, if $\\text{rank}(A) = 2$ while the augmented matrix rank is $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي من ٣ معادلات في ٣ مجاهيل، إذا كانت $\\text{rank}(A) = 2$ بينما رتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما مجموعة الحل؟",
    "optionsEn": [
      "Unique solution",
      "No solution (inconsistent system, empty set)",
      "Infinitely many solutions (line in 3D)",
      "Infinitely many solutions (plane in 3D)"
    ],
    "optionsAr": [
      "حل وحيد",
      "لا يوجد حل (نظام غير متوافق، المجموعة الخالية)",
      "عدد لا نهائي من الحلول (خط مستقيم)",
      "عدد لا نهائي من الحلول (مستوى)"
    ],
    "correctAnswer": "No solution (inconsistent system, empty set)",
    "correctIndex": 1,
    "hintEn": "If rank(A) < rank(A*), the system contains a contradictory equation like 0 = c (c != 0).",
    "hintAr": "إذا كانت رتبة A أقل من رتبة A*، فإن النظام يحتوي على معادلة متناقضة من الشكل 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A)$ and $\\text{rank}(A^*)$.",
      "2. Here $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "3. By Rouché-Capelli, the system is inconsistent, so there is no solution (empty set $\\varnothing$)."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبتي $A$ و $A^*$.",
      "٢. هنا $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "٣. بحسب نظرية روتشيه-كابيلي، النظام غير متوافق ومجموعة الحل هي $\\varnothing$."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank(A*), no solution can possibly exist.",
    "teacherTipAr": "إذا كانت رتبة المعاملات أقل قطعا من رتبة الموسعة، يستحيل وجود أي حل."
  },
  {
    "id": "egbac_ch2_db_easy_27",
    "titleEn": "Rouché-Capelli Dependent System #12",
    "titleAr": "نظام غير محدد وفق روتشيه-كابيلي رقم 12",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$, if $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how many free parameters describe the solution set?",
    "questionAr": "لـ ٣ مجاهيل في $\\mathbb{R}^3$، إذا كانت $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكم وسيطاً حراً يصف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point",
      "No solution (inconsistent)",
      "Infinitely many solutions depending on 1 parameter (a straight line)",
      "Infinitely many solutions depending on 2 parameters (a plane)"
    ],
    "optionsAr": [
      "حل وحيد متمثل في نقطة",
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول معتمد على وسيط واحد (خط مستقيم)",
      "عدد لا نهائي من الحلول معتمد على وسيطين (مستوى)"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 parameter (a straight line)",
    "correctIndex": 2,
    "hintEn": "Degrees of freedom = number of unknowns - rank = 3 - 2 = 1.",
    "hintAr": "عدد المتغيرات الحرة = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ the system is consistent.",
      "2. Degrees of freedom = $n - r = 3 - 2 = 1$.",
      "3. The solution set forms a 1-dimensional affine subspace (a line in $\\mathbb{R}^3$)."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. عدد المعلمات الحرة = $n - r = 3 - 2 = 1$.",
      "٣. مجموعة الحلول تمثل فضاءً تآلفياً أحادي البعد (مستقيم في الفراغ)."
    ],
    "teacherTipEn": "Each unit reduction in rank below n adds one dimension to the solution set.",
    "teacherTipAr": "كل نقص بمقدار واحد في الرتبة عن عدد المجاهيل يضيف بعداً واحداً لفضاء الحلول."
  },
  {
    "id": "egbac_ch2_db_easy_28",
    "titleEn": "Rouché-Capelli System Consistency #13",
    "titleAr": "توافق النظام وفق روتشيه-كابيلي رقم 13",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns ($x, y, z$), if $\\text{rank}(A) = 3$ and $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي مكون من ٣ معادلات في ٣ مجاهيل ($x, y, z$)، إذا كانت $\\text{rank}(A) = 3$ و $\\text{rank}(A^*) = 3$، فما طبيعة مجموعة الحلول؟",
    "optionsEn": [
      "No solution (inconsistent system)",
      "Infinitely many solutions with 1 parameter",
      "Infinitely many solutions with 2 parameters",
      "Unique solution (consistent, 0 degrees of freedom)"
    ],
    "optionsAr": [
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول معتمد على وسيط واحد",
      "عدد لا نهائي من الحلول معتمد على وسيطين",
      "حل وحيد (نظام متوافق، صفر درجات حرية)"
    ],
    "correctAnswer": "Unique solution (consistent, 0 degrees of freedom)",
    "correctIndex": 3,
    "hintEn": "When rank(A) = rank(A*) = n (number of variables), the system has a unique solution.",
    "hintAr": "عندما تتساوى رتبة مصفوفة المعاملات مع رتبة المصفوفة الموسعة وتساوي عدد المجاهيل، يكون للنظام حل وحيد.",
    "stepByStepSolutionEn": [
      "1. According to the Rouché-Capelli theorem, $\\text{rank}(A) = \\text{rank}(A^*)$ means the system is consistent.",
      "2. Since $\\text{rank}(A) = n = 3$, the dimension of the solution space is $n - r = 3 - 3 = 0$.",
      "3. Hence, there exists a unique solution."
    ],
    "stepByStepSolutionAr": [
      "١. وفق نظرية روتشيه-كابيلي، تساوي رتبتي المعاملات والموسعة يعني أن النظام متوافق.",
      "٢. بما أن الرتبة تساوي عدد المجاهيل ٣، فإن عدد المتغيرات الحرة $n - r = 3 - 3 = 0$.",
      "٣. بالتالي للنظام حل وحيد."
    ],
    "teacherTipEn": "r(A) = r(A*) = n guarantees a unique single point of intersection in 3D.",
    "teacherTipAr": "تساوي الرتبتين مع عدد المجاهيل يضمن تقاطع المستويات الثلاثة في نقطة وحيدة."
  },
  {
    "id": "egbac_ch2_db_easy_29",
    "titleEn": "Rouché-Capelli Inconsistency #14",
    "titleAr": "عدم توافق النظام وفق روتشيه-كابيلي رقم 14",
    "difficulty": "easy",
    "questionEn": "For a linear system of 3 equations in 3 unknowns, if $\\text{rank}(A) = 2$ while the augmented matrix rank is $\\text{rank}(A^*) = 3$, what is the solution set?",
    "questionAr": "لنظام خطي من ٣ معادلات في ٣ مجاهيل، إذا كانت $\\text{rank}(A) = 2$ بينما رتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما مجموعة الحل؟",
    "optionsEn": [
      "No solution (inconsistent system, empty set)",
      "Unique solution",
      "Infinitely many solutions (line in 3D)",
      "Infinitely many solutions (plane in 3D)"
    ],
    "optionsAr": [
      "لا يوجد حل (نظام غير متوافق، المجموعة الخالية)",
      "حل وحيد",
      "عدد لا نهائي من الحلول (خط مستقيم)",
      "عدد لا نهائي من الحلول (مستوى)"
    ],
    "correctAnswer": "No solution (inconsistent system, empty set)",
    "correctIndex": 0,
    "hintEn": "If rank(A) < rank(A*), the system contains a contradictory equation like 0 = c (c != 0).",
    "hintAr": "إذا كانت رتبة A أقل من رتبة A*، فإن النظام يحتوي على معادلة متناقضة من الشكل 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Compare $\\text{rank}(A)$ and $\\text{rank}(A^*)$.",
      "2. Here $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "3. By Rouché-Capelli, the system is inconsistent, so there is no solution (empty set $\\varnothing$)."
    ],
    "stepByStepSolutionAr": [
      "١. مقارنة رتبتي $A$ و $A^*$.",
      "٢. هنا $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3$.",
      "٣. بحسب نظرية روتشيه-كابيلي، النظام غير متوافق ومجموعة الحل هي $\\varnothing$."
    ],
    "teacherTipEn": "Whenever rank(A) is strictly less than rank(A*), no solution can possibly exist.",
    "teacherTipAr": "إذا كانت رتبة المعاملات أقل قطعا من رتبة الموسعة، يستحيل وجود أي حل."
  },
  {
    "id": "egbac_ch2_db_easy_30",
    "titleEn": "Rouché-Capelli Dependent System #15",
    "titleAr": "نظام غير محدد وفق روتشيه-كابيلي رقم 15",
    "difficulty": "easy",
    "questionEn": "For 3 unknowns in $\\mathbb{R}^3$, if $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how many free parameters describe the solution set?",
    "questionAr": "لـ ٣ مجاهيل في $\\mathbb{R}^3$، إذا كانت $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكم وسيطاً حراً يصف مجموعة الحلول؟",
    "optionsEn": [
      "Unique single solution point",
      "Infinitely many solutions depending on 1 parameter (a straight line)",
      "No solution (inconsistent)",
      "Infinitely many solutions depending on 2 parameters (a plane)"
    ],
    "optionsAr": [
      "حل وحيد متمثل في نقطة",
      "عدد لا نهائي من الحلول معتمد على وسيط واحد (خط مستقيم)",
      "لا يوجد حل (نظام غير متوافق)",
      "عدد لا نهائي من الحلول معتمد على وسيطين (مستوى)"
    ],
    "correctAnswer": "Infinitely many solutions depending on 1 parameter (a straight line)",
    "correctIndex": 1,
    "hintEn": "Degrees of freedom = number of unknowns - rank = 3 - 2 = 1.",
    "hintAr": "عدد المتغيرات الحرة = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ the system is consistent.",
      "2. Degrees of freedom = $n - r = 3 - 2 = 1$.",
      "3. The solution set forms a 1-dimensional affine subspace (a line in $\\mathbb{R}^3$)."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. عدد المعلمات الحرة = $n - r = 3 - 2 = 1$.",
      "٣. مجموعة الحلول تمثل فضاءً تآلفياً أحادي البعد (مستقيم في الفراغ)."
    ],
    "teacherTipEn": "Each unit reduction in rank below n adds one dimension to the solution set.",
    "teacherTipAr": "كل نقص بمقدار واحد في الرتبة عن عدد المجاهيل يضيف بعداً واحداً لفضاء الحلول."
  },
  {
    "id": "egbac_ch2_db_easy_31",
    "titleEn": "Trace of a Diagonal Matrix #1",
    "titleAr": "أثر مصفوفة قطرية رقم 1",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the matrix $A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة $A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$.",
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
    "hintEn": "Trace is the sum of the main diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي للمصفوفة.",
    "stepByStepSolutionEn": [
      "1. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "2. $\\text{Tr}(A) = 1 + 2 + 3 = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "٢. $\\text{Tr}(A) = 1 + 2 + 3 = 6$."
    ],
    "teacherTipEn": "Trace also equals the sum of the eigenvalues: Tr(A) = sum(lambda_i).",
    "teacherTipAr": "أثر المصفوفة يساوي أيضاً مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_32",
    "titleEn": "Determinant of a Triangular Matrix #2",
    "titleAr": "محدد مصفوفة مثلثية رقم 2",
    "difficulty": "easy",
    "questionEn": "Find the determinant of the upper-triangular matrix $A = \\begin{pmatrix} 2 & 7 & -5 \\\\ 0 & 3 & 8 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
    "questionAr": "أوجد محدد المصفوفة المثلثية العلوية $A = \\begin{pmatrix} 2 & 7 & -5 \\\\ 0 & 3 & 8 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
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
    "hintEn": "The determinant of a triangular matrix is the product of its diagonal elements.",
    "hintAr": "محدد أي مصفوفة مثلثية هو حاصل ضرب عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. For an upper triangular matrix, $\\det(A) = \\prod_{i=1}^3 a_{ii}$.",
      "2. $\\det(A) = (2)(3)(4) = 24$."
    ],
    "stepByStepSolutionAr": [
      "١. لمصفوفة مثلثية علوية، المحدد هو حاصل ضرب عناصر القطر.",
      "٢. $\\det(A) = (2) \\times (3) \\times (4) = 24$."
    ],
    "teacherTipEn": "det(A) equals the product of all eigenvalues: det(A) = lambda_1 * lambda_2 * lambda_3.",
    "teacherTipAr": "المحدد يساوي دائماً حاصل ضرب جميع القيم الذاتية للمصفوفة."
  },
  {
    "id": "egbac_ch2_db_easy_33",
    "titleEn": "Trace of a Diagonal Matrix #3",
    "titleAr": "أثر مصفوفة قطرية رقم 3",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the matrix $A = \\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & 4 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة $A = \\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & 4 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$.",
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
    "hintEn": "Trace is the sum of the main diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي للمصفوفة.",
    "stepByStepSolutionEn": [
      "1. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "2. $\\text{Tr}(A) = 3 + 4 + 5 = 12$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "٢. $\\text{Tr}(A) = 3 + 4 + 5 = 12$."
    ],
    "teacherTipEn": "Trace also equals the sum of the eigenvalues: Tr(A) = sum(lambda_i).",
    "teacherTipAr": "أثر المصفوفة يساوي أيضاً مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_34",
    "titleEn": "Determinant of a Triangular Matrix #4",
    "titleAr": "محدد مصفوفة مثلثية رقم 4",
    "difficulty": "easy",
    "questionEn": "Find the determinant of the upper-triangular matrix $A = \\begin{pmatrix} 4 & 7 & -5 \\\\ 0 & 5 & 8 \\\\ 0 & 0 & 6 \\end{pmatrix}$.",
    "questionAr": "أوجد محدد المصفوفة المثلثية العلوية $A = \\begin{pmatrix} 4 & 7 & -5 \\\\ 0 & 5 & 8 \\\\ 0 & 0 & 6 \\end{pmatrix}$.",
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
    "hintEn": "The determinant of a triangular matrix is the product of its diagonal elements.",
    "hintAr": "محدد أي مصفوفة مثلثية هو حاصل ضرب عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. For an upper triangular matrix, $\\det(A) = \\prod_{i=1}^3 a_{ii}$.",
      "2. $\\det(A) = (4)(5)(6) = 120$."
    ],
    "stepByStepSolutionAr": [
      "١. لمصفوفة مثلثية علوية، المحدد هو حاصل ضرب عناصر القطر.",
      "٢. $\\det(A) = (4) \\times (5) \\times (6) = 120$."
    ],
    "teacherTipEn": "det(A) equals the product of all eigenvalues: det(A) = lambda_1 * lambda_2 * lambda_3.",
    "teacherTipAr": "المحدد يساوي دائماً حاصل ضرب جميع القيم الذاتية للمصفوفة."
  },
  {
    "id": "egbac_ch2_db_easy_35",
    "titleEn": "Trace of a Diagonal Matrix #5",
    "titleAr": "أثر مصفوفة قطرية رقم 5",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the matrix $A = \\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 6 & 0 \\\\ 0 & 0 & 7 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة $A = \\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 6 & 0 \\\\ 0 & 0 & 7 \\end{pmatrix}$.",
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
    "hintEn": "Trace is the sum of the main diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي للمصفوفة.",
    "stepByStepSolutionEn": [
      "1. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "2. $\\text{Tr}(A) = 5 + 6 + 7 = 18$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "٢. $\\text{Tr}(A) = 5 + 6 + 7 = 18$."
    ],
    "teacherTipEn": "Trace also equals the sum of the eigenvalues: Tr(A) = sum(lambda_i).",
    "teacherTipAr": "أثر المصفوفة يساوي أيضاً مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_36",
    "titleEn": "Determinant of a Triangular Matrix #6",
    "titleAr": "محدد مصفوفة مثلثية رقم 6",
    "difficulty": "easy",
    "questionEn": "Find the determinant of the upper-triangular matrix $A = \\begin{pmatrix} 6 & 7 & -5 \\\\ 0 & 7 & 8 \\\\ 0 & 0 & 8 \\end{pmatrix}$.",
    "questionAr": "أوجد محدد المصفوفة المثلثية العلوية $A = \\begin{pmatrix} 6 & 7 & -5 \\\\ 0 & 7 & 8 \\\\ 0 & 0 & 8 \\end{pmatrix}$.",
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
    "hintEn": "The determinant of a triangular matrix is the product of its diagonal elements.",
    "hintAr": "محدد أي مصفوفة مثلثية هو حاصل ضرب عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. For an upper triangular matrix, $\\det(A) = \\prod_{i=1}^3 a_{ii}$.",
      "2. $\\det(A) = (6)(7)(8) = 336$."
    ],
    "stepByStepSolutionAr": [
      "١. لمصفوفة مثلثية علوية، المحدد هو حاصل ضرب عناصر القطر.",
      "٢. $\\det(A) = (6) \\times (7) \\times (8) = 336$."
    ],
    "teacherTipEn": "det(A) equals the product of all eigenvalues: det(A) = lambda_1 * lambda_2 * lambda_3.",
    "teacherTipAr": "المحدد يساوي دائماً حاصل ضرب جميع القيم الذاتية للمصفوفة."
  },
  {
    "id": "egbac_ch2_db_easy_37",
    "titleEn": "Trace of a Diagonal Matrix #7",
    "titleAr": "أثر مصفوفة قطرية رقم 7",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the matrix $A = \\begin{pmatrix} 7 & 0 & 0 \\\\ 0 & 8 & 0 \\\\ 0 & 0 & 9 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة $A = \\begin{pmatrix} 7 & 0 & 0 \\\\ 0 & 8 & 0 \\\\ 0 & 0 & 9 \\end{pmatrix}$.",
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
    "hintEn": "Trace is the sum of the main diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي للمصفوفة.",
    "stepByStepSolutionEn": [
      "1. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "2. $\\text{Tr}(A) = 7 + 8 + 9 = 24$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "٢. $\\text{Tr}(A) = 7 + 8 + 9 = 24$."
    ],
    "teacherTipEn": "Trace also equals the sum of the eigenvalues: Tr(A) = sum(lambda_i).",
    "teacherTipAr": "أثر المصفوفة يساوي أيضاً مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_38",
    "titleEn": "Determinant of a Triangular Matrix #8",
    "titleAr": "محدد مصفوفة مثلثية رقم 8",
    "difficulty": "easy",
    "questionEn": "Find the determinant of the upper-triangular matrix $A = \\begin{pmatrix} 8 & 7 & -5 \\\\ 0 & 9 & 8 \\\\ 0 & 0 & 10 \\end{pmatrix}$.",
    "questionAr": "أوجد محدد المصفوفة المثلثية العلوية $A = \\begin{pmatrix} 8 & 7 & -5 \\\\ 0 & 9 & 8 \\\\ 0 & 0 & 10 \\end{pmatrix}$.",
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
    "hintEn": "The determinant of a triangular matrix is the product of its diagonal elements.",
    "hintAr": "محدد أي مصفوفة مثلثية هو حاصل ضرب عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. For an upper triangular matrix, $\\det(A) = \\prod_{i=1}^3 a_{ii}$.",
      "2. $\\det(A) = (8)(9)(10) = 720$."
    ],
    "stepByStepSolutionAr": [
      "١. لمصفوفة مثلثية علوية، المحدد هو حاصل ضرب عناصر القطر.",
      "٢. $\\det(A) = (8) \\times (9) \\times (10) = 720$."
    ],
    "teacherTipEn": "det(A) equals the product of all eigenvalues: det(A) = lambda_1 * lambda_2 * lambda_3.",
    "teacherTipAr": "المحدد يساوي دائماً حاصل ضرب جميع القيم الذاتية للمصفوفة."
  },
  {
    "id": "egbac_ch2_db_easy_39",
    "titleEn": "Trace of a Diagonal Matrix #9",
    "titleAr": "أثر مصفوفة قطرية رقم 9",
    "difficulty": "easy",
    "questionEn": "Compute the trace $\\text{Tr}(A)$ of the matrix $A = \\begin{pmatrix} 9 & 0 & 0 \\\\ 0 & 10 & 0 \\\\ 0 & 0 & 11 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $\\text{Tr}(A)$ للمصفوفة $A = \\begin{pmatrix} 9 & 0 & 0 \\\\ 0 & 10 & 0 \\\\ 0 & 0 & 11 \\end{pmatrix}$.",
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
    "hintEn": "Trace is the sum of the main diagonal entries.",
    "hintAr": "الأثر هو مجموع عناصر القطر الرئيسي للمصفوفة.",
    "stepByStepSolutionEn": [
      "1. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "2. $\\text{Tr}(A) = 9 + 10 + 11 = 30$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$.",
      "٢. $\\text{Tr}(A) = 9 + 10 + 11 = 30$."
    ],
    "teacherTipEn": "Trace also equals the sum of the eigenvalues: Tr(A) = sum(lambda_i).",
    "teacherTipAr": "أثر المصفوفة يساوي أيضاً مجموع قيمها الذاتية."
  },
  {
    "id": "egbac_ch2_db_easy_40",
    "titleEn": "Determinant of a Triangular Matrix #10",
    "titleAr": "محدد مصفوفة مثلثية رقم 10",
    "difficulty": "easy",
    "questionEn": "Find the determinant of the upper-triangular matrix $A = \\begin{pmatrix} 10 & 7 & -5 \\\\ 0 & 11 & 8 \\\\ 0 & 0 & 12 \\end{pmatrix}$.",
    "questionAr": "أوجد محدد المصفوفة المثلثية العلوية $A = \\begin{pmatrix} 10 & 7 & -5 \\\\ 0 & 11 & 8 \\\\ 0 & 0 & 12 \\end{pmatrix}$.",
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
    "hintEn": "The determinant of a triangular matrix is the product of its diagonal elements.",
    "hintAr": "محدد أي مصفوفة مثلثية هو حاصل ضرب عناصر قطرها الرئيسي.",
    "stepByStepSolutionEn": [
      "1. For an upper triangular matrix, $\\det(A) = \\prod_{i=1}^3 a_{ii}$.",
      "2. $\\det(A) = (10)(11)(12) = 1320$."
    ],
    "stepByStepSolutionAr": [
      "١. لمصفوفة مثلثية علوية، المحدد هو حاصل ضرب عناصر القطر.",
      "٢. $\\det(A) = (10) \\times (11) \\times (12) = 1320$."
    ],
    "teacherTipEn": "det(A) equals the product of all eigenvalues: det(A) = lambda_1 * lambda_2 * lambda_3.",
    "teacherTipAr": "المحدد يساوي دائماً حاصل ضرب جميع القيم الذاتية للمصفوفة."
  },
  {
    "id": "egbac_ch2_db_easy_41",
    "titleEn": "Normal Vector of an Affine Hyperplane #1",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 1",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 2x + 3y + 4z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 2x + 3y + 4z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (2, 3, 4)$",
      "$\\vec{n} = (2, -3, 4)$",
      "$\\vec{n} = (3, 2, 4)$",
      "$\\vec{n} = (3, 3, 3)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (2, 3, 4)$",
      "$\\vec{n} = (2, -3, 4)$",
      "$\\vec{n} = (3, 2, 4)$",
      "$\\vec{n} = (3, 3, 3)$"
    ],
    "correctAnswer": "$\\vec{n} = (2, 3, 4)$",
    "correctIndex": 0,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (2, 3, 4)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (2, 3, 4)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  },
  {
    "id": "egbac_ch2_db_easy_42",
    "titleEn": "Normal Vector of an Affine Hyperplane #2",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 2",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 3x + 4y + 5z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 3x + 4y + 5z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (3, -4, 5)$",
      "$\\vec{n} = (3, 4, 5)$",
      "$\\vec{n} = (4, 3, 5)$",
      "$\\vec{n} = (4, 4, 4)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (3, -4, 5)$",
      "$\\vec{n} = (3, 4, 5)$",
      "$\\vec{n} = (4, 3, 5)$",
      "$\\vec{n} = (4, 4, 4)$"
    ],
    "correctAnswer": "$\\vec{n} = (3, 4, 5)$",
    "correctIndex": 1,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (3, 4, 5)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (3, 4, 5)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  },
  {
    "id": "egbac_ch2_db_easy_43",
    "titleEn": "Normal Vector of an Affine Hyperplane #3",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 3",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 4x + 5y + 6z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 4x + 5y + 6z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (4, -5, 6)$",
      "$\\vec{n} = (5, 4, 6)$",
      "$\\vec{n} = (4, 5, 6)$",
      "$\\vec{n} = (5, 5, 5)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (4, -5, 6)$",
      "$\\vec{n} = (5, 4, 6)$",
      "$\\vec{n} = (4, 5, 6)$",
      "$\\vec{n} = (5, 5, 5)$"
    ],
    "correctAnswer": "$\\vec{n} = (4, 5, 6)$",
    "correctIndex": 2,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (4, 5, 6)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (4, 5, 6)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  },
  {
    "id": "egbac_ch2_db_easy_44",
    "titleEn": "Normal Vector of an Affine Hyperplane #4",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 4",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 5x + 6y + 7z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 5x + 6y + 7z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (5, -6, 7)$",
      "$\\vec{n} = (6, 5, 7)$",
      "$\\vec{n} = (6, 6, 6)$",
      "$\\vec{n} = (5, 6, 7)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (5, -6, 7)$",
      "$\\vec{n} = (6, 5, 7)$",
      "$\\vec{n} = (6, 6, 6)$",
      "$\\vec{n} = (5, 6, 7)$"
    ],
    "correctAnswer": "$\\vec{n} = (5, 6, 7)$",
    "correctIndex": 3,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (5, 6, 7)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (5, 6, 7)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  },
  {
    "id": "egbac_ch2_db_easy_45",
    "titleEn": "Normal Vector of an Affine Hyperplane #5",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 5",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 6x + 7y + 8z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 6x + 7y + 8z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (6, 7, 8)$",
      "$\\vec{n} = (6, -7, 8)$",
      "$\\vec{n} = (7, 6, 8)$",
      "$\\vec{n} = (7, 7, 7)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (6, 7, 8)$",
      "$\\vec{n} = (6, -7, 8)$",
      "$\\vec{n} = (7, 6, 8)$",
      "$\\vec{n} = (7, 7, 7)$"
    ],
    "correctAnswer": "$\\vec{n} = (6, 7, 8)$",
    "correctIndex": 0,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (6, 7, 8)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (6, 7, 8)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  },
  {
    "id": "egbac_ch2_db_easy_46",
    "titleEn": "Normal Vector of an Affine Hyperplane #6",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 6",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 7x + 8y + 9z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 7x + 8y + 9z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (7, -8, 9)$",
      "$\\vec{n} = (7, 8, 9)$",
      "$\\vec{n} = (8, 7, 9)$",
      "$\\vec{n} = (8, 8, 8)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (7, -8, 9)$",
      "$\\vec{n} = (7, 8, 9)$",
      "$\\vec{n} = (8, 7, 9)$",
      "$\\vec{n} = (8, 8, 8)$"
    ],
    "correctAnswer": "$\\vec{n} = (7, 8, 9)$",
    "correctIndex": 1,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (7, 8, 9)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (7, 8, 9)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  },
  {
    "id": "egbac_ch2_db_easy_47",
    "titleEn": "Normal Vector of an Affine Hyperplane #7",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 7",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 8x + 9y + 10z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 8x + 9y + 10z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (8, -9, 10)$",
      "$\\vec{n} = (9, 8, 10)$",
      "$\\vec{n} = (8, 9, 10)$",
      "$\\vec{n} = (9, 9, 9)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (8, -9, 10)$",
      "$\\vec{n} = (9, 8, 10)$",
      "$\\vec{n} = (8, 9, 10)$",
      "$\\vec{n} = (9, 9, 9)$"
    ],
    "correctAnswer": "$\\vec{n} = (8, 9, 10)$",
    "correctIndex": 2,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (8, 9, 10)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (8, 9, 10)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  },
  {
    "id": "egbac_ch2_db_easy_48",
    "titleEn": "Normal Vector of an Affine Hyperplane #8",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 8",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 9x + 10y + 11z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 9x + 10y + 11z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (9, -10, 11)$",
      "$\\vec{n} = (10, 9, 11)$",
      "$\\vec{n} = (10, 10, 10)$",
      "$\\vec{n} = (9, 10, 11)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (9, -10, 11)$",
      "$\\vec{n} = (10, 9, 11)$",
      "$\\vec{n} = (10, 10, 10)$",
      "$\\vec{n} = (9, 10, 11)$"
    ],
    "correctAnswer": "$\\vec{n} = (9, 10, 11)$",
    "correctIndex": 3,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (9, 10, 11)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (9, 10, 11)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  },
  {
    "id": "egbac_ch2_db_easy_49",
    "titleEn": "Normal Vector of an Affine Hyperplane #9",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 9",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 10x + 11y + 12z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 10x + 11y + 12z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (10, 11, 12)$",
      "$\\vec{n} = (10, -11, 12)$",
      "$\\vec{n} = (11, 10, 12)$",
      "$\\vec{n} = (11, 11, 11)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (10, 11, 12)$",
      "$\\vec{n} = (10, -11, 12)$",
      "$\\vec{n} = (11, 10, 12)$",
      "$\\vec{n} = (11, 11, 11)$"
    ],
    "correctAnswer": "$\\vec{n} = (10, 11, 12)$",
    "correctIndex": 0,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (10, 11, 12)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (10, 11, 12)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  },
  {
    "id": "egbac_ch2_db_easy_50",
    "titleEn": "Normal Vector of an Affine Hyperplane #10",
    "titleAr": "المتجه العمودي لمستوى تآلفي رقم 10",
    "difficulty": "easy",
    "questionEn": "Identify a normal vector $\\vec{n}$ to the 2-dimensional affine subspace (plane) in $\\mathbb{R}^3$ given by $P: 11x + 12y + 13z - 15 = 0$.",
    "questionAr": "حدد المتجه العمودي $\\vec{n}$ على المستوى التآلفي ثنائي البعد في $\\mathbb{R}^3$ المعرف بالمعادلة $P: 11x + 12y + 13z - 15 = 0$.",
    "optionsEn": [
      "$\\vec{n} = (11, -12, 13)$",
      "$\\vec{n} = (11, 12, 13)$",
      "$\\vec{n} = (12, 11, 13)$",
      "$\\vec{n} = (12, 12, 12)$"
    ],
    "optionsAr": [
      "$\\vec{n} = (11, -12, 13)$",
      "$\\vec{n} = (11, 12, 13)$",
      "$\\vec{n} = (12, 11, 13)$",
      "$\\vec{n} = (12, 12, 12)$"
    ],
    "correctAnswer": "$\\vec{n} = (11, 12, 13)$",
    "correctIndex": 1,
    "hintEn": "The coefficients of x, y, and z form the components of the normal vector.",
    "hintAr": "معاملات س، ص، ع تمثل مركبات المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. The Cartesian equation of a plane is $Ax + By + Cz + D = 0$.",
      "2. The vector orthogonal to the plane is $\\vec{n} = (A, B, C)$.",
      "3. Reading coefficients gives $\\vec{n} = (11, 12, 13)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة الديكارتية للمستوى هي $Ax + By + Cz + D = 0$.",
      "٢. المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "٣. بقراءة المعاملات نجد $\\vec{n} = (11, 12, 13)$."
    ],
    "teacherTipEn": "In R^3, a hyperplane has codimension 1, meaning its dimension is 3 - 1 = 2.",
    "teacherTipAr": "في الفضاء R^3، المستوى الفوقي له كوديمينشن 1، أي بعده 3 - 1 = 2."
  }
],
  medium: [
  {
    "id": "egbac_ch2_db_med_01",
    "titleEn": "Rank Reduction Parameter #1",
    "titleAr": "معامل خفض الرتبة رقم 1",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -1$",
      "$k = 1$",
      "$k = -3$",
      "$k = 3$"
    ],
    "optionsAr": [
      "$k = -1$",
      "$k = 1$",
      "$k = -3$",
      "$k = 3$"
    ],
    "correctAnswer": "$k = -1$",
    "correctIndex": 0,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 1 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 1(2) = k - 1 + 2$.",
      "3. Setting $\\det(A) = 0 \\implies k + 1 = 0 \\implies k = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 1(2 - 0) = k - 1 + 2$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 2 = 0 \\implies k = -1$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_02",
    "titleEn": "Rank Reduction Parameter #2",
    "titleAr": "معامل خفض الرتبة رقم 2",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -1$",
      "$k = -3$",
      "$k = -5$",
      "$k = 1$"
    ],
    "optionsAr": [
      "$k = -1$",
      "$k = -3$",
      "$k = -5$",
      "$k = 1$"
    ],
    "correctAnswer": "$k = -3$",
    "correctIndex": 1,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 2 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 2(2) = k - 1 + 4$.",
      "3. Setting $\\det(A) = 0 \\implies k + 3 = 0 \\implies k = -3$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 2(2 - 0) = k - 1 + 4$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 4 = 0 \\implies k = -3$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_03",
    "titleEn": "Rank Reduction Parameter #3",
    "titleAr": "معامل خفض الرتبة رقم 3",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -3$",
      "$k = -7$",
      "$k = -5$",
      "$k = -1$"
    ],
    "optionsAr": [
      "$k = -3$",
      "$k = -7$",
      "$k = -5$",
      "$k = -1$"
    ],
    "correctAnswer": "$k = -5$",
    "correctIndex": 2,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 3 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 3(2) = k - 1 + 6$.",
      "3. Setting $\\det(A) = 0 \\implies k + 5 = 0 \\implies k = -5$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 3(2 - 0) = k - 1 + 6$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 6 = 0 \\implies k = -5$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_04",
    "titleEn": "Rank Reduction Parameter #4",
    "titleAr": "معامل خفض الرتبة رقم 4",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 4 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 4 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -5$",
      "$k = -9$",
      "$k = -3$",
      "$k = -7$"
    ],
    "optionsAr": [
      "$k = -5$",
      "$k = -9$",
      "$k = -3$",
      "$k = -7$"
    ],
    "correctAnswer": "$k = -7$",
    "correctIndex": 3,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 4 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 4(2) = k - 1 + 8$.",
      "3. Setting $\\det(A) = 0 \\implies k + 7 = 0 \\implies k = -7$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 4(2 - 0) = k - 1 + 8$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 8 = 0 \\implies k = -7$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_05",
    "titleEn": "Rank Reduction Parameter #5",
    "titleAr": "معامل خفض الرتبة رقم 5",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 5 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 5 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -9$",
      "$k = -7$",
      "$k = -11$",
      "$k = -5$"
    ],
    "optionsAr": [
      "$k = -9$",
      "$k = -7$",
      "$k = -11$",
      "$k = -5$"
    ],
    "correctAnswer": "$k = -9$",
    "correctIndex": 0,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 5 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 5(2) = k - 1 + 10$.",
      "3. Setting $\\det(A) = 0 \\implies k + 9 = 0 \\implies k = -9$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 5(2 - 0) = k - 1 + 10$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 10 = 0 \\implies k = -9$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_06",
    "titleEn": "Rank Reduction Parameter #6",
    "titleAr": "معامل خفض الرتبة رقم 6",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 6 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 6 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -9$",
      "$k = -11$",
      "$k = -13$",
      "$k = -7$"
    ],
    "optionsAr": [
      "$k = -9$",
      "$k = -11$",
      "$k = -13$",
      "$k = -7$"
    ],
    "correctAnswer": "$k = -11$",
    "correctIndex": 1,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 6 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 6(2) = k - 1 + 12$.",
      "3. Setting $\\det(A) = 0 \\implies k + 11 = 0 \\implies k = -11$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 6(2 - 0) = k - 1 + 12$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 12 = 0 \\implies k = -11$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_07",
    "titleEn": "Rank Reduction Parameter #7",
    "titleAr": "معامل خفض الرتبة رقم 7",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 7 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 7 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -11$",
      "$k = -15$",
      "$k = -13$",
      "$k = -9$"
    ],
    "optionsAr": [
      "$k = -11$",
      "$k = -15$",
      "$k = -13$",
      "$k = -9$"
    ],
    "correctAnswer": "$k = -13$",
    "correctIndex": 2,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 7 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 7(2) = k - 1 + 14$.",
      "3. Setting $\\det(A) = 0 \\implies k + 13 = 0 \\implies k = -13$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 7(2 - 0) = k - 1 + 14$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 14 = 0 \\implies k = -13$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_08",
    "titleEn": "Rank Reduction Parameter #8",
    "titleAr": "معامل خفض الرتبة رقم 8",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 8 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 8 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -13$",
      "$k = -17$",
      "$k = -11$",
      "$k = -15$"
    ],
    "optionsAr": [
      "$k = -13$",
      "$k = -17$",
      "$k = -11$",
      "$k = -15$"
    ],
    "correctAnswer": "$k = -15$",
    "correctIndex": 3,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 8 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 8(2) = k - 1 + 16$.",
      "3. Setting $\\det(A) = 0 \\implies k + 15 = 0 \\implies k = -15$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 8(2 - 0) = k - 1 + 16$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 16 = 0 \\implies k = -15$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_09",
    "titleEn": "Rank Reduction Parameter #9",
    "titleAr": "معامل خفض الرتبة رقم 9",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 9 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 9 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -17$",
      "$k = -15$",
      "$k = -19$",
      "$k = -13$"
    ],
    "optionsAr": [
      "$k = -17$",
      "$k = -15$",
      "$k = -19$",
      "$k = -13$"
    ],
    "correctAnswer": "$k = -17$",
    "correctIndex": 0,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 9 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 9(2) = k - 1 + 18$.",
      "3. Setting $\\det(A) = 0 \\implies k + 17 = 0 \\implies k = -17$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 9(2 - 0) = k - 1 + 18$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 18 = 0 \\implies k = -17$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_10",
    "titleEn": "Rank Reduction Parameter #10",
    "titleAr": "معامل خفض الرتبة رقم 10",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 10 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 10 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -17$",
      "$k = -19$",
      "$k = -21$",
      "$k = -15$"
    ],
    "optionsAr": [
      "$k = -17$",
      "$k = -19$",
      "$k = -21$",
      "$k = -15$"
    ],
    "correctAnswer": "$k = -19$",
    "correctIndex": 1,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 10 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 10(2) = k - 1 + 20$.",
      "3. Setting $\\det(A) = 0 \\implies k + 19 = 0 \\implies k = -19$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 10(2 - 0) = k - 1 + 20$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 20 = 0 \\implies k = -19$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_11",
    "titleEn": "Rank Reduction Parameter #11",
    "titleAr": "معامل خفض الرتبة رقم 11",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 11 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 11 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -19$",
      "$k = -23$",
      "$k = -21$",
      "$k = -17$"
    ],
    "optionsAr": [
      "$k = -19$",
      "$k = -23$",
      "$k = -21$",
      "$k = -17$"
    ],
    "correctAnswer": "$k = -21$",
    "correctIndex": 2,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 11 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 11(2) = k - 1 + 22$.",
      "3. Setting $\\det(A) = 0 \\implies k + 21 = 0 \\implies k = -21$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 11(2 - 0) = k - 1 + 22$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 22 = 0 \\implies k = -21$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_12",
    "titleEn": "Rank Reduction Parameter #12",
    "titleAr": "معامل خفض الرتبة رقم 12",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 12 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 12 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -21$",
      "$k = -25$",
      "$k = -19$",
      "$k = -23$"
    ],
    "optionsAr": [
      "$k = -21$",
      "$k = -25$",
      "$k = -19$",
      "$k = -23$"
    ],
    "correctAnswer": "$k = -23$",
    "correctIndex": 3,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 12 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 12(2) = k - 1 + 24$.",
      "3. Setting $\\det(A) = 0 \\implies k + 23 = 0 \\implies k = -23$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 12(2 - 0) = k - 1 + 24$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 24 = 0 \\implies k = -23$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_13",
    "titleEn": "Rank Reduction Parameter #13",
    "titleAr": "معامل خفض الرتبة رقم 13",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 13 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 13 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -25$",
      "$k = -23$",
      "$k = -27$",
      "$k = -21$"
    ],
    "optionsAr": [
      "$k = -25$",
      "$k = -23$",
      "$k = -27$",
      "$k = -21$"
    ],
    "correctAnswer": "$k = -25$",
    "correctIndex": 0,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 13 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 13(2) = k - 1 + 26$.",
      "3. Setting $\\det(A) = 0 \\implies k + 25 = 0 \\implies k = -25$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 13(2 - 0) = k - 1 + 26$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 26 = 0 \\implies k = -25$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_14",
    "titleEn": "Rank Reduction Parameter #14",
    "titleAr": "معامل خفض الرتبة رقم 14",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 14 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 14 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -25$",
      "$k = -27$",
      "$k = -29$",
      "$k = -23$"
    ],
    "optionsAr": [
      "$k = -25$",
      "$k = -27$",
      "$k = -29$",
      "$k = -23$"
    ],
    "correctAnswer": "$k = -27$",
    "correctIndex": 1,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 14 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 14(2) = k - 1 + 28$.",
      "3. Setting $\\det(A) = 0 \\implies k + 27 = 0 \\implies k = -27$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 14(2 - 0) = k - 1 + 28$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 28 = 0 \\implies k = -27$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_15",
    "titleEn": "Rank Reduction Parameter #15",
    "titleAr": "معامل خفض الرتبة رقم 15",
    "difficulty": "medium",
    "questionEn": "For what value of $k$ does the matrix $A = \\begin{pmatrix} 1 & 0 & 15 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ have $\\text{rank}(A) < 3$?",
    "questionAr": "ما قيمة $k$ التي تجعل رتبة المصفوفة $A = \\begin{pmatrix} 1 & 0 & 15 \\\\ 2 & 1 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$ أقل من ٣؟",
    "optionsEn": [
      "$k = -27$",
      "$k = -31$",
      "$k = -29$",
      "$k = -25$"
    ],
    "optionsAr": [
      "$k = -27$",
      "$k = -31$",
      "$k = -29$",
      "$k = -25$"
    ],
    "correctAnswer": "$k = -29$",
    "correctIndex": 2,
    "hintEn": "Rank(A) < 3 if and only if det(A) = 0.",
    "hintAr": "رتبة المصفوفة تكون أقل من ٣ إذا وفقط إذا كانت قيمة المحدد تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Expand the determinant along row 1:",
      "   $\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 1 & k \\end{vmatrix} - 0 + 15 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 0 & 1 \\end{vmatrix}$.",
      "2. $\\det(A) = (k - 1) + 15(2) = k - 1 + 30$.",
      "3. Setting $\\det(A) = 0 \\implies k + 29 = 0 \\implies k = -29$."
    ],
    "stepByStepSolutionAr": [
      "١. فك المحدد باستخدام عناصر الصف الأول:",
      "   $\\det(A) = 1(k - 1) + 15(2 - 0) = k - 1 + 30$.",
      "٢. لكي تكون الرتبة أقل من ٣، يجب أن ينعدم المحدد: $\\det(A) = 0$.",
      "٣. إذن $k - 1 + 30 = 0 \\implies k = -29$."
    ],
    "teacherTipEn": "A square matrix of order n has rank < n exactly when det(A) = 0.",
    "teacherTipAr": "المصفوفة المربعة من الدرجة n تكون رتبتها أقل من n عندما ينعدم محددها تماماً."
  },
  {
    "id": "egbac_ch2_db_med_16",
    "titleEn": "Geometric Interpretation: Triangular Prism #1",
    "titleAr": "التفسير الهندسي: منشور ثلاثي رقم 1",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ are given such that no two are parallel. If the coefficient matrix has $\\text{rank}(A) = 2$ and the augmented matrix has $\\text{rank}(A^*) = 3$, what is their geometric relationship?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ لا يوجد بينها أي مستويين متوازيين. إذا كانت رتبة مصفوفة المعاملات $\\text{rank}(A) = 2$ ورتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما العلاقة الهندسية بينها؟",
    "optionsEn": [
      "The planes intersect in a single unique point",
      "The planes intersect in a single common line (pencil of planes)",
      "The three planes are strictly parallel and coincident",
      "The planes intersect pairwise in three parallel lines forming a triangular prism"
    ],
    "optionsAr": [
      "تتقاطع المستويات في نقطة وحيدة",
      "تتقاطع المستويات في خط مستقيم مشترك وحيد (حزمة مستويات)",
      "المستويات الثلاثة متوازية ومنطبقة تماماً",
      "تتقاطع المستويات مثنى مثنى في ثلاثة مستقيمات متوازية تشكل منشوراً ثلاثياً"
    ],
    "correctAnswer": "The planes intersect pairwise in three parallel lines forming a triangular prism",
    "correctIndex": 3,
    "hintEn": "r(A) = 2 means normal vectors span a 2D plane (parallel intersection lines), while r(A*) = 3 means no common point exists.",
    "hintAr": "r(A) = 2 تعني أن متجهات الأعمدة تقع في مستوى واحد (مستقيمات التقاطع متوازية)، بينما r(A*) = 3 تعني عدم وجود نقطة مشتركة.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ system is inconsistent (no common intersection).",
      "2. Since no two planes are parallel, each pair intersects in a line.",
      "3. Because $\\text{rank}(A) = 2$, these three intersection lines have the same direction vector and form the edges of an open triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ النظام غير متوافق (لا توجد نقطة تقاطع مشتركة).",
      "٢. بما أنه لا يوجد مستويان متوازيان، فإن كل مستويين يتقاطعان في خط مستقيم.",
      "٣. لأن $\\text{rank}(A) = 2$، فإن خطوط التقاطع الثلاثة متوازية ولها نفس متجه الاتجاه وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "r(A)=2 and r(A*)=3 with no parallel planes is the classic triangular prism case.",
    "teacherTipAr": "حالة r(A)=2 و r(A*)=3 مع عدم وجود مستويات متوازية تمثل هندسياً المنشور الثلاثي."
  },
  {
    "id": "egbac_ch2_db_med_17",
    "titleEn": "Geometric Interpretation: Plane Sheaf #2",
    "titleAr": "التفسير الهندسي: حزمة مستويات محورية رقم 2",
    "difficulty": "medium",
    "questionEn": "If three distinct planes in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how do they configure spatially?",
    "questionAr": "إذا كانت ثلاثة مستويات متمايزة في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكيف تترتب في الفراغ؟",
    "optionsEn": [
      "The planes belong to a coaxial sheaf (intersect in a single common line)",
      "The planes intersect at a single unique point",
      "The planes form the lateral faces of a triangular prism",
      "The three planes are mutually perpendicular"
    ],
    "optionsAr": [
      "المستويات تنتمي لحزمة محورية (تتقاطع جميعها في خط مستقيم مشترك وحيد)",
      "تتقاطع المستويات في نقطة وحيدة",
      "تشكل المستويات الأوجه الجانبية لمنشور ثلاثي",
      "المستويات الثلاثة متعامدة مثنى مثنى"
    ],
    "correctAnswer": "The planes belong to a coaxial sheaf (intersect in a single common line)",
    "correctIndex": 0,
    "hintEn": "Rank 2 consistent system means dimension of solution space is 3 - 2 = 1 (a line).",
    "hintAr": "نظام متوافق ذو رتبة ٢ يعني أن بعد فضاء الحلول هو ٣ - ٢ = ١ (خط مستقيم).",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ consistent system.",
      "2. Dimension of the solution manifold $= n - \\text{rank} = 3 - 2 = 1$.",
      "3. A 1-dimensional manifold in $\\mathbb{R}^3$ is a straight line, representing the axis of the plane sheaf."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. بعد فضاء الحل = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
      "٣. فضاء الحل ذو البعد ١ هو خط مستقيم، يمثل محور حزمة المستويات."
    ],
    "teacherTipEn": "A pencil or sheaf of planes is linear combinations: P_3 = alpha*P_1 + beta*P_2.",
    "teacherTipAr": "حزمة المستويات هي تركيب خطي: المستوى الثالث توليفة خطية للمستويين الأول والثاني."
  },
  {
    "id": "egbac_ch2_db_med_18",
    "titleEn": "Geometric Interpretation: Single Point Intersection #3",
    "titleAr": "التفسير الهندسي: تقاطع في نقطة وحيدة رقم 3",
    "difficulty": "medium",
    "questionEn": "If three planes in $\\mathbb{R}^3$ have normal vectors that are linearly independent, what is their intersection?",
    "questionAr": "إذا كانت المتجهات العمودية لثلاثة مستويات في $\\mathbb{R}^3$ مستقلة خطياً، فما تقاطع هذه المستويات؟",
    "optionsEn": [
      "The planes intersect along an infinite line",
      "The three planes intersect at a single unique vertex point",
      "The planes are completely parallel",
      "The planes form a prism with no mutual point"
    ],
    "optionsAr": [
      "تتقاطع المستويات على طول خط مستقيم لا نهائي",
      "تتقاطع المستويات الثلاثة في نقطة رأس وحيدة",
      "المستويات متوازية تماماً ولا تلتقي",
      "تشكل المستويات منشوراً بدون أي نقطة مشتركة"
    ],
    "correctAnswer": "The three planes intersect at a single unique vertex point",
    "correctIndex": 1,
    "hintEn": "Linearly independent normals mean det(A) != 0, so rank(A) = rank(A*) = 3.",
    "hintAr": "استقلال متجهات الأعمدة خطياً يعني أن محدد المعاملات لا يساوي صفراً، وبالتالي الرتبة تساوي ٣.",
    "stepByStepSolutionEn": [
      "1. Linearly independent normal vectors $\\implies \\det(A) \\neq 0$.",
      "2. Therefore, $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "3. Dimension of intersection is $3 - 3 = 0$, which is a unique point."
    ],
    "stepByStepSolutionAr": [
      "١. استقلال المتجهات العمودية خطياً $\\implies \\det(A) \\neq 0$.",
      "٢. بالتالي $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "٣. بعد التقاطع هو ٣ - ٣ = ٠، وهي نقطة وحيدة في الفضاء."
    ],
    "teacherTipEn": "det(n1, n2, n3) != 0 guarantees the three planes meet at a single corner point.",
    "teacherTipAr": "المحدد غير الصفري للمتجهات العمودية يضمن التقاء المستويات في نقطة زاوية وحيدة."
  },
  {
    "id": "egbac_ch2_db_med_19",
    "titleEn": "Geometric Interpretation: Triangular Prism #4",
    "titleAr": "التفسير الهندسي: منشور ثلاثي رقم 4",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ are given such that no two are parallel. If the coefficient matrix has $\\text{rank}(A) = 2$ and the augmented matrix has $\\text{rank}(A^*) = 3$, what is their geometric relationship?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ لا يوجد بينها أي مستويين متوازيين. إذا كانت رتبة مصفوفة المعاملات $\\text{rank}(A) = 2$ ورتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما العلاقة الهندسية بينها؟",
    "optionsEn": [
      "The planes intersect in a single unique point",
      "The planes intersect in a single common line (pencil of planes)",
      "The planes intersect pairwise in three parallel lines forming a triangular prism",
      "The three planes are strictly parallel and coincident"
    ],
    "optionsAr": [
      "تتقاطع المستويات في نقطة وحيدة",
      "تتقاطع المستويات في خط مستقيم مشترك وحيد (حزمة مستويات)",
      "تتقاطع المستويات مثنى مثنى في ثلاثة مستقيمات متوازية تشكل منشوراً ثلاثياً",
      "المستويات الثلاثة متوازية ومنطبقة تماماً"
    ],
    "correctAnswer": "The planes intersect pairwise in three parallel lines forming a triangular prism",
    "correctIndex": 2,
    "hintEn": "r(A) = 2 means normal vectors span a 2D plane (parallel intersection lines), while r(A*) = 3 means no common point exists.",
    "hintAr": "r(A) = 2 تعني أن متجهات الأعمدة تقع في مستوى واحد (مستقيمات التقاطع متوازية)، بينما r(A*) = 3 تعني عدم وجود نقطة مشتركة.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ system is inconsistent (no common intersection).",
      "2. Since no two planes are parallel, each pair intersects in a line.",
      "3. Because $\\text{rank}(A) = 2$, these three intersection lines have the same direction vector and form the edges of an open triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ النظام غير متوافق (لا توجد نقطة تقاطع مشتركة).",
      "٢. بما أنه لا يوجد مستويان متوازيان، فإن كل مستويين يتقاطعان في خط مستقيم.",
      "٣. لأن $\\text{rank}(A) = 2$، فإن خطوط التقاطع الثلاثة متوازية ولها نفس متجه الاتجاه وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "r(A)=2 and r(A*)=3 with no parallel planes is the classic triangular prism case.",
    "teacherTipAr": "حالة r(A)=2 و r(A*)=3 مع عدم وجود مستويات متوازية تمثل هندسياً المنشور الثلاثي."
  },
  {
    "id": "egbac_ch2_db_med_20",
    "titleEn": "Geometric Interpretation: Plane Sheaf #5",
    "titleAr": "التفسير الهندسي: حزمة مستويات محورية رقم 5",
    "difficulty": "medium",
    "questionEn": "If three distinct planes in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how do they configure spatially?",
    "questionAr": "إذا كانت ثلاثة مستويات متمايزة في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكيف تترتب في الفراغ؟",
    "optionsEn": [
      "The planes intersect at a single unique point",
      "The planes form the lateral faces of a triangular prism",
      "The three planes are mutually perpendicular",
      "The planes belong to a coaxial sheaf (intersect in a single common line)"
    ],
    "optionsAr": [
      "تتقاطع المستويات في نقطة وحيدة",
      "تشكل المستويات الأوجه الجانبية لمنشور ثلاثي",
      "المستويات الثلاثة متعامدة مثنى مثنى",
      "المستويات تنتمي لحزمة محورية (تتقاطع جميعها في خط مستقيم مشترك وحيد)"
    ],
    "correctAnswer": "The planes belong to a coaxial sheaf (intersect in a single common line)",
    "correctIndex": 3,
    "hintEn": "Rank 2 consistent system means dimension of solution space is 3 - 2 = 1 (a line).",
    "hintAr": "نظام متوافق ذو رتبة ٢ يعني أن بعد فضاء الحلول هو ٣ - ٢ = ١ (خط مستقيم).",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ consistent system.",
      "2. Dimension of the solution manifold $= n - \\text{rank} = 3 - 2 = 1$.",
      "3. A 1-dimensional manifold in $\\mathbb{R}^3$ is a straight line, representing the axis of the plane sheaf."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. بعد فضاء الحل = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
      "٣. فضاء الحل ذو البعد ١ هو خط مستقيم، يمثل محور حزمة المستويات."
    ],
    "teacherTipEn": "A pencil or sheaf of planes is linear combinations: P_3 = alpha*P_1 + beta*P_2.",
    "teacherTipAr": "حزمة المستويات هي تركيب خطي: المستوى الثالث توليفة خطية للمستويين الأول والثاني."
  },
  {
    "id": "egbac_ch2_db_med_21",
    "titleEn": "Geometric Interpretation: Single Point Intersection #6",
    "titleAr": "التفسير الهندسي: تقاطع في نقطة وحيدة رقم 6",
    "difficulty": "medium",
    "questionEn": "If three planes in $\\mathbb{R}^3$ have normal vectors that are linearly independent, what is their intersection?",
    "questionAr": "إذا كانت المتجهات العمودية لثلاثة مستويات في $\\mathbb{R}^3$ مستقلة خطياً، فما تقاطع هذه المستويات؟",
    "optionsEn": [
      "The three planes intersect at a single unique vertex point",
      "The planes intersect along an infinite line",
      "The planes are completely parallel",
      "The planes form a prism with no mutual point"
    ],
    "optionsAr": [
      "تتقاطع المستويات الثلاثة في نقطة رأس وحيدة",
      "تتقاطع المستويات على طول خط مستقيم لا نهائي",
      "المستويات متوازية تماماً ولا تلتقي",
      "تشكل المستويات منشوراً بدون أي نقطة مشتركة"
    ],
    "correctAnswer": "The three planes intersect at a single unique vertex point",
    "correctIndex": 0,
    "hintEn": "Linearly independent normals mean det(A) != 0, so rank(A) = rank(A*) = 3.",
    "hintAr": "استقلال متجهات الأعمدة خطياً يعني أن محدد المعاملات لا يساوي صفراً، وبالتالي الرتبة تساوي ٣.",
    "stepByStepSolutionEn": [
      "1. Linearly independent normal vectors $\\implies \\det(A) \\neq 0$.",
      "2. Therefore, $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "3. Dimension of intersection is $3 - 3 = 0$, which is a unique point."
    ],
    "stepByStepSolutionAr": [
      "١. استقلال المتجهات العمودية خطياً $\\implies \\det(A) \\neq 0$.",
      "٢. بالتالي $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "٣. بعد التقاطع هو ٣ - ٣ = ٠، وهي نقطة وحيدة في الفضاء."
    ],
    "teacherTipEn": "det(n1, n2, n3) != 0 guarantees the three planes meet at a single corner point.",
    "teacherTipAr": "المحدد غير الصفري للمتجهات العمودية يضمن التقاء المستويات في نقطة زاوية وحيدة."
  },
  {
    "id": "egbac_ch2_db_med_22",
    "titleEn": "Geometric Interpretation: Triangular Prism #7",
    "titleAr": "التفسير الهندسي: منشور ثلاثي رقم 7",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ are given such that no two are parallel. If the coefficient matrix has $\\text{rank}(A) = 2$ and the augmented matrix has $\\text{rank}(A^*) = 3$, what is their geometric relationship?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ لا يوجد بينها أي مستويين متوازيين. إذا كانت رتبة مصفوفة المعاملات $\\text{rank}(A) = 2$ ورتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما العلاقة الهندسية بينها؟",
    "optionsEn": [
      "The planes intersect in a single unique point",
      "The planes intersect pairwise in three parallel lines forming a triangular prism",
      "The planes intersect in a single common line (pencil of planes)",
      "The three planes are strictly parallel and coincident"
    ],
    "optionsAr": [
      "تتقاطع المستويات في نقطة وحيدة",
      "تتقاطع المستويات مثنى مثنى في ثلاثة مستقيمات متوازية تشكل منشوراً ثلاثياً",
      "تتقاطع المستويات في خط مستقيم مشترك وحيد (حزمة مستويات)",
      "المستويات الثلاثة متوازية ومنطبقة تماماً"
    ],
    "correctAnswer": "The planes intersect pairwise in three parallel lines forming a triangular prism",
    "correctIndex": 1,
    "hintEn": "r(A) = 2 means normal vectors span a 2D plane (parallel intersection lines), while r(A*) = 3 means no common point exists.",
    "hintAr": "r(A) = 2 تعني أن متجهات الأعمدة تقع في مستوى واحد (مستقيمات التقاطع متوازية)، بينما r(A*) = 3 تعني عدم وجود نقطة مشتركة.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ system is inconsistent (no common intersection).",
      "2. Since no two planes are parallel, each pair intersects in a line.",
      "3. Because $\\text{rank}(A) = 2$, these three intersection lines have the same direction vector and form the edges of an open triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ النظام غير متوافق (لا توجد نقطة تقاطع مشتركة).",
      "٢. بما أنه لا يوجد مستويان متوازيان، فإن كل مستويين يتقاطعان في خط مستقيم.",
      "٣. لأن $\\text{rank}(A) = 2$، فإن خطوط التقاطع الثلاثة متوازية ولها نفس متجه الاتجاه وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "r(A)=2 and r(A*)=3 with no parallel planes is the classic triangular prism case.",
    "teacherTipAr": "حالة r(A)=2 و r(A*)=3 مع عدم وجود مستويات متوازية تمثل هندسياً المنشور الثلاثي."
  },
  {
    "id": "egbac_ch2_db_med_23",
    "titleEn": "Geometric Interpretation: Plane Sheaf #8",
    "titleAr": "التفسير الهندسي: حزمة مستويات محورية رقم 8",
    "difficulty": "medium",
    "questionEn": "If three distinct planes in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how do they configure spatially?",
    "questionAr": "إذا كانت ثلاثة مستويات متمايزة في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكيف تترتب في الفراغ؟",
    "optionsEn": [
      "The planes intersect at a single unique point",
      "The planes form the lateral faces of a triangular prism",
      "The planes belong to a coaxial sheaf (intersect in a single common line)",
      "The three planes are mutually perpendicular"
    ],
    "optionsAr": [
      "تتقاطع المستويات في نقطة وحيدة",
      "تشكل المستويات الأوجه الجانبية لمنشور ثلاثي",
      "المستويات تنتمي لحزمة محورية (تتقاطع جميعها في خط مستقيم مشترك وحيد)",
      "المستويات الثلاثة متعامدة مثنى مثنى"
    ],
    "correctAnswer": "The planes belong to a coaxial sheaf (intersect in a single common line)",
    "correctIndex": 2,
    "hintEn": "Rank 2 consistent system means dimension of solution space is 3 - 2 = 1 (a line).",
    "hintAr": "نظام متوافق ذو رتبة ٢ يعني أن بعد فضاء الحلول هو ٣ - ٢ = ١ (خط مستقيم).",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ consistent system.",
      "2. Dimension of the solution manifold $= n - \\text{rank} = 3 - 2 = 1$.",
      "3. A 1-dimensional manifold in $\\mathbb{R}^3$ is a straight line, representing the axis of the plane sheaf."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. بعد فضاء الحل = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
      "٣. فضاء الحل ذو البعد ١ هو خط مستقيم، يمثل محور حزمة المستويات."
    ],
    "teacherTipEn": "A pencil or sheaf of planes is linear combinations: P_3 = alpha*P_1 + beta*P_2.",
    "teacherTipAr": "حزمة المستويات هي تركيب خطي: المستوى الثالث توليفة خطية للمستويين الأول والثاني."
  },
  {
    "id": "egbac_ch2_db_med_24",
    "titleEn": "Geometric Interpretation: Single Point Intersection #9",
    "titleAr": "التفسير الهندسي: تقاطع في نقطة وحيدة رقم 9",
    "difficulty": "medium",
    "questionEn": "If three planes in $\\mathbb{R}^3$ have normal vectors that are linearly independent, what is their intersection?",
    "questionAr": "إذا كانت المتجهات العمودية لثلاثة مستويات في $\\mathbb{R}^3$ مستقلة خطياً، فما تقاطع هذه المستويات؟",
    "optionsEn": [
      "The planes intersect along an infinite line",
      "The planes are completely parallel",
      "The planes form a prism with no mutual point",
      "The three planes intersect at a single unique vertex point"
    ],
    "optionsAr": [
      "تتقاطع المستويات على طول خط مستقيم لا نهائي",
      "المستويات متوازية تماماً ولا تلتقي",
      "تشكل المستويات منشوراً بدون أي نقطة مشتركة",
      "تتقاطع المستويات الثلاثة في نقطة رأس وحيدة"
    ],
    "correctAnswer": "The three planes intersect at a single unique vertex point",
    "correctIndex": 3,
    "hintEn": "Linearly independent normals mean det(A) != 0, so rank(A) = rank(A*) = 3.",
    "hintAr": "استقلال متجهات الأعمدة خطياً يعني أن محدد المعاملات لا يساوي صفراً، وبالتالي الرتبة تساوي ٣.",
    "stepByStepSolutionEn": [
      "1. Linearly independent normal vectors $\\implies \\det(A) \\neq 0$.",
      "2. Therefore, $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "3. Dimension of intersection is $3 - 3 = 0$, which is a unique point."
    ],
    "stepByStepSolutionAr": [
      "١. استقلال المتجهات العمودية خطياً $\\implies \\det(A) \\neq 0$.",
      "٢. بالتالي $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "٣. بعد التقاطع هو ٣ - ٣ = ٠، وهي نقطة وحيدة في الفضاء."
    ],
    "teacherTipEn": "det(n1, n2, n3) != 0 guarantees the three planes meet at a single corner point.",
    "teacherTipAr": "المحدد غير الصفري للمتجهات العمودية يضمن التقاء المستويات في نقطة زاوية وحيدة."
  },
  {
    "id": "egbac_ch2_db_med_25",
    "titleEn": "Geometric Interpretation: Triangular Prism #10",
    "titleAr": "التفسير الهندسي: منشور ثلاثي رقم 10",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ are given such that no two are parallel. If the coefficient matrix has $\\text{rank}(A) = 2$ and the augmented matrix has $\\text{rank}(A^*) = 3$, what is their geometric relationship?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ لا يوجد بينها أي مستويين متوازيين. إذا كانت رتبة مصفوفة المعاملات $\\text{rank}(A) = 2$ ورتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما العلاقة الهندسية بينها؟",
    "optionsEn": [
      "The planes intersect pairwise in three parallel lines forming a triangular prism",
      "The planes intersect in a single unique point",
      "The planes intersect in a single common line (pencil of planes)",
      "The three planes are strictly parallel and coincident"
    ],
    "optionsAr": [
      "تتقاطع المستويات مثنى مثنى في ثلاثة مستقيمات متوازية تشكل منشوراً ثلاثياً",
      "تتقاطع المستويات في نقطة وحيدة",
      "تتقاطع المستويات في خط مستقيم مشترك وحيد (حزمة مستويات)",
      "المستويات الثلاثة متوازية ومنطبقة تماماً"
    ],
    "correctAnswer": "The planes intersect pairwise in three parallel lines forming a triangular prism",
    "correctIndex": 0,
    "hintEn": "r(A) = 2 means normal vectors span a 2D plane (parallel intersection lines), while r(A*) = 3 means no common point exists.",
    "hintAr": "r(A) = 2 تعني أن متجهات الأعمدة تقع في مستوى واحد (مستقيمات التقاطع متوازية)، بينما r(A*) = 3 تعني عدم وجود نقطة مشتركة.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ system is inconsistent (no common intersection).",
      "2. Since no two planes are parallel, each pair intersects in a line.",
      "3. Because $\\text{rank}(A) = 2$, these three intersection lines have the same direction vector and form the edges of an open triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ النظام غير متوافق (لا توجد نقطة تقاطع مشتركة).",
      "٢. بما أنه لا يوجد مستويان متوازيان، فإن كل مستويين يتقاطعان في خط مستقيم.",
      "٣. لأن $\\text{rank}(A) = 2$، فإن خطوط التقاطع الثلاثة متوازية ولها نفس متجه الاتجاه وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "r(A)=2 and r(A*)=3 with no parallel planes is the classic triangular prism case.",
    "teacherTipAr": "حالة r(A)=2 و r(A*)=3 مع عدم وجود مستويات متوازية تمثل هندسياً المنشور الثلاثي."
  },
  {
    "id": "egbac_ch2_db_med_26",
    "titleEn": "Geometric Interpretation: Plane Sheaf #11",
    "titleAr": "التفسير الهندسي: حزمة مستويات محورية رقم 11",
    "difficulty": "medium",
    "questionEn": "If three distinct planes in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how do they configure spatially?",
    "questionAr": "إذا كانت ثلاثة مستويات متمايزة في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكيف تترتب في الفراغ؟",
    "optionsEn": [
      "The planes intersect at a single unique point",
      "The planes belong to a coaxial sheaf (intersect in a single common line)",
      "The planes form the lateral faces of a triangular prism",
      "The three planes are mutually perpendicular"
    ],
    "optionsAr": [
      "تتقاطع المستويات في نقطة وحيدة",
      "المستويات تنتمي لحزمة محورية (تتقاطع جميعها في خط مستقيم مشترك وحيد)",
      "تشكل المستويات الأوجه الجانبية لمنشور ثلاثي",
      "المستويات الثلاثة متعامدة مثنى مثنى"
    ],
    "correctAnswer": "The planes belong to a coaxial sheaf (intersect in a single common line)",
    "correctIndex": 1,
    "hintEn": "Rank 2 consistent system means dimension of solution space is 3 - 2 = 1 (a line).",
    "hintAr": "نظام متوافق ذو رتبة ٢ يعني أن بعد فضاء الحلول هو ٣ - ٢ = ١ (خط مستقيم).",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ consistent system.",
      "2. Dimension of the solution manifold $= n - \\text{rank} = 3 - 2 = 1$.",
      "3. A 1-dimensional manifold in $\\mathbb{R}^3$ is a straight line, representing the axis of the plane sheaf."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. بعد فضاء الحل = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
      "٣. فضاء الحل ذو البعد ١ هو خط مستقيم، يمثل محور حزمة المستويات."
    ],
    "teacherTipEn": "A pencil or sheaf of planes is linear combinations: P_3 = alpha*P_1 + beta*P_2.",
    "teacherTipAr": "حزمة المستويات هي تركيب خطي: المستوى الثالث توليفة خطية للمستويين الأول والثاني."
  },
  {
    "id": "egbac_ch2_db_med_27",
    "titleEn": "Geometric Interpretation: Single Point Intersection #12",
    "titleAr": "التفسير الهندسي: تقاطع في نقطة وحيدة رقم 12",
    "difficulty": "medium",
    "questionEn": "If three planes in $\\mathbb{R}^3$ have normal vectors that are linearly independent, what is their intersection?",
    "questionAr": "إذا كانت المتجهات العمودية لثلاثة مستويات في $\\mathbb{R}^3$ مستقلة خطياً، فما تقاطع هذه المستويات؟",
    "optionsEn": [
      "The planes intersect along an infinite line",
      "The planes are completely parallel",
      "The three planes intersect at a single unique vertex point",
      "The planes form a prism with no mutual point"
    ],
    "optionsAr": [
      "تتقاطع المستويات على طول خط مستقيم لا نهائي",
      "المستويات متوازية تماماً ولا تلتقي",
      "تتقاطع المستويات الثلاثة في نقطة رأس وحيدة",
      "تشكل المستويات منشوراً بدون أي نقطة مشتركة"
    ],
    "correctAnswer": "The three planes intersect at a single unique vertex point",
    "correctIndex": 2,
    "hintEn": "Linearly independent normals mean det(A) != 0, so rank(A) = rank(A*) = 3.",
    "hintAr": "استقلال متجهات الأعمدة خطياً يعني أن محدد المعاملات لا يساوي صفراً، وبالتالي الرتبة تساوي ٣.",
    "stepByStepSolutionEn": [
      "1. Linearly independent normal vectors $\\implies \\det(A) \\neq 0$.",
      "2. Therefore, $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "3. Dimension of intersection is $3 - 3 = 0$, which is a unique point."
    ],
    "stepByStepSolutionAr": [
      "١. استقلال المتجهات العمودية خطياً $\\implies \\det(A) \\neq 0$.",
      "٢. بالتالي $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "٣. بعد التقاطع هو ٣ - ٣ = ٠، وهي نقطة وحيدة في الفضاء."
    ],
    "teacherTipEn": "det(n1, n2, n3) != 0 guarantees the three planes meet at a single corner point.",
    "teacherTipAr": "المحدد غير الصفري للمتجهات العمودية يضمن التقاء المستويات في نقطة زاوية وحيدة."
  },
  {
    "id": "egbac_ch2_db_med_28",
    "titleEn": "Geometric Interpretation: Triangular Prism #13",
    "titleAr": "التفسير الهندسي: منشور ثلاثي رقم 13",
    "difficulty": "medium",
    "questionEn": "Three planes $P_1, P_2, P_3$ in $\\mathbb{R}^3$ are given such that no two are parallel. If the coefficient matrix has $\\text{rank}(A) = 2$ and the augmented matrix has $\\text{rank}(A^*) = 3$, what is their geometric relationship?",
    "questionAr": "ثلاثة مستويات $P_1, P_2, P_3$ في $\\mathbb{R}^3$ لا يوجد بينها أي مستويين متوازيين. إذا كانت رتبة مصفوفة المعاملات $\\text{rank}(A) = 2$ ورتبة المصفوفة الموسعة $\\text{rank}(A^*) = 3$، فما العلاقة الهندسية بينها؟",
    "optionsEn": [
      "The planes intersect in a single unique point",
      "The planes intersect in a single common line (pencil of planes)",
      "The three planes are strictly parallel and coincident",
      "The planes intersect pairwise in three parallel lines forming a triangular prism"
    ],
    "optionsAr": [
      "تتقاطع المستويات في نقطة وحيدة",
      "تتقاطع المستويات في خط مستقيم مشترك وحيد (حزمة مستويات)",
      "المستويات الثلاثة متوازية ومنطبقة تماماً",
      "تتقاطع المستويات مثنى مثنى في ثلاثة مستقيمات متوازية تشكل منشوراً ثلاثياً"
    ],
    "correctAnswer": "The planes intersect pairwise in three parallel lines forming a triangular prism",
    "correctIndex": 3,
    "hintEn": "r(A) = 2 means normal vectors span a 2D plane (parallel intersection lines), while r(A*) = 3 means no common point exists.",
    "hintAr": "r(A) = 2 تعني أن متجهات الأعمدة تقع في مستوى واحد (مستقيمات التقاطع متوازية)، بينما r(A*) = 3 تعني عدم وجود نقطة مشتركة.",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ system is inconsistent (no common intersection).",
      "2. Since no two planes are parallel, each pair intersects in a line.",
      "3. Because $\\text{rank}(A) = 2$, these three intersection lines have the same direction vector and form the edges of an open triangular prism."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = 2 < \\text{rank}(A^*) = 3 \\implies$ النظام غير متوافق (لا توجد نقطة تقاطع مشتركة).",
      "٢. بما أنه لا يوجد مستويان متوازيان، فإن كل مستويين يتقاطعان في خط مستقيم.",
      "٣. لأن $\\text{rank}(A) = 2$، فإن خطوط التقاطع الثلاثة متوازية ولها نفس متجه الاتجاه وتشكل منشوراً ثلاثياً."
    ],
    "teacherTipEn": "r(A)=2 and r(A*)=3 with no parallel planes is the classic triangular prism case.",
    "teacherTipAr": "حالة r(A)=2 و r(A*)=3 مع عدم وجود مستويات متوازية تمثل هندسياً المنشور الثلاثي."
  },
  {
    "id": "egbac_ch2_db_med_29",
    "titleEn": "Geometric Interpretation: Plane Sheaf #14",
    "titleAr": "التفسير الهندسي: حزمة مستويات محورية رقم 14",
    "difficulty": "medium",
    "questionEn": "If three distinct planes in $\\mathbb{R}^3$ satisfy $\\text{rank}(A) = \\text{rank}(A^*) = 2$, how do they configure spatially?",
    "questionAr": "إذا كانت ثلاثة مستويات متمايزة في $\\mathbb{R}^3$ تحقق $\\text{rank}(A) = \\text{rank}(A^*) = 2$، فكيف تترتب في الفراغ؟",
    "optionsEn": [
      "The planes belong to a coaxial sheaf (intersect in a single common line)",
      "The planes intersect at a single unique point",
      "The planes form the lateral faces of a triangular prism",
      "The three planes are mutually perpendicular"
    ],
    "optionsAr": [
      "المستويات تنتمي لحزمة محورية (تتقاطع جميعها في خط مستقيم مشترك وحيد)",
      "تتقاطع المستويات في نقطة وحيدة",
      "تشكل المستويات الأوجه الجانبية لمنشور ثلاثي",
      "المستويات الثلاثة متعامدة مثنى مثنى"
    ],
    "correctAnswer": "The planes belong to a coaxial sheaf (intersect in a single common line)",
    "correctIndex": 0,
    "hintEn": "Rank 2 consistent system means dimension of solution space is 3 - 2 = 1 (a line).",
    "hintAr": "نظام متوافق ذو رتبة ٢ يعني أن بعد فضاء الحلول هو ٣ - ٢ = ١ (خط مستقيم).",
    "stepByStepSolutionEn": [
      "1. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ consistent system.",
      "2. Dimension of the solution manifold $= n - \\text{rank} = 3 - 2 = 1$.",
      "3. A 1-dimensional manifold in $\\mathbb{R}^3$ is a straight line, representing the axis of the plane sheaf."
    ],
    "stepByStepSolutionAr": [
      "١. $\\text{rank}(A) = \\text{rank}(A^*) = 2 \\implies$ النظام متوافق.",
      "٢. بعد فضاء الحل = عدد المجاهيل - الرتبة = ٣ - ٢ = ١.",
      "٣. فضاء الحل ذو البعد ١ هو خط مستقيم، يمثل محور حزمة المستويات."
    ],
    "teacherTipEn": "A pencil or sheaf of planes is linear combinations: P_3 = alpha*P_1 + beta*P_2.",
    "teacherTipAr": "حزمة المستويات هي تركيب خطي: المستوى الثالث توليفة خطية للمستويين الأول والثاني."
  },
  {
    "id": "egbac_ch2_db_med_30",
    "titleEn": "Geometric Interpretation: Single Point Intersection #15",
    "titleAr": "التفسير الهندسي: تقاطع في نقطة وحيدة رقم 15",
    "difficulty": "medium",
    "questionEn": "If three planes in $\\mathbb{R}^3$ have normal vectors that are linearly independent, what is their intersection?",
    "questionAr": "إذا كانت المتجهات العمودية لثلاثة مستويات في $\\mathbb{R}^3$ مستقلة خطياً، فما تقاطع هذه المستويات؟",
    "optionsEn": [
      "The planes intersect along an infinite line",
      "The three planes intersect at a single unique vertex point",
      "The planes are completely parallel",
      "The planes form a prism with no mutual point"
    ],
    "optionsAr": [
      "تتقاطع المستويات على طول خط مستقيم لا نهائي",
      "تتقاطع المستويات الثلاثة في نقطة رأس وحيدة",
      "المستويات متوازية تماماً ولا تلتقي",
      "تشكل المستويات منشوراً بدون أي نقطة مشتركة"
    ],
    "correctAnswer": "The three planes intersect at a single unique vertex point",
    "correctIndex": 1,
    "hintEn": "Linearly independent normals mean det(A) != 0, so rank(A) = rank(A*) = 3.",
    "hintAr": "استقلال متجهات الأعمدة خطياً يعني أن محدد المعاملات لا يساوي صفراً، وبالتالي الرتبة تساوي ٣.",
    "stepByStepSolutionEn": [
      "1. Linearly independent normal vectors $\\implies \\det(A) \\neq 0$.",
      "2. Therefore, $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "3. Dimension of intersection is $3 - 3 = 0$, which is a unique point."
    ],
    "stepByStepSolutionAr": [
      "١. استقلال المتجهات العمودية خطياً $\\implies \\det(A) \\neq 0$.",
      "٢. بالتالي $\\text{rank}(A) = \\text{rank}(A^*) = 3$.",
      "٣. بعد التقاطع هو ٣ - ٣ = ٠، وهي نقطة وحيدة في الفضاء."
    ],
    "teacherTipEn": "det(n1, n2, n3) != 0 guarantees the three planes meet at a single corner point.",
    "teacherTipAr": "المحدد غير الصفري للمتجهات العمودية يضمن التقاء المستويات في نقطة زاوية وحيدة."
  },
  {
    "id": "egbac_ch2_db_med_31",
    "titleEn": "Determinant of Adjugate Matrix #1",
    "titleAr": "محدد المصفوفة الملحقة رقم 1",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 2$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 2$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 7$",
      "$\\det(\\text{adj}(A)) = 2$",
      "$\\det(\\text{adj}(A)) = 4$",
      "$\\det(\\text{adj}(A)) = 9$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 7$",
      "$\\det(\\text{adj}(A)) = 2$",
      "$\\det(\\text{adj}(A)) = 4$",
      "$\\det(\\text{adj}(A)) = 9$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 4$",
    "correctIndex": 2,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 2$: $\\det(\\text{adj}(A)) = (2)^2 = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(2)^2 = 4$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_32",
    "titleEn": "Determinant of Adjugate Matrix #2",
    "titleAr": "محدد المصفوفة الملحقة رقم 2",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 3$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 3$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 12$",
      "$\\det(\\text{adj}(A)) = 7$",
      "$\\det(\\text{adj}(A)) = 14$",
      "$\\det(\\text{adj}(A)) = 9$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 12$",
      "$\\det(\\text{adj}(A)) = 7$",
      "$\\det(\\text{adj}(A)) = 14$",
      "$\\det(\\text{adj}(A)) = 9$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 9$",
    "correctIndex": 3,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 3$: $\\det(\\text{adj}(A)) = (3)^2 = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(3)^2 = 9$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_33",
    "titleEn": "Determinant of Adjugate Matrix #3",
    "titleAr": "محدد المصفوفة الملحقة رقم 3",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 4$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 4$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 16$",
      "$\\det(\\text{adj}(A)) = 19$",
      "$\\det(\\text{adj}(A)) = 14$",
      "$\\det(\\text{adj}(A)) = 21$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 16$",
      "$\\det(\\text{adj}(A)) = 19$",
      "$\\det(\\text{adj}(A)) = 14$",
      "$\\det(\\text{adj}(A)) = 21$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 16$",
    "correctIndex": 0,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 4$: $\\det(\\text{adj}(A)) = (4)^2 = 16$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(4)^2 = 16$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_34",
    "titleEn": "Determinant of Adjugate Matrix #4",
    "titleAr": "محدد المصفوفة الملحقة رقم 4",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 5$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 5$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 28$",
      "$\\det(\\text{adj}(A)) = 25$",
      "$\\det(\\text{adj}(A)) = 23$",
      "$\\det(\\text{adj}(A)) = 30$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 28$",
      "$\\det(\\text{adj}(A)) = 25$",
      "$\\det(\\text{adj}(A)) = 23$",
      "$\\det(\\text{adj}(A)) = 30$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 25$",
    "correctIndex": 1,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 5$: $\\det(\\text{adj}(A)) = (5)^2 = 25$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(5)^2 = 25$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_35",
    "titleEn": "Determinant of Adjugate Matrix #5",
    "titleAr": "محدد المصفوفة الملحقة رقم 5",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 6$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 6$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 39$",
      "$\\det(\\text{adj}(A)) = 34$",
      "$\\det(\\text{adj}(A)) = 36$",
      "$\\det(\\text{adj}(A)) = 41$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 39$",
      "$\\det(\\text{adj}(A)) = 34$",
      "$\\det(\\text{adj}(A)) = 36$",
      "$\\det(\\text{adj}(A)) = 41$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 36$",
    "correctIndex": 2,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 6$: $\\det(\\text{adj}(A)) = (6)^2 = 36$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(6)^2 = 36$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_36",
    "titleEn": "Determinant of Adjugate Matrix #6",
    "titleAr": "محدد المصفوفة الملحقة رقم 6",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 7$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 7$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 52$",
      "$\\det(\\text{adj}(A)) = 47$",
      "$\\det(\\text{adj}(A)) = 54$",
      "$\\det(\\text{adj}(A)) = 49$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 52$",
      "$\\det(\\text{adj}(A)) = 47$",
      "$\\det(\\text{adj}(A)) = 54$",
      "$\\det(\\text{adj}(A)) = 49$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 49$",
    "correctIndex": 3,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 7$: $\\det(\\text{adj}(A)) = (7)^2 = 49$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(7)^2 = 49$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_37",
    "titleEn": "Determinant of Adjugate Matrix #7",
    "titleAr": "محدد المصفوفة الملحقة رقم 7",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 8$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 8$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 64$",
      "$\\det(\\text{adj}(A)) = 67$",
      "$\\det(\\text{adj}(A)) = 62$",
      "$\\det(\\text{adj}(A)) = 69$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 64$",
      "$\\det(\\text{adj}(A)) = 67$",
      "$\\det(\\text{adj}(A)) = 62$",
      "$\\det(\\text{adj}(A)) = 69$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 64$",
    "correctIndex": 0,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 8$: $\\det(\\text{adj}(A)) = (8)^2 = 64$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(8)^2 = 64$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_38",
    "titleEn": "Determinant of Adjugate Matrix #8",
    "titleAr": "محدد المصفوفة الملحقة رقم 8",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 9$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 9$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 84$",
      "$\\det(\\text{adj}(A)) = 81$",
      "$\\det(\\text{adj}(A)) = 79$",
      "$\\det(\\text{adj}(A)) = 86$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 84$",
      "$\\det(\\text{adj}(A)) = 81$",
      "$\\det(\\text{adj}(A)) = 79$",
      "$\\det(\\text{adj}(A)) = 86$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 81$",
    "correctIndex": 1,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 9$: $\\det(\\text{adj}(A)) = (9)^2 = 81$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(9)^2 = 81$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_39",
    "titleEn": "Determinant of Adjugate Matrix #9",
    "titleAr": "محدد المصفوفة الملحقة رقم 9",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 10$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 10$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 103$",
      "$\\det(\\text{adj}(A)) = 98$",
      "$\\det(\\text{adj}(A)) = 100$",
      "$\\det(\\text{adj}(A)) = 105$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 103$",
      "$\\det(\\text{adj}(A)) = 98$",
      "$\\det(\\text{adj}(A)) = 100$",
      "$\\det(\\text{adj}(A)) = 105$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 100$",
    "correctIndex": 2,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 10$: $\\det(\\text{adj}(A)) = (10)^2 = 100$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(10)^2 = 100$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_40",
    "titleEn": "Determinant of Adjugate Matrix #10",
    "titleAr": "محدد المصفوفة الملحقة رقم 10",
    "difficulty": "medium",
    "questionEn": "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 11$. Find the determinant of its adjugate matrix, $\\det(\\text{adj}(A))$.",
    "questionAr": "لتكن $A$ مصفوفة قابلة للعكس من الرتبة $3 \\times 3$ محددها $\\det(A) = 11$. احسب محدد مصفوفتها الملحقة $\\det(\\text{adj}(A))$.",
    "optionsEn": [
      "$\\det(\\text{adj}(A)) = 124$",
      "$\\det(\\text{adj}(A)) = 119$",
      "$\\det(\\text{adj}(A)) = 126$",
      "$\\det(\\text{adj}(A)) = 121$"
    ],
    "optionsAr": [
      "$\\det(\\text{adj}(A)) = 124$",
      "$\\det(\\text{adj}(A)) = 119$",
      "$\\det(\\text{adj}(A)) = 126$",
      "$\\det(\\text{adj}(A)) = 121$"
    ],
    "correctAnswer": "$\\det(\\text{adj}(A)) = 121$",
    "correctIndex": 3,
    "hintEn": "For an n x n matrix, det(adj(A)) = (det A)^(n-1).",
    "hintAr": "لمصفوفة من الدرجة n، محدد المصفوفة الملحقة يساوي (محدد A) أس (n - 1).",
    "stepByStepSolutionEn": [
      "1. Using the fundamental identity: $A \\cdot \\text{adj}(A) = \\det(A) I_n$.",
      "2. Taking determinants on both sides: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^n$.",
      "3. For $n = 3$: $\\det(\\text{adj}(A)) = (\\det A)^{3-1} = (\\det A)^2$.",
      "4. Substituting $\\det(A) = 11$: $\\det(\\text{adj}(A)) = (11)^2 = 121$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية: $A \\cdot \\text{adj}(A) = \\det(A) I_3$.",
      "٢. بأخذ المحدد للطرفين: $\\det(A) \\det(\\text{adj}(A)) = (\\det A)^3$.",
      "٣. إذن $\\det(\\text{adj}(A)) = (\\det A)^2$.",
      "٤. بالتعويض: $(11)^2 = 121$."
    ],
    "teacherTipEn": "Always remember: det(adj(A)) = (det A)^(n-1). For 3x3 matrices, it is (det A)^2.",
    "teacherTipAr": "تذكر دائماً: محدد الملحقة يساوي (محدد A) أس (n-1). للمصفوفات 3x3 يكون مربع المحدد."
  },
  {
    "id": "egbac_ch2_db_med_41",
    "titleEn": "Eigenvalues of a Triangular Matrix #1",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 1",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 2 & 0 \\\\ 5 & 5 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 2 & 0 \\\\ 5 & 5 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{2, 5\\}",
      "\\{3, 4\\}",
      "\\{1, 6\\}",
      "\\{2, 7\\}"
    ],
    "optionsAr": [
      "\\{2, 5\\}",
      "\\{3, 4\\}",
      "\\{1, 6\\}",
      "\\{2, 7\\}"
    ],
    "correctAnswer": "\\{2, 5\\}",
    "correctIndex": 0,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 2 - \\lambda & 0 \\\\ 5 & 5 - \\lambda \\end{vmatrix} = (2 - \\lambda)(5 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 2$ and $\\lambda_2 = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(2 - \\lambda)(5 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 2$ و $\\lambda_2 = 5$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  },
  {
    "id": "egbac_ch2_db_med_42",
    "titleEn": "Eigenvalues of a Triangular Matrix #2",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 2",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 3 & 0 \\\\ 5 & 6 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 3 & 0 \\\\ 5 & 6 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{4, 5\\}",
      "\\{3, 6\\}",
      "\\{2, 7\\}",
      "\\{3, 8\\}"
    ],
    "optionsAr": [
      "\\{4, 5\\}",
      "\\{3, 6\\}",
      "\\{2, 7\\}",
      "\\{3, 8\\}"
    ],
    "correctAnswer": "\\{3, 6\\}",
    "correctIndex": 1,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 3 - \\lambda & 0 \\\\ 5 & 6 - \\lambda \\end{vmatrix} = (3 - \\lambda)(6 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 3$ and $\\lambda_2 = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(3 - \\lambda)(6 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 3$ و $\\lambda_2 = 6$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  },
  {
    "id": "egbac_ch2_db_med_43",
    "titleEn": "Eigenvalues of a Triangular Matrix #3",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 3",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 4 & 0 \\\\ 5 & 7 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 4 & 0 \\\\ 5 & 7 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{5, 6\\}",
      "\\{3, 8\\}",
      "\\{4, 7\\}",
      "\\{4, 9\\}"
    ],
    "optionsAr": [
      "\\{5, 6\\}",
      "\\{3, 8\\}",
      "\\{4, 7\\}",
      "\\{4, 9\\}"
    ],
    "correctAnswer": "\\{4, 7\\}",
    "correctIndex": 2,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 4 - \\lambda & 0 \\\\ 5 & 7 - \\lambda \\end{vmatrix} = (4 - \\lambda)(7 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 4$ and $\\lambda_2 = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(4 - \\lambda)(7 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 4$ و $\\lambda_2 = 7$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  },
  {
    "id": "egbac_ch2_db_med_44",
    "titleEn": "Eigenvalues of a Triangular Matrix #4",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 4",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 5 & 0 \\\\ 5 & 8 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 5 & 0 \\\\ 5 & 8 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{6, 7\\}",
      "\\{4, 9\\}",
      "\\{5, 10\\}",
      "\\{5, 8\\}"
    ],
    "optionsAr": [
      "\\{6, 7\\}",
      "\\{4, 9\\}",
      "\\{5, 10\\}",
      "\\{5, 8\\}"
    ],
    "correctAnswer": "\\{5, 8\\}",
    "correctIndex": 3,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 5 - \\lambda & 0 \\\\ 5 & 8 - \\lambda \\end{vmatrix} = (5 - \\lambda)(8 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 5$ and $\\lambda_2 = 8$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(5 - \\lambda)(8 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 5$ و $\\lambda_2 = 8$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  },
  {
    "id": "egbac_ch2_db_med_45",
    "titleEn": "Eigenvalues of a Triangular Matrix #5",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 5",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 6 & 0 \\\\ 5 & 9 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 6 & 0 \\\\ 5 & 9 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{6, 9\\}",
      "\\{7, 8\\}",
      "\\{5, 10\\}",
      "\\{6, 11\\}"
    ],
    "optionsAr": [
      "\\{6, 9\\}",
      "\\{7, 8\\}",
      "\\{5, 10\\}",
      "\\{6, 11\\}"
    ],
    "correctAnswer": "\\{6, 9\\}",
    "correctIndex": 0,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 6 - \\lambda & 0 \\\\ 5 & 9 - \\lambda \\end{vmatrix} = (6 - \\lambda)(9 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 6$ and $\\lambda_2 = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(6 - \\lambda)(9 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 6$ و $\\lambda_2 = 9$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  },
  {
    "id": "egbac_ch2_db_med_46",
    "titleEn": "Eigenvalues of a Triangular Matrix #6",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 6",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 7 & 0 \\\\ 5 & 10 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 7 & 0 \\\\ 5 & 10 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{8, 9\\}",
      "\\{7, 10\\}",
      "\\{6, 11\\}",
      "\\{7, 12\\}"
    ],
    "optionsAr": [
      "\\{8, 9\\}",
      "\\{7, 10\\}",
      "\\{6, 11\\}",
      "\\{7, 12\\}"
    ],
    "correctAnswer": "\\{7, 10\\}",
    "correctIndex": 1,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 7 - \\lambda & 0 \\\\ 5 & 10 - \\lambda \\end{vmatrix} = (7 - \\lambda)(10 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 7$ and $\\lambda_2 = 10$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(7 - \\lambda)(10 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 7$ و $\\lambda_2 = 10$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  },
  {
    "id": "egbac_ch2_db_med_47",
    "titleEn": "Eigenvalues of a Triangular Matrix #7",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 7",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 8 & 0 \\\\ 5 & 11 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 8 & 0 \\\\ 5 & 11 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{9, 10\\}",
      "\\{7, 12\\}",
      "\\{8, 11\\}",
      "\\{8, 13\\}"
    ],
    "optionsAr": [
      "\\{9, 10\\}",
      "\\{7, 12\\}",
      "\\{8, 11\\}",
      "\\{8, 13\\}"
    ],
    "correctAnswer": "\\{8, 11\\}",
    "correctIndex": 2,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 8 - \\lambda & 0 \\\\ 5 & 11 - \\lambda \\end{vmatrix} = (8 - \\lambda)(11 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 8$ and $\\lambda_2 = 11$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(8 - \\lambda)(11 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 8$ و $\\lambda_2 = 11$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  },
  {
    "id": "egbac_ch2_db_med_48",
    "titleEn": "Eigenvalues of a Triangular Matrix #8",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 8",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 9 & 0 \\\\ 5 & 12 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 9 & 0 \\\\ 5 & 12 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{10, 11\\}",
      "\\{8, 13\\}",
      "\\{9, 14\\}",
      "\\{9, 12\\}"
    ],
    "optionsAr": [
      "\\{10, 11\\}",
      "\\{8, 13\\}",
      "\\{9, 14\\}",
      "\\{9, 12\\}"
    ],
    "correctAnswer": "\\{9, 12\\}",
    "correctIndex": 3,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 9 - \\lambda & 0 \\\\ 5 & 12 - \\lambda \\end{vmatrix} = (9 - \\lambda)(12 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 9$ and $\\lambda_2 = 12$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(9 - \\lambda)(12 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 9$ و $\\lambda_2 = 12$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  },
  {
    "id": "egbac_ch2_db_med_49",
    "titleEn": "Eigenvalues of a Triangular Matrix #9",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 9",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 10 & 0 \\\\ 5 & 13 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 10 & 0 \\\\ 5 & 13 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{10, 13\\}",
      "\\{11, 12\\}",
      "\\{9, 14\\}",
      "\\{10, 15\\}"
    ],
    "optionsAr": [
      "\\{10, 13\\}",
      "\\{11, 12\\}",
      "\\{9, 14\\}",
      "\\{10, 15\\}"
    ],
    "correctAnswer": "\\{10, 13\\}",
    "correctIndex": 0,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 10 - \\lambda & 0 \\\\ 5 & 13 - \\lambda \\end{vmatrix} = (10 - \\lambda)(13 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 10$ and $\\lambda_2 = 13$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(10 - \\lambda)(13 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 10$ و $\\lambda_2 = 13$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  },
  {
    "id": "egbac_ch2_db_med_50",
    "titleEn": "Eigenvalues of a Triangular Matrix #10",
    "titleAr": "القيم الذاتية لمصفوفة مثلثية رقم 10",
    "difficulty": "medium",
    "questionEn": "Determine the set of eigenvalues $\\lambda$ of the lower-triangular matrix $M = \\begin{pmatrix} 11 & 0 \\\\ 5 & 14 \\end{pmatrix}$.",
    "questionAr": "حدد مجموعة القيم الذاتية $\\lambda$ للمصفوفة المثلثية السفلية $M = \\begin{pmatrix} 11 & 0 \\\\ 5 & 14 \\end{pmatrix}$.",
    "optionsEn": [
      "\\{12, 13\\}",
      "\\{11, 14\\}",
      "\\{10, 15\\}",
      "\\{11, 16\\}"
    ],
    "optionsAr": [
      "\\{12, 13\\}",
      "\\{11, 14\\}",
      "\\{10, 15\\}",
      "\\{11, 16\\}"
    ],
    "correctAnswer": "\\{11, 14\\}",
    "correctIndex": 1,
    "hintEn": "The eigenvalues of any triangular matrix are simply its diagonal entries.",
    "hintAr": "القيم الذاتية لأي مصفوفة مثلثية هي عناصر قطرها الرئيسي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Set up the characteristic equation: $\\det(M - \\lambda I) = 0$.",
      "2. $\\begin{vmatrix} 11 - \\lambda & 0 \\\\ 5 & 14 - \\lambda \\end{vmatrix} = (11 - \\lambda)(14 - \\lambda) = 0$.",
      "3. Solving yields $\\lambda_1 = 11$ and $\\lambda_2 = 14$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(M - \\lambda I) = 0$.",
      "٢. $(11 - \\lambda)(14 - \\lambda) = 0$.",
      "٣. الجذور هي $\\lambda_1 = 11$ و $\\lambda_2 = 14$."
    ],
    "teacherTipEn": "For triangular matrices, characteristic roots are read directly off the main diagonal.",
    "teacherTipAr": "في المصفوفات المثلثية، تُقرأ القيم الذاتية مباشرة من القطر الرئيسي."
  }
],
  hots: [
  {
    "id": "egbac_ch2_db_hots_01",
    "titleEn": "Two-Parameter Consistency Analysis #1",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 1",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 0)z = \\mu - 0 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 0)z = \\mu - 0 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 5$ and $\\mu \\neq 3$",
      "$\\lambda = 5$ and $\\mu = 3$",
      "$\\lambda \\neq 5$ for any $\\mu$",
      "$\\lambda = 6$ and $\\mu = 2$"
    ],
    "optionsAr": [
      "$\\lambda = 5$ و $\\mu \\neq 3$",
      "$\\lambda = 5$ و $\\mu = 3$",
      "$\\lambda \\neq 5$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 6$ و $\\mu = 2$"
    ],
    "correctAnswer": "$\\lambda = 5$ and $\\mu \\neq 3$",
    "correctIndex": 0,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 0 - 1 \\mid \\mu - 0 - 1) = (0, 2, \\lambda - 1 \\mid \\mu - 1)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 1 - 4 \\mid \\mu - 1 - 2) = (0, 0, \\lambda - 5 \\mid \\mu - 3)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 5 = 0$ and $\\mu - 3 \\neq 0$.",
      "4. Thus, $\\lambda = 5$ and $\\mu \\neq 3$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 1 \\mid \\mu - 1)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 5 \\mid \\mu - 3)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 5$ و $\\mu \\neq 3$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_02",
    "titleEn": "Two-Parameter Consistency Analysis #2",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 2",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 1)z = \\mu - 1 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 1)z = \\mu - 1 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 6$ and $\\mu = 4$",
      "$\\lambda = 6$ and $\\mu \\neq 4$",
      "$\\lambda \\neq 6$ for any $\\mu$",
      "$\\lambda = 7$ and $\\mu = 3$"
    ],
    "optionsAr": [
      "$\\lambda = 6$ و $\\mu = 4$",
      "$\\lambda = 6$ و $\\mu \\neq 4$",
      "$\\lambda \\neq 6$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 7$ و $\\mu = 3$"
    ],
    "correctAnswer": "$\\lambda = 6$ and $\\mu \\neq 4$",
    "correctIndex": 1,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 1 - 1 \\mid \\mu - 1 - 1) = (0, 2, \\lambda - 2 \\mid \\mu - 2)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 2 - 4 \\mid \\mu - 2 - 2) = (0, 0, \\lambda - 6 \\mid \\mu - 4)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 6 = 0$ and $\\mu - 4 \\neq 0$.",
      "4. Thus, $\\lambda = 6$ and $\\mu \\neq 4$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 2 \\mid \\mu - 2)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 6 \\mid \\mu - 4)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 6$ و $\\mu \\neq 4$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_03",
    "titleEn": "Two-Parameter Consistency Analysis #3",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 3",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 2)z = \\mu - 2 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 2)z = \\mu - 2 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 7$ and $\\mu = 5$",
      "$\\lambda \\neq 7$ for any $\\mu$",
      "$\\lambda = 7$ and $\\mu \\neq 5$",
      "$\\lambda = 8$ and $\\mu = 4$"
    ],
    "optionsAr": [
      "$\\lambda = 7$ و $\\mu = 5$",
      "$\\lambda \\neq 7$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 7$ و $\\mu \\neq 5$",
      "$\\lambda = 8$ و $\\mu = 4$"
    ],
    "correctAnswer": "$\\lambda = 7$ and $\\mu \\neq 5$",
    "correctIndex": 2,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 2 - 1 \\mid \\mu - 2 - 1) = (0, 2, \\lambda - 3 \\mid \\mu - 3)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 3 - 4 \\mid \\mu - 3 - 2) = (0, 0, \\lambda - 7 \\mid \\mu - 5)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 7 = 0$ and $\\mu - 5 \\neq 0$.",
      "4. Thus, $\\lambda = 7$ and $\\mu \\neq 5$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 3 \\mid \\mu - 3)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 7 \\mid \\mu - 5)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 7$ و $\\mu \\neq 5$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_04",
    "titleEn": "Two-Parameter Consistency Analysis #4",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 4",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 3)z = \\mu - 3 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 3)z = \\mu - 3 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 8$ and $\\mu = 6$",
      "$\\lambda \\neq 8$ for any $\\mu$",
      "$\\lambda = 9$ and $\\mu = 5$",
      "$\\lambda = 8$ and $\\mu \\neq 6$"
    ],
    "optionsAr": [
      "$\\lambda = 8$ و $\\mu = 6$",
      "$\\lambda \\neq 8$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 9$ و $\\mu = 5$",
      "$\\lambda = 8$ و $\\mu \\neq 6$"
    ],
    "correctAnswer": "$\\lambda = 8$ and $\\mu \\neq 6$",
    "correctIndex": 3,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 3 - 1 \\mid \\mu - 3 - 1) = (0, 2, \\lambda - 4 \\mid \\mu - 4)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 4 - 4 \\mid \\mu - 4 - 2) = (0, 0, \\lambda - 8 \\mid \\mu - 6)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 8 = 0$ and $\\mu - 6 \\neq 0$.",
      "4. Thus, $\\lambda = 8$ and $\\mu \\neq 6$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 4 \\mid \\mu - 4)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 8 \\mid \\mu - 6)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 8$ و $\\mu \\neq 6$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_05",
    "titleEn": "Two-Parameter Consistency Analysis #5",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 5",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 4)z = \\mu - 4 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 4)z = \\mu - 4 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 9$ and $\\mu \\neq 7$",
      "$\\lambda = 9$ and $\\mu = 7$",
      "$\\lambda \\neq 9$ for any $\\mu$",
      "$\\lambda = 10$ and $\\mu = 6$"
    ],
    "optionsAr": [
      "$\\lambda = 9$ و $\\mu \\neq 7$",
      "$\\lambda = 9$ و $\\mu = 7$",
      "$\\lambda \\neq 9$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 10$ و $\\mu = 6$"
    ],
    "correctAnswer": "$\\lambda = 9$ and $\\mu \\neq 7$",
    "correctIndex": 0,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 4 - 1 \\mid \\mu - 4 - 1) = (0, 2, \\lambda - 5 \\mid \\mu - 5)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 5 - 4 \\mid \\mu - 5 - 2) = (0, 0, \\lambda - 9 \\mid \\mu - 7)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 9 = 0$ and $\\mu - 7 \\neq 0$.",
      "4. Thus, $\\lambda = 9$ and $\\mu \\neq 7$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 5 \\mid \\mu - 5)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 9 \\mid \\mu - 7)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 9$ و $\\mu \\neq 7$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_06",
    "titleEn": "Two-Parameter Consistency Analysis #6",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 6",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 5)z = \\mu - 5 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 5)z = \\mu - 5 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 10$ and $\\mu = 8$",
      "$\\lambda = 10$ and $\\mu \\neq 8$",
      "$\\lambda \\neq 10$ for any $\\mu$",
      "$\\lambda = 11$ and $\\mu = 7$"
    ],
    "optionsAr": [
      "$\\lambda = 10$ و $\\mu = 8$",
      "$\\lambda = 10$ و $\\mu \\neq 8$",
      "$\\lambda \\neq 10$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 11$ و $\\mu = 7$"
    ],
    "correctAnswer": "$\\lambda = 10$ and $\\mu \\neq 8$",
    "correctIndex": 1,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 5 - 1 \\mid \\mu - 5 - 1) = (0, 2, \\lambda - 6 \\mid \\mu - 6)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 6 - 4 \\mid \\mu - 6 - 2) = (0, 0, \\lambda - 10 \\mid \\mu - 8)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 10 = 0$ and $\\mu - 8 \\neq 0$.",
      "4. Thus, $\\lambda = 10$ and $\\mu \\neq 8$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 6 \\mid \\mu - 6)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 10 \\mid \\mu - 8)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 10$ و $\\mu \\neq 8$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_07",
    "titleEn": "Two-Parameter Consistency Analysis #7",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 7",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 6)z = \\mu - 6 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 6)z = \\mu - 6 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 11$ and $\\mu = 9$",
      "$\\lambda \\neq 11$ for any $\\mu$",
      "$\\lambda = 11$ and $\\mu \\neq 9$",
      "$\\lambda = 12$ and $\\mu = 8$"
    ],
    "optionsAr": [
      "$\\lambda = 11$ و $\\mu = 9$",
      "$\\lambda \\neq 11$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 11$ و $\\mu \\neq 9$",
      "$\\lambda = 12$ و $\\mu = 8$"
    ],
    "correctAnswer": "$\\lambda = 11$ and $\\mu \\neq 9$",
    "correctIndex": 2,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 6 - 1 \\mid \\mu - 6 - 1) = (0, 2, \\lambda - 7 \\mid \\mu - 7)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 7 - 4 \\mid \\mu - 7 - 2) = (0, 0, \\lambda - 11 \\mid \\mu - 9)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 11 = 0$ and $\\mu - 9 \\neq 0$.",
      "4. Thus, $\\lambda = 11$ and $\\mu \\neq 9$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 7 \\mid \\mu - 7)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 11 \\mid \\mu - 9)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 11$ و $\\mu \\neq 9$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_08",
    "titleEn": "Two-Parameter Consistency Analysis #8",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 8",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 7)z = \\mu - 7 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 7)z = \\mu - 7 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 12$ and $\\mu = 10$",
      "$\\lambda \\neq 12$ for any $\\mu$",
      "$\\lambda = 13$ and $\\mu = 9$",
      "$\\lambda = 12$ and $\\mu \\neq 10$"
    ],
    "optionsAr": [
      "$\\lambda = 12$ و $\\mu = 10$",
      "$\\lambda \\neq 12$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 13$ و $\\mu = 9$",
      "$\\lambda = 12$ و $\\mu \\neq 10$"
    ],
    "correctAnswer": "$\\lambda = 12$ and $\\mu \\neq 10$",
    "correctIndex": 3,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 7 - 1 \\mid \\mu - 7 - 1) = (0, 2, \\lambda - 8 \\mid \\mu - 8)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 8 - 4 \\mid \\mu - 8 - 2) = (0, 0, \\lambda - 12 \\mid \\mu - 10)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 12 = 0$ and $\\mu - 10 \\neq 0$.",
      "4. Thus, $\\lambda = 12$ and $\\mu \\neq 10$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 8 \\mid \\mu - 8)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 12 \\mid \\mu - 10)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 12$ و $\\mu \\neq 10$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_09",
    "titleEn": "Two-Parameter Consistency Analysis #9",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 9",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 8)z = \\mu - 8 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 8)z = \\mu - 8 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 13$ and $\\mu \\neq 11$",
      "$\\lambda = 13$ and $\\mu = 11$",
      "$\\lambda \\neq 13$ for any $\\mu$",
      "$\\lambda = 14$ and $\\mu = 10$"
    ],
    "optionsAr": [
      "$\\lambda = 13$ و $\\mu \\neq 11$",
      "$\\lambda = 13$ و $\\mu = 11$",
      "$\\lambda \\neq 13$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 14$ و $\\mu = 10$"
    ],
    "correctAnswer": "$\\lambda = 13$ and $\\mu \\neq 11$",
    "correctIndex": 0,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 8 - 1 \\mid \\mu - 8 - 1) = (0, 2, \\lambda - 9 \\mid \\mu - 9)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 9 - 4 \\mid \\mu - 9 - 2) = (0, 0, \\lambda - 13 \\mid \\mu - 11)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 13 = 0$ and $\\mu - 11 \\neq 0$.",
      "4. Thus, $\\lambda = 13$ and $\\mu \\neq 11$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 9 \\mid \\mu - 9)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 13 \\mid \\mu - 11)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 13$ و $\\mu \\neq 11$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_10",
    "titleEn": "Two-Parameter Consistency Analysis #10",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 10",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 9)z = \\mu - 9 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 9)z = \\mu - 9 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 14$ and $\\mu = 12$",
      "$\\lambda = 14$ and $\\mu \\neq 12$",
      "$\\lambda \\neq 14$ for any $\\mu$",
      "$\\lambda = 15$ and $\\mu = 11$"
    ],
    "optionsAr": [
      "$\\lambda = 14$ و $\\mu = 12$",
      "$\\lambda = 14$ و $\\mu \\neq 12$",
      "$\\lambda \\neq 14$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 15$ و $\\mu = 11$"
    ],
    "correctAnswer": "$\\lambda = 14$ and $\\mu \\neq 12$",
    "correctIndex": 1,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 9 - 1 \\mid \\mu - 9 - 1) = (0, 2, \\lambda - 10 \\mid \\mu - 10)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 10 - 4 \\mid \\mu - 10 - 2) = (0, 0, \\lambda - 14 \\mid \\mu - 12)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 14 = 0$ and $\\mu - 12 \\neq 0$.",
      "4. Thus, $\\lambda = 14$ and $\\mu \\neq 12$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 10 \\mid \\mu - 10)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 14 \\mid \\mu - 12)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 14$ و $\\mu \\neq 12$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_11",
    "titleEn": "Two-Parameter Consistency Analysis #11",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 11",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 10)z = \\mu - 10 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 10)z = \\mu - 10 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 15$ and $\\mu = 13$",
      "$\\lambda \\neq 15$ for any $\\mu$",
      "$\\lambda = 15$ and $\\mu \\neq 13$",
      "$\\lambda = 16$ and $\\mu = 12$"
    ],
    "optionsAr": [
      "$\\lambda = 15$ و $\\mu = 13$",
      "$\\lambda \\neq 15$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 15$ و $\\mu \\neq 13$",
      "$\\lambda = 16$ و $\\mu = 12$"
    ],
    "correctAnswer": "$\\lambda = 15$ and $\\mu \\neq 13$",
    "correctIndex": 2,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 10 - 1 \\mid \\mu - 10 - 1) = (0, 2, \\lambda - 11 \\mid \\mu - 11)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 11 - 4 \\mid \\mu - 11 - 2) = (0, 0, \\lambda - 15 \\mid \\mu - 13)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 15 = 0$ and $\\mu - 13 \\neq 0$.",
      "4. Thus, $\\lambda = 15$ and $\\mu \\neq 13$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 11 \\mid \\mu - 11)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 15 \\mid \\mu - 13)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 15$ و $\\mu \\neq 13$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_12",
    "titleEn": "Two-Parameter Consistency Analysis #12",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 12",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 11)z = \\mu - 11 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 11)z = \\mu - 11 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 16$ and $\\mu = 14$",
      "$\\lambda \\neq 16$ for any $\\mu$",
      "$\\lambda = 17$ and $\\mu = 13$",
      "$\\lambda = 16$ and $\\mu \\neq 14$"
    ],
    "optionsAr": [
      "$\\lambda = 16$ و $\\mu = 14$",
      "$\\lambda \\neq 16$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 17$ و $\\mu = 13$",
      "$\\lambda = 16$ و $\\mu \\neq 14$"
    ],
    "correctAnswer": "$\\lambda = 16$ and $\\mu \\neq 14$",
    "correctIndex": 3,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 11 - 1 \\mid \\mu - 11 - 1) = (0, 2, \\lambda - 12 \\mid \\mu - 12)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 12 - 4 \\mid \\mu - 12 - 2) = (0, 0, \\lambda - 16 \\mid \\mu - 14)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 16 = 0$ and $\\mu - 14 \\neq 0$.",
      "4. Thus, $\\lambda = 16$ and $\\mu \\neq 14$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 12 \\mid \\mu - 12)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 16 \\mid \\mu - 14)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 16$ و $\\mu \\neq 14$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_13",
    "titleEn": "Two-Parameter Consistency Analysis #13",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 13",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 12)z = \\mu - 12 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 12)z = \\mu - 12 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 17$ and $\\mu \\neq 15$",
      "$\\lambda = 17$ and $\\mu = 15$",
      "$\\lambda \\neq 17$ for any $\\mu$",
      "$\\lambda = 18$ and $\\mu = 14$"
    ],
    "optionsAr": [
      "$\\lambda = 17$ و $\\mu \\neq 15$",
      "$\\lambda = 17$ و $\\mu = 15$",
      "$\\lambda \\neq 17$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 18$ و $\\mu = 14$"
    ],
    "correctAnswer": "$\\lambda = 17$ and $\\mu \\neq 15$",
    "correctIndex": 0,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 12 - 1 \\mid \\mu - 12 - 1) = (0, 2, \\lambda - 13 \\mid \\mu - 13)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 13 - 4 \\mid \\mu - 13 - 2) = (0, 0, \\lambda - 17 \\mid \\mu - 15)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 17 = 0$ and $\\mu - 15 \\neq 0$.",
      "4. Thus, $\\lambda = 17$ and $\\mu \\neq 15$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 13 \\mid \\mu - 13)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 17 \\mid \\mu - 15)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 17$ و $\\mu \\neq 15$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_14",
    "titleEn": "Two-Parameter Consistency Analysis #14",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 14",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 13)z = \\mu - 13 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 13)z = \\mu - 13 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 18$ and $\\mu = 16$",
      "$\\lambda = 18$ and $\\mu \\neq 16$",
      "$\\lambda \\neq 18$ for any $\\mu$",
      "$\\lambda = 19$ and $\\mu = 15$"
    ],
    "optionsAr": [
      "$\\lambda = 18$ و $\\mu = 16$",
      "$\\lambda = 18$ و $\\mu \\neq 16$",
      "$\\lambda \\neq 18$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 19$ و $\\mu = 15$"
    ],
    "correctAnswer": "$\\lambda = 18$ and $\\mu \\neq 16$",
    "correctIndex": 1,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 13 - 1 \\mid \\mu - 13 - 1) = (0, 2, \\lambda - 14 \\mid \\mu - 14)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 14 - 4 \\mid \\mu - 14 - 2) = (0, 0, \\lambda - 18 \\mid \\mu - 16)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 18 = 0$ and $\\mu - 16 \\neq 0$.",
      "4. Thus, $\\lambda = 18$ and $\\mu \\neq 16$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 14 \\mid \\mu - 14)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 18 \\mid \\mu - 16)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 18$ و $\\mu \\neq 16$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_15",
    "titleEn": "Two-Parameter Consistency Analysis #15",
    "titleAr": "تحليل التوافق لنظام ببارامترين رقم 15",
    "difficulty": "hots",
    "questionEn": "Consider the linear system: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 14)z = \\mu - 14 \\end{cases}$. Under which conditions does this system have NO solution?",
    "questionAr": "في النظام الخطي الآتي: $\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + (\\lambda - 14)z = \\mu - 14 \\end{cases}$. ما هي الشروط التي تجعل النظام مستحيل الحل (ليس له أي حل)؟",
    "optionsEn": [
      "$\\lambda = 19$ and $\\mu = 17$",
      "$\\lambda \\neq 19$ for any $\\mu$",
      "$\\lambda = 19$ and $\\mu \\neq 17$",
      "$\\lambda = 20$ and $\\mu = 16$"
    ],
    "optionsAr": [
      "$\\lambda = 19$ و $\\mu = 17$",
      "$\\lambda \\neq 19$ لأي قيمة لـ $\\mu$",
      "$\\lambda = 19$ و $\\mu \\neq 17$",
      "$\\lambda = 20$ و $\\mu = 16$"
    ],
    "correctAnswer": "$\\lambda = 19$ and $\\mu \\neq 17$",
    "correctIndex": 2,
    "hintEn": "Perform Gaussian elimination: the system is inconsistent if the last row gives 0 = nonzero.",
    "hintAr": "أجرِ الحذف الغاوسي: النظام يكون غير متوافق إذا كان الصف الأخير يعطي 0 = عدد غير صفري.",
    "stepByStepSolutionEn": [
      "1. Perform row operations on the augmented matrix $[A|B]$:",
      "   $R_2 \\leftarrow R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\leftarrow R_3 - R_1 \\implies (0, 2, \\lambda - 14 - 1 \\mid \\mu - 14 - 1) = (0, 2, \\lambda - 15 \\mid \\mu - 15)$",
      "2. Eliminate the second column in $R_3$: $R_3 \\leftarrow R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 15 - 4 \\mid \\mu - 15 - 2) = (0, 0, \\lambda - 19 \\mid \\mu - 17)$.",
      "3. Inconsistency (no solution) requires $\\text{rank}(A) = 2$ and $\\text{rank}(A^*) = 3$, which occurs when $\\lambda - 19 = 0$ and $\\mu - 17 \\neq 0$.",
      "4. Thus, $\\lambda = 19$ and $\\mu \\neq 17$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليات الصفية الأولية على المصفوفة الموسعة:",
      "   $R_2 \\to R_2 - R_1 \\implies (0, 1, 2 \\mid 1)$",
      "   $R_3 \\to R_3 - R_1 \\implies (0, 2, \\lambda - 15 \\mid \\mu - 15)$",
      "٢. طرح ضعف الصف الثاني من الثالث: $R_3 \\to R_3 - 2R_2$:",
      "   $(0, 0, \\lambda - 19 \\mid \\mu - 17)$.",
      "٣. يستحيل الحل عندما $\\text{rank}(A) = 2$ و $\\text{rank}(A^*) = 3$، أي عندما ينعدم معامل z ولا ينعدم الطرف الأيمن.",
      "٤. إذن: $\\lambda = 19$ و $\\mu \\neq 17$."
    ],
    "teacherTipEn": "0*z = c with c != 0 is the hallmark of an inconsistent linear system.",
    "teacherTipAr": "المعادلة ٠ × ع = عدد غير صفري هي العلامة المميزة لعدم توافق النظام الخطي."
  },
  {
    "id": "egbac_ch2_db_hots_16",
    "titleEn": "Cayley-Hamilton Matrix Inverse #1",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 1",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 3$ and determinant $\\det(A) = 2$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 3$ ومحددها $\\det(A) = 2$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{2}(A - 3I)$",
      "$A^{-1} = \\frac{1}{3}(3I - A)$",
      "$A^{-1} = \\frac{1}{2}(5I - A)$",
      "$A^{-1} = \\frac{1}{2}(3I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{2}(A - 3I)$",
      "$A^{-1} = \\frac{1}{3}(3I - A)$",
      "$A^{-1} = \\frac{1}{2}(5I - A)$",
      "$A^{-1} = \\frac{1}{2}(3I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{2}(3I - A)$",
    "correctIndex": 3,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 3A + 2I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 3I + 2A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 2A^{-1} = 3I - A \\implies A^{-1} = \\frac{1}{2}(3I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 3A + 2I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 3I + 2A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{2}(3I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_17",
    "titleEn": "Cayley-Hamilton Matrix Inverse #2",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 2",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 5$ and determinant $\\det(A) = 6$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 5$ ومحددها $\\det(A) = 6$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{6}(5I - A)$",
      "$A^{-1} = \\frac{1}{6}(A - 5I)$",
      "$A^{-1} = \\frac{1}{7}(5I - A)$",
      "$A^{-1} = \\frac{1}{6}(7I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{6}(5I - A)$",
      "$A^{-1} = \\frac{1}{6}(A - 5I)$",
      "$A^{-1} = \\frac{1}{7}(5I - A)$",
      "$A^{-1} = \\frac{1}{6}(7I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{6}(5I - A)$",
    "correctIndex": 0,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 5A + 6I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 5I + 6A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 6A^{-1} = 5I - A \\implies A^{-1} = \\frac{1}{6}(5I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 5A + 6I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 5I + 6A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{6}(5I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_18",
    "titleEn": "Cayley-Hamilton Matrix Inverse #3",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 3",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 7$ and determinant $\\det(A) = 12$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 7$ ومحددها $\\det(A) = 12$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{12}(A - 7I)$",
      "$A^{-1} = \\frac{1}{12}(7I - A)$",
      "$A^{-1} = \\frac{1}{13}(7I - A)$",
      "$A^{-1} = \\frac{1}{12}(9I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{12}(A - 7I)$",
      "$A^{-1} = \\frac{1}{12}(7I - A)$",
      "$A^{-1} = \\frac{1}{13}(7I - A)$",
      "$A^{-1} = \\frac{1}{12}(9I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{12}(7I - A)$",
    "correctIndex": 1,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 7A + 12I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 7I + 12A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 12A^{-1} = 7I - A \\implies A^{-1} = \\frac{1}{12}(7I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 7A + 12I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 7I + 12A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{12}(7I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_19",
    "titleEn": "Cayley-Hamilton Matrix Inverse #4",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 4",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 9$ and determinant $\\det(A) = 20$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 9$ ومحددها $\\det(A) = 20$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{20}(A - 9I)$",
      "$A^{-1} = \\frac{1}{21}(9I - A)$",
      "$A^{-1} = \\frac{1}{20}(9I - A)$",
      "$A^{-1} = \\frac{1}{20}(11I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{20}(A - 9I)$",
      "$A^{-1} = \\frac{1}{21}(9I - A)$",
      "$A^{-1} = \\frac{1}{20}(9I - A)$",
      "$A^{-1} = \\frac{1}{20}(11I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{20}(9I - A)$",
    "correctIndex": 2,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 9A + 20I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 9I + 20A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 20A^{-1} = 9I - A \\implies A^{-1} = \\frac{1}{20}(9I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 9A + 20I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 9I + 20A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{20}(9I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_20",
    "titleEn": "Cayley-Hamilton Matrix Inverse #5",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 5",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 11$ and determinant $\\det(A) = 30$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 11$ ومحددها $\\det(A) = 30$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{30}(A - 11I)$",
      "$A^{-1} = \\frac{1}{31}(11I - A)$",
      "$A^{-1} = \\frac{1}{30}(13I - A)$",
      "$A^{-1} = \\frac{1}{30}(11I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{30}(A - 11I)$",
      "$A^{-1} = \\frac{1}{31}(11I - A)$",
      "$A^{-1} = \\frac{1}{30}(13I - A)$",
      "$A^{-1} = \\frac{1}{30}(11I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{30}(11I - A)$",
    "correctIndex": 3,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 11A + 30I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 11I + 30A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 30A^{-1} = 11I - A \\implies A^{-1} = \\frac{1}{30}(11I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 11A + 30I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 11I + 30A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{30}(11I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_21",
    "titleEn": "Cayley-Hamilton Matrix Inverse #6",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 6",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 13$ and determinant $\\det(A) = 42$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 13$ ومحددها $\\det(A) = 42$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{42}(13I - A)$",
      "$A^{-1} = \\frac{1}{42}(A - 13I)$",
      "$A^{-1} = \\frac{1}{43}(13I - A)$",
      "$A^{-1} = \\frac{1}{42}(15I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{42}(13I - A)$",
      "$A^{-1} = \\frac{1}{42}(A - 13I)$",
      "$A^{-1} = \\frac{1}{43}(13I - A)$",
      "$A^{-1} = \\frac{1}{42}(15I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{42}(13I - A)$",
    "correctIndex": 0,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 13A + 42I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 13I + 42A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 42A^{-1} = 13I - A \\implies A^{-1} = \\frac{1}{42}(13I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 13A + 42I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 13I + 42A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{42}(13I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_22",
    "titleEn": "Cayley-Hamilton Matrix Inverse #7",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 7",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 15$ and determinant $\\det(A) = 56$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 15$ ومحددها $\\det(A) = 56$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{56}(A - 15I)$",
      "$A^{-1} = \\frac{1}{56}(15I - A)$",
      "$A^{-1} = \\frac{1}{57}(15I - A)$",
      "$A^{-1} = \\frac{1}{56}(17I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{56}(A - 15I)$",
      "$A^{-1} = \\frac{1}{56}(15I - A)$",
      "$A^{-1} = \\frac{1}{57}(15I - A)$",
      "$A^{-1} = \\frac{1}{56}(17I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{56}(15I - A)$",
    "correctIndex": 1,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 15A + 56I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 15I + 56A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 56A^{-1} = 15I - A \\implies A^{-1} = \\frac{1}{56}(15I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 15A + 56I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 15I + 56A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{56}(15I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_23",
    "titleEn": "Cayley-Hamilton Matrix Inverse #8",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 8",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 17$ and determinant $\\det(A) = 72$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 17$ ومحددها $\\det(A) = 72$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{72}(A - 17I)$",
      "$A^{-1} = \\frac{1}{73}(17I - A)$",
      "$A^{-1} = \\frac{1}{72}(17I - A)$",
      "$A^{-1} = \\frac{1}{72}(19I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{72}(A - 17I)$",
      "$A^{-1} = \\frac{1}{73}(17I - A)$",
      "$A^{-1} = \\frac{1}{72}(17I - A)$",
      "$A^{-1} = \\frac{1}{72}(19I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{72}(17I - A)$",
    "correctIndex": 2,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 17A + 72I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 17I + 72A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 72A^{-1} = 17I - A \\implies A^{-1} = \\frac{1}{72}(17I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 17A + 72I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 17I + 72A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{72}(17I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_24",
    "titleEn": "Cayley-Hamilton Matrix Inverse #9",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 9",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 19$ and determinant $\\det(A) = 90$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 19$ ومحددها $\\det(A) = 90$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{90}(A - 19I)$",
      "$A^{-1} = \\frac{1}{91}(19I - A)$",
      "$A^{-1} = \\frac{1}{90}(21I - A)$",
      "$A^{-1} = \\frac{1}{90}(19I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{90}(A - 19I)$",
      "$A^{-1} = \\frac{1}{91}(19I - A)$",
      "$A^{-1} = \\frac{1}{90}(21I - A)$",
      "$A^{-1} = \\frac{1}{90}(19I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{90}(19I - A)$",
    "correctIndex": 3,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 19A + 90I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 19I + 90A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 90A^{-1} = 19I - A \\implies A^{-1} = \\frac{1}{90}(19I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 19A + 90I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 19I + 90A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{90}(19I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_25",
    "titleEn": "Cayley-Hamilton Matrix Inverse #10",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 10",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 21$ and determinant $\\det(A) = 110$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 21$ ومحددها $\\det(A) = 110$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{110}(21I - A)$",
      "$A^{-1} = \\frac{1}{110}(A - 21I)$",
      "$A^{-1} = \\frac{1}{111}(21I - A)$",
      "$A^{-1} = \\frac{1}{110}(23I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{110}(21I - A)$",
      "$A^{-1} = \\frac{1}{110}(A - 21I)$",
      "$A^{-1} = \\frac{1}{111}(21I - A)$",
      "$A^{-1} = \\frac{1}{110}(23I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{110}(21I - A)$",
    "correctIndex": 0,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 21A + 110I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 21I + 110A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 110A^{-1} = 21I - A \\implies A^{-1} = \\frac{1}{110}(21I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 21A + 110I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 21I + 110A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{110}(21I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_26",
    "titleEn": "Cayley-Hamilton Matrix Inverse #11",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 11",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 23$ and determinant $\\det(A) = 132$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 23$ ومحددها $\\det(A) = 132$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{132}(A - 23I)$",
      "$A^{-1} = \\frac{1}{132}(23I - A)$",
      "$A^{-1} = \\frac{1}{133}(23I - A)$",
      "$A^{-1} = \\frac{1}{132}(25I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{132}(A - 23I)$",
      "$A^{-1} = \\frac{1}{132}(23I - A)$",
      "$A^{-1} = \\frac{1}{133}(23I - A)$",
      "$A^{-1} = \\frac{1}{132}(25I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{132}(23I - A)$",
    "correctIndex": 1,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 23A + 132I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 23I + 132A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 132A^{-1} = 23I - A \\implies A^{-1} = \\frac{1}{132}(23I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 23A + 132I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 23I + 132A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{132}(23I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_27",
    "titleEn": "Cayley-Hamilton Matrix Inverse #12",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 12",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 25$ and determinant $\\det(A) = 156$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 25$ ومحددها $\\det(A) = 156$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{156}(A - 25I)$",
      "$A^{-1} = \\frac{1}{157}(25I - A)$",
      "$A^{-1} = \\frac{1}{156}(25I - A)$",
      "$A^{-1} = \\frac{1}{156}(27I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{156}(A - 25I)$",
      "$A^{-1} = \\frac{1}{157}(25I - A)$",
      "$A^{-1} = \\frac{1}{156}(25I - A)$",
      "$A^{-1} = \\frac{1}{156}(27I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{156}(25I - A)$",
    "correctIndex": 2,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 25A + 156I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 25I + 156A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 156A^{-1} = 25I - A \\implies A^{-1} = \\frac{1}{156}(25I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 25A + 156I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 25I + 156A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{156}(25I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_28",
    "titleEn": "Cayley-Hamilton Matrix Inverse #13",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 13",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 27$ and determinant $\\det(A) = 182$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 27$ ومحددها $\\det(A) = 182$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{182}(A - 27I)$",
      "$A^{-1} = \\frac{1}{183}(27I - A)$",
      "$A^{-1} = \\frac{1}{182}(29I - A)$",
      "$A^{-1} = \\frac{1}{182}(27I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{182}(A - 27I)$",
      "$A^{-1} = \\frac{1}{183}(27I - A)$",
      "$A^{-1} = \\frac{1}{182}(29I - A)$",
      "$A^{-1} = \\frac{1}{182}(27I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{182}(27I - A)$",
    "correctIndex": 3,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 27A + 182I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 27I + 182A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 182A^{-1} = 27I - A \\implies A^{-1} = \\frac{1}{182}(27I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 27A + 182I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 27I + 182A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{182}(27I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_29",
    "titleEn": "Cayley-Hamilton Matrix Inverse #14",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 14",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 29$ and determinant $\\det(A) = 210$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 29$ ومحددها $\\det(A) = 210$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{210}(29I - A)$",
      "$A^{-1} = \\frac{1}{210}(A - 29I)$",
      "$A^{-1} = \\frac{1}{211}(29I - A)$",
      "$A^{-1} = \\frac{1}{210}(31I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{210}(29I - A)$",
      "$A^{-1} = \\frac{1}{210}(A - 29I)$",
      "$A^{-1} = \\frac{1}{211}(29I - A)$",
      "$A^{-1} = \\frac{1}{210}(31I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{210}(29I - A)$",
    "correctIndex": 0,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 29A + 210I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 29I + 210A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 210A^{-1} = 29I - A \\implies A^{-1} = \\frac{1}{210}(29I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 29A + 210I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 29I + 210A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{210}(29I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_30",
    "titleEn": "Cayley-Hamilton Matrix Inverse #15",
    "titleAr": "معكوس المصفوفة بنظرية كايلي-هاميلتون رقم 15",
    "difficulty": "hots",
    "questionEn": "A $2 \\times 2$ invertible matrix $A$ has trace $\\text{Tr}(A) = 31$ and determinant $\\det(A) = 240$. Using the Cayley-Hamilton Theorem, express $A^{-1}$ as a linear combination of $I$ and $A$.",
    "questionAr": "مصفوفة قابلة للعكس $A$ من الرتبة $2 \\times 2$ أثرها $\\text{Tr}(A) = 31$ ومحددها $\\det(A) = 240$. باستخدام نظرية كايلي-هاميلتون، عبّر عن $A^{-1}$ كتركيب خطي بدلالة $I$ و $A$.",
    "optionsEn": [
      "$A^{-1} = \\frac{1}{240}(A - 31I)$",
      "$A^{-1} = \\frac{1}{240}(31I - A)$",
      "$A^{-1} = \\frac{1}{241}(31I - A)$",
      "$A^{-1} = \\frac{1}{240}(33I - A)$"
    ],
    "optionsAr": [
      "$A^{-1} = \\frac{1}{240}(A - 31I)$",
      "$A^{-1} = \\frac{1}{240}(31I - A)$",
      "$A^{-1} = \\frac{1}{241}(31I - A)$",
      "$A^{-1} = \\frac{1}{240}(33I - A)$"
    ],
    "correctAnswer": "$A^{-1} = \\frac{1}{240}(31I - A)$",
    "correctIndex": 1,
    "hintEn": "By Cayley-Hamilton, A^2 - Tr(A)*A + det(A)*I = 0. Multiply through by A^-1.",
    "hintAr": "بنظرية كايلي-هاميلتون: A^2 - Tr(A)A + det(A)I = 0. اضرب المعادلة في معكوس A.",
    "stepByStepSolutionEn": [
      "1. The characteristic equation of a $2 \\times 2$ matrix is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "2. By the Cayley-Hamilton Theorem, $A$ satisfies its own characteristic polynomial:",
      "   $A^2 - 31A + 240I = 0$.",
      "3. Multiply by $A^{-1}$: $A - 31I + 240A^{-1} = 0$.",
      "4. Rearranging for $A^{-1}$: 240A^{-1} = 31I - A \\implies A^{-1} = \\frac{1}{240}(31I - A)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة للمصفوفة $2 \\times 2$ هي $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "٢. بنظرية كايلي-هاميلتون تحقق المصفوفة معادلتها المميزة: $A^2 - 31A + 240I = 0$.",
      "٣. بالضرب في $A^{-1}$: نجد $A - 31I + 240A^{-1} = 0$.",
      "٤. إذن: $A^{-1} = \\frac{1}{240}(31I - A)$."
    ],
    "teacherTipEn": "Cayley-Hamilton allows finding matrix inverses and high powers without computing cofactors.",
    "teacherTipAr": "تمكّن نظرية كايلي-هاميلتون من إيجاد معكوس وقوى المصفوفات دون الحاجة لحساب العوامل المرافقة."
  },
  {
    "id": "egbac_ch2_db_hots_31",
    "titleEn": "Idempotent Projection Subspace Dimension #1",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 1",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 2$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 2$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 2$",
    "correctIndex": 2,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 2$, the target subspace has dimension 2."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 2$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_32",
    "titleEn": "Idempotent Projection Subspace Dimension #2",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 2",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 1$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 1$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$",
      "$\\text{dim}(\\text{Im}(P)) = 1$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$",
      "$\\text{dim}(\\text{Im}(P)) = 1$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 1$",
    "correctIndex": 3,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 1$, the target subspace has dimension 1."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 1$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_33",
    "titleEn": "Idempotent Projection Subspace Dimension #3",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 3",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 2$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 2$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 2$",
    "correctIndex": 0,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 2$, the target subspace has dimension 2."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 2$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_34",
    "titleEn": "Idempotent Projection Subspace Dimension #4",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 4",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 1$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 1$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 1$",
    "correctIndex": 1,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 1$, the target subspace has dimension 1."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 1$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_35",
    "titleEn": "Idempotent Projection Subspace Dimension #5",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 5",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 2$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 2$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 2$",
    "correctIndex": 2,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 2$, the target subspace has dimension 2."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 2$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_36",
    "titleEn": "Idempotent Projection Subspace Dimension #6",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 6",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 1$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 1$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$",
      "$\\text{dim}(\\text{Im}(P)) = 1$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$",
      "$\\text{dim}(\\text{Im}(P)) = 1$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 1$",
    "correctIndex": 3,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 1$, the target subspace has dimension 1."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 1$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_37",
    "titleEn": "Idempotent Projection Subspace Dimension #7",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 7",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 2$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 2$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 2$",
    "correctIndex": 0,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 2$, the target subspace has dimension 2."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 2$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_38",
    "titleEn": "Idempotent Projection Subspace Dimension #8",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 8",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 1$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 1$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 1$",
    "correctIndex": 1,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 1$, the target subspace has dimension 1."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 1$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_39",
    "titleEn": "Idempotent Projection Subspace Dimension #9",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 9",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 2$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 2$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 1$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 0$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 2$",
    "correctIndex": 2,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 2$, the target subspace has dimension 2."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 2$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_40",
    "titleEn": "Idempotent Projection Subspace Dimension #10",
    "titleAr": "بعد فضاء الإسقاط الإسقاطي رقم 10",
    "difficulty": "hots",
    "questionEn": "Let $P$ be a $3 \\times 3$ idempotent matrix representing an orthogonal projection in $\\mathbb{R}^3$ ($P^2 = P$). If $\\text{Tr}(P) = 1$, what is the geometric dimension of the target subspace onto which $P$ projects?",
    "questionAr": "لتكن $P$ مصفوفة من الرتبة $3 \\times 3$ تمثل إسقاطاً متعامداً في $\\mathbb{R}^3$ بحيث ($P^2 = P$). إذا كان أثر المصفوفة $\\text{Tr}(P) = 1$، فما البعد الهندسي للفضاء الجزئي الذي يتم الإسقاط عليه؟",
    "optionsEn": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$",
      "$\\text{dim}(\\text{Im}(P)) = 1$"
    ],
    "optionsAr": [
      "$\\text{dim}(\\text{Im}(P)) = 2$",
      "$\\text{dim}(\\text{Im}(P)) = 3$",
      "$\\text{dim}(\\text{Im}(P)) = 0$",
      "$\\text{dim}(\\text{Im}(P)) = 1$"
    ],
    "correctAnswer": "$\\text{dim}(\\text{Im}(P)) = 1$",
    "correctIndex": 3,
    "hintEn": "For any projection operator, the trace equals the rank, which is the dimension of its image.",
    "hintAr": "لأي مصفوفة إسقاط، الأثر يساوي الرتبة التي تمثل بعد فضاء الصورة المسقط عليها.",
    "stepByStepSolutionEn": [
      "1. Since $P^2 = P$, the eigenvalues of $P$ can only be $0$ or $1$.",
      "2. The trace of a matrix equals the sum of its eigenvalues: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "3. Therefore, $\\text{Tr}(P)$ counts the multiplicity of the eigenvalue $1$, which equals $\\text{rank}(P)$.",
      "4. Since $\\text{dim}(\\text{Im}(P)) = \\text{rank}(P) = \\text{Tr}(P) = 1$, the target subspace has dimension 1."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $P^2 = P$، فإن القيم الذاتية لمصفوفة الإسقاط لا يمكن أن تكون إلا ٠ أو ١.",
      "٢. أثر المصفوفة يساوي مجموع قيمها الذاتية: $\\text{Tr}(P) = \\sum \\lambda_i$.",
      "٣. بالتالي فإن الأثر يعد عدد القيم الذاتية المساوية لـ ١، وهو ما يطابق رتبة المصفوفة.",
      "٤. إذن بعد فضاء الصورة هو $\\text{rank}(P) = \\text{Tr}(P) = 1$."
    ],
    "teacherTipEn": "For idempotent matrices (P^2 = P), rank(P) = Tr(P) always holds.",
    "teacherTipAr": "للمصفوفات الإسقاطية، الرتبة تساوي الأثر دائماً."
  },
  {
    "id": "egbac_ch2_db_hots_41",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #1",
    "titleAr": "المسافة بين مستويين متوازيين رقم 1",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 2 = 0$ and $\\Pi_2: 2x + 3y + 6z + 9 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 2 = 0$ و $\\Pi_2: 2x + 3y + 6z + 9 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 1$",
      "$d = 3$",
      "$d = 2$",
      "$d = 4$"
    ],
    "optionsAr": [
      "$d = 1$",
      "$d = 3$",
      "$d = 2$",
      "$d = 4$"
    ],
    "correctAnswer": "$d = 1$",
    "correctIndex": 0,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|9 - (2)|}{7} = \\frac{7}{7} = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|9 - 2|}{7} = \\frac{7}{7} = 1$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  },
  {
    "id": "egbac_ch2_db_hots_42",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #2",
    "titleAr": "المسافة بين مستويين متوازيين رقم 2",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 4 = 0$ and $\\Pi_2: 2x + 3y + 6z + 18 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 4 = 0$ و $\\Pi_2: 2x + 3y + 6z + 18 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 4$",
      "$d = 2$",
      "$d = 3$",
      "$d = 5$"
    ],
    "optionsAr": [
      "$d = 4$",
      "$d = 2$",
      "$d = 3$",
      "$d = 5$"
    ],
    "correctAnswer": "$d = 2$",
    "correctIndex": 1,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|18 - (4)|}{7} = \\frac{14}{7} = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|18 - 4|}{7} = \\frac{14}{7} = 2$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  },
  {
    "id": "egbac_ch2_db_hots_43",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #3",
    "titleAr": "المسافة بين مستويين متوازيين رقم 3",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 6 = 0$ and $\\Pi_2: 2x + 3y + 6z + 27 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 6 = 0$ و $\\Pi_2: 2x + 3y + 6z + 27 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 5$",
      "$d = 4$",
      "$d = 3$",
      "$d = 6$"
    ],
    "optionsAr": [
      "$d = 5$",
      "$d = 4$",
      "$d = 3$",
      "$d = 6$"
    ],
    "correctAnswer": "$d = 3$",
    "correctIndex": 2,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|27 - (6)|}{7} = \\frac{21}{7} = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|27 - 6|}{7} = \\frac{21}{7} = 3$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  },
  {
    "id": "egbac_ch2_db_hots_44",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #4",
    "titleAr": "المسافة بين مستويين متوازيين رقم 4",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 8 = 0$ and $\\Pi_2: 2x + 3y + 6z + 36 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 8 = 0$ و $\\Pi_2: 2x + 3y + 6z + 36 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 6$",
      "$d = 5$",
      "$d = 7$",
      "$d = 4$"
    ],
    "optionsAr": [
      "$d = 6$",
      "$d = 5$",
      "$d = 7$",
      "$d = 4$"
    ],
    "correctAnswer": "$d = 4$",
    "correctIndex": 3,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|36 - (8)|}{7} = \\frac{28}{7} = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|36 - 8|}{7} = \\frac{28}{7} = 4$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  },
  {
    "id": "egbac_ch2_db_hots_45",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #5",
    "titleAr": "المسافة بين مستويين متوازيين رقم 5",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 10 = 0$ and $\\Pi_2: 2x + 3y + 6z + 45 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 10 = 0$ و $\\Pi_2: 2x + 3y + 6z + 45 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 5$",
      "$d = 7$",
      "$d = 6$",
      "$d = 8$"
    ],
    "optionsAr": [
      "$d = 5$",
      "$d = 7$",
      "$d = 6$",
      "$d = 8$"
    ],
    "correctAnswer": "$d = 5$",
    "correctIndex": 0,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|45 - (10)|}{7} = \\frac{35}{7} = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|45 - 10|}{7} = \\frac{35}{7} = 5$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  },
  {
    "id": "egbac_ch2_db_hots_46",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #6",
    "titleAr": "المسافة بين مستويين متوازيين رقم 6",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 12 = 0$ and $\\Pi_2: 2x + 3y + 6z + 54 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 12 = 0$ و $\\Pi_2: 2x + 3y + 6z + 54 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 8$",
      "$d = 6$",
      "$d = 7$",
      "$d = 9$"
    ],
    "optionsAr": [
      "$d = 8$",
      "$d = 6$",
      "$d = 7$",
      "$d = 9$"
    ],
    "correctAnswer": "$d = 6$",
    "correctIndex": 1,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|54 - (12)|}{7} = \\frac{42}{7} = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|54 - 12|}{7} = \\frac{42}{7} = 6$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  },
  {
    "id": "egbac_ch2_db_hots_47",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #7",
    "titleAr": "المسافة بين مستويين متوازيين رقم 7",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 14 = 0$ and $\\Pi_2: 2x + 3y + 6z + 63 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 14 = 0$ و $\\Pi_2: 2x + 3y + 6z + 63 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 9$",
      "$d = 8$",
      "$d = 7$",
      "$d = 10$"
    ],
    "optionsAr": [
      "$d = 9$",
      "$d = 8$",
      "$d = 7$",
      "$d = 10$"
    ],
    "correctAnswer": "$d = 7$",
    "correctIndex": 2,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|63 - (14)|}{7} = \\frac{49}{7} = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|63 - 14|}{7} = \\frac{49}{7} = 7$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  },
  {
    "id": "egbac_ch2_db_hots_48",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #8",
    "titleAr": "المسافة بين مستويين متوازيين رقم 8",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 16 = 0$ and $\\Pi_2: 2x + 3y + 6z + 72 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 16 = 0$ و $\\Pi_2: 2x + 3y + 6z + 72 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 10$",
      "$d = 9$",
      "$d = 11$",
      "$d = 8$"
    ],
    "optionsAr": [
      "$d = 10$",
      "$d = 9$",
      "$d = 11$",
      "$d = 8$"
    ],
    "correctAnswer": "$d = 8$",
    "correctIndex": 3,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|72 - (16)|}{7} = \\frac{56}{7} = 8$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|72 - 16|}{7} = \\frac{56}{7} = 8$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  },
  {
    "id": "egbac_ch2_db_hots_49",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #9",
    "titleAr": "المسافة بين مستويين متوازيين رقم 9",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 18 = 0$ and $\\Pi_2: 2x + 3y + 6z + 81 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 18 = 0$ و $\\Pi_2: 2x + 3y + 6z + 81 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 9$",
      "$d = 11$",
      "$d = 10$",
      "$d = 12$"
    ],
    "optionsAr": [
      "$d = 9$",
      "$d = 11$",
      "$d = 10$",
      "$d = 12$"
    ],
    "correctAnswer": "$d = 9$",
    "correctIndex": 0,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|81 - (18)|}{7} = \\frac{63}{7} = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|81 - 18|}{7} = \\frac{63}{7} = 9$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  },
  {
    "id": "egbac_ch2_db_hots_50",
    "titleEn": "Distance Between Parallel Affine Hyperplanes #10",
    "titleAr": "المسافة بين مستويين متوازيين رقم 10",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance $d$ between the two parallel planes $\\Pi_1: 2x + 3y + 6z + 20 = 0$ and $\\Pi_2: 2x + 3y + 6z + 90 = 0$ in $\\mathbb{R}^3$.",
    "questionAr": "احسب البعد العمودي $d$ بين المستويين المتوازيين $\\Pi_1: 2x + 3y + 6z + 20 = 0$ و $\\Pi_2: 2x + 3y + 6z + 90 = 0$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = 12$",
      "$d = 10$",
      "$d = 11$",
      "$d = 13$"
    ],
    "optionsAr": [
      "$d = 12$",
      "$d = 10$",
      "$d = 11$",
      "$d = 13$"
    ],
    "correctAnswer": "$d = 10$",
    "correctIndex": 1,
    "hintEn": "The distance between parallel planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0 is |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين يساوي |D1 - D2| مقسوماً على جذر(A^2 + B^2 + C^2).",
    "stepByStepSolutionEn": [
      "1. Identify normal vector $\\vec{n} = (2, 3, 6)$.",
      "2. $\\|\\vec{n}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Apply parallel hyperplane distance formula: $d = \\frac{|90 - (20)|}{7} = \\frac{70}{7} = 10$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي المشترك هو $\\vec{n} = (2, 3, 6)$.",
      "٢. معيار المتجه العمودي: $\\|\\vec{n}\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "٣. قانون البعد بين مستويين متوازيين: $d = \\frac{|90 - 20|}{7} = \\frac{70}{7} = 10$."
    ],
    "teacherTipEn": "Always verify the normal vector coefficients are identical before taking |D1 - D2|.",
    "teacherTipAr": "تأكد دائماً من تطابق معاملات المتجه العمودي قبل أخذ الفرق بين الحدين المطلقين."
  }
]
};
