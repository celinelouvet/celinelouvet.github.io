import { Box, type BoxProps } from '@chakra-ui/react';
import * as React from 'react';

import { useCurrentPosition, useSlideSize, useWindowSize } from './hooks';
import { type Content } from './types';

type SlideDeckForContentProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<Content>;

export const SlideDeckForContent = React.forwardRef<
  HTMLDivElement,
  SlideDeckForContentProps
>(function SlideDeckForContent(props, ref) {
  const { slides, messageRoot, ...restProps } = props;

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
          {...restProps}
          backgroundColor="gray.900"
          ref={ref}
        >
          {content}
        </Box>
      ))}
    </>
  );
});
