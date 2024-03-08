import { useRouter } from 'next/router';

import { type Section, url2slugs } from '@/data';

export const useActiveSection = (): Section => {
  const { asPath } = useRouter();
  const root = keepRoot(asPath);

  if (!url2slugs.has(root)) {
    return {
      href: '/',
      slug: 'home',
    };
  }
  const slug = url2slugs.get(root);

  if (!slug) {
    return {
      href: '/',
      slug: 'home',
    };
  }

  return {
    href: root,
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
