import {
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { H1Heading, H2Heading } from '@/components/core';

import { ColorMode, type ContentTitle, SlideContentTypes } from '../../types';
import { SlideContentFullContent } from '../fullContent';

type SlideContentMainTitleProps = Omit<StackProps, 'children'> & ContentTitle;

export const SlideContentMainTitle = forwardRef<
  SlideContentMainTitleProps,
  'div'
>(({ title, author, ...props }, ref) => (
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
      spacing="4em"
    >
      <StackItem>
        <Title title={title} />
      </StackItem>
      <StackItem>
        <H2Heading variant="slide">{author}</H2Heading>
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
