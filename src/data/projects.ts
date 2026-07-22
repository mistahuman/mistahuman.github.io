export type ProjectStatus = 'completed' | 'inProgress' | 'planned';
export type ProjectCategory = 'web' | 'academic' | 'template';

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
    description: 'Docker Compose monorepo wiring backend, SvelteKit and MongoDB via Nginx',
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
