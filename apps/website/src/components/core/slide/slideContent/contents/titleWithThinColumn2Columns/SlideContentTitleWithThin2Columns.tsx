import { Box, type BoxProps, HStack, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading, H3Heading } from '@/components/core';

import { type ContentTitleWithThin2Columns } from '../../types';

type SlideContentTitleWithThin2ColumnsProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentTitleWithThin2Columns>;

export const SlideContentTitleWithThin2Columns = React.forwardRef<
  HTMLDivElement,
  SlideContentTitleWithThin2ColumnsProps
>(function SlideContentTitleWithThin2Columns(props, ref) {
  const {
    title,
    column1,
    column2,
    topRightCorner: topRightCornerContent,
    children,
    ...restProps
  } = props;
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
      backgroundColor="brand.900"
      color="brand.100"
      ref={ref}
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
          paddingX="2em"
          paddingY="3em"
          backgroundColor="white"
        >
          {column1}
        </Box>

        <Box
          width="77%"
          height="100%"
          paddingLeft="1em"
          paddingY="3em"
          paddingRight="3em"
        >
          <Stack width="100%" height="100%" gap="1em" overflow="hidden">
            <Box>{titleWithCorner}</Box>

            <Box width="100%" flex="1">
              <HStack
                width="100%"
                height="100%"
                alignItems="flex-start"
                gap="5%"
                overflow="hidden"
              >
                <Box width="47.5%" height="100%">
                  {column2}
                </Box>
                <Box width="47.5%" height="100%">
                  {children}
                </Box>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
});
