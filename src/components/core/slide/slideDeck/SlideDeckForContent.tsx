import { Box, forwardRef } from '@chakra-ui/react';

import { useArray, useCurrentPosition } from '@/hooks';

import { type SlideDeckProps } from './SlideDeck';

type SlideDeckForContentProps = Omit<SlideDeckProps, 'forNotes'>;

export const SlideDeckForContent = forwardRef<SlideDeckForContentProps, 'div'>(
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
