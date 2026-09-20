import type { Branch } from '../types/curriculum';
import { commCh1SolvedExamples, commCh1Exercises } from './textbook/thanaweya/commCh1Textbook';
import { commCh2SolvedExamples, commCh2Exercises } from './textbook/thanaweya/commCh2Textbook';
import { commCh3SolvedExamples, commCh3Exercises } from './textbook/thanaweya/commCh3Textbook';
import { commCh4SolvedExamples, commCh4Exercises } from './textbook/thanaweya/commCh4Textbook';
import { commCh1Databank } from './databanks/thanaweya/commCh1Databank';
import { commCh2Databank } from './databanks/thanaweya/commCh2Databank';
import { commCh3Databank } from './databanks/thanaweya/commCh3Databank';
import { commCh4Databank } from './databanks/thanaweya/commCh4Databank';

export const thanaweyaCommercialBranch: Branch = {
  id: 'thanaweya_commercial',
  titleEn: 'Commercial Sciences, Financial Accounting & Banking',
  titleAr: 'العلوم التجارية والمحاسبة والمالية والمصرفية',
  iconName: 'Landmark',
  colorGradient: 'from-teal-800 via-emerald-800 to-slate-900',
  categoryEn: 'Commercial Sciences & Financial Studies',
  categoryAr: 'العلوم التجارية والدراسات المالية والمصرفية',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_comm_ch1',
      chapterNumber: 1,
      titleEn: 'Financial Accounting Principles, Double-Entry & Ledger Balancing',
      titleAr: 'أصول ومبادئ المحاسبة المالية وقيود اليومية وموازين المراجعة',
      descriptionEn: 'The fundamental accounting equation, double-entry journal entries, general ledger posting, trial balance, adjusting entries, and financial statements.',
      descriptionAr: 'معادلة المحاسبة الأساسية، قيود اليومية بنظام القيد المزدوج، الترحيل للأستاذ العام، ميزان المراجعة، قيود التسوية، وإعداد القوائم المالية الختامية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_comm_ch1_l1',
          titleEn: 'Accounting Cycle & Double-Entry Bookkeeping Principles',
          titleAr: 'الدورة المحاسبية ومبادئ القيد المزدوج وإعداد القوائم',
          summaryEn: 'Fundamental principles of debit and credit, journalizing transactions, ledger accounts, and balance sheet reconciliation.',
          summaryAr: 'المبادئ الأساسية للمدين والدائن، تسجيل العمليات المالية باليومية، حسابات الأستاذ، وإعداد الميزانية العمومية.',
          theoryContentEn: 'Financial accounting provides systematic documentation of business transactions according to generally accepted accounting principles. The double-entry framework ensures mathematical balance where debits always equal credits, producing financial statements that reflect true operating performance and solvency.',
          theoryContentAr: 'توفر المحاسبة المالية تسجيلاً وتبويباً منهجياً للمعاملات الاقتصادية للمنشأة وفق المبادئ المحاسبية المتعارف عليها. ويضمن نظام القيد المزدوج التوازن الرياضي حيث يتساوى الطرفان المدين والدائن دائماً، مما ينتج قوائم مالية تعبر بصدق عن نتائج الأعمال والمركز المالي.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Commercial Sciences & Accounting',
            bookTitleAr: 'كتاب العلوم التجارية والمحاسبة المالية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-COMM-G12-CH1',
            pageRange: 'pp. 1-46'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: The Double-Entry Framework and Trial Balance',
            titleAr: 'خطة الدرس: نظام القيد المزدوج وميزان المراجعة والتسويات',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Analyze the fundamental accounting equation and effect of business transactions',
              'Record compound journal entries and post to general ledger T-accounts',
              'Prepare adjusted trial balance and classified balance sheet'
            ]
          },
          worksheet: {
            id: 'ws_th_comm_ch1_l1',
            titleEn: 'Worksheet 1: Double-Entry Ledger & Adjusting Entries',
            titleAr: 'ورقة عمل 1: القيد المزدوج وترصيد الأستاذ والتسويات الجردية',
            descriptionEn: 'Practice journal entries, ledger balancing, and income statement preparation.',
            descriptionAr: 'تدرب على قيود اليومية والترحيل للأستاذ وإعداد قائمة الدخل.',
            estimatedTimeMinutes: 45,
            problems: commCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'comm_financial_statements_lab',
            titleEn: 'Financial Statements & Ledger Balancing Studio',
            titleAr: 'مختبر القوائم المالية وترصيد الدفاتر المحاسبية',
            descriptionEn: 'Interactive T-account posting, automated trial balance validation, and ratio analysis.',
            descriptionAr: 'محاكاة تفاعلية لحسابات الأستاذ، التحقق التلقائي من ميزان المراجعة، والتحليل المالي بالنسب.'
          }
        }
      ],
      solvedExamples: commCh1SolvedExamples,
      exerciseProblems: commCh1Exercises,
      databank: commCh1Databank
    },
    {
      id: 'th_comm_ch2',
      chapterNumber: 2,
      titleEn: 'Financial Mathematics, Compound Interest & Annuities',
      titleAr: 'الرياضة المالية وحساب الفائدة المركبة والأقساط والاستهلاك',
      descriptionEn: 'Simple and compound interest formulas, nominal versus effective interest rates, ordinary annuities and annuities due, loan amortization schedules, and bond valuation.',
      descriptionAr: 'قوانين الفائدة البسيطة والمركبة، المعدل الاسمي والمعدل الفعلي، الدفعات العادية والدفعات المستحقة، جداول استهلاك القروض، وتقييم السندات المالية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_comm_ch2_l1',
          titleEn: 'Compound Interest Accumulation and Loan Amortization',
          titleAr: 'تراكم الفائدة المركبة والدفعات واستهلاك القروض',
          summaryEn: 'Mathematical formulation of compound interest, effective annual yields, future and present values of annuities, and amortization tables.',
          summaryAr: 'الصياغة الرياضية للفائدة المركبة، العائد السنوي الفعلي، القيمة الحالية والمستقبلية للدفعات، وجداول سداد القروض.',
          theoryContentEn: 'Financial mathematics applies exponential functions and geometric progressions to model capital accumulation over time. Compound interest reinvests periodic returns, while annuity formulas determine equal installments for debt retirement and capital accumulation funds.',
          theoryContentAr: 'تطبق الرياضة المالية الدوال الأسية والمتواليات الهندسية لنمذجة نمو وتراكم رؤوس الأموال عبر الزمن. وتقوم الفائدة المركبة على إعادة استثمار العوائد الدورية، بينما تتيح قوانين الدفعات تحديد الأقساط المتساوية لاستهلاك القروض وتكوين أموال التجديد.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Commercial Sciences & Accounting',
            bookTitleAr: 'كتاب العلوم التجارية والمحاسبة المالية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-COMM-G12-CH2',
            pageRange: 'pp. 47-92'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Compound Interest and Equal Loan Installments',
            titleAr: 'خطة الدرس: الفائدة المركبة والأقساط المتساوية لسداد القروض',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate future value and compound interest for periodic compounding',
              'Evaluate present and future values of ordinary annuities and annuities due',
              'Construct complete loan amortization schedules showing interest and principal breakdown'
            ]
          },
          worksheet: {
            id: 'ws_th_comm_ch2_l1',
            titleEn: 'Worksheet 2: Annuities & Loan Amortization Schedules',
            titleAr: 'ورقة عمل 2: حساب الدفعات وجداول استهلاك القروض',
            descriptionEn: 'Solve compound interest formulas, effective rate conversions, and loan repayment tables.',
            descriptionAr: 'حل مسائل الفائدة المركبة ومعدلات الفائدة الفعلية وجداول سداد الديون.',
            estimatedTimeMinutes: 45,
            problems: commCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'comm_compound_interest_lab',
            titleEn: 'Compound Interest & Annuity Simulator',
            titleAr: 'محاكي الفائدة المركبة والدفعات وجداول القروض',
            descriptionEn: 'Interactive compound accumulation graph, periodic payment solver, and full loan amortization table generator.',
            descriptionAr: 'رسم بياني تفاعلي لتراكم الفوائد، حاسبة الأقساط الدورية، ومولد جداول استهلاك القروض بالكامل.'
          }
        }
      ],
      solvedExamples: commCh2SolvedExamples,
      exerciseProblems: commCh2Exercises,
      databank: commCh2Databank
    },
    {
      id: 'th_comm_ch3',
      chapterNumber: 3,
      titleEn: 'Commercial Law, Corporate Governance & Negotiable Instruments',
      titleAr: 'القانون التجاري وحوكمة الشركات والأوراق التجارية',
      descriptionEn: 'Commercial acts, merchant capacity, business legal forms (Sole Proprietorship, Partnership, Joint Stock Companies under Law 159/1981), negotiable instruments, and governance.',
      descriptionAr: 'الأعمال التجارية، الأهلية التجارية، الأشكال القانونية للشركات (شركات الأشخاص والأموال وقانون 159 لسنة 1981)، الأوراق التجارية وحوكمة الشركات والإفلاس.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_comm_ch3_l1',
          titleEn: 'Commercial Legislation, Corporate Structures & Commercial Papers',
          titleAr: 'التشريع التجاري والشركات والأوراق التجارية والحوكمة',
          summaryEn: 'Legal framework governing commercial transactions, trader obligations, company formation under Egyptian Law 159/1981, and negotiable instrument rules.',
          summaryAr: 'الإطار القانوني المنظم للأعمال التجارية، التزامات التاجر، تأسيس الشركات وفق القانون 159 لسنة 1981، وأحكام الأوراق التجارية.',
          theoryContentEn: 'Commercial law establishes the legal foundation for mercantile credit, trade contracts, and enterprise governance. It defines commercial capacity, regulates partnerships and corporations with limited liability, and protects the circulation of negotiable instruments like cheques and promissory notes.',
          theoryContentAr: 'يحدد القانون التجاري الركيزة التشريعية للائتمان التجاري والعقود وإدارة المنشآت. ويفصل قواعد الأهلية التجارية، وينظم شركات الأشخاص وشركات الأموال ذات المسؤولية المحدودة، ويحمي تداول الأوراق التجارية كالشيكات والكمبيالات باعتبارها أدوات وفاء وائتمان بديلة للنقود.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Commercial Sciences & Accounting',
            bookTitleAr: 'كتاب العلوم التجارية والمحاسبة المالية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-COMM-G12-CH3',
            pageRange: 'pp. 93-138'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Negotiable Instruments and Corporate Legal Structures',
            titleAr: 'خطة الدرس: الأوراق التجارية والأشكال القانونية للشركات',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Differentiate between commercial acts by nature and commercial acts by accession',
              'Compare shareholder liability in partnerships versus joint stock companies',
              'Analyze legal requirements and consequences of dishonored cheques and endorsements'
            ]
          },
          worksheet: {
            id: 'ws_th_comm_ch3_l1',
            titleEn: 'Worksheet 3: Negotiable Instruments & Corporate Law',
            titleAr: 'ورقة عمل 3: الأوراق التجارية وقوانين الشركات المصرية',
            descriptionEn: 'Analyze legal scenarios involving commercial papers, shareholder protections, and merchant obligations.',
            descriptionAr: 'تحليل مواقف قانونية للأوراق التجارية وحقوق المساهمين والتزامات التجار.',
            estimatedTimeMinutes: 45,
            problems: commCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'commercial_finance_studio',
            titleEn: 'Commercial Law & Corporate Governance Matrix',
            titleAr: 'مصفوفة القانون التجاري وحوكمة الشركات',
            descriptionEn: 'Interactive comparison of business legal entities, negotiable instrument validity checker, and corporate governance compliance checklist.',
            descriptionAr: 'مقارنة تفاعلية للكيانات القانونية، فاحص صحة الأوراق التجارية، وقائمة التحقق من معايير حوكمة الشركات.'
          }
        }
      ],
      solvedExamples: commCh3SolvedExamples,
      exerciseProblems: commCh3Exercises,
      databank: commCh3Databank
    },
    {
      id: 'th_comm_ch4',
      chapterNumber: 4,
      titleEn: 'Egyptian Tax Accounting & Public Finance Legislation',
      titleAr: 'المحاسبة الضريبية وتشريعات المالية العامة المصرية',
      descriptionEn: 'State public budget, Egyptian income tax (Law 91/2005 & amendments), salary tax brackets, corporate taxable profit reconciliation, VAT (Law 67/2016), and electronic invoicing.',
      descriptionAr: 'الموازنة العامة للدولة، قانون الضريبة على الدخل 91 لسنة 2005 وتعديلاته، ضريبة المرتبات، الضريبة على أرباح الأشخاص الاعتبارية، ضريبة القيمة المضافة والفاتورة الإلكترونية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_comm_ch4_l1',
          titleEn: 'Tax Legislation, Fiscal Policy & Corporate Tax Accounting',
          titleAr: 'التشريع الضريبي والسياسة المالية والمحاسبة الضريبية للشركات',
          summaryEn: 'Analysis of public state budget revenues, progressive wage taxation, corporate taxable profit adjustments, and value-added tax mechanisms.',
          summaryAr: 'تحليل إيرادات الموازنة العامة، الشرائح التصاعدية لضريبة الأجور، تسوية أرباح الشركات الخاضعة للضريبة، وآليات ضريبة القيمة المضافة.',
          theoryContentEn: 'Public finance and tax accounting govern the allocation of sovereign national resources and public expenditure. Egyptian tax legislation establishes progressive taxation on individual earnings, corporate profit adjustments for tax-deductible items, and value-added tax compliance linked to electronic invoicing platforms.',
          theoryContentAr: 'تنظم المالية العامة والمحاسبة الضريبية تدبير الموارد السيادية وتمويل الإنفاق العام للدولة. ويحدد التشريع الضريبي المصري ضريبة تصاعدية عادلة على دخول الأفراد، وقواعد تسوية الأرباح المحاسبية للشركات لاحتساب الوعاء الضريبي، وضريبة القيمة المضافة المرتبطة بمنظومة الفاتورة الإلكترونية.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Commercial Sciences & Accounting',
            bookTitleAr: 'كتاب العلوم التجارية والمحاسبة المالية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-COMM-G12-CH4',
            pageRange: 'pp. 139-184'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Corporate Tax Reconciliation and Progressive Salary Tax',
            titleAr: 'خطة الدرس: التسوية الضريبية للشركات وشرائح ضريبة المرتبات',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate personal exemption and progressive income tax brackets on annual salaries',
              'Reconcile net accounting profit to taxable corporate income under Law 91/2005',
              'Compute net monthly VAT liability offsetting input tax against output tax'
            ]
          },
          worksheet: {
            id: 'ws_th_comm_ch4_l1',
            titleEn: 'Worksheet 4: Egyptian Tax Accounting & VAT Schedules',
            titleAr: 'ورقة عمل 4: المحاسبة الضريبية المصرية وحسابات القيمة المضافة',
            descriptionEn: 'Compute progressive salary tax schedules, corporate tax returns, and VAT monthly settlements.',
            descriptionAr: 'احسب شرائح ضريبة المرتبات، الإقرارات الضريبية للشركات، وتسويات ضريبة القيمة المضافة.',
            estimatedTimeMinutes: 45,
            problems: commCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'commercial_finance_studio',
            titleEn: 'Commercial Sciences Master Studio',
            titleAr: 'الاستوديو الشامل للعلوم التجارية والمالية والمصرفية',
            descriptionEn: 'Full 5-station commercial studio integrating financial statements, compound interest, capital budgeting, banking credit, and portfolio risk.',
            descriptionAr: 'استوديو تجاري ومالي متكامل بخمس محطات يغطي القوائم المالية، الفائدة المركبة، الموازنات الرأسمالية، الائتمان المصرفي، وإدارة محافظ الاستثمار.'
          }
        }
      ],
      solvedExamples: commCh4SolvedExamples,
      exerciseProblems: commCh4Exercises,
      databank: commCh4Databank
    }
  ]
};
