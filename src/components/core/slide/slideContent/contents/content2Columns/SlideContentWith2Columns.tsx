import {
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import {
  ColorMode,
  type Content2Columns,
  SlideContentTypes,
} from '../../types';
import { SlideContentFullContent } from '../fullContent';

type SlideContentWith2ColumnsProps = StackProps & Content2Columns;

export const SlideContentWith2Columns = forwardRef<
  SlideContentWith2ColumnsProps,
  'div'
>(({ colormode = ColorMode.light, column1, children, ...props }, ref) => {
  return (
    <SlideContentFullContent
      {...props}
      colormode={colormode}
      ref={ref}
      type={SlideContentTypes.fullContent}
    >
      <Stack
        width="100%"
        height="100%"
        direction="row"
        spacing="2em"
        alignItems="stretch"
        overflow="hidden"
      >
        <StackItem width="30%" overflow="hidden">
          {column1}
        </StackItem>
        <StackItem flexGrow="1" overflow="hidden">
          {children}
        </StackItem>
      </Stack>
    </SlideContentFullContent>
  );
});
