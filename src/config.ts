// Theme configuration
// Set THEME_PICKER to false to lock the site to DEFAULT_THEME: this both skips the
// localStorage lookup and hides the picker in the header.
export const THEME_PICKER = false;
export const DEFAULT_THEME = 'mistahuman-theme';

// Site identity and SEO defaults
// Every page inherits these unless it passes its own values to <Layout>. The site
// origin itself is not here: it lives in `site` in astro.config.mjs, which is what
// canonical URLs, Open Graph URLs and the sitemap are built from.
export const SITE_NAME = 'mistahuman';
export const SITE_TITLE = "mistahuman's Github Pages";
export const SITE_DESCRIPTION =
  'Marco Lanconelli — software engineer. Projects, notes and the occasional write-up.';
export const SITE_AUTHOR = 'Marco Lanconelli';
export const SITE_LOCALE = 'en_US';
// Fallback social preview, as a path under /public. Overridden per post by `cover`.
export const SITE_OG_IMAGE = '/me.jpg';

// Per-page SEO, accepted by <Layout> and forwarded to <LayoutRoot>.
// All fields are optional: a page that passes nothing gets the site defaults above.
export interface SeoProps {
  // Page title. Rendered as `<title> · SITE_NAME`; omit it and the title is SITE_TITLE.
  title?: string;
  description?: string;
  // Social preview image, as a path under /public or an absolute URL.
  image?: string;
  imageAlt?: string;
  // `article` adds the published date and tags to the Open Graph tags, and emits
  // BlogPosting JSON-LD. Blog posts use it; everything else is a `website`.
  type?: 'website' | 'article';
  publishedDate?: string;
  tags?: string[];
  // Keeps a page out of search indexes. Nothing sets it today; it's here for pages
  // that end up being filtered views or duplicates of another page.
  noindex?: boolean;
}
