import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Vite config cho project React + GitHub Pages
export default defineConfig({
  // Quan trọng: trùng TÊN REPO trên GitHub
  // Repo của ông: Mountain26.io
  base: '/Mountain26.io/',

  plugins: [react()],

  resolve: {
    // Cho phép import không cần .ts/.tsx/.js
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Dùng @ để trỏ tới thư mục src, import cho gọn
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    // Build ra thư mục docs/ vì GitHub Pages đang đọc master + /docs
    outDir: 'docs',
  },

  server: {
    port: 3000,
    open: true,
  },
})
