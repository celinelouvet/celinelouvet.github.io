import { Box, type BoxProps, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H1Heading, H2Heading } from '@/components/core';

import { type ContentTitle, SlideContentTypes, colorMode } from '../../types';
import { SlideContentFullContent } from '../fullContent';

type SlideContentMainTitleProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentTitle>;

export const SlideContentMainTitle: React.FC<SlideContentMainTitleProps> =
  function SlideContentMainTitle({ title, author, ...props }) {
    return (
      <SlideContentFullContent
        {...props}
        colormode={colorMode.dark}
        type={SlideContentTypes.fullContent}
      >
        <Stack
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
          gap="brand.400"
        >
          <Box>
            <Title title={title} />
          </Box>
          <Box>
            <H2Heading variant="slide">{author}</H2Heading>
          </Box>
        </Stack>
      </SlideContentFullContent>
    );
  };

const Title: React.FC<{ title: string }> = ({ title }) =>
  title.split('\n').map((line, i) => (
    <H1Heading key={i} variant="slide" textAlign="center" lineHeight="1.5">
      {line}
    </H1Heading>
  ));
