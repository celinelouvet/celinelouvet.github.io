'use client';

import { SlideDeck } from '@/components/core';

import { getSlides } from '../slides';

export default function Page() {
  const { notes } = getSlides();

  return (
    <SlideDeck position="absolute" top="0" left="0" right="0" bottom="0">
      {notes}
    </SlideDeck>
  );
}
