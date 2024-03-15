import {
  HStack,
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import { H2Heading } from '@/components/core';

import { type ContentTitleWith2Columns } from '../../types';

type SlideContentTitleWith2ColumnsProps = StackProps & ContentTitleWith2Columns;

export const SlideContentTitleWith2Columns = forwardRef<
  SlideContentTitleWith2ColumnsProps,
  'div'
>(({ title, column1, children, ...props }, ref) => {
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

      <HStack width="100%" height="100%" alignItems="flex-start" gap="2%">
        <StackItem width="30%" height="100%">
          {column1}
        </StackItem>
        <StackItem width="68%" height="100%">
          {children}
        </StackItem>
      </HStack>
    </Stack>
  );
});
