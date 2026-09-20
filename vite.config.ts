import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    modulePreload: {
      resolveDependencies(_filename, deps) {
        // Prevent preloading massive databanks, textbooks, and labs on initial page load
        return deps.filter(
          (dep) =>
            !dep.includes('databank') &&
            !dep.includes('textbook') &&
            !dep.includes('virtual-labs') &&
            !dep.includes('studio') &&
            !dep.includes('exam-') &&
            !dep.includes('curriculum-') &&
            !dep.includes('vendor-firebase') &&
            !dep.includes('vendor-three') &&
            !dep.includes('vendor-confetti') &&
            !dep.includes('student-analytics') &&
            !dep.includes('desmos-suite') &&
            !dep.includes('official-books') &&
            !dep.includes('specialized-studios') &&
            !dep.includes('core-scratchpad') &&
            !dep.includes('core-instruments') &&
            !dep.includes('core-simulation') &&
            !dep.includes('core-labs')
        );
      },
    },
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            // High-priority core & vendor chunks
            { name: 'core-scratchpad', test: /src\/core\/math\//, priority: 65 },
            { name: 'core-instruments', test: /src\/core\/instruments\//, priority: 65 },
            { name: 'core-simulation', test: /src\/core\/simulation\//, priority: 65 },
            { name: 'core-labs', test: /src\/core\/labs\//, priority: 60 },
            { name: 'core-ui-math', test: /src\/components\/MathRenderer/, priority: 60 },
            { name: 'core-i18n', test: /src\/i18n\/translations/, priority: 55 },
            { name: 'core-subjects', test: /src\/data\/subjects/, priority: 55 },
            { name: 'vendor-firebase', test: /node_modules\/(firebase|@firebase)/, priority: 55 },
            { name: 'vendor-three', test: /node_modules\/three/, priority: 55 },
            { name: 'vendor-confetti', test: /node_modules\/canvas-confetti/, priority: 55 },

            // Standard Vendor
            { name: 'vendor-katex', test: /node_modules\/katex/, priority: 50 },
            { name: 'vendor-icons', test: /node_modules\/lucide-react/, priority: 50 },
            { name: 'vendor-react', test: /node_modules\/(react|react-dom|scheduler)/, priority: 50 },
            { name: 'vendor-libs', test: /node_modules/, priority: 40 },

            // Thanaweya Databanks
            { name: 'databank-thanaweya-bio-1', test: /databanks\/thanaweya\/bioCh[1-2]Databank/, priority: 30 },
            { name: 'databank-thanaweya-bio-2', test: /databanks\/thanaweya\/bioCh[3-4]Databank/, priority: 30 },
            { name: 'databank-thanaweya-bio-3', test: /databanks\/thanaweya\/bioCh5Databank/, priority: 30 },
            { name: 'databank-thanaweya-chem-1', test: /databanks\/thanaweya\/chemCh[1-3]Databank/, priority: 30 },
            { name: 'databank-thanaweya-chem-2', test: /databanks\/thanaweya\/chemCh[4-5]Databank/, priority: 30 },
            { name: 'databank-thanaweya-phys-1', test: /databanks\/thanaweya\/physCh[1-3]Databank/, priority: 30 },
            { name: 'databank-thanaweya-phys-2', test: /databanks\/thanaweya\/physCh[4-6]Databank/, priority: 30 },
            { name: 'databank-thanaweya-algebra', test: /databanks\/thanaweya\/(algCh|solidCh)/, priority: 30 },
            { name: 'databank-thanaweya-calculus', test: /databanks\/thanaweya\/calcCh/, priority: 30 },
            { name: 'databank-thanaweya-statics-1', test: /databanks\/thanaweya\/statCh[1-3]Databank/, priority: 30 },
            { name: 'databank-thanaweya-statics-2', test: /databanks\/thanaweya\/statCh[4-6]Databank/, priority: 30 },
            { name: 'databank-thanaweya-dynamics', test: /databanks\/thanaweya\/dynCh/, priority: 30 },

            // EG-Bac Databanks
            { name: 'databank-egbac-discrete', test: /databanks\/egbac\/egBacCh[1-2]Databank/, priority: 30 },
            { name: 'databank-egbac-analysis', test: /databanks\/egbac\/egBacAna/, priority: 30 },
            { name: 'databank-egbac-mechanics', test: /databanks\/egbac\/egBacMech/, priority: 30 },
            { name: 'databank-egbac-probability', test: /databanks\/egbac\/egBacProb/, priority: 30 },
            { name: 'databank-egbac-bio-1', test: /databanks\/egbac\/egBacBioCh[1-2]Databank/, priority: 30 },
            { name: 'databank-egbac-bio-2', test: /databanks\/egbac\/egBacBioCh[3-4]Databank/, priority: 30 },
            { name: 'databank-egbac-chem-1', test: /databanks\/egbac\/egBacChemCh[1-3]Databank/, priority: 30 },
            { name: 'databank-egbac-chem-2', test: /databanks\/egbac\/egBacChemCh[4-5]Databank/, priority: 30 },
            { name: 'databank-egbac-phys-1', test: /databanks\/egbac\/egBacPhysCh[1-3]Databank/, priority: 30 },
            { name: 'databank-egbac-phys-2', test: /databanks\/egbac\/egBacPhysCh[4-5]Databank/, priority: 30 },

            // Language Databanks
            { name: 'databank-thanaweya-english-1', test: /databanks\/thanaweya\/englishCh[1-3]Databank/, priority: 30 },
            { name: 'databank-thanaweya-english-2', test: /databanks\/thanaweya\/englishCh[4-6]Databank/, priority: 30 },
            { name: 'databank-thanaweya-french', test: /databanks\/thanaweya\/frenchCh/, priority: 30 },
            { name: 'databank-thanaweya-arabic-1', test: /databanks\/thanaweya\/arabicCh[1-2]Databank/, priority: 30 },
            { name: 'databank-thanaweya-arabic-2', test: /databanks\/thanaweya\/arabicCh[3-4]Databank/, priority: 30 },

            // History Databanks & Curriculum
            { name: 'databank-history', test: /databanks\/(thanaweya|egbac)\/.*history/i, priority: 30 },
            { name: 'textbook-thanaweya-history', test: /src\/data\/textbook\/thanaweya\/history/, priority: 30 },
            { name: 'curriculum-history', test: /src\/data\/(thanaweya|egBac)History/, priority: 20 },
            { name: 'history-studio', test: /HistoryTimelineStudio|historyTimelineLabData/, priority: 30 },

            // Geography Databanks & Curriculum
            { name: 'databank-geography', test: /databanks\/(thanaweya|egbac)\/.*geo/i, priority: 30 },
            { name: 'textbook-geography', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*geo/i, priority: 30 },
            { name: 'curriculum-geography', test: /src\/data\/(thanaweya|egBac)Geography/, priority: 20 },
            { name: 'geography-studio', test: /GeoSpatialStudio|geographyMapLabData/, priority: 30 },

            // Philosophy & Applied Logic Databanks & Curriculum
            { name: 'databank-philosophy-thanaweya', test: /databanks\/thanaweya\/philCh/, priority: 30 },
            { name: 'databank-philosophy-egbac', test: /databanks\/egbac\/egBacPhilCh/, priority: 30 },
            { name: 'textbook-philosophy', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*phil/i, priority: 30 },
            { name: 'curriculum-philosophy', test: /src\/data\/(thanaweya|egBac)Philosophy/, priority: 20 },
            { name: 'logic-studio', test: /LogicStudio/, priority: 30 },

            // Psychology & Sociology Databanks & Curriculum
            { name: 'databank-psychology-thanaweya', test: /databanks\/thanaweya\/psychCh/, priority: 30 },
            { name: 'databank-psychology-egbac', test: /databanks\/egbac\/egBacPsychCh/, priority: 30 },
            { name: 'textbook-psychology', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*psych/i, priority: 30 },
            { name: 'curriculum-psychology', test: /src\/data\/(thanaweya|egBac)Psychology/, priority: 20 },
            { name: 'psychology-studio', test: /PsychologyStudio/, priority: 30 },

            // Economics & Applied Statistics Databanks & Curriculum
            { name: 'databank-econstat-thanaweya', test: /databanks\/thanaweya\/econStat/, priority: 30 },
            { name: 'databank-econstat-egbac', test: /databanks\/egbac\/egBacEconStat/, priority: 30 },
            { name: 'textbook-econstat', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*econStat/i, priority: 30 },
            { name: 'curriculum-econstat', test: /src\/data\/(thanaweya|egBac)EconomicsStat/, priority: 20 },
            { name: 'econstat-studio', test: /EconomicsStatisticsStudio/, priority: 30 },

            // Computer Science & Informatics
            { name: 'databank-cs-informatics', test: /databanks\/(thanaweya|egbac)\/.*csInformatics/i, priority: 30 },
            { name: 'textbook-cs-informatics', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*csInformatics/i, priority: 30 },
            { name: 'curriculum-cs-informatics', test: /src\/data\/(thanaweya|egBac)CsInformatics/, priority: 20 },

            // Earth & Planetary Space Sciences
            { name: 'databank-earth-space', test: /databanks\/(thanaweya|egbac)\/.*earthSpace/i, priority: 30 },
            { name: 'textbook-earth-space', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*earthSpace/i, priority: 30 },
            { name: 'curriculum-earth-space', test: /src\/data\/(thanaweya|egBac)EarthSpace/, priority: 20 },

            // German Language & Culture
            { name: 'databank-german', test: /databanks\/(thanaweya|egbac)\/.*german/i, priority: 30 },
            { name: 'textbook-german', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*german/i, priority: 30 },
            { name: 'curriculum-german', test: /src\/data\/(thanaweya|egBac)German/, priority: 20 },

            // Italian Language & Culture
            { name: 'databank-italian', test: /databanks\/(thanaweya|egbac)\/.*italian/i, priority: 30 },
            { name: 'textbook-italian', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*italian/i, priority: 30 },
            { name: 'curriculum-italian', test: /src\/data\/(thanaweya|egBac)Italian/, priority: 20 },

            // Spanish Language & Culture
            { name: 'databank-spanish', test: /databanks\/(thanaweya|egbac)\/.*spanish/i, priority: 30 },
            { name: 'textbook-spanish', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*spanish/i, priority: 30 },
            { name: 'curriculum-spanish', test: /src\/data\/(thanaweya|egBac)Spanish/, priority: 20 },

            // Chinese Language & Culture
            { name: 'databank-chinese', test: /databanks\/(thanaweya|egbac)\/.*chinese/i, priority: 30 },
            { name: 'textbook-chinese', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*chinese/i, priority: 30 },
            { name: 'curriculum-chinese', test: /src\/data\/(thanaweya|egBac)Chinese/, priority: 20 },

            // Islamic Religious Education
            { name: 'databank-islamic', test: /databanks\/(thanaweya|egbac)\/.*islamic/i, priority: 30 },
            { name: 'textbook-islamic', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*islamic/i, priority: 30 },
            { name: 'curriculum-islamic', test: /src\/data\/(thanaweya|egBac)Islamic/, priority: 20 },

            // Christian Religious Education
            { name: 'databank-christian', test: /databanks\/(thanaweya|egbac)\/.*christian/i, priority: 30 },
            { name: 'textbook-christian', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*christian/i, priority: 30 },
            { name: 'curriculum-christian', test: /src\/data\/(thanaweya|egBac)Christian/, priority: 20 },

            // National Civics & Constitutional Law
            { name: 'databank-civics', test: /databanks\/(thanaweya|egbac)\/.*civics/i, priority: 30 },
            { name: 'textbook-civics', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*civics/i, priority: 30 },
            { name: 'curriculum-civics', test: /src\/data\/(thanaweya|egBac)Civics/, priority: 20 },

            // Business Administration & Entrepreneurship
            { name: 'databank-business', test: /databanks\/(thanaweya|egbac)\/.*business/i, priority: 30 },
            { name: 'textbook-business', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*business/i, priority: 30 },
            { name: 'curriculum-business', test: /src\/data\/(thanaweya|egBac)Business/, priority: 20 },

            // Fine Arts, Architecture & Design
            { name: 'databank-fine-arts', test: /databanks\/(thanaweya|egbac)\/.*fineArts/i, priority: 30 },
            { name: 'textbook-fine-arts', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*fineArts/i, priority: 30 },
            { name: 'curriculum-fine-arts', test: /src\/data\/(thanaweya|egBac)FineArts/, priority: 20 },

            // Music & Musicology
            { name: 'databank-music', test: /databanks\/(thanaweya|egbac)\/.*music/i, priority: 30 },
            { name: 'textbook-music', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*music/i, priority: 30 },
            { name: 'curriculum-music', test: /src\/data\/(thanaweya|egBac)Music/, priority: 20 },

            // Agricultural Sciences & Agrotechnology
            { name: 'databank-agriculture', test: /databanks\/(thanaweya|egbac)\/.*agri/i, priority: 30 },
            { name: 'textbook-agriculture', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*agri/i, priority: 30 },
            { name: 'curriculum-agriculture', test: /src\/data\/(thanaweya|egBac)Agriculture/, priority: 20 },

            // Industrial Technology & Engineering
            { name: 'databank-industrial', test: /databanks\/(thanaweya|egbac)\/.*ind/i, priority: 30 },
            { name: 'textbook-industrial', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*ind/i, priority: 30 },
            { name: 'curriculum-industrial', test: /src\/data\/(thanaweya|egBac)Industrial/, priority: 20 },

            // Commercial Studies & Finance
            { name: 'databank-commercial', test: /databanks\/(thanaweya|egbac)\/.*comm/i, priority: 30 },
            { name: 'textbook-commercial', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*comm/i, priority: 30 },
            { name: 'curriculum-commercial', test: /src\/data\/(thanaweya|egBac)Commercial/, priority: 20 },

            // Tourism, Hospitality & Heritage
            { name: 'databank-tourism', test: /databanks\/(thanaweya|egbac)\/.*tour/i, priority: 30 },
            { name: 'textbook-tourism', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*tour/i, priority: 30 },
            { name: 'curriculum-tourism', test: /src\/data\/(thanaweya|egBac)Tourism/, priority: 20 },

            // Renewable Energy & Sustainable Engineering
            { name: 'databank-renewable', test: /databanks\/(thanaweya|egbac)\/.*renew/i, priority: 30 },
            { name: 'textbook-renewable', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*renew/i, priority: 30 },
            { name: 'curriculum-renewable', test: /src\/data\/(thanaweya|egBac)Renewable/, priority: 20 },

            // STEM Engineering Capstone & Egypt's Grand Challenges
            { name: 'databank-stem-capstone', test: /databanks\/(thanaweya|egbac)\/.*stemCapstone/i, priority: 30 },
            { name: 'textbook-stem-capstone', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*stemCapstone/i, priority: 30 },
            { name: 'curriculum-stem-capstone', test: /src\/data\/(thanaweya|egBac)StemCapstone/, priority: 20 },
            { name: 'stem-capstone-studio', test: /stemCapstoneLabData/, priority: 30 },

            // Robotics, Mechatronics & Embedded Systems
            { name: 'databank-robotics', test: /databanks\/(thanaweya|egbac)\/.*robotics/i, priority: 30 },
            { name: 'textbook-robotics', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*robotics/i, priority: 30 },
            { name: 'curriculum-robotics', test: /src\/data\/(thanaweya|egBac)Robotics/, priority: 20 },
            { name: 'robotics-studio', test: /roboticsLabData/, priority: 30 },

            // Advanced Electronics, VLSI & IoT Systems
            { name: 'databank-electronics-iot', test: /databanks\/(thanaweya|egbac)\/.*electronicsIot/i, priority: 30 },
            { name: 'textbook-electronics-iot', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*electronicsIot/i, priority: 30 },
            { name: 'curriculum-electronics-iot', test: /src\/data\/(thanaweya|egBac)ElectronicsIot/, priority: 20 },
            { name: 'electronics-studio', test: /electronicsLabData/, priority: 30 },

            // Artificial Intelligence & Data Science
            { name: 'databank-ai-data-science', test: /databanks\/(thanaweya|egbac)\/.*aiDataScience/i, priority: 30 },
            { name: 'textbook-ai-data-science', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*aiDataScience/i, priority: 30 },
            { name: 'curriculum-ai-data-science', test: /src\/data\/(thanaweya|egBac)AiDataScience/, priority: 20 },
            { name: 'ai-studio', test: /aiLabData/, priority: 30 },

            // Biotechnology, Genetic Engineering & Bioinformatics
            { name: 'databank-biotechnology', test: /databanks\/(thanaweya|egbac)\/.*biotechnology/i, priority: 30 },
            { name: 'textbook-biotechnology', test: /src\/data\/textbook\/(thanaweya|egbac)\/.*biotechnology/i, priority: 30 },
            { name: 'curriculum-biotechnology', test: /src\/data\/(thanaweya|egBac)Biotechnology/, priority: 20 },
            { name: 'biotech-studio', test: /biotechLabData/, priority: 30 },

            // Textbooks
            { name: 'textbook-thanaweya-math', test: /src\/data\/textbook\/thanaweya\/(alg|calc|dyn|solid|stat)/, priority: 30 },
            { name: 'textbook-thanaweya-science', test: /src\/data\/textbook\/thanaweya\/(thChem|thPhys)/, priority: 30 },
            { name: 'textbook-egbac', test: /src\/data\/textbook\/egbac\//, priority: 30 },

            // Specialized 3D & Advanced Vocational Studios
            { name: 'specialized-studios', test: /InductionSimulator3D|OpticsBench3D|ElectrochemistryCell3D|MusicTheoryStudio|AgriculturalTechnologyStudio|IndustrialEngineeringStudio|CommercialFinanceStudio|TourismHospitalityStudio|RenewableEnergyStudio|RoboticsLabStudio|SpanishLanguageLab|ChineseLanguageStudio|GermanInteractiveStudio|ItalianInteractiveStudio/, priority: 30 },

            // Virtual Labs
            { name: 'virtual-labs-biology', test: /src\/components\/labs\/(Bio|Dna|Endocrine|GeneticsLab|Immunity|Menstrual|Plant|Sarcomere|Skeleton)/, priority: 30 },
            { name: 'virtual-labs-chemistry', test: /src\/components\/labs\/(Chemistry|Electrochem|Equilibrium|Organic|Qualitative|TitrationLab|Transition)/, priority: 30 },
            { name: 'virtual-labs-physics', test: /src\/components\/labs\/(Atomic|Circuits|Dynamo|Magnetism|Optics|PhotoelectricLab|Physics|RLC|Semiconductor)/, priority: 30 },
            { name: 'virtual-labs-core', test: /src\/components\/labs\//, priority: 25 },
            { name: 'virtual-labs-hub', test: /VirtualLabsHub/, priority: 25 },

            // Curriculum Lessons & Content
            { name: 'curriculum-thanaweya-bio', test: /src\/data\/thanaweyaBiology/, priority: 20 },
            { name: 'curriculum-egbac-bio', test: /src\/data\/egBacBiology/, priority: 20 },
            { name: 'curriculum-thanaweya-physics', test: /src\/data\/thanaweyaPhysics/, priority: 20 },
            { name: 'curriculum-thanaweya-chem', test: /src\/data\/thanaweyaChemistry/, priority: 20 },
            { name: 'curriculum-egbac-science', test: /src\/data\/egBac(Physics|Chemistry)/, priority: 20 },
            { name: 'curriculum-thanaweya-math', test: /src\/data\/thanaweya(Statics|AlgebraSolid|Dynamics|Calculus)/, priority: 20 },
            { name: 'curriculum-egbac-math', test: /src\/data\/egBac(Vectors|Probability|Mechanics|Analysis)/, priority: 20 },
            { name: 'curriculum-languages', test: /src\/data\/(thanaweya|egBac)(English|French|Arabic)/, priority: 20 },

            // Features & Workstations
            { name: 'exam-workstation', test: /src\/components\/(TestGenerator|OfficialPerformanceCertificate|CertificateVerificationModal|BubbleSheetSimulator)/, priority: 20 },
            { name: 'exam-past-papers', test: /pastExamPapersService/, priority: 20 },
            { name: 'student-analytics', test: /StudentAnalyticsDashboard/, priority: 20 },
            { name: 'science-studios', test: /Interactive(Genetics|Titration|Photoelectric)Studio|TextbookDiagram/, priority: 20 },
            { name: 'desmos-suite', test: /DesmosSuite/, priority: 20 },
            { name: 'official-books', test: /OfficialBooksModal|officialBooksData/, priority: 20 },
          ],
        },
      },
    },
  },
});
