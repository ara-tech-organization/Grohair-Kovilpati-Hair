/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  /* The app is uploaded to public_html/hair on chennaiclinic.bonitaa.co.in, so
     assets are requested at '/hair/assets/…'. Built with the wrong base, every
     asset URL is off by a folder, the bundle 404s and the page renders white
     with nothing in #root.

     The trailing slash is load-bearing. Vite substitutes this string verbatim
     for %BASE_URL% in index.html, so '/hair' produced href="/hairfavicon.png"
     — assets survived, because those paths are joined, but anything written
     through %BASE_URL% did not.

     This has to stay in step with public/.htaccess, which rewrites unknown
     paths to index.html and must use the same folder. */
  /* GitHub Pages builds set VITE_BASE=/Grohair-Kovilpati-Hair/ (see
     .github/workflows/deploy.yml); the cPanel upload keeps '/hair/'. */
  base: process.env.VITE_BASE || '/hair/',
  plugins: [react()],
})
