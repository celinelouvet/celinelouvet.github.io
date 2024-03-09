import { Box, type BoxProps, forwardRef } from '@chakra-ui/react';

import { useCurrentPosition } from '@/hooks';

import { type Slide } from '../types';

type SlideDeckProps = Omit<BoxProps, 'children'> & {
  slides: Slide[];
  forNotes?: boolean;
};

export const SlideDeck = forwardRef<SlideDeckProps, 'div'>(
  ({ slides, forNotes, ...props }, ref) => {
    const currentPosition = useCurrentPosition(slides.length);

    if (forNotes) {
      return (
        <>
          {slides.map(({ note }, index) => (
            <Box
              key={`note-${index}`}
              display={index !== currentPosition ? 'none' : ''}
              userSelect="none"
              {...props}
              ref={ref}
            >
              {note}
            </Box>
          ))}
        </>
      );
    }

    return (
      <>
        {slides.map(({ content }, index) => (
          <Box
            key={`content-${index}`}
            display={index !== currentPosition ? 'none' : ''}
            userSelect="none"
            {...props}
            ref={ref}
          >
            {content}
          </Box>
        ))}
      </>
    );
  }
);
