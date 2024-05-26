import { Box, type BoxProps, forwardRef } from '@chakra-ui/react';

import { useCurrentPosition, useSlideSize, useWindowSize } from '@/hooks';

import { type Content } from './types';

type SlideDeckForContentProps = Omit<BoxProps, 'children'> & Content;

export const SlideDeckForContent = forwardRef<SlideDeckForContentProps, 'div'>(
  ({ slides, messageRoot, ...props }, ref) => {
    const currentPosition = useCurrentPosition(messageRoot, slides.length);

    const windowSize = useWindowSize(ref);
    const contentProps = useSlideSize(windowSize);

    return (
      <>
        {slides.map(({ content }, index) => (
          <Box
            key={`content-${index}`}
            display={index !== currentPosition ? 'none' : ''}
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
