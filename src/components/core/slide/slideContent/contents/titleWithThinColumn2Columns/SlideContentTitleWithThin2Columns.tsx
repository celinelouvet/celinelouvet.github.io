import {
  HStack,
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import { H2Heading } from '@/components/core';

import { type ContentTitleWithThin2Columns } from '../../types';

type SlideContentTitleWithThin2ColumnsProps = StackProps &
  ContentTitleWithThin2Columns;

export const SlideContentTitleWithThin2Columns = forwardRef<
  SlideContentTitleWithThin2ColumnsProps,
  'div'
>(({ title, column1, column2, children, ...props }, ref) => {
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
            <HStack width="100%" height="100%" alignItems="flex-start" gap="5%">
              <StackItem width="47.5%" height="100%">
                {column2}
              </StackItem>
              <StackItem width="47.5%" height="100%">
                {children}
              </StackItem>
            </HStack>
          </StackItem>
        </Stack>
      </StackItem>
    </HStack>
  );
});
