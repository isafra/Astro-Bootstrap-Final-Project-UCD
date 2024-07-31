//import { defineConfig } from 'astro/config';
//import github from '@astrojs/github';
// https://astro.build/config
//export default defineConfig({
    // adapter: staticSite(),
  // site: 'https://isafra.github.io',
   //base: '/Astro-Bootstrap-Final-Project-UCD/',
//});
import { defineConfig } from 'astro/config';
//import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  site: 'https://isafra.github.io',
  base: '/Astro-Bootstrap-Final-Project-UCD',
  //adapter: staticAdapter(),
});