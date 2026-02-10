import { Box, type BoxProps, HStack, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading, H3Heading } from '@/components/core';

import {
  type ContentTitleWith2Columns,
  SlideContentTypes,
  colorMode
} from '../../types';
import { SlideContentFullContent } from '../fullContent';

type SlideContentTitleWith2ColumnsProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentTitleWith2Columns>;

export const SlideContentTitleWith2Columns: React.FC<SlideContentTitleWith2ColumnsProps> =
  function SlideContentTitleWith2Columns({
    title,
    column1,
    topRightCorner: topRightCornerContent,
    children,
    ...props
  }) {
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
      <SlideContentFullContent
        {...props}
        colormode={colorMode.light}
        type={SlideContentTypes.fullContent}
      >
        <Stack
          width="100%"
          height="100%"
          alignItems="stretch"
          gap="brand.100"
          overflow="hidden"
        >
          <Box>{titleWithCorner}</Box>

          <HStack
            width="100%"
            height="100%"
            alignItems="flex-start"
            gap="2%"
            overflow="hidden"
          >
            <Box width="30%" height="100%">
              {column1}
            </Box>
            <Box width="68%" height="100%">
              {children}
            </Box>
          </HStack>
        </Stack>
      </SlideContentFullContent>
    );
  };
