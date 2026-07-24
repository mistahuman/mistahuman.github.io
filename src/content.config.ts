import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per project in src/content/projects/. Structured fields live in
// frontmatter (validated here by Zod); the markdown body is an optional longer writeup.
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    order: z.number(), // display order within its section
    title: z.string(),
    description: z.string(), // short blurb shown on the card
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url(),
    tech: z.array(z.string()),
    date: z.string(),
    status: z.enum(['completed', 'inProgress', 'planned']),
    featured: z.boolean(),
    category: z.enum(['web', 'academic', 'template']).optional(),
    lifecycle: z.enum(['live', 'wip', 'outdated']).optional(),
  }),
});

export const collections = { projects };
