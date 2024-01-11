import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8080', 
        target: 'https://backend-v6pj.onrender.com',
        secure: false, 
      },
    }, 
  }, 

  plugins: [react()],
});  