import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://muhammedeminoruc.av.tr', // Sitenizin ana URL'si
      // Opsiyonel: Ekstra yollar veya sayfalar ekleyebilirsiniz
      routes: [
        '/',
        '/about',
        '/hizmetlerimiz',
        '/blog',
        '/contact',
        '/hizmetlerimiz/ceza-hukuku',
        '/hizmetlerimiz/aile-hukuku',
        '/hizmetlerimiz/miras-hukuku',
        '/hizmetlerimiz/gayrimenkul-hukuku',
        '/hizmetlerimiz/ticaret-hukuku',
        '/hizmetlerimiz/i̇dare-hukuku',
        '/hizmetlerimiz/kira-hukuku',
        '/hizmetlerimiz/i̇ş-hukuku',
        '/hizmetlerimiz/i̇cra-hukuku',
        '/hizmetlerimiz/araç-değer-kaybı'
      ], // Elle eklemek istediğiniz yollar
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { removeEmptyAttrs: false },
        ],
      },
    }),
  ],
  build: {
    minify: 'terser', // Terser kullanarak minify et
    terserOptions: {
      compress: {
        drop_console: true, // Konsol loglarını çıkar
        drop_debugger: true, // Debugger'ı kaldırır
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  base: '/' // GitHub Pages için
});