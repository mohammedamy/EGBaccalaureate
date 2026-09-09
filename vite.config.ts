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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('katex')) return 'vendor-katex';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) return 'vendor-react';
            return 'vendor';
          }
          if (id.includes('/src/data/databanks/thanaweya/')) {
            if (id.includes('algCh') || id.includes('solidCh')) return 'databank-thanaweya-algebra';
            if (id.includes('calcCh')) return 'databank-thanaweya-calculus';
            if (id.includes('statCh1') || id.includes('statCh2') || id.includes('statCh3')) return 'databank-thanaweya-statics-1';
            if (id.includes('statCh4') || id.includes('statCh5') || id.includes('statCh6')) return 'databank-thanaweya-statics-2';
            if (id.includes('dynCh')) return 'databank-thanaweya-dynamics';
            return 'databank-thanaweya';
          }
          if (id.includes('/src/data/databanks/egbac/')) {
            if (id.includes('egBacCh')) return 'databank-egbac-discrete';
            if (id.includes('egBacAna')) return 'databank-egbac-analysis';
            if (id.includes('egBacMech')) return 'databank-egbac-mechanics';
            if (id.includes('egBacProb')) return 'databank-egbac-probability';
            return 'databank-egbac';
          }
          if (id.includes('/src/data/textbook/thanaweya/')) return 'textbook-thanaweya';
          if (id.includes('/src/data/textbook/egbac/')) return 'textbook-egbac';
        },
      },
    },
  },
});
