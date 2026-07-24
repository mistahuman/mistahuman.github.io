import type { CollectionEntry } from 'astro:content';

// Types derive from the `projects` collection schema (src/content.config.ts) —
// the schema is the single source of truth for the data shape.
export type Project = CollectionEntry<'projects'>['data'];
export type ProjectStatus = Project['status'];
export type ProjectCategory = NonNullable<Project['category']>;
export type ProjectLifecycle = NonNullable<Project['lifecycle']>;

// Presentation-only: how each lifecycle stage renders as a badge, shared by every card.
export const lifecycleMeta: Record<ProjectLifecycle, { label: string; class: string }> = {
  live: { label: 'live', class: 'preset-filled-success-500' },
  wip: { label: 'wip', class: 'preset-filled-warning-500' },
  outdated: { label: 'outdated', class: 'preset-filled-surface-500' },
};
