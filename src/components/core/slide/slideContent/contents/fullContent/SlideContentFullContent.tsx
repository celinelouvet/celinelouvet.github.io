import { Box, type StackProps, forwardRef } from '@chakra-ui/react';

import { ColorMode, type ContentFullContent } from '../../types';

type SlideContentFullContentProps = Omit<StackProps, 'children'> &
  ContentFullContent;

export const SlideContentFullContent = forwardRef<
  SlideContentFullContentProps,
  'div'
>(({ colormode = ColorMode.light, children, ...props }, ref) => {
  const backgroundColor =
    colormode === ColorMode.light ? 'brand.900' : 'brand.300';
  const color = colormode === ColorMode.light ? 'brand.100' : 'brand.900';

  return (
    <Box
      width="100%"
      height="100%"
      padding="3em"
      backgroundColor={backgroundColor}
      color={color}
      direction="row"
      spacing="2em"
      alignItems="stretch"
      overflow="hidden"
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});
