import type { Branch } from '../types/curriculum';
import { egBacCommCh1SolvedExamples, egBacCommCh1Exercises } from './textbook/egbac/egBacCommCh1Textbook';
import { egBacCommCh2SolvedExamples, egBacCommCh2Exercises } from './textbook/egbac/egBacCommCh2Textbook';
import { egBacCommCh3SolvedExamples, egBacCommCh3Exercises } from './textbook/egbac/egBacCommCh3Textbook';
import { egBacCommCh4SolvedExamples, egBacCommCh4Exercises } from './textbook/egbac/egBacCommCh4Textbook';
import { egBacCommCh1Databank } from './databanks/egbac/egBacCommCh1Databank';
import { egBacCommCh2Databank } from './databanks/egbac/egBacCommCh2Databank';
import { egBacCommCh3Databank } from './databanks/egbac/egBacCommCh3Databank';
import { egBacCommCh4Databank } from './databanks/egbac/egBacCommCh4Databank';

export const egBacCommercialBranch: Branch = {
  id: 'egbac_commercial',
  titleEn: 'Advanced Corporate Finance, Banking & FinTech Systems',
  titleAr: 'الإدارة المالية المتقدمة والعمليات المصرفية والتكنولوجيا المالية',
  iconName: 'Landmark',
  colorGradient: 'from-emerald-700 via-teal-800 to-slate-950',
  categoryEn: 'Commercial Sciences & Financial Studies',
  categoryAr: 'العلوم التجارية والدراسات المالية والمصرفية',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_comm_ch1',
      chapterNumber: 1,
      titleEn: 'Corporate Financial Management, Capital Budgeting & Valuation',
      titleAr: 'الإدارة المالية المتقدمة وتقييم المشاريع الرأسمالية وقيمة المنشأة',
      descriptionEn: 'Time value of money, discounted cash flow (DCF), capital budgeting decision rules (NPV, IRR, PI), WACC, and working capital optimization.',
      descriptionAr: 'القيمة الزمنية للنقود، التدفقات النقدية المخصومة، معايير تقييم المشاريع (NPV وIRR)، تكلفة رأس المال المرجحة WACC، وإدارة رأس المال العامل.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_comm_ch1_l1',
          titleEn: 'Capital Budgeting, DCF Modeling & Corporate Valuation',
          titleAr: 'تقييم المشاريع الرأسمالية والتدفقات المخصومة وتقييم الشركات',
          summaryEn: 'Comprehensive evaluation of project investments using Net Present Value, Internal Rate of Return, and WACC hurdle rate optimization.',
          summaryAr: 'تقييم شامل للاستثمارات الرأسمالية باستخدام صافي القيمة الحالية ومعدل العائد الداخلي وتكلفة التمويل المرجحة WACC.',
          theoryContentEn: 'Corporate financial management maximizes shareholder wealth through rigorous capital allocation. Discounted cash flow (DCF) models quantify net value creation by discounting projected free cash flows at the weighted average cost of capital (WACC), establishing analytical superiority of NPV over accounting metrics.',
          theoryContentAr: 'تهدف الإدارة المالية المتقدمة لتعظيم ثروة المساهمين عبر التخصيص الكفء للموارد الرأسمالية. وتقيس نماذج التدفقات النقدية المخصومة القيمة المضافة الصافية بخصم التدفقات النقدية الحرة بتكلفة رأس المال المرجحة (WACC)، مما يثبت تفوق معيار NPV تحليلياً على مقاييس الأرباح المحاسبية.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Corporate Finance & Banking',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الإدارة المالية والمصرفية',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-COMM-G12-M1',
            pageRange: 'pp. 1-54'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: DCF Valuation, NPV Sensitivity, and Capital Structure',
            titleAr: 'خطة الدرس: تقييم التدفقات المخصومة، حساسية NPV، وهيكل رأس المال',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Construct discounted cash flow models with terminal value estimations',
              'Calculate and reconcile NPV, IRR, and Profitability Index rankings',
              'Determine optimal debt-equity weightings to minimize firm WACC'
            ]
          },
          worksheet: {
            id: 'ws_egbac_comm_ch1_l1',
            titleEn: 'Worksheet 1: Capital Budgeting & WACC Calculations',
            titleAr: 'ورقة عمل 1: الموازنة الرأسمالية وحسابات تكلفة رأس المال WACC',
            descriptionEn: 'Solve DCF valuation problems, NPV investment comparisons, and working capital cycles.',
            descriptionAr: 'حل مسائل التدفقات النقدية المخصومة والمفاضلة الاستثمارية ودورة رأس المال العامل.',
            estimatedTimeMinutes: 45,
            problems: egBacCommCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'comm_capital_budgeting_lab',
            titleEn: 'Capital Budgeting & DCF Valuation Lab',
            titleAr: 'مختبر تقييم المشاريع الرأسمالية والتدفقات المخصومة',
            descriptionEn: 'Interactive project cash flow modeler with live NPV profile curve, IRR calculation, and WACC sensitivity matrix.',
            descriptionAr: 'نمذجة تفاعلية للتدفقات النقدية مع منحنى حساسية صافي القيمة الحالية، وحساب العائد الداخلي ومصفوفة WACC.'
          }
        }
      ],
      solvedExamples: egBacCommCh1SolvedExamples,
      exerciseProblems: egBacCommCh1Exercises,
      databank: egBacCommCh1Databank
    },
    {
      id: 'egbac_comm_ch2',
      chapterNumber: 2,
      titleEn: 'Commercial Banking Operations, Central Bank Monetary Policy & Credit Analysis',
      titleAr: 'العمليات المصرفية والسياسة النقدية للبنك المركزي وتحليل الائتمان',
      descriptionEn: 'Central bank functions, monetary policy corridor rates, commercial bank deposits, trade finance (L/Cs, L/Gs), credit risk rating, and Basel III standards.',
      descriptionAr: 'وظائف البنك المركزي، أسعار فائدة الكوريدور، الودائع المصرفية، تمويل التجارة (خطابات الاعتماد والضمان)، الجدارة الائتمانية، ومعايير بازل 3.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_comm_ch2_l1',
          titleEn: 'Central Banking, Monetary Policy & Commercial Credit Risk',
          titleAr: 'البنوك المركزية والسياسة النقدية وإدارة المخاطر الائتمانية',
          summaryEn: 'Analysis of central bank monetary transmission, reserve ratio dynamics, commercial trade finance, and Basel regulatory capital frameworks.',
          summaryAr: 'تحليل آليات انتقال السياسة النقدية، مضاعف النقود والاحتياطي، تمويل التجارة الخارجية، وأطر بازل الرقابية لرأس المال.',
          theoryContentEn: 'Modern banking balances liquidity maintenance with credit expansion under central bank oversight. Monetary policy transmission directs interbank borrowing costs and macroeconomic liquidity, while commercial banks manage counterparty credit risk through structured covenants and Basel III capital adequacy ratios.',
          theoryContentAr: 'توازن المصارف الحديثة بين إدارة السيولة والتوسع في منح الائتمان تحت رقابة البنك المركزي. وتوجه أدوات السياسة النقدية تكاليف التمويل والسيولة الكلية في الاقتصاد، بينما تدير البنوك التجارية مخاطر الائتمان عبر الضمانات والتحليل المالي ونسب كفاية رأس المال المقررة في بازل ٣.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Corporate Finance & Banking',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الإدارة المالية والمصرفية',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-COMM-G12-M2',
            pageRange: 'pp. 55-108'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Monetary Policy Transmission and Basel III Capital Adequacy',
            titleAr: 'خطة الدرس: قنوات السياسة النقدية ومعايير كفاية رأس المال بازل 3',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Evaluate the impact of corridor rate adjustments on credit expansion',
              'Calculate deposit expansion multiplier and excess bank reserve requirements',
              'Assess borrower risk ratings using the 5 Cs and calculate bank Capital Adequacy Ratios'
            ]
          },
          worksheet: {
            id: 'ws_egbac_comm_ch2_l1',
            titleEn: 'Worksheet 2: Banking Operations & Credit Assessment',
            titleAr: 'ورقة عمل 2: العمليات المصرفية وتقييم المخاطر الائتمانية',
            descriptionEn: 'Compute credit risk scores, deposit multipliers, and regulatory capital adequacy percentages.',
            descriptionAr: 'احسب درجات المخاطر الائتمانية ومضاعف الودائع ونسب كفاية رأس المال الرقابي.',
            estimatedTimeMinutes: 45,
            problems: egBacCommCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'comm_banking_credit_lab',
            titleEn: 'Commercial Banking & Credit Risk Simulator',
            titleAr: 'محاكي العمليات المصرفية والتقييم الائتماني وبازل 3',
            descriptionEn: 'Interactive credit scoring model, monetary policy reserve simulator, and Basel III capital adequacy calculator.',
            descriptionAr: 'نموذج تفاعلي للجدارة الائتمانية، محاكاة أثر الاحتياطي الإلزامي، وحاسبة كفاية رأس المال المصرفي.'
          }
        }
      ],
      solvedExamples: egBacCommCh2SolvedExamples,
      exerciseProblems: egBacCommCh2Exercises,
      databank: egBacCommCh2Databank
    },
    {
      id: 'egbac_comm_ch3',
      chapterNumber: 3,
      titleEn: 'Financial Markets, Investment Portfolios & Derivatives',
      titleAr: 'الأسواق المالية وإدارة المحافظ الاستثمارية والمشتقات المالية',
      descriptionEn: 'Primary and secondary capital markets, EGX trading mechanisms, Modern Portfolio Theory (MPT), CAPM beta modeling, and financial derivative hedging.',
      descriptionAr: 'الأسواق المالية الأولية والثانوية، آليات البورصة المصرية EGX، نظرية المحفظة لماركويتز، نموذج تسعير الأصول CAPM، وعقود المشتقات المالية والتحوط.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_comm_ch3_l1',
          titleEn: 'Portfolio Optimization, CAPM Valuation & Financial Derivatives',
          titleAr: 'تحسين المحافظ الاستثمارية ونموذج CAPM والمشتقات المالية',
          summaryEn: 'Quantitative portfolio diversification, Markowitz efficient frontier, systematic risk beta estimation, and derivative hedging strategies.',
          summaryAr: 'التنويع الكمي للمحافظ، الحد الكفء لماركويتز، تقدير مخاطر بيتا السوقية، واستراتيجيات التحوط بالمشتقات المالية.',
          theoryContentEn: 'Capital markets channel savings into productive investments through transparent pricing mechanisms. Modern Portfolio Theory proves that asset diversification eliminates unsystematic firm risk, allowing the Capital Asset Pricing Model to price securities solely on nondiversifiable systematic market risk (Beta).',
          theoryContentAr: 'توجه أسواق المال المدخرات إلى الاستثمارات الإنتاجية عبر آليات تسعير شفافة. وتثبت نظرية المحفظة الحديثة أن التنويع يلغي المخاطر الخاصة بالشركات، مما يمكن نموذج تسعير الأصول الرأسمالية (CAPM) من تسعير الأوراق المالية استناداً فقط إلى مخاطر السوق المنتظمة المقاسة بمعامل بيتا.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Corporate Finance & Banking',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الإدارة المالية والمصرفية',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-COMM-G12-M3',
            pageRange: 'pp. 109-162'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Markowitz Diversification and SML Security Valuation',
            titleAr: 'خطة الدرس: تنويع ماركويتز وتقييم الأوراق المالية عبر خط سوق الأوراق SML',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate two-asset portfolio expected return and variance with correlation coefficients',
              'Determine required return and cost of equity using CAPM beta and market risk premiums',
              'Design hedging positions using forward currency contracts and options'
            ]
          },
          worksheet: {
            id: 'ws_egbac_comm_ch3_l1',
            titleEn: 'Worksheet 3: Portfolio Variance & CAPM Analysis',
            titleAr: 'ورقة عمل 3: تباين المحفظة وتحليل نموذج تسعير الأصول CAPM',
            descriptionEn: 'Calculate portfolio risk metrics, security beta coefficients, and option payoff profiles.',
            descriptionAr: 'احسب مقاييس مخاطر المحافظ، معاملات بيتا، ومخططات عوائد عقود الخيارات.',
            estimatedTimeMinutes: 45,
            problems: egBacCommCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'comm_portfolio_risk_lab',
            titleEn: 'Portfolio Theory & CAPM Risk Analytics Studio',
            titleAr: 'استوديو نظرية المحفظة وتحليلات مخاطر نموذج CAPM',
            descriptionEn: 'Interactive asset weight slider, dynamic efficient frontier plot, and real-time Security Market Line (SML) evaluator.',
            descriptionAr: 'منزلق تفاعلي لأوزان الأصول، رسم بياني ديناميكي للحد الكفء، وتقييم لحظي لخط سوق الأوراق المالية SML.'
          }
        }
      ],
      solvedExamples: egBacCommCh3SolvedExamples,
      exerciseProblems: egBacCommCh3Exercises,
      databank: egBacCommCh3Databank
    },
    {
      id: 'egbac_comm_ch4',
      chapterNumber: 4,
      titleEn: 'FinTech, Digital Banking, Blockchain & Auditing Standards (IFRS)',
      titleAr: 'التكنولوجيا المالية والتحول الرقمي المصرفي ومعايير المحاسبة الدولية',
      descriptionEn: 'Digital payment architectures, InstaPay, Neobanks, blockchain distributed ledgers, smart contracts, CBDC digital pound, AI in credit scoring, and IFRS/EAS standards.',
      descriptionAr: 'بنية المدفوعات الرقمية، شبكة إنستاباي، البنوك الرقمية، سجلات البلوكتشين، العقود الذكية، الجنيه الرقمي CBDC، الذكاء الاصطناعي، ومعايير المحاسبة IFRS.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_comm_ch4_l1',
          titleEn: 'Digital Finance, Blockchain Architecture & International Auditing',
          titleAr: 'المالية الرقمية وتكنولوجيا البلوكتشين ومعايير التدقيق الدولية',
          summaryEn: 'Analysis of digital payment networks, decentralized ledgers, AI algorithmic finance, and international financial reporting compliance.',
          summaryAr: 'تحليل شبكات الدفع الرقمي، السجلات اللامركزية، الذكاء الاصطناعي في التمويل، والالتزام بمعايير التقارير المالية الدولية.',
          theoryContentEn: 'The convergence of financial technology, distributed cryptographic ledgers, and artificial intelligence transforms global financial intermediation. Concurrently, International Financial Reporting Standards (IFRS) mandate rigorous forward-looking disclosures and expected loss provisioning, verified through independent statutory auditing.',
          theoryContentAr: 'يعيد تقارب التكنولوجيا المالية وسجلات البلوكتشين المشفرة والذكاء الاصطناعي صياغة الوساطة المالية العالمية. وبالتوازي، تفرض معايير التقارير المالية الدولية (IFRS) إفصاحات استباقية صارمة ومخصصات خسائر ائتمانية متوقعة، يتم التحقق منها عبر التدقيق والمراجعة القانونية المستقلة.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Corporate Finance & Banking',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الإدارة المالية والمصرفية',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-COMM-G12-M4',
            pageRange: 'pp. 163-218'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Blockchain FinTech Architecture and IFRS Standards',
            titleAr: 'خطة الدرس: بنية التكنولوجيا المالية والبلوكتشين ومعايير IFRS',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Examine decentralized settlement mechanisms in blockchain and CBDC networks',
              'Analyze machine learning credit scoring models and algorithmic risk management',
              'Evaluate IFRS 9 expected credit loss provisioning and external audit opinions'
            ]
          },
          worksheet: {
            id: 'ws_egbac_comm_ch4_l1',
            titleEn: 'Worksheet 4: FinTech Systems & IFRS Compliance',
            titleAr: 'ورقة عمل 4: أنظمة التكنولوجيا المالية والالتزام بمعايير IFRS',
            descriptionEn: 'Assess digital payment flows, smart contract parameters, and IFRS financial reporting standards.',
            descriptionAr: 'تقييم تدفقات المدفوعات الرقمية، ضوابط العقود الذكية، ومعايير المحاسبة الدولية IFRS.',
            estimatedTimeMinutes: 45,
            problems: egBacCommCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'commercial_finance_studio',
            titleEn: 'Corporate Finance & Banking Master Studio',
            titleAr: 'الاستوديو الشامل للإدارة المالية المتقدمة والمصرفية',
            descriptionEn: 'Full 5-station engineering studio integrating financial statements, compound interest, capital budgeting, banking credit, and portfolio risk.',
            descriptionAr: 'استوديو مالي متكامل بخمس محطات يغطي القوائم المالية، الفائدة المركبة، الموازنات الرأسمالية، الائتمان المصرفي، وإدارة محافظ الاستثمار.'
          }
        }
      ],
      solvedExamples: egBacCommCh4SolvedExamples,
      exerciseProblems: egBacCommCh4Exercises,
      databank: egBacCommCh4Databank
    }
  ]
};
