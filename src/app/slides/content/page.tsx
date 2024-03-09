'use client';

import { SlideDeck } from '@/components/core';

import { getSlides } from '../slides';

export default function Page() {
  const { contents } = getSlides();

  return (
    <SlideDeck
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="gray.900"
      color="white"
    >
      {contents}
    </SlideDeck>
  );
}
