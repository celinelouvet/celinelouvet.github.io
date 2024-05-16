import { Box, forwardRef } from '@chakra-ui/react';

import { useSlideSize, useWindowSize } from '@/hooks';

import { type SlideDeckProps } from './SlideDeck';

type SlideDeckForPrintProps = Omit<SlideDeckProps, 'forNotes'>;

export const SlideDeckForPrint = forwardRef<SlideDeckForPrintProps, 'div'>(
  ({ slides, ...props }, ref) => {
    const windowSize = useWindowSize(ref);
    const contentProps = useSlideSize(windowSize);

    return (
      <>
        {slides.map(({ content }, index) => (
          <Box
            key={`content-${index}`}
            userSelect="none"
            {...contentProps}
            {...props}
            backgroundColor="gray.900"
            ref={ref}
          >
            {content}
          </Box>
        ))}
      </>
    );
  }
);
