'use client';

import type { Slide } from 'src/components/slide';

import Example from './example';
import IdentityVsPermissions from './identityVsPermissions';
import Introduction from './introduction';
import MainTitle from './mainTitle';
import Why from './why';

export const getSlides = () => {
  return [
    ...MainTitle,
    ...Introduction,
    ...Example,
    ...Why,
    ...IdentityVsPermissions,
  ] satisfies Slide[];
};
