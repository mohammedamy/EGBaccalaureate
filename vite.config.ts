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
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            // Vendor
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
            { name: 'databank-thanaweya-english', test: /databanks\/thanaweya\/englishCh/, priority: 30 },
            { name: 'databank-thanaweya-french', test: /databanks\/thanaweya\/frenchCh/, priority: 30 },

            // Textbooks
            { name: 'textbook-thanaweya-math', test: /src\/data\/textbook\/thanaweya\/(alg|calc|dyn|solid|stat)/, priority: 30 },
            { name: 'textbook-thanaweya-science', test: /src\/data\/textbook\/thanaweya\/(thChem|thPhys)/, priority: 30 },
            { name: 'textbook-egbac', test: /src\/data\/textbook\/egbac\//, priority: 30 },

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
            { name: 'curriculum-languages', test: /src\/data\/(thanaweya|egBac)(English|French)/, priority: 20 },

            // Features
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
