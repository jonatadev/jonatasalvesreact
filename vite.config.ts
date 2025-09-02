import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Using custom domain -> base should be '/'
  base: '/',
  plugins: [react()],
})
