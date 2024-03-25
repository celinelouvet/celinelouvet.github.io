import {
  Box,
  Center,
  Flex,
  Stack,
  StackItem,
  forwardRef,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { useCurrentPosition, useSlideSize } from '@/hooks';

import { type SlideDeckProps } from './SlideDeck';
import { SlideTimer } from '../slideTimer';
import { type Slide } from '../types';

const slideBorder = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'brand.600',
};

const Note: FC<{ slides: Slide[]; position: number }> = ({
  slides,
  position,
}) => (
  <>
    {slides.map(({ note }, index) => (
      <Box
        width="100%"
        height="100%"
        key={`note-${index}`}
        display={index !== position ? 'none' : ''}
        userSelect="none"
      >
        {note}
      </Box>
    ))}
  </>
);

const getSize = (preview?: boolean) => {
  if (preview) {
    return { width: 238, height: 134 };
  }
  return { width: 507, height: 285 };
};

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

export type SlideDeckForNotesProps = Omit<SlideDeckProps, 'forNotes'>;

export const SlideDeckForNotes = forwardRef<SlideDeckForNotesProps, 'div'>(
  ({ slides, ...props }, ref) => {
    const currentPosition = useCurrentPosition(slides.length);

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
