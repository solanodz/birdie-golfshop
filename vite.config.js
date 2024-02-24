import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import process from "process"

export default defineConfig({
  plugins: [react()],
  base: "https://solanodz.github.io/birdie-golfshop",
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
})
