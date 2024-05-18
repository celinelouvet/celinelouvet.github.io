import { Box, Center, Grid, forwardRef } from '@chakra-ui/react';

import { useSlideSize, useWindowSize } from '@/hooks';

import { type SlideDeckProps } from './SlideDeck';
import { type Slide } from '../types';

export type SlideDeckForPrintNotesProps = Omit<SlideDeckProps, 'view'>;

export const SlideDeckForPrintNotes = forwardRef<
  SlideDeckForPrintNotesProps,
  'div'
>(({ slides, ...props }, ref) => {
  const windowSize = useWindowSize(ref);
  const contentProps = useSlideSize(windowSize);

  return (
    <>
      {slides.map((slide, index) => {
        return (
          <Box
            key={`content-${index}`}
            {...contentProps}
            {...props}
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

export const Content = forwardRef<{ slide: Slide }, 'div'>(
  ({ slide, ...props }, ref) => {
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
        {...props}
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
              lineHeight="1.25em"
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
  }
);
