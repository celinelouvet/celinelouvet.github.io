import { type BoxProps, forwardRef } from '@chakra-ui/react';

import { SlideDeckForContent } from './SlideDeckForContent';
import { SlideDeckForNotes } from './SlideDeckForNotes';
import { type Slide } from '../types';

export type SlideDeckProps = Omit<BoxProps, 'children'> & {
  slides: Slide[];
  forNotes?: boolean;
};

export const SlideDeck = forwardRef<SlideDeckProps, 'div'>(
  ({ forNotes = false, ...props }, ref) =>
    forNotes ? (
      <SlideDeckForNotes {...props} ref={ref} />
    ) : (
      <SlideDeckForContent {...props} ref={ref} />
    )
);
