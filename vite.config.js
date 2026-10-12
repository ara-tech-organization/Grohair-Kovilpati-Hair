/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  /* The app is served from the root of adgrohairgloskinkovilpatti.com
     (Hostinger public_html), so assets are requested at '/assets/…'.

     GitHub Pages builds set VITE_BASE=/Grohair-Kovilpati-Hair/ (see
     .github/workflows/deploy.yml). This has to stay in step with
     public/.htaccess, which rewrites unknown paths to index.html. */
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
