import { type Section, url2slugs } from './sections';

export const useActiveSection = (asPath: string): Section => {
  const root = keepRoot(asPath);

  if (!url2slugs.has(root)) {
    return {
      to: '/',
      slug: 'home',
    };
  }
  const slug = url2slugs.get(root);

  if (!slug) {
    return {
      to: '/',
      slug: 'home',
    };
  }

  return {
    to: root,
    slug,
  };
};

export const keepRoot = (path: string): string => {
  const [, second] = [...path.matchAll(/\//g)];

  if (!second) {
    return path;
  }

  return path.slice(0, second.index);
};
