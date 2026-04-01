// @ts-check
import { defineConfig } from 'astro/config'
import { EventEmitter } from 'events'
import tailwindcss from '@tailwindcss/vite'
import svelte from '@astrojs/svelte'

EventEmitter.defaultMaxListeners = 20

export default defineConfig({
  site: 'https://mistahuman.github.io',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      noExternal: ['@lucide/svelte', '@skeletonlabs/skeleton-svelte'],
    },
  },
})
