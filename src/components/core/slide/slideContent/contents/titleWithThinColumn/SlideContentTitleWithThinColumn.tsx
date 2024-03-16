import {
  HStack,
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import { H2Heading } from '@/components/core';

import { type ContentTitleWithThinColumn } from '../../types';

type SlideContentTitleWithThinColumnProps = StackProps &
  ContentTitleWithThinColumn;

export const SlideContentTitleWithThinColumn = forwardRef<
  SlideContentTitleWithThinColumnProps,
  'div'
>(({ title, column1, children, ...props }, ref) => {
  return (
    <HStack
      width="100%"
      height="100%"
      backgroundColor="brand.900"
      color="brand.100"
      alignItems="stretch"
      gap="0"
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
        <Stack width="100%" height="100%" gap="1em">
          <StackItem>
            <H2Heading>{title}</H2Heading>
          </StackItem>

          <StackItem width="100%" flex="1">
            {children}
          </StackItem>
        </Stack>
      </StackItem>
    </HStack>
  );
});
