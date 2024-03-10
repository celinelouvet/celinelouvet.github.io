import {
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import { TimeText } from '@/components/core';

type SlideNoteProps = StackProps & {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export const SlideNote = forwardRef<SlideNoteProps, 'div'>(
  ({ hours, minutes, seconds, children, ...props }, ref) => {
    return (
      <Stack ref={ref} {...props} gap="4">
        {hours || minutes || seconds ? (
          <StackItem
            textAlign="center"
            backgroundColor="brand.600"
            borderRadius="md"
            paddingY="1"
          >
            <TimeText {...{ hours, minutes, seconds }} />
          </StackItem>
        ) : null}
        <StackItem fontSize="2xl" lineHeight="2">
          {children}
        </StackItem>
      </Stack>
    );
  }
);
