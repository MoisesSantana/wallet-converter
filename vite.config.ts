import { defineConfig, configDefaults } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/setupTests.ts',
    include: [...configDefaults.include],
    exclude: [...configDefaults.exclude, "packages/template/*"]
  },
  server: {
    port: 3000
  }
})
