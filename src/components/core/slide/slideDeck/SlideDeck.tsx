import { Box, type BoxProps, forwardRef } from '@chakra-ui/react';

import { useArray, useCurrentPosition } from '@/hooks';

type SlideDeckProps = BoxProps;

export const SlideDeck = forwardRef<SlideDeckProps, 'div'>(
  ({ children, ...props }, ref) => {
    const array = useArray(children);
    const currentPosition = useCurrentPosition(array.length);

    return (
      <>
        {array.map((child, index) => (
          <Box
            key={index}
            display={index !== currentPosition ? 'none' : ''}
            userSelect="none"
            {...props}
            ref={ref}
          >
            {child}
          </Box>
        ))}
      </>
    );
  }
);
