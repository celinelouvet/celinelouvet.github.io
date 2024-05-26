'use client';

import { SlideDeck, ViewTypes } from '@/components/core';
import { getSlides } from '@/components/slideDecks/highwayToFail';

export default function Page() {
  const slides = getSlides();

  return (
    <SlideDeck
      slides={slides}
      view={ViewTypes.notes}
      messageRoot="talk"
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="brand.900"
    />
  );
}
