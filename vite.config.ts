import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: [vue(), tailwindcss()],
    resolve: {
      alias: {
        "@components": "/src/components",
        "@": "/src",
      },
    },
    server: {
      port: Number(process.env.VITE_PORT) || 5180,
    },
  }
})
