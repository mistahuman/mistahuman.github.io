<script lang="ts">
  import Bomb from '@lucide/svelte/icons/bomb'
  import Crosshair from '@lucide/svelte/icons/crosshair'
  import RotateCcw from '@lucide/svelte/icons/rotate-ccw'

  // --- State ---

  let active = $state(false)
  let kills = $state(0)

  // --- Targeting ---

  const DESTROY_TAGS = new Set([
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'li', 'img', 'figure', 'svg', 'a',
    'blockquote', 'article', 'section',
  ])
  const DESTROY_CLASSES = ['card', 'btn', 'badge', 'chip']

  function isTooLarge(el: HTMLElement): boolean {
    const { width, height } = el.getBoundingClientRect()
    // Both dimensions must be large — avoids skipping full-width but short elements (e.g. <p>)
    return width > window.innerWidth * 0.85 && height > window.innerHeight * 0.45
  }

  function findTarget(from: HTMLElement): HTMLElement | null {
    let el: HTMLElement | null = from
    while (el && el !== document.body) {
      const isMatch =
        DESTROY_TAGS.has(el.tagName.toLowerCase()) ||
        DESTROY_CLASSES.some((c) => el!.classList.contains(c))
      if (isMatch) {
        // Stop walking regardless — parent will only be larger
        return isTooLarge(el) ? null : el
      }
      el = el.parentElement
    }
    return null
  }

  // --- Click handler ---

  function onDocumentClick(e: MouseEvent) {
    if (!active) return

    // Let widget clicks through so buttons work normally
    if ((e.target as HTMLElement).closest('#destroy-widget')) return

    e.preventDefault()
    e.stopImmediatePropagation()

    const el = findTarget(e.target as HTMLElement)

    if (!el || el.dataset.destroyed) {
      spawnMiss(e.clientX, e.clientY)
      return
    }

    const { left, top, width, height } = el.getBoundingClientRect()
    destroyElement(el, left + width / 2, top + height / 2)
  }

  // --- Destroy / restore ---

  function destroyElement(el: HTMLElement, cx: number, cy: number) {
    spawnParticles(cx, cy)
    shakeScreen()
    el.dataset.destroyed = 'true'
    el.style.transition = 'transform 0.25s ease-out, opacity 0.25s ease-out'
    el.style.transform = 'scale(0) rotate(10deg)'
    el.style.opacity = '0'
    el.style.pointerEvents = 'none'
    kills++
  }

  function restoreAll() {
    document.querySelectorAll<HTMLElement>('[data-destroyed]').forEach((el) => {
      el.style.transition =
        'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-in'
      el.style.transform = ''
      el.style.opacity = ''
      el.style.pointerEvents = ''
      delete el.dataset.destroyed
    })
  }

  // --- Activation ---

  function activate() {
    active = true
    kills = 0
    document.body.classList.add('destroy-mode')
    document.addEventListener('click', onDocumentClick, { capture: true })
  }

  function deactivate() {
    active = false
    document.body.classList.remove('destroy-mode')
    document.removeEventListener('click', onDocumentClick, { capture: true })
    restoreAll()
  }

  // --- Visual effects ---

  function getThemeColors(): string[] {
    const s = getComputedStyle(document.documentElement)
    return [
      '--color-primary-400',
      '--color-secondary-600',
      '--color-tertiary-600',
      '--color-success-600',
      '--color-error-500',
      '--color-warning-600',
    ]
      .map((v) => s.getPropertyValue(v).trim())
      .filter(Boolean)
  }

  function spawnParticle(
    cx: number,
    cy: number,
    color: string,
    size: number,
    dx: number,
    dy: number,
    duration: number,
    startOpacity = '1',
  ) {
    const p = document.createElement('div')
    p.style.cssText = [
      'position: fixed',
      `left: ${cx}px`,
      `top: ${cy}px`,
      `width: ${size}px`,
      `height: ${size}px`,
      `background: ${color}`,
      `border-radius: ${Math.random() > 0.4 ? '50%' : '3px'}`,
      'pointer-events: none',
      'z-index: 99999',
      'transform: translate(-50%, -50%)',
    ].join(';')
    document.body.appendChild(p)
    p.animate(
      [
        { transform: 'translate(-50%, -50%) scale(1)', opacity: startOpacity },
        {
          transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`,
          opacity: '0',
        },
      ],
      { duration, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' },
    ).onfinish = () => p.remove()
  }

  function spawnParticles(cx: number, cy: number) {
    const colors = getThemeColors()
    const count = 10 + Math.floor(Math.random() * 6)
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = 50 + Math.random() * 100
      spawnParticle(
        cx,
        cy,
        colors[Math.floor(Math.random() * colors.length)],
        5 + Math.random() * 9,
        Math.cos(angle) * speed,
        Math.sin(angle) * speed - 30,
        500 + Math.random() * 400,
      )
    }
  }

  function spawnMiss(cx: number, cy: number) {
    const color =
      getComputedStyle(document.documentElement).getPropertyValue('--color-surface-400').trim() ||
      '#888'
    for (let i = 0; i < 5; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = 20 + Math.random() * 30
      spawnParticle(
        cx,
        cy,
        color,
        3 + Math.random() * 4,
        Math.cos(angle) * speed,
        Math.sin(angle) * speed,
        300,
        '0.6',
      )
    }
  }

  function shakeScreen() {
    // Shake <main> instead of body — body transform breaks position:fixed on the widget
    const target = document.querySelector('main') ?? document.body
    target.animate(
      [
        { transform: 'translate(0, 0)' },
        { transform: 'translate(-4px, 2px)' },
        { transform: 'translate(4px, -2px)' },
        { transform: 'translate(-2px, 4px)' },
        { transform: 'translate(2px, -2px)' },
        { transform: 'translate(0, 0)' },
      ],
      { duration: 200, easing: 'ease-out' },
    )
  }

  // --- Lifecycle ---

  $effect(() => {
    const onBeforeSwap = () => {
      if (active) deactivate()
    }
    document.addEventListener('astro:before-swap', onBeforeSwap)
    return () => {
      document.removeEventListener('astro:before-swap', onBeforeSwap)
      if (active) deactivate()
    }
  })
</script>

<style>
  :global(body.destroy-mode),
  :global(body.destroy-mode *) {
    cursor: crosshair !important;
  }
</style>

<div id="destroy-widget" class="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-2">
  {#if active}
    <div
      class="card bg-surface-100-900 border border-surface-300-700 shadow-xl px-4 py-2 flex items-center gap-3"
    >
      <span class="font-bold text-xl text-error-500 tabular-nums">{kills}</span>
      <span class="text-xs text-surface-600 dark:text-surface-400">destroyed</span>
      <button onclick={deactivate} class="btn btn-sm preset-outlined-error-500">
        <RotateCcw size={14} />
        <span>reset</span>
      </button>
    </div>
  {/if}

  <button
    onclick={active ? deactivate : activate}
    class={active
      ? 'btn-icon preset-tonal-error w-12 h-12 shadow-lg'
      : 'btn-icon preset-tonal-primary w-12 h-12 shadow-lg'}
    title={active ? 'Exit destroy mode' : 'Destroy the site!'}
  >
    {#if active}
      <Crosshair size={22} />
    {:else}
      <Bomb size={22} />
    {/if}
  </button>
</div>
