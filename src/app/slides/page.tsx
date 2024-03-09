'use client';
import { Box } from '@chakra-ui/react';

import { SlideDeck } from '@/components/core';

import { getSlides } from './slides';

export default function Page() {
  const slides = getSlides();
  return (
    <Box>
      <SlideDeck slides={slides} />
      <SlideDeck slides={slides} forNotes={true} />
    </Box>
  );
}
