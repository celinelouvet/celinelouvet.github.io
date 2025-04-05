import { Box, Stack, type StackProps } from '@chakra-ui/react';
import * as React from 'react';

import { TimeText } from '@/components/core';

type SlideNotePropsVariantProps = {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export interface SlideNoteProps
  extends Omit<StackProps, 'children'>,
    React.PropsWithChildren<SlideNotePropsVariantProps> {}

export const SlideNote = React.forwardRef<HTMLDivElement, SlideNoteProps>(
  function SlideNote(props, ref) {
    const { hours, minutes, seconds, children, ...restProps } = props;
    return (
      <Stack gap="1em" padding="3em" ref={ref} {...restProps}>
        {hours || minutes || seconds ? (
          <Box
            textAlign="center"
            backgroundColor="brand.600"
            borderRadius="md"
            paddingY="1"
          >
            <TimeText {...{ hours, minutes, seconds }} />
          </Box>
        ) : null}
        <Box lineHeight="2" fontSize="1.8em">
          {children}
        </Box>
      </Stack>
    );
  },
);
