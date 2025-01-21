import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Ensure the build output directory is 'dist'
  },
});
