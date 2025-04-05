import { Box, type BoxProps } from '@chakra-ui/react';
import * as React from 'react';

import { useSlideSize, useWindowSize } from './hooks';
import { type Print } from './types';

type SlideDeckForPrintProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<Print>;

export const SlideDeckForPrint = React.forwardRef<
  HTMLDivElement,
  SlideDeckForPrintProps
>(function SlideDeckForPrint(props, ref) {
  const { slides, ...restProps } = props;

  const windowSize = useWindowSize(ref);
  const contentProps = useSlideSize(windowSize);

  return (
    <>
      {slides.map(({ content }, index) => (
        <Box
          key={`content-${index}`}
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
