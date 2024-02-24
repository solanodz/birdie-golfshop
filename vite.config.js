import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import process from "process"

export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [react()],
  base: "https://solanodz.github.io/",
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
})
