import {
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { H1Heading, H2Heading } from '@/components/core';

import { type ContentTitle } from '../../types';

type SlideContentMainTitleProps = Omit<StackProps, 'children'> & ContentTitle;

export const SlideContentMainTitle = forwardRef<
  SlideContentMainTitleProps,
  'div'
>(({ title, author, ...props }, ref) => (
  <Stack
    width="100%"
    height="100%"
    padding="3em"
    alignItems="center"
    justifyContent="center"
    backgroundColor="brand.300"
    color="brand.900"
    spacing="4em"
    ref={ref}
    {...props}
  >
    <StackItem>
      <Title title={title} />
    </StackItem>
    <StackItem>
      <H2Heading>{author}</H2Heading>
    </StackItem>
  </Stack>
));

const Title: FC<{ title: string }> = ({ title }) =>
  title.split('\n').map((line, i) => (
    <H1Heading
      key={i}
      variant="slide"
      size="lg"
      textAlign="center"
      lineHeight="1.5"
    >
      {line}
    </H1Heading>
  ));
