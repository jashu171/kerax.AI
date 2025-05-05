import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,wav,mp3}']
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Kerax AI',
        short_name: 'Kerax',
        description: 'Kerax AI Application',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-icons/logos.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-icons/logos.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff'
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
