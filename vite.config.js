import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Simple-onlineShopping-page-using-Chakra-Ui/',
  plugins: [react()],
  server: {
    port: 3001, // Change this to your desired port number
  },
})
