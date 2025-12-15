import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // More granular vendor chunking
          if (id.includes('node_modules')) {
            if (id.includes('react/') && !id.includes('react-router')) {
              return 'react-core';
            }
            if (id.includes('react-dom')) {
              return 'react-dom';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            // Other node_modules
            return 'vendor';
          }
          // Component chunks
          if (id.includes('/components/')) {
            return 'components';
          }
          // Page chunks
          if (id.includes('/pages/')) {
            return 'pages';
          }
        }
      }
    },
    chunkSizeWarningLimit: 500,
    minify: 'esbuild',
    target: 'es2015',
    assetsInlineLimit: 4096,
    sourcemap: false,
    cssCodeSplit: true
  },
  server:{
    port:1797,
    host:true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: []
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif']
})
