import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

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
  ],
  base: '/' // GitHub Pages için
});