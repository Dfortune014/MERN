import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    })
  ],
  base: '/MERN/',
  build: {
    outDir: 'dist',
  },
});
