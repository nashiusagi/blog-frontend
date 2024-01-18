import { defineVitestConfig } from "nuxt-vitest/config"

export default defineVitestConfig({
  test: {
    environtment: "nuxt",
    globals: true,
    root: __dirname,
    setupFiles: ["./vitest.setup.ts"],
  },
})
