export type Slug = 'home' | 'resume' | 'talks' | 'blog';

export type Section = {
  to: string;
  slug: Slug;
};

export const sections = [
  {
    to: '/',
    slug: 'home',
  },
  {
    to: '/resume',
    slug: 'resume',
  },
  {
    to: '/talks',
    slug: 'talks',
  },
] satisfies Section[];

export const url2slugs: Map<string, Slug> = new Map(
  sections.map((section) => [section.to, section.slug]),
);
