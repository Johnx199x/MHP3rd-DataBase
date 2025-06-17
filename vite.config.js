import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,  // Fuerza la transformación de módulos CJS/ES
      exclude: ['@supabase/realtime-js']  // Excluye el módulo problemático
    }
  },
  optimizeDeps: {
    exclude: ['@supabase/realtime-js', 'whatwg-url']  // Evita optimizar estas dependencias
  }
})


 
