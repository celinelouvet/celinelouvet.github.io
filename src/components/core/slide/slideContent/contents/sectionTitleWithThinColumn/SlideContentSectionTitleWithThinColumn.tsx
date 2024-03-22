import {
  Center,
  HStack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import { H1Heading } from '@/components/core';

import { type ContentSectionTitleWithThinColumn } from '../../types';

type SlideContentSectionTitleWithThinColumnProps = Omit<
  StackProps,
  'children'
> &
  ContentSectionTitleWithThinColumn;

export const SlideContentSectionTitleWithThinColumn = forwardRef<
  SlideContentSectionTitleWithThinColumnProps,
  'div'
>(({ title, column1, ...props }, ref) => (
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
      backgroundColor="brand.700"
      color="brand.200"
    >
      <Center width="100%" height="100%">
        <H1Heading variant="slide" size="lg">
          {title}
        </H1Heading>
      </Center>
    </StackItem>
  </HStack>
));
