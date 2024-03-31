'use client';

import { SlideDeck } from '@/components/core';

import { getSlides } from '../slides';

export default function Page() {
  const slides = getSlides();

  return (
    <SlideDeck
      slides={slides}
      forNotes={false}
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="gray.900"
      color="white"
    />
  );
}
