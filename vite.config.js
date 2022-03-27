import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.cn/config/
export default defineConfig({
  base: './',
  plugins: [vue()]
})
