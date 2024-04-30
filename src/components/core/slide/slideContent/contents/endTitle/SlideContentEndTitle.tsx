import {
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { H1Heading } from '@/components/core';

import {
  ColorMode,
  type ContentEndTitle,
  SlideContentTypes,
} from '../../types';
import { SlideContentFullContent } from '../fullContent';

type SlideContentEndTitleProps = Omit<StackProps, 'children'> & ContentEndTitle;

export const SlideContentEndTitle = forwardRef<
  SlideContentEndTitleProps,
  'div'
>((props, ref) => (
  <SlideContentFullContent
    {...props}
    colormode={ColorMode.dark}
    ref={ref}
    type={SlideContentTypes.fullContent}
  >
    <Stack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <StackItem>
        <Title title="Merci pour votre attention" />
      </StackItem>
    </Stack>
  </SlideContentFullContent>
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
