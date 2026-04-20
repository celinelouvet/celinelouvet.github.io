'use client';

import type { Slide } from 'src/components/slide';

import Example from './example';
import IdentityVsPermissions from './identityVsPermissions';
import Introduction from './introduction';
import MainTitle from './mainTitle';
import WhichRule from './whichRule';
import Why from './why';

export const getSlides = () => {
  return [
    ...MainTitle,
    ...Introduction,
    ...Example,
    ...Why,
    ...IdentityVsPermissions,
    ...WhichRule,
  ] satisfies Slide[];
};
