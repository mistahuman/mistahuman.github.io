// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mistahuman.github.io',
  integrations: [svelte(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      noExternal: ['@lucide/svelte', '@skeletonlabs/skeleton-svelte'],
    },
  },
});
