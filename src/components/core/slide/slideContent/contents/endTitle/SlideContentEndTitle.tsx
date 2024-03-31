import {
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { H1Heading } from '@/components/core';

import { type ContentEndTitle } from '../../types';

type SlideContentEndTitleProps = Omit<StackProps, 'children'> & ContentEndTitle;

export const SlideContentEndTitle = forwardRef<
  SlideContentEndTitleProps,
  'div'
>((props, ref) => (
  <Stack
    width="100%"
    height="100%"
    padding="3em"
    alignItems="center"
    justifyContent="center"
    backgroundColor="brand.300"
    color="brand.900"
    ref={ref}
    {...props}
  >
    <StackItem>
      <Title title="Merci pour votre attention" />
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
