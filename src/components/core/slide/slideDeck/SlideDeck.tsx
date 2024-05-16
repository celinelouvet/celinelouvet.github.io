import { type BoxProps, forwardRef } from '@chakra-ui/react';

import { SlideDeckForContent } from './SlideDeckForContent';
import { SlideDeckForNotes } from './SlideDeckForNotes';
import { SlideDeckForPrint } from './SlideDeckForPrint';
import { type Slide } from '../types';

export enum ViewTypes {
  content = 'content',
  notes = 'notes',
  print = 'print',
}

export type SlideDeckProps = Omit<BoxProps, 'children'> & {
  slides: Slide[];
  view?: ViewTypes;
};

export const SlideDeck = forwardRef<SlideDeckProps, 'div'>(
  ({ view = ViewTypes.content, ...props }, ref) => {
    if (view === ViewTypes.print) {
      return <SlideDeckForPrint {...props} ref={ref} />;
    }

    if (view === ViewTypes.notes) {
      return <SlideDeckForNotes {...props} ref={ref} />;
    }

    return <SlideDeckForContent {...props} ref={ref} />;
  }
);
