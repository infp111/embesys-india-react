import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // allow previews through tunnels (e.g. *.trycloudflare.com)
  preview: { allowedHosts: true },
  server: { allowedHosts: true },
})
