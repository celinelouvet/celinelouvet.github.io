import {
  type BoxProps,
  Flex,
  HStack,
  Stack,
  StackItem,
  forwardRef,
} from '@chakra-ui/react';

import { H2Heading, H3Heading } from '@/components/core';

import { type ContentTitleWithContent } from '../../types';

type SlideContentTitleWithContentProps = BoxProps & ContentTitleWithContent;

export const SlideContentTitleWithContent = forwardRef<
  SlideContentTitleWithContentProps,
  'div'
>(
  (
    { title, topRightCorner: topRightCornerContent, children, ...props },
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
      <Stack
        width="100%"
        height="100%"
        padding="3em"
        backgroundColor="brand.900"
        color="brand.100"
        alignItems="stretch"
        spacing="1em"
        overflow="hidden"
        ref={ref}
        {...props}
      >
        <StackItem>{titleWithCorner}</StackItem>
        <Flex
          flexGrow="1"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
        >
          {children}
        </Flex>
      </Stack>
    );
  }
);
