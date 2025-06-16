import { Box, type BoxProps, HStack, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading, H3Heading } from '@/components/core';

import { type ContentTitleWithThinColumn } from '../../types';

type SlideContentTitleWithThinColumnProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentTitleWithThinColumn>;

export const SlideContentTitleWithThinColumn: React.FC<SlideContentTitleWithThinColumnProps> =
  function SlideContentTitleWithThinColumn(props) {
    const {
      title,
      column1,
      topRightCorner: topRightCornerContent,
      children,
      ...restProps
    } = props;
    const titleWithCorner = topRightCornerContent ? (
      <HStack gap="brand.100" alignItems="baseline">
        <H2Heading variant="slide" flex="1">
          {title}
        </H2Heading>
        <H3Heading variant="slide">{topRightCornerContent}</H3Heading>
      </HStack>
    ) : (
      <H2Heading variant="slide">{title}</H2Heading>
    );

    return (
      <Box
        width="100%"
        height="100%"
        backgroundColor="brand.900"
        color="brand.100"
        {...restProps}
      >
        <HStack
          width="100%"
          height="100%"
          alignItems="stretch"
          gap="0"
          overflow="hidden"
        >
          <Box
            width="23%"
            height="100%"
            paddingX="brand.200"
            paddingY="brand.300"
            backgroundColor="white"
          >
            {column1}
          </Box>

          <Box
            width="77%"
            height="100%"
            paddingLeft="brand.100"
            paddingY="brand.300"
            paddingRight="brand.300"
          >
            <Stack width="100%" height="100%" gap="brand.100" overflow="hidden">
              <Box>{titleWithCorner}</Box>

              <Box width="100%" flex="1">
                {children}
              </Box>
            </Stack>
          </Box>
        </HStack>
      </Box>
    );
  };
