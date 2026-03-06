import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mltd-calculator/', // 保持和你的 GitHub Pages 路径一致
  server: {
    open: true, // 启动后自动打开浏览器
  },
  build: {
    outDir: 'dist', // 现代 Vite 规范
  }
})