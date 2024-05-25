import {
  HStack,
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import { H2Heading, H3Heading } from '@/components/core';

import { type ContentTitleWithThinColumn } from '../../types';

type SlideContentTitleWithThinColumnProps = StackProps &
  ContentTitleWithThinColumn;

export const SlideContentTitleWithThinColumn = forwardRef<
  SlideContentTitleWithThinColumnProps,
  'div'
>(
  (
    {
      title,
      column1,
      topRightCorner: topRightCornerContent,
      children,
      ...props
    },
    ref
  ) => {
    const titleWithCorner = topRightCornerContent ? (
      <HStack spacing="1em" alignItems="baseline">
        <H2Heading variant="slide" flex="1">
          {title}
        </H2Heading>
        <H3Heading variant="slide">{topRightCornerContent}</H3Heading>
      </HStack>
    ) : (
      <H2Heading variant="slide">{title}</H2Heading>
    );

    return (
      <HStack
        width="100%"
        height="100%"
        backgroundColor="brand.900"
        color="brand.100"
        alignItems="stretch"
        gap="0"
        overflow="hidden"
        ref={ref}
        {...props}
      >
        <StackItem
          width="23%"
          height="100%"
          paddingX="2em"
          paddingY="3em"
          backgroundColor="white"
        >
          {column1}
        </StackItem>

        <StackItem
          width="77%"
          height="100%"
          paddingLeft="1em"
          paddingY="3em"
          paddingRight="3em"
        >
          <Stack width="100%" height="100%" gap="1em" overflow="hidden">
            <StackItem>{titleWithCorner}</StackItem>

            <StackItem width="100%" flex="1">
              {children}
            </StackItem>
          </Stack>
        </StackItem>
      </HStack>
    );
  }
);
