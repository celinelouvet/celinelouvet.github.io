import { Box, type BoxProps, Center, Grid } from '@chakra-ui/react';
import * as React from 'react';

import { type Slide } from '../types';
import { useSlideSize, useWindowSize } from './hooks';
import { type PrintNotes } from './types';

export type SlideDeckForPrintNotesProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<PrintNotes>;

export const SlideDeckForPrintNotes = React.forwardRef<
  HTMLDivElement,
  SlideDeckForPrintNotesProps
>(function SlideDeckForPrintNotes(props, ref) {
  const { slides, ...restProps } = props;

  const windowSize = useWindowSize(ref);
  const contentProps = useSlideSize(windowSize);

  return (
    <>
      {slides.map((slide, index) => {
        return (
          <Box
            key={`content-${index}`}
            {...contentProps}
            {...restProps}
            backgroundColor="gray.900"
            ref={ref}
          >
            <Content slide={slide} />
          </Box>
        );
      })}
    </>
  );
});

type SlideProps = React.PropsWithChildren<{ slide: Slide }>;

export const Content = React.forwardRef<HTMLDivElement, SlideProps>(
  function Content(props, ref) {
    const { slide, ...restProps } = props;
    const { content, note } = slide;

    const slideBorder = {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'brand.600',
    };

    const width = 750;
    const height = 421;

    const size = {
      width,
      height,
      ratio: width / height,
    };
    const { fontSize, ...contentProps } = useSlideSize(size);

    return (
      <Grid
        templateColumns="1fr 1fr"
        width="100%"
        height="100%"
        color="brand.100"
        {...restProps}
        ref={ref}
      >
        <Box
          backgroundColor="brand.800"
          alignItems="center"
          justifyContent="center"
        >
          <Center width="100%" height="100%">
            <Box
              {...contentProps}
              fontSize={fontSize * 0.9}
              lineHeight="brand.125"
              {...slideBorder}
            >
              {content}
            </Box>
          </Center>
        </Box>
        <Box height="100%" fontSize="0.3em" backgroundColor="brand.900">
          {note}
        </Box>
      </Grid>
    );
  },
);
