import { type BoxProps, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideDeckForContent } from './SlideDeckForContent';
import { SlideDeckForNotes } from './SlideDeckForNotes';
import { SlideDeckForPrint } from './SlideDeckForPrint';
import { SlideDeckForPrintNotes } from './SlideDeckForPrintNotes';
import { type All, ViewTypes } from './types';

export type SlideDeckProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<All>;

export const SlideDeck = React.forwardRef<HTMLDivElement, SlideDeckProps>(
  function SlideDeck(props, ref) {
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
  },
);
