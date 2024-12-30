import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:5000', // Flask backend URL
        target: 'http://34.204.15.169/',
        changeOrigin: true, // Change the origin header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix if needed
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/jandd_vite/",
  
})
