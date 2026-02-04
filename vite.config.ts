import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      api: "/src/api",
      bbl: "/src/bbl",
      hooks: "/src/hooks",
      store: "/src/store",
      types: "/src/types",
      ui: "/src/ui"
    },
  },
})
