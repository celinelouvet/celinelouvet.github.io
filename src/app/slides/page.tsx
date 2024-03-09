'use client';
import { Box } from '@chakra-ui/react';

import { SlideDeck } from '@/components/core';

import { getSlides } from './slides';

export default function Page() {
  const { contents, notes } = getSlides();
  return (
    <Box>
      <SlideDeck>{contents}</SlideDeck>
      <SlideDeck>{notes}</SlideDeck>
    </Box>
  );
}
