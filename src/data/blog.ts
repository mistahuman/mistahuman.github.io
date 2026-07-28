import type { CollectionEntry } from 'astro:content';

// Types derive from the `blog` collection schema (src/content.config.ts) —
// the schema is the single source of truth for the data shape.
export type Post = CollectionEntry<'blog'>;
export type PostData = Post['data'];

// Drafts stay out of the listing and off their route (see also the [...slug] route,
// which won't generate a page for them). import.meta.env.PROD is true only in builds,
// so drafts remain visible while running `astro dev`.
export const isPublished = (post: Post) => !post.data.draft || !import.meta.env.PROD;

// The one ordering rule: newest first, ties broken alphabetically by title.
export const byDateDesc = (a: Post, b: Post) =>
  b.data.date.localeCompare(a.data.date) || a.data.title.localeCompare(b.data.title);

// prettier-ignore
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// `YYYY-MM-DD` → e.g. `28 July 2026`. Parsed from parts to avoid timezone shifts.
export const displayDate = (date: string) => {
  const [y, m, d] = date.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

// The listing is grouped by year, so each row only needs day + month.
export const shortDate = (date: string) => {
  const [, m, d] = date.split('-').map(Number);
  return `${d} ${MONTHS[m - 1].slice(0, 3)}`;
};

// Rough reading time off the raw markdown at 200 wpm. Markdown syntax is not
// stripped — it's a hint on a listing row, not a measurement.
export const readingTime = (post: Post) => {
  const words = post.body?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  return Math.max(1, Math.round(words / 200));
};

// Tags are written free-form in frontmatter ("Big Picture", "windows"), so counting
// them needs a normalised key: lowercased, spaces to dashes, the rest dropped.
const tagKey = (tag: string) =>
  tag
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

export interface TagSummary {
  tag: string; // the label as first written in frontmatter
  count: number;
}

// Every tag across the given posts, most used first, ties alphabetically. Tags that
// normalise to the same key are counted together under the first spelling seen.
export const collectTags = (posts: Post[]): TagSummary[] => {
  const tags = new Map<string, TagSummary>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const key = tagKey(tag);
      if (!key) continue;
      const seen = tags.get(key);
      if (seen) seen.count += 1;
      else tags.set(key, { tag, count: 1 });
    }
  }
  return [...tags.values()].sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
};

// Buckets an already-sorted list into `[year, posts]` pairs, keeping the input
// order — so newest-first in, newest-first out, both across and within years.
export const groupByYear = (posts: Post[]): [string, Post[]][] => {
  const years = new Map<string, Post[]>();
  for (const post of posts) {
    const year = post.data.date.slice(0, 4);
    years.set(year, [...(years.get(year) ?? []), post]);
  }
  return [...years.entries()];
};
