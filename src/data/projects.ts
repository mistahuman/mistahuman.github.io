import type { CollectionEntry } from 'astro:content';

// Types derive from the `projects` collection schema (src/content.config.ts) —
// the schema is the single source of truth for the data shape.
export type Project = CollectionEntry<'projects'>['data'];
export type ProjectStatus = Project['status'];
export type ProjectCategory = Project['category'];
export type ProjectLifecycle = NonNullable<Project['lifecycle']>;

// Presentation-only: how each lifecycle stage renders as a badge, shared by every card.
export const lifecycleMeta: Record<ProjectLifecycle, { label: string; class: string }> = {
  live: { label: 'live', class: 'preset-filled-success-500' },
  wip: { label: 'wip', class: 'preset-filled-warning-500' },
  outdated: { label: 'outdated', class: 'preset-filled-surface-500' },
};

// A bare `YYYY` means the month is unknown, so it sorts last within its own year —
// `-00` makes that explicit instead of relying on prefix comparison.
const sortKey = (date: string) => (date.length === 4 ? `${date}-00` : date);

// The one ordering rule: newest first, ties broken alphabetically.
export const byDateThenTitle = (a: Project, b: Project) =>
  sortKey(b.date).localeCompare(sortKey(a.date)) || a.title.localeCompare(b.title);

// What each section is called and what it says, kept next to the data it describes.
export const categoryMeta: Record<ProjectCategory, { label: string; blurb: string }> = {
  app: { label: 'apps', blurb: "web apps and tools I've built" },
  cli: { label: 'cli', blurb: 'command-line tools' },
  starter: { label: 'starters', blurb: 'my reusable starters for frontend, backend and fullstack projects' },
  academic: {
    label: 'academic & research',
    blurb: "repos from my Master's in Nuclear and Energy Engineering at UniBO",
  },
};

// Card display: the period label when the project spans one, otherwise just the year.
export const displayDate = (project: Project) => project.dateLabel ?? project.date.slice(0, 4);
