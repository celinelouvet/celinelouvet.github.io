import {
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import { H1Heading } from '@/components/core';

import { type ContentSectionTitle } from '../../types';

type SlideContentSectionTitleProps = Omit<StackProps, 'children'> &
  ContentSectionTitle;

export const SlideContentSectionTitle = forwardRef<
  SlideContentSectionTitleProps,
  'div'
>(({ title, ...props }, ref) => (
  <Stack
    width="100%"
    height="100%"
    padding="3em"
    alignItems="center"
    justifyContent="center"
    backgroundColor="brand.700"
    color="brand.200"
    ref={ref}
    {...props}
  >
    <StackItem>
      <H1Heading variant="slide" size="lg">
        {title}
      </H1Heading>
    </StackItem>
  </Stack>
));
