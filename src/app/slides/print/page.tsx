'use client';

import { SlideDeck, ViewTypes } from '@/components/core';
import { getSlides } from '@/components/slideDecks/highwayToFail';

export default function Page() {
  const slides = getSlides();

  return (
    <SlideDeck
      slides={slides}
      view={ViewTypes.print}
      backgroundColor="gray.900"
      color="white"
    />
  );
}
