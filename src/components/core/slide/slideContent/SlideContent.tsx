import { Box, type BoxProps, forwardRef } from '@chakra-ui/react';

import { useSlideSize, useWindowSize } from '@/hooks';

type SlideContentProps = BoxProps;

export const SlideContent = forwardRef<SlideContentProps, 'div'>(
  ({ children, ...props }, ref) => {
    const windowSize = useWindowSize(ref);
    const contentProps = useSlideSize(windowSize);

    return (
      <Box {...contentProps} ref={ref} {...props}>
        {children}
      </Box>
    );
  }
);
