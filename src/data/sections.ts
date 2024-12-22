export type Slug = 'home' | 'resume' | 'talks' | 'blog';

export type Section = {
  href: string;
  slug: Slug;
};

export const sections = [
  {
    href: '/',
    slug: 'home',
  },
  {
    href: '/resume',
    slug: 'resume',
  },
  {
    href: '/talks',
    slug: 'talks',
  },
  {
    href: '/blog',
    slug: 'blog',
  },
] satisfies Section[];

export const url2slugs: Map<string, Slug> = new Map(
  sections.map((section) => [section.href, section.slug])
);
