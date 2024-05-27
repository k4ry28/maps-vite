import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/utils': '/src/utils',
      '@/components': '/src/components',
      '@/constants': '/src/constants',
      '@/assets': '/src/assets',
      '@/hooks': '/src/hooks',
      '@/contexts': '/src/contexts',
      '@/services': '/src/services'
    }
  }
})
