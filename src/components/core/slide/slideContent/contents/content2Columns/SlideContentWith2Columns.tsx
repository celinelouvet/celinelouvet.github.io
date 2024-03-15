import {
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import { ColorMode, type Content2Columns } from '../../types';

type SlideContentWith2ColumnsProps = StackProps & Content2Columns;

export const SlideContentWith2Columns = forwardRef<
  SlideContentWith2ColumnsProps,
  'div'
>(({ colormode = ColorMode.light, column1, children, ...props }, ref) => {
  const backgroundColor =
    colormode === ColorMode.light ? 'brand.900' : 'brand.300';
  const color = colormode === ColorMode.light ? 'brand.100' : 'brand.900';

  return (
    <Stack
      width="100%"
      height="100%"
      padding="3em"
      backgroundColor={backgroundColor}
      color={color}
      direction="row"
      spacing="2em"
      alignItems="stretch"
      ref={ref}
      {...props}
    >
      <StackItem width="30%">{column1}</StackItem>
      <StackItem flexGrow="1">{children}</StackItem>
    </Stack>
  );
});
