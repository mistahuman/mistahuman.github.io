export type ProjectStatus = 'completed' | 'inProgress' | 'planned';
export type ProjectCategory = 'web' | 'academic' | 'template';
// Lifecycle stage shown as a badge: where the project is, not how maintained it is.
// live = deployed and usable · wip = built but not public yet · dormant = built, now on ice.
// Left undefined (no badge) where it doesn't apply, e.g. templates and academic repos.
export type ProjectLifecycle = 'live' | 'wip' | 'dormant';

// Single source of truth for the lifecycle badge, shared by every card.
export const lifecycleMeta: Record<ProjectLifecycle, { label: string; class: string }> = {
  live: { label: 'live', class: 'preset-filled-success-500' },
  wip: { label: 'wip', class: 'preset-filled-warning-500' },
  dormant: { label: 'dormant', class: 'preset-filled-surface-500' },
};

export type Project = {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  tech: string[];
  date: string;
  status: ProjectStatus;
  featured: boolean;
  category?: ProjectCategory;
  lifecycle?: ProjectLifecycle;
};

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
    lifecycle: 'live',
  },
  {
    title: 'Mistatools',
    description: 'mistahuman tools',
    liveUrl: 'https://mistahuman.github.io/mistatools/',
    githubUrl: 'https://github.com/mistahuman/mistatools',
    tech: ['SvelteKit', 'Skeleton UI'],
    date: '2026',
    status: 'completed',
    featured: true,
    lifecycle: 'live',
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
    lifecycle: 'live',
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
    lifecycle: 'live',
  },
  {
    title: 'Forge String',
    description: 'paste a pile of tokens, pick a separator, get one clean string',
    liveUrl: 'https://mistahuman.github.io/forge-string/',
    githubUrl: 'https://github.com/mistahuman/forge-string',
    tech: ['SvelteKit', 'Svelte', 'Skeleton UI', 'TypeScript'],
    date: '2026',
    status: 'completed',
    featured: true,
    lifecycle: 'live',
  },
  {
    title: 'Cashflowr',
    description: 'personal finance tracker with monthly entries, planner and annual view',
    githubUrl: 'https://github.com/mistahuman/cashflowr',
    tech: ['FastAPI', 'MongoDB', 'SvelteKit', 'Docker'],
    date: '2026',
    status: 'inProgress',
    featured: true,
    lifecycle: 'wip',
  },
  {
    title: 'Svelte Kitty Translate',
    description: 'translation front-end with a shared UI-kit playground',
    liveUrl: 'https://mistahuman.github.io/svelte-kitty-translate/',
    githubUrl: 'https://github.com/mistahuman/svelte-kitty-translate',
    tech: ['SvelteKit', 'Svelte', 'Skeleton UI', 'TypeScript'],
    date: '2026',
    status: 'completed',
    featured: false,
    lifecycle: 'live',
  },
  {
    title: 'DeepHours',
    description: 'working-hours tracker: log what you worked on and keep the week in order',
    githubUrl: 'https://github.com/mistahuman/deephours',
    tech: ['FastAPI', 'MongoDB', 'Svelte', 'Docker'],
    date: '2025',
    status: 'completed',
    featured: false,
    lifecycle: 'dormant',
  },
  // Templates
  {
    title: 'Astro Svelte Skeleton Starter',
    description: 'starter template for building static pages and portfolios',
    liveUrl: 'https://mistahuman.github.io/astro-svelte-skeleton-starter/',
    githubUrl: 'https://github.com/mistahuman/astro-svelte-skeleton-starter',
    tech: ['Astro', 'Svelte', 'Skeleton UI', 'TailwindCSS'],
    date: '2026',
    status: 'completed',
    featured: true,
    category: 'template',
  },
  {
    title: 'Astro Illustrator Portfolio Starter',
    description: 'starter for a visual, image-heavy portfolio in plain Astro',
    liveUrl: 'https://mistahuman.github.io/astro-illustrator-portfolio-starter/',
    githubUrl: 'https://github.com/mistahuman/astro-illustrator-portfolio-starter',
    tech: ['Astro'],
    date: '2026',
    status: 'completed',
    featured: false,
    category: 'template',
  },
  {
    title: 'SvelteKit Skeleton Starter',
    description: 'starter template for building web applications',
    liveUrl: 'https://mistahuman.github.io/sveltekit-skeleton-starter/',
    githubUrl: 'https://github.com/mistahuman/sveltekit-skeleton-starter',
    tech: ['SvelteKit', 'Skeleton UI', 'TailwindCSS', 'TypeScript'],
    date: '2026',
    status: 'completed',
    featured: true,
    category: 'template',
  },
  {
    title: 'FastAPI MongoDB Starter',
    description: 'minimal REST API backend starter with async Python',
    githubUrl: 'https://github.com/mistahuman/fastapi-mongodb-starter',
    tech: ['FastAPI', 'Beanie', 'MongoDB', 'Python'],
    date: '2026',
    status: 'completed',
    featured: false,
    category: 'template',
  },
  {
    title: 'Gin MongoDB Starter',
    description: 'minimal REST API backend starter with Go',
    githubUrl: 'https://github.com/mistahuman/gin-mongodb-starter',
    tech: ['Gin', 'MongoDB', 'Go'],
    date: '2026',
    status: 'completed',
    featured: false,
    category: 'template',
  },
  {
    title: 'Axum MongoDB Starter',
    description: 'minimal REST API backend starter with Rust',
    githubUrl: 'https://github.com/mistahuman/axum-mongodb-starter',
    tech: ['Axum', 'MongoDB', 'Rust'],
    date: '2026',
    status: 'completed',
    featured: false,
    category: 'template',
  },
  {
    title: 'Fullstack Webapp Starter',
    description:
      'Docker Compose shell that composes a backend starter, the SvelteKit UI and MongoDB behind Nginx',
    githubUrl: 'https://github.com/mistahuman/fullstack-webapp-starter',
    tech: ['Docker', 'Nginx', 'SvelteKit', 'MongoDB'],
    date: '2026',
    status: 'completed',
    featured: false,
    category: 'template',
  },
  {
    title: 'LaTeX Document Template',
    description: 'clean LaTeX starter with cover page, styled header/footer, and code highlighting',
    githubUrl: 'https://github.com/mistahuman/template-latex',
    tech: ['LaTeX'],
    date: '2026',
    status: 'completed',
    featured: false,
    category: 'template',
  },
  // Academic
  {
    title: "ALFRED LFR – Master's Thesis",
    description:
      'modelling of a Lead-cooled Fast Reactor with neutronics–thermohydraulics coupling on the FEMuS multi-physics platform',
    githubUrl: 'https://github.com/mistahuman/marcolanconelli-thesis',
    tech: ['LaTeX', 'Dragon5/Donjon5', 'FEMuS'],
    date: '2019',
    status: 'completed',
    featured: false,
    category: 'academic',
  },
  {
    title: 'Nuclear Engineering Homeworks',
    description:
      'collection of reports and projects from the M.Sc. in Energy Engineering (Nuclear track) at UniBO',
    githubUrl: 'https://github.com/mistahuman/nuclear-engineer-homeworks',
    tech: ['LaTeX', 'MATLAB', 'Python'],
    date: '2016–2019',
    status: 'completed',
    featured: false,
    category: 'academic',
  },
];
