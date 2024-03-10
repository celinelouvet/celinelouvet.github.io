import { Box, Flex, forwardRef } from '@chakra-ui/react';

import { useArray, useCurrentPosition } from '@/hooks';

import { type SlideDeckProps } from './SlideDeck';
import { SlideTimer } from '../slideTimer';

type SlideDeckForNotesProps = Omit<SlideDeckProps, 'forNotes'>;

export const SlideDeckForNotes = forwardRef<SlideDeckForNotesProps, 'div'>(
  ({ children, ...props }, ref) => {
    const array = useArray(children);
    const currentPosition = useCurrentPosition(array.length);

    return (
      <Flex alignItems="stretch" height="100%" gap="4" {...props} ref={ref}>
        <Box backgroundColor="brand.800" height="100%">
          <SlideTimer />
        </Box>
        <Box flex="1" height="100%">
          {array.map((child, index) => (
            <Box
              width="100%"
              height="100%"
              key={index}
              display={index !== currentPosition ? 'none' : ''}
            >
              {child}
            </Box>
          ))}
        </Box>
      </Flex>
    );
  }
);
