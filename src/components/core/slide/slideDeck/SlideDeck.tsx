import { type BoxProps, Text, forwardRef } from '@chakra-ui/react';

import { SlideDeckForContent } from './SlideDeckForContent';
import { SlideDeckForNotes } from './SlideDeckForNotes';
import { SlideDeckForPrint } from './SlideDeckForPrint';
import { SlideDeckForPrintNotes } from './SlideDeckForPrintNotes';
import { type All, ViewTypes } from './types';

export type SlideDeckProps = Omit<BoxProps, 'children'> & All;

export const SlideDeck = forwardRef<SlideDeckProps, 'div'>((props, ref) => {
  switch (props.view) {
    case ViewTypes.content:
      return <SlideDeckForContent {...props} ref={ref} />;

    case ViewTypes.notes:
      return <SlideDeckForNotes {...props} ref={ref} />;

    case ViewTypes.print:
      return <SlideDeckForPrint {...props} ref={ref} />;

    case ViewTypes.printNotes:
      return <SlideDeckForPrintNotes {...props} ref={ref} />;

    default:
      <Text>Unknown type</Text>;
  }
});
