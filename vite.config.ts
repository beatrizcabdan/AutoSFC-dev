import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  },
  build: {outDir: "dist/dev/"}
})
