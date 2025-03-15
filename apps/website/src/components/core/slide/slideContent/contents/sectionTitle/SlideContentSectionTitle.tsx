import { Box, type BoxProps, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H1Heading } from '@/components/core';

import { type ContentSectionTitle } from '../../types';

type SlideContentSectionTitleProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentSectionTitle>;

export const SlideContentSectionTitle = React.forwardRef<
  HTMLDivElement,
  SlideContentSectionTitleProps
>(function SlideContentSectionTitle(props, ref) {
  const { title, ...restProps } = props;
  return (
    <Box
      width="100%"
      height="100%"
      padding="3em"
      backgroundColor="brand.700"
      color="brand.200"
      ref={ref}
      {...restProps}
    >
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <H1Heading variant="slide" size="lg">
            {title}
          </H1Heading>
        </Box>
      </Stack>
    </Box>
  );
});
