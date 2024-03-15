import {
  type BoxProps,
  Flex,
  Stack,
  StackItem,
  forwardRef,
} from '@chakra-ui/react';

import { H2Heading } from '@/components/core';

import { type ContentTitleWithContent } from '../../types';

type SlideContentTitleWithContentProps = BoxProps & ContentTitleWithContent;

export const SlideContentTitleWithContent = forwardRef<
  SlideContentTitleWithContentProps,
  'div'
>(({ title, children, ...props }, ref) => {
  return (
    <Stack
      width="100%"
      height="100%"
      padding="3em"
      backgroundColor="brand.900"
      color="brand.100"
      alignItems="stretch"
      spacing="1em"
      ref={ref}
      {...props}
    >
      <StackItem>
        <H2Heading>{title}</H2Heading>
      </StackItem>
      <Flex flexGrow="1" justifyContent="center" alignItems="flex-start">
        {children}
      </Flex>
    </Stack>
  );
});
