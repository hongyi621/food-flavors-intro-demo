import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/food-flavors-intro-demo/',
  build: {
    outDir: 'dist',
  },
})
