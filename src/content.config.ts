import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per project in src/content/projects/. Structured fields live in
// frontmatter (validated here by Zod); the markdown body is an optional longer writeup.
//
// There is no manual `order` field: projects are grouped by `category` and sorted by
// `date` descending, then title. Adding a project never touches any other file.
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // short blurb shown on the card
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url(),
    tech: z.array(z.string()),
    // Sort key: when the project was born, as `YYYY-MM` (or bare `YYYY` when the month
    // is unknown, which sorts last within its year). Zero-padded, so plain string
    // comparison is chronological.
    date: z.string().regex(/^\d{4}(-\d{2})?$/),
    // Display override, for projects that span a period rather than a point in time.
    dateLabel: z.string().optional(),
    category: z.enum(['app', 'cli', 'starter', 'academic']),
    status: z.enum(['completed', 'inProgress', 'planned']),
    featured: z.boolean(),
    lifecycle: z.enum(['live', 'wip', 'outdated']).optional(),
  }),
});

export const collections = { projects };
