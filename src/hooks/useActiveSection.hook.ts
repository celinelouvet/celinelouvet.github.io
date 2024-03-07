import { useRouter } from 'next/router';

import { type Section, url2slugs } from '@/data';

export const useActiveSection = (): Section => {
  const { asPath } = useRouter();

  if (!url2slugs.has(asPath)) {
    return {
      href: '/',
      slug: 'home',
    };
  }
  const slug = url2slugs.get(asPath);

  if (!slug) {
    return {
      href: '/',
      slug: 'home',
    };
  }

  return {
    href: asPath,
    slug,
  };
};
