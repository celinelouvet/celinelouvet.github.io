import { type BoxProps, forwardRef } from '@chakra-ui/react';

import { SlideDeckForContent } from './SlideDeckForContent';
import { SlideDeckForNotes } from './SlideDeckForNotes';
import { SlideDeckForPrint } from './SlideDeckForPrint';
import { SlideDeckForPrintNotes } from './SlideDeckForPrintNotes';
import { type Slide } from '../types';

export enum ViewTypes {
  content = 'content',
  notes = 'notes',
  print = 'print',
  printNotes = 'printNotes',
}

export type SlideDeckProps = Omit<BoxProps, 'children'> & {
  slides: Slide[];
  view?: ViewTypes;
};

export const SlideDeck = forwardRef<SlideDeckProps, 'div'>(
  ({ view = ViewTypes.content, ...props }, ref) => {
    switch (view) {
      case ViewTypes.printNotes:
        return <SlideDeckForPrintNotes {...props} ref={ref} />;

      case ViewTypes.print:
        return <SlideDeckForPrint {...props} ref={ref} />;

      case ViewTypes.notes:
        return <SlideDeckForNotes {...props} ref={ref} />;

      default:
        return <SlideDeckForContent {...props} ref={ref} />;
    }
  }
);
