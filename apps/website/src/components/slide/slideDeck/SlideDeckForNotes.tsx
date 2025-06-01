import { Box, type BoxProps, Center, Flex, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { useCurrentPosition, useSlideSize } from './hooks';
import { type Notes } from './types';
import { SlideTimer } from '../slideTimer';
import { type Slide } from '../types';

const slideBorder = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'brand.600',
};

const getSize = (preview: boolean) => {
  if (preview) {
    const width = 400;
    const height = 200;
    return {
      width,
      height,
      ratio: width / height,
    };
  }

  const width = 686;
  const height = 385;

  return {
    width,
    height,
    ratio: width / height,
  };
};

type NoteProps = React.PropsWithChildren<{ slides: Slide[]; position: number }>;

const Note: React.FC<NoteProps> = ({ slides, position }) => (
  <>
    {slides.map(({ note }, index) => (
      <Stack
        width="100%"
        height="100%"
        key={`note-${index}`}
        display={index !== position ? 'none' : ''}
        userSelect="none"
        fontSize={'0.75em'}
      >
        {note}
      </Stack>
    ))}
  </>
);

type SlideProps = React.PropsWithChildren<{
  slides: Slide[];
  position: number;
  preview?: boolean;
}>;

const Slide: React.FC<SlideProps> = ({ slides, position, preview = false }) => {
  const size = getSize(preview);
  const contentProps = useSlideSize(size);

  const slide = slides[position];

  if (!slide) {
    return null;
  }

  return (
    <Box
      {...slideBorder}
      {...contentProps}
      fontSize={preview ? '0.5em' : '0.75em'}
    >
      {slide.content}
    </Box>
  );
};

export type SlideDeckForNotesProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<Notes>;

export const SlideDeckForNotes = React.forwardRef<
  HTMLDivElement,
  SlideDeckForNotesProps
>(function SlideDeckForNotes(props, ref) {
  const { slides, messageRoot, ...restProps } = props;

  const currentPosition = useCurrentPosition(messageRoot, slides.length);

  return (
    <Box
      width="100%"
      height="100%"
      color="brand.100"
      display="flex"
      overflow="hidden"
      {...restProps}
      ref={ref}
    >
      <Stack
        backgroundColor="brand.800"
        height="100%"
        width="50%"
        paddingX="4"
        alignItems="center"
        gap="1em"
      >
        <Box>
          <SlideTimer />
        </Box>
        <Box width="100%">
          <Center width="100%">
            <Slide slides={slides} position={currentPosition} />
          </Center>
        </Box>
        <Flex width="100%" justifyContent="flex-end" wrap="wrap">
          <Box>
            <Slide slides={slides} position={currentPosition + 1} preview />
          </Box>
        </Flex>
      </Stack>
      <Box flex="1" height="100%">
        <Note slides={slides} position={currentPosition} />
      </Box>
    </Box>
  );
});
