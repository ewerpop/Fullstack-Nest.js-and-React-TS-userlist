import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    
  }
  /*server: {
    proxy: {
      '/userAdd': {
        target: 'http://127.0.0.1:3001/userAdd',
        changeOrigin: true,
        secure: false,
      },
    },
  },*/
})
