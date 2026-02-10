import { Box, type BoxProps } from '@chakra-ui/react';
import * as React from 'react';

import { type ContentFullContent, colorMode } from '../../types';

type SlideContentFullContentProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentFullContent>;

export const SlideContentFullContent: React.FC<SlideContentFullContentProps> =
  function SlideContentFullContent(props) {
    const { colormode = colorMode.light, children, ...restProps } = props;

    const backgroundColor =
      colormode === colorMode.light ? 'brand.900' : 'brand.300';
    const color = colormode === colorMode.light ? 'brand.100' : 'brand.900';

    return (
      <Box
        width="100%"
        height="100%"
        padding="brand.300"
        backgroundColor={backgroundColor}
        color={color}
        direction="row"
        gap="brand.200"
        alignItems="stretch"
        overflow="hidden"
        {...restProps}
      >
        {children}
      </Box>
    );
  };
