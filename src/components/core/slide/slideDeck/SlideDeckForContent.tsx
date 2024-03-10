import { Box, forwardRef } from '@chakra-ui/react';

import { useCurrentPosition } from '@/hooks';

import { type SlideDeckProps } from './SlideDeck';

type SlideDeckForContentProps = Omit<SlideDeckProps, 'forNotes'>;

export const SlideDeckForContent = forwardRef<SlideDeckForContentProps, 'div'>(
  ({ slides, ...props }, ref) => {
    const currentPosition = useCurrentPosition(slides.length);

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
