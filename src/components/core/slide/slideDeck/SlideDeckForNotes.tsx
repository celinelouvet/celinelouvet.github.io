import { Box, Flex, forwardRef } from '@chakra-ui/react';
import { type FC } from 'react';

import { useCurrentPosition } from '@/hooks';

import { type SlideDeckProps } from './SlideDeck';
import { SlideTimer } from '../slideTimer';
import { type Slide } from '../types';

const Note: FC<{ slides: Slide[]; position: number }> = ({
  slides,
  position,
}) => (
  <>
    {slides.map(({ note }, index) => (
      <Box
        width="100%"
        height="100%"
        key={`note-${index}`}
        display={index !== position ? 'none' : ''}
        userSelect="none"
      >
        {note}
      </Box>
    ))}
  </>
);

export type SlideDeckForNotesProps = Omit<SlideDeckProps, 'forNotes'>;

export const SlideDeckForNotes = forwardRef<SlideDeckForNotesProps, 'div'>(
  ({ slides, ...props }, ref) => {
    const currentPosition = useCurrentPosition(slides.length);

    return (
      <Flex alignItems="stretch" height="100%" gap="4" {...props} ref={ref}>
        <Box backgroundColor="brand.800" height="100%">
          <SlideTimer />
        </Box>
        <Box flex="1" height="100%">
          <Note slides={slides} position={currentPosition} />
        </Box>
      </Flex>
    );
  }
);
