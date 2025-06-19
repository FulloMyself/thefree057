import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   base: '/thefree057/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
