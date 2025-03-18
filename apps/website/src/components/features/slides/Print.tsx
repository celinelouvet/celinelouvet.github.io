import * as React from 'react';

import { SlideDeck, ViewTypes } from '@/components/core';
import { getSlides } from '@/components/slideDecks/highwayToFail';

export const Print: React.FC = () => {
  const slides = getSlides();

  return <SlideDeck slides={slides} view={ViewTypes.print} />;
};
