import { Box, type BoxProps } from '@chakra-ui/react';
import * as React from 'react';

import { ColorMode, type ContentFullContent } from '../../types';

type SlideContentFullContentProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentFullContent>;

export const SlideContentFullContent: React.FC<SlideContentFullContentProps> =
  function SlideContentFullContent(props) {
    const { colormode = ColorMode.light, children, ...restProps } = props;

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
        gap="2em"
        alignItems="stretch"
        overflow="hidden"
        {...restProps}
      >
        {children}
      </Box>
    );
  };
