import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base path for GitHub Pages project pages
  base: '/jonatasalves/',
  plugins: [react()],
})
