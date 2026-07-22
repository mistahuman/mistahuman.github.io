<script lang="ts">
  import { onMount } from 'svelte';
  import { Palette } from '@lucide/svelte';
  import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';

  let { defaultTheme = 'mistahuman-theme' }: { defaultTheme?: string } = $props();

  const themes = [
    { id: 'mistahuman-theme', label: 'Mistahuman', emoji: '🧑‍💻' },
    { id: 'catppuccin', label: 'Catppuccin', emoji: '🐈' },
    { id: 'cerberus', label: 'Cerberus', emoji: '🐺' },
    { id: 'concord', label: 'Concord', emoji: '🤖' },
    { id: 'crimson', label: 'Crimson', emoji: '🔴' },
    { id: 'dracula', label: 'Dracula', emoji: '🧛' },
    { id: 'fennec', label: 'Fennec', emoji: '🦊' },
    { id: 'hamlindigo', label: 'Hamlindigo', emoji: '👔' },
    { id: 'legacy', label: 'Legacy', emoji: '📜' },
    { id: 'mint', label: 'Mint', emoji: '🌿' },
    { id: 'modern', label: 'Modern', emoji: '✨' },
    { id: 'mona', label: 'Mona', emoji: '🎨' },
    { id: 'nosh', label: 'Nosh', emoji: '🍜' },
    { id: 'nouveau', label: 'Nouveau', emoji: '🌸' },
    { id: 'pine', label: 'Pine', emoji: '🌲' },
    { id: 'reign', label: 'Reign', emoji: '👑' },
    { id: 'rocket', label: 'Rocket', emoji: '🚀' },
    { id: 'rose', label: 'Rose', emoji: '🌹' },
    { id: 'rosepine', label: 'Rosé Pine', emoji: '🪻' },
    { id: 'sahara', label: 'Sahara', emoji: '🏜️' },
    { id: 'seafoam', label: 'Seafoam', emoji: '🌊' },
    { id: 'terminus', label: 'Terminus', emoji: '💻' },
    { id: 'vintage', label: 'Vintage', emoji: '📻' },
    { id: 'vox', label: 'Vox', emoji: '🎙️' },
    { id: 'wintry', label: 'Wintry', emoji: '❄️' },
  ];

  // The island renders on the server first, so read the live theme only once hydrated.
  let current = $state('');

  onMount(() => {
    current = document.documentElement.getAttribute('data-theme') ?? defaultTheme;
  });

  function setTheme(id: string) {
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem('theme', id);
    current = id;
  }
</script>

<Popover>
  <Popover.Trigger class="btn-icon hover:preset-tonal" title="Switch theme">
    <Palette size={20} />
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content
        class="z-50 max-h-[75vh] overflow-y-auto card border border-surface-200-800 bg-surface-50-950 p-2 shadow-xl"
      >
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
          {#each themes as theme (theme.id)}
            <button
              data-theme={theme.id}
              class="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md preset-outlined-surface-100-900 bg-surface-50-950 p-3 hover:preset-outlined-surface-950-50 {current ===
              theme.id
                ? 'preset-outlined-surface-500'
                : ''}"
              onclick={() => setTheme(theme.id)}
            >
              <span>{theme.emoji}</span>
              <h3 class="text-left text-sm font-bold capitalize">{theme.label}</h3>
              <div class="flex items-center justify-center -space-x-1.5">
                <div
                  class="aspect-square w-4 rounded-full border border-black/10 bg-primary-500"
                ></div>
                <div
                  class="aspect-square w-4 rounded-full border border-black/10 bg-secondary-500"
                ></div>
                <div
                  class="aspect-square w-4 rounded-full border border-black/10 bg-tertiary-500"
                ></div>
              </div>
            </button>
          {/each}
        </div>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover>
