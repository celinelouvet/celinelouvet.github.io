import { Box, type BoxProps, Flex, HStack, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading, H3Heading } from '@/components/core';

import { type ContentTitleWithContent } from '../../types';

type SlideContentTitleWithContentProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentTitleWithContent>;

export const SlideContentTitleWithContent = React.forwardRef<
  HTMLDivElement,
  SlideContentTitleWithContentProps
>(function SlideContentTitleWithContent(
  { title, topRightCorner: topRightCornerContent, children, ...props },
  ref,
) {
  const titleWithCorner = topRightCornerContent ? (
    <HStack gap="1em" alignItems="baseline">
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
      padding="3em"
      backgroundColor="brand.900"
      color="brand.100"
      ref={ref}
      {...props}
    >
      <Stack
        width="100%"
        height="100%"
        alignItems="stretch"
        gap="1em"
        overflow="hidden"
      >
        <Box>{titleWithCorner}</Box>
        <Flex
          flexGrow="1"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
        >
          {children}
        </Flex>
      </Stack>
    </Box>
  );
});
