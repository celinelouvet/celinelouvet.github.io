import { type BoxProps, forwardRef } from '@chakra-ui/react';

import { SlideDeckForContent } from './SlideDeckForContent';
import { SlideDeckForNotes } from './SlideDeckForNotes';

export type SlideDeckProps = BoxProps & {
  forNotes?: boolean;
};

export const SlideDeck = forwardRef<SlideDeckProps, 'div'>(
  ({ children, forNotes = false, ...props }, ref) =>
    forNotes ? (
      <SlideDeckForNotes {...props} ref={ref}>
        {children}
      </SlideDeckForNotes>
    ) : (
      <SlideDeckForContent {...props} ref={ref}>
        {children}
      </SlideDeckForContent>
    )
);
