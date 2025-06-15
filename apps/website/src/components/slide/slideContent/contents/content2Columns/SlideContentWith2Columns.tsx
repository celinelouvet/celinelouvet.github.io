import { Box, type BoxProps, Stack } from '@chakra-ui/react';
import * as React from 'react';

import {
  ColorMode,
  type Content2Columns,
  SlideContentTypes,
} from '../../types';
import { SlideContentFullContent } from '../fullContent';

type SlideContentWith2ColumnsProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<Content2Columns>;

export const SlideContentWith2Columns: React.FC<SlideContentWith2ColumnsProps> =
  function SlideContentWith2Columns(props) {
    const {
      colormode = ColorMode.light,
      column1,
      children,
      ...restProps
    } = props;
    return (
      <SlideContentFullContent
        {...restProps}
        colormode={colormode}
        type={SlideContentTypes.fullContent}
      >
        <Stack
          width="100%"
          height="100%"
          direction="row"
          gap="brand.200"
          alignItems="stretch"
          overflow="hidden"
        >
          <Box width="30%" overflow="hidden">
            {column1}
          </Box>
          <Box flexGrow="1" overflow="hidden">
            {children}
          </Box>
        </Stack>
      </SlideContentFullContent>
    );
  };
