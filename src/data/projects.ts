export type ProjectStatus = 'completed' | 'inProgress' | 'planned'

export type Project = {
  title: string
  description: string
  liveUrl: string
  githubUrl: string
  tech: string[]
  date: string
  status: ProjectStatus
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Mistahub',
    description: 'mistahuman hub for applications',
    liveUrl: 'https://mistahuman.github.io/mistahub/',
    githubUrl: 'https://github.com/mistahuman/mistahub',
    tech: ['Astro', 'Svelte', 'Skeleton UI'],
    date: '2026',
    status: 'completed',
    featured: true,
  },
  {
    title: 'Template Astro Svelte Skeleton',
    description: 'mistahuman template for building pages',
    liveUrl: 'https://mistahuman.github.io/template-astro-svelte-skeleton/',
    githubUrl: 'https://github.com/mistahuman/template-astro-svelte-skeleton',
    tech: ['Astro', 'Svelte', 'Skeleton UI'],
    date: '2026',
    status: 'completed',
    featured: true,
  },
  {
    title: 'Portfolio – Davide Sigillo',
    description: 'personal portfolio with a minimalist design',
    liveUrl: 'https://mistahuman.github.io/portfolio-davidesigillo/',
    githubUrl: 'https://github.com/mistahuman/portfolio-davidesigillo',
    tech: ['Astro', 'TailwindCSS'],
    date: '2025',
    status: 'completed',
    featured: false,
  },
  {
    title: 'Landing page – Andrea Faccani',
    description: 'modern landing page with a clean design',
    liveUrl: 'https://www.andreafaccani-fisioterapista.it/',
    githubUrl: 'https://github.com/mistahuman/landpage-andreafaccani',
    tech: ['Astro', 'Svelte', 'Skeleton UI'],
    date: '2025',
    status: 'completed',
    featured: false,
  },
]
