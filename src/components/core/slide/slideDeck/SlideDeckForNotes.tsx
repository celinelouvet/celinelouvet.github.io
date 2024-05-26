import {
  Box,
  type BoxProps,
  Center,
  Flex,
  Stack,
  StackItem,
  forwardRef,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { useCurrentPosition, useSlideSize } from '@/hooks';

import { type Notes } from './types';
import { SlideTimer } from '../slideTimer';
import { type Slide } from '../types';

const slideBorder = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'brand.600',
};

const getSize = (preview?: boolean) => {
  if (preview) {
    const width = 238;
    const height = 134;
    return {
      width,
      height,
      ratio: width / height,
    };
  }
  const width = 507;
  const height = 285;

  return {
    width,
    height,
    ratio: width / height,
  };
};

const Note: FC<{ slides: Slide[]; position: number }> = ({
  slides,
  position,
}) => (
  <>
    {slides.map(({ note }, index) => (
      <Stack
        width="100%"
        height="100%"
        key={`note-${index}`}
        display={index !== position ? 'none' : ''}
        userSelect="none"
      >
        {note}
      </Stack>
    ))}
  </>
);

const Slide: FC<{ slides: Slide[]; position: number; preview?: boolean }> = ({
  slides,
  position,
  preview = false,
}) => {
  const size = getSize(preview);
  const contentProps = useSlideSize(size);

  return (
    <>
      {slides.map(({ content }, index) => {
        return (
          <Box
            {...contentProps}
            lineHeight="1.25em"
            key={`current-${index}`}
            display={index !== position ? 'none' : ''}
            {...slideBorder}
          >
            {content}
          </Box>
        );
      })}
    </>
  );
};

export type SlideDeckForNotesProps = Omit<BoxProps, 'children'> & Notes;

export const SlideDeckForNotes = forwardRef<SlideDeckForNotesProps, 'div'>(
  ({ slides, messageRoot, ...props }, ref) => {
    const currentPosition = useCurrentPosition(messageRoot, slides.length);

    return (
      <Flex width="100%" height="100%" color="brand.100" {...props} ref={ref}>
        <Stack
          backgroundColor="brand.800"
          height="100%"
          width="30%"
          paddingX="4"
          alignItems="center"
        >
          <StackItem>
            <SlideTimer />
          </StackItem>
          <StackItem width="100%">
            <Center width="100%">
              <Slide slides={slides} position={currentPosition} />
            </Center>
          </StackItem>
          <Flex width="100%" justifyContent="space-between" wrap="wrap">
            <Box>
              <Slide slides={slides} position={currentPosition - 1} preview />
            </Box>
            <Box>
              <Slide slides={slides} position={currentPosition + 1} preview />
            </Box>
          </Flex>
        </Stack>
        <Box width="70%" height="100%">
          <Note slides={slides} position={currentPosition} />
        </Box>
      </Flex>
    );
  }
);
