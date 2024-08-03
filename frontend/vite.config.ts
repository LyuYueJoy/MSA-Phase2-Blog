import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // 确保这个目录与你的 Dockerfile 中的路径匹配
  },
})
