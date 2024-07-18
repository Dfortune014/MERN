import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      // Custom Babel configuration to ignore "use client"
      babel: {
        plugins: [
          [
            'babel-plugin-transform-remove-directives',
            {
              directives: ['use client']
            }
          ]
        ]
      }
    })
  ],
  base: '/MERN/',
  build: {
    outDir: 'dist',
  },
});
