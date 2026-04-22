import { Box, type BoxProps, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H1Heading } from 'src/components/core';

import {
  type ContentEndTitle,
  SlideContentTypes,
  colorMode,
} from '../../types';
import { SlideContentFullContent } from '../fullContent';

type SlideContentEndTitleProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentEndTitle>;

export const SlideContentEndTitle: React.FC<SlideContentEndTitleProps> =
  function SlideContentEndTitle(props) {
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
        >
          <Box>
            <Title title="Merci pour votre attention" />
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
