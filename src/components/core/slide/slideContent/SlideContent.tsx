import { Box, type BoxProps, forwardRef } from '@chakra-ui/react';

type SlideContentProps = BoxProps;

export const SlideContent = forwardRef<SlideContentProps, 'div'>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} {...props} width="100%" height="100%">
        {children}
      </Box>
    );
  }
);
